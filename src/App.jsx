import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';
import QuestionBankPage from './pages/QuestionBankPage';
import ResourcesPage from './pages/ResourcesPage';
import PrepPage from './pages/PrepPage';
import FlashcardsPage from './pages/FlashcardsPage';
import MockExamPage from './pages/MockExamPage';
import MistakesPage from './pages/MistakesPage';
import GeptPage from './pages/GeptPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
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
      </Route>
    </Routes>
  );
}

export default App;
