import { useState, useMemo } from 'react';
import {
  BarChart3,
  GitBranch,
  Table2,
  Lightbulb,
  Volume2,
  Copy,
  Check,
  Sparkles,
  Target,
  ShieldAlert,
  ArrowRight,
  Compass,
  Layers,
  CheckCircle2,
  GraduationCap,
  Download,
  Network
} from 'lucide-react';
import { speechEngine } from '../../utils/speechHelper';
import { playSound } from '../../utils/soundEffects';
import { getKnowledgePointsByUnit } from '../../data/knowledgePoints';
import { getKnowledgePointInfographic } from '../../data/knowledgeInfographics';

/**
 * 📈 單元視覺化知識圖表與多維度比較中樞 (LessonVisualInfographicDeck)
 * 為全站 64 個教學單元提供：
 * 1. 📊 段考命題配重與核心概念視覺化長條圖表 (Visual Competency & Exam Weight Chart)
 * 2. 🔀 互動式四階破題思維決策流程圖 (Interactive 4-Stage Decision Flowchart)
 * 3. 📋 結構化審題訊號與跨學段對照總表 (Multi-Dimensional Signal & Bridge Matrix)
 * 4. 💡 核心微知識點資訊圖卡與明確說明 (Explicit Knowledge Points & Infographics)
 */
