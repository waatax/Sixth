# -*- coding: utf-8 -*-
import json
import codecs

questions = []

# ==========================================
# 1. 核心字彙與常用片語 (Questions 1 - 40)
# ==========================================
vocab_data = [
    (1, "The library is very quiet, so please speak in a ______.", ["loud voice", "low whisper", "strange accent", "angry tone"], 1, "句意：圖書館很安靜，所以請用「低聲耳語 (low whisper)」說話。whisper 表示耳語、低語。"),
    (2, "My sister is very ______; she always shares her snacks with her classmates.", ["selfish", "generous", "jealous", "nervous"], 1, "句意：我妹妹很「大方/慷慨 (generous)」，她總是和同學分享點心。selfish 是自私的。"),
    (3, "The weather forecast says it will rain tomorrow, so don't forget to take an ______.", ["envelope", "umbrella", "instrument", "invitation"], 1, "句意：氣象預報說明天會下雨，別忘了帶「雨傘 (umbrella)」。"),
    (4, "Taking the MRT in Taipei is fast, cheap, and very ______.", ["expensive", "dangerous", "convenient", "crowded"], 2, "句意：在台北搭捷運快速、便宜且非常「便利 (convenient)」。"),
    (5, "If you want to stay healthy, you should exercise ______ and eat more vegetables.", ["regularly", "suddenly", "rarely", "carelessly"], 0, "句意：如果你想保持健康，你應該「規律地 (regularly)」運動並多吃蔬菜。"),
    (6, "The final exam is coming soon, so the students are studying with great ______.", ["boredom", "effort", "anger", "silence"], 1, "句意：期末考快到了，所以學生們正非常「努力 (effort)」地讀書。with effort 表示努力地。"),
    (7, "Mr. Lin decided to ______ smoking for the sake of his health.", ["give up", "pick up", "turn on", "look for"], 0, "句意：林先生為了健康決定「戒菸 (give up smoking)」。give up 表示放棄、戒除。"),
    (8, "We are all looking forward to ______ our grandparents during the Lunar New Year.", ["visit", "visiting", "visited", "visits"], 1, "句意：我們都非常期待過年期間去「探望 (visiting)」祖父母。片語 look forward to 後面必須接動名詞 (V-ing) 或名詞。"),
    (9, "I couldn't sleep well last night because our neighbor's dog kept ______.", ["barking", "singing", "crying", "talking"], 0, "句意：我昨晚沒睡好，因為鄰居的狗一直「吠叫 (barking)」。bark 表示狗叫；keep + V-ing 表示持續做某事。"),
    (10, "Could you please ______ the light? It is too dark to read in this room.", ["turn off", "turn on", "turn down", "turn over"], 1, "句意：你可以請你「開 (turn on)」燈嗎？這個房間太暗無法閱讀。"),
    (11, "The doctor advised him to reduce his ______ of sugar and salt.", ["intake", "memory", "salary", "opinion"], 0, "句意：醫生建議他減少糖分與鹽分的「攝取量 (intake)」。intake 表示攝取量。"),
    (12, "Taiwan is famous ______ its delicious night market foods and friendly people.", ["at", "for", "with", "in"], 1, "句意：台灣以其美味的夜市小吃和友善的人們而「聞名 (famous for)」。be famous for 為固定片語。"),
    (13, "She felt ______ before giving her first English speech in front of the whole school.", ["confident", "nervous", "relaxed", "sleepy"], 1, "句意：在全校面前進行第一次英文演講前，她感到非常「緊張 (nervous)」。"),
    (14, "Because of the heavy typhoon, the baseball game was ______ until next Saturday.", ["postponed", "destroyed", "created", "discovered"], 0, "句意：因為強烈颱風，棒球比賽被「延期 (postponed)」至下週六。postpone 表示延期、延緩。"),
    (15, "Do you know who ______ the light bulb? It changed the way humans live.", ["invented", "invited", "inspected", "interrupted"], 0, "句意：你知道是誰「發明 (invented)」了電燈泡嗎？它改變了人類生活的方式。"),
    (16, "My mother works at a hospital; she is a dedicated ______ who cares for patients.", ["mechanic", "nurse", "pilot", "carpenter"], 1, "句意：我媽媽在醫院工作，她是一位全心照顧病人的「護理師 (nurse)」。"),
    (17, "Plastic pollution causes serious harm to the marine ______ and sea creatures.", ["environment", "instrument", "furniture", "department"], 0, "句意：塑膠污染對海洋「環境 (environment)」與海洋生物造成嚴重危害。"),
    (18, "Tom was late for school this morning because his alarm clock didn't ______.", ["go off", "go on", "go out", "go up"], 0, "句意：湯姆今天早上上學遲到了，因為他的鬧鐘沒有「響 (go off)」。go off 用於鬧鐘響起或炸彈爆炸。"),
    (19, "The government encourages citizens to ______ garbage to reduce waste.", ["recycle", "repeat", "remember", "receive"], 0, "句意：政府鼓勵市民「回收 (recycle)」垃圾以減少廢棄物。"),
    (20, "Success usually depends ______ hard work and perseverance, not just luck.", ["at", "in", "on", "to"], 2, "句意：成功通常「取決於 (depends on)」努力與毅力，而不僅僅是運氣。depend on 為固定搭配。"),
    (21, "The concert tickets were so popular that they were completely ______ within ten minutes.", ["sold out", "put away", "brought up", "taken off"], 0, "句意：演唱會門票太搶手了，十分鐘內就被「售罄 (sold out)」。"),
    (22, "Excuse me, how much is the bus ______ from Taipei to Taichung?", ["fare", "fee", "bill", "price"], 0, "句意：請問從台北到台中的公車「車資 (fare)」是多少？交通工具的票價、車資使用 fare。"),
    (23, "Students must pay ______ to the teacher's explanation during math class.", ["attention", "money", "visit", "interest"], 0, "句意：上數學課時，學生必須專心「注意 (pay attention to)」老師的解說。pay attention to 為固定片語。"),
    (24, "The price of vegetables has ______ dramatically after the heavy rainstorm.", ["decreased", "increased", "disappeared", "escaped"], 1, "句意：暴雨過後，蔬菜的價格劇烈「上漲 (increased)」。increase 表示增加、上升。"),
    (25, "My grandfather has a good ______; he can still remember what happened 50 years ago.", ["memory", "temperature", "knowledge", "destination"], 0, "句意：我爺爺「記憶力 (memory)」很好，他依然記得 50 年前發生的事情。"),
    (26, "I am not ______ with this new software; could you show me how to use it?", ["popular", "familiar", "satisfied", "pleased"], 1, "句意：我對這套新軟體不「熟悉 (familiar)」，你可以示範怎麼使用它嗎？be familiar with 表示對...熟悉。"),
    (27, "Learning a foreign language requires a lot of ______ and practice.", ["patience", "violence", "pollution", "accident"], 0, "句意：學習外語需要極大的「耐心 (patience)」與練習。"),
    (28, "The teacher gave us clear ______ on how to complete the science project.", ["instruments", "instructions", "interviews", "impressions"], 1, "句意：老師給了我們關於如何完成自然科學專題的清晰「指示/說明 (instructions)」。"),
    (29, "She made a ______ to study for at least one hour every evening.", ["decision", "mistake", "noise", "fortune"], 0, "句意：她下定「決心/決定 (made a decision)」每天晚上至少讀書一小時。make a decision 表示做決定。"),
    (30, "Please remind me to return the books to the library before they become ______.", ["overdue", "delicious", "healthy", "crowded"], 0, "句意：請提醒我在圖書「逾期 (overdue)」之前把書還給圖書館。overdue 表示逾期的、過期的。"),
    (31, "The little girl was so ______ of dogs that she started crying when a puppy ran to her.", ["afraid", "fond", "proud", "tired"], 0, "句意：小女孩非常「害怕 (afraid of)」狗，當一隻小狗跑向她時她開始哭了。be afraid of 表示害怕。"),
    (32, "Smartphones have a profound ______ on the daily habits of modern teenagers.", ["impact", "incident", "ingredient", "insect"], 0, "句意：智慧型手機對現代青少年的日常習慣產生了深遠的「影響 (impact)」。have an impact on 表示對...有影響。"),
    (33, "Drinking enough water every day helps maintain good physical ______.", ["condition", "tradition", "competition", "reputation"], 0, "句意：每天喝足夠的水有助於維持良好的身體「狀況 (condition)」。"),
    (34, "Can you help me ______ this math problem? It is too complicated for me.", ["solve", "spend", "save", "smell"], 0, "句意：你能幫我「解決/解出 (solve)」這道數學題嗎？對我來說太複雜了。"),
    (35, "The museum offers free ______ to students on Wednesday afternoons.", ["admission", "addition", "admiration", "adventure"], 0, "句意：博物館在週三下午提供學生免費「入場 (admission)」。admission 表示入場許可、門票。"),
    (36, "We should always be ______ for what our parents and teachers have done for us.", ["grateful", "guilty", "greedy", "gentle"], 0, "句意：我們應該永遠對父母與老師為我們所做的一切心懷「感恩 (grateful)」。be grateful for 表示感謝。"),
    (37, "He didn't have enough money, so he had to ______ some from his best friend.", ["borrow", "lend", "rent", "spend"], 0, "句意：他沒有足夠的錢，所以他必須向最好的朋友「借入 (borrow)」。borrow...from 向某人借入；lend...to 借出給某人。"),
    (38, "The flight was delayed due to poor weather ______ such as heavy fog.", ["conditions", "emotions", "traditions", "occasions"], 0, "句意：由於大霧等惡劣天氣「條件/狀況 (conditions)」，班機延誤了。"),
    (39, "To improve your English listening, you should take every ______ to listen to English podcasts.", ["opportunity", "obstacle", "opinion", "occupation"], 0, "句意：為了增進英文聽力，你應該把握每一個「機會 (opportunity)」收聽英文播客。"),
    (40, "A true friend will always ______ you when you are facing difficult times.", ["support", "suspect", "suppose", "surround"], 0, "句意：真正的朋友在遭遇困難時總會「支持 (support)」你。")
]

