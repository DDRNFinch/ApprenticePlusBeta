const CACHE='apprentice-plus-v2-62-complete-ep-portfolio';
const CURRENT_VERSION='V2.62';
const RELEASE_NOTES_URL='./release-notes.json';
const FALLBACK_UPDATE_INFO={
 version:CURRENT_VERSION,
 features:['This update includes Apprentice+ improvements and fixes.']
};
const APP_SHELL=['./','./index.html','./styles.css?v=2.60','./qrcode-browser.js?v=1.1','./pdf-generator.js?v=2.62','./specification-sheet.js?v=1.1','./functional-skills-bank.js?v=1.1','./trade-courses-bank.js?v=1.1','./mcq-question-bank.js?v=1.1','./mcq-engine.js?v=1.1','./app.js?v=2.62','./review-transfer.js?v=1.1','./release-notes.json','./technical-drawing-viewer.html','./cadmate.html','./manifest.json','./manifest.webmanifest','./logo-apprentice-plus.png','./icon-192.png','./icon-512.png','./icon-1024.png','./apple-touch-icon.png','./favicon-32.png','./favicon-64.png'];

async function loadUpdateInfo(){
 try{
  let response;
  try{response=await fetch(RELEASE_NOTES_URL,{cache:'no-store'});}catch(_error){response=null;}
  if(!response||!response.ok)response=await caches.match(RELEASE_NOTES_URL);
  if(!response)return FALLBACK_UPDATE_INFO;
  const data=await response.json();
  const release=Array.isArray(data?.releases)?data.releases.find(item=>item?.version===CURRENT_VERSION):data?.releases?.[CURRENT_VERSION];
  const features=Array.isArray(release?.features)?release.features.filter(Boolean).map(String).slice(0,12):[];
  return {
   version:CURRENT_VERSION,
   title:String(release?.title||''),
   features:features.length?features:FALLBACK_UPDATE_INFO.features
  };
 }catch(error){
  console.warn('Unable to load release notes',error);
  return FALLBACK_UPDATE_INFO;
 }
}

self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting()));
});

self.addEventListener('message',event=>{
 if(event.data?.type==='GET_UPDATE_INFO'){
  event.waitUntil(loadUpdateInfo().then(info=>event.source?.postMessage({type:'UPDATE_INFO',info})));
 }
 if(event.data?.type==='SKIP_WAITING')self.skipWaiting();
});

self.addEventListener('activate',event=>{
 event.waitUntil(
  caches.keys()
   .then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))
   .then(()=>self.clients.claim())
 );
});

self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 if(url.origin!==self.location.origin)return;
 const isCoreFile=url.pathname.endsWith('/')||['index.html','app.js','functional-skills-bank.js',
  'trade-courses-bank.js','review-transfer.js','mcq-question-bank.js','mcq-engine.js','qrcode-browser.js','pdf-generator.js','specification-sheet.js','styles.css','cadmate.html','manifest.json','manifest.webmanifest','release-notes.json','service-worker.js'].some(name=>url.pathname.endsWith('/'+name));
 if(isCoreFile){
  event.respondWith(
   fetch(event.request,{cache:'no-store'})
    .then(response=>{
     if(response&&response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}
     return response;
    })
    .catch(()=>caches.match(event.request).then(cached=>cached||caches.match('./index.html')))
  );
  return;
 }
 event.respondWith(
  caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
   if(response&&response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}
   return response;
  }))
 );
});

self.addEventListener('notificationclick',event=>{
 event.notification.close();
 if(event.notification.data?.type!=='remindmate')return;
 event.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(async windows=>{
  const existing=windows.find(client=>'focus'in client);
  if(existing){await existing.focus();existing.postMessage({type:'OPEN_REMINDMATE'});return}
  const opened=await self.clients.openWindow('./');
  opened?.postMessage?.({type:'OPEN_REMINDMATE'});
 }));
});
