import { useEffect, useRef, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calculator,
  Check,
  CheckCircle2,
  ChevronRight,
  Compass,
  Download,
  FlaskConical,
  Globe2,
  HeartPulse,
  Languages,
  Leaf,
  Lightbulb,
  Map,
  Palette,
  RotateCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Sprout,
  Trophy,
  Volume2,
  X,
} from "lucide-react";
import {
  gardenLessons,
  gardenSubjects,
  subjectsForGrade,
  curriculumSources,
} from "../data/elementaryGarden.js";
import {
  readGarden,
  saveGarden,
  recordGardenAnswer,
  lessonState,
  recommendLesson,
  taipeiDay,
} from "../utils/gardenEngine.js";
import { speechEngine } from "../utils/speechHelper.js";
import ConceptPicture from "../components/garden/ConceptPicture";
import "./LearningGarden.css";

const icons = {
  Calculator,
  BookOpen,
  Sprout,
  FlaskConical,
  Globe2,
  Languages,
  Palette,
  HeartPulse,
  Compass,
};
const gradeNames = ["一", "二", "三", "四", "五", "六"];
const versions = ["共同知識點", "康軒", "南一", "翰林", "何嘉仁／其他"];
function SubjectIcon({ subject, size = 24 }) {
  const Icon = icons[subject?.icon] || Sprout;
  return <Icon size={size} strokeWidth={1.8} />;
}
function scrollToId(id) {
  document
    .getElementById(id)
    ?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
}
function Header({ large, setLarge }) {
  return (
    <header className="garden-header">
      <Link to="/" className="garden-brand">
        <span>
          <Sprout size={26} />
        </span>
        <div>
          小小學習島<small>SIXTH · 好奇心的練習場</small>
        </div>
      </Link>
      <nav aria-label="主要導覽">
        <Link to="/" className="island-nav">
          <Map size={17} />
          探索小島
        </Link>
        <Link to="/practice">
          小六練習室 <ArrowRight size={15} />
        </Link>
        <button
          className="garden-font"
          aria-pressed={large}
          onClick={() => setLarge((v) => !v)}
          aria-label={large ? "使用標準字級" : "放大閱讀字級"}
        >
          Aa<span>{large ? "標準" : "放大"}</span>
        </button>
      </nav>
    </header>
  );
}
function IslandArt() {
  return (
    <div className="island-art" aria-hidden="true">
      <span className="island-art-note">
        <Sparkles size={15} />
        今天的冒險，由你決定
      </span>
      <svg viewBox="0 0 480 330" fill="none">
        <ellipse cx="243" cy="285" rx="191" ry="24" fill="#e3e9d9" />
        <path
          d="M69 242C50 204 91 153 154 166C187 131 242 150 261 173C294 145 365 160 386 191C423 204 408 260 373 270C296 300 125 289 69 242Z"
          fill="#cad9ae"
        />
        <path
          d="M70 222C49 184 94 135 155 149C188 114 243 133 261 156C297 128 364 143 385 174C422 187 407 243 372 253C295 283 125 272 70 222Z"
          fill="#e3edcc"
          stroke="#adc58d"
          strokeWidth="2"
        />
        <path
          d="M135 222C158 217 191 229 216 211C241 194 225 176 250 167C274 158 297 182 322 180"
          stroke="#fffdf2"
          strokeWidth="20"
          strokeLinecap="round"
        />
        <path
          d="M135 222C158 217 191 229 216 211C241 194 225 176 250 167C274 158 297 182 322 180"
          stroke="#c6c49a"
          strokeWidth="2"
          strokeDasharray="4 7"
        />
        <path
          d="M141 201V139"
          stroke="#7c6647"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M140 158C99 163 92 122 107 113C105 80 144 70 158 94C197 89 201 135 175 147C163 162 153 165 140 158Z"
          fill="#6b956b"
        />
        <path
          d="M139 142L122 124M141 132L162 112"
          stroke="#42734d"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M295 146V94L328 107L295 121" fill="#e2aa5d" />
        <path
          d="M295 153V93"
          stroke="#8b774c"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <rect
          x="274"
          y="147"
          width="44"
          height="31"
          rx="6"
          fill="#f4c67e"
          stroke="#9b763c"
          strokeWidth="2"
        />
        <path d="M274 158H318" stroke="#9b763c" strokeWidth="2" />
        <rect
          x="291"
          y="154"
          width="9"
          height="10"
          rx="2"
          fill="#fff6cf"
          stroke="#9b763c"
        />
        <circle cx="208" cy="221" r="18" fill="#34745a" />
        <path
          d="M200 221L206 227L217 215"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M346 208C336 198 325 208 334 216L346 226L358 215C367 206 353 198 346 208Z"
          fill="#cf8c79"
        />
        <path
          d="M190 95L192 84L196 95L206 98L196 101L193 112L189 101L179 98Z"
          fill="#d5a75d"
        />
        <circle cx="352" cy="78" r="23" fill="#f5d999" />
        <path
          d="M66 107C66 94 83 89 91 99C100 88 118 96 115 109H66Z"
          fill="#fffdf3"
          stroke="#dae0ce"
        />
        <path
          d="M365 129C366 117 382 114 389 124C398 119 407 125 406 133H365Z"
          fill="#fffdf3"
        />
        <path
          d="M119 239L124 227L130 239M366 239L372 225L379 238"
          stroke="#7e9b63"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="island-label island-label-a">
        <BookOpen size={16} />
        讀懂一個觀念
      </span>
      <span className="island-label island-label-b">
        <CheckCircle2 size={16} />
        收下一點進步
      </span>
      <span className="island-art-caption">
        不必一下子學會全部，先發現一點點。
      </span>
    </div>
  );
}
function Footer() {
  return (
    <footer className="garden-footer">
      <Link to="/" className="footer-brand">
        <Sprout size={20} />
        小小學習島
      </Link>
      <p>每個孩子，都有自己的成長步調。</p>
      <small>免登入 · 紀錄只留在這個瀏覽器 · 清除瀏覽資料會重設紀錄</small>
    </footer>
  );
}

