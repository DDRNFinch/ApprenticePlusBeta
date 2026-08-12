(() => {
  'use strict';

  const VERSION='0.9.0';
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

  async function preparePhoto(file,a,n,context,codes,staged=[]){
    if(!file||!String(file.type||'').startsWith('image/'))return {skipped:true};
    const data=typeof compressLandscapeImage==='function'?await compressLandscapeImage(file):await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file)});
    let mediaHash='';
    if(typeof uniqueEvidenceMedia==='function'){
      const media=await uniqueEvidenceMedia(data,{kind:'image',location:`Bob · ${shortName(a)} · ${a.title||''}`},staged);
      if(!media)return {duplicate:true};
      staged.push(media);mediaHash=media.hash||'';
    }
    return {file,data,mediaHash,codes};
  }

  async function savePhotos(files){
    if(capturing)return null;
    const list=Array.from(files||[]).filter(file=>String(file?.type||'').startsWith('image/'));
    if(!list.length)return null;
    const n=activeAssignment(),a=appAssignment(n);
    if(!n||!a){await window.BobBrainBridge?.addExternal?.('Tell me what you’re working on first, then I’ll know exactly where to put the photos.','bot');return null}
    capturing=true;
    try{
      const context=await recentContext(),codes=await suggestCodes(a,context),staged=[];
      const prepared=[];let duplicates=0;
      for(const file of list){const item=await preparePhoto(file,a,n,context,codes,staged);if(item?.duplicate){duplicates++;continue}if(item&&!item.skipped)prepared.push(item)}
      if(!prepared.length){if(duplicates)await window.BobBrainBridge?.addExternal?.('Those photos are already in your portfolio, so I haven’t added them again.','bot');return null}
      const sd=sectionData(n,'photos');sd.draft=sd.draft||blankSection('photos');const d=sd.draft;d.photos=d.photos||[];d.ksbEvidence=d.ksbEvidence||[];
      codes.forEach(code=>{if(!d.ksbEvidence.includes(code))d.ksbEvidence.push(code)});
      const saved=[];
      for(const item of prepared){
        const evidenceId=uidLocal(),index=d.photos.length;let name=`Bob-${shortName(a).replace(/\s+/g,'-')}-photo-${index+1}.jpg`;
        try{if(typeof evidencePhotoFileNameForCodes==='function')name=evidencePhotoFileNameForCodes(a,codes.length?codes:d.ksbEvidence,index)}catch{}
        d.photos.push({name,originalName:item.file.name||name,data:item.data,mediaHash:item.mediaHash,bobEvidenceId:evidenceId,bobCapturedAt:new Date().toISOString(),bobContext:context.slice(-1000),bobSuggestedCodes:codes});
        saved.push({evidenceId,assignment:n,codes});
      }
      await commit(n,'photos',sd);try{if(typeof invalidatePackStatus==='function')invalidatePackStatus(n);if(typeof saveData==='function')await saveData()}catch{}
      for(const item of saved)await window.BobBrainBridge?.addExternal?.(`Photo · ${shortName(a)} ${a.title||''}`,'user',{kind:'photo',evidenceId:item.evidenceId,assignment:n});
      const count=saved.length;
      const mapped=codes.length?` I’ve linked them to ${codes.join(' and ')} based on what you’ve told me.`:` I’ve put them in the right evidence pack, but I haven’t guessed an LO/KSB.`;
      const dup=duplicates?` ${duplicates} duplicate${duplicates===1?' was':'s were'} skipped.`:'';
      const submit=d.photos.length>=3?' You’ve now got at least three photos in this photo-evidence draft; it still needs your signature before submission.':'';
      await window.BobBrainBridge?.addExternal?.(`Got them. I’ve saved ${count} photo${count===1?'':'s'} in ${shortName(a)} — ${a.title}.${mapped}${dup}${submit}`,'bot');
      return saved;
    }catch(error){console.error('Bob photo capture failed',error);await window.BobBrainBridge?.addExternal?.('Those photos didn’t save properly. Try selecting them again for me.','bot');return null}finally{capturing=false}
  }

  async function savePhoto(file){const result=await savePhotos([file]);return result?.[0]||null}

  function styles(){if(document.getElementById('bobEvidenceStyles'))return;const style=document.createElement('style');style.id='bobEvidenceStyles';style.textContent=`.bob-composer{grid-template-columns:auto auto 1fr auto!important}.bob-camera,.bob-gallery{border:0;border-radius:50%;width:44px;height:44px;background:#eef3f1;color:#1d5d56;display:grid;place-items:center;cursor:pointer;line-height:1;padding:0}.bob-camera svg,.bob-gallery svg{width:21px;height:21px}.bob-camera:disabled,.bob-gallery:disabled{opacity:.45}.bob-message.bob-photo-message{padding:6px;overflow:hidden;min-width:170px}.bob-photo-thumb{display:block;width:min(240px,62vw);max-height:220px;object-fit:cover;border-radius:10px;background:#e7ecea}.bob-photo-caption{display:block;padding:7px 6px 1px;font-size:12px;color:#52605c}`;document.head.appendChild(style)}

  function installCamera(){
    const composer=document.querySelector('#bobChat .bob-composer');if(!composer||document.getElementById('bobCameraButton'))return false;styles();
    const camera=document.createElement('button');camera.type='button';camera.id='bobCameraButton';camera.className='bob-camera';camera.setAttribute('aria-label','Take a photo for Bob');try{camera.innerHTML=typeof appIcon==='function'?appIcon('camera','button-icon'):'Camera'}catch{camera.textContent='Camera'}
    const gallery=document.createElement('button');gallery.type='button';gallery.id='bobGalleryButton';gallery.className='bob-gallery';gallery.setAttribute('aria-label','Choose multiple photos for Bob');try{gallery.innerHTML=typeof appIcon==='function'?appIcon('gallery','button-icon'):'+'}catch{gallery.textContent='+'}
    const cameraInput=document.createElement('input');cameraInput.type='file';cameraInput.accept='image/*';cameraInput.capture='environment';cameraInput.id='bobCameraInput';cameraInput.hidden=true;
    const galleryInput=document.createElement('input');galleryInput.type='file';galleryInput.accept='image/*';galleryInput.multiple=true;galleryInput.id='bobGalleryInput';galleryInput.hidden=true;
    composer.prepend(camera,gallery,cameraInput,galleryInput);
    const ensureAssignment=async()=>{if(activeAssignment())return true;await window.BobBrainBridge?.addExternal?.('Tell me what you’re working on first, then I’ll file the photos in the right place.','bot');return false};
    camera.addEventListener('click',async()=>{if(!await ensureAssignment())return;cameraInput.value='';cameraInput.click()});
    gallery.addEventListener('click',async()=>{if(!await ensureAssignment())return;galleryInput.value='';galleryInput.click()});
    cameraInput.addEventListener('change',async()=>{const file=cameraInput.files?.[0];if(!file)return;camera.disabled=gallery.disabled=true;await savePhoto(file);camera.disabled=gallery.disabled=false});
    galleryInput.addEventListener('change',async()=>{const files=galleryInput.files;if(!files?.length)return;camera.disabled=gallery.disabled=true;await savePhotos(files);camera.disabled=gallery.disabled=false});
    return true;
  }

  function enhancePhotoRecord(record,node){if(record?.kind!=='photo'||!node)return;const photo=findPhotoByBobId(record.evidenceId);if(!photo?.data)return;node.classList.add('bob-photo-message');const time=node.querySelector('.bob-message-time');node.textContent='';const img=document.createElement('img');img.className='bob-photo-thumb';img.src=photo.data;img.alt='Evidence photo sent to Bob';const cap=document.createElement('span');cap.className='bob-photo-caption';cap.textContent=record.text||'Evidence photo';node.append(img,cap);if(time)node.appendChild(time)}
  async function restorePhotoBubbles(){try{const rows=await window.BobBrainBridge?.history?.();(rows||[]).filter(r=>r.kind==='photo').forEach(record=>{const node=document.querySelector(`.bob-message[data-bob-id="${CSS.escape(record.id)}"]`);if(node)enhancePhotoRecord(record,node)})}catch(error){console.warn('Bob could not restore photo messages',error)}}

  function loadChatControls(){if(document.getElementById('bobChatControlsScript'))return;const script=document.createElement('script');script.id='bobChatControlsScript';script.src='bob-chat-controls.js?v=0.9.0';script.onerror=error=>console.warn('Bob chat controls could not load',error);document.head.appendChild(script)}
  const observer=new MutationObserver(()=>installCamera());
  async function init(){await loadLanguageBrain();if(!installCamera())window.setTimeout(init,100);observer.observe(document.body,{childList:true,subtree:true});window.addEventListener('bob:record-rendered',event=>enhancePhotoRecord(event.detail?.record,event.detail?.node));window.BobEvidenceBridge={version:VERSION,savePhoto,savePhotos,resolvePhoto:findPhotoByBobId};window.setTimeout(restorePhotoBubbles,160);loadChatControls()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();