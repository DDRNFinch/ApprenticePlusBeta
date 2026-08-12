(() => {
  'use strict';

  const VERSION='0.9.0';
  const DB_NAME='apprenticeplus-bob';
  const STORE='messages';
  const FALLBACK_KEY='apprenticeplus.bob.chat.v1';
  let resetting=false;

  function learnerName(){
    try{return String(state?.profile?.fullName||document.querySelector('.learner-progress-button')?.textContent||'').trim().split(/\s+/)[0]||'there'}catch{return 'there'}
  }

  function styles(){
    if(document.getElementById('bobChatControlsStyles'))return;
    const style=document.createElement('style');style.id='bobChatControlsStyles';style.textContent=`
      .bob-chat-title-row{display:flex;align-items:center;gap:9px;min-width:0}
      .bob-new-chat{border:0;background:transparent;padding:3px 0;color:#147d73;font:inherit;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap}
      .bob-new-chat:hover{text-decoration:underline}
      .bob-new-chat:disabled{opacity:.45;cursor:default;text-decoration:none}
    `;document.head.appendChild(style);
  }

  function clearDb(){
    return new Promise(resolve=>{
      if(!('indexedDB' in window)){resolve();return}
      const req=indexedDB.open(DB_NAME,1);
      req.onerror=()=>resolve();
      req.onsuccess=()=>{
        const db=req.result;
        if(!db.objectStoreNames.contains(STORE)){db.close();resolve();return}
        const tx=db.transaction(STORE,'readwrite');
        tx.objectStore(STORE).clear();
        tx.oncomplete=()=>{db.close();resolve()};
        tx.onerror=()=>{db.close();resolve()};
      };
    });
  }

  async function newChat(){
    if(resetting)return;
    resetting=true;
    const button=document.getElementById('bobNewChat');if(button)button.disabled=true;
    try{
      await clearDb();
      try{localStorage.removeItem(FALLBACK_KEY)}catch{}
      try{window.BobCourseBrain?.reset?.()}catch{}
      document.getElementById('bobBrainTyping')?.remove();
      document.getElementById('bobTyping')?.remove();
      const box=document.getElementById('bobMessages');if(box)box.innerHTML='';
      await window.BobBrainBridge?.addExternal?.(`Hi ${learnerName()}, what are we working on today?`,'bot',{kind:'new-chat'});
      const input=document.getElementById('bobInput');if(input){input.value='';input.disabled=false;setTimeout(()=>input.focus(),40)}
      const send=document.getElementById('bobSend');if(send)send.disabled=false;
    }finally{
      resetting=false;if(button)button.disabled=false;
    }
  }

  function install(){
    const title=document.querySelector('#bobChat .bob-chat-title');if(!title)return false;
    if(document.getElementById('bobNewChat'))return true;
    styles();
    const strong=title.querySelector('strong');if(!strong)return false;
    const row=document.createElement('div');row.className='bob-chat-title-row';
    strong.before(row);row.appendChild(strong);
    const button=document.createElement('button');button.type='button';button.id='bobNewChat';button.className='bob-new-chat';button.textContent='[New chat]';button.setAttribute('aria-label','Start a new chat with Bob');
    row.appendChild(button);button.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();newChat()});
    return true;
  }

  const observer=new MutationObserver(()=>install());
  function init(){if(!install())setTimeout(init,80);observer.observe(document.body,{childList:true,subtree:true});window.BobChatControls={version:VERSION,newChat}}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();