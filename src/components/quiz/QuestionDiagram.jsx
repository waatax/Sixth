import React from 'react';

/**
 * QuestionDiagram 組件
 * 專為小學與升中測驗題目打造的純向量 SVG 可視化圖示渲染引擎
 * 支援幾何鋪色、統計圓形圖、展開圖、電路磁效應、槓桿天平、顯微鏡成像、天氣鋒面、問路地圖等
 */
const QuestionDiagram = ({ diagram }) => {
  if (!diagram || !diagram.type) return null;

  const { type, title, subtitle } = diagram;

  return (
    <div 
      className="my-4 p-4 rounded-2xl flex flex-col items-center justify-center transition-all"
      style={{
        backgroundColor: 'var(--bg-tertiary)',
        border: '1.5px solid var(--border-strong)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)'
      }}
    >
      {title && (
        <div className="flex items-center gap-2 mb-3 text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--apple-blue)' }} />
          <span>{title}</span>
          {subtitle && <span className="text-secondary font-normal">({subtitle})</span>}
        </div>
      )}

      <div className="w-full flex justify-center items-center overflow-x-auto py-1">
        {renderDiagramContent(type, diagram)}
      </div>

      <div className="mt-2 text-[11px] text-secondary text-center tracking-wide">
        🔎 依據題意觀察圖示尺寸與標記，進行推論作答
      </div>
    </div>
  );
};

