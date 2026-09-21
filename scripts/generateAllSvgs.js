import fs from 'fs';
import path from 'path';
import { createSvg, outDir } from './svgHelper.js';

const diagrams = [
  // ==================== 🧮 數學領域 (Math) ====================
  {
    filename: 'math_u1_concept1.svg',
    title: '質數、合數與質因數分解樹狀圖 (Prime vs Composite)',
    subtitle: '108 課綱 n-III-2：掌握 50 以內質數與短除法分解關鍵步驟',
    badge: '質因數分解法',
    content: `
      <!-- Left Card: Definitions -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">📌 質數與合數判別金律</text>
      
      <rect x="16" y="55" width="338" height="74" rx="8" fill="#0f172a" stroke="#2563eb" stroke-width="1.5"/>
      <text x="30" y="80" font-size="14" font-weight="700" fill="#60a5fa">⭐ 質數 (Prime Number)</text>
      <text x="30" y="102" font-size="12" fill="#cbd5e1">恰好只有 1 和本身兩個正因數（大於 1 整數）</text>
      <text x="30" y="120" font-size="11" font-weight="600" fill="#f59e0b">2 是唯一偶數質數！2, 3, 5, 7, 11, 13, 17, 19, 23...</text>

      <rect x="16" y="140" width="338" height="74" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
      <text x="30" y="165" font-size="14" font-weight="700" fill="#34d399">⭐ 合數 (Composite Number)</text>
      <text x="30" y="187" font-size="12" fill="#cbd5e1">除了 1 和本身之外還有其他因數（3個或以上因數）</text>
      <text x="30" y="205" font-size="11" fill="#94a3b8">例如：4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20...</text>

      <rect x="16" y="226" width="338" height="85" rx="8" fill="#e11d48" fill-opacity="0.15" stroke="#f43f5e"/>
      <text x="30" y="250" font-size="13" font-weight="800" fill="#fb7185">⚠️ 零扣分三大警訊：</text>
      <text x="30" y="272" font-size="12" fill="#fecdd3">1. 「1」既不是質數，也不是合數！</text>
      <text x="30" y="292" font-size="12" fill="#fecdd3">2. 偶數中除了 2 之外，全部都是合數！</text>
      <text x="30" y="306" font-size="11" fill="#cbd5e1">3. 奇數不等於質數（9, 15, 21, 25 都是合數）</text>

      <!-- Right Card: Factor Tree -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">🌳 36 的質因數分解樹狀圖</text>

      <!-- Root 36 -->
      <circle cx="575" cy="80" r="24" fill="#2563eb"/>
      <text x="575" y="87" font-size="18" font-weight="800" fill="#ffffff" text-anchor="middle">36</text>

      <!-- Branch to 2 and 18 -->
      <line x1="560" y1="100" x2="495" y2="140" stroke="#60a5fa" stroke-width="2.5"/>
      <line x1="590" y1="100" x2="655" y2="140" stroke="#60a5fa" stroke-width="2.5"/>
      <circle cx="495" cy="150" r="20" fill="#10b981"/>
      <text x="495" y="156" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle">2</text>
      <text x="495" y="185" font-size="11" fill="#34d399" font-weight="700" text-anchor="middle">質數(停)</text>

      <circle cx="655" cy="150" r="20" fill="#f59e0b"/>
      <text x="655" y="156" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle">18</text>

      <!-- Branch 18 to 2 and 9 -->
      <line x1="640" y1="170" x2="590" y2="210" stroke="#fbbf24" stroke-width="2.5"/>
      <line x1="670" y1="170" x2="720" y2="210" stroke="#fbbf24" stroke-width="2.5"/>
      <circle cx="590" cy="220" r="18" fill="#10b981"/>
      <text x="590" y="226" font-size="15" font-weight="800" fill="#ffffff" text-anchor="middle">2</text>
      <circle cx="720" cy="220" r="18" fill="#f59e0b"/>
      <text x="720" y="226" font-size="15" font-weight="800" fill="#ffffff" text-anchor="middle">9</text>

      <!-- Branch 9 to 3 and 3 -->
      <line x1="710" y1="238" x2="675" y2="270" stroke="#fbbf24" stroke-width="2"/>
      <line x1="730" y1="238" x2="760" y2="270" stroke="#fbbf24" stroke-width="2"/>
      <circle cx="675" cy="282" r="16" fill="#10b981"/>
      <text x="675" y="287" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">3</text>
      <circle cx="760" cy="282" r="16" fill="#10b981"/>
      <text x="760" y="287" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">3</text>

      <!-- Bottom formula -->
      <rect x="405" y="278" width="220" height="38" rx="8" fill="#0f172a" stroke="#3b82f6"/>
      <text x="515" y="302" font-size="14" font-weight="700" fill="#60a5fa" text-anchor="middle">36 = 2 × 2 × 3 × 3 = 2² × 3²</text>
    `
  },
  {
    filename: 'math_u2_concept1.svg',
    title: '分數除法幾何意義：顛倒相乘原理 (Fraction Division)',
    subtitle: '108 課綱 n-III-5：除以分數等於乘以倒數的面積切割推導',
    badge: '除以分數＝乘倒數',
    content: `
      <!-- Left Box: Step by step rule -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">📐 分數除法黃金三步驟</text>

      <rect x="16" y="55" width="338" height="60" rx="8" fill="#0f172a" stroke="#3b82f6"/>
      <text x="30" y="78" font-size="13" font-weight="700" fill="#60a5fa">Step 1：帶分數化假分數</text>
      <text x="30" y="98" font-size="12" fill="#cbd5e1">遇到帶分數一定要先化成假分數，不能分開除！</text>

      <rect x="16" y="125" width="338" height="60" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="30" y="148" font-size="13" font-weight="700" fill="#34d399">Step 2：除號變乘號，除數顛倒 (乘以倒數)</text>
      <text x="30" y="168" font-size="12" fill="#cbd5e1">A ÷ (b/c) ＝ A × (c/b)，被除數永遠保持不動！</text>

      <rect x="16" y="195" width="338" height="60" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="30" y="218" font-size="13" font-weight="700" fill="#fbbf24">Step 3：交叉約分化為最簡分數</text>
      <text x="30" y="238" font-size="12" fill="#cbd5e1">分子分母找公因數先約分，再分母乘分母、分子乘分子。</text>

      <rect x="16" y="265" width="338" height="50" rx="8" fill="#7c3aed" fill-opacity="0.2" stroke="#a855f7"/>
      <text x="185" y="295" font-size="14" font-weight="800" fill="#c084fc" text-anchor="middle">口訣：除號變乘號・後項上下翻・約分最簡完</text>

      <!-- Right Box: Visual Geometry of 2 ÷ (1/3) = 6 -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">🍰 幾何具象化：2 塊大蛋糕，每 1/3 塊切一盤？</text>

      <!-- Cake 1 -->
      <rect x="420" y="60" width="140" height="90" rx="8" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-width="2"/>
      <line x1="466" y1="60" x2="466" y2="150" stroke="#60a5fa" stroke-dasharray="4"/>
      <line x1="513" y1="60" x2="513" y2="150" stroke="#60a5fa" stroke-dasharray="4"/>
      <text x="443" y="110" font-size="13" font-weight="700" fill="#93c5fd" text-anchor="middle">① 1/3</text>
      <text x="490" y="110" font-size="13" font-weight="700" fill="#93c5fd" text-anchor="middle">② 1/3</text>
      <text x="536" y="110" font-size="13" font-weight="700" fill="#93c5fd" text-anchor="middle">③ 1/3</text>
      <text x="490" y="170" font-size="12" fill="#cbd5e1" font-weight="600" text-anchor="middle">第 1 塊蛋糕（可切 3 份）</text>

      <!-- Cake 2 -->
      <rect x="590" y="60" width="140" height="90" rx="8" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="2"/>
      <line x1="636" y1="60" x2="636" y2="150" stroke="#34d399" stroke-dasharray="4"/>
      <line x1="683" y1="60" x2="683" y2="150" stroke="#34d399" stroke-dasharray="4"/>
      <text x="613" y="110" font-size="13" font-weight="700" fill="#6ee7b7" text-anchor="middle">④ 1/3</text>
      <text x="660" y="110" font-size="13" font-weight="700" fill="#6ee7b7" text-anchor="middle">⑤ 1/3</text>
      <text x="706" y="110" font-size="13" font-weight="700" fill="#6ee7b7" text-anchor="middle">⑥ 1/3</text>
      <text x="660" y="170" font-size="12" fill="#cbd5e1" font-weight="600" text-anchor="middle">第 2 塊蛋糕（可切 3 份）</text>

      <!-- Mathematical Conclusion -->
      <rect x="410" y="200" width="330" height="105" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="575" y="228" font-size="15" font-weight="800" fill="#fbbf24" text-anchor="middle">算式： 2 ÷ (1/3) ＝ 2 × 3 ＝ 6 (盤)</text>
      <text x="575" y="255" font-size="12" fill="#cbd5e1" text-anchor="middle">「除以 1/3」的意思就是「每 1 個裡面有 3 份」</text>
      <text x="575" y="278" font-size="12" fill="#38bdf8" font-weight="700" text-anchor="middle">所以 2 個裡面就有 2 × 3 ＝ 6 份！完全符合倒數原理！</text>
    `
  },
  {
    filename: 'math_u5_concept1.svg',
    title: '圓周率 π 與圓周長公式結構 (Circumference & Diameter)',
    subtitle: '108 課綱 s-III-1：認識圓周率約等於 3.14 及直徑與圓周長倍數關係',
    badge: '圓周長＝直徑×3.14',
    content: `
      <!-- Left: Circle roll on number line -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">🎡 圓形在地面滾動一圈的距離</text>

      <!-- Rolling Circle -->
      <circle cx="85" cy="120" r="50" fill="#2563eb" fill-opacity="0.2" stroke="#3b82f6" stroke-width="3"/>
      <!-- Diameter line -->
      <line x1="35" y1="120" x2="135" y2="120" stroke="#ef4444" stroke-width="3"/>
      <circle cx="85" cy="120" r="4" fill="#ffffff"/>
      <text x="85" y="112" font-size="12" font-weight="800" fill="#f87171" text-anchor="middle">直徑 d ＝ 1</text>
      <text x="85" y="188" font-size="12" fill="#94a3b8" text-anchor="middle">圓心與標記紅點</text>

      <!-- Ground line -->
      <line x1="20" y1="210" x2="350" y2="210" stroke="#64748b" stroke-width="2"/>
      <!-- Roll Distance arrow -->
      <line x1="35" y1="230" x2="340" y2="230" stroke="#f59e0b" stroke-width="3"/>
      <polygon points="340,225 350,230 340,235" fill="#f59e0b"/>
      <text x="185" y="255" font-size="14" font-weight="800" fill="#fbbf24" text-anchor="middle">滾動 1 圈長度 ≈ 3.14159... 個直徑</text>

      <!-- Bottom ratio note -->
      <rect x="15" y="270" width="340" height="45" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="185" y="298" font-size="13" font-weight="700" fill="#34d399" text-anchor="middle">圓周率 π ＝ 圓周長 ÷ 直徑 ≈ 3.14</text>

      <!-- Right: Formulas & Sector Arc -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">📐 扇形弧長與扇形周長黃金公式</text>

      <rect x="405" y="55" width="340" height="70" rx="8" fill="#0f172a" stroke="#3b82f6"/>
      <text x="420" y="78" font-size="13" font-weight="700" fill="#60a5fa">① 圓周長公式</text>
      <text x="420" y="105" font-size="15" font-weight="800" fill="#ffffff">圓周長 ＝ 直徑 × 3.14 ＝ 半徑 × 2 × 3.14</text>

      <rect x="405" y="135" width="340" height="85" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="420" y="158" font-size="13" font-weight="700" fill="#fbbf24">② 扇形弧長 (圓心角比例)</text>
      <text x="420" y="185" font-size="14" font-weight="800" fill="#ffffff">扇形弧長 ＝ 圓周長 × (圓心角 / 360°)</text>
      <text x="420" y="208" font-size="11" fill="#94a3b8">例如 90° 扇形：弧長 ＝ 圓周長 × (90/360) ＝ 圓周長 × 1/4</text>

      <rect x="405" y="230" width="340" height="80" rx="8" fill="#e11d48" fill-opacity="0.15" stroke="#f43f5e"/>
      <text x="420" y="252" font-size="13" font-weight="800" fill="#fb7185">⚠️ 考試最大陷阱：扇形周長 ≠ 扇形弧長！</text>
      <text x="420" y="278" font-size="14" font-weight="800" fill="#fecdd3">扇形周長 ＝ 弧長 ＋ 2 個半徑</text>
      <text x="420" y="298" font-size="11" fill="#fca5a5">千萬不能漏加左右兩條直線半徑！</text>
    `
  },
  {
    filename: 'math_u6_concept1.svg',
    title: '圓面積切割拼貼長方形公式推導 (Circle Area Derivation)',
    subtitle: '108 課綱 s-III-3：將圓無限等分拼成長方形證明半徑×半徑×3.14',
    badge: '圓面積＝r × r × 3.14',
    content: `
      <!-- Left: Circle divided into sectors -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">🍕 圓形分割：上下交錯拼貼</text>

      <!-- Circle with 16 slices -->
      <circle cx="185" cy="150" r="70" fill="#0f172a" stroke="#3b82f6" stroke-width="2"/>
      <!-- radius line -->
      <line x1="185" y1="150" x2="255" y2="150" stroke="#f59e0b" stroke-width="3"/>
      <text x="215" y="142" font-size="12" font-weight="800" fill="#fbbf24">半徑 r</text>
      <!-- sectors alternating color -->
      <path d="M185,150 L255,150 A70,70 0 0,0 234,100 Z" fill="#3b82f6" fill-opacity="0.7"/>
      <path d="M185,150 L234,100 A70,70 0 0,0 185,80 Z" fill="#10b981" fill-opacity="0.7"/>
      <path d="M185,150 L185,80 A70,70 0 0,0 136,100 Z" fill="#3b82f6" fill-opacity="0.7"/>
      <path d="M185,150 L136,100 A70,70 0 0,0 115,150 Z" fill="#10b981" fill-opacity="0.7"/>
      <path d="M185,150 L115,150 A70,70 0 0,0 136,200 Z" fill="#3b82f6" fill-opacity="0.7"/>
      <path d="M185,150 L136,200 A70,70 0 0,0 185,220 Z" fill="#10b981" fill-opacity="0.7"/>
      <path d="M185,150 L185,220 A70,70 0 0,0 234,200 Z" fill="#3b82f6" fill-opacity="0.7"/>
      <path d="M185,150 L234,200 A70,70 0 0,0 255,150 Z" fill="#10b981" fill-opacity="0.7"/>

      <text x="185" y="260" font-size="13" font-weight="700" fill="#cbd5e1" text-anchor="middle">將圓平分為 16, 32, 64 等份...</text>
      <text x="185" y="285" font-size="12" fill="#94a3b8" text-anchor="middle">份數越多，邊緣曲線越接近直線！</text>

      <!-- Right: Rectangle formed -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">📦 拼成的長方形：長寬關係</text>

      <!-- Interlocked teeth rectangle -->
      <rect x="420" y="70" width="310" height="80" rx="6" fill="#0f172a" stroke="#2563eb" stroke-width="2"/>
      <line x1="420" y1="110" x2="730" y2="110" stroke="#334155" stroke-dasharray="3"/>
      
      <!-- Width = Radius -->
      <line x1="400" y1="70" x2="400" y2="150" stroke="#ef4444" stroke-width="3"/>
      <text x="390" y="115" font-size="12" font-weight="800" fill="#f87171" text-anchor="end">寬 ＝ 半徑 r</text>

      <!-- Length = Half circumference -->
      <line x1="420" y1="165" x2="730" y2="165" stroke="#10b981" stroke-width="3"/>
      <text x="575" y="185" font-size="13" font-weight="800" fill="#34d399" text-anchor="middle">長 ＝ 圓周長的一半 ＝ 半徑 × 3.14</text>

      <!-- Mathematical Derivation -->
      <rect x="410" y="200" width="330" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="575" y="226" font-size="14" font-weight="700" fill="#fbbf24" text-anchor="middle">長方形面積 ＝ 長 × 寬</text>
      <text x="575" y="254" font-size="14" font-weight="700" fill="#cbd5e1" text-anchor="middle">＝ (半徑 × 3.14) × 半徑</text>
      <text x="575" y="286" font-size="17" font-weight="900" fill="#38bdf8" text-anchor="middle">圓面積 ＝ 半徑 × 半徑 × 3.14</text>
    `
  },
  {
    filename: 'math_u7_concept1.svg',
    title: '速率、距離與時間關係三角金律 (Speed-Distance-Time)',
    subtitle: '108 課綱 n-III-8：掌握時速/分速/秒速換算與追趕相遇解題心法',
    badge: '距離＝速率×時間',
    content: `
      <!-- Left: Formula Triangle -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">🔺 速率記憶黃金大三角</text>

      <!-- Big Triangle -->
      <polygon points="185,60 60,220 310,220" fill="#0f172a" stroke="#3b82f6" stroke-width="3"/>
      <!-- Split line horizontal -->
      <line x1="115" y1="145" x2="255" y2="145" stroke="#3b82f6" stroke-width="3"/>
      <!-- Split line vertical -->
      <line x1="185" y1="145" x2="185" y2="220" stroke="#3b82f6" stroke-width="3"/>

      <!-- Distance on Top -->
      <text x="185" y="115" font-size="22" font-weight="900" fill="#f43f5e" text-anchor="middle">距離 (D)</text>
      <!-- Speed & Time on Bottom -->
      <text x="145" y="190" font-size="18" font-weight="900" fill="#3b82f6" text-anchor="middle">速率(S)</text>
      <text x="225" y="190" font-size="18" font-weight="900" fill="#10b981" text-anchor="middle">時間(T)</text>
      <text x="185" y="185" font-size="14" fill="#94a3b8" text-anchor="middle">×</text>

      <!-- Three formulas below -->
      <rect x="20" y="235" width="330" height="75" rx="8" fill="#0f172a" stroke="#64748b"/>
      <text x="35" y="258" font-size="12" font-weight="700" fill="#fda4af">① 求距離：距離 ＝ 速率 × 時間</text>
      <text x="35" y="280" font-size="12" font-weight="700" fill="#93c5fd">② 求速率：速率 ＝ 距離 ÷ 時間</text>
      <text x="35" y="300" font-size="12" font-weight="700" fill="#6ee7b7">③ 求時間：時間 ＝ 距離 ÷ 速率</text>

      <!-- Right: Unit conversions & Application -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">⚡ 單位換算與追趕相遇公式</text>

      <rect x="405" y="55" width="340" height="85" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="420" y="78" font-size="13" font-weight="800" fill="#fbbf24">⏱️ 速率單位階梯換算：</text>
      <text x="420" y="102" font-size="13" fill="#cbd5e1">時速 ➔ 分速：除以 60</text>
      <text x="420" y="122" font-size="13" fill="#cbd5e1">分速 ➔ 秒速：除以 60 （時速 ➔ 秒速：除以 3.6）</text>

      <rect x="405" y="150" width="340" height="75" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="420" y="172" font-size="13" font-weight="800" fill="#34d399">🤝 相向而行（相遇問題）：</text>
      <text x="420" y="196" font-size="13" fill="#ffffff">相遇時間 ＝ 總距離 ÷ (甲速率 ＋ 乙速率)</text>
      <text x="420" y="215" font-size="11" fill="#94a3b8">兩人距離縮短的速度為兩人之「速率和」</text>

      <rect x="405" y="235" width="340" height="75" rx="8" fill="#0f172a" stroke="#2563eb"/>
      <text x="420" y="258" font-size="13" font-weight="800" fill="#60a5fa">🏃 同向而行（追趕問題）：</text>
      <text x="420" y="282" font-size="13" fill="#ffffff">追趕時間 ＝ 差距距離 ÷ (快者速率 － 慢者速率)</text>
      <text x="420" y="301" font-size="11" fill="#94a3b8">快者縮小距離的速度為兩人之「速率差」</text>
    `
  },

  // ==================== 🔬 自然科學領域 (Science) ====================
  {
    filename: 'sci_u3_concept1.svg',
    title: '電與磁：奧斯特實驗、電流磁效應與電磁鐵 (Electromagnetism)',
    subtitle: '108 課綱 INc-III-4：電流產生磁場、右手螺旋定則與磁力強化變因',
    badge: '電流產生磁場',
    content: `
      <!-- Left: Oersted Experiment -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">🧭 奧斯特實驗 (電流磁效應)</text>

      <!-- Circuit Diagram with compass -->
      <rect x="30" y="70" width="310" height="120" rx="8" fill="#0f172a" stroke="#3b82f6"/>
      <!-- Wire -->
      <line x1="50" y1="130" x2="320" y2="130" stroke="#fbbf24" stroke-width="4"/>
      <text x="185" y="115" font-size="12" font-weight="700" fill="#fbbf24" text-anchor="middle">通電導線 (有電流通過)</text>

      <!-- Compass deflected -->
      <circle cx="185" cy="150" r="30" fill="#1e293b" stroke="#cbd5e1" stroke-width="2"/>
      <polygon points="185,125 177,150 193,150" fill="#ef4444"/>
      <polygon points="185,175 177,150 193,150" fill="#ffffff"/>
      <text x="185" y="138" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">N</text>
      <text x="185" y="168" font-size="11" font-weight="800" fill="#000000" text-anchor="middle">S</text>

      <rect x="20" y="210" width="330" height="100" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="35" y="235" font-size="13" font-weight="700" fill="#34d399">💡 實驗三大結論：</text>
      <text x="35" y="258" font-size="12" fill="#cbd5e1">1. 通電導線周圍會產生「圓形同心圓磁場」</text>
      <text x="35" y="280" font-size="12" fill="#cbd5e1">2. 電流方向改變，指北針偏轉方向也會「反轉」</text>
      <text x="35" y="300" font-size="12" fill="#cbd5e1">3. 電流越大或離導線越近，磁場越強</text>

      <!-- Right: Electromagnet Strength Factors -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">🧲 電磁鐵製作與磁力強化 3 大變因</text>

      <rect x="405" y="55" width="340" height="60" rx="8" fill="#0f172a" stroke="#3b82f6"/>
      <text x="420" y="80" font-size="14" font-weight="800" fill="#60a5fa">① 線圈纏繞圈數越多 ➔ 磁力越強</text>
      <text x="420" y="100" font-size="12" fill="#cbd5e1">纏繞 50 圈吸引迴紋針數 &gt; 纏繞 20 圈</text>

      <rect x="405" y="125" width="340" height="60" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="420" y="150" font-size="14" font-weight="800" fill="#34d399">② 串聯電池越多 (電流越大) ➔ 磁力越強</text>
      <text x="420" y="170" font-size="12" fill="#cbd5e1">2 顆電池串聯 (3V) &gt; 1 顆電池 (1.5V)</text>

      <rect x="405" y="195" width="340" height="60" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="420" y="220" font-size="14" font-weight="800" fill="#fbbf24">③ 內部放入鐵芯 ➔ 磁力大幅倍增</text>
      <text x="420" y="240" font-size="12" fill="#cbd5e1">軟鐵芯被磁化後會產生超強集中磁場</text>

      <rect x="405" y="265" width="340" height="48" rx="8" fill="#7c3aed" fill-opacity="0.2" stroke="#a855f7"/>
      <text x="575" y="295" font-size="13" font-weight="700" fill="#c084fc" text-anchor="middle">生活應用：磁浮列車、喇叭音響、電鈴、馬達</text>
    `
  },
  {
    filename: 'sci_u6_concept1.svg',
    title: '簡單機械：三類槓桿原理與省力省距離規律 (Levers)',
    subtitle: '108 課綱 INc-III-6：施力×施力臂＝抗力×抗力臂，支點與抗力點位置',
    badge: '槓桿三要素',
    content: `
      <!-- Class 1 Lever -->
      <rect x="0" y="0" width="240" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="240" height="36" rx="12" fill="#2563eb" fill-opacity="0.3"/>
      <text x="120" y="24" font-size="14" font-weight="800" fill="#60a5fa" text-anchor="middle">第 1 類槓桿：支點在中間</text>
      
      <!-- Lever illustration -->
      <line x1="20" y1="120" x2="220" y2="120" stroke="#94a3b8" stroke-width="4"/>
      <!-- Fulcrum in middle -->
      <polygon points="120,120 110,145 130,145" fill="#f59e0b"/>
      <text x="120" y="162" font-size="11" font-weight="700" fill="#fbbf24" text-anchor="middle">支點</text>
      <!-- Force and Load -->
      <text x="40" y="105" font-size="11" font-weight="700" fill="#34d399">施力點</text>
      <text x="200" y="105" font-size="11" font-weight="700" fill="#f43f5e" text-anchor="end">抗力點</text>
      
      <rect x="15" y="180" width="210" height="130" rx="8" fill="#0f172a"/>
      <text x="25" y="205" font-size="12" font-weight="700" fill="#f8fafc">⭐ 特性：可省力或費力</text>
      <text x="25" y="228" font-size="11" fill="#cbd5e1">施力臂 &gt; 抗力臂 ➔ 省力</text>
      <text x="25" y="250" font-size="11" fill="#cbd5e1">施力臂 &lt; 抗力臂 ➔ 費力</text>
      <text x="25" y="278" font-size="12" font-weight="700" fill="#38bdf8">生活範例：</text>
      <text x="25" y="298" font-size="11" fill="#94a3b8">剪刀、拔釘器、翹翹板、天平</text>

      <!-- Class 2 Lever -->
      <rect x="260" y="0" width="240" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="260" y="0" width="240" height="36" rx="12" fill="#10b981" fill-opacity="0.3"/>
      <text x="380" y="24" font-size="14" font-weight="800" fill="#34d399" text-anchor="middle">第 2 類槓桿：抗力點在中間</text>

      <line x1="280" y1="120" x2="480" y2="120" stroke="#94a3b8" stroke-width="4"/>
      <!-- Fulcrum on left -->
      <polygon points="290,120 280,145 300,145" fill="#f59e0b"/>
      <text x="290" y="162" font-size="11" font-weight="700" fill="#fbbf24" text-anchor="middle">支點</text>
      <!-- Load in middle -->
      <text x="380" y="105" font-size="11" font-weight="700" fill="#f43f5e" text-anchor="middle">抗力點</text>
      <!-- Force on right -->
      <text x="470" y="105" font-size="11" font-weight="700" fill="#34d399" text-anchor="end">施力點</text>

      <rect x="275" y="180" width="210" height="130" rx="8" fill="#0f172a"/>
      <text x="285" y="205" font-size="12" font-weight="700" fill="#f8fafc">⭐ 特性：永遠省力！</text>
      <text x="285" y="228" font-size="11" fill="#cbd5e1">施力臂永遠大於抗力臂</text>
      <text x="285" y="250" font-size="11" fill="#f87171">代價：費距離 (抬得高)</text>
      <text x="285" y="278" font-size="12" font-weight="700" fill="#38bdf8">生活範例：</text>
      <text x="285" y="298" font-size="11" fill="#94a3b8">開瓶器、獨輪推車、裁紙刀</text>

      <!-- Class 3 Lever -->
      <rect x="520" y="0" width="240" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="520" y="0" width="240" height="36" rx="12" fill="#f43f5e" fill-opacity="0.3"/>
      <text x="640" y="24" font-size="14" font-weight="800" fill="#fb7185" text-anchor="middle">第 3 類槓桿：施力點在中間</text>

      <line x1="540" y1="120" x2="740" y2="120" stroke="#94a3b8" stroke-width="4"/>
      <!-- Fulcrum on left -->
      <polygon points="550,120 540,145 560,145" fill="#f59e0b"/>
      <text x="550" y="162" font-size="11" font-weight="700" fill="#fbbf24" text-anchor="middle">支點</text>
      <!-- Force in middle -->
      <text x="640" y="105" font-size="11" font-weight="700" fill="#34d399" text-anchor="middle">施力點</text>
      <!-- Load on right -->
      <text x="730" y="105" font-size="11" font-weight="700" fill="#f43f5e" text-anchor="end">抗力點</text>

      <rect x="535" y="180" width="210" height="130" rx="8" fill="#0f172a"/>
      <text x="545" y="205" font-size="12" font-weight="700" fill="#f8fafc">⭐ 特性：費力但省距離！</text>
      <text x="545" y="228" font-size="11" fill="#cbd5e1">施力臂永遠小於抗力臂</text>
      <text x="545" y="250" font-size="11" fill="#34d399">優點：微小位移換大動作</text>
      <text x="545" y="278" font-size="12" font-weight="700" fill="#38bdf8">生活範例：</text>
      <text x="545" y="298" font-size="11" fill="#94a3b8">鑷子、筷子、掃把、釣魚竿</text>
    `
  },
  {
    filename: 'sci_u8_concept1.svg',
    title: '生態系能量流動、食物鏈食物網與能量金字塔 (Ecosystem Food Web)',
    subtitle: '108 課綱 INa-III-1：生產者、消費者與分解者，能量傳遞 10% 定律',
    badge: '能量單向流動',
    content: `
      <!-- Left: Pyramid -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">🔺 能量金字塔與 10% 傳遞定律</text>

      <!-- Top Tier: Apex Predator -->
      <polygon points="185,55 140,110 230,110" fill="#e11d48"/>
      <text x="185" y="90" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">頂級掠食者(老鷹) 10 J</text>

      <!-- Second Tier: Secondary Consumer -->
      <polygon points="140,113 230,113 260,170 110,170" fill="#f59e0b"/>
      <text x="185" y="145" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">次級消費者(青蛙/蛇) 100 J</text>

      <!-- Third Tier: Primary Consumer -->
      <polygon points="110,173 260,173 295,230 75,230" fill="#10b981"/>
      <text x="185" y="205" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">初級消費者(蝗蟲/毛蟲) 1000 J</text>

      <!-- Bottom Tier: Producer -->
      <polygon points="75,233 295,233 335,295 35,295" fill="#2563eb"/>
      <text x="185" y="268" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">生產者(綠色植物/水稻) 10000 J</text>

      <text x="185" y="315" font-size="11" fill="#94a3b8" text-anchor="middle">☀️ 太陽光能 ➔ 逐級傳遞僅約 10%，其餘以熱散失</text>

      <!-- Right: Roles in Ecosystem -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">🌿 生態系三大角色物質循環</text>

      <rect x="405" y="55" width="340" height="75" rx="8" fill="#0f172a" stroke="#2563eb"/>
      <text x="420" y="78" font-size="13" font-weight="800" fill="#60a5fa">🌱 生產者 (Producer)</text>
      <text x="420" y="98" font-size="12" fill="#cbd5e1">利用葉綠體進行光合作用，將水與二氧化碳製造成葡萄糖與氧氣，為生態系食物鏈基石。</text>

      <rect x="405" y="140" width="340" height="75" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="420" y="163" font-size="13" font-weight="800" fill="#34d399">🐰 消費者 (Consumer)</text>
      <text x="420" y="183" font-size="12" fill="#cbd5e1">無法自行製造養分，藉由攝食其他生物維生。</text>
      <text x="420" y="202" font-size="11" fill="#94a3b8">草食性（初級）➔ 肉食性（次級、三級）</text>

      <rect x="405" y="225" width="340" height="85" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="420" y="248" font-size="13" font-weight="800" fill="#fbbf24">🍄 分解者 (Decomposer)</text>
      <text x="420" y="268" font-size="12" fill="#cbd5e1">如細菌、黴菌、蕈類等，將動植物屍體排泄物分解成無機礦物質，歸還土壤與大自然循環！</text>
    `
  },

  // ==================== 📖 國語文領域 (Mandarin) ====================
  {
    filename: 'man_u1_concept1.svg',
    title: '高年級閱讀理解解碼：六何法 (5W1H) 與事實觀點辨析',
    subtitle: '108 課綱 5-III-1：擷取訊息、推論因果與區分客觀事實 vs 主觀觀點',
    badge: '閱讀雙核心策略',
    content: `
      <!-- Left: 5W1H Mindmap -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">🔍 六何法 (5W1H) 文章架構解讀</text>

      <circle cx="185" cy="170" r="38" fill="#2563eb" stroke="#60a5fa" stroke-width="2"/>
      <text x="185" y="167" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">文章核心</text>
      <text x="185" y="185" font-size="11" fill="#bfdbfe" text-anchor="middle">5W1H</text>

      <!-- 6 nodes -->
      <rect x="25" y="60" width="100" height="36" rx="6" fill="#0f172a" stroke="#38bdf8"/>
      <text x="75" y="83" font-size="12" font-weight="700" fill="#38bdf8" text-anchor="middle">何人 Who</text>

      <rect x="245" y="60" width="100" height="36" rx="6" fill="#0f172a" stroke="#34d399"/>
      <text x="295" y="83" font-size="12" font-weight="700" fill="#34d399" text-anchor="middle">何時 When</text>

      <rect x="15" y="152" width="100" height="36" rx="6" fill="#0f172a" stroke="#fbbf24"/>
      <text x="65" y="175" font-size="12" font-weight="700" fill="#fbbf24" text-anchor="middle">何地 Where</text>

      <rect x="255" y="152" width="100" height="36" rx="6" fill="#0f172a" stroke="#f43f5e"/>
      <text x="305" y="175" font-size="12" font-weight="700" fill="#f43f5e" text-anchor="middle">何事 What</text>

      <rect x="35" y="240" width="110" height="36" rx="6" fill="#0f172a" stroke="#a855f7"/>
      <text x="90" y="263" font-size="12" font-weight="700" fill="#a855f7" text-anchor="middle">為何 Why(原因)</text>

      <rect x="225" y="240" width="110" height="36" rx="6" fill="#0f172a" stroke="#06b6d4"/>
      <text x="280" y="263" font-size="12" font-weight="700" fill="#06b6d4" text-anchor="middle">如何 How(經過)</text>

      <!-- Connect lines -->
      <line x1="125" y1="78" x2="160" y2="140" stroke="#475569" stroke-width="1.5"/>
      <line x1="245" y1="78" x2="210" y2="140" stroke="#475569" stroke-width="1.5"/>
      <line x1="115" y1="170" x2="147" y2="170" stroke="#475569" stroke-width="1.5"/>
      <line x1="255" y1="170" x2="223" y2="170" stroke="#475569" stroke-width="1.5"/>
      <line x1="145" y1="245" x2="165" y2="200" stroke="#475569" stroke-width="1.5"/>
      <line x1="225" y1="245" x2="205" y2="200" stroke="#475569" stroke-width="1.5"/>

      <text x="185" y="305" font-size="11" fill="#94a3b8" text-anchor="middle">讀完文章能回答此 6 問，即掌握 90% 核心文意！</text>

      <!-- Right: Fact vs Opinion -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">⚖️ 事實 (Fact) vs 觀點 (Opinion)</text>

      <rect x="405" y="55" width="340" height="120" rx="8" fill="#0f172a" stroke="#3b82f6"/>
      <text x="420" y="80" font-size="14" font-weight="800" fill="#60a5fa">📘 客觀事實 (Fact)</text>
      <text x="420" y="102" font-size="12" fill="#cbd5e1">• 可被客觀驗證、有數據、有真實紀錄的陳述</text>
      <text x="420" y="122" font-size="12" fill="#94a3b8">• 不會因個人喜好而改變</text>
      <text x="420" y="148" font-size="12" font-weight="600" fill="#38bdf8">例：「玉山主峰海拔標高為 3952 公尺。」</text>

      <rect x="405" y="190" width="340" height="120" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="420" y="215" font-size="14" font-weight="800" fill="#fbbf24">📙 主觀觀點 (Opinion)</text>
      <text x="420" y="237" font-size="12" fill="#cbd5e1">• 含有個人感受、價值判斷、喜好情緒的言論</text>
      <text x="420" y="257" font-size="12" fill="#94a3b8">• 常見關鍵字：我認為、最棒、太難、應該</text>
      <text x="420" y="283" font-size="12" font-weight="600" fill="#fcd34d">例：「玉山是全臺灣最令人震撼的美麗風景。」</text>
    `
  },
  {
    filename: 'man_u8_concept1.svg',
    title: '漢字造字六書法則與形近多音字辨析 (Six Scripts of Hanzi)',
    subtitle: '108 課綱 4-III-2：象形、指事、會意、形聲、轉注、假借之特徵',
    badge: '四體二用造字法',
    content: `
      <!-- 4 Core Creation Methods -->
      <rect x="0" y="0" width="180" height="326" rx="10" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="180" height="36" rx="10" fill="#2563eb" fill-opacity="0.3"/>
      <text x="90" y="24" font-size="14" font-weight="800" fill="#60a5fa" text-anchor="middle">① 象形 (Pictogram)</text>
      <text x="90" y="65" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">「畫成其物」</text>
      <text x="90" y="90" font-size="11" fill="#94a3b8" text-anchor="middle">隨體詰詘・獨體為文</text>
      <circle cx="90" cy="140" r="30" fill="#0f172a" stroke="#3b82f6"/>
      <text x="90" y="148" font-size="24" font-weight="900" fill="#38bdf8" text-anchor="middle">日</text>
      <text x="90" y="195" font-size="12" fill="#cbd5e1" text-anchor="middle">像太陽之形狀</text>
      <text x="90" y="225" font-size="11" fill="#64748b" text-anchor="middle">代表字：</text>
      <text x="90" y="250" font-size="13" font-weight="700" fill="#93c5fd" text-anchor="middle">月、水、山、木、牛</text>

      <rect x="195" y="0" width="180" height="326" rx="10" fill="#1e293b" stroke="#334155"/>
      <rect x="195" y="0" width="180" height="36" rx="10" fill="#10b981" fill-opacity="0.3"/>
      <text x="285" y="24" font-size="14" font-weight="800" fill="#34d399" text-anchor="middle">② 指事 (Ideogram)</text>
      <text x="285" y="65" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">「視而可識」</text>
      <text x="285" y="90" font-size="11" fill="#94a3b8" text-anchor="middle">察而見意・抽象符號</text>
      <circle cx="285" cy="140" r="30" fill="#0f172a" stroke="#10b981"/>
      <text x="285" y="148" font-size="24" font-weight="900" fill="#34d399" text-anchor="middle">本</text>
      <text x="285" y="195" font-size="12" fill="#cbd5e1" text-anchor="middle">木下加一點指樹根</text>
      <text x="285" y="225" font-size="11" fill="#64748b" text-anchor="middle">代表字：</text>
      <text x="285" y="250" font-size="13" font-weight="700" fill="#6ee7b7" text-anchor="middle">上、下、末、刃、一</text>

      <rect x="390" y="0" width="180" height="326" rx="10" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="180" height="36" rx="10" fill="#f59e0b" fill-opacity="0.3"/>
      <text x="480" y="24" font-size="14" font-weight="800" fill="#fbbf24" text-anchor="middle">③ 會意 (Compound)</text>
      <text x="480" y="65" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">「比類合誼」</text>
      <text x="480" y="90" font-size="11" fill="#94a3b8" text-anchor="middle">兩字合一・意象結合</text>
      <circle cx="480" cy="140" r="30" fill="#0f172a" stroke="#f59e0b"/>
      <text x="480" y="148" font-size="24" font-weight="900" fill="#fbbf24" text-anchor="middle">休</text>
      <text x="480" y="195" font-size="12" fill="#cbd5e1" text-anchor="middle">人在木(樹)旁休息</text>
      <text x="480" y="225" font-size="11" fill="#64748b" text-anchor="middle">代表字：</text>
      <text x="480" y="250" font-size="13" font-weight="700" fill="#fcd34d" text-anchor="middle">武、信、明、森、牢</text>

      <rect x="585" y="0" width="180" height="326" rx="10" fill="#1e293b" stroke="#334155"/>
      <rect x="585" y="0" width="180" height="36" rx="10" fill="#f43f5e" fill-opacity="0.3"/>
      <text x="675" y="24" font-size="14" font-weight="800" fill="#fb7185" text-anchor="middle">④ 形聲 (Phonetic)</text>
      <text x="675" y="65" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">「以事為名」</text>
      <text x="675" y="90" font-size="11" fill="#94a3b8" text-anchor="middle">取譬相成・佔漢字80%</text>
      <circle cx="675" cy="140" r="30" fill="#0f172a" stroke="#f43f5e"/>
      <text x="675" y="148" font-size="24" font-weight="900" fill="#f43f5e" text-anchor="middle">江</text>
      <text x="675" y="195" font-size="12" fill="#cbd5e1" text-anchor="middle">氵(形表水) ＋ 工(聲)</text>
      <text x="675" y="225" font-size="11" fill="#64748b" text-anchor="middle">代表字：</text>
      <text x="675" y="250" font-size="13" font-weight="700" fill="#fda4af" text-anchor="middle">河、湖、騎、爸、銅</text>
    `
  },

  // ==================== 🌍 社會領域 (Social) ====================
  {
    filename: 'soc_u1_concept1.svg',
    title: '臺灣民主發展歷程與五權分立制衡體系 (Five Powers Separation)',
    subtitle: '108 課綱 社 1a-III-1：行政、立法、司法、考試、監察五院互相制衡',
    badge: '民主憲政分立',
    content: `
      <!-- Left: Democratic Milestones -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">🇹🇼 臺灣民主化四大里程碑</text>

      <rect x="16" y="55" width="338" height="58" rx="8" fill="#0f172a" stroke="#3b82f6"/>
      <text x="30" y="78" font-size="13" font-weight="700" fill="#60a5fa">📅 1987 年：宣布解嚴</text>
      <text x="30" y="98" font-size="11" fill="#cbd5e1">解除戒嚴令，開放黨禁與報禁，人民享有集會結社言論自由。</text>

      <rect x="16" y="120" width="338" height="58" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="30" y="143" font-size="13" font-weight="700" fill="#34d399">📅 1991~1992 年：國會全面改選</text>
      <text x="30" y="163" font-size="11" fill="#cbd5e1">終止動員戡亂時期，第一屆中央民代退職，落實真正民意代表。</text>

      <rect x="16" y="185" width="338" height="58" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="30" y="208" font-size="13" font-weight="700" fill="#fbbf24">📅 1996 年：首任總統公民直選</text>
      <text x="30" y="228" font-size="11" fill="#cbd5e1">全體公民一票一人直接投票選出國家元首，邁入成熟民主體制。</text>

      <rect x="16" y="250" width="338" height="58" rx="8" fill="#0f172a" stroke="#a855f7"/>
      <text x="30" y="273" font-size="13" font-weight="700" fill="#c084fc">📅 2000 年至今：政黨輪替常態化</text>
      <text x="30" y="293" font-size="11" fill="#cbd5e1">政權和平轉移，多元民意透過選票理性展現，成亞洲民主典範。</text>

      <!-- Right: Five Branches Pentagram -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">🏛️ 五院職權與制衡分立體系</text>

      <!-- Executive -->
      <rect x="500" y="55" width="150" height="45" rx="8" fill="#2563eb"/>
      <text x="575" y="76" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">行政院 (最高行政)</text>
      <text x="575" y="92" font-size="10" fill="#dbeafe" text-anchor="middle">推動政策・編列預算</text>

      <!-- Legislative -->
      <rect x="405" y="130" width="140" height="45" rx="8" fill="#10b981"/>
      <text x="475" y="151" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">立法院 (最高民意)</text>
      <text x="475" y="167" font-size="10" fill="#d1fae5" text-anchor="middle">制定法律・審查預算</text>

      <!-- Judicial -->
      <rect x="605" y="130" width="140" height="45" rx="8" fill="#f59e0b"/>
      <text x="675" y="151" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">司法院 (公正裁判)</text>
      <text x="675" y="167" font-size="10" fill="#fef3c7" text-anchor="middle">掌理民刑審判・釋憲</text>

      <!-- Examination -->
      <rect x="420" y="215" width="140" height="45" rx="8" fill="#8b5cf6"/>
      <text x="490" y="236" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">考試院 (公職考選)</text>
      <text x="490" y="252" font-size="10" fill="#ede9fe" text-anchor="middle">公務員選拔・保障升遷</text>

      <!-- Control -->
      <rect x="590" y="215" width="140" height="45" rx="8" fill="#e11d48"/>
      <text x="660" y="236" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">監察院 (監督風氣)</text>
      <text x="660" y="252" font-size="10" fill="#ffe4e6" text-anchor="middle">糾舉彈劾・審計審查</text>

      <!-- Bottom Principle -->
      <rect x="405" y="275" width="340" height="40" rx="8" fill="#0f172a" stroke="#64748b"/>
      <text x="575" y="298" font-size="12" font-weight="700" fill="#cbd5e1" text-anchor="middle">五院分工合作・互不隸屬・權力分立相互監督制衡</text>
    `
  },
  {
    filename: 'soc_u6_concept1.svg',
    title: '聯合國永續發展目標 (SDGs 17項指標) 與在地減碳實踐',
    subtitle: '108 課綱 社 2c-III-1：終結貧窮、氣候行動、優質教育與 2050 淨零轉型',
    badge: 'SDGs 永續目標',
    content: `
      <!-- 6 Main SDG Areas -->
      <rect x="0" y="0" width="240" height="155" rx="10" fill="#1e293b" stroke="#e11d48"/>
      <rect x="0" y="0" width="240" height="30" rx="10" fill="#e11d48" fill-opacity="0.3"/>
      <text x="120" y="20" font-size="13" font-weight="800" fill="#fb7185" text-anchor="middle">人民福祉 (People)</text>
      <text x="15" y="55" font-size="12" font-weight="700" fill="#f8fafc">SDG 1 終結貧窮</text>
      <text x="15" y="75" font-size="12" font-weight="700" fill="#f8fafc">SDG 2 消除飢餓</text>
      <text x="15" y="95" font-size="12" font-weight="700" fill="#f8fafc">SDG 3 良好健康與福祉</text>
      <text x="15" y="115" font-size="12" font-weight="700" fill="#f8fafc">SDG 4 優質教育 (均一核心)</text>
      <text x="15" y="135" font-size="12" font-weight="700" fill="#f8fafc">SDG 5 性別平權</text>

      <rect x="260" y="0" width="240" height="155" rx="10" fill="#1e293b" stroke="#10b981"/>
      <rect x="260" y="0" width="240" height="30" rx="10" fill="#10b981" fill-opacity="0.3"/>
      <text x="380" y="20" font-size="13" font-weight="800" fill="#34d399" text-anchor="middle">地球環境 (Planet)</text>
      <text x="275" y="55" font-size="12" font-weight="700" fill="#f8fafc">SDG 6 淨水與衛生</text>
      <text x="275" y="75" font-size="12" font-weight="700" fill="#f8fafc">SDG 13 氣候行動 (淨零2050)</text>
      <text x="275" y="95" font-size="12" font-weight="700" fill="#f8fafc">SDG 14 保育海洋生態</text>
      <text x="275" y="115" font-size="12" font-weight="700" fill="#f8fafc">SDG 15 保育陸域生態</text>
      <text x="275" y="135" font-size="12" font-weight="700" fill="#f8fafc">SDG 12 責任消費與生產</text>

      <rect x="520" y="0" width="240" height="155" rx="10" fill="#1e293b" stroke="#f59e0b"/>
      <rect x="520" y="0" width="240" height="30" rx="10" fill="#f59e0b" fill-opacity="0.3"/>
      <text x="640" y="20" font-size="13" font-weight="800" fill="#fbbf24" text-anchor="middle">繁榮和平 (Prosperity)</text>
      <text x="535" y="55" font-size="12" font-weight="700" fill="#f8fafc">SDG 7 可負擔綠能</text>
      <text x="535" y="75" font-size="12" font-weight="700" fill="#f8fafc">SDG 8 尊嚴就業與經濟</text>
      <text x="535" y="95" font-size="12" font-weight="700" fill="#f8fafc">SDG 9 產業創新基礎建設</text>
      <text x="535" y="115" font-size="12" font-weight="700" fill="#f8fafc">SDG 10 減少不平等</text>
      <text x="535" y="135" font-size="12" font-weight="700" fill="#f8fafc">SDG 16 和平正義制度</text>

      <!-- Bottom Action Card for Students -->
      <rect x="0" y="170" width="760" height="150" rx="12" fill="#0f172a" stroke="#2563eb" stroke-width="1.5"/>
      <text x="25" y="198" font-size="15" font-weight="800" fill="#60a5fa">🌱 小六學童的「淨零綠生活」具體行動指南：</text>
      
      <rect x="25" y="215" width="220" height="85" rx="8" fill="#1e293b"/>
      <text x="35" y="238" font-size="13" font-weight="700" fill="#38bdf8">🥢 自備環保餐具</text>
      <text x="35" y="260" font-size="11" fill="#cbd5e1">外出攜帶水壺與環保袋</text>
      <text x="35" y="280" font-size="11" fill="#cbd5e1">源頭減塑減少一次性垃圾</text>

      <rect x="270" y="215" width="220" height="85" rx="8" fill="#1e293b"/>
      <text x="280" y="238" font-size="13" font-weight="700" fill="#34d399">💡 隨手關燈與節能</text>
      <text x="280" y="260" font-size="11" fill="#cbd5e1">冷氣設定 26~28 度＋風扇</text>
      <text x="280" y="280" font-size="11" fill="#cbd5e1">不浪費食物 (吃多少點多少)</text>

      <rect x="515" y="215" width="220" height="85" rx="8" fill="#1e293b"/>
      <text x="525" y="238" font-size="13" font-weight="700" fill="#fbbf24">🚲 綠色低碳出行</text>
      <text x="525" y="260" font-size="11" fill="#cbd5e1">短程多步行或騎自行車</text>
      <text x="525" y="280" font-size="11" fill="#cbd5e1">搭乘捷運公車大眾運輸</text>
    `
  },

  // ==================== 🇬🇧 英語文領域 (English) ====================
  {
    filename: 'eng_u1_concept1.svg',
    title: 'Daily Routines, Time Expressions & Prepositions (at / in / on)',
    subtitle: '108 課綱 1-III-2：掌握日常作息時間表達法與時間介系詞黃金搭配',
    badge: 'Time & Prepositions',
    content: `
      <!-- Left: Clock expressions -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">⏰ English Clock Expressions (時間說法)</text>

      <circle cx="95" cy="130" r="55" fill="#0f172a" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="95" y1="130" x2="95" y2="90" stroke="#f43f5e" stroke-width="3"/>
      <line x1="95" y1="130" x2="135" y2="130" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="95" cy="130" r="4" fill="#ffffff"/>
      <text x="95" y="82" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">12</text>
      <text x="142" y="134" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
      <text x="95" y="180" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">6</text>
      <text x="48" y="134" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">9</text>

      <rect x="175" y="65" width="180" height="48" rx="6" fill="#0f172a" stroke="#3b82f6"/>
      <text x="185" y="86" font-size="12" font-weight="700" fill="#60a5fa">It's 7:00</text>
      <text x="185" y="103" font-size="11" fill="#cbd5e1">seven o'clock (整點)</text>

      <rect x="175" y="120" width="180" height="48" rx="6" fill="#0f172a" stroke="#10b981"/>
      <text x="185" y="141" font-size="12" font-weight="700" fill="#34d399">It's 7:15</text>
      <text x="185" y="158" font-size="11" fill="#cbd5e1">a quarter past seven</text>

      <rect x="175" y="175" width="180" height="48" rx="6" fill="#0f172a" stroke="#f59e0b"/>
      <text x="185" y="196" font-size="12" font-weight="700" fill="#fbbf24">It's 7:30</text>
      <text x="185" y="213" font-size="11" fill="#cbd5e1">half past seven</text>

      <rect x="175" y="230" width="180" height="48" rx="6" fill="#0f172a" stroke="#f43f5e"/>
      <text x="185" y="251" font-size="12" font-weight="700" fill="#fb7185">It's 7:45</text>
      <text x="185" y="268" font-size="11" fill="#cbd5e1">a quarter to eight</text>

      <text x="185" y="305" font-size="11" fill="#94a3b8" text-anchor="middle">常用句型：What time do you wake up? ➔ I wake up at 6:30.</text>

      <!-- Right: Prepositions at/in/on -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">📍 時間介系詞金字塔 (at / on / in)</text>

      <!-- Top: at -->
      <polygon points="575,60 520,110 630,110" fill="#e11d48"/>
      <text x="575" y="85" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">at (特定時刻)</text>
      <text x="575" y="103" font-size="10" fill="#ffe4e6" text-anchor="middle">at 7:00, at noon, at night</text>

      <!-- Middle: on -->
      <polygon points="520,113 630,113 670,180 480,180" fill="#f59e0b"/>
      <text x="575" y="142" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">on (特定日期 / 星期)</text>
      <text x="575" y="165" font-size="11" fill="#fef3c7" text-anchor="middle">on Monday, on July 4th, on my birthday</text>

      <!-- Bottom: in -->
      <polygon points="480,183 670,183 720,260 430,260" fill="#2563eb"/>
      <text x="575" y="215" font-size="15" font-weight="900" fill="#ffffff" text-anchor="middle">in (較長的時間區間)</text>
      <text x="575" y="240" font-size="11" fill="#dbeafe" text-anchor="middle">in the morning, in 2026, in summer, in May</text>

      <rect x="405" y="270" width="340" height="45" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="575" y="297" font-size="13" font-weight="700" fill="#34d399" text-anchor="middle">記憶速訣：精確點用 at・特定日用 on・大區間用 in</text>
    `
  },
  {
    filename: 'eng_u2_concept1.svg',
    title: 'Past Tense Stories: Regular & Irregular Verb Timeline (過去式)',
    subtitle: '108 課綱 2-III-3：掌握規則變化 (+ed) 與高頻不規則動詞及 did 問句',
    badge: '動詞時態時間軸',
    content: `
      <!-- Top: Timeline -->
      <rect x="0" y="0" width="760" height="90" rx="12" fill="#1e293b" stroke="#334155"/>
      <!-- Line -->
      <line x1="40" y1="45" x2="720" y2="45" stroke="#475569" stroke-width="3"/>
      <polygon points="720,40 735,45 720,50" fill="#475569"/>

      <!-- Past mark -->
      <circle cx="180" cy="45" r="14" fill="#ef4444"/>
      <text x="180" y="50" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">PAST</text>
      <text x="180" y="75" font-size="12" font-weight="700" fill="#f87171" text-anchor="middle">過去式 (Past Tense)</text>

      <!-- Now mark -->
      <circle cx="480" cy="45" r="14" fill="#10b981"/>
      <text x="480" y="50" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">NOW</text>
      <text x="480" y="75" font-size="12" font-weight="700" fill="#34d399" text-anchor="middle">現在式 (Present Tense)</text>

      <!-- Bottom Left: Regular Rules (+ed) -->
      <rect x="0" y="105" width="370" height="221" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="105" width="370" height="34" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="128" font-size="13" font-weight="700" fill="#f8fafc">📘 規則動詞變化 4 大規則 (+ed)</text>

      <text x="20" y="160" font-size="12" fill="#cbd5e1">1. 一般直接加 ed：play ➔ played, watch ➔ watched</text>
      <text x="20" y="185" font-size="12" fill="#cbd5e1">2. 字尾有 e 直接加 d：live ➔ lived, bake ➔ baked</text>
      <text x="20" y="210" font-size="12" fill="#cbd5e1">3. 子音＋y 去 y 改 ied：study ➔ studied, cry ➔ cried</text>
      <text x="20" y="235" font-size="12" fill="#cbd5e1">4. 短母音＋單子音重複字尾：stop ➔ stopped, plan ➔ planned</text>

      <rect x="15" y="255" width="340" height="55" rx="8" fill="#0f172a" stroke="#2563eb"/>
      <text x="25" y="278" font-size="12" font-weight="700" fill="#60a5fa">💡 疑問與否定絕招：</text>
      <text x="25" y="298" font-size="11" fill="#cbd5e1">有 did / didn't 出現，後面動詞必須恢復【原型動詞】！</text>

      <!-- Bottom Right: Top 10 Irregular Verbs -->
      <rect x="390" y="105" width="370" height="221" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="105" width="370" height="34" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="128" font-size="13" font-weight="700" fill="#f8fafc">🌟 段考必背高頻不規則動詞 (Irregular)</text>

      <rect x="405" y="145" width="165" height="30" rx="4" fill="#0f172a"/>
      <text x="415" y="165" font-size="12" font-weight="700" fill="#38bdf8">go ➔ went (去)</text>
      <rect x="585" y="145" width="165" height="30" rx="4" fill="#0f172a"/>
      <text x="595" y="165" font-size="12" font-weight="700" fill="#38bdf8">eat ➔ ate (吃)</text>

      <rect x="405" y="182" width="165" height="30" rx="4" fill="#0f172a"/>
      <text x="415" y="202" font-size="12" font-weight="700" fill="#38bdf8">see ➔ saw (看見)</text>
      <rect x="585" y="182" width="165" height="30" rx="4" fill="#0f172a"/>
      <text x="595" y="202" font-size="12" font-weight="700" fill="#38bdf8">have ➔ had (有/吃)</text>

      <rect x="405" y="219" width="165" height="30" rx="4" fill="#0f172a"/>
      <text x="415" y="239" font-size="12" font-weight="700" fill="#38bdf8">buy ➔ bought (買)</text>
      <rect x="585" y="219" width="165" height="30" rx="4" fill="#0f172a"/>
      <text x="595" y="239" font-size="12" font-weight="700" fill="#38bdf8">take ➔ took (搭/拿)</text>

      <rect x="405" y="258" width="345" height="52" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="415" y="278" font-size="11" font-weight="700" fill="#fbbf24">時間副詞線索：yesterday, last night, two days ago</text>
      <text x="415" y="296" font-size="11" fill="#cbd5e1">例句：Did you go to Taipei yesterday? Yes, I went there.</text>
    `
  },

  // ==================== 🎨 藝術領域 (Arts) ====================
  {
    filename: 'art_u1_concept1.svg',
    title: '色彩三要素（色相・明度・彩度）與 12 色相環 (Color Wheel)',
    subtitle: '108 課綱 視 1-III-1：認識三原色、二次色、冷暖色調與互補色對比',
    badge: '色彩學基礎',
    content: `
      <!-- Left: 12 Color Wheel Circle -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">🎨 12 色相環與三原色 (RYB)</text>

      <!-- Center circles -->
      <circle cx="185" cy="160" r="90" fill="none" stroke="#334155" stroke-width="2"/>
      <!-- Primary Colors (Red, Yellow, Blue) -->
      <circle cx="185" cy="80" r="22" fill="#ef4444"/>
      <text x="185" y="86" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">紅 Red</text>

      <circle cx="255" cy="205" r="22" fill="#eab308"/>
      <text x="255" y="211" font-size="12" font-weight="800" fill="#000000" text-anchor="middle">黃 Yellow</text>

      <circle cx="115" cy="205" r="22" fill="#3b82f6"/>
      <text x="115" y="211" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">藍 Blue</text>

      <!-- Secondary Colors (Orange, Green, Purple) -->
      <circle cx="240" cy="125" r="16" fill="#f97316"/>
      <text x="240" y="130" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">橘</text>

      <circle cx="185" cy="245" r="16" fill="#22c55e"/>
      <text x="185" y="250" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">綠</text>

      <circle cx="130" cy="125" r="16" fill="#a855f7"/>
      <text x="130" y="130" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">紫</text>

      <text x="185" y="295" font-size="12" font-weight="700" fill="#cbd5e1" text-anchor="middle">三原色混合 ➔ 二次色 ➔ 三次色</text>

      <!-- Right: Three Attributes -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">💡 色彩三要素核心定義</text>

      <rect x="405" y="55" width="340" height="75" rx="8" fill="#0f172a" stroke="#ef4444"/>
      <text x="420" y="78" font-size="13" font-weight="800" fill="#f87171">① 色相 (Hue)</text>
      <text x="420" y="98" font-size="12" fill="#cbd5e1">色彩的相貌與名稱（如紅、藍、黃、綠）。</text>
      <text x="420" y="118" font-size="11" fill="#94a3b8">是區別不同色彩的最根本屬性。</text>

      <rect x="405" y="140" width="340" height="75" rx="8" fill="#0f172a" stroke="#eab308"/>
      <text x="420" y="163" font-size="13" font-weight="800" fill="#facc15">② 明度 (Value / Brightness)</text>
      <text x="420" y="183" font-size="12" fill="#cbd5e1">色彩的明亮程度（深淺）。加白變亮、加黑變暗。</text>
      <text x="420" y="203" font-size="11" fill="#94a3b8">黃色明度最高、紫色明度最低。</text>

      <rect x="405" y="225" width="340" height="75" rx="8" fill="#0f172a" stroke="#a855f7"/>
      <text x="420" y="248" font-size="13" font-weight="800" fill="#c084fc">③ 彩度 (Saturation / Purity)</text>
      <text x="420" y="268" font-size="12" fill="#cbd5e1">色彩的純度或飽和度（鮮豔 vs 混濁）。</text>
      <text x="420" y="288" font-size="11" fill="#94a3b8">原色純度最高；加入灰色會使彩度降低。</text>
    `
  },

  // ==================== 💪 健康與體育 (Health & PE) ====================
  {
    filename: 'pe_u3_concept1.svg',
    title: '關鍵時刻急救與運動防護：CPR+AED「叫叫CD」與 PRICE 原則',
    subtitle: '108 課綱 健 3a-III-1：熟練心肺復甦術按壓深度頻率與扭傷處置',
    badge: '黃金救援4分鐘',
    content: `
      <!-- Left: CPR + AED Call Call C D -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">🚨 CPR+AED「叫叫CD」口訣</text>

      <rect x="16" y="55" width="338" height="55" rx="8" fill="#0f172a" stroke="#3b82f6"/>
      <text x="30" y="78" font-size="13" font-weight="800" fill="#60a5fa">叫 (Check)：拍肩呼叫，確認意識與呼吸</text>
      <text x="30" y="97" font-size="11" fill="#cbd5e1">若無呼吸或僅有瀕死喘息，立即啟動急救。</text>

      <rect x="16" y="118" width="338" height="55" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="30" y="141" font-size="13" font-weight="800" fill="#34d399">叫 (Call)：指定路人撥打 119，並拿 AED</text>
      <text x="30" y="160" font-size="11" fill="#cbd5e1">明確指定對象：「那位穿紅衣服的先生請幫忙報案拿AED！」</text>

      <rect x="16" y="181" width="338" height="65" rx="8" fill="#0f172a" stroke="#ef4444"/>
      <text x="30" y="204" font-size="13" font-weight="800" fill="#f87171">C (Compress)：雙手重疊胸外按壓</text>
      <text x="30" y="223" font-size="12" fill="#fca5a5">位置：兩乳頭連線正中央（胸骨下半段）</text>
      <text x="30" y="238" font-size="11" fill="#cbd5e1">深度：至少 5 公分；速率：每分鐘 100~120 下</text>

      <rect x="16" y="254" width="338" height="58" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="30" y="277" font-size="13" font-weight="800" fill="#fbbf24">D (Defibrillate)：依語音操作 AED 電擊</text>
      <text x="30" y="296" font-size="11" fill="#cbd5e1">開電源 ➔ 貼貼片 ➔ 聽分析離患者 ➔ 按下電擊鍵</text>

      <!-- Right: PRICE for Sports Injury -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">🩹 急性運動傷害 PRICE 處理原則</text>

      <rect x="405" y="55" width="340" height="46" rx="6" fill="#0f172a" stroke="#3b82f6"/>
      <text x="420" y="76" font-size="13" font-weight="800" fill="#60a5fa">P - Protect (保護)：使用護具固定傷處</text>
      <text x="420" y="93" font-size="11" fill="#cbd5e1">防止二度受傷，停止比賽或活動。</text>

      <rect x="405" y="108" width="340" height="46" rx="6" fill="#0f172a" stroke="#10b981"/>
      <text x="420" y="129" font-size="13" font-weight="800" fill="#34d399">R - Rest (休息)：立即停止患部活動</text>
      <text x="420" y="146" font-size="11" fill="#cbd5e1">切忌勉強運動，以免韌帶或肌肉撕裂惡化。</text>

      <rect x="405" y="161" width="340" height="46" rx="6" fill="#0f172a" stroke="#06b6d4"/>
      <text x="420" y="182" font-size="13" font-weight="800" fill="#38bdf8">I - Ice (冰敷)：降低微血管破裂出血</text>
      <text x="420" y="199" font-size="11" fill="#cbd5e1">每次 15~20 分鐘，毛巾包裹冰塊防凍傷。</text>

      <rect x="405" y="214" width="340" height="46" rx="6" fill="#0f172a" stroke="#f59e0b"/>
      <text x="420" y="235" font-size="13" font-weight="800" fill="#fbbf24">C - Compress (壓迫)：彈性繃帶適度加壓</text>
      <text x="420" y="252" font-size="11" fill="#cbd5e1">減少患部腫脹，留意末梢血液循環。</text>

      <rect x="405" y="267" width="340" height="46" rx="6" fill="#0f172a" stroke="#a855f7"/>
      <text x="420" y="288" font-size="13" font-weight="800" fill="#c084fc">E - Elevate (抬高)：抬高患肢高於心臟</text>
      <text x="420" y="305" font-size="11" fill="#cbd5e1">促進血液靜脈回流，有效消除患處水腫。</text>
    `
  },

  // ==================== 🌱 綜合活動 (Integrative) ====================
  {
    filename: 'comp_u1_concept1.svg',
    title: '時間管理四象限法則與「六三一」聰明存錢法 (Time & Money)',
    subtitle: '108 課綱 綜 1a-III-1：打造自律高效高年級自主學習與理性消費習慣',
    badge: '高自律生活管理',
    content: `
      <!-- Left: Eisenhower 4 Quadrants -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">⏳ 時間管理四象限法 (Eisenhower Matrix)</text>

      <!-- Grid Axis -->
      <line x1="20" y1="180" x2="350" y2="180" stroke="#475569" stroke-width="2"/>
      <line x1="185" y1="50" x2="185" y2="310" stroke="#475569" stroke-width="2"/>

      <!-- Q1: Urgent & Important -->
      <rect x="25" y="55" width="150" height="115" rx="8" fill="#e11d48" fill-opacity="0.2" stroke="#f43f5e"/>
      <text x="100" y="80" font-size="12" font-weight="800" fill="#fb7185" text-anchor="middle">第 1 象限：緊急且重要</text>
      <text x="100" y="105" font-size="11" fill="#fecdd3" text-anchor="middle">明天段考、急病送醫</text>
      <text x="100" y="125" font-size="11" fill="#cbd5e1" text-anchor="middle">策略：【馬上行動】</text>

      <!-- Q2: Not Urgent but Important (KEY!) -->
      <rect x="195" y="55" width="150" height="115" rx="8" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="2"/>
      <text x="270" y="78" font-size="12" font-weight="800" fill="#34d399" text-anchor="middle">第 2 象限：重要不緊急</text>
      <text x="270" y="98" font-size="10" font-weight="700" fill="#f59e0b" text-anchor="middle">★ 決定人生高度關鍵！</text>
      <text x="270" y="120" font-size="11" fill="#a7f3d0" text-anchor="middle">規律運動、閱讀先修</text>
      <text x="270" y="140" font-size="11" fill="#cbd5e1" text-anchor="middle">策略：【預先排程】</text>

      <!-- Q3: Urgent but Not Important -->
      <rect x="25" y="190" width="150" height="115" rx="8" fill="#f59e0b" fill-opacity="0.2" stroke="#fbbf24"/>
      <text x="100" y="215" font-size="12" font-weight="800" fill="#fbbf24" text-anchor="middle">第 3 象限：緊急不重要</text>
      <text x="100" y="240" font-size="11" fill="#fde68a" text-anchor="middle">突發電話、無謂插話</text>
      <text x="100" y="260" font-size="11" fill="#cbd5e1" text-anchor="middle">策略：【委派或快做】</text>

      <!-- Q4: Not Urgent & Not Important -->
      <rect x="195" y="190" width="150" height="115" rx="8" fill="#64748b" fill-opacity="0.2" stroke="#64748b"/>
      <text x="270" y="215" font-size="12" font-weight="800" fill="#94a3b8" text-anchor="middle">第 4 象限：不急不重要</text>
      <text x="270" y="240" font-size="11" fill="#cbd5e1" text-anchor="middle">無止盡滑短影音、發呆</text>
      <text x="270" y="260" font-size="11" fill="#cbd5e1" text-anchor="middle">策略：【嚴格節制】</text>

      <!-- Right: 6-3-1 Savings Method -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">💰 零用錢「六三一」理財分配法</text>

      <rect x="405" y="55" width="340" height="75" rx="8" fill="#0f172a" stroke="#3b82f6"/>
      <text x="420" y="78" font-size="14" font-weight="800" fill="#60a5fa">60% 必要生活支出 (Needs)</text>
      <text x="420" y="98" font-size="12" fill="#cbd5e1">買文具用品、搭公車車資、學校午餐等「必須花費」。</text>
      <text x="420" y="118" font-size="11" fill="#94a3b8">滿足生存與學習基本需求。</text>

      <rect x="405" y="140" width="340" height="75" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="420" y="163" font-size="14" font-weight="800" fill="#34d399">30% 夢想儲蓄帳戶 (Savings)</text>
      <text x="420" y="183" font-size="12" fill="#cbd5e1">拿到零用錢「先存再花」！累積畢業旅行基金或升中買腳踏車。</text>
      <text x="420" y="203" font-size="11" fill="#94a3b8">培養延遲享樂好品格。</text>

      <rect x="405" y="225" width="340" height="75" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="420" y="248" font-size="14" font-weight="800" fill="#fbbf24">10% 風險急用與利他 (Give & Care)</text>
      <text x="420" y="268" font-size="12" fill="#cbd5e1">緊急備用金、朋友生日卡片、或投入公益捐款。</text>
      <text x="420" y="288" font-size="11" fill="#94a3b8">學會分享愛與承擔責任。</text>
    `
  }
];

// Generate and save all SVG files
for (const item of diagrams) {
  const svgStr = createSvg(item.title, item.subtitle, item.badge, item.content);
  const targetPath = path.join(outDir, item.filename);
  fs.writeFileSync(targetPath, svgStr, 'utf-8');
  console.log(`Generated SVG: ${targetPath}`);
}

console.log(`Successfully generated ${diagrams.length} core SVG educational diagrams!`);
