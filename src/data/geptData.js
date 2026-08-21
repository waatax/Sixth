// 全民英檢 (GEPT) 各級課綱完整資料
// 資料來源：LTTC 全民英檢官方網站、教育部課程綱要
// 級別：初級 (Elementary) → 中級 (Intermediate) → 中高級 (High-Intermediate) → 高級 (Advanced) → 優級 (Superior)

export const geptData = {
  overview: {
    fullName: '全民英語能力分級檢定測驗',
    nameEn: 'General English Proficiency Test (GEPT)',
    organizer: '財團法人語言訓練測驗中心 (LTTC)',
    description: '由教育部補助研發，為國內最具公信力的英語能力檢定，參照教育部課程綱要設計，分為五個級數，涵蓋聽、說、讀、寫四項技能。',
    officialUrl: 'https://www.lttc.ntu.edu.tw/gept.htm',
    wordListUrl: 'https://www.lttc.ntu.edu.tw/geptwordlist.htm',
    examStages: [
      { stage: '初試', content: '聽力測驗 + 閱讀測驗', note: '通過初試方可報考複試' },
      { stage: '複試', content: '寫作測驗 + 口說測驗', note: '由專業評分人員人工閱卷' }
    ]
  },

  levels: [
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🟢 初級 Elementary (CEFR A2)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      id: 'elementary',
      name: '初級',
      nameEn: 'Elementary',
      cefr: 'A2',
      color: 'hsl(152, 70%, 42%)',
      emoji: '🟢',
      badge: '國中畢業程度',
      recommended: true,
      targetAudience: '國中畢業、國小高年級英語資優生、具備日常基礎英語溝通能力者',
      vocabularyRange: '約 2,000 個基礎單字',
      vocabularyNote: '以 LTTC 官方「全民英檢參考字表」初級範圍為準',

      examStructure: {
        listening: {
          name: '聽力測驗',
          stage: '初試',
          duration: '約 25 分鐘',
          questionCount: '約 30 題',
          types: [
            { type: '看圖辨義', desc: '根據圖片選出正確描述的選項' },
            { type: '問答', desc: '聽到問句後，選出最適當的回答' },
            { type: '簡短對話', desc: '聽兩人對話，回答相關問題' },
            { type: '簡短談話', desc: '聽一段獨白（如廣播、氣象），回答問題' }
          ],
          keyTopics: '日常生活對話、價格時間辨識、廣播與氣象報告'
        },
        reading: {
          name: '閱讀測驗',
          stage: '初試',
          duration: '35 分鐘',
          questionCount: '約 35 題',
          types: [
            { type: '詞彙與結構', desc: '測驗字彙量與基礎文法結構' },
            { type: '段落填空', desc: '根據上下文語意選出正確答案' },
            { type: '閱讀理解', desc: '閱讀短文、廣告、信件等，回答問題' }
          ],
          keyTopics: '短文、故事、私人信件、廣告、告示、操作手冊'
        },
        writing: {
          name: '寫作測驗',
          stage: '複試',
          duration: '40 分鐘',
          types: [
            { type: '單句寫作', desc: '句子改寫、句子合併、句子重組（測驗時態與句型轉換）' },
            { type: '看圖寫作', desc: '根據圖片與提示寫一篇約 50 字短文' }
          ],
          keyTips: '保持文法正確、拼字精確，注意人稱與時態一致性'
        },
        speaking: {
          name: '口說測驗',
          stage: '複試',
          duration: '約 10 分鐘',
          types: [
            { type: '朗讀短文', desc: '唸出一段英文短文，測驗發音與語調' },
            { type: '回答問題', desc: '根據日常情境回答考官的問題' },
            { type: '看圖敘述', desc: '根據圖片內容用英文描述情境' }
          ],
          keyTips: '語氣流暢、發音清楚，不需追求艱澀文法'
        }
      },

      grammarFocus: [
        { category: '基礎時態', items: ['簡單現在式（第三人稱 -s/-es）', '現在進行式（be + V-ing）', '簡單過去式（規則 / 不規則動詞變化）', '過去進行式（was/were + V-ing）', '現在完成式（have/has + p.p.，搭配 for / since）', '未來式（will / be going to）'] },
        { category: '核心句型', items: ['被動語態（be + p.p.）', 'There is / There are 存在句', '比較級與最高級', '使役動詞（make / let / have）', '感官動詞（see / hear / watch + V / V-ing）', '不定詞 to V 與動名詞 V-ing 的搭配', '間接問句（wh- + S + V 詞序）', '附加問句（前肯後否 / 前否後肯）', '關係代名詞（who / which / that）'] },
        { category: '詞性與連接', items: ['名詞單複數變化', '形容詞（修飾名詞）與副詞（修飾動詞）', '時間介系詞（at / in / on / during）', '地方介系詞（in / on / at / under / next to）', '慣用介系詞片語（be interested in / good at / afraid of）', '對等連接詞（and / but / or / so）', '從屬連接詞（when / while / because / although / if）'] }
      ],

      topicAreas: [
        '日常生活作息與家庭',
        '購物與價格詢問',
        '問路與指路',
        '飲食健康與看醫生',
        '學校生活與課外活動',
        '天氣與季節',
        '交通工具與旅行',
        '節慶與文化',
        '電話與簡訊溝通',
        '休閒嗜好與運動'
      ],

      keySkills: [
        '能聽懂日常生活中簡單的對話與廣播',
        '能閱讀短篇故事、信件、廣告等簡易文本',
        '能用基本句型寫出簡短文章',
        '能進行簡單的日常英語口語對話'
      ],

      prepTips: [
        { tip: '掌握核心 2,000 單字', detail: '以 LTTC 官方參考字表為基礎，搭配例句學習用法' },
        { tip: '分階段準備', detail: '先針對聽讀（初試）訓練，通過後再準備說寫（複試）' },
        { tip: '寫作重「精確」', detail: '不需華麗詞藻，重點是句子結構正確、人稱時態一致' },
        { tip: '多做歷屆題', detail: '熟悉「句子合併」與「句子改寫」題型，鞏固文法觀念' },
        { tip: '善用免費資源', detail: 'LTTC 官網提供學習指引、參考字表與線上練習題' }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🔵 中級 Intermediate (CEFR B1)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      id: 'intermediate',
      name: '中級',
      nameEn: 'Intermediate',
      cefr: 'B1',
      color: 'hsl(215, 85%, 52%)',
      emoji: '🔵',
      badge: '高中畢業程度',
      recommended: false,
      targetAudience: '高中畢業、大學非英語科系大一程度、一般社會人士基礎商務需求',
      vocabularyRange: '約 4,000 ~ 5,000 字',
      vocabularyNote: '涵蓋初級字表，並延伸至日常生活進階詞彙',

      examStructure: {
        listening: {
          name: '聽力測驗',
          stage: '初試',
          duration: '約 30 分鐘',
          questionCount: '約 45 題',
          types: [
            { type: '看圖辨義', desc: '根據圖片選出正確描述' },
            { type: '問答', desc: '聽問句選最佳回應' },
            { type: '簡短對話', desc: '聽對話回答問題' },
            { type: '簡短談話', desc: '聽獨白（含聽讀整合題）回答問題' }
          ],
          keyTopics: '日常對話、公告廣播、產品介紹、新聞摘要'
        },
        reading: {
          name: '閱讀測驗',
          stage: '初試',
          duration: '45 分鐘',
          questionCount: '約 40 題',
          types: [
            { type: '詞彙', desc: '進階字彙與搭配用法（Collocation）' },
            { type: '段落填空', desc: '含整句填空，需理解文意脈絡' },
            { type: '閱讀理解', desc: '含多文本題組與圖表題' }
          ],
          keyTopics: '新聞報導、書信、說明書、圖表數據、雙文本比對'
        },
        writing: {
          name: '寫作測驗',
          stage: '複試',
          duration: '40 分鐘',
          types: [
            { type: '中譯英', desc: '將中文句子翻譯為正確英文' },
            { type: '引導寫作', desc: '根據提示撰寫約 120 字的短文' }
          ],
          keyTips: '注意段落結構（開頭、發展、結尾）與邏輯連貫性'
        },
        speaking: {
          name: '口說測驗',
          stage: '複試',
          duration: '約 15 分鐘',
          types: [
            { type: '朗讀短文', desc: '唸出一段文章，測驗發音語調' },
            { type: '回答問題', desc: '就日常話題表達個人看法' },
            { type: '看圖敘述', desc: '根據連環圖片敘述故事或情境' }
          ],
          keyTips: '練習以完整句子表達觀點，適度使用連接詞增加流暢度'
        }
      },

      grammarFocus: [
        { category: '進階時態', items: ['過去完成式（had + p.p.）', '現在完成進行式（have been + V-ing）', '各時態的被動語態'] },
        { category: '特殊句型', items: ['假設語氣（If + 過去式, would + V）', '倒裝句基礎', '分詞構句（V-ing / p.p. 開頭）', '關係子句（含 whose / where / when）', '間接引述（直接→間接 時態後退）', '名詞子句（that / whether / if 引導）'] },
        { category: '進階連接', items: ['讓步連接詞（although / even though / despite）', '因果連接詞（therefore / as a result / due to）', '轉折副詞（however / nevertheless / on the other hand）'] }
      ],

      topicAreas: [
        '工作面試與職場基礎',
        '旅遊規劃與訂票住宿',
        '新聞時事與社會議題',
        '科技生活與網路使用',
        '環保與永續發展',
        '人際關係與溝通技巧',
        '文化比較與風俗差異',
        '健康生活與醫療保健',
        '教育體制與學習方法',
        '媒體素養與資訊判讀'
      ],

      keySkills: [
        '能聽懂廣播、公告與簡易產品介紹',
        '能閱讀新聞、書信與說明文等中等長度文本',
        '能翻譯中等難度的句子並撰寫短篇文章',
        '能就日常話題陳述個人看法與進行簡單溝通'
      ],

      prepTips: [
        { tip: '擴充至 5,000 字彙', detail: '重視「搭配用法」(Collocation)，學會單字在情境中的使用' },
        { tip: '強化閱讀速度', detail: '練習略讀 (Skimming) 與掃讀 (Scanning) 技巧' },
        { tip: '文法轉為「理解式」', detail: '脫離單純找錯，改在閱讀中分析句構' },
        { tip: '口說自主練習', detail: '錄音回聽，練習用完整句子陳述觀點' },
        { tip: '嚴格控管時間', detail: '閱讀測驗時間緊湊，務必模擬實戰計時做題' }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🟣 中高級 High-Intermediate (CEFR B2)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      id: 'high-intermediate',
      name: '中高級',
      nameEn: 'High-Intermediate',
      cefr: 'B2',
      color: 'hsl(275, 75%, 55%)',
      emoji: '🟣',
      badge: '大學非英語主修程度',
      recommended: false,
      targetAudience: '大學畢業（非英語主修）、需進行學術討論或專業工作溝通者（如秘書、導遊、工程師）',
      vocabularyRange: '約 6,000 ~ 8,000 字',
      vocabularyNote: '含學術與專業領域進階詞彙',

      examStructure: {
        listening: {
          name: '聽力測驗',
          stage: '初試',
          duration: '約 35 分鐘',
          questionCount: '約 45 題',
          types: [
            { type: '簡短對話', desc: '聽複雜情境對話，推論說話者意圖' },
            { type: '簡短談話', desc: '聽較長段落的演講或報導' },
            { type: '聽讀整合題', desc: '結合聽力與試卷上的圖表文字進行綜合判斷' }
          ],
          keyTopics: '學術演講、專業簡報、深度訪談、辯論討論'
        },
        reading: {
          name: '閱讀測驗',
          stage: '初試',
          duration: '50 分鐘',
          questionCount: '約 40 題',
          types: [
            { type: '詞彙', desc: '學術與專業詞彙的精確運用' },
            { type: '段落填空', desc: '長篇文章的邏輯填空' },
            { type: '閱讀理解', desc: '含推論題、主旨題、多文本比對題' }
          ],
          keyTopics: '社論、學術文章、研究報告摘要、多篇文本比對'
        },
        writing: {
          name: '寫作測驗',
          stage: '複試',
          duration: '50 分鐘',
          types: [
            { type: '中譯英', desc: '翻譯含專業知識性詞彙的句子' },
            { type: '引導寫作', desc: '撰寫約 200 字的議論文或圖表寫作' }
          ],
          keyTips: '結構清晰、論點明確、證據支持，展現邏輯思辨能力'
        },
        speaking: {
          name: '口說測驗',
          stage: '複試',
          duration: '約 18 分鐘',
          types: [
            { type: '朗讀短文', desc: '唸出學術性文章段落' },
            { type: '回答問題', desc: '就社會議題表達深入看法' },
            { type: '看圖敘述', desc: '描述複雜情境圖並分析' },
            { type: '申述題', desc: '針對特定主題進行 2 分鐘獨白陳述' }
          ],
          keyTips: '加強批判性思考，練習將個人觀點邏輯化地組織並陳述'
        }
      },

      grammarFocus: [
        { category: '複雜句構', items: ['多重子句嵌套與長難句分析', '分裂句（It is...that...）', '強調句與倒裝句進階', '虛主詞 it 的各種用法', '省略句與簡化子句'] },
        { category: '高階文法', items: ['假設語氣各式變體（混合假設）', '情態助動詞的推測用法', '非限定關係子句', '獨立分詞構句', '名詞化表達（Nominalization）'] },
        { category: '學術寫作', items: ['學術轉折語（Moreover / Furthermore / Consequently）', '引用與改寫（Paraphrasing）的語法結構', '主題句與支持句的邏輯連結'] }
      ],

      topicAreas: [
        '學術論文與研究討論',
        '國際時事與政策分析',
        '專業領域溝通（商務、科技、法律、醫療）',
        '文化議題與跨文化溝通',
        '媒體分析與批判性閱讀',
        '環境科學與氣候變遷',
        '經濟趨勢與全球化',
        '教育政策與社會福利'
      ],

      keySkills: [
        '能理解複雜的專業或學術演講與討論',
        '能閱讀並分析社論、學術文章與研究報告',
        '能撰寫結構完整的議論文與摘要',
        '能就專業議題進行流暢的口頭報告與討論'
      ],

      prepTips: [
        { tip: '大量閱讀原文素材', detail: '訂閱 BBC、CNN、The Economist 等英文媒體' },
        { tip: '練習長難句分析', detail: '在閱讀中標記句子結構，找出主詞與主要動詞' },
        { tip: '議論文寫作訓練', detail: '每週練習一篇，注意「論點-論據-結論」架構' },
        { tip: '口說模擬練習', detail: '針對時事議題做 2 分鐘即興演說，錄音回聽改進' },
        { tip: '模擬實戰計時', detail: '閱讀測驗時間管理是通過的關鍵' }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🟠 高級 Advanced (CEFR C1)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      id: 'advanced',
      name: '高級',
      nameEn: 'Advanced',
      cefr: 'C1',
      color: 'hsl(25, 90%, 52%)',
      emoji: '🟠',
      badge: '英語主修 / 留學程度',
      recommended: false,
      targetAudience: '大學英語主修畢業、具備留學或長期海外生活背景、專業翻譯或學術研究者',
      vocabularyRange: '8,000 字以上',
      vocabularyNote: '涵蓋各專業領域深度詞彙',

      examStructure: {
        listening: {
          name: '聽力測驗',
          stage: '初試',
          duration: '約 40 分鐘',
          questionCount: '約 40 題',
          types: [
            { type: '簡短對話', desc: '聽辯論性質的複雜對話，分析不同觀點' },
            { type: '長篇談話', desc: '聽學術演講、專業研討會發言' },
            { type: '聽讀整合題', desc: '結合複雜圖表與聽力資訊進行分析推論' }
          ],
          keyTopics: '學術演講、專業研討、辯論對話、紀錄片解說'
        },
        reading: {
          name: '閱讀測驗',
          stage: '初試',
          duration: '60 分鐘',
          questionCount: '約 40 題',
          types: [
            { type: '詞彙', desc: '高難度詞彙的精確辨析與語境推斷' },
            { type: '段落填空', desc: '複雜學術文章的邏輯填空' },
            { type: '閱讀理解', desc: '長篇學術論文、專業期刊的深度分析' }
          ],
          keyTopics: '學術期刊、專業論文、深度報導、法律文件'
        },
        writing: {
          name: '寫作測驗',
          stage: '複試',
          duration: '60 分鐘',
          types: [
            { type: '摘要寫作', desc: '閱讀長篇文章後撰寫精練摘要' },
            { type: '引導寫作', desc: '撰寫約 300 字的學術議論文' }
          ],
          keyTips: '展現語言精鍊度與學術寫作規範，論證邏輯嚴密'
        },
        speaking: {
          name: '口說測驗',
          stage: '複試',
          duration: '約 20 分鐘',
          types: [
            { type: '暖身面談', desc: '與考官進行自我介紹與簡短對談' },
            { type: '看圖敘述', desc: '分析複雜圖片並表達深入見解' },
            { type: '申述題', desc: '針對學術或社會議題進行 3 分鐘深度陳述' },
            { type: '互動討論', desc: '就爭議性議題與考官進行深度交流' }
          ],
          keyTips: '要能即席就複雜議題進行深入分析，使用精確的學術語言'
        }
      },

      grammarFocus: [
        { category: '學術語法', items: ['複雜假設語氣（混合條件句、省略 if 倒裝）', '各種分裂句型與強調結構', '複雜被動語態（含完成式被動、情態動詞被動）', '抽象名詞化與正式書面語法', '平行結構與修辭對比'] },
        { category: '精鍊表達', items: ['語域切換（正式 vs 非正式）', '委婉語與外交用語', '學術引用格式與轉述結構', '精確的語氣與態度表達'] }
      ],

      topicAreas: [
        '學術研究與論文撰寫',
        '國際關係與外交政策',
        '科學前沿與技術創新',
        '哲學思辨與倫理議題',
        '法律條文與案例分析',
        '藝術評論與文學批評',
        '商業策略與經濟理論',
        '公共衛生與醫學研究'
      ],

      keySkills: [
        '能流暢聽懂學術演講、辯論與專業研討',
        '能閱讀並批判性分析專業期刊與學術論文',
        '能撰寫結構嚴謹的學術論文與專業報告',
        '能在專業場合流暢表達複雜觀點並進行深度交流'
      ],

      prepTips: [
        { tip: '沉浸式英語環境', detail: '收聽 TED Talks、學術 Podcast，閱讀原文學術期刊' },
        { tip: '學術寫作訓練', detail: '練習摘要寫作與議論文，注意引用與改寫技巧' },
        { tip: '批判性思考', detail: '對每篇閱讀文章提出正反兩面的論證分析' },
        { tip: '高階詞彙深化', detail: '使用英英字典，學習同義詞的細微語意差異' },
        { tip: '口說精鍊度', detail: '練習即席演說，強化論述的邏輯架構與用詞精確度' }
      ]
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // 🔴 優級 Superior (CEFR C2)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    {
      id: 'superior',
      name: '優級',
      nameEn: 'Superior',
      cefr: 'C2',
      color: 'hsl(0, 80%, 55%)',
      emoji: '🔴',
      badge: '接近母語者程度',
      recommended: false,
      targetAudience: '接近受過高等教育之英語母語人士、專業口譯筆譯、外交官、國際組織專業人員',
      vocabularyRange: '極高且精熟',
      vocabularyNote: '各專業領域的深度精熟運用，無明確上限',

      examStructure: {
        listening: {
          name: '聽力測驗',
          stage: '整合測驗',
          duration: '約 45 分鐘',
          questionCount: '約 35 題',
          types: [
            { type: '學術講座', desc: '聽完整學術演講並進行深度分析' },
            { type: '多方討論', desc: '聽多人辯論，辨析各方觀點與論證邏輯' },
            { type: '聽讀整合', desc: '結合文字資料進行綜合判斷與推論' }
          ],
          keyTopics: '學術講座、國際會議、深度辯論、專業研討'
        },
        reading: {
          name: '閱讀測驗',
          stage: '整合測驗',
          duration: '70 分鐘',
          questionCount: '約 35 題',
          types: [
            { type: '深度閱讀', desc: '閱讀長篇學術論文與專業文獻' },
            { type: '批判分析', desc: '分析作者論證邏輯、偵測偏見與假設' },
            { type: '綜合比較', desc: '比對多篇文獻的觀點異同' }
          ],
          keyTopics: '高階學術論文、專業文獻、跨領域整合分析'
        },
        writing: {
          name: '寫作測驗',
          stage: '複試',
          duration: '90 分鐘',
          types: [
            { type: '學術寫作', desc: '撰寫一篇 500 字以上的專業學術文章' },
            { type: '實務寫作', desc: '撰寫正式信函、報告或提案' }
          ],
          keyTips: '展現母語水準的精鍊度、文體掌控力與細膩的語氣調控'
        },
        speaking: {
          name: '口說測驗',
          stage: '複試',
          duration: '約 25 分鐘',
          types: [
            { type: '深度面談', desc: '與考官就專業議題進行深度討論' },
            { type: '即席簡報', desc: '針對複雜主題進行即興口頭報告' },
            { type: '角色互動', desc: '在模擬情境中展現適當的語言策略' }
          ],
          keyTips: '在各種場合均能使用適當策略進行有效且細膩的溝通'
        }
      },

      grammarFocus: [
        { category: '母語級掌控', items: ['所有英語語法的精熟運用', '文體風格的自如切換', '修辭技巧與語言策略', '語用學（Pragmatics）的細膩掌握', '文化語境中的得體表達'] }
      ],

      topicAreas: [
        '任何專業學術領域',
        '國際政治與外交談判',
        '法律實務與政策制定',
        '學術研究方法論',
        '跨文化深度溝通',
        '專業口筆譯實務',
        '高階商業談判與策略',
        '社會科學與人文批判'
      ],

      keySkills: [
        '能在任何情境下如母語般自如地使用英語',
        '能理解並產出任何主題的專業學術文本',
        '能在跨文化場合展現細膩的語言策略',
        '能進行專業等級的口譯與筆譯工作'
      ],

      prepTips: [
        { tip: '全英語沉浸', detail: '以英語為主要工作與生活語言，大量閱讀不同領域的原文文獻' },
        { tip: '專業寫作打磨', detail: '持續撰寫學術論文或專業文章，請母語者審閱修正' },
        { tip: '即席表達訓練', detail: '練習對任何突發主題進行有組織的即席口頭報告' },
        { tip: '跨文化素養', detail: '深入了解英語國家的文化、歷史、社會脈絡' },
        { tip: '注意事項', detail: '優級測驗較為特殊，通常需先取得高級合格證明，由學校或團體委託辦理' }
      ]
    }
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 📊 各大國際英檢能力對照表 (CEFR / GEPT / TOEIC / TOEFL / IELTS / Cambridge)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  comparisonTable: [
    {
      cefr: 'A2 (基礎級)',
      gept: '初級 (Elementary)',
      toeic: '225 - 545 分',
      toefl: 'TOEFL Junior / Primary',
      ielts: '3.0 - 3.5 分',
      cambridge: 'KET (Key)',
      ability: '能理解日常基礎用語，進行簡單直接的問答與社交溝通。'
    },
    {
      cefr: 'B1 (進階級)',
      gept: '中級 (Intermediate)',
      toeic: '550 - 780 分 (綠色證書)',
      toefl: 'TOEFL iBT 42 - 71 分',
      ielts: '4.0 - 5.0 分',
      cambridge: 'PET (Preliminary)',
      ability: '能就工作、學校及休閒等熟悉主題處理日常溝通與撰寫基本短文。'
    },
    {
      cefr: 'B2 (高階級)',
      gept: '中高級 (High-Intermediate)',
      toeic: '785 - 940 分 (藍色證書)',
      toefl: 'TOEFL iBT 72 - 94 分',
      ielts: '5.5 - 6.5 分',
      cambridge: 'FCE (First)',
      ability: '能理解複雜文本核心概念，流暢自然地與母語者即時互動與深入討論。'
    },
    {
      cefr: 'C1 (流利級)',
      gept: '高級 (Advanced)',
      toeic: '945 - 990 分 (金色證書)',
      toefl: 'TOEFL iBT 95 - 113 分',
      ielts: '7.0 - 8.0 分',
      cambridge: 'CAE (Advanced)',
      ability: '能理解長篇艱深文本，在學術、專業社交場合靈活運用英語表達複雜論述。'
    },
    {
      cefr: 'C2 (精通級)',
      gept: '優級 (Superior)',
      toeic: '990 滿分 (全項精通)',
      toefl: 'TOEFL iBT 114 - 120 分',
      ielts: '8.5 - 9.0 分',
      cambridge: 'CPE (Proficiency)',
      ability: '輕鬆理解任何聽讀資訊，即席表達極為精確細膩，達母語高階知識分子水準。'
    }
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🌐 各大英檢權威官方網站與精選自學學習資源
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  officialResources: [
    {
      name: 'LTTC 全民英檢官方網站 (GEPT)',
      org: '財團法人語言訓練測驗中心',
      url: 'https://www.lttc.ntu.edu.tw/gept.htm',
      desc: '官方報名簡章、考試日期日程表、歷屆題型示範與成績查詢。',
      badge: '官方入口'
    },
    {
      name: '全民英檢官方單字庫 (Word List)',
      org: 'LTTC 研發中心',
      url: 'https://www.lttc.ntu.edu.tw/geptwordlist.htm',
      desc: '教育部核定全民英檢初級至中高級各級別官方字彙表與參考標準。',
      badge: '必備字庫'
    },
    {
      name: '教育部 Cool English 酷英網',
      org: '教育部國民及學前教育署',
      url: 'https://www.coolenglish.edu.tw/',
      desc: '免費中小學英語自主學習平台，提供英檢專區、聽力、口說、閱讀遊戲化練習。',
      badge: '官方免費'
    },
    {
      name: 'TOEIC 臺灣官方網站',
      org: '忠欣股份有限公司 / ETS',
      url: 'https://www.toeic.com.tw/',
      desc: '全球商務與升學常用之多益測驗官方報名、測驗指南與證書申請。',
      badge: '國際認證'
    },
    {
      name: 'IELTS 雅思官方考試中心',
      org: 'British Council 英國文化協會',
      url: 'https://www.britishcouncil.org.tw/exam/ielts',
      desc: '全球留學與移民最具權威之英語能力評估測驗官方資源與模擬題庫。',
      badge: '留學必備'
    },
    {
      name: 'BBC Learning English',
      org: 'British Broadcasting Corporation',
      url: 'https://www.bbc.co.uk/learningenglish',
      desc: '英國廣播公司提供全球學習者的免費新聞英語、文法、發音、6分鐘英語單元。',
      badge: '國際名校'
    },
    {
      name: 'VoiceTube 看影片學英語',
      org: 'VoiceTube 台灣',
      url: 'https://tw.voicetube.com/',
      desc: '豐富的中英雙字幕影片、生活會話與聽力訓練，配合情境快速記憶單字。',
      badge: '影音情境'
    }
  ],

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 💡 聽說讀寫四項全方位高分備考策略
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  examStrategies: [
    {
      skill: '聽力測驗 (Listening)',
      icon: '🎧',
      tips: [
        { title: '審題搶先看選項', detail: '在廣播播放 Directions 與題目間隔時，先快速掃描圖片與選項關鍵字，預測可能聽到的情境。' },
        { title: '掌握疑問詞與時態', detail: '聽問答題時，第一時間鎖定「Who/Where/When/Why/How」與「過去/現在/未來」時態。' },
        { title: '注意轉折信號詞', detail: '對話中出現 but, however, actually, in fact 等轉折詞時，後面往往才是真正的核心答案！' }
      ]
    },
    {
      skill: '閱讀測驗 (Reading)',
      icon: '📖',
      tips: [
        { title: '嚴格控管作答配速', detail: '初級閱讀35分鐘35題，單選題每題不超過30秒，留充裕時間給長篇閱讀理解與圖表題。' },
        { title: '略讀 (Skimming) 抓主旨', detail: '閱讀短文先讀首段第一句與末段結論，迅速掌握文章大意再對照題目定位細節。' },
        { title: '克漏字重上下文邏輯', detail: '先看空格前後詞性與介系詞搭配，若為連接詞需判斷前後句是因果、轉折還是遞進關係。' }
      ]
    },
    {
      skill: '寫作測驗 (Writing)',
      icon: '✍️',
      tips: [
        { title: '句型精準優於艱澀', detail: '初級單句改寫與看圖寫作，重點是人稱、單複數、時態與拼字零失誤，不需強用生僻字。' },
        { title: '三段式清晰結構', detail: '中級引導寫作遵循「主題句(Topic) ➔ 支持細節(Support) ➔ 總結(Conclusion)」三段架構。' },
        { title: '善用轉折連接詞', detail: '適度運用 In addition, Therefore, However, For example 增強文章邏輯流暢度。' }
      ]
    },
    {
      skill: '口說測驗 (Speaking)',
      icon: '🗣️',
      tips: [
        { title: '發音清晰語調自然', detail: '朗讀短文注意逗號停頓、句尾降調、問句升調，避免過快而導致咬字不清。' },
        { title: '回答務求完整句', detail: '簡答題切忌只回答 Yes/No 或單一單字，盡量延伸 2-3 句補充原因或個人經驗。' },
        { title: '看圖敘述依序展開', detail: '看圖題按照「時間、地點、人物外貌、動作、心情/後續推測」的順序邏輯描述。' }
      ]
    }
  ]
};

