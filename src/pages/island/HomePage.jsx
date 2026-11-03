import { useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Check, Flame, RotateCcw, Search } from "lucide-react";
import { gardenLessons, subjectsForGrade } from "../../data/elementaryGarden.js";
import { lessonState, recommendLesson, taipeiDay } from "../../utils/gardenEngine.js";
import { DAILY_GOAL, levelOf, questsOf, streakOf } from "../../utils/islandGame.js";
import { useIsland } from "./IslandContext.jsx";
import { gradeNames, IslandScene, Ring, subjectById, SubjectIcon, subjectVars } from "./parts.jsx";

const games = [
  ["/games/rocket", "🚀", "火箭速算"],
  ["/games/match", "🃏", "翻牌配對"],
  ["/games/sort", "🗂️", "分類島"],
  ["/games/boss", "🏆", "島主挑戰"],
];

function GradePicker({ grade, onPick, big }) {
  return (
    <div className={`isl-grades ${big ? "big" : ""}`} role="group" aria-label="選擇年級">
      {gradeNames.map((name, i) => (
        <button type="button" key={name} className={grade === i + 1 ? "on" : ""} aria-pressed={grade === i + 1} onClick={() => onPick(i + 1)}>
          <b>{name}</b>
          <small>年級</small>
        </button>
      ))}
    </div>
  );
}

