// V2.27 Apprentice+ premium evidence record export
'use strict';

// One authoritative palette for every evidence export surface.  Keys are stable
// saved-data categories rather than page positions, so old records resolve in
// exactly the same way as newly-created evidence.
const EVIDENCE_TYPE_STYLES=Object.freeze({
  photo:Object.freeze({label:'Photographic Evidence',short:'PE',colour:'#2563A8'}),
  statement:Object.freeze({label:'Learner Statement',short:'LS',colour:'#7046A3'}),
  video:Object.freeze({label:'Video Evidence',short:'VW',colour:'#C94F45'}),
  voice:Object.freeze({label:'Voice Evidence',short:'VE',colour:'#087F78'}),
  documents:Object.freeze({label:'Uploaded / Document Evidence',short:'SE',colour:'#A95D00'}),
  witness:Object.freeze({label:'WT · Witness Testimony',short:'WT',colour:'#4F46A5'}),
  observation:Object.freeze({label:'AO · Assessor Observation',short:'AO',colour:'#24613B'}),
  discussion:Object.freeze({label:'PD · Professional Discussion',short:'PD',colour:'#056B8A'}),
  simulation:Object.freeze({label:'CS · College Simulation',short:'CS',colour:'#8A4B22'}),
  rpl:Object.freeze({label:'RPL · Recognition of Prior Learning',short:'RPL',colour:'#9B285F'}),
  knowledge:Object.freeze({label:'Knowledge Evidence',short:'KE',colour:'#52606D'}),
  specification:Object.freeze({label:'Task Specification',short:'TS',colour:'#65752A'}),
  portfolio:Object.freeze({label:'Evidence Portfolio',short:'EP',colour:'#58B51F'})
});
function evidenceTypeStyle(value){
  const t=String(value||'').toLowerCase();
  if(/recognition of prior learning|\brpl\b/.test(t))return EVIDENCE_TYPE_STYLES.rpl;
  if(/college simulation|\bcs\b/.test(t))return EVIDENCE_TYPE_STYLES.simulation;
  if(/assessor observation|practical assessment|\bao\b/.test(t))return EVIDENCE_TYPE_STYLES.observation;
  if(/witness testimony|employer|\bwt\b/.test(t))return EVIDENCE_TYPE_STYLES.witness;
  if(/professional discussion|talk about it|\bpd\b/.test(t))return EVIDENCE_TYPE_STYLES.discussion;
  if(/voice|audio/.test(t))return EVIDENCE_TYPE_STYLES.voice;
  if(/video|walkthrough|record a video/.test(t))return EVIDENCE_TYPE_STYLES.video;
  if(/learner statement|write about it/.test(t))return EVIDENCE_TYPE_STYLES.statement;
  if(/photo|image|take photos/.test(t))return EVIDENCE_TYPE_STYLES.photo;
  if(/document|certificate|supporting|upload evidence/.test(t))return EVIDENCE_TYPE_STYLES.documents;
  if(/knowledge|theory|question/.test(t))return EVIDENCE_TYPE_STYLES.knowledge;
  if(/specification/.test(t))return EVIDENCE_TYPE_STYLES.specification;
  return EVIDENCE_TYPE_STYLES.portfolio;
}
function takePhotosGridLayout(){return {cols:3,rows:3}}
function compileUnitPack({assignmentNumber,previewPages=[],entries=[],pdfName='',evidenceReferences=[]}={}){
  const pdfEntry=entries.find(entry=>String(entry?.name||'').toLowerCase().endsWith('.pdf'));
  if(!pdfEntry?.data)throw new Error('A compiled unit pack requires its generated PDF');
  return Object.freeze({assignmentNumber,pdfName:pdfName||pdfEntry.name,previewPages:Object.freeze([...previewPages]),entries:Object.freeze([...entries]),pdfBytes:pdfEntry.data,evidenceReferences:Object.freeze([...evidenceReferences])});
}
function compileFullPortfolioFromUnitPacks(frontPages,unitPacks){
  return [...(frontPages||[]),...(unitPacks||[]).flatMap(pack=>pack.previewPages)];
}
function buildKsbMatrixRows(course,assignments,evidence=[]){
  const records=Array.isArray(evidence)?evidence:[];
  return (assignments||[]).flatMap(a=>(a.ksbs||[]).map(([code,description])=>{
    const supporting=records.filter(record=>Number(record.assignment)===Number(a.n)&&new Set(record.codes||[]).has(code));
    return {code,type:String(code).charAt(0).toUpperCase(),description,assignment:a.n,unit:a.unit||'',assignmentTitle:a.title||'',count:supporting.length,complete:supporting.some(item=>item.complete)||false,references:supporting.map(item=>item.reference).filter(Boolean),evidenceTypes:[...new Set(supporting.map(item=>item.type).filter(Boolean))],rpl:supporting.some(item=>item.rpl)};
  }));
}
if(typeof window!=='undefined'){window.EVIDENCE_TYPE_STYLES=EVIDENCE_TYPE_STYLES;window.evidenceTypeStyle=evidenceTypeStyle;window.compileUnitPack=compileUnitPack;window.compileFullPortfolioFromUnitPacks=compileFullPortfolioFromUnitPacks;window.buildKsbMatrixRows=buildKsbMatrixRows}

function apprenticePdfBackground(ctx,W,H){ctx.fillStyle='#FFFFFF';ctx.fillRect(0,0,W,H);const r=Math.min(W,H)*0.58,g=ctx.createRadialGradient(0,0,0,0,0,r);g.addColorStop(0,'#DDF3D6');g.addColorStop(.42,'#EFF8EC');g.addColorStop(1,'#FFFFFF');ctx.fillStyle=g;ctx.fillRect(0,0,W,H)}

