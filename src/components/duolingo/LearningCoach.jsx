import { useEffect, useState } from 'react';
import { speechEngine } from '../../utils/speechHelper';
import MathText from '../common/MathText';

export function questionSpeech(exercise) {
  return [...new Set([exercise.prompt, exercise.audioText, exercise.statement,
    exercise.sentenceBefore && `${exercise.sentenceBefore} 空格 ${exercise.sentenceAfter || ''}`].filter(Boolean))].join('。');
}

export default function LearningCoach({ exercise, feedback, point, retry = false }) {
  const [speech, setSpeech] = useState({ isPlaying: false, rate: speechEngine.rate });
  const [error, setError] = useState('');
  const [level, setLevel] = useState('steady');
  useEffect(() => speechEngine.subscribe(setSpeech), []);
  useEffect(() => {
    setError('');
    return () => speechEngine.stop();
  }, [exercise.id, feedback]);
  const read = (text) => {
    setError('');
    if (!speechEngine.synth) { setError('這個瀏覽器不支援朗讀，仍可閱讀文字完成練習。'); return; }
    speechEngine.speakMixed(text, { onError: () => setError('語音未能播放，請再點一次或改用文字閱讀。') });
  };
  const buttonClass = 'rounded-xl border border-sky-300 px-3 py-2 text-sm font-bold text-sky-700 dark:text-sky-300 bg-sky-500/10 cursor-pointer';
  return <section aria-label="學習教練與語音" className="my-3 rounded-2xl border border-sky-200 dark:border-sky-800 p-3 space-y-3" style={{ background: 'var(--bg-secondary)' }}>
    <div className="flex flex-wrap items-center gap-2">
      <button type="button" className={buttonClass} onClick={() => read(questionSpeech(exercise))}>🔊 讀題目</button>
      {exercise.options?.length > 0 && <button type="button" className={buttonClass} onClick={() => read(exercise.options.map((option, i) => `選項 ${i + 1}。${option}`).join('。'))}>讀全部選項</button>}
      {feedback && <button type="button" className={buttonClass} onClick={() => read(`正確答案：${feedback.correctText}。解說：${feedback.detail}`)}>讀答案與解說</button>}
      <label className="text-sm text-secondary">語速 <select aria-label="朗讀速度" value={speech.rate} onChange={e => { speechEngine.stop(); speechEngine.setRate(Number(e.target.value)); }} className="rounded-lg p-2" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        {[0.5, 0.75, 1, 1.25, 1.5].map(rate => <option key={rate} value={rate}>{rate} 倍</option>)}
      </select></label>
      <button type="button" className={buttonClass} disabled={!speech.isPlaying} onClick={() => speechEngine.stop()}>停止朗讀</button>
    </div>
    {error && <p role="status" className="text-sm text-secondary">{error}</p>}
    <div className="flex flex-wrap gap-2" aria-label="學習提示程度">
      {[['guided', '🌱 帶我理解'], ['steady', '🌿 自己試試'], ['stretch', '🌳 深入挑戰']].map(([value, label]) => <button type="button" key={value} aria-pressed={level === value} onClick={() => setLevel(value)} className="rounded-full px-3 py-2 text-xs font-bold border cursor-pointer" style={{ background: level === value ? '#047857' : 'var(--bg-primary)', color: level === value ? 'white' : 'var(--text-primary)' }}>{label}</button>)}
    </div>
    <div className="text-sm text-secondary leading-relaxed" aria-live="polite">
      {retry && <p className="font-bold text-emerald-700 dark:text-emerald-300">🔁 再試一次：用剛才的解說，說出選這個答案的理由。</p>}
      {feedback ? <>
        <p className="font-bold">{feedback.isCorrect ? '你做到了！試著不看解說，說一次原因。' : '答錯是找到練習方向，不代表學不會。'}</p>
        {!feedback.isCorrect && <div className="whitespace-pre-line"><MathText text={feedback.detail} /></div>}
        {!feedback.isCorrect && point?.trapAlert && <p><MathText text={`容易混淆：${point.trapAlert}`} /></p>}
        <p>下一步：遮住答案 → 用自己的話解釋 → 明天再回來練一次。</p>
      </> : level === 'guided' ? <p><MathText text={point?.definition || '先讀題目，找出要回答的問題，再逐一比較選項；需要時可打開提示。'} /></p>
        : level === 'stretch' ? <p>選答案前，先說明另外一個選項為什麼不符合題意。答完後，想一個生活中可以用到的情境。</p>
          : <p>先回想再作答；不確定時可以聽題目或切換「帶我理解」。不計時、不扣生命。</p>}
    </div>
  </section>;
}
