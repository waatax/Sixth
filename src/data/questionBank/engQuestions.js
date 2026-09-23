// 🇬🇧 國小六年級 英語文領域 8 單元 課綱代表性題庫 (128 題)
// 涵蓋單元：eng-u1 ~ eng-u8 (每單元 16 題)
// 包含：生活作息與介系詞、過去式冒險與不規則動詞、問路指路地圖、身體健康與看診、節慶文化、閱讀理解與自然發音、未來計畫與職業、比較級與最高級世界奇觀

export const engQuestions = {
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Unit 1: Daily Routines & Time Management (16 題)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'eng-u1': [
    {
      id: 'en1-1',
      question: 'A: "What time is it?"  B: "It\'s 7:15."  另一種道地的英語時間表達法是？',
      options: ['It\'s a quarter past seven.', 'It\'s a quarter to seven.', 'It\'s half past seven.', 'It\'s seven past fifteen.'],
      answerIndex: 0,
      explanation: '【時間表達法】a quarter 代表 15 分鐘；past 代表「過」；7:15 即為「7 點過了一刻」，故為 a quarter past seven。'
    },
    {
      id: 'en1-2',
      question: 'I usually wake up ______ 6:30 ______ the morning. 空格中依序應填入哪一組時間介系詞？',
      options: ['at; in', 'in; at', 'on; at', 'at; on'],
      answerIndex: 0,
      explanation: '【時間介系詞口訣】具體鐘點時間用 at（at 6:30）；一日中的早中晚用 in（in the morning / in the afternoon）；具體某一天或星期用 on。'
    },
    {
      id: 'en1-3',
      question: 'Tina is a hard-working student. She ______ finishes her homework before dinner.',
      options: ['always', 'never', 'seldom', 'rarely'],
      answerIndex: 0,
      explanation: '【頻率副詞語意】由「hard-working（勤奮的）」可知她「總是 (always)」在晚餐前完成功課；never（從不）、seldom（很少）不合語境。'
    },
    {
      id: 'en1-4',
      question: '頻率副詞在句子中的標準文法位置是？例如在一般動詞與 be 動詞旁時：',
      options: ['在 be 動詞之後，在一般動詞之前', '在 be 動詞之前，在一般動詞之後', '永遠只能放在句尾最後一個字', '永遠只能放在句首第一個字'],
      answerIndex: 0,
      explanation: '【頻率副詞位置口訣】「be 後動前，助動中間」：He is always happy. / He always plays tennis.'
    },
    {
      id: 'en1-5',
      question: 'My brother ______ his teeth twice a day to keep them healthy.',
      options: ['brushes', 'brush', 'brushing', 'brushed'],
      answerIndex: 0,
      explanation: '【現在簡單式第三人稱單數】主詞 My brother 是單數代名詞 (he)，動詞 brush 字尾為 sh，規則應加上 -es 變成 brushes。'
    },
    {
      id: 'en1-6',
      question: 'A: "______ do you go to the library?"  B: "Twice a week."',
      options: ['How often', 'How many', 'What time', 'Where'],
      answerIndex: 0,
      explanation: '【頻率疑問詞】回答「Twice a week（一週兩次）」代表詢問發生的「頻率」，標準疑問詞為 How often。'
    },
    {
      id: 'en1-7',
      question: 'Peter: "Do you play soccer on Sundays?"  David: "No, I ______ play soccer. I don\'t like sports."',
      options: ['never', 'always', 'usually', 'often'],
      answerIndex: 0,
      explanation: '【語境推論】由後句「I don\'t like sports（我不喜歡運動）」可知頻率為 0%，故填 never（從不）。'
    },
    {
      id: 'en1-8',
      question: 'We have English class ______ Friday mornings. 空格中應填入哪一個介系詞？',
      options: ['on', 'in', 'at', 'for'],
      answerIndex: 0,
      explanation: '【特定日期時間介系詞】雖然單獨 morning 用 in the morning，但若前面有特定星期修飾（Friday mornings），必須使用 on！'
    },
    {
      id: 'en1-9',
      question: '"It\'s 8:45." 可以表達為？',
      options: ['It\'s a quarter to nine.', 'It\'s a quarter past eight.', 'It\'s fifteen past nine.', 'It\'s half past eight.'],
      answerIndex: 0,
      explanation: '【逆向時間表達】8:45 代表「差 15 分鐘就 9 點」，英語使用 to（差...到...）：a quarter to nine。'
    },
    {
      id: 'en1-10',
      question: 'Tom: "What ______ your sister do after school?"  Amy: "She practices the violin."',
      options: ['does', 'do', 'is', 'are'],
      answerIndex: 0,
      explanation: '【助動詞一致性】主詞 your sister 是第三人稱單數，在含有一般動詞 do 的現在簡單式問句中，助動詞應選 does。'
    },
    {
      id: 'en1-11',
      question: 'My father usually ______ the newspaper while having breakfast.',
      options: ['reads', 'read', 'reading', 'is reading'],
      answerIndex: 0,
      explanation: '【主詞動詞一致性】My father 為第三人稱單數，描述平時規律習慣用現在簡單式，read 後加 s 為 reads。'
    },
    {
      id: 'en1-12',
      question: 'Which sentence is grammatically CORRECT?（哪一個句子的文法完全正確？）',
      options: ['She is always late for school.', 'She always is late for school.', 'She late always is for school.', 'Always she late is for school.'],
      answerIndex: 0,
      explanation: '【頻率副詞位置檢查】be 動詞 is 之後接頻率副詞 always：She is always late for school.'
    },
    {
      id: 'en1-13',
      question: 'I have to go to bed early because I have a math test ______ tomorrow morning.',
      options: ['（不需填介系詞）', 'at', 'on', 'in'],
      answerIndex: 0,
      explanation: '【時間介系詞省略規則】當時間名詞前面有 this, that, next, last, tomorrow, yesterday 時，前面「不加任何介系詞」！'
    },
    {
      id: 'en1-14',
      question: 'A: "What do you usually do in your free time?"  B: "I enjoy ______ books in the garden."',
      options: ['reading', 'read', 'to read', 'reads'],
      answerIndex: 0,
      explanation: '【動名詞接續】動詞 enjoy 後面習慣接動名詞 (V-ing)，表示喜愛該項活動：enjoy reading books。'
    },
    {
      id: 'en1-15',
      question: '"Half past twelve" 指的是幾點幾分？',
      options: ['12:30', '12:15', '12:45', '1:30'],
      answerIndex: 0,
      explanation: '【半點鐘表達】half 代表 30 分鐘；half past twelve 即 12 點過了 30 分鐘，也就是 12:30。'
    },
    {
      id: 'en1-16',
      question: 'Ben: "How ______ you go to school every day?"  Sam: "I go to school by bus."',
      options: ['do', 'does', 'are', 'is'],
      answerIndex: 0,
      explanation: '【交通方式問句】主詞是 you，一般動詞為 go，原形現在簡單式疑問句需搭配助動詞 do。'
    }
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Unit 2: Past Tense Stories & Adventures (16 題)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'eng-u2': [
    {
      id: 'en2-1',
      question: '動詞 "go" 的過去式不規則變化是？',
      options: ['went', 'goed', 'gone', 'goes'],
      answerIndex: 0,
      explanation: '【高頻不規則過去式】go ➔ went（過去式）➔ gone（過去分詞）。例如：Yesterday I went to the zoo.'
    },
    {
      id: 'en2-2',
      question: 'Yesterday, Emily ______ a delicious chocolate cake with her grandmother.',
      options: ['baked', 'bakes', 'bake', 'baking'],
      answerIndex: 0,
      explanation: '【規則動詞過去式】時間副詞為「Yesterday（昨天）」，動詞應使用過去式；bake 字尾已有 e，直接加 d 變成 baked。'
    },
    {
      id: 'en2-3',
      question: 'A: "Did you see any monkeys at the zoo last Sunday?"  B: "No, I ______."',
      options: ['didn\'t', 'don\'t', 'wasn\'t', 'haven\'t'],
      answerIndex: 0,
      explanation: '【過去式簡答句】問句以助動詞 "Did you...?" 開頭，否定簡答一律用 "No, I didn\'t."'
    },
    {
      id: 'en2-4',
      question: 'The boys ______ very excited when their team won the championship yesterday.',
      options: ['were', 'was', 'are', 'is'],
      answerIndex: 0,
      explanation: '【be動詞過去式一致性】主詞 The boys 為複數，過去式 be 動詞應選 were（單數用 was）。'
    },
    {
      id: 'en2-5',
      question: '下列哪一組動詞的過去式變化「完全正確」？',
      options: ['see ➔ saw, eat ➔ ate, buy ➔ bought', 'see ➔ seed, eat ➔ eated, buy ➔ buyed', 'see ➔ saw, eat ➔ eaten, buy ➔ brought', 'see ➔ seen, eat ➔ ate, buy ➔ buyed'],
      answerIndex: 0,
      explanation: '【常用不規則動詞三態】see ➔ saw, eat ➔ ate, buy ➔ bought。注意 brought 是 bring 的過去式。'
    },
    {
      id: 'en2-6',
      question: 'Kevin: "Where ______ you go last night?"  Leo: "I went to the night market."',
      options: ['did', 'do', 'were', 'was'],
      answerIndex: 0,
      explanation: '【過去式特殊疑問句】時間為 last night，且句子中含有一般動詞 go，過去式問句應搭配助動詞 did。'
    },
    {
      id: 'en2-7',
      question: 'I didn\'t ______ my homework yesterday because I was sick.',
      options: ['finish', 'finished', 'finishes', 'finishing'],
      answerIndex: 0,
      explanation: '【助動詞後接原形動詞鐵律】句子中已經有否定助動詞 didn\'t，後面的一般動詞「必須還原為原形動詞」finish！'
    },
    {
      id: 'en2-8',
      question: '动詞 "run" 的過去式是？',
      options: ['ran', 'runned', 'running', 'runs'],
      answerIndex: 0,
      explanation: '【不規則變化】run ➔ ran ➔ run。例如：He ran very fast to catch the school bus this morning.'
    },
    {
      id: 'en2-9',
      question: 'A: "What happened to your arm?"  B: "I ______ off my bicycle two days ago."',
      options: ['fell', 'fall', 'falled', 'fallen'],
      answerIndex: 0,
      explanation: '【不規則動詞 fall】跌倒 fall 的過去式為 fell（兩天前 two days ago 需用過去式）。'
    },
    {
      id: 'en2-10',
      question: 'My mother ______ a new jacket for me last weekend.',
      options: ['bought', 'buyed', 'buys', 'buying'],
      answerIndex: 0,
      explanation: '【buy 的過去式】buy ➔ bought。上週末 last weekend 發生過的事情用過去式 bought。'
    },
    {
      id: 'en2-11',
      question: 'Mary was tired last night, so she ______ to sleep early at 8:30.',
      options: ['went', 'goes', 'go', 'is going'],
      answerIndex: 0,
      explanation: '【時態呼應】前句 was tired 為過去式，後句連接詞 so 帶領的子句動詞亦須呼應過去式 went。'
    },
    {
      id: 'en2-12',
      question: 'Which of the following is an IRREGULAR past tense verb?（下列何者為不規則過去式動詞？）',
      options: ['took (from take)', 'played (from play)', 'watched (from watch)', 'visited (from visit)'],
      answerIndex: 0,
      explanation: '【規則與不規則辨析】played, watched, visited 均直接在字尾加 -ed（規則變化）；take ➔ took 屬於不規則變化。'
    },
    {
      id: 'en2-13',
      question: 'Two years ago, we ______ in a small town near the mountains.',
      options: ['lived', 'live', 'living', 'lives'],
      answerIndex: 0,
      explanation: '【規則動詞字尾加 d】live 字尾為 e，過去式直接加 d 變成 lived。'
    },
    {
      id: 'en2-14',
      question: 'A: "______ was the weather in Kenting last week?"  B: "It was sunny and warm."',
      options: ['How', 'What', 'Where', 'When'],
      answerIndex: 0,
      explanation: '【天氣問句固定搭配】詢問天氣句型："How was the weather...?" 或 "What was the weather like...?"，回答形容詞 sunny 用 How。'
    },
    {
      id: 'en2-15',
      question: '动詞 "study" 的過去式變化規則是？',
      options: ['去 y 加 ied ➔ studied', '直接加 ed ➔ studyed', '直接加 d ➔ studyd', '維持原形 ➔ study'],
      answerIndex: 0,
      explanation: '【子音 + y 的過去式變化】study 字尾為「子音 d + y」，變過去式時必須「去 y 加上 -ied」變成 studied。'
    },
    {
      id: 'en2-16',
      question: 'We ______ a wonderful time at the amusement park last Saturday.',
      options: ['had', 'have', 'has', 'having'],
      answerIndex: 0,
      explanation: '【have a good time 過去式】have / has 的過去式為 had。上週六玩得很開心：had a wonderful time。'
    }
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Unit 3: Places & Asking for Directions (16 題)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'eng-u3': [
    {
      id: 'en3-1',
      question: 'A: "Excuse me, ______ do I get to the train station?"  B: "Go straight and turn left."',
      options: ['how', 'where', 'what', 'who'],
      answerIndex: 0,
      explanation: '【問路核心句型】禮貌問路常用句型："How do I get to + 地點?"（請問我該如何到達...？）'
    },
    {
      id: 'en3-2',
      question: 'The bookstore is ______ the post office and the bank. 空格中應填入哪一個方位介系詞？',
      options: ['between', 'next', 'across', 'under'],
      answerIndex: 0,
      explanation: '【兩者之間介系詞】between A and B 代表「在 A 與 B 之間」：between the post office and the bank。'
    },
    {
      id: 'en3-3',
      question: 'The hospital is ______ from the museum; you need to cross the street to get there.',
      options: ['across', 'next', 'between', 'in front'],
      answerIndex: 0,
      explanation: '【對面方位片語】across from... 代表「在...對面」；提示提到「cross the street（過馬路）」，故選 across。'
    },
    {
      id: 'en3-4',
      question: '"Go straight for two blocks and turn right on Main Street." 這句話的意思是？',
      options: ['直走兩個街區，然後在主街（Main Street）向右轉', '倒退走兩個路口，然後向左轉', '在主街向左轉走兩分鐘', '沿著圓環繞兩圈'],
      answerIndex: 0,
      explanation: '【指路英文解讀】Go straight（直走）；block（街區/路口）；turn right（向右轉）。'
    },
    {
      id: 'en3-5',
      question: 'My house is right ______ to the public park, so I can go jogging there every morning.',
      options: ['next', 'between', 'behind', 'across'],
      answerIndex: 0,
      explanation: '【在旁邊片語】next to 代表「在...隔壁/緊鄰」：right next to the park。'
    },
    {
      id: 'en3-6',
      question: 'A: "Is there a bakery near here?"  B: "Yes, ______ one on the corner of Sun Street."',
      options: ['there is', 'there are', 'it is', 'they are'],
      answerIndex: 0,
      explanation: '【There is 存在句型】單數可數名詞 one (a bakery) 搭配單數肯定句 "there is"。'
    },
    {
      id: 'en3-7',
      question: '在地圖指路時，"It\'s on your left." 的意思是？',
      options: ['它就在你的左手邊', '它在你的右前方', '請往你的身後走', '你要向左轉兩次'],
      answerIndex: 0,
      explanation: '【方位提示】on your left（在你的左側/左手邊）；on your right（在你的右手邊）。'
    },
    {
      id: 'en3-8',
      question: 'If you want to send a letter or buy stamps, you should go to the ______.',
      options: ['post office', 'supermarket', 'police station', 'bakery'],
      answerIndex: 0,
      explanation: '【公共設施單字】send a letter（寄信）、buy stamps（買郵票）的場所是郵局 post office。'
    },
    {
      id: 'en3-9',
      question: 'A: "Can you tell me the way to the night market?"  B: "Sure. Walk along this road, and you ______ miss it!"',
      options: ['can\'t', 'must', 'should', 'don\'t'],
      answerIndex: 0,
      explanation: '【道地英文慣用語】"You can\'t miss it!" 是一句極為常見的指路慣用語，意思是「目標非常顯眼好找，你絕不會錯過的！」'
    },
    {
      id: 'en3-10',
      question: 'The car is parked ______ the tall tree, so it is in the shade.',
      options: ['under', 'on', 'between', 'above'],
      answerIndex: 0,
      explanation: '【樹下陰涼處】在樹下乘涼停放車輛使用介系詞 under（在...下方）。'
    },
    {
      id: 'en3-11',
      question: 'When the traffic light turns red, all vehicles and pedestrians must ______.',
      options: ['stop', 'go straight', 'turn quickly', 'speed up'],
      answerIndex: 0,
      explanation: '【交通安全常識】紅燈停、綠燈行：When the traffic light turns red, you must stop.'
    },
    {
      id: 'en3-12',
      question: 'Where can people borrow books and study quietly for free?',
      options: ['In a library', 'In a restaurant', 'In a cinema', 'In a department store'],
      answerIndex: 0,
      explanation: '【場所功能字彙】borrow books（借書）、study quietly（安靜自習）的公立場所為圖書館 (library)。'
    },
    {
      id: 'en3-13',
      question: 'The teacher is standing ______ the classroom, facing all the students.',
      options: ['in front of', 'behind', 'between', 'next'],
      answerIndex: 0,
      explanation: '【面向全體學生方位】老師面對全班站在教室最前台，使用方位片語 in front of（在...前面）。'
    },
    {
      id: 'en3-14',
      question: 'A: "How long does it take to walk to the MRT station?"  B: "It takes ______ ten minutes on foot."',
      options: ['about', 'at', 'on', 'for'],
      answerIndex: 0,
      explanation: '【大約時間副詞】about ten minutes（大約 10 分鐘）；on foot 代表步行走路。'
    },
    {
      id: 'en3-15',
      question: 'Walk past the police station and you will see a convenience store ______ your right.',
      options: ['on', 'in', 'at', 'under'],
      answerIndex: 0,
      explanation: '【在左/右邊固定介系詞】表示在某人的左邊或右邊固定搭配介系詞 on：on your right / on your left。'
    },
    {
      id: 'en3-16',
      question: 'A: "Pardon me, is there a restroom around here?"  B: "Yes, go down the hallway. It\'s the second door ______."',
      options: ['on the left', 'in the front', 'at the right', 'between'],
      answerIndex: 0,
      explanation: '【室內指路常用片語】走廊左側第二道門：the second door on the left。'
    }
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Unit 4: Food, Health & Body Care (16 題)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'eng-u4': [
    {
      id: 'en4-1',
      question: 'A: "What\'s wrong with you?"  B: "I have a terrible ______; my head hurts so much."',
      options: ['headache', 'toothache', 'stomachache', 'sore throat'],
      answerIndex: 0,
      explanation: '【身體症狀字尾 -ache】由 "my head hurts（頭好痛）" 可知症狀為頭痛 (headache)。-ache 字尾表疼痛。'
    },
    {
      id: 'en4-2',
      question: 'Doctor: "You caught a bad cold. You should ______ plenty of warm water and stay in bed."',
      options: ['drink', 'drinking', 'drank', 'drinks'],
      answerIndex: 0,
      explanation: '【助動詞 should 後接原形】情態助動詞 should（應該）後面必須接「原形動詞」drink。'
    },
    {
      id: 'en4-3',
      question: 'Tom ate too much spicy food and junk food at the night market, and now he has a ______.',
      options: ['stomachache', 'broken leg', 'runny ear', 'cold shoulder'],
      answerIndex: 0,
      explanation: '【暴飲暴食引發症狀】吃了太多辛辣垃圾食物容易引發胃痛或肚子痛 (stomachache)。'
    },
    {
      id: 'en4-4',
      question: 'A: "I have a sore throat and a high fever."  Doctor: "You need to take this medicine ______ times a day after meals."',
      options: ['three', 'third', 'thirty', 'thirteen'],
      answerIndex: 0,
      explanation: '【服藥次數表達】一日三次用基數詞 "three times a day"（或 three times daily）；次數用基數詞 + times。'
    },
    {
      id: 'en4-5',
      question: 'Which of the following belongs to the "Dairy (乳製品)" food group on MyPlate?',
      options: ['Milk and cheese', 'Apples and bananas', 'Rice and bread', 'Chicken and fish'],
      answerIndex: 0,
      explanation: '【我的餐盤六大類食物】Milk（牛奶）與 cheese（起司）屬於 Dairy（乳品類），富含鈣質。'
    },
    {
      id: 'en4-6',
      question: 'If you have a serious toothache, which doctor should you visit immediately?',
      options: ['A dentist', 'An eye doctor', 'A veterinarian', 'A pilot'],
      answerIndex: 0,
      explanation: '【牙醫英文單字】牙齒痛 (toothache) 應該去看牙科醫師 (dentist)；veterinarian 為獸醫。'
    },
    {
      id: 'en4-7',
      question: 'You should not eat too many sweets or candy because they may cause ______.',
      options: ['cavities', 'muscles', 'good grades', 'strong bones'],
      answerIndex: 0,
      explanation: '【蛀牙與健康】吃太多高糖糖果容易導致蛀牙蛀洞 (cavities)。'
    },
    {
      id: 'en4-8',
      question: 'A: "How do you feel today?"  B: "I feel much ______ than yesterday. Thanks for asking!"',
      options: ['better', 'good', 'best', 'more good'],
      answerIndex: 0,
      explanation: '【形容詞比較級】後面有 than yesterday 作為比較對象，good 的不規則比較級為 better。'
    },
    {
      id: 'en4-9',
      question: 'Eating colorful vegetables such as carrots and broccoli provides our body with rich ______.',
      options: ['vitamins and minerals', 'sugar and salt', 'harmful chemicals', 'fat and oil'],
      answerIndex: 0,
      explanation: '【蔬菜營養成分】胡蘿蔔與花椰菜等深綠黃蔬菜富含人體必需的「維生素與礦物質 (vitamins and minerals)」。'
    },
    {
      id: 'en4-10',
      question: 'When you cough or sneeze, you should cover your mouth with a tissue or your ______.',
      options: ['elbow', 'bare hands', 'neighbor\'s face', 'dirty shoe'],
      answerIndex: 0,
      explanation: '【公衛禮儀與防疫】咳嗽或打噴嚏時，若無衛生紙應以「手肘內側 (elbow)」遮掩口鼻，避免雙手沾滿飛沫病菌傳染他人。'
    },
    {
      id: 'en4-11',
      question: 'A: "I have a running nose and I keep sneezing."  B: "You might have ______."',
      options: ['the flu (influenza)', 'a broken arm', 'a toothache', 'a sunburn'],
      answerIndex: 0,
      explanation: '【流感典型症狀】流鼻水 (runny nose) 與持續打噴嚏 (sneezing) 是感冒或流行性感冒 (the flu) 的常見症狀。'
    },
    {
      id: 'en4-12',
      question: 'Which of the following is an example of healthy eating habits?',
      options: ['Drinking 1500 to 2000 mL of plain water every day', 'Drinking three large cups of boba milk tea daily', 'Skipping breakfast every morning', 'Eating fried chicken for dinner every night'],
      answerIndex: 0,
      explanation: '【健康飲食生活好習慣】每天攝取充足的白開水（約 1500~2000 毫升），避免高糖手搖飲，維持良好新陳代謝。'
    },
    {
      id: 'en4-13',
      question: 'The human heart is an amazing organ. It is about the size of your ______.',
      options: ['fist', 'head', 'whole body', 'fingernail'],
      answerIndex: 0,
      explanation: '【人體小常識】健康成年人與兒童的心臟體積大小，大約等於自己「緊握的拳頭 (fist)」那麼大。'
    },
    {
      id: 'en4-14',
      question: 'My grandfather exercises in the park every morning to stay in good ______.',
      options: ['shape (health)', 'trouble', 'danger', 'price'],
      answerIndex: 0,
      explanation: '【保持身心健康片語】"stay in good shape" 是一句常用健康片語，意指「保持健康良好的體能狀態」。'
    },
    {
      id: 'en4-15',
      question: 'A: "Can I have some ice cream, Mom?"  Mom: "No, you have a cough. You shouldn\'t eat ______ food."',
      options: ['cold', 'hot', 'warm', 'sweet'],
      answerIndex: 0,
      explanation: '【咳嗽護理生活英文】咳嗽時應避免食用冰冷食物 (cold food) 刺激氣管加劇咳嗽。'
    },
    {
      id: 'en4-16',
      question: 'To protect your eyesight, the 20-20-20 rule suggests looking at something 20 feet away for 20 seconds every ______ minutes of screen time.',
      options: ['20', '60', '10', '100'],
      answerIndex: 0,
      explanation: '【國際護眼 20-20-20 法則】使用 3C 螢幕每 20 分鐘，應遠眺 20 英尺（約 6 公尺）外的景物至少 20 秒，放鬆睫狀肌。'
    }
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Unit 5: Festivals, Holidays & World Cultures (16 題)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'eng-u5': [
    {
      id: 'en5-1',
      question: 'On Lunar New Year\'s Eve, Taiwanese families get together to have a reunion dinner, and children receive ______ from elders.',
      options: ['red envelopes with lucky money', 'chocolate eggs', 'carved pumpkins', 'Christmas stockings'],
      answerIndex: 0,
      explanation: '【農曆新年習俗】除夕夜團圓飯後長輩發給晚輩裝有壓歲錢的「紅包 (red envelopes)」，象徵吉祥祝福。'
    },
    {
      id: 'en5-2',
      question: 'During the Dragon Boat Festival, people eat rice dumplings (zongzi) and watch exciting ______ races.',
      options: ['dragon boat', 'horse', 'car', 'bicycle'],
      answerIndex: 0,
      explanation: '【端午節文化英文】端午節經典傳統民俗為划龍舟競賽 (dragon boat races) 與包肉粽 (zongzi / rice dumplings)。'
    },
    {
      id: 'en5-3',
      question: 'On Halloween night (October 31st), children dress up in spooky costumes and go knocking on neighbors\' doors saying: "______!"',
      options: ['Trick or treat', 'Merry Christmas', 'Happy Birthday', 'Happy New Year'],
      answerIndex: 0,
      explanation: '【萬聖節經典名句】Trick or treat!（不給糖就搗蛋！）是萬聖節小朋友裝扮挨家挨戶討糖果的必備口號。'
    },
    {
      id: 'en5-4',
      question: 'Christmas is celebrated on December 25th. Many families decorate a Christmas ______ with bright lights and stars.',
      options: ['tree', 'boat', 'car', 'pumpkin'],
      answerIndex: 0,
      explanation: '【聖誕節習俗】西方家庭在客廳佈置聖誕樹 (Christmas tree)，掛上彩燈、彩球與飾品歡慶佳節。'
    },
    {
      id: 'en5-5',
      question: 'During the Mid-Autumn Festival, families gather outdoors to gaze at the full moon and enjoy delicious ______ and pomelos.',
      options: ['mooncakes', 'candy canes', 'turkeys', 'pizza'],
      answerIndex: 0,
      explanation: '【中秋節應節美食】中秋節賞月賞滿月，傳統必吃月餅 (mooncakes) 與文旦柚子 (pomelos)。'
    },
    {
      id: 'en5-6',
      question: 'Thanksgiving is celebrated in the United States on the fourth Thursday of November. The traditional main dish for dinner is roast ______.',
      options: ['turkey', 'fish', 'hamburgers', 'zongzi'],
      answerIndex: 0,
      explanation: '【感恩節傳統火雞大餐】美國感恩節闔家團聚感念豐收與恩典，經典主菜必吃烤火雞 (roast turkey)。'
    },
    {
      id: 'en5-7',
      question: 'The lantern riddle contest is an interesting traditional activity held during the ______ Festival.',
      options: ['Lantern', 'Moon', 'Water', 'Ghost'],
      answerIndex: 0,
      explanation: '【元宵節活動】元宵節 (Lantern Festival，農曆正月十五) 賞花燈、吃元宵湯圓，並舉辦猜燈謎 (lantern riddle) 活動。'
    },
    {
      id: 'en5-8',
      question: 'Christmas is ______ December 25th. 空格中應填入哪一個介系詞？',
      options: ['on', 'in', 'at', 'by'],
      answerIndex: 0,
      explanation: '【特定日期介系詞】單純月份用 in December，但一旦包含具體幾日（December 25th），必須使用介系詞 on！'
    },
    {
      id: 'en5-9',
      question: 'On Halloween, people carve scary faces into orange pumpkins. These glowing lantern decorations are called ______.',
      options: ['jack-o\'-lanterns', 'moon lanterns', 'sky lanterns', 'paper lanterns'],
      answerIndex: 0,
      explanation: '【南瓜燈專用單字】萬聖節挖空的南瓜燈籠英文專有名詞稱為 "jack-o\'-lantern"（傑克南瓜燈）。'
    },
    {
      id: 'en5-10',
      question: 'In Thailand, the famous Songkran Festival in April is also known as the ______ Festival, where people splash water on each other to wash away bad luck.',
      options: ['Water Splashing', 'Fire', 'Wind', 'Snow'],
      answerIndex: 0,
      explanation: '【泰國潑水節】泰國宋干節即舉世聞名的「潑水節 (Water Splashing Festival)」，互相潑水象徵洗滌過去一年的不順與厄運。'
    },
    {
      id: 'en5-11',
      question: 'People celebrate the New Year countdown on December 31st, which is known as ______.',
      options: ['New Year\'s Eve', 'Boxing Day', 'Easter', 'Labor Day'],
      answerIndex: 0,
      explanation: '【跨年夜英文】一年的最後一天（12 月 31 日）跨年倒數之夜稱為 "New Year\'s Eve"（跨年夜/元旦前夕）。'
    },
    {
      id: 'en5-12',
      question: 'At Pingxi in northern Taiwan, people write their wishes on colorful ______ and release them into the night sky during the Lantern Festival.',
      options: ['sky lanterns', 'balloons', 'kites', 'airplanes'],
      answerIndex: 0,
      explanation: '【平溪天燈國際盛事】在天燈 (sky lanterns) 上寫下心願祈福並冉冉升空，是平溪國際馳名的元宵觀光盛會。'
    },
    {
      id: 'en5-13',
      question: 'During Easter in spring, children love to search for hidden painted ______ in the garden.',
      options: ['Easter eggs', 'pumpkins', 'zongzi', 'snowballs'],
      answerIndex: 0,
      explanation: '【復活節彩蛋遊戲】復活節 (Easter) 象徵新生，孩子們熱衷於在花園草叢中尋找彩蛋 (Easter egg hunt)。'
    },
    {
      id: 'en5-14',
      question: 'Mother\'s Day is celebrated on the second Sunday ______ May every year.',
      options: ['in', 'at', 'on', 'with'],
      answerIndex: 0,
      explanation: '【月份介系詞】五月 (May) 前使用介系詞 in May。母親節在每年五月的第二個星期日。'
    },
    {
      id: 'en5-15',
      question: 'Which Taiwanese cultural festival was designated by UNESCO as a Masterpiece of Oral and Intangible Heritage of Humanity?',
      options: ['The Mazu Pilgrimage', 'The Comic Con', 'The Strawberry Festival', 'The Book Fair'],
      answerIndex: 0,
      explanation: '【媽祖遶境國際文化遺產】大甲媽祖與白沙屯媽祖遶境被聯合國列為世界非物質文化遺產 (Mazu Pilgrimage)。'
    },
    {
      id: 'en5-16',
      question: 'Learning about world festivals and traditions helps us become more ______ and respectful global citizens.',
      options: ['open-minded', 'selfish', 'impatient', 'careless'],
      answerIndex: 0,
      explanation: '【國際文化包容心】認識世界各地多元民俗節慶，能讓我們擁有開闊的思想 (open-minded) 與相互尊重的國際素養。'
    }
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Unit 6: Reading Comprehension & Phonics Mastery (16 題)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'eng-u6': [
    {
      id: 'en6-1',
      question: 'When you want to find a telephone number or a specific date in a long article quickly, which reading skill should you use?',
      options: ['Scanning (掃讀特定關鍵細節)', 'Skimming (略讀主旨)', 'Silent translation', 'Memorizing every word'],
      answerIndex: 0,
      explanation: '【掃讀策略 Scanning】專注目光快速捕捉特定數字、專有名詞、年代等具體單一資訊的技巧稱為「掃讀 (Scanning)」。'
    },
    {
      id: 'en6-2',
      question: 'In English word building, the prefix "un-" (like in "unhappy", "unreal", "unfair") usually means: ______.',
      options: ['not / opposite of (否定/相反)', 'again', 'very much', 'before'],
      answerIndex: 0,
      explanation: '【否定字首 un-】happy（快樂）➔ unhappy（不快樂）；fair（公平）➔ unfair（不公平），表相反否定。'
    },
    {
      id: 'en6-3',
      question: 'The suffix "-ful" in words like "careful", "helpful", and "colorful" turns a noun into an adjective meaning: ______.',
      options: ['full of (充滿...的)', 'without', 'never', 'made of stone'],
      answerIndex: 0,
      explanation: '【形容詞字尾 -ful】care（小心）➔ careful（充滿小心的/仔細的）；help ➔ helpful（樂於助人的）。'
    },
    {
      id: 'en6-4',
      question: 'Which of the following words has the same vowel sound as the word "seat" (/i/)?',
      options: ['team', 'sit', 'bed', 'hat'],
      answerIndex: 0,
      explanation: '【長母音自然發音】seat 中的 ea 發長母音 /i/，與 team 中的 ea 發音完全相同；sit 則為短母音 /ɪ/。'
    },
    {
      id: 'en6-5',
      question: 'The suffix "-ly" in words like "quickly", "slowly", and "happily" usually turns an adjective into a(n): ______.',
      options: ['adverb (副詞)', 'noun (名詞)', 'verb (動詞)', 'preposition (介系詞)'],
      answerIndex: 0,
      explanation: '【副詞字尾 -ly】quick（快的，形容詞）➔ quickly（快速地，副詞修飾動詞）。'
    },
    {
      id: 'en6-6',
      question: 'Read the sentence: "The climate was so *frigid* that ice covered the entire lake and snow fell all day."  What does the word *frigid* most likely mean?',
      options: ['Very cold', 'Extremely hot', 'Pleasant and warm', 'Dry and sunny'],
      answerIndex: 0,
      explanation: '【上下文線索推斷詞義】由句子中的 "ice covered the lake（結冰）" 與 "snow fell（降雪）" 可推斷 frigid 意指「極度寒冷 (Very cold)」。'
    },
    {
      id: 'en6-7',
      question: 'The prefix "re-" in words like "replay", "rewrite", and "rebuild" means: ______.',
      options: ['again (再次、重新)', 'against', 'under', 'never'],
      answerIndex: 0,
      explanation: '【字首 re- 意涵】write（寫）➔ rewrite（重寫）；play ➔ replay（重播），表重新進行一次。'
    },
    {
      id: 'en6-8',
      question: 'Which word contains the consonant digraph "sh" sound as in "ship"?',
      options: ['brush', 'chair', 'think', 'phone'],
      answerIndex: 0,
      explanation: '【子音組合發音】brush 字尾為 sh，發 /ʃ/ 音，與 ship 開頭發音一致；chair 發 /tʃ/，think 發 /θ/。'
    },
    {
      id: 'en6-9',
      question: 'The suffix "-less" in words like "careless" and "homeless" means: ______.',
      options: ['without (沒有、缺乏)', 'full of', 'very large', 'twice'],
      answerIndex: 0,
      explanation: '【否定字尾 -less】home（家）➔ homeless（無家可歸的）；care ➔ careless（粗心的/缺乏小心的）。'
    },
    {
      id: 'en6-10',
      question: 'Which word has a "silent letter" (字母不發音)?',
      options: ['knife (k is silent)', 'desk', 'pen', 'apple'],
      answerIndex: 0,
      explanation: '【自然發音不發音字母】knife、know、knee 開頭的 kn- 組合中，字母 k 為不發音靜音 (silent k)。'
    },
    {
      id: 'en6-11',
      question: 'In the word "biology", the root "bio" means: ______.',
      options: ['life (生命)', 'water', 'earth', 'fire'],
      answerIndex: 0,
      explanation: '【詞根常識】字根 bio 源自希臘文，意為生命 (life)；如 biology（生物學）、biography（傳記）。'
    },
    {
      id: 'en6-12',
      question: 'A good reader predicts what will happen next in a story based on: ______.',
      options: ['clues in the text and prior knowledge (文本線索與先備生活經驗)', 'the color of the book cover', 'closing eyes and guessing blindly', 'asking the teacher for answers'],
      answerIndex: 0,
      explanation: '【預測策略】依據作者鋪設的細節線索結合個人生活常識進行合理邏輯預測，能加深主動閱讀思考。'
    },
    {
      id: 'en6-13',
      question: 'Which word has the /aɪ/ diphthong sound as in "bike"?',
      options: ['kite', 'kid', 'kick', 'kit'],
      answerIndex: 0,
      explanation: '【i_e 魔法長母音】bike, kite 中的 i_e 組合發雙母音 /aɪ/；kid, kick, kit 則發短母音 /ɪ/。'
    },
    {
      id: 'en6-14',
      question: 'The main idea of a paragraph is best described as: ______.',
      options: ['the most important point or central message the author wants to convey', 'a tiny unimportant detail', 'the author\'s favorite animal', 'the last word of the paragraph'],
      answerIndex: 0,
      explanation: '【文章主旨定義】Main Idea 是作者最渴望向讀者傳遞的「核心論點或中心思想」，所有細節均圍繞主旨展開。'
    },
    {
      id: 'en6-15',
      question: 'Which pair of words are "antonyms" (反義詞)?',
      options: ['brave and cowardly', 'big and huge', 'happy and joyful', 'quick and fast'],
      answerIndex: 0,
      explanation: '【反義字辨析】brave（勇敢的）與 cowardly（膽小的）為一對反義詞；其餘選項均為同義詞 (Synonyms)。'
    },
    {
      id: 'en6-16',
      question: 'The suffix "-tion" in words like "action", "creation", and "celebration" turns a verb into a(n): ______.',
      options: ['noun (名詞)', 'adverb', 'verb', 'pronoun'],
      answerIndex: 0,
      explanation: '【名詞字尾 -tion】celebrate（慶祝，動詞）➔ celebration（慶祝活動，名詞）；act ➔ action。'
    }
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Unit 7: Future Plans & Dream Careers (16 題)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'eng-u7': [
    {
      id: 'en7-1',
      question: 'A: "What are you going to ______ this summer vacation?"  B: "I\'m going to visit my grandparents in Hualien."',
      options: ['do', 'doing', 'did', 'does'],
      answerIndex: 0,
      explanation: '【be going to 未來式句型】be going to 後面必須接「原形動詞」：What are you going to do...?'
    },
    {
      id: 'en7-2',
      question: 'Look at those dark clouds in the sky! It ______ rain soon.',
      options: ['is going to', 'was', 'went to', 'did'],
      answerIndex: 0,
      explanation: '【有明顯跡象之未來預測】看見天空烏雲密布代表即將發生的必然天氣，道地英語優先使用 is going to rain。'
    },
    {
      id: 'en7-3',
      question: 'My dream is to become a(n) ______ because I want to explore outer space and walk on the Moon.',
      options: ['astronaut', 'dentist', 'chef', 'firefighter'],
      answerIndex: 0,
      explanation: '【職業名詞】explore outer space（探索外太空）、walk on the Moon（漫步月球）的職業是太空人 (astronaut)。'
    },
    {
      id: 'en7-4',
      question: 'I promise I ______ help you with your science project tomorrow afternoon.',
      options: ['will', 'am', 'was', 'did'],
      answerIndex: 0,
      explanation: '【承諾未來式 will】表達說話當下的個人主觀意願、許諾或即時決定時，搭配助動詞 will + 原形動詞。'
    },
    {
      id: 'en7-5',
      question: 'She loves animals very much. In the future, she wants to be a ______ to treat sick cats and dogs.',
      options: ['vet (veterinarian)', 'pilot', 'lawyer', 'banker'],
      answerIndex: 0,
      explanation: '【獸醫師專有名詞】照顧醫治生病寵物貓狗的醫師是獸醫 (vet / veterinarian)。'
    },
    {
      id: 'en7-6',
      question: 'Which sentence is grammatically CORRECT?（哪一個未來式句子的文法完全正確？）',
      options: ['They are going to play basketball tomorrow.', 'They are going to playing basketball tomorrow.', 'They will to play basketball tomorrow.', 'They going to play basketball tomorrow.'],
      answerIndex: 0,
      explanation: '【未來式文法結構檢驗】be going to + 原形動詞；will 後面直接加原形（不能有 to）。故 A 正確。'
    },
    {
      id: 'en7-7',
      question: 'A person who designs buildings, bridges, and houses is called a(n) ______.',
      options: ['architect', 'waiter', 'actor', 'fisherman'],
      answerIndex: 0,
      explanation: '【建築師單字】設計大樓與房屋藍圖的專業工程師是建築師 (architect)。'
    },
    {
      id: 'en7-8',
      question: 'Tony: "Will you come to my birthday party this Saturday?"  Cindy: "Yes, I ______."',
      options: ['will', 'do', 'am', 'can'],
      answerIndex: 0,
      explanation: '【will 問句簡答】以 "Will you...?" 提問，肯定簡答為 "Yes, I will."'
    },
    {
      id: 'en7-9',
      question: 'When we graduate from elementary school, we ______ junior high school students next September.',
      options: ['will become', 'became', 'become already', 'are becoming yesterday'],
      answerIndex: 0,
      explanation: '【未來事實】明年九月將成為國中生是未來發生的事實，使用 will become。'
    },
    {
      id: 'en7-10',
      question: 'A: "What do you want to be when you grow up?"  B: "I want to be a ______ because I love cooking delicious meals for people."',
      options: ['chef', 'police officer', 'postman', 'bus driver'],
      answerIndex: 0,
      explanation: '【主廚單字】熱愛烹飪可口料理的人，志向是成為主廚/大廚 (chef)。'
    },
    {
      id: 'en7-11',
      question: 'Mark is practicing hard every day. He ______ participate in the national swimming competition next month.',
      options: ['is going to', 'was', 'went', 'did'],
      answerIndex: 0,
      explanation: '【事前規劃之未來計畫】主詞 Mark 是單數，表示事前已決定的計畫用 is going to。'
    },
    {
      id: 'en7-12',
      question: 'A: "The phone is ringing!"  B: "Don\'t worry, I ______ answer it."',
      options: ['will', 'am going to', 'was', 'have'],
      answerIndex: 0,
      explanation: '【臨時決定用 will】電話突然響起，說話當下瞬間做出的決定與反應，習慣用 will："I\'ll answer it."'
    },
    {
      id: 'en7-13',
      question: 'A person who flies airplanes across the world is a ______.',
      options: ['pilot', 'mechanic', 'nurse', 'fireman'],
      answerIndex: 0,
      explanation: '【飛行員單字】駕駛客機在天空翱翔的人是飛行員機師 (pilot)。'
    },
    {
      id: 'en7-14',
      question: 'They won\'t ______ soccer this afternoon if it rains heavily.',
      options: ['play', 'played', 'playing', 'plays'],
      answerIndex: 0,
      explanation: '【won\'t 否定未來式】won\'t 是 will not 的縮寫，後面一律接原形動詞 play。'
    },
    {
      id: 'en7-15',
      question: 'A: "What are your goals for junior high school?"  B: "I ______ to make new friends and join the science club."',
      options: ['hope', 'hoped', 'hoping', 'was hope'],
      answerIndex: 0,
      explanation: '【現在期許願望】表達目前的志向與希望，使用現在簡單式 I hope to...。'
    },
    {
      id: 'en7-16',
      question: 'An environmental scientist studies nature and works hard to ______ our planet from pollution.',
      options: ['protect', 'destroy', 'harm', 'forget'],
      answerIndex: 0,
      explanation: '【職業目標單字】環境科學家的神聖使命是保護地球 (protect our planet) 免於污染侵害。'
    }
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // Unit 8: Comparisons & World Wonders (16 題)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  'eng-u8': [
    {
      id: 'en8-1',
      question: 'Mount Everest (珠穆朗瑪峰) is the ______ mountain in the world.',
      options: ['highest', 'higher', 'high', 'most high'],
      answerIndex: 0,
      explanation: '【最高級規則變化】單音節形容詞 high，在三者以上比較時最高級加 -est，前面搭配 the：the highest mountain。'
    },
    {
      id: 'en8-2',
      question: 'An elephant is much ______ than a dog.',
      options: ['heavier', 'heavy', 'heaviest', 'more heavy'],
      answerIndex: 0,
      explanation: '【形容詞比較級】heavy 字尾為子音 + y，去 y 加 ier 變成 heavier；比較級前可加 much 強調程度「重得多」。'
    },
    {
      id: 'en8-3',
      question: 'The Pacific Ocean is ______ than the Atlantic Ocean.',
      options: ['larger', 'large', 'largest', 'more large'],
      answerIndex: 0,
      explanation: '【兩者比較級】有 than 時使用比較級。large 字尾已有 e，直接加 r 變成 larger。'
    },
    {
      id: 'en8-4',
      question: 'This science experiment is ______ than the one we did last week.',
      options: ['more interesting', 'most interesting', 'interesting', 'interestinger'],
      answerIndex: 0,
      explanation: '【多音節形容詞比較級】三音節以上形容詞（in-ter-est-ing），比較級在前面加上 more：more interesting than。'
    },
    {
      id: 'en8-5',
      question: 'Cheetahs are the ______ land animals on Earth; they can run up to 120 km/h.',
      options: ['fastest', 'faster', 'fast', 'most fast'],
      answerIndex: 0,
      explanation: '【最高級冠詞 the】獵豹是全地球陸地上跑得「最快的 (the fastest)」動物。'
    },
    {
      id: 'en8-6',
      question: 'Which of the following is an IRREGULAR comparison?（下列何者為不規則比較級？）',
      options: ['good ➔ better ➔ best', 'tall ➔ taller ➔ tallest', 'small ➔ smaller ➔ smallest', 'long ➔ longer ➔ longest'],
      answerIndex: 0,
      explanation: '【不規則形容詞三級變化】good / well ➔ better ➔ best；bad / ill ➔ worse ➔ worst。其餘為規則變化。'
    },
    {
      id: 'en8-7',
      question: 'Health is ______ than wealth; we must take good care of our body.',
      options: ['more important', 'most important', 'important', 'importanter'],
      answerIndex: 0,
      explanation: '【多音節比較級】important 為三音節形容詞，比較級為 more important。健康比財富更重要。'
    },
    {
      id: 'en8-8',
      question: 'Yesterday was the ______ day of this winter so far; the temperature dropped to 5℃.',
      options: ['coldest', 'colder', 'cold', 'most cold'],
      answerIndex: 0,
      explanation: '【範圍內最高級】由 "the" 與 "so far（迄今為止）" 可知為最高級，cold 加 est 變成 the coldest day。'
    },
    {
      id: 'en8-9',
      question: 'The blue whale is the ______ animal that has ever lived on Earth.',
      options: ['biggest', 'bigger', 'big', 'most big'],
      answerIndex: 0,
      explanation: '【短母音+單一子音字尾雙寫】big 為單音節短母音單字，字尾子音 g 必須雙寫再加 est：the biggest。'
    },
    {
      id: 'en8-10',
      question: 'A: "Which subject do you like ______ , math or English?"  B: "I like English more."',
      options: ['better', 'best', 'good', 'well'],
      answerIndex: 0,
      explanation: '【兩者二選一用比較級】在兩者之間做選擇（math or English），應使用比較級 better。'
    },
    {
      id: 'en8-11',
      question: 'Taipei 101 was once the ______ building in the world from 2004 to 2010.',
      options: ['tallest', 'taller', 'tall', 'most tall'],
      answerIndex: 0,
      explanation: '【歷史最高建築】tall ➔ the tallest。台北 101 曾是全世界最高的摩天大樓。'
    },
    {
      id: 'en8-12',
      question: 'His test score this time was ______ than last time because he didn\'t study hard.',
      options: ['worse', 'bad', 'worst', 'more bad'],
      answerIndex: 0,
      explanation: '【bad 的不規則比較級】bad ➔ worse ➔ worst。兩次考試成績相比，這次更差用 worse than。'
    },
    {
      id: 'en8-13',
      question: 'The Amazon River is one of the ______ rivers on Earth.',
      options: ['longest', 'longer', 'long', 'most long'],
      answerIndex: 0,
      explanation: '【one of the + 最高級 + 複數名詞】經典句型："one of the longest rivers"（世界上最長的河流之一）。'
    },
    {
      id: 'en8-14',
      question: 'Traveling by airplane is much ______ than traveling by train, but it costs more.',
      options: ['faster', 'fastest', 'fast', 'more fast'],
      answerIndex: 0,
      explanation: '【比較級修飾詞 much】搭飛機比搭火車快得多 (much faster than)。'
    },
    {
      id: 'en8-15',
      question: 'Who is the ______ student in your class? Everyone likes to talk to her.',
      options: ['most popular', 'more popular', 'popular', 'popularest'],
      answerIndex: 0,
      explanation: '【全班範圍之最高級】popular 為多音節形容詞，最高級為 the most popular（最受歡迎的）。'
    },
    {
      id: 'en8-16',
      question: 'The Grand Canyon (大峽谷) in the United States is one of the most ______ natural wonders in the world.',
      options: ['spectacular', 'spectacularest', 'more spectacular', 'spectacularly'],
      answerIndex: 0,
      explanation: '【最高級修飾形容詞】the most + 原級多音節形容詞 spectacular（壯觀的、宏偉的）。'
    }
  ]
};
