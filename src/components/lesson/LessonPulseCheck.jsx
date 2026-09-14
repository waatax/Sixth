import { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Sparkles, RefreshCw, Zap } from 'lucide-react';
import { playSound, triggerHaptic, dispatchDynamicIsland } from '../../utils/soundEffects';
import { useGamification } from '../../context/GamificationContext';
import confetti from 'canvas-confetti';

// Curated 5-second pulse check bank for key units
const PULSE_DATA = {
  'math-u1': {
    question: '12 與 18 的「最大公因數 (GCD)」是多少？',
    options: ['6', '36'],
    correct: 0,
    hint: '12 的因數有 1,2,3,4,6,12；18 的因數有 1,2,3,6,9,18，最大的公因數是 6！'
  },
  'math-u2': {
    question: '計算「分數的除法」時，除以一個分數等於乘以它的？',
    options: ['倒數 (分子分母顛倒)', '相反數 (加負號)'],
    correct: 0,
    hint: '例如 ÷ 2/3 = × 3/2，除以分數等於乘以其倒數！'
  },
  'math-u3': {
    question: '在小數直式除法中，「餘數的小數點」必須對齊哪裡？',
    options: ['原本被除數的小數點', '新移動後的小數點'],
    correct: 0,
    hint: '最常考陷阱！餘數必須對齊「原來的被除數小數點」還原真實數值！'
  },
  'math-u5': {
    question: '計算「圓周長」的正確核心公式為？',
    options: ['直徑 × 3.14', '半徑 × 3.14'],
    correct: 0,
    hint: '圓周長 = 直徑 × 3.14（或 半徑 × 2 × 3.14）！'
  },
  'math-u6': {
    question: '計算「圓面積」的正確核心公式為？',
    options: ['半徑 × 半徑 × 3.14', '直徑 × 3.14'],
    correct: 0,
    hint: '圓面積 = 半徑 × 半徑 × 3.14！'
  },
  'math-u7': {
    question: '小明跑 100 公尺花了 20 秒，他的平均秒速是？',
    options: ['5 公尺/秒', '20 公尺/秒'],
    correct: 0,
    hint: '速率 = 距離 ÷ 時間 = 100 ÷ 20 = 5 m/s！'
  },
  'sci-u1': {
    question: '在氣象圖中，「高氣壓中心」周圍的天氣通常呈現？',
    options: ['晴朗乾燥、少雲', '陰雨綿綿、狂風'],
    correct: 0,
    hint: '高氣壓中心空氣下沉，不易凝結水氣，天氣晴朗穩定！'
  },
  'sci-u2': {
    question: '把「藍色石蕊試紙」浸入檸檬汁（酸性），試紙會變成什麼顏色？',
    options: ['紅色', '維持藍色'],
    correct: 0,
    hint: '酸變紅、鹼變藍！酸性水溶液會使藍色石蕊試紙變為紅色。'
  },
  'sci-u3': {
    question: '下列哪種方法可以使「電磁鐵的磁力」變得更強？',
    options: ['增加漆包線圈匝數與串聯電池', '減少電池數量'],
    correct: 0,
    hint: '增加線圈匝數、增強電流（串聯電池）與加裝鐵芯都能大幅增強磁力！'
  },
  'sci-u6': {
    question: '使用槓桿想要達到「省力效果」，必須滿足什麼條件？',
    options: ['施力臂 ＞ 抗力臂', '施力臂 ＜ 抗力臂'],
    correct: 0,
    hint: '施力 × 施力臂 = 抗力 × 抗力臂，施力臂越長就越省力！'
  },
  'sci-u9': {
    question: '琴弦振動越快（頻率越快），聽起來的聲音「音調」會？',
    options: ['越高 (尖銳)', '越低 (沉重)'],
    correct: 0,
    hint: '頻率越高，音調越高；振動幅度越大，音量才越大！'
  },
  'eng-u1': {
    question: '英文中描述具體時間點（例如 7:30 AM），應該使用哪一個介系詞？',
    options: ['at 7:30', 'in 7:30'],
    correct: 0,
    hint: '具體時刻用 at (at 7:30)，月份季節用 in，星期與日期用 on！'
  },
  'eng-u2': {
    question: '動詞 "go" 的過去式不規則變化是？',
    options: ['went', 'goed'],
    correct: 0,
    hint: 'go 是高頻不規則動詞，過去式為 went！'
  },
  'man-u1': {
    question: '閱讀理解策略中，「今天氣溫 26 度」屬於事實還是觀點？',
    options: ['事實 (Fact)', '觀點 (Opinion)'],
    correct: 0,
    hint: '有客觀數據驗證的是「事實」，個人感受（例如好舒服）才是「觀點」！'
  },
  'soc-u1': {
    question: '臺灣歷史上的「解嚴（解除戒嚴令）」發生於西元幾年？',
    options: ['1987 年', '2000 年'],
    correct: 0,
    hint: '民國 76 年（西元 1987 年）蔣經國總統宣告臺灣地區解除戒嚴！'
  },
  'soc-u6': {
    question: '聯合國制定的全球永續發展目標 (SDGs) 總共有幾大目標？',
    options: ['17 項指標', '10 項指標'],
    correct: 0,
    hint: '聯合國 SDGs 共有 17 大目標，涵蓋消除貧窮、減碳、優質教育等！'
  },
  'pe-u2': {
    question: '國健署「我的餐盤」六大口訣中，每餐水果份量約為？',
    options: ['每餐水果拳頭大', '每餐水果西瓜大'],
    correct: 0,
    hint: '口訣：「每天早晚一杯奶、每餐水果拳頭大、菜比水果多一點」！'
  },
  'pe-u3': {
    question: '施行 CPR 心外按摩時，對成人或高年級學童的按壓深度約為？',
    options: ['約 5 公分', '約 1 公分'],
    correct: 0,
    hint: '胸外按壓深度需達約 5 公分（不超過 6 公分），每分鐘 100~120 次！'
  },
  'comp-u1': {
    question: '時間管理四象限中，高效自律者最應該主動投入時間的是？',
    options: ['第二象限：重要但不緊急', '第四象限：不重要不緊急'],
    correct: 0,
    hint: '第二象限（預習、運動、閱讀）平時多做，就能避免事情變成緊急大災難！'
  }
};

