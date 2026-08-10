'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');

const operations=[];
class FakeGradient{addColorStop(){}}
class FakeContext{
  constructor(page){this.page=page;this.fillStyle='';this.font='';this.textAlign='left';}
  fillRect(x,y,w,h){operations.push({page:this.page,type:'fillRect',colour:this.fillStyle,x,y,w,h})}
  fillText(value,x,y){operations.push({page:this.page,type:'fillText',colour:this.fillStyle,value:String(value),x,y})}
  measureText(value){return {width:String(value).length*8}}
  createRadialGradient(){return new FakeGradient()}
}
for(const method of ['save','restore','beginPath','moveTo','lineTo','quadraticCurveTo','closePath','fill','stroke','strokeRect','translate','rotate','rect','clip','drawImage'])FakeContext.prototype[method]=function(){};
let page=0;
class FakeCanvas{
  constructor(){this.page=page++;this.context=new FakeContext(this.page);this.width=0;this.height=0}
  getContext(){return this.context}
  toDataURL(){return 'data:image/jpeg;base64,/9j/2Q=='}
}
global.document={createElement(tag){assert.equal(tag,'canvas');return new FakeCanvas()}};
global.Image=class{set src(_value){this.width=100;this.height=50;queueMicrotask(()=>this.onload?.())}};

const generator=require('../pdf-generator.js');
const emptySections={practical:[],photos:[],statement:[],discussion:[],walkthrough:[],professionalDiscussion:[],witness:[],supporting:[]};
const profile={fullName:'Regression Learner'};

function greenFullPageFills(fromPage,toPage){return operations.filter(op=>op.type==='fillRect'&&op.colour===generator.PDF_STYLE_COLOURS.apprenticeGreen&&op.x===0&&op.y===0&&op.w===1240&&op.h===1754&&op.page>=fromPage&&op.page<toPage)}
function whiteTitleText(pageNumber,expected){return operations.some(op=>op.page===pageNumber&&op.type==='fillText'&&op.colour===generator.PDF_STYLE_COLOURS.white&&op.value.includes(expected))}

(async()=>{
  const nvqStart=page;
  const nvq=await generator.generateEvidencePackPDF({course:{name:'NVQ Diploma',nvqUnits:true,evidenceRequirement:2},assignment:{n:1,unit:'NVQ-101',title:'Construct masonry',ksbs:[['LO1','Prepare work']],criteria:{LO1:[{code:'1.1',text:'Prepare safely'}]}},profile,sections:emptySections,branding:{},returnPackage:true});
  assert.ok(nvq.entries[0].data instanceof Uint8Array&&nvq.entries[0].data.length>0,'individual NVQ PDF bytes are produced');
  assert.equal(nvq.entries[0].name,nvq.pdfName,'individual NVQ download package contains its PDF');
  const nvqEnd=page;
  assert.deepEqual(greenFullPageFills(nvqStart,nvqEnd).map(op=>op.page),[nvqStart],'only the NVQ divider receives a full-page green fill');
  assert.ok(whiteTitleText(nvqStart,'UNIT'),'NVQ divider title text is white');

  const ksbStart=page;
  const ksb=await generator.generateEvidencePackPDF({course:{name:'KSB Standard'},assignment:{n:2,title:'Work safely',ksbs:[['K1','Safety knowledge']]},profile,sections:emptySections,branding:{},returnPackage:true});
  assert.ok(ksb.entries[0].data instanceof Uint8Array&&ksb.entries[0].data.length>0,'individual KSB PDF bytes are produced');
  const ksbEnd=page;
  assert.deepEqual(greenFullPageFills(ksbStart,ksbEnd).map(op=>op.page),[ksbStart],'only the KSB divider receives a full-page green fill');
  assert.ok(whiteTitleText(ksbStart,'EVIDENCE PACK'),'KSB divider title text is white');

  const nvqPack=generator.compileUnitPack({assignmentNumber:1,previewPages:nvq.previewPages,entries:nvq.entries,pdfName:nvq.pdfName});
  const ksbPack=generator.compileUnitPack({assignmentNumber:2,previewPages:ksb.previewPages,entries:ksb.entries,pdfName:ksb.pdfName});
  const nvqFullPages=generator.compileFullPortfolioFromUnitPacks(['NVQ front'],[nvqPack,nvqPack]);
  const ksbFullPages=generator.compileFullPortfolioFromUnitPacks(['KSB front'],[ksbPack]);
  assert.equal(nvqFullPages.length,1+nvq.previewPages.length*2,'full NVQ portfolio includes every unit pack unchanged');
  assert.equal(ksbFullPages.length,1+ksb.previewPages.length,'full KSB portfolio includes its pack unchanged');
  const nvqFullPdf=generator.makeImagePDF(nvqFullPages.slice(1).map(generatorDataUrlBytes),1240,1754),ksbFullPdf=generator.makeImagePDF(ksbFullPages.slice(1).map(generatorDataUrlBytes),1240,1754);
  assert.ok(nvqFullPdf.length>0,'full NVQ PDF bytes are produced');
  assert.ok(ksbFullPdf.length>0,'full KSB PDF bytes are produced');
  const fullDownloadPackage={name:'Regression-NVQ-Full-Portfolio.zip',blob:generator.makeZipBlob([{name:'Portfolio/Complete-Portfolio.pdf',data:nvqFullPdf},{name:nvq.pdfName,data:nvq.entries[0].data}])};
  assert.ok(fullDownloadPackage.blob.size>0&&fullDownloadPackage.name.endsWith('.zip'),'full NVQ portfolio download object is produced');

  const source=fs.readFileSync(require.resolve('../pdf-generator.js'),'utf8');
  assert.match(source,/SOFT_GREEN=PDF_STYLE_COLOURS\.softGreen/,'SOFT_GREEN resolves through the shared palette in each renderer scope');
  assert.equal((source.match(/SOFT_GREEN=PDF_STYLE_COLOURS\.softGreen/g)||[]).length,2,'both renderer scopes declare the matrix token');
  assert.doesNotMatch(source,/SOFT_GREEN\s*=\s*['"]/,'SOFT_GREEN is never duplicated as a hard-coded local colour');
  for(const token of [...source.matchAll(/PDF_STYLE_COLOURS\.([A-Za-z][A-Za-z0-9]*)/g)].map(match=>match[1]))assert.ok(Object.hasOwn(generator.PDF_STYLE_COLOURS,token),`PDF style token ${token} is defined`);
  console.log('NVQ/KSB individual and full portfolio generation, shared colours, divider isolation and PDF style audit: PASS');
})().catch(error=>{console.error(error);process.exitCode=1});

function generatorDataUrlBytes(value){return new Uint8Array(Buffer.from(String(value).split(',')[1],'base64'))}
