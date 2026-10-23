import { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  RotateCcw, 
  Play, 
  Pause, 
  HelpCircle, 
  Zap, 
  CheckCircle2, 
  Volume2, 
  VolumeX, 
  Heart, 
  Clock, 
  Compass, 
  Palette, 
  BookOpen, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  Flame, 
  Award,
  Activity,
  Dumbbell,
  Moon,
  Dna,
  Droplets,
  Apple
} from 'lucide-react';
import { playSound, triggerHaptic, dispatchDynamicIsland } from '../../utils/soundEffects';
import { useGamification } from '../../context/GamificationContext';
import confetti from 'canvas-confetti';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📖 1. 國語：漢字六書拆解與造字魔法機 (Hanzi Six Scripts Lab)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const HanziSixScriptsLab = () => {
  const { addCoins, addXp } = useGamification();
  const [activeTab, setActiveTab] = useState('combiner'); // 'combiner' | 'explore' | 'quiz'
  
  // Combiner State
  const [selectedRadical, setSelectedRadical] = useState('氵');
  const [selectedPhonetic, setSelectedPhonetic] = useState('青');
  
  // Quiz State
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);

  const radicals = [
    { char: '氵', name: '三點水', meaning: '水流、液體', category: '形符' },
    { char: '日', name: '日字旁', meaning: '太陽、光亮、時間', category: '形符' },
    { char: '忄', name: '豎心旁', meaning: '心態、情感、思維', category: '形符' },
    { char: '言', name: '言字旁', meaning: '言語、說話、承諾', category: '形符' },
    { char: '虫', name: '虫字旁', meaning: '昆蟲、蟲類生物', category: '形符' },
    { char: '目', name: '目字旁', meaning: '眼睛、視覺看見', category: '形符' },
    { char: '木', name: '木字旁', meaning: '樹木、木材器具', category: '形符' },
    { char: '口', name: '口字旁', meaning: '嘴巴、發聲動作', category: '形符' }
  ];

  const phonetics = [
    { char: '青', sound: 'qīng / ㄑㄧㄥ', meaning: '深綠色或藍色' },
    { char: '侖', sound: 'lún / ㄌㄨㄣˊ', meaning: '條理、次序' },
    { char: '寺', sound: 'sì / ㄙˋ', meaning: '法度、官署' },
    { char: '丁', sound: 'dīng / ㄉㄧㄥ', meaning: '堅定、成年男子' }
  ];

  // Character Combinations Database
  const combos = {
    '氵-青': { char: '清', pinyin: 'qīng / ㄑㄧㄥ', explanation: '氵(形，表清澈水流) + 青(聲，表音)。水流澄澈無雜質曰「清」。' },
    '日-青': { char: '晴', pinyin: 'qíng / ㄑㄧㄥˊ', explanation: '日(形，表陽光高照) + 青(聲，表音)。雨過天青、萬里無雲曰「晴」。' },
    '忄-青': { char: '情', pinyin: 'qíng / ㄑㄧㄥˊ', explanation: '忄(形，表內心情感) + 青(聲，表音)。喜怒哀樂在心頭曰「情」。' },
    '言-青': { char: '請', pinyin: 'qǐng / ㄑㄧㄥˇ', explanation: '言(形，表言語請求) + 青(聲，表音)。以禮發言懇求他人曰「請」。' },
    '虫-青': { char: '蜻', pinyin: 'qīng / ㄑㄧㄥ', explanation: '虫(形，表昆蟲家族) + 青(聲，表音)。蜻蜓昆蟲曰「蜻」。' },
    '目-青': { char: '睛', pinyin: 'jīng / ㄐㄧㄥ', explanation: '目(形，表眼球視覺) + 青(聲，表音)。眼珠靈動視物曰「睛」。' },
    '木-青': { char: '棈', pinyin: 'qiàn / ㄑㄧㄢˋ', explanation: '木(形，表樹種) + 青(聲，表音)。古書所載之一種青色樹木。' },
    '口-青': { char: '埥', pinyin: 'zhēng / ㄓㄥ', explanation: '口(形，表發聲動態) + 青(聲，表音)。清脆響亮之古音。' },

    '氵-侖': { char: '淪', pinyin: 'lún / ㄌㄨㄣˊ', explanation: '氵(形，水波) + 侖(聲)。微波盪漾，引申為淪陷、沉淪。' },
    '日-侖': { char: '倫', pinyin: 'lún / ㄌㄨㄣˊ', explanation: '日(形，陽光) + 侖(聲)。光輝燦爛照耀之意。' },
    '言-侖': { char: '論', pinyin: 'lùn / ㄌㄨㄣˋ', explanation: '言(形，言語) + 侖(聲)。條理分明地探討辨析曰「論」。' },
    '亻-侖': { char: '倫', pinyin: 'lún / ㄌㄨㄣˊ', explanation: '人(形，人際) + 侖(聲)。人與人間的次序倫理曰「倫」。' },

    '氵-寺': { char: '洔', pinyin: 'zhǐ / ㄓˇ', explanation: '氵(形，水流) + 寺(聲)。水中小洲或水流止歇處。' },
    '日-寺': { char: '時', pinyin: 'shí / ㄕˊ', explanation: '日(形，太陽運行) + 寺(聲)。歲月流轉、日月交替為「時」。' },
    '言-寺': { char: '詩', pinyin: 'shī / ㄕ', explanation: '言(形，言語意境) + 寺(聲)。詩者志之所之也，用最精粹語言抒懷為「詩」。' },
    '忄-寺': { char: '恃', pinyin: 'shì / ㄕˋ', explanation: '忄(形，心中所依) + 寺(聲)。心有所憑仗、依託曰「恃」。' },

    '氵-丁': { char: '汀', pinyin: 'tīng / ㄊㄧㄥ', explanation: '氵(形，水邊) + 丁(聲)。水邊平坦之沙洲綠草曰「汀」。' },
    '木-丁': { char: '釘', pinyin: 'dīng / ㄉㄧㄥ', explanation: '金/木(形，工具) + 丁(聲)。固定木板之敲擊器具曰「釘」。' },
    '口-丁': { char: '叮', pinyin: 'dīng / ㄉㄧㄥ', explanation: '口(形，言語提醒) + 丁(聲)。再三告誡叮嚀為「叮」。' },
    '目-丁': { char: '盯', pinyin: 'dīng / ㄉㄧㄥ', explanation: '目(形，眼光專注) + 丁(聲)。眼睛全神貫注注視曰「盯」。' }
  };

  const comboKey = `${selectedRadical}-${selectedPhonetic}`;
  const currentCombo = combos[comboKey] || {
    char: `${selectedRadical}${selectedPhonetic}`,
    pinyin: '——',
    explanation: `形符【${selectedRadical}】代表事物的類別意義，聲符【${selectedPhonetic}】提示發音。兩者結合構成了標準的形聲字結構！`
  };

  const quizQuestions = [
    {
      char: '休',
      question: '「人」倚靠在「木 (樹木)」旁邊休息，合併兩字意義產生新字，屬於六書中的哪一種？',
      options: ['象形', '指事', '會意', '形聲'],
      answerIdx: 2,
      analysis: '「休」由人與木組合，取「人倚樹休息」之意，是典型的「會合其意」之「會意字」！'
    },
    {
      char: '刃',
      question: '在「刀」的刀鋒處加上一點特殊符號，指出刀口位置所在，屬於六書中的哪一種？',
      options: ['象形', '指事', '會意', '形聲'],
      answerIdx: 1,
      analysis: '「刃」在象形字刀上加上指示符號標明刀鋒，屬於「指事字」！'
    },
    {
      char: '湖',
      question: '「湖」字左邊「氵」代表水流類別，右邊「胡」代表讀音，屬於六書中的哪一種？',
      options: ['象形', '指事', '會意', '形聲'],
      answerIdx: 3,
      analysis: '一半表義(氵)、一半表音(胡)，屬於占漢字 80% 以上的「形聲字」！'
    },
    {
      char: '日',
      question: '古人依據太陽圓輪的具體外形輪廓描摹成字，屬於六書中的哪一種？',
      options: ['象形', '指事', '會意', '形聲'],
      answerIdx: 0,
      analysis: '「畫成其物，隨體詰詘」直接臨摹客觀物體輪廓，是獨體之「象形字」！'
    }
  ];

  const handleQuizAnswer = (idx) => {
    if (quizAnswered) return;
    setSelectedChoice(idx);
    setQuizAnswered(true);

    const isCorrect = idx === quizQuestions[quizIdx].answerIdx;
    if (isCorrect) {
      playSound('levelup');
      triggerHaptic('heavy');
      addCoins(20);
      addXp(30, 'hanzi_quiz');
      confetti({ particleCount: 45, spread: 60, origin: { y: 0.6 } });
    } else {
      playSound('wrong');
      triggerHaptic('error');
    }
  };

  return (
    <div className="flex flex-col gap-5 animate-fade-in text-slate-800 dark:text-slate-100">
      {/* Sub-navigation */}
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div className="flex gap-2">
          <button
            onClick={() => { setActiveTab('combiner'); playSound('click'); }}
            className={`btn-pill text-xs px-3.5 py-1.5 font-bold ${activeTab === 'combiner' ? 'active' : ''}`}
          >
            🧩 形聲字魔法拼裝機
          </button>
          <button
            onClick={() => { setActiveTab('explore'); playSound('click'); }}
            className={`btn-pill text-xs px-3.5 py-1.5 font-bold ${activeTab === 'explore' ? 'active' : ''}`}
          >
            📜 六書體系全景圖
          </button>
          <button
            onClick={() => { setActiveTab('quiz'); playSound('click'); }}
            className={`btn-pill text-xs px-3.5 py-1.5 font-bold ${activeTab === 'quiz' ? 'active' : ''}`}
          >
            🎯 六書辨析隨堂考
          </button>
        </div>
        <span className="text-xs text-secondary font-medium">108 課綱語文素養・造字原理</span>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: 形聲字魔法拼裝機 */}
      {/* ========================================================================= */}
      {activeTab === 'combiner' && (
        <div className="flex flex-col gap-4">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-rose-500/10 border border-amber-500/20 flex flex-col md:flex-row items-center justify-around gap-6">
            {/* Left Radical Selector */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-2">
                👈 選擇形符 (意義部首)
              </span>
              <div className="grid grid-cols-4 gap-2">
                {radicals.map(r => (
                  <button
                    key={r.char}
                    onClick={() => {
                      setSelectedRadical(r.char);
                      playSound('click');
                    }}
                    className={`w-11 h-11 rounded-xl font-serif text-xl font-black transition-all flex flex-col items-center justify-center ${
                      selectedRadical === r.char 
                        ? 'bg-amber-500 text-white shadow-lg scale-105' 
                        : 'bg-white/80 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-amber-400'
                    }`}
                  >
                    <span>{r.char}</span>
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-secondary mt-1.5">
                當前：{radicals.find(r => r.char === selectedRadical)?.meaning}
              </span>
            </div>

            {/* Plus Symbol */}
            <div className="text-3xl font-black text-amber-500 opacity-60 select-none">
              ＋
            </div>

            {/* Middle Phonetic Selector */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-orange-600 dark:text-orange-400 mb-2">
                👉 選擇聲符 (聲音來源)
              </span>
              <div className="grid grid-cols-2 gap-2">
                {phonetics.map(p => (
                  <button
                    key={p.char}
                    onClick={() => {
                      setSelectedPhonetic(p.char);
                      playSound('click');
                    }}
                    className={`px-4 py-2 rounded-xl font-serif text-lg font-black transition-all flex flex-col items-center justify-center ${
                      selectedPhonetic === p.char 
                        ? 'bg-orange-500 text-white shadow-lg scale-105' 
                        : 'bg-white/80 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-orange-400'
                    }`}
                  >
                    <span>{p.char}</span>
                    <span className="text-[9px] font-sans font-normal opacity-90">{p.sound}</span>
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-secondary mt-1.5">
                聲母韻母諧音借取
              </span>
            </div>

            {/* Equals Arrow */}
            <div className="text-3xl font-black text-emerald-500 opacity-60 select-none">
              ＝
            </div>

            {/* Result Character Card */}
            <div className="flex flex-col items-center p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-500/40 shadow-xl min-w-[150px] text-center animate-scale-in">
              <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1">
                生成漢字 (Result)
              </span>
              <div className="text-6xl font-black font-serif text-emerald-600 dark:text-emerald-400 my-1">
                {currentCombo.char}
              </div>
              <span className="text-xs font-mono font-bold text-slate-500 mt-1">
                {currentCombo.pinyin}
              </span>
            </div>
          </div>

          {/* Deep Insight Analysis */}
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-600 dark:text-amber-400">
              <Sparkles size={15} />
              <span>造字算理深度拆解：</span>
            </div>
            <p className="text-secondary leading-relaxed font-serif text-sm">
              {currentCombo.explanation}
            </p>
            <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-[11px] text-amber-900 dark:text-amber-200">
              💡 <strong>為什麼形聲字佔 80% 以上？</strong> 象形與指事能造的「具體物體」數量有限，但大腦中的概念無窮！透過「形符歸類事物 + 聲符借音表音」，古人只需幾百個部首就能組裝出數萬個精準漢字！
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: 六書體系全景圖 */}
      {/* ========================================================================= */}
      {activeTab === 'explore' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            {
              type: '象形 (Pictogram)',
              rule: '畫成其物，隨體詰詘',
              form: '獨體為「文」',
              desc: '依照客觀事物具體外形輪廓直接臨摹描繪。',
              examples: ['日 (太陽)', '月 (月牙)', '山 (三峰併立)', '水 (流水波紋)', '木 (上枝下根)'],
              color: 'border-amber-400/40 bg-amber-50/50 dark:bg-amber-950/20'
            },
            {
              type: '指事 (Ideogram)',
              rule: '視而可識，察而見意',
              form: '獨體為「文」',
              desc: '在象形字上加上抽象符號，或純符號表達空間方向與數量。',
              examples: ['刃 (刀上加點示刃)', '本 (木下加橫示樹根)', '末 (木上加橫示樹梢)', '上 / 下 (符號示方位)'],
              color: 'border-blue-400/40 bg-blue-50/50 dark:bg-blue-950/20'
            },
            {
              type: '會意 (Compound Ideograph)',
              rule: '比類合誼，以見指撝',
              form: '合體為「字」',
              desc: '組合兩個或多個漢字的「意義」，產生全新的抽象新意。',
              examples: ['休 (人倚木休息)', '森 (三木成大森林)', '武 (止戈平息戰爭)', '鳴 (鳥口啼叫)'],
              color: 'border-emerald-400/40 bg-emerald-50/50 dark:bg-emerald-950/20'
            },
            {
              type: '形聲 (Phono-semantic)',
              rule: '以事為名，取譬相成',
              form: '合體為「字」 (佔 80%+)',
              desc: '一半由形符提示事物類屬，一半由聲符提示讀音。',
              examples: ['江 (氵形 + 工聲)', '晴 (日形 + 青聲)', '芳 (艹形 + 方聲)', '騎 (馬形 + 奇聲)'],
              color: 'border-purple-400/40 bg-purple-50/50 dark:bg-purple-950/20'
            },
            {
              type: '轉注 (Mutually Explaining)',
              rule: '建類一首，同意相受',
              form: '用字之法 (非造新字)',
              desc: '同部首且意義相通之字，可以互相訓詁解釋。',
              examples: ['考與老 (皆有長者、壽高之意，同屬老部)', '頂與顛 (皆指頭部最頂端)'],
              color: 'border-rose-400/40 bg-rose-50/50 dark:bg-rose-950/20'
            },
            {
              type: '假借 (Phonetic Loan)',
              rule: '本無其字，依聲託事',
              form: '用字之法 (非造新字)',
              desc: '本來沒有這個詞的專用字，借用同音字來代表新含義。',
              examples: ['自 (本義為鼻子，借為自己之自)', '莫 (本義為太陽落入草叢之暮，借為副詞莫非)'],
              color: 'border-teal-400/40 bg-teal-50/50 dark:bg-teal-950/20'
            }
          ].map(s => (
            <div key={s.type} className={`card p-4 rounded-xl border ${s.color} flex flex-col justify-between`}>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-sm text-primary">{s.type}</h4>
                  <span className="badge badge-neutral text-[10px]">{s.form}</span>
                </div>
                <div className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-bold mb-1.5">
                  《說文》：「{s.rule}」
                </div>
                <p className="text-secondary text-xs leading-relaxed mb-3">
                  {s.desc}
                </p>
              </div>
              <div className="p-2 rounded-lg bg-white/70 dark:bg-slate-900/60 border border-light text-[11px] font-serif space-y-1">
                <span className="text-slate-500 font-sans block text-[10px]">經典字例：</span>
                <div className="flex flex-wrap gap-1.5">
                  {s.examples.map(ex => (
                    <span key={ex} className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-primary">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: 六書辨析隨堂考 */}
      {/* ========================================================================= */}
      {activeTab === 'quiz' && (
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center max-w-xl mx-auto w-full">
          <span className="badge badge-accent text-xs mb-2">
            第 {quizIdx + 1} / {quizQuestions.length} 題
          </span>
          <div className="text-5xl font-black font-serif text-amber-600 dark:text-amber-400 my-3 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300">
            {quizQuestions[quizIdx].char}
          </div>
          <h3 className="text-sm font-bold text-center mb-5 text-primary">
            {quizQuestions[quizIdx].question}
          </h3>

          <div className="grid grid-cols-2 gap-3 w-full mb-4">
            {quizQuestions[quizIdx].options.map((opt, idx) => {
              const isChosen = selectedChoice === idx;
              const isCorrect = idx === quizQuestions[quizIdx].answerIdx;
              return (
                <button
                  key={opt}
                  onClick={() => handleQuizAnswer(idx)}
                  disabled={quizAnswered}
                  className={`p-3 rounded-xl text-xs font-bold transition-all border ${
                    quizAnswered
                      ? isCorrect
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : isChosen
                          ? 'bg-rose-600 text-white border-rose-600'
                          : 'bg-slate-100 dark:bg-slate-800 opacity-60'
                      : 'bg-white dark:bg-slate-800 hover:border-amber-400 text-primary'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {quizAnswered && (
            <div className="p-3 rounded-xl bg-slate-200/80 dark:bg-slate-800 w-full text-xs animate-fade-in space-y-2">
              <div className="font-bold flex items-center gap-1.5">
                {selectedChoice === quizQuestions[quizIdx].answerIdx ? (
                  <span className="text-emerald-500 font-black">🎉 完全正確！(+20 🪙 +30 XP)</span>
                ) : (
                  <span className="text-rose-500 font-black">❌ 答錯囉！請看解析：</span>
                )}
              </div>
              <p className="text-secondary">{quizQuestions[quizIdx].analysis}</p>
              <button
                onClick={() => {
                  setQuizIdx((prev) => (prev + 1) % quizQuestions.length);
                  setQuizAnswered(false);
                  setSelectedChoice(null);
                  playSound('click');
                }}
                className="btn-primary w-full py-2 text-xs font-bold rounded-lg mt-2"
              >
                下一題 ➔
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🏛️ 2. 社會：五院權力分立與制衡互動沙盤 (Five Powers Balance Lab)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const FivePowersSandbox = () => {
  const { addCoins, addXp } = useGamification();
  const [selectedBranch, setSelectedBranch] = useState('executive');
  const [activeCheckBalance, setActiveCheckBalance] = useState('reconsider');
  const [hasTriggeredCheck, setHasTriggeredCheck] = useState(false);

  const branches = [
    {
      id: 'executive',
      name: '行政院',
      leader: '行政院長 (閣揆)',
      role: '國家最高行政機關',
      power: '提出法律案、預算案、戒嚴案、大赦案；推動國家公共政策與建設。',
      color: '#3b82f6',
      icon: '🏢'
    },
    {
      id: 'legislative',
      name: '立法院',
      leader: '立法院長',
      role: '國家最高立法機關 (全體公民直選立法委員)',
      power: '議決法律案、預算案、戒嚴案、大赦案、宣戰案、條約案；對行政院進行質詢。',
      color: '#10b981',
      icon: '🏛️'
    },
    {
      id: 'judicial',
      name: '司法院',
      leader: '司法院長 (兼大法官)',
      role: '國家最高司法機關',
      power: '掌理民事、刑事、行政訴訟之審判及公務員之懲戒；憲法法庭大法官審理違憲審查。',
      color: '#8b5cf6',
      icon: '⚖️'
    },
    {
      id: 'examination',
      name: '考試院',
      leader: '考試院長',
      role: '國家最高考試機關',
      power: '掌理公務人員與專門職業人員之考選、銓敘、保障、撫卹、退休等。',
      color: '#f59e0b',
      icon: '📝'
    },
    {
      id: 'control',
      name: '監察院',
      leader: '監察院長 (兼國家人權委員會主委)',
      role: '國家最高監察機關',
      power: '行使彈劾權、糾舉權及審計權；設審計部掌理各級政府之審計決算。',
      color: '#ec4899',
      icon: '🔍'
    }
  ];

  const checksBalances = [
    {
      id: 'reconsider',
      title: '🔄 行政院 ➔ 立法院：提出「覆議案」',
      desc: '行政院對於立法院通過之法律案、預算案，若認為窒礙難行，得經【總統核可】移請立法院覆議。立法院若全體委員 1/2 以上維持原案，行政院長應即接受該決議。',
      from: '行政院',
      to: '立法院',
      arrow: 'executive ➔ legislative'
    },
    {
      id: 'no_confidence',
      title: '⚠️ 立法院 ➔ 行政院：提出「不信任案 (倒閣)」',
      desc: '立法院得對行政院長提出不信任案。若經全體委員 1/2 以上贊成通過，行政院長應於 10 日內提出辭職，並得同時呈請總統【解散立法院】進行國會重選！',
      from: '立法院',
      to: '行政院',
      arrow: 'legislative ➔ executive'
    },
    {
      id: 'judicial_review',
      title: '📜 司法院 ➔ 立法院：憲法法庭宣告「法律違憲」',
      desc: '司法院大法官組成憲法法庭，若審理認定立法院通過之法律牴觸中華民國憲法，大法官得判決宣告該法律違憲，並自判決宣告日起失效！',
      from: '司法院',
      to: '立法院',
      arrow: 'judicial ➔ legislative'
    },
    {
      id: 'impeachment',
      title: '⚖️ 監察院 ➔ 司法院：提出「彈劾案」移送懲戒',
      desc: '監察院對違法或失職之公務人員（包含政務官與事務官）行使彈劾權。彈劾成立後，移送司法院【懲戒法院】進行審理與判決處分！',
      from: '監察院',
      to: '司法院',
      arrow: 'control ➔ judicial'
    }
  ];

  const currentCheck = checksBalances.find(c => c.id === activeCheckBalance) || checksBalances[0];

  const triggerSimulation = (checkId) => {
    setActiveCheckBalance(checkId);
    playSound('levelup');
    triggerHaptic('medium');
    if (!hasTriggeredCheck) {
      setHasTriggeredCheck(true);
      addCoins(25);
      addXp(40, 'five_powers_sim');
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    }
  };

  return (
    <div className="flex flex-col gap-5 animate-fade-in text-slate-800 dark:text-slate-100">
      {/* Top Interactive Pentagram Map */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 border border-indigo-500/30 text-white shadow-2xl relative overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🏛️</span>
            <div>
              <h3 className="text-sm font-bold text-indigo-200">中華民國中央政府五院互動沙盤</h3>
              <p className="text-[11px] text-slate-400">點選各院或制衡機制，觀察國家權力相互約束與均衡！</p>
            </div>
          </div>
          <span className="badge badge-accent text-[11px] font-bold">
            孫中山五權憲法架構
          </span>
        </div>

        {/* 5 Branches Radial Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 my-4">
          {branches.map(b => {
            const isSelected = selectedBranch === b.id;
            return (
              <button
                key={b.id}
                onClick={() => {
                  setSelectedBranch(b.id);
                  playSound('click');
                }}
                className={`p-3 rounded-xl flex flex-col items-center text-center transition-all border ${
                  isSelected 
                    ? 'bg-white/20 border-white shadow-lg scale-105' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
                style={{ borderColor: isSelected ? b.color : undefined }}
              >
                <span className="text-2xl mb-1">{b.icon}</span>
                <span className="text-xs font-bold" style={{ color: b.color }}>
                  {b.name}
                </span>
                <span className="text-[10px] text-slate-400 scale-90">
                  {b.leader.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Highlight Card for Selected Branch */}
        {(() => {
          const b = branches.find(item => item.id === selectedBranch);
          return (
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs space-y-1.5 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm" style={{ color: b.color }}>
                  {b.icon} {b.name}（首長：{b.leader}）
                </span>
                <span className="text-[11px] text-slate-300 bg-white/10 px-2 py-0.5 rounded-full">
                  {b.role}
                </span>
              </div>
              <p className="text-slate-200 leading-relaxed">
                <strong>核心職權：</strong>{b.power}
              </p>
            </div>
          );
        })()}
      </div>

      {/* Checks and Balances Dynamic Triggers */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-secondary flex items-center gap-1">
            <Zap size={14} className="text-amber-500" />
            點擊觸發「院際權力制衡」動態事件：
          </span>
          <span className="text-[11px] text-tertiary">防止專制獨裁的民主安全閥</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {checksBalances.map(cb => {
            const isActive = activeCheckBalance === cb.id;
            return (
              <button
                key={cb.id}
                onClick={() => triggerSimulation(cb.id)}
                className={`p-3.5 rounded-xl text-left transition-all border flex flex-col justify-between ${
                  isActive 
                    ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500 shadow-md ring-1 ring-indigo-400' 
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                <span className="text-xs font-bold text-primary mb-1">
                  {cb.title}
                </span>
                <span className="text-[11px] text-secondary line-clamp-2">
                  {cb.desc}
                </span>
              </button>
            );
          })}
        </div>

        {/* Deep Constitutional Explanation */}
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 text-xs space-y-2">
          <div className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
            <ShieldCheck size={16} />
            <span>憲政焦點剖析：{currentCheck.title}</span>
          </div>
          <p className="text-secondary leading-relaxed">
            {currentCheck.desc}
          </p>
          <div className="text-[11px] text-amber-700 dark:text-amber-400 border-t border-amber-200 dark:border-amber-800 pt-1.5">
            💡 <strong>公民核心素養</strong>：民主政治的精髓不是單一機關說了算，而是「有權力必有制衡」。五院彼此監督、分工合作，保障全體國民的自由與權利！
          </div>
        </div>
      </div>
    </div>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎨 3. 藝術：12 色相環與光學/顏料色彩調色盤 (Color Wheel Mixer Lab)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const ColorWheelMixerLab = () => {
  const { addCoins, addXp } = useGamification();
  const [activeMode, setActiveMode] = useState('wheel'); // 'wheel' | 'rgb_light' | 'cmy_pigment'
  const [selectedHueIdx, setSelectedHueIdx] = useState(0);

  // RGB Sliders (加法混色)
  const [redLight, setRedLight] = useState(255);
  const [greenLight, setGreenLight] = useState(180);
  const [blueLight, setBlueLight] = useState(0);

  // CMY Sliders (減法混色)
  const [cyanPigment, setCyanPigment] = useState(80);
  const [magentaPigment, setMagentaPigment] = useState(20);
  const [yellowPigment, setYellowPigment] = useState(100);

  const hues = [
    { name: '紅 (Red)', hex: '#ef4444', deg: 0, temp: '暖色調', complement: '綠', mood: '熱情、警戒、活力' },
    { name: '紅橙 (Red-Orange)', hex: '#f97316', deg: 30, temp: '暖色調', complement: '藍綠', mood: '溫暖、豐收、親切' },
    { name: '橙 (Orange)', hex: '#fb923c', deg: 60, temp: '暖色調', complement: '藍', mood: '歡樂、美味、醒目' },
    { name: '黃橙 (Yellow-Orange)', hex: '#fbbf24', deg: 90, temp: '暖色調', complement: '藍紫', mood: '明朗、秋意、希望' },
    { name: '黃 (Yellow)', hex: '#facc15', deg: 120, temp: '暖色調', complement: '紫', mood: '光明、警示、快樂' },
    { name: '黃綠 (Yellow-Green)', hex: '#a3e635', deg: 150, temp: '中性偏暖', complement: '紅紫', mood: '萌芽、生機、青澀' },
    { name: '綠 (Green)', hex: '#22c55e', deg: 180, temp: '中性色', complement: '紅', mood: '自然、平靜、安全' },
    { name: '藍綠 (Blue-Green)', hex: '#14b8a6', deg: 210, temp: '冷色調', complement: '紅橙', mood: '清涼、深潭、神秘' },
    { name: '藍 (Blue)', hex: '#3b82f6', deg: 240, temp: '冷色調', complement: '橙', mood: '冷靜、遼闊、科技' },
    { name: '藍紫 (Blue-Violet)', hex: '#6366f1', deg: 270, temp: '冷色調', complement: '黃橙', mood: '深邃、憂鬱、夜空' },
    { name: '紫 (Violet)', hex: '#a855f7', deg: 300, temp: '中性偏冷', complement: '黃', mood: '高貴、夢幻、優雅' },
    { name: '紅紫 (Red-Violet)', hex: '#ec4899', deg: 330, temp: '暖色調', complement: '黃綠', mood: '浪漫、華麗、嬌豔' }
  ];

  const currentHue = hues[selectedHueIdx];
  const complementIdx = (selectedHueIdx + 6) % 12;
  const complementHue = hues[complementIdx];

  return (
    <div className="flex flex-col gap-5 animate-fade-in text-slate-800 dark:text-slate-100">
      {/* Sub-mode selector */}
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div className="flex gap-2">
          <button
            onClick={() => { setActiveMode('wheel'); playSound('click'); }}
            className={`btn-pill text-xs px-3.5 py-1.5 font-bold ${activeMode === 'wheel' ? 'active' : ''}`}
          >
            🎨 12 色相環與互補色調
          </button>
          <button
            onClick={() => { setActiveMode('rgb_light'); playSound('click'); }}
            className={`btn-pill text-xs px-3.5 py-1.5 font-bold ${activeMode === 'rgb_light' ? 'active' : ''}`}
          >
            💡 光的三原色 (加法混色 RGB)
          </button>
          <button
            onClick={() => { setActiveMode('cmy_pigment'); playSound('click'); }}
            className={`btn-pill text-xs px-3.5 py-1.5 font-bold ${activeMode === 'cmy_pigment' ? 'active' : ''}`}
          >
            🖌️ 顏料三原色 (減法混色 CMY)
          </button>
        </div>
        <span className="text-xs text-secondary font-medium">108 課綱藝術素養・色彩學</span>
      </div>

      {/* ========================================================================= */}
      {/* MODE 1: 12 色相環 */}
      {/* ========================================================================= */}
      {activeMode === 'wheel' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Circular SVG Color Wheel */}
          <div className="flex flex-col items-center justify-center p-4">
            <svg width="260" height="260" viewBox="-130 -130 260 260" className="drop-shadow-lg">
              {hues.map((h, i) => {
                const angle = (i * 30) - 90;
                const radStart = ((angle - 15) * Math.PI) / 180;
                const radEnd = ((angle + 15) * Math.PI) / 180;
                const rOuter = 115;
                const rInner = 60;
                const x1 = rOuter * Math.cos(radStart);
                const y1 = rOuter * Math.sin(radStart);
                const x2 = rOuter * Math.cos(radEnd);
                const y2 = rOuter * Math.sin(radEnd);
                const x3 = rInner * Math.cos(radEnd);
                const y3 = rInner * Math.sin(radEnd);
                const x4 = rInner * Math.cos(radStart);
                const y4 = rInner * Math.sin(radStart);

                const isSelected = selectedHueIdx === i;
                const isComp = complementIdx === i;

                return (
                  <path
                    key={h.name}
                    d={`M ${x1} ${y1} A ${rOuter} ${rOuter} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 0 0 ${x4} ${y4} Z`}
                    fill={h.hex}
                    stroke={isSelected ? '#ffffff' : isComp ? '#facc15' : '#0f172a'}
                    strokeWidth={isSelected ? 3.5 : isComp ? 2.5 : 1}
                    className="cursor-pointer transition-transform hover:opacity-90"
                    style={{ transform: isSelected ? 'scale(1.05)' : 'scale(1)' }}
                    onClick={() => {
                      setSelectedHueIdx(i);
                      playSound('click');
                    }}
                  />
                );
              })}
              {/* Center Hue Indicator */}
              <circle cx="0" cy="0" r="48" fill={currentHue.hex} stroke="#ffffff" strokeWidth="3" />
              <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="900" className="select-none">
                {currentHue.name.split(' ')[0]}
              </text>
            </svg>
            <span className="text-[11px] text-tertiary mt-2">點擊色環各色塊，即時查看互補色與冷暖色調</span>
          </div>

          {/* Color Analysis Card */}
          <div className="flex flex-col gap-3">
            <div className="card p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full shadow" style={{ backgroundColor: currentHue.hex }} />
                  <h3 className="font-black text-base">{currentHue.name}</h3>
                </div>
                <span className="badge font-bold text-xs" style={{ backgroundColor: `${currentHue.hex}25`, color: currentHue.hex }}>
                  {currentHue.temp}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-light space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-secondary">色彩心理意象：</span>
                  <strong className="text-primary">{currentHue.mood}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">色環角度：</span>
                  <span className="font-mono">{currentHue.deg}°</span>
                </div>
              </div>

              {/* Complementary Contrast */}
              <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 space-y-1.5 text-xs">
                <div className="font-bold text-amber-800 dark:text-amber-300 flex items-center justify-between">
                  <span>⭐ 對比色 / 180° 互補色：</span>
                  <span className="font-mono">{complementHue.name}</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <div className="w-7 h-7 rounded-lg shadow-inner" style={{ backgroundColor: currentHue.hex }} />
                  <span className="text-sm font-bold text-slate-400">⚡</span>
                  <div className="w-7 h-7 rounded-lg shadow-inner" style={{ backgroundColor: complementHue.hex }} />
                  <span className="text-[11px] text-secondary ml-1">
                    互補色並置能產生最強烈鮮明的視覺對比！
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 2: 光的三原色 (加法混色 RGB) */}
      {/* ========================================================================= */}
      {activeMode === 'rgb_light' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Visual RGB Preview Box */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950 border border-slate-800">
            <div 
              className="w-44 h-44 rounded-2xl shadow-2xl border-2 border-white/20 transition-colors duration-200 flex items-center justify-center"
              style={{ backgroundColor: `rgb(${redLight}, ${greenLight}, ${blueLight})` }}
            >
              <div className="text-center px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm text-white font-mono text-xs font-bold">
                rgb({redLight}, {greenLight}, {blueLight})
              </div>
            </div>
            <div className="text-xs text-slate-400 mt-3 text-center">
              三光束重疊：紅 + 綠 = 黃光；綠 + 藍 = 青光；紅 + 綠 + 藍 = <strong>純白光 (White)</strong>
            </div>
          </div>

          {/* RGB Sliders */}
          <div className="space-y-4 text-xs">
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
              <div className="flex justify-between font-bold mb-1 text-red-500">
                <span>🔴 紅光 (Red Light)：</span>
                <span className="font-mono">{redLight}</span>
              </div>
              <input
                type="range" min="0" max="255" value={redLight}
                onChange={(e) => setRedLight(Number(e.target.value))}
                className="w-full accent-red-500"
              />
            </div>

            <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/30">
              <div className="flex justify-between font-bold mb-1 text-green-500">
                <span>🟢 綠光 (Green Light)：</span>
                <span className="font-mono">{greenLight}</span>
              </div>
              <input
                type="range" min="0" max="255" value={greenLight}
                onChange={(e) => setGreenLight(Number(e.target.value))}
                className="w-full accent-green-500"
              />
            </div>

            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
              <div className="flex justify-between font-bold mb-1 text-blue-500">
                <span>🔵 藍光 (Blue Light)：</span>
                <span className="font-mono">{blueLight}</span>
              </div>
              <input
                type="range" min="0" max="255" value={blueLight}
                onChange={(e) => setBlueLight(Number(e.target.value))}
                className="w-full accent-blue-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 3: 顏料三原色 (減法混色 CMY) */}
      {/* ========================================================================= */}
      {activeMode === 'cmy_pigment' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Visual CMY Pigment Preview Box */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            {/* Convert CMY to simulated RGB for display */}
            {(() => {
              const r = Math.round(255 * (1 - cyanPigment / 100));
              const g = Math.round(255 * (1 - magentaPigment / 100));
              const b = Math.round(255 * (1 - yellowPigment / 100));
              return (
                <div 
                  className="w-44 h-44 rounded-2xl shadow-xl border-2 border-slate-300 dark:border-slate-700 transition-colors duration-200 flex items-center justify-center"
                  style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
                >
                  <div className="text-center px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm text-white font-mono text-xs font-bold">
                    C:{cyanPigment}% M:{magentaPigment}% Y:{yellowPigment}%
                  </div>
                </div>
              );
            })()}
            <div className="text-xs text-secondary mt-3 text-center">
              顏料吸收光線：青 + 品紅 + 黃三者混合吸收全部色光 ➔ <strong>混濁深黑/暗灰 (Subtractive)</strong>
            </div>
          </div>

          {/* CMY Sliders */}
          <div className="space-y-4 text-xs">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
              <div className="flex justify-between font-bold mb-1 text-cyan-600 dark:text-cyan-400">
                <span>🔷 青色顏料 (Cyan Ink)：</span>
                <span className="font-mono">{cyanPigment}%</span>
              </div>
              <input
                type="range" min="0" max="100" value={cyanPigment}
                onChange={(e) => setCyanPigment(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
            </div>

            <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/30">
              <div className="flex justify-between font-bold mb-1 text-pink-600 dark:text-pink-400">
                <span>🌺 洋紅顏料 (Magenta Ink)：</span>
                <span className="font-mono">{magentaPigment}%</span>
              </div>
              <input
                type="range" min="0" max="100" value={magentaPigment}
                onChange={(e) => setMagentaPigment(Number(e.target.value))}
                className="w-full accent-pink-500"
              />
            </div>

            <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
              <div className="flex justify-between font-bold mb-1 text-yellow-600 dark:text-yellow-400">
                <span>🟡 黃色顏料 (Yellow Ink)：</span>
                <span className="font-mono">{yellowPigment}%</span>
              </div>
              <input
                type="range" min="0" max="100" value={yellowPigment}
                onChange={(e) => setYellowPigment(Number(e.target.value))}
                className="w-full accent-yellow-500"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🚑 4. 健體：CPR 100~120 BPM 節奏心跳模擬器 (CPR Rhythm Metronome Lab)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const CprRhythmMetronomeLab = () => {
  const { addCoins, addXp } = useGamification();
  const [targetBpm, setTargetBpm] = useState(110);
  const [isPlayingMetronome, setIsPlayingMetronome] = useState(false);
  const [userTaps, setUserTaps] = useState([]);
  const [pressCount, setPressCount] = useState(0);
  const [isPressing, setIsPressing] = useState(false);
  const [aedStep, setAedStep] = useState(1);
  const [hasCelebrated, setHasCelebrated] = useState(false);

  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);

  // Play click beat
  const playClickSound = (freq = 800) => {
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

      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (_e) {}
  };

  // Metronome timer loop
  useEffect(() => {
    if (isPlayingMetronome) {
      const intervalMs = (60 / targetBpm) * 1000;
      timerRef.current = setInterval(() => {
        playClickSound(880);
      }, intervalMs);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlayingMetronome, targetBpm]);

  // Handle user manual chest compression
  const handleChestPress = () => {
    const now = Date.now();
    setIsPressing(true);
    setTimeout(() => setIsPressing(false), 120);

    playClickSound(440);
    triggerHaptic('medium');

    setUserTaps(prev => {
      const updated = [...prev.slice(-6), now];
      return updated;
    });
    setPressCount(prev => prev + 1);

    if (pressCount >= 20 && !hasCelebrated) {
      setHasCelebrated(true);
      playSound('levelup');
      triggerHaptic('heavy');
      dispatchDynamicIsland({
        title: '🚑 救命按壓連續達成 20 次！',
        subtitle: '維持高品質 CPR 節奏！+30 🪙 +50 XP',
        icon: '❤️'
      });
      addCoins(30);
      addXp(50, 'cpr_practice');
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    }
  };

  // Calculate user current BPM
  const userCalculatedBpm = (() => {
    if (userTaps.length < 2) return null;
    const intervals = [];
    for (let i = 1; i < userTaps.length; i++) {
      intervals.push(userTaps[i] - userTaps[i - 1]);
    }
    const avgMs = intervals.reduce((a, b) => a + b, 0) / intervals.length;
    return Math.round(60000 / avgMs);
  })();

  const getBpmStatus = (bpm) => {
    if (!bpm) return { text: '請跟隨節拍點擊按壓胸腔', color: 'text-slate-400' };
    if (bpm < 100) return { text: '⚠️ 太慢了！請加快按壓頻率（目標 100~120 下/分）', color: 'text-amber-500 font-bold' };
    if (bpm > 125) return { text: '⚠️ 太快了！過快會讓心臟來不及回血', color: 'text-rose-500 font-bold' };
    return { text: '✨ 完美救命黃金節奏！維持此速率！', color: 'text-emerald-500 font-black' };
  };

  const status = getBpmStatus(userCalculatedBpm);

  return (
    <div className="flex flex-col gap-5 animate-fade-in text-slate-800 dark:text-slate-100">
      {/* Top Banner with Pulse Visual */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-950 via-slate-900 to-red-950 border border-rose-500/30 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="badge badge-accent text-xs font-bold">急救素養實作</span>
            <span className="text-xs text-rose-300 font-bold">叫叫CD + AED</span>
          </div>
          <h2 className="text-xl font-black">CPR 胸外按壓節奏實時模擬器</h2>
          <p className="text-xs text-slate-300 mt-1 max-w-sm">
            按壓位置：兩乳頭連線正中央；深度：至少 5 公分；速率：每分鐘 100 ~ 120 下！
          </p>
        </div>

        {/* Metronome Pulse Control Box */}
        <div className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold text-slate-200">節拍器頻率：</span>
            {[100, 110, 120].map(bpm => (
              <button
                key={bpm}
                onClick={() => {
                  setTargetBpm(bpm);
                  playSound('click');
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold font-mono transition-all ${
                  targetBpm === bpm 
                    ? 'bg-rose-600 text-white shadow-md' 
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                {bpm} BPM
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setIsPlayingMetronome(prev => !prev);
              playSound('click');
            }}
            className={`btn-primary w-full py-2 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 ${
              isPlayingMetronome ? 'bg-amber-600 border-amber-600' : 'bg-rose-600 border-rose-600'
            }`}
          >
            {isPlayingMetronome ? <Pause size={14} /> : <Play size={14} />}
            <span>{isPlayingMetronome ? '停止語音節奏音效' : '🔊 開啟救命 110 BPM 節拍器'}</span>
          </button>
        </div>
      </div>

      {/* Interactive Compression Pad */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <button
            onClick={handleChestPress}
            className={`w-48 h-48 rounded-full shadow-2xl flex flex-col items-center justify-center transition-transform select-none cursor-pointer border-4 ${
              isPressing 
                ? 'scale-90 bg-rose-700 border-rose-400' 
                : 'scale-100 bg-rose-600 border-rose-300 hover:bg-rose-500'
            }`}
            style={{
              boxShadow: isPressing ? '0 0 35px rgba(244, 63, 94, 0.8)' : '0 10px 25px rgba(244, 63, 94, 0.4)'
            }}
          >
            <Heart size={48} className="text-white fill-white animate-pulse" />
            <span className="text-white font-black text-sm mt-2">用力壓！快快壓！</span>
            <span className="text-rose-100 text-[11px]">按壓次數：{pressCount}</span>
          </button>
          <span className="text-xs text-secondary mt-3">
            💡 點擊上方紅色心臟或按壓模擬胸腔，練習維持 100~120 BPM！
          </span>
        </div>

        {/* Realtime Feedback Analytics */}
        <div className="flex flex-col gap-3">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
            <div className="flex justify-between items-center">
              <span className="font-bold text-secondary">實時測得按壓速率：</span>
              <span className="text-2xl font-black font-mono text-rose-600 dark:text-rose-400">
                {userCalculatedBpm ? `${userCalculatedBpm} BPM` : '測量中...'}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-light text-center">
              <span className={`text-xs ${status.color}`}>
                {status.text}
              </span>
            </div>

            <div className="space-y-1.5 pt-1 text-[11px] text-secondary">
              <div>✅ <strong>施力姿勢</strong>：雙手交扣、手掌根部施力，雙臂打直與患者胸膛垂直！</div>
              <div>✅ <strong>完全回彈</strong>：每次按壓後，必須讓胸壁完全回彈，心臟才能充血！</div>
              <div>✅ <strong>記憶名曲</strong>：節奏與《Stayin' Alive》或《Baby Shark》一致！</div>
            </div>
          </div>
        </div>
      </div>

      {/* AED 4-Step Interactive Guide */}
      <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 text-xs space-y-3">
        <div className="flex justify-between items-center">
          <span className="font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
            <Zap size={15} /> AED (自動體外心臟去顫器) 4 步驟動態演練
          </span>
          <span className="text-[11px] text-secondary">第 {aedStep} / 4 步</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { step: 1, label: '1. 開啟電源', desc: '打開 AED 外蓋，聆聽語音指令' },
            { step: 2, label: '2. 貼上貼片', desc: '右鎖骨下方、左乳頭外側肋骨' },
            { step: 3, label: '3. 插上插頭', desc: '分析心律，大喊「所有人離開患者」' },
            { step: 4, label: '4. 依指示電擊', desc: '按下電擊鈕，完成後立刻繼續 CPR' }
          ].map(s => (
            <button
              key={s.step}
              onClick={() => {
                setAedStep(s.step);
                playSound('click');
              }}
              className={`p-2.5 rounded-xl text-left border transition-all ${
                aedStep === s.step 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md font-bold' 
                  : 'bg-white dark:bg-slate-800 border-light hover:border-blue-400'
              }`}
            >
              <div className="text-xs mb-0.5">{s.label}</div>
              <div className="text-[10px] opacity-80">{s.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🌱 5. 綜合：艾森豪時間管理四象限決策分類機 (Time Management Matrix Lab)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const TimeManagementMatrixLab = () => {
  const { addCoins, addXp } = useGamification();
  const [tasks, setTasks] = useState([
    { id: 1, title: '明天早上的期末數學大會考', quadrant: 'I', hint: '立刻複習弱點' },
    { id: 2, title: '每天睡前閱讀課外好書 20 分鐘', quadrant: 'II', hint: '成功者的核心關鍵' },
    { id: 3, title: '每週三次 30 分鐘規律慢跑運動', quadrant: 'II', hint: '維持長期健康資本' },
    { id: 4, title: '朋友突然傳訊息催你幫手遊簽到', quadrant: 'III', hint: '學會委婉拒絕' },
    { id: 5, title: '漫無目的滑搞笑短影片 2 小時', quadrant: 'IV', hint: '果斷捨棄遠離' },
    { id: 6, title: '預習國一數學負數與先修單元', quadrant: 'II', hint: '從容銜接未來' },
    { id: 7, title: '突發急性闌尾炎肚子劇痛急診', quadrant: 'I', hint: '刻不容緩立刻就醫' },
    { id: 8, title: '沉迷打連線對戰遊戲到凌晨兩點', quadrant: 'IV', hint: '毀滅作息需戒除' }
  ]);

  const [activeTask, setActiveTask] = useState(null);
  const [hasRewarded, setHasRewarded] = useState(false);

  const quadrants = [
    {
      id: 'I',
      name: '象限 I：重要且緊急',
      badge: '危機處理',
      action: '立刻去做 (Do Now)',
      color: 'border-rose-500/40 bg-rose-50/50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-300'
    },
    {
      id: 'II',
      name: '象限 II：重要但不緊急',
      badge: '卓越人生關鍵 ⭐',
      action: '預先排程專注投資 (Schedule)',
      color: 'border-emerald-500/40 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-300'
    },
    {
      id: 'III',
      name: '象限 III：不重要但緊急',
      badge: '欺騙性陷阱',
      action: '委派或委婉拒絕 (Delegate/Say No)',
      color: 'border-amber-500/40 bg-amber-50/50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-300'
    },
    {
      id: 'IV',
      name: '象限 IV：不重要也不緊急',
      badge: '時間黑洞',
      action: '果斷捨棄 (Eliminate)',
      color: 'border-slate-500/40 bg-slate-100/60 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300'
    }
  ];

  const moveTask = (taskId, targetQuadrant) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, quadrant: targetQuadrant } : t));
    playSound('coin');
    triggerHaptic('selection');

    if (!hasRewarded) {
      setHasRewarded(true);
      addCoins(20);
      addXp(35, 'time_management');
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
    }
  };

  return (
    <div className="flex flex-col gap-5 animate-fade-in text-slate-800 dark:text-slate-100">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div>
          <h3 className="text-sm font-bold text-primary">艾森豪十字矩陣動態任務看板</h3>
          <p className="text-xs text-secondary">將生活任務依「重要度」與「緊急度」分類，找回時間掌控權！</p>
        </div>
        <span className="badge badge-accent text-xs font-bold">綜合活動・自主生活管理</span>
      </div>

      {/* 2x2 Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quadrants.map(q => {
          const qTasks = tasks.filter(t => t.quadrant === q.id);
          return (
            <div key={q.id} className={`card p-4 rounded-2xl border ${q.color} flex flex-col justify-between min-h-[220px]`}>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-xs">{q.name}</h4>
                  <span className="badge badge-neutral text-[10px] font-bold">{q.badge}</span>
                </div>
                <div className="text-[11px] font-bold opacity-85 mb-3">
                  👉 行動原則：{q.action}
                </div>

                {/* Task Cards in this Quadrant */}
                <div className="space-y-2">
                  {qTasks.map(t => (
                    <div
                      key={t.id}
                      className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-light shadow-sm text-xs flex justify-between items-center group"
                    >
                      <div>
                        <span className="font-medium block text-primary">{t.title}</span>
                        <span className="text-[10px] text-secondary">{t.hint}</span>
                      </div>
                      
                      {/* Move Quick Dropdown */}
                      <div className="flex gap-1">
                        {['I', 'II', 'III', 'IV'].map(targetQ => targetQ !== q.id && (
                          <button
                            key={targetQ}
                            onClick={() => moveTask(t.id, targetQ)}
                            className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-secondary"
                            title={`移至象限 ${targetQ}`}
                          >
                            ➔ {targetQ}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Eisenhower Golden Advice Card */}
      <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 text-xs space-y-2">
        <div className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
          <Sparkles size={16} />
          <span>卓越學習者的時間秘密：全力投資「第二象限」！</span>
        </div>
        <p className="text-secondary leading-relaxed">
          普通人每天疲於奔命處理象限 I 的危機（熬夜趕作業、臨時抱佛腳）；但真正的高效學習者，會把 60% 以上的時間投資在<strong>「第二象限（重要但不緊急）」</strong>：每天有計畫地預習、規律運動、閱讀思考。當第二象限做得越好，第一象限的危機就自然大幅減少！
        </p>
      </div>
    </div>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🧬 6. 健康醫學：人體六大生命系統協同與細胞抗衰老沙盤 (Human Body Systems & Longevity Lab)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const HumanBodyLongevityLab = () => {
  const { addCoins, addXp } = useGamification();
  const [selectedSystem, setSelectedSystem] = useState('mitochondria'); // 'circulatory' | 'respiratory' | 'mitochondria' | 'brain' | 'immune' | 'musculoskeletal'
  
  // Lifestyle Intervention Inputs
  const [zone2Hours, setZone2Hours] = useState(3.5); // 0 ~ 7 hours/week
  const [strengthDays, setStrengthDays] = useState(3); // 0 ~ 5 days/week
  const [sleepHours, setSleepHours] = useState(8.5); // 4 ~ 10 hours/night
  const [nutritionScore, setNutritionScore] = useState(8); // 1 ~ 10 rating
  const [hydrationMl, setHydrationMl] = useState(2000); // 800 ~ 3000 ml/day
  const [hasTriggeredMilestone, setHasTriggeredMilestone] = useState(false);

  // Biological Longevity Calculations
  // 1. Autophagy (細胞自噬活性 %): Clears damaged proteins/organelles
  const autophagyScore = Math.min(98, Math.max(15, Math.round(
    20 + (zone2Hours * 5.5) + (sleepHours >= 8 ? 25 : sleepHours * 2.5) + (nutritionScore * 2.8)
  )));

  // 2. Mitochondrial Efficiency (粒線體產能與生物合成 %): ATP Engine
  const mitoScore = Math.min(100, Math.max(25, Math.round(
    30 + (zone2Hours * 6.5) + (strengthDays * 5) + (hydrationMl / 120)
  )));

  // 3. Systemic Inflammation Level (全身慢性發炎指數): Lower is better
  const inflammationIndex = Math.max(10, Math.min(95, Math.round(
    90 - (zone2Hours * 5) - (sleepHours * 4) - (nutritionScore * 4)
  )));

  // 4. Bio-Age Delta (抗衰老生理年齡差): negative = younger
  const bioAgeDelta = Math.round(
    (inflammationIndex / 15) - (autophagyScore / 25) - (mitoScore / 30)
  );

  // Milestone reward
  useEffect(() => {
    if (autophagyScore >= 80 && mitoScore >= 80 && !hasTriggeredMilestone) {
      setHasTriggeredMilestone(true);
      playSound('levelup');
      triggerHaptic('heavy');
      dispatchDynamicIsland({
        title: '🧬 細胞抗衰老黃金巔峰達成！',
        subtitle: '細胞自噬高效啟動・粒線體活力充沛・生理逆齡',
        icon: '🧬'
      });
      addCoins(30);
      addXp(50, 'longevity_master');
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    }
  }, [autophagyScore, mitoScore, hasTriggeredMilestone, addCoins, addXp]);

  const systemsData = {
    circulatory: {
      title: '🫀 心血管循環系統 (Cardiovascular)',
      organ: '心臟、主動脈、微血管床',
      mechanism: '心臟每日跳動約 10 萬次，推送 7,500 公升富氧血液。Zone 2 運動能刺激毛細血管密度增加 30%，並促使血管內皮細胞釋放一氧化氮 (NO)，維持動脈彈性，杜絕血管硬化！',
      medicalKey: '靜息心率 (RHR) 越穩定、心率變異度 (HRV) 越高，心血管壽命越長！',
      color: '#ef4444'
    },
    respiratory: {
      title: '🫁 呼吸系統與肺泡氣體交換 (Respiratory)',
      organ: '氣管、支氣管、3 億個肺泡、橫膈膜',
      mechanism: '肺泡總表面積相當於半座網球場！吸入氧氣與紅血球血紅素結合，呼出二氧化碳。深長腹式呼吸能啟動副交感神經迷走神經，快速降低皮質醇，舒緩身心發炎。',
      medicalKey: '最大攝氧量 (VO2 Max) 是全球醫學界公認預測壽命長度最強大的生理指標之一！',
      color: '#06b6d4'
    },
    mitochondria: {
      title: '🧬 細胞自噬與粒線體發電廠 (Cellular & Autophagy)',
      organ: '細胞質、粒線體 (ATP生產)、溶酶體 (細胞垃圾車)',
      mechanism: '大隅良典榮獲諾貝爾獎之「細胞自噬 (Autophagy)」：細胞在運動與健康代謝時，會主動吞噬分解老舊變異蛋白質與損壞粒線體，轉化為新生能量，是人體最根本的抗衰老清毒工程！',
      medicalKey: '規律有氧運動促進粒線體生物合成 (Mitochondrial Biogenesis)，讓細胞永保青春電力！',
      color: '#10b981'
    },
    brain: {
      title: '🧠 大腦神經可塑性與膠淋巴排毒 (Brain & Glymphatic)',
      organ: '大腦皮質、海馬迴 (記憶中樞)、膠淋巴系統 (Glymphatic)',
      mechanism: '睡眠期間，腦脊髓液流速提升 10 倍，沖洗清除白天累積的代謝毒素（如 β-澱粉樣蛋白）。運動更能刺激海馬迴分泌腦源性神經營養因子 (BDNF)，讓神經元再生！',
      medicalKey: '高年級青少年正處於前額葉皮質修剪黃金期，優質 8~9 小時睡眠是高智商與好心情的基石！',
      color: '#8b5cf6'
    },
    immune: {
      title: '🛡️ 免疫防禦與腸道微生態 (Immune & Gut Microbiome)',
      organ: '胸腺、脾臟、淋巴結、腸道黏膜 (70% 免疫細胞集中地)',
      mechanism: '人體 70% 的免疫抗體由腸道屏障維持。彩虹蔬果中的膳食纖維是益生菌的「益生元」，發酵產生的短鏈脂肪酸 (SCFA) 能修復腸道屏障，防止內毒素滲漏引發慢性低度發炎。',
      medicalKey: '控制慢性微發炎 (Inflammaging) 是阻斷早衰與文明病的現代醫學核心防線！',
      color: '#f59e0b'
    },
    musculoskeletal: {
      title: '🦴 骨骼肌質量與代謝水槽 (Musculoskeletal & Endocrine)',
      organ: '600 多塊骨骼肌、206 塊骨骼、關節軟骨',
      mechanism: '骨骼肌不只是運動器官，更是人體最大的「內分泌與血糖代謝水槽 (Metabolic Sink)」！收縮時釋放抗炎肌動蛋白 (Myokines)。阻力訓練刺激造骨細胞，在青春期奠定一生最高骨峰值！',
      medicalKey: '高肌肉量代表高基礎代謝率與高胰島素敏感度，預防肥胖與老年肌少症！',
      color: '#d97706'
    }
  };

  const currentSys = systemsData[selectedSystem];

  return (
    <div className="card p-5 space-y-5 animate-fade-in" style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-xl)', border: '1.5px solid var(--border-light)' }}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 border-b border-light">
        <div>
          <div className="flex items-center gap-2">
            <span className="badge badge-accent text-xs font-bold px-2 py-0.5">🧬 醫學人體生理學</span>
            <span className="badge badge-success text-xs font-bold px-2 py-0.5">抗衰老生活實驗室</span>
          </div>
          <h2 className="text-lg font-black text-primary mt-1">
            人體六大生命系統協同與細胞抗衰老沙盤
          </h2>
          <p className="text-xs text-secondary">
            親手調控 Zone 2 有氧、阻力重訓、深度睡眠與彩虹抗炎飲食，探索細胞自噬與粒線體生化機制
          </p>
        </div>

        <button
          onClick={() => {
            setZone2Hours(3.5);
            setStrengthDays(3);
            setSleepHours(8.5);
            setNutritionScore(8);
            setHydrationMl(2000);
            playSound('pop');
            triggerHaptic('light');
          }}
          className="btn-outline text-xs px-2.5 py-1.5 flex items-center gap-1 rounded-lg"
        >
          <RotateCcw size={13} />
          <span>重設最佳參數</span>
        </button>
      </div>

      {/* Top 4 Realtime Bio-Metrics Dashboards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Metric 1: Autophagy */}
        <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center">
          <div className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 flex items-center justify-center gap-1">
            <Dna size={13} />
            <span>細胞自噬清除力</span>
          </div>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
            {autophagyScore}%
          </div>
          <div className="text-[10px] text-emerald-700/80 mt-0.5">
            {autophagyScore >= 75 ? '🌟 高效吞噬清除廢蛋白' : '⚠️ 堆積老舊受損細胞器'}
          </div>
        </div>

        {/* Metric 2: Mitochondria */}
        <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-center">
          <div className="text-[11px] font-bold text-blue-800 dark:text-blue-300 flex items-center justify-center gap-1">
            <Zap size={13} />
            <span>粒線體發電產能</span>
          </div>
          <div className="text-2xl font-black text-blue-600 dark:text-blue-400 mt-1">
            {mitoScore}%
          </div>
          <div className="text-[10px] text-blue-700/80 mt-0.5">
            {mitoScore >= 80 ? '⚡ ATP 能量滿載充沛' : '🔋 細胞供能效率較低'}
          </div>
        </div>

        {/* Metric 3: Systemic Inflammation */}
        <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-center">
          <div className="text-[11px] font-bold text-rose-800 dark:text-rose-300 flex items-center justify-center gap-1">
            <Flame size={13} />
            <span>慢性微發炎指數</span>
          </div>
          <div className="text-2xl font-black text-rose-600 dark:text-rose-400 mt-1">
            {inflammationIndex}
          </div>
          <div className="text-[10px] text-rose-700/80 mt-0.5">
            {inflammationIndex <= 35 ? '🛡️ 低發炎抗衰老最佳狀態' : '⚠️ 高發炎加速組織老化'}
          </div>
        </div>

        {/* Metric 4: Bio-Age Delta */}
        <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-center">
          <div className="text-[11px] font-bold text-purple-800 dark:text-purple-300 flex items-center justify-center gap-1">
            <Activity size={13} />
            <span>細胞生理年齡差</span>
          </div>
          <div className="text-2xl font-black text-purple-600 dark:text-purple-400 mt-1">
            {bioAgeDelta <= 0 ? `${bioAgeDelta} 歲` : `+${bioAgeDelta} 歲`}
          </div>
          <div className="text-[10px] text-purple-700/80 mt-0.5">
            {bioAgeDelta <= -2 ? '✨ 生物逆齡活力充沛' : bioAgeDelta <= 1 ? '均衡正常' : '⚠️ 加速老化警訊'}
          </div>
        </div>
      </div>

      {/* Main Body: Left 5 Sliders + Right System Visualizer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: 5 Lifestyle Intervention Controllers (6 cols) */}
        <div className="lg:col-span-6 space-y-3.5 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-light">
          <div className="flex items-center justify-between text-xs font-bold text-primary pb-1 border-b border-light">
            <span className="flex items-center gap-1.5">
              <Compass size={14} className="text-blue-500" />
              <span>生活醫學干預變因調節</span>
            </span>
            <span className="text-[11px] text-secondary">即時連動細胞生理運算</span>
          </div>

          {/* Slider 1: Zone 2 Cardio */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="font-bold flex items-center gap-1 text-slate-700 dark:text-slate-200">
                <Activity size={13} className="text-cyan-500" />
                <span>Zone 2 低強度有氧訓練：</span>
              </span>
              <span className="font-mono font-bold text-cyan-600 dark:text-cyan-400">
                {zone2Hours} 小時 / 週
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="7"
              step="0.5"
              value={zone2Hours}
              onChange={(e) => { setZone2Hours(parseFloat(e.target.value)); triggerHaptic('light'); }}
              className="w-full accent-cyan-500"
            />
            <div className="flex justify-between text-[10px] text-secondary">
              <span>0 (久坐少動)</span>
              <span>3~4h (心血管最佳刺激)</span>
              <span>7h (耐力高手)</span>
            </div>
          </div>

          {/* Slider 2: Strength Days */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="font-bold flex items-center gap-1 text-slate-700 dark:text-slate-200">
                <Dumbbell size={13} className="text-amber-500" />
                <span>阻力肌力抗阻訓練：</span>
              </span>
              <span className="font-mono font-bold text-amber-600 dark:text-amber-400">
                {strengthDays} 天 / 週
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              step="1"
              value={strengthDays}
              onChange={(e) => { setStrengthDays(parseInt(e.target.value)); triggerHaptic('light'); }}
              className="w-full accent-amber-500"
            />
            <div className="flex justify-between text-[10px] text-secondary">
              <span>0 (無肌力刺激)</span>
              <span>2~3天 (刺激骨密度與增肌)</span>
              <span>5天 (進階超負荷)</span>
            </div>
          </div>

          {/* Slider 3: Sleep */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="font-bold flex items-center gap-1 text-slate-700 dark:text-slate-200">
                <Moon size={13} className="text-indigo-500" />
                <span>每晚深度優質睡眠：</span>
              </span>
              <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                {sleepHours} 小時 / 夜
              </span>
            </div>
            <input
              type="range"
              min="4"
              max="10"
              step="0.5"
              value={sleepHours}
              onChange={(e) => { setSleepHours(parseFloat(e.target.value)); triggerHaptic('light'); }}
              className="w-full accent-indigo-500"
            />
            <div className="flex justify-between text-[10px] text-secondary">
              <span>4h (腦毒素堆積)</span>
              <span>8.5h (青春期生長激素黃金釋放)</span>
              <span>10h (充足休眠)</span>
            </div>
          </div>

          {/* Slider 4: Rainbow Nutrition */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="font-bold flex items-center gap-1 text-slate-700 dark:text-slate-200">
                <Apple size={13} className="text-emerald-500" />
                <span>彩虹蔬果與抗發炎飲食：</span>
              </span>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">
                {nutritionScore} / 10 分
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={nutritionScore}
              onChange={(e) => { setNutritionScore(parseInt(e.target.value)); triggerHaptic('light'); }}
              className="w-full accent-emerald-500"
            />
            <div className="flex justify-between text-[10px] text-secondary">
              <span>1 (高糖油炸促炎)</span>
              <span>6 (一般外食)</span>
              <span>10 (低GI富含多酚纖維)</span>
            </div>
          </div>

          {/* Slider 5: Hydration */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="font-bold flex items-center gap-1 text-slate-700 dark:text-slate-200">
                <Droplets size={13} className="text-blue-500" />
                <span>每日純水攝取量：</span>
              </span>
              <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                {hydrationMl} ml
              </span>
            </div>
            <input
              type="range"
              min="800"
              max="3000"
              step="100"
              value={hydrationMl}
              onChange={(e) => { setHydrationMl(parseInt(e.target.value)); triggerHaptic('light'); }}
              className="w-full accent-blue-500"
            />
            <div className="flex justify-between text-[10px] text-secondary">
              <span>800ml (缺水血稠)</span>
              <span>2000ml (標準代謝排毒)</span>
              <span>3000ml (運動足量)</span>
            </div>
          </div>
        </div>

        {/* Right: 6 Human Systems Visual Hub (6 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-3">
          {/* 6 System Pills Navigator */}
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { id: 'mitochondria', label: '🧬 粒線體自噬', color: '#10b981' },
              { id: 'circulatory', label: '🫀 心血管循環', color: '#ef4444' },
              { id: 'respiratory', label: '🫁 肺泡氣體交換', color: '#06b6d4' },
              { id: 'brain', label: '🧠 大腦膠淋巴', color: '#8b5cf6' },
              { id: 'immune', label: '🛡️ 免疫腸道微生態', color: '#f59e0b' },
              { id: 'musculoskeletal', label: '🦴 骨骼肌水槽', color: '#d97706' }
            ].map(sys => {
              const isSelected = selectedSystem === sys.id;
              return (
                <button
                  key={sys.id}
                  onClick={() => { setSelectedSystem(sys.id); playSound('click'); triggerHaptic('selection'); }}
                  className={`p-2 rounded-xl text-xs font-bold transition-all border text-center ${
                    isSelected 
                      ? 'bg-blue-600 text-white shadow-sm border-blue-600' 
                      : 'bg-white dark:bg-slate-800 text-secondary hover:border-blue-300 border-light'
                  }`}
                >
                  {sys.label}
                </button>
              );
            })}
          </div>

          {/* System Deep-Dive Card */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-light space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-primary">
                {currentSys.title}
              </h3>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-secondary font-bold">
                器官架構：{currentSys.organ}
              </span>
            </div>

            <p className="text-xs text-secondary leading-relaxed font-sans">
              {currentSys.mechanism}
            </p>

            <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs">
              <strong className="text-blue-700 dark:text-blue-300 block mb-0.5">
                🩺 醫學抗衰老與升學先修關鍵：
              </strong>
              <span className="text-slate-700 dark:text-slate-300">
                {currentSys.medicalKey}
              </span>
            </div>

            {/* Quick Action Test */}
            <div className="flex items-center justify-between text-xs pt-1 border-t border-light">
              <span className="text-[11px] text-secondary">
                💡 108 課綱六年級健康體育 ➔ 國中生物循環與呼吸系統無縫銜接
              </span>
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open_knowledge_hub', {
                    detail: { subject: 'health_pe', unitId: 'pe-u4' }
                  }));
                  playSound('pop');
                }}
                className="text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-0.5"
              >
                <span>查閱課綱知識點</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🏋️ 7. 體適能：增肌超負荷、減脂與身體組成生理計算機 (Fitness, Hypertrophy & Fat Loss Engine)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const FitnessHypertrophyFatLossLab = () => {
  const { addCoins, addXp } = useGamification();
  const [activeTab, setActiveTab] = useState('hypertrophy'); // 'hypertrophy' | 'fatloss' | 'radar'

  // User Profile States
  const [weightKg, setWeightKg] = useState(50); // 35 ~ 85 kg
  const [bodyFatPct, setBodyFatPct] = useState(20); // 10 ~ 35 %
  
  // Hypertrophy Variables
  const [setsPerExercise, setSetsPerExercise] = useState(4); // 1 ~ 6 sets
  const [repsPerSet, setRepsPerSet] = useState(10); // 5 ~ 20 reps
  const [proteinGramsPerKg, setProteinGramsPerKg] = useState(1.6); // 0.8 ~ 2.4 g/kg
  const [resistanceDaysPerWeek, setResistanceDaysPerWeek] = useState(3); // 1 ~ 5 days

  // Fat Loss Variables
  const [dailyNeatSteps, setDailyNeatSteps] = useState(8000); // 3000 ~ 16000 steps
  const [cardioMinutesPerWeek, setCardioMinutesPerWeek] = useState(120); // 0 ~ 300 mins
  const [dailyCalorieIntake, setDailyCalorieIntake] = useState(1800); // 1200 ~ 3200 kcal
  const [hasCelebratedFatLoss, setHasCelebratedFatLoss] = useState(false);

  // Calculations
  // BMR (Mifflin-St Jeor formula approximation for 12-year-olds)
  const bmr = Math.round(10 * weightKg + 6.25 * 152 - 5 * 12 + 5);
  // NEAT calories from steps: ~0.04 kcal per step for 50kg student
  const neatCalories = Math.round(dailyNeatSteps * 0.04 * (weightKg / 50));
  // Exercise Activity Thermogenesis (EAT)
  const eatCalories = Math.round((cardioMinutesPerWeek / 7) * 7 + (resistanceDaysPerWeek * 150 / 7));
  // Thermic Effect of Food (TEF) ~ 10%
  const tefCalories = Math.round(dailyCalorieIntake * 0.1);
  // Total Daily Energy Expenditure (TDEE)
  const tdee = Math.round(bmr + neatCalories + eatCalories + tefCalories);
  // Caloric Deficit / Surplus
  const calorieBalance = dailyCalorieIntake - tdee;
  // Estimated Weekly Fat Change (grams): 1g fat ~ 7.7 kcal
  const weeklyFatChangeGrams = Math.round((calorieBalance * 7) / 7.7);

  // Muscle Protein Synthesis (MPS) Status
  const isOptimalProtein = proteinGramsPerKg >= 1.5;
  const isOptimalVolume = setsPerExercise >= 3 && repsPerSet >= 8 && repsPerSet <= 12;
  const hypertrophyStatus = (isOptimalProtein && isOptimalVolume && resistanceDaysPerWeek >= 2)
    ? { level: '🔥 黃金超量補償啟動', color: 'text-emerald-600 dark:text-emerald-400', desc: '白胺酸閾值達成，機械張力最佳化，肌纖維高效增生！' }
    : { level: '⏳ 維持期或輕微刺激', color: 'text-amber-600 dark:text-amber-400', desc: '建議提高蛋白質攝取至每公斤 1.5g，並將組數提升至 3~4 組！' };

  // Check Fat Loss Celebration (Deficit between -300 and -500 kcal)
  useEffect(() => {
    if (calorieBalance <= -250 && calorieBalance >= -500 && !hasCelebratedFatLoss) {
      setHasCelebratedFatLoss(true);
      playSound('levelup');
      triggerHaptic('medium');
      dispatchDynamicIsland({
        title: '🎯 黃金健康減脂區間！',
        subtitle: `每日赤字 ${Math.abs(calorieBalance)} kcal・保留肌肉高效燃脂`,
        icon: '⚖️'
      });
      addCoins(25);
      addXp(40, 'golden_fatloss_zone');
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } else if (calorieBalance > -100 || calorieBalance < -600) {
      setHasCelebratedFatLoss(false);
    }
  }, [calorieBalance, hasCelebratedFatLoss, addCoins, addXp]);

  return (
    <div className="card p-5 space-y-5 animate-fade-in" style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-xl)', border: '1.5px solid var(--border-light)' }}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 border-b border-light">
        <div>
          <div className="flex items-center gap-2">
            <span className="badge badge-accent text-xs font-bold px-2 py-0.5">🏋️ 運動生理學</span>
            <span className="badge badge-success text-xs font-bold px-2 py-0.5">TDEE 能量平衡計算</span>
          </div>
          <h2 className="text-lg font-black text-primary mt-1">
            體適能增肌超負荷、減脂與身體組成生理計算機
          </h2>
          <p className="text-xs text-secondary">
            掌握漸進式超負荷、蛋白質合成 (MPS) 閾值、熱量赤字 (CICO) 與體適能五大基石
          </p>
        </div>

        {/* 3 Mode Tabs */}
        <div className="flex items-center gap-1 bg-white dark:bg-slate-800 p-1 rounded-xl border border-light">
          {[
            { id: 'hypertrophy', label: '💪 增肌超負荷', icon: Dumbbell },
            { id: 'fatloss', label: '🔥 減脂能量代謝', icon: Flame },
            { id: 'radar', label: '📊 體適能五要素', icon: Activity }
          ].map(tab => {
            const TabIcon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); playSound('click'); triggerHaptic('selection'); }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  isSelected ? 'bg-blue-600 text-white shadow-sm' : 'text-secondary hover:text-primary'
                }`}
              >
                <TabIcon size={13} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Profile Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-light text-xs">
        <div>
          <span className="text-secondary block">模擬學生體重：</span>
          <div className="flex items-center gap-1 mt-0.5">
            <input
              type="range"
              min="35"
              max="80"
              step="1"
              value={weightKg}
              onChange={(e) => setWeightKg(parseInt(e.target.value))}
              className="w-20 accent-blue-600"
            />
            <strong className="text-primary font-mono">{weightKg} kg</strong>
          </div>
        </div>
        <div>
          <span className="text-secondary block">體脂率與瘦肌肉量：</span>
          <div className="flex items-center gap-1 mt-0.5">
            <input
              type="range"
              min="10"
              max="35"
              step="1"
              value={bodyFatPct}
              onChange={(e) => setBodyFatPct(parseInt(e.target.value))}
              className="w-20 accent-amber-600"
            />
            <strong className="text-amber-600 dark:text-amber-400 font-mono">{bodyFatPct}% ({Math.round(weightKg * (1 - bodyFatPct / 100))}kg瘦肉)</strong>
          </div>
        </div>
        <div>
          <span className="text-secondary block">基礎代謝 (BMR)：</span>
          <strong className="text-blue-600 dark:text-blue-400 font-mono text-sm block mt-0.5">
            {bmr} kcal / 天
          </strong>
        </div>
        <div>
          <span className="text-secondary block">每日總消耗 (TDEE)：</span>
          <strong className="text-emerald-600 dark:text-emerald-400 font-mono text-sm block mt-0.5">
            {tdee} kcal / 天
          </strong>
        </div>
        <div>
          <span className="text-secondary block">每日熱量差額：</span>
          <strong className={`font-mono text-sm block mt-0.5 ${
            calorieBalance < 0 ? 'text-amber-600 dark:text-amber-400' : 'text-purple-600 dark:text-purple-400'
          }`}>
            {calorieBalance > 0 ? `+${calorieBalance} kcal` : `${calorieBalance} kcal`}
          </strong>
        </div>
      </div>

      {/* MODE 1: Hypertrophy Engine */}
      {activeTab === 'hypertrophy' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 animate-fade-in">
          {/* Left Controls (6 cols) */}
          <div className="lg:col-span-6 space-y-3.5 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-light">
            <h3 className="text-xs font-bold text-primary flex items-center gap-1.5 pb-1 border-b border-light">
              <Dumbbell size={14} className="text-blue-600" />
              <span>漸進式超負荷 (Progressive Overload) 參數調節</span>
            </h3>

            {/* Sets */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>訓練組數 (Sets per exercise)：</span>
                <strong className="font-mono text-blue-600">{setsPerExercise} 組</strong>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                step="1"
                value={setsPerExercise}
                onChange={(e) => setSetsPerExercise(parseInt(e.target.value))}
                className="w-full accent-blue-600"
              />
              <span className="text-[10px] text-secondary">推薦：3~4 組為最佳機械張力積累區間</span>
            </div>

            {/* Reps */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>每組次數 (Reps per set)：</span>
                <strong className="font-mono text-blue-600">{repsPerSet} 下</strong>
              </div>
              <input
                type="range"
                min="5"
                max="20"
                step="1"
                value={repsPerSet}
                onChange={(e) => setRepsPerSet(parseInt(e.target.value))}
                className="w-full accent-blue-600"
              />
              <span className="text-[10px] text-secondary">8~12 下為肌肥大 (Hypertrophy) 經典刺激次數</span>
            </div>

            {/* Protein g/kg */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>蛋白質攝取量 (g / kg 體重)：</span>
                <strong className="font-mono text-emerald-600">{proteinGramsPerKg} g/kg (全天 {Math.round(weightKg * proteinGramsPerKg)}g)</strong>
              </div>
              <input
                type="range"
                min="0.8"
                max="2.4"
                step="0.1"
                value={proteinGramsPerKg}
                onChange={(e) => setProteinGramsPerKg(parseFloat(e.target.value))}
                className="w-full accent-emerald-600"
              />
              <span className="text-[10px] text-secondary">青少年運動員建議 1.4~1.8g/kg，激活白胺酸 (Leucine) MPS 觸發點</span>
            </div>

            {/* Resistance frequency */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>每週阻力訓練頻率：</span>
                <strong className="font-mono text-indigo-600">{resistanceDaysPerWeek} 天 / 週</strong>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={resistanceDaysPerWeek}
                onChange={(e) => setResistanceDaysPerWeek(parseInt(e.target.value))}
                className="w-full accent-indigo-600"
              />
              <span className="text-[10px] text-secondary">每肌群間隔 48 小時超量補償修復效果最好</span>
            </div>
          </div>

          {/* Right Muscle Physiology Output (6 cols) */}
          <div className="lg:col-span-6 space-y-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-light">
            <h3 className="text-xs font-bold text-primary flex items-center justify-between pb-1 border-b border-light">
              <span>🧬 肌肉蛋白質合成 (MPS) 生理判定</span>
              <span className={`text-xs font-bold ${hypertrophyStatus.color}`}>
                {hypertrophyStatus.level}
              </span>
            </h3>

            <p className="text-xs text-secondary leading-relaxed">
              {hypertrophyStatus.desc}
            </p>

            {/* 3 Pillars of Hypertrophy Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-light text-center">
                <span className="text-[11px] font-bold text-primary block">1. 機械張力</span>
                <span className="text-[10px] text-secondary mt-0.5 block">
                  {setsPerExercise >= 3 ? '✅ 負荷刺激充分' : '⚠️ 張力累積不足'}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-light text-center">
                <span className="text-[11px] font-bold text-primary block">2. 白胺酸觸發</span>
                <span className="text-[10px] text-secondary mt-0.5 block">
                  {proteinGramsPerKg >= 1.5 ? '✅ MPS 充分啟動' : '⚠️ 蛋白質略低'}
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-light text-center">
                <span className="text-[11px] font-bold text-primary block">3. 骨骼肌修復</span>
                <span className="text-[10px] text-secondary mt-0.5 block">
                  {resistanceDaysPerWeek >= 2 ? '✅ 超量補償循環' : '⚠️ 頻率過低'}
                </span>
              </div>
            </div>

            {/* Medical Context */}
            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs space-y-1">
              <strong className="text-amber-800 dark:text-amber-300 block">
                💡 醫學觀點：為什麼青少年要增肌？
              </strong>
              <span className="text-slate-700 dark:text-slate-300 block leading-relaxed">
                肌肉是人體最大的血糖儲存庫（肌糖原），高肌肉量能維持極佳的<strong>胰島素敏感度</strong>，杜絕脂肪囤積。抗阻訓練更能透過肌腱拉扯骨膜，刺激成骨細胞，在青春期衝刺一生最高骨質密度！
              </span>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: Fat Loss Energy Balance */}
      {activeTab === 'fatloss' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 animate-fade-in">
          {/* Left Sliders (6 cols) */}
          <div className="lg:col-span-6 space-y-3.5 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-light">
            <h3 className="text-xs font-bold text-primary flex items-center gap-1.5 pb-1 border-b border-light">
              <Flame size={14} className="text-rose-600" />
              <span>能量守恆與每日熱量收支 (CICO) 調控</span>
            </h3>

            {/* Daily Calorie Intake */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>每日飲食熱量攝取 (Energy Intake)：</span>
                <strong className="font-mono text-purple-600">{dailyCalorieIntake} kcal</strong>
              </div>
              <input
                type="range"
                min="1300"
                max="3000"
                step="50"
                value={dailyCalorieIntake}
                onChange={(e) => setDailyCalorieIntake(parseInt(e.target.value))}
                className="w-full accent-purple-600"
              />
              <span className="text-[10px] text-secondary">健康底線：切勿低於基礎代謝率 (BMR {bmr} kcal)，避免代謝損傷！</span>
            </div>

            {/* Daily NEAT Steps */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>非運動性日常活動消耗 (NEAT 步數)：</span>
                <strong className="font-mono text-emerald-600">{dailyNeatSteps} 步 / 天 (+{neatCalories} kcal)</strong>
              </div>
              <input
                type="range"
                min="4000"
                max="16000"
                step="500"
                value={dailyNeatSteps}
                onChange={(e) => setDailyNeatSteps(parseInt(e.target.value))}
                className="w-full accent-emerald-600"
              />
              <span className="text-[10px] text-secondary">NEAT 佔全天總消耗 15~20%，多走樓梯、步行比單純跑步更持久！</span>
            </div>

            {/* Cardio Minutes */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>每週 Zone 2 有氧運動：</span>
                <strong className="font-mono text-cyan-600">{cardioMinutesPerWeek} 分鐘 / 週</strong>
              </div>
              <input
                type="range"
                min="0"
                max="300"
                step="15"
                value={cardioMinutesPerWeek}
                onChange={(e) => setCardioMinutesPerWeek(parseInt(e.target.value))}
                className="w-full accent-cyan-600"
              />
              <span className="text-[10px] text-secondary">Zone 2 強度心率下，脂肪氧化供能比例最高達 70%！</span>
            </div>
          </div>

          {/* Right Fat Loss Output (6 cols) */}
          <div className="lg:col-span-6 space-y-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-light">
            <h3 className="text-xs font-bold text-primary flex items-center justify-between pb-1 border-b border-light">
              <span>📉 體態重塑與體脂趨勢預測</span>
              <span className="font-mono text-xs font-bold text-rose-600 dark:text-rose-400">
                每週預估變化：{weeklyFatChangeGrams > 0 ? `+${weeklyFatChangeGrams}g 增脂` : `${weeklyFatChangeGrams}g 脂肪`}
              </span>
            </h3>

            {/* TDEE Decomposition Breakdown */}
            <div className="space-y-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-light text-xs">
              <div className="font-bold text-primary mb-1">每日能量支出分解 (TDEE: {tdee} kcal)：</div>
              <div className="flex items-center gap-2">
                <span className="w-20 text-[11px] text-secondary">1. 基礎代謝 (BMR):</span>
                <div className="flex-1 bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full" style={{ width: `${Math.round((bmr / tdee) * 100)}%` }} />
                </div>
                <span className="font-mono font-bold text-blue-600 w-16 text-right">{bmr} kcal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-20 text-[11px] text-secondary">2. 日常活動 (NEAT):</span>
                <div className="flex-1 bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full" style={{ width: `${Math.round((neatCalories / tdee) * 100)}%` }} />
                </div>
                <span className="font-mono font-bold text-emerald-600 w-16 text-right">{neatCalories} kcal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-20 text-[11px] text-secondary">3. 運動消耗 (EAT):</span>
                <div className="flex-1 bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-cyan-500 h-full" style={{ width: `${Math.round((eatCalories / tdee) * 100)}%` }} />
                </div>
                <span className="font-mono font-bold text-cyan-600 w-16 text-right">{eatCalories} kcal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-20 text-[11px] text-secondary">4. 攝食熱效應 (TEF):</span>
                <div className="flex-1 bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full" style={{ width: `${Math.round((tefCalories / tdee) * 100)}%` }} />
                </div>
                <span className="font-mono font-bold text-amber-600 w-16 text-right">{tefCalories} kcal</span>
              </div>
            </div>

            {/* Visceral vs Subcutaneous Fat Insight */}
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs space-y-1">
              <strong className="text-blue-800 dark:text-blue-300 block">
                🛡️ 醫學減脂核心：先減「內臟脂肪 (Visceral Fat)」！
              </strong>
              <span className="text-slate-700 dark:text-slate-300 block leading-relaxed">
                包覆在肝臟、胰臟周圍的內臟脂肪會釋放發炎因子促使胰島素阻抗。只要維持 300~500 kcal 溫和熱量赤字，身體會優先燃燒危害最大的內臟脂肪，保護心臟血管！
              </span>
            </div>
          </div>
        </div>
      )}

      {/* MODE 3: 5 Fitness Components Radar */}
      {activeTab === 'radar' && (
        <div className="space-y-4 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {[
              { name: '1. 心肺耐力', test: '800m 跑走', target: '4分20秒以內', desc: '心臟送血與肺部氧氣利用效能，預防心血管病基石', color: '#06b6d4' },
              { name: '2. 肌力', test: '握力 / 立定跳遠', target: '跳遠 150cm 以上', desc: '肌肉克服最大阻力之能力，支撐骨架維持良好體態', color: '#3b82f6' },
              { name: '3. 肌耐力', test: '仰臥起坐 / 捲腹', target: '30~38 次 / 1分鐘', desc: '肌肉長時間維持收縮能力，確保讀書不駝背腰痠', color: '#8b5cf6' },
              { name: '4. 柔軟度', test: '坐姿體前彎', target: '28cm 以上', desc: '關節活動幅度與肌肉肌腱筋膜延展性，防運動拉傷', color: '#10b981' },
              { name: '5. 身體組成', test: 'BMI 與體脂率', target: 'BMI 15.5 ~ 21.5', desc: '肌肉組織與脂肪組織比例，維持最高代謝活性水槽', color: '#f59e0b' }
            ].map(comp => (
              <div 
                key={comp.name} 
                className="p-3.5 rounded-xl border bg-white dark:bg-slate-900 flex flex-col justify-between"
                style={{ borderColor: 'var(--border-light)' }}
              >
                <div>
                  <span className="font-black text-xs block mb-1" style={{ color: comp.color }}>
                    {comp.name}
                  </span>
                  <span className="text-[11px] font-bold text-primary block">
                    檢測：{comp.test}
                  </span>
                  <p className="text-[10px] text-secondary mt-1 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
                <div className="mt-2 pt-2 border-t border-light text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  六年級常模：{comp.target}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 text-xs space-y-1.5">
            <div className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
              <Award size={15} />
              <span>教育部體適能護照金銀銅牌目標</span>
            </div>
            <p className="text-secondary leading-relaxed">
              健康體適能不是為了跟同學競爭，而是送給自己未來的健康資本！每週累積 150 分鐘中中度活動，全面均衡強化五大指標，就能在身心蛻變期擁有最強免疫力與挺拔體態！
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
