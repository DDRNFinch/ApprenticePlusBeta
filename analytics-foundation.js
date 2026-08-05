(function(){
'use strict';
const CONFIG={
 apiKey:'AIzaSyBLgoBoK0twrHydeF8S7G4NLmCLtKiWMvI',
 authDomain:'apprenticeplus-d6a43.firebaseapp.com',
 projectId:'apprenticeplus-d6a43',
 storageBucket:'apprenticeplus-d6a43.firebasestorage.app',
 messagingSenderId:'722558138211',
 appId:'1:722558138211:web:4427a2814b197d7004c556',
 measurementId:'G-NKTP7D72GY'
};
const VERSION='V1.0';
const ENGINE_VERSION='1.5.64';
const QUEUE_KEY='apprenticeplus.analytics.queue.v1';
const INSTALL_KEY='apprenticeplus.analytics.install.v1';
const SESSION_KEY='apprenticeplus.analytics.session.v1';
const STATUS_KEY='apprenticeplus.analytics.status.v2';
const ENABLED_KEY='apprenticeplus.analytics.enabled.v1';
const RECENT_KEY='apprenticeplus.analytics.recent.v1';
const LAST_SEND_KEY='apprenticeplus.analytics.lastSend.v1';
const MAX_QUEUE=500;
const FORBIDDEN=/(name|email|photo|video|audio|signature|statement|evidence|employer|tutor|college|message|answer|transcript|content|file|attachment|location|gps|address|phone|learner|mentor|website|url)/i;
let analytics=null,ready=false,currentScreen='',screenStarted=Date.now(),sessionStarted=Date.now(),sessionId='';
let enabled=localStorage.getItem(ENABLED_KEY)!=='false';
let forceQueue=false;
let status={eventsThisSession:0,sentThisSession:0,queuedThisSession:0,failedThisSession:0,lastEvent:'',lastEventAt:'',lastFlushAt:'',initialisedAt:'',firebaseReady:false};
function safeValue(v){
 if(v==null)return undefined;
 if(typeof v==='boolean'||typeof v==='number')return Number.isFinite(v)?v:undefined;
 if(typeof v==='string')return v.slice(0,100).replace(/[\r\n]+/g,' ');
 return String(v).slice(0,100);
}
function sanitise(params){
 const out={app_version:VERSION,online:navigator.onLine?'yes':'no'};
 if(!params||typeof params!=='object')return out;
 Object.keys(params).forEach(key=>{if(!FORBIDDEN.test(key)){const value=safeValue(params[key]);if(value!==undefined)out[key.slice(0,40)]=value;}});
 return out;
}
function readQueue(){try{const q=JSON.parse(localStorage.getItem(QUEUE_KEY)||'[]');return Array.isArray(q)?q:[]}catch{return []}}
function writeQueue(q){try{localStorage.setItem(QUEUE_KEY,JSON.stringify(q.slice(-MAX_QUEUE)))}catch{}}
function persistStatus(){try{localStorage.setItem(STATUS_KEY,JSON.stringify({...status,queueSize:readQueue().length,updatedAt:new Date().toISOString()}))}catch{}}
function enqueue(name,params){const q=readQueue();q.push({name,params:sanitise(params),queued_at:Date.now()});writeQueue(q);status.queuedThisSession++;persistStatus();}
function validName(name){return String(name||'event').toLowerCase().replace(/[^a-z0-9_]+/g,'_').replace(/^_+|_+$/g,'').slice(0,40)||'event'}
function readRecent(){try{const x=JSON.parse(localStorage.getItem(RECENT_KEY)||'[]');return Array.isArray(x)?x:[]}catch{return []}}
function writeRecent(items){try{localStorage.setItem(RECENT_KEY,JSON.stringify(items.slice(0,20)))}catch{}}
function noteEvent(name){status.eventsThisSession++;status.lastEvent=name;status.lastEventAt=new Date().toISOString();const recent=readRecent();recent.unshift({name,at:status.lastEventAt});writeRecent(recent);persistStatus();}
function send(name,params){
 const eventName=validName(name),safe=sanitise(params);noteEvent(eventName);
 if(!enabled)return false;
 if(forceQueue||!ready||!analytics||!navigator.onLine){enqueue(eventName,safe);return false;}
 try{analytics.logEvent(eventName,safe);status.sentThisSession++;const sentAt=new Date().toISOString();localStorage.setItem(LAST_SEND_KEY,sentAt);persistStatus();return true;}
 catch{status.failedThisSession++;enqueue(eventName,safe);return false;}
}
function flush(){
 if(!enabled||forceQueue||!ready||!analytics||!navigator.onLine)return 0;
 const q=readQueue();if(!q.length){status.lastFlushAt=new Date().toISOString();persistStatus();return 0;}
 const remaining=[];let sent=0;
 q.forEach(item=>{try{analytics.logEvent(validName(item.name),sanitise({...item.params,was_queued:'yes'}));sent++;}catch{remaining.push(item);}});
 writeQueue(remaining);status.sentThisSession+=sent;status.lastFlushAt=new Date().toISOString();if(sent)localStorage.setItem(LAST_SEND_KEY,status.lastFlushAt);persistStatus();return sent;
}
function clearQueue(){writeQueue([]);persistStatus();return true;}
function setUserProperties(props){
 if(!analytics||!ready||!props||typeof props!=='object')return false;
 const safe={};Object.keys(props).forEach(key=>{if(!FORBIDDEN.test(key)){const value=safeValue(props[key]);if(value!==undefined)safe[key.slice(0,24)]=value;}});
 try{analytics.setUserProperties(safe);return true;}catch{return false;}
}
function newSession(){sessionStarted=Date.now();sessionId=Math.random().toString(36).slice(2,10);try{sessionStorage.setItem(SESSION_KEY,sessionId)}catch{}send('session_start',{session_id:sessionId});}
function endSession(reason){const seconds=Math.max(1,Math.round((Date.now()-sessionStarted)/1000));send('session_end',{reason,duration_seconds:seconds,session_id:sessionId});}
function trackScreen(name){
 const next=validName(name||'unknown');
 if(currentScreen&&currentScreen!==next)send('screen_time',{screen:currentScreen,duration_seconds:Math.max(1,Math.round((Date.now()-screenStarted)/1000))});
 if(currentScreen!==next){currentScreen=next;screenStarted=Date.now();send('screen_view',{screen:next});}
}
function installSignals(){
 let info={};try{info=JSON.parse(localStorage.getItem(INSTALL_KEY)||'{}')}catch{}
 if(!info.firstVersion){info={firstVersion:VERSION,currentVersion:VERSION,installedAt:new Date().toISOString()};try{localStorage.setItem(INSTALL_KEY,JSON.stringify(info))}catch{}send('first_open',{first_version:VERSION});}
 else if(info.currentVersion!==VERSION){const previous=info.currentVersion||'unknown';info.currentVersion=VERSION;info.updatedAt=new Date().toISOString();try{localStorage.setItem(INSTALL_KEY,JSON.stringify(info))}catch{}send('app_update',{previous_version:previous,new_version:VERSION});}
}
function setEnabled(value){enabled=!!value;try{localStorage.setItem(ENABLED_KEY,enabled?'true':'false')}catch{}try{analytics?.setAnalyticsCollectionEnabled?.(enabled)}catch{}persistStatus();return enabled}
function simulateOffline(value){forceQueue=!!value;persistStatus();return forceQueue}
function diagnostics(){return {version:VERSION,engineVersion:ENGINE_VERSION,measurementId:CONFIG.measurementId,firebaseReady:ready,enabled,forceQueue,online:navigator.onLine,queueSize:readQueue().length,currentScreen,sessionId,lastSuccessfulSend:localStorage.getItem(LAST_SEND_KEY)||'',recentEvents:readRecent(),...status};}
function init(){
 try{
  if(window.firebase&&firebase.initializeApp){if(!firebase.apps.length)firebase.initializeApp(CONFIG);analytics=firebase.analytics();ready=true;analytics.setAnalyticsCollectionEnabled(enabled);status.firebaseReady=true;status.initialisedAt=new Date().toISOString();}
 }catch(error){ready=false;status.firebaseReady=false;console.warn('Apprentice+ analytics unavailable',error);}
 installSignals();newSession();setUserProperties({app_version:VERSION,platform:'web_pwa',display_mode:window.matchMedia?.('(display-mode: standalone)').matches?'standalone':'browser'});send('app_open',{standalone:window.matchMedia?.('(display-mode: standalone)').matches?'yes':'no'});flush();persistStatus();
}
window.ApprenticeAnalytics={trackEvent:send,trackScreen,flush,clearQueue,setUserProperties,diagnostics,setEnabled,simulateOffline,isEnabled:()=>enabled,isReady:()=>ready,queueSize:()=>readQueue().length,version:VERSION,engineVersion:ENGINE_VERSION,test:()=>send('analytics_test',{source:'developer_tools'})};
window.trackEvent=send;window.trackScreen=trackScreen;
window.addEventListener('online',()=>{send('connection_online');flush();});
window.addEventListener('offline',()=>send('connection_offline'));
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')endSession('background');else{newSession();send('app_resume');}});
window.addEventListener('pagehide',()=>endSession('pagehide'));
window.addEventListener('error',event=>send('javascript_error',{error_type:event.error?.name||'Error',source_file:String(event.filename||'').split('/').pop(),line_number:Number(event.lineno||0)}));
window.addEventListener('unhandledrejection',event=>send('promise_rejection',{error_type:event.reason?.name||'UnhandledPromiseRejection'}));
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
