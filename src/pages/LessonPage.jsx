import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
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
  Flame,
  Bookmark
} from 'lucide-react';
import { coursesData } from '../data/courses';
import './LessonPage.css';

// Vite dynamic import for raw markdown files
const mdModules = import.meta.glob('../data/lessons/*.md', { query: '?raw', import: 'default' });

// Subject to illustration mapping
const subjectImages = {
  math: {
    src: './images/math_visual.jpg',
    title: '【圖解】立體幾何展開・分數切割圓餅・坐標軸與精準測量'
  },
  science: {
    src: './images/science_visual.jpg',
    title: '【圖解】氣象鋒面預報・電磁鐵電路・槓桿天平與生態循環'
  },
  mandarin: {
    src: './images/social_visual.jpg',
    title: '【圖解】古典文言書卷・修辭結構圖解與邏輯思維'
  },
  social: {
    src: './images/social_visual.jpg',
    title: '【圖解】臺灣民主投票・多元族群文化傳承與SDGs永續目標'
  },
  english: {
    src: './images/english_arts_visual.jpg',
    title: '【圖解】日常作息情境・時態圖解與世界節慶對話'
  },
  arts: {
    src: './images/english_arts_visual.jpg',
    title: '【圖解】色彩調色盤環・五線譜樂理與設計思考五步驟'
  },
  health_pe: {
    src: './images/english_arts_visual.jpg',
    title: '【圖解】CPR+AED急救口訣・運動體適能與我的餐盤'
  },
  integrative: {
    src: './images/english_arts_visual.jpg',
    title: '【圖解】時間管理四象限・多元智能與自主學習成長地圖'
  }
};