for item in vocab_data:
    questions.append({
        "id": item[0],
        "category": "字彙與片語",
        "level": "初級 / 中級",
        "question": item[1],
        "options": item[2],
        "answerIndex": item[3],
        "explanation": item[4]
    })

# ==========================================
# 2. 核心文法與句型結構 (Questions 41 - 80)
# ==========================================
grammar_data = [
    (41, "Look! The children ______ happily in the playground.", ["play", "played", "are playing", "have played"], 2, "考點：現在進行式。由句首的祈使動詞「Look!」提示當前正在發生的動作，應用 be + V-ing (are playing)。"),
    (42, "David ______ to Japan three times. He really loves Japanese culture.", ["goes", "went", "has been", "is going"], 2, "考點：現在完成式表達經驗。have/has been to 表示「曾經去過某地」（且人已回來），搭配 three times 表次數。"),
    (43, "If it ______ sunny this Saturday, our family will go on a picnic in the park.", ["is", "was", "will be", "is being"], 0, "考點：條件副詞子句（if 引導）。表示未來可能發生的假設，條件子句中要以「現在簡單式代替未來式」(is)。"),
    (44, "The delicious chocolate cake ______ by my grandmother yesterday afternoon.", ["made", "was made", "is made", "has made"], 1, "考點：過去被動語態。主詞 cake（蛋糕）是被製作的，且時間副詞為 yesterday afternoon（昨天下午），應用 was/were + p.p. (was made)。"),
    (45, "My mother made me ______ my bedroom before I could play video games.", ["clean", "to clean", "cleaned", "cleaning"], 0, "考點：使役動詞用法。使役動詞 make / let / have + 受詞後，接原形動詞 (clean) 表示叫某人做某事。"),
    (46, "I saw a cute bird ______ a beautiful song on the tree branch this morning.", ["singing", "sang", "sung", "to sing"], 0, "考點：感官動詞用法。感官動詞 see / watch / hear + 受詞後，可接原形動詞 (V) 或現在分詞 (V-ing) 強調動作正在進行。"),
    (47, "English is ______ than math for most of the students in our class.", ["easy", "easier", "easiest", "more easily"], 1, "考點：形容詞比較級。句中有比較連接詞 than，easy 是雙音節以 y 結尾的形容詞，比較級為 easier。"),
    (48, "You have finished your English homework already, ______?", ["haven't you", "have you", "didn't you", "don't you"], 0, "考點：附加問句規則。主要子句為現在完成式肯定句 (have finished)，附加問句要「前肯後否」，因此用 haven't you。"),
    (49, "The girl ______ is wearing a red hat is my cousin, Emily.", ["who", "which", "whom", "whose"], 0, "考點：關係代名詞。先行詞為人 (The girl)，在關係子句中作主詞，修飾人為主格應用 who。"),
    (50, "This is the interesting novel ______ was recommended by our English teacher.", ["who", "which", "whom", "whose"], 1, "考點：關係代名詞。先行詞為物 (the novel)，在關係子句中作主詞，應用 which 或 that。"),
    (51, "Although he was extremely tired after work, ______ he still helped his son with homework.", ["but", "so", "and", "/ (無須連接詞)"], 3, "考點：連接詞不可重複。英文中 Although（雖然）與 but（但是）不可同時出現在同一個複合句中，選無須連接詞。"),
    (52, "Do you know ______?", ["where does the teacher live", "where the teacher lives", "where is the teacher living", "where did the teacher live"], 1, "考點：間接問句詞序。間接問句必須恢復直述句語序：「疑問詞 + 主詞 + 動詞」(where the teacher lives)。"),
    (53, "Neither Tom nor his brothers ______ going to the basketball game tonight.", ["is", "are", "be", "was"], 1, "考點：主詞與動詞一致（就近原則）。Neither A nor B 連接兩主詞時，動詞形態須配合最接近的主詞 (his brothers 複數)，故選 are。"),
    (54, "She enjoys ______ mystery novels during her free time.", ["read", "to read", "reading", "reads"], 2, "考點：動名詞受詞。動詞 enjoy、mind、finish、practice、avoid 後面必須接動名詞 (V-ing, reading)。"),
    (55, "My brother decided ______ abroad to study computer science next year.", ["go", "going", "to go", "went"], 2, "考點：不定詞受詞。動詞 decide、hope、plan、promise、want 後面必須接不定詞 (to + V, to go)。"),
    (56, "By the time we arrived at the movie theater, the movie ______ already.", ["starts", "started", "has started", "had started"], 3, "考點：過去完成式。表示在過去某時間點 (arrived) 之前就已經發生的動作，應用 had + p.p. (had started)。"),
    (57, "If I ______ rich, I would buy a large house with a beautiful swimming pool for my parents.", ["am", "was", "were", "will be"], 2, "考點：與現在事實相反的假設語氣。If 條件子句中的 be 動詞一律使用 were。主要子句為 would + V。"),
    (58, "There ______ a large supermarket and two coffee shops near my house.", ["is", "are", "have", "has"], 0, "考點：There is/are 存在句就近原則。be 動詞單複數由緊接在後的第一個名詞決定 (a large supermarket 單數)，故用 is。"),
    (59, "He walked into the classroom quietly to avoid ______ the teacher.", ["disturb", "disturbing", "to disturb", "disturbed"], 1, "考點：avoid + V-ing。avoid（避免）後面只能接動名詞 (disturbing)。"),
    (60, "The book ______ on the desk belongs to the English teacher.", ["lying", "laying", "laid", "lied"], 0, "考點：分詞修飾。lie（躺、置於）的現在分詞為 lying，表主動置於桌上的書 (The book which is lying...)。"),
    (61, "Not only Jack but also his parents ______ fond of classical music.", ["is", "are", "be", "being"], 1, "考點：Not only A but also B 動詞一致性。動詞依照靠近的 B (his parents 複數) 決定，故用 are。"),
    (62, "The air in the countryside is much ______ than that in the bustling city.", ["fresh", "fresher", "freshest", "more fresh"], 1, "考點：比較級加強副詞。much / far / even / a lot 可修飾比較級 (fresher)，than 提示比較級。"),
    (63, "Would you mind ______ the door for me? My hands are full.", ["open", "to open", "opening", "opened"], 2, "考點：Would you mind + V-ing？mind（介意）後面接動名詞 (opening)，意為「你介意幫我開門嗎？」。"),
    (64, "She has lived in Tainan ______ she was born in 2010.", ["for", "since", "during", "before"], 1, "考點：現在完成式時間介系詞。since 連接過去某個時間點或過去式子句 (since she was born)，for 則接一段時間長度。"),
    (65, "The little boy spent two hours ______ his lost toy under the sofa.", ["finding", "find", "to find", "found"], 0, "考點：spend 時間 + (in) V-ing。花費時間做某事，後方接動名詞 (finding)。"),
    (66, "It takes me thirty minutes ______ to school on foot every morning.", ["walk", "walking", "to walk", "walked"], 2, "考點：It takes + 人 + 時間 + to V。虛主詞 it 代替真正的主詞不定詞 (to walk)。"),
    (67, "This soup smells ______; what ingredients did you put in it?", ["delicious", "deliciously", "taste", "tastyly"], 0, "考點：連綴動詞用法。smell / taste / feel / look / sound 為連綴動詞，後面必須接形容詞 (delicious) 作主詞補語。"),
    (68, "Hardly ______ the station when the train pulled away from the platform.", ["I reached", "had I reached", "did I reach", "I had reached"], 1, "考點：否定副詞倒裝句。Hardly / Scarcely / Seldom 放句首時，句子需部分倒裝：Hardly + had + S + p.p. when..."),
    (69, "I don't know whether he ______ to our graduation party tomorrow.", ["comes", "came", "will come", "has come"], 2, "考點：名詞子句時態。whether 引導名詞子句作 know 的受詞，表示未來的動作仍使用未來式 (will come)。"),
    (70, "The news that our basketball team won the championship ______ everyone excited.", ["make", "makes", "making", "made"], 3, "考點：主詞與時態判斷。主詞為 The news（單數），同位語子句為 that... won...，主要子句動詞為過去式 made (make + O + OC)。"),
    (71, "No one is allowed ______ in this public library.", ["smoke", "smoking", "to smoke", "smoked"], 2, "考點：被動式搭配不定詞。be allowed to V 表示「被允許做某事」，故用 to smoke。"),
    (72, "The higher you climb up the mountain, ______ the air becomes.", ["cold", "colder", "the colder", "the coldest"], 2, "考點：The + 比較級..., the + 比較級...。「越...就越...」的平行比較結構：The higher..., the colder...。"),
    (73, "Mary is accustomed to ______ up at six o'clock every morning to exercise.", ["get", "getting", "got", "gets"], 1, "考點：be accustomed to + V-ing。意為「習慣於...」，此處的 to 為介系詞，後面必須接動名詞 (getting)。"),
    (74, "I would rather stay home ______ go out in such heavy rain.", ["than", "to", "instead", "or"], 0, "考點：would rather V1 than V2。意為「寧願做某事而不願做某事」，than 後面接原形動詞。"),
    (75, "The student apologized to the teacher for ______ late for class.", ["be", "being", "been", "to be"], 1, "考點：介系詞 + V-ing。for 是介系詞，後方接動詞時必須改為動名詞 (being)。"),
    (76, "Unless you ______ hard now, you won't pass the entrance exam.", ["study", "will study", "studied", "studying"], 0, "考點：條件副詞子句（unless 除非）。unless = if not，表示未來的條件句中同樣以現在簡單式代替未來式 (study)。"),
    (77, "The building ______ windows were broken during the earthquake has been repaired.", ["who", "which", "whose", "that"], 2, "考點：所有格關係代名詞 whose。whose windows = the building's windows（那棟大樓的窗戶）。"),
    (78, "It is essential that every student ______ on time for the final exam.", ["is", "be", "was", "are"], 1, "考點：要求/建議/必要性之虛擬語氣。It is essential/important that + S + (should) + 原形動詞 (be)。"),
    (79, "He spoke so quietly that ______ anyone could hear what he was saying.", ["almost", "hardly", "nearly", "mostly"], 1, "考點：否定副詞 hardly。hardly anyone 表示「幾乎沒有人」，符合語境「講話太小聲」。"),
    (80, "Having finished his homework, Tom ______ outside to play soccer with his friends.", ["went", "go", "going", "gone"], 0, "考點：分詞構句與主要子句動詞。Having finished... 是分詞構句，主要子句需要真正的過去式動詞 went。")
]

