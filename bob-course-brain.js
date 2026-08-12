(() => {
  'use strict';

  const BRAIN_VERSION='0.2.0';
  const memory={activeAssignment:null,lastIntent:null,lastMatch:null};
  const stopWords=new Set(['a','an','and','are','at','be','been','being','but','by','can','do','doing','for','from','got','have','i','im','in','is','it','me','my','of','on','or','that','the','this','to','today','we','what','with','work','working']);
  const aliases={
    'solid wall':['solid wall','solid brick','english bond','flemish bond','one brick wall'],
    'cavity':['cavity wall','cavity','insulation','wall tie','wall ties','dpc','cavity tray'],
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

  function flattenStrings(value,out=[],seen=new WeakSet(),depth=0){
    if(depth>7||value==null)return out;
    if(typeof value==='string'){if(value.trim())out.push(value.trim());return out}
    if(typeof value==='number'){return out}
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
    return {n:Number(a?.n)||null,title,complete:isComplete(a),corpus,codes,raw:a};
  }
  function allAssignments(){return assignments().map(assignmentInfo)}

  function expandedTerms(message){
    const q=normalise(message),terms=new Set(tokens(q));
    Object.entries(aliases).forEach(([root,list])=>{if(list.some(phrase=>q.includes(normalise(phrase)))){terms.add(root);tokens(root).forEach(t=>terms.add(t));list.forEach(p=>tokens(p).forEach(t=>terms.add(t)))}});
    return [...terms];
  }

  function matchAssignment(message){
    const q=normalise(message),terms=expandedTerms(message),rows=allAssignments();
    const scored=rows.map(row=>{
      let score=0;
      if(q&&row.corpus.includes(q))score+=14;
      if(row.title&&q.includes(normalise(row.title)))score+=18;
      terms.forEach(term=>{
        const t=normalise(term);if(!t)return;
        if(normalise(row.title).includes(t))score+=5;
        else if(row.corpus.includes(t))score+=2;
      });
      Object.entries(aliases).forEach(([root,list])=>{
        if(!list.some(p=>q.includes(normalise(p))))return;
        if(row.corpus.includes(normalise(root)))score+=8;
        list.forEach(p=>{if(row.corpus.includes(normalise(p)))score+=2});
      });
      return {...row,score};
    }).sort((a,b)=>b.score-a.score);
    const best=scored[0],second=scored[1];
    if(!best||best.score<4)return null;
    const confidence=best.score>=10&&(!second||best.score-second.score>=3)?'high':best.score>=6?'medium':'low';
    return {...best,confidence,alternatives:scored.slice(1,3).filter(x=>x.score>=Math.max(4,best.score-3))};
  }

  function firstName(){const p=appState()?.profile||{};return String(p.fullName||document.querySelector('.learner-progress-button')?.textContent||'').trim().split(/\s+/)[0]||'there'}
  function courseName(){return String(appCourse()?.name||appCourse()?.title||'your course')}
  function percentageFromProgress(p){
    if(!p)return null;
    for(const key of ['percentage','green','overall','evidencePercentage']){const n=Number(p[key]);if(Number.isFinite(n)&&n>=0&&n<=100)return Math.round(n)}
    const done=Number(p.ksbCompleted),total=Number(p.ksbTotal);if(Number.isFinite(done)&&Number.isFinite(total)&&total>0)return Math.round(done/total*100);
    return null;
  }

  function progressReply(){
    const p=progress(),pct=percentageFromProgress(p),rows=allAssignments(),complete=rows.filter(x=>x.complete),left=rows.filter(x=>!x.complete);
    const bits=[];
    if(pct!==null)bits.push(`You're ${pct}% through your ${appCourse()?.nvqUnits?'Learning Outcomes':'KSB'} progress.`);
    if(rows.length)bits.push(`${complete.length} of ${rows.length} evidence packs are complete.`);
    if(left.length){const next=left.slice(0,3).map(x=>`EP${x.n} ${x.title}`).join(', ');bits.push(`Still open: ${next}${left.length>3?` and ${left.length-3} more`:''}.`)}
    return bits.length?bits.join(' '):`I can see ${courseName()}, but I can't read a reliable progress figure yet.`;
  }

  function remainingReply(){
    const left=allAssignments().filter(x=>!x.complete);
    if(!left.length)return `From the evidence-pack status I can read, you don't currently have any incomplete evidence packs.`;
    const names=left.slice(0,6).map(x=>`EP${x.n} ${x.title}`).join(', ');
    return `You've got ${left.length} evidence pack${left.length===1?'':'s'} still open: ${names}${left.length>6?` and ${left.length-6} more`:''}. Tell me what you're doing at work and I'll try to match it to one of these.`;
  }

  function listReply(){const rows=allAssignments();if(!rows.length)return `I can't read the evidence-pack list yet.`;return rows.map(x=>`EP${x.n} ${x.title}${x.complete?' ✓':''}`).join('\n')}

  function activityReply(message){
    const match=matchAssignment(message);if(!match)return null;
    memory.activeAssignment=match.n;memory.lastMatch=match;
    const prefix=match.complete?`That matches EP${match.n} ${match.title}, which is already marked complete.`:`That looks like EP${match.n} ${match.title}.`;
    const solid=/solid wall|solid brick|english bond|flemish bond/.test(normalise(message))||/solid wall/.test(normalise(match.title));
    if(solid){memory.lastIntent='solid-wall';return `${prefix} What are you doing on the wall right now — setting out, laying, bonding, jointing, cutting, or something else?`}
    return `${prefix} Tell me a little more about what you're doing and I'll work out what evidence would be useful to collect.`;
  }

  function followUpReply(message){
    const active=allAssignments().find(x=>x.n===memory.activeAssignment);if(!active)return null;
    const q=normalise(message);
    if(memory.lastIntent==='solid-wall'&&/(lay|bond|joint|set|cut|brick|mortar|level|plumb|gauge)/.test(q)){
      memory.lastIntent='evidence';
      return `Yes — that sounds useful for EP${active.n} ${active.title}. The next brain upgrade is to let me check the actual evidence already saved in that pack, then ask only for what you're missing. For now, a clear photo or short video of that activity would be useful evidence.`;
    }
    return null;
  }

  function reply(message){
    const q=normalise(message);memory.lastIntent=memory.lastIntent||null;
    if(!q)return `Tell me what you're working on.`;
    if(/^(hi|hello|hey|morning|afternoon|evening)\b/.test(q))return `Hi ${firstName()}. Tell me what you're working on and I'll match it to your actual ${courseName()} course.`;
    if(/how far|progress|percentage|percent|through my course|course progress/.test(q)){memory.lastIntent='progress';return progressReply()}
    if(/what.*left|still need|need to do|incomplete|not complete|outstanding|remaining/.test(q)){memory.lastIntent='remaining';return remainingReply()}
    if(/list.*(pack|assignment)|show.*(pack|assignment)|evidence packs|my assignments/.test(q)){memory.lastIntent='list';return listReply()}
    const follow=followUpReply(message);if(follow)return follow;
    const activity=activityReply(message);if(activity){memory.lastIntent=memory.lastIntent||'activity';return activity}
    if(/photo|picture|camera|video/.test(q))return `Tell me what the photo or video is showing first. I'll match the activity to your course, then we'll connect camera capture directly into Bob.`;
    return `I understand what you've said, but I can't confidently match that to one of your course areas yet. Tell me a little more about the job — for example what you're building, repairing, setting out or preparing.`;
  }

  function snapshot(){const p=progress(),h=hours(),e=epa();return {version:BRAIN_VERSION,learner:firstName(),course:courseName(),nvq:!!appCourse()?.nvqUnits,progress:p,hours:h,epa:e,assignments:allAssignments().map(({n,title,complete,codes})=>({n,title,complete,codes})),memory:{...memory}}}

  window.BobCourseBrain={version:BRAIN_VERSION,reply,snapshot,matchAssignment,getAssignments:()=>allAssignments().map(({n,title,complete,codes})=>({n,title,complete,codes})),reset:()=>{memory.activeAssignment=null;memory.lastIntent=null;memory.lastMatch=null}};
})();