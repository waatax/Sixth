import { useState, useEffect } from 'react';
import { flashcardsData } from '../data/flashcardsData';
import { RotateCw, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
        playSound('click');
      } else if (e.key === 'ArrowRight') {
        setIsFlipped(false);
        setCardIndex((prev) => (prev + 1) % (cards.length || 1));
        playSound('click');
      } else if (e.key === 'ArrowLeft') {
        setIsFlipped(false);
        setCardIndex((prev) => (prev - 1 + (cards.length || 1)) % (cards.length || 1));
        playSound('click');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cards.length]);

  return (
    <div className="flex flex-col gap-6 py-4 max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center">
        <span className="badge badge-warning mb-2" style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
          ⚡ 考前 3 分鐘・高頻公式與關鍵觀念速記卡
        </span>
        <h1 className="h1 mb-2">
          知識記憶翻翻卡 (Flashcards)
        </h1>
        <p className="text-secondary text-sm" style={{ lineHeight: 1.6 }}>
          點擊卡片或按「空白鍵 / 左右箭頭」即可快速翻看公式詳解與核心解析！
        </p>
      </div>

      {/* Subject Selector Tabs */}
      <div className="flex justify-center gap-2 flex-wrap border-b pb-3" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <button
          className={`btn-pill ${currentSubject === 'math' ? 'active' : ''}`}
          onClick={() => { setCurrentSubject('math'); setCardIndex(0); setIsFlipped(false); }}
        >
          🧮 數學公式卡 ({flashcardsData.math.length})
        </button>
        <button
          className={`btn-pill ${currentSubject === 'science' ? 'active' : ''}`}
          onClick={() => { setCurrentSubject('science'); setCardIndex(0); setIsFlipped(false); }}
        >
          🔬 自然觀念卡 ({flashcardsData.science.length})
        </button>
        <button
          className={`btn-pill ${currentSubject === 'mandarin' ? 'active' : ''}`}
          onClick={() => { setCurrentSubject('mandarin'); setCardIndex(0); setIsFlipped(false); }}
        >
          📖 國語重點卡 ({flashcardsData.mandarin.length})
        </button>
        <button
          className={`btn-pill ${currentSubject === 'english' ? 'active' : ''}`}
          onClick={() => { setCurrentSubject('english'); setCardIndex(0); setIsFlipped(false); }}
        >
          🇬🇧 英語句型卡 ({flashcardsData.english.length})
        </button>
      </div>

      {/* Flashcard Box */}
      {cards.length > 0 && currentCard && (
        <div className="flex flex-col items-center gap-5">
          <div className="flex justify-between items-center w-full text-sm text-secondary px-2">
            <span>卡片進度：<strong>{cardIndex + 1}</strong> / {cards.length}</span>
            <span className="badge badge-accent">標籤：{currentCard.tag}</span>
            <span style={{ color: 'var(--accent-success)', fontWeight: 700 }}>已熟記：{masteredCount} 次</span>
          </div>

          {/* Interactive Flip Card */}
          <div
            onClick={handleFlip}
            className="card flex flex-col items-center justify-center text-center cursor-pointer select-none"
            style={{
              width: '100%',
              minHeight: '280px',
              padding: '36px 28px',
              backgroundColor: isFlipped ? 'var(--accent-soft)' : 'var(--bg-secondary)',
              border: isFlipped ? '2px solid var(--accent-primary)' : '1px solid var(--border-strong)',
              boxShadow: 'var(--shadow-md)',
              borderRadius: 'var(--radius-xl)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            role="button"
            tabIndex={0}
            aria-label="點擊翻面卡片"
          >
            <div
              className="badge mb-4"
              style={{
                backgroundColor: isFlipped ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                color: isFlipped ? 'var(--text-inverse)' : 'var(--text-secondary)',
                fontWeight: 700,
                padding: '4px 12px'
              }}
            >
              {isFlipped ? '✨ 正確解答與重點詳解' : '❓ 點擊卡片翻看答案'}
            </div>

            <div
              style={{
                fontSize: isFlipped ? 'calc(1.2rem * var(--font-scale))' : 'calc(1.45rem * var(--font-scale))',
                fontWeight: 700,
                color: 'var(--text-primary)',
                whiteSpace: 'pre-line',
                lineHeight: 1.7
              }}
            >
              {isFlipped ? currentCard.back : currentCard.front}
            </div>

            <div className="flex items-center gap-1 text-xs text-secondary mt-6" style={{ opacity: 0.75 }}>
              <RotateCw size={14} />
              <span>點擊或按空白鍵翻面</span>
            </div>
          </div>

          {/* Bottom Navigation Controls */}
          <div className="flex justify-between items-center w-full gap-3 flex-wrap">
            <button className="btn-outline flex items-center gap-1.5" onClick={handlePrev}>
              <ChevronLeft size={18} /> 上一張
            </button>

            <button 
              className="btn-primary flex items-center gap-2" 
              style={{ backgroundColor: 'var(--accent-success)', borderColor: 'var(--accent-success)' }}
              onClick={handleMastered}
            >
              <CheckCircle2 size={18} /> 我已經熟記了 (+10 XP)
            </button>

            <button className="btn-outline flex items-center gap-1.5" onClick={handleNext}>
              下一張 <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashcardsPage;
