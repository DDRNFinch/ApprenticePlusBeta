(function(global){
  'use strict';
  const VERSION=1;
  const OUTCOME_KEY='apprenticePlus:receivedReviewOutcomes:v1';
  const IMPORTED_IDS_KEY='apprenticePlus:importedReviewIds:v1';
  const uid=prefix=>`${prefix}_${Date.now().toString(36)}${Math.random().toString(36).slice(2,8)}`;
  const num=v=>{const n=Number(v);return Number.isFinite(n)?n:null};
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const load=(key,fallback=[])=>{try{const v=JSON.parse(localStorage.getItem(key)||'null');return v??fallback}catch{return fallback}};
  const save=(key,value)=>localStorage.setItem(key,JSON.stringify(value));
  const isoPlusHours=hours=>new Date(Date.now()+hours*3600000).toISOString();
  function assertNoPersonalData(data){
    const forbidden=['learnerName','name','firstName','lastName','dateOfBirth','dob','email','phone','address','employerContact','signature'];
    for(const key of forbidden){if(data?.[key])throw new Error(`Personal field not permitted in review snapshot: ${key}`)}
  }
  function makeSnapshot(data){
    assertNoPersonalData(data||{});
    return {
      format:'APPRENTICE_PLUS_REVIEW_SNAPSHOT',version:VERSION,direction:'ApprenticePlusToAssessorPlus',
      transferId:data.transferId||uid('snapshot'),createdAt:new Date().toISOString(),expiresAt:data.expiresAt||isoPlusHours(24),
      course:String(data.course||''),standardVersion:String(data.standardVersion||''),reviewPeriod:String(data.reviewPeriod||''),
      progressPercent:num(data.progressPercent),ksbCompleted:num(data.ksbCompleted),ksbTotal:num(data.ksbTotal),
      assignmentsCompleted:num(data.assignmentsCompleted),assignmentsTotal:num(data.assignmentsTotal),
      otjHours:num(data.otjHours),otjRequired:num(data.otjRequired),academyScore:num(data.academyScore),epaStatus:String(data.epaStatus||''),
      ragStatus:String(data.ragStatus||''),reviewStatus:String(data.reviewStatus||''),
      newEvidenceCount:num(data.newEvidenceCount),newKsbCount:num(data.newKsbCount),
      evidenceTotal:num(data.evidenceTotal),epaReadiness:data.epaReadiness&&typeof data.epaReadiness==='object'?data.epaReadiness:null,
      progressSnapshot:data.progressSnapshot&&typeof data.progressSnapshot==='object'?data.progressSnapshot:null,
      learnerReflection:String(data.learnerReflection||''),
      previousTargets:Array.isArray(data.previousTargets)?data.previousTargets.slice(0,10).map(t=>({text:String(t.text||t.target||t.title||''),status:String(t.status||'To review')})):[],
      suggestedTargets:Array.isArray(data.suggestedTargets)?data.suggestedTargets.slice(0,5).map(t=>String(t.text||t.target||t.title||t)) : []
    };
  }
  function parseOutcome(input){
    let raw=typeof input==='string'?JSON.parse(input):input;
    if(raw?.f==='APR'&&raw?.d==='A2P'){
      raw={format:'ASSESSOR_PLUS_REVIEW_OUTCOME',version:Number(raw.v||1),direction:'AssessorPlusToApprenticePlus',reviewId:String(raw.i||''),createdAt:String(raw.c||''),reviewDate:String(raw.rd||''),nextReviewDate:String(raw.nr||''),rag:String(raw.g||''),attendancePercent:num(raw.a),tutorSummary:String(raw.s||''),targets:Array.isArray(raw.t)?raw.t.slice(0,5).map(x=>({text:String(Array.isArray(x)?x[0]||'':x?.text||''),dueDate:String(Array.isArray(x)?x[1]||'':x?.dueDate||'')})):[],compactQr:true};
    }
    if(raw?.format==='APREVIEW_PACKAGE'&&raw.payload)raw=raw.payload;
    if(!raw||raw.direction!=='AssessorPlusToApprenticePlus'||raw.format!=='ASSESSOR_PLUS_REVIEW_OUTCOME')throw new Error('Not a valid Assessor+ review outcome.');
    if(!raw.reviewId)throw new Error('The review outcome has no review ID.');
    return raw;
  }
  function download(name,text,type='application/octet-stream'){
    const blob=new Blob([text],{type}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500);
  }
  function snapshotFromApp(){
    const snap=typeof reviewMateSnapshot==='function'?reviewMateSnapshot():{};
    const active=typeof activeCourseReviewMateReview==='function'?activeCourseReviewMateReview():null;
    const progress=snap.progress||{},academy=snap.academy||{},epa=snap.epa||{},evidence=snap.evidence||{};
    const targets=(active?.targets||[]).slice(0,5).map(t=>({text:t.title||t.details||'',status:typeof reviewTargetComplete==='function'&&reviewTargetComplete(t)?'Achieved':'In progress'}));
    const suggested=typeof buildReviewMateTargets==='function'?buildReviewMateTargets().slice(0,5).map(t=>t.title||t.details||''):[];
    const previousSnapshot=active?.snapshot||{};
    const newEvidence=Math.max(0,Number(evidence.items||0)-Number(previousSnapshot.evidence?.items||0));
    const newKsbs=Math.max(0,Number(progress.ksbCompleted||0)-Number(previousSnapshot.progress?.ksbCompleted||0));
    const elapsed=Number(progress.red),timeRatio=Number.isFinite(elapsed)?elapsed/100:null;
    const expectedAssignments=timeRatio===null?null:Math.min(Number(progress.total||0),Math.max(0,Math.round(Number(progress.total||0)*timeRatio)));
    const expectedKsbs=timeRatio===null?null:Math.min(Number(progress.ksbTotal||0),Math.max(0,Math.round(Number(progress.ksbTotal||0)*timeRatio)));
    const ratios=[];
    if(expectedAssignments!==null)ratios.push(expectedAssignments?Number(progress.completed||0)/expectedAssignments:1);
    if(expectedKsbs!==null)ratios.push(expectedKsbs?Number(progress.ksbCompleted||0)/expectedKsbs:1);
    if(Number(snap.otj?.expected||0)>0)ratios.push(Number(snap.otj?.total||0)/Number(snap.otj.expected));
    const average=ratios.length?ratios.reduce((a,b)=>a+Math.min(1.2,b),0)/ratios.length:0;
    const rag=timeRatio===null?'Amber':average>=1?'Green':average>=.8?'Amber':'Red';
    const reviewStatus=timeRatio===null?'Course dates needed':average>=1?'On or ahead of target':average>=.8?'Close to target':'Behind target';
    return makeSnapshot({
      course:COURSE?.name||'',standardVersion:COURSE?.version||COURSE?.standardVersion||'',
      reviewPeriod:`Generated ${new Date().toLocaleDateString('en-GB')}`,
      progressPercent:Number(progress.green||0),ksbCompleted:Number(progress.ksbCompleted||0),ksbTotal:Number(progress.ksbTotal||0),
      assignmentsCompleted:Number(progress.completed||0),assignmentsTotal:Number(progress.total||0),
      otjHours:Number(Number(snap.otj?.total||0).toFixed(1)),otjRequired:Number(Number(snap.otj?.expected||0).toFixed(1)),
      academyScore:academy.tests?null:null,epaStatus:epa.overall!=null?`${Math.round(epa.overall)}% ready`:'Not available',
      epaReadiness:epa.overall!=null?{overall:Math.round(epa.overall),knowledge:epa.knowledge,discussion:epa.discussion,practical:epa.practical}:null,
      ragStatus:rag,reviewStatus,newEvidenceCount:newEvidence,newKsbCount:newKsbs,evidenceTotal:Number(evidence.items||0),
      progressSnapshot:{rag,reviewStatus,progressPercent:Number(progress.green||0),assignmentsCompleted:Number(progress.completed||0),assignmentsTotal:Number(progress.total||0),ksbCompleted:Number(progress.ksbCompleted||0),ksbTotal:Number(progress.ksbTotal||0),otjHours:Number(Number(snap.otj?.total||0).toFixed(1)),otjRequired:Number(Number(snap.otj?.expected||0).toFixed(1)),timeElapsed:Number.isFinite(elapsed)?elapsed:null},
      learnerReflection:'',previousTargets:targets,suggestedTargets:suggested
    });
  }
  function snapshotText(){return JSON.stringify(snapshotFromApp())}
  function showModal(html,className='review-transfer-modal'){
    const modal=document.createElement('div');modal.className=`modal ${className}`;modal.innerHTML=`<div class="modal-card review-transfer-card">${html}</div>`;document.body.appendChild(modal);const close=()=>modal.remove();modal.addEventListener('click',e=>{if(e.target===modal||e.target.closest('[data-review-transfer-close]'))close()});return {modal,close};
  }
  function showShare(){
    let snapshot;try{snapshot=snapshotFromApp()}catch(error){toast?.(error.message);return}
    const text=JSON.stringify(snapshot),qrOk=text.length<2900;
    const {modal}=showModal(`<div class="review-transfer-head"><div><div class="number">PSEUDONYMISED REVIEW SNAPSHOT</div><h2>Share review data</h2><p>No learner name, contact details, evidence files, signatures, health or safeguarding information are included.</p></div><button class="modal-close" data-review-transfer-close aria-label="Close">×</button></div><div class="review-transfer-summary"><span><small>Course</small><strong>${esc(snapshot.course||'Course')}</strong></span><span><small>Progress</small><strong>${snapshot.progressPercent??0}%</strong></span><span><small>${COURSE?.nvqUnits?'LOs':'KSBs'}</small><strong>${snapshot.ksbCompleted??0}/${snapshot.ksbTotal??0}</strong></span><span><small>Assignments</small><strong>${snapshot.assignmentsCompleted??0}/${snapshot.assignmentsTotal??0}</strong></span><span><small>RAG</small><strong>${esc(snapshot.ragStatus||'Not set')}</strong></span><span><small>New evidence</small><strong>${snapshot.newEvidenceCount??0}</strong></span></div>${qrOk?'<div class="review-transfer-qr" id="reviewTransferQr"></div>':'<div class="review-transfer-warning">This snapshot is too large for a reliable QR. Download the file instead.</div>'}<div class="btn-row"><button class="btn secondary" id="copyReviewSnapshot">Copy transfer text</button><button class="btn" id="downloadReviewSnapshot">Download .apreview</button></div><p class="review-transfer-note">The snapshot expires after 24 hours. The assessor selects the learner locally in Assessor+.</p>`);
    if(qrOk&&global.ApprenticeQR){const area=modal.querySelector('#reviewTransferQr');area.appendChild(global.ApprenticeQR.toCanvas(text,300))}
    modal.querySelector('#downloadReviewSnapshot').onclick=()=>download(`ApprenticePlus-Review-Snapshot-${new Date().toISOString().slice(0,10)}.apreview`,JSON.stringify({format:'APREVIEW_PACKAGE',version:1,payload:snapshot},null,2));
    modal.querySelector('#copyReviewSnapshot').onclick=async()=>{try{await navigator.clipboard.writeText(text);toast?.('Review transfer text copied')}catch{const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();toast?.('Review transfer text copied')}};
  }
  async function importOutcome(raw){
    const outcome=parseOutcome(raw),ids=load(IMPORTED_IDS_KEY,[]);
    if(ids.includes(outcome.reviewId))throw new Error('This review has already been imported.');
    const rows=load(OUTCOME_KEY,[]);rows.unshift({...outcome,importedAt:new Date().toISOString()});save(OUTCOME_KEY,rows);save(IMPORTED_IDS_KEY,[outcome.reviewId,...ids].slice(0,500));
    if(Array.isArray(outcome.targets)&&outcome.targets.length&&typeof saveReviewMateReviews==='function'){
      const now=new Date().toISOString(),date=outcome.reviewDate||new Date().toISOString().slice(0,10),targets=outcome.targets.slice(0,5).map((t,index)=>({id:uid('target'),sequence:index+1,title:String(t.title||t.text||t.target||`Target ${index+1}`),details:String(t.details||t.action||''),dueDate:String(t.dueDate||''),category:'assessor-review',priority:String(t.priority||'Normal'),completed:false,manualComplete:false,reset:false,route:{kind:'portfolio'}}));
      const review={id:`assessor_${outcome.reviewId}`,status:'active',courseId:COURSE.id,courseName:COURSE.name,learner:state.profile?.fullName||'Learner',date,createdAt:now,updatedAt:now,reminderWeekday:1,intervalWeeks:8,nextReviewDate:outcome.nextReviewDate||reviewAddWeeks(date,8),snapshot:reviewMateSnapshot(),assessorOutcome:outcome,targets};
      const history=typeof retireCourseReviewMateReviews==='function'?retireCourseReviewMateReviews(reviewMateReviews(),review.id,now):reviewMateReviews();
      await saveReviewMateReviews([review,...history]);if(typeof syncReviewMateReminders==='function')syncReviewMateReminders(review);
    }
    return outcome;
  }
  let outcomeScanStream=null,outcomeScanTimer=null;
  function stopOutcomeQrScan(){if(outcomeScanTimer){clearInterval(outcomeScanTimer);outcomeScanTimer=null}if(outcomeScanStream){outcomeScanStream.getTracks().forEach(t=>t.stop());outcomeScanStream=null}}
  async function startOutcomeQrScan(parentClose){
    if(!('BarcodeDetector' in window)||!navigator.mediaDevices?.getUserMedia){toast?.('QR camera scanning is not supported in this browser. Use the .apreview file instead.');return}
    const {modal,close}=showModal(`<div class="review-transfer-head"><div><div class="number">SCAN REVIEW QR</div><h2>Receive completed review</h2><p>Point the camera at the QR code shown in Assessor+.</p></div><button class="modal-close" data-review-transfer-close aria-label="Close">×</button></div><video id="reviewOutcomeScanVideo" playsinline style="width:100%;border-radius:16px;background:#111;min-height:240px"></video><p id="reviewOutcomeScanStatus" class="review-transfer-note">Starting camera…</p>`);
    const originalClose=close;const finish=()=>{stopOutcomeQrScan();originalClose()};modal.querySelectorAll('[data-review-transfer-close]').forEach(b=>b.addEventListener('click',finish));
    try{outcomeScanStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}});const video=modal.querySelector('#reviewOutcomeScanVideo');video.srcObject=outcomeScanStream;await video.play();const detector=new BarcodeDetector({formats:['qr_code']});modal.querySelector('#reviewOutcomeScanStatus').textContent='Scanning…';outcomeScanTimer=setInterval(async()=>{try{const codes=await detector.detect(video);if(codes[0]?.rawValue){const outcome=await importOutcome(codes[0].rawValue);finish();parentClose?.();toast?.('Completed review imported');state.reviewMateTab='targets';state.reviewMateDraft=null;renderReviewMate();setTimeout(()=>showOutcome(outcome),50)}}catch(error){if(error?.message)modal.querySelector('#reviewOutcomeScanStatus').textContent=error.message}},450)}catch(error){modal.querySelector('#reviewOutcomeScanStatus').textContent='Camera access was unavailable. Use the .apreview file instead.'}
  }
  function showReceive(){
    const {modal,close}=showModal(`<div class="review-transfer-head"><div><div class="number">ASSESSOR+ REVIEW OUTCOME</div><h2>Receive completed review</h2><p>Scan the QR shown in Assessor+, choose the .apreview file, or paste the transfer text.</p></div><button class="modal-close" data-review-transfer-close aria-label="Close">×</button></div><div class="btn-row"><button class="btn" id="scanReviewOutcomeQr">Scan QR</button></div><label class="field full"><span>Review file</span><input class="input" id="reviewOutcomeFile" type="file" accept=".apreview,.json,application/json"></label><label class="field full"><span>Or paste transfer text</span><textarea class="input" id="reviewOutcomeText" rows="6" placeholder="Paste the Assessor+ review package here"></textarea></label><div class="btn-row"><button class="btn secondary" data-review-transfer-close>Cancel</button><button class="btn" id="importReviewOutcome">Import review</button></div>`);
    modal.querySelector('#scanReviewOutcomeQr').onclick=()=>startOutcomeQrScan(close);
    modal.querySelector('#importReviewOutcome').onclick=async()=>{try{let text=modal.querySelector('#reviewOutcomeText').value.trim(),file=modal.querySelector('#reviewOutcomeFile').files?.[0];if(file)text=await file.text();if(!text)throw new Error('Scan the QR, choose a review file, or paste the transfer text.');const outcome=await importOutcome(text);close();toast?.('Completed review imported');state.reviewMateTab='targets';state.reviewMateDraft=null;renderReviewMate();setTimeout(()=>showOutcome(outcome),50)}catch(error){toast?.(error.message||'The review could not be imported')}};
  }
  function outcomeRows(){return load(OUTCOME_KEY,[])}
  function showOutcome(outcome){
    const targets=Array.isArray(outcome.targets)?outcome.targets:[];
    showModal(`<div class="review-transfer-head"><div><div class="number">COMPLETED REVIEW</div><h2>${esc(outcome.reviewDate||'Review outcome')}</h2><p>Next review: <strong>${esc(outcome.nextReviewDate||'Not set')}</strong></p></div><button class="modal-close" data-review-transfer-close aria-label="Close">×</button></div><div class="review-transfer-summary"><span><small>RAG</small><strong>${esc(outcome.rag||'Not set')}</strong></span><span><small>Attendance</small><strong>${num(outcome.attendancePercent)??0}%</strong></span><span><small>Targets</small><strong>${targets.length}</strong></span></div>${outcome.tutorSummary?`<section class="review-transfer-copy"><h3>Tutor summary</h3><p>${esc(outcome.tutorSummary)}</p></section>`:''}<section class="review-transfer-copy"><h3>Your action plan</h3>${targets.length?`<ol>${targets.map(t=>`<li><strong>${esc(t.title||t.text||t.target||'Target')}</strong>${t.dueDate?`<small>Due ${esc(t.dueDate)}</small>`:''}${t.details?`<p>${esc(t.details)}</p>`:''}</li>`).join('')}</ol>`:'<p>No targets were included.</p>'}</section>`);
  }
  function transferPanel(){
    const outcomes=outcomeRows();
    return `<section class="card panel review-transfer-panel" id="reviewTransferPanel"><div class="review-transfer-panel-head"><div><div class="number">ASSESSOR+ TRANSFER</div><h3>Share or receive review data</h3><p>Send a pseudonymised progress snapshot to Assessor+, then import the completed review and agreed targets.</p></div></div><div class="review-transfer-actions"><button class="btn" id="shareReviewData">Share review data</button><button class="btn secondary" id="receiveCompletedReview">Receive completed review</button></div>${outcomes.length?`<details class="review-transfer-history"><summary>Received reviews <span>${outcomes.length}</span></summary><div>${outcomes.slice(0,10).map((o,index)=>`<button type="button" data-open-received-review="${index}"><span><strong>${esc(o.reviewDate||'Review')}</strong><small>Next review ${esc(o.nextReviewDate||'not set')}</small></span><b>${esc(o.rag||'')}</b></button>`).join('')}</div></details>`:''}</section>`;
  }
  function inject(){
    if(typeof state==='undefined'||state.view!=='reviewmate')return;
    const heading=document.querySelector('.reviewmate-heading');if(!heading||document.getElementById('reviewTransferPanel'))return;
    heading.insertAdjacentHTML('afterend',transferPanel());
    document.getElementById('shareReviewData')?.addEventListener('click',showShare);
    document.getElementById('receiveCompletedReview')?.addEventListener('click',showReceive);
    document.querySelectorAll('[data-open-received-review]').forEach(button=>button.addEventListener('click',()=>showOutcome(outcomeRows()[Number(button.dataset.openReceivedReview)])));
  }
  const observer=new MutationObserver(()=>queueMicrotask(inject));
  function init(){observer.observe(document.body,{childList:true,subtree:true});inject()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
  global.ApprenticeReviewTransfer={VERSION,makeSnapshot,parseOutcome,download,showShare,showReceive};
})(window);
