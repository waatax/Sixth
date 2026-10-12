import { useState, useMemo } from 'react';
import { 
  GraduationCap, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle, 
  CheckCircle2, 
  Target, 
  Compass, 
  Sparkles, 
  Volume2, 
  Copy, 
  Check, 
  BookOpen, 
  Layers
} from 'lucide-react';
import { speechEngine } from '../../utils/speechHelper';
import { playSound, triggerHaptic, dispatchDynamicIsland } from '../../utils/soundEffects';

/**
 * 🎓 最強小六 (Sixth) 108 課綱六年級深度研經考點錦囊 (LessonDeepStudyDossier)
 * 專為電腦全螢幕橫向講堂與深度精讀打造的高規格研經手冊：
 * 整合官方學習指標、核心探究三問、歷屆段考三大避坑指南、審題關鍵字破題雷達與國中銜接階梯。
 */
const LessonDeepStudyDossier = ({ 
  unitId, 
  unitTitle = '', 
  bridgeData = null, 
  competencyCode = '數-E-A1'
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('pitfalls'); // 'pitfalls' | 'standards' | 'radar' | 'juniorHigh'
  const [copied, setCopied] = useState(false);

  // 根據學科與單元自動生成名師研經三大避坑解析
  const synthesizedPitfalls = useMemo(() => {
    if (unitId.startsWith('math-')) {
      if (unitId === 'math-u1') {
        return [
          {
            trap: '平分裝盒時把「最大公因數」和「最小公倍數」混用',
            desc: '題目問「每盒最多裝幾顆」是平分概念（求最大公因數 GCD）；問「至少幾顆才能剛好分完」是倍數概念（求最小公倍數 LCM）。',
            fix: '牢記口訣：分小分裝找 GCD，循環相遇找 LCM。'
          },
          {
            trap: '短除法求最小公倍數時只乘左邊質因數',
            desc: '求 GCD 只要乘左側公因數直列；求 LCM 必須呈【L型】把左邊與最底下一同乘起來！',
            fix: '短除法左直列是公因，左加底乘才是公倍。'
          },
          {
            trap: '誤以為「互質」的兩個數自己一定要是質數',
            desc: '例如 8 (合數) 和 9 (合數)，它們的最大公因數是 1，彼此互質！',
            fix: '互質代表 GCD=1，不代表各自要是質數。'
          }
        ];
      }
      if (unitId === 'math-u2') {
        return [
          {
            trap: '分數除法忘記將「帶分數」先化為「假分數」再倒數相乘',
            desc: '絕對不能直接把整數部分和分數部分分開除！必須全數化為假分數。',
            fix: '算前一步：帶分數先變假分數，除號變乘號，除數上下顛倒！'
          },
          {
            trap: '算完後問「還剩下幾公升」直接把分數餘數當成真實公升數',
            desc: '分數除法算出的餘數通常代表「幾份除數」，真實剩餘量需乘以「每杯公升數」。',
            fix: '真實剩餘容量 = 除數單位量 × 分數餘數。'
          },
          {
            trap: '誤將被除數顛倒，而非除數顛倒',
            desc: '只有「除號後面的除數」才需要倒數，前面的被除數永遠保持不動。',
            fix: '前面不動，後面顛倒相乘！'
          }
        ];
      }
      if (unitId === 'math-u3') {
        return [
          {
            trap: '小數直式除法餘數小數點忘記「垂直對齊原被除數」',
            desc: '商的小數點跟著「新位置」，但餘數的小數點必須「垂直對齊原來被除數的位置」！',
            fix: '商看新點，餘數對原點！'
          },
          {
            trap: '四捨五入求概數時算到指定位數就停手',
            desc: '題目要求「四捨五入到小數第一位」，必須多算到「小數第二位」才能正確四捨五入。',
            fix: '欲求此位，必多算下一位再四捨五入。'
          },
          {
            trap: '被除數末尾補 0 位數對不齊',
            desc: '小數點後除不盡補 0 時，直式每一位需垂直對齊，避免商少補 0。',
            fix: '直式每一行位數直列精確對齊。'
          }
        ];
      }
      if (unitId === 'math-u4') {
        return [
          {
            trap: '計算比值時將前後項位置顛倒',
            desc: '「A : B 的比值」是 前項 ÷ 後項 (A ÷ B)，絕不是 B ÷ A。',
            fix: '比值就是前除後，寫成最簡分數。'
          },
          {
            trap: '求最簡整數比時忘記比的後項不能為 0',
            desc: '比的後項相當於除數或分母，絕對不可以等於 0。',
            fix: '後項不為零，擴分約分需同乘除。'
          },
          {
            trap: '不同單位直接相比（例如 2 公尺 : 50 公分）',
            desc: '單位不同時必須先換成同一單位（200 公分 : 50 公分 = 4 : 1）。',
            fix: '比與比值比的是純量，單位必須先統一！'
          }
        ];
      }
      if (unitId === 'math-u5') {
        return [
          {
            trap: '計算扇形周長時漏加兩條半徑',
            desc: '扇形周長 = 圓弧長 + 半徑 × 2。段考最常只算出弧長就交卷！',
            fix: '扇形周長必有兩條直直的半徑邊！'
          },
          {
            trap: '圓面積公式把「直徑」直接代入當半徑',
            desc: '題目若給直徑，必須先除以 2 得到半徑，再算 半徑 × 半徑 × 3.14。',
            fix: '見直徑先除二，半徑平方乘圓周率。'
          },
          {
            trap: '把半徑 × 半徑誤寫成 半徑 × 2',
            desc: '半徑的平方是半徑乘自己，直徑才是半徑乘 2。',
            fix: '面積是平方相乘，周長是乘二倍。'
          }
        ];
      }
    }
    // 預設跨學科通用避坑指引
    return [
      {
        trap: '審題忽略關鍵限制條件（如單位、反向提問「何者錯誤」）',
        desc: '段考約有 35% 失分來自漏讀題幹括號補充條件或否定句型。',
        fix: '用筆圈出題幹中「不是」、「錯誤」、「單位換算」等限制字詞。'
      },
      {
        trap: '死記公式或專有名詞，無法靈活對應生活情境題',
        desc: '素養導向測驗注重生活應用，需理解公式背後的現實意義。',
        fix: '每個觀念嘗試用自己的話舉一個生活中的例子解釋給同學聽。'
      },
      {
        trap: '作答後未留時間驗算與倒推檢查',
        desc: '解題結束後將答案帶回題幹情境確認是否合理（例如年齡不可能為負數）。',
        fix: '答案代回題幹，檢視常理合理性。'
      }
    ];
  }, [unitId]);

  // 朗讀研經錦囊精華
  const handleSpeakDossier = () => {
    const text = `${unitTitle}。名師深度研經避坑指南。第一，${synthesizedPitfalls[0].trap}，${synthesizedPitfalls[0].fix}。第二，${synthesizedPitfalls[1].trap}，${synthesizedPitfalls[1].fix}。`;
    speechEngine.speak(text, { lang: 'zh-TW' });
    playSound('ios_tap');
    triggerHaptic('light');
  };

  // 複製研經重點到剪貼簿
  const handleCopySummary = () => {
    const lines = [
      `📌 【${unitTitle}・深度研經考點錦囊】`,
      `🎯 課綱指標：${competencyCode} | 核心心智模型：${bridgeData?.coreMentalModel || '核心概念本質理解'}`,
      `⚠️ 段考三大避坑焦點：`,
      ...synthesizedPitfalls.map((p, i) => `${i + 1}. 陷阱：${p.trap} ➔ 防雷心法：${p.fix}`),
      `🪜 國中銜接：${bridgeData?.juniorHighBridge || '七年級核心先修銜接'}`
    ].join('\n');

    try {
      navigator.clipboard.writeText(lines);
      setCopied(true);
      playSound('coin');
      triggerHaptic('medium');
      dispatchDynamicIsland({
        title: '📋 研經筆記已複製！',
        subtitle: '可貼至個人手寫筆記或隨堂草稿中複習',
        icon: '✨'
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {}
  };

  return (
    <div 
      className="card mb-5 overflow-hidden transition-all duration-300 border-2"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'rgba(99, 102, 241, 0.25)',
        borderRadius: '24px',
        boxShadow: '0 8px 30px -8px rgba(0, 0, 0, 0.08)'
      }}
    >
      {/* Dossier Header Bar */}
      <div 
        className="p-4 sm:p-5 flex items-center justify-between flex-wrap gap-3 cursor-pointer select-none"
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(16, 185, 129, 0.04) 100%)',
          borderBottom: isOpen ? '1.5px solid var(--border-light)' : 'none'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
            style={{ 
              backgroundColor: 'rgba(99, 102, 241, 0.15)', 
              color: '#6366f1',
              border: '1.5px solid rgba(99, 102, 241, 0.3)'
            }}
          >
            <GraduationCap size={22} />
          </div>

          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800">
                108 課綱六年級名師研經專題
              </span>
              <span className="text-[11px] font-mono text-tertiary">
                指標代碼: {competencyCode}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-primary m-0 mt-0.5 flex items-center gap-2">
              <span>{unitTitle}・考點精析與防雷手冊</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 hidden sm:inline-block">
                段考 95+ 關鍵
              </span>
            </h3>
          </div>
        </div>

        {/* Right Action Icons & Accordion Toggle */}
        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={handleSpeakDossier}
            className="p-2 rounded-xl text-secondary hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="語音朗讀本錦囊考點精要"
          >
            <Volume2 size={16} />
          </button>
          <button
            onClick={handleCopySummary}
            className="p-2 rounded-xl text-secondary hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="複製研經重點至剪貼簿"
          >
            {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-secondary hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1"
            title={isOpen ? '收合研經錦囊' : '展開研經錦囊'}
          >
            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>

      {/* Dossier Expanded Body */}
      {isOpen && (
        <div className="p-4 sm:p-6 animate-fade-in">
          {/* Sub Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 border-b border-light no-scrollbar">
            <button
              onClick={() => { setActiveTab('pitfalls'); playSound('click'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeTab === 'pitfalls' 
                  ? 'bg-rose-500 text-white shadow-md shadow-rose-500/25' 
                  : 'text-secondary hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <AlertTriangle size={13} />
              <span>⚠️ 歷屆三大避坑焦點</span>
            </button>

            <button
              onClick={() => { setActiveTab('radar'); playSound('click'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeTab === 'radar' 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25' 
                  : 'text-secondary hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Compass size={13} />
              <span>🔍 審題關鍵字破題雷達</span>
            </button>

            <button
              onClick={() => { setActiveTab('standards'); playSound('click'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeTab === 'standards' 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25' 
                  : 'text-secondary hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Target size={13} />
              <span>🎯 課綱素養與心智模型</span>
            </button>

            <button
              onClick={() => { setActiveTab('juniorHigh'); playSound('click'); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeTab === 'juniorHigh' 
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25' 
                  : 'text-secondary hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Layers size={13} />
              <span>🪜 國中七年級升學階梯</span>
            </button>
          </div>

          {/* Tab 1: Pitfalls (歷屆三大避坑焦點) */}
          {activeTab === 'pitfalls' && (
            <div className="space-y-3 animate-fade-in">
              <div className="text-xs text-secondary font-medium mb-1">
                根據歷年段考統計，以下 3 處是最容易因粗心或概念模糊而失分的高頻考點，務必牢記防雷心法：
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {synthesizedPitfalls.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl border flex flex-col justify-between"
                    style={{
                      backgroundColor: 'rgba(244, 63, 94, 0.04)',
                      borderColor: 'rgba(244, 63, 94, 0.2)'
                    }}
                  >
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 mb-1.5">
                        <span className="w-5 h-5 rounded-full bg-rose-500/15 flex items-center justify-center text-[11px]">
                          {idx + 1}
                        </span>
                        <span className="line-clamp-1">{item.trap}</span>
                      </div>
                      <p className="text-xs text-secondary mb-3 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div 
                      className="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-rose-200 dark:border-rose-900/50 text-xs font-bold text-primary flex items-start gap-1.5 shadow-sm"
                    >
                      <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item.fix}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Radar (審題關鍵字破題雷達) */}
          {activeTab === 'radar' && (
            <div className="space-y-3 animate-fade-in">
              <div className="text-xs text-secondary font-medium mb-1">
                考試看到以下題幹線索，立即聯想破題工具，審題快狠準：
              </div>
              {bridgeData?.keywordRadar && bridgeData.keywordRadar.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {bridgeData.keywordRadar.map((kw, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-2xl border flex flex-col justify-between"
                      style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        borderColor: 'var(--border-light)'
                      }}
                    >
                      <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 mb-1.5">
                        <span className="text-sm">🎯</span>
                        <span>題幹關鍵字：{kw.trigger}</span>
                      </div>
                      <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded-xl border border-emerald-200 dark:border-emerald-800">
                        <Sparkles size={13} />
                        <span>破題工具：{kw.tool}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-tertiary text-xs text-secondary">
                  💡 本課聚焦全域核心理解，請詳讀課堂重點速查表與經典例題步驟。
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Standards (課綱指標與心智模型) */}
          {activeTab === 'standards' && (
            <div className="space-y-3 animate-fade-in">
              <div 
                className="p-4 rounded-2xl border"
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.05)',
                  borderColor: 'rgba(59, 130, 246, 0.2)'
                }}
              >
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1 flex items-center gap-1.5">
                  <BookOpen size={14} />
                  <span>核心心智模型 (Mental Model)：</span>
                </div>
                <p className="text-xs sm:text-sm text-primary font-medium m-0 leading-relaxed">
                  {bridgeData?.coreMentalModel || '建立跨章節的本質幾何與數量抽象概念，看見算理背後的生活現實意義。'}
                </p>
              </div>

              {bridgeData?.prerequisite && (
                <div 
                  className="p-4 rounded-2xl border"
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    borderColor: 'var(--border-light)'
                  }}
                >
                  <div className="text-xs font-bold text-secondary mb-1 flex items-center gap-1.5">
                    <span>⬅️</span>
                    <span>先備基礎回溯（三年級~五年級先備觀念）：</span>
                  </div>
                  <p className="text-xs text-secondary m-0 leading-relaxed">
                    {bridgeData.prerequisite}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tab 4: Junior High (國中七年級升學階梯) */}
          {activeTab === 'juniorHigh' && (
            <div className="space-y-3 animate-fade-in">
              <div 
                className="p-4 rounded-2xl border"
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.05)',
                  borderColor: 'rgba(16, 185, 129, 0.25)'
                }}
              >
                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
                  <GraduationCap size={15} />
                  <span>國中七年級知識銜接藍圖：</span>
                </div>
                <p className="text-xs sm:text-sm text-primary font-medium m-0 leading-relaxed">
                  {bridgeData?.juniorHighBridge || '國中第一冊核心課程延伸：將小六算理拓展至負數運算、一元一次方程式與幾何證明。'}
                </p>
              </div>

              {bridgeData?.lifeApplication && (
                <div 
                  className="p-3.5 rounded-2xl border text-xs text-secondary flex items-start gap-2"
                  style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-light)' }}
                >
                  <span className="text-base">🌍</span>
                  <div>
                    <span className="font-bold text-primary">生活素養探究：</span>
                    <span>{bridgeData.lifeApplication}</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LessonDeepStudyDossier;
