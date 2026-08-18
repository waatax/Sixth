import { useState } from 'react';
import { coursesData } from '../data/courses';
import { FileText, Download, ExternalLink, HelpCircle } from 'lucide-react';

const QuestionBankPage = () => {
  const [activeTab, setActiveTab] = useState('math');
  const subject = coursesData.subjects.find(s => s.id === activeTab);
  const filteredBanks = coursesData.questionBanks.filter(qb => qb.subject === activeTab);

  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="text-center max-w-2xl mx-auto">
        <span className="badge badge-accent mb-2" style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
          📚 全國中小學公開段考試題與考古題庫
        </span>
        <h1 className="h1 mb-2">全國模擬試題與考古題庫中心</h1>
        <p className="text-secondary" style={{ lineHeight: 1.7 }}>
          彙整全國中小學段考精選考卷、期中期末模擬試題與出版社題庫資源。透過實戰演練，檢驗學習成果！
        </p>
      </div>

      {/* Subject Filter Tabs */}
      <div className="flex justify-center gap-2 flex-wrap border-b pb-4" style={{ borderBottom: '1px solid var(--border-light)' }}>
        {coursesData.subjects.map(sub => (
          <button 
            key={sub.id} 
            className={`btn-pill ${activeTab === sub.id ? 'active' : ''}`}
            onClick={() => setActiveTab(sub.id)}
          >
            {sub.name}
          </button>
        ))}
      </div>

      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
        {filteredBanks.length === 0 ? (
          <div className="card text-center py-12" style={{ gridColumn: '1 / -1' }}>
            <p className="text-secondary mb-2">此科目試題正由教育部題庫網與各校公開資源持續彙整中。</p>
            <p className="text-sm text-secondary">您可以先至「單元學習頁面」進行線上重點測驗！</p>
          </div>
        ) : (
          filteredBanks.map(bank => (
            <div key={bank.id} className="card card-hoverable flex flex-col justify-between gap-4">
              <div className="flex items-start gap-3">
                <div
                  style={{
                    padding: '12px',
                    backgroundColor: 'var(--accent-soft)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FileText size={24} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.4, color: 'var(--text-primary)' }}>{bank.title}</h3>
                  <span className="badge badge-accent mt-2" style={{ marginTop: '8px' }}>來源：{bank.source}</span>
                </div>
              </div>
              <button 
                className="btn-outline flex items-center justify-center gap-2 mt-2" 
                onClick={() => alert(`【試卷下載提醒】\n正在連接至「${bank.source}」下載《${bank.title}》試題與詳解 PDF。\n（此為示範連結，可直接列印練習）`)}
              >
                <Download size={16} /> 下載試卷與詳解 ({bank.type.toUpperCase()})
              </button>
            </div>
          ))
        )}
      </div>

      {/* Online Question Bank Portals */}
      <div className="card mt-2" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
        <h3 className="h3 mb-4" style={{ fontSize: '1.25rem' }}>🌐 全國公開題庫推薦入口</h3>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          <a
            href="https://www.junyiacademy.org/"
            target="_blank"
            rel="noreferrer"
            className="card card-hoverable flex items-center justify-between"
            style={{ padding: '16px', backgroundColor: 'var(--bg-tertiary)' }}
          >
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>均一教育平台</div>
              <div className="text-xs text-secondary mt-1">全科目影片與技能題庫</div>
            </div>
            <ExternalLink size={18} style={{ color: 'var(--accent-primary)' }} />
          </a>

          <a
            href="https://exam.naer.edu.tw/"
            target="_blank"
            rel="noreferrer"
            className="card card-hoverable flex items-center justify-between"
            style={{ padding: '16px', backgroundColor: 'var(--bg-tertiary)' }}
          >
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>國家教育研究院題庫</div>
              <div className="text-xs text-secondary mt-1">全國國中小段考考古題</div>
            </div>
            <ExternalLink size={18} style={{ color: 'var(--accent-primary)' }} />
          </a>

          <a
            href="https://www.learnmode.net/"
            target="_blank"
            rel="noreferrer"
            className="card card-hoverable flex items-center justify-between"
            style={{ padding: '16px', backgroundColor: 'var(--bg-tertiary)' }}
          >
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>學習吧 LearnMode</div>
              <div className="text-xs text-secondary mt-1">三大版本電子書與測驗</div>
            </div>
            <ExternalLink size={18} style={{ color: 'var(--accent-primary)' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuestionBankPage;
