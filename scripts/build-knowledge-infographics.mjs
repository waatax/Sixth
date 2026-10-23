import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 🎨 專屬高頻微知識點純向量 SVG 資訊圖表庫
// 涵蓋 8 大學科領域核心概念、幾何算理、實驗模型、文法時態、歷史制度與生命健康
const specialized = {
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🧮 數學領域 (Math)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'kp-math-u1-1': {
    title: '質數、合數與 1 的結構劃分',
    subtitle: '原子積木・最小質數 2 是唯一偶數質數・1 既非質數亦非合數',
    diagramType: 'concept-map',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <rect x="15" y="15" width="290" height="32" rx="6" fill="#3b82f6" />
      <text x="160" y="36" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">自然數 (大於 0 的整數) 結構劃分</text>
      <rect x="20" y="60" width="80" height="95" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" />
      <text x="60" y="80" text-anchor="middle" font-size="12" font-weight="bold" fill="#475569">數字 1</text>
      <text x="60" y="102" text-anchor="middle" font-size="10" fill="#64748b">只有 1 個因數</text>
      <text x="60" y="122" text-anchor="middle" font-size="10" font-weight="bold" fill="#ef4444">非質數・非合數</text>
      <text x="60" y="142" text-anchor="middle" font-size="9" fill="#94a3b8">段考常考陷阱</text>
      <rect x="110" y="60" width="95" height="95" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
      <text x="157" y="80" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">質數 (Primes)</text>
      <text x="157" y="100" text-anchor="middle" font-size="10" fill="#2563eb">剛好 2 個因數</text>
      <text x="157" y="118" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">2, 3, 5, 7, 11...</text>
      <rect x="118" y="126" width="79" height="20" rx="4" fill="#dbeafe" />
      <text x="157" y="140" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e3a8a">2 是唯一偶質數</text>
      <rect x="215" y="60" width="85" height="95" rx="6" fill="#f0fdf4" stroke="#10b981" stroke-width="1.5" />
      <text x="257" y="80" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">合數 (Composites)</text>
      <text x="257" y="100" text-anchor="middle" font-size="10" fill="#059669">3 個以上因數</text>
      <text x="257" y="118" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">4, 6, 8, 9, 10...</text>
      <text x="257" y="140" text-anchor="middle" font-size="9" fill="#059669">4 是最小合數</text>
      <text x="160" y="170" text-anchor="middle" font-size="10" font-weight="bold" fill="#2563eb">互質核心：兩數最大公因數為 1 (如 8 與 9 互質，但兩數皆非質數)</text>
    </svg>`
  },

  'kp-math-u1-2': {
    title: '短除法求 GCD 與 LCM 結構圖',
    subtitle: '直列相乘為最大公因數・L型連乘為最小公倍數',
    diagramType: 'algorithm',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <line x1="80" y1="45" x2="80" y2="135" stroke="#3b82f6" stroke-width="2.5" />
      <line x1="80" y1="75" x2="220" y2="75" stroke="#3b82f6" stroke-width="2" />
      <line x1="80" y1="105" x2="220" y2="105" stroke="#3b82f6" stroke-width="2" />
      <line x1="80" y1="135" x2="220" y2="135" stroke="#3b82f6" stroke-width="2" />
      <text x="120" y="65" font-size="13" font-weight="bold" fill="#1e293b">24</text>
      <text x="175" y="65" font-size="13" font-weight="bold" fill="#1e293b">36</text>
      <text x="55" y="65" font-size="13" font-weight="bold" fill="#ef4444">2</text>
      <text x="120" y="95" font-size="13" fill="#334155">12</text>
      <text x="175" y="95" font-size="13" fill="#334155">18</text>
      <text x="55" y="95" font-size="13" font-weight="bold" fill="#ef4444">2</text>
      <text x="122" y="125" font-size="13" fill="#334155">6</text>
      <text x="178" y="125" font-size="13" fill="#334155">9</text>
      <text x="55" y="125" font-size="13" font-weight="bold" fill="#ef4444">3</text>
      <text x="122" y="152" font-size="13" font-weight="bold" fill="#10b981">2</text>
      <text x="178" y="152" font-size="13" font-weight="bold" fill="#10b981">3</text>
      <path d="M 45 45 L 45 160 L 210 160" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3" />
      <text x="215" y="152" font-size="10" font-weight="bold" fill="#10b981">互質(停止)</text>
      <rect x="25" y="12" width="270" height="22" rx="4" fill="#dbeafe" />
      <text x="160" y="27" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">GCD = 2 × 2 × 3 = 12 ｜ LCM = 12 × 2 × 3 = 72</text>
    </svg>`
  },

  'kp-math-u1-3': {
    title: '兩數乘積恆等式天平平衡圖',
    subtitle: 'A × B ＝ GCD(A, B) × LCM(A, B) ｜ 僅限兩數適用',
    diagramType: 'algebra',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">兩數乘積恆等式：天平兩側完全等值</text>
      <rect x="30" y="45" width="115" height="55" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" />
      <text x="87" y="68" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">左盤：原兩數相乘</text>
      <text x="87" y="88" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">A × B</text>
      <circle cx="160" cy="72" r="14" fill="#f59e0b" />
      <text x="160" y="77" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">＝</text>
      <rect x="175" y="45" width="115" height="55" rx="6" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
      <text x="232" y="68" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">右盤：公因數乘公倍數</text>
      <text x="232" y="88" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">GCD × LCM</text>
      <rect x="25" y="115" width="270" height="50" rx="6" fill="#f1f5f9" />
      <text x="160" y="133" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#334155">未知數秒解大招：若已知 A, GCD, LCM，則 B ＝ (GCD × LCM) ÷ A</text>
      <text x="160" y="152" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ef4444">防雷警訊：此定理三數以上不成立！切勿套用於三個數字！</text>
    </svg>`
  },

  'kp-math-u2-1': {
    title: '分數除法「乘以倒數」幾何分割模型',
    subtitle: '除以 2/3 等於分成 3/2 倍的份數・單位量轉換',
    diagramType: 'visual-model',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">算理：2 ÷ (2/3) ＝ 2 × (3/2) ＝ 3 份</text>
      <rect x="30" y="40" width="120" height="26" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5" rx="4" />
      <rect x="30" y="40" width="80" height="26" fill="#93c5fd" stroke="#2563eb" stroke-width="1.5" rx="4" />
      <text x="70" y="57" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">2/3 單位</text>
      <text x="130" y="57" text-anchor="middle" font-size="10" fill="#64748b">1/3</text>
      <path d="M 160 53 L 180 53" stroke="#f59e0b" stroke-width="2.5" />
      <rect x="190" y="40" width="100" height="26" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" rx="4" />
      <text x="240" y="57" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">翻轉分子分母 × 3/2</text>
      <rect x="25" y="80" width="270" height="85" rx="6" fill="#eff6ff" stroke="#bfdbfe" />
      <text x="35" y="100" font-size="11" font-weight="bold" fill="#1e40af">💡 倒數的本質：兩數相乘等於 1</text>
      <text x="35" y="120" font-size="10.5" fill="#334155">例：(2/5) 的倒數是 (5/2) ｜ 帶分數 1又1/2 ＝ 3/2，倒數為 2/3</text>
      <text x="35" y="138" font-size="10" font-weight="bold" fill="#ef4444">⚠️ 致命地雷：嚴禁帶分數直接顛倒（如 1又1/2 倒數絕非 1又2/1！）</text>
      <text x="35" y="154" font-size="9.5" fill="#64748b">先化為假分數，再將分子分母對調！</text>
    </svg>`
  },

  'kp-math-u3-1': {
    title: '小數除法小數點移動與餘數對齊圖',
    subtitle: '除數移向右邊成整數・商對齊新小數點・餘數對齊原來的小數點',
    diagramType: 'algorithm',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">小數直式除法雙軌對齊定則</text>
      <rect x="25" y="38" width="130" height="80" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" />
      <text x="90" y="56" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">商數 (Quotient)</text>
      <text x="90" y="78" text-anchor="middle" font-size="10" font-weight="bold" fill="#2563eb">小數點對齊</text>
      <text x="90" y="98" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">【新小數點】</text>
      <rect x="165" y="38" width="130" height="80" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5" />
      <text x="230" y="56" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">餘數 (Remainder)</text>
      <text x="230" y="78" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">小數點垂直對齊</text>
      <text x="230" y="98" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">【原本小數點】</text>
      <rect x="25" y="125" width="270" height="42" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="160" y="142" text-anchor="middle" font-size="10" font-weight="bold" fill="#334155">例：5.8 ÷ 1.2 ＝ 4 餘 1.0 (而非餘 10！)</text>
      <text x="160" y="157" text-anchor="middle" font-size="9" font-weight="bold" fill="#ef4444">驗算金律：除數 × 商 ＋ 餘數 ＝ 被除數 (1.2 × 4 + 1.0 = 5.8)</text>
    </svg>`
  },

  'kp-math-u4-1': {
    title: '比與比值天平平衡模型',
    subtitle: '前項與後項同乘同除不變・最簡整數比',
    diagramType: 'balance',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">比值 ＝ 前項 ÷ 後項 (比值是一個數值)</text>
      <rect x="35" y="45" width="100" height="50" rx="6" fill="#eff6ff" stroke="#3b82f6" />
      <text x="85" y="66" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">前項 a</text>
      <text x="85" y="84" text-anchor="middle" font-size="9" fill="#2563eb">分子位置</text>
      <text x="160" y="75" text-anchor="middle" font-size="18" font-weight="bold" fill="#64748b">：</text>
      <rect x="185" y="45" width="100" height="50" rx="6" fill="#ecfdf5" stroke="#10b981" />
      <text x="235" y="66" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">後項 b</text>
      <text x="235" y="84" text-anchor="middle" font-size="9" fill="#059669">分母位置 (≠ 0)</text>
      <rect x="25" y="108" width="270" height="58" rx="6" fill="#f1f5f9" />
      <text x="160" y="126" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e40af">最簡整數比判定：前項與後項皆為整數且互質！</text>
      <text x="160" y="143" text-anchor="middle" font-size="9.5" fill="#334155">小數比化整：同乘 10、100 ｜ 分數比化整：同乘分母最小公倍數</text>
      <text x="160" y="158" text-anchor="middle" font-size="9" font-weight="bold" fill="#ef4444">注意：比與比值純為比例數值，絕不帶單位！</text>
    </svg>`
  },

  'kp-math-u4-2': {
    title: '比的內項積等於外項積定理',
    subtitle: '若 a : b ＝ c : d，則 a × d ＝ b × c・解未知數秒殺',
    diagramType: 'algebra',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <rect x="25" y="18" width="270" height="30" rx="6" fill="#3b82f6" />
      <text x="160" y="38" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">比例式核心定理：內項乘積 ＝ 外項乘積</text>
      <text x="65" y="80" font-size="16" font-weight="bold" fill="#1d4ed8">a</text>
      <text x="95" y="80" font-size="16" fill="#64748b">：</text>
      <text x="125" y="80" font-size="16" font-weight="bold" fill="#10b981">b</text>
      <text x="160" y="80" font-size="16" fill="#64748b">＝</text>
      <text x="195" y="80" font-size="16" font-weight="bold" fill="#10b981">c</text>
      <text x="225" y="80" font-size="16" fill="#64748b">：</text>
      <text x="255" y="80" font-size="16" font-weight="bold" fill="#1d4ed8">d</text>
      <path d="M 68 88 C 68 120, 255 120, 255 88" fill="none" stroke="#2563eb" stroke-width="2.5" />
      <text x="160" y="125" text-anchor="middle" font-size="10" font-weight="bold" fill="#2563eb">外項積：a × d</text>
      <path d="M 128 65 C 128 48, 192 48, 192 65" fill="none" stroke="#059669" stroke-width="2.5" />
      <text x="160" y="55" text-anchor="middle" font-size="10" font-weight="bold" fill="#059669">內項積：b × c</text>
      <rect x="25" y="138" width="270" height="32" rx="4" fill="#eff6ff" />
      <text x="160" y="158" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">解未知數範例：3 : 5 ＝ x : 20 ➔ 5x ＝ 60 ➔ x ＝ 12</text>
    </svg>`
  },

  'kp-math-u5-1': {
    title: '圓周長與圓周率推導幾何圖',
    subtitle: '圓周長 C ＝ 直徑 × π ＝ 半徑 × 2 × 3.14',
    diagramType: 'geometry',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <circle cx="90" cy="90" r="50" fill="#eff6ff" stroke="#3b82f6" stroke-width="2.5" />
      <line x1="40" y1="90" x2="140" y2="90" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3" />
      <circle cx="90" cy="90" r="3" fill="#1e40af" />
      <text x="90" y="85" text-anchor="middle" font-size="9" font-weight="bold" fill="#ef4444">直徑 d ＝ 2r</text>
      <rect x="160" y="30" width="145" height="120" rx="6" fill="#f0fdf4" stroke="#86efac" />
      <text x="232" y="52" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">圓周長公式心法</text>
      <text x="170" y="75" font-size="10" font-weight="bold" fill="#166534">C ＝ 直徑 × π</text>
      <text x="170" y="95" font-size="10" font-weight="bold" fill="#166534">C ＝ 半徑 × 2 × 3.14</text>
      <rect x="168" y="108" width="130" height="32" rx="4" fill="#dcfce7" />
      <text x="233" y="123" text-anchor="middle" font-size="9" font-weight="bold" fill="#14532d">滾動 1 圈前進距離</text>
      <text x="233" y="134" text-anchor="middle" font-size="8.5" fill="#14532d">剛好等於 1 個圓周長！</text>
      <text x="160" y="168" text-anchor="middle" font-size="9" font-weight="bold" fill="#64748b">圓周率 π ＝ 圓周長 ÷ 直徑 ≈ 3.14159...</text>
    </svg>`
  },

  'kp-math-u6-1': {
    title: '圓面積無限割補矩形推導模型',
    subtitle: '無窮細分拼成長方形・長為半周長 πr・寬為半徑 r',
    diagramType: 'calculus-concept',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <circle cx="70" cy="80" r="42" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
      <path d="M 70 80 L 112 80" stroke="#ef4444" stroke-width="2" />
      <text x="90" y="74" font-size="9" font-weight="bold" fill="#ef4444">r</text>
      <text x="70" y="140" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">切成 16、32、64 等份</text>
      <text x="135" y="80" font-size="16" fill="#64748b">→</text>
      <rect x="155" y="55" width="135" height="50" fill="#dbeafe" stroke="#2563eb" stroke-width="2" rx="3" />
      <line x1="155" y1="55" x2="290" y2="55" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2" />
      <text x="222" y="48" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ef4444">底 ＝ 圓周長的一半 ＝ 半徑 × π</text>
      <text x="298" y="83" font-size="9.5" font-weight="bold" fill="#1e40af">高 r</text>
      <rect x="25" y="135" width="270" height="35" rx="5" fill="#f0fdf4" stroke="#86efac" />
      <text x="160" y="152" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">圓面積 ＝ 底 × 高 ＝ (半徑 × π) × 半徑 ＝ 半徑 × 半徑 × 3.14</text>
    </svg>`
  },

  'kp-math-u7-1': {
    title: '速率三角金字塔與時分秒換算圖',
    subtitle: '距離在頂端・速率與時間在底端・乘除三角形秒殺轉換',
    diagramType: 'physics-model',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">速率三角金字塔 (Speed-Distance-Time)</text>
      <polygon points="100,120 60,120 80,40" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
      <line x1="68" y1="80" x2="92" y2="80" stroke="#3b82f6" stroke-width="2" />
      <line x1="80" y1="80" x2="80" y2="120" stroke="#3b82f6" stroke-width="2" />
      <text x="80" y="68" text-anchor="middle" font-size="11" font-weight="bold" fill="#ef4444">距離</text>
      <text x="70" y="105" text-anchor="middle" font-size="9" font-weight="bold" fill="#2563eb">速率</text>
      <text x="90" y="105" text-anchor="middle" font-size="9" font-weight="bold" fill="#10b981">時間</text>
      <rect x="135" y="38" width="165" height="85" rx="6" fill="#f0fdf4" stroke="#86efac" />
      <text x="217" y="56" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#166534">單位雙向秒殺轉換法則</text>
      <text x="145" y="76" font-size="9.5" fill="#1e293b">時速 (km/h) ➔ 秒速 (m/s)：÷ 3.6</text>
      <text x="145" y="93" font-size="9.5" fill="#1e293b">秒速 (m/s) ➔ 時速 (km/h)：× 3.6</text>
      <text x="145" y="110" font-size="9" fill="#047857">例：時速 72 km/h ＝ 秒速 20 m/s</text>
      <rect x="25" y="132" width="270" height="38" rx="5" fill="#fee2e2" stroke="#fca5a5" />
      <text x="160" y="148" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">⚠️ 往返平均速率陷阱：絕非兩速率直接相加除以 2！</text>
      <text x="160" y="162" text-anchor="middle" font-size="9" font-weight="bold" fill="#991b1b">平均速率 ＝ 總距離 ÷ 總時間！</text>
    </svg>`
  },

  'kp-math-u7-2': {
    title: '行程問題：相遇與追趕決策樹',
    subtitle: '面對面相向相遇用速度和・同方向追趕用速度差',
    diagramType: 'decision-tree',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <rect x="25" y="15" width="270" height="28" rx="5" fill="#3b82f6" />
      <text x="160" y="34" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">行程問題雙向決策心法</text>
      <rect x="25" y="55" width="130" height="75" rx="6" fill="#eff6ff" stroke="#93c5fd" />
      <text x="90" y="73" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">1. 面對面相向相遇</text>
      <text x="90" y="92" text-anchor="middle" font-size="10" fill="#334155">A ➔ 🚗  🚲 ⬅ B</text>
      <text x="90" y="112" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#2563eb">時間 ＝ 總距離 ÷ (速A ＋ 速B)</text>
      <rect x="165" y="55" width="130" height="75" rx="6" fill="#ecfdf5" stroke="#a7f3d0" />
      <text x="230" y="73" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">2. 同方向追趕問題</text>
      <text x="230" y="92" text-anchor="middle" font-size="10" fill="#334155">🚗快 ➔  🚲慢 ➔</text>
      <text x="230" y="112" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#059669">時間 ＝ 距離差 ÷ (速快 － 速慢)</text>
      <rect x="25" y="138" width="270" height="32" rx="4" fill="#f1f5f9" />
      <text x="160" y="158" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1e293b">流水問題：順流速 ＝ 船速 ＋ 水速 ｜ 逆流速 ＝ 船速 － 水速</text>
    </svg>`
  },

  'kp-math-u8-1': {
    title: '直柱體通用體積黃金公式模型',
    subtitle: '底面積均勻向上堆疊延伸・體積 V ＝ 底面積 B × 柱高 h',
    diagramType: '3d-geometry',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <ellipse cx="80" cy="55" rx="40" ry="18" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
      <line x1="40" y1="55" x2="40" y2="120" stroke="#2563eb" stroke-width="2" />
      <line x1="120" y1="55" x2="120" y2="120" stroke="#2563eb" stroke-width="2" />
      <ellipse cx="80" cy="120" rx="40" ry="18" fill="#93c5fd" stroke="#2563eb" stroke-width="2" />
      <text x="80" y="58" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1e40af">底面積 B</text>
      <line x1="128" y1="55" x2="128" y2="120" stroke="#ef4444" stroke-width="2" />
      <text x="136" y="92" font-size="10" font-weight="bold" fill="#ef4444">高 h</text>
      <rect x="155" y="35" width="145" height="105" rx="6" fill="#f0fdf4" stroke="#86efac" />
      <text x="227" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">柱體體積黃金公式</text>
      <text x="165" y="78" font-size="10" font-weight="bold" fill="#14532d">V ＝ 底面積 × 柱高</text>
      <text x="165" y="96" font-size="9" fill="#334155">圓柱：(r × r × 3.14) × h</text>
      <text x="165" y="112" font-size="9" fill="#334155">三角柱：(底×高÷2) × 柱高</text>
      <text x="165" y="128" font-size="9" fill="#334155">四角柱：(長×寬) × 柱高</text>
      <rect x="25" y="148" width="270" height="24" rx="4" fill="#eff6ff" />
      <text x="160" y="164" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1e40af">側面展開圖：必為長方形，長＝底面周長，寬＝柱高！</text>
    </svg>`
  },

  'kp-math-u9-1': {
    title: '放大圖縮圖性質與面積平方比',
    subtitle: '對應角完全不變・對應邊成比例・面積放大 n² 倍',
    diagramType: 'geometry',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <rect x="20" y="15" width="280" height="28" rx="5" fill="#3b82f6" />
      <text x="160" y="34" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">放大圖與縮圖三大幾何黃金規律</text>
      <rect x="30" y="60" width="40" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" />
      <text x="50" y="78" text-anchor="middle" font-size="9" fill="#1e40af">原圖</text>
      <text x="50" y="105" text-anchor="middle" font-size="8.5" fill="#64748b">邊長 1</text>
      <text x="50" y="118" text-anchor="middle" font-size="8.5" fill="#64748b">面積 1</text>
      <text x="88" y="78" font-size="14" fill="#64748b">➔</text>
      <rect x="110" y="50" width="80" height="60" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2" />
      <text x="150" y="85" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e3a8a">放大 2 倍圖</text>
      <text x="150" y="125" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#1d4ed8">邊長 2 倍 ｜ 面積 4 倍 (2²)</text>
      <rect x="205" y="50" width="95" height="90" rx="5" fill="#eff6ff" stroke="#93c5fd" />
      <text x="252" y="68" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">考點精要</text>
      <text x="212" y="86" font-size="8.5" fill="#334155">1. 對應角：相等</text>
      <text x="212" y="102" font-size="8.5" fill="#334155">2. 對應邊：成比例</text>
      <text x="212" y="118" font-size="8.5" font-weight="bold" fill="#ef4444">3. 面積：變 n² 倍</text>
      <text x="212" y="132" font-size="8" fill="#64748b">邊長變3倍➔面積變9倍</text>
      <rect x="25" y="148" width="270" height="24" rx="4" fill="#fee2e2" />
      <text x="160" y="164" text-anchor="middle" font-size="9" font-weight="bold" fill="#b91c1c">⚠️ 考場陷阱：放大 3 倍時，角度依然 100% 保持不變！切勿把角度乘 3！</text>
    </svg>`
  },

  'kp-math-u9-2': {
    title: '地圖比例尺三大表示法與換算',
    subtitle: '比值式、分數式、線段圖・圖上距離 ÷ 比例尺 ＝ 實際距離',
    diagramType: 'scale-chart',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">比例尺三大表示法 (以 1 : 25,000 為例)</text>
      <rect x="25" y="38" width="85" height="60" rx="5" fill="#eff6ff" stroke="#3b82f6" />
      <text x="67" y="58" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">1. 比值式</text>
      <text x="67" y="78" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">1 : 25000</text>
      <rect x="117" y="38" width="85" height="60" rx="5" fill="#f0fdf4" stroke="#10b981" />
      <text x="160" y="58" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">2. 分數式</text>
      <text x="160" y="78" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">1 / 25000</text>
      <rect x="210" y="38" width="85" height="60" rx="5" fill="#fef08a" stroke="#ca8a04" />
      <text x="252" y="58" text-anchor="middle" font-size="10" font-weight="bold" fill="#854d0e">3. 線段圖</text>
      <line x1="220" y1="78" x2="285" y2="78" stroke="#854d0e" stroke-width="2" />
      <text x="252" y="92" text-anchor="middle" font-size="8" fill="#854d0e">0   250m</text>
      <rect x="25" y="108" width="270" height="62" rx="6" fill="#f1f5f9" />
      <text x="160" y="126" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e293b">換算真訣竅：圖上 1 cm ＝ 實際 25,000 cm ＝ 250 m ＝ 0.25 km</text>
      <text x="160" y="145" text-anchor="middle" font-size="10" fill="#334155">實際距離 ＝ 圖上距離 ÷ 比例尺 ＝ 圖上距離 × 25,000</text>
      <text x="160" y="160" text-anchor="middle" font-size="9" font-weight="bold" fill="#ef4444">注意：單位必須一致！1 公里 ＝ 100,000 公分 (5個零)</text>
    </svg>`
  },

  'kp-math-u10-1': {
    title: '基準量 (1) 與比較量線段圖',
    subtitle: '被比的為比較量・當標準的為基準量 (1)・比較量 ＝ 基準量 × 比值',
    diagramType: 'tape-diagram',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">基準量 (1) 與比較量線段核心模型</text>
      <rect x="30" y="45" width="80" height="24" fill="#93c5fd" stroke="#2563eb" stroke-width="1.5" rx="3" />
      <text x="70" y="61" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">基準量 (1)</text>
      <text x="125" y="61" font-size="9.5" fill="#475569">← 當作「標準 1」的量</text>
      <rect x="30" y="80" width="200" height="24" fill="#86efac" stroke="#16a34a" stroke-width="1.5" rx="3" />
      <text x="130" y="96" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">比較量 (2.5 倍)</text>
      <text x="240" y="96" font-size="9.5" fill="#475569">← 和標準比較的量</text>
      <rect x="25" y="115" width="270" height="55" rx="6" fill="#eff6ff" stroke="#bfdbfe" />
      <text x="160" y="132" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">三大公式互相轉換</text>
      <text x="160" y="148" text-anchor="middle" font-size="9.5" fill="#334155">1. 比較量 ＝ 基準量 × 比值 ｜ 2. 基準量 ＝ 比較量 ÷ 比值</text>
      <text x="160" y="162" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">和倍大招：基準量 ＝ 兩量之和 ÷ (1 ＋ 倍數)</text>
    </svg>`
  },

  'kp-math-u11-1': {
    title: '等量公理天平兩側對稱運算模型',
    subtitle: '等號兩邊同加、減、乘、除以不為 0 的數，等式依然成立',
    diagramType: 'balance',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">等量公理：天平平衡兩側完全對稱</text>
      <line x1="160" y1="40" x2="160" y2="120" stroke="#475569" stroke-width="3" />
      <line x1="70" y1="65" x2="250" y2="65" stroke="#475569" stroke-width="3" />
      <polygon points="160,35 152,48 168,48" fill="#f59e0b" />
      <rect x="50" y="65" width="70" height="40" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5" />
      <text x="85" y="88" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">x ＋ 8</text>
      <rect x="200" y="65" width="70" height="40" rx="4" fill="#f0fdf4" stroke="#10b981" stroke-width="1.5" />
      <text x="235" y="88" text-anchor="middle" font-size="12" font-weight="bold" fill="#047857">20</text>
      <rect x="25" y="118" width="270" height="52" rx="5" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="160" y="136" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e293b">移項逆運算秘訣：左邊加 8，兩邊同減 8 ➔ x ＝ 20 － 8 ＝ 12</text>
      <text x="160" y="155" text-anchor="middle" font-size="9.5" fill="#475569">乘變除、除變乘、加變減、減變加；解完務必代回原式確認驗算！</text>
    </svg>`
  },

  'kp-math-u12-1': {
    title: '圓形百分率圖與 360° 圓心角轉換',
    subtitle: '圓心角 ＝ 360° × 百分率・全圓總和必恰等於 100% (360°)',
    diagramType: 'pie-chart',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <circle cx="85" cy="90" r="50" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" />
      <path d="M 85 90 L 85 40 A 50 50 0 0 1 135 90 Z" fill="#93c5fd" />
      <text x="105" y="70" font-size="9" font-weight="bold" fill="#1e40af">25% (90°)</text>
      <path d="M 85 90 L 135 90 A 50 50 0 0 1 85 140 Z" fill="#86efac" />
      <text x="105" y="115" font-size="9" font-weight="bold" fill="#166534">25% (90°)</text>
      <path d="M 85 90 L 85 140 A 50 50 0 0 1 85 40 Z" fill="#fde047" />
      <text x="55" y="95" font-size="9.5" font-weight="bold" fill="#854d0e">50% (180°)</text>
      <rect x="155" y="35" width="145" height="105" rx="6" fill="#eff6ff" stroke="#bfdbfe" />
      <text x="227" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">圓心角計算黃金公式</text>
      <text x="165" y="76" font-size="9.5" font-weight="bold" fill="#1e40af">圓心角 ＝ 360° × 百分率</text>
      <text x="165" y="95" font-size="9" fill="#334155">25% ➔ 360° × 0.25 ＝ 90°</text>
      <text x="165" y="112" font-size="9" fill="#334155">50% ➔ 360° × 0.50 ＝ 180°</text>
      <text x="165" y="128" font-size="8.5" fill="#64748b">總百分率和 ＝ 100%</text>
      <rect x="25" y="148" width="270" height="24" rx="4" fill="#fef2f2" />
      <text x="160" y="164" text-anchor="middle" font-size="9" font-weight="bold" fill="#ef4444">⚠️ 四捨五入配平：各項總和出現 99% 或 101% 時，將 1% 補在最大項！</text>
    </svg>`
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🔬 自然科學領域 (Science)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'kp-sci-u1-1': {
    title: '高低氣壓空氣垂直運動與天氣法則',
    subtitle: '高壓中心氣流下沉多晴朗・低壓中心氣流上升冷凝多陰雨',
    diagramType: 'atmospheric-physics',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">高低氣壓垂直氣流與天氣對比</text>
      <rect x="25" y="38" width="130" height="95" rx="6" fill="#fef3c7" stroke="#f59e0b" />
      <circle cx="90" cy="62" r="14" fill="#f59e0b" />
      <text x="90" y="67" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">H</text>
      <text x="90" y="86" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#92400e">高氣壓 (晴朗)</text>
      <text x="90" y="103" text-anchor="middle" font-size="9" fill="#78350f">氣流下沉・不易成雲</text>
      <text x="90" y="120" text-anchor="middle" font-size="8.5" fill="#78350f">中心天氣乾爽晴朗 ☀️</text>
      <rect x="165" y="38" width="130" height="95" rx="6" fill="#e0f2fe" stroke="#0284c7" />
      <circle cx="230" cy="62" r="14" fill="#0284c7" />
      <text x="230" y="67" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">L</text>
      <text x="230" y="86" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#0369a1">低氣壓 (陰雨)</text>
      <text x="230" y="103" text-anchor="middle" font-size="9" fill="#075985">氣流上升・膨脹冷凝</text>
      <text x="230" y="120" text-anchor="middle" font-size="8.5" fill="#075985">容易成雲致雨 🌧️</text>
      <rect x="25" y="140" width="270" height="32" rx="4" fill="#f1f5f9" />
      <text x="160" y="160" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1e293b">風向金律：水平空氣一律由「高氣壓 (H) 吹向 低氣壓 (L)」！</text>
    </svg>`
  },

  'kp-sci-u1-2': {
    title: '冷鋒與暖鋒符號與天氣特徵',
    subtitle: '冷鋒移動快降暴雨藍色三角・暖鋒移動慢連續降雨紅色半圓',
    diagramType: 'weather-fronts',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <rect x="25" y="15" width="270" height="28" rx="5" fill="#0284c7" />
      <text x="160" y="34" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">冷鋒 vs 暖鋒 結構與符號特徵</text>
      <rect x="25" y="52" width="130" height="80" rx="5" fill="#eff6ff" stroke="#3b82f6" />
      <text x="90" y="72" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">冷鋒 (Cold Front)</text>
      <line x1="45" y1="88" x2="135" y2="88" stroke="#2563eb" stroke-width="3" />
      <polygon points="65,88 75,76 85,88" fill="#2563eb" />
      <polygon points="95,88 105,76 115,88" fill="#2563eb" />
      <text x="90" y="108" text-anchor="middle" font-size="9" fill="#1e40af">冷推暖・氣溫驟降</text>
      <text x="90" y="122" text-anchor="middle" font-size="8.5" fill="#334155">強陣風、雷雨短促</text>
      <rect x="165" y="52" width="130" height="80" rx="5" fill="#fef2f2" stroke="#ef4444" />
      <text x="230" y="72" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">暖鋒 (Warm Front)</text>
      <line x1="185" y1="88" x2="275" y2="88" stroke="#dc2626" stroke-width="3" />
      <path d="M 205 88 A 8 8 0 0 1 221 88" fill="#dc2626" />
      <path d="M 235 88 A 8 8 0 0 1 251 88" fill="#dc2626" />
      <text x="230" y="108" text-anchor="middle" font-size="9" fill="#991b1b">暖推冷・氣溫回升</text>
      <text x="230" y="122" text-anchor="middle" font-size="8.5" fill="#334155">連續性降雨、雨區廣</text>
      <rect x="25" y="140" width="270" height="32" rx="4" fill="#eff6ff" />
      <text x="160" y="160" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1e40af">臺灣梅雨：冷暖氣團勢均力敵之「滯留鋒」長期盤據造成連續降雨！</text>
    </svg>`
  },

  'kp-sci-u2-1': {
    title: '水溶液酸鹼指示劑變色階梯圖',
    subtitle: '藍變紅為酸・紅變藍為鹼・酚酞鹼性粉紅酸中無色',
    diagramType: 'chemistry-scale',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">水溶液 pH 酸鹼指示劑色彩頻譜</text>
      <rect x="25" y="38" width="85" height="70" rx="5" fill="#fee2e2" stroke="#ef4444" />
      <text x="67" y="56" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">酸性 (pH &lt; 7)</text>
      <text x="67" y="74" text-anchor="middle" font-size="9" fill="#7f1d1d">石蕊試紙變【紅】</text>
      <text x="67" y="88" text-anchor="middle" font-size="8.5" fill="#991b1b">酚酞呈【無色】</text>
      <text x="67" y="102" text-anchor="middle" font-size="8" fill="#475569">醋、檸檬酸、胃液</text>
      <rect x="117" y="38" width="85" height="70" rx="5" fill="#f0fdf4" stroke="#10b981" />
      <text x="160" y="56" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">中性 (pH ＝ 7)</text>
      <text x="160" y="74" text-anchor="middle" font-size="9" fill="#065f46">石蕊試紙【不變色】</text>
      <text x="160" y="88" text-anchor="middle" font-size="8.5" fill="#065f46">酚酞呈【無色】</text>
      <text x="160" y="102" text-anchor="middle" font-size="8" fill="#475569">純水、食鹽水、糖水</text>
      <rect x="210" y="38" width="85" height="70" rx="5" fill="#eff6ff" stroke="#3b82f6" />
      <text x="252" y="56" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">鹼性 (pH &gt; 7)</text>
      <text x="252" y="74" text-anchor="middle" font-size="9" fill="#1e40af">石蕊試紙變【藍】</text>
      <text x="252" y="88" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#dc2626">酚酞呈【粉紅色】</text>
      <text x="252" y="102" text-anchor="middle" font-size="8" fill="#475569">小蘇打水、肥皂水</text>
      <rect x="25" y="118" width="270" height="52" rx="5" fill="#f1f5f9" />
      <text x="160" y="136" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e293b">💡 導電性本質：酸性、鹼性、食鹽水皆為電解質，能導電！</text>
      <text x="160" y="155" text-anchor="middle" font-size="9" fill="#475569">非電解質：純水、糖水完全不導電！發光二極體不會亮！</text>
    </svg>`
  },

  'kp-sci-u3-1': {
    title: '奧斯特實驗與安培右手定則',
    subtitle: '通電長直導線四周產生磁場・右手四指順電流大拇指指 N 極',
    diagramType: 'physics-electromagnetism',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">電生磁：奧斯特實驗與電磁鐵磁極</text>
      <rect x="30" y="40" width="115" height="85" rx="6" fill="#eff6ff" stroke="#3b82f6" />
      <text x="87" y="58" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">奧斯特核心發現</text>
      <line x1="50" y1="85" x2="125" y2="85" stroke="#ef4444" stroke-width="3" />
      <polygon points="87,70 82,95 92,95" fill="#dc2626" />
      <text x="87" y="68" text-anchor="middle" font-size="8" fill="#dc2626">N</text>
      <text x="87" y="112" text-anchor="middle" font-size="8.5" fill="#334155">通電導線使指針偏轉</text>
      <rect x="160" y="40" width="135" height="85" rx="6" fill="#f0fdf4" stroke="#10b981" />
      <text x="227" y="58" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">安培右手螺旋定則</text>
      <text x="227" y="78" text-anchor="middle" font-size="9" fill="#065f46">四指彎曲 ➔ 電流方向</text>
      <text x="227" y="96" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">大拇指 ➔ 指向 N 極！</text>
      <text x="227" y="114" text-anchor="middle" font-size="8" fill="#475569">電流反向，磁極隨之反轉</text>
      <rect x="25" y="132" width="270" height="38" rx="5" fill="#fef08a" />
      <text x="160" y="148" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#854d0e">增強電磁鐵磁力三大法寶：</text>
      <text x="160" y="162" text-anchor="middle" font-size="9" fill="#713f12">1. 增加線圈圈數 ｜ 2. 串聯更多電池 (加大電流) ｜ 3. 放入鐵芯</text>
    </svg>`
  },

  'kp-sci-u5-1': {
    title: '熱傳播三途徑本質與保溫瓶構造',
    subtitle: '傳導固體碰撞・對流流體流動・輻射不需介質・雙層真空保溫',
    diagramType: 'thermodynamics',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">熱傳播三途徑與保溫瓶五層防線</text>
      <rect x="25" y="38" width="85" height="90" rx="5" fill="#eff6ff" stroke="#3b82f6" />
      <text x="67" y="56" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">1. 傳導</text>
      <text x="67" y="74" text-anchor="middle" font-size="8.5" fill="#334155">固體接觸傳熱</text>
      <text x="67" y="92" text-anchor="middle" font-size="8.5" fill="#334155">金屬傳導最快</text>
      <text x="67" y="112" text-anchor="middle" font-size="8" fill="#2563eb">保溫斷層：真空</text>
      <rect x="117" y="38" width="85" height="90" rx="5" fill="#f0fdf4" stroke="#10b981" />
      <text x="160" y="56" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">2. 對流</text>
      <text x="160" y="74" text-anchor="middle" font-size="8.5" fill="#334155">液體氣體循環</text>
      <text x="160" y="92" text-anchor="middle" font-size="8.5" fill="#334155">熱升冷降對流</text>
      <text x="160" y="112" text-anchor="middle" font-size="8" fill="#059669">保溫斷層：瓶塞</text>
      <rect x="210" y="38" width="85" height="90" rx="5" fill="#fee2e2" stroke="#ef4444" />
      <text x="252" y="56" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b91c1c">3. 輻射</text>
      <text x="252" y="74" text-anchor="middle" font-size="8.5" fill="#334155">電磁波直射</text>
      <text x="252" y="92" text-anchor="middle" font-size="8.5" fill="#334155">完全不需介質</text>
      <text x="252" y="112" text-anchor="middle" font-size="8" fill="#dc2626">保溫斷層：鍍銀</text>
      <rect x="25" y="136" width="270" height="35" rx="5" fill="#f1f5f9" />
      <text x="160" y="152" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1e293b">保溫瓶大招：真空層斷「傳導與對流」；內膽鍍銀反光層斷「輻射」！</text>
    </svg>`
  },

  'kp-sci-u6-1': {
    title: '槓桿原理力矩平衡與省力機械',
    subtitle: '施力 × 施力臂 ＝ 抗力 × 抗力臂・施力臂長省力費時',
    diagramType: 'mechanics',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">槓桿平衡核心定理 (力矩平衡)</text>
      <line x1="45" y1="85" x2="275" y2="85" stroke="#334155" stroke-width="4" />
      <polygon points="135,115 125,85 145,85" fill="#f59e0b" />
      <text x="135" y="132" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#d97706">支點</text>
      <rect x="55" y="65" width="26" height="20" fill="#94a3b8" />
      <text x="68" y="58" text-anchor="middle" font-size="9" font-weight="bold" fill="#475569">抗力 W</text>
      <line x1="68" y1="85" x2="135" y2="85" stroke="#ef4444" stroke-width="2" />
      <text x="100" y="80" text-anchor="middle" font-size="8.5" fill="#ef4444">抗力臂</text>
      <line x1="135" y1="85" x2="255" y2="85" stroke="#2563eb" stroke-width="2" />
      <text x="195" y="80" text-anchor="middle" font-size="8.5" fill="#2563eb">施力臂 (長)</text>
      <path d="M 255 85 L 255 110" stroke="#2563eb" stroke-width="2.5" />
      <text x="255" y="125" text-anchor="middle" font-size="9" font-weight="bold" fill="#2563eb">施力 F (小)</text>
      <rect x="25" y="138" width="270" height="34" rx="4" fill="#eff6ff" />
      <text x="160" y="152" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1e40af">省力大原則：施力臂 ＞ 抗力臂 ➔ 省力 (如開瓶器、指甲剪)</text>
      <text x="160" y="166" text-anchor="middle" font-size="8.5" fill="#64748b">費力但省時：施力臂 ＜ 抗力臂 (如筷子、鑷子、釣魚竿)</text>
    </svg>`
  },

  'kp-sci-u7-1': {
    title: '鐵生鏽化學反應條件與防鏽五防線',
    subtitle: '水分與氧氣缺一不可・酸與鹽加速腐蝕・隔絕空氣防鏽',
    diagramType: 'chemical-reaction',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">鐵生鏽三大變因與五大防護工法</text>
      <rect x="25" y="38" width="130" height="85" rx="6" fill="#fee2e2" stroke="#ef4444" />
      <text x="90" y="56" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#b91c1c">生鏽必備兩要素</text>
      <text x="90" y="76" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#991b1b">1. 水分 (濕氣)</text>
      <text x="90" y="93" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#991b1b">2. 氧氣 (空氣)</text>
      <text x="90" y="112" text-anchor="middle" font-size="8" fill="#7f1d1d">催化加速：鹽水、酸雨</text>
      <rect x="165" y="38" width="130" height="85" rx="6" fill="#ecfdf5" stroke="#10b981" />
      <text x="230" y="56" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">防鏽五大工法</text>
      <text x="230" y="74" text-anchor="middle" font-size="8.5" fill="#065f46">1. 塗油漆 / 上潤滑油</text>
      <text x="230" y="90" text-anchor="middle" font-size="8.5" fill="#065f46">2. 表面電鍍 (鍍鋅鍍錫)</text>
      <text x="230" y="106" text-anchor="middle" font-size="8.5" fill="#065f46">3. 乾燥劑 / 抽真空包裝</text>
      <rect x="25" y="132" width="270" height="38" rx="5" fill="#eff6ff" />
      <text x="160" y="148" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1e40af">本質：生鏽是緩慢氧化的化學變化，會產生紅褐色鐵鏽且不可逆！</text>
      <text x="160" y="162" text-anchor="middle" font-size="8.5" fill="#64748b">隔絕水或隔絕氧氣任一要素，鐵器即可長期保持光亮不生銹！</text>
    </svg>`
  },

  'kp-sci-u9-1': {
    title: '聲音三要素：響度、音調與音色',
    subtitle: '響度看振幅・音調看頻率 (弦緊細短高)・音色看波形',
    diagramType: 'sound-acoustics',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">聲音三要素波形全解構</text>
      <rect x="25" y="38" width="85" height="90" rx="5" fill="#eff6ff" stroke="#3b82f6" />
      <text x="67" y="56" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1d4ed8">1. 響度</text>
      <text x="67" y="74" text-anchor="middle" font-size="9" fill="#1e40af">看【振幅】</text>
      <text x="67" y="92" text-anchor="middle" font-size="8" fill="#334155">敲越大力</text>
      <text x="67" y="106" text-anchor="middle" font-size="8" fill="#334155">振幅越大越大聲</text>
      <text x="67" y="120" text-anchor="middle" font-size="7.5" fill="#64748b">單位：分貝 (dB)</text>
      <rect x="117" y="38" width="85" height="90" rx="5" fill="#f0fdf4" stroke="#10b981" />
      <text x="160" y="56" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#047857">2. 音調</text>
      <text x="160" y="74" text-anchor="middle" font-size="9" fill="#047857">看【頻率】</text>
      <text x="160" y="92" text-anchor="middle" font-size="8" fill="#334155">振動越快聲音越尖</text>
      <text x="160" y="106" text-anchor="middle" font-size="8" font-weight="bold" fill="#15803d">弦越緊/細/短</text>
      <text x="160" y="120" text-anchor="middle" font-size="7.5" fill="#64748b">音調越高！</text>
      <rect x="210" y="38" width="85" height="90" rx="5" fill="#fef08a" stroke="#ca8a04" />
      <text x="252" y="56" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#854d0e">3. 音色</text>
      <text x="252" y="74" text-anchor="middle" font-size="9" fill="#854d0e">看【波形】</text>
      <text x="252" y="92" text-anchor="middle" font-size="8" fill="#334155">發音體材質構造</text>
      <text x="252" y="106" text-anchor="middle" font-size="8" fill="#334155">小提琴 vs 鋼琴</text>
      <text x="252" y="120" text-anchor="middle" font-size="7.5" fill="#64748b">辨別樂器種類！</text>
      <rect x="25" y="136" width="270" height="35" rx="5" fill="#fee2e2" />
      <text x="160" y="152" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#b91c1c">⚠️ 介質傳播速度：固體 ＞ 液體 ＞ 氣體；真空完全無法傳播聲音！</text>
    </svg>`
  },

  'kp-sci-u10-1': {
    title: '複式光學顯微鏡光路與操作口訣',
    subtitle: '上下顛倒左右相反・物像偏哪載玻片朝同向追・放大倍率＝目鏡×物鏡',
    diagramType: 'optics-microscopy',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">複式光學顯微鏡成像光學與操作定律</text>
      <circle cx="85" cy="85" r="45" fill="#eff6ff" stroke="#3b82f6" stroke-width="2" />
      <text x="105" y="65" font-size="18" font-weight="bold" fill="#ef4444">p</text>
      <text x="85" y="145" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#1e40af">倒立放大虛像</text>
      <rect x="155" y="38" width="145" height="95" rx="5" fill="#f0fdf4" stroke="#86efac" />
      <text x="227" y="56" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d">顯微鏡操作四大定則</text>
      <text x="165" y="74" font-size="8.5" fill="#334155">1. 成像：上下顛倒、左右相反</text>
      <text x="165" y="90" font-size="8.5" font-weight="bold" fill="#166534">2. 移動：物在哪偏，片朝哪追！</text>
      <text x="165" y="106" font-size="8.5" fill="#334155">3. 倍率：目鏡倍數 × 物鏡倍數</text>
      <text x="165" y="122" font-size="8" fill="#475569">4. 換高倍：暗、小、大、少</text>
      <rect x="25" y="142" width="270" height="30" rx="4" fill="#eff6ff" />
      <text x="160" y="161" text-anchor="middle" font-size="9" font-weight="bold" fill="#2563eb">口訣速記：物在右上，玻片向右上推，物像才會回到正中央！</text>
    </svg>`
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 📖 國語文領域 (Mandarin)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'kp-man-u1-1': {
    title: 'PIRLS 閱讀理解四層次階梯圖',
    subtitle: '直接提取 ➔ 直接推論 ➔ 詮釋整合 ➔ 比較評估批判',
    diagramType: 'reading-pedagogy',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">國際 PIRLS 閱讀理解能力四層次階梯</text>
      <rect x="30" y="38" width="260" height="24" rx="4" fill="#93c5fd" />
      <text x="45" y="54" font-size="10" font-weight="bold" fill="#1e3a8a">第 4 層：比較評估批判 (40%)</text>
      <text x="210" y="54" font-size="8.5" fill="#1e3a8a">評價立場結構批判</text>
      <rect x="50" y="66" width="240" height="24" rx="4" fill="#bfdbfe" />
      <text x="65" y="82" font-size="10" font-weight="bold" fill="#1e40af">第 3 層：詮釋整合 (30%)</text>
      <text x="210" y="82" font-size="8.5" fill="#1e40af">融會歸納跨段主旨</text>
      <rect x="70" y="94" width="220" height="24" rx="4" fill="#dbeafe" />
      <text x="85" y="110" font-size="10" font-weight="bold" fill="#2563eb">第 2 層：直接推論 (20%)</text>
      <text x="210" y="110" font-size="8.5" fill="#2563eb">前後文句因果推理</text>
      <rect x="90" y="122" width="200" height="24" rx="4" fill="#eff6ff" stroke="#3b82f6" />
      <text x="105" y="138" font-size="10" font-weight="bold" fill="#1d4ed8">第 1 層：直接提取訊息 (10%)</text>
      <text x="220" y="138" font-size="8.5" fill="#1d4ed8">找字面人時地</text>
      <rect x="25" y="152" width="270" height="22" rx="4" fill="#f1f5f9" />
      <text x="160" y="167" text-anchor="middle" font-size="9" font-weight="bold" fill="#334155">高年級大考核心：以第 3、4 層次之雙文本推論與圖表轉換為命題熱區！</text>
    </svg>`
  },

  'kp-man-u2-1': {
    title: '記敘文起承轉合四段結構心智圖',
    subtitle: '起破題引導・承細節鋪陳・轉矛盾高潮・合總結昇華',
    diagramType: 'mind-map',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <rect x="25" y="15" width="270" height="28" rx="5" fill="#d97706" />
      <text x="160" y="34" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">記敘文寫作起承轉合架構</text>
      <rect x="25" y="52" width="60" height="85" rx="5" fill="#fffbeb" stroke="#fde68a" />
      <text x="55" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="#d97706">起</text>
      <text x="55" y="90" text-anchor="middle" font-size="9" fill="#92400e">破題開場</text>
      <text x="55" y="105" text-anchor="middle" font-size="8" fill="#78350f">交代時地人</text>
      <text x="55" y="120" text-anchor="middle" font-size="8" fill="#78350f">引起懸念</text>
      <rect x="95" y="52" width="60" height="85" rx="5" fill="#fffbeb" stroke="#fde68a" />
      <text x="125" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="#d97706">承</text>
      <text x="125" y="90" text-anchor="middle" font-size="9" fill="#92400e">鋪陳發展</text>
      <text x="125" y="105" text-anchor="middle" font-size="8" fill="#78350f">具體細節</text>
      <text x="125" y="120" text-anchor="middle" font-size="8" fill="#78350f">層層遞進</text>
      <rect x="165" y="52" width="60" height="85" rx="5" fill="#fee2e2" stroke="#fca5a5" />
      <text x="195" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">轉</text>
      <text x="195" y="90" text-anchor="middle" font-size="9" font-weight="bold" fill="#b91c1c">衝突高潮</text>
      <text x="195" y="105" text-anchor="middle" font-size="8" fill="#991b1b">情節反轉</text>
      <text x="195" y="120" text-anchor="middle" font-size="8" fill="#991b1b">心靈頓悟</text>
      <rect x="235" y="52" width="60" height="85" rx="5" fill="#f0fdf4" stroke="#86efac" />
      <text x="265" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">合</text>
      <text x="265" y="90" text-anchor="middle" font-size="9" fill="#166534">總結昇華</text>
      <text x="265" y="105" text-anchor="middle" font-size="8" fill="#14532d">首尾呼應</text>
      <text x="265" y="120" text-anchor="middle" font-size="8" fill="#14532d">哲理啟發</text>
      <rect x="25" y="145" width="270" height="26" rx="4" fill="#fef3c7" />
      <text x="160" y="162" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#92400e">高分密碼：善用心理描寫與環境烘托，讓「轉」成為全文靈魂！</text>
    </svg>`
  },

  'kp-man-u8-1': {
    title: '漢字六書造字心智模型演進圖',
    subtitle: '象形指事為獨體文・會意形聲為合體字・轉注假借為用字',
    diagramType: 'linguistics',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">漢字六書造字法則體系</text>
      <rect x="25" y="38" width="130" height="60" rx="5" fill="#eff6ff" stroke="#3b82f6" />
      <text x="90" y="56" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">獨體為【文】</text>
      <text x="90" y="74" text-anchor="middle" font-size="9" fill="#334155">1. 象形：畫成其物 (日/月/木)</text>
      <text x="90" y="90" text-anchor="middle" font-size="9" fill="#334155">2. 指事：加標記符 (上/下/本/刃)</text>
      <rect x="165" y="38" width="130" height="60" rx="5" fill="#ecfdf5" stroke="#10b981" />
      <text x="230" y="56" text-anchor="middle" font-size="11" font-weight="bold" fill="#047857">合體為【字】</text>
      <text x="230" y="74" text-anchor="middle" font-size="9" fill="#334155">3. 會意：合義成新 (休/森/武)</text>
      <text x="230" y="90" text-anchor="middle" font-size="9" font-weight="bold" fill="#059669">4. 形聲：形加聲 (江/河/晴 85%)</text>
      <rect x="25" y="106" width="270" height="64" rx="6" fill="#f1f5f9" />
      <text x="160" y="124" text-anchor="middle" font-size="10.5" font-weight="bold" fill="#1e293b">升中銜接常考：前四者為【造字法】，後二者為【用字法】！</text>
      <text x="160" y="142" text-anchor="middle" font-size="9" fill="#475569">5. 轉注：考老同部互相訓釋 ｜ 6. 假借：本無其字借聲托事 (令/長/自)</text>
      <text x="160" y="158" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#ef4444">段考陷阱：「休」是會意（人倚木），「江」是形聲（水形工聲）！</text>
    </svg>`
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🌍 社會領域 (Social Studies)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'kp-soc-u1-1': {
    title: '中華民國五權憲法政府制衡架構圖',
    subtitle: '行政院、立法院、司法院、考試院、監察院相互監督防弊',
    diagramType: 'political-science',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <rect x="100" y="12" width="120" height="28" rx="5" fill="#7c3aed" />
      <text x="160" y="31" text-anchor="middle" font-size="11" font-weight="bold" fill="#ffffff">總統 (國家元首)</text>
      <rect x="20" y="55" width="52" height="65" rx="4" fill="#eff6ff" stroke="#3b82f6" />
      <text x="46" y="74" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">行政院</text>
      <text x="46" y="92" text-anchor="middle" font-size="8" fill="#334155">最高行政</text>
      <text x="46" y="106" text-anchor="middle" font-size="8" fill="#334155">內閣施政</text>
      <rect x="78" y="55" width="52" height="65" rx="4" fill="#fef2f2" stroke="#ef4444" />
      <text x="104" y="74" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">立法院</text>
      <text x="104" y="92" text-anchor="middle" font-size="8" fill="#334155">三讀法律</text>
      <text x="104" y="106" text-anchor="middle" font-size="8" fill="#334155">審查預算</text>
      <rect x="134" y="55" width="52" height="65" rx="4" fill="#f0fdf4" stroke="#10b981" />
      <text x="160" y="74" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">司法院</text>
      <text x="160" y="92" text-anchor="middle" font-size="8" fill="#334155">審判法院</text>
      <text x="160" y="106" text-anchor="middle" font-size="8" fill="#047857">憲法法庭</text>
      <rect x="190" y="55" width="52" height="65" rx="4" fill="#fef08a" stroke="#ca8a04" />
      <text x="216" y="74" text-anchor="middle" font-size="10" font-weight="bold" fill="#854d0e">考試院</text>
      <text x="216" y="92" text-anchor="middle" font-size="8" fill="#334155">公務考選</text>
      <text x="216" y="106" text-anchor="middle" font-size="8" fill="#334155">銓敘保障</text>
      <rect x="246" y="55" width="52" height="65" rx="4" fill="#fdf2f8" stroke="#db2777" />
      <text x="272" y="74" text-anchor="middle" font-size="10" font-weight="bold" fill="#be185d">監察院</text>
      <text x="272" y="92" text-anchor="middle" font-size="8" fill="#334155">彈劾官員</text>
      <text x="272" y="106" text-anchor="middle" font-size="8" fill="#334155">糾舉審計</text>
      <rect x="20" y="130" width="280" height="42" rx="5" fill="#f5f3ff" stroke="#ddd6fe" />
      <text x="160" y="146" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#6d28d9">制衡關鍵：行政院長由總統任命；行政院向立法院負責並接受質詢！</text>
      <text x="160" y="162" text-anchor="middle" font-size="8.5" fill="#5b21b6">立法院通過法律 ➔ 司法院審查是否違憲；若公務員失職 ➔ 監察院糾舉彈劾！</text>
    </svg>`
  },

  'kp-soc-u5-1': {
    title: '法律位階金字塔與兒少法益階梯',
    subtitle: '憲法 ＞ 法律 ＞ 命令・下位階法規牴觸上位階者無效',
    diagramType: 'legal-hierarchy',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">我國法律位階金字塔 (階梯原則)</text>
      <polygon points="160,35 110,75 210,75" fill="#ef4444" />
      <text x="160" y="60" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">憲法 (最高)</text>
      <polygon points="110,78 70,118 250,118 210,78" fill="#3b82f6" />
      <text x="160" y="100" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">法律 (立法院三讀通過)</text>
      <text x="160" y="112" text-anchor="middle" font-size="8" fill="#dbeafe">法、律、條例、通則</text>
      <polygon points="70,121 30,158 290,158 250,121" fill="#10b981" />
      <text x="160" y="138" text-anchor="middle" font-size="10" font-weight="bold" fill="#ffffff">命令 (各行政部會機關訂定)</text>
      <text x="160" y="152" text-anchor="middle" font-size="8" fill="#d1fae5">規程、規則、細則、辦法、標準</text>
      <text x="160" y="172" text-anchor="middle" font-size="9" font-weight="bold" fill="#ef4444">金律：下位法牴觸上位法者【無效】！法律牴觸憲法者【無效】！</text>
    </svg>`
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🇬🇧 英語文領域 (English)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'kp-eng-u1-1': {
    title: '時間介系詞 (at/on/in) 與頻率副詞階梯',
    subtitle: 'at 點・on 天・in 期間・always(100%) 到 never(0%)',
    diagramType: 'grammar-ladder',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <rect x="25" y="15" width="270" height="28" rx="5" fill="#0284c7" />
      <text x="160" y="34" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">時間介系詞三大黃金領域</text>
      <rect x="25" y="52" width="85" height="60" rx="5" fill="#eff6ff" stroke="#38bdf8" />
      <text x="67" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#0284c7">at (精確點)</text>
      <text x="67" y="86" text-anchor="middle" font-size="8.5" fill="#334155">at 7:30</text>
      <text x="67" y="100" text-anchor="middle" font-size="8.5" fill="#334155">at noon / night</text>
      <rect x="117" y="52" width="85" height="60" rx="5" fill="#f0fdf4" stroke="#4ade80" />
      <text x="160" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">on (特定天)</text>
      <text x="160" y="86" text-anchor="middle" font-size="8.5" fill="#334155">on Monday</text>
      <text x="160" y="100" text-anchor="middle" font-size="8.5" fill="#334155">on May 1st</text>
      <rect x="210" y="52" width="85" height="60" rx="5" fill="#fef08a" stroke="#facc15" />
      <text x="252" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#ca8a04">in (長時間段)</text>
      <text x="252" y="86" text-anchor="middle" font-size="8.5" fill="#334155">in the morning</text>
      <text x="252" y="100" text-anchor="middle" font-size="8.5" fill="#334155">in July / 2026</text>
      <rect x="25" y="122" width="270" height="48" rx="5" fill="#f1f5f9" />
      <text x="160" y="139" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0369a1">頻率副詞位置：be 動詞之後、一般動詞之前！</text>
      <text x="160" y="156" text-anchor="middle" font-size="8.5" fill="#475569">He is always happy. ｜ She usually walks to school.</text>
    </svg>`
  },

  'kp-eng-u2-1': {
    title: '過去簡單式時間軸與不規則動詞變化',
    subtitle: '過去特定時點已結束・yesterday/ago・did/didn\'t 打回原形',
    diagramType: 'timeline',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="24" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">Past Tense 過去式時態時間軸線</text>
      <line x1="40" y1="65" x2="280" y2="65" stroke="#94a3b8" stroke-width="3" />
      <polygon points="280,60 290,65 280,70" fill="#94a3b8" />
      <circle cx="90" cy="65" r="7" fill="#ef4444" />
      <text x="90" y="52" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ef4444">PAST (過去)</text>
      <text x="90" y="90" text-anchor="middle" font-size="9" fill="#334155">yesterday / ago</text>
      <circle cx="240" cy="65" r="7" fill="#3b82f6" />
      <text x="240" y="52" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#3b82f6">NOW (現在)</text>
      <text x="240" y="90" text-anchor="middle" font-size="9" fill="#334155">today / now</text>
      <rect x="25" y="105" width="270" height="65" rx="6" fill="#eff6ff" stroke="#bfdbfe" />
      <text x="35" y="122" font-size="9.5" font-weight="bold" fill="#1e40af">規則動詞加 -ed：play ➔ played ｜ watch ➔ watched</text>
      <text x="35" y="139" font-size="9.5" font-weight="bold" fill="#1e40af">高頻不規則變化：go ➔ went ｜ see ➔ saw ｜ eat ➔ ate</text>
      <text x="35" y="156" font-size="9" font-weight="bold" fill="#dc2626">⚠️ 大助動詞法則：Did you go...? / I didn&apos;t see... (動詞打回原形！)</text>
    </svg>`
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🎨 藝術領域 (Arts)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'kp-art-u1-1': {
    title: '十二色相環與對比互補色美學圖',
    subtitle: '三原色紅黃藍・對角 180° 互補色視覺張力最強',
    diagramType: 'color-wheel',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <circle cx="85" cy="90" r="50" fill="none" stroke="#e2e8f0" stroke-width="12" />
      <circle cx="85" cy="40" r="10" fill="#ef4444" />
      <text x="85" y="44" text-anchor="middle" font-size="8" fill="#ffffff" font-weight="bold">紅</text>
      <circle cx="85" cy="140" r="10" fill="#22c55e" />
      <text x="85" y="144" text-anchor="middle" font-size="8" fill="#ffffff" font-weight="bold">綠</text>
      <line x1="85" y1="50" x2="85" y2="130" stroke="#64748b" stroke-dasharray="2,2" stroke-width="1.5" />
      <circle cx="35" cy="90" r="10" fill="#3b82f6" />
      <text x="35" y="94" text-anchor="middle" font-size="8" fill="#ffffff" font-weight="bold">藍</text>
      <circle cx="135" cy="90" r="10" fill="#f97316" />
      <text x="135" y="94" text-anchor="middle" font-size="8" fill="#ffffff" font-weight="bold">橙</text>
      <line x1="45" y1="90" x2="125" y2="90" stroke="#64748b" stroke-dasharray="2,2" stroke-width="1.5" />
      <rect x="160" y="32" width="140" height="115" rx="6" fill="#fdf2f8" stroke="#fbcfe8" />
      <text x="230" y="52" text-anchor="middle" font-size="11" font-weight="bold" fill="#be185d">色彩三大屬性</text>
      <text x="170" y="72" font-size="9" fill="#831843">1. 色相：色彩名相 (紅/黃)</text>
      <text x="170" y="89" font-size="9" fill="#831843">2. 明度：明暗程度 (加白/黑)</text>
      <text x="170" y="106" font-size="9" fill="#831843">3. 彩度：純度飽和度</text>
      <text x="170" y="126" font-size="8.5" font-weight="bold" fill="#be185d">180° 對比：紅綠、藍橙、黃紫</text>
      <text x="160" y="165" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#475569">美學法則：互補色並置視覺最搶眼；主色調搭配少量對比色最具設計感！</text>
    </svg>`
  },

  'kp-art-u2-1': {
    title: '音樂五線譜拍號與音符時值樹',
    subtitle: '全音符 4 拍 ➔ 二分音符 2 拍 ➔ 四分音符 1 拍 ➔ 八分音符 半拍',
    diagramType: 'music-theory',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <rect x="25" y="15" width="270" height="28" rx="5" fill="#ec4899" />
      <text x="160" y="34" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">音符時值幾何二叉樹 (Note Duration)</text>
      <rect x="125" y="52" width="70" height="22" rx="4" fill="#fbcfe8" />
      <text x="160" y="67" text-anchor="middle" font-size="10" font-weight="bold" fill="#831843">全音符 (4 拍)</text>
      <line x1="140" y1="74" x2="90" y2="90" stroke="#db2777" stroke-width="1.5" />
      <line x1="180" y1="74" x2="230" y2="90" stroke="#db2777" stroke-width="1.5" />
      <rect x="55" y="90" width="70" height="22" rx="4" fill="#fce7f3" />
      <text x="90" y="105" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#9d174d">二分音符 (2拍)</text>
      <rect x="195" y="90" width="70" height="22" rx="4" fill="#fce7f3" />
      <text x="230" y="105" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#9d174d">二分音符 (2拍)</text>
      <line x1="75" y1="112" x2="50" y2="128" stroke="#db2777" />
      <line x1="105" y1="112" x2="130" y2="128" stroke="#db2777" />
      <line x1="215" y1="112" x2="190" y2="128" stroke="#db2777" />
      <line x1="245" y1="112" x2="270" y2="128" stroke="#db2777" />
      <rect x="25" y="128" width="50" height="18" rx="3" fill="#fdf2f8" stroke="#f472b6" />
      <text x="50" y="141" text-anchor="middle" font-size="8" fill="#9d174d">四分(1拍)</text>
      <rect x="105" y="128" width="50" height="18" rx="3" fill="#fdf2f8" stroke="#f472b6" />
      <text x="130" y="141" text-anchor="middle" font-size="8" fill="#9d174d">四分(1拍)</text>
      <rect x="165" y="128" width="50" height="18" rx="3" fill="#fdf2f8" stroke="#f472b6" />
      <text x="190" y="141" text-anchor="middle" font-size="8" fill="#9d174d">四分(1拍)</text>
      <rect x="245" y="128" width="50" height="18" rx="3" fill="#fdf2f8" stroke="#f472b6" />
      <text x="270" y="141" text-anchor="middle" font-size="8" fill="#9d174d">四分(1拍)</text>
      <text x="160" y="168" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#475569">💡 附點小精靈：附點音符 ＝ 原音符時值 ＋ 一半時值 (如附點二分音符＝2＋1＝3拍)</text>
    </svg>`
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 💪 健康與體育領域 (PE & Health) - 醫學、抗衰老、體適能、增肌減脂、人體系統
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'kp-pe-u1-1': {
    title: '青春期內分泌生長軸與荷爾蒙分泌圖',
    subtitle: '下視丘 ➔ 腦下垂體 ➔ 生長激素(GH)與性腺激素・夜間深睡分泌高峰',
    diagramType: 'endocrine-axis',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <rect x="20" y="14" width="280" height="26" rx="5" fill="#f43f5e" />
      <text x="160" y="31" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">青春期內分泌 HPG 生長軸線與第二性徵啟動</text>
      <rect x="25" y="48" width="80" height="60" rx="5" fill="#ffe4e6" stroke="#fb7185" />
      <text x="65" y="66" text-anchor="middle" font-size="10" font-weight="bold" fill="#be123c">1. 下視丘中樞</text>
      <text x="65" y="82" text-anchor="middle" font-size="8.5" fill="#9f1239">釋放 GnRH 激素</text>
      <text x="65" y="96" text-anchor="middle" font-size="7.5" fill="#881337">生理時鐘感應</text>
      <line x1="105" y1="78" x2="120" y2="78" stroke="#f43f5e" stroke-width="2" />
      <polygon points="120,74 128,78 120,82" fill="#f43f5e" />
      <rect x="128" y="48" width="80" height="60" rx="5" fill="#e0e7ff" stroke="#818cf8" />
      <text x="168" y="66" text-anchor="middle" font-size="10" font-weight="bold" fill="#3730a3">2. 腦下垂體</text>
      <text x="168" y="82" text-anchor="middle" font-size="8.5" fill="#4338ca">分泌 GH (生長素)</text>
      <text x="168" y="96" text-anchor="middle" font-size="7.5" fill="#312e81">深層睡眠釋放 70%</text>
      <line x1="208" y1="78" x2="223" y2="78" stroke="#6366f1" stroke-width="2" />
      <polygon points="223,74 231,78 223,82" fill="#6366f1" />
      <rect x="231" y="48" width="70" height="60" rx="5" fill="#dcfce7" stroke="#4ade80" />
      <text x="266" y="66" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">3. 靶器官靶腺</text>
      <text x="266" y="82" text-anchor="middle" font-size="8.5" fill="#166534">骨骼/肌肉生長</text>
      <text x="266" y="96" text-anchor="middle" font-size="7.5" fill="#14532d">第二性徵成熟</text>
      <rect x="20" y="118" width="280" height="52" rx="5" fill="#f1f5f9" stroke="#cbd5e1" />
      <text x="160" y="134" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e293b">💡 醫學實證：生長激素在每晚 22:00 ~ 02:00 深睡期達到脈衝高峰！</text>
      <text x="160" y="149" text-anchor="middle" font-size="8.5" fill="#475569">充足睡眠 8.5~9 小時 ＋ 充足跳躍伸展 ＝ 骨骼生長板極大化縱向發育</text>
      <text x="160" y="162" text-anchor="middle" font-size="8" font-weight="bold" fill="#e11d48">避雷警訊：高糖含糖手搖飲會刺激胰島素急升，直接抑制生長激素分泌！</text>
    </svg>`
  },

  'kp-pe-u2-1': {
    title: '我的餐盤六大類與三大宏量營養素代謝圖',
    subtitle: '碳水4kcal・蛋白質4kcal・脂肪9kcal・膳食纖維滋養腸道微生態',
    diagramType: 'nutrition-metabolism',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <rect x="20" y="12" width="280" height="26" rx="5" fill="#16a34a" />
      <text x="160" y="29" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">三大宏量營養素代謝與「我的餐盤」六口訣</text>
      <rect x="20" y="44" width="88" height="75" rx="5" fill="#eff6ff" stroke="#93c5fd" />
      <text x="64" y="60" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">優質蛋白質 (4kcal)</text>
      <text x="64" y="74" text-anchor="middle" font-size="8.5" fill="#1e40af">豆魚蛋肉類</text>
      <text x="64" y="88" text-anchor="middle" font-size="8" fill="#334155">提供必需胺基酸</text>
      <text x="64" y="102" text-anchor="middle" font-size="8" font-weight="bold" fill="#2563eb">掌心大小份量</text>
      <text x="64" y="113" text-anchor="middle" font-size="7.5" fill="#64748b">肌肉免疫合成</text>
      <rect x="116" y="44" width="88" height="75" rx="5" fill="#fefce8" stroke="#fde047" />
      <text x="160" y="60" text-anchor="middle" font-size="10" font-weight="bold" fill="#a16207">全穀複合碳水 (4kcal)</text>
      <text x="160" y="74" text-anchor="middle" font-size="8.5" fill="#854d0e">糙米/燕麥/地瓜</text>
      <text x="160" y="88" text-anchor="middle" font-size="8" fill="#334155">大腦紅血球首選</text>
      <text x="160" y="102" text-anchor="middle" font-size="8" font-weight="bold" fill="#ca8a04">飯跟蔬菜一樣多</text>
      <text x="160" y="113" text-anchor="middle" font-size="7.5" fill="#64748b">緩釋肌糖原</text>
      <rect x="212" y="44" width="88" height="75" rx="5" fill="#f0fdf4" stroke="#86efac" />
      <text x="256" y="60" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">蔬菜水果纖維 (低卡)</text>
      <text x="256" y="74" text-anchor="middle" font-size="8.5" fill="#166534">彩虹植化素多酚</text>
      <text x="256" y="88" text-anchor="middle" font-size="8" fill="#334155">菜比水果多一點</text>
      <text x="256" y="102" text-anchor="middle" font-size="8" font-weight="bold" fill="#16a34a">每餐水果拳頭大</text>
      <text x="256" y="113" text-anchor="middle" font-size="7.5" fill="#64748b">養護腸道益生菌</text>
      <rect x="20" y="126" width="280" height="46" rx="5" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="160" y="141" text-anchor="middle" font-size="9" font-weight="bold" fill="#334155">口訣：每天早晚一杯奶、每餐水果拳頭大、菜比水果多一點、</text>
      <text x="160" y="154" text-anchor="middle" font-size="9" font-weight="bold" fill="#334155">飯跟蔬菜一樣多、豆魚蛋肉一掌心、堅果種子一茶匙！</text>
      <text x="160" y="166" text-anchor="middle" font-size="8" font-weight="bold" fill="#16a34a">腸道微生態：70% 免疫系統在腸道，水溶性纖維發酵生成短鏈脂肪酸抗炎抗衰老！</text>
    </svg>`
  },

  'kp-pe-u2-2': {
    title: '升糖指數 (GI) 與胰島素燃脂/儲脂天平模型',
    subtitle: '高GI暴起暴落囤積內臟脂肪・低GI平穩胰島素啟動升糖素分解脂肪',
    diagramType: 'insulin-fat-metabolism',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <rect x="20" y="12" width="280" height="26" rx="5" fill="#ea580c" />
      <text x="160" y="29" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">血糖震盪、胰島素分泌與脂肪細胞代謝天平</text>
      <rect x="25" y="46" width="130" height="74" rx="5" fill="#fef2f2" stroke="#fca5a5" />
      <text x="90" y="62" text-anchor="middle" font-size="10" font-weight="bold" fill="#dc2626">⚠️ 高 GI 飲食 (精緻糖/油炸)</text>
      <text x="90" y="76" text-anchor="middle" font-size="8.5" fill="#991b1b">血糖瞬間狂飆 (Spike)</text>
      <text x="90" y="90" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#b91c1c">胰島素大量湧出 ➔ 儲脂模式</text>
      <text x="90" y="104" text-anchor="middle" font-size="8" fill="#7f1d1d">鎖住脂肪分解酶，囤積內臟脂肪</text>
      <text x="90" y="115" text-anchor="middle" font-size="7.5" fill="#991b1b">2小時後低血糖引發昏睡暴食</text>
      <rect x="165" y="46" width="130" height="74" rx="5" fill="#f0fdf4" stroke="#86efac" />
      <text x="230" y="62" text-anchor="middle" font-size="10" font-weight="bold" fill="#16a34a">✅ 原型低 GI 飲食 (高纖/優質蛋白)</text>
      <text x="230" y="76" text-anchor="middle" font-size="8.5" fill="#15803d">血糖穩定緩釋平原</text>
      <text x="230" y="90" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#047857">胰島素低位 ➔ 升糖素工作</text>
      <text x="230" y="104" text-anchor="middle" font-size="8" fill="#065f46">脂肪酶活性開啟，燃燒游離脂肪酸</text>
      <text x="230" y="115" text-anchor="middle" font-size="7.5" fill="#047857">精神高度集中，飽足感長達 4~5 小時</text>
      <rect x="20" y="128" width="280" height="44" rx="5" fill="#eff6ff" stroke="#bfdbfe" />
      <text x="160" y="143" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">生理本質：胰島素是「合成儲存荷爾蒙」，升糖素是「分解燃脂荷爾蒙」！</text>
      <text x="160" y="157" text-anchor="middle" font-size="8.5" fill="#334155">只要不喝含糖飲料、以水代糖，就能讓身體全天大部分時間處於高效燃脂狀態！</text>
    </svg>`
  },

  'kp-pe-u3-1': {
    title: '成人 CPR＋AED 急救黃金口訣流程圖',
    subtitle: '叫叫CD・胸外按壓 5~6cm・頻率 100~120次/分・電擊除顫',
    diagramType: 'emergency-first-aid',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <rect x="25" y="15" width="270" height="28" rx="5" fill="#ef4444" />
      <text x="160" y="34" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">成人生命之鏈 CPR＋AED 叫叫 CD 救命步驟</text>
      <rect x="20" y="52" width="65" height="75" rx="5" fill="#fee2e2" stroke="#f87171" />
      <text x="52" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">1. 叫</text>
      <text x="52" y="88" text-anchor="middle" font-size="8.5" fill="#991b1b">拍肩確認</text>
      <text x="52" y="104" text-anchor="middle" font-size="8" fill="#7f1d1d">意識與正常呼吸</text>
      <rect x="92" y="52" width="65" height="75" rx="5" fill="#fee2e2" stroke="#f87171" />
      <text x="124" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">2. 叫</text>
      <text x="124" y="88" text-anchor="middle" font-size="8.5" fill="#991b1b">指定旁人</text>
      <text x="124" y="104" text-anchor="middle" font-size="8" fill="#7f1d1d">打 119 與拿 AED</text>
      <rect x="164" y="52" width="65" height="75" rx="5" fill="#eff6ff" stroke="#60a5fa" />
      <text x="196" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">3. C (壓)</text>
      <text x="196" y="88" text-anchor="middle" font-size="8.5" fill="#1e40af">胸外胸骨按壓</text>
      <text x="196" y="104" text-anchor="middle" font-size="8" font-weight="bold" fill="#1e40af">100~120次/分</text>
      <text x="196" y="118" text-anchor="middle" font-size="7.5" fill="#1e3a8a">深度 5~6 cm</text>
      <rect x="236" y="52" width="65" height="75" rx="5" fill="#fef08a" stroke="#eab308" />
      <text x="268" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#854d0e">4. D (電)</text>
      <text x="268" y="88" text-anchor="middle" font-size="8.5" fill="#854d0e">開機貼片</text>
      <text x="268" y="104" text-anchor="middle" font-size="8" fill="#713f12">聽語音指示</text>
      <text x="268" y="118" text-anchor="middle" font-size="7.5" font-weight="bold" fill="#854d0e">分析電擊</text>
      <rect x="25" y="136" width="270" height="34" rx="4" fill="#fef2f2" stroke="#fca5a5" />
      <text x="160" y="152" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#dc2626">胸外按壓口訣：快快壓 (100~120/分)、用力壓 (5~6cm)、胸廓回彈、中斷不超過10秒！</text>
    </svg>`
  },

  'kp-pe-u4-1': {
    title: '體適能五要素與漸進式超負荷增肌生理圖',
    subtitle: '機械張力 ➔ 肌纖維微損傷 ➔ 蛋白質合成(MPS) ➔ 超量補償肌肉成長',
    diagramType: 'hypertrophy-mechanics',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <rect x="20" y="12" width="280" height="26" rx="5" fill="#2563eb" />
      <text x="160" y="29" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">漸進式超負荷 (Progressive Overload) 與肌肥大機制</text>
      <rect x="20" y="46" width="65" height="70" rx="5" fill="#eff6ff" stroke="#93c5fd" />
      <text x="52" y="63" text-anchor="middle" font-size="9" font-weight="bold" fill="#1d4ed8">1. 阻力刺激</text>
      <text x="52" y="78" text-anchor="middle" font-size="8" fill="#1e40af">機械張力刺激</text>
      <text x="52" y="91" text-anchor="middle" font-size="7.5" fill="#334155">3~4組 8~12下</text>
      <text x="52" y="104" text-anchor="middle" font-size="7.5" fill="#64748b">自覺疲勞RPE8</text>
      <line x1="85" y1="81" x2="98" y2="81" stroke="#3b82f6" stroke-width="2" />
      <polygon points="98,77 106,81 98,85" fill="#3b82f6" />
      <rect x="106" y="46" width="65" height="70" rx="5" fill="#fef2f2" stroke="#fca5a5" />
      <text x="138" y="63" text-anchor="middle" font-size="9" font-weight="bold" fill="#b91c1c">2. 微損傷訊號</text>
      <text x="138" y="78" text-anchor="middle" font-size="8" fill="#991b1b">肌原纖維微撕裂</text>
      <text x="138" y="91" text-anchor="middle" font-size="7.5" fill="#334155">啟動發炎修復</text>
      <text x="138" y="104" text-anchor="middle" font-size="7.5" fill="#64748b">釋放肌動蛋白</text>
      <line x1="171" y1="81" x2="184" y2="81" stroke="#ef4444" stroke-width="2" />
      <polygon points="184,77 192,81 184,85" fill="#ef4444" />
      <rect x="192" y="46" width="65" height="70" rx="5" fill="#f0fdf4" stroke="#86efac" />
      <text x="224" y="63" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">3. 蛋白合成</text>
      <text x="224" y="78" text-anchor="middle" font-size="8" fill="#166534">白胺酸 2.5g 觸發</text>
      <text x="224" y="91" text-anchor="middle" font-size="7.5" fill="#334155">總量 1.5g/kg</text>
      <text x="224" y="104" text-anchor="middle" font-size="7.5" fill="#64748b">衛星細胞修復</text>
      <line x1="257" y1="81" x2="270" y2="81" stroke="#10b981" stroke-width="2" />
      <polygon points="270,77 278,81 270,85" fill="#10b981" />
      <rect x="278" y="46" width="32" height="70" rx="4" fill="#f5f3ff" stroke="#c4b5fd" />
      <text x="294" y="75" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#6d28d9">超量</text>
      <text x="294" y="92" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#6d28d9">補償</text>
      <rect x="20" y="124" width="280" height="48" rx="5" fill="#f8fafc" stroke="#cbd5e1" />
      <text x="160" y="139" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">超負荷金律：每 1~2 週略微增加重量、次數或縮短組間休息，強迫肌肉適應變強！</text>
      <text x="160" y="153" text-anchor="middle" font-size="8.5" fill="#334155">骨骼肌生理水槽：全身骨骼肌佔體重 40%，更是吸收血糖最大緩衝池，終身防三高！</text>
      <text x="160" y="165" text-anchor="middle" font-size="8" font-weight="bold" fill="#047857">五大體適能：心肺耐力、肌力、肌耐力、柔軟度、身體組成，缺一不可！</text>
    </svg>`
  },

  'kp-pe-u4-2': {
    title: 'Zone 2 有氧心率與粒線體自噬抗衰老圖',
    subtitle: '最大心率 60~70%・粒線體生物合成・諾貝爾獎細胞自噬清廢機制',
    diagramType: 'zone2-mitochondria',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <rect x="20" y="12" width="280" height="26" rx="5" fill="#0891b2" />
      <text x="160" y="29" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">Zone 2 有氧耐力區間與細胞抗衰老生化引擎</text>
      <rect x="25" y="46" width="130" height="74" rx="5" fill="#ecfeff" stroke="#a5f3fc" />
      <text x="90" y="62" text-anchor="middle" font-size="10" font-weight="bold" fill="#0e7490">⚡ Zone 2 生理特徵 (最大心率60~70%)</text>
      <text x="90" y="76" text-anchor="middle" font-size="8.5" fill="#155e75">可順暢說話但無法唱歌的強度</text>
      <text x="90" y="90" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#0369a1">脂肪酸氧化供能比例達最高 70%</text>
      <text x="90" y="104" text-anchor="middle" font-size="8" fill="#164e63">乳酸濃度平穩保持在 2.0 mmol/L 以下</text>
      <text x="90" y="115" text-anchor="middle" font-size="7.5" fill="#0891b2">每週累積 150~180 分鐘最佳</text>
      <rect x="165" y="46" width="130" height="74" rx="5" fill="#f0fdf4" stroke="#86efac" />
      <text x="230" y="62" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">🧬 粒線體與細胞自噬 (Autophagy)</text>
      <text x="230" y="76" text-anchor="middle" font-size="8.5" fill="#166534">刺激 PGC-1α 促使粒線體增生分裂</text>
      <text x="230" y="90" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#047857">溶酶體清除變異蛋白質與老化碎片</text>
      <text x="230" y="104" text-anchor="middle" font-size="8" fill="#065f46">微血管床密度激增 30%，心肌強壯</text>
      <text x="230" y="115" text-anchor="middle" font-size="7.5" fill="#15803d">逆轉生物年齡，提升 VO2 Max 壽命指標</text>
      <rect x="20" y="128" width="280" height="44" rx="5" fill="#f1f5f9" stroke="#cbd5e1" />
      <text x="160" y="143" text-anchor="middle" font-size="9" font-weight="bold" fill="#0e7490">醫學精華：Zone 2 運動是給全身「細胞發電機(粒線體)」洗澡升級的最佳處方！</text>
      <text x="160" y="157" text-anchor="middle" font-size="8.5" fill="#475569">慢跑、快走、游泳或自行車，維持微喘但能聊天的速度，就是最頂級的抗衰老仙丹！</text>
    </svg>`
  },

  'kp-pe-u4-3': {
    title: 'TDEE 每日總能量消耗與科學減脂能量收支圖',
    subtitle: 'BMR 70% + NEAT 15% + EAT 5% + TEF 10%・黃金赤字 300~500kcal 保肌減脂',
    diagramType: 'tdee-energy-balance',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <rect x="20" y="12" width="280" height="26" rx="5" fill="#4f46e5" />
      <text x="160" y="29" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">TDEE 每日能量支出結構與減脂能量守恆定律</text>
      <rect x="25" y="46" width="60" height="74" rx="4" fill="#dbeafe" stroke="#93c5fd" />
      <text x="55" y="62" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#1e40af">BMR 基礎代謝</text>
      <text x="55" y="78" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">60~70%</text>
      <text x="55" y="94" text-anchor="middle" font-size="7.5" fill="#334155">心跳呼吸體溫</text>
      <text x="55" y="108" text-anchor="middle" font-size="7.5" fill="#64748b">絕不可節食</text>
      <rect x="93" y="46" width="60" height="74" rx="4" fill="#dcfce7" stroke="#86efac" />
      <text x="123" y="62" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#15803d">NEAT 日常活動</text>
      <text x="123" y="78" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">15~20%</text>
      <text x="123" y="94" text-anchor="middle" font-size="7.5" fill="#334155">走路爬樓梯做家事</text>
      <text x="123" y="108" text-anchor="middle" font-size="7.5" fill="#15803d">減脂最大推手</text>
      <rect x="161" y="46" width="60" height="74" rx="4" fill="#fef9c3" stroke="#fde047" />
      <text x="191" y="62" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#a16207">TEF 攝食熱效應</text>
      <text x="191" y="78" text-anchor="middle" font-size="11" font-weight="bold" fill="#ca8a04">8~10%</text>
      <text x="191" y="94" text-anchor="middle" font-size="7.5" fill="#334155">消化食物耗能</text>
      <text x="191" y="108" text-anchor="middle" font-size="7.5" fill="#854d0e">蛋白質熱效最高</text>
      <rect x="229" y="46" width="65" height="74" rx="4" fill="#fae8ff" stroke="#e879f9" />
      <text x="261" y="62" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#86198f">EAT 運動訓練</text>
      <text x="261" y="78" text-anchor="middle" font-size="11" font-weight="bold" fill="#a21caf">5~10%</text>
      <text x="261" y="94" text-anchor="middle" font-size="7.5" fill="#334155">重訓跑步球類</text>
      <text x="261" y="108" text-anchor="middle" font-size="7.5" fill="#701a75">強化心肺骨骼肌</text>
      <rect x="20" y="128" width="280" height="44" rx="5" fill="#fef2f2" stroke="#fca5a5" />
      <text x="160" y="143" text-anchor="middle" font-size="9" font-weight="bold" fill="#b91c1c">能量方程式：熱量赤字 ＝ TDEE － 飲食攝取 ＝ 每日 300~500 kcal (黃金減脂期)</text>
      <text x="160" y="157" text-anchor="middle" font-size="8.5" fill="#991b1b">⚠️ 致命地雷：極端節食低於 BMR 會導致肌肉流失、甲狀腺功能下降、停經與代謝崩潰！</text>
    </svg>`
  },

  'kp-pe-u6-1': {
    title: '壓力皮質醇調節與大腦睡眠膠淋巴排毒圖',
    subtitle: '慢性壓力升高皮質醇損害海馬迴・深層慢波睡眠啟動膠淋巴清空大腦垃圾',
    diagramType: 'glymphatic-cortisol',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <rect x="20" y="12" width="280" height="26" rx="5" fill="#7c3aed" />
      <text x="160" y="29" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#ffffff">自律神經平衡、壓力皮質醇與大腦夜間排毒機制</text>
      <rect x="25" y="46" width="130" height="74" rx="5" fill="#fef2f2" stroke="#fca5a5" />
      <text x="90" y="62" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">⚠️ 慢性壓力失衡 (交感過度)</text>
      <text x="90" y="76" text-anchor="middle" font-size="8.5" fill="#991b1b">腎上腺皮質醇持續高企</text>
      <text x="90" y="90" text-anchor="middle" font-size="8.5" fill="#334155">海馬迴神經元微萎縮</text>
      <text x="90" y="104" text-anchor="middle" font-size="8" fill="#7f1d1d">專注力渙散、腹部脂肪囤積</text>
      <text x="90" y="115" text-anchor="middle" font-size="7.5" fill="#b91c1c">免疫力低落易感冒</text>
      <rect x="165" y="46" width="130" height="74" rx="5" fill="#f5f3ff" stroke="#c4b5fd" />
      <text x="230" y="62" text-anchor="middle" font-size="10" font-weight="bold" fill="#6d28d9">🧠 睡眠膠淋巴系統 (Glymphatic)</text>
      <text x="230" y="76" text-anchor="middle" font-size="8.5" fill="#5b21b6">第 3~4 期深層慢波睡眠啟動</text>
      <text x="230" y="90" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#4c1d95">腦細胞間隙擴大 60%</text>
      <text x="230" y="104" text-anchor="middle" font-size="8" fill="#6d28d9">腦脊髓液沖洗 β-澱粉樣蛋白廢物</text>
      <text x="230" y="115" text-anchor="middle" font-size="7.5" fill="#4c1d95">重塑記憶突觸，大腦煥然一新</text>
      <rect x="20" y="128" width="280" height="44" rx="5" fill="#f0fdf4" stroke="#86efac" />
      <text x="160" y="143" text-anchor="middle" font-size="9" font-weight="bold" fill="#15803d">抗壓秘訣：正念 4-7-8 腹式呼吸 ➔ 刺激迷走神經 ➔ 啟動副交感神經平撫壓力！</text>
      <text x="160" y="157" text-anchor="middle" font-size="8.5" fill="#166534">睡前 1 小時遠離藍光螢幕，維持規律晝夜節律 (Circadian Rhythm)，守護一生大腦健康！</text>
    </svg>`
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🌱 綜合活動領域 (Integrative)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'kp-comp-u1-1': {
    title: '艾森豪時間管理四象限決策矩陣',
    subtitle: '重要與緊急二維坐標・優先深耕「第二象限：重要但不緊急」',
    diagramType: 'matrix-chart',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="20" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">艾森豪時間管理四象限矩陣 (Eisenhower Matrix)</text>
      <rect x="35" y="32" width="120" height="60" rx="5" fill="#fee2e2" stroke="#f87171" />
      <text x="95" y="48" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#b91c1c">I. 緊急 且 重要</text>
      <text x="95" y="66" text-anchor="middle" font-size="8.5" fill="#991b1b">明天考試、火警應變</text>
      <text x="95" y="82" text-anchor="middle" font-size="8" font-weight="bold" fill="#7f1d1d">【立即去做 Do It Now】</text>
      <rect x="165" y="32" width="120" height="60" rx="5" fill="#ecfdf5" stroke="#34d399" stroke-width="2" />
      <text x="225" y="48" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#047857">★ II. 不緊急 但 重要</text>
      <text x="225" y="66" text-anchor="middle" font-size="8.5" font-weight="bold" fill="#065f46">健康運動、先修學習、深度閱讀</text>
      <text x="225" y="82" text-anchor="middle" font-size="8" font-weight="bold" fill="#065f46">【精準規劃 Plan It】人生成就關鍵</text>
      <rect x="35" y="98" width="120" height="55" rx="5" fill="#fef08a" stroke="#facc15" />
      <text x="95" y="114" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#854d0e">III. 緊急 但 不重要</text>
      <text x="95" y="130" text-anchor="middle" font-size="8" fill="#713f12">通訊軟體叮咚、插話打擾</text>
      <text x="95" y="144" text-anchor="middle" font-size="8" fill="#713f12">【委託處理 Delegate】</text>
      <rect x="165" y="98" width="120" height="55" rx="5" fill="#f1f5f9" stroke="#cbd5e1" />
      <text x="225" y="114" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#64748b">IV. 不緊急 且 不重要</text>
      <text x="225" y="130" text-anchor="middle" font-size="8" fill="#475569">無意識滑短影音、熬夜打電動</text>
      <text x="225" y="144" text-anchor="middle" font-size="8" fill="#dc2626">【果斷戒除 Eliminate】</text>
      <text x="160" y="168" text-anchor="middle" font-size="9" font-weight="bold" fill="#047857">自律心法：把 70% 精力投入第二象限，擺脫天天救火的焦慮惡性循環！</text>
    </svg>`
  },

  'kp-comp-u2-1': {
    title: '高 EQ「我訊息」溝通黃金公式',
    subtitle: '客觀事實 ➔ 真實感受 ➔ 實質影響 ➔ 具體期待',
    diagramType: 'communication-flow',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <rect x="25" y="15" width="270" height="28" rx="5" fill="#0d9488" />
      <text x="160" y="34" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">高 EQ 「我訊息 (I-Message)」四部曲公式</text>
      <rect x="20" y="52" width="65" height="75" rx="5" fill="#f0fdfa" stroke="#5eead4" />
      <text x="52" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">1. 客觀事實</text>
      <text x="52" y="88" text-anchor="middle" font-size="8" fill="#134e4a">當你約定時間</text>
      <text x="52" y="102" text-anchor="middle" font-size="8" fill="#134e4a">遲到了半小時</text>
      <text x="52" y="118" text-anchor="middle" font-size="7.5" fill="#64748b">(不帶情緒字眼)</text>
      <rect x="92" y="52" width="65" height="75" rx="5" fill="#f0fdfa" stroke="#5eead4" />
      <text x="124" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">2. 真實感受</text>
      <text x="124" y="88" text-anchor="middle" font-size="8" fill="#134e4a">我感到非常</text>
      <text x="124" y="102" text-anchor="middle" font-size="8" fill="#134e4a">焦慮與著急</text>
      <text x="124" y="118" text-anchor="middle" font-size="7.5" fill="#64748b">(表達脆弱情緒)</text>
      <rect x="164" y="52" width="65" height="75" rx="5" fill="#f0fdfa" stroke="#5eead4" />
      <text x="196" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f766e">3. 實質影響</text>
      <text x="196" y="88" text-anchor="middle" font-size="8" fill="#134e4a">因為我們入場</text>
      <text x="196" y="102" text-anchor="middle" font-size="8" fill="#134e4a">電影會錯過開頭</text>
      <text x="196" y="118" text-anchor="middle" font-size="7.5" fill="#64748b">(說明具體原因)</text>
      <rect x="236" y="52" width="65" height="75" rx="5" fill="#ecfdf5" stroke="#34d399" />
      <text x="268" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">4. 具體期待</text>
      <text x="268" y="88" text-anchor="middle" font-size="8" fill="#065f46">我希望如果遲到</text>
      <text x="268" y="102" text-anchor="middle" font-size="8" fill="#065f46">先傳訊告訴我</text>
      <text x="268" y="118" text-anchor="middle" font-size="7.5" fill="#059669">(雙贏正向請求)</text>
      <rect x="25" y="136" width="270" height="34" rx="4" fill="#f1f5f9" />
      <text x="160" y="152" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#334155">對比「你訊息」批評指責（如你每次都遲到很討厭），我訊息能化解 90% 衝突！</text>
    </svg>`
  },

  'kp-comp-u3-1': {
    title: '諾貝爾獎得主費曼極簡學習法閉環',
    subtitle: '選定概念 ➔ 教給十歲小孩 ➔ 卡殼處查漏補缺 ➔ 提煉簡化生活類比',
    diagramType: 'learning-loop',
    svg: `<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" />
      <text x="160" y="22" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e293b">諾貝爾獎得主費曼極簡學習法閉環</text>
      <rect x="25" y="38" width="125" height="52" rx="5" fill="#eff6ff" stroke="#3b82f6" />
      <text x="87" y="56" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">1. 確立目標概念</text>
      <text x="87" y="73" text-anchor="middle" font-size="8.5" fill="#334155">在白紙上寫下概念名稱</text>
      <rect x="170" y="38" width="125" height="52" rx="5" fill="#f0fdf4" stroke="#10b981" />
      <text x="232" y="56" text-anchor="middle" font-size="10" font-weight="bold" fill="#047857">2. 假想教給十歲孩子</text>
      <text x="232" y="73" text-anchor="middle" font-size="8.5" fill="#334155">杜絕術語、用白話大白話說清楚</text>
      <rect x="170" y="100" width="125" height="52" rx="5" fill="#fee2e2" stroke="#ef4444" />
      <text x="232" y="118" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">3. 卡殼處查漏補缺</text>
      <text x="232" y="135" text-anchor="middle" font-size="8.5" fill="#334155">哪裡卡住就翻書重新理解</text>
      <rect x="25" y="100" width="125" height="52" rx="5" fill="#fef08a" stroke="#ca8a04" />
      <text x="87" y="118" text-anchor="middle" font-size="10" font-weight="bold" fill="#854d0e">4. 提煉簡化類比</text>
      <text x="87" y="135" text-anchor="middle" font-size="8.5" fill="#334155">用生活比喻，形成永久記憶</text>
      <text x="160" y="168" text-anchor="middle" font-size="9" font-weight="bold" fill="#2563eb">最高境界：如果你不能用最簡單的話向外行人解釋清楚，代表你還沒真正搞懂！</text>
    </svg>`
  }
};

// 輸出並產出完整的 knowledgeInfographics.js
const fileContent = `// 🎨 108 課綱六年級全科【知識點專屬全景向量資訊圖表庫】(Knowledge Infographics Catalog)
// 專為微知識點提供高清純向量 SVG 資訊圖卡、算理模型與結構拓撲
// 支援深淺色主題適配、無失真響應式縮放與語音導引

import { unitDiagramCatalog } from './examNotes/unitDiagrams.js';

// 專屬高頻微知識點純向量 SVG 資訊圖表庫
export const specializedKnowledgeInfographics = ${JSON.stringify(specialized, null, 2)};

// 各學科領域主題視覺調色盤
const subjectPalettes = {
  math: { primary: '#2563eb', bg: '#eff6ff', border: '#93c5fd', text: '#1e40af', tag: '🧮 數理算理圖解' },
  science: { primary: '#059669', bg: '#ecfdf5', border: '#a7f3d0', text: '#065f46', tag: '🔬 自然實驗探究' },
  mandarin: { primary: '#d97706', bg: '#fffbeb', border: '#fde68a', text: '#92400e', tag: '📖 國語語文修辭' },
  social: { primary: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe', text: '#5b21b6', tag: '🌍 社會公民地理' },
  english: { primary: '#0284c7', bg: '#f0f9ff', border: '#bae6fd', text: '#0369a1', tag: '🇬🇧 英語文法對話' },
  arts: { primary: '#db2777', bg: '#fdf2f8', border: '#fbcfe8', text: '#9d174d', tag: '🎨 藝術五感美學' },
  health_pe: { primary: '#e11d48', bg: '#fff1f2', border: '#fecdd3', text: '#9f1239', tag: '💪 健體急救成長' },
  integrative: { primary: '#0d9488', bg: '#f0fdfa', border: '#99f6e4', text: '#134e4a', tag: '🌱 綜合自律實踐' }
};

/**
 * 依據知識點物件取得其專屬的 SVG Infographic 資訊圖卡
 * 1. 優先匹配專屬微知識點 Infographic (specializedKnowledgeInfographics)
 * 2. 其次匹配該單元之精準高畫質向量架構圖 (unitDiagramCatalog)
 * 3. 智慧動態產生量身定制的高畫質多層純向量 SVG 資訊圖卡 (Dynamic Tailored Vector Infographic)
 */
/**
 * 智慧取得該微知識點之動態量身定制純向量 SVG 資訊圖卡
 */
export function getDynamicTailoredInfographic(knowledgePoint) {
  if (!knowledgePoint) return null;
  const palette = subjectPalettes[knowledgePoint.subjectId] || subjectPalettes.math;
  const safeTitle = (knowledgePoint.title || '108 課綱微概念').replace(/[<>&"']/g, '');
  const rawRule = (knowledgePoint.formulaOrRule || '掌握核心定義與解題步驟').replace(/[<>&"']/g, '').replace(/\\\\/g, '');
  const safeRule = rawRule.slice(0, 42);
  const rawDef = (knowledgePoint.definition || '深度理解觀念本質與心智模型').replace(/[<>&"']/g, '').replace(/\\\\/g, '');
  const safeDef = rawDef.slice(0, 36);
  const rawTrap = (knowledgePoint.trapAlert || '審題先圈出單位與關鍵字').replace(/【避雷防錯】|【避雷提醒】/g, '').replace(/[<>&"']/g, '').replace(/\\\\/g, '');
  const safeTrap = rawTrap.slice(0, 32);

  return {
    title: \`\${knowledgePoint.title}・微概念心法圖解\`,
    subtitle: \`\${knowledgePoint.category}・定制純向量圖卡\`,
    diagramType: 'tailored-vector',
    svg: \`<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <!-- 背景卡片 -->
      <rect width="320" height="180" fill="#f8fafc" rx="10" stroke="#e2e8f0" stroke-width="1.5" />
      
      <!-- 頂部領域色標旗幟 -->
      <rect x="18" y="14" width="284" height="30" rx="6" fill="\${palette.primary}" />
      <text x="160" y="34" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">\${safeTitle}</text>
      
      <!-- 核心算理 / 定律導航條 -->
      <rect x="22" y="52" width="276" height="38" rx="5" fill="\${palette.bg}" stroke="\${palette.border}" stroke-width="1.2" />
      <text x="32" y="68" font-size="9" font-weight="bold" fill="\${palette.text}">【核心規律與定律】</text>
      <text x="32" y="82" font-size="8.5" fill="#334155">\${safeRule}</text>
      
      <!-- 雙核心支柱卡片 (觀念本質 vs 防雷避坑) -->
      <rect x="22" y="96" width="134" height="48" rx="5" fill="#eff6ff" stroke="#bfdbfe" />
      <text x="30" y="112" font-size="9" font-weight="bold" fill="#1e40af">🧠 觀念本質心法</text>
      <text x="30" y="126" font-size="8" fill="#334155">\${safeDef}</text>
      <text x="30" y="137" font-size="7.5" fill="#64748b">108 素養情境導引</text>

      <rect x="164" y="96" width="134" height="48" rx="5" fill="#fef2f2" stroke="#fca5a5" />
      <text x="172" y="112" font-size="9" font-weight="bold" fill="#b91c1c">⚠️ 考場避雷警訊</text>
      <text x="172" y="126" font-size="8" fill="#7f1d1d">\${safeTrap}</text>
      <text x="172" y="137" font-size="7.5" fill="#991b1b">圈出審題關鍵字</text>

      <!-- 底部國中先修與學科銜接標注 -->
      <rect x="22" y="150" width="276" height="20" rx="4" fill="#f1f5f9" />
      <text x="160" y="164" text-anchor="middle" font-size="8" font-weight="bold" fill="#475569">\${palette.tag} ｜ 國中七年級先修銜接橋樑</text>
    </svg>\`
  };
}

/**
 * 取得單元級純向量架構圖
 */
export function getUnitDiagramInfographic(unitId, fallbackTitle = '') {
  const unitDiagram = unitDiagramCatalog[unitId];
  if (unitDiagram && unitDiagram.svg) {
    return {
      title: unitDiagram.title || \`\${fallbackTitle}・單元架構圖\`,
      subtitle: unitDiagram.subtitle || '108 課綱單元宏觀拓撲',
      diagramType: 'unit-diagram',
      svg: unitDiagram.svg
    };
  }
  return null;
}

/**
 * 核心解析入口：依微知識點智慧調度合適的 SVG 資訊圖表
 * 支援 options.preferType ('specialized' | 'unit' | 'tailored')
 */
export function getKnowledgePointInfographic(knowledgePoint, options = {}) {
  if (!knowledgePoint) {
    return {
      title: '108 課綱核心圖解',
      subtitle: '概念視覺化架構',
      diagramType: 'default',
      svg: \`<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="180" fill="#f8fafc" rx="10" stroke="#cbd5e1" />
        <text x="160" y="95" text-anchor="middle" fill="#64748b" font-size="13" font-weight="bold">108 課綱視覺化圖解</text>
      </svg>\`
    };
  }

  // 1. 強制偏好單元圖
  if (options.preferType === 'unit') {
    const uDiagram = getUnitDiagramInfographic(knowledgePoint.unitId, knowledgePoint.title);
    if (uDiagram) return uDiagram;
  }

  // 2. 強制偏好定制卡
  if (options.preferType === 'tailored') {
    return getDynamicTailoredInfographic(knowledgePoint);
  }

  // 3. 專屬微知識點 Infographic (最高優先度)
  if (specializedKnowledgeInfographics[knowledgePoint.id]) {
    return specializedKnowledgeInfographics[knowledgePoint.id];
  }

  // 4. 若為單元第 0 點且有單元架構圖，優先展示宏觀架構圖
  const unitDiagram = getUnitDiagramInfographic(knowledgePoint.unitId, knowledgePoint.title);
  if (knowledgePoint.pointIndex === 0 && unitDiagram) {
    return unitDiagram;
  }

  // 5. 若為微概念點 1 或 2，展示量身定制純向量圖卡
  const dynamicCard = getDynamicTailoredInfographic(knowledgePoint);
  if (dynamicCard) {
    return dynamicCard;
  }

  // 6. 單元架構圖兜底
  if (unitDiagram) {
    return unitDiagram;
  }

  return {
    title: knowledgePoint.title,
    subtitle: \`\${knowledgePoint.category}・核心圖解\`,
    diagramType: 'fallback',
    svg: \`<svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#f8fafc" rx="10" stroke="#cbd5e1" />
      <text x="160" y="95" text-anchor="middle" fill="#3b82f6" font-size="13" font-weight="bold">\${knowledgePoint.title}</text>
    </svg>\`
  };
}
`;

fs.writeFileSync(path.join(rootDir, 'src/data/knowledgeInfographics.js'), fileContent, 'utf-8');
console.log('Successfully wrote expanded src/data/knowledgeInfographics.js with 55+ specialized infographics and dynamic tailored vector engine!');
