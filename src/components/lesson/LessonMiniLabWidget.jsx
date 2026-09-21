import { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Sparkles, 
  RotateCcw, 
  Play, 
  Pause, 
  Sliders, 
  Award, 
  Zap, 
  ExternalLink,
  Volume2,
  CheckCircle2,
  HelpCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { playSound, triggerHaptic, dispatchDynamicIsland } from '../../utils/soundEffects';
import { speechEngine } from '../../utils/speechHelper';
import { useGamification } from '../../context/GamificationContext';
import confetti from 'canvas-confetti';

/**
 * Embedded Mini-Lab Interactive STEM & Language Simulator for Lesson Pages
 */
const LessonMiniLabWidget = ({ unitId, subjectId }) => {
  const { addCoins, addXp } = useGamification();
  const [hasRewarded, setHasRewarded] = useState(false);

  // 1. Math U1 Short Division (GCD / LCM)
  const [numA, setNumA] = useState(24);
  const [numB, setNumB] = useState(36);

  // 2. English Tense Machine (eng-u1, eng-u2)
  const [engTense, setEngTense] = useState('present');

  // Sound Synth Lab (sci-u9)
  const [oscFreq, setOscFreq] = useState(440);
  const [isOscPlaying, setIsOscPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const oscNodeRef = useRef(null);
  const gainNodeRef = useRef(null);

  // Circle Area Slicing Lab (math-u5, math-u6)
  const [circleSlices, setCircleSlices] = useState(16);
  const [circleRadius, setCircleRadius] = useState(5);

  // Lever Seesaw Lab (sci-u6)
  const [leftWeight, setLeftWeight] = useState(6);
  const [leftDistance, setLeftDistance] = useState(2);
  const [rightWeight, setRightWeight] = useState(4);
  const [rightDistance, setRightDistance] = useState(3);

  // Acid Base Lab (sci-u2)
  const [phVal, setPhVal] = useState(7.0);

  // Electromagnet Lab (sci-u3)
  const [coils, setCoils] = useState(30);
  const [batteries, setBatteries] = useState(2);

  // Weather Fronts Lab (sci-u1)
  const [weatherType, setWeatherType] = useState('cold_front');

  // Speed Chase Lab (math-u7)
  const [chaseSpeedA, setChaseSpeedA] = useState(8);
  const [chaseSpeedB, setChaseSpeedB] = useState(5);
  const [chaseDistance, setChaseDistance] = useState(30);
  const [isChasing, setIsChasing] = useState(false);
  const [chaseProgress, setChaseProgress] = useState(0);

  // Ratio Lab (math-u4)
  const [ratioA, setRatioA] = useState(12);
  const [ratioB, setRatioB] = useState(18);

  // Equation Balance Lab (math-u11)
  const [eqStep, setEqStep] = useState(0);

  // Mini Microscope Lab (sci-u10)
  const [miniMicroMag, setMiniMicroMag] = useState('low');
  const [miniMicroSlide, setMiniMicroSlide] = useState('p');

  // Six Scripts Lab (man-u1)
  const [scriptTab, setScriptTab] = useState('xiangxing');

  // Cleanup Web Audio
  useEffect(() => {
    return () => {
      if (oscNodeRef.current) {
        try {
          oscNodeRef.current.stop();
          oscNodeRef.current.disconnect();
        } catch (_e) {}
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try {
          audioCtxRef.current.close();
        } catch (_e) {}
      }
    };
  }, []);

  // Reward helper
  const triggerLabReward = useCallback((title, reason) => {
    if (!hasRewarded) {
      setHasRewarded(true);
      playSound('coin');
      triggerHaptic('medium');
      addCoins(15);
      addXp(25, reason || 'mini_lab_explore');
      dispatchDynamicIsland({
        title: `🔬 ${title}`,
        subtitle: '完成動態探究・獎勵 +15 🪙 +25 XP',
        icon: '🎉'
      });
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.8 } });
    }
  }, [hasRewarded, addCoins, addXp]);

  // Speed Chase runner loop
  useEffect(() => {
    let timer;
    if (isChasing) {
      timer = setInterval(() => {
        setChaseProgress(prev => {
          if (prev >= 100) {
            setIsChasing(false);
            triggerLabReward('跑道追趕模擬成功！', 'speed_chase');
            return 100;
          }
          return prev + 3;
        });
      }, 50);
    }
    return () => clearInterval(timer);
  }, [isChasing, triggerLabReward]);

  // Lever balance detection
  const leftTorque = leftWeight * leftDistance;
  const rightTorque = rightWeight * rightDistance;
  const isBalanced = leftTorque === rightTorque;
  const tiltAngle = Math.max(-15, Math.min(15, (rightTorque - leftTorque) * 2));

  useEffect(() => {
    if (isBalanced && unitId === 'sci-u6') {
      triggerLabReward('槓桿力矩達成完美平衡！', 'lever_balance');
    }
  }, [isBalanced, unitId, triggerLabReward]);

  // Web Audio Synth handler for sci-u9
  const toggleSoundOsc = (freq) => {
    const targetFreq = freq || oscFreq;
    if (isOscPlaying) {
      if (oscNodeRef.current) {
        try {
          oscNodeRef.current.stop();
          oscNodeRef.current.disconnect();
        } catch (_e) {}
      }
      setIsOscPlaying(false);
    } else {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!audioCtxRef.current || audioCtxRef.current.state !== 'closed') {
          audioCtxRef.current = new AudioCtx();
        }
        if (audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume();
        }
        const ctx = audioCtxRef.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(targetFreq, ctx.currentTime);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscNodeRef.current = osc;
        gainNodeRef.current = gain;
        setIsOscPlaying(true);
        triggerLabReward('成功調製聲音頻率！', 'sound_synth');

        // Auto stop after 2.5 seconds to protect hearing
        setTimeout(() => {
          try {
            if (osc) {
              osc.stop();
              osc.disconnect();
            }
            setIsOscPlaying(false);
          } catch (_e) {}
        }, 2500);
      } catch (err) {
        console.warn('AudioContext error', err);
      }
    }
  };

  // Short division calculation for math-u1
  const computeShortDivision = (a, b) => {
    let curA = Math.max(1, Math.floor(a));
    let curB = Math.max(1, Math.floor(b));
    const steps = [];
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];

    let pIdx = 0;
    while (pIdx < primes.length && primes[pIdx] <= Math.min(curA, curB)) {
      const p = primes[pIdx];
      if (curA % p === 0 && curB % p === 0) {
        curA = curA / p;
        curB = curB / p;
        steps.push({ divisor: p, nextA: curA, nextB: curB });
      } else {
        pIdx++;
      }
    }

    const gcd = steps.reduce((acc, s) => acc * s.divisor, 1);
    const lcm = gcd * curA * curB;

    return { steps, finalA: curA, finalB: curB, gcd, lcm };
  };

  // Determine which mini-lab applies to this unit
  const labType = (() => {
    if (unitId === 'math-u1') return 'short-division';
    if (unitId === 'eng-u1' || unitId === 'eng-u2') return 'english-tense';
    if (unitId === 'math-u4') return 'ratio-scale';
    if (unitId === 'math-u5' || unitId === 'math-u6') return 'circle-area';
    if (unitId === 'math-u7') return 'speed-chase';
    if (unitId === 'math-u11') return 'equation-balance';
    if (unitId === 'sci-u1') return 'weather';
    if (unitId === 'sci-u2') return 'acid-base';
    if (unitId === 'sci-u3') return 'electromagnet';
    if (unitId === 'sci-u6') return 'lever';
    if (unitId === 'sci-u9') return 'sound-osc';
    if (unitId === 'sci-u10') return 'microscope-mini';
    if (unitId === 'man-u1') return 'six-scripts';
    return null;
  })();

  if (!labType) return null;

  return (
    <div className="mini-lab-card my-6 animate-fade-in">
      <div className="mini-lab-header">
        <div className="flex items-center gap-2">
          <span className="mini-lab-tag">
            <Sparkles size={13} />
            <span>PhET 動態探究互動小工具</span>
          </span>
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
            {labType === 'short-division' && '🧮 互動短除法階梯與質因數分解器'}
            {labType === 'english-tense' && '⏳ 英語時態時光機與句型轉換器'}
            {labType === 'ratio-scale' && '⚖️ 比、比值與最簡整數比調配器'}
            {labType === 'circle-area' && '📐 圓面積極限切片動態展示'}
            {labType === 'speed-chase' && '🏃 速率相遇與追趕跑道模擬'}
            {labType === 'equation-balance' && '⚖️ 等量公理方程式平衡天平'}
            {labType === 'lever' && '⚖️ 槓桿力矩平衡實驗室'}
            {labType === 'acid-base' && '🧪 水溶液酸鹼與試紙變色'}
            {labType === 'electromagnet' && '⚡ 電磁鐵線圈與磁力測試'}
            {labType === 'weather' && '🌍 大氣鋒面與氣壓動態圖解'}
            {labType === 'sound-osc' && '🔊 聲音頻率與音調震盪器'}
            {labType === 'microscope-mini' && '🔬 複式顯微鏡迷你倒像與高低倍鏡視野'}
            {labType === 'six-scripts' && '✍️ 漢字六書造字法結構透視鏡'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {hasRewarded && (
            <span className="badge badge-success flex items-center gap-1 text-[11px]">
              <CheckCircle2 size={12} />
              <span>已領取探索獎勵</span>
            </span>
          )}
          <span className="text-[11px] text-tertiary hidden sm:inline">動手調調看，體驗做中學</span>
        </div>
      </div>

      <div className="mini-lab-body">
        {/* NEW 1. Math U1 Short Division Ladder */}
        {labType === 'short-division' && (() => {
          const result = computeShortDivision(numA, numB);
          return (
            <div className="mini-lab-content space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-3 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-secondary">輸入任意兩數：</span>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="number"
                      min="2"
                      max="180"
                      value={numA}
                      onChange={(e) => setNumA(Math.max(2, parseInt(e.target.value) || 2))}
                      className="input-field w-16 text-center text-xs py-1 font-bold font-mono"
                    />
                    <span className="text-secondary font-bold">與</span>
                    <input
                      type="number"
                      min="2"
                      max="180"
                      value={numB}
                      onChange={(e) => setNumB(Math.max(2, parseInt(e.target.value) || 2))}
                      className="input-field w-16 text-center text-xs py-1 font-bold font-mono"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {[
                    { a: 24, b: 36, label: '24 與 36' },
                    { a: 48, b: 64, label: '48 與 64' },
                    { a: 15, b: 28, label: '15 與 28 (互質)' }
                  ].map(preset => (
                    <button
                      key={preset.label}
                      onClick={() => {
                        setNumA(preset.a);
                        setNumB(preset.b);
                        playSound('click');
                        triggerLabReward('短除法分解探索完成！', 'gcd_lcm');
                      }}
                      className="btn-outline text-[11px] py-0.5 px-2 rounded-md"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Visual Ladder Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-border-strong font-mono text-sm leading-loose">
                  <div className="text-xs font-bold text-slate-500 mb-2 font-sans">
                    🪜 短除法階梯演算過程：
                  </div>
                  {result.steps.length === 0 ? (
                    <div className="text-secondary text-xs py-3 text-center">
                      兩數已互質（無大於 1 的公質因數）！最大公因數 GCD = 1
                    </div>
                  ) : (
                    <div>
                      {result.steps.map((s, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-rose-500 font-extrabold w-6 text-right">{s.divisor}</span>
                          <span className="border-l-2 border-b-2 border-slate-700 dark:border-slate-300 pl-2 pr-4">
                            {idx === 0 ? `${numA},  ${numB}` : `${result.steps[idx - 1].nextA},  ${result.steps[idx - 1].nextB}`}
                          </span>
                        </div>
                      ))}
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="w-6"></span>
                        <span className="pl-2 text-emerald-600 dark:text-emerald-400 font-extrabold">
                          {result.finalA},  {result.finalB} <span className="text-[11px] font-normal text-secondary">(互質完成)</span>
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30">
                    <div className="text-xs font-bold text-rose-600 dark:text-rose-400 mb-1">
                      直列相乘 ➔ 最大公因數 (GCD)：
                    </div>
                    <div className="text-sm font-mono font-bold text-slate-800 dark:text-slate-100">
                      GCD({numA}, {numB}) = {result.steps.length > 0 ? result.steps.map(s => s.divisor).join(' × ') : '1'} = <span className="text-rose-600 text-base">{result.gcd}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
                      L 型通乘 ➔ 最小公倍數 (LCM)：
                    </div>
                    <div className="text-sm font-mono font-bold text-slate-800 dark:text-slate-100">
                      LCM({numA}, {numB}) = {result.steps.length > 0 ? `${result.steps.map(s => s.divisor).join(' × ')} × ${result.finalA} × ${result.finalB}` : `${numA} × ${numB}`} = <span className="text-blue-600 text-base">{result.lcm}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* NEW 2. English Tense Time Machine */}
        {labType === 'english-tense' && (() => {
          const tenses = [
            {
              id: 'past',
              label: '⏪ 過去式 (Past)',
              sentence: 'Yesterday, I ate delicious pancakes at 7:30 AM.',
              highlight: 'ate',
              rule: '動詞不規則變化：eat ➔ ate。表示過去某特定時刻已完成的動作。'
            },
            {
              id: 'present',
              label: '⏰ 現在簡單式 (Present)',
              sentence: 'Every morning, I eat breakfast at 7:30 AM.',
              highlight: 'eat',
              rule: '動詞原形：eat。表示日常生活規律習慣或恆常事實。'
            },
            {
              id: 'continuous',
              label: '⚡ 現在進行式 (Continuous)',
              sentence: 'Look! I am eating breakfast right now!',
              highlight: 'am eating',
              rule: 'Be動詞 + V-ing：am eating。表示「此時此刻」正在發生的動作。'
            },
            {
              id: 'future',
              label: '🚀 未來式 (Future)',
              sentence: 'Tomorrow, I will eat breakfast with Dad at 7:30 AM.',
              highlight: 'will eat',
              rule: 'Will + 原形動詞：will eat。表示預計在未來將要發生的計畫或預測。'
            }
          ];

          const currentTenseObj = tenses.find(t => t.id === engTense) || tenses[1];

          return (
            <div className="mini-lab-content space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                {tenses.map(t => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setEngTense(t.id);
                      playSound('click');
                      triggerLabReward('時態時光機探索成功！', 'tense_machine');
                    }}
                    className={`btn-pill text-xs px-3 py-1.5 font-bold ${engTense === t.id ? 'active' : ''}`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-base font-bold text-slate-800 dark:text-slate-100 font-serif">
                    "{currentTenseObj.sentence}"
                  </div>
                  <button
                    onClick={() => speechEngine.speak(currentTenseObj.sentence, { lang: 'en-US' })}
                    className="btn-primary text-xs py-1 px-3 rounded-full flex items-center gap-1 flex-shrink-0"
                  >
                    <Volume2 size={13} />
                    <span>聽發音</span>
                  </button>
                </div>

                <div className="text-xs text-secondary border-t border-light pt-2">
                  💡 <strong>文法解析</strong>：{currentTenseObj.rule}
                </div>
              </div>
            </div>
          );
        })()}

        {/* 3. Circle Area Slicing */}
        {labType === 'circle-area' && (
          <div className="mini-lab-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
                <div className="flex items-center justify-center gap-3 my-2">
                  <div className="text-center">
                    <div className="relative w-28 h-28 rounded-full border-2 border-dashed border-blue-400 flex items-center justify-center bg-blue-50/50 dark:bg-blue-950/30">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                        r = {circleRadius} cm
                      </span>
                    </div>
                    <div className="text-[11px] text-tertiary mt-1">原始圓形</div>
                  </div>
                  <div className="text-xl text-blue-500 font-bold">➔</div>
                  <div className="text-center">
                    <div 
                      className="h-20 bg-blue-500/20 border-2 border-blue-500 rounded-md flex items-center justify-center transition-all duration-300"
                      style={{ 
                        width: `${Math.min(130, 70 + circleSlices)}px`,
                        backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(59, 130, 246, 0.4) 6px, rgba(59, 130, 246, 0.4) 8px)`
                      }}
                    >
                      <span className="text-[11px] font-bold text-blue-700 dark:text-blue-300">
                        長方形近似
                      </span>
                    </div>
                    <div className="text-[11px] text-tertiary mt-1">拼成近似長方形</div>
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 text-center mt-1">
                  當切片數越多，上下拼合越接近長方形（長 = 半圓周長，寬 = 半徑）
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>切片細分數 (越細越平整)：<strong>{circleSlices} 份</strong></span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="64"
                    step="4"
                    value={circleSlices}
                    onChange={(e) => {
                      setCircleSlices(parseInt(e.target.value));
                      triggerLabReward('圓面積切片極限探究完成！', 'circle_slicing');
                    }}
                    className="w-full accent-blue-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>半徑 (Radius)：<strong>{circleRadius} cm</strong></span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={circleRadius}
                    onChange={(e) => setCircleRadius(parseInt(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-lg text-blue-900 dark:text-blue-200">
                  <div>📐 圓周長 = 直徑 × 3.14 = {circleRadius * 2} × 3.14 = <strong>{(circleRadius * 2 * 3.14).toFixed(2)} cm</strong></div>
                  <div className="mt-1">📐 圓面積 = 半徑 × 半徑 × 3.14 = {circleRadius} × {circleRadius} × 3.14 = <strong>{(circleRadius * circleRadius * 3.14).toFixed(2)} cm²</strong></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. Lever Balance Lab (sci-u6) */}
        {labType === 'lever' && (
          <div className="mini-lab-content">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
              <div className="relative h-28 flex items-center justify-center">
                <div className="absolute w-8 h-8 border-b-4 border-l-4 border-r-4 border-slate-600 transform rotate-45 bottom-4"></div>
                <div 
                  className="w-72 h-3 bg-amber-600 rounded relative transition-transform duration-300"
                  style={{ transform: `rotate(${tiltAngle}deg)` }}
                >
                  <div className="absolute -top-6 left-4 flex flex-col items-center">
                    <span className="text-xs font-bold bg-blue-500 text-white px-1.5 py-0.5 rounded shadow">
                      {leftWeight}kg
                    </span>
                    <span className="text-[10px] text-tertiary">距支點 {leftDistance}m</span>
                  </div>
                  <div className="absolute -top-6 right-4 flex flex-col items-center">
                    <span className="text-xs font-bold bg-rose-500 text-white px-1.5 py-0.5 rounded shadow">
                      {rightWeight}kg
                    </span>
                    <span className="text-[10px] text-tertiary">距支點 {rightDistance}m</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t border-light text-xs">
                <div className="space-y-1">
                  <div className="font-bold text-blue-600">左側 (施力側)：力矩 = {leftWeight} × {leftDistance} = {leftTorque}</div>
                  <div className="flex gap-2 items-center">
                    <span className="w-8">重量:</span>
                    <input 
                      type="range" min="1" max="10" value={leftWeight} 
                      onChange={(e) => setLeftWeight(parseInt(e.target.value))} 
                      className="w-20 accent-blue-600"
                    />
                    <span>{leftWeight}kg</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="w-8">臂長:</span>
                    <input 
                      type="range" min="1" max="5" value={leftDistance} 
                      onChange={(e) => setLeftDistance(parseInt(e.target.value))} 
                      className="w-20 accent-blue-600"
                    />
                    <span>{leftDistance}m</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="font-bold text-rose-600">右側 (抗力側)：力矩 = {rightWeight} × {rightDistance} = {rightTorque}</div>
                  <div className="flex gap-2 items-center">
                    <span className="w-8">重量:</span>
                    <input 
                      type="range" min="1" max="10" value={rightWeight} 
                      onChange={(e) => setRightWeight(parseInt(e.target.value))} 
                      className="w-20 accent-rose-600"
                    />
                    <span>{rightWeight}kg</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="w-8">臂長:</span>
                    <input 
                      type="range" min="1" max="5" value={rightDistance} 
                      onChange={(e) => setRightDistance(parseInt(e.target.value))} 
                      className="w-20 accent-rose-600"
                    />
                    <span>{rightDistance}m</span>
                  </div>
                </div>
              </div>

              <div className={`mt-3 p-2 rounded text-center text-xs font-bold ${isBalanced ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-slate-200 dark:bg-slate-700 text-secondary'}`}>
                {isBalanced ? '🎉 左右力矩相等 (左 = 右)！槓桿達成完美水平平衡！' : '⚖️ 兩邊力矩不均勻，較重力矩端向下傾斜。'}
              </div>
            </div>
          </div>
        )}

        {/* 5. Acid-Base Indicator Lab (sci-u2) */}
        {labType === 'acid-base' && (
          <div className="mini-lab-content">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-[200px]">
                  <div className="flex justify-between text-xs mb-1">
                    <span>水溶液 pH 值調整：</span>
                    <strong className="text-sm font-mono">{phVal.toFixed(1)}</strong>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="14.0"
                    step="0.5"
                    value={phVal}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      setPhVal(val);
                      triggerLabReward('酸鹼試紙變色探究成功！', 'acid_base');
                    }}
                    className="w-full accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-tertiary mt-1">
                    <span>酸性 (pH &lt; 7)</span>
                    <span>中性 (pH = 7)</span>
                    <span>鹼性 (pH &gt; 7)</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="text-center">
                    <div 
                      className="w-12 h-16 rounded border-2 transition-colors duration-300 flex items-center justify-center font-bold text-xs"
                      style={{
                        backgroundColor: phVal < 7 ? '#ef4444' : '#3b82f6',
                        color: 'white',
                        borderColor: '#94a3b8'
                      }}
                    >
                      石蕊
                    </div>
                    <span className="text-[10px] text-tertiary mt-1 block">
                      {phVal < 7 ? '變紅色 (酸)' : phVal > 7 ? '變藍色 (鹼)' : '不變色 (中)'}
                    </span>
                  </div>

                  <div className="text-center">
                    <div 
                      className="w-12 h-16 rounded border-2 transition-colors duration-300 flex items-center justify-center font-bold text-xs"
                      style={{
                        backgroundColor: phVal > 8.2 ? '#ec4899' : '#f8fafc',
                        color: phVal > 8.2 ? 'white' : '#64748b',
                        borderColor: '#94a3b8'
                      }}
                    >
                      酚酞
                    </div>
                    <span className="text-[10px] text-tertiary mt-1 block">
                      {phVal > 8.2 ? '變粉紅 (鹼)' : '維持無色'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-xs text-secondary">
                💡 <strong>記憶口訣</strong>：「酸變紅、鹼變藍，中性純水不變臉；酚酞遇到鹼性水，羞紅臉蛋粉嫩嫩！」
              </div>
            </div>
          </div>
        )}

        {/* 6. Speed Chase Lab (math-u7) */}
        {labType === 'speed-chase' && (
          <div className="mini-lab-content">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl space-y-3">
              <div className="relative h-14 bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden flex items-center px-4">
                <div 
                  className="absolute text-xl transition-all duration-75"
                  style={{ left: `${Math.min(90, chaseProgress * (chaseSpeedA / 8))}%` }}
                >
                  🏃 (小明 {chaseSpeedA}m/s)
                </div>
                <div 
                  className="absolute text-xl transition-all duration-75 opacity-70"
                  style={{ left: `${Math.min(92, (chaseDistance + chaseProgress * (chaseSpeedB / 8) * 0.6))}%` }}
                >
                  🚶 (小華 {chaseSpeedB}m/s)
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-[11px] pt-2 border-t border-light">
                <div>
                  <span className="font-bold text-blue-600">小明 (追趕): {chaseSpeedA} m/s</span>
                  <input 
                    type="range" min="6" max="12" value={chaseSpeedA} 
                    onChange={(e) => setChaseSpeedA(Number(e.target.value))} 
                    className="w-full accent-blue-600 mt-1" 
                  />
                </div>
                <div>
                  <span className="font-bold text-amber-600">小華 (領先): {chaseSpeedB} m/s</span>
                  <input 
                    type="range" min="2" max="5" value={chaseSpeedB} 
                    onChange={(e) => setChaseSpeedB(Number(e.target.value))} 
                    className="w-full accent-amber-600 mt-1" 
                  />
                </div>
                <div>
                  <span className="font-bold text-emerald-600">初始領先: {chaseDistance} m</span>
                  <input 
                    type="range" min="10" max="50" step="5" value={chaseDistance} 
                    onChange={(e) => setChaseDistance(Number(e.target.value))} 
                    className="w-full accent-emerald-600 mt-1" 
                  />
                </div>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-2 text-xs pt-1">
                <span className="font-mono">
                  追趕相遇時間 = 領先距離 ÷ 速率差 = {chaseDistance} ÷ ({chaseSpeedA} - {chaseSpeedB}) = <strong>{(chaseDistance / Math.max(1, chaseSpeedA - chaseSpeedB)).toFixed(1)} 秒</strong>
                </span>

                <button 
                  onClick={() => {
                    setIsChasing(true);
                    setChaseProgress(0);
                    playSound('click');
                  }}
                  disabled={isChasing || chaseSpeedA <= chaseSpeedB}
                  className="btn-primary py-1 px-3 text-xs flex items-center gap-1"
                >
                  <Play size={12} />
                  <span>開始動態追趕</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 7. Sound Frequency Synth (sci-u9) */}
        {labType === 'sound-osc' && (
          <div className="mini-lab-content">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                {[
                  { label: '低音 220Hz (A3)', freq: 220 },
                  { label: '標準 440Hz (A4)', freq: 440 },
                  { label: '高音 880Hz (A5)', freq: 880 },
                  { label: '極高音 1760Hz (A6)', freq: 1760 }
                ].map((item) => (
                  <button
                    key={item.freq}
                    onClick={() => {
                      setOscFreq(item.freq);
                      toggleSoundOsc(item.freq);
                    }}
                    className={`btn-outline text-xs py-1 px-2.5 rounded-lg ${oscFreq === item.freq && isOscPlaying ? 'bg-indigo-600 text-white font-bold' : ''}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => toggleSoundOsc()}
                  className="btn-primary py-1.5 px-4 text-xs font-bold rounded-lg flex items-center gap-1.5"
                >
                  <Volume2 size={14} />
                  <span>{isOscPlaying ? '⏹️ 停止發聲' : `🔊 聆聽當前頻率 (${oscFreq} Hz)`}</span>
                </button>
              </div>

              <div className="text-xs text-secondary mt-2">
                💡 <strong>科學定則</strong>：頻率越高（Hz越大），振動越快，聽起來音調（Pitch）就越高！
              </div>
            </div>
          </div>
        )}

        {/* 8. Electromagnet Lab (sci-u3) */}
        {labType === 'electromagnet' && (
          <div className="mini-lab-content">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span>線圈匝數：<strong>{coils} 圈</strong></span>
                  <input
                    type="range" min="10" max="60" step="10" value={coils}
                    onChange={(e) => {
                      setCoils(parseInt(e.target.value));
                      triggerLabReward('電磁鐵變因實驗完成！', 'electromagnet');
                    }}
                    className="w-32 block accent-amber-600 mt-1"
                  />
                </div>
                <div>
                  <span>串聯電池數量：<strong>{batteries} 顆</strong></span>
                  <input
                    type="range" min="1" max="4" value={batteries}
                    onChange={(e) => {
                      setBatteries(parseInt(e.target.value));
                      triggerLabReward('電磁鐵變因實驗完成！', 'electromagnet');
                    }}
                    className="w-32 block accent-amber-600 mt-1"
                  />
                </div>
                <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-lg text-amber-900 dark:text-amber-200 font-bold">
                  🧲 磁力估計：可吸引 <strong>{Math.floor((coils / 10) * batteries * 3.5)}</strong> 支迴紋針！
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 9. Weather Fronts (sci-u1) */}
        {labType === 'weather' && (
          <div className="mini-lab-content">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs space-y-3">
              <div className="flex gap-2">
                {[
                  { id: 'cold_front', label: '❄️ 冷鋒面 (Cold Front)' },
                  { id: 'warm_front', label: '☀️ 暖鋒面 (Warm Front)' },
                  { id: 'stationary_front', label: '🌧️ 滯留鋒 (梅雨季)' }
                ].map(f => (
                  <button
                    key={f.id}
                    onClick={() => {
                      setWeatherType(f.id);
                      playSound('click');
                      triggerLabReward('大氣鋒面探索完成！', 'weather');
                    }}
                    className={`btn-pill text-xs px-3 py-1 ${weatherType === f.id ? 'active' : ''}`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-light">
                {weatherType === 'cold_front' && (
                  <p>❄️ <strong>冷鋒特徵</strong>：冷空氣推向暖空氣，氣溫劇降，易伴隨強烈陣雨或雷雨，鋒面過後轉乾冷。</p>
                )}
                {weatherType === 'warm_front' && (
                  <p>☀️ <strong>暖鋒特徵</strong>：暖空氣推向冷空氣，雲層厚且廣，通常帶來持續性連續毛毛雨或陰天。</p>
                )}
                {weatherType === 'stationary_front' && (
                  <p>🌧️ <strong>滯留鋒特徵</strong>：冷暖勢力相當徘徊不前，五、六月常造成臺灣長時間連續降雨（梅雨季）。</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 10. Ratio Scale (math-u4) */}
        {labType === 'ratio-scale' && (() => {
          const calcGcd = (x, y) => {
            let a = Math.abs(x), b = Math.abs(y);
            while (b) { const t = b; b = a % b; a = t; }
            return a || 1;
          };
          const gcd = calcGcd(ratioA, ratioB);
          const simpA = ratioA / gcd;
          const simpB = ratioB / gcd;
          const ratioVal = (ratioA / ratioB).toFixed(2);

          return (
            <div className="mini-lab-content space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span>🔴 前項 (量 A / 紅茶)：</span>
                    <span className="font-mono text-rose-600 font-bold text-sm">{ratioA}</span>
                  </div>
                  <input
                    type="range" min="1" max="40" value={ratioA}
                    onChange={(e) => {
                      setRatioA(parseInt(e.target.value));
                      triggerLabReward('比例比值探索完成！', 'ratio');
                    }}
                    className="w-full accent-rose-600"
                  />
                  <div className="flex justify-between text-xs font-bold">
                    <span>🔵 後項 (量 B / 鮮奶)：</span>
                    <span className="font-mono text-blue-600 font-bold text-sm">{ratioB}</span>
                  </div>
                  <input
                    type="range" min="1" max="40" value={ratioB}
                    onChange={(e) => {
                      setRatioB(parseInt(e.target.value));
                      triggerLabReward('比例比值探索完成！', 'ratio');
                    }}
                    className="w-full accent-blue-600"
                  />
                </div>

                <div className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-light flex flex-col justify-center space-y-2 text-xs">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="text-secondary">原始比：</span>
                    <span className="font-mono font-bold text-sm text-primary">{ratioA} : {ratioB}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="text-emerald-600 font-bold">⭐ 最簡整數比 (同除 GCD {gcd})：</span>
                    <span className="font-mono font-black text-base text-emerald-600">{simpA} : {simpB}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary">比值 (前項 ÷ 後項)：</span>
                    <span className="font-mono font-bold text-sm text-amber-600">
                      {simpA}/{simpB} ≈ {ratioVal}
                    </span>
                  </div>
                </div>
              </div>

              {/* Visual Proportion Bar */}
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs space-y-1.5">
                <span className="text-secondary font-bold">🍹 調配視覺化比例條：</span>
                <div className="h-6 w-full rounded-full overflow-hidden flex border border-slate-300 dark:border-slate-700 shadow-inner">
                  <div 
                    style={{ width: `${(ratioA / (ratioA + ratioB)) * 100}%` }} 
                    className="bg-rose-500 flex items-center justify-center text-[10px] text-white font-bold transition-all"
                  >
                    紅茶 {Math.round((ratioA / (ratioA + ratioB)) * 100)}%
                  </div>
                  <div 
                    style={{ width: `${(ratioB / (ratioA + ratioB)) * 100}%` }} 
                    className="bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold transition-all"
                  >
                    鮮奶 {Math.round((ratioB / (ratioA + ratioB)) * 100)}%
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* 11. Equation Balance Scale (math-u11) */}
        {labType === 'equation-balance' && (
          <div className="mini-lab-content space-y-3">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-bold text-indigo-600 dark:text-indigo-400 text-sm">
                  ⚖️ 天平狀態：{eqStep === 0 ? '原始等式平衡' : eqStep === 1 ? '同減 6 後依然平衡' : '解得未知數 x！'}
                </span>
                <button
                  onClick={() => { setEqStep(0); playSound('click'); }}
                  className="btn-outline text-xs px-2.5 py-1 rounded-lg flex items-center gap-1"
                >
                  <RotateCcw size={12} /> 重設方程式
                </button>
              </div>

              {/* Balance Beam Mockup */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-light flex justify-around items-center text-center">
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 w-36">
                  <div className="text-xs text-secondary mb-1">天平左端</div>
                  <div className="font-mono text-lg font-black text-indigo-600 dark:text-indigo-400">
                    {eqStep === 0 && '2x + 6'}
                    {eqStep === 1 && '2x'}
                    {eqStep === 2 && 'x'}
                  </div>
                </div>

                <div className="text-xl font-black text-slate-400">＝</div>

                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 w-36">
                  <div className="text-xs text-secondary mb-1">天平右端</div>
                  <div className="font-mono text-lg font-black text-amber-600 dark:text-amber-400">
                    {eqStep === 0 && '14'}
                    {eqStep === 1 && '8'}
                    {eqStep === 2 && '4'}
                  </div>
                </div>
              </div>

              {/* Step Action Buttons */}
              <div className="flex items-center justify-center gap-3">
                {eqStep === 0 && (
                  <button
                    onClick={() => {
                      setEqStep(1);
                      playSound('click');
                    }}
                    className="btn-primary text-xs px-4 py-2 rounded-xl font-bold flex items-center gap-1"
                  >
                    <span>第 1 步：等號兩邊同時減去 6 (-6)</span>
                    <ArrowRight size={13} />
                  </button>
                )}
                {eqStep === 1 && (
                  <button
                    onClick={() => {
                      setEqStep(2);
                      playSound('levelup');
                      triggerLabReward('等量公理解題成功！', 'equation_balance');
                    }}
                    className="btn-primary text-xs px-4 py-2 rounded-xl font-bold flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700"
                  >
                    <span>第 2 步：等號兩邊同時除以 2 (÷2)</span>
                    <CheckCircle2 size={13} />
                  </button>
                )}
                {eqStep === 2 && (
                  <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 rounded-xl text-emerald-800 dark:text-emerald-200 font-bold text-center w-full">
                    🎉 解題成功！x = 4（代回驗算：2×4 + 6 = 14 完全正確！）
                  </div>
                )}
              </div>

              <div className="p-2.5 bg-rose-50 dark:bg-rose-950/30 rounded-lg border border-rose-200 text-rose-800 dark:text-rose-300 text-[11px]">
                ⚠️ <strong>等量公理鐵律</strong>：等號兩邊可同加、同減、同乘、同除，但「除數嚴禁為 0」！除以 0 在數學中沒有意義！
              </div>
            </div>
          </div>
        )}

        {/* 12. Mini Microscope Lab (sci-u10) */}
        {labType === 'microscope-mini' && (
          <div className="mini-lab-content space-y-3">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs space-y-3">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <div className="flex gap-1.5">
                  <button
                    onClick={() => { setMiniMicroSlide('p'); playSound('click'); }}
                    className={`btn-pill text-xs px-3 py-1 ${miniMicroSlide === 'p' ? 'active' : ''}`}
                  >
                    字母「p」玻片
                  </button>
                  <button
                    onClick={() => { setMiniMicroSlide('e'); playSound('click'); }}
                    className={`btn-pill text-xs px-3 py-1 ${miniMicroSlide === 'e' ? 'active' : ''}`}
                  >
                    字母「e」玻片
                  </button>
                </div>

                <div className="flex gap-1.5">
                  <button
                    onClick={() => { setMiniMicroMag('low'); playSound('click'); }}
                    className={`btn-pill text-xs px-3 py-1 ${miniMicroMag === 'low' ? 'active' : ''}`}
                  >
                    低倍鏡 (100X)
                  </button>
                  <button
                    onClick={() => {
                      setMiniMicroMag('high');
                      playSound('click');
                      triggerLabReward('顯微鏡高低倍探究完成！', 'microscope');
                    }}
                    className={`btn-pill text-xs px-3 py-1 ${miniMicroMag === 'high' ? 'active' : ''}`}
                  >
                    高倍鏡 (400X)
                  </button>
                </div>
              </div>

              {/* Eyepiece Visual with 180deg Rotation */}
              <div className="flex items-center justify-center py-2">
                <div 
                  className="w-40 h-40 rounded-full border-4 border-slate-700 bg-slate-950 flex items-center justify-center relative overflow-hidden shadow-inner"
                  style={{
                    filter: miniMicroMag === 'high' ? 'brightness(70%)' : 'brightness(105%)'
                  }}
                >
                  <div 
                    className="transition-transform duration-300 font-serif font-black"
                    style={{
                      transform: `scale(${miniMicroMag === 'high' ? 2.5 : 1}) rotate(180deg)`
                    }}
                  >
                    <span className="text-5xl text-emerald-400">
                      {miniMicroSlide}
                    </span>
                  </div>
                  <div className="pointer-events-none absolute w-full h-[1px] bg-red-500/30" />
                  <div className="pointer-events-none absolute h-full w-[1px] bg-red-500/30" />
                </div>
              </div>

              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-light leading-relaxed">
                <p>
                  🔬 <strong>倒立像驗證</strong>：載玻片上原本印的是「{miniMicroSlide}」，目鏡中經過光學倒像 180° 後呈現「<strong>{miniMicroSlide === 'p' ? 'd' : 'ə'}</strong>」！
                </p>
                <p className="text-secondary text-[11px] mt-1">
                  換上高倍鏡時：視野變【暗】、範圍變【小】、影像變【大】！高倍鏡下【嚴禁轉動粗調節輪】！
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 13. Six Scripts Chinese Characters Lab (man-u1) */}
        {labType === 'six-scripts' && (
          <div className="mini-lab-content space-y-3">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs space-y-3">
              <div className="flex gap-1.5 flex-wrap">
                {[
                  { id: 'xiangxing', label: '畫成其物・象形 (獨體)' },
                  { id: 'zhishi', label: '加符指事・指事 (獨體)' },
                  { id: 'huiyi', label: '合意成字・會意 (合體)' },
                  { id: 'xingsheng', label: '半形半聲・形聲 (合體 80%)' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setScriptTab(tab.id);
                      playSound('click');
                      triggerLabReward('六書造字法探索完成！', 'six_scripts');
                    }}
                    className={`btn-pill text-xs px-3 py-1 ${scriptTab === tab.id ? 'active' : ''}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-light space-y-2">
                {scriptTab === 'xiangxing' && (
                  <div>
                    <div className="font-bold text-amber-600 mb-1">☀️ 象形字：依據物體的具體外觀輪廓直接描繪（獨體為「文」）</div>
                    <div className="grid grid-cols-3 gap-2 text-center pt-2">
                      <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200">
                        <div className="text-2xl font-black font-serif text-amber-800 dark:text-amber-200">日</div>
                        <div className="text-[10px] text-secondary mt-1">圓輪中有黑子（太陽）</div>
                      </div>
                      <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200">
                        <div className="text-2xl font-black font-serif text-amber-800 dark:text-amber-200">木</div>
                        <div className="text-[10px] text-secondary mt-1">上枝下根，樹木本體</div>
                      </div>
                      <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200">
                        <div className="text-2xl font-black font-serif text-amber-800 dark:text-amber-200">魚</div>
                        <div className="text-[10px] text-secondary mt-1">魚頭、魚鱗身與魚尾</div>
                      </div>
                    </div>
                  </div>
                )}

                {scriptTab === 'zhishi' && (
                  <div>
                    <div className="font-bold text-blue-600 mb-1">📍 指事字：在象形字上加上抽象指示符號，或純符號表達概念（獨體為「文」）</div>
                    <div className="grid grid-cols-3 gap-2 text-center pt-2">
                      <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200">
                        <div className="text-2xl font-black font-serif text-blue-800 dark:text-blue-200">刃</div>
                        <div className="text-[10px] text-secondary mt-1">刀上加一點（指示刀鋒）</div>
                      </div>
                      <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200">
                        <div className="text-2xl font-black font-serif text-blue-800 dark:text-blue-200">本</div>
                        <div className="text-[10px] text-secondary mt-1">木下加一橫（指示樹根）</div>
                      </div>
                      <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200">
                        <div className="text-2xl font-black font-serif text-blue-800 dark:text-blue-200">上</div>
                        <div className="text-[10px] text-secondary mt-1">短橫在地平線上方</div>
                      </div>
                    </div>
                  </div>
                )}

                {scriptTab === 'huiyi' && (
                  <div>
                    <div className="font-bold text-emerald-600 mb-1">🤝 會意字：合併兩個以上漢字之「意義」產生新義（合體為「字」）</div>
                    <div className="grid grid-cols-3 gap-2 text-center pt-2">
                      <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200">
                        <div className="text-2xl font-black font-serif text-emerald-800 dark:text-emerald-200">休</div>
                        <div className="text-[10px] text-secondary mt-1">人 + 木（人倚樹休息）</div>
                      </div>
                      <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200">
                        <div className="text-2xl font-black font-serif text-emerald-800 dark:text-emerald-200">武</div>
                        <div className="text-[10px] text-secondary mt-1">止 + 戈（平息干戈為武）</div>
                      </div>
                      <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200">
                        <div className="text-2xl font-black font-serif text-emerald-800 dark:text-emerald-200">信</div>
                        <div className="text-[10px] text-secondary mt-1">人 + 言（人言必須守信）</div>
                      </div>
                    </div>
                  </div>
                )}

                {scriptTab === 'xingsheng' && (
                  <div>
                    <div className="font-bold text-purple-600 mb-1">🎵 形聲字：一半表示「事物類別意義 (形符)」，一半表示「發音 (聲符)」（合體為「字」）</div>
                    <div className="grid grid-cols-3 gap-2 text-center pt-2">
                      <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-purple-200">
                        <div className="text-2xl font-black font-serif text-purple-800 dark:text-purple-200">江</div>
                        <div className="text-[10px] text-secondary mt-1">氵(形，表河流) + 工(聲)</div>
                      </div>
                      <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-purple-200">
                        <div className="text-2xl font-black font-serif text-purple-800 dark:text-purple-200">鯉</div>
                        <div className="text-[10px] text-secondary mt-1">魚(形，表魚類) + 里(聲)</div>
                      </div>
                      <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-purple-200">
                        <div className="text-2xl font-black font-serif text-purple-800 dark:text-purple-200">芳</div>
                        <div className="text-[10px] text-secondary mt-1">艹(形，表草本) + 方(聲)</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonMiniLabWidget;
