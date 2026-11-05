// 內容資料共用工具：group 讓同題型的題目共用「題型／考什麼」。
export const group = (type, test, qs) => qs.map((q) => ({ ...q, type, test }));
export const frac = (a, b) => `$\\frac{${a}}{${b}}$`;
export const mixed = (w, a, b) => `$${w}\\frac{${a}}{${b}}$`;
