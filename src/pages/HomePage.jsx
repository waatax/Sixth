import { useState } from 'react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { BookOpen, Award, CheckCircle, FileText, Sparkles } from 'lucide-react';

const HomePage = () => {
  const [selectedVersion, setSelectedVersion] = useState(coursesData.versions[0]);

  return (
    <div className="flex flex-col gap-10 py-4">
      {/* Top Banner & Title */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center flex-wrap gap-4 pt-2">
          <div>
            <span className="badge mb-2" style={{ backgroundColor: 'hsl(215, 80%, 95%)', color: 'var(--accent-primary)', fontSize: '0.85rem', padding: '6px 14px', borderRadius: '999px' }}>
              ✨ 教育部 108 課綱・國小六年級全科目
            </span>
            <h1 className="h1" style={{ margin: 0, fontSize: '2.5rem', letterSpacing: '-0.02em' }}>
              八大學習領域
            </h1>
            <p className="text-secondary mt-2" style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              點選下方任一學習領域，立即進入 48 個深度教學單元、圖解說明與即時觀念測驗！
            </p>
          </div>

          {/* Version Selector Filter directly at top */}
          <div className="flex items-center gap-2 card" style={{ padding: '10px 16px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>教科書版本：</span>
            <div className="flex gap-2">
              {coursesData.versions.map(version => (
                <button
                  key={version}
                  className={`btn-outline ${selectedVersion === version ? 'btn-primary' : ''}`}
                  onClick={() => setSelectedVersion(version)}
                  style={{
                    padding: '6px 12px',
                    fontSize: '0.85rem',
                    backgroundColor: selectedVersion === version ? 'var(--accent-primary)' : 'transparent',
                    color: selectedVersion === version ? 'white' : 'var(--text-primary)',
                    borderColor: selectedVersion === version ? 'var(--accent-primary)' : 'var(--border-strong)'
                  }}
                >
                  {version}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 8 Major Learning Areas Grid - Directly Placed at the Very Top! */}
        <section className="mt-2">
          <div className="subjects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
            {coursesData.subjects.map(subject => {
              const unitCount = (coursesData.units[subject.id] || []).length;
              return (
                <Link 
                  to={`/subject/${subject.id}`} 
                  key={subject.id} 
                  className="card flex flex-col justify-between gap-4" 
                  style={{ 
                    padding: '22px', 
                    borderTop: `5px solid ${subject.color}`,
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="badge" style={{ backgroundColor: `${subject.color}18`, color: subject.color, fontWeight: 700 }}>
                        {unitCount} 個核心單元
                      </span>
                      <span className="text-sm" style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>{selectedVersion}</span>
                    </div>
                    <h2 className="h3" style={{ fontSize: '1.25rem', marginTop: '6px', color: 'var(--text-primary)' }}>{subject.name}</h2>
                    <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {subject.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t text-sm" style={{ borderTop: '1px solid var(--border-light)', color: subject.color, fontWeight: 600 }}>
                    <span>進入教學單元與測驗</span>
                    <span>→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>

      {/* Platform Features Summary */}
      <section className="grid mt-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div className="card flex items-center gap-3" style={{ padding: '16px 20px' }}>
          <BookOpen style={{ color: 'var(--accent-primary)' }} size={24} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>48 個深度圖解單元</div>
            <div className="text-sm text-secondary">觀念推導與雙圖輔助教學</div>
          </div>
        </div>
        <div className="card flex items-center gap-3" style={{ padding: '16px 20px' }}>
          <CheckCircle style={{ color: 'hsl(150, 60%, 40%)' }} size={24} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>互動即時重點測驗</div>
            <div className="text-sm text-secondary">即時批改與觀念解析</div>
          </div>
        </div>
        <div className="card flex items-center gap-3" style={{ padding: '16px 20px' }}>
          <FileText style={{ color: 'hsl(280, 65%, 50%)' }} size={24} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>全國模擬段考試題庫</div>
            <div className="text-sm text-secondary">歷屆考卷實戰演練下載</div>
          </div>
        </div>
        <div className="card flex items-center gap-3" style={{ padding: '16px 20px' }}>
          <Sparkles style={{ color: 'hsl(25, 85%, 50%)' }} size={24} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>均一教育平台整合</div>
            <div className="text-sm text-secondary">優質影片觀念無縫串接</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