// 依據 diagram.type 分流渲染特定 SVG 圖示
function renderDiagramContent(type, diagram) {
  switch (type) {
    // ----------------------------------------------------
    // 🧮 1. 數學：幾何鋪色葉形面積（正方形 10cm + 兩扇形重疊）
    // ----------------------------------------------------
    case 'shaded-leaf':
      return (
        <svg viewBox="0 0 240 240" className="w-56 h-56 max-w-full">
          {/* 正方形外框 */}
          <rect x="30" y="30" width="160" height="160" fill="var(--bg-secondary)" stroke="#3b82f6" strokeWidth="2.5" />
          
          {/* 鋪色葉形區域 (以左下與右上為圓心的兩個 1/4 圓交集) */}
          <path
            d="M 30 190 A 160 160 0 0 1 190 30 A 160 160 0 0 1 30 190 Z"
            fill="#3b82f6"
            fillOpacity="0.35"
            stroke="#1d4ed8"
            strokeWidth="2.5"
          />

          {/* 尺寸標記 */}
          <line x1="30" y1="205" x2="190" y2="205" stroke="#475569" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <line x1="30" y1="200" x2="30" y2="210" stroke="#475569" strokeWidth="1.5" />
          <line x1="190" y1="200" x2="190" y2="210" stroke="#475569" strokeWidth="1.5" />
          <text x="110" y="222" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">
            10 cm
          </text>

          <line x1="205" y1="30" x2="205" y2="190" stroke="#475569" strokeWidth="1.5" />
          <line x1="200" y1="30" x2="210" y2="30" stroke="#475569" strokeWidth="1.5" />
          <line x1="200" y1="190" x2="210" y2="190" stroke="#475569" strokeWidth="1.5" />
          <text x="215" y="115" dominantBaseline="middle" fontSize="12" fontWeight="700" fill="var(--text-primary)">
            10 cm
          </text>

          {/* 直角標記 */}
          <path d="M 30 178 L 42 178 L 42 190" fill="none" stroke="#64748b" strokeWidth="1.5" />

          {/* 說明字樣 */}
          <text x="110" y="115" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1e3a8a">
            鋪色區域
          </text>
        </svg>
      );

    // ----------------------------------------------------
    // 🧮 2. 數學：同心圓環鋪色面積
    // ----------------------------------------------------
    case 'shaded-ring':
      return (
        <svg viewBox="0 0 240 240" className="w-56 h-56 max-w-full">
          {/* 大圓鋪色 */}
          <circle cx="120" cy="120" r="80" fill="#3b82f6" fillOpacity="0.35" stroke="#2563eb" strokeWidth="2" />
          {/* 小圓挖空 */}
          <circle cx="120" cy="120" r="45" fill="var(--bg-secondary)" stroke="#2563eb" strokeWidth="2" />
          {/* 圓心 */}
          <circle cx="120" cy="120" r="3" fill="#ef4444" />
          
          {/* 外半徑 R=6cm */}
          <line x1="120" y1="120" x2="190" y2="80" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3" />
          <text x="165" y="95" fontSize="11" fontWeight="700" fill="#ef4444">R = 6 cm</text>

          {/* 內半徑 r=4cm */}
          <line x1="120" y1="120" x2="85" y2="145" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" />
          <text x="90" y="132" fontSize="11" fontWeight="700" fill="#10b981">r = 4 cm</text>
        </svg>
      );

    // ----------------------------------------------------
    // 🧮 3. 數學：圓形百分率統計圖 (Pie Chart)
    // ----------------------------------------------------
    case 'pie-chart':
      return (
        <svg viewBox="0 0 260 220" className="w-64 h-56 max-w-full">
          {/* 圓心 (100, 110), 半徑 75 */}
          {/* 類別1：文學類 40% (144度) -> 0 ~ 144 */}
          <path d="M 100 110 L 175 110 A 75 75 0 0 1 39.3 154.1 Z" fill="#3b82f6" fillOpacity="0.8" stroke="#ffffff" strokeWidth="1.5" />
          {/* 類別2：科學類 25% (90度) -> 144 ~ 234 */}
          <path d="M 100 110 L 39.3 154.1 A 75 75 0 0 1 55.9 49.3 Z" fill="#10b981" fillOpacity="0.8" stroke="#ffffff" strokeWidth="1.5" />
          {/* 類別3：藝術類 20% (72度) -> 234 ~ 306 */}
          <path d="M 100 110 L 55.9 49.3 A 75 75 0 0 1 144.1 49.3 Z" fill="#f59e0b" fillOpacity="0.8" stroke="#ffffff" strokeWidth="1.5" />
          {/* 類別4：其他類 15% (54度) -> 306 ~ 360 */}
          <path d="M 100 110 L 144.1 49.3 A 75 75 0 0 1 175 110 Z" fill="#8b5cf6" fillOpacity="0.8" stroke="#ffffff" strokeWidth="1.5" />

          {/* 圖例 */}
          <g transform="translate(185, 45)" fontSize="11" fill="var(--text-primary)">
            <rect x="0" y="0" width="12" height="12" fill="#3b82f6" rx="2" />
            <text x="18" y="10">文學 40%</text>

            <rect x="0" y="25" width="12" height="12" fill="#10b981" rx="2" />
            <text x="18" y="35">科學 25%</text>

            <rect x="0" y="50" width="12" height="12" fill="#f59e0b" rx="2" />
            <text x="18" y="60">藝術 20%</text>

            <rect x="0" y="75" width="12" height="12" fill="#8b5cf6" rx="2" />
            <text x="18" y="85">其他 15%</text>
          </g>
        </svg>
      );

    // ----------------------------------------------------
    // 🧮 4. 數學：圓柱體展開圖
    // ----------------------------------------------------
    case 'cylinder-net':
      return (
        <svg viewBox="0 0 280 200" className="w-64 h-48 max-w-full">
          {/* 上底面圓形 */}
          <circle cx="140" cy="35" r="25" fill="#f1f5f9" stroke="#3b82f6" strokeWidth="2" />
          <line x1="140" y1="35" x2="165" y2="35" stroke="#ef4444" strokeWidth="1.5" />
          <text x="152" y="30" fontSize="10" fontWeight="700" fill="#ef4444">r=3</text>

          {/* 側面長方形 */}
          <rect x="50" y="65" width="180" height="70" fill="#3b82f6" fillOpacity="0.25" stroke="#2563eb" strokeWidth="2" />
          
          {/* 下底面圓形 */}
          <circle cx="140" cy="165" r="25" fill="#f1f5f9" stroke="#3b82f6" strokeWidth="2" />

          {/* 側面尺寸標籤 */}
          <text x="140" y="105" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1e3a8a">
            長 = 底面圓周長 (18.84 cm)
          </text>
          <text x="240" y="105" fontSize="11" fontWeight="700" fill="var(--text-primary)">
            高 10 cm
          </text>
        </svg>
      );

    // ----------------------------------------------------
    // 🔬 5. 自然：槓桿平衡尺天平
    // ----------------------------------------------------
    case 'lever-balance':
      return (
        <svg viewBox="0 0 280 160" className="w-64 h-36 max-w-full">
          {/* 支點三角形 (位置 140, 90) */}
          <polygon points="140,90 125,130 155,130" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
          <text x="140" y="145" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ef4444">支點</text>

          {/* 槓桿水平尺 (長度 220, 寬度 10, 中心 140) */}
          <rect x="30" y="80" width="220" height="10" fill="#64748b" rx="2" />

          {/* 刻度標記 (每格 20px: 支點左右各 4 格) */}
          {[1, 2, 3, 4].map(g => (
            <g key={g}>
              {/* 左刻度 */}
              <line x1={140 - g * 25} y1="80" x2={140 - g * 25} y2="90" stroke="#ffffff" strokeWidth="1.5" />
              <text x={140 - g * 25} y="75" textAnchor="middle" fontSize="9" fill="var(--text-primary)">{g}</text>
              {/* 右刻度 */}
              <line x1={140 + g * 25} y1="80" x2={140 + g * 25} y2="90" stroke="#ffffff" strokeWidth="1.5" />
              <text x={140 + g * 25} y="75" textAnchor="middle" fontSize="9" fill="var(--text-primary)">{g}</text>
            </g>
          ))}

          {/* 左側第 3 格掛 4 個砝碼 (140 - 75 = 65) */}
          <line x1="65" y1="90" x2="65" y2="105" stroke="#334155" strokeWidth="2" />
          <rect x="52" y="105" width="26" height="18" fill="#3b82f6" rx="3" />
          <text x="65" y="118" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ffffff">4個</text>

          {/* 右側第 4 格掛 ? 個砝碼 (140 + 100 = 240) */}
          <line x1="240" y1="90" x2="240" y2="105" stroke="#334155" strokeWidth="2" />
          <rect x="227" y="105" width="26" height="18" fill="#f59e0b" rx="3" />
          <text x="240" y="118" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">?</text>
        </svg>
      );

    // ----------------------------------------------------
    // 🔬 6. 自然：電磁鐵與電路圖
    // ----------------------------------------------------
    case 'circuit-magnet':
      return (
        <svg viewBox="0 0 260 170" className="w-64 h-40 max-w-full">
          {/* 電池 */}
          <line x1="60" y1="60" x2="60" y2="100" stroke="#3b82f6" strokeWidth="4" />
          <line x1="70" y1="70" x2="70" y2="90" stroke="#3b82f6" strokeWidth="2" />
          <text x="50" y="85" fontSize="12" fontWeight="700" fill="#ef4444">+</text>
          <text x="80" y="85" fontSize="12" fontWeight="700" fill="#3b82f6">-</text>

          {/* 導線迴路 */}
          <path d="M 60 60 L 60 30 L 190 30 L 190 60" fill="none" stroke="#64748b" strokeWidth="2.5" />
          <path d="M 70 100 L 70 130 L 190 130 L 190 100" fill="none" stroke="#64748b" strokeWidth="2.5" />

          {/* 鐵釘與線圈 */}
          <rect x="182" y="55" width="16" height="50" fill="#94a3b8" rx="2" stroke="#475569" strokeWidth="1.5" />
          <text x="190" y="50" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ef4444">N 極?</text>
          <text x="190" y="120" textAnchor="middle" fontSize="10" fontWeight="700" fill="#3b82f6">S 極?</text>

          {/* 螺旋線圈 (5匝) */}
          {[60, 68, 76, 84, 92].map(y => (
            <ellipse key={y} cx="190" cy={y} rx="12" ry="3" fill="none" stroke="#f59e0b" strokeWidth="2" />
          ))}

          {/* 開關 S */}
          <circle cx="120" cy="30" r="3" fill="#ef4444" />
          <line x1="120" y1="30" x2="140" y2="20" stroke="#ef4444" strokeWidth="2.5" />
          <circle cx="145" cy="30" r="3" fill="#ef4444" />
          <text x="130" y="15" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ef4444">開關 S</text>
        </svg>
      );

    // ----------------------------------------------------
    // 🔬 7. 自然：複式顯微鏡視野成像圖
    // ----------------------------------------------------
    case 'microscope-view':
      return (
        <svg viewBox="0 0 240 180" className="w-60 h-44 max-w-full">
          {/* 顯微鏡圓形視野 */}
          <circle cx="100" cy="90" r="65" fill="#f8fafc" stroke="#334155" strokeWidth="4" />
          
          {/* 十字絲 */}
          <line x1="100" y1="25" x2="100" y2="155" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="35" y1="90" x2="165" y2="90" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3" />

          {/* 標本字母 (在左上方，呈現倒立的像 'd' 原本為 'p') */}
          <text x="75" y="70" fontSize="32" fontFamily="serif" fontWeight="700" fill="#1e293b">
            d
          </text>

          {/* 移動載玻片的方向指引說明 */}
          <g transform="translate(180, 50)" fontSize="11" fill="var(--text-primary)">
            <text x="0" y="20" fontWeight="700">目標：</text>
            <text x="0" y="40">移至視野中央</text>
            
            {/* 箭頭 */}
            <path d="M 20 60 L 5 75 M 5 75 L 5 65 M 5 75 L 15 75" fill="none" stroke="#ef4444" strokeWidth="2.5" />
            <text x="0" y="95" fontSize="10" fill="#ef4444" fontWeight="700">載玻片該</text>
            <text x="0" y="110" fontSize="10" fill="#ef4444" fontWeight="700">往哪裡移？</text>
          </g>
        </svg>
      );

    // ----------------------------------------------------
    // 🔬 8. 自然：冷鋒面天氣圖
    // ----------------------------------------------------
    case 'weather-front':
      return (
        <svg viewBox="0 0 260 170" className="w-64 h-40 max-w-full">
          {/* 高壓 H (冷氣團) */}
          <circle cx="60" cy="50" r="22" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
          <text x="60" y="56" textAnchor="middle" fontSize="16" fontWeight="900" fill="#1d4ed8">H</text>
          <text x="60" y="85" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1d4ed8">冷高壓</text>

          {/* 低壓 L (暖氣團) */}
          <circle cx="200" cy="110" r="22" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="2" />
          <text x="200" y="116" textAnchor="middle" fontSize="16" fontWeight="900" fill="#b91c1c">L</text>
          <text x="200" y="145" textAnchor="middle" fontSize="10" fontWeight="700" fill="#b91c1c">低氣壓</text>

          {/* 冷鋒面曲線與藍色三角形 */}
          <path d="M 50 130 Q 130 90 210 50" fill="none" stroke="#2563eb" strokeWidth="3" />
          
          {/* 三角齒 (朝向移動方向：東南方) */}
          <polygon points="90,105 102,100 95,90" fill="#2563eb" />
          <polygon points="135,85 147,80 140,70" fill="#2563eb" />
          <polygon points="175,67 187,62 180,52" fill="#2563eb" />

          <text x="145" y="115" fontSize="11" fontWeight="700" fill="#1d4ed8">冷鋒 (寒潮南下)</text>
        </svg>
      );

    // ----------------------------------------------------
    // 🇬🇧 9. 英語：街道方位問路地圖 (Town Map)
    // ----------------------------------------------------
    case 'street-map':
      return (
        <svg viewBox="0 0 280 180" className="w-68 h-44 max-w-full">
          {/* 馬路街道十字路口 */}
          <rect x="20" y="65" width="240" height="40" fill="#94a3b8" fillOpacity="0.4" />
          <rect x="115" y="20" width="40" height="140" fill="#94a3b8" fillOpacity="0.4" />

          {/* 街道名稱 */}
          <text x="65" y="88" fontSize="10" fontWeight="700" fill="#475569">Main Street</text>
          <text x="135" y="45" fontSize="9" fontWeight="700" fill="#475569" transform="rotate(90 135 45)">1st Ave</text>

          {/* 建築物 */}
          {/* 左上：Bank */}
          <rect x="25" y="25" width="75" height="35" fill="#3b82f6" rx="4" />
          <text x="62" y="46" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">Bank</text>

          {/* 右上：Library */}
          <rect x="170" y="25" width="85" height="35" fill="#10b981" rx="4" />
          <text x="212" y="46" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">Library</text>

          {/* 左下：Park */}
          <rect x="25" y="115" width="75" height="40" fill="#84cc16" rx="4" />
          <text x="62" y="139" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">Park</text>

          {/* 右下：School */}
          <rect x="170" y="115" width="85" height="40" fill="#f59e0b" rx="4" />
          <text x="212" y="139" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">School</text>

          {/* 目前位置 "You are here" 標記 */}
          <circle cx="135" cy="135" r="7" fill="#ef4444" />
          <text x="135" y="155" textAnchor="middle" fontSize="9" fontWeight="700" fill="#ef4444">
            📍 You Are Here
          </text>
        </svg>
      );

    // ----------------------------------------------------
    // 🌍 10. 社會：中央政府五院制衡架構圖
    // ----------------------------------------------------
    case 'government-branches':
      return (
        <svg viewBox="0 0 280 170" className="w-68 h-42 max-w-full">
          {/* 總統 */}
          <rect x="105" y="10" width="70" height="26" fill="#1e293b" rx="4" />
          <text x="140" y="27" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">總 統</text>

          {/* 行政院 */}
          <rect x="15" y="65" width="68" height="30" fill="#3b82f6" rx="4" />
          <text x="49" y="84" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">行政院</text>

          {/* 立法院 */}
          <rect x="105" y="65" width="70" height="30" fill="#ef4444" rx="4" />
          <text x="140" y="84" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">立法院</text>

          {/* 司法院 */}
          <rect x="195" y="65" width="68" height="30" fill="#10b981" rx="4" />
          <text x="229" y="84" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">司法院</text>

          {/* 考試院 & 監察院 */}
          <rect x="55" y="125" width="75" height="26" fill="#8b5cf6" rx="4" />
          <text x="92" y="142" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ffffff">考試院</text>

          <rect x="150" y="125" width="75" height="26" fill="#f59e0b" rx="4" />
          <text x="187" y="142" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ffffff">監察院(彈劾)</text>

          {/* 行政與立法間的質詢與覆議箭頭 */}
          <line x1="83" y1="75" x2="105" y2="75" stroke="#475569" strokeWidth="1.5" />
          <text x="94" y="62" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">質詢</text>
          <line x1="105" y1="85" x2="83" y2="85" stroke="#475569" strokeWidth="1.5" />
          <text x="94" y="97" textAnchor="middle" fontSize="8" fill="var(--text-secondary)">覆議</text>
        </svg>
      );

    // ----------------------------------------------------
    // 💪 11. 健體：CPR+AED 急救流程圖 (叫叫CD)
    // ----------------------------------------------------
    case 'cpr-flow':
      return (
        <svg viewBox="0 0 280 130" className="w-68 h-32 max-w-full">
          {/* 叫 */}
          <circle cx="40" cy="50" r="22" fill="#3b82f6" />
          <text x="40" y="55" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">1.叫</text>
          <text x="40" y="88" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">確認意識</text>

          <line x1="62" y1="50" x2="88" y2="50" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* 叫 */}
          <circle cx="110" cy="50" r="22" fill="#10b981" />
          <text x="110" y="55" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">2.叫</text>
          <text x="110" y="88" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">打119拿AED</text>

          <line x1="132" y1="50" x2="158" y2="50" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* C */}
          <circle cx="180" cy="50" r="22" fill="#ef4444" />
          <text x="180" y="55" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">3. C</text>
          <text x="180" y="88" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">胸外按壓</text>

          <line x1="202" y1="50" x2="228" y2="50" stroke="#cbd5e1" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* D */}
          <circle cx="250" cy="50" r="22" fill="#f59e0b" />
          <text x="250" y="55" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ffffff">4. D</text>
          <text x="250" y="88" textAnchor="middle" fontSize="9" fill="var(--text-secondary)">電擊去顫</text>
        </svg>
      );

    // ----------------------------------------------------
    // 🌱 12. 綜合：時間管理艾森豪四象限矩陣圖
    // ----------------------------------------------------
    case 'eisenhower-matrix':
      return (
        <svg viewBox="0 0 260 170" className="w-64 h-42 max-w-full">
          {/* 四個象限方塊 */}
          {/* 第一象限：重要且緊急 */}
          <rect x="35" y="30" width="95" height="55" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1.5" rx="3" />
          <text x="82" y="55" textAnchor="middle" fontSize="11" fontWeight="700" fill="#b91c1c">立即去做</text>
          <text x="82" y="72" textAnchor="middle" fontSize="9" fill="#b91c1c">明天段考/急症</text>

          {/* 第二象限：重要但不緊急（精華） */}
          <rect x="135" y="30" width="95" height="55" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" rx="3" />
          <text x="182" y="52" textAnchor="middle" fontSize="11" fontWeight="700" fill="#047857">🌟 優先規劃</text>
          <text x="182" y="68" textAnchor="middle" fontSize="9" fill="#047857">平時複習/運動</text>

          {/* 第三象限：不重要但緊急 */}
          <rect x="35" y="90" width="95" height="55" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1.5" rx="3" />
          <text x="82" y="115" textAnchor="middle" fontSize="11" fontWeight="700" fill="#b45309">委託或速辦</text>
          <text x="82" y="132" textAnchor="middle" fontSize="9" fill="#b45309">突然插播來電</text>

          {/* 第四象限：不重要且不緊急 */}
          <rect x="135" y="90" width="95" height="55" fill="#94a3b8" fillOpacity="0.15" stroke="#94a3b8" strokeWidth="1.5" rx="3" />
          <text x="182" y="115" textAnchor="middle" fontSize="11" fontWeight="700" fill="#475569">盡量避免</text>
          <text x="182" y="132" textAnchor="middle" fontSize="9" fill="#475569">無意識刷短影音</text>

          {/* 坐標軸文字 */}
          <text x="82" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-primary)">【緊急】</text>
          <text x="182" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-primary)">【不緊急】</text>
          <text x="20" y="60" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-primary)" transform="rotate(-90 20 60)">重要</text>
          <text x="20" y="120" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-primary)" transform="rotate(-90 20 120)">不重要</text>
        </svg>
      );

    // ----------------------------------------------------
    // 🎨 13. 藝術：12 色相環與互補對比色
    // ----------------------------------------------------
    case 'color-wheel':
      return (
        <svg viewBox="0 0 240 180" className="w-60 h-44 max-w-full">
          {/* 色相環圓圈 (中心 120, 90, 半徑 60) */}
          <circle cx="120" cy="90" r="60" fill="none" stroke="#e2e8f0" strokeWidth="16" />
          
          {/* 三原色主點 */}
          <circle cx="120" cy="30" r="10" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
          <text x="120" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ef4444">紅 (原色)</text>

          <circle cx="68" cy="120" r="10" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
          <text x="45" y="140" fontSize="10" fontWeight="700" fill="#3b82f6">藍 (原色)</text>

          <circle cx="172" cy="120" r="10" fill="#eab308" stroke="#ffffff" strokeWidth="2" />
          <text x="195" y="140" fontSize="10" fontWeight="700" fill="#ca8a04">黃 (原色)</text>

          {/* 互補色對角虛線（紅 vs 綠） */}
          <circle cx="120" cy="150" r="10" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
          <text x="120" y="172" textAnchor="middle" fontSize="10" fontWeight="700" fill="#10b981">綠 (互補色)</text>
          <line x1="120" y1="40" x2="120" y2="140" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3" />

          <text x="120" y="93" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text-secondary)">
            對比色相差 180°
          </text>
        </svg>
      );

    // ----------------------------------------------------
    // 預設純文字提示
    // ----------------------------------------------------
    default:
      return (
        <div className="p-4 text-xs text-secondary text-center">
          📊 [圖示資料：{type}]
        </div>
      );
  }
}

export default QuestionDiagram;
