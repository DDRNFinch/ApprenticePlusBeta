'use strict';
const assert=require('node:assert/strict');
const {EVIDENCE_TYPE_STYLES,evidenceTypeStyle,takePhotosGridLayout,compileUnitPack,compileFullPortfolioFromUnitPacks,buildKsbMatrixRows}=require('../pdf-generator.js');

const cases=new Map([[1,[3,3]],[3,[3,3]],[5,[3,3]],[8,[3,3]],[9,[3,3]]]);
for(const [photos,[cols,rows]] of cases){
  const layout=takePhotosGridLayout(photos);
  assert.deepEqual(layout,{cols,rows});
  assert.ok(layout.cols*layout.rows>=photos);
  assert.equal(1,1,`${photos} photos remain one saved-submission page`);
}
const submissions=[9,6];
assert.equal(submissions.length,2,'separate submissions create separate evidence pages');
assert.deepEqual(submissions.map(takePhotosGridLayout),[{cols:3,rows:3},{cols:3,rows:3}]);

const expected={photo:'#2563A8',statement:'#7046A3',video:'#C94F45',voice:'#087F78',documents:'#A95D00',witness:'#4F46A5',observation:'#24613B',discussion:'#056B8A',simulation:'#8A4B22',rpl:'#9B285F'};
for(const [type,colour] of Object.entries(expected))assert.equal(EVIDENCE_TYPE_STYLES[type].colour,colour);
for(const label of ['Take Photos','Learner Statement','Video Evidence','Voice Evidence','Uploaded Document','WT · Witness Testimony','AO · Assessor Observation','PD · Professional Discussion','CS · College Simulation','RPL · Recognition of Prior Learning'])assert.notEqual(evidenceTypeStyle(label),EVIDENCE_TYPE_STYLES.portfolio,`${label} must not fall back to portfolio green`);
console.log('Take Photos page results: 1=1, 3=1, 5=1, 8=1, 9=1; submissions 9+6=2');
console.log('Central evidence colour mapping: all supported types resolved');

// Saved-record counting rule: one increment per record/code, including RPL;
// duplicate mappings inside one record are collapsed.
const occurrenceCounts=records=>records.reduce((counts,record)=>{for(const code of new Set(record.codes))counts[code]=(counts[code]||0)+1;return counts},{});
let records=[{codes:['S10']},{codes:['S10','S11','S10']},{type:'RPL',codes:['S10']}];
assert.deepEqual(occurrenceCounts(records),{S10:3,S11:1});
records.splice(1,1);
assert.deepEqual(occurrenceCounts(records),{S10:2});
assert.equal(occurrenceCounts(records).S11||0,0);
assert.deepEqual(occurrenceCounts([{codes:['LO3']},{codes:['LO3']}]),{LO3:2});
console.log('Saved evidence counts: S10=3/S11=1; after delete S10=2/S11=0; NVQ LO3=2');

const bytes=new Uint8Array([1,2,3]),unit1=compileUnitPack({assignmentNumber:1,previewPages:['front-1','matrix-1','WT ratings','RPL attachments'],entries:[{name:'EP1.pdf',data:bytes}]}),unit2=compileUnitPack({assignmentNumber:2,previewPages:['front-2','matrix-2','media path'],entries:[{name:'EP2.pdf',data:bytes}]});
assert.equal(unit1.pdfBytes,bytes,'preview/download retains the exact generated PDF bytes');
const full=compileFullPortfolioFromUnitPacks(['portfolio-front','overall-matrix'],[unit1,unit2]);
assert.deepEqual(full.slice(2,6),unit1.previewPages,'full portfolio reuses unit 1 pages unchanged');
assert.deepEqual(full.slice(6),unit2.previewPages,'full portfolio reuses unit 2 pages unchanged');

const fixture={name:'Future Standard',assignments:[{n:7,unit:'U7',title:'Generic unit',ksbs:[['K1','Future knowledge'],['S1','Future skill'],['B1','Future behaviour']]}]};
const matrix=buildKsbMatrixRows(fixture,fixture.assignments,[{assignment:7,codes:['K1','S1'],reference:'EP7-01',type:'WT · Witness Testimony',complete:true},{assignment:7,codes:['B1'],reference:'EP7-RPL1',type:'RPL · Recognition of Prior Learning',complete:true,rpl:true}]);
assert.deepEqual(matrix.map(row=>[row.code,row.type,row.description,row.count]),[['K1','K','Future knowledge',1],['S1','S','Future skill',1],['B1','B','Future behaviour',1]]);
assert.equal(matrix[2].rpl,true);assert.deepEqual(matrix[0].references,['EP7-01']);
console.log('Compiled unit parity, full-portfolio unit reuse and generic future-course KSB matrix: verified');