/* Apprentice+ offline PDF generator. Evidence stays in the browser; no data is uploaded. */
async function generateEvidencePackPDF({course, assignment, profile, sections, branding, returnPackage=false, newEvidence={}, assignmentRpl=false, rplKsbCodes=[], rplEvidence=null, learningHours=null}) {
  if(course && course.nvqUnits) return generateNVQEvidencePackPDF({course, assignment, profile, sections, branding, returnPackage, newEvidence, assignmentRpl, rplKsbCodes, rplEvidence, learningHours});
  const W=1240,H=1754,M=88,TEAL='#58B51F',GREEN='#58B51F',LIGHT_GREEN='#EAF7E4',SOFT_GREEN='#D9EFD0',INK='#18231E',MUTED='#68756D',PALE='#F3F8F2',WHITE='#ffffff';
  const pages=[];
  const rplCodes=new Set((rplKsbCodes||[]).map(code=>String(code)));
  const isCriterionRpl=code=>rplCodes.has(String(code));
  const newEvidenceAliases={practical:'practical',practicalassessment:'practical',assessorobservation:'practical',photos:'photos',photoevidence:'photos',photographicevidence:'photos',statement:'statement',learnerstatement:'statement',discussion:'discussion',videowalkthrough:'walkthrough',professionaldiscussion:'professionalDiscussion',witness:'witness',witnesstestimony:'witness',supporting:'supporting',supportingevidence:'supporting',walkthrough:'walkthrough'};
  const evidenceAttemptNumber=value=>Number(String(value??'').match(/\d+/)?.[0]||value);
  const isNewEvidence=(type,attempt)=>{const key=newEvidenceAliases[String(type||'').replace(/[^a-z]/gi,'').toLowerCase()]||String(type||'');return Array.isArray(newEvidence?.[key])&&newEvidence[key].includes(evidenceAttemptNumber(attempt))};
  const isPortfolioBuildingEvidence=type=>/practical assessment|assessor observation|learner statement|witness testimony|photo(?:graphic)? evidence|video walkthrough|professional discussion|supporting evidence/i.test(String(type||''));
  const drawNewEvidenceStamp=x=>{x.save();x.translate(W-235,205);x.rotate(-0.08);x.strokeStyle='#d32f2f';x.fillStyle='rgba(255,255,255,.92)';x.lineWidth=5;x.fillRect(-5,-38,190,62);x.strokeRect(-5,-38,190,62);x.fillStyle='#d32f2f';x.font='900 23px Arial';x.textAlign='center';x.fillText('NEW EVIDENCE',90,2);x.textAlign='left';x.restore()};
  const drawRecordedPriorLearningStamp=x=>{x.save();x.translate(W/2,H/2);x.rotate(-0.16);x.globalAlpha=.30;x.strokeStyle='#b91c1c';x.fillStyle='#b91c1c';x.lineWidth=10;x.strokeRect(-390,-110,780,220);x.textAlign='center';x.textBaseline='middle';x.font='900 48px Arial';x.fillText('RECORDED PRIOR LEARNING',0,-26);x.font='900 82px Arial';x.fillText('RPL',0,55);x.textAlign='left';x.textBaseline='alphabetic';x.globalAlpha=1;x.restore()};
  const drawCriterionRpl=(x,code,px,py,size=16)=>{if(!isCriterionRpl(code))return;x.fillStyle='#dc2626';x.font=`900 ${size}px Arial`;x.fillText('RPL',px,py)};
  const percentageScore=d=>{const max=assignment.ksbs.length*5;if(!max)return 0;const achieved=assignment.ksbs.reduce((sum,[code])=>sum+(+d?.scores?.[code]||0),0);return Math.round((achieved/max)*100)};
  const buildSkillCriteria=summary=>{const text=String(summary||'').replace(/[.]+$/,'').trim(),lower=text.toLowerCase(),action=text.charAt(0).toLowerCase()+text.slice(1);let out=[`Selected the correct tools, equipment and materials needed to ${action}.`,`Used an appropriate sequence and working method to ${action}.`,'Completed the work accurately and in line with the drawing, specification or required tolerance.','Checked the finished work, corrected defects and left it to the required quality standard.'];if(/health|safety|ppe|rpe|lev|safe working/.test(lower))out=['Identified the main hazards and selected the correct PPE, RPE and control measures.','Followed the safe system of work and used tools, equipment and controls correctly.','Applied the relevant safety requirements consistently throughout the activity.','Maintained good housekeeping, protected others and left the work area safe.'];else if(/communicat|team|wellbeing|inclusion|equity|diversity/.test(lower))out=['Identified who needed information, support or involvement before starting the activity.','Used clear, appropriate communication and worked constructively with others.','Shared accurate information using suitable trade terminology and checked understanding.','Responded professionally, supported the team and reflected on how communication could improve.'];else if(/interpret|drawing|specification|digital design/.test(lower))out=['Selected the correct drawing, specification or digital information for the task.','Extracted the relevant dimensions, symbols, notes and construction requirements.','Transferred the information accurately into the practical work or setting-out process.','Cross-checked the completed work against the source information and corrected discrepancies.'];else if(/estimate|select.*material|resource|cutting list|size timber/.test(lower))out=['Identified the materials, quantities and specification required for the task.','Used an appropriate estimating, measuring or selection method.','Calculated or selected resources accurately with suitable allowances for waste and cutting.','Checked the result against the task requirements and justified the final selection.'];else if(/tool|equipment|maintain|sharpen/.test(lower))out=['Selected tools and equipment that were suitable, serviceable and safe for the task.','Set up and used each tool correctly, following manufacturer and workplace guidance.','Controlled the tools accurately to achieve the required dimensions and finish.','Checked, cleaned, maintained and stored the tools correctly after use.'];else if(/set out|measure|level|laser|mark out/.test(lower))out=['Selected suitable measuring, marking and setting-out equipment.','Established accurate datum points, lines, levels, centres or profiles in the correct sequence.','Checked all dimensions, angles, levels and tolerances throughout the work.','Verified the completed setting out against the drawing or specification before work continued.'];else if(/construct|build|install|fit|form|produce|apply|mix|repair|cut|splice|scribe/.test(lower))out=['Selected and prepared the correct tools, equipment, materials and work area for this skill.',`Used the correct practical sequence and trade technique to ${action}.`,'Maintained the required measurements, alignment, tolerances and component positioning.','Checked workmanship, finish and compliance with the specification, correcting defects where needed.'];else if(/environment|sustainab|recycl|waste/.test(lower))out=['Identified the environmental controls and resource requirements before starting.','Used materials efficiently and followed the correct reuse, recycling and disposal procedures.','Segregated resources correctly and prevented contamination or avoidable waste.','Left the area compliant, tidy and with environmental impacts minimised.'];return out};
  const skillCriteria=()=>assignment.ksbs.filter(([c])=>String(c).toUpperCase().startsWith('S')).map(([code,summary])=>({code,summary,criteria:buildSkillCriteria(summary)}));
  const practicalScoringSummary=d=>{const skills=skillCriteria(),scores=d?.scores||{},keys=skills.flatMap(s=>s.criteria.map((_,i)=>`${s.code}::${i+1}`)),graded=keys.map(k=>+scores[k]||0).filter(v=>v>=1&&v<=5);if(graded.length){const achieved=graded.reduce((sum,v)=>sum+v,0);return {graded:graded.length,percentage:Math.round((achieved/(graded.length*5))*100)}}const legacy=skills.map(s=>+scores[s.code]||0).filter(v=>v>=1&&v<=5);if(legacy.length){const achieved=legacy.reduce((sum,v)=>sum+v,0);return {graded:legacy.length,percentage:Math.round((achieved/(legacy.length*5))*100)}}return {graded:0,percentage:null}};
  const practicalPercentageScore=d=>practicalScoringSummary(d).percentage;
  const gradeForPercentage=p=>p>=90?'Distinction':p>=80?'Merit':p>=70?'Pass':'Fail';
  const resultText=d=>{const pct=percentageScore(d);return `${pct}% — ${gradeForPercentage(pct)}`};
  const practicalResultText=d=>{const pct=practicalPercentageScore(d);return pct===null?'Not yet graded':`${pct}% — ${gradeForPercentage(pct)}`};
  const clean=v=>String(v??'').replace(/[\u2010-\u2015]/g,'-').replace(/[\u2018\u2019]/g,"'").replace(/[\u201c\u201d]/g,'"');
  const PDF_COLOURS={cover:EVIDENCE_TYPE_STYLES.portfolio.colour,practical:EVIDENCE_TYPE_STYLES.observation.colour,statement:EVIDENCE_TYPE_STYLES.statement.colour,witness:EVIDENCE_TYPE_STYLES.witness.colour,video:EVIDENCE_TYPE_STYLES.video.colour,discussion:EVIDENCE_TYPE_STYLES.discussion.colour,photo:EVIDENCE_TYPE_STYLES.photo.colour,knowledge:EVIDENCE_TYPE_STYLES.knowledge.colour,documents:EVIDENCE_TYPE_STYLES.documents.colour,specification:EVIDENCE_TYPE_STYLES.specification.colour,rpl:EVIDENCE_TYPE_STYLES.rpl.colour};
  const pdfSectionFor=title=>{const t=String(title||'').toLowerCase();if(/practical assessment|assessor observation|verified by someone else/.test(t))return ['Verified by Someone Else',PDF_COLOURS.practical];if(/learner statement|write about it/.test(t))return ['Write About It',PDF_COLOURS.statement];if(/witness|employer|supporting evidence - statement/.test(t))return ['Verified by Someone Else',PDF_COLOURS.witness];if(/video|walkthrough|record a video/.test(t))return ['Record a Video',PDF_COLOURS.video];if(/professional discussion|talk about it/.test(t))return ['Talk About It',PDF_COLOURS.discussion];if(/photo|image|take photos/.test(t))return ['Take Photos',PDF_COLOURS.photo];if(/knowledge|theory|question/.test(t))return ['Knowledge Questions',PDF_COLOURS.knowledge];if(/document|certificate|supporting evidence|upload evidence/.test(t))return ['Upload Evidence',PDF_COLOURS.documents];return ['Evidence Portfolio',PDF_COLOURS.cover]};
  const pdfStampFor=title=>{const t=String(title||'').toLowerCase();if(/ksb evidence matrix|ksb mapping/.test(t))return ['Evidence','Matrix',TEAL];if(/portfolio contents|evidence index/.test(t))return ['Portfolio','Contents',TEAL];if(/practical assessment|assessor observation/.test(t))return ['Assessor','Observation',PDF_COLOURS.practical];if(/learner statement|write about it/.test(t))return ['Learner','Statement',PDF_COLOURS.statement];if(/witness|employer|supporting evidence - statement/.test(t))return ['Witness','Testimony',PDF_COLOURS.witness];if(/video|walkthrough|record a video/.test(t))return ['Video','Walkthrough',PDF_COLOURS.video];if(/professional discussion|talk about it/.test(t))return ['Professional','Discussion',PDF_COLOURS.discussion];if(/photo|image|take photos/.test(t))return ['Photographic','Evidence',PDF_COLOURS.photo];if(/knowledge|theory|question/.test(t))return ['Knowledge','Evidence',PDF_COLOURS.knowledge];if(/specification/.test(t))return ['Task','Specification',PDF_COLOURS.specification];if(/document|certificate|supporting evidence|upload evidence/.test(t))return ['Supporting','Evidence',PDF_COLOURS.documents];if(/assignment/.test(t))return ['Evidence','Pack',TEAL];return ['Evidence','Portfolio',TEAL]};
  const roundedRect=(x,px,py,w,h,r)=>{const rr=Math.min(r,w/2,h/2);x.beginPath();x.moveTo(px+rr,py);x.lineTo(px+w-rr,py);x.quadraticCurveTo(px+w,py,px+w,py+rr);x.lineTo(px+w,py+h-rr);x.quadraticCurveTo(px+w,py+h,px+w-rr,py+h);x.lineTo(px+rr,py+h);x.quadraticCurveTo(px,py+h,px,py+h-rr);x.lineTo(px,py+rr);x.quadraticCurveTo(px,py,px+rr,py);x.closePath()};
  const drawPdfStamp=(x,title)=>{const [line1,line2,colour]=pdfStampFor(title),size=112,px=W-M-size,py=40;x.save();roundedRect(x,px,py,size,size,14);x.fillStyle='#ffffff';x.fill();x.strokeStyle='#DCE7DA';x.lineWidth=2;x.stroke();roundedRect(x,px+8,py+8,size-16,size-16,10);x.fillStyle=colour;x.globalAlpha=.10;x.fill();x.globalAlpha=1;x.fillStyle=colour;x.textAlign='center';x.textBaseline='middle';x.font='800 15px Arial';x.fillText(clean(line1).toUpperCase(),px+size/2,py+44);x.font='800 14px Arial';x.fillText(clean(line2).toUpperCase(),px+size/2,py+66);x.textAlign='left';x.textBaseline='alphabetic';x.restore()};
  const apprenticeLogo=await loadImage('logo-apprentice-plus.png');
  const collegeLogo=branding?.logo?await loadImage(branding.logo):null;
  const drawLogo=(x,img,px,py,maxW,maxH)=>{if(!img)return;const sc=Math.min(maxW/img.width,maxH/img.height);x.drawImage(img,px,py,img.width*sc,img.height*sc)};
  const newPage=(title,version,status='Submitted - Locked')=>{
    const c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');const [sectionName,sectionColour]=pdfSectionFor(title);x._sectionColour=sectionColour;x._sectionName=sectionName;
    apprenticePdfBackground(x,W,H);
    x.fillStyle=WHITE;roundedRect(x,M-22,28,W-2*M+44,224,28);x.fill();
    x.fillStyle=TEAL;roundedRect(x,M,48,7,50,4);x.fill();
    if(collegeLogo)drawLogo(x,collegeLogo,W-M-390,38,142,50);
    drawPdfStamp(x,title);
    x.fillStyle=MUTED;x.font='600 13px Arial';x.fillText(`${clean(course.standard||'')}  ·  Level ${clean(course.level||'-')}`,M,116);
    x.fillStyle=INK;x.font='700 30px Arial';fitText(x,clean(course.name||'Apprenticeship Course'),M,157,W-2*M,30);
    x.fillStyle='#DCE7DA';x.fillRect(M,178,W-2*M,1);
    x.fillStyle=INK;x.font='700 25px Arial';fitText(x,clean(title),M,218,W-2*M-250,25);
    const metaText=`${String(version).startsWith('Attempt')?version:`Version ${version}`}  ·  ${status}`;x.fillStyle=MUTED;x.font='500 14px Arial';x.fillText(metaText,M,244);

    pages.push({canvas:c,ctx:x,colour:sectionColour,sectionName});return {c,x,y:276};
  };
  function fitText(x,text,px,py,max,fontSize){let s=fontSize;x.font=`700 ${s}px Arial`;while(x.measureText(text).width>max&&s>16){s--;x.font=`700 ${s}px Arial`}x.fillText(text,px,py)}
  function line(x,y,w= W-2*M){x.fillStyle='#DCE7DA';x.fillRect(M,y,w,1)}
  function label(x,t,px,py){x.fillStyle=MUTED;x.font='700 17px Arial';x.fillText(clean(t).toUpperCase(),px,py)}
  function value(x,t,px,py,size=22,bold=false){x.fillStyle=INK;x.font=`${bold?700:400} ${size}px Arial`;x.fillText(clean(t||'-'),px,py)}
  function wrap(x,text,maxWidth,font='400 22px Arial'){x.font=font;const paras=clean(text||'-').split(/\n/),out=[];for(const p of paras){const words=p.split(/\s+/);let l='';for(const w of words){const test=l?`${l} ${w}`:w;if(x.measureText(test).width>maxWidth&&l){out.push(l);l=w}else l=test}out.push(l||' ')}return out}
  function sectionHeading(x,t,y){x.fillStyle=INK;x.font='700 24px Arial';x.fillText(clean(t),M,y);x.fillStyle=x._sectionColour||TEAL;x.fillRect(M,y+15,46,2);x.fillStyle='#E4E7E6';x.fillRect(M+58,y+15,W-2*M-58,1);return y+52}
  function meta(p,version,date,type,newEvidenceType=type){const {x}=p,style=evidenceTypeStyle(type);x._sectionColour=style.colour;x._sectionName=style.label;x.fillStyle=style.colour;x.fillRect(M,48,7,50);drawPdfStamp(x,type);let y=p.y;x.fillStyle=WHITE;roundedRect(x,M,y,W-2*M,82,18);x.fill();x.strokeStyle='#E1E9E0';x.lineWidth=1;x.stroke();label(x,'Learner',M+18,y+23);value(x,profile.fullName,M+18,y+48,17,true);label(x,'Date',M+520,y+23);value(x,date||'-',M+520,y+48,17,true);label(x,'Evidence',M+750,y+23);value(x,p.x._sectionName||type,M+750,y+48,16,true);if(isPortfolioBuildingEvidence(type)){x.fillStyle='#5F6F70';x.font='700 11px Arial';x.fillText('PORTFOLIO BUILDING · 0.2 OTJ HOURS',M+18,y+70)}p.y=y+104;return p}
  function signature(x,data,y,title='Signature',signerName='',signedDate='') {label(x,title,M,y);x.strokeStyle='#b8c4c1';x.lineWidth=2;x.strokeRect(M,y+18,420,122);if(data){try{x.drawImage(data._img||data,M+12,y+28,396,82)}catch{}}const signed=String(signedDate||'').trim();let dateText='';if(signed){const parsed=new Date(signed);dateText=Number.isNaN(parsed.getTime())?signed:parsed.toLocaleDateString('en-GB')}const meta=[String(signerName||'').trim(),dateText].filter(Boolean).join(' · ');if(meta){x.fillStyle='#5F6F70';x.font='700 10px Arial';x.fillText(meta,M+12,y+132)}return y+162}
  async function loadImage(src){if(!src)return null;return new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.onerror=()=>r(null);i.src=src})}
  function footerAll(){const numbered=pages.filter(p=>!p.isCover),total=numbered.length;let pageNo=0;pages.forEach(p=>{if(p.isCover)return;pageNo++;const x=p.ctx;x.fillStyle='#DCE7DA';x.fillRect(M,H-72,W-2*M,1);x.fillStyle=MUTED;x.font='500 13px Arial';x.fillText(`${branding?.name?branding.name+'  ·  ':''}Apprentice+`,M,H-34);x.textAlign='right';x.fillText(`${pageNo} / ${total}`,W-M,H-34);x.textAlign='left'})}

  const evidenceCatalogue=[];
  const evidenceMatrix={};(assignment.ksbs||[]).forEach(([code])=>evidenceMatrix[code]=[]);
  const addMatrix=(code,ref)=>{if(evidenceMatrix[code]&&!evidenceMatrix[code].includes(ref))evidenceMatrix[code].push(ref)};
  const selectedCodes=d=>{
    const valid=code=>Object.prototype.hasOwnProperty.call(evidenceMatrix,code);
    const explicit=Array.isArray(d?.ksbEvidence)?d.ksbEvidence:[];
    const photoLinked=Object.keys(d?.outcomePhotos||{}).filter(code=>!!d.outcomePhotos?.[code]?.data);
    const scored=Object.keys(d?.scores||{}).map(k=>String(k).split('::')[0]).filter(code=>{const raw=d?.scores?.[code]??Object.entries(d?.scores||{}).find(([key])=>String(key).split('::')[0]===code)?.[1];return Number(raw)>0});
    const recorded=Object.keys(d?.recordings||{}).filter(code=>!!d.recordings?.[code]?.data);
    return [...new Set([...explicit,...photoLinked,...scored,...recorded].filter(valid))];
  };
  const practicalCodes=d=>{const observedSet=new Set((assignment.ksbs||[]).map(([code])=>code));return selectedCodes(d).filter(code=>observedSet.has(code))};
  const addEvidence=(ref,title,type,date)=>evidenceCatalogue.push({ref,title,type,date:date||'-'});
  (sections.practical||[]).forEach((d,i)=>{const ref=`AO${i+1}`;addEvidence(ref,`Verified by Someone Else ${i+1}`,'Assessor Observation',d.date);practicalCodes(d).forEach(code=>addMatrix(code,ref))});
  (sections.statement||[]).forEach((d,i)=>{const ref=`LS${i+1}`;addEvidence(ref,`Write About It ${i+1}`,'Learner Statement',d.date);selectedCodes(d).forEach(code=>addMatrix(code,ref))});
  (sections.witness||[]).forEach((d,i)=>{const ref=`WT${i+1}`;addEvidence(ref,`Verified by Someone Else ${i+1}`,'Witness Testimony',d.date);selectedCodes(d).forEach(code=>addMatrix(code,ref))});
  (sections.photos||[]).forEach((d,i)=>{const ref=`PE${i+1}`;addEvidence(ref,`Take Photos ${i+1}`,'Photo Evidence',d.date);selectedCodes(d).forEach(code=>addMatrix(code,ref))});
  (sections.discussion||[]).forEach((d,i)=>{const ref=`VW${i+1}`;addEvidence(ref,`Record a Video ${i+1}`,'Video Walkthrough',d.date);selectedCodes(d).forEach(code=>addMatrix(code,ref))});
  (sections.professionalDiscussion||[]).forEach((d,i)=>{const ref=`PD${i+1}`;addEvidence(ref,`Talk About It ${i+1}`,'Professional Discussion',d.date);Object.keys(d.recordings||{}).filter(code=>d.recordings?.[code]?.data).forEach(code=>addMatrix(code,ref));(d.voiceSubmissions||[]).forEach(rec=>(rec.confirmedCodes||rec.intendedCodes||[]).forEach(code=>addMatrix(code,ref))) });
  (sections.walkthrough||[]).forEach((d,i)=>{const ref=`VW${i+1}`;addEvidence(ref,`Record a Video ${i+1}`,'Video Walkthrough',d.date);if(d.code)addMatrix(d.code,ref)});
  (sections.supporting||[]).forEach((d,i)=>{const ref=`SE${i+1}`;addEvidence(ref,`Upload Evidence ${i+1}`,d.type||'Supporting Evidence',d.date);selectedCodes(d).forEach(code=>addMatrix(code,ref))});
  rplCodes.forEach(code=>addMatrix(code,'RPL'));
  if(rplCodes.size)addEvidence('RPL','Individual KSB Recognition of Prior Learning','Recognition of Prior Learning','-');

  function drawCompactParagraph(x,text,px,py,maxWidth,maxHeight){
    const sizes=[20,19,18,17,16,15,14];
    for(const size of sizes){
      const lineH=Math.round(size*1.42),lines=wrap(x,text,maxWidth,`400 ${size}px Arial`);
      if(lines.length*lineH<=maxHeight){
        x.font=`400 ${size}px Arial`;x.fillStyle=INK;
        lines.forEach((l,i)=>x.fillText(l,px,py+i*lineH));
        return py+lines.length*lineH;
      }
    }
    const size=14,lineH=20,lines=wrap(x,text,maxWidth,`400 ${size}px Arial`),maxLines=Math.max(1,Math.floor(maxHeight/lineH));
    const shown=lines.slice(0,maxLines);
    if(lines.length>maxLines&&shown.length){shown[shown.length-1]=shown[shown.length-1].replace(/[.,;:]?$/,'...')}
    x.font=`400 ${size}px Arial`;x.fillStyle=INK;shown.forEach((l,i)=>x.fillText(l,px,py+i*lineH));
    return py+shown.length*lineH;
  }
  function compactScoreRows(p,d,startY,veryCompact=false){
    const x=p.x;let y=startY,headerH=veryCompact?28:40,headerStep=veryCompact?32:46,rowH=veryCompact?25:38,rowStep=veryCompact?28:42,headerFont=veryCompact?13:17,summaryFont=veryCompact?12:16,criterionFont=veryCompact?10:14,scoreFont=veryCompact?12:16,gap=veryCompact?3:8;
    skillCriteria().forEach(skill=>{
      x.fillStyle=TEAL;x.fillRect(M,y-headerH+8,W-2*M,headerH);x.fillStyle=WHITE;x.font=`700 ${headerFont}px Arial`;x.fillText(skill.code,M+12,y);x.font=`700 ${summaryFont}px Arial`;fitText(x,clean(skill.summary),M+78,y,W-2*M-92,summaryFont);y+=headerStep;
      skill.criteria.forEach((criterion,i)=>{x.fillStyle=PALE;x.fillRect(M,y-rowH+8,W-2*M,rowH);x.fillStyle=INK;x.font=`400 ${criterionFont}px Arial`;fitText(x,clean(`${i+1}. ${criterion}`),M+12,y,W-2*M-112,criterionFont);x.textAlign='right';x.font=`700 ${scoreFont}px Arial`;x.fillText(`${d.scores?.[`${skill.code}::${i+1}`]||'-'} / 5`,W-M-12,y);x.textAlign='left';y+=rowStep});y+=gap;
    });
    return y;
  }


  function drawSelectedKsbRows(x,d,startY,maxHeight){
    const rows=(assignment.ksbs||[]).filter(([code])=>selectedCodes(d).includes(code));
    if(!rows.length){x.fillStyle=MUTED;x.font='400 15px Arial';x.fillText('No KSBs selected.',M,startY);return startY+24}
    const rowH=Math.max(22,Math.min(38,Math.floor(maxHeight/rows.length)));
    const font=Math.max(10,Math.min(15,rowH-9));
    let y=startY;
    rows.forEach(([code,summary],i)=>{
      const kind=String(code).toUpperCase().startsWith('K')?'Knowledge':String(code).toUpperCase().startsWith('S')?'Skill':String(code).toUpperCase().startsWith('B')?'Behaviour':'KSB';
      x.fillStyle=i%2?WHITE:PALE;x.fillRect(M,y-rowH+7,W-2*M,rowH);
      x.fillStyle=x._sectionColour||TEAL;x.font=`700 ${font}px Arial`;x.fillText(clean(code),M+10,y);
      x.fillStyle=MUTED;x.font=`700 ${Math.max(9,font-2)}px Arial`;x.fillText(kind.toUpperCase(),M+70,y);
      x.fillStyle=INK;x.font=`400 ${font}px Arial`;fitText(x,clean(summary),M+170,y,W-2*M-182,font);
      y+=rowH;
    });
    return y;
  }
  async function drawEvidencePhotoStrip(x,d,y,maxHeight){
    const items=[];
    for(const [code,ph] of Object.entries(d?.outcomePhotos||{})){if(ph?.data)items.push({code,img:await loadImage(ph.data)})}
    for(let i=0;i<(d?.photos||[]).length;i++){const ph=d.photos[i];if(ph?.data)items.push({code:`Photo ${i+1}`,img:await loadImage(ph.data)})}
    if(!items.length)return y;
    const shown=items.slice(0,6),gap=10,cellW=(W-2*M-gap*(shown.length-1))/shown.length,cellH=Math.min(maxHeight,Math.max(58,cellW*.62));
    shown.forEach((it,i)=>{const px=M+i*(cellW+gap);x.fillStyle=PALE;x.fillRect(px,y,cellW,cellH);if(it.img){const sc=Math.max(cellW/it.img.width,cellH/it.img.height),iw=it.img.width*sc,ih=it.img.height*sc;x.save();x.beginPath();x.rect(px,y,cellW,cellH);x.clip();x.drawImage(it.img,px+(cellW-iw)/2,y+(cellH-ih)/2,iw,ih);x.restore()}x.fillStyle=WHITE;x.fillRect(px,y+cellH-20,cellW,20);x.fillStyle=TEAL;x.font='700 10px Arial';fitText(x,clean(it.code),px+4,y+cellH-6,cellW-8,10)});
    return y+cellH+12;
  }

  function addTextPages(title,version,date,type,heading,text,extraDraw){let p=meta(newPage(title,version),version,date,type);let x=p.x,y=sectionHeading(x,heading,p.y);if(extraDraw){y=extraDraw(p,y)||y}const lines=wrap(x,text,W-2*M,'400 22px Arial');x.font='400 22px Arial';x.fillStyle=INK;for(const l of lines){if(y>H-145){p=meta(newPage(`${title} - Continued`,version),version,date,type);x=p.x;y=sectionHeading(x,`${heading} (continued)`,p.y);x.font='400 22px Arial';x.fillStyle=INK}x.fillText(l,M,y);y+=32}return {p,x,y}}

  function selectedKsbDetails(d){return (assignment.ksbs||[]).filter(([code])=>selectedCodes(d).includes(code)).map(([code,summary])=>`${code} - ${summary}`).join('\n')}
  function linkedPhotoFileName(code,index=0){const item=(assignment.ksbs||[]).find(([itemCode])=>String(itemCode)===String(code)),summary=item?.[1]||'Evidence photograph',suffix=` - Photo ${Number(index)+1}.jpg`,base=`${code} - ${summary}`.replace(/[\\/:*?"<>|]/g,'-').replace(/\s+/g,' ').trim(),limit=Math.max(24,120-suffix.length);return `${base.slice(0,limit).replace(/[ .-]+$/,'')}${suffix}`}
  function linkedRecordPhotoFileName(d,index=0){const codes=selectedCodes(d);if(codes.length===1)return linkedPhotoFileName(codes[0],index);const details=codes.map(code=>{const item=(assignment.ksbs||[]).find(([itemCode])=>String(itemCode)===String(code));return `${code} - ${item?.[1]||'Evidence'}`}),suffix=` - Photo ${Number(index)+1}.jpg`,base=(details.length?details.join(' + '):`EP${assignment.n} - ${assignment.title}`).replace(/[\\/:*?"<>|]/g,'-').replace(/\s+/g,' ').trim(),limit=Math.max(24,120-suffix.length);return `${base.slice(0,limit).replace(/[ .-]+$/,'')}${suffix}`}
  function scoredDetails(d){
    const criterionText={};skillCriteria().forEach(skill=>skill.criteria.forEach((criterion,i)=>criterionText[`${skill.code}::${i+1}`]=`${skill.code} practical mark ${i+1} - ${criterion}`));
    return Object.entries(d?.scores||{}).filter(([,score])=>Number(score)>0).map(([code,score])=>`${criterionText[code]||code}: ${score} / 5`).join('\n');
  }
  function witnessRatingDetails(d){
    const labels={1:'Training required',2:'Satisfactory',3:'Competent'};
    return Object.entries(d?.scores||{}).filter(([,score])=>Number(score)>0).map(([code,score])=>`${code}: ${score} / 3 - ${labels[Number(score)]||''}`.trim()).join('\n');
  }
  function talkAboutFileName(rec,index=0){const codes=rec?.confirmedCodes||rec?.intendedCodes||[],ext=mediaExtension(rec?.type,rec?.name||'','audio',rec?.data);return rec?.name||`Talk About It - ${codes.join('-')||`Discussion ${index+1}`} - ${rec?.id||index+1}${ext}`}
  function recordingDetails(d,mediaLabel){const rows=Object.entries(d?.recordings||{}).filter(([,rec])=>rec?.data).map(([code,rec])=>{const file=rec.name||`${code} - Talk About It recording`;return `${code}: ${mediaLabel}\nAttached audio file: ${file}${rec.duration?`\nDuration: ${rec.duration}`:''}${Number(rec.size)>0?`\nFile size: ${Math.max(1,Math.round(Number(rec.size)/1024))} KB`:''}${rec.date?`\nRecorded: ${rec.date}`:''}${rec.type?`\nMedia format: ${rec.type}`:''}${d.notes?.[code]?`\nFull notes / transcript: ${d.notes[code]}`:''}`});(d?.voiceSubmissions||[]).forEach((rec,i)=>{if(!rec?.data)return;const codes=rec.confirmedCodes||rec.intendedCodes||[];rows.push(`${codes.join(', ')||'Talk About It'}: learner voice discussion\nAttached audio file: ${talkAboutFileName(rec,i)}${rec.duration?`\nDuration: ${rec.duration}`:''}${Number(rec.size)>0?`\nFile size: ${Math.max(1,Math.round(Number(rec.size)/1024))} KB`:''}${rec.date?`\nRecorded: ${rec.date}`:''}${rec.type?`\nMedia format: ${rec.type}`:''}`)});return rows.join('\n\n')}
  function observationRecordingDetails(d){return Object.entries(d?.observationRecordings||{}).map(([code,media])=>{const parts=[];if(media?.audio?.data)parts.push(`Professional discussion: ${media.audio.name||`${code}-discussion`}${media.audio.duration?` · ${media.audio.duration}`:''}${media.audio.type?` · ${media.audio.type}`:''}`);if(media?.video?.data)parts.push(`Video: ${media.video.name||`${code}-video`}${media.video.duration?` · ${media.video.duration}`:''}${media.video.type?` · ${media.video.type}`:''}`);return parts.length?`${code}: ${parts.join(' | ')}`:''}).filter(Boolean).join('\n')}
  function fileDetails(d){return (d?.files||[]).map((file,i)=>`${i+1}. ${file.evidenceName||file.name||'Evidence file'}${file.name&&file.evidenceName?` - original file: ${file.name}`:''}${file.type?` - ${file.type}`:''}${Number(file.size)>0?` - ${Math.round(Number(file.size)/1024)} KB`:''}`).join('\n')}
  function captionDetails(d){const rows=[];for(const [code,value] of Object.entries(d?.captions||{})){if(String(value||'').trim())rows.push(`${code}: ${value}`)}for(const [code,photo] of Object.entries(d?.outcomePhotos||{})){if(photo?.data)rows.push(`${code}: ${linkedPhotoFileName(code,0)}`)}for(const [code,photos] of Object.entries(d?.skillPhotos||{}))(photos||[]).forEach((photo,i)=>{if(photo?.data)rows.push(`${code} photo ${i+1}: ${linkedPhotoFileName(code,i)}`)});(d?.photos||[]).forEach((photo,i)=>{if(photo?.data)rows.push(`Photo ${i+1}: ${linkedRecordPhotoFileName(d,i)}`)});return rows.join('\n')}
  function drawFixedTextBox(x,labelText,content,px,py,bw,bh){
    x.fillStyle=WHITE;x.strokeStyle='#E1E9E0';x.lineWidth=1;roundedRect(x,px,py,bw,bh,18);x.fill();x.stroke();
    x.fillStyle='#EEF5EE';roundedRect(x,px+1,py+1,bw-2,34,17);x.fill();x.fillRect(px+1,py+18,bw-2,17);
    x.fillStyle='#52605f';x.font='700 12px Arial';fitText(x,clean(labelText).toUpperCase(),px+12,py+23,bw-24,12);
    const text=clean(content||'-').trim()||'-',innerW=bw-24,innerH=bh-51;
    let font=15,lines=[];while(font>=10){lines=wrap(x,text,innerW,`400 ${font}px Arial`);const lh=Math.ceil(font*1.32);if(lines.length*lh<=innerH)break;font--}
    const lh=Math.ceil(font*1.32),maxLines=Math.max(1,Math.floor(innerH/lh));if(lines.length>maxLines){lines=lines.slice(0,maxLines);let last=lines[maxLines-1]||'';while(last.length>3&&x.measureText(last+'…').width>innerW)last=last.slice(0,-1);lines[maxLines-1]=last.replace(/[ ,.;:-]+$/,'')+'…'}
    x.fillStyle=INK;x.font=`400 ${font}px Arial`;lines.forEach((line,i)=>x.fillText(line,px+12,py+51+i*lh));
  }
  async function addCompleteEvidenceRecord({title,version,date,type,newEvidenceType=type,fields,signatureTitle='Signature',signatureData=''}){
    const blocks=(fields||[]).map(([heading,content])=>[clean(heading||'Evidence'),clean(content||'').trim()]).filter(([,content])=>content);
    let pageNo=0,p,x,y;
    const startPage=continued=>{
      pageNo++;p=meta(newPage(`${title}${continued?' - Continued':''}`,version),version,date,type,newEvidenceType);x=p.x;y=sectionHeading(x,continued?'Evidence Details (continued)':'Evidence Details',p.y);
    };
    const ensure=needed=>{if(y+needed>H-112)startPage(true)};
    const drawBlock=(heading,content)=>{
      ensure(58);x.fillStyle='#52605f';x.font='700 12px Arial';x.fillText(clean(heading).toUpperCase(),M,y);y+=25;
      const lines=wrap(x,content,W-2*M-28,'400 17px Arial');x.fillStyle=INK;x.font='400 17px Arial';
      for(const line of lines){if(y+24>H-112){startPage(true);x.fillStyle='#52605f';x.font='700 12px Arial';x.fillText(`${clean(heading).toUpperCase()} · CONTINUED`,M,y);y+=25;x.fillStyle=INK;x.font='400 17px Arial'}x.fillText(line,M+12,y);y+=23}
      y+=17;x.strokeStyle='#E1E9E0';x.lineWidth=1;x.fillRect(M,y,W-2*M,1);y+=20;
    };
    startPage(false);
    if(!blocks.length)drawBlock('Evidence','No additional written evidence was recorded.');
    else blocks.forEach(([heading,content])=>drawBlock(heading,content));
    if(signatureData){
      if(y+190>H-112)startPage(true);
      const sig=await loadImage(signatureData);
      signature(x,sig,y,signatureTitle,((fields||[]).find(([k,v])=>/learner|assessor|observer|witness|lead|name/i.test(String(k))&&String(v||'').trim())||[])[1]||'',date||'');
    }
  }

  function submittedPhotoItems(d){
    const items=[];
    for(const [code,photo] of Object.entries(d?.outcomePhotos||{}))if(photo?.data)items.push({code,summary:linkedPhotoFileName(code,0),photo});
    for(const [code,photos] of Object.entries(d?.skillPhotos||{}))(photos||[]).forEach((photo,index)=>{if(photo?.data)items.push({code:`${code} · Photo ${index+1}`,summary:linkedPhotoFileName(code,index),photo})});
    (d?.photos||[]).forEach((photo,index)=>{if(photo?.data)items.push({code:selectedCodes(d).join(' · ')||`Photo ${index+1}`,summary:linkedRecordPhotoFileName(d,index),photo})});
    return items;
  }
  function drawCoverImage(x,img,px,py,bw,bh){
    x.fillStyle=WHITE;x.strokeStyle='#E1E9E0';x.lineWidth=1;roundedRect(x,px,py,bw,bh,18);x.fill();x.stroke();
    if(!img)return;const scale=Math.min(bw/img.width,bh/img.height),iw=img.width*scale,ih=img.height*scale;x.save();roundedRect(x,px,py,bw,bh,18);x.clip();x.drawImage(img,px+(bw-iw)/2,py+(bh-ih)/2,iw,ih);x.restore();
  }
  async function drawFixedPhotoGrid(x,items,{px=M,py,cols=3,rows=1,gap=14,captionH=38}={}){
    const max=cols*rows,totalW=W-2*M,cellW=(totalW-gap*(cols-1))/cols,cellH=cellW*9/16;
    for(let i=0;i<max;i++){
      const col=i%cols,row=Math.floor(i/cols),cx=px+col*(cellW+gap),cy=py+row*(cellH+captionH+gap),item=items[i];
      const img=item?.photo?.data?await loadImage(item.photo.data):null;drawCoverImage(x,img,cx,cy,cellW,cellH);
      x.fillStyle='#52605f';x.font='700 11px Arial';const labelText=item?clean(item.code||`Photo ${i+1}`):`PHOTO ${i+1}`;fitText(x,labelText,cx,cy+cellH+17,cellW,11);
      if(item?.caption){x.fillStyle=INK;x.font='400 10px Arial';fitText(x,clean(item.caption),cx,cy+cellH+32,cellW,10)}
    }
    return py+rows*(cellH+captionH+gap)-gap;
  }
  async function addFixedPhotoEvidenceRecord(d,{title,version,date,type,signatureTitle='Learner signature',assessor=false,summaryFields=[]}){
    const items=submittedPhotoItems(d).map(item=>({...item,caption:String(d?.captions?.[item.code]||item.photo?.caption||'')}));
    const pageCapacity=9,totalPages=assessor?Math.max(1,Math.ceil(items.length/pageCapacity)):1;
    for(let pageIndex=0;pageIndex<totalPages;pageIndex++){
      const continued=pageIndex?` · Continued ${pageIndex+1}/${totalPages}`:'',p=meta(newPage(`${title}${continued}`,version),version,date,type),x=p.x,signatureTop=H-238;
      let y=sectionHeading(x,`${assessor?'Assessor Observation':'Photographic Evidence'}${continued}`,p.y);
      const summary=summaryFields.filter(([,v])=>clean(v||'').trim());
      if(summary.length){
        const cols=Math.min(2,summary.length),rows=Math.ceil(summary.length/cols),gap=8,bh=rows>1?60:70,bw=(W-2*M-gap*(cols-1))/cols;
        summary.forEach(([a,b],i)=>drawFixedTextBox(x,a,b,M+(i%cols)*(bw+gap),y+Math.floor(i/cols)*(bh+gap),bw,bh));
        y+=rows*(bh+gap)+8;
      }
      const batch=items.slice(pageIndex*pageCapacity,(pageIndex+1)*pageCapacity),count=Math.max(1,batch.length);
      const layout=assessor?{cols:3,rows:3}:takePhotosGridLayout(count),{cols,rows}=layout;
      await drawFixedPhotoGrid(x,batch,{py:y,cols,rows,gap:10,captionH:18});
      if(d.signature&&pageIndex===totalPages-1){const sig=await loadImage(d.signature);signature(x,sig,signatureTop,signatureTitle,d.signatureName||d.tutor||d.assessor||d.personName||profile?.name||'',d.signatureDate||d.date||date||'')}
    }
  }
  async function addSubmittedPhotoPages(d,title,version,date,type){
    return addFixedPhotoEvidenceRecord(d,{title,version,date,type,signatureTitle:type==='Assessor Observation'?'Tutor / assessor signature':'Learner signature',assessor:type==='Assessor Observation'});
  }

  async function addOutcomePhotoPages(d,title,version,date,type,selectedOnly=false){
    const photos=d?.outcomePhotos||{};
    const outcomes=assignment.ksbs.filter(([code])=>photos[code]?.data&&(!selectedOnly||+d.scores?.[code]===5));
    for(let i=0;i<outcomes.length;i+=4){
      const batch=outcomes.slice(i,i+4),p=meta(newPage(`${title} - ${course.nvqUnits?'Learning Outcome':'KSB'} Photos`,version),version,date,type);const x=p.x;let y=sectionHeading(x,course.nvqUnits?'Learning Outcome Photographs':'KSB Photographs',p.y);const gapX=22,gapY=32,cellW=(W-2*M-gapX)/2,cellH=cellW*9/16;
      for(let j=0;j<batch.length;j++){const [code,text]=batch[j],col=j%2,row=Math.floor(j/2),px=M+col*(cellW+gapX),py=y+row*(cellH+gapY+54),img=await loadImage(photos[code].data);x.fillStyle=PALE;x.fillRect(px,py,cellW,cellH);if(img){const scale=Math.max(cellW/img.width,cellH/img.height),iw=img.width*scale,ih=img.height*scale;x.save();x.beginPath();x.rect(px,py,cellW,cellH);x.clip();x.drawImage(img,px+(cellW-iw)/2,py+(cellH-ih)/2,iw,ih);x.restore()}x.fillStyle=TEAL;x.font='700 17px Arial';x.fillText(clean(code),px,py+cellH+24);x.fillStyle=INK;x.font='400 13px Arial';const caption=wrap(x,text,cellW,'400 13px Arial').slice(0,2);caption.forEach((line,k)=>x.fillText(line,px,py+cellH+43+k*16));}
    }
  }
  async function addFilePreviewPages(d,title,version,date,type){
    const files=(d?.files||[]).filter(file=>file?.data||file?.thumbnail),items=[];
    for(const file of files){const src=String(file.type||'').startsWith('video/')?(file.thumbnail||''):file.data;if(src)items.push({file,img:await loadImage(src)})}
    for(let start=0;start<items.length;start+=4){const batch=items.slice(start,start+4),pageNo=Math.floor(start/4)+1,totalPages=Math.ceil(items.length/4),p=meta(newPage(`${title} - Attached Files${totalPages>1?` ${pageNo}/${totalPages}`:''}`,version),version,date,type),x=p.x;let y=sectionHeading(x,'Attached Evidence Files',p.y),gapX=22,gapY=74,cellW=(W-2*M-gapX)/2,cellH=cellW*9/16;for(let j=0;j<batch.length;j++){const {file,img}=batch[j],col=j%2,row=Math.floor(j/2),px=M+col*(cellW+gapX),py=y+row*(cellH+gapY);x.fillStyle=PALE;x.fillRect(px,py,cellW,cellH);if(img){const scale=Math.max(cellW/img.width,cellH/img.height),iw=img.width*scale,ih=img.height*scale;x.save();x.beginPath();x.rect(px,py,cellW,cellH);x.clip();x.drawImage(img,px+(cellW-iw)/2,py+(cellH-ih)/2,iw,ih);x.restore()}x.fillStyle=x._sectionColour||TEAL;x.font='700 15px Arial';fitText(x,clean(file.evidenceName||file.name||`Evidence file ${start+j+1}`),px,py+cellH+23,cellW,15);x.fillStyle=MUTED;x.font='400 13px Arial';fitText(x,clean(file.name||file.type||''),px,py+cellH+44,cellW,13)}}
  }

  // Front cover (unnumbered)
  {
    const c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');apprenticePdfBackground(x,W,H);
    drawLogo(x,apprenticeLogo,M,74,196,88);if(collegeLogo)drawLogo(x,collegeLogo,W-M-240,82,190,70);
    x.fillStyle='#DCE7DA';x.fillRect(M,208,W-2*M,1);
    x.fillStyle=MUTED;x.font='600 16px Arial';x.fillText('APPRENTICE+ · EVIDENCE PORTFOLIO',M,278);
    x.fillStyle=INK;x.font='700 58px Arial';fitText(x,clean(course.name||'Apprenticeship Course'),M,358,W-2*M,58);
    x.fillStyle=MUTED;x.font='500 20px Arial';x.fillText(`${clean(course.standard||'')}  ·  Level ${clean(course.level||'-')}`,M,402);
    x.fillStyle=TEAL;x.fillRect(M,456,52,3);
    x.fillStyle=INK;x.font='700 34px Arial';fitText(x,`EP${assignment.n} · ${clean(assignment.title)}`,M,522,W-2*M,34);
    let y=632;const rows=[['Learner',profile.fullName],['Employer',profile.employer],['Training provider',branding?.name||profile.trainingProvider||profile.provider||'-'],['Assessor',profile.mentor],['Portfolio date',new Date().toLocaleDateString('en-GB')],['Evidence items',String(evidenceCatalogue.length)]];
    rows.forEach(([a,b])=>{x.fillStyle=MUTED;x.font='600 13px Arial';x.fillText(clean(a).toUpperCase(),M,y);x.fillStyle=INK;x.font='600 21px Arial';fitText(x,clean(b||'-'),M,y+31,W-2*M,21);x.fillStyle='#ECEFEE';x.fillRect(M,y+55,W-2*M,1);y+=92});
    x.fillStyle=MUTED;x.font='500 14px Arial';x.fillText('A complete record of submitted evidence and mapped assessment criteria.',M,H-112);
    x.fillStyle=INK;x.font='600 15px Arial';x.fillText('Your Course, Your Way',M,H-78);
    pages.push({canvas:c,ctx:x,colour:TEAL,sectionName:'Portfolio',isCover:true});
  }

  // Page 1 - portfolio contents
  {
    const p=meta(newPage('Portfolio Contents','Page 1'),'Portfolio index','Evidence Portfolio');const x=p.x;let y=sectionHeading(x,'Evidence Index',p.y);
    if(!evidenceCatalogue.length){value(x,'No submitted evidence items were available.',M,y,20)}else{
      evidenceCatalogue.forEach((item,i)=>{if(y>H-135)return;x.fillStyle=i%2?WHITE:PALE;x.fillRect(M,y-28,W-2*M,52);x.fillStyle=x._sectionColour||TEAL;x.font='700 19px Arial';x.fillText(item.ref,M+16,y);x.fillStyle=INK;x.font='600 18px Arial';fitText(x,item.title,M+105,y,W-2*M-340,18);x.fillStyle=MUTED;x.font='500 16px Arial';x.textAlign='right';x.fillText(item.date||'-',W-M-18,y);x.textAlign='left';y+=56});
    }
    y=Math.min(y+25,H-310);y=sectionHeading(x,'Evidence Reference Key',y);
    const keys=['PA  Practical Assessment','LS  Write About It','WT  Witness / Employer Testimony','VW  Record a Video','PD  Talk About It','PE  Photo Evidence'];
    keys.forEach((t,i)=>{x.fillStyle=INK;x.font='600 17px Arial';x.fillText(t,M+(i%2)*520,y+Math.floor(i/2)*34)});
  }

  // Page 2+ - automatic KSB evidence matrix. Every evidence reference is shown
  // and long KSB descriptions wrap instead of running beyond the page edge.
  {
    let p=meta(newPage('KSB Evidence Matrix','Page 2'),'Automatic mapping','Evidence Portfolio');let x=p.x;let y=sectionHeading(x,'KSB Mapping',p.y);
    x.fillStyle=MUTED;x.font='400 17px Arial';x.fillText('Evidence references show exactly where each KSB is evidenced within this downloaded portfolio.',M,y);y+=42;
    const drawMatrixHeader=()=>{x.fillStyle=x._sectionColour||TEAL;x.fillRect(M,y-24,W-2*M,38);x.fillStyle=WHITE;x.font='700 15px Arial';x.fillText('KSB',M+14,y);x.fillText('Description',M+88,y);x.textAlign='right';x.fillText('Evidence location',W-M-16,y);x.textAlign='left';y+=54};
    drawMatrixHeader();
    for(const [code,summary] of assignment.ksbs||[]){
      const refs=evidenceMatrix[code]||[];
      x.font='600 15px Arial';const summaryLines=wrap(x,clean(summary),W-2*M-390,'600 15px Arial');
      x.font='700 16px Arial';const refText=refs.length?refs.join('  '):'No evidence mapped';const refLines=wrap(x,refText,280,'700 16px Arial');
      const rowH=Math.max(58,Math.max(summaryLines.length*20,refLines.length*21)+26);
      if(y+rowH>H-115){p=meta(newPage('KSB Evidence Matrix - Continued','Automatic mapping'),'Automatic mapping','Evidence Portfolio');x=p.x;y=sectionHeading(x,'KSB Mapping (continued)',p.y);drawMatrixHeader()}
      x.fillStyle=refs.length?PALE:'#fafafa';x.fillRect(M,y-25,W-2*M,rowH-6);
      x.fillStyle=x._sectionColour||TEAL;x.font='700 18px Arial';x.fillText(code,M+14,y);drawCriterionRpl(x,code,M+52,y,16);
      x.fillStyle=INK;x.font='600 15px Arial';summaryLines.forEach((line,i)=>x.fillText(line,M+88,y+i*20));
      x.textAlign='right';x.fillStyle=refs.length?(x._sectionColour||TEAL):MUTED;x.font='700 16px Arial';refLines.forEach((line,i)=>x.fillText(line,W-M-16,y+i*21));x.textAlign='left';y+=rowH;
    }
    const covered=Object.values(evidenceMatrix).filter(v=>v.length).length,total=(assignment.ksbs||[]).length;
    if(y+86>H-110){p=meta(newPage('KSB Evidence Matrix - Summary','Automatic mapping'),'Automatic mapping','Evidence Portfolio');x=p.x;y=sectionHeading(x,'KSB Mapping Summary',p.y)}
    x.fillStyle=PALE;x.fillRect(M,y,W-2*M,76);label(x,'KSB coverage in this pack',M+22,y+31);value(x,`${covered} of ${total} KSBs mapped`,M+355,y+32,22,true);
  }

  const scoreRows=(p,d,startY)=>{const x=p.x;let y=startY;assignment.ksbs.forEach(([code,summary])=>{if(y>H-230){p=meta(newPage(`${p.title||'Assessment'} - Scores Continued`,d._version),d._version,d.date,'Assessment');y=sectionHeading(p.x,'KSB Scores (continued)',p.y)}x=p.x;x.fillStyle=PALE;x.fillRect(M,y-29,W-2*M,45);x.fillStyle=TEAL;x.font='700 19px Arial';x.fillText(code,M+16,y);x.fillStyle=INK;x.font='400 16px Arial';x.fillText(clean(summary),M+105,y);x.textAlign='right';x.font='700 20px Arial';x.fillText(`${d.scores?.[code]||'-'} / 5`,W-M-18,y);x.textAlign='left';y+=52});return {p,y}};

  // Assessor observation: preserve the complete narrative and all comments. Photos follow on a dedicated 3x3 page.
  for(let i=0;i<(sections.practical||[]).length;i++){
    const d=sections.practical[i],v=i+1;d._version=v;
    await addCompleteEvidenceRecord({title:`Verified by Someone Else · AO${v}`,version:`Attempt ${v}`,date:d.date,type:'Assessor Observation',fields:[['Observer / assessor',d.tutor||d.assessor],['Activity observed',d.activity],['KSBs met by this evidence',selectedKsbDetails(d)],['Full assessor observation',d.feedback||d.observation||d.observationText],['Assessment summary',d.feedbackSummary],['Areas for improvement',d.feedbackDevelopment],['Additional assessor comments',d.additionalComments],['Assessor discussion / recordings',observationRecordingDetails(d)]],signatureTitle:'Tutor / assessor signature',signatureData:d.signature});
    if(submittedPhotoItems(d).some(item=>item?.photo?.data)){const photoOnly={...d,signature:''};await addFixedPhotoEvidenceRecord(photoOnly,{title:`Verified by Someone Else · AO${v} · Photographs`,version:`Attempt ${v}`,date:d.date,type:'Assessor Observation',assessor:true,summaryFields:[['KSBs met by this evidence',selectedKsbDetails(d)],['Photo evidence','Optional assessor observation photographs · 3 × 3 grid']]})}
  }

  // Photographic evidence: one fixed page with three landscape photographs side by side.
  for(let i=0;i<(sections.photos||[]).length;i++){
    const d=sections.photos[i],v=i+1;
    await addFixedPhotoEvidenceRecord(d,{title:`Take Photos · PE${v}`,version:v,date:d.date,type:'Photographic Evidence',signatureTitle:'Learner signature',assessor:false,summaryFields:[['Activity / photo notes',d.activity],['KSBs met by this evidence',selectedKsbDetails(d)]]});
  }

  // Statements
  for(let i=0;i<(sections.statement||[]).length;i++){
    const d=sections.statement[i],v=i+1;await addCompleteEvidenceRecord({title:`Write About It · LS${v}`,version:v,date:d.date,type:'Learner Statement',fields:[['KSBs met by this evidence',selectedKsbDetails(d)],['Learner response',d.text||d.statement||d.learnerStatement]],signatureTitle:'Learner signature',signatureData:d.signature});
  }

  for(let i=0;i<(sections.discussion||[]).length;i++){
    const d=sections.discussion[i],v=i+1;await addCompleteEvidenceRecord({title:`Record a Video · VW${v}`,version:`Attempt ${v}`,date:d.date,type:'Video Walkthrough',newEvidenceType:'discussion',fields:[['Walkthrough lead',d.assessor],['Activity demonstrated',d.activity],['Video evidence and notes',recordingDetails(d,'Video recording')]],signatureTitle:'Assessor / walkthrough lead signature',signatureData:d.signature});
  }

  // Witness testimony: preserve every field without repeating it on a summary page.
  for(let i=0;i<(sections.witness||[]).length;i++){
    const d=sections.witness[i],v=i+1;
    await addCompleteEvidenceRecord({title:`Verified by Someone Else · WT${v}`,version:`Attempt ${v}`,date:d.date,type:'Witness Testimony',fields:[['Evidence source',d.type],['Name',d.personName],['Role',d.role],['Preferred contact details',d.contactDetails||d.organisation],['Activity witnessed',d.activity],['KSBs met by this evidence',selectedKsbDetails(d)],['Ratings',witnessRatingDetails(d)],['Witness Testimony / Additional Comments',d.feedback],['Additional Comments',d.additionalComments],['Attached files',fileDetails(d)],['Photographs and captions',captionDetails(d)]],signatureTitle:`${d.type||'Witness'} signature`,signatureData:d.signature});
    await addSubmittedPhotoPages(d,`Verified by Someone Else · WT${v}`,`Attempt ${v}`,d.date,'Witness Testimony');
    await addFilePreviewPages(d,`Verified by Someone Else · WT${v}`,`Attempt ${v}`,d.date,'Witness Testimony');
  }

  // Professional discussion: recording details and assessor notes appear once in the evidence record.
  for(let i=0;i<(sections.professionalDiscussion||[]).length;i++){
    const d=sections.professionalDiscussion[i],v=i+1;
    await addCompleteEvidenceRecord({title:`Talk About It · PD${v}`,version:`Attempt ${v}`,date:d.date,type:'Professional Discussion',fields:[['Discussion lead',d.assessor],['Activity / subject',d.activity],['Voice evidence and notes',recordingDetails(d,'Audio recording')]],signatureTitle:'Assessor / discussion lead signature',signatureData:d.signature});
  }

  // Supporting evidence - include every name, description, mapping, score and statement field.
  for(let i=0;i<(sections.supporting||[]).length;i++){
    const d=sections.supporting[i],v=i+1;
    await addCompleteEvidenceRecord({title:`Upload Evidence · SE${v}`,version:`Attempt ${v}`,date:d.date,type:'Supporting Evidence',fields:[['Evidence tab',d.tab],['Evidence type',d.type],['Name',d.personName],['Role',d.role],['Organisation',d.organisation],['Activity / description',d.activity],['KSBs met by this evidence',selectedKsbDetails(d)],['All marks awarded',scoredDetails(d)],['Assessment Summary',d.feedbackSummary],['Areas for Improvement',d.feedbackDevelopment],['Additional Comments',d.feedback],['Attached files',fileDetails(d)],['Photographs and captions',captionDetails(d)]],signatureTitle:`${d.type||'Supporting evidence'} signature`,signatureData:d.signature});
    await addSubmittedPhotoPages(d,`Upload Evidence · SE${v}`,`Attempt ${v}`,d.date,'Supporting Evidence');
    await addFilePreviewPages(d,`Upload Evidence · SE${v}`,`Attempt ${v}`,d.date,'Supporting Evidence');
  }

  // Individually saved walkthrough clips are evidence submissions in their own right.
  for(let i=0;i<(sections.walkthrough||[]).length;i++){
    const f=sections.walkthrough[i],v=i+1;
    await addCompleteEvidenceRecord({title:`Record a Video · VW${v}`,version:v,date:f.date,type:'Video Walkthrough',newEvidenceType:'walkthrough',fields:[['KSB met by this evidence',[f.code,f.summary].filter(Boolean).join(' - ')],['Video filename',ksbMediaFileName(f)],['Original filename',f.name],['Recorded date',f.date],['Duration',f.duration],['Media format',f.type],['File size',Number(f.size)>0?`${Math.round(Number(f.size)/1024)} KB`:'']]});
  }

  // RPL is a saved evidence record, not merely a completion flag. Render every
  // historical record, mapping and attachment reference in the same unit PDF.
  for(let i=0;i<(rplEvidence?.entries||[]).length;i++){
    const d=rplEvidence.entries[i],codes=d.codes||d.selected||[],files=d.files||[];
    await addCompleteEvidenceRecord({title:`RPL · Recognition of Prior Learning · RPL${i+1}`,version:`Record ${i+1}`,date:d.date||d.savedAt,type:'Recognition of Prior Learning',fields:[['Evidence reference',`RPL${i+1}`],['KSBs met by this evidence',codes.map(code=>{const row=(assignment.ksbs||[]).find(([c])=>c===code);return `${code}${row?.[1]?` - ${row[1]}`:''}`}).join('\n')],['Description / supporting statement',d.description||d.statement||d.notes],['Outcome / status',d.outcome||d.status],['Verification',d.verification||d.verifiedBy||d.assessor],['Attached RPL source files',files.map((file,index)=>`${index+1}. ${file.evidenceName||file.name||'RPL source file'}${file.type?` - ${file.type}`:''}`).join('\n')]],signatureTitle:'RPL verifier signature',signatureData:d.signature});
    await addFilePreviewPages({files},`RPL · Recognition of Prior Learning · RPL${i+1}`,`Record ${i+1}`,d.date||d.savedAt,'Recognition of Prior Learning');
  }

  if(learningHours){
    const rows=Array.isArray(learningHours.entries)?learningHours.entries:[];let lp,lx,ly,running=0;
    const startLearningPage=continued=>{lp=newPage(`${learningHours.label||'Learning'} Evidence${continued?' - Continued':''}`,`${learningHours.longLabel||'Learning hours'}`);lx=lp.x;ly=sectionHeading(lx,continued?`${learningHours.longLabel||'Learning hours'} · continued`:`${learningHours.longLabel||'Learning hours'} · Evidence Pack requirement`,lp.y)};
    const ensureLearning=needed=>{if(ly+needed>H-112)startLearningPage(true)};
    const learningField=(heading,text)=>{const lines=wrap(lx,clean(text||'-'),W-2*M-40,'400 15px Arial');ensureLearning(42);lx.fillStyle=MUTED;lx.font='700 11px Arial';lx.fillText(heading.toUpperCase(),M+16,ly);ly+=20;lx.fillStyle=INK;lx.font='400 15px Arial';for(const line of lines){if(ly+21>H-112){startLearningPage(true);lx.fillStyle=MUTED;lx.font='700 11px Arial';lx.fillText(`${heading.toUpperCase()} · CONTINUED`,M+16,ly);ly+=20;lx.fillStyle=INK;lx.font='400 15px Arial'}lx.fillText(line,M+16,ly);ly+=20}ly+=10};
    startLearningPage(false);
    lx.fillStyle=PALE;lx.fillRect(M,ly,W-2*M,116);lx.fillStyle=INK;lx.font='700 20px Arial';lx.fillText(`Completed: ${Number(learningHours.total||0).toFixed(1)} hrs`,M+22,ly+38);lx.fillText(`Required: ${Number(learningHours.target||0).toFixed(1)} hrs`,M+390,ly+38);lx.fillStyle=learningHours.complete?GREEN:'#b45309';lx.font='800 18px Arial';lx.fillText(learningHours.complete?'Requirement complete':'Requirement not yet complete',M+22,ly+78);ly+=148;
    if(!rows.length){lx.fillStyle=MUTED;lx.font='400 18px Arial';lx.fillText(`No ${learningHours.label||''} entries have been recorded for this Evidence Pack.`,M,ly)}
    for(const e of rows){running+=Number(e.hours||0);ensureLearning(90);lx.fillStyle='#FFFFFF';lx.strokeStyle='#DCE7DA';lx.fillRect(M,ly,W-2*M,68);lx.strokeRect(M+.5,ly+.5,W-2*M-1,67);lx.fillStyle=TEAL;lx.font='700 15px Arial';lx.fillText(`${e.date||'-'} · ${Number(e.hours||0).toFixed(1)} hrs · Running total ${running.toFixed(1)} hrs`,M+16,ly+25);lx.fillStyle=INK;lx.font='600 14px Arial';lx.fillText(clean(e.activity||e.place||'Learning activity'),M+16,ly+49);ly+=84;learningField('What did you do?',e.did||e.activity||e.place||'');learningField('What did you learn?',e.learned||'');lx.strokeStyle='#DCE7DA';lx.fillRect(M,ly,W-2*M,1);ly+=24}
  }


  footerAll();
  if(assignmentRpl)pages.forEach(p=>drawRecordedPriorLearningStamp(p.ctx));
  const previewPages=pages.map(p=>p.canvas.toDataURL('image/jpeg',0.86));
  const jpegPages=previewPages.map(dataUrlBytes);
  const pdf=makeImagePDF(jpegPages,W,H);
  const safe=clean(profile.fullName).replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'');
  const pdfName=`${safe||'Learner'}-EP-${assignment.n}-Evidence-Pack.pdf`;
  const evidenceFiles=[];
  for(const sectionName of ['witness','supporting'])for(let sectionIndex=0;sectionIndex<(sections[sectionName]||[]).length;sectionIndex++){const version=sections[sectionName][sectionIndex],codes=selectedKsbCodesForMedia(assignment,version);for(const file of version.files||[])if(file?.data)evidenceFiles.push({file,codes,attempt:sectionIndex+1,sectionName})}
  for(let recordIndex=0;recordIndex<(rplEvidence?.entries||[]).length;recordIndex++){const record=rplEvidence.entries[recordIndex];for(const file of record.files||[])if(file?.data)evidenceFiles.push({file,codes:record.codes||[],attempt:recordIndex+1,sectionName:'rpl'})}
  const walkthroughVideos=[];
  for(let vi=0;vi<(sections.discussion||[]).length;vi++){const version=sections.discussion[vi];for(const [code,rec] of Object.entries(version.recordings||{}))if(rec?.data)walkthroughVideos.push({code,summary:(assignment.ksbs||[]).find(([ksb])=>ksb===code)?.[1],rec,attempt:vi+1,newType:'discussion'})}
  for(let vi=0;vi<(sections.walkthrough||[]).length;vi++){const rec=sections.walkthrough[vi];if(rec?.data)walkthroughVideos.push({code:rec.code||`KSB ${vi+1}`,summary:rec.summary,rec,attempt:vi+1,newType:'walkthrough'})}
  const audios=[];for(let vi=0;vi<(sections.professionalDiscussion||[]).length;vi++){const version=sections.professionalDiscussion[vi];for(const [code,rec] of Object.entries(version.recordings||{}))if(rec?.data)audios.push({code,rec,attempt:vi+1})}
  for(let vi=0;vi<(sections.professionalDiscussion||[]).length;vi++){const version=sections.professionalDiscussion[vi];(version.voiceSubmissions||[]).forEach((rec,ri)=>{if(rec?.data)audios.push({code:(rec.confirmedCodes||rec.intendedCodes||[]).join('-')||`Discussion-${ri+1}`,rec:{...rec,name:talkAboutFileName(rec,ri)},attempt:vi+1})})}
  if(evidenceFiles.length||walkthroughVideos.length||audios.length){
    const entries=[{name:pdfName,data:pdf}],used=new Set();
    evidenceFiles.forEach(({file,codes,attempt,sectionName},i)=>{const original=String(file.name||''),dot=original.lastIndexOf('.'),mime=String(file.type||''),ext=dot>0?original.slice(dot):mime.startsWith('image/')?`.${mime.split('/')[1].replace('jpeg','jpg')}`:mime.startsWith('video/')?mediaExtension(mime,original,'video',file.data):mime.startsWith('audio/')?mediaExtension(mime,original,'audio',file.data):'.bin',newMark=isNewEvidence(sectionName,attempt)?'NEW EVIDENCE - ':'',prefix=(codes||[]).join('-'),base=safeZipName(`${newMark}${prefix?prefix+' - ':''}${file.evidenceName||file.name||`Evidence file ${i+1}`}`),name=uniqueMediaName(base,ext,used),folder=sectionName==='rpl'?'RPL Source Files':sectionName==='witness'?'Witness Evidence Files':'Supporting Evidence Files';entries.push({name:`${folder}/${name}`,data:dataUrlBytes(file.data)})});
    walkthroughVideos.forEach(({code,summary,rec,attempt,newType})=>{const ext=mediaExtension(rec.type,rec.name,'video',rec.data),newMark=isNewEvidence(newType,attempt)?'NEW EVIDENCE - ':'',base=safeZipName(`${newMark}${code} - ${summary||'Video evidence'}`),name=uniqueMediaName(base,ext,used);entries.push({name:`KSB Video Evidence/${name}`,data:dataUrlBytes(rec.data)})});
    audios.forEach(({code,rec,attempt},i)=>{const ext=mediaExtension(rec.type,'','audio',rec.data),newMark=isNewEvidence('professionalDiscussion',attempt)?'NEW EVIDENCE - ':'',base=safeZipName(`${newMark}${code} - Professional Discussion - Attempt ${attempt}`),name=uniqueMediaName(base,ext,used);entries.push({name:`KSB Voice Notes/${name}`,data:dataUrlBytes(rec.data)})});
    const packageName=`${safe||'Learner'}-Assignment-${assignment.n}-Complete-Evidence-Package.zip`;
    if(returnPackage)return {assignmentNumber:assignment.n,pdfName,entries,packageName,previewPages};
    await downloadBlob(makeZipBlob(entries),'application/zip',packageName);
  }else{
    const entries=[{name:pdfName,data:pdf}];
    if(returnPackage)return {assignmentNumber:assignment.n,pdfName,entries,packageName:pdfName,previewPages};
    await downloadBlob(pdf,'application/pdf',pdfName);
  }
}

function selectedKsbCodesForMedia(assignment,version){
  const available=new Set((assignment?.ksbs||[]).map(([code])=>String(code)));
  return Object.entries(version?.scores||{}).filter(([code,score])=>available.has(String(code))&&Number(score)>0).map(([code])=>String(code));
}
function mediaExtension(type,name,kind='video',data=''){
  const original=String(name||''),dot=original.lastIndexOf('.');if(dot>0&&dot>original.length-8)return original.slice(dot);
  let mime=String(type||'').toLowerCase();
  const header=String(data||'').match(/^data:([^;,]+)/i);if(header?.[1])mime=header[1].toLowerCase();
  try{const bytes=dataUrlBytes(data).slice(0,16),text=(a,b)=>String.fromCharCode(...bytes.slice(a,b));if(bytes[0]===0x1a&&bytes[1]===0x45&&bytes[2]===0xdf&&bytes[3]===0xa3)mime=kind==='audio'?'audio/webm':'video/webm';else if(text(0,4)==='OggS')mime=kind==='audio'?'audio/ogg':'video/ogg';else if(text(0,4)==='RIFF'&&text(8,12)==='WAVE')mime='audio/wav';else if(text(4,8)==='ftyp')mime=kind==='audio'?'audio/mp4':'video/mp4';else if(text(0,3)==='ID3')mime='audio/mpeg'}catch{}
  if(mime.includes('mp4'))return kind==='audio'?'.m4a':'.mp4';if(mime.includes('ogg'))return '.ogg';if(mime.includes('mpeg'))return '.mp3';if(mime.includes('wav'))return '.wav';return '.webm';
}
function uniqueMediaName(base,ext,used){let name=`${base}${ext}`,n=2;while(used.has(name.toLowerCase()))name=`${base} (${n++})${ext}`;used.add(name.toLowerCase());return name}
function ksbMediaFileName(f){return `${safeZipName(`${f.code||'KSB'} - ${f.summary||'Video evidence'}`)}${mediaExtension(f.type,f.name,'video',f.data)}`}

/* NVQ-only portfolio PDF. This branch is intentionally isolated so the original
   Bricklaying, Site Carpentry, Architectural Joiner and Property Maintenance
   PDF layouts and grading logic remain unchanged. */
async function generateNVQEvidencePackPDF({course, assignment, profile, sections, branding, returnPackage=false, newEvidence={}, assignmentRpl=false, rplKsbCodes=[], rplEvidence=null, learningHours=null}) {
  const W=1240,H=1754,M=88,TEAL='#58B51F',GREEN='#58B51F',YELLOW='#F7D75C',GREY='#EEF5EE',INK='#18231E',MUTED='#68756D',PALE='#F3F8F2',WHITE='#ffffff';
  const pages=[];
  const newEvidenceAliases={practical:'practical',practicalassessment:'practical',assessorobservation:'practical',photos:'photos',photoevidence:'photos',photographicevidence:'photos',statement:'statement',learnerstatement:'statement',discussion:'discussion',videowalkthrough:'walkthrough',professionaldiscussion:'professionalDiscussion',witness:'witness',witnesstestimony:'witness',supporting:'supporting',supportingevidence:'supporting',walkthrough:'walkthrough'};
  const isNewEvidence=(type,attempt)=>{const key=newEvidenceAliases[String(type||'').replace(/[^a-z]/gi,'').toLowerCase()]||String(type||'');return Array.isArray(newEvidence?.[key])&&newEvidence[key].includes(Number(attempt))};
  const isPortfolioBuildingEvidence=type=>/practical assessment|assessor observation|learner statement|witness testimony|photo(?:graphic)? evidence|video walkthrough|professional discussion|supporting evidence/i.test(String(type||''));
  const drawNewEvidenceStamp=x=>{x.save();x.translate(W-235,205);x.rotate(-0.08);x.strokeStyle='#d32f2f';x.fillStyle='rgba(255,255,255,.92)';x.lineWidth=5;x.fillRect(-5,-38,190,62);x.strokeRect(-5,-38,190,62);x.fillStyle='#d32f2f';x.font='900 23px Arial';x.textAlign='center';x.fillText('NEW EVIDENCE',90,2);x.textAlign='left';x.restore()};
  const clean=v=>String(v??'').replace(/[\u2010-\u2015]/g,'-').replace(/[\u2018\u2019]/g,"'").replace(/[\u201c\u201d]/g,'"');
  const rplCodes=new Set((rplKsbCodes||[]).map(code=>String(code)));
  const isCriterionRpl=code=>rplCodes.has(String(code));
  const drawRecordedPriorLearningStamp=x=>{x.save();x.translate(W/2,H/2);x.rotate(-0.16);x.globalAlpha=.30;x.strokeStyle='#b91c1c';x.fillStyle='#b91c1c';x.lineWidth=10;x.strokeRect(-390,-110,780,220);x.textAlign='center';x.textBaseline='middle';x.font='900 48px Arial';x.fillText('RECORDED PRIOR LEARNING',0,-26);x.font='900 82px Arial';x.fillText('RPL',0,55);x.textAlign='left';x.textBaseline='alphabetic';x.globalAlpha=1;x.restore()};
  const drawCriterionRpl=(x,code,px,py,size=16)=>{if(!isCriterionRpl(code))return;x.fillStyle='#dc2626';x.font=`900 ${size}px Arial`;x.fillText('RPL',px,py)};
  const allOutcomeCodes=new Set((assignment.ksbs||[]).map(([code])=>code));
  const isVideoRecording=rec=>!!rec&&(String(rec.type||'').toLowerCase().startsWith('video/')||String(rec.data||'').toLowerCase().startsWith('data:video/'));
  const selectedCodes=d=>{const explicit=Array.isArray(d?.ksbEvidence)?d.ksbEvidence:[];const photos=Object.keys(d?.outcomePhotos||{}).filter(code=>d.outcomePhotos?.[code]?.data);const scores=Object.keys(d?.scores||{}).map(k=>String(k).split('::')[0]).filter(code=>Number(d?.scores?.[code]??Object.entries(d?.scores||{}).find(([key])=>String(key).split('::')[0]===code)?.[1])>0);const recordings=Object.keys(d?.recordings||{}).filter(code=>d.recordings?.[code]?.data);return [...new Set([...explicit,...photos,...scores,...recordings].filter(code=>allOutcomeCodes.has(code)))];};
  const selectedVideoCodes=d=>Object.keys(d?.recordings||{}).filter(code=>allOutcomeCodes.has(code)&&isVideoRecording(d.recordings?.[code]));
  const selectedScores=d=>(assignment.ksbs||[]).filter(([code])=>selectedCodes(d).includes(code));
  const drawAllOutcomeRows=(x,d,startY,maxHeight)=>{const rows=selectedScores(d);if(!rows.length){x.fillStyle=MUTED;x.font='400 15px Arial';x.fillText('No learning outcomes selected.',M,startY);return startY+24}const rowH=Math.max(22,Math.min(38,Math.floor(maxHeight/rows.length))),font=Math.max(10,Math.min(15,rowH-9));let y=startY;rows.forEach(([code,text],i)=>{x.fillStyle=i%2?WHITE:PALE;x.fillRect(M,y-rowH+7,W-2*M,rowH);x.fillStyle=x._sectionColour||TEAL;x.font=`700 ${font}px Arial`;x.fillText(clean(code),M+10,y);drawCriterionRpl(x,code,M+48,y,Math.max(10,font));x.fillStyle=INK;x.font=`400 ${font}px Arial`;fitText(x,clean(text),M+90,y,W-2*M-102,font);y+=rowH});return y};
  const selectedStatement=d=>(assignment.ksbs||[]).filter(([code])=>selectedCodes(d).includes(code));
  const selectedDiscussion=d=>{const recordings=d?.recordings||{};return (assignment.ksbs||[]).filter(([code])=>!!recordings?.[code]?.data)};
  const evidenceMap={};(assignment.ksbs||[]).forEach(([code])=>evidenceMap[code]=[]);
  const add=(code,ref,type)=>{if(evidenceMap[code]&&!evidenceMap[code].some(e=>e.ref===ref))evidenceMap[code].push({ref,type})};
  (sections.practical||[]).forEach((d,i)=>selectedCodes(d).forEach(c=>add(c,`AO${i+1}`,'Assessor Observation')));
  (sections.photos||[]).forEach((d,i)=>selectedCodes(d).forEach(c=>add(c,`PE${i+1}`,'Photographic Evidence')));
  (sections.statement||[]).forEach((d,i)=>selectedCodes(d).forEach(c=>add(c,`LS${i+1}`,'Learner Statement')));
  (sections.discussion||[]).forEach((d,i)=>selectedVideoCodes(d).forEach(c=>add(c,`VW${i+1}`,'Video Walkthrough')));
  (sections.walkthrough||[]).forEach((d,i)=>{if(d.code)add(d.code,`VW${i+1}`,'Video Walkthrough')});
  (sections.professionalDiscussion||[]).forEach((d,i)=>{selectedDiscussion(d).forEach(([c])=>add(c,`PD${i+1}`,'Professional Discussion'));(d.voiceSubmissions||[]).forEach(rec=>(rec.confirmedCodes||rec.intendedCodes||[]).forEach(c=>add(c,`PD${i+1}`,'Professional Discussion'))) });
  (sections.witness||[]).forEach((d,i)=>selectedCodes(d).forEach(c=>add(c,`WT${i+1}`,'Witness Testimony')));
  (sections.supporting||[]).forEach((d,i)=>selectedCodes(d).forEach(c=>add(c,`SE${i+1}`,'Supporting Evidence')));
  rplCodes.forEach(code=>add(code,'RPL','Recognition of Prior Learning'));

  const PDF_COLOURS={cover:EVIDENCE_TYPE_STYLES.portfolio.colour,practical:EVIDENCE_TYPE_STYLES.observation.colour,statement:EVIDENCE_TYPE_STYLES.statement.colour,witness:EVIDENCE_TYPE_STYLES.witness.colour,video:EVIDENCE_TYPE_STYLES.video.colour,discussion:EVIDENCE_TYPE_STYLES.discussion.colour,photo:EVIDENCE_TYPE_STYLES.photo.colour,knowledge:EVIDENCE_TYPE_STYLES.knowledge.colour,documents:EVIDENCE_TYPE_STYLES.documents.colour,rpl:EVIDENCE_TYPE_STYLES.rpl.colour};
  const pdfSectionFor=title=>{const t=String(title||'').toLowerCase();if(/assessor observation|practical|verified by someone else/.test(t))return ['Verified by Someone Else',PDF_COLOURS.practical];if(/learner statement|write about it/.test(t))return ['Write About It',PDF_COLOURS.statement];if(/witness|employer/.test(t))return ['Verified by Someone Else',PDF_COLOURS.witness];if(/video|walkthrough|record a video/.test(t))return ['Record a Video',PDF_COLOURS.video];if(/professional discussion|talk about it/.test(t))return ['Talk About It',PDF_COLOURS.discussion];if(/photo|image|take photos/.test(t))return ['Take Photos',PDF_COLOURS.photo];if(/knowledge|question/.test(t))return ['Knowledge Questions',PDF_COLOURS.knowledge];if(/document|certificate|supporting/.test(t))return ['Upload Evidence',PDF_COLOURS.documents];return ['Evidence Portfolio',PDF_COLOURS.cover]};
  const pdfStampFor=title=>{const t=String(title||'').toLowerCase();if(/learning outcome|coverage|evidence pack/.test(t))return ['Evidence','Pack',PDF_COLOURS.cover];if(/assessor observation|practical/.test(t))return ['Assessor','Observation',PDF_COLOURS.practical];if(/learner statement|write about it/.test(t))return ['Learner','Statement',PDF_COLOURS.statement];if(/witness|employer/.test(t))return ['Witness','Testimony',PDF_COLOURS.witness];if(/video|walkthrough|record a video/.test(t))return ['Video','Walkthrough',PDF_COLOURS.video];if(/professional discussion|talk about it/.test(t))return ['Professional','Discussion',PDF_COLOURS.discussion];if(/photo|image|take photos/.test(t))return ['Photographic','Evidence',PDF_COLOURS.photo];if(/knowledge|question/.test(t))return ['Knowledge','Evidence',PDF_COLOURS.knowledge];if(/document|certificate|supporting/.test(t))return ['Supporting','Evidence',PDF_COLOURS.documents];return ['Evidence','Portfolio',PDF_COLOURS.cover]};
  const roundedRect=(x,px,py,w,h,r)=>{const rr=Math.min(r,w/2,h/2);x.beginPath();x.moveTo(px+rr,py);x.lineTo(px+w-rr,py);x.quadraticCurveTo(px+w,py,px+w,py+rr);x.lineTo(px+w,py+h-rr);x.quadraticCurveTo(px+w,py+h,px+w-rr,py+h);x.lineTo(px+rr,py+h);x.quadraticCurveTo(px,py+h,px,py+h-rr);x.lineTo(px,py+rr);x.quadraticCurveTo(px,py,px+rr,py);x.closePath()};
  const drawPdfStamp=(x,title)=>{const [line1,line2,colour]=pdfStampFor(title),size=112,px=W-M-size,py=54;x.save();roundedRect(x,px,py,size,size,14);x.fillStyle='#ffffff';x.fill();x.strokeStyle='#DCE7DA';x.lineWidth=2;x.stroke();roundedRect(x,px+8,py+8,size-16,size-16,10);x.fillStyle=colour;x.globalAlpha=.10;x.fill();x.globalAlpha=1;x.fillStyle=colour;x.textAlign='center';x.textBaseline='middle';x.font='800 15px Arial';x.fillText(clean(line1).toUpperCase(),px+size/2,py+44);x.font='800 14px Arial';x.fillText(clean(line2).toUpperCase(),px+size/2,py+66);x.textAlign='left';x.textBaseline='alphabetic';x.restore()};
  const newPage=(title,subtitle='NVQ Evidence Pack')=>{const c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d'),[sectionName,sectionColour]=pdfSectionFor(title);x._sectionColour=sectionColour;x._sectionName=sectionName;apprenticePdfBackground(x,W,H);x.fillStyle='#79d22f';x.fillRect(M,42,8,52);x.fillStyle=MUTED;x.font='700 12px Arial';x.fillText('APPRENTICE+ · NVQ EVIDENCE PACK',M+24,60);x.fillStyle=INK;x.font='700 30px Arial';fitText(x,clean(title),M+24,91,W-2*M-280,30);drawPdfStamp(x,title);x.fillStyle=MUTED;x.font='500 14px Arial';x.fillText(clean(subtitle),M+24,120);x.fillStyle='#DCE7DA';x.fillRect(M,142,W-2*M,1);pages.push({canvas:c,ctx:x,colour:sectionColour,sectionName});return {c,x,y:166}};
  function fitText(x,text,px,py,max,fontSize){let s=fontSize;x.font=`700 ${s}px Arial`;while(x.measureText(text).width>max&&s>14){s--;x.font=`700 ${s}px Arial`}x.fillText(text,px,py)}
  function label(x,t,px,py){x.fillStyle=MUTED;x.font='700 17px Arial';x.fillText(clean(t).toUpperCase(),px,py)}
  function value(x,t,px,py,size=21,bold=false){x.fillStyle=INK;x.font=`${bold?700:400} ${size}px Arial`;x.fillText(clean(t||'-'),px,py)}
  function wrap(x,text,maxWidth,font='400 21px Arial'){x.font=font;const out=[];for(const p of clean(text||'-').split(/\n/)){const words=p.split(/\s+/);let line='';for(const w of words){const test=line?`${line} ${w}`:w;if(x.measureText(test).width>maxWidth&&line){out.push(line);line=w}else line=test}out.push(line||' ')}return out}
  function sectionHeading(x,t,y){x.fillStyle=INK;x.font='700 24px Arial';x.fillText(clean(t),M,y);x.fillStyle=x._sectionColour||TEAL;x.fillRect(M,y+15,46,2);x.fillStyle='#E4E7E6';x.fillRect(M+58,y+15,W-2*M-58,1);return y+52}
  function meta(p,date,type,attempt,newEvidenceType=type){const {x}=p,style=evidenceTypeStyle(type);x._sectionColour=style.colour;x._sectionName=style.label;x.fillStyle=style.colour;x.fillRect(M,42,8,52);drawPdfStamp(x,type);let y=p.y;x.fillStyle=WHITE;roundedRect(x,M,y,W-2*M,82,18);x.fill();x.strokeStyle='#E1E9E0';x.lineWidth=1;x.stroke();label(x,'Learner',M+18,y+23);value(x,profile.fullName,M+18,y+48,17,true);label(x,'Date',M+520,y+23);value(x,date||'-',M+520,y+48,17,true);label(x,'Evidence',M+750,y+23);value(x,p.x._sectionName||type,M+750,y+48,16,true);if(isPortfolioBuildingEvidence(type)){x.fillStyle='#5F6F70';x.font='700 11px Arial';x.fillText('PORTFOLIO BUILDING · 0.2 GLH',M+18,y+70)}p.y=y+104;return p}
  async function loadImage(src){if(!src)return null;return new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.onerror=()=>r(null);i.src=src})}
  function signature(x,img,y,title){label(x,title,M,y);x.strokeStyle='#b8c4c1';x.lineWidth=2;x.strokeRect(M,y+18,420,122);if(img)try{x.drawImage(img,M+12,y+28,396,98)}catch{}return y+162}
  function drawFixedTextBox(x,labelText,content,px,py,bw,bh){
    x.fillStyle='#ffffff';x.strokeStyle='#DCE7DA';x.lineWidth=1;x.fillRect(px,py,bw,bh);x.strokeRect(px+.5,py+.5,bw-1,bh-1);x.fillStyle=PALE;x.fillRect(px+1,py+1,bw-2,34);x.fillStyle=MUTED;x.font='700 12px Arial';fitText(x,clean(labelText).toUpperCase(),px+12,py+23,bw-24,12);
    const text=clean(content||'-').trim()||'-',innerW=bw-24,innerH=bh-51;let font=15,lines=[];while(font>=10){lines=wrap(x,text,innerW,`400 ${font}px Arial`);const lh=Math.ceil(font*1.32);if(lines.length*lh<=innerH)break;font--}const lh=Math.ceil(font*1.32),maxLines=Math.max(1,Math.floor(innerH/lh));if(lines.length>maxLines){lines=lines.slice(0,maxLines);let last=lines[maxLines-1]||'';while(last.length>3&&x.measureText(last+'…').width>innerW)last=last.slice(0,-1);lines[maxLines-1]=last.replace(/[ ,.;:-]+$/,'')+'…'}x.fillStyle=INK;x.font=`400 ${font}px Arial`;lines.forEach((line,i)=>x.fillText(line,px+12,py+51+i*lh));
  }
  function drawCoverImage(x,img,px,py,bw,bh){x.fillStyle=PALE;x.fillRect(px,py,bw,bh);x.strokeStyle='#DCE7DA';x.lineWidth=1;x.strokeRect(px+.5,py+.5,bw-1,bh-1);if(!img)return;const scale=Math.min(bw/img.width,bh/img.height),iw=img.width*scale,ih=img.height*scale;x.drawImage(img,px+(bw-iw)/2,py+(bh-ih)/2,iw,ih)}
  async function drawFixedPhotoGrid(x,items,{px=M,py,cols=3,rows=1,gap=14,captionH=38}={}){const max=cols*rows,totalW=W-2*M,cellW=(totalW-gap*(cols-1))/cols,cellH=cellW*9/16;for(let i=0;i<max;i++){const col=i%cols,row=Math.floor(i/cols),cx=px+col*(cellW+gap),cy=py+row*(cellH+captionH+gap),item=items[i],img=item?.photo?.data?await loadImage(item.photo.data):null;drawCoverImage(x,img,cx,cy,cellW,cellH);x.fillStyle=MUTED;x.font='700 11px Arial';fitText(x,item?clean(item.code||`Photo ${i+1}`):`PHOTO ${i+1}`,cx,cy+cellH+17,cellW,11);if(item?.caption){x.fillStyle=INK;x.font='400 10px Arial';fitText(x,clean(item.caption),cx,cy+cellH+32,cellW,10)}}return py+rows*(cellH+captionH+gap)-gap}
  function paragraph(x,text,y,maxHeight=360){const sizes=[21,20,19,18,17,16,15];for(const size of sizes){const lh=Math.round(size*1.43),lines=wrap(x,text,W-2*M,`400 ${size}px Arial`);if(lines.length*lh<=maxHeight){x.font=`400 ${size}px Arial`;x.fillStyle=INK;lines.forEach((l,i)=>x.fillText(l,M,y+i*lh));return y+lines.length*lh}}const lines=wrap(x,text,W-2*M,'400 15px Arial'),max=Math.floor(maxHeight/22);x.font='400 15px Arial';x.fillStyle=INK;lines.slice(0,max).forEach((l,i)=>x.fillText(l,M,y+i*22));return y+Math.min(lines.length,max)*22}
  const selectedOutcomeDetails=d=>selectedScores(d).map(([code,text])=>`${code} - ${text}${assignment.criteria?.[code]?`\nCriteria: ${assignment.criteria[code]}`:''}`).join('\n');
  const selectedKsbDetails=d=>selectedCodes(d).map(code=>{const row=(assignment.ksbs||[]).find(([c])=>c===code);return `${code} - ${row?.[1]||''}`}).join('\n');
  const scoredOutcomeDetails=d=>Object.entries(d?.scores||{}).filter(([,score])=>Number(score)>0).map(([code,score])=>`${String(code).replace(/::/g,' practical mark ')}: ${score} / 5`).join('\n');
  const talkAboutOutcomeFileName=(rec,index=0)=>{const codes=rec?.confirmedCodes||rec?.intendedCodes||[],ext=mediaExtension(rec?.type,rec?.name||'','audio',rec?.data);return rec?.name||`Talk About It - ${codes.join('-')||`Discussion ${index+1}`} - ${rec?.id||index+1}${ext}`};
  const recordingOutcomeDetails=(d,labelText)=>{const rows=Object.entries(d?.recordings||{}).filter(([,rec])=>rec?.data).map(([code,rec])=>{const file=rec.name||`${code} - Talk About It recording`;return `${code}: ${labelText}\nAttached audio file: ${file}${rec.duration?`\nDuration: ${rec.duration}`:''}${Number(rec.size)>0?`\nFile size: ${Math.max(1,Math.round(Number(rec.size)/1024))} KB`:''}${rec.date?`\nRecorded: ${rec.date}`:''}${rec.type?`\nMedia format: ${rec.type}`:''}${d.notes?.[code]?`\nFull notes / transcript: ${d.notes[code]}`:''}`});(d?.voiceSubmissions||[]).forEach((rec,i)=>{if(!rec?.data)return;const codes=rec.confirmedCodes||rec.intendedCodes||[];rows.push(`${codes.join(', ')||'Talk About It'}: learner voice discussion\nAttached audio file: ${talkAboutOutcomeFileName(rec,i)}${rec.duration?`\nDuration: ${rec.duration}`:''}${Number(rec.size)>0?`\nFile size: ${Math.max(1,Math.round(Number(rec.size)/1024))} KB`:''}${rec.date?`\nRecorded: ${rec.date}`:''}${rec.type?`\nMedia format: ${rec.type}`:''}`)});return rows.join('\n\n')};
  const observationRecordingOutcomeDetails=d=>Object.entries(d?.observationRecordings||{}).map(([code,media])=>{const parts=[];if(media?.audio?.data)parts.push(`Professional discussion: ${media.audio.name||`${code}-discussion`}${media.audio.duration?` · ${media.audio.duration}`:''}${media.audio.type?` · ${media.audio.type}`:''}`);if(media?.video?.data)parts.push(`Video: ${media.video.name||`${code}-video`}${media.video.duration?` · ${media.video.duration}`:''}${media.video.type?` · ${media.video.type}`:''}`);return parts.length?`${code}: ${parts.join(' | ')}`:''}).filter(Boolean).join('\n');
  const videoRecordingOutcomeDetails=d=>Object.entries(d?.recordings||{}).filter(([,rec])=>isVideoRecording(rec)).map(([code,rec])=>`${code}: Video recording included${rec.duration?` - ${rec.duration}`:''}${Number(rec.size)>0?` - ${Math.max(1,Math.round(Number(rec.size)/1024))} KB`:''}${rec.date?` - recorded ${rec.date}`:''}${rec.type?` - ${rec.type}`:''}`).join('\n\n');
  const fileOutcomeDetails=d=>(d?.files||[]).map((file,i)=>`${i+1}. ${file.evidenceName||file.name||'Evidence file'}${file.name&&file.evidenceName?` - original file: ${file.name}`:''}${file.type?` - ${file.type}`:''}${Number(file.size)>0?` - ${Math.round(Number(file.size)/1024)} KB`:''}`).join('\n');
  const linkedOutcomePhotoFileName=(code,index=0)=>{const item=(assignment.ksbs||[]).find(([itemCode])=>String(itemCode)===String(code)),summary=item?.[1]||'Evidence photograph',suffix=` - Photo ${Number(index)+1}.jpg`,base=`${code} - ${summary}`.replace(/[\\/:*?"<>|]/g,'-').replace(/\s+/g,' ').trim(),limit=Math.max(24,120-suffix.length);return `${base.slice(0,limit).replace(/[ .-]+$/,'')}${suffix}`};
  const linkedNvqRecordPhotoFileName=(d,index=0)=>{const codes=selectedCodes(d);if(codes.length===1)return linkedOutcomePhotoFileName(codes[0],index);const details=codes.map(code=>{const item=(assignment.ksbs||[]).find(([itemCode])=>String(itemCode)===String(code));return `${code} - ${item?.[1]||'Evidence'}`}),suffix=` - Photo ${Number(index)+1}.jpg`,base=(details.length?details.join(' + '):`Unit ${assignment.unit||assignment.n} - ${assignment.title}`).replace(/[\\/:*?"<>|]/g,'-').replace(/\s+/g,' ').trim(),limit=Math.max(24,120-suffix.length);return `${base.slice(0,limit).replace(/[ .-]+$/,'')}${suffix}`};
  const photoOutcomeDetails=d=>{const rows=[];for(const [code,photo] of Object.entries(d?.outcomePhotos||{}))if(photo?.data)rows.push(`${code}: ${linkedOutcomePhotoFileName(code,0)}`);(d?.photos||[]).forEach((photo,i)=>{if(photo?.data)rows.push(`Photo ${i+1}: ${linkedNvqRecordPhotoFileName(d,i)}`)});for(const [code,value] of Object.entries(d?.captions||{}))if(String(value||'').trim())rows.push(`${code}: ${value}`);return rows.join('\n')};
  async function addCompleteNvqRecord({title,attempt,date,type,newEvidenceType=type,fields,signatureTitle='Signature',signatureData=''}){
    const blocks=(fields||[]).map(([heading,content])=>[clean(heading||'Evidence'),clean(content||'').trim()]).filter(([,content])=>content);
    let p,x,y;
    const startPage=continued=>{p=meta(newPage(`${title}${continued?' - Continued':''}`,`Attempt ${attempt}`),date,type,attempt,newEvidenceType);x=p.x;y=sectionHeading(x,continued?'Evidence Details (continued)':'Evidence Details',p.y)};
    const ensure=needed=>{if(y+needed>H-112)startPage(true)};
    const drawBlock=(heading,content)=>{
      ensure(58);x.fillStyle=MUTED;x.font='700 12px Arial';x.fillText(clean(heading).toUpperCase(),M,y);y+=25;
      const lines=wrap(x,content,W-2*M-28,'400 17px Arial');x.fillStyle=INK;x.font='400 17px Arial';
      for(const line of lines){if(y+24>H-112){startPage(true);x.fillStyle=MUTED;x.font='700 12px Arial';x.fillText(`${clean(heading).toUpperCase()} · CONTINUED`,M,y);y+=25;x.fillStyle=INK;x.font='400 17px Arial'}x.fillText(line,M+12,y);y+=23}
      y+=17;x.strokeStyle='#E1E9E0';x.fillRect(M,y,W-2*M,1);y+=20;
    };
    startPage(false);
    if(!blocks.length)drawBlock('Evidence','No additional written evidence was recorded.');
    else blocks.forEach(([heading,content])=>drawBlock(heading,content));
    if(signatureData){if(y+175>H-112)startPage(true);const sig=await loadImage(signatureData);signature(x,sig,y,signatureTitle)}
  }

  async function addCompactNvqPhotoRecord(d,attempt){
    const items=[];for(const [code,photo] of Object.entries(d?.outcomePhotos||{}))if(photo?.data)items.push({code,photo,caption:String(d?.captions?.[code]||'')});(d?.photos||[]).forEach((photo,index)=>{if(photo?.data)items.push({code:`Photo ${index+1}`,photo,caption:String(photo.caption||'')})});
    const p=meta(newPage('Take Photos',`Attempt ${attempt}`),d.date,'Photographic Evidence',attempt),x=p.x,signatureTop=H-238;let y=sectionHeading(x,'Photographic Evidence',p.y),codes=selectedCodes(d),summary=codes.map(code=>{const row=(assignment.ksbs||[]).find(([c])=>c===code);return `${code} - ${row?.[1]||''}`}).join(' | ');drawFixedTextBox(x,'Learning outcomes evidenced',summary||'-',M,y,W-2*M,68);y+=78;if(clean(d?.activity||'').trim()){drawFixedTextBox(x,'Photo notes',d.activity,M,y,W-2*M,58);y+=68}const layout=takePhotosGridLayout(items.length);await drawFixedPhotoGrid(x,items.slice(0,9),{py:y,cols:layout.cols,rows:layout.rows,gap:10,captionH:18});if(d.signature){const sig=await loadImage(d.signature);signature(x,sig,signatureTop,'Learner signature',d.signatureName||profile?.name||'',d.signatureDate||d.date||'')}
  }
  async function addCompactNvqAssessorRecord(d,attempt){
    const items=[];for(const [code,photo] of Object.entries(d?.outcomePhotos||{}))if(photo?.data)items.push({code,photo,caption:String(d?.captions?.[code]||'')});(d?.photos||[]).forEach((photo,index)=>{if(photo?.data)items.push({code:`Photo ${index+1}`,photo,caption:String(photo.caption||'')})});
    const p=meta(newPage('Verified by Someone Else',`Attempt ${attempt}`),d.date,'Assessor Observation',attempt),x=p.x,signatureTop=H-258;let y=sectionHeading(x,'Assessor Observation',p.y),gap=10,bw=(W-2*M-gap)/2;
    drawFixedTextBox(x,'Assessor',d.tutor||'-',M,y,bw,68);drawFixedTextBox(x,'Activity observed',d.activity||'-',M+bw+gap,y,bw,68);y+=78;
    drawFixedTextBox(x,'KSBs met by this evidence',selectedKsbDetails(d)||'-',M,y,bw,78);drawFixedTextBox(x,'Observation / comments',d.feedback||'-',M+bw+gap,y,bw,78);y+=90;
    const discussion=observationRecordingOutcomeDetails(d);if(discussion){drawFixedTextBox(x,'Assessor discussion / recordings',discussion,M,y,W-2*M,58);y+=68}
    await drawFixedPhotoGrid(x,items.slice(0,9),{py:y,cols:3,rows:3,gap:10,captionH:18});
    for(let start=9;start<items.length;start+=9){const cp=meta(newPage(`Verified by Someone Else - Photographs Continued ${Math.floor(start/9)+1}`,`Attempt ${attempt}`),d.date,'Assessor Observation',attempt),cx=cp.x;let cy=sectionHeading(cx,'Assessor Observation Photographs (continued)',cp.y);drawFixedTextBox(cx,'Learning outcomes evidenced',selectedKsbDetails(d)||'-',M,cy,W-2*M,78);cy+=90;await drawFixedPhotoGrid(cx,items.slice(start,start+9),{py:cy,cols:3,rows:3,gap:10,captionH:18})}
    if(d.signature){const sig=await loadImage(d.signature);signature(x,sig,signatureTop,'Assessor signature',d.signatureName||d.tutor||d.assessor||'',d.signatureDate||d.date||'')}
  }
  function drawOutcomeRows(x,outcomes,y,showCriteria=true){for(const [code,text] of outcomes){if(y>H-160)break;x.fillStyle=PALE;x.fillRect(M,y-28,W-2*M,64);x.fillStyle=TEAL;x.font='700 19px Arial';x.fillText(code,M+16,y);drawCriterionRpl(x,code,M+58,y,17);x.fillStyle=INK;x.font='600 17px Arial';fitText(x,clean(text),M+100,y,W-2*M-125,17);if(showCriteria&&assignment.criteria?.[code]){x.fillStyle=MUTED;x.font='400 13px Arial';fitText(x,`Criteria: ${clean(assignment.criteria[code])}`,M+100,y+23,W-2*M-125,13)}y+=76}return y}
  async function photoPages(d,title,attempt,outcomes){const photos=d?.outcomePhotos||{},available=outcomes.filter(([code])=>photos[code]?.data);for(let i=0;i<available.length;i+=4){const batch=available.slice(i,i+4),p=meta(newPage(`${title} - ${course.nvqUnits?'Learning Outcome':'KSB'} Photos`,`${title} | Attempt ${attempt}`),d.date,title,attempt),x=p.x;let y=sectionHeading(x,course.nvqUnits?'Learning Outcome Photographs':'KSB Photographs',p.y),gapX=22,gapY=32,cellW=(W-2*M-gapX)/2,cellH=cellW*9/16;for(let j=0;j<batch.length;j++){const [code]=batch[j],col=j%2,row=Math.floor(j/2),px=M+col*(cellW+gapX),py=y+row*(cellH+gapY+54),img=await loadImage(photos[code].data);x.fillStyle=PALE;x.fillRect(px,py,cellW,cellH);if(img){const scale=Math.max(cellW/img.width,cellH/img.height),iw=img.width*scale,ih=img.height*scale;x.save();x.beginPath();x.rect(px,py,cellW,cellH);x.clip();x.drawImage(img,px+(cellW-iw)/2,py+(cellH-ih)/2,iw,ih);x.restore()}x.fillStyle=TEAL;x.font='700 17px Arial';x.fillText(code,px,py+cellH+24);x.fillStyle=INK;x.font='400 13px Arial';wrap(x,linkedOutcomePhotoFileName(code,0),cellW,'400 13px Arial').slice(0,2).forEach((line,k)=>x.fillText(line,px,py+cellH+43+k*16))}}}

  {const p=newPage(`Evidence Pack ${assignment.n}: ${assignment.title}`,`Unit ${assignment.unit}${assignment.optional?' | Optional unit':''}`),x=p.x;let y=p.y;x.fillStyle=PALE;x.fillRect(M,y,W-2*M,300);y+=46;[['Qualification',course.name],['Unit',assignment.unit],['Learner',profile.fullName],['Employer',profile.employer],['Assessor',profile.mentor]].forEach(([a,b])=>{label(x,a,M+28,y);value(x,b,M+300,y,21,true);y+=46});y=sectionHeading(x,'Learning Outcome Coverage',p.y+350);for(const [code,text] of assignment.ksbs){const count=isCriterionRpl(code)?3:Math.min(3,evidenceMap[code].length),colour=count>=3?GREEN:count?YELLOW:GREY;x.fillStyle=colour;x.fillRect(M,y-28,W-2*M,66);x.fillStyle=TEAL;x.font='700 20px Arial';x.fillText(`${code}  ${count}/3`,M+18,y);drawCriterionRpl(x,code,M+112,y,18);x.fillStyle=INK;x.font='600 16px Arial';fitText(x,clean(text),M+180,y,W-2*M-205,16);y+=78}const met=(assignment.ksbs||[]).reduce((n,[code])=>n+(isCriterionRpl(code)?3:Math.min(3,evidenceMap[code].length)),0),total=(assignment.ksbs||[]).length*3;x.fillStyle=PALE;x.fillRect(M,y,W-2*M,78);label(x,'Overall evidence coverage',M+24,y+30);value(x,`${met} of ${total} requirements met`,M+330,y+31,22,true)}

  // Detailed LO matrix: shows every evidence type and its exact location.
  {let p=meta(newPage('Learning Outcome Evidence Matrix','Automatic mapping'),'-','Learning Outcome Matrix',1),x=p.x,y=sectionHeading(x,'Learning Outcome Mapping',p.y);x.fillStyle=MUTED;x.font='400 17px Arial';x.fillText('References show exactly where each learning outcome is evidenced in this portfolio.',M,y);y+=44;
   const header=()=>{x.fillStyle=TEAL;x.fillRect(M,y-24,W-2*M,38);x.fillStyle=WHITE;x.font='700 15px Arial';x.fillText('LO',M+14,y);x.fillText('Learning outcome',M+82,y);x.textAlign='right';x.fillText('Evidence location',W-M-16,y);x.textAlign='left';y+=54};header();
   for(const [code,text] of assignment.ksbs){const refs=evidenceMap[code]||[],refText=refs.length?refs.map(e=>e.ref).join('  '):'No evidence mapped';x.font='600 15px Arial';const desc=wrap(x,clean(text),W-2*M-390,'600 15px Arial');x.font='700 16px Arial';const refLines=wrap(x,refText,280,'700 16px Arial');const rowH=Math.max(58,Math.max(desc.length*20,refLines.length*21)+26);if(y+rowH>H-115){p=meta(newPage('Learning Outcome Evidence Matrix - Continued','Automatic mapping'),'-','Learning Outcome Matrix',1);x=p.x;y=sectionHeading(x,'Learning Outcome Mapping (continued)',p.y);header()}x.fillStyle=refs.length?PALE:'#fafafa';x.fillRect(M,y-25,W-2*M,rowH-6);x.fillStyle=TEAL;x.font='700 18px Arial';x.fillText(code,M+14,y);drawCriterionRpl(x,code,M+52,y,16);x.fillStyle=INK;x.font='600 15px Arial';desc.forEach((line,i)=>x.fillText(line,M+82,y+i*20));x.textAlign='right';x.fillStyle=refs.length?TEAL:MUTED;x.font='700 16px Arial';refLines.forEach((line,i)=>x.fillText(line,W-M-16,y+i*21));x.textAlign='left';y+=rowH}
   if(y+130>H-110){p=meta(newPage('Learning Outcome Evidence Key','Automatic mapping'),'-','Learning Outcome Matrix',1);x=p.x;y=sectionHeading(x,'Evidence Reference Key',p.y)}else y=sectionHeading(x,'Evidence Reference Key',y+12);const keys=['AO  Verified by Someone Else (Assessor)','LS  Write About It','WT  Verified by Someone Else (Witness)','VW  Record a Video','PD  Talk About It','PE  Take Photos'];keys.forEach((t,i)=>{x.fillStyle=INK;x.font='600 16px Arial';x.fillText(t,M+(i%2)*520,y+Math.floor(i/2)*32)})}

  // Assessor observations preserve the complete narrative; optional photographs follow on a dedicated 3x3 page.
  for(let i=0;i<(sections.practical||[]).length;i++){const d=sections.practical[i],attempt=i+1;await addCompleteNvqRecord({title:'Verified by Someone Else',attempt,date:d.date,type:'Assessor Observation',fields:[['Assessor',d.tutor||d.assessor],['Activity observed',d.activity],['Learning Outcomes met by this evidence',selectedKsbDetails(d)],['Full assessor observation',d.feedback||d.observation||d.observationText],['Assessment summary',d.feedbackSummary],['Areas for improvement',d.feedbackDevelopment],['Additional assessor comments',d.additionalComments],['Assessor discussion / recordings',observationRecordingOutcomeDetails(d)]],signatureTitle:'Assessor signature',signatureData:d.signature});const hasPhotos=Object.values(d?.outcomePhotos||{}).some(photo=>photo?.data)||(d?.photos||[]).some(photo=>photo?.data);if(hasPhotos){await addCompactNvqAssessorRecord({...d,feedback:'',signature:''},attempt)}}
  for(let i=0;i<(sections.photos||[]).length;i++){const d=sections.photos[i],attempt=i+1;await addCompactNvqPhotoRecord(d,attempt)}
  for(let i=0;i<(sections.statement||[]).length;i++){const d=sections.statement[i],attempt=i+1;await addCompleteNvqRecord({title:'Write About It',attempt,date:d.date,type:'Learner Statement',fields:[['Learning Outcomes met by this evidence',selectedOutcomeDetails(d)],['Learner response',d.text||d.statement||d.learnerStatement]],signatureTitle:'Learner signature',signatureData:d.signature})}
  for(let i=0;i<(sections.discussion||[]).length;i++){const d=sections.discussion[i],attempt=i+1,codes=selectedVideoCodes(d);await addCompleteNvqRecord({title:'Record a Video',attempt,date:d.date,type:'Video Walkthrough',newEvidenceType:'discussion',fields:[['Learning Outcomes met by this evidence',codes.map(code=>{const row=(assignment.ksbs||[]).find(([itemCode])=>itemCode===code);return `${code} - ${row?.[1]||'Learning Outcome video'}`}).join('\n')],['Video recordings',videoRecordingOutcomeDetails(d)] ]})}
  for(let i=0;i<(sections.professionalDiscussion||[]).length;i++){const d=sections.professionalDiscussion[i],attempt=i+1;await addCompleteNvqRecord({title:'Talk About It',attempt,date:d.date,type:'Professional Discussion',fields:[['Discussion lead',d.assessor],['Activity discussed',d.activity],['Learning Outcome recordings and notes',recordingOutcomeDetails(d,'Audio recording')]],signatureTitle:'Assessor / discussion lead signature',signatureData:d.signature})}
  for(let i=0;i<(sections.witness||[]).length;i++){const d=sections.witness[i],attempt=i+1,outcomes=selectedScores(d);await addCompleteNvqRecord({title:'Verified by Someone Else',attempt,date:d.date,type:'Witness Testimony',fields:[['Evidence source',d.type],['Name',d.personName],['Role',d.role],['Preferred contact details',d.contactDetails||d.organisation],['Activity witnessed',d.activity],['Learning Outcomes witnessed',selectedOutcomeDetails(d)],['All marks awarded',scoredOutcomeDetails(d)],['Witness Testimony / Additional Comments',d.feedback],['Additional Comments',d.additionalComments],['Attached files',fileOutcomeDetails(d)],['Photographs and captions',photoOutcomeDetails(d)]],signatureTitle:'Witness signature',signatureData:d.signature})}
  for(let i=0;i<(sections.supporting||[]).length;i++){const d=sections.supporting[i],attempt=i+1;await addCompleteNvqRecord({title:'Documents',attempt,date:d.date,type:'Supporting Evidence',fields:[['Evidence tab',d.tab],['Evidence type',d.type],['Name',d.personName],['Role',d.role],['Organisation',d.organisation],['Activity / description',d.activity],['Learning Outcomes met by this evidence',selectedOutcomeDetails(d)],['All marks awarded',scoredOutcomeDetails(d)],['Assessment Summary',d.feedbackSummary],['Areas for Improvement',d.feedbackDevelopment],['Additional Comments',d.feedback],['Attached files',fileOutcomeDetails(d)],['Photographs and captions',photoOutcomeDetails(d)]],signatureTitle:`${d.type||'Supporting evidence'} signature`,signatureData:d.signature})}

  for(let i=0;i<(sections.walkthrough||[]).length;i++){const rec=sections.walkthrough[i],attempt=i+1;await addCompleteNvqRecord({title:'Record a Video',attempt,date:rec.date,type:'Video Walkthrough',newEvidenceType:'walkthrough',fields:[['Learning Outcome met by this evidence',[rec.code,rec.summary].filter(Boolean).join(' - ')],['Video filename',ksbMediaFileName(rec)],['Original filename',rec.name],['Recorded date',rec.date],['Duration',rec.duration],['Media format',rec.type],['File size',Number(rec.size)>0?`${Math.round(Number(rec.size)/1024)} KB`:'']]})}

  for(let i=0;i<(rplEvidence?.entries||[]).length;i++){const d=rplEvidence.entries[i],codes=d.codes||d.selected||[],files=d.files||[];await addCompleteNvqRecord({title:`RPL · Recognition of Prior Learning · RPL${i+1}`,attempt:i+1,date:d.date||d.savedAt,type:'Recognition of Prior Learning',fields:[['Evidence reference',`RPL${i+1}`],['Learning Outcomes / requirements met',codes.map(code=>{const row=(assignment.ksbs||[]).find(([c])=>c===code);return `${code}${row?.[1]?` - ${row[1]}`:''}`}).join('\n')],['Description / supporting statement',d.description||d.statement||d.notes],['Outcome / status',d.outcome||d.status],['Verification',d.verification||d.verifiedBy||d.assessor],['Attached RPL source files',files.map((file,index)=>`${index+1}. ${file.evidenceName||file.name||'RPL source file'}${file.type?` - ${file.type}`:''}`).join('\n')]],signatureTitle:'RPL verifier signature',signatureData:d.signature})}


  if(learningHours){
    const rows=Array.isArray(learningHours.entries)?learningHours.entries:[];let lp,lx,ly,running=0;
    const startLearningPage=continued=>{lp=newPage(`${learningHours.label||'GLH'} Evidence${continued?' - Continued':''}`,'Evidence Pack learning hours');lx=lp.x;ly=sectionHeading(lx,continued?`${learningHours.longLabel||'Guided Learning Hours'} · continued`:`${learningHours.longLabel||'Guided Learning Hours'} · Evidence Pack requirement`,lp.y)};
    const ensureLearning=needed=>{if(ly+needed>H-112)startLearningPage(true)};
    const learningField=(heading,text)=>{const lines=wrap(lx,clean(text||'-'),W-2*M-40,'400 15px Arial');ensureLearning(42);lx.fillStyle=MUTED;lx.font='700 11px Arial';lx.fillText(heading.toUpperCase(),M+16,ly);ly+=20;lx.fillStyle=INK;lx.font='400 15px Arial';for(const line of lines){if(ly+21>H-112){startLearningPage(true);lx.fillStyle=MUTED;lx.font='700 11px Arial';lx.fillText(`${heading.toUpperCase()} · CONTINUED`,M+16,ly);ly+=20;lx.fillStyle=INK;lx.font='400 15px Arial'}lx.fillText(line,M+16,ly);ly+=20}ly+=10};
    startLearningPage(false);
    lx.fillStyle=PALE;lx.fillRect(M,ly,W-2*M,116);lx.fillStyle=INK;lx.font='700 20px Arial';lx.fillText(`Completed: ${Number(learningHours.total||0).toFixed(1)} hrs`,M+22,ly+38);lx.fillText(`Required: ${Number(learningHours.target||0).toFixed(1)} hrs`,M+390,ly+38);lx.fillStyle=learningHours.complete?GREEN:'#b45309';lx.font='800 18px Arial';lx.fillText(learningHours.complete?'Requirement complete':'Requirement not yet complete',M+22,ly+78);ly+=148;
    if(!rows.length){lx.fillStyle=MUTED;lx.font='400 18px Arial';lx.fillText('No GLH entries have been recorded for this Evidence Pack.',M,ly)}
    for(const e of rows){running+=Number(e.hours||0);ensureLearning(90);lx.fillStyle='#FFFFFF';lx.strokeStyle='#DCE7DA';lx.fillRect(M,ly,W-2*M,68);lx.strokeRect(M+.5,ly+.5,W-2*M-1,67);lx.fillStyle=TEAL;lx.font='700 15px Arial';lx.fillText(`${e.date||'-'} · ${Number(e.hours||0).toFixed(1)} hrs · Running total ${running.toFixed(1)} hrs`,M+16,ly+25);lx.fillStyle=INK;lx.font='600 14px Arial';lx.fillText(clean(e.activity||e.place||'Guided learning activity'),M+16,ly+49);ly+=84;learningField('What happened?',e.did||e.activity||e.place||'');learningField('What did you learn?',e.learned||'');lx.strokeStyle='#DCE7DA';lx.fillRect(M,ly,W-2*M,1);ly+=24}
  }

  const total=pages.length;pages.forEach((p,i)=>{const x=p.ctx;x.fillStyle='#DCE7DA';x.fillRect(M,H-72,W-2*M,1);x.fillStyle=MUTED;x.font='500 13px Arial';x.fillText('Apprentice+ · NVQ Evidence Pack',M,H-34);x.textAlign='right';x.fillText(`${i+1} / ${total}`,W-M,H-34);x.textAlign='left'});
  if(assignmentRpl)pages.forEach(p=>drawRecordedPriorLearningStamp(p.ctx));
  const previewPages=pages.map(p=>p.canvas.toDataURL('image/jpeg',0.86)),jpegPages=previewPages.map(dataUrlBytes),pdf=makeImagePDF(jpegPages,W,H),safe=clean(profile.fullName).replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,''),unit=String(assignment.unit||assignment.n).replace(/[^a-z0-9-]+/gi,'-'),pdfName=`${safe||'Learner'}-NVQ-Unit-${unit}-Evidence-Pack.pdf`;
  const walkthroughVideos=[];for(let vi=0;vi<(sections.discussion||[]).length;vi++){const version=sections.discussion[vi];for(const [code,rec] of Object.entries(version.recordings||{}))if(isVideoRecording(rec))walkthroughVideos.push({code,rec,attempt:vi+1,type:'video',newType:'discussion'})}
  for(let vi=0;vi<(sections.walkthrough||[]).length;vi++){const rec=sections.walkthrough[vi];if(rec?.data)walkthroughVideos.push({code:rec.code||`KSB ${vi+1}`,rec,attempt:vi+1,type:'video',newType:'walkthrough'})}
  for(let vi=0;vi<(sections.professionalDiscussion||[]).length;vi++){const version=sections.professionalDiscussion[vi];for(const [code,rec] of Object.entries(version.recordings||{}))if(rec?.data)walkthroughVideos.push({code,rec,attempt:vi+1,type:'audio',newType:'professionalDiscussion'})}
  for(let vi=0;vi<(sections.professionalDiscussion||[]).length;vi++){const version=sections.professionalDiscussion[vi];(version.voiceSubmissions||[]).forEach((rec,ri)=>{if(rec?.data)walkthroughVideos.push({code:(rec.confirmedCodes||rec.intendedCodes||[]).join('-')||`Discussion-${ri+1}`,rec:{...rec,name:talkAboutOutcomeFileName(rec,ri)},attempt:vi+1,type:'audio',newType:'professionalDiscussion'})})}
  const evidenceFiles=[];for(const sectionName of ['witness','supporting'])for(let vi=0;vi<(sections[sectionName]||[]).length;vi++){const version=sections[sectionName][vi];for(const file of version.files||[])if(file?.data)evidenceFiles.push({file,attempt:vi+1,sectionName})}for(let ri=0;ri<(rplEvidence?.entries||[]).length;ri++)for(const file of rplEvidence.entries[ri].files||[])if(file?.data)evidenceFiles.push({file,attempt:ri+1,sectionName:'rpl'});
  if(walkthroughVideos.length||evidenceFiles.length){
    const entries=[{name:pdfName,data:pdf}],used=new Set();
    walkthroughVideos.forEach(({code,rec,attempt,type,newType},i)=>{const mime=String(rec.type||'video/webm'),ext=mime.includes('mp4')?'.mp4':mime.includes('ogg')?'.ogg':mime.startsWith('audio/')?(mime.includes('mp4')?'.m4a':'.webm'):'.webm',label=type==='audio'?'Professional Discussion':'Video Walkthrough',newMark=isNewEvidence(newType,attempt)?'NEW EVIDENCE - ':'',base=safeZipName(`${newMark}Attempt ${attempt} - ${code} ${label}`);let name=`${base}${ext}`;if(used.has(name.toLowerCase()))name=`${base}-${i+1}${ext}`;used.add(name.toLowerCase());entries.push({name:`${label} Recordings/${name}`,data:dataUrlBytes(rec.data)})});
    evidenceFiles.forEach(({file,attempt,sectionName},i)=>{const original=String(file.name||''),dot=original.lastIndexOf('.'),ext=dot>0?original.slice(dot):String(file.type||'').startsWith('image/')?'.jpg':'.bin',newMark=isNewEvidence(sectionName,attempt)?'NEW EVIDENCE - ':'',base=safeZipName(`${newMark}${file.evidenceName||file.name||`Evidence file ${i+1}`}`);let name=`${base}${ext}`;if(used.has(name.toLowerCase()))name=`${base}-${i+1}${ext}`;used.add(name.toLowerCase());entries.push({name:`${sectionName==='rpl'?'RPL Source':sectionName==='witness'?'Witness':'Supporting'} Evidence Files/${name}`,data:dataUrlBytes(file.data)})});
    const packageName=`${safe||'Learner'}-NVQ-Unit-${unit}-Evidence-Package.zip`;
    if(returnPackage)return {assignmentNumber:assignment.n,pdfName,entries,packageName,previewPages};
    await downloadBlob(makeZipBlob(entries),'application/zip',packageName);
  }else{
    const entries=[{name:pdfName,data:pdf}];
    if(returnPackage)return {assignmentNumber:assignment.n,pdfName,entries,packageName:pdfName,previewPages};
    await downloadBlob(pdf,'application/pdf',pdfName);
  }
}

async function downloadBlob(bytes,type,name){
  const blob=bytes instanceof Blob?bytes:new Blob([bytes],{type});
  if(!blob.size)throw new Error('Generated download was empty');
  const url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download=name;a.rel='noopener';a.style.display='none';
  document.body.appendChild(a);
  // Give mobile browsers one frame to register the object URL and anchor.
  await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
  a.click();
  setTimeout(()=>{a.remove();URL.revokeObjectURL(url)},30000);
  return {name,size:blob.size};
}
function safeZipName(name){return String(name||'file').replace(/[\\/:*?"<>|]/g,'-').replace(/^\.+/,'').slice(0,140)||'file'}

function dataUrlBytes(url){
  const value=String(url||''),comma=value.indexOf(',');
  if(comma<0)throw new Error('Evidence media is not stored as a downloadable data URL');
  const payload=value.slice(comma+1),isBase64=/;base64/i.test(value.slice(0,comma));
  if(!isBase64)return new TextEncoder().encode(decodeURIComponent(payload));
  const b=atob(payload),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u
}
function makeZipBlob(entries){
  const enc=new TextEncoder(),parts=[],centrals=[];let offset=0;
  const u16=n=>new Uint8Array([n&255,(n>>>8)&255]),u32=n=>new Uint8Array([n&255,(n>>>8)&255,(n>>>16)&255,(n>>>24)&255]);
  for(const e of entries){
    const name=enc.encode(e.name),data=e.data instanceof Uint8Array?e.data:new Uint8Array(e.data),crc=crc32(data);
    const header=[u32(0x04034b50),u16(20),u16(0),u16(0),u16(0),u16(0),u32(crc),u32(data.length),u32(data.length),u16(name.length),u16(0),name];
    parts.push(...header,data);
    const localLength=header.reduce((n,p)=>n+p.length,0)+data.length;
    centrals.push(u32(0x02014b50),u16(20),u16(20),u16(0),u16(0),u16(0),u16(0),u32(crc),u32(data.length),u32(data.length),u16(name.length),u16(0),u16(0),u16(0),u16(0),u32(0),u32(offset),name);
    offset+=localLength;
  }
  const centralSize=centrals.reduce((n,p)=>n+p.length,0);
  parts.push(...centrals,u32(0x06054b50),u16(0),u16(0),u16(entries.length),u16(entries.length),u32(centralSize),u32(offset),u16(0));
  // Blob keeps the media buffers as separate parts and avoids allocating several full copies of a large package.
  return new Blob(parts,{type:'application/zip'});
}
function crc32(data){let c=0xffffffff;for(const b of data){c^=b;for(let k=0;k<8;k++)c=(c>>>1)^((c&1)?0xedb88320:0)}return(c^0xffffffff)>>>0}

function makeImagePDF(images,width,height,links=[]){
  const enc=new TextEncoder(),parts=[],offsets=[0];let pos=0;const add=v=>{const u=typeof v==='string'?enc.encode(v):v;parts.push(u);pos+=u.length};
  const pdfEscape=value=>String(value||'').replace(/\\/g,'/').replace(/([()])/g,'\\$1');
  const pageLinks=images.map((_,i)=>(links||[]).filter(link=>Number(link.page||0)===i));
  const annotationCount=pageLinks.reduce((n,list)=>n+list.length,0),baseCount=2+images.length*3,count=baseCount+annotationCount;
  add('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n');
  function obj(n,head,stream){offsets[n]=pos;add(`${n} 0 obj\n${head}`);if(stream){add(`\nstream\n`);add(stream);add(`\nendstream`)}add(`\nendobj\n`)}
  obj(1,'<< /Type /Catalog /Pages 2 0 R >>');
  const pageIds=images.map((_,i)=>3+i*3+2);obj(2,`<< /Type /Pages /Count ${images.length} /Kids [${pageIds.map(n=>`${n} 0 R`).join(' ')}] >>`);
  let nextAnnotation=baseCount+1;
  images.forEach((img,i)=>{
    const imageId=3+i*3,contentId=imageId+1,pageId=imageId+2,annots=[];
    for(const link of pageLinks[i]){
      const annotationId=nextAnnotation++,sx=595.28/width,sy=841.89/height,x1=Math.max(0,Number(link.x||0)*sx),x2=Math.min(595.28,Number(link.x2||link.x||0)*sx),y1=Math.max(0,841.89-Number(link.y2||link.y||0)*sy),y2=Math.min(841.89,841.89-Number(link.y||0)*sy),target=pdfEscape(link.target);
      annots.push(`${annotationId} 0 R`);obj(annotationId,`<< /Type /Annot /Subtype /Link /Rect [${x1.toFixed(2)} ${y1.toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}] /Border [0 0 0] /A << /S /URI /URI (${target}) >> >>`);
    }
    obj(imageId,`<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${img.length} >>`,img);
    const stream=enc.encode('q\n595.28 0 0 841.89 0 0 cm\n/Im0 Do\nQ');obj(contentId,`<< /Length ${stream.length} >>`,stream);
    obj(pageId,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im0 ${imageId} 0 R >> >> /Contents ${contentId} 0 R${annots.length?` /Annots [${annots.join(' ')}]`:''} >>`)
  });
  const xref=pos;add(`xref\n0 ${count+1}\n0000000000 65535 f \n`);for(let i=1;i<=count;i++)add(`${String(offsets[i]).padStart(10,'0')} 00000 n \n`);add(`trailer\n<< /Size ${count+1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`);const total=parts.reduce((s,p)=>s+p.length,0),out=new Uint8Array(total);let at=0;parts.forEach(p=>{out.set(p,at);at+=p.length});return out;
}

if(typeof module!=='undefined'&&module.exports)module.exports={EVIDENCE_TYPE_STYLES,evidenceTypeStyle,takePhotosGridLayout,compileUnitPack,compileFullPortfolioFromUnitPacks,buildKsbMatrixRows};
