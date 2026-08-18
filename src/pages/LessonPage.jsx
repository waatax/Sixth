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
  Bookmark,
  ChevronDown,
  ChevronUp,
  Smile,
  ShieldCheck,
  Award,
  Volume2,
  Headphones
} from 'lucide-react';
import { coursesData } from '../data/courses';
import EnglishAudioStudio from '../components/english/EnglishAudioStudio';
import { speechEngine } from '../utils/speechHelper';
import './LessonPage.css';

// Vite dynamic import for raw markdown files
const mdModules = import.meta.glob('../data/lessons/*.md', { query: '?raw', import: 'default' });

const LessonPage = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);
  const [highlightMode, setHighlightMode] = useState(true);
  const [quickSummaryOpen, setQuickSummaryOpen] = useState(true);
  const [selectedTextBubble, setSelectedTextBubble] = useState(null);

  // Helper to extract English sentences from mixed strings
  const extractEnglish = (text) => {
    if (!text || typeof text !== 'string') return '';
    // Find quotes first e.g. "The movie starts at half past two."
    const quoteMatch = text.match(/"([^"]+)"/);
    if (quoteMatch && /[a-zA-Z]/.test(quoteMatch[1])) {
      return quoteMatch[1];
    }
    // Match English phrases (letters, spaces, punctuation)
    const engMatches = text.match(/[A-Za-z0-9\s',.?!:;/-]{4,}/g);
    if (engMatches && engMatches.length > 0) {
      return engMatches.join(' ').trim();
    }
    return text;
  };

  // Listen for text selection inside markdown content
  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection();
      const text = selection?.toString()?.trim();
      if (text && text.length >= 2 && /[a-zA-Z]/.test(text)) {
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
  for (const subjectId in coursesData.units) {
    const unit = coursesData.units[subjectId].find(u => u.id === unitId);
    if (unit) {
      currentUnit = unit;
      currentSubject = coursesData.subjects.find(s => s.id === subjectId);
      break;
    }
  }

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
            段考常考圖解
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
              borderColor: highlightMode ? 'var(--accent-warning)' : 'var(--border-light)',
              backgroundColor: highlightMode ? 'var(--accent-warning-soft)' : 'transparent',
              color: highlightMode ? 'var(--accent-warning-text)' : 'var(--text-secondary)'
            }}
            title="切換關鍵公式與重點色彩高亮"
          >
            <Lightbulb size={14} style={{ color: highlightMode ? '#f59e0b' : 'inherit' }} />
            <span>{highlightMode ? '重點螢光筆：已開啟' : '重點螢光筆：關閉'}</span>
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

      {/* 🎯 30-Second Scaffolding Quick Concepts Card */}
      {currentUnit.keyConcepts && currentUnit.keyConcepts.length > 0 && (
        <div 
          className="card mb-5 overflow-hidden" 
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
              <span>💡 30 秒安心導讀・核心考點精華速覽</span>
              <span className="badge badge-success" style={{ fontSize: '0.7rem' }}>零基礎必看</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-secondary">
              <span>{quickSummaryOpen ? '收合' : '展開'}</span>
              {quickSummaryOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </div>

          {quickSummaryOpen && (
            <div style={{ padding: '16px 20px', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.03) 0%, rgba(16, 185, 129, 0.03) 100%)' }}>
              <p className="text-xs text-secondary mb-2.5">
                只要掌握這幾個核心關鍵詞，段考題就能迎刃而解！點選下方圖解教學即可深入閱讀：
              </p>
              <div className="flex flex-wrap gap-2">
                {currentUnit.keyConcepts.map((concept, idx) => (
                  <span 
                    key={idx} 
                    className="badge" 
                    style={{ 
                      backgroundColor: 'var(--bg-secondary)', 
                      border: '1px solid var(--border-strong)',
                      color: 'var(--text-primary)',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      padding: '5px 12px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                    }}
                  >
                    ⭐ {concept}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 🎧 English Audio Studio for English Lessons */}
      {(currentSubject?.id === 'english' || unitId.startsWith('eng-')) && (
        <EnglishAudioStudio unitId={unitId} />
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
          {(currentSubject?.id === 'english' || unitId.startsWith('eng-')) && (
            <div 
              className="flex items-center gap-2 mb-4 p-3 rounded-lg text-xs font-semibold"
              style={{
                backgroundColor: 'rgba(37, 99, 235, 0.08)',
                border: '1px solid rgba(37, 99, 235, 0.2)',
                color: 'var(--accent-primary)'
              }}
            >
              <Volume2 size={16} />
              <span>💡 英語學習小秘訣：課文中包含的英文單字與例句皆可點選，或利用上方「語音工作台」進行跟讀！</span>
            </div>
          )}

          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              table: ({ _node, ...props }) => (
                <div className="lesson-table-container">
                  <table {...props} />
                </div>
              ),
              td: ({ node, children, ...props }) => {
                const isEnglish = (currentSubject?.id === 'english' || unitId.startsWith('eng-'));
                const text = String(children);
                const hasEng = isEnglish && /[a-zA-Z]{2,}/.test(text);

                return (
                  <td {...props}>
                    {children}
                    {hasEng && (
                      <span 
                        onClick={(e) => {
                          e.stopPropagation();
                          speechEngine.speak(extractEnglish(text));
                        }}
                        className="cursor-pointer ml-1.5 inline-flex items-center opacity-60 hover:opacity-100 transition-opacity"
                        title="🔊 點擊聆聽此格英文發音"
                      >
                        <Volume2 size={12} style={{ color: 'var(--accent-primary)', verticalAlign: 'middle' }} />
                      </span>
                    )}
                  </td>
                );
              },
              li: ({ node, children, ...props }) => {
                const isEnglish = (currentSubject?.id === 'english' || unitId.startsWith('eng-'));
                const rawText = Array.isArray(children) ? children.map(c => typeof c === 'string' ? c : '').join(' ') : String(children);
                const engSentence = isEnglish ? extractEnglish(rawText) : '';
                const hasValidEng = engSentence && engSentence.length >= 3 && /[a-zA-Z]/.test(engSentence);

                return (
                  <li {...props}>
                    <span>{children}</span>
                    {hasValidEng && (
                      <button
                        onClick={() => speechEngine.speak(engSentence)}
                        className="inline-pronounce-btn"
                        style={{ marginLeft: '6px' }}
                        title={`🔊 點擊聆聽例句: "${engSentence}"`}
                      >
                        <Volume2 size={11} />
                        <span>聽例句</span>
                      </button>
                    )}
                  </li>
                );
              },
              em: ({ node, children, ...props }) => {
                const text = String(children);
                const isEnglish = (currentSubject?.id === 'english' || unitId.startsWith('eng-')) && /[a-zA-Z]{2,}/.test(text);

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
                  const isEnglish = (currentSubject?.id === 'english' || unitId.startsWith('eng-')) && /^[a-zA-Z0-9\s',.?!/-]+$/.test(textContent.trim());

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
                  speechEngine.speak(selectedTextBubble.text);
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
                title="朗讀所選取的英文單字或句子"
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
    </div>
  );
};

export default LessonPage;
