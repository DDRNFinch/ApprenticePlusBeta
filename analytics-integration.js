(function(){
'use strict';
const A=()=>window.ApprenticeAnalytics;
let currentScreen='unknown';
let screenEnteredAt=Date.now();
const startedScreens=new Map();
const DAILY_KEY='apprenticeplus.analytics.daily.v1';
const OWNER_STATS_KEY='apprenticeplus.analytics.ownerStats.v1';
function readDaily(){try{const d=JSON.parse(localStorage.getItem(DAILY_KEY)||'{}');return d&&typeof d==='object'?d:{}}catch{return {}}}
function writeDaily(d){try{localStorage.setItem(DAILY_KEY,JSON.stringify(d))}catch{}}
function dayKey(){return new Date().toISOString().slice(0,10)}
function countDaily(metric){const all=readDaily(),day=dayKey();if(!all[day])all[day]={};all[day][metric]=(all[day][metric]||0)+1;Object.keys(all).sort().slice(0,-7).forEach(k=>delete all[k]);writeDaily(all)}
function sendDailySummary(){const all=readDaily(),day=dayKey(),d=all[day]||{};if(!Object.keys(d).length)return;track('engagement_summary',{day_offset:0,screen_views:d.screen_views||0,ui_actions:d.ui_actions||0,assessments_started:d.assessments_started||0,assessments_completed:d.assessments_completed||0,exports:d.exports||0,tool_opens:d.tool_opens||0,evidence_actions:d.evidence_actions||0});}
const SAFE_DATA_KEYS=['action','view','tab','section','subject','type','tool','difficulty','scale','course','n','mode','kind','status'];
const RESULT_SCREENS=new Set(['trade_result','functional_result','epa_result','epa_discussion_result','epa_results','knowledge_result']);
const TEST_SCREENS=new Set(['trade_test','functional_test','epa_test','epa_discussion','epa_practical','knowledge_test']);
function slug(value,max=80){return String(value??'').toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_+|_+$/g,'').slice(0,max)||'unknown'}
function readOwnerStats(){try{const x=JSON.parse(localStorage.getItem(OWNER_STATS_KEY)||'{}');return x&&typeof x==='object'?x:{days:{},recent:[]}}catch{return {days:{},recent:[]}}}
function writeOwnerStats(x){try{localStorage.setItem(OWNER_STATS_KEY,JSON.stringify(x))}catch{}}
function friendlyActivity(name,params={}){
 const feature=String(params.feature||params.screen||params.assessment_type||params.document_type||'').replace(/_/g,' ');
 const labels={session_start:'App session started',session_end:'App session ended',assessment_started:feature?`${feature} started`:'Assessment started',assessment_completed:feature?`${feature} completed`:'Assessment completed',document_export:feature?`${feature} exported`:'Document exported',app_update:'App updated',first_open:'First app use',javascript_error:'Technical error detected',promise_rejection:'Technical error detected'};
 return labels[name]||'';
}
function recordOwnerStat(name,params={}){
 const all=readOwnerStats(),day=dayKey();all.days=all.days||{};const d=all.days[day]||(all.days[day]={events:0,sessions:0,seconds:0,screenViews:0,testsStarted:0,testsCompleted:0,exports:0,evidence:0,tools:{},screens:{},features:{},errors:0});d.events++;
 if(name==='session_start')d.sessions++;
 if(name==='session_end')d.seconds+=Math.max(0,Number(params.duration_seconds||0));
 if(name==='screen_view'||name.endsWith('_opened')){d.screenViews++;const screen=slug(params.screen||name.replace(/_opened$/,''));d.screens[screen]=(d.screens[screen]||0)+1;}
 if(name==='assessment_started')d.testsStarted++;
 if(name==='assessment_completed')d.testsCompleted++;
 if(name==='document_export')d.exports++;
 const feature=slug(params.feature||params.screen||params.assessment_type||params.document_type||'');
 if(feature){d.features[feature]=(d.features[feature]||0)+1;if(['measuremate','materialmate','drawingmate','feedbackmate','projectmate','otjmate','notemate','notepad'].includes(feature))d.tools[feature]=(d.tools[feature]||0)+1;}
 if(name.endsWith('_submitted')||name.endsWith('_saved')){if(['photographic_evidence','learner_statement','video_walkthrough','witness_testimony','professional_discussion','practical_assessment'].includes(feature))d.evidence++;}
 if(name==='javascript_error'||name==='promise_rejection')d.errors++;
 const text=friendlyActivity(name,params);if(text){all.recent=all.recent||[];all.recent.unshift({text,at:new Date().toISOString()});all.recent=all.recent.slice(0,20);}
 Object.keys(all.days).sort().slice(0,-30).forEach(k=>delete all.days[k]);writeOwnerStats(all);
}
function ownerUsageSummary(){
 const all=readOwnerStats(),keys=Object.keys(all.days||{}).sort().slice(-7),today=all.days?.[dayKey()]||{};const total={events:0,sessions:0,seconds:0,screenViews:0,testsStarted:0,testsCompleted:0,exports:0,evidence:0,tools:{},screens:{},features:{},errors:0};
 keys.forEach(k=>{const d=all.days[k]||{};['events','sessions','seconds','screenViews','testsStarted','testsCompleted','exports','evidence','errors'].forEach(x=>total[x]+=Number(d[x]||0));['tools','screens','features'].forEach(group=>Object.entries(d[group]||{}).forEach(([n,v])=>total[group][n]=(total[group][n]||0)+Number(v||0)));});
 const top=o=>Object.entries(o||{}).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([name,count])=>({name,count}));
 return {today,sevenDays:total,topTools:top(total.tools),topScreens:top(total.screens),topFeatures:top(total.features),recent:(all.recent||[]).slice(0,10),daysTracked:keys.length};
}
function clearOwnerUsage(){try{localStorage.removeItem(OWNER_STATS_KEY)}catch{}return true}
function track(name,params){try{recordOwnerStat(name,params||{});return A()?.trackEvent?.(name,params)}catch{return false}}
function safeDataset(el){const out={};if(!el?.dataset)return out;SAFE_DATA_KEYS.forEach(k=>{if(el.dataset[k]!=null&&el.dataset[k]!=='')out[k]=slug(el.dataset[k])});return out}
function controlId(el){return slug(el?.id||el?.getAttribute?.('name')||el?.getAttribute?.('role')||el?.tagName||'control')}
function controlType(el){if(!el)return'unknown';if(el.matches?.('a'))return el.hasAttribute('download')?'download_link':'link';if(el.matches?.('button'))return'button';if(el.matches?.('select'))return'select';if(el.matches?.('textarea'))return'textarea';if(el.matches?.('input'))return slug(el.type||'input');return slug(el.tagName||'control')}
function actionFrom(el){const id=controlId(el);const words=['submit','save','start','finish','complete','download','export','generate','open','close','pause','resume','delete','remove','add','record','play','print','search','select','view','retry','retake','install','update','send','upload'];return words.find(w=>id.includes(w))||'activate'}
function semanticFeature(el){const id=controlId(el);const classes=slug(el?.className||'');const combined=id+'_'+classes;const map=[['drawingmate','drawingmate'],['materialmate','materialmate'],['measuremate','measuremate'],['projectmate','projectmate'],['notepad','notemate'],['notemate','notemate'],['otj','otjmate'],['feedback','feedbackmate'],['certificate','certificates'],['functional','functional_skills'],['trade','trade_courses'],['epa','epa'],['walkthrough','video_walkthrough'],['witness','witness_testimony'],['discussion','professional_discussion'],['practical','practical_assessment'],['photo','photographic_evidence'],['statement','learner_statement'],['assignment','assignment'],['portfolio','portfolio'],['search','search'],['settings','settings'],['reward','rewards']];for(const [needle,value] of map)if(combined.includes(needle))return value;return currentScreen}
function screenCategory(screen){if(screen.startsWith('epa'))return'epa';if(screen.startsWith('functional'))return'functional_skills';if(screen.startsWith('trade'))return'trade_courses';if(screen.includes('knowledge'))return'knowledge';if(['measuremate','materialmate','drawingmate','feedbackmate','projectmate','otjmate','notepad','resources','tools'].includes(screen))return'toolbox';if(['assignment','section','walkthrough'].includes(screen))return'evidence';return screen}
const CORE_SCREEN_EVENTS={home:'home_opened',tools:'toolbox_opened',resources:'toolbox_opened',academy:'academy_opened','trade-courses':'trade_courses_opened',library:'trade_courses_opened','functional-skills':'functional_skills_opened',epa:'epa_opened','epa-results':'epa_results_opened',certificates:'certificates_opened',measuremate:'measuremate_opened',materialmate:'materialmate_opened',drawingmate:'drawingmate_opened',projectmate:'projectmate_opened',otjmate:'otjmate_opened',notepad:'notemate_opened',feedbackmate:'feedbackmate_opened'};
const ASSESSMENT_NAMES={'trade-test':'trade_course','trade-result':'trade_course','functional-test':'functional_skills','functional-result':'functional_skills','epa-test':'epa_knowledge','epa-result':'epa_knowledge','epa-discussion':'epa_discussion','epa-discussion-result':'epa_discussion','epa-practical':'epa_practical','knowledge-test':'assignment_knowledge','knowledge-result':'assignment_knowledge'};
function validEventName(value){let n=slug(value,40);if(!/^[a-z]/.test(n))n='event_'+n;return n.slice(0,40)}
function sendNamedEvent(name,params){return track(validEventName(name),params)}
function coreActionEvent(info){
 const f=slug(info.feature||'unknown'),a=slug(info.action||'activate');
 if(f==='unknown'||f==='current_screen')return'';
 const useful=new Set(['open','start','finish','complete','submit','send','save','download','export','generate','pause','resume','retry','retake','install','update','search','record','play','print','upload','select']);
 if(!useful.has(a))return'';
 return validEventName(f+'_'+(a==='finish'?'completed':a));
}
function screenTransition(nextRaw){
 const next=slug(nextRaw);
 const now=Date.now();
 if(currentScreen!==next){
  if(currentScreen!=='unknown')sendNamedEvent(currentScreen+'_closed',{screen:currentScreen,category:screenCategory(currentScreen),duration_seconds:Math.max(1,Math.round((now-screenEnteredAt)/1000))});
  currentScreen=next;screenEnteredAt=now;sendNamedEvent(CORE_SCREEN_EVENTS[next]||next+'_opened',{screen:next,category:screenCategory(next)});countDaily('screen_views');if(screenCategory(next)==='toolbox')countDaily('tool_opens');
 }
 if(next==='home')setTimeout(detectAssignmentCompletions,0);
 if(TEST_SCREENS.has(next)&&!startedScreens.has(next)){startedScreens.set(next,now);const assessment=ASSESSMENT_NAMES[next]||next;sendNamedEvent(assessment+'_started',{assessment_type:assessment});countDaily('assessments_started');}
 if(RESULT_SCREENS.has(next)){const source=next.replace(/_result(s)?$/,'_test');const started=startedScreens.get(source)||startedScreens.get(next.replace('_result',''))||now;const assessment=ASSESSMENT_NAMES[next]||next;const duration=Math.max(1,Math.round((now-started)/1000));sendNamedEvent(assessment+'_completed',{assessment_type:assessment,duration_seconds:duration});countDaily('assessments_completed');startedScreens.delete(source);}
}
function installScreenHook(){
 const original=A()?.trackScreen;
 if(typeof original!=='function')return;
 const wrapped=function(name){const result=original.call(A(),name);screenTransition(name);return result};
 A().trackScreen=wrapped;window.trackScreen=wrapped;
}
function clickHandler(event){
 const el=event.target?.closest?.('button,a,[role="button"],input[type="button"],input[type="submit"],label[data-action],[data-action]');if(!el)return;
 const info={screen:currentScreen,category:screenCategory(currentScreen),control_id:controlId(el),control_type:controlType(el),action:actionFrom(el),feature:semanticFeature(el),...safeDataset(el)};
 const named=coreActionEvent(info);if(named)sendNamedEvent(named,{feature:info.feature,action:info.action,screen:currentScreen});countDaily('ui_actions');if(['photographic_evidence','learner_statement','video_walkthrough','witness_testimony','professional_discussion','practical_assessment'].includes(info.feature))countDaily('evidence_actions');
 const action=info.action,feature=info.feature;
 if(['download','export','print'].includes(action)||el.hasAttribute?.('download')){sendNamedEvent(feature+'_exported',{screen:currentScreen,feature,action});countDaily('exports');}
 if(action==='search')sendNamedEvent(feature+'_searched',{screen:currentScreen,feature});
}
function changeHandler(event){
 const el=event.target;if(!el?.matches?.('input,select,textarea'))return;
 const params={screen:currentScreen,field_id:controlId(el),field_type:controlType(el),feature:semanticFeature(el),...safeDataset(el)};
 if(el.type==='file'){params.file_count=Number(el.files?.length||0);params.file_category=(el.accept||'').includes('video')?'video':(el.accept||'').includes('image')?'image':(el.accept||'').includes('audio')?'audio':'file';sendNamedEvent(params.feature+'_file_added',params);return;}
 if(el.type==='checkbox'||el.type==='radio'){params.state=el.checked?'on':'off';sendNamedEvent(params.feature+'_setting_changed',{feature:params.feature,state:params.state,screen:currentScreen});return;}
 if(el.matches('select')){params.option_index=Math.max(0,el.selectedIndex);sendNamedEvent(params.feature+'_option_selected',{feature:params.feature,screen:currentScreen,option_index:params.option_index});}
}
function submitHandler(event){const form=event.target;if(!form?.matches?.('form'))return;const feature=semanticFeature(form);sendNamedEvent(feature+'_form_submitted',{screen:currentScreen,feature});}
function mediaHandler(event){const el=event.target;if(!el?.matches?.('video,audio'))return;const feature=semanticFeature(el);sendNamedEvent(feature+'_'+event.type,{screen:currentScreen,feature,media_type:el.tagName.toLowerCase(),duration_seconds:Number.isFinite(el.duration)?Math.round(el.duration):0});}

