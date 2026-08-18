import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Sparkles, Zap, BookOpen, Target, ArrowRight, RotateCcw, CheckCircle2, HeartHandshake, Smile, Award } from 'lucide-react';
import { coursesData } from '../../data/courses';
import { playSound } from '../../utils/soundEffects';

const GuidedStartWizard = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState('math');
  const [savedPlan, setSavedPlan] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const plan = localStorage.getItem('sixth_guided_plan');
    if (plan) {
      try {
        setSavedPlan(JSON.parse(plan));
      } catch (e) {}
    }
  }, []);

  const handleGoalSelect = (goalKey) => {
    setSelectedGoal(goalKey);
    playSound('click');
    if (goalKey === 'rescue_subject') {
      setStep(2);
    } else {
      generatePlan(goalKey, null);
    }
  };

  const handleSubjectSelect = (subId) => {
    setSelectedSubject(subId);
    playSound('click');
    generatePlan('rescue_subject', subId);
  };

  const generatePlan = (goalKey, subId) => {
    const subject = coursesData.subjects.find(s => s.id === subId) || coursesData.subjects[0];
    const unitList = coursesData.units[subject.id] || [];
    const firstUnit = unitList[0] || { id: 'math-u1', title: '最大公因數與最小公倍數' };

    let planObj = null;

    if (goalKey === 'rescue_subject') {
      planObj = {
        title: `專屬補救計劃：【${subject.name}】穩紮穩打第一步`,
        desc: `不用焦慮！我們先從最基礎、最好拿分的「${firstUnit.title}」開始，只要看 3 分鐘圖解，就能找回信心！`,
        actionText: `立即開始：${firstUnit.title}`,
        link: `/lesson/${firstUnit.id}`,
        badge: '🌱 基礎加固起點',
        xpReward: 60,
        subId: subject.id
      };
    } else if (goalKey === 'quick_5min') {
      planObj = {
        title: '5 分鐘速記充電計劃：考前高頻精華翻翻卡',
        desc: '時間不多沒關係！翻閱 5 張核心公式與必考名詞卡，大腦立即進入高效率複習狀態！',
        actionText: '開啟 3 秒翻翻卡複習',
        link: '/flashcards',
        badge: '⚡ 5分鐘極速微學習',
        xpReward: 40,
        subId: 'all'
      };
    } else if (goalKey === 'confidence_boost') {
      planObj = {
        title: '信心養成計劃：從最直覺、最有趣的圖解開始',
        desc: '挑選了圖解最多、最容易理解的「自然科學：多變的天氣與氣象」，先拿下一座小城堡！',
        actionText: '進入輕鬆圖解：天氣與氣象',
        link: '/lesson/sci-u1',
        badge: '🌟 信心建造者',
        xpReward: 50,
        subId: 'science'
      };
    } else {
      planObj = {
        title: '全科段考總體檢：10 分鐘全科綜合評量',
        desc: '想知道自己哪裡已經很強、哪裡需要稍微補強？做一次 10 題診斷，系統為你整理專屬錯題筆記！',
        actionText: '開始 10 題綜合診斷考',
        link: '/mock-exam',
        badge: '🏆 全科實戰檢測',
        xpReward: 100,
        subId: 'all'
      };
    }

    localStorage.setItem('sixth_guided_plan', JSON.stringify(planObj));
    setSavedPlan(planObj);
    setStep(3);
    playSound('correct');
  };

  const handleReset = () => {
    localStorage.removeItem('sixth_guided_plan');
    setSavedPlan(null);
    setStep(1);
    setSelectedGoal(null);
    playSound('click');
  };

  const handleStartPlan = (link) => {
    playSound('click');
    navigate(link);
  };

  return (
    <div 
      className="card mb-6 overflow-hidden" 
      style={{
        padding: '0',
        borderRadius: 'var(--radius-xl)',
        border: '1.5px solid var(--border-light)',
        background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(37, 99, 235, 0.03) 100%)',
        boxShadow: 'var(--shadow-md)'
      }}
    >
      {/* Header Banner */}
      <div 
        style={{
          padding: '16px 24px',
          background: 'linear-gradient(90deg, rgba(37, 99, 235, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%)',
          borderBottom: '1px solid var(--border-light)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <div className="flex items-center gap-2.5">
          <div 
            style={{
              backgroundColor: 'var(--accent-primary)',
              color: 'white',
              width: '32px',
              height: '32px',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(37, 99, 235, 0.3)'
            }}
          >
            <Compass size={18} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                不知從何開始？讓 AI 學習夥伴為你導航
              </span>
              <span className="badge badge-accent" style={{ fontSize: '0.72rem' }}>
                🌟 降焦慮引導
              </span>
            </div>
            <p className="text-xs text-secondary" style={{ margin: 0, marginTop: '2px' }}>
              專為小六學童設計的「小步前進法」，30 秒量身打造今日無壓力起步計劃
            </p>
          </div>
        </div>

        {savedPlan && (
          <button 
            onClick={handleReset} 
            className="btn-outline text-xs flex items-center gap-1"
            style={{ padding: '5px 10px', minHeight: '30px' }}
            title="重新評估或更換學習目標"
          >
            <RotateCcw size={12} />
            <span>重選目標</span>
          </button>
        )}
      </div>

      {/* Content Area */}
      <div style={{ padding: '20px 24px' }}>
        {/* If user already has a generated plan */}
        {savedPlan && step !== 1 && step !== 2 ? (
          <div className="animate-fade-in flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-start gap-4" style={{ flex: 1 }}>
              <div 
                style={{
                  fontSize: '2rem',
                  backgroundColor: 'var(--bg-tertiary)',
                  padding: '12px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-light)'
                }}
              >
                🎯
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="badge badge-success" style={{ fontWeight: 700 }}>
                    {savedPlan.badge}
                  </span>
                  <span className="text-xs text-secondary font-bold">
                    完成獎勵：+{savedPlan.xpReward} XP 經驗值
                  </span>
                </div>
                <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                  {savedPlan.title}
                </h3>
                <p className="text-sm text-secondary" style={{ marginTop: '6px', lineHeight: 1.6, maxWidth: '640px' }}>
                  {savedPlan.desc}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-auto" style={{ minWidth: '220px' }}>
              <button 
                onClick={() => handleStartPlan(savedPlan.link)}
                className="btn-primary flex items-center justify-center gap-2"
                style={{
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)'
                }}
              >
                <span>{savedPlan.actionText}</span>
                <ArrowRight size={18} />
              </button>
              <div className="text-center text-xs text-tertiary">
                🌱 只要 3~5 分鐘，放鬆心情開始！
              </div>
            </div>
          </div>
        ) : step === 1 ? (
          /* Step 1: Goal Picker */
          <div className="animate-fade-in">
            <div className="mb-4">
              <span className="text-sm font-bold text-primary flex items-center gap-1.5 mb-1">
                <Smile size={16} />
                <span>請告訴夥伴，你目前的學習心情或需求？</span>
              </span>
              <p className="text-xs text-secondary">
                選一個最符合你現在狀態的選項，我們會幫你挑出最輕鬆、最有效的起點：
              </p>
            </div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '14px'
              }}
            >
              <button
                onClick={() => handleGoalSelect('rescue_subject')}
                className="card card-hoverable text-left p-4 flex items-start gap-3"
                style={{
                  border: '1.5px solid var(--border-light)',
                  borderLeft: '4px solid var(--accent-error)',
                  backgroundColor: 'var(--bg-secondary)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '1.6rem' }}>🩹</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--text-primary)' }}>
                    我想補救最弱的科目
                  </div>
                  <div className="text-xs text-secondary" style={{ marginTop: '4px', lineHeight: 1.5 }}>
                    數學或自然卡關？從最核心基礎觀念打底，一步一步穩穩救起來。
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleGoalSelect('quick_5min')}
                className="card card-hoverable text-left p-4 flex items-start gap-3"
                style={{
                  border: '1.5px solid var(--border-light)',
                  borderLeft: '4px solid var(--accent-warning)',
                  backgroundColor: 'var(--bg-secondary)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '1.6rem' }}>⚡</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--text-primary)' }}>
                    我只有 5 分鐘碎片時間
                  </div>
                  <div className="text-xs text-secondary" style={{ marginTop: '4px', lineHeight: 1.5 }}>
                    隨手翻閱 5 張高頻公式與專有名詞卡，零壓力快速複習。
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleGoalSelect('confidence_boost')}
                className="card card-hoverable text-left p-4 flex items-start gap-3"
                style={{
                  border: '1.5px solid var(--border-light)',
                  borderLeft: '4px solid var(--accent-success)',
                  backgroundColor: 'var(--bg-secondary)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '1.6rem' }}>🌟</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--text-primary)' }}>
                    從最有趣、最容易的開始
                  </div>
                  <div className="text-xs text-secondary" style={{ marginTop: '4px', lineHeight: 1.5 }}>
                    先看生動好玩的圖解教材，輕鬆拿下第一枚榮譽勳章，建立滿滿自信！
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleGoalSelect('mock_exam')}
                className="card card-hoverable text-left p-4 flex items-start gap-3"
                style={{
                  border: '1.5px solid var(--border-light)',
                  borderLeft: '4px solid var(--accent-primary)',
                  backgroundColor: 'var(--bg-secondary)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '1.6rem' }}>🎯</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--text-primary)' }}>
                    我要進行段考總體檢
                  </div>
                  <div className="text-xs text-secondary" style={{ marginTop: '4px', lineHeight: 1.5 }}>
                    10 題全科精華測驗，快速找出弱點盲點並自動存入錯題本。
                  </div>
                </div>
              </button>
            </div>
          </div>
        ) : (
          /* Step 2: Subject Picker for Rescue */
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-sm font-bold text-primary flex items-center gap-1.5 mb-1">
                  <HeartHandshake size={16} />
                  <span>請選擇你最想優先加強的學習領域：</span>
                </span>
                <p className="text-xs text-secondary">
                  點選任一科目，我們會直接為你推薦最容易讀懂的起步單元：
                </p>
              </div>
              <button 
                onClick={() => setStep(1)} 
                className="btn-outline text-xs" 
                style={{ padding: '4px 10px' }}
              >
                上一步
              </button>
            </div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: '10px'
              }}
            >
              {coursesData.subjects.map(s => (
                <button
                  key={s.id}
                  onClick={() => handleSubjectSelect(s.id)}
                  className="card card-hoverable p-3 flex items-center gap-2.5 text-left"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-light)',
                    borderLeft: `4px solid ${s.color}`,
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontSize: '1.3rem' }}>{s.name.split(' ')[0]}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                      {s.name.split(' ')[1]}
                    </div>
                    <div className="text-xs text-tertiary">
                      {(coursesData.units[s.id] || []).length} 個圖解單元
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuidedStartWizard;
