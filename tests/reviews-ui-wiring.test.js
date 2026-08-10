'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const appSource=fs.readFileSync(require.resolve('../app.js'),'utf8');
const transferSource=fs.readFileSync(require.resolve('../review-transfer.js'),'utf8');
const indexSource=fs.readFileSync(require.resolve('../index.html'),'utf8');
const workerSource=fs.readFileSync(require.resolve('../service-worker.js'),'utf8');

function body(source,name,next='function '){
 const start=source.indexOf(`function ${name}`);assert.notEqual(start,-1,`${name} must exist`);
 const end=source.indexOf(`\n ${next}`,start+10);
 return source.slice(start,end<0?source.length:end);
}

test('the real Reviews navigation route mounts the simple Reviews renderer',()=>{
 assert.match(appSource,/openReviews['"]\)\.onclick=\(\)=>\{state\.view='reviewmate'/);
 assert.match(appSource,/state\.view==='reviewmate'\)renderReviews\(\)/);
 const active=appSource.slice(appSource.indexOf('function renderReviews(){'),appSource.indexOf('\nfunction renderRemindMate'));
 assert.match(active,/ApprenticeReviewTransfer/);
 assert.match(active,/mountReviews/);
 assert.doesNotMatch(active,/renderReviewsPlus\(|reviewMateProgressPanel\(|reviewMateTabs\(/);
 const mount=transferSource.slice(transferSource.indexOf('function mountReviews'),transferSource.indexOf('function mountHome'));
 assert.match(mount,/reviewScreen\(rows\)/);
});

test('the renderer mounted by the route has all learner actions and no legacy labels',()=>{
 const screen=transferSource.slice(transferSource.indexOf('function reviewScreen'),transferSource.indexOf('function progressMetric'));
 for(const label of ['SHARE MY PROGRESS','SHOW QR','SHARE FILE','RECEIVED A REVIEW?','SCAN QR','OPEN FILE','REVIEW HISTORY'])assert.match(screen,new RegExp(label.replace(/[?]/g,'\\?'),'i'));
 assert.doesNotMatch(screen,/Live Targets/i);
 assert.equal(screen.includes('Reviews+'),false);
});

test('all four controls on the mounted renderer resolve to validated V2 handlers',()=>{
 assert.match(transferSource,/data-v2-show-qr[^\n]+showSnapshotQr/);
 assert.match(transferSource,/data-v2-share[^\n]+shareSnapshot/);
 assert.match(transferSource,/data-v2-scan[^\n]+showScanner/);
 assert.match(transferSource,/data-v2-import[^\n]+receive/);
 assert.match(transferSource,/function snapshot\(\)\{const value=snapshotFromApp\(\);validate\(value,TYPE_SNAPSHOT\)/);
 assert.match(transferSource,/TYPE_SNAPSHOT='progress-snapshot',TYPE_SUMMARY='learner-review-summary'/);
});

test('installed PWA references the repaired assets under a fresh cache',()=>{
 for(const asset of ['app.js?v=2.87','review-transfer.js?v=2.2','styles.css?v=2.87']){
  assert.match(indexSource,new RegExp(asset.replace(/[.?]/g,'\\$&')));
  assert.match(workerSource,new RegExp(asset.replace(/[.?]/g,'\\$&')));
 }
 assert.match(workerSource,/apprentice-plus-v2-87-reviews-route/);
 assert.doesNotMatch(workerSource,/apprentice-plus-v2-85|apprentice-plus-v2-86/);
});