const LessonPage = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);
  const [highlightMode, setHighlightMode] = useState(true);

  // Find unit metadata and subject
  let currentUnit = null;
  let currentSubject = null;
  for (const subjectId in coursesData.units) {
    const unit = coursesData.units[subjectId].find(u => u.id === unitId);
    if (unit) {
      currentUnit = unit;
      currentSubject = coursesData.subjects.find(s => s.id === subjectId);
      break;
    }
  }

  const subjectIllustration = currentSubject ? subjectImages[currentSubject.id] : null;

  // Track scroll reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyDiagram = (codeText, id) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  if (!currentUnit) {
    return (
      <div className="container py-12 text-center">
        <h2 className="h2">找不到此單元資料</h2>
        <button className="btn-primary mt-4" onClick={() => navigate('/')}>返回八大學習領域</button>
      </div>
    );
  }

  return (
    <div className={`lesson-page-wrapper max-w-4xl mx-auto py-4 ${highlightMode ? 'mode-highlight-active' : ''}`}>
      {/* Top Reading Scroll Progress Bar */}
      <div
        className="reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Top Navigation & Control Bar */}
      <div
        className="card mb-4 flex justify-between items-center flex-wrap gap-3"
        style={{
          padding: '12px 18px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-light)'
        }}
      >
        <button 
          className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} /> 返回單元列表
        </button>

        {/* Center Badges */}
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
            <Flame size={13} />
            高頻考點精講
          </span>
          <span className="badge badge-success">
            ✨ +10% 現代素養
          </span>
        </div>

        {/* Right Actions: Highlight Mode & Share */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setHighlightMode(!highlightMode)}
            className={`btn-outline ${highlightMode ? 'active-highlight-btn' : ''}`}
            style={{ 
              padding: '6px 12px', 
              minHeight: '34px', 
              fontSize: '0.8rem',
              borderColor: highlightMode ? 'var(--accent-primary)' : 'var(--border-light)',
              backgroundColor: highlightMode ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
              color: highlightMode ? 'var(--accent-primary)' : 'var(--text-secondary)'
            }}
            title="切換關鍵公式與重點色彩高亮"
          >
            <Lightbulb size={14} style={{ color: highlightMode ? '#f59e0b' : 'inherit' }} />
            <span>{highlightMode ? '重點高亮：開啟' : '重點高亮：一般'}</span>
          </button>

          <button
            onClick={handleShare}
            className="btn-outline"
            style={{ padding: '6px 12px', minHeight: '34px', fontSize: '0.8rem' }}
            title="複製此單元連結分享"
          >
            {copied ? <Check size={14} style={{ color: 'var(--accent-success)' }} /> : <Share2 size={14} />}
            <span>{copied ? '已複製' : '分享單元'}</span>
          </button>
        </div>
      </div>

      {/* Unit Overview & Key Concepts Quick Card */}
      {currentUnit.keyConcepts && currentUnit.keyConcepts.length > 0 && (
        <div 
          className="card mb-4" 
          style={{ 
            padding: '16px 20px', 
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.04) 0%, rgba(16, 185, 129, 0.04) 100%)',
            border: '1px solid var(--border-light)',
            borderLeft: '4px solid var(--accent-primary)'
          }}
        >
          <div className="flex items-center gap-2 mb-2 text-sm" style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>
            <Bookmark size={16} />
            <span>🎯 本單元核心考點與學習關鍵字</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {currentUnit.keyConcepts.map((concept, idx) => (
              <span 
                key={idx} 
                className="badge" 
                style={{ 
                  backgroundColor: 'var(--bg-secondary)', 
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  padding: '4px 10px'
                }}
              >
                ✨ {concept}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Featured Educational Illustration Banner */}
      {subjectIllustration && (
        <div
          className="card mb-6"
          style={{
            padding: '16px',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-light)'
          }}
        >
          <div className="flex items-center justify-between mb-2 text-sm">
            <span style={{ color: 'var(--accent-primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ImageIcon size={17} />
              {subjectIllustration.title}
            </span>
            <span className="badge badge-accent">專屬圖解輔助</span>
          </div>
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-light)' }}>
            <img 
              src={subjectIllustration.src} 
              alt={subjectIllustration.title} 
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '340px', objectFit: 'cover' }} 
              loading="lazy"
            />
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
            backgroundColor: 'var(--bg-secondary)'
          }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              table: ({ _node, ...props }) => (
                <div className="lesson-table-container">
                  <table {...props} />
                </div>
              ),
              code: ({ node, inline, className, children, ...props }) => {
                const textContent = String(children).replace(/\n$/, '');
                const isDiagram = textContent.includes('─') || 
                                  textContent.includes('│') || 
                                  textContent.includes('┌') || 
                                  textContent.includes('▼') || 
                                  textContent.includes('【') ||
                                  textContent.includes('──') ||
                                  textContent.includes('|');

                if (inline) {
                  return (
                    <code className="inline-code-pill" {...props}>
                      {children}
                    </code>
                  );
                }

                return (
                  <div className="visual-diagram-card my-5">
                    <div className="diagram-header flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold" style={{ color: 'var(--accent-primary)' }}>
                        <BookOpen size={14} />
                        <span>🎨 視覺概念模型與圖解架構 (Visual Diagram)</span>
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
        </div>
      )}

      {/* Bottom Action Footer */}
      <div
        className="card mt-8 flex justify-between items-center flex-wrap gap-4"
        style={{
          padding: '24px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-light)',
          borderTop: '4px solid var(--accent-success)'
        }}
      >
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
            🎯 本單元核心概念已融會貫通？
          </div>
          <div className="text-sm text-secondary" style={{ marginTop: '4px' }}>
            立即透過即時互動測驗檢驗學習成效，並獲取名師詳解與 +50 XP 經驗值！
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {currentUnit.videoUrl && (
            <a 
              href={currentUnit.videoUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-outline text-sm flex items-center gap-1"
              style={{ padding: '10px 18px' }}
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
              padding: '10px 24px',
              fontSize: '1rem',
              backgroundColor: 'var(--accent-success)',
              borderColor: 'var(--accent-success)',
              color: 'white'
            }}
          >
            <CheckCircle2 size={18} /> 進入觀念重點測驗 →
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
