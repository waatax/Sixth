// Content checks a person would otherwise miss: every printed equation must be true, every
// official math code must have a lesson, every question must be answerable as written.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { gardenLessons } from "../src/data/elementaryGarden.js";
import { isCorrect, normalizeAnswer } from "../src/data/garden/build.js";
import { mathOfficial } from "../src/data/garden/mathOfficial.js";
import {
  makeRocketQuestion,
  matchSets,
  orderSets,
  rocketKinds,
  sortSets,
  spellWords,
} from "../src/data/garden/games.js";
import {
  addActivity,
  checkStickers,
  emptyIsland,
  levelOf,
  LEVELS,
  readIsland,
  streakOf,
} from "../src/utils/islandGame.js";

// 1. Official coverage: all 131 elementary math codes map to a lesson.
const official = Object.values(mathOfficial).flat();
assert.equal(official.length, 131, "official math item count");
const covered = new Set(gardenLessons.flatMap((l) => l.codes));
const missing = official.filter(([code]) => !covered.has(code)).map(([c]) => c);
assert.deepEqual(missing, [], `uncovered math codes: ${missing}`);
for (const l of gardenLessons)
  if (l.subject === "math")
    for (const code of l.codes)
      assert.ok(official.some(([c]) => c === code), `unknown code ${code}`);

// 2. Every plain-number equation in lesson text must evaluate correctly.
const toJs = (s) =>
  s
    .replace(/(\d+)／(\d+)/g, "($1/$2)")
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/＋/g, "+")
    .replace(/－/g, "-");
let checked = 0;
const failures = [];
// A deliberately wrong statement that a question asks the learner to catch.
const intentional = ["49×21＝129"];
function checkText(text, where) {
  for (const chain of text.matchAll(/[\d.()＋－×÷／＝]+/g)) {
    const raw = chain[0].replace(/\.$/, "");
    if (!raw.includes("＝") || !/[＋－×÷／]/.test(raw)) continue;
    // "商 3 餘 2", repeating decimals, mixed numbers and percents are true but not plain arithmetic.
    const after = text.slice(chain.index + chain[0].length);
    if (/^\s*(…|又|%|餘)/.test(after) || /…|又|餘/.test(text.slice(chain.index, chain.index + chain[0].length + 1))) continue;
    if (intentional.some((x) => raw.includes(x))) continue;
    const sides = raw.split("＝");
    if (sides.length < 2 || sides.some((side) => !side || /^[＋－×÷／]|[＋－×÷／]$/.test(side))) continue;
    let values;
    try {
      values = sides.map((side) => Function(`return (${toJs(side)})`)());
    } catch {
      continue;
    }
    checked++;
    if (values.some((v) => Math.abs(v - values[0]) > 1e-6)) failures.push(`${where}: ${raw} → ${values}`);
  }
}
for (const l of gardenLessons) {
  checkText(l.explanation, l.id);
  for (const q of l.questions) {
    checkText(q.explanation, q.key);
    checkText(q.question, q.key);
  }
  for (const p of l.panels) checkText(p.value, l.id);
}
assert.deepEqual(failures, [], "false equations");
assert.ok(checked > 150, `expected many equations, checked ${checked}`);

// 3. Numeric answers should appear in their own explanation, catching typos in either.
const lonely = [];
for (const l of gardenLessons)
  for (const q of l.questions)
    if (q.type === "num" && !q.explanation.replace(/,/g, "").includes(normalizeAnswer(q.answer)))
      lonely.push(`${q.key}: ${q.answer} / ${q.explanation}`);
assert.deepEqual(lonely, [], "numeric answer missing from its explanation");

// 4. Each question type grades its own right answer as correct, and a wrong one as wrong.
const seen = { mcq: 0, tf: 0, num: 0, ord: 0, pair: 0 };
for (const l of gardenLessons)
  for (const q of l.questions) {
    seen[q.tf ? "tf" : q.type]++;
    if (q.type === "mcq") {
      assert.ok(isCorrect(q, q.answerIndex), q.key);
      assert.ok(!isCorrect(q, (q.answerIndex + 1) % q.options.length), q.key);
      assert.ok(q.options.every(Boolean), q.key);
    } else if (q.type === "num") {
      assert.ok(isCorrect(q, q.answer) && !isCorrect(q, "不知道"), q.key);
      assert.ok(!Number.isNaN(Number(normalizeAnswer(q.answer))), q.key);
    } else if (q.type === "ord") {
      assert.ok(q.items.length >= 3 && new Set(q.items).size === q.items.length, q.key);
      assert.ok(isCorrect(q, q.items) && !isCorrect(q, [...q.items].reverse()), q.key);
    } else {
      assert.ok(q.pairs.length >= 3 && q.pairs.every((p) => p.length === 2 && p[0] && p[1]), q.key);
      assert.equal(new Set(q.pairs.map((p) => p[1])).size, q.pairs.length, `${q.key} right side must be unique`);
      assert.ok(isCorrect(q, true) && !isCorrect(q, false), q.key);
    }
    assert.ok(!/undefined/.test(JSON.stringify(q)), q.key);
  }
