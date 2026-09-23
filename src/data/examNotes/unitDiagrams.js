// 🎨 108 課綱六年級全科 64 單元考點視覺化純向量 SVG 圖示引擎
// 支援網頁端 React 元件渲染與 Node.js PDF 批次編譯向量嵌入
// 涵蓋幾何、理化、文法、造字、歷史、地圖、急救、理財等核心圖解

export const unitDiagramCatalog = {
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🧮 數學領域 (12 單元圖解)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'math-u1': {
    title: '短除法求 GCD 與 LCM 結構圖',
    subtitle: '質因數分解・L型相乘求最小公倍數',
    svg: `<svg viewBox="0 0 240 160" width="100%" height="100%">
      <rect width="240" height="160" fill="#f8fafc" rx="8" />
      <!-- 短除法外框 -->
      <line x1="60" y1="40" x2="60" y2="115" stroke="#3b82f6" stroke-width="2.5" />
      <line x1="60" y1="65" x2="190" y2="65" stroke="#3b82f6" stroke-width="2" />
      <line x1="60" y1="95" x2="190" y2="95" stroke="#3b82f6" stroke-width="2" />
      <line x1="60" y1="125" x2="190" y2="125" stroke="#3b82f6" stroke-width="2" />
      <!-- 被除數 -->
      <text x="95" y="55" font-size="14" font-weight="bold" fill="#1e293b">24</text>
      <text x="145" y="55" font-size="14" font-weight="bold" fill="#1e293b">36</text>
      <!-- 第一除數 2 -->
      <text x="40" y="55" font-size="14" font-weight="bold" fill="#ef4444">2</text>
      <!-- 商 12, 18 -->
      <text x="95" y="85" font-size="14" fill="#334155">12</text>
      <text x="145" y="85" font-size="14" fill="#334155">18</text>
      <!-- 第二除數 2 -->
      <text x="40" y="85" font-size="14" font-weight="bold" fill="#ef4444">2</text>
      <!-- 商 6, 9 -->
      <text x="98" y="115" font-size="14" fill="#334155">6</text>
      <text x="148" y="115" font-size="14" fill="#334155">9</text>
      <!-- 第三除數 3 -->
      <text x="40" y="115" font-size="14" font-weight="bold" fill="#ef4444">3</text>
      <!-- 底部互質商數 2, 3 -->
      <text x="98" y="145" font-size="14" font-weight="bold" fill="#10b981">2</text>
      <text x="148" y="145" font-size="14" font-weight="bold" fill="#10b981">3</text>
      <!-- L 型標示框 -->
      <path d="M 30 40 L 30 155 L 175 155" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3" />
      <text x="180" y="148" font-size="10" font-weight="bold" fill="#10b981">互質 (停止)</text>
      <text x="120" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">GCD=2×2×3=12 ｜ LCM=12×2×3=72</text>
    </svg>`
  },

  'math-u2': {
    title: '分數除法「乘以倒數」算理示意',
    subtitle: '等分除概念：除以 1/2 即是乘以 2',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- 全長 1 單位長條 -->
      <rect x="30" y="40" width="180" height="24" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5" rx="3" />
      <rect x="30" y="40" width="90" height="24" fill="#93c5fd" stroke="#2563eb" stroke-width="1.5" rx="3" />
      <text x="75" y="56" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">1/2 單位</text>
      <text x="165" y="56" text-anchor="middle" font-size="11" fill="#64748b">1/2 單位</text>
      <!-- 倒數倍數箭頭 -->
      <path d="M 30 75 Q 75 95 120 75" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)" />
      <path d="M 120 75 Q 165 95 210 75" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)" />
      <text x="120" y="115" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">
        1 ÷ (1/2) = 1 × 2 = 2 個半塊
      </text>
      <text x="120" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">口訣：除號變乘號，除數分子分母顛倒</text>
    </svg>`
  },

  'math-u3': {
    title: '速率公式三大三角關係金字塔',
    subtitle: '距離、時間、速率相互推求與追趕相遇',
    svg: `<svg viewBox="0 0 240 150" width="100%" height="100%">
      <rect width="240" height="150" fill="#f8fafc" rx="8" />
      <!-- 速率三角形 -->
      <polygon points="120,20 40,120 200,120" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
      <!-- 分割線 -->
      <line x1="80" y1="70" x2="160" y2="70" stroke="#2563eb" stroke-width="2" />
      <line x1="120" y1="70" x2="120" y2="120" stroke="#2563eb" stroke-width="2" />
      <!-- 字母標記 -->
      <text x="120" y="55" text-anchor="middle" font-size="15" font-weight="900" fill="#1d4ed8">距離 (D)</text>
      <text x="80" y="102" text-anchor="middle" font-size="13" font-weight="bold" fill="#047857">速率 (S)</text>
      <text x="160" y="102" text-anchor="middle" font-size="13" font-weight="bold" fill="#b45309">時間 (T)</text>
      <!-- 乘除符號 -->
      <text x="120" y="102" text-anchor="middle" font-size="14" font-weight="bold" fill="#475569">×</text>
      <text x="120" y="140" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">
        相向相遇：時 = 距 ÷ (速A + 速B) ｜ 同向追趕：時 = 距 ÷ (速快 - 速慢)
      </text>
    </svg>`
  },

  'math-u4': {
    title: '圓面積切割重拼長方形算理',
    subtitle: '無限等分拼接：長為半圓周長、寬為半徑',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- 圓形割片拼合成長方形 -->
      <rect x="50" y="35" width="140" height="50" fill="#bae6fd" stroke="#0284c7" stroke-width="2" rx="4" />
      <!-- 長邊標記 -->
      <line x1="50" y1="25" x2="190" y2="25" stroke="#ef4444" stroke-width="1.5" />
      <text x="120" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="#ef4444">長 = 圓周長一半 (π × r)</text>
      <!-- 寬邊標記 -->
      <line x1="200" y1="35" x2="200" y2="85" stroke="#10b981" stroke-width="1.5" />
      <text x="210" y="65" font-size="10" font-weight="bold" fill="#10b981">寬 = r</text>
      <text x="120" y="65" text-anchor="middle" font-size="13" font-weight="bold" fill="#0369a1">面積 = π × r × r</text>
      <text x="120" y="115" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">
        葉形鋪色面積大招 = 0.57 × 正方形面積 (r=邊長)
      </text>
    </svg>`
  },

  'math-u5': {
    title: '柱體展開圖與表面積構造',
    subtitle: '表面積 = 底面積 × 2 + 側面積 (底面周長 × 柱高)',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- 上下底面 -->
      <circle cx="120" cy="25" r="16" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" />
      <circle cx="120" cy="115" r="16" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" />
      <!-- 側面展開長方形 -->
      <rect x="40" y="45" width="160" height="50" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" rx="3" />
      <text x="120" y="73" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">側面展開長 = 底面周長</text>
      <text x="208" y="73" font-size="10" font-weight="bold" fill="#0f172a">高 h</text>
      <text x="120" y="135" text-anchor="middle" font-size="10" font-weight="bold" fill="#334155">
        柱體體積 = 底面積 × 柱高 (任何柱體皆通用！)
      </text>
    </svg>`
  },

  'math-u6': {
    title: '基準量 (1) 與比較量線段圖',
    subtitle: '比值 = 比較量 ÷ 基準量 ｜ 母子和與母子差模型',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- 基準量 (當作 1) -->
      <rect x="40" y="30" width="100" height="20" fill="#cbd5e1" stroke="#475569" stroke-width="1.5" rx="3" />
      <text x="90" y="45" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">基準量 (當作 1)</text>
      <!-- 比較量 (1.4 倍) -->
      <rect x="40" y="65" width="140" height="20" fill="#93c5fd" stroke="#2563eb" stroke-width="1.5" rx="3" />
      <text x="110" y="80" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">比較量 (比值倍數)</text>
      <!-- 差額部分 -->
      <rect x="140" y="65" width="40" height="20" fill="#fecaca" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2" />
      <text x="160" y="100" text-anchor="middle" font-size="9" font-weight="bold" fill="#ef4444">母子差額</text>
      <text x="120" y="125" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">
        母子和：基準量 = 總和 ÷ (1 + 比值) ｜ 母子差：基準量 = 相差 ÷ (比值 - 1)
      </text>
    </svg>`
  },

  'math-u7': {
    title: '比例尺表示法與面積縮放比例',
    subtitle: '長度縮小 n 倍，面積縮小 n² 倍！',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- 原圖 (邊長 40) -->
      <rect x="35" y="30" width="50" height="50" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5" />
      <text x="60" y="60" text-anchor="middle" font-size="11" font-weight="bold" fill="#c2410c">原圖 S</text>
      <!-- 放大 2 倍圖 (長度 2倍，面積 4倍) -->
      <rect x="120" y="20" width="80" height="80" fill="#fdba74" stroke="#ea580c" stroke-width="2" />
      <text x="160" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="#9a3412">2倍放大圖 (4S)</text>
      <!-- 比例尺條 -->
      <rect x="60" y="110" width="120" height="6" fill="#1e293b" />
      <rect x="60" y="110" width="60" height="6" fill="#94a3b8" />
      <text x="60" y="128" font-size="9" fill="#475569">0</text>
      <text x="120" y="128" font-size="9" fill="#475569">1 km</text>
      <text x="180" y="128" font-size="9" fill="#475569">2 km</text>
    </svg>`
  },

  'math-u8': {
    title: '植樹規律與間隔點數三模型',
    subtitle: '兩端都種(點=間+1) ｜ 兩端不種(點=間-1) ｜ 封閉圓周(點=間)',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- 線段 3 個間隔，兩端都種 4 棵樹 -->
      <line x1="30" y1="40" x2="210" y2="40" stroke="#64748b" stroke-width="2" />
      <!-- 樹木標記 -->
      <circle cx="30" cy="40" r="5" fill="#16a34a" />
      <circle cx="90" cy="40" r="5" fill="#16a34a" />
      <circle cx="150" cy="40" r="5" fill="#16a34a" />
      <circle cx="210" cy="40" r="5" fill="#16a34a" />
      <text x="60" y="30" text-anchor="middle" font-size="10" fill="#475569">間隔 1</text>
      <text x="120" y="30" text-anchor="middle" font-size="10" fill="#475569">間隔 2</text>
      <text x="180" y="30" text-anchor="middle" font-size="10" fill="#475569">間隔 3</text>
      <!-- 封閉圓周 -->
      <circle cx="60" cy="95" r="22" fill="none" stroke="#2563eb" stroke-width="2" />
      <circle cx="60" cy="73" r="4" fill="#16a34a" />
      <circle cx="82" cy="95" r="4" fill="#16a34a" />
      <circle cx="60" cy="117" r="4" fill="#16a34a" />
      <circle cx="38" cy="95" r="4" fill="#16a34a" />
      <text x="155" y="85" text-anchor="middle" font-size="10" font-weight="bold" fill="#16a34a">直線兩端皆種：樹 = 間隔 + 1</text>
      <text x="155" y="105" text-anchor="middle" font-size="10" font-weight="bold" fill="#2563eb">封閉多邊形/圓形：樹數 = 間隔數</text>
      <text x="155" y="125" text-anchor="middle" font-size="10" font-weight="bold" fill="#ef4444">間隔數 = 總長度 ÷ 間距</text>
    </svg>`
  },

  'math-u9': {
    title: '雞兔同籠「假設法」差額分配圖',
    subtitle: '全部假設為雞 ➔ 少算的腳數即為兔數差額產生',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- 假設全部是 10 隻雞 (共 20 隻腳) -->
      <rect x="30" y="25" width="180" height="26" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" rx="4" />
      <text x="120" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#854d0e">全設為雞：10 隻 × 2 隻腳 = 20 隻腳</text>
      <!-- 實際有 28 隻腳，缺少 8 隻腳 -->
      <rect x="30" y="60" width="180" height="35" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" rx="4" />
      <text x="120" y="76" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">實際腳數 28 隻 ➔ 相差 28 - 20 = 8 隻腳</text>
      <text x="120" y="90" text-anchor="middle" font-size="10" fill="#b91c1c">每將 1 隻雞換成 1 隻兔，腳數增加 (4 - 2) = 2 隻</text>
      <!-- 結果公式 -->
      <text x="120" y="122" text-anchor="middle" font-size="12" font-weight="900" fill="#15803d">
        兔數 = 總差額 ÷ (4 - 2) = 8 ÷ 2 = 4 隻 (雞 = 10 - 4 = 6 隻)
      </text>
    </svg>`
  },

  'math-u10': {
    title: '等量公理天平兩側對稱運算',
    subtitle: '等號如天平：兩邊同加、同減、同乘、同除 (≠0)，天平依然平衡',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- 天平支點與橫梁 -->
      <polygon points="120,70 108,105 132,105" fill="#64748b" />
      <line x1="40" y1="65" x2="200" y2="65" stroke="#334155" stroke-width="3" />
      <!-- 左盤 x + 5 -->
      <line x1="55" y1="65" x2="55" y2="85" stroke="#94a3b8" stroke-width="1.5" />
      <rect x="30" y="85" width="50" height="20" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" rx="3" />
      <text x="55" y="99" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">x + 5</text>
      <!-- 右盤 12 -->
      <line x1="185" y1="65" x2="185" y2="85" stroke="#94a3b8" stroke-width="1.5" />
      <rect x="160" y="85" width="50" height="20" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="3" />
      <text x="185" y="99" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">12</text>
      <text x="120" y="35" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">
        x + 5 = 12 ➔ 兩邊同減 5 ➔ x = 7
      </text>
      <text x="120" y="128" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">
        移項法則口訣：移過去加變減、乘變除！
      </text>
    </svg>`
  },

  'math-u11': {
    title: '圓形百分率統計圖與圓心角換算',
    subtitle: '百分率 100% = 圓周 360° ｜ 1% = 3.6°',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- 圓心 (85, 70), 半徑 45 -->
      <path d="M 85 70 L 130 70 A 45 45 0 0 1 53 102 Z" fill="#3b82f6" stroke="#fff" stroke-width="1.5" />
      <path d="M 85 70 L 53 102 A 45 45 0 0 1 53 38 Z" fill="#10b981" stroke="#fff" stroke-width="1.5" />
      <path d="M 85 70 L 53 38 A 45 45 0 0 1 130 70 Z" fill="#f59e0b" stroke="#fff" stroke-width="1.5" />
      <!-- 圖例與公式 -->
      <g transform="translate(145, 30)" font-size="10" font-weight="bold">
        <text x="0" y="15" fill="#3b82f6">■ 項目A (40% ➔ 144°)</text>
        <text x="0" y="35" fill="#10b981">■ 項目B (30% ➔ 108°)</text>
        <text x="0" y="55" fill="#f59e0b">■ 項目C (30% ➔ 108°)</text>
      </g>
      <text x="120" y="125" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">
        換算公式：圓心角 = 360° × 百分率(%) ｜ 圓心角總和必為 360°
      </text>
    </svg>`
  },

  'math-u12': {
    title: '國中先修：數線正負數走步機',
    subtitle: '原點 0 為界：正數向右、負數向左 ｜ 減負即是加正',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <!-- 數線軸 -->
      <line x1="20" y1="65" x2="220" y2="65" stroke="#334155" stroke-width="2" marker-end="url(#arrow)" />
      <!-- 刻度 -3 到 +3 -->
      <line x1="35" y1="60" x2="35" y2="70" stroke="#475569" stroke-width="1.5" />
      <text x="35" y="85" text-anchor="middle" font-size="10" fill="#ef4444">-3</text>
      <line x1="63" y1="60" x2="63" y2="70" stroke="#475569" stroke-width="1.5" />
      <text x="63" y="85" text-anchor="middle" font-size="10" fill="#ef4444">-2</text>
      <line x1="91" y1="60" x2="91" y2="70" stroke="#475569" stroke-width="1.5" />
      <text x="91" y="85" text-anchor="middle" font-size="10" fill="#ef4444">-1</text>
      <line x1="119" y1="58" x2="119" y2="72" stroke="#0f172a" stroke-width="2" />
      <text x="119" y="85" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">0</text>
      <line x1="147" y1="60" x2="147" y2="70" stroke="#475569" stroke-width="1.5" />
      <text x="147" y="85" text-anchor="middle" font-size="10" fill="#2563eb">+1</text>
      <line x1="175" y1="60" x2="175" y2="70" stroke="#475569" stroke-width="1.5" />
      <text x="175" y="85" text-anchor="middle" font-size="10" fill="#2563eb">+2</text>
      <line x1="203" y1="60" x2="203" y2="70" stroke="#475569" stroke-width="1.5" />
      <text x="203" y="85" text-anchor="middle" font-size="10" fill="#2563eb">+3</text>
      <!-- 走步向量 -->
      <path d="M 63 50 Q 91 30 119 50" fill="none" stroke="#2563eb" stroke-width="2" />
      <text x="91" y="32" text-anchor="middle" font-size="10" font-weight="bold" fill="#2563eb">+2</text>
      <text x="120" y="112" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e293b">
        絕對值是「幾何距離」必為非負 ｜ 負數比大小：數字愈大其值反而愈小！
      </text>
    </svg>`
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🔬 自然科學領域 (10 單元圖解)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'sci-u1': {
    title: '臺灣常見冷暖鋒面與高低氣壓圖',
    subtitle: '冷鋒三角形朝東南推進 ｜ 冷氣團主動推擠暖氣團致降雨',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- 冷高壓 H -->
      <circle cx="50" cy="45" r="18" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
      <text x="50" y="51" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d4ed8">H</text>
      <text x="50" y="75" text-anchor="middle" font-size="9" fill="#1d4ed8">蒙古冷高壓</text>
      <!-- 暖低壓 L -->
      <circle cx="190" cy="95" r="18" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
      <text x="190" y="101" text-anchor="middle" font-size="14" font-weight="bold" fill="#b91c1c">L</text>
      <!-- 冷鋒曲線與藍三角 -->
      <path d="M 40 110 Q 115 80 190 45" fill="none" stroke="#2563eb" stroke-width="3" />
      <polygon points="75,93 87,88 80,78" fill="#2563eb" />
      <polygon points="120,73 132,68 125,58" fill="#2563eb" />
      <polygon points="160,57 172,52 165,42" fill="#2563eb" />
      <text x="120" y="125" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">
        冷鋒過境：氣溫驟降、氣壓回升、風向轉為偏北風且降豪雨
      </text>
    </svg>`
  },

  'sci-u2': {
    title: '聲音的三要素與振動頻率波形圖',
    subtitle: '振幅決定響度(音量分貝) ｜ 頻率決定音調(高低音頻赫茲)',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <!-- 音波1：高頻大振幅 (高音、大聲) -->
      <path d="M 25 40 Q 40 15 55 40 T 85 40 T 115 40" fill="none" stroke="#2563eb" stroke-width="2" />
      <text x="70" y="60" text-anchor="middle" font-size="9" font-weight="bold" fill="#2563eb">高音(波密)+大聲(波高)</text>
      <!-- 音波2：低頻小振幅 (低音、小聲) -->
      <path d="M 130 40 Q 155 30 180 40 T 230 40" fill="none" stroke="#10b981" stroke-width="2" />
      <text x="180" y="60" text-anchor="middle" font-size="9" font-weight="bold" fill="#10b981">低音(波疏)+小聲(波低)</text>
      <text x="120" y="90" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">
        發聲體短、細、緊、薄 ➔ 振動快 ➔ 頻率高 ➔ 音調高！
      </text>
      <text x="120" y="110" text-anchor="middle" font-size="9" fill="#64748b">
        音色由「波形」決定 (分辨不同樂器/人聲) ｜ 真空不能傳播聲音
      </text>
    </svg>`
  },

  'sci-u3': {
    title: '複式顯微鏡成像光學與載玻片移動',
    subtitle: '倒立放大像 (上下顛倒、左右相反) ｜ 物在何處，玻片就往何處移！',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- 視野圓圈 -->
      <circle cx="80" cy="70" r="45" fill="#f1f5f9" stroke="#334155" stroke-width="3" />
      <line x1="80" y1="25" x2="80" y2="115" stroke="#cbd5e1" stroke-dasharray="2,2" />
      <line x1="35" y1="70" x2="125" y2="70" stroke="#cbd5e1" stroke-dasharray="2,2" />
      <!-- 視野左上方出現字母 'p' (實為倒立像) -->
      <text x="60" y="55" font-size="28" font-family="serif" font-weight="bold" fill="#ef4444">d</text>
      <text x="80" y="125" text-anchor="middle" font-size="9" fill="#64748b">視野圓形範圍</text>
      <!-- 移動指引框 -->
      <g transform="translate(145, 30)" font-size="10">
        <text x="0" y="15" font-weight="bold" fill="#0f172a">目標移至中央：</text>
        <text x="0" y="35" font-weight="bold" fill="#dc2626">像偏左上 ➔ 玻片往左上移</text>
        <text x="0" y="55" fill="#2563eb">高倍鏡四字訣：</text>
        <text x="0" y="72" font-weight="bold" fill="#2563eb">【暗、小、少、大】</text>
        <text x="0" y="88" font-size="9" fill="#64748b">調粗調節輪 ➔ 換高倍用細調節輪</text>
      </g>
    </svg>`
  },

  'sci-u4': {
    title: '岩石三大類成因循環圖解',
    subtitle: '火成岩 (岩漿冷卻) ｜ 沉積岩 (層狀流水沉積) ｜ 變質岩 (高溫高壓)',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- 火成岩 -->
      <rect x="25" y="25" width="55" height="40" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5" rx="4" />
      <text x="52" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">火成岩</text>
      <text x="52" y="55" text-anchor="middle" font-size="8" fill="#7f1d1d">安山/玄武/花崗</text>
      <!-- 沉積岩 -->
      <rect x="160" y="25" width="55" height="40" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" rx="4" />
      <text x="187" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">沉積岩</text>
      <text x="187" y="55" text-anchor="middle" font-size="8" fill="#78350f">頁岩/砂岩/石灰</text>
      <!-- 變質岩 -->
      <rect x="92" y="85" width="55" height="40" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5" rx="4" />
      <text x="120" y="102" text-anchor="middle" font-size="10" font-weight="bold" fill="#3730a3">變質岩</text>
      <text x="120" y="115" text-anchor="middle" font-size="8" fill="#312e81">大理岩/板岩</text>
      <!-- 轉換箭頭文字 -->
      <path d="M 85 45 L 155 45" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />
      <path d="M 180 70 L 150 90" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />
      <path d="M 90 90 L 60 70" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)" />
      <text x="120" y="40" text-anchor="middle" font-size="8" fill="#64748b">風化沉積</text>
      <text x="120" y="132" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">石灰岩遇稀鹽酸會產生二氧化碳氣泡！</text>
    </svg>`
  },

  'sci-u5': {
    title: '電磁鐵安培右手定則與磁力變因',
    subtitle: '大拇指指 N 極 ｜ 四指隨線圈電流方向旋繞',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- 鐵釘鐵芯 -->
      <rect x="70" y="50" width="100" height="18" fill="#94a3b8" stroke="#475569" stroke-width="1.5" rx="2" />
      <!-- 電池符號 -->
      <line x1="100" y1="100" x2="100" y2="120" stroke="#3b82f6" stroke-width="4" />
      <line x1="110" y1="105" x2="110" y2="115" stroke="#3b82f6" stroke-width="2" />
      <text x="92" y="113" font-size="11" font-weight="bold" fill="#ef4444">+</text>
      <text x="116" y="113" font-size="11" font-weight="bold" fill="#3b82f6">-</text>
      <!-- 線圈 -->
      <ellipse cx="85" cy="59" rx="4" ry="14" fill="none" stroke="#f59e0b" stroke-width="2" />
      <ellipse cx="100" cy="59" rx="4" ry="14" fill="none" stroke="#f59e0b" stroke-width="2" />
      <ellipse cx="115" cy="59" rx="4" ry="14" fill="none" stroke="#f59e0b" stroke-width="2" />
      <ellipse cx="130" cy="59" rx="4" ry="14" fill="none" stroke="#f59e0b" stroke-width="2" />
      <ellipse cx="145" cy="59" rx="4" ry="14" fill="none" stroke="#f59e0b" stroke-width="2" />
      <!-- 磁極文字 -->
      <text x="50" y="63" font-size="13" font-weight="900" fill="#ef4444">N 極</text>
      <text x="180" y="63" font-size="13" font-weight="900" fill="#3b82f6">S 極</text>
      <text x="120" y="25" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">
        增強磁力大招：增加電池串聯數 ｜ 增加線圈匝數 ｜ 插入鐵芯
      </text>
      <text x="120" y="132" text-anchor="middle" font-size="9" fill="#64748b">
        改變磁極方法：僅能「調換電池正負極」或「改變線圈繞向」
      </text>
    </svg>`
  },

  'sci-u6': {
    title: '水溶液酸鹼指示劑變色階梯圖',
    subtitle: '石蕊試紙 ｜ 酚酞 (鹼紅) ｜ 廣用試紙 (紅橙黃綠藍靛紫)',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- pH 刻度彩條 -->
      <rect x="25" y="35" width="60" height="22" fill="#ef4444" rx="3" />
      <rect x="90" y="35" width="60" height="22" fill="#10b981" rx="3" />
      <rect x="155" y="35" width="60" height="22" fill="#3b82f6" rx="3" />
      <text x="55" y="50" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">酸性 (pH<7)</text>
      <text x="120" y="50" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">中性 (pH=7)</text>
      <text x="185" y="50" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">鹼性 (pH>7)</text>
      <!-- 指示劑說明文字 -->
      <g transform="translate(30, 75)" font-size="9.5" fill="#1e293b">
        <text x="0" y="10">● 石蕊試紙：酸性藍變紅 ｜ 中性不變 ｜ 鹼性紅變藍</text>
        <text x="0" y="26">● 酚酞試劑：酸性/中性無色 ｜ 遇強弱鹼性立刻變鮮紅色</text>
        <text x="0" y="42">● 電解質判斷：鹽酸、醋、食鹽水、小蘇打水可使燈泡發亮</text>
      </g>
    </svg>`
  },

  'sci-u7': {
    title: '槓桿天平力矩平衡與省力機械',
    subtitle: '力矩平衡：左施力 × 左臂長 = 右施力 × 右臂長',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <!-- 支點三角形 -->
      <polygon points="120,60 110,90 130,90" fill="#ef4444" />
      <text x="120" y="103" text-anchor="middle" font-size="9" font-weight="bold" fill="#ef4444">支點</text>
      <!-- 槓桿直尺 -->
      <rect x="30" y="55" width="180" height="8" fill="#475569" rx="2" />
      <!-- 左端 3格掛2物 (臂長3) -->
      <line x1="60" y1="63" x2="60" y2="80" stroke="#334155" stroke-width="2" />
      <rect x="50" y="80" width="20" height="16" fill="#3b82f6" rx="2" />
      <text x="60" y="92" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff">2kg</text>
      <!-- 右端 2格掛3物 (臂長2) -->
      <line x1="160" y1="63" x2="160" y2="80" stroke="#334155" stroke-width="2" />
      <rect x="150" y="80" width="20" height="16" fill="#10b981" rx="2" />
      <text x="160" y="92" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff">3kg</text>
      <text x="120" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">
        平衡：左(2 × 3) = 右(3 × 2) = 6 力矩完全平衡！
      </text>
      <text x="120" y="122" text-anchor="middle" font-size="9" fill="#475569">
        施力臂 > 抗力臂 ➔ 省力費時 (如開瓶器/拔釘器) ｜ 施力臂 < 抗力臂 ➔ 費力省時 (如鑷子/掃帚)
      </text>
    </svg>`
  },

  'sci-u8': {
    title: '熱的三種傳播途徑與保溫瓶構造',
    subtitle: '傳導(固體) ｜ 對流(液氣體) ｜ 輻射(真空波)',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- 保溫瓶示意剖面 -->
      <rect x="35" y="25" width="60" height="85" fill="#f1f5f9" stroke="#0284c7" stroke-width="2" rx="6" />
      <!-- 真空層夾層 -->
      <rect x="42" y="32" width="46" height="72" fill="#ffffff" stroke="#94a3b8" stroke-dasharray="2,2" />
      <text x="65" y="70" text-anchor="middle" font-size="9" font-weight="bold" fill="#0284c7">雙層真空</text>
      <!-- 對應防止途徑文字 -->
      <g transform="translate(110, 30)" font-size="9.5" fill="#1e293b">
        <text x="0" y="15" font-weight="bold" fill="#2563eb">1. 雙層真空夾層：</text>
        <text x="15" y="30" fill="#475569">阻斷「傳導」與「對流」</text>
        <text x="0" y="48" font-weight="bold" fill="#d97706">2. 內膽鍍銀鏡面：</text>
        <text x="15" y="63" fill="#475569">反射熱能，阻斷「輻射」</text>
        <text x="0" y="81" font-weight="bold" fill="#15803d">3. 絕緣塑膠杯蓋：</text>
        <text x="15" y="96" fill="#475569">防止熱空氣「對流」逸散</text>
      </g>
    </svg>`
  },

  'sci-u9': {
    title: '生物適應環境：保護色、警戒色與擬態',
    subtitle: '達爾文天擇說：適者生存，不適者淘汰',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <!-- 三卡片分類 -->
      <rect x="20" y="30" width="60" height="55" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="4" />
      <text x="50" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">保護色</text>
      <text x="50" y="70" text-anchor="middle" font-size="8" fill="#166534">融入背景(枯葉蝶)</text>

      <rect x="90" y="30" width="60" height="55" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" rx="4" />
      <text x="120" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">警戒色</text>
      <text x="120" y="70" text-anchor="middle" font-size="8" fill="#991b1b">鮮豔警告(箭毒蛙)</text>

      <rect x="160" y="30" width="60" height="55" fill="#fef3c7" stroke="#d97706" stroke-width="1.5" rx="4" />
      <text x="190" y="52" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">擬態</text>
      <text x="190" y="70" text-anchor="middle" font-size="8" fill="#78350f">模仿它物(竹節蟲)</text>

      <text x="120" y="112" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">
        環境產生選擇壓力 ➔ 具備生存優勢之個體遺傳基因擴大
      </text>
    </svg>`
  },

  'sci-u10': {
    title: '生態系能量流動與生物放大效應',
    subtitle: '能量逐層遞減 (約 10% 傳遞) ｜ 脂溶性重金屬毒素逐層放大！',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- 金字塔三階 -->
      <polygon points="120,20 180,110 60,110" fill="#f1f5f9" stroke="#0f172a" stroke-width="1.5" />
      <!-- 第一階：生產者 (基底) -->
      <polygon points="73,90 167,90 180,110 60,110" fill="#86efac" />
      <text x="120" y="103" text-anchor="middle" font-size="9" font-weight="bold" fill="#14532d">生產者 (綠色植物)</text>
      <!-- 第二階：初級消費者 -->
      <polygon points="90,65 150,65 167,90 73,90" fill="#fed7aa" />
      <text x="120" y="80" text-anchor="middle" font-size="9" font-weight="bold" fill="#7c2d12">草食性消費者</text>
      <!-- 第三階：高級消費者 (頂層) -->
      <polygon points="120,20 150,65 90,65" fill="#fca5a5" />
      <text x="120" y="50" text-anchor="middle" font-size="9" font-weight="bold" fill="#7f1d1d">頂級肉食</text>
      <!-- 左右箭頭指引 -->
      <text x="210" y="45" font-size="8" font-weight="bold" fill="#dc2626">毒素濃度 ↑</text>
      <text x="210" y="105" font-size="8" font-weight="bold" fill="#16a34a">總能量 ↑</text>
      <text x="120" y="128" text-anchor="middle" font-size="9" font-weight="bold" fill="#334155">
        外來種破壞生態平衡：缺乏天敵制衡、迅速掠奪原生種食物與棲地
      </text>
    </svg>`
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 📖 國語文領域 (8 單元圖解)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'man-u1': {
    title: '形近字與多音破音字辨析思維圖',
    subtitle: '辨形看部首偏旁 ｜ 辨音隨字義詞性轉換',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <rect x="25" y="25" width="85" height="40" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5" rx="4" />
      <text x="67" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#3730a3">【載】zài 四聲</text>
      <text x="67" y="56" text-anchor="middle" font-size="9" fill="#4338ca">裝載、怨聲載道</text>

      <rect x="130" y="25" width="85" height="40" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="4" />
      <text x="172" y="42" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">【載】zǎi 三聲</text>
      <text x="172" y="56" text-anchor="middle" font-size="9" fill="#166534">一年半載、刊載</text>

      <text x="120" y="90" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">
        形近字辨析：燥 (火乾) ｜ 躁 (足急) ｜ 噪 (口鬧) ｜ 澡 (水洗)
      </text>
      <text x="120" y="112" text-anchor="middle" font-size="9" fill="#64748b">
        審題避雷：部首表意，由字意推求正確偏旁與發音
      </text>
    </svg>`
  },

  'man-u2': {
    title: '段考四大修辭手法思維架構圖',
    subtitle: '映襯(對立反差) ｜ 轉化(擬人物化) ｜ 借代(特徵替代) ｜ 設問(自問自答)',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- 四象限方塊 -->
      <rect x="20" y="20" width="95" height="45" fill="#fef3c7" stroke="#d97706" rx="4" />
      <text x="67" y="38" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">映襯修辭</text>
      <text x="67" y="53" text-anchor="middle" font-size="8" fill="#78350f">敗草裡的鮮花</text>

      <rect x="125" y="20" width="95" height="45" fill="#dbeafe" stroke="#2563eb" rx="4" />
      <text x="172" y="38" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">轉化(擬人)</text>
      <text x="172" y="53" text-anchor="middle" font-size="8" fill="#1e3a8a">風在林間低語</text>

      <rect x="20" y="75" width="95" height="45" fill="#fee2e2" stroke="#dc2626" rx="4" />
      <text x="67" y="93" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">借代修辭</text>
      <text x="67" y="108" text-anchor="middle" font-size="8" fill="#7f1d1d">白衣天使=護士</text>

      <rect x="125" y="75" width="95" height="45" fill="#dcfce7" stroke="#16a34a" rx="4" />
      <text x="172" y="93" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">設問(提問/反詰)</text>
      <text x="172" y="108" text-anchor="middle" font-size="8" fill="#14532d">誰說我不努力？(激問)</text>
    </svg>`
  },

  'man-u3': {
    title: '成語感情色彩與語境對照軸線',
    subtitle: '褒義詞(讚美肯定) ｜ 中性詞 ｜ 貶義詞(批評否定)',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <line x1="25" y1="50" x2="215" y2="50" stroke="#475569" stroke-width="2" marker-end="url(#arrow)" />
      <!-- 刻度與端點 -->
      <circle cx="35" cy="50" r="4" fill="#10b981" />
      <text x="35" y="40" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">褒義詞 (+)</text>
      <text x="35" y="70" text-anchor="middle" font-size="8" fill="#166534">首當其衝 ❌</text>
      <text x="35" y="85" text-anchor="middle" font-size="8" fill="#15803d">正解：當仁不讓</text>

      <circle cx="120" cy="50" r="4" fill="#64748b" />
      <text x="120" y="40" text-anchor="middle" font-size="10" font-weight="bold" fill="#475569">中性詞</text>
      <text x="120" y="70" text-anchor="middle" font-size="8" fill="#334155">侃侃而談</text>

      <circle cx="205" cy="50" r="4" fill="#ef4444" />
      <text x="205" y="40" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">貶義詞 (-)</text>
      <text x="205" y="70" text-anchor="middle" font-size="8" fill="#b91c1c">趨之若鶩 (盲目追逐)</text>
      <text x="205" y="85" text-anchor="middle" font-size="8" fill="#b91c1c">不可用於正面好行為！</text>

      <text x="120" y="115" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">
        高頻陷阱：「首當其衝」指最先受到災害衝擊，非帶頭領先！
      </text>
    </svg>`
  },

  'man-u4': {
    title: '白話文閱讀理解與篇章結構圖',
    subtitle: '掌握文章主旨脈絡：起 (引出) ➔ 承 (開展) ➔ 轉 (轉折) ➔ 合 (總結昇華)',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <g transform="translate(20, 35)">
        <rect x="0" y="0" width="45" height="35" fill="#dbeafe" stroke="#2563eb" rx="3" />
        <text x="22" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">起</text>
        <text x="22" y="28" text-anchor="middle" font-size="7" fill="#1e3a8a">開門見山</text>

        <rect x="52" y="0" width="45" height="35" fill="#e0e7ff" stroke="#4f46e5" rx="3" />
        <text x="74" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#3730a3">承</text>
        <text x="74" y="28" text-anchor="middle" font-size="7" fill="#312e81">舉例記敘</text>

        <rect x="104" y="0" width="45" height="35" fill="#fee2e2" stroke="#dc2626" rx="3" />
        <text x="126" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">轉</text>
        <text x="126" y="28" text-anchor="middle" font-size="7" fill="#7f1d1d">情節轉折</text>

        <rect x="156" y="0" width="45" height="35" fill="#dcfce7" stroke="#16a34a" rx="3" />
        <text x="178" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">合</text>
        <text x="178" y="28" text-anchor="middle" font-size="7" fill="#14532d">點明主旨</text>
      </g>
      <text x="120" y="95" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">
        主旨推論破題眼：留意各段首末句、轉折詞（然而、卻）後之論述！
      </text>
      <text x="120" y="115" text-anchor="middle" font-size="9" fill="#64748b">
        審題關鍵：扣緊「作者想傳達的人生哲理」，而非僅看表面字面敘事
      </text>
    </svg>`
  },

  'man-u5': {
    title: '文言經典虛詞與寓言主旨解析',
    subtitle: '之 (代詞/助詞/動詞) ｜ 寓言故事本質：假託故事寄寓為人處世大道',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <rect x="25" y="20" width="190" height="50" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" rx="4" />
      <text x="35" y="38" font-size="10" font-weight="bold" fill="#1e293b">文言「之」字三大考點：</text>
      <text x="45" y="52" font-size="9" fill="#475569">① 代詞：指代人事物（如「學而時習之」之=它）</text>
      <text x="45" y="64" font-size="9" fill="#475569">② 助詞：的（如「知音之樂」） ｜ ③ 動詞：前往</text>
      <text x="120" y="95" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">
        寓言精華：揠苗助長 (欲速則不達) ｜ 濫竽充數 (無真才實學)
      </text>
      <text x="120" y="115" text-anchor="middle" font-size="9" fill="#16a34a">
        文言文破題法：抓主詞、替換現代字詞、還原倒裝句型
      </text>
    </svg>`
  },

  'man-u6': {
    title: '常考標點符號階梯與語病修正指南',
    subtitle: '破折號(聲音延長/語意轉變) ｜ 夾注號(註解補充) ｜ 消除贅字語病',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <g transform="translate(25, 20)" font-size="9.5" fill="#1e293b">
        <text x="0" y="15" font-weight="bold" fill="#2563eb">● 破折號 (——)：</text>
        <text x="10" y="30" fill="#475569">佔兩格！用於聲音延續或話題突然轉變 (如：嗚——火車開了)</text>
        <text x="0" y="48" font-weight="bold" fill="#15803d">● 夾注號 ( ( ) 或 —— —— )：</text>
        <text x="10" y="63" fill="#475569">用於行文中說明、註解或補充材料，朗讀時不念出</text>
        <text x="0" y="81" font-weight="bold" fill="#dc2626">● 常見語病陷阱：贅字重複</text>
        <text x="10" y="96" fill="#991b1b">❌ 凱旋「而歸」(凱旋本身已含歸意，重複！)</text>
      </g>
    </svg>`
  },

  'man-u7': {
    title: '應用文信封格式與啟封詞稱謂天平',
    subtitle: '中行受信人 + 稱謂 + 啟封詞 ｜ 給長輩用「安啟/福啟」絕不可用「敬啟」！',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- 直式信封框 -->
      <rect x="70" y="15" width="100" height="110" fill="#fff" stroke="#475569" stroke-width="1.5" />
      <!-- 郵票 -->
      <rect x="150" y="20" width="14" height="18" fill="#fca5a5" stroke="#ef4444" />
      <!-- 右行：收件人地址 -->
      <line x1="140" y1="25" x2="140" y2="105" stroke="#cbd5e1" stroke-dasharray="2,2" />
      <!-- 中行：收件人姓名 + 稱謂 + 啟封詞 -->
      <rect x="105" y="25" width="22" height="90" fill="#f1f5f9" stroke="#94a3b8" />
      <text x="116" y="45" text-anchor="middle" font-size="8" font-weight="bold">王老師</text>
      <text x="116" y="65" text-anchor="middle" font-size="8" font-weight="bold">道啟</text>
      <!-- 左行：寄件人地址與姓名 -->
      <line x1="85" y1="45" x2="85" y2="115" stroke="#cbd5e1" stroke-dasharray="2,2" />
      <text x="85" y="120" text-anchor="middle" font-size="6">緘</text>
      <!-- 左右提示文字 -->
      <text x="35" y="70" text-anchor="middle" font-size="8" font-weight="bold" fill="#dc2626">敬啟 ❌</text>
      <text x="35" y="85" text-anchor="middle" font-size="7" fill="#b91c1c">(敬啟=請恭敬開啟，對長輩不敬)</text>
      <text x="205" y="70" text-anchor="middle" font-size="8" font-weight="bold" fill="#15803d">長輩用福啟</text>
      <text x="205" y="85" text-anchor="middle" font-size="7" fill="#166534">平輩用台啟</text>
    </svg>`
  },

  'man-u8': {
    title: '六書造字法則演進架構圖',
    subtitle: '四體 (造字：象形/指事/會意/形聲) ＋ 二用 (用字：轉注/假借)',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <g transform="translate(15, 20)">
        <rect x="0" y="0" width="48" height="45" fill="#fef3c7" stroke="#d97706" rx="4" />
        <text x="24" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">象形(獨體)</text>
        <text x="24" y="32" text-anchor="middle" font-size="8" fill="#78350f">畫成其物(日/月)</text>

        <rect x="54" y="0" width="48" height="45" fill="#dbeafe" stroke="#2563eb" rx="4" />
        <text x="78" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">指事(獨體)</text>
        <text x="78" y="32" text-anchor="middle" font-size="8" fill="#1e3a8a">抽象標記(上/下)</text>

        <rect x="108" y="0" width="48" height="45" fill="#dcfce7" stroke="#16a34a" rx="4" />
        <text x="132" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#166534">會意(合體)</text>
        <text x="132" y="32" text-anchor="middle" font-size="8" fill="#14532d">比類合意(休/武)</text>

        <rect x="162" y="0" width="48" height="45" fill="#fee2e2" stroke="#dc2626" rx="4" />
        <text x="186" y="18" text-anchor="middle" font-size="9" font-weight="bold" fill="#991b1b">形聲(合體)</text>
        <text x="186" y="32" text-anchor="middle" font-size="8" fill="#7f1d1d">半形半聲(河/湖)</text>
      </g>
      <text x="120" y="90" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">
        漢字比例最高者為「形聲字」（佔全漢字 80% 以上！）
      </text>
      <text x="120" y="112" text-anchor="middle" font-size="9" fill="#475569">
        歌訣：畫成其物象形看，標點指事實難辨；比類合誼會心笑，半形半聲形聲見！
      </text>
    </svg>`
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🌍 社會領域 (8 單元圖解)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'soc-u1': {
    title: '臺灣地形等高線與三大降水類型',
    subtitle: '地形雨 (迎風坡多雨、背風坡乾燥) ｜ 鋒面雨 (梅雨) ｜ 對流雨 (午後雷陣雨)',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <!-- 山脈輪廓 -->
      <polygon points="30,105 110,35 190,105" fill="#86efac" stroke="#16a34a" stroke-width="2" />
      <!-- 迎風坡暖濕氣流上升 -->
      <path d="M 20 95 Q 60 70 85 55" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrow)" />
      <!-- 雲朵與雨點 (迎風坡) -->
      <ellipse cx="90" cy="40" rx="18" ry="10" fill="#cbd5e1" />
      <line x1="80" y1="53" x2="75" y2="65" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="2,2" />
      <line x1="90" y1="53" x2="85" y2="65" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="2,2" />
      <text x="50" y="120" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">迎風坡 (多雨)</text>
      <!-- 背風坡乾燥下沉氣流 (焚風) -->
      <path d="M 130 50 Q 155 70 180 95" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow)" />
      <text x="170" y="120" text-anchor="middle" font-size="9" font-weight="bold" fill="#b91c1c">背風坡 (乾燥/焚風)</text>
    </svg>`
  },

  'soc-u2': {
    title: '臺灣近現代歷史五大時期時間軸',
    subtitle: '原住民 ➔ 荷西 ➔ 鄭氏 ➔ 清領 ➔ 日治 ➔ 中華民國戰後民主化',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <line x1="20" y1="65" x2="220" y2="65" stroke="#475569" stroke-width="2.5" marker-end="url(#arrow)" />
      <!-- 各時期節點 -->
      <circle cx="35" cy="65" r="4" fill="#3b82f6" />
      <text x="35" y="55" text-anchor="middle" font-size="8" font-weight="bold">荷西</text>
      <text x="35" y="80" text-anchor="middle" font-size="7" fill="#64748b">1624</text>

      <circle cx="75" cy="65" r="4" fill="#10b981" />
      <text x="75" y="55" text-anchor="middle" font-size="8" font-weight="bold">鄭氏</text>
      <text x="75" y="80" text-anchor="middle" font-size="7" fill="#64748b">1662</text>

      <circle cx="115" cy="65" r="4" fill="#f59e0b" />
      <text x="115" y="55" text-anchor="middle" font-size="8" font-weight="bold">清領</text>
      <text x="115" y="80" text-anchor="middle" font-size="7" fill="#64748b">1683</text>

      <circle cx="155" cy="65" r="4" fill="#dc2626" />
      <text x="155" y="55" text-anchor="middle" font-size="8" font-weight="bold">日治</text>
      <text x="155" y="80" text-anchor="middle" font-size="7" fill="#64748b">1895</text>

      <circle cx="195" cy="65" r="4" fill="#8b5cf6" />
      <text x="195" y="55" text-anchor="middle" font-size="8" font-weight="bold">民主化</text>
      <text x="195" y="80" text-anchor="middle" font-size="7" fill="#64748b">1945~</text>

      <text x="120" y="110" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e293b">
        關鍵轉折：1987 解除戒嚴 ｜ 1996 首次總統直選 ｜ 民主憲政里程碑
      </text>
    </svg>`
  },

  'soc-u3': {
    title: '市場供需曲線與均衡價格模型',
    subtitle: '需求法則 (價跌量增) ｜ 供給法則 (價漲量增) ｜ 交點為市場均衡價格',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <!-- 坐標軸 -->
      <line x1="45" y1="110" x2="195" y2="110" stroke="#334155" stroke-width="2" marker-end="url(#arrow)" />
      <line x1="45" y1="110" x2="45" y2="25" stroke="#334155" stroke-width="2" marker-end="url(#arrow)" />
      <text x="195" y="125" font-size="9" font-weight="bold" fill="#334155">數量 (Q)</text>
      <text x="35" y="25" text-anchor="end" font-size="9" font-weight="bold" fill="#334155">價格 (P)</text>
      <!-- 需求線 D (向右下傾斜) -->
      <line x1="55" y1="35" x2="175" y2="105" stroke="#2563eb" stroke-width="2.5" />
      <text x="180" y="105" font-size="10" font-weight="bold" fill="#2563eb">需求線 D</text>
      <!-- 供給線 S (向右上傾斜) -->
      <line x1="55" y1="105" x2="175" y2="35" stroke="#dc2626" stroke-width="2.5" />
      <text x="180" y="35" font-size="10" font-weight="bold" fill="#dc2626">供給線 S</text>
      <!-- 均衡交點 E -->
      <circle cx="115" cy="70" r="4" fill="#16a34a" />
      <text x="115" y="60" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">均衡價格 E</text>
    </svg>`
  },

  'soc-u4': {
    title: '中央政府五院相互制衡架構圖',
    subtitle: '行政院(政令施政) ｜ 立法院(立法預算) ｜ 司法院(釋憲裁判) ｜ 考試監察',
    svg: `<svg viewBox="0 0 240 140" width="100%" height="100%">
      <rect width="240" height="140" fill="#f8fafc" rx="8" />
      <rect x="90" y="10" width="60" height="22" fill="#1e293b" rx="3" />
      <text x="120" y="25" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">總 統</text>

      <rect x="15" y="50" width="55" height="25" fill="#3b82f6" rx="3" />
      <text x="42" y="66" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff">行政院</text>

      <rect x="92" y="50" width="55" height="25" fill="#ef4444" rx="3" />
      <text x="120" y="66" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff">立法院</text>

      <rect x="170" y="50" width="55" height="25" fill="#10b981" rx="3" />
      <text x="197" y="66" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff">司法院</text>

      <!-- 制衡箭頭 -->
      <line x1="70" y1="58" x2="92" y2="58" stroke="#64748b" stroke-width="1.5" />
      <text x="81" y="53" text-anchor="middle" font-size="7" fill="#64748b">覆議</text>
      <line x1="92" y1="68" x2="70" y2="68" stroke="#64748b" stroke-width="1.5" />
      <text x="81" y="78" text-anchor="middle" font-size="7" fill="#64748b">質詢</text>

      <rect x="45" y="95" width="65" height="22" fill="#8b5cf6" rx="3" />
      <text x="77" y="110" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff">考試院(任官)</text>

      <rect x="130" y="95" width="65" height="22" fill="#f59e0b" rx="3" />
      <text x="162" y="110" text-anchor="middle" font-size="9" font-weight="bold" fill="#fff">監察院(彈劾)</text>
    </svg>`
  },

  'soc-u5': {
    title: '少年保護事件與法律權益階梯',
    subtitle: '兒少法保護 ｜ 12~18歲非行少年處置 ｜ 審前調查與保護處分',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <rect x="25" y="25" width="90" height="40" fill="#fee2e2" stroke="#dc2626" rx="4" />
      <text x="70" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">保護處分 (少年法庭)</text>
      <text x="70" y="56" text-anchor="middle" font-size="8" fill="#7f1d1d">訓誡、假日輔導、保護管束</text>

      <rect x="125" y="25" width="90" height="40" fill="#dcfce7" stroke="#16a34a" rx="4" />
      <text x="170" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">刑事處分 (重大重罪)</text>
      <text x="170" y="56" text-anchor="middle" font-size="8" fill="#14532d">五年以上重罪始移送檢察官</text>

      <text x="120" y="90" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">
        兒童權利公約 (CRC) 四大核心原則：
      </text>
      <text x="120" y="110" text-anchor="middle" font-size="9" fill="#2563eb">
        禁止歧視 ｜ 兒童最佳利益 ｜ 生存與發展權 ｜ 尊重兒童意見
      </text>
    </svg>`
  },

  'soc-u6': {
    title: '全球化與七大洲四大洋經緯座標圖',
    subtitle: '赤道為緯度 0° ｜ 本初子午線為經度 0° ｜ 經度定時差、緯度定氣候',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <!-- 地球經緯網格圓 -->
      <circle cx="120" cy="65" r="45" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" />
      <line x1="75" y1="65" x2="165" y2="65" stroke="#ef4444" stroke-width="1.5" />
      <text x="170" y="68" font-size="8" font-weight="bold" fill="#ef4444">赤道 0°</text>
      <line x1="120" y1="20" x2="120" y2="110" stroke="#0284c7" stroke-width="1.5" />
      <text x="120" y="15" text-anchor="middle" font-size="8" font-weight="bold" fill="#0284c7">本初子午線</text>
      <!-- 經緯線弧 -->
      <ellipse cx="120" cy="65" rx="25" ry="45" fill="none" stroke="#93c5fd" stroke-dasharray="2,2" />
      <text x="120" y="125" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e293b">
        全球化挑戰：貧富差距擴大、環境破壞跨國化、在地文化同質化危機
      </text>
    </svg>`
  },

  'soc-u7': {
    title: '聯合國 17 項 SDGs 永續發展核心架構',
    subtitle: '經濟成長 ｜ 社會包容 ｜ 環境永續三位一體',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <!-- SDGs 三支柱圓形重疊 -->
      <circle cx="85" cy="55" r="32" fill="#60a5fa" fill-opacity="0.3" stroke="#2563eb" stroke-width="1.5" />
      <text x="85" y="58" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">社會包容</text>

      <circle cx="155" cy="55" r="32" fill="#fde047" fill-opacity="0.3" stroke="#ca8a04" stroke-width="1.5" />
      <text x="155" y="58" text-anchor="middle" font-size="9" font-weight="bold" fill="#854d0e">經濟成長</text>

      <circle cx="120" cy="85" r="32" fill="#86efac" fill-opacity="0.3" stroke="#16a34a" stroke-width="1.5" />
      <text x="120" y="95" text-anchor="middle" font-size="9" font-weight="bold" fill="#14532d">環境保護</text>

      <text x="120" y="25" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">
        永續發展：滿足當代需求，且不危及後代子孫福祉
      </text>
    </svg>`
  },

  'soc-u8': {
    title: '數位公民素養與假訊息查核三步驟',
    subtitle: '查核出處 ｜ 交叉驗證 ｜ 停看聽不轉傳 ｜ 資訊同溫層防範',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <g transform="translate(20, 25)">
        <rect x="0" y="0" width="60" height="50" fill="#fee2e2" stroke="#dc2626" rx="4" />
        <text x="30" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">1. 存疑</text>
        <text x="30" y="35" text-anchor="middle" font-size="7" fill="#7f1d1d">聳動標題先停步</text>

        <rect x="70" y="0" width="60" height="50" fill="#fef3c7" stroke="#d97706" rx="4" />
        <text x="100" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">2. 查證</text>
        <text x="100" y="35" text-anchor="middle" font-size="7" fill="#78350f">官方專家平台比對</text>

        <rect x="140" y="0" width="60" height="50" fill="#dcfce7" stroke="#16a34a" rx="4" />
        <text x="170" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">3. 不傳</text>
        <text x="170" y="35" text-anchor="middle" font-size="7" fill="#14532d">未經證實不轉傳</text>
      </g>
      <text x="120" y="100" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">
        數位足跡：凡走過必留下痕跡，保護個資並尊重智慧財產權！
      </text>
    </svg>`
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🇬🇧 英語文領域 (8 單元圖解)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'eng-u1': {
    title: '自然拼讀 Phonics 母音長短音發音對照圖',
    subtitle: 'Short Vowels (短母音) vs Long Vowels (Magic e 長母音)',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <g transform="translate(25, 20)">
        <rect x="0" y="0" width="90" height="55" fill="#dbeafe" stroke="#2563eb" rx="4" />
        <text x="45" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">Short Vowels</text>
        <text x="45" y="34" text-anchor="middle" font-size="9" fill="#1e3a8a">c-a-t [æ] ｜ h-o-p [ɑ]</text>
        <text x="45" y="48" text-anchor="middle" font-size="9" fill="#1e3a8a">p-i-n [ɪ] ｜ c-u-t [ʌ]</text>

        <rect x="100" y="0" width="90" height="55" fill="#fef3c7" stroke="#d97706" rx="4" />
        <text x="145" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">Magic "e" Long</text>
        <text x="145" y="34" text-anchor="middle" font-size="9" fill="#78350f">c-a-k-e [e] ｜ h-o-p-e [o]</text>
        <text x="145" y="48" text-anchor="middle" font-size="9" fill="#78350f">p-i-n-e [aɪ] ｜ c-u-t-e [ju]</text>
      </g>
      <text x="120" y="100" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">
        母音字母發自身原音：a, e, i, o, u，字尾 e 不發音促使母音拉長！
      </text>
    </svg>`
  },

  'eng-u2': {
    title: '問路與方位介系詞地圖 (Town Navigation)',
    subtitle: 'between A and B ｜ next to ｜ across from ｜ turn right/left',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <!-- 馬路 -->
      <rect x="20" y="50" width="200" height="30" fill="#cbd5e1" />
      <!-- 建築物 -->
      <rect x="25" y="15" width="55" height="28" fill="#93c5fd" rx="3" />
      <text x="52" y="32" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">Bank</text>

      <rect x="90" y="15" width="60" height="28" fill="#86efac" rx="3" />
      <text x="120" y="32" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">Library</text>

      <rect x="160" y="15" width="55" height="28" fill="#fde047" rx="3" />
      <text x="187" y="32" text-anchor="middle" font-size="9" font-weight="bold" fill="#854d0e">Park</text>

      <text x="120" y="100" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0f172a">
        The library is between the bank and the park.
      </text>
      <text x="120" y="115" text-anchor="middle" font-size="8.5" fill="#64748b">
        Go straight for two blocks and turn left at 1st Avenue.
      </text>
    </svg>`
  },

  'eng-u3': {
    title: '現在進行式時態結構圖 (Present Continuous)',
    subtitle: 'S + be (am/is/are) + V-ing ｜ 正在發生的動作',
    svg: `<svg viewBox="0 0 240 120" width="100%" height="100%">
      <rect width="240" height="120" fill="#f8fafc" rx="8" />
      <!-- 公式框 -->
      <rect x="30" y="25" width="180" height="35" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" rx="4" />
      <text x="120" y="47" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">
        Subject + be (am/is/are) + V-ing
      </text>
      <!-- 動詞變化規則 -->
      <text x="120" y="80" text-anchor="middle" font-size="9.5" fill="#334155">
        直接+ing: play ➔ playing ｜ 去e+ing: dance ➔ dancing
      </text>
      <text x="120" y="98" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#dc2626">
        短母音+子音重複字尾: swim ➔ swimming, run ➔ running
      </text>
    </svg>`
  },

  'eng-u4': {
    title: '過去式規則與不規則動詞時間軸 (Past Tense)',
    subtitle: '時間副詞標誌：yesterday, last night, ... ago ｜ 不規則變化必背',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <line x1="20" y1="50" x2="220" y2="50" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)" />
      <!-- 過去節點 -->
      <circle cx="70" cy="50" r="5" fill="#ef4444" />
      <text x="70" y="38" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">Past (過去)</text>
      <text x="70" y="70" text-anchor="middle" font-size="8" fill="#475569">yesterday / last...</text>
      <!-- 現在節點 -->
      <circle cx="160" cy="50" r="5" fill="#10b981" />
      <text x="160" y="38" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">Now (現在)</text>
      <!-- 不規則對照 -->
      <text x="120" y="95" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1e293b">
        go ➔ went ｜ see ➔ saw ｜ have ➔ had ｜ buy ➔ bought
      </text>
      <text x="120" y="112" text-anchor="middle" font-size="9" fill="#dc2626">
        助動詞 Did 出現時，主要動詞一律打回「原形」：Did you go? (不是 went!)
      </text>
    </svg>`
  },

  'eng-u5': {
    title: '未來式表達：be going to vs will',
    subtitle: 'be going to (有預先計畫打算) ｜ will (當下決定或客觀預測)',
    svg: `<svg viewBox="0 0 240 120" width="100%" height="100%">
      <rect width="240" height="120" fill="#f8fafc" rx="8" />
      <rect x="25" y="20" width="90" height="45" fill="#dcfce7" stroke="#16a34a" rx="4" />
      <text x="70" y="38" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">be going to + V</text>
      <text x="70" y="52" text-anchor="middle" font-size="8" fill="#14532d">預定計畫 (I'm going to travel)</text>

      <rect x="125" y="20" width="90" height="45" fill="#dbeafe" stroke="#2563eb" rx="4" />
      <text x="170" y="38" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">will + V (原形)</text>
      <text x="170" y="52" text-anchor="middle" font-size="8" fill="#1e3a8a">瞬間決策/預言 (I will help you)</text>

      <text x="120" y="90" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0f172a">
        未來時間副詞：tomorrow, next week, soon, in the future
      </text>
      <text x="120" y="108" text-anchor="middle" font-size="8.5" fill="#dc2626">
        避坑：will 之後不可再加 to，直接接動詞原形！
      </text>
    </svg>`
  },

  'eng-u6': {
    title: '形容詞與副詞比較級、最高級階梯圖',
    subtitle: '原級 ➔ 比較級 (-er / more) ➔ 最高級 (the -est / the most)',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <!-- 三階階梯 -->
      <rect x="30" y="70" width="55" height="35" fill="#e2e8f0" stroke="#64748b" rx="2" />
      <text x="57" y="92" text-anchor="middle" font-size="10" font-weight="bold">tall</text>

      <rect x="90" y="50" width="55" height="55" fill="#93c5fd" stroke="#2563eb" rx="2" />
      <text x="117" y="75" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">taller</text>
      <text x="117" y="92" text-anchor="middle" font-size="7" fill="#1e3a8a">(+ than)</text>

      <rect x="150" y="30" width="60" height="75" fill="#fca5a5" stroke="#dc2626" rx="2" />
      <text x="180" y="60" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">the tallest</text>
      <text x="180" y="77" text-anchor="middle" font-size="7" fill="#7f1d1d">(+ of all / in...)</text>

      <text x="120" y="120" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">
        不規則變化：good ➔ better ➔ best ｜ bad ➔ worse ➔ worst
      </text>
    </svg>`
  },

  'eng-u7': {
    title: '閱讀理解 5W1H 脈絡思維導圖',
    subtitle: 'Who, What, Where, When, Why, How 全方位掌握短文主旨',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <!-- 中心大圓 -->
      <circle cx="120" cy="65" r="28" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
      <text x="120" y="68" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Main Idea</text>
      <!-- 周圍 6 個氣泡 -->
      <circle cx="50" cy="35" r="14" fill="#fee2e2" />
      <text x="50" y="39" text-anchor="middle" font-size="8" font-weight="bold" fill="#991b1b">Who</text>

      <circle cx="120" cy="22" r="14" fill="#fef3c7" />
      <text x="120" y="26" text-anchor="middle" font-size="8" font-weight="bold" fill="#92400e">What</text>

      <circle cx="190" cy="35" r="14" fill="#dcfce7" />
      <text x="190" y="39" text-anchor="middle" font-size="8" font-weight="bold" fill="#166534">Where</text>

      <circle cx="50" cy="95" r="14" fill="#ede9fe" />
      <text x="50" y="99" text-anchor="middle" font-size="8" font-weight="bold" fill="#6d28d9">When</text>

      <circle cx="120" cy="108" r="14" fill="#e0e7ff" />
      <text x="120" y="112" text-anchor="middle" font-size="8" font-weight="bold" fill="#3730a3">Why</text>

      <circle cx="190" cy="95" r="14" fill="#fed7aa" />
      <text x="190" y="99" text-anchor="middle" font-size="8" font-weight="bold" fill="#9a3412">How</text>
    </svg>`
  },

  'eng-u8': {
    title: '國中先修：五大基本句型結構解析',
    subtitle: 'S+V ｜ S+V+O ｜ S+V+C ｜ S+V+IO+DO ｜ S+V+O+OC',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <g transform="translate(20, 15)" font-size="9" fill="#1e293b">
        <text x="0" y="15" font-weight="bold">1. S + V (完全不及物)：</text>
        <text x="120" y="15" fill="#475569">Birds fly. (鳥飛)</text>
        <text x="0" y="35" font-weight="bold">2. S + V + O (單及物)：</text>
        <text x="120" y="35" fill="#475569">I like music. (我喜歡音樂)</text>
        <text x="0" y="55" font-weight="bold">3. S + V + C (不完全不及物)：</text>
        <text x="120" y="55" fill="#475569">She is happy. (她快樂)</text>
        <text x="0" y="75" font-weight="bold">4. S + V + IO + DO (雙賓語)：</text>
        <text x="120" y="75" fill="#475569">He gave me a book.</text>
        <text x="0" y="95" font-weight="bold">5. S + V + O + OC (複合及物)：</text>
        <text x="120" y="95" fill="#475569">We make him happy.</text>
      </g>
    </svg>`
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🎨 藝術領域 (6 單元圖解)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'art-u1': {
    title: '12 色相環與三原色互補對比色圖',
    subtitle: '紅黃藍三原色 ｜ 對角 180° 為互補色 (如紅配綠、黃配紫、藍配橙)',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <circle cx="80" cy="65" r="40" fill="none" stroke="#e2e8f0" stroke-width="12" />
      <circle cx="80" cy="25" r="7" fill="#ef4444" />
      <circle cx="45" cy="85" r="7" fill="#3b82f6" />
      <circle cx="115" cy="85" r="7" fill="#eab308" />
      <circle cx="80" cy="105" r="7" fill="#10b981" />
      <line x1="80" y1="32" x2="80" y2="98" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2" />
      <g transform="translate(135, 30)" font-size="9" fill="#1e293b">
        <text x="0" y="15" font-weight="bold" fill="#ef4444">■ 紅色 (Red)</text>
        <text x="0" y="32" font-weight="bold" fill="#3b82f6">■ 藍色 (Blue)</text>
        <text x="0" y="49" font-weight="bold" fill="#ca8a04">■ 黃色 (Yellow)</text>
        <text x="0" y="70" font-weight="bold" fill="#15803d">互補色：紅配綠</text>
      </g>
      <text x="120" y="120" text-anchor="middle" font-size="9" fill="#475569">
        色彩三要素：色相 (名稱) ｜ 明度 (明暗黑白) ｜ 彩度 (鮮豔純度)
      </text>
    </svg>`
  },

  'art-u2': {
    title: '音樂五線譜拍號與音符時值樹',
    subtitle: '全音符(4拍) ➔ 二分音符(2拍) ➔ 四分音符(1拍) ➔ 八分音符(半拍)',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <!-- 全音符 4拍 -->
      <circle cx="120" cy="25" r="7" fill="none" stroke="#0f172a" stroke-width="2" />
      <text x="145" y="29" font-size="9" font-weight="bold">全音符 (4拍)</text>
      <!-- 分支二分音符 -->
      <line x1="120" y1="35" x2="70" y2="55" stroke="#94a3b8" />
      <line x1="120" y1="35" x2="170" y2="55" stroke="#94a3b8" />
      <circle cx="70" cy="58" r="5" fill="none" stroke="#0f172a" stroke-width="2" />
      <line x1="75" y1="58" x2="75" y2="45" stroke="#0f172a" stroke-width="1.5" />
      <circle cx="170" cy="58" r="5" fill="none" stroke="#0f172a" stroke-width="2" />
      <line x1="175" y1="58" x2="175" y2="45" stroke="#0f172a" stroke-width="1.5" />
      <text x="120" y="65" text-anchor="middle" font-size="8" fill="#64748b">二分音符 (2拍)</text>
      <!-- 分支四分音符 (實心) -->
      <circle cx="45" cy="95" r="5" fill="#0f172a" />
      <line x1="50" y1="95" x2="50" y2="80" stroke="#0f172a" stroke-width="1.5" />
      <circle cx="95" cy="95" r="5" fill="#0f172a" />
      <line x1="100" y1="95" x2="100" y2="80" stroke="#0f172a" stroke-width="1.5" />
      <circle cx="145" cy="95" r="5" fill="#0f172a" />
      <line x1="150" y1="95" x2="150" y2="80" stroke="#0f172a" stroke-width="1.5" />
      <circle cx="195" cy="95" r="5" fill="#0f172a" />
      <line x1="200" y1="95" x2="200" y2="80" stroke="#0f172a" stroke-width="1.5" />
      <text x="120" y="118" text-anchor="middle" font-size="9" font-weight="bold" fill="#2563eb">
        四分音符 (1拍) ｜ 4/4 拍：以四分音符為一拍，每小節有四拍
      </text>
    </svg>`
  },

  'art-u3': {
    title: '傳統戲曲角色行當與臉譜文化',
    subtitle: '生 (男性) ｜ 旦 (女性) ｜ 淨 (花臉剛烈) ｜ 丑 (逗趣幽默)',
    svg: `<svg viewBox="0 0 240 120" width="100%" height="100%">
      <rect width="240" height="120" fill="#f8fafc" rx="8" />
      <g transform="translate(15, 20)">
        <rect x="0" y="0" width="48" height="50" fill="#dbeafe" stroke="#2563eb" rx="4" />
        <text x="24" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">生</text>
        <text x="24" y="38" text-anchor="middle" font-size="8" fill="#1e3a8a">老生/小生</text>

        <rect x="54" y="0" width="48" height="50" fill="#fce7f3" stroke="#db2777" rx="4" />
        <text x="78" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#9d174d">旦</text>
        <text x="78" y="38" text-anchor="middle" font-size="8" fill="#831843">正旦/花旦</text>

        <rect x="108" y="0" width="48" height="50" fill="#fee2e2" stroke="#dc2626" rx="4" />
        <text x="132" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">淨</text>
        <text x="132" y="38" text-anchor="middle" font-size="8" fill="#7f1d1d">花臉/包公</text>

        <rect x="162" y="0" width="48" height="50" fill="#fef3c7" stroke="#d97706" rx="4" />
        <text x="186" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">丑</text>
        <text x="186" y="38" text-anchor="middle" font-size="8" fill="#78350f">小花臉/丑角</text>
      </g>
      <text x="120" y="95" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0f172a">
        臉譜色彩：紅表忠勇 (關羽) ｜ 黑表剛正 (包公) ｜ 白表奸詐 (曹操)
      </text>
    </svg>`
  },

  'art-u4': {
    title: '單點透視空間消失點 (Vanishing Point)',
    subtitle: '近大遠小 ｜ 平行線匯聚於視平線上的「消失點 VP」',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <!-- 視平線 -->
      <line x1="20" y1="55" x2="220" y2="55" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3" />
      <!-- 消失點 VP -->
      <circle cx="120" cy="55" r="4" fill="#ef4444" />
      <text x="120" y="45" text-anchor="middle" font-size="9" font-weight="bold" fill="#ef4444">消失點 (VP)</text>
      <!-- 透視道路與兩旁路燈 -->
      <polygon points="120,55 30,120 210,120" fill="#94a3b8" fill-opacity="0.25" />
      <line x1="120" y1="55" x2="30" y2="120" stroke="#334155" stroke-width="2" />
      <line x1="120" y1="55" x2="210" y2="120" stroke="#334155" stroke-width="2" />
      <!-- 近大遠小樹木 -->
      <line x1="50" y1="110" x2="50" y2="70" stroke="#16a34a" stroke-width="3" />
      <line x1="80" y1="85" x2="80" y2="60" stroke="#16a34a" stroke-width="2" />
      <text x="120" y="115" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e293b">
        達文西《最後的晚餐》即採用單點透視，視線集中於耶穌頭部！
      </text>
    </svg>`
  },

  'art-u5': {
    title: '管弦樂團交響編制四大樂器家族',
    subtitle: '弦樂(前) ➔ 木管(中) ➔ 銅管(後) ➔ 打擊樂器(最後方)',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <!-- 扇形同心弧線 -->
      <path d="M 60 110 A 60 60 0 0 1 180 110" fill="none" stroke="#2563eb" stroke-width="6" />
      <text x="120" y="98" text-anchor="middle" font-size="8" font-weight="bold" fill="#1e40af">1. 弦樂組 (小提琴/中提/大提/低音提)</text>

      <path d="M 45 110 A 75 75 0 0 1 195 110" fill="none" stroke="#10b981" stroke-width="6" />
      <text x="120" y="75" text-anchor="middle" font-size="8" font-weight="bold" fill="#15803d">2. 木管組 (長笛/雙簧管/單簧管/低音管)</text>

      <path d="M 30 110 A 90 90 0 0 1 210 110" fill="none" stroke="#f59e0b" stroke-width="6" />
      <text x="120" y="52" text-anchor="middle" font-size="8" font-weight="bold" fill="#92400e">3. 銅管組 (小號/法國號/長號/低音號)</text>

      <!-- 打擊樂 -->
      <rect x="85" y="15" width="70" height="16" fill="#ef4444" rx="2" />
      <text x="120" y="27" text-anchor="middle" font-size="8" font-weight="bold" fill="#fff">4. 打擊組 (定音鼓)</text>
      <!-- 指揮位置 -->
      <circle cx="120" cy="118" r="5" fill="#0f172a" />
      <text x="120" y="125" text-anchor="middle" font-size="7" font-weight="bold" fill="#0f172a">指揮</text>
    </svg>`
  },

  'art-u6': {
    title: '黃金比例與費氏黃金螺旋曲線',
    subtitle: '長寬比 1 : 1.618 ｜ 廣泛運用於帕德嫩神廟、名畫構圖與向日葵種子',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <!-- 黃金長方形 -->
      <rect x="40" y="25" width="140" height="85" fill="none" stroke="#0284c7" stroke-width="2" />
      <line x1="125" y1="25" x2="125" y2="110" stroke="#0284c7" stroke-width="1.5" />
      <line x1="125" y1="78" x2="180" y2="78" stroke="#0284c7" stroke-width="1.5" />
      <!-- 螺旋曲線 -->
      <path d="M 125 110 A 85 85 0 0 1 40 25 A 85 85 0 0 1 125 25 A 53 53 0 0 1 180 78" fill="none" stroke="#ea580c" stroke-width="2.5" />
      <text x="120" y="123" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">
        黃金比 Φ ≈ 1.618 ｜ 大自然對稱與和諧美感的數學秘密！
      </text>
    </svg>`
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 💪 健體領域 (6 單元圖解)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'pe-u1': {
    title: '青春期第二性徵身心發展光譜',
    subtitle: '尊重個別生長差異 ｜ 破除性別刻板印象 ｜ 守護身體自主界限',
    svg: `<svg viewBox="0 0 240 120" width="100%" height="100%">
      <rect width="240" height="120" fill="#f8fafc" rx="8" />
      <rect x="25" y="20" width="90" height="50" fill="#dbeafe" stroke="#2563eb" rx="4" />
      <text x="70" y="38" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">男生生理發育</text>
      <text x="70" y="52" text-anchor="middle" font-size="8" fill="#1e3a8a">變聲、喉結、長高、遺精</text>

      <rect x="125" y="20" width="90" height="50" fill="#fce7f3" stroke="#db2777" rx="4" />
      <text x="170" y="38" text-anchor="middle" font-size="10" font-weight="bold" fill="#9d174d">女生生理發育</text>
      <text x="170" y="52" text-anchor="middle" font-size="8" fill="#831843">乳房發育、骨盆變寬、初經</text>

      <text x="120" y="90" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1e293b">
        健康原則：發育有先後早晚之別，相互尊重不取笑！
      </text>
      <text x="120" y="108" text-anchor="middle" font-size="9" fill="#dc2626">
        身體界限：背心與短褲覆蓋範圍未經同意任何人不可觸碰！
      </text>
    </svg>`
  },

  'pe-u2': {
    title: '衛福部「我的餐盤」六大類食物比例',
    subtitle: '飯跟蔬菜一樣多 ｜ 菜比水果多一點 ｜ 每天早晚一杯奶',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <!-- 餐盤圓 -->
      <circle cx="75" cy="65" r="45" fill="#f1f5f9" stroke="#64748b" stroke-width="2" />
      <!-- 飯 -->
      <path d="M 75 65 L 75 20 A 45 45 0 0 1 120 65 Z" fill="#fef08a" />
      <text x="93" y="48" font-size="8" font-weight="bold" fill="#854d0e">全榖雜糧</text>
      <!-- 菜 -->
      <path d="M 75 65 L 120 65 A 45 45 0 0 1 75 110 Z" fill="#86efac" />
      <text x="93" y="85" font-size="8" font-weight="bold" fill="#14532d">蔬菜類</text>
      <!-- 豆魚蛋肉 -->
      <path d="M 75 65 L 75 110 A 45 45 0 0 1 30 65 Z" fill="#fed7aa" />
      <text x="45" y="85" font-size="8" font-weight="bold" fill="#7c2d12">豆魚蛋肉</text>
      <!-- 水果 -->
      <path d="M 75 65 L 30 65 A 45 45 0 0 1 75 20 Z" fill="#fca5a5" />
      <text x="45" y="48" font-size="8" font-weight="bold" fill="#7f1d1d">水果類</text>
      <!-- 口訣文字 -->
      <g transform="translate(135, 25)" font-size="8.5" fill="#1e293b">
        <text x="0" y="15">🥛 每天早晚一杯奶</text>
        <text x="0" y="32">🍎 每餐水果拳頭大</text>
        <text x="0" y="49">🥦 菜比水果多一點</text>
        <text x="0" y="66">🍚 飯跟蔬菜一樣多</text>
        <text x="0" y="83">🍗 豆魚蛋肉一掌心</text>
      </g>
    </svg>`
  },

  'pe-u3': {
    title: '傳染病三大傳播途徑與預防阻斷',
    subtitle: '飛沫傳染(流感) ｜ 接觸傳染(腸病毒) ｜ 病媒蚊(登革熱巡倒清刷)',
    svg: `<svg viewBox="0 0 240 120" width="100%" height="100%">
      <rect width="240" height="120" fill="#f8fafc" rx="8" />
      <rect x="20" y="20" width="60" height="45" fill="#dbeafe" stroke="#2563eb" rx="3" />
      <text x="50" y="38" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">飛沫呼吸道</text>
      <text x="50" y="52" text-anchor="middle" font-size="7" fill="#1e3a8a">戴口罩/通風</text>

      <rect x="90" y="20" width="60" height="45" fill="#dcfce7" stroke="#16a34a" rx="3" />
      <text x="120" y="38" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">接觸口糞</text>
      <text x="120" y="52" text-anchor="middle" font-size="7" fill="#166534">內外夾弓大立腕</text>

      <rect x="160" y="20" width="60" height="45" fill="#fee2e2" stroke="#dc2626" rx="3" />
      <text x="190" y="38" text-anchor="middle" font-size="9" font-weight="bold" fill="#b91c1c">病媒蚊媒</text>
      <text x="190" y="52" text-anchor="middle" font-size="7" fill="#991b1b">巡、倒、清、刷</text>

      <text x="120" y="95" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0f172a">
        腸病毒預防重點：酒精無法殺死腸病毒！必須使用「肥皂勤洗手」或「漂白水消毒」！
      </text>
    </svg>`
  },

  'pe-u4': {
    title: '運動傷害急性處理最新 PEACE 原則',
    subtitle: 'Protect 保護 ➔ Elevate 抬高 ➔ Avoid NSAIDs 避免消炎 ➔ Compress 加壓 ➔ Educate 教育',
    svg: `<svg viewBox="0 0 240 120" width="100%" height="100%">
      <rect width="240" height="120" fill="#f8fafc" rx="8" />
      <g transform="translate(15, 20)">
        <rect x="0" y="0" width="40" height="45" fill="#fee2e2" stroke="#dc2626" rx="3" />
        <text x="20" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">P</text>
        <text x="20" y="34" text-anchor="middle" font-size="7" fill="#7f1d1d">保護</text>

        <rect x="44" y="0" width="40" height="45" fill="#fef3c7" stroke="#d97706" rx="3" />
        <text x="64" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">E</text>
        <text x="64" y="34" text-anchor="middle" font-size="7" fill="#78350f">抬高</text>

        <rect x="88" y="0" width="40" height="45" fill="#dcfce7" stroke="#16a34a" rx="3" />
        <text x="108" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">A</text>
        <text x="108" y="34" text-anchor="middle" font-size="7" fill="#14532d">避消炎</text>

        <rect x="132" y="0" width="40" height="45" fill="#dbeafe" stroke="#2563eb" rx="3" />
        <text x="152" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">C</text>
        <text x="152" y="34" text-anchor="middle" font-size="7" fill="#1e3a8a">加壓</text>

        <rect x="176" y="0" width="40" height="45" fill="#ede9fe" stroke="#7c3aed" rx="3" />
        <text x="196" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="#6d28d9">E</text>
        <text x="196" y="34" text-anchor="middle" font-size="7" fill="#5b21b6">衛教</text>
      </g>
      <text x="120" y="95" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0f172a">
        最新醫學觀點：急性期勿過度依賴消炎藥，讓身體自然啟動修復機制！
      </text>
    </svg>`
  },

  'pe-u5': {
    title: 'CPR+AED 急救口訣「叫、叫、C、D」流程圖',
    subtitle: '按壓深度 5~6cm ｜ 頻率 100~120次/分 ｜ 雙手交疊垂直用力壓',
    svg: `<svg viewBox="0 0 240 120" width="100%" height="100%">
      <rect width="240" height="120" fill="#f8fafc" rx="8" />
      <!-- 四步驟圓形 -->
      <circle cx="35" cy="45" r="18" fill="#3b82f6" />
      <text x="35" y="50" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">1. 叫</text>
      <text x="35" y="75" text-anchor="middle" font-size="8" fill="#475569">拍肩查意識</text>

      <line x1="55" y1="45" x2="75" y2="45" stroke="#94a3b8" stroke-width="2" />

      <circle cx="95" cy="45" r="18" fill="#10b981" />
      <text x="95" y="50" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">2. 叫</text>
      <text x="95" y="75" text-anchor="middle" font-size="8" fill="#475569">打119取AED</text>

      <line x1="115" y1="45" x2="135" y2="45" stroke="#94a3b8" stroke-width="2" />

      <circle cx="155" cy="45" r="18" fill="#ef4444" />
      <text x="155" y="50" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">3. C</text>
      <text x="155" y="75" text-anchor="middle" font-size="8" fill="#475569">胸外按壓</text>

      <line x1="175" y1="45" x2="195" y2="45" stroke="#94a3b8" stroke-width="2" />

      <circle cx="215" cy="45" r="18" fill="#f59e0b" />
      <text x="215" y="50" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">4. D</text>
      <text x="215" y="75" text-anchor="middle" font-size="8" fill="#475569">電擊去顫</text>

      <text x="120" y="105" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">
        AED 貼片位置：右胸鎖骨下 ＋ 左乳頭外側下緣！電擊前大喊「大家離開」！
      </text>
    </svg>`
  },

  'pe-u6': {
    title: '團隊運動戰術與成長型思維矩陣',
    subtitle: '空間拉開 (Spacing) ｜ 傳切配合 ｜ 運動家風度與挫折復原力',
    svg: `<svg viewBox="0 0 240 120" width="100%" height="100%">
      <rect width="240" height="120" fill="#f8fafc" rx="8" />
      <!-- 球場半場示意 -->
      <rect x="25" y="20" width="100" height="75" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" />
      <!-- 籃框與三分線 -->
      <circle cx="75" cy="30" r="4" fill="#ef4444" />
      <path d="M 45 20 A 45 45 0 0 0 105 20" fill="none" stroke="#ca8a04" stroke-width="1.5" />
      <!-- 傳球虛線 -->
      <path d="M 50 70 Q 75 55 95 65" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="2,2" />
      <text x="75" y="85" text-anchor="middle" font-size="8" font-weight="bold" fill="#2563eb">傳球與跑位</text>
      <!-- 成長型思維說明 -->
      <g transform="translate(135, 25)" font-size="9" fill="#1e293b">
        <text x="0" y="15" font-weight="bold" fill="#15803d">🌱 成長型思維：</text>
        <text x="0" y="32" fill="#334155">失敗是學習的機會</text>
        <text x="0" y="49" fill="#334155">輸球檢討戰術不怪隊友</text>
        <text x="0" y="66" font-weight="bold" fill="#b91c1c">勝不驕、敗不餒！</text>
      </g>
    </svg>`
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🌱 綜合活動領域 (6 單元圖解)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'comp-u1': {
    title: '艾森豪時間管理四象限矩陣圖',
    subtitle: '優先做第二象限「重要但不緊急」(防患未然) ｜ 杜絕無效刷題與分心',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <!-- 四象限 -->
      <rect x="30" y="25" width="85" height="40" fill="#fee2e2" stroke="#dc2626" rx="3" />
      <text x="72" y="42" text-anchor="middle" font-size="9" font-weight="bold" fill="#991b1b">Ⅰ. 重要且緊急</text>
      <text x="72" y="55" text-anchor="middle" font-size="7" fill="#7f1d1d">明天段考/危機急症</text>

      <rect x="125" y="25" width="85" height="40" fill="#dcfce7" stroke="#16a34a" stroke-width="2" rx="3" />
      <text x="167" y="42" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">🌟 Ⅱ. 重要但不緊急</text>
      <text x="167" y="55" text-anchor="middle" font-size="7" fill="#14532d">平時複習/規律運動</text>

      <rect x="30" y="70" width="85" height="40" fill="#fef3c7" stroke="#d97706" rx="3" />
      <text x="72" y="87" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">Ⅲ. 不重要但緊急</text>
      <text x="72" y="100" text-anchor="middle" font-size="7" fill="#78350f">突發插播訊息/來電</text>

      <rect x="125" y="70" width="85" height="40" fill="#f1f5f9" stroke="#94a3b8" rx="3" />
      <text x="167" y="87" text-anchor="middle" font-size="9" font-weight="bold" fill="#475569">Ⅳ. 不重要不緊急</text>
      <text x="167" y="100" text-anchor="middle" font-size="7" fill="#64748b">無意識刷社群/逃避</text>
    </svg>`
  },

  'comp-u2': {
    title: '「需要」與「想要」及 631 理財儲蓄金字塔',
    subtitle: '收入 100% ➔ 60% 生活必須 ｜ 30% 儲蓄投資 ｜ 10% 彈性娛樂',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <!-- 金字塔切分 -->
      <polygon points="85,15 135,95 35,95" fill="#f1f5f9" stroke="#475569" stroke-width="1.5" />
      <polygon points="85,15 105,45 65,45" fill="#fca5a5" />
      <text x="85" y="38" text-anchor="middle" font-size="8" font-weight="bold" fill="#991b1b">10%想要</text>
      <polygon points="65,45 105,45 120,70 50,70" fill="#fde047" />
      <text x="85" y="62" text-anchor="middle" font-size="8" font-weight="bold" fill="#854d0e">30%儲蓄</text>
      <polygon points="50,70 120,70 135,95 35,95" fill="#86efac" />
      <text x="85" y="86" text-anchor="middle" font-size="8" font-weight="bold" fill="#14532d">60%需要</text>
      <!-- 右側辨析法則 -->
      <g transform="translate(145, 30)" font-size="9" fill="#1e293b">
        <text x="0" y="15" font-weight="bold" fill="#15803d">● 需要 (Need)：</text>
        <text x="10" y="30" fill="#475569">維持生命與上學必備</text>
        <text x="0" y="50" font-weight="bold" fill="#dc2626">● 想要 (Want)：</text>
        <text x="10" y="65" fill="#475569">滿足慾望非絕對必要</text>
      </g>
      <text x="120" y="118" text-anchor="middle" font-size="9" font-weight="bold" fill="#2563eb">
        先存再花：儲蓄 = 收入 - 支出 (不可花剩才存！)
      </text>
    </svg>`
  },

  'comp-u3': {
    title: '情緒紅綠燈與「我訊息」溝通三要素',
    subtitle: '我訊息：事實陳述 ＋ 我的感受 ＋ 具體期待 ｜ 拒絕人身攻擊',
    svg: `<svg viewBox="0 0 240 120" width="100%" height="100%">
      <rect width="240" height="120" fill="#f8fafc" rx="8" />
      <!-- 紅綠燈示意 -->
      <rect x="25" y="20" width="30" height="80" fill="#1e293b" rx="6" />
      <circle cx="40" cy="35" r="9" fill="#ef4444" />
      <circle cx="40" cy="60" r="9" fill="#eab308" />
      <circle cx="40" cy="85" r="9" fill="#10b981" />
      <!-- 三步驟說明 -->
      <g transform="translate(68, 25)" font-size="9" fill="#1e293b">
        <text x="0" y="15" font-weight="bold" fill="#dc2626">🔴 紅燈【停】：深呼吸、暫停衝突現場</text>
        <text x="0" y="40" font-weight="bold" fill="#b45309">🟡 黃燈【看】：釐清雙方感受與核心原因</text>
        <text x="0" y="65" font-weight="bold" fill="#15803d">🟢 綠燈【聽與行】：使用「我訊息」理性溝通</text>
      </g>
      <text x="120" y="112" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#2563eb">
        我訊息範例：「當你借筆沒說時(事實)，我覺得很著急(感受)，希望下次先跟我說(期待)」
      </text>
    </svg>`
  },

  'comp-u4': {
    title: '加德納八大多元智能探索與費曼學習法',
    subtitle: '人人皆有優勢智能 ｜ 費曼學習法：能用自己的話教會別人才是真懂',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <!-- 八角雷達圖示意 -->
      <polygon points="120,25 155,38 170,70 155,102 120,115 85,102 70,70 85,38" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" />
      <circle cx="120" cy="70" r="2" fill="#1e40af" />
      <text x="120" y="20" text-anchor="middle" font-size="8" font-weight="bold">語文</text>
      <text x="175" y="38" font-size="8" font-weight="bold">數理</text>
      <text x="185" y="73" font-size="8" font-weight="bold">空間</text>
      <text x="170" y="110" font-size="8" font-weight="bold">肢體</text>
      <text x="120" y="125" text-anchor="middle" font-size="8" font-weight="bold">音樂</text>
      <text x="50" y="110" font-size="8" font-weight="bold">人際</text>
      <text x="45" y="73" font-size="8" font-weight="bold">內省</text>
      <text x="50" y="38" font-size="8" font-weight="bold">自然</text>
    </svg>`
  },

  'comp-u5': {
    title: '服務學習完整循環四部曲',
    subtitle: '準備 (Preparation) ➔ 服務 (Service) ➔ 反思 (Reflection) ➔ 慶賀 (Celebration)',
    svg: `<svg viewBox="0 0 240 120" width="100%" height="100%">
      <rect width="240" height="120" fill="#f8fafc" rx="8" />
      <!-- 循環四步驟方塊 -->
      <g transform="translate(15, 20)">
        <rect x="0" y="0" width="48" height="45" fill="#dbeafe" stroke="#2563eb" rx="4" />
        <text x="24" y="20" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">1. 準備</text>
        <text x="24" y="34" text-anchor="middle" font-size="7" fill="#1e3a8a">調查需求/規劃</text>

        <rect x="54" y="0" width="48" height="45" fill="#fef3c7" stroke="#d97706" rx="4" />
        <text x="78" y="20" text-anchor="middle" font-size="9" font-weight="bold" fill="#b45309">2. 服務</text>
        <text x="78" y="34" text-anchor="middle" font-size="7" fill="#78350f">投入行動/關懷</text>

        <rect x="108" y="0" width="48" height="45" fill="#dcfce7" stroke="#16a34a" rx="4" />
        <text x="132" y="20" text-anchor="middle" font-size="9" font-weight="bold" fill="#166534">3. 反思</text>
        <text x="132" y="34" text-anchor="middle" font-size="7" fill="#14532d">體會收穫/回顧</text>

        <rect x="162" y="0" width="48" height="45" fill="#fce7f3" stroke="#db2777" rx="4" />
        <text x="186" y="20" text-anchor="middle" font-size="9" font-weight="bold" fill="#9d174d">4. 慶賀</text>
        <text x="186" y="34" text-anchor="middle" font-size="7" fill="#831843">分享成果/感恩</text>
      </g>
      <text x="120" y="95" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1e293b">
        服務學習的核心精神是「雙向互惠」：受助者得到溫暖，服務者獲得心靈成長！
      </text>
    </svg>`
  },

  'comp-u6': {
    title: '戶外危機應變：STOP 原則與求生 333 原則',
    subtitle: 'Stop 停止冷靜 ｜ Think 思考 ｜ Observe 觀察 ｜ Plan 計畫 ｜ 3週不吃/3天不喝/3小時失溫',
    svg: `<svg viewBox="0 0 240 130" width="100%" height="100%">
      <rect width="240" height="130" fill="#f8fafc" rx="8" />
      <g transform="translate(20, 20)">
        <rect x="0" y="0" width="95" height="50" fill="#fee2e2" stroke="#dc2626" rx="4" />
        <text x="47" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">STOP 迷路冷靜口訣</text>
        <text x="47" y="32" text-anchor="middle" font-size="8" fill="#7f1d1d">S: 原地停步勿慌亂</text>
        <text x="47" y="44" text-anchor="middle" font-size="8" fill="#7f1d1d">T: 思考對策 ｜ O: 觀察 ｜ P: 計畫</text>

        <rect x="105" y="0" width="95" height="50" fill="#fef3c7" stroke="#d97706" rx="4" />
        <text x="152" y="18" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">野外求生 333 原則</text>
        <text x="152" y="32" text-anchor="middle" font-size="8" fill="#78350f">失溫 3 小時 (最致命！)</text>
        <text x="152" y="44" text-anchor="middle" font-size="8" fill="#78350f">缺水 3 天 ｜ 斷糧 3 週</text>
      </g>
      <text x="120" y="95" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#15803d">
        迷路自救關鍵：留在原地避風保暖防失溫！不可沿溪谷下切！
      </text>
      <text x="120" y="112" text-anchor="middle" font-size="8.5" fill="#475569">
        國際通用求救哨音：每分鐘急促吹 6 聲，暫停 1 分鐘，重複循環！
      </text>
    </svg>`
  }
};

// 輔助函式：取得指定單元之向量圖示資料
export function getUnitDiagram(unitId) {
  return unitDiagramCatalog[unitId] || null;
}
