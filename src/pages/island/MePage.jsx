import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Flame, RotateCcw, Sparkles, Star } from "lucide-react";
import { gardenLessons, gardenSubjects, subjectsForGrade } from "../../data/elementaryGarden.js";
import { lessonState, taipeiDay } from "../../utils/gardenEngine.js";
import { levelOf, STICKERS, streakOf } from "../../utils/islandGame.js";
import { useIsland } from "./IslandContext.jsx";
import { gradeNames, IslandScene, subjectById, subjectVars } from "./parts.jsx";

const DAY = 86400000;

function ActivityChart({ island }) {
  const [active, setActive] = useState(null);
  const now = Date.now();
  const days = Array.from({ length: 14 }, (_, i) => {
    const key = taipeiDay(now - (13 - i) * DAY);
    return { key, xp: island.days[key]?.xp || 0, answers: island.days[key]?.answers || 0 };
  });
  const max = Math.max(...days.map((d) => d.xp), 30);
  const W = 340;
  const H = 150;
  const base = 118;
  const bw = 15;
  const step = (W - 40) / 14;
  const shown = active === null ? null : days[active];
  return (
    <figure className="isl-chart">
      <figcaption>
        <b>最近 14 天的學習經驗</b>
        <span>{shown ? `${shown.key.slice(5)}：${shown.xp} 點，作答 ${shown.answers} 次` : `共 ${days.reduce((n, d) => n + d.xp, 0)} 點`}</span>
      </figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`最近 14 天每日經驗：${days.map((d) => `${d.key.slice(5)} ${d.xp} 點`).join("、")}`} onPointerLeave={() => setActive(null)}>
        {[0, 0.5, 1].map((t) => (
          <g key={t}>
            <path d={`M30 ${base - t * 100}H${W}`} stroke="#e1e6ee" strokeDasharray={t ? "3 4" : ""} />
            <text x="25" y={base - t * 100 + 4} fontSize="11" textAnchor="end" fill="#5c6a80">{Math.round(max * t)}</text>
          </g>
        ))}
        {days.map((d, i) => {
          const h = (d.xp / max) * 100;
          const x = 34 + i * step;
          return (
            <g key={d.key} onPointerEnter={() => setActive(i)} onPointerDown={() => setActive(i)}>
              <rect x={x - 3} y="10" width={step} height={base} fill="transparent" />
              {d.xp > 0 && <path d={`M${x} ${base}V${base - h + 4}q0 -4 4 -4H${x + bw - 4}q4 0 4 4V${base}z`} fill={active === i ? "#f4694f" : "#0c7c8a"} />}
              {i % 3 === 1 && <text x={x + bw / 2} y={base + 18} fontSize="11" textAnchor="middle" fill="#5c6a80">{d.key.slice(5).replace("-", "/")}</text>}
            </g>
          );
        })}
      </svg>
    </figure>
  );
}

