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
    "strategyTip": "【審題觸發】當題目出現「平分、分裝、切成最大、每份一樣多且剛好分完」時，立即啟動「最大公因數 (GCD)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「週期循環、同時相遇、拼成最小、下一次同時發車」時，立即啟動「最小公倍數 (LCM)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「平分、分裝、切成最大、每份一樣多且剛好分完」時，立即啟動「最大公因數 (GCD)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「幾公升分裝一杯、幾分之幾倒滿、求可以分幾份」時，立即啟動「分數除法（帶分數必先化假分數）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「還剩下幾公升（真實現實剩量）」時，立即啟動「除數單位量 × 分數餘數」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「幾公升分裝一杯、幾分之幾倒滿、求可以分幾份」時，立即啟動「分數除法（帶分數必先化假分數）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「除到整數位並求餘數」時，立即啟動「餘數小數點「垂直落下對齊原位置」」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「用四捨五入法求商到某一位」時，立即啟動「算到該位的「下一位」再判斷進退位」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「除到整數位並求餘數」時，立即啟動「餘數小數點「垂直落下對齊原位置」」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「求比值、調配比例、成分比例」時，立即啟動「前項 ÷ 後項（化為最簡分數或小數）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「化為最簡整數比」時，立即啟動「同乘分母公倍數或同除公因數」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「求比值、調配比例、成分比例」時，立即啟動「前項 ÷ 後項（化為最簡分數或小數）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「求滾動距離、摩天輪旋轉一圈、花圃圍欄長度」時，立即啟動「圓周長 = 直徑 × 3.14」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「求扇形周長（易錯陷阱題）」時，立即啟動「弧長 + 2個半徑（千萬別漏加兩側直邊！）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「求滾動距離、摩天輪旋轉一圈、花圃圍欄長度」時，立即啟動「圓周長 = 直徑 × 3.14」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「鋪色葉片形（雙弧相交）」時，立即啟動「兩扇形面積和 − 正方形面積」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "四則運算絕對順序",
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
    "strategyTip": "【審題觸發】當題目出現「甜甜圈圓環形鋪色面積」時，立即啟動「大圓面積 − 小圓面積 = (R² − r²) × 3.14」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "四則運算絕對順序",
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
    "strategyTip": "【審題觸發】當題目出現「鋪色葉片形（雙弧相交）」時，立即啟動「兩扇形面積和 − 正方形面積」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "四則運算絕對順序",
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
    "title": "四則運算絕對順序",
    "category": "數學・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "四則運算絕對順序：先算小括號，再算中括號，先乘除後加減，由左至右依序計算。",
    "formulaOrRule": "核心工具與心法：總路程 ÷ 總時間（絕對不是兩速率相加除以2！）",
    "strategyTip": "【審題觸發】當題目出現「求往返平均速率（高頻陷阱！）」時，立即啟動「總路程 ÷ 總時間（絕對不是兩速率相加除以2！）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】Google Maps 導航預估到達時間、颱風行進路徑與登陸時間推估、高鐵與客運車程比較。",
    "textbookFocus": "康軒：常考日常生活混合開銷記帳、多項商品打折加運費，重視四則運算先乘除後加減與括號層級。 ｜ 南一：側重連除化為除以乘積（$A \\div B \\div C = A \\div (B \\times C)$）與符號逆運算求解未知數。 ｜ 翰林：側重乘法分配律提取公因數（$a \\times b \\pm a \\times c = a(b \\pm c)$）速算技巧。",
    "juniorHighBridge": "國中理化第一冊【直線運動與平均速度】：位移與路程之本質區別、v-t 圖斜率（加速度）與曲線下面積（位移）。",
    "infographicKey": "info-math-u7-1",
    "relatedPoints": [
      {
        "id": "kp-math-u7-2",
        "title": "乘法分配律大招",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u7-3",
        "title": "連減與連除化簡",
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
        "id": "kp-comp-u1-3",
        "title": "631 理財儲蓄分配法則",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "跨域素養決策",
        "badgeType": "cross",
        "desc": "分配律與括號化簡 ➔ 631 儲蓄理財分配法則"
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
    "title": "乘法分配律大招",
    "category": "數學・運算算理與公式",
    "badgeColor": "amber",
    "definition": "乘法分配律大招：$a \\times (b \\pm c) = a \\times b \\pm a \\times c$，提取公因數快速簡化。",
    "formulaOrRule": "$a \\times (b \\pm c) = a \\times b \\pm a \\times c$，提取公因數快速簡化。",
    "strategyTip": "【審題觸發】當題目出現「時速、分速、秒速單位互換」時，立即啟動「大單位換小單位乘 60，小單位換大單位除以 60」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】Google Maps 導航預估到達時間、颱風行進路徑與登陸時間推估、高鐵與客運車程比較。",
    "textbookFocus": "康軒：常考日常生活混合開銷記帳、多項商品打折加運費，重視四則運算先乘除後加減與括號層級。 ｜ 南一：側重連除化為除以乘積（$A \\div B \\div C = A \\div (B \\times C)$）與符號逆運算求解未知數。 ｜ 翰林：側重乘法分配律提取公因數（$a \\times b \\pm a \\times c = a(b \\pm c)$）速算技巧。",
    "juniorHighBridge": "國中理化第一冊【直線運動與平均速度】：位移與路程之本質區別、v-t 圖斜率（加速度）與曲線下面積（位移）。",
    "infographicKey": "info-math-u7-2",
    "relatedPoints": [
      {
        "id": "kp-math-u7-1",
        "title": "四則運算絕對順序",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u7-3",
        "title": "連減與連除化簡",
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
        "id": "kp-comp-u1-3",
        "title": "631 理財儲蓄分配法則",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "跨域素養決策",
        "badgeType": "cross",
        "desc": "分配律與括號化簡 ➔ 631 儲蓄理財分配法則"
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
    "title": "連減與連除化簡",
    "category": "數學・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "連減與連除化簡：$A - B - C = A - (B + C)$；$A \\div B \\div C = A \\div (B \\times C)$。",
    "formulaOrRule": "$A - B - C = A - (B + C)$；$A \\div B \\div C = A \\div (B \\times C)$。",
    "strategyTip": "【審題觸發】當題目出現「同向追趕 / 反向相遇」時，立即啟動「距離差 ÷ 速率差（追趕） 或 距離和 ÷ 速率和（相遇）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】Google Maps 導航預估到達時間、颱風行進路徑與登陸時間推估、高鐵與客運車程比較。",
    "textbookFocus": "康軒：常考日常生活混合開銷記帳、多項商品打折加運費，重視四則運算先乘除後加減與括號層級。 ｜ 南一：側重連除化為除以乘積（$A \\div B \\div C = A \\div (B \\times C)$）與符號逆運算求解未知數。 ｜ 翰林：側重乘法分配律提取公因數（$a \\times b \\pm a \\times c = a(b \\pm c)$）速算技巧。",
    "juniorHighBridge": "國中理化第一冊【直線運動與平均速度】：位移與路程之本質區別、v-t 圖斜率（加速度）與曲線下面積（位移）。",
    "infographicKey": "info-math-u7-3",
    "relatedPoints": [
      {
        "id": "kp-math-u7-1",
        "title": "四則運算絕對順序",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u7-2",
        "title": "乘法分配律大招",
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
        "id": "kp-comp-u1-3",
        "title": "631 理財儲蓄分配法則",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "跨域素養決策",
        "badgeType": "cross",
        "desc": "分配律與括號化簡 ➔ 631 儲蓄理財分配法則"
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
    "strategyTip": "【審題觸發】當題目出現「求角柱或圓柱體積」時，立即啟動「柱體體積 = 底面積 × 柱高」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "速率三要素核心關係",
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
    "strategyTip": "【審題觸發】當題目出現「求角柱或圓柱表面積」時，立即啟動「表面積 = 側面總面積 (底面周長 × 柱高) + 2 個底面積」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "速率三要素核心關係",
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
    "strategyTip": "【審題觸發】當題目出現「空心柱體或複合柱體」時，立即啟動「外柱體積 − 內空心柱體積（或大底面積減小底面積後再乘柱高）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "速率三要素核心關係",
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
    "title": "速率三要素核心關係",
    "category": "數學・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "速率三要素核心關係：$\\text{速率} = \\frac{\\text{距離}}{\\text{時間}}$、$\\text{距離} = \\text{速率} \\times \\text{時間}$。",
    "formulaOrRule": "$\\text{速率} = \\frac{\\text{距離}}{\\text{時間}}$、$\\text{距離} = \\text{速率} \\times \\text{時間}$。",
    "strategyTip": "【審題觸發】當題目出現「放大 n 倍後，面積變成幾倍」時，立即啟動「面積變為 n² 倍（高頻段考陷阱！）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】看懂登山等高線地圖比例尺估算健行距離、室內設計裝潢平面配置圖、建築模型製作。",
    "textbookFocus": "康軒：常考高鐵、捷運、走路與跑步之時速與分速生活情境，以及平均速率計算。 ｜ 南一：側重順流逆流水流問題（順流速 = 船速 + 水速、逆流速 = 船速 - 水速）與平均速率嚴禁直接平均之陷阱。 ｜ 翰林：側重時速與秒速雙向互換（$\\div 3.6$ 與 $\\times 3.6$）及追趕問題（距離差 $\\div$ 速度差）。",
    "juniorHighBridge": "國三第五冊【相似形與相似三角形】：AA、SAS、SSS 相似性質證明、縮放中心與平行線截比例線段。",
    "infographicKey": "info-math-u9-1",
    "relatedPoints": [
      {
        "id": "kp-math-u9-2",
        "title": "單位換算秒殺法則",
        "unitId": "math-u9",
        "subjectId": "math",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・運算算理與公式"
      },
      {
        "id": "kp-math-u9-3",
        "title": "平均速率致命陷阱",
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
        "id": "kp-sci-u1-3",
        "title": "颱風氣流逆時針向中心旋轉輻合",
        "unitId": "sci-u1",
        "subjectId": "science",
        "relation": "跨域大氣物理",
        "badgeType": "cross",
        "desc": "速率距離時間 ➔ 颱風移動路徑速度與海陸風氣流"
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
    "title": "單位換算秒殺法則",
    "category": "數學・運算算理與公式",
    "badgeColor": "amber",
    "definition": "單位換算秒殺法則：$\\text{時速 (km/h)} \\div 3.6 = \\text{秒速 (m/s)}$；反向則乘 3.6。",
    "formulaOrRule": "$\\text{時速 (km/h)} \\div 3.6 = \\text{秒速 (m/s)}$；反向則乘 3.6。",
    "strategyTip": "【審題觸發】當題目出現「比例尺 1:50000 或圖示線段比例尺」時，立即啟動「地圖長度 : 實際長度 ➔ 實際距離 = 地圖距離 ÷ 比值」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】看懂登山等高線地圖比例尺估算健行距離、室內設計裝潢平面配置圖、建築模型製作。",
    "textbookFocus": "康軒：常考高鐵、捷運、走路與跑步之時速與分速生活情境，以及平均速率計算。 ｜ 南一：側重順流逆流水流問題（順流速 = 船速 + 水速、逆流速 = 船速 - 水速）與平均速率嚴禁直接平均之陷阱。 ｜ 翰林：側重時速與秒速雙向互換（$\\div 3.6$ 與 $\\times 3.6$）及追趕問題（距離差 $\\div$ 速度差）。",
    "juniorHighBridge": "國三第五冊【相似形與相似三角形】：AA、SAS、SSS 相似性質證明、縮放中心與平行線截比例線段。",
    "infographicKey": "info-math-u9-2",
    "relatedPoints": [
      {
        "id": "kp-math-u9-1",
        "title": "速率三要素核心關係",
        "unitId": "math-u9",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u9-3",
        "title": "平均速率致命陷阱",
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
        "id": "kp-sci-u1-3",
        "title": "颱風氣流逆時針向中心旋轉輻合",
        "unitId": "sci-u1",
        "subjectId": "science",
        "relation": "跨域大氣物理",
        "badgeType": "cross",
        "desc": "速率距離時間 ➔ 颱風移動路徑速度與海陸風氣流"
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
    "title": "平均速率致命陷阱",
    "category": "數學・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "平均速率致命陷阱：平均速率必須是「總距離 ÷ 總時間」，絕對不能直接將兩段速率相加除以 2！",
    "formulaOrRule": "核心工具與心法：對應角永遠不變，對應邊長度等比縮放",
    "strategyTip": "【審題觸發】當題目出現「對應角與對應邊變化」時，立即啟動「對應角永遠不變，對應邊長度等比縮放」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷防錯】防雷必背：平均速率必須是「總距離 ÷ 總時間」，絕對不能直接將兩段速率相加除以 2！",
    "practicalUtility": "【生活實用】看懂登山等高線地圖比例尺估算健行距離、室內設計裝潢平面配置圖、建築模型製作。",
    "textbookFocus": "康軒：常考高鐵、捷運、走路與跑步之時速與分速生活情境，以及平均速率計算。 ｜ 南一：側重順流逆流水流問題（順流速 = 船速 + 水速、逆流速 = 船速 - 水速）與平均速率嚴禁直接平均之陷阱。 ｜ 翰林：側重時速與秒速雙向互換（$\\div 3.6$ 與 $\\times 3.6$）及追趕問題（距離差 $\\div$ 速度差）。",
    "juniorHighBridge": "國三第五冊【相似形與相似三角形】：AA、SAS、SSS 相似性質證明、縮放中心與平行線截比例線段。",
    "infographicKey": "info-math-u9-3",
    "relatedPoints": [
      {
        "id": "kp-math-u9-1",
        "title": "速率三要素核心關係",
        "unitId": "math-u9",
        "subjectId": "math",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：數學・觀念本質與定義"
      },
      {
        "id": "kp-math-u9-2",
        "title": "單位換算秒殺法則",
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
        "id": "kp-sci-u1-3",
        "title": "颱風氣流逆時針向中心旋轉輻合",
        "unitId": "sci-u1",
        "subjectId": "science",
        "relation": "跨域大氣物理",
        "badgeType": "cross",
        "desc": "速率距離時間 ➔ 颱風移動路徑速度與海陸風氣流"
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
    "definition": "基準量與比較量核心定理：$\\text{比較量} = \\text{基準量} \\times \\text{比值（倍數）}$；「被比的為比較量，當標準的為基準量」。",
    "formulaOrRule": "$\\text{比較量} = \\text{基準量} \\times \\text{比值（倍數）}$；「被比的為比較量，當標準的為基準量」。",
    "strategyTip": "【審題觸發】當題目出現「「...是...的幾倍」、「比...多/少幾成」」時，立即啟動「「的」後方或比的基準項即為基準量（當作 1）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「母子和與母子差（本利和、加成、打折）」時，立即啟動「基準量 × (1 + 比值) 或 基準量 × (1 − 比值)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「雞兔同籠、硬幣張數、答對答錯得分」時，立即啟動「全假設法：總差額 ÷ 單位個體差額 = 另一種數量」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「列出算式並求未知數 x」時，立即啟動「依題意列式 ➔ 等量加減乘除消去常數項」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「等量加法/減法公理」時，立即啟動「若 a = b，則 a + c = b + c；a − c = b − c」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「等量乘法/除法公理」時，立即啟動「若 a = b，則 a × c = b × c；a ÷ c = b ÷ c (c ≠ 0)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「求某項目在圓形圖中的圓心角」時，立即啟動「360° × 該項百分率」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "id": "kp-soc-u4-1",
        "title": "供求法則本質",
        "unitId": "soc-u4",
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
    "strategyTip": "【審題觸發】當題目出現「百分率圓形圖合計總和」時，立即啟動「總和必須剛好等於 100%（若有四捨五入誤差微調最大項）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "id": "kp-soc-u4-1",
        "title": "供求法則本質",
        "unitId": "soc-u4",
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
    "strategyTip": "【審題觸發】當題目出現「從圓形圖反求各類別具體數量」時，立即啟動「全部總數量 × 各項所佔百分率」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "id": "kp-soc-u4-1",
        "title": "供求法則本質",
        "unitId": "soc-u4",
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
    "strategyTip": "【審題觸發】當題目出現「冷推暖、氣溫驟降強風驟雨、藍色尖角」時，立即啟動「冷鋒系統（冬季東北季風）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "id": "kp-soc-u1-3",
        "title": "臺灣季風風向與降雨",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "跨域地理氣候",
        "badgeType": "cross",
        "desc": "大氣高低壓與鋒面 ➔ 臺灣地形雨與東北季風氣候"
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
    "strategyTip": "【審題觸發】當題目出現「冷暖勢力相當、原地徘徊、5~6月梅雨」時，立即啟動「滯留鋒面」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "id": "kp-soc-u1-3",
        "title": "臺灣季風風向與降雨",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "跨域地理氣候",
        "badgeType": "cross",
        "desc": "大氣高低壓與鋒面 ➔ 臺灣地形雨與東北季風氣候"
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
    "strategyTip": "【審題觸發】當題目出現「颱風眼天氣特徵」時，立即啟動「無風無雨晴朗；眼牆風雨最強最猛烈」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "id": "kp-soc-u1-3",
        "title": "臺灣季風風向與降雨",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "跨域地理氣候",
        "badgeType": "cross",
        "desc": "大氣高低壓與鋒面 ➔ 臺灣地形雨與東北季風氣候"
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
    "strategyTip": "【審題觸發】當題目出現「石蕊試紙藍變紅、醋酸、檸檬汁」時，立即啟動「酸性水溶液（pH < 7，可導電）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「石蕊試紙紅變藍、酚酞變紅、肥皂水、小蘇打」時，立即啟動「鹼性水溶液（pH > 7，觸感滑膩）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「食鹽水、糖水、純水」時，立即啟動「中性水溶液（pH ≈ 7；糖水不導電，食鹽水導電）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
    "strategyTip": "【審題觸發】當題目出現「如何增強電磁鐵磁力」時，立即啟動「增加線圈圈數、加大電池電流、加入鐵芯」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "id": "kp-comp-u5-1",
        "title": "假訊息查核三步驟",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "跨域科技硬體",
        "badgeType": "cross",
        "desc": "電磁鐵與電流效應 ➔ 資訊科技硬體與數位傳播"
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
    "strategyTip": "【審題觸發】當題目出現「電磁鐵兩端磁極方向判定」時，立即啟動「右手握線圈（四指指電流方向，大拇指所指即為 N 極）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "id": "kp-comp-u5-1",
        "title": "假訊息查核三步驟",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "跨域科技硬體",
        "badgeType": "cross",
        "desc": "電磁鐵與電流效應 ➔ 資訊科技硬體與數位傳播"
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
    "strategyTip": "【審題觸發】當題目出現「改變電磁鐵磁極方向」時，立即啟動「反接電池正負極，或改變線圈纏繞方向」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "id": "kp-comp-u5-1",
        "title": "假訊息查核三步驟",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "跨域科技硬體",
        "badgeType": "cross",
        "desc": "電磁鐵與電流效應 ➔ 資訊科技硬體與數位傳播"
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
    "strategyTip": "【審題觸發】當題目出現「河流上游地形特徵」時，立即啟動「V型峽谷、瀑布、巨石嶙峋、侵蝕搬運旺盛」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "顯微鏡成像光學規律",
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
    "strategyTip": "【審題觸發】當題目出現「河流下游與出海口地形」時，立即啟動「寬闊平緩、鵝卵石與細沙沉積、三角洲、沖積扇」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "顯微鏡成像光學規律",
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
    "strategyTip": "【審題觸發】當題目出現「三大岩類成因辨識」時，立即啟動「火成岩（岩漿冷卻）、沉積岩（層狀化石）、變質岩（高溫高壓變質）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "顯微鏡成像光學規律",
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
    "title": "顯微鏡成像光學規律",
    "category": "自然・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "顯微鏡成像光學規律：光學顯微鏡呈現「上下顛倒、左右相反」的倒立放大像。",
    "formulaOrRule": "核心工具與心法：熱傳導（金屬傳導佳，木頭塑膠為不良導體）",
    "strategyTip": "【審題觸發】當題目出現「金屬鍋柄防燙木柄、金屬湯匙燙手」時，立即啟動「熱傳導（金屬傳導佳，木頭塑膠為不良導體）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】保溫瓶設計（雙層真空斷傳導對流，內膽鍍銀斷輻射）、羽絨衣蓬鬆空氣層隔熱保暖。",
    "textbookFocus": "康軒：常考生活保溫杯構造（真空層、鍍銀內膽、塑膠瓶蓋）防熱傳播三途徑之對應。 ｜ 南一：側重物質熱脹冷縮（雙金屬片火災警報器、鐵軌預留縫隙）原理與反常膨脹現象。 ｜ 翰林：側重熱的三種傳播方式（傳導、對流、輻射）實驗變因判讀與日夜陸海風成因。",
    "juniorHighBridge": "國二上理化【熱量與比熱】：熱量公式 H = m·s·ΔT、熱平衡計算與物質比熱物理意義。",
    "infographicKey": "info-sci-u5-1",
    "relatedPoints": [
      {
        "id": "kp-sci-u5-2",
        "title": "玻片移動關鍵口訣",
        "unitId": "sci-u5",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u5-3",
        "title": "低倍鏡換高倍鏡四部曲",
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
    "title": "玻片移動關鍵口訣",
    "category": "自然・運算算理與公式",
    "badgeColor": "amber",
    "definition": "玻片移動關鍵口訣：「視野中物體往哪偏，載玻片就朝同一方向推移（物在哪偏，片往哪追）」！",
    "formulaOrRule": "核心工具與心法：熱對流（熱流體密度小上升，冷流體密度大下降）",
    "strategyTip": "【審題觸發】當題目出現「冷氣裝上方、暖氣裝下方、煮水水流循環」時，立即啟動「熱對流（熱流體密度小上升，冷流體密度大下降）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】保溫瓶設計（雙層真空斷傳導對流，內膽鍍銀斷輻射）、羽絨衣蓬鬆空氣層隔熱保暖。",
    "textbookFocus": "康軒：常考生活保溫杯構造（真空層、鍍銀內膽、塑膠瓶蓋）防熱傳播三途徑之對應。 ｜ 南一：側重物質熱脹冷縮（雙金屬片火災警報器、鐵軌預留縫隙）原理與反常膨脹現象。 ｜ 翰林：側重熱的三種傳播方式（傳導、對流、輻射）實驗變因判讀與日夜陸海風成因。",
    "juniorHighBridge": "國二上理化【熱量與比熱】：熱量公式 H = m·s·ΔT、熱平衡計算與物質比熱物理意義。",
    "infographicKey": "info-sci-u5-2",
    "relatedPoints": [
      {
        "id": "kp-sci-u5-1",
        "title": "顯微鏡成像光學規律",
        "unitId": "sci-u5",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u5-3",
        "title": "低倍鏡換高倍鏡四部曲",
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
    "title": "低倍鏡換高倍鏡四部曲",
    "category": "自然・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "低倍鏡換高倍鏡四部曲：視野變「暗」、範圍變「小」、物體變「大」、數量變「少」。",
    "formulaOrRule": "核心工具與心法：熱輻射（真空亦可傳播，白色淺色反光反射佳，黑色吸熱佳）",
    "strategyTip": "【審題觸發】當題目出現「曬太陽感到溫暖、烤箱紅外線加熱」時，立即啟動「熱輻射（真空亦可傳播，白色淺色反光反射佳，黑色吸熱佳）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】保溫瓶設計（雙層真空斷傳導對流，內膽鍍銀斷輻射）、羽絨衣蓬鬆空氣層隔熱保暖。",
    "textbookFocus": "康軒：常考生活保溫杯構造（真空層、鍍銀內膽、塑膠瓶蓋）防熱傳播三途徑之對應。 ｜ 南一：側重物質熱脹冷縮（雙金屬片火災警報器、鐵軌預留縫隙）原理與反常膨脹現象。 ｜ 翰林：側重熱的三種傳播方式（傳導、對流、輻射）實驗變因判讀與日夜陸海風成因。",
    "juniorHighBridge": "國二上理化【熱量與比熱】：熱量公式 H = m·s·ΔT、熱平衡計算與物質比熱物理意義。",
    "infographicKey": "info-sci-u5-3",
    "relatedPoints": [
      {
        "id": "kp-sci-u5-1",
        "title": "顯微鏡成像光學規律",
        "unitId": "sci-u5",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u5-2",
        "title": "玻片移動關鍵口訣",
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
    "strategyTip": "【審題觸發】當題目出現「剪刀、開瓶器、拔釘器、手推車」時，立即啟動「省力槓桿（施力臂 > 抗力臂）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "熱傳播三途徑",
        "unitId": "sci-u7",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-pe-u4-2",
        "title": "運動傷害急性處理最新 PEACE 原則",
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
    "strategyTip": "【審題觸發】當題目出現「鑷子、筷子、掃帚、手臂手肘彎曲」時，立即啟動「費力但省距離槓桿（施力臂 < 抗力臂）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "熱傳播三途徑",
        "unitId": "sci-u7",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-pe-u4-2",
        "title": "運動傷害急性處理最新 PEACE 原則",
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
    "strategyTip": "【審題觸發】當題目出現「定滑輪 vs 動滑輪」時，立即啟動「定滑輪不省力但改變施力方向；動滑輪省一半力但費一倍距離」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "熱傳播三途徑",
        "unitId": "sci-u7",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
      },
      {
        "id": "kp-pe-u4-2",
        "title": "運動傷害急性處理最新 PEACE 原則",
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
    "title": "熱傳播三途徑",
    "category": "自然・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "熱傳播三途徑：傳導（固體接觸）、對流（液體與氣體循環流動）、輻射（不需介質，如陽光）。",
    "formulaOrRule": "核心工具與心法：水氣（水分）與氧氣（兩者缺一不可，鹽水酸液會加速生鏽）",
    "strategyTip": "【審題觸發】當題目出現「鐵生鏽必備兩大關鍵因素」時，立即啟動「水氣（水分）與氧氣（兩者缺一不可，鹽水酸液會加速生鏽）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】洋芋片充氮包裝防止氧化碎裂、汽機車鏈條上潤滑油防生鏽、乾燥箱保存單眼相機鏡頭。",
    "textbookFocus": "康軒：常考食品防腐（真空包裝、乾燥劑、脫氧劑、冷藏）、鐵生鏽實驗條件觀察。 ｜ 南一：側重金屬防鏽五大法則（塗漆、上油、電鍍、乾燥、防鏽合金），以及酸雨加速金屬腐蝕。 ｜ 翰林：側重鐵生鏽的兩大必備要件（水分與氧氣）實驗對照組控制，以及生鏽是放熱氧化反應。",
    "juniorHighBridge": "國二下理化【氧化還原與反應速率】：活性大小排序、氧化劑與還原劑、溫度與接觸面積對反應速率影響。",
    "infographicKey": "info-sci-u7-1",
    "relatedPoints": [
      {
        "id": "kp-sci-u7-2",
        "title": "保溫瓶內部結構奧秘",
        "unitId": "sci-u7",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u7-3",
        "title": "海陸風日夜規律",
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
    "title": "保溫瓶內部結構奧秘",
    "category": "自然・運算算理與公式",
    "badgeColor": "amber",
    "definition": "保溫瓶內部結構奧秘：雙層真空層阻絕「傳導與對流」；內膽鍍銀反光層阻絕「熱輻射」。",
    "formulaOrRule": "核心工具與心法：塗油漆、塗防鏽油、電鍍、保持乾燥、鍍鋅不鏽鋼",
    "strategyTip": "【審題觸發】當題目出現「日常有效防鏽措施」時，立即啟動「塗油漆、塗防鏽油、電鍍、保持乾燥、鍍鋅不鏽鋼」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】洋芋片充氮包裝防止氧化碎裂、汽機車鏈條上潤滑油防生鏽、乾燥箱保存單眼相機鏡頭。",
    "textbookFocus": "康軒：常考食品防腐（真空包裝、乾燥劑、脫氧劑、冷藏）、鐵生鏽實驗條件觀察。 ｜ 南一：側重金屬防鏽五大法則（塗漆、上油、電鍍、乾燥、防鏽合金），以及酸雨加速金屬腐蝕。 ｜ 翰林：側重鐵生鏽的兩大必備要件（水分與氧氣）實驗對照組控制，以及生鏽是放熱氧化反應。",
    "juniorHighBridge": "國二下理化【氧化還原與反應速率】：活性大小排序、氧化劑與還原劑、溫度與接觸面積對反應速率影響。",
    "infographicKey": "info-sci-u7-2",
    "relatedPoints": [
      {
        "id": "kp-sci-u7-1",
        "title": "熱傳播三途徑",
        "unitId": "sci-u7",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u7-3",
        "title": "海陸風日夜規律",
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
    "title": "海陸風日夜規律",
    "category": "自然・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "海陸風日夜規律：白天陸地升溫快氣流上升吹「海風」；夜晚陸地降溫快吹「陸風」。",
    "formulaOrRule": "核心工具與心法：真空包裝、放置脫氧劑或乾燥劑、低溫冷凍抑制細菌酵素活性",
    "strategyTip": "【審題觸發】當題目出現「食品防腐保鮮妙招」時，立即啟動「真空包裝、放置脫氧劑或乾燥劑、低溫冷凍抑制細菌酵素活性」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】洋芋片充氮包裝防止氧化碎裂、汽機車鏈條上潤滑油防生鏽、乾燥箱保存單眼相機鏡頭。",
    "textbookFocus": "康軒：常考食品防腐（真空包裝、乾燥劑、脫氧劑、冷藏）、鐵生鏽實驗條件觀察。 ｜ 南一：側重金屬防鏽五大法則（塗漆、上油、電鍍、乾燥、防鏽合金），以及酸雨加速金屬腐蝕。 ｜ 翰林：側重鐵生鏽的兩大必備要件（水分與氧氣）實驗對照組控制，以及生鏽是放熱氧化反應。",
    "juniorHighBridge": "國二下理化【氧化還原與反應速率】：活性大小排序、氧化劑與還原劑、溫度與接觸面積對反應速率影響。",
    "infographicKey": "info-sci-u7-3",
    "relatedPoints": [
      {
        "id": "kp-sci-u7-1",
        "title": "熱傳播三途徑",
        "unitId": "sci-u7",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u7-2",
        "title": "保溫瓶內部結構奧秘",
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
    "definition": "食物鏈箭號嚴格標準：箭頭代表「能量與養分的流動路徑」，必為「被吃者 ➔ 掠食者」。",
    "formulaOrRule": "核心工具與心法：分解者（真菌、細菌、蚯蚓腐生生物）",
    "strategyTip": "【審題觸發】當題目出現「扮演物質循環關鍵終點、將有機物分解為無機物」時，立即啟動「分解者（真菌、細菌、蚯蚓腐生生物）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】紅樹林濕地保護候鳥水鳥、海洋塑膠垃圾淨灘行動、廚餘堆肥化轉為有機土壤肥料。",
    "textbookFocus": "康軒：常考臺灣特有種保育（臺灣黑熊、櫻花鉤吻鮭、石虎）與外來入侵種衝擊（福壽螺、布袋蓮）。 ｜ 南一：側重生態系平衡破壞因果關係、全球暖化溫室效應，以及國家公園與紅樹林生態保護區功能。 ｜ 翰林：側重食物鏈與食物網角色（生產者、初級/次級消費者、分解者）及能量金字塔單向遞減傳遞。",
    "juniorHighBridge": "國一生物【生態系與群集】：食物網複雜度決定生態穩定性、碳循環與氮循環、生態足跡與保育。",
    "infographicKey": "info-sci-u8-1",
    "relatedPoints": [
      {
        "id": "kp-sci-u8-2",
        "title": "生態能量金字塔",
        "unitId": "sci-u8",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u8-3",
        "title": "生物防禦適應",
        "unitId": "sci-u8",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u9-1",
        "title": "溫室效應本質",
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
    "title": "生態能量金字塔",
    "category": "自然・運算算理與公式",
    "badgeColor": "amber",
    "definition": "生態能量金字塔：能量在營養階層傳遞中「逐階遞減（約僅 10% 傳遞）」，故頂級掠食者數量最稀少。",
    "formulaOrRule": "核心工具與心法：生物放大作用 (Biological Magnification)",
    "strategyTip": "【審題觸發】當題目出現「有毒重金屬或塑膠微粒在頂級掠食者體內濃度最高」時，立即啟動「生物放大作用 (Biological Magnification)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "生物防禦適應",
        "unitId": "sci-u8",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u9-1",
        "title": "溫室效應本質",
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
    "title": "生物防禦適應",
    "category": "自然・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "生物防禦適應：擬態（模擬其他危險生物，如竹節蟲、尺蠖）、保護色（融入環境色，如青蛙、枯葉蝶）。",
    "formulaOrRule": "核心工具與心法：缺乏天敵、繁殖力強、破壞原生物多樣性",
    "strategyTip": "【審題觸發】當題目出現「外來種入侵危害本土物種」時，立即啟動「缺乏天敵、繁殖力強、破壞原生物多樣性」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "生態能量金字塔",
        "unitId": "sci-u8",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u9-1",
        "title": "溫室效應本質",
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
    "title": "溫室效應本質",
    "category": "自然・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "溫室效應本質：大氣中二氧化碳與甲烷等氣體吸收地表長波輻射，使地表維持適當溫度。",
    "formulaOrRule": "核心工具與心法：弦調緊、弦變細、手指按住弦使振動長度變短",
    "strategyTip": "【審題觸發】當題目出現「如何讓吉他弦音調變高」時，立即啟動「弦調緊、弦變細、手指按住弦使振動長度變短」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】自製排簫與橡皮筋吉他調音、音樂廳吸音棉降噪設計、倒車雷達超音波偵測障礙物。",
    "textbookFocus": "康軒：常考自製排笛、橡皮筋吉他、水杯琴之音調高低與空氣柱長短、鬆緊粗細關聯。 ｜ 南一：側重聲音傳播介質（固體 > 液體 > 氣體，真空不傳聲）與噪音防制隔音吸音原理。 ｜ 翰林：側重聲音三要素（音調-頻率、響度-振幅、音色-波形）物理意義與分貝 (dB) 測量。",
    "juniorHighBridge": "國二上理化【波動與聲音】：橫波與縱波、波速公式 v = f·λ、回聲反射測距與超聲波應用。",
    "infographicKey": "info-sci-u9-1",
    "relatedPoints": [
      {
        "id": "kp-sci-u9-2",
        "title": "全球暖化衝擊鏈",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u9-3",
        "title": "永續素養落實",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u10-1",
        "title": "生物多樣性三大層次",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
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
    "title": "全球暖化衝擊鏈",
    "category": "自然・運算算理與公式",
    "badgeColor": "amber",
    "definition": "全球暖化衝擊鏈：極地冰川融化 ➔ 海平面上升 ➔ 極端氣候加劇（暴雨乾旱） ➔ 珊瑚白化與生態浩劫。",
    "formulaOrRule": "核心工具與心法：吹氣振動空氣柱（水越多空氣柱越短音調越高）；敲擊振動水與管壁（水越少音調越高）",
    "strategyTip": "【審題觸發】當題目出現「試管吹氣 vs 敲擊試管」時，立即啟動「吹氣振動空氣柱（水越多空氣柱越短音調越高）；敲擊振動水與管壁（水越少音調越高）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】自製排簫與橡皮筋吉他調音、音樂廳吸音棉降噪設計、倒車雷達超音波偵測障礙物。",
    "textbookFocus": "康軒：常考自製排笛、橡皮筋吉他、水杯琴之音調高低與空氣柱長短、鬆緊粗細關聯。 ｜ 南一：側重聲音傳播介質（固體 > 液體 > 氣體，真空不傳聲）與噪音防制隔音吸音原理。 ｜ 翰林：側重聲音三要素（音調-頻率、響度-振幅、音色-波形）物理意義與分貝 (dB) 測量。",
    "juniorHighBridge": "國二上理化【波動與聲音】：橫波與縱波、波速公式 v = f·λ、回聲反射測距與超聲波應用。",
    "infographicKey": "info-sci-u9-2",
    "relatedPoints": [
      {
        "id": "kp-sci-u9-1",
        "title": "溫室效應本質",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u9-3",
        "title": "永續素養落實",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u10-1",
        "title": "生物多樣性三大層次",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
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
    "title": "永續素養落實",
    "category": "自然・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "永續素養落實：選購具「碳標籤」與「節能標章」商品、多搭乘大眾運輸、落實資源回收循環經濟。",
    "formulaOrRule": "核心工具與心法：音色不同（波形不同）",
    "strategyTip": "【審題觸發】當題目出現「不同樂器演奏同音調同響度仍能分辨」時，立即啟動「音色不同（波形不同）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】自製排簫與橡皮筋吉他調音、音樂廳吸音棉降噪設計、倒車雷達超音波偵測障礙物。",
    "textbookFocus": "康軒：常考自製排笛、橡皮筋吉他、水杯琴之音調高低與空氣柱長短、鬆緊粗細關聯。 ｜ 南一：側重聲音傳播介質（固體 > 液體 > 氣體，真空不傳聲）與噪音防制隔音吸音原理。 ｜ 翰林：側重聲音三要素（音調-頻率、響度-振幅、音色-波形）物理意義與分貝 (dB) 測量。",
    "juniorHighBridge": "國二上理化【波動與聲音】：橫波與縱波、波速公式 v = f·λ、回聲反射測距與超聲波應用。",
    "infographicKey": "info-sci-u9-3",
    "relatedPoints": [
      {
        "id": "kp-sci-u9-1",
        "title": "溫室效應本質",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u9-2",
        "title": "全球暖化衝擊鏈",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u10-1",
        "title": "生物多樣性三大層次",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：自然・觀念本質與定義"
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
    "title": "生物多樣性三大層次",
    "category": "自然・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "生物多樣性三大層次：遺傳多樣性（個體基因差）、物種多樣性（種類多）、生態系多樣性（棲地豐富）。",
    "formulaOrRule": "核心工具與心法：玻片向「右上方」推（物在哪裡就往哪裡推）",
    "strategyTip": "【審題觸發】當題目出現「物像偏在視野右上方，如何移回中心」時，立即啟動「玻片向「右上方」推（物在哪裡就往哪裡推）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】醫學檢驗血液抹片白血球紅血球、水質採樣觀察草履蟲水蚤生態、植物氣孔保衛細胞開閉機制。",
    "textbookFocus": "康軒：常考酵母菌發酵做麵包、乳酸菌做優酪乳、黴菌腐蝕食物等微生物之利弊生活應用。 ｜ 南一：側重高倍鏡與低倍鏡四特徵對比（低倍換高倍：視野變暗、範圍變小、細胞數變少、影像放大）。 ｜ 翰林：側重光學顯微鏡構造名稱（目鏡、物鏡、粗細調節輪、光圈）與玻片反向移動法規。",
    "juniorHighBridge": "國一上生物【細胞與顯微鏡】：動植物細胞膜/核/質/胞器分工、滲透作用與物質通過細胞膜。",
    "infographicKey": "info-sci-u10-1",
    "relatedPoints": [
      {
        "id": "kp-sci-u10-2",
        "title": "臺灣外來入侵種危害",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u10-3",
        "title": "棲地保育核心法則",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u9-1",
        "title": "溫室效應本質",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：自然・觀念本質與定義"
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
    "title": "臺灣外來入侵種危害",
    "category": "自然・運算算理與公式",
    "badgeColor": "amber",
    "definition": "臺灣外來入侵種危害：綠鬣蜥、福壽螺、布袋蓮、小花蔓澤蘭嚴重剝奪本土原生種生存空間。",
    "formulaOrRule": "核心工具與心法：視野變暗（需調大光圈反光鏡）、視野範圍變小、只能用「細調節輪」調焦",
    "strategyTip": "【審題觸發】當題目出現「低倍鏡換成高倍鏡後」時，立即啟動「視野變暗（需調大光圈反光鏡）、視野範圍變小、只能用「細調節輪」調焦」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】醫學檢驗血液抹片白血球紅血球、水質採樣觀察草履蟲水蚤生態、植物氣孔保衛細胞開閉機制。",
    "textbookFocus": "康軒：常考酵母菌發酵做麵包、乳酸菌做優酪乳、黴菌腐蝕食物等微生物之利弊生活應用。 ｜ 南一：側重高倍鏡與低倍鏡四特徵對比（低倍換高倍：視野變暗、範圍變小、細胞數變少、影像放大）。 ｜ 翰林：側重光學顯微鏡構造名稱（目鏡、物鏡、粗細調節輪、光圈）與玻片反向移動法規。",
    "juniorHighBridge": "國一上生物【細胞與顯微鏡】：動植物細胞膜/核/質/胞器分工、滲透作用與物質通過細胞膜。",
    "infographicKey": "info-sci-u10-2",
    "relatedPoints": [
      {
        "id": "kp-sci-u10-1",
        "title": "生物多樣性三大層次",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u10-3",
        "title": "棲地保育核心法則",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・生活實用與避雷"
      },
      {
        "id": "kp-sci-u9-1",
        "title": "溫室效應本質",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：自然・觀念本質與定義"
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
    "title": "棲地保育核心法則",
    "category": "自然・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "棲地保育核心法則：不任意放生、不引進未經檢疫動植物、維護國家公園與野生動物保護區完整性。",
    "formulaOrRule": "核心工具與心法：植物細胞特有：細胞壁（支持固定形狀）、葉綠體（綠色細胞行光合作用）、大液胞",
    "strategyTip": "【審題觸發】當題目出現「植物細胞 vs 動物細胞特有構造」時，立即啟動「植物細胞特有：細胞壁（支持固定形狀）、葉綠體（綠色細胞行光合作用）、大液胞」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】醫學檢驗血液抹片白血球紅血球、水質採樣觀察草履蟲水蚤生態、植物氣孔保衛細胞開閉機制。",
    "textbookFocus": "康軒：常考酵母菌發酵做麵包、乳酸菌做優酪乳、黴菌腐蝕食物等微生物之利弊生活應用。 ｜ 南一：側重高倍鏡與低倍鏡四特徵對比（低倍換高倍：視野變暗、範圍變小、細胞數變少、影像放大）。 ｜ 翰林：側重光學顯微鏡構造名稱（目鏡、物鏡、粗細調節輪、光圈）與玻片反向移動法規。",
    "juniorHighBridge": "國一上生物【細胞與顯微鏡】：動植物細胞膜/核/質/胞器分工、滲透作用與物質通過細胞膜。",
    "infographicKey": "info-sci-u10-3",
    "relatedPoints": [
      {
        "id": "kp-sci-u10-1",
        "title": "生物多樣性三大層次",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・觀念本質與定義"
      },
      {
        "id": "kp-sci-u10-2",
        "title": "臺灣外來入侵種危害",
        "unitId": "sci-u10",
        "subjectId": "science",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：自然・運算算理與公式"
      },
      {
        "id": "kp-sci-u9-1",
        "title": "溫室效應本質",
        "unitId": "sci-u9",
        "subjectId": "science",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：自然・觀念本質與定義"
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
    "title": "形近字辨析核心",
    "category": "國語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "形近字辨析核心：看部首字旁辨別字義（如「燥（火）」、「噪（口）」、「躁（足）」、「操（手）」）。",
    "formulaOrRule": "核心工具與心法：略讀首尾段、每段首尾句，搭配 5W1H 提煉",
    "strategyTip": "【審題觸發】當題目出現「快速掌握長文架構與核心大意」時，立即啟動「略讀首尾段、每段首尾句，搭配 5W1H 提煉」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】辨別社群媒體新聞真實性、閱讀各類家電說明書與合約條款、摘要會議重點。",
    "textbookFocus": "康軒：常考 PIRLS 閱讀理解四層次（直接提取訊息、直接推論、詮釋整合、比較評估）測驗題。 ｜ 南一：側重文意理解因果推論、作者寫作立場與言外之意推斷。 ｜ 翰林：側重六何法 (5W1H) 提煉文章主旨，以及心智圖、魚骨圖梳理文本段落脈絡。",
    "juniorHighBridge": "國中會考國文科【長文閱讀與雙文本對讀】：跨領域圖表素養題、非連續性文本資訊轉換與推論。",
    "infographicKey": "info-man-u1-1",
    "relatedPoints": [
      {
        "id": "kp-man-u1-2",
        "title": "破音多音字辨音",
        "unitId": "man-u1",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u1-3",
        "title": "成語辨正防雷",
        "unitId": "man-u1",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u2-1",
        "title": "轉化三大分支",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "kp-art-u2-1",
        "title": "透視法空間規律",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "跨域字形美學",
        "badgeType": "cross",
        "desc": "形近字結構辨析 ➔ 視覺藝術空間線條與透視"
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
    "title": "破音多音字辨音",
    "category": "國語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "破音多音字辨音：依詞性與語意判讀（如「處」分 (ㄔㄨˇ) vs 門「處」 (ㄔㄨˋ)；「落」枕 (ㄌㄠˋ)）。",
    "formulaOrRule": "核心工具與心法：層次二統整推論：結合上下文語境與人物潛台詞",
    "strategyTip": "【審題觸發】當題目出現「作者透過這段對話暗示了什麼」時，立即啟動「層次二統整推論：結合上下文語境與人物潛台詞」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】辨別社群媒體新聞真實性、閱讀各類家電說明書與合約條款、摘要會議重點。",
    "textbookFocus": "康軒：常考 PIRLS 閱讀理解四層次（直接提取訊息、直接推論、詮釋整合、比較評估）測驗題。 ｜ 南一：側重文意理解因果推論、作者寫作立場與言外之意推斷。 ｜ 翰林：側重六何法 (5W1H) 提煉文章主旨，以及心智圖、魚骨圖梳理文本段落脈絡。",
    "juniorHighBridge": "國中會考國文科【長文閱讀與雙文本對讀】：跨領域圖表素養題、非連續性文本資訊轉換與推論。",
    "infographicKey": "info-man-u1-2",
    "relatedPoints": [
      {
        "id": "kp-man-u1-1",
        "title": "形近字辨析核心",
        "unitId": "man-u1",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u1-3",
        "title": "成語辨正防雷",
        "unitId": "man-u1",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u2-1",
        "title": "轉化三大分支",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "kp-art-u2-1",
        "title": "透視法空間規律",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "跨域字形美學",
        "badgeType": "cross",
        "desc": "形近字結構辨析 ➔ 視覺藝術空間線條與透視"
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
    "title": "成語辨正防雷",
    "category": "國語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "成語辨正防雷：字形錯別字辨識（如「再接再厲」非「勵」、「名列前茅」非「矛」）。",
    "formulaOrRule": "核心工具與心法：層次三省思評鑑：提出主張並佐以生活經驗或證據",
    "strategyTip": "【審題觸發】當題目出現「你贊成作者的論點嗎？請說明理由」時，立即啟動「層次三省思評鑑：提出主張並佐以生活經驗或證據」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】辨別社群媒體新聞真實性、閱讀各類家電說明書與合約條款、摘要會議重點。",
    "textbookFocus": "康軒：常考 PIRLS 閱讀理解四層次（直接提取訊息、直接推論、詮釋整合、比較評估）測驗題。 ｜ 南一：側重文意理解因果推論、作者寫作立場與言外之意推斷。 ｜ 翰林：側重六何法 (5W1H) 提煉文章主旨，以及心智圖、魚骨圖梳理文本段落脈絡。",
    "juniorHighBridge": "國中會考國文科【長文閱讀與雙文本對讀】：跨領域圖表素養題、非連續性文本資訊轉換與推論。",
    "infographicKey": "info-man-u1-3",
    "relatedPoints": [
      {
        "id": "kp-man-u1-1",
        "title": "形近字辨析核心",
        "unitId": "man-u1",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u1-2",
        "title": "破音多音字辨音",
        "unitId": "man-u1",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u2-1",
        "title": "轉化三大分支",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "kp-art-u2-1",
        "title": "透視法空間規律",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "跨域字形美學",
        "badgeType": "cross",
        "desc": "形近字結構辨析 ➔ 視覺藝術空間線條與透視"
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
    "title": "轉化三大分支",
    "category": "國語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "轉化三大分支：擬人（物化為人）、擬物（人化為物）、形象化（抽象概念具體化，如把愁緒剪斷）。",
    "formulaOrRule": "核心工具與心法：製造意外、衝突、心情急轉直下或觀念頓悟",
    "strategyTip": "【審題觸發】當題目出現「記敘文高潮轉折設計」時，立即啟動「製造意外、衝突、心情急轉直下或觀念頓悟」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】口述個人精彩生命故事、撰寫動人推甄自傳、社群生活日記分享。",
    "textbookFocus": "康軒：常考記敘文描寫技巧（心理描寫、動作描寫、外貌細節）與敘事觀點（第一人稱 vs 第三人稱）。 ｜ 南一：側重以小見大、借物抒情、融情入景的寫作手法題型。 ｜ 翰林：側重記敘文「起、承、轉、合」結構佈局分析與倒敘法、順敘法辨析。",
    "juniorHighBridge": "國中會考寫作測驗【引導式情境寫作】：審題精準立意新穎、材料剪裁巧妙、情思深刻結構嚴謹。",
    "infographicKey": "info-man-u2-1",
    "relatedPoints": [
      {
        "id": "kp-man-u2-2",
        "title": "設問法三大類型",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u2-3",
        "title": "映襯修辭",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u3-1",
        "title": "記敘文閱讀關鍵",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u3-1",
        "title": "現在進行式時態黃金公式",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "跨語文修辭構詞",
        "badgeType": "cross",
        "desc": "修辭轉化擬人 ➔ 英語時態與生動描寫句型"
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
    "title": "設問法三大類型",
    "category": "國語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "設問法三大類型：疑問（心中有疑無答案）、激問（答案在問題反面）、提問（自問自答導出主旨）。",
    "formulaOrRule": "核心工具與心法：細緻的外貌、神態、動作摹寫搭配符合性格的對話",
    "strategyTip": "【審題觸發】當題目出現「使人物形象鮮活立體」時，立即啟動「細緻的外貌、神態、動作摹寫搭配符合性格的對話」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】口述個人精彩生命故事、撰寫動人推甄自傳、社群生活日記分享。",
    "textbookFocus": "康軒：常考記敘文描寫技巧（心理描寫、動作描寫、外貌細節）與敘事觀點（第一人稱 vs 第三人稱）。 ｜ 南一：側重以小見大、借物抒情、融情入景的寫作手法題型。 ｜ 翰林：側重記敘文「起、承、轉、合」結構佈局分析與倒敘法、順敘法辨析。",
    "juniorHighBridge": "國中會考寫作測驗【引導式情境寫作】：審題精準立意新穎、材料剪裁巧妙、情思深刻結構嚴謹。",
    "infographicKey": "info-man-u2-2",
    "relatedPoints": [
      {
        "id": "kp-man-u2-1",
        "title": "轉化三大分支",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u2-3",
        "title": "映襯修辭",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u3-1",
        "title": "記敘文閱讀關鍵",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u3-1",
        "title": "現在進行式時態黃金公式",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "跨語文修辭構詞",
        "badgeType": "cross",
        "desc": "修辭轉化擬人 ➔ 英語時態與生動描寫句型"
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
    "title": "映襯修辭",
    "category": "國語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "映襯修辭：將兩種相反或相對的事物放在一起對照比較（如「朱門酒肉臭，路有凍死骨」）。",
    "formulaOrRule": "核心工具與心法：詳略得當（關鍵情節特寫放大，次要過程一筆帶過）",
    "strategyTip": "【審題觸發】當題目出現「避免流水帳陷阱」時，立即啟動「詳略得當（關鍵情節特寫放大，次要過程一筆帶過）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】口述個人精彩生命故事、撰寫動人推甄自傳、社群生活日記分享。",
    "textbookFocus": "康軒：常考記敘文描寫技巧（心理描寫、動作描寫、外貌細節）與敘事觀點（第一人稱 vs 第三人稱）。 ｜ 南一：側重以小見大、借物抒情、融情入景的寫作手法題型。 ｜ 翰林：側重記敘文「起、承、轉、合」結構佈局分析與倒敘法、順敘法辨析。",
    "juniorHighBridge": "國中會考寫作測驗【引導式情境寫作】：審題精準立意新穎、材料剪裁巧妙、情思深刻結構嚴謹。",
    "infographicKey": "info-man-u2-3",
    "relatedPoints": [
      {
        "id": "kp-man-u2-1",
        "title": "轉化三大分支",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u2-2",
        "title": "設問法三大類型",
        "unitId": "man-u2",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u3-1",
        "title": "記敘文閱讀關鍵",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u3-1",
        "title": "現在進行式時態黃金公式",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "跨語文修辭構詞",
        "badgeType": "cross",
        "desc": "修辭轉化擬人 ➔ 英語時態與生動描寫句型"
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
    "title": "記敘文閱讀關鍵",
    "category": "國語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "記敘文閱讀關鍵：抓緊「順敘」、「倒敘」、「插敘」時序切換，理清情感轉折觸發點。",
    "formulaOrRule": "核心工具與心法：尋找「我認為」、「總之」、「由此可見」等結論句",
    "strategyTip": "【審題觸發】當題目出現「辨識作者核心立場主張」時，立即啟動「尋找「我認為」、「總之」、「由此可見」等結論句」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】班級自治活動方案提案企劃、辯論比賽正反攻防、理性說服父母爭取自主權。",
    "textbookFocus": "康軒：常考生活科普說明文之說明方法（舉例說明、數據說明、比較說明、分類說明）判讀。 ｜ 南一：側重正反對比論證法、因果論證法，以及名言論據與生活實例論據之搭配。 ｜ 翰林：側重議論文三要素（論點-核心主張、論據-事實與理論、論證-推理過程）之結構拆解。",
    "juniorHighBridge": "國中會考議論文【思辨與推論】：辨識邏輯謬誤（以偏概全、偷換概念）、論證結構嚴密性分析。",
    "infographicKey": "info-man-u3-1",
    "relatedPoints": [
      {
        "id": "kp-man-u3-2",
        "title": "段落主旨提煉",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u3-3",
        "title": "作者態度與情感推論",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u4-1",
        "title": "絕句與律詩格律準則",
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
    "title": "段落主旨提煉",
    "category": "國語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "段落主旨提煉：找出各自然段中心句（通常位於段首或段尾），剔除細節事例概括段落大意。",
    "formulaOrRule": "核心工具與心法：事實論據（歷史典故/科學數據）與道理論據（名性格言）是否緊扣主題",
    "strategyTip": "【審題觸發】當題目出現「論據有效性檢視」時，立即啟動「事實論據（歷史典故/科學數據）與道理論據（名性格言）是否緊扣主題」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】班級自治活動方案提案企劃、辯論比賽正反攻防、理性說服父母爭取自主權。",
    "textbookFocus": "康軒：常考生活科普說明文之說明方法（舉例說明、數據說明、比較說明、分類說明）判讀。 ｜ 南一：側重正反對比論證法、因果論證法，以及名言論據與生活實例論據之搭配。 ｜ 翰林：側重議論文三要素（論點-核心主張、論據-事實與理論、論證-推理過程）之結構拆解。",
    "juniorHighBridge": "國中會考議論文【思辨與推論】：辨識邏輯謬誤（以偏概全、偷換概念）、論證結構嚴密性分析。",
    "infographicKey": "info-man-u3-2",
    "relatedPoints": [
      {
        "id": "kp-man-u3-1",
        "title": "記敘文閱讀關鍵",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u3-3",
        "title": "作者態度與情感推論",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u4-1",
        "title": "絕句與律詩格律準則",
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
    "title": "作者態度與情感推論",
    "category": "國語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "作者態度與情感推論：結合理論觀點與文中隱喻，切勿僅憑個人主觀臆測脫離文本。",
    "formulaOrRule": "核心工具與心法：下定義、舉例子、列數字、作比較、打比方",
    "strategyTip": "【審題觸發】當題目出現「說明文常見說明方法」時，立即啟動「下定義、舉例子、列數字、作比較、打比方」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】班級自治活動方案提案企劃、辯論比賽正反攻防、理性說服父母爭取自主權。",
    "textbookFocus": "康軒：常考生活科普說明文之說明方法（舉例說明、數據說明、比較說明、分類說明）判讀。 ｜ 南一：側重正反對比論證法、因果論證法，以及名言論據與生活實例論據之搭配。 ｜ 翰林：側重議論文三要素（論點-核心主張、論據-事實與理論、論證-推理過程）之結構拆解。",
    "juniorHighBridge": "國中會考議論文【思辨與推論】：辨識邏輯謬誤（以偏概全、偷換概念）、論證結構嚴密性分析。",
    "infographicKey": "info-man-u3-3",
    "relatedPoints": [
      {
        "id": "kp-man-u3-1",
        "title": "記敘文閱讀關鍵",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u3-2",
        "title": "段落主旨提煉",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u4-1",
        "title": "絕句與律詩格律準則",
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
    "title": "絕句與律詩格律準則",
    "category": "國語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "絕句與律詩格律準則：絕句全首 4 句，律詩全首 8 句；律詩三四句（頷聯）、五六句（頸聯）必須嚴格對仗。",
    "formulaOrRule": "核心工具與心法：誇飾修辭（言過其實以加深讀者印象）",
    "strategyTip": "【審題觸發】當題目出現「白髮三千丈、淚水流成一條河」時，立即啟動「誇飾修辭（言過其實以加深讀者印象）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】廣告金句文案撰寫、演講稿增添感染力、精準優雅表達個人感受。",
    "textbookFocus": "康軒：常考譬喻（明喻、隱喻/暗喻、略喻）、轉化（擬人、擬物、形象化）之經典修辭辨析。 ｜ 南一：側重誇飾、互文、層遞、雙關語之辨別，以及容易誤用之高頻成語填空。 ｜ 翰林：側重排比（三句以上結構相同）、映襯（對比對照）、設問（提問有問自答/激問答案在反面/懸問心中無解）。",
    "juniorHighBridge": "國中會考修辭與成語【語文常識二】：借代、互文、雙關（諧音雙關/詞義雙關）、成語褒貶義辨析。",
    "infographicKey": "info-man-u4-1",
    "relatedPoints": [
      {
        "id": "kp-man-u4-2",
        "title": "押韻規則心法",
        "unitId": "man-u4",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u4-3",
        "title": "現代新詩意象推敲",
        "unitId": "man-u4",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u5-1",
        "title": "文言文虛詞破譯法",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "kp-art-u4-1",
        "title": "音樂三要素核心",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "跨域音樂韻律",
        "badgeType": "cross",
        "desc": "詩詞押韻平仄 ➔ 音樂旋律節奏與曲式結構"
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
    "title": "押韻規則心法",
    "category": "國語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "押韻規則心法：偶數句（2, 4, 6, 8 句）必須押韻，第 1 句可押可不押，第 3 句絕對不押韻！",
    "formulaOrRule": "核心工具與心法：擬人修辭（轉化法將物比作人）",
    "strategyTip": "【審題觸發】當題目出現「風兒在耳邊輕聲唱歌、夕陽紅著臉躲進山頭」時，立即啟動「擬人修辭（轉化法將物比作人）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】廣告金句文案撰寫、演講稿增添感染力、精準優雅表達個人感受。",
    "textbookFocus": "康軒：常考譬喻（明喻、隱喻/暗喻、略喻）、轉化（擬人、擬物、形象化）之經典修辭辨析。 ｜ 南一：側重誇飾、互文、層遞、雙關語之辨別，以及容易誤用之高頻成語填空。 ｜ 翰林：側重排比（三句以上結構相同）、映襯（對比對照）、設問（提問有問自答/激問答案在反面/懸問心中無解）。",
    "juniorHighBridge": "國中會考修辭與成語【語文常識二】：借代、互文、雙關（諧音雙關/詞義雙關）、成語褒貶義辨析。",
    "infographicKey": "info-man-u4-2",
    "relatedPoints": [
      {
        "id": "kp-man-u4-1",
        "title": "絕句與律詩格律準則",
        "unitId": "man-u4",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u4-3",
        "title": "現代新詩意象推敲",
        "unitId": "man-u4",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u5-1",
        "title": "文言文虛詞破譯法",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "kp-art-u4-1",
        "title": "音樂三要素核心",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "跨域音樂韻律",
        "badgeType": "cross",
        "desc": "詩詞押韻平仄 ➔ 音樂旋律節奏與曲式結構"
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
    "title": "現代新詩意象推敲",
    "category": "國語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "現代新詩意象推敲：賞析詩中奇特聯想、跨行斷句節奏感與主旨隱喻。",
    "formulaOrRule": "核心工具與心法：映襯修辭（相反特質並列對照）",
    "strategyTip": "【審題觸發】當題目出現「創業維艱，守成不易；哀矜勿喜」時，立即啟動「映襯修辭（相反特質並列對照）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】廣告金句文案撰寫、演講稿增添感染力、精準優雅表達個人感受。",
    "textbookFocus": "康軒：常考譬喻（明喻、隱喻/暗喻、略喻）、轉化（擬人、擬物、形象化）之經典修辭辨析。 ｜ 南一：側重誇飾、互文、層遞、雙關語之辨別，以及容易誤用之高頻成語填空。 ｜ 翰林：側重排比（三句以上結構相同）、映襯（對比對照）、設問（提問有問自答/激問答案在反面/懸問心中無解）。",
    "juniorHighBridge": "國中會考修辭與成語【語文常識二】：借代、互文、雙關（諧音雙關/詞義雙關）、成語褒貶義辨析。",
    "infographicKey": "info-man-u4-3",
    "relatedPoints": [
      {
        "id": "kp-man-u4-1",
        "title": "絕句與律詩格律準則",
        "unitId": "man-u4",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u4-2",
        "title": "押韻規則心法",
        "unitId": "man-u4",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u5-1",
        "title": "文言文虛詞破譯法",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：國語・觀念本質與定義"
      },
      {
        "id": "kp-art-u4-1",
        "title": "音樂三要素核心",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "跨域音樂韻律",
        "badgeType": "cross",
        "desc": "詩詞押韻平仄 ➔ 音樂旋律節奏與曲式結構"
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
    "title": "文言文虛詞破譯法",
    "category": "國語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "文言文虛詞破譯法：「之」（往/代詞他/的）、「其」（他的/那）、「以」（用/因為）、「於」（在/向/比）。",
    "formulaOrRule": "核心工具與心法：首句可押可不押，二四（六八）句必押韻且一韻到底不可換韻",
    "strategyTip": "【審題觸發】當題目出現「五言律詩或七言絕句格律特徵」時，立即啟動「首句可押可不押，二四（六八）句必押韻且一韻到底不可換韻」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】春聯對聯創作張貼判斷、古詩詞意境涵養美感心靈、寓言哲理指導待人處世。",
    "textbookFocus": "康軒：常考古典唐詩宋詞絕句律詩格式（五絕、七絕、五律、七律）、字數、押韻規則（一二四句押韻）。 ｜ 南一：側重古今字義對比（如「去」在古文中多為離開）與升中銜接文言虛詞（之、乎、者、也）。 ｜ 翰林：側重先秦兩漢寓言故事（自相矛盾、刻舟求劍、鄭人買履、守株待兔）寓意啟示辨析。",
    "juniorHighBridge": "國一至國三國文【文言詩詞曲散文選讀】：近體詩格律（絕句/律詩）、宋詞填詞詞牌、元曲曲牌與襯字。",
    "infographicKey": "info-man-u5-1",
    "relatedPoints": [
      {
        "id": "kp-man-u5-2",
        "title": "寓言語意寄託",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u5-3",
        "title": "一字多義詞性辨識",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u6-1",
        "title": "破折號用法",
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
    "title": "寓言語意寄託",
    "category": "國語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "寓言語意寄託：先讀懂表面故事（如鷸蚌相爭、自相矛盾），再推導作者真正諷喻的處世哲理。",
    "formulaOrRule": "核心工具與心法：第三四句（頷聯）與第五六句（頸聯）詞性相對、字數相同",
    "strategyTip": "【審題觸發】當題目出現「律詩對仗聯判定」時，立即啟動「第三四句（頷聯）與第五六句（頸聯）詞性相對、字數相同」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】春聯對聯創作張貼判斷、古詩詞意境涵養美感心靈、寓言哲理指導待人處世。",
    "textbookFocus": "康軒：常考古典唐詩宋詞絕句律詩格式（五絕、七絕、五律、七律）、字數、押韻規則（一二四句押韻）。 ｜ 南一：側重古今字義對比（如「去」在古文中多為離開）與升中銜接文言虛詞（之、乎、者、也）。 ｜ 翰林：側重先秦兩漢寓言故事（自相矛盾、刻舟求劍、鄭人買履、守株待兔）寓意啟示辨析。",
    "juniorHighBridge": "國一至國三國文【文言詩詞曲散文選讀】：近體詩格律（絕句/律詩）、宋詞填詞詞牌、元曲曲牌與襯字。",
    "infographicKey": "info-man-u5-2",
    "relatedPoints": [
      {
        "id": "kp-man-u5-1",
        "title": "文言文虛詞破譯法",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u5-3",
        "title": "一字多義詞性辨識",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u6-1",
        "title": "破折號用法",
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
    "title": "一字多義詞性辨識",
    "category": "國語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "一字多義詞性辨識：古今詞義演變（如「妻子」古義為妻與子，「去」古義為離開）。",
    "formulaOrRule": "核心工具與心法：寓言核心寓意提取（禍福相倚、欲速則不達、不知隨變）",
    "strategyTip": "【審題觸發】當題目出現「塞翁失馬、揠苗助長、刻舟求劍」時，立即啟動「寓言核心寓意提取（禍福相倚、欲速則不達、不知隨變）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】春聯對聯創作張貼判斷、古詩詞意境涵養美感心靈、寓言哲理指導待人處世。",
    "textbookFocus": "康軒：常考古典唐詩宋詞絕句律詩格式（五絕、七絕、五律、七律）、字數、押韻規則（一二四句押韻）。 ｜ 南一：側重古今字義對比（如「去」在古文中多為離開）與升中銜接文言虛詞（之、乎、者、也）。 ｜ 翰林：側重先秦兩漢寓言故事（自相矛盾、刻舟求劍、鄭人買履、守株待兔）寓意啟示辨析。",
    "juniorHighBridge": "國一至國三國文【文言詩詞曲散文選讀】：近體詩格律（絕句/律詩）、宋詞填詞詞牌、元曲曲牌與襯字。",
    "infographicKey": "info-man-u5-3",
    "relatedPoints": [
      {
        "id": "kp-man-u5-1",
        "title": "文言文虛詞破譯法",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u5-2",
        "title": "寓言語意寄託",
        "unitId": "man-u5",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u6-1",
        "title": "破折號用法",
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
    "title": "破折號用法",
    "category": "國語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "破折號用法：表示語意轉折、聲音延長、或進一步補充說明（佔兩格 ——）。",
    "formulaOrRule": "核心工具與心法：提問互動、講述震撼小故事、提出驚人統計數據",
    "strategyTip": "【審題觸發】當題目出現「演講開場如何迅速抓住聽眾注意力」時，立即啟動「提問互動、講述震撼小故事、提出驚人統計數據」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】競選模範生政見發表、畢業專案成果向全校師生發表、跨部門團隊會議主持。",
    "textbookFocus": "康軒：常考口語表達溝通原則、聆聽傾聽技巧、克服上台怯場五大秘訣。 ｜ 南一：側重辯論賽正反方立場邏輯拆解、反駁對方論點漏洞之攻防技巧。 ｜ 翰林：側重簡報架構設計（黃金三分鐘破題、結論呼籲行動）與視線肢體非語言訊息。",
    "juniorHighBridge": "國中口語表達與專題探究【自主學習成果發表】：跨領域專題簡報製作、論證表達與即席答辯能力。",
    "infographicKey": "info-man-u6-1",
    "relatedPoints": [
      {
        "id": "kp-man-u6-2",
        "title": "夾注號與括號",
        "unitId": "man-u6",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u6-3",
        "title": "病句診斷三原則",
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
    "title": "夾注號與括號",
    "category": "國語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "夾注號與括號：提供補充說明；句內括號緊貼被說明詞，句外括號置於句末標點之外。",
    "formulaOrRule": "核心工具與心法：字字照念PPT、密密麻麻長篇大論、配色刺眼不協調",
    "strategyTip": "【審題觸發】當題目出現「簡報投影片設計大忌」時，立即啟動「字字照念PPT、密密麻麻長篇大論、配色刺眼不協調」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】競選模範生政見發表、畢業專案成果向全校師生發表、跨部門團隊會議主持。",
    "textbookFocus": "康軒：常考口語表達溝通原則、聆聽傾聽技巧、克服上台怯場五大秘訣。 ｜ 南一：側重辯論賽正反方立場邏輯拆解、反駁對方論點漏洞之攻防技巧。 ｜ 翰林：側重簡報架構設計（黃金三分鐘破題、結論呼籲行動）與視線肢體非語言訊息。",
    "juniorHighBridge": "國中口語表達與專題探究【自主學習成果發表】：跨領域專題簡報製作、論證表達與即席答辯能力。",
    "infographicKey": "info-man-u6-2",
    "relatedPoints": [
      {
        "id": "kp-man-u6-1",
        "title": "破折號用法",
        "unitId": "man-u6",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u6-3",
        "title": "病句診斷三原則",
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
    "title": "病句診斷三原則",
    "category": "國語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "病句診斷三原則：排查「成分殘缺（缺主詞動詞）」、「語意重複贅詞（過分沉溺不可拔）」、「前後邏輯矛盾」。",
    "formulaOrRule": "核心工具與心法：先傾聽複述確認問題 ➔ 感謝提問 ➔ 條理分明正面回答",
    "strategyTip": "【審題觸發】當題目出現「面臨提問質疑應對」時，立即啟動「先傾聽複述確認問題 ➔ 感謝提問 ➔ 條理分明正面回答」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】競選模範生政見發表、畢業專案成果向全校師生發表、跨部門團隊會議主持。",
    "textbookFocus": "康軒：常考口語表達溝通原則、聆聽傾聽技巧、克服上台怯場五大秘訣。 ｜ 南一：側重辯論賽正反方立場邏輯拆解、反駁對方論點漏洞之攻防技巧。 ｜ 翰林：側重簡報架構設計（黃金三分鐘破題、結論呼籲行動）與視線肢體非語言訊息。",
    "juniorHighBridge": "國中口語表達與專題探究【自主學習成果發表】：跨領域專題簡報製作、論證表達與即席答辯能力。",
    "infographicKey": "info-man-u6-3",
    "relatedPoints": [
      {
        "id": "kp-man-u6-1",
        "title": "破折號用法",
        "unitId": "man-u6",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u6-2",
        "title": "夾注號與括號",
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
    "definition": "書信提稱語稱謂禮貌：對長輩用「膝下、尊前」；對平輩用「足下、閣下」；對晚輩用「知之、青睞」。",
    "formulaOrRule": "核心工具與心法：祖父母父母用「安啟」、長輩用「賜啟/道啟」、平輩用「大啟/台啟」、切忌用「敬啟」（敬啟是請對方恭敬打開）",
    "strategyTip": "【審題觸發】當題目出現「信封中欄啟封詞（大考魔王陷阱題！）」時，立即啟動「祖父母父母用「安啟」、長輩用「賜啟/道啟」、平輩用「大啟/台啟」、切忌用「敬啟」（敬啟是請對方恭敬打開）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】電子郵件商務書信正確署名、婚禮喜帖喪禮禮金袋題辭正確題寫、請託師長用語尊崇體面。",
    "textbookFocus": "康軒：常考書信便條、感謝函、邀請卡之信封格式（收件人稱謂、啟封詞）常犯禁忌。 ｜ 南一：側重自稱與稱人之敬詞與謙詞（家大舍小令他人、愚自稱賢敬尊長）之大考高頻陷阱。 ｜ 翰林：側重啟事、會議紀錄、借據借條、公告之標準要素與語氣得體性。",
    "juniorHighBridge": "國中會考國文【語文常識一・應用文精準解析】：書信、柬帖、題辭、對聯必考題型全攻略。",
    "infographicKey": "info-man-u7-1",
    "relatedPoints": [
      {
        "id": "kp-man-u7-2",
        "title": "信封稱謂致命陷阱",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u7-3",
        "title": "段考高頻題辭對照",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u8-1",
        "title": "六書前四者本質",
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
    "title": "信封稱謂致命陷阱",
    "category": "國語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "信封稱謂致命陷阱：信封上的稱謂是「送信人對收信人的稱呼」，絕不可寫自己對收信人的親屬稱謂！",
    "formulaOrRule": "核心工具與心法：稱對方為「令尊」，稱自己為「家父」",
    "strategyTip": "【審題觸發】當題目出現「稱呼對方父親與自己父親」時，立即啟動「稱對方為「令尊」，稱自己為「家父」」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷防錯】防雷必背：信封上的稱謂是「送信人對收信人的稱呼」，絕不可寫自己對收信人的親屬稱謂！",
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
        "title": "段考高頻題辭對照",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・生活實用與避雷"
      },
      {
        "id": "kp-man-u8-1",
        "title": "六書前四者本質",
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
    "title": "段考高頻題辭對照",
    "category": "國語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "段考高頻題辭對照：賀搬遷（喬遷之喜、美輪美奐）、賀婚禮（百年好合、天作之合）、悼喪事（駕鶴西歸、福壽全歸）。",
    "formulaOrRule": "核心工具與心法：桃儀（祝壽禮金）、程儀（餞行禮金）、奠儀（喪禮撫恤）",
    "strategyTip": "【審題觸發】當題目出現「請帖柬帖關鍵用語」時，立即啟動「桃儀（祝壽禮金）、程儀（餞行禮金）、奠儀（喪禮撫恤）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "信封稱謂致命陷阱",
        "unitId": "man-u7",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u8-1",
        "title": "六書前四者本質",
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
    "title": "六書前四者本質",
    "category": "國語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "六書前四者本質：象形（獨體畫實物，日/月）；指事（獨體加抽象符號，上/下/刃）；會意（合體合意，休/武）；形聲（合體形旁表意+聲旁表音，江/河）。",
    "formulaOrRule": "核心工具與心法：象形造字（隨體詰詘，純粹繪畫物體輪廓）",
    "strategyTip": "【審題觸發】當題目出現「日、月、山、水、木、魚、鳥」時，立即啟動「象形造字（隨體詰詘，純粹繪畫物體輪廓）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】破解難字罕見字形音義關係、毛筆書法名家碑帖鑑賞、文字創意商標設計。",
    "textbookFocus": "康軒：常考漢字六書造字原則（象形、指事、會意、形聲）分類判別。 ｜ 南一：側重國中先修國學常識：書法字體演進（甲骨、金文、篆書、隸書、草書、行書、楷書）。 ｜ 翰林：側重造字法與用字法差異（象形指事為獨體之文，會意形聲為合體之字；轉注假借為用字法）。",
    "juniorHighBridge": "國中會考國文【文字學與六書體系】：造字法（象形/指事/會意/形聲）與用字法（轉注/假借）嚴格分類。",
    "infographicKey": "info-man-u8-1",
    "relatedPoints": [
      {
        "id": "kp-man-u8-2",
        "title": "形聲字佔漢字 80% 以上",
        "unitId": "man-u8",
        "subjectId": "mandarin",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・運算算理與公式"
      },
      {
        "id": "kp-man-u8-3",
        "title": "國中銜接文言文破題",
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
        "id": "kp-soc-u7-1",
        "title": "臺灣多元族群譜系",
        "unitId": "soc-u7",
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
    "title": "形聲字佔漢字 80% 以上",
    "category": "國語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "形聲字佔漢字 80% 以上：掌握「字義看形符、字音看聲符」的識字規律。",
    "formulaOrRule": "核心工具與心法：指事造字（在象形基礎上加上抽象點線符號或純抽象概念）",
    "strategyTip": "【審題觸發】當題目出現「上、下、本、末、刃、甘」時，立即啟動「指事造字（在象形基礎上加上抽象點線符號或純抽象概念）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】破解難字罕見字形音義關係、毛筆書法名家碑帖鑑賞、文字創意商標設計。",
    "textbookFocus": "康軒：常考漢字六書造字原則（象形、指事、會意、形聲）分類判別。 ｜ 南一：側重國中先修國學常識：書法字體演進（甲骨、金文、篆書、隸書、草書、行書、楷書）。 ｜ 翰林：側重造字法與用字法差異（象形指事為獨體之文，會意形聲為合體之字；轉注假借為用字法）。",
    "juniorHighBridge": "國中會考國文【文字學與六書體系】：造字法（象形/指事/會意/形聲）與用字法（轉注/假借）嚴格分類。",
    "infographicKey": "info-man-u8-2",
    "relatedPoints": [
      {
        "id": "kp-man-u8-1",
        "title": "六書前四者本質",
        "unitId": "man-u8",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u8-3",
        "title": "國中銜接文言文破題",
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
        "id": "kp-soc-u7-1",
        "title": "臺灣多元族群譜系",
        "unitId": "soc-u7",
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
    "title": "國中銜接文言文破題",
    "category": "國語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "國中銜接文言文破題：古今異義詞、倒裝句型（何厭之有）與文言句讀標點實戰。",
    "formulaOrRule": "核心工具與心法：會意造字（合體比意，兩個文字涵義融合創造新意）",
    "strategyTip": "【審題觸發】當題目出現「休、武、信、森、林、明、采」時，立即啟動「會意造字（合體比意，兩個文字涵義融合創造新意）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】破解難字罕見字形音義關係、毛筆書法名家碑帖鑑賞、文字創意商標設計。",
    "textbookFocus": "康軒：常考漢字六書造字原則（象形、指事、會意、形聲）分類判別。 ｜ 南一：側重國中先修國學常識：書法字體演進（甲骨、金文、篆書、隸書、草書、行書、楷書）。 ｜ 翰林：側重造字法與用字法差異（象形指事為獨體之文，會意形聲為合體之字；轉注假借為用字法）。",
    "juniorHighBridge": "國中會考國文【文字學與六書體系】：造字法（象形/指事/會意/形聲）與用字法（轉注/假借）嚴格分類。",
    "infographicKey": "info-man-u8-3",
    "relatedPoints": [
      {
        "id": "kp-man-u8-1",
        "title": "六書前四者本質",
        "unitId": "man-u8",
        "subjectId": "mandarin",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：國語・觀念本質與定義"
      },
      {
        "id": "kp-man-u8-2",
        "title": "形聲字佔漢字 80% 以上",
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
        "id": "kp-soc-u7-1",
        "title": "臺灣多元族群譜系",
        "unitId": "soc-u7",
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
    "title": "臺灣地質成因",
    "category": "社會・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "臺灣地質成因：歐亞板塊與菲律賓海板塊相互擠壓碰撞，形成高聳連綿之中央山脈。",
    "formulaOrRule": "核心工具與心法：總統公佈法律任命行政院長；行政院長向立法院負責",
    "strategyTip": "【審題觸發】當題目出現「行政院院長（行政首長） vs 總統職權」時，立即啟動「總統公佈法律任命行政院長；行政院長向立法院負責」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】看懂新聞報導立法委員質詢內閣部會、參與學校學生會自治選舉、行使公民投票與集會遊行。",
    "textbookFocus": "康軒：常考中華民國五權憲法政府架構（總統、行政、立法、司法院職權與覆議/質詢權衡）。 ｜ 南一：側重公民權利與義務（選舉、罷免、創制、複決）與地方自治公職人員分工（縣市長、鄉鎮長、里長）。 ｜ 翰林：側重臺灣民主發展大事記（二二八事件、戒嚴體制、動員戡亂解除、國會全面改選、總統直選）。",
    "juniorHighBridge": "國二公民【政府的組織與職權】：中央政府五院互動關係（覆議、不信任案與解散立法院機制）。",
    "infographicKey": "info-soc-u1-1",
    "relatedPoints": [
      {
        "id": "kp-soc-u1-2",
        "title": "氣候界線關鍵",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u1-3",
        "title": "臺灣季風風向與降雨",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u2-1",
        "title": "1895 年馬關條約清廷割讓臺灣",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
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
    "title": "氣候界線關鍵",
    "category": "社會・運算算理與公式",
    "badgeColor": "amber",
    "definition": "氣候界線關鍵：北回歸線（$23.5^\\circ\\text{N}$）橫貫中南部，以北為副熱帶季風，以南為熱帶季風。",
    "formulaOrRule": "北回歸線（$23.5^\\circ\\text{N}$）橫貫中南部，以北為副熱帶季風，以南為熱帶季風。",
    "strategyTip": "【審題觸發】當題目出現「立法院核心四大職權」時，立即啟動「議決法律案、預算案、戒嚴案、行使人事同意權與質詢權」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】看懂新聞報導立法委員質詢內閣部會、參與學校學生會自治選舉、行使公民投票與集會遊行。",
    "textbookFocus": "康軒：常考中華民國五權憲法政府架構（總統、行政、立法、司法院職權與覆議/質詢權衡）。 ｜ 南一：側重公民權利與義務（選舉、罷免、創制、複決）與地方自治公職人員分工（縣市長、鄉鎮長、里長）。 ｜ 翰林：側重臺灣民主發展大事記（二二八事件、戒嚴體制、動員戡亂解除、國會全面改選、總統直選）。",
    "juniorHighBridge": "國二公民【政府的組織與職權】：中央政府五院互動關係（覆議、不信任案與解散立法院機制）。",
    "infographicKey": "info-soc-u1-2",
    "relatedPoints": [
      {
        "id": "kp-soc-u1-1",
        "title": "臺灣地質成因",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u1-3",
        "title": "臺灣季風風向與降雨",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u2-1",
        "title": "1895 年馬關條約清廷割讓臺灣",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
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
    "title": "臺灣季風風向與降雨",
    "category": "社會・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "臺灣季風風向與降雨：冬季東北季風（北部東北部迎風面濕冷）；夏季西南季風（全島普遍高溫多雷陣雨）。",
    "formulaOrRule": "核心工具與心法：司法院憲法法庭判決違憲審查；監察院糾舉公務員、彈劾官員",
    "strategyTip": "【審題觸發】當題目出現「違憲審查與彈劾糾舉分工」時，立即啟動「司法院憲法法庭判決違憲審查；監察院糾舉公務員、彈劾官員」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】看懂新聞報導立法委員質詢內閣部會、參與學校學生會自治選舉、行使公民投票與集會遊行。",
    "textbookFocus": "康軒：常考中華民國五權憲法政府架構（總統、行政、立法、司法院職權與覆議/質詢權衡）。 ｜ 南一：側重公民權利與義務（選舉、罷免、創制、複決）與地方自治公職人員分工（縣市長、鄉鎮長、里長）。 ｜ 翰林：側重臺灣民主發展大事記（二二八事件、戒嚴體制、動員戡亂解除、國會全面改選、總統直選）。",
    "juniorHighBridge": "國二公民【政府的組織與職權】：中央政府五院互動關係（覆議、不信任案與解散立法院機制）。",
    "infographicKey": "info-soc-u1-3",
    "relatedPoints": [
      {
        "id": "kp-soc-u1-1",
        "title": "臺灣地質成因",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u1-2",
        "title": "氣候界線關鍵",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u2-1",
        "title": "1895 年馬關條約清廷割讓臺灣",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
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
    "title": "1895 年馬關條約清廷割讓臺灣",
    "category": "社會・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "1895 年馬關條約清廷割讓臺灣：臺灣進入日治時期 50 年殖民統治。",
    "formulaOrRule": "核心工具與心法：南島語系族群、豐年祭祖靈祭、母系/父系社會制度、原民語言保存",
    "strategyTip": "【審題觸發】當題目出現「臺灣原住民族文化特色與傳承」時，立即啟動「南島語系族群、豐年祭祖靈祭、母系/父系社會制度、原民語言保存」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】品嚐東南亞特色異國料理學習文化背景、參加原住民部落豐年祭典尊重祭儀規範。",
    "textbookFocus": "康軒：常考臺灣原住民族（法定16族文化、祭典特徵如飛魚祭、矮靈祭、豐年祭）與族群平權。 ｜ 南一：側重多元文化主義、文化相對論（尊重各族群習俗，杜絕文化偏見與歧視）。 ｜ 翰林：側重臺灣移民社會歷史（閩南、客家義民祭、戰後新住民文化融和）與少子化高齡化社會變遷。",
    "juniorHighBridge": "國一公民【多元文化與族群關係】：文化的多樣性、主流文化與次文化、文化位階的批判與反思。",
    "infographicKey": "info-soc-u2-1",
    "relatedPoints": [
      {
        "id": "kp-soc-u2-2",
        "title": "殖民現代化兩面性",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u2-3",
        "title": "非武裝抗日先驅",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u3-1",
        "title": "二二八事件與白色恐怖",
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
    "title": "殖民現代化兩面性",
    "category": "社會・運算算理與公式",
    "badgeColor": "amber",
    "definition": "殖民現代化兩面性：推動戶口普查、鐵路水利（嘉南大圳）、度量衡統一；但實施經濟榨取（農業臺灣工業日本）。",
    "formulaOrRule": "核心工具與心法：文化相對主義（不以自身文化為中心評價他者優劣），消除族群刻板印象",
    "strategyTip": "【審題觸發】當題目出現「面對外來移民與不同習俗應有態度」時，立即啟動「文化相對主義（不以自身文化為中心評價他者優劣），消除族群刻板印象」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】品嚐東南亞特色異國料理學習文化背景、參加原住民部落豐年祭典尊重祭儀規範。",
    "textbookFocus": "康軒：常考臺灣原住民族（法定16族文化、祭典特徵如飛魚祭、矮靈祭、豐年祭）與族群平權。 ｜ 南一：側重多元文化主義、文化相對論（尊重各族群習俗，杜絕文化偏見與歧視）。 ｜ 翰林：側重臺灣移民社會歷史（閩南、客家義民祭、戰後新住民文化融和）與少子化高齡化社會變遷。",
    "juniorHighBridge": "國一公民【多元文化與族群關係】：文化的多樣性、主流文化與次文化、文化位階的批判與反思。",
    "infographicKey": "info-soc-u2-2",
    "relatedPoints": [
      {
        "id": "kp-soc-u2-1",
        "title": "1895 年馬關條約清廷割讓臺灣",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u2-3",
        "title": "非武裝抗日先驅",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u3-1",
        "title": "二二八事件與白色恐怖",
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
    "title": "非武裝抗日先驅",
    "category": "社會・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "非武裝抗日先驅：林獻堂、蔣渭水成立「臺灣文化協會」、發動「臺灣議會設置請願運動」啟迪民智。",
    "formulaOrRule": "核心工具與心法：多元母語教學、客家電視台/原民電視台、族群平權法律保障",
    "strategyTip": "【審題觸發】當題目出現「多元文化社會推動政策」時，立即啟動「多元母語教學、客家電視台/原民電視台、族群平權法律保障」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】品嚐東南亞特色異國料理學習文化背景、參加原住民部落豐年祭典尊重祭儀規範。",
    "textbookFocus": "康軒：常考臺灣原住民族（法定16族文化、祭典特徵如飛魚祭、矮靈祭、豐年祭）與族群平權。 ｜ 南一：側重多元文化主義、文化相對論（尊重各族群習俗，杜絕文化偏見與歧視）。 ｜ 翰林：側重臺灣移民社會歷史（閩南、客家義民祭、戰後新住民文化融和）與少子化高齡化社會變遷。",
    "juniorHighBridge": "國一公民【多元文化與族群關係】：文化的多樣性、主流文化與次文化、文化位階的批判與反思。",
    "infographicKey": "info-soc-u2-3",
    "relatedPoints": [
      {
        "id": "kp-soc-u2-1",
        "title": "1895 年馬關條約清廷割讓臺灣",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u2-2",
        "title": "殖民現代化兩面性",
        "unitId": "soc-u2",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u3-1",
        "title": "二二八事件與白色恐怖",
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
    "title": "二二八事件與白色恐怖",
    "category": "社會・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "二二八事件與白色恐怖：戰後初期政治腐敗與族群矛盾爆發，臺灣歷經長達 38 年的戒嚴軍事統治。",
    "formulaOrRule": "核心工具與心法：所放棄的代價中最高價值者（不僅金錢，包含時間與未來利益）",
    "strategyTip": "【審題觸發】當題目出現「去打工賺1000元還是去上輔導課（求機會成本）」時，立即啟動「所放棄的代價中最高價值者（不僅金錢，包含時間與未來利益）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】衡量是否買昂貴潮牌球鞋之機會成本、理解颱風後菜價飆漲之供需失衡原因。",
    "textbookFocus": "康軒：常考臺灣戰後經濟發展四階段（農業培養工業、出口導向加工出口區、重化工業、高科技竹科）。 ｜ 南一：側重市場供求均衡價格變化、公平交易委員會職責，以及家庭理性消費與儲蓄理財。 ｜ 翰林：側重機會成本（選擇中代價最高者）與比較利益（生產成本相對較低者專業化生產）。",
    "juniorHighBridge": "國二公民【市場經濟與貿易】：需求法則與供給法則、國際貿易比較利益法則、GDP與經濟指標。",
    "infographicKey": "info-soc-u3-1",
    "relatedPoints": [
      {
        "id": "kp-soc-u3-2",
        "title": "臺灣民主化三大歷史坐標",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u3-3",
        "title": "現代公民社會精神",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u4-1",
        "title": "供求法則本質",
        "unitId": "soc-u4",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
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
    "title": "臺灣民主化三大歷史坐標",
    "category": "社會・運算算理與公式",
    "badgeColor": "amber",
    "definition": "臺灣民主化三大歷史坐標：1987 蔣經國宣布「解除戒嚴」 ➔ 1996 首次「總統直選」 ➔ 2000 首次「政黨輪替」。",
    "formulaOrRule": "核心工具與心法：供過於求價格下跌，供不應求價格上漲，直到達成市場均衡價格",
    "strategyTip": "【審題觸發】當題目出現「市場供過於求 vs 供不應求」時，立即啟動「供過於求價格下跌，供不應求價格上漲，直到達成市場均衡價格」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】衡量是否買昂貴潮牌球鞋之機會成本、理解颱風後菜價飆漲之供需失衡原因。",
    "textbookFocus": "康軒：常考臺灣戰後經濟發展四階段（農業培養工業、出口導向加工出口區、重化工業、高科技竹科）。 ｜ 南一：側重市場供求均衡價格變化、公平交易委員會職責，以及家庭理性消費與儲蓄理財。 ｜ 翰林：側重機會成本（選擇中代價最高者）與比較利益（生產成本相對較低者專業化生產）。",
    "juniorHighBridge": "國二公民【市場經濟與貿易】：需求法則與供給法則、國際貿易比較利益法則、GDP與經濟指標。",
    "infographicKey": "info-soc-u3-2",
    "relatedPoints": [
      {
        "id": "kp-soc-u3-1",
        "title": "二二八事件與白色恐怖",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u3-3",
        "title": "現代公民社會精神",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u4-1",
        "title": "供求法則本質",
        "unitId": "soc-u4",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
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
    "title": "現代公民社會精神",
    "category": "社會・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "現代公民社會精神：憲法保障言論、集會、結社與出版自由，多元族群共榮共存。",
    "formulaOrRule": "核心工具與心法：農業培養工業 ➔ 進口替代 ➔ 加工出口區 ➔ 新竹科學園區半導體高科技矽島",
    "strategyTip": "【審題觸發】當題目出現「臺灣一甲子經濟奇蹟轉型歷程」時，立即啟動「農業培養工業 ➔ 進口替代 ➔ 加工出口區 ➔ 新竹科學園區半導體高科技矽島」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】衡量是否買昂貴潮牌球鞋之機會成本、理解颱風後菜價飆漲之供需失衡原因。",
    "textbookFocus": "康軒：常考臺灣戰後經濟發展四階段（農業培養工業、出口導向加工出口區、重化工業、高科技竹科）。 ｜ 南一：側重市場供求均衡價格變化、公平交易委員會職責，以及家庭理性消費與儲蓄理財。 ｜ 翰林：側重機會成本（選擇中代價最高者）與比較利益（生產成本相對較低者專業化生產）。",
    "juniorHighBridge": "國二公民【市場經濟與貿易】：需求法則與供給法則、國際貿易比較利益法則、GDP與經濟指標。",
    "infographicKey": "info-soc-u3-3",
    "relatedPoints": [
      {
        "id": "kp-soc-u3-1",
        "title": "二二八事件與白色恐怖",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u3-2",
        "title": "臺灣民主化三大歷史坐標",
        "unitId": "soc-u3",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u4-1",
        "title": "供求法則本質",
        "unitId": "soc-u4",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
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
    "title": "供求法則本質",
    "category": "社會・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "供求法則本質：價格越高，消費者需求量越少、生產者供給量越多；供求交會點即為「均衡價格」。",
    "formulaOrRule": "核心工具與心法：政府間國際組織 (IGO，以主權國家為會員主體)",
    "strategyTip": "【審題觸發】當題目出現「聯合國 (UN)、世界衛生組織 (WHO)、世界貿易組織 (WTO)」時，立即啟動「政府間國際組織 (IGO，以主權國家為會員主體)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】消費公平貿易咖啡豆支持跨國小農、為國際難民危機發起校園人道募捐行動。",
    "textbookFocus": "康軒：常考臺灣參與國際組織案例（WTO 世界貿易組織、APEC 亞太經合會、NGO 國際非政府組織）。 ｜ 南一：側重全球化衍生之全球貧富差距、傳染病跨國擴散與跨國環保公約之共同責任。 ｜ 翰林：側重全球化浪潮下之文化交流、全球分工供應鏈與跨國企業影響力。",
    "juniorHighBridge": "國三公民【全球化與全球關聯】：全球在地化、國際社會行為者、跨國犯罪防制與國際法規範。",
    "infographicKey": "info-soc-u4-1",
    "relatedPoints": [
      {
        "id": "kp-soc-u4-2",
        "title": "機會成本定理",
        "unitId": "soc-u4",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u4-3",
        "title": "聰明理財規劃",
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
        "id": "kp-comp-u1-1",
        "title": "艾森豪時間四象限矩陣",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "跨域決策模型",
        "badgeType": "cross",
        "desc": "機會成本與供需 ➔ 艾森豪時間管理四象限決策"
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
    "title": "機會成本定理",
    "category": "社會・運算算理與公式",
    "badgeColor": "amber",
    "definition": "機會成本定理：做出一項選擇時，「所放棄的所有其他選項中，價值最高的那一個」。",
    "formulaOrRule": "核心工具與心法：非政府國際組織 (INGO，民間自主成立推動公益)",
    "strategyTip": "【審題觸發】當題目出現「無國界醫生 (MSF)、綠色和平組織、國際奧委會」時，立即啟動「非政府國際組織 (INGO，民間自主成立推動公益)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】消費公平貿易咖啡豆支持跨國小農、為國際難民危機發起校園人道募捐行動。",
    "textbookFocus": "康軒：常考臺灣參與國際組織案例（WTO 世界貿易組織、APEC 亞太經合會、NGO 國際非政府組織）。 ｜ 南一：側重全球化衍生之全球貧富差距、傳染病跨國擴散與跨國環保公約之共同責任。 ｜ 翰林：側重全球化浪潮下之文化交流、全球分工供應鏈與跨國企業影響力。",
    "juniorHighBridge": "國三公民【全球化與全球關聯】：全球在地化、國際社會行為者、跨國犯罪防制與國際法規範。",
    "infographicKey": "info-soc-u4-2",
    "relatedPoints": [
      {
        "id": "kp-soc-u4-1",
        "title": "供求法則本質",
        "unitId": "soc-u4",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u4-3",
        "title": "聰明理財規劃",
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
        "id": "kp-comp-u1-1",
        "title": "艾森豪時間四象限矩陣",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "跨域決策模型",
        "badgeType": "cross",
        "desc": "機會成本與供需 ➔ 艾森豪時間管理四象限決策"
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
    "title": "聰明理財規劃",
    "category": "社會・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "聰明理財規劃：收入 - 儲蓄 = 支出（先存再花）；分散投資風險，不把雞蛋放在同一籃子。",
    "formulaOrRule": "核心工具與心法：亞太經濟合作會議 (APEC)、世界貿易組織 (WTO，以台澎金馬個別關稅領域名義)",
    "strategyTip": "【審題觸發】當題目出現「臺灣參與之重要國際經貿組織」時，立即啟動「亞太經濟合作會議 (APEC)、世界貿易組織 (WTO，以台澎金馬個別關稅領域名義)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】消費公平貿易咖啡豆支持跨國小農、為國際難民危機發起校園人道募捐行動。",
    "textbookFocus": "康軒：常考臺灣參與國際組織案例（WTO 世界貿易組織、APEC 亞太經合會、NGO 國際非政府組織）。 ｜ 南一：側重全球化衍生之全球貧富差距、傳染病跨國擴散與跨國環保公約之共同責任。 ｜ 翰林：側重全球化浪潮下之文化交流、全球分工供應鏈與跨國企業影響力。",
    "juniorHighBridge": "國三公民【全球化與全球關聯】：全球在地化、國際社會行為者、跨國犯罪防制與國際法規範。",
    "infographicKey": "info-soc-u4-3",
    "relatedPoints": [
      {
        "id": "kp-soc-u4-1",
        "title": "供求法則本質",
        "unitId": "soc-u4",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u4-2",
        "title": "機會成本定理",
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
        "id": "kp-comp-u1-1",
        "title": "艾森豪時間四象限矩陣",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "跨域決策模型",
        "badgeType": "cross",
        "desc": "機會成本與供需 ➔ 艾森豪時間管理四象限決策"
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
    "definition": "法律位階金字塔：憲法（最高根本大法，違憲者無效） ➔ 法律（立法院三讀） ➔ 命令（行政機關訂定）。",
    "formulaOrRule": "核心工具與心法：該命令無效！（法律位階原則）",
    "strategyTip": "【審題觸發】當題目出現「行政機關訂定之辦法規章與立法院通過之法律牴觸時」時，立即啟動「該命令無效！（法律位階原則）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】看懂校規制定不得違背教育部法令規章、在網路社群尊重著作權不擅自截圖轉傳他人隱私。",
    "textbookFocus": "康軒：常考兒少福利與權益保障法（禁止吸菸飲酒、禁止沉迷網路遊戲逾合理時間）、家暴通報 113。 ｜ 南一：側重網路著作權保護、智慧財產權、網路霸凌求助專線 1953 與個人資料保護法。 ｜ 翰林：側重聯合國《兒童權利公約》(CRC) 四大基本原則（生存權、受保護權、發展權、參與權）。",
    "juniorHighBridge": "國一公民【法律的規範與生活應用】：民法（權利能力與契約）、刑法（責任能力年齡層次）、行政法規救濟。",
    "infographicKey": "info-soc-u5-1",
    "relatedPoints": [
      {
        "id": "kp-soc-u5-2",
        "title": "五院職權分工",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u5-3",
        "title": "地方自治要素",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u6-1",
        "title": "憲法四大基本權利",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "kp-comp-u5-2",
        "title": "防範網路霸凌三不一留",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "跨域法治素養",
        "badgeType": "cross",
        "desc": "憲法位階與公民權 ➔ 數位足跡與網路霸凌法治"
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
    "title": "五院職權分工",
    "category": "社會・運算算理與公式",
    "badgeColor": "amber",
    "definition": "五院職權分工：行政院（最高行政機關）、立法院（審預算法律）、司法院（掌解釋憲法與審判）、考試院（公務員考選）、監察院（彈劾糾舉）。",
    "formulaOrRule": "核心工具與心法：禁止歧視原則、兒童最佳利益原則、生命生存及發展權、兒童表意權",
    "strategyTip": "【審題觸發】當題目出現「聯合國兒童權利公約 (CRC) 四大原則」時，立即啟動「禁止歧視原則、兒童最佳利益原則、生命生存及發展權、兒童表意權」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "地方自治要素",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u6-1",
        "title": "憲法四大基本權利",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "kp-comp-u5-2",
        "title": "防範網路霸凌三不一留",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "跨域法治素養",
        "badgeType": "cross",
        "desc": "憲法位階與公民權 ➔ 數位足跡與網路霸凌法治"
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
    "title": "地方自治要素",
    "category": "社會・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "地方自治要素：地方行政首長（縣市長、鄉鎮市長）與地方民意代表（議員）皆由人民直接選舉產生。",
    "formulaOrRule": "核心工具與心法：觸犯兒少性剝削防制條例、刑法公然侮辱與妨害名譽罪",
    "strategyTip": "【審題觸發】當題目出現「網路散布他人私密影像或霸凌言詞法律責任」時，立即啟動「觸犯兒少性剝削防制條例、刑法公然侮辱與妨害名譽罪」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "五院職權分工",
        "unitId": "soc-u5",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u6-1",
        "title": "憲法四大基本權利",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：社會・觀念本質與定義"
      },
      {
        "id": "kp-comp-u5-2",
        "title": "防範網路霸凌三不一留",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "跨域法治素養",
        "badgeType": "cross",
        "desc": "憲法位階與公民權 ➔ 數位足跡與網路霸凌法治"
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
    "title": "憲法四大基本權利",
    "category": "社會・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "憲法四大基本權利：平等權、自由權、受益權（請願訴願受教育）、參政權（選舉罷免創制複決）。",
    "formulaOrRule": "核心工具與心法：減少溫室氣體排放、綠色低碳生活與能源轉型",
    "strategyTip": "【審題觸發】當題目出現「SDG 13 氣候行動、淨零碳排、碳足跡標籤」時，立即啟動「減少溫室氣體排放、綠色低碳生活與能源轉型」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】落實校園垃圾秤重減量競賽、家庭換裝 LED 節能燈具與一級變頻家電、落實舊衣循環捐贈。",
    "textbookFocus": "康軒：常考聯合國永續發展目標 (SDGs 17項) 核心宗旨、臺灣推動減碳減塑日常公民行動。 ｜ 南一：側重循環經濟、碳足跡標籤、綠建築九大指標與企業社會責任 (CSR/ESG)。 ｜ 翰林：側重全球暖化溫室氣體排放、《巴黎氣候協定》、再生能源（太陽能、離岸風電）發展。",
    "juniorHighBridge": "國三下地理與公民【環境問題與永續發展】：京都議定書與巴黎協定、碳稅與碳交易機制、環境倫理。",
    "infographicKey": "info-soc-u6-1",
    "relatedPoints": [
      {
        "id": "kp-soc-u6-2",
        "title": "兒少保護關鍵法規",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u6-3",
        "title": "智財權與法治界限",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "臺灣多元族群譜系",
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
    "title": "兒少保護關鍵法規",
    "category": "社會・運算算理與公式",
    "badgeColor": "amber",
    "definition": "兒少保護關鍵法規：未滿 6 歲兒童不得獨留家中；遇到家庭暴力或性侵害請撥打「113」保護專線。",
    "formulaOrRule": "核心工具與心法：從搖籃到搖籃：廢棄物資源化回收再利用，減少資源開採",
    "strategyTip": "【審題觸發】當題目出現「循環經濟 (Circular Economy) 概念」時，立即啟動「從搖籃到搖籃：廢棄物資源化回收再利用，減少資源開採」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】落實校園垃圾秤重減量競賽、家庭換裝 LED 節能燈具與一級變頻家電、落實舊衣循環捐贈。",
    "textbookFocus": "康軒：常考聯合國永續發展目標 (SDGs 17項) 核心宗旨、臺灣推動減碳減塑日常公民行動。 ｜ 南一：側重循環經濟、碳足跡標籤、綠建築九大指標與企業社會責任 (CSR/ESG)。 ｜ 翰林：側重全球暖化溫室氣體排放、《巴黎氣候協定》、再生能源（太陽能、離岸風電）發展。",
    "juniorHighBridge": "國三下地理與公民【環境問題與永續發展】：京都議定書與巴黎協定、碳稅與碳交易機制、環境倫理。",
    "infographicKey": "info-soc-u6-2",
    "relatedPoints": [
      {
        "id": "kp-soc-u6-1",
        "title": "憲法四大基本權利",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u6-3",
        "title": "智財權與法治界限",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "臺灣多元族群譜系",
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
    "title": "智財權與法治界限",
    "category": "社會・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "智財權與法治界限：不可隨意轉載重製他人原創作品；少年事件處理法兼具輔導保護與矯正宗旨。",
    "formulaOrRule": "核心工具與心法：自備環保餐具隨手杯、選購環保節能標章商品、搭乘大眾運輸",
    "strategyTip": "【審題觸發】當題目出現「綠色消費與環境公民實踐」時，立即啟動「自備環保餐具隨手杯、選購環保節能標章商品、搭乘大眾運輸」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】落實校園垃圾秤重減量競賽、家庭換裝 LED 節能燈具與一級變頻家電、落實舊衣循環捐贈。",
    "textbookFocus": "康軒：常考聯合國永續發展目標 (SDGs 17項) 核心宗旨、臺灣推動減碳減塑日常公民行動。 ｜ 南一：側重循環經濟、碳足跡標籤、綠建築九大指標與企業社會責任 (CSR/ESG)。 ｜ 翰林：側重全球暖化溫室氣體排放、《巴黎氣候協定》、再生能源（太陽能、離岸風電）發展。",
    "juniorHighBridge": "國三下地理與公民【環境問題與永續發展】：京都議定書與巴黎協定、碳稅與碳交易機制、環境倫理。",
    "infographicKey": "info-soc-u6-3",
    "relatedPoints": [
      {
        "id": "kp-soc-u6-1",
        "title": "憲法四大基本權利",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u6-2",
        "title": "兒少保護關鍵法規",
        "unitId": "soc-u6",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "臺灣多元族群譜系",
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
    "title": "臺灣多元族群譜系",
    "category": "社會・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "臺灣多元族群譜系：原住民族（目前法定16族）、閩南人、客家人、外省族群、新住民共同構成臺灣文化。",
    "formulaOrRule": "核心工具與心法：經度相差 120° ÷ 15° = 8 小時；東方較早，故為 8:00 + 8 = 下午 16:00",
    "strategyTip": "【審題觸發】當題目出現「倫敦 (0°) 上午 8:00，求臺灣 (東經 120°) 當地時間」時，立即啟動「經度相差 120° ÷ 15° = 8 小時；東方較早，故為 8:00 + 8 = 下午 16:00」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】安排跨國出國旅行機票行程注意時差調節、欣賞羅馬競技場與吳哥窟歷史文化建築美學。",
    "textbookFocus": "康軒：常考世界七大洲三大洋分佈位置、世界重要世界文化遺產（埃及金字塔、泰姬瑪哈陵）。 ｜ 南一：側重世界宗教文化（基督教、伊斯蘭教、佛教、印度教）戒律特色與建築風格辨析。 ｜ 翰林：側重全球氣候帶分佈（熱帶、溫帶、寒帶、高地氣候）與不同地理環境下的人類適應生活。",
    "juniorHighBridge": "國二歷史【世界史古代文明】與國一地理【臺灣與世界地理】：板塊氣候水文帶、文藝復興與啟蒙運動。",
    "infographicKey": "info-soc-u7-1",
    "relatedPoints": [
      {
        "id": "kp-soc-u7-2",
        "title": "文化相對論核心觀念",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u7-3",
        "title": "聯合國消除一切形式種族歧視公約",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u8-1",
        "title": "全球化雙面刃",
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
    "title": "文化相對論核心觀念",
    "category": "社會・運算算理與公式",
    "badgeColor": "amber",
    "definition": "文化相對論核心觀念：每一種文化都有其歷史成因與獨特價值，絕不可站在自我中心視角嘲弄歧視他者文化。",
    "formulaOrRule": "核心工具與心法：皆發源於大河流域（尼羅河、兩河流域、印度河、黃河），水源充沛土壤肥沃",
    "strategyTip": "【審題觸發】當題目出現「世界四大古文明發源地共通地理特徵」時，立即啟動「皆發源於大河流域（尼羅河、兩河流域、印度河、黃河），水源充沛土壤肥沃」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】安排跨國出國旅行機票行程注意時差調節、欣賞羅馬競技場與吳哥窟歷史文化建築美學。",
    "textbookFocus": "康軒：常考世界七大洲三大洋分佈位置、世界重要世界文化遺產（埃及金字塔、泰姬瑪哈陵）。 ｜ 南一：側重世界宗教文化（基督教、伊斯蘭教、佛教、印度教）戒律特色與建築風格辨析。 ｜ 翰林：側重全球氣候帶分佈（熱帶、溫帶、寒帶、高地氣候）與不同地理環境下的人類適應生活。",
    "juniorHighBridge": "國二歷史【世界史古代文明】與國一地理【臺灣與世界地理】：板塊氣候水文帶、文藝復興與啟蒙運動。",
    "infographicKey": "info-soc-u7-2",
    "relatedPoints": [
      {
        "id": "kp-soc-u7-1",
        "title": "臺灣多元族群譜系",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u7-3",
        "title": "聯合國消除一切形式種族歧視公約",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u8-1",
        "title": "全球化雙面刃",
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
    "title": "聯合國消除一切形式種族歧視公約",
    "category": "社會・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "聯合國消除一切形式種族歧視公約：倡導多元母語傳承、性別平權與跨族群包容。",
    "formulaOrRule": "核心工具與心法：具有普世卓越價值，全人類共同保護的歷史地景與自然奇蹟",
    "strategyTip": "【審題觸發】當題目出現「UNESCO 世界文化遺產與自然遺產意義」時，立即啟動「具有普世卓越價值，全人類共同保護的歷史地景與自然奇蹟」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】安排跨國出國旅行機票行程注意時差調節、欣賞羅馬競技場與吳哥窟歷史文化建築美學。",
    "textbookFocus": "康軒：常考世界七大洲三大洋分佈位置、世界重要世界文化遺產（埃及金字塔、泰姬瑪哈陵）。 ｜ 南一：側重世界宗教文化（基督教、伊斯蘭教、佛教、印度教）戒律特色與建築風格辨析。 ｜ 翰林：側重全球氣候帶分佈（熱帶、溫帶、寒帶、高地氣候）與不同地理環境下的人類適應生活。",
    "juniorHighBridge": "國二歷史【世界史古代文明】與國一地理【臺灣與世界地理】：板塊氣候水文帶、文藝復興與啟蒙運動。",
    "infographicKey": "info-soc-u7-3",
    "relatedPoints": [
      {
        "id": "kp-soc-u7-1",
        "title": "臺灣多元族群譜系",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u7-2",
        "title": "文化相對論核心觀念",
        "unitId": "soc-u7",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u8-1",
        "title": "全球化雙面刃",
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
    "title": "全球化雙面刃",
    "category": "社會・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "全球化雙面刃：促進國際貿易分工與文化交流，但也造成貧富差距擴大、傳染病快速跨國蔓延。",
    "formulaOrRule": "核心工具與心法：回音室效應 (Echo Chamber) 與過濾氣泡 (Filter Bubble)",
    "strategyTip": "【審題觸發】當題目出現「社群平台演算法推播同類資訊導致觀點單一極化」時，立即啟動「回音室效應 (Echo Chamber) 與過濾氣泡 (Filter Bubble)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】利用事實查核中心查驗長輩圖不實謠言、理性平衡螢幕時間享受真實世界人際互動。",
    "textbookFocus": "康軒：常考人工智慧 (AI) 應用、自動駕駛、生成式 AI 倫理、數位落差議題。 ｜ 南一：側重未來科技發展下的隱私權保護、機器人取代人力之職業轉型與終身學習應變力。 ｜ 翰林：側重假訊息深偽技術 (Deepfake) 查核、數位足跡與網路資訊素養辨識。",
    "juniorHighBridge": "國二公民【科技發展與社會生活】：資訊社會的法律責任、智慧財產權與科技倫理爭議。",
    "infographicKey": "info-soc-u8-1",
    "relatedPoints": [
      {
        "id": "kp-soc-u8-2",
        "title": "國際組織定位",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u8-3",
        "title": "聯合國 SDGs 17 項永續發展指標",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "臺灣多元族群譜系",
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
    "title": "國際組織定位",
    "category": "社會・運算算理與公式",
    "badgeColor": "amber",
    "definition": "國際組織定位：聯合國（UN 維護和平）、世界衛生組織（WHO 全球公衛）、世界貿易組織（WTO 關稅貿易）。",
    "formulaOrRule": "核心工具與心法：必須查核真實性與來源、標註引用來源、不可直接抄襲視為個人原創",
    "strategyTip": "【審題觸發】當題目出現「使用生成式 AI (如 ChatGPT) 撰寫作業論文之倫理」時，立即啟動「必須查核真實性與來源、標註引用來源、不可直接抄襲視為個人原創」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】利用事實查核中心查驗長輩圖不實謠言、理性平衡螢幕時間享受真實世界人際互動。",
    "textbookFocus": "康軒：常考人工智慧 (AI) 應用、自動駕駛、生成式 AI 倫理、數位落差議題。 ｜ 南一：側重未來科技發展下的隱私權保護、機器人取代人力之職業轉型與終身學習應變力。 ｜ 翰林：側重假訊息深偽技術 (Deepfake) 查核、數位足跡與網路資訊素養辨識。",
    "juniorHighBridge": "國二公民【科技發展與社會生活】：資訊社會的法律責任、智慧財產權與科技倫理爭議。",
    "infographicKey": "info-soc-u8-2",
    "relatedPoints": [
      {
        "id": "kp-soc-u8-1",
        "title": "全球化雙面刃",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u8-3",
        "title": "聯合國 SDGs 17 項永續發展指標",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・生活實用與避雷"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "臺灣多元族群譜系",
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
    "title": "聯合國 SDGs 17 項永續發展指標",
    "category": "社會・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "聯合國 SDGs 17 項永續發展指標：涵蓋消除貧窮、消除飢餓、氣候行動、優質教育等全球公民共同目標。",
    "formulaOrRule": "核心工具與心法：雙重身分驗證 (2FA)、定期更換強密碼、不輕信不明釣魚簡訊連結",
    "strategyTip": "【審題觸發】當題目出現「網路個人資訊防竊與隱私權保護」時，立即啟動「雙重身分驗證 (2FA)、定期更換強密碼、不輕信不明釣魚簡訊連結」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】利用事實查核中心查驗長輩圖不實謠言、理性平衡螢幕時間享受真實世界人際互動。",
    "textbookFocus": "康軒：常考人工智慧 (AI) 應用、自動駕駛、生成式 AI 倫理、數位落差議題。 ｜ 南一：側重未來科技發展下的隱私權保護、機器人取代人力之職業轉型與終身學習應變力。 ｜ 翰林：側重假訊息深偽技術 (Deepfake) 查核、數位足跡與網路資訊素養辨識。",
    "juniorHighBridge": "國二公民【科技發展與社會生活】：資訊社會的法律責任、智慧財產權與科技倫理爭議。",
    "infographicKey": "info-soc-u8-3",
    "relatedPoints": [
      {
        "id": "kp-soc-u8-1",
        "title": "全球化雙面刃",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・觀念本質與定義"
      },
      {
        "id": "kp-soc-u8-2",
        "title": "國際組織定位",
        "unitId": "soc-u8",
        "subjectId": "social",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：社會・運算算理與公式"
      },
      {
        "id": "kp-soc-u7-1",
        "title": "臺灣多元族群譜系",
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
    "title": "Magic E 長母音發音規律",
    "category": "英語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "Magic E 長母音發音規律：當單字字尾有不發音的 e 時，前方的母音發其字母本音（如 cap ➔ cape; hop ➔ hope）。",
    "formulaOrRule": "核心工具與心法：always (100%) > usually (80%) > often (60%) > sometimes (30%) > never (0%)",
    "strategyTip": "【審題觸發】當題目出現「頻率副詞百分比量表」時，立即啟動「always (100%) > usually (80%) > often (60%) > sometimes (30%) > never (0%)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】用英語分享自己每日早睡早起的生活時間表、規劃自律高效的一天習慣。",
    "textbookFocus": "康軒：常考日常作息時間表達（What time do you get up? at 7:00）、頻率副詞位置（always, usually, sometimes, never）。 ｜ 南一：側重頻率副詞放在 be 動詞之後、一般動詞之前的語法防雷題。 ｜ 翰林：側重現在簡單式第三人稱單數主詞（He/She/It）動詞加 -s/-es 規則與 does 問句。",
    "juniorHighBridge": "國一英文【現在簡單式與助動詞】：肯定句、否定句 (don't/doesn't) 與疑問句 (Do/Does...?) 標準結構。",
    "infographicKey": "info-eng-u1-1",
    "relatedPoints": [
      {
        "id": "kp-eng-u1-2",
        "title": "常見雙子音 digraphs",
        "unitId": "eng-u1",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u1-3",
        "title": "複合母音 diphthongs",
        "unitId": "eng-u1",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u2-1",
        "title": "空間介系詞口訣",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
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
    "title": "常見雙子音 digraphs",
    "category": "英語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "常見雙子音 digraphs：ch /tʃ/, sh /ʃ/, th /θ/ 或 /ð/, ph /f/, wh /w/ 聽力精準辨音。",
    "formulaOrRule": "核心工具與心法：be 後、動前、助後動前（如 He is always kind; She never eats meat）",
    "strategyTip": "【審題觸發】當題目出現「頻率副詞在句子中的位置口訣」時，立即啟動「be 後、動前、助後動前（如 He is always kind; She never eats meat）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】用英語分享自己每日早睡早起的生活時間表、規劃自律高效的一天習慣。",
    "textbookFocus": "康軒：常考日常作息時間表達（What time do you get up? at 7:00）、頻率副詞位置（always, usually, sometimes, never）。 ｜ 南一：側重頻率副詞放在 be 動詞之後、一般動詞之前的語法防雷題。 ｜ 翰林：側重現在簡單式第三人稱單數主詞（He/She/It）動詞加 -s/-es 規則與 does 問句。",
    "juniorHighBridge": "國一英文【現在簡單式與助動詞】：肯定句、否定句 (don't/doesn't) 與疑問句 (Do/Does...?) 標準結構。",
    "infographicKey": "info-eng-u1-2",
    "relatedPoints": [
      {
        "id": "kp-eng-u1-1",
        "title": "Magic E 長母音發音規律",
        "unitId": "eng-u1",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u1-3",
        "title": "複合母音 diphthongs",
        "unitId": "eng-u1",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u2-1",
        "title": "空間介系詞口訣",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
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
    "title": "複合母音 diphthongs",
    "category": "英語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "複合母音 diphthongs：oi/oy /ɔɪ/, ou/ow /aʊ/, ai/ay /eɪ/ 拼讀秒殺高頻單字。",
    "formulaOrRule": "核心工具與心法：一般動詞字尾加 -s, -es（watches, studies, goes）",
    "strategyTip": "【審題觸發】當題目出現「主詞是第三人稱單數 (He, She, It) 時動詞變化」時，立即啟動「一般動詞字尾加 -s, -es（watches, studies, goes）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】用英語分享自己每日早睡早起的生活時間表、規劃自律高效的一天習慣。",
    "textbookFocus": "康軒：常考日常作息時間表達（What time do you get up? at 7:00）、頻率副詞位置（always, usually, sometimes, never）。 ｜ 南一：側重頻率副詞放在 be 動詞之後、一般動詞之前的語法防雷題。 ｜ 翰林：側重現在簡單式第三人稱單數主詞（He/She/It）動詞加 -s/-es 規則與 does 問句。",
    "juniorHighBridge": "國一英文【現在簡單式與助動詞】：肯定句、否定句 (don't/doesn't) 與疑問句 (Do/Does...?) 標準結構。",
    "infographicKey": "info-eng-u1-3",
    "relatedPoints": [
      {
        "id": "kp-eng-u1-1",
        "title": "Magic E 長母音發音規律",
        "unitId": "eng-u1",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u1-2",
        "title": "常見雙子音 digraphs",
        "unitId": "eng-u1",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u2-1",
        "title": "空間介系詞口訣",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
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
    "title": "空間介系詞口訣",
    "category": "英語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "空間介系詞口訣：in 在...裡面、on 在...表面上方、under 在...正下方、next to 在...緊鄰隔壁。",
    "formulaOrRule": "核心工具與心法：yesterday, last night, two days ago, in 2020",
    "strategyTip": "【審題觸發】當題目出現「過去時間副詞關鍵信號」時，立即啟動「yesterday, last night, two days ago, in 2020」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】用英語書寫旅行日記、向外國朋友講述精彩的童年冒險或夏令營回憶。",
    "textbookFocus": "康軒：常考過去假期旅遊故事（Where did you go? I went to...）、規則動詞加 -ed 讀音 (/t/, /d/, /ɪd/)。 ｜ 南一：側重助動詞 did 出現時，後方主要動詞必須「強制打回原形」的大考第一殺手陷阱。 ｜ 翰林：側重高頻不規則過去式動詞三態變化（go-went, see-saw, eat-ate, have-had, buy-bought, take-took）。",
    "juniorHighBridge": "國一英文下學期【過去式與過去進行式】：不規則動詞精熟、was/were 與 did 互斥原則。",
    "infographicKey": "info-eng-u2-1",
    "relatedPoints": [
      {
        "id": "kp-eng-u2-2",
        "title": "名詞單複數規則變化",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u2-3",
        "title": "不規則複數陷阱",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u3-1",
        "title": "現在進行式時態黃金公式",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "kp-soc-u1-1",
        "title": "臺灣地質成因",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "跨域空間方位",
        "badgeType": "cross",
        "desc": "空間方位介系詞 ➔ 臺灣地理位置經緯度與周邊海域"
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
    "title": "名詞單複數規則變化",
    "category": "英語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "名詞單複數規則變化：一般加 -s；字尾為 s, sh, ch, x, o 時通常加 -es（如 watch ➔ watches, box ➔ boxes）。",
    "formulaOrRule": "核心工具與心法：go ➔ went, see ➔ saw, buy ➔ bought, eat ➔ ate, make ➔ made",
    "strategyTip": "【審題觸發】當題目出現「高頻不規則過去式動詞快速辨識」時，立即啟動「go ➔ went, see ➔ saw, buy ➔ bought, eat ➔ ate, make ➔ made」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】用英語書寫旅行日記、向外國朋友講述精彩的童年冒險或夏令營回憶。",
    "textbookFocus": "康軒：常考過去假期旅遊故事（Where did you go? I went to...）、規則動詞加 -ed 讀音 (/t/, /d/, /ɪd/)。 ｜ 南一：側重助動詞 did 出現時，後方主要動詞必須「強制打回原形」的大考第一殺手陷阱。 ｜ 翰林：側重高頻不規則過去式動詞三態變化（go-went, see-saw, eat-ate, have-had, buy-bought, take-took）。",
    "juniorHighBridge": "國一英文下學期【過去式與過去進行式】：不規則動詞精熟、was/were 與 did 互斥原則。",
    "infographicKey": "info-eng-u2-2",
    "relatedPoints": [
      {
        "id": "kp-eng-u2-1",
        "title": "空間介系詞口訣",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u2-3",
        "title": "不規則複數陷阱",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u3-1",
        "title": "現在進行式時態黃金公式",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "kp-soc-u1-1",
        "title": "臺灣地質成因",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "跨域空間方位",
        "badgeType": "cross",
        "desc": "空間方位介系詞 ➔ 臺灣地理位置經緯度與周邊海域"
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
    "title": "不規則複數陷阱",
    "category": "英語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "不規則複數陷阱：child ➔ children, foot ➔ feet, tooth ➔ teeth, mouse ➔ mice。",
    "formulaOrRule": "核心工具與心法：使用助動詞 did/didn't 後，後方動詞【必定打回原形動詞 V】！",
    "strategyTip": "【審題觸發】當題目出現「過去式否定句與疑問句助動詞救援」時，立即啟動「使用助動詞 did/didn't 後，後方動詞【必定打回原形動詞 V】！」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷防錯】防雷必背：child ➔ children, foot ➔ feet, tooth ➔ teeth, mouse ➔ mice。",
    "practicalUtility": "【生活實用】用英語書寫旅行日記、向外國朋友講述精彩的童年冒險或夏令營回憶。",
    "textbookFocus": "康軒：常考過去假期旅遊故事（Where did you go? I went to...）、規則動詞加 -ed 讀音 (/t/, /d/, /ɪd/)。 ｜ 南一：側重助動詞 did 出現時，後方主要動詞必須「強制打回原形」的大考第一殺手陷阱。 ｜ 翰林：側重高頻不規則過去式動詞三態變化（go-went, see-saw, eat-ate, have-had, buy-bought, take-took）。",
    "juniorHighBridge": "國一英文下學期【過去式與過去進行式】：不規則動詞精熟、was/were 與 did 互斥原則。",
    "infographicKey": "info-eng-u2-3",
    "relatedPoints": [
      {
        "id": "kp-eng-u2-1",
        "title": "空間介系詞口訣",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u2-2",
        "title": "名詞單複數規則變化",
        "unitId": "eng-u2",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u3-1",
        "title": "現在進行式時態黃金公式",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
      },
      {
        "id": "kp-soc-u1-1",
        "title": "臺灣地質成因",
        "unitId": "soc-u1",
        "subjectId": "social",
        "relation": "跨域空間方位",
        "badgeType": "cross",
        "desc": "空間方位介系詞 ➔ 臺灣地理位置經緯度與周邊海域"
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
    "title": "現在進行式時態黃金公式",
    "category": "英語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "現在進行式時態黃金公式：主詞 + am / is / are + 動詞-ing（兩者缺一不可，絕不可省略 be 動詞）！",
    "formulaOrRule": "核心工具與心法：Excuse me, how can I get to the library? / Where is the post office?",
    "strategyTip": "【審題觸發】當題目出現「禮貌詢問路線開場句型」時，立即啟動「Excuse me, how can I get to the library? / Where is the post office?」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在臺北捷運站或觀光景點用流暢英語為外國觀光客指引正確方向。",
    "textbookFocus": "康軒：常考城市景點問路（How can I get to the museum? Turn left, go straight, next to...）。 ｜ 南一：側重祈使句指路句型與情態助動詞 can / could you tell me the way to...? 禮貌用語。 ｜ 翰林：側重方位與空間介系詞（across from 對面, between A and B, on the corner of, behind, in front of）。",
    "juniorHighBridge": "國二英文【方向介系詞與祈使句】：複合地方副詞、地圖閱讀素養題型推論。",
    "infographicKey": "info-eng-u3-1",
    "relatedPoints": [
      {
        "id": "kp-eng-u3-2",
        "title": "動詞加 -ing 規則防雷",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u3-3",
        "title": "時間副詞搭配",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u4-1",
        "title": "主詞為第三人稱單數（He",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
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
    "title": "動詞加 -ing 規則防雷",
    "category": "英語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "動詞加 -ing 規則防雷：字尾為不發音 e 需「去 e 加 ing」（make ➔ making）；短母音+單子音需「雙寫字尾」（run ➔ running, swim ➔ swimming）。",
    "formulaOrRule": "核心工具與心法：next to (旁邊), across from (對面), between A and B (在兩者之間), on the corner of (轉角處)",
    "strategyTip": "【審題觸發】當題目出現「精確方位介系詞判定」時，立即啟動「next to (旁邊), across from (對面), between A and B (在兩者之間), on the corner of (轉角處)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在臺北捷運站或觀光景點用流暢英語為外國觀光客指引正確方向。",
    "textbookFocus": "康軒：常考城市景點問路（How can I get to the museum? Turn left, go straight, next to...）。 ｜ 南一：側重祈使句指路句型與情態助動詞 can / could you tell me the way to...? 禮貌用語。 ｜ 翰林：側重方位與空間介系詞（across from 對面, between A and B, on the corner of, behind, in front of）。",
    "juniorHighBridge": "國二英文【方向介系詞與祈使句】：複合地方副詞、地圖閱讀素養題型推論。",
    "infographicKey": "info-eng-u3-2",
    "relatedPoints": [
      {
        "id": "kp-eng-u3-1",
        "title": "現在進行式時態黃金公式",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u3-3",
        "title": "時間副詞搭配",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u4-1",
        "title": "主詞為第三人稱單數（He",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
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
    "title": "時間副詞搭配",
    "category": "英語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "時間副詞搭配：看到 now, right now, listen!, look! 提示詞，首選現在進行式。",
    "formulaOrRule": "核心工具與心法：Go straight (直走), Turn left/right at the second light (在第二個紅綠燈左/右轉)",
    "strategyTip": "【審題觸發】當題目出現「祈使句指引路線」時，立即啟動「Go straight (直走), Turn left/right at the second light (在第二個紅綠燈左/右轉)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在臺北捷運站或觀光景點用流暢英語為外國觀光客指引正確方向。",
    "textbookFocus": "康軒：常考城市景點問路（How can I get to the museum? Turn left, go straight, next to...）。 ｜ 南一：側重祈使句指路句型與情態助動詞 can / could you tell me the way to...? 禮貌用語。 ｜ 翰林：側重方位與空間介系詞（across from 對面, between A and B, on the corner of, behind, in front of）。",
    "juniorHighBridge": "國二英文【方向介系詞與祈使句】：複合地方副詞、地圖閱讀素養題型推論。",
    "infographicKey": "info-eng-u3-3",
    "relatedPoints": [
      {
        "id": "kp-eng-u3-1",
        "title": "現在進行式時態黃金公式",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u3-2",
        "title": "動詞加 -ing 規則防雷",
        "unitId": "eng-u3",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u4-1",
        "title": "主詞為第三人稱單數（He",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
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
    "title": "主詞為第三人稱單數（He",
    "category": "英語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "主詞為第三人稱單數（He：She, It, 媽媽, John）時，一般動詞必須「加 -s 或 -es」。",
    "formulaOrRule": "核心工具與心法：water, milk, rice, bread, beef, juice（無複數加-s，計量用 a cup of / a slice of）",
    "strategyTip": "【審題觸發】當題目出現「不可數名詞食物判定」時，立即啟動「water, milk, rice, bread, beef, juice（無複數加-s，計量用 a cup of / a slice of）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在國外西餐廳點餐確認餐點分量、在國外藥局向藥劑師清楚描述個人身體不適症狀。",
    "textbookFocus": "康軒：常考身體不適就醫問答（What is wrong with you? I have a headache/stomachache/fever.）。 ｜ 南一：側重可數名詞與不可數名詞（water, juice, medicine）搭配 some/any 與量詞之辨別。 ｜ 翰林：側重飲食均衡建議（You should drink more water / take a rest. You should not eat too much fast food.）。",
    "juniorHighBridge": "國一英文【名詞單複數與數量詞】：how many (可數) vs how much (不可數/價格)、量詞片語。",
    "infographicKey": "info-eng-u4-1",
    "relatedPoints": [
      {
        "id": "kp-eng-u4-2",
        "title": "現在簡單式疑問與否定",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u4-3",
        "title": "頻率副詞位置口訣",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u5-1",
        "title": "過去式核心定義",
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
    "title": "現在簡單式疑問與否定",
    "category": "英語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "現在簡單式疑問與否定：三單必須借用助動詞「does / doesn't」，且後方的動詞必須「立刻打回原形」！",
    "formulaOrRule": "核心工具與心法：I have a fever / headache / stomachache / toothache",
    "strategyTip": "【審題觸發】當題目出現「表達身體生病不舒服」時，立即啟動「I have a fever / headache / stomachache / toothache」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在國外西餐廳點餐確認餐點分量、在國外藥局向藥劑師清楚描述個人身體不適症狀。",
    "textbookFocus": "康軒：常考身體不適就醫問答（What is wrong with you? I have a headache/stomachache/fever.）。 ｜ 南一：側重可數名詞與不可數名詞（water, juice, medicine）搭配 some/any 與量詞之辨別。 ｜ 翰林：側重飲食均衡建議（You should drink more water / take a rest. You should not eat too much fast food.）。",
    "juniorHighBridge": "國一英文【名詞單複數與數量詞】：how many (可數) vs how much (不可數/價格)、量詞片語。",
    "infographicKey": "info-eng-u4-2",
    "relatedPoints": [
      {
        "id": "kp-eng-u4-1",
        "title": "主詞為第三人稱單數（He",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u4-3",
        "title": "頻率副詞位置口訣",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u5-1",
        "title": "過去式核心定義",
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
    "title": "頻率副詞位置口訣",
    "category": "英語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "頻率副詞位置口訣：放在「be 動詞之後、一般動詞之前」（如 He is always happy. / She usually plays tennis.）。",
    "formulaOrRule": "核心工具與心法：You should drink plenty of water and take a good rest.",
    "strategyTip": "【審題觸發】當題目出現「給予保健建議句型」時，立即啟動「You should drink plenty of water and take a good rest.」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在國外西餐廳點餐確認餐點分量、在國外藥局向藥劑師清楚描述個人身體不適症狀。",
    "textbookFocus": "康軒：常考身體不適就醫問答（What is wrong with you? I have a headache/stomachache/fever.）。 ｜ 南一：側重可數名詞與不可數名詞（water, juice, medicine）搭配 some/any 與量詞之辨別。 ｜ 翰林：側重飲食均衡建議（You should drink more water / take a rest. You should not eat too much fast food.）。",
    "juniorHighBridge": "國一英文【名詞單複數與數量詞】：how many (可數) vs how much (不可數/價格)、量詞片語。",
    "infographicKey": "info-eng-u4-3",
    "relatedPoints": [
      {
        "id": "kp-eng-u4-1",
        "title": "主詞為第三人稱單數（He",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u4-2",
        "title": "現在簡單式疑問與否定",
        "unitId": "eng-u4",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u5-1",
        "title": "過去式核心定義",
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
    "title": "過去式核心定義",
    "category": "英語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "過去式核心定義：表達過去特定時間點已經發生且結束的動作或狀態。",
    "formulaOrRule": "核心工具與心法：Halloween (trick or treat/jack-o-lantern), Christmas (Santa/carols), Easter (eggs/bunny)",
    "strategyTip": "【審題觸發】當題目出現「西方三大節慶特色標誌」時，立即啟動「Halloween (trick or treat/jack-o-lantern), Christmas (Santa/carols), Easter (eggs/bunny)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】接待國外交換學生參訪臺灣傳統民俗節慶、製作全英語跨文化新年電子賀卡。",
    "textbookFocus": "康軒：常考東西方節慶文化（Christmas, Halloween, Chinese New Year, Dragon Boat Festival）活動與習俗。 ｜ 南一：側重問句 When is ...? 與序數（first, second, third, fourth...）及月份拼寫。 ｜ 翰林：側重時間介系詞精準搭配（in 年月季節、on 特定日子星期、at 具體鐘點時刻）。",
    "juniorHighBridge": "國二英文【情態助動詞與從屬連接詞】：must / have to / should 語氣強度差異與 when/before/after 敘事。",
    "infographicKey": "info-eng-u5-1",
    "relatedPoints": [
      {
        "id": "kp-eng-u5-2",
        "title": "高頻不規則過去式必背",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u5-3",
        "title": "過去式助動詞 did 關鍵",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u6-1",
        "title": "未來式雙軌句型",
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
    "title": "高頻不規則過去式必背",
    "category": "英語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "高頻不規則過去式必背：go ➔ went, see ➔ saw, eat ➔ ate, buy ➔ bought, have ➔ had, do ➔ did。",
    "formulaOrRule": "核心工具與心法：Lunar New Year (red envelopes), Dragon Boat Festival (dragon boat race/rice dumplings)",
    "strategyTip": "【審題觸發】當題目出現「臺灣傳統節慶英語介紹」時，立即啟動「Lunar New Year (red envelopes), Dragon Boat Festival (dragon boat race/rice dumplings)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】接待國外交換學生參訪臺灣傳統民俗節慶、製作全英語跨文化新年電子賀卡。",
    "textbookFocus": "康軒：常考東西方節慶文化（Christmas, Halloween, Chinese New Year, Dragon Boat Festival）活動與習俗。 ｜ 南一：側重問句 When is ...? 與序數（first, second, third, fourth...）及月份拼寫。 ｜ 翰林：側重時間介系詞精準搭配（in 年月季節、on 特定日子星期、at 具體鐘點時刻）。",
    "juniorHighBridge": "國二英文【情態助動詞與從屬連接詞】：must / have to / should 語氣強度差異與 when/before/after 敘事。",
    "infographicKey": "info-eng-u5-2",
    "relatedPoints": [
      {
        "id": "kp-eng-u5-1",
        "title": "過去式核心定義",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u5-3",
        "title": "過去式助動詞 did 關鍵",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u6-1",
        "title": "未來式雙軌句型",
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
    "title": "過去式助動詞 did 關鍵",
    "category": "英語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "過去式助動詞 did 關鍵：疑問句 Did you...? 與否定句 didn't 出現時，主要動詞「一律回歸動詞原形」！",
    "formulaOrRule": "核心工具與心法：Merry Christmas! / Happy New Year! / Wishing you joy and prosperity!",
    "strategyTip": "【審題觸發】當題目出現「節慶祝賀語」時，立即啟動「Merry Christmas! / Happy New Year! / Wishing you joy and prosperity!」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】接待國外交換學生參訪臺灣傳統民俗節慶、製作全英語跨文化新年電子賀卡。",
    "textbookFocus": "康軒：常考東西方節慶文化（Christmas, Halloween, Chinese New Year, Dragon Boat Festival）活動與習俗。 ｜ 南一：側重問句 When is ...? 與序數（first, second, third, fourth...）及月份拼寫。 ｜ 翰林：側重時間介系詞精準搭配（in 年月季節、on 特定日子星期、at 具體鐘點時刻）。",
    "juniorHighBridge": "國二英文【情態助動詞與從屬連接詞】：must / have to / should 語氣強度差異與 when/before/after 敘事。",
    "infographicKey": "info-eng-u5-3",
    "relatedPoints": [
      {
        "id": "kp-eng-u5-1",
        "title": "過去式核心定義",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u5-2",
        "title": "高頻不規則過去式必背",
        "unitId": "eng-u5",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u6-1",
        "title": "未來式雙軌句型",
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
    "title": "未來式雙軌句型",
    "category": "英語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "未來式雙軌句型：1. will + 原形動詞（立即決定、客觀預測）；2. be going to + 原形動詞（事先計畫好）。",
    "formulaOrRule": "核心工具與心法：字尾有不發音的 e，前方母音發長母音本名音（如 hate, fine, home, cute）",
    "strategyTip": "【審題觸發】當題目出現「Magic e (CVCe) 長母音規則」時，立即啟動「字尾有不發音的 e，前方母音發長母音本名音（如 hate, fine, home, cute）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】自行看懂全英語原文書籍繪本、閱讀進口零食背面的英文成分表與使用說明。",
    "textbookFocus": "康軒：常考長篇生活閱讀短文素養題、圖表菜單火車票判讀與尋找文章細節 (Scanning & Skimming)。 ｜ 南一：側重升中銜接 1200 必考核心字彙詞性（名詞、動詞、形容詞、副詞）之語意填空。 ｜ 翰林：側重自然拼讀法 (Phonics) 長短母音對照（a_e, ee, ea, igh, oa）與常見複合子音（ch, sh, th, ph）。",
    "juniorHighBridge": "國中會考英文科【長篇閱讀理解題型】：素養圖表混合題、克漏字測驗、推論作者態度與主旨。",
    "infographicKey": "info-eng-u6-1",
    "relatedPoints": [
      {
        "id": "kp-eng-u6-2",
        "title": "will 的否定縮寫陷阱",
        "unitId": "eng-u6",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u6-3",
        "title": "常見未來時間副詞",
        "unitId": "eng-u6",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u7-1",
        "title": "單音節形容詞比較級加 -er（…",
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
    "title": "will 的否定縮寫陷阱",
    "category": "英語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "will 的否定縮寫陷阱：will not 的標準縮寫為「won't」，後方一樣必須接動詞原形。",
    "formulaOrRule": "核心工具與心法：仔細閱讀文章標題 (Title) 與第一段首尾句，避免被局部細節誤導",
    "strategyTip": "【審題觸發】當題目出現「閱讀短文抓核心主旨題 (Main Idea)」時，立即啟動「仔細閱讀文章標題 (Title) 與第一段首尾句，避免被局部細節誤導」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷防錯】防雷必背：will not 的標準縮寫為「won't」，後方一樣必須接動詞原形。",
    "practicalUtility": "【生活實用】自行看懂全英語原文書籍繪本、閱讀進口零食背面的英文成分表與使用說明。",
    "textbookFocus": "康軒：常考長篇生活閱讀短文素養題、圖表菜單火車票判讀與尋找文章細節 (Scanning & Skimming)。 ｜ 南一：側重升中銜接 1200 必考核心字彙詞性（名詞、動詞、形容詞、副詞）之語意填空。 ｜ 翰林：側重自然拼讀法 (Phonics) 長短母音對照（a_e, ee, ea, igh, oa）與常見複合子音（ch, sh, th, ph）。",
    "juniorHighBridge": "國中會考英文科【長篇閱讀理解題型】：素養圖表混合題、克漏字測驗、推論作者態度與主旨。",
    "infographicKey": "info-eng-u6-2",
    "relatedPoints": [
      {
        "id": "kp-eng-u6-1",
        "title": "未來式雙軌句型",
        "unitId": "eng-u6",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u6-3",
        "title": "常見未來時間副詞",
        "unitId": "eng-u6",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u7-1",
        "title": "單音節形容詞比較級加 -er（…",
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
    "title": "常見未來時間副詞",
    "category": "英語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "常見未來時間副詞：tomorrow, next week, this weekend, in two days 聽力閱讀抓關鍵。",
    "formulaOrRule": "核心工具與心法：尋找前後句中的同義詞、對比詞（but/however）或舉例解釋",
    "strategyTip": "【審題觸發】當題目出現「推論生詞詞義技巧 (Context Clues)」時，立即啟動「尋找前後句中的同義詞、對比詞（but/however）或舉例解釋」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】自行看懂全英語原文書籍繪本、閱讀進口零食背面的英文成分表與使用說明。",
    "textbookFocus": "康軒：常考長篇生活閱讀短文素養題、圖表菜單火車票判讀與尋找文章細節 (Scanning & Skimming)。 ｜ 南一：側重升中銜接 1200 必考核心字彙詞性（名詞、動詞、形容詞、副詞）之語意填空。 ｜ 翰林：側重自然拼讀法 (Phonics) 長短母音對照（a_e, ee, ea, igh, oa）與常見複合子音（ch, sh, th, ph）。",
    "juniorHighBridge": "國中會考英文科【長篇閱讀理解題型】：素養圖表混合題、克漏字測驗、推論作者態度與主旨。",
    "infographicKey": "info-eng-u6-3",
    "relatedPoints": [
      {
        "id": "kp-eng-u6-1",
        "title": "未來式雙軌句型",
        "unitId": "eng-u6",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u6-2",
        "title": "will 的否定縮寫陷阱",
        "unitId": "eng-u6",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u7-1",
        "title": "單音節形容詞比較級加 -er（…",
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
    "title": "單音節形容詞比較級加 -er（…",
    "category": "英語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "單音節形容詞比較級加 -er（…：單音節形容詞比較級加 -er（tall ➔ taller）；三個音節以上長形容詞前方加 more（more beautiful）。",
    "formulaOrRule": "核心工具與心法：tomorrow, next week, in the future, soon",
    "strategyTip": "【審題觸發】當題目出現「未來時間副詞關鍵信號」時，立即啟動「tomorrow, next week, in the future, soon」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】撰寫全英語國中學習先修計畫目標、用英語向師長分享自己的未來志向與職業抱負。",
    "textbookFocus": "康軒：常考未來計畫與夢想職業（What do you want to be in the future? I want to be a doctor.）。 ｜ 南一：側重 want to be 與 would like to be 句型後接職業名詞加不定冠詞 a/an（an engineer, a pilot）。 ｜ 翰林：側重未來式句型（will + 原形動詞 與 be going to + 原形動詞）之肯定、否定與疑問句。",
    "juniorHighBridge": "國二英文【未來式與條件副詞子句】：will / be going to 與 if/when 引導之副詞子句（現在式代替未來式）。",
    "infographicKey": "info-eng-u7-1",
    "relatedPoints": [
      {
        "id": "kp-eng-u7-2",
        "title": "最高級絕對不可忘記定冠詞",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u7-3",
        "title": "不規則形容詞最高頻陷阱",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u8-1",
        "title": "情態助動詞共性",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
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
    "title": "最高級絕對不可忘記定冠詞",
    "category": "英語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "最高級絕對不可忘記定冠詞：最高級前方必須加上「the」（the tallest, the most popular）。",
    "formulaOrRule": "核心工具與心法：I will help you. (當下主動提供幫助) vs Look at the dark clouds! It is going to rain. (已有跡象即將發生)",
    "strategyTip": "【審題觸發】當題目出現「will vs be going to 語意辨析」時，立即啟動「I will help you. (當下主動提供幫助) vs Look at the dark clouds! It is going to rain. (已有跡象即將發生)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】撰寫全英語國中學習先修計畫目標、用英語向師長分享自己的未來志向與職業抱負。",
    "textbookFocus": "康軒：常考未來計畫與夢想職業（What do you want to be in the future? I want to be a doctor.）。 ｜ 南一：側重 want to be 與 would like to be 句型後接職業名詞加不定冠詞 a/an（an engineer, a pilot）。 ｜ 翰林：側重未來式句型（will + 原形動詞 與 be going to + 原形動詞）之肯定、否定與疑問句。",
    "juniorHighBridge": "國二英文【未來式與條件副詞子句】：will / be going to 與 if/when 引導之副詞子句（現在式代替未來式）。",
    "infographicKey": "info-eng-u7-2",
    "relatedPoints": [
      {
        "id": "kp-eng-u7-1",
        "title": "單音節形容詞比較級加 -er（…",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u7-3",
        "title": "不規則形容詞最高頻陷阱",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u8-1",
        "title": "情態助動詞共性",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
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
    "title": "不規則形容詞最高頻陷阱",
    "category": "英語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "不規則形容詞最高頻陷阱：good ➔ better ➔ best；bad ➔ worse ➔ worst（段考必考壓軸！）。",
    "formulaOrRule": "核心工具與心法：What do you want to be in the future? / I want to be an engineer.",
    "strategyTip": "【審題觸發】當題目出現「詢問未來的夢想與計畫句型」時，立即啟動「What do you want to be in the future? / I want to be an engineer.」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷防錯】防雷必背：good ➔ better ➔ best；bad ➔ worse ➔ worst（段考必考壓軸！）。",
    "practicalUtility": "【生活實用】撰寫全英語國中學習先修計畫目標、用英語向師長分享自己的未來志向與職業抱負。",
    "textbookFocus": "康軒：常考未來計畫與夢想職業（What do you want to be in the future? I want to be a doctor.）。 ｜ 南一：側重 want to be 與 would like to be 句型後接職業名詞加不定冠詞 a/an（an engineer, a pilot）。 ｜ 翰林：側重未來式句型（will + 原形動詞 與 be going to + 原形動詞）之肯定、否定與疑問句。",
    "juniorHighBridge": "國二英文【未來式與條件副詞子句】：will / be going to 與 if/when 引導之副詞子句（現在式代替未來式）。",
    "infographicKey": "info-eng-u7-3",
    "relatedPoints": [
      {
        "id": "kp-eng-u7-1",
        "title": "單音節形容詞比較級加 -er（…",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u7-2",
        "title": "最高級絕對不可忘記定冠詞",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u8-1",
        "title": "情態助動詞共性",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：英語・觀念本質與定義"
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
    "title": "情態助動詞共性",
    "category": "英語・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "情態助動詞共性：can（能）、should（應該）、must（必須）後方「一律直接接原形動詞」。",
    "formulaOrRule": "核心工具與心法：句子必有 than；單音節加 -er（taller），三音節以上加 more（more beautiful）",
    "strategyTip": "【審題觸發】當題目出現「比較級關鍵信號詞與字尾規則」時，立即啟動「句子必有 than；單音節加 -er（taller），三音節以上加 more（more beautiful）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】用英語比較兩款智慧型手機性價比、向外國友人介紹臺灣最高峰玉山與台北101大樓。",
    "textbookFocus": "康軒：常考世界奇景與動物之比較（The blue whale is bigger than the elephant.）。 ｜ 南一：側重「as ... as 和...一樣」同級比較句型，以及最高級前方必加定冠詞「the」之鐵律。 ｜ 翰林：側重形容詞比較級與最高級變化規則（+er/+est, 字尾 y 變 i 加 er, 雙母音加 more/most, good-better-best）。",
    "juniorHighBridge": "國二英文【形容詞與副詞之三級變化】：同級比較、最高級替代句型（A is taller than any other student）。",
    "infographicKey": "info-eng-u8-1",
    "relatedPoints": [
      {
        "id": "kp-eng-u8-2",
        "title": "閱讀理解答題心法",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u8-3",
        "title": "國中先修銜接句構",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u7-1",
        "title": "單音節形容詞比較級加 -er（…",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：英語・觀念本質與定義"
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
    "title": "閱讀理解答題心法",
    "category": "英語・運算算理與公式",
    "badgeColor": "amber",
    "definition": "閱讀理解答題心法：先讀題目選項抓「關鍵名詞與疑問詞（Who, When, Where）」，再回文本掃讀定位。",
    "formulaOrRule": "核心工具與心法：前面必加 the；單音節加 -est，三音節以上加 most；範圍片語 in the world / of all",
    "strategyTip": "【審題觸發】當題目出現「最高級關鍵信號詞」時，立即啟動「前面必加 the；單音節加 -est，三音節以上加 most；範圍片語 in the world / of all」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】用英語比較兩款智慧型手機性價比、向外國友人介紹臺灣最高峰玉山與台北101大樓。",
    "textbookFocus": "康軒：常考世界奇景與動物之比較（The blue whale is bigger than the elephant.）。 ｜ 南一：側重「as ... as 和...一樣」同級比較句型，以及最高級前方必加定冠詞「the」之鐵律。 ｜ 翰林：側重形容詞比較級與最高級變化規則（+er/+est, 字尾 y 變 i 加 er, 雙母音加 more/most, good-better-best）。",
    "juniorHighBridge": "國二英文【形容詞與副詞之三級變化】：同級比較、最高級替代句型（A is taller than any other student）。",
    "infographicKey": "info-eng-u8-2",
    "relatedPoints": [
      {
        "id": "kp-eng-u8-1",
        "title": "情態助動詞共性",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u8-3",
        "title": "國中先修銜接句構",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・生活實用與避雷"
      },
      {
        "id": "kp-eng-u7-1",
        "title": "單音節形容詞比較級加 -er（…",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：英語・觀念本質與定義"
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
    "title": "國中先修銜接句構",
    "category": "英語・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "國中先修銜接句構：感官動詞（see/hear）、使役動詞（make/let）與不定詞（to + V）先行概念掌握。",
    "formulaOrRule": "核心工具與心法：good ➔ better ➔ best；bad ➔ worse ➔ worst；many/much ➔ more ➔ most",
    "strategyTip": "【審題觸發】當題目出現「不規則三級變化大考必考天王」時，立即啟動「good ➔ better ➔ best；bad ➔ worse ➔ worst；many/much ➔ more ➔ most」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】用英語比較兩款智慧型手機性價比、向外國友人介紹臺灣最高峰玉山與台北101大樓。",
    "textbookFocus": "康軒：常考世界奇景與動物之比較（The blue whale is bigger than the elephant.）。 ｜ 南一：側重「as ... as 和...一樣」同級比較句型，以及最高級前方必加定冠詞「the」之鐵律。 ｜ 翰林：側重形容詞比較級與最高級變化規則（+er/+est, 字尾 y 變 i 加 er, 雙母音加 more/most, good-better-best）。",
    "juniorHighBridge": "國二英文【形容詞與副詞之三級變化】：同級比較、最高級替代句型（A is taller than any other student）。",
    "infographicKey": "info-eng-u8-3",
    "relatedPoints": [
      {
        "id": "kp-eng-u8-1",
        "title": "情態助動詞共性",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・觀念本質與定義"
      },
      {
        "id": "kp-eng-u8-2",
        "title": "閱讀理解答題心法",
        "unitId": "eng-u8",
        "subjectId": "english",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：英語・運算算理與公式"
      },
      {
        "id": "kp-eng-u7-1",
        "title": "單音節形容詞比較級加 -er（…",
        "unitId": "eng-u7",
        "subjectId": "english",
        "relation": "先備知識回溯",
        "badgeType": "step",
        "desc": "鞏固核心基石概念：英語・觀念本質與定義"
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
    "definition": "色彩三要素本質：色相（色彩名稱相貌）、明度（色彩明暗程度，加白變高）、彩度（色彩飽和純粹度）。",
    "formulaOrRule": "核心工具與心法：紅黃藍為色料三原色；色相環180°相對為互補色（如紅配綠，視覺對比最強烈）",
    "strategyTip": "【審題觸發】當題目出現「三原色與互補色對比效果」時，立即啟動「紅黃藍為色料三原色；色相環180°相對為互補色（如紅配綠，視覺對比最強烈）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】攝影構圖拍照更吸睛有層次、個人服裝穿搭和諧對比色彩配置、居家房間空間佈置。",
    "textbookFocus": "康軒：常考色彩三要素（色相-顏色名稱、明度-明暗深淺、彩度-鮮豔純度）之色彩學生活應用。 ｜ 南一：側重對比色（互補色如紅配綠、藍配橙、黃配紫強烈對比）與調和色之視覺張力。 ｜ 翰林：側重單點透視與兩點透視法（消失點、視平線）在空間繪畫構圖中的景深呈現。",
    "juniorHighBridge": "國中視覺藝術【造形藝術美學】：造形原理（對稱、均衡、節奏、漸變、統一）、近代西方繪畫流派欣賞。",
    "infographicKey": "info-art-u1-1",
    "relatedPoints": [
      {
        "id": "kp-art-u1-2",
        "title": "互補色對比法則",
        "unitId": "art-u1",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u1-3",
        "title": "冷暖色調情感心理",
        "unitId": "art-u1",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u2-1",
        "title": "透視法空間規律",
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
    "title": "互補色對比法則",
    "category": "藝術・運算算理與公式",
    "badgeColor": "amber",
    "definition": "互補色對比法則：在十二色相環上直徑相對 $180^\\circ$ 的兩色（如紅配綠、黃配紫、藍配橙），視覺衝擊最強烈。",
    "formulaOrRule": "在十二色相環上直徑相對 $180^\\circ$ 的兩色（如紅配綠、黃配紫、藍配橙），視覺衝擊最強烈。",
    "strategyTip": "【審題觸發】當題目出現「暖色調 vs 冷色調情感聯想」時，立即啟動「紅橙黃熱情溫暖前進感；藍綠紫沉靜涼爽後退空間感」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "冷暖色調情感心理",
        "unitId": "art-u1",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u2-1",
        "title": "透視法空間規律",
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
    "title": "冷暖色調情感心理",
    "category": "藝術・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "冷暖色調情感心理：暖色（紅橙黃）傳遞熱情膨脹溫暖感；冷色（藍綠紫）呈現冷靜深遠收縮感。",
    "formulaOrRule": "核心工具與心法：近大遠小、物體線條最終匯聚於地平線上的「消失點 (Vanishing Point)」",
    "strategyTip": "【審題觸發】當題目出現「文藝復興透視法原理」時，立即啟動「近大遠小、物體線條最終匯聚於地平線上的「消失點 (Vanishing Point)」」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "互補色對比法則",
        "unitId": "art-u1",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u2-1",
        "title": "透視法空間規律",
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
    "title": "透視法空間規律",
    "category": "藝術・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "透視法空間規律：物體「近大遠小、近實遠虛」；所有水平平行線往深處延伸匯聚於「消失點 (Vanishing Point)」。",
    "formulaOrRule": "核心工具與心法：弦樂（小提琴/大提琴）、木管（長笛/單簧管）、銅管（小號/法國號）、打擊（定音鼓/三角鐵）",
    "strategyTip": "【審題觸發】當題目出現「管弦樂團四大樂器家族成員分辨」時，立即啟動「弦樂（小提琴/大提琴）、木管（長笛/單簧管）、銅管（小號/法國號）、打擊（定音鼓/三角鐵）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】聆聽電影配樂體會情緒渲染力、直笛合奏培養聆聽他人樂音的和諧合作能力。",
    "textbookFocus": "康軒：常考西洋管弦樂團四大樂器家族（弦樂、木管、銅管、打擊樂器）音色與構造辨析。 ｜ 南一：側重臺灣傳統本土音樂（歌仔戲文武場、客家八音、原住民杵歌多聲部合唱）。 ｜ 翰林：側重五線譜記譜法（高音譜記號、音名 CDEFGAB 與唱名 Do Re Mi、四二拍/四三拍/四四拍強弱拍律動）。",
    "juniorHighBridge": "國中音樂【音樂劇與世界音樂史】：巴洛克、古典樂派（莫札特/貝多芬）、浪漫樂派風格演變與樂曲賞析。",
    "infographicKey": "info-art-u2-1",
    "relatedPoints": [
      {
        "id": "kp-art-u2-2",
        "title": "水平線（視平線）代表觀賞者的眼睛高度",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u2-3",
        "title": "經典構圖形式",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u3-1",
        "title": "印象派革命",
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
    "title": "水平線（視平線）代表觀賞者的眼睛高度",
    "category": "藝術・運算算理與公式",
    "badgeColor": "amber",
    "definition": "水平線（視平線）代表觀賞者的眼睛高度：視平線以上仰視，視平線以下俯視。",
    "formulaOrRule": "核心工具與心法：全音符(4拍) ➔ 二分音符(2拍) ➔ 四分音符(1拍) ➔ 八分音符(半拍)",
    "strategyTip": "【審題觸發】當題目出現「音符與休止符時值換算」時，立即啟動「全音符(4拍) ➔ 二分音符(2拍) ➔ 四分音符(1拍) ➔ 八分音符(半拍)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】聆聽電影配樂體會情緒渲染力、直笛合奏培養聆聽他人樂音的和諧合作能力。",
    "textbookFocus": "康軒：常考西洋管弦樂團四大樂器家族（弦樂、木管、銅管、打擊樂器）音色與構造辨析。 ｜ 南一：側重臺灣傳統本土音樂（歌仔戲文武場、客家八音、原住民杵歌多聲部合唱）。 ｜ 翰林：側重五線譜記譜法（高音譜記號、音名 CDEFGAB 與唱名 Do Re Mi、四二拍/四三拍/四四拍強弱拍律動）。",
    "juniorHighBridge": "國中音樂【音樂劇與世界音樂史】：巴洛克、古典樂派（莫札特/貝多芬）、浪漫樂派風格演變與樂曲賞析。",
    "infographicKey": "info-art-u2-2",
    "relatedPoints": [
      {
        "id": "kp-art-u2-1",
        "title": "透視法空間規律",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u2-3",
        "title": "經典構圖形式",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u3-1",
        "title": "印象派革命",
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
    "title": "經典構圖形式",
    "category": "藝術・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "經典構圖形式：三分法則（九宮格黃金交點）、三角形構圖（穩定莊嚴）、S 型構圖（流暢深遠）。",
    "formulaOrRule": "核心工具與心法：p (弱) ➔ mp (中弱) ➔ mf (中強) ➔ f (強)；crescendo (漸強 <)",
    "strategyTip": "【審題觸發】當題目出現「音樂常見強弱記號」時，立即啟動「p (弱) ➔ mp (中弱) ➔ mf (中強) ➔ f (強)；crescendo (漸強 <)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】聆聽電影配樂體會情緒渲染力、直笛合奏培養聆聽他人樂音的和諧合作能力。",
    "textbookFocus": "康軒：常考西洋管弦樂團四大樂器家族（弦樂、木管、銅管、打擊樂器）音色與構造辨析。 ｜ 南一：側重臺灣傳統本土音樂（歌仔戲文武場、客家八音、原住民杵歌多聲部合唱）。 ｜ 翰林：側重五線譜記譜法（高音譜記號、音名 CDEFGAB 與唱名 Do Re Mi、四二拍/四三拍/四四拍強弱拍律動）。",
    "juniorHighBridge": "國中音樂【音樂劇與世界音樂史】：巴洛克、古典樂派（莫札特/貝多芬）、浪漫樂派風格演變與樂曲賞析。",
    "infographicKey": "info-art-u2-3",
    "relatedPoints": [
      {
        "id": "kp-art-u2-1",
        "title": "透視法空間規律",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u2-2",
        "title": "水平線（視平線）代表觀賞者的眼睛高度",
        "unitId": "art-u2",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u3-1",
        "title": "印象派革命",
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
    "title": "印象派革命",
    "category": "藝術・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "印象派革命：走出畫室捕捉瞬間自然光影變化（莫內《日出印象》、雷諾瓦）。",
    "formulaOrRule": "核心工具與心法：舞台上 (Upstage，遠離觀眾) vs 舞台下 (Downstage，靠近觀眾)；舞台左/右以演員面向觀眾為準",
    "strategyTip": "【審題觸發】當題目出現「舞台九宮格空間方位術語」時，立即啟動「舞台上 (Upstage，遠離觀眾) vs 舞台下 (Downstage，靠近觀眾)；舞台左/右以演員面向觀眾為準」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】克服上台緊張自信面對人群演講、在日常溝通中敏銳察覺他人的肢體非語言暗示。",
    "textbookFocus": "康軒：常考戲劇舞台九宮格空間方位（上舞台、下舞台、舞台左右）與演員走位面向。 ｜ 南一：側重舞台劇編劇與導演概念（主角目標、障礙衝突、高潮解決）與幕後燈光音效道具協作。 ｜ 翰林：側重默劇肢體語言、面部表情、聲音投射與即興創作之表演核心三要素。",
    "juniorHighBridge": "國中表演藝術【劇場藝術全貌】：編劇劇本結構、導演場面調度、燈光服裝道具整體劇場美學。",
    "infographicKey": "info-art-u3-1",
    "relatedPoints": [
      {
        "id": "kp-art-u3-2",
        "title": "立體派創新",
        "unitId": "art-u3",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u3-3",
        "title": "臺灣前輩藝術名家",
        "unitId": "art-u3",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u4-1",
        "title": "音樂三要素核心",
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
    "title": "立體派創新",
    "category": "藝術・運算算理與公式",
    "badgeColor": "amber",
    "definition": "立體派創新：打破單一固定視角，將同一物體多角度剖析重構（畢卡索）。",
    "formulaOrRule": "核心工具與心法：「Yes, and...」（接納同伴拋出的設定，並在其上補充豐富情節）",
    "strategyTip": "【審題觸發】當題目出現「演員即興表演核心心法」時，立即啟動「「Yes, and...」（接納同伴拋出的設定，並在其上補充豐富情節）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】克服上台緊張自信面對人群演講、在日常溝通中敏銳察覺他人的肢體非語言暗示。",
    "textbookFocus": "康軒：常考戲劇舞台九宮格空間方位（上舞台、下舞台、舞台左右）與演員走位面向。 ｜ 南一：側重舞台劇編劇與導演概念（主角目標、障礙衝突、高潮解決）與幕後燈光音效道具協作。 ｜ 翰林：側重默劇肢體語言、面部表情、聲音投射與即興創作之表演核心三要素。",
    "juniorHighBridge": "國中表演藝術【劇場藝術全貌】：編劇劇本結構、導演場面調度、燈光服裝道具整體劇場美學。",
    "infographicKey": "info-art-u3-2",
    "relatedPoints": [
      {
        "id": "kp-art-u3-1",
        "title": "印象派革命",
        "unitId": "art-u3",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u3-3",
        "title": "臺灣前輩藝術名家",
        "unitId": "art-u3",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u4-1",
        "title": "音樂三要素核心",
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
    "title": "臺灣前輩藝術名家",
    "category": "藝術・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "臺灣前輩藝術名家：黃土水（臺灣首位入選帝展雕刻家《甘露水》）、陳澄波（熱情油畫筆觸《嘉義公園》）。",
    "formulaOrRule": "核心工具與心法：開端背景 ➔ 衝突浮現 ➔ 危機高潮 (Climax) ➔ 結局轉化",
    "strategyTip": "【審題觸發】當題目出現「戲劇衝突的起承轉合結構」時，立即啟動「開端背景 ➔ 衝突浮現 ➔ 危機高潮 (Climax) ➔ 結局轉化」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】克服上台緊張自信面對人群演講、在日常溝通中敏銳察覺他人的肢體非語言暗示。",
    "textbookFocus": "康軒：常考戲劇舞台九宮格空間方位（上舞台、下舞台、舞台左右）與演員走位面向。 ｜ 南一：側重舞台劇編劇與導演概念（主角目標、障礙衝突、高潮解決）與幕後燈光音效道具協作。 ｜ 翰林：側重默劇肢體語言、面部表情、聲音投射與即興創作之表演核心三要素。",
    "juniorHighBridge": "國中表演藝術【劇場藝術全貌】：編劇劇本結構、導演場面調度、燈光服裝道具整體劇場美學。",
    "infographicKey": "info-art-u3-3",
    "relatedPoints": [
      {
        "id": "kp-art-u3-1",
        "title": "印象派革命",
        "unitId": "art-u3",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u3-2",
        "title": "立體派創新",
        "unitId": "art-u3",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u4-1",
        "title": "音樂三要素核心",
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
    "title": "音樂三要素核心",
    "category": "藝術・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "音樂三要素核心：旋律（高低起伏線條）、節奏（長短強弱脈動）、和聲（多音共鳴層次）。",
    "formulaOrRule": "核心工具與心法：同理心 (Empathy)：換位思考，觀察使用者在真實情境中的不便與渴望",
    "strategyTip": "【審題觸發】當題目出現「設計思考第一步也是最關鍵一步」時，立即啟動「同理心 (Empathy)：換位思考，觀察使用者在真實情境中的不便與渴望」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】改造個人凌亂書桌打造高效讀書環境、設計班級環保分類垃圾箱引導全班正確回收。",
    "textbookFocus": "康軒：常考生活美學設計思考五步驟（同理心、定義問題、形成點子、製作原型、測試驗證）。 ｜ 南一：側重字體設計（明體字、黑體字特點）、CIS 企業識別標誌 (Logo) 與黃金比例審美。 ｜ 翰林：側重公共藝術功能性與造型美感，以及綠建築環境美學生活實踐。",
    "juniorHighBridge": "國中生活科技【設計與製作專題】：機構傳動、工具安全操作、工程設計流程與解決真實問題。",
    "infographicKey": "info-art-u4-1",
    "relatedPoints": [
      {
        "id": "kp-art-u4-2",
        "title": "混聲合唱四大聲部",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u4-3",
        "title": "曲式結構分析",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u5-1",
        "title": "管弦樂四大家族",
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
    "title": "混聲合唱四大聲部",
    "category": "藝術・運算算理與公式",
    "badgeColor": "amber",
    "definition": "混聲合唱四大聲部：女高音 (Soprano)、女低音 (Alto)、男高音 (Tenor)、男低音 (Bass)。",
    "formulaOrRule": "核心工具與心法：公平使用、彈性使用、簡易直覺、容錯設計、省力操作（如無障礙斜坡、按壓式門把）",
    "strategyTip": "【審題觸發】當題目出現「通用設計 (Universal Design) 七大原則」時，立即啟動「公平使用、彈性使用、簡易直覺、容錯設計、省力操作（如無障礙斜坡、按壓式門把）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】改造個人凌亂書桌打造高效讀書環境、設計班級環保分類垃圾箱引導全班正確回收。",
    "textbookFocus": "康軒：常考生活美學設計思考五步驟（同理心、定義問題、形成點子、製作原型、測試驗證）。 ｜ 南一：側重字體設計（明體字、黑體字特點）、CIS 企業識別標誌 (Logo) 與黃金比例審美。 ｜ 翰林：側重公共藝術功能性與造型美感，以及綠建築環境美學生活實踐。",
    "juniorHighBridge": "國中生活科技【設計與製作專題】：機構傳動、工具安全操作、工程設計流程與解決真實問題。",
    "infographicKey": "info-art-u4-2",
    "relatedPoints": [
      {
        "id": "kp-art-u4-1",
        "title": "音樂三要素核心",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u4-3",
        "title": "曲式結構分析",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u5-1",
        "title": "管弦樂四大家族",
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
    "title": "曲式結構分析",
    "category": "藝術・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "曲式結構分析：二段式 (AB)、三段式 (ABA 具再現部完整平衡感)、輪旋曲式 (ABACA)。",
    "formulaOrRule": "核心工具與心法：「形隨機能 (Form follows function)」：美感不能犧牲基本安全性與實用性",
    "strategyTip": "【審題觸發】當題目出現「產品外觀造型與功能性平衡」時，立即啟動「「形隨機能 (Form follows function)」：美感不能犧牲基本安全性與實用性」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】改造個人凌亂書桌打造高效讀書環境、設計班級環保分類垃圾箱引導全班正確回收。",
    "textbookFocus": "康軒：常考生活美學設計思考五步驟（同理心、定義問題、形成點子、製作原型、測試驗證）。 ｜ 南一：側重字體設計（明體字、黑體字特點）、CIS 企業識別標誌 (Logo) 與黃金比例審美。 ｜ 翰林：側重公共藝術功能性與造型美感，以及綠建築環境美學生活實踐。",
    "juniorHighBridge": "國中生活科技【設計與製作專題】：機構傳動、工具安全操作、工程設計流程與解決真實問題。",
    "infographicKey": "info-art-u4-3",
    "relatedPoints": [
      {
        "id": "kp-art-u4-1",
        "title": "音樂三要素核心",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u4-2",
        "title": "混聲合唱四大聲部",
        "unitId": "art-u4",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u5-1",
        "title": "管弦樂四大家族",
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
    "title": "管弦樂四大家族",
    "category": "藝術・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "管弦樂四大家族：弦樂器（小提琴/中提琴/大提琴/低音提琴）；木管（長笛/單簧管/雙簧管/低音管）；銅管（小號/法國號/長號/低音號）。",
    "formulaOrRule": "核心工具與心法：視覺暫留 (Persistence of Vision)：物體微幅移動 ➔ 拍一張 ➔ 連續播放產生生命力",
    "strategyTip": "【審題觸發】當題目出現「定格動畫 (Stop-Motion Animation) 核心原理」時，立即啟動「視覺暫留 (Persistence of Vision)：物體微幅移動 ➔ 拍一張 ➔ 連續播放產生生命力」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】自製班級畢業紀念微電影動畫短片、利用黏土與樂高人偶拍攝創意科普小劇場。",
    "textbookFocus": "康軒：常考停格動畫製作原理（視覺暫留、每秒影格數格拍逐格拍攝）、分鏡腳本繪製。 ｜ 南一：側重創客 (Maker) 跨界藝術裝置、互動燈光感應裝置與智慧科技藝術跨域展演。 ｜ 翰林：側重數位繪圖點陣圖 (Pixel) 與向量圖 (Vector) 差異，以及數位藝術修圖後製概念。",
    "juniorHighBridge": "國中資訊科技與藝術跨域【多媒體專題】：數位影音剪輯、2D/3D 動畫基礎、創客創用 CC 授權規範。",
    "infographicKey": "info-art-u5-1",
    "relatedPoints": [
      {
        "id": "kp-art-u5-2",
        "title": "樂器音色辨別",
        "unitId": "art-u5",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u5-3",
        "title": "本土民族音樂資產",
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
    "title": "樂器音色辨別",
    "category": "藝術・運算算理與公式",
    "badgeColor": "amber",
    "definition": "樂器音色辨別：長笛清脆高亢、雙簧管鼻音濃郁穿透力強、法國號音色溫暖圓潤。",
    "formulaOrRule": "核心工具與心法：在正式拍攝前以插畫表格規劃每鏡頭之景別（遠景/中景/特寫）、對白與音效",
    "strategyTip": "【審題觸發】當題目出現「動畫分鏡表 (Storyboard) 作用」時，立即啟動「在正式拍攝前以插畫表格規劃每鏡頭之景別（遠景/中景/特寫）、對白與音效」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】自製班級畢業紀念微電影動畫短片、利用黏土與樂高人偶拍攝創意科普小劇場。",
    "textbookFocus": "康軒：常考停格動畫製作原理（視覺暫留、每秒影格數格拍逐格拍攝）、分鏡腳本繪製。 ｜ 南一：側重創客 (Maker) 跨界藝術裝置、互動燈光感應裝置與智慧科技藝術跨域展演。 ｜ 翰林：側重數位繪圖點陣圖 (Pixel) 與向量圖 (Vector) 差異，以及數位藝術修圖後製概念。",
    "juniorHighBridge": "國中資訊科技與藝術跨域【多媒體專題】：數位影音剪輯、2D/3D 動畫基礎、創客創用 CC 授權規範。",
    "infographicKey": "info-art-u5-2",
    "relatedPoints": [
      {
        "id": "kp-art-u5-1",
        "title": "管弦樂四大家族",
        "unitId": "art-u5",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u5-3",
        "title": "本土民族音樂資產",
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
    "title": "本土民族音樂資產",
    "category": "藝術・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "本土民族音樂資產：原住民杵音泛音複音唱法、客家八音傳統吹打音樂、恆春半島思想起民謠。",
    "formulaOrRule": "核心工具與心法：如透明投影片分層疊加：線稿層、底色層、陰影高光層分開管理修改不干擾",
    "strategyTip": "【審題觸發】當題目出現「數位繪圖「圖層 (Layers)」概念」時，立即啟動「如透明投影片分層疊加：線稿層、底色層、陰影高光層分開管理修改不干擾」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】自製班級畢業紀念微電影動畫短片、利用黏土與樂高人偶拍攝創意科普小劇場。",
    "textbookFocus": "康軒：常考停格動畫製作原理（視覺暫留、每秒影格數格拍逐格拍攝）、分鏡腳本繪製。 ｜ 南一：側重創客 (Maker) 跨界藝術裝置、互動燈光感應裝置與智慧科技藝術跨域展演。 ｜ 翰林：側重數位繪圖點陣圖 (Pixel) 與向量圖 (Vector) 差異，以及數位藝術修圖後製概念。",
    "juniorHighBridge": "國中資訊科技與藝術跨域【多媒體專題】：數位影音剪輯、2D/3D 動畫基礎、創客創用 CC 授權規範。",
    "infographicKey": "info-art-u5-3",
    "relatedPoints": [
      {
        "id": "kp-art-u5-1",
        "title": "管弦樂四大家族",
        "unitId": "art-u5",
        "subjectId": "arts",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・觀念本質與定義"
      },
      {
        "id": "kp-art-u5-2",
        "title": "樂器音色辨別",
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
    "definition": "臺灣傳統三大偶戲：掌中布袋戲（巧手布偶）、皮影戲（透光剪影牛皮製偶）、懸絲傀儡戲（迎神驅邪除煞）。",
    "formulaOrRule": "核心工具與心法：生（文雅男子）、旦（端莊女子）、淨（花臉剛烈勇猛）、末（長鬚老者）、丑（詼諧幽默丑角）",
    "strategyTip": "【審題觸發】當題目出現「布袋戲五大行當角色分類」時，立即啟動「生（文雅男子）、旦（端莊女子）、淨（花臉剛烈勇猛）、末（長鬚老者）、丑（詼諧幽默丑角）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】參觀傳統廟宇古蹟看懂屋頂墀頭裝飾故事、在文創市集欣賞結合傳統刺繡皮雕的當代手作設計。",
    "textbookFocus": "康軒：常考臺灣傳統工藝（鶯歌陶瓷、三義木雕、大甲草編、美濃油紙傘）之技藝與在地文化。 ｜ 南一：側重版畫四大類別（凸版如木刻/橡皮版、凹版如銅版、平版如石版、孔版如絹印）之印製原理。 ｜ 翰林：側重世界傳統偶戲巡禮（臺灣布袋戲、皮影戲、魁儡戲、印尼皮影戲、捷克提線木偶）。",
    "juniorHighBridge": "國中藝術跨領域【在地文化與無形文化資產】：臺灣傳統聚落文化、非物質文化遺產傳承與現代文創創新。",
    "infographicKey": "info-art-u6-1",
    "relatedPoints": [
      {
        "id": "kp-art-u6-2",
        "title": "布袋戲角色行當",
        "unitId": "art-u6",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u6-3",
        "title": "現代影視與定格動畫",
        "unitId": "art-u6",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u5-1",
        "title": "管弦樂四大家族",
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
    "title": "布袋戲角色行當",
    "category": "藝術・運算算理與公式",
    "badgeColor": "amber",
    "definition": "布袋戲角色行當：生（男性主角）、旦（女性）、淨（花臉勇猛威嚴）、丑（滑稽詼諧）。",
    "formulaOrRule": "核心工具與心法：光線被不透光牛皮影偶遮擋，在白色影窗布幕上投射出清晰黑影與半透色彩",
    "strategyTip": "【審題觸發】當題目出現「皮影戲發光成像光學原理」時，立即啟動「光線被不透光牛皮影偶遮擋，在白色影窗布幕上投射出清晰黑影與半透色彩」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "現代影視與定格動畫",
        "unitId": "art-u6",
        "subjectId": "arts",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・生活實用與避雷"
      },
      {
        "id": "kp-art-u5-1",
        "title": "管弦樂四大家族",
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
    "title": "現代影視與定格動畫",
    "category": "藝術・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "現代影視與定格動畫：每秒拍攝多張微小位移靜態相片連續播放，產生流暢視覺暫留動態感。",
    "formulaOrRule": "核心工具與心法：將彩色碎瓷碗片剪裁嵌貼於灰泥胚體，塑造生動龍鳳神仙，耐風吹雨淋",
    "strategyTip": "【審題觸發】當題目出現「臺灣傳統廟宇屋頂剪黏工藝」時，立即啟動「將彩色碎瓷碗片剪裁嵌貼於灰泥胚體，塑造生動龍鳳神仙，耐風吹雨淋」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "布袋戲角色行當",
        "unitId": "art-u6",
        "subjectId": "arts",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：藝術・運算算理與公式"
      },
      {
        "id": "kp-art-u5-1",
        "title": "管弦樂四大家族",
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
    "definition": "青春期第二性徵個體差異：發育年齡受遺傳與營養影響各不相同，應尊重身心變化，絕不拿同學發育開玩笑。",
    "formulaOrRule": "核心工具與心法：這是長大成熟的健康正常里程碑，不因生長速度快慢而自卑焦慮",
    "strategyTip": "【審題觸發】當題目出現「男女第二性徵出現時正確心理調適」時，立即啟動「這是長大成熟的健康正常里程碑，不因生長速度快慢而自卑焦慮」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】建立自信健康的個人外表自我認同、學會挑選適合自己發育階段的純棉透氣貼身衣物。",
    "textbookFocus": "康軒：常考青春期第二性徵生理變化、個人衛生習慣維護、接納自我身體意象。 ｜ 南一：側重健康心理建設、打破性別刻板印象、拒絕身體霸凌與尋求輔導諮商支援。 ｜ 翰林：側重青春期情緒荷爾蒙波動管理、性別平等意識與尊重他人身體界線。",
    "juniorHighBridge": "國一健康教育【青春期發育與生殖系統】：男性與女性生殖器官結構功能、性別平等教育法與情感教育。",
    "infographicKey": "info-pe-u1-1",
    "relatedPoints": [
      {
        "id": "kp-pe-u1-2",
        "title": "身體紅綠燈紅燈禁區",
        "unitId": "pe-u1",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u1-3",
        "title": "拒絕侵害黃金三原則",
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
    "title": "身體紅綠燈紅燈禁區",
    "category": "健體・運算算理與公式",
    "badgeColor": "amber",
    "definition": "身體紅綠燈紅燈禁區：泳衣泳褲遮蓋部位（胸部、臀部、生殖器官）與嘴唇是神聖隱私區，任何人皆不可隨意碰觸或拍攝。",
    "formulaOrRule": "核心工具與心法：定期更換衛生棉保持乾爽；保持生殖器官清潔；女生經期避免劇烈冷水刺激",
    "strategyTip": "【審題觸發】當題目出現「月經生理期與夢遺衛生護理」時，立即啟動「定期更換衛生棉保持乾爽；保持生殖器官清潔；女生經期避免劇烈冷水刺激」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "拒絕侵害黃金三原則",
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
    "title": "拒絕侵害黃金三原則",
    "category": "健體・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "拒絕侵害黃金三原則：1. 拒絕（大聲說不） ➔ 2. 離開（迅速逃離至人多處） ➔ 3. 報告（告知師長或撥打 113）。",
    "formulaOrRule": "核心工具與心法：「我的身體我做主」：任何人未經同意觸碰隱私部位皆應大聲說「不」並立即告知信任師長",
    "strategyTip": "【審題觸發】當題目出現「個人身體自主權防線」時，立即啟動「「我的身體我做主」：任何人未經同意觸碰隱私部位皆應大聲說「不」並立即告知信任師長」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "身體紅綠燈紅燈禁區",
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
    "definition": "六大類食物每天均衡攝取：全穀雜糧、豆魚蛋肉、乳品類、蔬菜類、水果類、油脂與堅果種子類。",
    "formulaOrRule": "核心工具與心法：全穀雜糧類、豆魚蛋肉類、乳品類、蔬菜類、水果類、油脂與堅果種子類",
    "strategyTip": "【審題觸發】當題目出現「六大類食物完整清單」時，立即啟動「全穀雜糧類、豆魚蛋肉類、乳品類、蔬菜類、水果類、油脂與堅果種子類」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在學校營養午餐自主夾取彩虹五色均衡蔬果、在便利商店看懂食品包裝上的反式脂肪與熱量標示。",
    "textbookFocus": "康軒：常考國民健康署「我的餐盤」六口訣（每天早晚一杯奶、每餐水果拳頭大、菜比水果多一點等）。 ｜ 南一：側重食品安全三章一 Q 認證標章（CAS、產銷履歷、有機、QR-code溯源）與食安防範。 ｜ 翰林：側重食品營養標籤辨讀（熱量、蛋白質、脂肪、碳水化合物、鈉含量）與含糖飲料危害。",
    "juniorHighBridge": "國一健康教育【營養與消化系統】：消化器官運作、酵素催化作用、熱量代謝與慢性病預防。",
    "infographicKey": "info-pe-u2-1",
    "relatedPoints": [
      {
        "id": "kp-pe-u2-2",
        "title": "我的餐盤口訣大招",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u2-3",
        "title": "食品標示閱讀防雷",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u3-1",
        "title": "登革熱防治關鍵口訣",
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
    "title": "我的餐盤口訣大招",
    "category": "健體・運算算理與公式",
    "badgeColor": "amber",
    "definition": "我的餐盤口訣大招：早晚一杯奶、每餐水果拳頭大、菜比水果多一點、飯跟蔬菜一樣多、豆魚蛋肉一掌心、堅果種子一茶匙。",
    "formulaOrRule": "核心工具與心法：碳水化合物 (醣類) 4 大卡/克、蛋白質 4 大卡/克、脂肪 9 大卡/克",
    "strategyTip": "【審題觸發】當題目出現「三大產熱營養素熱量換算」時，立即啟動「碳水化合物 (醣類) 4 大卡/克、蛋白質 4 大卡/克、脂肪 9 大卡/克」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "食品標示閱讀防雷",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u3-1",
        "title": "登革熱防治關鍵口訣",
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
    "title": "食品標示閱讀防雷",
    "category": "健體・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "食品標示閱讀防雷：成分列表按「含量由多到少依序排列」；注意反式脂肪與過高精緻糖分攝取。",
    "formulaOrRule": "核心工具與心法：導致肥胖與蛀牙、抑制生長荷爾蒙分泌影響長高、引發專注力不集中與心血管負擔",
    "strategyTip": "【審題觸發】當題目出現「含糖手搖飲對身體發育三大危害」時，立即啟動「導致肥胖與蛀牙、抑制生長荷爾蒙分泌影響長高、引發專注力不集中與心血管負擔」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "我的餐盤口訣大招",
        "unitId": "pe-u2",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u3-1",
        "title": "登革熱防治關鍵口訣",
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
    "title": "登革熱防治關鍵口訣",
    "category": "健體・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "登革熱防治關鍵口訣：「巡、倒、清、刷」，徹底杜絕病媒蚊（埃及斑蚊、白線斑蚊）幼蟲孑孓孳生積水容器。",
    "formulaOrRule": "核心工具與心法：兩乳頭連線中央胸骨處；深度 5~6 公分；速率每分鐘 100~120 下（口訣：快快壓、用力壓、莫中斷）",
    "strategyTip": "【審題觸發】當題目出現「成人 CPR 正確胸外按壓位置與頻率」時，立即啟動「兩乳頭連線中央胸骨處；深度 5~6 公分；速率每分鐘 100~120 下（口訣：快快壓、用力壓、莫中斷）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在校園運動場遇同學昏倒呼吸停止能臨危不亂啟動急救、居家生活中防範長輩幼童噎食意外。",
    "textbookFocus": "康軒：常考運動扭傷挫傷 PRICE 急救原則（保護、休息、冰敷、加壓、抬高）各步驟執行順序。 ｜ 南一：側重中暑熱傷害預防與處置（陰涼通風、鬆開衣物、補充電解質水，意識不清絕不灌水）。 ｜ 翰林：側重 CPR 心肺復甦術與 AED 傻瓜電擊器急救口訣（叫叫壓電）、胸外按壓頻率與深度。",
    "juniorHighBridge": "國二健康教育【急救與安全教育】：包紮止血法、骨折固定法、溺水與燒燙傷五步驟（沖脫泡蓋送）。",
    "infographicKey": "info-pe-u3-1",
    "relatedPoints": [
      {
        "id": "kp-pe-u3-2",
        "title": "腸病毒防範盲點",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u3-3",
        "title": "傳染途徑三要素",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u4-1",
        "title": "運動前後黃金配置",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：健體・觀念本質與定義"
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
    "title": "腸病毒防範盲點",
    "category": "健體・運算算理與公式",
    "badgeColor": "amber",
    "definition": "腸病毒防範盲點：腸病毒無脂質外套膜，「酒精乾洗手完全無效」，必須使用肥皂依「內外夾弓大立腕」濕洗手。",
    "formulaOrRule": "核心工具與心法：一片貼在患者右鎖骨下方，另一片貼在左乳頭外側左下側肋骨處",
    "strategyTip": "【審題觸發】當題目出現「AED 貼片黏貼位置標準規範」時，立即啟動「一片貼在患者右鎖骨下方，另一片貼在左乳頭外側左下側肋骨處」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在校園運動場遇同學昏倒呼吸停止能臨危不亂啟動急救、居家生活中防範長輩幼童噎食意外。",
    "textbookFocus": "康軒：常考運動扭傷挫傷 PRICE 急救原則（保護、休息、冰敷、加壓、抬高）各步驟執行順序。 ｜ 南一：側重中暑熱傷害預防與處置（陰涼通風、鬆開衣物、補充電解質水，意識不清絕不灌水）。 ｜ 翰林：側重 CPR 心肺復甦術與 AED 傻瓜電擊器急救口訣（叫叫壓電）、胸外按壓頻率與深度。",
    "juniorHighBridge": "國二健康教育【急救與安全教育】：包紮止血法、骨折固定法、溺水與燒燙傷五步驟（沖脫泡蓋送）。",
    "infographicKey": "info-pe-u3-2",
    "relatedPoints": [
      {
        "id": "kp-pe-u3-1",
        "title": "登革熱防治關鍵口訣",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u3-3",
        "title": "傳染途徑三要素",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u4-1",
        "title": "運動前後黃金配置",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：健體・觀念本質與定義"
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
    "title": "傳染途徑三要素",
    "category": "健體・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "傳染途徑三要素：傳染原 ➔ 傳染途徑（飛沫、接觸、病媒蚊、糞口） ➔ 易感宿主（增強免疫力打疫苗）。",
    "formulaOrRule": "核心工具與心法：哈姆立克急救法 (Heimlich Maneuver)：站在患者背後環抱，拇指握拳抵住肚臍上方快速向內上方推擠",
    "strategyTip": "【審題觸發】當題目出現「異物哽塞無法呼吸咳嗽急救法」時，立即啟動「哈姆立克急救法 (Heimlich Maneuver)：站在患者背後環抱，拇指握拳抵住肚臍上方快速向內上方推擠」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在校園運動場遇同學昏倒呼吸停止能臨危不亂啟動急救、居家生活中防範長輩幼童噎食意外。",
    "textbookFocus": "康軒：常考運動扭傷挫傷 PRICE 急救原則（保護、休息、冰敷、加壓、抬高）各步驟執行順序。 ｜ 南一：側重中暑熱傷害預防與處置（陰涼通風、鬆開衣物、補充電解質水，意識不清絕不灌水）。 ｜ 翰林：側重 CPR 心肺復甦術與 AED 傻瓜電擊器急救口訣（叫叫壓電）、胸外按壓頻率與深度。",
    "juniorHighBridge": "國二健康教育【急救與安全教育】：包紮止血法、骨折固定法、溺水與燒燙傷五步驟（沖脫泡蓋送）。",
    "infographicKey": "info-pe-u3-3",
    "relatedPoints": [
      {
        "id": "kp-pe-u3-1",
        "title": "登革熱防治關鍵口訣",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u3-2",
        "title": "腸病毒防範盲點",
        "unitId": "pe-u3",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u4-1",
        "title": "運動前後黃金配置",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "學科進階階梯",
        "badgeType": "step",
        "desc": "深化挑戰下一個知識台階：健體・觀念本質與定義"
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
    "title": "運動前後黃金配置",
    "category": "健體・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "運動前後黃金配置：運動前做「動態暖身」（提高心率與關節活動度）；運動後做「靜態拉筋」（放鬆肌群防痠痛）。",
    "formulaOrRule": "核心工具與心法：有氧運動（慢跑、游泳、跳繩、快走，每週至少3次、每次30分鐘、心跳達130下）",
    "strategyTip": "【審題觸發】當題目出現「提升心肺耐力之最佳運動方式」時，立即啟動「有氧運動（慢跑、游泳、跳繩、快走，每週至少3次、每次30分鐘、心跳達130下）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】為自己制定每週規律運動計畫提升體能活力、在班際大隊接力賽中體會團隊接棒信任與運動家風度。",
    "textbookFocus": "康軒：常考體適能四大要素（心肺耐力、肌力與肌耐力、柔軟度、身體組成 BMI 計算）。 ｜ 南一：側重運動家精神核心（勝不驕、敗不餒、遵守規則、服從裁判判決、團隊互助合作）。 ｜ 翰林：側重運動前後動態暖身與靜態拉筋之重要性，預防運動傷害與運動處方擬定。",
    "juniorHighBridge": "國中體育【體適能處方與專項運動體能】：FITT 原則（頻率、強度、時間、種類）、無氧閾值與運動生理學。",
    "infographicKey": "info-pe-u4-1",
    "relatedPoints": [
      {
        "id": "kp-pe-u4-2",
        "title": "運動傷害急性處理最新 PEACE 原則",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u4-3",
        "title": "運動環境安全防護",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u5-1",
        "title": "成人心肺復甦術最新口訣",
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
        "relation": "跨域運動力學",
        "badgeType": "cross",
        "desc": "運動傷害 PEACE ➔ 骨骼肌腱支點施力槓桿力學"
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
    "title": "運動傷害急性處理最新 PEACE 原則",
    "category": "健體・運算算理與公式",
    "badgeColor": "amber",
    "definition": "運動傷害急性處理最新 PEACE 原則：Protect 保護、Elevate 抬高、Avoid 抗炎藥物與過度冰敷、Compress 加壓、Educate 衛教。",
    "formulaOrRule": "核心工具與心法：運動前充分動態暖身 ➔ 運動中及時補充水分 ➔ 運動後確實靜態伸展拉筋",
    "strategyTip": "【審題觸發】當題目出現「運動傷害預防三步驟」時，立即啟動「運動前充分動態暖身 ➔ 運動中及時補充水分 ➔ 運動後確實靜態伸展拉筋」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】為自己制定每週規律運動計畫提升體能活力、在班際大隊接力賽中體會團隊接棒信任與運動家風度。",
    "textbookFocus": "康軒：常考體適能四大要素（心肺耐力、肌力與肌耐力、柔軟度、身體組成 BMI 計算）。 ｜ 南一：側重運動家精神核心（勝不驕、敗不餒、遵守規則、服從裁判判決、團隊互助合作）。 ｜ 翰林：側重運動前後動態暖身與靜態拉筋之重要性，預防運動傷害與運動處方擬定。",
    "juniorHighBridge": "國中體育【體適能處方與專項運動體能】：FITT 原則（頻率、強度、時間、種類）、無氧閾值與運動生理學。",
    "infographicKey": "info-pe-u4-2",
    "relatedPoints": [
      {
        "id": "kp-pe-u4-1",
        "title": "運動前後黃金配置",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u4-3",
        "title": "運動環境安全防護",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u5-1",
        "title": "成人心肺復甦術最新口訣",
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
        "relation": "跨域運動力學",
        "badgeType": "cross",
        "desc": "運動傷害 PEACE ➔ 骨骼肌腱支點施力槓桿力學"
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
    "title": "運動環境安全防護",
    "category": "健體・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "運動環境安全防護：確認場地無積水坑洞、穿著適當吸汗運動服裝與止滑運動鞋。",
    "formulaOrRule": "核心工具與心法：心肺耐力 (800公尺跑走)、肌力肌耐力 (仰臥捲腹)、柔軟度 (坐姿體前彎)、瞬發力 (立定跳遠)",
    "strategyTip": "【審題觸發】當題目出現「體適能四大指標與檢測項目對應」時，立即啟動「心肺耐力 (800公尺跑走)、肌力肌耐力 (仰臥捲腹)、柔軟度 (坐姿體前彎)、瞬發力 (立定跳遠)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】為自己制定每週規律運動計畫提升體能活力、在班際大隊接力賽中體會團隊接棒信任與運動家風度。",
    "textbookFocus": "康軒：常考體適能四大要素（心肺耐力、肌力與肌耐力、柔軟度、身體組成 BMI 計算）。 ｜ 南一：側重運動家精神核心（勝不驕、敗不餒、遵守規則、服從裁判判決、團隊互助合作）。 ｜ 翰林：側重運動前後動態暖身與靜態拉筋之重要性，預防運動傷害與運動處方擬定。",
    "juniorHighBridge": "國中體育【體適能處方與專項運動體能】：FITT 原則（頻率、強度、時間、種類）、無氧閾值與運動生理學。",
    "infographicKey": "info-pe-u4-3",
    "relatedPoints": [
      {
        "id": "kp-pe-u4-1",
        "title": "運動前後黃金配置",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u4-2",
        "title": "運動傷害急性處理最新 PEACE 原則",
        "unitId": "pe-u4",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u5-1",
        "title": "成人心肺復甦術最新口訣",
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
        "relation": "跨域運動力學",
        "badgeType": "cross",
        "desc": "運動傷害 PEACE ➔ 骨骼肌腱支點施力槓桿力學"
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
    "title": "成人心肺復甦術最新口訣",
    "category": "健體・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "成人心肺復甦術最新口訣：「叫、叫、C、D」！叫（確認意識呼吸） ➔ 叫（打 119 並取 AED） ➔ C（胸外按壓） ➔ D（使用 AED）。",
    "formulaOrRule": "核心工具與心法：給了就跑 (Give and Go 傳切配合)、擋拆戰術 (Pick and Roll 掩護掩護)",
    "strategyTip": "【審題觸發】當題目出現「籃球團隊進攻基本戰術配合」時，立即啟動「給了就跑 (Give and Go 傳切配合)、擋拆戰術 (Pick and Roll 掩護掩護)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在球場上透過團隊溝通凝聚友誼默契、在面臨比分落後逆境時穩定心態發揮抗壓性。",
    "textbookFocus": "康軒：常考球類運動安全規則（籃球走步、雙手運球犯規；排球發球與三人觸球過網）。 ｜ 南一：側重防守站位原則（保持在進攻者與球籃/球門之間）、運動中防撞跌倒緩衝保護動作。 ｜ 翰林：側重團隊戰術配合（籃球傳切掩護、排球一傳二傳扣球攻擊、足球傳控導球）。",
    "juniorHighBridge": "國中體育【球類專項戰術與規則判決】：區域防守 vs 人盯人防守、攻守轉換戰術板解析、裁判手勢與規則。",
    "infographicKey": "info-pe-u5-1",
    "relatedPoints": [
      {
        "id": "kp-pe-u5-2",
        "title": "胸外按壓標準要領",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u5-3",
        "title": "AED 操作四步驟",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u6-1",
        "title": "排球基本規則",
        "unitId": "pe-u6",
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
        "relation": "跨域溝通急救",
        "badgeType": "cross",
        "desc": "CPR+AED 急救流程 ➔ 緊急應變我訊息冷靜指令"
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
    "title": "胸外按壓標準要領",
    "category": "健體・運算算理與公式",
    "badgeColor": "amber",
    "definition": "胸外按壓標準要領：雙掌交疊手臂打直，按壓位置在胸骨下半部兩乳頭連線中點，深度 5~6 公分，頻率每分鐘 100~120 下。",
    "formulaOrRule": "核心工具與心法：一傳接發球起球 ➔ 二傳托球舉球到位 ➔ 三傳攻擊扣殺或吊球過網",
    "strategyTip": "【審題觸發】當題目出現「排球比賽防守反擊標準三觸球流程」時，立即啟動「一傳接發球起球 ➔ 二傳托球舉球到位 ➔ 三傳攻擊扣殺或吊球過網」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在球場上透過團隊溝通凝聚友誼默契、在面臨比分落後逆境時穩定心態發揮抗壓性。",
    "textbookFocus": "康軒：常考球類運動安全規則（籃球走步、雙手運球犯規；排球發球與三人觸球過網）。 ｜ 南一：側重防守站位原則（保持在進攻者與球籃/球門之間）、運動中防撞跌倒緩衝保護動作。 ｜ 翰林：側重團隊戰術配合（籃球傳切掩護、排球一傳二傳扣球攻擊、足球傳控導球）。",
    "juniorHighBridge": "國中體育【球類專項戰術與規則判決】：區域防守 vs 人盯人防守、攻守轉換戰術板解析、裁判手勢與規則。",
    "infographicKey": "info-pe-u5-2",
    "relatedPoints": [
      {
        "id": "kp-pe-u5-1",
        "title": "成人心肺復甦術最新口訣",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u5-3",
        "title": "AED 操作四步驟",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u6-1",
        "title": "排球基本規則",
        "unitId": "pe-u6",
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
        "relation": "跨域溝通急救",
        "badgeType": "cross",
        "desc": "CPR+AED 急救流程 ➔ 緊急應變我訊息冷靜指令"
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
    "title": "AED 操作四步驟",
    "category": "健體・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "AED 操作四步驟：開（開電源） ➔ 貼（貼胸部電極片） ➔ 插（插導線分析心律） ➔ 電（無人碰觸再電擊）。",
    "formulaOrRule": "核心工具與心法：穿著合適抓地防滑球鞋、修剪指甲、拿下手錶眼鏡吊飾等硬物、避免墊腳犯規",
    "strategyTip": "【審題觸發】當題目出現「預防球場運動傷害防護措施」時，立即啟動「穿著合適抓地防滑球鞋、修剪指甲、拿下手錶眼鏡吊飾等硬物、避免墊腳犯規」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在球場上透過團隊溝通凝聚友誼默契、在面臨比分落後逆境時穩定心態發揮抗壓性。",
    "textbookFocus": "康軒：常考球類運動安全規則（籃球走步、雙手運球犯規；排球發球與三人觸球過網）。 ｜ 南一：側重防守站位原則（保持在進攻者與球籃/球門之間）、運動中防撞跌倒緩衝保護動作。 ｜ 翰林：側重團隊戰術配合（籃球傳切掩護、排球一傳二傳扣球攻擊、足球傳控導球）。",
    "juniorHighBridge": "國中體育【球類專項戰術與規則判決】：區域防守 vs 人盯人防守、攻守轉換戰術板解析、裁判手勢與規則。",
    "infographicKey": "info-pe-u5-3",
    "relatedPoints": [
      {
        "id": "kp-pe-u5-1",
        "title": "成人心肺復甦術最新口訣",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u5-2",
        "title": "胸外按壓標準要領",
        "unitId": "pe-u5",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u6-1",
        "title": "排球基本規則",
        "unitId": "pe-u6",
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
        "relation": "跨域溝通急救",
        "badgeType": "cross",
        "desc": "CPR+AED 急救流程 ➔ 緊急應變我訊息冷靜指令"
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
    "title": "排球基本規則",
    "category": "健體・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "排球基本規則：每隊在球過網前最多觸球 3 次（攔網不計），不可持球或連擊。",
    "formulaOrRule": "核心工具與心法：4-7-8 腹式深呼吸法（吸氣4秒、屏息7秒、慢吐氣8秒）放鬆自律神經",
    "strategyTip": "【審題觸發】當題目出現「面臨重大考試前緊張焦慮心跳加速緩解法」時，立即啟動「4-7-8 腹式深呼吸法（吸氣4秒、屏息7秒、慢吐氣8秒）放鬆自律神經」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在段考挫折失利後進行有效自我對話迅速復原、成為同儕遭遇低潮時溫暖傾聽的同理心夥伴。",
    "textbookFocus": "康軒：常考心理壓力來源辨識、身心放鬆技巧（腹式深呼吸、正念冥想、規律運動釋放腦內啡）。 ｜ 南一：側重校園人際同儕衝突調適、情緒 ABC 理論（信念決定情緒反應）與心理求助網絡資源。 ｜ 翰林：側重挫折復原力 (Resilience) 培養、從失敗中尋找學習點與轉念思維。",
    "juniorHighBridge": "國中健康教育【心理健康與壓力調適】：憂鬱症與焦慮症早期辨識、防衛機轉、社會支持網絡建立。",
    "infographicKey": "info-pe-u6-1",
    "relatedPoints": [
      {
        "id": "kp-pe-u6-2",
        "title": "籃球防守原則",
        "unitId": "pe-u6",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u6-3",
        "title": "運動家精神最高展現",
        "unitId": "pe-u6",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u5-1",
        "title": "成人心肺復甦術最新口訣",
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
    "title": "籃球防守原則",
    "category": "健體・運算算理與公式",
    "badgeColor": "amber",
    "definition": "籃球防守原則：防守球員應保持在「進攻球員與籃框之間」，腳步快速滑步切勿盲目下手犯規。",
    "formulaOrRule": "核心工具與心法：轉念成長型思維：「我只是『還沒』掌握正確方法，每次挫折都是大腦神經元成長的機會」",
    "strategyTip": "【審題觸發】當題目出現「當陷入「我怎麼這麼笨、我一定考不好」負面思維」時，立即啟動「轉念成長型思維：「我只是『還沒』掌握正確方法，每次挫折都是大腦神經元成長的機會」」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在段考挫折失利後進行有效自我對話迅速復原、成為同儕遭遇低潮時溫暖傾聽的同理心夥伴。",
    "textbookFocus": "康軒：常考心理壓力來源辨識、身心放鬆技巧（腹式深呼吸、正念冥想、規律運動釋放腦內啡）。 ｜ 南一：側重校園人際同儕衝突調適、情緒 ABC 理論（信念決定情緒反應）與心理求助網絡資源。 ｜ 翰林：側重挫折復原力 (Resilience) 培養、從失敗中尋找學習點與轉念思維。",
    "juniorHighBridge": "國中健康教育【心理健康與壓力調適】：憂鬱症與焦慮症早期辨識、防衛機轉、社會支持網絡建立。",
    "infographicKey": "info-pe-u6-2",
    "relatedPoints": [
      {
        "id": "kp-pe-u6-1",
        "title": "排球基本規則",
        "unitId": "pe-u6",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u6-3",
        "title": "運動家精神最高展現",
        "unitId": "pe-u6",
        "subjectId": "health_pe",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・生活實用與避雷"
      },
      {
        "id": "kp-pe-u5-1",
        "title": "成人心肺復甦術最新口訣",
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
    "title": "運動家精神最高展現",
    "category": "健體・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "運動家精神最高展現：勝不驕、敗不餒，服從裁判判決，尊重隊友與對手，享受團隊合作樂趣。",
    "formulaOrRule": "核心工具與心法：輔導室諮商老師、班導師、衛福部安心專線 1925、反霸凌專線 1953",
    "strategyTip": "【審題觸發】當題目出現「遭遇霸凌或嚴重情緒低落校園求助管道」時，立即啟動「輔導室諮商老師、班導師、衛福部安心專線 1925、反霸凌專線 1953」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在段考挫折失利後進行有效自我對話迅速復原、成為同儕遭遇低潮時溫暖傾聽的同理心夥伴。",
    "textbookFocus": "康軒：常考心理壓力來源辨識、身心放鬆技巧（腹式深呼吸、正念冥想、規律運動釋放腦內啡）。 ｜ 南一：側重校園人際同儕衝突調適、情緒 ABC 理論（信念決定情緒反應）與心理求助網絡資源。 ｜ 翰林：側重挫折復原力 (Resilience) 培養、從失敗中尋找學習點與轉念思維。",
    "juniorHighBridge": "國中健康教育【心理健康與壓力調適】：憂鬱症與焦慮症早期辨識、防衛機轉、社會支持網絡建立。",
    "infographicKey": "info-pe-u6-3",
    "relatedPoints": [
      {
        "id": "kp-pe-u6-1",
        "title": "排球基本規則",
        "unitId": "pe-u6",
        "subjectId": "health_pe",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・觀念本質與定義"
      },
      {
        "id": "kp-pe-u6-2",
        "title": "籃球防守原則",
        "unitId": "pe-u6",
        "subjectId": "health_pe",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：健體・運算算理與公式"
      },
      {
        "id": "kp-pe-u5-1",
        "title": "成人心肺復甦術最新口訣",
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
    "definition": "艾森豪時間四象限矩陣：優先投入「重要但不緊急（第二象限）」如健康、自主學習，避免被緊急危機追著跑。",
    "formulaOrRule": "核心工具與心法：第二象限：重要但不緊急（如閱讀先修、規律運動、人際經營，杜絕拖延到變緊急火災）",
    "strategyTip": "【審題觸發】當題目出現「艾森豪四象限中最決定長期人生成就者」時，立即啟動「第二象限：重要但不緊急（如閱讀先修、規律運動、人際經營，杜絕拖延到變緊急火災）」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在長假期間自主訂立寒暑假讀書與運動計畫、妥善儲蓄過年壓歲錢實現個人長期夢想基金。",
    "textbookFocus": "康軒：常考時間管理艾森豪四象限矩陣（第一象限重要緊急、第二象限重要不緊急-自主學習重點）。 ｜ 南一：側重理財儲蓄觀念、想要與需要之分辨、631 收入分配儲蓄投資法則。 ｜ 翰林：側重專注力番茄工作法（專注25分鐘休息5分鐘）與克服拖延症的微步行動法。",
    "juniorHighBridge": "國中綜合活動【時間規劃與生涯理財】：複利效應、預算編列、高中職升學時間軸自主管理。",
    "infographicKey": "info-comp-u1-1",
    "relatedPoints": [
      {
        "id": "kp-comp-u1-2",
        "title": "番茄鐘高效專注法",
        "unitId": "comp-u1",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u1-3",
        "title": "631 理財儲蓄分配法則",
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
        "title": "四則運算絕對順序",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "跨域理性規劃",
        "badgeType": "cross",
        "desc": "艾森豪矩陣 ➔ 數學運算括號優先次序規劃"
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
    "title": "番茄鐘高效專注法",
    "category": "綜合・運算算理與公式",
    "badgeColor": "amber",
    "definition": "番茄鐘高效專注法：專注工作 25 分鐘 ➔ 徹底休息 5 分鐘，四個循環後進行 15~30 分鐘長休息。",
    "formulaOrRule": "核心工具與心法：專注學習 25 分鐘 ➔ 徹底休息 5 分鐘 ➔ 四個循環後大休息 15~30 分鐘",
    "strategyTip": "【審題觸發】當題目出現「破除拖延症之番茄鐘工作法 (Pomodoro)」時，立即啟動「專注學習 25 分鐘 ➔ 徹底休息 5 分鐘 ➔ 四個循環後大休息 15~30 分鐘」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "631 理財儲蓄分配法則",
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
        "title": "四則運算絕對順序",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "跨域理性規劃",
        "badgeType": "cross",
        "desc": "艾森豪矩陣 ➔ 數學運算括號優先次序規劃"
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
    "title": "631 理財儲蓄分配法則",
    "category": "綜合・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "631 理財儲蓄分配法則：收入 60% 日常生活消費、30% 儲蓄投資、10% 應急風險備用金。",
    "formulaOrRule": "核心工具與心法：冷靜期法則：在掏錢購買「想要」的非必需品前，先給自己 72 小時冷靜期",
    "strategyTip": "【審題觸發】當題目出現「避免衝動購物心法」時，立即啟動「冷靜期法則：在掏錢購買「想要」的非必需品前，先給自己 72 小時冷靜期」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "番茄鐘高效專注法",
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
        "title": "四則運算絕對順序",
        "unitId": "math-u7",
        "subjectId": "math",
        "relation": "跨域理性規劃",
        "badgeType": "cross",
        "desc": "艾森豪矩陣 ➔ 數學運算括號優先次序規劃"
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
    "definition": "我訊息溝通黃金公式：「當你【客觀事實】時，我覺得【真實感受】，因為【對我的影響】，我希望【具體期待】」。",
    "formulaOrRule": "核心工具與心法：「當你約定時間晚到半小時（事實），我感到著急與不被重視（感受），因為我重視我們的約定（需要），希望你下次若延誤能先傳訊息通知我（具體請求）」",
    "strategyTip": "【審題觸發】當題目出現「「你每次都這樣遲到，真的很討厭！」（你訊息批評）轉換為「我訊息」」時，立即啟動「「當你約定時間晚到半小時（事實），我感到著急與不被重視（感受），因為我重視我們的約定（需要），希望你下次若延誤能先傳訊息通知我（具體請求）」」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】在與父母意見不同時能心平氣和表達想法爭取理解、在小組專案合作意見分歧時促進凝聚共識。",
    "textbookFocus": "康軒：常考我訊息 (I-Message) 溝通四步驟（事實、感受、影響、期待）將指責轉化為真誠溝通。 ｜ 南一：側重非暴力溝通 (NVC) 四要素（觀察、感受、需要、請求）在同儕衝突調解中的實戰。 ｜ 翰林：側重同理心傾聽三部曲（專注眼神接觸、複述情感關鍵字、確認理解不急於評判）。",
    "juniorHighBridge": "國中綜合活動【人際關係與情緒管理】：人際界線建立、情感教育、親職溝通橋樑搭建。",
    "infographicKey": "info-comp-u2-1",
    "relatedPoints": [
      {
        "id": "kp-comp-u2-2",
        "title": "杜絕你訊息指責批判",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u2-3",
        "title": "同理心傾聽三步法",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・生活實用與避雷"
      },
      {
        "id": "kp-comp-u3-1",
        "title": "費曼學習法四大步驟",
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
    "title": "杜絕你訊息指責批判",
    "category": "綜合・運算算理與公式",
    "badgeColor": "amber",
    "definition": "杜絕你訊息指責批判：「你每次都...、你怎麼總是...」只會激發防衛心與衝突，換位思考才能解決問題。",
    "formulaOrRule": "核心工具與心法：眼神專注不滑手機 ➔ 點頭不隨意打斷 ➔ 複述對方感受：「聽起來你今天真的受了很大的委屈」",
    "strategyTip": "【審題觸發】當題目出現「積極同理心聆聽三部曲」時，立即啟動「眼神專注不滑手機 ➔ 點頭不隨意打斷 ➔ 複述對方感受：「聽起來你今天真的受了很大的委屈」」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "同理心傾聽三步法",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "同課避雷實用",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・生活實用與避雷"
      },
      {
        "id": "kp-comp-u3-1",
        "title": "費曼學習法四大步驟",
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
    "title": "同理心傾聽三步法",
    "category": "綜合・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "同理心傾聽三步法：專注眼神接觸 ➔ 複述對方情感 ➔ 接納但不急於評判指責。",
    "formulaOrRule": "核心工具與心法：對事不對人；尋找雙方利益交集的「雙贏 (Win-Win) 解決方案」",
    "strategyTip": "【審題觸發】當題目出現「同儕群體衝突化解心法」時，立即啟動「對事不對人；尋找雙方利益交集的「雙贏 (Win-Win) 解決方案」」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "杜絕你訊息指責批判",
        "unitId": "comp-u2",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u3-1",
        "title": "費曼學習法四大步驟",
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
    "title": "費曼學習法四大步驟",
    "category": "綜合・觀念本質與定義",
    "badgeColor": "blue",
    "definition": "費曼學習法四大步驟：選定概念 ➔ 用淺顯大白話教給門外漢或小學生 ➔ 找出卡關盲點回顧 ➔ 簡化類比提煉。",
    "formulaOrRule": "核心工具與心法：多元智能理論：天生我材必有用，每個人都有屬於自己的優勢智能組合",
    "strategyTip": "【審題觸發】當題目出現「打破單一智育成績定終身迷思」時，立即啟動「多元智能理論：天生我材必有用，每個人都有屬於自己的優勢智能組合」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】探索自身獨特才藝與熱情所在堅定自信、為升國中銜接擬定清晰可行的自律學習進度計畫。",
    "textbookFocus": "康軒：常考多元智能理論（迦納八大智能）發掘個人優勢天賦與國中生活適應準備。 ｜ 南一：側重成長型思維 (Growth Mindset) 與定型思維對照（大腦如肌肉越練越強，將「我不會」改為「我還沒學會」）。 ｜ 翰林：側重費曼學習法（以教促學四步驟：選主題、用大白話解釋、找卡關點、簡化類比）。",
    "juniorHighBridge": "國中綜合與生涯輔導【生涯發展教育手冊】：性向測驗分析、高中普通科 vs 高職技術型高中科系探索。",
    "infographicKey": "info-comp-u3-1",
    "relatedPoints": [
      {
        "id": "kp-comp-u3-2",
        "title": "成長型思維 vs 定型思維",
        "unitId": "comp-u3",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u3-3",
        "title": "加納八大多元智能",
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
        "id": "kp-man-u3-2",
        "title": "段落主旨提煉",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "跨域深度學習",
        "badgeType": "cross",
        "desc": "費曼學習法小學生教導 ➔ 記敘文段落主旨提煉"
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
    "title": "成長型思維 vs 定型思維",
    "category": "綜合・運算算理與公式",
    "badgeColor": "amber",
    "definition": "成長型思維 vs 定型思維：定型思維認為天賦智商固定；成長型思維深信「大腦神經元越挫折鍛鍊越聰明」。",
    "formulaOrRule": "核心工具與心法：S (明確 Specific)、M (可衡量 Measurable)、A (可達成 Achievable)、R (相關性 Relevant)、T (有時限 Time-bound)",
    "strategyTip": "【審題觸發】當題目出現「SMART 目標設定五大檢驗指標」時，立即啟動「S (明確 Specific)、M (可衡量 Measurable)、A (可達成 Achievable)、R (相關性 Relevant)、T (有時限 Time-bound)」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】探索自身獨特才藝與熱情所在堅定自信、為升國中銜接擬定清晰可行的自律學習進度計畫。",
    "textbookFocus": "康軒：常考多元智能理論（迦納八大智能）發掘個人優勢天賦與國中生活適應準備。 ｜ 南一：側重成長型思維 (Growth Mindset) 與定型思維對照（大腦如肌肉越練越強，將「我不會」改為「我還沒學會」）。 ｜ 翰林：側重費曼學習法（以教促學四步驟：選主題、用大白話解釋、找卡關點、簡化類比）。",
    "juniorHighBridge": "國中綜合與生涯輔導【生涯發展教育手冊】：性向測驗分析、高中普通科 vs 高職技術型高中科系探索。",
    "infographicKey": "info-comp-u3-2",
    "relatedPoints": [
      {
        "id": "kp-comp-u3-1",
        "title": "費曼學習法四大步驟",
        "unitId": "comp-u3",
        "subjectId": "integrative",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・觀念本質與定義"
      },
      {
        "id": "kp-comp-u3-3",
        "title": "加納八大多元智能",
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
        "id": "kp-man-u3-2",
        "title": "段落主旨提煉",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "跨域深度學習",
        "badgeType": "cross",
        "desc": "費曼學習法小學生教導 ➔ 記敘文段落主旨提煉"
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
    "title": "加納八大多元智能",
    "category": "綜合・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "加納八大多元智能：每個人都是天才，語文、邏輯數學、空間、肢體動覺、音樂、人際、內省、自然觀察各有所長。",
    "formulaOrRule": "核心工具與心法：將自己學會的複雜知識，用小學生都能聽懂的淺顯白話講給別人聽",
    "strategyTip": "【審題觸發】當題目出現「費曼學習法 (Feynman Technique) 內化知識」時，立即啟動「將自己學會的複雜知識，用小學生都能聽懂的淺顯白話講給別人聽」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】探索自身獨特才藝與熱情所在堅定自信、為升國中銜接擬定清晰可行的自律學習進度計畫。",
    "textbookFocus": "康軒：常考多元智能理論（迦納八大智能）發掘個人優勢天賦與國中生活適應準備。 ｜ 南一：側重成長型思維 (Growth Mindset) 與定型思維對照（大腦如肌肉越練越強，將「我不會」改為「我還沒學會」）。 ｜ 翰林：側重費曼學習法（以教促學四步驟：選主題、用大白話解釋、找卡關點、簡化類比）。",
    "juniorHighBridge": "國中綜合與生涯輔導【生涯發展教育手冊】：性向測驗分析、高中普通科 vs 高職技術型高中科系探索。",
    "infographicKey": "info-comp-u3-3",
    "relatedPoints": [
      {
        "id": "kp-comp-u3-1",
        "title": "費曼學習法四大步驟",
        "unitId": "comp-u3",
        "subjectId": "integrative",
        "relation": "同課觀念基石",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・觀念本質與定義"
      },
      {
        "id": "kp-comp-u3-2",
        "title": "成長型思維 vs 定型思維",
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
        "id": "kp-man-u3-2",
        "title": "段落主旨提煉",
        "unitId": "man-u3",
        "subjectId": "mandarin",
        "relation": "跨域深度學習",
        "badgeType": "cross",
        "desc": "費曼學習法小學生教導 ➔ 記敘文段落主旨提煉"
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
    "definition": "服務學習完整四階段：準備（調查需求與規劃） ➔ 服務（動手實踐） ➔ 反思（回顧感受與學習收穫） ➔ 慶賀（成果分享）。",
    "formulaOrRule": "核心工具與心法：服務學習包含「反思 (Reflection)」與「學習目標」，在付出中看見社會結構問題與自我成長",
    "strategyTip": "【審題觸發】當題目出現「服務學習與單純勞動打掃之本質區別」時，立即啟動「服務學習包含「反思 (Reflection)」與「學習目標」，在付出中看見社會結構問題與自我成長」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】利用週末與家人參與社區海灘淨灘或關懷獨居長者、在生活中實踐「利他即是利己」的幸福真諦。",
    "textbookFocus": "康軒：常考服務學習四部曲（準備、服務、反思、慶賀）在在地社區關懷志工活動之落實。 ｜ 南一：側重公民社會參與行動、環境保護淨灘志工、社區文史走讀與成果發表分享。 ｜ 翰林：側重關懷弱勢群體、探訪長者、友善校園無障礙環境設施踏查與同理心實踐。",
    "juniorHighBridge": "國中綜合活動【志工服務與公民參與】：志願服務法規認識、公共議題倡議與青年社會責任。",
    "infographicKey": "info-comp-u4-1",
    "relatedPoints": [
      {
        "id": "kp-comp-u4-2",
        "title": "愛心服務的真正本質",
        "unitId": "comp-u4",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u4-3",
        "title": "在地社區文史關懷",
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
    "title": "愛心服務的真正本質",
    "category": "綜合・運算算理與公式",
    "badgeColor": "amber",
    "definition": "愛心服務的真正本質：不是高高在上的施捨，而是平等相互尊重的生命陪伴與學習成長。",
    "formulaOrRule": "核心工具與心法：摒棄高高在上的施捨心態，以平等的同理心與尊重相伴",
    "strategyTip": "【審題觸發】當題目出現「走訪養老院或育幼院服務應有心態」時，立即啟動「摒棄高高在上的施捨心態，以平等的同理心與尊重相伴」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "在地社區文史關懷",
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
    "title": "在地社區文史關懷",
    "category": "綜合・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "在地社區文史關懷：探訪社區長者、關懷弱勢、參與地方文史步道踏查與環境巡守。",
    "formulaOrRule": "核心工具與心法：結合全校師生力量、透明公開募款去向、聚焦特定弱勢或動保議題",
    "strategyTip": "【審題觸發】當題目出現「校園公益義賣倡議活動設計」時，立即啟動「結合全校師生力量、透明公開募款去向、聚焦特定弱勢或動保議題」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "愛心服務的真正本質",
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
    "definition": "假訊息查核三步驟：停（先別急著轉發） ➔ 看（檢查來源網址與發布日期） ➔ 查（使用事實查核中心等權威管道查證）。",
    "formulaOrRule": "核心工具與心法：檢視訊息來源是否具權威 ➔ 檢查是否只有聳動標題缺乏證據 ➔ 使用台灣事實查核中心 (TFC) 或 Cofacts 查證",
    "strategyTip": "【審題觸發】當題目出現「辨識假新聞與不實網路謠言查證三步驟」時，立即啟動「檢視訊息來源是否具權威 ➔ 檢查是否只有聳動標題缺乏證據 ➔ 使用台灣事實查核中心 (TFC) 或 Cofacts 查證」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】主動向家中長輩宣導防範假投資與假檢警網路詐騙、培養數位排毒習慣找回專注深度閱讀力。",
    "textbookFocus": "康軒：常考假訊息查證三步驟（停-不立即轉發、看-檢查來源網址、查-事實查核中心查證）。 ｜ 南一：側重數位足跡不可逆性、個人資料與帳號密碼保護、網路成癮自我檢核與健康上網公約。 ｜ 翰林：側重網路防霸凌「三不一留」（不附和、不轉傳、不謾罵、截圖留存證據撥打1953）。",
    "juniorHighBridge": "國中資訊科技與綜合【資訊倫理與數位公民權】：著作權法創用 CC 授權、個資法保護、AI深偽技術 (Deepfake) 辨識。",
    "infographicKey": "info-comp-u5-1",
    "relatedPoints": [
      {
        "id": "kp-comp-u5-2",
        "title": "防範網路霸凌三不一留",
        "unitId": "comp-u5",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u5-3",
        "title": "數位足跡不可逆原則",
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
    "title": "防範網路霸凌三不一留",
    "category": "綜合・運算算理與公式",
    "badgeColor": "amber",
    "definition": "防範網路霸凌三不一留：不附和、不轉傳、不謾罵攻擊，並「截圖留存證據」，及時向家長師長求助或撥打 1953。",
    "formulaOrRule": "核心工具與心法：在網路張貼任何照片或言論前先思考：「如果這張照片出現在學校公告欄或十年後老闆面前，我會安心嗎？」",
    "strategyTip": "【審題觸發】當題目出現「數位足跡與隱私防護關鍵心法」時，立即啟動「在網路張貼任何照片或言論前先思考：「如果這張照片出現在學校公告欄或十年後老闆面前，我會安心嗎？」」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "數位足跡不可逆原則",
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
    "title": "數位足跡不可逆原則",
    "category": "綜合・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "數位足跡不可逆原則：凡走過必留下痕跡，網路上發布的文字、照片哪怕刪除也可能被截圖備份，務必謹慎自律。",
    "formulaOrRule": "核心工具與心法：設定 App 每日使用時間上限、讀書時手機置於視線之外、睡前半小時遠離藍光螢幕",
    "strategyTip": "【審題觸發】當題目出現「預防多巴胺短影音成癮自我管理」時，立即啟動「設定 App 每日使用時間上限、讀書時手機置於視線之外、睡前半小時遠離藍光螢幕」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "防範網路霸凌三不一留",
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
    "definition": "無痕山林 LNT 七大準則核心：事前充分規劃、在堅實地面行走、妥善處理垃圾帶下山、尊重野生動植物與他人。",
    "formulaOrRule": "核心工具與心法：事前充分規劃、在堅實地面行走宿營、妥善處理垃圾排遺、保持環境原有風貌、減低用火影響、尊重野生動植物、考量其他使用者",
    "strategyTip": "【審題觸發】當題目出現「無痕山林 (LNT) 七大準則核心理念」時，立即啟動「事前充分規劃、在堅實地面行走宿營、妥善處理垃圾排遺、保持環境原有風貌、減低用火影響、尊重野生動植物、考量其他使用者」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
    "trapAlert": "【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。",
    "practicalUtility": "【生活實用】全家登山健行落實垃圾全部帶下山不遺留果皮、在居家與學校熟記避難包物品整備與逃生動線。",
    "textbookFocus": "康軒：常考無痕山林 (Leave No Trace, LNT) 七大原則（事前規劃、在堅實路面行走、妥善處理垃圾帶下山等）。 ｜ 南一：側重國際標準哨音求救訊號（每分鐘 6 聲長音，停 1 分鐘後重複）與防範野生動物安全常識。 ｜ 翰林：側重戶外登山迷路求生「333 原則」（失溫 3 小時、缺水 3 天、飢餓 3 週，保暖永遠排第一）。",
    "juniorHighBridge": "國中綜合與童軍教育【戶外生活與童軍技能】：野外求生雙平結八字結繩結應用、方向定向越野、急救與營隊自主管理。",
    "infographicKey": "info-comp-u6-1",
    "relatedPoints": [
      {
        "id": "kp-comp-u6-2",
        "title": "野外迷路求生 333 原則",
        "unitId": "comp-u6",
        "subjectId": "integrative",
        "relation": "同課算理推導",
        "badgeType": "sibling",
        "desc": "本單元連貫心智模型：綜合・運算算理與公式"
      },
      {
        "id": "kp-comp-u6-3",
        "title": "國際標準哨音求救信號",
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
    "title": "野外迷路求生 333 原則",
    "category": "綜合・運算算理與公式",
    "badgeColor": "amber",
    "definition": "野外迷路求生 333 原則：人失溫只能活 3 小時、缺水只能活 3 天、不吃固體食物可活 3 週；防失溫永遠最優先！",
    "formulaOrRule": "核心工具與心法：失溫 (Hypothermia)！3小時失溫即可致命，故求生第一要務是防風防雨保暖與保持乾燥",
    "strategyTip": "【審題觸發】當題目出現「迷路遇險求生「333 原則」中最致命首要威脅」時，立即啟動「失溫 (Hypothermia)！3小時失溫即可致命，故求生第一要務是防風防雨保暖與保持乾燥」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "國際標準哨音求救信號",
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
    "title": "國際標準哨音求救信號",
    "category": "綜合・生活實用與避雷",
    "badgeColor": "emerald",
    "definition": "國際標準哨音求救信號：每分鐘規律吹響 6 聲長音，暫停 1 分鐘後再次重複；千萬不可沿著未知的危險溪谷往下盲走。",
    "formulaOrRule": "核心工具與心法：「趴下、掩護、穩住」保護頭頸部，切勿慌亂衝出室外或盲目跑向電梯",
    "strategyTip": "【審題觸發】當題目出現「地震發生瞬間首要避難動作」時，立即啟動「「趴下、掩護、穩住」保護頭頸部，切勿慌亂衝出室外或盲目跑向電梯」解題。考前速記：冷靜審題，標記關鍵字，列式代入驗算。",
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
        "title": "野外迷路求生 333 原則",
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
