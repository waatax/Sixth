import json
import codecs

data = {
  "elementary": {
    "title": "GEPT Elementary — 初級示範語料",
    "subtitle": "日常生活基礎英語",
    "readAloudPassages": [
      {
        "id": "gept-elem-p1",
        "text": "Good morning! My name is Mei-Ling. I am a student at Taipei Junior High School. Every day, I wake up at six thirty and eat breakfast with my family.",
        "zh": "早安！我叫美玲。我是台北國中的學生。每天，我六點半起床並和家人一起吃早餐。"
      },
      {
        "id": "gept-elem-p2",
        "text": "After school, I usually go to the library to study English. I like reading storybooks and listening to English songs. My favorite subject is English because I want to travel around the world someday.",
        "zh": "放學後，我通常去圖書館讀英文。我喜歡看故事書和聽英文歌。我最喜歡的科目是英文，因為我希望有一天能環遊世界。"
      },
      {
        "id": "gept-elem-p3",
        "text": "Last weekend, my family went to the night market. We ate delicious fried chicken and bubble tea. My little brother bought a toy car. We had a wonderful time together!",
        "zh": "上週末，我們全家去逛夜市。我們吃了好吃的炸雞和珍珠奶茶。我弟弟買了一輛玩具車。我們一起度過了美好的時光！"
      }
    ],
    "vocabularies": [
      {"id": "gept-ev1", "word": "breakfast", "ipa": "/ˈbrekfəst/", "meaning": "早餐", "example": "I always have breakfast before going to school.", "exampleZh": "我總是在上學前吃早餐。"},
      {"id": "gept-ev2", "word": "library", "ipa": "/ˈlaɪbreri/", "meaning": "圖書館", "example": "The library is next to the post office.", "exampleZh": "圖書館在郵局隔壁。"},
      {"id": "gept-ev3", "word": "favorite", "ipa": "/ˈfeɪvərɪt/", "meaning": "最喜愛的", "example": "What is your favorite color?", "exampleZh": "你最喜歡的顏色是什麼？"},
      {"id": "gept-ev4", "word": "delicious", "ipa": "/dɪˈlɪʃəs/", "meaning": "美味的", "example": "The cake my mom made is really delicious.", "exampleZh": "我媽做的蛋糕真的很好吃。"},
      {"id": "gept-ev5", "word": "weekend", "ipa": "/ˌwiːkˈend/", "meaning": "週末", "example": "What do you usually do on the weekend?", "exampleZh": "你週末通常做什麼？"},
      {"id": "gept-ev6", "word": "travel", "ipa": "/ˈtrævl/", "meaning": "旅行", "example": "I want to travel to Japan next summer.", "exampleZh": "我想明年夏天去日本旅行。"},
      {"id": "gept-ev7", "word": "beautiful", "ipa": "/ˈbjuːtɪfl/", "meaning": "美麗的", "example": "The sunset at the beach is really beautiful.", "exampleZh": "海灘的日落真的很美。"},
      {"id": "gept-ev8", "word": "expensive", "ipa": "/ɪkˈspensɪv/", "meaning": "昂貴的", "example": "This watch is too expensive for me.", "exampleZh": "這支手錶對我來說太貴了。"},
      {"id": "gept-ev9", "word": "convenient", "ipa": "/kənˈviːniənt/", "meaning": "方便的", "example": "The MRT is very convenient in Taipei.", "exampleZh": "台北的捷運非常方便。"},
      {"id": "gept-ev10", "word": "important", "ipa": "/ɪmˈpɔːrtnt/", "meaning": "重要的", "example": "It is important to eat healthy food every day.", "exampleZh": "每天吃健康的食物很重要。"},
      {"id": "gept-ev11", "word": "exercise", "ipa": "/ˈeksərsaɪz/", "meaning": "運動；練習", "example": "We should exercise at least three times a week.", "exampleZh": "我們應該每週至少運動三次。"},
      {"id": "gept-ev12", "word": "environment", "ipa": "/ɪnˈvaɪrənmənt/", "meaning": "環境", "example": "We need to protect our environment.", "exampleZh": "我們需要保護我們的環境。"},
      {"id": "gept-ev13", "word": "accident", "ipa": "/ˈæksɪdənt/", "meaning": "意外；車禍", "example": "I saw a terrible accident on my way to school.", "exampleZh": "我在上學途中看到了一場可怕的車禍。"},
      {"id": "gept-ev14", "word": "borrow", "ipa": "/ˈbɑːroʊ/", "meaning": "借入", "example": "Can I borrow your pen for a minute?", "exampleZh": "我可以借用你的筆一下嗎？"},
      {"id": "gept-ev15", "word": "celebrate", "ipa": "/ˈselɪbreɪt/", "meaning": "慶祝", "example": "How do you celebrate your birthday?", "exampleZh": "你怎麼慶祝你的生日？"},
      {"id": "gept-ev16", "word": "decision", "ipa": "/dɪˈsɪʒn/", "meaning": "決定", "example": "Making a good decision is not always easy.", "exampleZh": "做一個好決定並不總是容易的。"},
      {"id": "gept-ev17", "word": "excellent", "ipa": "/ˈeksələnt/", "meaning": "優秀的", "example": "She is an excellent English teacher.", "exampleZh": "她是一位優秀的英文老師。"},
      {"id": "gept-ev18", "word": "festival", "ipa": "/ˈfestɪvl/", "meaning": "節慶", "example": "The Dragon Boat Festival is coming soon.", "exampleZh": "端午節快到了。"},
      {"id": "gept-ev19", "word": "generous", "ipa": "/ˈdʒenərəs/", "meaning": "慷慨的", "example": "It was generous of him to pay for our dinner.", "exampleZh": "他請我們吃晚餐真是慷慨。"},
      {"id": "gept-ev20", "word": "hospital", "ipa": "/ˈhɑːspɪtl/", "meaning": "醫院", "example": "He works as a nurse at the local hospital.", "exampleZh": "他在當地的醫院當護士。"},
      {"id": "gept-ev21", "word": "invite", "ipa": "/ɪnˈvaɪt/", "meaning": "邀請", "example": "I want to invite you to my party this weekend.", "exampleZh": "我想邀請你參加這週末我的派對。"},
      {"id": "gept-ev22", "word": "knowledge", "ipa": "/ˈnɑːlɪdʒ/", "meaning": "知識", "example": "Reading books can increase your knowledge.", "exampleZh": "看書可以增加你的知識。"},
      {"id": "gept-ev23", "word": "language", "ipa": "/ˈlæŋɡwɪdʒ/", "meaning": "語言", "example": "English is an international language.", "exampleZh": "英文是一種國際語言。"},
      {"id": "gept-ev24", "word": "memory", "ipa": "/ˈmeməri/", "meaning": "記憶力；回憶", "example": "I have a bad memory for names.", "exampleZh": "我對名字的記憶力很差。"},
      {"id": "gept-ev25", "word": "neighbor", "ipa": "/ˈneɪbər/", "meaning": "鄰居", "example": "Our new neighbor is very friendly.", "exampleZh": "我們的新鄰居非常友善。"}
    ],
    "dialogues": [
      {
        "speaker": "Amy",
        "avatar": "👧",
        "en": "Excuse me, where is the nearest convenience store?",
        "zh": "不好意思，最近的便利商店在哪裡？"
      },
      {
        "speaker": "Tom",
        "avatar": "👦",
        "en": "Go straight for two blocks, then turn right. It is next to the bank.",
        "zh": "直走兩個街區，然後右轉。它在銀行隔壁。"
      },
      {
        "speaker": "Amy",
        "avatar": "👧",
        "en": "Thank you! Is it far from here?",
        "zh": "謝謝！離這裡遠嗎？"
      },
      {
        "speaker": "Tom",
        "avatar": "👦",
        "en": "No, it is only about five minutes on foot.",
        "zh": "不遠，走路大約只要五分鐘。"
      },
      {
        "speaker": "Doctor",
        "avatar": "👨‍⚕️",
        "en": "Good morning. What seems to be the problem?",
        "zh": "早安。你哪裡不舒服呢？"
      },
      {
        "speaker": "Patient",
        "avatar": "🤒",
        "en": "I have a headache and a sore throat since yesterday.",
        "zh": "我從昨天開始就頭痛和喉嚨痛。"
      }
    ],
    "sentencePatterns": [
      {
        "id": "gept-esp1",
        "pattern": "What time do you usually [verb]?",
        "example": "What time do you usually wake up in the morning?",
        "meaning": "詢問日常作息的時間"
      },
      {
        "id": "gept-esp2",
        "pattern": "I have been to [place] before.",
        "example": "I have been to the Taipei Zoo before. It was really fun!",
        "meaning": "使用現在完成式表達經驗"
      },
      {
        "id": "gept-esp3",
        "pattern": "Could you please [verb]?",
        "example": "Could you please open the window? It is very hot in here.",
        "meaning": "禮貌請求的句型"
      },
      {
        "id": "gept-esp4",
        "pattern": "If it rains tomorrow, I will [verb].",
        "example": "If it rains tomorrow, I will stay home and read a book.",
        "meaning": "條件句（未來可能發生的情況）"
      },
      {
        "id": "gept-esp5",
        "pattern": "[Subject] is more [adjective] than [noun].",
        "example": "English is more interesting than math to me.",
        "meaning": "比較級句型"
      },
      {
        "id": "gept-esp6",
        "pattern": "I enjoy [V-ing] because [reason].",
        "example": "I enjoy playing basketball because it keeps me healthy.",
        "meaning": "使用動名詞表達興趣與原因"
      },
      {
        "id": "gept-esp7",
        "pattern": "It takes [person] [time] to [verb].",
        "example": "It takes me thirty minutes to go to school by bus.",
        "meaning": "花費（時間）做某事"
      },
      {
        "id": "gept-esp8",
        "pattern": "Would you like to [verb]?",
        "example": "Would you like to go to the movies with me tonight?",
        "meaning": "提出邀請或建議"
      }
    ]
  },
  "intermediate": {
    "title": "GEPT Intermediate — 中級示範語料",
    "subtitle": "日常生活進階溝通",
    "readAloudPassages": [
      {
        "id": "gept-inter-p1",
        "text": "Technology has changed the way we communicate with each other. Nowadays, most people use smartphones and social media to stay in touch with friends and family. While this is very convenient, some experts worry that spending too much time online may affect our mental health.",
        "zh": "科技改變了我們彼此溝通的方式。如今，大多數人使用智慧型手機和社群媒體與朋友和家人保持聯繫。雖然這非常方便，但一些專家擔心花太多時間上網可能會影響我們的心理健康。"
      },
      {
        "id": "gept-inter-p2",
        "text": "Global warming is one of the biggest challenges facing our planet today. The average temperature of the Earth has been rising due to the increase of greenhouse gases. If we do not take action soon, sea levels could rise significantly, causing serious problems for coastal cities around the world.",
        "zh": "全球暖化是當今地球面臨的最大挑戰之一。由於溫室氣體的增加，地球的平均溫度持續上升。如果我們不盡快採取行動，海平面可能會大幅上升，對全球沿海城市造成嚴重問題。"
      }
    ],
    "vocabularies": [
      {"id": "gept-iv1", "word": "communicate", "ipa": "/kəˈmjuːnɪkeɪt/", "meaning": "溝通；交流", "example": "It is important to communicate clearly with your teammates.", "exampleZh": "與隊友清楚地溝通是很重要的。"},
      {"id": "gept-iv2", "word": "convenient", "ipa": "/kənˈviːniənt/", "meaning": "便利的；方便的", "example": "Online shopping is very convenient for busy people.", "exampleZh": "線上購物對忙碌的人來說非常方便。"},
      {"id": "gept-iv3", "word": "challenge", "ipa": "/ˈtʃælɪndʒ/", "meaning": "挑戰", "example": "Learning a new language is a big challenge, but it is rewarding.", "exampleZh": "學習一門新語言是一個很大的挑戰，但很有收穫。"},
      {"id": "gept-iv4", "word": "temperature", "ipa": "/ˈtemprətʃər/", "meaning": "溫度", "example": "The temperature will drop to fifteen degrees tonight.", "exampleZh": "今晚氣溫將降至十五度。"},
      {"id": "gept-iv5", "word": "significant", "ipa": "/sɪɡˈnɪfɪkənt/", "meaning": "重大的；顯著的", "example": "There has been a significant increase in online learning.", "exampleZh": "線上學習有了顯著的增長。"},
      {"id": "gept-iv6", "word": "opportunity", "ipa": "/ˌɑːpərˈtuːnəti/", "meaning": "機會", "example": "This job provides a great opportunity for career growth.", "exampleZh": "這份工作提供了很好的職涯成長機會。"},
      {"id": "gept-iv7", "word": "experience", "ipa": "/ɪkˈspɪriəns/", "meaning": "經驗；體驗", "example": "Traveling abroad is a valuable experience for young people.", "exampleZh": "出國旅行對年輕人來說是寶貴的經驗。"},
      {"id": "gept-iv8", "word": "responsibility", "ipa": "/rɪˌspɑːnsəˈbɪləti/", "meaning": "責任", "example": "Everyone has a responsibility to protect the environment.", "exampleZh": "每個人都有保護環境的責任。"},
      {"id": "gept-iv9", "word": "advantage", "ipa": "/ədˈvæntɪdʒ/", "meaning": "優勢；好處", "example": "One advantage of living in the city is the public transportation.", "exampleZh": "住在城市的一個好處是大眾運輸。"},
      {"id": "gept-iv10", "word": "behavior", "ipa": "/bɪˈheɪvjər/", "meaning": "行為", "example": "His behavior in class was completely unacceptable.", "exampleZh": "他在課堂上的行為完全無法接受。"},
      {"id": "gept-iv11", "word": "campaign", "ipa": "/kæmˈpeɪn/", "meaning": "活動；運動", "example": "The government launched a campaign to stop drunk driving.", "exampleZh": "政府發起了一項防止酒駕的活動。"},
      {"id": "gept-iv12", "word": "describe", "ipa": "/dɪˈskraɪb/", "meaning": "描述", "example": "Can you describe the man you saw at the bank?", "exampleZh": "你能描述你在銀行看到的那個男人嗎？"},
      {"id": "gept-iv13", "word": "equipment", "ipa": "/ɪˈkwɪpmənt/", "meaning": "設備；裝備", "example": "The gym has a lot of new exercise equipment.", "exampleZh": "健身房有很多新的運動設備。"},
      {"id": "gept-iv14", "word": "frequent", "ipa": "/ˈfriːkwənt/", "meaning": "頻繁的", "example": "He is a frequent visitor to this museum.", "exampleZh": "他是這家博物館的常客。"},
      {"id": "gept-iv15", "word": "graduate", "ipa": "/ˈɡrædʒuət/", "meaning": "畢業；畢業生", "example": "She plans to travel after she graduates from college.", "exampleZh": "她計畫大學畢業後去旅行。"},
      {"id": "gept-iv16", "word": "hesitate", "ipa": "/ˈhezɪteɪt/", "meaning": "猶豫", "example": "Don't hesitate to ask if you have any questions.", "exampleZh": "如果你有任何問題，請不要猶豫發問。"},
      {"id": "gept-iv17", "word": "improve", "ipa": "/ɪmˈpruːv/", "meaning": "改善；進步", "example": "I need to practice more to improve my English speaking skills.", "exampleZh": "我需要多練習以增進我的英文口說技巧。"},
      {"id": "gept-iv18", "word": "journal", "ipa": "/ˈdʒɜːrnl/", "meaning": "日誌；期刊", "example": "Keeping a journal helps me organize my thoughts.", "exampleZh": "寫日記幫助我整理思緒。"},
      {"id": "gept-iv19", "word": "knowledgeable", "ipa": "/ˈnɑːlɪdʒəbl/", "meaning": "知識淵博的", "example": "Our tour guide was very knowledgeable about local history.", "exampleZh": "我們的導遊對當地歷史非常了解。"},
      {"id": "gept-iv20", "word": "leisure", "ipa": "/ˈliːʒər/", "meaning": "休閒", "example": "What do you like to do in your leisure time?", "exampleZh": "你在休閒時間喜歡做什麼？"}
    ],
    "dialogues": [
      {
        "speaker": "Interviewer",
        "avatar": "🧑‍💼",
        "en": "Could you tell me about your strengths and weaknesses?",
        "zh": "能請你談談你的優點和缺點嗎？"
      },
      {
        "speaker": "Candidate",
        "avatar": "👩",
        "en": "I believe my greatest strength is my ability to work well in a team. As for my weakness, I sometimes spend too much time on details.",
        "zh": "我相信我最大的優點是團隊合作能力。至於缺點，我有時會花太多時間在細節上。"
      },
      {
        "speaker": "Host",
        "avatar": "🎙️",
        "en": "What do you think about the impact of social media on teenagers?",
        "zh": "你對社群媒體對青少年的影響有什麼看法？"
      },
      {
        "speaker": "Guest",
        "avatar": "👨‍🏫",
        "en": "Although social media helps teenagers connect with each other, excessive use can lead to anxiety and lower self-esteem.",
        "zh": "雖然社群媒體幫助青少年彼此聯繫，但過度使用可能導致焦慮和降低自尊。"
      }
    ],
    "sentencePatterns": [
      {
        "id": "gept-isp1",
        "pattern": "Although [clause], [main clause].",
        "example": "Although it was raining heavily, we still decided to go hiking.",
        "meaning": "讓步子句（雖然...但是...）"
      },
      {
        "id": "gept-isp2",
        "pattern": "If I had more time, I would [verb].",
        "example": "If I had more time, I would learn to play the piano.",
        "meaning": "假設語氣（與現在事實相反的假設）"
      },
      {
        "id": "gept-isp3",
        "pattern": "It is widely believed that [clause].",
        "example": "It is widely believed that education is the key to success.",
        "meaning": "表達普遍看法的正式句型"
      },
      {
        "id": "gept-isp4",
        "pattern": "Not only [clause], but also [clause].",
        "example": "Not only does exercise keep you healthy, but it also improves your mood.",
        "meaning": "不僅...而且...（含倒裝句）"
      },
      {
        "id": "gept-isp5",
        "pattern": "Compared to [noun], [subject] is [adjective].",
        "example": "Compared to last year, the sales this year are much better.",
        "meaning": "與...相比"
      },
      {
        "id": "gept-isp6",
        "pattern": "By the time [clause], [subject] had [past participle].",
        "example": "By the time we arrived at the station, the train had already left.",
        "meaning": "過去完成式（在某事發生之前已經...）"
      }
    ]
  },
  "high-intermediate": {
    "title": "GEPT High-Intermediate — 中高級示範語料",
    "subtitle": "學術與專業進階溝通",
    "readAloudPassages": [
      {
        "id": "gept-hi-p1",
        "text": "Artificial intelligence has rapidly transformed various industries, from healthcare and finance to education and entertainment. While AI-powered tools can significantly enhance productivity and decision-making, concerns about data privacy, algorithmic bias, and job displacement continue to spark heated debate among policymakers, technologists, and the general public alike.",
        "zh": "人工智慧已迅速改變了從醫療保健、金融到教育和娛樂等各行各業。雖然 AI 驅動的工具可以顯著提升生產力和決策能力，但關於資料隱私、演算法偏見和就業替代的擔憂，持續在政策制定者、技術人員和一般大眾之間引發激烈討論。"
      }
    ],
    "vocabularies": [
      {"id": "gept-hiv1", "word": "transform", "ipa": "/trænsˈfɔːrm/", "meaning": "轉變；改造", "example": "Digital technology has transformed the way businesses operate globally.", "exampleZh": "數位科技已經改變了全球企業的運作方式。"},
      {"id": "gept-hiv2", "word": "productivity", "ipa": "/ˌprɑːdʌkˈtɪvəti/", "meaning": "生產力；效率", "example": "Remote working can either boost or hinder productivity depending on the individual.", "exampleZh": "遠端工作可能提升或阻礙生產力，取決於個人。"},
      {"id": "gept-hiv3", "word": "controversial", "ipa": "/ˌkɑːntrəˈvɜːrʃl/", "meaning": "有爭議的", "example": "The new policy on immigration is highly controversial.", "exampleZh": "新的移民政策極具爭議性。"},
      {"id": "gept-hiv4", "word": "sustainability", "ipa": "/səˌsteɪnəˈbɪləti/", "meaning": "永續性", "example": "Environmental sustainability should be a priority for every nation.", "exampleZh": "環境永續性應該是每個國家的優先要務。"},
      {"id": "gept-hiv5", "word": "perspective", "ipa": "/pərˈspektɪv/", "meaning": "觀點；視角", "example": "Looking at the issue from a different perspective can lead to creative solutions.", "exampleZh": "從不同的角度看問題可以帶來創意解決方案。"},
      {"id": "gept-hiv6", "word": "consequence", "ipa": "/ˈkɑːnsɪkwens/", "meaning": "後果；結果", "example": "Climate change will have severe consequences for future generations.", "exampleZh": "氣候變遷將對後代產生嚴重後果。"},
      {"id": "gept-hiv7", "word": "ambiguous", "ipa": "/æmˈbɪɡjuəs/", "meaning": "模稜兩可的", "example": "The politician gave an ambiguous answer to the reporter's question.", "exampleZh": "這位政治家對記者的問題給出了一個模稜兩可的答案。"},
      {"id": "gept-hiv8", "word": "innovative", "ipa": "/ˈɪnəveɪtɪv/", "meaning": "創新的", "example": "The company is known for its innovative approach to product design.", "exampleZh": "這家公司以其產品設計的創新方法而聞名。"},
      {"id": "gept-hiv9", "word": "evaluate", "ipa": "/ɪˈvæljueɪt/", "meaning": "評估", "example": "We need to evaluate the effectiveness of the new marketing strategy.", "exampleZh": "我們需要評估新行銷策略的有效性。"},
      {"id": "gept-hiv10", "word": "fundamental", "ipa": "/ˌfʌndəˈmentl/", "meaning": "基礎的；根本的", "example": "Freedom of speech is a fundamental human right.", "exampleZh": "言論自由是基本人權。"},
      {"id": "gept-hiv11", "word": "implement", "ipa": "/ˈɪmplɪment/", "meaning": "實施；執行", "example": "The school plans to implement a new recycling program next semester.", "exampleZh": "學校計畫下學期實施一項新的資源回收計畫。"},
      {"id": "gept-hiv12", "word": "phenomenon", "ipa": "/fəˈnɑːmɪnən/", "meaning": "現象", "example": "The Northern Lights are a spectacular natural phenomenon.", "exampleZh": "北極光是壯觀的自然現象。"},
      {"id": "gept-hiv13", "word": "comprehensive", "ipa": "/ˌkɑːmprɪˈhensɪv/", "meaning": "全面的；廣泛的", "example": "The report provides a comprehensive overview of the current market trends.", "exampleZh": "該報告提供了當前市場趨勢的全面概述。"},
      {"id": "gept-hiv14", "word": "vulnerable", "ipa": "/ˈvʌlnərəbl/", "meaning": "脆弱的；易受傷的", "example": "Older people are especially vulnerable to the flu.", "exampleZh": "老年人特別容易感染流感。"}
    ],
    "dialogues": [
      {
        "speaker": "Professor",
        "avatar": "👩‍🏫",
        "en": "In your research paper, you argued that renewable energy is the most viable solution to climate change. Could you elaborate on the economic feasibility of your proposal?",
        "zh": "在你的研究論文中，你主張再生能源是解決氣候變遷最可行的方案。你能詳細說明你的提案在經濟上的可行性嗎？"
      },
      {
        "speaker": "Student",
        "avatar": "👨‍🎓",
        "en": "Certainly. While the initial investment in renewable infrastructure is substantial, the long-term cost savings and environmental benefits far outweigh the upfront expenses.",
        "zh": "當然。雖然再生能源基礎設施的初始投資相當可觀，但長期的成本節約和環境效益遠超過前期支出。"
      },
      {
        "speaker": "Moderator",
        "avatar": "🎤",
        "en": "How do you respond to critics who claim that AI will inevitably replace human workers in most industries?",
        "zh": "對於那些聲稱 AI 將不可避免地在大多數產業取代人類工作者的批評者，你如何回應？"
      }
    ],
    "sentencePatterns": [
      {
        "id": "gept-hisp1",
        "pattern": "It is widely acknowledged that [clause].",
        "example": "It is widely acknowledged that critical thinking skills are essential in the twenty-first century.",
        "meaning": "學術寫作中表達共識的正式句型"
      },
      {
        "id": "gept-hisp2",
        "pattern": "Not until [clause] did [subject] [verb].",
        "example": "Not until the data was thoroughly analyzed did the researchers draw their conclusions.",
        "meaning": "倒裝句強調「直到...才...」"
      },
      {
        "id": "gept-hisp3",
        "pattern": "Had [subject] [past participle], [result clause].",
        "example": "Had the government invested more in education, the literacy rate would have been higher.",
        "meaning": "省略 if 的假設語氣倒裝（與過去事實相反）"
      },
      {
        "id": "gept-hisp4",
        "pattern": "In spite of [noun phrase], [clause].",
        "example": "In spite of the economic downturn, the company managed to increase its profits.",
        "meaning": "儘管有...（讓步介系詞片語）"
      },
      {
        "id": "gept-hisp5",
        "pattern": "The more [comparative], the more [comparative].",
        "example": "The more you read, the more fluent your writing will become.",
        "meaning": "越...就越..."
      }
    ]
  },
  "advanced": {
    "title": "GEPT Advanced — 高級示範語料",
    "subtitle": "專業學術與深度論述",
    "readAloudPassages": [
      {
        "id": "gept-adv-p1",
        "text": "The intersection of neuroscience and artificial intelligence presents profound philosophical questions about the nature of consciousness and cognition. As machine learning algorithms become increasingly sophisticated in mimicking human thought processes, scholars across disciplines are compelled to re-examine fundamental assumptions about what it means to be sentient, and whether silicon-based intelligence could ever truly replicate the emergent properties of biological neural networks.",
        "zh": "神經科學與人工智慧的交匯提出了關於意識和認知本質的深刻哲學問題。隨著機器學習演算法在模擬人類思考過程方面變得日益精密，各學科的學者不得不重新審視關於什麼是有知覺的基本假設，以及矽基智慧是否能真正複製生物神經網路的湧現特性。"
      }
    ],
    "vocabularies": [
      {"id": "gept-av1", "word": "intersection", "ipa": "/ˌɪntərˈsekʃn/", "meaning": "交匯點；交叉領域", "example": "The intersection of art and technology has produced groundbreaking innovations.", "exampleZh": "藝術與科技的交匯已產生了突破性的創新。"},
      {"id": "gept-av2", "word": "consciousness", "ipa": "/ˈkɑːnʃəsnəs/", "meaning": "意識；知覺", "example": "The hard problem of consciousness remains one of the greatest mysteries in philosophy.", "exampleZh": "意識的困難問題仍然是哲學中最大的謎題之一。"},
      {"id": "gept-av3", "word": "sophisticated", "ipa": "/səˈfɪstɪkeɪtɪd/", "meaning": "精密的；複雜的", "example": "The research team developed a highly sophisticated algorithm for data analysis.", "exampleZh": "研究團隊開發了一種高度精密的資料分析演算法。"},
      {"id": "gept-av4", "word": "paradigm", "ipa": "/ˈpærədaɪm/", "meaning": "典範；範式", "example": "The discovery led to a paradigm shift in our understanding of the universe.", "exampleZh": "這一發現導致了我們對宇宙認知的典範轉移。"},
      {"id": "gept-av5", "word": "ambiguous", "ipa": "/æmˈbɪɡjuəs/", "meaning": "模稜兩可的", "example": "His ambiguous statement left everyone wondering about his true intentions.", "exampleZh": "他模稜兩可的陳述讓大家都在猜測他的真實意圖。"},
      {"id": "gept-av6", "word": "dichotomy", "ipa": "/daɪˈkɑːtəmi/", "meaning": "二分法；對立", "example": "There is often a false dichotomy between science and religion.", "exampleZh": "科學與宗教之間常常存在著一種錯誤的二分法。"},
      {"id": "gept-av7", "word": "intrinsic", "ipa": "/ɪnˈtrɪnzɪk/", "meaning": "固有的；內在的", "example": "Math is an intrinsic part of the school curriculum.", "exampleZh": "數學是學校課程中不可或缺的一部分。"},
      {"id": "gept-av8", "word": "mitigate", "ipa": "/ˈmɪtɪɡeɪt/", "meaning": "減輕；緩和", "example": "We need to take action to mitigate the effects of climate change.", "exampleZh": "我們需要採取行動來減輕氣候變遷的影響。"},
      {"id": "gept-av9", "word": "pragmatic", "ipa": "/præɡˈmætɪk/", "meaning": "務實的", "example": "The mayor took a pragmatic approach to solving the city's traffic problems.", "exampleZh": "市長採取務實的方法來解決城市的交通問題。"},
      {"id": "gept-av10", "word": "ubiquitous", "ipa": "/juːˈbɪkwɪtəs/", "meaning": "無所不在的", "example": "Smartphones have become ubiquitous in modern society.", "exampleZh": "智慧型手機在現代社會已無所不在。"}
    ],
    "dialogues": [
      {
        "speaker": "Panelist A",
        "avatar": "👩‍🔬",
        "en": "The ethical implications of gene editing technology cannot be overstated. While CRISPR holds tremendous potential for eradicating hereditary diseases, the prospect of designer babies raises serious moral and societal concerns.",
        "zh": "基因編輯技術的倫理影響怎麼強調都不為過。雖然 CRISPR 在根除遺傳疾病方面具有巨大潛力，但設計嬰兒的前景引發了嚴重的道德和社會擔憂。"
      },
      {
        "speaker": "Panelist B",
        "avatar": "👨‍⚕️",
        "en": "I would argue that the benefits far outweigh the risks, provided that robust regulatory frameworks are established to govern its application.",
        "zh": "我會主張，只要建立健全的監管框架來規範其應用，其利益遠大於風險。"
      }
    ],
    "sentencePatterns": [
      {
        "id": "gept-asp1",
        "pattern": "While it is true that [concession], one must also consider [counter-argument].",
        "example": "While it is true that economic growth creates jobs, one must also consider its impact on the environment.",
        "meaning": "學術論述中承認對方觀點後提出反論"
      },
      {
        "id": "gept-asp2",
        "pattern": "The extent to which [subject] [verb] remains a matter of considerable debate.",
        "example": "The extent to which social media influences political opinions remains a matter of considerable debate.",
        "meaning": "表達某議題仍有重大爭議的學術句型"
      }
    ]
  },
  "superior": {
    "title": "GEPT Superior — 優級示範語料",
    "subtitle": "母語級專業精熟表達",
    "readAloudPassages": [
      {
        "id": "gept-sup-p1",
        "text": "The epistemological underpinnings of contemporary post-structuralist thought challenge the very notion of objective truth, positing instead that knowledge is invariably mediated through linguistic constructs and power dynamics. This deconstructive approach, while intellectually liberating in its refusal to privilege any single interpretive framework, has paradoxically engendered a crisis of legitimacy within the humanities, as scholars grapple with the implications of radical relativism for ethical and political discourse.",
        "zh": "當代後結構主義思想的認識論基礎挑戰了客觀真理的概念本身，轉而提出知識不可避免地通過語言建構和權力動態來中介。這種解構方法在拒絕特權化任何單一詮釋框架方面具有智識解放性，但矛盾地在人文學科內引發了合法性危機，學者們正在與激進相對主義對倫理和政治話語的影響進行角力。"
      }
    ],
    "vocabularies": [
      {"id": "gept-sv1", "word": "epistemological", "ipa": "/ɪˌpɪstəməˈlɑːdʒɪkl/", "meaning": "認識論的", "example": "The epistemological foundations of this theory have been questioned by several prominent philosophers.", "exampleZh": "這個理論的認識論基礎已被幾位著名哲學家質疑。"},
      {"id": "gept-sv2", "word": "paradoxically", "ipa": "/ˌpærəˈdɑːksɪkli/", "meaning": "矛盾地；弔詭地", "example": "Paradoxically, the policy designed to reduce inequality actually widened the wealth gap.", "exampleZh": "弔詭的是，旨在減少不平等的政策實際上擴大了貧富差距。"},
      {"id": "gept-sv3", "word": "deconstruction", "ipa": "/ˌdiːkənˈstrʌkʃn/", "meaning": "解構", "example": "Derrida's concept of deconstruction fundamentally altered literary criticism.", "exampleZh": "德里達的解構概念從根本上改變了文學批評。"},
      {"id": "gept-sv4", "word": "ineffable", "ipa": "/ɪnˈefəbl/", "meaning": "難以言喻的", "example": "The beauty of the sunset over the mountains was simply ineffable.", "exampleZh": "群山之上日落的美麗簡直難以言喻。"},
      {"id": "gept-sv5", "word": "obfuscate", "ipa": "/ˈɑːbfəskeɪt/", "meaning": "使模糊；使困惑", "example": "The politician's speech seemed designed to obfuscate the real issues.", "exampleZh": "這位政治家的演講似乎旨在掩蓋真正的問題。"},
      {"id": "gept-sv6", "word": "sycophant", "ipa": "/ˈsɪkəfənt/", "meaning": "諂媚者", "example": "The CEO surrounded himself with sycophants who never challenged his ideas.", "exampleZh": "這位執行長身邊圍繞著從不質疑他想法的諂媚者。"}
    ],
    "dialogues": [
      {
        "speaker": "Diplomat",
        "avatar": "🤵",
        "en": "While we remain committed to the principles enshrined in the multilateral framework, we must acknowledge that the current geopolitical landscape necessitates a more nuanced and pragmatic approach to conflict resolution.",
        "zh": "雖然我們仍然致力於多邊框架中所確立的原則，但我們必須承認，當前的地緣政治格局需要對衝突解決採取更細緻和務實的方法。"
      },
      {
        "speaker": "Moderator",
        "avatar": "🎙️",
        "en": "Could you elaborate on what specific measures your delegation would propose to bridge the gap between the competing interests at play?",
        "zh": "您能否詳細說明貴代表團會提出哪些具體措施來彌合各方競爭利益之間的差距？"
      }
    ],
    "sentencePatterns": [
      {
        "id": "gept-ssp1",
        "pattern": "Notwithstanding the [noun/clause], it remains imperative that [clause].",
        "example": "Notwithstanding the budgetary constraints, it remains imperative that the research initiative be fully funded.",
        "meaning": "儘管...仍然必須...（高度正式的讓步句型）"
      },
      {
        "id": "gept-ssp2",
        "pattern": "It would be remiss not to acknowledge that [clause].",
        "example": "It would be remiss not to acknowledge that the volunteers' contributions were instrumental in the project's success.",
        "meaning": "不得不承認...（正式學術/外交用語）"
      }
    ]
  }
}

file_content = f"""// 全民英檢 (GEPT) 各級英文語音示範語料
// 用於 Web Speech Synthesis API 朗讀播放
// 每個級別提供：朗讀短文、核心單字、情境對話、實用句型

export const geptAudioData = {json.dumps(data, ensure_ascii=False, indent=2)};
"""

with codecs.open('c:\\Users\\User\\OneDrive\\文件\\Antigravity\\Sixth\\src\\data\\geptAudioData.js', 'w', 'utf-8') as f:
    f.write(file_content)
