(() => {
  'use strict';

  const BOB_VERSION = '0.1.0';
  const IDLE_MIN = 18000;
  const IDLE_MAX = 24000;
  const state = { mounted:false, open:false, step:'idle', idleTimer:0, lastAnimation:'' };

  const styles = `
  .combined-progress-ring{position:relative}
  .bob-launch{position:absolute;inset:24%;z-index:4;display:flex;align-items:center;justify-content:center;border-radius:50%;cursor:pointer;touch-action:manipulation;outline:none}
  .bob-launch:focus-visible{box-shadow:0 0 0 3px rgba(20,120,115,.28)}
  .bob-mascot{width:100%;height:100%;overflow:visible;filter:drop-shadow(0 2px 2px rgba(0,0,0,.08))}
  .bob-head{transform-origin:50% 58%}
  .bob-eye,.bob-pupil,.bob-mouth,.bob-hat,.bob-prop{transform-box:fill-box;transform-origin:center}
  .bob-prop{opacity:0;transition:opacity .18s ease}
  .bob-launch[data-bob-animation='wink'] .bob-eye-right{animation:bobWink 1.15s ease}
  .bob-launch[data-bob-animation='look'] .bob-pupils{animation:bobLook 2s ease}
  .bob-launch[data-bob-animation='spin'] .bob-head{animation:bobSpin 1.25s cubic-bezier(.2,.8,.2,1)}
  .bob-launch[data-bob-animation='plan'] .bob-plan{opacity:1;animation:bobPlan 2.8s ease}
  .bob-launch[data-bob-animation='tape'] .bob-tape{opacity:1;animation:bobTape 2.7s ease}
  .bob-launch[data-bob-animation='trowel'] .bob-trowel{opacity:1;animation:bobTrowel 2.4s ease}
  @keyframes bobWink{0%,18%,65%,100%{transform:scaleY(1)}32%,50%{transform:scaleY(.08)}}
  @keyframes bobLook{0%,100%{transform:translateX(0)}28%{transform:translateX(-4px)}62%{transform:translateX(4px)}}
  @keyframes bobSpin{0%{transform:rotate(0)}55%{transform:rotate(380deg)}78%{transform:rotate(350deg)}100%{transform:rotate(360deg)}}
  @keyframes bobPlan{0%,100%{transform:translateY(8px) scale(.8);opacity:0}18%,82%{transform:translateY(0) scale(1);opacity:1}}
  @keyframes bobTape{0%,100%{transform:translateX(-6px) rotate(-8deg);opacity:0}20%,80%{transform:translateX(0) rotate(0);opacity:1}}
  @keyframes bobTrowel{0%,100%{transform:translateY(8px) rotate(18deg);opacity:0}20%,80%{transform:translateY(0) rotate(-8deg);opacity:1}}
  @media (prefers-reduced-motion:reduce){.bob-launch *{animation:none!important;transition:none!important}}

  .bob-chat-backdrop{position:fixed;inset:0;z-index:10040;background:rgba(10,20,25,.38);opacity:0;pointer-events:none;transition:opacity .18s ease}
  .bob-chat-backdrop.open{opacity:1;pointer-events:auto}
  .bob-chat{position:fixed;z-index:10041;left:50%;bottom:0;width:min(680px,100%);height:min(78vh,720px);transform:translate(-50%,105%);display:flex;flex-direction:column;background:#f5f7f6;border-radius:22px 22px 0 0;box-shadow:0 -12px 42px rgba(0,0,0,.18);transition:transform .22s ease;overflow:hidden}
  .bob-chat.open{transform:translate(-50%,0)}
  .bob-chat-head{display:flex;align-items:center;gap:11px;padding:13px 14px;background:#fff;border-bottom:1px solid #e4e8e6}
  .bob-chat-avatar{width:44px;height:44px;flex:0 0 44px}
  .bob-chat-title{display:flex;flex-direction:column;min-width:0}
  .bob-chat-title strong{font-size:16px;color:#15211f}.bob-chat-title span{font-size:12px;color:#6e7c78;margin-top:2px}
  .bob-chat-close{margin-left:auto;width:40px;height:40px;border:0;border-radius:50%;background:#eef2f0;color:#23302d;font-size:24px;line-height:1;cursor:pointer}
  .bob-messages{flex:1;overflow:auto;padding:18px 14px 12px;display:flex;flex-direction:column;gap:9px;background:linear-gradient(rgba(255,255,255,.72),rgba(255,255,255,.72))}
  .bob-message{max-width:82%;padding:10px 12px;border-radius:14px;font-size:15px;line-height:1.38;white-space:pre-wrap;box-shadow:0 1px 1px rgba(0,0,0,.04)}
  .bob-message.bot{align-self:flex-start;background:#fff;border-top-left-radius:5px;color:#1b2422}
  .bob-message.user{align-self:flex-end;background:#d9f0e7;border-top-right-radius:5px;color:#14201d}
  .bob-message-time{display:block;margin-top:4px;font-size:10px;color:#85918e;text-align:right}
  .bob-typing{align-self:flex-start;display:flex;align-items:center;gap:7px;background:#fff;border-radius:14px 14px 14px 5px;padding:10px 12px;color:#687571;font-size:13px}
  .bob-typing-dots{display:flex;gap:3px}.bob-typing-dots i{width:5px;height:5px;border-radius:50%;background:#7b8985;animation:bobDot 1s infinite ease-in-out}.bob-typing-dots i:nth-child(2){animation-delay:.15s}.bob-typing-dots i:nth-child(3){animation-delay:.3s}
  @keyframes bobDot{0%,60%,100%{transform:translateY(0);opacity:.45}30%{transform:translateY(-3px);opacity:1}}
  .bob-composer{display:grid;grid-template-columns:1fr auto;gap:8px;padding:10px 10px calc(10px + env(safe-area-inset-bottom));background:#fff;border-top:1px solid #e1e7e4}
  .bob-input{width:100%;min-width:0;border:1px solid #d7dfdb;border-radius:22px;padding:11px 14px;font:inherit;background:#fff;color:#17211f;outline:none}
  .bob-input:focus{border-color:#2e9186;box-shadow:0 0 0 3px rgba(46,145,134,.12)}
  .bob-send{border:0;border-radius:50%;width:44px;height:44px;background:#147d73;color:white;font-size:18px;cursor:pointer}
  .bob-send:disabled{opacity:.45;cursor:default}
  @media (min-width:700px){.bob-chat{bottom:24px;height:min(76vh,700px);border-radius:22px}.bob-chat.open{transform:translate(-50%,0)}}
  `;

  function mascotSvg(extraClass='') {
    return `<svg class="bob-mascot ${extraClass}" viewBox="0 0 120 120" aria-hidden="true">
      <g class="bob-head">
        <circle cx="60" cy="65" r="35" fill="#fff" stroke="#111" stroke-width="5"/>
        <g class="bob-hat">
          <path d="M27 49c3-20 15-31 33-31s30 11 33 31" fill="#ffd326" stroke="#111" stroke-width="5" stroke-linejoin="round"/>
          <path d="M23 49h74c4 0 7 3 7 6H16c0-3 3-6 7-6z" fill="#ffd326" stroke="#111" stroke-width="5" stroke-linejoin="round"/>
          <path d="M54 20v24M66 20v24" stroke="#111" stroke-width="4" stroke-linecap="round"/>
        </g>
        <g class="bob-pupils">
          <g class="bob-eye bob-eye-left"><ellipse cx="46" cy="66" rx="7" ry="10" fill="#111"/><ellipse class="bob-pupil" cx="48" cy="63" rx="2" ry="3" fill="#fff"/></g>
          <g class="bob-eye bob-eye-right"><ellipse cx="74" cy="66" rx="7" ry="10" fill="#111"/><ellipse class="bob-pupil" cx="76" cy="63" rx="2" ry="3" fill="#fff"/></g>
        </g>
        <path class="bob-mouth" d="M48 84c7 7 17 7 24 0" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
      </g>
      <g class="bob-prop bob-plan"><rect x="72" y="78" width="31" height="24" rx="2" fill="#fff" stroke="#111" stroke-width="3"/><path d="M78 86h18M78 92h13M92 82v16" stroke="#5c8fa7" stroke-width="2"/></g>
      <g class="bob-prop bob-tape"><rect x="8" y="80" width="25" height="20" rx="5" fill="#ffd326" stroke="#111" stroke-width="3"/><circle cx="20" cy="90" r="4" fill="#fff" stroke="#111" stroke-width="2"/><path d="M33 88h26" stroke="#f4d66d" stroke-width="5"/><path d="M33 88h26" stroke="#111" stroke-width="1.4" stroke-dasharray="3 3"/></g>
      <g class="bob-prop bob-trowel"><path d="M88 80l17 8-15 8z" fill="#c8d0cf" stroke="#111" stroke-width="3"/><path d="M89 88L76 100" stroke="#111" stroke-width="5" stroke-linecap="round"/></g>
    </svg>`;
  }

  function injectStyles(){
    if(document.getElementById('bobFoundationStyles')) return;
    const style=document.createElement('style');style.id='bobFoundationStyles';style.textContent=styles;document.head.appendChild(style);
  }

  function randomIdle(){
    const choices=['wink','look','spin','plan','tape','trowel'].filter(x=>x!==state.lastAnimation);
    const action=choices[Math.floor(Math.random()*choices.length)];state.lastAnimation=action;
    const launch=document.querySelector('.bob-launch');if(!launch||state.open)return scheduleIdle();
    launch.dataset.bobAnimation=action;
    window.setTimeout(()=>{if(launch.dataset.bobAnimation===action)launch.dataset.bobAnimation='';}, action==='spin'?1400:3000);
    scheduleIdle();
  }

  function scheduleIdle(){clearTimeout(state.idleTimer);state.idleTimer=window.setTimeout(randomIdle,IDLE_MIN+Math.random()*(IDLE_MAX-IDLE_MIN));}

  function learnerName(){
    const label=document.querySelector('.learner-progress-button')?.textContent?.trim();
    return label||'there';
  }

  function mountMascot(){
    const ring=document.getElementById('openProgressPage');
    if(!ring||ring.querySelector('.bob-launch'))return;
    const launch=document.createElement('span');launch.className='bob-launch';launch.setAttribute('role','button');launch.setAttribute('tabindex','0');launch.setAttribute('aria-label','Open Bob, your AI coach');launch.dataset.bobAnimation='';launch.innerHTML=mascotSvg();
    launch.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();openChat();});
    launch.addEventListener('pointerdown',event=>event.stopPropagation());
    launch.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();event.stopPropagation();openChat();}});
    ring.appendChild(launch);
    if(!state.mounted){state.mounted=true;window.setTimeout(()=>{launch.dataset.bobAnimation='wink';window.setTimeout(()=>launch.dataset.bobAnimation='',1250);},650);scheduleIdle();}
  }

  function ensureChat(){
    if(document.getElementById('bobChat'))return;
    const backdrop=document.createElement('div');backdrop.id='bobChatBackdrop';backdrop.className='bob-chat-backdrop';
    const chat=document.createElement('section');chat.id='bobChat';chat.className='bob-chat';chat.setAttribute('role','dialog');chat.setAttribute('aria-modal','true');chat.setAttribute('aria-label','Chat with Bob');
    chat.innerHTML=`<header class="bob-chat-head"><div class="bob-chat-avatar">${mascotSvg()}</div><div class="bob-chat-title"><strong>Bob</strong><span>Apprentice+ Coach</span></div><button type="button" class="bob-chat-close" aria-label="Close Bob">×</button></header><div class="bob-messages" id="bobMessages" aria-live="polite"></div><div class="bob-composer"><input id="bobInput" class="bob-input" type="text" autocomplete="off" placeholder="Message Bob…" aria-label="Message Bob"><button id="bobSend" class="bob-send" type="button" aria-label="Send message">➤</button></div>`;
    document.body.append(backdrop,chat);
    backdrop.addEventListener('click',closeChat);chat.querySelector('.bob-chat-close').addEventListener('click',closeChat);
    const input=chat.querySelector('#bobInput'),send=chat.querySelector('#bobSend');
    send.addEventListener('click',sendMessage);input.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage();}});
  }

  function openChat(){
    ensureChat();state.open=true;clearTimeout(state.idleTimer);
    document.getElementById('bobChatBackdrop').classList.add('open');document.getElementById('bobChat').classList.add('open');
    const messages=document.getElementById('bobMessages');if(!messages.children.length){addBot(`Hi ${learnerName()}, what are we working on today?`);} 
    window.setTimeout(()=>document.getElementById('bobInput')?.focus(),230);
  }

  function closeChat(){state.open=false;document.getElementById('bobChatBackdrop')?.classList.remove('open');document.getElementById('bobChat')?.classList.remove('open');scheduleIdle();}

  function timeLabel(){return new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit'}).format(new Date());}
  function addMessage(text,type){const box=document.getElementById('bobMessages');if(!box)return;const div=document.createElement('div');div.className=`bob-message ${type}`;div.textContent=text;const t=document.createElement('span');t.className='bob-message-time';t.textContent=timeLabel();div.appendChild(t);box.appendChild(div);box.scrollTop=box.scrollHeight;}
  function addBot(text){addMessage(text,'bot');}
  function addUser(text){addMessage(text,'user');}
  function showTyping(){const box=document.getElementById('bobMessages');const row=document.createElement('div');row.id='bobTyping';row.className='bob-typing';row.innerHTML='<span>Bob is typing</span><span class="bob-typing-dots"><i></i><i></i><i></i></span>';box.appendChild(row);box.scrollTop=box.scrollHeight;}
  function hideTyping(){document.getElementById('bobTyping')?.remove();}

  function replyFor(text){
    const q=text.toLowerCase().trim();
    if(/solid\s*wall|solid brick|english bond|flemish bond/.test(q)){state.step='solid-wall';return 'Great. Solid Walling is one of your course areas. What are you doing on the wall right now — setting out, laying, bonding, jointing, cutting, or something else?';}
    if(state.step==='solid-wall'&&/lay|bond|joint|set|cut|brick|mortar|level|plumb/.test(q)){state.step='solid-evidence';return `That sounds useful for your Solid Walling evidence. The next step will be for me to let you take a photo here, check what it shows, and only add it to your portfolio after you confirm it.`;}
    if(/progress|how far|course/.test(q))return 'I can use the Apprentice+ course data to explain your progress. In the next foundation stage I will read the actual KSB and evidence gaps rather than guess from the chat.';
    if(/photo|picture|camera/.test(q))return 'Photo capture is next on the build. I will ask for the photo inside this chat, keep the original evidence, suggest the relevant course area, and ask you before saving it.';
    if(/hello|hi|hey|morning|afternoon/.test(q))return `Hi ${learnerName()}. Tell me what you are working on and I’ll help you turn the job into useful course evidence.`;
    return 'Got it. I am listening. The foundation is working; next I will be connected to your actual course and portfolio data so I can decide what evidence or question would be useful from what you tell me.';
  }

  function sendMessage(){
    const input=document.getElementById('bobInput'),send=document.getElementById('bobSend');if(!input||!send)return;
    const text=input.value.trim();if(!text)return;input.value='';addUser(text);send.disabled=true;input.disabled=true;showTyping();
    const delay=1000+Math.random()*1000;window.setTimeout(()=>{hideTyping();addBot(replyFor(text));send.disabled=false;input.disabled=false;input.focus();},delay);
  }

  const observer=new MutationObserver(()=>mountMascot());
  function init(){injectStyles();ensureChat();mountMascot();observer.observe(document.getElementById('app')||document.body,{childList:true,subtree:true});window.addEventListener('keydown',e=>{if(e.key==='Escape'&&state.open)closeChat();});window.BobFoundation={version:BOB_VERSION,open:openChat,close:closeChat};}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();