import { group } from './_h.mjs';

export default {
  'eng-u5': {
    gaps: [
      { title: '節慶介系詞', body: `- **on** + 特定日子：on Christmas Day, on New Year’s Eve, on October 31st\n- **in** + 月份、季節：in December, in winter\n- **at** + 特定時段：at Christmas（聖誕期間）\n\n節慶動作：eat mooncakes（吃月餅）、watch fireworks（看煙火）、give red envelopes（給紅包）、go trick-or-treating（萬聖節討糖）。` },
      { title: '序數和月份', body: `first（1st）、second（2nd）、third（3rd）、fourth（4th）、fifth（5th）、eighth（8th）、ninth（9th）、twelfth（12th）、twentieth（20th）。\n\n日期表達：My birthday is on May 2nd. When is your birthday? It’s in June.\n\n問節日時間用 When is...? 回答月份用 in，回答日期用 on。` },
      { title: '祝福語和文化差異', body: `- Happy New Year! Merry Christmas! Happy Mother’s Day!\n- Thank you. You too.\n\nDragon Boat Festival 吃粽子（rice dumplings）；Moon Festival 賞月、吃月餅；Lantern Festival 猜燈謎；Thanksgiving 吃火雞（turkey）。回答別人祝福時，說 You too 比較自然。` },
    ],
    qs: [
      ...group('節慶字彙', '活動和食物配對', [
        { k: '配對', stem: 'Match: (1) Moon Festival (2) Dragon Boat Festival (3) Thanksgiving (4) Lunar New Year. A. turkey B. mooncakes C. red envelopes D. rice dumplings', a: '(1) B; (2) D; (3) A; (4) C', hint: '想節慶食物。', steps: ['中秋吃月餅。', '端午吃粽子。', '感恩節吃火雞。', '過年發紅包。'], trap: 'rice dumplings 就是粽子。', where: '本頁「祝福語和文化差異」。', needs: ['mooncakes'] },
        { k: '選擇', stem: 'People often watch fireworks on ______.', opts: ['New Year’s Eve', 'Teacher’s Day', 'Mother’s Day', 'Children’s Day only'], a: 'A. New Year’s Eve', hint: '跨年看煙火。', steps: ['跨年常放煙火。'], trap: '要注意節日習俗。', where: '本頁「節慶介系詞」。', needs: ['fireworks'] },
        { k: '選擇', stem: 'On Halloween, children say “______!”', opts: ['Merry Christmas', 'Trick or treat', 'Happy New Year', 'Thank you'], a: 'B. Trick or treat', hint: '討糖。', steps: ['萬聖節的固定說法。'], trap: 'Halloween 在 October 31st。', where: '本頁「節慶介系詞」。', needs: ['Halloween'] },
        { k: '閱讀', stem: 'Read: “The Lantern Festival comes after Lunar New Year. People make lanterns and guess riddles. They eat sweet rice balls.” What do people eat at the Lantern Festival?', a: 'Sweet rice balls.', hint: 'Find “eat”.', steps: ['文章最後一句說明。'], trap: '不要選燈籠。', where: '本頁「祝福語和文化差異」。', needs: ['Lantern Festival'] },
      ]),
      ...group('介系詞與日期', 'in、on 與序數', [
        { k: '選擇', stem: 'Christmas is ______ December.', opts: ['on', 'in', 'at', 'to'], a: 'B. in', hint: '月份用 in。', steps: ['月份用 in。'], trap: '有具體日期才用 on。', where: '本頁「節慶介系詞」。', needs: ['in December'] },
        { k: '選擇', stem: 'My birthday is ______ June 5th.', opts: ['in', 'on', 'at', 'of'], a: 'B. on', hint: '有日期。', steps: ['具體日期用 on。'], trap: '只有 June 才用 in。', where: '本頁「序數和月份」。', needs: ['on'] },
        { k: '填充', stem: 'Write the ordinal numbers: 1 → ______, 3 → ______, 8 → ______, 12 → ______.', a: 'first; third; eighth; twelfth', hint: '不規則要記。', steps: ['first、second、third 特殊。', 'eight 加 h 成 eighth。', 'twelve 變 twelfth。'], trap: '不要寫 twelveth。', where: '本頁「序數和月份」。', needs: ['eighth'] },
        { k: '選擇', stem: 'A: When is Teacher’s Day? B: ______', opts: ['It’s on September 28th.', 'It’s at school.', 'It’s very happy.', 'Yes, it is.'], a: 'A. It’s on September 28th.', hint: 'When 問時間。', steps: ['答案要有日期。'], trap: 'Where 才回答地點。', where: '本頁「序數和月份」。', needs: ['When'] },
      ]),
      ...group('情境應答', '祝福和卡片', [
        { k: '選擇', stem: 'A: Merry Christmas! B: ______', opts: ['Merry Christmas to you, too!', 'I’m fine.', 'How are you?', 'You’re welcome.'], a: 'A. Merry Christmas to you, too!', hint: '回祝對方。', steps: ['對方祝福，要回應祝福。'], trap: 'You’re welcome 回答 Thank you。', where: '本頁「祝福語和文化差異」。', needs: ['Merry Christmas'] },
        { k: '寫作', stem: 'Write a short card to your mom for Mother’s Day. (1–2 sentences)', a: 'Example: Happy Mother’s Day, Mom! Thank you for taking care of me.', hint: '祝福 + 感謝。', steps: ['先寫祝福。', '再寫感謝。'], trap: 'Mother’s 要有 ’s。', where: '核心觀念 4：英文節慶卡片。', needs: ['Happy'] },
        { k: '重組', src: 'DG112E1', stem: 'Unscramble: moon / family / the / My / watches / .', a: 'My family watches the moon.', hint: 'My family 當單數。', steps: ['主詞 My family。', '動詞 watches。', '受詞 the moon。'], trap: 'family 作整體時常用單數。', where: '本頁「節慶介系詞」。', needs: ['family'] },
        { k: '選擇', stem: 'People give red envelopes on ______.', opts: ['Lunar New Year', 'Halloween', 'Thanksgiving', 'Christmas in the U.S.'], a: 'A. Lunar New Year', hint: '壓歲錢。', steps: ['農曆年發紅包。'], trap: 'envelope 指信封。', where: '本頁「祝福語和文化差異」。', needs: ['red envelopes'] },
        { k: '閱讀', src: 'DG112E1', stem: 'Read: “Last Moon Festival, my cousins came to my home. We had a barbecue and ate pomelos. We didn’t sleep early.” (1) What did they do? (2) Did they sleep early?', a: '(1) They had a barbecue and ate pomelos. (2) No, they didn’t.', hint: 'Past tense.', steps: ['找動作。', 'didn’t sleep early 回答否定。'], trap: '要配合過去式回答。', where: '核心觀念 1：台灣傳統節慶。', needs: ['Moon Festival'] },
        { k: '選擇', stem: 'Which one is a Western festival?', opts: ['Dragon Boat Festival', 'Thanksgiving', 'Lantern Festival', 'Moon Festival'], a: 'B. Thanksgiving', hint: '火雞。', steps: ['感恩節來自美加。'], trap: '其餘都是華人傳統節慶。', where: '核心觀念 2：西方節慶。', needs: ['Thanksgiving'] },
      ]),
    ],
  },

  'eng-u6': {
    gaps: [
      { title: '自然發音和子音群', body: `magic e 讓前面的母音發長音：cap → cape，kit → kite，hop → hope。\n\n常見子音群：bl（blue）、cl（class）、fl（flag）、gl（glass）、pl（play）、br（brown）、cr（cry）、dr（drive）、fr（frog）、gr（green）、tr（tree）、sk（skate）、sm（small）、sn（snow）、sp（spoon）、st（stop）、sw（swim）。\n\n聽力題可以先想字的第二個音。` },
      { title: '閱讀測驗三步驟', body: `1. 先看問題，圈出 Who、Where、When、What。\n2. 再讀文章，找到關鍵字所在句。\n3. 選項要對得上，時態也要一致。\n\n如果文章有兩個人名，要注意誰做了什麼；對話裡的 He、She、They 也要對應回人名。` },
      { title: '句子重組和標點', body: `重組題先判斷句型：\n\n- 直述句：主詞 + 動詞 + 其他，句尾句點。\n- 問句：疑問詞 + 助動詞 / be + 主詞 + 其他，句尾問號。\n- 句首大寫是線索。\n\n重組完要讀一次，看動詞和主詞有沒有配對。` },
    ],
    qs: [
      ...group('自然發音', 'magic e 和子音群', [
        { k: '選擇', stem: 'Which word has a long vowel sound?', opts: ['cap', 'cape', 'kit', 'hop'], a: 'B. cape', hint: '字尾有 magic e。', steps: ['cape 字尾有 e。', 'a 發長音。'], trap: 'e 本身不發音。', where: '本頁「自然發音和子音群」。', needs: ['magic e'] },
        { k: '選擇', src: 'DG112E1', stem: 'Which word begins with the “dr” sound?', opts: ['train', 'dress', 'green', 'clock'], a: 'B. dress', hint: 'dr。', steps: ['dress 開頭是 dr。', 'train 開頭是 tr。'], trap: 'tr 和 dr 很像。', where: '本頁「自然發音和子音群」。', needs: ['子音群'] },
        { k: '選擇', src: 'DG112E1', stem: 'Which group has the same beginning sound?', opts: ['stop, stay, star', 'stop, spoon, skate', 'swim, glass, class', 'green, grass, dress'], a: 'A. stop, stay, star', hint: 'st。', steps: ['三個都以 st 開頭。'], trap: 'spoon 是 sp，skate 是 sk。', where: '本頁「自然發音和子音群」。', needs: ['子音群'] },
      ]),
      ...group('字彙和文法', '字首字尾與轉折詞', [
        { k: '選擇', stem: '“unhappy” means ______.', opts: ['very happy', 'not happy', 'happy again', 'happy too'], a: 'B. not happy', hint: 'un- 表否定。', steps: ['un- 有「不」的意思。'], trap: 'un- 不是加強語氣。', where: '知識點「字首與字尾」。', needs: ['un-'] },
        { k: '選擇', stem: 'A person who teaches is a ______.', opts: ['teach', 'teacher', 'teaching', 'teaches'], a: 'B. teacher', hint: '-er 表人。', steps: ['teach + er = teacher。'], trap: '不是所有職業都加 er，例如 doctor。', where: '知識點「字首與字尾」。', needs: ['-er'] },
        { k: '選擇', stem: 'I like cats, ______ my sister likes dogs.', opts: ['and', 'but', 'so', 'because'], a: 'B. but', hint: '前後對比。', steps: ['喜歡的東西不同。', '用 but 表示轉折。'], trap: 'because 表原因。', where: '核心觀念 4：轉折詞。', needs: ['but'] },
        { k: '選擇', stem: 'It was raining, ______ we stayed home.', opts: ['so', 'but', 'or', 'before'], a: 'A. so', hint: '因此。', steps: ['下雨是原因。', '待在家是結果。'], trap: 'because 要放在原因前面。', where: '核心觀念 4：轉折詞。', needs: ['so'] },
      ]),
      ...group('閱讀理解', '找關鍵資訊', [
        { k: '閱讀', src: 'DG112E1', stem: 'Read: “Kate: Where were you yesterday? Leo: I was at the zoo with my family. We saw pandas. Kate: Did you see tigers? Leo: No, we didn’t. They were sleeping.” (1) Where was Leo? (2) Did he see tigers?', a: '(1) He was at the zoo. (2) No, he didn’t.', hint: 'Scan for question words.', steps: ['第一個回答提到地點。', 'No, we didn’t 回答第二題。'], trap: '回答的主詞要改成 he。', where: '本頁「閱讀測驗三步驟」。', needs: ['Scan'] },
        { k: '閱讀', stem: 'Read: “The new library opens at 9:00. It closes at 5:00 on Sundays. It’s next to the park.” When does it close on Sundays?', a: 'At 5:00.', hint: 'Find “Sundays”.', steps: ['找到 Sundays 的句子。', 'closes at 5:00。'], trap: 'opens 和 closes 要分清楚。', where: '本頁「閱讀測驗三步驟」。', needs: ['library'] },
        { k: '選擇', stem: 'You want to find a phone number in a long list. You should ______.', opts: ['skim', 'scan', 'read every word', 'stop reading'], a: 'B. scan', hint: '找特定資料。', steps: ['scan 是快速搜尋特定資訊。', 'skim 看大意。'], trap: '兩個字很像，要記用途。', where: '核心觀念 1：閱讀雙武器。', needs: ['Scan'] },
        { k: '選擇', stem: 'Read: “The winter here is very cold. It’s freezing!” “freezing” means ______.', opts: ['very hot', 'very cold', 'very rainy', 'very sunny'], a: 'B. very cold', hint: '上下文線索。', steps: ['前一句提到 very cold。'], trap: '猜字要回到句子。', where: '核心觀念 3：上下文線索。', needs: ['freezing'] },
      ]),
      ...group('句子重組', '字序', [
        { k: '重組', src: 'DG112E1', stem: 'Unscramble: your / Were / at / parents / ? / beach / the', a: 'Were your parents at the beach?', hint: 'Were 開頭。', steps: ['Be 動詞放前。', '主詞 your parents。', '地點放最後。'], trap: '大寫開頭和問號是線索。', where: '本頁「句子重組和標點」。', needs: ['重組'] },
        { k: '重組', src: 'DG112E1', stem: 'Unscramble: played / and / I / . / Tina / badminton / school / at', a: 'Tina and I played badminton at school.', hint: '別人放前面。', steps: ['主詞 Tina and I。', '動詞 played。', '地點 at school。'], trap: '禮貌上 I 放後面。', where: '本頁「句子重組和標點」。', needs: ['重組'] },
        { k: '寫作', src: 'DG112E1', stem: 'Write about last Saturday: Where were you, and what did you do?', a: 'Example: I was at my cousin’s home. We made pizza together.', hint: '時態一致。', steps: ['第一句用 was。', '第二句用過去式動詞。'], trap: 'Where 要回答地點。', where: '本頁「閱讀測驗三步驟」。', needs: ['were'] },
      ]),
    ],
  },

  'eng-u7': {
    gaps: [
      { title: '未來式兩種句型', body: `- **be going to + 原形**：I am going to visit my aunt tomorrow. 已有計畫。\n- **will + 原形**：It will rain tomorrow. 預測或當下決定。\n\n否定：I’m not going to swim. / He won’t go.\n\n問句：Are you going to study? Yes, I am. / Will he come? Yes, he will.` },
      { title: '未來時間詞', body: `tomorrow、next week、next month、this weekend、in the future、someday。\n\n看到這些詞，動詞就要用未來式。問「長大想做什麼」：What do you want to be? I want to be a pilot. 不要漏掉 a / an。an 用於母音開頭：an engineer, an artist。` },
      { title: '職業和工作內容', body: `| 職業 | 工作 |\n| :--- | :--- |\n| doctor / nurse | help sick people |\n| teacher | teach students |\n| pilot | fly airplanes |\n| chef / cook | cook food |\n| vet | take care of animals |\n| police officer | keep people safe |\n| firefighter | put out fires |\n| farmer | grow food |` },
    ],
    qs: [
      ...group('未來式', 'will 和 be going to', [
        { k: '選擇', stem: 'I ______ going to visit my grandma next Sunday.', opts: ['am', 'is', 'are', 'will'], a: 'A. am', hint: 'I + am。', steps: ['I am going to。'], trap: 'will 不能和 going to 連用。', where: '本頁「未來式兩種句型」。', needs: ['going to'] },
        { k: '選擇', stem: 'She will ______ a new bike next year.', opts: ['buy', 'buys', 'bought', 'buying'], a: 'A. buy', hint: 'will + 原形。', steps: ['will 後面用原形。'], trap: '第三人稱不加 s。', where: '本頁「未來式兩種句型」。', needs: ['will'] },
        { k: '選擇', stem: 'A: Are you going to play basketball tomorrow? B: ______', opts: ['Yes, I am.', 'Yes, I do.', 'Yes, I did.', 'Yes, I will be.'], a: 'A. Yes, I am.', hint: 'Are 問，am 答。', steps: ['Be 動詞問句用 be 回答。'], trap: 'did 是過去。', where: '本頁「未來式兩種句型」。', needs: ['Are you going to'] },
        { k: '選擇', stem: 'Look at those dark clouds. It ______ rain soon.', opts: ['is going to', 'was', 'did', 'does'], a: 'A. is going to', hint: '看到徵兆。', steps: ['有明確徵兆，常用 be going to。'], trap: '不要用過去式。', where: '本頁「未來式兩種句型」。', needs: ['going to'] },
        { k: '選擇', stem: 'He ______ go to the party tomorrow. He’s sick.', opts: ['won’t', 'don’t', 'isn’t', 'didn’t'], a: 'A. won’t', hint: 'will not。', steps: ['tomorrow 是未來。', 'will not 縮寫 won’t。'], trap: 'didn’t 是過去。', where: '本頁「未來式兩種句型」。', needs: ['won’t'] },
      ]),
      ...group('時態判別', '時間詞線索', [
        { k: '選擇', src: 'DG112E1', stem: 'Which sentence is correct?', opts: ['I played tennis tomorrow.', 'I will play tennis tomorrow.', 'I play tennis yesterday.', 'I will played tennis.'], a: 'B. I will play tennis tomorrow.', hint: '時間詞。', steps: ['tomorrow 用未來。'], trap: 'will 後面只能原形。', where: '知識點「未來時間詞」。', needs: ['tomorrow'] },
        { k: '填充', stem: 'Fill in with past, present or future: (1) I read every day. (2) I read last night. (3) I will read tonight.', a: '(1) present; (2) past; (3) future', hint: '看時間詞。', steps: ['every day 現在。', 'last night 過去。', 'will 未來。'], trap: 'read 的過去式同形不同音。', where: '知識點「未來時間詞」。', needs: ['future'] },
      ]),
      ...group('職業應用', '職業與工作配對', [
        { k: '配對', stem: 'Match: (1) vet (2) pilot (3) firefighter (4) chef. A. flies airplanes B. takes care of animals C. cooks food D. puts out fires', a: '(1) B; (2) A; (3) D; (4) C', hint: '想工作內容。', steps: ['vet 是獸醫。', 'pilot 是飛行員。', 'firefighter 是消防員。', 'chef 是廚師。'], trap: 'vet 不是 veteran。', where: '本頁「職業和工作內容」。', needs: ['pilot'] },
        { k: '選擇', stem: 'I want to be ______ engineer.', opts: ['a', 'an', 'the', '不用'], a: 'B. an', hint: 'engineer 母音開頭。', steps: ['母音音開頭用 an。'], trap: '看發音，不是看字母。', where: '本頁「未來時間詞」。', needs: ['an'] },
        { k: '選擇', stem: 'Who takes care of sick people in the hospital?', opts: ['Nurse', 'Pilot', 'Farmer', 'Cook'], a: 'A. Nurse', hint: 'hospital。', steps: ['護理師在醫院照顧病人。'], trap: '不要只看單字長相。', where: '本頁「職業和工作內容」。', needs: ['nurse'] },
        { k: '寫作', stem: 'Write two sentences about your dream job.', a: 'Example: I want to be a vet. I will take care of animals.', hint: 'want to be + will。', steps: ['用 want to be。', '用 will 寫未來會做的事。'], trap: '要有 a / an。', where: '知識點「I want to be a / an」。', needs: ['want to be'] },
        { k: '閱讀', stem: 'Read: “Mia loves drawing. She is going to take art classes this summer. She wants to be an artist.” (1) What is Mia going to do? (2) What does she want to be?', a: '(1) She is going to take art classes. (2) An artist.', hint: 'Find going to.', steps: ['第二句回答(1)。', '第三句回答(2)。'], trap: 'artist 前用 an。', where: '本頁「未來式兩種句型」。', needs: ['going to'] },
        { k: '重組', src: 'DG112E1', stem: 'Unscramble: going / What / you / to / are / do / ? / tomorrow', a: 'What are you going to do tomorrow?', hint: '問句句型。', steps: ['What 放句首。', 'are you going to。', 'do tomorrow。'], trap: 'do 不能少。', where: '本頁「未來式兩種句型」。', needs: ['going to'] },
        { k: '選擇', stem: 'Which one means「將來」?', opts: ['yesterday', 'in the future', 'last year', 'every day'], a: 'B. in the future', hint: 'future 是未來。', steps: ['in the future 表將來。'], trap: '其他是過去或習慣。', where: '本頁「未來時間詞」。', needs: ['in the future'] },
      ]),
    ],
  },

  'eng-u8': {
    gaps: [
      { title: '比較級和最高級規則', body: `| 規則 | 比較級 | 最高級 |\n| :--- | :--- | :--- |\n| 一般加 | tall → taller | tallest |\n| 字尾 e | nice → nicer | nicest |\n| 短母音加字尾 | big → bigger | biggest |\n| y 變 i | happy → happier | happiest |\n| 長字 | more beautiful | most beautiful |\n| 不規則 | good → better, bad → worse | best, worst |\n\n比較級接 than；最高級前加 the。` },
      { title: '比較句怎麼造', body: `- A is taller than B.\n- Which is bigger, a dog or a cat? A dog is bigger.\n- Who is the tallest in your class?\n- as + 原級 + as 表示一樣：Tom is as tall as Ben.\n\n只有兩個比較用比較級；三個以上用最高級。much 可加強比較級：much bigger。` },
      { title: '讀比較圖表', body: `圖表題先看單位，再比較數字：\n\n| Name | Age | Height |\n| :--- | :--- | :--- |\n| Ann | 12 | 150 cm |\n| Bo | 11 | 155 cm |\n| Cal | 13 | 148 cm |\n\nBo is taller than Ann. Cal is the oldest. 句子要根據表格，不要憑感覺回答。` },
    ],
    qs: [
      ...group('比較級', '比較級變化和 than', [
        { k: '選擇', stem: 'An elephant is ______ than a horse.', opts: ['big', 'bigger', 'biggest', 'the biggest'], a: 'B. bigger', hint: 'than。', steps: ['than 前用比較級。', 'big 要重複 g 再加 er。'], trap: 'biger 拼錯。', where: '本頁「比較級和最高級規則」。', needs: ['bigger'] },
        { k: '選擇', stem: 'This book is ______ interesting than that one.', opts: ['more', 'most', 'much', 'very'], a: 'A. more', hint: '長字加 more。', steps: ['interesting 是長字。'], trap: '不能加 er。', where: '本頁「比較級和最高級規則」。', needs: ['more'] },
        { k: '填充', stem: 'Write the comparative: happy → ______, nice → ______, good → ______.', a: 'happier; nicer; better', hint: '變化不同。', steps: ['y 改 i 加 er。', 'nice 加 r。', 'good 不規則。'], trap: '不能寫 gooder。', where: '本頁「比較級和最高級規則」。', needs: ['better'] },
        { k: '選擇', stem: 'My bag is much ______ than yours.', opts: ['heavy', 'heavier', 'heaviest', 'most heavy'], a: 'B. heavier', hint: 'much 加強比較級。', steps: ['much + 比較級。', 'y 改 i。'], trap: 'very 才接原級。', where: '本頁「比較句怎麼造」。', needs: ['much'] },
      ]),
      ...group('最高級', 'the + 最高級', [
        { k: '選擇', stem: 'Mount Everest is ______ mountain in the world.', opts: ['tall', 'taller', 'the tallest', 'tallest'], a: 'C. the tallest', hint: 'in the world。', steps: ['三者以上比較用最高級。', '前面要有 the。'], trap: '不要漏 the。', where: '本頁「比較級和最高級規則」。', needs: ['the tallest'] },
        { k: '選擇', stem: 'She is the ______ student in the class.', opts: ['good', 'better', 'best', 'most good'], a: 'C. best', hint: '不規則。', steps: ['good 的最高級是 best。'], trap: 'most good 不存在。', where: '本頁「比較級和最高級規則」。', needs: ['best'] },
        { k: '選擇', stem: 'This is the ______ movie I have seen.', opts: ['bad', 'worse', 'worst', 'baddest'], a: 'C. worst', hint: '不規則。', steps: ['bad → worse → worst。'], trap: 'baddest 不是標準用法。', where: '本頁「比較級和最高級規則」。', needs: ['worst'] },
        { k: '選擇', stem: 'Which sentence is correct?', opts: ['Tom is the tallest than Ben.', 'Tom is taller than Ben.', 'Tom is more tall than Ben.', 'Tom taller is Ben.'], a: 'B. Tom is taller than Ben.', hint: 'than 配比較級。', steps: ['tall 是短字。', '比較兩人用 taller than。'], trap: 'tallest 不和 than 一起。', where: '本頁「比較句怎麼造」。', needs: ['than'] },
      ]),
      ...group('圖表判讀', '由表格造句', [
        { k: '閱讀', stem: 'Table: Ann 12 years old, 150 cm. Bo 11 years old, 155 cm. Cal 13 years old, 148 cm. (1) Who is the tallest? (2) Who is the youngest? (3) Is Cal older than Ann?', a: '(1) Bo. (2) Bo. (3) Yes, he is.', hint: '比較數字。', steps: ['身高最大是 155。', '年齡最小是 11。', '13 歲大於 12 歲。'], trap: '不要只看名字順序。', where: '本頁「讀比較圖表」。', needs: ['tallest'] },
        { k: '選擇', stem: 'A bike costs NT$3,000. A skateboard costs NT$1,500. Which sentence is true?', opts: ['The bike is more expensive.', 'The skateboard is more expensive.', 'They cost the same.', 'The bike is cheapest.'], a: 'A. The bike is more expensive.', hint: '比錢。', steps: ['3,000 大於 1,500。'], trap: 'cheapest 用於三者以上。', where: '本頁「比較句怎麼造」。', needs: ['more expensive'] },
        { k: '選擇', stem: 'Tom is 150 cm. Ben is 150 cm. Tom is ______ Ben.', opts: ['taller than', 'as tall as', 'the tallest', 'shorter than'], a: 'B. as tall as', hint: '一樣高。', steps: ['身高相同用 as + 原級 + as。'], trap: 'as 後面不用比較級。', where: '本頁「比較句怎麼造」。', needs: ['as tall as'] },
        { k: '寫作', stem: 'Write two sentences comparing two animals.', a: 'Example: A tiger is bigger than a cat. A cat is cuter than a tiger.', hint: '用 than。', steps: ['選兩種動物。', '用比較級寫。'], trap: '比較級要配 than。', where: '本頁「比較句怎麼造」。', needs: ['than'] },
        { k: '閱讀', stem: 'Read: “The Nile is one of the longest rivers in the world. The Pacific is the largest ocean. Asia is the biggest continent.” What is the largest ocean?', a: 'The Pacific.', hint: 'Find ocean.', steps: ['第二句回答問題。'], trap: 'continent 是洲。', where: '知識點「世界之最」。', needs: ['the largest'] },
        { k: '重組', src: 'DG112E1', stem: 'Unscramble: than / My / is / your / younger / sister / brother / .', a: 'My sister is younger than your brother.', hint: 'than 連接兩者。', steps: ['主詞 My sister。', 'is younger than。', 'your brother。'], trap: '也可造成 My brother...，要合語意。', where: '本頁「比較句怎麼造」。', needs: ['younger'] },
        { k: '選擇', stem: 'Which word group is correct?', opts: ['thin – thiner – thinest', 'thin – thinner – thinnest', 'thin – more thin – most thin', 'thin – thin – thin'], a: 'B. thin – thinner – thinnest', hint: '短母音重複字尾。', steps: ['thin 字尾 n 要重複。'], trap: '同規則：big、hot、fat。', where: '本頁「比較級和最高級規則」。', needs: ['thinner'] },
      ]),
    ],
  },
};
