export const coursesData = {
  subjects: [
    { 
      id: 'math', 
      name: '🧮 數學領域', 
      shortName: '數學',
      icon: 'Calculator', 
      emoji: '🧮',
      mascot: '數理小精靈',
      badge: '算理圖解・秒破難題',
      color: 'hsl(215, 85%, 52%)', 
      desc: '數與量、代數關係、幾何圖形、生活應用題' 
    },
    { 
      id: 'science', 
      name: '🔬 自然科學領域', 
      shortName: '自然',
      icon: 'Microscope', 
      emoji: '🔬',
      mascot: '探索小博士',
      badge: '現象透視・實驗探究',
      color: 'hsl(152, 70%, 42%)', 
      desc: '物質與能量、地球與環境、簡單機械、生態保育' 
    },
    { 
      id: 'mandarin', 
      name: '📖 國語文領域', 
      shortName: '國語',
      icon: 'BookOpen', 
      emoji: '📖',
      mascot: '文學妙筆仙',
      badge: '閱讀解碼・高分寫作',
      color: 'hsl(25, 90%, 52%)', 
      desc: '閱讀理解策略、寫作修辭、文言寓言、口語表達' 
    },
    { 
      id: 'social', 
      name: '🌍 社會領域', 
      shortName: '社會',
      icon: 'Globe', 
      emoji: '🌍',
      mascot: '環球小領航',
      badge: '歷史地理・公民素養',
      color: 'hsl(275, 75%, 55%)', 
      desc: '臺灣民主發展、多元文化、產業經濟、全球化SDGs' 
    },
    { 
      id: 'english', 
      name: '🇬🇧 英語文領域', 
      shortName: '英語',
      icon: 'Languages', 
      emoji: '🇬🇧',
      mascot: '雙語小萌星',
      badge: '生活對話・秒懂文法',
      color: 'hsl(192, 88%, 45%)', 
      desc: 'Daily Routines, Past Tense, Directions, Phonics' 
    },
    { 
      id: 'arts', 
      name: '🎨 藝術領域', 
      shortName: '藝術',
      icon: 'Palette', 
      emoji: '🎨',
      mascot: '美感小創客',
      badge: '五感美學・創意舞台',
      color: 'hsl(340, 82%, 58%)', 
      desc: '視覺藝術、音樂欣賞與實作、表演藝術、設計思考' 
    },
    { 
      id: 'health_pe', 
      name: '💪 健康與體育', 
      shortName: '健體',
      icon: 'Activity', 
      emoji: '💪',
      mascot: '活力小鐵人',
      badge: '青春成長・急救防護',
      color: 'hsl(12, 85%, 54%)', 
      desc: '青春期發育、飲食營養、急救CPR防護、體適能' 
    },
    { 
      id: 'integrative', 
      name: '🌱 綜合活動領域', 
      shortName: '綜合',
      icon: 'Compass', 
      emoji: '🌱',
      mascot: '成長領航員',
      badge: '自律時間・人際高EQ',
      color: 'hsl(168, 75%, 42%)', 
      desc: '時間金錢管理、人際溝通、生涯探索、社會公民實踐' 
    }
  ],
  versions: ['康軒版', '南一版', '翰林版'],
  units: {
    math: [
      {
        id: 'math-u1',
        title: '單元 1：最大公因數與最小公倍數',
        description: '了解因數、倍數、質數與合數，並學習短除法與生活平分、排隊應用題。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-math/k-m06',
        keyConcepts: ['因數與公因數', '質因數分解', '短除法求最大公因數(GCD)與最小公倍數(LCM)', '互質概念']
      },
      {
        id: 'math-u2',
        title: '單元 2：分數的除法',
        description: '掌握分數除以整數、分數除以分數的運算規則與「顛倒相乘」的幾何意義。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-math/k-m06',
        keyConcepts: ['分數除以整數', '除以分數等於乘以倒數', '帶分數化假分數計算', '生活分裝應用題']
      },
      {
        id: 'math-u3',
        title: '單元 3：小數的除法與餘數',
        description: '學習小數除以整數、小數除以小數，掌握移動小數點的技巧與餘數的正確判斷。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-math/k-m06',
        keyConcepts: ['除數小數點向右移', '商與餘數的小數點位置', '四捨五入求概數', '容量與重量分裝']
      },
      {
        id: 'math-u4',
        title: '單元 4：比與比值',
        description: '理解前項與後項的關係，學習求比值、化為最簡整數比與生活配方比例。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-math/k-m06',
        keyConcepts: ['比的表示法 a:b', '比值 = 前項 ÷ 後項', '等比性質與最簡整數比', '比例調配問題']
      },
      {
        id: 'math-u5',
        title: '單元 5：圓周長與扇形弧長',
        description: '探索圓周率 π ≈ 3.14 的由來，靈活計算圓周長與不同圓心角的扇形弧長。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-math/k-m06',
        keyConcepts: ['圓周率 π 的意義', '圓周長 = 直徑 × 3.14', '圓心角與扇形比例', '扇形周長（弧長 + 2個半徑）']
      },
      {
        id: 'math-u6',
        title: '單元 6：圓面積與扇形面積',
        description: '推導圓面積分割拼貼公式，精準計算圓面積、扇形面積與複合鋪色圖形。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-math/k-m06',
        keyConcepts: ['圓面積 = 半徑 × 半徑 × 3.14', '扇形面積公式', '鋪色複合圖形面積（加減切割法）']
      },
      {
        id: 'math-u7',
        title: '單元 7：速率與生活應用',
        description: '理解距離、時間與速率的公式關係，熟練時速/分速/秒速換算與追趕問題。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-math/k-m06',
        keyConcepts: ['速率 = 距離 ÷ 時間', '時速、分速、秒速單位換算', '同向追趕與反向相遇問題', '平均速率計算']
      },
      {
        id: 'math-u8',
        title: '單元 8：柱體體積與表面積',
        description: '認識角柱與圓柱的展開圖，熟練「底面積 × 高」計算柱體體積與表面積。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-math/k-m06',
        keyConcepts: ['柱體體積 = 底面積 × 柱高', '角柱表面積 = 2個底面積 + 側面總面積', '圓柱側面積展開為長方形', '空心柱體計算']
      },
      {
        id: 'math-u9',
        title: '單元 9：放大圖、縮圖與比例尺',
        description: '掌握圖形放大與縮小的對應角與對應邊變化，學會地圖比例尺的換算應用。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-math/k-m06',
        keyConcepts: ['放大縮小圖對應角不變、對應邊成比例', '面積倍數 = 長度倍數的平方', '比值型與圖示型比例尺換算', '地圖距離求實際距離']
      },
      {
        id: 'math-u10',
        title: '單元 10：基準量、比較量與怎樣解題',
        description: '學會判斷「基準量（1倍數）」與「比較量」，解決折扣、加成、母子和差問題。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-math/k-m06',
        keyConcepts: ['比較量 ÷ 基準量 = 比值', '打折與加成計算', '母子和與母子差問題', '雞兔同籠與間隔問題']
      }
    ],
    science: [
      {
        id: 'sci-u1',
        title: '單元 1：多變的天氣與氣象預報',
        description: '認識大氣中的水循環、高低氣壓、冷暖鋒面與颱風防災知識。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-nature/k-n06',
        keyConcepts: ['大氣中水氣的變化（雲、霧、雨、露、霜）', '高氣壓（晴朗）與低氣壓（陰雨）', '冷鋒、暖鋒與滯留鋒（梅雨）', '颱風結構與防颱安全措施']
      },
      {
        id: 'sci-u2',
        title: '單元 2：水溶液的性質與酸鹼性',
        description: '探討物質的溶解、水溶液的導電性（電解質）與石蕊試紙酸鹼檢驗。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-nature/k-n06',
        keyConcepts: ['溶解度與飽和溶液', '電解質與水溶液導電性', '石蕊試紙與天然酸鹼指示劑', '酸鹼中和現象']
      },
      {
        id: 'sci-u3',
        title: '單元 3：電與磁的奇妙世界',
        description: '探索磁鐵性質、地磁指北針、電流磁效應與電磁鐵的製作與生活應用。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-nature/k-n06',
        keyConcepts: ['磁場與指北針原理', '奧斯特實驗（電流產生磁場）', '電磁鐵磁力增強條件（線圈數、電流大小）', '馬達與電鈴的應用']
      },
      {
        id: 'sci-u4',
        title: '單元 4：變動的大地與地表作用',
        description: '認識三大類岩石與礦物、流水侵蝕堆積作用與地震板塊運動防災。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-nature/k-n06',
        keyConcepts: ['三大岩類（火成岩、沉積岩、變質岩）', '礦物辨識特性', '流水的三大作用（侵蝕、搬運、堆積）', '地震板塊運動與防震演練']
      },
      {
        id: 'sci-u5',
        title: '單元 5：熱的傳播與保溫原理',
        description: '理解熱傳導、熱對流與熱輻射三種熱傳播途徑，探索保溫瓶防熱傳播構造。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-nature/k-n06',
        keyConcepts: ['熱傳導（固體良導體與不良導體）', '熱對流（流體熱升冷降）', '熱輻射（不需介質）', '保溫瓶真空層與鍍銀反射設計']
      },
      {
        id: 'sci-u6',
        title: '單元 6：巧妙的簡單機械',
        description: '學習槓桿原理三大要素、定滑輪與動滑輪、輪軸與斜面的省力與省距離規律。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-nature/k-n06',
        keyConcepts: ['槓桿原理（施力×施力臂 = 抗力×抗力臂）', '三類槓桿辨別與生活應用', '定滑輪（改方向）與動滑輪（省力1/2）', '輪軸與斜面省力規律']
      },
      {
        id: 'sci-u7',
        title: '單元 7：物質的變化——防鏽與防腐',
        description: '探討鐵生鏽的三大條件與防鏽方法，學習微生物與食品保存的科學原理。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-nature/k-n06',
        keyConcepts: ['鐵生鏽條件（水+氧氣）', '防鏽方法（塗漆、鍍鋅、不鏽鋼）', '微生物生長條件', '食物保存（冷凍、脫水、醃漬、真空）']
      },
      {
        id: 'sci-u8',
        title: '單元 8：生物與環境保育——地球村生態系',
        description: '認識生產者/消費者/分解者、食物鏈與食物網、臺灣豐富生態系與環境永續。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-nature/k-n06',
        keyConcepts: ['生態系組成角色', '食物鏈、食物網與能量金字塔', '臺灣四大生態系特徵', '生物多樣性與環境保護行動']
      }
    ],
    mandarin: [
      {
        id: 'man-u1',
        title: '單元 1：高年級閱讀理解策略',
        description: '掌握擷取訊息、推論理解、區分事實與觀點及六何法(5W1H)深層閱讀。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-chinese/k-c06',
        keyConcepts: ['訊息擷取與定位', '推論與觀點統整', '事實 (Fact) vs 觀點 (Opinion)', '六何法分析文章脈絡']
      },
      {
        id: 'man-u2',
        title: '單元 2：記敘文寫作的起承轉合',
        description: '學習記敘文的人事時地物要素、引人入勝的開頭與畫龍點睛的結尾技巧。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-chinese/k-c06',
        keyConcepts: ['起承轉合架構安排', '順敘、倒敘與插敘法', '人物外貌、動作與心理描寫', '以小見大的真情實感表達']
      },
      {
        id: 'man-u3',
        title: '單元 3：說明文與議論文思維',
        description: '學習說明文的總分總結構與說明方法，掌握議論文「論點、論據、論證」邏輯。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-chinese/k-c06',
        keyConcepts: ['總分總結構與邏輯順序', '列數字、作比較、打比方說明法', '議論文三大核心要素', '理性批判與雙向論證']
      },
      {
        id: 'man-u4',
        title: '單元 4：修辭的魔法與成語百寶箱',
        description: '精通譬喻、擬人、排比、誇飾、設問等高頻修辭，活用成語提升寫作深度。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-chinese/k-c06',
        keyConcepts: ['明喻、暗喻與借喻區別', '擬人化生動描寫', '排比與誇飾的語氣強化', '高頻成語典故與語境運用']
      },
      {
        id: 'man-u5',
        title: '單元 5：古典文學選讀——詩詞與寓言',
        description: '欣賞唐詩絕句與律詩格律意境，閱讀文言寓言領略古人處世哲思與智慧。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-chinese/k-c06',
        keyConcepts: ['近體詩押韻、對仗與字數規律', '王之渙、孟浩然經典名作鑑賞', '文言基礎字詞理解', '《守株待兔》《揠苗助長》寓意分析']
      },
      {
        id: 'man-u6',
        title: '單元 6：口語表達與簡報力',
        description: '學習上台發表三要素、眼神與聲音表情，掌握吸睛簡報與同理傾聽技巧。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-chinese/k-c06',
        keyConcepts: ['燈塔原則眼神接觸與聲音投射', '肢體語言與自信站姿', '簡報 Less is More 視覺原則', '三明治正向回饋法']
      }
    ],
    social: [
      {
        id: 'soc-u1',
        title: '單元 1：臺灣的民主之路與政府組織',
        description: '回顧解嚴至總統直選的民主轉型歷程，認識五權分立機關與公民權利義務。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-social/k-s06',
        keyConcepts: ['解嚴(1987)與總統直選(1996)歷史', '五院職權與制衡關係', '憲法四大基本權利', '守法與公民參與精神']
      },
      {
        id: 'soc-u2',
        title: '單元 2：社會變遷與多元族群文化',
        description: '探討少子高齡化與家庭型態變遷，欣賞原住民族、閩客、外省與新住民文化。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-social/k-s06',
        keyConcepts: ['少子化與高齡社會挑戰', '16個法定原住民族文化智慧', '閩客傳統節慶與客家精神', '新住民多元包容與平權']
      },
      {
        id: 'soc-u3',
        title: '單元 3：經濟發展與產業轉型',
        description: '從土地改革、十大建設到新竹科學園區與半導體矽盾，見證臺灣經濟奇蹟。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-social/k-s06',
        keyConcepts: ['耕者有其田與進口替代', '加工出口區與十大建設基礎設施', '竹科與全球半導體關鍵供應鏈', '綠色能源與永續轉型']
      },
      {
        id: 'soc-u4',
        title: '單元 4：全球化浪潮與國際組織參與',
        description: '探討全球化對經貿文化的影響，認識聯合國UN、WHO等組織與Taiwan Can Help貢獻。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-social/k-s06',
        keyConcepts: ['全球化機會與風險', 'UN、WHO、WTO、APEC 職責', '臺灣醫療團與農技團國際貢獻', '全球公民意識養成']
      },
      {
        id: 'soc-u5',
        title: '單元 5：法律與生活——兒童人權與網路安全',
        description: '認識聯合國兒童權利公約CRC四大原則、智慧財產權保護與防制網路霸凌。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-social/k-s06',
        keyConcepts: ['兒童權利公約四大原則', '著作權保護與合理引用', '個資防護與防範網路詐騙', '反霸凌專線1953與求助管道']
      },
      {
        id: 'soc-u6',
        title: '單元 6：永續發展與環境——SDGs公民行動',
        description: '探索聯合國SDGs 17項指標，從食衣住行落實節能減碳與環境保育公民行動。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-social/k-s06',
        keyConcepts: ['聯合國SDGs 17大目標意涵', '氣候變遷與淨零減碳', '源頭減塑與在地綠色消費', '校園與社區環保倡議行動']
      }
    ],
    english: [
      {
        id: 'eng-u1',
        title: 'Unit 1: Daily Routines & Time Management',
        description: '學習詢問與回答時間、時間介系詞(at/in/on)與頻率副詞(always to never)生活句型。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-english/k-e06',
        keyConcepts: ['What time is it? & Quarter/Half past', 'Prepositions: at (time), in (morning), on (days)', 'Daily routine verbs (brush, wake up, study)', 'Frequency adverbs position']
      },
      {
        id: 'eng-u2',
        title: 'Unit 2: Past Tense Stories & Adventures',
        description: '掌握規則動詞(-ed)與高頻不規則動詞過去式變化，熟練did問句與否定句。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-english/k-e06',
        keyConcepts: ['Regular verb past forms (+ed)', 'Irregular verbs (went, saw, ate, had, took)', 'Negative sentences with didn\'t + base verb', 'Past questions with Did you...?']
      },
      {
        id: 'eng-u3',
        title: 'Unit 3: Places & Asking for Directions',
        description: '熟練方位介系詞(next to, between, across from)與禮貌問路指路英文句型。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-english/k-e06',
        keyConcepts: ['Prepositions of place (next to, across from)', 'Excuse me, how do I get to...?', 'Giving directions: Go straight, Turn left/right', 'Map reading vocabulary']
      },
      {
        id: 'eng-u4',
        title: 'Unit 4: Food, Health & Body Care',
        description: '學習身體部位單字、表達身體不舒服症狀(-ache)與看醫生看診實用對話。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-english/k-e06',
        keyConcepts: ['Body parts & symptoms (headache, stomachache)', 'I have a sore throat / cold / fever', 'Doctor visit dialogue & advice', 'Nutrition & healthy food groups']
      },
      {
        id: 'eng-u5',
        title: 'Unit 5: Festivals, Holidays & World Cultures',
        description: '比較中西重要節慶（春節、端午、中秋 vs 萬聖節、聖誕節）習俗與文化英語。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-english/k-e06',
        keyConcepts: ['Taiwanese festivals vocabulary (zongzi, red envelope)', 'Western holidays (Halloween, Christmas)', 'Holiday dates with in/on', 'Cultural respect & traditions']
      },
      {
        id: 'eng-u6',
        title: 'Unit 6: Reading Comprehension & Phonics Mastery',
        description: '掌握 Skimming 略讀與 Scanning 掃讀策略，利用上下文線索推敲英文生字。',
        videoUrl: 'https://www.junyiacademy.org/course-compare/k-english/k-e06',
        keyConcepts: ['Skimming for main idea', 'Scanning for specific details', 'Context clues for new vocabulary', 'Word suffixes (-tion, -ful, -ly)']
      }
    ],
    arts: [
      {
        id: 'art-u1',
        title: '單元 1：視覺藝術探索——色彩與構圖之美',
        description: '掌握色彩三要素（色相、明度、彩度）、冷暖色調與黃金比例對稱構圖原則。',
        videoUrl: 'https://www.junyiacademy.org/',
        keyConcepts: ['色彩三要素與色相環', '冷色調與暖色調的情緒感染', '黃金比例、三分法與對稱平衡', '水彩、版畫多元媒材特性']
      },
      {
        id: 'art-u2',
        title: '單元 2：音樂欣賞與實作——音符與節奏的魔力',
        description: '認識五線譜音符拍號、打擊樂器節奏，欣賞古典樂、民謠與臺灣本土音樂。',
        videoUrl: 'https://www.junyiacademy.org/',
        keyConcepts: ['五線譜高音譜號、音名與休止符', '拍號意義（4/4拍、3/4拍律動）', '古典交響樂器編制', '臺灣本土民謠與歌仔戲曲風']
      },
      {
        id: 'art-u3',
        title: '單元 3：表演藝術與戲劇舞台——身體與創意的交響曲',
        description: '探索肢體動作、聲音四度空間、三幕劇架構與幕前幕後團隊合作分工。',
        videoUrl: 'https://www.junyiacademy.org/',
        keyConcepts: ['肢體雕塑與非語言情緒傳達', '聲音音高、音量、音色與語速', '戲劇三幕架構（開端、高潮、結局）', '導演、舞台、燈光幕後團隊職責']
      },
      {
        id: 'art-u4',
        title: '單元 4：生活美學與設計思考——點亮生活的創意智慧',
        description: '學習以人為本的設計思考五步驟，探討通用設計、公共指標系統與綠色包裝。',
        videoUrl: 'https://www.junyiacademy.org/',
        keyConcepts: ['設計思考五大步驟 (EDIPT)', '通用設計 (Universal Design) 友善原則', '公共視覺指標 (Pictogram) 特點', '綠色永續與形式跟隨功能']
      }
    ],
    health_pe: [
      {
        id: 'pe-u1',
        title: '單元 1：青春期的身心蛻變——擁抱成長與自我肯定',
        description: '認識男女第二性徵生理變化、情緒調適、性別平等與建立正向身體意象。',
        videoUrl: 'https://www.junyiacademy.org/',
        keyConcepts: ['青春期生長衝刺與第二性徵', '情緒管理與同儕調適妙方', '正向身體意象 (拒絕外貌焦慮)', '身體自主權與堅定拒絕']
      },
      {
        id: 'pe-u2',
        title: '單元 2：飲食與營養密碼——「我的餐盤」聰明吃',
        description: '實踐「我的餐盤」六大口訣，學會解讀食品成分標示與避開高糖高鈉陷阱。',
        videoUrl: 'https://www.junyiacademy.org/',
        keyConcepts: ['六大類食物功能與均衡攝取', '「我的餐盤」六句健康口訣', '食品營養標示三要素解讀', '減糖減鈉與白開水重要性']
      },
      {
        id: 'pe-u3',
        title: '單元 3：安全急救與運動防護——關鍵時刻的守護者',
        description: '熟練 CPR+AED「叫叫CD」急救口訣、哈姆立克法與運動傷害 PRICE 冰敷原則。',
        videoUrl: 'https://www.junyiacademy.org/',
        keyConcepts: ['CPR胸外按壓（位置、深度5cm、速率100~120次）', 'AED操作口訣與電擊安全', '氣道哽塞哈姆立克急救法', '急性運動傷害 PRICE 原則']
      },
      {
        id: 'pe-u4',
        title: '單元 4：體適能與運動家精神——身心強健的恆毅力',
        description: '掌握健康體適能四大要素與鍛鍊方法，內化守規則、全力以赴的運動家品格。',
        videoUrl: 'https://www.junyiacademy.org/',
        keyConcepts: ['心肺耐力、肌力耐力、柔軟度、身體組成', '個人運動計畫設計要領', '運動家精神四大核心品格', '運動對大腦發育與情緒助益']
      }
    ],
    integrative: [
      {
        id: 'comp-u1',
        title: '單元 1：時間與金錢管理——打造自律高效的精彩生活',
        description: '活用時間管理「四象限法則」、辨析需要與想要、掌握六三一存錢法。',
        videoUrl: 'https://www.junyiacademy.org/',
        keyConcepts: ['時間管理四象限法（重視第二象限）', '自主制定高年級學習計畫表', '「需要」vs「想要」理性消費', '六三一儲蓄與預算分配']
      },
      {
        id: 'comp-u2',
        title: '單元 2：人際溝通與情緒解碼——高EQ的人際和諧術',
        description: '學會情緒紅綠燈辨識、掌握「我訊息(I-Message)」表達與衝突同理心化解。',
        videoUrl: 'https://www.junyiacademy.org/',
        keyConcepts: ['情緒紅綠燈停想行步驟', '「我訊息」溝通公式四步驟', '衝突處理同理心五階段', '健康接納情緒的高EQ思維']
      },
      {
        id: 'comp-u3',
        title: '單元 3：生涯探索與自主學習策略——發掘天賦的成長地圖',
        description: '探索迦納八大多元智能，掌握康乃爾筆記法與費曼學習法等高效學習工具。',
        videoUrl: 'https://www.junyiacademy.org/',
        keyConcepts: ['迦納八大多元智能理論', '發掘個人優勢與興趣熱忱', '康乃爾筆記法三大結構', '費曼學習法「大白話輸出」驗證']
      },
      {
        id: 'comp-u4',
        title: '單元 4：社會服務與公民實踐——用愛與行動溫暖世界',
        description: '理解服務學習四部曲，從小做起參與校園志工、社區關懷與環境倡議實踐。',
        videoUrl: 'https://www.junyiacademy.org/',
        keyConcepts: ['服務學習四部曲 (準備、行動、反思、慶賀)', '少年公民社區與校園參與方案', '關懷弱勢與友善平權行動', '利他精神帶來的生命價值']
      }
    ]
  },
  questionBanks: [
    {
      id: 'qb-1',
      title: '112學年度 第一學期 數學科 第一次段考（最大公因數、分數除法）',
      source: '中小學題庫網精選 (新北市國小)',
      type: 'pdf',
      subject: 'math'
    },
    {
      id: 'qb-2',
      title: '112學年度 第二學期 數學科 期末考（圓面積、柱體體積、速率）',
      source: '中小學題庫網精選 (臺北市國小)',
      type: 'pdf',
      subject: 'math'
    },
    {
      id: 'qb-3',
      title: '112學年度 第一學期 自然科學 第一次段考（天氣變化、水溶液）',
      source: '各校公開段考試題庫',
      type: 'pdf',
      subject: 'science'
    },
    {
      id: 'qb-4',
      title: '112學年度 第二學期 自然科學 期末考（簡單機械、防鏽防腐、生態）',
      source: '各校公開試題精選',
      type: 'pdf',
      subject: 'science'
    },
    {
      id: 'qb-5',
      title: '112學年度 第一學期 國語文 第一次評量（閱讀理解、修辭成語）',
      source: '全國中小學試卷網',
      type: 'pdf',
      subject: 'mandarin'
    },
    {
      id: 'qb-6',
      title: '112學年度 第一學期 社會科 第一次段考（臺灣民主、多元族群）',
      source: '各校公開試題庫',
      type: 'pdf',
      subject: 'social'
    },
    {
      id: 'qb-7',
      title: '112學年度 第二學期 英語文 期末評量（Past Tense & Reading）',
      source: '雙語教育資源網精選',
      type: 'pdf',
      subject: 'english'
    },
    {
      id: 'qb-8',
      title: '112學年度 藝術領域 期末學力評量（色彩學、五線譜與戲劇賞析）',
      source: '教育部藝術教育資源庫',
      type: 'pdf',
      subject: 'arts'
    },
    {
      id: 'qb-9',
      title: '112學年度 健康與體育 知識總結評量（飲食營養、急救防護與體適能）',
      source: '國民健康署與體育署教案精選',
      type: 'pdf',
      subject: 'health_pe'
    },
    {
      id: 'qb-10',
      title: '112學年度 綜合活動 素養實踐評量（時間金錢管理、溝通EQ與生涯探索）',
      source: '國教院素養導向評量庫',
      type: 'pdf',
      subject: 'integrative'
    }
  ]
};
