// 🎓 最強小六 2026 旗艦版・8 大領域考前 1 分鐘極速秘笈權威知識庫
// 由均一專家顧問委員會與教科書編審名師共同編校，100% 依據 108 課綱與三大版本教科書對齊
// 包含：核心考點、必背公式口訣、名師避雷指南（常犯陷阱）、國中會考銜接先修

export const curatedCheatSheets = {
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🧮 數學領域 (Mathematics)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'math-u1': {
    title: '質因數分解與最大公因數、最小公倍數',
    subject: 'math',
    subjectName: '數學領域',
    coreCompetencies: [
      '能理解質數與合數的精確定義（1 既非質數亦非合數）',
      '熟練運用「短除法」進行質因數分解，找出兩數或三數之 GCD 與 LCM',
      '掌握互質 (Coprime) 概念：兩數的最大公因數為 1 時稱互質'
    ],
    formulasAndRules: [
      {
        name: '短除法求 GCD 與 LCM 口訣',
        formula: 'GCD = 左側除數相乘；LCM = 左側除數 × 底部商數 (L 型相乘)',
        detail: '短除法進行時，左側質因數必須能同時整除兩數；求三數 LCM 時，若有任兩數有公因數需繼續除，不能除者直接照抄落下。'
      },
      {
        name: '兩數乘積定理',
        formula: 'A × B = GCD(A, B) × LCM(A, B)',
        detail: '兩正整數的乘積，恰好等於其最大公因數與最小公倍數的乘積！'
      }
    ],
    topPitfalls: [
      '❌ 誤以為「1 是質數」：1 只有一個因數（自己），質數必須恰有兩個相異因數（1 和自己）。',
      '❌ 誤以為「互質的兩數自己一定要是質數」：例如 8（合數）與 9（合數），GCD(8, 9) = 1，兩數互質！',
      '❌ 分裝與排隊題型混淆：「分裝切割求最多」➔ 算 GCD；「週期排隊同時碰頭求最少」➔ 算 LCM。'
    ],
    mnemonic: '「切割分裝找最大，循環重逢找最小；左直相乘是公因，Ｌ型相乘是公倍！」',
    juniorHighBridge: '國一上第一章【整數的運算與因數倍數】：將延伸至負整數因倍數、質因數標準分解式（以指數記號如 2³ × 3² 表示），並用於七年級分數的通分與約分。'
  },

  'math-u2': {
    title: '分數的除法運算與倒數應用',
    subject: 'math',
    subjectName: '數學領域',
    coreCompetencies: [
      '理解「除以分數等於乘以其倒數」的算理與幾何意義',
      '熟練帶分數進行乘除運算時「必先化為假分數」的標準步驟',
      '精確計算分數除法應用題中的「整數商」與「剩餘分量」'
    ],
    formulasAndRules: [
      {
        name: '分數除法核心運算律',
        formula: '\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{a \\times d}{b \\times c}',
        detail: '除以一個不為 0 的分數，等於乘以該分數的倒數（分子分母對調）。'
      },
      {
        name: '餘數單位換算公式',
        formula: '真實剩餘量 = 除數單位量 \\times 分數餘數',
        detail: '例如：2½ 公升果汁每 ¾ 公升裝一杯，得 3⅓ 杯，剩「⅓ 杯」，真實水量為 ¾ × ⅓ = ¼ 公升！'
      }
    ],
    topPitfalls: [
      '❌ 帶分數乘除未化為假分數：直接把整數除整數、分數除分數是嚴重錯誤！',
      '❌ 顛倒對象錯誤：只能將「除號後面的除數」倒數，被除數絕對不能顛倒！',
      '❌ 餘數單位搞錯：計算結果帶分數的「真分數部分」代表的是幾分之幾「份/杯」，而非原本的公升或公斤！'
    ],
    mnemonic: '「除號變乘號，除數上下倒；帶分變假分，約分再相乘；餘數帶單位，乘回除數準！」',
    juniorHighBridge: '國一上第二章【分數的運算】：結合正負數引入負分數乘除、四則混合運算與指數律，倒數概念將成為解一元一次方程式的關鍵基石。'
  },

  'math-u3': {
    title: '小數的除法與商、餘數定位',
    subject: 'math',
    subjectName: '數學領域',
    coreCompetencies: [
      '掌握除數為小數時，將除數擴大為整數的「小數點同位移動法」',
      '理解商的小數點定位與「餘數小數點對齊原被除數」的絕對法則',
      '運用四捨五入法求商的指定位數概數'
    ],
    formulasAndRules: [
      {
        name: '小數點雙重定位黃金法則',
        formula: '商的小數點對齊「移動後的新小數點」；餘數的小數點對齊「原被除數的舊小數點」',
        detail: '驗算公式：被除數 = 除數 × 商 + 餘數。餘數的真實數值必須小於除數！'
      },
      {
        name: '四捨五入求概數步驟',
        formula: '求到小數第 n 位，必須多算一位到第 (n + 1) 位再進行四捨五入',
        detail: '若題目要求「算到小數第一位」，商必須計算到小數第二位判斷捨入。'
      }
    ],
    topPitfalls: [
      '❌ 餘數小數點跟著新位置走：這是全臺國小段考失分率第 1 名的陷阱！餘數一定要垂直看回「原來的被除數小數點」！',
      '❌ 除數與被除數移動位數不一致：除數向右移幾位，被除數就必須向右移相同位數（不足補 0）。',
      '❌ 四捨五入提早停筆：要求到小數第二位，若只算到第二位就無法得知第三位是該捨或該入。'
    ],
    mnemonic: '「除數化整數，同向移位數；商點對新點，餘點對原點；求概多算位，四捨五入對！」',
    juniorHighBridge: '國一上第二章【數的運算】：小數與分數將互化，並融入科學記號（Scientific Notation, a × 10ⁿ），對於小數點移動與位值觀念要求極高。'
  },

  'math-u4': {
    title: '比、比值與正比關係',
    subject: 'math',
    subjectName: '數學領域',
    coreCompetencies: [
      '理解比（前項 : 後項）與比值（前項 ÷ 後項）的關係，後項嚴禁為 0',
      '能將分數比、小數比化為「最簡整數比」',
      '掌握正比 (Direct Proportion) 的定義與其通過原點的直線圖形'
    ],
    formulasAndRules: [
      {
        name: '比與比值定義',
        formula: 'a : b 的比值 = \\frac{a}{b} (b \\neq 0)',
        detail: '比是兩個同類或異類量之間的倍數關係，比值是一個純數（通常化為最簡分數或小數）。'
      },
      {
        name: '比例式基本性質',
        formula: '若 a : b = c : d，則「外項乘積 = 內項乘積」即 a \\times d = b \\times c',
        detail: '求解未知數比值或方程時極為高效，例如 3 : x = 5 : 20 ➔ 5x = 60 ➔ x = 12。'
      }
    ],
    topPitfalls: [
      '❌ 前後項顛倒：甲對乙的比是「甲 : 乙」，乙對甲的比是「乙 : 甲」，兩者比值互為倒數！',
      '❌ 單位不同未換算：例如 30 公分 : 2 公尺，必須先化為同單位 30 公分 : 200 公分 = 3 : 20！',
      '❌ 誤以為「加減同數比值不變」：只有「前後項同乘或同除以同一個不為 0 的數」，比值才保持不變！'
    ],
    mnemonic: '「前項除後項即比值，內項相乘等外項；單位換算需統一，同乘同除不變量！」',
    juniorHighBridge: '國一下第一章【比與比例式】及第二章【函數與直角坐標】：國中會考每年必考「連比 (a : b : c)」與「正反比」，正比圖形為通過原點之直線方程式 y = kx。'
  },

  'math-u5': {
    title: '圓周長、圓周率與扇形弧長計算',
    subject: 'math',
    subjectName: '數學領域',
    coreCompetencies: [
      '理解圓周率 π (約 3.14) 的由來：圓周長除以直徑的固定常數',
      '熟練圓周長與扇形弧長、扇形周長的公式推導與計算',
      '能解決滾輪圈數與前進距離的應用情境題'
    ],
    formulasAndRules: [
      {
        name: '圓周長與直徑公式',
        formula: '圓周長 = 直徑 \\times \\pi = 2 \\times 半徑 \\times 3.14',
        detail: '若已知圓周長，反求直徑 = 圓周長 ÷ 3.14；反求半徑 = 圓周長 ÷ 3.14 ÷ 2。'
      },
      {
        name: '扇形弧長與扇形周長公式',
        formula: '弧長 = 2 \\times r \\times 3.14 \\times \\frac{\\theta}{360^\\circ}；扇形周長 = 弧長 + 2r',
        detail: '扇形周長由一條圓弧與「兩條半徑邊」組成，計算周長時切勿漏加 2r！'
      }
    ],
    topPitfalls: [
      '❌ 半徑與直徑混淆：公式是直徑 × 3.14，若題目給半徑，一定要先乘 2 化為直徑！',
      '❌ 扇形周長只算弧長：扇形是封閉圖形，除了弧長之外，一定要「再加上 2 條半徑」！',
      '❌ 輪子滾動圈數計算錯誤：前進總距離 = 圓周長 × 滾動圈數，注意公尺與公分的單位換算。'
    ],
    mnemonic: '「圓周長度直徑乘三點一四，弧長比例看圓心角；算扇形周長莫大意，兩條半徑切記加回來！」',
    juniorHighBridge: '國二下【生活中的幾何與圓】：國中將直接使用符號 \\pi 表達精確值（不再近似為 3.14），並延伸出圓心角、圓周角與切線幾何性質。'
  },

  'math-u6': {
    title: '圓面積、扇形面積與複合圖形求積',
    subject: 'math',
    subjectName: '數學領域',
    coreCompetencies: [
      '理解圓面積切割拼貼化為長方形的極限原理（長 = 半圓周長 r×π，寬 = 半徑 r）',
      '熟練圓面積公式：半徑 × 半徑 × 3.14',
      '靈活運用「切割法」與「填補扣除法」計算花瓣形、環形、四角鋪色面積'
    ],
    formulasAndRules: [
      {
        name: '圓面積與扇形面積核心公式',
        formula: '圓面積 = r \\times r \\times 3.14；扇形面積 = r \\times r \\times 3.14 \\times \\frac{\\theta}{360^\\circ}',
        detail: '圓面積切割成無數扇形拼貼後，底邊長為半圓周長（r × 3.14），高為半徑（r），故長方形面積 = r × r × 3.14。'
      },
      {
        name: '正方形夾圓四角鋪色公式',
        formula: '鋪色面積 = 正方形面積 - 圓面積 = (2r)^2 - r^2 \\times 3.14 = 4r^2 - 3.14r^2 = 0.86r^2',
        detail: '邊長 10 cm 正方形內接圓（r = 5 cm），鋪色面積 = 100 - 5×5×3.14 = 21.5 cm²。'
      }
    ],
    topPitfalls: [
      '❌ 誤把直徑當半徑代入面積公式：必須先將直徑除以 2 得到半徑！',
      '❌ 算成「直徑 × 3.14」：這是圓周長，不是圓面積！圓面積是半徑平方！',
      '❌ 圓環面積先減半徑再平方：圓環面積是「大圓面積 - 小圓面積 = (R² - r²) × 3.14」，絕對不等於 (R - r)² × 3.14！'
    ],
    mnemonic: '「圓面積半徑自乘再乘拍，扇形面積乘圓心角比；花瓣面積兩扇形減正方，環形大圓小圓平方向減！」',
    juniorHighBridge: '國二幾何：圓面積延伸至圓錐側面展開圖（扇形弧長 = 底面圓周長）與立體幾何表面積計算。'
  },

  'math-u7': {
    title: '速率概念、單位換算與相遇追趕問題',
    subject: 'math',
    subjectName: '數學領域',
    coreCompetencies: [
      '掌握速率三要素基本三角公式：距離 = 速率 × 時間',
      '熟練時速、分速、秒速以及 km/h 與 m/s 之跨單位換算',
      '精確列式解決相向相遇（速率相加）與同向追趕（速率相減）問題'
    ],
    formulasAndRules: [
      {
        name: '速率核心三大變形公式',
        formula: '距離 = 速率 \\times 時間；速率 = 距離 \\div 時間；時間 = 距離 \\div 速率',
        detail: '平均速率 = 總距離 ÷ 總時間（絕對不能直接將兩段速率加起來除以 2！）。'
      },
      {
        name: '時速與秒速神級速算法',
        formula: '時速 (km/h) \\div 3.6 = 秒速 (m/s)；秒速 (m/s) \\times 3.6 = 時速 (km/h)',
        detail: '例如：時速 72 km/h ➔ 72 ÷ 3.6 = 20 m/s；秒速 15 m/s ➔ 15 × 3.6 = 54 km/h。'
      },
      {
        name: '相遇與追趕行程公式',
        formula: '相向相遇時間 = 總距離 \\div (速甲 + 速乙)；同向追趕時間 = 領先距離 \\div (速快 - 速慢)',
        detail: '相向相遇時兩人合力縮短距離（相加）；同向追趕時靠速度差縮減距離（相減）。'
      }
    ],
    topPitfalls: [
      '❌ 平均速率誤算：去程時速 60，回程時速 40，平均時速絕非 (60+40)/2=50！而是總距離 ÷ 總時間 = 48 km/h！',
      '❌ 單位未統一：距離用公里，時間用分鐘，卻直接相除求時速！必須先將分鐘除以 60 化為小時！',
      '❌ 火車過橋問題少算車長：火車完全通過橋樑走過的路程 = 橋長 + 「火車車身總長」！'
    ],
    mnemonic: '「路程等速乘時間，相向相加同向減；平均速率總路除總時，時速除三點六變秒速！」',
    juniorHighBridge: '國一上第三章【一元一次方程式】：速率應用題（水流順流逆流、火車穿隧）是會考必考的列式難點。'
  },

  'math-u8': {
    title: '柱體體積、表面積與展開圖幾何',
    subject: 'math',
    subjectName: '數學領域',
    coreCompetencies: [
      '掌握所有柱體（角柱與圓柱）體積之普適通用公式：底面積 × 柱高',
      '熟練圓柱表面積展開圖特徵：兩個圓形底面 + 一個長方形側面',
      '能計算複合柱體與空心柱體之體積與表面積'
    ],
    formulasAndRules: [
      {
        name: '柱體體積通用公式',
        formula: '柱體體積 = 底面積 \\times 柱高',
        detail: '• 三角柱體積 = (底 × 高 ÷ 2) × 柱高；• 圓柱體積 = (r × r × 3.14) × 柱高。'
      },
      {
        name: '圓柱表面積計算公式',
        formula: '圓柱表面積 = 2 \\times 底面積 + 側面積 = 2 \\times (\\pi r^2) + (2 \\pi r \\times h)',
        detail: '側面展開為長方形，長方形的長 = 底面圓周長 (2πr)，長方形的寬 = 柱高 (h)。'
      }
    ],
    topPitfalls: [
      '❌ 圓柱表面積漏加底面：圓柱有「上下兩個底面」，算表面積時底面積必須乘 2！',
      '❌ 側面積展開長度搞錯：長方形的長必須是「圓周長」，絕不是直徑或半徑！',
      '❌ 角柱側面面積漏算：三角柱展開有 3 個側面長方形，四角柱有 4 個側面長方形。'
    ],
    mnemonic: '「柱體體積底面乘柱高，側面展開長是底周長；表面積上下底面加側面，兩面圓形切莫算漏底！」',
    juniorHighBridge: '國二下立體幾何：延伸至角錐、圓錐表面積與體積（錐體體積 = ⅓ × 底面積 × 高），空間立體透視感極為重要。'
  },

  'math-u11': {
    title: '等量公理與一元一次方程式列式求解',
    subject: 'math',
    subjectName: '數學領域',
    coreCompetencies: [
      '理解等號兩端如同天平平衡的「等量公理」基本法則',
      '熟練移項法則：加變減、減變加、乘變除、除變乘',
      '嚴記數學禁忌：等量除法公理中「除數絕對不能為 0」'
    ],
    formulasAndRules: [
      {
        name: '等量公理四大運算律',
        formula: '若 a = b，則 a \\pm c = b \\pm c；a \\times c = b \\times c；\\frac{a}{c} = \\frac{b}{c} (c \\neq 0)',
        detail: '等式兩邊同時加、減、乘、除同一個不為 0 的數，等式依然成立。'
      },
      {
        name: '解方程式標準三部曲',
        formula: '1. 設未知數 x ➔ 2. 依題意列出等式 ➔ 3. 移項化簡並代回驗算',
        detail: '例：3x + 15 = 45 ➔ 兩邊同減 15 得 3x = 30 ➔ 兩邊同除以 3 得 x = 10。'
      }
    ],
    topPitfalls: [
      '❌ 等式兩邊除以 0：0 不能當除數，等量除法嚴格要求除數非零！',
      '❌ 移項時忘記變號：移到等號另一邊時，加號一定要變減號、減號一定要變加號！',
      '❌ 解出答案未驗算：把求得的 x 代回原式檢驗，可達到 100% 檢查零失誤。'
    ],
    mnemonic: '「天平兩邊同加減，同乘同除不變心；零不能作除數記心中，移項跨過等號要變號！」',
    juniorHighBridge: '國一上第三章【一元一次方程式】：國中核心起手式！將進階到含括號去括號法則、分數型方程式去分母（同乘公倍數）與複雜文字應用題。'
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🔬 自然科學領域 (Science)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'sci-u1': {
    title: '天氣變化、水循環與氣團鋒面',
    subject: 'science',
    subjectName: '自然科學',
    coreCompetencies: [
      '掌握大氣水循環三態變化（蒸發、凝結、凝固、降水）',
      '辨識地面天氣圖符號：高氣壓 (H)、低氣壓 (L)、冷鋒、暖鋒、滯留鋒',
      '理解臺灣梅雨季成因（冷暖氣團勢力相當形成的滯留鋒面）'
    ],
    formulasAndRules: [
      {
        name: '氣壓與氣流流向規律',
        formula: '風從高氣壓 (H) 吹向低氣壓 (L)；北半球高壓順時針輻散，低壓逆時針輻合',
        detail: '低氣壓中心氣流上升容易凝結成雲致雨，天氣多陰雨；高氣壓中心氣流下沉天氣晴朗。'
      },
      {
        name: '鋒面特徵對比表',
        formula: '冷鋒：冷推暖，氣溫驟降伴隨強陣雨；滯留鋒：冷暖僵持，連續降雨（5~6月梅雨）',
        detail: '冷鋒符號為藍色實心三角形；暖鋒為紅色實心半圓形；滯留鋒為冷暖符號交替反向排列。'
      }
    ],
    topPitfalls: [
      '❌ 誤以為「高氣壓容易下雨」：高氣壓中心空氣下沉增溫不利成雲，故高壓晴朗、低壓陰雨！',
      '❌ 冷暖鋒符號混淆：冷鋒符號的尖角指向其「前進方向」！',
      '❌ 露與霜的形態混淆：露是液態水滴（氣溫高於 0℃ 凝結），霜是固態冰晶（氣溫低於 0℃ 凝華）。'
    ],
    mnemonic: '「高壓晴朗低壓雨，風自高壓向低吹；冷鋒過境氣溫降，滯留梅雨連綿長！」',
    juniorHighBridge: '國三下【地球科學・大氣與天氣】：深入學習科氏力、等壓線密度判斷風速、溫帶氣旋與颱風結構分析。'
  },

  'sci-u2': {
    title: '水溶液的性質、酸鹼指示劑與酸鹼中和',
    subject: 'science',
    subjectName: '自然科學',
    coreCompetencies: [
      '掌握常見水溶液酸鹼性分類（醋/檸檬汁酸性、純水/食鹽水中性、小蘇打/氨水/石灰水鹼性）',
      '熟練石蕊試紙、廣用試紙與天然指示劑（紫高麗菜汁）之變色規律',
      '理解酸鹼中和反應生成「鹽和水」且為「放熱反應」之本質'
    ],
    formulasAndRules: [
      {
        name: '石蕊試紙口訣',
        formula: '酸使藍變紅；鹼使紅變藍；中性兩者皆不變',
        detail: '速記法：酸性「紅通通（危險酸）」；鹼性「藍汪汪（基礎鹼）」。'
      },
      {
        name: '酸鹼中和化學通式',
        formula: '酸 + 鹼 \\rightarrow 鹽 + 水 + 熱量 (放熱反應)',
        detail: '酸中的氫離子 (H⁺) 與鹼中的氫氧根離子 (OH⁻) 結合生成水分子 (H₂O)，反應釋放熱量使溫度計讀數上升。'
      }
    ],
    topPitfalls: [
      '❌ 誤以為「酸鹼中和後的溶液必定是中性」：只有強酸與強鹼恰好等當量完全中和時才為中性，且反應必放熱！',
      '❌ 誤以為所有水溶液都能導電：只有溶質為「電解質」（酸、鹼、鹽）才能導電，純糖水、酒精（非電解質）不能導電！',
      '❌ 試紙沾取方式錯誤：絕不能直接將試紙丟入待測水溶液中，必須用玻璃棒或滴管沾取少許滴在試紙上！'
    ],
    mnemonic: '「酸性藍變紅、鹼性紅變藍；酸鹼中和生鹽水，溫度上升必放熱；電解導電糖水休！」',
    juniorHighBridge: '國二下【理化・酸鹼鹽】：深入學習 pH 值對數定義（pH = -log[H⁺]）、阿瑞尼斯電離說與沉澱反應。'
  },

  'sci-u3': {
    title: '電與磁、電磁鐵變因探究與馬達應用',
    subject: 'science',
    subjectName: '自然科學',
    coreCompetencies: [
      '理解厄斯特實驗（電流磁效應）：導線通電會在周圍產生磁場使指針偏轉',
      '掌握增強電磁鐵磁力的三大獨立控制變因（線圈匝數、電池串聯數、鐵芯）',
      '理解電磁鐵與天然磁鐵的異同（磁極與磁力均受電流控制）'
    ],
    formulasAndRules: [
      {
        name: '增強電磁鐵磁力三大法則',
        formula: '1. 增加線圈圈數  2. 串聯更多電池 (增大電流)  3. 內部置入鐵芯',
        detail: '鐵芯會被磁化形成強大合成磁場；電池並聯時電壓不變，磁力幾乎不變，必須「串聯」！'
      },
      {
        name: '安培右手定則（方向判斷）',
        formula: '右手四指彎曲順著「電流方向」，大拇指所指方向即為「N 極 (北極)」',
        detail: '改變電池正負極方向，電磁鐵的 N/S 極立即對調！'
      }
    ],
    topPitfalls: [
      '❌ 電池並聯誤以為會增強磁力：電池並聯電壓不變，電流不變，只有串聯才能增加磁力！',
      '❌ 誤以為通電斷電磁性不變：電磁鐵的最大優勢是「斷電即失去磁性」，具備可控性（如起重機、磁浮列車）。',
      '❌ 鐵芯材質誤用鋼釘或銅棒：銅不是鐵磁性金屬無法增強磁場；純鐵芯退磁快最理想。'
    ],
    mnemonic: '「電生磁場厄斯特，右手安培定方向；線圈越多磁越強，電池串聯鐵芯良；通電吸鐵斷電放！」',
    juniorHighBridge: '國三上【理化・電與磁】：延伸學習冷次定律、法拉第電磁感應（磁生電、發電機原理）與右手開掌定則受力分析。'
  },

  'sci-u6': {
    title: '簡單機械：槓桿平衡、滑輪與輪軸原理',
    subject: 'science',
    subjectName: '自然科學',
    coreCompetencies: [
      '掌握槓桿平衡條件：施力 × 施力臂 = 抗力 × 抗力臂（力矩平衡）',
      '辨別三類槓桿（省力費時、費力省時、等臂槓桿）的生活實例',
      '理解動滑輪（省一半力）與定滑輪（改變施力方向、不省力）之機械效益'
    ],
    formulasAndRules: [
      {
        name: '槓桿力矩平衡黃金定律',
        formula: '施力 \\times 施力臂 = 抗力 \\times 抗力臂 (L_1 \\times d_1 = L_2 \\times d_2)',
        detail: '• 施力臂 > 抗力臂 ➔ 省力費時（如開瓶器、指甲剪、拔釘錘）\n• 施力臂 < 抗力臂 ➔ 費力省時（如筷子、鑷子、掃帚、釣魚竿）\n• 施力臂 = 抗力臂 ➔ 不省力不費力（如天平、蹺蹺板）'
      },
      {
        name: '滑輪省力特性對比',
        formula: '定滑輪：施力 = 物重 (只改方向)；動滑輪：施力 = \\frac{1}{2} 物重 (省一半力)',
        detail: '動滑輪雖然省力一半，但繩子必須拉出 2 倍距離（功的原理：沒有任何機械可以省功）。'
      }
    ],
    topPitfalls: [
      '❌ 誤以為「省力的機械也能省距離/省工」：機械可以省力或省時，但「絕對無法省功 (Work)」！',
      '❌ 支點、施力點、抗力點位置找錯：筷子夾菜時，手指施力點在中央，支點在筷子尾端，為費力槓桿！',
      '❌ 忘記力臂是「垂直距離」：支點到力的作用線的垂直距離才是真正的力臂。'
    ],
    mnemonic: '「力臂乘力等力矩，兩端平衡看乘積；施力臂長必省力，費力機械賺距離；定輪改向動輪半！」',
    juniorHighBridge: '國三上【理化・功與能、簡單機械】：導入功 W = F × S、功率 P = W / t 與斜面機械效益，會考計算題核心常客。'
  },

  'sci-u10': {
    title: '顯微鏡光學操作、微觀世界與細胞構造',
    subject: 'science',
    subjectName: '自然科學',
    coreCompetencies: [
      '掌握複式顯微鏡與解剖顯微鏡的構造、功能與成像差異',
      '理解複式顯微鏡成像為「上下顛倒、左右相反的倒立放大虛像」',
      '熟記高倍鏡與低倍鏡之光學四特徵（亮暗、大小、多寡、範圍）與載玻片移動口訣'
    ],
    formulasAndRules: [
      {
        name: '顯微鏡放大倍率公式',
        formula: '總放大倍率 = 目鏡倍率 \\times 物鏡倍率',
        detail: '例：目鏡 10X，物鏡 40X，放大倍率為 10 × 40 = 400 倍。'
      },
      {
        name: '高低倍鏡視野四大對比規律',
        formula: '低倍鏡換高倍鏡 ➔ 【暗、小、少、大】',
        detail: '• 視野亮度：變【暗】（進光量減少，需開大光圈或用凹面鏡）\n• 觀察範圍：變【小】\n• 細胞數量：變【少】\n• 細胞體積：變【大】'
      },
      {
        name: '載玻片移動追逐法則',
        formula: '「物在何處，玻片就往何處推」',
        detail: '若物像偏在右上角，實物其實在左下角，想把像移至中央，載玻片必須直接朝「右上角」推動！'
      }
    ],
    topPitfalls: [
      '❌ 在高倍鏡下轉動「粗調節輪」：在高倍鏡下絕對嚴禁轉動粗調節輪，否則極易壓碎玻片並損壞珍貴物鏡！只能轉動「細調節輪」！',
      '❌ 先用高倍鏡尋找目標：標準操作流程「必須先用低倍鏡找到目標並置中」，再轉動旋轉盤切換高倍鏡！',
      '❌ 字母旋轉想像錯誤：複式顯微鏡成 180° 倒立像，字母「b ➔ q」、「p ➔ d」、「d ➔ p」、「e ➔ ǝ」。'
    ],
    mnemonic: '「先低後高先粗後細，高倍鏡下只動細調；換上高倍暗小少大，物在哪方玻片哪推；複式上下左右顛倒！」',
    juniorHighBridge: '國一上【生物・細胞的構造與能量傳遞】：延伸至動植物細胞構造差異（細胞壁、葉綠體、大液泡）、滲透作用與顯微測微尺校準。'
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🗣️ 英語文領域 (English)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'eng-u1': {
    title: 'Daily Routines, Present Simple & Third-Person Singular',
    subject: 'english',
    subjectName: '英語文領域',
    coreCompetencies: [
      '掌握現在簡單式 (Simple Present Tense) 表達生活常態習慣與客觀真理',
      '熟練主詞第三人稱單數 (He / She / It) 時動詞加 -s / -es / -ies 規則',
      '精確使用頻率副詞 (always, usually, often, sometimes, never) 的句中位置'
    ],
    formulasAndRules: [
      {
        name: '三單動詞字尾變化四大法則',
        formula: '一般加 -s；字尾 -s, -sh, -ch, -x, -o 加 -es；子音 + y 改 -ies',
        detail: '• plays, eats  • watches, washes, goes, fixes  • studies, flies  • 特殊：have ➔ has'
      },
      {
        name: '頻率副詞位置口訣',
        formula: '「be 動詞之後，一般動詞之前，簡答句在助動詞之前」',
        detail: '• He is ALWAYS happy. (be 動詞後)\n• She OFTEN reads books. (一般動詞前)\n• Yes, I usually do. (助動詞前)'
      }
    ],
    topPitfalls: [
      '❌ be 動詞與一般動詞同時出現：*He is play soccer.* 是嚴重中式英語！應為 He plays soccer. 或 He is playing soccer.',
      '❌ 疑問句與否定句忘記動詞打回原形：*Does he likes apples?* 錯！助動詞 does 後面必須接【原形動詞 like】！',
      '❌ 主詞三單判斷失誤：Everyone, Someone, Nobody 在文法上均視為【單數主詞】，動詞要加 -s！'
    ],
    mnemonic: '「常態真理現在式，三單他她動詞加S；疑問否定助動出，後面動詞回原形；頻率副詞be後動前！」',
    juniorHighBridge: '國一上英語：會考英語單選第 1~5 題高頻考點，現在簡單式、助動詞 do/does/did 選擇與頻率副詞位置年年必考。'
  },

  'eng-u2': {
    title: 'Past Tense, Irregular Verbs & Time Consistency',
    subject: 'english',
    subjectName: '英語文領域',
    coreCompetencies: [
      '熟練規則動詞過去式加 -ed 規則與母音發音 (/t/, /d/, /ɪd/)',
      '掌握高頻不規則動詞過去式 (go➔went, buy➔bought, see➔saw, eat➔ate, make➔made)',
      '能運用過去式時間副詞 (yesterday, last night, two days ago) 保持時態一致性'
    ],
    formulasAndRules: [
      {
        name: '過去式否定句與疑問句結構',
        formula: '否定：主詞 + didn\'t + 原形動詞；疑問：Did + 主詞 + 原形動詞?',
        detail: '只要句子裡出現助動詞 did / didn\'t，後面動詞一律回歸【原形動詞】！'
      },
      {
        name: '高頻不規則動詞家族',
        formula: 'A-B-B 型 (buy-bought, catch-caught)；A-A-A 型 (read-read, cut-cut, put-put)',
        detail: 'read 過去式拼法不變但發音變為 /rɛd/；write ➔ wrote；take ➔ took；find ➔ found。'
      }
    ],
    topPitfalls: [
      '❌ didn\'t 後面重複使用過去式：*We didn\'t went there.* 錯！應為 We didn\'t go there.',
      '❌ ago 與 before 混淆：時間段 + ago（如 three days ago）專門搭配過去簡單式！',
      '❌ 對等連接詞 and 前後時態不一致：Yesterday I cooked dinner AND *watch* TV. 錯！應為 watched！'
    ],
    mnemonic: '「過去發生用過去式，規則動詞加ed；不規則變化下苦功，助動did後原形回；yesterday與ago標誌明！」',
    juniorHighBridge: '國一下英語：進階學習過去進行式 (was/were + V-ing) 與 when/while 連接詞引導的長篇敘事時態交替。'
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 📖 國語文領域 (Mandarin)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'man-u1': {
    title: '漢字結構六書原則（象形、指事、會意、形聲）',
    subject: 'mandarin',
    subjectName: '國語文領域',
    coreCompetencies: [
      '理解許慎《說文解字》六書定義：「象形、指事、會意、形聲、轉注、假借」',
      '精確區分「獨體造字（文：象形、指事）」與「合體造字（字：會意、形聲）」',
      '能辨識形聲字的形符（表義類）與聲符（表讀音）'
    ],
    formulasAndRules: [
      {
        name: '四種核心造字法判別口訣',
        formula: '象形畫實物、指事加符號、會意合兩義、形聲半形半聲',
        detail: '• 象形（獨體）：日、月、山、水、木、人、魚、鳥（具體形貌）\n• 指事（獨體）：上、下、本（木下一橫表根）、末（木上一橫表梢）、刃（刀口一點）\n• 會意（合體）：休（人倚木）、武（止戈）、信（人言）、採（手爪採木）\n• 形聲（合體，佔漢字 80% 以上）：江（水形工聲）、鯉（魚形里聲）、芳（艸形方聲）'
      }
    ],
    topPitfalls: [
      '❌ 指事與象形混淆：象形畫的是「整個具體實體」；指事是在象形字上加上「抽象指示符號」或純抽象符號（如刃、本、上、下）。',
      '❌ 會意與形聲混淆：會意兩部分都是「意思」合成，讀音與部件無關；形聲其中一部分必定代表「聲音/諧音」！',
      '❌ 誤以為「轉注、假借」也是造字法：許慎六書中，象形/指事/會意/形聲為「造字法」；轉注/假借為「用字法」！'
    ],
    mnemonic: '「象形畫物見形狀，指事抽象加符號；會意合義情意深，形聲偏旁聲符標；前四造字後二用！」',
    juniorHighBridge: '國一上國文：各版本第一單元國文常識必考！會考常以生僻字考查形聲字之「形符查部首、聲符猜讀音」。'
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🌏 社會領域 (Social Studies)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'soc-u1': {
    title: '臺灣近代經濟發展、產業轉型與開港通商',
    subject: 'social',
    subjectName: '社會領域',
    coreCompetencies: [
      '掌握 1860 年北京條約臺灣開港通商四大港口（安平、淡水、打狗、雞籠）',
      '理解「三寶外銷（茶、糖、樟腦）」對臺灣經濟重心由南向北轉移之影響',
      '綜觀戰後臺灣經濟發展三大進程（土地改革與進口替代 ➔ 加工出口區 ➔ 高科技半導體園區）'
    ],
    formulasAndRules: [
      {
        name: '開港三寶與產地經濟地圖',
        formula: '茶葉（北部丘陵）、樟腦（中北部山區）、蔗糖（中南部平原）',
        detail: '茶葉與樟腦由大稻埕、淡水外銷，促成臺灣北部經濟蓬勃崛起，政治中心隨之北移（臺北建城）。'
      },
      {
        name: '戰後經濟轉型四部曲',
        formula: '以農養工 ➔ 輕工業出口導向 (加工出口區) ➔ 重化工業 (十大建設) ➔ 竹科高科技矽島',
        detail: '1970 年代推動十大建設（中鋼、中船、中山高），1980 年代成立新竹科學園區奠定半導體龍頭地位。'
      }
    ],
    topPitfalls: [
      '❌ 蔗糖產地誤植為北部：蔗糖主要集中於中南部肥沃日照充足平原，北部以茶葉和樟腦為主！',
      '❌ 經濟重心北移時機點搞錯：不是國民政府遷臺才北移，早在「1860 年開港通商茶樟外銷」即促成重心北移！',
      '❌ 土地改革順序混淆：三七五減租 ➔ 公地放領 ➔ 耕者有其田。'
    ],
    mnemonic: '「開港通商淡安雞打，茶樟北部蔗糖南；大稻埕興重心北，加工出口轉晶圓！」',
    juniorHighBridge: '國一上臺灣史與臺灣地理：會考歷史科核心，貫穿荷蘭、清領後期、日治及戰後臺灣產業貿易脈絡。'
  },

  'math-u9': {
    title: '圖形的放大、縮小與比例尺應用',
    subject: 'math',
    subjectName: '數學領域',
    coreCompetencies: [
      '掌握放大圖與縮圖的幾何本質：對應角維持不變，對應邊成等比例',
      '理解面積變化率為「邊長倍數的平方 (k²)」',
      '熟練比例尺三大表示法（比值式、比的形式、線段圖式）與實際長度換算'
    ],
    formulasAndRules: [
      {
        name: '放大縮小圖幾何特徵定律',
        formula: '對應角永遠相等；對應邊長變為 k 倍；圖形面積變為 k^2 倍',
        detail: '例如：長方形長寬各放大 3 倍，其面積放大為 3 × 3 = 9 倍！'
      },
      {
        name: '比例尺核心計算三角公式',
        formula: '比例尺 = \\frac{地圖縮圖長度}{實際地面長度}；實際長度 = 縮圖長度 \\div 比例尺',
        detail: '換算時務必注意長度單位統一：1 公里 = 1000 公尺 = 100000 公分（5 個零）。'
      }
    ],
    topPitfalls: [
      '❌ 誤以為「角度也會跟著放大」：三角形放大 2 倍後，內角和依然是 180°，三個角角度完全不變！',
      '❌ 誤以為面積只放大 k 倍：邊長變 2 倍，面積變 4 倍；邊長變 3 倍，面積變 9 倍！',
      '❌ 比例尺換算忘記 5 個零：1:50000 地圖上 4 公分，實際距離為 4 × 50000 = 200000 公分 = 2 公里！'
    ],
    mnemonic: '「放大縮小角不變，邊長倍數面積方；圖長除以實長尺，公里換算五個零！」',
    juniorHighBridge: '國三上【相似形與三角形心】：相似多邊形對應角相等、對應邊成比例，是國中會考幾何大題核心。'
  },

  'math-u10': {
    title: '基準量與比較量、加成打折與雞兔同籠',
    subject: 'math',
    subjectName: '數學領域',
    coreCompetencies: [
      '掌握基準量（當作 1 倍的量）與比較量的關係',
      '熟練商業加成（成本 × (1 + 成數)）與打折（定價 × 折扣）計算',
      '靈活運用「假設法」與母子和差模型解決雞兔同籠及分配問題'
    ],
    formulasAndRules: [
      {
        name: '基準量三大公式',
        formula: '比值 = 比較量 \\div 基準量；比較量 = 基準量 \\times 比值；基準量 = 比較量 \\div 比值',
        detail: '• 母子和（兩量之和）= 基準量 × (1 + 比值)；• 母子差（兩量之差）= 基準量 × (比值 - 1)。'
      },
      {
        name: '商業折數與加成計算',
        formula: '售價 = 定價 \\times 折扣 (八折為 0.8)；定價 = 成本 \\times (1 + 加成)',
        detail: '加三成五即增加 35%，定價 = 成本 × 1.35；打七五折即售價 = 定價 × 0.75。'
      },
      {
        name: '雞兔同籠假設法公式',
        formula: '兔子數 = (實際總腳數 - 總隻數 \\times 2) \\div (4 - 2)',
        detail: '先假設全部都是雞，算出缺少的腳數，每補 2 隻腳就將一隻雞換成一隻兔子。'
      }
    ],
    topPitfalls: [
      '❌ 基準量找錯對象：題目中「比...」、「是...的幾倍」，「的」後面的那個量通常就是基準量 1 倍！',
      '❌ 打八折與降價八成混淆：打八折是付原價的 80%；若「降價 20%」也是付 80%，切勿將打八折算成減 80%！',
      '❌ 雞兔同籠腳數差算錯：兔有 4 隻腳、雞有 2 隻腳，替換一隻相差 2 隻腳。'
    ],
    mnemonic: '「基準為一比為倍，求基用除求比乘；加成打折看乘數，全設為雞算兔腿！」',
    juniorHighBridge: '國一下【二元一次聯立方程式】：雞兔同籠與折數問題將直接化為列聯立方程式求解，國小假設法可作為快速心算直觀驗算。'
  },

  'math-u12': {
    title: '圓形百分圖與各類統計圖表判讀製作',
    subject: 'math',
    subjectName: '數學領域',
    coreCompetencies: [
      '理解圓形圖 360° 代表 100%，圓心角 = 360° × 各項目百分率',
      '精確依序計算各項百分率，確保總和恰為 100%（誤差微調原則）',
      '辨析長條圖、折線圖與圓形圖之最佳使用時機'
    ],
    formulasAndRules: [
      {
        name: '圓心角與百分率互化公式',
        formula: '圓心角 = 360^\\circ \\times 百分率；百分率 = \\frac{圓心角}{360^\\circ} \\times 100\\%',
        detail: '例如：佔 25% 的項目，圓心角為 360° × 0.25 = 90°；佔 10% 為 36°。'
      },
      {
        name: '三大統計圖表特徵對比',
        formula: '• 長條圖：比較各類「數量高低」；• 折線圖：觀察「隨時間趨勢變化」；• 圓形圖：呈現「整體佔比結構」',
        detail: '若各項百分率四捨五入後總和為 99% 或 101%，通常將 1% 的微調加在「比例最大」或「其他」項目上。'
      }
    ],
    topPitfalls: [
      '❌ 圓心角與百分率數值混淆：圓心角總和是 360 度，百分率總和是 100%，計算時角度不能直接填百分率！',
      '❌ 折線圖濫用：無時間先後連續關係的離散類別（如血型、水果喜好）不可使用折線圖，應用長條圖！',
      '❌ 百分率總和未檢驗：繪製圓形圖第一步必須先檢驗全部百分率相加是否精確等於 100%。'
    ],
    mnemonic: '「圓形全周三百六，百分比例乘圓心；折線看趨勢長條比高低，百分總和必為百！」',
    juniorHighBridge: '國一下【統計圖表與資料分析】：引入相對次數分配折線圖、累積次數曲線、盒狀圖 (Box Plot) 與中位數、四分位距 (IQR)。'
  },

  'sci-u7': {
    title: '物質的燃燒、生鏽防鏽與氧化反應',
    subject: 'science',
    subjectName: '自然科學',
    coreCompetencies: [
      '掌握燃燒三要素（可燃物、助燃物/氧氣、達到燃點）與滅火原理',
      '理解鐵生鏽的條件（必須同時具備「水分」與「氧氣」，酸與鹽會加速生鏽）',
      '熟練四大防鏽工程手段（塗油漆、塗油、電鍍、製成不鏽鋼合金）'
    ],
    formulasAndRules: [
      {
        name: '燃燒三要素與對應滅火法',
        formula: '1. 移除可燃物 (開闢防火巷)  2. 隔絕助燃物 (蓋濕布/噴CO₂消泡)  3. 降溫至燃點以下 (噴水冷卻)',
        detail: '只要破壞燃燒三要素中的任一要素，火勢即可立即撲滅。油鍋起火嚴禁澆水！'
      },
      {
        name: '鐵生鏽化學反應本質',
        formula: '鐵 + 水 + 氧氣 \\rightarrow 水合氧化鐵 (鐵鏽，紅褐色鬆散多孔)',
        detail: '鐵鏽無法阻擋內部繼續氧化；乾燥環境或隔絕空氣中鐵製品不易生鏽。'
      }
    ],
    topPitfalls: [
      '❌ 油鍋起火潑水滅火：油比水輕且水遇高溫瞬間汽化會引發劇烈火球噴濺！正確做法是「蓋上鍋蓋切斷瓦斯」！',
      '❌ 誤以為鐵生鏽只因為有水：純水中若完全無溶氧（如煮沸冷卻且封油的水），鐵釘不會生鏽；必須水與氧並存！',
      '❌ 誤以為生鏽重量變輕：鐵與氧氣結合生成鐵鏽，總質量其實是「變重」的（質量守恆）！'
    ],
    mnemonic: '「燃燒三要缺一滅，油鍋蓋蓋禁澆水；鐵鏽需氧兼有水，隔絕塗層方長久！」',
    juniorHighBridge: '國二上【理化・氧化與還原】：引入活性大小順序表（鉀鈉鈣鎂鋁碳鋅鐵錫鉛氫銅汞銀鉑金），強還原劑搶氧概念。'
  },

  'sci-u8': {
    title: '池塘與森林生態系、食物鏈與生物放大效應',
    subject: 'science',
    subjectName: '自然科學',
    coreCompetencies: [
      '掌握生態系三大角色（生產者、消費者、分解者）及其物質循環與能量單向流動',
      '理解能量傳遞「10% 定律」（每一營養階層僅能傳遞約 10% 能量，其餘轉為熱散失）',
      '理解難分解脂溶性毒物（重金屬、DDT、塑膠微粒）之「生物放大作用」'
    ],
    formulasAndRules: [
      {
        name: '生態能量塔與物質循環',
        formula: '太陽能 \\rightarrow 生產者 \\rightarrow 各級消費者 (能量逐級遞減約 90% 散失)；物質在分解者作用下循環',
        detail: '能量流動是「單向不可逆」的，最終以熱能輻射散失；無機物質則在生物與非生物間「封閉循環」。'
      },
      {
        name: '生物放大作用 (Biological Magnification)',
        formula: '食物鏈階層越高，體內累積的難分解毒物濃度越驚人 (最高階掠食者受害最深)',
        detail: '例如：草 (1 ppm) ➔ 蝗蟲 ➔ 青蛙 ➔ 老鷹 (數萬 ppm)，老鷹體內毒素濃度最高。'
      }
    ],
    topPitfalls: [
      '❌ 誤以為能量可以在生態系中循環利用：物質可以循環，但「能量絕對不能循環」，必須持續仰賴太陽能補充！',
      '❌ 分解者角色混淆：真菌（香菇、黴菌）與細菌為分解者，將有機物化為無機養分回歸大自然；禿鷹為清除者。',
      '❌ 生物放大濃度最低者判斷錯誤：生產者（如浮游藻類、青草）濃度最低，金字塔頂端的最高階消費者濃度最高！'
    ],
    mnemonic: '「自養植物生產者，分解細菌清道夫；能量傳遞十之一，物質循環能量單；毒素積聚老鷹苦！」',
    juniorHighBridge: '國一上【生物・生態系與生物多樣性】：探討族群密度、群落演替、碳循環與氮循環（固氮根瘤菌）、全球暖化。'
  },

  'sci-u9': {
    title: '聲音的三要素：音調、響度與音色探究',
    subject: 'science',
    subjectName: '自然科學',
    coreCompetencies: [
      '理解聲音由「物體振動」產生，傳播必須依靠介質（真空不能傳聲）',
      '掌握聲音三要素之物理決定量：音調（頻率 Hz）、響度（振幅 dB）、音色（波形材質）',
      '熟記弦樂器與管樂器改變音調高低的控制變因'
    ],
    formulasAndRules: [
      {
        name: '聲音三要素決定因對照表',
        formula: '• 音調高低 \\leftarrow 振動頻率 (Hz)；• 響度大小 \\leftarrow 振動振幅；• 音色特徵 \\leftarrow 振動波形與材質',
        detail: '頻率越高音調越尖銳；振幅越大聲音越響亮；不同樂器即便同音調同響度，波形不同音色亦截然不同。'
      },
      {
        name: '弦樂器音調升高三心法',
        formula: '弦越【短】、越【細】、拉得越【緊】，振動頻率越快，音調越【高】',
        detail: '按弦讓振動部分縮短會使聲音變高；換粗弦或轉鬆琴栓會使音調變低。'
      }
    ],
    topPitfalls: [
      '❌ 誤以為大聲說話聲音傳得比較快：在相同介質與氣溫下，聲音傳播速率相同！音量大只代表「振幅大」，絕不代表速度變快！',
      '❌ 真空中傳聲迷思：太空人直接說話聽不見，因為真空中沒有空氣分子做介質傳遞機械波！',
      '❌ 聽力保護分貝標準：一般談話約 60 分貝，長期處於 85 分貝以上會對內耳毛細胞造成永久性聽力損傷。'
    ],
    mnemonic: '「振動發聲需介質，真空中傳聲無門；頻率高低定音調，振幅大小定響度；弦短細緊音高亢！」',
    juniorHighBridge: '國二上【理化・聲音的傳播與反射】：聲速公式 v = 331 + 0.6T (m/s)、回聲回音測距 (S = v × t / 2) 與超聲波應用。'
  },

  'eng-u7': {
    title: 'Future Tense, Career Goals & Life Aspirations',
    subject: 'english',
    subjectName: '英語文領域',
    coreCompetencies: [
      '熟練運用「will + 原形動詞」與「be going to + 原形動詞」表達未來計畫與預測',
      '掌握常見職業名詞 (veterinarian, software engineer, astronaut, architect)',
      '精確搭配未來時間副詞 (tomorrow, next week, in the future)'
    ],
    formulasAndRules: [
      {
        name: '未來式兩大核心句型',
        formula: '1. 主詞 + will + 原形動詞  2. 主詞 + am/is/are going to + 原形動詞',
        detail: '• will 後面一律接原形動詞（無三單變化）；• be going to 的 be 動詞需隨主詞人稱變化。'
      },
      {
        name: '生涯句型表達',
        formula: 'I am going to be a/an [Career] when I grow up.',
        detail: '例：I want to be a software engineer because I love coding interactive games.'
      }
    ],
    topPitfalls: [
      '❌ will 後面動詞加 s 或 ed：*He will plays soccer.* 錯！助動詞 will 後必須接【原形動詞 play】！',
      '❌ be going to 漏掉 be 動詞：*He going to study abroad.* 錯！應為 He IS going to study abroad.',
      '❌ 職業名詞單數漏掉冠詞 a/an：a veterinarian (輔音開頭用 a)；an architect (元音開頭用 an)。'
    ],
    mnemonic: '「未來計畫用will或be going to，後面動詞原形不離手；tomorrow與next標誌現，生涯願景勇敢衝！」',
    juniorHighBridge: '國一下英語：掌握 will 與 be going to 語意細微差別（即時決定 vs. 事先計畫），並融入 if / when 引導之條件句「現在式代替未來式」最高頻考點。'
  },

  'eng-u8': {
    title: 'Adjective Comparison: Comparatives & Superlatives',
    subject: 'english',
    subjectName: '英語文領域',
    coreCompetencies: [
      '熟練單音節與雙音節形容詞比較級 (-er) 與最高級 (-est) 規則變化',
      '掌握三音節以上長單字使用 more / the most 的規則',
      '精確掌握高頻不規則變化形容詞 (good-better-best, bad-worse-worst, many-more-most)'
    ],
    formulasAndRules: [
      {
        name: '形容詞比較級與最高級標準句型',
        formula: 'A is [adj-er / more adj] + than + B；A is the [adj-est / most adj] of / in...',
        detail: '• 句中有「than (比)」一律用比較級！\n• 句中有「the」且接範圍 (in the world, of all) 一律用最高級！'
      },
      {
        name: '不規則變化三劍客口訣',
        formula: 'good ➔ better ➔ best；bad ➔ worse ➔ worst；many/much ➔ more ➔ most',
        detail: 'far ➔ farther/further ➔ farthest/furthest；little ➔ less ➔ least。'
      }
    ],
    topPitfalls: [
      '❌ 雙重比較級錯誤：*He is more taller than me.* 錯！taller 已經是比較級，絕對不可再加 more！',
      '❌ 最高級漏掉定冠詞 the：*She is fastest runner in our school.* 錯！最高級前面必加 【the】！',
      '❌ 單音節短母音子音字尾未重複字尾：big ➔ bigger ➔ biggest；hot ➔ hotter ➔ hottest！'
    ],
    mnemonic: '「兩者相比如見than，字尾加er或前加more；三者以上最高級，必定加the最無雙；不規則變化死記牢！」',
    juniorHighBridge: '國二上英語：延伸至「as + 原級 + as (和...一樣)」、「The more..., the more... (越...越...)」與「副詞比較級最高級」，會考閱讀克漏字核心題型。'
  },

  'man-u2': {
    title: '古典詩歌體制：唐代近體詩格律與對仗原則',
    subject: 'mandarin',
    subjectName: '國語文領域',
    coreCompetencies: [
      '理解近體詩三大形式：五言絕句 (20字)、七言絕句 (28字)、五言律詩 (40字)、七言律詩 (56字)',
      '掌握律詩嚴格格律要求：八句四聯（首聯、頷聯、頸聯、尾聯），頷聯與頸聯「必須嚴格對仗」',
      '掌握近體詩押韻通則：偶數句（二、四、六、八句）必押韻，一韻到底不可換韻，第三句絕對不可押韻'
    ],
    formulasAndRules: [
      {
        name: '律詩四聯名稱與對仗規則',
        formula: '一二句【首聯】、三四句【頷聯 (必對仗)】、五六句【頸聯 (必對仗)】、七八句【尾聯】',
        detail: '對仗要求：詞性相同、結構相同、平仄相對。例如：「白日依山盡，黃河入海流」；「山重水複疑無路，柳暗花明又一村」。'
      },
      {
        name: '近體詩押韻三鐵律',
        formula: '1. 偶數句必押韻  2. 第一句可押可不押  3. 一韻到底，平聲通押，不可換韻',
        detail: '奇數句除了第一句之外，絕對不能押韻（如第三句末字不可押韻）。'
      }
    ],
    topPitfalls: [
      '❌ 對仗聯位搞錯：律詩必須對仗的是中間的【頷聯（三、四句）與頸聯（五、六句）】，首聯與尾聯通常不對仗！',
      '❌ 誤以為古體詩也需要遵守格律：近體詩（唐代新興）格律嚴謹；古體詩句數不限、可換韻、不講究平仄對仗。',
      '❌ 押韻字找錯：近體詩押韻看的是【每句最後一個字】，看第一句末字與偶數句末字是否韻母相同。'
    ],
    mnemonic: '「絕句四句律詩八，二四六八偶句押；一韻到底平聲韻，頷聯頸聯必對仗；首尾起承轉合美！」',
    juniorHighBridge: '國一上國文第二單元近體詩選（李白、王維、杜甫）：會考每年必考一題唐詩體制判定（格律、對仗句配對、詩意主旨）。'
  },

  'soc-u5': {
    title: '兒童權利公約 (CRC)、數位人權與反霸凌機制',
    subject: 'social',
    subjectName: '社會領域',
    coreCompetencies: [
      '掌握聯合國《兒童權利公約》(CRC) 保障對象（未滿 18 歲）與四大核心原則',
      '理解四大基本兒少人權：生存權、發展權、受保護權、參與權',
      '掌握校園與數位反霸凌應對機制（教育部 24 小時免付費反霸凌求助專線 1953）'
    ],
    formulasAndRules: [
      {
        name: '兒童權利公約四大核心原則',
        formula: '1. 禁止歧視  2. 兒童最佳利益  3. 生存及發展權  4. 尊重兒童意見 (參與權)',
        detail: '兒少並非成人的附屬品，享有獨立完整的法律人格與表達意見之基本權利。'
      },
      {
        name: '校園與數位安全緊急求助代碼',
        formula: '1953 (教育部反霸凌專線)；165 (反詐騙)；113 (婦幼保護/家暴)；110 (警察局)',
        detail: '1953 諧音「依舊武勇」，24 小時專人協助處理肢體、言語、關係及網路霸凌。'
      }
    ],
    topPitfalls: [
      '❌ CRC 保障年齡誤記為 12 歲：CRC 明確保障未滿 18 歲之所有人（包含兒童與少年）！',
      '❌ 面對網路霸凌冷漠旁觀：旁觀者的沈默即是加害者的溫床，應堅守「三不一留」（不轉發、不嘲弄、不隱忍、留證據截圖通報）。',
      '❌ 求助電話混淆：1953 為反霸凌；165 為防詐騙；113 為家暴受虐保護。'
    ],
    mnemonic: '「兒權公約未滿十八，生存發展受護參與；反霸專線一九五三，數位隱私慎行自律！」',
    juniorHighBridge: '國一下【公民・人權保障與兒少福利】：延伸學習《兒童及少年福利與權益保障法》、《少年事件處理法》與司法少年保護處分。'
  },

  'soc-u6': {
    title: '聯合國 SDGs 永續發展目標與無痕山林低碳實踐',
    subject: 'social',
    subjectName: '社會領域',
    coreCompetencies: [
      '掌握聯合國 2015 年通過之 17 項 SDGs 永續發展目標核心願景',
      '理解《巴黎協定》溫室氣體減量目標：控制地球平均升溫在「1.5 °C 以內」',
      '實踐低碳生活（減少食物里程、在地飲食）與「無痕山林 (Leave No Trace, LNT)」七大準則'
    ],
    formulasAndRules: [
      {
        name: '高頻三大核心 SDGs 目標',
        formula: '• SDG 13：氣候行動 (Climate Action)；• SDG 14：保育海洋生態；• SDG 15：保育陸域生態',
        detail: '臺灣 2050 淨零碳排四大轉型策略：能源轉型、產業轉型、生活轉型、社會轉型。'
      },
      {
        name: '無痕山林 (LNT) 核心心法',
        formula: '「行前充分準備 ➔ 尊重野生動植物 ➔ 帶走所有垃圾 ➔ 留給下一位旅人美好自然」',
        detail: '在自然環境中，除了照片什麼都不帶走；除了足跡什麼都不留下。'
      }
    ],
    topPitfalls: [
      '❌ SDGs 目標數量記錯：SDGs 共有 17 大核心目標，涵蓋經濟、社會、環境三大面向！',
      '❌ 溫升控制目標誤記為 2.5°C 或 3°C：最新全球共識嚴格控制在「1.5 °C 以內」以避免不可逆生態浩劫！',
      '❌ 廚餘果皮隨意丟棄在山林：果皮分解極慢，且會改變野生動物覓食習性造成生態破壞，果皮果核必須全部帶下山！'
    ],
    mnemonic: '「永續十七核心立，氣候行動減碳排；升溫限制一點五，無痕山林帶垃圾；吃在地縮里程美！」',
    juniorHighBridge: '國三下【公民與地理・全球議題與地球村】：探討全球氣候難民、跨國環境正義、碳稅與碳權交易市場機制。'
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🇬🇧 英語文領域 (English Language) - 續
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'eng-u3': {
    title: 'Unit 3: Places & Asking for Directions',
    subject: 'english',
    subjectName: '英語文領域',
    coreCompetencies: [
      '熟練核心方位介系詞 (next to, across from, between A and B, on the corner of)',
      '掌握禮貌問路句型 (Excuse me, how do I get to the library? / Where is...?)',
      '能清晰給出具體指引 (Go straight for two blocks, turn right at the bank, it\'s on your left)'
    ],
    formulasAndRules: [
      {
        name: '問路四大經典禮貌句型',
        formula: '1. Excuse me, how do I get to [place]?\n2. Where is the nearest [place]?\n3. Can you tell me the way to [place]?\n4. Is there a [place] around here?',
        detail: '開頭永遠以 Excuse me (不好意思打擾一下) 開場，語氣最自然得體。'
      },
      {
        name: '核心指路指令與方位介系詞',
        formula: '• Go straight (直走)  • Turn left / right (左轉/右轉)\n• Walk along [street] (沿著街道走)  • Cross the street (過馬路)\n• between A and B (在兩者之間)  • across from (在對面)  • next to (在旁邊)',
        detail: '指路說「在你的左手邊」固定用介系詞 on：It\'s on your left / right。'
      }
    ],
    topPitfalls: [
      '❌ between 連接詞用錯：between 必須搭配 and (between the bank AND the bookstore)，絕不可用 with 或 to！',
      '❌ turn left/right 誤加介系詞：正確為 Turn left 或 Turn right，不可寫成 Turn to left。',
      '❌ 方位左右介系詞誤用 in/at：在某人左/右側固定用 on (It\'s on your left)。'
    ],
    mnemonic: '「問路禮貌 Excuse me，直走左轉拐個彎；between 搭配 and 相伴，對面 across 正確現！」',
    juniorHighBridge: '國一下英語【Giving Directions & Community】：進階銜接十字路口 (intersection)、斑馬線 (crosswalk)、大眾運輸公車搭乘與會考地圖閱讀題。'
  },

  'eng-u4': {
    title: 'Unit 4: Food, Health & Body Care',
    subject: 'english',
    subjectName: '英語文領域',
    coreCompetencies: [
      '正確運用 have/has 表達身體不適症狀 (have a headache, stomachache, fever)',
      '熟練痛症複合字後綴 -ache 與各部位發音',
      '掌握診所看診對話與給予健康照護建議 (should get some rest, drink more water)'
    ],
    formulasAndRules: [
      {
        name: '身體症狀基本句型結構',
        formula: '主詞 + have / has + a + [symptom]\n例如：I have a headache. / He has a runny nose.',
        detail: '注意常見病痛如 headache, stomachache, toothache, cold, fever 前面通常要加不定冠詞 a。'
      },
      {
        name: '-ache 高頻痛症組合字表',
        formula: 'head + ache = headache (頭痛)；stomach + ache = stomachache (胃痛/肚子痛)；tooth + ache = toothache (牙痛)；ear + ache = earache (耳朵痛)',
        detail: '喉嚨痛為形容詞加名詞：sore throat (sore 為發炎刺痛的)。'
      },
      {
        name: '給予關心與醫囑建議句型',
        formula: '• What\'s the matter (with you)? / What\'s wrong?\n• You should [原形動詞] (例：You should take some medicine and stay in bed).',
        detail: 'should 為情態助動詞，後面必須接動詞原形 (Base Verb)。'
      }
    ],
    topPitfalls: [
      '❌ 誤寫 have cold 或 have headache（漏掉冠詞 a）：大部分具體可數病痛如 cold, fever, cough, headache 都要加 a (have a cold)！',
      '❌ 誤把 should 後面動詞加上 -s 或 -ed：should 是情態助動詞，後面永遠接原形 (You should drink water)。',
      '❌ sore 與 -ache 混淆：sore 是形容詞 (sore throat)，-ache 是名詞後綴 (headache)。'
    ],
    mnemonic: '「身體微恙 have a 接，頭痛 stomachache 加 a；情態助動 should 出現，後接原形最安全！」',
    juniorHighBridge: '國二上英語【Health, Habits & Illnesses】：深入探討過去分詞形容詞 (exhausted, swollen)、反身代名詞 (take care of yourself) 與生活健康閱讀題。'
  },

  'eng-u5': {
    title: 'Unit 5: Festivals, Holidays & World Cultures',
    subject: 'english',
    subjectName: '英語文領域',
    coreCompetencies: [
      '能以流利英語介紹臺灣三大傳統節慶（春節、端午節、中秋節）核心文化與食物',
      '認識西方重要節慶（Halloween, Thanksgiving, Christmas）由來與慶祝習俗',
      '精確掌握時間介系詞 in (月/年/季節) 與 on (特定日期/節慶當天) 之用法'
    ],
    formulasAndRules: [
      {
        name: '時間介系詞三大黃金口訣',
        formula: '• on + 具體某一天/特定節慶當天 (on Christmas Day, on Halloween, on Oct. 31st)\n• in + 月份/季節/年份 (in December, in winter, in 2026)\n• at + 節慶假期期間/具體時間點 (at Christmas, at night, at 7:30)',
        detail: '只要字面上有 Day 或 Eve，一律用 on（例：on New Year\'s Eve）。'
      },
      {
        name: '高頻文化節慶詞彙對照',
        formula: '• Lunar New Year: red envelopes, dumplings, reunion dinner\n• Dragon Boat Festival: dragon boat race, rice dumplings (zongzi)\n• Moon Festival: mooncakes, pomelo, admire the full moon\n• Halloween: trick or treat, costume, Jack-o\'-lantern',
        detail: '節慶名稱均為專有名詞，首字母一律大寫！'
      }
    ],
    topPitfalls: [
      '❌ 介系詞 on 與 in 混淆：只要提到特定某天（如 on Christmas Day），必用 on；只有單獨月份才用 in (in December)。',
      '❌ trick or treat 連接詞誤寫為 and：萬聖節討糖口號固定為 trick or treat（不給糖就搗蛋）。',
      '❌ 專有名詞大小寫疏忽：Christmas, Thanksgiving, Lunar New Year 第一個字母都要大寫。'
    ],
    mnemonic: '「in 月 in 年 in 季節，具體某天用 on 準；春節紅包端午粽，萬聖不給糖就鬧！」',
    juniorHighBridge: '國二下【World Cultures & Celebrations】：延伸學習被動語態文化應用 (Red envelopes are given to children) 與跨國文化比較寫作。'
  },

  'eng-u6': {
    title: 'Unit 6: Reading Comprehension & Phonics Mastery',
    subject: 'english',
    subjectName: '英語文領域',
    coreCompetencies: [
      '熟練運用 Skimming（略讀主旨）與 Scanning（掃讀定位人事實地物）兩大高分閱讀技巧',
      '善用上下文線索 (Context Clues) 推敲陌生單字涵義，不依賴逐字查字典',
      '掌握常見字首 (Prefix: un-, dis-) 與字尾 (Suffix: -ful, -less, -ly, -tion) 構詞變化'
    ],
    formulasAndRules: [
      {
        name: '兩大會考必備閱讀技巧',
        formula: '• Skimming (略讀)：快速瀏覽標題、各段首句與末句，精準掌握 Main Idea (文章主旨)。\n• Scanning (掃讀)：帶著題目關鍵字 (數字、大寫人名、年份) 垂直掃描，秒速定位細節。',
        detail: '做題目先讀題幹關鍵字再回文章掃讀，速度提升 3 倍！'
      },
      {
        name: '高頻構詞字首字尾公式',
        formula: '• un- / dis- (否定相反)：happy ➔ unhappy；agree ➔ disagree\n• re- (再次)：do ➔ redo；write ➔ rewrite\n• -ful (充滿，形)：care ➔ careful；use ➔ useful\n• -less (缺乏，形)：care ➔ careless；use ➔ useless\n• -ly (副詞)：slow ➔ slowly；careful ➔ carefully',
        detail: '形容詞 + ly = 副詞；但「名詞 + ly」是形容詞 (friend ➔ friendly, love ➔ lovely)！'
      }
    ],
    topPitfalls: [
      '❌ 做閱讀測驗「逢字必查」：遇到生字應根據上下文同義詞或轉折詞推測大意，停頓逐字查會嚴重超時。',
      '❌ 主旨題錯選「個別段落的小細節」：主旨 (Main idea) 必須涵蓋全文核心，不能只選某個例證。',
      '❌ friendly, lovely 誤當副詞：名詞加 ly 是形容詞 (He is friendly)，切勿誤當副詞。'
    ],
    mnemonic: '「略讀抓主旨看頭尾，掃讀找數字定關鍵；un 與 dis 是相反，形容詞加 ly 變副詞！」',
    juniorHighBridge: '國中教育會考【長篇閱讀理解與圖表整合】：銜接圖文對照題、克漏字上下文邏輯填空與長篇素養題。'
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 📖 國語文領域 (Mandarin Language) - 續
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'man-u3': {
    title: '單元 3：說明文與議論文思維',
    subject: 'mandarin',
    subjectName: '國語文領域',
    coreCompetencies: [
      '掌握說明文客觀介紹的結構特徵（總分總、邏輯順序、時間順序）',
      '精熟四大高頻說明方法：列數字、舉例子、作比較、打比方及其表達效果',
      '掌握議論文黃金三要素：論點（主張）、論據（事實與道理依據）、論證（推導邏輯）'
    ],
    formulasAndRules: [
      {
        name: '說明文四大核心說明方法',
        formula: '1. 列數字：用精準數據呈現，具科學權威與說服力\n2. 舉例子：以具體生動事例化抽象為具體\n3. 作比較：對比兩者特徵，凸顯差異特點\n4. 打比方：運用比喻使深奧生澀的科學原理通俗生動',
        detail: '判斷方式：有具體數字 ➔ 列數字；有「比如/例如」 ➔ 舉例子；有「比/相較」 ➔ 作比較。'
      },
      {
        name: '議論文黃金三要素架構',
        formula: '• 論點：作者要表達的核心主張（正確、鮮明、唯一）\n• 論據：支持論點的憑據（事實論據如名人實例；理論論據如名言諺語）\n• 論證：用論據證明論點的推導過程（舉例論證、道理論證、對比論證）',
        detail: '寫作常用「起（引論）➔ 承（本論正面論證）➔ 轉（本論反面論證）➔ 合（結論昇華）」架構。'
      }
    ],
    topPitfalls: [
      '❌ 論點與論據倒置混淆：例如「愛迪生失敗千次仍堅持」是論據（事例），其支持的論點是「恆心與毅力是成功的基石」。',
      '❌ 說明文與議論文文體混淆：說明文旨在「客觀介紹知識事物」，議論文重在「主觀表達鮮明立場並說服讀者」。',
      '❌ 作比較與打比方混淆：作比較是同質或異質事物在同維度比較；打比方是本體與喻體的譬喻關係。'
    ],
    mnemonic: '「說明講清重方法，數字比較舉例全；議論三寶不能偏，論點鮮明論據堅；論證嚴密說服甜！」',
    juniorHighBridge: '國中教育會考【議論文閱讀與會考寫作測驗】：國中寫作六級分評卷關鍵在於「立意深刻、取材貼切、結構嚴謹且具雙向論證思維」。'
  },

  'man-u4': {
    title: '單元 4：修辭的魔法與成語百寶箱',
    subject: 'mandarin',
    subjectName: '國語文領域',
    coreCompetencies: [
      '精確辨析譬喻三大層次：明喻（像/如）、暗喻（是/成）、借喻（只出現喻體）',
      '掌握轉化（擬人化、擬物化）、排比、誇飾、映襯之修辭特點',
      '辨析設問三大類型：提問（自問自答）、激問/反問（答案在反面）、懸問（問而不答）'
    ],
    formulasAndRules: [
      {
        name: '譬喻三兄弟精準識別表',
        formula: '• 明喻：甲【像/如/彷彿】乙（例：月兒『像』彎彎的小船）\n• 暗喻：甲【是/成為/化作】乙（例：母親『是』我們溫暖的港灣）\n• 借喻：省略本體與喻詞，直接以乙代甲（例：看！天空掛著一柄『金鐮刀』）',
        detail: '譬喻前提：本體與喻體必須是本質不同、但有某處相似點的兩樣事物。'
      },
      {
        name: '設問修辭三種提問法',
        formula: '• 提問：自問自答（問：什麼是幸福？答：知足常樂就是幸福。）\n• 激問/反問：答案在反面，加強語氣（這難道不是最好的結局嗎？＝這就是最好的結局！）\n• 懸問：只問不答，啟發深思（不知明月為誰照？）',
        detail: '反問句雖然形式是問句，但語氣最強烈，作者心中早已有了百分百的確定答案！'
      },
      {
        name: '排比 vs 對偶關鍵區別',
        formula: '• 排比：必須『三句或三句以上』，結構相同或相似，語氣一氣呵成\n• 對偶：必須『剛好兩句』，字數完全相等，詞性結構完全對稱',
        detail: '例：「天時不如地利，地利不如人和」為排比；「白日依山盡，黃河入海流」為對偶。'
      }
    ],
    topPitfalls: [
      '❌ 有「像」字就誤判為譬喻：「小明長得很像他爸爸」是相貌比較，非譬喻；必須跨範疇聯想才是譬喻。',
      '❌ 兩句相似誤當排比：排比必須「三句以上」；兩句字數相等是「對偶」。',
      '❌ 反問句誤認是提問：反問句不需要回答，因為答案已經在問題的相反面呼之欲出。'
    ],
    mnemonic: '「明喻有像暗喻是，借喻無本只現體；設問提問自回答，反問語氣強無比；排比三句氣勢雄！」',
    juniorHighBridge: '國七語文天地【常見修辭教學】：深入學習雙關（諧音雙關/詞義雙關）、頂真、回文、倒裝與象徵等國中高頻修辭。'
  },

  'man-u5': {
    title: '單元 5：古典文學選讀——詩詞與寓言',
    subject: 'mandarin',
    subjectName: '國語文領域',
    coreCompetencies: [
      '掌握近體詩（絕句與律詩）格式常識：句數、字數、押韻與對仗規律',
      '能找出詩中的「詩眼」，體會盛唐詩人李白（浪漫詩仙）、杜甫（寫實詩聖）情懷',
      '領悟先秦經典寓言故事（守株待兔、揠苗助長、買櫝還珠）哲理寄託'
    ],
    formulasAndRules: [
      {
        name: '近體詩格律黃金鑑定矩陣',
        formula: '• 句數：絕句固定 4 句；律詩固定 8 句\n• 字數：五言 (每句5字，五絕20字/五律40字)；七言 (每句7字，七絕28字/七律56字)\n• 押韻：偶數句 (第2、4、6、8句) 必須押韻；第1句可押可不押；第3、5、7句絕對不押韻；一韻到底不換韻\n• 對仗：絕句不限；律詩的「頷聯 (3,4句)」與「頸聯 (5,6句)」必須嚴格對仗！',
        detail: '律詩八句四聯名稱：首聯 (1,2句)、頷聯 (3,4句)、頸聯 (5,6句)、尾聯 (7,8句)。'
      },
      {
        name: '寓言文體核心特質',
        formula: '「藉小喻大，藉此喻彼，託物寓理」',
        detail: '寓言大多篇幅短小，主人公多為擬人化的動植物或典型人物，結尾或暗含發人深省的諷諭哲理。'
      }
    ],
    topPitfalls: [
      '❌ 誤以為絕句律詩每一句都要押韻：第 3 句絕對不可押韻！否則違反近體詩平仄聲韻律。',
      '❌ 律詩對仗聯名記錯：對仗必在「頷聯（三四句）」與「頸聯（五六句）」，首聯與尾聯通常不對仗。',
      '❌ 寓言寓意表面理解：例如《揠苗助長》寓意為「違反自然生長規律，急於求成，反而把事情弄糟」。'
    ],
    mnemonic: '「絕句四句律詩八，偶數押韻奇不押；律詩頷頸必對仗，一韻到底平聲嘉；寓言藉小喻大智！」',
    juniorHighBridge: '國七上國文【絕句選】與【律詩選】：進階學習平水韻、平仄格律（仄起首句入韻等）、盛唐中唐晚唐詩風流派演變。'
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🌏 社會領域 (Social Studies) - 續
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'soc-u2': {
    title: '單元 2：社會變遷與多元族群文化',
    subject: 'social',
    subjectName: '社會領域',
    coreCompetencies: [
      '掌握少子化與高齡化社會（高齡化 7%、高齡 14%、超高齡 20%）之標準與挑戰',
      '認識臺灣 16 個法定原住民族歲時祭儀（阿美族豐年祭、達悟族飛魚祭）與傳統智慧',
      '欣賞閩南、客家（義民節、晴耕雨讀）與新住民多元族群文化，實踐文化平權'
    ],
    formulasAndRules: [
      {
        name: '高齡社會三大門檻指標 (WHO 標準)',
        formula: '• 高齡化社會 (Aging Society)：65歲以上人口佔總人口達 7%\n• 高齡社會 (Aged Society)：65歲以上人口佔總人口達 14%\n• 超高齡社會 (Super-aged Society)：65歲以上人口佔總人口達 20% (臺灣於 2025~2026 年跨入)',
        detail: '少子高齡化將帶來青壯年撫養比上升、勞動力短缺與長照照護資源挑戰。'
      },
      {
        name: '多元族群代表特色常考點',
        formula: '• 達悟族 (蘭嶼)：拼板舟、飛魚祭、半穴居建築智慧\n• 布農族：八部合音 (祈禱小米豐收歌 Pasibutbut)，震撼國際\n• 客家族群：義民爺信仰、晴耕雨讀家風、敬天愛物惜字亭\n• 新住民平權：尊重母語文化、多元包容拒絕歧視標籤',
        detail: '原住民族委員會目前正式核定之法定原住民族共有「16 族」。'
      }
    ],
    topPitfalls: [
      '❌ 高齡社會比例數字記混：7% 是「高齡化」，14% 是「高齡」，20% 是「超高齡」，會考高頻必考！',
      '❌ 誤以為原住民族只有 9 族或 14 族：目前法定已增加至 16 族（包含拉阿魯哇族、卡那卡那富族等）！',
      '❌ 抱持族群我族中心主義：各種文化均有其適應環境之價值，應秉持「文化相對論」互相尊重與欣賞。'
    ],
    mnemonic: '「七高齡化十四高，二十超高老齡跑；十六原民皆瑰寶，飛魚合音天地樂；客家義民勤耕讀，多元包容臺灣好！」',
    juniorHighBridge: '國七下【公民・社會與文化 / 人口議題】：延伸計算扶老比、扶幼比與總扶養比，探討長期照顧 2.0 政策與人口紅利變革。'
  },

  'soc-u3': {
    title: '單元 3：經濟發展與產業轉型',
    subject: 'social',
    subjectName: '社會領域',
    coreCompetencies: [
      '掌握臺灣戰後經濟發展四大關鍵時期：1950s 土地改革 ➔ 1960s 加工出口區 ➔ 1970s 十大建設 ➔ 1980s 高科技與晶圓代工',
      '理解「進口替代」與「出口導向」之經濟策略核心意涵',
      '認識新竹科學園區設立、臺灣在全球半導體矽盾關鍵地位與循環經濟永續轉型'
    ],
    formulasAndRules: [
      {
        name: '臺灣戰後經濟發展四階段脈絡表',
        formula: '• 1950年代：農業培養工業（三七五減租、耕者有其田；紡織與食品等民生輕工業進口替代）\n• 1960年代：出口導向（高雄楠梓加工出口區設立，引進外資與技術，出口輕工業產品賺取外匯）\n• 1970年代：重化工業與十大建設（因應石油危機，興建南北高速公路、中鋼、中船、核電廠、桃園機場）\n• 1980年代至今：高科技與晶圓矽島（新竹科學園區成立，專注半導體代工與資通訊，躍居全球關鍵供應鏈）',
        detail: '政策演進邏輯：從自給自足 ➔ 外銷賺外匯 ➔ 基礎設施升級 ➔ 高附加價值研發製造。'
      }
    ],
    topPitfalls: [
      '❌ 「進口替代」與「出口導向」順序顛倒：先是 1950 年代「進口替代」（自己製造代替外國進口），隨後 1960 年代才「出口導向」（將產品外銷全世界賺外匯）。',
      '❌ 十大建設年代混淆：十大建設是在 1970 年代（蔣經國行政院長任內）為突破經濟瓶頸而大力推動。',
      '❌ 忽略現代綠色經濟趨勢：現今產業不僅重視產值，更重視 ESG（環境、社會、公司治理）與淨零碳排。'
    ],
    mnemonic: '「五十農改替代忙，六十加工外銷狂；七十十大基建固，八十竹科晶圓王！」',
    juniorHighBridge: '國二下【歷史・戰後臺灣的經濟與社會變遷】與【公民・市場經濟與國際貿易】：深入探討李嘉圖「比較利益法則」與全球化供應鏈分工。'
  },

  'soc-u4': {
    title: '單元 4：全球化浪潮與國際組織參與',
    subject: 'social',
    subjectName: '社會領域',
    coreCompetencies: [
      '理解全球化 (Globalization) 在經貿分工、文化交流、環境氣候與傳染病防治之雙面效應',
      '認識世界重要國際組織（聯合國 UN、世衛組織 WHO、世貿組織 WTO、亞太經合會 APEC）職權',
      '掌握臺灣以「Taiwan Can Help」精神參與國際人道救援、醫療農技合作之貢獻與全球公民責任'
    ],
    formulasAndRules: [
      {
        name: '四大高頻國際組織速記表',
        formula: '• UN (聯合國)：維持國際和平與安全，促進人權合作與永續發展目標 SDGs\n• WHO (世界衛生組織)：指導全球公共衛生防疫與醫療健康普及\n• WTO (世界貿易組織)：調解各國貿易摩擦爭端、促進自由公平貿易\n• APEC (亞太經濟合作會議)：亞太區域經濟整合與各國領袖交流重要平台',
        detail: '政府間組織 (IGO) 會員為各國政府；非政府組織 (NGO) 如紅十字會、無國界醫生則由民間自發組成。'
      },
      {
        name: '全球化雙面刃本質',
        formula: '• 優點：商品種類豐富、價格具競爭力、跨國文化即時傳播、科技醫療共享\n• 挑戰：跨國貧富差距擴大、全球傳染病迅速蔓延、本土傳統文化面臨同質化衝擊',
        detail: '身為全球公民，應具備在地行動、全球思考 (Think globally, act locally) 的宏觀格局。'
      }
    ],
    topPitfalls: [
      '❌ 誤認全球化「百利而無一害」：全球化伴隨貧富不均、跨國環境污染與金融風暴傳播風險，需各國制度性協同治理。',
      '❌ IGO 與 NGO 混淆：WHO, WTO 是政府間組織 (IGO)；無國界醫生、世界展望會是非政府組織 (NGO)。',
      '❌ 忽略臺灣在國際上的實質貢獻：臺灣在公共衛生、半導體晶片供應與農業技術團長期支援多國友邦。'
    ],
    mnemonic: '「地球村中分工細，全球化下牽一髮；聯合國度衛貿經，Taiwan can help 善相助；公民情懷照寰宇！」',
    juniorHighBridge: '國三下【公民・國際組織與全球議題】：深入學習國際公法、跨國自由貿易協定 (FTA)、氣候政治談判與地緣政治競合。'
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🎨 藝術領域 (Arts)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'art-u1': {
    title: '單元 1：視覺藝術探索——色彩與構圖之美',
    subject: 'arts',
    subjectName: '藝術領域',
    coreCompetencies: [
      '精確掌握色彩三要素：色相（色彩相貌）、明度（明暗程度）、彩度（純度/鮮豔度）',
      '理解色相環、三原色（紅黃藍）、互補色（強烈對比）與相鄰色（和諧柔和）關係',
      '靈活運用視覺藝術經典構圖心法：三分法則 (Rule of Thirds)、對角線與對稱平衡'
    ],
    formulasAndRules: [
      {
        name: '色彩三要素本質口訣',
        formula: '• 色相 (Hue)：色彩的名字與基本相貌（紅、橙、黃、綠、藍、靛、紫）\n• 明度 (Value)：色彩的明暗光亮程度（加白 ➔ 明度升高變亮；加黑 ➔ 明度降低變暗）\n• 彩度 (Chroma)：色彩的純潔鮮豔飽和度（純色彩度最高；混入其他顏色或灰黑白 ➔ 彩度降低變濁）',
        detail: '白色明度最高，黑色明度最低；原色彩度最高，灰色彩度最低。'
      },
      {
        name: '色相環三大互補色對配',
        formula: '• 紅色 ↔ 綠色（強烈視覺衝擊）\n• 黃色 ↔ 紫色（極致明暗對比）\n• 藍色 ↔ 橙色（冷暖經典呼應）',
        detail: '互補色放在一起（並置）對比最鮮豔搶眼；但若混在一起調色會互相抵消變成濁灰色！'
      },
      {
        name: '黃金九宮三分法則構圖',
        formula: '將畫面橫向與縱向各畫兩條等分線分為九宮格，將視覺焦點主角安排在「四個交點」或「分割線上」',
        detail: '比直接放在正中央更具生命力與視覺動態平衡感。'
      }
    ],
    topPitfalls: [
      '❌ 明度與彩度概念混淆：加白是「提高明度，但同時降低彩度（顏色變淡粉濁）」；加黑是「降低明度，也降低彩度」。',
      '❌ 互補色調和與並置混淆：互補色「並置」能激發最高對比活力；但互補色「混合」會變成濁褐色失去純度。',
      '❌ 拍照作畫永遠把主體死板釘在正中央：學會善用三分構圖法留白，畫面更具故事張力與藝術感。'
    ],
    mnemonic: '「色相姓名明暗度，彩度純淨加灰降；紅綠黃紫藍配橙，三分構圖留白美！」',
    juniorHighBridge: '國七藝術【視覺藝術・透視與色彩學】：進階學習一點透視、兩點透視法、包浩斯現代設計原理與近代美術流派欣賞。'
  },

  'art-u2': {
    title: '單元 2：音樂欣賞與實作——音符與節奏的魔力',
    subject: 'arts',
    subjectName: '藝術領域',
    coreCompetencies: [
      '掌握五線譜高音譜號、音名 (C D E F G A B) 與對應唱名 (Do Re Mi Fa Sol La Ti)',
      '理解拍號意義（4/4 拍與 3/4 拍律動節奏）及各類音符休止符時值換算',
      '認識管弦樂團四大樂器家族（弦樂、木管、銅管、打擊）聲音特質與代表樂器'
    ],
    formulasAndRules: [
      {
        name: '拍號解讀黃金公式',
        formula: '拍號 \\frac{a}{b}：以分母『b 分音符』為一拍，每小節有分子『a 拍』\n• 4/4 拍：以四分音符為一拍，每小節 4 拍，律動為「強 - 弱 - 次強 - 弱」\n• 3/4 拍：以四分音符為一拍，每小節 3 拍，律動為「強 - 弱 - 弱」 (經典華爾滋圓舞曲)',
        detail: '附點音符時值規則：附點代表增加原音符時值的「一半」（例：附點二分音符 = 2 + 1 = 3 拍）。'
      },
      {
        name: '管弦樂團四大樂器家族代表',
        formula: '• 弦樂器家族：小提琴、中提琴、大提琴、低音提琴（溫暖細膩，樂團骨幹）\n• 木管樂器家族：長笛、短笛、單簧管 (黑管)、雙簧管、低音管（靈活悠揚）\n• 銅管樂器家族：小號、法國號 (圓號)、長號、低音號 (大號)（輝煌嘹亮）\n• 打擊樂器家族：定音鼓、大鼓、小鼓、三角鐵、木琴（節奏與氛圍渲染）',
        detail: '長笛雖然現代多為金屬材質製造，但在發聲原理與演進史上屬於「木管樂器家族」！'
      }
    ],
    topPitfalls: [
      '❌ 拍號分子分母讀反：4/4 拍上方分子是「每小節拍數」，下方分母是「以幾分音符為一拍」。',
      '❌ 長笛看外觀金屬就誤判為銅管樂器：長笛沒有金屬號嘴，發聲原理為氣流吹口緣簧孔，歷史與聲學上屬「木管樂器」！',
      '❌ 附點時值算錯：附點不是固定加一拍，而是增加「前一個音符時值的一半」。'
    ],
    mnemonic: '「拍號下分音符拍，上標每小節拍數；附點增加原本半，圓舞三拍強弱弱；長笛身金心木管！」',
    juniorHighBridge: '國七藝術【音樂・調性、和弦與曲式】：深入學習大調與小調音階、I-IV-V 主副和弦配合、古典奏鳴曲式與交響詩欣賞。'
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 💪 健康與體育領域 (Health & Physical Education)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'pe-u1': {
    title: '單元 1：青春期的身心蛻變——擁抱成長與自我肯定',
    subject: 'health_pe',
    subjectName: '健康與體育領域',
    coreCompetencies: [
      '正確認識青春期男女生理蛻變（生長衝刺、第二性徵、月經與夢遺健康生理機制）',
      '建立正向身體意象 (Positive Body Image)，拒絕外貌焦慮與性別刻板標籤',
      '掌握身體自主權與身體界線，能堅定勇敢表達拒絕不舒服接觸'
    ],
    formulasAndRules: [
      {
        name: '青春期生理蛻變核心知識',
        formula: '• 生長衝刺期：身高體重快速增長，充足優質睡眠（生長激素分泌高峰）與均衡營養是關鍵\n• 第二性徵發育：男性喉結突出、變聲、長鬍鬚；女性乳房發育、骨盆變寬；男女皆會出現腋毛陰毛\n• 正常生理現象：女性月經來潮、男性夢遺現象均為生殖器官逐漸發育成熟之自然健康表徵',
        detail: '每個人發育時間早晚、節奏快慢受遺傳與體質影響各異，尊重個別差異不互相比較。'
      },
      {
        name: '身體自主權防護三步驟',
        formula: '「我的身體我做主，尊重他人界線明」\n遇不舒服接觸時堅守原則：1. 堅定說「不」 ➔ 2. 迅速離開危險現場 ➔ 3. 立即向信任師長或專線通報',
        detail: '任何人都無權未經同意碰觸你的隱私部位或跨越你感到不適的身體界線。'
      }
    ],
    topPitfalls: [
      '❌ 拿同儕的身材外貌或發育早晚開玩笑：這可能構成校園霸凌或性騷擾，對心理造成深遠傷害。',
      '❌ 認為月經或夢遺是「丟臉或見不得人」的事：這是人體成熟的正常生理運作，應以健康自信平常心面對。',
      '❌ 害怕破壞人際關係而不敢拒絕：明確勇敢表達拒絕是保護自己的基本權利，真正的朋友必定尊重彼此界線。'
    ],
    mnemonic: '「青春蛻變男女異，生長衝刺睡眠足；身體自主我作主，尊重界線說不行；平常健康迎成長！」',
    juniorHighBridge: '國七健體【青春期身心健康與全人性教育】：進階學習人體生殖系統構造圖解、性別平等教育法、青少年情感關係與自我認同。'
  },

  'pe-u2': {
    title: '單元 2：飲食與營養密碼——「我的餐盤」聰明吃',
    subject: 'health_pe',
    subjectName: '健康與體育領域',
    coreCompetencies: [
      '熟練衛生福利部「我的餐盤」六大口訣，掌握六大類食物日常均衡攝取原則',
      '精確解讀包裝食品「營養標示」（每一份量、總份數、熱量、蛋白質、脂肪、碳水化合物、糖、鈉）',
      '遠離高糖高鹽與超加工食品，養成以潔淨白開水取代含糖手搖飲之健康習慣'
    ],
    formulasAndRules: [
      {
        name: '衛福部國民健康署「我的餐盤」六大黃金口訣',
        formula: '1. 每天早晚一杯奶 (每杯約 240 毫升乳品補充鈣質)\n2. 每餐水果拳頭大 (多樣化在地、當季新鮮水果)\n3. 菜比水果多一點 (深綠色蔬菜佔 1/3 以上，補充膳食纖維)\n4. 飯跟蔬菜一樣多 (全穀雜糧類優先，如糙米、燕麥)\n5. 豆魚蛋肉一掌心 (優質蛋白質來源，減少加工紅肉)\n6. 堅果種子一茶匙 (原味堅果提供不飽和脂肪酸與維生素 E)',
        detail: '六大類食物缺一不可，定時定量不偏食才能支持高年級大腦與骨骼生長需求。'
      },
      {
        name: '食品營養標示計算陷阱破解',
        formula: '包裝總攝取量 = 每份標示數值 × 本包裝所含份數',
        detail: '例如：標示每份熱量 150 大卡、糖 10 克，本包裝含 4 份 ➔ 吃完一整包總共攝取 600 大卡、40 克糖！'
      }
    ],
    topPitfalls: [
      '❌ 把「地瓜、玉米、南瓜、紅豆」誤當成蔬菜：這些富含澱粉，在營養學分類屬於「全穀雜糧類」！',
      '❌ 誤以為喝市售果汁等於吃新鮮水果：果汁常濾掉纖維且濃縮果糖，容易造成血糖快速上升，不能取代完整原態水果。',
      '❌ 看營養標示只看單份數值：往往忽略「本包裝含幾份」，導致攝取的熱量與糖鈉嚴重超標。'
    ],
    mnemonic: '「早晚杯奶果拳頭，菜比果多飯同量；豆魚蛋肉一掌心，種子堅果一茶匙；多喝開水少甜飲！」',
    juniorHighBridge: '國七健體【營養與能量代謝】：銜接基礎代謝率 (BMR)、每日總消耗熱量 (TDEE)、維生素與礦物質缺乏症及青少年體重管理。'
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🌱 綜合活動領域 (Integrative Activities)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'comp-u1': {
    title: '單元 1：時間與金錢管理——打造自律高效的精彩生活',
    subject: 'integrative',
    subjectName: '綜合活動領域',
    coreCompetencies: [
      '掌握史蒂芬・柯維「時間管理四象限法」，優先聚焦投資「重要但不緊急」之第二象限',
      '精確辨析生活消費決策中的「需要 (Need)」與「想要 (Want)」，克制衝動消費',
      '掌握零用錢理財「六三一存錢法則」，建立長期儲蓄、日常開支與自我充實之健康財務觀'
    ],
    formulasAndRules: [
      {
        name: '時間管理四象限心法矩陣',
        formula: '• 第一象限 (重要且緊急)：立刻做（例：明天段考、突發火警）\n• 第二象限 (重要但不緊急)：規劃做、優先做！（例：每日複習、運動鍛鍊、閱讀拓展、長遠目標）➔ 人生成敗關鍵！\n• 第三象限 (不重要但緊急)：授權或快速做（例：無關緊要的突發插話、他人催促小事）\n• 第四象限 (不重要且不緊急)：盡量不做（例：長時間無意義滑手機、過度沉迷遊戲）',
        detail: '平時在第二象限投入越多，第一象限的焦慮危機就越少！'
      },
      {
        name: '正確存錢黃金公式與六三一分配',
        formula: '• 正確順序：收入 - 儲蓄 = 支出 (先存再花，而非花剩再存)\n• 六三一分配：60% 必要生活支出 (需要) + 30% 長期儲蓄投資 (未來) + 10% 彈性休閒圓夢 (想要)',
        detail: '購買前默數 10 秒問自己三問題：這是需要還是想要？不買生活會受影響嗎？有沒有替代方案？'
      }
    ],
    topPitfalls: [
      '❌ 整天在救火（被第一象限牽著走）：若不在第二象限做好預習規劃，事情就會拖到前一晚變成第一象限的緊急災難。',
      '❌ 混淆「需要」與「想要」：需要是維持生活學習必不可少的（如筆記本、午餐）；想要是欲望衝動（如最新流行盲盒玩具）。',
      '❌ 存錢順序顛倒：很多人「收入 - 支出 = 儲蓄」，結果往往月底一毛不剩；必須一拿到零用錢先提撥儲蓄！'
    ],
    mnemonic: '「時間四格看二象，重要不急早規劃；花錢先分需與想，收入減存才是花；六三一律自律達！」',
    juniorHighBridge: '國七綜合【生涯規劃與自主學習經營】：銜接個人番茄鐘工作法 (Pomodoro Technique)、SMART 目標設定法與青少年財務智商 (FQ)。'
  },

  'comp-u2': {
    title: '單元 2：人際溝通與情緒解碼——高EQ的人際和諧術',
    subject: 'integrative',
    subjectName: '綜合活動領域',
    coreCompetencies: [
      '熟練「情緒紅綠燈」自我調節法（紅燈停-深呼吸平靜、黃燈想-思考原因後果、綠燈行-做出理性回應）',
      '掌握非暴力「我訊息 (I-Message)」四大步驟，取代具攻擊性的「你訊息」，建設性表達心聲',
      '具備同理心傾聽技巧，先處理心情再處理事情，有效化解同儕人際摩擦'
    ],
    formulasAndRules: [
      {
        name: '非暴力溝通「我訊息 (I-Message)」黃金四步驟',
        formula: '「當你......（客觀陳述事實，不帶批判人身攻擊），\n我覺得......（表達真實當下情緒感受），\n因為......（說明對自己的具體影響與原因），\n我希望......（提出具體明確、可執行的請求或期待）。」',
        detail: '對比例：「你每次都遲到，真討厭！」(攻擊性你訊息) ➔ 「當你遲到了20分鐘，我覺得很焦慮，因為我們練習時間變短了，我希望下次若會晚到能提前傳訊息告訴我。」(我訊息)'
      },
      {
        name: '情緒紅綠燈三步調適法則',
        formula: '• 紅燈【停】：覺察憤怒身體緊繃，運用 4-7-8 深呼吸或暫時離開現場冷靜\n• 黃燈【想】：思考自己為何生氣？對方的立場可能如何？衝動反擊會有什麼後果？\n• 綠燈【行】：選擇最理性、溫和、雙贏的方式開啟溝通或尋求協助',
        detail: '情緒本身沒有對錯好壞，憤怒悲傷都是正常人性；但情緒表達的方式與行為有合適與不合適之分。'
      }
    ],
    topPitfalls: [
      '❌ 溝通動輒用「你總是...你每次都...」起頭：這會立刻激發對方的防禦反彈與攻擊，讓對話演變成意氣之爭。',
      '❌ 誤以為高 EQ 就是「壓抑隱忍、絕不生氣」：隱忍會造成心理內傷甚至爆發；高 EQ 是如實接納情緒並用健康安全方式抒發。',
      '❌ 傾聽時急著打斷反駁或指導說教：同理心第一步是「先接納同理對方的情緒感受」，切忌急著論斷是非。'
    ],
    mnemonic: '「情緒亮紅先停步，我訊息說事與感；你總每次激衝突，同理傾聽心連心；先理情緒後成事！」',
    juniorHighBridge: '國七綜合活動【同儕關係與衝突管理】：銜接馬歇爾・盧森堡《非暴力溝通》深度實踐、人際界線維護與校園霸凌防制協商技巧。'
  }
};

