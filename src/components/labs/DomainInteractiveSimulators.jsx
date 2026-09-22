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
  Award
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
