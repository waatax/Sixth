import { useState } from 'react';
import { 
  Network, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Compass, 
  Sparkles, 
  GraduationCap, 
  Radio, 
  Volume2, 
  Globe,
  Share2
} from 'lucide-react';
import { getConceptBridge } from '../../data/conceptBridges';
import { playSound } from '../../utils/soundEffects';
import { speechEngine } from '../../utils/speechHelper';

const ConceptKnowledgeBridge = ({ unitId, subjectId, unitTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const bridgeData = getConceptBridge(unitId, subjectId);

  const toggleOpen = () => {
    playSound('click');
    setIsOpen(!isOpen);
  };

  const speakOverview = (e) => {
    e.stopPropagation();
    const text = `${unitTitle}。先備知識：${bridgeData.prerequisite}。本課核心心智模型：${bridgeData.coreMentalModel}。國中先修銜接：${bridgeData.juniorHighBridge}`;
    speechEngine.speak(text, { lang: 'zh-TW' });
  };

  return (
    <div 
      className="card mb-4 concept-knowledge-bridge-card overflow-hidden transition-all duration-300"
      style={{
        padding: 0,
        backgroundColor: 'var(--bg-secondary)',
        border: '1.5px solid var(--border-light)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: '0 4px 18px rgba(0, 0, 0, 0.03)'
      }}
    >
      {/* Top Banner Header */}
      <div 
        onClick={toggleOpen}
        className="flex items-center justify-between p-3.5 px-5 cursor-pointer select-none hover:bg-slate-500/5 transition-colors gap-3"
        style={{
          backgroundColor: isOpen ? 'rgba(99, 102, 241, 0.05)' : 'var(--bg-tertiary)',
          borderBottom: isOpen ? '1px solid var(--border-light)' : 'none'
        }}
      >
        <div className="flex items-center gap-2.5">
          <div 
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white shadow-sm"
            style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}
          >
            <Network size={15} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                🌐 融會貫通知識網絡脈絡・先備與先修地圖
              </span>
              <span className="badge badge-accent text-[10px] py-0.5 px-2">零基礎不焦慮</span>
            </div>
            <div className="text-[11px] text-secondary">
              看清知識的前因後果：我以前學過什麼？這節課通向哪裡？
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={speakOverview}
            className="btn-outline p-1.5 rounded-full text-xs hover:border-indigo-500"
            title="語音導讀知識脈絡"
          >
            <Volume2 size={13} style={{ color: 'var(--accent-primary)' }} />
          </button>
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
            {isOpen ? '收合脈絡' : '點擊展開脈絡圖'}
          </span>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </div>

      {/* Expanded Knowledge Bridge Visualizer */}
      {isOpen && (
        <div className="p-5 animate-fade-in space-y-4" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          {/* 3-Stage Linear Flowchart */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Step 1: Prerequisite */}
            <div 
              className="p-3.5 rounded-xl border flex flex-col justify-between"
              style={{
                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                borderColor: 'rgba(59, 130, 246, 0.25)'
              }}
            >
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 mb-1.5">
                  <Compass size={14} />
                  <span>⬅️ 1. 先備舊經驗（我以前學過）</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed m-0">
                  {bridgeData.prerequisite}
                </p>
              </div>
              <div className="mt-2 pt-2 border-t border-blue-200 dark:border-blue-900/40 text-[10px] text-blue-500 font-medium">
                💡 只要會這個，學本課就完全不用怕！
              </div>
            </div>

            {/* Step 2: Current Focus */}
            <div 
              className="p-3.5 rounded-xl border flex flex-col justify-between"
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.05)',
                borderColor: 'rgba(16, 185, 129, 0.3)'
              }}
            >
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1.5">
                  <Sparkles size={14} />
                  <span>🎯 2. 本單元核心心智模型</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed m-0">
                  {bridgeData.coreMentalModel}
                </p>
              </div>
              <div className="mt-2 pt-2 border-t border-emerald-200 dark:border-emerald-900/40 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                ✨ 掌握直觀圖解，拒絕死記硬背！
              </div>
            </div>

            {/* Step 3: Junior High Bridge */}
            <div 
              className="p-3.5 rounded-xl border flex flex-col justify-between"
              style={{
                backgroundColor: 'rgba(139, 92, 246, 0.05)',
                borderColor: 'rgba(139, 92, 246, 0.3)'
              }}
            >
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 mb-1.5">
                  <GraduationCap size={14} />
                  <span>➡️ 3. 國中先修與會考延伸</span>
                </div>
                <p className="text-xs text-secondary leading-relaxed m-0">
                  {bridgeData.juniorHighBridge}
                </p>
              </div>
              <div className="mt-2 pt-2 border-t border-purple-200 dark:border-purple-900/40 text-[10px] text-purple-600 dark:text-purple-400 font-medium">
                🚀 融會貫通！國中銜接輕鬆跨越斷崖
              </div>
            </div>
          </div>

          {/* Keyword Radar Box: How to apply to Problem Solving! */}
          {bridgeData.keywordRadar && bridgeData.keywordRadar.length > 0 && (
            <div 
              className="p-3.5 rounded-xl border"
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.05)',
                borderColor: 'rgba(245, 158, 11, 0.3)'
              }}
            >
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 mb-2">
                <Radio size={14} />
                <span>🔍 破題關鍵字雷達（看到這些詞 ➔ 秒想到這個解題工具）</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {bridgeData.keywordRadar.map((k, idx) => (
                  <div 
                    key={idx} 
                    className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/50 text-xs flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="text-amber-500 font-bold">🎯 題幹：</span>
                      <span className="font-semibold text-primary">{k.trigger}</span>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold flex-shrink-0">
                      <ArrowRight size={12} />
                      <span>{k.tool}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Life Application & Cross-Subject Link */}
          {bridgeData.lifeApplication && (
            <div className="flex items-center gap-2 text-xs text-secondary px-1">
              <Globe size={13} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
              <span><strong>生活實境應用：</strong>{bridgeData.lifeApplication}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ConceptKnowledgeBridge;
