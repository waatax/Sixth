import { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { flashcardsData } from '../data/flashcardsData';
import { geptAudioData } from '../data/geptAudioData';
import { geptData } from '../data/geptData';
import { coursesData } from '../data/courses';
import { RotateCw, CheckCircle2, ChevronLeft, ChevronRight, ArrowLeft, Volume2, RotateCcw, Play, Square, Shuffle, ListOrdered } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSound } from '../utils/soundEffects';
import { speechEngine } from '../utils/speechHelper';

const FlashcardsPage = () => {
  const [currentSubject, setCurrentSubject] = useState('gept');
  const [geptLevel, setGeptLevel] = useState('elementary');
  
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState([]);

  // New Playback States
  const [isContinuousPlay, setIsContinuousPlay] = useState(false);
  const [isRandomMode, setIsRandomMode] = useState(false);
  const [audioMode, setAudioMode] = useState('en'); // 'en' or 'en_zh'

  const continuousRef = useRef(false);
  const currentCardRef = useRef(null);

  // Generate GEPT cards dynamically from geptAudioData
  const geptCards = useMemo(() => {
    const levelData = geptAudioData[geptLevel];
    if (!levelData) return [];
    
    let cards = [];
    
    // Add Vocabularies
    if (levelData.vocabularies) {
      cards = cards.concat(levelData.vocabularies.map(v => ({
        id: v.id,
        front: v.word,
        back: `${v.ipa || ''}\n【${v.meaning}】\n\n💬 ${v.example}\n${v.exampleZh}`,
        tag: '核心單字',
        speechFront: v.word,
        speechBack: v.example,
        speechBackZh: v.exampleZh
      })));
    }
    
    // Add Sentence Patterns
    if (levelData.sentencePatterns) {
      cards = cards.concat(levelData.sentencePatterns.map(sp => ({
        id: sp.id,
        front: sp.pattern,
        back: `💡 說明: ${sp.meaning}\n\n💬 例句: ${sp.example}`,
        tag: '實用句型',
        speechFront: sp.pattern,
        speechBack: sp.example,
        speechBackZh: sp.meaning // using meaning as zh
      })));
    }
    
    return cards;
  }, [geptLevel]);

  // Determine current deck
  const rawCards = currentSubject === 'gept' ? geptCards : (flashcardsData[currentSubject] || []);
  
  // Apply Randomization (simple random index array mapping could be complex for navigation, 
  // so we'll just shuffle when random mode toggles or on first load if random)
  const [shuffledIndices, setShuffledIndices] = useState([]);
  
  useEffect(() => {
    const indices = Array.from({ length: rawCards.length }, (_, i) => i);
    if (isRandomMode) {
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
    }
    setShuffledIndices(indices);
    setCardIndex(0); // Reset index when deck or mode changes
    setIsFlipped(false);
  }, [rawCards.length, isRandomMode, currentSubject, geptLevel]);

  const cards = shuffledIndices.map(i => rawCards[i]).filter(Boolean);
  const currentCard = cards[cardIndex] || cards[0];
  
  // Sync ref for continuous playback closures
  useEffect(() => {
    currentCardRef.current = currentCard;
  }, [currentCard]);

  // Load mastered state
  useEffect(() => {
    try {
      const storageKey = currentSubject === 'gept' ? `sixth_mastered_cards_gept_${geptLevel}` : `sixth_mastered_cards_${currentSubject}`;
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setMasteredIds(JSON.parse(saved));
      } else {
        setMasteredIds([]);
      }
    } catch (e) {}
  }, [currentSubject, geptLevel]);

  // Stop continuous play when unmounting
  useEffect(() => {
    return () => {
      continuousRef.current = false;
      speechEngine.stop();
    };
  }, []);

  useEffect(() => {
    continuousRef.current = isContinuousPlay;
    if (!isContinuousPlay) {
      speechEngine.stop();
    }
  }, [isContinuousPlay]);

  const handleFlip = () => {
    if (isContinuousPlay) return; // Prevent manual flip during continuous play
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
    if (!currentCard || isContinuousPlay) return;
    if (!masteredIds.includes(currentCard.id)) {
      const updated = [...masteredIds, currentCard.id];
      setMasteredIds(updated);
      
      const storageKey = currentSubject === 'gept' ? `sixth_mastered_cards_gept_${geptLevel}` : `sixth_mastered_cards_${currentSubject}`;
      localStorage.setItem(storageKey, JSON.stringify(updated));

      // XP reward
      try {
        const savedStats = localStorage.getItem('sixth_student_stats');
        if (savedStats) {
          const parsed = JSON.parse(savedStats);
          parsed.xp = (parsed.xp || 0) + 10;
          localStorage.setItem('sixth_student_stats', JSON.stringify(parsed));
        }
      } catch (e) {}

      playSound('correct');

      if (updated.length === cards.length) {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        playSound('levelup');
      }
    } else {
      playSound('click');
    }
    handleNext();
  };

  const handleResetSubject = () => {
    const storageKey = currentSubject === 'gept' ? `sixth_mastered_cards_gept_${geptLevel}` : `sixth_mastered_cards_${currentSubject}`;
    localStorage.removeItem(storageKey);
    setMasteredIds([]);
    setCardIndex(0);
    setIsFlipped(false);
    playSound('click');
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isContinuousPlay) return; // Disable keyboard nav during auto-play
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
  }, [cards.length, isContinuousPlay]);

  // Continuous Playback Logic
  const playCurrentCardSequence = () => {
    const c = currentCardRef.current;
    if (!c) return;

    setIsFlipped(false);
    
    // 1. Speak Front (English)
    const frontText = c.speechFront || c.front;
    speechEngine.speak(frontText, {
      lang: 'en-US',
      onEnd: () => {
        if (!continuousRef.current) return;
        
        // Wait a bit, then flip and speak back
        setTimeout(() => {
          if (!continuousRef.current) return;
          setIsFlipped(true);
          
          if (audioMode === 'en_zh' && c.speechBackZh) {
             // Speak English example, then Chinese translation
             const backTextEn = c.speechBack || c.front;
             speechEngine.speak(backTextEn, {
                lang: 'en-US',
                onEnd: () => {
                  if (!continuousRef.current) return;
                  setTimeout(() => {
                    if (!continuousRef.current) return;
                    speechEngine.speak(c.speechBackZh, {
                      lang: 'zh-TW',
                      onEnd: onSequenceEnd
                    });
                  }, 400);
                }
             });
          } else {
             // Just speak English example or front if it's not a dual card
             const backTextEn = c.speechBack || (c.speechBackZh ? c.front : c.back);
             speechEngine.speak(backTextEn, {
               lang: 'en-US',
               onEnd: onSequenceEnd
             });
          }
        }, 800);
      }
    });
  };

  const onSequenceEnd = () => {
    if (!continuousRef.current) return;
    setTimeout(() => {
      if (!continuousRef.current) return;
      setCardIndex(prev => (prev + 1) % cards.length);
    }, 1500);
  };

  useEffect(() => {
    if (isContinuousPlay && currentCardRef.current) {
      playCurrentCardSequence();
    }
  }, [cardIndex, isContinuousPlay]);

  const toggleContinuousPlay = () => {
    if (isContinuousPlay) {
      setIsContinuousPlay(false);
    } else {
      setIsContinuousPlay(true);
      // It will trigger the useEffect above
    }
  };


  const isCurrentMastered = currentCard && masteredIds.includes(currentCard.id);
  const masteryPercent = cards.length > 0 ? Math.round((masteredIds.length / cards.length) * 100) : 0;

  return (
    <div className="flex flex-col gap-6 py-4 max-w-2xl mx-auto pb-16">
      {/* Top Navigation */}
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
          <ArrowLeft size={16} /> 返回課程首頁
        </Link>
        {masteredIds.length > 0 && (
          <button 
            onClick={handleResetSubject}
            className="text-xs text-secondary hover:text-primary flex items-center gap-1"
          >
            <RotateCcw size={12} />
            <span>重置熟練度</span>
          </button>
        )}
      </div>

      {/* Header */}
      <div className="text-center">
        <span className="badge badge-warning mb-2" style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
          ⚡ 考前 3 分鐘・高頻公式與關鍵觀念速記閃卡
        </span>
        <h1 className="h1 mb-2" style={{ fontSize: 'calc(1.8rem * var(--font-scale))' }}>
          速記閃卡 (Flashcards)
        </h1>
        <p className="text-secondary text-sm" style={{ lineHeight: 1.6 }}>
          點擊卡片或按「空白鍵」翻看背面詳解，按「左右箭頭」切換閃卡！
        </p>
      </div>

      {/* Subject Selector Tabs */}
      <div className="flex justify-center gap-2 flex-wrap border-b pb-3" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <button
          className={`btn-pill ${currentSubject === 'gept' ? 'active' : ''}`}
          onClick={() => { setCurrentSubject('gept'); setIsContinuousPlay(false); }}
        >
          🔤 GEPT 核心字彙 
        </button>
        {coursesData.subjects.map(sub => {
          const count = flashcardsData[sub.id]?.length || 0;
          return (
            <button
              key={sub.id}
              className={`btn-pill ${currentSubject === sub.id ? 'active' : ''}`}
              onClick={() => { setCurrentSubject(sub.id); setIsContinuousPlay(false); }}
            >
              {sub.emoji} {sub.shortName} ({count})
            </button>
          );
        })}
      </div>

      {/* GEPT Level Selector */}
      {currentSubject === 'gept' && (
        <div className="flex justify-center gap-2 flex-wrap pb-2">
          {geptData.levels.map(lvl => (
            <button
              key={lvl.id}
              className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all border ${
                geptLevel === lvl.id
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-secondary border-gray-200 hover:border-primary hover:text-primary'
              }`}
              onClick={() => { setGeptLevel(lvl.id); setIsContinuousPlay(false); }}
            >
              {lvl.emoji} {lvl.name}
            </button>
          ))}
        </div>
      )}

      {/* Playback Controls (Mainly for GEPT / English) */}
      {(currentSubject === 'gept' || currentSubject === 'english') && (
        <div className="card p-3 flex flex-wrap items-center justify-between gap-3 bg-blue-50/50 border-blue-100">
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleContinuousPlay}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold transition-all ${
                isContinuousPlay ? 'bg-red-100 text-red-600 hover:bg-red-200' : 'bg-primary text-white hover:bg-primary/90'
              }`}
            >
              {isContinuousPlay ? <><Square size={14} fill="currentColor" /> 停止播放</> : <><Play size={14} fill="currentColor" /> 連續播放</>}
            </button>
            <button 
              onClick={() => setIsRandomMode(!isRandomMode)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold border transition-all ${
                isRandomMode ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-white border-gray-200 text-gray-600'
              }`}
              disabled={isContinuousPlay}
            >
              {isRandomMode ? <Shuffle size={14} /> : <ListOrdered size={14} />}
              <span>{isRandomMode ? '隨機' : '循序'}</span>
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-500">語音:</span>
            <button 
              onClick={() => setAudioMode('en')}
              className={`text-xs px-2.5 py-1 rounded-md font-bold transition-all ${
                audioMode === 'en' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:bg-white/50'
              }`}
              disabled={isContinuousPlay}
            >
              純英文
            </button>
            <button 
              onClick={() => setAudioMode('en_zh')}
              className={`text-xs px-2.5 py-1 rounded-md font-bold transition-all ${
                audioMode === 'en_zh' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:bg-white/50'
              }`}
              disabled={isContinuousPlay}
            >
              英+中
            </button>
          </div>
        </div>
      )}

      {/* Mastery Progress Bar */}
      <div className="card p-3" style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
        <div className="flex justify-between text-xs mb-1.5 font-bold" style={{ color: 'var(--text-secondary)' }}>
          <span>熟練進度：已掌握 {masteredIds.length} / {cards.length} 張 ({masteryPercent}%)</span>
          <span style={{ color: masteryPercent === 100 ? 'var(--accent-success)' : 'var(--accent-warning-text)' }}>
            {masteryPercent === 100 ? '🎉 全部熟練掌握！' : '⭐ 每掌握 1 張獲 +10 XP'}
          </span>
        </div>
        <div style={{ height: '6px', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
          <div 
            style={{ 
              width: `${masteryPercent}%`, 
              height: '100%', 
              backgroundColor: masteryPercent === 100 ? 'var(--accent-success)' : 'var(--accent-warning)',
              borderRadius: 'var(--radius-full)',
              transition: 'width 0.3s ease'
            }} 
          />
        </div>
      </div>

      {/* The Flashcard */}
      {currentCard && (
        <div className="flex flex-col items-center gap-4 relative">
          {isContinuousPlay && (
             <div className="absolute -top-3 right-3 z-10 animate-pulse bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
               自動播放中...
             </div>
          )}
          <div
            className={`card ${!isContinuousPlay ? 'cursor-pointer hover:shadow-lg' : ''} select-none animate-fade-in w-full text-center flex flex-col justify-between`}
            onClick={handleFlip}
            style={{
              minHeight: '260px',
              padding: '32px 28px',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: isFlipped ? 'var(--bg-secondary)' : 'var(--bg-tertiary)',
              border: isFlipped ? '2px solid var(--accent-primary)' : '1.5px solid var(--border-light)',
              boxShadow: 'var(--shadow-md)',
              transition: 'all var(--transition-normal)'
            }}
          >
            {/* Top Indicator */}
            <div className="flex justify-between items-center text-xs text-secondary mb-2">
              <span className="badge" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', fontWeight: 700 }}>
                {currentCard.tag}
              </span>
              <span className="font-bold">
                第 {cardIndex + 1} / {cards.length} 張 {isCurrentMastered && '✅ 已掌握'}
              </span>
            </div>

            {/* Main Content */}
            <div className="py-6 flex flex-col items-center justify-center" style={{ flex: 1 }}>
              <div 
                style={{ 
                  fontSize: isFlipped ? '1.15rem' : '1.35rem', 
                  fontWeight: 700, 
                  color: isFlipped ? 'var(--accent-primary)' : 'var(--text-primary)',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line'
                }}
              >
                {isFlipped ? currentCard.back : currentCard.front}
              </div>

              {(currentSubject === 'english' || currentSubject === 'gept') && !isContinuousPlay && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const textToSpeak = isFlipped ? (currentCard.speechBack || currentCard.back) : (currentCard.speechFront || currentCard.front);
                    speechEngine.speak(textToSpeak, { lang: 'en-US' });
                  }}
                  className="btn-outline mt-5 flex items-center gap-1.5"
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem',
                    backgroundColor: 'var(--accent-soft)',
                    borderColor: 'var(--accent-primary)',
                    color: 'var(--accent-primary)',
                    fontWeight: 700
                  }}
                  title="點擊聆聽發音"
                >
                  <Volume2 size={15} />
                  <span>🔊 聆聽發音</span>
                </button>
              )}
            </div>

            {/* Bottom Hint */}
            <div className="flex justify-center items-center gap-1.5 text-xs text-tertiary mt-2">
              <RotateCw size={13} />
              <span>{isContinuousPlay ? '自動翻面中...' : `點擊卡片翻面查看 ${isFlipped ? '題目' : '答案與詳解'}`}</span>
            </div>
          </div>

          {/* Controls */}
          <div className={`flex justify-between items-center w-full gap-3 flex-wrap ${isContinuousPlay ? 'opacity-50 pointer-events-none' : ''}`}>
            <button
              onClick={handlePrev}
              className="btn-outline flex items-center gap-1"
              style={{ padding: '10px 18px' }}
            >
              <ChevronLeft size={16} /> 上一張
            </button>

            <button
              onClick={handleMastered}
              className="btn-primary flex items-center gap-2 font-bold"
              style={{ 
                padding: '10px 24px', 
                backgroundColor: isCurrentMastered ? 'var(--accent-success)' : 'var(--accent-warning)',
                borderColor: isCurrentMastered ? 'var(--accent-success)' : 'var(--accent-warning)'
              }}
            >
              <CheckCircle2 size={18} />
              <span>{isCurrentMastered ? '已掌握 (再看下一張)' : '我記住了！(+10 XP)'}</span>
            </button>

            <button
              onClick={handleNext}
              className="btn-outline flex items-center gap-1"
              style={{ padding: '10px 18px' }}
            >
              下一張 <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashcardsPage;
