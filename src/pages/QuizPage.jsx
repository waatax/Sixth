import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import { quizData } from '../data/quizData';

const QuizPage = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions = quizData[unitId] || [];

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12">
        <h2>此單元尚無重點測驗</h2>
        <button className="btn-primary" onClick={() => navigate(-1)}>返回</button>
      </div>
    );
  }

  const question = questions[currentQ];
  const isLastQuestion = currentQ === questions.length - 1;

  const handleSelect = (index) => {
    if (showResult) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    if (selectedOption === question.answerIndex) {
      setScore(s => s + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Show final score state
      setCurrentQ(questions.length); 
    } else {
      setCurrentQ(c => c + 1);
      setSelectedOption(null);
      setShowResult(false);
    }
  };

  // Final Score Screen
  if (currentQ >= questions.length) {
    return (
      <div className="card flex flex-col items-center text-center gap-6 py-12 max-w-md mx-auto mt-8">
        <h2 className="h2">測驗完成！</h2>
        <div style={{ fontSize: '4rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
          {Math.round((score / questions.length) * 100)} 分
        </div>
        <p className="text-secondary">你答對了 {score} 題，共 {questions.length} 題。</p>
        <button className="btn-primary" onClick={() => navigate(-1)}>回到單元列表</button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 flex flex-col gap-6">
      <button className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }} onClick={() => navigate(-1)}>
        <ArrowLeft size={16} /> 返回單元
      </button>

      <div className="card flex flex-col gap-6">
        <div className="flex justify-between items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
          <span>重點測驗 - 觀念檢核</span>
          <span>進度：{currentQ + 1} / {questions.length}</span>
        </div>

        <h2 className="h3">{question.question}</h2>

        <div className="flex flex-col gap-3">
          {question.options.map((opt, i) => {
            let itemClass = "btn-outline flex justify-between items-center";
            let itemStyle = { textAlign: 'left', padding: '16px' };
            
            if (showResult) {
              if (i === question.answerIndex) {
                itemStyle.backgroundColor = 'var(--accent-success)';
                itemStyle.color = 'white';
                itemStyle.borderColor = 'var(--accent-success)';
              } else if (i === selectedOption) {
                itemStyle.backgroundColor = 'var(--accent-error)';
                itemStyle.color = 'white';
                itemStyle.borderColor = 'var(--accent-error)';
              }
            } else if (selectedOption === i) {
              itemStyle.borderColor = 'var(--accent-primary)';
              itemStyle.backgroundColor = 'var(--bg-tertiary)';
            }

            return (
              <button key={i} className={itemClass} style={itemStyle} onClick={() => handleSelect(i)}>
                <span>{opt}</span>
                {showResult && i === question.answerIndex && <CheckCircle2 size={20} />}
                {showResult && i === selectedOption && i !== question.answerIndex && <XCircle size={20} />}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div style={{ padding: '16px', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
            <p style={{ fontWeight: 600, marginBottom: '4px' }}>解析：</p>
            <p className="text-sm">{question.explanation}</p>
          </div>
        )}

        <div className="flex justify-end mt-4">
          {!showResult ? (
            <button className="btn-primary" onClick={handleSubmit} disabled={selectedOption === null} style={{ opacity: selectedOption === null ? 0.5 : 1 }}>
              提交答案
            </button>
          ) : (
            <button className="btn-primary" onClick={handleNext}>
              {isLastQuestion ? '查看結果' : '下一題'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
