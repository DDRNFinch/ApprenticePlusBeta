'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const source=fs.readFileSync(require.resolve('../review-transfer.js'),'utf8');
test('Reviews active page exposes exactly the four learner actions and no old management UI',()=>{
 const screen=source.slice(source.indexOf('function reviewScreen'),source.indexOf('function progressMetric'));
 for(const label of ['SHOW QR','SHARE FILE','SCAN QR','OPEN FILE'])assert.match(screen,new RegExp(label));
 for(const stale of ['Live targets','Start review meeting','Mark complete'])assert.doesNotMatch(screen,new RegExp(stale,'i'));
 assert.equal(screen.includes('Reviews+'),false);
 assert.match(screen,/SHARE MY PROGRESS/);assert.match(screen,/RECEIVED A REVIEW\?/);assert.match(screen,/REVIEW HISTORY/);
});
test('all four controls resolve to immediate V2 handlers',()=>{
 assert.match(source,/data-v2-show-qr[^\n]+showSnapshotQr/);assert.match(source,/data-v2-share[^\n]+shareSnapshot/);
 assert.match(source,/data-v2-scan[^\n]+showScanner/);assert.match(source,/data-v2-import[^\n]+receive/);
 assert.match(source,/function snapshot\(\)\{const value=snapshotFromApp\(\);validate\(value,TYPE_SNAPSHOT\)/);
});
test('review receipt, detail, history and Home navigation are wired',()=>{
 assert.match(source,/REVIEW RECEIVED/);assert.match(source,/VIEW MY TARGETS/);assert.match(source,/state\.view='home'/);
 assert.match(source,/function showDetail/);assert.match(source,/TARGETS SET AT THIS REVIEW/);assert.match(source,/HOW YOU'RE DOING/);
 assert.match(source,/function latest\(\)\{return history\(\)\.filter\(x=>!x\.legacy/);
});
