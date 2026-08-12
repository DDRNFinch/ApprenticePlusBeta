(() => {
  'use strict';

  const BRIDGE_VERSION='0.10.0';
  const DB_NAME='apprenticeplus-bob';
  const DB_VERSION=1;
  const STORE='messages';
  const FALLBACK_KEY='apprenticeplus.bob.chat.v1';
  let busy=false, hydrating=false, dbPromise=null, observer=null;

  const timeLabel=value=>new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit'}).format(value?new Date(value):new Date());
  const dateKey=value=>{const d=new Date(value);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
  const dateLabel=value=>{const d=new Date(value),today=new Date(),yesterday=new Date();yesterday.setDate(today.getDate()-1);if(dateKey(d)===dateKey(today))return 'Today';if(dateKey(d)===dateKey(yesterday))return 'Yesterday';return new Intl.DateTimeFormat('en-GB',{weekday:'long',day:'numeric',month:'short',year:d.getFullYear()===today.getFullYear()?undefined:'numeric'}).format(d)};
  const makeId=()=>`${Date.now()}-${Math.random().toString(36).slice(2,10)}`;
  const messages=()=>document.getElementById('bobMessages');
  const input=()=>document.getElementById('bobInput');
  const send=()=>document.getElementById('bobSend');

  function openDb(){if(dbPromise)return dbPromise;dbPromise=new Promise((resolve,reject)=>{if(!('indexedDB'in window)){reject(new Error('IndexedDB unavailable'));return}const request=indexedDB.open(DB_NAME,DB_VERSION);request.onupgradeneeded=()=>{const db=request.result;if(!db.objectStoreNames.contains(STORE)){const store=db.createObjectStore(STORE,{keyPath:'id'});store.createIndex('timestamp','timestamp',{unique:false})}};request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error||new Error('Unable to open Bob history'))});return dbPromise}
  function fallbackRead(){try{return JSON.parse(localStorage.getItem(FALLBACK_KEY)||'[]').filter(item=>item&&item.text&&item.type)}catch{return []}}
  function fallbackWrite(rows){try{localStorage.setItem(FALLBACK_KEY,JSON.stringify(rows.slice(-1500)))}catch{}}
  async function saveRecord(record){try{const db=await openDb();await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readwrite');tx.objectStore(STORE).put(record);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}catch{const rows=fallbackRead();const index=rows.findIndex(x=>x.id===record.id);if(index>=0)rows[index]=record;else rows.push(record);fallbackWrite(rows)}}
  async function loadRecords(){try{const db=await openDb();return await new Promise((resolve,reject)=>{const tx=db.transaction(STORE,'readonly');const request=tx.objectStore(STORE).index('timestamp').getAll();request.onsuccess=()=>resolve((request.result||[]).sort((a,b)=>new Date(a.timestamp)-new Date(b.timestamp)));request.onerror=()=>reject(request.error)})}catch{return fallbackRead().sort((a,b)=>new Date(a.timestamp)-new Date(b.timestamp))}}

  function ensureMemoryStyles(){if(document.getElementById('bobMemoryStyles'))return;const style=document.createElement('style');style.id='bobMemoryStyles';style.textContent='.bob-date-separator{align-self:center;margin:7px 0 3px;padding:5px 10px;border-radius:12px;background:#e8eeeb;color:#65726e;font-size:11px;font-weight:700;box-shadow:0 1px 1px rgba(0,0,0,.04)}';document.head.appendChild(style)}
  function lastRenderedDate(){const box=messages();if(!box)return null;const nodes=box.querySelectorAll('.bob-message[data-bob-time]');return nodes.length?dateKey(nodes[nodes.length-1].dataset.bobTime):null}
  function insertDateSeparator(timestamp){const box=messages();if(!box)return;const key=dateKey(timestamp);if(lastRenderedDate()===key)return;const sep=document.createElement('div');sep.className='bob-date-separator';sep.dataset.bobDate=key;sep.textContent=dateLabel(timestamp);box.appendChild(sep)}
  function renderRecord(record,{scroll=true}={}){const box=messages();if(!box)return null;insertDateSeparator(record.timestamp);const div=document.createElement('div');div.className=`bob-message ${record.type}`;div.dataset.bobPersisted='1';div.dataset.bobId=record.id;div.dataset.bobTime=record.timestamp;div.textContent=record.text;const t=document.createElement('span');t.className='bob-message-time';t.textContent=timeLabel(record.timestamp);div.appendChild(t);box.appendChild(div);window.dispatchEvent(new CustomEvent('bob:record-rendered',{detail:{record,node:div}}));if(scroll)box.scrollTop=box.scrollHeight;return div}
  async function add(text,type,timestamp=new Date().toISOString(),meta={}){const record={id:makeId(),type,text:String(text||''),timestamp,...(meta&&typeof meta==='object'?meta:{})};const node=renderRecord(record);await saveRecord(record);return{record,node}}
  async function addExternal(text,type='bot',meta={}){return add(text,type,new Date().toISOString(),meta)}
  function typing(show){document.getElementById('bobBrainTyping')?.remove();if(!show)return;const box=messages();if(!box)return;const row=document.createElement('div');row.id='bobBrainTyping';row.className='bob-typing';row.innerHTML='<span>Bob is typing</span><span class="bob-typing-dots"><i></i><i></i><i></i></span>';box.appendChild(row);box.scrollTop=box.scrollHeight}
  function visibleText(node){const clone=node.cloneNode(true);clone.querySelectorAll('.bob-message-time').forEach(x=>x.remove());return clone.textContent.trim()}
  async function captureExistingMessages(){const box=messages();if(!box)return;for(const node of box.querySelectorAll('.bob-message:not([data-bob-persisted])')){const text=visibleText(node);if(!text)continue;const record={id:makeId(),type:node.classList.contains('user')?'user':'bot',text,timestamp:new Date().toISOString()};node.dataset.bobPersisted='1';node.dataset.bobId=record.id;node.dataset.bobTime=record.timestamp;await saveRecord(record)}}
  function replayContext(records){if(!window.BobCourseBrain)return;const recent=records.filter(x=>x.type==='user'&&x.kind!=='photo').slice(-24);try{recent.forEach(item=>window.BobCourseBrain.reply(item.text))}catch(error){console.warn('Bob could not rebuild recent context',error)}}
  async function hydrateHistory(){const box=messages();if(!box)return;hydrating=true;await captureExistingMessages();const records=await loadRecords();box.innerHTML='';records.forEach(record=>renderRecord(record,{scroll:false}));replayContext(records);box.scrollTop=box.scrollHeight;hydrating=false}

  function handle(){if(busy||!window.BobCourseBrain)return false;const field=input(),button=send();if(!field||!button)return false;const text=field.value.trim();if(!text)return true;busy=true;field.value='';add(text,'user');field.disabled=true;button.disabled=true;typing(true);window.setTimeout(async()=>{let reply;try{reply=await Promise.resolve(window.BobCourseBrain.reply(text))}catch(error){console.warn('Bob brain reply failed',error);reply='I lost my train of thought for a second. Try that again for me.'}typing(false);await add(reply,'bot');busy=false;field.disabled=false;button.disabled=false;field.focus()},900+Math.random()*700);return true}

  function observeMessages(){const box=messages();if(!box)return false;observer?.disconnect();observer=new MutationObserver(mutations=>{if(hydrating)return;for(const mutation of mutations){for(const node of mutation.addedNodes){if(!(node instanceof HTMLElement)||!node.classList.contains('bob-message')||node.dataset.bobPersisted==='1')continue;const text=visibleText(node);if(!text)continue;const record={id:makeId(),type:node.classList.contains('user')?'user':'bot',text,timestamp:new Date().toISOString()};node.dataset.bobPersisted='1';node.dataset.bobId=record.id;node.dataset.bobTime=record.timestamp;saveRecord(record)}}});observer.observe(box,{childList:true});return true}

  document.addEventListener('click',event=>{if(!event.target.closest('#bobSend'))return;if(handle()){event.preventDefault();event.stopImmediatePropagation()}},true);
  document.addEventListener('keydown',event=>{if(event.key!=='Enter'||event.shiftKey||!event.target.closest('#bobInput'))return;if(handle()){event.preventDefault();event.stopImmediatePropagation()}},true);

  function loadScript(src,id){return new Promise((resolve,reject)=>{if(document.getElementById(id))return resolve();const script=document.createElement('script');script.id=id;script.src=src;script.onload=resolve;script.onerror=reject;document.head.appendChild(script)})}
  async function loadEnhancements(){try{await loadScript('bob-language-brain.js?v=0.7.0','bobLanguageBrainScript');await loadScript('bob-evidence-bridge.js?v=0.9.0','bobEvidenceBridgeScript')}catch(error){console.warn('A local Bob module could not load; core coaching remains available',error)}}
  async function init(){ensureMemoryStyles();const box=messages();if(!box){window.setTimeout(init,100);return}observeMessages();await hydrateHistory();await loadEnhancements()}
  window.BobBrainBridge={version:BRIDGE_VERSION,hydrate:hydrateHistory,history:loadRecords,addExternal,saveRecord};
  init();
})();