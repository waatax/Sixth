import { useState, useEffect } from 'react';
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
  Square
} from 'lucide-react';
import { coursesData } from '../data/courses';
import EnglishAudioStudio from '../components/english/EnglishAudioStudio';
import { speechEngine, extractTextFromNode, extractEnglishSentence } from '../utils/speechHelper';
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
  const [speechRate, setSpeechRate] = useState(speechEngine.rate || 1.0);
  const [isPlaying, setIsPlaying] = useState(false);

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
        
        // Optimization 3: Show Back to Top
        if (window.scrollY > 400) {
          setShowBackToTop(true);
        } else {
          setShowBackToTop(false);
        }

        // Optimization 2: Confetti at bottom
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

  // Optimization 6: Read time estimation
  const wordCount = content.length || 1000;
  const readTimeMin = Math.max(1, Math.ceil(wordCount / 400));

  return (
    <div className={`lesson-page-wrapper max-w-4xl mx-auto py-4 ${highlightMode ? 'mode-highlight-active' : ''}`}>
      {/* Top Reading Scroll Progress Bar */}
      <div
        className="reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Optimization 3: Back to Top Button */}
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
            <Timer size={13} />
            預估閱讀 {readTimeMin} 分鐘
          </span>
          <button 
            className="badge badge-success cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => {
              const key = `bookmark_${unitId}`;
              if (localStorage.getItem(key)) {
                localStorage.removeItem(key);
                alert('已取消收藏！');
              } else {
                localStorage.setItem(key, 'true');
                alert('🎉 單元已加入收藏！');
              }
            }}
          >
            ⭐ 收藏重點
          </button>
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
        <>
          {/* Top Sticky Quick Speed Bar */}
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
              <span>💡 英語全篇語音指南：課文中所有表格、例句、對話與粗體字皆附有「🔊 聽發音」按鈕，劃詞亦可即時聆聽！</span>
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
                if (!isEnglish) return <td {...props}>{children}</td>;

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
                const isEnglish = (currentSubject?.id === 'english' || unitId.startsWith('eng-'));
                if (!isEnglish) return <li {...props}>{children}</li>;

                const rawText = extractTextFromNode(node);
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
                const isEnglish = (currentSubject?.id === 'english' || unitId.startsWith('eng-'));
                if (!isEnglish) return <blockquote {...props}>{children}</blockquote>;

                const rawText = extractTextFromNode(node);
                const engSentence = extractEnglishSentence(rawText);

                return (
                  <blockquote className="dialogue-bubble-quote" {...props}>
                    <div style={{ flex: 1 }}>{children}</div>
                    {engSentence && (
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
                    )}
                  </blockquote>
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

      {/* Optimization 5: Next/Prev Unit Navigation */}
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