const COURSE_COMPLETION_KEY='apprenticeplus.analytics.courseCompletions.v1';
function completionState(){try{const x=JSON.parse(localStorage.getItem(COURSE_COMPLETION_KEY)||'{}');return x&&typeof x==='object'?x:{}}catch{return {}}}
function writeCompletionState(x){try{localStorage.setItem(COURSE_COMPLETION_KEY,JSON.stringify(x))}catch{}}
function courseId(){try{return slug(window.COURSE?.id||window.ACTIVE_COURSE_ID||'current_course')}catch{return'current_course'}}
function detectAssignmentCompletions(){
 try{
  const seen=completionState(),cid=courseId();seen[cid]=seen[cid]||{};
  document.querySelectorAll('.assignment-card[data-open]').forEach(card=>{
   const n=Math.max(0,Number(card.dataset.open||0));if(!n)return;
   const complete=card.classList.contains('complete')||card.classList.contains('rpl');
   if(complete&&!seen[cid][n]){seen[cid][n]=true;sendNamedEvent('assignment_completed',{course_id:cid,assignment_number:n,completion_type:card.classList.contains('rpl')?'rpl':'evidence'});}
  });
  writeCompletionState(seen);
 }catch{}
}
function courseAnalyticsClick(event){
 const el=event.target?.closest?.('button,a,[role="button"]');if(!el)return;
 const cid=courseId();
 if(el.matches?.('.assignment-card[data-open]'))sendNamedEvent('assignment_opened',{course_id:cid,assignment_number:Math.max(0,Number(el.dataset.open||0)),source:'course_home'});
 if(el.id==='openWorkSearch')sendNamedEvent('assignment_search_opened',{course_id:cid});
 if(el.id==='workSearchButton')sendNamedEvent('assignment_search_performed',{course_id:cid,search_source:'typed'});
 if(el.matches?.('[data-work-suggestion]'))sendNamedEvent('assignment_search_suggestion_used',{course_id:cid});
 if(el.matches?.('[data-work-assignment]')){const n=Math.max(0,Number(el.dataset.workAssignment||0));sendNamedEvent('assignment_search_result_opened',{course_id:cid,assignment_number:n});sendNamedEvent('assignment_opened',{course_id:cid,assignment_number:n,source:'search'});}
 if(el.id==='courseProgressBtn')sendNamedEvent('course_progress_viewed',{course_id:cid});
 if(el.id==='applyCourse'){const selected=document.getElementById('courseSelect')?.value||'';sendNamedEvent('course_selected',{course_id:slug(selected||cid),selection_source:'admin'});}
 if(el.matches?.('[data-settings-tab]'))sendNamedEvent('settings_section_opened',{settings_section:slug(el.dataset.settingsTab||'unknown')});
 if(el.matches?.('[data-open-certificate]')){const key=String(el.dataset.openCertificate||'');sendNamedEvent('certificate_viewed',{certificate_type:slug(key.split(':')[0]||'unknown')});}
 if(el.id==='printCertificate')sendNamedEvent('certificate_exported',{export_type:'print_or_pdf'});
 if(el.id==='openCertificates')sendNamedEvent('certificate_library_opened',{});
 if(el.id==='openSettings')sendNamedEvent('settings_opened',{});
 if(el.id==='learnerProgressBtn')sendNamedEvent('learner_profile_opened',{});
 if(el.id==='downloadEntirePortfolio')sendNamedEvent('portfolio_export_started',{course_id:cid});
}

