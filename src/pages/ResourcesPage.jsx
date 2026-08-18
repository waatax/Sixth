import { useState } from 'react';
import { resourcesData } from '../data/resourcesData';
import { ExternalLink, ShieldCheck } from 'lucide-react';

const ResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = resourcesData.resources.filter(res => {
    const matchesCat = selectedCategory === 'all' || res.category === selectedCategory;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          res.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-6 py-4">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="badge badge-accent mb-2" style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
          🌐 全國小學數位教育資源總覽
        </span>
        <h1 className="h1 mb-2">
          教育資源 (Educational Resources)
        </h1>
        <p className="text-secondary" style={{ lineHeight: 1.7 }}>
          深度整合<strong>教育部因材網、Cool English、三大出版社數位網、均一、PaGamO、PhET 科學模擬與升國中先修</strong>，陪伴學童快樂探索知識！
        </p>
      </div>

      {/* Category Tabs & Search Box */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-2 flex-wrap border-b pb-4" style={{ borderBottom: '1px solid var(--border-light)' }}>
          {resourcesData.categories.map(cat => (
            <button
              key={cat.id}
              className={`btn-pill ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="max-w-md mx-auto w-full relative">
          <input
            type="text"
            placeholder="🔍 搜尋資源名稱、領域關鍵字（如：因材網、英語、模擬實驗...）"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 18px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-strong)',
              fontSize: 'calc(0.95rem * var(--font-scale))',
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              outline: 'none',
              transition: 'all var(--transition-fast)'
            }}
          />
        </div>
      </div>

      {/* Resource Cards Grid */}
      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
        {filteredResources.length === 0 ? (
          <div className="card text-center py-12" style={{ gridColumn: '1 / -1' }}>
            <p className="text-secondary">查無符合條件的教育資源，請嘗試其他關鍵字。</p>
          </div>
        ) : (
          filteredResources.map(res => (
            <div 
              key={res.id} 
              className="card card-hoverable flex flex-col justify-between gap-4"
              style={{ borderTop: `4px solid ${res.color}`, padding: '24px' }}
            >
              <div>
                <div className="flex justify-between items-start mb-2 gap-2">
                  <span className="badge" style={{ backgroundColor: `${res.color}20`, color: res.color, fontWeight: 700 }}>
                    {res.badge}
                  </span>
                  <span className="text-xs text-secondary">
                    {res.category === 'gov' ? '政府官方' : res.category === 'publishers' ? '教科書商' : res.category === 'gamified' ? '互動學習' : '先修銜接'}
                  </span>
                </div>

                <h3 className="h3" style={{ fontSize: 'calc(1.2rem * var(--font-scale))', marginTop: '6px', color: 'var(--text-primary)' }}>
                  {res.title}
                </h3>

                <p className="text-sm text-secondary" style={{ marginTop: '8px', lineHeight: 1.65 }}>
                  {res.desc}
                </p>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap mt-3">
                  {res.tags.map((tag, i) => (
                    <span key={i} className="badge" style={{ backgroundColor: 'var(--bg-tertiary)', fontSize: '0.75rem', padding: '3px 8px' }}>
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Practical Tip */}
                <div
                  className="mt-3 p-3 text-sm"
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: `3px solid ${res.color}`,
                    color: 'var(--text-secondary)'
                  }}
                >
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>💡 學習小撇步：</span> {res.tips}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-3 border-t mt-2" style={{ borderTop: '1px solid var(--border-light)' }}>
                {res.url.startsWith('#') ? (
                  <a 
                    href={res.url} 
                    className="btn-primary flex items-center justify-center gap-2 w-full text-sm"
                    style={{ padding: '10px', backgroundColor: res.color, borderColor: res.color }}
                  >
                    <span>進入站內先修課程專區</span>
                    <span>→</span>
                  </a>
                ) : (
                  <a 
                    href={res.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-outline flex items-center justify-center gap-2 w-full text-sm"
                    style={{ padding: '10px' }}
                  >
                    <span>前往外部官方學習平台</span>
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* OpenID & Student Passport Tip Card */}
      <div className="card" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', padding: '24px' }}>
        <div className="flex items-start gap-3">
          <ShieldCheck size={28} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h3 className="h3" style={{ fontSize: '1.15rem', marginBottom: '6px' }}>
              🔑 全臺學生 OpenID 單一簽入小常識
            </h3>
            <p className="text-sm text-secondary" style={{ lineHeight: 1.7 }}>
              教育部因材網、Cool English、教育雲與各縣市教育入口網皆支援全臺國小學生的 <strong>OpenID 帳號</strong>（通常由各校資訊組長發放，格式如 <code>學號@學校網域</code>）。登入後可自動儲存個人測驗歷程、班級作業與積分勳章，鼓勵家長與學童妥善運用！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
