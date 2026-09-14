import { useState, useEffect, useRef } from 'react';
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
  HelpCircle
} from 'lucide-react';
import { playSound, triggerHaptic, dispatchDynamicIsland } from '../../utils/soundEffects';
import { useGamification } from '../../context/GamificationContext';
import confetti from 'canvas-confetti';

/**
 * Embedded Mini-Lab Interactive STEM Simulator for Lesson Pages
 * Provides immediate hands-on experiment manipulation tailored to the current unit.
 */
const LessonMiniLabWidget = ({ unitId, subjectId }) => {
  const { addCoins, addXp } = useGamification();
  const [hasRewarded, setHasRewarded] = useState(false);

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

  // Cleanup Web Audio
  useEffect(() => {
    return () => {
      if (oscNodeRef.current) {
        try {
          oscNodeRef.current.stop();
          oscNodeRef.current.disconnect();
        } catch (e) {}
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try {
          audioCtxRef.current.close();
        } catch (e) {}
      }
    };
  }, []);

  // Reward helper
  const triggerLabReward = (title, reason) => {
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
  };

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
  }, [isChasing]);

  // Lever balance detection
  const leftTorque = leftWeight * leftDistance;
  const rightTorque = rightWeight * rightDistance;
  const isBalanced = leftTorque === rightTorque;
  const tiltAngle = Math.max(-15, Math.min(15, (rightTorque - leftTorque) * 2));

  useEffect(() => {
    if (isBalanced && unitId === 'sci-u6') {
      triggerLabReward('槓桿力矩達成完美平衡！', 'lever_balance');
    }
  }, [isBalanced, unitId]);

  // Web Audio Synth handler for sci-u9
  const toggleSoundOsc = (freq) => {
    const targetFreq = freq || oscFreq;
    if (isOscPlaying) {
      if (oscNodeRef.current) {
        try {
          oscNodeRef.current.stop();
          oscNodeRef.current.disconnect();
        } catch (e) {}
      }
      setIsOscPlaying(false);
    } else {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
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
          } catch (e) {}
        }, 2500);
      } catch (e) {
        console.warn('AudioContext error', e);
      }
    }
  };

  // Determine which mini-lab applies to this unit
  const labType = (() => {
    if (unitId === 'math-u5' || unitId === 'math-u6') return 'circle-area';
    if (unitId === 'sci-u6') return 'lever';
    if (unitId === 'sci-u2') return 'acid-base';
    if (unitId === 'sci-u3') return 'electromagnet';
    if (unitId === 'sci-u1') return 'weather';
    if (unitId === 'math-u7') return 'speed-chase';
    if (unitId === 'sci-u9') return 'sound-osc';
    return null;
  })();

  if (!labType) return null;

  return (
    <div className="mini-lab-card my-6 animate-fade-in">
      <div className="mini-lab-header">
        <div className="flex items-center gap-2">
          <span className="mini-lab-tag">
            <Sparkles size={13} />
            <span>PhET 動態探究模擬小工具</span>
          </span>
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
            {labType === 'circle-area' && '🧮 圓面積極限切片動態展示'}
            {labType === 'lever' && '⚖️ 槓桿力矩平衡實驗室'}
            {labType === 'acid-base' && '🧪 水溶液酸鹼與試紙變色'}
            {labType === 'electromagnet' && '⚡ 電磁鐵線圈與磁力測試'}
            {labType === 'weather' && '🌍 大氣鋒面與氣壓動態圖解'}
            {labType === 'speed-chase' && '🏃 速率相遇與追趕跑道模擬'}
            {labType === 'sound-osc' && '🔊 聲音頻率與音調震盪器'}
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
        {/* 1. Circle Area Slicing */}
        {labType === 'circle-area' && (
          <div className="mini-lab-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
                {/* SVG Visual for circle vs rectangle transformation */}
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

                <div className="text-xs font-mono text-center mt-2 text-slate-700 dark:text-slate-300">
                  長方形長 ≈ 圓周長一半 (<strong>{(circleRadius * 3.14).toFixed(2)}</strong> cm)<br/>
                  長方形寬 = 半徑 (<strong>{circleRadius}</strong> cm)<br/>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">
                    圓面積 = r × r × 3.14 ≈ {(circleRadius * circleRadius * 3.14).toFixed(2)} cm²
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>切片數量 (等份數)：</span>
                    <span className="text-blue-600 dark:text-blue-400">{circleSlices} 等份</span>
                  </div>
                  <input 
                    type="range" 
                    min="4" 
                    max="64" 
                    step="4" 
                    value={circleSlices} 
                    onChange={(e) => {
                      setCircleSlices(Number(e.target.value));
                      triggerLabReward('探索圓面積極限切片！', 'circle_slice');
                    }}
                    className="w-full accent-blue-600"
                  />
                  <div className="flex justify-between text-[10px] text-tertiary">
                    <span>4 (粗糙)</span>
                    <span>16 (常見)</span>
                    <span>32 (細緻)</span>
                    <span>64 (極限近似)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>圓半徑 (r)：</span>
                    <span className="text-blue-600 dark:text-blue-400">{circleRadius} cm</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    step="1" 
                    value={circleRadius} 
                    onChange={(e) => setCircleRadius(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>

                <p className="text-xs text-secondary bg-blue-50/50 dark:bg-blue-950/20 p-2.5 rounded-lg border border-blue-200 dark:border-blue-900">
                  💡 <strong>幾何直觀結論</strong>：當切片等份數越接近無限大，凹凸邊緣就越平直，拼成的圖形就越完美契合長方形！
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 2. Lever Seesaw */}
        {labType === 'lever' && (
          <div className="mini-lab-content">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl mb-3">
              {/* Seesaw representation */}
              <div className="relative w-full h-24 flex items-center justify-center overflow-hidden">
                <div 
                  className="w-64 sm:w-80 h-3 bg-amber-600 rounded-full relative transition-transform duration-300"
                  style={{ transform: `rotate(${tiltAngle}deg)` }}
                >
                  {/* Left Weight */}
                  <div 
                    className="absolute -top-7 flex flex-col items-center"
                    style={{ left: `${Math.max(4, 50 - leftDistance * 15)}%` }}
                  >
                    <span className="text-xs font-bold bg-amber-500 text-white px-1.5 py-0.5 rounded shadow">
                      {leftWeight}kg
                    </span>
                    <span className="text-[10px] text-tertiary font-mono">{leftDistance}m</span>
                  </div>

                  {/* Right Weight */}
                  <div 
                    className="absolute -top-7 flex flex-col items-center"
                    style={{ left: `${Math.min(92, 50 + rightDistance * 15)}%` }}
                  >
                    <span className="text-xs font-bold bg-emerald-500 text-white px-1.5 py-0.5 rounded shadow">
                      {rightWeight}kg
                    </span>
                    <span className="text-[10px] text-tertiary font-mono">{rightDistance}m</span>
                  </div>
                </div>

                {/* Fulcrum Triangle */}
                <div className="absolute bottom-3 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-slate-700 dark:border-b-slate-300"></div>
              </div>

              <div className="flex justify-between items-center text-xs font-mono px-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                <span className="text-amber-600 dark:text-amber-400 font-bold">
                  左力矩: {leftWeight} × {leftDistance} = {leftTorque}
                </span>
                <span className={`font-bold px-2 py-0.5 rounded ${isBalanced ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'}`}>
                  {isBalanced ? '⚖️ 完美平衡 (施力×施力臂 = 抗力×抗力臂)' : '不等重傾斜中'}
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                  右力矩: {rightWeight} × {rightDistance} = {rightTorque}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span>左施力重量: {leftWeight} kg</span>
                  <input type="range" min="1" max="10" value={leftWeight} onChange={(e) => setLeftWeight(Number(e.target.value))} className="w-24" />
                </div>
                <div className="flex justify-between">
                  <span>左施力臂距離: {leftDistance} m</span>
                  <input type="range" min="1" max="3" value={leftDistance} onChange={(e) => setLeftDistance(Number(e.target.value))} className="w-24" />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span>右抗力重量: {rightWeight} kg</span>
                  <input type="range" min="1" max="10" value={rightWeight} onChange={(e) => setRightWeight(Number(e.target.value))} className="w-24" />
                </div>
                <div className="flex justify-between">
                  <span>右抗力臂距離: {rightDistance} m</span>
                  <input type="range" min="1" max="3" value={rightDistance} onChange={(e) => setRightDistance(Number(e.target.value))} className="w-24" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. Acid Base Litmus */}
        {labType === 'acid-base' && (
          <div className="mini-lab-content">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl flex flex-col items-center">
              <div className="flex items-center gap-6 my-2">
                {/* Litmus Strip Indicator */}
                <div className="text-center">
                  <div 
                    className="w-8 h-20 rounded-md border border-slate-300 shadow-inner transition-colors duration-500"
                    style={{ 
                      backgroundColor: phVal < 7 
                        ? `rgba(239, 68, 68, ${0.4 + (7 - phVal) * 0.08})` 
                        : phVal > 7 
                          ? `rgba(59, 130, 246, ${0.4 + (phVal - 7) * 0.08})` 
                          : '#e2e8f0' 
                    }}
                  />
                  <span className="text-[10px] text-tertiary block mt-1">石蕊試紙變色</span>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-black font-mono" style={{
                    color: phVal < 7 ? '#ef4444' : phVal > 7 ? '#3b82f6' : '#10b981'
                  }}>
                    pH {phVal.toFixed(1)}
                  </div>
                  <span className="badge mt-1" style={{
                    backgroundColor: phVal < 7 ? 'rgba(239, 68, 68, 0.15)' : phVal > 7 ? 'rgba(59, 130, 246, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                    color: phVal < 7 ? '#ef4444' : phVal > 7 ? '#3b82f6' : '#10b981'
                  }}>
                    {phVal < 6 ? '🔴 強酸性 (藍試紙變紅)' : phVal < 7 ? '🟠 弱酸性' : phVal === 7 ? '🟢 中性 (試紙不變色)' : phVal < 9 ? '🔵 弱鹼性' : '🟣 強鹼性 (紅試紙變藍)'}
                  </span>
                </div>
              </div>

              {/* Quick preset reagent buttons */}
              <div className="flex flex-wrap gap-1.5 justify-center mt-2">
                {[
                  { name: '🍋 檸檬汁 (pH 2.5)', val: 2.5 },
                  { name: '🥗 食用醋 (pH 3.0)', val: 3.0 },
                  { name: '💧 純水 (pH 7.0)', val: 7.0 },
                  { name: '🧂 小蘇打水 (pH 8.5)', val: 8.5 },
                  { name: '🧼 肥皂水 (pH 10.0)', val: 10.0 }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setPhVal(item.val);
                      triggerLabReward(`測試 ${item.name} 酸鹼度！`, 'ph_test');
                    }}
                    className="btn-outline text-xs py-1 px-2 rounded-lg"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. Electromagnet */}
        {labType === 'electromagnet' && (
          <div className="mini-lab-content">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
              <div className="flex items-center justify-around flex-wrap gap-4">
                <div className="text-center">
                  <div className="text-4xl">🧲 📎</div>
                  <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">
                    成功吸附: <strong className="text-purple-600 text-lg font-mono">{Math.floor(batteries * (coils / 10) * 1.5)}</strong> 根迴紋針
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span>🔋 電池串聯數量: <strong>{batteries} 顆</strong></span>
                    <button onClick={() => setBatteries(Math.min(4, batteries + 1))} className="btn-outline py-0.5 px-2 text-xs">+</button>
                    <button onClick={() => setBatteries(Math.max(1, batteries - 1))} className="btn-outline py-0.5 px-2 text-xs">-</button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🌀 漆包線匝數: <strong>{coils} 圈</strong></span>
                    <button onClick={() => {
                      setCoils(Math.min(80, coils + 10));
                      triggerLabReward('增強線圈匝數！', 'electromagnet');
                    }} className="btn-outline py-0.5 px-2 text-xs">+10</button>
                    <button onClick={() => setCoils(Math.max(10, coils - 10))} className="btn-outline py-0.5 px-2 text-xs">-10</button>
                  </div>
                </div>
              </div>
              <div className="text-xs text-secondary text-center mt-3">
                💡 <strong>電磁鐵三大增強法則</strong>：增加電池數量（電流變大）、增加線圈圈數、加入鐵芯！
              </div>
            </div>
          </div>
        )}

        {/* 5. Weather Fronts */}
        {labType === 'weather' && (
          <div className="mini-lab-content">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
              <div className="flex justify-center gap-2 mb-3">
                <button 
                  onClick={() => setWeatherType('cold_front')}
                  className={`btn-outline text-xs py-1 px-3 ${weatherType === 'cold_front' ? 'bg-blue-100 dark:bg-blue-950 font-bold border-blue-400' : ''}`}
                >
                  ❄️ 冷鋒 (寒流降溫)
                </button>
                <button 
                  onClick={() => setWeatherType('warm_front')}
                  className={`btn-outline text-xs py-1 px-3 ${weatherType === 'warm_front' ? 'bg-rose-100 dark:bg-rose-950 font-bold border-rose-400' : ''}`}
                >
                  ☀️ 暖鋒 (溫和降雨)
                </button>
                <button 
                  onClick={() => {
                    setWeatherType('stationary_front');
                    triggerLabReward('辨別梅雨滯留鋒！', 'weather_front');
                  }}
                  className={`btn-outline text-xs py-1 px-3 ${weatherType === 'stationary_front' ? 'bg-purple-100 dark:bg-purple-950 font-bold border-purple-400' : ''}`}
                >
                  🌧️ 滯留鋒 (五六月梅雨)
                </button>
              </div>

              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg text-xs leading-relaxed">
                {weatherType === 'cold_front' && (
                  <div>
                    <strong className="text-blue-600 dark:text-blue-400">❄️ 冷鋒特徵：</strong>
                    冷氣團強勢推擠暖氣團，暖空氣被迫劇烈抬升，形成厚實積雨雲，伴隨劇烈降雨與氣溫驟降！
                  </div>
                )}
                {weatherType === 'warm_front' && (
                  <div>
                    <strong className="text-rose-600 dark:text-rose-400">☀️ 暖鋒特徵：</strong>
                    暖氣團主動爬升於冷氣團之上，坡度平緩，形成大範圍層雲與綿綿細雨。
                  </div>
                )}
                {weatherType === 'stationary_front' && (
                  <div>
                    <strong className="text-purple-600 dark:text-purple-400">🌧️ 滯留鋒（梅雨成因）：</strong>
                    冷暖氣團勢力相當，在臺灣上空形成僵持對峙，帶來持續數天的連續陰雨！
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 6. Speed Race Chase */}
        {labType === 'speed-chase' && (
          <div className="mini-lab-content">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
              <div className="relative w-full h-14 bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden flex items-center px-3 mb-3">
                {/* Runner A (Chaser) */}
                <div 
                  className="absolute text-xl transition-all duration-75"
                  style={{ left: `${Math.min(92, (chaseProgress * (chaseSpeedA / 8)))}%` }}
                >
                  🏃 (小明 {chaseSpeedA}m/s)
                </div>

                {/* Runner B (Ahead) */}
                <div 
                  className="absolute text-xl transition-all duration-75 opacity-70"
                  style={{ left: `${Math.min(92, (chaseDistance + chaseProgress * (chaseSpeedB / 8) * 0.6))}%` }}
                >
                  🚶 (小華 {chaseSpeedB}m/s)
                </div>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                <span className="font-mono">
                  追趕相遇時間 = 領先距離 ÷ 速率差 = {chaseDistance} ÷ ({chaseSpeedA} - {chaseSpeedB}) = <strong>{(chaseDistance / Math.max(1, chaseSpeedA - chaseSpeedB)).toFixed(1)} 秒</strong>
                </span>

                <button 
                  onClick={() => {
                    setIsChasing(true);
                    setChaseProgress(0);
                    playSound('click');
                  }}
                  disabled={isChasing}
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
      </div>
    </div>
  );
};

export default LessonMiniLabWidget;
