'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');

const app=fs.readFileSync(require.resolve('../app.js'),'utf8');
const index=fs.readFileSync(require.resolve('../index.html'),'utf8');
const styles=fs.readFileSync(require.resolve('../styles.css'),'utf8');
const worker=fs.readFileSync(require.resolve('../service-worker.js'),'utf8');

function functionSource(name,next='function '){
 const start=app.indexOf(`function ${name}`);
 assert.notEqual(start,-1,`${name} must exist`);
 const end=app.indexOf(`\n${next}`,start+10);
 return app.slice(start,end<0?app.length:end);
}

test('every rendered app page receives the current information control',()=>{
 const shell=functionSource('shell','function learningHoursMateName');
 const attach=functionSource('attachPageHelp','const HELP_TOUR_STEPS');
 assert.match(shell,/id="pageHelpButton"/);
 assert.match(app,/info:'<circle/);
 assert.match(attach,/pageHelpButton\.innerHTML=appIcon\('info'\)/);
 assert.match(attach,/Information about this page/);
 assert.match(styles,/\.page-help-button\{[\s\S]*width:42px!important[\s\S]*border-radius:14px!important/);
});

test('final evidence saves return to the evidence pack and show a three-second confirmation',()=>{
 assert.match(app,/function showEvidenceSavedConfirmation\(\)\{toast\('Evidence saved to your portfolio',3000,'portfolio'\)\}/);
 for(const name of ['saveWalkthroughOverall','submitSection']){
  const source=functionSource(name);
  assert.match(source,/state\.view='assignment'/,`${name} must return to the evidence pack`);
  assert.match(source,/showEvidenceSavedConfirmation\(\)/,`${name} must show the portfolio confirmation`);
 }
 const rpl=app.slice(app.indexOf("const save=document.getElementById('saveRplEvidence')"),app.indexOf('\n}',app.indexOf("const save=document.getElementById('saveRplEvidence')")));
 assert.match(rpl,/state\.view='assignment'/);
 assert.match(rpl,/showEvidenceSavedConfirmation\(\)/);
});

test('iPhone configuration uses safe areas, non-zooming fields and Apple media formats first',()=>{
 for(const name of ['apple-mobile-web-app-capable','apple-mobile-web-app-status-bar-style','apple-mobile-web-app-title'])assert.match(index,new RegExp(name));
 assert.match(index,/classList\.toggle\('ios-device', appleMobile\)/);
 assert.match(styles,/html\.ios-device :where\(input,textarea,select\)\{font-size:16px!important\}/);
 assert.match(styles,/env\(safe-area-inset-bottom\)/);
 assert.match(functionSource('preferredAudioMime'),/apple\?\['audio\/mp4'/);
 assert.match(functionSource('preferredWalkthroughMime'),/apple\?\['video\/mp4/);
 assert.match(worker,/apprentice-plus-v2-91-mobile-parity-014/);
});
