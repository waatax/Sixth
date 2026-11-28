// Video IDs and runtimes from the WL 學習頻道 playlist and channel uploads.
export const reviewPlaylistUrl = 'https://www.youtube.com/playlist?list=PLKAsf0i3y-uk';

const videosByExam = {
  'math/6A/midterm': { aligned: { id: 'tuiGbOLC8Yo', seconds: 209 }, full: { id: '6Q3YRq_-9W0', seconds: 2680 } },
  'math/6A/final': { aligned: { id: 'CzxHUrfxkLk', seconds: 205 }, full: { id: 'tUNjRmoZU_8', seconds: 2326 } },
  'math/6B/midterm': { aligned: { id: 'FIRhvSJYuFc', seconds: 201 }, full: { id: 'HDOmJXDFV5Q', seconds: 2281 } },
  'math/6B/final': { aligned: { id: 'u8d_VakMP3w', seconds: 215 }, full: { id: 'd-WI1OjCTv0', seconds: 2577 } },
  'science/6A/midterm': { aligned: { id: 'VjEoyp92Xz0', seconds: 212 }, full: { id: 'b5vl51WjUB8', seconds: 3202 } },
  'science/6A/final': { aligned: { id: 'cX0kxk-01TE', seconds: 138 }, full: { id: 'dAQDofi7rPQ', seconds: 2345 } },
  'science/6B/midterm': { aligned: { id: 'a-nRFv00Asc', seconds: 199 }, full: { id: 'r82yDJic0O0', seconds: 3314 } },
  'science/6B/final': { aligned: { id: 'F6c1tg_it9A', seconds: 149 }, full: { id: 'QfC-qgZVt2M', seconds: 2170 } },
  'mandarin/6A/midterm': { aligned: { id: '6XNe2XhEs64', seconds: 124 }, full: { id: '4Vq1TJqGifE', seconds: 2219 } },
  'mandarin/6A/final': { aligned: { id: 'z0Fna1_nmmo', seconds: 122 }, full: { id: 'mBgeQW-ct74', seconds: 1994 } },
  'mandarin/6B/midterm': { aligned: { id: 'i7MTvn2EEc0', seconds: 125 }, full: { id: 'b2BXPtIlaiA', seconds: 2032 } },
  'mandarin/6B/final': { aligned: { id: 'bO3P5PKWsGE', seconds: 121 }, full: { id: '3vQMnGDhYc4', seconds: 2053 } },
  'social/6A/midterm': { aligned: { id: 'FKOaeINLwXQ', seconds: 122 }, full: { id: 'mHCCugP_QIE', seconds: 2129 } },
  'social/6A/final': { aligned: { id: 'IkGwOo-otk0', seconds: 128 }, full: { id: 'x9_qvfiXOs4', seconds: 2231 } },
  'social/6B/midterm': { aligned: { id: 'Z0CZ1a0vCcU', seconds: 124 }, full: { id: 'zo3T7U0GXMc', seconds: 2291 } },
  'social/6B/final': { aligned: { id: 'vNWYHlgsieA', seconds: 129 }, full: { id: 'J6hu0PvIK0I', seconds: 2374 } },
  'english/6A/midterm': { aligned: { id: 'WDvZV0AQl5k', seconds: 104 }, full: { id: '2NR0HVvB0WY', seconds: 1966 } },
  'english/6A/final': { aligned: { id: 'G_KsJhI8f7Y', seconds: 112 }, full: { id: 'wA3yX7lNLNQ', seconds: 1670 } },
  'english/6B/midterm': { aligned: { id: 'IBi0uXAV2Xw', seconds: 116 }, full: { id: 'laNZUGhewZI', seconds: 1869 } },
  'english/6B/final': { aligned: { id: '3n5j_yz4zw0', seconds: 110 }, full: { id: 'hAtbII-90BE', seconds: 1770 } },
  'arts/6A/midterm': { aligned: { id: 'UcTOpM9Hsl0', seconds: 122 }, full: { id: 'B27t2kYfipc', seconds: 1999 } },
  'arts/6A/final': { aligned: { id: '7wGkikHnPy4', seconds: 69 }, full: { id: 'vMTedc5zPTk', seconds: 1114 } },
  'arts/6B/midterm': { aligned: { id: 'VLsW_umKZN0', seconds: 116 }, full: { id: 'o1N6fuwA4ek', seconds: 2017 } },
  'arts/6B/final': { aligned: { id: 'voCLQeRyXPw', seconds: 66 }, full: { id: 'dLNsUshzhno', seconds: 1033 } },
  'health_pe/6A/midterm': { aligned: { id: '2kxperCFVYM', seconds: 126 }, full: { id: 'T06FGVec6tM', seconds: 2152 } },
  'health_pe/6A/final': { aligned: { id: 'AUlWhJBVURA', seconds: 67 }, full: { id: 'Hde93IBOZkE', seconds: 1101 } },
  'health_pe/6B/midterm': { aligned: { id: 'DMFVSgUJF2g', seconds: 126 }, full: { id: 's5wbAJrjSPY', seconds: 2105 } },
  'health_pe/6B/final': { aligned: { id: 'rnjbBMPOYLI', seconds: 65 }, full: { id: 'Ie2RBVeUX9U', seconds: 1230 } },
  'integrative/6A/midterm': { aligned: { id: 'am4AE2gjdOA', seconds: 121 }, full: { id: 'U630eh0Vk24', seconds: 2021 } },
  'integrative/6A/final': { aligned: { id: 'hXCUy-RCLOg', seconds: 64 }, full: { id: 'FjrO_Dp9iVg', seconds: 1179 } },
  'integrative/6B/midterm': { aligned: { id: 'TLsZGCm3qvA', seconds: 121 }, full: { id: 'mr8bqjVDHw4', seconds: 2139 } },
  'integrative/6B/final': { aligned: { id: 'yooJB0bfnKg', seconds: 72 }, full: { id: 'i4xVqYBPbsI', seconds: 1185 } },
};

export function getReviewVideos(subject, semester, scope) {
  const scopes = scope === 'all' ? ['midterm', 'final'] : [scope];
  return scopes.flatMap((examScope) => {
    const videos = videosByExam[`${subject}/${semester}/${examScope}`];
    if (!videos) return [];
    const exam = examScope === 'midterm' ? '期中考' : semester === '6B' ? '畢業考' : '期末考';
    return [{ ...videos, exam, scope: examScope }];
  });
}

export function reviewVideoWatchUrl(id, start = 0) {
  return `https://www.youtube.com/watch?v=${id}${start > 0 ? `&t=${start}s` : ''}`;
}
