import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { gardenLessons, subjectsForGrade } from "../../data/elementaryGarden.js";
import { shuffled, streakOf } from "../../utils/islandGame.js";
import { useIsland } from "./IslandContext.jsx";
import { fireConfetti, gradeNames, QuestionCard, Rich, Ring, subjectById, SubjectIcon, subjectVars } from "./parts.jsx";

const LENGTHS = [5, 10, 20];
const QUESTION_TYPES = [
  { id: "all", name: "全部題型" },
  { id: "mcq", name: "🎯 選擇題" },
  { id: "tf", name: "⭕ 是非題" },
  { id: "num", name: "🔢 填數字" },
  { id: "ord", name: "🚂 順序題" },
  { id: "pair", name: "🃏 配對題" },
];

export default function CheckPage() {
  const { island, progress, answer, checkDone } = useIsland();
  const [grade, setGrade] = useState(island.grade || 3);
  const [subject, setSubject] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [length, setLength] = useState(10);
  const [run, setRun] = useState(null);
  const [index, setIndex] = useState(0);
  const [marks, setMarks] = useState([]);
  useEffect(() => {
    document.title = "小考檢查｜小小學習島";
  }, []);
  const subjects = subjectsForGrade(grade);

  function start() {
    const lessons = shuffled(gardenLessons.filter((l) => l.grade === grade && (subject === "all" || l.subject === subject)));
    const questions = [];
    for (let round = 0; questions.length < length && round < 4; round++) {
      for (const lesson of lessons) {
        if (questions.length === length) break;
        const pool = typeFilter === "all" ? lesson.questions : lesson.questions.filter((q) => q.type === typeFilter);
        const q = pool[round % pool.length];
        if (q && !questions.some((x) => x.q.key === q.key)) questions.push({ q, lesson });
      }
    }
    if (questions.length < length && typeFilter !== "all") {
      for (const lesson of lessons) {
        for (const q of lesson.questions) {
          if (questions.length === length) break;
          if (q.type === typeFilter && !questions.some((x) => x.q.key === q.key)) {
            questions.push({ q, lesson });
          }
        }
      }
    }
    setRun(shuffled(questions));
    setIndex(0);
    setMarks([]);
  }
  function onAnswered(correct) {
    answer(run[index].q, correct, { silent: true });
    setMarks((m) => [...m, correct]);
  }
  function onNext() {
    const nextIndex = index + 1;
    if (nextIndex === run.length) {
      const correct = [...marks].filter(Boolean).length;
      checkDone({ time: Date.now(), grade, subject, total: run.length, correct });
      if (correct / run.length >= 0.8) fireConfetti();
    }
    setIndex(nextIndex);
  }

  if (run && index < run.length) {
    const item = run[index];
    return (
      <div className="isl-check">
        <div className="isl-check-bar" role="progressbar" aria-label="小考進度" aria-valuemin={0} aria-valuemax={run.length} aria-valuenow={index}>
          <span style={{ width: `${(index / run.length) * 100}%` }} />
        </div>
        <p className="isl-check-count" style={subjectVars(subjectById(item.lesson.subject))}>
          第 {index + 1} / {run.length} 題 · {subjectById(item.lesson.subject).name}
        </p>
        <QuestionCard key={`${item.q.key}-${index}`} question={item.q} testMode onAnswered={onAnswered} onNext={onNext} />
        <p className="isl-check-note">小考不會馬上公布答案，全部做完再一起看。</p>
      </div>
    );
  }

  if (run) {
    const correct = marks.filter(Boolean).length;
    const pct = Math.round((correct / run.length) * 100);
    const wrong = run.filter((_, i) => !marks[i]);
    const bySubject = {};
    run.forEach((item, i) => {
      const s = (bySubject[item.lesson.subject] ||= { total: 0, correct: 0 });
      s.total++;
      if (marks[i]) s.correct++;
    });
    const typeLabels = {
      mcq: "🎯 選擇題",
      tf: "⭕ 是非題",
      num: "🔢 填數字",
      ord: "🚂 順序題",
      pair: "🃏 配對題",
    };
    const byType = {};
    run.forEach((item, i) => {
      const t = (byType[item.q.type] ||= { total: 0, correct: 0 });
      t.total++;
      if (marks[i]) t.correct++;
    });
    const message = pct >= 90 ? "這個範圍你很熟了！" : pct >= 60 ? "基礎不錯，把錯的補起來就更穩了。" : "沒關係，這正是知道要學什麼的好機會。";
    return (
      <div className="isl-report">
        <div className="isl-report-top">
          <Ring value={correct} max={run.length} size={120} stroke={12} color="#0c7c8a" label={`答對 ${correct}／${run.length}`}>
            <b className="isl-report-num">{correct}<small>/{run.length}</small></b>
          </Ring>
          <div>
            <h1>小考完成！</h1>
            <p>{message}</p>
            <small>這是幫助學習的小檢查，不是正式成績或學力認證。</small>
          </div>
        </div>
        <section className="isl-card" aria-labelledby="by-subject">
          <h2 id="by-subject">各科答對情況</h2>
          <ul className="isl-bars">
            {Object.entries(bySubject).map(([id, s]) => {
              const sub = subjectById(id);
              return (
                <li key={id} style={subjectVars(sub)}>
                  <span>{sub.name}</span>
                  <i><b style={{ width: `${(s.correct / s.total) * 100}%` }} /></i>
                  <small>{s.correct}/{s.total}</small>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="isl-card" aria-labelledby="by-type">
          <h2 id="by-type">題型掌握度分析</h2>
          <ul className="isl-bars">
            {Object.entries(byType).map(([tid, t]) => (
              <li key={tid}>
                <span>{typeLabels[tid] || tid}</span>
                <i><b style={{ width: `${(t.correct / t.total) * 100}%` }} /></i>
                <small>{t.correct}/{t.total}</small>
              </li>
            ))}
          </ul>
        </section>
        {wrong.length > 0 ? (
          <section className="isl-card" aria-labelledby="fix-title">
            <h2 id="fix-title">把這些補起來</h2>
            <ul className="isl-fix">
              {wrong.map(({ q, lesson }) => (
                <li key={q.key} style={subjectVars(subjectById(lesson.subject))}>
                  <b><Rich>{q.question}</Rich></b>
                  <p>正確答案：<Rich>{q.type === "mcq" ? q.options[q.answerIndex] : q.options[0]}</Rich></p>
                  <p><Rich>{q.explanation}</Rich></p>
                  <Link to={`/explore/${lesson.id}`}>學這一課：{lesson.title} <ArrowRight size={15} aria-hidden="true" /></Link>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <p className="isl-perfect"><CheckCircle2 size={20} aria-hidden="true" /> 全部答對！隔幾天再考一次，看看記不記得。</p>
        )}
        <div className="isl-result-actions">
          <button type="button" className="isl-btn" onClick={() => setRun(null)}><RotateCcw size={16} aria-hidden="true" /> 再考一次</button>
          <Link to="/map" className="isl-btn-soft">回學習地圖</Link>
        </div>
      </div>
    );
  }

  const history = [...island.checks].reverse().slice(0, 5);
  return (
    <div className="isl-check-setup">
      <h1>小考檢查</h1>
      <p className="isl-lead">學了一段時間，來看看哪裡熟、哪裡要加強。做完有各科分析和要補的課。</p>
      <div className="isl-card isl-form">
        <h2>年級</h2>
        <div className="isl-map-grades" role="group" aria-label="選擇年級">
          {gradeNames.map((name, i) => (
            <button type="button" key={name} className={grade === i + 1 ? "on" : ""} aria-pressed={grade === i + 1} onClick={() => { setGrade(i + 1); setSubject("all"); }}>
              {name}<small>年級</small>
            </button>
          ))}
        </div>
        <h2>範圍</h2>
        <div className="isl-chips" role="group" aria-label="選擇科目">
          <button type="button" className={subject === "all" ? "on" : ""} aria-pressed={subject === "all"} onClick={() => setSubject("all")}>全部科目</button>
          {subjects.map((s) => (
            <button type="button" key={s.id} className={subject === s.id ? "on" : ""} style={subjectVars(s)} aria-pressed={subject === s.id} onClick={() => setSubject(s.id)}>
              <SubjectIcon subject={s} size={16} />{s.name}
            </button>
          ))}
        </div>
        <h2>題型焦點</h2>
        <div className="isl-chips" role="group" aria-label="選擇題型焦點">
          {QUESTION_TYPES.map((t) => (
            <button
              type="button"
              key={t.id}
              className={typeFilter === t.id ? "on" : ""}
              aria-pressed={typeFilter === t.id}
              onClick={() => setTypeFilter(t.id)}
            >
              {t.name}
            </button>
          ))}
        </div>
        <h2>題數</h2>
        <div className="isl-chips" role="group" aria-label="選擇題數">
          {LENGTHS.map((n) => (
            <button type="button" key={n} className={length === n ? "on" : ""} aria-pressed={length === n} onClick={() => setLength(n)}>{n} 題</button>
          ))}
        </div>
        <button type="button" className="isl-btn isl-btn-wide" onClick={start}>開始小考 <ArrowRight size={18} aria-hidden="true" /></button>
      </div>
      {history.length > 0 && (
        <section className="isl-card" aria-labelledby="history-title">
          <h2 id="history-title">最近的小考</h2>
          <ul className="isl-history">
            {history.map((c) => (
              <li key={c.time}>
                <span>{gradeNames[c.grade - 1]}年級 · {c.subject === "all" ? "全部科目" : subjectById(c.subject)?.name}</span>
                <b>{c.correct}/{c.total}</b>
              </li>
            ))}
          </ul>
        </section>
      )}
      {streakOf(island) === 0 && !history.length && <p className="isl-check-note">還沒學過也可以考，答錯的題目會變成你的學習清單。</p>}
      {Object.keys(progress.records).length > 0 && <p className="isl-check-note">小考作答也會記入你的複習排程。</p>}
    </div>
  );
}
