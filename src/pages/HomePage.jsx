import { useState } from 'react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { BookOpen, Zap, Timer, Globe, CheckCircle, Trophy, Bookmark, Sparkles } from 'lucide-react';

const HomePage = () => {
  const [selectedVersion, setSelectedVersion] = useState(coursesData.versions[0]);

  return (
    <div className="flex flex-col gap-8 py-2">
      {/* Top Banner & Title */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center flex-wrap gap-4 pt-1">
          <div>
            <span className="badge mb-2" style={{ backgroundColor: 'hsl(215, 80%, 95%)', color: 'var(--accent-primary)', fontSize: '0.82rem', padding: '5px 14px', borderRadius: '999px', fontWeight: 700 }}>
              ✨ 教育部 108 課綱・國小六年級全科目自主學習平台
            </span>
            <h1 className="h1" style={{ margin: 0, fontSize: '2.5rem', letterSpacing: '-0.02em' }}>
              八大學習領域
            </h1>
            <p className="text-secondary mt-1" style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
              點選下方任一學習領域，立即進入 48 個深度教學單元、圖解說明與即時觀念測驗！
            </p>
          </div>

          {/* Version Selector Filter directly at top */}
          <div className="flex items-center gap-2 card" style={{ padding: '8px 14px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
            <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)' }}>教科書版本：</span>
            <div className="flex gap-2">
              {coursesData.versions.map(version => (
                <button
                  key={version}
                  className={`btn-outline ${selectedVersion === version ? 'btn-primary' : ''}`}
                  onClick={() => setSelectedVersion(version)}
                  style={{
                    padding: '5px 10px',
                    fontSize: '0.82rem',
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

        {/* 8 Major Learning Areas Grid - Directly Placed at the Top */}
        <section className="mt-2">
          <div className="subjects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '18px' }}>
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

      {/* Interactive Tool Hub Cards */}
      <section className="mt-4">
        <h2 className="h3 mb-3" style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>⚡ 學童自主學習四大核心利器</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          <Link to="/flashcards" className="card flex items-start gap-3" style={{ padding: '20px', borderLeft: '4px solid hsl(38, 92%, 50%)' }}>
            <div style={{ backgroundColor: 'hsl(38, 92%, 94%)', padding: '10px', borderRadius: 'var(--radius-md)', color: 'hsl(38, 92%, 40%)' }}>
              <Zap size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>考前速記翻翻卡</div>
              <div className="text-xs text-secondary mt-1">公式、名詞與句型 3 秒快速複習</div>
            </div>
          </Link>

          <Link to="/mock-exam" className="card flex items-start gap-3" style={{ padding: '20px', borderLeft: '4px solid hsl(215, 85%, 50%)' }}>
            <div style={{ backgroundColor: 'hsl(215, 85%, 94%)', padding: '10px', borderRadius: 'var(--radius-md)', color: 'hsl(215, 85%, 50%)' }}>
              <Timer size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>全科計時模擬考</div>
              <div className="text-xs text-secondary mt-1">10 分鐘 10 題實戰綜合測驗</div>
            </div>
          </Link>

          <Link to="/mistakes" className="card flex items-start gap-3" style={{ padding: '20px', borderLeft: '4px solid hsl(0, 75%, 52%)' }}>
            <div style={{ backgroundColor: 'hsl(0, 75%, 94%)', padding: '10px', borderRadius: 'var(--radius-md)', color: 'hsl(0, 75%, 52%)' }}>
              <Bookmark size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>個人化錯題筆記本</div>
              <div className="text-xs text-secondary mt-1">針對錯題弱點一鍵複習消滅</div>
            </div>
          </Link>

          <Link to="/resources" className="card flex items-start gap-3" style={{ padding: '20px', borderLeft: '4px solid hsl(150, 65%, 38%)' }}>
            <div style={{ backgroundColor: 'hsl(150, 65%, 94%)', padding: '10px', borderRadius: 'var(--radius-md)', color: 'hsl(150, 65%, 38%)' }}>
              <Globe size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>全臺教育資源地圖</div>
              <div className="text-xs text-secondary mt-1">因材網、Cool English、PaGamO 整合</div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
