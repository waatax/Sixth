import { group } from './_h.mjs';

export default {
  'eng-u1': {
    gaps: [
      { title: 'Simple Present 問答：Do 還是 Does', body: `主詞是 he、she、it 或單數人名時，動詞要變化；疑問句用 Does，動詞還原。\n\n- What time **do** you get up? I get up at 7:00.\n- What time **does** Helen **have** lunch? She **has** lunch at 12:00.\n- **Does** he play baseball? Yes, he **does**. / No, he **doesn't**.\n\n易錯：does 後面不可再加 s。have 的第三人稱是 has。` },
      { title: '時間和交通的小字', body: `| 用法 | 例子 |\n| :--- | :--- |\n| at + 時刻 | at 8:30 |\n| on + 星期／日期 | on Monday |\n| in + 上下午／月份 | in the morning, in May |\n| by + 交通工具 | by bus, by train |\n| on foot（走路） | I go to school on foot. |\n\n「How do you go to school?」問交通方式，不是問時間。` },
      { title: '問答要對得上：What、Where、How', body: `- What 問事情：What do you do in your free time?\n- Where 問地點：Where is Mike?\n- When／What time 問時間。\n- How 問方式：How does Jeff go to the library?\n\n考卷常出「選出正確對應句」，先看疑問詞，再看主詞和時態。` },
    ],
    qs: [
      ...group('文法選擇', '第三人稱和助動詞', [
        { k: '選擇', src: 'DG112E1', stem: 'What time ______ Tina ______ dinner?', opts: ['do; have', 'does; has', 'does; have', 'do; has'], a: 'C. does; have', hint: 'Tina is singular.', steps: ['主詞 Tina 用 does。', 'does 後面動詞用原形 have。'], trap: 'does 已有 s，have 不能再變 has。', where: '本頁 Simple Present 問答。', needs: ['Does'] },
        { k: '選擇', src: 'DG112E1', stem: 'My brother ______ a bath at 9:00 every night.', opts: ['take', 'takes', 'taking', 'took'], a: 'B. takes', hint: 'every night means a habit.', steps: ['習慣動作用現在式。', '主詞 my brother 是第三人稱單數，動詞加 s。'], trap: 'taking 不能單獨當動詞。', where: '知識點「第三人稱單數動詞要加 s」。', needs: ['takes'] },
        { k: '選擇', src: 'DG112E1', stem: 'I go to the park ______ foot on Sundays.', opts: ['on', 'by', 'in', 'at'], a: 'A. on', hint: 'on foot is a fixed phrase.', steps: ['走路固定用 on foot。', 'by 接 bus、train 等交通工具。'], trap: '不能說 by foot。', where: '本頁「時間和交通的小字」。', needs: ['on foot'] },
        { k: '選擇', stem: 'She ______ never late for school.', opts: ['am', 'is', 'are', 'be'], a: 'B. is', hint: 'be 動詞要配主詞。', steps: ['She 配 is。', '頻率副詞放在 be 動詞後面，正確句子是 She is never late for school.'], trap: 'be 後、一般動詞前是頻率副詞位置。', where: '核心觀念 4：頻率副詞位置。', needs: ['never'] },
      ]),
      ...group('句意對應', '問答配對', [
        { k: '選擇', src: 'DG112E1', stem: 'A: How does Amy get to the swimming pool? B: ______', opts: ['She rides her bike there.', 'She swims at 7:00.', 'She swims on Sundays.', 'She is at the pool.'], a: 'A. She rides her bike there.', hint: 'How 問方式。', steps: ['疑問詞 How 問用什麼方法。', 'rides her bike 回答交通方式。'], trap: 'at 7:00 回答時間。', where: '本頁「問答要對得上」。', needs: ['How'] },
        { k: '選擇', src: 'DG112E1', stem: 'A: What does your sister like to do on weekends? B: ______', opts: ['She is at home.', 'She likes to draw comics.', 'At 8:00.', 'Yes, she does.'], a: 'B. She likes to draw comics.', hint: 'What 問做什麼。', steps: ['回答要說明活動。'], trap: 'Yes／No 只回答 Do 開頭的問句。', where: '本頁「問答要對得上」。', needs: ['What'] },
        { k: '選擇', stem: 'A: Does Kevin play the piano? B: ______', opts: ['Yes, he do.', 'Yes, he does.', 'No, he don’t.', 'Yes, she does.'], a: 'B. Yes, he does.', hint: 'Does 問，用 does 答。', steps: ['主詞 Kevin 是 he。', '肯定簡答用 Yes, he does.'], trap: 'he 要配 does，不是 do。', where: '本頁 Simple Present 問答。', needs: ['Does'] },
      ]),
      ...group('句子重組', '字序和標點', [
        { k: '重組', src: 'DG112E1', stem: 'Unscramble: up / What / does / get / time / Ken / ?', a: 'What time does Ken get up?', hint: '疑問詞放句首。', steps: ['What time 放最前面。', '助動詞 does，再接主詞 Ken。', '動詞原形 get up 放最後。'], trap: '結尾要有問號。', where: '本頁 Simple Present 問答。', needs: ['What time'] },
        { k: '重組', src: 'DG112E1', stem: 'Unscramble: always / to / school / She / walks / .', a: 'She always walks to school.', hint: '頻率副詞在一般動詞前。', steps: ['主詞 She。', '頻率副詞 always。', '動詞 walks，再接 to school。'], trap: 'always 不放句尾。', where: '核心觀念 4：頻率副詞位置。', needs: ['always'] },
      ]),
      ...group('閱讀與時間', '時間表和 past/to', [
        { k: '選擇', stem: 'It’s 8:45. Which is correct?', opts: ['It’s a quarter past eight.', 'It’s a quarter to nine.', 'It’s half past eight.', 'It’s a quarter to eight.'], a: 'B. It’s a quarter to nine.', hint: 'Fifteen minutes to 9.', steps: ['8:45 差 15 分到 9 點。', 'a quarter to nine。'], trap: 'past 表過幾分，to 表差幾分。', where: '知識點「用英文說時間」。', needs: ['past', 'to'] },
        { k: '閱讀', src: 'DG112E1', stem: 'Read: “Ruby wakes up at 6:30 and takes the MRT with her dad. She eats noodles at noon. She usually practices the violin after school.” (1) How does Ruby travel? (2) What does she usually do after school?', a: '(1) By MRT. (2) She practices the violin.', hint: 'Scan for the key words.', steps: ['Find “goes to school”.', 'Find “after school”.'], trap: '回答要用第三人稱。', where: '本頁「問答要對得上」。', needs: ['after school'] },
        { k: '寫作', src: 'DG112E1', stem: 'Write one sentence about your weekend hobby.', a: 'Example: I play chess with my dad on Sundays.', hint: '用完整句。', steps: ['主詞 I。', '動詞用原形。', '句尾用句點。'], trap: '不要只寫 chess。', where: '本頁「問答要對得上」。', needs: ['What'] },
        { k: '選擇', stem: 'Which sentence is correct?', opts: ['He often is late.', 'He is often late.', 'He late often is.', 'Often he late is.'], a: 'B. He is often late.', hint: 'be 動詞後面。', steps: ['頻率副詞放在 be 動詞後。'], trap: '一般動詞才放前面。', where: '核心觀念 4：頻率副詞位置。', needs: ['often'] },
      ]),
    ],
  },

  'eng-u2': {
    gaps: [
      { title: 'was 和 were 的使用', body: `be 動詞的過去式：\n\n- I / he / she / it / 單數人名 → **was**\n- you / we / they / 複數 → **were**\n\n例：Peggy **was** at the train station. **Were** you at the movie theater? Yes, I **was**. / No, I **wasn’t**.\n\n問地點：Where **was** Emily yesterday? She **was** at the museum.` },
      { title: '一般動詞過去式三句型', body: `- 肯定：She **played** the piano yesterday.\n- 否定：She **didn’t play** the piano.\n- 疑問：**Did** she **play** the piano? Yes, she **did**. / No, she **didn’t**.\n- 問做什麼：What **did** you do yesterday? I **did** my homework.\n\n一旦出現 did 或 didn’t，後面動詞還原。` },
      { title: '不是過去式的陷阱', body: `看到 yesterday、last week、two days ago 用過去式。但 every day、usually 是現在式。\n\n常見不規則：go → went，have → had，do → did，see → saw，eat → ate，come → came，read → read，take → took，get → got。` },
      { title: '聽力常考子音群', body: `段考聽力常考起始子音群：tr、dr、gr、cr、st、sk、sp、sw、gl、pl。發音相近的要注意：\n\n- tr（train）和 dr（dress）\n- gl（glass）和 gr（grass）\n- st（stop）和 sp（spoon）\n\n聽的時候注意第二個音，並把單字放進句子裡練習。` },
    ],
    qs: [
      ...group('be 動詞過去式', 'was、were 判斷', [
        { k: '選擇', src: 'DG112E1', stem: '______ you at the night market last Friday?', opts: ['Was', 'Were', 'Are', 'Did'], a: 'B. Were', hint: 'you 配 were。', steps: ['last Friday 用過去式。', 'you 的 be 動詞過去式是 were。'], trap: 'are 是現在式。', where: '本頁「was 和 were 的使用」。', needs: ['were'] },
        { k: '選擇', src: 'DG112E1', stem: '______ was in Japan last week.', opts: ['We', 'They', 'Jenny', 'You'], a: 'C. Jenny', hint: 'was 配單數。', steps: ['was 的主詞要單數。', 'Jenny 是單數。'], trap: '反過來判斷主詞也是常見題。', where: '本頁「was 和 were 的使用」。', needs: ['was'] },
        { k: '選擇', src: 'DG112E1', stem: 'A: Was Dora at the aquarium? B: ______', opts: ['Yes, she is.', 'Yes, she was.', 'No, I wasn’t.', 'No, she didn’t.'], a: 'B. Yes, she was.', hint: 'Was 問，was 答。', steps: ['主詞 Dora 是 she。', '時態要和問句相同。'], trap: 'is 時態不對。', where: '本頁「was 和 were 的使用」。', needs: ['was'] },
        { k: '選擇', src: 'DG112E1', stem: 'A: Where was Owen last weekend? B: ______', opts: ['He is in Yilan.', 'He was in Yilan.', 'He was sleepy.', 'He went happy.'], a: 'B. He was in Yilan.', hint: 'Where 問地點。', steps: ['要回答地點。', '時態用過去式。'], trap: 'He was sleepy 回答的是狀態。', where: '本頁「was 和 were 的使用」。', needs: ['Where'] },
      ]),
      ...group('一般動詞過去式', 'Did 問句和動詞還原', [
        { k: '選擇', src: 'DG112E1', stem: 'A: What ______ your class do last Monday? B: We ______ a science project.', opts: ['do; did', 'do; do', 'did; did', 'did; do'], a: 'C. did; did', hint: '兩個都是過去式。', steps: ['問過去做什麼，用 did。', '回答 do 的過去式 did。'], trap: '第一個 did 是助動詞，第二個 did 是動詞。', where: '本頁「一般動詞過去式三句型」。', needs: ['did'] },
        { k: '選擇', src: 'DG112E1', stem: 'A: ______ your uncle cook dinner last night? B: No, he ______.', opts: ['Did; don’t', 'Did; didn’t', 'Does; doesn’t', 'Was; wasn’t'], a: 'B. Did; didn’t', hint: 'cook 是一般動詞。', steps: ['一般動詞過去式用 Did 問。', '否定回答 didn’t。'], trap: 'cook 不用 was。', where: '本頁「一般動詞過去式三句型」。', needs: ['didn’t'] },
        { k: '選擇', stem: 'She didn’t ______ the movie last night.', opts: ['saw', 'see', 'sees', 'seeing'], a: 'B. see', hint: 'didn’t 後面還原。', steps: ['過去由 didn’t 表示。', '動詞用原形 see。'], trap: '不要寫 didn’t saw。', where: '知識點「did 後面的動詞要用原形」。', needs: ['didn’t'] },
        { k: '填充', src: 'DG112E1', stem: 'Write the past tense: visit → ______, take → ______, go → ______, have → ______.', a: 'visited; took; went; had', hint: 'Regular and irregular.', steps: ['visit 加 ed。', 'take、go、have 都是不規則動詞。'], trap: '不能寫 goed 或 taked。', where: '本頁「不是過去式的陷阱」。', needs: ['went'] },
        { k: '選擇', src: 'DG112E1', stem: 'A: Did Nora bake cookies last Sunday? B: ______', opts: ['No, she didn’t. She cleaned her room.', 'Yes, she cleaned her room.', 'No, she didn’t. She baked cookies.', 'Yes, she do.'], a: 'A. No, she didn’t. She cleaned her room.', hint: '前後要合理。', steps: ['否定後要接另外一件事。'], trap: 'C 前後矛盾。', where: '本頁「一般動詞過去式三句型」。', needs: ['didn’t'] },
      ]),
      ...group('重組與閱讀', '字序與文章理解', [
        { k: '重組', src: 'DG112E1', stem: 'Unscramble: last / the / . / Grandpa / hospital / was / week / in', a: 'Grandpa was in the hospital last week.', hint: '主詞 + was + 地點 + 時間。', steps: ['Grandpa was 開頭。', 'in the hospital 地點。', 'last week 放最後。'], trap: '時間通常放句尾。', where: '本頁「was 和 were 的使用」。', needs: ['was'] },
        { k: '重組', src: 'DG112E1', stem: 'Unscramble: Where / Tom / last night / ? / was', a: 'Where was Tom last night?', hint: '疑問詞放前面。', steps: ['Where was + 主詞。', '時間放句尾。'], trap: '問號不要漏。', where: '本頁「was 和 were 的使用」。', needs: ['Where'] },
        { k: '閱讀', src: 'DG112E1', stem: 'Read: “Ann: How was the concert? Bo: Lily was late, so we didn’t go. We went to a café and read comics.” (1) Did they see the concert? (2) Who was late?', a: '(1) No, they didn’t. (2) Lily.', hint: 'Find “didn’t go”.', steps: ['didn’t go 表示沒去。', 'Lily was late 直接提到。'], trap: '不要看到 concert 就答 Yes。', where: '本頁「一般動詞過去式三句型」。', needs: ['didn’t'] },
        { k: '聽力字音', src: 'DG112E1', stem: 'Say these words. Which pair starts with different sounds? (A) train – tree (B) grass – glass (C) stop – stay (D) swim – sweet', opts: ['train – tree', 'grass – glass', 'stop – stay', 'swim – sweet'], a: 'B. grass – glass', hint: 'gr 和 gl 不同。', steps: ['train 和 tree 都是 tr。', 'grass 是 gr，glass 是 gl。'], trap: '不要只看第一個字母。', where: '本頁「聽力常考子音群」。', needs: ['子音群'] },
      ]),
    ],
  },

  'eng-u3': {
    gaps: [
      { title: '位置介系詞圖像記憶', body: `- next to：在旁邊\n- across from：在對面\n- between A and B：在 A 和 B 之間\n- in front of：在前面\n- behind：在後面\n- on the corner of：在轉角\n\n地圖題要先站在題目給的方向，再判斷左右。Turn left／right 和 go straight 都要配合路線。` },
      { title: '問路句型', body: `- Excuse me, **how do I get to** the post office?\n- **Where is** the bank? It’s next to the school.\n- **Is there** a park near here? Yes, there is. / No, there isn’t.\n\nThere is 接單數，There are 接複數。Go straight for two blocks. Turn right at the corner.` },
      { title: '地點單字配對', body: `museum（博物館）、movie theater（電影院）、train station（火車站）、bookstore（書店）、restaurant（餐廳）、library（圖書館）、post office（郵局）、hospital（醫院）、supermarket（超市）、park（公園）。\n\n看到句子要先判斷做什麼事，才能選地點：watch a movie → movie theater；borrow books → library。` },
    ],
    qs: [
      ...group('問路句型', '問答和指路', [
        { k: '選擇', stem: 'A: Excuse me, ______ do I get to the zoo? B: Take Bus 5.', opts: ['what', 'where', 'how', 'when'], a: 'C. how', hint: '問怎麼去。', steps: ['回答是交通方式。', '問句要用 how。'], trap: 'where 問地點，不是問方法。', where: '本頁「問路句型」。', needs: ['how do I get to'] },
        { k: '選擇', stem: 'A: Is there a bank near here? B: ______', opts: ['Yes, there is.', 'Yes, it is.', 'No, there aren’t.', 'Yes, I am.'], a: 'A. Yes, there is.', hint: 'there is 問，there is 答。', steps: ['主詞 a bank 是單數。', '肯定答 Yes, there is.'], trap: 'aren’t 用於複數。', where: '本頁「問路句型」。', needs: ['Is there'] },
        { k: '選擇', stem: 'There ______ two parks in my town.', opts: ['is', 'are', 'am', 'be'], a: 'B. are', hint: '後面是複數。', steps: ['two parks 是複數。', '用 are。'], trap: '就近看名詞。', where: '知識點 There is / There are。', needs: ['There are'] },
        { k: '重組', src: 'DG112E1', stem: 'Unscramble: the / to / do / get / How / station / I / ?', a: 'How do I get to the station?', hint: '句型固定。', steps: ['How do I get to + 地點。'], trap: 'get 後面要有 to。', where: '本頁「問路句型」。', needs: ['how do I get to'] },
      ]),
      ...group('地圖判讀', '位置介系詞', [
        { k: '選擇', stem: 'The bakery is ______ the bank and the school. (The bakery is in the middle.)', opts: ['next', 'between', 'across', 'behind'], a: 'B. between', hint: '在兩者之間。', steps: ['between A and B。'], trap: 'next 要接 to。', where: '本頁「位置介系詞」。', needs: ['between'] },
        { k: '選擇', stem: 'The park is on the other side of the street from the hospital. It’s ______ the hospital.', opts: ['next to', 'across from', 'behind', 'in'], a: 'B. across from', hint: '在對面。', steps: ['隔著馬路在另一邊。'], trap: 'next to 是旁邊。', where: '本頁「位置介系詞」。', needs: ['across from'] },
        { k: '閱讀', stem: 'Read: “Go straight for one block. Turn left. The museum is on your right, next to the bookstore.” Where is the museum after you turn left?', a: 'On your right, next to the bookstore.', hint: '依序讀指令。', steps: ['先直走一個街區。', '左轉。', '博物館在右手邊。'], trap: '不要把 Turn left 和 on your right 混用。', where: '知識點「問路和指路的說法」。', needs: ['Turn left'] },
        { k: '選擇', stem: 'Which means「向右轉」?', opts: ['Go straight', 'Turn right', 'Turn left', 'Go back'], a: 'B. Turn right', hint: 'right 是右。', steps: ['Turn right 表示右轉。'], trap: 'on your right 表示在你的右邊。', where: '知識點「問路和指路的說法」。', needs: ['Turn right'] },
      ]),
      ...group('地點與交通', '地點單字和 by/on', [
        { k: '選擇', stem: 'I want to borrow some books. I should go to the ______.', opts: ['library', 'hospital', 'museum', 'restaurant'], a: 'A. library', hint: 'borrow books。', steps: ['借書去圖書館。'], trap: 'bookstore 是買書。', where: '本頁「地點單字配對」。', needs: ['library'] },
        { k: '選擇', src: 'DG112E1', stem: 'Dad bought two tickets and popcorn for the new film. We were at the ______.', opts: ['movie theater', 'train station', 'hospital', 'post office'], a: 'A. movie theater', hint: 'film 和 popcorn。', steps: ['看電影在電影院。'], trap: 'movie 和 theater 要連起來。', where: '本頁「地點單字配對」。', needs: ['movie theater'] },
        { k: '選擇', stem: 'They go to Tainan ______ train.', opts: ['on', 'by', 'in', 'at'], a: 'B. by', hint: 'by + 交通工具。', steps: ['by train、by bus、by MRT。'], trap: 'on foot 例外。', where: '知識點「交通工具的說法」。', needs: ['by'] },
        { k: '選擇', stem: 'A: ______ is the post office? B: It’s next to the bank.', opts: ['What', 'Where', 'Who', 'When'], a: 'B. Where', hint: '回答地點。', steps: ['next to the bank 是位置。'], trap: '要從回答反推問句。', where: '本頁「問路句型」。', needs: ['Where'] },
        { k: '寫作', stem: 'Write one sentence: Tell a friend how to get to your school.', a: 'Example: Go straight for two blocks and turn right. My school is on your left.', hint: '用祈使句。', steps: ['動詞放句首。', '指出轉彎和位置。'], trap: '指路不用 You will go。', where: '本頁「問路句型」。', needs: ['Go straight'] },
        { k: '閱讀', stem: 'Read: “There is a supermarket near my home. It’s across from a park. There are many trees in the park.” (1) What is across from the park? (2) Are there trees in the park?', a: '(1) A supermarket. (2) Yes, there are.', hint: 'Scan the text.', steps: ['第一、二句提到超市。', 'many trees 表示有。'], trap: 'are 配 trees 複數。', where: '知識點 There is / There are。', needs: ['There are'] },
      ]),
    ],
  },

  'eng-u4': {
    gaps: [
      { title: '生病句型', body: `- What’s wrong with you? I have a headache / a toothache / a cold / a fever.\n- I feel sick. My stomach hurts.\n- You should see a doctor and drink more water.\n- You shouldn’t eat too much candy.\n\n句型：should + 動詞原形；shouldn’t + 動詞原形。不要加 to。` },
      { title: '可數和不可數', body: `| 可數（可加 s） | 不可數 |\n| :--- | :--- |\n| apple, egg, banana, sandwich | water, milk, rice, bread, juice |\n\n- How many + 複數名詞：How many eggs do you need?\n- How much + 不可數：How much milk do you drink?\n- a glass of water、a bowl of rice、a piece of cake 都是量詞。` },
      { title: '喜好和建議的回答', body: `- What do you want to eat? I want some rice.\n- Would you like some juice? Yes, please. / No, thanks.\n- It’s healthy／unhealthy to eat too much fried food.\n\n表示「不要吃太多」用 too much（不可數）或 too many（可數）。` },
    ],
    qs: [
      ...group('健康表達', '生病與建議', [
        { k: '選擇', stem: 'A: What’s wrong with Amy? B: She ______ a toothache.', opts: ['has', 'have', 'is', 'do'], a: 'A. has', hint: 'She + has。', steps: ['生病用 have。', '第三人稱單數變 has。'], trap: '不要用 is。', where: '本頁「生病句型」。', needs: ['toothache'] },
        { k: '選擇', stem: 'You have a fever. You should ______ some rest.', opts: ['take', 'took', 'taking', 'takes'], a: 'A. take', hint: 'should + 原形。', steps: ['should 後面用原形。'], trap: 'should 不加 to，也不變 s。', where: '本頁「生病句型」。', needs: ['should'] },
        { k: '選擇', stem: 'You ______ eat too much candy. It’s bad for your teeth.', opts: ['should', 'shouldn’t', 'are', 'can’t to'], a: 'B. shouldn’t', hint: '不好就不要吃。', steps: ['後半句說明對牙齒不好。', '所以用否定建議。'], trap: 'can’t to 文法錯誤。', where: '本頁「生病句型」。', needs: ['shouldn’t'] },
        { k: '配對', stem: 'Match: (1) I have a cold. (2) My stomach hurts. (3) I have a toothache. A. You should see a dentist. B. You should drink warm water and rest. C. You shouldn’t eat too much.', a: '(1) B; (2) C; (3) A', hint: '症狀對建議。', steps: ['感冒要休息、喝水。', '肚子痛不要吃太多。', '牙痛要看牙醫。'], trap: 'dentist 專指牙醫。', where: '本頁「生病句型」。', needs: ['dentist'] },
      ]),
      ...group('食物數量', 'How many 和 How much', [
        { k: '選擇', stem: '______ eggs do you want?', opts: ['How many', 'How much', 'What time', 'Where'], a: 'A. How many', hint: 'eggs 是可數複數。', steps: ['可數名詞用 How many。'], trap: 'How much 接不可數。', where: '本頁「可數和不可數」。', needs: ['How many'] },
        { k: '選擇', stem: '______ milk do you drink every day?', opts: ['How many', 'How much', 'How old', 'How far'], a: 'B. How much', hint: 'milk 不可數。', steps: ['液體多為不可數。'], trap: 'milk 不能加 s。', where: '本頁「可數和不可數」。', needs: ['How much'] },
        { k: '選擇', stem: 'I’d like a ______ of water, please.', opts: ['piece', 'bowl', 'glass', 'slice'], a: 'C. glass', hint: '水要用杯子。', steps: ['a glass of water。', 'a bowl of rice 用於飯。'], trap: '量詞要配合食物。', where: '本頁「可數和不可數」。', needs: ['glass'] },
        { k: '選擇', stem: 'Which word is uncountable?', opts: ['apple', 'banana', 'rice', 'egg'], a: 'C. rice', hint: '不能一粒一粒數著用。', steps: ['rice 不可數。'], trap: '「米」雖有顆粒，英文不可數。', where: '知識點「可數名詞與不可數名詞」。', needs: ['rice'] },
      ]),
      ...group('閱讀與應用', '建議和文章', [
        { k: '閱讀', stem: 'Read: “Sam eats a lot of fried chicken. He drinks soda every day. He doesn’t like vegetables. Now he feels tired.” What should Sam do?', opts: ['Eat more vegetables and drink water', 'Eat more fried chicken', 'Drink more soda', 'Stay up late'], a: 'A. Eat more vegetables and drink water', hint: '找不健康的習慣。', steps: ['文章說油炸和汽水多。', '建議改成蔬菜和水。'], trap: '答案要能解決文中問題。', where: '本頁「生病句型」。', needs: ['should'] },
        { k: '選擇', stem: 'A: Would you like some juice? B: ______', opts: ['Yes, please.', 'Yes, I am.', 'No, I don’t like to.', 'It’s juice.'], a: 'A. Yes, please.', hint: '禮貌回應。', steps: ['接受用 Yes, please.', '不用 No, thanks.'], trap: 'Would you 和 Do you 回答習慣不同。', where: '本頁「喜好和建議的回答」。', needs: ['Would you like'] },
        { k: '選擇', stem: 'You eat too ______ cookies.', opts: ['much', 'many', 'more', 'most'], a: 'B. many', hint: 'cookies 可數。', steps: ['可數複數用 too many。'], trap: 'too much 接不可數。', where: '本頁「喜好和建議的回答」。', needs: ['too'] },
        { k: '重組', src: 'DG112E1', stem: 'Unscramble: drink / should / more / You / water / .', a: 'You should drink more water.', hint: '主詞 + should + 動詞。', steps: ['You should。', 'drink more water。'], trap: 'should 後面不加 to。', where: '本頁「生病句型」。', needs: ['should'] },
        { k: '寫作', stem: 'Write one healthy tip in English.', a: 'Example: You should sleep early and drink more water.', hint: '用 should。', steps: ['用 should + 原形。', '提出合理建議。'], trap: '不要寫 should to。', where: '本頁「生病句型」。', needs: ['should'] },
        { k: '選擇', stem: 'Which food group has fish, eggs and beans?', opts: ['Vegetables', 'Protein foods', 'Fruits', 'Dairy'], a: 'B. Protein foods', hint: '豆魚蛋肉類。', steps: ['魚、蛋、豆提供蛋白質。'], trap: 'Beans 也算 protein。', where: '核心觀念 4：六大類食物。', needs: ['Protein'] },
      ]),
    ],
  },
};
