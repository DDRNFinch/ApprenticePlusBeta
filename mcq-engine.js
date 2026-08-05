'use strict';

(function(global){
 function normalise(value){
  return String(value||'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
 }
 function words(value){return normalise(value).split(' ').filter(Boolean)}
 function similarity(a,b){
  const aa=new Set(words(a).filter(x=>x.length>2)),bb=new Set(words(b).filter(x=>x.length>2));
  if(!aa.size||!bb.size)return 0;
  let common=0;aa.forEach(x=>{if(bb.has(x))common++});
  return common/Math.max(aa.size,bb.size);
 }

 // Only retain the structural checks required for the assessment screen to work.
 function validateQuestion(q){
  const issues=[];
  if(!q||typeof q!=='object')return {valid:false,issues:['Question must be an object.']};
  if(!String(q.question||'').trim())issues.push('Question text is required.');
  if(!Array.isArray(q.options)||q.options.length!==4)issues.push('Exactly four answer options are required.');
  else if(q.options.some(option=>!String(option||'').trim()))issues.push('All four answer options must contain text.');
  if(!Number.isInteger(q.correct)||q.correct<0||q.correct>3)issues.push('One correct answer must be selected.');
  return {valid:issues.length===0,issues};
 }
 function validateBank(questions){
  const issues=[];
  (questions||[]).forEach((q,index)=>{
   validateQuestion(q).issues.forEach(issue=>issues.push(`Question ${index+1}: ${issue}`));
  });
  return {valid:issues.length===0,issues,count:(questions||[]).length};
 }
 function shuffle(items){
  const a=[...items];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}
  return a;
 }
 function distribute(items,key){
  const groups=new Map();items.forEach(item=>{const k=key(item);if(!groups.has(k))groups.set(k,[]);groups.get(k).push(item)});
  const output=[];let active=[...groups.values()].map(shuffle);
  while(active.length){const next=[];active.forEach(group=>{if(group.length)output.push(group.shift());if(group.length)next.push(group)});active=next}
  return output;
 }
 function randomiseOptions(question){
  const indexed=question.options.map((text,index)=>({text,isCorrect:index===question.correct}));
  const shuffled=shuffle(indexed);
  return {...question,options:shuffled.map(x=>x.text),correct:shuffled.findIndex(x=>x.isCorrect)};
 }
 function assembleAssessment({questions,count=15,allowedKsbs=[],recentIds=[]}){
  const allowed=new Set(allowedKsbs),recent=new Set(recentIds);
  const usable=(questions||[]).filter(q=>validateQuestion(q).valid&&(!allowed.size||allowed.has(q.ksb)));
  if(usable.length<count)throw new Error(`This assignment needs at least ${count} usable questions; ${usable.length} are available.`);
  const fresh=usable.filter(q=>!recent.has(q.id));
  const source=fresh.length>=count?fresh:usable;
  const byKsb=distribute(source,q=>q.ksb||'unmapped');
  const selected=[],ids=new Set();
  for(const q of byKsb){
   if(selected.length>=count)break;
   const id=q.id||q;
   if(ids.has(id))continue;
   selected.push(q);ids.add(id);
  }
  if(selected.length<count){
   for(const q of shuffle(source)){
    if(selected.length>=count)break;
    const id=q.id||q;
    if(ids.has(id))continue;
    selected.push(q);ids.add(id);
   }
  }
  if(selected.length<count)throw new Error(`Unable to assemble ${count} usable questions.`);
  return shuffle(selected).map(randomiseOptions);
 }

 global.MCQEngine=Object.freeze({
  version:'2.0.0-phase3f-validation-removed',
  validateQuestion,
  validateBank,
  assembleAssessment,
  normalise,
  similarity
 });
})(window);
