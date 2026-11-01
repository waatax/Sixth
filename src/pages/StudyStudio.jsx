import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Check, Compass, Leaf, RotateCcw, Target, Trophy } from 'lucide-react';
import { coursesData } from '../data/courses';
import { bank, units, readProgress, selectQuestions, recordAnswer } from '../utils/studyEngine';
import MathText from '../components/common/MathText';
import './StudyStudio.css';
import { studyGuides } from '../data/studyGuides';
const initial = { subject: 'math', semester: '6A', scope: '', unit: '', count: 5, mode: 'learn' };
export default function StudyStudio() {
  const [config, setConfig] = useState(initial);
  const [progress, setProgress] = useState(readProgress);
  const [session, setSession] = useState(null);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [hint, setHint] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [large, setLarge] = useState(false);
  const heading = useRef(null);
  const locked = useRef(false);
  const q = session?.questions[index];
  const checked = answers.length > index;
  const finished = session && index >= session.questions.length;
  const wrongCount = bank.filter(q => progress.records[q.key]?.wrong).length;
  const answered = Object.values(progress.records).reduce((n,r) => n + (Number(r.attempts) || 0), 0);
  const mastered = bank.filter(q => progress.records[q.key]?.streak >= 2).length;
  const guide = studyGuides[config.subject];
  const filteredUnits = units.filter(u => u.subjectId === config.subject && u.semester === config.semester && (!config.scope || u.term === config.scope));
  const available = selectQuestions({...config, count: bank.length}, progress).length;
  useEffect(() => { heading.current?.focus(); }, [index, session]);
  useEffect(() => {
    function key(e) { if (!q || checked || /INPUT|SELECT|TEXTAREA|BUTTON/.test(e.target.tagName)) return; const n = Number(e.key); if (n >= 1 && n <= 4) setSelected(n - 1); }
    window.addEventListener('keydown', key); return () => window.removeEventListener('keydown', key);
  }, [q, checked]);
  function start(custom = config) {
    const questions = selectQuestions(custom, progress);
    if (!questions.length) return;
    setSession({ questions, mode: custom.mode }); setIndex(0); setAnswers([]); setSelected(null); setHint(false); locked.current = false;
  }
  function confirm() {
    if (selected === null || checked || locked.current) return;
    locked.current = true;
    const correct = selected === q.answerIndex;
    const next = recordAnswer(progress, q, correct);
    setProgress(next); setAnswers(a => [...a, { key: q.key, selected, correct }]);
    try { localStorage.setItem('sixth-studio-v1', JSON.stringify(next)); setSaveError(false); } catch { setSaveError(true); }
  }
  function next() { setIndex(i => i + 1); setSelected(null); setHint(false); locked.current = false; }
  function change(key, value) { setConfig(c => ({...c, [key]: value, ...(['subject','semester','scope'].includes(key) ? {unit:''} : {})})); }
  return <div className={`studio ${large ? 'studio-large' : ''}`}>
    <header className="studio-nav"><Link to="/" onClick={() => setSession(null)} className="studio-brand"><span className="brand-mark"><Leaf size={23}/></span>小六練習室<span className="edition">一起慢慢變厲害</span></Link><nav aria-label="主要導覽"><Link to="/" onClick={() => setSession(null)}>學習首頁</Link><Link to="/exam-notes">考前講義</Link><Link to="/question-bank">完整題庫</Link><button onClick={() => setLarge(v => !v)} aria-pressed={large}>字級 {large ? '標準' : '放大'}</button></nav></header>
    {saveError && <p role="alert" className="studio-feedback">瀏覽器無法儲存紀錄，本次仍可練習；離開頁面後紀錄可能遺失。</p>}
    {!session ? <>
      <section className="studio-hero"><div><div className="studio-eyebrow">YOUR LITTLE STEPS, BIG DISCOVERIES</div><h1>每天一小步，<br/>把「不會」變成<span>「我懂了！」</span></h1><p>先練 5 題就好。想一想、看解析，再把錯題練會。<br/>你的每一次嘗試，都算數。</p><a href="#practice-setup" className="studio-primary">開始今天的練習 <ArrowRight size={19}/></a><span className="hero-note">免登入 · 無廣告 · 紀錄留在這台裝置</span></div><div className="journey-art" aria-hidden="true"><span className="art-sun">✦</span><div className="art-orbit"/><div className="art-book">Aa<span>＋ ÷</span><Leaf size={55}/></div><span className="art-label art-label-one">想一想 💡</span><span className="art-label art-label-two">又懂了一點！ ✓</span><span className="art-star">✧</span><div className="art-caption">今天，也有新的發現。</div></div></section>
      <div className="studio-stats"><div><Target/><span><strong>{answered}</strong> 累積練習次數</span></div><div><RotateCcw/><span><strong>{wrongCount}</strong> 題等待再練</span></div><div><Trophy/><span><strong>{mastered}</strong> 題連續答對兩次</span></div></div>
      <div className="studio-columns"><section className="studio-panel" id="practice-setup"><div className="section-top"><span className="step-label">01 / 開始探索</span><span className="small-note">每回合約 5–15 分鐘</span></div><h2>今天想練什麼？</h2><p className="muted">依學校實際進度選擇，課本版本與考試範圍請再確認。</p><div className="subject-grid">{coursesData.subjects.map(s => <button key={s.id} aria-pressed={config.subject === s.id} className={config.subject === s.id ? 'active' : ''} onClick={() => change('subject', s.id)}><span>{s.emoji}</span>{s.shortName}</button>)}</div>
      <div className="setup-grid"><label>學期<select value={config.semester} onChange={e => change('semester',e.target.value)}><option value="6A">六年級上學期</option><option value="6B">六年級下學期</option></select></label><label>練習範圍<select value={config.scope} onChange={e => change('scope',e.target.value)}><option value="">全學期</option><option value="midterm">期中範圍</option><option value="final">期末範圍</option></select></label><label className="wide">單元<select value={config.unit} onChange={e => change('unit',e.target.value)}><option value="">所選範圍全部單元</option>{filteredUnits.map(u => <option key={u.id} value={u.id}>{u.title}</option>)}</select></label><label>練習方式<select value={config.mode} onChange={e => change('mode',e.target.value)}><option value="learn">觀念練習 · 每題看解析</option><option value="exam">模擬測驗 · 最後看解析</option><option value="review">錯題重練 · 所選範圍</option></select></label><label>題數<select value={config.count} onChange={e => change('count',Number(e.target.value))}>{[5,10,20].map(n => <option key={n} value={n}>{n} 題</option>)}</select></label></div><details className="concept-preview"><summary>📖 先暖身：{guide.title}</summary><ol>{guide.steps.map(step => <li key={step}>{step}</li>)}</ol><p>{guide.example}</p><p><b>容易混淆：</b>{guide.trap}</p>{config.unit && <p><b>這一單元要練：</b>{filteredUnits.find(u => u.id === config.unit)?.keyConcepts?.join('、')}</p>}<Link to={config.unit ? `/lesson/${config.unit}` : `/subject/${config.subject}`}>打開完整觀念教學 →</Link></details><div className="start-row"><span>{available ? `有 ${available} 題可練，本次 ${Math.min(available, config.count)} 題` : '這個範圍沒有可練的題目，試試其他範圍。'}</span><button className="studio-primary" disabled={!available} onClick={() => start()}>出發練習 <ArrowRight size={18}/></button></div></section>
      <aside className="studio-sidebar"><section className="studio-panel next-card"><span className="step-label">02 / 學會，比答對更重要</span><h2>你的學習小路線</h2><ol><li><b>讀懂觀念</b><span>先讀單元重點，回想解題方法。</span></li><li><b>自己試一題</b><span>先思考再作答，不用急著猜。</span></li><li><b>說說為什麼</b><span>讀解析，比較自己的想法。</span></li><li><b>隔天再來練</b><span>答對後隔 1、3、7、14 天安排回顧。</span></li></ol><Link to={`/subject/${config.subject}`} className="studio-textlink">先看這一科的教學 <BookOpen size={17}/></Link></section><section className="studio-tip"><Compass/><h3>不會的題目，是進步的起點</h3><p>這裡沒有扣愛心，也不需要比排名。連續答對兩次，就收下一枚熟練葉片。</p><small>熟練標記是練習參考，並非正式學力評量。</small></section></aside></div>
      <section className="studio-resources"><div><span className="step-label">03 / 換個方式，也能學會</span><h2>考前補給站</h2></div>{[['/exam-notes','📒','重點講義','把觀念串起來'],['/flashcards','🗂️','記憶閃卡','想起來，再翻答案'],['/labs','🔬','互動實驗','動手看懂自然'],['/learn-path','🌱','闖關學習','用遊戲練習觀念']].map(([url,emoji,title,desc]) => <Link key={url} to={url}><span>{emoji}</span><strong>{title}</strong><small>{desc}</small><ArrowRight size={16}/></Link>)}</section>
    </> : finished ? <section className="studio-panel result-panel"><span className="result-leaf">🌱</span><span className="step-label">今天又前進了一點</span><h1 tabIndex={-1} ref={heading}>完成 {answers.length} 題練習！</h1><p>答對 {answers.filter(a => a.correct).length} 題 · 正確率 {Math.round(answers.filter(a => a.correct).length / answers.length * 100)}%</p><p className="muted">先理解錯在哪裡，比急著刷下一回更有幫助。</p><div className="result-actions"><button className="studio-primary" onClick={() => { const qs = session.questions.filter((_,i) => !answers[i].correct); setSession({...session, questions: qs}); setAnswers([]); setIndex(0); setSelected(null); setHint(false); locked.current = false; }} disabled={answers.every(a => a.correct)}>再練本回錯題</button><button className="studio-secondary" onClick={() => setSession(null)}>回首頁選範圍</button></div>{session.questions.map((item,i) => <details key={item.key} className="result-detail"><summary>{answers[i]?.correct ? '✓' : '待複習'} · {item.question}</summary><p>你的答案：<MathText text={item.options[answers[i]?.selected]}/></p><p>正確答案：<MathText text={item.options[item.answerIndex]}/></p><MathText text={item.explanation}/><p><Link to={`/lesson/${item.unitId}`}>回單元教學 →</Link></p></details>)}</section> : <section className="practice-shell"><div className="practice-top"><button className="studio-secondary" onClick={() => setSession(null)}>暫停，回首頁</button><span>{session.mode === 'exam' ? '模擬測驗' : '觀念練習'} · 第 {index + 1} / {session.questions.length} 題</span></div><progress max={session.questions.length} value={index} aria-label="本回作答進度"/><div className="studio-panel question-panel"><span className="step-label">{units.find(u => u.id === q.unitId)?.title}</span><h1 tabIndex={-1} ref={heading}><MathText text={q.question}/></h1><p className="muted">選一個最合適的答案，再按「確認答案」。</p><div className="answer-grid" role="group" aria-label="答案選項">{q.options.map((o,i) => <button key={i} disabled={checked} aria-pressed={selected === i} onClick={() => setSelected(i)} className={`answer-option ${selected === i ? 'selected' : ''} ${checked && session.mode !== 'exam' && i === q.answerIndex ? 'correct' : ''} ${checked && session.mode !== 'exam' && selected === i && i !== q.answerIndex ? 'incorrect' : ''}`}><span>{'ABCD'[i]}</span><MathText text={o}/>{checked && session.mode !== 'exam' && i === q.answerIndex && <Check size={20}/>}</button>)}</div>{!checked && session.mode !== 'exam' && <><button className="studio-textlink hint-button" onClick={() => setHint(v => !v)} aria-expanded={hint}>💡 {hint ? '收起思考提醒' : '卡住了？看看思考提醒'}</button>{hint && <p className="hint-box">先找出題目「問什麼」，圈出已知條件；逐一檢查選項，留意「不是、只有、最」等字。如果還沒想起來，可以完成本題後回單元教學。</p>}</>}{checked && <div className="studio-feedback" role="status">{session.mode === 'exam' ? '已記錄答案。完成整回後一起看解析。' : <><h2>{answers[index].correct ? '想得很好！再確認一下理由。' : '沒關係，一起把這題弄懂。'}</h2><p>正確答案：{'ABCD'[q.answerIndex]} · <MathText text={q.options[q.answerIndex]}/></p><MathText text={q.explanation}/><p className="reflection">想一想：你原本怎麼判斷？下次可以注意哪個條件？</p><Link to={`/lesson/${q.unitId}`}>看這個單元的完整教學 →</Link></>}</div>}<div className="question-actions"><small>電腦可用 1–4 選答案 · 不限時間</small>{checked ? <button className="studio-primary" onClick={next}>{index + 1 === session.questions.length ? '看練習成果' : '下一題'} <ArrowRight size={18}/></button> : <button className="studio-primary" onClick={confirm} disabled={selected === null}>確認答案 <Check size={18}/></button>}</div></div></section>}
    <footer className="studio-footer"><span>小六練習室 · 好奇心，是最好的起點。</span><span>紀錄只儲存在此瀏覽器，清除瀏覽資料後會重設。</span></footer>
  </div>;
}
