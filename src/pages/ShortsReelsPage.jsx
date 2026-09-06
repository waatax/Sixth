import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ChevronUp, 
  ChevronDown, 
  Heart, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  HelpCircle, 
  Share2, 
  Check, 
  Zap, 
  Flame, 
  RotateCcw,
  CheckCircle2,
  XCircle,
  Play,
  Square
} from 'lucide-react';
import { shortsReelsData } from '../data/shortsData';
import { speechEngine } from '../utils/speechHelper';
import { playSound, triggerHaptic, dispatchDynamicIsland } from '../utils/soundEffects';
import { useGamification } from '../context/GamificationContext';
import confetti from 'canvas-confetti';

const ShortsReelsPage = () => {
  const { addCoins, addXp } = useGamification();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [likedReels, setLikedReels] = useState({});
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);
  const [copied, setCopied] = useState(false);
  const [touchStartY, setTouchStartY] = useState(null);

  // Filter reels
  const filteredReels = shortsReelsData.filter(r => {
    if (selectedSubject === 'all') return true;
    return r.subject === selectedSubject;
  });

  const currentReel = filteredReels[currentIndex] || filteredReels[0];

  // Subscribe to speechEngine state
  useEffect(() => {
    const unsub = speechEngine.subscribe((state) => {
      setIsPlayingAudio(state.isPlaying);
    });
    return () => {
      unsub();
      speechEngine.stop();
    };
  }, []);

  // Stop audio on slide change
  useEffect(() => {
    speechEngine.stop();
    setIsQuizOpen(false);
    setQuizAnswered(false);
    setSelectedQuizOption(null);
  }, [currentIndex, selectedSubject]);

  // Navigate slides
  const goToNext = useCallback(() => {
    if (currentIndex < filteredReels.length - 1) {
      playSound('swipe');
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, filteredReels.length]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      playSound('swipe');
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'j') {
        goToNext();
      } else if (e.key === 'ArrowUp' || e.key === 'k') {
        goToPrev();
      } else if (e.key === ' ') {
        e.preventDefault();
        toggleAudio();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, currentReel]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    if (touchStartY === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    if (diff > 50) {
      goToNext();
    } else if (diff < -50) {
      goToPrev();
    }
    setTouchStartY(null);
  };

  // Toggle Text-to-Speech
  const toggleAudio = () => {
    if (isPlayingAudio) {
      speechEngine.stop();
    } else if (currentReel) {
      speechEngine.speak(currentReel.audioScript);
      playSound('short_pop');
    }
  };

  // Like Reel Handler
  const handleLike = (e) => {
    if (e) e.stopPropagation();
    playSound('heart_burst');
    triggerHaptic('medium');
    const id = currentReel.id;
    setLikedReels(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));

    // Trigger floating heart effect
    const newHeart = {
      id: Date.now() + Math.random(),
      left: Math.random() * 40 + 30
    };
    setFloatingHearts(prev => [...prev.slice(-8), newHeart]);
    setTimeout(() => {
      setFloatingHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 1200);
  };

  // Handle Quick Pop-Quiz Answer
  const handleQuizChoice = (idx) => {
    if (quizAnswered) return;
    setSelectedQuizOption(idx);
    setQuizAnswered(true);

    const isCorrect = idx === currentReel.popQuiz.answerIndex;
    if (isCorrect) {
      playSound('levelup');
      triggerHaptic('heavy');
      dispatchDynamicIsland({
        title: '🎯 5秒突擊快問答對！',
        subtitle: '多巴胺金幣 +35 🪙 | 經驗 +60 XP',
        icon: '⚡'
      });
      addCoins(35);
      addXp(60, 'shorts_quiz');
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#10b981', '#f59e0b', '#ec4899']
      });
    } else {
      playSound('wrong');
      triggerHaptic('error');
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    playSound('click');
    setTimeout(() => setCopied(false), 2000);
  };

  const subjectsList = [
    { id: 'all', label: '全部短影音 (All)', emoji: '🔥' },
    { id: 'math', label: '🧮 數學大神', emoji: '🧮' },
    { id: 'science', label: '🔬 自然狂人', emoji: '🔬' },
    { id: 'english', label: '🇬🇧 雙語神手', emoji: '🇬🇧' },
    { id: 'prep', label: '🎓 國中先修', emoji: '🎓' },
    { id: 'mandarin', label: '📖 國語秒懂', emoji: '📖' },
    { id: 'social', label: '🌍 社會領航', emoji: '🌍' },
    { id: 'health_pe', label: '💪 健體小鐵人', emoji: '💪' }
  ];

  if (!currentReel) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4">
        <h3 className="h3">此領域暫無短影音卡片</h3>
        <button className="btn-primary" onClick={() => setSelectedSubject('all')}>查看全部</button>
      </div>
    );
  }

  const isLiked = (likedReels[currentReel.id] || 0) > 0;
  const currentLikesCount = currentReel.likes + (likedReels[currentReel.id] || 0);

  return (
    <div className="flex flex-col gap-4 py-2 max-w-lg mx-auto pb-16 min-h-[90vh] select-none">
      {/* Top Header & Breadcrumb */}
      <div className="flex justify-between items-center px-1">
        <Link to="/" className="flex items-center gap-1.5 text-xs text-secondary hover:text-primary transition-colors">
          <ArrowLeft size={15} /> 返回首頁
        </Link>
        <div className="flex items-center gap-2">
          <span className="badge badge-accent text-[11px] font-bold">
            📱 沉浸短影音 (Reels)・30秒微學習
          </span>
          <span className="text-xs font-bold text-secondary">
            {currentIndex + 1} / {filteredReels.length}
          </span>
        </div>
      </div>

      {/* Horizontal Subject Filter Bar */}
      <div className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-none text-xs">
        {subjectsList.map(s => (
          <button
            key={s.id}
            onClick={() => {
              setSelectedSubject(s.id);
              setCurrentIndex(0);
              playSound('click');
            }}
            className={`btn-pill whitespace-nowrap flex items-center gap-1 px-3 py-1.5 text-xs ${selectedSubject === s.id ? 'active' : ''}`}
            style={{ fontSize: '0.78rem' }}
          >
            <span>{s.emoji}</span>
            <span>{s.label}</span>
          </button>
        ))}
      </div>

      {/* Main TikTok-Style Reel Phone Container */}
      <div
        className="relative w-full rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between text-white animate-fade-in"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={handleLike}
        style={{
          minHeight: '620px',
          background: `linear-gradient(160deg, #0f172a 0%, #1e1b4b 50%, #311042 100%)`,
          border: '2px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 20px 40px -15px rgba(0,0,0,0.6)'
        }}
      >
        {/* Top Floating Progress Pill & Audio Indicator */}
        <div className="p-4 flex justify-between items-center z-10">
          <div className="flex items-center gap-2">
            <span
              className="badge font-black text-xs px-2.5 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: currentReel.accentColor, color: '#ffffff' }}
            >
              {currentReel.subjectName}
            </span>
            <span className="text-[11px] text-slate-300 font-medium opacity-85">
              by {currentReel.author}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleAudio}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-md"
              style={{
                backgroundColor: isPlayingAudio ? '#10b981' : 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)',
                color: '#ffffff'
              }}
              title="點擊播放/停止語音朗讀伴學"
            >
              {isPlayingAudio ? (
                <>
                  <Square size={12} style={{ fill: '#ffffff' }} />
                  <span>停止朗讀</span>
                </>
              ) : (
                <>
                  <Volume2 size={14} />
                  <span>🔊 伴讀語音</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Floating Heart Animations on Double-Click */}
        {floatingHearts.map(h => (
          <div
            key={h.id}
            className="absolute z-30 pointer-events-none text-red-500 font-bold"
            style={{
              left: `${h.left}%`,
              bottom: '45%',
              fontSize: '2.8rem',
              animation: 'floatUp 1.2s cubic-bezier(0.1, 0.8, 0.3, 1) forwards'
            }}
          >
            ❤️
          </div>
        ))}

        {/* Center Content Zone */}
        <div className="px-5 py-2 flex flex-col justify-center flex-1 z-10">
          {/* Big Meme Icon */}
          <div className="flex items-center justify-center mb-3">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-xl transition-transform hover:scale-110"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(10px)',
                border: '1.5px solid rgba(255, 255, 255, 0.25)'
              }}
            >
              {currentReel.videoEmoji}
            </div>
          </div>

          {/* Catchy Reel Title */}
          <h2 className="text-xl sm:text-2xl font-black text-center mb-1 leading-tight tracking-tight text-white drop-shadow-md">
            {currentReel.title}
          </h2>
          <p className="text-xs text-center text-amber-300 font-bold mb-4">
            ✨ {currentReel.subtitle}
          </p>

          {/* 3 Core Micro-Cards */}
          <div className="flex flex-col gap-2 my-2">
            {currentReel.keyCards.map((card, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-2.5 rounded-xl transition-all"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}
              >
                <div className="text-2xl flex-shrink-0">{card.emoji}</div>
                <div>
                  <div className="text-xs font-bold text-white">{card.title}</div>
                  <div className="text-[11px] text-slate-200 opacity-90 leading-tight">{card.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Memory Golden Meme Banner */}
          <div
            className="mt-2 p-2.5 rounded-xl text-center text-xs font-bold text-amber-200"
            style={{
              backgroundColor: 'rgba(245, 158, 11, 0.15)',
              border: '1px dashed rgba(245, 158, 11, 0.4)'
            }}
          >
            {currentReel.funMeme}
          </div>

          {/* Instant Pop-Quiz Modal / Drawer Overlay */}
          {isQuizOpen && (
            <div
              className="mt-3 p-4 rounded-2xl animate-fade-in"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                border: '1.5px solid #3b82f6',
                boxShadow: '0 8px 30px rgba(0,0,0,0.5)'
              }}
            >
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span className="text-amber-400 flex items-center gap-1">
                  <Zap size={14} /> 5 秒突擊快答 (+35 🪙, +60 ⚡)
                </span>
                <button
                  onClick={() => setIsQuizOpen(false)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="text-xs font-extrabold text-white mb-3 leading-snug">
                {currentReel.popQuiz.question}
              </div>

              <div className="grid grid-cols-1 gap-1.5">
                {currentReel.popQuiz.options.map((opt, oIdx) => {
                  const isCorrect = oIdx === currentReel.popQuiz.answerIndex;
                  const isChosen = selectedQuizOption === oIdx;

                  let btnBg = 'rgba(255, 255, 255, 0.1)';
                  let border = '1px solid rgba(255, 255, 255, 0.2)';
                  if (quizAnswered) {
                    if (isCorrect) {
                      btnBg = 'rgba(16, 185, 129, 0.4)';
                      border = '1.5px solid #10b981';
                    } else if (isChosen && !isCorrect) {
                      btnBg = 'rgba(239, 68, 68, 0.4)';
                      border = '1.5px solid #ef4444';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={quizAnswered}
                      onClick={() => handleQuizChoice(oIdx)}
                      className="text-left text-xs p-2.5 rounded-lg flex items-center justify-between transition-all"
                      style={{ backgroundColor: btnBg, border, color: '#ffffff' }}
                    >
                      <span>{opt}</span>
                      {quizAnswered && isCorrect && <CheckCircle2 size={14} className="text-emerald-400" />}
                      {quizAnswered && isChosen && !isCorrect && <XCircle size={14} className="text-red-400" />}
                    </button>
                  );
                })}
              </div>

              {quizAnswered && (
                <div className="mt-2.5 text-[11px] text-slate-300 leading-tight">
                  <strong className="text-amber-300">解析：</strong> {currentReel.popQuiz.explanation}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Side TikTok Action Bar (Like, Quiz, Share, Navigation) */}
        <div className="absolute right-3 bottom-16 flex flex-col items-center gap-3 z-20">
          {/* Like Button */}
          <button
            onClick={handleLike}
            className="flex flex-col items-center gap-0.5 group"
            title="雙擊或點擊愛心！"
          >
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg ${
                isLiked ? 'bg-red-500 text-white' : 'bg-slate-800/80 text-white border border-white/20'
              }`}
            >
              <Heart size={20} className={isLiked ? 'fill-white' : ''} />
            </div>
            <span className="text-[10px] font-bold text-slate-200">
              {currentLikesCount}
            </span>
          </button>

          {/* Quick Quiz Trigger Button */}
          <button
            onClick={() => {
              setIsQuizOpen(!isQuizOpen);
              playSound('click');
            }}
            className="flex flex-col items-center gap-0.5 group"
            title="進行 5 秒突擊問答賺取金幣"
          >
            <div className="w-11 h-11 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-lg transition-transform group-hover:scale-110">
              <Zap size={20} className="fill-slate-950" />
            </div>
            <span className="text-[10px] font-bold text-amber-300">快問</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="flex flex-col items-center gap-0.5 group"
            title="複製短影音連結分享"
          >
            <div className="w-11 h-11 rounded-full bg-slate-800/80 text-white flex items-center justify-center border border-white/20 shadow-lg transition-transform group-hover:scale-110">
              {copied ? <Check size={18} className="text-emerald-400" /> : <Share2 size={18} />}
            </div>
            <span className="text-[10px] font-bold text-slate-200">
              {copied ? '已複製' : '分享'}
            </span>
          </button>
        </div>

        {/* Bottom Metadata & Hashtags */}
        <div className="p-4 pt-0 z-10">
          <div className="flex flex-wrap gap-1 mb-2">
            {currentReel.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Reel Progress Bar */}
          <div className="w-full bg-slate-700/60 h-1.5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-pink-500 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / filteredReels.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Up & Down Navigation Button Controls */}
      <div className="flex justify-between items-center px-4 mt-1">
        <button
          onClick={goToPrev}
          disabled={currentIndex === 0}
          className="btn-outline flex items-center gap-1 text-xs py-2 px-4 rounded-xl disabled:opacity-30"
        >
          <ChevronUp size={16} /> 上一部 (Previous)
        </button>

        <span className="text-xs text-secondary font-medium">
          鍵盤 ↑ / ↓ 快速切換
        </span>

        <button
          onClick={goToNext}
          disabled={currentIndex === filteredReels.length - 1}
          className="btn-primary flex items-center gap-1 text-xs py-2 px-4 rounded-xl disabled:opacity-30"
          style={{ backgroundColor: 'var(--accent-primary)' }}
        >
          下一部 (Next) <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default ShortsReelsPage;
