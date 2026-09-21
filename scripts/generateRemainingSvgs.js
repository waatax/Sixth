import fs from 'fs';
import path from 'path';
import { createSvg, outDir } from './svgHelper.js';

const remainingDiagrams = [
  // ==================== 🔬 自然科學領域 (Science) ====================
  {
    filename: 'sci_u4_concept1.svg',
    title: '變動的大地：三大岩類循環與河流流水作用 (Rocks & River Erosion)',
    subtitle: '108 課綱 INc-III-5：火成岩、沉積岩、變質岩循環與上中下游作用',
    badge: '地表地質作用',
    content: `
      <!-- Left: Three Rock Types Cycle -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">🌋 三大岩類地質循環</text>

      <!-- Igneous -->
      <circle cx="90" cy="110" r="35" fill="#ef4444" fill-opacity="0.3" stroke="#f87171" stroke-width="2"/>
      <text x="90" y="108" font-size="13" font-weight="800" fill="#fca5a5" text-anchor="middle">火成岩</text>
      <text x="90" y="125" font-size="10" fill="#cbd5e1" text-anchor="middle">安山岩/玄武岩</text>

      <!-- Sedimentary -->
      <circle cx="280" cy="110" r="35" fill="#f59e0b" fill-opacity="0.3" stroke="#fbbf24" stroke-width="2"/>
      <text x="280" y="108" font-size="13" font-weight="800" fill="#fde68a" text-anchor="middle">沉積岩</text>
      <text x="280" y="125" font-size="10" fill="#cbd5e1" text-anchor="middle">頁岩/砂岩/石灰岩</text>

      <!-- Metamorphic -->
      <circle cx="185" cy="225" r="35" fill="#a855f7" fill-opacity="0.3" stroke="#c084fc" stroke-width="2"/>
      <text x="185" y="223" font-size="13" font-weight="800" fill="#e9d5ff" text-anchor="middle">變質岩</text>
      <text x="185" y="240" font-size="10" fill="#cbd5e1" text-anchor="middle">大理岩/板岩</text>

      <text x="185" y="295" font-size="12" font-weight="700" fill="#cbd5e1" text-anchor="middle">岩石在地殼內經冷卻、風化沉積、高溫高壓不斷循環！</text>

      <!-- Right: River 3 Actions -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">🏞️ 流水三大作用 (上・中・下游)</text>

      <rect x="405" y="55" width="340" height="75" rx="8" fill="#0f172a" stroke="#2563eb"/>
      <text x="420" y="78" font-size="13" font-weight="800" fill="#60a5fa">上游：以「侵蝕作用」為主</text>
      <text x="420" y="98" font-size="12" fill="#cbd5e1">河道狹窄、坡陡水急、巨石林立，常見 V 型谷、瀑布景觀。</text>

      <rect x="405" y="140" width="340" height="75" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="420" y="163" font-size="13" font-weight="800" fill="#34d399">中游：以「搬運作用」為主</text>
      <text x="420" y="183" font-size="12" fill="#cbd5e1">河面放寬、流速漸緩、石頭碰撞磨圓成鵝卵石，形成曲流。</text>

      <rect x="405" y="225" width="340" height="75" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="420" y="248" font-size="13" font-weight="800" fill="#fbbf24">下游出海口：以「堆積作用」為主</text>
      <text x="420" y="268" font-size="12" fill="#cbd5e1">水流平緩無力，泥沙沉積形成沖積扇、三角洲與沙灘。</text>
    `
  },
  {
    filename: 'sci_u10_concept1.svg',
    title: '光學顯微鏡構造、操作步驟與倒立成像移動規律 (Microscope)',
    subtitle: '108 課綱 INa-III-3：掌握目鏡物鏡放大倍率與「像在哪裡玻片往哪移」心法',
    badge: '倒立放大虛像',
    content: `
      <!-- Left: Optical Inversion Rule -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">🔬 顯微鏡倒立成像與移動法則</text>

      <rect x="25" y="60" width="140" height="120" rx="8" fill="#0f172a" stroke="#3b82f6"/>
      <text x="95" y="85" font-size="12" font-weight="700" fill="#60a5fa" text-anchor="middle">載玻片上的實物</text>
      <text x="95" y="140" font-size="42" font-weight="900" fill="#ffffff" text-anchor="middle">e</text>

      <rect x="205" y="60" width="140" height="120" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="275" y="85" font-size="12" font-weight="700" fill="#fbbf24" text-anchor="middle">視野中所見影像</text>
      <g transform="translate(275, 130) rotate(180)">
        <text x="0" y="8" font-size="42" font-weight="900" fill="#38bdf8" text-anchor="middle">e</text>
      </g>
      <text x="275" y="170" font-size="11" fill="#fca5a5" text-anchor="middle">上下顛倒・左右相反！</text>

      <!-- Golden Movement Rule -->
      <rect x="15" y="200" width="340" height="105" rx="8" fill="#e11d48" fill-opacity="0.15" stroke="#f43f5e"/>
      <text x="25" y="225" font-size="13" font-weight="900" fill="#fb7185">🎯 玻片移動黃金定則：</text>
      <text x="25" y="250" font-size="14" font-weight="800" fill="#ffffff">「目標在視野哪裡，載玻片就往哪裡移！」</text>
      <text x="25" y="275" font-size="12" fill="#cbd5e1">例：若物像偏在視野「右上角」，想移到正中央，</text>
      <text x="25" y="295" font-size="12" font-weight="700" fill="#fde68a">載玻片就要直接往「右上角」推過去！</text>

      <!-- Right: Operating 7 Steps & Low vs High Power -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">⚙️ 低倍鏡 vs 高倍鏡四字真訣</text>

      <rect x="405" y="55" width="340" height="120" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="420" y="80" font-size="14" font-weight="800" fill="#34d399">切換高倍鏡四特徵：【暗、小、少、大】</text>
      <text x="420" y="105" font-size="12" fill="#cbd5e1">• 視野亮度變【暗】（進光量減少，需調大光圈）</text>
      <text x="420" y="125" font-size="12" fill="#cbd5e1">• 視野範圍變【小】、觀察細胞數變【少】</text>
      <text x="420" y="145" font-size="12" fill="#38bdf8">• 每個細胞影像變【大】、細節更清楚！</text>
      <text x="420" y="165" font-size="11" font-weight="700" fill="#f87171">⚠️ 特別注意：高倍鏡只能用「細調節輪」調焦！</text>

      <rect x="405" y="190" width="340" height="115" rx="8" fill="#0f172a" stroke="#3b82f6"/>
      <text x="420" y="215" font-size="13" font-weight="800" fill="#60a5fa">總放大倍率計算公式：</text>
      <text x="420" y="240" font-size="15" font-weight="800" fill="#ffffff">總倍率 ＝ 目鏡倍率 × 物鏡倍率</text>
      <text x="420" y="265" font-size="12" fill="#cbd5e1">例如：目鏡 10X × 物鏡 40X ＝ 400 倍</text>
      <text x="420" y="285" font-size="11" fill="#94a3b8">玻片標本滴水要蓋蓋玻片 45° 輕放，防止產生氣泡。</text>
    `
  },

  // ==================== 📖 國語文領域 (Mandarin) ====================
  {
    filename: 'man_u2_concept1.svg',
    title: '記敘文寫作起承轉合情節曲線與描寫技巧 (Narrative Writing)',
    subtitle: '108 課綱 6-III-1：掌握人事時地物、順敘/倒敘/插敘與情感起伏山峰圖',
    badge: '情節波瀾起伏',
    content: `
      <!-- Left: Story Arc Mountain -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">🏔️ 記敘文情節高潮山峰曲線</text>

      <!-- Curve Path -->
      <path d="M30,240 Q100,200 160,160 Q210,70 240,80 Q290,120 340,240" fill="none" stroke="#38bdf8" stroke-width="4"/>
      <!-- Dots on path -->
      <circle cx="50" cy="230" r="7" fill="#2563eb"/>
      <text x="50" y="265" font-size="12" font-weight="800" fill="#60a5fa" text-anchor="middle">起 (開端)</text>

      <circle cx="150" cy="170" r="7" fill="#10b981"/>
      <text x="150" y="150" font-size="12" font-weight="800" fill="#34d399" text-anchor="middle">承 (發展)</text>

      <circle cx="230" cy="75" r="9" fill="#ef4444"/>
      <text x="230" y="55" font-size="14" font-weight="900" fill="#f87171" text-anchor="middle">轉 (高潮危機!)</text>

      <circle cx="330" cy="235" r="7" fill="#f59e0b"/>
      <text x="330" y="265" font-size="12" font-weight="800" fill="#fbbf24" text-anchor="middle">合 (結局悟理)</text>

      <rect x="20" y="275" width="330" height="38" rx="6" fill="#0f172a" stroke="#64748b"/>
      <text x="185" y="299" font-size="11" font-weight="600" fill="#cbd5e1" text-anchor="middle">平鋪直敘易乏味・轉折衝突引共鳴・結局餘韻點題眼</text>

      <!-- Right: Writing Techniques -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">✍️ 三大敘事順序與五感摹寫</text>

      <rect x="405" y="55" width="340" height="85" rx="8" fill="#0f172a" stroke="#3b82f6"/>
      <text x="420" y="78" font-size="13" font-weight="800" fill="#60a5fa">① 敘述時間順序魔法：</text>
      <text x="420" y="98" font-size="12" fill="#cbd5e1">• 順敘法：依時間早晚推進（平穩自然）</text>
      <text x="420" y="118" font-size="12" fill="#f59e0b">• 倒敘法：先寫震撼結局再追憶（引人入勝懸疑強）</text>
      <text x="420" y="135" font-size="11" fill="#94a3b8">• 插敘法：敘事中途穿插往事補強背景</text>

      <rect x="405" y="150" width="340" height="150" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="420" y="173" font-size="13" font-weight="800" fill="#34d399">② 五感細膩刻劃 (Show, Don't Tell)：</text>
      <text x="420" y="196" font-size="12" fill="#cbd5e1">• 視覺：夕陽把整片操場染成橘紅色的糖漿</text>
      <text x="420" y="218" font-size="12" fill="#cbd5e1">• 聽覺：蝉鳴尖銳地撕裂夏日午後的寂靜</text>
      <text x="420" y="240" font-size="12" fill="#cbd5e1">• 嗅味覺：空氣中瀰漫著雨後泥土與青草的甘甜</text>
      <text x="420" y="262" font-size="12" fill="#cbd5e1">• 觸覺：冰涼的雨滴像針尖般刺痛我的臉頰</text>
      <text x="420" y="286" font-size="11" font-weight="700" fill="#fde68a">以具體動作與感官描寫取代空泛的「我很難過」！</text>
    `
  },
  {
    filename: 'man_u3_concept1.svg',
    title: '說明文與議論文思維：總分總架構與論點論據論證 (Essay Structure)',
    subtitle: '108 課綱 5-III-8：掌握說明文列數據/作比較與議論文理性批判架構',
    badge: '論證邏輯金字塔',
    content: `
      <!-- Left: Expository -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">📘 說明文「總—分—總」結構</text>

      <rect x="25" y="60" width="320" height="40" rx="6" fill="#2563eb"/>
      <text x="185" y="85" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">總說：點出說明主題與對象特徵</text>

      <rect x="25" y="110" width="320" height="110" rx="6" fill="#0f172a" stroke="#3b82f6"/>
      <text x="35" y="132" font-size="12" font-weight="800" fill="#60a5fa">分說：三大黃金說明方法</text>
      <text x="35" y="155" font-size="11" fill="#cbd5e1">1. 列數據：精確可信（如：地球表面 71% 是水）</text>
      <text x="35" y="177" font-size="11" fill="#cbd5e1">2. 作比較：具體對比（如：鯨魚心臟如一輛小汽車）</text>
      <text x="35" y="199" font-size="11" fill="#cbd5e1">3. 打比方：生動形象（如：大腦有如頂級超級電腦）</text>

      <rect x="25" y="230" width="320" height="40" rx="6" fill="#2563eb"/>
      <text x="185" y="255" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">總結：深化說明意涵或呼籲展望未來</text>

      <rect x="20" y="280" width="330" height="34" rx="6" fill="#1e293b"/>
      <text x="185" y="302" font-size="11" fill="#94a3b8" text-anchor="middle">語言特色：客觀、準確、條理分明</text>

      <!-- Right: Argumentative -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">⚖️ 議論文三大不可或缺核心</text>

      <rect x="405" y="55" width="340" height="75" rx="8" fill="#0f172a" stroke="#f43f5e"/>
      <text x="420" y="78" font-size="13" font-weight="800" fill="#fb7185">① 論點 (Claim / Point)</text>
      <text x="420" y="98" font-size="12" fill="#cbd5e1">作者的主張與明確觀點（立意明確，不模稜兩可）。</text>
      <text x="420" y="118" font-size="11" fill="#fca5a5">例：「失敗不是終點，而是邁向成功的最佳導師。」</text>

      <rect x="405" y="140" width="340" height="75" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="420" y="163" font-size="13" font-weight="800" fill="#fbbf24">② 論據 (Evidence / Support)</text>
      <text x="420" y="183" font-size="12" fill="#cbd5e1">支撐論點的材料（事實論據、名人格言、統計數字）。</text>
      <text x="420" y="203" font-size="11" fill="#fde68a">例：愛迪生發明燈泡前經歷上千次材料試驗。</text>

      <rect x="405" y="225" width="340" height="85" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="420" y="248" font-size="13" font-weight="800" fill="#34d399">③ 論證 (Reasoning / Logic)</text>
      <text x="420" y="268" font-size="12" fill="#cbd5e1">用論據來證明論點的邏輯推演過程。</text>
      <text x="420" y="292" font-size="11" fill="#94a3b8">方法：舉例論證、道理論證、對比論證、比喻論證。</text>
    `
  },

  // ==================== 🇬🇧 英語文領域 (English) ====================
  {
    filename: 'eng_u3_concept1.svg',
    title: 'Places & Asking for Directions (問路指路與空間介系詞)',
    subtitle: '108 課綱 1-III-4：Excuse me, how do I get to...? 方位介系詞與地圖導航',
    badge: 'Map & Directions',
    content: `
      <!-- Left: City Map Grid -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">🗺️ Town Map Navigation (地圖導引)</text>

      <!-- Road Grid -->
      <rect x="25" y="60" width="320" height="150" rx="8" fill="#0f172a" stroke="#475569"/>
      <line x1="185" y1="60" x2="185" y2="210" stroke="#334155" stroke-width="24"/>
      <line x1="25" y1="135" x2="345" y2="135" stroke="#334155" stroke-width="24"/>
      <text x="185" y="105" font-size="10" fill="#94a3b8" text-anchor="middle">Main St.</text>
      <text x="100" y="140" font-size="10" fill="#94a3b8" text-anchor="middle">1st Ave.</text>

      <!-- Buildings -->
      <rect x="35" y="70" width="130" height="50" rx="6" fill="#2563eb" fill-opacity="0.8"/>
      <text x="100" y="100" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">Post Office 郵局</text>

      <rect x="205" y="70" width="130" height="50" rx="6" fill="#10b981" fill-opacity="0.8"/>
      <text x="270" y="100" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">Library 圖書館</text>

      <rect x="35" y="150" width="130" height="50" rx="6" fill="#f59e0b" fill-opacity="0.8"/>
      <text x="100" y="180" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">Bank 銀行</text>

      <rect x="205" y="150" width="130" height="50" rx="6" fill="#e11d48" fill-opacity="0.8"/>
      <text x="270" y="180" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">Hospital 醫院</text>

      <rect x="20" y="225" width="330" height="85" rx="8" fill="#0f172a" stroke="#38bdf8"/>
      <text x="35" y="248" font-size="12" font-weight="700" fill="#38bdf8">🧭 空間介系詞造句：</text>
      <text x="35" y="270" font-size="11" fill="#cbd5e1">• The library is <tspan fill="#34d399" font-weight="700">across from</tspan> the post office.</text>
      <text x="35" y="290" font-size="11" fill="#cbd5e1">• The bank is <tspan fill="#fbbf24" font-weight="700">next to</tspan> the park.</text>

      <!-- Right: Giving Directions -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">🗣️ 實用問路指路核心句型</text>

      <rect x="405" y="55" width="340" height="75" rx="8" fill="#0f172a" stroke="#2563eb"/>
      <text x="420" y="78" font-size="13" font-weight="800" fill="#60a5fa">禮貌問路 (Asking)：</text>
      <text x="420" y="100" font-size="12" fill="#ffffff">"Excuse me, how do I get to the library?"</text>
      <text x="420" y="118" font-size="11" fill="#94a3b8">(不好意思，請問我要怎麼去圖書館？)</text>

      <rect x="405" y="140" width="340" height="100" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="420" y="163" font-size="13" font-weight="800" fill="#34d399">清晰指路 4 大指令 (Giving)：</text>
      <text x="420" y="185" font-size="12" fill="#cbd5e1">1. <tspan fill="#34d399" font-weight="700">Go straight</tspan> for two blocks. (直走兩個街區)</text>
      <text x="420" y="205" font-size="12" fill="#cbd5e1">2. <tspan fill="#fbbf24" font-weight="700">Turn left / right</tspan> on First Ave. (在第一大道左/右轉)</text>
      <text x="420" y="225" font-size="12" fill="#cbd5e1">3. It's <tspan fill="#f43f5e" font-weight="700">on your right</tspan>. (它就在你的右手邊)</text>

      <rect x="405" y="250" width="340" height="60" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="420" y="273" font-size="12" font-weight="800" fill="#fbbf24">Thank you for your help!</text>
      <text x="420" y="293" font-size="11" fill="#cbd5e1">You're welcome. Have a nice day! (不客氣，祝你有美好的一天)</text>
    `
  },
  {
    filename: 'eng_u8_concept1.svg',
    title: 'Adjective Degrees: Comparative & Superlative (比較級與最高級)',
    subtitle: '108 課綱 2-III-6：規則 -er/-est、more/the most 與不規則天梯圖',
    badge: '形容詞三級變化',
    content: `
      <!-- Left: Stairs of Comparison -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">🪜 形容詞三階能力天梯</text>

      <!-- Step 1: Base -->
      <rect x="30" y="200" width="95" height="70" rx="6" fill="#2563eb"/>
      <text x="77" y="235" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">原級 Base</text>
      <text x="77" y="255" font-size="12" fill="#dbeafe" text-anchor="middle">tall (高)</text>

      <!-- Step 2: Comparative -->
      <rect x="135" y="140" width="105" height="130" rx="6" fill="#10b981"/>
      <text x="187" y="175" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">比較級 (兩者)</text>
      <text x="187" y="198" font-size="14" font-weight="800" fill="#fde68a" text-anchor="middle">taller than</text>
      <text x="187" y="220" font-size="11" fill="#d1fae5" text-anchor="middle">比...更高</text>

      <!-- Step 3: Superlative -->
      <rect x="250" y="70" width="95" height="200" rx="6" fill="#e11d48"/>
      <text x="297" y="105" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">最高級 (三者+)</text>
      <text x="297" y="128" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">the tallest</text>
      <text x="297" y="150" font-size="11" fill="#ffe4e6" text-anchor="middle">全班最高</text>

      <rect x="20" y="280" width="330" height="36" rx="6" fill="#0f172a" stroke="#64748b"/>
      <text x="185" y="303" font-size="11" font-weight="600" fill="#cbd5e1" text-anchor="middle">最高級前務必加「the」！例：the tallest, the best</text>

      <!-- Right: Rules & Irregulars -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">⭐ 規則變化 vs 必考不規則金榜</text>

      <rect x="405" y="55" width="340" height="90" rx="8" fill="#0f172a" stroke="#3b82f6"/>
      <text x="420" y="78" font-size="13" font-weight="800" fill="#60a5fa">多音節字加 more / most：</text>
      <text x="420" y="100" font-size="12" fill="#cbd5e1">beautiful ➔ <tspan fill="#38bdf8" font-weight="700">more beautiful</tspan> ➔ <tspan fill="#f43f5e" font-weight="700">the most beautiful</tspan></text>
      <text x="420" y="122" font-size="12" fill="#cbd5e1">expensive ➔ more expensive ➔ the most expensive</text>

      <rect x="405" y="155" width="340" height="155" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="420" y="178" font-size="13" font-weight="800" fill="#fbbf24">🎯 絕對必考不規則三霸王：</text>
      
      <text x="420" y="205" font-size="13" font-weight="700" fill="#ffffff">1. good / well ➔ <tspan fill="#34d399">better</tspan> ➔ <tspan fill="#f43f5e">the best</tspan> (好/更好/最好)</text>
      <text x="420" y="232" font-size="13" font-weight="700" fill="#ffffff">2. bad / badly ➔ <tspan fill="#34d399">worse</tspan> ➔ <tspan fill="#f43f5e">the worst</tspan> (差/更差/最差)</text>
      <text x="420" y="259" font-size="13" font-weight="700" fill="#ffffff">3. many / much ➔ <tspan fill="#34d399">more</tspan> ➔ <tspan fill="#f43f5e">the most</tspan> (多/更多/最多)</text>
      <text x="420" y="290" font-size="11" fill="#94a3b8">句型：Taipei 101 is taller than the Grand Hotel.</text>
    `
  },

  // ==================== 🎨 藝術領域 (Arts) ====================
  {
    filename: 'art_u4_concept1.svg',
    title: '設計思考 (Design Thinking EDIPT) 與通用設計生活美學',
    subtitle: '108 課綱 視 1-III-2：同理、定義、發想、原型、測試五大創新閉環',
    badge: '以人為本創新',
    content: `
      <!-- EDIPT 5 Steps -->
      <rect x="0" y="0" width="140" height="200" rx="8" fill="#1e293b" stroke="#2563eb"/>
      <text x="70" y="30" font-size="13" font-weight="800" fill="#60a5fa" text-anchor="middle">① 同理心</text>
      <text x="70" y="50" font-size="11" font-weight="600" fill="#93c5fd" text-anchor="middle">Empathize</text>
      <text x="70" y="85" font-size="11" fill="#cbd5e1" text-anchor="middle">換位思考</text>
      <text x="70" y="105" font-size="11" fill="#cbd5e1" text-anchor="middle">深入觀察</text>
      <text x="70" y="125" font-size="11" fill="#cbd5e1" text-anchor="middle">發掘使用者</text>
      <text x="70" y="145" font-size="11" fill="#cbd5e1" text-anchor="middle">真實痛點</text>

      <rect x="155" y="0" width="140" height="200" rx="8" fill="#1e293b" stroke="#10b981"/>
      <text x="225" y="30" font-size="13" font-weight="800" fill="#34d399" text-anchor="middle">② 定義問題</text>
      <text x="225" y="50" font-size="11" font-weight="600" fill="#6ee7b7" text-anchor="middle">Define</text>
      <text x="225" y="85" font-size="11" fill="#cbd5e1" text-anchor="middle">收斂訊息</text>
      <text x="225" y="105" font-size="11" fill="#cbd5e1" text-anchor="middle">界定關鍵</text>
      <text x="225" y="125" font-size="11" fill="#cbd5e1" text-anchor="middle">撰寫清晰的</text>
      <text x="225" y="145" font-size="11" fill="#cbd5e1" text-anchor="middle">問題陳述</text>

      <rect x="310" y="0" width="140" height="200" rx="8" fill="#1e293b" stroke="#f59e0b"/>
      <text x="380" y="30" font-size="13" font-weight="800" fill="#fbbf24" text-anchor="middle">③ 創意發想</text>
      <text x="380" y="50" font-size="11" font-weight="600" fill="#fde68a" text-anchor="middle">Ideate</text>
      <text x="380" y="85" font-size="11" fill="#cbd5e1" text-anchor="middle">腦力激盪</text>
      <text x="380" y="105" font-size="11" fill="#cbd5e1" text-anchor="middle">不設限制</text>
      <text x="380" y="125" font-size="11" fill="#cbd5e1" text-anchor="middle">發散思考</text>
      <text x="380" y="145" font-size="11" fill="#cbd5e1" text-anchor="middle">追求點子量</text>

      <rect x="465" y="0" width="140" height="200" rx="8" fill="#1e293b" stroke="#8b5cf6"/>
      <text x="535" y="30" font-size="13" font-weight="800" fill="#c084fc" text-anchor="middle">④ 製作原型</text>
      <text x="535" y="50" font-size="11" font-weight="600" fill="#e9d5ff" text-anchor="middle">Prototype</text>
      <text x="535" y="85" font-size="11" fill="#cbd5e1" text-anchor="middle">快速實體化</text>
      <text x="535" y="105" font-size="11" fill="#cbd5e1" text-anchor="middle">紙模草圖</text>
      <text x="535" y="125" font-size="11" fill="#cbd5e1" text-anchor="middle">動手做出</text>
      <text x="535" y="145" font-size="11" fill="#cbd5e1" text-anchor="middle">簡易雛形</text>

      <rect x="620" y="0" width="140" height="200" rx="8" fill="#1e293b" stroke="#e11d48"/>
      <text x="690" y="30" font-size="13" font-weight="800" fill="#fb7185" text-anchor="middle">⑤ 實際測試</text>
      <text x="690" y="50" font-size="11" font-weight="600" fill="#fecdd3" text-anchor="middle">Test</text>
      <text x="690" y="85" font-size="11" fill="#cbd5e1" text-anchor="middle">使用者試用</text>
      <text x="690" y="105" font-size="11" fill="#cbd5e1" text-anchor="middle">收集回饋</text>
      <text x="690" y="125" font-size="11" fill="#cbd5e1" text-anchor="middle">快速修正</text>
      <text x="690" y="145" font-size="11" fill="#cbd5e1" text-anchor="middle">迭代進步</text>

      <!-- Bottom: Universal Design -->
      <rect x="0" y="215" width="760" height="110" rx="10" fill="#0f172a" stroke="#334155"/>
      <text x="25" y="240" font-size="14" font-weight="800" fill="#38bdf8">♿ 通用設計 (Universal Design) 友善原則：</text>
      <text x="25" y="265" font-size="12" fill="#cbd5e1">「不需要特別改造或專門設計，所有人（包含身障、長者、幼童、孕婦）都能公平、安全、自主使用。」</text>
      <text x="25" y="290" font-size="12" fill="#fde68a">生活實例：無障礙低底盤公車、斜坡道、自動感應門、雙向拉鍊、公共廁所大圖示指標！</text>
    `
  },

  // ==================== 💪 健康與體育 (Health & PE) ====================
  {
    filename: 'pe_u2_concept1.svg',
    title: '飲食與營養密碼：「我的餐盤」六大類黃金口訣 (MyPlate Nutrition)',
    subtitle: '108 課綱 健 2a-III-1：每餐攝取比例、營養標示三要素與避開高糖高鈉',
    badge: '健康飲食黃金比例',
    content: `
      <!-- Left: Plate Circle -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">🍽️ 我的餐盤六大比例盤面</text>

      <circle cx="185" cy="160" r="85" fill="#0f172a" stroke="#cbd5e1" stroke-width="3"/>
      <!-- Veggie: more than fruit -->
      <path d="M185,160 L185,75 A85,85 0 0,1 270,160 Z" fill="#10b981"/>
      <text x="225" y="130" font-size="13" font-weight="800" fill="#ffffff">蔬菜</text>
      <!-- Rice/Grain: equal to Veggie -->
      <path d="M185,160 L270,160 A85,85 0 0,1 185,245 Z" fill="#f59e0b"/>
      <text x="225" y="200" font-size="13" font-weight="800" fill="#ffffff">全穀雜糧</text>
      <!-- Meat/Protein -->
      <path d="M185,160 L185,245 A85,85 0 0,1 115,205 Z" fill="#ef4444"/>
      <text x="145" y="215" font-size="12" font-weight="800" fill="#ffffff">豆魚蛋肉</text>
      <!-- Fruit -->
      <path d="M185,160 L115,205 A85,85 0 0,1 185,75 Z" fill="#a855f7"/>
      <text x="145" y="135" font-size="12" font-weight="800" fill="#ffffff">水果</text>

      <text x="185" y="280" font-size="12" font-weight="700" fill="#cbd5e1" text-anchor="middle">＋ 早晚一杯奶 ＋ 堅果種子一茶匙</text>

      <!-- Right: Six Rhymes -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">🥗 國健署「我的餐盤」6 句口訣</text>

      <rect x="405" y="50" width="340" height="38" rx="6" fill="#0f172a"/>
      <text x="415" y="74" font-size="12" font-weight="800" fill="#38bdf8">1. 每天早晚一杯奶 (補足鈣質防骨鬆)</text>

      <rect x="405" y="93" width="340" height="38" rx="6" fill="#0f172a"/>
      <text x="415" y="117" font-size="12" font-weight="800" fill="#c084fc">2. 每餐水果拳頭大 (豐富維生素C與纖維)</text>

      <rect x="405" y="136" width="340" height="38" rx="6" fill="#0f172a"/>
      <text x="415" y="160" font-size="12" font-weight="800" fill="#34d399">3. 菜比水果多一點 (深色蔬菜至少占 1/3)</text>

      <rect x="405" y="179" width="340" height="38" rx="6" fill="#0f172a"/>
      <text x="415" y="203" font-size="12" font-weight="800" fill="#fbbf24">4. 飯跟蔬菜一樣多 (糙米燕麥取代白米)</text>

      <rect x="405" y="222" width="340" height="38" rx="6" fill="#0f172a"/>
      <text x="415" y="246" font-size="12" font-weight="800" fill="#fb7185">5. 豆魚蛋肉一掌心 (植物蛋白優先於紅肉)</text>

      <rect x="405" y="265" width="340" height="38" rx="6" fill="#0f172a"/>
      <text x="415" y="289" font-size="12" font-weight="800" fill="#a7f3d0">6. 堅果種子一茶匙 (提供優質不飽和脂肪酸)</text>
    `
  },

  // ==================== 🌱 綜合活動 (Integrative) ====================
  {
    filename: 'comp_u3_concept1.svg',
    title: '生涯探索與自主學習：迦納多元智能與康乃爾筆記法 (Cornell Notes)',
    subtitle: '108 課綱 綜 3a-III-1：發掘個人八大多元天賦與費曼高效大白話學習法',
    badge: '高效自主學習力',
    content: `
      <!-- Left: Cornell Note Template -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">📝 康乃爾筆記法 3 大黃金板塊</text>

      <!-- Cue Column (Left) -->
      <rect x="25" y="60" width="100" height="160" rx="6" fill="#0f172a" stroke="#f59e0b"/>
      <text x="75" y="85" font-size="12" font-weight="800" fill="#fbbf24" text-anchor="middle">提示欄 (Cue)</text>
      <text x="75" y="115" font-size="10" fill="#cbd5e1" text-anchor="middle">課後填寫：</text>
      <text x="75" y="135" font-size="10" fill="#cbd5e1" text-anchor="middle">核心關鍵詞</text>
      <text x="75" y="155" font-size="10" fill="#cbd5e1" text-anchor="middle">猜想考題</text>
      <text x="75" y="175" font-size="10" fill="#cbd5e1" text-anchor="middle">自我提問</text>

      <!-- Note Taking Column (Right) -->
      <rect x="135" y="60" width="210" height="160" rx="6" fill="#0f172a" stroke="#3b82f6"/>
      <text x="240" y="85" font-size="12" font-weight="800" fill="#60a5fa" text-anchor="middle">筆記欄 (Notes)</text>
      <text x="150" y="115" font-size="11" fill="#cbd5e1">• 上課聽講重點</text>
      <text x="150" y="138" font-size="11" fill="#cbd5e1">• 圖表、公式推導</text>
      <text x="150" y="161" font-size="11" fill="#cbd5e1">• 例題計算步驟</text>
      <text x="150" y="184" font-size="11" fill="#cbd5e1">• 善用縮寫與符號</text>

      <!-- Summary (Bottom) -->
      <rect x="25" y="230" width="320" height="70" rx="6" fill="#0f172a" stroke="#10b981"/>
      <text x="185" y="255" font-size="12" font-weight="800" fill="#34d399" text-anchor="middle">總結欄 (Summary - 複習時填寫)</text>
      <text x="185" y="280" font-size="11" fill="#cbd5e1" text-anchor="middle">用 2~3 句話濃縮本頁核心精華（融會貫通最高境界）</text>

      <!-- Right: Gardner 8 Intelligences -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">🌟 迦納八大多元智能 (Multiple Intelligences)</text>

      <rect x="405" y="55" width="160" height="55" rx="6" fill="#0f172a"/>
      <text x="415" y="78" font-size="12" font-weight="700" fill="#60a5fa">📖 語文智能</text>
      <text x="415" y="96" font-size="10" fill="#94a3b8">演說、寫作、閱讀</text>

      <rect x="580" y="55" width="160" height="55" rx="6" fill="#0f172a"/>
      <text x="590" y="78" font-size="12" font-weight="700" fill="#34d399">🧮 邏輯數理智能</text>
      <text x="590" y="96" font-size="10" fill="#94a3b8">運算、推理、科學</text>

      <rect x="405" y="118" width="160" height="55" rx="6" fill="#0f172a"/>
      <text x="415" y="141" font-size="12" font-weight="700" fill="#fbbf24">🎨 空間視覺智能</text>
      <text x="415" y="159" font-size="10" fill="#94a3b8">繪畫、立體幾何、地圖</text>

      <rect x="580" y="118" width="160" height="55" rx="6" fill="#0f172a"/>
      <text x="590" y="141" font-size="12" font-weight="700" fill="#fb7185">🏃 肢體動覺智能</text>
      <text x="590" y="159" font-size="10" fill="#94a3b8">運動、舞蹈、手作操作</text>

      <rect x="405" y="181" width="160" height="55" rx="6" fill="#0f172a"/>
      <text x="415" y="204" font-size="12" font-weight="700" fill="#a855f7">🎵 音樂節奏智能</text>
      <text x="415" y="222" font-size="10" fill="#94a3b8">音準、樂器、節奏感</text>

      <rect x="580" y="181" width="160" height="55" rx="6" fill="#0f172a"/>
      <text x="590" y="204" font-size="12" font-weight="700" fill="#06b6d4">🤝 人際溝通智能</text>
      <text x="590" y="222" font-size="10" fill="#94a3b8">同理心、領導、團隊協作</text>

      <rect x="405" y="244" width="160" height="55" rx="6" fill="#0f172a"/>
      <text x="415" y="267" font-size="12" font-weight="700" fill="#ec4899">🧘 內省反思智能</text>
      <text x="415" y="285" font-size="10" fill="#94a3b8">自我覺察、自律、目標管理</text>

      <rect x="580" y="244" width="160" height="55" rx="6" fill="#0f172a"/>
      <text x="590" y="267" font-size="12" font-weight="700" fill="#84cc16">🌿 自然觀察智能</text>
      <text x="590" y="285" font-size="10" fill="#94a3b8">動植物、地質、生態保護</text>
    `
  }
];

// Write remaining diagrams to public/images
for (const item of remainingDiagrams) {
  const svgStr = createSvg(item.title, item.subtitle, item.badge, item.content);
  const targetPath = path.join(outDir, item.filename);
  fs.writeFileSync(targetPath, svgStr, 'utf-8');
  console.log(`Generated SVG: ${targetPath}`);
}
console.log('Done generating remaining SVGs!');
