(() => {
'use strict';
const VERSION='0.12.0';
const KEY='apprenticeplus.bob.evidencePlanner.v1';
let session=load();
function load(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch{return{}}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(session))}catch{}}
function reset(){session={};save()}
function snap(){try{return window.BobCourseBrain?.snapshot?.()||null}catch{return null}}
function active(){return Number(snap()?.memory?.activeAssignment)||null}
function ass(n){try{return typeof assignment==='function'?assignment(n):null}catch{return null}}
function isNvq(){try{return !!COURSE?.nvqUnits}catch{return false}}
function short(a){return a?.unit?`Unit ${a.unit}`:`EP${a?.n||''}`}
function req(){const n=Number(COURSE?.evidenceRequirement||2);return Number.isFinite(n)&&n>0?n:2}
function summary(n){try{return isNvq()&&typeof nvqCoverageSummary==='function'?nvqCoverageSummary(n):!isNvq()&&typeof ksbCoverageSummary==='function'?ksbCoverageSummary(n):null}catch{return null}}
function getSession(n){const key=String(n);if(!session[key])session[key]={assignment:n,photos:0,video:0,audio:0,written:0,lastSuggested:'',updatedAt:Date.now()};return session[key]}
function sourceLabel(source){return({'Photographic evidence':'photos','Video walkthrough':'a short video','Learner statement':'a written statement','Professional discussion':'an audio discussion','Witness testimony':'a witness testimony','Uploaded evidence':'supporting documents'}[source]||String(source||'evidence'))}
function preferred(code){if(isNvq())return['Photographic evidence','Video walkthrough','Professional discussion','Learner statement','Witness testimony','Uploaded evidence'];const c=String(code||'')[0]?.toUpperCase();if(c==='S')return['Photographic evidence','Video walkthrough','Witness testimony','Uploaded evidence'];if(c==='K')return['Learner statement','Professional discussion','Video walkthrough','Uploaded evidence'];if(c==='B')return['Professional discussion','Witness testimony','Video walkthrough','Uploaded evidence'];return['Uploaded evidence']}
function missing(n){const a=ass(n),s=summary(n);if(!a||!s)return[];const r=req(),coverage=s.coverage||{};return Object.entries(coverage).map(([code,item])=>({code,count:Number(item?.count||0),sources:Array.isArray(item?.sources)?item.sources.map(String):[]})).filter(x=>x.count<r).map(x=>({...x,needed:r-x.count,options:preferred(x.code).filter(p=>!x.sources.includes(p))}))}
function contextualHint(a){const text=String(snap()?.memory?.lastTopic||'').toLowerCase();if(/joint|point/.test(text))return 'jointing';if(/tie|insulat|cavity/.test(text))return 'wall ties/insulation';if(/dpc|damp/.test(text))return 'DPC';if(/bond|solid wall|english|flemish/.test(text))return 'bonding';if(/level|plumb|line|gauge/.test(text))return 'line, level and plumb checks';return a?.title||'the work you are doing'}
function choose(n){const a=ass(n),gaps=missing(n),s=getSession(n);if(!a)return null;if(!gaps.length)return{done:true,text:`That's enough evidence for ${short(a)} from what I can see. You don't need to keep collecting the same thing.`};
 const partial=gaps.filter(x=>x.count>0),empty=gaps.filter(x=>x.count===0),target=partial[0]||empty[0];if(!target)return null;
 const option=target.options[0]||'Uploaded evidence';let action='';const topic=contextualHint(a);
 if(option==='Photographic evidence')action=`Take 2–3 clear photos of ${topic}: one wider view, one close detail, and one showing a check or important component.`;
 else if(option==='Video walkthrough')action=`Record one short video showing ${topic}. Talk through what you're doing and finish by showing your checks.`;
 else if(option==='Learner statement')action=`Write a short statement in your own words explaining what you did, why you did it that way, and what checks you made.`;
 else if(option==='Professional discussion')action=`Record a short audio explanation of ${topic}: what you did, why, and how you checked it.`;
 else if(option==='Witness testimony')action=`Ask someone who saw the work to verify what you personally did for ${target.code}.`;
 else action=`Add ${sourceLabel(option)} that clearly relates to ${target.code}.`;
 return{done:false,target,option,text:`Next best step for ${short(a)}: ${action}`}}
function statusText(n){const a=ass(n),gaps=missing(n),s=getSession(n);if(!a)return null;if(!gaps.length)return `${short(a)} is covered for evidence.`;const bits=[];if(s.photos)bits.push(`${s.photos} photo${s.photos===1?'':'s'} collected with Bob`);if(s.video)bits.push(`${s.video} video`);if(s.audio)bits.push(`${s.audio} audio`);if(s.written)bits.push(`${s.written} written draft`);const done=bits.length?`Today I've got ${bits.join(', ')}. `:'';return `${done}${gaps.length} ${isNvq()?'learning outcome':'KSB'}${gaps.length===1?' is':'s are'} still short in ${short(a)}.`}
function intent(text){const q=String(text||'').toLowerCase();if(/\b(what next|what do i need next|what should i do next|next evidence|what evidence next|what am i missing|what do i still need|what else do i need)\b/.test(q))return'next';if(/\b(enough evidence|have i got enough|is that enough|done for today|anything else today)\b/.test(q))return'enough';if(/\b(today's evidence|todays evidence|what have i got today|session checklist|evidence checklist)\b/.test(q))return'status';return null}
async function handle(text){const type=intent(text);if(!type)return null;const n=active();if(!n)return'Tell me what you are working on first and I can plan the evidence with you.';if(type==='status')return statusText(n);const plan=choose(n);if(!plan)return null;if(type==='enough'&&!plan.done)return `Not quite. ${plan.text}`;return plan.text}
function markEvidence(detail={}){const n=Number(detail.assignment||active());if(!n)return;const s=getSession(n),type=String(detail.type||'').toLowerCase(),count=Math.max(1,Number(detail.count)||1);if(type==='photo')s.photos+=count;else if(type==='video')s.video+=count;else if(type==='audio')s.audio+=count;else if(type==='written')s.written+=count;s.updatedAt=Date.now();save()}
window.addEventListener('bob:evidence-saved',e=>markEvidence(e.detail||{}));
window.BobEvidencePlanner={version:VERSION,handle,intent,choose,status:()=>{const n=active();return n?statusText(n):null},markEvidence,reset};
})();