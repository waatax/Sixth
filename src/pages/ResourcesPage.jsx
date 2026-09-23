import { useState, useMemo, useEffect } from 'react';
import { resourcesData } from '../data/resourcesData';
import { 
  ExternalLink, 
  ShieldCheck, 
  Star, 
  Copy, 
  Check, 
  BookOpen, 
  Sparkles, 
  Search, 
  X, 
  ArrowRight,
  Clock, 
  Compass, 
  Layers, 
  Lightbulb, 
  AlertTriangle,
  Award
} from 'lucide-react';

const FAVORITES_STORAGE_KEY = 'sixth_resources_favorites_v1';

const ResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [activeModalResource, setActiveModalResource] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Favorites state persisted in localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      // ignore storage errors
    }
  }, [favorites]);

  const toggleFavorite = (id, title) => {
    setFavorites(prev => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter(item => item !== id) : [...prev, id];
      showToast(exists ? `已從收藏清單移除「${title}」` : `⭐ 已成功將「${title}」加入常用收藏！`);
      return next;
    });
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const copyToClipboard = (text, title) => {
    const fullUrl = text.startsWith('#') ? `${window.location.origin}${window.location.pathname}${text}` : text;
    navigator.clipboard.writeText(fullUrl).then(() => {
      showToast(`📋 已複製「${title}」官方網址至剪貼簿！`);
    }).catch(() => {
      showToast(`網址：${fullUrl}`);
    });
  };

  // Filtered resources calculation
  const filteredResources = useMemo(() => {
    return resourcesData.resources.filter(res => {
      // Favorites filter
      if (showOnlyFavorites && !favorites.includes(res.id)) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && res.category !== selectedCategory) {
        return false;
      }
      // Subject filter
      if (selectedSubject !== 'all' && res.subject !== selectedSubject && res.subject !== 'comprehensive') {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = res.title.toLowerCase().includes(query);
        const matchesDesc = res.desc.toLowerCase().includes(query);
        const matchesTags = res.tags.some(t => t.toLowerCase().includes(query));
        const matchesCurriculum = res.curriculumCode?.toLowerCase().includes(query);
        const matchesTarget = res.targetGrades?.toLowerCase().includes(query);
        const matchesKnowledge = res.knowledgePoints?.some(kp => kp.toLowerCase().includes(query));
        return matchesTitle || matchesDesc || matchesTags || matchesCurriculum || matchesTarget || matchesKnowledge;
      }
      return true;
    });
  }, [selectedCategory, selectedSubject, searchQuery, showOnlyFavorites, favorites]);

  // Total knowledge points count
  const totalKnowledgePointsCount = useMemo(() => {
    return resourcesData.resources.reduce((acc, curr) => acc + (curr.knowledgePoints?.length || 0), 0);
  }, []);

  // Pick random resource for inspiration
  const pickRandomResource = () => {
    const all = resourcesData.resources;
    const random = all[Math.floor(Math.random() * all.length)];
    setActiveModalResource(random);
    showToast(`🎲 為您隨機推薦：「${random.title}」！`);
  };

  return (
    <div className="flex flex-col gap-8 py-4">
      {/* Toast Notification */}
      {toastMessage && (
        <div 
          className="fixed top-20 right-6 z-50 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 transition-all"
          style={{
            backgroundColor: 'var(--text-primary)',
            color: 'var(--text-inverse)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
            border: '1px solid rgba(255,255,255,0.2)',
            animation: 'fadeIn 0.2s ease-out'
          }}
        >
          <Sparkles size={18} style={{ color: 'var(--apple-yellow)' }} />
          <span style={{ fontSize: '0.92rem', fontWeight: 600 }}>{toastMessage}</span>
        </div>
      )}

      {/* Header Banner & Stats */}
      <div className="card text-center max-w-4xl mx-auto w-full relative overflow-hidden" style={{ padding: '36px 28px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
        <div className="flex justify-center items-center gap-2 mb-3">
          <span className="badge badge-accent" style={{ padding: '6px 16px', borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '0.85rem' }}>
            🌐 108 課綱小學全科數位教育資源旗艦智庫
          </span>
        </div>
        <h1 className="h1 mb-3" style={{ fontSize: 'calc(2rem * var(--font-scale))' }}>
          網路國小學習資源與知識點指南
        </h1>
        <p className="text-secondary max-w-2xl mx-auto" style={{ lineHeight: 1.8, fontSize: 'calc(0.98rem * var(--font-scale))' }}>
          深度調研收錄 <strong>中央官方旗艦、直轄市精選園地、三大原廠書商、數學自然探究、雙語閱讀、資訊運算思維、遊戲化測驗及國中先修會考</strong> 權威有效資源，精確錨定 108 課綱微知識點與名師避坑指引！
        </p>

        {/* 4 Stats Chips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-6 border-t" style={{ borderTop: '1px solid var(--border-light)' }}>
          <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
            <div className="text-2xl font-bold" style={{ color: 'var(--apple-blue)' }}>{resourcesData.resources.length}+</div>
            <div className="text-xs text-secondary mt-1">權威教育平台收錄</div>
          </div>
          <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
            <div className="text-2xl font-bold" style={{ color: 'var(--apple-green)' }}>8 大</div>
            <div className="text-xs text-secondary mt-1">核心專業領域分類</div>
          </div>
          <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
            <div className="text-2xl font-bold" style={{ color: 'var(--apple-purple)' }}>{totalKnowledgePointsCount}+</div>
            <div className="text-xs text-secondary mt-1">結構化課綱微知識點</div>
          </div>
          <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
            <div className="text-2xl font-bold" style={{ color: 'var(--apple-orange)' }}>100%</div>
            <div className="text-xs text-secondary mt-1">最新官方有效鏈路</div>
          </div>
        </div>

        {/* Action button bar */}
        <div className="flex justify-center items-center gap-3 mt-6 flex-wrap">
          <button 
            className="btn-primary flex items-center gap-2 text-sm"
            onClick={pickRandomResource}
            style={{ padding: '8px 18px', borderRadius: 'var(--radius-full)' }}
          >
            <Sparkles size={16} />
            <span>🎲 隨機探索一個優質資源</span>
          </button>
          <button
            className={`btn-outline flex items-center gap-2 text-sm ${showOnlyFavorites ? 'active' : ''}`}
            onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
            style={{ 
              padding: '8px 18px', 
              borderRadius: 'var(--radius-full)',
              borderColor: showOnlyFavorites ? 'var(--apple-yellow)' : 'var(--border-strong)',
              backgroundColor: showOnlyFavorites ? 'rgba(255, 204, 0, 0.15)' : 'transparent'
            }}
          >
            <Star size={16} style={{ color: showOnlyFavorites ? 'var(--apple-orange)' : 'var(--text-secondary)', fill: showOnlyFavorites ? 'var(--apple-yellow)' : 'none' }} />
            <span>{showOnlyFavorites ? `顯示全部 (${resourcesData.resources.length})` : `僅顯示我的收藏 (${favorites.length})`}</span>
          </button>
        </div>
      </div>

      {/* Interactive Controls Bar: Category Tabs, Subject Filters, Search */}
      <div className="card flex flex-col gap-5" style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
        {/* Category Tabs */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-secondary uppercase tracking-wider">
            <Layers size={14} />
            <span>8 大領域分類篩選：</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {resourcesData.categories.map(cat => (
              <button
                key={cat.id}
                className={`btn-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  if (showOnlyFavorites) setShowOnlyFavorites(false);
                }}
                style={{ fontSize: '0.86rem', padding: '6px 14px' }}
              >
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Subject Filter Pills */}
        <div className="pt-3 border-t" style={{ borderTop: '1px solid var(--border-light)' }}>
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-secondary uppercase tracking-wider">
            <Compass size={14} />
            <span>學科領域快速定位：</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {resourcesData.subjects.map(sub => (
              <button
                key={sub.id}
                className={`badge cursor-pointer transition-all ${selectedSubject === sub.id ? 'badge-primary' : ''}`}
                onClick={() => setSelectedSubject(sub.id)}
                style={{ 
                  padding: '5px 12px', 
                  fontSize: '0.82rem',
                  border: selectedSubject === sub.id ? 'none' : '1px solid var(--border-strong)',
                  backgroundColor: selectedSubject === sub.id ? 'var(--apple-blue)' : 'var(--bg-tertiary)',
                  color: selectedSubject === sub.id ? '#ffffff' : 'var(--text-secondary)'
                }}
              >
                {sub.name}
              </button>
            ))}
          </div>
        </div>

        {/* Search input box */}
        <div className="relative pt-2">
          <div className="relative max-w-xl mx-auto w-full">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" style={{ pointerEvents: 'none' }} />
            <input
              type="text"
              placeholder="🔍 搜尋資源名稱、關鍵字、知識點（如：因材網、分數幾何、Scratch、酷英、顯微鏡...）"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 42px 12px 42px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-strong)',
                fontSize: 'calc(0.95rem * var(--font-scale))',
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                outline: 'none',
                transition: 'all var(--transition-fast)'
              }}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary hover:text-primary p-1"
                aria-label="清除搜尋"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <div className="text-center text-xs text-secondary mt-2">
            共篩選出 <strong style={{ color: 'var(--text-primary)' }}>{filteredResources.length}</strong> 個符合條件的權威學習資源
            {searchQuery && `（關鍵字：「${searchQuery}」）`}
          </div>
        </div>
      </div>

      {/* Resource Cards Grid */}
      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>
        {filteredResources.length === 0 ? (
          <div className="card text-center py-16" style={{ gridColumn: '1 / -1', backgroundColor: 'var(--bg-secondary)' }}>
            <Lightbulb size={40} className="mx-auto mb-3 text-secondary" />
            <h3 className="h3 mb-2">查無符合條件的教育資源</h3>
            <p className="text-secondary text-sm mb-4">建議放寬搜尋關鍵字，或切換至「全部資源」分類。</p>
            <button 
              className="btn-outline text-sm"
              onClick={() => { setSelectedCategory('all'); setSelectedSubject('all'); setSearchQuery(''); setShowOnlyFavorites(false); }}
            >
              重置所有篩選條件
            </button>
          </div>
        ) : (
          filteredResources.map(res => {
            const isFav = favorites.includes(res.id);
            return (
              <div 
                key={res.id} 
                className="card card-hoverable flex flex-col justify-between gap-4 relative group"
                style={{ 
                  borderTop: `5px solid ${res.color}`, 
                  padding: '24px',
                  backgroundColor: 'var(--bg-secondary)',
                  borderLeft: '1px solid var(--border-light)',
                  borderRight: '1px solid var(--border-light)',
                  borderBottom: '1px solid var(--border-light)'
                }}
              >
                <div>
                  {/* Top Badges & Favorite Star */}
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <span 
                      className="badge" 
                      style={{ 
                        backgroundColor: `${res.color}18`, 
                        color: res.color, 
                        fontWeight: 700,
                        fontSize: '0.78rem',
                        border: `1px solid ${res.color}35`
                      }}
                    >
                      {res.badge}
                    </span>
                    <button
                      onClick={() => toggleFavorite(res.id, res.title)}
                      className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                      title={isFav ? "取消收藏" : "加入常用收藏"}
                      aria-label="收藏資源"
                    >
                      <Star 
                        size={20} 
                        style={{ 
                          color: isFav ? 'var(--apple-orange)' : 'var(--text-tertiary)', 
                          fill: isFav ? 'var(--apple-yellow)' : 'none',
                          transition: 'all 0.2s'
                        }} 
                      />
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="h3" style={{ fontSize: 'calc(1.18rem * var(--font-scale))', marginTop: '6px', color: 'var(--text-primary)' }}>
                    {res.title}
                  </h3>

                  {/* Target Grades & Curriculum indicators */}
                  <div className="flex flex-col gap-1 mt-2 text-xs text-secondary">
                    {res.targetGrades && (
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-primary" style={{ color: 'var(--text-primary)' }}>🎯 適用：</span>
                        <span>{res.targetGrades}</span>
                      </div>
                    )}
                    {res.curriculumCode && (
                      <div className="flex items-center gap-1.5 text-xs truncate" title={res.curriculumCode}>
                        <span className="font-semibold text-primary" style={{ color: 'var(--text-primary)' }}>📜 課綱：</span>
                        <span className="truncate">{res.curriculumCode}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-secondary" style={{ marginTop: '10px', lineHeight: 1.65 }}>
                    {res.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-1.5 flex-wrap mt-3">
                    {res.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="badge" 
                        style={{ 
                          backgroundColor: 'var(--bg-tertiary)', 
                          fontSize: '0.72rem', 
                          padding: '3px 8px',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Practical Tip Preview */}
                  <div
                    className="mt-4 p-3 text-xs"
                    style={{
                      backgroundColor: 'var(--bg-tertiary)',
                      borderRadius: 'var(--radius-md)',
                      borderLeft: `3px solid ${res.color}`,
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6
                    }}
                  >
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>💡 學習小撇步：</span> {res.tips}
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="pt-3 border-t mt-3 flex flex-col gap-2" style={{ borderTop: '1px solid var(--border-light)' }}>
                  {/* Knowledge Points Modal Opener */}
                  <button
                    onClick={() => setActiveModalResource(res)}
                    className="btn-outline flex items-center justify-center gap-2 w-full text-xs font-semibold py-2"
                    style={{ borderRadius: 'var(--radius-sm)' }}
                  >
                    <BookOpen size={14} style={{ color: res.color }} />
                    <span>查看核心知識點與學習步驟 ({res.knowledgePoints?.length || 3})</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {/* Copy Link Button */}
                    <button
                      onClick={() => copyToClipboard(res.url, res.title)}
                      className="btn-outline flex items-center justify-center p-2 text-xs"
                      style={{ borderRadius: 'var(--radius-sm)', flexShrink: 0 }}
                      title="複製官方網址"
                    >
                      <Copy size={15} />
                    </button>

                    {/* Primary Jump Link */}
                    {res.url.startsWith('#') ? (
                      <a 
                        href={res.url} 
                        className="btn-primary flex items-center justify-center gap-2 w-full text-xs font-semibold"
                        style={{ 
                          padding: '9px 14px', 
                          backgroundColor: res.color, 
                          borderColor: res.color,
                          borderRadius: 'var(--radius-sm)'
                        }}
                      >
                        <span>進入站內課程模組</span>
                        <ArrowRight size={14} />
                      </a>
                    ) : (
                      <a 
                        href={res.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn-primary flex items-center justify-center gap-2 w-full text-xs font-semibold"
                        style={{ 
                          padding: '9px 14px', 
                          backgroundColor: res.color, 
                          borderColor: res.color,
                          borderRadius: 'var(--radius-sm)'
                        }}
                      >
                        <span>前往官方學習平台</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Knowledge Points & Curriculum Modal */}
      {activeModalResource && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(5px)' }}
          onClick={() => setActiveModalResource(null)}
        >
          <div 
            className="card max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-scaleIn shadow-2xl"
            style={{ 
              backgroundColor: 'var(--bg-secondary)', 
              borderRadius: 'var(--radius-lg)', 
              border: `2px solid ${activeModalResource.color}`,
              padding: '30px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button 
              onClick={() => setActiveModalResource(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-secondary hover:text-primary transition-colors"
              aria-label="關閉視窗"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="badge" style={{ backgroundColor: `${activeModalResource.color}20`, color: activeModalResource.color, fontWeight: 700 }}>
                {activeModalResource.badge}
              </span>
              <span className="text-xs text-secondary">
                {activeModalResource.targetGrades}
              </span>
            </div>

            <h2 className="h2 mb-2" style={{ color: 'var(--text-primary)', fontSize: 'calc(1.35rem * var(--font-scale))' }}>
              {activeModalResource.title}
            </h2>

            {/* Curriculum indicator */}
            {activeModalResource.curriculumCode && (
              <div className="p-2.5 rounded-lg mb-4 text-xs" style={{ backgroundColor: 'var(--bg-tertiary)', borderLeft: `3px solid ${activeModalResource.color}` }}>
                <span className="font-bold text-primary">📜 108 課綱對齊指標：</span> {activeModalResource.curriculumCode}
              </div>
            )}

            <p className="text-sm text-secondary mb-5" style={{ lineHeight: 1.7 }}>
              {activeModalResource.desc}
            </p>

            {/* Section 1: Core Knowledge Points */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2 text-sm font-bold text-primary">
                <Lightbulb size={16} style={{ color: activeModalResource.color }} />
                <span>核心學習知識點 (Core Knowledge Points)</span>
              </div>
              <div className="flex flex-col gap-2">
                {activeModalResource.knowledgePoints?.map((kp, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 rounded-lg text-xs flex items-start gap-2.5"
                    style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-light)' }}
                  >
                    <span 
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 mt-0.5"
                      style={{ backgroundColor: activeModalResource.color }}
                    >
                      {idx + 1}
                    </span>
                    <span style={{ lineHeight: 1.6, color: 'var(--text-primary)' }}>{kp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Study Plan & Action Steps */}
            <div className="grid md:grid-cols-2 gap-4 mb-5">
              {/* Weekly Plan */}
              {activeModalResource.weeklyPlan && (
                <div className="p-3 rounded-lg text-xs" style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-light)' }}>
                  <div className="flex items-center gap-1.5 font-bold mb-1.5 text-primary">
                    <Clock size={14} style={{ color: 'var(--apple-blue)' }} />
                    <span>建議每週學習時間</span>
                  </div>
                  <p className="text-secondary" style={{ lineHeight: 1.5 }}>{activeModalResource.weeklyPlan}</p>
                </div>
              )}

              {/* Pitfalls */}
              {activeModalResource.pitfalls && (
                <div className="p-3 rounded-lg text-xs" style={{ backgroundColor: 'rgba(255, 149, 0, 0.08)', border: '1px solid rgba(255, 149, 0, 0.3)' }}>
                  <div className="flex items-center gap-1.5 font-bold mb-1.5" style={{ color: 'var(--apple-orange)' }}>
                    <AlertTriangle size={14} />
                    <span>名師避坑指引</span>
                  </div>
                  <p className="text-secondary" style={{ lineHeight: 1.5 }}>{activeModalResource.pitfalls}</p>
                </div>
              )}
            </div>

            {/* Section 3: Recommended 3-Step Action Blueprint */}
            {activeModalResource.actionSteps && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2 text-sm font-bold text-primary">
                  <Compass size={16} style={{ color: 'var(--apple-green)' }} />
                  <span>推薦高效三步學習法 (Action Blueprint)</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {activeModalResource.actionSteps.map((step, sIdx) => (
                    <div key={sIdx} className="text-xs text-secondary pl-3" style={{ borderLeft: '2px solid var(--apple-green)', lineHeight: 1.6 }}>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom CTA */}
            <div className="flex items-center gap-3 pt-4 border-t" style={{ borderTop: '1px solid var(--border-light)' }}>
              <button
                onClick={() => copyToClipboard(activeModalResource.url, activeModalResource.title)}
                className="btn-outline flex items-center justify-center gap-2 text-xs py-2 px-4"
              >
                <Copy size={14} />
                <span>複製網址</span>
              </button>

              {activeModalResource.url.startsWith('#') ? (
                <a 
                  href={activeModalResource.url} 
                  onClick={() => setActiveModalResource(null)}
                  className="btn-primary flex items-center justify-center gap-2 w-full text-xs font-semibold py-2.5"
                  style={{ backgroundColor: activeModalResource.color, borderColor: activeModalResource.color }}
                >
                  <span>立即進入站內課程模組</span>
                  <ArrowRight size={14} />
                </a>
              ) : (
                <a 
                  href={activeModalResource.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary flex items-center justify-center gap-2 w-full text-xs font-semibold py-2.5"
                  style={{ backgroundColor: activeModalResource.color, borderColor: activeModalResource.color }}
                >
                  <span>前往官方學習平台</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 108 Curriculum Self-directed Learning Strategy Banner */}
      <div className="card" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', padding: '28px' }}>
        <div className="flex items-start gap-4">
          <Award size={32} style={{ color: 'var(--apple-purple)', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h3 className="h3 mb-2" style={{ fontSize: 'calc(1.18rem * var(--font-scale))' }}>
              🗺️ 108 課綱自律學習三原則 (Self-Regulated Learning SRL)
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mt-3 text-xs text-secondary" style={{ lineHeight: 1.7 }}>
              <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <div className="font-bold text-primary mb-1" style={{ color: 'var(--apple-blue)' }}>1. 課前微預習 (5-10分鐘)</div>
                <div>使用酷課雲或愛學網 5 分鐘名師微影片，先抓出單元的核心關鍵名詞與圖形特徵，課堂聽講吸收率提高 60%！</div>
              </div>
              <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <div className="font-bold text-primary mb-1" style={{ color: 'var(--apple-green)' }}>2. 課後適性診斷 (15-20分鐘)</div>
                <div>避免題海死背！使用因材網或均一星空圖進行節點測試，針對紅燈錯題觀看詳解，建立完整知識網絡。</div>
              </div>
              <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <div className="font-bold text-primary mb-1" style={{ color: 'var(--apple-orange)' }}>3. 假日動手探究 (30-40分鐘)</div>
                <div>善用 PhET 虛擬實驗室與 Scratch 程式設計，將數理定律轉化為手腦並用的實踐創作，激發內在探究熱情！</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OpenID & Student Passport Tip Card */}
      <div className="card" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', padding: '24px' }}>
        <div className="flex items-start gap-3">
          <ShieldCheck size={28} style={{ color: 'var(--apple-blue)', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h3 className="h3" style={{ fontSize: '1.15rem', marginBottom: '6px' }}>
              🔑 全臺學生 OpenID 單一簽入通行證須知
            </h3>
            <p className="text-sm text-secondary" style={{ lineHeight: 1.7 }}>
              教育部因材網、Cool English、教育雲、臺北酷課雲、高雄數位學園等公立平台均支援全臺中小學生的 <strong>教育部教育雲端帳號 (OpenID)</strong>。帳號通常由各校資訊組長或導師統一發放（格式為 <code>學號@學校網域</code> 或縣市教育局帳號）。使用 OpenID 登入可永久保存個人診斷紀錄、班級作業與積分勳章，免除重複記憶多組密碼的困擾！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
