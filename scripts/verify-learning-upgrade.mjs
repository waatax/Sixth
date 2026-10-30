import assert from 'node:assert/strict';
import fs from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import rehypeLessonDisclosures from '../src/utils/rehypeLessonDisclosures.js';

const audit = JSON.parse(fs.readFileSync('scripts/learning-content-audit.json', 'utf8'));
assert.equal(audit.units.length, 64);
const count = value => [...value.replace(/\s/g, '')].length;
let disclosureTotal = 0;
for (const unit of audit.units) {
  const text = fs.readFileSync(`src/data/lessons/${unit.unitId}.md`, 'utf8');
  const [baseline, addition, duplicate] = text.split('\n\n<!-- learning-practice-v1 -->');
  assert.equal(duplicate, undefined);
  assert.equal(count(baseline), unit.baselineCharacters);
  assert.equal(count(addition), unit.addedCharacters);
  assert.ok(unit.addedCharacters >= unit.baselineCharacters * 0.1, unit.unitId);
  assert.ok(!addition.includes('undefined'), unit.unitId);
  const html = renderToStaticMarkup(React.createElement(ReactMarkdown, { rehypePlugins: [rehypeLessonDisclosures], children: addition }));
  assert.equal((html.match(/<details>/g) || []).length, unit.disclosures, unit.unitId);
  assert.equal((html.match(/<summary>/g) || []).length, unit.disclosures, unit.unitId);
  assert.ok(unit.knowledgePoints >= 4 && unit.workedQuestions >= 4, unit.unitId);
  assert.equal((addition.split('<summary>看答案與解說</summary>').slice(1) || []).length, unit.workedQuestions, unit.unitId);
  assert.ok(!html.includes('&lt;details&gt;'), unit.unitId);
  assert.ok(!html.replace(/<[^>]+>/g, '').includes('**'), `${unit.unitId}: bold markers must render, not show as **`);
  assert.ok(!/\n答案：/.test(addition), `${unit.unitId}: answers must not trigger the lesson page's second reveal toggle`);
  disclosureTotal += unit.disclosures;
}
const unsafe = renderToStaticMarkup(React.createElement(ReactMarkdown, { rehypePlugins: [rehypeLessonDisclosures], children: '<script>alert(1)</script>' }));
assert.ok(!unsafe.includes('<script>'));

const spoken = [];
globalThis.localStorage = { getItem: () => null, setItem: () => {} };
globalThis.window = { speechSynthesis: {
  getVoices: () => [{ name: 'Taiwan', lang: 'zh-TW' }, { name: 'US', lang: 'en-US' }],
  cancel() {}, speak(utterance) { spoken.push(utterance); }
} };
globalThis.SpeechSynthesisUtterance = class { constructor(text) { this.text = text; } };
const { speechEngine } = await import('../src/utils/speechHelper.js');
speechEngine.speak('請回答這題');
assert.equal(spoken.at(-1).lang, 'zh-TW');
speechEngine.speak('What time is it?');
assert.equal(spoken.at(-1).lang, 'en-US');
const old = spoken.at(-1);
speechEngine.speak('新題目');
const active = spoken.at(-1);
old.onend();
old.onerror({ error: 'interrupted' });
assert.equal(speechEngine.currentUtterance, active, 'Old callbacks must not clear new speech');
speechEngine.speakMixed('請說 Hello world 再回答');
assert.equal(spoken.at(-1).lang, 'zh-TW');
spoken.at(-1).onend();
assert.equal(spoken.at(-1).lang, 'en-US');
const english = spoken.at(-1);
english.onend();
assert.equal(spoken.at(-1).lang, 'zh-TW');
const final = spoken.at(-1);
speechEngine.stop();
const length = spoken.length;
final.onend();
assert.equal(spoken.length, length, 'Stop must cancel remaining segments');
assert.equal(speechEngine.isPlaying, false);
speechEngine.setRate(100);
assert.equal(speechEngine.rate, 1.5);
speechEngine.setRate(Number.NaN);
assert.equal(speechEngine.rate, 1);
assert.ok(speechEngine.cleanText('$\\frac{1}{2}$').includes('2分之1'));
const beforeLetters = spoken.length;
speechEngine.speakMixed('選項 A。最大公因數 (GCD) 是 6');
assert.equal(spoken.length, beforeLetters + 1, 'Option letters and acronyms stay in the Chinese sentence');
assert.equal(spoken.at(-1).lang, 'zh-TW');
speechEngine.stop();
const beforeLong = spoken.length;
speechEngine.speakMixed('這是一個很長的重點說明，要讓學生聽得清楚。。'.repeat(12));
assert.ok(spoken.at(-1).text.length <= 150 && !spoken.at(-1).text.includes('。。'), 'Long text is read in short sentences');
spoken.at(-1).onend();
assert.ok(spoken.length > beforeLong + 1, 'Next sentence follows automatically');
speechEngine.stop();

// 闖關朗讀：選項用畫面上的 A～D，答錯時念出正確答案與完整解說
const { questionSpeech, optionsSpeech, feedbackSpeech } = await import('../src/components/duolingo/coachSpeech.js');
const sampleExercise = { type: 'mcq', prompt: '3 ÷ 1/4 = ?', options: ['12', '3/4', '4', '7'] };
assert.equal(questionSpeech(sampleExercise), '3 ÷ 1/4 = ?');
assert.ok(optionsSpeech(sampleExercise).startsWith('選項 A。12') && optionsSpeech(sampleExercise).includes('選項 D。7'));
assert.ok(optionsSpeech({ type: 'true_false' }).includes('觀念正確'));
const wrongSpeech = feedbackSpeech({ isCorrect: false, correctText: '12', detail: '3 × 4 = 12' });
assert.ok(wrongSpeech.includes('正確答案是：12') && wrongSpeech.includes('解說：3 × 4 = 12'));
assert.ok(!feedbackSpeech({ isCorrect: true, correctText: '12', detail: '很長的解說' }).includes('很長的解說'));

// 闖關題目：每單元全部題目進入題池，延伸應用題連到自己的知識點，填空／聽力／是非不重複使用前段題目
const { generateDuolingoExercisesForUnit } = await import('../src/data/curriculumCatalog108.js');
const { quizData } = await import('../src/data/quizData.js');
const { knowledgePointsData } = await import('../src/data/knowledgePoints.js');
const { coursesData } = await import('../src/data/courses.js');
let gameUnits = 0;
for (const unit of Object.values(coursesData.units).flat()) {
  const questions = quizData[unit.id] || [];
  const exercises = generateDuolingoExercisesForUnit(unit, questions, knowledgePointsData);
  const mcqs = exercises.filter(e => e.type === 'mcq');
  assert.equal(mcqs.length, questions.length, unit.id);
  const expansionMcqs = mcqs.filter(e => e.sourceSet === 'expansion');
  assert.equal(expansionMcqs.length, 3, unit.id);
  assert.ok(expansionMcqs.every(e => e.kpId === `kp-${unit.id}-4`), unit.id);
  assert.ok(exercises.every(e => e.type === 'matching' || e.type === 'word_bank' || (e.explanation || '').length >= 15), unit.id);
  gameUnits++;
}
assert.equal(gameUnits, 64);
console.log(`PASS: 64 lesson growth audits, ${disclosureTotal} rendered answer disclosures, HTML safety,`, ' mixed-language speech, cancellation, stale callbacks, speed bounds and fraction reading.');
