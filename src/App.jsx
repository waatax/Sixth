import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import { GamificationProvider } from './context/GamificationContext';
import PetCompanionWidget from './components/gamification/PetCompanionWidget';
import './App.css';

// 首頁以外的頁面按需載入，縮小第一次開啟要下載的程式
const SubjectPage = lazy(() => import('./pages/SubjectPage'));
const LessonPage = lazy(() => import('./pages/LessonPage'));
const QuizPage = lazy(() => import('./pages/QuizPage'));
const QuestionBankPage = lazy(() => import('./pages/QuestionBankPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const PrepPage = lazy(() => import('./pages/PrepPage'));
const FlashcardsPage = lazy(() => import('./pages/FlashcardsPage'));
const MockExamPage = lazy(() => import('./pages/MockExamPage'));
const MistakesPage = lazy(() => import('./pages/MistakesPage'));
const GeptPage = lazy(() => import('./pages/GeptPage'));
const BossBattlePage = lazy(() => import('./pages/BossBattlePage'));
const MemoryGamePage = lazy(() => import('./pages/MemoryGamePage'));
const ShortsReelsPage = lazy(() => import('./pages/ShortsReelsPage'));
const InteractiveLabsPage = lazy(() => import('./pages/InteractiveLabsPage'));
const ExamReviewNotesPage = lazy(() => import('./pages/ExamReviewNotesPage'));
const DuolingoLearnPage = lazy(() => import('./pages/DuolingoLearnPage'));

function App() {
  return (
    <GamificationProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="duolingo" element={<DuolingoLearnPage />} />
          <Route path="learn-path" element={<DuolingoLearnPage />} />
          <Route path="subject/:subjectId" element={<SubjectPage />} />
          <Route path="lesson/:unitId" element={<LessonPage />} />
          <Route path="quiz/:unitId" element={<QuizPage />} />
          <Route path="question-bank" element={<QuestionBankPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="prep" element={<PrepPage />} />
          <Route path="flashcards" element={<FlashcardsPage />} />
          <Route path="mock-exam" element={<MockExamPage />} />
          <Route path="mistakes" element={<MistakesPage />} />
          <Route path="gept" element={<GeptPage />} />
          <Route path="boss-battle" element={<BossBattlePage />} />
          <Route path="memory-game" element={<MemoryGamePage />} />
          <Route path="shop" element={<Navigate to="/" replace />} />
          <Route path="shorts" element={<ShortsReelsPage />} />
          <Route path="labs" element={<InteractiveLabsPage />} />
          <Route path="exam-notes" element={<ExamReviewNotesPage />} />
          <Route path="exam-notes/:subjectId" element={<ExamReviewNotesPage />} />
          <Route path="exam-notes/:subjectId/:semester" element={<ExamReviewNotesPage />} />
          <Route path="exam-notes/:subjectId/:semester/:scope" element={<ExamReviewNotesPage />} />
        </Route>
      </Routes>
      <PetCompanionWidget />
    </GamificationProvider>
  );
}

export default App;
