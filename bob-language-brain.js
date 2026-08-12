(() => {
  'use strict';

  const VERSION='0.7.1';
  const GROUPS={
    cavity:['cavity wall','cavity walling','cavity work','outer leaf','inner leaf','two skins','brick skin','block skin','wall ties','ties','insulation','cavity insulation','dpc','damp proof course','cavity tray','trays','weep holes','weep vents','lintel','openings'],
    solid:['solid wall','solid walling','one brick wall','215 wall','215mm wall','english bond','flemish bond','header bond','headers','stretchers','bonding brickwork'],
    masonry:['brickwork','blockwork','masonry','laying bricks','laying blocks','building a wall','building walls','walling','bricklaying','build the wall'],
    setting:['setting out','set out','profiles','profile boards','datum','datum point','lines','string line','building line','gauge','square','squaring','diagonal','diagonals','levels','laser level','water level','transfer levels'],
    joints:['jointing','pointing','joint finish','bucket handle','half round','weather struck','flush joint','recessed joint','raking out','repointing'],
    mortar:['mortar','mixing mortar','mix a batch','mixing muck','muck','cement','sand','lime','plasticiser','gauge mortar','mortar mix'],
    materials:['materials','bricks','blocks','brick','block','insulation','wall ties','dpc','lintel','coping','capping','fixings','components','mortar'],
    openings:['opening','openings','window','windows','door','doors','reveal','reveals','jamb','jambs','sill','cill','lintel'],
    safety:['health and safety','h and s','ppe','rpe','hard hat','boots','gloves','goggles','dust mask','respirator','risk assessment','method statement','safe system','hazard','hazards','manual handling','scaffold','access equipment'],
    drawings:['drawing','drawings','plan','plans','spec','specification','dimensions','measurements','schedule','method statement','risk assessment','instructions'],
    decorative:['arch','arches','chimney','chimney stack','fireplace','curved wall','curve','splayed wall','decorative brickwork','feature brickwork','architectural masonry'],
    repair:['repair','repairs','repairing','maintenance','repoint','repointing','replace brick','replacing bricks','cut out brick','make good','patch repair'],
    teamwork:['teamwork','workmates','colleagues','other trades','customer','client','supervisor','foreman','communication','working together','helping someone','working relationship'],
    resources:['resources','sequence of work','work programme','programme','materials needed','tools needed','labour','plan the job','planning the job','organise the work','organising work']
  };
  let plannerPromise=null;
  const normalise=s=>String(s||'').toLowerCase().replace(/[’']/g,'').replace(/\bive\b/g,'i have').replace(/\bim\b/g,'i am').replace(/\bweve\b/g,'we have').replace(/[^a-z0-9]+/g,' ').replace(/\s+/g,' ').trim();
  const singular=w=>w.endsWith('ies')?w.slice(0,-3)+'y':w.endsWith('es')&&w.length>4?w.slice(0,-2):w.endsWith('s')&&w.length>3?w.slice(0,-1):w;
  const tokenise=s=>normalise(s).split(' ').filter(w=>w.length>2).map(singular);
  const contains=(q,phrase)=>normalise(q).includes(normalise(phrase));
  const groupHits=q=>Object.fromEntries(Object.entries(GROUPS).map(([k,list])=>[k,list.filter(p=>contains(q,p))]).filter(([,v])=>v.length));
  function currentAssignments(){try{return window.BobCourseBrain?.getAssignments?.()||[]}catch{return []}}
  function fullAssignment(n){try{return typeof assignment==='function'?assignment(n):null}catch{return null}}
  function nvq(){try{return !!COURSE?.nvqUnits}catch{return false}}
  function loadPlanner(){if(window.BobEvidencePlanner)return Promise.resolve(window.BobEvidencePlanner);if(plannerPromise)return plannerPromise;plannerPromise=new Promise((resolve,reject)=>{const s=document.createElement('script');s.id='bobEvidencePlannerScript';s.src='bob-evidence-planner.js?v=0.12.0';s.onload=()=>resolve(window.BobEvidencePlanner||null);s.onerror=reject;document.head.appendChild(s)}).catch(error=>{plannerPromise=null;console.warn('Bob evidence planner could not load',error);return null});return plannerPromise}
  function directMeaning(message){
    const q=normalise(message),hits=groupHits(q),rows=currentAssignments();
    const titleFind=parts=>rows.find(r=>parts.some(p=>normalise(r.title).includes(normalise(p))))||null;
    if(nvq()){
      if(hits.cavity||hits.solid||hits.masonry||hits.openings||hits.joints||hits.mortar)return titleFind(['erecting masonry structures']);
      if(hits.setting)return titleFind(['setting out to form masonry structures']);
      if(hits.decorative)return titleFind(['architectural and decorative']);
      if(hits.repair)return titleFind(['repairing and maintaining masonry']);
      if(hits.teamwork)return titleFind(['working relationships']);
      if(hits.resources)return titleFind(['work activities and resources']);
      if(hits.safety&&!hits.masonry&&!hits.cavity&&!hits.solid)return titleFind(['health, safety and welfare']);
      if(hits.drawings&&!hits.masonry&&!hits.cavity&&!hits.solid)return titleFind(['occupational method of work']);
    }else{
      if(hits.cavity)return titleFind(['cavity walling']);
      if(hits.solid)return titleFind(['solid walling']);
      if(hits.joints||hits.mortar)return titleFind(['jointing','mortar']);
      if(hits.setting)return titleFind(['preparation','setting out']);
      if(hits.repair)return titleFind(['repair']);
    }
    return null;
  }
  function scoreOutcome(text,message,hits){
    const target=normalise(text),qTokens=new Set(tokenise(message)),tTokens=new Set(tokenise(target));let score=0;
    qTokens.forEach(w=>{if(tTokens.has(w))score+=3;else if([...tTokens].some(t=>t.includes(w)||w.includes(t)))score+=1});
    if(hits.materials&&/resource|material|brick|block|mortar|component|fixing|insulation|tie|lintel/.test(target))score+=5;
    if((hits.cavity||hits.solid||hits.masonry||hits.openings||hits.joints)&&/erect|masonry|wall|lay|position|level|plumb|opening|joint|work skill|given working instructions/.test(target))score+=6;
    if(hits.setting&&/setting out|measure|mark|level|plumb|position|transfer|datum|line/.test(target))score+=7;
    if(hits.safety&&/safe|health|legislation|hazard|control equipment|access equipment/.test(target))score+=6;
    if(hits.drawings&&/interpret|information|drawing|specification|instruction|project data/.test(target))score+=6;
    if(hits.teamwork&&/communicat|relationship|relevant people|advice|help|goodwill|trust/.test(target))score+=7;
    return score;
  }
  function outcomeMatches(assignmentNumber,message){
    const a=fullAssignment(assignmentNumber);if(!a)return [];
    const hits=groupHits(message);
    const rows=(a.ksbs||[]).map(([code,text])=>({code:String(code),text:String(text),score:scoreOutcome(text,message,hits)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score);
    if(nvq()){
      try{const criteria=(typeof NVQ_ASSESSMENT_CRITERIA!=='undefined'&&NVQ_ASSESSMENT_CRITERIA?.[String(a.unit)])||[],byLo={};criteria.forEach(item=>{const s=scoreOutcome(item.text,message,hits);if(s>0)byLo[item.lo]=(byLo[item.lo]||0)+s});Object.entries(byLo).forEach(([code,score])=>{const row=rows.find(x=>x.code===code);if(row)row.score+=score;else rows.push({code,text:'',score})});rows.sort((a,b)=>b.score-a.score)}catch{}
    }
    return rows.filter(x=>x.score>=4).slice(0,3);
  }
  function understand(message){const explicit=directMeaning(message),fallback=!explicit?window.BobCourseBrain?.matchAssignment?.(message):null,match=explicit||fallback||null,outcomes=match?.n?outcomeMatches(match.n,message):[];return{version:VERSION,message,normalised:normalise(message),groups:groupHits(message),assignment:match?{n:match.n,title:match.title,unit:match.unit||''}:null,outcomes,confidence:explicit?'high':match?.confidence||'low'}}
  function plannerIntent(message){return /\b(what next|what do i need next|what should i do next|next evidence|what evidence next|what am i missing|what do i still need|what else do i need|enough evidence|have i got enough|is that enough|done for today|anything else today|today's evidence|todays evidence|what have i got today|session checklist|evidence checklist)\b/i.test(String(message||''))}
  function install(){
    if(!window.BobCourseBrain||window.BobCourseBrain.__languageWrapped)return false;
    const originalReply=window.BobCourseBrain.reply.bind(window.BobCourseBrain),originalMatch=window.BobCourseBrain.matchAssignment?.bind(window.BobCourseBrain);
    window.BobCourseBrain.matchAssignment=message=>directMeaning(message)||originalMatch?.(message)||null;
    window.BobCourseBrain.reply=async message=>{
      if(plannerIntent(message)){const planner=await loadPlanner();const planned=await planner?.handle?.(message);if(planned)return planned}
      const meaning=understand(message),a=meaning.assignment,q=normalise(message),isGeneral=/^(hi|hello|hey|thanks|thank you|ok|okay|yes|no)\b/.test(q)||/progress|how far|what.*left|still need|evidence.*missing|what.*evidence/.test(q);
      if(a&&!isGeneral&&!/\b(unit|ep|evidence pack|assignment)\s*\d+\b/.test(q)){const hint=a.unit?` unit ${a.unit}`:` ep ${a.n}`;return originalReply(`${message}${hint}`)}
      return originalReply(message)
    };
    window.BobCourseBrain.language=understand;window.BobCourseBrain.__languageWrapped=true;return true;
  }
  function init(){if(!install())setTimeout(init,80)}
  window.BobLanguageBrain={version:VERSION,understand,outcomeMatches,groups:GROUPS,loadPlanner};
  init();
})();