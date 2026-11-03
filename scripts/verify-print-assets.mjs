import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
const manifest=JSON.parse(fs.readFileSync('public/downloads/pdf/manifest.json','utf8'));
assert.equal(manifest.length,48);
assert.equal(new Set(manifest.map(m=>m.pdfFileName)).size,48);
for(const m of manifest){
 const pdf=fs.readFileSync(`public/downloads/pdf/${m.pdfFileName}`);
 assert.equal(pdf.subarray(0,5).toString(),'%PDF-');
 assert.equal(pdf.length,m.sizeBytes);
 assert.ok(m.pdfUrl.startsWith('/Sixth/downloads/pdf/'));
 const html=fs.readFileSync(`public/downloads/html/${m.pdfFileName.replace('.pdf','.html')}`,'utf8');
 for(const text of ['我的段考複習路線','訂正與隔日回想','background: #fff !important','版本查核']) assert.ok(html.includes(text),m.pdfFileName+': '+text);
}
for(const subject of ['math','science','mandarin','social','english','arts','health_pe','integrative']){
 const hash=suffix=>createHash('sha256').update(fs.readFileSync(`public/downloads/pdf/${subject}_6B_${suffix}.pdf`)).digest('hex');
 assert.equal(hash('final'),hash('graduation'));
}
console.log('PASS: 48 white-print HTML/PDF pairs, manifest paths and sizes, scope and correction sections, 8 graduation aliases.');
