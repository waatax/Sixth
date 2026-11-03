import { Component, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const IslandApp = lazy(() => import("./pages/island/IslandApp"));
const StudyStudio = lazy(() => import("./pages/StudyStudio"));
const LegacyApp = lazy(() => import("./LegacyApp"));
const Loading = ({ text }) => (
  <p role="status" style={{ padding: "2rem", textAlign: "center" }}>
    {text}
  </p>
);
// A redeploy renames chunks, so a tab left open can fail to load the next page: offer a refresh.
class SafeArea extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div style={{ minHeight: "100dvh", display: "grid", placeContent: "center", gap: 12, padding: 24, textAlign: "center", background: "#f2fafc", color: "#22304a" }}>
        <p style={{ fontSize: 48, margin: 0 }} aria-hidden="true">🏝️</p>
        <h1 style={{ fontSize: 22, margin: 0 }}>小島暫時連不上</h1>
        <p style={{ margin: 0 }}>重新整理一下就好，你的學習紀錄都還在。</p>
        <button type="button" onClick={() => window.location.reload()} style={{ minHeight: 48, padding: "8px 20px", borderRadius: 14, border: 0, background: "#0c7c8a", color: "#fff", fontWeight: 700, fontSize: 16, cursor: "pointer" }}>
          重新整理
        </button>
      </div>
    );
  }
}
const Island = () => (
  <SafeArea>
    <Suspense fallback={<Loading text="正在划船到學習島…" />}>
      <IslandApp />
    </Suspense>
  </SafeArea>
);
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Island />} />
      {["map", "explore", "explore/:lessonId", "games", "games/:gameId", "check", "me", "guide"].map((path) => (
        <Route key={path} path={path} element={<Island />} />
      ))}
      <Route
        path="/practice"
        element={
          <Suspense fallback={<Loading text="載入練習室中…" />}>
            <main style={{ background: "#f8f9f2", minHeight: "100vh" }}>
              <StudyStudio />
            </main>
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loading text="載入教材中…" />}>
            <LegacyApp />
          </Suspense>
        }
      />
    </Routes>
  );
}
