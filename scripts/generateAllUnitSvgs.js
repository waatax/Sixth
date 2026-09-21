import fs from 'fs';
import path from 'path';
import { createSvg, outDir } from './svgHelper.js';

// Define comprehensive SVG diagrams for all units and subconcepts
const allDiagrams = [
  // ==================== 🧮 數學領域 (Math Units 1 ~ 12) ====================
  {
    filename: 'math_u3_concept1.svg',
    title: '小數除法直式算則與餘數定位規律 (Decimal Division & Remainder)',
    subtitle: '108 課綱 n-III-7：除數小數點向右移、商與餘數小數點對齊關鍵規則',
    badge: '餘數小數點對原位',
    content: `
      <!-- Left: Long division rule -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">🔢 小數除法 3 步移位算則</text>

      <rect x="16" y="55" width="338" height="60" rx="8" fill="#0f172a" stroke="#3b82f6"/>
      <text x="30" y="78" font-size="13" font-weight="700" fill="#60a5fa">Step 1：除數化為整數 (向右移位)</text>
      <text x="30" y="98" font-size="12" fill="#cbd5e1">除數有幾位小數，被除數小數點就同步向右移幾位！</text>

      <rect x="16" y="125" width="338" height="60" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="30" y="148" font-size="13" font-weight="700" fill="#34d399">Step 2：商的小數點 ➔ 對齊「新小數點」</text>
      <text x="30" y="168" font-size="12" fill="#cbd5e1">商的小數點直接向上對齊移動後的新位置。</text>

      <rect x="16" y="195" width="338" height="70" rx="8" fill="#0f172a" stroke="#f43f5e"/>
      <text x="30" y="218" font-size="13" font-weight="800" fill="#fb7185">Step 3：餘數的小數點 ➔ 對齊「原本小數點」！</text>
      <text x="30" y="238" font-size="12" fill="#fecdd3">★ 全國大考最高頻陷阱！</text>
      <text x="30" y="255" font-size="11" fill="#cbd5e1">餘數代表實際剩下的量，必須還原垂直對齊被除數原小數點！</text>

      <rect x="16" y="275" width="338" height="40" rx="8" fill="#7c3aed" fill-opacity="0.2" stroke="#a855f7"/>
      <text x="185" y="300" font-size="13" font-weight="700" fill="#c084fc" text-anchor="middle">口訣：商隨新點走・餘點對原頭</text>

      <!-- Right: Worked example -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">📝 經典驗證：7.5 公升果汁，每 0.8 公升裝一瓶？</text>

      <rect x="405" y="55" width="340" height="150" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="420" y="80" font-size="13" font-weight="700" fill="#fbbf24">直式計算演示：7.5 ÷ 0.8</text>
      <text x="430" y="110" font-size="14" font-family="monospace" fill="#ffffff">除數 0.8 右移1位 ➔ 變成 8</text>
      <text x="430" y="132" font-size="14" font-family="monospace" fill="#ffffff">被除數 7.5 右移1位 ➔ 變成 75</text>
      <text x="430" y="154" font-size="14" font-family="monospace" fill="#38bdf8">75 ÷ 8 ＝ 9 (瓶) ... 餘 3</text>
      <text x="430" y="185" font-size="14" font-family="monospace" font-weight="800" fill="#f87171">餘數還原：0.3 公升 (不是 3 公升！)</text>

      <rect x="405" y="215" width="340" height="95" rx="8" fill="#10b981" fill-opacity="0.15" stroke="#34d399"/>
      <text x="420" y="238" font-size="13" font-weight="800" fill="#34d399">驗算方程式：</text>
      <text x="420" y="260" font-size="14" font-weight="700" fill="#ffffff">被除數 ＝ 除數 × 商 ＋ 餘數</text>
      <text x="420" y="282" font-size="14" font-weight="700" fill="#a7f3d0">7.5 ＝ (0.8 × 9) ＋ 0.3 ＝ 7.2 ＋ 0.3 ＝ 7.5 (完全正確！)</text>
    `
  },
  {
    filename: 'math_u4_concept1.svg',
    title: '比與比值：前項後項、等比性質與最簡整數比 (Ratios)',
    subtitle: '108 課綱 n-III-9：比的表示法 a:b、比值 a/b 與生活調配比例天平',
    badge: '比值＝前項÷後項',
    content: `
      <!-- Left: Definition & Terms -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">⚖️ 比的基本術語與運算規則</text>

      <rect x="25" y="60" width="320" height="70" rx="8" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="185" y="95" font-size="24" font-weight="900" fill="#ffffff" text-anchor="middle">
        <tspan fill="#60a5fa">前項 a</tspan>
        <tspan fill="#94a3b8"> ： </tspan>
        <tspan fill="#34d399">後項 b</tspan>
      </text>
      <text x="185" y="118" font-size="12" fill="#cbd5e1" text-anchor="middle">比值 ＝ 前項 ÷ 後項 ＝ a / b (b ≠ 0)</text>

      <rect x="20" y="145" width="330" height="75" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="35" y="168" font-size="13" font-weight="800" fill="#34d399">⭐ 相等的比 (等比性質)：</text>
      <text x="35" y="190" font-size="12" fill="#cbd5e1">前項與後項「同乘」或「同除」以同一個不為 0 的數，</text>
      <text x="35" y="208" font-size="12" fill="#93c5fd">比值維持不變！例： 4 : 6 ＝ 2 : 3 ＝ 8 : 12</text>

      <rect x="20" y="230" width="330" height="80" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="35" y="253" font-size="13" font-weight="800" fill="#fbbf24">🎯 化為最簡整數比技巧：</text>
      <text x="35" y="275" font-size="12" fill="#cbd5e1">1. 分數比：同乘以分母的最小公倍數 (LCM)</text>
      <text x="35" y="295" font-size="12" fill="#cbd5e1">2. 小數比：同乘以 10, 100 化為整數，再除以 GCD</text>

      <!-- Right: Real-world ratio recipe -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">🧃 生活應用：特調厚奶茶黃金比例 3 : 2</text>

      <!-- Milk Tea Visual -->
      <rect x="430" y="65" width="80" height="150" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
      <!-- Tea Part (3 units) -->
      <rect x="435" y="125" width="70" height="85" fill="#d97706" fill-opacity="0.8"/>
      <text x="470" y="170" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">紅茶 3 份</text>
      <!-- Milk Part (2 units) -->
      <rect x="435" y="70" width="70" height="55" fill="#f1f5f9" fill-opacity="0.9"/>
      <text x="470" y="102" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">鮮奶 2 份</text>

      <rect x="530" y="65" width="215" height="150" rx="8" fill="#0f172a" stroke="#3b82f6"/>
      <text x="545" y="90" font-size="13" font-weight="800" fill="#60a5fa">比例調配問題：</text>
      <text x="545" y="115" font-size="12" fill="#cbd5e1">若要調配 1000 毫升厚奶茶：</text>
      <text x="545" y="138" font-size="12" fill="#f59e0b">總份數 ＝ 3 ＋ 2 ＝ 5 份</text>
      <text x="545" y="162" font-size="12" fill="#ffffff">紅茶 ＝ 1000 × (3/5) ＝ 600 ml</text>
      <text x="545" y="185" font-size="12" fill="#ffffff">鮮奶 ＝ 1000 × (2/5) ＝ 400 ml</text>

      <rect x="405" y="230" width="340" height="80" rx="8" fill="#10b981" fill-opacity="0.15" stroke="#34d399"/>
      <text x="575" y="255" font-size="13" font-weight="800" fill="#34d399" text-anchor="middle">比值在生活中的意義：</text>
      <text x="575" y="278" font-size="12" fill="#cbd5e1" text-anchor="middle">紅茶與鮮奶的比值 ＝ 3 ÷ 2 ＝ 1.5</text>
      <text x="575" y="298" font-size="12" fill="#a7f3d0" text-anchor="middle">代表紅茶的用量永遠是鮮奶的 1.5 倍！</text>
    `
  },
  {
    filename: 'math_u8_concept1.svg',
    title: '柱體體積與表面積計算模型 (Prism & Cylinder Volume)',
    subtitle: '108 課綱 s-III-5：底面積×柱高體積公式與展開圖側面長方形計算',
    badge: '體積＝底面積×高',
    content: `
      <!-- Left: Triangular Prism & Cylinder Volume -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">📦 柱體體積大一統公式</text>

      <!-- 3D Cylinder sketch -->
      <ellipse cx="110" cy="90" rx="45" ry="18" fill="#2563eb" fill-opacity="0.3" stroke="#3b82f6" stroke-width="2"/>
      <line x1="65" y1="90" x2="65" y2="170" stroke="#3b82f6" stroke-width="2"/>
      <line x1="155" y1="90" x2="155" y2="170" stroke="#3b82f6" stroke-width="2"/>
      <ellipse cx="110" cy="170" rx="45" ry="18" fill="#2563eb" fill-opacity="0.6" stroke="#3b82f6" stroke-width="2"/>
      <text x="110" y="95" font-size="11" font-weight="700" fill="#93c5fd" text-anchor="middle">頂底相同</text>
      <text x="110" y="175" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">底面積 B</text>
      <!-- Height line -->
      <line x1="170" y1="90" x2="170" y2="170" stroke="#ef4444" stroke-width="2"/>
      <text x="180" y="135" font-size="12" font-weight="800" fill="#f87171">高 h</text>

      <rect x="20" y="200" width="330" height="110" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
      <text x="35" y="225" font-size="14" font-weight="800" fill="#34d399">柱體體積 ＝ 底面積 × 柱高</text>
      <text x="35" y="250" font-size="12" fill="#cbd5e1">• 三角柱：(底 × 高 ÷ 2) × 柱高</text>
      <text x="35" y="272" font-size="12" fill="#cbd5e1">• 四角柱：(長 × 寬) × 柱高</text>
      <text x="35" y="294" font-size="12" fill="#38bdf8">• 圓柱體：(半徑 × 半徑 × 3.14) × 柱高</text>

      <!-- Right: Cylinder Net (Surface Area) -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">📐 圓柱展開圖與表面積解密</text>

      <!-- Net of cylinder -->
      <!-- Top circle -->
      <circle cx="575" cy="75" r="22" fill="#10b981" fill-opacity="0.4" stroke="#10b981" stroke-width="2"/>
      <text x="575" y="80" font-size="10" font-weight="700" fill="#a7f3d0" text-anchor="middle">上底</text>

      <!-- Side rectangle -->
      <rect x="440" y="105" width="270" height="65" rx="4" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
      <text x="575" y="142" font-size="13" font-weight="800" fill="#fbbf24" text-anchor="middle">側面展開為「長方形」</text>

      <!-- Bottom circle -->
      <circle cx="575" cy="195" r="22" fill="#10b981" fill-opacity="0.4" stroke="#10b981" stroke-width="2"/>
      <text x="575" y="200" font-size="10" font-weight="700" fill="#a7f3d0" text-anchor="middle">下底</text>

      <!-- Formula Summary -->
      <rect x="405" y="225" width="340" height="85" rx="8" fill="#0f172a" stroke="#3b82f6"/>
      <text x="420" y="248" font-size="13" font-weight="800" fill="#60a5fa">圓柱表面積 ＝ 2個底面積 ＋ 側面面積</text>
      <text x="420" y="270" font-size="12" fill="#fecdd3">★ 關鍵：側面長方形的長 ＝ 底面圓周長！</text>
      <text x="420" y="292" font-size="12" fill="#cbd5e1">側面積 ＝ (直徑 × 3.14) × 柱高</text>
    `
  },
  {
    filename: 'math_u10_concept1.svg',
    title: '基準量、比較量與怎樣解題線段模型 (Base & Compared Quantity)',
    subtitle: '108 課綱 r-III-2：基準量當作 1、折扣加成、母子和與母子差問題',
    badge: '基準量＝1倍數',
    content: `
      <!-- Left: Line Model of Base vs Compared -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">📏 基準量與比較量黃金線段圖</text>

      <!-- Base Quantity Bar (1) -->
      <rect x="30" y="70" width="140" height="36" rx="6" fill="#2563eb"/>
      <text x="100" y="93" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">基準量 (當作 1)</text>
      <text x="210" y="93" font-size="12" fill="#94a3b8">被比較的標準 (如成本、原價)</text>

      <!-- Compared Quantity Bar (1.5) -->
      <rect x="30" y="125" width="210" height="36" rx="6" fill="#10b981"/>
      <text x="135" y="148" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle">比較量 (1.5 倍)</text>
      <text x="265" y="148" font-size="12" fill="#94a3b8">與基準量對比</text>

      <!-- Formula block -->
      <rect x="20" y="180" width="330" height="130" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="35" y="205" font-size="13" font-weight="800" fill="#fbbf24">📐 核心算式三大變形：</text>
      <text x="35" y="230" font-size="13" font-weight="700" fill="#ffffff">① 比值 (倍數) ＝ 比較量 ÷ 基準量</text>
      <text x="35" y="255" font-size="13" font-weight="700" fill="#60a5fa">② 比較量 ＝ 基準量 × 比值</text>
      <text x="35" y="280" font-size="13" font-weight="700" fill="#34d399">③ 基準量 ＝ 比較量 ÷ 比值</text>
      <text x="35" y="300" font-size="11" fill="#cbd5e1">口訣：「比」後面接的對象，就是「基準量」！</text>

      <!-- Right: Mother-Child Sum/Difference -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">💡 母子和與母子差生活實戰</text>

      <rect x="405" y="55" width="340" height="80" rx="8" fill="#0f172a" stroke="#3b82f6"/>
      <text x="420" y="78" font-size="13" font-weight="800" fill="#60a5fa">加成利潤 (母子和問題)：</text>
      <text x="420" y="100" font-size="12" fill="#cbd5e1">成本加二成五作為售價 ➔ 售價 ＝ 成本 × (1 ＋ 0.25)</text>
      <text x="420" y="122" font-size="12" fill="#a7f3d0">母子和 ＝ 基準量 × (1 ＋ 比值)</text>

      <rect x="405" y="145" width="340" height="80" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="420" y="168" font-size="13" font-weight="800" fill="#fbbf24">打折促銷 (母子差問題)：</text>
      <text x="420" y="190" font-size="12" fill="#cbd5e1">全館定價打八折 ➔ 售價 ＝ 定價 × 0.8</text>
      <text x="420" y="212" font-size="12" fill="#fde68a">折價省下的錢 ＝ 定價 × (1 － 0.8) ＝ 定價 × 0.2</text>

      <rect x="405" y="235" width="340" height="75" rx="8" fill="#0f172a" stroke="#a855f7"/>
      <text x="420" y="258" font-size="13" font-weight="800" fill="#c084fc">雞兔同籠特殊題型：</text>
      <text x="420" y="280" font-size="12" fill="#cbd5e1">「假設法」神技：若全部都是雞(2隻腳)，</text>
      <text x="420" y="298" font-size="12" fill="#cbd5e1">少算的腳數 ÷ 2 ＝ 兔子隻數！</text>
    `
  },
  {
    filename: 'math_u11_concept1.svg',
    title: '等量公理與未知數方程求解模型 (Axiom of Equality)',
    subtitle: '108 課綱 r-III-4：用天平平衡原理理解等量加減乘除與移項法則',
    badge: '等式等量公理',
    content: `
      <!-- Left: Balance Scale -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">⚖️ 天平平衡幾何直觀</text>

      <!-- Balance post -->
      <line x1="185" y1="75" x2="185" y2="190" stroke="#94a3b8" stroke-width="5"/>
      <polygon points="185,190 150,225 220,225" fill="#475569"/>
      <!-- Balance beam -->
      <line x1="60" y1="90" x2="310" y2="90" stroke="#f59e0b" stroke-width="4"/>
      <!-- Left pan -->
      <line x1="80" y1="90" x2="80" y2="140" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect x="40" y="140" width="80" height="20" rx="4" fill="#2563eb"/>
      <text x="80" y="155" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">x ＋ 5</text>
      <!-- Right pan -->
      <line x1="290" y1="90" x2="290" y2="140" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect x="250" y="140" width="80" height="20" rx="4" fill="#10b981"/>
      <text x="290" y="155" font-size="12" font-weight="800" fill="#ffffff" text-anchor="middle">12</text>

      <rect x="20" y="235" width="330" height="75" rx="8" fill="#0f172a" stroke="#3b82f6"/>
      <text x="185" y="260" font-size="14" font-weight="800" fill="#60a5fa" text-anchor="middle">天平兩邊同時拿走 5 (等量減法)</text>
      <text x="185" y="285" font-size="16" font-weight="900" fill="#34d399" text-anchor="middle">x ＋ 5 － 5 ＝ 12 － 5 ➔ x ＝ 7</text>
      <text x="185" y="303" font-size="11" fill="#94a3b8" text-anchor="middle">天平依然保持水平平衡！</text>

      <!-- Right: Four Axioms -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">📐 等量公理四大核心律</text>

      <rect x="405" y="55" width="340" height="55" rx="8" fill="#0f172a" stroke="#2563eb"/>
      <text x="420" y="76" font-size="13" font-weight="800" fill="#60a5fa">① 等量加法公理</text>
      <text x="420" y="96" font-size="12" fill="#cbd5e1">若 a ＝ b，則 a ＋ c ＝ b ＋ c （等號兩邊同加 c）</text>

      <rect x="405" y="118" width="340" height="55" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="420" y="139" font-size="13" font-weight="800" fill="#34d399">② 等量減法公理</text>
      <text x="420" y="159" font-size="12" fill="#cbd5e1">若 a ＝ b，則 a － c ＝ b － c （等號兩邊同減 c）</text>

      <rect x="405" y="181" width="340" height="55" rx="8" fill="#0f172a" stroke="#f59e0b"/>
      <text x="420" y="202" font-size="13" font-weight="800" fill="#fbbf24">③ 等量乘法公理</text>
      <text x="420" y="222" font-size="12" fill="#cbd5e1">若 a ＝ b，則 a × c ＝ b × c （等號兩邊同乘 c）</text>

      <rect x="405" y="244" width="340" height="65" rx="8" fill="#0f172a" stroke="#ef4444"/>
      <text x="420" y="265" font-size="13" font-weight="800" fill="#f87171">④ 等量除法公理 (c ≠ 0)</text>
      <text x="420" y="285" font-size="12" fill="#cbd5e1">若 a ＝ b 且 c ≠ 0，則 a ÷ c ＝ b ÷ c</text>
      <text x="420" y="300" font-size="10" fill="#fca5a5">特別注意：除數不能為 0！</text>
    `
  },
  {
    filename: 'math_u12_concept1.svg',
    title: '統計圖表與百分率圓形圖 (Pie Chart & Sector Angle)',
    subtitle: '108 課綱 d-III-1：百分率總和 100%、圓心角換算與大數據判讀',
    badge: '圓心角＝360°×百分率',
    content: `
      <!-- Left: Pie Chart Visual -->
      <rect x="0" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="0" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="20" y="26" font-size="15" font-weight="700" fill="#f8fafc">🥧 百分率圓形圖結構分析</text>

      <!-- Pie slices -->
      <circle cx="185" cy="160" r="80" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
      <!-- 50% half -->
      <path d="M185,160 L185,80 A80,80 0 0,1 185,240 Z" fill="#3b82f6" fill-opacity="0.8"/>
      <text x="230" y="165" font-size="13" font-weight="800" fill="#ffffff">運動 50%</text>
      <!-- 25% quarter -->
      <path d="M185,160 L185,240 A80,80 0 0,1 105,160 Z" fill="#10b981" fill-opacity="0.8"/>
      <text x="135" y="205" font-size="12" font-weight="800" fill="#ffffff">閱讀 25%</text>
      <!-- 15% and 10% -->
      <path d="M185,160 L105,160 A80,80 0 0,1 128,103 Z" fill="#f59e0b" fill-opacity="0.8"/>
      <text x="125" y="140" font-size="11" font-weight="800" fill="#ffffff">音樂 15%</text>
      <path d="M185,160 L128,103 A80,80 0 0,1 185,80 Z" fill="#ef4444" fill-opacity="0.8"/>
      <text x="155" y="100" font-size="10" font-weight="800" fill="#ffffff">其他 10%</text>

      <text x="185" y="275" font-size="13" font-weight="800" fill="#f8fafc" text-anchor="middle">總和必為 100% (圓整一體)</text>
      <text x="185" y="298" font-size="11" fill="#94a3b8" text-anchor="middle">若相加 ≠ 100%，需檢查計算四捨五入或項目遺漏</text>

      <!-- Right: Angle Conversion & Step -->
      <rect x="390" y="0" width="370" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
      <rect x="390" y="0" width="370" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
      <text x="410" y="26" font-size="15" font-weight="700" fill="#f8fafc">📐 圓心角換算與繪圖 3 步驟</text>

      <rect x="405" y="55" width="340" height="75" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="420" y="80" font-size="14" font-weight="800" fill="#fbbf24">⭐ 核心公式：圓心角度數</text>
      <text x="420" y="105" font-size="15" font-weight="800" fill="#38bdf8">圓心角 ＝ 360° × 百分率 (%)</text>
      <text x="420" y="122" font-size="11" fill="#cbd5e1">例：25% ➔ 360° × 0.25 ＝ 90° (直角！)</text>

      <rect x="405" y="140" width="340" height="165" rx="8" fill="#0f172a" stroke="#10b981"/>
      <text x="420" y="165" font-size="13" font-weight="800" fill="#34d399">繪製圓形圖 3 大步驟：</text>
      <text x="420" y="190" font-size="12" fill="#cbd5e1">1. 計算各項目占總數的「百分率」(%)</text>
      <text x="420" y="215" font-size="12" fill="#cbd5e1">2. 乘以 360° 算出各項目的「圓心角」度數</text>
      <text x="420" y="240" font-size="12" fill="#cbd5e1">3. 用量角器從半徑基準線依序畫出圓心角，</text>
      <text x="420" y="262" font-size="12" fill="#cbd5e1">   並標記項目名稱與百分率。</text>
      <text x="420" y="290" font-size="11" font-weight="600" fill="#fcd34d">💡 優點：一眼看出各部分佔全體的比例大小！</text>
    `
  }
];

// Write diagrams to public/images
for (const item of allDiagrams) {
  const svgStr = createSvg(item.title, item.subtitle, item.badge, item.content);
  const targetPath = path.join(outDir, item.filename);
  fs.writeFileSync(targetPath, svgStr, 'utf-8');
  console.log(`Generated SVG: ${targetPath}`);
}
console.log('Done generating extended math SVGs!');
