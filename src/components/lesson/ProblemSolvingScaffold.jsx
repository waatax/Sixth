import { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Compass, 
  CheckCircle2, 
  AlertTriangle, 
  Volume2, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  RotateCcw,
  Eye,
  Award
} from 'lucide-react';
import { playSound, triggerHaptic, dispatchDynamicIsland } from '../../utils/soundEffects';
import { speechEngine } from '../../utils/speechHelper';
import { useGamification } from '../../context/GamificationContext';

const ProblemSolvingScaffold = ({ rawText = '', children, isEnglish = false }) => {
  const { addCoins, addXp } = useGamification();
  const [currentStep, setCurrentStep] = useState(0); // 0: All or 1..4 step
  const [stepByStepMode, setStepByStepMode] = useState(false);
  const [isMastered, setIsMastered] = useState(false);

  // Parse the 4 sections from rawText
  const parseSections = () => {
    let questionContext = '';
    let thinkingKey = '';
    let stepsSolution = '';
    let commonTrap = '';

    // Regex parsing
    const qMatch = rawText.match(/📌\s*(?:\*\*題目情境[:：]?\*\*|題目情境[:：]?)([\s\S]*?)(?=💡|📐|⚠️|$)/);
    if (qMatch) questionContext = qMatch[1].trim();

    const tMatch = rawText.match(/💡\s*(?:\*\*思考關鍵[:：]?\*\*|思考關鍵[:：]?)([\s\S]*?)(?=📐|⚠️|$)/);
    if (tMatch) thinkingKey = tMatch[1].trim();

    const sMatch = rawText.match(/📐\s*(?:\*\*詳盡步驟[:：]?\*\*|詳盡步驟[:：]?|\*\*解題步驟[:：]?\*\*|解題步驟[:：]?)([\s\S]*?)(?=⚠️|$)/);
    if (sMatch) stepsSolution = sMatch[1].trim();

    const pMatch = rawText.match(/⚠️\s*(?:\*\*常犯錯誤[:：]?\*\*|常犯錯誤[:：]?|\*\*陷阱分析[:：]?\*\*|陷阱分析[:：]?)([\s\S]*?)$/);
    if (pMatch) commonTrap = pMatch[1].trim();

    return { questionContext, thinkingKey, stepsSolution, commonTrap };
  };

  const parsed = parseSections();
  const hasFullStructure = parsed.questionContext && (parsed.thinkingKey || parsed.stepsSolution);

  const handleToggleMastery = () => {
    playSound('coin');
    triggerHaptic('medium');
    const next = !isMastered;
    setIsMastered(next);
    if (next) {
      addCoins(5);
      addXp(15, 'example_mastery');
      dispatchDynamicIsland({
        title: '🌟 掌握題型 4 步思維！',
        subtitle: '成功解構例題 +15 XP +5 🪙',
        icon: '🎯'
      });
    }
  };

  const handleSpeak = (text) => {
    if (!text) return;
    const clean = text.replace(/[*_`$]/g, '');
    speechEngine.speak(clean, { lang: isEnglish ? 'en-US' : 'zh-TW' });
  };

  // If not structured with the 4 markers, fallback gracefully to children
  if (!hasFullStructure) {
    return <ul className="lesson-example-list-fallback">{children}</ul>;
  }

  const stepsData = [
    {
      num: 1,
      title: '第一步：審題偵探圈關鍵字',
      sub: '題目在問什麼？有哪些隱含線索？',
      icon: Search,
      color: '#3b82f6',
      content: parsed.questionContext
    },
    {
      num: 2,
      title: '第二步：提取解題心智模型',
      sub: '該用哪一個工具或觀念？',
      icon: Compass,
      color: '#10b981',
      content: parsed.thinkingKey
    },
    {
      num: 3,
      title: '第三步：步驟拆解與算式推導',
      sub: '按部就班算出正確解答',
      icon: Sparkles,
      color: '#f59e0b',
      content: parsed.stepsSolution
    },
    {
      num: 4,
      title: '第四步：名師防雷驗算檢查',
      sub: '最容易踩的坑是什麼？檢查單位與答案',
      icon: AlertTriangle,
      color: '#ef4444',
      content: parsed.commonTrap
    }
  ].filter(s => !!s.content);

  return (
    <div 
      className="card my-5 problem-solving-scaffold-card overflow-hidden transition-all duration-300"
      style={{
        padding: 0,
        backgroundColor: 'var(--bg-secondary)',
        border: isMastered ? '2px solid var(--accent-success)' : '1.5px solid var(--border-light)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: '0 6px 24px rgba(0, 0, 0, 0.04)'
      }}
    >
      {/* Top Scaffold Header */}
      <div 
        className="p-3.5 px-5 flex items-center justify-between flex-wrap gap-2"
        style={{
          backgroundColor: 'rgba(59, 130, 246, 0.06)',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="flex items-center gap-2">
          <span 
            className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-white text-xs shadow-sm"
            style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)' }}
          >
            📝
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                4 步解題思維鷹架工作台
              </span>
              <span className="badge badge-accent text-[10px] py-0.5 px-2 font-bold">
                實戰解題法
              </span>
            </div>
            <div className="text-[11px] text-secondary">
              審題 ➔ 策略 ➔ 推導 ➔ 防雷，訓練名師解題大腦
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setStepByStepMode(!stepByStepMode)}
            className={`btn-outline text-xs py-1 px-3 rounded-full font-bold flex items-center gap-1 ${
              stepByStepMode ? 'bg-blue-600 text-white border-blue-600' : ''
            }`}
            title="切換逐步引導模式"
          >
            <Eye size={13} />
            <span>{stepByStepMode ? '逐步引導中' : '👣 開啟逐步思考'}</span>
          </button>

          <button
            onClick={handleToggleMastery}
            className={`btn-outline text-xs py-1 px-3 rounded-full font-bold flex items-center gap-1 ${
              isMastered ? 'bg-emerald-600 text-white border-emerald-600' : 'hover:border-emerald-500'
            }`}
            title="標記已掌握此題型"
          >
            <CheckCircle2 size={13} />
            <span>{isMastered ? '已掌握題型' : '標記掌握 (+15 XP)'}</span>
          </button>
        </div>
      </div>

      {/* Step by Step Mode or Full View Mode */}
      <div className="p-5 space-y-3.5" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        {stepsData.map((step, idx) => {
          const Icon = step.icon;
          const isVisible = !stepByStepMode || idx <= currentStep;

          if (!isVisible) return null;

          return (
            <div 
              key={step.num}
              className="p-4 rounded-xl border animate-fade-in transition-all"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                borderColor: `${step.color}40`,
                borderLeft: `4px solid ${step.color}`
              }}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold text-white shadow-xs"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.num}
                  </div>
                  <span className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                    {step.title}
                  </span>
                  <span className="text-[11px] text-secondary hidden sm:inline">
                    （{step.sub}）
                  </span>
                </div>

                <button
                  onClick={() => handleSpeak(step.content)}
                  className="btn-outline p-1 rounded-full text-xs"
                  title="語音朗讀此步驟"
                >
                  <Volume2 size={12} style={{ color: step.color }} />
                </button>
              </div>

              <div 
                className="text-xs text-secondary leading-relaxed pl-7 whitespace-pre-line"
                style={{ color: 'var(--text-primary)' }}
              >
                {step.content}
              </div>
            </div>
          );
        })}

        {/* Step-by-Step Next Button */}
        {stepByStepMode && currentStep < stepsData.length - 1 && (
          <div className="flex justify-center pt-2">
            <button
              onClick={() => {
                playSound('click');
                setCurrentStep(prev => prev + 1);
              }}
              className="btn-primary flex items-center gap-1.5 text-xs py-2 px-5 rounded-full font-bold shadow-md"
              style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)' }}
            >
              <span>想好了！看下一步（第 {currentStep + 2} 步）</span>
              <ChevronRight size={14} />
            </button>
          </div>
        )}

        {stepByStepMode && currentStep >= stepsData.length - 1 && (
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => {
                playSound('click');
                setCurrentStep(0);
              }}
              className="btn-outline text-xs py-1.5 px-4 rounded-full flex items-center gap-1"
            >
              <RotateCcw size={12} />
              <span>重新一步步思考</span>
            </button>
            <button
              onClick={() => setStepByStepMode(false)}
              className="btn-outline text-xs py-1.5 px-4 rounded-full"
            >
              展開全部檢視
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemSolvingScaffold;
