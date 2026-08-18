// Structured Audio and Pronunciation Data for Elementary 6th Grade English
// Units: eng-u1 through eng-u6 with rich vocabulary, phonics, dialogues, and reading passages

export const englishAudioData = {
  'eng-u1': {
    title: 'Unit 1: Daily Routines & Time Management',
    subtitle: '日常生活作息與時間表達',
    readAloudPassage: {
      paragraphs: [
        {
          id: 'eng-u1-p1',
          text: "Hello! My name is Liam. I usually wake up at half past six every morning.",
          zh: "哈囉！我的名字是 Liam。我通常每天早上六點半起床。"
        },
        {
          id: 'eng-u1-p2',
          text: "I always brush my teeth and eat breakfast at seven o'clock.",
          zh: "我總是在七點整刷牙並吃早餐。"
        },
        {
          id: 'eng-u1-p3',
          text: "My school starts at a quarter to eight. In the afternoon, I play basketball with friends.",
          zh: "我的學校在七點四十五分開始上課。下午時，我和朋友們一起打籃球。"
        },
        {
          id: 'eng-u1-p4',
          text: "At night, I do my homework and go to bed at ten o'clock. Good time management keeps me happy!",
          zh: "晚上時，我寫作業並在十點上床睡覺。良好的時間管理讓我保持快樂！"
        }
      ]
    },
    vocabularies: [
      {
        id: 'v-u1-1',
        word: "half past",
        ipa: "/hæf pæst/",
        meaning: "過 30 分鐘 (半點)",
        example: "It's half past seven in the morning.",
        exampleZh: "現在是早上七點半。"
      },
      {
        id: 'v-u1-2',
        word: "a quarter to",
        ipa: "/ə ˈkwɔːrtər tuː/",
        meaning: "差 15 分鐘到...",
        example: "The school bus arrives at a quarter to eight.",
        exampleZh: "校車在差一刻八點（7:45）到達。"
      },
      {
        id: 'v-u1-3',
        word: "a quarter past",
        ipa: "/ə ˈkwɔːrtər pæst/",
        meaning: "過了 15 分鐘 (一刻)",
        example: "We take a morning break at a quarter past ten.",
        exampleZh: "我們在十點十五分進行晨間休息。"
      },
      {
        id: 'v-u1-4',
        word: "o'clock",
        ipa: "/əˈklɑːk/",
        meaning: "...點鐘 (整點)",
        example: "The movie starts at four o'clock.",
        exampleZh: "電影在四點整開始。"
      },
      {
        id: 'v-u1-5',
        word: "usually",
        ipa: "/ˈjuːʒuəli/",
        meaning: "通常 (頻率 80%)",
        example: "I usually read books after dinner.",
        exampleZh: "我通常在晚餐後看書。"
      },
      {
        id: 'v-u1-6',
        word: "always",
        ipa: "/ˈɔːlweɪz/",
        meaning: "總是 (頻率 100%)",
        example: "She always wears her lucky hat on test days.",
        exampleZh: "她在考試日總是戴著她的幸運帽。"
      },
      {
        id: 'v-u1-7',
        word: "sometimes",
        ipa: "/ˈsʌmtaɪmz/",
        meaning: "有時候 (頻率 50%)",
        example: "We sometimes ride bicycles in the park.",
        exampleZh: "我們有時候在公園裡騎自行車。"
      },
      {
        id: 'v-u1-8',
        word: "never",
        ipa: "/ˈnevər/",
        meaning: "從不 (頻率 0%)",
        example: "He is never late for English class.",
        exampleZh: "他上英文課從不遲到。"
      },
      {
        id: 'v-u1-9',
        word: "wake up",
        ipa: "/weɪk ʌp/",
        meaning: "醒來 / 起床",
        example: "What time do you usually wake up?",
        exampleZh: "你通常幾點醒來？"
      },
      {
        id: 'v-u1-10',
        word: "brush teeth",
        ipa: "/brʌʃ tiːθ/",
        meaning: "刷牙",
        example: "Remember to brush your teeth twice a day.",
        exampleZh: "記得一天刷牙兩次。"
      }
    ],
    dialogues: [
      {
        speaker: 'Amy',
        avatar: '👧',
        en: "What time do you usually get up on Sunday?",
        zh: "你週日通常幾點起床？"
      },
      {
        speaker: 'Liam',
        avatar: '👦',
        en: "I usually get up at half past eight. What about you?",
        zh: "我通常八點半起床。妳呢？"
      },
      {
        speaker: 'Amy',
        avatar: '👧',
        en: "I always wake up early at seven o'clock to jog with my dog!",
        zh: "我總是很早七點就起床跟我的狗狗一起慢跑！"
      },
      {
        speaker: 'Liam',
        avatar: '👦',
        en: "Wow! You are truly a morning bird!",
        zh: "哇！妳真是一隻名副其實的早起鳥兒！"
      }
    ],
    sentencePatterns: [
      {
        id: 'sp-u1-1',
        pattern: "What time do you usually + [原形動詞] ?",
        example: "What time do you usually go to bed?",
        meaning: "詢問他人固定生活作息的幾點幾分"
      },
      {
        id: 'sp-u1-2',
        pattern: "I [頻率副詞] + [動詞] at [具體鐘點].",
        example: "I usually have lunch at half past twelve.",
        meaning: "回答自己的日常作息時間"
      },
      {
        id: 'sp-u1-3',
        pattern: "It's [half past / quarter past / quarter to] + [鐘點].",
        example: "Hurry up! It's a quarter to eight now!",
        meaning: "標準母語者時鐘報時句型"
      }
    ]
  },

  'eng-u2': {
    title: 'Unit 2: Past Tense Stories & Adventures',
    subtitle: '過去式故事與冒險歷險記',
    readAloudPassage: {
      paragraphs: [
        {
          id: 'eng-u2-p1',
          text: "Last weekend was full of wonderful adventures!",
          zh: "上個週末充滿了精彩的冒險！"
        },
        {
          id: 'eng-u2-p2',
          text: "On Saturday, my family went to the amusement park. We rode the big roller coaster and ate delicious cotton candy.",
          zh: "星期六，我們全家去了遊樂園。我們坐了大型雲霄飛車，還吃了美味的棉花糖。"
        },
        {
          id: 'eng-u2-p3',
          text: "In the evening, we watched a fantastic fireworks show. Everyone cheered with big smiles.",
          zh: "晚上時，我們看了一場超棒的煙火秀。每個人都帶著燦爛的笑容歡呼。"
        },
        {
          id: 'eng-u2-p4',
          text: "Did you have a good time last weekend? I really enjoyed my trip!",
          zh: "你上週末玩得開心嗎？我真的很享受這趟旅程！"
        }
      ]
    },
    vocabularies: [
      {
        id: 'v-u2-1',
        word: "went (go 過去式)",
        ipa: "/went/",
        meaning: "去了 (go ➔ went)",
        example: "We went to the beach yesterday.",
        exampleZh: "我們昨天去了海灘。"
      },
      {
        id: 'v-u2-2',
        word: "ate (eat 過去式)",
        ipa: "/eɪt/",
        meaning: "吃了 (eat ➔ ate)",
        example: "I ate a big hamburger for lunch.",
        exampleZh: "我午餐吃了一個大漢堡。"
      },
      {
        id: 'v-u2-3',
        word: "saw (see 過去式)",
        ipa: "/sɔː/",
        meaning: "看見了 (see ➔ saw)",
        example: "They saw a beautiful rainbow after the rain.",
        exampleZh: "雨後他們看見了一道美麗的彩虹。"
      },
      {
        id: 'v-u2-4',
        word: "bought (buy 過去式)",
        ipa: "/bɔːt/",
        meaning: "買了 (buy ➔ bought)",
        example: "Mom bought me a new school bag.",
        exampleZh: "媽媽給我買了一個新書包。"
      },
      {
        id: 'v-u2-5',
        word: "played (play 過去式)",
        ipa: "/pleɪd/",
        meaning: "玩了 / 演奏了 (規則變身)",
        example: "We played soccer together in the afternoon.",
        exampleZh: "我們下午一起踢了足球。"
      },
      {
        id: 'v-u2-6',
        word: "watched (watch 過去式)",
        ipa: "/wɑːtʃt/",
        meaning: "觀看了 (規則變身)",
        example: "He watched an exciting football match on TV.",
        exampleZh: "他在電視上看了一場刺激的足球比賽。"
      },
      {
        id: 'v-u2-7',
        word: "visited (visit 過去式)",
        ipa: "/ˈvɪzɪtɪd/",
        meaning: "拜訪了 / 參觀了",
        example: "I visited my grandparents last Sunday.",
        exampleZh: "我上週日去拜訪了我的祖父母。"
      },
      {
        id: 'v-u2-8',
        word: "yesterday",
        ipa: "/ˈjestərdeɪ/",
        meaning: "昨天 (過去時間指標詞)",
        example: "Where were you yesterday afternoon?",
        exampleZh: "你昨天下午人在哪裡？"
      },
      {
        id: 'v-u2-9',
        word: "last weekend",
        ipa: "/læst ˌwiːkˈend/",
        meaning: "上個週末",
        example: "Did you finish your project last weekend?",
        exampleZh: "你上週末完成專案了嗎？"
      }
    ],
    dialogues: [
      {
        speaker: 'Leo',
        avatar: '🦁',
        en: "Hi Mia! What did you do yesterday afternoon?",
        zh: "嗨 Mia！妳昨天下午做了什麼？"
      },
      {
        speaker: 'Mia',
        avatar: '🐱',
        en: "I visited the science museum and saw a giant dinosaur fossil!",
        zh: "我去參觀了科學博物館，還看見了一具巨大的恐龍化石！"
      },
      {
        speaker: 'Leo',
        avatar: '🦁',
        en: "That sounds awesome! Did you take many photos?",
        zh: "聽起來太酷了！妳有拍很多照片嗎？"
      },
      {
        speaker: 'Mia',
        avatar: '🐱',
        en: "Yes, I took lots of photos with my tablet. Let me show you!",
        zh: "有啊，我用平板拍了好多照片。我給你看！"
      }
    ],
    sentencePatterns: [
      {
        id: 'sp-u2-1',
        pattern: "What did you do [yesterday / last weekend]?",
        example: "What did you do last night?",
        meaning: "詢問對方在過去特定的時間做了什麼"
      },
      {
        id: 'sp-u2-2',
        pattern: "I [過去式動詞] + [受詞] + [過去時間].",
        example: "I visited my grandparents two days ago.",
        meaning: "肯定句描述過去已完成的動作"
      },
      {
        id: 'sp-u2-3',
        pattern: "Did you [原形動詞]...? ➔ Yes, I did. / No, I didn't.",
        example: "Did you have breakfast this morning? Yes, I did.",
        meaning: "過去式 Yes/No 問答 (注意 Did 後面動詞還原！)"
      }
    ]
  },

  'eng-u3': {
    title: 'Unit 3: Places & Asking for Directions',
    subtitle: '城市探索與問路指路指南',
    readAloudPassage: {
      paragraphs: [
        {
          id: 'eng-u3-p1',
          text: "Welcome to our beautiful city! There are many interesting landmarks here.",
          zh: "歡迎來到我們美麗的城市！這裡有許多有趣的著名地標。"
        },
        {
          id: 'eng-u3-p2',
          text: "The public library is right next to the post office. The green city park is between the museum and the bank.",
          zh: "市立圖書館就在郵局隔壁。綠意盎然的城市公園在博物館與銀行之間。"
        },
        {
          id: 'eng-u3-p3',
          text: "If you want to go to the train station, go straight on Main Street and turn left at the corner.",
          zh: "如果你想去火車站，沿著主街直走，並在轉角處左轉。"
        },
        {
          id: 'eng-u3-p4',
          text: "You can find a convenience store across from the school. Enjoy exploring our city!",
          zh: "在學校的正對面你可以找到一家便利商店。祝你在我們城市探索愉快！"
        }
      ]
    },
    vocabularies: [
      {
        id: 'v-u3-1',
        word: "next to",
        ipa: "/nekst tuː/",
        meaning: "在...緊鄰隔壁",
        example: "The bakery is next to the bookstore.",
        exampleZh: "麵包店在書店隔壁。"
      },
      {
        id: 'v-u3-2',
        word: "between",
        ipa: "/bɪˈtwiːn/",
        meaning: "在...兩者之間 (between A and B)",
        example: "The park is between the school and the library.",
        exampleZh: "公園在學校與圖書館之間。"
      },
      {
        id: 'v-u3-3',
        word: "across from",
        ipa: "/əˈkrɔːs frʌm/",
        meaning: "在...正對面 (隔著馬路)",
        example: "The hospital is across from the police station.",
        exampleZh: "醫院在警察局正對面。"
      },
      {
        id: 'v-u3-4',
        word: "turn left / turn right",
        ipa: "/tɜːrn left / tɜːrn raɪt/",
        meaning: "向左轉 / 向右轉",
        example: "Turn right at the second traffic light.",
        exampleZh: "在第二個紅綠燈處右轉。"
      },
      {
        id: 'v-u3-5',
        word: "go straight",
        ipa: "/ɡoʊ streɪt/",
        meaning: "向前直走",
        example: "Go straight for two blocks.",
        exampleZh: "向前直走兩個街區。"
      },
      {
        id: 'v-u3-6',
        word: "on the corner",
        ipa: "/ɑːn ðə ˈkɔːrnər/",
        meaning: "在街角轉彎處",
        example: "The cafe is on the corner of Apple Street.",
        exampleZh: "咖啡廳在蘋果街的街角。"
      },
      {
        id: 'v-u3-7',
        word: "library",
        ipa: "/ˈlaɪbreri/",
        meaning: "圖書館",
        example: "Be quiet inside the library.",
        exampleZh: "在圖書館內請保持安靜。"
      },
      {
        id: 'v-u3-8',
        word: "train station",
        ipa: "/treɪn ˈsteɪʃn/",
        meaning: "火車站 / 捷運站",
        example: "How far is it to the train station?",
        exampleZh: "到火車站有多遠？"
      }
    ],
    dialogues: [
      {
        speaker: 'Tourist',
        avatar: '🧳',
        en: "Excuse me, how can I get to the art museum?",
        zh: "不好意思，請問我要怎麼去美術館？"
      },
      {
        speaker: 'Local Guide',
        avatar: '🧑‍🏫',
        en: "Go straight along this street for two blocks, then turn left at the bookstore.",
        zh: "沿著這條街直走兩個街區，然後在書店左轉。"
      },
      {
        speaker: 'Tourist',
        avatar: '🧳',
        en: "Is it far from here?",
        zh: "離這裡會很遠嗎？"
      },
      {
        speaker: 'Local Guide',
        avatar: '🧑‍🏫',
        en: "No, it's just across from the central park. You won't miss it!",
        zh: "不會，它就在中央公園正對面。你絕對不會錯過的！"
      }
    ],
    sentencePatterns: [
      {
        id: 'sp-u3-1',
        pattern: "Excuse me, how can I get to [place]?",
        example: "Excuse me, how can I get to the nearest MRT station?",
        meaning: "禮貌問路句型 (請問我要怎麼到達某處？)"
      },
      {
        id: 'sp-u3-2',
        pattern: "Go straight and turn [left / right] at [landmark].",
        example: "Go straight and turn right at the post office.",
        meaning: "清楚給予路徑指引 (直走並在某處轉彎)"
      },
      {
        id: 'sp-u3-3',
        pattern: "The [place A] is [next to / across from / between] [place B].",
        example: "The clinic is next to the supermarket.",
        meaning: "精確定位空間相對位置"
      }
    ]
  },

  'eng-u4': {
    title: 'Unit 4: Food, Health & Body Care',
    subtitle: '健康飲食、身體部位與醫療照護',
    readAloudPassage: {
      paragraphs: [
        {
          id: 'eng-u4-p1',
          text: "Taking good care of our body is very important for everyday energy.",
          zh: "妥善照顧好我們的身體對維持每日活力非常重要。"
        },
        {
          id: 'eng-u4-p2',
          text: "When you have a fever, headache, or sore throat, you should drink plenty of water and rest well.",
          zh: "當你發燒、頭痛或喉嚨痛時，你應該多喝水並好好休息。"
        },
        {
          id: 'eng-u4-p3',
          text: "Eating fresh vegetables, fruits, and drinking milk will keep your bones and teeth strong.",
          zh: "多吃新鮮蔬菜、水果並喝牛奶，能讓你的骨骼與牙齒保持強健。"
        },
        {
          id: 'eng-u4-p4',
          text: "If you feel sick, remember to see a doctor promptly and follow healthy advice!",
          zh: "如果你感覺不舒服，記得及時看醫生並遵循健康建議！"
        }
      ]
    },
    vocabularies: [
      {
        id: 'v-u4-1',
        word: "headache",
        ipa: "/ˈhedeɪk/",
        meaning: "頭痛 (head + ache)",
        example: "I have a terrible headache today.",
        exampleZh: "我今天頭痛得很厲害。"
      },
      {
        id: 'v-u4-2',
        word: "stomachache",
        ipa: "/ˈstʌməkeɪk/",
        meaning: "胃痛 / 肚子痛",
        example: "Eating too fast might give you a stomachache.",
        exampleZh: "吃太快可能會讓你肚子痛。"
      },
      {
        id: 'v-u4-3',
        word: "sore throat",
        ipa: "/sɔːr θroʊt/",
        meaning: "喉嚨痛",
        example: "She has a sore throat and can't sing.",
        exampleZh: "她喉嚨痛，沒辦法唱歌。"
      },
      {
        id: 'v-u4-4',
        word: "fever",
        ipa: "/ˈfiːvər/",
        meaning: "發燒",
        example: "He has a high fever and stays in bed.",
        exampleZh: "他發高燒，正躺在床上休息。"
      },
      {
        id: 'v-u4-5',
        word: "tooth / teeth",
        ipa: "/tuːθ / tiːθ/",
        meaning: "牙齒 (單數 tooth ➔ 複數 teeth)",
        example: "Brush your teeth after meals.",
        exampleZh: "飯後請刷牙。"
      },
      {
        id: 'v-u4-6',
        word: "foot / feet",
        ipa: "/fʊt / fiːt/",
        meaning: "腳掌 (單數 foot ➔ 複數 feet)",
        example: "My feet hurt after a long walk.",
        exampleZh: "走了好長一段路後我的雙腳好酸痛。"
      },
      {
        id: 'v-u4-7',
        word: "should / shouldn't",
        ipa: "/ʃʊd / ˈʃʊdnt/",
        meaning: "應該 / 不應該 (給予健康建議)",
        example: "You should drink more warm water.",
        exampleZh: "你應該多喝溫開水。"
      },
      {
        id: 'v-u4-8',
        word: "take medicine",
        ipa: "/teɪk ˈmedɪsn/",
        meaning: "吃藥 / 服藥",
        example: "Take the medicine three times a day after meals.",
        exampleZh: "三餐飯後按時服藥。"
      }
    ],
    dialogues: [
      {
        speaker: 'Doctor',
        avatar: '👨‍⚕️',
        en: "Good morning, Peter. What's the matter with you?",
        zh: "早安，Peter。你哪裡不舒服嗎？"
      },
      {
        speaker: 'Peter',
        avatar: '🤒',
        en: "I have a sore throat, a cough, and a mild fever.",
        zh: "我喉嚨痛、咳嗽，而且有一點輕微發燒。"
      },
      {
        speaker: 'Doctor',
        avatar: '👨‍⚕️',
        en: "Let me check. You caught a cold. You should take this medicine and get plenty of rest.",
        zh: "我來檢查一下。你感冒了。你應該吃這份藥並充分休息。"
      },
      {
        speaker: 'Peter',
        avatar: '🤒',
        en: "Thank you, Doctor. Should I avoid cold drinks?",
        zh: "謝謝醫生。我應該避免喝冰飲嗎？"
      },
      {
        speaker: 'Doctor',
        avatar: '👨‍⚕️',
        en: "Yes! You shouldn't drink iced drinks or eat spicy food.",
        zh: "沒錯！你不應該喝冰飲或吃辛辣食物。"
      }
    ],
    sentencePatterns: [
      {
        id: 'sp-u4-1',
        pattern: "What's the matter (with you)?",
        example: "What's the matter? You look pale.",
        meaning: "詢問對方病情或發生了什麼不適"
      },
      {
        id: 'sp-u4-2',
        pattern: "I have a [headache / fever / stomachache / sore throat].",
        example: "I have a bad toothache. I need to see a dentist.",
        meaning: "陳述具體的生病症狀"
      },
      {
        id: 'sp-u4-3',
        pattern: "You should / shouldn't + [原形動詞].",
        example: "You should stay home and rest when you are sick.",
        meaning: "給予合理的醫療與生活健康建議"
      }
    ]
  },

  'eng-u5': {
    title: 'Unit 5: Festivals, Holidays & World Cultures',
    subtitle: '世界節慶巡禮與多元文化',
    readAloudPassage: {
      paragraphs: [
        {
          id: 'eng-u5-p1',
          text: "Festivals are special times for families and communities to celebrate together.",
          zh: "節慶是家人與社區共同慶祝的特別美好時刻。"
        },
        {
          id: 'eng-u5-p2',
          text: "During Lunar New Year, children receive red envelopes and families enjoy a warm reunion dinner.",
          zh: "在農曆新年期間，孩子們收到紅包，全家人一起享受溫馨的團圓晚餐。"
        },
        {
          id: 'eng-u5-p3',
          text: "In the summer, we celebrate the Dragon Boat Festival with thrilling races and delicious rice dumplings.",
          zh: "夏天時，我們透過刺激的龍舟賽與美味的粽子慶祝端午節。"
        },
        {
          id: 'eng-u5-p4',
          text: "Around the world, people celebrate Halloween with spooky costumes and Christmas with joyful gifts!",
          zh: "在世界各地，人們穿著搞怪服裝慶祝萬聖節，並用歡樂的禮物慶祝聖誕節！"
        }
      ]
    },
    vocabularies: [
      {
        id: 'v-u5-1',
        word: "Lunar New Year",
        ipa: "/ˈluːnər nuː jɪr/",
        meaning: "農曆新年 / 春節",
        example: "Lunar New Year is the biggest festival in Taiwan.",
        exampleZh: "農曆新年是台灣最重大的傳統節慶。"
      },
      {
        id: 'v-u5-2',
        word: "Dragon Boat Festival",
        ipa: "/ˈdræɡən boʊt ˈfestɪvl/",
        meaning: "端午節",
        example: "We watch dragon boat races on the river.",
        exampleZh: "我們在河邊觀看划龍舟比賽。"
      },
      {
        id: 'v-u5-3',
        word: "Mid-Autumn Festival",
        ipa: "/mɪd ˈɔːtəm ˈfestɪvl/",
        meaning: "中秋節",
        example: "Families eat sweet moon cakes under the full moon.",
        exampleZh: "家人們在滿月下品嚐甜美的月餅。"
      },
      {
        id: 'v-u5-4',
        word: "red envelope",
        ipa: "/red ˈenvəloʊp/",
        meaning: "紅包 (壓歲錢)",
        example: "Kids love getting red envelopes with lucky money.",
        exampleZh: "孩子們最喜歡拿到裝有壓歲錢的紅包。"
      },
      {
        id: 'v-u5-5',
        word: "rice dumpling (zongzi)",
        ipa: "/raɪs ˈdʌmplɪŋ/",
        meaning: "粽子",
        example: "My grandma makes the most delicious rice dumplings.",
        exampleZh: "我的奶奶包的粽子最美味。"
      },
      {
        id: 'v-u5-6',
        word: "Halloween",
        ipa: "/ˌhæləʊˈiːn/",
        meaning: "萬聖節 (10月31日)",
        example: "Children say trick or treat on Halloween night.",
        exampleZh: "孩子們在萬聖節之夜大喊不給糖就搗蛋。"
      },
      {
        id: 'v-u5-7',
        word: "Thanksgiving",
        ipa: "/ˌθæŋksˈɡɪvɪŋ/",
        meaning: "感恩節 (11月第四個星期四)",
        example: "Families gather to eat roast turkey on Thanksgiving.",
        exampleZh: "全家人在感恩節聚在一起吃烤火雞。"
      },
      {
        id: 'v-u5-8',
        word: "Christmas",
        ipa: "/ˈkrɪsməs/",
        meaning: "聖誕節 (12月25日)",
        example: "Merry Christmas and Happy New Year!",
        exampleZh: "祝你聖誕快樂、新年快樂！"
      }
    ],
    dialogues: [
      {
        speaker: 'Jack',
        avatar: '👱‍♂️',
        en: "What is your favorite traditional festival in Taiwan, Kelly?",
        zh: "Kelly，妳在台灣最喜歡的傳統節慶是哪一個？"
      },
      {
        speaker: 'Kelly',
        avatar: '👩‍🦰',
        en: "I love Mid-Autumn Festival the most! We barbecue outdoors and eat pomelo.",
        zh: "我最喜歡中秋節！我們在戶外烤肉並吃柚子。"
      },
      {
        speaker: 'Jack',
        avatar: '👱‍♂️',
        en: "That sounds so fun! In the USA, we celebrate Thanksgiving with big pumpkin pies.",
        zh: "聽起來太有趣了！在美國，我們用大南瓜派慶祝感恩節。"
      },
      {
        speaker: 'Kelly',
        avatar: '👩‍🦰',
        en: "Both festivals bring families together with gratitude and joy!",
        zh: "這兩個節慶都帶著感恩與喜悅把家人凝聚在一起！"
      }
    ],
    sentencePatterns: [
      {
        id: 'sp-u5-1',
        pattern: "What do you do [on / during] [festival]?",
        example: "What do you do during Lunar New Year?",
        meaning: "詢問特定節慶期間的習俗與慶祝活動"
      },
      {
        id: 'sp-u5-2',
        pattern: "My favorite festival is [festival] because [reason].",
        example: "My favorite festival is Christmas because I love exchanging gifts.",
        meaning: "向外國朋友介紹自己最喜愛的節慶與原因"
      },
      {
        id: 'sp-u5-3',
        pattern: "Wishing you a happy [holiday]! / Merry Christmas!",
        example: "Wishing you a joyful and prosperous Lunar New Year!",
        meaning: "節慶英文祝福賀卡書寫常用句"
      }
    ]
  },

  'eng-u6': {
    title: 'Unit 6: Reading Comprehension & Phonics Mastery',
    subtitle: '閱讀理解力、字首字尾與語篇導航',
    readAloudPassage: {
      paragraphs: [
        {
          id: 'eng-u6-p1',
          text: "Becoming a master reader requires smart strategies and a curious mind.",
          zh: "成為閱讀大師需要聰明的策略與保持好奇心。"
        },
        {
          id: 'eng-u6-p2',
          text: "When you skim an article, you look quickly at headings and main ideas like an eagle from above.",
          zh: "當你略讀文章時，你就像老鷹從高空俯瞰一樣，快速瀏覽標題與主旨。"
        },
        {
          id: 'eng-u6-p3',
          text: "When you scan, you search specifically for names, numbers, and key facts like a sharp radar.",
          zh: "當你掃讀時，你就像敏銳的雷達一樣，專門搜尋名字、數字與關鍵事實。"
        },
        {
          id: 'eng-u6-p4',
          text: "Knowing prefixes and suffixes helps you unlock hundreds of new English words with ease!",
          zh: "掌握字首與字尾能幫助你輕鬆解鎖成百上千個全新英文單字！"
        }
      ]
    },
    vocabularies: [
      {
        id: 'v-u6-1',
        word: "skimming",
        ipa: "/ˈskɪmɪŋ/",
        meaning: "略讀 (快速抓取文章主旨大意)",
        example: "Use skimming to get the general idea in one minute.",
        exampleZh: "利用略讀在一分鐘內掌握整體大意。"
      },
      {
        id: 'v-u6-2',
        word: "scanning",
        ipa: "/ˈskænɪŋ/",
        meaning: "掃讀 (精準定位特定人名或數字細節)",
        example: "Scan the text to find the train departure time.",
        exampleZh: "掃讀文章以找出火車出發時間。"
      },
      {
        id: 'v-u6-3',
        word: "prefix (un-, re-, dis-)",
        ipa: "/ˈpriːfɪks/",
        meaning: "字首 (前綴：改變字義)",
        example: "Unhappy means not happy; replay means play again.",
        exampleZh: "unhappy 代表不高興；replay 代表重播。"
      },
      {
        id: 'v-u6-4',
        word: "suffix (-ful, -less, -ly)",
        ipa: "/ˈsʌfɪks/",
        meaning: "字尾 (後綴：改變詞性)",
        example: "Careful means full of care; quickly is an adverb.",
        exampleZh: "careful 代表充滿細心；quickly 是副詞。"
      },
      {
        id: 'v-u6-5',
        word: "context clues",
        ipa: "/ˈkɑːntekst kluːz/",
        meaning: "上下文線索 (推論未知單字技巧)",
        example: "Look for context clues before checking a dictionary.",
        exampleZh: "在查字典之前先尋找上下文線索。"
      },
      {
        id: 'v-u6-6',
        word: "linking words (however, therefore)",
        ipa: "/ˈlɪŋkɪŋ wɜːrdz/",
        meaning: "轉折連詞 (文章邏輯導航指標)",
        example: "However shows a contrast between two ideas.",
        exampleZh: "however 表示兩個概念之間的轉折對比。"
      },
      {
        id: 'v-u6-7',
        word: "invisible",
        ipa: "/ɪnˈvɪzəbl/",
        meaning: "看不見的 (in- 否定 + visible)",
        example: "The superhero wore an invisible cloak.",
        exampleZh: "超級英雄穿著一件隱形斗篷。"
      },
      {
        id: 'v-u6-8',
        word: "wonderful",
        ipa: "/ˈwʌndərfl/",
        meaning: "極好的 / 精彩絕倫的 (wonder + -ful)",
        example: "Have a wonderful journey around the world!",
        exampleZh: "祝你在世界各地有一段精彩的旅程！"
      }
    ],
    dialogues: [
      {
        speaker: 'Teacher',
        avatar: '👩‍🏫',
        en: "Class, how can we understand this long story faster?",
        zh: "同學們，我們如何能更快理解這篇長篇故事？"
      },
      {
        speaker: 'Eric',
        avatar: '👦',
        en: "We can skim the first paragraph and topic sentences first!",
        zh: "我們可以先略讀第一段與各段的主題句！"
      },
      {
        speaker: 'Teacher',
        avatar: '👩‍🏫',
        en: "Excellent, Eric! And what if you meet an unfamiliar word like 'unbelievable'?",
        zh: "太棒了，Eric！那如果你遇到像 'unbelievable' 這樣不熟悉的單字呢？"
      },
      {
        speaker: 'Eric',
        avatar: '👦',
        en: "I break it down: 'un-' means not, 'believe' is the root, so it means hard to believe!",
        zh: "我把它拆解：'un-' 代表不，'believe' 是字根，所以就是難以置信！"
      }
    ],
    sentencePatterns: [
      {
        id: 'sp-u6-1',
        pattern: "Skimming helps you find [the main idea / the topic].",
        example: "Skimming helps you understand the passage without reading every word.",
        meaning: "略讀閱讀策略的核心功能"
      },
      {
        id: 'sp-u6-2',
        pattern: "Scanning allows you to locate [specific info / numbers / names].",
        example: "Scanning allows you to find the answers in seconds.",
        meaning: "掃讀閱讀策略的精準定位功能"
      },
      {
        id: 'sp-u6-3',
        pattern: "The prefix [un- / re-] means [not / again].",
        example: "The prefix 're-' means to do something again, like rewrite.",
        meaning: "單字拆解積木法說明句"
      }
    ]
  }
};
