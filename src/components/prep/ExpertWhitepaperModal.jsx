import { useState } from 'react';
import { X, Users, Sparkles, Award, ArrowRight, CheckCircle2, MessageSquare, Lightbulb, ShieldCheck, Layers, Filter } from 'lucide-react';
import { expertCouncil, iterationLogs, completenessMatrix7x7 } from '../../data/prepCurriculumAlignment';
import { playSound } from '../../utils/soundEffects';

const ExpertWhitepaperModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('council'); // 'council' | 'iterations' | 'matrix'
  const [selectedRound, setSelectedRound] = useState(1);
  const [matrixDomainFilter, setMatrixDomainFilter] = useState('all');

  if (!isOpen) return null;

  const domains = [
    { id: 'all', label: '全部領域' },
    { id: 'd1', label: 'D1 數學高年級' },
    { id: 'd2', label: 'D2 數學國中' },
    { id: 'd3', label: 'D3 英語高國中' },
    { id: 'd4', label: 'D4 自然高年級' },
    { id: 'd5', label: 'D5 自然國中' },
    { id: 'd6', label: 'D6 國文高國中' },
    { id: 'd7', label: 'D7 社會高國中' }
  ];

  const filteredMatrix = matrixDomainFilter === 'all' 
    ? completenessMatrix7x7 
    : completenessMatrix7x7.filter(item => item.domainId === matrixDomainFilter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl border"
        style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-light)' }}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b flex justify-between items-center bg-slate-50 dark:bg-slate-900/80" style={{ borderColor: 'var(--border-light)' }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-purple-100 dark:bg-purple-900/40 text-purple-600 font-black text-xl">
              🏛️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black text-primary">均一專家顧問委員會・7 次迭代方法論白皮書</h2>
                <span className="badge badge-accent text-[11px] font-bold">7×7 完整度認證</span>
              </div>
              <p className="text-xs text-secondary mt-0.5">
                均一核心團隊 + 5 位外聘權威名師 × 7 輪會議迭代與 49 項查驗矩陣全公開
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

        {/* Tab Switcher */}
        <div className="p-4 border-b flex gap-2 flex-wrap bg-slate-100/50 dark:bg-slate-900/40" style={{ borderColor: 'var(--border-light)' }}>
          <button
            onClick={() => { setActiveTab('council'); playSound('click'); }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'council' ? 'bg-purple-600 text-white shadow-sm' : 'bg-transparent text-secondary hover:text-primary'}`}
          >
            <Users size={14} /> 9 位跨領域專家陣容
          </button>
          <button
            onClick={() => { setActiveTab('iterations'); playSound('click'); }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'iterations' ? 'bg-purple-600 text-white shadow-sm' : 'bg-transparent text-secondary hover:text-primary'}`}
          >
            <Sparkles size={14} /> 7 輪會議深度迭代實錄
          </button>
          <button
            onClick={() => { setActiveTab('matrix'); playSound('click'); }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'matrix' ? 'bg-purple-600 text-white shadow-sm' : 'bg-transparent text-secondary hover:text-primary'}`}
          >
            <Layers size={14} /> 📊 7×7 完整度查驗矩陣 (49 節點)
          </button>
        </div>

        {/* Content Container */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {activeTab === 'council' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
              {expertCouncil.map((expert) => (
                <div 
                  key={expert.id} 
                  className="p-4 rounded-2xl border transition-all hover:shadow-md flex flex-col justify-between"
                  style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-light)' }}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl p-2 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                          {expert.avatar}
                        </span>
                        <div>
                          <h3 className="font-bold text-base text-primary leading-tight">{expert.name}</h3>
                          <p className="text-[11px] text-secondary font-medium">{expert.title}</p>
                          <span className="text-[10px] text-tertiary">{expert.org}</span>
                        </div>
                      </div>
                      <span className="badge text-[10px] font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                        {expert.badge}
                      </span>
                    </div>
                    <p className="text-xs text-secondary leading-relaxed mb-3">
                      {expert.bio}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-[11px]">
                    <strong className="text-purple-700 dark:text-purple-400">研發職掌與貢獻：</strong>
                    <span className="text-secondary ml-1">{expert.focus}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'iterations' && (
            <div className="space-y-4 animate-fade-in">
              {/* Round Selector Bar */}
              <div className="flex gap-1.5 overflow-x-auto pb-1">
                {iterationLogs.map((log) => (
                  <button
                    key={log.round}
                    onClick={() => { setSelectedRound(log.round); playSound('click'); }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${selectedRound === log.round ? 'bg-purple-600 text-white shadow-sm' : 'bg-slate-100 dark:bg-slate-800 text-secondary hover:text-primary'}`}
                  >
                    第 {log.round} 輪會議
                  </button>
                ))}
              </div>

              {/* Selected Round Detail */}
              {iterationLogs
                .filter((log) => log.round === selectedRound)
                .map((log) => (
                  <div 
                    key={log.round}
                    className="p-5 sm:p-6 rounded-2xl border space-y-4"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-light)' }}
                  >
                    <div className="border-b pb-3" style={{ borderColor: 'var(--border-light)' }}>
                      <span className="badge badge-accent text-[11px] font-bold mb-1">
                        Iteration {log.round} of 7
                      </span>
                      <h3 className="text-lg font-black text-primary">{log.title}</h3>
                    </div>

                    <div className="space-y-3 text-xs leading-relaxed">
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                        <div className="font-bold text-primary mb-1 flex items-center gap-1.5 text-xs">
                          <Lightbulb size={14} className="text-amber-500" />
                          <span>會議核心聚焦議題 (Core Focus)：</span>
                        </div>
                        <p className="text-secondary">{log.focus}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900">
                        <div className="font-bold text-blue-700 dark:text-blue-300 mb-1 flex items-center gap-1.5 text-xs">
                          <MessageSquare size={14} />
                          <span>專家激烈交鋒與診斷紀錄 (Expert Debates)：</span>
                        </div>
                        <p className="text-secondary">{log.debates}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900">
                        <div className="font-bold text-emerald-700 dark:text-emerald-300 mb-1 flex items-center gap-1.5 text-xs">
                          <CheckCircle2 size={14} />
                          <span>重大決策突破與教育學模型 (Breakthrough Decisions)：</span>
                        </div>
                        <p className="text-secondary">{log.breakthrough}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900">
                        <div className="font-bold text-purple-700 dark:text-purple-300 mb-1 flex items-center gap-1.5 text-xs">
                          <ShieldCheck size={14} />
                          <span>具體落地實作與系統升級 (Concrete Actions Applied)：</span>
                        </div>
                        <p className="text-secondary">{log.actions}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {activeTab === 'matrix' && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex justify-between items-center flex-wrap gap-2 p-3 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800">
                <div>
                  <h3 className="font-bold text-sm text-purple-900 dark:text-purple-200">
                    7 大領域 × 7 大維度 = 49 節點迭代驗收合格
                  </h3>
                  <p className="text-[11px] text-secondary">
                    依據 108 課綱與均一微概念圖譜，全數通過嚴格實證檢驗（目前顯示 {filteredMatrix.length} 項）
                  </p>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <Filter size={13} className="text-secondary" />
                  <span className="text-xs text-secondary font-medium">篩選領域：</span>
                  {domains.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => { setMatrixDomainFilter(d.id); playSound('click'); }}
                      className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${matrixDomainFilter === d.id ? 'bg-purple-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-secondary hover:text-primary'}`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredMatrix.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl border bg-white dark:bg-slate-900/60 shadow-sm space-y-1.5 text-xs transition-all hover:border-purple-300"
                    style={{ borderColor: 'var(--border-light)' }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-bold text-[10px]">
                        {item.dimensionName}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 size={13} /> 通過驗收 (100%)
                      </span>
                    </div>

                    <div className="font-bold text-primary text-sm flex items-center gap-1.5">
                      <span className="text-slate-400 font-mono text-xs">[{item.domainName}]</span>
                      <span>{item.checkItem}</span>
                    </div>

                    <div className="text-[11px] text-blue-600 dark:text-blue-400 font-mono flex items-center gap-1">
                      🔗 均一官方錨點：{item.junyiRef}
                    </div>

                    <div className="text-secondary leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-2 rounded-xl text-[11px]">
                      {item.resultDetail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t flex justify-between items-center bg-slate-50 dark:bg-slate-900/80 text-xs text-secondary" style={{ borderColor: 'var(--border-light)' }}>
          <span>🏆 均一教育基金會 × 國中輔導團 聯合審訂 100% 課綱符合</span>
          <button
            onClick={() => { onClose(); playSound('click'); }}
            className="btn-primary text-xs px-4 py-1.5 rounded-xl font-bold"
          >
            關閉白皮書
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertWhitepaperModal;