for item in grammar_data:
    questions.append({
        "id": item[0],
        "category": "文法與句型",
        "level": "初級 / 中級",
        "question": item[1],
        "options": item[2],
        "answerIndex": item[3],
        "explanation": item[4]
    })

# ==========================================
# 3. 日常生活與情境會話 (Questions 81 - 120)
# ==========================================
dialogue_data = [
    (81, "Clerk: May I help you find something?\nCustomer: ______", ["Yes, I'm looking for a pair of sneakers.", "No, you cannot help me.", "I don't like this store at all.", "Here is my credit card."], 0, "情境：服飾店購物。店員禮貌詢問「需要幫您找什麼嗎？」，最適當的回應為「是的，我在找一雙運動鞋。」"),
    (82, "A: Excuse me, how can I get to the nearest MRT station?\nB: ______", ["It is five o'clock now.", "Go straight and turn left at the corner.", "I take the MRT every day.", "The train is very clean."], 1, "情境：問路指路。詢問「如何前往最近的捷運站？」，應回答路線指引「直走並在轉角處左轉。」"),
    (83, "A: I am really sorry for breaking your favorite coffee mug!\nB: ______", ["You are welcome.", "Don't worry about it; accidents happen.", "I am sorry too.", "Good luck to you!"], 1, "情境：道歉與回應。對方為打破馬克杯道歉，適當的安慰回應為「別擔心，意外難免。」"),
    (84, "Waiter: Are you ready to order, sir?\nCustomer: ______", ["Yes, I'd like the beef pasta and an iced tea.", "No, the food was terrible.", "The bill is too high.", "I work in a company nearby."], 0, "情境：餐廳點餐。服務生詢問是否可以點餐，適當回應為「是的，我想要一份牛肉義大利麵和一杯冰茶。」"),
    (85, "A: What is the weather going to be like this afternoon?\nB: ______", ["It's on Sunday.", "The forecast says it will be sunny and warm.", "I like watching TV.", "It was very cold yesterday."], 1, "情境：詢問天氣。問今天下午天氣如何，適當回答氣象預報「預報說會是晴朗溫暖的天氣。」"),
    (86, "A: Congratulations! I heard you won first prize in the English speech contest!\nB: ______", ["Thank you so much! I practiced really hard.", "Never mind.", "I don't think so.", "Pleased to meet you."], 0, "情境：道賀與致謝。收到得獎祝賀時，得體回應為「非常感謝！我真的練習得非常努力。」"),
    (87, "Doctor: What seems to be the problem today?\nPatient: ______", ["I am a junior high student.", "I have a high fever and a severe headache.", "The hospital is very big.", "My mother is cooking dinner."], 1, "情境：就醫問診。醫生詢問「今天哪裡不舒服？」，病人陳述症狀「我發高燒且頭痛得很厲害。」"),
    (88, "A: Would you like to come to my birthday party this Saturday evening?\nB: ______", ["I don't like birthdays.", "I'd love to, but I have to attend a cram school class.", "Happy birthday to you!", "Where were you yesterday?"], 1, "情境：邀約與婉拒。禮貌婉拒派對邀請：「我很想去，但我那天必須去補習。」"),
    (89, "A: Could you please lend me your eraser for a second?\nB: ______", ["Sure, here you are.", "No, you don't.", "I don't know him.", "It's five dollars."], 0, "情境：借文具。請求借用橡皮擦，答應的回應為「當然，拿去吧 (Sure, here you are)。」"),
    (90, "Hotel Receptionist: Welcome to Grand Hotel. How may I assist you?\nGuest: ______", ["I have a reservation under the name of Lin.", "The hotel is far away.", "I want to go home now.", "Check out time is 11 AM."], 0, "情境：飯店入住登記入住。房客適當回應：「我有預訂房間，登記姓名是林。」"),
    (91, "A: How do you like your new English teacher?\nB: ______", ["She is very patient and makes the lessons fun.", "She is forty years old.", "She teaches English at school.", "She came by bus today."], 0, "情境：詢問對人或事物的看法。How do you like...? 意為「你覺得...如何？」，應回答評價。"),
    (92, "A: I didn't pass my driver's license test this morning.\nB: ______", ["Cheer up! You will do better next time.", "Congratulations!", "You're welcome.", "That sounds exciting!"], 0, "情境：安慰他人。得知對方考試沒通過，應給予鼓勵：「打起精神！下次你會做得更好的。」"),
    (93, "A: How long does it take to get to the airport by taxi?\nB: ______", ["It costs about 500 dollars.", "About thirty to forty minutes, depending on traffic.", "The taxi driver is friendly.", "I like traveling by plane."], 1, "情境：詢問耗費時間。How long does it take...? 詢問時間長度，回答「大約30到40分鐘，視路況而定。」"),
    (94, "A: Do you prefer tea or coffee in the morning?\nB: ______", ["I usually prefer hot tea with lemon.", "Yes, I like beverages.", "Coffee is sold at cafes.", "Tea is grown in the mountains."], 0, "情境：二選一偏好詢問。Prefer A or B? 應直接選擇其一並回答「我通常偏好加檸檬的熱茶。」"),
    (95, "A: Thank you for helping me carry these heavy boxes upstairs.\nB: ______", ["Don't mention it; I was glad to help.", "You should carry them yourself.", "The boxes are heavy.", "I am sorry for that."], 0, "情境：表達謝意之回應。對方道謝時，得體回答為「不客氣/別客氣，我很樂意幫忙 (Don't mention it)。」"),
    (96, "A: What do you plan to do during the summer vacation?\nB: ______", ["It was very hot last summer.", "I am going to volunteer at an animal shelter.", "I stayed home yesterday.", "Summer is my favorite season."], 1, "情境：詢問假期計畫。What do you plan to do...? 應用未來或計畫句型回答「我打算去動物收容所當志工。」"),
    (97, "Cashier: That will be 450 dollars in total. How would you like to pay?\nCustomer: ______", ["I will pay in cash, please.", "The price is too low.", "I like this store.", "Thank you very much."], 0, "情境：結帳付款方式。How would you like to pay? 詢問付款方式，回答「請讓我付現金。」"),
    (98, "A: Let's go to the new Italian restaurant for dinner tonight!\nB: ______", ["Sounds like a great idea!", "I don't know where it is.", "Italian food is from Italy.", "We ate dinner already."], 0, "情境：提出提議之回應。對方提議去吃義大利餐廳，贊成提議回答「聽起來是個好主意！(Sounds like a great idea!)」"),
    (99, "A: Is it okay if I open the window? It's a bit stuffy in here.\nB: ______", ["No, not at all. Go right ahead.", "Yes, please close it.", "The window is broken.", "I am busy right now."], 0, "情境：請求許可。Is it okay if I...? 回答「No, not at all. Go right ahead.」表示完全不介意，請自便開窗。"),
    (100, "A: What is your new puppy like?\nB: ______", ["It likes eating meat.", "It is very energetic and playful.", "I bought it last week.", "It has four legs."], 1, "情境：詢問個性或特質。What is ... like? 詢問「...是個怎樣的人/物（特徵、個性）？」，回答「非常精力充沛且愛玩。」"),
    (101, "Caller: May I speak to Ms. Johnson, please?\nReceptionist: ______", ["I am fine, thank you.", "Hold on a moment, please. I'll transfer your call.", "She is a good manager.", "Who are you?"], 1, "情境：電話轉接。商務電話禮貌回應：「請稍候，我這就幫您轉接。」"),
    (102, "A: I have an interview tomorrow and I'm feeling super nervous.\nB: ______", ["Take a deep breath and just be yourself. You've got this!", "You should cancel it.", "Interviews are very boring.", "Good night!"], 0, "情境：緩解焦慮與鼓勵朋友。「深呼吸並做你自己，你一定可以的！」"),
    (103, "A: Excuse me, is this seat taken?\nB: ______", ["No, it's free. Please have a seat.", "Yes, you may sit here.", "I don't want this chair.", "Seats are everywhere."], 0, "情境：公車/火車詢問座位。Is this seat taken?（這座位有人坐嗎？），無人坐時回答「沒有，是空的，請坐。」"),
    (104, "A: How often do you visit your grandparents in the countryside?\nB: ______", ["For three hours.", "Once or twice a month.", "By train and bus.", "They live in a big house."], 1, "情境：頻率詢問。How often...? 詢問頻率，回答「一個月一到兩次 (Once or twice a month)。」"),
    (105, "A: Could you show me how to operate this coffee machine?\nB: ______", ["Sure. First, insert the capsule and press the start button.", "I love drinking latte.", "The coffee is too hot.", "It is very expensive."], 0, "情境：請求操作教學。對方請求教學，應具體說明操作步驟。"),
    (106, "Police Officer: Can you describe the lost backpack?\nOwner: ______", ["I lost it around 3 PM.", "It is a blue Adidas backpack with a water bottle on the side.", "I was walking to the station.", "I want to buy a new one."], 1, "情境：失物招領特徵描述。詢問背包外觀，應回答顏色、品牌與特徵細節。"),
    (107, "A: Which dessert do you recommend here?\nB: ______", ["The chocolate lava cake is their signature dessert; it's amazing!", "I don't eat sugar.", "The price list is on the table.", "Desserts are sweet."], 0, "情境：推薦餐點。詢問推薦哪道甜點，推薦招牌「熔岩巧克力蛋糕是他們的招牌，非常美味！」"),
    (108, "A: Why didn't you answer my phone call last night?\nB: ______", ["My phone is brand new.", "Sorry, my phone was on silent mode and I was studying.", "I don't like talking on the phone.", "Yes, I heard it ring."], 1, "情境：解釋未接電話原因。「抱歉，我的手機調靜音而且我當時在讀書。」"),
    (109, "A: Do you know what time the supermarket closes tonight?\nB: ______", ["It opens at 8 AM.", "I think it closes at 10 PM.", "They sell fresh fruits.", "It is next to the bank."], 1, "情境：詢問營業打烊時間。回答打烊具體時間「我想是晚上十點打烊。」"),
    (110, "A: Have a safe trip to London! Don't forget to send me a postcard!\nB: ______", ["Thanks! I'll definitely send you one as soon as I arrive.", "London is in the UK.", "Postcards are expensive.", "I don't like traveling."], 0, "情境：送行祝願。「謝謝！我一抵達一定會寄一張給你的。」"),
    (111, "A: I'm really fed up with the noisy construction next door.\nB: ______", ["I know how you feel; it's impossible to concentrate.", "Construction workers work hard.", "You should buy a new house.", "It started yesterday."], 0, "情境：同理他人抱怨。「我完全懂你的感受；這樣根本沒辦法專心。」"),
    (112, "Tour Guide: Everyone, please gather at the museum entrance at 4:30 PM.\nTourist: ______", ["Got it! We will be there on time.", "The museum is very large.", "I don't want to go in.", "What did you buy?"], 0, "情境：導遊集合宣佈。「收到！我們一定會準時抵達。」"),
    (113, "A: I can't find my house keys anywhere! Have you seen them?\nB: ______", ["Keys are made of metal.", "Check your jacket pocket; you were wearing it earlier.", "I locked the door.", "You should buy new keys."], 1, "情境：尋找遺失物建議。「檢查一下你外套口袋，你剛剛有穿著它。」"),
    (114, "A: What do you think about wearing uniforms at school?\nB: ______", ["Uniforms are blue.", "In my opinion, it helps students focus on studies rather than fashion.", "I wear clothes every day.", "My school is far away."], 1, "情境：表達對議題的看法。「依我看，這有助於學生專注於課業而非時尚外表。」"),
    (115, "A: Would you like some more mashed potatoes?\nB: ______", ["No, thank you. I am completely full.", "I don't like food.", "Potatoes grow underground.", "Give me more water."], 0, "情境：餐桌禮貌婉拒添菜。「不用了，謝謝。我已經完全飽了。」"),
    (116, "A: I'm feeling a bit under the weather today.\nB: ______", ["You should go home early and get some plenty of rest.", "The weather is very sunny today.", "Raincoats are useful.", "I like winter."], 0, "情境：關心身體不適（under the weather 表身體不適）。「你應該早點回家並好好充分休息。」"),
    (117, "A: How was your camping trip in the mountains last weekend?\nB: ______", ["It was incredible! We saw hundreds of shooting stars at night.", "The mountain is 3,000 meters high.", "Camping equipment is heavy.", "I have school tomorrow."], 0, "情境：詢問週末露營經驗。「棒極了！我們晚上看到了幾百顆流星。」"),
    (118, "A: Excuse me, can I get a receipt for this purchase?\nB: ______", ["Certainly! Here is your receipt and change.", "Receipts are made of paper.", "No, we don't sell receipts.", "You paid too much."], 0, "情境：索取發票收據。「當然！這是您的收據和找零。」"),
    (119, "A: I really appreciate your timely advice on my career choice.\nB: ______", ["Anytime! I'm always here if you need someone to talk to.", "Advice is free.", "You should find a job.", "I don't know you."], 0, "情境：表達感激與朋友回應。「隨時樂意！如果你需要找人聊聊我隨時都在。」"),
    (120, "A: Let me help you carry those heavy grocery bags to the car.\nB: ______", ["That is so kind of you! Thank you very much.", "The car is blue.", "I bought some apples.", "You are too slow."], 0, "情境：接受主動協助。「你人真好！非常感謝你。」")
]