const LessonPulseCheck = ({ unitId, unitTitle = '', keyConcepts = [] }) => {
  const { addCoins, addXp } = useGamification();
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Get question for unit or fallback
  const pulse = PULSE_DATA[unitId] || {
    question: `本課的核心觀念重點：「${keyConcepts[0] || unitTitle}」，你是否已經理解掌握？`,
    options: ['是的，完全理解！', '還在思考中'],
    correct: 0,
    hint: `記住關鍵詞：${keyConcepts.join('、') || '按部就班拆解題目'}，就能輕鬆拿高分！`
  };

  const handleSelectOption = (idx) => {
    if (hasAnswered && isCorrect) return;

    setSelectedIdx(idx);
    setHasAnswered(true);

    if (idx === pulse.correct) {
      setIsCorrect(true);
      playSound('coin');
      triggerHaptic('heavy');
      addCoins(5);
      addXp(15, 'pulse_check_correct');
      dispatchDynamicIsland({
        title: '⚡ 5秒概念快測答對！',
        subtitle: '觀念秒懂・獲得 +5 🪙 +15 XP',
        icon: '🎯'
      });
      confetti({ particleCount: 35, spread: 50, origin: { y: 0.85 } });
    } else {
      setIsCorrect(false);
      playSound('click');
      triggerHaptic('light');
    }
  };

  return (
    <div className="lesson-pulse-card my-6">
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-1.5 font-bold text-xs text-amber-700 dark:text-amber-400">
          <Zap size={15} className="fill-amber-500" />
          <span>⚡ 5秒概念脈搏快測 (Concept Pulse Check)</span>
        </div>
        <span className="badge badge-accent text-[10px]">即時多巴胺反饋</span>
      </div>

      <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-3">
        ❓ {pulse.question}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {pulse.options.map((opt, idx) => {
          let btnClass = 'pulse-option-btn';
          if (hasAnswered) {
            if (idx === pulse.correct) {
              btnClass += ' correct';
            } else if (idx === selectedIdx && !isCorrect) {
              btnClass += ' wrong';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelectOption(idx)}
              className={btnClass}
              disabled={hasAnswered && isCorrect}
            >
              <div className="flex items-center justify-between w-full">
                <span>{opt}</span>
                {hasAnswered && idx === pulse.correct && (
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                )}
                {hasAnswered && idx === selectedIdx && !isCorrect && (
                  <XCircle size={16} className="text-rose-500 shrink-0" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {hasAnswered && (
        <div className={`pulse-feedback-panel mt-3 p-3 rounded-lg text-xs leading-relaxed animate-fade-in ${isCorrect ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800' : 'bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-200 dark:border-rose-800'}`}>
          <div className="font-bold flex items-center gap-1 mb-1">
            {isCorrect ? (
              <>
                <Sparkles size={13} className="text-emerald-600" />
                <span>恭喜答對！大腦神經元成功固化此知識！(+5 🪙 +15 XP)</span>
              </>
            ) : (
              <>
                <HelpCircle size={13} className="text-rose-600" />
                <span>差一點點！再思考一下，請看名師點撥：</span>
              </>
            )}
          </div>
          <div>{pulse.hint}</div>
          {!isCorrect && (
            <button
              onClick={() => {
                setHasAnswered(false);
                setSelectedIdx(null);
              }}
              className="mt-2 btn-outline text-[11px] py-0.5 px-2 rounded flex items-center gap-1"
            >
              <RefreshCw size={11} />
              <span>點我重新嘗試</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default LessonPulseCheck;
