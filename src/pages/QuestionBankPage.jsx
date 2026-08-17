import { useState } from 'react';
import { coursesData } from '../data/courses';
import { FileText, Download } from 'lucide-react';

const QuestionBankPage = () => {
  const [activeTab, setActiveTab] = useState('math'); // 'math' | 'science' | 'mandarin'
  const subjectName = coursesData.subjects.find(s => s.id === activeTab)?.name || '';

  const filteredBanks = coursesData.questionBanks.filter(qb => qb.subject === activeTab);

  return (
    <div className="flex flex-col gap-8 py-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="h1 mb-4">全國模擬試題與考古題庫</h1>
        <p className="text-secondary">彙整各大公開題庫網與學校歷屆段考精選試題。透過實戰演練，檢視學習成效。</p>
      </div>

      <div className="flex justify-center gap-4 border-b pb-4" style={{ borderBottom: '1px solid var(--border-light)' }}>
        {coursesData.subjects.map(subject => (
          <button 
            key={subject.id} 
            className={`h3 ${activeTab === subject.id ? '' : 'text-secondary'}`}
            style={{ 
              color: activeTab === subject.id ? 'var(--text-primary)' : 'var(--text-secondary)',
              borderBottom: activeTab === subject.id ? '2px solid var(--accent-primary)' : 'none',
              paddingBottom: '8px'
            }}
            onClick={() => setActiveTab(subject.id)}
          >
            {subject.name}
          </button>
        ))}
      </div>

      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {filteredBanks.length === 0 ? (
          <p className="text-secondary text-center" style={{ gridColumn: '1 / -1' }}>目前此科目尚無試題庫資料。</p>
        ) : (
          filteredBanks.map(bank => (
            <div key={bank.id} className="card flex flex-col justify-between gap-4">
              <div className="flex items-start gap-3">
                <div style={{ padding: '12px', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', color: 'var(--accent-primary)' }}>
                  <FileText size={24} />
                </div>
                <div>
                  <h3 style={{ fontWeight: 600, lineHeight: 1.3 }}>{bank.title}</h3>
                  <span className="badge mt-2" style={{ marginTop: '8px' }}>來源：{bank.source}</span>
                </div>
              </div>
              <button className="btn-outline flex items-center justify-center gap-2 mt-2" onClick={() => alert('此為展示用途，實際應用將開啟 PDF 下載連結。')}>
                <Download size={18} /> 下載試卷 ({bank.type.toUpperCase()})
              </button>
            </div>
          ))
        )}
      </div>

      <div className="card mt-8 bg-tertiary" style={{ backgroundColor: 'var(--bg-tertiary)', border: 'none' }}>
        <h3 className="h3 mb-2">💡 學習建議</h3>
        <p className="text-sm text-secondary">
          建議在完成該單元的**重點測驗**並觀看**教學影片**後，再來挑戰模擬試題。若在試題中遇到不會的觀念，請回到「課程列表」重新複習。
        </p>
      </div>
    </div>
  );
};

export default QuestionBankPage;