for item in dialogue_data:
    questions.append({
        "id": item[0],
        "category": "情境會話",
        "level": "初級 / 中級",
        "question": item[1],
        "options": item[2],
        "answerIndex": item[3],
        "explanation": item[4]
    })

# ==========================================
# 4. 克漏字段落填空 (Questions 121 - 160)
# ==========================================
cloze_data = [
    (121, "Taipei 101 was once the tallest building in the world. Many tourists visit it every year because it ______ a breathtaking panoramic view of the entire city.", ["provides", "prevents", "punishes", "promises"], 0, "克漏字考點：語境動詞。台北101「提供 (provides)」整座城市令人屏息的全景視野。"),
    (122, "Exercise is essential for maintaining good health. ______, it helps reduce stress and improves our mood after a long day of study.", ["However", "In addition", "Instead", "Otherwise"], 1, "克漏字考點：轉折與遞進連接詞。前句提到運動維持健康，後句補充能減壓改善心情，表遞進補充關係，選 In addition（此外）。"),
    (123, "Many wild animals are losing their natural habitats ______ human activities such as deforestation and urban expansion.", ["due to", "in spite of", "as for", "instead of"], 0, "克漏字考點：因果介系詞片語。野生動物失去棲息地是「由於 (due to)」人類砍伐森林等活動。"),
    (124, "If you want to master a foreign language, consistency is the key. You need to practice every single day, ______ you are busy.", ["even if", "as long as", "so that", "in order that"], 0, "克漏字考點：讓步連接詞。每天都要練習，「即使 (even if)」你很忙。"),
    (125, "The chef washed the fresh vegetables carefully before ______ them into the boiling soup.", ["put", "putting", "to put", "puts"], 1, "克漏字考點：介系詞後接動名詞。before 作介系詞時，後面接動詞需改為動名詞 (putting)。"),
    (126, "Plastic bags take hundreds of years to decompose. Therefore, we should use reusable shopping bags ______ of single-use plastic ones.", ["in front", "instead", "in spite", "in charge"], 1, "克漏字考點：片語 instead of。意為「代替、而不是」，選 instead。"),
    (127, "The museum guide asked the visitors not to take flash photos, ______ it might damage the ancient paintings.", ["as", "although", "unless", "while"], 0, "克漏字考點：原因連接詞。as 在此表示「因為 (because)」，引導原因子句說明不可開閃光燈的理由。"),
    (128, "Many students find it challenging to wake up early in winter, ______ when the temperature drops below ten degrees.", ["especially", "rarely", "scarcely", "hardly"], 0, "克漏字考點：副詞語境。冬天起床很困難，「特別是 (especially)」當氣溫降到10度以下時。"),
    (129, "The internet has made it possible for people around the world to ______ information instantly.", ["exchange", "examine", "exaggerate", "exclude"], 0, "克漏字考點：動詞詞義。網際網路讓人們能夠即時「交流/交換 (exchange)」資訊。"),
    (130, "He didn't study for the history test at all; ______, he received an unsatisfactory grade.", ["consequently", "nevertheless", "fortunately", "similarly"], 0, "克漏字考點：因果轉折副詞。因為沒讀書，「結果/因此 (consequently)」得到不理想的成績。"),
    (131, "The Amazon rainforest plays a crucial role in regulating global climate; it is often ______ as the lungs of the Earth.", ["referred to", "depended on", "taken off", "looked down"], 0, "克漏字考點：片語 be referred to as。意為「被稱為/被提及為」，亞馬遜雨林常被稱為地球之肺。"),
    (132, "Although online shopping offers unparalleled convenience, consumers should remain ______ against internet fraud and scams.", ["vigilant", "careless", "generous", "hopeless"], 0, "克漏字考點：形容詞選詞。消費者應對網路詐騙保持「警惕 (vigilant)」。"),
    (133, "The government has implemented strict laws to prevent factories from ______ toxic chemicals into local rivers.", ["discharging", "drinking", "delighting", "decorating"], 0, "克漏字考點：動詞搭配。防止工廠「排放 (discharging)」有毒化學物質進入河川。"),
    (134, "To prepare for the marathon, the runner followed a rigorous training schedule ______ by an experienced coach.", ["designed", "designing", "to design", "designs"], 0, "克漏字考點：過去分詞後置修飾。課表是被有經驗的教練所「設計的 (designed)」。"),
    (135, "Scientists are searching for alternative energy sources to reduce our dependence ______ fossil fuels.", ["on", "with", "at", "to"], 0, "克漏字考點：dependence on。名詞 dependence 搭配介系詞 on，表示對...的依賴。"),
    (136, "The student was praised by the principal because he returned the lost wallet with all the money ______ inside.", ["intact", "invisible", "illegal", "infected"], 0, "克漏字考點：形容詞 intact。wallet with all the money intact 表示錢包裡所有的錢都「完整無缺的 (intact)」。"),
    (137, "Good sleep hygiene is vital for students. Without sufficient sleep, their academic performance will likely ______.", ["deteriorate", "decorate", "demonstrate", "determine"], 0, "克漏字考點：動詞詞義。缺乏充足睡眠，學業表現可能會「惡化/下降 (deteriorate)」。"),
    (138, "The new library has a wide collection of books, ______ from classical literature to modern science fiction.", ["ranging", "reaching", "running", "rising"], 0, "克漏字考點：片語 ranging from A to B。意為「範圍涵蓋從 A 到 B」，使用現在分詞 ranging 作修飾。"),
    (139, "Despite ______ many obstacles during his startup journey, the entrepreneur never gave up his dream.", ["encountering", "encountered", "encounter", "to encounter"], 0, "克漏字考點：介系詞 despite + V-ing。despite 是介系詞，後面必須接動名詞 (encountering)。"),
    (140, "Solar and wind energy are considered renewable resources because they can naturally ______ over time.", ["replenish", "replace", "remove", "reduce"], 0, "克漏字考點：動詞詞義。太陽能與風能被視為再生資源，因為它們能隨時間自然「補充/再生 (replenish)」。"),
    (141, "The teacher emphasized that teamwork is essential, reminding everyone that no one can succeed ______ the help of others.", ["without", "within", "with", "beyond"], 0, "克漏字考點：介系詞 without。沒有他人的協助，沒有人能夠成功。"),
    (142, "Regular physical activity not only burns calories ______ also strengthens heart and muscle functions.", ["but", "and", "or", "so"], 0, "克漏字考點：not only... but also...。固定搭配連接詞，意為「不僅...而且...」。"),
    (143, "The city government plans to build more bike lanes to ______ citizens to commute by bicycle.", ["encourage", "enforce", "escape", "embarrass"], 0, "克漏字考點：動詞搭配 encourage sb to V。「鼓勵 (encourage)」市民騎腳踏車通勤。"),
    (144, "She was reluctant to accept the job offer because the salary was significantly lower than she had ______.", ["expected", "expanded", "exported", "explained"], 0, "克漏字考點：動詞詞義。薪資遠低於她所「預期/期望的 (expected)」。"),
    (145, "In modern society, critical thinking skills enable individuals to distinguish ______ facts and misleading opinions.", ["between", "among", "with", "into"], 0, "克漏字考點：distinguish between A and B。意為「區分 A 與 B 兩者」。"),
    (146, "Many traditional crafts are in danger of ______ out if younger generations do not learn them.", ["dying", "going", "taking", "putting"], 0, "克漏字考點：片語 die out。意為「滅絕、失傳」，in danger of dying out。"),
    (147, "The newly built stadium is spacious enough to ______ over fifty thousand spectators.", ["accommodate", "accumulate", "accomplish", "accompany"], 0, "克漏字考點：動詞詞義。新體育場空間足夠「容納 (accommodate)」超過五萬名觀眾。"),
    (148, "He was caught in a heavy traffic jam; ______, he arrived at the meeting twenty minutes late.", ["as a result", "on the contrary", "in contrast", "for instance"], 0, "克漏字考點：因果轉折片語。遇上嚴重塞車，「結果/因此 (as a result)」遲到了二十分鐘。"),
    (149, "Water conservation is crucial in arid regions where rainfall is extremely ______.", ["scarce", "abundant", "delicious", "generous"], 0, "克漏字考點：形容詞詞義。在降雨極為「稀少/缺乏 (scarce)」的乾旱地區，節約用水至關重要。"),
    (150, "The novel was so captivating that she stayed up all night ______ it from cover to cover.", ["reading", "read", "to read", "reads"], 0, "克漏字考點：stay up + V-ing。熬夜做某事，後接動名詞 (reading)。"),
    (151, "Before making an important life decision, it is wise to ______ advice from experienced mentors.", ["seek", "hide", "destroy", "punish"], 0, "克漏字考點：seek advice。意為「尋求建議」。"),
    (152, "Global warming leads to extreme weather events, ______ severe droughts and devastating floods.", ["including", "included", "includes", "inclusive"], 0, "克漏字考點：介系詞 including。意為「包含/包括」，引導舉例說明。"),
    (153, "The doctor assured the patient that the mild side effects of the medication would ______ within two days.", ["subside", "substitute", "submit", "subtract"], 0, "克漏字考點：動詞詞義。藥物的輕微副作用會在兩天內「消退/減弱 (subside)」。"),
    (154, "The historical monument was erected in memory of the brave soldiers who ______ their lives for their country.", ["sacrificed", "celebrated", "invented", "collected"], 0, "克漏字考點：動詞詞義。紀念為國家「犧牲 (sacrificed)」生命的英勇士兵。"),
    (155, "Students are required to hand in their term papers ______ next Friday at 5:00 PM.", ["by", "until", "since", "during"], 0, "克漏字考點：時間介系詞 by。by + 時間點表示「在...之前截止/完成」。"),
    (156, "The scientist conducted numerous experiments to test whether the new vaccine was ______ against the virus.", ["effective", "emotional", "expensive", "elementary"], 0, "克漏字考點：形容詞詞義。測試新疫苗對抗病毒是否「有效 (effective)」。"),
    (157, "Trees absorb carbon dioxide and release oxygen, thus ______ the air quality of our surroundings.", ["improving", "improved", "improve", "to improve"], 0, "克漏字考點：現在分詞表結果。thus improving... 表伴隨產生的主動結果。"),
    (158, "She takes great ______ in her daughter's remarkable musical achievements.", ["pride", "proud", "praise", "price"], 0, "克漏字考點：片語 take pride in。意為「以...為榮/感到自豪」，搭配名詞 pride。"),
    (159, "The company's CEO announced a major restructuring plan in order to ______ operational costs.", ["curtail", "increase", "celebrate", "pollute"], 0, "克漏字考點：動詞詞義。為了「縮減/削減 (curtail/cut)」營運成本。"),
    (160, "Learning how to manage time effectively is a skill that will ______ you throughout your life.", ["benefit", "betray", "borrow", "bother"], 0, "克漏字考點：動詞詞義。學會時間管理是一項將會「使你終身受益 (benefit you)」的技能。")
]

