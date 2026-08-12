(() => {
  'use strict';

  const VERSION='0.8.0';
  const MODEL='Xenova/all-MiniLM-L6-v2';
  const LIB='https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1/+esm';
  const state={status:'idle',extractor:null,index:null,error:null,promise:null};

  const normalise=s=>String(s||'').replace(/\s+/g,' ').trim();
  const isGeneral=q=>/^(hi|hello|hey|thanks|thank you|ok|okay|yes|no|cheers)\b/i.test(q)||/\b(progress|how far|what.*left|still need|evidence.*missing|what.*evidence)\b/i.test(q);

  function fullAssignment(n){try{return typeof assignment==='function'?assignment(n):null}catch{return null}}
  function rows(){try{return window.BobCourseBrain?.getAssignments?.()||[]}catch{return []}}
  function nvqCriteria(a){
    try{return (typeof NVQ_ASSESSMENT_CRITERIA!=='undefined'&&NVQ_ASSESSMENT_CRITERIA?.[String(a?.unit)])||[]}catch{return []}
  }

  function candidateRows(){
    const out=[];
    for(const row of rows()){
      const a=fullAssignment(row.n);if(!a)continue;
      const unitLabel=row.unit?`Unit ${row.unit}`:`Evidence pack ${row.n}`;
      out.push({kind:'assignment',assignment:row.n,unit:row.unit||'',code:'',text:`${unitLabel}. ${row.title}. ${(a.ksbs||[]).map(x=>x[1]).join(' ')}`});
      for(const [code,text] of (a.ksbs||[]))out.push({kind:'outcome',assignment:row.n,unit:row.unit||'',code:String(code),text:`${row.title}. ${code}. ${text}`});
      for(const item of nvqCriteria(a))out.push({kind:'criterion',assignment:row.n,unit:row.unit||'',code:String(item.lo||''),criterion:String(item.code||''),text:`${row.title}. ${item.lo||''} criterion ${item.code||''}. ${item.text||''}`});
    }
    return out;
  }

  function dot(a,b){let s=0;for(let i=0;i<Math.min(a.length,b.length);i++)s+=a[i]*b[i];return s}
  function vector(output){
    try{
      const list=output.tolist();
      if(Array.isArray(list?.[0]))return list[0];
      return list;
    }catch{return []}
  }

  async function load(){
    if(state.extractor&&state.index)return state;
    if(state.promise)return state.promise;
    state.promise=(async()=>{
      try{
        state.status='loading';
        const mod=await import(LIB);
        if(mod?.env){mod.env.allowLocalModels=false;mod.env.useBrowserCache=true;}
        let extractor;
        try{extractor=await mod.pipeline('feature-extraction',MODEL,{device:navigator.gpu?'webgpu':'wasm',dtype:'q8'});}catch{
          extractor=await mod.pipeline('feature-extraction',MODEL,{device:'wasm',quantized:true});
        }
        const candidates=candidateRows();
        if(!candidates.length)throw new Error('No course candidates');
        const batch=await extractor(candidates.map(x=>x.text),{pooling:'mean',normalize:true});
        const vectors=batch.tolist();
        state.extractor=extractor;
        state.index=candidates.map((item,i)=>({...item,vector:vectors[i]}));
        state.status='ready';state.error=null;
        window.dispatchEvent(new CustomEvent('bob:semantic-ready'));
      }catch(error){
        state.status='fallback';state.error=String(error?.message||error);console.warn('Bob semantic brain unavailable; using local rules',error);
      }
      return state;
    })();
    return state.promise;
  }

  async function understand(message){
    const q=normalise(message);if(!q)return null;
    await load();if(state.status!=='ready'||!state.extractor||!state.index)return null;
    try{
      const emb=await state.extractor(q,{pooling:'mean',normalize:true});const v=vector(emb);if(!v.length)return null;
      const scored=state.index.map(item=>({...item,score:dot(v,item.vector)})).sort((a,b)=>b.score-a.score);
      const assignmentScores=new Map();
      for(const item of scored.slice(0,30))assignmentScores.set(item.assignment,Math.max(assignmentScores.get(item.assignment)||-1,item.score));
      const assignments=[...assignmentScores.entries()].map(([assignment,score])=>({assignment,score})).sort((a,b)=>b.score-a.score);
      const best=assignments[0],second=assignments[1];if(!best)return null;
      const row=rows().find(x=>x.n===best.assignment);
      const outcomes=scored.filter(x=>x.assignment===best.assignment&&x.code).reduce((acc,item)=>{
        const existing=acc.find(x=>x.code===item.code);if(existing)existing.score=Math.max(existing.score,item.score);else acc.push({code:item.code,score:item.score});return acc;
      },[]).sort((a,b)=>b.score-a.score).slice(0,3);
      const margin=best.score-(second?.score||0);
      return {version:VERSION,assignment:row?{n:row.n,title:row.title,unit:row.unit||''}:null,score:best.score,margin,outcomes,confidence:best.score>=0.52&&margin>=0.035?'high':best.score>=0.42?'medium':'low'};
    }catch(error){console.warn('Bob semantic match failed',error);return null}
  }

  function install(){
    if(!window.BobCourseBrain||window.BobCourseBrain.__semanticWrapped)return false;
    const originalReply=window.BobCourseBrain.reply.bind(window.BobCourseBrain);
    window.BobCourseBrain.reply=async message=>{
      const q=normalise(message);
      if(!q||isGeneral(q))return originalReply(message);
      const lexical=window.BobLanguageBrain?.understand?.(message);
      if(lexical?.assignment&&lexical?.confidence==='high')return originalReply(message);
      const semantic=await understand(message);
      if(semantic?.assignment&&semantic.confidence!=='low'){
        const a=semantic.assignment;
        const hint=a.unit?` unit ${a.unit}`:` ep ${a.n}`;
        return originalReply(`${message}${hint}`);
      }
      return originalReply(message);
    };
    window.BobCourseBrain.semantic=understand;
    window.BobCourseBrain.__semanticWrapped=true;
    return true;
  }

  function init(){if(!install())setTimeout(init,100);setTimeout(()=>load(),3500)}
  window.BobSemanticBrain={version:VERSION,understand,load,status:()=>({status:state.status,error:state.error,model:MODEL})};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();