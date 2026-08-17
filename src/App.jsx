import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';
import QuestionBankPage from './pages/QuestionBankPage';
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
      </Route>
    </Routes>
  );
}

export default App;