function installDownloadHooks(){
 const originalPrint=window.print;window.print=function(){sendNamedEvent(currentScreen+'_pdf_exported',{screen:currentScreen,export_type:'print_or_pdf'});return originalPrint.apply(this,arguments)};
 const originalOpen=window.open;window.open=function(url,target,features){try{const u=String(url||'');if(u.startsWith('blob:')||/\.pdf($|\?)/i.test(u))sendNamedEvent(currentScreen+'_document_opened',{screen:currentScreen,document_type:'generated_document'})}catch{}return originalOpen.apply(this,arguments)};
}
function installLifecycle(){
 document.addEventListener('click',clickHandler,true);document.addEventListener('click',courseAnalyticsClick,true);document.addEventListener('change',changeHandler,true);document.addEventListener('submit',submitHandler,true);
 ['play','pause','ended'].forEach(type=>document.addEventListener(type,mediaHandler,true));
 window.addEventListener('beforeinstallprompt',()=>track('install_prompt_shown'));
 window.addEventListener('appinstalled',()=>track('app_installed'));
 window.addEventListener('apprenticeplus:update-ready',()=>track('update_available'));
 document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')sendNamedEvent(currentScreen+'_closed',{screen:currentScreen,category:screenCategory(currentScreen),duration_seconds:Math.max(1,Math.round((Date.now()-screenEnteredAt)/1000))})});
}
function init(){if(!A()){setTimeout(init,100);return}installScreenHook();installDownloadHooks();installLifecycle();window.ApprenticeAnalytics.getUsageSummary=ownerUsageSummary;window.ApprenticeAnalytics.clearUsageSummary=clearOwnerUsage;A()?.setUserProperties?.({analytics_level:'full_anonymous',integration_version:'v1_5_66'});window.addEventListener('pagehide',sendDailySummary);document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')sendDailySummary()});track('analytics_integration_ready',{coverage:'named_events_cleanup_complete'});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
