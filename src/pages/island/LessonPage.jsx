import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Heart, Lightbulb, RotateCcw, Sparkles, Target } from "lucide-react";
import ConceptPicture from "../../components/garden/ConceptPicture";
import { gardenLessons } from "../../data/elementaryGarden.js";
import { lessonState, taipeiDay } from "../../utils/gardenEngine.js";
import { useIsland } from "./IslandContext.jsx";
import { fireConfetti, gradeNames, QuestionCard, ReadAloud, Rich, subjectById, SubjectIcon, subjectVars } from "./parts.jsx";

export default function LessonPage({ lessonId }) {
  const lesson = gardenLessons.find((l) => l.id === lessonId);
  const { progress, island, answer, markRead, finishLesson, toggleLike } = useIsland();
  const liked = Boolean(lesson && island?.best?.[`like:${lesson.id}`]);
  const [step, setStep] = useState(0);
  const [results, setResults] = useState([]);
  const [earned, setEarned] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const heading = useRef(null);
  const wasComplete = useRef(lesson ? lessonState(lesson, progress).complete : false);
  const wasDue = useRef(lesson ? lessonState(lesson, progress).due : false);
  useEffect(() => {
    if (lesson) document.title = `${lesson.title}｜小小學習島`;
  }, [lesson]);
  useEffect(() => {
    if (step === 0 || (lesson && step === lesson.questions.length + 1)) heading.current?.focus();
  }, [step, lesson]);

  if (!lesson)
    return (
      <div className="isl-empty isl-missing">
        <h1>還沒有這個主題</h1>
        <p>回到地圖，選一個新的發現吧。</p>
        <Link to="/map" className="isl-btn">回學習地圖</Link>
      </div>
    );

  const subject = subjectById(lesson.subject);
  const total = lesson.questions.length;
  const isResult = step === total + 1;
  const siblings = gardenLessons.filter((l) => l.grade === lesson.grade && l.subject === lesson.subject);
  const nextLesson = siblings[siblings.findIndex((l) => l.id === lesson.id) + 1];
  const q = lesson.questions[step - 1];
  const dueAt = Math.min(...lesson.questions.map((x) => progress.records[x.key]?.due || Infinity));

  function begin() {
    markRead(lesson.id);
    setStep(1);
  }
  function onAnswered(correct) {
    const { xp } = answer(q, correct);
    setEarned((n) => n + xp);
    setResults((r) => [...r, correct]);
  }
  function onNext() {
    if (step === total) {
      finishLesson(!wasComplete.current, wasDue.current);
      if (!wasComplete.current) setEarned((n) => n + 10);
      wasComplete.current = true;
      wasDue.current = false;
      if (results.filter(Boolean).length >= Math.ceil(total / 2)) fireConfetti();
    }
    setStep(step + 1);
  }
  function retry() {
    setResults([]);
    setEarned(0);
    setAttempt((n) => n + 1);
    setStep(1);
  }

  return (
    <div className="isl-lesson" style={subjectVars(subject)}>
      <div className="isl-lesson-bar">
        <Link to={`/map?grade=${lesson.grade}&subject=${lesson.subject}`} className="isl-back" aria-label="回學習地圖">
          <ArrowLeft size={18} aria-hidden="true" />
          <span>地圖</span>
        </Link>
        <ol className="isl-steps" aria-label={`學習進度：第 ${step + 1} 步，共 ${total + 2} 步`}>
          {Array.from({ length: total + 2 }, (_, i) => (
            <li key={i} className={i < step ? "done" : i === step ? "now" : ""} />
          ))}
        </ol>
        {earned > 0 && <span className="isl-earned"><Sparkles size={14} aria-hidden="true" />+{earned}</span>}
      </div>

      {step === 0 && (
        <article className="isl-learn">
          <div className="isl-learn-text">
            <p className="isl-eyebrow">
              <SubjectIcon subject={subject} size={16} /> {gradeNames[lesson.grade - 1]}年級 {subject.name}
              {lesson.codes.length > 0 && <span className="isl-code"> · 課綱 {lesson.codes.join("、")}</span>}
            </p>
            <h1 ref={heading} tabIndex={-1}>{lesson.title}</h1>
            <p className="isl-goal"><Target size={18} aria-hidden="true" /> <span><Rich>{lesson.goal}</Rich></span></p>
            <ReadAloud id={`lesson-${lesson.id}`} text={`${lesson.title}。${lesson.goal}。${lesson.explanation}。提醒：${lesson.trap}。生活中的奇妙發現：${lesson.funFact || ""}`} label="聽這一課" />
            <p className="isl-explain"><Rich>{lesson.explanation}</Rich></p>
          </div>
          <div className="isl-learn-visual">
            <ConceptPicture lesson={lesson} />
          </div>
          <div className="isl-learn-notes">
            <table className="isl-summary">
              <caption>三個重點</caption>
              <tbody>
                {lesson.panels.map((p) => (
                  <tr key={p.label}>
                    <th scope="row">{p.label}</th>
                    <td><Rich>{p.value}</Rich></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="isl-trap">
              <Lightbulb size={22} aria-hidden="true" />
              <div>
                <h2>小心這裡</h2>
                <p><Rich>{lesson.trap}</Rich></p>
              </div>
            </div>
            {lesson.funFact && (
              <div className="isl-wonder">
                <div className="isl-wonder-head">
                  <h2>🌟 生活中的奇妙發現</h2>
                  <button
                    type="button"
                    className={`isl-like-btn${liked ? " liked" : ""}`}
                    aria-pressed={liked}
                    onClick={() => toggleLike(lesson.id)}
                  >
                    <Heart size={16} aria-hidden="true" />
                    <span>{liked ? "已喜歡這課" : "我喜歡這課"}</span>
                  </button>
                </div>
                <p><Rich>{lesson.funFact}</Rich></p>
              </div>
            )}
            {lesson.typeGuide?.length > 0 && (
              <div className="isl-type-guide">
                <h2>🎯 相關可能題型與破題祕笈</h2>
                <ul className="isl-type-list">
                  {lesson.typeGuide.map((item) => (
                    <li key={item.type}>
                      <b>{item.icon} {item.badge}</b>
                      <p><Rich>{item.tip}</Rich></p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="isl-learn-cta">
            <button type="button" className="isl-btn isl-btn-wide" onClick={begin}>
              我懂了，來挑戰 {total} 題 <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </article>
      )}

      {q && (
        <section className="isl-q-wrap" aria-label={`挑戰第 ${step} 題，共 ${total} 題`}>
          <QuestionCard
            key={`${q.key}-${attempt}`}
            question={q}
            onAnswered={onAnswered}
            onNext={onNext}
            nextLabel={step === total ? "看看收穫" : "下一題"}
            onBack={() => setStep(0)}
          />
        </section>
      )}

      {isResult && (
        <section className="isl-result">
          <div className="isl-result-burst" aria-hidden="true">{results.every(Boolean) ? "🌟" : results.some(Boolean) ? "🌱" : "💪"}</div>
          <h1 ref={heading} tabIndex={-1}>{results.every(Boolean) ? "全部答對，太棒了！" : results.some(Boolean) ? "又前進了一步！" : "勇敢試過就是進步！"}</h1>
          <p className="isl-result-score">答對 {results.filter(Boolean).length} / {total} 題 · 獲得 {earned} 點經驗</p>
          <ul className="isl-result-list">
            {lesson.questions.map((item, i) => (
              <li key={item.key} className={results[i] ? "good" : "again"}>
                {results[i] ? <Check size={18} aria-label="答對" /> : <RotateCcw size={18} aria-label="再想想" />}
                <div>
                  <b><Rich>{item.question}</Rich></b>
                  {!results[i] && <p><Rich>{item.explanation}</Rich></p>}
                </div>
              </li>
            ))}
          </ul>
          {Number.isFinite(dueAt) && (
            <p className="isl-due"><RotateCcw size={16} aria-hidden="true" /> 記憶會變淡，{taipeiDay(dueAt)} 回來複習可以得更多經驗。</p>
          )}
          <div className="isl-result-actions">
            {nextLesson ? (
              <Link to={`/explore/${nextLesson.id}`} className="isl-btn">下一課：{nextLesson.title} <ArrowRight size={18} aria-hidden="true" /></Link>
            ) : (
              <Link to={`/map?grade=${lesson.grade}&subject=${lesson.subject}`} className="isl-btn">回學習地圖</Link>
            )}
            <button type="button" className="isl-btn-soft" onClick={retry}><RotateCcw size={16} aria-hidden="true" /> 再練一次</button>
            <button type="button" className="isl-btn-soft" onClick={() => setStep(0)}>再看一次圖解</button>
          </div>
        </section>
      )}
    </div>
  );
}
