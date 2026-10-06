import { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  X, 
  BookOpen, 
  FileText, 
  FlaskConical, 
  Zap, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  CornerDownLeft, 
  Flame, 
  ShieldCheck, 
  History, 
  Layers,
  GraduationCap,
  Swords,
  Timer,
  CheckCircle2,
  BookmarkCheck,
  Award
} from 'lucide-react';
import { coursesData } from '../../data/courses';
import { interactiveLabsList } from '../../data/interactiveLabsData';
import SubjectIconBadge from './SubjectIconBadge';
import { triggerHaptic, playSound } from '../../utils/soundEffects';

const RECENT_SEARCHES_KEY = 'sixth_recent_searches_v1';

const HOT_SEARCH_CHIPS = [
  '圓面積', '槓桿天平', '水溶液酸鹼', '電磁鐵', '比與比值', 
  '過去式動詞', '等量公理', '柱體體積', '冷暖鋒面', 'CPR急救', 
  '臺灣民主', 'SDGs永續', '閱讀理解', '時間四象限', '國中負數'
];

const QUICK_TOOLS = [
  { id: 'tool-notes', title: '章節段考講義 (PDF 列印)', path: '/exam-notes', category: 'tools', icon: FileText, color: '#6366f1', badge: 'PDF' },
  { id: 'tool-labs', title: 'STEM 跨領域互動實驗室', path: '/labs', category: 'tools', icon: FlaskConical, color: '#10b981', badge: 'PhET' },
  { id: 'tool-shorts', title: '30秒知識短影音 (Reels)', path: '/shorts', category: 'tools', icon: Zap, color: '#ec4899', badge: 'HOT' },
  { id: 'tool-flashcards', title: '考前速記翻翻卡', path: '/flashcards', category: 'tools', icon: BookmarkCheck, color: '#f59e0b', badge: '速記' },
  { id: 'tool-mock', title: '計時全真段考模擬卷', path: '/mock-exam', category: 'tools', icon: Timer, color: '#ef4444', badge: '10分鐘' },
  { id: 'tool-mistakes', title: '錯題粉碎擂台本', path: '/mistakes', category: 'tools', icon: CheckCircle2, color: '#10b981', badge: '防雷' },
  { id: 'tool-boss', title: '魔王城堡極速答題戰', path: '/boss-battle', category: 'tools', icon: Swords, color: '#8b5cf6', badge: 'RPG' },
  { id: 'tool-gept', title: '全民英檢 GEPT 雙語特訓', path: '/gept', category: 'tools', icon: Award, color: '#0ea5e9', badge: '雙語' },
  { id: 'tool-prep', title: '國中七年級銜接先修', path: '/prep', category: 'tools', icon: GraduationCap, color: '#8b5cf6', badge: '會考' }
];

