import { useState } from 'react';
import { 
  Zap, ArrowRight, RotateCcw, Sparkles, 
  HelpCircle, Eye, Compass, Move, CheckCircle2 
} from 'lucide-react';
import { playSound } from '../../utils/soundEffects';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🧮 1. 數線正負走步與相反數/絕對值直觀器 (Number Line Simulator)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const NumberLineSimulator = () => {
  const [pointA, setPointA] = useState(-3);
  const [pointB, setPointB] = useState(4);
  const [mode, setMode] = useState('opposite'); // 'opposite' | 'distance' | 'walker'
  const [walkStart, setWalkStart] = useState(2);
  const [walkSteps, setWalkSteps] = useState(-5);

  const minVal = -10;
  const maxVal = 10;
  const totalRange = maxVal - minVal;

  const toPercent = (val) => ((val - minVal) / totalRange) * 100;

  const oppositeA = -pointA;
  const distanceAB = Math.abs(pointB - pointA);
  const walkResult = walkStart + walkSteps;

  return (
    <div className="card p-5 border shadow-sm rounded-2xl space-y-4" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-light)' }}>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-black">
            🧮
          </div>
          <div>
            <h3 className="text-base font-bold text-primary">數線正負運算與絕對值走步機</h3>
            <p className="text-xs text-secondary">直觀掌握「相反數鏡像對稱」與「數線幾何距離」</p>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="flex gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold">
          <button
            onClick={() => { setMode('opposite'); playSound('click'); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${mode === 'opposite' ? 'bg-blue-600 text-white shadow-sm' : 'text-secondary hover:text-primary'}`}
          >
            相反數鏡像
          </button>
          <button
            onClick={() => { setMode('distance'); playSound('click'); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${mode === 'distance' ? 'bg-blue-600 text-white shadow-sm' : 'text-secondary hover:text-primary'}`}
          >
            絕對值與距離
          </button>
          <button
            onClick={() => { setMode('walker'); playSound('click'); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${mode === 'walker' ? 'bg-blue-600 text-white shadow-sm' : 'text-secondary hover:text-primary'}`}
          >
            正負走步運算
          </button>
        </div>
      </div>

      {/* Visual Number Line Canvas */}
      <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 relative select-none">
        {/* Number line axis */}
        <div className="relative h-14 flex items-center">
          {/* Main Axis Line */}
          <div className="w-full h-1 bg-slate-400 dark:bg-slate-600 rounded-full relative">
            {/* Left arrow */}
            <div className="absolute -left-2 -top-1.5 border-t-4 border-b-4 border-r-8 border-t-transparent border-b-transparent border-r-slate-400 dark:border-r-slate-600" />
            {/* Right arrow (Positive direction) */}
            <div className="absolute -right-2 -top-1.5 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-slate-400 dark:border-l-slate-600" />
          </div>

          {/* Scale ticks */}
          {Array.from({ length: 21 }, (_, i) => i - 10).map((n) => {
            const pct = toPercent(n);
            const isZero = n === 0;
            return (
              <div
                key={n}
                className="absolute flex flex-col items-center"
                style={{ left: `${pct}%`, transform: 'translateX(-50%)' }}
              >
                <div
                  className={`w-0.5 ${isZero ? 'h-5 bg-rose-500 font-bold' : n % 5 === 0 ? 'h-3.5 bg-slate-600 dark:bg-slate-400' : 'h-2 bg-slate-300 dark:bg-slate-700'}`}
                />
                <span
                  className={`text-[10px] mt-1 ${isZero ? 'text-rose-600 dark:text-rose-400 font-black text-xs' : n % 5 === 0 ? 'font-bold text-secondary' : 'text-slate-400 dark:text-slate-600'}`}
                >
                  {n}
                </span>
              </div>
            );
          })}

          {/* Render markers depending on Mode */}
          {mode === 'opposite' && (
            <>
              {/* Point A marker */}
              <div
                className="absolute -top-7 flex flex-col items-center transition-all duration-300"
                style={{ left: `${toPercent(pointA)}%`, transform: 'translateX(-50%)' }}
              >
                <div className="bg-blue-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-md">
                  A({pointA})
                </div>
                <div className="w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow mt-1 animate-pulse" />
              </div>

              {/* Point -A opposite marker */}
              <div
                className="absolute -top-7 flex flex-col items-center transition-all duration-300"
                style={{ left: `${toPercent(oppositeA)}%`, transform: 'translateX(-50%)' }}
              >
                <div className="bg-emerald-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-md">
                  -A({oppositeA})
                </div>
                <div className="w-3 h-3 bg-emerald-600 rounded-full border-2 border-white shadow mt-1" />
              </div>
            </>
          )}

          {mode === 'distance' && (
            <>
              {/* Range bar between A and B */}
              <div
                className="absolute h-2.5 bg-amber-400/40 dark:bg-amber-500/30 rounded-full transition-all duration-300"
                style={{
                  left: `${toPercent(Math.min(pointA, pointB))}%`,
                  width: `${Math.abs(toPercent(pointB) - toPercent(pointA))}%`
                }}
              />
              {/* Point A marker */}
              <div
                className="absolute -top-7 flex flex-col items-center transition-all duration-300"
                style={{ left: `${toPercent(pointA)}%`, transform: 'translateX(-50%)' }}
              >
                <div className="bg-indigo-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-md">
                  A({pointA})
                </div>
                <div className="w-3 h-3 bg-indigo-600 rounded-full border-2 border-white shadow mt-1" />
              </div>
              {/* Point B marker */}
              <div
                className="absolute -top-7 flex flex-col items-center transition-all duration-300"
                style={{ left: `${toPercent(pointB)}%`, transform: 'translateX(-50%)' }}
              >
                <div className="bg-amber-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-md">
                  B({pointB})
                </div>
                <div className="w-3 h-3 bg-amber-600 rounded-full border-2 border-white shadow mt-1" />
              </div>
            </>
          )}

          {mode === 'walker' && (
            <>
              {/* Walk arc / vector */}
              <div
                className="absolute -top-6 flex flex-col items-center transition-all duration-300"
                style={{ left: `${toPercent(walkResult)}%`, transform: 'translateX(-50%)' }}
              >
                <div className="bg-purple-600 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-lg flex items-center gap-1">
                  <span>終點: {walkResult}</span>
                </div>
                <div className="text-xl">🏃</div>
              </div>
              {/* Start point */}
              <div
                className="absolute -bottom-7 flex flex-col items-center"
                style={{ left: `${toPercent(walkStart)}%`, transform: 'translateX(-50%)' }}
              >
                <div className="w-2.5 h-2.5 bg-slate-500 rounded-full" />
                <span className="text-[10px] text-secondary font-bold">起點({walkStart})</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Control sliders & Dynamic Results */}
      {mode === 'opposite' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-bold">
              <span>設定點 A 坐標：</span>
              <span className="text-blue-600 dark:text-blue-400 font-mono text-sm">{pointA}</span>
            </div>
            <input
              type="range"
              min={-10}
              max={10}
              value={pointA}
              onChange={(e) => setPointA(parseInt(e.target.value, 10))}
              className="w-full accent-blue-600"
            />
          </div>
          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 text-xs space-y-1">
            <div className="font-bold text-blue-700 dark:text-blue-300">💡 鏡像相反數原理：</div>
            <p className="text-secondary">
              點 A 坐標為 <strong className="text-blue-600 font-mono">{pointA}</strong>，其相反數為 <strong className="text-emerald-600 font-mono">{oppositeA}</strong>。
              兩者與原點 0 的距離皆為 <strong className="font-mono">|{pointA}| = {Math.abs(pointA)}</strong>。
              且滿足：<span className="font-mono font-bold">({pointA}) + ({oppositeA}) = 0</span>。
            </p>
          </div>
        </div>
      )}

      {mode === 'distance' && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>設定點 A 坐標：</span>
                <span className="text-indigo-600 font-mono text-sm">{pointA}</span>
              </div>
              <input
                type="range"
                min={-10}
                max={10}
                value={pointA}
                onChange={(e) => setPointA(parseInt(e.target.value, 10))}
                className="w-full accent-indigo-600"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>設定點 B 坐標：</span>
                <span className="text-amber-600 font-mono text-sm">{pointB}</span>
              </div>
              <input
                type="range"
                min={-10}
                max={10}
                value={pointB}
                onChange={(e) => setPointB(parseInt(e.target.value, 10))}
                className="w-full accent-amber-600"
              />
            </div>
          </div>
          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-xs flex justify-between items-center flex-wrap gap-2">
            <div>
              <strong className="text-amber-800 dark:text-amber-300">幾何距離公式：</strong>
              <span className="font-mono ml-2">AB = |A - B| = |({pointA}) - ({pointB})| = |{pointA - pointB}| = </span>
              <strong className="text-amber-600 dark:text-amber-400 font-mono text-sm">{distanceAB}</strong>
            </div>
            <div className="text-secondary text-[11px]">
              中點坐標 M = (A + B) / 2 = <strong className="font-mono">{((pointA + pointB) / 2).toFixed(1)}</strong>
            </div>
          </div>
        </div>
      )}

      {mode === 'walker' && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>起點 (Start)：</span>
                <span className="text-purple-600 font-mono text-sm">{walkStart}</span>
              </div>
              <input
                type="range"
                min={-5}
                max={5}
                value={walkStart}
                onChange={(e) => setWalkStart(parseInt(e.target.value, 10))}
                className="w-full accent-purple-600"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>位移步數 (Steps)：</span>
                <span className="text-purple-600 font-mono text-sm">{walkSteps > 0 ? `+${walkSteps}` : walkSteps}</span>
              </div>
              <input
                type="range"
                min={-8}
                max={8}
                value={walkSteps}
                onChange={(e) => setWalkSteps(parseInt(e.target.value, 10))}
                className="w-full accent-purple-600"
              />
            </div>
          </div>
          <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900 text-xs">
            <div className="font-bold text-purple-700 dark:text-purple-300 mb-1">🏃 動態算式直觀推演：</div>
            <p className="font-mono text-sm text-primary font-bold">
              ({walkStart}) {walkSteps >= 0 ? `+ (+${walkSteps})` : `+ (${walkSteps})`} = {walkResult}
            </p>
            <p className="text-secondary text-[11px] mt-1">
              {walkSteps >= 0 
                ? `從起點 ${walkStart} 向正向（右）走 ${walkSteps} 步，到達 ${walkResult}` 
                : `從起點 ${walkStart} 向負向（左）走 ${Math.abs(walkSteps)} 步，到達 ${walkResult}`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🔤 2. 英語時態時光機 (English Tense Time Machine)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const EnglishTenseTimeMachine = () => {
  const [tense, setTense] = useState('present'); // 'present' | 'continuous' | 'past' | 'future'
  const [subject, setSubject] = useState('He'); // 'I' | 'You' | 'He' | 'They'
  const [verbKey, setVerbKey] = useState('play'); // 'play' | 'watch' | 'study' | 'go'

  const verbDict = {
    play: { base: 'play', s: 'plays', ing: 'playing', past: 'played', obj: 'basketball' },
    watch: { base: 'watch', s: 'watches', ing: 'watching', past: 'watched', obj: 'television' },
    study: { base: 'study', s: 'studies', ing: 'studying', past: 'studied', obj: 'English' },
    go: { base: 'go', s: 'goes', ing: 'going', past: 'went', obj: 'to school' }
  };

  const verb = verbDict[verbKey];
  const isThirdSingular = subject === 'He' || subject === 'She';

  // Generate Sentence
  let verbPhrase = '';
  let timeAdverb = '';
  let explanation = '';

  switch (tense) {
    case 'present':
      verbPhrase = isThirdSingular ? verb.s : verb.base;
      timeAdverb = 'every afternoon';
      explanation = isThirdSingular 
        ? `主詞為第三人稱單數 (${subject})，一般動詞現在式需加 -s 或 -es ➔ ${verb.s}`
        : `主詞為 ${subject}，一般動詞現在式保持「原形動詞」➔ ${verb.base}`;
      break;
    case 'continuous':
      const beVerb = subject === 'I' ? 'am' : isThirdSingular ? 'is' : 'are';
      verbPhrase = `${beVerb} ${verb.ing}`;
      timeAdverb = 'right now';
      explanation = `現在進行式公式：主詞 + [${beVerb}] + [${verb.ing}]，表此時此刻正在進行的動作。`;
      break;
    case 'past':
      verbPhrase = verb.past;
      timeAdverb = 'yesterday';
      explanation = `過去簡單式：動作在過去特定時間已完成，動詞使用過去式 ➔ ${verb.past}。`;
      break;
    case 'future':
      verbPhrase = `will ${verb.base}`;
      timeAdverb = 'tomorrow';
      explanation = `未來式：助動詞 will 後面「一律接原形動詞」➔ will ${verb.base}。`;
      break;
    default:
      break;
  }

  return (
    <div className="card p-5 border shadow-sm rounded-2xl space-y-4" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-light)' }}>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 font-black">
            ⏳
          </div>
          <div>
            <h3 className="text-base font-bold text-primary">英語動詞時態時光機</h3>
            <p className="text-xs text-secondary">動態拉動時態軸，搞懂三單 -s 規則與四核心時態轉換</p>
          </div>
        </div>

        {/* Tense Timeline Buttons */}
        <div className="flex gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold">
          <button
            onClick={() => { setTense('past'); playSound('click'); }}
            className={`px-2.5 py-1.5 rounded-lg transition-all ${tense === 'past' ? 'bg-purple-600 text-white shadow-sm' : 'text-secondary hover:text-primary'}`}
          >
            ⏪ 過去式
          </button>
          <button
            onClick={() => { setTense('present'); playSound('click'); }}
            className={`px-2.5 py-1.5 rounded-lg transition-all ${tense === 'present' ? 'bg-purple-600 text-white shadow-sm' : 'text-secondary hover:text-primary'}`}
          >
            ⏹️ 現在式
          </button>
          <button
            onClick={() => { setTense('continuous'); playSound('click'); }}
            className={`px-2.5 py-1.5 rounded-lg transition-all ${tense === 'continuous' ? 'bg-purple-600 text-white shadow-sm' : 'text-secondary hover:text-primary'}`}
          >
            ▶️ 進行式
          </button>
          <button
            onClick={() => { setTense('future'); playSound('click'); }}
            className={`px-2.5 py-1.5 rounded-lg transition-all ${tense === 'future' ? 'bg-purple-600 text-white shadow-sm' : 'text-secondary hover:text-primary'}`}
          >
            ⏩ 未來式
          </button>
        </div>
      </div>

      {/* Selectors */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-[11px] font-bold text-secondary mb-1 block">選擇主詞 (Subject)：</label>
          <div className="flex gap-1">
            {['I', 'You', 'He', 'They'].map((sub) => (
              <button
                key={sub}
                onClick={() => { setSubject(sub); playSound('click'); }}
                className={`flex-1 py-1 text-xs rounded-lg font-bold border transition-all ${subject === sub ? 'bg-purple-100 dark:bg-purple-900/50 border-purple-500 text-purple-700 dark:text-purple-300' : 'border-slate-200 dark:border-slate-700 text-secondary'}`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-[11px] font-bold text-secondary mb-1 block">選擇動詞 (Verb)：</label>
          <div className="flex gap-1">
            {[
              { id: 'play', label: 'play' },
              { id: 'watch', label: 'watch(+es)' },
              { id: 'study', label: 'study(ies)' },
              { id: 'go', label: 'go(went)' }
            ].map((v) => (
              <button
                key={v.id}
                onClick={() => { setVerbKey(v.id); playSound('click'); }}
                className={`flex-1 py-1 text-xs rounded-lg font-bold border transition-all ${verbKey === v.id ? 'bg-purple-100 dark:bg-purple-900/50 border-purple-500 text-purple-700 dark:text-purple-300' : 'border-slate-200 dark:border-slate-700 text-secondary'}`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Output Sentence Card */}
      <div className="p-4 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 space-y-2">
        <div className="text-xs text-purple-600 dark:text-purple-400 font-bold flex items-center gap-1.5">
          <Sparkles size={14} /> 即時時態句型生成：
        </div>
        <div className="text-base sm:text-lg font-bold text-primary font-mono tracking-wide">
          <span className="text-blue-600 dark:text-blue-400">{subject}</span>{' '}
          <span className="text-purple-600 dark:text-purple-400 underline underline-offset-4 decoration-2 decoration-purple-500 font-black">
            {verbPhrase}
          </span>{' '}
          <span>{verb.obj}</span>{' '}
          <span className="text-emerald-600 dark:text-emerald-400">{timeAdverb}</span>.
        </div>
        <div className="text-xs text-secondary leading-relaxed pt-2 border-t border-purple-100 dark:border-purple-900">
          💡 <strong>名師語法解析：</strong> {explanation}
        </div>
      </div>
    </div>
  );
};


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🔬 3. 光學顯微鏡虛擬實驗室 (Virtual Microscope Lab)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const VirtualMicroscopeLab = () => {
  const [mag, setMag] = useState('low'); // 'low' (100X) | 'high' (400X)
  const [posX, setPosX] = useState(15); // slide position offsets
  const [posY, setPosY] = useState(15);
  const [focus, setFocus] = useState(85); // 0~100, 100 is sharpest
  const [brightness, setBrightness] = useState(80);

  // Inverted optical rule: when slide moves X, view moves -X
  const viewX = -posX;
  const viewY = -posY;

  const handleMove = (dx, dy) => {
    setPosX((prev) => Math.max(-40, Math.min(40, prev + dx)));
    setPosY((prev) => Math.max(-40, Math.min(40, prev + dy)));
    playSound('click');
  };

  const isCentered = Math.abs(viewX) < 12 && Math.abs(viewY) < 12;

  return (
    <div className="card p-5 border shadow-sm rounded-2xl space-y-4" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-light)' }}>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 font-black">
            🔬
          </div>
          <div>
            <h3 className="text-base font-bold text-primary">光學顯微鏡虛擬操作台</h3>
            <p className="text-xs text-secondary">親身體驗「上下顛倒左右相反」與高低倍鏡光學特徵</p>
          </div>
        </div>

        {/* Magnification Switch */}
        <div className="flex gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold">
          <button
            onClick={() => { setMag('low'); playSound('click'); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${mag === 'low' ? 'bg-emerald-600 text-white shadow-sm' : 'text-secondary hover:text-primary'}`}
          >
            低倍鏡 (100X)
          </button>
          <button
            onClick={() => { setMag('high'); playSound('click'); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${mag === 'high' ? 'bg-emerald-600 text-white shadow-sm' : 'text-secondary hover:text-primary'}`}
          >
            高倍鏡 (400X)
          </button>
        </div>
      </div>

      {/* Main Lab View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        {/* Eyepiece Circular Viewport */}
        <div className="flex flex-col items-center">
          <div className="relative w-56 h-56 rounded-full overflow-hidden border-8 border-slate-800 dark:border-slate-700 shadow-inner bg-slate-900 flex items-center justify-center">
            {/* Specimen Field */}
            <div
              className="absolute transition-transform duration-200"
              style={{
                transform: `translate(${viewX}px, ${viewY}px) scale(${mag === 'high' ? 2.5 : 1})`,
                filter: `blur(${Math.max(0, (100 - focus) / 15)}px) brightness(${mag === 'high' ? brightness * 0.75 : brightness}%)`
              }}
            >
              {/* Onion Cell Grid Mockup */}
              <div className="grid grid-cols-4 gap-1 w-64 h-64 p-4 border border-emerald-500/40 bg-emerald-950/20 rounded">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-emerald-400/60 rounded-sm p-1 flex items-center justify-center relative bg-emerald-800/20 text-[8px] text-emerald-300 font-mono"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-300/80 border border-emerald-200" />
                    {i === 5 && <span className="absolute text-[9px] -top-1 font-bold text-amber-300">d</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Crosshairs Overlay */}
            <div className="pointer-events-none absolute w-full h-[1px] bg-red-500/30" />
            <div className="pointer-events-none absolute h-full w-[1px] bg-red-500/30" />
          </div>

          <div className="text-[11px] text-secondary mt-2 flex items-center gap-1">
            <Eye size={13} />
            <span>目鏡視野視角（倒立放大虛像）</span>
            {isCentered && (
              <span className="text-emerald-600 font-bold ml-1 flex items-center gap-0.5">
                <CheckCircle2 size={12} /> 已居中！
              </span>
            )}
          </div>
        </div>

        {/* Stage Controls & Rule Callouts */}
        <div className="space-y-4">
          {/* Movement Controller */}
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <div className="text-xs font-bold text-primary mb-2 flex items-center gap-1">
              <Move size={14} className="text-emerald-600" /> 載玻片實體移動控制盤：
            </div>
            <div className="flex flex-col items-center gap-1">
              <button
                onClick={() => handleMove(0, -10)}
                className="btn-outline px-3 py-1 text-xs rounded-lg font-bold"
                title="載玻片向上推"
              >
                ▲ 玻片往上推 (像往下跑)
              </button>
              <div className="flex gap-3">
                <button
                  onClick={() => handleMove(-10, 0)}
                  className="btn-outline px-3 py-1 text-xs rounded-lg font-bold"
                  title="載玻片向左推"
                >
                  ◀ 玻片往左 (像往右)
                </button>
                <button
                  onClick={() => { setPosX(0); setPosY(0); playSound('click'); }}
                  className="btn-outline px-2 py-1 text-xs rounded-lg"
                  title="復位"
                >
                  <RotateCcw size={12} />
                </button>
                <button
                  onClick={() => handleMove(10, 0)}
                  className="btn-outline px-3 py-1 text-xs rounded-lg font-bold"
                  title="載玻片向右推"
                >
                  玻片往右 (像往左) ▶
                </button>
              </div>
              <button
                onClick={() => handleMove(0, 10)}
                className="btn-outline px-3 py-1 text-xs rounded-lg font-bold"
                title="載玻片向下推"
              >
                ▼ 玻片往下推 (像往上跑)
              </button>
            </div>
          </div>

          {/* Focus & Brightness Adjustments */}
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs font-bold">
                <span>調節輪調焦清晰度 (Fine Focus)：</span>
                <span className="font-mono text-emerald-600">{focus}%</span>
              </div>
              <input
                type="range"
                min={30}
                max={100}
                value={focus}
                onChange={(e) => setFocus(parseInt(e.target.value, 10))}
                className="w-full accent-emerald-600"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold">
                <span>光圈亮度調節 (Aperture / Brightness)：</span>
                <span className="font-mono text-emerald-600">{brightness}%</span>
              </div>
              <input
                type="range"
                min={40}
                max={120}
                value={brightness}
                onChange={(e) => setBrightness(parseInt(e.target.value, 10))}
                className="w-full accent-emerald-600"
              />
            </div>
          </div>

          {/* Golden Rule Memo */}
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-xs space-y-1">
            <div className="font-bold text-emerald-800 dark:text-emerald-300">★ 國一段考必考兩大鐵律：</div>
            <p className="text-secondary leading-relaxed">
              1. <strong>物在哪裡，往哪裡移：</strong>若洋蔥細胞偏在視野左方，將載玻片向「左方」推動即可移至中央！<br />
              2. <strong>低倍換高倍：</strong>視野變【暗】、範圍變【小】、細胞數變【少】、細胞變【大】！高倍鏡下【只能調細調節輪】！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