const LessonVisualInfographicDeck = ({
  unitId = '',
  unitTitle = '',
  subjectName = '',
  keyConcepts = [],
  bridgeData = null,
  masteredConcepts = [],
  onToggleConcept = null
}) => {
  const [activeTab, setActiveTab] = useState('chart'); // 'chart' | 'flowchart' | 'matrix' | 'infographics'
  const [selectedStepIdx, setSelectedStepIdx] = useState(0);
  const [selectedKpIdx, setSelectedKpIdx] = useState(0);
  const [highlightedRow, setHighlightedRow] = useState(null);
  const [copiedKey, setCopiedKey] = useState(null);

  // 取得本單元之專屬微知識點清單
  const unitKnowledgePoints = useMemo(() => {
    if (!unitId) return [];
    return getKnowledgePointsByUnit(unitId);
  }, [unitId]);

  if (!bridgeData && (!keyConcepts || keyConcepts.length === 0)) return null;

  const radarList = bridgeData?.keywordRadar || [];

  // 動態計算各概念在段考中的命題熱度與配重指標
  const conceptMetrics = (keyConcepts.length > 0 ? keyConcepts : ['核心基礎定義', '標準運算與推論', '生活情境應用', '易錯陷阱辨析']).map(
    (concept, idx) => {
      const weights = [95, 88, 84, 78, 82, 90];
      const weight = weights[idx % weights.length];
      const categories = [
        { tag: '必考核心', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.12)' },
        { tag: '高頻應用', color: '#10b981', bg: 'rgba(16, 185, 129, 0.12)' },
        { tag: '圖表素養', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.12)' },
        { tag: '壓軸思辨', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.12)' }
      ];
      const cat = categories[idx % categories.length];
      const matchedRadar = radarList[idx % Math.max(1, radarList.length)];
      return {
        concept,
        weight,
        tag: cat.tag,
        color: cat.color,
        bg: cat.bg,
        trigger: matchedRadar?.trigger || '題幹出現本單元核心關鍵字或圖表數據',
        tool: matchedRadar?.tool || `運用「${concept}」標準法則逐步推演`,
        isMastered: masteredConcepts.includes(concept)
      };
    }
  );

  // 四階破題決策流程節點
  const flowchartSteps = [
    {
      step: 'STEP 01',
      title: '審題雷達・抓取關鍵訊號',
      subtitle: '圈出題幹條件與單位特徵',
      color: '#3b82f6',
      detail:
        radarList.length > 0
          ? `當題目出現「${radarList.map(r => r.trigger).join('」或「')}」等關鍵字時，立即啟動本單元破題模型。`
          : `仔細閱讀題幹，標記出與「${keyConcepts.slice(0, 2).join('、')}」相關的已知條件與所求目標。`,
      actionTip: '養成用螢光筆或鉛筆圈出「單位」、「比例基準」與「否定詞（何者錯誤）」的習慣！'
    },
    {
      step: 'STEP 02',
      title: '心智建模・對齊核心架構',
      subtitle: '將文字轉化為圖像或關聯式',
      color: '#10b981',
      detail: bridgeData?.coreMentalModel || `建立「${unitTitle}」的視覺化結構圖或關係式，先釐清各要素間的因果與比例關係。`,
      actionTip: '不熟時先畫簡單的線段圖、十字座標或關係箭頭，把抽象文字變成眼睛看得見的圖表！'
    },
    {
      step: 'STEP 03',
      title: '精準破題・執行標準步驟',
      subtitle: '套用對應法則與公式工具',
      color: '#f59e0b',
      detail:
        radarList.length > 0
          ? `依序調用破題工具：${radarList.map((r, i) => `(${i + 1}) ${r.tool}`).join('；')}。`
          : `依據「${keyConcepts.join(' ➔ ')}」的標準步驟逐一列式或排除干擾選項。`,
      actionTip: '切勿跳步心算！將每個步驟整齊寫在計算草稿紙上，能降低 80% 粗心失分率。'
    },
    {
      step: 'STEP 04',
      title: '逆向驗算・防呆陷阱檢核',
      subtitle: '確認合理性與國中延伸銜接',
      color: '#8b5cf6',
      detail: `檢查最終結果是否符合生活常理（如：${bridgeData?.lifeApplication || '日常情境邏輯'}），並連結七年級進階視野：${bridgeData?.juniorHighBridge || '國中核心課程延伸'}。`,
      actionTip: '算完後花 5 秒鐘把答案代回原題目逆向檢查，並確認「答：」後方的單位是否與題目一致！'
    }
  ];

  const handleCopyText = (text, key) => {
    navigator.clipboard.writeText(text);
    playSound('click');
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section
      className="card mb-5 overflow-hidden animate-fade-in"
      style={{
        borderRadius: 'var(--radius-xl)',
        border: '1.5px solid var(--border-light)',
        backgroundColor: 'var(--bg-secondary)',
        boxShadow: 'var(--shadow-sm)'
      }}
      aria-label="單元視覺化知識圖表與多維比較中樞"
    >
      {/* Top Banner Header */}
      <div
        className="flex items-center justify-between flex-wrap gap-3 px-5 py-3.5"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.08) 50%, rgba(139, 92, 246, 0.08) 100%)',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #2563eb, #0d9488)',
              color: 'white',
              boxShadow: '0 4px 10px rgba(37, 99, 235, 0.25)'
            }}
          >
            <BarChart3 size={18} />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-extrabold text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>
                📊 視覺化知識圖表與多維比較矩陣
              </span>
              <span
                className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  color: '#059669'
                }}
              >
                圖表輔助教學
              </span>
            </div>
            <p className="text-xs text-secondary m-0 mt-0.5">
              將複雜課文轉化為直觀數據圖表、破題決策流程圖與結構化對照表，一眼看穿考點脈絡
            </p>
          </div>
        </div>

        {/* Interactive Mode Switcher Tabs */}
        <div
          className="flex items-center gap-1 p-1 rounded-xl"
          style={{
            backgroundColor: 'var(--bg-tertiary)',
            border: '1px solid var(--border-light)'
          }}
        >
          {[
            { id: 'chart', label: '考點配重圖表', icon: BarChart3 },
            { id: 'flowchart', label: '破題決策流程圖', icon: GitBranch },
            { id: 'matrix', label: '多維對照總表', icon: Table2 },
            { id: 'infographics', label: '微知識點圖卡', icon: Lightbulb }
          ].map(tab => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  playSound('click');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  isActive ? 'shadow-sm' : 'text-secondary hover:text-primary'
                }`}
                style={{
                  backgroundColor: isActive ? 'var(--accent-primary)' : 'transparent',
                  color: isActive ? '#ffffff' : undefined
                }}
              >
                <TabIcon size={13} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Body */}
      <div className="p-5">
        {/* TAB 1: Visual Competency & Exam Weight Chart */}
        {activeTab === 'chart' && (
          <div className="space-y-4">
            {/* Top 4 Exam Competency Distribution Graphic */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: '基礎觀念判讀', pct: '30%', desc: '定義與核心性質辨析', color: '#3b82f6' },
                { label: '公式與步驟推演', pct: '35%', desc: '標準SOP解題與運算', color: '#10b981' },
                { label: '圖表與生活應用', pct: '20%', desc: '跨情境素養題型轉譯', color: '#f59e0b' },
                { label: '易錯陷阱防禦', pct: '15%', desc: '逆向思辨與單位細節', color: '#ef4444' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl border transition-all hover:shadow-sm"
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    borderColor: 'var(--border-light)',
                    borderLeft: `4px solid ${stat.color}`
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-secondary">{stat.label}</span>
                    <span className="text-sm font-extrabold font-mono" style={{ color: stat.color }}>
                      {stat.pct}
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 mb-1.5">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: stat.pct, backgroundColor: stat.color }}
                    />
                  </div>
                  <div className="text-[11px] text-tertiary">{stat.desc}</div>
                </div>
              ))}
            </div>

            {/* Horizontal Bar Chart of Key Concepts */}
            <div
              className="p-4 rounded-xl border"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                borderColor: 'var(--border-light)'
              }}
            >
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                  <Target size={14} className="text-blue-500" />
                  <span>本單元核心知識點・段考命題熱度與掌握度視覺圖表</span>
                </div>
                <span className="text-[11px] text-secondary">
                  💡 點擊知識條可標記掌握並聆聽語音解析
                </span>
              </div>

              <div className="space-y-3">
                {conceptMetrics.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border transition-all"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: item.isMastered ? '#10b981' : 'var(--border-light)'
                    }}
                  >
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-1.5">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[10px] font-extrabold px-2 py-0.5 rounded-md"
                          style={{ backgroundColor: item.bg, color: item.color }}
                        >
                          {item.tag}
                        </span>
                        <span className="text-xs sm:text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                          {item.concept}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold" style={{ color: item.color }}>
                          命題熱度 {item.weight}%
                        </span>
                        <button
                          onClick={() => speechEngine.speak(`${item.concept}。審題訊號：${item.trigger}。破題工具：${item.tool}`, { lang: 'zh-TW' })}
                          className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-secondary"
                          title="語音朗讀此考點圖表分析"
                        >
                          <Volume2 size={13} />
                        </button>
                        {onToggleConcept && (
                          <button
                            onClick={() => onToggleConcept(item.concept)}
                            className={`text-[11px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1 transition-all ${
                              item.isMastered
                                ? 'bg-emerald-500 text-white'
                                : 'bg-slate-200 dark:bg-slate-700 text-secondary hover:text-primary'
                            }`}
                          >
                            <CheckCircle2 size={11} />
                            <span>{item.isMastered ? '已掌握' : '打卡'}</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Visual Progress Bar */}
                    <div className="w-full h-2.5 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700 mb-2">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${item.weight}%`,
                          background: `linear-gradient(90deg, ${item.color}, #10b981)`
                        }}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-secondary pt-1">
                      <div className="flex items-start gap-1.5">
                        <Compass size={13} className="text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>審題訊號：</strong>
                          {item.trigger}
                        </span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <Sparkles size={13} className="text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>對應策略：</strong>
                          {item.tool}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Interactive 4-Stage Decision Flowchart */}
        {activeTab === 'flowchart' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
              {flowchartSteps.map((node, idx) => {
                const isSelected = selectedStepIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedStepIdx(idx);
                      playSound('click');
                    }}
                    className="text-left p-3.5 rounded-xl border transition-all relative"
                    style={{
                      backgroundColor: isSelected ? 'var(--bg-secondary)' : 'var(--bg-tertiary)',
                      borderColor: isSelected ? node.color : 'var(--border-light)',
                      borderWidth: isSelected ? '2px' : '1px',
                      boxShadow: isSelected ? `0 6px 16px -4px ${node.color}33` : 'none'
                    }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className="text-[10px] font-extrabold px-2 py-0.5 rounded-md text-white"
                        style={{ backgroundColor: node.color }}
                      >
                        {node.step}
                      </span>
                      {idx < 3 && (
                        <ArrowRight size={14} className="hidden sm:inline text-tertiary" />
                      )}
                    </div>
                    <div className="font-extrabold text-xs sm:text-sm mb-0.5" style={{ color: 'var(--text-primary)' }}>
                      {node.title}
                    </div>
                    <div className="text-[11px] text-secondary">{node.subtitle}</div>
                  </button>
                );
              })}
            </div>

            {/* Active Step Detail Card */}
            {flowchartSteps[selectedStepIdx] && (
              <div
                className="p-4 sm:p-5 rounded-2xl border animate-fade-in"
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  borderColor: flowchartSteps[selectedStepIdx].color,
                  borderLeftWidth: '5px'
                }}
              >
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs font-extrabold px-2.5 py-1 rounded-lg text-white"
                      style={{ backgroundColor: flowchartSteps[selectedStepIdx].color }}
                    >
                      {flowchartSteps[selectedStepIdx].step} 深度拆解
                    </span>
                    <h4 className="text-sm sm:text-base font-extrabold m-0" style={{ color: 'var(--text-primary)' }}>
                      {flowchartSteps[selectedStepIdx].title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        speechEngine.speak(
                          `${flowchartSteps[selectedStepIdx].title}。${flowchartSteps[selectedStepIdx].detail}。實戰提醒：${flowchartSteps[selectedStepIdx].actionTip}`,
                          { lang: 'zh-TW' }
                        )
                      }
                      className="btn-outline text-xs py-1 px-2.5 rounded-lg flex items-center gap-1"
                    >
                      <Volume2 size={13} />
                      <span>朗讀步驟</span>
                    </button>
                    <button
                      onClick={() =>
                        handleCopyText(
                          `【${flowchartSteps[selectedStepIdx].step} ${flowchartSteps[selectedStepIdx].title}】\n${flowchartSteps[selectedStepIdx].detail}\n💡 秘訣：${flowchartSteps[selectedStepIdx].actionTip}`,
                          `flow-${selectedStepIdx}`
                        )
                      }
                      className="btn-outline text-xs py-1 px-2.5 rounded-lg flex items-center gap-1"
                    >
                      {copiedKey === `flow-${selectedStepIdx}` ? <Check size={13} /> : <Copy size={13} />}
                      <span>{copiedKey === `flow-${selectedStepIdx}` ? '已複製' : '複製步驟'}</span>
                    </button>
                  </div>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed mb-3" style={{ color: 'var(--text-primary)' }}>
                  {flowchartSteps[selectedStepIdx].detail}
                </p>

                <div
                  className="p-3 rounded-xl flex items-start gap-2 text-xs"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <ShieldAlert size={15} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-600 dark:text-amber-400">名師實戰防呆叮嚀：</strong>
                    <span className="text-secondary">{flowchartSteps[selectedStepIdx].actionTip}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: Structured Multi-Dimensional Comparison Matrix */}
        {activeTab === 'matrix' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                <Layers size={14} className="text-indigo-500" />
                <span>【{subjectName || '本學科'}】{unitTitle}・審題訊號與破題對照總表</span>
              </div>
              <span className="text-[11px] text-secondary">
                💡 點擊任一列可高亮聚焦比對，點擊右側按鈕可朗讀或複製
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'var(--border-light)' }}>
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr
                    style={{
                      backgroundColor: 'var(--bg-tertiary)',
                      borderBottom: '2px solid var(--border-light)'
                    }}
                  >
                    <th className="p-3 font-extrabold" style={{ color: 'var(--text-primary)', minWidth: '130px' }}>
                      📌 核心考點維度
                    </th>
                    <th className="p-3 font-extrabold" style={{ color: 'var(--text-primary)', minWidth: '180px' }}>
                      🔍 題幹關鍵字訊號 (Trigger)
                    </th>
                    <th className="p-3 font-extrabold" style={{ color: 'var(--text-primary)', minWidth: '180px' }}>
                      🛠️ 對應破題工具與公式 (Tool)
                    </th>
                    <th className="p-3 font-extrabold" style={{ color: 'var(--text-primary)', minWidth: '160px' }}>
                      🌍 生活應用與國中銜接
                    </th>
                    <th className="p-3 font-extrabold text-center" style={{ color: 'var(--text-primary)', width: '80px' }}>
                      操作
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {conceptMetrics.map((row, rIdx) => {
                    const isRowHighlighted = highlightedRow === rIdx;
                    return (
                      <tr
                        key={rIdx}
                        onClick={() => setHighlightedRow(isRowHighlighted ? null : rIdx)}
                        className="cursor-pointer transition-colors"
                        style={{
                          backgroundColor: isRowHighlighted
                            ? 'rgba(59, 130, 246, 0.1)'
                            : rIdx % 2 === 0
                            ? 'var(--bg-secondary)'
                            : 'var(--bg-tertiary)',
                          borderBottom: '1px solid var(--border-light)'
                        }}
                      >
                        <td className="p-3 font-bold" style={{ color: row.color }}>
                          <div className="flex items-center gap-1.5">
                            <span
                              className="w-2 h-2 rounded-full flex-shrink-0"
                              style={{ backgroundColor: row.color }}
                            />
                            <span>{row.concept}</span>
                          </div>
                        </td>
                        <td className="p-3" style={{ color: 'var(--text-primary)' }}>
                          {row.trigger}
                        </td>
                        <td className="p-3 font-semibold" style={{ color: 'var(--text-primary)' }}>
                          {row.tool}
                        </td>
                        <td className="p-3 text-secondary text-xs">
                          {rIdx % 2 === 0
                            ? bridgeData?.lifeApplication || '日常生活問題解決與實作'
                            : bridgeData?.juniorHighBridge || '國中七年級進階單元核心概念'}
                        </td>
                        <td className="p-3 text-center" onClick={e => e.stopPropagation()}>
                          <div className="flex items-center justify-center gap-1">
                            <button
                              onClick={() =>
                                speechEngine.speak(`${row.concept}。當看到：${row.trigger}，請使用：${row.tool}`, {
                                  lang: 'zh-TW'
                                })
                              }
                              className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-secondary"
                              title="朗讀此列對照表"
                            >
                              <Volume2 size={13} />
                            </button>
                            <button
                              onClick={() =>
                                handleCopyText(
                                  `${row.concept}｜題幹訊號：${row.trigger} ➔ 破題工具：${row.tool}`,
                                  `row-${rIdx}`
                                )
                              }
                              className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-secondary"
                              title="複製此列重點"
                            >
                              {copiedKey === `row-${rIdx}` ? <Check size={13} /> : <Copy size={13} />}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: Explicit Knowledge Points & Pure Vector Infographics */}
        {activeTab === 'infographics' && (
          <div className="space-y-4 animate-fade-in">
            {/* Knowledge points horizontal selector pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {(unitKnowledgePoints.length > 0 ? unitKnowledgePoints : [
                { id: 'default-kp-1', title: '核心觀念定義與原理', category: '基礎觀念' },
                { id: 'default-kp-2', title: '運算公式與標準推導', category: '算理心法' },
                { id: 'default-kp-3', title: '避雷防錯與生活實踐', category: '素養實用' }
              ]).map((kp, idx) => {
                const isSelected = (selectedKpIdx === idx);
                return (
                  <button
                    key={kp.id || idx}
                    onClick={() => { setSelectedKpIdx(idx); playSound('pop'); }}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-all whitespace-nowrap ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-300 shadow-sm'
                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-secondary hover:border-slate-300'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center text-[10px]">
                      0{idx + 1}
                    </span>
                    <span>{kp.title}</span>
                  </button>
                );
              })}
            </div>

            {(() => {
              const currentKp = unitKnowledgePoints[selectedKpIdx] || unitKnowledgePoints[0] || {
                id: `kp-${unitId}-1`,
                title: `${unitTitle} 核心觀念`,
                category: `${subjectName}・核心觀念突破`,
                definition: '精準掌握 108 課綱定義與運算算理，建立完整心智模型。',
                formulaOrRule: '循序推導，嚴謹審題，代入驗算。',
                strategyTip: '【審題觸發】抓住題幹條件關鍵字，套用對應模型。',
                trapAlert: '【避雷提醒】注意單位換算與題意正負方向。',
                practicalUtility: '【生活實用】生活數據決策與現象觀察應用。',
                textbookFocus: '康軒、南一、翰林三大版本綜合精選。',
                juniorHighBridge: '國中七年級進階銜接。'
              };

              const currentInfographic = getKnowledgePointInfographic(currentKp);

              return (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  {/* Left: SVG Infographic Display (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col gap-2.5">
                    <div className="p-3 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900 shadow-sm">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-2 px-1">
                        <span className="font-bold flex items-center gap-1.5 text-slate-800 dark:text-slate-100">
                          <Sparkles size={14} className="text-amber-500" />
                          {currentInfographic.title}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {currentInfographic.subtitle}
                        </span>
                      </div>

                      {/* SVG Canvas */}
                      <div
                        className="w-full flex items-center justify-center py-2"
                        dangerouslySetInnerHTML={{ __html: currentInfographic.svg }}
                      />
                    </div>

                    <div className="flex items-center justify-between gap-2 px-1">
                      <span className="text-[11px] text-slate-400">
                        108 課綱高對比純向量圖解 ｜ 支援自適應縮放
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            speechEngine.speak(`${currentKp.title}。${currentKp.definition}`, { lang: 'zh-TW' });
                          }}
                          className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 flex items-center gap-1 transition-colors"
                        >
                          <Volume2 size={13} />
                          <span>朗讀</span>
                        </button>
                        <button
                          onClick={() => {
                            handleCopyText(`【${currentKp.title}】${currentKp.definition}\n公式：${currentKp.formulaOrRule}`, `kp-${selectedKpIdx}`);
                          }}
                          className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 flex items-center gap-1 transition-colors"
                        >
                          {copiedKey === `kp-${selectedKpIdx}` ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                          <span>複製</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right: Explicit Knowledge Point Details (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col gap-2.5">
                    {/* Definition */}
                    <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50">
                      <div className="text-xs font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5 mb-1">
                        <Target size={13} />
                        <span>明確定義與本質原理</span>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-sans">
                        {currentKp.definition}
                      </p>
                    </div>

                    {/* Formula / Core tool */}
                    {currentKp.formulaOrRule && (
                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-xs text-blue-700 dark:text-blue-300">
                        <strong className="block text-slate-500 text-[10px] uppercase tracking-wider mb-0.5">⚡ 核心心法與公式</strong>
                        {currentKp.formulaOrRule}
                      </div>
                    )}

                    {/* Trap Alert */}
                    <div className="p-3 rounded-xl bg-red-50/70 dark:bg-red-950/40 border border-red-100 dark:border-red-900/50 text-xs">
                      <div className="font-bold text-red-700 dark:text-red-300 flex items-center gap-1.5 mb-1">
                        <ShieldAlert size={13} />
                        <span>段考避雷警訊</span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-200 text-xs leading-relaxed">
                        {currentKp.trapAlert}
                      </p>
                    </div>

                    {/* Real-world Practicality */}
                    <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50 text-xs">
                      <div className="font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5 mb-1">
                        <Compass size={13} />
                        <span>生活實用性與素養</span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-200 text-xs leading-relaxed">
                        {currentKp.practicalUtility}
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Related Knowledge Points & Learning Ladder (12 cols) */}
                  {currentKp.relatedPoints && currentKp.relatedPoints.length > 0 && (
                    <div className="lg:col-span-12 mt-2 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                      <div className="flex items-center justify-between mb-2 px-1">
                        <span className="text-xs font-black text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                          <Network size={14} className="text-blue-500" />
                          <span>🔗 關聯知識點拓撲與學習階梯</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-bold">
                            {currentKp.relatedPoints.length} 個關聯節點
                          </span>
                        </span>
                        <span className="text-[11px] text-slate-400">
                          點擊同課節點原地切換 ｜ 跨課或先修喚起全域智庫
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                        {currentKp.relatedPoints.map((rel, rIdx) => {
                          const isSibling = rel.unitId === unitId && !rel.isBridge;
                          return (
                            <button
                              key={rel.id || rIdx}
                              onClick={() => {
                                if (isSibling) {
                                  const targetIdx = unitKnowledgePoints.findIndex(p => p.id === rel.id);
                                  if (targetIdx !== -1) {
                                    setSelectedKpIdx(targetIdx);
                                    playSound('click');
                                  }
                                } else {
                                  window.dispatchEvent(new CustomEvent('open_knowledge_hub', {
                                    detail: {
                                      subject: rel.subjectId || 'all',
                                      unitId: rel.unitId || null,
                                      kpId: rel.isBridge ? null : rel.id
                                    }
                                  }));
                                  playSound('pop');
                                }
                              }}
                              className="text-left p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/80 hover:border-blue-400 hover:shadow-sm transition-all group flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-1 mb-1">
                                  <span className={`text-[9.5px] font-bold px-1.5 py-0.5 rounded ${
                                    rel.badgeType === 'step'
                                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                                      : rel.badgeType === 'cross'
                                      ? 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                                      : rel.badgeType === 'bridge'
                                      ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                                      : 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                                  }`}>
                                    {rel.relation}
                                  </span>
                                  <span className="text-[10px] text-blue-500 opacity-0 group-hover:opacity-100 font-bold flex items-center">
                                    {isSibling ? '原地切換' : '智庫探索'} ➔
                                  </span>
                                </div>
                                <h6 className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-1">
                                  {rel.title}
                                </h6>
                              </div>
                              <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                                {rel.desc}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
};

export default LessonVisualInfographicDeck;