assert.ok(Object.values(seen).every((n) => n >= 8), `question mix ${JSON.stringify(seen)}`);

// 5. Questions must stand alone: a check quiz shows them without the lesson's diagram.
for (const l of gardenLessons)
  for (const q of l.questions)
    assert.ok(!/上面的|上圖|下圖|圖中|如圖/.test(q.question), `depends on a picture: ${q.key}`);

// 6. Game content and generators.
for (const set of matchSets) {
  assert.equal(set.pairs.length, 6, set.id);
  assert.equal(new Set(set.pairs.flat()).size, 12, `${set.id} needs 12 distinct cards`);
}
for (const set of sortSets) {
  assert.equal(set.bins.length, 2, set.id);
  assert.ok(set.items.length >= 6 && set.items.every(([, b]) => b === 0 || b === 1), set.id);
}
for (const set of orderSets) assert.ok(set.items.length >= 3 && new Set(set.items).size === set.items.length, set.id);
assert.ok(spellWords.length >= 40);
for (const kind of Object.keys(rocketKinds))
  for (let i = 0; i < 200; i++) {
    const [text, answer] = rocketKinds[kind]();
    assert.ok(Number.isInteger(answer) && answer >= 0, `${kind}: ${text}=${answer}`);
  }
for (let grade = 1; grade <= 6; grade++)
  for (let i = 0; i < 300; i++) {
    const q = makeRocketQuestion(grade);
    assert.equal(q.options.length, 4, q.text);
    assert.equal(new Set(q.options).size, 4, `${q.text} ${q.options}`);
    assert.ok(q.options.includes(q.answer), q.text);
    assert.ok(q.options.every((o) => o >= 0), q.text);
  }

// 7. Rewards: levels ascend, streak forgives one rest day, stickers never double-award.
LEVELS.reduce((a, b) => (assert.ok(b.xp > a.xp), b));
assert.equal(levelOf(0).level, 1);
assert.equal(levelOf(LEVELS.at(-1).xp + 5).progress, 1);
const DAY = 86400000;
const now = Date.parse("2026-11-03T04:00:00Z");
const on = (offsets) => {
  let i = emptyIsland();
  for (const o of offsets) i = addActivity(i, { xp: 5, answers: 1 }, now - o * DAY);
  return i;
};
assert.equal(streakOf(on([0, 1, 2]), now), 3);
assert.equal(streakOf(on([0, 2, 3]), now), 3, "one rest day keeps the streak");
assert.equal(streakOf(on([0, 3]), now), 1, "two rest days end the streak");
assert.equal(streakOf(on([1, 2]), now), 2, "not studying yet today keeps yesterday's streak");
assert.equal(streakOf(emptyIsland(), now), 0);
const stats = { reads: 1, complete: 1, mastered: 0, subjects: 1 };
const first = checkStickers(emptyIsland(), stats, now);
assert.ok(first.earned.includes("first-read") && first.earned.includes("first-lesson"));
assert.deepEqual(checkStickers(first.island, stats, now).earned, []);
const badStorage = { getItem: () => '{"version":1,"xp":-5,"grade":99,"days":{"x":1},"stickers":{"a":"b"},"checks":[{"total":0}]}' };
const repaired = readIsland(badStorage);
assert.equal(repaired.xp, 0);
assert.equal(repaired.grade, 0);
assert.deepEqual(repaired.days, {});
assert.deepEqual(repaired.stickers, {});
assert.deepEqual(repaired.checks, []);
assert.deepEqual(readIsland({ getItem() { throw Error("blocked"); } }), emptyIsland());

// 8. The document head must parse cleanly: stray markup after a tag would print as page text.
const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const headLines = html.slice(html.indexOf("<head>") + 6, html.indexOf("</head>")).split(/\r?\n/);
for (const line of headLines) {
  const text = line.trim();
  if (!text || text.startsWith("<!--")) continue;
  assert.ok(/^<(meta|link|title)\b.*(\/>|<\/title>)$/.test(text), `unexpected head line: ${text.slice(0, 80)}`);
  assert.ok((text.match(/" \/>/g) || []).length <= 1, `stray markup in head: ${text.slice(0, 80)}`);
}

console.log(`PASS: ${gardenLessons.length} lessons, ${gardenLessons.reduce((n, l) => n + l.questions.length, 0)} questions ${JSON.stringify(seen)}, 131/131 math codes, ${checked} equations verified, game sets and rewards.`);
