import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import StudyStudio from './pages/StudyStudio';
const LegacyApp = lazy(() => import('./LegacyApp'));
export default function App() {
  return <Routes>
    <Route path="/" element={<main style={{background:'#f8f9f2', minHeight:'100vh'}}><StudyStudio /></main>} />
    <Route path="/practice" element={<main style={{background:'#f8f9f2', minHeight:'100vh'}}><StudyStudio /></main>} />
    <Route path="*" element={<Suspense fallback={<p role="status">載入教材中…</p>}><LegacyApp /></Suspense>} />
  </Routes>;
}
