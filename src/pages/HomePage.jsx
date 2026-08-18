import { useState } from 'react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { Zap, Timer, Globe, Bookmark, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const [selectedVersion, setSelectedVersion] = useState(coursesData.versions[0]);

  return (
    <div className="flex flex-col gap-8 py-2">
      {/* Top Banner & Header */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start flex-wrap gap-4 pt-1">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="badge badge-accent" style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
                ✨ 教育部 108 課綱・國小六年級全科目自主學習護照
              </span>
            </div>
            <h1 className="h1" style={{ margin: 0 }}>
              八大學習領域深度教程
            </h1>
            <p className="text-secondary" style={{ marginTop: '8px', fontSize: 'calc(1rem * var(--font-scale))' }}>
              點選下方任一學習領域，立即進入 48 個深度圖解教學單元、核心觀念剖析與即時驗證測驗！
            </p>
          </div>

          {/* Version Selector Filter directly at top */}
          <div className="flex items-center gap-2 card" style={{ padding: '8px 14px', borderRadius: 'var(--radius-lg)' }}>
            <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)' }}>教科書版本：</span>
            <div className="flex gap-1.5">
              {coursesData.versions.map(version => (
                <button
                  key={version}
                  className={`btn-pill ${selectedVersion === version ? 'active' : ''}`}
                  onClick={() => setSelectedVersion(version)}
                >
                  {version}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 8 Major Learning Areas Grid */}
        <section className="mt-2">
          <div
            className="subjects-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '20px'
            }}
          >
            {coursesData.subjects.map(subject => {
              const unitCount = (coursesData.units[subject.id] || []).length;
              return (
                <Link 
                  to={`/subject/${subject.id}`} 
                  key={subject.id} 
                  className="card card-hoverable flex flex-col justify-between gap-4" 
                  style={{ 
                    padding: '24px', 
                    borderTop: `5px solid ${subject.color}`,
                    borderRadius: 'var(--radius-lg)'
                  }}
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className="badge"
                        style={{
                          backgroundColor: `${subject.color}18`,
                          color: subject.color,
                          fontWeight: 700
                        }}
                      >
                        {unitCount} 個核心單元
                      </span>
                      <span className="text-xs text-tertiary">{selectedVersion}</span>
                    </div>

                    <h2 className="h3" style={{ marginTop: '8px', color: 'var(--text-primary)' }}>
                      {subject.name}
                    </h2>

                    <p className="text-sm text-secondary" style={{ marginTop: '8px', lineHeight: 1.65 }}>
                      {subject.desc}
                    </p>
                  </div>

                  <div
                    className="flex items-center justify-between pt-3 border-t text-sm font-semibold"
                    style={{ borderTop: '1px solid var(--border-light)', color: subject.color }}
                  >
                    <span>進入教學單元與測驗</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>

      {/* Interactive Learning Tools Hub */}
      <section className="mt-2">
        <div className="flex items-center gap-2 mb-3">
          <h2 className="h3" style={{ margin: 0 }}>⚡ 學童自主學習四大核心利器</h2>
          <span className="badge badge-accent">考前衝刺</span>
        </div>

        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '18px'
          }}
        >
          <Link
            to="/flashcards"
            className="card card-hoverable flex items-start gap-3.5"
            style={{ padding: '20px', borderLeft: '4px solid var(--accent-warning)' }}
          >
            <div
              style={{
                backgroundColor: 'var(--accent-warning-soft)',
                color: 'var(--accent-warning)',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Zap size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>考前速記翻翻卡</div>
              <div className="text-xs text-secondary" style={{ marginTop: '4px', lineHeight: 1.5 }}>
                公式、專有名詞與核心句型 3 秒快速複習
              </div>
            </div>
          </Link>

          <Link
            to="/mock-exam"
            className="card card-hoverable flex items-start gap-3.5"
            style={{ padding: '20px', borderLeft: '4px solid var(--accent-primary)' }}
          >
            <div
              style={{
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--accent-primary)',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Timer size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>全科計時模擬考</div>
              <div className="text-xs text-secondary" style={{ marginTop: '4px', lineHeight: 1.5 }}>
                10 分鐘 10 題實戰綜合測驗與即時解析
              </div>
            </div>
          </Link>

          <Link
            to="/mistakes"
            className="card card-hoverable flex items-start gap-3.5"
            style={{ padding: '20px', borderLeft: '4px solid var(--accent-error)' }}
          >
            <div
              style={{
                backgroundColor: 'var(--accent-error-soft)',
                color: 'var(--accent-error)',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Bookmark size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>個人化錯題筆記本</div>
              <div className="text-xs text-secondary" style={{ marginTop: '4px', lineHeight: 1.5 }}>
                自動收錄弱點題目，隨時一鍵搞懂消滅
              </div>
            </div>
          </Link>

          <Link
            to="/resources"
            className="card card-hoverable flex items-start gap-3.5"
            style={{ padding: '20px', borderLeft: '4px solid var(--accent-success)' }}
          >
            <div
              style={{
                backgroundColor: 'var(--accent-success-soft)',
                color: 'var(--accent-success)',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Globe size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>全臺教育資源地圖</div>
              <div className="text-xs text-secondary" style={{ marginTop: '4px', lineHeight: 1.5 }}>
                因材網、Cool English、PaGamO 整合導航
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
