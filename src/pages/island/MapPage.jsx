import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Check, ChevronRight, RotateCcw, Search, Star, X } from "lucide-react";
import { gardenLessons, subjectsForGrade } from "../../data/elementaryGarden.js";
import { lessonState, recommendLesson } from "../../utils/gardenEngine.js";
import { useIsland } from "./IslandContext.jsx";
import { gradeNames, subjectById, SubjectIcon, subjectVars } from "./parts.jsx";

const haystack = (l) =>
  `${l.title} ${l.goal} ${l.keywords} ${l.explanation} ${l.funFact || ""} ${l.typeGuide || ""} ${l.codes.join(" ")} ${subjectById(l.subject).name}`.toLowerCase();

const QUICK_TAGS = [
  { label: "🧮 分數小數", val: "分數" },
  { label: "📐 幾何面積", val: "面積" },
  { label: "🌱 動植物生態", val: "生物" },
  { label: "⛅ 天氣水循環", val: "天氣" },
  { label: "📖 閱讀成語", val: "成語" },
  { label: "🗣️ 生活英語", val: "英語" },
  { label: "🎨 藝術童謠", val: "音樂" },
  { label: "🦺 防災安全", val: "安全" },
];

function Station({ lesson, progress, isNext, showGrade, isFavorite }) {
  const state = lessonState(lesson, progress);
  const subject = subjectById(lesson.subject);
  const node = state.mastered ? <Star size={18} fill="currentColor" aria-hidden="true" /> : state.due ? <RotateCcw size={17} aria-hidden="true" /> : state.complete ? <Check size={19} aria-hidden="true" /> : <SubjectIcon subject={subject} size={18} />;
  return (
    <li className={`isl-station ${state.complete ? "done" : ""} ${isNext ? "next" : ""}`} style={subjectVars(subject)}>
      <span className="isl-node">{node}</span>
      <Link to={`/explore/${lesson.id}`} className="isl-station-card">
        <span className="isl-station-text">
          <b>
            {lesson.title}
            {isFavorite && <span className="isl-fav-heart" title="已收藏的主題" aria-label="已收藏的主題"> 💖</span>}
          </b>
          <small>{lesson.goal}</small>
          <span className="isl-station-meta">
            {showGrade && <em>{gradeNames[lesson.grade - 1]}年級</em>}
            {lesson.codes[0] && <em>{lesson.codes[0]}</em>}
            <em>{lesson.minutes} 分鐘</em>
            {isNext && <em className="hot">下一站</em>}
            {(state.due || state.complete) && <em className={state.due ? "hot" : ""}>{state.label}</em>}
          </span>
        </span>
        <ChevronRight size={20} aria-hidden="true" />
      </Link>
    </li>
  );
}

export default function MapPage() {
  const { island, progress, setPref } = useIsland();
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const urlGrade = Number(params.get("grade"));
  const grade = urlGrade >= 1 && urlGrade <= 6 ? urlGrade : island.grade || 3;
  const subjects = subjectsForGrade(grade);
  const urlSubject = params.get("subject");
  const subject = subjects.some((s) => s.id === urlSubject) ? urlSubject : subjects[0].id;
  useEffect(() => {
    document.title = "學習地圖｜小小學習島";
  }, []);
  const go = (g, s) => setParams({ grade: String(g), subject: s }, { replace: true });
  const q = query.trim().toLowerCase();
  const results = useMemo(() => (q ? gardenLessons.filter((l) => q.split(/\s+/).every((word) => haystack(l).includes(word))).slice(0, 40) : []), [q]);
  const lessons = gardenLessons.filter((l) => l.grade === grade && l.subject === subject);
  const next = recommendLesson(lessons, progress);
  const done = lessons.filter((l) => lessonState(l, progress).complete).length;
  const current = subjectById(subject);

  return (
    <div className="isl-map">
      <h1>學習地圖</h1>
      <label className="isl-searchbox">
        <Search size={20} aria-hidden="true" />
        <span className="sr-only">搜尋課程或課本單元</span>
        <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="輸入課本單元，例如：分數、光合作用" />
        {query && (
          <button type="button" aria-label="清除搜尋" onClick={() => setQuery("")}><X size={18} aria-hidden="true" /></button>
        )}
      </label>
      <div className="isl-search-tags" role="group" aria-label="熱門探索主題">
        <span className="isl-search-tags-label">熱門探索：</span>
        {QUICK_TAGS.map((t) => (
          <button
            type="button"
            key={t.val}
            className={`isl-tag-pill ${query === t.val ? "on" : ""}`}
            onClick={() => setQuery(query === t.val ? "" : t.val)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {q ? (
        <section aria-live="polite">
          <p className="isl-map-count">找到 {results.length} 課{results.length === 40 ? "以上" : ""}</p>
          {results.length ? (
            <ol className="isl-path is-search">
              {results.map((l) => (
                <Station
                  key={l.id}
                  lesson={l}
                  progress={progress}
                  showGrade
                  isFavorite={Boolean(island.best?.[`like:${l.id}`])}
                />
              ))}
            </ol>
          ) : (
            <div className="isl-empty">
              <p>沒找到「{query}」。可以換個關鍵字，例如把單元名稱縮短。</p>
              <p>課本版本的單元名稱不同時，用裡面的觀念來找最快。</p>
            </div>
          )}
        </section>
      ) : (
        <>
          <div className="isl-map-grades" role="group" aria-label="選擇年級">
            {gradeNames.map((name, i) => (
              <button type="button" key={name} className={grade === i + 1 ? "on" : ""} aria-pressed={grade === i + 1} onClick={() => { go(i + 1, subject); if (island.grade === 0) setPref("grade", i + 1); }}>
                {name}<small>年級</small>
              </button>
            ))}
          </div>
          <div className="isl-chips" role="group" aria-label="選擇科目">
            {subjects.map((s) => (
              <button type="button" key={s.id} className={subject === s.id ? "on" : ""} style={subjectVars(s)} aria-pressed={subject === s.id} onClick={() => go(grade, s.id)}>
                <SubjectIcon subject={s} size={17} />
                {s.name}
              </button>
            ))}
          </div>
          <div className="isl-map-head" style={subjectVars(current)}>
            <div>
              <h2>{gradeNames[grade - 1]}年級 · {current.name}</h2>
              <p>{current.motto}</p>
            </div>
            <span>{done}/{lessons.length}</span>
          </div>
          <ol className="isl-path">
            {lessons.map((l) => (
              <Station
                key={l.id}
                lesson={l}
                progress={progress}
                isNext={l.id === next.id && !lessonState(l, progress).complete}
                isFavorite={Boolean(island.best?.[`like:${l.id}`])}
              />
            ))}
          </ol>
          {grade === 6 && (
            <Link to={`/subject/${subject}`} className="isl-search-link">想學更深入？到小六完整教材 <ChevronRight size={16} aria-hidden="true" /></Link>
          )}
        </>
      )}
    </div>
  );
}
