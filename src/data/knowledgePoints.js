// 🎓 最強小六 (Sixth) 2026 旗艦版・108 課綱全科 64 單元【明確微知識點旗艦數據庫】
// 涵蓋 8 大學科領域、64 個教學單元、192 個明確微概念知識點 (Micro-Knowledge Points)
// 每個知識點均具備：明確定義、核心公式/規律、破題攻略、防雷避坑、生活實用性、專屬 Infographic 與四維關聯知識點拓撲網絡

export const knowledgePointsData = [
  {
    "id": "kp-math-u1-1",
    "pointIndex": 0,
    "unitId": "math-u1",
    "unitIndex": 0,
    "subjectId": "math",
    "semester": "6A",
    "title": "最小質數是 2",
    "category": "數學・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "最小質數是 2：且為唯一偶數質數；「1 既非質數亦非合數」必考陷阱。",
    "formulaOrRule": "核心工具與心法：最大公因數 (GCD)",
    "strategyTip": "【審題觸發】當題目出現「平分、分裝、切成最大、每份一樣多且剛好分完」時，立即啟動「最大公因數 (GCD)」解題。考前速記：短除左側乘積為 GCD，左側加底部全乘為 LCM；切平分算 GCD，週期碰面算 LCM！",
    "trapAlert": "【避雷防錯】防雷必背：且為唯一偶數質數；「1 既非質數亦非合數」必考陷阱。",
    "practicalUtility": "【生活實用】伴手禮平分裝盒、公車班表發車重逢時間、磁磚鋪滿地板不切碎。",
    "textbookFocus": "康軒：側重生活情境分裝題（將餅乾、糖果平分裝盒求最多盒數與每盒數量）與植樹路燈間隔題。 ｜ 南一：側重兩數乘積定理（$A \\times B = \\text{GCD} \\times \\text{LCM}$）求未知數，以及質數與合數判斷陷阱。 ｜ 翰林：側重三數短除法連除、互質判定題，以及長方體積木裁切或堆疊成立方體之最小邊長題。",
    "juniorHighBridge": "國一第一冊第一章【質因數標準分解式】：以指數記號（如 2³ × 3²）表示質因數，並用於七年級分數約分通分。",
    "infographicKey": "info-math-u1-1",
    "relatedPoints": [
      {
        "id": "kp-math-u1-2",
        "title": "兩整數互質表示最大公因數為 1",
        "unitId": "math-u1",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u1-3",
        "title": "兩數乘積恆等式",
        "unitId": "math-u1",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u2-1",
        "title": "除以一個分數等於「乘以它的倒數",
        "unitId": "math-u2",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "bridge-math-u1",
        "isBridge": true,
        "title": "質因數標準分解式",
        "unitId": "math-u1",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一第一冊第一章【質因數標準分解式】：以指數記號（如 2³ × 3²）表示質因數，並用於七年級分數約分通分。"
      }
    ]
  },
  {
    "id": "kp-math-u1-2",
    "pointIndex": 1,
    "unitId": "math-u1",
    "unitIndex": 0,
    "subjectId": "math",
    "semester": "6A",
    "title": "兩整數互質表示最大公因數為 1",
    "category": "數學・運算算理與公式",
    "badgeColor": "amber",
    "definition": "兩整數互質表示最大公因數為 1：兩數本身不一定要是質數（如 8 與 9 互質）。",
    "formulaOrRule": "核心工具與心法：最小公倍數 (LCM)",
    "strategyTip": "【審題觸發】當題目出現「週期循環、同時相遇、拼成最小、下一次同時發車」時，立即啟動「最小公倍數 (LCM)」解題。考前速記：短除左側乘積為 GCD，左側加底部全乘為 LCM；切平分算 GCD，週期碰面算 LCM！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】伴手禮平分裝盒、公車班表發車重逢時間、磁磚鋪滿地板不切碎。",
    "textbookFocus": "康軒：側重生活情境分裝題（將餅乾、糖果平分裝盒求最多盒數與每盒數量）與植樹路燈間隔題。 ｜ 南一：側重兩數乘積定理（$A \\times B = \\text{GCD} \\times \\text{LCM}$）求未知數，以及質數與合數判斷陷阱。 ｜ 翰林：側重三數短除法連除、互質判定題，以及長方體積木裁切或堆疊成立方體之最小邊長題。",
    "juniorHighBridge": "國一第一冊第一章【質因數標準分解式】：以指數記號（如 2³ × 3²）表示質因數，並用於七年級分數約分通分。",
    "infographicKey": "info-math-u1-2",
    "relatedPoints": [
      {
        "id": "kp-math-u1-1",
        "title": "最小質數是 2",
        "unitId": "math-u1",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u1-3",
        "title": "兩數乘積恆等式",
        "unitId": "math-u1",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u2-1",
        "title": "除以一個分數等於「乘以它的倒數",
        "unitId": "math-u2",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "bridge-math-u1",
        "isBridge": true,
        "title": "質因數標準分解式",
        "unitId": "math-u1",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一第一冊第一章【質因數標準分解式】：以指數記號（如 2³ × 3²）表示質因數，並用於七年級分數約分通分。"
      }
    ]
  },
  {
    "id": "kp-math-u1-3",
    "pointIndex": 2,
    "unitId": "math-u1",
    "unitIndex": 0,
    "subjectId": "math",
    "semester": "6A",
    "title": "兩數乘積恆等式",
    "category": "數學・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "兩數乘積恆等式：$A \\times B = \\text{GCD}(A, B) \\times \\text{LCM}(A, B)$ 秒解未知數。",
    "formulaOrRule": "$A \\times B = \\text{GCD}(A, B) \\times \\text{LCM}(A, B)$ 秒解未知數。",
    "strategyTip": "【審題觸發】當題目出現「平分、分裝、切成最大、每份一樣多且剛好分完」時，立即啟動「最大公因數 (GCD)」解題。考前速記：短除左側乘積為 GCD，左側加底部全乘為 LCM；切平分算 GCD，週期碰面算 LCM！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】伴手禮平分裝盒、公車班表發車重逢時間、磁磚鋪滿地板不切碎。",
    "textbookFocus": "康軒：側重生活情境分裝題（將餅乾、糖果平分裝盒求最多盒數與每盒數量）與植樹路燈間隔題。 ｜ 南一：側重兩數乘積定理（$A \\times B = \\text{GCD} \\times \\text{LCM}$）求未知數，以及質數與合數判斷陷阱。 ｜ 翰林：側重三數短除法連除、互質判定題，以及長方體積木裁切或堆疊成立方體之最小邊長題。",
    "juniorHighBridge": "國一第一冊第一章【質因數標準分解式】：以指數記號（如 2³ × 3²）表示質因數，並用於七年級分數約分通分。",
    "infographicKey": "info-math-u1-3",
    "relatedPoints": [
      {
        "id": "kp-math-u1-1",
        "title": "最小質數是 2",
        "unitId": "math-u1",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u1-2",
        "title": "兩整數互質表示最大公因數為 1",
        "unitId": "math-u1",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u2-1",
        "title": "除以一個分數等於「乘以它的倒數",
        "unitId": "math-u2",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "bridge-math-u1",
        "isBridge": true,
        "title": "質因數標準分解式",
        "unitId": "math-u1",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一第一冊第一章【質因數標準分解式】：以指數記號（如 2³ × 3²）表示質因數，並用於七年級分數約分通分。"
      }
    ]
  },
  {
    "id": "kp-math-u2-1",
    "pointIndex": 0,
    "unitId": "math-u2",
    "unitIndex": 1,
    "subjectId": "math",
    "semester": "6A",
    "title": "除以一個分數等於「乘以它的倒數",
    "category": "數學・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "除以一個分數等於「乘以它的倒數」：$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$。",
    "formulaOrRule": "$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$。",
    "strategyTip": "【審題觸發】當題目出現「幾公升分裝一杯、幾分之幾倒滿、求可以分幾份」時，立即啟動「分數除法（帶分數必先化假分數）」解題。考前速記：除以分數等於乘以倒數！帶分數必先化假分數；真實剩餘量 = 除數 × 分數餘量！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】烘焙量杯分裝麵粉牛奶、布匹分切製作服裝、果汁分裝瓶杯。",
    "textbookFocus": "康軒：常考水桶分裝、繩子剪段之生活應用題，極愛考「剩下幾公升/公斤」真實餘數換算。 ｜ 南一：側重帶分數乘除先化假分數之運算防雷，以及商與被除數大小關係（除數小於1商變大）之判斷題。 ｜ 翰林：側重分數除以分數之算理圖解、數線跳步，以及基準量比較題（甲是乙的幾分之幾）。",
    "juniorHighBridge": "國一第一冊第二章【分數的四則運算】：結合負數之分數四則混合乘除與繁分數簡化。",
    "infographicKey": "info-math-u2-1",
    "relatedPoints": [
      {
        "id": "kp-math-u2-2",
        "title": "帶分數進行乘除運算時",
        "unitId": "math-u2",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u2-3",
        "title": "除法帶餘數陷阱",
        "unitId": "math-u2",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u3-1",
        "title": "除數是小數時",
        "unitId": "math-u3",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "bridge-math-u2",
        "isBridge": true,
        "title": "分數的四則運算",
        "unitId": "math-u2",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一第一冊第二章【分數的四則運算】：結合負數之分數四則混合乘除與繁分數簡化。"
      }
    ]
  },
  {
    "id": "kp-math-u2-2",
    "pointIndex": 1,
    "unitId": "math-u2",
    "unitIndex": 1,
    "subjectId": "math",
    "semester": "6A",
    "title": "帶分數進行乘除運算時",
    "category": "數學・運算算理與公式",
    "badgeColor": "amber",
    "definition": "帶分數進行乘除運算時：必須「一律先化為假分數」再進行約分，不可整數部直接相除。",
    "formulaOrRule": "核心工具與心法：除數單位量 × 分數餘數",
    "strategyTip": "【審題觸發】當題目出現「還剩下幾公升（真實現實剩量）」時，立即啟動「除數單位量 × 分數餘數」解題。考前速記：除以分數等於乘以倒數！帶分數必先化假分數；真實剩餘量 = 除數 × 分數餘量！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】烘焙量杯分裝麵粉牛奶、布匹分切製作服裝、果汁分裝瓶杯。",
    "textbookFocus": "康軒：常考水桶分裝、繩子剪段之生活應用題，極愛考「剩下幾公升/公斤」真實餘數換算。 ｜ 南一：側重帶分數乘除先化假分數之運算防雷，以及商與被除數大小關係（除數小於1商變大）之判斷題。 ｜ 翰林：側重分數除以分數之算理圖解、數線跳步，以及基準量比較題（甲是乙的幾分之幾）。",
    "juniorHighBridge": "國一第一冊第二章【分數的四則運算】：結合負數之分數四則混合乘除與繁分數簡化。",
    "infographicKey": "info-math-u2-2",
    "relatedPoints": [
      {
        "id": "kp-math-u2-1",
        "title": "除以一個分數等於「乘以它的倒數",
        "unitId": "math-u2",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u2-3",
        "title": "除法帶餘數陷阱",
        "unitId": "math-u2",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u3-1",
        "title": "除數是小數時",
        "unitId": "math-u3",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "bridge-math-u2",
        "isBridge": true,
        "title": "分數的四則運算",
        "unitId": "math-u2",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一第一冊第二章【分數的四則運算】：結合負數之分數四則混合乘除與繁分數簡化。"
      }
    ]
  },
  {
    "id": "kp-math-u2-3",
    "pointIndex": 2,
    "unitId": "math-u2",
    "unitIndex": 1,
    "subjectId": "math",
    "semester": "6A",
    "title": "除法帶餘數陷阱",
    "category": "數學・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "除法帶餘數陷阱：商數的分數餘量需乘回除數（每份基準量），方為「真實剩餘重量或長度」。",
    "formulaOrRule": "核心工具與心法：分數除法（帶分數必先化假分數）",
    "strategyTip": "【審題觸發】當題目出現「幾公升分裝一杯、幾分之幾倒滿、求可以分幾份」時，立即啟動「分數除法（帶分數必先化假分數）」解題。考前速記：除以分數等於乘以倒數！帶分數必先化假分數；真實剩餘量 = 除數 × 分數餘量！",
    "trapAlert": "【避雷防錯】防雷必背：商數的分數餘量需乘回除數（每份基準量），方為「真實剩餘重量或長度」。",
    "practicalUtility": "【生活實用】烘焙量杯分裝麵粉牛奶、布匹分切製作服裝、果汁分裝瓶杯。",
    "textbookFocus": "康軒：常考水桶分裝、繩子剪段之生活應用題，極愛考「剩下幾公升/公斤」真實餘數換算。 ｜ 南一：側重帶分數乘除先化假分數之運算防雷，以及商與被除數大小關係（除數小於1商變大）之判斷題。 ｜ 翰林：側重分數除以分數之算理圖解、數線跳步，以及基準量比較題（甲是乙的幾分之幾）。",
    "juniorHighBridge": "國一第一冊第二章【分數的四則運算】：結合負數之分數四則混合乘除與繁分數簡化。",
    "infographicKey": "info-math-u2-3",
    "relatedPoints": [
      {
        "id": "kp-math-u2-1",
        "title": "除以一個分數等於「乘以它的倒數",
        "unitId": "math-u2",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u2-2",
        "title": "帶分數進行乘除運算時",
        "unitId": "math-u2",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u3-1",
        "title": "除數是小數時",
        "unitId": "math-u3",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "bridge-math-u2",
        "isBridge": true,
        "title": "分數的四則運算",
        "unitId": "math-u2",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一第一冊第二章【分數的四則運算】：結合負數之分數四則混合乘除與繁分數簡化。"
      }
    ]
  },
  {
    "id": "kp-math-u3-1",
    "pointIndex": 0,
    "unitId": "math-u3",
    "unitIndex": 2,
    "subjectId": "math",
    "semester": "6A",
    "title": "除數是小數時",
    "category": "數學・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "除數是小數時：除數與被除數的小數點必須「向右移動相同位數」化為整數。",
    "formulaOrRule": "核心工具與心法：餘數小數點「垂直落下對齊原位置」",
    "strategyTip": "【審題觸發】當題目出現「除到整數位並求餘數」時，立即啟動「餘數小數點「垂直落下對齊原位置」」解題。考前速記：除數小數點移幾位，被除數就移幾位！商對新點、餘數對舊點，餘數必小於原除數！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】加油站油量精確計費、藥劑稀釋分裝毫升、匯率精確換算。",
    "textbookFocus": "康軒：常考汽油公升與油價換算、白米分裝，著重四捨五入求商到指定小數位（如小數第一位）。 ｜ 南一：側重被除數與除數同乘以 10 或 100 擴分算理，以及餘數小於除數的嚴謹檢核。 ｜ 翰林：側重直式除法雙向小數點對齊（商對齊新小數點，餘數對齊舊點）與商的大小關係判讀。",
    "juniorHighBridge": "國一第一冊第二章【有限小數與循環小數】：分數轉換為循環小數之規律推論與除法精度。",
    "infographicKey": "info-math-u3-1",
    "relatedPoints": [
      {
        "id": "kp-math-u3-2",
        "title": "小數直式除法黃金口訣",
        "unitId": "math-u3",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u3-3",
        "title": "商計算到指定位數並求餘數時",
        "unitId": "math-u3",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u4-1",
        "title": "比的前項與後項同乘或同除以不為…",
        "unitId": "math-u4",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "bridge-math-u3",
        "isBridge": true,
        "title": "有限小數與循環小數",
        "unitId": "math-u3",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一第一冊第二章【有限小數與循環小數】：分數轉換為循環小數之規律推論與除法精度。"
      }
    ]
  },
  {
    "id": "kp-math-u3-2",
    "pointIndex": 1,
    "unitId": "math-u3",
    "unitIndex": 2,
    "subjectId": "math",
    "semester": "6A",
    "title": "小數直式除法黃金口訣",
    "category": "數學・運算算理與公式",
    "badgeColor": "amber",
    "definition": "小數直式除法黃金口訣：「商的小數點對齊新點，餘數的小數點對齊原本舊點」！",
    "formulaOrRule": "核心工具與心法：算到該位的「下一位」再判斷進退位",
    "strategyTip": "【審題觸發】當題目出現「用四捨五入法求商到某一位」時，立即啟動「算到該位的「下一位」再判斷進退位」解題。考前速記：除數小數點移幾位，被除數就移幾位！商對新點、餘數對舊點，餘數必小於原除數！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】加油站油量精確計費、藥劑稀釋分裝毫升、匯率精確換算。",
    "textbookFocus": "康軒：常考汽油公升與油價換算、白米分裝，著重四捨五入求商到指定小數位（如小數第一位）。 ｜ 南一：側重被除數與除數同乘以 10 或 100 擴分算理，以及餘數小於除數的嚴謹檢核。 ｜ 翰林：側重直式除法雙向小數點對齊（商對齊新小數點，餘數對齊舊點）與商的大小關係判讀。",
    "juniorHighBridge": "國一第一冊第二章【有限小數與循環小數】：分數轉換為循環小數之規律推論與除法精度。",
    "infographicKey": "info-math-u3-2",
    "relatedPoints": [
      {
        "id": "kp-math-u3-1",
        "title": "除數是小數時",
        "unitId": "math-u3",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u3-3",
        "title": "商計算到指定位數並求餘數時",
        "unitId": "math-u3",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u4-1",
        "title": "比的前項與後項同乘或同除以不為…",
        "unitId": "math-u4",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "bridge-math-u3",
        "isBridge": true,
        "title": "有限小數與循環小數",
        "unitId": "math-u3",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一第一冊第二章【有限小數與循環小數】：分數轉換為循環小數之規律推論與除法精度。"
      }
    ]
  },
  {
    "id": "kp-math-u3-3",
    "pointIndex": 2,
    "unitId": "math-u3",
    "unitIndex": 2,
    "subjectId": "math",
    "semester": "6A",
    "title": "商計算到指定位數並求餘數時",
    "category": "數學・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "商計算到指定位數並求餘數時：餘數絕對「必須小於原始除數」。",
    "formulaOrRule": "核心工具與心法：餘數小數點「垂直落下對齊原位置」",
    "strategyTip": "【審題觸發】當題目出現「除到整數位並求餘數」時，立即啟動「餘數小數點「垂直落下對齊原位置」」解題。考前速記：除數小數點移幾位，被除數就移幾位！商對新點、餘數對舊點，餘數必小於原除數！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】加油站油量精確計費、藥劑稀釋分裝毫升、匯率精確換算。",
    "textbookFocus": "康軒：常考汽油公升與油價換算、白米分裝，著重四捨五入求商到指定小數位（如小數第一位）。 ｜ 南一：側重被除數與除數同乘以 10 或 100 擴分算理，以及餘數小於除數的嚴謹檢核。 ｜ 翰林：側重直式除法雙向小數點對齊（商對齊新小數點，餘數對齊舊點）與商的大小關係判讀。",
    "juniorHighBridge": "國一第一冊第二章【有限小數與循環小數】：分數轉換為循環小數之規律推論與除法精度。",
    "infographicKey": "info-math-u3-3",
    "relatedPoints": [
      {
        "id": "kp-math-u3-1",
        "title": "除數是小數時",
        "unitId": "math-u3",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u3-2",
        "title": "小數直式除法黃金口訣",
        "unitId": "math-u3",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u4-1",
        "title": "比的前項與後項同乘或同除以不為…",
        "unitId": "math-u4",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "bridge-math-u3",
        "isBridge": true,
        "title": "有限小數與循環小數",
        "unitId": "math-u3",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一第一冊第二章【有限小數與循環小數】：分數轉換為循環小數之規律推論與除法精度。"
      }
    ]
  },
  {
    "id": "kp-math-u4-1",
    "pointIndex": 0,
    "unitId": "math-u4",
    "unitIndex": 3,
    "subjectId": "math",
    "semester": "6A",
    "title": "比的前項與後項同乘或同除以不為…",
    "category": "數學・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "比的前項與後項同乘或同除以不為…：比的前項與後項同乘或同除以不為 0 的數，比值不變；比值必為「前項 ÷ 後項」。",
    "formulaOrRule": "核心工具與心法：前項 ÷ 後項（化為最簡分數或小數）",
    "strategyTip": "【審題觸發】當題目出現「求比值、調配比例、成分比例」時，立即啟動「前項 ÷ 後項（化為最簡分數或小數）」解題。考前速記：比值為前項除以後項！外項乘積等於內項乘積；成正比商固定，線必過原點！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】奶茶茶湯與鮮奶黃金比例、模型縮放比、地圖比例尺繪製。",
    "textbookFocus": "康軒：常考果汁調配（糖水比、水與原汁比）、影長與樹高之比例推算，長篇題幹生活素養題。 ｜ 南一：側重正比判斷（商值固定 $y \\div x = k$）與圖形通過原點 $(0,0)$ 之射線判讀。 ｜ 翰林：側重比的前項後項同乘同除、最簡整數比轉換（小數比、分數比化簡）與外項乘積等於內項乘積。",
    "juniorHighBridge": "國二第一冊【比例式與連比】：a:b = c:d 之內項積等於外項積 (ad = bc) 與正反比函數。",
    "infographicKey": "info-math-u4-1",
    "relatedPoints": [
      {
        "id": "kp-math-u4-2",
        "title": "比的內外項乘積定理",
        "unitId": "math-u4",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u4-3",
        "title": "正比關係三大特徵",
        "unitId": "math-u4",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u5-1",
        "title": "圓周長基本公式",
        "unitId": "math-u5",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "kp-sci-u6-1",
        "title": "槓桿平衡核心定理",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "跨域物理聯想",
        "badgeType": "cross",
        "desc": "比例與比值 ➔ 槓桿原理施力臂與抗力臂反比平衡"
      },
      {
        "id": "bridge-math-u4",
        "isBridge": true,
        "title": "比例式與連比",
        "unitId": "math-u4",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二第一冊【比例式與連比】：a:b = c:d 之內項積等於外項積 (ad = bc) 與正反比函數。"
      }
    ]
  },
  {
    "id": "kp-math-u4-2",
    "pointIndex": 1,
    "unitId": "math-u4",
    "unitIndex": 3,
    "subjectId": "math",
    "semester": "6A",
    "title": "比的內外項乘積定理",
    "category": "數學・運算算理與公式",
    "badgeColor": "amber",
    "definition": "比的內外項乘積定理：若 $a : b = c : d$，則外項乘積等於內項乘積（$a \\times d = b \\times c$）。",
    "formulaOrRule": "若 $a : b = c : d$，則外項乘積等於內項乘積（$a \\times d = b \\times c$）。",
    "strategyTip": "【審題觸發】當題目出現「化為最簡整數比」時，立即啟動「同乘分母公倍數或同除公因數」解題。考前速記：比值為前項除以後項！外項乘積等於內項乘積；成正比商固定，線必過原點！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】奶茶茶湯與鮮奶黃金比例、模型縮放比、地圖比例尺繪製。",
    "textbookFocus": "康軒：常考果汁調配（糖水比、水與原汁比）、影長與樹高之比例推算，長篇題幹生活素養題。 ｜ 南一：側重正比判斷（商值固定 $y \\div x = k$）與圖形通過原點 $(0,0)$ 之射線判讀。 ｜ 翰林：側重比的前項後項同乘同除、最簡整數比轉換（小數比、分數比化簡）與外項乘積等於內項乘積。",
    "juniorHighBridge": "國二第一冊【比例式與連比】：a:b = c:d 之內項積等於外項積 (ad = bc) 與正反比函數。",
    "infographicKey": "info-math-u4-2",
    "relatedPoints": [
      {
        "id": "kp-math-u4-1",
        "title": "比的前項與後項同乘或同除以不為…",
        "unitId": "math-u4",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u4-3",
        "title": "正比關係三大特徵",
        "unitId": "math-u4",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u5-1",
        "title": "圓周長基本公式",
        "unitId": "math-u5",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "kp-sci-u6-1",
        "title": "槓桿平衡核心定理",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "跨域物理聯想",
        "badgeType": "cross",
        "desc": "比例與比值 ➔ 槓桿原理施力臂與抗力臂反比平衡"
      },
      {
        "id": "bridge-math-u4",
        "isBridge": true,
        "title": "比例式與連比",
        "unitId": "math-u4",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二第一冊【比例式與連比】：a:b = c:d 之內項積等於外項積 (ad = bc) 與正反比函數。"
      }
    ]
  },
  {
    "id": "kp-math-u4-3",
    "pointIndex": 2,
    "unitId": "math-u4",
    "unitIndex": 3,
    "subjectId": "math",
    "semester": "6A",
    "title": "正比關係三大特徵",
    "category": "數學・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "正比關係三大特徵：商值固定（$y \\div x = k$）、圖形必為「通過原點 $(0,0)$ 的直線」。",
    "formulaOrRule": "商值固定（$y \\div x = k$）、圖形必為「通過原點 $(0,0)$ 的直線」。",
    "strategyTip": "【審題觸發】當題目出現「求比值、調配比例、成分比例」時，立即啟動「前項 ÷ 後項（化為最簡分數或小數）」解題。考前速記：比值為前項除以後項！外項乘積等於內項乘積；成正比商固定，線必過原點！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】奶茶茶湯與鮮奶黃金比例、模型縮放比、地圖比例尺繪製。",
    "textbookFocus": "康軒：常考果汁調配（糖水比、水與原汁比）、影長與樹高之比例推算，長篇題幹生活素養題。 ｜ 南一：側重正比判斷（商值固定 $y \\div x = k$）與圖形通過原點 $(0,0)$ 之射線判讀。 ｜ 翰林：側重比的前項後項同乘同除、最簡整數比轉換（小數比、分數比化簡）與外項乘積等於內項乘積。",
    "juniorHighBridge": "國二第一冊【比例式與連比】：a:b = c:d 之內項積等於外項積 (ad = bc) 與正反比函數。",
    "infographicKey": "info-math-u4-3",
    "relatedPoints": [
      {
        "id": "kp-math-u4-1",
        "title": "比的前項與後項同乘或同除以不為…",
        "unitId": "math-u4",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u4-2",
        "title": "比的內外項乘積定理",
        "unitId": "math-u4",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u5-1",
        "title": "圓周長基本公式",
        "unitId": "math-u5",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "kp-sci-u6-1",
        "title": "槓桿平衡核心定理",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "跨域物理聯想",
        "badgeType": "cross",
        "desc": "比例與比值 ➔ 槓桿原理施力臂與抗力臂反比平衡"
      },
      {
        "id": "bridge-math-u4",
        "isBridge": true,
        "title": "比例式與連比",
        "unitId": "math-u4",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二第一冊【比例式與連比】：a:b = c:d 之內項積等於外項積 (ad = bc) 與正反比函數。"
      }
    ]
  },
  {
    "id": "kp-math-u5-1",
    "pointIndex": 0,
    "unitId": "math-u5",
    "unitIndex": 4,
    "subjectId": "math",
    "semester": "6A",
    "title": "圓周長基本公式",
    "category": "數學・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "圓周長基本公式：$C = \\text{直徑} \\times 3.14 = 2 \\times \\text{半徑} \\times 3.14$。",
    "formulaOrRule": "$C = \\text{直徑} \\times 3.14 = 2 \\times \\text{半徑} \\times 3.14$。",
    "strategyTip": "【審題觸發】當題目出現「求滾動距離、摩天輪旋轉一圈、花圃圍欄長度」時，立即啟動「圓周長 = 直徑 × 3.14」解題。考前速記：圓周長 = 直徑 × 3.14；扇形周長 = 圓弧長 + 兩條半徑 ($L + 2r$)，絕不能忘加 $2r$！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】田徑場跑道起跑線起跑差、自行車輪胎尺寸與騎乘車速計算。",
    "textbookFocus": "康軒：常考時鐘時針分針走過之圓弧長、田徑場跑道周長計算、複合拱門外圍周長。 ｜ 南一：側重圓周率 $3.14$ 之直徑乘積算理，以及圓形滾動圈數求距離逆向運算。 ｜ 翰林：側重不同圓心角（$60^\\circ, 90^\\circ, 120^\\circ$）扇形弧長推導，以及扇形周長「必加兩條半徑」陷阱。",
    "juniorHighBridge": "國三第五冊【圓形幾何】：圓心角與圓周角度數定理、弦切角與弧長精確公式 (2πr × θ/360°)。",
    "infographicKey": "info-math-u5-1",
    "relatedPoints": [
      {
        "id": "kp-math-u5-2",
        "title": "扇形弧長公式",
        "unitId": "math-u5",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u5-3",
        "title": "段考最常漏算陷阱",
        "unitId": "math-u5",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u6-1",
        "title": "圓面積推導核心",
        "unitId": "math-u6",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "bridge-math-u5",
        "isBridge": true,
        "title": "圓形幾何",
        "unitId": "math-u5",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三第五冊【圓形幾何】：圓心角與圓周角度數定理、弦切角與弧長精確公式 (2πr × θ/360°)。"
      }
    ]
  },
  {
    "id": "kp-math-u5-2",
    "pointIndex": 1,
    "unitId": "math-u5",
    "unitIndex": 4,
    "subjectId": "math",
    "semester": "6A",
    "title": "扇形弧長公式",
    "category": "數學・運算算理與公式",
    "badgeColor": "amber",
    "definition": "扇形弧長公式：$L = 2 \\times r \\times 3.14 \\times \\frac{\\theta}{360^\\circ}$。",
    "formulaOrRule": "$L = 2 \\times r \\times 3.14 \\times \\frac{\\theta}{360^\\circ}$。",
    "strategyTip": "【審題觸發】當題目出現「求扇形周長（易錯陷阱題）」時，立即啟動「弧長 + 2個半徑（千萬別漏加兩側直邊！）」解題。考前速記：圓周長 = 直徑 × 3.14；扇形周長 = 圓弧長 + 兩條半徑 ($L + 2r$)，絕不能忘加 $2r$！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】田徑場跑道起跑線起跑差、自行車輪胎尺寸與騎乘車速計算。",
    "textbookFocus": "康軒：常考時鐘時針分針走過之圓弧長、田徑場跑道周長計算、複合拱門外圍周長。 ｜ 南一：側重圓周率 $3.14$ 之直徑乘積算理，以及圓形滾動圈數求距離逆向運算。 ｜ 翰林：側重不同圓心角（$60^\\circ, 90^\\circ, 120^\\circ$）扇形弧長推導，以及扇形周長「必加兩條半徑」陷阱。",
    "juniorHighBridge": "國三第五冊【圓形幾何】：圓心角與圓周角度數定理、弦切角與弧長精確公式 (2πr × θ/360°)。",
    "infographicKey": "info-math-u5-2",
    "relatedPoints": [
      {
        "id": "kp-math-u5-1",
        "title": "圓周長基本公式",
        "unitId": "math-u5",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u5-3",
        "title": "段考最常漏算陷阱",
        "unitId": "math-u5",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u6-1",
        "title": "圓面積推導核心",
        "unitId": "math-u6",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "bridge-math-u5",
        "isBridge": true,
        "title": "圓形幾何",
        "unitId": "math-u5",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三第五冊【圓形幾何】：圓心角與圓周角度數定理、弦切角與弧長精確公式 (2πr × θ/360°)。"
      }
    ]
  },
  {
    "id": "kp-math-u5-3",
    "pointIndex": 2,
    "unitId": "math-u5",
    "unitIndex": 4,
    "subjectId": "math",
    "semester": "6A",
    "title": "段考最常漏算陷阱",
    "category": "數學・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "段考最常漏算陷阱：扇形「周長」必須額外加上「兩條半徑」（$L + 2r$），不可只算圓弧長！",
    "formulaOrRule": "扇形「周長」必須額外加上「兩條半徑」（$L + 2r$），不可只算圓弧長！",
    "strategyTip": "【審題觸發】當題目出現「求滾動距離、摩天輪旋轉一圈、花圃圍欄長度」時，立即啟動「圓周長 = 直徑 × 3.14」解題。考前速記：圓周長 = 直徑 × 3.14；扇形周長 = 圓弧長 + 兩條半徑 ($L + 2r$)，絕不能忘加 $2r$！",
    "trapAlert": "【避雷防錯】防雷必背：扇形「周長」必須額外加上「兩條半徑」（$L + 2r$），不可只算圓弧長！",
    "practicalUtility": "【生活實用】田徑場跑道起跑線起跑差、自行車輪胎尺寸與騎乘車速計算。",
    "textbookFocus": "康軒：常考時鐘時針分針走過之圓弧長、田徑場跑道周長計算、複合拱門外圍周長。 ｜ 南一：側重圓周率 $3.14$ 之直徑乘積算理，以及圓形滾動圈數求距離逆向運算。 ｜ 翰林：側重不同圓心角（$60^\\circ, 90^\\circ, 120^\\circ$）扇形弧長推導，以及扇形周長「必加兩條半徑」陷阱。",
    "juniorHighBridge": "國三第五冊【圓形幾何】：圓心角與圓周角度數定理、弦切角與弧長精確公式 (2πr × θ/360°)。",
    "infographicKey": "info-math-u5-3",
    "relatedPoints": [
      {
        "id": "kp-math-u5-1",
        "title": "圓周長基本公式",
        "unitId": "math-u5",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u5-2",
        "title": "扇形弧長公式",
        "unitId": "math-u5",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u6-1",
        "title": "圓面積推導核心",
        "unitId": "math-u6",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "bridge-math-u5",
        "isBridge": true,
        "title": "圓形幾何",
        "unitId": "math-u5",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三第五冊【圓形幾何】：圓心角與圓周角度數定理、弦切角與弧長精確公式 (2πr × θ/360°)。"
      }
    ]
  },
  {
    "id": "kp-math-u6-1",
    "pointIndex": 0,
    "unitId": "math-u6",
    "unitIndex": 5,
    "subjectId": "math",
    "semester": "6A",
    "title": "圓面積推導核心",
    "category": "數學・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "圓面積推導核心：將圓切分成無數扇形拼接為平行四邊形，面積 $A = r \\times r \\times 3.14$。",
    "formulaOrRule": "將圓切分成無數扇形拼接為平行四邊形，面積 $A = r \\times r \\times 3.14$。",
    "strategyTip": "【審題觸發】當題目出現「鋪色葉片形（雙弧相交）」時，立即啟動「兩扇形面積和 − 正方形面積」解題。考前速記：圓面積 = $r \\times r \\times 3.14$；葉形面積 = $a^2 \\times 0.57$；圓環面積 = $(R^2 - r^2) \\times 3.14$！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】披薩尺寸比價性價比（12吋 vs 兩張6吋）、噴水池灌溉灑水覆蓋面積。",
    "textbookFocus": "康軒：常考草地上綁牛吃草的最大面積（扇形與角邊限制）、圓形花圃走道環形面積鋪設。 ｜ 南一：側重圓面積公式拼貼平行四邊形推導（半徑 $\\times$ 半周長），以及圓環面積平方差提取 3.14。 ｜ 翰林：側重經典葉形面積（正方形雙扇形重疊）、四角星形（正方形挖圓）之鋪色割補計算。",
    "juniorHighBridge": "國三第五冊【圓面積與弓形面積】：利用三角函數求割線三角形並相減求弓形面積。",
    "infographicKey": "info-math-u6-1",
    "relatedPoints": [
      {
        "id": "kp-math-u6-2",
        "title": "經典葉形鋪色面積大招",
        "unitId": "math-u6",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u6-3",
        "title": "圓環面積速解技巧",
        "unitId": "math-u6",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u7-1",
        "title": "速率三要素核心關係",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "kp-art-u1-1",
        "title": "色彩三要素本質",
        "unitId": "art-u1",
        "subjectId": "arts",
        "relation": "跨域美學幾何",
        "badgeType": "cross",
        "desc": "圓面積與扇形分割 ➔ 十二色相環幾何角度切割"
      },
      {
        "id": "bridge-math-u6",
        "isBridge": true,
        "title": "圓面積與弓形面積",
        "unitId": "math-u6",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三第五冊【圓面積與弓形面積】：利用三角函數求割線三角形並相減求弓形面積。"
      }
    ]
  },
  {
    "id": "kp-math-u6-2",
    "pointIndex": 1,
    "unitId": "math-u6",
    "unitIndex": 5,
    "subjectId": "math",
    "semester": "6A",
    "title": "經典葉形鋪色面積大招",
    "category": "數學・運算算理與公式",
    "badgeColor": "amber",
    "definition": "經典葉形鋪色面積大招：邊長為 $a$ 的正方形內雙扇形重疊，葉形面積為 $a^2 \\times 0.57$。",
    "formulaOrRule": "邊長為 $a$ 的正方形內雙扇形重疊，葉形面積為 $a^2 \\times 0.57$。",
    "strategyTip": "【審題觸發】當題目出現「甜甜圈圓環形鋪色面積」時，立即啟動「大圓面積 − 小圓面積 = (R² − r²) × 3.14」解題。考前速記：圓面積 = $r \\times r \\times 3.14$；葉形面積 = $a^2 \\times 0.57$；圓環面積 = $(R^2 - r^2) \\times 3.14$！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】披薩尺寸比價性價比（12吋 vs 兩張6吋）、噴水池灌溉灑水覆蓋面積。",
    "textbookFocus": "康軒：常考草地上綁牛吃草的最大面積（扇形與角邊限制）、圓形花圃走道環形面積鋪設。 ｜ 南一：側重圓面積公式拼貼平行四邊形推導（半徑 $\\times$ 半周長），以及圓環面積平方差提取 3.14。 ｜ 翰林：側重經典葉形面積（正方形雙扇形重疊）、四角星形（正方形挖圓）之鋪色割補計算。",
    "juniorHighBridge": "國三第五冊【圓面積與弓形面積】：利用三角函數求割線三角形並相減求弓形面積。",
    "infographicKey": "info-math-u6-2",
    "relatedPoints": [
      {
        "id": "kp-math-u6-1",
        "title": "圓面積推導核心",
        "unitId": "math-u6",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u6-3",
        "title": "圓環面積速解技巧",
        "unitId": "math-u6",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u7-1",
        "title": "速率三要素核心關係",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "kp-art-u1-1",
        "title": "色彩三要素本質",
        "unitId": "art-u1",
        "subjectId": "arts",
        "relation": "跨域美學幾何",
        "badgeType": "cross",
        "desc": "圓面積與扇形分割 ➔ 十二色相環幾何角度切割"
      },
      {
        "id": "bridge-math-u6",
        "isBridge": true,
        "title": "圓面積與弓形面積",
        "unitId": "math-u6",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三第五冊【圓面積與弓形面積】：利用三角函數求割線三角形並相減求弓形面積。"
      }
    ]
  },
  {
    "id": "kp-math-u6-3",
    "pointIndex": 2,
    "unitId": "math-u6",
    "unitIndex": 5,
    "subjectId": "math",
    "semester": "6A",
    "title": "圓環面積速解技巧",
    "category": "數學・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "圓環面積速解技巧：$A_{\\text{環}} = (R^2 - r^2) \\times 3.14$，先平方差再乘 3.14 大幅減少計算失誤。",
    "formulaOrRule": "$A_{\\text{環}} = (R^2 - r^2) \\times 3.14$，先平方差再乘 3.14 大幅減少計算失誤。",
    "strategyTip": "【審題觸發】當題目出現「鋪色葉片形（雙弧相交）」時，立即啟動「兩扇形面積和 − 正方形面積」解題。考前速記：圓面積 = $r \\times r \\times 3.14$；葉形面積 = $a^2 \\times 0.57$；圓環面積 = $(R^2 - r^2) \\times 3.14$！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】披薩尺寸比價性價比（12吋 vs 兩張6吋）、噴水池灌溉灑水覆蓋面積。",
    "textbookFocus": "康軒：常考草地上綁牛吃草的最大面積（扇形與角邊限制）、圓形花圃走道環形面積鋪設。 ｜ 南一：側重圓面積公式拼貼平行四邊形推導（半徑 $\\times$ 半周長），以及圓環面積平方差提取 3.14。 ｜ 翰林：側重經典葉形面積（正方形雙扇形重疊）、四角星形（正方形挖圓）之鋪色割補計算。",
    "juniorHighBridge": "國三第五冊【圓面積與弓形面積】：利用三角函數求割線三角形並相減求弓形面積。",
    "infographicKey": "info-math-u6-3",
    "relatedPoints": [
      {
        "id": "kp-math-u6-1",
        "title": "圓面積推導核心",
        "unitId": "math-u6",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u6-2",
        "title": "經典葉形鋪色面積大招",
        "unitId": "math-u6",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u7-1",
        "title": "速率三要素核心關係",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "kp-art-u1-1",
        "title": "色彩三要素本質",
        "unitId": "art-u1",
        "subjectId": "arts",
        "relation": "跨域美學幾何",
        "badgeType": "cross",
        "desc": "圓面積與扇形分割 ➔ 十二色相環幾何角度切割"
      },
      {
        "id": "bridge-math-u6",
        "isBridge": true,
        "title": "圓面積與弓形面積",
        "unitId": "math-u6",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三第五冊【圓面積與弓形面積】：利用三角函數求割線三角形並相減求弓形面積。"
      }
    ]
  },
  {
    "id": "kp-math-u7-1",
    "pointIndex": 0,
    "unitId": "math-u7",
    "unitIndex": 6,
    "subjectId": "math",
    "semester": "6B",
    "title": "速率三要素核心關係",
    "category": "數學・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "速率三要素核心關係：$\\text{速率} = \\frac{\\text{距離}}{\\text{時間}}$、$\\text{距離} = \\text{速率} \\times \\text{時間}$、$\\text{時間} = \\frac{\\text{距離}}{\\text{速率}}$（速率三角金字塔）。",
    "formulaOrRule": "$\\text{速率} = \\frac{\\text{距離}}{\\text{時間}}$、$\\text{距離} = \\text{速率} \\times \\text{時間}$、$\\text{時間} = \\frac{\\text{距離}}{\\text{速率}}$（速率三角金字塔）。",
    "strategyTip": "【審題觸發】當題目出現「求往返平均速率（高頻陷阱！）」時，立即啟動「總路程 ÷ 總時間（絕對不是兩速率相加除以2！）」解題。考前速記：先算括號內，再乘除後加減；相同因數提括號外，連除變為除以乘積！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】Google Maps 導航預估到達時間、颱風行進路徑與登陸時間推估、高鐵與客運車程比較。",
    "textbookFocus": "康軒：常考日常生活混合開銷記帳、多項商品打折加運費，重視四則運算先乘除後加減與括號層級。 ｜ 南一：側重連除化為除以乘積（$A \\div B \\div C = A \\div (B \\times C)$）與符號逆運算求解未知數。 ｜ 翰林：側重乘法分配律提取公因數（$a \\times b \\pm a \\times c = a(b \\pm c)$）速算技巧。",
    "juniorHighBridge": "國中理化第一冊【直線運動與平均速度】：位移與路程之本質區別、v-t 圖斜率（加速度）與曲線下面積（位移）。",
    "infographicKey": "info-math-u7-1",
    "relatedPoints": [
      {
        "id": "kp-math-u7-2",
        "title": "單位換算秒殺法則",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u7-3",
        "title": "平均速率致命陷阱",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u8-1",
        "title": "各類直柱體體積通用黃金公式",
        "unitId": "math-u8",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "kp-sci-u1-3",
        "title": "颱風氣流逆時針向中心旋轉輻合",
        "unitId": "sci-u1",
        "subjectId": "science",
        "relation": "跨域大氣物理",
        "badgeType": "cross",
        "desc": "速率距離時間 ➔ 颱風移動路徑速度與海陸風氣流"
      },
      {
        "id": "bridge-math-u7",
        "isBridge": true,
        "title": "直線運動與平均速度",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中理化第一冊【直線運動與平均速度】：位移與路程之本質區別、v-t 圖斜率（加速度）與曲線下面積（位移）。"
      }
    ]
  },
  {
    "id": "kp-math-u7-2",
    "pointIndex": 1,
    "unitId": "math-u7",
    "unitIndex": 6,
    "subjectId": "math",
    "semester": "6B",
    "title": "單位換算秒殺法則",
    "category": "數學・運算算理與公式",
    "badgeColor": "amber",
    "definition": "單位換算秒殺法則：$\\text{時速 (km/h)} \\div 3.6 = \\text{秒速 (m/s)}$；分速化秒速除以 60、秒速化分速乘 60。",
    "formulaOrRule": "$\\text{時速 (km/h)} \\div 3.6 = \\text{秒速 (m/s)}$；分速化秒速除以 60、秒速化分速乘 60。",
    "strategyTip": "【審題觸發】當題目出現「時速、分速、秒速單位互換」時，立即啟動「大單位換小單位乘 60，小單位換大單位除以 60」解題。考前速記：先算括號內，再乘除後加減；相同因數提括號外，連除變為除以乘積！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】Google Maps 導航預估到達時間、颱風行進路徑與登陸時間推估、高鐵與客運車程比較。",
    "textbookFocus": "康軒：常考日常生活混合開銷記帳、多項商品打折加運費，重視四則運算先乘除後加減與括號層級。 ｜ 南一：側重連除化為除以乘積（$A \\div B \\div C = A \\div (B \\times C)$）與符號逆運算求解未知數。 ｜ 翰林：側重乘法分配律提取公因數（$a \\times b \\pm a \\times c = a(b \\pm c)$）速算技巧。",
    "juniorHighBridge": "國中理化第一冊【直線運動與平均速度】：位移與路程之本質區別、v-t 圖斜率（加速度）與曲線下面積（位移）。",
    "infographicKey": "info-math-u7-2",
    "relatedPoints": [
      {
        "id": "kp-math-u7-1",
        "title": "速率三要素核心關係",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u7-3",
        "title": "平均速率致命陷阱",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u8-1",
        "title": "各類直柱體體積通用黃金公式",
        "unitId": "math-u8",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "kp-sci-u1-3",
        "title": "颱風氣流逆時針向中心旋轉輻合",
        "unitId": "sci-u1",
        "subjectId": "science",
        "relation": "跨域大氣物理",
        "badgeType": "cross",
        "desc": "速率距離時間 ➔ 颱風移動路徑速度與海陸風氣流"
      },
      {
        "id": "bridge-math-u7",
        "isBridge": true,
        "title": "直線運動與平均速度",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中理化第一冊【直線運動與平均速度】：位移與路程之本質區別、v-t 圖斜率（加速度）與曲線下面積（位移）。"
      }
    ]
  },
  {
    "id": "kp-math-u7-3",
    "pointIndex": 2,
    "unitId": "math-u7",
    "unitIndex": 6,
    "subjectId": "math",
    "semester": "6B",
    "title": "平均速率致命陷阱",
    "category": "數學・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "平均速率致命陷阱：平均速率必為「總距離 ÷ 總時間」，絕對不能直接將兩段速率相加除以 2！相向相遇「距離 ÷ 速度和」，同向追趕「距離差 ÷ 速度差」。",
    "formulaOrRule": "核心工具與心法：距離差 ÷ 速率差（追趕） 或 距離和 ÷ 速率和（相遇）",
    "strategyTip": "【審題觸發】當題目出現「同向追趕 / 反向相遇」時，立即啟動「距離差 ÷ 速率差（追趕） 或 距離和 ÷ 速率和（相遇）」解題。考前速記：先算括號內，再乘除後加減；相同因數提括號外，連除變為除以乘積！",
    "trapAlert": "【避雷防錯】防雷必背：平均速率必為「總距離 ÷ 總時間」，絕對不能直接將兩段速率相加除以 2！相向相遇「距離 ÷ 速度和」，同向追趕「距離差 ÷ 速度差」。",
    "practicalUtility": "【生活實用】Google Maps 導航預估到達時間、颱風行進路徑與登陸時間推估、高鐵與客運車程比較。",
    "textbookFocus": "康軒：常考日常生活混合開銷記帳、多項商品打折加運費，重視四則運算先乘除後加減與括號層級。 ｜ 南一：側重連除化為除以乘積（$A \\div B \\div C = A \\div (B \\times C)$）與符號逆運算求解未知數。 ｜ 翰林：側重乘法分配律提取公因數（$a \\times b \\pm a \\times c = a(b \\pm c)$）速算技巧。",
    "juniorHighBridge": "國中理化第一冊【直線運動與平均速度】：位移與路程之本質區別、v-t 圖斜率（加速度）與曲線下面積（位移）。",
    "infographicKey": "info-math-u7-3",
    "relatedPoints": [
      {
        "id": "kp-math-u7-1",
        "title": "速率三要素核心關係",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u7-2",
        "title": "單位換算秒殺法則",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u8-1",
        "title": "各類直柱體體積通用黃金公式",
        "unitId": "math-u8",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "kp-sci-u1-3",
        "title": "颱風氣流逆時針向中心旋轉輻合",
        "unitId": "sci-u1",
        "subjectId": "science",
        "relation": "跨域大氣物理",
        "badgeType": "cross",
        "desc": "速率距離時間 ➔ 颱風移動路徑速度與海陸風氣流"
      },
      {
        "id": "bridge-math-u7",
        "isBridge": true,
        "title": "直線運動與平均速度",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中理化第一冊【直線運動與平均速度】：位移與路程之本質區別、v-t 圖斜率（加速度）與曲線下面積（位移）。"
      }
    ]
  },
  {
    "id": "kp-math-u8-1",
    "pointIndex": 0,
    "unitId": "math-u8",
    "unitIndex": 7,
    "subjectId": "math",
    "semester": "6B",
    "title": "各類直柱體體積通用黃金公式",
    "category": "數學・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "各類直柱體體積通用黃金公式：體積 $V = \\text{底面積} \\times \\text{柱高}$。",
    "formulaOrRule": "體積 $V = \\text{底面積} \\times \\text{柱高}$。",
    "strategyTip": "【審題觸發】當題目出現「求角柱或圓柱體積」時，立即啟動「柱體體積 = 底面積 × 柱高」解題。考前速記：柱體體積 = 底面積 × 柱高；側面積 = 底面周長 × 柱高；表面積 = 側面積 + 底面積 × 2！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】飲料易開罐容量與鋁材成本最佳化、禮品包裝紙裁切、水塔蓄水噸數計算。",
    "textbookFocus": "康軒：常考不同柱體（三角柱、梯形柱、圓柱）生活容器容積、注水上升高度與排開水體積。 ｜ 南一：側重空心水管/水泥管柱表面積（外側面積 + 內側面積 + 上下兩底面環形面積）經典高難度考題。 ｜ 翰林：側重柱體側面積展開為長方形（長為底面周長、寬為柱高）與複合柱體表面積計算。",
    "juniorHighBridge": "國二第四冊【立體幾何圖形】：角錐、圓錐表面積展開扇形與錐體體積公式 (1/3 × 底面積 × 高)。",
    "infographicKey": "info-math-u8-1",
    "relatedPoints": [
      {
        "id": "kp-math-u8-2",
        "title": "柱體側面積展開必為「長方形",
        "unitId": "math-u8",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u8-3",
        "title": "空心水管與水泥管柱表面積",
        "unitId": "math-u8",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u9-1",
        "title": "放大圖與縮圖幾何性質",
        "unitId": "math-u9",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "bridge-math-u8",
        "isBridge": true,
        "title": "立體幾何圖形",
        "unitId": "math-u8",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二第四冊【立體幾何圖形】：角錐、圓錐表面積展開扇形與錐體體積公式 (1/3 × 底面積 × 高)。"
      }
    ]
  },
  {
    "id": "kp-math-u8-2",
    "pointIndex": 1,
    "unitId": "math-u8",
    "unitIndex": 7,
    "subjectId": "math",
    "semester": "6B",
    "title": "柱體側面積展開必為「長方形",
    "category": "數學・運算算理與公式",
    "badgeColor": "amber",
    "definition": "柱體側面積展開必為「長方形」：長方形的長即為「底面周長」，寬即為「柱高」。",
    "formulaOrRule": "核心工具與心法：表面積 = 側面總面積 (底面周長 × 柱高) + 2 個底面積",
    "strategyTip": "【審題觸發】當題目出現「求角柱或圓柱表面積」時，立即啟動「表面積 = 側面總面積 (底面周長 × 柱高) + 2 個底面積」解題。考前速記：柱體體積 = 底面積 × 柱高；側面積 = 底面周長 × 柱高；表面積 = 側面積 + 底面積 × 2！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】飲料易開罐容量與鋁材成本最佳化、禮品包裝紙裁切、水塔蓄水噸數計算。",
    "textbookFocus": "康軒：常考不同柱體（三角柱、梯形柱、圓柱）生活容器容積、注水上升高度與排開水體積。 ｜ 南一：側重空心水管/水泥管柱表面積（外側面積 + 內側面積 + 上下兩底面環形面積）經典高難度考題。 ｜ 翰林：側重柱體側面積展開為長方形（長為底面周長、寬為柱高）與複合柱體表面積計算。",
    "juniorHighBridge": "國二第四冊【立體幾何圖形】：角錐、圓錐表面積展開扇形與錐體體積公式 (1/3 × 底面積 × 高)。",
    "infographicKey": "info-math-u8-2",
    "relatedPoints": [
      {
        "id": "kp-math-u8-1",
        "title": "各類直柱體體積通用黃金公式",
        "unitId": "math-u8",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u8-3",
        "title": "空心水管與水泥管柱表面積",
        "unitId": "math-u8",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u9-1",
        "title": "放大圖與縮圖幾何性質",
        "unitId": "math-u9",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "bridge-math-u8",
        "isBridge": true,
        "title": "立體幾何圖形",
        "unitId": "math-u8",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二第四冊【立體幾何圖形】：角錐、圓錐表面積展開扇形與錐體體積公式 (1/3 × 底面積 × 高)。"
      }
    ]
  },
  {
    "id": "kp-math-u8-3",
    "pointIndex": 2,
    "unitId": "math-u8",
    "unitIndex": 7,
    "subjectId": "math",
    "semester": "6B",
    "title": "空心水管與水泥管柱表面積",
    "category": "數學・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "空心水管與水泥管柱表面積：包含「外側面積 + 內側面積 + 上下兩底面環形面積」。",
    "formulaOrRule": "核心工具與心法：外柱體積 − 內空心柱體積（或大底面積減小底面積後再乘柱高）",
    "strategyTip": "【審題觸發】當題目出現「空心柱體或複合柱體」時，立即啟動「外柱體積 − 內空心柱體積（或大底面積減小底面積後再乘柱高）」解題。考前速記：柱體體積 = 底面積 × 柱高；側面積 = 底面周長 × 柱高；表面積 = 側面積 + 底面積 × 2！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】飲料易開罐容量與鋁材成本最佳化、禮品包裝紙裁切、水塔蓄水噸數計算。",
    "textbookFocus": "康軒：常考不同柱體（三角柱、梯形柱、圓柱）生活容器容積、注水上升高度與排開水體積。 ｜ 南一：側重空心水管/水泥管柱表面積（外側面積 + 內側面積 + 上下兩底面環形面積）經典高難度考題。 ｜ 翰林：側重柱體側面積展開為長方形（長為底面周長、寬為柱高）與複合柱體表面積計算。",
    "juniorHighBridge": "國二第四冊【立體幾何圖形】：角錐、圓錐表面積展開扇形與錐體體積公式 (1/3 × 底面積 × 高)。",
    "infographicKey": "info-math-u8-3",
    "relatedPoints": [
      {
        "id": "kp-math-u8-1",
        "title": "各類直柱體體積通用黃金公式",
        "unitId": "math-u8",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u8-2",
        "title": "柱體側面積展開必為「長方形",
        "unitId": "math-u8",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u9-1",
        "title": "放大圖與縮圖幾何性質",
        "unitId": "math-u9",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "bridge-math-u8",
        "isBridge": true,
        "title": "立體幾何圖形",
        "unitId": "math-u8",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二第四冊【立體幾何圖形】：角錐、圓錐表面積展開扇形與錐體體積公式 (1/3 × 底面積 × 高)。"
      }
    ]
  },
  {
    "id": "kp-math-u9-1",
    "pointIndex": 0,
    "unitId": "math-u9",
    "unitIndex": 8,
    "subjectId": "math",
    "semester": "6B",
    "title": "放大圖與縮圖幾何性質",
    "category": "數學・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "放大圖與縮圖幾何性質：「對應角相等（角度完全不變）」、「對應邊成等比例」。",
    "formulaOrRule": "核心工具與心法：面積變為 n² 倍（高頻段考陷阱！）",
    "strategyTip": "【審題觸發】當題目出現「放大 n 倍後，面積變成幾倍」時，立即啟動「面積變為 n² 倍（高頻段考陷阱！）」解題。考前速記：距離 = 速率 × 時間；時速 $\\div 3.6$ 變秒速；平均速率 = 總距離 $\\div$ 總時間，切勿速度直接除以 2！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】看懂登山等高線地圖比例尺估算健行距離、室內設計裝潢平面配置圖、建築模型製作。",
    "textbookFocus": "康軒：常考高鐵、捷運、走路與跑步之時速與分速生活情境，以及平均速率計算。 ｜ 南一：側重順流逆流水流問題（順流速 = 船速 + 水速、逆流速 = 船速 - 水速）與平均速率嚴禁直接平均之陷阱。 ｜ 翰林：側重時速與秒速雙向互換（$\\div 3.6$ 與 $\\times 3.6$）及追趕問題（距離差 $\\div$ 速度差）。",
    "juniorHighBridge": "國三第五冊【相似形與相似三角形】：AA、SAS、SSS 相似性質證明、縮放中心與平行線截比例線段。",
    "infographicKey": "info-math-u9-1",
    "relatedPoints": [
      {
        "id": "kp-math-u9-2",
        "title": "面積放大規律大招",
        "unitId": "math-u9",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u9-3",
        "title": "比例尺三大表示法",
        "unitId": "math-u9",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u10-1",
        "title": "基準量與比較量核心定理",
        "unitId": "math-u10",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "經緯度座標與時區換算",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "跨域地理製圖",
        "badgeType": "cross",
        "desc": "比例尺縮放 ➔ 世界地圖比例尺與經緯度實距換算"
      },
      {
        "id": "bridge-math-u9",
        "isBridge": true,
        "title": "相似形與相似三角形",
        "unitId": "math-u9",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三第五冊【相似形與相似三角形】：AA、SAS、SSS 相似性質證明、縮放中心與平行線截比例線段。"
      }
    ]
  },
  {
    "id": "kp-math-u9-2",
    "pointIndex": 1,
    "unitId": "math-u9",
    "unitIndex": 8,
    "subjectId": "math",
    "semester": "6B",
    "title": "面積放大規律大招",
    "category": "數學・運算算理與公式",
    "badgeColor": "amber",
    "definition": "面積放大規律大招：長度放大 $n$ 倍，面積放大 $n^2$ 倍（如邊長變 3 倍，面積變 9 倍）。",
    "formulaOrRule": "長度放大 $n$ 倍，面積放大 $n^2$ 倍（如邊長變 3 倍，面積變 9 倍）。",
    "strategyTip": "【審題觸發】當題目出現「比例尺 1:50000 或圖示線段比例尺」時，立即啟動「地圖長度 : 實際長度 ➔ 實際距離 = 地圖距離 ÷ 比值」解題。考前速記：距離 = 速率 × 時間；時速 $\\div 3.6$ 變秒速；平均速率 = 總距離 $\\div$ 總時間，切勿速度直接除以 2！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】看懂登山等高線地圖比例尺估算健行距離、室內設計裝潢平面配置圖、建築模型製作。",
    "textbookFocus": "康軒：常考高鐵、捷運、走路與跑步之時速與分速生活情境，以及平均速率計算。 ｜ 南一：側重順流逆流水流問題（順流速 = 船速 + 水速、逆流速 = 船速 - 水速）與平均速率嚴禁直接平均之陷阱。 ｜ 翰林：側重時速與秒速雙向互換（$\\div 3.6$ 與 $\\times 3.6$）及追趕問題（距離差 $\\div$ 速度差）。",
    "juniorHighBridge": "國三第五冊【相似形與相似三角形】：AA、SAS、SSS 相似性質證明、縮放中心與平行線截比例線段。",
    "infographicKey": "info-math-u9-2",
    "relatedPoints": [
      {
        "id": "kp-math-u9-1",
        "title": "放大圖與縮圖幾何性質",
        "unitId": "math-u9",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u9-3",
        "title": "比例尺三大表示法",
        "unitId": "math-u9",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u10-1",
        "title": "基準量與比較量核心定理",
        "unitId": "math-u10",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "經緯度座標與時區換算",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "跨域地理製圖",
        "badgeType": "cross",
        "desc": "比例尺縮放 ➔ 世界地圖比例尺與經緯度實距換算"
      },
      {
        "id": "bridge-math-u9",
        "isBridge": true,
        "title": "相似形與相似三角形",
        "unitId": "math-u9",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三第五冊【相似形與相似三角形】：AA、SAS、SSS 相似性質證明、縮放中心與平行線截比例線段。"
      }
    ]
  },
  {
    "id": "kp-math-u9-3",
    "pointIndex": 2,
    "unitId": "math-u9",
    "unitIndex": 8,
    "subjectId": "math",
    "semester": "6B",
    "title": "比例尺三大表示法",
    "category": "數學・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "比例尺三大表示法：比值式（$1:25000$）、分數式（$\\frac{1}{25000}$）、線段圖；實際距離 = 圖上距離 ÷ 比例尺。",
    "formulaOrRule": "比值式（$1:25000$）、分數式（$\\frac{1}{25000}$）、線段圖；實際距離 = 圖上距離 ÷ 比例尺。",
    "strategyTip": "【審題觸發】當題目出現「對應角與對應邊變化」時，立即啟動「對應角永遠不變，對應邊長度等比縮放」解題。考前速記：距離 = 速率 × 時間；時速 $\\div 3.6$ 變秒速；平均速率 = 總距離 $\\div$ 總時間，切勿速度直接除以 2！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】看懂登山等高線地圖比例尺估算健行距離、室內設計裝潢平面配置圖、建築模型製作。",
    "textbookFocus": "康軒：常考高鐵、捷運、走路與跑步之時速與分速生活情境，以及平均速率計算。 ｜ 南一：側重順流逆流水流問題（順流速 = 船速 + 水速、逆流速 = 船速 - 水速）與平均速率嚴禁直接平均之陷阱。 ｜ 翰林：側重時速與秒速雙向互換（$\\div 3.6$ 與 $\\times 3.6$）及追趕問題（距離差 $\\div$ 速度差）。",
    "juniorHighBridge": "國三第五冊【相似形與相似三角形】：AA、SAS、SSS 相似性質證明、縮放中心與平行線截比例線段。",
    "infographicKey": "info-math-u9-3",
    "relatedPoints": [
      {
        "id": "kp-math-u9-1",
        "title": "放大圖與縮圖幾何性質",
        "unitId": "math-u9",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u9-2",
        "title": "面積放大規律大招",
        "unitId": "math-u9",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u10-1",
        "title": "基準量與比較量核心定理",
        "unitId": "math-u10",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "經緯度座標與時區換算",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "跨域地理製圖",
        "badgeType": "cross",
        "desc": "比例尺縮放 ➔ 世界地圖比例尺與經緯度實距換算"
      },
      {
        "id": "bridge-math-u9",
        "isBridge": true,
        "title": "相似形與相似三角形",
        "unitId": "math-u9",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三第五冊【相似形與相似三角形】：AA、SAS、SSS 相似性質證明、縮放中心與平行線截比例線段。"
      }
    ]
  },
  {
    "id": "kp-math-u10-1",
    "pointIndex": 0,
    "unitId": "math-u10",
    "unitIndex": 9,
    "subjectId": "math",
    "semester": "6B",
    "title": "基準量與比較量核心定理",
    "category": "數學・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "基準量與比較量核心定理：$\\text{比較量} = \\text{基準量} \\times \\text{比值（倍數）}$；「被比的為比較量，當標準的為基準量 (1)」。",
    "formulaOrRule": "$\\text{比較量} = \\text{基準量} \\times \\text{比值（倍數）}$；「被比的為比較量，當標準的為基準量 (1)」。",
    "strategyTip": "【審題觸發】當題目出現「「...是...的幾倍」、「比...多/少幾成」」時，立即啟動「「的」後方或比的基準項即為基準量（當作 1）」解題。考前速記：「被比的是比較量，當標準的是基準量」；和倍除以一加倍數，差倍除以倍數差！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】百貨公司週年慶打折促銷滿千送百比價、薪資年終獎金加成計算、投資理財本利和計算。",
    "textbookFocus": "康軒：常考購物折扣利潤（加兩成、打八五折）、父子年齡差倍、母子薪資生活應用題。 ｜ 南一：側重基準量為 1 之比值除法本質，和倍問題 $\\div (1 + \\text{倍數})$、差倍問題 $\\div (|1 - \\text{倍數}|)$。 ｜ 翰林：側重線段圖繪製比較量與基準量，以及經典「雞兔同籠」假設法解題步驟。",
    "juniorHighBridge": "國一第一冊第四章【二元一次聯立方程式】：假設 x 與 y 列式求解；國二【等差數列】：週期植樹間隔數規律。",
    "infographicKey": "info-math-u10-1",
    "relatedPoints": [
      {
        "id": "kp-math-u10-2",
        "title": "和倍問題大招",
        "unitId": "math-u10",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u10-3",
        "title": "經典雞兔同籠假設法",
        "unitId": "math-u10",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u11-1",
        "title": "等量公理本質",
        "unitId": "math-u11",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "kp-soc-u3-1",
        "title": "臺灣產業三階段升級",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "跨域經濟量化",
        "badgeType": "cross",
        "desc": "基準量與比較量 ➔ 產業成長率與進出口倍數比較"
      },
      {
        "id": "bridge-math-u10",
        "isBridge": true,
        "title": "二元一次聯立方程式",
        "unitId": "math-u10",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一第一冊第四章【二元一次聯立方程式】：假設 x 與 y 列式求解；國二【等差數列】：週期植樹間隔數規律。"
      }
    ]
  },
  {
    "id": "kp-math-u10-2",
    "pointIndex": 1,
    "unitId": "math-u10",
    "unitIndex": 9,
    "subjectId": "math",
    "semester": "6B",
    "title": "和倍問題大招",
    "category": "數學・運算算理與公式",
    "badgeColor": "amber",
    "definition": "和倍問題大招：$\\text{基準量} = \\text{兩量總和} \\div (1 + \\text{倍數})$；差倍問題除以 $(|1 - \\text{倍數}|)$。",
    "formulaOrRule": "$\\text{基準量} = \\text{兩量總和} \\div (1 + \\text{倍數})$；差倍問題除以 $(|1 - \\text{倍數}|)$。",
    "strategyTip": "【審題觸發】當題目出現「母子和與母子差（本利和、加成、打折）」時，立即啟動「基準量 × (1 + 比值) 或 基準量 × (1 − 比值)」解題。考前速記：「被比的是比較量，當標準的是基準量」；和倍除以一加倍數，差倍除以倍數差！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】百貨公司週年慶打折促銷滿千送百比價、薪資年終獎金加成計算、投資理財本利和計算。",
    "textbookFocus": "康軒：常考購物折扣利潤（加兩成、打八五折）、父子年齡差倍、母子薪資生活應用題。 ｜ 南一：側重基準量為 1 之比值除法本質，和倍問題 $\\div (1 + \\text{倍數})$、差倍問題 $\\div (|1 - \\text{倍數}|)$。 ｜ 翰林：側重線段圖繪製比較量與基準量，以及經典「雞兔同籠」假設法解題步驟。",
    "juniorHighBridge": "國一第一冊第四章【二元一次聯立方程式】：假設 x 與 y 列式求解；國二【等差數列】：週期植樹間隔數規律。",
    "infographicKey": "info-math-u10-2",
    "relatedPoints": [
      {
        "id": "kp-math-u10-1",
        "title": "基準量與比較量核心定理",
        "unitId": "math-u10",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u10-3",
        "title": "經典雞兔同籠假設法",
        "unitId": "math-u10",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u11-1",
        "title": "等量公理本質",
        "unitId": "math-u11",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "kp-soc-u3-1",
        "title": "臺灣產業三階段升級",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "跨域經濟量化",
        "badgeType": "cross",
        "desc": "基準量與比較量 ➔ 產業成長率與進出口倍數比較"
      },
      {
        "id": "bridge-math-u10",
        "isBridge": true,
        "title": "二元一次聯立方程式",
        "unitId": "math-u10",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一第一冊第四章【二元一次聯立方程式】：假設 x 與 y 列式求解；國二【等差數列】：週期植樹間隔數規律。"
      }
    ]
  },
  {
    "id": "kp-math-u10-3",
    "pointIndex": 2,
    "unitId": "math-u10",
    "unitIndex": 9,
    "subjectId": "math",
    "semester": "6B",
    "title": "經典雞兔同籠假設法",
    "category": "數學・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "經典雞兔同籠假設法：全假設為雞（2腳），則少算的腳數全部補給兔子（$\\text{兔數} = \\frac{\\text{少算腳數}}{4-2}$）。",
    "formulaOrRule": "全假設為雞（2腳），則少算的腳數全部補給兔子（$\\text{兔數} = \\frac{\\text{少算腳數}}{4-2}$）。",
    "strategyTip": "【審題觸發】當題目出現「雞兔同籠、硬幣張數、答對答錯得分」時，立即啟動「全假設法：總差額 ÷ 單位個體差額 = 另一種數量」解題。考前速記：「被比的是比較量，當標準的是基準量」；和倍除以一加倍數，差倍除以倍數差！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】百貨公司週年慶打折促銷滿千送百比價、薪資年終獎金加成計算、投資理財本利和計算。",
    "textbookFocus": "康軒：常考購物折扣利潤（加兩成、打八五折）、父子年齡差倍、母子薪資生活應用題。 ｜ 南一：側重基準量為 1 之比值除法本質，和倍問題 $\\div (1 + \\text{倍數})$、差倍問題 $\\div (|1 - \\text{倍數}|)$。 ｜ 翰林：側重線段圖繪製比較量與基準量，以及經典「雞兔同籠」假設法解題步驟。",
    "juniorHighBridge": "國一第一冊第四章【二元一次聯立方程式】：假設 x 與 y 列式求解；國二【等差數列】：週期植樹間隔數規律。",
    "infographicKey": "info-math-u10-3",
    "relatedPoints": [
      {
        "id": "kp-math-u10-1",
        "title": "基準量與比較量核心定理",
        "unitId": "math-u10",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u10-2",
        "title": "和倍問題大招",
        "unitId": "math-u10",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u11-1",
        "title": "等量公理本質",
        "unitId": "math-u11",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "kp-soc-u3-1",
        "title": "臺灣產業三階段升級",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "跨域經濟量化",
        "badgeType": "cross",
        "desc": "基準量與比較量 ➔ 產業成長率與進出口倍數比較"
      },
      {
        "id": "bridge-math-u10",
        "isBridge": true,
        "title": "二元一次聯立方程式",
        "unitId": "math-u10",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一第一冊第四章【二元一次聯立方程式】：假設 x 與 y 列式求解；國二【等差數列】：週期植樹間隔數規律。"
      }
    ]
  },
  {
    "id": "kp-math-u11-1",
    "pointIndex": 0,
    "unitId": "math-u11",
    "unitIndex": 10,
    "subjectId": "math",
    "semester": "6B",
    "title": "等量公理本質",
    "category": "數學・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "等量公理本質：等號兩邊同時加、減、乘、除以同一個不為 0 的數，等式依然成立。",
    "formulaOrRule": "核心工具與心法：依題意列式 ➔ 等量加減乘除消去常數項",
    "strategyTip": "【審題觸發】當題目出現「列出算式並求未知數 x」時，立即啟動「依題意列式 ➔ 等量加減乘除消去常數項」解題。考前速記：天平平衡兩邊同運算；左加移右變減、左乘移右變除，求得 $x$ 務必代回驗算！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】超市購物預算湊整打折計算、手機資費方案分段計價比較、生活逆推回溯問題。",
    "textbookFocus": "康軒：常考生活文字題列出含有未知數 $x$ 的等式（如年齡、買票、分裝），並移項求解。 ｜ 南一：側重括號與負號移項變號規則，以及列式後求出答案必須「代回原題驗算」的防雷防呆。 ｜ 翰林：側重等量公理天平平衡圖解（等號兩邊同加、同減、同乘、同除非零數）與步驟規範。",
    "juniorHighBridge": "國一第一冊第三章【一元一次方程式】：移項法則（移過等號正變負、乘變除）、去括號與去分母求解。",
    "infographicKey": "info-math-u11-1",
    "relatedPoints": [
      {
        "id": "kp-math-u11-2",
        "title": "移項法則直觀心法",
        "unitId": "math-u11",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u11-3",
        "title": "列式應用題標準三步驟",
        "unitId": "math-u11",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u12-1",
        "title": "圓形圖圓心角計算定理",
        "unitId": "math-u12",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "kp-sci-u6-1",
        "title": "槓桿平衡核心定理",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "跨域等量平衡",
        "badgeType": "cross",
        "desc": "等量公理 ➔ 天平與槓桿左右力矩等值平衡"
      },
      {
        "id": "bridge-math-u11",
        "isBridge": true,
        "title": "一元一次方程式",
        "unitId": "math-u11",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一第一冊第三章【一元一次方程式】：移項法則（移過等號正變負、乘變除）、去括號與去分母求解。"
      }
    ]
  },
  {
    "id": "kp-math-u11-2",
    "pointIndex": 1,
    "unitId": "math-u11",
    "unitIndex": 10,
    "subjectId": "math",
    "semester": "6B",
    "title": "移項法則直觀心法",
    "category": "數學・運算算理與公式",
    "badgeColor": "amber",
    "definition": "移項法則直觀心法：左加移右變減、左乘移右變除；嚴格遵循符號變號原則。",
    "formulaOrRule": "核心工具與心法：若 a = b，則 a + c = b + c；a − c = b − c",
    "strategyTip": "【審題觸發】當題目出現「等量加法/減法公理」時，立即啟動「若 a = b，則 a + c = b + c；a − c = b − c」解題。考前速記：天平平衡兩邊同運算；左加移右變減、左乘移右變除，求得 $x$ 務必代回驗算！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】超市購物預算湊整打折計算、手機資費方案分段計價比較、生活逆推回溯問題。",
    "textbookFocus": "康軒：常考生活文字題列出含有未知數 $x$ 的等式（如年齡、買票、分裝），並移項求解。 ｜ 南一：側重括號與負號移項變號規則，以及列式後求出答案必須「代回原題驗算」的防雷防呆。 ｜ 翰林：側重等量公理天平平衡圖解（等號兩邊同加、同減、同乘、同除非零數）與步驟規範。",
    "juniorHighBridge": "國一第一冊第三章【一元一次方程式】：移項法則（移過等號正變負、乘變除）、去括號與去分母求解。",
    "infographicKey": "info-math-u11-2",
    "relatedPoints": [
      {
        "id": "kp-math-u11-1",
        "title": "等量公理本質",
        "unitId": "math-u11",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u11-3",
        "title": "列式應用題標準三步驟",
        "unitId": "math-u11",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u12-1",
        "title": "圓形圖圓心角計算定理",
        "unitId": "math-u12",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "kp-sci-u6-1",
        "title": "槓桿平衡核心定理",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "跨域等量平衡",
        "badgeType": "cross",
        "desc": "等量公理 ➔ 天平與槓桿左右力矩等值平衡"
      },
      {
        "id": "bridge-math-u11",
        "isBridge": true,
        "title": "一元一次方程式",
        "unitId": "math-u11",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一第一冊第三章【一元一次方程式】：移項法則（移過等號正變負、乘變除）、去括號與去分母求解。"
      }
    ]
  },
  {
    "id": "kp-math-u11-3",
    "pointIndex": 2,
    "unitId": "math-u11",
    "unitIndex": 10,
    "subjectId": "math",
    "semester": "6B",
    "title": "列式應用題標準三步驟",
    "category": "數學・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "列式應用題標準三步驟：1. 設未知數 $x$ ➔ 2. 依題意列出等式 ➔ 3. 移項求出 $x$ 並帶回驗算。",
    "formulaOrRule": "1. 設未知數 $x$ ➔ 2. 依題意列出等式 ➔ 3. 移項求出 $x$ 並帶回驗算。",
    "strategyTip": "【審題觸發】當題目出現「等量乘法/除法公理」時，立即啟動「若 a = b，則 a × c = b × c；a ÷ c = b ÷ c (c ≠ 0)」解題。考前速記：天平平衡兩邊同運算；左加移右變減、左乘移右變除，求得 $x$ 務必代回驗算！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】超市購物預算湊整打折計算、手機資費方案分段計價比較、生活逆推回溯問題。",
    "textbookFocus": "康軒：常考生活文字題列出含有未知數 $x$ 的等式（如年齡、買票、分裝），並移項求解。 ｜ 南一：側重括號與負號移項變號規則，以及列式後求出答案必須「代回原題驗算」的防雷防呆。 ｜ 翰林：側重等量公理天平平衡圖解（等號兩邊同加、同減、同乘、同除非零數）與步驟規範。",
    "juniorHighBridge": "國一第一冊第三章【一元一次方程式】：移項法則（移過等號正變負、乘變除）、去括號與去分母求解。",
    "infographicKey": "info-math-u11-3",
    "relatedPoints": [
      {
        "id": "kp-math-u11-1",
        "title": "等量公理本質",
        "unitId": "math-u11",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u11-2",
        "title": "移項法則直觀心法",
        "unitId": "math-u11",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u12-1",
        "title": "圓形圖圓心角計算定理",
        "unitId": "math-u12",
        "subjectId": "math",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：數學・觀念本質與定義"
      },
      {
        "id": "kp-sci-u6-1",
        "title": "槓桿平衡核心定理",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "跨域等量平衡",
        "badgeType": "cross",
        "desc": "等量公理 ➔ 天平與槓桿左右力矩等值平衡"
      },
      {
        "id": "bridge-math-u11",
        "isBridge": true,
        "title": "一元一次方程式",
        "unitId": "math-u11",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一第一冊第三章【一元一次方程式】：移項法則（移過等號正變負、乘變除）、去括號與去分母求解。"
      }
    ]
  },
  {
    "id": "kp-math-u12-1",
    "pointIndex": 0,
    "unitId": "math-u12",
    "unitIndex": 11,
    "subjectId": "math",
    "semester": "6B",
    "title": "圓形圖圓心角計算定理",
    "category": "數學・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "圓形圖圓心角計算定理：$\\text{圓心角} = 360^\\circ \\times \\text{該項所佔百分率}$。",
    "formulaOrRule": "$\\text{圓心角} = 360^\\circ \\times \\text{該項所佔百分率}$。",
    "strategyTip": "【審題觸發】當題目出現「求某項目在圓形圖中的圓心角」時，立即啟動「360° × 該項百分率」解題。考前速記：全圓比例總和為 100%，圓心角總和為 $360^\\circ$；圓心角 = $360^\\circ \\times \\text{百分率}$！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】家庭每月各項支出圓餅圖、民調政黨支持度分配、手機儲存空間分析。",
    "textbookFocus": "康軒：常考家庭月支出、班級幹部選舉票數圓形圖判讀，考驗百分率與圓心角互換。 ｜ 南一：側重四捨五入後總和 99% 或 101% 時之最大項調整配平原則，以及升中統計圖表先修銜接。 ｜ 翰林：側重圓心角計算（$360^\\circ \\times \\%$）與長條圖、折線圖、圓形圖適用時機辨析。",
    "juniorHighBridge": "國三第六冊【統計圖表與資料分析】：箱形圖、百分位數、四分位距與抽樣調查信度。",
    "infographicKey": "info-math-u12-1",
    "relatedPoints": [
      {
        "id": "kp-math-u12-2",
        "title": "全圓各項比例總和必須恰好等於 …",
        "unitId": "math-u12",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u12-3",
        "title": "四捨五入配平陷阱",
        "unitId": "math-u12",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u11-1",
        "title": "等量公理本質",
        "unitId": "math-u11",
        "subjectId": "math",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：數學・觀念本質與定義"
      },
      {
        "id": "kp-soc-u3-2",
        "title": "市場供需法則與均衡價格",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "跨域經濟統計",
        "badgeType": "cross",
        "desc": "圓形百分率圖 ➔ 家庭經濟支出與進出口貿易比例"
      },
      {
        "id": "bridge-math-u12",
        "isBridge": true,
        "title": "統計圖表與資料分析",
        "unitId": "math-u12",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三第六冊【統計圖表與資料分析】：箱形圖、百分位數、四分位距與抽樣調查信度。"
      }
    ]
  },
  {
    "id": "kp-math-u12-2",
    "pointIndex": 1,
    "unitId": "math-u12",
    "unitIndex": 11,
    "subjectId": "math",
    "semester": "6B",
    "title": "全圓各項比例總和必須恰好等於 …",
    "category": "數學・運算算理與公式",
    "badgeColor": "amber",
    "definition": "全圓各項比例總和必須恰好等於 …：全圓各項比例總和必須恰好等於 $100\\%$（圓心角總和恰好等於 $360^\\circ$）。",
    "formulaOrRule": "全圓各項比例總和必須恰好等於 $100\\%$（圓心角總和恰好等於 $360^\\circ$）。",
    "strategyTip": "【審題觸發】當題目出現「百分率圓形圖合計總和」時，立即啟動「總和必須剛好等於 100%（若有四捨五入誤差微調最大項）」解題。考前速記：全圓比例總和為 100%，圓心角總和為 $360^\\circ$；圓心角 = $360^\\circ \\times \\text{百分率}$！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】家庭每月各項支出圓餅圖、民調政黨支持度分配、手機儲存空間分析。",
    "textbookFocus": "康軒：常考家庭月支出、班級幹部選舉票數圓形圖判讀，考驗百分率與圓心角互換。 ｜ 南一：側重四捨五入後總和 99% 或 101% 時之最大項調整配平原則，以及升中統計圖表先修銜接。 ｜ 翰林：側重圓心角計算（$360^\\circ \\times \\%$）與長條圖、折線圖、圓形圖適用時機辨析。",
    "juniorHighBridge": "國三第六冊【統計圖表與資料分析】：箱形圖、百分位數、四分位距與抽樣調查信度。",
    "infographicKey": "info-math-u12-2",
    "relatedPoints": [
      {
        "id": "kp-math-u12-1",
        "title": "圓形圖圓心角計算定理",
        "unitId": "math-u12",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u12-3",
        "title": "四捨五入配平陷阱",
        "unitId": "math-u12",
        "subjectId": "math",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・生活實用與避雷"
      },
      {
        "id": "kp-math-u11-1",
        "title": "等量公理本質",
        "unitId": "math-u11",
        "subjectId": "math",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：數學・觀念本質與定義"
      },
      {
        "id": "kp-soc-u3-2",
        "title": "市場供需法則與均衡價格",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "跨域經濟統計",
        "badgeType": "cross",
        "desc": "圓形百分率圖 ➔ 家庭經濟支出與進出口貿易比例"
      },
      {
        "id": "bridge-math-u12",
        "isBridge": true,
        "title": "統計圖表與資料分析",
        "unitId": "math-u12",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三第六冊【統計圖表與資料分析】：箱形圖、百分位數、四分位距與抽樣調查信度。"
      }
    ]
  },
  {
    "id": "kp-math-u12-3",
    "pointIndex": 2,
    "unitId": "math-u12",
    "unitIndex": 11,
    "subjectId": "math",
    "semester": "6B",
    "title": "四捨五入配平陷阱",
    "category": "數學・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "四捨五入配平陷阱：各百分率總和若出現 99% 或 101%，將差額 1% 補在所佔比例最大的那一項。",
    "formulaOrRule": "核心工具與心法：全部總數量 × 各項所佔百分率",
    "strategyTip": "【審題觸發】當題目出現「從圓形圖反求各類別具體數量」時，立即啟動「全部總數量 × 各項所佔百分率」解題。考前速記：全圓比例總和為 100%，圓心角總和為 $360^\\circ$；圓心角 = $360^\\circ \\times \\text{百分率}$！",
    "trapAlert": "【避雷防錯】防雷必背：各百分率總和若出現 99% 或 101%，將差額 1% 補在所佔比例最大的那一項。",
    "practicalUtility": "【生活實用】家庭每月各項支出圓餅圖、民調政黨支持度分配、手機儲存空間分析。",
    "textbookFocus": "康軒：常考家庭月支出、班級幹部選舉票數圓形圖判讀，考驗百分率與圓心角互換。 ｜ 南一：側重四捨五入後總和 99% 或 101% 時之最大項調整配平原則，以及升中統計圖表先修銜接。 ｜ 翰林：側重圓心角計算（$360^\\circ \\times \\%$）與長條圖、折線圖、圓形圖適用時機辨析。",
    "juniorHighBridge": "國三第六冊【統計圖表與資料分析】：箱形圖、百分位數、四分位距與抽樣調查信度。",
    "infographicKey": "info-math-u12-3",
    "relatedPoints": [
      {
        "id": "kp-math-u12-1",
        "title": "圓形圖圓心角計算定理",
        "unitId": "math-u12",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u12-2",
        "title": "全圓各項比例總和必須恰好等於 …",
        "unitId": "math-u12",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u11-1",
        "title": "等量公理本質",
        "unitId": "math-u11",
        "subjectId": "math",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：數學・觀念本質與定義"
      },
      {
        "id": "kp-soc-u3-2",
        "title": "市場供需法則與均衡價格",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "跨域經濟統計",
        "badgeType": "cross",
        "desc": "圓形百分率圖 ➔ 家庭經濟支出與進出口貿易比例"
      },
      {
        "id": "bridge-math-u12",
        "isBridge": true,
        "title": "統計圖表與資料分析",
        "unitId": "math-u12",
        "subjectId": "math",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三第六冊【統計圖表與資料分析】：箱形圖、百分位數、四分位距與抽樣調查信度。"
      }
    ]
  },
  {
    "id": "kp-sci-u1-1",
    "pointIndex": 0,
    "unitId": "sci-u1",
    "unitIndex": 0,
    "subjectId": "science",
    "semester": "6A",
    "title": "高低氣壓空氣流動法則",
    "category": "自然・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "高低氣壓空氣流動法則：高壓中心氣流下沉多晴朗；低壓中心氣流上升膨脹冷凝多陰雨。",
    "formulaOrRule": "核心工具與心法：冷鋒系統（冬季東北季風）",
    "strategyTip": "【審題觸發】當題目出現「冷推暖、氣溫驟降強風驟雨、藍色尖角」時，立即啟動「冷鋒系統（冬季東北季風）」解題。考前速記：高壓晴朗天下沉，低壓陰雨上升旋；冷鋒三角驟雨冷，暖鋒半圓連綿雨；颱風眼內風雨無！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】看懂衛星雲圖雷達回波安排戶外活動、梅雨季防汛與防颱準備。",
    "textbookFocus": "康軒：常考中央氣象署地面天氣圖符號識別（H, L, 鋒面）、颱風防救災與土石流警戒。 ｜ 南一：側重露、霜、雲、霧水態變化物理本質（液態 vs 固態、凝結 vs 凝華），以及臺灣梅雨滯留鋒成因。 ｜ 翰林：側重高低氣壓空氣垂直流動（高壓下沉晴朗、低壓上升冷凝降雨）與冷暖鋒面降雨特徵對比。",
    "juniorHighBridge": "國三下地科【大氣與天氣變化】：等壓線、科氏力、溫帶氣旋與海陸風環流。",
    "infographicKey": "info-sci-u1-1",
    "relatedPoints": [
      {
        "id": "kp-sci-u1-2",
        "title": "鋒面符號與特徵",
        "unitId": "sci-u1",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u1-3",
        "title": "颱風氣流逆時針向中心旋轉輻合",
        "unitId": "sci-u1",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u2-1",
        "title": "酸鹼指示劑記憶大招",
        "unitId": "sci-u2",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "經緯度座標與時區換算",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "跨域地理氣候",
        "badgeType": "cross",
        "desc": "大氣高低壓與鋒面 ➔ 臺灣與全球氣候帶與季風分布"
      },
      {
        "id": "bridge-sci-u1",
        "isBridge": true,
        "title": "大氣與天氣變化",
        "unitId": "sci-u1",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三下地科【大氣與天氣變化】：等壓線、科氏力、溫帶氣旋與海陸風環流。"
      }
    ]
  },
  {
    "id": "kp-sci-u1-2",
    "pointIndex": 1,
    "unitId": "sci-u1",
    "unitIndex": 0,
    "subjectId": "science",
    "semester": "6A",
    "title": "鋒面符號與特徵",
    "category": "自然・運算算理與公式",
    "badgeColor": "amber",
    "definition": "鋒面符號與特徵：冷鋒（尖銳三角形、移動快降暴雨）、暖鋒（圓弧半圓形、持續連續降雨）。",
    "formulaOrRule": "核心工具與心法：滯留鋒面",
    "strategyTip": "【審題觸發】當題目出現「冷暖勢力相當、原地徘徊、5~6月梅雨」時，立即啟動「滯留鋒面」解題。考前速記：高壓晴朗天下沉，低壓陰雨上升旋；冷鋒三角驟雨冷，暖鋒半圓連綿雨；颱風眼內風雨無！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】看懂衛星雲圖雷達回波安排戶外活動、梅雨季防汛與防颱準備。",
    "textbookFocus": "康軒：常考中央氣象署地面天氣圖符號識別（H, L, 鋒面）、颱風防救災與土石流警戒。 ｜ 南一：側重露、霜、雲、霧水態變化物理本質（液態 vs 固態、凝結 vs 凝華），以及臺灣梅雨滯留鋒成因。 ｜ 翰林：側重高低氣壓空氣垂直流動（高壓下沉晴朗、低壓上升冷凝降雨）與冷暖鋒面降雨特徵對比。",
    "juniorHighBridge": "國三下地科【大氣與天氣變化】：等壓線、科氏力、溫帶氣旋與海陸風環流。",
    "infographicKey": "info-sci-u1-2",
    "relatedPoints": [
      {
        "id": "kp-sci-u1-1",
        "title": "高低氣壓空氣流動法則",
        "unitId": "sci-u1",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u1-3",
        "title": "颱風氣流逆時針向中心旋轉輻合",
        "unitId": "sci-u1",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u2-1",
        "title": "酸鹼指示劑記憶大招",
        "unitId": "sci-u2",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "經緯度座標與時區換算",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "跨域地理氣候",
        "badgeType": "cross",
        "desc": "大氣高低壓與鋒面 ➔ 臺灣與全球氣候帶與季風分布"
      },
      {
        "id": "bridge-sci-u1",
        "isBridge": true,
        "title": "大氣與天氣變化",
        "unitId": "sci-u1",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三下地科【大氣與天氣變化】：等壓線、科氏力、溫帶氣旋與海陸風環流。"
      }
    ]
  },
  {
    "id": "kp-sci-u1-3",
    "pointIndex": 2,
    "unitId": "sci-u1",
    "unitIndex": 0,
    "subjectId": "science",
    "semester": "6A",
    "title": "颱風氣流逆時針向中心旋轉輻合",
    "category": "自然・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "颱風氣流逆時針向中心旋轉輻合：臺灣梅雨季主要由「冷暖氣團勢均力敵之滯留鋒」引起。",
    "formulaOrRule": "核心工具與心法：無風無雨晴朗；眼牆風雨最強最猛烈",
    "strategyTip": "【審題觸發】當題目出現「颱風眼天氣特徵」時，立即啟動「無風無雨晴朗；眼牆風雨最強最猛烈」解題。考前速記：高壓晴朗天下沉，低壓陰雨上升旋；冷鋒三角驟雨冷，暖鋒半圓連綿雨；颱風眼內風雨無！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】看懂衛星雲圖雷達回波安排戶外活動、梅雨季防汛與防颱準備。",
    "textbookFocus": "康軒：常考中央氣象署地面天氣圖符號識別（H, L, 鋒面）、颱風防救災與土石流警戒。 ｜ 南一：側重露、霜、雲、霧水態變化物理本質（液態 vs 固態、凝結 vs 凝華），以及臺灣梅雨滯留鋒成因。 ｜ 翰林：側重高低氣壓空氣垂直流動（高壓下沉晴朗、低壓上升冷凝降雨）與冷暖鋒面降雨特徵對比。",
    "juniorHighBridge": "國三下地科【大氣與天氣變化】：等壓線、科氏力、溫帶氣旋與海陸風環流。",
    "infographicKey": "info-sci-u1-3",
    "relatedPoints": [
      {
        "id": "kp-sci-u1-1",
        "title": "高低氣壓空氣流動法則",
        "unitId": "sci-u1",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u1-2",
        "title": "鋒面符號與特徵",
        "unitId": "sci-u1",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u2-1",
        "title": "酸鹼指示劑記憶大招",
        "unitId": "sci-u2",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "經緯度座標與時區換算",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "跨域地理氣候",
        "badgeType": "cross",
        "desc": "大氣高低壓與鋒面 ➔ 臺灣與全球氣候帶與季風分布"
      },
      {
        "id": "bridge-sci-u1",
        "isBridge": true,
        "title": "大氣與天氣變化",
        "unitId": "sci-u1",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三下地科【大氣與天氣變化】：等壓線、科氏力、溫帶氣旋與海陸風環流。"
      }
    ]
  },
  {
    "id": "kp-sci-u2-1",
    "pointIndex": 0,
    "unitId": "sci-u2",
    "unitIndex": 1,
    "subjectId": "science",
    "semester": "6A",
    "title": "酸鹼指示劑記憶大招",
    "category": "自然・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "酸鹼指示劑記憶大招：藍變紅是酸性（酸溜溜臉紅）；紅變藍是鹼性（鹼大人穿藍袍）。",
    "formulaOrRule": "核心工具與心法：酸性水溶液（pH < 7，可導電）",
    "strategyTip": "【審題觸發】當題目出現「石蕊試紙藍變紅、醋酸、檸檬汁」時，立即啟動「酸性水溶液（pH < 7，可導電）」解題。考前速記：石蕊藍變紅是酸，紅變藍是鹼；酚酞遇鹼變粉紅；酸鹼鹽皆能導電，純水糖水不通電！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】胃酸過多服用制酸劑胃藥、土壤酸鹼度調節種植作物、洗面乳弱酸溫和親膚。",
    "textbookFocus": "康軒：常考廚房常見水溶液（白醋、食鹽水、小蘇打、糖水、檸檬酸）之生活分類與檢驗。 ｜ 南一：側重水溶液導電性實驗（電解質本質：酸鹼鹽導電，純水與糖水不導電）與檢驗步驟安全規範。 ｜ 翰林：側重石蕊試紙、酚酞、紅甘藍菜汁等指示劑顏色變化對照表，以及酸鹼中和放熱實驗。",
    "juniorHighBridge": "國二下理化【酸鹼鹽與電解質】：阿瑞尼斯酸鹼學說、解離方程式、pH 值定義與酸鹼中和反應。",
    "infographicKey": "info-sci-u2-1",
    "relatedPoints": [
      {
        "id": "kp-sci-u2-2",
        "title": "酚酞指示劑特徵",
        "unitId": "sci-u2",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u2-3",
        "title": "導電性本質",
        "unitId": "sci-u2",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u3-1",
        "title": "奧斯特實驗核心發現",
        "unitId": "sci-u3",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "bridge-sci-u2",
        "isBridge": true,
        "title": "酸鹼鹽與電解質",
        "unitId": "sci-u2",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二下理化【酸鹼鹽與電解質】：阿瑞尼斯酸鹼學說、解離方程式、pH 值定義與酸鹼中和反應。"
      }
    ]
  },
  {
    "id": "kp-sci-u2-2",
    "pointIndex": 1,
    "unitId": "sci-u2",
    "unitIndex": 1,
    "subjectId": "science",
    "semester": "6A",
    "title": "酚酞指示劑特徵",
    "category": "自然・運算算理與公式",
    "badgeColor": "amber",
    "definition": "酚酞指示劑特徵：酸性與中性皆為「無色」，只有遇到「鹼性」才會呈現鮮豔「粉紅色」。",
    "formulaOrRule": "核心工具與心法：鹼性水溶液（pH > 7，觸感滑膩）",
    "strategyTip": "【審題觸發】當題目出現「石蕊試紙紅變藍、酚酞變紅、肥皂水、小蘇打」時，立即啟動「鹼性水溶液（pH > 7，觸感滑膩）」解題。考前速記：石蕊藍變紅是酸，紅變藍是鹼；酚酞遇鹼變粉紅；酸鹼鹽皆能導電，純水糖水不通電！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】胃酸過多服用制酸劑胃藥、土壤酸鹼度調節種植作物、洗面乳弱酸溫和親膚。",
    "textbookFocus": "康軒：常考廚房常見水溶液（白醋、食鹽水、小蘇打、糖水、檸檬酸）之生活分類與檢驗。 ｜ 南一：側重水溶液導電性實驗（電解質本質：酸鹼鹽導電，純水與糖水不導電）與檢驗步驟安全規範。 ｜ 翰林：側重石蕊試紙、酚酞、紅甘藍菜汁等指示劑顏色變化對照表，以及酸鹼中和放熱實驗。",
    "juniorHighBridge": "國二下理化【酸鹼鹽與電解質】：阿瑞尼斯酸鹼學說、解離方程式、pH 值定義與酸鹼中和反應。",
    "infographicKey": "info-sci-u2-2",
    "relatedPoints": [
      {
        "id": "kp-sci-u2-1",
        "title": "酸鹼指示劑記憶大招",
        "unitId": "sci-u2",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u2-3",
        "title": "導電性本質",
        "unitId": "sci-u2",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u3-1",
        "title": "奧斯特實驗核心發現",
        "unitId": "sci-u3",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "bridge-sci-u2",
        "isBridge": true,
        "title": "酸鹼鹽與電解質",
        "unitId": "sci-u2",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二下理化【酸鹼鹽與電解質】：阿瑞尼斯酸鹼學說、解離方程式、pH 值定義與酸鹼中和反應。"
      }
    ]
  },
  {
    "id": "kp-sci-u2-3",
    "pointIndex": 2,
    "unitId": "sci-u2",
    "unitIndex": 1,
    "subjectId": "science",
    "semester": "6A",
    "title": "導電性本質",
    "category": "自然・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "導電性本質：酸性（醋、檸檬酸）、鹼性（小蘇打、氨水）與中性電解質（食鹽水）皆能導電；純水與糖水不導電。",
    "formulaOrRule": "核心工具與心法：中性水溶液（pH ≈ 7；糖水不導電，食鹽水導電）",
    "strategyTip": "【審題觸發】當題目出現「食鹽水、糖水、純水」時，立即啟動「中性水溶液（pH ≈ 7；糖水不導電，食鹽水導電）」解題。考前速記：石蕊藍變紅是酸，紅變藍是鹼；酚酞遇鹼變粉紅；酸鹼鹽皆能導電，純水糖水不通電！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】胃酸過多服用制酸劑胃藥、土壤酸鹼度調節種植作物、洗面乳弱酸溫和親膚。",
    "textbookFocus": "康軒：常考廚房常見水溶液（白醋、食鹽水、小蘇打、糖水、檸檬酸）之生活分類與檢驗。 ｜ 南一：側重水溶液導電性實驗（電解質本質：酸鹼鹽導電，純水與糖水不導電）與檢驗步驟安全規範。 ｜ 翰林：側重石蕊試紙、酚酞、紅甘藍菜汁等指示劑顏色變化對照表，以及酸鹼中和放熱實驗。",
    "juniorHighBridge": "國二下理化【酸鹼鹽與電解質】：阿瑞尼斯酸鹼學說、解離方程式、pH 值定義與酸鹼中和反應。",
    "infographicKey": "info-sci-u2-3",
    "relatedPoints": [
      {
        "id": "kp-sci-u2-1",
        "title": "酸鹼指示劑記憶大招",
        "unitId": "sci-u2",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u2-2",
        "title": "酚酞指示劑特徵",
        "unitId": "sci-u2",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u3-1",
        "title": "奧斯特實驗核心發現",
        "unitId": "sci-u3",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "bridge-sci-u2",
        "isBridge": true,
        "title": "酸鹼鹽與電解質",
        "unitId": "sci-u2",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二下理化【酸鹼鹽與電解質】：阿瑞尼斯酸鹼學說、解離方程式、pH 值定義與酸鹼中和反應。"
      }
    ]
  },
  {
    "id": "kp-sci-u3-1",
    "pointIndex": 0,
    "unitId": "sci-u3",
    "unitIndex": 2,
    "subjectId": "science",
    "semester": "6A",
    "title": "奧斯特實驗核心發現",
    "category": "自然・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "奧斯特實驗核心發現：通電導線四周會產生磁場，使指北針偏轉（電能生磁）。",
    "formulaOrRule": "核心工具與心法：增加線圈圈數、加大電池電流、加入鐵芯",
    "strategyTip": "【審題觸發】當題目出現「如何增強電磁鐵磁力」時，立即啟動「增加線圈圈數、加大電池電流、加入鐵芯」解題。考前速記：通電生磁使針偏；右手四指順電流，大拇指即為 N 極；加圈數、加大電流、加鐵芯磁力倍增！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】電鈴敲擊結構、磁浮列車懸浮前進、資源回收場巨型電磁起重機。",
    "textbookFocus": "康軒：常考指北針偏轉（奧斯特實驗）、電磁鐵起重機、磁浮列車與生活電磁應用器具。 ｜ 南一：側重馬達（電能變動能）構造中的線圈、磁鐵與換向器原理，以及電磁鐵與永久磁鐵異同。 ｜ 翰林：側重安培右手螺旋定則（四指順電流，大拇指為 N 極）與增強電磁鐵磁力三要素實驗分析。",
    "juniorHighBridge": "國三上理化【電磁學】：安培右手定則、右手開掌定則（載流導線在磁場受力）、電動機與發電機原理。",
    "infographicKey": "info-sci-u3-1",
    "relatedPoints": [
      {
        "id": "kp-sci-u3-2",
        "title": "安培右手螺旋定則",
        "unitId": "sci-u3",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u3-3",
        "title": "增強電磁鐵磁力三大法寶",
        "unitId": "sci-u3",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u4-1",
        "title": "河流上中下游地貌",
        "unitId": "sci-u4",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-soc-u8-1",
        "title": "人工智慧 (AI) 革命與演算法透明度",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "跨域科技硬體",
        "badgeType": "cross",
        "desc": "電磁鐵與電流效應 ➔ 資訊科技硬體與電機工程"
      },
      {
        "id": "bridge-sci-u3",
        "isBridge": true,
        "title": "電磁學",
        "unitId": "sci-u3",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三上理化【電磁學】：安培右手定則、右手開掌定則（載流導線在磁場受力）、電動機與發電機原理。"
      }
    ]
  },
  {
    "id": "kp-sci-u3-2",
    "pointIndex": 1,
    "unitId": "sci-u3",
    "unitIndex": 2,
    "subjectId": "science",
    "semester": "6A",
    "title": "安培右手螺旋定則",
    "category": "自然・運算算理與公式",
    "badgeColor": "amber",
    "definition": "安培右手螺旋定則：右手四指彎曲順著線圈電流方向，大拇指所指的方向即為「N 極」。",
    "formulaOrRule": "核心工具與心法：右手握線圈（四指指電流方向，大拇指所指即為 N 極）",
    "strategyTip": "【審題觸發】當題目出現「電磁鐵兩端磁極方向判定」時，立即啟動「右手握線圈（四指指電流方向，大拇指所指即為 N 極）」解題。考前速記：通電生磁使針偏；右手四指順電流，大拇指即為 N 極；加圈數、加大電流、加鐵芯磁力倍增！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】電鈴敲擊結構、磁浮列車懸浮前進、資源回收場巨型電磁起重機。",
    "textbookFocus": "康軒：常考指北針偏轉（奧斯特實驗）、電磁鐵起重機、磁浮列車與生活電磁應用器具。 ｜ 南一：側重馬達（電能變動能）構造中的線圈、磁鐵與換向器原理，以及電磁鐵與永久磁鐵異同。 ｜ 翰林：側重安培右手螺旋定則（四指順電流，大拇指為 N 極）與增強電磁鐵磁力三要素實驗分析。",
    "juniorHighBridge": "國三上理化【電磁學】：安培右手定則、右手開掌定則（載流導線在磁場受力）、電動機與發電機原理。",
    "infographicKey": "info-sci-u3-2",
    "relatedPoints": [
      {
        "id": "kp-sci-u3-1",
        "title": "奧斯特實驗核心發現",
        "unitId": "sci-u3",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u3-3",
        "title": "增強電磁鐵磁力三大法寶",
        "unitId": "sci-u3",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u4-1",
        "title": "河流上中下游地貌",
        "unitId": "sci-u4",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-soc-u8-1",
        "title": "人工智慧 (AI) 革命與演算法透明度",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "跨域科技硬體",
        "badgeType": "cross",
        "desc": "電磁鐵與電流效應 ➔ 資訊科技硬體與電機工程"
      },
      {
        "id": "bridge-sci-u3",
        "isBridge": true,
        "title": "電磁學",
        "unitId": "sci-u3",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三上理化【電磁學】：安培右手定則、右手開掌定則（載流導線在磁場受力）、電動機與發電機原理。"
      }
    ]
  },
  {
    "id": "kp-sci-u3-3",
    "pointIndex": 2,
    "unitId": "sci-u3",
    "unitIndex": 2,
    "subjectId": "science",
    "semester": "6A",
    "title": "增強電磁鐵磁力三大法寶",
    "category": "自然・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "增強電磁鐵磁力三大法寶：1. 增加線圈纏繞圈數、2. 增加串聯電池數（加大電流）、3. 填入鐵芯。",
    "formulaOrRule": "核心工具與心法：反接電池正負極，或改變線圈纏繞方向",
    "strategyTip": "【審題觸發】當題目出現「改變電磁鐵磁極方向」時，立即啟動「反接電池正負極，或改變線圈纏繞方向」解題。考前速記：通電生磁使針偏；右手四指順電流，大拇指即為 N 極；加圈數、加大電流、加鐵芯磁力倍增！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】電鈴敲擊結構、磁浮列車懸浮前進、資源回收場巨型電磁起重機。",
    "textbookFocus": "康軒：常考指北針偏轉（奧斯特實驗）、電磁鐵起重機、磁浮列車與生活電磁應用器具。 ｜ 南一：側重馬達（電能變動能）構造中的線圈、磁鐵與換向器原理，以及電磁鐵與永久磁鐵異同。 ｜ 翰林：側重安培右手螺旋定則（四指順電流，大拇指為 N 極）與增強電磁鐵磁力三要素實驗分析。",
    "juniorHighBridge": "國三上理化【電磁學】：安培右手定則、右手開掌定則（載流導線在磁場受力）、電動機與發電機原理。",
    "infographicKey": "info-sci-u3-3",
    "relatedPoints": [
      {
        "id": "kp-sci-u3-1",
        "title": "奧斯特實驗核心發現",
        "unitId": "sci-u3",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u3-2",
        "title": "安培右手螺旋定則",
        "unitId": "sci-u3",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u4-1",
        "title": "河流上中下游地貌",
        "unitId": "sci-u4",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-soc-u8-1",
        "title": "人工智慧 (AI) 革命與演算法透明度",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "跨域科技硬體",
        "badgeType": "cross",
        "desc": "電磁鐵與電流效應 ➔ 資訊科技硬體與電機工程"
      },
      {
        "id": "bridge-sci-u3",
        "isBridge": true,
        "title": "電磁學",
        "unitId": "sci-u3",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三上理化【電磁學】：安培右手定則、右手開掌定則（載流導線在磁場受力）、電動機與發電機原理。"
      }
    ]
  },
  {
    "id": "kp-sci-u4-1",
    "pointIndex": 0,
    "unitId": "sci-u4",
    "unitIndex": 3,
    "subjectId": "science",
    "semester": "6A",
    "title": "河流上中下游地貌",
    "category": "自然・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "河流上中下游地貌：上游侵蝕強形成 V 型峽谷；下游堆積強形成平原三角洲。",
    "formulaOrRule": "核心工具與心法：V型峽谷、瀑布、巨石嶙峋、侵蝕搬運旺盛",
    "strategyTip": "【審題觸發】當題目出現「河流上游地形特徵」時，立即啟動「V型峽谷、瀑布、巨石嶙峋、侵蝕搬運旺盛」解題。考前速記：上游侵蝕V型谷，下游堆積平原出；火成熔岩冷凝固，沉積含化石砂頁岩，變質高溫大理岩！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】太魯閣大理石峽谷成因欣賞、土石流防災警戒判斷、水庫淤積清淤規劃。",
    "textbookFocus": "康軒：常考臺灣名勝地貌（太魯閣V型谷、野柳女王頭、墾丁珊瑚礁）之營力成因分類。 ｜ 南一：側重地層疊置定律（下老上新）、化石僅存於沉積岩之成因，以及地震防震避難「趴下、掩護、穩住」。 ｜ 翰林：側重河流上中下游三大作用（侵蝕、搬運、堆積）與三大岩石（火成岩、沉積岩、變質岩）分類。",
    "juniorHighBridge": "國三下地科【地質與板塊構造】：板塊構造學說、聚合型張裂型板塊邊界、斷層類型（正斷層、逆斷層、平移斷層）。",
    "infographicKey": "info-sci-u4-1",
    "relatedPoints": [
      {
        "id": "kp-sci-u4-2",
        "title": "三大岩類成因",
        "unitId": "sci-u4",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u4-3",
        "title": "地層疊置定律與化石",
        "unitId": "sci-u4",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u5-1",
        "title": "熱傳播三途徑本質",
        "unitId": "sci-u5",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "bridge-sci-u4",
        "isBridge": true,
        "title": "地質與板塊構造",
        "unitId": "sci-u4",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三下地科【地質與板塊構造】：板塊構造學說、聚合型張裂型板塊邊界、斷層類型（正斷層、逆斷層、平移斷層）。"
      }
    ]
  },
  {
    "id": "kp-sci-u4-2",
    "pointIndex": 1,
    "unitId": "sci-u4",
    "unitIndex": 3,
    "subjectId": "science",
    "semester": "6A",
    "title": "三大岩類成因",
    "category": "自然・運算算理與公式",
    "badgeColor": "amber",
    "definition": "三大岩類成因：火成岩（岩漿冷卻，玄武岩/花崗岩）、沉積岩（水層沉積，砂岩/頁岩）、變質岩（高溫高壓，大理岩）。",
    "formulaOrRule": "核心工具與心法：寬闊平緩、鵝卵石與細沙沉積、三角洲、沖積扇",
    "strategyTip": "【審題觸發】當題目出現「河流下游與出海口地形」時，立即啟動「寬闊平緩、鵝卵石與細沙沉積、三角洲、沖積扇」解題。考前速記：上游侵蝕V型谷，下游堆積平原出；火成熔岩冷凝固，沉積含化石砂頁岩，變質高溫大理岩！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】太魯閣大理石峽谷成因欣賞、土石流防災警戒判斷、水庫淤積清淤規劃。",
    "textbookFocus": "康軒：常考臺灣名勝地貌（太魯閣V型谷、野柳女王頭、墾丁珊瑚礁）之營力成因分類。 ｜ 南一：側重地層疊置定律（下老上新）、化石僅存於沉積岩之成因，以及地震防震避難「趴下、掩護、穩住」。 ｜ 翰林：側重河流上中下游三大作用（侵蝕、搬運、堆積）與三大岩石（火成岩、沉積岩、變質岩）分類。",
    "juniorHighBridge": "國三下地科【地質與板塊構造】：板塊構造學說、聚合型張裂型板塊邊界、斷層類型（正斷層、逆斷層、平移斷層）。",
    "infographicKey": "info-sci-u4-2",
    "relatedPoints": [
      {
        "id": "kp-sci-u4-1",
        "title": "河流上中下游地貌",
        "unitId": "sci-u4",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u4-3",
        "title": "地層疊置定律與化石",
        "unitId": "sci-u4",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u5-1",
        "title": "熱傳播三途徑本質",
        "unitId": "sci-u5",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "bridge-sci-u4",
        "isBridge": true,
        "title": "地質與板塊構造",
        "unitId": "sci-u4",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三下地科【地質與板塊構造】：板塊構造學說、聚合型張裂型板塊邊界、斷層類型（正斷層、逆斷層、平移斷層）。"
      }
    ]
  },
  {
    "id": "kp-sci-u4-3",
    "pointIndex": 2,
    "unitId": "sci-u4",
    "unitIndex": 3,
    "subjectId": "science",
    "semester": "6A",
    "title": "地層疊置定律與化石",
    "category": "自然・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "地層疊置定律與化石：未受地殼變動翻轉的地層，越底層年齡越老；化石必存在於「沉積岩」中。",
    "formulaOrRule": "核心工具與心法：火成岩（岩漿冷卻）、沉積岩（層狀化石）、變質岩（高溫高壓變質）",
    "strategyTip": "【審題觸發】當題目出現「三大岩類成因辨識」時，立即啟動「火成岩（岩漿冷卻）、沉積岩（層狀化石）、變質岩（高溫高壓變質）」解題。考前速記：上游侵蝕V型谷，下游堆積平原出；火成熔岩冷凝固，沉積含化石砂頁岩，變質高溫大理岩！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】太魯閣大理石峽谷成因欣賞、土石流防災警戒判斷、水庫淤積清淤規劃。",
    "textbookFocus": "康軒：常考臺灣名勝地貌（太魯閣V型谷、野柳女王頭、墾丁珊瑚礁）之營力成因分類。 ｜ 南一：側重地層疊置定律（下老上新）、化石僅存於沉積岩之成因，以及地震防震避難「趴下、掩護、穩住」。 ｜ 翰林：側重河流上中下游三大作用（侵蝕、搬運、堆積）與三大岩石（火成岩、沉積岩、變質岩）分類。",
    "juniorHighBridge": "國三下地科【地質與板塊構造】：板塊構造學說、聚合型張裂型板塊邊界、斷層類型（正斷層、逆斷層、平移斷層）。",
    "infographicKey": "info-sci-u4-3",
    "relatedPoints": [
      {
        "id": "kp-sci-u4-1",
        "title": "河流上中下游地貌",
        "unitId": "sci-u4",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u4-2",
        "title": "三大岩類成因",
        "unitId": "sci-u4",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u5-1",
        "title": "熱傳播三途徑本質",
        "unitId": "sci-u5",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "bridge-sci-u4",
        "isBridge": true,
        "title": "地質與板塊構造",
        "unitId": "sci-u4",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三下地科【地質與板塊構造】：板塊構造學說、聚合型張裂型板塊邊界、斷層類型（正斷層、逆斷層、平移斷層）。"
      }
    ]
  },
  {
    "id": "kp-sci-u5-1",
    "pointIndex": 0,
    "unitId": "sci-u5",
    "unitIndex": 4,
    "subjectId": "science",
    "semester": "6A",
    "title": "熱傳播三途徑本質",
    "category": "自然・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "熱傳播三途徑本質：傳導（固體接觸分子振動碰擊）、對流（液體與氣體熱升冷降流動）、輻射（不需介質，如陽光與紅外線）。",
    "formulaOrRule": "核心工具與心法：熱傳導（金屬傳導佳，木頭塑膠為不良導體）",
    "strategyTip": "【審題觸發】當題目出現「金屬鍋柄防燙木柄、金屬湯匙燙手」時，立即啟動「熱傳導（金屬傳導佳，木頭塑膠為不良導體）」解題。考前速記：固體傳導流體對流，真空輻射不需介質；保溫瓶鍍銀防輻射，真空防傳導與對流！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】保溫瓶設計（雙層真空斷傳導對流，內膽鍍銀斷輻射）、羽絨衣蓬鬆空氣層隔熱保暖。",
    "textbookFocus": "康軒：常考生活保溫杯構造（真空層、鍍銀內膽、塑膠瓶蓋）防熱傳播三途徑之對應。 ｜ 南一：側重物質熱脹冷縮（雙金屬片火災警報器、鐵軌預留縫隙）原理與反常膨脹現象。 ｜ 翰林：側重熱的三種傳播方式（傳導、對流、輻射）實驗變因判讀與日夜陸海風成因。",
    "juniorHighBridge": "國二上理化【熱量與比熱】：熱量公式 H = m·s·ΔT、熱平衡計算與物質比熱物理意義。",
    "infographicKey": "info-sci-u5-1",
    "relatedPoints": [
      {
        "id": "kp-sci-u5-2",
        "title": "保溫瓶隔熱五層防線",
        "unitId": "sci-u5",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u5-3",
        "title": "日夜海陸風成因",
        "unitId": "sci-u5",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u6-1",
        "title": "槓桿平衡核心定理",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u1-1",
        "title": "高低氣壓空氣流動法則",
        "unitId": "sci-u1",
        "subjectId": "science",
        "relation": "跨域熱力氣候",
        "badgeType": "cross",
        "desc": "熱對流與海陸風 ➔ 大氣垂直上升冷凝與海陸日夜溫差"
      },
      {
        "id": "bridge-sci-u5",
        "isBridge": true,
        "title": "熱量與比熱",
        "unitId": "sci-u5",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二上理化【熱量與比熱】：熱量公式 H = m·s·ΔT、熱平衡計算與物質比熱物理意義。"
      }
    ]
  },
  {
    "id": "kp-sci-u5-2",
    "pointIndex": 1,
    "unitId": "sci-u5",
    "unitIndex": 4,
    "subjectId": "science",
    "semester": "6A",
    "title": "保溫瓶隔熱五層防線",
    "category": "自然・運算算理與公式",
    "badgeColor": "amber",
    "definition": "保溫瓶隔熱五層防線：雙層不鏽鋼抽真空阻絕「傳導與對流」；內膽鍍銀反射鏡面阻絕「熱輻射」。",
    "formulaOrRule": "核心工具與心法：熱對流（熱流體密度小上升，冷流體密度大下降）",
    "strategyTip": "【審題觸發】當題目出現「冷氣裝上方、暖氣裝下方、煮水水流循環」時，立即啟動「熱對流（熱流體密度小上升，冷流體密度大下降）」解題。考前速記：固體傳導流體對流，真空輻射不需介質；保溫瓶鍍銀防輻射，真空防傳導與對流！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】保溫瓶設計（雙層真空斷傳導對流，內膽鍍銀斷輻射）、羽絨衣蓬鬆空氣層隔熱保暖。",
    "textbookFocus": "康軒：常考生活保溫杯構造（真空層、鍍銀內膽、塑膠瓶蓋）防熱傳播三途徑之對應。 ｜ 南一：側重物質熱脹冷縮（雙金屬片火災警報器、鐵軌預留縫隙）原理與反常膨脹現象。 ｜ 翰林：側重熱的三種傳播方式（傳導、對流、輻射）實驗變因判讀與日夜陸海風成因。",
    "juniorHighBridge": "國二上理化【熱量與比熱】：熱量公式 H = m·s·ΔT、熱平衡計算與物質比熱物理意義。",
    "infographicKey": "info-sci-u5-2",
    "relatedPoints": [
      {
        "id": "kp-sci-u5-1",
        "title": "熱傳播三途徑本質",
        "unitId": "sci-u5",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u5-3",
        "title": "日夜海陸風成因",
        "unitId": "sci-u5",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u6-1",
        "title": "槓桿平衡核心定理",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u1-1",
        "title": "高低氣壓空氣流動法則",
        "unitId": "sci-u1",
        "subjectId": "science",
        "relation": "跨域熱力氣候",
        "badgeType": "cross",
        "desc": "熱對流與海陸風 ➔ 大氣垂直上升冷凝與海陸日夜溫差"
      },
      {
        "id": "bridge-sci-u5",
        "isBridge": true,
        "title": "熱量與比熱",
        "unitId": "sci-u5",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二上理化【熱量與比熱】：熱量公式 H = m·s·ΔT、熱平衡計算與物質比熱物理意義。"
      }
    ]
  },
  {
    "id": "kp-sci-u5-3",
    "pointIndex": 2,
    "unitId": "sci-u5",
    "unitIndex": 4,
    "subjectId": "science",
    "semester": "6A",
    "title": "日夜海陸風成因",
    "category": "自然・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "日夜海陸風成因：陸地比熱小升降溫快，白天吹海風（陸熱海涼），夜晚吹陸風（海溫陸涼）。",
    "formulaOrRule": "核心工具與心法：熱輻射（真空亦可傳播，白色淺色反光反射佳，黑色吸熱佳）",
    "strategyTip": "【審題觸發】當題目出現「曬太陽感到溫暖、烤箱紅外線加熱」時，立即啟動「熱輻射（真空亦可傳播，白色淺色反光反射佳，黑色吸熱佳）」解題。考前速記：固體傳導流體對流，真空輻射不需介質；保溫瓶鍍銀防輻射，真空防傳導與對流！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】保溫瓶設計（雙層真空斷傳導對流，內膽鍍銀斷輻射）、羽絨衣蓬鬆空氣層隔熱保暖。",
    "textbookFocus": "康軒：常考生活保溫杯構造（真空層、鍍銀內膽、塑膠瓶蓋）防熱傳播三途徑之對應。 ｜ 南一：側重物質熱脹冷縮（雙金屬片火災警報器、鐵軌預留縫隙）原理與反常膨脹現象。 ｜ 翰林：側重熱的三種傳播方式（傳導、對流、輻射）實驗變因判讀與日夜陸海風成因。",
    "juniorHighBridge": "國二上理化【熱量與比熱】：熱量公式 H = m·s·ΔT、熱平衡計算與物質比熱物理意義。",
    "infographicKey": "info-sci-u5-3",
    "relatedPoints": [
      {
        "id": "kp-sci-u5-1",
        "title": "熱傳播三途徑本質",
        "unitId": "sci-u5",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u5-2",
        "title": "保溫瓶隔熱五層防線",
        "unitId": "sci-u5",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u6-1",
        "title": "槓桿平衡核心定理",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u1-1",
        "title": "高低氣壓空氣流動法則",
        "unitId": "sci-u1",
        "subjectId": "science",
        "relation": "跨域熱力氣候",
        "badgeType": "cross",
        "desc": "熱對流與海陸風 ➔ 大氣垂直上升冷凝與海陸日夜溫差"
      },
      {
        "id": "bridge-sci-u5",
        "isBridge": true,
        "title": "熱量與比熱",
        "unitId": "sci-u5",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二上理化【熱量與比熱】：熱量公式 H = m·s·ΔT、熱平衡計算與物質比熱物理意義。"
      }
    ]
  },
  {
    "id": "kp-sci-u6-1",
    "pointIndex": 0,
    "unitId": "sci-u6",
    "unitIndex": 5,
    "subjectId": "science",
    "semester": "6B",
    "title": "槓桿平衡核心定理",
    "category": "自然・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "槓桿平衡核心定理：$\\text{施力} \\times \\text{施力臂} = \\text{抗力} \\times \\text{抗力臂}$（順時針力矩 = 逆時針力矩）。",
    "formulaOrRule": "$\\text{施力} \\times \\text{施力臂} = \\text{抗力} \\times \\text{抗力臂}$（順時針力矩 = 逆時針力矩）。",
    "strategyTip": "【審題觸發】當題目出現「剪刀、開瓶器、拔釘器、手推車」時，立即啟動「省力槓桿（施力臂 > 抗力臂）」解題。考前速記：抗力在中間省力（開瓶器），施力在中間費力省時（鑷子）；定滑輪改方向，動滑輪省力半！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】斜坡推輪椅省力、大方向盤操控車輪（輪軸）、起重機吊掛沉重鋼筋。",
    "textbookFocus": "康軒：常考指甲剪、開瓶器、釣竿、剪刀、掃帚等生活工具屬於哪一類槓桿（省力/費力/省時）。 ｜ 南一：側重輪軸（大輪帶小輪省力）與斜面螺絲之功的守恆（省力必費距離，省距離必費力）。 ｜ 翰林：側重槓桿原理公式（施力 $\\times$ 施力臂 = 抗力 $\\times$ 抗力臂）、定滑輪與動滑輪受力分析。",
    "juniorHighBridge": "國三上理化【功與能】：功的定義 W = F·S、機械效率、動能與重力位能守恆。",
    "infographicKey": "info-sci-u6-1",
    "relatedPoints": [
      {
        "id": "kp-sci-u6-2",
        "title": "省力與費力判定",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u6-3",
        "title": "滑輪機構",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u7-1",
        "title": "鐵生鏽化學反應條件",
        "unitId": "sci-u7",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-pe-u4-2",
        "title": "運動前後黃金配置",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "跨域人體力學",
        "badgeType": "cross",
        "desc": "槓桿與滑輪省力 ➔ 人體骨骼關節槓桿與運動防護"
      },
      {
        "id": "bridge-sci-u6",
        "isBridge": true,
        "title": "功與能",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三上理化【功與能】：功的定義 W = F·S、機械效率、動能與重力位能守恆。"
      }
    ]
  },
  {
    "id": "kp-sci-u6-2",
    "pointIndex": 1,
    "unitId": "sci-u6",
    "unitIndex": 5,
    "subjectId": "science",
    "semester": "6B",
    "title": "省力與費力判定",
    "category": "自然・運算算理與公式",
    "badgeColor": "amber",
    "definition": "省力與費力判定：施力臂大於抗力臂為「省力（如開瓶器、指甲剪）」；施力臂小於抗力臂為「費力但省時（如鑷子、筷子）」。",
    "formulaOrRule": "核心工具與心法：費力但省距離槓桿（施力臂 < 抗力臂）",
    "strategyTip": "【審題觸發】當題目出現「鑷子、筷子、掃帚、手臂手肘彎曲」時，立即啟動「費力但省距離槓桿（施力臂 < 抗力臂）」解題。考前速記：抗力在中間省力（開瓶器），施力在中間費力省時（鑷子）；定滑輪改方向，動滑輪省力半！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】斜坡推輪椅省力、大方向盤操控車輪（輪軸）、起重機吊掛沉重鋼筋。",
    "textbookFocus": "康軒：常考指甲剪、開瓶器、釣竿、剪刀、掃帚等生活工具屬於哪一類槓桿（省力/費力/省時）。 ｜ 南一：側重輪軸（大輪帶小輪省力）與斜面螺絲之功的守恆（省力必費距離，省距離必費力）。 ｜ 翰林：側重槓桿原理公式（施力 $\\times$ 施力臂 = 抗力 $\\times$ 抗力臂）、定滑輪與動滑輪受力分析。",
    "juniorHighBridge": "國三上理化【功與能】：功的定義 W = F·S、機械效率、動能與重力位能守恆。",
    "infographicKey": "info-sci-u6-2",
    "relatedPoints": [
      {
        "id": "kp-sci-u6-1",
        "title": "槓桿平衡核心定理",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u6-3",
        "title": "滑輪機構",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u7-1",
        "title": "鐵生鏽化學反應條件",
        "unitId": "sci-u7",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-pe-u4-2",
        "title": "運動前後黃金配置",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "跨域人體力學",
        "badgeType": "cross",
        "desc": "槓桿與滑輪省力 ➔ 人體骨骼關節槓桿與運動防護"
      },
      {
        "id": "bridge-sci-u6",
        "isBridge": true,
        "title": "功與能",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三上理化【功與能】：功的定義 W = F·S、機械效率、動能與重力位能守恆。"
      }
    ]
  },
  {
    "id": "kp-sci-u6-3",
    "pointIndex": 2,
    "unitId": "sci-u6",
    "unitIndex": 5,
    "subjectId": "science",
    "semester": "6B",
    "title": "滑輪機構",
    "category": "自然・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "滑輪機構：定滑輪「不省力但改變施力方向（旗桿）」；動滑輪「省力一半但費距離（起重機吊鉤）」。",
    "formulaOrRule": "核心工具與心法：定滑輪不省力但改變施力方向；動滑輪省一半力但費一倍距離",
    "strategyTip": "【審題觸發】當題目出現「定滑輪 vs 動滑輪」時，立即啟動「定滑輪不省力但改變施力方向；動滑輪省一半力但費一倍距離」解題。考前速記：抗力在中間省力（開瓶器），施力在中間費力省時（鑷子）；定滑輪改方向，動滑輪省力半！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】斜坡推輪椅省力、大方向盤操控車輪（輪軸）、起重機吊掛沉重鋼筋。",
    "textbookFocus": "康軒：常考指甲剪、開瓶器、釣竿、剪刀、掃帚等生活工具屬於哪一類槓桿（省力/費力/省時）。 ｜ 南一：側重輪軸（大輪帶小輪省力）與斜面螺絲之功的守恆（省力必費距離，省距離必費力）。 ｜ 翰林：側重槓桿原理公式（施力 $\\times$ 施力臂 = 抗力 $\\times$ 抗力臂）、定滑輪與動滑輪受力分析。",
    "juniorHighBridge": "國三上理化【功與能】：功的定義 W = F·S、機械效率、動能與重力位能守恆。",
    "infographicKey": "info-sci-u6-3",
    "relatedPoints": [
      {
        "id": "kp-sci-u6-1",
        "title": "槓桿平衡核心定理",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u6-2",
        "title": "省力與費力判定",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u7-1",
        "title": "鐵生鏽化學反應條件",
        "unitId": "sci-u7",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-pe-u4-2",
        "title": "運動前後黃金配置",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "跨域人體力學",
        "badgeType": "cross",
        "desc": "槓桿與滑輪省力 ➔ 人體骨骼關節槓桿與運動防護"
      },
      {
        "id": "bridge-sci-u6",
        "isBridge": true,
        "title": "功與能",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三上理化【功與能】：功的定義 W = F·S、機械效率、動能與重力位能守恆。"
      }
    ]
  },
  {
    "id": "kp-sci-u7-1",
    "pointIndex": 0,
    "unitId": "sci-u7",
    "unitIndex": 6,
    "subjectId": "science",
    "semester": "6B",
    "title": "鐵生鏽化學反應條件",
    "category": "自然・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "鐵生鏽化學反應條件：鐵生鏽必備「水分」與「氧氣」，酸性液體或鹽水會大幅加速生鏽腐蝕速度。",
    "formulaOrRule": "核心工具與心法：水氣（水分）與氧氣（兩者缺一不可，鹽水酸液會加速生鏽）",
    "strategyTip": "【審題觸發】當題目出現「鐵生鏽必備兩大關鍵因素」時，立即啟動「水氣（水分）與氧氣（兩者缺一不可，鹽水酸液會加速生鏽）」解題。考前速記：鐵生鏽必備水和氧氣！隔絕水分與氧氣即可防鏽：塗漆、上油、電鍍、乾燥！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】洋芋片充氮包裝防止氧化碎裂、汽機車鏈條上潤滑油防生鏽、乾燥箱保存單眼相機鏡頭。",
    "textbookFocus": "康軒：常考食品防腐（真空包裝、乾燥劑、脫氧劑、冷藏）、鐵生鏽實驗條件觀察。 ｜ 南一：側重金屬防鏽五大法則（塗漆、上油、電鍍、乾燥、防鏽合金），以及酸雨加速金屬腐蝕。 ｜ 翰林：側重鐵生鏽的兩大必備要件（水分與氧氣）實驗對照組控制，以及生鏽是放熱氧化反應。",
    "juniorHighBridge": "國二下理化【氧化還原與反應速率】：活性大小排序、氧化劑與還原劑、溫度與接觸面積對反應速率影響。",
    "infographicKey": "info-sci-u7-1",
    "relatedPoints": [
      {
        "id": "kp-sci-u7-2",
        "title": "防鏽五大防護工法",
        "unitId": "sci-u7",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u7-3",
        "title": "食品防腐與保鮮原理",
        "unitId": "sci-u7",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u8-1",
        "title": "食物鏈箭號嚴格標準",
        "unitId": "sci-u8",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-comp-u6-1",
        "title": "無痕山林 LNT 七大準則核心",
        "unitId": "comp-u6",
        "subjectId": "integrative",
        "relation": "跨域戶外保養",
        "badgeType": "cross",
        "desc": "物質防鏽防腐 ➔ 戶外登山金屬裝備防潮保養"
      },
      {
        "id": "bridge-sci-u7",
        "isBridge": true,
        "title": "氧化還原與反應速率",
        "unitId": "sci-u7",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二下理化【氧化還原與反應速率】：活性大小排序、氧化劑與還原劑、溫度與接觸面積對反應速率影響。"
      }
    ]
  },
  {
    "id": "kp-sci-u7-2",
    "pointIndex": 1,
    "unitId": "sci-u7",
    "unitIndex": 6,
    "subjectId": "science",
    "semester": "6B",
    "title": "防鏽五大防護工法",
    "category": "自然・運算算理與公式",
    "badgeColor": "amber",
    "definition": "防鏽五大防護工法：塗油漆隔絕空氣、塗抹潤滑油、表面電鍍不易生銹金屬（鍍鋅/鍍錫）、乾燥劑防潮、抽真空包裝。",
    "formulaOrRule": "核心工具與心法：塗油漆、塗防鏽油、電鍍、保持乾燥、鍍鋅不鏽鋼",
    "strategyTip": "【審題觸發】當題目出現「日常有效防鏽措施」時，立即啟動「塗油漆、塗防鏽油、電鍍、保持乾燥、鍍鋅不鏽鋼」解題。考前速記：鐵生鏽必備水和氧氣！隔絕水分與氧氣即可防鏽：塗漆、上油、電鍍、乾燥！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】洋芋片充氮包裝防止氧化碎裂、汽機車鏈條上潤滑油防生鏽、乾燥箱保存單眼相機鏡頭。",
    "textbookFocus": "康軒：常考食品防腐（真空包裝、乾燥劑、脫氧劑、冷藏）、鐵生鏽實驗條件觀察。 ｜ 南一：側重金屬防鏽五大法則（塗漆、上油、電鍍、乾燥、防鏽合金），以及酸雨加速金屬腐蝕。 ｜ 翰林：側重鐵生鏽的兩大必備要件（水分與氧氣）實驗對照組控制，以及生鏽是放熱氧化反應。",
    "juniorHighBridge": "國二下理化【氧化還原與反應速率】：活性大小排序、氧化劑與還原劑、溫度與接觸面積對反應速率影響。",
    "infographicKey": "info-sci-u7-2",
    "relatedPoints": [
      {
        "id": "kp-sci-u7-1",
        "title": "鐵生鏽化學反應條件",
        "unitId": "sci-u7",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u7-3",
        "title": "食品防腐與保鮮原理",
        "unitId": "sci-u7",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u8-1",
        "title": "食物鏈箭號嚴格標準",
        "unitId": "sci-u8",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-comp-u6-1",
        "title": "無痕山林 LNT 七大準則核心",
        "unitId": "comp-u6",
        "subjectId": "integrative",
        "relation": "跨域戶外保養",
        "badgeType": "cross",
        "desc": "物質防鏽防腐 ➔ 戶外登山金屬裝備防潮保養"
      },
      {
        "id": "bridge-sci-u7",
        "isBridge": true,
        "title": "氧化還原與反應速率",
        "unitId": "sci-u7",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二下理化【氧化還原與反應速率】：活性大小排序、氧化劑與還原劑、溫度與接觸面積對反應速率影響。"
      }
    ]
  },
  {
    "id": "kp-sci-u7-3",
    "pointIndex": 2,
    "unitId": "sci-u7",
    "unitIndex": 6,
    "subjectId": "science",
    "semester": "6B",
    "title": "食品防腐與保鮮原理",
    "category": "自然・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "食品防腐與保鮮原理：低溫冷凍抑制微生物酵素活性、高溫殺菌密封（罐頭）、脫水乾燥與高糖高鹽醃漬降低水活性。",
    "formulaOrRule": "核心工具與心法：真空包裝、放置脫氧劑或乾燥劑、低溫冷凍抑制細菌酵素活性",
    "strategyTip": "【審題觸發】當題目出現「食品防腐保鮮妙招」時，立即啟動「真空包裝、放置脫氧劑或乾燥劑、低溫冷凍抑制細菌酵素活性」解題。考前速記：鐵生鏽必備水和氧氣！隔絕水分與氧氣即可防鏽：塗漆、上油、電鍍、乾燥！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】洋芋片充氮包裝防止氧化碎裂、汽機車鏈條上潤滑油防生鏽、乾燥箱保存單眼相機鏡頭。",
    "textbookFocus": "康軒：常考食品防腐（真空包裝、乾燥劑、脫氧劑、冷藏）、鐵生鏽實驗條件觀察。 ｜ 南一：側重金屬防鏽五大法則（塗漆、上油、電鍍、乾燥、防鏽合金），以及酸雨加速金屬腐蝕。 ｜ 翰林：側重鐵生鏽的兩大必備要件（水分與氧氣）實驗對照組控制，以及生鏽是放熱氧化反應。",
    "juniorHighBridge": "國二下理化【氧化還原與反應速率】：活性大小排序、氧化劑與還原劑、溫度與接觸面積對反應速率影響。",
    "infographicKey": "info-sci-u7-3",
    "relatedPoints": [
      {
        "id": "kp-sci-u7-1",
        "title": "鐵生鏽化學反應條件",
        "unitId": "sci-u7",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u7-2",
        "title": "防鏽五大防護工法",
        "unitId": "sci-u7",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u8-1",
        "title": "食物鏈箭號嚴格標準",
        "unitId": "sci-u8",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-comp-u6-1",
        "title": "無痕山林 LNT 七大準則核心",
        "unitId": "comp-u6",
        "subjectId": "integrative",
        "relation": "跨域戶外保養",
        "badgeType": "cross",
        "desc": "物質防鏽防腐 ➔ 戶外登山金屬裝備防潮保養"
      },
      {
        "id": "bridge-sci-u7",
        "isBridge": true,
        "title": "氧化還原與反應速率",
        "unitId": "sci-u7",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二下理化【氧化還原與反應速率】：活性大小排序、氧化劑與還原劑、溫度與接觸面積對反應速率影響。"
      }
    ]
  },
  {
    "id": "kp-sci-u8-1",
    "pointIndex": 0,
    "unitId": "sci-u8",
    "unitIndex": 7,
    "subjectId": "science",
    "semester": "6B",
    "title": "食物鏈箭號嚴格標準",
    "category": "自然・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "食物鏈箭號嚴格標準：箭頭代表「能量與養分的流動路徑」，必為「被吃者 ➔ 掠食者」，綠色植物永遠在食物鏈頂端（生產者）。",
    "formulaOrRule": "核心工具與心法：分解者（真菌、細菌、蚯蚓腐生生物）",
    "strategyTip": "【審題觸發】當題目出現「扮演物質循環關鍵終點、將有機物分解為無機物」時，立即啟動「分解者（真菌、細菌、蚯蚓腐生生物）」解題。考前速記：食物鏈能量單向流動逐級遞減；生產者為基石，外來入侵種威脅本土生物多樣性！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】紅樹林濕地保護候鳥水鳥、海洋塑膠垃圾淨灘行動、廚餘堆肥化轉為有機土壤肥料。",
    "textbookFocus": "康軒：常考臺灣特有種保育（臺灣黑熊、櫻花鉤吻鮭、石虎）與外來入侵種衝擊（福壽螺、布袋蓮）。 ｜ 南一：側重生態系平衡破壞因果關係、全球暖化溫室效應，以及國家公園與紅樹林生態保護區功能。 ｜ 翰林：側重食物鏈與食物網角色（生產者、初級/次級消費者、分解者）及能量金字塔單向遞減傳遞。",
    "juniorHighBridge": "國一生物【生態系與群集】：食物網複雜度決定生態穩定性、碳循環與氮循環、生態足跡與保育。",
    "infographicKey": "info-sci-u8-1",
    "relatedPoints": [
      {
        "id": "kp-sci-u8-2",
        "title": "生態系能量傳遞 10% 定律",
        "unitId": "sci-u8",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u8-3",
        "title": "生物多樣性三大層次",
        "unitId": "sci-u8",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u9-1",
        "title": "聲音三要素全解構",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-pe-u2-1",
        "title": "六大類食物每天均衡攝取",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "跨域生命健康",
        "badgeType": "cross",
        "desc": "食物鏈能量金字塔 ➔ 人體六大類營養素與熱量平衡"
      },
      {
        "id": "bridge-sci-u8",
        "isBridge": true,
        "title": "生態系與群集",
        "unitId": "sci-u8",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一生物【生態系與群集】：食物網複雜度決定生態穩定性、碳循環與氮循環、生態足跡與保育。"
      }
    ]
  },
  {
    "id": "kp-sci-u8-2",
    "pointIndex": 1,
    "unitId": "sci-u8",
    "unitIndex": 7,
    "subjectId": "science",
    "semester": "6B",
    "title": "生態系能量傳遞 10% 定律",
    "category": "自然・運算算理與公式",
    "badgeColor": "amber",
    "definition": "生態系能量傳遞 10% 定律：能量在食物鏈傳遞時每層僅剩約 10%，其餘散失為熱能；脂溶性重金屬毒素則「逐層生物濃縮放大」。",
    "formulaOrRule": "核心工具與心法：生物放大作用 (Biological Magnification)",
    "strategyTip": "【審題觸發】當題目出現「有毒重金屬或塑膠微粒在頂級掠食者體內濃度最高」時，立即啟動「生物放大作用 (Biological Magnification)」解題。考前速記：食物鏈能量單向流動逐級遞減；生產者為基石，外來入侵種威脅本土生物多樣性！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】紅樹林濕地保護候鳥水鳥、海洋塑膠垃圾淨灘行動、廚餘堆肥化轉為有機土壤肥料。",
    "textbookFocus": "康軒：常考臺灣特有種保育（臺灣黑熊、櫻花鉤吻鮭、石虎）與外來入侵種衝擊（福壽螺、布袋蓮）。 ｜ 南一：側重生態系平衡破壞因果關係、全球暖化溫室效應，以及國家公園與紅樹林生態保護區功能。 ｜ 翰林：側重食物鏈與食物網角色（生產者、初級/次級消費者、分解者）及能量金字塔單向遞減傳遞。",
    "juniorHighBridge": "國一生物【生態系與群集】：食物網複雜度決定生態穩定性、碳循環與氮循環、生態足跡與保育。",
    "infographicKey": "info-sci-u8-2",
    "relatedPoints": [
      {
        "id": "kp-sci-u8-1",
        "title": "食物鏈箭號嚴格標準",
        "unitId": "sci-u8",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u8-3",
        "title": "生物多樣性三大層次",
        "unitId": "sci-u8",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u9-1",
        "title": "聲音三要素全解構",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-pe-u2-1",
        "title": "六大類食物每天均衡攝取",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "跨域生命健康",
        "badgeType": "cross",
        "desc": "食物鏈能量金字塔 ➔ 人體六大類營養素與熱量平衡"
      },
      {
        "id": "bridge-sci-u8",
        "isBridge": true,
        "title": "生態系與群集",
        "unitId": "sci-u8",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一生物【生態系與群集】：食物網複雜度決定生態穩定性、碳循環與氮循環、生態足跡與保育。"
      }
    ]
  },
  {
    "id": "kp-sci-u8-3",
    "pointIndex": 2,
    "unitId": "sci-u8",
    "unitIndex": 7,
    "subjectId": "science",
    "semester": "6B",
    "title": "生物多樣性三大層次",
    "category": "自然・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "生物多樣性三大層次：遺傳多樣性、物種多樣性與生態系多樣性；外來入侵種（綠鬣蜥/福壽螺）威脅本土生態平衡。",
    "formulaOrRule": "核心工具與心法：缺乏天敵、繁殖力強、破壞原生物多樣性",
    "strategyTip": "【審題觸發】當題目出現「外來種入侵危害本土物種」時，立即啟動「缺乏天敵、繁殖力強、破壞原生物多樣性」解題。考前速記：食物鏈能量單向流動逐級遞減；生產者為基石，外來入侵種威脅本土生物多樣性！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】紅樹林濕地保護候鳥水鳥、海洋塑膠垃圾淨灘行動、廚餘堆肥化轉為有機土壤肥料。",
    "textbookFocus": "康軒：常考臺灣特有種保育（臺灣黑熊、櫻花鉤吻鮭、石虎）與外來入侵種衝擊（福壽螺、布袋蓮）。 ｜ 南一：側重生態系平衡破壞因果關係、全球暖化溫室效應，以及國家公園與紅樹林生態保護區功能。 ｜ 翰林：側重食物鏈與食物網角色（生產者、初級/次級消費者、分解者）及能量金字塔單向遞減傳遞。",
    "juniorHighBridge": "國一生物【生態系與群集】：食物網複雜度決定生態穩定性、碳循環與氮循環、生態足跡與保育。",
    "infographicKey": "info-sci-u8-3",
    "relatedPoints": [
      {
        "id": "kp-sci-u8-1",
        "title": "食物鏈箭號嚴格標準",
        "unitId": "sci-u8",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u8-2",
        "title": "生態系能量傳遞 10% 定律",
        "unitId": "sci-u8",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u9-1",
        "title": "聲音三要素全解構",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-pe-u2-1",
        "title": "六大類食物每天均衡攝取",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "跨域生命健康",
        "badgeType": "cross",
        "desc": "食物鏈能量金字塔 ➔ 人體六大類營養素與熱量平衡"
      },
      {
        "id": "bridge-sci-u8",
        "isBridge": true,
        "title": "生態系與群集",
        "unitId": "sci-u8",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一生物【生態系與群集】：食物網複雜度決定生態穩定性、碳循環與氮循環、生態足跡與保育。"
      }
    ]
  },
  {
    "id": "kp-sci-u9-1",
    "pointIndex": 0,
    "unitId": "sci-u9",
    "unitIndex": 8,
    "subjectId": "science",
    "semester": "6B",
    "title": "聲音三要素全解構",
    "category": "自然・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "聲音三要素全解構：響度（看振幅大小，敲擊用力越大響度越大）、音調（看振動頻率高低）、音色（看聲波波形）。",
    "formulaOrRule": "核心工具與心法：弦調緊、弦變細、手指按住弦使振動長度變短",
    "strategyTip": "【審題觸發】當題目出現「如何讓吉他弦音調變高」時，立即啟動「弦調緊、弦變細、手指按住弦使振動長度變短」解題。考前速記：緊細短薄音調高，鬆粗長厚音調低；振幅大響度大；真空無法傳播聲音！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】自製排簫與橡皮筋吉他調音、音樂廳吸音棉降噪設計、倒車雷達超音波偵測障礙物。",
    "textbookFocus": "康軒：常考自製排笛、橡皮筋吉他、水杯琴之音調高低與空氣柱長短、鬆緊粗細關聯。 ｜ 南一：側重聲音傳播介質（固體 > 液體 > 氣體，真空不傳聲）與噪音防制隔音吸音原理。 ｜ 翰林：側重聲音三要素（音調-頻率、響度-振幅、音色-波形）物理意義與分貝 (dB) 測量。",
    "juniorHighBridge": "國二上理化【波動與聲音】：橫波與縱波、波速公式 v = f·λ、回聲反射測距與超聲波應用。",
    "infographicKey": "info-sci-u9-1",
    "relatedPoints": [
      {
        "id": "kp-sci-u9-2",
        "title": "音調高低調音心法",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u9-3",
        "title": "聲音傳播需要介質",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u10-1",
        "title": "複式光學顯微鏡成像光學",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-art-u2-1",
        "title": "音樂三要素黃金三角",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "跨域聲學音樂",
        "badgeType": "cross",
        "desc": "聲音頻率與振幅 ➔ 音樂旋律音高與五線譜音符時值"
      },
      {
        "id": "bridge-sci-u9",
        "isBridge": true,
        "title": "波動與聲音",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二上理化【波動與聲音】：橫波與縱波、波速公式 v = f·λ、回聲反射測距與超聲波應用。"
      }
    ]
  },
  {
    "id": "kp-sci-u9-2",
    "pointIndex": 1,
    "unitId": "sci-u9",
    "unitIndex": 8,
    "subjectId": "science",
    "semester": "6B",
    "title": "音調高低調音心法",
    "category": "自然・運算算理與公式",
    "badgeColor": "amber",
    "definition": "音調高低調音心法：弦樂器「弦越短、越細、越緊」振動越快音調越高；管樂器「空氣柱越短」音調越高。",
    "formulaOrRule": "核心工具與心法：吹氣振動空氣柱（水越多空氣柱越短音調越高）；敲擊振動水與管壁（水越少音調越高）",
    "strategyTip": "【審題觸發】當題目出現「試管吹氣 vs 敲擊試管」時，立即啟動「吹氣振動空氣柱（水越多空氣柱越短音調越高）；敲擊振動水與管壁（水越少音調越高）」解題。考前速記：緊細短薄音調高，鬆粗長厚音調低；振幅大響度大；真空無法傳播聲音！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】自製排簫與橡皮筋吉他調音、音樂廳吸音棉降噪設計、倒車雷達超音波偵測障礙物。",
    "textbookFocus": "康軒：常考自製排笛、橡皮筋吉他、水杯琴之音調高低與空氣柱長短、鬆緊粗細關聯。 ｜ 南一：側重聲音傳播介質（固體 > 液體 > 氣體，真空不傳聲）與噪音防制隔音吸音原理。 ｜ 翰林：側重聲音三要素（音調-頻率、響度-振幅、音色-波形）物理意義與分貝 (dB) 測量。",
    "juniorHighBridge": "國二上理化【波動與聲音】：橫波與縱波、波速公式 v = f·λ、回聲反射測距與超聲波應用。",
    "infographicKey": "info-sci-u9-2",
    "relatedPoints": [
      {
        "id": "kp-sci-u9-1",
        "title": "聲音三要素全解構",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u9-3",
        "title": "聲音傳播需要介質",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u10-1",
        "title": "複式光學顯微鏡成像光學",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-art-u2-1",
        "title": "音樂三要素黃金三角",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "跨域聲學音樂",
        "badgeType": "cross",
        "desc": "聲音頻率與振幅 ➔ 音樂旋律音高與五線譜音符時值"
      },
      {
        "id": "bridge-sci-u9",
        "isBridge": true,
        "title": "波動與聲音",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二上理化【波動與聲音】：橫波與縱波、波速公式 v = f·λ、回聲反射測距與超聲波應用。"
      }
    ]
  },
  {
    "id": "kp-sci-u9-3",
    "pointIndex": 2,
    "unitId": "sci-u9",
    "unitIndex": 8,
    "subjectId": "science",
    "semester": "6B",
    "title": "聲音傳播需要介質",
    "category": "自然・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "聲音傳播需要介質：聲音在固體傳播最快，其次為液體、氣體，在「真空」中完全無法傳播。",
    "formulaOrRule": "核心工具與心法：音色不同（波形不同）",
    "strategyTip": "【審題觸發】當題目出現「不同樂器演奏同音調同響度仍能分辨」時，立即啟動「音色不同（波形不同）」解題。考前速記：緊細短薄音調高，鬆粗長厚音調低；振幅大響度大；真空無法傳播聲音！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】自製排簫與橡皮筋吉他調音、音樂廳吸音棉降噪設計、倒車雷達超音波偵測障礙物。",
    "textbookFocus": "康軒：常考自製排笛、橡皮筋吉他、水杯琴之音調高低與空氣柱長短、鬆緊粗細關聯。 ｜ 南一：側重聲音傳播介質（固體 > 液體 > 氣體，真空不傳聲）與噪音防制隔音吸音原理。 ｜ 翰林：側重聲音三要素（音調-頻率、響度-振幅、音色-波形）物理意義與分貝 (dB) 測量。",
    "juniorHighBridge": "國二上理化【波動與聲音】：橫波與縱波、波速公式 v = f·λ、回聲反射測距與超聲波應用。",
    "infographicKey": "info-sci-u9-3",
    "relatedPoints": [
      {
        "id": "kp-sci-u9-1",
        "title": "聲音三要素全解構",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u9-2",
        "title": "音調高低調音心法",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u10-1",
        "title": "複式光學顯微鏡成像光學",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-art-u2-1",
        "title": "音樂三要素黃金三角",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "跨域聲學音樂",
        "badgeType": "cross",
        "desc": "聲音頻率與振幅 ➔ 音樂旋律音高與五線譜音符時值"
      },
      {
        "id": "bridge-sci-u9",
        "isBridge": true,
        "title": "波動與聲音",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二上理化【波動與聲音】：橫波與縱波、波速公式 v = f·λ、回聲反射測距與超聲波應用。"
      }
    ]
  },
  {
    "id": "kp-sci-u10-1",
    "pointIndex": 0,
    "unitId": "sci-u10",
    "unitIndex": 9,
    "subjectId": "science",
    "semester": "6B",
    "title": "複式光學顯微鏡成像光學",
    "category": "自然・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "複式光學顯微鏡成像光學：目鏡與物鏡雙重凸透鏡放大，呈現「上下顛倒、左右相反」的倒立放大虛像；放大倍率 = 目鏡倍數 × 物鏡倍數。",
    "formulaOrRule": "核心工具與心法：玻片向「右上方」推（物在哪裡就往哪裡推）",
    "strategyTip": "【審題觸發】當題目出現「物像偏在視野右上方，如何移回中心」時，立即啟動「玻片向「右上方」推（物在哪裡就往哪裡推）」解題。考前速記：顯微鏡像上下顛倒左右相反，物在哪玻片就往哪移！低倍換高倍：「暗、小、少、大」！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】醫學檢驗血液抹片白血球紅血球、水質採樣觀察草履蟲水蚤生態、植物氣孔保衛細胞開閉機制。",
    "textbookFocus": "康軒：常考酵母菌發酵做麵包、乳酸菌做優酪乳、黴菌腐蝕食物等微生物之利弊生活應用。 ｜ 南一：側重高倍鏡與低倍鏡四特徵對比（低倍換高倍：視野變暗、範圍變小、細胞數變少、影像放大）。 ｜ 翰林：側重光學顯微鏡構造名稱（目鏡、物鏡、粗細調節輪、光圈）與玻片反向移動法規。",
    "juniorHighBridge": "國一上生物【細胞與顯微鏡】：動植物細胞膜/核/質/胞器分工、滲透作用與物質通過細胞膜。",
    "infographicKey": "info-sci-u10-1",
    "relatedPoints": [
      {
        "id": "kp-sci-u10-2",
        "title": "載玻片移動必背口訣",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u10-3",
        "title": "低倍鏡換高倍鏡四變化",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u9-1",
        "title": "聲音三要素全解構",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：自然・觀念本質與定義"
      },
      {
        "id": "kp-pe-u3-1",
        "title": "成人 CPR+AED 救命黃金口訣",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "跨域微觀健康",
        "badgeType": "cross",
        "desc": "顯微鏡微生物觀察 ➔ 傷口感染細菌防護與急救"
      },
      {
        "id": "bridge-sci-u10",
        "isBridge": true,
        "title": "細胞與顯微鏡",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一上生物【細胞與顯微鏡】：動植物細胞膜/核/質/胞器分工、滲透作用與物質通過細胞膜。"
      }
    ]
  },
  {
    "id": "kp-sci-u10-2",
    "pointIndex": 1,
    "unitId": "sci-u10",
    "unitIndex": 9,
    "subjectId": "science",
    "semester": "6B",
    "title": "載玻片移動必背口訣",
    "category": "自然・運算算理與公式",
    "badgeColor": "amber",
    "definition": "載玻片移動必背口訣：「物像偏在視野何處，載玻片就朝該方向推移（物在哪偏，片朝哪追）」！",
    "formulaOrRule": "核心工具與心法：視野變暗（需調大光圈反光鏡）、視野範圍變小、只能用「細調節輪」調焦",
    "strategyTip": "【審題觸發】當題目出現「低倍鏡換成高倍鏡後」時，立即啟動「視野變暗（需調大光圈反光鏡）、視野範圍變小、只能用「細調節輪」調焦」解題。考前速記：顯微鏡像上下顛倒左右相反，物在哪玻片就往哪移！低倍換高倍：「暗、小、少、大」！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】醫學檢驗血液抹片白血球紅血球、水質採樣觀察草履蟲水蚤生態、植物氣孔保衛細胞開閉機制。",
    "textbookFocus": "康軒：常考酵母菌發酵做麵包、乳酸菌做優酪乳、黴菌腐蝕食物等微生物之利弊生活應用。 ｜ 南一：側重高倍鏡與低倍鏡四特徵對比（低倍換高倍：視野變暗、範圍變小、細胞數變少、影像放大）。 ｜ 翰林：側重光學顯微鏡構造名稱（目鏡、物鏡、粗細調節輪、光圈）與玻片反向移動法規。",
    "juniorHighBridge": "國一上生物【細胞與顯微鏡】：動植物細胞膜/核/質/胞器分工、滲透作用與物質通過細胞膜。",
    "infographicKey": "info-sci-u10-2",
    "relatedPoints": [
      {
        "id": "kp-sci-u10-1",
        "title": "複式光學顯微鏡成像光學",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u10-3",
        "title": "低倍鏡換高倍鏡四變化",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u9-1",
        "title": "聲音三要素全解構",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：自然・觀念本質與定義"
      },
      {
        "id": "kp-pe-u3-1",
        "title": "成人 CPR+AED 救命黃金口訣",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "跨域微觀健康",
        "badgeType": "cross",
        "desc": "顯微鏡微生物觀察 ➔ 傷口感染細菌防護與急救"
      },
      {
        "id": "bridge-sci-u10",
        "isBridge": true,
        "title": "細胞與顯微鏡",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一上生物【細胞與顯微鏡】：動植物細胞膜/核/質/胞器分工、滲透作用與物質通過細胞膜。"
      }
    ]
  },
  {
    "id": "kp-sci-u10-3",
    "pointIndex": 2,
    "unitId": "sci-u10",
    "unitIndex": 9,
    "subjectId": "science",
    "semester": "6B",
    "title": "低倍鏡換高倍鏡四變化",
    "category": "自然・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "低倍鏡換高倍鏡四變化：視野變「暗」、觀察範圍變「小」、細胞影像變「大」、細胞數量變「少」。",
    "formulaOrRule": "核心工具與心法：植物細胞特有：細胞壁（支持固定形狀）、葉綠體（綠色細胞行光合作用）、大液胞",
    "strategyTip": "【審題觸發】當題目出現「植物細胞 vs 動物細胞特有構造」時，立即啟動「植物細胞特有：細胞壁（支持固定形狀）、葉綠體（綠色細胞行光合作用）、大液胞」解題。考前速記：顯微鏡像上下顛倒左右相反，物在哪玻片就往哪移！低倍換高倍：「暗、小、少、大」！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】醫學檢驗血液抹片白血球紅血球、水質採樣觀察草履蟲水蚤生態、植物氣孔保衛細胞開閉機制。",
    "textbookFocus": "康軒：常考酵母菌發酵做麵包、乳酸菌做優酪乳、黴菌腐蝕食物等微生物之利弊生活應用。 ｜ 南一：側重高倍鏡與低倍鏡四特徵對比（低倍換高倍：視野變暗、範圍變小、細胞數變少、影像放大）。 ｜ 翰林：側重光學顯微鏡構造名稱（目鏡、物鏡、粗細調節輪、光圈）與玻片反向移動法規。",
    "juniorHighBridge": "國一上生物【細胞與顯微鏡】：動植物細胞膜/核/質/胞器分工、滲透作用與物質通過細胞膜。",
    "infographicKey": "info-sci-u10-3",
    "relatedPoints": [
      {
        "id": "kp-sci-u10-1",
        "title": "複式光學顯微鏡成像光學",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u10-2",
        "title": "載玻片移動必背口訣",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u9-1",
        "title": "聲音三要素全解構",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：自然・觀念本質與定義"
      },
      {
        "id": "kp-pe-u3-1",
        "title": "成人 CPR+AED 救命黃金口訣",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "跨域微觀健康",
        "badgeType": "cross",
        "desc": "顯微鏡微生物觀察 ➔ 傷口感染細菌防護與急救"
      },
      {
        "id": "bridge-sci-u10",
        "isBridge": true,
        "title": "細胞與顯微鏡",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一上生物【細胞與顯微鏡】：動植物細胞膜/核/質/胞器分工、滲透作用與物質通過細胞膜。"
      }
    ]
  },
  {
    "id": "kp-man-u1-1",
    "pointIndex": 0,
    "unitId": "man-u1",
    "unitIndex": 0,
    "subjectId": "mandarin",
    "semester": "6A",
    "title": "PIRLS 閱讀理解四層次階梯",
    "category": "國語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "PIRLS 閱讀理解四層次階梯：直接提取訊息 ➔ 直接推論 ➔ 詮釋整合 ➔ 比較評估批判。",
    "formulaOrRule": "核心工具與心法：略讀首尾段、每段首尾句，搭配 5W1H 提煉",
    "strategyTip": "【審題觸發】當題目出現「快速掌握長文架構與核心大意」時，立即啟動「略讀首尾段、每段首尾句，搭配 5W1H 提煉」解題。考前速記：尋事實找原句，推因果看脈絡；找主旨看首尾段，言外之意見心境！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】辨別社群媒體新聞真實性、閱讀各類家電說明書與合約條款、摘要會議重點。",
    "textbookFocus": "康軒：常考 PIRLS 閱讀理解四層次（直接提取訊息、直接推論、詮釋整合、比較評估）測驗題。 ｜ 南一：側重文意理解因果推論、作者寫作立場與言外之意推斷。 ｜ 翰林：側重六何法 (5W1H) 提煉文章主旨，以及心智圖、魚骨圖梳理文本段落脈絡。",
    "juniorHighBridge": "國中會考國文科【長文閱讀與雙文本對讀】：跨領域圖表素養題、非連續性文本資訊轉換與推論。",
    "infographicKey": "info-man-u1-1",
    "relatedPoints": [
      {
        "id": "kp-man-u1-2",
        "title": "高年級長文雙閱讀策略",
        "unitId": "man-u1",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u1-3",
        "title": "六何法 (5W1H) 提煉文本主旨",
        "unitId": "man-u1",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u2-1",
        "title": "記敘文起承轉合黃金架構",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "kp-soc-u8-2",
        "title": "數位公民資訊查證三部曲",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "跨域批判思維",
        "badgeType": "cross",
        "desc": "PIRLS 閱讀理解四層次 ➔ 數位假訊息事實驗證"
      },
      {
        "id": "bridge-man-u1",
        "isBridge": true,
        "title": "長文閱讀與雙文本對讀",
        "unitId": "man-u1",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考國文科【長文閱讀與雙文本對讀】：跨領域圖表素養題、非連續性文本資訊轉換與推論。"
      }
    ]
  },
  {
    "id": "kp-man-u1-2",
    "pointIndex": 1,
    "unitId": "man-u1",
    "unitIndex": 0,
    "subjectId": "mandarin",
    "semester": "6A",
    "title": "高年級長文雙閱讀策略",
    "category": "國語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "高年級長文雙閱讀策略：略讀 (Skimming) 抓取文章大意與各段主題句；掃讀 (Scanning) 定位關鍵人名、年代與數字。",
    "formulaOrRule": "核心工具與心法：層次二統整推論：結合上下文語境與人物潛台詞",
    "strategyTip": "【審題觸發】當題目出現「作者透過這段對話暗示了什麼」時，立即啟動「層次二統整推論：結合上下文語境與人物潛台詞」解題。考前速記：尋事實找原句，推因果看脈絡；找主旨看首尾段，言外之意見心境！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】辨別社群媒體新聞真實性、閱讀各類家電說明書與合約條款、摘要會議重點。",
    "textbookFocus": "康軒：常考 PIRLS 閱讀理解四層次（直接提取訊息、直接推論、詮釋整合、比較評估）測驗題。 ｜ 南一：側重文意理解因果推論、作者寫作立場與言外之意推斷。 ｜ 翰林：側重六何法 (5W1H) 提煉文章主旨，以及心智圖、魚骨圖梳理文本段落脈絡。",
    "juniorHighBridge": "國中會考國文科【長文閱讀與雙文本對讀】：跨領域圖表素養題、非連續性文本資訊轉換與推論。",
    "infographicKey": "info-man-u1-2",
    "relatedPoints": [
      {
        "id": "kp-man-u1-1",
        "title": "PIRLS 閱讀理解四層次階梯",
        "unitId": "man-u1",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u1-3",
        "title": "六何法 (5W1H) 提煉文本主旨",
        "unitId": "man-u1",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u2-1",
        "title": "記敘文起承轉合黃金架構",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "kp-soc-u8-2",
        "title": "數位公民資訊查證三部曲",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "跨域批判思維",
        "badgeType": "cross",
        "desc": "PIRLS 閱讀理解四層次 ➔ 數位假訊息事實驗證"
      },
      {
        "id": "bridge-man-u1",
        "isBridge": true,
        "title": "長文閱讀與雙文本對讀",
        "unitId": "man-u1",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考國文科【長文閱讀與雙文本對讀】：跨領域圖表素養題、非連續性文本資訊轉換與推論。"
      }
    ]
  },
  {
    "id": "kp-man-u1-3",
    "pointIndex": 2,
    "unitId": "man-u1",
    "unitIndex": 0,
    "subjectId": "mandarin",
    "semester": "6A",
    "title": "六何法 (5W1H) 提煉文本主旨",
    "category": "國語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "六何法 (5W1H) 提煉文本主旨：Who（人物）、When（時間）、Where（地點）、What（事件）、Why（成因）、How（經過與結果）。",
    "formulaOrRule": "核心工具與心法：層次三省思評鑑：提出主張並佐以生活經驗或證據",
    "strategyTip": "【審題觸發】當題目出現「你贊成作者的論點嗎？請說明理由」時，立即啟動「層次三省思評鑑：提出主張並佐以生活經驗或證據」解題。考前速記：尋事實找原句，推因果看脈絡；找主旨看首尾段，言外之意見心境！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】辨別社群媒體新聞真實性、閱讀各類家電說明書與合約條款、摘要會議重點。",
    "textbookFocus": "康軒：常考 PIRLS 閱讀理解四層次（直接提取訊息、直接推論、詮釋整合、比較評估）測驗題。 ｜ 南一：側重文意理解因果推論、作者寫作立場與言外之意推斷。 ｜ 翰林：側重六何法 (5W1H) 提煉文章主旨，以及心智圖、魚骨圖梳理文本段落脈絡。",
    "juniorHighBridge": "國中會考國文科【長文閱讀與雙文本對讀】：跨領域圖表素養題、非連續性文本資訊轉換與推論。",
    "infographicKey": "info-man-u1-3",
    "relatedPoints": [
      {
        "id": "kp-man-u1-1",
        "title": "PIRLS 閱讀理解四層次階梯",
        "unitId": "man-u1",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u1-2",
        "title": "高年級長文雙閱讀策略",
        "unitId": "man-u1",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u2-1",
        "title": "記敘文起承轉合黃金架構",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "kp-soc-u8-2",
        "title": "數位公民資訊查證三部曲",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "跨域批判思維",
        "badgeType": "cross",
        "desc": "PIRLS 閱讀理解四層次 ➔ 數位假訊息事實驗證"
      },
      {
        "id": "bridge-man-u1",
        "isBridge": true,
        "title": "長文閱讀與雙文本對讀",
        "unitId": "man-u1",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考國文科【長文閱讀與雙文本對讀】：跨領域圖表素養題、非連續性文本資訊轉換與推論。"
      }
    ]
  },
  {
    "id": "kp-man-u2-1",
    "pointIndex": 0,
    "unitId": "man-u2",
    "unitIndex": 1,
    "subjectId": "mandarin",
    "semester": "6A",
    "title": "記敘文起承轉合黃金架構",
    "category": "國語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "記敘文起承轉合黃金架構：起（破題引出情境） ➔ 承（鋪陳發展細節） ➔ 轉（高潮矛盾衝突） ➔ 合（感悟總結昇華）。",
    "formulaOrRule": "核心工具與心法：製造意外、衝突、心情急轉直下或觀念頓悟",
    "strategyTip": "【審題觸發】當題目出現「記敘文高潮轉折設計」時，立即啟動「製造意外、衝突、心情急轉直下或觀念頓悟」解題。考前速記：起筆破題設情境，承接鋪陳蓄情感；轉折衝突掀高潮，合尾點題留餘韻！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】口述個人精彩生命故事、撰寫動人推甄自傳、社群生活日記分享。",
    "textbookFocus": "康軒：常考記敘文描寫技巧（心理描寫、動作描寫、外貌細節）與敘事觀點（第一人稱 vs 第三人稱）。 ｜ 南一：側重以小見大、借物抒情、融情入景的寫作手法題型。 ｜ 翰林：側重記敘文「起、承、轉、合」結構佈局分析與倒敘法、順敘法辨析。",
    "juniorHighBridge": "國中會考寫作測驗【引導式情境寫作】：審題精準立意新穎、材料剪裁巧妙、情思深刻結構嚴謹。",
    "infographicKey": "info-man-u2-1",
    "relatedPoints": [
      {
        "id": "kp-man-u2-2",
        "title": "敘事時序靈活切換",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u2-3",
        "title": "以細節刻畫取代抽象形容",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u3-1",
        "title": "議論文三要素金字塔",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u2-1",
        "title": "過去簡單式核心定義與時間信號",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "跨語文敘事法",
        "badgeType": "cross",
        "desc": "記敘文起承轉合 ➔ 英語過去式冒險故事創作"
      },
      {
        "id": "bridge-man-u2",
        "isBridge": true,
        "title": "引導式情境寫作",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考寫作測驗【引導式情境寫作】：審題精準立意新穎、材料剪裁巧妙、情思深刻結構嚴謹。"
      }
    ]
  },
  {
    "id": "kp-man-u2-2",
    "pointIndex": 1,
    "unitId": "man-u2",
    "unitIndex": 1,
    "subjectId": "mandarin",
    "semester": "6A",
    "title": "敘事時序靈活切換",
    "category": "國語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "敘事時序靈活切換：順敘（時間正常推進）、倒敘（先寫結果再回溯過往懸念）、插敘（插入相關往事豐富人物背景）。",
    "formulaOrRule": "核心工具與心法：細緻的外貌、神態、動作摹寫搭配符合性格的對話",
    "strategyTip": "【審題觸發】當題目出現「使人物形象鮮活立體」時，立即啟動「細緻的外貌、神態、動作摹寫搭配符合性格的對話」解題。考前速記：起筆破題設情境，承接鋪陳蓄情感；轉折衝突掀高潮，合尾點題留餘韻！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】口述個人精彩生命故事、撰寫動人推甄自傳、社群生活日記分享。",
    "textbookFocus": "康軒：常考記敘文描寫技巧（心理描寫、動作描寫、外貌細節）與敘事觀點（第一人稱 vs 第三人稱）。 ｜ 南一：側重以小見大、借物抒情、融情入景的寫作手法題型。 ｜ 翰林：側重記敘文「起、承、轉、合」結構佈局分析與倒敘法、順敘法辨析。",
    "juniorHighBridge": "國中會考寫作測驗【引導式情境寫作】：審題精準立意新穎、材料剪裁巧妙、情思深刻結構嚴謹。",
    "infographicKey": "info-man-u2-2",
    "relatedPoints": [
      {
        "id": "kp-man-u2-1",
        "title": "記敘文起承轉合黃金架構",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u2-3",
        "title": "以細節刻畫取代抽象形容",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u3-1",
        "title": "議論文三要素金字塔",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u2-1",
        "title": "過去簡單式核心定義與時間信號",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "跨語文敘事法",
        "badgeType": "cross",
        "desc": "記敘文起承轉合 ➔ 英語過去式冒險故事創作"
      },
      {
        "id": "bridge-man-u2",
        "isBridge": true,
        "title": "引導式情境寫作",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考寫作測驗【引導式情境寫作】：審題精準立意新穎、材料剪裁巧妙、情思深刻結構嚴謹。"
      }
    ]
  },
  {
    "id": "kp-man-u2-3",
    "pointIndex": 2,
    "unitId": "man-u2",
    "unitIndex": 1,
    "subjectId": "mandarin",
    "semester": "6A",
    "title": "以細節刻畫取代抽象形容",
    "category": "國語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "以細節刻畫取代抽象形容：善用人物動作、神態眼神、心理獨白與環境烘托，展現真實生命張力。",
    "formulaOrRule": "核心工具與心法：詳略得當（關鍵情節特寫放大，次要過程一筆帶過）",
    "strategyTip": "【審題觸發】當題目出現「避免流水帳陷阱」時，立即啟動「詳略得當（關鍵情節特寫放大，次要過程一筆帶過）」解題。考前速記：起筆破題設情境，承接鋪陳蓄情感；轉折衝突掀高潮，合尾點題留餘韻！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】口述個人精彩生命故事、撰寫動人推甄自傳、社群生活日記分享。",
    "textbookFocus": "康軒：常考記敘文描寫技巧（心理描寫、動作描寫、外貌細節）與敘事觀點（第一人稱 vs 第三人稱）。 ｜ 南一：側重以小見大、借物抒情、融情入景的寫作手法題型。 ｜ 翰林：側重記敘文「起、承、轉、合」結構佈局分析與倒敘法、順敘法辨析。",
    "juniorHighBridge": "國中會考寫作測驗【引導式情境寫作】：審題精準立意新穎、材料剪裁巧妙、情思深刻結構嚴謹。",
    "infographicKey": "info-man-u2-3",
    "relatedPoints": [
      {
        "id": "kp-man-u2-1",
        "title": "記敘文起承轉合黃金架構",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u2-2",
        "title": "敘事時序靈活切換",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u3-1",
        "title": "議論文三要素金字塔",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u2-1",
        "title": "過去簡單式核心定義與時間信號",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "跨語文敘事法",
        "badgeType": "cross",
        "desc": "記敘文起承轉合 ➔ 英語過去式冒險故事創作"
      },
      {
        "id": "bridge-man-u2",
        "isBridge": true,
        "title": "引導式情境寫作",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考寫作測驗【引導式情境寫作】：審題精準立意新穎、材料剪裁巧妙、情思深刻結構嚴謹。"
      }
    ]
  },
  {
    "id": "kp-man-u3-1",
    "pointIndex": 0,
    "unitId": "man-u3",
    "unitIndex": 2,
    "subjectId": "mandarin",
    "semester": "6A",
    "title": "議論文三要素金字塔",
    "category": "國語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "議論文三要素金字塔：論點（作者核心主張）、論據（事實論據與理論名言）、論證（舉例論證、正反對比論證、因果論證）。",
    "formulaOrRule": "核心工具與心法：尋找「我認為」、「總之」、「由此可見」等結論句",
    "strategyTip": "【審題觸發】當題目出現「辨識作者核心立場主張」時，立即啟動「尋找「我認為」、「總之」、「由此可見」等結論句」解題。考前速記：說明文客觀講原理，議論文主觀講道理；論點是骨架，論據是血肉，論證是血脈！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】班級自治活動方案提案企劃、辯論比賽正反攻防、理性說服父母爭取自主權。",
    "textbookFocus": "康軒：常考生活科普說明文之說明方法（舉例說明、數據說明、比較說明、分類說明）判讀。 ｜ 南一：側重正反對比論證法、因果論證法，以及名言論據與生活實例論據之搭配。 ｜ 翰林：側重議論文三要素（論點-核心主張、論據-事實與理論、論證-推理過程）之結構拆解。",
    "juniorHighBridge": "國中會考議論文【思辨與推論】：辨識邏輯謬誤（以偏概全、偷換概念）、論證結構嚴密性分析。",
    "infographicKey": "info-man-u3-1",
    "relatedPoints": [
      {
        "id": "kp-man-u3-2",
        "title": "說明文常見說明方法",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u3-3",
        "title": "批判性思維判讀",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u4-1",
        "title": "高年級四大核心修辭",
        "unitId": "man-u4",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "bridge-man-u3",
        "isBridge": true,
        "title": "思辨與推論",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考議論文【思辨與推論】：辨識邏輯謬誤（以偏概全、偷換概念）、論證結構嚴密性分析。"
      }
    ]
  },
  {
    "id": "kp-man-u3-2",
    "pointIndex": 1,
    "unitId": "man-u3",
    "unitIndex": 2,
    "subjectId": "mandarin",
    "semester": "6A",
    "title": "說明文常見說明方法",
    "category": "國語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "說明文常見說明方法：列數字（具體量化）、打比方（生動比喻）、作比較（凸顯差異）、舉例子（佐證真實性）。",
    "formulaOrRule": "核心工具與心法：事實論據（歷史典故/科學數據）與道理論據（名性格言）是否緊扣主題",
    "strategyTip": "【審題觸發】當題目出現「論據有效性檢視」時，立即啟動「事實論據（歷史典故/科學數據）與道理論據（名性格言）是否緊扣主題」解題。考前速記：說明文客觀講原理，議論文主觀講道理；論點是骨架，論據是血肉，論證是血脈！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】班級自治活動方案提案企劃、辯論比賽正反攻防、理性說服父母爭取自主權。",
    "textbookFocus": "康軒：常考生活科普說明文之說明方法（舉例說明、數據說明、比較說明、分類說明）判讀。 ｜ 南一：側重正反對比論證法、因果論證法，以及名言論據與生活實例論據之搭配。 ｜ 翰林：側重議論文三要素（論點-核心主張、論據-事實與理論、論證-推理過程）之結構拆解。",
    "juniorHighBridge": "國中會考議論文【思辨與推論】：辨識邏輯謬誤（以偏概全、偷換概念）、論證結構嚴密性分析。",
    "infographicKey": "info-man-u3-2",
    "relatedPoints": [
      {
        "id": "kp-man-u3-1",
        "title": "議論文三要素金字塔",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u3-3",
        "title": "批判性思維判讀",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u4-1",
        "title": "高年級四大核心修辭",
        "unitId": "man-u4",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "bridge-man-u3",
        "isBridge": true,
        "title": "思辨與推論",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考議論文【思辨與推論】：辨識邏輯謬誤（以偏概全、偷換概念）、論證結構嚴密性分析。"
      }
    ]
  },
  {
    "id": "kp-man-u3-3",
    "pointIndex": 2,
    "unitId": "man-u3",
    "unitIndex": 2,
    "subjectId": "mandarin",
    "semester": "6A",
    "title": "批判性思維判讀",
    "category": "國語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "批判性思維判讀：嚴格區分「事實 (Fact)」與「觀點 (Opinion)」，檢驗作者論據是否充足、邏輯是否嚴密。",
    "formulaOrRule": "核心工具與心法：下定義、舉例子、列數字、作比較、打比方",
    "strategyTip": "【審題觸發】當題目出現「說明文常見說明方法」時，立即啟動「下定義、舉例子、列數字、作比較、打比方」解題。考前速記：說明文客觀講原理，議論文主觀講道理；論點是骨架，論據是血肉，論證是血脈！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】班級自治活動方案提案企劃、辯論比賽正反攻防、理性說服父母爭取自主權。",
    "textbookFocus": "康軒：常考生活科普說明文之說明方法（舉例說明、數據說明、比較說明、分類說明）判讀。 ｜ 南一：側重正反對比論證法、因果論證法，以及名言論據與生活實例論據之搭配。 ｜ 翰林：側重議論文三要素（論點-核心主張、論據-事實與理論、論證-推理過程）之結構拆解。",
    "juniorHighBridge": "國中會考議論文【思辨與推論】：辨識邏輯謬誤（以偏概全、偷換概念）、論證結構嚴密性分析。",
    "infographicKey": "info-man-u3-3",
    "relatedPoints": [
      {
        "id": "kp-man-u3-1",
        "title": "議論文三要素金字塔",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u3-2",
        "title": "說明文常見說明方法",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u4-1",
        "title": "高年級四大核心修辭",
        "unitId": "man-u4",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "bridge-man-u3",
        "isBridge": true,
        "title": "思辨與推論",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考議論文【思辨與推論】：辨識邏輯謬誤（以偏概全、偷換概念）、論證結構嚴密性分析。"
      }
    ]
  },
  {
    "id": "kp-man-u4-1",
    "pointIndex": 0,
    "unitId": "man-u4",
    "unitIndex": 3,
    "subjectId": "mandarin",
    "semester": "6A",
    "title": "高年級四大核心修辭",
    "category": "國語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "高年級四大核心修辭：譬喻（明喻喻詞如/像；隱喻喻詞是/為）、轉化（擬人物化為人、擬物人化為物）、排比（三句以上結構相同）、映襯（正反兩相對照）。",
    "formulaOrRule": "核心工具與心法：誇飾修辭（言過其實以加深讀者印象）",
    "strategyTip": "【審題觸發】當題目出現「白髮三千丈、淚水流成一條河」時，立即啟動「誇飾修辭（言過其實以加深讀者印象）」解題。考前速記：如像若似為明喻，擬人賦物人性格；排比三句氣勢足，提問自答激反問！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】廣告金句文案撰寫、演講稿增添感染力、精準優雅表達個人感受。",
    "textbookFocus": "康軒：常考譬喻（明喻、隱喻/暗喻、略喻）、轉化（擬人、擬物、形象化）之經典修辭辨析。 ｜ 南一：側重誇飾、互文、層遞、雙關語之辨別，以及容易誤用之高頻成語填空。 ｜ 翰林：側重排比（三句以上結構相同）、映襯（對比對照）、設問（提問有問自答/激問答案在反面/懸問心中無解）。",
    "juniorHighBridge": "國中會考修辭與成語【語文常識二】：借代、互文、雙關（諧音雙關/詞義雙關）、成語褒貶義辨析。",
    "infographicKey": "info-man-u4-1",
    "relatedPoints": [
      {
        "id": "kp-man-u4-2",
        "title": "成語感情色彩與語境防雷",
        "unitId": "man-u4",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u4-3",
        "title": "病句診斷三陷阱",
        "unitId": "man-u4",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u5-1",
        "title": "近體詩絕句與律詩格律準則",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "kp-art-u2-1",
        "title": "音樂三要素黃金三角",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "跨域語文音樂",
        "badgeType": "cross",
        "desc": "修辭押韻對仗 ➔ 音樂旋律對稱與節奏律動"
      },
      {
        "id": "bridge-man-u4",
        "isBridge": true,
        "title": "語文常識二",
        "unitId": "man-u4",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考修辭與成語【語文常識二】：借代、互文、雙關（諧音雙關/詞義雙關）、成語褒貶義辨析。"
      }
    ]
  },
  {
    "id": "kp-man-u4-2",
    "pointIndex": 1,
    "unitId": "man-u4",
    "unitIndex": 3,
    "subjectId": "mandarin",
    "semester": "6A",
    "title": "成語感情色彩與語境防雷",
    "category": "國語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "成語感情色彩與語境防雷：褒義詞（流芳百世、兢兢業業） vs 貶義詞（遺臭萬年、巧言令色），切勿褒貶混用。",
    "formulaOrRule": "核心工具與心法：擬人修辭（轉化法將物比作人）",
    "strategyTip": "【審題觸發】當題目出現「風兒在耳邊輕聲唱歌、夕陽紅著臉躲進山頭」時，立即啟動「擬人修辭（轉化法將物比作人）」解題。考前速記：如像若似為明喻，擬人賦物人性格；排比三句氣勢足，提問自答激反問！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】廣告金句文案撰寫、演講稿增添感染力、精準優雅表達個人感受。",
    "textbookFocus": "康軒：常考譬喻（明喻、隱喻/暗喻、略喻）、轉化（擬人、擬物、形象化）之經典修辭辨析。 ｜ 南一：側重誇飾、互文、層遞、雙關語之辨別，以及容易誤用之高頻成語填空。 ｜ 翰林：側重排比（三句以上結構相同）、映襯（對比對照）、設問（提問有問自答/激問答案在反面/懸問心中無解）。",
    "juniorHighBridge": "國中會考修辭與成語【語文常識二】：借代、互文、雙關（諧音雙關/詞義雙關）、成語褒貶義辨析。",
    "infographicKey": "info-man-u4-2",
    "relatedPoints": [
      {
        "id": "kp-man-u4-1",
        "title": "高年級四大核心修辭",
        "unitId": "man-u4",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u4-3",
        "title": "病句診斷三陷阱",
        "unitId": "man-u4",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u5-1",
        "title": "近體詩絕句與律詩格律準則",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "kp-art-u2-1",
        "title": "音樂三要素黃金三角",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "跨域語文音樂",
        "badgeType": "cross",
        "desc": "修辭押韻對仗 ➔ 音樂旋律對稱與節奏律動"
      },
      {
        "id": "bridge-man-u4",
        "isBridge": true,
        "title": "語文常識二",
        "unitId": "man-u4",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考修辭與成語【語文常識二】：借代、互文、雙關（諧音雙關/詞義雙關）、成語褒貶義辨析。"
      }
    ]
  },
  {
    "id": "kp-man-u4-3",
    "pointIndex": 2,
    "unitId": "man-u4",
    "unitIndex": 3,
    "subjectId": "mandarin",
    "semester": "6A",
    "title": "病句診斷三陷阱",
    "category": "國語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "病句診斷三陷阱：成分殘缺（缺主詞）、語序不當、雙重否定誤用導致否定意向翻轉。",
    "formulaOrRule": "核心工具與心法：映襯修辭（相反特質並列對照）",
    "strategyTip": "【審題觸發】當題目出現「創業維艱，守成不易；哀矜勿喜」時，立即啟動「映襯修辭（相反特質並列對照）」解題。考前速記：如像若似為明喻，擬人賦物人性格；排比三句氣勢足，提問自答激反問！",
    "trapAlert": "【避雷防錯】防雷必背：成分殘缺（缺主詞）、語序不當、雙重否定誤用導致否定意向翻轉。",
    "practicalUtility": "【生活實用】廣告金句文案撰寫、演講稿增添感染力、精準優雅表達個人感受。",
    "textbookFocus": "康軒：常考譬喻（明喻、隱喻/暗喻、略喻）、轉化（擬人、擬物、形象化）之經典修辭辨析。 ｜ 南一：側重誇飾、互文、層遞、雙關語之辨別，以及容易誤用之高頻成語填空。 ｜ 翰林：側重排比（三句以上結構相同）、映襯（對比對照）、設問（提問有問自答/激問答案在反面/懸問心中無解）。",
    "juniorHighBridge": "國中會考修辭與成語【語文常識二】：借代、互文、雙關（諧音雙關/詞義雙關）、成語褒貶義辨析。",
    "infographicKey": "info-man-u4-3",
    "relatedPoints": [
      {
        "id": "kp-man-u4-1",
        "title": "高年級四大核心修辭",
        "unitId": "man-u4",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u4-2",
        "title": "成語感情色彩與語境防雷",
        "unitId": "man-u4",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u5-1",
        "title": "近體詩絕句與律詩格律準則",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "kp-art-u2-1",
        "title": "音樂三要素黃金三角",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "跨域語文音樂",
        "badgeType": "cross",
        "desc": "修辭押韻對仗 ➔ 音樂旋律對稱與節奏律動"
      },
      {
        "id": "bridge-man-u4",
        "isBridge": true,
        "title": "語文常識二",
        "unitId": "man-u4",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考修辭與成語【語文常識二】：借代、互文、雙關（諧音雙關/詞義雙關）、成語褒貶義辨析。"
      }
    ]
  },
  {
    "id": "kp-man-u5-1",
    "pointIndex": 0,
    "unitId": "man-u5",
    "unitIndex": 4,
    "subjectId": "mandarin",
    "semester": "6B",
    "title": "近體詩絕句與律詩格律準則",
    "category": "國語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "近體詩絕句與律詩格律準則：絕句 4 句、律詩 8 句；偶數句（二四/二四六八）必押韻且一韻到底；律詩三四句（頷聯）與五六句（頸聯）必須對仗。",
    "formulaOrRule": "核心工具與心法：首句可押可不押，二四（六八）句必押韻且一韻到底不可換韻",
    "strategyTip": "【審題觸發】當題目出現「五言律詩或七言絕句格律特徵」時，立即啟動「首句可押可不押，二四（六八）句必押韻且一韻到底不可換韻」解題。考前速記：偶數句必定要押韻，第三句絕對不押韻；寓言故事諷世事，小故事含大哲理！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】春聯對聯創作張貼判斷、古詩詞意境涵養美感心靈、寓言哲理指導待人處世。",
    "textbookFocus": "康軒：常考古典唐詩宋詞絕句律詩格式（五絕、七絕、五律、七律）、字數、押韻規則（一二四句押韻）。 ｜ 南一：側重古今字義對比（如「去」在古文中多為離開）與升中銜接文言虛詞（之、乎、者、也）。 ｜ 翰林：側重先秦兩漢寓言故事（自相矛盾、刻舟求劍、鄭人買履、守株待兔）寓意啟示辨析。",
    "juniorHighBridge": "國一至國三國文【文言詩詞曲散文選讀】：近體詩格律（絕句/律詩）、宋詞填詞詞牌、元曲曲牌與襯字。",
    "infographicKey": "info-man-u5-1",
    "relatedPoints": [
      {
        "id": "kp-man-u5-2",
        "title": "文言經典四大常用虛詞",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u5-3",
        "title": "寓言文學借物喻人深意",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u6-1",
        "title": "演講簡報開場破題三法",
        "unitId": "man-u6",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "bridge-man-u5",
        "isBridge": true,
        "title": "文言詩詞曲散文選讀",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一至國三國文【文言詩詞曲散文選讀】：近體詩格律（絕句/律詩）、宋詞填詞詞牌、元曲曲牌與襯字。"
      }
    ]
  },
  {
    "id": "kp-man-u5-2",
    "pointIndex": 1,
    "unitId": "man-u5",
    "unitIndex": 4,
    "subjectId": "mandarin",
    "semester": "6B",
    "title": "文言經典四大常用虛詞",
    "category": "國語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "文言經典四大常用虛詞：「之」（往動詞/代詞他/結構助詞的）、「其」（他的/那）、「以」（用/因為）、「於」（在/向/比）。",
    "formulaOrRule": "核心工具與心法：第三四句（頷聯）與第五六句（頸聯）詞性相對、字數相同",
    "strategyTip": "【審題觸發】當題目出現「律詩對仗聯判定」時，立即啟動「第三四句（頷聯）與第五六句（頸聯）詞性相對、字數相同」解題。考前速記：偶數句必定要押韻，第三句絕對不押韻；寓言故事諷世事，小故事含大哲理！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】春聯對聯創作張貼判斷、古詩詞意境涵養美感心靈、寓言哲理指導待人處世。",
    "textbookFocus": "康軒：常考古典唐詩宋詞絕句律詩格式（五絕、七絕、五律、七律）、字數、押韻規則（一二四句押韻）。 ｜ 南一：側重古今字義對比（如「去」在古文中多為離開）與升中銜接文言虛詞（之、乎、者、也）。 ｜ 翰林：側重先秦兩漢寓言故事（自相矛盾、刻舟求劍、鄭人買履、守株待兔）寓意啟示辨析。",
    "juniorHighBridge": "國一至國三國文【文言詩詞曲散文選讀】：近體詩格律（絕句/律詩）、宋詞填詞詞牌、元曲曲牌與襯字。",
    "infographicKey": "info-man-u5-2",
    "relatedPoints": [
      {
        "id": "kp-man-u5-1",
        "title": "近體詩絕句與律詩格律準則",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u5-3",
        "title": "寓言文學借物喻人深意",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u6-1",
        "title": "演講簡報開場破題三法",
        "unitId": "man-u6",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "bridge-man-u5",
        "isBridge": true,
        "title": "文言詩詞曲散文選讀",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一至國三國文【文言詩詞曲散文選讀】：近體詩格律（絕句/律詩）、宋詞填詞詞牌、元曲曲牌與襯字。"
      }
    ]
  },
  {
    "id": "kp-man-u5-3",
    "pointIndex": 2,
    "unitId": "man-u5",
    "unitIndex": 4,
    "subjectId": "mandarin",
    "semester": "6B",
    "title": "寓言文學借物喻人深意",
    "category": "國語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "寓言文學借物喻人深意：透過動物、神話簡短情節，寄託為人處世智慧與社會思辨（如《塞翁失馬》、《鷸蚌相爭》）。",
    "formulaOrRule": "核心工具與心法：寓言核心寓意提取（禍福相倚、欲速則不達、不知隨變）",
    "strategyTip": "【審題觸發】當題目出現「塞翁失馬、揠苗助長、刻舟求劍」時，立即啟動「寓言核心寓意提取（禍福相倚、欲速則不達、不知隨變）」解題。考前速記：偶數句必定要押韻，第三句絕對不押韻；寓言故事諷世事，小故事含大哲理！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】春聯對聯創作張貼判斷、古詩詞意境涵養美感心靈、寓言哲理指導待人處世。",
    "textbookFocus": "康軒：常考古典唐詩宋詞絕句律詩格式（五絕、七絕、五律、七律）、字數、押韻規則（一二四句押韻）。 ｜ 南一：側重古今字義對比（如「去」在古文中多為離開）與升中銜接文言虛詞（之、乎、者、也）。 ｜ 翰林：側重先秦兩漢寓言故事（自相矛盾、刻舟求劍、鄭人買履、守株待兔）寓意啟示辨析。",
    "juniorHighBridge": "國一至國三國文【文言詩詞曲散文選讀】：近體詩格律（絕句/律詩）、宋詞填詞詞牌、元曲曲牌與襯字。",
    "infographicKey": "info-man-u5-3",
    "relatedPoints": [
      {
        "id": "kp-man-u5-1",
        "title": "近體詩絕句與律詩格律準則",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u5-2",
        "title": "文言經典四大常用虛詞",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u6-1",
        "title": "演講簡報開場破題三法",
        "unitId": "man-u6",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "bridge-man-u5",
        "isBridge": true,
        "title": "文言詩詞曲散文選讀",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一至國三國文【文言詩詞曲散文選讀】：近體詩格律（絕句/律詩）、宋詞填詞詞牌、元曲曲牌與襯字。"
      }
    ]
  },
  {
    "id": "kp-man-u6-1",
    "pointIndex": 0,
    "unitId": "man-u6",
    "unitIndex": 5,
    "subjectId": "mandarin",
    "semester": "6B",
    "title": "演講簡報開場破題三法",
    "category": "國語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "演講簡報開場破題三法：提問互動法（引發好奇）、震撼故事法（觸發情感）、驚人數據法（建立公信力）。",
    "formulaOrRule": "核心工具與心法：提問互動、講述震撼小故事、提出驚人統計數據",
    "strategyTip": "【審題觸發】當題目出現「演講開場如何迅速抓住聽眾注意力」時，立即啟動「提問互動、講述震撼小故事、提出驚人統計數據」解題。考前速記：站姿端正視線掃，開場提問抓眼球；內容清晰三要點，結尾有力留餘溫！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】競選模範生政見發表、畢業專案成果向全校師生發表、跨部門團隊會議主持。",
    "textbookFocus": "康軒：常考口語表達溝通原則、聆聽傾聽技巧、克服上台怯場五大秘訣。 ｜ 南一：側重辯論賽正反方立場邏輯拆解、反駁對方論點漏洞之攻防技巧。 ｜ 翰林：側重簡報架構設計（黃金三分鐘破題、結論呼籲行動）與視線肢體非語言訊息。",
    "juniorHighBridge": "國中口語表達與專題探究【自主學習成果發表】：跨領域專題簡報製作、論證表達與即席答辯能力。",
    "infographicKey": "info-man-u6-1",
    "relatedPoints": [
      {
        "id": "kp-man-u6-2",
        "title": "簡報視覺呈現黃金原則",
        "unitId": "man-u6",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u6-3",
        "title": "標點符號語音停頓符碼",
        "unitId": "man-u6",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u7-1",
        "title": "書信提稱語稱謂禮貌",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "bridge-man-u6",
        "isBridge": true,
        "title": "自主學習成果發表",
        "unitId": "man-u6",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中口語表達與專題探究【自主學習成果發表】：跨領域專題簡報製作、論證表達與即席答辯能力。"
      }
    ]
  },
  {
    "id": "kp-man-u6-2",
    "pointIndex": 1,
    "unitId": "man-u6",
    "unitIndex": 5,
    "subjectId": "mandarin",
    "semester": "6B",
    "title": "簡報視覺呈現黃金原則",
    "category": "國語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "簡報視覺呈現黃金原則：一頁一焦點、杜絕文字泥沼、以高清圖表與關鍵字取代滿版逐字稿。",
    "formulaOrRule": "核心工具與心法：字字照念PPT、密密麻麻長篇大論、配色刺眼不協調",
    "strategyTip": "【審題觸發】當題目出現「簡報投影片設計大忌」時，立即啟動「字字照念PPT、密密麻麻長篇大論、配色刺眼不協調」解題。考前速記：站姿端正視線掃，開場提問抓眼球；內容清晰三要點，結尾有力留餘溫！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】競選模範生政見發表、畢業專案成果向全校師生發表、跨部門團隊會議主持。",
    "textbookFocus": "康軒：常考口語表達溝通原則、聆聽傾聽技巧、克服上台怯場五大秘訣。 ｜ 南一：側重辯論賽正反方立場邏輯拆解、反駁對方論點漏洞之攻防技巧。 ｜ 翰林：側重簡報架構設計（黃金三分鐘破題、結論呼籲行動）與視線肢體非語言訊息。",
    "juniorHighBridge": "國中口語表達與專題探究【自主學習成果發表】：跨領域專題簡報製作、論證表達與即席答辯能力。",
    "infographicKey": "info-man-u6-2",
    "relatedPoints": [
      {
        "id": "kp-man-u6-1",
        "title": "演講簡報開場破題三法",
        "unitId": "man-u6",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u6-3",
        "title": "標點符號語音停頓符碼",
        "unitId": "man-u6",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u7-1",
        "title": "書信提稱語稱謂禮貌",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "bridge-man-u6",
        "isBridge": true,
        "title": "自主學習成果發表",
        "unitId": "man-u6",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中口語表達與專題探究【自主學習成果發表】：跨領域專題簡報製作、論證表達與即席答辯能力。"
      }
    ]
  },
  {
    "id": "kp-man-u6-3",
    "pointIndex": 2,
    "unitId": "man-u6",
    "unitIndex": 5,
    "subjectId": "mandarin",
    "semester": "6B",
    "title": "標點符號語音停頓符碼",
    "category": "國語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "標點符號語音停頓符碼：破折號（—— 語意轉折、補充說明、聲音延長）；刪節號（…… 語意未盡、話語斷續）。",
    "formulaOrRule": "核心工具與心法：先傾聽複述確認問題 ➔ 感謝提問 ➔ 條理分明正面回答",
    "strategyTip": "【審題觸發】當題目出現「面臨提問質疑應對」時，立即啟動「先傾聽複述確認問題 ➔ 感謝提問 ➔ 條理分明正面回答」解題。考前速記：站姿端正視線掃，開場提問抓眼球；內容清晰三要點，結尾有力留餘溫！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】競選模範生政見發表、畢業專案成果向全校師生發表、跨部門團隊會議主持。",
    "textbookFocus": "康軒：常考口語表達溝通原則、聆聽傾聽技巧、克服上台怯場五大秘訣。 ｜ 南一：側重辯論賽正反方立場邏輯拆解、反駁對方論點漏洞之攻防技巧。 ｜ 翰林：側重簡報架構設計（黃金三分鐘破題、結論呼籲行動）與視線肢體非語言訊息。",
    "juniorHighBridge": "國中口語表達與專題探究【自主學習成果發表】：跨領域專題簡報製作、論證表達與即席答辯能力。",
    "infographicKey": "info-man-u6-3",
    "relatedPoints": [
      {
        "id": "kp-man-u6-1",
        "title": "演講簡報開場破題三法",
        "unitId": "man-u6",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u6-2",
        "title": "簡報視覺呈現黃金原則",
        "unitId": "man-u6",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u7-1",
        "title": "書信提稱語稱謂禮貌",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "bridge-man-u6",
        "isBridge": true,
        "title": "自主學習成果發表",
        "unitId": "man-u6",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中口語表達與專題探究【自主學習成果發表】：跨領域專題簡報製作、論證表達與即席答辯能力。"
      }
    ]
  },
  {
    "id": "kp-man-u7-1",
    "pointIndex": 0,
    "unitId": "man-u7",
    "unitIndex": 6,
    "subjectId": "mandarin",
    "semester": "6B",
    "title": "書信提稱語稱謂禮貌",
    "category": "國語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "書信提稱語稱謂禮貌：對祖父母與父母用「膝下、尊前」；對師長用「函丈、尊前」；對平輩朋友用「足下、大鑒」。",
    "formulaOrRule": "核心工具與心法：祖父母父母用「安啟」、長輩用「賜啟/道啟」、平輩用「大啟/台啟」、切忌用「敬啟」（敬啟是請對方恭敬打開）",
    "strategyTip": "【審題觸發】當題目出現「信封中欄啟封詞（大考魔王陷阱題！）」時，立即啟動「祖父母父母用「安啟」、長輩用「賜啟/道啟」、平輩用「大啟/台啟」、切忌用「敬啟」（敬啟是請對方恭敬打開）」解題。考前速記：家大舍小令他人（家父、舍弟、令尊）；恭啟敬啟寫於信封上大錯，收件啟封詞依輩分！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】電子郵件商務書信正確署名、婚禮喜帖喪禮禮金袋題辭正確題寫、請託師長用語尊崇體面。",
    "textbookFocus": "康軒：常考書信便條、感謝函、邀請卡之信封格式（收件人稱謂、啟封詞）常犯禁忌。 ｜ 南一：側重自稱與稱人之敬詞與謙詞（家大舍小令他人、愚自稱賢敬尊長）之大考高頻陷阱。 ｜ 翰林：側重啟事、會議紀錄、借據借條、公告之標準要素與語氣得體性。",
    "juniorHighBridge": "國中會考國文【語文常識一・應用文精準解析】：書信、柬帖、題辭、對聯必考題型全攻略。",
    "infographicKey": "info-man-u7-1",
    "relatedPoints": [
      {
        "id": "kp-man-u7-2",
        "title": "信封中欄啟封詞大考魔王陷阱",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u7-3",
        "title": "信末祝候語對象搭配",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u8-1",
        "title": "六書造字心智模型前四者造字法",
        "unitId": "man-u8",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "bridge-man-u7",
        "isBridge": true,
        "title": "語文常識一・應用文精準解析",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考國文【語文常識一・應用文精準解析】：書信、柬帖、題辭、對聯必考題型全攻略。"
      }
    ]
  },
  {
    "id": "kp-man-u7-2",
    "pointIndex": 1,
    "unitId": "man-u7",
    "unitIndex": 6,
    "subjectId": "mandarin",
    "semester": "6B",
    "title": "信封中欄啟封詞大考魔王陷阱",
    "category": "國語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "信封中欄啟封詞大考魔王陷阱：寫給長輩用「安啟、福啟」；寫給平輩用「台啟、大啟」；切勿在信封寫「敬啟」（敬啟意思是請對方恭敬打開，極為失禮）！",
    "formulaOrRule": "核心工具與心法：稱對方為「令尊」，稱自己為「家父」",
    "strategyTip": "【審題觸發】當題目出現「稱呼對方父親與自己父親」時，立即啟動「稱對方為「令尊」，稱自己為「家父」」解題。考前速記：家大舍小令他人（家父、舍弟、令尊）；恭啟敬啟寫於信封上大錯，收件啟封詞依輩分！",
    "trapAlert": "【避雷防錯】防雷必背：寫給長輩用「安啟、福啟」；寫給平輩用「台啟、大啟」；切勿在信封寫「敬啟」（敬啟意思是請對方恭敬打開，極為失禮）！",
    "practicalUtility": "【生活實用】電子郵件商務書信正確署名、婚禮喜帖喪禮禮金袋題辭正確題寫、請託師長用語尊崇體面。",
    "textbookFocus": "康軒：常考書信便條、感謝函、邀請卡之信封格式（收件人稱謂、啟封詞）常犯禁忌。 ｜ 南一：側重自稱與稱人之敬詞與謙詞（家大舍小令他人、愚自稱賢敬尊長）之大考高頻陷阱。 ｜ 翰林：側重啟事、會議紀錄、借據借條、公告之標準要素與語氣得體性。",
    "juniorHighBridge": "國中會考國文【語文常識一・應用文精準解析】：書信、柬帖、題辭、對聯必考題型全攻略。",
    "infographicKey": "info-man-u7-2",
    "relatedPoints": [
      {
        "id": "kp-man-u7-1",
        "title": "書信提稱語稱謂禮貌",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u7-3",
        "title": "信末祝候語對象搭配",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u8-1",
        "title": "六書造字心智模型前四者造字法",
        "unitId": "man-u8",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "bridge-man-u7",
        "isBridge": true,
        "title": "語文常識一・應用文精準解析",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考國文【語文常識一・應用文精準解析】：書信、柬帖、題辭、對聯必考題型全攻略。"
      }
    ]
  },
  {
    "id": "kp-man-u7-3",
    "pointIndex": 2,
    "unitId": "man-u7",
    "unitIndex": 6,
    "subjectId": "mandarin",
    "semester": "6B",
    "title": "信末祝候語對象搭配",
    "category": "國語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "信末祝候語對象搭配：對祖父母用「敬請 福安」；對師長用「敬請 誨安」；對平輩用「即請 大安」。",
    "formulaOrRule": "核心工具與心法：桃儀（祝壽禮金）、程儀（餞行禮金）、奠儀（喪禮撫恤）",
    "strategyTip": "【審題觸發】當題目出現「請帖柬帖關鍵用語」時，立即啟動「桃儀（祝壽禮金）、程儀（餞行禮金）、奠儀（喪禮撫恤）」解題。考前速記：家大舍小令他人（家父、舍弟、令尊）；恭啟敬啟寫於信封上大錯，收件啟封詞依輩分！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】電子郵件商務書信正確署名、婚禮喜帖喪禮禮金袋題辭正確題寫、請託師長用語尊崇體面。",
    "textbookFocus": "康軒：常考書信便條、感謝函、邀請卡之信封格式（收件人稱謂、啟封詞）常犯禁忌。 ｜ 南一：側重自稱與稱人之敬詞與謙詞（家大舍小令他人、愚自稱賢敬尊長）之大考高頻陷阱。 ｜ 翰林：側重啟事、會議紀錄、借據借條、公告之標準要素與語氣得體性。",
    "juniorHighBridge": "國中會考國文【語文常識一・應用文精準解析】：書信、柬帖、題辭、對聯必考題型全攻略。",
    "infographicKey": "info-man-u7-3",
    "relatedPoints": [
      {
        "id": "kp-man-u7-1",
        "title": "書信提稱語稱謂禮貌",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u7-2",
        "title": "信封中欄啟封詞大考魔王陷阱",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u8-1",
        "title": "六書造字心智模型前四者造字法",
        "unitId": "man-u8",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "bridge-man-u7",
        "isBridge": true,
        "title": "語文常識一・應用文精準解析",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考國文【語文常識一・應用文精準解析】：書信、柬帖、題辭、對聯必考題型全攻略。"
      }
    ]
  },
  {
    "id": "kp-man-u8-1",
    "pointIndex": 0,
    "unitId": "man-u8",
    "unitIndex": 7,
    "subjectId": "mandarin",
    "semester": "6B",
    "title": "六書造字心智模型前四者造字法",
    "category": "國語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "六書造字心智模型前四者造字法：象形（獨體繪實物，日/月/木）；指事（獨體加符號表示抽象，上/下/本/刃）；會意（合體會合字義，休/森/武）；形聲（合體一半表形一半表音，江/河/晴）。",
    "formulaOrRule": "核心工具與心法：象形造字（隨體詰詘，純粹繪畫物體輪廓）",
    "strategyTip": "【審題觸發】當題目出現「日、月、山、水、木、魚、鳥」時，立即啟動「象形造字（隨體詰詘，純粹繪畫物體輪廓）」解題。考前速記：獨體為文（象形指事），合體為字（會意形聲）；畫物為象形，標點為指事，形聲佔八成！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】破解難字罕見字形音義關係、毛筆書法名家碑帖鑑賞、文字創意商標設計。",
    "textbookFocus": "康軒：常考漢字六書造字原則（象形、指事、會意、形聲）分類判別。 ｜ 南一：側重國中先修國學常識：書法字體演進（甲骨、金文、篆書、隸書、草書、行書、楷書）。 ｜ 翰林：側重造字法與用字法差異（象形指事為獨體之文，會意形聲為合體之字；轉注假借為用字法）。",
    "juniorHighBridge": "國中會考國文【文字學與六書體系】：造字法（象形/指事/會意/形聲）與用字法（轉注/假借）嚴格分類。",
    "infographicKey": "info-man-u8-1",
    "relatedPoints": [
      {
        "id": "kp-man-u8-2",
        "title": "獨體為「文",
        "unitId": "man-u8",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u8-3",
        "title": "國中會考國文高頻字形字音",
        "unitId": "man-u8",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u7-1",
        "title": "書信提稱語稱謂禮貌",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：國語・觀念本質與定義"
      },
      {
        "id": "kp-soc-u2-1",
        "title": "臺灣多元族群光譜",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "跨域文化語言",
        "badgeType": "cross",
        "desc": "六書漢字形音義 ➔ 臺灣多元族群文化資產"
      },
      {
        "id": "bridge-man-u8",
        "isBridge": true,
        "title": "文字學與六書體系",
        "unitId": "man-u8",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考國文【文字學與六書體系】：造字法（象形/指事/會意/形聲）與用字法（轉注/假借）嚴格分類。"
      }
    ]
  },
  {
    "id": "kp-man-u8-2",
    "pointIndex": 1,
    "unitId": "man-u8",
    "unitIndex": 7,
    "subjectId": "mandarin",
    "semester": "6B",
    "title": "獨體為「文",
    "category": "國語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "獨體為「文」、合體為「字」：象形與指事為獨體文（不可拆分）；會意與形聲為合體字（形音組合）。",
    "formulaOrRule": "核心工具與心法：指事造字（在象形基礎上加上抽象點線符號或純抽象概念）",
    "strategyTip": "【審題觸發】當題目出現「上、下、本、末、刃、甘」時，立即啟動「指事造字（在象形基礎上加上抽象點線符號或純抽象概念）」解題。考前速記：獨體為文（象形指事），合體為字（會意形聲）；畫物為象形，標點為指事，形聲佔八成！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】破解難字罕見字形音義關係、毛筆書法名家碑帖鑑賞、文字創意商標設計。",
    "textbookFocus": "康軒：常考漢字六書造字原則（象形、指事、會意、形聲）分類判別。 ｜ 南一：側重國中先修國學常識：書法字體演進（甲骨、金文、篆書、隸書、草書、行書、楷書）。 ｜ 翰林：側重造字法與用字法差異（象形指事為獨體之文，會意形聲為合體之字；轉注假借為用字法）。",
    "juniorHighBridge": "國中會考國文【文字學與六書體系】：造字法（象形/指事/會意/形聲）與用字法（轉注/假借）嚴格分類。",
    "infographicKey": "info-man-u8-2",
    "relatedPoints": [
      {
        "id": "kp-man-u8-1",
        "title": "六書造字心智模型前四者造字法",
        "unitId": "man-u8",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u8-3",
        "title": "國中會考國文高頻字形字音",
        "unitId": "man-u8",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u7-1",
        "title": "書信提稱語稱謂禮貌",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：國語・觀念本質與定義"
      },
      {
        "id": "kp-soc-u2-1",
        "title": "臺灣多元族群光譜",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "跨域文化語言",
        "badgeType": "cross",
        "desc": "六書漢字形音義 ➔ 臺灣多元族群文化資產"
      },
      {
        "id": "bridge-man-u8",
        "isBridge": true,
        "title": "文字學與六書體系",
        "unitId": "man-u8",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考國文【文字學與六書體系】：造字法（象形/指事/會意/形聲）與用字法（轉注/假借）嚴格分類。"
      }
    ]
  },
  {
    "id": "kp-man-u8-3",
    "pointIndex": 2,
    "unitId": "man-u8",
    "unitIndex": 7,
    "subjectId": "mandarin",
    "semester": "6B",
    "title": "國中會考國文高頻字形字音",
    "category": "國語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "國中會考國文高頻字形字音：形近字字音辨正、六書造字比例（漢字 85% 以上皆為形聲字）。",
    "formulaOrRule": "核心工具與心法：會意造字（合體比意，兩個文字涵義融合創造新意）",
    "strategyTip": "【審題觸發】當題目出現「休、武、信、森、林、明、采」時，立即啟動「會意造字（合體比意，兩個文字涵義融合創造新意）」解題。考前速記：獨體為文（象形指事），合體為字（會意形聲）；畫物為象形，標點為指事，形聲佔八成！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】破解難字罕見字形音義關係、毛筆書法名家碑帖鑑賞、文字創意商標設計。",
    "textbookFocus": "康軒：常考漢字六書造字原則（象形、指事、會意、形聲）分類判別。 ｜ 南一：側重國中先修國學常識：書法字體演進（甲骨、金文、篆書、隸書、草書、行書、楷書）。 ｜ 翰林：側重造字法與用字法差異（象形指事為獨體之文，會意形聲為合體之字；轉注假借為用字法）。",
    "juniorHighBridge": "國中會考國文【文字學與六書體系】：造字法（象形/指事/會意/形聲）與用字法（轉注/假借）嚴格分類。",
    "infographicKey": "info-man-u8-3",
    "relatedPoints": [
      {
        "id": "kp-man-u8-1",
        "title": "六書造字心智模型前四者造字法",
        "unitId": "man-u8",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u8-2",
        "title": "獨體為「文",
        "unitId": "man-u8",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u7-1",
        "title": "書信提稱語稱謂禮貌",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：國語・觀念本質與定義"
      },
      {
        "id": "kp-soc-u2-1",
        "title": "臺灣多元族群光譜",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "跨域文化語言",
        "badgeType": "cross",
        "desc": "六書漢字形音義 ➔ 臺灣多元族群文化資產"
      },
      {
        "id": "bridge-man-u8",
        "isBridge": true,
        "title": "文字學與六書體系",
        "unitId": "man-u8",
        "subjectId": "mandarin",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考國文【文字學與六書體系】：造字法（象形/指事/會意/形聲）與用字法（轉注/假借）嚴格分類。"
      }
    ]
  },
  {
    "id": "kp-soc-u1-1",
    "pointIndex": 0,
    "unitId": "soc-u1",
    "unitIndex": 0,
    "subjectId": "social",
    "semester": "6A",
    "title": "中華民國五權分立制衡體系",
    "category": "社會・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "中華民國五權分立制衡體系：行政院（最高行政機關）、立法院（審查預算法律）、司法院（違憲審查解釋法律）、考試院（公務員考選）、監察院（糾舉彈劾）。",
    "formulaOrRule": "核心工具與心法：總統公佈法律任命行政院長；行政院長向立法院負責",
    "strategyTip": "【審題觸發】當題目出現「行政院院長（行政首長） vs 總統職權」時，立即啟動「總統公佈法律任命行政院長；行政院長向立法院負責」解題。考前速記：五院分立相制衡：立法院監督法律與預算，行政院依法行政執行；憲法保障人民四大政權！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】看懂新聞報導立法委員質詢內閣部會、參與學校學生會自治選舉、行使公民投票與集會遊行。",
    "textbookFocus": "康軒：常考中華民國五權憲法政府架構（總統、行政、立法、司法院職權與覆議/質詢權衡）。 ｜ 南一：側重公民權利與義務（選舉、罷免、創制、複決）與地方自治公職人員分工（縣市長、鄉鎮長、里長）。 ｜ 翰林：側重臺灣民主發展大事記（二二八事件、戒嚴體制、動員戡亂解除、國會全面改選、總統直選）。",
    "juniorHighBridge": "國二公民【政府的組織與職權】：中央政府五院互動關係（覆議、不信任案與解散立法院機制）。",
    "infographicKey": "info-soc-u1-1",
    "relatedPoints": [
      {
        "id": "kp-soc-u1-2",
        "title": "臺灣民主化關鍵三部曲",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u1-3",
        "title": "憲法最高性與權利義務",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u2-1",
        "title": "臺灣多元族群光譜",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u5-1",
        "title": "法律位階金字塔",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "公民憲政體系",
        "badgeType": "cross",
        "desc": "五權分立中央體系 ➔ 法律位階金字塔與兒少人權"
      },
      {
        "id": "bridge-soc-u1",
        "isBridge": true,
        "title": "政府的組織與職權",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二公民【政府的組織與職權】：中央政府五院互動關係（覆議、不信任案與解散立法院機制）。"
      }
    ]
  },
  {
    "id": "kp-soc-u1-2",
    "pointIndex": 1,
    "unitId": "soc-u1",
    "unitIndex": 0,
    "subjectId": "social",
    "semester": "6A",
    "title": "臺灣民主化關鍵三部曲",
    "category": "社會・運算算理與公式",
    "badgeColor": "amber",
    "definition": "臺灣民主化關鍵三部曲：1987 解除戒嚴開放黨禁報禁 ➔ 1996 首次總統公民直選 ➔ 2000 首次政黨和平輪替。",
    "formulaOrRule": "核心工具與心法：議決法律案、預算案、戒嚴案、行使人事同意權與質詢權",
    "strategyTip": "【審題觸發】當題目出現「立法院核心四大職權」時，立即啟動「議決法律案、預算案、戒嚴案、行使人事同意權與質詢權」解題。考前速記：五院分立相制衡：立法院監督法律與預算，行政院依法行政執行；憲法保障人民四大政權！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】看懂新聞報導立法委員質詢內閣部會、參與學校學生會自治選舉、行使公民投票與集會遊行。",
    "textbookFocus": "康軒：常考中華民國五權憲法政府架構（總統、行政、立法、司法院職權與覆議/質詢權衡）。 ｜ 南一：側重公民權利與義務（選舉、罷免、創制、複決）與地方自治公職人員分工（縣市長、鄉鎮長、里長）。 ｜ 翰林：側重臺灣民主發展大事記（二二八事件、戒嚴體制、動員戡亂解除、國會全面改選、總統直選）。",
    "juniorHighBridge": "國二公民【政府的組織與職權】：中央政府五院互動關係（覆議、不信任案與解散立法院機制）。",
    "infographicKey": "info-soc-u1-2",
    "relatedPoints": [
      {
        "id": "kp-soc-u1-1",
        "title": "中華民國五權分立制衡體系",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u1-3",
        "title": "憲法最高性與權利義務",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u2-1",
        "title": "臺灣多元族群光譜",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u5-1",
        "title": "法律位階金字塔",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "公民憲政體系",
        "badgeType": "cross",
        "desc": "五權分立中央體系 ➔ 法律位階金字塔與兒少人權"
      },
      {
        "id": "bridge-soc-u1",
        "isBridge": true,
        "title": "政府的組織與職權",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二公民【政府的組織與職權】：中央政府五院互動關係（覆議、不信任案與解散立法院機制）。"
      }
    ]
  },
  {
    "id": "kp-soc-u1-3",
    "pointIndex": 2,
    "unitId": "soc-u1",
    "unitIndex": 0,
    "subjectId": "social",
    "semester": "6A",
    "title": "憲法最高性與權利義務",
    "category": "社會・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "憲法最高性與權利義務：憲法保障人民平等權、自由權、受益權、參政權；行政院長由總統任命並向立法院負責。",
    "formulaOrRule": "核心工具與心法：司法院憲法法庭判決違憲審查；監察院糾舉公務員、彈劾官員",
    "strategyTip": "【審題觸發】當題目出現「違憲審查與彈劾糾舉分工」時，立即啟動「司法院憲法法庭判決違憲審查；監察院糾舉公務員、彈劾官員」解題。考前速記：五院分立相制衡：立法院監督法律與預算，行政院依法行政執行；憲法保障人民四大政權！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】看懂新聞報導立法委員質詢內閣部會、參與學校學生會自治選舉、行使公民投票與集會遊行。",
    "textbookFocus": "康軒：常考中華民國五權憲法政府架構（總統、行政、立法、司法院職權與覆議/質詢權衡）。 ｜ 南一：側重公民權利與義務（選舉、罷免、創制、複決）與地方自治公職人員分工（縣市長、鄉鎮長、里長）。 ｜ 翰林：側重臺灣民主發展大事記（二二八事件、戒嚴體制、動員戡亂解除、國會全面改選、總統直選）。",
    "juniorHighBridge": "國二公民【政府的組織與職權】：中央政府五院互動關係（覆議、不信任案與解散立法院機制）。",
    "infographicKey": "info-soc-u1-3",
    "relatedPoints": [
      {
        "id": "kp-soc-u1-1",
        "title": "中華民國五權分立制衡體系",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u1-2",
        "title": "臺灣民主化關鍵三部曲",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u2-1",
        "title": "臺灣多元族群光譜",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u5-1",
        "title": "法律位階金字塔",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "公民憲政體系",
        "badgeType": "cross",
        "desc": "五權分立中央體系 ➔ 法律位階金字塔與兒少人權"
      },
      {
        "id": "bridge-soc-u1",
        "isBridge": true,
        "title": "政府的組織與職權",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二公民【政府的組織與職權】：中央政府五院互動關係（覆議、不信任案與解散立法院機制）。"
      }
    ]
  },
  {
    "id": "kp-soc-u2-1",
    "pointIndex": 0,
    "unitId": "soc-u2",
    "unitIndex": 1,
    "subjectId": "social",
    "semester": "6A",
    "title": "臺灣多元族群光譜",
    "category": "社會・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "臺灣多元族群光譜：原住民族（法定16族南島語系）、閩南人、客家人、外省族群、新住民共同構成文化馬賽克。",
    "formulaOrRule": "核心工具與心法：南島語系族群、豐年祭祖靈祭、母系/父系社會制度、原民語言保存",
    "strategyTip": "【審題觸發】當題目出現「臺灣原住民族文化特色與傳承」時，立即啟動「南島語系族群、豐年祭祖靈祭、母系/父系社會制度、原民語言保存」解題。考前速記：原住民族16族文化璀璨，尊重差異杜絕歧視；高齡少子化打造友善包容新社會！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】品嚐東南亞特色異國料理學習文化背景、參加原住民部落豐年祭典尊重祭儀規範。",
    "textbookFocus": "康軒：常考臺灣原住民族（法定16族文化、祭典特徵如飛魚祭、矮靈祭、豐年祭）與族群平權。 ｜ 南一：側重多元文化主義、文化相對論（尊重各族群習俗，杜絕文化偏見與歧視）。 ｜ 翰林：側重臺灣移民社會歷史（閩南、客家義民祭、戰後新住民文化融和）與少子化高齡化社會變遷。",
    "juniorHighBridge": "國一公民【多元文化與族群關係】：文化的多樣性、主流文化與次文化、文化位階的批判與反思。",
    "infographicKey": "info-soc-u2-1",
    "relatedPoints": [
      {
        "id": "kp-soc-u2-2",
        "title": "文化相對論精神",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u2-3",
        "title": "文化資產保存與傳承",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u3-1",
        "title": "臺灣產業三階段升級",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "bridge-soc-u2",
        "isBridge": true,
        "title": "多元文化與族群關係",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一公民【多元文化與族群關係】：文化的多樣性、主流文化與次文化、文化位階的批判與反思。"
      }
    ]
  },
  {
    "id": "kp-soc-u2-2",
    "pointIndex": 1,
    "unitId": "soc-u2",
    "unitIndex": 1,
    "subjectId": "social",
    "semester": "6A",
    "title": "文化相對論精神",
    "category": "社會・運算算理與公式",
    "badgeColor": "amber",
    "definition": "文化相對論精神：各種族群文化皆具獨特價值與歷史脈絡，以包容尊重取代刻板印象與文化偏見。",
    "formulaOrRule": "核心工具與心法：文化相對主義（不以自身文化為中心評價他者優劣），消除族群刻板印象",
    "strategyTip": "【審題觸發】當題目出現「面對外來移民與不同習俗應有態度」時，立即啟動「文化相對主義（不以自身文化為中心評價他者優劣），消除族群刻板印象」解題。考前速記：原住民族16族文化璀璨，尊重差異杜絕歧視；高齡少子化打造友善包容新社會！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】品嚐東南亞特色異國料理學習文化背景、參加原住民部落豐年祭典尊重祭儀規範。",
    "textbookFocus": "康軒：常考臺灣原住民族（法定16族文化、祭典特徵如飛魚祭、矮靈祭、豐年祭）與族群平權。 ｜ 南一：側重多元文化主義、文化相對論（尊重各族群習俗，杜絕文化偏見與歧視）。 ｜ 翰林：側重臺灣移民社會歷史（閩南、客家義民祭、戰後新住民文化融和）與少子化高齡化社會變遷。",
    "juniorHighBridge": "國一公民【多元文化與族群關係】：文化的多樣性、主流文化與次文化、文化位階的批判與反思。",
    "infographicKey": "info-soc-u2-2",
    "relatedPoints": [
      {
        "id": "kp-soc-u2-1",
        "title": "臺灣多元族群光譜",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u2-3",
        "title": "文化資產保存與傳承",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u3-1",
        "title": "臺灣產業三階段升級",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "bridge-soc-u2",
        "isBridge": true,
        "title": "多元文化與族群關係",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一公民【多元文化與族群關係】：文化的多樣性、主流文化與次文化、文化位階的批判與反思。"
      }
    ]
  },
  {
    "id": "kp-soc-u2-3",
    "pointIndex": 2,
    "unitId": "soc-u2",
    "unitIndex": 1,
    "subjectId": "social",
    "semester": "6A",
    "title": "文化資產保存與傳承",
    "category": "社會・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "文化資產保存與傳承：有形文化資產（古蹟、歷史建築）與無形文化資產（原住民祭典、傳統工藝）之永續守護。",
    "formulaOrRule": "核心工具與心法：多元母語教學、客家電視台/原民電視台、族群平權法律保障",
    "strategyTip": "【審題觸發】當題目出現「多元文化社會推動政策」時，立即啟動「多元母語教學、客家電視台/原民電視台、族群平權法律保障」解題。考前速記：原住民族16族文化璀璨，尊重差異杜絕歧視；高齡少子化打造友善包容新社會！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】品嚐東南亞特色異國料理學習文化背景、參加原住民部落豐年祭典尊重祭儀規範。",
    "textbookFocus": "康軒：常考臺灣原住民族（法定16族文化、祭典特徵如飛魚祭、矮靈祭、豐年祭）與族群平權。 ｜ 南一：側重多元文化主義、文化相對論（尊重各族群習俗，杜絕文化偏見與歧視）。 ｜ 翰林：側重臺灣移民社會歷史（閩南、客家義民祭、戰後新住民文化融和）與少子化高齡化社會變遷。",
    "juniorHighBridge": "國一公民【多元文化與族群關係】：文化的多樣性、主流文化與次文化、文化位階的批判與反思。",
    "infographicKey": "info-soc-u2-3",
    "relatedPoints": [
      {
        "id": "kp-soc-u2-1",
        "title": "臺灣多元族群光譜",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u2-2",
        "title": "文化相對論精神",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u3-1",
        "title": "臺灣產業三階段升級",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "bridge-soc-u2",
        "isBridge": true,
        "title": "多元文化與族群關係",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一公民【多元文化與族群關係】：文化的多樣性、主流文化與次文化、文化位階的批判與反思。"
      }
    ]
  },
  {
    "id": "kp-soc-u3-1",
    "pointIndex": 0,
    "unitId": "soc-u3",
    "unitIndex": 2,
    "subjectId": "social",
    "semester": "6A",
    "title": "臺灣產業三階段升級",
    "category": "社會・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "臺灣產業三階段升級：1950年代以農業培養工業 ➔ 1960-70年代加工出口輕重工業 ➔ 1980年代後竹科半導體與高科技矽島。",
    "formulaOrRule": "核心工具與心法：所放棄的代價中最高價值者（不僅金錢，包含時間與未來利益）",
    "strategyTip": "【審題觸發】當題目出現「去打工賺1000元還是去上輔導課（求機會成本）」時，立即啟動「所放棄的代價中最高價值者（不僅金錢，包含時間與未來利益）」解題。考前速記：機會成本是放棄之最高代價；各展所長算比較利益；供不應求價格漲，供過於求價格跌！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】衡量是否買昂貴潮牌球鞋之機會成本、理解颱風後菜價飆漲之供需失衡原因。",
    "textbookFocus": "康軒：常考臺灣戰後經濟發展四階段（農業培養工業、出口導向加工出口區、重化工業、高科技竹科）。 ｜ 南一：側重市場供求均衡價格變化、公平交易委員會職責，以及家庭理性消費與儲蓄理財。 ｜ 翰林：側重機會成本（選擇中代價最高者）與比較利益（生產成本相對較低者專業化生產）。",
    "juniorHighBridge": "國二公民【市場經濟與貿易】：需求法則與供給法則、國際貿易比較利益法則、GDP與經濟指標。",
    "infographicKey": "info-soc-u3-1",
    "relatedPoints": [
      {
        "id": "kp-soc-u3-2",
        "title": "市場供需法則與均衡價格",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u3-3",
        "title": "機會成本與理性理財",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u4-1",
        "title": "全球化網絡雙刃效應",
        "unitId": "soc-u4",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "kp-comp-u1-3",
        "title": "需要",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "跨域理財素養",
        "badgeType": "cross",
        "desc": "機會成本與產業轉型 ➔ 631 儲蓄理財分配法則"
      },
      {
        "id": "bridge-soc-u3",
        "isBridge": true,
        "title": "市場經濟與貿易",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二公民【市場經濟與貿易】：需求法則與供給法則、國際貿易比較利益法則、GDP與經濟指標。"
      }
    ]
  },
  {
    "id": "kp-soc-u3-2",
    "pointIndex": 1,
    "unitId": "soc-u3",
    "unitIndex": 2,
    "subjectId": "social",
    "semester": "6A",
    "title": "市場供需法則與均衡價格",
    "category": "社會・運算算理與公式",
    "badgeColor": "amber",
    "definition": "市場供需法則與均衡價格：價格上漲需求減少供給增加；價格下跌需求增加供給減少；交會點為市場均衡價格。",
    "formulaOrRule": "核心工具與心法：供過於求價格下跌，供不應求價格上漲，直到達成市場均衡價格",
    "strategyTip": "【審題觸發】當題目出現「市場供過於求 vs 供不應求」時，立即啟動「供過於求價格下跌，供不應求價格上漲，直到達成市場均衡價格」解題。考前速記：機會成本是放棄之最高代價；各展所長算比較利益；供不應求價格漲，供過於求價格跌！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】衡量是否買昂貴潮牌球鞋之機會成本、理解颱風後菜價飆漲之供需失衡原因。",
    "textbookFocus": "康軒：常考臺灣戰後經濟發展四階段（農業培養工業、出口導向加工出口區、重化工業、高科技竹科）。 ｜ 南一：側重市場供求均衡價格變化、公平交易委員會職責，以及家庭理性消費與儲蓄理財。 ｜ 翰林：側重機會成本（選擇中代價最高者）與比較利益（生產成本相對較低者專業化生產）。",
    "juniorHighBridge": "國二公民【市場經濟與貿易】：需求法則與供給法則、國際貿易比較利益法則、GDP與經濟指標。",
    "infographicKey": "info-soc-u3-2",
    "relatedPoints": [
      {
        "id": "kp-soc-u3-1",
        "title": "臺灣產業三階段升級",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u3-3",
        "title": "機會成本與理性理財",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u4-1",
        "title": "全球化網絡雙刃效應",
        "unitId": "soc-u4",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "kp-comp-u1-3",
        "title": "需要",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "跨域理財素養",
        "badgeType": "cross",
        "desc": "機會成本與產業轉型 ➔ 631 儲蓄理財分配法則"
      },
      {
        "id": "bridge-soc-u3",
        "isBridge": true,
        "title": "市場經濟與貿易",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二公民【市場經濟與貿易】：需求法則與供給法則、國際貿易比較利益法則、GDP與經濟指標。"
      }
    ]
  },
  {
    "id": "kp-soc-u3-3",
    "pointIndex": 2,
    "unitId": "soc-u3",
    "unitIndex": 2,
    "subjectId": "social",
    "semester": "6A",
    "title": "機會成本與理性理財",
    "category": "社會・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "機會成本與理性理財：做出一項選擇時所放棄的代價中價值最高者；聰明理財落實「收入 - 儲蓄 = 支出」先存後花原則。",
    "formulaOrRule": "核心工具與心法：農業培養工業 ➔ 進口替代 ➔ 加工出口區 ➔ 新竹科學園區半導體高科技矽島",
    "strategyTip": "【審題觸發】當題目出現「臺灣一甲子經濟奇蹟轉型歷程」時，立即啟動「農業培養工業 ➔ 進口替代 ➔ 加工出口區 ➔ 新竹科學園區半導體高科技矽島」解題。考前速記：機會成本是放棄之最高代價；各展所長算比較利益；供不應求價格漲，供過於求價格跌！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】衡量是否買昂貴潮牌球鞋之機會成本、理解颱風後菜價飆漲之供需失衡原因。",
    "textbookFocus": "康軒：常考臺灣戰後經濟發展四階段（農業培養工業、出口導向加工出口區、重化工業、高科技竹科）。 ｜ 南一：側重市場供求均衡價格變化、公平交易委員會職責，以及家庭理性消費與儲蓄理財。 ｜ 翰林：側重機會成本（選擇中代價最高者）與比較利益（生產成本相對較低者專業化生產）。",
    "juniorHighBridge": "國二公民【市場經濟與貿易】：需求法則與供給法則、國際貿易比較利益法則、GDP與經濟指標。",
    "infographicKey": "info-soc-u3-3",
    "relatedPoints": [
      {
        "id": "kp-soc-u3-1",
        "title": "臺灣產業三階段升級",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u3-2",
        "title": "市場供需法則與均衡價格",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u4-1",
        "title": "全球化網絡雙刃效應",
        "unitId": "soc-u4",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "kp-comp-u1-3",
        "title": "需要",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "跨域理財素養",
        "badgeType": "cross",
        "desc": "機會成本與產業轉型 ➔ 631 儲蓄理財分配法則"
      },
      {
        "id": "bridge-soc-u3",
        "isBridge": true,
        "title": "市場經濟與貿易",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二公民【市場經濟與貿易】：需求法則與供給法則、國際貿易比較利益法則、GDP與經濟指標。"
      }
    ]
  },
  {
    "id": "kp-soc-u4-1",
    "pointIndex": 0,
    "unitId": "soc-u4",
    "unitIndex": 3,
    "subjectId": "social",
    "semester": "6A",
    "title": "全球化網絡雙刃效應",
    "category": "社會・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "全球化網絡雙刃效應：國際貿易分工與文化交流深化，但也帶來貧富差距擴大、流行傳染病跨國傳播與環境外部性挑戰。",
    "formulaOrRule": "核心工具與心法：政府間國際組織 (IGO，以主權國家為會員主體)",
    "strategyTip": "【審題觸發】當題目出現「聯合國 (UN)、世界衛生組織 (WHO)、世界貿易組織 (WTO)」時，立即啟動「政府間國際組織 (IGO，以主權國家為會員主體)」解題。考前速記：地球村各國緊密相連，互通有無分工合作；積極參與國際組織，展現臺灣關鍵軟實力！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】消費公平貿易咖啡豆支持跨國小農、為國際難民危機發起校園人道募捐行動。",
    "textbookFocus": "康軒：常考臺灣參與國際組織案例（WTO 世界貿易組織、APEC 亞太經合會、NGO 國際非政府組織）。 ｜ 南一：側重全球化衍生之全球貧富差距、傳染病跨國擴散與跨國環保公約之共同責任。 ｜ 翰林：側重全球化浪潮下之文化交流、全球分工供應鏈與跨國企業影響力。",
    "juniorHighBridge": "國三公民【全球化與全球關聯】：全球在地化、國際社會行為者、跨國犯罪防制與國際法規範。",
    "infographicKey": "info-soc-u4-1",
    "relatedPoints": [
      {
        "id": "kp-soc-u4-2",
        "title": "國際組織兩大類型",
        "unitId": "soc-u4",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u4-3",
        "title": "臺灣實質外交與世界公民責任",
        "unitId": "soc-u4",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u5-1",
        "title": "法律位階金字塔",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "kp-eng-u5-1",
        "title": "中西重要節慶文化比較",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "跨域全球公民",
        "badgeType": "cross",
        "desc": "全球化與國際組織 ➔ 英語世界節慶巡禮與多元文化"
      },
      {
        "id": "bridge-soc-u4",
        "isBridge": true,
        "title": "全球化與全球關聯",
        "unitId": "soc-u4",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三公民【全球化與全球關聯】：全球在地化、國際社會行為者、跨國犯罪防制與國際法規範。"
      }
    ]
  },
  {
    "id": "kp-soc-u4-2",
    "pointIndex": 1,
    "unitId": "soc-u4",
    "unitIndex": 3,
    "subjectId": "social",
    "semester": "6A",
    "title": "國際組織兩大類型",
    "category": "社會・運算算理與公式",
    "badgeColor": "amber",
    "definition": "國際組織兩大類型：政府間國際組織 (IGO，如 UN、WHO、WTO) 以主權國家為主體；非政府組織 (NGO，如紅十字會、無國界醫生、世界展望會) 以民間力量跨國援助。",
    "formulaOrRule": "核心工具與心法：非政府國際組織 (INGO，民間自主成立推動公益)",
    "strategyTip": "【審題觸發】當題目出現「無國界醫生 (MSF)、綠色和平組織、國際奧委會」時，立即啟動「非政府國際組織 (INGO，民間自主成立推動公益)」解題。考前速記：地球村各國緊密相連，互通有無分工合作；積極參與國際組織，展現臺灣關鍵軟實力！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】消費公平貿易咖啡豆支持跨國小農、為國際難民危機發起校園人道募捐行動。",
    "textbookFocus": "康軒：常考臺灣參與國際組織案例（WTO 世界貿易組織、APEC 亞太經合會、NGO 國際非政府組織）。 ｜ 南一：側重全球化衍生之全球貧富差距、傳染病跨國擴散與跨國環保公約之共同責任。 ｜ 翰林：側重全球化浪潮下之文化交流、全球分工供應鏈與跨國企業影響力。",
    "juniorHighBridge": "國三公民【全球化與全球關聯】：全球在地化、國際社會行為者、跨國犯罪防制與國際法規範。",
    "infographicKey": "info-soc-u4-2",
    "relatedPoints": [
      {
        "id": "kp-soc-u4-1",
        "title": "全球化網絡雙刃效應",
        "unitId": "soc-u4",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u4-3",
        "title": "臺灣實質外交與世界公民責任",
        "unitId": "soc-u4",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u5-1",
        "title": "法律位階金字塔",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "kp-eng-u5-1",
        "title": "中西重要節慶文化比較",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "跨域全球公民",
        "badgeType": "cross",
        "desc": "全球化與國際組織 ➔ 英語世界節慶巡禮與多元文化"
      },
      {
        "id": "bridge-soc-u4",
        "isBridge": true,
        "title": "全球化與全球關聯",
        "unitId": "soc-u4",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三公民【全球化與全球關聯】：全球在地化、國際社會行為者、跨國犯罪防制與國際法規範。"
      }
    ]
  },
  {
    "id": "kp-soc-u4-3",
    "pointIndex": 2,
    "unitId": "soc-u4",
    "unitIndex": 3,
    "subjectId": "social",
    "semester": "6A",
    "title": "臺灣實質外交與世界公民責任",
    "category": "社會・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "臺灣實質外交與世界公民責任：積極參與國際人道救援、醫療公衛奉獻，推動實質外交實踐地球村互助。",
    "formulaOrRule": "核心工具與心法：亞太經濟合作會議 (APEC)、世界貿易組織 (WTO，以台澎金馬個別關稅領域名義)",
    "strategyTip": "【審題觸發】當題目出現「臺灣參與之重要國際經貿組織」時，立即啟動「亞太經濟合作會議 (APEC)、世界貿易組織 (WTO，以台澎金馬個別關稅領域名義)」解題。考前速記：地球村各國緊密相連，互通有無分工合作；積極參與國際組織，展現臺灣關鍵軟實力！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】消費公平貿易咖啡豆支持跨國小農、為國際難民危機發起校園人道募捐行動。",
    "textbookFocus": "康軒：常考臺灣參與國際組織案例（WTO 世界貿易組織、APEC 亞太經合會、NGO 國際非政府組織）。 ｜ 南一：側重全球化衍生之全球貧富差距、傳染病跨國擴散與跨國環保公約之共同責任。 ｜ 翰林：側重全球化浪潮下之文化交流、全球分工供應鏈與跨國企業影響力。",
    "juniorHighBridge": "國三公民【全球化與全球關聯】：全球在地化、國際社會行為者、跨國犯罪防制與國際法規範。",
    "infographicKey": "info-soc-u4-3",
    "relatedPoints": [
      {
        "id": "kp-soc-u4-1",
        "title": "全球化網絡雙刃效應",
        "unitId": "soc-u4",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u4-2",
        "title": "國際組織兩大類型",
        "unitId": "soc-u4",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u5-1",
        "title": "法律位階金字塔",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "kp-eng-u5-1",
        "title": "中西重要節慶文化比較",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "跨域全球公民",
        "badgeType": "cross",
        "desc": "全球化與國際組織 ➔ 英語世界節慶巡禮與多元文化"
      },
      {
        "id": "bridge-soc-u4",
        "isBridge": true,
        "title": "全球化與全球關聯",
        "unitId": "soc-u4",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三公民【全球化與全球關聯】：全球在地化、國際社會行為者、跨國犯罪防制與國際法規範。"
      }
    ]
  },
  {
    "id": "kp-soc-u5-1",
    "pointIndex": 0,
    "unitId": "soc-u5",
    "unitIndex": 4,
    "subjectId": "social",
    "semester": "6B",
    "title": "法律位階金字塔",
    "category": "社會・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "法律位階金字塔：憲法（最高根本大法） > 法律（立法院三讀） > 命令（行政機關訂定）；下位階牴觸上位階者「無效」！",
    "formulaOrRule": "核心工具與心法：該命令無效！（法律位階原則）",
    "strategyTip": "【審題觸發】當題目出現「行政機關訂定之辦法規章與立法院通過之法律牴觸時」時，立即啟動「該命令無效！（法律位階原則）」解題。考前速記：兒童權利公約 CRC 四大原則：生存、發展、保護、參與；網路尊重著作權，遇害撥打 113！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】看懂校規制定不得違背教育部法令規章、在網路社群尊重著作權不擅自截圖轉傳他人隱私。",
    "textbookFocus": "康軒：常考兒少福利與權益保障法（禁止吸菸飲酒、禁止沉迷網路遊戲逾合理時間）、家暴通報 113。 ｜ 南一：側重網路著作權保護、智慧財產權、網路霸凌求助專線 1953 與個人資料保護法。 ｜ 翰林：側重聯合國《兒童權利公約》(CRC) 四大基本原則（生存權、受保護權、發展權、參與權）。",
    "juniorHighBridge": "國一公民【法律的規範與生活應用】：民法（權利能力與契約）、刑法（責任能力年齡層次）、行政法規救濟。",
    "infographicKey": "info-soc-u5-1",
    "relatedPoints": [
      {
        "id": "kp-soc-u5-2",
        "title": "聯合國兒童權利公約 (CRC)…",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u5-3",
        "title": "兒少權益保障與數位安全防線",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u6-1",
        "title": "聯合國 2030 永續發展 1…",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "bridge-soc-u5",
        "isBridge": true,
        "title": "法律的規範與生活應用",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一公民【法律的規範與生活應用】：民法（權利能力與契約）、刑法（責任能力年齡層次）、行政法規救濟。"
      }
    ]
  },
  {
    "id": "kp-soc-u5-2",
    "pointIndex": 1,
    "unitId": "soc-u5",
    "unitIndex": 4,
    "subjectId": "social",
    "semester": "6B",
    "title": "聯合國兒童權利公約 (CRC)…",
    "category": "社會・運算算理與公式",
    "badgeColor": "amber",
    "definition": "聯合國兒童權利公約 (CRC)…：聯合國兒童權利公約 (CRC) 四大核心原則：禁止歧視原則、兒童最佳利益原則、生命生存及發展權、尊重兒童意見權。",
    "formulaOrRule": "核心工具與心法：禁止歧視原則、兒童最佳利益原則、生命生存及發展權、兒童表意權",
    "strategyTip": "【審題觸發】當題目出現「聯合國兒童權利公約 (CRC) 四大原則」時，立即啟動「禁止歧視原則、兒童最佳利益原則、生命生存及發展權、兒童表意權」解題。考前速記：兒童權利公約 CRC 四大原則：生存、發展、保護、參與；網路尊重著作權，遇害撥打 113！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】看懂校規制定不得違背教育部法令規章、在網路社群尊重著作權不擅自截圖轉傳他人隱私。",
    "textbookFocus": "康軒：常考兒少福利與權益保障法（禁止吸菸飲酒、禁止沉迷網路遊戲逾合理時間）、家暴通報 113。 ｜ 南一：側重網路著作權保護、智慧財產權、網路霸凌求助專線 1953 與個人資料保護法。 ｜ 翰林：側重聯合國《兒童權利公約》(CRC) 四大基本原則（生存權、受保護權、發展權、參與權）。",
    "juniorHighBridge": "國一公民【法律的規範與生活應用】：民法（權利能力與契約）、刑法（責任能力年齡層次）、行政法規救濟。",
    "infographicKey": "info-soc-u5-2",
    "relatedPoints": [
      {
        "id": "kp-soc-u5-1",
        "title": "法律位階金字塔",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u5-3",
        "title": "兒少權益保障與數位安全防線",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u6-1",
        "title": "聯合國 2030 永續發展 1…",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "bridge-soc-u5",
        "isBridge": true,
        "title": "法律的規範與生活應用",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一公民【法律的規範與生活應用】：民法（權利能力與契約）、刑法（責任能力年齡層次）、行政法規救濟。"
      }
    ]
  },
  {
    "id": "kp-soc-u5-3",
    "pointIndex": 2,
    "unitId": "soc-u5",
    "unitIndex": 4,
    "subjectId": "social",
    "semester": "6B",
    "title": "兒少權益保障與數位安全防線",
    "category": "社會・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "兒少權益保障與數位安全防線：未滿 6 歲兒童不得獨留家中（家暴撥打 113）；保護個人數位足跡，嚴禁轉傳未成年私密影像與網路霸凌。",
    "formulaOrRule": "核心工具與心法：觸犯兒少性剝削防制條例、刑法公然侮辱與妨害名譽罪",
    "strategyTip": "【審題觸發】當題目出現「網路散布他人私密影像或霸凌言詞法律責任」時，立即啟動「觸犯兒少性剝削防制條例、刑法公然侮辱與妨害名譽罪」解題。考前速記：兒童權利公約 CRC 四大原則：生存、發展、保護、參與；網路尊重著作權，遇害撥打 113！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】看懂校規制定不得違背教育部法令規章、在網路社群尊重著作權不擅自截圖轉傳他人隱私。",
    "textbookFocus": "康軒：常考兒少福利與權益保障法（禁止吸菸飲酒、禁止沉迷網路遊戲逾合理時間）、家暴通報 113。 ｜ 南一：側重網路著作權保護、智慧財產權、網路霸凌求助專線 1953 與個人資料保護法。 ｜ 翰林：側重聯合國《兒童權利公約》(CRC) 四大基本原則（生存權、受保護權、發展權、參與權）。",
    "juniorHighBridge": "國一公民【法律的規範與生活應用】：民法（權利能力與契約）、刑法（責任能力年齡層次）、行政法規救濟。",
    "infographicKey": "info-soc-u5-3",
    "relatedPoints": [
      {
        "id": "kp-soc-u5-1",
        "title": "法律位階金字塔",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u5-2",
        "title": "聯合國兒童權利公約 (CRC)…",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u6-1",
        "title": "聯合國 2030 永續發展 1…",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "bridge-soc-u5",
        "isBridge": true,
        "title": "法律的規範與生活應用",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一公民【法律的規範與生活應用】：民法（權利能力與契約）、刑法（責任能力年齡層次）、行政法規救濟。"
      }
    ]
  },
  {
    "id": "kp-soc-u6-1",
    "pointIndex": 0,
    "unitId": "soc-u6",
    "unitIndex": 5,
    "subjectId": "social",
    "semester": "6B",
    "title": "聯合國 2030 永續發展 1…",
    "category": "社會・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "聯合國 2030 永續發展 1…：聯合國 2030 永續發展 17 項目標 (SDGs)：兼顧「環境保護、經濟發展、社會共融」三支柱。",
    "formulaOrRule": "核心工具與心法：減少溫室氣體排放、綠色低碳生活與能源轉型",
    "strategyTip": "【審題觸發】當題目出現「SDG 13 氣候行動、淨零碳排、碳足跡標籤」時，立即啟動「減少溫室氣體排放、綠色低碳生活與能源轉型」解題。考前速記：SDGs 17項攜手護地球，消除貧窮保育生態；減塑低碳生活行，循環經濟留子孫！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】落實校園垃圾秤重減量競賽、家庭換裝 LED 節能燈具與一級變頻家電、落實舊衣循環捐贈。",
    "textbookFocus": "康軒：常考聯合國永續發展目標 (SDGs 17項) 核心宗旨、臺灣推動減碳減塑日常公民行動。 ｜ 南一：側重循環經濟、碳足跡標籤、綠建築九大指標與企業社會責任 (CSR/ESG)。 ｜ 翰林：側重全球暖化溫室氣體排放、《巴黎氣候協定》、再生能源（太陽能、離岸風電）發展。",
    "juniorHighBridge": "國三下地理與公民【環境問題與永續發展】：京都議定書與巴黎協定、碳稅與碳交易機制、環境倫理。",
    "infographicKey": "info-soc-u6-1",
    "relatedPoints": [
      {
        "id": "kp-soc-u6-2",
        "title": "淨零碳排與全球氣候行動",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u6-3",
        "title": "循環經濟與永續消費",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "經緯度座標與時區換算",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "bridge-soc-u6",
        "isBridge": true,
        "title": "環境問題與永續發展",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三下地理與公民【環境問題與永續發展】：京都議定書與巴黎協定、碳稅與碳交易機制、環境倫理。"
      }
    ]
  },
  {
    "id": "kp-soc-u6-2",
    "pointIndex": 1,
    "unitId": "soc-u6",
    "unitIndex": 5,
    "subjectId": "social",
    "semester": "6B",
    "title": "淨零碳排與全球氣候行動",
    "category": "社會・運算算理與公式",
    "badgeColor": "amber",
    "definition": "淨零碳排與全球氣候行動：減少溫室氣體排放、選購具「碳足跡標籤」與「節能標章」商品、推動綠色能源轉型。",
    "formulaOrRule": "核心工具與心法：從搖籃到搖籃：廢棄物資源化回收再利用，減少資源開採",
    "strategyTip": "【審題觸發】當題目出現「循環經濟 (Circular Economy) 概念」時，立即啟動「從搖籃到搖籃：廢棄物資源化回收再利用，減少資源開採」解題。考前速記：SDGs 17項攜手護地球，消除貧窮保育生態；減塑低碳生活行，循環經濟留子孫！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】落實校園垃圾秤重減量競賽、家庭換裝 LED 節能燈具與一級變頻家電、落實舊衣循環捐贈。",
    "textbookFocus": "康軒：常考聯合國永續發展目標 (SDGs 17項) 核心宗旨、臺灣推動減碳減塑日常公民行動。 ｜ 南一：側重循環經濟、碳足跡標籤、綠建築九大指標與企業社會責任 (CSR/ESG)。 ｜ 翰林：側重全球暖化溫室氣體排放、《巴黎氣候協定》、再生能源（太陽能、離岸風電）發展。",
    "juniorHighBridge": "國三下地理與公民【環境問題與永續發展】：京都議定書與巴黎協定、碳稅與碳交易機制、環境倫理。",
    "infographicKey": "info-soc-u6-2",
    "relatedPoints": [
      {
        "id": "kp-soc-u6-1",
        "title": "聯合國 2030 永續發展 1…",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u6-3",
        "title": "循環經濟與永續消費",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "經緯度座標與時區換算",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "bridge-soc-u6",
        "isBridge": true,
        "title": "環境問題與永續發展",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三下地理與公民【環境問題與永續發展】：京都議定書與巴黎協定、碳稅與碳交易機制、環境倫理。"
      }
    ]
  },
  {
    "id": "kp-soc-u6-3",
    "pointIndex": 2,
    "unitId": "soc-u6",
    "unitIndex": 5,
    "subjectId": "social",
    "semester": "6B",
    "title": "循環經濟與永續消費",
    "category": "社會・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "循環經濟與永續消費：源頭減量 (Reduce)、重複使用 (Reuse)、資源回收 (Recycle)，守護地球有限資源。",
    "formulaOrRule": "核心工具與心法：自備環保餐具隨手杯、選購環保節能標章商品、搭乘大眾運輸",
    "strategyTip": "【審題觸發】當題目出現「綠色消費與環境公民實踐」時，立即啟動「自備環保餐具隨手杯、選購環保節能標章商品、搭乘大眾運輸」解題。考前速記：SDGs 17項攜手護地球，消除貧窮保育生態；減塑低碳生活行，循環經濟留子孫！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】落實校園垃圾秤重減量競賽、家庭換裝 LED 節能燈具與一級變頻家電、落實舊衣循環捐贈。",
    "textbookFocus": "康軒：常考聯合國永續發展目標 (SDGs 17項) 核心宗旨、臺灣推動減碳減塑日常公民行動。 ｜ 南一：側重循環經濟、碳足跡標籤、綠建築九大指標與企業社會責任 (CSR/ESG)。 ｜ 翰林：側重全球暖化溫室氣體排放、《巴黎氣候協定》、再生能源（太陽能、離岸風電）發展。",
    "juniorHighBridge": "國三下地理與公民【環境問題與永續發展】：京都議定書與巴黎協定、碳稅與碳交易機制、環境倫理。",
    "infographicKey": "info-soc-u6-3",
    "relatedPoints": [
      {
        "id": "kp-soc-u6-1",
        "title": "聯合國 2030 永續發展 1…",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u6-2",
        "title": "淨零碳排與全球氣候行動",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "經緯度座標與時區換算",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "bridge-soc-u6",
        "isBridge": true,
        "title": "環境問題與永續發展",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國三下地理與公民【環境問題與永續發展】：京都議定書與巴黎協定、碳稅與碳交易機制、環境倫理。"
      }
    ]
  },
  {
    "id": "kp-soc-u7-1",
    "pointIndex": 0,
    "unitId": "soc-u7",
    "unitIndex": 6,
    "subjectId": "social",
    "semester": "6B",
    "title": "經緯度座標與時區換算",
    "category": "社會・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "經緯度座標與時區換算：緯度決定氣候帶（熱帶、溫帶、寒帶）；經度決定時區，經度每差 $15^\\circ$ 相差 1 小時，口訣「東加西減」。",
    "formulaOrRule": "緯度決定氣候帶（熱帶、溫帶、寒帶）；經度決定時區，經度每差 $15^\\circ$ 相差 1 小時，口訣「東加西減」。",
    "strategyTip": "【審題觸發】當題目出現「倫敦 (0°) 上午 8:00，求臺灣 (東經 120°) 當地時間」時，立即啟動「經度相差 120° ÷ 15° = 8 小時；東方較早，故為 8:00 + 8 = 下午 16:00」解題。考前速記：亞洲最大大洋洲最小，太平洋浩瀚占第一；尊重各國宗教文化，世界遺產人類瑰寶！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】安排跨國出國旅行機票行程注意時差調節、欣賞羅馬競技場與吳哥窟歷史文化建築美學。",
    "textbookFocus": "康軒：常考世界七大洲三大洋分佈位置、世界重要世界文化遺產（埃及金字塔、泰姬瑪哈陵）。 ｜ 南一：側重世界宗教文化（基督教、伊斯蘭教、佛教、印度教）戒律特色與建築風格辨析。 ｜ 翰林：側重全球氣候帶分佈（熱帶、溫帶、寒帶、高地氣候）與不同地理環境下的人類適應生活。",
    "juniorHighBridge": "國二歷史【世界史古代文明】與國一地理【臺灣與世界地理】：板塊氣候水文帶、文藝復興與啟蒙運動。",
    "infographicKey": "info-soc-u7-1",
    "relatedPoints": [
      {
        "id": "kp-soc-u7-2",
        "title": "世界三大地形與板塊構造",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u7-3",
        "title": "聯合國教科文組織世界遺產",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u8-1",
        "title": "人工智慧 (AI) 革命與演算法透明度",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "bridge-soc-u7",
        "isBridge": true,
        "title": "世界史古代文明",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二歷史【世界史古代文明】與國一地理【臺灣與世界地理】：板塊氣候水文帶、文藝復興與啟蒙運動。"
      }
    ]
  },
  {
    "id": "kp-soc-u7-2",
    "pointIndex": 1,
    "unitId": "soc-u7",
    "unitIndex": 6,
    "subjectId": "social",
    "semester": "6B",
    "title": "世界三大地形與板塊構造",
    "category": "社會・運算算理與公式",
    "badgeColor": "amber",
    "definition": "世界三大地形與板塊構造：環太平洋火山地震帶、阿爾卑斯-喜馬拉雅造山帶；山脈、平原、高原之地形分布。",
    "formulaOrRule": "核心工具與心法：皆發源於大河流域（尼羅河、兩河流域、印度河、黃河），水源充沛土壤肥沃",
    "strategyTip": "【審題觸發】當題目出現「世界四大古文明發源地共通地理特徵」時，立即啟動「皆發源於大河流域（尼羅河、兩河流域、印度河、黃河），水源充沛土壤肥沃」解題。考前速記：亞洲最大大洋洲最小，太平洋浩瀚占第一；尊重各國宗教文化，世界遺產人類瑰寶！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】安排跨國出國旅行機票行程注意時差調節、欣賞羅馬競技場與吳哥窟歷史文化建築美學。",
    "textbookFocus": "康軒：常考世界七大洲三大洋分佈位置、世界重要世界文化遺產（埃及金字塔、泰姬瑪哈陵）。 ｜ 南一：側重世界宗教文化（基督教、伊斯蘭教、佛教、印度教）戒律特色與建築風格辨析。 ｜ 翰林：側重全球氣候帶分佈（熱帶、溫帶、寒帶、高地氣候）與不同地理環境下的人類適應生活。",
    "juniorHighBridge": "國二歷史【世界史古代文明】與國一地理【臺灣與世界地理】：板塊氣候水文帶、文藝復興與啟蒙運動。",
    "infographicKey": "info-soc-u7-2",
    "relatedPoints": [
      {
        "id": "kp-soc-u7-1",
        "title": "經緯度座標與時區換算",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u7-3",
        "title": "聯合國教科文組織世界遺產",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u8-1",
        "title": "人工智慧 (AI) 革命與演算法透明度",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "bridge-soc-u7",
        "isBridge": true,
        "title": "世界史古代文明",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二歷史【世界史古代文明】與國一地理【臺灣與世界地理】：板塊氣候水文帶、文藝復興與啟蒙運動。"
      }
    ]
  },
  {
    "id": "kp-soc-u7-3",
    "pointIndex": 2,
    "unitId": "soc-u7",
    "unitIndex": 6,
    "subjectId": "social",
    "semester": "6B",
    "title": "聯合國教科文組織世界遺產",
    "category": "社會・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "聯合國教科文組織世界遺產：自然遺產與文化遺產保護，促進多元世界文明互信包容。",
    "formulaOrRule": "核心工具與心法：具有普世卓越價值，全人類共同保護的歷史地景與自然奇蹟",
    "strategyTip": "【審題觸發】當題目出現「UNESCO 世界文化遺產與自然遺產意義」時，立即啟動「具有普世卓越價值，全人類共同保護的歷史地景與自然奇蹟」解題。考前速記：亞洲最大大洋洲最小，太平洋浩瀚占第一；尊重各國宗教文化，世界遺產人類瑰寶！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】安排跨國出國旅行機票行程注意時差調節、欣賞羅馬競技場與吳哥窟歷史文化建築美學。",
    "textbookFocus": "康軒：常考世界七大洲三大洋分佈位置、世界重要世界文化遺產（埃及金字塔、泰姬瑪哈陵）。 ｜ 南一：側重世界宗教文化（基督教、伊斯蘭教、佛教、印度教）戒律特色與建築風格辨析。 ｜ 翰林：側重全球氣候帶分佈（熱帶、溫帶、寒帶、高地氣候）與不同地理環境下的人類適應生活。",
    "juniorHighBridge": "國二歷史【世界史古代文明】與國一地理【臺灣與世界地理】：板塊氣候水文帶、文藝復興與啟蒙運動。",
    "infographicKey": "info-soc-u7-3",
    "relatedPoints": [
      {
        "id": "kp-soc-u7-1",
        "title": "經緯度座標與時區換算",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u7-2",
        "title": "世界三大地形與板塊構造",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u8-1",
        "title": "人工智慧 (AI) 革命與演算法透明度",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "bridge-soc-u7",
        "isBridge": true,
        "title": "世界史古代文明",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二歷史【世界史古代文明】與國一地理【臺灣與世界地理】：板塊氣候水文帶、文藝復興與啟蒙運動。"
      }
    ]
  },
  {
    "id": "kp-soc-u8-1",
    "pointIndex": 0,
    "unitId": "soc-u8",
    "unitIndex": 7,
    "subjectId": "social",
    "semester": "6B",
    "title": "人工智慧 (AI) 革命與演算法透明度",
    "category": "社會・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "人工智慧 (AI) 革命與演算法透明度：大數據機器學習帶來生活便利，同時需防範演算法偏誤、深度偽造 (Deepfake) 與個資濫用。",
    "formulaOrRule": "核心工具與心法：回音室效應 (Echo Chamber) 與過濾氣泡 (Filter Bubble)",
    "strategyTip": "【審題觸發】當題目出現「社群平台演算法推播同類資訊導致觀點單一極化」時，立即啟動「回音室效應 (Echo Chamber) 與過濾氣泡 (Filter Bubble)」解題。考前速記：科技是一把雙刃劍，善用便利防範陷阱；假訊息查核停看查，保護個資終身學習！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】利用事實查核中心查驗長輩圖不實謠言、理性平衡螢幕時間享受真實世界人際互動。",
    "textbookFocus": "康軒：常考人工智慧 (AI) 應用、自動駕駛、生成式 AI 倫理、數位落差議題。 ｜ 南一：側重未來科技發展下的隱私權保護、機器人取代人力之職業轉型與終身學習應變力。 ｜ 翰林：側重假訊息深偽技術 (Deepfake) 查核、數位足跡與網路資訊素養辨識。",
    "juniorHighBridge": "國二公民【科技發展與社會生活】：資訊社會的法律責任、智慧財產權與科技倫理爭議。",
    "infographicKey": "info-soc-u8-1",
    "relatedPoints": [
      {
        "id": "kp-soc-u8-2",
        "title": "數位公民資訊查證三部曲",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u8-3",
        "title": "數位素養與科技倫理",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "經緯度座標與時區換算",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：社會・觀念本質與定義"
      },
      {
        "id": "bridge-soc-u8",
        "isBridge": true,
        "title": "科技發展與社會生活",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二公民【科技發展與社會生活】：資訊社會的法律責任、智慧財產權與科技倫理爭議。"
      }
    ]
  },
  {
    "id": "kp-soc-u8-2",
    "pointIndex": 1,
    "unitId": "soc-u8",
    "unitIndex": 7,
    "subjectId": "social",
    "semester": "6B",
    "title": "數位公民資訊查證三部曲",
    "category": "社會・運算算理與公式",
    "badgeColor": "amber",
    "definition": "數位公民資訊查證三部曲：不輕信、不轉傳、多查證（善用台灣事實查核中心與 MyGoPen 等第三方事實查核工具）。",
    "formulaOrRule": "核心工具與心法：必須查核真實性與來源、標註引用來源、不可直接抄襲視為個人原創",
    "strategyTip": "【審題觸發】當題目出現「使用生成式 AI (如 ChatGPT) 撰寫作業論文之倫理」時，立即啟動「必須查核真實性與來源、標註引用來源、不可直接抄襲視為個人原創」解題。考前速記：科技是一把雙刃劍，善用便利防範陷阱；假訊息查核停看查，保護個資終身學習！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】利用事實查核中心查驗長輩圖不實謠言、理性平衡螢幕時間享受真實世界人際互動。",
    "textbookFocus": "康軒：常考人工智慧 (AI) 應用、自動駕駛、生成式 AI 倫理、數位落差議題。 ｜ 南一：側重未來科技發展下的隱私權保護、機器人取代人力之職業轉型與終身學習應變力。 ｜ 翰林：側重假訊息深偽技術 (Deepfake) 查核、數位足跡與網路資訊素養辨識。",
    "juniorHighBridge": "國二公民【科技發展與社會生活】：資訊社會的法律責任、智慧財產權與科技倫理爭議。",
    "infographicKey": "info-soc-u8-2",
    "relatedPoints": [
      {
        "id": "kp-soc-u8-1",
        "title": "人工智慧 (AI) 革命與演算法透明度",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u8-3",
        "title": "數位素養與科技倫理",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "經緯度座標與時區換算",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：社會・觀念本質與定義"
      },
      {
        "id": "bridge-soc-u8",
        "isBridge": true,
        "title": "科技發展與社會生活",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二公民【科技發展與社會生活】：資訊社會的法律責任、智慧財產權與科技倫理爭議。"
      }
    ]
  },
  {
    "id": "kp-soc-u8-3",
    "pointIndex": 2,
    "unitId": "soc-u8",
    "unitIndex": 7,
    "subjectId": "social",
    "semester": "6B",
    "title": "數位素養與科技倫理",
    "category": "社會・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "數位素養與科技倫理：尊重智慧財產權與原創作者授權，拒絕網路霸凌，建構友善健康的數位網路社群。",
    "formulaOrRule": "核心工具與心法：雙重身分驗證 (2FA)、定期更換強密碼、不輕信不明釣魚簡訊連結",
    "strategyTip": "【審題觸發】當題目出現「網路個人資訊防竊與隱私權保護」時，立即啟動「雙重身分驗證 (2FA)、定期更換強密碼、不輕信不明釣魚簡訊連結」解題。考前速記：科技是一把雙刃劍，善用便利防範陷阱；假訊息查核停看查，保護個資終身學習！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】利用事實查核中心查驗長輩圖不實謠言、理性平衡螢幕時間享受真實世界人際互動。",
    "textbookFocus": "康軒：常考人工智慧 (AI) 應用、自動駕駛、生成式 AI 倫理、數位落差議題。 ｜ 南一：側重未來科技發展下的隱私權保護、機器人取代人力之職業轉型與終身學習應變力。 ｜ 翰林：側重假訊息深偽技術 (Deepfake) 查核、數位足跡與網路資訊素養辨識。",
    "juniorHighBridge": "國二公民【科技發展與社會生活】：資訊社會的法律責任、智慧財產權與科技倫理爭議。",
    "infographicKey": "info-soc-u8-3",
    "relatedPoints": [
      {
        "id": "kp-soc-u8-1",
        "title": "人工智慧 (AI) 革命與演算法透明度",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u8-2",
        "title": "數位公民資訊查證三部曲",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "經緯度座標與時區換算",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：社會・觀念本質與定義"
      },
      {
        "id": "bridge-soc-u8",
        "isBridge": true,
        "title": "科技發展與社會生活",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二公民【科技發展與社會生活】：資訊社會的法律責任、智慧財產權與科技倫理爭議。"
      }
    ]
  },
  {
    "id": "kp-eng-u1-1",
    "pointIndex": 0,
    "unitId": "eng-u1",
    "unitIndex": 0,
    "subjectId": "english",
    "semester": "6A",
    "title": "時間說法與時間介系詞",
    "category": "英語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "時間說法與時間介系詞：整點用 at (at 7:00)、日期與星期用 on (on Monday, on October 10th)、月份與時段用 in (in the morning, in July)。",
    "formulaOrRule": "核心工具與心法：always (100%) > usually (80%) > often (60%) > sometimes (30%) > never (0%)",
    "strategyTip": "【審題觸發】當題目出現「頻率副詞百分比量表」時，立即啟動「always (100%) > usually (80%) > often (60%) > sometimes (30%) > never (0%)」解題。考前速記：三單動詞加 -s/-es；頻率副詞位置口訣：「be 後動前」（be動詞之後，一般動詞之前）！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】用英語分享自己每日早睡早起的生活時間表、規劃自律高效的一天習慣。",
    "textbookFocus": "康軒：常考日常作息時間表達（What time do you get up? at 7:00）、頻率副詞位置（always, usually, sometimes, never）。 ｜ 南一：側重頻率副詞放在 be 動詞之後、一般動詞之前的語法防雷題。 ｜ 翰林：側重現在簡單式第三人稱單數主詞（He/She/It）動詞加 -s/-es 規則與 does 問句。",
    "juniorHighBridge": "國一英文【現在簡單式與助動詞】：肯定句、否定句 (don't/doesn't) 與疑問句 (Do/Does...?) 標準結構。",
    "infographicKey": "info-eng-u1-1",
    "relatedPoints": [
      {
        "id": "kp-eng-u1-2",
        "title": "頻率副詞百分比階梯",
        "unitId": "eng-u1",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u1-3",
        "title": "現在簡單式主詞一致性",
        "unitId": "eng-u1",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u2-1",
        "title": "過去簡單式核心定義與時間信號",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "kp-comp-u1-1",
        "title": "艾森豪時間四象限矩陣",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "跨域自律生活",
        "badgeType": "cross",
        "desc": "日常作息時間規劃 ➔ 艾森豪時間四象限矩陣"
      },
      {
        "id": "bridge-eng-u1",
        "isBridge": true,
        "title": "現在簡單式與助動詞",
        "unitId": "eng-u1",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一英文【現在簡單式與助動詞】：肯定句、否定句 (don't/doesn't) 與疑問句 (Do/Does...?) 標準結構。"
      }
    ]
  },
  {
    "id": "kp-eng-u1-2",
    "pointIndex": 1,
    "unitId": "eng-u1",
    "unitIndex": 0,
    "subjectId": "english",
    "semester": "6A",
    "title": "頻率副詞百分比階梯",
    "category": "英語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "頻率副詞百分比階梯：always (100%) > usually (80%) > often (60%) > sometimes (40%) > never (0%)；位置在「be 動詞之後、一般動詞之前」。",
    "formulaOrRule": "核心工具與心法：be 後、動前、助後動前（如 He is always kind; She never eats meat）",
    "strategyTip": "【審題觸發】當題目出現「頻率副詞在句子中的位置口訣」時，立即啟動「be 後、動前、助後動前（如 He is always kind; She never eats meat）」解題。考前速記：三單動詞加 -s/-es；頻率副詞位置口訣：「be 後動前」（be動詞之後，一般動詞之前）！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】用英語分享自己每日早睡早起的生活時間表、規劃自律高效的一天習慣。",
    "textbookFocus": "康軒：常考日常作息時間表達（What time do you get up? at 7:00）、頻率副詞位置（always, usually, sometimes, never）。 ｜ 南一：側重頻率副詞放在 be 動詞之後、一般動詞之前的語法防雷題。 ｜ 翰林：側重現在簡單式第三人稱單數主詞（He/She/It）動詞加 -s/-es 規則與 does 問句。",
    "juniorHighBridge": "國一英文【現在簡單式與助動詞】：肯定句、否定句 (don't/doesn't) 與疑問句 (Do/Does...?) 標準結構。",
    "infographicKey": "info-eng-u1-2",
    "relatedPoints": [
      {
        "id": "kp-eng-u1-1",
        "title": "時間說法與時間介系詞",
        "unitId": "eng-u1",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u1-3",
        "title": "現在簡單式主詞一致性",
        "unitId": "eng-u1",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u2-1",
        "title": "過去簡單式核心定義與時間信號",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "kp-comp-u1-1",
        "title": "艾森豪時間四象限矩陣",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "跨域自律生活",
        "badgeType": "cross",
        "desc": "日常作息時間規劃 ➔ 艾森豪時間四象限矩陣"
      },
      {
        "id": "bridge-eng-u1",
        "isBridge": true,
        "title": "現在簡單式與助動詞",
        "unitId": "eng-u1",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一英文【現在簡單式與助動詞】：肯定句、否定句 (don't/doesn't) 與疑問句 (Do/Does...?) 標準結構。"
      }
    ]
  },
  {
    "id": "kp-eng-u1-3",
    "pointIndex": 2,
    "unitId": "eng-u1",
    "unitIndex": 0,
    "subjectId": "english",
    "semester": "6A",
    "title": "現在簡單式主詞一致性",
    "category": "英語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "現在簡單式主詞一致性：主詞為第三人稱單數（He / She / It）時，一般動詞必須字尾加 -s 或 -es (watches, brushes, plays)。",
    "formulaOrRule": "核心工具與心法：一般動詞字尾加 -s, -es（watches, studies, goes）",
    "strategyTip": "【審題觸發】當題目出現「主詞是第三人稱單數 (He, She, It) 時動詞變化」時，立即啟動「一般動詞字尾加 -s, -es（watches, studies, goes）」解題。考前速記：三單動詞加 -s/-es；頻率副詞位置口訣：「be 後動前」（be動詞之後，一般動詞之前）！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】用英語分享自己每日早睡早起的生活時間表、規劃自律高效的一天習慣。",
    "textbookFocus": "康軒：常考日常作息時間表達（What time do you get up? at 7:00）、頻率副詞位置（always, usually, sometimes, never）。 ｜ 南一：側重頻率副詞放在 be 動詞之後、一般動詞之前的語法防雷題。 ｜ 翰林：側重現在簡單式第三人稱單數主詞（He/She/It）動詞加 -s/-es 規則與 does 問句。",
    "juniorHighBridge": "國一英文【現在簡單式與助動詞】：肯定句、否定句 (don't/doesn't) 與疑問句 (Do/Does...?) 標準結構。",
    "infographicKey": "info-eng-u1-3",
    "relatedPoints": [
      {
        "id": "kp-eng-u1-1",
        "title": "時間說法與時間介系詞",
        "unitId": "eng-u1",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u1-2",
        "title": "頻率副詞百分比階梯",
        "unitId": "eng-u1",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u2-1",
        "title": "過去簡單式核心定義與時間信號",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "kp-comp-u1-1",
        "title": "艾森豪時間四象限矩陣",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "跨域自律生活",
        "badgeType": "cross",
        "desc": "日常作息時間規劃 ➔ 艾森豪時間四象限矩陣"
      },
      {
        "id": "bridge-eng-u1",
        "isBridge": true,
        "title": "現在簡單式與助動詞",
        "unitId": "eng-u1",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一英文【現在簡單式與助動詞】：肯定句、否定句 (don't/doesn't) 與疑問句 (Do/Does...?) 標準結構。"
      }
    ]
  },
  {
    "id": "kp-eng-u2-1",
    "pointIndex": 0,
    "unitId": "eng-u2",
    "unitIndex": 1,
    "subjectId": "english",
    "semester": "6A",
    "title": "過去簡單式核心定義與時間信號",
    "category": "英語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "過去簡單式核心定義與時間信號：表達過去已經結束之事件，常伴隨 yesterday, last night, two days ago, in 2020。",
    "formulaOrRule": "核心工具與心法：yesterday, last night, two days ago, in 2020",
    "strategyTip": "【審題觸發】當題目出現「過去時間副詞關鍵信號」時，立即啟動「yesterday, last night, two days ago, in 2020」解題。考前速記：過去時間配過去式動詞；助動詞 did 一出現，主要動詞一律打回原形！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】用英語書寫旅行日記、向外國朋友講述精彩的童年冒險或夏令營回憶。",
    "textbookFocus": "康軒：常考過去假期旅遊故事（Where did you go? I went to...）、規則動詞加 -ed 讀音 (/t/, /d/, /ɪd/)。 ｜ 南一：側重助動詞 did 出現時，後方主要動詞必須「強制打回原形」的大考第一殺手陷阱。 ｜ 翰林：側重高頻不規則過去式動詞三態變化（go-went, see-saw, eat-ate, have-had, buy-bought, take-took）。",
    "juniorHighBridge": "國一英文下學期【過去式與過去進行式】：不規則動詞精熟、was/were 與 did 互斥原則。",
    "infographicKey": "info-eng-u2-1",
    "relatedPoints": [
      {
        "id": "kp-eng-u2-2",
        "title": "規則與高頻不規則動詞變化",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u2-3",
        "title": "疑問句與否定句大助動詞 did",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u3-1",
        "title": "空間方位介系詞地圖指南",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "kp-man-u2-1",
        "title": "記敘文起承轉合黃金架構",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "跨語文冒險敘事",
        "badgeType": "cross",
        "desc": "過去式冒險故事 ➔ 記敘文高潮轉折情節鋪陳"
      },
      {
        "id": "bridge-eng-u2",
        "isBridge": true,
        "title": "過去式與過去進行式",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一英文下學期【過去式與過去進行式】：不規則動詞精熟、was/were 與 did 互斥原則。"
      }
    ]
  },
  {
    "id": "kp-eng-u2-2",
    "pointIndex": 1,
    "unitId": "eng-u2",
    "unitIndex": 1,
    "subjectId": "english",
    "semester": "6A",
    "title": "規則與高頻不規則動詞變化",
    "category": "英語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "規則與高頻不規則動詞變化：規則動詞加 -ed (play-played, watch-watched)；不規則動詞需牢記 (go-went, see-saw, eat-ate, have-had)。",
    "formulaOrRule": "核心工具與心法：go ➔ went, see ➔ saw, buy ➔ bought, eat ➔ ate, make ➔ made",
    "strategyTip": "【審題觸發】當題目出現「高頻不規則過去式動詞快速辨識」時，立即啟動「go ➔ went, see ➔ saw, buy ➔ bought, eat ➔ ate, make ➔ made」解題。考前速記：過去時間配過去式動詞；助動詞 did 一出現，主要動詞一律打回原形！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】用英語書寫旅行日記、向外國朋友講述精彩的童年冒險或夏令營回憶。",
    "textbookFocus": "康軒：常考過去假期旅遊故事（Where did you go? I went to...）、規則動詞加 -ed 讀音 (/t/, /d/, /ɪd/)。 ｜ 南一：側重助動詞 did 出現時，後方主要動詞必須「強制打回原形」的大考第一殺手陷阱。 ｜ 翰林：側重高頻不規則過去式動詞三態變化（go-went, see-saw, eat-ate, have-had, buy-bought, take-took）。",
    "juniorHighBridge": "國一英文下學期【過去式與過去進行式】：不規則動詞精熟、was/were 與 did 互斥原則。",
    "infographicKey": "info-eng-u2-2",
    "relatedPoints": [
      {
        "id": "kp-eng-u2-1",
        "title": "過去簡單式核心定義與時間信號",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u2-3",
        "title": "疑問句與否定句大助動詞 did",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u3-1",
        "title": "空間方位介系詞地圖指南",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "kp-man-u2-1",
        "title": "記敘文起承轉合黃金架構",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "跨語文冒險敘事",
        "badgeType": "cross",
        "desc": "過去式冒險故事 ➔ 記敘文高潮轉折情節鋪陳"
      },
      {
        "id": "bridge-eng-u2",
        "isBridge": true,
        "title": "過去式與過去進行式",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一英文下學期【過去式與過去進行式】：不規則動詞精熟、was/were 與 did 互斥原則。"
      }
    ]
  },
  {
    "id": "kp-eng-u2-3",
    "pointIndex": 2,
    "unitId": "eng-u2",
    "unitIndex": 1,
    "subjectId": "english",
    "semester": "6A",
    "title": "疑問句與否定句大助動詞 did",
    "category": "英語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "疑問句與否定句大助動詞 did：使用 did 或 didn't 後面動詞「必須打回原形」 (Did you go...? / I didn't see...)。",
    "formulaOrRule": "核心工具與心法：使用助動詞 did/didn't 後，後方動詞【必定打回原形動詞 V】！",
    "strategyTip": "【審題觸發】當題目出現「過去式否定句與疑問句助動詞救援」時，立即啟動「使用助動詞 did/didn't 後，後方動詞【必定打回原形動詞 V】！」解題。考前速記：過去時間配過去式動詞；助動詞 did 一出現，主要動詞一律打回原形！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】用英語書寫旅行日記、向外國朋友講述精彩的童年冒險或夏令營回憶。",
    "textbookFocus": "康軒：常考過去假期旅遊故事（Where did you go? I went to...）、規則動詞加 -ed 讀音 (/t/, /d/, /ɪd/)。 ｜ 南一：側重助動詞 did 出現時，後方主要動詞必須「強制打回原形」的大考第一殺手陷阱。 ｜ 翰林：側重高頻不規則過去式動詞三態變化（go-went, see-saw, eat-ate, have-had, buy-bought, take-took）。",
    "juniorHighBridge": "國一英文下學期【過去式與過去進行式】：不規則動詞精熟、was/were 與 did 互斥原則。",
    "infographicKey": "info-eng-u2-3",
    "relatedPoints": [
      {
        "id": "kp-eng-u2-1",
        "title": "過去簡單式核心定義與時間信號",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u2-2",
        "title": "規則與高頻不規則動詞變化",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u3-1",
        "title": "空間方位介系詞地圖指南",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "kp-man-u2-1",
        "title": "記敘文起承轉合黃金架構",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "跨語文冒險敘事",
        "badgeType": "cross",
        "desc": "過去式冒險故事 ➔ 記敘文高潮轉折情節鋪陳"
      },
      {
        "id": "bridge-eng-u2",
        "isBridge": true,
        "title": "過去式與過去進行式",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一英文下學期【過去式與過去進行式】：不規則動詞精熟、was/were 與 did 互斥原則。"
      }
    ]
  },
  {
    "id": "kp-eng-u3-1",
    "pointIndex": 0,
    "unitId": "eng-u3",
    "unitIndex": 2,
    "subjectId": "english",
    "semester": "6A",
    "title": "空間方位介系詞地圖指南",
    "category": "英語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "空間方位介系詞地圖指南：across from（在...對面）、next to（在...旁邊）、between A and B（在 A 與 B 之間）、on the corner of（在...轉角）。",
    "formulaOrRule": "核心工具與心法：Excuse me, how can I get to the library? / Where is the post office?",
    "strategyTip": "【審題觸發】當題目出現「禮貌詢問路線開場句型」時，立即啟動「Excuse me, how can I get to the library? / Where is the post office?」解題。考前速記：直走 Go straight, 左轉 Turn left, 右轉 Turn right；對面 across from, 之間 between A and B！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在臺北捷運站或觀光景點用流暢英語為外國觀光客指引正確方向。",
    "textbookFocus": "康軒：常考城市景點問路（How can I get to the museum? Turn left, go straight, next to...）。 ｜ 南一：側重祈使句指路句型與情態助動詞 can / could you tell me the way to...? 禮貌用語。 ｜ 翰林：側重方位與空間介系詞（across from 對面, between A and B, on the corner of, behind, in front of）。",
    "juniorHighBridge": "國二英文【方向介系詞與祈使句】：複合地方副詞、地圖閱讀素養題型推論。",
    "infographicKey": "info-eng-u3-1",
    "relatedPoints": [
      {
        "id": "kp-eng-u3-2",
        "title": "禮貌問路指路金句",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u3-3",
        "title": "交通工具搭配介系詞",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u4-1",
        "title": "可數名詞與不可數名詞判斷",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "經緯度座標與時區換算",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "跨域空間方位",
        "badgeType": "cross",
        "desc": "問路與空間介系詞 ➔ 地球村經緯坐標與城鎮導航"
      },
      {
        "id": "bridge-eng-u3",
        "isBridge": true,
        "title": "方向介系詞與祈使句",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二英文【方向介系詞與祈使句】：複合地方副詞、地圖閱讀素養題型推論。"
      }
    ]
  },
  {
    "id": "kp-eng-u3-2",
    "pointIndex": 1,
    "unitId": "eng-u3",
    "unitIndex": 2,
    "subjectId": "english",
    "semester": "6A",
    "title": "禮貌問路指路金句",
    "category": "英語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "禮貌問路指路金句：\"Excuse me, how can I get to the train station?\" / \"Go straight for two blocks and turn right.\"",
    "formulaOrRule": "核心工具與心法：next to (旁邊), across from (對面), between A and B (在兩者之間), on the corner of (轉角處)",
    "strategyTip": "【審題觸發】當題目出現「精確方位介系詞判定」時，立即啟動「next to (旁邊), across from (對面), between A and B (在兩者之間), on the corner of (轉角處)」解題。考前速記：直走 Go straight, 左轉 Turn left, 右轉 Turn right；對面 across from, 之間 between A and B！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在臺北捷運站或觀光景點用流暢英語為外國觀光客指引正確方向。",
    "textbookFocus": "康軒：常考城市景點問路（How can I get to the museum? Turn left, go straight, next to...）。 ｜ 南一：側重祈使句指路句型與情態助動詞 can / could you tell me the way to...? 禮貌用語。 ｜ 翰林：側重方位與空間介系詞（across from 對面, between A and B, on the corner of, behind, in front of）。",
    "juniorHighBridge": "國二英文【方向介系詞與祈使句】：複合地方副詞、地圖閱讀素養題型推論。",
    "infographicKey": "info-eng-u3-2",
    "relatedPoints": [
      {
        "id": "kp-eng-u3-1",
        "title": "空間方位介系詞地圖指南",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u3-3",
        "title": "交通工具搭配介系詞",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u4-1",
        "title": "可數名詞與不可數名詞判斷",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "經緯度座標與時區換算",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "跨域空間方位",
        "badgeType": "cross",
        "desc": "問路與空間介系詞 ➔ 地球村經緯坐標與城鎮導航"
      },
      {
        "id": "bridge-eng-u3",
        "isBridge": true,
        "title": "方向介系詞與祈使句",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二英文【方向介系詞與祈使句】：複合地方副詞、地圖閱讀素養題型推論。"
      }
    ]
  },
  {
    "id": "kp-eng-u3-3",
    "pointIndex": 2,
    "unitId": "eng-u3",
    "unitIndex": 2,
    "subjectId": "english",
    "semester": "6A",
    "title": "交通工具搭配介系詞",
    "category": "英語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "交通工具搭配介系詞：by bus / by train / by MRT / on foot (走路用 on foot，切勿誤用 by foot)！",
    "formulaOrRule": "核心工具與心法：Go straight (直走), Turn left/right at the second light (在第二個紅綠燈左/右轉)",
    "strategyTip": "【審題觸發】當題目出現「祈使句指引路線」時，立即啟動「Go straight (直走), Turn left/right at the second light (在第二個紅綠燈左/右轉)」解題。考前速記：直走 Go straight, 左轉 Turn left, 右轉 Turn right；對面 across from, 之間 between A and B！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在臺北捷運站或觀光景點用流暢英語為外國觀光客指引正確方向。",
    "textbookFocus": "康軒：常考城市景點問路（How can I get to the museum? Turn left, go straight, next to...）。 ｜ 南一：側重祈使句指路句型與情態助動詞 can / could you tell me the way to...? 禮貌用語。 ｜ 翰林：側重方位與空間介系詞（across from 對面, between A and B, on the corner of, behind, in front of）。",
    "juniorHighBridge": "國二英文【方向介系詞與祈使句】：複合地方副詞、地圖閱讀素養題型推論。",
    "infographicKey": "info-eng-u3-3",
    "relatedPoints": [
      {
        "id": "kp-eng-u3-1",
        "title": "空間方位介系詞地圖指南",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u3-2",
        "title": "禮貌問路指路金句",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u4-1",
        "title": "可數名詞與不可數名詞判斷",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "經緯度座標與時區換算",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "跨域空間方位",
        "badgeType": "cross",
        "desc": "問路與空間介系詞 ➔ 地球村經緯坐標與城鎮導航"
      },
      {
        "id": "bridge-eng-u3",
        "isBridge": true,
        "title": "方向介系詞與祈使句",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二英文【方向介系詞與祈使句】：複合地方副詞、地圖閱讀素養題型推論。"
      }
    ]
  },
  {
    "id": "kp-eng-u4-1",
    "pointIndex": 0,
    "unitId": "eng-u4",
    "unitIndex": 3,
    "subjectId": "english",
    "semester": "6A",
    "title": "可數名詞與不可數名詞判斷",
    "category": "英語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "可數名詞與不可數名詞判斷：可數名詞加 a/an 或複數 -s (apples, bananas)；不可數液體與粉末用量詞 (a cup of tea, a bottle of water, a slice of pizza)。",
    "formulaOrRule": "核心工具與心法：water, milk, rice, bread, beef, juice（無複數加-s，計量用 a cup of / a slice of）",
    "strategyTip": "【審題觸發】當題目出現「不可數名詞食物判定」時，立即啟動「water, milk, rice, bread, beef, juice（無複數加-s，計量用 a cup of / a slice of）」解題。考前速記：詢問病情：What is wrong? 症狀用 have a cold/fever；情態助動詞 should 後接原形動詞！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在國外西餐廳點餐確認餐點分量、在國外藥局向藥劑師清楚描述個人身體不適症狀。",
    "textbookFocus": "康軒：常考身體不適就醫問答（What is wrong with you? I have a headache/stomachache/fever.）。 ｜ 南一：側重可數名詞與不可數名詞（water, juice, medicine）搭配 some/any 與量詞之辨別。 ｜ 翰林：側重飲食均衡建議（You should drink more water / take a rest. You should not eat too much fast food.）。",
    "juniorHighBridge": "國一英文【名詞單複數與數量詞】：how many (可數) vs how much (不可數/價格)、量詞片語。",
    "infographicKey": "info-eng-u4-1",
    "relatedPoints": [
      {
        "id": "kp-eng-u4-2",
        "title": "身體不適症狀表達",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u4-3",
        "title": "照顧與就醫給予建議",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u5-1",
        "title": "中西重要節慶文化比較",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "bridge-eng-u4",
        "isBridge": true,
        "title": "名詞單複數與數量詞",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一英文【名詞單複數與數量詞】：how many (可數) vs how much (不可數/價格)、量詞片語。"
      }
    ]
  },
  {
    "id": "kp-eng-u4-2",
    "pointIndex": 1,
    "unitId": "eng-u4",
    "unitIndex": 3,
    "subjectId": "english",
    "semester": "6A",
    "title": "身體不適症狀表達",
    "category": "英語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "身體不適症狀表達：I have a headache / toothache / stomachache / sore throat / fever.",
    "formulaOrRule": "核心工具與心法：I have a fever / headache / stomachache / toothache",
    "strategyTip": "【審題觸發】當題目出現「表達身體生病不舒服」時，立即啟動「I have a fever / headache / stomachache / toothache」解題。考前速記：詢問病情：What is wrong? 症狀用 have a cold/fever；情態助動詞 should 後接原形動詞！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在國外西餐廳點餐確認餐點分量、在國外藥局向藥劑師清楚描述個人身體不適症狀。",
    "textbookFocus": "康軒：常考身體不適就醫問答（What is wrong with you? I have a headache/stomachache/fever.）。 ｜ 南一：側重可數名詞與不可數名詞（water, juice, medicine）搭配 some/any 與量詞之辨別。 ｜ 翰林：側重飲食均衡建議（You should drink more water / take a rest. You should not eat too much fast food.）。",
    "juniorHighBridge": "國一英文【名詞單複數與數量詞】：how many (可數) vs how much (不可數/價格)、量詞片語。",
    "infographicKey": "info-eng-u4-2",
    "relatedPoints": [
      {
        "id": "kp-eng-u4-1",
        "title": "可數名詞與不可數名詞判斷",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u4-3",
        "title": "照顧與就醫給予建議",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u5-1",
        "title": "中西重要節慶文化比較",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "bridge-eng-u4",
        "isBridge": true,
        "title": "名詞單複數與數量詞",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一英文【名詞單複數與數量詞】：how many (可數) vs how much (不可數/價格)、量詞片語。"
      }
    ]
  },
  {
    "id": "kp-eng-u4-3",
    "pointIndex": 2,
    "unitId": "eng-u4",
    "unitIndex": 3,
    "subjectId": "english",
    "semester": "6A",
    "title": "照顧與就醫給予建議",
    "category": "英語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "照顧與就醫給予建議：情態助動詞 should / shouldn't 後接「原形動詞」 (You should drink more water and take a rest)。",
    "formulaOrRule": "核心工具與心法：You should drink plenty of water and take a good rest.",
    "strategyTip": "【審題觸發】當題目出現「給予保健建議句型」時，立即啟動「You should drink plenty of water and take a good rest.」解題。考前速記：詢問病情：What is wrong? 症狀用 have a cold/fever；情態助動詞 should 後接原形動詞！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在國外西餐廳點餐確認餐點分量、在國外藥局向藥劑師清楚描述個人身體不適症狀。",
    "textbookFocus": "康軒：常考身體不適就醫問答（What is wrong with you? I have a headache/stomachache/fever.）。 ｜ 南一：側重可數名詞與不可數名詞（water, juice, medicine）搭配 some/any 與量詞之辨別。 ｜ 翰林：側重飲食均衡建議（You should drink more water / take a rest. You should not eat too much fast food.）。",
    "juniorHighBridge": "國一英文【名詞單複數與數量詞】：how many (可數) vs how much (不可數/價格)、量詞片語。",
    "infographicKey": "info-eng-u4-3",
    "relatedPoints": [
      {
        "id": "kp-eng-u4-1",
        "title": "可數名詞與不可數名詞判斷",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u4-2",
        "title": "身體不適症狀表達",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u5-1",
        "title": "中西重要節慶文化比較",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "bridge-eng-u4",
        "isBridge": true,
        "title": "名詞單複數與數量詞",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一英文【名詞單複數與數量詞】：how many (可數) vs how much (不可數/價格)、量詞片語。"
      }
    ]
  },
  {
    "id": "kp-eng-u5-1",
    "pointIndex": 0,
    "unitId": "eng-u5",
    "unitIndex": 4,
    "subjectId": "english",
    "semester": "6B",
    "title": "中西重要節慶文化比較",
    "category": "英語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "中西重要節慶文化比較：農曆新年 (Lunar New Year)、端午節 (Dragon Boat Festival)、萬聖節 (Halloween - trick or treat)、聖誕節 (Christmas)。",
    "formulaOrRule": "核心工具與心法：Halloween (trick or treat/jack-o-lantern), Christmas (Santa/carols), Easter (eggs/bunny)",
    "strategyTip": "【審題觸發】當題目出現「西方三大節慶特色標誌」時，立即啟動「Halloween (trick or treat/jack-o-lantern), Christmas (Santa/carols), Easter (eggs/bunny)」解題。考前速記：時間介系詞心法：in 年月季節（in May），on 具體某天（on Monday, on May 5th），at 具體時刻（at 3:00）！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】接待國外交換學生參訪臺灣傳統民俗節慶、製作全英語跨文化新年電子賀卡。",
    "textbookFocus": "康軒：常考東西方節慶文化（Christmas, Halloween, Chinese New Year, Dragon Boat Festival）活動與習俗。 ｜ 南一：側重問句 When is ...? 與序數（first, second, third, fourth...）及月份拼寫。 ｜ 翰林：側重時間介系詞精準搭配（in 年月季節、on 特定日子星期、at 具體鐘點時刻）。",
    "juniorHighBridge": "國二英文【情態助動詞與從屬連接詞】：must / have to / should 語氣強度差異與 when/before/after 敘事。",
    "infographicKey": "info-eng-u5-1",
    "relatedPoints": [
      {
        "id": "kp-eng-u5-2",
        "title": "節慶傳統活動與文化特色",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u5-3",
        "title": "節慶問候祝福語句型",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u6-1",
        "title": "英語長母音 Magic E 規則",
        "unitId": "eng-u6",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "bridge-eng-u5",
        "isBridge": true,
        "title": "情態助動詞與從屬連接詞",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二英文【情態助動詞與從屬連接詞】：must / have to / should 語氣強度差異與 when/before/after 敘事。"
      }
    ]
  },
  {
    "id": "kp-eng-u5-2",
    "pointIndex": 1,
    "unitId": "eng-u5",
    "unitIndex": 4,
    "subjectId": "english",
    "semester": "6B",
    "title": "節慶傳統活動與文化特色",
    "category": "英語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "節慶傳統活動與文化特色：eat mooncakes, wear costumes, give red envelopes, decorate the Christmas tree.",
    "formulaOrRule": "核心工具與心法：Lunar New Year (red envelopes), Dragon Boat Festival (dragon boat race/rice dumplings)",
    "strategyTip": "【審題觸發】當題目出現「臺灣傳統節慶英語介紹」時，立即啟動「Lunar New Year (red envelopes), Dragon Boat Festival (dragon boat race/rice dumplings)」解題。考前速記：時間介系詞心法：in 年月季節（in May），on 具體某天（on Monday, on May 5th），at 具體時刻（at 3:00）！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】接待國外交換學生參訪臺灣傳統民俗節慶、製作全英語跨文化新年電子賀卡。",
    "textbookFocus": "康軒：常考東西方節慶文化（Christmas, Halloween, Chinese New Year, Dragon Boat Festival）活動與習俗。 ｜ 南一：側重問句 When is ...? 與序數（first, second, third, fourth...）及月份拼寫。 ｜ 翰林：側重時間介系詞精準搭配（in 年月季節、on 特定日子星期、at 具體鐘點時刻）。",
    "juniorHighBridge": "國二英文【情態助動詞與從屬連接詞】：must / have to / should 語氣強度差異與 when/before/after 敘事。",
    "infographicKey": "info-eng-u5-2",
    "relatedPoints": [
      {
        "id": "kp-eng-u5-1",
        "title": "中西重要節慶文化比較",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u5-3",
        "title": "節慶問候祝福語句型",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u6-1",
        "title": "英語長母音 Magic E 規則",
        "unitId": "eng-u6",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "bridge-eng-u5",
        "isBridge": true,
        "title": "情態助動詞與從屬連接詞",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二英文【情態助動詞與從屬連接詞】：must / have to / should 語氣強度差異與 when/before/after 敘事。"
      }
    ]
  },
  {
    "id": "kp-eng-u5-3",
    "pointIndex": 2,
    "unitId": "eng-u5",
    "unitIndex": 4,
    "subjectId": "english",
    "semester": "6B",
    "title": "節慶問候祝福語句型",
    "category": "英語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "節慶問候祝福語句型：\"Happy New Year!\" / \"Merry Christmas!\" / \"Wishing you a wonderful holiday!\"",
    "formulaOrRule": "核心工具與心法：Merry Christmas! / Happy New Year! / Wishing you joy and prosperity!",
    "strategyTip": "【審題觸發】當題目出現「節慶祝賀語」時，立即啟動「Merry Christmas! / Happy New Year! / Wishing you joy and prosperity!」解題。考前速記：時間介系詞心法：in 年月季節（in May），on 具體某天（on Monday, on May 5th），at 具體時刻（at 3:00）！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】接待國外交換學生參訪臺灣傳統民俗節慶、製作全英語跨文化新年電子賀卡。",
    "textbookFocus": "康軒：常考東西方節慶文化（Christmas, Halloween, Chinese New Year, Dragon Boat Festival）活動與習俗。 ｜ 南一：側重問句 When is ...? 與序數（first, second, third, fourth...）及月份拼寫。 ｜ 翰林：側重時間介系詞精準搭配（in 年月季節、on 特定日子星期、at 具體鐘點時刻）。",
    "juniorHighBridge": "國二英文【情態助動詞與從屬連接詞】：must / have to / should 語氣強度差異與 when/before/after 敘事。",
    "infographicKey": "info-eng-u5-3",
    "relatedPoints": [
      {
        "id": "kp-eng-u5-1",
        "title": "中西重要節慶文化比較",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u5-2",
        "title": "節慶傳統活動與文化特色",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u6-1",
        "title": "英語長母音 Magic E 規則",
        "unitId": "eng-u6",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "bridge-eng-u5",
        "isBridge": true,
        "title": "情態助動詞與從屬連接詞",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二英文【情態助動詞與從屬連接詞】：must / have to / should 語氣強度差異與 when/before/after 敘事。"
      }
    ]
  },
  {
    "id": "kp-eng-u6-1",
    "pointIndex": 0,
    "unitId": "eng-u6",
    "unitIndex": 5,
    "subjectId": "english",
    "semester": "6B",
    "title": "英語長母音 Magic E 規則",
    "category": "英語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "英語長母音 Magic E 規則：單字字尾有不發音的 e，前方母音發長母音本名音 (cake, bike, home, cute)。",
    "formulaOrRule": "核心工具與心法：字尾有不發音的 e，前方母音發長母音本名音（如 hate, fine, home, cute）",
    "strategyTip": "【審題觸發】當題目出現「Magic e (CVCe) 長母音規則」時，立即啟動「字尾有不發音的 e，前方母音發長母音本名音（如 hate, fine, home, cute）」解題。考前速記：母音加 e 長母音發原音；先看問題抓關鍵字，再去文章掃描定位找答案！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】自行看懂全英語原文書籍繪本、閱讀進口零食背面的英文成分表與使用說明。",
    "textbookFocus": "康軒：常考長篇生活閱讀短文素養題、圖表菜單火車票判讀與尋找文章細節 (Scanning & Skimming)。 ｜ 南一：側重升中銜接 1200 必考核心字彙詞性（名詞、動詞、形容詞、副詞）之語意填空。 ｜ 翰林：側重自然拼讀法 (Phonics) 長短母音對照（a_e, ee, ea, igh, oa）與常見複合子音（ch, sh, th, ph）。",
    "juniorHighBridge": "國中會考英文科【長篇閱讀理解題型】：素養圖表混合題、克漏字測驗、推論作者態度與主旨。",
    "infographicKey": "info-eng-u6-1",
    "relatedPoints": [
      {
        "id": "kp-eng-u6-2",
        "title": "高效閱讀雙策略",
        "unitId": "eng-u6",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u6-3",
        "title": "字首與字尾衍生構詞法",
        "unitId": "eng-u6",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u7-1",
        "title": "未來式雙軌句型本質",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "bridge-eng-u6",
        "isBridge": true,
        "title": "長篇閱讀理解題型",
        "unitId": "eng-u6",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考英文科【長篇閱讀理解題型】：素養圖表混合題、克漏字測驗、推論作者態度與主旨。"
      }
    ]
  },
  {
    "id": "kp-eng-u6-2",
    "pointIndex": 1,
    "unitId": "eng-u6",
    "unitIndex": 5,
    "subjectId": "english",
    "semester": "6B",
    "title": "高效閱讀雙策略",
    "category": "英語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "高效閱讀雙策略：Skimming（略讀抓取文章大意與段落主題）與 Scanning（掃讀精準定位人名、數字、關鍵事實）。",
    "formulaOrRule": "核心工具與心法：仔細閱讀文章標題 (Title) 與第一段首尾句，避免被局部細節誤導",
    "strategyTip": "【審題觸發】當題目出現「閱讀短文抓核心主旨題 (Main Idea)」時，立即啟動「仔細閱讀文章標題 (Title) 與第一段首尾句，避免被局部細節誤導」解題。考前速記：母音加 e 長母音發原音；先看問題抓關鍵字，再去文章掃描定位找答案！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】自行看懂全英語原文書籍繪本、閱讀進口零食背面的英文成分表與使用說明。",
    "textbookFocus": "康軒：常考長篇生活閱讀短文素養題、圖表菜單火車票判讀與尋找文章細節 (Scanning & Skimming)。 ｜ 南一：側重升中銜接 1200 必考核心字彙詞性（名詞、動詞、形容詞、副詞）之語意填空。 ｜ 翰林：側重自然拼讀法 (Phonics) 長短母音對照（a_e, ee, ea, igh, oa）與常見複合子音（ch, sh, th, ph）。",
    "juniorHighBridge": "國中會考英文科【長篇閱讀理解題型】：素養圖表混合題、克漏字測驗、推論作者態度與主旨。",
    "infographicKey": "info-eng-u6-2",
    "relatedPoints": [
      {
        "id": "kp-eng-u6-1",
        "title": "英語長母音 Magic E 規則",
        "unitId": "eng-u6",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u6-3",
        "title": "字首與字尾衍生構詞法",
        "unitId": "eng-u6",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u7-1",
        "title": "未來式雙軌句型本質",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "bridge-eng-u6",
        "isBridge": true,
        "title": "長篇閱讀理解題型",
        "unitId": "eng-u6",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考英文科【長篇閱讀理解題型】：素養圖表混合題、克漏字測驗、推論作者態度與主旨。"
      }
    ]
  },
  {
    "id": "kp-eng-u6-3",
    "pointIndex": 2,
    "unitId": "eng-u6",
    "unitIndex": 5,
    "subjectId": "english",
    "semester": "6B",
    "title": "字首與字尾衍生構詞法",
    "category": "英語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "字首與字尾衍生構詞法：字首 un-/dis- 表示相反否定；字尾 -ful 表示充滿 (-less 表示無)；字尾 -ly 將形容詞轉化為副詞。",
    "formulaOrRule": "核心工具與心法：尋找前後句中的同義詞、對比詞（but/however）或舉例解釋",
    "strategyTip": "【審題觸發】當題目出現「推論生詞詞義技巧 (Context Clues)」時，立即啟動「尋找前後句中的同義詞、對比詞（but/however）或舉例解釋」解題。考前速記：母音加 e 長母音發原音；先看問題抓關鍵字，再去文章掃描定位找答案！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】自行看懂全英語原文書籍繪本、閱讀進口零食背面的英文成分表與使用說明。",
    "textbookFocus": "康軒：常考長篇生活閱讀短文素養題、圖表菜單火車票判讀與尋找文章細節 (Scanning & Skimming)。 ｜ 南一：側重升中銜接 1200 必考核心字彙詞性（名詞、動詞、形容詞、副詞）之語意填空。 ｜ 翰林：側重自然拼讀法 (Phonics) 長短母音對照（a_e, ee, ea, igh, oa）與常見複合子音（ch, sh, th, ph）。",
    "juniorHighBridge": "國中會考英文科【長篇閱讀理解題型】：素養圖表混合題、克漏字測驗、推論作者態度與主旨。",
    "infographicKey": "info-eng-u6-3",
    "relatedPoints": [
      {
        "id": "kp-eng-u6-1",
        "title": "英語長母音 Magic E 規則",
        "unitId": "eng-u6",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u6-2",
        "title": "高效閱讀雙策略",
        "unitId": "eng-u6",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u7-1",
        "title": "未來式雙軌句型本質",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "bridge-eng-u6",
        "isBridge": true,
        "title": "長篇閱讀理解題型",
        "unitId": "eng-u6",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中會考英文科【長篇閱讀理解題型】：素養圖表混合題、克漏字測驗、推論作者態度與主旨。"
      }
    ]
  },
  {
    "id": "kp-eng-u7-1",
    "pointIndex": 0,
    "unitId": "eng-u7",
    "unitIndex": 6,
    "subjectId": "english",
    "semester": "6B",
    "title": "未來式雙軌句型本質",
    "category": "英語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "未來式雙軌句型本質：will + 原形動詞（臨時即時決定或客觀預測）；be going to + 原形動詞（事先經過思考的計畫與安排）。",
    "formulaOrRule": "核心工具與心法：tomorrow, next week, in the future, soon",
    "strategyTip": "【審題觸發】當題目出現「未來時間副詞關鍵信號」時，立即啟動「tomorrow, next week, in the future, soon」解題。考前速記：未來式 will 或 be going to 後面一律接原形動詞！職業名詞母音開頭記得加 an！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】撰寫全英語國中學習先修計畫目標、用英語向師長分享自己的未來志向與職業抱負。",
    "textbookFocus": "康軒：常考未來計畫與夢想職業（What do you want to be in the future? I want to be a doctor.）。 ｜ 南一：側重 want to be 與 would like to be 句型後接職業名詞加不定冠詞 a/an（an engineer, a pilot）。 ｜ 翰林：側重未來式句型（will + 原形動詞 與 be going to + 原形動詞）之肯定、否定與疑問句。",
    "juniorHighBridge": "國二英文【未來式與條件副詞子句】：will / be going to 與 if/when 引導之副詞子句（現在式代替未來式）。",
    "infographicKey": "info-eng-u7-1",
    "relatedPoints": [
      {
        "id": "kp-eng-u7-2",
        "title": "未來時間副詞指針",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u7-3",
        "title": "夢想職業志向問答",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u8-1",
        "title": "形容詞比較級變化與 than 句型",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "bridge-eng-u7",
        "isBridge": true,
        "title": "未來式與條件副詞子句",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二英文【未來式與條件副詞子句】：will / be going to 與 if/when 引導之副詞子句（現在式代替未來式）。"
      }
    ]
  },
  {
    "id": "kp-eng-u7-2",
    "pointIndex": 1,
    "unitId": "eng-u7",
    "unitIndex": 6,
    "subjectId": "english",
    "semester": "6B",
    "title": "未來時間副詞指針",
    "category": "英語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "未來時間副詞指針：tomorrow, next week, in the future, this weekend 常搭配未來式時態。",
    "formulaOrRule": "核心工具與心法：I will help you. (當下主動提供幫助) vs Look at the dark clouds! It is going to rain. (已有跡象即將發生)",
    "strategyTip": "【審題觸發】當題目出現「will vs be going to 語意辨析」時，立即啟動「I will help you. (當下主動提供幫助) vs Look at the dark clouds! It is going to rain. (已有跡象即將發生)」解題。考前速記：未來式 will 或 be going to 後面一律接原形動詞！職業名詞母音開頭記得加 an！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】撰寫全英語國中學習先修計畫目標、用英語向師長分享自己的未來志向與職業抱負。",
    "textbookFocus": "康軒：常考未來計畫與夢想職業（What do you want to be in the future? I want to be a doctor.）。 ｜ 南一：側重 want to be 與 would like to be 句型後接職業名詞加不定冠詞 a/an（an engineer, a pilot）。 ｜ 翰林：側重未來式句型（will + 原形動詞 與 be going to + 原形動詞）之肯定、否定與疑問句。",
    "juniorHighBridge": "國二英文【未來式與條件副詞子句】：will / be going to 與 if/when 引導之副詞子句（現在式代替未來式）。",
    "infographicKey": "info-eng-u7-2",
    "relatedPoints": [
      {
        "id": "kp-eng-u7-1",
        "title": "未來式雙軌句型本質",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u7-3",
        "title": "夢想職業志向問答",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u8-1",
        "title": "形容詞比較級變化與 than 句型",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "bridge-eng-u7",
        "isBridge": true,
        "title": "未來式與條件副詞子句",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二英文【未來式與條件副詞子句】：will / be going to 與 if/when 引導之副詞子句（現在式代替未來式）。"
      }
    ]
  },
  {
    "id": "kp-eng-u7-3",
    "pointIndex": 2,
    "unitId": "eng-u7",
    "unitIndex": 6,
    "subjectId": "english",
    "semester": "6B",
    "title": "夢想職業志向問答",
    "category": "英語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "夢想職業志向問答：\"What do you want to be in the future?\" ➔ \"I want to be an engineer / architect / doctor.\"",
    "formulaOrRule": "核心工具與心法：What do you want to be in the future? / I want to be an engineer.",
    "strategyTip": "【審題觸發】當題目出現「詢問未來的夢想與計畫句型」時，立即啟動「What do you want to be in the future? / I want to be an engineer.」解題。考前速記：未來式 will 或 be going to 後面一律接原形動詞！職業名詞母音開頭記得加 an！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】撰寫全英語國中學習先修計畫目標、用英語向師長分享自己的未來志向與職業抱負。",
    "textbookFocus": "康軒：常考未來計畫與夢想職業（What do you want to be in the future? I want to be a doctor.）。 ｜ 南一：側重 want to be 與 would like to be 句型後接職業名詞加不定冠詞 a/an（an engineer, a pilot）。 ｜ 翰林：側重未來式句型（will + 原形動詞 與 be going to + 原形動詞）之肯定、否定與疑問句。",
    "juniorHighBridge": "國二英文【未來式與條件副詞子句】：will / be going to 與 if/when 引導之副詞子句（現在式代替未來式）。",
    "infographicKey": "info-eng-u7-3",
    "relatedPoints": [
      {
        "id": "kp-eng-u7-1",
        "title": "未來式雙軌句型本質",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u7-2",
        "title": "未來時間副詞指針",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u8-1",
        "title": "形容詞比較級變化與 than 句型",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "bridge-eng-u7",
        "isBridge": true,
        "title": "未來式與條件副詞子句",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二英文【未來式與條件副詞子句】：will / be going to 與 if/when 引導之副詞子句（現在式代替未來式）。"
      }
    ]
  },
  {
    "id": "kp-eng-u8-1",
    "pointIndex": 0,
    "unitId": "eng-u8",
    "unitIndex": 7,
    "subjectId": "english",
    "semester": "6B",
    "title": "形容詞比較級變化與 than 句型",
    "category": "英語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "形容詞比較級變化與 than 句型：單音節加 -er (tall ➔ taller than)；短母音加子音重複字尾 (big ➔ bigger)；三音節以上加 more (more beautiful than)。",
    "formulaOrRule": "核心工具與心法：句子必有 than；單音節加 -er（taller），三音節以上加 more（more beautiful）",
    "strategyTip": "【審題觸發】當題目出現「比較級關鍵信號詞與字尾規則」時，立即啟動「句子必有 than；單音節加 -er（taller），三音節以上加 more（more beautiful）」解題。考前速記：兩者比較加 -er than，三者以上 the 最高級 -est；長字多音節前面加 more 與 the most！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】用英語比較兩款智慧型手機性價比、向外國友人介紹臺灣最高峰玉山與台北101大樓。",
    "textbookFocus": "康軒：常考世界奇景與動物之比較（The blue whale is bigger than the elephant.）。 ｜ 南一：側重「as ... as 和...一樣」同級比較句型，以及最高級前方必加定冠詞「the」之鐵律。 ｜ 翰林：側重形容詞比較級與最高級變化規則（+er/+est, 字尾 y 變 i 加 er, 雙母音加 more/most, good-better-best）。",
    "juniorHighBridge": "國二英文【形容詞與副詞之三級變化】：同級比較、最高級替代句型（A is taller than any other student）。",
    "infographicKey": "info-eng-u8-1",
    "relatedPoints": [
      {
        "id": "kp-eng-u8-2",
        "title": "形容詞最高級變化與 the 句型",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u8-3",
        "title": "世界之最與素養描述",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u7-1",
        "title": "未來式雙軌句型本質",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：英語・觀念本質與定義"
      },
      {
        "id": "kp-math-u4-1",
        "title": "比的前項與後項同乘或同除以不為…",
        "unitId": "math-u4",
        "subjectId": "math",
        "relation": "跨域量化比較",
        "badgeType": "cross",
        "desc": "形容詞比較級最高級 ➔ 數學比與比值倍數比較"
      },
      {
        "id": "bridge-eng-u8",
        "isBridge": true,
        "title": "形容詞與副詞之三級變化",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二英文【形容詞與副詞之三級變化】：同級比較、最高級替代句型（A is taller than any other student）。"
      }
    ]
  },
  {
    "id": "kp-eng-u8-2",
    "pointIndex": 1,
    "unitId": "eng-u8",
    "unitIndex": 7,
    "subjectId": "english",
    "semester": "6B",
    "title": "形容詞最高級變化與 the 句型",
    "category": "英語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "形容詞最高級變化與 the 句型：單音節加 -est (the tallest)；多音節加 the most (the most exciting)；句尾常接 in Taiwan 或 of all。",
    "formulaOrRule": "核心工具與心法：前面必加 the；單音節加 -est，三音節以上加 most；範圍片語 in the world / of all",
    "strategyTip": "【審題觸發】當題目出現「最高級關鍵信號詞」時，立即啟動「前面必加 the；單音節加 -est，三音節以上加 most；範圍片語 in the world / of all」解題。考前速記：兩者比較加 -er than，三者以上 the 最高級 -est；長字多音節前面加 more 與 the most！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】用英語比較兩款智慧型手機性價比、向外國友人介紹臺灣最高峰玉山與台北101大樓。",
    "textbookFocus": "康軒：常考世界奇景與動物之比較（The blue whale is bigger than the elephant.）。 ｜ 南一：側重「as ... as 和...一樣」同級比較句型，以及最高級前方必加定冠詞「the」之鐵律。 ｜ 翰林：側重形容詞比較級與最高級變化規則（+er/+est, 字尾 y 變 i 加 er, 雙母音加 more/most, good-better-best）。",
    "juniorHighBridge": "國二英文【形容詞與副詞之三級變化】：同級比較、最高級替代句型（A is taller than any other student）。",
    "infographicKey": "info-eng-u8-2",
    "relatedPoints": [
      {
        "id": "kp-eng-u8-1",
        "title": "形容詞比較級變化與 than 句型",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u8-3",
        "title": "世界之最與素養描述",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u7-1",
        "title": "未來式雙軌句型本質",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：英語・觀念本質與定義"
      },
      {
        "id": "kp-math-u4-1",
        "title": "比的前項與後項同乘或同除以不為…",
        "unitId": "math-u4",
        "subjectId": "math",
        "relation": "跨域量化比較",
        "badgeType": "cross",
        "desc": "形容詞比較級最高級 ➔ 數學比與比值倍數比較"
      },
      {
        "id": "bridge-eng-u8",
        "isBridge": true,
        "title": "形容詞與副詞之三級變化",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二英文【形容詞與副詞之三級變化】：同級比較、最高級替代句型（A is taller than any other student）。"
      }
    ]
  },
  {
    "id": "kp-eng-u8-3",
    "pointIndex": 2,
    "unitId": "eng-u8",
    "unitIndex": 7,
    "subjectId": "english",
    "semester": "6B",
    "title": "世界之最與素養描述",
    "category": "英語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "世界之最與素養描述：Mount Everest is the highest mountain in the world; the Pacific Ocean is the largest ocean.",
    "formulaOrRule": "核心工具與心法：good ➔ better ➔ best；bad ➔ worse ➔ worst；many/much ➔ more ➔ most",
    "strategyTip": "【審題觸發】當題目出現「不規則三級變化大考必考天王」時，立即啟動「good ➔ better ➔ best；bad ➔ worse ➔ worst；many/much ➔ more ➔ most」解題。考前速記：兩者比較加 -er than，三者以上 the 最高級 -est；長字多音節前面加 more 與 the most！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】用英語比較兩款智慧型手機性價比、向外國友人介紹臺灣最高峰玉山與台北101大樓。",
    "textbookFocus": "康軒：常考世界奇景與動物之比較（The blue whale is bigger than the elephant.）。 ｜ 南一：側重「as ... as 和...一樣」同級比較句型，以及最高級前方必加定冠詞「the」之鐵律。 ｜ 翰林：側重形容詞比較級與最高級變化規則（+er/+est, 字尾 y 變 i 加 er, 雙母音加 more/most, good-better-best）。",
    "juniorHighBridge": "國二英文【形容詞與副詞之三級變化】：同級比較、最高級替代句型（A is taller than any other student）。",
    "infographicKey": "info-eng-u8-3",
    "relatedPoints": [
      {
        "id": "kp-eng-u8-1",
        "title": "形容詞比較級變化與 than 句型",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u8-2",
        "title": "形容詞最高級變化與 the 句型",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u7-1",
        "title": "未來式雙軌句型本質",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：英語・觀念本質與定義"
      },
      {
        "id": "kp-math-u4-1",
        "title": "比的前項與後項同乘或同除以不為…",
        "unitId": "math-u4",
        "subjectId": "math",
        "relation": "跨域量化比較",
        "badgeType": "cross",
        "desc": "形容詞比較級最高級 ➔ 數學比與比值倍數比較"
      },
      {
        "id": "bridge-eng-u8",
        "isBridge": true,
        "title": "形容詞與副詞之三級變化",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二英文【形容詞與副詞之三級變化】：同級比較、最高級替代句型（A is taller than any other student）。"
      }
    ]
  },
  {
    "id": "kp-art-u1-1",
    "pointIndex": 0,
    "unitId": "art-u1",
    "unitIndex": 0,
    "subjectId": "arts",
    "semester": "6A",
    "title": "色彩三要素本質",
    "category": "藝術・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "色彩三要素本質：色相（色彩名稱相貌）、明度（色彩明暗程度，加白變亮/加黑變暗）、彩度（色彩純度飽和度）。",
    "formulaOrRule": "核心工具與心法：紅黃藍為色料三原色；色相環180°相對為互補色（如紅配綠，視覺對比最強烈）",
    "strategyTip": "【審題觸發】當題目出現「三原色與互補色對比效果」時，立即啟動「紅黃藍為色料三原色；色相環180°相對為互補色（如紅配綠，視覺對比最強烈）」解題。考前速記：近大遠小消失於視平線；色相明度彩度三要素；對比互補色創造最強視覺震撼！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】攝影構圖拍照更吸睛有層次、個人服裝穿搭和諧對比色彩配置、居家房間空間佈置。",
    "textbookFocus": "康軒：常考色彩三要素（色相-顏色名稱、明度-明暗深淺、彩度-鮮豔純度）之色彩學生活應用。 ｜ 南一：側重對比色（互補色如紅配綠、藍配橙、黃配紫強烈對比）與調和色之視覺張力。 ｜ 翰林：側重單點透視與兩點透視法（消失點、視平線）在空間繪畫構圖中的景深呈現。",
    "juniorHighBridge": "國中視覺藝術【造形藝術美學】：造形原理（對稱、均衡、節奏、漸變、統一）、近代西方繪畫流派欣賞。",
    "infographicKey": "info-art-u1-1",
    "relatedPoints": [
      {
        "id": "kp-art-u1-2",
        "title": "十二色相環與互補色對比",
        "unitId": "art-u1",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u1-3",
        "title": "視覺構圖經典三分法則",
        "unitId": "art-u1",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u2-1",
        "title": "音樂三要素黃金三角",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：藝術・觀念本質與定義"
      },
      {
        "id": "bridge-art-u1",
        "isBridge": true,
        "title": "造形藝術美學",
        "unitId": "art-u1",
        "subjectId": "arts",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中視覺藝術【造形藝術美學】：造形原理（對稱、均衡、節奏、漸變、統一）、近代西方繪畫流派欣賞。"
      }
    ]
  },
  {
    "id": "kp-art-u1-2",
    "pointIndex": 1,
    "unitId": "art-u1",
    "unitIndex": 0,
    "subjectId": "arts",
    "semester": "6A",
    "title": "十二色相環與互補色對比",
    "category": "藝術・運算算理與公式",
    "badgeColor": "amber",
    "definition": "十二色相環與互補色對比：紅黃藍為色料三原色；色相環對角線 $180^\\circ$ 相對者為「互補色」（紅配綠、黃配紫、藍配橙），視覺對比最為強烈。",
    "formulaOrRule": "紅黃藍為色料三原色；色相環對角線 $180^\\circ$ 相對者為「互補色」（紅配綠、黃配紫、藍配橙），視覺對比最為強烈。",
    "strategyTip": "【審題觸發】當題目出現「暖色調 vs 冷色調情感聯想」時，立即啟動「紅橙黃熱情溫暖前進感；藍綠紫沉靜涼爽後退空間感」解題。考前速記：近大遠小消失於視平線；色相明度彩度三要素；對比互補色創造最強視覺震撼！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】攝影構圖拍照更吸睛有層次、個人服裝穿搭和諧對比色彩配置、居家房間空間佈置。",
    "textbookFocus": "康軒：常考色彩三要素（色相-顏色名稱、明度-明暗深淺、彩度-鮮豔純度）之色彩學生活應用。 ｜ 南一：側重對比色（互補色如紅配綠、藍配橙、黃配紫強烈對比）與調和色之視覺張力。 ｜ 翰林：側重單點透視與兩點透視法（消失點、視平線）在空間繪畫構圖中的景深呈現。",
    "juniorHighBridge": "國中視覺藝術【造形藝術美學】：造形原理（對稱、均衡、節奏、漸變、統一）、近代西方繪畫流派欣賞。",
    "infographicKey": "info-art-u1-2",
    "relatedPoints": [
      {
        "id": "kp-art-u1-1",
        "title": "色彩三要素本質",
        "unitId": "art-u1",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u1-3",
        "title": "視覺構圖經典三分法則",
        "unitId": "art-u1",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u2-1",
        "title": "音樂三要素黃金三角",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：藝術・觀念本質與定義"
      },
      {
        "id": "bridge-art-u1",
        "isBridge": true,
        "title": "造形藝術美學",
        "unitId": "art-u1",
        "subjectId": "arts",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中視覺藝術【造形藝術美學】：造形原理（對稱、均衡、節奏、漸變、統一）、近代西方繪畫流派欣賞。"
      }
    ]
  },
  {
    "id": "kp-art-u1-3",
    "pointIndex": 2,
    "unitId": "art-u1",
    "unitIndex": 0,
    "subjectId": "arts",
    "semester": "6A",
    "title": "視覺構圖經典三分法則",
    "category": "藝術・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "視覺構圖經典三分法則：將畫面橫直各畫兩條線分成九宮格，將視覺主體置於「黃金交叉點」最具生動美感。",
    "formulaOrRule": "核心工具與心法：近大遠小、物體線條最終匯聚於地平線上的「消失點 (Vanishing Point)」",
    "strategyTip": "【審題觸發】當題目出現「文藝復興透視法原理」時，立即啟動「近大遠小、物體線條最終匯聚於地平線上的「消失點 (Vanishing Point)」」解題。考前速記：近大遠小消失於視平線；色相明度彩度三要素；對比互補色創造最強視覺震撼！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】攝影構圖拍照更吸睛有層次、個人服裝穿搭和諧對比色彩配置、居家房間空間佈置。",
    "textbookFocus": "康軒：常考色彩三要素（色相-顏色名稱、明度-明暗深淺、彩度-鮮豔純度）之色彩學生活應用。 ｜ 南一：側重對比色（互補色如紅配綠、藍配橙、黃配紫強烈對比）與調和色之視覺張力。 ｜ 翰林：側重單點透視與兩點透視法（消失點、視平線）在空間繪畫構圖中的景深呈現。",
    "juniorHighBridge": "國中視覺藝術【造形藝術美學】：造形原理（對稱、均衡、節奏、漸變、統一）、近代西方繪畫流派欣賞。",
    "infographicKey": "info-art-u1-3",
    "relatedPoints": [
      {
        "id": "kp-art-u1-1",
        "title": "色彩三要素本質",
        "unitId": "art-u1",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u1-2",
        "title": "十二色相環與互補色對比",
        "unitId": "art-u1",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u2-1",
        "title": "音樂三要素黃金三角",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：藝術・觀念本質與定義"
      },
      {
        "id": "bridge-art-u1",
        "isBridge": true,
        "title": "造形藝術美學",
        "unitId": "art-u1",
        "subjectId": "arts",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中視覺藝術【造形藝術美學】：造形原理（對稱、均衡、節奏、漸變、統一）、近代西方繪畫流派欣賞。"
      }
    ]
  },
  {
    "id": "kp-art-u2-1",
    "pointIndex": 0,
    "unitId": "art-u2",
    "unitIndex": 1,
    "subjectId": "arts",
    "semester": "6A",
    "title": "音樂三要素黃金三角",
    "category": "藝術・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "音樂三要素黃金三角：旋律（音符高低起伏如歌聲線條）、節奏（拍子長短強弱脈動）、和聲（多個音同時響起之和諧色彩）。",
    "formulaOrRule": "核心工具與心法：弦樂（小提琴/大提琴）、木管（長笛/單簧管）、銅管（小號/法國號）、打擊（定音鼓/三角鐵）",
    "strategyTip": "【審題觸發】當題目出現「管弦樂團四大樂器家族成員分辨」時，立即啟動「弦樂（小提琴/大提琴）、木管（長笛/單簧管）、銅管（小號/法國號）、打擊（定音鼓/三角鐵）」解題。考前速記：弦木銅打管弦樂；四四拍強弱次強弱，四三拍強弱弱；五線譜下加一線為中央 C！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】聆聽電影配樂體會情緒渲染力、直笛合奏培養聆聽他人樂音的和諧合作能力。",
    "textbookFocus": "康軒：常考西洋管弦樂團四大樂器家族（弦樂、木管、銅管、打擊樂器）音色與構造辨析。 ｜ 南一：側重臺灣傳統本土音樂（歌仔戲文武場、客家八音、原住民杵歌多聲部合唱）。 ｜ 翰林：側重五線譜記譜法（高音譜記號、音名 CDEFGAB 與唱名 Do Re Mi、四二拍/四三拍/四四拍強弱拍律動）。",
    "juniorHighBridge": "國中音樂【音樂劇與世界音樂史】：巴洛克、古典樂派（莫札特/貝多芬）、浪漫樂派風格演變與樂曲賞析。",
    "infographicKey": "info-art-u2-1",
    "relatedPoints": [
      {
        "id": "kp-art-u2-2",
        "title": "五線譜音符時值樹",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u2-3",
        "title": "管弦樂團四大樂器家族",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u3-1",
        "title": "舞台九宮格方位指引",
        "unitId": "art-u3",
        "subjectId": "arts",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：藝術・觀念本質與定義"
      },
      {
        "id": "bridge-art-u2",
        "isBridge": true,
        "title": "音樂劇與世界音樂史",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中音樂【音樂劇與世界音樂史】：巴洛克、古典樂派（莫札特/貝多芬）、浪漫樂派風格演變與樂曲賞析。"
      }
    ]
  },
  {
    "id": "kp-art-u2-2",
    "pointIndex": 1,
    "unitId": "art-u2",
    "unitIndex": 1,
    "subjectId": "arts",
    "semester": "6A",
    "title": "五線譜音符時值樹",
    "category": "藝術・運算算理與公式",
    "badgeColor": "amber",
    "definition": "五線譜音符時值樹：全音符（4 拍） ➔ 二分音符（2 拍） ➔ 四分音符（1 拍） ➔ 八分音符（半拍 0.5 拍）；附點音符延長原音符時值一半。",
    "formulaOrRule": "核心工具與心法：全音符(4拍) ➔ 二分音符(2拍) ➔ 四分音符(1拍) ➔ 八分音符(半拍)",
    "strategyTip": "【審題觸發】當題目出現「音符與休止符時值換算」時，立即啟動「全音符(4拍) ➔ 二分音符(2拍) ➔ 四分音符(1拍) ➔ 八分音符(半拍)」解題。考前速記：弦木銅打管弦樂；四四拍強弱次強弱，四三拍強弱弱；五線譜下加一線為中央 C！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】聆聽電影配樂體會情緒渲染力、直笛合奏培養聆聽他人樂音的和諧合作能力。",
    "textbookFocus": "康軒：常考西洋管弦樂團四大樂器家族（弦樂、木管、銅管、打擊樂器）音色與構造辨析。 ｜ 南一：側重臺灣傳統本土音樂（歌仔戲文武場、客家八音、原住民杵歌多聲部合唱）。 ｜ 翰林：側重五線譜記譜法（高音譜記號、音名 CDEFGAB 與唱名 Do Re Mi、四二拍/四三拍/四四拍強弱拍律動）。",
    "juniorHighBridge": "國中音樂【音樂劇與世界音樂史】：巴洛克、古典樂派（莫札特/貝多芬）、浪漫樂派風格演變與樂曲賞析。",
    "infographicKey": "info-art-u2-2",
    "relatedPoints": [
      {
        "id": "kp-art-u2-1",
        "title": "音樂三要素黃金三角",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u2-3",
        "title": "管弦樂團四大樂器家族",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u3-1",
        "title": "舞台九宮格方位指引",
        "unitId": "art-u3",
        "subjectId": "arts",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：藝術・觀念本質與定義"
      },
      {
        "id": "bridge-art-u2",
        "isBridge": true,
        "title": "音樂劇與世界音樂史",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中音樂【音樂劇與世界音樂史】：巴洛克、古典樂派（莫札特/貝多芬）、浪漫樂派風格演變與樂曲賞析。"
      }
    ]
  },
  {
    "id": "kp-art-u2-3",
    "pointIndex": 2,
    "unitId": "art-u2",
    "unitIndex": 1,
    "subjectId": "arts",
    "semester": "6A",
    "title": "管弦樂團四大樂器家族",
    "category": "藝術・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "管弦樂團四大樂器家族：弦樂家族（小提琴/中提琴/大提琴/低音提琴）、木管家族（長笛/單簧管/雙簧管）、銅管家族（小號/圓號/長號）、打擊樂家族（定音鼓/三角鐵）。",
    "formulaOrRule": "核心工具與心法：p (弱) ➔ mp (中弱) ➔ mf (中強) ➔ f (強)；crescendo (漸強 <)",
    "strategyTip": "【審題觸發】當題目出現「音樂常見強弱記號」時，立即啟動「p (弱) ➔ mp (中弱) ➔ mf (中強) ➔ f (強)；crescendo (漸強 <)」解題。考前速記：弦木銅打管弦樂；四四拍強弱次強弱，四三拍強弱弱；五線譜下加一線為中央 C！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】聆聽電影配樂體會情緒渲染力、直笛合奏培養聆聽他人樂音的和諧合作能力。",
    "textbookFocus": "康軒：常考西洋管弦樂團四大樂器家族（弦樂、木管、銅管、打擊樂器）音色與構造辨析。 ｜ 南一：側重臺灣傳統本土音樂（歌仔戲文武場、客家八音、原住民杵歌多聲部合唱）。 ｜ 翰林：側重五線譜記譜法（高音譜記號、音名 CDEFGAB 與唱名 Do Re Mi、四二拍/四三拍/四四拍強弱拍律動）。",
    "juniorHighBridge": "國中音樂【音樂劇與世界音樂史】：巴洛克、古典樂派（莫札特/貝多芬）、浪漫樂派風格演變與樂曲賞析。",
    "infographicKey": "info-art-u2-3",
    "relatedPoints": [
      {
        "id": "kp-art-u2-1",
        "title": "音樂三要素黃金三角",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u2-2",
        "title": "五線譜音符時值樹",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u3-1",
        "title": "舞台九宮格方位指引",
        "unitId": "art-u3",
        "subjectId": "arts",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：藝術・觀念本質與定義"
      },
      {
        "id": "bridge-art-u2",
        "isBridge": true,
        "title": "音樂劇與世界音樂史",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中音樂【音樂劇與世界音樂史】：巴洛克、古典樂派（莫札特/貝多芬）、浪漫樂派風格演變與樂曲賞析。"
      }
    ]
  },
  {
    "id": "kp-art-u3-1",
    "pointIndex": 0,
    "unitId": "art-u3",
    "unitIndex": 2,
    "subjectId": "arts",
    "semester": "6A",
    "title": "舞台九宮格方位指引",
    "category": "藝術・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "舞台九宮格方位指引：Upstage（舞台後方遠離觀眾）、Downstage（舞台前方靠近觀眾）、Center Stage（舞台中央舞台焦點）、Stage Left/Right（演員視角的左/右）。",
    "formulaOrRule": "核心工具與心法：舞台上 (Upstage，遠離觀眾) vs 舞台下 (Downstage，靠近觀眾)；舞台左/右以演員面向觀眾為準",
    "strategyTip": "【審題觸發】當題目出現「舞台九宮格空間方位術語」時，立即啟動「舞台上 (Upstage，遠離觀眾) vs 舞台下 (Downstage，靠近觀眾)；舞台左/右以演員面向觀眾為準」解題。考前速記：近觀眾為下舞台，離觀眾為上舞台；肢體眼神傳遞情感，衝突推向最高潮！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】克服上台緊張自信面對人群演講、在日常溝通中敏銳察覺他人的肢體非語言暗示。",
    "textbookFocus": "康軒：常考戲劇舞台九宮格空間方位（上舞台、下舞台、舞台左右）與演員走位面向。 ｜ 南一：側重舞台劇編劇與導演概念（主角目標、障礙衝突、高潮解決）與幕後燈光音效道具協作。 ｜ 翰林：側重默劇肢體語言、面部表情、聲音投射與即興創作之表演核心三要素。",
    "juniorHighBridge": "國中表演藝術【劇場藝術全貌】：編劇劇本結構、導演場面調度、燈光服裝道具整體劇場美學。",
    "infographicKey": "info-art-u3-1",
    "relatedPoints": [
      {
        "id": "kp-art-u3-2",
        "title": "肢體語言與聲音表情三度空間",
        "unitId": "art-u3",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u3-3",
        "title": "即興表演與同理心角色塑造",
        "unitId": "art-u3",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u4-1",
        "title": "設計思考 (Design Th…",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：藝術・觀念本質與定義"
      },
      {
        "id": "bridge-art-u3",
        "isBridge": true,
        "title": "劇場藝術全貌",
        "unitId": "art-u3",
        "subjectId": "arts",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中表演藝術【劇場藝術全貌】：編劇劇本結構、導演場面調度、燈光服裝道具整體劇場美學。"
      }
    ]
  },
  {
    "id": "kp-art-u3-2",
    "pointIndex": 1,
    "unitId": "art-u3",
    "unitIndex": 2,
    "subjectId": "arts",
    "semester": "6A",
    "title": "肢體語言與聲音表情三度空間",
    "category": "藝術・運算算理與公式",
    "badgeColor": "amber",
    "definition": "肢體語言與聲音表情三度空間：透過身體姿勢、眼神交流、走位節奏與語氣抑揚頓挫傳遞角色內在情緒。",
    "formulaOrRule": "核心工具與心法：「Yes, and...」（接納同伴拋出的設定，並在其上補充豐富情節）",
    "strategyTip": "【審題觸發】當題目出現「演員即興表演核心心法」時，立即啟動「「Yes, and...」（接納同伴拋出的設定，並在其上補充豐富情節）」解題。考前速記：近觀眾為下舞台，離觀眾為上舞台；肢體眼神傳遞情感，衝突推向最高潮！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】克服上台緊張自信面對人群演講、在日常溝通中敏銳察覺他人的肢體非語言暗示。",
    "textbookFocus": "康軒：常考戲劇舞台九宮格空間方位（上舞台、下舞台、舞台左右）與演員走位面向。 ｜ 南一：側重舞台劇編劇與導演概念（主角目標、障礙衝突、高潮解決）與幕後燈光音效道具協作。 ｜ 翰林：側重默劇肢體語言、面部表情、聲音投射與即興創作之表演核心三要素。",
    "juniorHighBridge": "國中表演藝術【劇場藝術全貌】：編劇劇本結構、導演場面調度、燈光服裝道具整體劇場美學。",
    "infographicKey": "info-art-u3-2",
    "relatedPoints": [
      {
        "id": "kp-art-u3-1",
        "title": "舞台九宮格方位指引",
        "unitId": "art-u3",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u3-3",
        "title": "即興表演與同理心角色塑造",
        "unitId": "art-u3",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u4-1",
        "title": "設計思考 (Design Th…",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：藝術・觀念本質與定義"
      },
      {
        "id": "bridge-art-u3",
        "isBridge": true,
        "title": "劇場藝術全貌",
        "unitId": "art-u3",
        "subjectId": "arts",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中表演藝術【劇場藝術全貌】：編劇劇本結構、導演場面調度、燈光服裝道具整體劇場美學。"
      }
    ]
  },
  {
    "id": "kp-art-u3-3",
    "pointIndex": 2,
    "unitId": "art-u3",
    "unitIndex": 2,
    "subjectId": "arts",
    "semester": "6A",
    "title": "即興表演與同理心角色塑造",
    "category": "藝術・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "即興表演與同理心角色塑造：秉持「Yes, and...（是的，而且...）」原則接納夥伴提議，換位思考深入體會不同角色生命經驗。",
    "formulaOrRule": "核心工具與心法：開端背景 ➔ 衝突浮現 ➔ 危機高潮 (Climax) ➔ 結局轉化",
    "strategyTip": "【審題觸發】當題目出現「戲劇衝突的起承轉合結構」時，立即啟動「開端背景 ➔ 衝突浮現 ➔ 危機高潮 (Climax) ➔ 結局轉化」解題。考前速記：近觀眾為下舞台，離觀眾為上舞台；肢體眼神傳遞情感，衝突推向最高潮！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】克服上台緊張自信面對人群演講、在日常溝通中敏銳察覺他人的肢體非語言暗示。",
    "textbookFocus": "康軒：常考戲劇舞台九宮格空間方位（上舞台、下舞台、舞台左右）與演員走位面向。 ｜ 南一：側重舞台劇編劇與導演概念（主角目標、障礙衝突、高潮解決）與幕後燈光音效道具協作。 ｜ 翰林：側重默劇肢體語言、面部表情、聲音投射與即興創作之表演核心三要素。",
    "juniorHighBridge": "國中表演藝術【劇場藝術全貌】：編劇劇本結構、導演場面調度、燈光服裝道具整體劇場美學。",
    "infographicKey": "info-art-u3-3",
    "relatedPoints": [
      {
        "id": "kp-art-u3-1",
        "title": "舞台九宮格方位指引",
        "unitId": "art-u3",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u3-2",
        "title": "肢體語言與聲音表情三度空間",
        "unitId": "art-u3",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u4-1",
        "title": "設計思考 (Design Th…",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：藝術・觀念本質與定義"
      },
      {
        "id": "bridge-art-u3",
        "isBridge": true,
        "title": "劇場藝術全貌",
        "unitId": "art-u3",
        "subjectId": "arts",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中表演藝術【劇場藝術全貌】：編劇劇本結構、導演場面調度、燈光服裝道具整體劇場美學。"
      }
    ]
  },
  {
    "id": "kp-art-u4-1",
    "pointIndex": 0,
    "unitId": "art-u4",
    "unitIndex": 3,
    "subjectId": "arts",
    "semester": "6B",
    "title": "設計思考 (Design Th…",
    "category": "藝術・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "設計思考 (Design Th…：設計思考 (Design Thinking) 五部曲：同理心（深入使用者觀察） ➔ 定義問題 ➔ 創意發想 ➔ 原型製作 ➔ 實境測試。",
    "formulaOrRule": "核心工具與心法：同理心 (Empathy)：換位思考，觀察使用者在真實情境中的不便與渴望",
    "strategyTip": "【審題觸發】當題目出現「設計思考第一步也是最關鍵一步」時，立即啟動「同理心 (Empathy)：換位思考，觀察使用者在真實情境中的不便與渴望」解題。考前速記：設計思考以人為本：同理 ➔ 定義 ➔ 點子 ➔ 原型 ➔ 測試；美感源自生活細節觀察！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】改造個人凌亂書桌打造高效讀書環境、設計班級環保分類垃圾箱引導全班正確回收。",
    "textbookFocus": "康軒：常考生活美學設計思考五步驟（同理心、定義問題、形成點子、製作原型、測試驗證）。 ｜ 南一：側重字體設計（明體字、黑體字特點）、CIS 企業識別標誌 (Logo) 與黃金比例審美。 ｜ 翰林：側重公共藝術功能性與造型美感，以及綠建築環境美學生活實踐。",
    "juniorHighBridge": "國中生活科技【設計與製作專題】：機構傳動、工具安全操作、工程設計流程與解決真實問題。",
    "infographicKey": "info-art-u4-1",
    "relatedPoints": [
      {
        "id": "kp-art-u4-2",
        "title": "人因工程與生活機能美學",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u4-3",
        "title": "環境友善與永續設計理念",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u5-1",
        "title": "定格動畫 (Stop-Moti…",
        "unitId": "art-u5",
        "subjectId": "arts",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：藝術・觀念本質與定義"
      },
      {
        "id": "bridge-art-u4",
        "isBridge": true,
        "title": "設計與製作專題",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中生活科技【設計與製作專題】：機構傳動、工具安全操作、工程設計流程與解決真實問題。"
      }
    ]
  },
  {
    "id": "kp-art-u4-2",
    "pointIndex": 1,
    "unitId": "art-u4",
    "unitIndex": 3,
    "subjectId": "arts",
    "semester": "6B",
    "title": "人因工程與生活機能美學",
    "category": "藝術・運算算理與公式",
    "badgeColor": "amber",
    "definition": "人因工程與生活機能美學：生活器物設計兼顧「造形美感」與「實用舒適度」（人體工學椅背弧度、握柄止滑觸感）。",
    "formulaOrRule": "核心工具與心法：公平使用、彈性使用、簡易直覺、容錯設計、省力操作（如無障礙斜坡、按壓式門把）",
    "strategyTip": "【審題觸發】當題目出現「通用設計 (Universal Design) 七大原則」時，立即啟動「公平使用、彈性使用、簡易直覺、容錯設計、省力操作（如無障礙斜坡、按壓式門把）」解題。考前速記：設計思考以人為本：同理 ➔ 定義 ➔ 點子 ➔ 原型 ➔ 測試；美感源自生活細節觀察！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】改造個人凌亂書桌打造高效讀書環境、設計班級環保分類垃圾箱引導全班正確回收。",
    "textbookFocus": "康軒：常考生活美學設計思考五步驟（同理心、定義問題、形成點子、製作原型、測試驗證）。 ｜ 南一：側重字體設計（明體字、黑體字特點）、CIS 企業識別標誌 (Logo) 與黃金比例審美。 ｜ 翰林：側重公共藝術功能性與造型美感，以及綠建築環境美學生活實踐。",
    "juniorHighBridge": "國中生活科技【設計與製作專題】：機構傳動、工具安全操作、工程設計流程與解決真實問題。",
    "infographicKey": "info-art-u4-2",
    "relatedPoints": [
      {
        "id": "kp-art-u4-1",
        "title": "設計思考 (Design Th…",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u4-3",
        "title": "環境友善與永續設計理念",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u5-1",
        "title": "定格動畫 (Stop-Moti…",
        "unitId": "art-u5",
        "subjectId": "arts",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：藝術・觀念本質與定義"
      },
      {
        "id": "bridge-art-u4",
        "isBridge": true,
        "title": "設計與製作專題",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中生活科技【設計與製作專題】：機構傳動、工具安全操作、工程設計流程與解決真實問題。"
      }
    ]
  },
  {
    "id": "kp-art-u4-3",
    "pointIndex": 2,
    "unitId": "art-u4",
    "unitIndex": 3,
    "subjectId": "arts",
    "semester": "6B",
    "title": "環境友善與永續設計理念",
    "category": "藝術・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "環境友善與永續設計理念：選購環保可降解材質、簡約包裝設計與再生材料文創，將美感落實於綠色生活。",
    "formulaOrRule": "核心工具與心法：「形隨機能 (Form follows function)」：美感不能犧牲基本安全性與實用性",
    "strategyTip": "【審題觸發】當題目出現「產品外觀造型與功能性平衡」時，立即啟動「「形隨機能 (Form follows function)」：美感不能犧牲基本安全性與實用性」解題。考前速記：設計思考以人為本：同理 ➔ 定義 ➔ 點子 ➔ 原型 ➔ 測試；美感源自生活細節觀察！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】改造個人凌亂書桌打造高效讀書環境、設計班級環保分類垃圾箱引導全班正確回收。",
    "textbookFocus": "康軒：常考生活美學設計思考五步驟（同理心、定義問題、形成點子、製作原型、測試驗證）。 ｜ 南一：側重字體設計（明體字、黑體字特點）、CIS 企業識別標誌 (Logo) 與黃金比例審美。 ｜ 翰林：側重公共藝術功能性與造型美感，以及綠建築環境美學生活實踐。",
    "juniorHighBridge": "國中生活科技【設計與製作專題】：機構傳動、工具安全操作、工程設計流程與解決真實問題。",
    "infographicKey": "info-art-u4-3",
    "relatedPoints": [
      {
        "id": "kp-art-u4-1",
        "title": "設計思考 (Design Th…",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u4-2",
        "title": "人因工程與生活機能美學",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u5-1",
        "title": "定格動畫 (Stop-Moti…",
        "unitId": "art-u5",
        "subjectId": "arts",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：藝術・觀念本質與定義"
      },
      {
        "id": "bridge-art-u4",
        "isBridge": true,
        "title": "設計與製作專題",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中生活科技【設計與製作專題】：機構傳動、工具安全操作、工程設計流程與解決真實問題。"
      }
    ]
  },
  {
    "id": "kp-art-u5-1",
    "pointIndex": 0,
    "unitId": "art-u5",
    "unitIndex": 4,
    "subjectId": "arts",
    "semester": "6B",
    "title": "定格動畫 (Stop-Moti…",
    "category": "藝術・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "定格動畫 (Stop-Moti…：定格動畫 (Stop-Motion) 與視覺暫留：人眼生理視覺暫留現象（約 1/16 秒），每秒連續播放 12~24 張微調靜態照片即能形成流暢動態錯覺。",
    "formulaOrRule": "核心工具與心法：視覺暫留 (Persistence of Vision)：物體微幅移動 ➔ 拍一張 ➔ 連續播放產生生命力",
    "strategyTip": "【審題觸發】當題目出現「定格動畫 (Stop-Motion Animation) 核心原理」時，立即啟動「視覺暫留 (Persistence of Vision)：物體微幅移動 ➔ 拍一張 ➔ 連續播放產生生命力」解題。考前速記：視覺暫留成動態影像；分鏡表定好故事節奏；點陣放大會失真，向量縮放恆清晰！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】自製班級畢業紀念微電影動畫短片、利用黏土與樂高人偶拍攝創意科普小劇場。",
    "textbookFocus": "康軒：常考停格動畫製作原理（視覺暫留、每秒影格數格拍逐格拍攝）、分鏡腳本繪製。 ｜ 南一：側重創客 (Maker) 跨界藝術裝置、互動燈光感應裝置與智慧科技藝術跨域展演。 ｜ 翰林：側重數位繪圖點陣圖 (Pixel) 與向量圖 (Vector) 差異，以及數位藝術修圖後製概念。",
    "juniorHighBridge": "國中資訊科技與藝術跨域【多媒體專題】：數位影音剪輯、2D/3D 動畫基礎、創客創用 CC 授權規範。",
    "infographicKey": "info-art-u5-1",
    "relatedPoints": [
      {
        "id": "kp-art-u5-2",
        "title": "數位繪圖與向量圖層概念",
        "unitId": "art-u5",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u5-3",
        "title": "多媒體影音剪輯與創客精神",
        "unitId": "art-u5",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u6-1",
        "title": "臺灣傳統三大偶戲",
        "unitId": "art-u6",
        "subjectId": "arts",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：藝術・觀念本質與定義"
      },
      {
        "id": "bridge-art-u5",
        "isBridge": true,
        "title": "多媒體專題",
        "unitId": "art-u5",
        "subjectId": "arts",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中資訊科技與藝術跨域【多媒體專題】：數位影音剪輯、2D/3D 動畫基礎、創客創用 CC 授權規範。"
      }
    ]
  },
  {
    "id": "kp-art-u5-2",
    "pointIndex": 1,
    "unitId": "art-u5",
    "unitIndex": 4,
    "subjectId": "arts",
    "semester": "6B",
    "title": "數位繪圖與向量圖層概念",
    "category": "藝術・運算算理與公式",
    "badgeColor": "amber",
    "definition": "數位繪圖與向量圖層概念：點陣圖（像素組成放大失真） vs 向量圖（數學路徑公式無失真放大）；圖層分離便於獨立編輯。",
    "formulaOrRule": "核心工具與心法：在正式拍攝前以插畫表格規劃每鏡頭之景別（遠景/中景/特寫）、對白與音效",
    "strategyTip": "【審題觸發】當題目出現「動畫分鏡表 (Storyboard) 作用」時，立即啟動「在正式拍攝前以插畫表格規劃每鏡頭之景別（遠景/中景/特寫）、對白與音效」解題。考前速記：視覺暫留成動態影像；分鏡表定好故事節奏；點陣放大會失真，向量縮放恆清晰！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】自製班級畢業紀念微電影動畫短片、利用黏土與樂高人偶拍攝創意科普小劇場。",
    "textbookFocus": "康軒：常考停格動畫製作原理（視覺暫留、每秒影格數格拍逐格拍攝）、分鏡腳本繪製。 ｜ 南一：側重創客 (Maker) 跨界藝術裝置、互動燈光感應裝置與智慧科技藝術跨域展演。 ｜ 翰林：側重數位繪圖點陣圖 (Pixel) 與向量圖 (Vector) 差異，以及數位藝術修圖後製概念。",
    "juniorHighBridge": "國中資訊科技與藝術跨域【多媒體專題】：數位影音剪輯、2D/3D 動畫基礎、創客創用 CC 授權規範。",
    "infographicKey": "info-art-u5-2",
    "relatedPoints": [
      {
        "id": "kp-art-u5-1",
        "title": "定格動畫 (Stop-Moti…",
        "unitId": "art-u5",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u5-3",
        "title": "多媒體影音剪輯與創客精神",
        "unitId": "art-u5",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u6-1",
        "title": "臺灣傳統三大偶戲",
        "unitId": "art-u6",
        "subjectId": "arts",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：藝術・觀念本質與定義"
      },
      {
        "id": "bridge-art-u5",
        "isBridge": true,
        "title": "多媒體專題",
        "unitId": "art-u5",
        "subjectId": "arts",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中資訊科技與藝術跨域【多媒體專題】：數位影音剪輯、2D/3D 動畫基礎、創客創用 CC 授權規範。"
      }
    ]
  },
  {
    "id": "kp-art-u5-3",
    "pointIndex": 2,
    "unitId": "art-u5",
    "unitIndex": 4,
    "subjectId": "arts",
    "semester": "6B",
    "title": "多媒體影音剪輯與創客精神",
    "category": "藝術・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "多媒體影音剪輯與創客精神：將原創繪畫、數位音效配樂與逐格定格影片剪輯合成，展現跨領域科技藝術創造力。",
    "formulaOrRule": "核心工具與心法：如透明投影片分層疊加：線稿層、底色層、陰影高光層分開管理修改不干擾",
    "strategyTip": "【審題觸發】當題目出現「數位繪圖「圖層 (Layers)」概念」時，立即啟動「如透明投影片分層疊加：線稿層、底色層、陰影高光層分開管理修改不干擾」解題。考前速記：視覺暫留成動態影像；分鏡表定好故事節奏；點陣放大會失真，向量縮放恆清晰！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】自製班級畢業紀念微電影動畫短片、利用黏土與樂高人偶拍攝創意科普小劇場。",
    "textbookFocus": "康軒：常考停格動畫製作原理（視覺暫留、每秒影格數格拍逐格拍攝）、分鏡腳本繪製。 ｜ 南一：側重創客 (Maker) 跨界藝術裝置、互動燈光感應裝置與智慧科技藝術跨域展演。 ｜ 翰林：側重數位繪圖點陣圖 (Pixel) 與向量圖 (Vector) 差異，以及數位藝術修圖後製概念。",
    "juniorHighBridge": "國中資訊科技與藝術跨域【多媒體專題】：數位影音剪輯、2D/3D 動畫基礎、創客創用 CC 授權規範。",
    "infographicKey": "info-art-u5-3",
    "relatedPoints": [
      {
        "id": "kp-art-u5-1",
        "title": "定格動畫 (Stop-Moti…",
        "unitId": "art-u5",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u5-2",
        "title": "數位繪圖與向量圖層概念",
        "unitId": "art-u5",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u6-1",
        "title": "臺灣傳統三大偶戲",
        "unitId": "art-u6",
        "subjectId": "arts",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：藝術・觀念本質與定義"
      },
      {
        "id": "bridge-art-u5",
        "isBridge": true,
        "title": "多媒體專題",
        "unitId": "art-u5",
        "subjectId": "arts",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中資訊科技與藝術跨域【多媒體專題】：數位影音剪輯、2D/3D 動畫基礎、創客創用 CC 授權規範。"
      }
    ]
  },
  {
    "id": "kp-art-u6-1",
    "pointIndex": 0,
    "unitId": "art-u6",
    "unitIndex": 5,
    "subjectId": "arts",
    "semester": "6B",
    "title": "臺灣傳統三大偶戲",
    "category": "藝術・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "臺灣傳統三大偶戲：掌中布袋戲（巧手布偶）、皮影戲（透光剪影牛皮製偶）、傀儡戲（絲線提動懸絲偶）。",
    "formulaOrRule": "核心工具與心法：生（文雅男子）、旦（端莊女子）、淨（花臉剛烈勇猛）、末（長鬚老者）、丑（詼諧幽默丑角）",
    "strategyTip": "【審題觸發】當題目出現「布袋戲五大行當角色分類」時，立即啟動「生（文雅男子）、旦（端莊女子）、淨（花臉剛烈勇猛）、末（長鬚老者）、丑（詼諧幽默丑角）」解題。考前速記：凸版印凸處，凹版印槽內，孔版漏油墨（絹印）；民間工藝凝結祖先智慧與文化薪火！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】參觀傳統廟宇古蹟看懂屋頂墀頭裝飾故事、在文創市集欣賞結合傳統刺繡皮雕的當代手作設計。",
    "textbookFocus": "康軒：常考臺灣傳統工藝（鶯歌陶瓷、三義木雕、大甲草編、美濃油紙傘）之技藝與在地文化。 ｜ 南一：側重版畫四大類別（凸版如木刻/橡皮版、凹版如銅版、平版如石版、孔版如絹印）之印製原理。 ｜ 翰林：側重世界傳統偶戲巡禮（臺灣布袋戲、皮影戲、魁儡戲、印尼皮影戲、捷克提線木偶）。",
    "juniorHighBridge": "國中藝術跨領域【在地文化與無形文化資產】：臺灣傳統聚落文化、非物質文化遺產傳承與現代文創創新。",
    "infographicKey": "info-art-u6-1",
    "relatedPoints": [
      {
        "id": "kp-art-u6-2",
        "title": "布袋戲五大行當角色分類",
        "unitId": "art-u6",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u6-3",
        "title": "傳統工藝與現代文創新生",
        "unitId": "art-u6",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u5-1",
        "title": "定格動畫 (Stop-Moti…",
        "unitId": "art-u5",
        "subjectId": "arts",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：藝術・觀念本質與定義"
      },
      {
        "id": "bridge-art-u6",
        "isBridge": true,
        "title": "在地文化與無形文化資產",
        "unitId": "art-u6",
        "subjectId": "arts",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中藝術跨領域【在地文化與無形文化資產】：臺灣傳統聚落文化、非物質文化遺產傳承與現代文創創新。"
      }
    ]
  },
  {
    "id": "kp-art-u6-2",
    "pointIndex": 1,
    "unitId": "art-u6",
    "unitIndex": 5,
    "subjectId": "arts",
    "semester": "6B",
    "title": "布袋戲五大行當角色分類",
    "category": "藝術・運算算理與公式",
    "badgeColor": "amber",
    "definition": "布袋戲五大行當角色分類：生（溫文儒雅男子）、旦（端莊柔美女子）、淨（花臉剛烈勇猛）、末（白髯老者）、丑（詼諧幽默丑角）。",
    "formulaOrRule": "核心工具與心法：光線被不透光牛皮影偶遮擋，在白色影窗布幕上投射出清晰黑影與半透色彩",
    "strategyTip": "【審題觸發】當題目出現「皮影戲發光成像光學原理」時，立即啟動「光線被不透光牛皮影偶遮擋，在白色影窗布幕上投射出清晰黑影與半透色彩」解題。考前速記：凸版印凸處，凹版印槽內，孔版漏油墨（絹印）；民間工藝凝結祖先智慧與文化薪火！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】參觀傳統廟宇古蹟看懂屋頂墀頭裝飾故事、在文創市集欣賞結合傳統刺繡皮雕的當代手作設計。",
    "textbookFocus": "康軒：常考臺灣傳統工藝（鶯歌陶瓷、三義木雕、大甲草編、美濃油紙傘）之技藝與在地文化。 ｜ 南一：側重版畫四大類別（凸版如木刻/橡皮版、凹版如銅版、平版如石版、孔版如絹印）之印製原理。 ｜ 翰林：側重世界傳統偶戲巡禮（臺灣布袋戲、皮影戲、魁儡戲、印尼皮影戲、捷克提線木偶）。",
    "juniorHighBridge": "國中藝術跨領域【在地文化與無形文化資產】：臺灣傳統聚落文化、非物質文化遺產傳承與現代文創創新。",
    "infographicKey": "info-art-u6-2",
    "relatedPoints": [
      {
        "id": "kp-art-u6-1",
        "title": "臺灣傳統三大偶戲",
        "unitId": "art-u6",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u6-3",
        "title": "傳統工藝與現代文創新生",
        "unitId": "art-u6",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u5-1",
        "title": "定格動畫 (Stop-Moti…",
        "unitId": "art-u5",
        "subjectId": "arts",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：藝術・觀念本質與定義"
      },
      {
        "id": "bridge-art-u6",
        "isBridge": true,
        "title": "在地文化與無形文化資產",
        "unitId": "art-u6",
        "subjectId": "arts",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中藝術跨領域【在地文化與無形文化資產】：臺灣傳統聚落文化、非物質文化遺產傳承與現代文創創新。"
      }
    ]
  },
  {
    "id": "kp-art-u6-3",
    "pointIndex": 2,
    "unitId": "art-u6",
    "unitIndex": 5,
    "subjectId": "arts",
    "semester": "6B",
    "title": "傳統工藝與現代文創新生",
    "category": "藝術・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "傳統工藝與現代文創新生：將剪紙窗花、交趾陶、刺繡融入現代文創商品，傳承臺灣在地美學文化資產。",
    "formulaOrRule": "核心工具與心法：將彩色碎瓷碗片剪裁嵌貼於灰泥胚體，塑造生動龍鳳神仙，耐風吹雨淋",
    "strategyTip": "【審題觸發】當題目出現「臺灣傳統廟宇屋頂剪黏工藝」時，立即啟動「將彩色碎瓷碗片剪裁嵌貼於灰泥胚體，塑造生動龍鳳神仙，耐風吹雨淋」解題。考前速記：凸版印凸處，凹版印槽內，孔版漏油墨（絹印）；民間工藝凝結祖先智慧與文化薪火！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】參觀傳統廟宇古蹟看懂屋頂墀頭裝飾故事、在文創市集欣賞結合傳統刺繡皮雕的當代手作設計。",
    "textbookFocus": "康軒：常考臺灣傳統工藝（鶯歌陶瓷、三義木雕、大甲草編、美濃油紙傘）之技藝與在地文化。 ｜ 南一：側重版畫四大類別（凸版如木刻/橡皮版、凹版如銅版、平版如石版、孔版如絹印）之印製原理。 ｜ 翰林：側重世界傳統偶戲巡禮（臺灣布袋戲、皮影戲、魁儡戲、印尼皮影戲、捷克提線木偶）。",
    "juniorHighBridge": "國中藝術跨領域【在地文化與無形文化資產】：臺灣傳統聚落文化、非物質文化遺產傳承與現代文創創新。",
    "infographicKey": "info-art-u6-3",
    "relatedPoints": [
      {
        "id": "kp-art-u6-1",
        "title": "臺灣傳統三大偶戲",
        "unitId": "art-u6",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u6-2",
        "title": "布袋戲五大行當角色分類",
        "unitId": "art-u6",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u5-1",
        "title": "定格動畫 (Stop-Moti…",
        "unitId": "art-u5",
        "subjectId": "arts",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：藝術・觀念本質與定義"
      },
      {
        "id": "bridge-art-u6",
        "isBridge": true,
        "title": "在地文化與無形文化資產",
        "unitId": "art-u6",
        "subjectId": "arts",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中藝術跨領域【在地文化與無形文化資產】：臺灣傳統聚落文化、非物質文化遺產傳承與現代文創創新。"
      }
    ]
  },
  {
    "id": "kp-pe-u1-1",
    "pointIndex": 0,
    "unitId": "pe-u1",
    "unitIndex": 0,
    "subjectId": "health_pe",
    "semester": "6A",
    "title": "青春期第二性徵個體差異",
    "category": "健體・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "青春期第二性徵個體差異：發育年齡受遺傳與營養影響各不相同，男生喉結變聲、女生乳房發育與月經來潮皆為正常健康里程碑。",
    "formulaOrRule": "核心工具與心法：這是長大成熟的健康正常里程碑，不因生長速度快慢而自卑焦慮",
    "strategyTip": "【審題觸發】當題目出現「男女第二性徵出現時正確心理調適」時，立即啟動「這是長大成熟的健康正常里程碑，不因生長速度快慢而自卑焦慮」解題。考前速記：擁抱成長生理變化，尊重差異不嘲諷；保護身體隱私自主權，遇困擾勇於向師長求助！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】建立自信健康的個人外表自我認同、學會挑選適合自己發育階段的純棉透氣貼身衣物。",
    "textbookFocus": "康軒：常考青春期第二性徵生理變化、個人衛生習慣維護、接納自我身體意象。 ｜ 南一：側重健康心理建設、打破性別刻板印象、拒絕身體霸凌與尋求輔導諮商支援。 ｜ 翰林：側重青春期情緒荷爾蒙波動管理、性別平等意識與尊重他人身體界線。",
    "juniorHighBridge": "國一健康教育【青春期發育與生殖系統】：男性與女性生殖器官結構功能、性別平等教育法與情感教育。",
    "infographicKey": "info-pe-u1-1",
    "relatedPoints": [
      {
        "id": "kp-pe-u1-2",
        "title": "青春期個人衛生保養之道",
        "unitId": "pe-u1",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u1-3",
        "title": "打破性別刻板印象與自我肯定",
        "unitId": "pe-u1",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u2-1",
        "title": "六大類食物每天均衡攝取",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：健體・觀念本質與定義"
      },
      {
        "id": "bridge-pe-u1",
        "isBridge": true,
        "title": "青春期發育與生殖系統",
        "unitId": "pe-u1",
        "subjectId": "health_pe",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一健康教育【青春期發育與生殖系統】：男性與女性生殖器官結構功能、性別平等教育法與情感教育。"
      }
    ]
  },
  {
    "id": "kp-pe-u1-2",
    "pointIndex": 1,
    "unitId": "pe-u1",
    "unitIndex": 0,
    "subjectId": "health_pe",
    "semester": "6A",
    "title": "青春期個人衛生保養之道",
    "category": "健體・運算算理與公式",
    "badgeColor": "amber",
    "definition": "青春期個人衛生保養之道：皮脂分泌旺盛需每日溫和潔面、養成更換貼身衣物習慣、正確認識月經與夢遺之生理調適。",
    "formulaOrRule": "核心工具與心法：定期更換衛生棉保持乾爽；保持生殖器官清潔；女生經期避免劇烈冷水刺激",
    "strategyTip": "【審題觸發】當題目出現「月經生理期與夢遺衛生護理」時，立即啟動「定期更換衛生棉保持乾爽；保持生殖器官清潔；女生經期避免劇烈冷水刺激」解題。考前速記：擁抱成長生理變化，尊重差異不嘲諷；保護身體隱私自主權，遇困擾勇於向師長求助！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】建立自信健康的個人外表自我認同、學會挑選適合自己發育階段的純棉透氣貼身衣物。",
    "textbookFocus": "康軒：常考青春期第二性徵生理變化、個人衛生習慣維護、接納自我身體意象。 ｜ 南一：側重健康心理建設、打破性別刻板印象、拒絕身體霸凌與尋求輔導諮商支援。 ｜ 翰林：側重青春期情緒荷爾蒙波動管理、性別平等意識與尊重他人身體界線。",
    "juniorHighBridge": "國一健康教育【青春期發育與生殖系統】：男性與女性生殖器官結構功能、性別平等教育法與情感教育。",
    "infographicKey": "info-pe-u1-2",
    "relatedPoints": [
      {
        "id": "kp-pe-u1-1",
        "title": "青春期第二性徵個體差異",
        "unitId": "pe-u1",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u1-3",
        "title": "打破性別刻板印象與自我肯定",
        "unitId": "pe-u1",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u2-1",
        "title": "六大類食物每天均衡攝取",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：健體・觀念本質與定義"
      },
      {
        "id": "bridge-pe-u1",
        "isBridge": true,
        "title": "青春期發育與生殖系統",
        "unitId": "pe-u1",
        "subjectId": "health_pe",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一健康教育【青春期發育與生殖系統】：男性與女性生殖器官結構功能、性別平等教育法與情感教育。"
      }
    ]
  },
  {
    "id": "kp-pe-u1-3",
    "pointIndex": 2,
    "unitId": "pe-u1",
    "unitIndex": 0,
    "subjectId": "health_pe",
    "semester": "6A",
    "title": "打破性別刻板印象與自我肯定",
    "category": "健體・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "打破性別刻板印象與自我肯定：尊重彼此生長節奏與體型差異，建立健康正向身體意象 (Body Image)。",
    "formulaOrRule": "核心工具與心法：「我的身體我做主」：任何人未經同意觸碰隱私部位皆應大聲說「不」並立即告知信任師長",
    "strategyTip": "【審題觸發】當題目出現「個人身體自主權防線」時，立即啟動「「我的身體我做主」：任何人未經同意觸碰隱私部位皆應大聲說「不」並立即告知信任師長」解題。考前速記：擁抱成長生理變化，尊重差異不嘲諷；保護身體隱私自主權，遇困擾勇於向師長求助！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】建立自信健康的個人外表自我認同、學會挑選適合自己發育階段的純棉透氣貼身衣物。",
    "textbookFocus": "康軒：常考青春期第二性徵生理變化、個人衛生習慣維護、接納自我身體意象。 ｜ 南一：側重健康心理建設、打破性別刻板印象、拒絕身體霸凌與尋求輔導諮商支援。 ｜ 翰林：側重青春期情緒荷爾蒙波動管理、性別平等意識與尊重他人身體界線。",
    "juniorHighBridge": "國一健康教育【青春期發育與生殖系統】：男性與女性生殖器官結構功能、性別平等教育法與情感教育。",
    "infographicKey": "info-pe-u1-3",
    "relatedPoints": [
      {
        "id": "kp-pe-u1-1",
        "title": "青春期第二性徵個體差異",
        "unitId": "pe-u1",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u1-2",
        "title": "青春期個人衛生保養之道",
        "unitId": "pe-u1",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u2-1",
        "title": "六大類食物每天均衡攝取",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：健體・觀念本質與定義"
      },
      {
        "id": "bridge-pe-u1",
        "isBridge": true,
        "title": "青春期發育與生殖系統",
        "unitId": "pe-u1",
        "subjectId": "health_pe",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一健康教育【青春期發育與生殖系統】：男性與女性生殖器官結構功能、性別平等教育法與情感教育。"
      }
    ]
  },
  {
    "id": "kp-pe-u2-1",
    "pointIndex": 0,
    "unitId": "pe-u2",
    "unitIndex": 1,
    "subjectId": "health_pe",
    "semester": "6A",
    "title": "六大類食物每天均衡攝取",
    "category": "健體・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "六大類食物每天均衡攝取：全穀雜糧類、豆魚蛋肉類、乳品類、蔬菜類、水果類、油脂與堅果種子類。",
    "formulaOrRule": "核心工具與心法：全穀雜糧類、豆魚蛋肉類、乳品類、蔬菜類、水果類、油脂與堅果種子類",
    "strategyTip": "【審題觸發】當題目出現「六大類食物完整清單」時，立即啟動「全穀雜糧類、豆魚蛋肉類、乳品類、蔬菜類、水果類、油脂與堅果種子類」解題。考前速記：「我的餐盤」聰明吃：飯跟蔬菜一樣多、豆魚蛋肉一掌心、堅果種子一茶匙；少油少鹽多纖維！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在學校營養午餐自主夾取彩虹五色均衡蔬果、在便利商店看懂食品包裝上的反式脂肪與熱量標示。",
    "textbookFocus": "康軒：常考國民健康署「我的餐盤」六口訣（每天早晚一杯奶、每餐水果拳頭大、菜比水果多一點等）。 ｜ 南一：側重食品安全三章一 Q 認證標章（CAS、產銷履歷、有機、QR-code溯源）與食安防範。 ｜ 翰林：側重食品營養標籤辨讀（熱量、蛋白質、脂肪、碳水化合物、鈉含量）與含糖飲料危害。",
    "juniorHighBridge": "國一健康教育【營養與消化系統】：消化器官運作、酵素催化作用、熱量代謝與慢性病預防。",
    "infographicKey": "info-pe-u2-1",
    "relatedPoints": [
      {
        "id": "kp-pe-u2-2",
        "title": "衛福部「我的餐盤",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u2-3",
        "title": "食品營養標示讀取三部曲",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u3-1",
        "title": "成人 CPR+AED 救命黃金口訣",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：健體・觀念本質與定義"
      },
      {
        "id": "bridge-pe-u2",
        "isBridge": true,
        "title": "營養與消化系統",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一健康教育【營養與消化系統】：消化器官運作、酵素催化作用、熱量代謝與慢性病預防。"
      }
    ]
  },
  {
    "id": "kp-pe-u2-2",
    "pointIndex": 1,
    "unitId": "pe-u2",
    "unitIndex": 1,
    "subjectId": "health_pe",
    "semester": "6A",
    "title": "衛福部「我的餐盤",
    "category": "健體・運算算理與公式",
    "badgeColor": "amber",
    "definition": "衛福部「我的餐盤」口訣大招：每天早晚一杯奶、每餐水果拳頭大、菜比水果多一點、飯跟蔬菜一樣多、豆魚蛋肉一掌心、堅果種子一茶匙。",
    "formulaOrRule": "核心工具與心法：碳水化合物 (醣類) 4 大卡/克、蛋白質 4 大卡/克、脂肪 9 大卡/克",
    "strategyTip": "【審題觸發】當題目出現「三大產熱營養素熱量換算」時，立即啟動「碳水化合物 (醣類) 4 大卡/克、蛋白質 4 大卡/克、脂肪 9 大卡/克」解題。考前速記：「我的餐盤」聰明吃：飯跟蔬菜一樣多、豆魚蛋肉一掌心、堅果種子一茶匙；少油少鹽多纖維！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在學校營養午餐自主夾取彩虹五色均衡蔬果、在便利商店看懂食品包裝上的反式脂肪與熱量標示。",
    "textbookFocus": "康軒：常考國民健康署「我的餐盤」六口訣（每天早晚一杯奶、每餐水果拳頭大、菜比水果多一點等）。 ｜ 南一：側重食品安全三章一 Q 認證標章（CAS、產銷履歷、有機、QR-code溯源）與食安防範。 ｜ 翰林：側重食品營養標籤辨讀（熱量、蛋白質、脂肪、碳水化合物、鈉含量）與含糖飲料危害。",
    "juniorHighBridge": "國一健康教育【營養與消化系統】：消化器官運作、酵素催化作用、熱量代謝與慢性病預防。",
    "infographicKey": "info-pe-u2-2",
    "relatedPoints": [
      {
        "id": "kp-pe-u2-1",
        "title": "六大類食物每天均衡攝取",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u2-3",
        "title": "食品營養標示讀取三部曲",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u3-1",
        "title": "成人 CPR+AED 救命黃金口訣",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：健體・觀念本質與定義"
      },
      {
        "id": "bridge-pe-u2",
        "isBridge": true,
        "title": "營養與消化系統",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一健康教育【營養與消化系統】：消化器官運作、酵素催化作用、熱量代謝與慢性病預防。"
      }
    ]
  },
  {
    "id": "kp-pe-u2-3",
    "pointIndex": 2,
    "unitId": "pe-u2",
    "unitIndex": 1,
    "subjectId": "health_pe",
    "semester": "6A",
    "title": "食品營養標示讀取三部曲",
    "category": "健體・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "食品營養標示讀取三部曲：檢視每一份量與總份數、計算總熱量卡路里、嚴格避開反式脂肪與過量精緻糖。",
    "formulaOrRule": "核心工具與心法：導致肥胖與蛀牙、抑制生長荷爾蒙分泌影響長高、引發專注力不集中與心血管負擔",
    "strategyTip": "【審題觸發】當題目出現「含糖手搖飲對身體發育三大危害」時，立即啟動「導致肥胖與蛀牙、抑制生長荷爾蒙分泌影響長高、引發專注力不集中與心血管負擔」解題。考前速記：「我的餐盤」聰明吃：飯跟蔬菜一樣多、豆魚蛋肉一掌心、堅果種子一茶匙；少油少鹽多纖維！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在學校營養午餐自主夾取彩虹五色均衡蔬果、在便利商店看懂食品包裝上的反式脂肪與熱量標示。",
    "textbookFocus": "康軒：常考國民健康署「我的餐盤」六口訣（每天早晚一杯奶、每餐水果拳頭大、菜比水果多一點等）。 ｜ 南一：側重食品安全三章一 Q 認證標章（CAS、產銷履歷、有機、QR-code溯源）與食安防範。 ｜ 翰林：側重食品營養標籤辨讀（熱量、蛋白質、脂肪、碳水化合物、鈉含量）與含糖飲料危害。",
    "juniorHighBridge": "國一健康教育【營養與消化系統】：消化器官運作、酵素催化作用、熱量代謝與慢性病預防。",
    "infographicKey": "info-pe-u2-3",
    "relatedPoints": [
      {
        "id": "kp-pe-u2-1",
        "title": "六大類食物每天均衡攝取",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u2-2",
        "title": "衛福部「我的餐盤",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u3-1",
        "title": "成人 CPR+AED 救命黃金口訣",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：健體・觀念本質與定義"
      },
      {
        "id": "bridge-pe-u2",
        "isBridge": true,
        "title": "營養與消化系統",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國一健康教育【營養與消化系統】：消化器官運作、酵素催化作用、熱量代謝與慢性病預防。"
      }
    ]
  },
  {
    "id": "kp-pe-u3-1",
    "pointIndex": 0,
    "unitId": "pe-u3",
    "unitIndex": 2,
    "subjectId": "health_pe",
    "semester": "6A",
    "title": "成人 CPR+AED 救命黃金口訣",
    "category": "健體・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "成人 CPR+AED 救命黃金口訣：「叫、叫、C、D」！叫（確認意識與正常呼吸） ➔ 叫（大聲呼救指定旁人打 119 與取 AED） ➔ C（胸外按壓） ➔ D（電擊除顫）。",
    "formulaOrRule": "核心工具與心法：兩乳頭連線中央胸骨處；深度 5~6 公分；速率每分鐘 100~120 下（口訣：快快壓、用力壓、莫中斷）",
    "strategyTip": "【審題觸發】當題目出現「成人 CPR 正確胸外按壓位置與頻率」時，立即啟動「兩乳頭連線中央胸骨處；深度 5~6 公分；速率每分鐘 100~120 下（口訣：快快壓、用力壓、莫中斷）」解題。考前速記：運動扭傷 PRICE：保護、休息、冰敷、加壓、抬高；CPR+AED 急救心法：叫叫壓電，按壓 100~120 次/分！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在校園運動場遇同學昏倒呼吸停止能臨危不亂啟動急救、居家生活中防範長輩幼童噎食意外。",
    "textbookFocus": "康軒：常考運動扭傷挫傷 PRICE 急救原則（保護、休息、冰敷、加壓、抬高）各步驟執行順序。 ｜ 南一：側重中暑熱傷害預防與處置（陰涼通風、鬆開衣物、補充電解質水，意識不清絕不灌水）。 ｜ 翰林：側重 CPR 心肺復甦術與 AED 傻瓜電擊器急救口訣（叫叫壓電）、胸外按壓頻率與深度。",
    "juniorHighBridge": "國二健康教育【急救與安全教育】：包紮止血法、骨折固定法、溺水與燒燙傷五步驟（沖脫泡蓋送）。",
    "infographicKey": "info-pe-u3-1",
    "relatedPoints": [
      {
        "id": "kp-pe-u3-2",
        "title": "CPR 正確胸外按壓規範",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u3-3",
        "title": "運動傷害急性處理最新 PEACE 原則",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u4-1",
        "title": "健康體適能四大要素",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：健體・觀念本質與定義"
      },
      {
        "id": "kp-comp-u2-1",
        "title": "我訊息溝通黃金公式",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "跨域應變溝通",
        "badgeType": "cross",
        "desc": "CPR+AED 急救流程 ➔ 緊急應變冷靜指令與同理心"
      },
      {
        "id": "bridge-pe-u3",
        "isBridge": true,
        "title": "急救與安全教育",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二健康教育【急救與安全教育】：包紮止血法、骨折固定法、溺水與燒燙傷五步驟（沖脫泡蓋送）。"
      }
    ]
  },
  {
    "id": "kp-pe-u3-2",
    "pointIndex": 1,
    "unitId": "pe-u3",
    "unitIndex": 2,
    "subjectId": "health_pe",
    "semester": "6A",
    "title": "CPR 正確胸外按壓規範",
    "category": "健體・運算算理與公式",
    "badgeColor": "amber",
    "definition": "CPR 正確胸外按壓規範：兩乳頭連線中央胸骨下半段；按壓深度 5~6 公分；頻率每分鐘 100~120 下；按壓用力且讓胸廓完全回彈，中斷不超過 10 秒。",
    "formulaOrRule": "核心工具與心法：一片貼在患者右鎖骨下方，另一片貼在左乳頭外側左下側肋骨處",
    "strategyTip": "【審題觸發】當題目出現「AED 貼片黏貼位置標準規範」時，立即啟動「一片貼在患者右鎖骨下方，另一片貼在左乳頭外側左下側肋骨處」解題。考前速記：運動扭傷 PRICE：保護、休息、冰敷、加壓、抬高；CPR+AED 急救心法：叫叫壓電，按壓 100~120 次/分！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在校園運動場遇同學昏倒呼吸停止能臨危不亂啟動急救、居家生活中防範長輩幼童噎食意外。",
    "textbookFocus": "康軒：常考運動扭傷挫傷 PRICE 急救原則（保護、休息、冰敷、加壓、抬高）各步驟執行順序。 ｜ 南一：側重中暑熱傷害預防與處置（陰涼通風、鬆開衣物、補充電解質水，意識不清絕不灌水）。 ｜ 翰林：側重 CPR 心肺復甦術與 AED 傻瓜電擊器急救口訣（叫叫壓電）、胸外按壓頻率與深度。",
    "juniorHighBridge": "國二健康教育【急救與安全教育】：包紮止血法、骨折固定法、溺水與燒燙傷五步驟（沖脫泡蓋送）。",
    "infographicKey": "info-pe-u3-2",
    "relatedPoints": [
      {
        "id": "kp-pe-u3-1",
        "title": "成人 CPR+AED 救命黃金口訣",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u3-3",
        "title": "運動傷害急性處理最新 PEACE 原則",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u4-1",
        "title": "健康體適能四大要素",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：健體・觀念本質與定義"
      },
      {
        "id": "kp-comp-u2-1",
        "title": "我訊息溝通黃金公式",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "跨域應變溝通",
        "badgeType": "cross",
        "desc": "CPR+AED 急救流程 ➔ 緊急應變冷靜指令與同理心"
      },
      {
        "id": "bridge-pe-u3",
        "isBridge": true,
        "title": "急救與安全教育",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二健康教育【急救與安全教育】：包紮止血法、骨折固定法、溺水與燒燙傷五步驟（沖脫泡蓋送）。"
      }
    ]
  },
  {
    "id": "kp-pe-u3-3",
    "pointIndex": 2,
    "unitId": "pe-u3",
    "unitIndex": 2,
    "subjectId": "health_pe",
    "semester": "6A",
    "title": "運動傷害急性處理最新 PEACE 原則",
    "category": "健體・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "運動傷害急性處理最新 PEACE 原則：Protect（保護避免二次傷害）、Elevate（抬高患部高於心臟）、Avoid anti-inflammatory（避免過度消炎影響修復）、Compress（彈性繃帶加壓包紮）、Educate（衛教主動復健）。",
    "formulaOrRule": "核心工具與心法：哈姆立克急救法 (Heimlich Maneuver)：站在患者背後環抱，拇指握拳抵住肚臍上方快速向內上方推擠",
    "strategyTip": "【審題觸發】當題目出現「異物哽塞無法呼吸咳嗽急救法」時，立即啟動「哈姆立克急救法 (Heimlich Maneuver)：站在患者背後環抱，拇指握拳抵住肚臍上方快速向內上方推擠」解題。考前速記：運動扭傷 PRICE：保護、休息、冰敷、加壓、抬高；CPR+AED 急救心法：叫叫壓電，按壓 100~120 次/分！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在校園運動場遇同學昏倒呼吸停止能臨危不亂啟動急救、居家生活中防範長輩幼童噎食意外。",
    "textbookFocus": "康軒：常考運動扭傷挫傷 PRICE 急救原則（保護、休息、冰敷、加壓、抬高）各步驟執行順序。 ｜ 南一：側重中暑熱傷害預防與處置（陰涼通風、鬆開衣物、補充電解質水，意識不清絕不灌水）。 ｜ 翰林：側重 CPR 心肺復甦術與 AED 傻瓜電擊器急救口訣（叫叫壓電）、胸外按壓頻率與深度。",
    "juniorHighBridge": "國二健康教育【急救與安全教育】：包紮止血法、骨折固定法、溺水與燒燙傷五步驟（沖脫泡蓋送）。",
    "infographicKey": "info-pe-u3-3",
    "relatedPoints": [
      {
        "id": "kp-pe-u3-1",
        "title": "成人 CPR+AED 救命黃金口訣",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u3-2",
        "title": "CPR 正確胸外按壓規範",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u4-1",
        "title": "健康體適能四大要素",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：健體・觀念本質與定義"
      },
      {
        "id": "kp-comp-u2-1",
        "title": "我訊息溝通黃金公式",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "跨域應變溝通",
        "badgeType": "cross",
        "desc": "CPR+AED 急救流程 ➔ 緊急應變冷靜指令與同理心"
      },
      {
        "id": "bridge-pe-u3",
        "isBridge": true,
        "title": "急救與安全教育",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國二健康教育【急救與安全教育】：包紮止血法、骨折固定法、溺水與燒燙傷五步驟（沖脫泡蓋送）。"
      }
    ]
  },
  {
    "id": "kp-pe-u4-1",
    "pointIndex": 0,
    "unitId": "pe-u4",
    "unitIndex": 3,
    "subjectId": "health_pe",
    "semester": "6B",
    "title": "健康體適能四大要素",
    "category": "健體・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "健康體適能四大要素：心肺耐力（登階跑走）、肌力與肌耐力（仰臥起坐/引體向上）、柔軟度（坐姿體前彎）、身體組成（BMI 與體脂率）。",
    "formulaOrRule": "核心工具與心法：有氧運動（慢跑、游泳、跳繩、快走，每週至少3次、每次30分鐘、心跳達130下）",
    "strategyTip": "【審題觸發】當題目出現「提升心肺耐力之最佳運動方式」時，立即啟動「有氧運動（慢跑、游泳、跳繩、快走，每週至少3次、每次30分鐘、心跳達130下）」解題。考前速記：BMI = 體重 (kg) ÷ 身高平方 ($m^2$)；運動前動態熱身，運動後靜態伸展；運動家精神重在恆毅力！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】為自己制定每週規律運動計畫提升體能活力、在班際大隊接力賽中體會團隊接棒信任與運動家風度。",
    "textbookFocus": "康軒：常考體適能四大要素（心肺耐力、肌力與肌耐力、柔軟度、身體組成 BMI 計算）。 ｜ 南一：側重運動家精神核心（勝不驕、敗不餒、遵守規則、服從裁判判決、團隊互助合作）。 ｜ 翰林：側重運動前後動態暖身與靜態拉筋之重要性，預防運動傷害與運動處方擬定。",
    "juniorHighBridge": "國中體育【體適能處方與專項運動體能】：FITT 原則（頻率、強度、時間、種類）、無氧閾值與運動生理學。",
    "infographicKey": "info-pe-u4-1",
    "relatedPoints": [
      {
        "id": "kp-pe-u4-2",
        "title": "運動前後黃金配置",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u4-3",
        "title": "運動家精神核心真諦",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u5-1",
        "title": "球類侵入性比賽空間製造",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：健體・觀念本質與定義"
      },
      {
        "id": "kp-sci-u6-1",
        "title": "槓桿平衡核心定理",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "跨域人體力學",
        "badgeType": "cross",
        "desc": "運動體適能 ➔ 骨骼肌腱支點施力槓桿力學"
      },
      {
        "id": "bridge-pe-u4",
        "isBridge": true,
        "title": "體適能處方與專項運動體能",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中體育【體適能處方與專項運動體能】：FITT 原則（頻率、強度、時間、種類）、無氧閾值與運動生理學。"
      }
    ]
  },
  {
    "id": "kp-pe-u4-2",
    "pointIndex": 1,
    "unitId": "pe-u4",
    "unitIndex": 3,
    "subjectId": "health_pe",
    "semester": "6B",
    "title": "運動前後黃金配置",
    "category": "健體・運算算理與公式",
    "badgeColor": "amber",
    "definition": "運動前後黃金配置：運動前實施「動態暖身」（提升體溫、關節活動度與神經反射）；運動後實施「靜態伸展」（拉伸放鬆緊繃肌群促進乳酸代謝）。",
    "formulaOrRule": "核心工具與心法：運動前充分動態暖身 ➔ 運動中及時補充水分 ➔ 運動後確實靜態伸展拉筋",
    "strategyTip": "【審題觸發】當題目出現「運動傷害預防三步驟」時，立即啟動「運動前充分動態暖身 ➔ 運動中及時補充水分 ➔ 運動後確實靜態伸展拉筋」解題。考前速記：BMI = 體重 (kg) ÷ 身高平方 ($m^2$)；運動前動態熱身，運動後靜態伸展；運動家精神重在恆毅力！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】為自己制定每週規律運動計畫提升體能活力、在班際大隊接力賽中體會團隊接棒信任與運動家風度。",
    "textbookFocus": "康軒：常考體適能四大要素（心肺耐力、肌力與肌耐力、柔軟度、身體組成 BMI 計算）。 ｜ 南一：側重運動家精神核心（勝不驕、敗不餒、遵守規則、服從裁判判決、團隊互助合作）。 ｜ 翰林：側重運動前後動態暖身與靜態拉筋之重要性，預防運動傷害與運動處方擬定。",
    "juniorHighBridge": "國中體育【體適能處方與專項運動體能】：FITT 原則（頻率、強度、時間、種類）、無氧閾值與運動生理學。",
    "infographicKey": "info-pe-u4-2",
    "relatedPoints": [
      {
        "id": "kp-pe-u4-1",
        "title": "健康體適能四大要素",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u4-3",
        "title": "運動家精神核心真諦",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u5-1",
        "title": "球類侵入性比賽空間製造",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：健體・觀念本質與定義"
      },
      {
        "id": "kp-sci-u6-1",
        "title": "槓桿平衡核心定理",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "跨域人體力學",
        "badgeType": "cross",
        "desc": "運動體適能 ➔ 骨骼肌腱支點施力槓桿力學"
      },
      {
        "id": "bridge-pe-u4",
        "isBridge": true,
        "title": "體適能處方與專項運動體能",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中體育【體適能處方與專項運動體能】：FITT 原則（頻率、強度、時間、種類）、無氧閾值與運動生理學。"
      }
    ]
  },
  {
    "id": "kp-pe-u4-3",
    "pointIndex": 2,
    "unitId": "pe-u4",
    "unitIndex": 3,
    "subjectId": "health_pe",
    "semester": "6B",
    "title": "運動家精神核心真諦",
    "category": "健體・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "運動家精神核心真諦：勝不驕、敗不餒，服從裁判判決，尊重對手與隊友，在公平競爭中展現恆毅力與卓越。",
    "formulaOrRule": "核心工具與心法：心肺耐力 (800公尺跑走)、肌力肌耐力 (仰臥捲腹)、柔軟度 (坐姿體前彎)、瞬發力 (立定跳遠)",
    "strategyTip": "【審題觸發】當題目出現「體適能四大指標與檢測項目對應」時，立即啟動「心肺耐力 (800公尺跑走)、肌力肌耐力 (仰臥捲腹)、柔軟度 (坐姿體前彎)、瞬發力 (立定跳遠)」解題。考前速記：BMI = 體重 (kg) ÷ 身高平方 ($m^2$)；運動前動態熱身，運動後靜態伸展；運動家精神重在恆毅力！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】為自己制定每週規律運動計畫提升體能活力、在班際大隊接力賽中體會團隊接棒信任與運動家風度。",
    "textbookFocus": "康軒：常考體適能四大要素（心肺耐力、肌力與肌耐力、柔軟度、身體組成 BMI 計算）。 ｜ 南一：側重運動家精神核心（勝不驕、敗不餒、遵守規則、服從裁判判決、團隊互助合作）。 ｜ 翰林：側重運動前後動態暖身與靜態拉筋之重要性，預防運動傷害與運動處方擬定。",
    "juniorHighBridge": "國中體育【體適能處方與專項運動體能】：FITT 原則（頻率、強度、時間、種類）、無氧閾值與運動生理學。",
    "infographicKey": "info-pe-u4-3",
    "relatedPoints": [
      {
        "id": "kp-pe-u4-1",
        "title": "健康體適能四大要素",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u4-2",
        "title": "運動前後黃金配置",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u5-1",
        "title": "球類侵入性比賽空間製造",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：健體・觀念本質與定義"
      },
      {
        "id": "kp-sci-u6-1",
        "title": "槓桿平衡核心定理",
        "unitId": "sci-u6",
        "subjectId": "science",
        "relation": "跨域人體力學",
        "badgeType": "cross",
        "desc": "運動體適能 ➔ 骨骼肌腱支點施力槓桿力學"
      },
      {
        "id": "bridge-pe-u4",
        "isBridge": true,
        "title": "體適能處方與專項運動體能",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中體育【體適能處方與專項運動體能】：FITT 原則（頻率、強度、時間、種類）、無氧閾值與運動生理學。"
      }
    ]
  },
  {
    "id": "kp-pe-u5-1",
    "pointIndex": 0,
    "unitId": "pe-u5",
    "unitIndex": 4,
    "subjectId": "health_pe",
    "semester": "6B",
    "title": "球類侵入性比賽空間製造",
    "category": "健體・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "球類侵入性比賽空間製造：無球跑動拉開防線、隊友掩護擋拆、創造進攻空檔傳球投射。",
    "formulaOrRule": "核心工具與心法：給了就跑 (Give and Go 傳切配合)、擋拆戰術 (Pick and Roll 掩護掩護)",
    "strategyTip": "【審題觸發】當題目出現「籃球團隊進攻基本戰術配合」時，立即啟動「給了就跑 (Give and Go 傳切配合)、擋拆戰術 (Pick and Roll 掩護掩護)」解題。考前速記：籃球防守保持在對手與籃框之間；排球接傳扣三步攻擊；遵守規則防衝撞！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在球場上透過團隊溝通凝聚友誼默契、在面臨比分落後逆境時穩定心態發揮抗壓性。",
    "textbookFocus": "康軒：常考球類運動安全規則（籃球走步、雙手運球犯規；排球發球與三人觸球過網）。 ｜ 南一：側重防守站位原則（保持在進攻者與球籃/球門之間）、運動中防撞跌倒緩衝保護動作。 ｜ 翰林：側重團隊戰術配合（籃球傳切掩護、排球一傳二傳扣球攻擊、足球傳控導球）。",
    "juniorHighBridge": "國中體育【球類專項戰術與規則判決】：區域防守 vs 人盯人防守、攻守轉換戰術板解析、裁判手勢與規則。",
    "infographicKey": "info-pe-u5-1",
    "relatedPoints": [
      {
        "id": "kp-pe-u5-2",
        "title": "傳切配合與區域防守心法",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u5-3",
        "title": "運動競賽安全與裁判規則",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u6-1",
        "title": "壓力彈簧與情緒察覺三步驟",
        "unitId": "pe-u6",
        "subjectId": "health_pe",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：健體・觀念本質與定義"
      },
      {
        "id": "bridge-pe-u5",
        "isBridge": true,
        "title": "球類專項戰術與規則判決",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中體育【球類專項戰術與規則判決】：區域防守 vs 人盯人防守、攻守轉換戰術板解析、裁判手勢與規則。"
      }
    ]
  },
  {
    "id": "kp-pe-u5-2",
    "pointIndex": 1,
    "unitId": "pe-u5",
    "unitIndex": 4,
    "subjectId": "health_pe",
    "semester": "6B",
    "title": "傳切配合與區域防守心法",
    "category": "健體・運算算理與公式",
    "badgeColor": "amber",
    "definition": "傳切配合與區域防守心法：給了就跑 (Give and Go)；防守緊盯持球者與防守區域，雙手張開保持防守平衡步法。",
    "formulaOrRule": "核心工具與心法：一傳接發球起球 ➔ 二傳托球舉球到位 ➔ 三傳攻擊扣殺或吊球過網",
    "strategyTip": "【審題觸發】當題目出現「排球比賽防守反擊標準三觸球流程」時，立即啟動「一傳接發球起球 ➔ 二傳托球舉球到位 ➔ 三傳攻擊扣殺或吊球過網」解題。考前速記：籃球防守保持在對手與籃框之間；排球接傳扣三步攻擊；遵守規則防衝撞！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在球場上透過團隊溝通凝聚友誼默契、在面臨比分落後逆境時穩定心態發揮抗壓性。",
    "textbookFocus": "康軒：常考球類運動安全規則（籃球走步、雙手運球犯規；排球發球與三人觸球過網）。 ｜ 南一：側重防守站位原則（保持在進攻者與球籃/球門之間）、運動中防撞跌倒緩衝保護動作。 ｜ 翰林：側重團隊戰術配合（籃球傳切掩護、排球一傳二傳扣球攻擊、足球傳控導球）。",
    "juniorHighBridge": "國中體育【球類專項戰術與規則判決】：區域防守 vs 人盯人防守、攻守轉換戰術板解析、裁判手勢與規則。",
    "infographicKey": "info-pe-u5-2",
    "relatedPoints": [
      {
        "id": "kp-pe-u5-1",
        "title": "球類侵入性比賽空間製造",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u5-3",
        "title": "運動競賽安全與裁判規則",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u6-1",
        "title": "壓力彈簧與情緒察覺三步驟",
        "unitId": "pe-u6",
        "subjectId": "health_pe",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：健體・觀念本質與定義"
      },
      {
        "id": "bridge-pe-u5",
        "isBridge": true,
        "title": "球類專項戰術與規則判決",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中體育【球類專項戰術與規則判決】：區域防守 vs 人盯人防守、攻守轉換戰術板解析、裁判手勢與規則。"
      }
    ]
  },
  {
    "id": "kp-pe-u5-3",
    "pointIndex": 2,
    "unitId": "pe-u5",
    "unitIndex": 4,
    "subjectId": "health_pe",
    "semester": "6B",
    "title": "運動競賽安全與裁判規則",
    "category": "健體・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "運動競賽安全與裁判規則：掌握各類球類比賽觸球犯規、走步、出界等裁判手勢，配戴適當護具避免衝撞受傷。",
    "formulaOrRule": "核心工具與心法：穿著合適抓地防滑球鞋、修剪指甲、拿下手錶眼鏡吊飾等硬物、避免墊腳犯規",
    "strategyTip": "【審題觸發】當題目出現「預防球場運動傷害防護措施」時，立即啟動「穿著合適抓地防滑球鞋、修剪指甲、拿下手錶眼鏡吊飾等硬物、避免墊腳犯規」解題。考前速記：籃球防守保持在對手與籃框之間；排球接傳扣三步攻擊；遵守規則防衝撞！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在球場上透過團隊溝通凝聚友誼默契、在面臨比分落後逆境時穩定心態發揮抗壓性。",
    "textbookFocus": "康軒：常考球類運動安全規則（籃球走步、雙手運球犯規；排球發球與三人觸球過網）。 ｜ 南一：側重防守站位原則（保持在進攻者與球籃/球門之間）、運動中防撞跌倒緩衝保護動作。 ｜ 翰林：側重團隊戰術配合（籃球傳切掩護、排球一傳二傳扣球攻擊、足球傳控導球）。",
    "juniorHighBridge": "國中體育【球類專項戰術與規則判決】：區域防守 vs 人盯人防守、攻守轉換戰術板解析、裁判手勢與規則。",
    "infographicKey": "info-pe-u5-3",
    "relatedPoints": [
      {
        "id": "kp-pe-u5-1",
        "title": "球類侵入性比賽空間製造",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u5-2",
        "title": "傳切配合與區域防守心法",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u6-1",
        "title": "壓力彈簧與情緒察覺三步驟",
        "unitId": "pe-u6",
        "subjectId": "health_pe",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：健體・觀念本質與定義"
      },
      {
        "id": "bridge-pe-u5",
        "isBridge": true,
        "title": "球類專項戰術與規則判決",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中體育【球類專項戰術與規則判決】：區域防守 vs 人盯人防守、攻守轉換戰術板解析、裁判手勢與規則。"
      }
    ]
  },
  {
    "id": "kp-pe-u6-1",
    "pointIndex": 0,
    "unitId": "pe-u6",
    "unitIndex": 5,
    "subjectId": "health_pe",
    "semester": "6B",
    "title": "壓力彈簧與情緒察覺三步驟",
    "category": "健體・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "壓力彈簧與情緒察覺三步驟：察覺身體壓力訊號（心跳加速、肌肉緊繃、失眠） ➔ 接納自己正常情緒 ➔ 轉化焦點尋求健康抒發管道。",
    "formulaOrRule": "核心工具與心法：4-7-8 腹式深呼吸法（吸氣4秒、屏息7秒、慢吐氣8秒）放鬆自律神經",
    "strategyTip": "【審題觸發】當題目出現「面臨重大考試前緊張焦慮心跳加速緩解法」時，立即啟動「4-7-8 腹式深呼吸法（吸氣4秒、屏息7秒、慢吐氣8秒）放鬆自律神經」解題。考前速記：腹式深呼吸放鬆身心，轉念面對挫折逆境；情緒沒有對錯，學會接納並尋找解決之道！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在段考挫折失利後進行有效自我對話迅速復原、成為同儕遭遇低潮時溫暖傾聽的同理心夥伴。",
    "textbookFocus": "康軒：常考心理壓力來源辨識、身心放鬆技巧（腹式深呼吸、正念冥想、規律運動釋放腦內啡）。 ｜ 南一：側重校園人際同儕衝突調適、情緒 ABC 理論（信念決定情緒反應）與心理求助網絡資源。 ｜ 翰林：側重挫折復原力 (Resilience) 培養、從失敗中尋找學習點與轉念思維。",
    "juniorHighBridge": "國中健康教育【心理健康與壓力調適】：憂鬱症與焦慮症早期辨識、防衛機轉、社會支持網絡建立。",
    "infographicKey": "info-pe-u6-1",
    "relatedPoints": [
      {
        "id": "kp-pe-u6-2",
        "title": "成長型思維 (Growth M…",
        "unitId": "pe-u6",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u6-3",
        "title": "身心減壓實用技法",
        "unitId": "pe-u6",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u5-1",
        "title": "球類侵入性比賽空間製造",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：健體・觀念本質與定義"
      },
      {
        "id": "bridge-pe-u6",
        "isBridge": true,
        "title": "心理健康與壓力調適",
        "unitId": "pe-u6",
        "subjectId": "health_pe",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中健康教育【心理健康與壓力調適】：憂鬱症與焦慮症早期辨識、防衛機轉、社會支持網絡建立。"
      }
    ]
  },
  {
    "id": "kp-pe-u6-2",
    "pointIndex": 1,
    "unitId": "pe-u6",
    "unitIndex": 5,
    "subjectId": "health_pe",
    "semester": "6B",
    "title": "成長型思維 (Growth M…",
    "category": "健體・運算算理與公式",
    "badgeColor": "amber",
    "definition": "成長型思維 (Growth M…：成長型思維 (Growth Mindset) 賦能：「尚未 (Not Yet)」的力量，將考試挫折視為大腦神經元成長的契機，而非智力定型評判。",
    "formulaOrRule": "核心工具與心法：轉念成長型思維：「我只是『還沒』掌握正確方法，每次挫折都是大腦神經元成長的機會」",
    "strategyTip": "【審題觸發】當題目出現「當陷入「我怎麼這麼笨、我一定考不好」負面思維」時，立即啟動「轉念成長型思維：「我只是『還沒』掌握正確方法，每次挫折都是大腦神經元成長的機會」」解題。考前速記：腹式深呼吸放鬆身心，轉念面對挫折逆境；情緒沒有對錯，學會接納並尋找解決之道！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在段考挫折失利後進行有效自我對話迅速復原、成為同儕遭遇低潮時溫暖傾聽的同理心夥伴。",
    "textbookFocus": "康軒：常考心理壓力來源辨識、身心放鬆技巧（腹式深呼吸、正念冥想、規律運動釋放腦內啡）。 ｜ 南一：側重校園人際同儕衝突調適、情緒 ABC 理論（信念決定情緒反應）與心理求助網絡資源。 ｜ 翰林：側重挫折復原力 (Resilience) 培養、從失敗中尋找學習點與轉念思維。",
    "juniorHighBridge": "國中健康教育【心理健康與壓力調適】：憂鬱症與焦慮症早期辨識、防衛機轉、社會支持網絡建立。",
    "infographicKey": "info-pe-u6-2",
    "relatedPoints": [
      {
        "id": "kp-pe-u6-1",
        "title": "壓力彈簧與情緒察覺三步驟",
        "unitId": "pe-u6",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u6-3",
        "title": "身心減壓實用技法",
        "unitId": "pe-u6",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u5-1",
        "title": "球類侵入性比賽空間製造",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：健體・觀念本質與定義"
      },
      {
        "id": "bridge-pe-u6",
        "isBridge": true,
        "title": "心理健康與壓力調適",
        "unitId": "pe-u6",
        "subjectId": "health_pe",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中健康教育【心理健康與壓力調適】：憂鬱症與焦慮症早期辨識、防衛機轉、社會支持網絡建立。"
      }
    ]
  },
  {
    "id": "kp-pe-u6-3",
    "pointIndex": 2,
    "unitId": "pe-u6",
    "unitIndex": 5,
    "subjectId": "health_pe",
    "semester": "6B",
    "title": "身心減壓實用技法",
    "category": "健體・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "身心減壓實用技法：4-7-8 腹式深呼吸法（吸氣 4 秒、屏息 7 秒、吐氣 8 秒啟動副交感神經）、適度運動與主動向輔導老師、家長傾訴求助。",
    "formulaOrRule": "核心工具與心法：輔導室諮商老師、班導師、衛福部安心專線 1925、反霸凌專線 1953",
    "strategyTip": "【審題觸發】當題目出現「遭遇霸凌或嚴重情緒低落校園求助管道」時，立即啟動「輔導室諮商老師、班導師、衛福部安心專線 1925、反霸凌專線 1953」解題。考前速記：腹式深呼吸放鬆身心，轉念面對挫折逆境；情緒沒有對錯，學會接納並尋找解決之道！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在段考挫折失利後進行有效自我對話迅速復原、成為同儕遭遇低潮時溫暖傾聽的同理心夥伴。",
    "textbookFocus": "康軒：常考心理壓力來源辨識、身心放鬆技巧（腹式深呼吸、正念冥想、規律運動釋放腦內啡）。 ｜ 南一：側重校園人際同儕衝突調適、情緒 ABC 理論（信念決定情緒反應）與心理求助網絡資源。 ｜ 翰林：側重挫折復原力 (Resilience) 培養、從失敗中尋找學習點與轉念思維。",
    "juniorHighBridge": "國中健康教育【心理健康與壓力調適】：憂鬱症與焦慮症早期辨識、防衛機轉、社會支持網絡建立。",
    "infographicKey": "info-pe-u6-3",
    "relatedPoints": [
      {
        "id": "kp-pe-u6-1",
        "title": "壓力彈簧與情緒察覺三步驟",
        "unitId": "pe-u6",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u6-2",
        "title": "成長型思維 (Growth M…",
        "unitId": "pe-u6",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u5-1",
        "title": "球類侵入性比賽空間製造",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：健體・觀念本質與定義"
      },
      {
        "id": "bridge-pe-u6",
        "isBridge": true,
        "title": "心理健康與壓力調適",
        "unitId": "pe-u6",
        "subjectId": "health_pe",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中健康教育【心理健康與壓力調適】：憂鬱症與焦慮症早期辨識、防衛機轉、社會支持網絡建立。"
      }
    ]
  },
  {
    "id": "kp-comp-u1-1",
    "pointIndex": 0,
    "unitId": "comp-u1",
    "unitIndex": 0,
    "subjectId": "integrative",
    "semester": "6A",
    "title": "艾森豪時間四象限矩陣",
    "category": "綜合・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "艾森豪時間四象限矩陣：優先投入「重要但不緊急（第二象限）」如健康、自主深度學習、長遠規劃，擺脫整天救火之焦慮陷阱。",
    "formulaOrRule": "核心工具與心法：第二象限：重要但不緊急（如閱讀先修、規律運動、人際經營，杜絕拖延到變緊急火災）",
    "strategyTip": "【審題觸發】當題目出現「艾森豪四象限中最決定長期人生成就者」時，立即啟動「第二象限：重要但不緊急（如閱讀先修、規律運動、人際經營，杜絕拖延到變緊急火災）」解題。考前速記：先做第二象限重要不緊急的事；分辨「需要」與「想要」；番茄工作法高效擊退拖延！",
    "trapAlert": "【避雷防錯】防雷必背：優先投入「重要但不緊急（第二象限）」如健康、自主深度學習、長遠規劃，擺脫整天救火之焦慮陷阱。",
    "practicalUtility": "【生活實用】在長假期間自主訂立寒暑假讀書與運動計畫、妥善儲蓄過年壓歲錢實現個人長期夢想基金。",
    "textbookFocus": "康軒：常考時間管理艾森豪四象限矩陣（第一象限重要緊急、第二象限重要不緊急-自主學習重點）。 ｜ 南一：側重理財儲蓄觀念、想要與需要之分辨、631 收入分配儲蓄投資法則。 ｜ 翰林：側重專注力番茄工作法（專注25分鐘休息5分鐘）與克服拖延症的微步行動法。",
    "juniorHighBridge": "國中綜合活動【時間規劃與生涯理財】：複利效應、預算編列、高中職升學時間軸自主管理。",
    "infographicKey": "info-comp-u1-1",
    "relatedPoints": [
      {
        "id": "kp-comp-u1-2",
        "title": "番茄鐘自律專注法",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u1-3",
        "title": "需要",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・生活實用與避雷"
      },
      {
        "id": "kp-comp-u2-1",
        "title": "我訊息溝通黃金公式",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：綜合・觀念本質與定義"
      },
      {
        "id": "kp-math-u7-1",
        "title": "速率三要素核心關係",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "跨域理性規劃",
        "badgeType": "cross",
        "desc": "艾森豪矩陣時間規劃 ➔ 速率距離時間精準分配"
      },
      {
        "id": "bridge-comp-u1",
        "isBridge": true,
        "title": "時間規劃與生涯理財",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中綜合活動【時間規劃與生涯理財】：複利效應、預算編列、高中職升學時間軸自主管理。"
      }
    ]
  },
  {
    "id": "kp-comp-u1-2",
    "pointIndex": 1,
    "unitId": "comp-u1",
    "unitIndex": 0,
    "subjectId": "integrative",
    "semester": "6A",
    "title": "番茄鐘自律專注法",
    "category": "綜合・運算算理與公式",
    "badgeColor": "amber",
    "definition": "番茄鐘自律專注法：專注工作 25 分鐘 ➔ 徹底休息 5 分鐘；完成 4 個循環後長休息 15~30 分鐘，維持高敏捷大腦狀態。",
    "formulaOrRule": "核心工具與心法：專注學習 25 分鐘 ➔ 徹底休息 5 分鐘 ➔ 四個循環後大休息 15~30 分鐘",
    "strategyTip": "【審題觸發】當題目出現「破除拖延症之番茄鐘工作法 (Pomodoro)」時，立即啟動「專注學習 25 分鐘 ➔ 徹底休息 5 分鐘 ➔ 四個循環後大休息 15~30 分鐘」解題。考前速記：先做第二象限重要不緊急的事；分辨「需要」與「想要」；番茄工作法高效擊退拖延！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在長假期間自主訂立寒暑假讀書與運動計畫、妥善儲蓄過年壓歲錢實現個人長期夢想基金。",
    "textbookFocus": "康軒：常考時間管理艾森豪四象限矩陣（第一象限重要緊急、第二象限重要不緊急-自主學習重點）。 ｜ 南一：側重理財儲蓄觀念、想要與需要之分辨、631 收入分配儲蓄投資法則。 ｜ 翰林：側重專注力番茄工作法（專注25分鐘休息5分鐘）與克服拖延症的微步行動法。",
    "juniorHighBridge": "國中綜合活動【時間規劃與生涯理財】：複利效應、預算編列、高中職升學時間軸自主管理。",
    "infographicKey": "info-comp-u1-2",
    "relatedPoints": [
      {
        "id": "kp-comp-u1-1",
        "title": "艾森豪時間四象限矩陣",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・觀念本質與定義"
      },
      {
        "id": "kp-comp-u1-3",
        "title": "需要",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・生活實用與避雷"
      },
      {
        "id": "kp-comp-u2-1",
        "title": "我訊息溝通黃金公式",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：綜合・觀念本質與定義"
      },
      {
        "id": "kp-math-u7-1",
        "title": "速率三要素核心關係",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "跨域理性規劃",
        "badgeType": "cross",
        "desc": "艾森豪矩陣時間規劃 ➔ 速率距離時間精準分配"
      },
      {
        "id": "bridge-comp-u1",
        "isBridge": true,
        "title": "時間規劃與生涯理財",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中綜合活動【時間規劃與生涯理財】：複利效應、預算編列、高中職升學時間軸自主管理。"
      }
    ]
  },
  {
    "id": "kp-comp-u1-3",
    "pointIndex": 2,
    "unitId": "comp-u1",
    "unitIndex": 0,
    "subjectId": "integrative",
    "semester": "6A",
    "title": "需要",
    "category": "綜合・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "需要：vs「想要」及 631 理財儲蓄金字塔：收入 60% 生活必需支出、30% 儲蓄投資、10% 彈性消費；拒絕衝動購物。",
    "formulaOrRule": "核心工具與心法：冷靜期法則：在掏錢購買「想要」的非必需品前，先給自己 72 小時冷靜期",
    "strategyTip": "【審題觸發】當題目出現「避免衝動購物心法」時，立即啟動「冷靜期法則：在掏錢購買「想要」的非必需品前，先給自己 72 小時冷靜期」解題。考前速記：先做第二象限重要不緊急的事；分辨「需要」與「想要」；番茄工作法高效擊退拖延！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在長假期間自主訂立寒暑假讀書與運動計畫、妥善儲蓄過年壓歲錢實現個人長期夢想基金。",
    "textbookFocus": "康軒：常考時間管理艾森豪四象限矩陣（第一象限重要緊急、第二象限重要不緊急-自主學習重點）。 ｜ 南一：側重理財儲蓄觀念、想要與需要之分辨、631 收入分配儲蓄投資法則。 ｜ 翰林：側重專注力番茄工作法（專注25分鐘休息5分鐘）與克服拖延症的微步行動法。",
    "juniorHighBridge": "國中綜合活動【時間規劃與生涯理財】：複利效應、預算編列、高中職升學時間軸自主管理。",
    "infographicKey": "info-comp-u1-3",
    "relatedPoints": [
      {
        "id": "kp-comp-u1-1",
        "title": "艾森豪時間四象限矩陣",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・觀念本質與定義"
      },
      {
        "id": "kp-comp-u1-2",
        "title": "番茄鐘自律專注法",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u2-1",
        "title": "我訊息溝通黃金公式",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：綜合・觀念本質與定義"
      },
      {
        "id": "kp-math-u7-1",
        "title": "速率三要素核心關係",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "跨域理性規劃",
        "badgeType": "cross",
        "desc": "艾森豪矩陣時間規劃 ➔ 速率距離時間精準分配"
      },
      {
        "id": "bridge-comp-u1",
        "isBridge": true,
        "title": "時間規劃與生涯理財",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中綜合活動【時間規劃與生涯理財】：複利效應、預算編列、高中職升學時間軸自主管理。"
      }
    ]
  },
  {
    "id": "kp-comp-u2-1",
    "pointIndex": 0,
    "unitId": "comp-u2",
    "unitIndex": 1,
    "subjectId": "integrative",
    "semester": "6A",
    "title": "我訊息溝通黃金公式",
    "category": "綜合・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "我訊息溝通黃金公式：「當你【客觀事實】時，我覺得【真實感受】，因為【對我的實質影響】，我希望【具體期待】」。",
    "formulaOrRule": "核心工具與心法：「當你約定時間晚到半小時（事實），我感到著急與不被重視（感受），因為我重視我們的約定（需要），希望你下次若延誤能先傳訊息通知我（具體請求）」",
    "strategyTip": "【審題觸發】當題目出現「「你每次都這樣遲到，真的很討厭！」（你訊息批評）轉換為「我訊息」」時，立即啟動「「當你約定時間晚到半小時（事實），我感到著急與不被重視（感受），因為我重視我們的約定（需要），希望你下次若延誤能先傳訊息通知我（具體請求）」」解題。考前速記：我訊息公式：當你【事實】，我覺得【感受】，因為【影響】，我希望【期待】；不指責換位思考！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在與父母意見不同時能心平氣和表達想法爭取理解、在小組專案合作意見分歧時促進凝聚共識。",
    "textbookFocus": "康軒：常考我訊息 (I-Message) 溝通四步驟（事實、感受、影響、期待）將指責轉化為真誠溝通。 ｜ 南一：側重非暴力溝通 (NVC) 四要素（觀察、感受、需要、請求）在同儕衝突調解中的實戰。 ｜ 翰林：側重同理心傾聽三部曲（專注眼神接觸、複述情感關鍵字、確認理解不急於評判）。",
    "juniorHighBridge": "國中綜合活動【人際關係與情緒管理】：人際界線建立、情感教育、親職溝通橋樑搭建。",
    "infographicKey": "info-comp-u2-1",
    "relatedPoints": [
      {
        "id": "kp-comp-u2-2",
        "title": "同理心傾聽四大原則",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u2-3",
        "title": "人際衝突化解三部曲",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・生活實用與避雷"
      },
      {
        "id": "kp-comp-u3-1",
        "title": "多元智能理論打破智力迷思",
        "unitId": "comp-u3",
        "subjectId": "integrative",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：綜合・觀念本質與定義"
      },
      {
        "id": "bridge-comp-u2",
        "isBridge": true,
        "title": "人際關係與情緒管理",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中綜合活動【人際關係與情緒管理】：人際界線建立、情感教育、親職溝通橋樑搭建。"
      }
    ]
  },
  {
    "id": "kp-comp-u2-2",
    "pointIndex": 1,
    "unitId": "comp-u2",
    "unitIndex": 1,
    "subjectId": "integrative",
    "semester": "6A",
    "title": "同理心傾聽四大原則",
    "category": "綜合・運算算理與公式",
    "badgeColor": "amber",
    "definition": "同理心傾聽四大原則：眼神專注接觸、點頭給予回饋、不急著插話評判、以「你的意思是...」複述對話確認感受。",
    "formulaOrRule": "核心工具與心法：眼神專注不滑手機 ➔ 點頭不隨意打斷 ➔ 複述對方感受：「聽起來你今天真的受了很大的委屈」",
    "strategyTip": "【審題觸發】當題目出現「積極同理心聆聽三部曲」時，立即啟動「眼神專注不滑手機 ➔ 點頭不隨意打斷 ➔ 複述對方感受：「聽起來你今天真的受了很大的委屈」」解題。考前速記：我訊息公式：當你【事實】，我覺得【感受】，因為【影響】，我希望【期待】；不指責換位思考！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在與父母意見不同時能心平氣和表達想法爭取理解、在小組專案合作意見分歧時促進凝聚共識。",
    "textbookFocus": "康軒：常考我訊息 (I-Message) 溝通四步驟（事實、感受、影響、期待）將指責轉化為真誠溝通。 ｜ 南一：側重非暴力溝通 (NVC) 四要素（觀察、感受、需要、請求）在同儕衝突調解中的實戰。 ｜ 翰林：側重同理心傾聽三部曲（專注眼神接觸、複述情感關鍵字、確認理解不急於評判）。",
    "juniorHighBridge": "國中綜合活動【人際關係與情緒管理】：人際界線建立、情感教育、親職溝通橋樑搭建。",
    "infographicKey": "info-comp-u2-2",
    "relatedPoints": [
      {
        "id": "kp-comp-u2-1",
        "title": "我訊息溝通黃金公式",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・觀念本質與定義"
      },
      {
        "id": "kp-comp-u2-3",
        "title": "人際衝突化解三部曲",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・生活實用與避雷"
      },
      {
        "id": "kp-comp-u3-1",
        "title": "多元智能理論打破智力迷思",
        "unitId": "comp-u3",
        "subjectId": "integrative",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：綜合・觀念本質與定義"
      },
      {
        "id": "bridge-comp-u2",
        "isBridge": true,
        "title": "人際關係與情緒管理",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中綜合活動【人際關係與情緒管理】：人際界線建立、情感教育、親職溝通橋樑搭建。"
      }
    ]
  },
  {
    "id": "kp-comp-u2-3",
    "pointIndex": 2,
    "unitId": "comp-u2",
    "unitIndex": 1,
    "subjectId": "integrative",
    "semester": "6A",
    "title": "人際衝突化解三部曲",
    "category": "綜合・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "人際衝突化解三部曲：先降溫（暫停離開情緒現場） ➔ 釐清雙方真正需求與界線 ➔ 共同尋找雙贏 (Win-Win) 替代方案。",
    "formulaOrRule": "核心工具與心法：對事不對人；尋找雙方利益交集的「雙贏 (Win-Win) 解決方案」",
    "strategyTip": "【審題觸發】當題目出現「同儕群體衝突化解心法」時，立即啟動「對事不對人；尋找雙方利益交集的「雙贏 (Win-Win) 解決方案」」解題。考前速記：我訊息公式：當你【事實】，我覺得【感受】，因為【影響】，我希望【期待】；不指責換位思考！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在與父母意見不同時能心平氣和表達想法爭取理解、在小組專案合作意見分歧時促進凝聚共識。",
    "textbookFocus": "康軒：常考我訊息 (I-Message) 溝通四步驟（事實、感受、影響、期待）將指責轉化為真誠溝通。 ｜ 南一：側重非暴力溝通 (NVC) 四要素（觀察、感受、需要、請求）在同儕衝突調解中的實戰。 ｜ 翰林：側重同理心傾聽三部曲（專注眼神接觸、複述情感關鍵字、確認理解不急於評判）。",
    "juniorHighBridge": "國中綜合活動【人際關係與情緒管理】：人際界線建立、情感教育、親職溝通橋樑搭建。",
    "infographicKey": "info-comp-u2-3",
    "relatedPoints": [
      {
        "id": "kp-comp-u2-1",
        "title": "我訊息溝通黃金公式",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・觀念本質與定義"
      },
      {
        "id": "kp-comp-u2-2",
        "title": "同理心傾聽四大原則",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u3-1",
        "title": "多元智能理論打破智力迷思",
        "unitId": "comp-u3",
        "subjectId": "integrative",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：綜合・觀念本質與定義"
      },
      {
        "id": "bridge-comp-u2",
        "isBridge": true,
        "title": "人際關係與情緒管理",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中綜合活動【人際關係與情緒管理】：人際界線建立、情感教育、親職溝通橋樑搭建。"
      }
    ]
  },
  {
    "id": "kp-comp-u3-1",
    "pointIndex": 0,
    "unitId": "comp-u3",
    "unitIndex": 2,
    "subjectId": "integrative",
    "semester": "6A",
    "title": "多元智能理論打破智力迷思",
    "category": "綜合・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "多元智能理論打破智力迷思：語文、數理邏輯、空間視覺、肢體動覺、音樂、人際、內省、自然觀察八大智能，每個人皆有天賦亮點。",
    "formulaOrRule": "核心工具與心法：多元智能理論：天生我材必有用，每個人都有屬於自己的優勢智能組合",
    "strategyTip": "【審題觸發】當題目出現「打破單一智育成績定終身迷思」時，立即啟動「多元智能理論：天生我材必有用，每個人都有屬於自己的優勢智能組合」解題。考前速記：天生我材必有用，八大智能各展所長；費曼學習法以教促學，成長型思維深信潛能無限！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】探索自身獨特才藝與熱情所在堅定自信、為升國中銜接擬定清晰可行的自律學習進度計畫。",
    "textbookFocus": "康軒：常考多元智能理論（迦納八大智能）發掘個人優勢天賦與國中生活適應準備。 ｜ 南一：側重成長型思維 (Growth Mindset) 與定型思維對照（大腦如肌肉越練越強，將「我不會」改為「我還沒學會」）。 ｜ 翰林：側重費曼學習法（以教促學四步驟：選主題、用大白話解釋、找卡關點、簡化類比）。",
    "juniorHighBridge": "國中綜合與生涯輔導【生涯發展教育手冊】：性向測驗分析、高中普通科 vs 高職技術型高中科系探索。",
    "infographicKey": "info-comp-u3-1",
    "relatedPoints": [
      {
        "id": "kp-comp-u3-2",
        "title": "費曼學習法四大閉環步驟",
        "unitId": "comp-u3",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u3-3",
        "title": "SMART 目標設定原則",
        "unitId": "comp-u3",
        "subjectId": "integrative",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・生活實用與避雷"
      },
      {
        "id": "kp-comp-u4-1",
        "title": "服務學習完整四階段",
        "unitId": "comp-u4",
        "subjectId": "integrative",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：綜合・觀念本質與定義"
      },
      {
        "id": "kp-man-u1-2",
        "title": "高年級長文雙閱讀策略",
        "unitId": "man-u1",
        "subjectId": "mandarin",
        "relation": "跨域深度學習",
        "badgeType": "cross",
        "desc": "費曼學習法小學生教導 ➔ 閱讀理解精準主旨提煉"
      },
      {
        "id": "bridge-comp-u3",
        "isBridge": true,
        "title": "生涯發展教育手冊",
        "unitId": "comp-u3",
        "subjectId": "integrative",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中綜合與生涯輔導【生涯發展教育手冊】：性向測驗分析、高中普通科 vs 高職技術型高中科系探索。"
      }
    ]
  },
  {
    "id": "kp-comp-u3-2",
    "pointIndex": 1,
    "unitId": "comp-u3",
    "unitIndex": 2,
    "subjectId": "integrative",
    "semester": "6A",
    "title": "費曼學習法四大閉環步驟",
    "category": "綜合・運算算理與公式",
    "badgeColor": "amber",
    "definition": "費曼學習法四大閉環步驟：選定概念 ➔ 用淺顯大白話教給門外漢或小學生 ➔ 找出卡殼盲點重新查書 ➔ 提煉簡化為生活類比。",
    "formulaOrRule": "核心工具與心法：S (明確 Specific)、M (可衡量 Measurable)、A (可達成 Achievable)、R (相關性 Relevant)、T (有時限 Time-bound)",
    "strategyTip": "【審題觸發】當題目出現「SMART 目標設定五大檢驗指標」時，立即啟動「S (明確 Specific)、M (可衡量 Measurable)、A (可達成 Achievable)、R (相關性 Relevant)、T (有時限 Time-bound)」解題。考前速記：天生我材必有用，八大智能各展所長；費曼學習法以教促學，成長型思維深信潛能無限！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】探索自身獨特才藝與熱情所在堅定自信、為升國中銜接擬定清晰可行的自律學習進度計畫。",
    "textbookFocus": "康軒：常考多元智能理論（迦納八大智能）發掘個人優勢天賦與國中生活適應準備。 ｜ 南一：側重成長型思維 (Growth Mindset) 與定型思維對照（大腦如肌肉越練越強，將「我不會」改為「我還沒學會」）。 ｜ 翰林：側重費曼學習法（以教促學四步驟：選主題、用大白話解釋、找卡關點、簡化類比）。",
    "juniorHighBridge": "國中綜合與生涯輔導【生涯發展教育手冊】：性向測驗分析、高中普通科 vs 高職技術型高中科系探索。",
    "infographicKey": "info-comp-u3-2",
    "relatedPoints": [
      {
        "id": "kp-comp-u3-1",
        "title": "多元智能理論打破智力迷思",
        "unitId": "comp-u3",
        "subjectId": "integrative",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・觀念本質與定義"
      },
      {
        "id": "kp-comp-u3-3",
        "title": "SMART 目標設定原則",
        "unitId": "comp-u3",
        "subjectId": "integrative",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・生活實用與避雷"
      },
      {
        "id": "kp-comp-u4-1",
        "title": "服務學習完整四階段",
        "unitId": "comp-u4",
        "subjectId": "integrative",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：綜合・觀念本質與定義"
      },
      {
        "id": "kp-man-u1-2",
        "title": "高年級長文雙閱讀策略",
        "unitId": "man-u1",
        "subjectId": "mandarin",
        "relation": "跨域深度學習",
        "badgeType": "cross",
        "desc": "費曼學習法小學生教導 ➔ 閱讀理解精準主旨提煉"
      },
      {
        "id": "bridge-comp-u3",
        "isBridge": true,
        "title": "生涯發展教育手冊",
        "unitId": "comp-u3",
        "subjectId": "integrative",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中綜合與生涯輔導【生涯發展教育手冊】：性向測驗分析、高中普通科 vs 高職技術型高中科系探索。"
      }
    ]
  },
  {
    "id": "kp-comp-u3-3",
    "pointIndex": 2,
    "unitId": "comp-u3",
    "unitIndex": 2,
    "subjectId": "integrative",
    "semester": "6A",
    "title": "SMART 目標設定原則",
    "category": "綜合・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "SMART 目標設定原則：具體的 (Specific)、可衡量的 (Measurable)、可達成的 (Attainable)、相關的 (Relevant)、有明確截止期限的 (Time-bound)。",
    "formulaOrRule": "核心工具與心法：將自己學會的複雜知識，用小學生都能聽懂的淺顯白話講給別人聽",
    "strategyTip": "【審題觸發】當題目出現「費曼學習法 (Feynman Technique) 內化知識」時，立即啟動「將自己學會的複雜知識，用小學生都能聽懂的淺顯白話講給別人聽」解題。考前速記：天生我材必有用，八大智能各展所長；費曼學習法以教促學，成長型思維深信潛能無限！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】探索自身獨特才藝與熱情所在堅定自信、為升國中銜接擬定清晰可行的自律學習進度計畫。",
    "textbookFocus": "康軒：常考多元智能理論（迦納八大智能）發掘個人優勢天賦與國中生活適應準備。 ｜ 南一：側重成長型思維 (Growth Mindset) 與定型思維對照（大腦如肌肉越練越強，將「我不會」改為「我還沒學會」）。 ｜ 翰林：側重費曼學習法（以教促學四步驟：選主題、用大白話解釋、找卡關點、簡化類比）。",
    "juniorHighBridge": "國中綜合與生涯輔導【生涯發展教育手冊】：性向測驗分析、高中普通科 vs 高職技術型高中科系探索。",
    "infographicKey": "info-comp-u3-3",
    "relatedPoints": [
      {
        "id": "kp-comp-u3-1",
        "title": "多元智能理論打破智力迷思",
        "unitId": "comp-u3",
        "subjectId": "integrative",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・觀念本質與定義"
      },
      {
        "id": "kp-comp-u3-2",
        "title": "費曼學習法四大閉環步驟",
        "unitId": "comp-u3",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u4-1",
        "title": "服務學習完整四階段",
        "unitId": "comp-u4",
        "subjectId": "integrative",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：綜合・觀念本質與定義"
      },
      {
        "id": "kp-man-u1-2",
        "title": "高年級長文雙閱讀策略",
        "unitId": "man-u1",
        "subjectId": "mandarin",
        "relation": "跨域深度學習",
        "badgeType": "cross",
        "desc": "費曼學習法小學生教導 ➔ 閱讀理解精準主旨提煉"
      },
      {
        "id": "bridge-comp-u3",
        "isBridge": true,
        "title": "生涯發展教育手冊",
        "unitId": "comp-u3",
        "subjectId": "integrative",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中綜合與生涯輔導【生涯發展教育手冊】：性向測驗分析、高中普通科 vs 高職技術型高中科系探索。"
      }
    ]
  },
  {
    "id": "kp-comp-u4-1",
    "pointIndex": 0,
    "unitId": "comp-u4",
    "unitIndex": 3,
    "subjectId": "integrative",
    "semester": "6B",
    "title": "服務學習完整四階段",
    "category": "綜合・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "服務學習完整四階段：準備（調查需求與規劃） ➔ 服務（動手實踐） ➔ 反思（回顧感受與學習收穫） ➔ 慶賀（成果分享表揚）。",
    "formulaOrRule": "核心工具與心法：服務學習包含「反思 (Reflection)」與「學習目標」，在付出中看見社會結構問題與自我成長",
    "strategyTip": "【審題觸發】當題目出現「服務學習與單純勞動打掃之本質區別」時，立即啟動「服務學習包含「反思 (Reflection)」與「學習目標」，在付出中看見社會結構問題與自我成長」解題。考前速記：服務學習四部曲：準備 ➔ 服務 ➔ 反思 ➔ 慶賀；服務非施捨，而是平等陪伴與生命成長！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】利用週末與家人參與社區海灘淨灘或關懷獨居長者、在生活中實踐「利他即是利己」的幸福真諦。",
    "textbookFocus": "康軒：常考服務學習四部曲（準備、服務、反思、慶賀）在在地社區關懷志工活動之落實。 ｜ 南一：側重公民社會參與行動、環境保護淨灘志工、社區文史走讀與成果發表分享。 ｜ 翰林：側重關懷弱勢群體、探訪長者、友善校園無障礙環境設施踏查與同理心實踐。",
    "juniorHighBridge": "國中綜合活動【志工服務與公民參與】：志願服務法規認識、公共議題倡議與青年社會責任。",
    "infographicKey": "info-comp-u4-1",
    "relatedPoints": [
      {
        "id": "kp-comp-u4-2",
        "title": "服務學習與單純勞動之本質差異",
        "unitId": "comp-u4",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u4-3",
        "title": "社區參與與弱勢關懷行動",
        "unitId": "comp-u4",
        "subjectId": "integrative",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・生活實用與避雷"
      },
      {
        "id": "kp-comp-u5-1",
        "title": "假訊息查核三步驟",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：綜合・觀念本質與定義"
      },
      {
        "id": "bridge-comp-u4",
        "isBridge": true,
        "title": "志工服務與公民參與",
        "unitId": "comp-u4",
        "subjectId": "integrative",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中綜合活動【志工服務與公民參與】：志願服務法規認識、公共議題倡議與青年社會責任。"
      }
    ]
  },
  {
    "id": "kp-comp-u4-2",
    "pointIndex": 1,
    "unitId": "comp-u4",
    "unitIndex": 3,
    "subjectId": "integrative",
    "semester": "6B",
    "title": "服務學習與單純勞動之本質差異",
    "category": "綜合・運算算理與公式",
    "badgeColor": "amber",
    "definition": "服務學習與單純勞動之本質差異：服務學習強調「動手做」與「深層反思 (Reflection)」並重，從付出中深化社會公民責任感。",
    "formulaOrRule": "核心工具與心法：摒棄高高在上的施捨心態，以平等的同理心與尊重相伴",
    "strategyTip": "【審題觸發】當題目出現「走訪養老院或育幼院服務應有心態」時，立即啟動「摒棄高高在上的施捨心態，以平等的同理心與尊重相伴」解題。考前速記：服務學習四部曲：準備 ➔ 服務 ➔ 反思 ➔ 慶賀；服務非施捨，而是平等陪伴與生命成長！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】利用週末與家人參與社區海灘淨灘或關懷獨居長者、在生活中實踐「利他即是利己」的幸福真諦。",
    "textbookFocus": "康軒：常考服務學習四部曲（準備、服務、反思、慶賀）在在地社區關懷志工活動之落實。 ｜ 南一：側重公民社會參與行動、環境保護淨灘志工、社區文史走讀與成果發表分享。 ｜ 翰林：側重關懷弱勢群體、探訪長者、友善校園無障礙環境設施踏查與同理心實踐。",
    "juniorHighBridge": "國中綜合活動【志工服務與公民參與】：志願服務法規認識、公共議題倡議與青年社會責任。",
    "infographicKey": "info-comp-u4-2",
    "relatedPoints": [
      {
        "id": "kp-comp-u4-1",
        "title": "服務學習完整四階段",
        "unitId": "comp-u4",
        "subjectId": "integrative",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・觀念本質與定義"
      },
      {
        "id": "kp-comp-u4-3",
        "title": "社區參與與弱勢關懷行動",
        "unitId": "comp-u4",
        "subjectId": "integrative",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・生活實用與避雷"
      },
      {
        "id": "kp-comp-u5-1",
        "title": "假訊息查核三步驟",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：綜合・觀念本質與定義"
      },
      {
        "id": "bridge-comp-u4",
        "isBridge": true,
        "title": "志工服務與公民參與",
        "unitId": "comp-u4",
        "subjectId": "integrative",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中綜合活動【志工服務與公民參與】：志願服務法規認識、公共議題倡議與青年社會責任。"
      }
    ]
  },
  {
    "id": "kp-comp-u4-3",
    "pointIndex": 2,
    "unitId": "comp-u4",
    "unitIndex": 3,
    "subjectId": "integrative",
    "semester": "6B",
    "title": "社區參與與弱勢關懷行動",
    "category": "綜合・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "社區參與與弱勢關懷行動：走入在地社區、關懷獨居長者與育幼院兒童，用同理心與實際行動溫暖社會。",
    "formulaOrRule": "核心工具與心法：結合全校師生力量、透明公開募款去向、聚焦特定弱勢或動保議題",
    "strategyTip": "【審題觸發】當題目出現「校園公益義賣倡議活動設計」時，立即啟動「結合全校師生力量、透明公開募款去向、聚焦特定弱勢或動保議題」解題。考前速記：服務學習四部曲：準備 ➔ 服務 ➔ 反思 ➔ 慶賀；服務非施捨，而是平等陪伴與生命成長！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】利用週末與家人參與社區海灘淨灘或關懷獨居長者、在生活中實踐「利他即是利己」的幸福真諦。",
    "textbookFocus": "康軒：常考服務學習四部曲（準備、服務、反思、慶賀）在在地社區關懷志工活動之落實。 ｜ 南一：側重公民社會參與行動、環境保護淨灘志工、社區文史走讀與成果發表分享。 ｜ 翰林：側重關懷弱勢群體、探訪長者、友善校園無障礙環境設施踏查與同理心實踐。",
    "juniorHighBridge": "國中綜合活動【志工服務與公民參與】：志願服務法規認識、公共議題倡議與青年社會責任。",
    "infographicKey": "info-comp-u4-3",
    "relatedPoints": [
      {
        "id": "kp-comp-u4-1",
        "title": "服務學習完整四階段",
        "unitId": "comp-u4",
        "subjectId": "integrative",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・觀念本質與定義"
      },
      {
        "id": "kp-comp-u4-2",
        "title": "服務學習與單純勞動之本質差異",
        "unitId": "comp-u4",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u5-1",
        "title": "假訊息查核三步驟",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：綜合・觀念本質與定義"
      },
      {
        "id": "bridge-comp-u4",
        "isBridge": true,
        "title": "志工服務與公民參與",
        "unitId": "comp-u4",
        "subjectId": "integrative",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中綜合活動【志工服務與公民參與】：志願服務法規認識、公共議題倡議與青年社會責任。"
      }
    ]
  },
  {
    "id": "kp-comp-u5-1",
    "pointIndex": 0,
    "unitId": "comp-u5",
    "unitIndex": 4,
    "subjectId": "integrative",
    "semester": "6B",
    "title": "假訊息查核三步驟",
    "category": "綜合・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "假訊息查核三步驟：停（先別急著轉發） ➔ 看（檢查來源網址與發布日期） ➔ 查（透過台灣事實查核中心/MyGoPen 交叉比對）。",
    "formulaOrRule": "核心工具與心法：檢視訊息來源是否具權威 ➔ 檢查是否只有聳動標題缺乏證據 ➔ 使用台灣事實查核中心 (TFC) 或 Cofacts 查證",
    "strategyTip": "【審題觸發】當題目出現「辨識假新聞與不實網路謠言查證三步驟」時，立即啟動「檢視訊息來源是否具權威 ➔ 檢查是否只有聳動標題缺乏證據 ➔ 使用台灣事實查核中心 (TFC) 或 Cofacts 查證」解題。考前速記：假訊息查核停看查；網路霸凌三不一留證據齊；凡走過必留數位足跡，謹慎發言保護隱私！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】主動向家中長輩宣導防範假投資與假檢警網路詐騙、培養數位排毒習慣找回專注深度閱讀力。",
    "textbookFocus": "康軒：常考假訊息查證三步驟（停-不立即轉發、看-檢查來源網址、查-事實查核中心查證）。 ｜ 南一：側重數位足跡不可逆性、個人資料與帳號密碼保護、網路成癮自我檢核與健康上網公約。 ｜ 翰林：側重網路防霸凌「三不一留」（不附和、不轉傳、不謾罵、截圖留存證據撥打1953）。",
    "juniorHighBridge": "國中資訊科技與綜合【資訊倫理與數位公民權】：著作權法創用 CC 授權、個資法保護、AI深偽技術 (Deepfake) 辨識。",
    "infographicKey": "info-comp-u5-1",
    "relatedPoints": [
      {
        "id": "kp-comp-u5-2",
        "title": "辨識 AI 深度偽造 (Dee…",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u5-3",
        "title": "網路霸凌防制與數位安全三不一要",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・生活實用與避雷"
      },
      {
        "id": "kp-comp-u6-1",
        "title": "無痕山林 LNT 七大準則核心",
        "unitId": "comp-u6",
        "subjectId": "integrative",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：綜合・觀念本質與定義"
      },
      {
        "id": "bridge-comp-u5",
        "isBridge": true,
        "title": "資訊倫理與數位公民權",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中資訊科技與綜合【資訊倫理與數位公民權】：著作權法創用 CC 授權、個資法保護、AI深偽技術 (Deepfake) 辨識。"
      }
    ]
  },
  {
    "id": "kp-comp-u5-2",
    "pointIndex": 1,
    "unitId": "comp-u5",
    "unitIndex": 4,
    "subjectId": "integrative",
    "semester": "6B",
    "title": "辨識 AI 深度偽造 (Dee…",
    "category": "綜合・運算算理與公式",
    "badgeColor": "amber",
    "definition": "辨識 AI 深度偽造 (Dee…：辨識 AI 深度偽造 (Deepfake) 破綻：觀察眨眼頻率是否異常、臉頰光影與頭髮邊緣是否模糊扭曲、牙齒手指數量是否正確。",
    "formulaOrRule": "核心工具與心法：在網路張貼任何照片或言論前先思考：「如果這張照片出現在學校公告欄或十年後老闆面前，我會安心嗎？」",
    "strategyTip": "【審題觸發】當題目出現「數位足跡與隱私防護關鍵心法」時，立即啟動「在網路張貼任何照片或言論前先思考：「如果這張照片出現在學校公告欄或十年後老闆面前，我會安心嗎？」」解題。考前速記：假訊息查核停看查；網路霸凌三不一留證據齊；凡走過必留數位足跡，謹慎發言保護隱私！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】主動向家中長輩宣導防範假投資與假檢警網路詐騙、培養數位排毒習慣找回專注深度閱讀力。",
    "textbookFocus": "康軒：常考假訊息查證三步驟（停-不立即轉發、看-檢查來源網址、查-事實查核中心查證）。 ｜ 南一：側重數位足跡不可逆性、個人資料與帳號密碼保護、網路成癮自我檢核與健康上網公約。 ｜ 翰林：側重網路防霸凌「三不一留」（不附和、不轉傳、不謾罵、截圖留存證據撥打1953）。",
    "juniorHighBridge": "國中資訊科技與綜合【資訊倫理與數位公民權】：著作權法創用 CC 授權、個資法保護、AI深偽技術 (Deepfake) 辨識。",
    "infographicKey": "info-comp-u5-2",
    "relatedPoints": [
      {
        "id": "kp-comp-u5-1",
        "title": "假訊息查核三步驟",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・觀念本質與定義"
      },
      {
        "id": "kp-comp-u5-3",
        "title": "網路霸凌防制與數位安全三不一要",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・生活實用與避雷"
      },
      {
        "id": "kp-comp-u6-1",
        "title": "無痕山林 LNT 七大準則核心",
        "unitId": "comp-u6",
        "subjectId": "integrative",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：綜合・觀念本質與定義"
      },
      {
        "id": "bridge-comp-u5",
        "isBridge": true,
        "title": "資訊倫理與數位公民權",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中資訊科技與綜合【資訊倫理與數位公民權】：著作權法創用 CC 授權、個資法保護、AI深偽技術 (Deepfake) 辨識。"
      }
    ]
  },
  {
    "id": "kp-comp-u5-3",
    "pointIndex": 2,
    "unitId": "comp-u5",
    "unitIndex": 4,
    "subjectId": "integrative",
    "semester": "6B",
    "title": "網路霸凌防制與數位安全三不一要",
    "category": "綜合・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "網路霸凌防制與數位安全三不一要：不輕信、不轉傳、不拍攝私密照；遇到網路霸凌要勇敢截圖存證並向師長或 iWIN 檢舉申訴。",
    "formulaOrRule": "核心工具與心法：設定 App 每日使用時間上限、讀書時手機置於視線之外、睡前半小時遠離藍光螢幕",
    "strategyTip": "【審題觸發】當題目出現「預防多巴胺短影音成癮自我管理」時，立即啟動「設定 App 每日使用時間上限、讀書時手機置於視線之外、睡前半小時遠離藍光螢幕」解題。考前速記：假訊息查核停看查；網路霸凌三不一留證據齊；凡走過必留數位足跡，謹慎發言保護隱私！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】主動向家中長輩宣導防範假投資與假檢警網路詐騙、培養數位排毒習慣找回專注深度閱讀力。",
    "textbookFocus": "康軒：常考假訊息查證三步驟（停-不立即轉發、看-檢查來源網址、查-事實查核中心查證）。 ｜ 南一：側重數位足跡不可逆性、個人資料與帳號密碼保護、網路成癮自我檢核與健康上網公約。 ｜ 翰林：側重網路防霸凌「三不一留」（不附和、不轉傳、不謾罵、截圖留存證據撥打1953）。",
    "juniorHighBridge": "國中資訊科技與綜合【資訊倫理與數位公民權】：著作權法創用 CC 授權、個資法保護、AI深偽技術 (Deepfake) 辨識。",
    "infographicKey": "info-comp-u5-3",
    "relatedPoints": [
      {
        "id": "kp-comp-u5-1",
        "title": "假訊息查核三步驟",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・觀念本質與定義"
      },
      {
        "id": "kp-comp-u5-2",
        "title": "辨識 AI 深度偽造 (Dee…",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u6-1",
        "title": "無痕山林 LNT 七大準則核心",
        "unitId": "comp-u6",
        "subjectId": "integrative",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：綜合・觀念本質與定義"
      },
      {
        "id": "bridge-comp-u5",
        "isBridge": true,
        "title": "資訊倫理與數位公民權",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中資訊科技與綜合【資訊倫理與數位公民權】：著作權法創用 CC 授權、個資法保護、AI深偽技術 (Deepfake) 辨識。"
      }
    ]
  },
  {
    "id": "kp-comp-u6-1",
    "pointIndex": 0,
    "unitId": "comp-u6",
    "unitIndex": 5,
    "subjectId": "integrative",
    "semester": "6B",
    "title": "無痕山林 LNT 七大準則核心",
    "category": "綜合・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "無痕山林 LNT 七大準則核心：事前充分規劃、在堅實地面行走宿營、妥善處理垃圾帶走、保留自然原貌、降低用火衝擊、尊重野生動物、考量其他使用者。",
    "formulaOrRule": "核心工具與心法：事前充分規劃、在堅實地面行走宿營、妥善處理垃圾排遺、保持環境原有風貌、減低用火影響、尊重野生動植物、考量其他使用者",
    "strategyTip": "【審題觸發】當題目出現「無痕山林 (LNT) 七大準則核心理念」時，立即啟動「事前充分規劃、在堅實地面行走宿營、妥善處理垃圾排遺、保持環境原有風貌、減低用火影響、尊重野生動植物、考量其他使用者」解題。考前速記：無痕山林七準則垃圾全帶走；迷路求生 333，防失溫永遠最優先；求救吹響六聲長音！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】全家登山健行落實垃圾全部帶下山不遺留果皮、在居家與學校熟記避難包物品整備與逃生動線。",
    "textbookFocus": "康軒：常考無痕山林 (Leave No Trace, LNT) 七大原則（事前規劃、在堅實路面行走、妥善處理垃圾帶下山等）。 ｜ 南一：側重國際標準哨音求救訊號（每分鐘 6 聲長音，停 1 分鐘後重複）與防範野生動物安全常識。 ｜ 翰林：側重戶外登山迷路求生「333 原則」（失溫 3 小時、缺水 3 天、飢餓 3 週，保暖永遠排第一）。",
    "juniorHighBridge": "國中綜合與童軍教育【戶外生活與童軍技能】：野外求生雙平結八字結繩結應用、方向定向越野、急救與營隊自主管理。",
    "infographicKey": "info-comp-u6-1",
    "relatedPoints": [
      {
        "id": "kp-comp-u6-2",
        "title": "戶外迷路緊急應變 STOP 原則",
        "unitId": "comp-u6",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u6-3",
        "title": "戶外遇險求生 333 原則",
        "unitId": "comp-u6",
        "subjectId": "integrative",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・生活實用與避雷"
      },
      {
        "id": "kp-comp-u5-1",
        "title": "假訊息查核三步驟",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：綜合・觀念本質與定義"
      },
      {
        "id": "bridge-comp-u6",
        "isBridge": true,
        "title": "戶外生活與童軍技能",
        "unitId": "comp-u6",
        "subjectId": "integrative",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中綜合與童軍教育【戶外生活與童軍技能】：野外求生雙平結八字結繩結應用、方向定向越野、急救與營隊自主管理。"
      }
    ]
  },
  {
    "id": "kp-comp-u6-2",
    "pointIndex": 1,
    "unitId": "comp-u6",
    "unitIndex": 5,
    "subjectId": "integrative",
    "semester": "6B",
    "title": "戶外迷路緊急應變 STOP 原則",
    "category": "綜合・運算算理與公式",
    "badgeColor": "amber",
    "definition": "戶外迷路緊急應變 STOP 原則：Stop（停下勿亂走） ➔ Think（冷靜思考） ➔ Observe（觀察四周環境資源） ➔ Plan（制定求生計畫）。",
    "formulaOrRule": "核心工具與心法：失溫 (Hypothermia)！3小時失溫即可致命，故求生第一要務是防風防雨保暖與保持乾燥",
    "strategyTip": "【審題觸發】當題目出現「迷路遇險求生「333 原則」中最致命首要威脅」時，立即啟動「失溫 (Hypothermia)！3小時失溫即可致命，故求生第一要務是防風防雨保暖與保持乾燥」解題。考前速記：無痕山林七準則垃圾全帶走；迷路求生 333，防失溫永遠最優先；求救吹響六聲長音！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】全家登山健行落實垃圾全部帶下山不遺留果皮、在居家與學校熟記避難包物品整備與逃生動線。",
    "textbookFocus": "康軒：常考無痕山林 (Leave No Trace, LNT) 七大原則（事前規劃、在堅實路面行走、妥善處理垃圾帶下山等）。 ｜ 南一：側重國際標準哨音求救訊號（每分鐘 6 聲長音，停 1 分鐘後重複）與防範野生動物安全常識。 ｜ 翰林：側重戶外登山迷路求生「333 原則」（失溫 3 小時、缺水 3 天、飢餓 3 週，保暖永遠排第一）。",
    "juniorHighBridge": "國中綜合與童軍教育【戶外生活與童軍技能】：野外求生雙平結八字結繩結應用、方向定向越野、急救與營隊自主管理。",
    "infographicKey": "info-comp-u6-2",
    "relatedPoints": [
      {
        "id": "kp-comp-u6-1",
        "title": "無痕山林 LNT 七大準則核心",
        "unitId": "comp-u6",
        "subjectId": "integrative",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・觀念本質與定義"
      },
      {
        "id": "kp-comp-u6-3",
        "title": "戶外遇險求生 333 原則",
        "unitId": "comp-u6",
        "subjectId": "integrative",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・生活實用與避雷"
      },
      {
        "id": "kp-comp-u5-1",
        "title": "假訊息查核三步驟",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：綜合・觀念本質與定義"
      },
      {
        "id": "bridge-comp-u6",
        "isBridge": true,
        "title": "戶外生活與童軍技能",
        "unitId": "comp-u6",
        "subjectId": "integrative",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中綜合與童軍教育【戶外生活與童軍技能】：野外求生雙平結八字結繩結應用、方向定向越野、急救與營隊自主管理。"
      }
    ]
  },
  {
    "id": "kp-comp-u6-3",
    "pointIndex": 2,
    "unitId": "comp-u6",
    "unitIndex": 5,
    "subjectId": "integrative",
    "semester": "6B",
    "title": "戶外遇險求生 333 原則",
    "category": "綜合・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "戶外遇險求生 333 原則：失溫 3 小時有生命危險（首要防風保暖避雨）；缺水 3 天有生命危險；缺食物 3 週有生命危險。",
    "formulaOrRule": "核心工具與心法：「趴下、掩護、穩住」保護頭頸部，切勿慌亂衝出室外或盲目跑向電梯",
    "strategyTip": "【審題觸發】當題目出現「地震發生瞬間首要避難動作」時，立即啟動「「趴下、掩護、穩住」保護頭頸部，切勿慌亂衝出室外或盲目跑向電梯」解題。考前速記：無痕山林七準則垃圾全帶走；迷路求生 333，防失溫永遠最優先；求救吹響六聲長音！",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】全家登山健行落實垃圾全部帶下山不遺留果皮、在居家與學校熟記避難包物品整備與逃生動線。",
    "textbookFocus": "康軒：常考無痕山林 (Leave No Trace, LNT) 七大原則（事前規劃、在堅實路面行走、妥善處理垃圾帶下山等）。 ｜ 南一：側重國際標準哨音求救訊號（每分鐘 6 聲長音，停 1 分鐘後重複）與防範野生動物安全常識。 ｜ 翰林：側重戶外登山迷路求生「333 原則」（失溫 3 小時、缺水 3 天、飢餓 3 週，保暖永遠排第一）。",
    "juniorHighBridge": "國中綜合與童軍教育【戶外生活與童軍技能】：野外求生雙平結八字結繩結應用、方向定向越野、急救與營隊自主管理。",
    "infographicKey": "info-comp-u6-3",
    "relatedPoints": [
      {
        "id": "kp-comp-u6-1",
        "title": "無痕山林 LNT 七大準則核心",
        "unitId": "comp-u6",
        "subjectId": "integrative",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・觀念本質與定義"
      },
      {
        "id": "kp-comp-u6-2",
        "title": "戶外迷路緊急應變 STOP 原則",
        "unitId": "comp-u6",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u5-1",
        "title": "假訊息查核三步驟",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：綜合・觀念本質與定義"
      },
      {
        "id": "bridge-comp-u6",
        "isBridge": true,
        "title": "戶外生活與童軍技能",
        "unitId": "comp-u6",
        "subjectId": "integrative",
        "relation": "國中先修橋樑",
        "badgeType": "bridge",
        "desc": "國中綜合與童軍教育【戶外生活與童軍技能】：野外求生雙平結八字結繩結應用、方向定向越野、急救與營隊自主管理。"
      }
    ]
  }
];

// 依照單元 ID 查詢知識點清單
export function getKnowledgePointsByUnit(unitId) {
  return knowledgePointsData.filter(kp => kp.unitId === unitId);
}

// 依照學科 ID 與學期查詢知識點清單
export function getKnowledgePointsBySubject(subjectId, semester = 'all') {
  return knowledgePointsData.filter(kp => {
    const matchSubject = !subjectId || subjectId === 'all' || kp.subjectId === subjectId;
    const matchSemester = !semester || semester === 'all' || kp.semester === semester;
    return matchSubject && matchSemester;
  });
}

// 根據知識點 ID 取得單一項目
export function getKnowledgePointById(kpId) {
  return knowledgePointsData.find(kp => kp.id === kpId) || null;
}

// 取得與特定知識點關聯之知識點物件清單
export function getRelatedKnowledgePoints(kp) {
  if (!kp || !kp.relatedPoints) return [];
  return kp.relatedPoints.map(rel => {
    const fullKp = knowledgePointsData.find(p => p.id === rel.id);
    return {
      ...rel,
      fullKp: fullKp || null
    };
  });
}

// 全文多維度檢索知識點
export function searchKnowledgePoints(query = '', subjectId = 'all', semester = 'all') {
  const cleanQ = query.trim().toLowerCase();
  return knowledgePointsData.filter(kp => {
    const matchSubject = subjectId === 'all' || kp.subjectId === subjectId;
    const matchSemester = semester === 'all' || kp.semester === semester;
    if (!matchSubject || !matchSemester) return false;
    if (!cleanQ) return true;

    return (
      kp.title.toLowerCase().includes(cleanQ) ||
      kp.definition.toLowerCase().includes(cleanQ) ||
      kp.formulaOrRule.toLowerCase().includes(cleanQ) ||
      kp.practicalUtility.toLowerCase().includes(cleanQ) ||
      kp.strategyTip.toLowerCase().includes(cleanQ) ||
      kp.trapAlert.toLowerCase().includes(cleanQ) ||
      (kp.relatedPoints && kp.relatedPoints.some(r => r.title.toLowerCase().includes(cleanQ)))
    );
  });
}
