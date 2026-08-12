(() => {
  'use strict';
  const BRIDGE_VERSION='0.2.0';
  let busy=false;
  const timeLabel=()=>new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit'}).format(new Date());
  function messages(){return document.getElementById('bobMessages')}
  function input(){return document.getElementById('bobInput')}
  function send(){return document.getElementById('bobSend')}
  function add(text,type){const box=messages();if(!box)return;const div=document.createElement('div');div.className=`bob-message ${type}`;div.textContent=text;const t=document.createElement('span');t.className='bob-message-time';t.textContent=timeLabel();div.appendChild(t);box.appendChild(div);box.scrollTop=box.scrollHeight}
  function typing(show){const old=document.getElementById('bobBrainTyping');if(old)old.remove();if(!show)return;const box=messages();if(!box)return;const row=document.createElement('div');row.id='bobBrainTyping';row.className='bob-typing';row.innerHTML='<span>Bob is typing</span><span class="bob-typing-dots"><i></i><i></i><i></i></span>';box.appendChild(row);box.scrollTop=box.scrollHeight}
  function handle(){
    if(busy||!window.BobCourseBrain)return false;
    const field=input(),button=send();if(!field||!button)return false;
    const text=field.value.trim();if(!text)return true;
    busy=true;field.value='';add(text,'user');field.disabled=true;button.disabled=true;typing(true);
    const delay=1000+Math.random()*1000;
    window.setTimeout(()=>{
      typing(false);
      let reply;try{reply=window.BobCourseBrain.reply(text)}catch(error){console.warn('Bob brain reply failed',error);reply='I had trouble reading your course data just then. Try that again for me.'}
      add(reply,'bot');busy=false;field.disabled=false;button.disabled=false;field.focus();
    },delay);
    return true;
  }
  document.addEventListener('click',event=>{
    if(!event.target.closest('#bobSend'))return;
    if(handle()){event.preventDefault();event.stopImmediatePropagation()}
  },true);
  document.addEventListener('keydown',event=>{
    if(event.key!=='Enter'||event.shiftKey||!event.target.closest('#bobInput'))return;
    if(handle()){event.preventDefault();event.stopImmediatePropagation()}
  },true);
  window.BobBrainBridge={version:BRIDGE_VERSION};
})();