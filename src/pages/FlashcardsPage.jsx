import { useState } from 'react';
import { flashcardsData } from '../data/flashcardsData';
import { RotateCw, CheckCircle2, Award, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { playSound } from '../utils/soundEffects';

const FlashcardsPage = () => {
  const [currentSubject, setCurrentSubject] = useState('math');
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCount, setMasteredCount] = useState(0);

  const cards = flashcardsData[currentSubject] || [];
  const currentCard = cards[cardIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    playSound('click');
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % cards.length);
    playSound('click');
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev - 1 + cards.length) % cards.length);
    playSound('click');
  };

  const handleMastered = () => {
    setMasteredCount(c => c + 1);
    playSound('correct');
    handleNext();
  };

  return (
    <div className="flex flex-col gap-8 py-4 max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center">
        <span className="badge mb-2" style={{ backgroundColor: 'hsl(35, 90%, 92%)', color: 'hsl(35, 90%, 35%)', padding: '6px 14px', borderRadius: '999px', fontWeight: 700 }}>
          ⚡ 考前 3 分鐘・高頻公式與觀念速記卡
        </span>
        <h1 className="h1 mb-2" style={{ fontSize: '2.3rem' }}>
          知識記憶翻翻卡 (Flashcards)
        </h1>
        <p className="text-secondary text-sm">
          點擊卡片即可翻面查看公式詳解與重點解析。支援鍵盤左右箭頭切換！
        </p>
      </div>

      {/* Subject Selector Tabs */}
      <div className="flex justify-center gap-2 flex-wrap border-b pb-3" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <button
          className={`btn-outline ${currentSubject === 'math' ? 'btn-primary' : ''}`}
          onClick={() => { setCurrentSubject('math'); setCardIndex(0); setIsFlipped(false); }}
        >
          🧮 數學公式卡 ({flashcardsData.math.length})
        </button>
        <button
          className={`btn-outline ${currentSubject === 'science' ? 'btn-primary' : ''}`}
          onClick={() => { setCurrentSubject('science'); setCardIndex(0); setIsFlipped(false); }}
        >
          🔬 自然觀念卡 ({flashcardsData.science.length})
        </button>
        <button
          className={`btn-outline ${currentSubject === 'mandarin' ? 'btn-primary' : ''}`}
          onClick={() => { setCurrentSubject('mandarin'); setCardIndex(0); setIsFlipped(false); }}
        >
          📖 國語重點卡 ({flashcardsData.mandarin.length})
        </button>
        <button
          className={`btn-outline ${currentSubject === 'english' ? 'btn-primary' : ''}`}
          onClick={() => { setCurrentSubject('english'); setCardIndex(0); setIsFlipped(false); }}
        >
          🇬🇧 英語句型卡 ({flashcardsData.english.length})
        </button>
      </div>

      {/* Flashcard Component */}
      {cards.length > 0 && currentCard && (
        <div className="flex flex-col items-center gap-6">
          <div className="flex justify-between items-center w-full text-sm text-secondary px-2">
            <span>進度：{cardIndex + 1} / {cards.length}</span>
            <span className="badge" style={{ backgroundColor: 'var(--bg-tertiary)' }}>標籤：{currentCard.tag}</span>
            <span style={{ color: 'hsl(150, 60%, 35%)', fontWeight: 600 }}>已熟記：{masteredCount} 次</span>
          </div>

          {/* Interactive Flip Card Box */}
          <div
            onClick={handleFlip}
            className="card flex flex-col items-center justify-center text-center cursor-pointer select-none"
            style={{
              width: '100%',
              minHeight: '260px',
              padding: '36px',
              backgroundColor: isFlipped ? 'hsl(215, 85%, 97%)' : 'var(--bg-secondary)',
              border: isFlipped ? '2px solid var(--accent-primary)' : '1px solid var(--border-strong)',
              boxShadow: 'var(--shadow-md)',
              borderRadius: 'var(--radius-xl)',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="text-xs badge mb-4" style={{ backgroundColor: isFlipped ? 'var(--accent-primary)' : 'var(--bg-tertiary)', color: isFlipped ? 'white' : 'var(--text-secondary)' }}>
              {isFlipped ? '✨ 正確解答與解析' : '❓ 點擊卡片翻看答案'}
            </div>

            <div style={{ fontSize: isFlipped ? '1.25rem' : '1.5rem', fontWeight: 700, color: 'var(--text-primary)', whiteSpace: 'pre-line', lineHeight: 1.6 }}>
              {isFlipped ? currentCard.back : currentCard.front}
            </div>

            <div className="flex items-center gap-1 text-xs text-secondary mt-6" style={{ opacity: 0.7 }}>
              <RotateCw size={13} />
              <span>點擊任意處翻面</span>
            </div>
          </div>

          {/* Bottom Nav Controls */}
          <div className="flex justify-between items-center w-full gap-3 flex-wrap">
            <button className="btn-outline flex items-center gap-1" onClick={handlePrev}>
              <ChevronLeft size={18} /> 上一張
            </button>

            <button 
              className="btn-primary flex items-center gap-2" 
              style={{ backgroundColor: 'hsl(150, 60%, 40%)', borderColor: 'hsl(150, 60%, 40%)' }}
              onClick={handleMastered}
            >
              <CheckCircle2 size={18} /> 我已經熟記了 (+10 XP)
            </button>

            <button className="btn-outline flex items-center gap-1" onClick={handleNext}>
              下一張 <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashcardsPage;