export default function MePage() {
  const { island, progress, stats, setPref } = useIsland();
  const grade = island.grade || 3;
  const level = levelOf(island.xp);
  const streak = streakOf(island);
  useEffect(() => {
    document.title = "我的手札｜小小學習島";
  }, []);
  const states = useMemo(() => gardenLessons.map((l) => ({ lesson: l, state: lessonState(l, progress) })), [progress]);
  const due = states.filter((s) => s.state.due);
  const mistakes = states.filter((s) => s.state.mistakes && !s.state.due);
  const favoriteLessons = useMemo(
    () => gardenLessons.filter((l) => island.best?.[`like:${l.id}`] > 0),
    [island.best],
  );
  function downloadReport() {
    const lines = [
      ["年級", "領域", "課綱代碼", "主題", "練習狀態", "累積試答", "累積答對", "最早複習日期"],
      ...gardenLessons.map((l) => {
        const rs = l.questions.map((q) => progress.records[q.key]).filter(Boolean);
        return [`${l.grade}年級`, subjectById(l.subject).name, l.codes.join(" "), l.title, lessonState(l, progress).label, rs.reduce((n, r) => n + r.attempts, 0), rs.reduce((n, r) => n + r.correct, 0), rs.length ? taipeiDay(Math.min(...rs.map((r) => r.due))) : "尚未練習"];
      }),
    ];
    const csv = "﻿" + lines.map((row) => row.map((v) => `"${String(v).replaceAll('"', '""')}"`).join(",")).join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `學習島紀錄-${taipeiDay()}.csv`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <div className="isl-me">
      <section className="isl-me-hero">
        <IslandScene level={level.level} />
        <div>
          <h1>我的手札</h1>
          <p className="isl-level-name">Lv.{level.level} {level.name}</p>
          <div className="isl-xp" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(level.progress * 100)} aria-label="升級進度"><span style={{ width: `${level.progress * 100}%` }} /></div>
          <small>{level.next ? `再 ${level.toNext} 點解鎖${level.next.unlock}` : "所有建築都解鎖了！"}</small>
        </div>
      </section>
      <div className="isl-tiles">
        <div><Sparkles size={20} aria-hidden="true" /><b>{island.xp}</b><small>總經驗</small></div>
        <div><Flame size={20} aria-hidden="true" /><b>{streak}</b><small>連續天數</small></div>
        <div><RotateCcw size={20} aria-hidden="true" /><b>{stats.complete}</b><small>完成課數</small></div>
        <div><Star size={20} aria-hidden="true" /><b>{stats.mastered}</b><small>跨日複習</small></div>
      </div>

      {(due.length > 0 || mistakes.length > 0) && (
        <section className="isl-card" aria-labelledby="todo-title">
          <h2 id="todo-title">要回去看看的課</h2>
          <ul className="isl-todo">
            {[...due, ...mistakes].slice(0, 8).map(({ lesson, state }) => (
              <li key={lesson.id} style={subjectVars(subjectById(lesson.subject))}>
                <Link to={`/explore/${lesson.id}`}>
                  <span>{gradeNames[lesson.grade - 1]}年級 · {subjectById(lesson.subject).name}</span>
                  <b>{lesson.title}</b>
                  <em>{state.label}</em>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="isl-me-cols">
        <section className="isl-card"><ActivityChart island={island} /></section>
        <section className="isl-card" aria-labelledby="grade-prog">
          <h2 id="grade-prog">{gradeNames[grade - 1]}年級各科進度</h2>
          <ul className="isl-bars">
            {subjectsForGrade(grade).map((s) => {
              const list = states.filter((x) => x.lesson.grade === grade && x.lesson.subject === s.id);
              const done = list.filter((x) => x.state.complete).length;
              return (
                <li key={s.id} style={subjectVars(s)}>
                  <span>{s.name}</span>
                  <i><b style={{ width: `${(done / list.length) * 100}%` }} /></i>
                  <small>{done}/{list.length}</small>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      {favoriteLessons.length > 0 && (
        <section className="isl-card" aria-labelledby="fav-title">
          <div className="isl-card-head">
            <h2 id="fav-title">💖 我喜歡的主題</h2>
            <span>已收藏 {favoriteLessons.length} 課</span>
          </div>
          <ul className="isl-todo">
            {favoriteLessons.slice(0, 8).map((lesson) => (
              <li key={lesson.id} style={subjectVars(subjectById(lesson.subject))}>
                <Link to={`/explore/${lesson.id}`}>
                  <span>{gradeNames[lesson.grade - 1]}年級 · {subjectById(lesson.subject).name}</span>
                  <b>{lesson.title}</b>
                  <em>再回去探索</em>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="isl-card" aria-labelledby="sticker-title">
        <div className="isl-card-head">
          <h2 id="sticker-title">貼紙收藏</h2>
          <span>{Object.keys(island.stickers).length} / {STICKERS.length}</span>
        </div>
        <ul className="isl-stickers">
          {STICKERS.map((s) => {
            const got = island.stickers[s.id];
            return (
              <li key={s.id} className={got ? "got" : ""}>
                <span aria-hidden="true">{got ? s.emoji : "🔒"}</span>
                <b>{s.name}</b>
                <small>{s.how}</small>
                <span className="sr-only">{got ? "已獲得" : "尚未獲得"}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="isl-card" aria-labelledby="set-title">
        <h2 id="set-title">設定</h2>
        <p className="isl-set-row">我的年級</p>
        <div className="isl-map-grades" role="group" aria-label="選擇年級">
          {gradeNames.map((name, i) => (
            <button type="button" key={name} className={grade === i + 1 ? "on" : ""} aria-pressed={grade === i + 1} onClick={() => setPref("grade", i + 1)}>
              {name}<small>年級</small>
            </button>
          ))}
        </div>
        <div className="isl-me-actions">
          <button type="button" className="isl-btn-soft" onClick={downloadReport}><Download size={16} aria-hidden="true" /> 下載學習紀錄 CSV</button>
          <Link to="/guide" className="isl-btn-soft">給家長與老師</Link>
        </div>
        <small className="isl-set-note">
          紀錄只存在這個瀏覽器，共 {gardenLessons.length} 課、{gardenSubjects.length} 個領域。清除瀏覽資料會重設。完成＝題目都試答過，「已跨日複習」才表示隔日後再次答對。
        </small>
      </section>
    </div>
  );
}