export default function HomePage() {
  const { island, progress, setPref } = useIsland();
  const [params, setParams] = useSearchParams();
  const asked = Number(params.get("grade"));
  useEffect(() => {
    document.title = "小小學習島｜108 課綱圖解、遊戲與評量";
  }, []);
  useEffect(() => {
    if (asked >= 1 && asked <= 6 && Number.isInteger(asked) && asked !== island.grade) setPref("grade", asked);
  }, [asked, island.grade, setPref]);
  const grade = island.grade;
  const lessons = useMemo(() => gardenLessons.filter((l) => l.grade === grade), [grade]);
  const level = levelOf(island.xp);
  const streak = streakOf(island);
  const today = island.days[taipeiDay()] || { xp: 0 };
  const quests = questsOf(island);

  if (!grade)
    return (
      <div className="isl-welcome">
        <IslandScene level={2} />
        <h1>歡迎來到小小學習島！</h1>
        <p>看圖學觀念、玩遊戲練習，每天長大一點點。先告訴我：</p>
        <h2>你現在幾年級？</h2>
        <GradePicker grade={0} big onPick={(n) => setPref("grade", n)} />
        <small>之後隨時可以換，也能去看其他年級。</small>
      </div>
    );

  const next = recommendLesson(lessons, progress);
  const nextState = lessonState(next, progress);
  const nextSubject = subjectById(next.subject);
  const due = lessons.filter((l) => lessonState(l, progress).due);
  const completed = lessons.filter((l) => lessonState(l, progress).complete).length;

  return (
    <div className="isl-home">
      <section className="isl-hero" aria-labelledby="home-title">
        <IslandScene level={level.level} />
        <div className="isl-hero-info">
          <h1 id="home-title">{gradeNames[grade - 1]}年級的探險家，你好！</h1>
          <p className="isl-level-name">Lv.{level.level} {level.name}</p>
          <div className="isl-xp" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(level.progress * 100)} aria-label="升級進度">
            <span style={{ width: `${level.progress * 100}%` }} />
          </div>
          <small>{level.next ? `再 ${level.toNext} 點，小島會多一個${level.next.unlock}` : "你已經是學習島主了！"}</small>
        </div>
      </section>

      <section className="isl-next" style={subjectVars(nextSubject)} aria-labelledby="next-title">
        <span className="isl-subject-badge"><SubjectIcon subject={nextSubject} size={26} /></span>
        <div>
          <p className="isl-eyebrow">{nextState.due ? "到時間複習了" : nextState.started ? "接著學" : "下一站"} · {nextSubject.name}</p>
          <h2 id="next-title">{next.title}</h2>
          <p>{next.goal}</p>
        </div>
        <Link to={`/explore/${next.id}`} className="isl-btn isl-btn-wide">
          出發 <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </section>

      <div className="isl-home-cols">
        <section className="isl-card isl-today" aria-labelledby="today-title">
          <div className="isl-today-head">
            <Ring value={today.xp} max={DAILY_GOAL} size={68} color="#0c7c8a" label={`今日經驗 ${today.xp}／${DAILY_GOAL}`}>
              <b>{Math.min(today.xp, 99)}</b>
            </Ring>
            <div>
              <h2 id="today-title">今日任務</h2>
              <p className="isl-streak"><Flame size={15} aria-hidden="true" /> 連續 {streak} 天 · 休息一天不會中斷</p>
            </div>
          </div>
          <ul className="isl-quests">
            {quests.map((q) => (
              <li key={q.id} className={q.done ? "done" : ""}>
                <Link to={q.to}>
                  <span className="isl-quest-icon" aria-hidden="true">{q.done ? <Check size={18} /> : q.icon}</span>
                  <span>{q.label}{q.max ? ` (${q.value}/${q.max})` : ""}</span>
                  <span className="sr-only">{q.done ? "已完成" : "尚未完成"}</span>
                </Link>
              </li>
            ))}
          </ul>
          {due.length > 0 && (
            <Link to={`/explore/${due[0].id}`} className="isl-review-link">
              <RotateCcw size={16} aria-hidden="true" /> {due.length} 課等你回來複習
            </Link>
          )}
        </section>

        <section className="isl-card" aria-labelledby="game-title">
          <div className="isl-card-head">
            <h2 id="game-title">玩一下再出發</h2>
            <Link to="/games">全部遊戲 <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
          <div className="isl-game-mini">
            {games.map(([to, emoji, name]) => (
              <Link key={to} to={to}>
                <span aria-hidden="true">{emoji}</span>
                {name}
              </Link>
            ))}
          </div>
        </section>
      </div>

      <section aria-labelledby="sub-title">
        <div className="isl-section-head">
          <h2 id="sub-title">{gradeNames[grade - 1]}年級的小島</h2>
          <span>{completed} / {lessons.length} 課</span>
        </div>
        <GradePicker grade={grade} onPick={(n) => { setPref("grade", n); setParams({}, { replace: true }); }} />
        <div className="isl-subjects">
          {subjectsForGrade(grade).map((s) => {
            const list = lessons.filter((l) => l.subject === s.id);
            const done = list.filter((l) => lessonState(l, progress).complete).length;
            return (
              <Link key={s.id} to={`/map?grade=${grade}&subject=${s.id}`} className="isl-subject" style={subjectVars(s)}>
                <Ring value={done} max={list.length} size={58} label={`${s.name}完成 ${done}／${list.length}`}>
                  <SubjectIcon subject={s} size={24} />
                </Ring>
                <b>{s.name}</b>
                <small>{done}/{list.length} 課</small>
              </Link>
            );
          })}
        </div>
        <Link to="/map" className="isl-search-link">
          <Search size={18} aria-hidden="true" /> 用課本單元名稱找課（康軒、南一、翰林等都適用）
        </Link>
      </section>

      <section className="isl-more" aria-label="更多學習工具">
        <Link to="/check"><span aria-hidden="true">📝</span><b>小考檢查</b><small>看看哪裡要加強</small></Link>
        {grade === 6 && <Link to="/practice"><span aria-hidden="true">🎓</span><b>小六練習室</b><small>64 單元與題庫</small></Link>}
        {grade === 6 && <Link to="/exam-notes"><span aria-hidden="true">📒</span><b>段考講義</b><small>可下載列印</small></Link>}
        <Link to="/labs"><span aria-hidden="true">🔬</span><b>互動實驗</b><small>動手驗證想法</small></Link>
        <Link to="/flashcards"><span aria-hidden="true">🗂️</span><b>記憶閃卡</b><small>先回想再翻面</small></Link>
      </section>
    </div>
  );
}
