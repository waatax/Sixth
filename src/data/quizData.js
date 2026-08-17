export const quizData = {
  // === 數學領域 ===
  'math-u1': [
    {
      id: 1,
      question: '請問 12 和 18 的最大公因數 (GCD) 是多少？',
      options: ['2', '3', '6', '36'],
      answerIndex: 2,
      explanation: '12的因數有1,2,3,4,6,12；18的因數有1,2,3,6,9,18。公因數為1,2,3,6，最大的是 6。'
    },
    {
      id: 2,
      question: '若兩個整數除了 1 以外沒有其他公因數，這兩個數稱為什麼？',
      options: ['質數', '合數', '互質', '倍數'],
      answerIndex: 2,
      explanation: '公因數只有 1 的兩數關係稱為「互質」，例如 8 和 9。'
    },
    {
      id: 3,
      question: '求 6 和 8 的最小公倍數 (LCM) 是多少？',
      options: ['12', '24', '48', '14'],
      answerIndex: 1,
      explanation: '6 的倍數有 6,12,18,24...，8 的倍數有 8,16,24...，最小公倍數為 24。'
    }
  ],
  'math-u2': [
    {
      id: 1,
      question: '計算 3/4 ÷ 2 的結果是多少？',
      options: ['3/8', '6/4', '3/2', '1/2'],
      answerIndex: 0,
      explanation: '分數除以整數，將分母乘以該整數：3/(4 × 2) = 3/8。'
    },
    {
      id: 2,
      question: '計算 2/3 ÷ 4/5 的正確步驟是？',
      options: ['2/3 × 4/5', '2/3 × 5/4', '3/2 × 4/5', '3/2 × 5/4'],
      answerIndex: 1,
      explanation: '除以一個分數，等於乘以該分數的倒數：2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6。'
    }
  ],
  'math-u3': [
    {
      id: 1,
      question: '計算 4.56 ÷ 1.2 時，第一步應該如何移動小數點？',
      options: ['除數和被除數小數點同時向右移一位', '除數和被除數小數點同時向左移一位', '只移動被除數的小數點', '小數點不用移動'],
      answerIndex: 0,
      explanation: '除法計算時，需將除數化為整數，因此除數 1.2 與被除數 4.56 同時向右移 1 位，變成 45.6 ÷ 12。'
    },
    {
      id: 2,
      question: '5.8 公升的果汁，每 0.7 公升裝一杯，最多可裝幾杯？剩下幾公升？',
      options: ['8 杯，剩 2 公升', '8 杯，剩 0.2 公升', '7 杯，剩 0.9 公升', '8 杯，剩 0.02 公升'],
      answerIndex: 1,
      explanation: '5.8 ÷ 0.7 = 8 餘 0.2。餘數的小數點必須對齊被除數原來的小數點位置，所以剩下 0.2 公升。'
    }
  ],
  'math-u4': [
    {
      id: 1,
      question: '若調配奶茶時紅茶與牛奶的比例是 3 : 2，這時「比值」是多少？',
      options: ['2/3', '3/2 (或 1.5)', '3', '5'],
      answerIndex: 1,
      explanation: '比值 = 前項 ÷ 後項 = 3 ÷ 2 = 3/2 = 1.5。'
    },
    {
      id: 2,
      question: '將 0.6 : 0.8 化為最簡整數比是？',
      options: ['6 : 8', '3 : 4', '4 : 3', '30 : 40'],
      answerIndex: 1,
      explanation: '同乘 10 得到 6 : 8，再同除以最大公因數 2 得到最簡整數比 3 : 4。'
    }
  ],
  'math-u5': [
    {
      id: 1,
      question: '一個直徑為 10 公分的圓，其圓周長大約是多少公分？(π 以 3.14 計算)',
      options: ['15.7 公分', '31.4 公分', '62.8 公分', '78.5 公分'],
      answerIndex: 1,
      explanation: '圓周長 = 直徑 × 3.14 = 10 × 3.14 = 31.4 公分。'
    },
    {
      id: 2,
      question: '半徑 6 公分、圓心角 60 度的扇形，其弧長是多少公分？',
      options: ['3.14 公分', '6.28 公分', '18.84 公分', '9.42 公分'],
      answerIndex: 1,
      explanation: '圓周長 = 6 × 2 × 3.14 = 37.68。扇形佔 60/360 = 1/6。弧長 = 37.68 × 1/6 = 6.28 公分。'
    }
  ],
  'math-u6': [
    {
      id: 1,
      question: '半徑為 5 公分的圓形，其面積是多少平方公分？(π 以 3.14 計算)',
      options: ['15.7', '31.4', '78.5', '157'],
      answerIndex: 2,
      explanation: '圓面積 = 半徑 × 半徑 × 3.14 = 5 × 5 × 3.14 = 78.5 平方公分。'
    }
  ],
  'math-u7': [
    {
      id: 1,
      question: '小華 2 小時騎腳踏車騎了 36 公里，他的時速是多少？',
      options: ['18 公里/時', '36 公里/時', '72 公里/時', '12 公里/時'],
      answerIndex: 0,
      explanation: '速率 = 距離 ÷ 時間 = 36 ÷ 2 = 18 公里/時。'
    },
    {
      id: 2,
      question: '秒速 20 公尺相當於分速多少公尺？',
      options: ['200 公尺', '600 公尺', '1200 公尺', '3600 公尺'],
      answerIndex: 2,
      explanation: '1 分鐘有 60 秒，分速 = 20 × 60 = 1200 公尺/分。'
    }
  ],
  'math-u8': [
    {
      id: 1,
      question: '計算柱體體積的通用公式是？',
      options: ['底面積 × 高', '底面周長 × 高', '長 × 寬 × 高 ÷ 3', '直徑 × 高'],
      answerIndex: 0,
      explanation: '所有角柱與圓柱的體積公式皆為：底面積 × 柱高。'
    }
  ],
  'math-u9': [
    {
      id: 1,
      question: '當一個正方形的邊長放大為原來的 3 倍時，其面積會放大為原來的幾倍？',
      options: ['3 倍', '6 倍', '9 倍', '12 倍'],
      answerIndex: 2,
      explanation: '面積倍數 = 長度倍數的平方 = 3 × 3 = 9 倍。'
    }
  ],
  'math-u10': [
    {
      id: 1,
      question: '一件定價 1000 元的外套打八折出售，售價是多少元？',
      options: ['200 元', '800 元', '850 元', '180 元'],
      answerIndex: 1,
      explanation: '八折即為原價的 80% (0.8)，1000 × 0.8 = 800 元。'
    }
  ],

  // === 自然科學領域 ===
  'sci-u1': [
    {
      id: 1,
      question: '在地面天氣圖上，代表晴朗、下沉氣流的天氣系統符號是？',
      options: ['L (低氣壓)', 'H (高氣壓)', '冷鋒符號', '滯留鋒符號'],
      answerIndex: 1,
      explanation: 'H 代表高氣壓 (High Pressure)，空氣由高空下沉，不易成雲致雨，天氣多晴朗。'
    },
    {
      id: 2,
      question: '每年五、六月造成臺灣連續陰雨綿綿的「梅雨」，是由哪種鋒面造成的？',
      options: ['冷鋒', '暖鋒', '滯留鋒', '囚錮鋒'],
      answerIndex: 2,
      explanation: '冷暖氣團勢力相當、移動緩慢形成的滯留鋒是造成梅雨季的主因。'
    }
  ],
  'sci-u2': [
    {
      id: 1,
      question: '用藍色石蕊試紙檢驗檸檬汁時，試紙會呈現什麼顏色？',
      options: ['不變色', '變成紅色', '變成綠色', '變成紫色'],
      answerIndex: 1,
      explanation: '檸檬汁呈酸性，會使藍色石蕊試紙變為紅色（酸紅鹼藍）。'
    },
    {
      id: 2,
      question: '下列哪一種水溶液可以導電（屬於電解質）？',
      options: ['純水', '食鹽水', '砂糖水', '酒精水溶液'],
      answerIndex: 1,
      explanation: '食鹽（氯化鈉）溶於水會解離出鈉離子與氯離子，能夠導電。'
    }
  ],
  'sci-u3': [
    {
      id: 1,
      question: '想要增強電磁鐵的磁力，下列哪種方法是有效的？',
      options: ['減少漆包線纏繞圈數', '增加串聯電池的數量', '把鐵芯抽掉', '將電池反接'],
      answerIndex: 1,
      explanation: '增加電流強度（增加串聯電池）與增加線圈圈數都可以顯著增強電磁鐵磁力。'
    }
  ],
  'sci-u4': [
    {
      id: 1,
      question: '花岡岩與玄武岩是岩漿冷卻凝固形成的，屬於哪一類岩石？',
      options: ['沉積岩', '火成岩', '變質岩', '化石岩'],
      answerIndex: 1,
      explanation: '由火山噴發或地底岩漿冷卻結晶形成的岩石統稱為火成岩。'
    }
  ],
  'sci-u5': [
    {
      id: 1,
      question: '太陽的熱量能夠穿越真空的宇宙空間傳到地球，主要是依靠哪種傳播方式？',
      options: ['熱傳導', '熱對流', '熱輻射', '熱折射'],
      answerIndex: 2,
      explanation: '熱輻射以電磁波形式直接傳播，不需要任何物質介質。'
    }
  ],
  'sci-u6': [
    {
      id: 1,
      question: '升旗台頂端用來升國旗的滑輪屬於下列哪一種？',
      options: ['定滑輪（改變施力方向，不省力）', '動滑輪（省力一半）', '輪軸', '第一類費力槓桿'],
      answerIndex: 0,
      explanation: '定滑輪軸心固定，施力向下拉時物體向上升，功用是改變施力方向。'
    }
  ],
  'sci-u7': [
    {
      id: 1,
      question: '鐵製品在下列哪種環境中最不容易生鏽？',
      options: ['潮濕的海邊', '充滿水氣的浴室', '放有乾燥劑的密封罐中', '淋過酸雨的戶外'],
      answerIndex: 2,
      explanation: '乾燥密封環境缺乏水分，無法促成鐵的氧化反應，因此不易生鏽。'
    }
  ],
  'sci-u8': [
    {
      id: 1,
      question: '在森林生態系中，綠色植物進行光合作用製造養分，屬於什麼角色？',
      options: ['初級消費者', '分解者', '生產者', '掠食者'],
      answerIndex: 2,
      explanation: '能自行利用日光、水和二氧化碳製造有機養分的生物稱為生產者。'
    }
  ],

  // === 國語文領域 ===
  'man-u1': [
    {
      id: 1,
      question: '「六何法 (5W1H)」中的「何因 (Why)」主要是在探討什麼？',
      options: ['事情發生的地點', '事情發生的原因與動機', '參與的人物是誰', '採取的具體方法'],
      answerIndex: 1,
      explanation: 'Why 代表事情背後的原因、動機與理由。'
    }
  ],
  'man-u2': [
    {
      id: 1,
      question: '記敘文傳統結構「起、承、轉、合」中的「轉」代表什麼？',
      options: ['文章的開頭背景', '順著開頭繼續寫', '情節發生波折、轉折或衝突', '總結全文抒發感想'],
      answerIndex: 2,
      explanation: '「轉」是情節的高潮與轉折點，讓故事跌宕起伏更吸引人。'
    }
  ],
  'man-u3': [
    {
      id: 1,
      question: '議論文的三大核心要素不包含下列哪一項？',
      options: ['論點', '論據', '論證', '抒情開頭'],
      answerIndex: 3,
      explanation: '議論文三大核心要素為：論點（主張）、論據（事實根據）、論證（推理邏輯）。'
    }
  ],
  'man-u4': [
    {
      id: 1,
      question: '「微風輕輕撫摸著大地」使用了哪一種修辭法？',
      options: ['誇飾', '擬人', '排比', '借喻'],
      answerIndex: 1,
      explanation: '將微風賦予人類「撫摸」的動作，屬於擬人法。'
    }
  ],
  'man-u5': [
    {
      id: 1,
      question: '「欲窮千里目，更上一層樓」出自哪一位詩人的名作？',
      options: ['李白', '王之渙', '孟浩然', '杜甫'],
      answerIndex: 1,
      explanation: '出自王之渙的五言絕句《登鸛雀樓》。'
    }
  ],
  'man-u6': [
    {
      id: 1,
      question: '上台發表時，視線應該如何分配才能展現自信並尊重全場？',
      options: ['緊盯著地板或天花板', '只看著自己的好朋友', '運用燈塔原則均勻掃視左中右全場', '全程閉著眼睛'],
      answerIndex: 2,
      explanation: '燈塔原則能讓全場聽眾都感受到互動與尊重。'
    }
  ],

  // === 社會領域 ===
  'soc-u1': [
    {
      id: 1,
      question: '臺灣首次由全國公民直接投票選舉總統是在西元哪一年？',
      options: ['1949 年', '1987 年', '1996 年', '2000 年'],
      answerIndex: 2,
      explanation: '1996 年為中華民國歷史上首次總統公民直選。'
    }
  ],
  'soc-u2': [
    {
      id: 1,
      question: '目前臺灣經政府官方認定的原住民族共有幾族？',
      options: ['9 族', '12 族', '16 族', '20 族'],
      answerIndex: 2,
      explanation: '截至目前臺灣法定原住民族共有 16 族。'
    }
  ],
  'soc-u3': [
    {
      id: 1,
      question: '民國 60 年代推動的中華民國「十大建設」，主要奠定了臺灣哪方面的基礎？',
      options: ['傳統農業發展', '現代化重工業與交通基礎設施', '航太衛星計畫', '生技醫療網'],
      answerIndex: 1,
      explanation: '十大建設包括中山高、鐵路電氣化、中鋼、中船、核電廠等重工業與交通重大工程。'
    }
  ],
  'soc-u4': [
    {
      id: 1,
      question: '聯合國的英文簡稱是什麼？',
      options: ['WHO', 'WTO', 'UN', 'APEC'],
      answerIndex: 2,
      explanation: 'United Nations 簡稱為 UN。'
    }
  ],
  'soc-u5': [
    {
      id: 1,
      question: '聯合國《兒童權利公約》(CRC) 保障的年齡對象為未滿幾歲的兒少？',
      options: ['12 歲', '15 歲', '18 歲', '20 歲'],
      answerIndex: 2,
      explanation: 'CRC 保障未滿 18 歲的所有兒童與青少年權益。'
    }
  ],
  'soc-u6': [
    {
      id: 1,
      question: '聯合國通過的 SDGs 永續發展目標共有幾項？',
      options: ['8 項', '12 項', '17 項', '20 項'],
      answerIndex: 2,
      explanation: '聯合國於 2015 年通過了 17 項永續發展目標。'
    }
  ],

  // === 英語文領域 ===
  'eng-u1': [
    {
      id: 1,
      question: 'Which preposition is correct: "I usually have dinner ___ 6:30 PM."?',
      options: ['in', 'on', 'at', 'for'],
      answerIndex: 2,
      explanation: 'We use the preposition "at" before specific clock times.'
    }
  ],
  'eng-u2': [
    {
      id: 1,
      question: 'What is the past tense form of the verb "go"?',
      options: ['goed', 'went', 'gone', 'going'],
      answerIndex: 1,
      explanation: 'The past tense of "go" is the irregular verb "went".'
    }
  ],
  'eng-u3': [
    {
      id: 1,
      question: 'How do you ask for directions politely?',
      options: ['Tell me where the bank is right now.', 'Excuse me, how do I get to the bank?', 'Where is bank.', 'Go to bank please.'],
      answerIndex: 1,
      explanation: '"Excuse me, how do I get to...?" is the most polite and natural way to ask.'
    }
  ],
  'eng-u4': [
    {
      id: 1,
      question: 'If someone has a stomach problem, what would they say?',
      options: ['I have a toothache.', 'I have a headache.', 'I have a stomachache.', 'I have a sore eye.'],
      answerIndex: 2,
      explanation: 'Stomach + ache = stomachache (肚子痛/胃痛).'
    }
  ],
  'eng-u5': [
    {
      id: 1,
      question: 'What do children say when asking for candies on Halloween?',
      options: ['Happy Birthday!', 'Trick or treat!', 'Merry Christmas!', 'Good luck!'],
      answerIndex: 1,
      explanation: '"Trick or treat!" is the classic Halloween tradition.'
    }
  ],
  'eng-u6': [
    {
      id: 1,
      question: 'What does "Skimming" mean in reading strategies?',
      options: ['Reading every word slowly with a dictionary', 'Quickly reading to grasp the main idea', 'Translating into Chinese', 'Memorizing vocabulary'],
      answerIndex: 1,
      explanation: 'Skimming is reading quickly through headings and main sentences to get the main idea.'
    }
  ],

  // === 藝術領域 ===
  'art-u1': [
    {
      id: 1,
      question: '色彩三要素是指哪三項？',
      options: ['紅、黃、藍', '色相、明度、彩度', '暖色、冷色、中性色', '水彩、油畫、蠟筆'],
      answerIndex: 1,
      explanation: '色彩三要素為色相（色彩種類）、明度（明暗程度）與彩度（純度鮮豔度）。'
    }
  ],
  'art-u2': [
    {
      id: 1,
      question: '在五線譜中，4/4 拍記號表示什麼意思？',
      options: ['以四分音符為一拍，每小節有四拍', '以八分音符為一拍，每小節有四拍', '總共只有四小節', '速度每分鐘 40 拍'],
      answerIndex: 0,
      explanation: '分母代表以幾分音符為一拍（四分音符），分子代表每小節有幾拍（四拍）。'
    }
  ],
  'art-u3': [
    {
      id: 1,
      question: '戲劇演出中，負責掌控排練節奏、引導演員詮釋角色的人是誰？',
      options: ['編劇', '導演', '燈光師', '道具組長'],
      answerIndex: 1,
      explanation: '導演負責統籌全劇藝術風格、指導演員表演與掌控舞台整體呈現。'
    }
  ],
  'art-u4': [
    {
      id: 1,
      question: '設計思考 (Design Thinking) 的第一個關鍵步驟是什麼？',
      options: ['製作原型 (Prototype)', '同理心 (Empathize)', '測試 (Test)', '定價 (Price)'],
      answerIndex: 1,
      explanation: '設計思考始於「同理心」，深入觀察與感受使用者的真實痛點。'
    }
  ],

  // === 健康與體育領域 ===
  'pe-u1': [
    {
      id: 1,
      question: '青春期皮脂腺分泌旺盛時，下列哪項是良好的保養習慣？',
      options: ['用手擠壓青春痘', '每天用溫水適度清潔臉部', '不洗臉塗厚粉遮蓋', '經常熬夜吃油炸物'],
      answerIndex: 1,
      explanation: '溫和清潔、規律作息與少吃油炸是青春期肌膚健康的關鍵。'
    }
  ],
  'pe-u2': [
    {
      id: 1,
      question: '「我的餐盤」飲食建議中，每天早晚應攝取哪一類食物一杯？',
      options: ['乳品類', '含糖飲料', '肉類', '油脂類'],
      answerIndex: 0,
      explanation: '「每天早晚一杯奶」提供成長所需的鈣質與優質蛋白質。'
    }
  ],
  'pe-u3': [
    {
      id: 1,
      question: '對無意識、無正常呼吸的成人進行 CPR 胸外按壓時，正確的按壓速率為每分鐘多少次？',
      options: ['40~60 次', '60~80 次', '100~120 次', '150~200 次'],
      answerIndex: 2,
      explanation: 'CPR 按壓速率應維持在每分鐘 100~120 次，深度至少 5 公分。'
    }
  ],
  'pe-u4': [
    {
      id: 1,
      question: '國小健康體適能檢測中，「800公尺跑走」主要是在測量哪一項能力？',
      options: ['柔軟度', '心肺耐力', '肌力', '瞬發力'],
      answerIndex: 1,
      explanation: '800公尺跑走是評估心臟與肺部長時間耐力表現的核心項目。'
    }
  ],

  // === 綜合活動領域 ===
  'comp-u1': [
    {
      id: 1,
      question: '時間管理四象限中，高效學習者花最多心力在預防與打底的象限是？',
      options: ['第一象限（重要且緊急）', '第二象限（重要但不緊急）', '第三象限（不重要但緊急）', '第四象限（不重要不緊急）'],
      answerIndex: 1,
      explanation: '第二象限（如長期讀書計畫、運動鍛鍊）能防止事情惡化成緊急危機。'
    }
  ],
  'comp-u2': [
    {
      id: 1,
      question: '溝通時使用「我訊息 (I-Message)」的好處是什麼？',
      options: ['可以直接痛罵對方', '清楚表達自身客觀事實與感受，避免指責引發衝突', '迫使對方完全聽我的', '不用聽對方說話'],
      answerIndex: 1,
      explanation: '我訊息以客觀事實與自我感受為核心，能降低對方的防衛心理，促進良性溝通。'
    }
  ],
  'comp-u3': [
    {
      id: 1,
      question: '「康乃爾筆記法」中，頁面左側的線索欄主要用來記錄什麼？',
      options: ['隨手塗鴉', '提煉關鍵字與核心問題', '老師講的每一句廢話', '考試成績'],
      answerIndex: 1,
      explanation: '左側線索欄用於課後複習時提煉關鍵字與設計自測題目。'
    }
  ],
  'comp-u4': [
    {
      id: 1,
      question: '參與志工服務學習的最核心價值是什麼？',
      options: ['賺取金錢報酬', '為了跟同學炫耀', '體驗利他關懷、回饋社會並在反思中獲得個人成長', '純粹消磨時間'],
      answerIndex: 2,
      explanation: '服務學習兼具服務奉獻與自我反思內化雙重價值。'
    }
  ]
};
