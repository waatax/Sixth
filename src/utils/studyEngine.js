import { balanceQuestion } from './balanceOptions.js';
import { thousandQuestionsData } from '../data/questionBank/index.js';
import { coursesData } from '../data/courses.js';
export const units = Object.entries(coursesData.units).flatMap(([subjectId, list]) => list.map(u => ({ ...u, subjectId })));
export const bank = units.flatMap(u => (thousandQuestionsData[u.id] || []).filter(q => q.options?.length === 4 && Number.isInteger(q.answerIndex) && q.answerIndex >= 0 && q.answerIndex < 4 && q.explanation).map(q => ({ ...balanceQuestion(q), key: `${u.id}:${q.id}`, unitId: u.id, subjectId: u.subjectId, semester: u.semester, term: u.term })));
export function readProgress() {
  try { const p = JSON.parse(localStorage.getItem('sixth-studio-v1')); return p && typeof p.records === 'object' && !Array.isArray(p.records) && p.records ? p : { records: {} }; } catch { return { records: {} }; }
}
export function selectQuestions(config, progress, now = Date.now(), random = Math.random) {
  return bank.filter(q => (!config.subject || q.subjectId === config.subject) && (!config.semester || q.semester === config.semester) && (!config.unit || q.unitId === config.unit) && (!config.scope || q.term === config.scope) && (config.mode !== 'review' || progress.records[q.key]?.wrong)).map(q => ({ q, priority: config.mode === 'exam' ? 0 : progress.records[q.key]?.wrong ? 0 : !progress.records[q.key] ? 2 : Number(progress.records[q.key].due) <= now ? 1 : 3, tie: random() })).sort((a,b) => a.priority - b.priority || a.tie - b.tie).slice(0, config.count).map(x => x.q);
}
export function recordAnswer(progress, q, correct, now = Date.now()) {
  const old = progress.records[q.key] || {};
  const streak = correct ? (Number(old.streak) || 0) + 1 : 0;
  return { records: { ...progress.records, [q.key]: { attempts: (Number(old.attempts) || 0) + 1, correct: (Number(old.correct) || 0) + Number(correct), wrong: !correct, streak, due: now + (correct ? [1,3,7,14][Math.min(streak - 1, 3)] : 1) * 86400000, updated: now } } };
}
