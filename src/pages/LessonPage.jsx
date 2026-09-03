import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import confetti from 'canvas-confetti';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Image as ImageIcon, 
  Sparkles, 
  ExternalLink, 
  Share2, 
  Check, 
  BookOpen, 
  Lightbulb, 
  Copy, 
  Eye, 
  Timer,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Smile,
  ShieldCheck,
  Award,
  Volume2,
  Headphones,
  Square,
  ListChecks,
  Table as TableIcon,
  Zap,
  ZoomIn,
  Maximize2,
  Minimize2,
  CheckSquare,
  PenTool,
  HelpCircle,
  RotateCcw
} from 'lucide-react';
import { coursesData } from '../data/courses';
import EnglishAudioStudio from '../components/english/EnglishAudioStudio';
import { speechEngine, extractTextFromNode, extractEnglishSentence } from '../utils/speechHelper';
import { useTheme } from '../context/ThemeContext';
import { useGamification } from '../context/GamificationContext';
import { playSound } from '../utils/soundEffects';
import LessonLightboxModal from '../components/lesson/LessonLightboxModal';
import LessonNotebookDrawer from '../components/lesson/LessonNotebookDrawer';
import LessonQuickFlashcardsModal from '../components/lesson/LessonQuickFlashcardsModal';
import InteractiveMisconceptionCard from '../components/lesson/InteractiveMisconceptionCard';
import InteractiveAnswerToggle from '../components/lesson/InteractiveAnswerToggle';
import './LessonPage.css';

// Vite dynamic import for raw markdown files
const mdModules = import.meta.glob('../data/lessons/*.md', { query: '?raw', import: 'default' });

// Helper to generate slug for H2 headings
const createSlug = (text) => {
  return String(text)
    .replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
};

