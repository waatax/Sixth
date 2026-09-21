import { useState } from 'react';
import { 
  Zap, 
  X, 
  Copy, 
  Check, 
  Printer, 
  Sparkles, 
  AlertTriangle, 
  Lightbulb, 
  BookOpen, 
  CheckCircle2,
  GraduationCap,
  Quote
} from 'lucide-react';
import { playSound } from '../../utils/soundEffects';
import { curatedCheatSheets } from '../../data/curatedCheatSheets';

const LessonCheatSheetModal = ({ isOpen, onClose, unit, subjectName, markdownContent = '' }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !unit) return null;

  const curated = curatedCheatSheets[unit.id];

  // Extract key concepts
  const keyConcepts = curated?.coreCompetencies || unit.keyConcepts || ['核心觀念掌握', '重點題型辨析'];

  // Extract tables or bullet formulas from markdown if available (fallback)
  const extractFormulasAndPitfalls = () => {
    const items = [];
    if (!markdownContent) return items;

    const lines = markdownContent.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.includes('❌') || line.includes('陷阱') || line.includes('⚠️')) {
        items.push({
          type: 'pitfall',
          text: line.replace(/^[-*]\s*/, '').replace(/[*_~`]/g, '')
        });
      } else if (line.includes('公式') || line.includes('口訣') || line.includes('🌟')) {
        items.push({
          type: 'rule',
          text: line.replace(/^[-*]\s*/, '').replace(/[*_~`]/g, '')
        });
      }
    }
    return items.slice(0, 8);
  };

  const extractedInsights = extractFormulasAndPitfalls();

  const handleCopyCheatSheet = () => {
    let text = `【${subjectName}・${unit.title} 考前 1 分鐘極速秘笈】\n\n`;
    text += `🎯 核心考點與學習指標：\n${keyConcepts.map((c, i) => `  ${i + 1}. ${c}`).join('\n')}\n\n`;

    if (curated) {
      if (curated.formulasAndRules?.length > 0) {
        text += `📐 必勝公式與解題定理：\n`;
        curated.formulasAndRules.forEach((f, i) => {
          text += `  ${i + 1}. 【${f.name}】：${f.formula}\n     解析：${f.detail}\n`;
        });
        text += `\n`;
      }
      if (curated.topPitfalls?.length > 0) {
        text += `⚠️ 常犯易錯三大地雷陷阱：\n${curated.topPitfalls.map(p => `  • ${p}`).join('\n')}\n\n`;
      }
      if (curated.mnemonic) {
        text += `💡 朗朗上口速記口訣：\n  ${curated.mnemonic}\n\n`;
      }
      if (curated.juniorHighBridge) {
        text += `🎓 國中會考銜接先修重點：\n  ${curated.juniorHighBridge}\n\n`;
      }
    } else if (extractedInsights.length > 0) {
      text += `💡 關鍵口訣與必背規則：\n${extractedInsights.filter(i => i.type === 'rule').map(r => `  • ${r.text}`).join('\n')}\n\n`;
      text += `⚠️ 常考易錯地雷：\n${extractedInsights.filter(i => i.type === 'pitfall').map(p => `  • ${p.text}`).join('\n')}\n\n`;
    }
    text += `— 來自《最強小六》均一專家團隊全科學習護照`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    playSound('coin');
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="lesson-cheatsheet-backdrop animate-fade-in"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(5px)',
        zIndex: 99998,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
    >
      <div 
        className="lesson-cheatsheet-panel animate-scale-up"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '680px',
          maxHeight: '88vh',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-xl)',
          border: '2px solid var(--border-strong)',
          boxShadow: 'var(--shadow-xl)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div 
          className="p-4 flex items-center justify-between border-b border-light"
          style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(234, 88, 12, 0.08) 100%)' }}
        >
          <div className="flex items-center gap-2.5">
            <div 
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(245, 158, 11, 0.3)'
              }}
            >
              <Zap size={20} style={{ fill: '#fff' }} />
            </div>
            <div>
              <div className="font-extrabold text-sm flex items-center gap-1.5" style={{ color: 'var(--text-primary)' }}>
                <span>考前 1 分鐘極速秘笈</span>
                {curated ? (
                  <span className="badge badge-success text-[10px] py-0.5 font-bold">108課綱權威編校</span>
                ) : (
                  <span className="badge badge-warning text-[10px] py-0.5 font-bold">高頻濃縮</span>
                )}
              </div>
              <span className="text-xs text-secondary">{subjectName} · {unit.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCopyCheatSheet}
              className="btn-outline text-xs py-1 px-2.5 rounded-lg flex items-center gap-1"
              title="一鍵複製本單元速查文字"
            >
              {copied ? <Check size={13} style={{ color: 'var(--accent-success)' }} /> : <Copy size={13} />}
              <span className="hidden sm:inline">{copied ? '已複製' : '複製文字'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="btn-outline text-xs py-1 px-2.5 rounded-lg flex items-center gap-1"
              title="列印秘笈小卡"
            >
              <Printer size={13} />
              <span className="hidden sm:inline">列印</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-secondary hover:text-primary ml-1"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 overflow-y-auto space-y-5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          {/* Mnemonic Banner if available */}
          {curated?.mnemonic && (
            <div 
              className="p-3.5 rounded-xl border flex items-start gap-2.5 animate-fade-in"
              style={{
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.14) 0%, rgba(251, 191, 36, 0.08) 100%)',
                borderColor: 'rgba(245, 158, 11, 0.35)'
              }}
            >
              <Quote size={20} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-[11px] font-black tracking-wider text-amber-700 dark:text-amber-300 uppercase">
                  💡 名師考前金牌速記口訣
                </div>
                <div className="text-sm font-extrabold text-slate-800 dark:text-amber-100 mt-0.5 leading-relaxed">
                  {curated.mnemonic}
                </div>
              </div>
            </div>
          )}

          {/* 1. Key Concepts Pills */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold mb-2.5" style={{ color: 'var(--accent-primary)' }}>
              <BookOpen size={14} />
              <span>本課核心考點與能力指標 (Key Competencies)</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {keyConcepts.map((concept, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold"
                  style={{
                    backgroundColor: 'rgba(37, 99, 235, 0.08)',
                    color: 'var(--accent-primary)',
                    border: '1px solid rgba(37, 99, 235, 0.2)'
                  }}
                >
                  <CheckCircle2 size={13} />
                  <span>{concept}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Formulas & Principles */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold mb-2.5 text-amber-600 dark:text-amber-400">
              <Lightbulb size={14} />
              <span>📐 必勝解題公式與破題算理 (Formulas & Principles)</span>
            </div>
            <div className="space-y-2.5">
              {curated?.formulasAndRules ? (
                curated.formulasAndRules.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-xl text-xs space-y-1.5"
                    style={{
                      backgroundColor: 'rgba(245, 158, 11, 0.08)',
                      border: '1px solid rgba(245, 158, 11, 0.25)'
                    }}
                  >
                    <div className="flex items-center justify-between font-bold text-amber-800 dark:text-amber-300">
                      <span>⭐ 【{item.name}】</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/70 dark:bg-slate-900/70 border border-amber-300/40 font-mono text-sm text-primary font-bold">
                      {item.formula}
                    </div>
                    {item.detail && (
                      <p className="text-secondary text-[11px] leading-relaxed whitespace-pre-line">
                        {item.detail}
                      </p>
                    )}
                  </div>
                ))
              ) : extractedInsights.filter(i => i.type === 'rule').length > 0 ? (
                extractedInsights.filter(i => i.type === 'rule').map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 rounded-xl text-xs leading-relaxed font-semibold flex items-start gap-2"
                    style={{
                      backgroundColor: 'rgba(245, 158, 11, 0.08)',
                      border: '1px solid rgba(245, 158, 11, 0.25)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <span className="text-amber-500 font-bold mt-0.5">⭐</span>
                    <span className="flex-1">{item.text}</span>
                  </div>
                ))
              ) : (
                <div 
                  className="p-3.5 rounded-xl text-xs leading-relaxed font-medium"
                  style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-light)' }}
                >
                  💡 <strong>重要提醒</strong>：研讀題目時，請先釐清已知條件與欲求目標，配合短除法與單位換算公式，逐步列式計算！
                </div>
              )}
            </div>
          </div>

          {/* 3. Top Pitfalls Alert Card */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold mb-2.5 text-rose-600 dark:text-rose-400">
              <AlertTriangle size={14} />
              <span>⚠️ 段考常考三大易錯地雷 (Common Traps & Pitfalls)</span>
            </div>
            <div className="space-y-2">
              {curated?.topPitfalls ? (
                curated.topPitfalls.map((pitfall, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 rounded-xl text-xs leading-relaxed flex items-start gap-2"
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.07)',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <span className="text-rose-500 font-bold mt-0.5">⚠️</span>
                    <span className="flex-1 font-medium">{pitfall}</span>
                  </div>
                ))
              ) : extractedInsights.filter(i => i.type === 'pitfall').length > 0 ? (
                extractedInsights.filter(i => i.type === 'pitfall').map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 rounded-xl text-xs leading-relaxed flex items-start gap-2"
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.07)',
                      border: '1px solid rgba(239, 68, 68, 0.2)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <span className="text-rose-500 font-bold mt-0.5">⚠️</span>
                    <span className="flex-1">{item.text}</span>
                  </div>
                ))
              ) : (
                <div 
                  className="p-3.5 rounded-xl text-xs leading-relaxed font-medium"
                  style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.15)' }}
                >
                  ⚠️ <strong>常見陷阱</strong>：計算時請特別注意題目單位的統整（公尺 vs 公分、時速 vs 秒速），答案務必寫出正確單位！
                </div>
              )}
            </div>
          </div>

          {/* 4. Junior High Bridge Insight if available */}
          {curated?.juniorHighBridge && (
            <div 
              className="p-3.5 rounded-xl border text-xs leading-relaxed space-y-1.5"
              style={{
                backgroundColor: 'rgba(99, 102, 241, 0.08)',
                borderColor: 'rgba(99, 102, 241, 0.25)'
              }}
            >
              <div className="flex items-center gap-1.5 font-bold text-indigo-700 dark:text-indigo-300">
                <GraduationCap size={15} />
                <span>🎓 均一教育顧問：國中會考銜接先修提點</span>
              </div>
              <p className="text-secondary leading-relaxed">
                {curated.juniorHighBridge}
              </p>
            </div>
          )}

          {/* Bottom Pro-tip */}
          <div 
            className="p-3.5 rounded-xl text-xs flex items-center justify-between gap-3"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(59, 130, 246, 0.08) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.25)'
            }}
          >
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-emerald-500 flex-shrink-0" />
              <span className="text-secondary font-medium">
                進考場前花 60 秒默背上方口訣與避雷指南，考試零失誤！
              </span>
            </div>
            <button
              onClick={handleCopyCheatSheet}
              className="btn-primary text-xs py-1 px-3 rounded-lg flex-shrink-0 font-bold"
            >
              {copied ? '已複製' : '帶走秘笈'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonCheatSheetModal;
