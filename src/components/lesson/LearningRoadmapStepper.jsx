import React from 'react';
import { Compass, Lightbulb, Zap, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { playSound } from '../../utils/soundEffects';

const STAGES = [
  {
    step: 1,
    id: 'stage-1',
    label: '先備生活情境',
    subLabel: '喚醒舊經驗・為什麼學',
    icon: Compass,
    color: '#3b82f6',
    matcher: (secTitle) => secTitle.includes('導引') || secTitle.includes('情境') || secTitle.includes('為什麼')
  },
  {
    step: 2,
    id: 'stage-2',
    label: '直觀核心圖解',
    subLabel: '建立心智模型・告別死背',
    icon: Lightbulb,
    color: '#10b981',
    matcher: (secTitle) => secTitle.includes('觀念')
  },
  {
    step: 3,
    id: 'stage-3',
    label: '題型 4 步鷹架',
    subLabel: '破題關鍵字・防雷解法',
    icon: Zap,
    color: '#f59e0b',
    matcher: (secTitle) => secTitle.includes('範例') || secTitle.includes('例題') || secTitle.includes('迷思') || secTitle.includes('考題')
  },
  {
    step: 4,
    id: 'stage-4',
    label: '實戰融會貫通',
    subLabel: '隨堂檢測・銜接先修',
    icon: Award,
    color: '#8b5cf6',
    matcher: (secTitle) => secTitle.includes('練習') || secTitle.includes('測驗') || secTitle.includes('速查') || secTitle.includes('表格')
  }
];

const LearningRoadmapStepper = ({ sections = [], activeSectionId = '', onJumpToSection }) => {
  // Determine current active stage based on activeSectionId
  const activeSectionObj = sections.find(s => s.id === activeSectionId);
  const activeStageIndex = React.useMemo(() => {
    if (!activeSectionObj) return 0;
    const foundIdx = STAGES.findIndex(stage => stage.matcher(activeSectionObj.title));
    return foundIdx !== -1 ? foundIdx : 0;
  }, [activeSectionObj]);

  const handleStageClick = (stageIndex) => {
    const stage = STAGES[stageIndex];
    const targetSec = sections.find(s => stage.matcher(s.title));
    if (targetSec && onJumpToSection) {
      playSound('click');
      onJumpToSection(targetSec.id);
    }
  };

  return (
    <div 
      className="card mb-4 learning-roadmap-stepper-card overflow-hidden transition-all duration-300"
      style={{
        padding: '16px 20px',
        backgroundColor: 'var(--bg-secondary)',
        border: '1.5px solid var(--border-light)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
      }}
    >
      <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span 
            className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-white shadow-sm"
            style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)' }}
          >
            🧭
          </span>
          <div>
            <div className="text-xs font-bold text-primary flex items-center gap-1.5" style={{ color: 'var(--text-primary)' }}>
              <span>零基礎有序學習進階梯</span>
              <span className="badge badge-accent text-[10px] py-0.5 px-2">4 階循序漸進</span>
            </div>
            <div className="text-[11px] text-secondary">
              專為不熟悉本單元的學生設計：先懂情境 ➔ 看懂圖解 ➔ 學會解題 ➔ 實戰通關
            </div>
          </div>
        </div>

        <div className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-secondary">
          當前進行：<span style={{ color: STAGES[activeStageIndex].color }}>第 {activeStageIndex + 1} 階・{STAGES[activeStageIndex].label}</span>
        </div>
      </div>

      {/* Stepper Horizontal Progress Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {STAGES.map((stage, idx) => {
          const Icon = stage.icon;
          const isActive = idx === activeStageIndex;
          const isPassed = idx < activeStageIndex;

          return (
            <button
              key={stage.id}
              onClick={() => handleStageClick(idx)}
              className={`text-left p-2.5 rounded-xl border transition-all relative flex flex-col justify-between ${
                isActive 
                  ? 'shadow-md scale-[1.02]' 
                  : 'hover:bg-slate-500/5 opacity-85'
              }`}
              style={{
                backgroundColor: isActive 
                  ? `${stage.color}15` 
                  : 'var(--bg-tertiary)',
                borderColor: isActive 
                  ? stage.color 
                  : isPassed 
                    ? 'rgba(16, 185, 129, 0.4)' 
                    : 'var(--border-light)',
                cursor: 'pointer'
              }}
              title={`點擊直達：第 ${stage.step} 階【${stage.label}】`}
            >
              <div className="flex items-center justify-between mb-1.5 w-full">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: isPassed ? '#10b981' : isActive ? stage.color : 'var(--border-strong)',
                    color: '#ffffff'
                  }}
                >
                  {isPassed ? <CheckCircle2 size={14} /> : stage.step}
                </div>
                <Icon size={15} style={{ color: isActive ? stage.color : 'var(--text-secondary)' }} />
              </div>

              <div>
                <div className="text-xs font-bold" style={{ color: isActive ? stage.color : 'var(--text-primary)' }}>
                  {stage.label}
                </div>
                <div className="text-[10px] text-secondary truncate mt-0.5">
                  {stage.subLabel}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LearningRoadmapStepper;