const LessonPage = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const { fontSize, increaseFontSize, decreaseFontSize, focusMode, setFocusMode } = useTheme();
  const { addCoins, addXp } = useGamification();

  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);
  const [copiedTableId, setCopiedTableId] = useState(null);
  const [highlightMode, setHighlightMode] = useState(true);
  const [quickSummaryOpen, setQuickSummaryOpen] = useState(true);
  const [selectedTextBubble, setSelectedTextBubble] = useState(null);
  const [speechRate, setSpeechRate] = useState(speechEngine.rate || 1.0);
  const [isPlaying, setIsPlaying] = useState(false);

  // New Interactive Modals & Features State
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isNotebookOpen, setIsNotebookOpen] = useState(false);
  const [isFlashcardsOpen, setIsFlashcardsOpen] = useState(false);
  const [hasBookmarked, setHasBookmarked] = useState(false);

  // Concept Checklist state persisted in localStorage
  const [masteredConcepts, setMasteredConcepts] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`sixth_mastered_concepts_${unitId}`);
      setMasteredConcepts(saved ? JSON.parse(saved) : []);
      setHasBookmarked(!!localStorage.getItem(`bookmark_${unitId}`));
    } catch (e) {
      setMasteredConcepts([]);
    }
  }, [unitId]);

  // Subscribe to speechEngine state
  useEffect(() => {
    const unsub = speechEngine.subscribe((state) => {
      setIsPlaying(state.isPlaying);
      setSpeechRate(state.rate);
    });
    return unsub;
  }, []);

  // Listen for text selection inside markdown content
  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection();
      const text = selection?.toString()?.trim();
      if (text && text.length >= 2) {
        try {
          const range = selection.getRangeAt(0);
          const rect = range.getBoundingClientRect();
          setSelectedTextBubble({
            text,
            top: rect.top + window.scrollY - 44,
            left: Math.max(10, rect.left + window.scrollX + rect.width / 2 - 80)
          });
        } catch (e) {
          setSelectedTextBubble(null);
        }
      } else {
        setSelectedTextBubble(null);
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);

  // Find unit metadata and subject
  let currentUnit = null;
  let currentSubject = null;
  let unitIndex = -1;
  let prevUnit = null;
  let nextUnit = null;
  
  for (const subjectId in coursesData.units) {
    const unitsList = coursesData.units[subjectId];
    unitIndex = unitsList.findIndex(u => u.id === unitId);
    if (unitIndex !== -1) {
      currentUnit = unitsList[unitIndex];
      currentSubject = coursesData.subjects.find(s => s.id === subjectId);
      prevUnit = unitIndex > 0 ? unitsList[unitIndex - 1] : null;
      nextUnit = unitIndex < unitsList.length - 1 ? unitsList[unitIndex + 1] : null;
      break;
    }
  }

  const [hasCelebrated, setHasCelebrated] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Track scroll reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
        
        if (window.scrollY > 400) {
          setShowBackToTop(true);
        } else {
          setShowBackToTop(false);
        }

        if (progress >= 99 && !hasCelebrated) {
          setHasCelebrated(true);
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.9 },
            colors: ['#10b981', '#3b82f6', '#f59e0b', '#ec4899']
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasCelebrated]);

  useEffect(() => {
    const fetchMarkdown = async () => {
      setLoading(true);
      const path = `../data/lessons/${unitId}.md`;
      if (mdModules[path]) {
        try {
          const mdContent = await mdModules[path]();
          setContent(mdContent);
        } catch (_err) {
          setContent('# 糟糕！無法載入教學內容\n\n內容檔案可能遺失或正在建置中。');
        }
      } else {
        setContent(`# 🚧 教學內容建置中\n\n目前此單元 (${unitId}) 的深度教學內容尚未開放，敬請期待後續更新！\n\n您可以先返回單元列表，或直接進行重點測驗。`);
      }
      setLoading(false);
      window.scrollTo(0, 0);
    };

    fetchMarkdown();
  }, [unitId]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    playSound('click');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyDiagram = (codeText, id) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeId(id);
    playSound('click');
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const handleToggleBookmark = () => {
    const key = `bookmark_${unitId}`;
    if (hasBookmarked) {
      localStorage.removeItem(key);
      setHasBookmarked(false);
      playSound('click');
    } else {
      localStorage.setItem(key, 'true');
      setHasBookmarked(true);
      playSound('coin');
      addCoins(5);
    }
  };

  // Toggle Concept Mastery Checklist
  const toggleConceptMastery = (concept) => {
    setMasteredConcepts(prev => {
      const next = prev.includes(concept) 
        ? prev.filter(c => c !== concept)
        : [...prev, concept];
      try {
        localStorage.setItem(`sixth_mastered_concepts_${unitId}`, JSON.stringify(next));
      } catch (e) {}

      if (!prev.includes(concept)) {
        playSound('coin');
        addCoins(5);
        addXp(15, 'concept_check');
        if (currentUnit.keyConcepts && next.length === currentUnit.keyConcepts.length) {
          playSound('levelup');
          confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
        }
      }
      return next;
    });
  };

  // Universal TTS Narration Handler
  const toggleUniversalSpeech = () => {
    if (isPlaying) {
      speechEngine.stop();
    } else {
      const isEnglish = (currentSubject?.id === 'english' || unitId.startsWith('eng-'));
      const lang = isEnglish ? 'en-US' : 'zh-TW';
      // Speak unit title and key concepts
      const conceptsText = currentUnit.keyConcepts ? currentUnit.keyConcepts.join('，') : '';
      const textToSpeak = `${currentUnit.title}。本單元核心考點：${conceptsText}。`;
      speechEngine.speak(textToSpeak, { lang });
    }
  };

  // Extract all H2 sections from markdown content
  const sections = useMemo(() => {
    if (!content) return [];
    const lines = content.split('\n');
    const list = [];
    lines.forEach(line => {
      if (line.startsWith('## ')) {
        const title = line.replace('## ', '').trim();
        const id = createSlug(title);
        let icon = '📌';
        let shortLabel = title;
        if (title.includes('導引') || title.includes('情境') || title.includes('為什麼')) {
          icon = '🎯'; shortLabel = '學習導引';
        } else if (title.includes('觀念')) {
          icon = '🔑'; 
          const clean = title.replace(/^🔑\s*/, '').replace(/核心觀念\s*\d*[:：]?\s*/, '');
          shortLabel = clean.length > 8 ? clean.slice(0, 7) + '..' : clean;
        } else if (title.includes('範例') || title.includes('例題') || title.includes('考題')) {
          icon = '📝'; shortLabel = '經典例題講解';
        } else if (title.includes('重點') || title.includes('速查') || title.includes('整理') || title.includes('表格') || title.includes('公式')) {
          icon = '📊'; shortLabel = '重點速查表';
        } else if (title.includes('迷思')) {
          icon = '🧠'; shortLabel = '迷思大破解';
        } else if (title.includes('練習') || title.includes('測驗') || title.includes('隨堂')) {
          icon = '✏️'; shortLabel = '隨堂測驗';
        } else if (title.includes('素養') || title.includes('前瞻') || title.includes('你知道嗎') || title.includes('新知')) {
          icon = '🚀'; shortLabel = '素養前瞻';
        }
        list.push({ title, id, icon, shortLabel });
      }
    });
    return list;
  }, [content]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToSummaryTable = () => {
    const summarySec = sections.find(s => s.title.includes('重點') || s.title.includes('速查') || s.title.includes('整理') || s.title.includes('表格') || s.title.includes('公式'));
    if (summarySec) {
      scrollToSection(summarySec.id);
    } else {
      const tableEl = document.querySelector('.lesson-table-container');
      if (tableEl) {
        const yOffset = -80;
        const y = tableEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const wordCount = content.length || 1000;
  const readTimeMin = Math.max(1, Math.ceil(wordCount / 400));
  const isEnglishSubject = (currentSubject?.id === 'english' || unitId.startsWith('eng-'));

  if (!currentUnit) {
    return (
      <div className="container py-12 text-center">
        <h2 className="h2">找不到此單元資料</h2>
        <button className="btn-primary mt-4" onClick={() => navigate('/')}>返回八大學習領域</button>
      </div>
    );
  }

  return (
    <div className={`lesson-page-wrapper max-w-4xl mx-auto py-4 ${highlightMode ? 'mode-highlight-active' : ''} ${focusMode ? 'focus-mode-active' : ''}`}>
      {/* Top Reading Scroll Progress Bar */}
      <div
        className="reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Lightbox Modal */}
      <LessonLightboxModal
        isOpen={!!lightboxImage}
        imageSrc={lightboxImage?.src}
        imageAlt={lightboxImage?.alt}
        onClose={() => setLightboxImage(null)}
      />

      {/* Notebook Drawer */}
      <LessonNotebookDrawer
        isOpen={isNotebookOpen}
        onClose={() => setIsNotebookOpen(false)}
        unitId={unitId}
        unitTitle={currentUnit.title}
        subjectName={currentSubject?.name || ''}
      />

      {/* Quick Flashcards Modal */}
      <LessonQuickFlashcardsModal
        isOpen={isFlashcardsOpen}
        onClose={() => setIsFlashcardsOpen(false)}
        unit={currentUnit}
        subjectName={currentSubject?.name || ''}
      />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-primary)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            zIndex: 100,
            cursor: 'pointer',
            border: 'none',
            transition: 'transform 0.2s, opacity 0.2s',
            opacity: showBackToTop ? 1 : 0,
            transform: showBackToTop ? 'scale(1)' : 'scale(0.8)'
          }}
          title="回到最上方"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Top Navigation & Fast Control Bar */}
      <div
        className="card mb-4 flex justify-between items-center flex-wrap gap-3"
        style={{
          padding: '12px 18px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1.5px solid var(--border-light)',
          borderRadius: 'var(--radius-lg)'
        }}
      >
        <button 
          className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors font-bold" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} /> 返回單元列表
        </button>

        {/* Center Badges & Quick Action Hub */}
        <div className="flex items-center gap-2 flex-wrap">
          {currentSubject && (
            <span
              className="badge"
              style={{
                backgroundColor: `${currentSubject.color}20`,
                color: currentSubject.color,
                fontWeight: 700
              }}
            >
              {currentSubject.name}
            </span>
          )}

          <span className="badge badge-accent flex items-center gap-1">
            <Timer size={13} />
            約 {readTimeMin} 分鐘
          </span>

          <button 
            className="badge cursor-pointer hover:opacity-90 transition-all flex items-center gap-1"
            style={{ 
              backgroundColor: 'rgba(245, 158, 11, 0.15)', 
              color: '#d97706',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              fontWeight: 700
            }}
            onClick={scrollToSummaryTable}
            title="一鍵直達本單元核心重點與公式速查表格"
          >
            <Zap size={13} style={{ fill: '#d97706' }} />
            <span>📊 考前速查</span>
          </button>

          {/* Quick Flashcards Button */}
          <button
            onClick={() => setIsFlashcardsOpen(true)}
            className="badge cursor-pointer flex items-center gap-1"
            style={{
              backgroundColor: 'var(--accent-purple-soft)',
              color: 'var(--accent-purple)',
              border: '1px solid rgba(147, 51, 234, 0.3)',
              fontWeight: 700
            }}
            title="開啟考前速記翻牌卡"
          >
            <span>🃏 速記卡</span>
          </button>

          {/* Notebook Drawer Button */}
          <button
            onClick={() => setIsNotebookOpen(true)}
            className="badge cursor-pointer flex items-center gap-1"
            style={{
              backgroundColor: 'var(--accent-soft)',
              color: 'var(--accent-primary)',
              border: '1px solid rgba(37, 99, 235, 0.3)',
              fontWeight: 700
            }}
            title="開啟隨堂個人便利貼筆記本"
          >
            <PenTool size={12} />
            <span>📝 筆記</span>
          </button>

          {/* Bookmark Button */}
          <button 
            className={`badge cursor-pointer transition-all flex items-center gap-1 ${hasBookmarked ? 'badge-success' : 'badge-secondary'}`}
            onClick={handleToggleBookmark}
            title={hasBookmarked ? '點擊取消收藏' : '點擊收藏本單元重點'}
          >
            <Bookmark size={12} style={{ fill: hasBookmarked ? 'currentColor' : 'none' }} />
            <span>{hasBookmarked ? '已收藏' : '收藏'}</span>
          </button>
        </div>

        {/* Right Actions: Font Size, Focus Mode, Highlight Mode & Share */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Font scale buttons */}
          <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg p-0.5 bg-tertiary">
            <button
              onClick={decreaseFontSize}
              className="px-2 py-0.5 text-xs font-bold text-secondary hover:text-primary"
              title="縮小字級"
            >
              A-
            </button>
            <span className="text-[10px] font-mono text-tertiary px-1">字級</span>
            <button
              onClick={increaseFontSize}
              className="px-2 py-0.5 text-xs font-bold text-secondary hover:text-primary"
              title="放大字級"
            >
              A+
            </button>
          </div>

          {/* Focus mode toggle */}
          <button
            onClick={() => setFocusMode(!focusMode)}
            className={`btn-outline p-1.5 rounded-lg text-xs flex items-center gap-1 ${focusMode ? 'bg-blue-50 text-blue-600 border-blue-300' : ''}`}
            title={focusMode ? '結束專注模式' : '開啟沉浸專注閱讀模式'}
          >
            {focusMode ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            <span className="hidden sm:inline">{focusMode ? '標準' : '專注'}</span>
          </button>

          <button
            onClick={() => setHighlightMode(!highlightMode)}
            className={`btn-outline ${highlightMode ? 'active-highlight-btn' : ''}`}
            style={{ 
              padding: '5px 10px', 
              fontSize: '0.78rem',
              borderColor: highlightMode ? 'var(--accent-warning)' : 'var(--border-light)',
              backgroundColor: highlightMode ? 'var(--accent-warning-soft)' : 'transparent',
              color: highlightMode ? 'var(--accent-warning-text)' : 'var(--text-secondary)'
            }}
            title="切換關鍵公式與重點色彩高亮"
          >
            <Lightbulb size={13} style={{ color: highlightMode ? '#f59e0b' : 'inherit' }} />
            <span className="hidden sm:inline">{highlightMode ? '螢光筆' : '螢光筆關'}</span>
          </button>

          <button
            onClick={handleShare}
            className="btn-outline p-1.5 rounded-lg text-xs"
            title="複製此單元連結分享"
          >
            {copied ? <Check size={14} style={{ color: 'var(--accent-success)' }} /> : <Share2 size={14} />}
          </button>
        </div>
      </div>

      {/* 🎯 30-Second Scaffolding Quick Concepts Card with Interactive Checklist */}
      {currentUnit.keyConcepts && currentUnit.keyConcepts.length > 0 && (
        <div 
          className="card mb-3 overflow-hidden" 
          style={{ 
            padding: '0',
            borderRadius: 'var(--radius-lg)',
            border: '1.5px solid var(--border-light)',
            backgroundColor: 'var(--bg-secondary)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div 
            onClick={() => setQuickSummaryOpen(!quickSummaryOpen)}
            className="flex justify-between items-center cursor-pointer select-none"
            style={{
              padding: '12px 18px',
              backgroundColor: 'var(--bg-tertiary)',
              borderBottom: quickSummaryOpen ? '1px solid var(--border-light)' : 'none'
            }}
          >
            <div className="flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
              <Smile size={16} style={{ color: 'var(--accent-primary)' }} />
              <span>💡 30 秒安心導讀・核心考點自評打卡</span>
              <span className="badge badge-success" style={{ fontSize: '0.7rem' }}>零基礎必看</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-secondary">
              <span className="font-bold text-emerald-600 dark:text-emerald-400">
                已掌握 {masteredConcepts.length} / {currentUnit.keyConcepts.length}
              </span>
              {quickSummaryOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </div>

          {quickSummaryOpen && (
            <div style={{ padding: '16px 20px', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.03) 0%, rgba(16, 185, 129, 0.03) 100%)' }}>
              <p className="text-xs text-secondary mb-2.5">
                點擊下方考點即可<strong>打卡標記掌握</strong>！搞懂這幾個關鍵詞，段考題就能迎刃而解：
              </p>
              <div className="flex flex-wrap gap-2">
                {currentUnit.keyConcepts.map((concept, idx) => {
                  const isMastered = masteredConcepts.includes(concept);
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleConceptMastery(concept)}
                      className={`concept-checklist-pill ${isMastered ? 'mastered' : ''}`}
                      title={isMastered ? '已掌握此考點 (點擊取消)' : '點擊標記掌握 (+15 XP, +5 🪙)'}
                    >
                      {isMastered ? <CheckCircle2 size={14} style={{ color: 'var(--accent-success)' }} /> : <span>⭐</span>}
                      <span>{concept}</span>
                      {isMastered && <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">已打卡</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 🧭 Dynamic Section Jump Navigation Bar */}
      {sections.length > 0 && (
        <div 
          className="card mb-5 lesson-section-nav-card"
          style={{
            padding: '12px 16px',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            border: '1.5px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
              <ListChecks size={15} style={{ color: 'var(--accent-primary)' }} />
              <span>📑 單元章節快速導航・點擊直達重點板塊：</span>
            </div>
            <span className="text-xs text-tertiary hidden sm:inline">共 {sections.length} 個主要板塊</span>
          </div>
          <div className="lesson-section-nav-pills flex flex-wrap gap-1.5">
            {sections.map((sec, idx) => {
              const isSummary = sec.shortLabel.includes('重點') || sec.shortLabel.includes('速查') || sec.title.includes('表格') || sec.title.includes('公式');
              return (
                <button
                  key={idx}
                  className={`section-nav-pill ${isSummary ? 'highlight-summary-pill' : ''}`}
                  onClick={() => scrollToSection(sec.id)}
                  title={`點擊直達：${sec.title}`}
                >
                  <span className="pill-icon">{sec.icon}</span>
                  <span className="pill-text">{sec.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 🎧 Universal Speech / Audio Companion Bar */}
      {isEnglishSubject ? (
        <>
          <div className="english-speed-sticky-bar animate-fade-in">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="speed-badge-pill">
                <Volume2 size={16} />
                <span>英文朗讀語速設定：</span>
              </span>
              <div className="speed-selector-group">
                {[
                  { label: '🐢 0.75x 慢速跟讀', val: 0.75 },
                  { label: '🎯 1.0x 標準美式', val: 1.0 },
                  { label: '🚀 1.25x 挑戰進階', val: 1.25 },
                  { label: '⚡ 1.5x 快速聽力', val: 1.5 }
                ].map(s => (
                  <button
                    key={s.val}
                    className={`speed-btn ${speechRate === s.val ? 'active' : ''}`}
                    onClick={() => {
                      setSpeechRate(s.val);
                      speechEngine.setRate(s.val);
                    }}
                    title={`將全站英文發音速度設為 ${s.val}x`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {isPlaying && (
                <button className="btn-audio-stop" onClick={() => speechEngine.stop()}>
                  <Square size={12} style={{ fill: 'currentColor' }} />
                  <span>停止朗讀</span>
                </button>
              )}
              <span className="text-xs text-secondary hidden sm:inline">
                💡 點擊課文內任何例句、單字或表格 🔊 皆以此語速播放
              </span>
            </div>
          </div>
          <EnglishAudioStudio unitId={unitId} />
        </>
      ) : (
        /* Universal Companion for Math, Science, Mandarin, Social, Art, PE */
        <div 
          className="card mb-4 p-3 flex items-center justify-between flex-wrap gap-2 animate-fade-in"
          style={{ 
            backgroundColor: 'var(--bg-secondary)', 
            border: '1.5px solid var(--border-light)',
            borderRadius: 'var(--radius-lg)'
          }}
        >
          <div className="flex items-center gap-2">
            <span className="badge badge-accent flex items-center gap-1 font-bold text-xs">
              <Headphones size={14} />
              <span>🎙️ 全科學力語音伴讀</span>
            </span>
            <span className="text-xs text-secondary hidden md:inline">
              支援臺灣國語發音，點擊右側即可聆聽本課導讀，劃選任一段落亦可發音
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleUniversalSpeech}
              className="btn-primary text-xs py-1.5 px-3 flex items-center gap-1.5 rounded-lg font-bold"
            >
              {isPlaying ? (
                <>
                  <Square size={12} style={{ fill: 'white' }} />
                  <span>停止朗讀</span>
                </>
              ) : (
                <>
                  <Volume2 size={14} />
                  <span>🔊 語音導讀本課核心</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Main Core Generated Lesson Content */}
      {loading ? (
        <div className="card text-center py-12">
          <Sparkles className="animate-spin mb-2 mx-auto text-primary" size={32} />
          <p className="text-secondary">載入深度圖解教學內容中...</p>
        </div>
      ) : (
        <div
          className="card markdown-body animate-fade-in"
          style={{
            padding: '36px',
            boxShadow: 'var(--shadow-sm)',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-xl)',
            border: '1.5px solid var(--border-light)'
          }}
        >
          {isEnglishSubject && (
            <div 
              className="flex items-center gap-2 mb-4 p-3 rounded-lg text-xs font-semibold"
              style={{
                backgroundColor: 'rgba(37, 99, 235, 0.08)',
                border: '1px solid rgba(37, 99, 235, 0.2)',
                color: 'var(--accent-primary)'
              }}
            >
              <Volume2 size={16} />
              <span>💡 英語全篇語音指南：課文中所有表格、例句、對話與粗體字皆附有「🔊 聽發音」按鈕，劃詞亦可即時聆聽！</span>
            </div>
          )}

          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              h2: ({ node, children, ...props }) => {
                const rawText = extractTextFromNode(node) || String(children);
                const slug = createSlug(rawText);
                return (
                  <div className="flex items-center justify-between gap-2 lesson-section-h2-container">
                    <h2 id={slug} className="lesson-section-h2" style={{ flex: 1 }} {...props}>
                      {children}
                    </h2>
                    <button
                      onClick={() => {
                        const lang = isEnglishSubject ? 'en-US' : 'zh-TW';
                        speechEngine.speak(rawText, { lang });
                      }}
                      className="btn-outline flex items-center gap-1 text-xs py-1 px-2.5 rounded-full"
                      style={{ fontSize: '0.75rem', borderColor: 'var(--border-strong)', flexShrink: 0 }}
                      title={`朗讀此章節標題：${rawText}`}
                    >
                      <Volume2 size={13} style={{ color: 'var(--accent-primary)' }} />
                      <span className="hidden sm:inline">伴讀</span>
                    </button>
                  </div>
                );
              },
              img: ({ node, src, alt, ...props }) => {
                let normalizedSrc = src || '';
                if (normalizedSrc.startsWith('./images/')) {
                  normalizedSrc = normalizedSrc.replace('./images/', '/images/');
                } else if (normalizedSrc.startsWith('images/')) {
                  normalizedSrc = '/' + normalizedSrc;
                }

                return (
                  <figure className="lesson-visual-figure">
                    <div 
                      className="lesson-visual-img-container"
                      onClick={() => setLightboxImage({ src: normalizedSrc, alt: alt || '圖解' })}
                      title="點擊開啟高清放大燈箱檢視"
                    >
                      <img 
                        src={normalizedSrc} 
                        alt={alt || '教學圖解'} 
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const fallbackEl = e.target.nextSibling;
                          if (fallbackEl) fallbackEl.style.display = 'flex';
                        }}
                        {...props} 
                      />
                      <div className="lesson-img-fallback-card" style={{ display: 'none' }}>
                        <div style={{ fontSize: '2.5rem' }}>📐 🎨</div>
                        <div className="font-bold text-xs" style={{ color: 'var(--accent-primary)' }}>
                          視覺核心概念圖解：{alt || '知識結構'}
                        </div>
                        <div className="text-[11px] text-secondary">
                          點擊開啟高清檢視
                        </div>
                      </div>
                      <div className="lesson-visual-zoom-badge">
                        <ZoomIn size={13} />
                        <span>點擊放大檢視</span>
                      </div>
                    </div>
                    {alt && (
                      <figcaption className="lesson-visual-figcaption">
                        <ImageIcon size={14} style={{ color: 'var(--accent-primary)' }} />
                        <span>{alt}</span>
                      </figcaption>
                    )}
                  </figure>
                );
              },
              p: ({ node, children, ...props }) => {
                const rawText = extractTextFromNode(node) || '';
                
                // 1. Detect interactive misconception block: ❌ ... ✅ ...
                if (rawText.includes('❌') && (rawText.includes('迷思') || rawText.includes('錯誤觀念') || rawText.includes('正確觀念'))) {
                  const parts = rawText.split(/✅\s*(?:\*\*正確觀念[:：]?\*\*[:：]?|正確觀念[:：]?)/);
                  if (parts.length >= 2) {
                    const mythText = parts[0].replace(/^❌\s*(?:\*\*迷思\s*\d*[:：]?\*\*[:：]?|迷思\s*\d*[:：]?)/, '').trim();
                    const truthText = parts[1].trim();
                    return (
                      <InteractiveMisconceptionCard 
                        mythText={mythText} 
                        truthText={truthText} 
                        isEnglish={isEnglishSubject}
                      />
                    );
                  }
                }

                // 2. Detect answer and explanation spoiler block
                const isAnswerOrExpl = (
                  rawText.startsWith('**答案**') || 
                  rawText.startsWith('**解答**') || 
                  rawText.startsWith('答案：') || 
                  rawText.startsWith('解答：') ||
                  rawText.includes('**詳細解析**') ||
                  rawText.includes('💡 【詳細解析與解答】')
                );

                if (isAnswerOrExpl) {
                  return (
                    <InteractiveAnswerToggle 
                      rawText={rawText} 
                      isEnglish={isEnglishSubject}
                    >
                      <p {...props}>{children}</p>
                    </InteractiveAnswerToggle>
                  );
                }

                return <p {...props}>{children}</p>;
              },
              details: ({ node, children, ...props }) => {
                return (
                  <details {...props} className="lesson-custom-details animate-fade-in">
                    {children}
                  </details>
                );
              },
              table: ({ node, ...props }) => {
                const rawText = extractTextFromNode(node) || '';
                const tableId = rawText.slice(0, 15);
                return (
                  <div className="lesson-table-container">
                    <div className="table-top-indicator flex justify-between items-center">
                      <span className="table-top-badge flex items-center gap-1.5">
                        <TableIcon size={13} style={{ color: 'var(--accent-primary)' }} />
                        <span>📊 重點歸納與公式對照表 (Key Knowledge & Formulas)</span>
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="table-scroll-hint hidden sm:inline text-xs text-secondary">
                          💡 考前必背精華
                        </span>
                        <button
                          onClick={() => handleCopyDiagram(rawText, tableId)}
                          className="table-copy-btn text-xs flex items-center gap-1"
                          title="複製表格內容"
                        >
                          {copiedCodeId === tableId ? (
                            <>
                              <Check size={12} style={{ color: 'var(--accent-success)' }} />
                              <span>已複製</span>
                            </>
                          ) : (
                            <>
                              <Copy size={12} />
                              <span>複製表格</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="table-scroll-inner">
                      <table {...props} />
                    </div>
                  </div>
                );
              },
              td: ({ node, children, ...props }) => {
                if (!isEnglishSubject) return <td {...props}>{children}</td>;

                const rawText = extractTextFromNode(node);
                const engSentence = extractEnglishSentence(rawText);

                return (
                  <td {...props}>
                    {children}
                    {engSentence && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speechEngine.speak(engSentence);
                        }}
                        className="table-speech-trigger"
                        title={`🔊 點擊聆聽此格英文發音: "${engSentence}"`}
                      >
                        <Volume2 size={12} />
                      </button>
                    )}
                  </td>
                );
              },
              li: ({ node, children, ...props }) => {
                const rawText = extractTextFromNode(node);
                
                // If this list item contains detailed explanation or answer, wrap in answer toggle
                if (rawText.startsWith('**詳細解析**') || rawText.startsWith('**答案**') || rawText.startsWith('解答：')) {
                  return (
                    <li {...props} style={{ listStyle: 'none' }}>
                      <InteractiveAnswerToggle rawText={rawText} isEnglish={isEnglishSubject}>
                        <span>{children}</span>
                      </InteractiveAnswerToggle>
                    </li>
                  );
                }

                if (!isEnglishSubject) return <li {...props}>{children}</li>;

                const engSentence = extractEnglishSentence(rawText);

                return (
                  <li {...props}>
                    <span>{children}</span>
                    {engSentence && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speechEngine.speak(engSentence);
                        }}
                        className="inline-pronounce-btn"
                        style={{ marginLeft: '8px' }}
                        title={`🔊 點擊聆聽此例句發音: "${engSentence}"`}
                      >
                        <Volume2 size={11} />
                        <span>聽例句</span>
                      </button>
                    )}
                  </li>
                );
              },
              blockquote: ({ node, children, ...props }) => {
                const rawText = extractTextFromNode(node);
                const engSentence = extractEnglishSentence(rawText);

                return (
                  <blockquote className="dialogue-bubble-quote" {...props}>
                    <div style={{ flex: 1 }}>{children}</div>
                    {isEnglishSubject && engSentence ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speechEngine.speak(engSentence);
                        }}
                        className="btn-outline flex items-center gap-1 text-xs"
                        style={{
                          padding: '4px 10px',
                          borderRadius: 'var(--radius-full)',
                          flexShrink: 0,
                          backgroundColor: 'var(--accent-soft)',
                          borderColor: 'var(--accent-primary)',
                          color: 'var(--accent-primary)',
                          fontWeight: 700
                        }}
                        title={`🔊 點擊聆聽此段對話: "${engSentence}"`}
                      >
                        <Volume2 size={13} />
                        <span>🔊 聽對話</span>
                      </button>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speechEngine.speak(rawText, { lang: 'zh-TW' });
                        }}
                        className="btn-outline flex items-center gap-1 text-xs"
                        style={{
                          padding: '4px 10px',
                          borderRadius: 'var(--radius-full)',
                          flexShrink: 0,
                          backgroundColor: 'var(--accent-soft)',
                          borderColor: 'var(--accent-primary)',
                          color: 'var(--accent-primary)',
                          fontWeight: 700
                        }}
                        title="🔊 聆聽老師叮嚀語音"
                      >
                        <Volume2 size={13} />
                        <span>🔊 聽叮嚀</span>
                      </button>
                    )}
                  </blockquote>
                );
              },
              em: ({ node, children, ...props }) => {
                const text = String(children);
                const isEnglish = isEnglishSubject && /[a-zA-Z]{2,}/.test(text);

                return (
                  <em 
                    className={isEnglish ? 'cursor-pointer hover:text-primary transition-colors' : ''}
                    onClick={() => {
                      if (isEnglish) speechEngine.speak(text);
                    }}
                    title={isEnglish ? `🔊 點擊聆聽發音: "${text}"` : undefined}
                    {...props}
                  >
                    {children}
                    {isEnglish && (
                      <Volume2 size={11} style={{ display: 'inline', marginLeft: '2px', opacity: 0.7, verticalAlign: 'middle' }} />
                    )}
                  </em>
                );
              },
              code: ({ node, inline, className, children, ...props }) => {
                const textContent = String(children).replace(/\n$/, '');

                if (inline) {
                  const isEnglish = isEnglishSubject && /^[a-zA-Z0-9\s',.?!/-]+$/.test(textContent.trim());

                  return (
                    <code 
                      className={`inline-code-pill ${isEnglish ? 'cursor-pointer hover:opacity-80' : ''}`}
                      onClick={() => {
                        if (isEnglish) {
                          speechEngine.speak(textContent);
                        }
                      }}
                      title={isEnglish ? `🔊 點擊聆聽英文發音: "${textContent}"` : undefined}
                      {...props}
                    >
                      {children}
                      {isEnglish && (
                        <Volume2 size={11} style={{ display: 'inline', marginLeft: '4px', verticalAlign: 'middle', opacity: 0.7 }} />
                      )}
                    </code>
                  );
                }

                return (
                  <div className="visual-diagram-card my-5">
                    <div className="diagram-header flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold" style={{ color: 'var(--accent-primary)' }}>
                        <BookOpen size={14} />
                        <span>🎨 視覺概念模型與圖解架構 (Visual Concept Diagram)</span>
                      </div>
                      <button
                        onClick={() => handleCopyDiagram(textContent, textContent.slice(0, 15))}
                        className="diagram-copy-btn text-xs flex items-center gap-1"
                        title="複製圖解內容"
                      >
                        {copiedCodeId === textContent.slice(0, 15) ? (
                          <>
                            <Check size={12} style={{ color: 'var(--accent-success)' }} />
                            <span>已複製</span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            <span>複製圖解</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="diagram-pre">
                      <code className={className} {...props}>
                        {children}
                      </code>
                    </pre>
                  </div>
                );
              }
            }}
          >
            {content}
          </ReactMarkdown>

          {/* Floating Selection Audio Tooltip */}
          {selectedTextBubble && (
            <div
              style={{
                position: 'absolute',
                top: `${selectedTextBubble.top}px`,
                left: `${selectedTextBubble.left}px`,
                zIndex: 9999
              }}
              className="animate-fade-in"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const lang = /[a-zA-Z]{2,}/.test(selectedTextBubble.text) ? 'en-US' : 'zh-TW';
                  speechEngine.speak(selectedTextBubble.text, { lang });
                }}
                className="btn-primary flex items-center gap-1 text-xs"
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  backgroundColor: 'var(--accent-primary)',
                  color: '#ffffff'
                }}
                title="朗讀所選取的文字或句子"
              >
                <Volume2 size={13} />
                <span>🔊 朗讀所選: "{selectedTextBubble.text.length > 18 ? selectedTextBubble.text.slice(0, 18) + '...' : selectedTextBubble.text}"</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Bottom Action Footer: Growth-Mindset Celebration Card */}
      <div
        className="card mt-8 flex justify-between items-center flex-wrap gap-4"
        style={{
          padding: '24px 28px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1.5px solid var(--border-light)',
          borderTop: '4px solid var(--accent-success)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div>
          <div className="flex items-center gap-2" style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
            <Award size={20} style={{ color: 'var(--accent-success)' }} />
            <span>🎉 本課核心觀念已融會貫通！</span>
          </div>
          <div className="text-sm text-secondary" style={{ marginTop: '4px', lineHeight: 1.6 }}>
            太棒了！只要花 2 分鐘做 3 道隨堂小測驗，就能賺取 <strong style={{ color: 'var(--accent-success-text)' }}>+50 XP 經驗值</strong> 並解鎖榮譽勳章！
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {currentUnit.videoUrl && (
            <a 
              href={currentUnit.videoUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-outline text-sm flex items-center gap-1"
              style={{ padding: '10px 18px', borderRadius: 'var(--radius-md)' }}
              title="前往均一教育平台觀看相關教學影音"
            >
              <span>📺 均一影音輔助</span>
              <ExternalLink size={14} />
            </a>
          )}

          <button 
            className="btn-primary flex items-center gap-2" 
            onClick={() => navigate(`/quiz/${unitId}`)}
            style={{
              padding: '12px 26px',
              fontSize: '1rem',
              fontWeight: 700,
              backgroundColor: 'var(--accent-success)',
              borderColor: 'var(--accent-success)',
              color: 'white',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
            }}
          >
            <CheckCircle2 size={18} /> 進入觀念小測驗 (+50 XP) →
          </button>
        </div>
      </div>

      {/* Next/Prev Unit Navigation */}
      <div className="flex justify-between items-center mt-6 pt-6 border-t border-light">
        {prevUnit ? (
          <button
            onClick={() => navigate(`/lesson/${prevUnit.id}`)}
            className="btn-outline flex items-center gap-2"
          >
            <ArrowLeft size={16} /> 
            <div className="text-left">
              <div className="text-xs text-tertiary">上一單元</div>
              <div className="font-bold text-sm">{prevUnit.title}</div>
            </div>
          </button>
        ) : (
          <div></div>
        )}
        
        {nextUnit ? (
          <button
            onClick={() => navigate(`/lesson/${nextUnit.id}`)}
            className="btn-primary flex items-center gap-2 bg-accent-soft text-accent-primary hover:bg-accent-primary hover:text-white"
            style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent-primary)', border: 'none' }}
          >
            <div className="text-right">
              <div className="text-xs opacity-80">下一單元</div>
              <div className="font-bold text-sm">{nextUnit.title}</div>
            </div>
            <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default LessonPage;
