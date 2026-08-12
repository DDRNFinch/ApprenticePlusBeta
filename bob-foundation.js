(() => {
  'use strict';

  const BOB_VERSION = '0.2.0';
  const IDLE_MIN = 18000;
  const IDLE_MAX = 24000;
  const state = { mounted:false, open:false, step:'idle', idleTimer:0, lastAnimation:'' };

  const styles = `
  .bob-launch{display:flex!important;align-items:center!important;justify-content:center!important;padding:0!important;overflow:visible!important;cursor:pointer;touch-action:manipulation;perspective:180px}
  .bob-launch .bob-mascot{width:100%;height:100%;transform:scale(1.08);transform-origin:50% 55%;transform-style:preserve-3d}
  .bob-launch:focus-visible{box-shadow:0 0 0 3px rgba(20,120,115,.28)}
  .bob-mascot{width:100%;height:100%;overflow:visible;filter:drop-shadow(0 1px 1px rgba(0,0,0,.08));transform-style:preserve-3d}
  .bob-head{transform-box:fill-box;transform-origin:50% 58%;transform-style:preserve-3d}
  .bob-eye,.bob-mouth,.bob-hat,.bob-prop{transform-box:fill-box;transform-origin:center}
  .bob-prop{opacity:0;transition:opacity .18s ease}
  .bob-launch[data-bob-animation='wink'] .bob-eye-right{animation:bobWink 1.15s ease}
  .bob-launch[data-bob-animation='wink'] .bob-head{animation:bobWinkTilt 1.15s ease}
  .bob-launch[data-bob-animation='look'] .bob-head{animation:bobLook3d 2.35s ease-in-out}
  .bob-launch[data-bob-animation='spin'] .bob-mascot{animation:bobSpin3d 1.7s cubic-bezier(.2,.8,.2,1)}
  .bob-launch[data-bob-animation='plan'] .bob-plan{opacity:1;animation:bobPlan 3s ease}
  .bob-launch[data-bob-animation='plan'] .bob-head{animation:bobReadPlan 3s ease}
  .bob-launch[data-bob-animation='tape'] .bob-tape{opacity:1;animation:bobTape 2.9s ease}
  .bob-launch[data-bob-animation='tape'] .bob-head{animation:bobMeasureLook 2.9s ease}
  .bob-launch[data-bob-animation='trowel'] .bob-trowel{opacity:1;animation:bobTrowel 2.7s ease}
  .bob-launch[data-bob-animation='trowel'] .bob-head{animation:bobToolLean 2.7s ease}
  @keyframes bobWink{0%,18%,65%,100%{transform:scaleY(1)}32%,50%{transform:scaleY(.05)}}
  @keyframes bobWinkTilt{0%,100%{transform:rotate(0) translateY(0)}35%,55%{transform:rotate(-7deg) translateY(1px)}}
  @keyframes bobLook3d{0%,100%{transform:translateX(0) scaleX(1) skewY(0)}20%{transform:translateX(-2px) scaleX(.88) skewY(2deg)}43%{transform:translateX(-1px) scaleX(.95) skewY(0)}68%{transform:translateX(2px) scaleX(.88) skewY(-2deg)}85%{transform:translateX(1px) scaleX(.96) skewY(0)}}
  @keyframes bobSpin3d{0%{transform:scale(1.08) scaleX(1) rotate(0)}20%{transform:scale(1.03) scaleX(.52) rotate(-4deg)}42%{transform:scale(.98) scaleX(.12) rotate(1deg)}61%{transform:scale(1.02) scaleX(-.55) rotate(4deg)}82%{transform:scale(1.08) scaleX(-1) rotate(0)}93%{transform:scale(1.08) scaleX(.45) rotate(-2deg)}100%{transform:scale(1.08) scaleX(1) rotate(0)}}
  @keyframes bobPlan{0%,100%{transform:translate(11px,10px) rotateY(18deg) rotateZ(8deg) scale(.72);opacity:0}16%,82%{transform:translate(0,0) rotateY(-8deg) rotateZ(-4deg) scale(1);opacity:1}48%{transform:translate(-2px,-1px) rotateY(7deg) rotateZ(2deg) scale(1.04);opacity:1}}
  @keyframes bobReadPlan{0%,100%{transform:translate(0,0) rotate(0) scaleX(1)}20%{transform:translate(2px,2px) rotate(6deg) scaleX(.94)}48%{transform:translate(3px,3px) rotate(9deg) scaleX(.9)}76%{transform:translate(1px,2px) rotate(5deg) scaleX(.95)}}
  @keyframes bobTape{0%,100%{transform:translate(-10px,8px) rotate(-18deg) scale(.75);opacity:0}18%{transform:translate(-1px,1px) rotate(-7deg) scale(1);opacity:1}43%{transform:translate(2px,-1px) rotate(2deg) scale(1.05);opacity:1}70%{transform:translate(-1px,0) rotate(-3deg) scale(.98);opacity:1}84%{opacity:1}}
  @keyframes bobMeasureLook{0%,100%{transform:translate(0,0) rotate(0) scaleX(1)}24%{transform:translate(-2px,1px) rotate(-7deg) scaleX(.92)}52%{transform:translate(-3px,2px) rotate(-10deg) scaleX(.88)}75%{transform:translate(-1px,1px) rotate(-4deg) scaleX(.96)}}
  @keyframes bobTrowel{0%,100%{transform:translate(8px,9px) rotate(24deg) scale(.72);opacity:0}20%{transform:translate(1px,1px) rotate(-12deg) scale(1);opacity:1}44%{transform:translate(-3px,-2px) rotate(-28deg) scale(1.08);opacity:1}67%{transform:translate(2px,1px) rotate(8deg) scale(.97);opacity:1}84%{opacity:1}}
  @keyframes bobToolLean{0%,100%{transform:translate(0,0) rotate(0) scaleX(1)}27%{transform:translate(2px,1px) rotate(7deg) scaleX(.93)}52%{transform:translate(3px,0) rotate(10deg) scaleX(.9)}73%{transform:translate(1px,1px) rotate(4deg) scaleX(.97)}}
  @media (prefers-reduced-motion:reduce){.bob-launch *{animation:none!important;transition:none!important}}

  .bob-chat-backdrop{position:fixed;inset:0;z-index:10040;background:rgba(10,20,25,.38);opacity:0;pointer-events:none;transition:opacity .18s ease}
  .bob-chat-backdrop.open{opacity:1;pointer-events:auto}
  .bob-chat{position:fixed;z-index:10041;left:50%;bottom:0;width:min(680px,100%);height:min(78vh,720px);transform:translate(-50%,105%);display:flex;flex-direction:column;background:#f5f7f6;border-radius:22px 22px 0 0;box-shadow:0 -12px 42px rgba(0,0,0,.18);transition:transform .22s ease;overflow:hidden}
  .bob-chat.open{transform:translate(-50%,0)}
  .bob-chat-head{display:flex;flex:0 0 auto;align-items:center;gap:11px;padding:13px 14px;background:#fff;border-bottom:1px solid #e4e8e6}
  .bob-chat-avatar{width:44px;height:44px;flex:0 0 44px}
  .bob-chat-title{display:flex;flex-direction:column;min-width:0}
  .bob-chat-title strong{font-size:16px;color:#15211f}.bob-chat-title span{font-size:12px;color:#6e7c78;margin-top:2px}
  .bob-chat-close{margin-left:auto;width:40px;height:40px;border:0;border-radius:50%;background:#eef2f0;color:#23302d;font-size:24px;line-height:1;cursor:pointer}
  .bob-messages{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;padding:18px 14px 12px;display:flex;flex-direction:column;gap:9px;background:linear-gradient(rgba(255,255,255,.72),rgba(255,255,255,.72))}
  .bob-message{max-width:82%;padding:10px 12px;border-radius:14px;font-size:15px;line-height:1.38;white-space:pre-wrap;box-shadow:0 1px 1px rgba(0,0,0,.04)}
  .bob-message.bot{align-self:flex-start;background:#fff;border-top-left-radius:5px;color:#1b2422}
  .bob-message.user{align-self:flex-end;background:#d9f0e7;border-top-right-radius:5px;color:#14201d}
  .bob-message-time{display:block;margin-top:4px;font-size:10px;color:#85918e;text-align:right}
  .bob-typing{align-self:flex-start;display:flex;align-items:center;gap:7px;background:#fff;border-radius:14px 14px 14px 5px;padding:10px 12px;color:#687571;font-size:13px}
  .bob-typing-dots{display:flex;gap:3px}.bob-typing-dots i{width:5px;height:5px;border-radius:50%;background:#7b8985;animation:bobDot 1s infinite ease-in-out}.bob-typing-dots i:nth-child(2){animation-delay:.15s}.bob-typing-dots i:nth-child(3){animation-delay:.3s}
  @keyframes bobDot{0%,60%,100%{transform:translateY(0);opacity:.45}30%{transform:translateY(-3px);opacity:1}}
  .bob-composer{display:grid;flex:0 0 auto;grid-template-columns:1fr auto;gap:8px;padding:10px 10px max(10px,env(safe-area-inset-bottom));background:#fff;border-top:1px solid #e1e7e4}
  .bob-input{width:100%;min-width:0;border:1px solid #d7dfdb;border-radius:22px;padding:11px 14px;font:inherit;background:#fff;color:#17211f;outline:none}
  .bob-input:focus{border-color:#2e9186;box-shadow:0 0 0 3px rgba(46,145,134,.12)}
  .bob-send{border:0;border-radius:50%;width:44px;height:44px;background:#147d73;color:white;font-size:18px;cursor:pointer}
  .bob-send:disabled{opacity:.45;cursor:default}
  @media (max-width:699px){
    .bob-chat{left:0;top:var(--bob-vv-top,0px);bottom:auto;width:100%;height:var(--bob-vv-height,100dvh);max-height:none;border-radius:22px 22px 0 0;transform:translateY(105%);transition:transform .22s ease}
    .bob-chat.open{transform:translateY(0)}
  }
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
        <g class="bob-eyes">
          <ellipse class="bob-eye bob-eye-left" cx="46" cy="66" rx="7" ry="10" fill="#fff" stroke="#111" stroke-width="5"/>
          <ellipse class="bob-eye bob-eye-right" cx="74" cy="66" rx="7" ry="10" fill="#fff" stroke="#111" stroke-width="5"/>
        </g>
        <path class="bob-mouth" d="M48 84c7 7 17 7 24 0" fill="none" stroke="#111" stroke-width="4" stroke-linecap="round"/>
      </g>
      <g class="bob-prop bob-plan"><rect x="72" y="78" width="31" height="24" rx="2" fill="#fff" stroke="#111" stroke-width="3"/><path d="M78 86h18M78 92h13M92 82v16" fill="none" stroke="#111" stroke-width="2"/></g>
      <g class="bob-prop bob-tape"><rect x="8" y="80" width="25" height="20" rx="5" fill="#fff" stroke="#111" stroke-width="3"/><circle cx="20" cy="90" r="4" fill="#fff" stroke="#111" stroke-width="2"/><path d="M33 88h26" fill="none" stroke="#111" stroke-width="3"/><path d="M38 84v8M45 84v8M52 84v8" stroke="#111" stroke-width="1.3"/></g>
      <g class="bob-prop bob-trowel"><path d="M88 80l17 8-15 8z" fill="#fff" stroke="#111" stroke-width="3"/><path d="M89 88L76 100" stroke="#111" stroke-width="5" stroke-linecap="round"/></g>
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
    window.setTimeout(()=>{if(launch.dataset.bobAnimation===action)launch.dataset.bobAnimation='';}, action==='spin'?1800:3200);
    scheduleIdle();
  }

  function scheduleIdle(){clearTimeout(state.idleTimer);state.idleTimer=window.setTimeout(randomIdle,IDLE_MIN+Math.random()*(IDLE_MAX-IDLE_MIN));}

  function learnerName(){
    const label=document.querySelector('.learner-progress-button')?.textContent?.trim();
    return label||'there';
  }

  function mountMascot(){
    document.querySelectorAll('#openProgressPage .bob-launch').forEach(node=>node.remove());
    const help=document.getElementById('pageHelpButton');
    if(!help)return;
    if(help.dataset.bobMounted==='1')return;
    help.dataset.bobMounted='1';
    help.classList.add('bob-launch');
    help.innerHTML=mascotSvg();
    help.setAttribute('aria-label','Open Bob, your AI coach');
    help.removeAttribute('title');
    help.onclick=null;
    const replacement=help.cloneNode(true);
    help.replaceWith(replacement);
    replacement.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();openChat();});
    replacement.addEventListener('pointerdown',event=>event.stopPropagation());
    if(!state.mounted){state.mounted=true;window.setTimeout(()=>{replacement.dataset.bobAnimation='wink';window.setTimeout(()=>replacement.dataset.bobAnimation='',1250);},650);scheduleIdle();}
  }

  function syncVisualViewport(){
    if(window.innerWidth>=700)return;
    const viewport=window.visualViewport;
    const height=Math.max(240,Math.round(viewport?.height||window.innerHeight||document.documentElement.clientHeight||600));
    const top=Math.max(0,Math.round(viewport?.offsetTop||0));
    document.documentElement.style.setProperty('--bob-vv-height',`${height}px`);
    document.documentElement.style.setProperty('--bob-vv-top',`${top}px`);
    if(state.open){const messages=document.getElementById('bobMessages');if(messages)messages.scrollTop=messages.scrollHeight;}
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
    input.addEventListener('focus',()=>{window.setTimeout(syncVisualViewport,40);window.setTimeout(syncVisualViewport,220);});
    input.addEventListener('blur',()=>window.setTimeout(syncVisualViewport,80));
  }

  function openChat(){
    ensureChat();state.open=true;clearTimeout(state.idleTimer);syncVisualViewport();
    document.getElementById('bobChatBackdrop').classList.add('open');document.getElementById('bobChat').classList.add('open');
    const messages=document.getElementById('bobMessages');if(!messages.children.length){addBot(`Hi ${learnerName()}, what are we working on today?`);} 
    window.setTimeout(()=>{const input=document.getElementById('bobInput');input?.focus();syncVisualViewport();window.setTimeout(syncVisualViewport,180);},230);
  }

  function closeChat(){state.open=false;document.getElementById('bobChatBackdrop')?.classList.remove('open');document.getElementById('bobChat')?.classList.remove('open');document.documentElement.style.removeProperty('--bob-vv-height');document.documentElement.style.removeProperty('--bob-vv-top');scheduleIdle();}

  function timeLabel(){return new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit'}).format(new Date());}
  function addMessage(text,type){const box=document.getElementById('bobMessages');if(!box)return;const div=document.createElement('div');div.className=`bob-message ${type}`;div.textContent=text;const t=document.createElement('span');t.className='bob-message-time';t.textContent=timeLabel();div.appendChild(t);box.appendChild(div);box.scrollTop=box.scrollHeight;}
  function addBot(text){addMessage(text,'bot');}
  function addUser(text){addMessage(text,'user');}
  function showTyping(){const box=document.getElementById('bobMessages');const row=document.createElement('div');row.id='bobTyping';row.className='bob-typing';row.innerHTML='<span>Bob is typing</span><span class="bob-typing-dots"><i></i><i></i><i></i></span>';box.appendChild(row);box.scrollTop=box.scrollHeight;}
  function hideTyping(){document.getElementById('bobTyping')?.remove();}

  function replyFor(text){
    if(window.BobCourseBrain){try{return window.BobCourseBrain.reply(text)}catch(error){console.warn('Bob course brain failed',error)}}
    const q=text.toLowerCase().trim();
    if(/solid\s*wall|solid brick|english bond|flemish bond/.test(q)){state.step='solid-wall';return 'Great. Solid Walling is one of your course areas. What are you doing on the wall right now — setting out, laying, bonding, jointing, cutting, or something else?';}
    if(state.step==='solid-wall'&&/lay|bond|joint|set|cut|brick|mortar|level|plumb/.test(q)){state.step='solid-evidence';return `That sounds useful for your Solid Walling evidence. The next step will be for me to let you take a photo here, check what it shows, and only add it to your portfolio after you confirm it.`;}
    if(/progress|how far|course/.test(q))return 'I can use the Apprentice+ course data to explain your progress. My course brain is loading, so try that again in a moment.';
    if(/photo|picture|camera/.test(q))return 'Photo capture is next on the build. I will ask for the photo inside this chat, keep the original evidence, suggest the relevant course area, and ask you before saving it.';
    if(/hello|hi|hey|morning|afternoon/.test(q))return `Hi ${learnerName()}. Tell me what you are working on and I’ll help you turn the job into useful course evidence.`;
    return 'Got it. I am listening. Tell me a little more about the job and I will try to match it to your course.';
  }

  function sendMessage(){
    const input=document.getElementById('bobInput'),send=document.getElementById('bobSend');if(!input||!send)return;
    const text=input.value.trim();if(!text)return;input.value='';addUser(text);send.disabled=true;input.disabled=true;showTyping();
    const delay=1000+Math.random()*1000;window.setTimeout(()=>{hideTyping();addBot(replyFor(text));send.disabled=false;input.disabled=false;input.focus();window.setTimeout(syncVisualViewport,60);},delay);
  }

  function loadScript(src,id){return new Promise((resolve,reject)=>{if(document.getElementById(id))return resolve();const s=document.createElement('script');s.id=id;s.src=src;s.onload=resolve;s.onerror=reject;document.head.appendChild(s)})}
  function loadBrain(){return loadScript('bob-course-brain.js?v=0.2.0','bobCourseBrainScript').then(()=>loadScript('bob-brain-bridge.js?v=0.2.0','bobBrainBridgeScript')).catch(error=>console.warn('Bob brain scripts could not load',error))}

  const observer=new MutationObserver(()=>mountMascot());
  function init(){injectStyles();ensureChat();syncVisualViewport();mountMascot();loadBrain();observer.observe(document.getElementById('app')||document.body,{childList:true,subtree:true});window.addEventListener('keydown',e=>{if(e.key==='Escape'&&state.open)closeChat();});window.addEventListener('resize',syncVisualViewport,{passive:true});window.visualViewport?.addEventListener('resize',syncVisualViewport,{passive:true});window.visualViewport?.addEventListener('scroll',syncVisualViewport,{passive:true});window.BobFoundation={version:BOB_VERSION,open:openChat,close:closeChat};}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();