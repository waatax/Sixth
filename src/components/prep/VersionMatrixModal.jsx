import { useState } from 'react';
import { X, BookOpen, AlertTriangle, CheckCircle2, ChevronRight, Filter } from 'lucide-react';
import { versionMatrix } from '../../data/prepCurriculumAlignment';
import { playSound } from '../../utils/soundEffects';

const VersionMatrixModal = ({ isOpen, onClose }) => {
  const [activeSubject, setActiveSubject] = useState('math');
  const [selectedVersion, setSelectedVersion] = useState('all'); // 'all' | 'kangHsuan' | 'nanI' | 'hanLin'

  if (!isOpen) return null;

  const subjectList = [
    { id: 'math', label: '🧮 數學科', count: (versionMatrix.math || []).length },
    { id: 'english', label: '🔤 英語科', count: (versionMatrix.english || []).length },
    { id: 'science', label: '🔬 自然理化', count: (versionMatrix.science || []).length },
    { id: 'chinese', label: '📚 國文科', count: (versionMatrix.chinese || []).length },
    { id: 'social', label: '🌏 社會科', count: (versionMatrix.social || []).length }
  ];

  const currentItems = versionMatrix[activeSubject] || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl border"
        style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-light)' }}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b flex justify-between items-center bg-slate-50 dark:bg-slate-900/80" style={{ borderColor: 'var(--border-light)' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-amber-100 dark:bg-amber-900/40 text-amber-600 font-bold text-xl">
              📖
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black text-primary">108 課綱三大版本教科書銜接對照矩陣</h2>
                <span className="badge badge-accent text-[11px] font-bold">100% 課本對齊</span>
              </div>
              <p className="text-xs text-secondary mt-0.5">
                康軒 (Kang Hsuan) • 南一 (Nan I) • 翰林 (Han Lin) 國小六下至國一上章節難點全解構
              </p>
            </div>
          </div>
          <button
            onClick={() => { onClose(); playSound('click'); }}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-secondary transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filters Toolbar */}
        <div className="p-4 border-b flex justify-between items-center flex-wrap gap-3 bg-slate-100/50 dark:bg-slate-900/40" style={{ borderColor: 'var(--border-light)' }}>
          {/* Subject Tabs */}
          <div className="flex gap-1.5">
            {subjectList.map((s) => (
              <button
                key={s.id}
                onClick={() => { setActiveSubject(s.id); playSound('click'); }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${activeSubject === s.id ? 'bg-primary text-inverse shadow-sm' : 'bg-transparent text-secondary hover:text-primary'}`}
              >
                {s.label} ({s.count})
              </button>
            ))}
          </div>

          {/* Version Filter */}
          <div className="flex items-center gap-1.5 text-xs font-medium">
            <Filter size={14} className="text-secondary" />
            <span className="text-secondary">聚焦版本：</span>
            {['all', 'kangHsuan', 'nanI', 'hanLin'].map((v) => {
              const labelMap = { all: '全部對照', kangHsuan: '康軒版', nanI: '南一版', hanLin: '翰林版' };
              return (
                <button
                  key={v}
                  onClick={() => { setSelectedVersion(v); playSound('click'); }}
                  className={`px-2 py-1 rounded-lg text-xs font-bold transition-all ${selectedVersion === v ? 'bg-amber-500 text-white' : 'text-secondary hover:text-primary'}`}
                >
                  {labelMap[v]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {currentItems.map((item, idx) => (
            <div 
              key={item.id || idx} 
              className="p-4 sm:p-5 rounded-2xl border transition-all hover:shadow-md"
              style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-light)' }}
            >
              {/* Card Header */}
              <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 font-black text-xs flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-primary">{item.unitTitle}</h3>
                  <span className="badge text-[10px] font-mono font-bold bg-slate-200 dark:bg-slate-800 text-secondary">
                    {item.gradeCode}
                  </span>
                </div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 flex items-center gap-1">
                  <AlertTriangle size={12} /> 銜接警訊：{item.alertLevel}
                </span>
              </div>

              {/* Elementary Bridge */}
              <div className="mb-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-xs">
                <span className="font-bold text-amber-700 dark:text-amber-400 mr-2">
                  🌱 小學先備連結：
                </span>
                <span className="text-secondary">{item.elemBridge}</span>
              </div>

              {/* Version Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-3 text-xs">
                {(selectedVersion === 'all' || selectedVersion === 'kangHsuan') && (
                  <div className="p-3 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20">
                    <div className="font-bold text-blue-700 dark:text-blue-300 mb-1 flex items-center gap-1">
                      <BookOpen size={12} /> 康軒版對應章節：
                    </div>
                    <p className="text-secondary leading-relaxed">{item.kangHsuan}</p>
                  </div>
                )}
                {(selectedVersion === 'all' || selectedVersion === 'nanI') && (
                  <div className="p-3 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20">
                    <div className="font-bold text-emerald-700 dark:text-emerald-300 mb-1 flex items-center gap-1">
                      <BookOpen size={12} /> 南一版對應章節：
                    </div>
                    <p className="text-secondary leading-relaxed">{item.nanI}</p>
                  </div>
                )}
                {(selectedVersion === 'all' || selectedVersion === 'hanLin') && (
                  <div className="p-3 rounded-xl border border-purple-200 dark:border-purple-900/60 bg-purple-50/50 dark:bg-purple-950/20">
                    <div className="font-bold text-purple-700 dark:text-purple-300 mb-1 flex items-center gap-1">
                      <BookOpen size={12} /> 翰林版對應章節：
                    </div>
                    <p className="text-secondary leading-relaxed">{item.hanLin}</p>
                  </div>
                )}
              </div>

              {/* Core Skills Checklist */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="text-[11px] font-bold text-primary mb-1.5">🎯 108 課綱過渡期核心指標：</div>
                <div className="flex flex-wrap gap-1.5">
                  {item.coreSkills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-secondary flex items-center gap-1"
                    >
                      <CheckCircle2 size={11} className="text-emerald-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t flex justify-between items-center bg-slate-50 dark:bg-slate-900/80 text-xs text-secondary" style={{ borderColor: 'var(--border-light)' }}>
          <span>💡 建議家長與同學：先確認國中學校所屬教科書版本，針對「銜接警訊：極高」單元提早 2 週暖身！</span>
          <button
            onClick={() => { onClose(); playSound('click'); }}
            className="btn-primary text-xs px-4 py-1.5 rounded-xl font-bold"
          >
            關閉對照表
          </button>
        </div>
      </div>
    </div>
  );
};

export default VersionMatrixModal;