export const GlobalCommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState([]);
  
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Load recent searches from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(RECENT_SEARCHES_KEY);
      if (saved) setRecentSearches(JSON.parse(saved));
    } catch (e) {
      setRecentSearches([]);
    }
  }, []);

  // Global event listener for Cmd+K / Ctrl+K and custom event
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleOpenCustom = () => {
      setIsOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open_command_palette', handleOpenCustom);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open_command_palette', handleOpenCustom);
    };
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setActiveIndex(0);
      triggerHaptic('light');
      playSound('ios_tap');
      // Delay slightly for render
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Build searchable items catalogue
  const allSearchItems = useMemo(() => {
    const list = [];

    // 1. All 64 Units
    coursesData.subjects.forEach(subject => {
      const units = coursesData.units[subject.id] || [];
      units.forEach((unit, idx) => {
        list.push({
          id: `unit-${unit.id}`,
          type: 'lesson',
          category: 'lessons',
          title: unit.title,
          subtitle: `${subject.name}・${unit.semester === '6A' ? '6上' : '6下'}・約 ${unit.estimatedMinutes || 15} 分鐘`,
          desc: unit.description,
          keyConcepts: unit.keyConcepts || [],
          badge: unit.badge || subject.shortName,
          subjectId: subject.id,
          subjectColor: subject.color,
          path: `/lesson/${unit.id}`,
          keywords: `${subject.name} ${subject.shortName} ${unit.title} ${unit.description} ${(unit.keyConcepts || []).join(' ')} ${unit.competencyCode || ''}`.toLowerCase()
        });
      });
    });

    // 2. All 8 Subjects
    coursesData.subjects.forEach(subject => {
      list.push({
        id: `subject-${subject.id}`,
        type: 'subject',
        category: 'subjects',
        title: subject.name,
        subtitle: `八大學科・${(coursesData.units[subject.id] || []).length} 課完整課綱地圖`,
        desc: subject.desc,
        badge: subject.badge,
        subjectId: subject.id,
        subjectColor: subject.color,
        path: `/subject/${subject.id}`,
        keywords: `${subject.name} ${subject.shortName} ${subject.desc} ${subject.badge} ${subject.mascot}`.toLowerCase()
      });
    });

    // 3. Interactive Labs (14 labs)
    interactiveLabsList.forEach(lab => {
      list.push({
        id: `lab-${lab.id}`,
        type: 'lab',
        category: 'labs',
        title: lab.title,
        subtitle: `${lab.subjectName}・動態模擬互動實驗`,
        desc: lab.subtitle,
        badge: 'PhET',
        subjectColor: lab.color,
        emoji: lab.emoji,
        path: `/labs?lab=${lab.id}`,
        keywords: `${lab.title} ${lab.subtitle} ${lab.subjectName} 實驗 模擬 探究`.toLowerCase()
      });
    });

    // 4. Quick Tools
    QUICK_TOOLS.forEach(tool => {
      list.push({
        id: tool.id,
        type: 'tool',
        category: 'tools',
        title: tool.title,
        subtitle: '核心學習利器・快速通關',
        desc: tool.title,
        badge: tool.badge,
        toolIcon: tool.icon,
        subjectColor: tool.color,
        path: tool.path,
        keywords: `${tool.title} ${tool.badge}`.toLowerCase()
      });
    });

    return list;
  }, []);

  // Filter items based on query and selectedCategory
  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allSearchItems.filter(item => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchCat) return false;
      if (!q) return true;
      return item.keywords.includes(q);
    }).slice(0, 40); // Cap at 40 for optimal performance
  }, [allSearchItems, query, selectedCategory]);

  // Adjust activeIndex if out of bounds
  useEffect(() => {
    if (activeIndex >= filteredResults.length) {
      setActiveIndex(Math.max(0, filteredResults.length - 1));
    }
  }, [filteredResults, activeIndex]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector(`[data-index="${activeIndex}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [activeIndex]);

  const saveRecentSearch = (text) => {
    if (!text || text.trim().length === 0) return;
    const clean = text.trim();
    const next = [clean, ...recentSearches.filter(s => s !== clean)].slice(0, 8);
    setRecentSearches(next);
    try {
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(next));
    } catch (e) {}
  };

  const handleSelectItem = (item) => {
    if (query.trim()) {
      saveRecentSearch(query.trim());
    }
    triggerHaptic('selection');
    playSound('ios_tap');
    setIsOpen(false);
    navigate(item.path);
  };

  const handleKeyDownInInput = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev < filteredResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev > 0 ? prev - 1 : filteredResults.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredResults[activeIndex]) {
        handleSelectItem(filteredResults[activeIndex]);
      }
    }
  };

  const handleApplyChip = (chip) => {
    setQuery(chip);
    setActiveIndex(0);
    triggerHaptic('light');
    playSound('click');
    if (inputRef.current) inputRef.current.focus();
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    try {
      localStorage.removeItem(RECENT_SEARCHES_KEY);
    } catch (e) {}
    playSound('click');
  };

  if (!isOpen) return null;

  return (
    <div 
      className="spotlight-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '16px',
        paddingTop: 'calc(4vh + env(safe-area-inset-top, 20px))',
        animation: 'fadeIn 0.18s ease-out'
      }}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="spotlight-modal"
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '85vh',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '26px',
          border: '1.5px solid var(--border-light)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'scaleUp 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Search Input Bar */}
        <div 
          style={{
            padding: '16px 20px',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'var(--bg-secondary)'
          }}
        >
          <Search size={22} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleKeyDownInInput}
            placeholder="搜尋八大學科、64 門單元、公式考點、PhET 實驗、講義..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '1.05rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              fontFamily: 'inherit'
            }}
          />
          {query ? (
            <button
              onClick={() => { setQuery(''); if (inputRef.current) inputRef.current.focus(); }}
              style={{
                background: 'var(--bg-tertiary)',
                border: 'none',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                cursor: 'pointer'
              }}
              title="清除輸入"
            >
              <X size={14} />
            </button>
          ) : (
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.75rem',
                color: 'var(--text-tertiary)',
                fontWeight: 700
              }}
            >
              <kbd 
                style={{
                  padding: '2px 6px',
                  borderRadius: '6px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-strong)',
                  fontFamily: 'inherit'
                }}
              >
                ESC
              </kbd>
            </div>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div 
          style={{
            padding: '10px 16px',
            borderBottom: '1px solid var(--border-light)',
            backgroundColor: 'var(--bg-tertiary)',
            display: 'flex',
            gap: '8px',
            overflowX: 'auto'
          }}
          className="mobile-scroll-row"
        >
          {[
            { id: 'all', label: `全部 (${filteredResults.length})` },
            { id: 'lessons', label: '🧮 課程單元 (64)' },
            { id: 'subjects', label: '📚 八大領域' },
            { id: 'labs', label: '🔬 互動實驗 (14)' },
            { id: 'tools', label: '⚡ 考前利器' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setActiveIndex(0);
                playSound('ios_tap');
              }}
              style={{
                padding: '5px 12px',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: selectedCategory === cat.id ? 800 : 600,
                border: 'none',
                backgroundColor: selectedCategory === cat.id ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                color: selectedCategory === cat.id ? '#ffffff' : 'var(--text-secondary)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease',
                boxShadow: selectedCategory === cat.id ? 'var(--shadow-sm)' : 'none'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div 
          ref={listRef}
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '10px 12px',
            maxHeight: '440px'
          }}
        >
          {/* Zero-state Recommendations when query is empty */}
          {!query.trim() && (
            <div style={{ padding: '8px 10px 16px 10px' }}>
              {/* Recent searches if any */}
              {recentSearches.length > 0 && (
                <div style={{ marginBottom: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <History size={12} /> 最近搜尋
                    </span>
                    <button
                      onClick={clearRecentSearches}
                      style={{ background: 'none', border: 'none', fontSize: '0.72rem', color: 'var(--text-tertiary)', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                      清除歷史
                    </button>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {recentSearches.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleApplyChip(s)}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '8px',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          backgroundColor: 'var(--bg-tertiary)',
                          color: 'var(--text-primary)',
                          border: '1px solid var(--border-light)',
                          cursor: 'pointer'
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Hot Search Chips */}
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-tertiary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Flame size={12} style={{ color: '#f59e0b' }} /> 熱門微概念高頻探索：
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {HOT_SEARCH_CHIPS.map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleApplyChip(chip)}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '8px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        backgroundColor: 'rgba(99, 102, 241, 0.08)',
                        color: 'var(--accent-primary)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        cursor: 'pointer'
                      }}
                    >
                      #{chip}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Results count indicator */}
          {query.trim() && (
            <div style={{ padding: '6px 12px 10px 12px', fontSize: '0.74rem', color: 'var(--text-tertiary)', fontWeight: 700 }}>
              找到 {filteredResults.length} 項符合結果：
            </div>
          )}

          {/* Result items */}
          {filteredResults.length === 0 ? (
            <div style={{ padding: '36px 20px', textAlign: 'center', color: 'var(--text-secondary)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔍</div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>找不到符合「{query}」的知識內容</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', marginTop: '4px' }}>
                試著改用「圓面積」、「槓桿」、「酸鹼」、「過去式」或「負數」等關鍵字搜尋！
              </div>
            </div>
          ) : (
            filteredResults.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={item.id}
                  data-index={idx}
                  onClick={() => handleSelectItem(item)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    cursor: 'pointer',
                    backgroundColor: isActive ? 'var(--accent-soft)' : 'transparent',
                    border: isActive ? '1px solid var(--accent-primary)' : '1px solid transparent',
                    transition: 'all 0.12s ease',
                    marginBottom: '4px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
                    {/* Icon or badge */}
                    {item.type === 'lesson' && item.subjectId && (
                      <SubjectIconBadge id={item.subjectId} size="sm" />
                    )}
                    {item.type === 'subject' && item.subjectId && (
                      <SubjectIconBadge id={item.subjectId} size="sm" />
                    )}
                    {item.type === 'lab' && (
                      <div 
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '10px',
                          backgroundColor: `${item.subjectColor}18`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.1rem',
                          flexShrink: 0
                        }}
                      >
                        {item.emoji || '🔬'}
                      </div>
                    )}
                    {item.type === 'tool' && (
                      <div 
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '10px',
                          backgroundColor: `${item.subjectColor}18`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: item.subjectColor,
                          flexShrink: 0
                        }}
                      >
                        {item.toolIcon && <item.toolIcon size={18} />}
                      </div>
                    )}

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                        <span 
                          style={{
                            fontWeight: 700,
                            fontSize: '0.92rem',
                            color: isActive ? 'var(--accent-text)' : 'var(--text-primary)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          {item.title}
                        </span>
                        {item.badge && (
                          <span 
                            style={{
                              padding: '1px 6px',
                              borderRadius: '4px',
                              fontSize: '0.68rem',
                              fontWeight: 800,
                              backgroundColor: `${item.subjectColor || '#6366f1'}18`,
                              color: item.subjectColor || '#6366f1'
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div 
                        style={{
                          fontSize: '0.74rem',
                          color: 'var(--text-secondary)',
                          marginTop: '2px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Right shortcut or enter icon */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                    {isActive ? (
                      <span 
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          color: 'var(--accent-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '2px'
                        }}
                      >
                        開啟 <CornerDownLeft size={12} />
                      </span>
                    ) : (
                      <ArrowRight size={14} style={{ color: 'var(--text-tertiary)' }} />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Keyboard Shortcuts Footer */}
        <div 
          style={{
            padding: '10px 20px',
            borderTop: '1px solid var(--border-light)',
            backgroundColor: 'var(--bg-tertiary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.72rem',
            color: 'var(--text-tertiary)',
            fontWeight: 700
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <span><kbd style={{ padding: '1px 5px', borderRadius: '4px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>↑</kbd> <kbd style={{ padding: '1px 5px', borderRadius: '4px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>↓</kbd> 移動</span>
            <span><kbd style={{ padding: '1px 5px', borderRadius: '4px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>Enter</kbd> 選擇</span>
            <span><kbd style={{ padding: '1px 5px', borderRadius: '4px', background: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>ESC</kbd> 關閉</span>
          </div>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Sparkles size={11} style={{ color: 'var(--accent-primary)' }} />
            <span>最強小六智慧全域搜尋</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GlobalCommandPalette;
