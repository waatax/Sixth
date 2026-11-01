import assert from 'node:assert/strict';
import { bank, units, selectQuestions, recordAnswer, readProgress } from '../src/utils/studyEngine.js';
import { studyGuides } from '../src/data/studyGuides.js';
const empty = { records: {} };
assert.equal(new Set(bank.map(q=>q.key)).size, bank.length);
for (const subject of Object.keys(studyGuides)) for (const semester of ['6A','6B']) for (const scope of ['midterm','final']) {
  const list = selectQuestions({subject,semester,scope,count:20,mode:'exam'},empty);
  assert.ok(list.length, `${subject}/${semester}/${scope} empty`);
  assert.ok(list.every(q=>q.subjectId===subject && q.semester===semester && q.term===scope));
}
for (const unit of units) assert.ok(selectQuestions({unit:unit.id,count:5},empty).every(q=>q.unitId===unit.id));
const q = bank[0], now=1000;
let p=recordAnswer(empty,q,false,now);
assert.equal(p.records[q.key].wrong,true);
assert.equal(selectQuestions({mode:'review',count:5},p)[0].key,q.key);
p=recordAnswer(p,q,true,now);
assert.equal(p.records[q.key].wrong,false);
assert.equal(p.records[q.key].due,now+86400000);
p=recordAnswer(p,q,true,now);
assert.equal(p.records[q.key].due,now+3*86400000);
assert.equal(p.records[q.key].attempts,3);
assert.equal(empty.records[q.key],undefined);
assert.equal(selectQuestions({subject:'missing',count:5},p).length,0);
globalThis.localStorage={getItem:()=>'{broken'};
assert.deepEqual(readProgress(),empty);
console.log(`PASS: ${bank.length} questions, 32 subject/semester/scope combinations, filtering, review, spacing, immutable records, corrupt storage.`);
