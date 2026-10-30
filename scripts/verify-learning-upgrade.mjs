import assert from 'node:assert/strict';
import fs from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import rehypeLessonDisclosures from '../src/utils/rehypeLessonDisclosures.js';

const audit = JSON.parse(fs.readFileSync('scripts/learning-content-audit.json', 'utf8'));
assert.equal(audit.units.length, 64);
const count = value => [...value.replace(/\s/g, '')].length;
for (const unit of audit.units) {
  const text = fs.readFileSync(`src/data/lessons/${unit.unitId}.md`, 'utf8');
  const [baseline, addition, duplicate] = text.split('\n\n<!-- learning-practice-v1 -->');
  assert.equal(duplicate, undefined);
  assert.equal(count(baseline), unit.baselineCharacters);
  assert.equal(count(addition), unit.addedCharacters);
  assert.ok(unit.addedCharacters >= unit.baselineCharacters * 0.1, unit.unitId);
  assert.ok(!addition.includes('undefined'), unit.unitId);
  const html = renderToStaticMarkup(React.createElement(ReactMarkdown, { rehypePlugins: [rehypeLessonDisclosures], children: addition }));
  assert.equal((html.match(/<details>/g) || []).length, 8, unit.unitId);
  assert.equal((html.match(/<summary>/g) || []).length, 8, unit.unitId);
  assert.ok(!html.includes('&lt;details&gt;'), unit.unitId);
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
console.log('PASS: 64 lesson growth audits, 512 rendered answer disclosures, HTML safety, mixed-language speech, cancellation, stale callbacks, speed bounds and fraction reading.');
