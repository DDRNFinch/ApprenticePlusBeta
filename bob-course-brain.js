(() => {
  'use strict';

  const BRAIN_VERSION='0.4.0';
  const memory={activeAssignment:null,lastIntent:null,lastMatch:null,lastTopic:null};
  const stopWords=new Set(['a','an','and','are','at','be','been','being','but','by','can','do','doing','for','from','got','have','i','im','in','is','it','me','my','of','on','or','that','the','this','to','today','we','what','with','work','working','house','site']);
  const aliases={
    'solid wall':['solid wall','solid brick','english bond','flemish bond','one brick wall'],
    'cavity':['cavity wall','cavity','insulation','wall tie','wall ties','dpc','cavity tray','weep hole','weep holes'],
    'joint':['jointing','pointing','mortar joint','bucket handle','weather struck'],
    'mortar':['mortar','mixing mortar','mix mortar','cement','sand'],
    'setting out':['setting out','set out','datum','profiles','gauge','line and level'],
    'health safety':['health and safety','health safety','ppe','rpe','risk assessment','safe working'],
    'waste':['waste','recycle','sustainability','environment'],
    'drawing':['drawing','drawings','plan','plans','specification'],
    'estimate':['estimate','estimating','quantities','quantity','materials'],
    'tools':['tools','equipment','trowel','level','mixer'],
    'repair':['repair','repoint','repointing','maintenance','replace brick']
  };

  function appState(){try{return typeof state!=='undefined'?state:null}catch{return null}}
  function appCourse(){try{return typeof COURSE!=='undefined'?COURSE:null}catch{return null}}
  function assignments(){try{return typeof courseAssignments==='function'?(courseAssignments()||[]):[]}catch{return []}}
  function progress(){try{return typeof courseProgressStats==='function'?courseProgressStats():null}catch{return null}}
  function hours(){try{return typeof otjProgressStats==='function'?otjProgressStats():null}catch{return null}}
  function epa(){try{return typeof epaReadinessStats==='function'&&!appCourse()?.nvqUnits?epaReadinessStats():null}catch{return null}}
  function isComplete(a){try{return typeof assignmentComplete==='function'?!!assignmentComplete(a?.n):false}catch{return false}}
  function learningHours(n){try{return typeof assignmentLearningHoursStats==='function'?assignmentLearningHoursStats(n):null}catch{return null}}
  function evidenceRequirement(){const n=Number(appCourse()?.evidenceRequirement||2);return Number.isFinite(n)&&n>0?n:2}
  function coverageSummary(n){
    try{
      if(appCourse()?.nvqUnits&&typeof nvqCoverageSummary==='function')return nvqCoverageSummary(n);
      if(!appCourse()?.nvqUnits&&typeof ksbCoverageSummary==='function')return ksbCoverageSummary(n);
    }catch(error){console.warn('Bob could not read evidence coverage',error)}
    return null;
  }

  function flattenStrings(value,out=[],seen=new WeakSet(),depth=0){
    if(depth>7||value==null)return out;
    if(typeof value==='string'){if(value.trim())out.push(value.trim());return out}
    if(typeof value==='number')return out;
    if(typeof value!=='object')return out;
    if(seen.has(value))return out;seen.add(value);
    if(Array.isArray(value)){value.forEach(v=>flattenStrings(v,out,seen,depth+1));return out}
    Object.entries(value).forEach(([key,v])=>{if(typeof key==='string'&&key.length<60)out.push(key);flattenStrings(v,out,seen,depth+1)});
    return out;
  }

  function normalise(s){return String(s||'').toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]+/g,' ').replace(/\s+/g,' ').trim()}
  function tokens(s){return normalise(s).split(' ').filter(x=>x.length>2&&!stopWords.has(x))}
  function assignmentInfo(a){
    const title=String(a?.title||`Evidence Pack ${a?.n||''}`).trim();
    const corpus=normalise([title,...flattenStrings(a)].join(' '));
    const codes=[...new Set((corpus.match(/\b(?:k|s|b)\d+\b/g)||[]).map(x=>x.toUpperCase()))];
    return {n:Number(a?.n)||null,title,unit:String(a?.unit||''),complete:isComplete(a),corpus,codes,raw:a};
  }
  function allAssignments(){return assignments().map(assignmentInfo)}

  function expandedTerms(message){
    const q=normalise(message),terms=new Set(tokens(q));
    Object.entries(aliases).forEach(([root,list])=>{if(list.some(phrase=>q.includes(normalise(phrase)))){terms.add(root);tokens(root).forEach(t=>terms.add(t));list.forEach(p=>tokens(p).forEach(t=>terms.add(t)))}});
    return [...terms];
  }

  function findByTitle(rows,phrases){return rows.find(row=>phrases.some(p=>normalise(row.title).includes(normalise(p))))||null}
  function directTradeMatch(message,rows){
    const q=normalise(message),nvq=!!appCourse()?.nvqUnits;
    if(nvq){
      if(/\b(cavity wall|cavity walling|blockwork|solid wall|solid walling|brick and block|brickwork)\b/.test(q)&&!/cladding|timber frame|steel frame|concrete frame|brick slip/.test(q))return findByTitle(rows,['erecting masonry structures']);
      if(/\b(cladding|brick slip|brick slips|timber frame|steel frame|concrete frame)\b/.test(q))return findByTitle(rows,['masonry cladding']);
      if(/\b(setting out|set out|datum|profiles|profile|transferring levels|transfer levels)\b/.test(q))return findByTitle(rows,['setting out to form masonry structures']);
      if(/\b(arch|arches|chimney|fireplace|curved wall|decorative|architectural|splayed)\b/.test(q))return findByTitle(rows,['architectural and decorative']);
      if(/\b(health and safety|health safety|ppe|rpe|welfare|site safety)\b/.test(q))return findByTitle(rows,['health, safety and welfare']);
      if(/\b(method of work|work method|method statement|methods of work)\b/.test(q))return findByTitle(rows,['occupational method of work']);
      if(/\b(work programme|plan the sequence|resources required|work activities and resources)\b/.test(q))return findByTitle(rows,['work activities and resources']);
      if(/\b(teamwork|working relationship|working relationships|colleagues|communication)\b/.test(q))return findByTitle(rows,['working relationships']);
      if(/\b(repair|repoint|repointing|replace brick|maintenance)\b/.test(q))return findByTitle(rows,['repairing and maintaining']);
    }else{
      if(/\b(cavity wall|cavity walling|cavity)\b/.test(q))return findByTitle(rows,['cavity walling']);
      if(/\b(solid wall|solid walling|english bond|flemish bond)\b/.test(q))return findByTitle(rows,['solid walling']);
      if(/\b(jointing|pointing|mixing mortar|mix mortar)\b/.test(q))return findByTitle(rows,['jointing','mortar']);
      if(/\b(setting out|set out|datum|profiles)\b/.test(q))return findByTitle(rows,['preparation','setting out']);
      if(/\b(repair|replace brick|protection)\b/.test(q))return findByTitle(rows,['repair']);
    }
    return null;
  }

  function matchAssignment(message){
    const q=normalise(message),terms=expandedTerms(message),rows=allAssignments();
    const epMatch=q.match(/\b(?:ep|evidence pack|assignment)\s*(\d{1,2})\b/);
    if(epMatch){const direct=rows.find(row=>row.n===Number(epMatch[1]));if(direct)return {...direct,score:100,confidence:'high',alternatives:[]}}
    const unitMatch=q.match(/\bunit\s*(\d{2,3})\b/);
    if(unitMatch){const direct=rows.find(row=>row.unit===unitMatch[1]);if(direct)return {...direct,score:100,confidence:'high',alternatives:[]}}
    const trade=directTradeMatch(message,rows);if(trade)return {...trade,score:90,confidence:'high',alternatives:[]};
    const scored=rows.map(row=>{
      let score=0,title=normalise(row.title);
      if(q&&row.corpus.includes(q))score+=10;
      if(title&&q.includes(title))score+=20;
      terms.forEach(term=>{const t=normalise(term);if(!t)return;if(title.includes(t))score+=6;else if(row.corpus.includes(t))score+=1});
      return {...row,score};
    }).sort((a,b)=>b.score-a.score);
    const best=scored[0],second=scored[1];
    if(!best||best.score<5)return null;
    if(second&&best.score-second.score<2&&best.score<12)return null;
    const confidence=best.score>=12&&(!second||best.score-second.score>=3)?'high':best.score>=7?'medium':'low';
    return {...best,confidence,alternatives:scored.slice(1,3).filter(x=>x.score>=Math.max(5,best.score-2))};
  }

  function firstName(){const p=appState()?.profile||{};return String(p.fullName||document.querySelector('.learner-progress-button')?.textContent||'').trim().split(/\s+/)[0]||'there'}
  function courseName(){return String(appCourse()?.name||appCourse()?.title||'your course')}
  function percentageFromProgress(p){
    if(!p)return null;
    for(const key of ['percentage','green','overall','evidencePercentage']){const n=Number(p[key]);if(Number.isFinite(n)&&n>=0&&n<=100)return Math.round(n)}
    const done=Number(p.ksbCompleted),total=Number(p.ksbTotal);if(Number.isFinite(done)&&Number.isFinite(total)&&total>0)return Math.round(done/total*100);
    return null;
  }
  function codeDescription(info,code){const pair=(info?.raw?.ksbs||[]).find(item=>String(item?.[0]||'').toUpperCase()===String(code||'').toUpperCase());return String(pair?.[1]||'').trim()}

  function preferredSources(code,nvq=false){
    if(nvq)return ['Photographic evidence','Video walkthrough','Witness testimony','Professional discussion','Learner statement','Uploaded evidence'];
    const type=String(code||'').charAt(0).toUpperCase();
    if(type==='S')return ['Photographic evidence','Witness testimony','Uploaded evidence'];
    if(type==='K')return ['Learner statement','Video walkthrough','Professional discussion','Uploaded evidence'];
    if(type==='B')return ['Witness testimony','Professional discussion','Uploaded evidence'];
    return ['Uploaded evidence'];
  }
  function friendlySource(source){return ({'Photographic evidence':'photos','Learner statement':'a written statement','Video walkthrough':'a short video','Professional discussion':'a recorded discussion','Witness testimony':'a witness testimony','Uploaded evidence':'supporting documents'}[source]||String(source||'another evidence type'))}

  function evidenceStatus(n){
    const info=allAssignments().find(x=>x.n===Number(n));if(!info)return null;
    const summary=coverageSummary(n),required=evidenceRequirement(),lh=learningHours(n);
    if(!summary)return {info,required,summary:null,learningHours:lh,complete:info.complete,missing:[]};
    const coverage=summary.coverage||{};
    const missing=Object.entries(coverage).filter(([,item])=>Number(item?.count||0)<required).map(([code,item])=>{
      const count=Number(item?.count||0),sources=Array.isArray(item?.sources)?item.sources.map(String):[];
      const options=preferredSources(code,!!appCourse()?.nvqUnits).filter(source=>!sources.includes(source));
      return {code,count,required,needed:Math.max(0,required-count),sources,description:codeDescription(info,code),nextSource:options[0]||null,options};
    });
    return {info,required,summary,learningHours:lh,complete:info.complete,missing};
  }

  function shortPackName(info){return info?.unit?`Unit ${info.unit}`:`EP${info?.n}`}
  function allZero(missing){return missing.length>0&&missing.every(item=>item.count===0)}
  function evidenceGapReply(n,{compact=false}={}){
    const status=evidenceStatus(n);if(!status)return `I can't read that pack at the moment.`;
    const {info,summary,missing,learningHours:lh}=status;
    if(!summary)return `I know which pack you mean, but I can't read its saved evidence properly at the moment.`;
    if(!missing.length){
      if(lh&&!lh.complete&&Number(lh.target)>0)return `Your evidence is covered for ${shortPackName(info)}. The bit still outstanding is ${appCourse()?.nvqUnits?'GLH':'OTJ'} — you're at ${Number(lh.total||0).toFixed(1)} of ${Number(lh.target||0).toFixed(1)} hours.`;
      return `${shortPackName(info)} is covered for evidence${info.complete?' and is showing as complete':''}.`;
    }
    if(appCourse()?.nvqUnits&&allZero(missing)){
      const practical=/masonry structures|masonry cladding|architectural|setting out/i.test(info.title);
      const advice=practical?`Start with the job you're doing now: get a few clear photos or a short video that shows the work properly. For masonry work, try to capture the wall itself plus things like line/level, bond, ties, insulation, DPC or trays, openings and joint finish where they apply.`:`Start with one good piece of practical evidence from the job you're doing now, then we can build the theory around it.`;
      const hours=lh&&!lh.complete&&Number(lh.target)>0?` Your ${appCourse()?.nvqUnits?'GLH':'OTJ'} is also at ${Number(lh.total||0).toFixed(1)} of ${Number(lh.target||0).toFixed(1)} hours.`:'';
      return `There isn't any counted evidence in ${shortPackName(info)} yet. ${advice}${hours}`;
    }
    const partly=missing.filter(x=>x.count>0),empty=missing.filter(x=>x.count===0);
    if(compact){
      const next=partly[0]||empty[0];
      if(!next)return `You've still got a little evidence to finish in ${shortPackName(info)}.`;
      const have=next.sources.length?`You've already got ${next.sources.map(friendlySource).join(' and ')} for ${next.code}. `:'';
      return `${missing.length} ${appCourse()?.nvqUnits?'learning outcome':'KSB'}${missing.length===1?' is':'s are'} still short. ${have}The next useful piece for ${next.code} would be ${friendlySource(next.nextSource)}.`;
    }
    const examples=missing.slice(0,3).map(item=>{
      if(item.count===0)return `${item.code} has nothing counted yet — ${friendlySource(item.nextSource)} would be a good start.`;
      return `${item.code} is ${item.count}/${item.required}; you've got ${item.sources.map(friendlySource).join(' and ')}, so add ${friendlySource(item.nextSource)}.`;
    });
    const more=missing.length>3?` There are ${missing.length-3} more after that.`:'';
    return `You've still got ${missing.length} ${appCourse()?.nvqUnits?'learning outcome':'KSB'}${missing.length===1?'':'s'} to finish in ${shortPackName(info)}. ${examples.join(' ')}${more}`;
  }

  function progressReply(){
    const p=progress(),pct=percentageFromProgress(p),rows=allAssignments(),complete=rows.filter(x=>x.complete),left=rows.filter(x=>!x.complete);
    if(pct!==null)return `You're at about ${pct}% for ${appCourse()?.nvqUnits?'learning outcomes':'KSBs'}, with ${complete.length} of ${rows.length} evidence packs complete.${left.length?` You've got ${left.length} still open.`:''}`;
    return `I can see your course, but I can't get a reliable progress percentage right now.`;
  }
  function remainingReply(){const left=allAssignments().filter(x=>!x.complete);if(!left.length)return `You haven't got any incomplete evidence packs showing.`;return `You've got ${left.length} evidence pack${left.length===1?'':'s'} still open. Tell me the pack or the job you're working on and I'll narrow it down.`}
  function listReply(){const rows=allAssignments();if(!rows.length)return `I can't read the evidence-pack list right now.`;return rows.map(x=>`${x.unit?`Unit ${x.unit}`:`EP${x.n}`} · ${x.title}${x.complete?' ✓':''}`).join('\n')}

  function topicQuestion(message,match){
    const q=normalise(message);
    if(/cavity wall|cavity walling/.test(q))return `What part are you on right now — setting out, laying the brick/block, ties and insulation, DPC/trays, an opening, or jointing?`;
    if(/solid wall|english bond|flemish bond/.test(q))return `What are you doing on it right now — setting out, laying, bonding, cutting, checking line/level, or jointing?`;
    if(/setting out|set out/.test(q))return `What are you setting out — straight lines, corners, openings, levels, profiles, or something else?`;
    if(/repair|repoint|replace brick/.test(q))return `What repair are you doing — replacing bricks, repointing, forming an opening, or something else?`;
    return `What part of the job are you doing right now?`;
  }

  function activityReply(message){
    const match=matchAssignment(message);if(!match)return null;
    memory.activeAssignment=match.n;memory.lastMatch=match;
    const q=normalise(message);memory.lastTopic=/cavity/.test(q)?'cavity':/solid wall|english bond|flemish bond/.test(q)?'solid':null;
    if(match.complete)return `That fits ${shortPackName(match)}, but you've already completed that pack. ${topicQuestion(message,match)}`;
    const label=appCourse()?.nvqUnits?`${shortPackName(match)} — ${match.title}`:`EP${match.n} — ${match.title}`;
    memory.lastIntent='activity';
    return `That fits ${label}. ${topicQuestion(message,match)}`;
  }

  function followUpReply(message){
    const active=allAssignments().find(x=>x.n===memory.activeAssignment);if(!active)return null;
    const q=normalise(message);
    if(memory.lastIntent==='activity'&&/(lay|bond|joint|set|cut|brick|block|mortar|level|plumb|gauge|tie|ties|insulation|dpc|tray|opening|lintel|weep)/.test(q)){
      memory.lastIntent='detail';
      return `Good — that's useful evidence for ${shortPackName(active)}. If you can, capture it while you're doing it rather than just the finished wall. A few clear photos or a short video will give you much stronger evidence. Want me to tell you exactly what to show?`;
    }
    if(memory.lastIntent==='detail'&&/^(yes|yeah|yep|please|go on|sure)\b/.test(q)){
      return `Show the work clearly, then include enough detail to prove what you did: line and level, bond, corners or openings, and any ties, insulation, DPC, trays or lintels that are part of the job. One wider shot plus a couple of close-ups is usually better than lots of nearly identical photos.`;
    }
    return null;
  }

  function evidenceQuestionReply(message){
    const q=normalise(message);
    const asksEvidence=/(what.*missing|what.*need|need.*evidence|missing.*evidence|evidence.*missing|have i got enough|enough evidence|what should i collect|what should i get|check.*evidence|evidence.*left)/.test(q);
    if(!asksEvidence)return null;
    const explicit=matchAssignment(message),n=explicit?.n||memory.activeAssignment;
    if(!n)return `Which job or evidence pack do you mean?`;
    if(explicit){memory.activeAssignment=explicit.n;memory.lastMatch=explicit}
    memory.lastIntent='evidence-gap';
    return evidenceGapReply(n);
  }

  function reply(message){
    const q=normalise(message);if(!q)return `What are you working on?`;
    if(/^(hi|hello|hey|morning|afternoon|evening)\b/.test(q))return `Hi ${firstName()}. What are you working on today?`;
    if(/how far|progress|percentage|percent|through my course|course progress/.test(q)){memory.lastIntent='progress';return progressReply()}
    const evidenceQuestion=evidenceQuestionReply(message);if(evidenceQuestion)return evidenceQuestion;
    if(/what.*left|still need|need to do|incomplete|not complete|outstanding|remaining/.test(q)){memory.lastIntent='remaining';return remainingReply()}
    if(/list.*(pack|assignment)|show.*(pack|assignment)|evidence packs|my assignments/.test(q)){memory.lastIntent='list';return listReply()}
    const follow=followUpReply(message);if(follow)return follow;
    const activity=activityReply(message);if(activity)return activity;
    if(/photo|picture|camera|video/.test(q))return `Tell me what the photo or video is showing and I'll match it to the right part of your course.`;
    return `Tell me a bit more about the job itself — what are you building, repairing, setting out or fitting?`;
  }

  function snapshot(){const p=progress(),h=hours(),e=epa();return {version:BRAIN_VERSION,learner:firstName(),course:courseName(),nvq:!!appCourse()?.nvqUnits,progress:p,hours:h,epa:e,assignments:allAssignments().map(({n,title,unit,complete,codes})=>({n,title,unit,complete,codes})),memory:{...memory}}}
  window.BobCourseBrain={version:BRAIN_VERSION,reply,snapshot,matchAssignment,evidenceStatus,getAssignments:()=>allAssignments().map(({n,title,unit,complete,codes})=>({n,title,unit,complete,codes})),reset:()=>{memory.activeAssignment=null;memory.lastIntent=null;memory.lastMatch=null;memory.lastTopic=null}};
})();