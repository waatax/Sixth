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

// Verify progressive hints, kind tagging & filtering
const validKinds = new Set(['核心觀念', '計算推導', '生活素養', '易錯防雷']);
for (const q of bank) {
  assert.ok(validKinds.has(q.kind), `Invalid question kind: ${q.kind} for ${q.key}`);
  assert.ok(q.hint1 && q.hint1.startsWith('💡 觀念提點'), `Missing hint1 for ${q.key}`);
  assert.ok(q.hint2 && q.hint2.startsWith('🔍 步驟指引'), `Missing hint2 for ${q.key}`);
}
for (const kind of validKinds) {
  const filtered = selectQuestions({ kind, count: 10 }, empty);
  assert.ok(filtered.length > 0, `No questions for kind: ${kind}`);
  assert.ok(filtered.every(q => q.kind === kind), `Kind filter mismatch for ${kind}`);
}

// Verify studyGuides wonder and questionTypes
for (const [subject, guide] of Object.entries(studyGuides)) {
  assert.ok(guide.wonder && guide.wonder.length >= 10, `Missing wonder for ${subject}`);
  assert.ok(Array.isArray(guide.questionTypes) && guide.questionTypes.length >= 2, `Missing questionTypes for ${subject}`);
  for (const qt of guide.questionTypes) {
    assert.ok(qt.name && qt.tip, `Incomplete question type in ${subject}`);
  }
}

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
console.log(`PASS: ${bank.length} questions, 32 subject/semester/scope combinations, progressive hints, question types, filtering, review, spacing, immutable records, corrupt storage.`);