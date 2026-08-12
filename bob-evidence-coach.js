(() => {
  'use strict';

  const VERSION='0.11.0';
  const session={mode:null,assignment:null,codes:[],step:0,answers:[]};
  const normalise=s=>String(s||'').toLowerCase().replace(/[’']/g,"'").replace(/\s+/g,' ').trim();
  const snapshot=()=>{try{return window.BobCourseBrain?.snapshot?.()||null}catch{return null}};
  const activeAssignment=()=>Number(snapshot()?.memory?.activeAssignment)||null;
  const appAssignment=n=>{try{return typeof assignment==='function'?assignment(n):null}catch{return null}};
  const isNvq=()=>{try{return !!COURSE?.nvqUnits}catch{return false}};
  const shortName=a=>a?.unit?`Unit ${a.unit}`:`EP${a?.n||''}`;

  function recentContext(){return window.BobBrainBridge?.history?.().then(rows=>(rows||[]).filter(x=>x.type==='user'&&x.text&&x.kind!=='photo').slice(-8).map(x=>x.text).join(' ')).catch(()=> '')}
  function relevantCodes(a,context,mode){
    if(!a)return [];
    try{const matches=window.BobLanguageBrain?.outcomeMatches?.(a.n,context)||[];if(matches.length)return matches.slice(0,2).map(x=>String(x.code))}catch{}
    const pairs=a.ksbs||[];
    if(isNvq())return pairs.slice(0,2).map(x=>String(x[0]));
    const pattern=mode==='written'?/^K/i:mode==='video'?/^[SB]/i:/^[KB]/i;
    const preferred=pairs.filter(([code])=>pattern.test(String(code)));
    return (preferred.length?preferred:pairs).slice(0,2).map(x=>String(x[0]));
  }
  function descriptions(a,codes){const set=new Set((codes||[]).map(String));return (a?.ksbs||[]).filter(([c])=>set.has(String(c))).map(([c,t])=>({code:String(c),text:String(t||'')}))}
  function focusText(a,codes){const items=descriptions(a,codes);return items.map(x=>`${x.code} — ${x.text}`).join(' ')}

  function prompts(mode,a,codes){
    const focus=focusText(a,codes);
    const topic=focus||a?.title||'the work you are doing';
    if(mode==='written')return [
      `In your own words, what job were you doing and what part of it were you working on? Keep it relevant to ${topic}.`,
      'What did you personally do? Explain the main steps in the order you did them.',
      'Why did you use that method, material, tool or piece of information?',
      'What safety and quality checks did you make, and how did you know the work was right?'
    ];
    if(mode==='audio')return [
      `Start by saying what job you were doing and what part you were responsible for. Try to cover ${topic} naturally.`,
      'Then explain what you actually did and why you did it that way.',
      'Talk through the materials, tools, drawings or instructions you used.',
      'Finish by explaining the safety and quality checks you made and what the result was.'
    ];
    return [
      `Start with a wide view of the job and say what you are working on. We are trying to show ${topic}.`,
      'Move closer and show the part you are actually working on while you explain what you are doing.',
      'Show any important materials, components, tools or hidden work before it gets covered up.',
      'Finish by showing your checks — for example level, plumb, gauge, bond, finish or safety checks — and explain the result.'
    ];
  }

  function correction(text){
    let out=String(text||'').trim();
    const fixes=[[/\bi\b/g,'I'],[/\bim\b/gi,"I'm"],[/\bive\b/gi,"I've"],[/\bdont\b/gi,"don't"],[/\bcant\b/gi,"can't"],[/\bdidnt\b/gi,"didn't"],[/\bwasnt\b/gi,"wasn't"],[/\bthier\b/gi,'their'],[/\bteh\b/gi,'the'],[/\brecieve\b/gi,'receive'],[/\bseperate\b/gi,'separate'],[/\bbecuase\b/gi,'because']];
    fixes.forEach(([re,to])=>{out=out.replace(re,to)});
    if(out&&/^[a-z]/.test(out))out=out[0].toUpperCase()+out.slice(1);
    if(out&&!/[.!?]$/.test(out))out+='.';
    return out;
  }
  function review(text){const original=String(text||'').trim();if(!original)return 'Write your answer first and I can check it.';const improved=correction(original);if(improved===original)return 'That reads clearly. I would keep it in your own words.';return `Your meaning is clear. I would only tidy the spelling and grammar to: “${improved}”\n\nI haven't added any technical content that you didn't write.`}
  function reset(){session.mode=null;session.assignment=null;session.codes=[];session.step=0;session.answers=[]}

  async function begin(mode){
    const n=activeAssignment(),a=appAssignment(n);
    if(!n||!a)return 'Tell me what you are working on first so I know which unit or evidence pack this belongs to.';
    const context=await recentContext();session.mode=mode;session.assignment=n;session.codes=relevantCodes(a,context,mode);session.step=0;session.answers=[];
    const p=prompts(mode,a,session.codes);
    const intro=mode==='written'
      ?`We'll build a learner-written statement for ${shortName(a)}. I won't write it for you — I'll ask one question at a time and keep your answers as your own words.`
      :mode==='audio'
        ?`Let's plan your audio evidence for ${shortName(a)}. I'll give you one talking point at a time.`
        :`Let's plan your video evidence for ${shortName(a)}. I'll give you one thing to show or explain at a time.`;
    return `${intro}\n\n1/4 — ${p[0]}`;
  }

  async function saveWritten(){
    const a=appAssignment(session.assignment);if(!a||!session.answers.length)return 'There is nothing to save yet.';
    try{const sd=sectionData(a.n,'statement');sd.draft=sd.draft||blankSection('statement');const d=sd.draft;d.text=session.answers.map(x=>x.trim()).filter(Boolean).join('\n\n');d.ksbEvidence=d.ksbEvidence||[];session.codes.forEach(code=>{if(!d.ksbEvidence.includes(code))d.ksbEvidence.push(code)});await commit(a.n,'statement',sd);if(typeof saveData==='function')await saveData();reset();return `Saved as a draft in ${shortName(a)}. I only saved the words you wrote. I haven't completed or submitted it for you.`}catch(error){console.error('Bob statement save failed',error);return 'I could not save that draft properly. Your answers are still in this chat.'}
  }

  function openEvidence(mode,n){
    try{window.BobFoundation?.close?.();state.assignment=n;state.view='section';state.section=mode==='audio'?'discussion':mode==='video'?'video':'statement';render();return true}catch(error){console.warn('Bob could not open evidence screen',error);return false}
  }

  async function handle(message){
    if(!session.mode)return null;
    const q=normalise(message),a=appAssignment(session.assignment);if(!a){reset();return null}
    if(/\b(cancel|stop|never mind|nevermind)\b/.test(q)){reset();return 'No problem — I have stopped that evidence guide.'}
    if(session.mode==='written'&&/\b(check|spelling|grammar|tidy|better wording|improve wording)\b/.test(q)){return review(session.answers.at(-1)||message.replace(/^(check|check this)\s*/i,''))}
    if(session.mode==='written'&&/\b(save|save draft|save it|finished|done)\b/.test(q)&&session.answers.length>=2)return saveWritten();
    if((session.mode==='audio'||session.mode==='video')&&/\b(start recording|record now|open recorder|ready to record|ready)\b/.test(q)){
      const mode=session.mode,n=session.assignment;reset();return openEvidence(mode,n)?`I've opened the ${mode==='audio'?'audio':'video'} evidence screen. Use the four points we just covered as your guide.`:`I couldn't open the recorder just then.`;
    }
    const p=prompts(session.mode,a,session.codes);
    if(session.mode==='written')session.answers.push(String(message||'').trim());
    session.step++;
    if(session.step<p.length)return `${session.step+1}/4 — ${p[session.step]}`;
    if(session.mode==='written')return 'That gives you a learner-written draft. Say “check it” if you want spelling and grammar help, or “save draft” when you want me to place your own words into the correct statement draft.';
    return `You have all four talking points. Say “start recording” when you're ready and I'll open the ${session.mode==='audio'?'audio':'video'} evidence screen.`;
  }

  function intent(message){const q=normalise(message);if(/\b(written statement|write about it|written evidence|statement help)\b/.test(q))return 'written';if(/\b(audio evidence|voice recording|talk about it|spoken evidence)\b/.test(q))return 'audio';if(/\b(video evidence|record a video|video walkthrough|video help)\b/.test(q))return 'video';return null}

  function showMenu(){
    let menu=document.getElementById('bobEvidenceCoachMenu');
    if(menu){menu.remove();return}
    const composer=document.querySelector('#bobChat .bob-composer');if(!composer)return;
    if(!document.getElementById('bobEvidenceCoachStyle')){const style=document.createElement('style');style.id='bobEvidenceCoachStyle';style.textContent='.bob-evidence-coach-menu{position:absolute;left:10px;bottom:66px;z-index:6;display:flex;gap:6px;padding:8px;background:#fff;border:1px solid #dce5e1;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,.14)}.bob-evidence-coach-menu button{border:0;border-radius:10px;padding:9px 11px;background:#eef3f1;color:#183c37;font-weight:700;cursor:pointer}';document.head.appendChild(style)}
    composer.style.position='relative';menu=document.createElement('div');menu.id='bobEvidenceCoachMenu';menu.className='bob-evidence-coach-menu';menu.innerHTML='<button type="button" data-mode="written">Written</button><button type="button" data-mode="audio">Audio</button><button type="button" data-mode="video">Video</button>';composer.appendChild(menu);
    menu.addEventListener('click',async event=>{const mode=event.target?.dataset?.mode;if(!mode)return;menu.remove();const reply=await begin(mode);await window.BobBrainBridge?.addExternal?.(reply,'bot')},{once:false});
  }

  window.BobEvidenceCoach={version:VERSION,begin,handle,intent,showMenu,reset,session:()=>({...session})};
})();