<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<meta name="theme-color" content="#071714">
<title>Technical Drawing · Apprentice+</title>
<style>
*{box-sizing:border-box}html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#fff;font-family:Arial,sans-serif;touch-action:none;overscroll-behavior:none;-webkit-user-select:none;user-select:none}
button{font:inherit}.screen{position:fixed!important;left:0!important;top:0!important;right:0!important;bottom:0!important;width:auto!important;height:auto!important;min-width:0!important;min-height:0!important;margin:0!important;padding:0!important;background:#fff;overflow:hidden!important;contain:layout paint size}.rotate{position:absolute;inset:0;z-index:20;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:28px;background:linear-gradient(160deg,#102f2a,#071714);color:#fff}.rotate[hidden]{display:none}.rotate-icon{display:grid;place-items:center;width:94px;height:94px;border-radius:28px;background:rgba(255,255,255,.12);font-size:60px;margin-bottom:20px}.rotate h1{margin:8px 0;font-size:30px}.rotate p{max-width:420px;margin:0 0 22px;color:#d5e2de;line-height:1.5}.green{color:#9de66f;font-size:11px;font-weight:900;letter-spacing:.1em;text-transform:uppercase}.primary{border:0;border-radius:14px;background:#58b51f;color:#fff;font-weight:900;padding:13px 22px}.close{position:absolute;right:max(14px,env(safe-area-inset-right));top:max(14px,env(safe-area-inset-top));z-index:30;width:44px;height:44px;border:0;border-radius:50%;background:rgba(7,23,20,.72);color:#fff;font-size:28px;display:grid;place-items:center}.viewer{position:fixed!important;left:0!important;top:0!important;right:0!important;bottom:0!important;width:auto!important;height:auto!important;display:block;background:#fff;overflow:hidden!important}.viewer[hidden]{display:none}.viewport{position:fixed!important;left:0!important;top:0!important;right:0!important;bottom:0!important;width:auto!important;height:auto!important;margin:0!important;padding:0!important;overflow:hidden!important;clip-path:inset(0);background:#fff;touch-action:none;overscroll-behavior:none}.transform{position:absolute;left:50%;top:50%;transform-origin:center center;will-change:transform;background:#fff}.transform img{display:block;max-width:none;max-height:none;pointer-events:none;-webkit-user-drag:none}.missing{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:30px;color:#173d38;background:#fff}.missing[hidden]{display:none}.missing strong{font-size:22px}.missing span{margin-top:7px;color:#687a75}.landscape-block{position:absolute;inset:0;z-index:15;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:#102f2a;color:#fff}.landscape-block[hidden]{display:none}.landscape-block h2{margin:8px 0}.landscape-block p{color:#d5e2de}

@media (max-height:430px){.close{top:6px;right:8px;width:38px;height:38px}}
</style>
</head>
<body>
<div class="screen">
 <section class="rotate" id="rotatePrompt">
  <button class="close" id="promptClose" aria-label="Close">×</button>
  <div class="rotate-icon">↻</div><div class="green">Technical drawing</div><h1>Rotate your phone</h1><p>Turn your device to landscape. The drawing will then fill the screen and you can pinch to zoom and drag around it.</p><button class="primary" id="continueButton">Open drawing</button>
 </section>
 <section class="viewer" id="viewer" hidden>
  <button class="close" id="viewerClose" aria-label="Close">×</button>
  <div class="viewport" id="viewport"><div class="transform" id="transform"><img id="drawing" draggable="false"></div><div class="missing" id="missing" hidden><strong>Drawing coming soon</strong><span id="missingFile"></span></div><div class="landscape-block" id="landscapeBlock" hidden><div class="rotate-icon">↻</div><h2>Return to landscape</h2><p>Rotate your phone to continue viewing the drawing.</p></div></div>
 </section>
</div>
<script>
(()=>{
 const q=new URLSearchParams(location.search),src=q.get('src')||'',title=q.get('title')||'Technical drawing',file=q.get('file')||'';
 const prompt=document.getElementById('rotatePrompt'),viewer=document.getElementById('viewer'),viewport=document.getElementById('viewport'),transform=document.getElementById('transform'),img=document.getElementById('drawing'),missing=document.getElementById('missing'),block=document.getElementById('landscapeBlock');
document.title=title+' · Apprentice+';document.getElementById('missingFile').textContent=file?file+' has not been uploaded yet.':'The drawing has not been uploaded yet.';
 let ready=false,started=false,baseW=0,baseH=0,zoom=1,x=0,y=0,pointers=new Map(),gesture=null,lastTap=0;
 const landscape=()=>innerWidth>innerHeight||(matchMedia('(orientation: landscape)').matches===true);
 const close=()=>{try{screen.orientation?.unlock?.()}catch{};try{history.back()}catch{location.href='index.html'}};
 const limits=()=>({x:Math.max(0,(baseW*zoom-viewport.clientWidth)/2),y:Math.max(0,(baseH*zoom-viewport.clientHeight)/2)});
 const clamp=()=>{const l=limits();x=Math.max(-l.x,Math.min(l.x,x));y=Math.max(-l.y,Math.min(l.y,y))};
 const apply=label=>{clamp();transform.style.width=baseW+'px';transform.style.height=baseH+'px';transform.style.transform=`translate3d(-50%,-50%,0) translate3d(${x}px,${y}px,0) scale(${zoom})`};
 const base=()=>{if(!ready)return;const r=viewport.getBoundingClientRect();const fit=Math.min(r.width/img.naturalWidth,r.height/img.naturalHeight);baseW=img.naturalWidth*fit;baseH=img.naturalHeight*fit;img.style.width=baseW+'px';img.style.height=baseH+'px'};
 const fitPage=()=>{base();zoom=1;x=0;y=0;apply('Fit Page')};
 const fitWidth=()=>{base();zoom=Math.max(1,Math.min(6,viewport.clientWidth/Math.max(1,baseW)));x=0;y=0;apply('Fit Width')};
 const actual=()=>{base();zoom=Math.max(1,Math.min(6,img.naturalWidth/Math.max(1,baseW)));x=0;y=0;apply('100%')};
 const zoomAt=(next,cx,cy)=>{next=Math.max(1,Math.min(6,next));const r=viewport.getBoundingClientRect(),px=cx-r.left-r.width/2,py=cy-r.top-r.height/2,ratio=next/zoom;x=px-(px-x)*ratio;y=py-(py-y)*ratio;zoom=next;apply()};
 const sync=()=>{if(!started)return;const ok=landscape();block.hidden=ok;transform.hidden=!ok||!ready;if(ok&&ready)requestAnimationFrame(()=>{base();apply()})};
 const start=async()=>{started=true;prompt.hidden=true;viewer.hidden=false;try{await document.documentElement.requestFullscreen?.()}catch{};try{await screen.orientation?.lock?.('landscape')}catch{};sync();if(ready)requestAnimationFrame(fitWidth)};
 img.onload=()=>{ready=true;missing.hidden=true;if(started&&landscape())requestAnimationFrame(fitWidth)};img.onerror=()=>{ready=false;transform.hidden=true;missing.hidden=false};img.src=src;
 document.getElementById('continueButton').onclick=start;document.getElementById('promptClose').onclick=close;document.getElementById('viewerClose').onclick=close;
 const begin=()=>{const p=[...pointers.values()];if(p.length===1)gesture={kind:'pan',sx:p[0].x,sy:p[0].y,x,y};else if(p.length>=2)gesture={kind:'pinch',d:Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y),zoom,x,y,mx:(p[0].x+p[1].x)/2,my:(p[0].y+p[1].y)/2}};
 viewport.addEventListener('pointerdown',e=>{if(!ready||!landscape())return;viewport.setPointerCapture?.(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});begin();e.preventDefault()});
 viewport.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId)||!gesture)return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});const p=[...pointers.values()];if(p.length===1&&gesture.kind==='pan'&&zoom>1){x=gesture.x+p[0].x-gesture.sx;y=gesture.y+p[0].y-gesture.sy;apply()}else if(p.length>=2){if(gesture.kind!=='pinch')begin();const d=Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);zoomAt(gesture.zoom*d/Math.max(1,gesture.d),gesture.mx,gesture.my)}e.preventDefault()});
 const end=e=>{pointers.delete(e.pointerId);if(pointers.size)begin();else{gesture=null;apply()}};viewport.addEventListener('pointerup',end);viewport.addEventListener('pointercancel',end);
 viewport.addEventListener('wheel',e=>{zoomAt(zoom*(e.deltaY<0?1.15:1/1.15),e.clientX,e.clientY);e.preventDefault()},{passive:false});viewport.addEventListener('dblclick',e=>{zoom>1.05?fitWidth():zoomAt(2.5,e.clientX,e.clientY);e.preventDefault()});viewport.addEventListener('touchend',e=>{if(e.touches.length)return;const now=Date.now();if(now-lastTap<280){const t=e.changedTouches[0];zoom>1.05?fitWidth():zoomAt(2.5,t.clientX,t.clientY);lastTap=0}else lastTap=now},{passive:true});
 addEventListener('resize',sync,{passive:true});addEventListener('orientationchange',sync,{passive:true});addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 if(landscape())start();
})();
</script>
</body></html>