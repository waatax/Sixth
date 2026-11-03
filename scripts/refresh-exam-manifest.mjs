import fs from 'node:fs';
import {getExamHandoutInfo,getNotesBySubjectSemesterAndScope} from '../src/data/examNotes/index.js';
const result=[];
for(const subject of ['math','science','mandarin','social','english','arts','health_pe','integrative']) for(const semester of ['6A','6B']) for(const scope of ['midterm','final','all']) {
 const info=getExamHandoutInfo(subject,semester,scope);
 const file=`public/downloads/pdf/${info.pdfFileName}`;
 if(!fs.existsSync(file)||fs.statSync(file).size<1000) throw Error(file);
 result.push({...info,unitCount:getNotesBySubjectSemesterAndScope(subject,semester,scope).length,sizeBytes:fs.statSync(file).size,edition:'white-print-2026-11-03'});
}
fs.writeFileSync('public/downloads/pdf/manifest.json',JSON.stringify(result,null,2));
console.log('Verified 48 PDF manifest entries.');
