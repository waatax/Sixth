// 🇬🇧 英語文領域 教科書考前筆記大複習 (6上 & 6下 完整 8 單元)
// 依據 108 課綱與三大版本（康軒、南一、翰林）編寫，涵蓋核心觀念、名師公式、歷屆陷阱與經典真題實戰

export const engNotes = {
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 6年級上學期 (6A)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'eng-u1': {
    unitId: 'eng-u1',
    title: '單元 1：自然拼讀 (Phonics) 發音規則與核心生活字彙',
    semester: '6A',
    term: '6上',
    textbookCoverage: '康軒第1單元 / 南一第1單元 / 翰林第1單元',
    coreConcepts: [
      '【短母音與長母音發音對比規則】：\n   • 「短母音」：/æ/ (cat, bag), /ɛ/ (bed, red), /ɪ/ (pig, sit), /ɑ/ (hot, box), /ʌ/ (cup, sun)。\n   • 「長母音 (Magic e 規則)」：單詞結尾加不發音的 e，前面母音發出字母本身長音！\n     - a_e (/e/): cake, lake, name, tape.\n     - i_e (/aɪ/): bike, kite, time, ride.\n     - o_e (/o/): home, nose, rope, rose.\n     - u_e (/ju/ 或 /u/): cute, flute, tube.',
      '【常見雙母音組合發音】：\n   • 「ee / ea」發長音 /i/: see, tree, read, meat, beach, clean.\n   • 「ai / ay」發長音 /e/: rain, train, day, play, stay.\n   • 「oa / ow」發長音 /o/: boat, coat, snow, slow.',
      '【常見子音字母組合 (Digraphs)】：\n   • 「sh」/ʃ/: ship, fish, shop.\n   • 「ch」/tʃ/: chair, beach, watch.\n   • 「th」無聲 /θ/ (think, thank, tooth) 與有聲 /ð/ (this, that, mother).\n   • 「ph」/f/: photo, phone, dolphin.'
    ],
    keyFormulas: [
      {
        name: 'Magic e 發音魔法口訣',
        formula: '字尾有個 e，前面母音發原音！cap ➔ cape, hop ➔ hope, kit ➔ kite！',
        detail: '考試辨析題：找劃底線母音發音與眾不同者（如 pin vs pine）。'
      }
    ],
    examPitfalls: [
      '❌ th 的有聲與無聲辨析：考題最愛考發音分類！「think, thank, three, tooth」是無聲 /θ/（舌尖輕咬吐氣）；「this, that, they, mother」是有聲 /ð/（聲帶振動）。',
      '❌ ea 的短音例外：bread, head, ready 中的 ea 發短音 /ɛ/，與 clean, read 中的長音 /i/ 不同。'
    ],
    pastExamWalkthroughs: [
      {
        examSource: '臺北市某國小六年級上學期段考精選題',
        question: 'Which of the following words has a DIFFERENT vowel sound from the other three?',
        options: ['A. cake', 'B. lake', 'C. back', 'D. name'],
        answerIndex: 2,
        explanation: '【解題步驟】：\n• cake, lake, name 的 a_e 結構皆發長母音 /e/。\n• back 的 a 處於閉音節，發短母音 /æ/。\n故發音與眾不同的是 C（back）。'
      },
      {
        examSource: '新北市某國小六年級上學期段考精選題',
        question: 'Read the sentence: "The dolphin took a photo with the smart elephant." How is the letter combination "ph" pronounced in these words?',
        options: ['A. /p/', 'B. /f/', 'C. /b/', 'D. /h/'],
        answerIndex: 1,
        explanation: '【解題步驟】：\n在英語拼讀規則中，子音組合「ph」固定發 /f/ 的聲音（如 phone, photo, dolphin, elephant）。故選 B。'
      }
    ],
    selfChecklist: [
      '我掌握 Magic e 規則（短音變長音：tap ➔ tape, pin ➔ pine）',
      '我能辨析 th 的有聲 /ð/（this, father）與無聲 /θ/（three, mouth）',
      '我知道 ph 發 /f/ 的聲音（phone, dolphin）'
    ]
  },

  'eng-u2': {
    unitId: 'eng-u2',
    title: '單元 2：社區探索、問路指引與方位介系詞應用',
    semester: '6A',
    term: '6上',
    textbookCoverage: '康軒第2單元 / 南一第2單元 / 翰林第2單元',
    coreConcepts: [
      '【問路核心疑問句型】：\n   • "How can I get to the [place]?"（請問我該如何抵達...？）\n   • "Where is the post office?"（郵局在哪裡？）\n   • "Excuse me, is there a hospital near here?"（不好意思，這附近有醫院嗎？）',
      '【指引方向必備動詞片語】：\n   • "Go straight for [two blocks]."（直走兩條街區）。\n   • "Turn left / Turn right at the [corner / first traffic light]."（在轉角/第一個紅綠燈左轉/右轉）。\n   • "It\'s on your left / right."（它就在你的左手邊/右手邊）。',
      '【常見方位介系詞精準運用】：\n   • 「next to」：緊挨在旁邊（The bakery is next to the bookstore.）。\n   • 「between A and B」：在 A 和 B 的中間（The bank is between the school and the park.）。\n   • 「across from / opposite」：在對面（The supermarket is across from the MRT station.）。\n   • 「on the corner of...」：在...的街角轉彎處。'
    ],
    keyFormulas: [
      {
        name: '問路指引句構公式',
        formula: 'Go straight ➔ Turn left/right at... ➔ It\'s on your left/right (next to / across from...)',
        detail: '禮貌開場必用 "Excuse me"，回答最後常附帶 "You can\'t miss it!"（你絕對不會錯過它的！）。'
      }
    ],
    examPitfalls: [
      '❌ across from 漏掉 from：在...對面是「across from」，常有題目出「The bank is across the school」缺少 from。',
      '❌ on your right 介系詞用錯：在你的右手邊介系詞用「on」，不可用 in 或 at。'
    ],
    pastExamWalkthroughs: [
      {
        examSource: '臺北市某國小六年級上學期段考精選題',
        question: 'Dialogue Practice:\nTourist: "Excuse me, how can I get to the Central Library?"\nPolice Officer: "Go straight along Sun Street for one block. Turn right at the traffic light. The library is _____ the post office and the bank."',
        options: [
          'A. next',
          'B. between',
          'C. across',
          'D. under'
        ],
        answerIndex: 1,
        explanation: '【解題步驟】：\n句型中後面出現了 "the post office AND the bank"（兩者之間），標準句型為「between A and B」（在 A 與 B 之間）。故選 B。'
      },
      {
        examSource: '台中市某國小六年級上學期段考精選題',
        question: 'Choose the correct sentence:',
        options: [
          'A. Turn to left at the second corner.',
          'B. The museum is on your right side. You cannot miss it.',
          'C. How do I get the train station?',
          'D. Go straight and turning right.'
        ],
        answerIndex: 1,
        explanation: '【解題步驟】：\n• A 項：Turn left 即可，不加 to。\n• B 項："The museum is on your right side. You cannot miss it." 文法語意完全正確！\n• C 項：get to the train station 缺少 to。\n• D 項：祈使句對等連接，應為 Turn right。\n故選 B。'
      }
    ],
    selfChecklist: [
      '我熟記問路句型 "How can I get to...?"',
      '我掌握方位介系詞：next to, between...and..., across from, on the corner',
      '我能聽懂並讀懂指引方向（Go straight, Turn left/right）'
    ]
  },

  'eng-u3': {
    unitId: 'eng-u3',
    title: '單元 3：日常生活作息與現在進行式 (Present Continuous) 句型',
    semester: '6A',
    term: '6上',
    textbookCoverage: '康軒第3單元 / 南一第3單元 / 翰林第3單元',
    coreConcepts: [
      '【現在進行式的核心語法功能】：表示「此時此刻（說話的當下）正在發生的動作」。句型公式：$\\text{主詞} + \\text{be 動詞 (am / is / are)} + \\text{動詞-ing}$。',
      '【be 動詞與人稱代名詞搭配】：\n   • I ➔ am\n   • You / We / They / 複數名詞 ➔ are\n   • He / She / It / 單數名詞 ➔ is',
      '【動詞加 -ing 的四大規則（考卷常考變形！）】：\n   1. 一般動詞直接加 -ing：play ➔ playing, watch ➔ watching, read ➔ reading.\n   2. 字尾是不發音的 e，去 e 加 -ing：make ➔ making, write ➔ writing, dance ➔ dancing.\n   3. 「短母音 + 單子音」結尾的單音節動詞，「重複字尾 + ing」：run ➔ running, swim ➔ swimming, sit ➔ sitting, stop ➔ stopping, jog ➔ jogging.\n   4. 字尾 ie 改為 y + ing：lie ➔ lying, die ➔ dying.',
      '【常見現在進行式時間副詞與提示詞】：now, right now, at the moment, Look!, Listen!'
    ],
    keyFormulas: [
      {
        name: '現在進行式口訣',
        formula: '主詞 + be動詞 + V-ing，兩者缺一不可！',
        detail: '問句：What are you doing? ➔ I am studying.\n否定句：He is not playing games now.'
      }
    ],
    examPitfalls: [
      '❌ 漏掉 be 動詞：許多學生直接寫 "I playing soccer"，缺少了 be 動詞，正確必須是 "I am playing soccer"！',
      '❌ 忘記重複字尾：swim 寫成 swiming（漏了 m），run 寫成 runing（漏了 n），大考扣分重點！'
    ],
    pastExamWalkthroughs: [
      {
        examSource: '高雄市某國小六年級上學期段考精選題',
        question: 'Look! The students _____ on the playground. They are having a great time.',
        options: ['A. is running', 'B. are runing', 'C. are running', 'D. run'],
        answerIndex: 2,
        explanation: '【解題步驟】：\n1. 句首有 "Look!"（看啊！），表示此刻正在發生的動作，使用現在進行式。\n2. 主詞 "The students" 是複數，be 動詞使用 "are"。\n3. 動詞 "run" 是短母音配單子音結尾，必須「重複字尾 n 再加 ing」➔ "running"。\n故正確答案為 C。'
      },
      {
        examSource: '新北市某國小六年級上學期段考精選題',
        question: 'Tom: "Where is your sister?"\nAmy: "She is in her bedroom. She _____ a letter to her pen pal now."',
        options: ['A. write', 'B. writing', 'C. is writeing', 'D. is writing'],
        answerIndex: 3,
        explanation: '【解題步驟】：\n主詞是 She，進行式需要 "is + V-ing"；動詞 write 字尾是不發音的 e，必須「去 e 加 ing」➔ "is writing"。故選 D。'
      }
    ],
    selfChecklist: [
      '我牢記現在進行式公式：主詞 + be動詞 + V-ing（be動詞絕不漏掉）',
      '我掌握動詞字尾加 ing 規則（去 e 加 ing、重複字尾加 ing）',
      '我能敏銳察覺提示詞（Look!, Listen!, now）並使用現在進行式'
    ]
  },

  'eng-u4': {
    unitId: 'eng-u4',
    title: '單元 4：過去式時態 (Past Tense)、動詞變化與時間副詞',
    semester: '6A',
    term: '6上',
    textbookCoverage: '康軒第4單元 / 南一第4單元 / 翰林第4單元',
    coreConcepts: [
      '【過去式的語法功能】：表示「過去特定時間點已經發生且結束的動作或狀態」。\n   • be 動詞過去式：am / is ➔ was；are ➔ were。\n   • 一般動詞過去式：使用動詞過去式 (V-ed 或不規則變化)。',
      '【一般動詞過去式規則變化】：\n   1. 一般加 -ed：play ➔ played, visit ➔ visited, cook ➔ cooked.\n   2. 字尾已有 e，直接加 -d：live ➔ lived, bake ➔ baked.\n   3. 子音 + y 結尾，去 y 改 -ied：study ➔ studied, cry ➔ cried.\n   4. 短母音 + 單子音結尾，重複字尾 + ed：stop ➔ stopped, clap ➔ clapped.',
      '【段考必考高頻「不規則動詞」變化清單】：\n   • go ➔ went, eat ➔ ate, see ➔ saw, do/does ➔ did, have/has ➔ had, buy ➔ bought, drink ➔ drank, take ➔ took, write ➔ wrote, read ➔ read (/rɛd/), make ➔ made, sleep ➔ slept.',
      '【過去式專用時間副詞標誌】：yesterday, yesterday morning, last night / last week / last year, ... ago (two days ago), in 2020, then.'
    ],
    keyFormulas: [
      {
        name: '過去式助動詞 did 黃金鐵律',
        formula: 'Did + 主詞 + 原形動詞 (V) ? ➔ Yes, 主詞 + did. / No, 主詞 + didn\'t.',
        detail: '只要有助動詞 did 出現，後面的動詞必須「打回原形」！否定句：主詞 + didn\'t + 原形動詞！'
      }
    ],
    examPitfalls: [
      '❌ did 後面動詞又寫過去式：許多學生寫 "Did you went to the park?"，大錯特錯！助動詞 did 出現，動詞必須回復原形，正確為 "Did you go to the park?"。',
      '❌ 否定句 didn\'t 後接過去式："He didn\'t ate dinner"，正確為 "He didn\'t eat dinner"。'
    ],
    pastExamWalkthroughs: [
      {
        examSource: '臺北市某國小六年級上學期期末考精選題',
        question: 'Leo: "_____ you see the famous movie last weekend?"\nKen: "Yes, I did. It was really exciting!"',
        options: ['A. Do', 'B. Are', 'C. Did', 'D. Were'],
        answerIndex: 2,
        explanation: '【解題步驟】：\n句尾有過去時間副詞 "last weekend"，且動詞是原形動詞 "see"，詢問過去發生的動作使用助動詞 "Did"；答句中也是 "Yes, I did."。故選 C。'
      },
      {
        examSource: '高雄市某國小六年級上學期期末考精選題',
        question: 'My grandparents _____ in Tainan three years ago, but now they live in Taipei.',
        options: ['A. live', 'B. lived', 'C. are living', 'D. will live'],
        answerIndex: 1,
        explanation: '【解題步驟】：\n時間副詞是 "three years ago"（三年前），表示過去存在的狀態，動詞 live 的過去式直接加 d 變成 "lived"。故選 B。'
      }
    ],
    selfChecklist: [
      '我熟記不規則動詞過去式：go➔went, eat➔ate, see➔saw, buy➔bought, have➔had',
      '我牢記「did / didn\'t 後面的動詞必須用【原形動詞】」',
      '我能熟練使用 yesterday, last..., ...ago 等過去時間副詞'
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 6年級下學期 (6B)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'eng-u5': {
    unitId: 'eng-u5',
    title: '單元 5：假期休閒活動敘事、過去感受表達與情境對話',
    semester: '6B',
    term: '6下',
    textbookCoverage: '康軒第1單元 / 南一第1單元 / 翰林第1單元',
    coreConcepts: [
      '【詢問過去假期的核心對話句型】：\n   • "How was your vacation?"（你的假期過得如何？）➔ "It was wonderful / fantastic / boring."\n   • "Where were you yesterday?"（你昨天在哪裡？）➔ "I was at the beach / museum."\n   • "What did you do there?"（你在那裡做了什麼？）➔ "I went swimming and ate delicious seafood."',
      '【常見過去式休閒活動片語】：\n   • went hiking（去健行）\n   • visited grandparents（拜訪祖父母）\n   • took photos（拍照）\n   • played board games（玩桌遊）\n   • watched a baseball game（看棒球賽）',
      '【主詞與 was / were 的對應搭配】：\n   • I / He / She / It / 單數名詞 ➔ was / wasn\'t\n   • You / We / They / 複數名詞 ➔ were / weren\'t'
    ],
    keyFormulas: [
      {
        name: '過去感受與地點問答公式',
        formula: 'How was...? ➔ It was [形容詞]. / Where were you...? ➔ I was at [地點].',
        detail: '注意：主詞為 You 時，不論單複數，be 動詞過去式一律使用 were。'
      }
    ],
    examPitfalls: [
      '❌ You 搭配 was："Where was you yesterday?" 錯誤！You 一律搭配 were ➔ "Where were you yesterday?"。',
      '❌ 連接詞 and 前後時態不一致："I went to the beach and play soccer"，and 兩邊必須同為過去式 ➔ "went to the beach and played soccer"。'
    ],
    pastExamWalkthroughs: [
      {
        examSource: '新北市某國小六年級下學期段考精選題',
        question: 'Jenny: "How was your trip to Kenting last week?"\nMax: "It _____ wonderful! We _____ in the ocean and saw many colorful fish."',
        options: [
          'A. is ; swim',
          'B. was ; swam',
          'C. was ; swim',
          'D. were ; swam'
        ],
        answerIndex: 1,
        explanation: '【解題步驟】：\n1. "your trip" 是單數，過去式用 "was"。\n2. Kenting 的活動發生在過去，swim 的過去式是不規則動詞 "swam"，與後方的 "saw" 時態對等一致。\n故選 B。'
      },
      {
        examSource: '台中市某國小六年級下學期段考精選題',
        question: 'Lisa and her brother _____ at the water park yesterday afternoon.',
        options: ['A. was', 'B. were', 'C. are', 'D. is'],
        answerIndex: 1,
        explanation: '【解題步驟】：\n主詞是 "Lisa and her brother"（兩個人，為複數主詞），時間副詞是 yesterday，複數主詞搭配的過去式 be 動詞為 "were"。故選 B。'
      }
    ],
    selfChecklist: [
      '我掌握 was (I/he/she/it) 與 were (you/we/they) 的正確人稱搭配',
      '我能在 and 對等連接詞前後維持過去時態的一致性',
      '我熟記常見休閒活動片語的過去式（went hiking, took photos）'
    ]
  },

  'eng-u6': {
    unitId: 'eng-u6',
    title: '單元 6：未來計畫、意向表達與未來式 (Future Tense) 文法',
    semester: '6B',
    term: '6下',
    textbookCoverage: '康軒第2單元 / 南一第2單元 / 翰林第2單元',
    coreConcepts: [
      '【未來式兩大表達方式與語意差異】：\n   1. 「be going to + 原形動詞」：表示「事先計畫好、打算要做的事情」或「有明確跡象顯示即將發生的事」。\n      • 公式：$\\text{主詞} + \\text{am / is / are} + \\text{going to} + \\text{原形動詞 (V)}$。\n      • 例句：I am going to visit Japan this summer.（我今年暑假打算去日本）。\n   2. 「will + 原形動詞」：表示「說話當下臨時的決定、承諾或客觀未來的預測」。\n      • 否定句：will not（常縮寫為 won\'t）。\n      • 例句：It will rain tomorrow. / I will help you with the bag.',
      '【常見未來時間副詞標誌】：tomorrow, tomorrow morning, tomorrow night, next week / next month / next year, this coming weekend, in two days.'
    ],
    keyFormulas: [
      {
        name: '未來式核心公式',
        formula: '主詞 + be going to + 原形動詞  /  主詞 + will + 原形動詞',
        detail: '切記：be going to 與 will 後面「必須接原形動詞」，絕對不能加 -s, -ed 或 -ing！'
      }
    ],
    examPitfalls: [
      '❌ be going to 後面接名詞而非動詞：be going to 如果後面接的是地點（如 I am going to Taipei），那是「現在進行式表示即將出發」，並非未來式句型；未來式後面必須有動詞原形（如 I am going to buy a book）。',
      '❌ will 後面加了 s 或 ing："He will goes home" 錯誤！will 是助動詞，後面必須接原形 ➔ "He will go home"。'
    ],
    pastExamWalkthroughs: [
      {
        examSource: '臺北市某國小六年級下學期段考精選題',
        question: 'Sarah: "What are your plans for the winter vacation?"\nDavid: "I _____ my grandparents in Hualien next Monday."',
        options: [
          'A. visited',
          'B. am going to visit',
          'C. visit',
          'D. was visiting'
        ],
        answerIndex: 1,
        explanation: '【解題步驟】：\n問句詢問未來的計畫 (plans)，時間副詞為 "next Monday"（下週一），表達事先規劃好的未來活動，使用 "am going to + 原形動詞" ➔ "am going to visit"。故選 B。'
      },
      {
        examSource: '高雄市某國小六年級下學期段考精選題',
        question: 'Don\'t worry. I promise I _____ you clean the classroom after school.',
        options: ['A. will help', 'B. helped', 'C. am helping', 'D. was helping'],
        answerIndex: 0,
        explanation: '【解題步驟】：\n"I promise"（我承諾、我保證）表達說話當下對未來的承諾，使用 "will + 原形動詞" ➔ "will help"。故選 A。'
      }
    ],
    selfChecklist: [
      '我清楚知道 be going to 與 will 後面一律接「原形動詞」',
      '我掌握未來時間副詞（tomorrow, next week, this coming weekend）',
      '我熟記 will not 的縮寫是 won\'t'
    ]
  },

  'eng-u7': {
    unitId: 'eng-u7',
    title: '單元 7：夢想職業、生涯探索與志向表述句型',
    semester: '6B',
    term: '6下',
    textbookCoverage: '康軒第3單元 / 南一第3單元 / 翰林第3單元',
    coreConcepts: [
      '【詢問與表達夢想職業的核心句型】：\n   • "What do you want to be when you grow up?"（你長大後想成為什麼？）\n   • "I want to be a / an [職業]."（我想成為一名...）。\n   • 第三單稱問答："What does he / she want to be?" ➔ "He / She wants to be a / an [職業]."',
      '【冠詞 a 與 an 的正確搭配】：\n   • 字首發音為「母音音標」的職業用 an：an astronaut（太空人）, an artist（藝術家）, an engineer（工程師）, an actor（演員）。\n   • 字首發音為「子音音標」的職業用 a：a doctor, a teacher, a veterinarian (vet, 獸醫), a pilot（飛行員）, a chef（主廚）, a police officer, a scientist.',
      '【表達職業原因的 because 子句】：\n   • "I want to be a vet because I love animals and want to care for them."\n   • "He wants to be a software engineer because he likes coding and technology."'
    ],
    keyFormulas: [
      {
        name: '職業句構三單注意公式',
        formula: 'He / She wants to be a/an [職業] (三單主詞 want 加 s！)',
        detail: '因為問句用 does，回答時動詞 want 必須恢復加上三單 s ➔ wants。'
      }
    ],
    examPitfalls: [
      '❌ 職業冠詞 a 與 an 混淆：engineer、artist、astronaut 前面要用 an，常有題目出 a engineer 作為干擾陷阱。',
      '❌ 三單動詞漏加 s：回答 He / She 時常漏寫成 "He want to be a pilot"，正確必須是 "He wants to be a pilot"。'
    ],
    pastExamWalkthroughs: [
      {
        examSource: '新北市某國小六年級下學期段考精選題',
        question: 'Mark is very creative and loves painting pictures. He wants to be _____ when he grows up.',
        options: ['A. a pilot', 'B. an artist', 'C. a dentist', 'D. a police officer'],
        answerIndex: 1,
        explanation: '【解題步驟】：\nMark 很有創意且熱愛畫畫 (painting pictures)，最適合的夢想職業是「藝術家 (artist)」；artist 字首為母音音素，冠詞使用 "an"。故選 B。'
      },
      {
        examSource: '台中市某國小六年級下學期段考精選題',
        question: 'Teacher: "What _____ your sister want to be in the future?"\nBen: "She wants to be a veterinarian because she loves dogs and cats."',
        options: ['A. do', 'B. does', 'C. is', 'D. did'],
        answerIndex: 1,
        explanation: '【解題步驟】：\n主詞 "your sister" 是第三人稱單數，在現在簡單式的疑問句中，助動詞使用 "does"。故選 B。'
      }
    ],
    selfChecklist: [
      '我熟記常見職業英文：veterinarian (vet), chef, pilot, engineer, astronaut',
      '我能正確在母音開頭的職業前使用冠詞 an（an artist, an engineer）',
      '第三人稱單數主詞時，我會記得在動詞 want 加 s ➔ wants'
    ]
  },

  'eng-u8': {
    unitId: 'eng-u8',
    title: '單元 8：形容詞比較級與最高級 (Comparatives & Superlatives)',
    semester: '6B',
    term: '6下',
    textbookCoverage: '康軒第4單元 / 南一第4單元 / 翰林第4單元',
    coreConcepts: [
      '【形容詞比較級（兩者相比）】：\n   • 句型：$\\text{A} + \\text{be 動詞} + \\text{比較級形容詞} + \\text{than} + \\text{B}$。\n   • 例句：A giraffe is taller than an elephant.',
      '【形容詞最高級（三者或三者以上相比）】：\n   • 句型：$\\text{A} + \\text{be 動詞} + \\text{the} + \\text{最高級形容詞} + (\\text{in / of 範圍})$。\n   • 例句：Mount Everest is the highest mountain in the world.',
      '【形容詞變化規則】：\n   1. 單音節直接加 -er / -est：tall ➔ taller ➔ tallest; fast ➔ faster ➔ fastest.\n   2. 字尾有 e 加 -r / -st：large ➔ larger ➔ largest; nice ➔ nicer ➔ nicest.\n   3. 子音 + y 結尾，去 y 改 -ier / -iest：happy ➔ happier ➔ happiest; heavy ➔ heavier ➔ heaviest.\n   4. 短母音 + 單子音結尾，重複字尾：big ➔ bigger ➔ biggest; hot ➔ hotter ➔ hottest.\n   5. 三音節以上（長單字），前面加 more / most：beautiful ➔ more beautiful ➔ the most beautiful.',
      '【段考必考高頻不規則變化】：\n   • good / well ➔ better ➔ the best\n   • bad / badly ➔ worse ➔ the worst\n   • many / much ➔ more ➔ the most'
    ],
    keyFormulas: [
      {
        name: '比較級與最高級黃金搭配詞',
        formula: '看見 than 用【比較級 (-er / more)】；看見 the 用【最高級 (-est / most)】！',
        detail: '最高級前面「必定要有定冠詞 the」！'
      }
    ],
    examPitfalls: [
      '❌ 最高級漏掉 the：學生常寫 "He is tallest boy"，正確必須有 the ➔ "He is the tallest boy in our class"。',
      '❌ 不規則變化寫成 regular："gooder" 或 "goodest" 完全不存在！正確是 good ➔ better ➔ best；bad ➔ worse ➔ worst。'
    ],
    pastExamWalkthroughs: [
      {
        examSource: '臺北市某國小六年級下學期畢業考精選題',
        question: 'The blue whale is _____ animal that has ever lived on the Earth.',
        options: [
          'A. large',
          'B. larger than',
          'C. the largest',
          'D. most large'
        ],
        answerIndex: 2,
        explanation: '【解題步驟】：\n範圍是全世界地球上所有動物相比（三者以上），使用最高級句型「the + 最高級形容詞」；large 字尾已有 e，直接加 st 變成 "the largest"。故選 C。'
      },
      {
        examSource: '高雄市某國小六年級下學期畢業考精選題',
        question: 'Peter\'s math score is _____ than Kevin\'s, but Kevin is _____ runner in the class.',
        options: [
          'A. good ; the fast',
          'B. better ; the fastest',
          'C. more good ; fastest',
          'D. best ; faster'
        ],
        answerIndex: 1,
        explanation: '【解題步驟】：\n1. 第一個空格後面有 "than"，需使用比較級；good 的不規則比較級是 "better"。\n2. 第二個空格後面有範圍 "in the class"，需使用最高級「the + fastest」。\n故選 B。'
      }
    ],
    selfChecklist: [
      '我熟記不規則形容詞變化：good➔better➔best, bad➔worse➔worst',
      '我看見 than 立即鎖定比較級，看見 the 立即鎖定最高級',
      '我掌握比較級句型：A is [比較級] than B'
    ]
  }
};
