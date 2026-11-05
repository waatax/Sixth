// 🇬🇧 英語文領域 教科書考前筆記大複習 (6上 & 6下 完整 8 單元)
// 依據 108 課綱與三大版本（康軒、南一、翰林）編寫，涵蓋核心觀念、名師公式、歷屆陷阱與經典真題實戰

export const engNotes = {
  "eng-u1": {
    "unitId": "eng-u1",
    "title": "Unit 1: Daily Routines, Time Expressions & Frequency Adverbs",
    "semester": "6A",
    "term": "6上",
    "textbookCoverage": "康軒第1單元 / 南一第1單元 / 翰林第1單元",
    "coreConcepts": [
      "【道地英語時間表達法】：\n   • 整點：It's seven o'clock. (7:00)\n   • 15 分 (一刻鐘)：It's 7:15. = It's a quarter past seven. (過 7 點 1 刻)\n   • 30 分 (半小時)：It's 7:30. = It's half past seven.\n   • 45 分 (差一刻到下一點)：It's 7:45. = It's a quarter to eight. (差一刻到 8 點)！",
      "【頻率副詞階梯百分比與文法位置】：\n   • 頻率高低：always (100%) > usually (80%) > often (60%) > sometimes (40%) > seldom (20%) > never (0%).\n   • 【黃金文法位置規律】：放在「be 動詞【之後】」，放在「一般動詞【之前】」！\n     例：He is always happy. / She always does her homework before dinner.",
      "【第三人稱單數現在簡單式動詞變化規則】：\n   • 主詞為 He, She, It 或單數名詞時，現在式一般動詞字尾加 -s 或 -es：\n     - 一般加 -s：reads, plays, eats\n     - 字尾為 -s, -sh, -ch, -x, -o 加 -es：watches, washes, brushes, fixes, goes, does\n     - 子音 + y 去 y 改 -ies：studies, flies。",
      "【時間介系詞精準搭配】：\n   • 「at」+ 具體鐘點時刻（at 6:30, at noon, at midnight）\n   • 「on」+ 具體星期與日期（on Monday, on October 10th）\n   • 「in」+ 月份、季節、年份或一天中某個時段（in the morning, in summer, in 2026）。",
      "【詢問頻率句型】：How often do/does + 主詞 + 原形動詞？回答可用「Once a week (每週一次)」、「Twice a month (每月兩次)」、「Three times a day (每天三次)」或頻率副詞。"
    ],
    "keyFormulas": [
      {
        "name": "頻率副詞文法位置口訣",
        "formula": "\\text{Be 動詞後、助動詞後、一般動詞前！} \\quad [ \\text{Be} + \\text{Adv} \\quad / \\quad \\text{Adv} + \\text{Verb} ]",
        "detail": "如：He is always late. (be後)；He always walks to school. (動詞前)。"
      },
      {
        "name": "道地時間 past 與 to 轉換式",
        "formula": "7:15 = \\text{a quarter past seven} \\quad ; \\quad 7:45 = \\text{a quarter to eight}",
        "detail": "past 表示「過」，to 表示「差幾分到下一整點」。"
      },
      {
        "name": "時間介系詞三劍客口訣",
        "formula": "\\text{at 鐘點，on 日期星期，in 月份季節早中晚！}",
        "detail": "如 at 7:00, on Sunday, on July 4th, in May, in the afternoon。"
      }
    ],
    "examPitfalls": [
      "❌ 7:45 誤寫成 a quarter to seven：7:45 是「差 15 分到 8 點」，必須寫 eight，不能寫 seven！",
      "❌ 頻率副詞位置放錯：寫成 \"He always is late.\"（錯誤！正確是 \"He is always late.\"）。",
      "❌ 第三人稱單數忘記加 -es：如 \"My brother brush his teeth\"（錯誤！brush 字尾 -sh 必須加 -es 變成 brushes）。",
      "❌ 時間介系詞混淆：具體鐘點誤用 in（如 in 6:30 錯誤，必須用 at 6:30）。"
    ],
    "pastExamWalkthroughs": [
      {
        "examSource": "臺北市某國小六年級上學期段考精選題",
        "question": "A: \"What time is it right now?\"  B: \"It's 7:15.\" 請問下列哪一個選項是 7:15 最道地的英語時間表達法？",
        "options": [
          "A. It's a quarter to seven.",
          "B. It's a quarter past seven.",
          "C. It's half past seven.",
          "D. It's fifteen to eight."
        ],
        "answerIndex": 1,
        "explanation": "【解題步驟】：\n1. 7:15 表示 7 點過了一刻鐘（15 分鐘）。\n2. 英語中「一刻鐘」為 a quarter，「過了幾點」用介系詞 past。\n3. 因此 7:15 道地說法是 \"It's a quarter past seven.\"。\nA 選項是 6:45；C 選項是 7:30。\n故選 B。"
      },
      {
        "examSource": "高雄市某國小六年級上學期段考精選題",
        "question": "Tina is an excellent student. She ______ finishes her homework before taking a rest, and she ______ late for school.",
        "options": [
          "A. always ; is never",
          "B. is always ; never is",
          "C. never ; always is",
          "D. always ; never is"
        ],
        "answerIndex": 0,
        "explanation": "【解題步驟】：\n1. 第一空格：finishes 是一般動詞，頻率副詞放在一般動詞「前面」，故為 always finishes。\n2. 第二空格：is 是 be 動詞，頻率副詞放在 be 動詞「後面」，故為 is never late。\n3. 綜合兩空格：always ; is never。\n故正確答案為 A。"
      },
      {
        "examSource": "新北市某國小六年級上學期第一次段考精選題",
        "question": "My elder brother ______ his teeth carefully twice a day ______ the morning and before going to bed.",
        "options": [
          "A. brush ; in",
          "B. brushes ; in",
          "C. brush ; at",
          "D. brushes ; on"
        ],
        "answerIndex": 1,
        "explanation": "【解題步驟】：\n1. 主詞 My elder brother 是第三人稱單數，現在式動詞 brush 字尾是 -sh，必須加 -es 變成 brushes。\n2. 在早晨、下午、晚上的時段固定搭配介系詞 in，即 \"in the morning\"。\n故選 B。"
      },
      {
        "examSource": "臺中市某國小六年級上學期段考精選題",
        "question": "A: \"______ does your father play tennis with his friends?\"  B: \"Twice a week.\"",
        "options": [
          "A. How many",
          "B. What time",
          "C. How often",
          "D. Where"
        ],
        "answerIndex": 2,
        "explanation": "【解題步驟】：\n1. 答句 \"Twice a week\"（一週兩次）表示活動進行的「頻率次數」。\n2. 英語中專門用來詢問發生頻率的疑問詞組是 \"How often\"（多久一次）。\n故選 C。"
      }
    ],
    "selfChecklist": [
      "我掌握 a quarter past / a quarter to / half past 的道地時間說法",
      "我牢記頻率副詞「be 動詞後、一般動詞前」的黃金文法位置",
      "我能正確在第三人稱單數主詞後將動詞加上 -s 或 -es",
      "我能正確搭配時間介系詞（at 鐘點、on 星期日期、in 早中晚與月份）"
    ]
  },
  "eng-u2": {
    "unitId": "eng-u2",
    "title": "Unit 2: Past Actions, Weekend Activities & Irregular Verbs",
    "semester": "6A",
    "term": "6上",
    "textbookCoverage": "康軒第2單元 / 南一第2單元 / 翰林第2單元",
    "coreConcepts": [
      "【過去簡單式 (Simple Past Tense) 核心意義】：表示「在過去特定時間點已經完成、結束的動作或存在的狀態」。",
      "【過去式專屬時間副詞標誌（審題雷達）】：\n   • yesterday（昨天）、yesterday morning\n   • last night / last weekend / last year（上週/去年）\n   • two days ago / a week ago（...前）\n   • in 2020 / this morning（指已過去的今晨）。看到這些詞，動詞必定要用過去式！",
      "【規則動詞過去式加 -ed 規則】：\n   • 一般直接加 -ed：play ➔ played, visit ➔ visited, cook ➔ cooked\n   • 字尾有 e 只加 -d：live ➔ lived, dance ➔ danced\n   • 短母音 + 單一子音結尾，雙寫字尾加 -ed：stop ➔ stopped, plan ➔ planned\n   • 子音 + y 去 y 改 -ied：study ➔ studied, cry ➔ cried。",
      "【高頻不規則過去式動詞全覽（段考必背 10 大天王）】：\n   • go ➔ went / see ➔ saw / eat ➔ ate / buy ➔ bought / have ➔ had\n   • do ➔ did / make ➔ made / take ➔ took / write ➔ wrote / come ➔ came。",
      "【過去式疑問句與否定句照妖鏡（Did 後面打回原形！）】：\n   • 疑問句：Did + 主詞 + 【原形動詞】...?\n     答句：Yes, I did. / No, I didn't.\n   • 否定句：主詞 + didn't + 【原形動詞】.\n   • 【段考最高頻陷阱】：Did 或 didn't 後面的動詞【絕對只能用原形】！"
    ],
    "keyFormulas": [
      {
        "name": "過去式助動詞照妖鏡口訣",
        "formula": "\\text{Did / Didn't 一出馬，後面動詞立刻打回「原形」！}",
        "detail": "例：Did you went? (大錯特錯！) ➔ Did you go? (正確！)"
      },
      {
        "name": "過去式 Be 動詞主格配對表",
        "formula": "I / He / She / It \\implies \\text{was} \\quad ; \\quad You / We / They \\implies \\text{were}",
        "detail": "否定縮寫為 wasn't / weren't。"
      },
      {
        "name": "常見不規則動詞三態記憶",
        "formula": "\\text{go-went} \\ , \\text{eat-ate} \\ , \\text{buy-bought} \\ , \\text{see-saw} \\ , \\text{take-took}",
        "detail": "小六升國一必須滾瓜爛熟的十大多發動詞。"
      }
    ],
    "examPitfalls": [
      "❌ Did 後面動詞又寫成過去式：題目問 \"Did you ______ (see) the movie?\"，學生誤選 saw，正確必須選原形 see！",
      "❌ 不規則動詞胡亂加 -ed：把 buy 寫成 buyed（正確是 bought）；把 go 寫成 goed（正確是 went）。",
      "❌ Be 動詞單複數配錯：主詞為 They 誤用 was（正確是 They were excited）。",
      "❌ 疑問詞過去式句型助動詞漏掉：問句寫成 \"Where you went yesterday?\"（錯誤！必須加助動詞 did 變成 \"Where did you go yesterday?\"）。"
    ],
    "pastExamWalkthroughs": [
      {
        "examSource": "臺北市某國小六年級上學期段考精選題",
        "question": "Yesterday afternoon, Emily ______ a delicious chocolate cake for her mother's birthday party.",
        "options": [
          "A. bake",
          "B. bakes",
          "C. baked",
          "D. baking"
        ],
        "answerIndex": 2,
        "explanation": "【解題步驟】：\n1. 句子開頭有明確的過去時間副詞 \"Yesterday afternoon\"（昨天下午）。\n2. 句子時態為過去簡單式，主要動詞 bake 字尾有 e，過去式直接加 -d 變成 baked。\n故選 C。"
      },
      {
        "examSource": "高雄市某國小六年級上學期期末考精選題",
        "question": "A: \"Did you ______ any sea turtles when you went snorkeling in Xiaoliuqiu last weekend?\"  B: \"Yes, I ______ three of them!\"",
        "options": [
          "A. see ; saw",
          "B. saw ; see",
          "C. see ; see",
          "D. saw ; saw"
        ],
        "answerIndex": 0,
        "explanation": "【解題步驟】：\n1. 前句中有助動詞 Did，依照英語文法「助動詞後面一律接原形動詞」，故第一個空格必須填原形 see。\n2. 答句是肯定句直述句，描述過去看見的事實，動詞要用過去式，see 的過去式是不規則動詞 saw。\n3. 組合為：see ; saw。\n故選 A。"
      },
      {
        "examSource": "新北市某國小六年級上學期段考精選題",
        "question": "Kevin: \"Where ______ you go last night?\"  Leo: \"I ______ to the night market with my family.\"",
        "options": [
          "A. do ; go",
          "B. did ; went",
          "C. did ; go",
          "D. was ; went"
        ],
        "answerIndex": 1,
        "explanation": "【解題步驟】：\n1. 時間副詞 \"last night\"（昨晚）指過去時間。\n2. 問句主動詞是 go（一般動詞），疑問句必須用過去式助動詞 did 引導。\n3. 答句為過去肯定直述句，go 的不規則過去式是 went。\n故選 B。"
      },
      {
        "examSource": "臺中市某國小六年級上學期段考精選題",
        "question": "The basketball players ______ very tired after the championship game yesterday, but they ______ extremely happy.",
        "options": [
          "A. were ; were",
          "B. was ; was",
          "C. are ; are",
          "D. was ; were"
        ],
        "answerIndex": 0,
        "explanation": "【解題步驟】：\n1. 時間副詞 yesterday 表過去時態。\n2. 主詞 \"The basketball players\"（籃球員們）是複數名詞。\n3. 複數主詞對應的過去式 be 動詞是 were。\n故選 A。"
      }
    ],
    "selfChecklist": [
      "我掌握 yesterday, last night, ... ago 等過去式時間標誌",
      "我牢記 Did 與 didn't 後面的動詞必須被打回原形",
      "我能默寫常見不規則動詞過去式（went, saw, ate, bought, had, made, took）",
      "我清楚過去式 be 動詞配對（I/he/she/it was ; you/we/they were）"
    ]
  },
  "eng-u3": {
    "unitId": "eng-u3",
    "title": "Unit 3: Asking for & Giving Directions, City Places & Spatial Prepositions",
    "semester": "6A",
    "term": "6上",
    "textbookCoverage": "康軒第3單元 / 南一第3單元 / 翰林第3單元",
    "coreConcepts": [
      "【問路核心禮貌句型】：\n   • Excuse me, how do/can I get to the [place] ? (不好意思，請問我該如何到達...？)\n   • Excuse me, where is the nearest [place] ? (請問最近的...在哪裡？)\n   • Is there a [place] around/near here ? (這附近有...嗎？)",
      "【指路核心動作短語】：\n   • Go straight for [number] blocks. (直走...個街區)\n   • Turn left / Turn right on [Street Name]. (在...路左轉/右轉)\n   • It's on your left / on your right. (它就在你的左手邊/右手邊)\n   • Cross the street. (過馬路) / Walk along the river. (沿著河邊走)。",
      "【空間位置介系詞精準運用】：\n   • 「between A and B」：在 A 與 B「兩者之間」。\n   • 「across from」：在...的「正對面（必須跨過街道）」，同義於 opposite。\n   • 「next to」：在...的「旁邊（緊鄰相鄰）」，同義於 beside。\n   • 「on the corner of」：在...與...的「十字路口轉角處」。\n   • 「in front of」：在...的前面（戶外前方）；「in the front of」指在空間內部的前方。",
      "【常見城市生活公共場所單字】：post office (郵局), bank (銀行), hospital (醫院), department store (百貨公司), library (圖書館), train station (火車站), museum (博物館), bakery (麵包店)。",
      "【There is / There are 存在句型在街區的應用】：\n   • There is a bakery next to the park. (單數用 is)\n   • There are two supermarkets on Main Street. (複數用 are)。"
    ],
    "keyFormulas": [
      {
        "name": "問路問答黃金公式",
        "formula": "\\text{Excuse me, how do I get to...?} \\implies \\text{Go straight and turn left/right on...}",
        "detail": "先禮貌招呼 Excuse me，問句用原形 get to。"
      },
      {
        "name": "空間介系詞四大天王",
        "formula": "\\text{between A and B} \\quad / \\quad \\text{across from} \\quad / \\quad \\text{next to} \\quad / \\quad \\text{on the corner}",
        "detail": "看圖回答位置時，找準街道隔開（across from）還是夾在中間（between）。"
      },
      {
        "name": "左右方位與轉彎表達",
        "formula": "\\text{Turn left/right} \\quad \\text{vs} \\quad \\text{It is on your left/right}",
        "detail": "Turn 是動詞（轉彎）；on your left 是介系詞片語表示位置（在你的左方）。"
      }
    ],
    "examPitfalls": [
      "❌ between 後面漏掉 and：between 必須搭配 and（between A and B），不可寫成 between A with B。",
      "❌ across from 漏掉 from：在...對面必須是 across from，不能只寫 across。",
      "❌ turn right 與 on your right 混用：動詞轉彎直接用 Turn right（不加 on）；表示建築物位置才用 It's on your right。",
      "❌ next to 漏掉 to：緊鄰旁邊是 next to，不可單獨只寫 next。"
    ],
    "pastExamWalkthroughs": [
      {
        "examSource": "臺北市某國小六年級上學期期末考精選題",
        "question": "A: \"Excuse me, ______ do I get to the Central Train Station?\"  B: \"Go straight for two blocks and turn left on Sun Road. It's on your right.\"",
        "options": [
          "A. what",
          "B. how",
          "C. where",
          "D. why"
        ],
        "answerIndex": 1,
        "explanation": "【解題步驟】：\n1. 答句給出了具體的行走指路步驟（直走、左轉）。\n2. 詢問「如何前往某個地點」的標準句型為 \"How do I get to + 地點?\"。\n3. 若用 where，句型應為 \"Where is the Central Train Station?\"（不接 do I get to）。\n故選 B。"
      },
      {
        "examSource": "高雄市某國小六年級上學期期末考精選題",
        "question": "Look at the map. The bakery is located ______ the flower shop and the post office on First Street.",
        "options": [
          "A. next",
          "B. across",
          "C. between",
          "D. on"
        ],
        "answerIndex": 2,
        "explanation": "【解題步驟】：\n1. 題幹中出現 \"the flower shop AND the post office\"（花店「和」郵局）。\n2. 表示位於兩者之間的標準片語是 \"between A and B\"。\n故選 C。"
      },
      {
        "examSource": "新北市某國小六年級上學期第二次段考精選題",
        "question": "The city library is right ______ from the fire station. You just need to cross the street to get there.",
        "options": [
          "A. next",
          "B. behind",
          "C. across",
          "D. between"
        ],
        "answerIndex": 2,
        "explanation": "【解題步驟】：\n1. 後方句子提示 \"You just need to cross the street\"（你只需要過馬路）。\n2. 與介系詞 from 搭配表示「在...正對面」的片語為 \"across from\"。\n故選 C。"
      },
      {
        "examSource": "臺中市某國小六年級上學期期末考精選題",
        "question": "A: \"Is there a convenience store near here?\"  B: \"Yes, ______ a 7-Eleven on the corner of Park Road.\"",
        "options": [
          "A. they are",
          "B. there is",
          "C. there are",
          "D. it has"
        ],
        "answerIndex": 1,
        "explanation": "【解題步驟】：\n1. 問句使用 \"Is there...\" 進行存在提問。\n2. 答句所指為單數名詞 \"a 7-Eleven\"，回答應使用單數存在句型 \"Yes, there is...\"。\n故正確答案為 B。"
      }
    ],
    "selfChecklist": [
      "我掌握問路句型 \"How do I get to...?\" 與 \"Where is...?\"",
      "我能熟練看地圖給出指路指令（Go straight, Turn left/right, Cross the street）",
      "我清楚運用 between A and B, across from, next to, on the corner",
      "我能準確區分 Turn left (動詞轉彎) 與 on your left (在左手邊)"
    ]
  },
  "eng-u4": {
    "unitId": "eng-u4",
    "title": "Unit 4: Health, Common Illnesses & Modal Auxiliaries for Advice",
    "semester": "6A",
    "term": "6上",
    "textbookCoverage": "康軒第4單元 / 南一第4單元 / 翰林第4單元",
    "coreConcepts": [
      "【關懷身體健康常用問答句】：\n   • \"What's wrong with you?\" / \"What's the matter?\" (你怎麼了？哪裡不舒服？)\n   • \"I have a [illness].\" (我得了/我感到...)。",
      "【常見身體不適與病徵單字】：\n   • have a cold (感冒) / have a fever (發燒) / have a cough (咳嗽)\n   • have a headache (頭痛) / have a toothache (牙痛)\n   • have a stomachache (胃痛/肚子痛)\n   • have a sore throat (喉嚨痛) / have a runny nose (流鼻水)。",
      "【情態助動詞 should 與 shouldn't 給予健康建議】：\n   • 「should（應該）」與「shouldn't（不應該）」是情態助動詞。\n   • 【重要文法原則】：助動詞後面【一律接原形動詞 (V)】！\n   • 肯定建議：You should see a doctor. / You should drink more warm water. / You should take a rest in bed.\n   • 否定建議：You shouldn't eat junk food or drink cold water. / You shouldn't stay up late.",
      "【專科醫生與醫療常識】：\n   • dentist (牙醫，toothache 找牙醫)\n   • take medicine (吃藥，動詞用 take，不可用 eat！)。",
      "【健康生活六大類食物 (MyPlate)】：Grains (全穀雜糧), Protein (蛋白質肉蛋豆類), Dairy (乳製品牛奶起司), Vegetables (蔬菜), Fruits (水果)。"
    ],
    "keyFormulas": [
      {
        "name": "給予健康建議助動詞句型",
        "formula": "\\text{主詞} + \\text{should / shouldn't} + \\text{【原形動詞 V】}",
        "detail": "例：You should take medicine. (take 用原形，不可寫 takes 或 took)。"
      },
      {
        "name": "常見疼痛單字 -ache 字尾規律",
        "formula": "\\text{身體部位} + \\text{-ache} = \\text{該部位疼痛}",
        "detail": "head + ache = headache (頭痛) ; tooth + ache = toothache (牙痛) ; stomach + ache = stomachache (胃痛)。"
      },
      {
        "name": "吃藥固定動詞搭配",
        "formula": "\\text{take medicine} \\quad (\\text{絕對不可用 eat medicine！})",
        "detail": "英語文化中「吃藥」是 take 接受藥物，中式英文常誤寫 eat。"
      }
    ],
    "examPitfalls": [
      "❌ 吃藥寫成 eat medicine：中文說「吃藥」，英文必須用 \"take medicine\"！",
      "❌ should 後面動詞加 -s 或 -ed：如 \"You should sees a doctor\"（錯誤！should 後面只能接原形動詞 see）。",
      "❌ headache 冠詞漏掉：一般身體輕微不適習慣加冠詞 a，如 have a cold, have a headache, have a fever。",
      "❌ 牙痛找錯醫生：牙痛 (toothache) 必須看牙醫 (dentist)，不能只寫 vet (獸醫)。"
    ],
    "pastExamWalkthroughs": [
      {
        "examSource": "臺北市某國小六年級上學期期末考精選題",
        "question": "Doctor: \"You have a high fever and a terrible sore throat. You caught a bad flu. You should ______ in bed and you shouldn't ______ cold drinks.\"",
        "options": [
          "A. rest ; drink",
          "B. rested ; drank",
          "C. rests ; drinking",
          "D. resting ; drinks"
        ],
        "answerIndex": 0,
        "explanation": "【解題步驟】：\n1. should 與 shouldn't 均為情態助動詞。\n2. 根據文法規則，助動詞後方必須無條件接「原形動詞」。\n3. 兩個空格皆需原形動詞：rest ; drink。\n故選 A。"
      },
      {
        "examSource": "高雄市某國小六年級上學期期末考精選題",
        "question": "A: \"What's wrong with Kevin? He is holding his cheek and crying.\"  B: \"He has a serious ______. He needs to see a dentist right away.\"",
        "options": [
          "A. headache",
          "B. stomachache",
          "C. toothache",
          "D. sore throat"
        ],
        "answerIndex": 2,
        "explanation": "【解題步驟】：\n1. 題幹提到 \"holding his cheek\"（捂著臉頰）以及 \"see a dentist\"（看牙醫）。\n2. 牙醫 (dentist) 專門治療牙齒相關疾病，故填 toothache（牙痛）。\n故選 C。"
      },
      {
        "examSource": "新北市某國小六年級上學期期末考精選題",
        "question": "When you are sick and the doctor prescribes some pills for you, you should remember to ______ on time after meals.",
        "options": [
          "A. eat medicine",
          "B. take medicine",
          "C. drink pills",
          "D. chew drugs"
        ],
        "answerIndex": 1,
        "explanation": "【解題步驟】：\n1. 在英語慣用語中，「吃藥」的固定動詞搭配一律使用 \"take medicine\"。\n2. 使用 \"eat medicine\" 屬於典型的中式英文語病。\n故選 B。"
      },
      {
        "examSource": "臺中市某國小六年級上學期期末考精選題",
        "question": "According to the healthy food guidelines (MyPlate), which of the following food items belongs to the \"Dairy (乳製品)\" category?",
        "options": [
          "A. Fried chicken",
          "B. Brown rice",
          "C. Cheddar cheese and milk",
          "D. Broccoli"
        ],
        "answerIndex": 2,
        "explanation": "【解題步驟】：\n1. Dairy 指的是由動物乳汁提煉製成的乳製品。\n2. 起司 (cheese) 與牛奶 (milk) 是典型的乳製品。\n3. 炸雞屬於 Protein；糙米屬於 Grains；花椰菜屬於 Vegetables。\n故正確答案為 C。"
      }
    ],
    "selfChecklist": [
      "我能流利詢問與回答健康不適（What's wrong? / I have a...）",
      "我熟記常見病徵單字（cold, fever, headache, toothache, stomachache, sore throat）",
      "我牢記 should / shouldn't 後面一律接「原形動詞」",
      "我知道「吃藥」的英文是 \"take medicine\" 而非 \"eat medicine\""
    ]
  },
  "eng-u5": {
    "unitId": "eng-u5",
    "title": "Unit 5: Festivals, Cultural Customs & Traditional Celebrations",
    "semester": "6B",
    "term": "6下",
    "textbookCoverage": "康軒第1單元 / 南一第1單元 / 翰林第1單元",
    "coreConcepts": [
      "【臺灣本土重要傳統節慶與英語表達】：\n   • 「農曆新年 (Lunar New Year)」：Lunar New Year's Eve (除夕團圓飯 reunion dinner), get red envelopes (拿紅包), set off firecrackers (放鞭炮), paste spring couplets (貼春聯)。\n   • 「端午節 (Dragon Boat Festival)」：dragon boat races (划龍舟比賽), eat rice dumplings (吃粽子), wear scented sachets (戴香包)。\n   • 「中秋節 (Moon Festival / Mid-Autumn Festival)」：gaze at the full moon (賞滿月), eat mooncakes (吃月餅), eat pomelos (吃柚子), have barbecues (烤肉)。",
      "【西方代表性世界文化節慶】：\n   • 「萬聖夜 (Halloween - October 31st)」：dress up in spooky costumes (扮裝), carve jack-o'-lanterns (刻南瓜燈), trick-or-treat (不給糖就搗蛋)。\n   • 「感恩節 (Thanksgiving - 美國 11 月第四個星期四)」：family reunion, roast turkey (烤火雞), pumpkin pie (南瓜派), express gratitude (表達感恩)。\n   • 「聖誕節 (Christmas - December 25th)」：decorate Christmas tree (裝飾聖誕樹), exchange presents (交換禮物), Santa Claus (聖誕老人)。",
      "【節慶詢問重要問答句型】：\n   • \"When is [Festival Name]?\" ➔ \"It is in [Month] / on [Date].\"\n   • \"How do people celebrate [Festival]?\" ➔ \"People usually eat... and play...\"\n   • \"What is your favorite festival?\" ➔ \"My favorite festival is... because...\"",
      "【節慶文化多樣性與全球視野】：不同節慶反映了各民族感恩大地豐收、團聚和諧與珍惜家庭的共通價值。"
    ],
    "keyFormulas": [
      {
        "name": "三大本土節慶食物配對",
        "formula": "\\text{Lunar New Year (Dumplings/Fish)} \\ , \\text{Dragon Boat (Rice Dumplings)} \\ , \\text{Moon Festival (Mooncakes)}",
        "detail": "年節吃年糕水餃象徵元寶，端午吃粽子，中秋吃月餅。"
      },
      {
        "name": "西方三大節慶標誌活動",
        "formula": "\\text{Halloween (Trick-or-treat/Costumes)} \\ , \\text{Thanksgiving (Roast Turkey)} \\ , \\text{Christmas (Gifts/Tree)}",
        "detail": "萬聖節 10/31 變裝要糖果，聖誕節 12/25 拆禮物。"
      },
      {
        "name": "節慶日期介系詞規則",
        "formula": "\\text{It is in January (月份用 in)} \\quad \\text{vs} \\quad \\text{It is on December 25th (具體日期用 on)}",
        "detail": "有寫出具體日數（如 25th）一律用 on！"
      }
    ],
    "examPitfalls": [
      "❌ 節慶日期介系詞混淆：只寫月份用 in（in December）；寫出幾月幾號必須用 on（on December 25th）。",
      "❌ 粽子與月餅英文拼寫錯誤：粽子是 rice dumplings，月餅是 mooncakes，不可寫反。",
      "❌ 萬聖節與復活節混淆：Halloween 是南瓜燈與糖果；Easter 是彩蛋 (Easter eggs) 與復活節兔子。",
      "❌ 節慶專有名詞大寫遺漏：Lunar New Year, Halloween, Christmas 字首必須大寫。"
    ],
    "pastExamWalkthroughs": [
      {
        "examSource": "臺北市某國小六年級下學期段考精選題",
        "question": "On Lunar New Year's Eve, Taiwanese families get together to have a big reunion dinner. Children are happiest because they can receive ______ from their parents and grandparents.",
        "options": [
          "A. pumpkin pies",
          "B. red envelopes with lucky money",
          "C. Christmas stockings",
          "D. scented sachets"
        ],
        "answerIndex": 1,
        "explanation": "【解題步驟】：\n1. 農曆除夕夜 (Lunar New Year's Eve) 全家團圓吃年夜飯。\n2. 傳統習俗中長輩會發給晚輩壓歲錢紅包，英文是 \"red envelopes with lucky money\"。\n故選 B。"
      },
      {
        "examSource": "高雄市某國小六年級下學期段考精選題",
        "question": "During the Dragon Boat Festival in June, people across Taiwan participate in exciting dragon boat races on rivers and eat delicious ______ wrapped in bamboo leaves.",
        "options": [
          "A. mooncakes",
          "B. turkey legs",
          "C. rice dumplings (zongzi)",
          "D. candy canes"
        ],
        "answerIndex": 2,
        "explanation": "【解題步驟】：\n1. 端午節 (Dragon Boat Festival) 最具代表性的傳統美食是用竹葉包裹的粽子。\n2. 粽子的英文標準表達為 \"rice dumplings (zongzi)\"。\n故選 C。"
      },
      {
        "examSource": "新北市某國小六年級下學期第一次段考精選題",
        "question": "On Halloween night (October 31st), children dress up in scary costumes and go door-to-door shouting \"______!\" to collect sweet treats.",
        "options": [
          "A. Merry Christmas!",
          "B. Happy New Year!",
          "C. Trick-or-treat!",
          "D. Thank you very much!"
        ],
        "answerIndex": 2,
        "explanation": "【解題步驟】：\n1. 萬聖節夜晚兒童挨家挨戶要糖果時的標誌性口號是 \"Trick-or-treat!\"（不給糖就搗蛋）。\n故選 C。"
      },
      {
        "examSource": "臺中市某國小六年級下學期段考精選題",
        "question": "Christmas is celebrated ______ December 25th every year. Many people sing carols and exchange gifts around the tree.",
        "options": [
          "A. in",
          "B. at",
          "C. on",
          "D. for"
        ],
        "answerIndex": 2,
        "explanation": "【解題步驟】：\n1. \"December 25th\" 是具體的日期（有月也有日）。\n2. 根據時間介系詞規則，具體特定日期必須搭配介系詞 \"on\"。\n故正確答案為 C。"
      }
    ],
    "selfChecklist": [
      "我掌握中外代表性節慶名稱（Lunar New Year, Dragon Boat Festival, Moon Festival, Halloween, Christmas）",
      "我能流利說出各節慶代表美食與習俗活動（rice dumplings, mooncakes, red envelopes, trick-or-treat）",
      "我能正確運用日期介系詞（in 月份、on 具體日期）",
      "我理解不同節慶背後的文化意涵與感恩團聚精神"
    ]
  },
  "eng-u6": {
    "unitId": "eng-u6",
    "title": "Unit 6: Reading Strategies, Word Formation & Context Clues",
    "semester": "6B",
    "term": "6下",
    "textbookCoverage": "康軒第2單元 / 南一第2單元 / 翰林第2單元",
    "coreConcepts": [
      "【工具書與參考資料之功能定位】：\n   • 「dictionary（字典）」：查單字定義、詞性 (parts of speech)、發音音標與例句。\n   • 「telephone directory（電話簿/名錄）」：查個人或特定機構商家的電話號碼與地址。\n   • 「encyclopedia（百科全書）」：查跨學科全面深入的科學歷史背景事實知識。\n   • 「atlas（地圖集）」：查世界各國地圖、地形、首都與地理位置。\n   • 「menu（菜單）」：查餐廳菜色、成分與餐點價格。",
      "【英文構詞法三大法寶：字首與字尾 (Prefixes & Suffixes)】：\n   • 「否定字首 un-, in-, dis-」：加在形容詞或動詞前表「相反/不」。如 happy ➔ unhappy, friendly ➔ unfriendly, like ➔ dislike。\n   • 「形容詞字尾 -ful」：表示「充滿...的」。如 care + ful = careful (充滿細心的), help + ful = helpful (有幫助的), beauty + ful = beautiful。\n   • 「副詞字尾 -ly」：形容詞加 -ly 變成副詞，修飾動詞。如 quick ➔ quickly (快速地), slow ➔ slowly (緩慢地), loud ➔ loudly。",
      "【長篇閱讀兩大速讀技巧】：\n   • 「Skimming（略讀）」：快速看標題、首段、尾段與各段第一句，掌握全篇大意。\n   • 「Scanning（掃讀尋讀）」：眼光像雷達一樣快速掃描尋找特定關鍵字（如年份數字、人名專有名詞、價格）。",
      "【上下文線索推測生字字義 (Context Clues)】：遇到生字不要慌，從「前後文同義詞」、「對比反義詞 (but, however)」或「具體舉例說明」推導出生字的合理涵義。"
    ],
    "keyFormulas": [
      {
        "name": "常見字首字尾構詞公式",
        "formula": "\\text{un- (否定相反)} \\quad / \\quad \\text{-ful (充滿)} \\quad / \\quad \\text{-ly (化為副詞)}",
        "detail": "如 unhappy (不快樂), colorful (多彩的), easily (容易地)。"
      },
      {
        "name": "五大工具書檢索速配表",
        "formula": "\\text{單字意思} \\implies \\text{Dictionary} \\quad ; \\quad \\text{找電話} \\implies \\text{Directory} \\quad ; \\quad \\text{查地圖} \\implies \\text{Atlas}",
        "detail": "考試看清需求：問電話號碼選 directory，問單字發音選 dictionary。"
      },
      {
        "name": "上下文線索推導公式",
        "formula": "\\text{未知單字} = \\text{前後句反義詞 (however)} \\quad \\text{或} \\quad \\text{同位語解釋 (is, means)}",
        "detail": "善用轉折詞與例證破解閱讀理解生字難題。"
      }
    ],
    "examPitfalls": [
      "❌ dictionary 與 directory 拼寫混淆：查電話號碼是 telephone directory，查單字是 dictionary！",
      "❌ 字尾加 -ly 拼寫規則錯誤：happy 變副詞要去 y 改 i 加 ly 變成 happily。",
      "❌ 忽略閱讀題幹中的 NOT 或 EXCEPT：題目問 \"Which is NOT true?\"，粗心選成正確的選項。",
      "❌ 閱讀測驗只看字面不看上下文：單詞有多重意思，必須依據句子語境決定真實含義。"
    ],
    "pastExamWalkthroughs": [
      {
        "examSource": "臺北市某國小六年級下學期段考精選題",
        "question": "When you want to look up the telephone number and address of a local dental clinic, which reference book should you check?",
        "options": [
          "A. A cookbook",
          "B. A telephone directory",
          "C. A dictionary",
          "D. An English novel"
        ],
        "answerIndex": 1,
        "explanation": "【解題步驟】：\n1. 題幹要求尋找診所的「電話號碼與地址 (telephone number and address)」。\n2. 專門記錄電話與通訊資訊的工具書是「電話簿/工商名錄 (telephone directory)」。\n3. dictionary 是查單字字義發音，不可混淆。\n故選 B。"
      },
      {
        "examSource": "高雄市某國小六年級下學期段考精選題",
        "question": "In English word formation, adding the suffix \"-ful\" to a noun often creates an adjective meaning \"full of\". Which of the following words means \"full of help or ready to give assistance\"?",
        "options": [
          "A. helpless",
          "B. helpful",
          "C. unhelpful",
          "D. helping"
        ],
        "answerIndex": 1,
        "explanation": "【解題步驟】：\n1. 字首或字尾含義：-ful 表示「充滿...的」。\n2. \"help + ful = helpful\" 意思是「樂於助人的、有幫助的」。\n故正確答案為 B。"
      },
      {
        "examSource": "新北市某國小六年級下學期第一次段考精選題",
        "question": "Read the sentence: \"The winter in Antarctica was so *frigid* that even boiling water froze into ice in just a few seconds.\" What is the closest meaning of the word \"*frigid*\"?",
        "options": [
          "A. extremely cold",
          "B. very warm and sunny",
          "C. dark and noisy",
          "D. windy and dusty"
        ],
        "answerIndex": 0,
        "explanation": "【解題步驟】：\n1. 從上下文線索尋找破案密碼：\"even boiling water froze into ice in just a few seconds\"（連沸水都在幾秒內結成冰塊）。\n2. 說明南極的冬天溫度極低，寒冷至極。\n3. 因此 \"*frigid*\" 的意思最接近 \"extremely cold\"（極度寒冷）。\n故選 A。"
      },
      {
        "examSource": "臺中市某國小六年級下學期第二次段考精選題",
        "question": "The prefix \"un-\" in English usually means \"not\" or \"the opposite of\". Which pair of words shows this correct relationship?",
        "options": [
          "A. clean - unclean (乾淨的 - 不乾淨的)",
          "B. happy - gladly",
          "C. friendly - kindly",
          "D. easy - difficult"
        ],
        "answerIndex": 0,
        "explanation": "【解題步驟】：\n1. 字首 \"un-\" 附加上去代表否定或相反意思。\n2. \"unclean\" 即為 \"not clean\"（不乾淨的）。\n故選 A。"
      }
    ],
    "selfChecklist": [
      "我清楚區分 dictionary (查單字) 與 telephone directory (查電話) 的用途",
      "我掌握常見字首 un- 與字尾 -ful, -ly 的構詞規律",
      "我能靈活運用 Skimming (略讀大意) 與 Scanning (尋讀細節) 策略",
      "我能根據前後文線索推測未知生字的合理詞義"
    ]
  },
  "eng-u7": {
    "unitId": "eng-u7",
    "title": "Unit 7: Future Plans, Weather Forecast & Vacation Destinations",
    "semester": "6B",
    "term": "6下",
    "textbookCoverage": "康軒第3單元 / 南一第3單元 / 翰林第3單元",
    "coreConcepts": [
      "【未來式 (Future Tense) 兩大核心句型比較】：\n   • 「be going to + 原形動詞 (V)」：表示「事先已經計畫好、打算要做的事情」，或「有明確客觀跡象即將發生的事」。\n     例：Look at those dark clouds! It is going to rain. (看那片烏雲！快下雨了)\n   • 「will + 原形動詞 (V)」：表示「說話當下臨時決定的事、未來的客觀承諾或主觀預測」。否定為 won't + 原形。\n     例：Don't worry. I will help you with your homework.",
      "【未來時間標誌副詞（審題關鍵字）】：\n   • tomorrow (明天) / tomorrow morning\n   • next week / next month / next year / next summer (下週/下個月/明年)\n   • tonight (今晚) / this weekend (這個週末) / in the future (未來)。看到這些詞句型必用未來式！",
      "【詢問假期計畫與職業夢想問答】：\n   • \"What are you going to do this summer vacation?\" ➔ \"I am going to visit my grandparents in Hualien.\"\n   • \"What do you want to be in the future?\" ➔ \"I want to be an astronaut / a veterinarian (vet) / a chef / an engineer.\"",
      "【天氣預報問答與未來時態】：\n   • \"What will the weather be like tomorrow?\" / \"How will the weather be tomorrow?\"\n   • \"It will be sunny and hot.\" / \"It will rain heavily tomorrow.\"",
      "【度假休閒活動片語】：go hiking (健行), go camping (露營), go snorkeling (浮潛), visit museums (參觀博物館), take pictures (拍照)。"
    ],
    "keyFormulas": [
      {
        "name": "未來式兩大標準句型公式",
        "formula": "\\text{主詞} + \\text{am / is / are} + \\text{going to} + \\text{【原形動詞 V】} \\quad \\text{或} \\quad \\text{主詞} + \\text{will / won't} + \\text{【原形動詞 V】}",
        "detail": "be going to 與 will 後面無條件接原形動詞！"
      },
      {
        "name": "天氣詢問兩大同義句",
        "formula": "\\text{What will the weather be like...?} = \\text{How will the weather be...?}",
        "detail": "What 開頭結尾有 like；How 開頭絕對沒有 like！"
      },
      {
        "name": "常見戶外活動 go + V-ing",
        "formula": "\\text{go camping} \\ , \\text{go swimming} \\ , \\text{go hiking} \\ , \\text{go fishing}",
        "detail": "戶外運動休閒多用 go + 動名詞。"
      }
    ],
    "examPitfalls": [
      "❌ be going to 後面接過去式或 -ing：如 \"He is going to visited\"（錯誤！to 後面必須接原形動詞 visit）。",
      "❌ will 與 be going to 重複連用：寫出 \"I will going to do\"（嚴重語病！兩者二選一）。",
      "❌ 天氣句型混用：寫成 \"How will the weather be like?\"（大錯！How 不可加 like，若有 like 必須用 What）。",
      "❌ be 動詞依主詞配錯：I am going to, He is going to, They are going to，be 動詞須隨主詞人稱變化。"
    ],
    "pastExamWalkthroughs": [
      {
        "examSource": "臺北市某國小六年級下學期期末考精選題",
        "question": "A: \"What are you going to ______ during the upcoming summer vacation?\"  B: \"My family and I are going to ______ Kenting National Park for three days.\"",
        "options": [
          "A. do ; visit",
          "B. doing ; visiting",
          "C. did ; visited",
          "D. do ; visited"
        ],
        "answerIndex": 0,
        "explanation": "【解題步驟】：\n1. 兩處句型皆為 \"be going to + 原形動詞\"。\n2. 第一空格有 \"are you going to\"，後面必須接原形動詞 do。\n3. 第二空格有 \"are going to\"，後面同樣必須接原形動詞 visit。\n4. 組合為：do ; visit。\n故選 A。"
      },
      {
        "examSource": "高雄市某國小六年級下學期畢業考精選題",
        "question": "Look at those heavy black clouds gathering in the sky and feel the strong wind! It ______ rain very soon.",
        "options": [
          "A. is going to",
          "B. was",
          "C. rained",
          "D. will be"
        ],
        "answerIndex": 0,
        "explanation": "【解題步驟】：\n1. 題幹給出了明確的當前客觀跡象：\"Look at those heavy black clouds\"（看那些密布的烏雲）。\n2. 在英語文法中，根據眼前的明顯跡象推斷某事即將發生，標準句型使用 \"be going to + V\"。\n3. 主詞 It 搭配 is going to rain。\n故選 A。"
      },
      {
        "examSource": "新北市某國小六年級下學期期末考精選題",
        "question": "Amy loves taking care of hurt dogs, cats, and birds. Her biggest dream is to become a ______ in the future.",
        "options": [
          "A. pilot",
          "B. veterinarian (vet)",
          "C. firefighter",
          "D. chef"
        ],
        "answerIndex": 1,
        "explanation": "【解題步驟】：\n1. 題幹提示 Amy 喜歡照顧受傷的動物（dogs, cats, and birds）。\n2. 專門為動物看病的獸醫稱為 \"veterinarian\"，日常簡稱為 \"vet\"。\n故選 B。"
      },
      {
        "examSource": "臺中市某國小六年級下學期畢業考精選題",
        "question": "下列四個關於未來時態與天氣預報的英文句子中，哪一個文法結構「完全正確」？",
        "options": [
          "A. What will the weather be like tomorrow?",
          "B. How will the weather be like tomorrow?",
          "C. It will rains heavily next Monday.",
          "D. I am going to helping my sister tonight."
        ],
        "answerIndex": 0,
        "explanation": "【解題步驟】：\n1. A 選項 \"What will the weather be like...?\" 結構完全正確。\n2. B 選項 How 不可與 like 連用，應改為 \"How will the weather be...?\"。\n3. C 選項 will 後面動詞必須用原形 rain，不能加 -s。\n4. D 選項 be going to 後面動詞必須用原形 help，不能加 -ing。\n故正確答案為 A。"
      }
    ],
    "selfChecklist": [
      "我掌握未來式 be going to + 原形動詞 與 will + 原形動詞 的用法",
      "我知道眼前有客觀跡象（烏雲）時優先使用 be going to",
      "我清楚區分 What is the weather like? 與 How is the weather? 的差別",
      "我能流利表達未來職業夢想與度假休閒活動片語"
    ]
  },
  "eng-u8": {
    "unitId": "eng-u8",
    "title": "Unit 8: Adjectives: Comparatives, Superlatives & Global Landmarks",
    "semester": "6B",
    "term": "6下",
    "textbookCoverage": "康軒第4單元 / 南一第4單元 / 翰林第4單元",
    "coreConcepts": [
      "【形容詞比較級 (Comparative Degree) 規則】：兩者相比，表示「比...更...」。\n   • 句型：$\\text{A} + \\text{be 動詞} + \\text{比較級形容詞} + \\text{than} + \\text{B}$.\n   • 規則變化：\n     - 一般單音節加 -er：tall ➔ taller, small ➔ smaller\n     - 字尾有 e 加 -r：large ➔ larger, nice ➔ nicer\n     - 短母音 + 單一子音，雙寫字尾加 -er：big ➔ bigger, hot ➔ hotter\n     - 子音 + y 去 y 改 -ier：heavy ➔ heavier, happy ➔ happier\n     - 多音節單字前面加 more：more beautiful, more famous, more expensive。",
      "【形容詞最高級 (Superlative Degree) 規則】：三者或三者以上相比，表示「最...」。\n   • 句型：$\\text{A} + \\text{be 動詞} + \\text{【the】} + \\text{最高級形容詞} + \\text{in [範圍] / of [群體]}$.\n   • 【重要文法天條】：最高級前面【一定要加 the】！\n   • 規則變化：加 -est 或前面加 the most（tallest, biggest, heaviest, the most interesting）。",
      "【必背不規則形容詞比較級與最高級（國小升國中大考必考）】：\n   • good / well ➔ better ➔ best\n   • bad / sick ➔ worse ➔ worst\n   • many / much ➔ more ➔ most\n   • little ➔ less ➔ least。",
      "【世界之最地理地理詞彙融入】：\n   • Mount Everest is the highest mountain in the world. (聖母峰是世界上最高的山)\n   • The Nile River is the longest river on Earth. (尼羅河是地球上最長的河)\n   • The blue whale is the largest animal in the ocean. (藍鯨是海洋中最大的動物)。"
    ],
    "keyFormulas": [
      {
        "name": "比較級黃金句型公式",
        "formula": "\\text{A} + \\text{be} + \\text{Adj-er / more Adj} + \\text{than} + \\text{B}",
        "detail": "看到 than，前面形容詞必定要用比較級！"
      },
      {
        "name": "最高級唯一標準公式",
        "formula": "\\text{A} + \\text{be} + \\text{the} + \\text{Adj-est / most Adj} + \\text{in the world / of all}",
        "detail": "最高級前方絕不能漏掉定冠詞 the！"
      },
      {
        "name": "四大不規則變化對照表",
        "formula": "\\text{good} \\rightarrow \\text{better} \\rightarrow \\text{best} \\quad ; \\quad \\text{bad} \\rightarrow \\text{worse} \\rightarrow \\text{worst}",
        "detail": "大考最高頻陷阱，絕不可寫 gooder 或 badder。"
      }
    ],
    "examPitfalls": [
      "❌ 最高級漏掉 the：題目寫 \"He is tallest boy in class\"，缺少 the 被扣分，必須是 \"He is THE tallest boy\"。",
      "❌ 比較級重複加 more：如 more bigger（大錯特錯！加了 -er 就不能再加 more，二選一）。",
      "❌ good 與 bad 寫成規則變化：寫出 gooder 或 badder（零分！正確是 better, best, worse, worst）。",
      "❌ 雙寫字尾漏掉：big 變比較級是 bigger、最高級是 biggest（漏掉雙寫 g）。"
    ],
    "pastExamWalkthroughs": [
      {
        "examSource": "臺北市某國小六年級下學期畢業考精選題",
        "question": "Mount Everest (珠穆朗瑪峰) in the Himalayas is ______ mountain in the entire world.",
        "options": [
          "A. higher",
          "B. the highest",
          "C. highest",
          "D. more higher"
        ],
        "answerIndex": 1,
        "explanation": "【解題步驟】：\n1. 範圍是 \"in the entire world\"（在全世界），三者以上的全域比較要用「最高級」。\n2. high 的最高級是 highest，且最高級前面必須加上定冠詞 the。\n3. 故正確答案為 \"the highest\"。\n故選 B。"
      },
      {
        "examSource": "高雄市某國小六年級下學期畢業考精選題",
        "question": "An elephant is much ______ than a sheep, but a blue whale is the ______ of all animals.",
        "options": [
          "A. bigger ; biggest",
          "B. bigger ; largest",
          "C. bigger ; larger",
          "D. big ; largest"
        ],
        "answerIndex": 1,
        "explanation": "【解題步驟】：\n1. 第一空格後有 than，表示大象與羊兩者比較，要用比較級 bigger。\n2. 第二空格前有 the，後有 \"of all animals\"，表示全體三者以上比較，要用最高級 largest。\n3. 組合為：bigger ; largest。\n故選 B。"
      },
      {
        "examSource": "新北市某國小六年級下學期期末考精選題",
        "question": "This science experiment is ______ than the one we did last week. It needs more time and patience.",
        "options": [
          "A. more difficult",
          "B. difficult",
          "C. most difficult",
          "D. difficulter"
        ],
        "answerIndex": 0,
        "explanation": "【解題步驟】：\n1. 後方有 than，需用比較級。\n2. difficult 是三個音節的長單詞，比較級規則為在前面加上 more，即 \"more difficult\"。\n故選 A。"
      },
      {
        "examSource": "臺中市某國小六年級下學期畢業考精選題",
        "question": "下列哪一組形容詞的「原級 ➔ 比較級 ➔ 最高級」不規則變化「完全正確」？",
        "options": [
          "A. good ➔ gooder ➔ goodest",
          "B. bad ➔ worse ➔ worst",
          "C. many ➔ more ➔ manyest",
          "D. big ➔ bigger ➔ most big"
        ],
        "answerIndex": 1,
        "explanation": "【解題步驟】：\n1. bad 的不規則變化為：bad ➔ worse ➔ worst，B 完全正確。\n2. A 正確應為 good ➔ better ➔ best。\n3. C 正確應為 many ➔ more ➔ most。\n4. D 正確應為 big ➔ bigger ➔ biggest。\n故選 B。"
      }
    ],
    "selfChecklist": [
      "我掌握單音節加 -er/-est 與多音節加 more/most 的比較規律",
      "我牢記最高級前面絕對不能忘記加「the」",
      "我熟練背出不規則變化（good/better/best, bad/worse/worst, many/more/most）",
      "我掌握比較級必搭配 than 的句型結構"
    ]
  }
};
