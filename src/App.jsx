import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LearningGarden, { GardenLesson } from "./pages/LearningGarden";
const StudyStudio = lazy(() => import("./pages/StudyStudio"));
const LegacyApp = lazy(() => import("./LegacyApp"));
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LearningGarden />} />
      <Route path="/explore" element={<LearningGarden />} />
      <Route path="/explore/:lessonId" element={<GardenLesson />} />
      <Route
        path="/practice"
        element={
          <Suspense fallback={<p role="status">載入練習室中…</p>}>
            <main style={{ background: "#f8f9f2", minHeight: "100vh" }}>
              <StudyStudio />
            </main>
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<p role="status">載入教材中…</p>}>
            <LegacyApp />
          </Suspense>
        }
      />
    </Routes>
  );
}
