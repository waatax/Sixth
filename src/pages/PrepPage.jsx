import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Award, Zap, Compass } from 'lucide-react';

const PrepPage = () => {
  const [activeTab, setActiveTab] = useState('math');

  return (
    <div className="flex flex-col gap-6 py-4 max-w-4xl mx-auto">
      <Link to="/resources" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
        <ArrowLeft size={16} /> 返回教育資源導航
      </Link>

      <div
        className="card text-center py-8"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-light)',
          borderTop: '5px solid var(--accent-primary)'
        }}
      >
        <span className="badge badge-accent mb-2" style={{ padding: '4px 14px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
          🎓 升國中關鍵學力銜接專區
        </span>
        <h1 className="h1 mb-2">
          小六升國一・核心觀念超前部署
        </h1>
        <p className="text-secondary max-w-xl mx-auto text-sm" style={{ lineHeight: 1.7 }}>
          彙整各大名師資優銜接精華，提早掌握國一數學負數代數、理化實驗與長文本素養題型！
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 border-b pb-3 flex-wrap" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <button
          className={`btn-pill ${activeTab === 'math' ? 'active' : ''}`}
          onClick={() => setActiveTab('math')}
        >
          🧮 國一數學代數銜接
        </button>
        <button
          className={`btn-pill ${activeTab === 'science' ? 'active' : ''}`}
          onClick={() => setActiveTab('science')}
        >
          🔬 國中自然理化先修
        </button>
        <button
          className={`btn-pill ${activeTab === 'strategy' ? 'active' : ''}`}
          onClick={() => setActiveTab('strategy')}
        >
          💡 108 課綱素養解題心法
        </button>
      </div>

      {/* Math Transition Section */}
      {activeTab === 'math' && (
        <div className="flex flex-col gap-5 animate-fade-in">
          <div className="card">
            <h2 className="h3 flex items-center gap-2 mb-3" style={{ color: 'var(--accent-primary)' }}>
              <Zap size={22} />
              1. 負數與數線四則運算規則
            </h2>
            <p className="text-sm text-secondary mb-4" style={{ lineHeight: 1.7 }}>
              國小數學數字都在 0 以上（正數），國一第一單元將引進「負數 $(-)$」與「數線上的相反數」！
            </p>

            <div
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                padding: '18px',
                borderRadius: 'var(--radius-md)',
                fontFamily: 'var(--font-mono)',
                fontSize: 'calc(0.92rem * var(--font-scale))',
                lineHeight: 1.8,
                border: '1px solid var(--border-light)'
              }}
            >
              <div style={{ color: 'var(--text-primary)', fontWeight: 700 }}>★ 正負號運算口訣：</div>
              <div className="text-secondary">• 正正得正：(+3) × (+2) = +6</div>
              <div style={{ color: 'var(--accent-error-text)', fontWeight: 700 }}>• 負負得正：(-3) × (-2) = +6  （※ 國小生最容易出錯的關鍵！）</div>
              <div className="text-secondary">• 正負得負：(+3) × (-2) = -6</div>
              <div className="text-secondary">• 負正得負：(-3) × (+2) = -6</div>
            </div>
          </div>

          <div className="card">
            <h2 className="h3 flex items-center gap-2 mb-3" style={{ color: 'var(--accent-primary)' }}>
              <Compass size={22} />
              2. 一元一次方程式與「等量公理」
            </h2>
            <p className="text-sm text-secondary mb-3" style={{ lineHeight: 1.7 }}>
              告別國小的倒推法，學會使用未知數 $x$ 搭配「等號兩邊同加、同減、同乘、同除」的等量公理。
            </p>

            <div
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                padding: '18px',
                borderRadius: 'var(--radius-md)',
                fontSize: 'calc(0.92rem * var(--font-scale))',
                lineHeight: 1.8,
                border: '1px solid var(--border-light)'
              }}
            >
              <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>範例題：解方程式 3x + 5 = 20</div>
              <div className="text-secondary">步驟 1：等號兩邊同時減 5 ➔ 3x = 20 - 5 = 15</div>
              <div className="text-secondary">步驟 2：等號兩邊同時除以 3 ➔ x = 15 ÷ 3 = 5</div>
              <div style={{ color: 'var(--accent-success-text)', fontWeight: 700, marginTop: '4px' }}>✔ 驗算：3 × 5 + 5 = 20 (正確！)</div>
            </div>
          </div>
        </div>
      )}

      {/* Science Transition Section */}
      {activeTab === 'science' && (
        <div className="flex flex-col gap-5 animate-fade-in">
          <div className="card">
            <h2 className="h3 flex items-center gap-2 mb-3" style={{ color: 'var(--accent-success)' }}>
              <Zap size={22} />
              1. 密度計算公式 D = M / V
            </h2>
            <p className="text-sm text-secondary mb-3" style={{ lineHeight: 1.7 }}>
              國中理化第一個定量計算重點：<strong>密度 (Density) = 質量 (Mass) ÷ 體積 (Volume)</strong>。
            </p>
            <div
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                padding: '18px',
                borderRadius: 'var(--radius-md)',
                fontSize: 'calc(0.92rem * var(--font-scale))',
                lineHeight: 1.75,
                border: '1px solid var(--border-light)'
              }}
            >
              <div className="text-secondary">• 水的密度常溫下為 1 g/cm³。</div>
              <div className="text-secondary">• 密度大於水（如鐵塊 7.8 g/cm³）會下沉；密度小於水（如木塊、冰塊 0.92 g/cm³）會浮在水面上！</div>
            </div>
          </div>

          <div className="card">
            <h2 className="h3 flex items-center gap-2 mb-3" style={{ color: 'var(--accent-success)' }}>
              <BookOpen size={22} />
              2. 常見前 20 號元素符號速記表
            </h2>
            <p className="text-sm text-secondary mb-3">提早認識化學語言，銜接國二理化輕鬆無負擔：</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '10px' }}>
              {['H 氫 (Hydrogen)', 'He 氦 (Helium)', 'C 碳 (Carbon)', 'N 氮 (Nitrogen)', 'O 氧 (Oxygen)', 'Na 鈉 (Sodium)', 'Fe 鐵 (Iron)', 'Cu 銅 (Copper)'].map((elem, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded text-center text-sm font-semibold"
                  style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-light)', color: 'var(--text-primary)' }}
                >
                  {elem}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Strategy Section */}
      {activeTab === 'strategy' && (
        <div className="flex flex-col gap-5 animate-fade-in">
          <div className="card">
            <h2 className="h3 flex items-center gap-2 mb-3" style={{ color: 'var(--accent-purple)' }}>
              <Award size={22} />
              108 課綱素養長文本解題三部曲
            </h2>
            <div className="flex flex-col gap-4 text-sm text-secondary" style={{ lineHeight: 1.8 }}>
              <div style={{ padding: '14px 18px', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>步驟一：先看題目問什麼（逆向搜尋法）</strong>
                <div>先閱讀題幹的最後一句話與選項，帶著問題去文章中尋找關鍵字，省時又不易被冗長文字迷惑。</div>
              </div>
              <div style={{ padding: '14px 18px', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>步驟二：圖表判讀三秒看「標題、橫軸、縱軸」</strong>
                <div>遇到折線圖、長條圖或圓形圖，第一時間確認 X 軸與 Y 軸的單位與代表變數，再看趨勢最高/最低點。</div>
              </div>
              <div style={{ padding: '14px 18px', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>步驟三：區分「科學事實」與「主觀推論」</strong>
                <div>有實驗數據證明的才是事實；「作者認為、可能」屬於推論或觀點，作答時切勿過度腦補！</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrepPage;
