'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const app=fs.readFileSync('app.js','utf8');
const pdf=fs.readFileSync('pdf-generator.js','utf8');
const index=fs.readFileSync('index.html','utf8');
const worker=fs.readFileSync('service-worker.js','utf8');
const notes=JSON.parse(fs.readFileSync('release-notes.json','utf8'));

const assignmentUi=app.slice(app.indexOf('function renderAssignment(){'),app.indexOf('function outcomePhotoControl'));
assert.doesNotMatch(assignmentUi,/Verified by Someone Else/);
assert.match(assignmentUi,/Witness and Uploads/);

const chooser=app.slice(app.indexOf('function showVerifiedEvidenceChooser'),app.indexOf('function savedEvidenceTypeLabel'));
assert.match(chooser,/data-verified-section="witness"[\s\S]*<strong>Witness Testimony<\/strong>/);
assert.match(chooser,/data-verified-section="rpl"[\s\S]*<strong>Uploads<\/strong>/);
assert.doesNotMatch(chooser,/<strong>RPL<\/strong>/);
assert.match(chooser,/showWitnessTestimonyWarning\(close\)/);
assert.match(chooser,/must be completed by an employer, supervisor or another suitable witness who has directly observed your work/);
assert.match(chooser,/It must not be completed by you/);
assert.match(chooser,/id="continueWitnessTestimony">Continue/);
assert.match(chooser,/state\.section='witness';state\.view='section'/);

assert.match(app,/const RPL_EVIDENCE_KEY=n=>`\$\{COURSE\.id\}:\$\{n\}:rplEvidence:v1`/);
assert.match(app,/const INDIVIDUAL_RPL_KEY=\(\)=>`\$\{COURSE\.id\}:individualRpl:v1`/);
assert.match(app,/function renderWitnessPage|function witnessPage/);
assert.deepEqual(Object.keys(require('../pdf-generator.js').EVIDENCE_TAXONOMY),['LRP','LRS','LRV','LRA','DOC','WTS','RPL','OTJ','GLH']);
for(const code of ['WOS','WOV','WOA','COS','COV','COA']) assert.equal(pdf.match(new RegExp(`${code}:'`,'g'))?.length||0,0);
for(const term of ['Assessor Observation','Tutor Observation']) assert.doesNotMatch(chooser,new RegExp(term));
assert.match(app,/generateEvidencePackPDF/);
assert.match(app,/function nvqLiveCriterionMatrix|function renderKsbMatrix/);
assert.match(fs.readFileSync('review-transfer.js','utf8'),/function makeSnapshot/);

assert.equal(notes.latest,'V2.91');
assert.equal(notes.releases[0].version,'V2.91');
assert.match(worker,/CURRENT_VERSION='V2\.91'/);
assert.match(worker,/apprentice-plus-v2-91-witness-and-uploads/);
for(const asset of ['styles.css?v=2.91','pdf-generator.js?v=2.91','app.js?v=2.91']){
 assert.match(index,new RegExp(asset.replace(/[.?]/g,'\\$&')));
 assert.match(worker,new RegExp(asset.replace(/[.?]/g,'\\$&')));
}
console.log('V2.91 Witness and Uploads terminology, integrity warning, compatibility and cache regressions: PASS');