export default function LearningGarden() {
  const [params, setParams] = useSearchParams();
  const [progress, setProgress] = useState(readGarden);
  const [grade, setGrade] = useState(() => {
    const n = Number(params.get("grade"));
    return n >= 1 && n <= 6 && Number.isInteger(n) ? n : 6;
  });
  const [subject, setSubject] = useState("all");
  const [query, setQuery] = useState("");
  const [version, setVersion] = useState("共同知識點");
  const [large, setLarge] = useState(false);
  const [onlyReview, setOnlyReview] = useState(false);
  const currentLessons = gardenLessons.filter((l) => l.grade === grade);
  const subjects = subjectsForGrade(grade);
  const visible = currentLessons.filter(
    (l) =>
      (subject === "all" || l.subject === subject) &&
      (!onlyReview ||
        lessonState(l, progress).due ||
        lessonState(l, progress).mistakes) &&
      `${l.title} ${l.goal} ${l.explanation} ${gardenSubjects.find((s) => s.id === l.subject).name}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const recommended = recommendLesson(currentLessons, progress);
  const completed = currentLessons.filter(
    (l) => lessonState(l, progress).complete,
  ).length;
  const due = currentLessons.filter((l) => lessonState(l, progress).due).length;
  const reviewCount = currentLessons.filter((l) => {
    const s = lessonState(l, progress);
    return s.due || s.mistakes;
  }).length;
  const todayKeys = progress.days[taipeiDay()] || [];
  const readToday = Object.values(progress.reads).some(
    (time) => taipeiDay(time) === taipeiDay(),
  );
  const recalledToday = gardenLessons.some((l) =>
    todayKeys.includes(l.questions[0].key),
  );
  const appliedToday = gardenLessons.some((l) =>
    todayKeys.includes(l.questions[1].key),
  );
  const totalComplete = gardenLessons.filter(
    (l) => lessonState(l, progress).complete,
  ).length;
  const anyMastered = gardenLessons.some(
    (l) => lessonState(l, progress).mastered,
  );
  useEffect(() => {
    const sync = () => setProgress(readGarden());
    window.addEventListener("storage", sync);
    window.addEventListener("focus", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("focus", sync);
    };
  }, []);
  useEffect(() => {
    document.title = "小小學習島｜108 課綱圖解探索與快樂練習";
  }, []);
  // Keep grade links and browser Back in sync without clearing local search choices.
  useEffect(() => {
    const n = Number(params.get("grade"));
    if (n >= 1 && n <= 6 && Number.isInteger(n)) {
      setGrade(n);
      setSubject("all");
    }
  }, [params]);
  function chooseGrade(n) {
    setGrade(n);
    setSubject("all");
    setOnlyReview(false);
    setQuery("");
    setParams({ grade: String(n) }, { replace: true });
  }
  function downloadReport() {
    const lines = [
      [
        "年級",
        "領域",
        "主題",
        "練習狀態",
        "累積試答",
        "累積答對",
        "最早複習日期",
      ],
      ...gardenLessons.map((l) => {
        const rs = l.questions
          .map((q) => progress.records[q.key])
          .filter(Boolean);
        return [
          `${l.grade}年級`,
          gardenSubjects.find((s) => s.id === l.subject).name,
          l.title,
          lessonState(l, progress).label,
          rs.reduce((n, r) => n + r.attempts, 0),
          rs.reduce((n, r) => n + r.correct, 0),
          rs.length ? taipeiDay(Math.min(...rs.map((r) => r.due))) : "尚未練習",
        ];
      }),
    ];
    const csv =
      "\uFEFF" +
      lines
        .map((row) =>
          row.map((v) => `"${String(v).replaceAll('"', '""')}"`).join(","),
        )
        .join("\r\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8;" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = `學習島紀錄-${taipeiDay()}.csv`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <div className={`garden ${large ? "garden-large" : ""}`}>
      <a
        className="garden-skip"
        href="#garden-main"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("garden-main")?.focus();
        }}
      >
        跳到主要內容
      </a>
      <div className="garden-wrap">
        <Header large={large} setLarge={setLarge} />
        <main id="garden-main" tabIndex={-1}>
          <section className="garden-hero">
            <div className="garden-hero-copy">
              <div className="garden-eyebrow">
                <span />
                給好奇的你，一座學習小島
              </div>
              <h1>
                把「我不會」，
                <br />
                慢慢變成<span>「我懂了！」</span>
              </h1>
              <p>
                看圖發現、動手試試，再用小挑戰練會觀念。
                <br />
                每天一小步，學習也可以很好玩。
              </p>
              <div className="hero-buttons">
                <button
                  className="garden-primary"
                  onClick={() => scrollToId("island-explore")}
                >
                  開始我的探索 <ArrowRight size={18} />
                </button>
                <Link className="garden-quiet" to="/practice">
                  前往小六練習室 <ChevronRight size={16} />
                </Link>
              </div>
              <div className="hero-trust">
                <ShieldCheck size={15} />
                免登入、無廣告，安心照自己的步調學
              </div>
            </div>
            <IslandArt />
          </section>
          <section className="daily-trail" aria-labelledby="daily-title">
            <div className="daily-heading">
              <span className="daily-icon">
                <Leaf size={24} />
              </span>
              <div>
                <span className="garden-kicker">TODAY’S LITTLE ADVENTURE</span>
                <h2 id="daily-title">今天，收集一點成長</h2>
              </div>
            </div>
            <ol>
              <li className={readToday ? "done" : ""}>
                <span>{readToday ? <Check size={15} /> : "1"}</span>讀懂一個觀念
              </li>
              <li className={recalledToday ? "done" : ""}>
                <span>{recalledToday ? <Check size={15} /> : "2"}</span>
                自己試答一題
              </li>
              <li className={appliedToday ? "done" : ""}>
                <span>{appliedToday ? <Check size={15} /> : "3"}</span>
                換情境再挑戰
              </li>
            </ol>
            <Link to={`/explore/${recommended.id}`} className="daily-start">
              {due ? "複習時間到" : "挑一課出發"}
              <ArrowRight size={18} />
            </Link>
          </section>
          <section
            id="island-explore"
            className="explore-section"
            aria-labelledby="explore-title"
          >
            <div className="garden-section-heading">
              <div>
                <span className="garden-kicker">01 / 找到你的起點</span>
                <h2 id="explore-title">今天，想探索什麼？</h2>
                <p>先選年級，再找一個你有興趣的觀念。</p>
              </div>
              <span className="coverage-pill">
                <Sprout size={16} />
                {gardenLessons.length} 個原創主題微課
              </span>
            </div>
            <div className="explorer-controls">
              <div className="grade-switch" role="group" aria-label="選擇年級">
                {gradeNames.map((name, i) => (
                  <button
                    key={name}
                    className={grade === i + 1 ? "active" : ""}
                    aria-pressed={grade === i + 1}
                    onClick={() => chooseGrade(i + 1)}
                  >
                    {name}
                    <span>年級</span>
                  </button>
                ))}
              </div>
              <label className="garden-search">
                <Search size={19} />
                <span className="sr-only">搜尋本年級主題或知識點</span>
                <input
                  type="search"
                  placeholder="找觀念，例如：分數、閱讀…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </label>
            </div>
            <div className="version-row">
              <label>
                我的課本
                <select
                  value={version}
                  onChange={(e) => setVersion(e.target.value)}
                >
                  {versions.map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </label>
              <span>
                {version === "共同知識點"
                  ? "依共同概念探索；年級是建議起點，可依學校進度調整。"
                  : `你選了${version}。以下仍是共同概念微課，尚未逐冊核對此版本的課名、頁碼與進度。`}
              </span>
            </div>
            <div className="subject-islands" role="group" aria-label="選擇學科">
              {subjects.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSubject((v) => (v === s.id ? "all" : s.id))}
                  aria-pressed={subject === s.id}
                  className={subject === s.id ? "chosen" : ""}
                  style={{
                    "--subject-color": s.color,
                    "--subject-soft": s.soft,
                  }}
                >
                  <span className="subject-picture">
                    <SubjectIcon subject={s} />
                  </span>
                  <strong>{s.name}</strong>
                  <small>{s.motto}</small>
                  <span className="subject-card-bottom">
                    {currentLessons.filter((l) => l.subject === s.id).length}{" "}
                    個主題
                    <ArrowRight size={14} />
                  </span>
                </button>
              ))}
            </div>
            <div className="lesson-list-head">
              <h3>
                {gradeNames[grade - 1]}年級 ·{" "}
                {subject === "all"
                  ? "主題探索"
                  : gardenSubjects.find((s) => s.id === subject).name}
                <span aria-live="polite">{visible.length} 個主題</span>
              </h3>
              <div>
                <button
                  className={!onlyReview ? "filter-active" : ""}
                  aria-pressed={!onlyReview}
                  onClick={() => {
                    setOnlyReview(false);
                    setSubject("all");
                  }}
                >
                  全部領域
                </button>
                <button
                  className={onlyReview ? "filter-active" : ""}
                  aria-pressed={onlyReview}
                  onClick={() => setOnlyReview(true)}
                >
                  <RotateCcw size={14} />
                  待複習 {reviewCount}
                </button>
              </div>
            </div>
            <div className="garden-lesson-grid">
              {visible.map((l) => {
                const s = gardenSubjects.find((s) => s.id === l.subject);
                const state = lessonState(l, progress);
                return (
                  <Link
                    key={l.id}
                    to={`/explore/${l.id}`}
                    className="garden-lesson-card"
                    style={{
                      "--subject-color": s.color,
                      "--subject-soft": s.soft,
                    }}
                  >
                    <div className="lesson-card-meta">
                      <span>
                        <SubjectIcon subject={s} size={16} />
                        {s.name}
                      </span>
                      <small>約 {l.minutes} 分鐘</small>
                    </div>
                    <h4>{l.title}</h4>
                    <p>{l.goal}</p>
                    <div className="mini-concept" aria-hidden="true">
                      {l.panels.map((p, j) => (
                        <span key={p.label}>
                          {p.label}
                          {j < 2 && <ChevronRight size={12} />}
                        </span>
                      ))}
                    </div>
                    <div className="lesson-card-bottom">
                      <span
                        className={
                          state.mastered
                            ? "lesson-status mastered"
                            : "lesson-status"
                        }
                      >
                        {state.mastered ? (
                          <CheckCircle2 size={14} />
                        ) : (
                          <span className="status-dot" />
                        )}
                        {state.label}
                      </span>
                      <span className="lesson-card-go">
                        {state.started ? "繼續" : "探索"}
                        <ArrowRight size={15} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
            {!visible.length && (
              <div className="garden-empty">
                <Search size={30} />
                <h3>
                  {onlyReview
                    ? "這個範圍目前沒有待複習主題"
                    : "還沒找到這個觀念"}
                </h3>
                <p>
                  {onlyReview
                    ? "先探索新主題，完成練習後會安排回顧。"
                    : "可以換個關鍵字，或到小六完整教材找找。"}
                </p>
                <button
                  className="garden-secondary"
                  onClick={() => {
                    setSubject("all");
                    setQuery("");
                    setOnlyReview(false);
                  }}
                >
                  顯示本年級全部主題
                </button>
              </div>
            )}
            {grade <= 2 && (
              <p className="grade-note">
                <Lightbulb size={18} />
                一、二年級以生活課程整合探索自然、社會與藝術；本土語文等教材可從下方官方資源查找。
              </p>
            )}
            {grade === 6 && (
              <div className="deep-learning">
                <div>
                  <BookOpen size={24} />
                  <div>
                    <h3>想學得更完整？小六教材在這裡</h3>
                    <p>原有八科 64 單元、圖解講義與題庫，繼續陪你深入學習。</p>
                  </div>
                </div>
                <Link to="/practice" className="garden-secondary">
                  選範圍練習
                  <ArrowRight size={16} />
                </Link>
                <Link to="/subject/math" className="garden-quiet">
                  閱讀完整課程
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </section>
          <section id="island-progress" className="garden-progress-section">
            <div className="garden-section-heading">
              <div>
                <span className="garden-kicker">02 / 每一小步，都看得見</span>
                <h2>你的成長手札</h2>
                <p>這裡記錄的是主題微課的練習，照自己的步調就好。</p>
              </div>
              <button className="garden-secondary" onClick={downloadReport}>
                <Download size={16} />
                下載學習紀錄
              </button>
            </div>
            <div className="growth-layout">
              <div className="growth-card">
                <div className="growth-summary">
                  <div>
                    <strong>
                      {completed}
                      <small> / {currentLessons.length}</small>
                    </strong>
                    <span>本年級完成初次練習</span>
                  </div>
                  <div>
                    <strong>{due}</strong>
                    <span>個主題到時間複習</span>
                  </div>
                </div>
                <div className="growth-bars">
                  {subjects.map((s) => {
                    const ls = currentLessons.filter((l) => l.subject === s.id);
                    const n = ls.filter(
                      (l) => lessonState(l, progress).complete,
                    ).length;
                    return (
                      <div key={s.id}>
                        <span>{s.name}</span>
                        <progress
                          max={ls.length}
                          value={n}
                          aria-label={`${s.name}主題初次練習完成 ${n}／${ls.length}`}
                        />
                        <small>
                          {n}／{ls.length}
                        </small>
                      </div>
                    );
                  })}
                </div>
                <p className="growth-note">
                  完成＝兩題都已試答，不表示已精熟。兩題都在到期後再次答對，才標示「已跨日複習」。
                </p>
              </div>
              <aside className="garden-badges">
                <Trophy size={27} />
                <h3>收下屬於你的里程碑</h3>
                <div
                  className={
                    Object.keys(progress.reads).length
                      ? "badge earned"
                      : "badge"
                  }
                >
                  <span>🌱</span>
                  <div>
                    <b>好奇的開始</b>
                    <small>
                      {Object.keys(progress.reads).length
                        ? "已完成第一課閱讀確認"
                        : "讀一課，再按「我讀懂了」"}
                    </small>
                  </div>
                  {Object.keys(progress.reads).length > 0 && (
                    <Check size={16} />
                  )}
                </div>
                <div className={totalComplete ? "badge earned" : "badge"}>
                  <span>🧭</span>
                  <div>
                    <b>勇敢試一回</b>
                    <small>
                      {totalComplete
                        ? `已完成 ${totalComplete} 個主題的初次練習`
                        : "完成一課的兩道小挑戰"}
                    </small>
                  </div>
                  {totalComplete > 0 && <Check size={16} />}
                </div>
                <div className={anyMastered ? "badge earned" : "badge"}>
                  <span>🌳</span>
                  <div>
                    <b>讓記憶長根</b>
                    <small>
                      {anyMastered
                        ? "已在到期後再次答對同課兩題"
                        : "到期後再回想，讓記憶更穩固"}
                    </small>
                  </div>
                  {anyMastered && <Check size={16} />}
                </div>
                <p>
                  沒有扣愛心，也不比排名。答錯時，先看看解析；練習後可以休息一下。
                </p>
              </aside>
            </div>
          </section>
          <section className="garden-toolbox">
            <div>
              <span className="garden-kicker">03 / 換個方式，也會有新發現</span>
              <h2>小六學習工具箱</h2>
            </div>
            {[
              ["/exam-notes", "📒", "重點講義", "用圖表整理知識"],
              ["/flashcards", "🗂️", "記憶閃卡", "先回想，再翻面"],
              ["/labs", "🔬", "互動實驗", "動手驗證你的想法"],
              ["/learn-path", "🌿", "闖關練習", "用小挑戰學觀念"],
            ].map(([url, emoji, title, desc]) => (
              <Link key={url} to={url}>
                <span>{emoji}</span>
                <h3>
                  {title}
                  <ArrowRight size={16} />
                </h3>
                <p>{desc}</p>
              </Link>
            ))}
          </section>
          <details id="island-coverage" className="garden-coverage">
            <summary>
              <div>
                <ShieldCheck size={21} />
                <span>給家長與老師：教材範圍、版本與學習設計</span>
              </div>
              <span>展開查看 +</span>
            </summary>
            <div className="coverage-content">
              <h3>看見實際涵蓋，才能選對教材</h3>
              <p>
                本站目前提供一至六年級共 {gardenLessons.length}{" "}
                個原創、代表性主題微課，另保留六年級八科 64
                個深入單元。這些內容並未涵蓋所有年級、學期、領域或出版社的完整課本與習作。微課年級是建議起點，實際教學順序請以學校課本為準。
              </p>
              <div className="coverage-table-wrap">
                <table>
                  <caption>目前公開內容盤點（2026-11-03）</caption>
                  <thead>
                    <tr>
                      <th scope="col">範圍</th>
                      <th scope="col">可用內容</th>
                      <th scope="col">仍需補齊</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">一、二年級</th>
                      <td>每級 4 個主題、8 題練習</td>
                      <td>各冊完整單元、本土語文等</td>
                    </tr>
                    <tr>
                      <th scope="row">三至六年級</th>
                      <td>每級 8 個主題、16 題練習</td>
                      <td>各冊逐單元內容與非選題規準</td>
                    </tr>
                    <tr>
                      <th scope="row">原有小六教材</th>
                      <td>8 科、64 單元，另有選題練習</td>
                      <td>逐冊版本映射、內容來源逐項覆核</td>
                    </tr>
                    <tr>
                      <th scope="row">出版社版本</th>
                      <td>共同概念入口與官方查核連結</td>
                      <td>各學年度課名、冊次、頁碼實證對照</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                選擇課本版本只會顯示對照提醒，目前不會改寫題目或假裝已與出版社逐頁同步。本站原創微課不重製出版社課文、課本插圖或習作。
              </p>
              <h3>為什麼先試答，再隔天回來？</h3>
              <p>
                微課以例子、文字與圖示建立理解，再用回想題和新情境應用題提供回饋。依答題安排
                1、3、7、14
                天回顧；這是可調整的練習排程，尚未經本站學習成效研究驗證，不作正式學力判定。藝術創作、口說、動作與合作能力仍需要實作觀察。
              </p>
              <div className="source-links">
                {curriculumSources.map((s) => (
                  <a key={s.url} href={s.url} target="_blank" rel="noreferrer">
                    <b>
                      {s.title}
                      <ArrowRight size={15} />
                    </b>
                    <span>{s.note}</span>
                  </a>
                ))}
                <a href="https://adl.edu.tw/" target="_blank" rel="noreferrer">
                  <b>
                    教育部因材網
                    <ArrowRight size={15} />
                  </b>
                  <span>尋找更多學習重點與數位資源</span>
                </a>
              </div>
              <p className="coverage-date">
                課綱架構與來源連結查核日：2026-11-03。教科書範圍依各校當學年度選用版本確認。
              </p>
            </div>
          </details>
        </main>
        <Footer />
      </div>
      <nav className="garden-mobile-nav" aria-label="手機快捷導覽">
        <button onClick={() => scrollToId("island-explore")}>
          <Map size={20} />
          探索
        </button>
        <button onClick={() => scrollToId("island-progress")}>
          <Sprout size={20} />
          成長手札
        </button>
        <Link to="/practice">
          <BookOpen size={20} />
          小六練習
        </Link>
      </nav>
    </div>
  );
}

export function GardenLesson() {
  const { lessonId } = useParams();
  const lesson = gardenLessons.find((l) => l.id === lessonId);
  return lesson ? (
    <LessonAdventure key={lessonId} lesson={lesson} />
  ) : (
    <div className="garden garden-missing">
      <h1>還沒有這個主題</h1>
      <p>回到小島，選一個新的發現吧。</p>
      <Link to="/" className="garden-primary">
        回探索小島
      </Link>
    </div>
  );
}

function LessonAdventure({ lesson }) {
  const [progress, setProgress] = useState(readGarden);
  const [large, setLarge] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [reflection, setReflection] = useState("");
  const heading = useRef(null);
  const lock = useRef(false);
  const subject = gardenSubjects.find((s) => s.id === lesson.subject);
  const q = lesson.questions[step - 1];
  const answer = answers[step - 1];
  const complete = step === 3;
  const nextLesson = gardenLessons.find(
    (l) => l.grade === lesson.grade && l.order > lesson.order,
  );
  useEffect(() => {
    document.title = `${lesson.title}｜小小學習島`;
    heading.current?.focus();
    return () => speechEngine.stop();
  }, [step, lesson.title]);
  function persist(next) {
    setProgress(next);
    setSaveError(!saveGarden(next));
  }
  function start() {
    persist({
      ...progress,
      reads: { ...progress.reads, [lesson.id]: Date.now() },
    });
    setStep(1);
  }
  function confirm() {
    if (selected === null || answer || lock.current) return;
    lock.current = true;
    const correct = selected === q.answerIndex;
    // Re-read storage before merging so another open tab's results survive.
    const latest = saveError ? progress : readGarden();
    const next = recordGardenAnswer(latest, q, correct);
    persist({ ...next, reads: { ...next.reads, ...progress.reads } });
    setAnswers((a) => [...a, { selected, correct }]);
  }
  function next() {
    if (!answer) return;
    setStep(Math.min(step + 1, 3));
    setSelected(null);
    setShowHint(false);
    lock.current = false;
  }
  function retry() {
    setStep(1);
    setAnswers([]);
    setSelected(null);
    setShowHint(false);
    lock.current = false;
  }
  const [speaking, setSpeaking] = useState(false);
  function readAloud() {
    if (speaking) {
      speechEngine.stop();
      return;
    }
    const text =
      step === 0
        ? `${lesson.title}。${lesson.goal}。${lesson.explanation}。提醒：${lesson.trap}`
        : q
          ? `${q.question}。${q.options.map((o, i) => `選項${"ABCD"[i]}，${o}`).join("。")}${answer ? `。正確答案，${q.options[q.answerIndex]}。${q.explanation}` : ""}`
          : "完成本次練習。隔天再來回想一次。";
    speechEngine.speakMixed(
      text.replace(
        /(\d+)／(\d+)/g,
        (_, numerator, denominator) => `${denominator}分之${numerator}`,
      ),
      { id: "garden-lesson", rate: 0.85 },
    );
  }
  useEffect(
    () =>
      speechEngine.subscribe((state) =>
        setSpeaking(state.isPlaying && state.activeId === "garden-lesson"),
      ),
    [],
  );
  return (
    <div
      className={`garden garden-lesson-page ${large ? "garden-large" : ""}`}
      style={{
        "--subject-color": subject.color,
        "--subject-soft": subject.soft,
      }}
    >
      <div className="garden-wrap">
        <Header large={large} setLarge={setLarge} />
        <main className="adventure-main">
          <div className="adventure-toolbar">
            <Link to={`/?grade=${lesson.grade}`}>
              <ArrowLeft size={17} />回{gradeNames[lesson.grade - 1]}年級小島
            </Link>
            <span>
              <SubjectIcon subject={subject} size={17} />
              {subject.name} · 約 {lesson.minutes} 分鐘
            </span>
          </div>
          <ol className="adventure-steps" aria-label="學習流程">
            {["看懂觀念", "回想一下", "換個情境", "收下成長"].map(
              (title, i) => (
                <li
                  key={title}
                  className={i === step ? "current" : i < step ? "done" : ""}
                  aria-current={i === step ? "step" : undefined}
                >
                  <span>{i < step ? <Check size={15} /> : i + 1}</span>
                  {title}
                </li>
              ),
            )}
          </ol>
          {saveError && (
            <p className="garden-alert" role="alert">
              本瀏覽器暫時無法儲存。你仍可完成練習，離開後紀錄可能遺失。
            </p>
          )}
          <div className="adventure-layout">
            <article className="adventure-card">
              {step === 0 ? (
                <>
                  <div className="adventure-title-line">
                    <span className="garden-kicker">先看懂，再試一試</span>
                    {typeof window !== "undefined" &&
                      "speechSynthesis" in window && (
                        <button
                          onClick={readAloud}
                          className="read-aloud"
                          aria-pressed={speaking}
                        >
                          <Volume2 size={16} />
                          {speaking ? "停止朗讀" : "聽聽這一課"}
                        </button>
                      )}
                  </div>
                  <h1 ref={heading} tabIndex={-1}>
                    {lesson.title}
                  </h1>
                  <p className="lesson-goal">
                    <TargetIcon />
                    這一課，我要學會：{lesson.goal}
                  </p>
                  <p className="lesson-explanation">{lesson.explanation}</p>
                  <ConceptPicture lesson={lesson} />
                  <div className="garden-trap">
                    <Lightbulb size={21} />
                    <div>
                      <h2>這裡，值得多想一下</h2>
                      <p>{lesson.trap}</p>
                    </div>
                  </div>
                  <details className="lesson-compare">
                    <summary>用小表格再整理一次</summary>
                    <table>
                      <caption>本課觀念整理</caption>
                      <thead>
                        <tr>
                          <th scope="col">看什麼</th>
                          <th scope="col">怎麼想</th>
                        </tr>
                      </thead>
                      <tbody>
                        {lesson.panels.map((p) => (
                          <tr key={p.label}>
                            <th scope="row">{p.label}</th>
                            <td>{p.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </details>
                  <div className="lesson-start">
                    <p>先試著用自己的話說一次，再挑戰兩題。</p>
                    <button className="garden-primary" onClick={start}>
                      我讀懂了，試試看
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </>
              ) : complete ? (
                <>
                  <div className="adventure-result-art" aria-hidden="true">
                    <Sprout size={45} />
                    <Sparkles size={22} />
                  </div>
                  <span className="garden-kicker">每次嘗試，都有新的發現</span>
                  <h1 ref={heading} tabIndex={-1}>
                    你又向前了一小步！
                  </h1>
                  <p className="result-score">
                    這次試答 {answers.length} 題，答對{" "}
                    {answers.filter((a) => a.correct).length} 題。
                  </p>
                  <p>
                    答對了，說說為什麼；答錯了，找出卡住的地方。
                    <br />
                    明天回想一次，讓理解長得更穩。
                  </p>
                  <div className="result-review">
                    {lesson.questions.map((item, i) => (
                      <details key={item.key} open={!answers[i]?.correct}>
                        <summary>
                          <span>
                            {answers[i]?.correct ? (
                              <CheckCircle2 size={18} />
                            ) : (
                              <RotateCcw size={18} />
                            )}
                          </span>
                          {item.kind} ·{" "}
                          {answers[i]?.correct ? "答對了" : "值得再想想"}
                        </summary>
                        <p>
                          <b>{item.question}</b>
                        </p>
                        <p>你的選擇：{item.options[answers[i]?.selected]}</p>
                        <p>正確答案：{item.options[item.answerIndex]}</p>
                        <p>{item.explanation}</p>
                      </details>
                    ))}
                  </div>
                  <label className="reflection-input">
                    用自己的話，記下一個新發現{" "}
                    <small>自由練習，不評分，也不儲存或傳送。</small>
                    <textarea
                      value={reflection}
                      onChange={(e) => setReflection(e.target.value)}
                      maxLength={500}
                      placeholder="我發現…；下次我會先注意…"
                      rows={3}
                    />
                  </label>
                  <div className="review-schedule">
                    <RotateCcw size={20} />
                    <div>
                      <b>下一次回顧</b>
                      <span>
                        {taipeiDay(
                          Math.min(
                            ...lesson.questions.map(
                              (q) =>
                                progress.records[q.key]?.due ||
                                Date.now() + 86400000,
                            ),
                          ),
                        )}{" "}
                        起，可再回小島複習。
                      </span>
                      <small>同一天反覆重做，不會增加跨日熟練標記。</small>
                    </div>
                  </div>
                  <div className="adventure-actions">
                    <button className="garden-secondary" onClick={retry}>
                      <RotateCcw size={17} />
                      再練一次
                    </button>
                    <Link
                      className="garden-primary"
                      to={`/?grade=${lesson.grade}`}
                    >
                      回小島休息一下
                      <Leaf size={18} />
                    </Link>
                  </div>
                  {nextLesson && (
                    <Link
                      className="next-discovery"
                      to={`/explore/${nextLesson.id}`}
                    >
                      也可以看看下一個發現：{nextLesson.title}
                      <ArrowRight size={16} />
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <div className="adventure-title-line">
                    <span className="garden-kicker">
                      挑戰 {step} / 2 · {q.kind}
                    </span>
                    {"speechSynthesis" in window && (
                      <button
                        onClick={readAloud}
                        className="read-aloud"
                        aria-pressed={speaking}
                      >
                        <Volume2 size={16} />
                        {speaking ? "停止朗讀" : "聽題目"}
                      </button>
                    )}
                  </div>
                  <h1
                    ref={heading}
                    tabIndex={-1}
                    className="challenge-question"
                  >
                    {q.question}
                  </h1>
                  <p className="challenge-note">不用趕，選一個最合適的答案。</p>
                  <div
                    className="challenge-options"
                    role="group"
                    aria-label="答案選項"
                  >
                    {q.options.map((o, i) => (
                      <button
                        key={o}
                        disabled={Boolean(answer)}
                        aria-pressed={selected === i}
                        className={`${selected === i ? "selected" : ""} ${answer && i === q.answerIndex ? "correct" : ""} ${answer && selected === i && !answer.correct ? "incorrect" : ""}`}
                        onClick={() => setSelected(i)}
                      >
                        <span className="option-letter">{"ABCD"[i]}</span>
                        <span>{o}</span>
                        {answer && i === q.answerIndex && (
                          <CheckCircle2 size={20} />
                        )}
                        {answer && selected === i && !answer.correct && (
                          <X size={20} />
                        )}
                      </button>
                    ))}
                  </div>
                  {!answer ? (
                    <>
                      <button
                        className="garden-hint-button"
                        aria-expanded={showHint}
                        onClick={() => setShowHint((v) => !v)}
                      >
                        <Lightbulb size={17} />
                        {showHint ? "收起提醒" : "卡住了？給我一點提醒"}
                      </button>
                      {showHint && (
                        <div className="garden-hint">
                          {q.hint}
                          <button
                            onClick={() => {
                              setStep(0);
                              setAnswers([]);
                              setSelected(null);
                              setShowHint(false);
                              lock.current = false;
                            }}
                          >
                            回到圖解看看
                          </button>
                        </div>
                      )}
                      <div className="adventure-actions">
                        <span>想好了，再確認。</span>
                        <button
                          className="garden-primary"
                          disabled={selected === null}
                          onClick={confirm}
                        >
                          確認答案
                          <Check size={17} />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className={`challenge-feedback ${answer.correct ? "" : "try-again"}`}
                        role="status"
                      >
                        <h2>
                          {answer.correct
                            ? "想得很好！看看理由是不是一樣。"
                            : "沒關係，我們一起弄懂它。"}
                        </h2>
                        <p>
                          <b>正確答案：{q.options[q.answerIndex]}</b>
                        </p>
                        <p>{q.explanation}</p>
                        <p className="why-prompt">
                          試著說說：哪個線索幫助你判斷？
                        </p>
                      </div>
                      <div className="adventure-actions">
                        <span>理解理由，比答得快更重要。</span>
                        <button className="garden-primary" onClick={next}>
                          {step === 1 ? "換個情境試試" : "看看這次的收穫"}
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}
            </article>
            <aside className="adventure-side">
              <span className="side-sprout">
                <Sprout size={28} />
              </span>
              <h2>
                學會的路上，
                <br />
                慢一點也沒關係。
              </h2>
              <p>看懂一個例子，自己回想一次，再試著用在新地方。</p>
              <div className="side-facts">
                <span>{lesson.stage}</span>
                <span>{subject.name} · 原創主題微課</span>
                <span>共同概念，非指定版本逐課同步</span>
              </div>
              <Link to={`/?grade=${lesson.grade}`}>
                <Map size={16} />
                回探索小島
              </Link>
              {lesson.grade === 6 && (
                <Link to={`/subject/${lesson.subject}`}>
                  <BookOpen size={16} />
                  看看小六完整課程
                </Link>
              )}
            </aside>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
function TargetIcon() {
  return <CheckCircle2 size={20} aria-hidden="true" />;
}
