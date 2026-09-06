import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Sparkles, 
  RotateCcw, 
  Play, 
  Pause, 
  HelpCircle, 
  Zap, 
  CheckCircle2, 
  Flame,
  Award,
  Layers
} from 'lucide-react';
import { interactiveLabsList } from '../data/interactiveLabsData';
import { playSound, triggerHaptic, dispatchDynamicIsland } from '../utils/soundEffects';
import { useGamification } from '../context/GamificationContext';
import confetti from 'canvas-confetti';

const InteractiveLabsPage = () => {
  const { addCoins, addXp } = useGamification();
  const [selectedLabId, setSelectedLabId] = useState('circle-area');

  // Lab 1: Circle Area Slicing
  const [slices, setSlices] = useState(16);
  const [radius, setRadius] = useState(5);

  // Lab 2: Lever Seesaw Balance
  const [leftWeight, setLeftWeight] = useState(6);
  const [leftDistance, setLeftDistance] = useState(2);
  const [rightWeight, setRightWeight] = useState(4);
  const [rightDistance, setRightDistance] = useState(3);
  const [hasBalancedCelebrated, setHasBalancedCelebrated] = useState(false);

  // Lab 3: Acid Base pH Beaker
  const [currentPh, setCurrentPh] = useState(7.0);

  // Lab 4: Electromagnet
  const [batteryCount, setBatteryCount] = useState(2);
  const [coilTurns, setCoilTurns] = useState(40);
  const [hasIronCore, setHasIronCore] = useState(true);

  // Lab 5: Weather Fronts
  const [weatherMode, setWeatherMode] = useState('high_pressure');

  // Lab 6: Speed Race Chase
  const [speedA, setSpeedA] = useState(8); // m/s
  const [speedB, setSpeedB] = useState(5); // m/s
  const [headStart, setHeadStart] = useState(30); // meters
  const [raceProgress, setRaceProgress] = useState(0); // 0 to 100%
  const [isRacing, setIsRacing] = useState(false);

  // Lever balance calculation
  const leftTorque = leftWeight * leftDistance;
  const rightTorque = rightWeight * rightDistance;
  const torqueDiff = rightTorque - leftTorque;
  const seesawAngle = Math.max(-18, Math.min(18, torqueDiff * 2.5));
  const isBalanced = leftTorque === rightTorque;

  // Check lever celebration
  useEffect(() => {
    if (isBalanced && !hasBalancedCelebrated) {
      setHasBalancedCelebrated(true);
      playSound('levelup');
      triggerHaptic('heavy');
      dispatchDynamicIsland({
        title: '⚖️ 槓桿力矩完美平衡！',
        subtitle: `左力矩(${leftTorque}) = 右力矩(${rightTorque})・達成平衡`,
        icon: '⚖️'
      });
      addCoins(25);
      addXp(40, 'lab_balance');
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } else if (!isBalanced) {
      setHasBalancedCelebrated(false);
    }
  }, [isBalanced, hasBalancedCelebrated, leftTorque, rightTorque, addCoins, addXp]);

  // Speed Race Loop
  useEffect(() => {
    let animId;
    if (isRacing) {
      animId = setInterval(() => {
        setRaceProgress(prev => {
          if (prev >= 100) {
            setIsRacing(false);
            playSound('levelup');
            triggerHaptic('heavy');
            dispatchDynamicIsland({
              title: '🏃 跑道追趕模擬衝線！',
              subtitle: `相遇成功・精準命中數學公式`,
              icon: '🏆'
            });
            confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
            return 100;
          }
          return prev + 2.5;
        });
      }, 50);
    }
    return () => clearInterval(animId);
  }, [isRacing]);

  const activeLab = interactiveLabsList.find(l => l.id === selectedLabId) || interactiveLabsList[0];

  // pH Color Helper
  const getPhColor = (ph) => {
    if (ph < 3) return '#ef4444'; // strong red
    if (ph < 6) return '#f97316'; // orange
    if (ph <= 8) return '#10b981'; // green / neutral
    if (ph <= 11) return '#0ea5e9'; // light blue
    return '#7c3aed'; // deep purple
  };

  // Electromagnet paperclips calculation
  const paperclipsCount = hasIronCore 
    ? Math.max(0, Math.round((batteryCount * coilTurns) / 8))
    : Math.max(0, Math.round((batteryCount * coilTurns) / 80));

  return (
    <div className="flex flex-col gap-6 py-4 max-w-4xl mx-auto pb-16 animate-fade-in">
      {/* Top Breadcrumb */}
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
          <ArrowLeft size={16} /> 返回課程首頁
        </Link>
        <span className="badge badge-accent font-bold text-xs">
          🔬 PhET 風格・動態互動探究實驗室
        </span>
      </div>

      {/* Header Banner */}
      <div
        className="card p-6 flex flex-col md:flex-row justify-between items-center gap-4"
        style={{
          borderRadius: 'var(--radius-xl)',
          backgroundColor: 'var(--bg-secondary)',
          border: '1.5px solid var(--border-light)',
          background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(16, 185, 129, 0.06) 50%, rgba(59, 130, 246, 0.05) 100%)'
        }}
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="badge badge-success font-bold text-xs">
              ✨ 視覺化探究・動手操作秒懂原理
            </span>
          </div>
          <h1 className="h1" style={{ margin: 0, fontSize: 'calc(1.75rem * var(--font-scale))' }}>
            互動探究實驗室 (Interactive Labs)
          </h1>
          <p className="text-secondary text-xs mt-1.5" style={{ lineHeight: 1.6 }}>
            拖曳滑桿、改變變因，即時觀察幾何切割、力矩天平、酸鹼變色與電磁力！
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => {
              playSound('chest_open');
              addCoins(10);
            }}
            className="btn-outline text-xs flex items-center gap-1 font-bold"
          >
            <span>💡 自由探索獎勵 (+10 🪙)</span>
          </button>
        </div>
      </div>

      {/* Lab Tabs Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
        {interactiveLabsList.map(lab => {
          const isSelected = selectedLabId === lab.id;
          return (
            <button
              key={lab.id}
              onClick={() => {
                setSelectedLabId(lab.id);
                triggerHaptic('selection');
                playSound('lab_interact');
              }}
              className="ios-pressable card p-3 flex flex-col items-center justify-center text-center transition-all cursor-pointer"
              style={{
                borderRadius: 'var(--radius-lg)',
                backgroundColor: isSelected ? 'var(--accent-soft)' : 'var(--bg-secondary)',
                border: isSelected ? `2px solid ${lab.color}` : '1.5px solid var(--border-light)',
                boxShadow: isSelected ? `0 4px 12px ${lab.color}25` : 'none'
              }}
            >
              <span className="text-2xl mb-1">{lab.emoji}</span>
              <span 
                className="text-xs font-bold leading-tight line-clamp-2"
                style={{ color: isSelected ? lab.color : 'var(--text-primary)' }}
              >
                {lab.title.split(' ')[1]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Simulator Active Canvas & Control Panel */}
      <div
        className="card p-6 flex flex-col gap-6"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-xl)',
          border: `2px solid ${activeLab.color}40`,
          boxShadow: 'var(--shadow-md)'
        }}
      >
        {/* Lab Title & Subtitle */}
        <div className="flex justify-between items-start border-b pb-3 border-light">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{activeLab.emoji}</span>
              <h2 className="h2" style={{ margin: 0, fontSize: 'calc(1.35rem * var(--font-scale))' }}>
                {activeLab.title}
              </h2>
            </div>
            <p className="text-xs text-secondary mt-1">
              {activeLab.subtitle}
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LAB 1: Circle Area Slicing Morph */}
        {/* ========================================================================= */}
        {selectedLabId === 'circle-area' && (
          <div className="flex flex-col gap-6 animate-fade-in">
            {/* Interactive Visual Canvas */}
            <div 
              className="p-6 rounded-2xl flex flex-col items-center justify-center bg-slate-900/40 border border-slate-700/40 text-center"
              style={{ minHeight: '260px' }}
            >
              <div className="flex flex-wrap items-center justify-center gap-8 w-full">
                {/* Visual Circle with Slices */}
                <div className="flex flex-col items-center">
                  <div className="text-xs text-slate-300 font-bold mb-2">圓形 (半徑 r = {radius} cm)</div>
                  <svg width="140" height="140" viewBox="-70 -70 140 140" className="animate-spin-slow">
                    <circle cx="0" cy="0" r="60" fill="#3b82f630" stroke="#3b82f6" strokeWidth="3" />
                    {Array.from({ length: slices }).map((_, i) => {
                      const angle = (i * 360) / slices;
                      const rad = (angle * Math.PI) / 180;
                      return (
                        <line
                          key={i}
                          x1="0"
                          y1="0"
                          x2={60 * Math.cos(rad)}
                          y2={60 * Math.sin(rad)}
                          stroke="#3b82f6"
                          strokeWidth="1.5"
                        />
                      );
                    })}
                  </svg>
                </div>

                <div className="text-2xl text-amber-400 font-black">
                  ➔ 拼貼 ➔
                </div>

                {/* Sliced Interleaved Rectangle / Parallelogram */}
                <div className="flex flex-col items-center">
                  <div className="text-xs text-slate-300 font-bold mb-2">
                    交錯拼合圖形 (等份數：{slices})
                  </div>
                  <div 
                    className="flex items-end justify-center overflow-hidden transition-all duration-300 rounded-lg p-2 bg-blue-500/10 border border-blue-400"
                    style={{
                      width: '200px',
                      height: '90px'
                    }}
                  >
                    <div className="text-center">
                      <div className="text-[11px] text-amber-300 font-extrabold mb-1">
                        長 $\approx \pi \times r$ ({Math.round(radius * 3.14 * 10) / 10} cm)
                      </div>
                      <div className="flex items-center justify-center gap-0.5">
                        {Array.from({ length: Math.min(32, slices) }).map((_, i) => (
                          <div
                            key={i}
                            style={{
                              width: `${160 / Math.min(32, slices)}px`,
                              height: '50px',
                              backgroundColor: i % 2 === 0 ? '#3b82f6' : '#60a5fa',
                              borderRadius: slices >= 32 ? '2px' : '4px',
                              transform: i % 2 === 0 ? 'rotate(0deg)' : 'rotate(180deg)'
                            }}
                          />
                        ))}
                      </div>
                      <div className="text-[11px] text-emerald-300 font-bold mt-1">
                        寬 $= r$ ({radius} cm)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Formula Result */}
              <div className="mt-4 p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-200">
                <span className="text-amber-400 font-bold">公式即時驗算：</span>{' '}
                圓面積 $= r \times r \times 3.14 = {radius} \times {radius} \times 3.14 =${' '}
                <strong className="text-emerald-400 text-sm font-black">
                  {Math.round(radius * radius * 3.14 * 100) / 100} cm²
                </strong>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50">
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span>🔪 切割等份數 (Slices)：</span>
                  <span className="badge badge-accent">{slices} 等份</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="64"
                  step="4"
                  value={slices}
                  onChange={(e) => {
                    setSlices(Number(e.target.value));
                    playSound('lab_interact', Number(e.target.value) / 32);
                  }}
                  className="w-full accent-blue-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-secondary mt-1">
                  <span>4 (像鋸齒)</span>
                  <span>16 (近似)</span>
                  <span>64 (完美長方形)</span>
                </div>
              </div>

              <div className="card p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50">
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span>📏 圓半徑 (Radius r)：</span>
                  <span className="badge badge-success">{radius} cm</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="10"
                  step="1"
                  value={radius}
                  onChange={(e) => {
                    setRadius(Number(e.target.value));
                    playSound('lab_interact', Number(e.target.value) / 5);
                  }}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-secondary mt-1">
                  <span>2 cm</span>
                  <span>5 cm</span>
                  <span>10 cm</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* LAB 2: Lever Seesaw Balance */}
        {/* ========================================================================= */}
        {selectedLabId === 'lever-seesaw' && (
          <div className="flex flex-col gap-6 animate-fade-in">
            {/* Visual Seesaw */}
            <div 
              className="p-6 rounded-2xl flex flex-col items-center justify-center bg-slate-900/40 border border-slate-700/40 text-center relative overflow-hidden"
              style={{ minHeight: '240px' }}
            >
              {/* Balance State Status Toast */}
              <div className="mb-4">
                {isBalanced ? (
                  <span className="badge badge-success font-black text-sm px-4 py-1.5 animate-bounce">
                    🎉 完美平衡！(施力臂 × 重量 兩端相等！)
                  </span>
                ) : torqueDiff < 0 ? (
                  <span className="badge badge-warning font-bold text-xs">
                    ⬅️ 左邊力矩較大 ({leftTorque} &gt; {rightTorque})
                  </span>
                ) : (
                  <span className="badge badge-warning font-bold text-xs">
                    ➡️ 右邊力矩較大 ({rightTorque} &gt; {leftTorque})
                  </span>
                )}
              </div>

              {/* Animated Seesaw Bar SVG */}
              <svg width="340" height="120" viewBox="-170 -60 340 120" className="transition-all duration-300">
                {/* Pivot Triangle */}
                <polygon points="0,0 -16,30 16,30" fill="#94a3b8" stroke="#475569" strokeWidth="2" />

                {/* Rotating Bar */}
                <g style={{ transform: `rotate(${seesawAngle}deg)`, transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                  {/* The Wooden Board */}
                  <rect x="-140" y="-6" width="280" height="12" rx="4" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />

                  {/* Left Weight Box */}
                  <g style={{ transform: `translate(-${leftDistance * 26}px, -24px)` }}>
                    <rect x="-14" y="0" width="28" height="18" rx="3" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
                    <text x="0" y="13" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                      {leftWeight}kg
                    </text>
                  </g>

                  {/* Right Weight Box */}
                  <g style={{ transform: `translate(${rightDistance * 26}px, -24px)` }}>
                    <rect x="-14" y="0" width="28" height="18" rx="3" fill="#ec4899" stroke="#be185d" strokeWidth="1.5" />
                    <text x="0" y="13" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">
                      {rightWeight}kg
                    </text>
                  </g>
                </g>
              </svg>

              {/* Torque Math Equation */}
              <div className="mt-2 flex items-center justify-center gap-4 text-xs font-bold">
                <span className="text-blue-400">
                  左側力矩：{leftWeight}kg × {leftDistance}m = <strong>{leftTorque}</strong>
                </span>
                <span className="text-slate-400">vs</span>
                <span className="text-pink-400">
                  右側力矩：{rightWeight}kg × {rightDistance}m = <strong>{rightTorque}</strong>
                </span>
              </div>
            </div>

            {/* Controls for Left & Right Arms */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Left Controls */}
              <div className="card p-4 rounded-xl bg-blue-500/10 border border-blue-400/30">
                <div className="text-xs font-black text-blue-500 mb-2">⬅️ 左側設定</div>
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>重量 (Weight)：</span>
                      <span className="font-bold">{leftWeight} kg</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={leftWeight}
                      onChange={(e) => {
                        setLeftWeight(Number(e.target.value));
                        playSound('lab_interact', Number(e.target.value) / 5);
                      }}
                      className="w-full accent-blue-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>距離支點 (Distance)：</span>
                      <span className="font-bold">{leftDistance} m</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={leftDistance}
                      onChange={(e) => {
                        setLeftDistance(Number(e.target.value));
                        playSound('lab_interact', Number(e.target.value) / 3);
                      }}
                      className="w-full accent-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Right Controls */}
              <div className="card p-4 rounded-xl bg-pink-500/10 border border-pink-400/30">
                <div className="text-xs font-black text-pink-500 mb-2">➡️ 右側設定</div>
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>重量 (Weight)：</span>
                      <span className="font-bold">{rightWeight} kg</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={rightWeight}
                      onChange={(e) => {
                        setRightWeight(Number(e.target.value));
                        playSound('lab_interact', Number(e.target.value) / 5);
                      }}
                      className="w-full accent-pink-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>距離支點 (Distance)：</span>
                      <span className="font-bold">{rightDistance} m</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={rightDistance}
                      onChange={(e) => {
                        setRightDistance(Number(e.target.value));
                        playSound('lab_interact', Number(e.target.value) / 3);
                      }}
                      className="w-full accent-pink-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* LAB 3: Acid-Base pH Indicator Flask */}
        {/* ========================================================================= */}
        {selectedLabId === 'acid-base-ph' && (
          <div className="flex flex-col gap-6 animate-fade-in">
            <div 
              className="p-6 rounded-2xl flex flex-col md:flex-row items-center justify-around gap-6 bg-slate-900/40 border border-slate-700/40"
              style={{ minHeight: '260px' }}
            >
              {/* Beaker & Liquid */}
              <div className="flex flex-col items-center">
                <div className="text-xs font-bold text-slate-300 mb-2">實驗燒杯水溶液</div>
                <div 
                  className="w-32 h-40 rounded-b-3xl border-4 border-t-0 border-slate-400 relative overflow-hidden flex flex-col justify-end p-2 bg-slate-800/30"
                >
                  <div
                    className="w-full rounded-b-2xl transition-all duration-500 flex items-center justify-center font-black text-white text-xs shadow-inner"
                    style={{
                      height: '75%',
                      backgroundColor: getPhColor(currentPh),
                      opacity: 0.85
                    }}
                  >
                    pH {Math.round(currentPh * 10) / 10}
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-300 mt-2">
                  {currentPh < 7 ? '🍋 酸性溶液' : currentPh === 7 ? '💧 中性純水' : '🧼 鹼性溶液'}
                </span>
              </div>

              {/* Litmus Paper Tests */}
              <div className="flex flex-col gap-3">
                <div className="text-xs font-bold text-slate-300">石蕊試紙檢驗結果：</div>
                
                {/* Red Litmus Paper */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/70 border border-slate-700">
                  <div
                    className="w-12 h-6 rounded border transition-colors duration-300"
                    style={{
                      backgroundColor: currentPh > 7.5 ? '#3b82f6' : '#ef4444'
                    }}
                  />
                  <div>
                    <div className="text-xs font-bold text-white">紅色石蕊試紙</div>
                    <div className="text-[11px] text-slate-300">
                      {currentPh > 7.5 ? '👉 變為藍色 (檢出鹼性！)' : '👉 維持紅色 (無變化)'}
                    </div>
                  </div>
                </div>

                {/* Blue Litmus Paper */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/70 border border-slate-700">
                  <div
                    className="w-12 h-6 rounded border transition-colors duration-300"
                    style={{
                      backgroundColor: currentPh < 6.5 ? '#ef4444' : '#3b82f6'
                    }}
                  />
                  <div>
                    <div className="text-xs font-bold text-white">藍色石蕊試紙</div>
                    <div className="text-[11px] text-slate-300">
                      {currentPh < 6.5 ? '👉 變為紅色 (檢出酸性！)' : '👉 維持藍色 (無變化)'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dropper Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  setCurrentPh(p => Math.max(1.0, Math.round((p - 1.0) * 10) / 10));
                  playSound('lab_interact', 0.8);
                }}
                className="btn-primary text-xs py-2 px-4 rounded-xl font-bold bg-red-600 border-red-600 text-white"
              >
                🧪 滴加鹽酸滴劑 (酸度 +1)
              </button>

              <button
                onClick={() => {
                  setCurrentPh(7.0);
                  playSound('lab_interact', 1.0);
                }}
                className="btn-outline text-xs py-2 px-4 rounded-xl font-bold"
              >
                <RotateCcw size={14} /> 倒入純水復原 (pH 7.0)
              </button>

              <button
                onClick={() => {
                  setCurrentPh(p => Math.min(13.0, Math.round((p + 1.0) * 10) / 10));
                  playSound('lab_interact', 1.3);
                }}
                className="btn-primary text-xs py-2 px-4 rounded-xl font-bold bg-purple-600 border-purple-600 text-white"
              >
                🧴 滴加氫氧化鈉 (鹼度 +1)
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* LAB 4: Electromagnet Strength */}
        {/* ========================================================================= */}
        {selectedLabId === 'electromagnet' && (
          <div className="flex flex-col gap-6 animate-fade-in">
            <div 
              className="p-6 rounded-2xl flex flex-col items-center justify-center bg-slate-900/40 border border-slate-700/40 text-center"
              style={{ minHeight: '260px' }}
            >
              {/* Electromagnet Graphic */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-3 text-xs text-slate-300 font-bold mb-2">
                  <span>🔋 電池：{batteryCount} 節 ({batteryCount * 1.5}V)</span>
                  <span>🌀 線圈：{coilTurns} 匝</span>
                  <span>🧲 鐵芯：{hasIronCore ? '導磁鐵釘 (良導)' : '塑膠棒 (無磁化)'}</span>
                </div>

                {/* Electromagnet Nail with Coils */}
                <div className="relative my-3 flex flex-col items-center">
                  <div
                    className="w-8 h-28 rounded-b-md transition-colors"
                    style={{
                      backgroundColor: hasIronCore ? '#64748b' : '#fdba74',
                      border: '2px solid #334155'
                    }}
                  />
                  {/* Coils wrapping visual */}
                  <div className="absolute inset-0 flex flex-col justify-around py-3 px-1">
                    {Array.from({ length: Math.min(8, Math.round(coilTurns / 10)) }).map((_, i) => (
                      <div key={i} className="h-1.5 w-full bg-amber-600 rounded-full border border-amber-800" />
                    ))}
                  </div>
                </div>

                {/* Attracted Paperclips */}
                <div className="mt-2 flex flex-col items-center">
                  <span className="badge badge-warning text-xs font-bold mb-1.5">
                    🧲 成功吸起 {paperclipsCount} 根迴紋針！
                  </span>
                  <div className="flex flex-wrap justify-center gap-1 max-w-xs">
                    {Array.from({ length: Math.min(24, paperclipsCount) }).map((_, i) => (
                      <span key={i} className="text-base animate-bounce" style={{ animationDelay: `${i * 0.05}s` }}>
                        📎
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="card p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>🔋 電池數量：</span>
                  <span>{batteryCount} 節</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  value={batteryCount}
                  onChange={(e) => {
                    setBatteryCount(Number(e.target.value));
                    playSound('lab_interact');
                  }}
                  className="w-full accent-blue-500"
                />
              </div>

              <div className="card p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>🌀 線圈匝數：</span>
                  <span>{coilTurns} 圈</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="10"
                  value={coilTurns}
                  onChange={(e) => {
                    setCoilTurns(Number(e.target.value));
                    playSound('lab_interact');
                  }}
                  className="w-full accent-amber-500"
                />
              </div>

              <div className="card p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 flex flex-col justify-center">
                <div className="text-xs font-bold mb-1">🧲 鐵芯材質：</div>
                <button
                  onClick={() => {
                    setHasIronCore(!hasIronCore);
                    playSound('lab_interact');
                  }}
                  className={`btn-pill text-xs justify-center font-bold ${hasIronCore ? 'active' : ''}`}
                >
                  {hasIronCore ? '✅ 導磁鐵釘 (磁力爆表)' : '❌ 塑膠棒 (無磁性)'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* LAB 5: Weather Fronts Atmospheric Simulator */}
        {/* ========================================================================= */}
        {selectedLabId === 'weather-fronts' && (
          <div className="flex flex-col gap-6 animate-fade-in">
            <div 
              className="p-6 rounded-2xl flex flex-col items-center justify-center bg-slate-900/40 border border-slate-700/40 text-center"
              style={{ minHeight: '260px' }}
            >
              {weatherMode === 'high_pressure' && (
                <div className="flex flex-col items-center animate-fade-in">
                  <div className="text-5xl mb-2">☀️ 🌀</div>
                  <h3 className="text-base font-bold text-amber-300">高氣壓中心 (High Pressure)</h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-sm">
                    中心氣流「沉降下壓」，北半球呈「順時針向外輻散」。水氣不易凝結，天氣晴朗穩定！
                  </p>
                </div>
              )}

              {weatherMode === 'low_pressure' && (
                <div className="flex flex-col items-center animate-fade-in">
                  <div className="text-5xl mb-2">🌧️ 🌀</div>
                  <h3 className="text-base font-bold text-blue-300">低氣壓中心 (Low Pressure)</h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-sm">
                    中心氣流「強烈上升」，北半球呈「逆時針向內輻合」。水氣冷卻凝結成雲致雨！
                  </p>
                </div>
              )}

              {weatherMode === 'cold_front' && (
                <div className="flex flex-col items-center animate-fade-in">
                  <div className="text-5xl mb-2">❄️ ⛈️ 📉</div>
                  <h3 className="text-base font-bold text-sky-300">冷鋒過境 (Cold Front)</h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-sm">
                    強勢冷空氣推擠暖空氣向上抬升，形成積雨雲！伴隨「短暫強陣雨與氣溫驟降」！
                  </p>
                </div>
              )}

              {weatherMode === 'stationary_front' && (
                <div className="flex flex-col items-center animate-fade-in">
                  <div className="text-5xl mb-2">🌧️ ☔ ⛅</div>
                  <h3 className="text-base font-bold text-teal-300">滯留鋒 (Stationary Front)</h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-sm">
                    冷暖氣團勢力相當、移動緩慢！五、六月為臺灣帶來連續陰雨連綿的「梅雨季」！
                  </p>
                </div>
              )}
            </div>

            {/* Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'high_pressure', label: '☀️ 高氣壓 (晴朗)' },
                { id: 'low_pressure', label: '🌧️ 低氣壓 (陰雨)' },
                { id: 'cold_front', label: '❄️ 冷鋒面 (驟冷驟雨)' },
                { id: 'stationary_front', label: '☔ 滯留鋒 (梅雨)' }
              ].map(m => (
                <button
                  key={m.id}
                  onClick={() => {
                    setWeatherMode(m.id);
                    playSound('lab_interact');
                  }}
                  className={`btn-pill text-xs justify-center font-bold py-2 ${weatherMode === m.id ? 'active' : ''}`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* LAB 6: Speed Race & Chase Simulation */}
        {/* ========================================================================= */}
        {selectedLabId === 'speed-race' && (
          <div className="flex flex-col gap-6 animate-fade-in">
            {/* Race Track Canvas */}
            <div 
              className="p-6 rounded-2xl flex flex-col justify-center bg-slate-900/40 border border-slate-700/40"
              style={{ minHeight: '220px' }}
            >
              {/* Runner A (Chaser) Track */}
              <div className="mb-4">
                <div className="flex justify-between text-xs font-bold text-blue-400 mb-1">
                  <span>🏃 追趕者 A (速率：{speedA} m/s)</span>
                  <span>位置：{Math.round(speedA * (raceProgress / 100) * 10)} m</span>
                </div>
                <div className="w-full bg-slate-800 h-6 rounded-full relative overflow-hidden border border-slate-700">
                  <div
                    className="absolute top-0 bottom-0 flex items-center justify-end pr-1 text-base transition-all"
                    style={{ left: `${Math.min(95, (raceProgress * (speedA / 10)))}%` }}
                  >
                    🏃
                  </div>
                </div>
              </div>

              {/* Runner B (Headstarter) Track */}
              <div>
                <div className="flex justify-between text-xs font-bold text-pink-400 mb-1">
                  <span>🚶 領先者 B (速率：{speedB} m/s，領先 {headStart} m)</span>
                  <span>位置：{Math.round(headStart + speedB * (raceProgress / 100) * 10)} m</span>
                </div>
                <div className="w-full bg-slate-800 h-6 rounded-full relative overflow-hidden border border-slate-700">
                  <div
                    className="absolute top-0 bottom-0 flex items-center justify-end pr-1 text-base transition-all"
                    style={{ left: `${Math.min(95, 20 + (raceProgress * (speedB / 10)))}%` }}
                  >
                    🚶
                  </div>
                </div>
              </div>

              {/* Calculation Breakdown */}
              <div className="mt-4 p-3 rounded-xl bg-slate-800 text-xs text-center text-slate-200">
                {speedA > speedB ? (
                  <span>
                    💡 速率差 $= {speedA} - {speedB} = {speedA - speedB}$ m/s。追趕時間 $= {headStart} \div {speedA - speedB} =$ {' '}
                    <strong className="text-emerald-400 font-black text-sm">
                      {Math.round((headStart / (speedA - speedB)) * 10) / 10} 秒相遇！
                    </strong>
                  </span>
                ) : (
                  <span className="text-red-400 font-bold">
                    ⚠️ 追趕者速率未大於領先者，將永遠追不上！請調高跑者 A 的速率！
                  </span>
                )}
              </div>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="card p-3 rounded-xl bg-blue-500/10 border border-blue-400/30">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>跑者 A 速率：</span>
                  <span>{speedA} m/s</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="15"
                  value={speedA}
                  onChange={(e) => setSpeedA(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
              </div>

              <div className="card p-3 rounded-xl bg-pink-500/10 border border-pink-400/30">
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>跑者 B 速率：</span>
                  <span>{speedB} m/s</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="10"
                  value={speedB}
                  onChange={(e) => setSpeedB(Number(e.target.value))}
                  className="w-full accent-pink-500"
                />
              </div>

              <div className="flex items-center justify-center">
                <button
                  onClick={() => {
                    setRaceProgress(0);
                    setIsRacing(true);
                    playSound('levelup');
                  }}
                  disabled={isRacing || speedA <= speedB}
                  className="btn-primary w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 bg-emerald-600 border-emerald-600 text-white disabled:opacity-40"
                >
                  <Play size={16} /> 開始追趕模擬賽跑！
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveLabsPage;
