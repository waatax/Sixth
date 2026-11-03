import { lazy, Suspense, useEffect } from "react";
import { Link, NavLink, useLocation, useParams, useSearchParams } from "react-router-dom";
import { Compass, Flame, Gamepad2, Home, NotebookPen, Sparkles, Sprout, UserRound, Volume2, VolumeX } from "lucide-react";
import { levelOf, streakOf, STICKERS, LEVELS } from "../../utils/islandGame.js";
import { IslandProvider, useIsland } from "./IslandContext.jsx";
import HomePage from "./HomePage.jsx";
import MapPage from "./MapPage.jsx";
import LessonPage from "./LessonPage.jsx";
import "./island.css";

const GamesPage = lazy(() => import("./GamesPage.jsx"));
const CheckPage = lazy(() => import("./CheckPage.jsx"));
const MePage = lazy(() => import("./MePage.jsx"));
const GuidePage = lazy(() => import("./GuidePage.jsx"));

const tabs = [
  { to: "/", label: "今天", Icon: Home, end: true },
  { to: "/map", label: "地圖", Icon: Compass },
  { to: "/games", label: "遊戲", Icon: Gamepad2 },
  { to: "/check", label: "小考", Icon: NotebookPen },
  { to: "/me", label: "我的", Icon: UserRound },
];

function TopBar() {
  const { island, setPref } = useIsland();
  const level = levelOf(island.xp);
  const streak = streakOf(island);
  return (
    <header className="isl-top">
      <Link to="/" className="isl-brand" aria-label="小小學習島首頁">
        <span className="isl-logo"><Sprout size={20} aria-hidden="true" /></span>
        <b>小小學習島</b>
      </Link>
      <div className="isl-top-stats">
        <span className="isl-pill isl-pill-streak" title="連續學習天數，中間休息一天不會中斷">
          <Flame size={15} aria-hidden="true" />
          {streak}
          <span className="sr-only">天連續學習</span>
        </span>
        <Link to="/me" className="isl-pill isl-pill-xp" title={`${level.name}，共 ${island.xp} 點經驗`}>
          <Sparkles size={15} aria-hidden="true" />
          Lv.{level.level}
        </Link>
        <button type="button" className="isl-icon-btn" aria-pressed={island.sound} aria-label={island.sound ? "關閉音效" : "開啟音效"} onClick={() => setPref("sound", !island.sound)}>
          {island.sound ? <Volume2 size={18} aria-hidden="true" /> : <VolumeX size={18} aria-hidden="true" />}
        </button>
        <button type="button" className="isl-icon-btn isl-font-btn" aria-pressed={island.large} aria-label={island.large ? "使用標準字級" : "放大字級"} onClick={() => setPref("large", !island.large)}>
          Aa
        </button>
      </div>
    </header>
  );
}

function Toasts() {
  const { toasts, dismissToast } = useIsland();
  useEffect(() => {
    if (!toasts.length) return undefined;
    const timer = setTimeout(() => dismissToast(toasts[0].key), 3800);
    return () => clearTimeout(timer);
  }, [toasts, dismissToast]);
  return (
    <div className="isl-toasts" role="status" aria-live="polite">
      {toasts.map((t) => {
        const sticker = t.kind === "sticker" && STICKERS.find((s) => s.id === t.id);
        const level = t.kind === "level" && LEVELS[t.id - 1];
        return (
          <button type="button" key={t.key} className="isl-toast" onClick={() => dismissToast(t.key)}>
            <span>{sticker ? sticker.emoji : "🎉"}</span>
            <span>
              <b>{sticker ? `新貼紙：${sticker.name}` : `升上第 ${t.id} 級！`}</b>
              <small>{sticker ? sticker.how : `${level?.name} · 小島多了${level?.unlock}`}</small>
            </span>
          </button>
        );
      })}
    </div>
  );
}

function Screen() {
  const { pathname } = useLocation();
  const params = useParams();
  const [search] = useSearchParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById("isl-main")?.scrollTo?.(0, 0);
  }, [pathname, search]);
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] === "explore" && params.lessonId) return <LessonPage key={params.lessonId} lessonId={params.lessonId} />;
  if (parts[0] === "map" || parts[0] === "explore") return <MapPage />;
  if (parts[0] === "games") return <GamesPage gameId={params.gameId} />;
  if (parts[0] === "check") return <CheckPage />;
  if (parts[0] === "me") return <MePage />;
  if (parts[0] === "guide") return <GuidePage />;
  return <HomePage />;
}

function Shell() {
  const { island, saveFailed } = useIsland();
  const { pathname } = useLocation();
  const inLesson = pathname.startsWith("/explore/");
  return (
    <div className={`isl ${island.large ? "isl-large" : ""} ${inLesson ? "isl-in-lesson" : ""}`}>
      <a className="isl-skip" href="#isl-main" onClick={(e) => { e.preventDefault(); document.getElementById("isl-main")?.focus(); }}>
        跳到主要內容
      </a>
      <nav className="isl-rail" aria-label="主要導覽">
        <Link to="/" className="isl-brand isl-rail-brand" aria-label="小小學習島首頁">
          <span className="isl-logo"><Sprout size={22} aria-hidden="true" /></span>
          <b>小小<br />學習島</b>
        </Link>
        {tabs.map(({ to, label, Icon, end }) => (
          <NavLink key={to} to={to} end={end} className="isl-rail-link">
            <Icon size={24} aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="isl-body">
        <TopBar />
        {saveFailed && <p className="isl-alert" role="alert">這個瀏覽器暫時無法儲存紀錄。你仍可繼續學習，但離開後紀錄可能遺失。</p>}
        <main id="isl-main" tabIndex={-1} className="isl-main">
          <Suspense fallback={<p className="isl-loading" role="status">載入中…</p>}>
            <Screen />
          </Suspense>
        </main>
        <footer className="isl-foot">
          <span>免登入、無廣告 · 紀錄只留在這個瀏覽器</span>
          <Link to="/guide">給家長與老師</Link>
        </footer>
      </div>
      <nav className="isl-tabs" aria-label="快速導覽">
        {tabs.map(({ to, label, Icon, end }) => (
          <NavLink key={to} to={to} end={end} className="isl-tab">
            <Icon size={22} aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <Toasts />
    </div>
  );
}

export default function IslandApp() {
  return (
    <IslandProvider>
      <Shell />
    </IslandProvider>
  );
}
