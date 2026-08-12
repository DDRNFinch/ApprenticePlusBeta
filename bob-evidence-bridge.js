(() => {
  'use strict';

  const VERSION='0.7.0';
  let capturing=false;
  let languagePromise=null;

  function loadLanguageBrain(){
    if(window.BobLanguageBrain)return Promise.resolve(window.BobLanguageBrain);
    if(languagePromise)return languagePromise;
    languagePromise=new Promise((resolve,reject)=>{
      const existing=document.getElementById('bobLanguageBrainScript');
      if(existing){existing.addEventListener('load',()=>resolve(window.BobLanguageBrain),{once:true});existing.addEventListener('error',reject,{once:true});return}
      const script=document.createElement('script');script.id='bobLanguageBrainScript';script.src='bob-language-brain.js?v=0.7.0';script.onload=()=>resolve(window.BobLanguageBrain);script.onerror=reject;document.head.appendChild(script);
    }).catch(error=>{console.warn('Bob language brain could not load',error);return null});
    return languagePromise;
  }

  const normalise=s=>String(s||'').toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]+/g,' ').replace(/\s+/g,' ').trim();
  const words=s=>normalise(s).split(' ').filter(x=>x.length>2);
  const uidLocal=()=>`bob-${Date.now()}-${Math.random().toString(36).slice(2,9)}`;
  function brainSnapshot(){try{return window.BobCourseBrain?.snapshot?.()||null}catch{return null}}
  function activeAssignment(){return Number(brainSnapshot()?.memory?.activeAssignment)||null}
  function appAssignment(n){try{return typeof assignment==='function'?assignment(n):null}catch{return null}}
  function courseIsNvq(){try{return !!COURSE?.nvqUnits}catch{return false}}
  function shortName(a){return a?.unit?`Unit ${a.unit}`:`EP${a?.n||''}`}

  async function recentContext(){try{const rows=await window.BobBrainBridge?.history?.();return (rows||[]).filter(x=>x.type==='user'&&x.text&&x.kind!=='photo').slice(-8).map(x=>x.text).join(' ')}catch{return ''}}
  function scoreText(query,text){const q=new Set(words(query)),t=new Set(words(text));let score=0;q.forEach(w=>{if(t.has(w))score+=2;else if([...t].some(x=>x.includes(w)||w.includes(x)))score+=1});return score}

  async function suggestCodes(a,context){
    if(!a)return [];
    await loadLanguageBrain();
    try{const semantic=window.BobLanguageBrain?.outcomeMatches?.(a.n,context)||[];if(semantic.length)return semantic.slice(0,2).map(x=>x.code)}catch{}
    const q=normalise(context);
    if(courseIsNvq()){
      const out=[],has=code=>(a.ksbs||[]).some(([c])=>String(c).toUpperCase()===code);
      if(/draw|specification|method statement|risk assessment|instruction/.test(q)&&has('LO1'))out.push('LO1');
      if(/ppe|rpe|safe|safety|access|hazard/.test(q)&&has('LO3'))out.push('LO3');
      if(/material|brick|block|mortar|insulation|tie|ties|dpc|lintel|component|resource/.test(q)&&has('LO4'))out.push('LO4');
      if(/lay|laying|build|building|wall|bond|joint|opening|lintel|tie|ties|insulation|dpc|tray|weep|level|plumb|cut|setting out|set out|repair|repoint/.test(q)&&has('LO7'))out.push('LO7');
      return [...new Set(out)].slice(-2);
    }
    const skills=(a.ksbs||[]).filter(([code])=>/^S/i.test(String(code)));if(!skills.length)return [];
    const scored=skills.map(([code,text])=>({code:String(code),score:scoreText(context,text)})).sort((a,b)=>b.score-a.score);
    return scored[0]?.score>=2?[scored[0].code]:[];
  }

  function findPhotoByBobId(id){if(!id)return null;try{const snap=brainSnapshot();for(const row of snap?.assignments||[]){const sd=sectionData(row.n,'photos');const all=[...(sd?.draft?.photos||[]),...(sd?.versions||[]).flatMap(v=>v?.photos||[])];const found=all.find(p=>p?.bobEvidenceId===id);if(found?.data)return found}}catch{}return null}

  async function savePhoto(file){
    if(capturing)return null;
    const n=activeAssignment(),a=appAssignment(n);
    if(!n||!a){await window.BobBrainBridge?.addExternal?.('Tell me what you’re working on first, then I’ll know exactly where to put the photo.','bot');return null}
    capturing=true;
    try{
      if(!file||!String(file.type||'').startsWith('image/'))throw new Error('Choose a photograph');
      const context=await recentContext(),codes=await suggestCodes(a,context);
      const data=typeof compressLandscapeImage==='function'?await compressLandscapeImage(file):await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file)});
      let mediaHash='';
      if(typeof uniqueEvidenceMedia==='function'){const media=await uniqueEvidenceMedia(data,{kind:'image',location:`Bob · ${shortName(a)} · ${a.title||''}`});if(!media){await window.BobBrainBridge?.addExternal?.('I already have that photo in your portfolio, so I haven’t added it again.','bot');return null}mediaHash=media.hash||''}
      const sd=sectionData(n,'photos');sd.draft=sd.draft||blankSection('photos');const d=sd.draft;d.photos=d.photos||[];d.ksbEvidence=d.ksbEvidence||[];
      codes.forEach(code=>{if(!d.ksbEvidence.includes(code))d.ksbEvidence.push(code)});
      const evidenceId=uidLocal(),index=d.photos.length;let name=`Bob-${shortName(a).replace(/\s+/g,'-')}-photo-${index+1}.jpg`;
      try{if(typeof evidencePhotoFileNameForCodes==='function')name=evidencePhotoFileNameForCodes(a,codes.length?codes:d.ksbEvidence,index)}catch{}
      d.photos.push({name,originalName:file.name||name,data,mediaHash,bobEvidenceId:evidenceId,bobCapturedAt:new Date().toISOString(),bobContext:context.slice(-1000),bobSuggestedCodes:codes});
      await commit(n,'photos',sd);try{if(typeof invalidatePackStatus==='function')invalidatePackStatus(n);if(typeof saveData==='function')await saveData()}catch{}
      await window.BobBrainBridge?.addExternal?.(`Photo · ${shortName(a)} ${a.title||''}`,'user',{kind:'photo',evidenceId,assignment:n});
      const mapped=codes.length?` I’ve linked it to ${codes.join(' and ')} based on what you’ve told me.`:` I’ve put it in the right evidence pack, but I haven’t guessed an LO/KSB.`;
      const submit=d.photos.length>=3?' You’ve now got at least three photos in this photo-evidence draft; it still needs your signature before submission.':'';
      await window.BobBrainBridge?.addExternal?.(`Got it. I’ve saved that in ${shortName(a)} — ${a.title}.${mapped}${submit}`,'bot');return {evidenceId,assignment:n,codes};
    }catch(error){console.error('Bob photo capture failed',error);await window.BobBrainBridge?.addExternal?.('That photo didn’t save properly. Try taking it again for me.','bot');return null}finally{capturing=false}
  }

  function styles(){if(document.getElementById('bobEvidenceStyles'))return;const style=document.createElement('style');style.id='bobEvidenceStyles';style.textContent=`.bob-composer{grid-template-columns:auto 1fr auto!important}.bob-camera{border:0;border-radius:50%;width:44px;height:44px;background:#eef3f1;color:#1d5d56;display:grid;place-items:center;cursor:pointer;line-height:1;padding:0}.bob-camera svg{width:21px;height:21px}.bob-camera:disabled{opacity:.45}.bob-message.bob-photo-message{padding:6px;overflow:hidden;min-width:170px}.bob-photo-thumb{display:block;width:min(240px,62vw);max-height:220px;object-fit:cover;border-radius:10px;background:#e7ecea}.bob-photo-caption{display:block;padding:7px 6px 1px;font-size:12px;color:#52605c}`;document.head.appendChild(style)}

  function installCamera(){const composer=document.querySelector('#bobChat .bob-composer');if(!composer||document.getElementById('bobCameraButton'))return false;styles();const button=document.createElement('button');button.type='button';button.id='bobCameraButton';button.className='bob-camera';button.setAttribute('aria-label','Take a photo for Bob');try{button.innerHTML=typeof appIcon==='function'?appIcon('camera','button-icon'):'Camera'}catch{button.textContent='Camera'}const input=document.createElement('input');input.type='file';input.accept='image/*';input.capture='environment';input.id='bobCameraInput';input.hidden=true;composer.prepend(button,input);button.addEventListener('click',async()=>{const n=activeAssignment();if(!n){await window.BobBrainBridge?.addExternal?.('Tell me what you’re working on first, then tap the camera and I’ll file the photo in the right place.','bot');return}input.value='';input.click()});input.addEventListener('change',async()=>{const file=input.files?.[0];if(!file)return;button.disabled=true;await savePhoto(file);button.disabled=false});return true}

  function enhancePhotoRecord(record,node){if(record?.kind!=='photo'||!node)return;const photo=findPhotoByBobId(record.evidenceId);if(!photo?.data)return;node.classList.add('bob-photo-message');const time=node.querySelector('.bob-message-time');node.textContent='';const img=document.createElement('img');img.className='bob-photo-thumb';img.src=photo.data;img.alt='Evidence photo sent to Bob';const cap=document.createElement('span');cap.className='bob-photo-caption';cap.textContent=record.text||'Evidence photo';node.append(img,cap);if(time)node.appendChild(time)}
  async function restorePhotoBubbles(){try{const rows=await window.BobBrainBridge?.history?.();(rows||[]).filter(r=>r.kind==='photo').forEach(record=>{const node=document.querySelector(`.bob-message[data-bob-id="${CSS.escape(record.id)}"]`);if(node)enhancePhotoRecord(record,node)})}catch(error){console.warn('Bob could not restore photo messages',error)}}

  const observer=new MutationObserver(()=>installCamera());
  async function init(){await loadLanguageBrain();if(!installCamera())window.setTimeout(init,100);observer.observe(document.body,{childList:true,subtree:true});window.addEventListener('bob:record-rendered',event=>enhancePhotoRecord(event.detail?.record,event.detail?.node));window.BobEvidenceBridge={version:VERSION,savePhoto,resolvePhoto:findPhotoByBobId};window.setTimeout(restorePhotoBubbles,160)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();