for item in cloze_data:
    questions.append({
        "id": item[0],
        "category": "克漏字段落填空",
        "level": "中級 / 中高級",
        "question": item[1],
        "options": item[2],
        "answerIndex": item[3],
        "explanation": item[4]
    })

# ==========================================
# 5. 閱讀理解與短文推論 (Questions 161 - 200)
# ==========================================
reading_data = [
    (161, "【Notice】The school library will be closed this Friday afternoon from 1:00 PM to 5:00 PM for annual inventory and disinfection. All borrowed books due on Friday may be returned on Monday without overdue fines.\n\nQ: Why will the library be closed this Friday afternoon?", ["For student club activities", "For book inventory and disinfection", "Because the librarian is sick", "For a school celebration"], 1, "公告閱讀題：公告第二句指出「for annual inventory and disinfection (為了年度盤點與消毒)」，故選 B。"),
    (162, "【Notice (續)】Q: What should students do if their borrowed books are due this Friday?", ["They must pay a penalty fine.", "They can return them next Monday with no fine.", "They must return them by Thursday morning.", "They must buy new books."], 1, "公告細節題：公告最後一句註明「All borrowed books due on Friday may be returned on Monday without overdue fines (可於下週一歸還且不收逾期罰款)」。"),
    (163, "【Poster】Green Planet Club Tree-Planting Event\nDate: Saturday, March 12th\nTime: 9:00 AM – 12:00 PM\nLocation: Riverside Forest Park\nFee: FREE (Free gloves and saplings provided)\nBring: A reusable water bottle and a sun hat\n\nQ: What do participants need to bring to the event?", ["Their own saplings and shovel", "A water bottle and a sun hat", "100 dollars entry fee", "Lunch box and tent"], 1, "海報資訊檢索題：海報 Bring 欄位明確指出需自備「A reusable water bottle and a sun hat (水壺與遮陽帽)」。"),
    (164, "【Poster (續)】Q: How much does it cost to join the tree-planting event?", ["It costs 50 dollars.", "It costs 100 dollars.", "It is completely free of charge.", "Participants must buy their own gloves."], 2, "海報細節題：Fee 欄位註明「FREE (免費)」，故選 C。"),
    (165, "【Email】\nDear Students,\nPlease note that the deadline for submitting the science project proposal has been extended from October 15th to October 22nd. Please make sure your team of 3 to 4 members submits the paper to room 302 before 4 PM.\nBest regards, Mr. Chen\n\nQ: When is the new deadline for the science project proposal?", ["October 15th", "October 22nd", "October 30th", "November 1st"], 1, "信件細節題：信中說明期限已延後至「October 22nd (10月22日)」。"),
    (166, "【Email (續)】Q: How many students should be in one science project team?", ["Only 1 student", "Exactly 2 students", "3 to 4 students", "At least 5 students"], 2, "信件細節題：信件提到「your team of 3 to 4 members (3至4人的團隊)」。"),
    (167, "【Passage】Honeybees are essential pollinators for many agricultural crops around the world. Without them, about one-third of the food we eat, including apples, almonds, and strawberries, would not grow. However, bee populations have been declining due to pesticide use, habitat loss, and climate change.\n\nQ: What is the main idea of this passage?", ["How to make honey at home", "The importance of honeybees and the threats they face", "Why people should eat more almonds", "The lifecycle of a queen bee"], 1, "短文主旨題：全文說明蜜蜂對農作物授粉的重要性，以及當前面臨農藥、棲地喪失等數量下降的威脅。"),
    (168, "【Passage (續)】Q: Which of the following is NOT mentioned as a cause for the decline of bee populations?", ["Pesticide use", "Habitat loss", "Climate change", "Volcanic eruptions"], 3, "反向細節題：文章最後一句提及農藥 (pesticide)、棲地喪失 (habitat loss)、氣候變遷 (climate change)，未提及火山爆發 (volcanic eruptions)。"),
    (169, "【Recipe】Simple Fruit Smoothie\nIngredients: 1 banana, 1 cup frozen strawberries, 1/2 cup milk, 1 tablespoon honey.\nSteps:\n1. Peel the banana and slice it into small pieces.\n2. Place all fruits, milk, and honey into a blender.\n3. Blend on high speed for 45 seconds until smooth.\n4. Pour into a glass and serve immediately.\n\nQ: What is the very first step in making the smoothie?", ["Blend on high speed", "Pour into a glass", "Peel the banana and slice it", "Add honey into the milk"], 2, "食譜步驟題：步驟 1 明確寫出「Peel the banana and slice it into small pieces (剝香蕉皮並切片)」。"),
    (170, "【Recipe (續)】Q: How long should you blend the ingredients in the blender?", ["45 seconds", "5 minutes", "10 minutes", "30 seconds"], 0, "食譜細節題：步驟 3 寫道「Blend on high speed for 45 seconds (高速攪打45秒)」。"),
    (171, "【Passage】In many countries, tipping is a customary way to show appreciation for good service in restaurants and hotels. In the United States, a standard tip is between 15% and 20% of the total bill. However, in countries like Japan, tipping is not practiced and can even be considered rude, as excellent service is considered standard.\n\nQ: How is tipping viewed in Japan according to the passage?", ["It is legally required.", "It is standard between 15% and 20%.", "It is not customary and might be considered impolite.", "It is double the price of the meal."], 2, "文化對比題：文中最後一句說明在受訪日本文化中給小費並非常態，甚至可能被認為不禮貌 (considered rude/impolite)。"),
    (172, "【Passage (續)】Q: What is the standard tipping rate in the United States according to the text?", ["5% to 10%", "15% to 20%", "25% to 30%", "Tipping is not allowed in the US"], 1, "文章細節題：第二句明確指出「In the United States, a standard tip is between 15% and 20%」。"),
    (173, "【Advertisement】Sunrise English Summer Camp\n• Learn English with native-speaking teachers!\n• Exciting outdoor activities: Kayaking, archery, and campfires.\n• Age group: 10 – 15 years old\n• Early Bird Discount: Register before May 1st to get 20% off!\n• Website: www.sunrise-camp.edu\n\nQ: Who is this summer camp designed for?", ["Adults over 20", "Children aged 10 to 15", "University professors", "Toddlers under 5"], 1, "廣告資訊題：Age group 欄位標明「10 – 15 years old (10至15歲的兒童與青少年)」。"),
    (174, "【Advertisement (續)】Q: How can one receive the 20% early bird discount?", ["By bringing their own kayak", "By registering before May 1st", "By joining with five friends", "By passing an English test"], 1, "廣告優惠條件題：Early Bird Discount 註明「Register before May 1st to get 20% off (5月1日前報名享八折)」。"),
    (175, "【Passage】Sleeping well is crucial for memory consolidation. During deep sleep, the brain processes and reorganizes information learned throughout the day, transferring it from short-term to long-term memory. Students who pull an 'all-nighter' before an exam often perform worse because their brain lacks the time to solidify the material.\n\nQ: According to the passage, what happens during deep sleep?", ["The brain stops functioning completely.", "The brain transfers information from short-term to long-term memory.", "The body burns 1,000 calories.", "Students forget all their stress."], 1, "科普文章細節題：文中指出「transferring it from short-term to long-term memory (大腦將資訊由短期記憶轉化為長期記憶)」。"),
    (176, "【Passage (續)】Q: What does the term 'all-nighter' in the passage most likely mean?", ["A delicious midnight snack", "Staying awake all night without sleeping", "A dream that lasts all night", "An overnight school field trip"], 1, "字義推論題：pull an all-nighter 在語境中指「熬夜不睡覺」。"),
    (177, "【Flight Schedule】\nFlight No. | Destination | Departure Time | Gate | Status\nBR 801     | Tokyo       | 08:30 AM        | C3   | On Time\nCI 152     | Seoul       | 09:15 AM        | B5   | Delayed (10:00)\nJX 203     | Singapore   | 10:45 AM        | D2   | Boarding\n\nQ: Which flight is currently delayed?", ["Flight BR 801 to Tokyo", "Flight CI 152 to Seoul", "Flight JX 203 to Singapore", "All flights are on time"], 1, "圖表時刻表題：CI 152 飛往首爾的狀態為「Delayed (10:00) 延誤」。"),
    (178, "【Flight Schedule (續)】Q: At which gate should passengers for the Tokyo flight board?", ["Gate C3", "Gate B5", "Gate D2", "Gate A1"], 0, "圖表檢索題：BR 801 飛往東京 (Tokyo) 的登機門為「Gate C3」。"),
    (179, "【Short Story】One rainy afternoon, Leo found a wet, shivering kitten in an alley behind his house. He wrapped it in his warm towel, brought it inside, and gave it some warm milk. Within a week, the kitten recovered its energy and became his most loyal companion.\n\nQ: What did Leo do immediately after finding the kitten?", ["He sold it to a pet shop.", "He wrapped it in a towel and gave it warm milk.", "He called the fire department.", "He left it in the alley."], 1, "故事順序題：Leo 發現小貓後「wrapped it in his warm towel, brought it inside, and gave it some warm milk」。"),
    (180, "【Short Story (續)】Q: What was the result of Leo's kind actions?", ["The kitten ran away into the forest.", "The kitten became healthy and his loyal companion.", "His parents were angry at him.", "He lost his warm towel."], 1, "故事結局題：最後一句指出「the kitten recovered its energy and became his most loyal companion (小貓恢復活力並成為他最忠誠的夥伴)」。"),
    (181, "【Passage】Plastic pollution in the ocean is a global catastrophe. Millions of tons of plastic enter marine ecosystems every year, breaking down into microplastics that fish mistakenly ingest. This toxic material then travels up the food chain, eventually posing health hazards to humans who consume seafood.\n\nQ: How do microplastics eventually affect humans?", ["Through the air humans breathe in cities", "Through the consumption of contaminated seafood in the food chain", "By changing the color of human skin", "By causing heavy rainfall on land"], 1, "文章因果推論題：最後一句說明微塑膠進入食物鏈，最終對食用海鮮的人類健康造成危害。"),
    (182, "【Passage (續)】Q: The word 'ingest' in line 2 is closest in meaning to ______.", ["eat or swallow", "produce or make", "swim around", "clean up"], 0, "字彙語境理解題：fish mistakenly ingest (魚類誤食)，ingest 意為「攝入、吃下 (eat or swallow)」。"),
    (183, "【Cinema Ticket】\nMovie: Guardians of the Galaxy\nDate: Saturday, July 20\nTime: 19:30 (7:30 PM)\nHall: 4 | Row: F | Seat: 12\nTicket Type: Student (NT$ 260)\nNote: Outside hot food is not permitted.\n\nQ: What time does the movie start?", ["19:00 (7:00 PM)", "19:30 (7:30 PM)", "20:00 (8:00 PM)", "12:00 PM"], 1, "票根檢索題：時間明確標記為「19:30 (7:30 PM)」。"),
    (184, "【Cinema Ticket (續)】Q: Which item is NOT allowed according to the cinema rules?", ["A student ID card", "A soft drink", "Outside hot food", "A light jacket"], 2, "票根規則題：Note 載明「Outside hot food is not permitted (禁止攜帶外帶熱食)」。"),
    (185, "【Passage】Renewable energy sources such as solar, wind, and geothermal power are becoming increasingly cost-effective. Unlike fossil fuels, which emit vast amounts of greenhouse gases that drive global warming, renewable technologies generate electricity with virtually zero carbon emissions during operation.\n\nQ: What is the main advantage of renewable energy mentioned in the text?", ["It is the oldest energy source in human history.", "It generates electricity without emitting harmful greenhouse gases.", "It is only available in cold countries.", "It requires no technology to build."], 1, "主旨細節題：文中指出再生能源最大的優點是「generate electricity with virtually zero carbon emissions (發電過程幾乎零碳排)」。"),
    (186, "【Passage (續)】Q: Which of the following is NOT listed as a renewable energy source in the passage?", ["Solar power", "Wind power", "Geothermal power", "Coal power"], 3, "細節篩選題：文中列出太陽能 (solar)、風能 (wind)、地熱能 (geothermal)，煤炭 (coal) 屬於化石燃料而非再生能源。"),
    (187, "【Menu】Healthy Green Diner\n• Avocado Salad: $150\n• Grilled Chicken Wrap: $180\n• Pumpkin Soup: $80\n• Fresh Orange Juice: $70\nSpecial Combo: Order any main dish (Salad/Wrap) and get a soup or juice at 50% discount!\n\nQ: If John orders a Grilled Chicken Wrap and a Pumpkin Soup, how much should he pay?", ["$260", "$220", "$200", "$180"], 1, "菜單數學素養計算題：雞肉捲 ($180) + 南瓜湯半價 ($80 × 0.5 = $40) = $220。"),
    (188, "【Menu (續)】Q: What is the regular price of an Avocado Salad without any discount?", ["$80", "$150", "$180", "$70"], 1, "菜單檢索題：酪梨沙拉單點價格為「$150」。"),
    (189, "【Passage】Mars has long captivated scientists as a potential candidate for future human colonization. However, the Red Planet presents extreme environmental hazards: an average surface temperature of minus 60 degrees Celsius, a thin atmosphere composed mostly of carbon dioxide, and dangerous levels of cosmic radiation.\n\nQ: What is the average surface temperature on Mars according to the passage?", ["Plus 25 degrees Celsius", "Zero degrees Celsius", "Minus 60 degrees Celsius", "Minus 200 degrees Celsius"], 2, "科學短文細節題：文中指出火星平均地表溫度為「minus 60 degrees Celsius (零下60度)」。"),
    (190, "【Passage (續)】Q: What is the atmosphere of Mars mainly composed of?", ["Oxygen", "Nitrogen", "Carbon dioxide", "Water vapor"], 2, "科學短文細節題：文中註明「a thin atmosphere composed mostly of carbon dioxide (主要由二氧化碳構成的稀薄大氣)」。"),
    (191, "【Text Message】\nMom: Hi Lucas, don't forget to take out the trash before 6 PM today. Also, feed the cat and make sure the back door is locked. I will be home around 7:30 PM with sushi for dinner!\nLucas: Got it, Mom! I'll do it right after I finish my math homework.\n\nQ: What will the family eat for dinner tonight?", ["Pizza", "Sushi", "Fried chicken", "Noodles"], 1, "簡訊生活情境題：媽媽在簡訊中寫道「I will be home around 7:30 PM with sushi for dinner (我會帶壽司回家當晚餐)」。"),
    (192, "【Text Message (續)】Q: What does Mom remind Lucas to do before 6 PM?", ["Take out the trash", "Go to the supermarket", "Cook sushi", "Lock the front gate"], 0, "簡訊細節題：媽媽提醒「take out the trash before 6 PM today (在下午6點前倒垃圾)」。"),
    (193, "【Passage】Volunteering is not only beneficial for the community, but it also fosters empathy and social skills in young people. Studies show that teenagers who actively participate in volunteer work develop higher self-esteem and build stronger resumes for college admissions.\n\nQ: How does volunteering benefit teenagers according to the text?", ["It provides them with high salaries.", "It improves their empathy, self-esteem, and social skills.", "It eliminates all homework at school.", "It teaches them how to drive cars."], 1, "素養短文主旨題：文中第一句與第二句指出志工服務能培養同理心 (empathy)、自信 (self-esteem) 與社交技能 (social skills)。"),
    (194, "【Passage (續)】Q: The word 'fosters' in the first sentence is closest in meaning to ______.", ["destroys or eliminates", "nurtures or develops", "buys or sells", "forgets or ignores"], 1, "詞彙語境題：foster 意為「培養、促進 (nurtures or develops)」。"),
    (195, "【Weather Report】\nTaipei Weekend Outlook:\nSaturday: Heavy rain and thunderstorms in the afternoon. High 26°C, Low 21°C. Strong wind warnings.\nSunday: Mostly cloudy with occasional sunshine. High 29°C, Low 23°C. Perfect for outdoor walks.\n\nQ: What is the best day for outdoor activities this weekend according to the report?", ["Saturday", "Sunday", "Both days are equally rainy", "Neither day is suitable"], 1, "氣象報導分析題：週日為「Mostly cloudy with occasional sunshine... Perfect for outdoor walks (多雲偶晴，適合戶外散步)」。"),
    (196, "【Weather Report (續)】Q: What weather condition is forecasted for Saturday afternoon?", ["Snow and frost", "Heavy rain and thunderstorms", "Clear blue sky all day", "Dry and hot desert winds"], 1, "氣象報導細節題：週六下午為「Heavy rain and thunderstorms (大雨與雷陣雨)」。"),
    (197, "【Passage】Bioluminescence is the production and emission of light by a living organism. Fireflies are a familiar example, using their glowing abdomens to attract mates. In the deep ocean, where sunlight cannot penetrate, over 75% of marine creatures produce their own light to communicate, camouflage, or lure prey.\n\nQ: Why do deep-sea creatures use bioluminescence according to the passage?", ["To stay warm in cold water", "To communicate, camouflage, or lure prey", "To cook their food", "To swim faster"], 1, "生物科普細節題：文中最後一句說明深海生物發光是為了「to communicate, camouflage, or lure prey (溝通、偽裝或誘捕獵物)」。"),
    (198, "【Passage (續)】Q: Which of the following is a common land animal known for bioluminescence?", ["Honeybee", "Firefly", "Butterfly", "Ladybug"], 1, "生物科普常識檢索題：文中第二句舉例「Fireflies (螢火蟲)」為陸地上熟悉的發光生物。"),
    (199, "【Invitation】\nYou are warmly invited to the Annual Charity Gala!\nDate: Friday, December 18th | 6:30 PM\nDress Code: Formal attire\nVenue: Grand Ballroom, Howard Plaza Hotel\nAll proceeds will go toward providing clean drinking water for children in rural communities.\n\nQ: What is the purpose of the charity gala?", ["To celebrate the hotel's birthday", "To raise funds for clean drinking water in rural communities", "To sell expensive fashion clothes", "To teach children how to cook"], 1, "邀請函主旨題：邀請函註明所有收益將「go toward providing clean drinking water for children in rural communities (為偏鄉兒童提供乾淨飲用水籌募善款)」。"),
    (200, "【Invitation (續)】Q: What is the required dress code for the gala?", ["Casual clothes and shorts", "Sportswear and sneakers", "Formal attire", "Costumes for Halloween"], 2, "邀請函細節題：Dress Code 欄位註明「Formal attire (正式服裝)」。")
]

for item in reading_data:
    questions.append({
        "id": item[0],
        "category": "閱讀理解與推論",
        "level": "初級 / 中級",
        "question": item[1],
        "options": item[2],
        "answerIndex": item[3],
        "explanation": item[4]
    })

print(f"Total questions generated: {len(questions)}")

# Write to file
file_content = f"""// 全民英檢 (GEPT) 全真模擬測驗題庫（共 200 題選擇題）
// 涵蓋字彙片語、核心文法、日常情境會話、克漏字段落填空、長文閱讀理解
// 支援 5 題、10 題、20 題、30 題隨機模擬測驗

export const geptMockQuestions = {json.dumps(questions, ensure_ascii=False, indent=2)};
"""

with codecs.open('c:\\Users\\User\\OneDrive\\文件\\Antigravity\\Sixth\\src\\data\\geptMockQuestions.js', 'w', 'utf-8') as f:
    f.write(file_content)

print("Saved src/data/geptMockQuestions.js successfully!")
