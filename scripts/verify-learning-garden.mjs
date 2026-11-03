import assert from "node:assert/strict";
import {
  gardenLessons,
  gardenSubjects,
  subjectsForGrade,
} from "../src/data/elementaryGarden.js";
import {
  GARDEN_STORAGE,
  emptyGarden,
  readGarden,
  saveGarden,
  recordGardenAnswer,
  lessonState,
  recommendLesson,
  taipeiDay,
} from "../src/utils/gardenEngine.js";

const DAY = 86400000;
const start = Date.parse("2026-11-03T02:00:00Z");
const keys = new Set();
const positions = [0, 0, 0, 0];
assert.equal(gardenLessons.length, 40);
assert.equal(new Set(gardenLessons.map((l) => l.id)).size, 40);
for (let grade = 1; grade <= 6; grade++) {
  const lessons = gardenLessons.filter((l) => l.grade === grade);
  assert.equal(lessons.length, grade <= 2 ? 4 : 8);
  assert.deepEqual(
    new Set(lessons.map((l) => l.subject)),
    new Set(subjectsForGrade(grade).map((s) => s.id)),
  );
  assert.equal(
    recommendLesson(lessons, emptyGarden(), start).id,
    lessons[0].id,
  );
  assert.equal(
    subjectsForGrade(grade).some((s) => s.id === "life"),
    grade <= 2,
  );
}
for (const l of gardenLessons) {
  assert.ok(gardenSubjects.some((s) => s.id === l.subject));
  assert.ok(
    l.goal.length >= 10 && l.explanation.length >= 50 && l.trap.length >= 15,
    l.id,
  );
  assert.equal(l.panels.length, 3);
  assert.ok(l.panels.every((p) => p.label && p.value));
  assert.equal(l.questions.length, 2);
  assert.notEqual(l.questions[0].question, l.questions[1].question);
  for (const q of l.questions) {
    assert.ok(!keys.has(q.key));
    keys.add(q.key);
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options).size, 4);
    assert.ok(q.answerIndex >= 0 && q.answerIndex < 4);
    assert.ok(q.explanation.length >= 15 && q.hint.length >= 10);
    positions[q.answerIndex]++;
  }
  // Simulate every subject's complete initial session, then a scheduled review.
  const fresh = emptyGarden();
  let p = fresh;
  for (const q of l.questions) p = recordGardenAnswer(p, q, true, start);
  assert.ok(lessonState(l, p, start).complete);
  assert.equal(lessonState(l, p, start).mastered, false);
  for (const q of l.questions) p = recordGardenAnswer(p, q, true, start + 1000);
  assert.equal(
    lessonState(l, p, start).mastered,
    false,
    "Same-day repetition must not grant spaced mastery",
  );
  for (const q of l.questions) {
    assert.equal(
      p.records[q.key].due,
      start + DAY,
      "Early practice must not delay review",
    );
    p = recordGardenAnswer(p, q, true, start + DAY);
    assert.equal(p.records[q.key].due, start + 4 * DAY);
  }
  assert.ok(lessonState(l, p, start + DAY).mastered);
  assert.deepEqual(fresh, emptyGarden(), "Updates must be immutable");
}
assert.equal(keys.size, 80);
assert.ok(
  positions.every((n) => n >= 10),
  `Answer positions should not concentrate: ${positions}`,
);
const lesson = gardenLessons[0],
  q = lesson.questions[0];
let p = recordGardenAnswer(emptyGarden(), q, false, start);
assert.equal(p.records[q.key].wrong, true);
assert.equal(p.records[q.key].streak, 0);
assert.equal(p.records[q.key].due, start + DAY);
p = recordGardenAnswer(p, q, true, start + 100);
assert.equal(p.records[q.key].wrong, false);
assert.equal(p.records[q.key].due, start + DAY);
assert.equal(lessonState(lesson, p, start + DAY).due, true);
assert.equal(recommendLesson(gardenLessons, p, start + DAY).id, lesson.id);
assert.equal(
  p.days[taipeiDay(start)].length,
  1,
  "Unique daily questions cannot be farmed",
);
for (const t of [
  start + DAY,
  start + 4 * DAY,
  start + 11 * DAY,
  start + 25 * DAY,
  start + 39 * DAY,
])
  p = recordGardenAnswer(p, q, true, t);
assert.equal(p.records[q.key].streak, 4);
assert.equal(p.records[q.key].due, start + 53 * DAY);
p = recordGardenAnswer(p, q, false, start + 40 * DAY);
assert.equal(p.records[q.key].streak, 0, "A new mistake resets mastery");
assert.equal(p.records[q.key].due, start + 41 * DAY);
assert.equal(
  taipeiDay(Date.parse("2026-11-02T16:01:00Z")),
  "2026-11-03",
  "Use Taiwan calendar days",
);

const stored = {
  value: null,
  getItem() {
    return this.value;
  },
  setItem(key, value) {
    assert.equal(key, GARDEN_STORAGE);
    this.value = value;
  },
};
assert.equal(saveGarden(p, stored), true);
assert.deepEqual(readGarden(stored), p);
for (const bad of [
  "{broken",
  "null",
  "[]",
  '{"version":2}',
  '{"version":1,"records":{"unknown":{"streak":99}}}',
]) {
  stored.value = bad;
  assert.deepEqual(readGarden(stored), emptyGarden());
}
stored.value = JSON.stringify({
  version: 1,
  records: {
    [q.key]: {
      attempts: 1,
      correct: 999,
      due: 0,
      updated: 0,
      streak: 2,
      wrong: false,
    },
  },
  reads: { bogus: 1 },
  days: { "2026-11-03": [q.key, q.key, "bogus"] },
});
assert.deepEqual(readGarden(stored), {
  ...emptyGarden(),
  days: { "2026-11-03": [q.key] },
});
assert.equal(
  saveGarden(p, {
    setItem() {
      throw Error("quota");
    },
  }),
  false,
);
assert.deepEqual(
  readGarden({
    getItem() {
      throw Error("blocked");
    },
  }),
  emptyGarden(),
);
console.log(
  `PASS: 40 lessons / 80 questions; all grade-domain routes; answer balance ${positions}; initial and spaced sessions; early-repeat protection; mistakes; immutable state; Taiwan dates; corrupt and unavailable storage.`,
);
