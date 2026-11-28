// Public review videos confirmed by title and runtime in the WL 學習頻道 playlist.

const videosByExam = {
  'math/6A/midterm': { knowledge: { id: 'NcFOX3MYZVw', seconds: 1129 }, full: { id: '6Q3YRq_-9W0', seconds: 2680 } },
  'math/6A/final': { knowledge: { id: 'rIQntIvsD_g', seconds: 1143 }, full: { id: 'tUNjRmoZU_8', seconds: 2326 } },
  'math/6B/midterm': { knowledge: { id: 'Nn6lSjW4PZU', seconds: 1117 }, full: { id: 'HDOmJXDFV5Q', seconds: 2281 } },
  'math/6B/final': { knowledge: { id: '2My0R8g_fCA', seconds: 1152 }, full: { id: 'd-WI1OjCTv0', seconds: 2577 } },
  'science/6A/midterm': { knowledge: { id: 'NDg5nqhCdPU', seconds: 1213 }, full: { id: 'b5vl51WjUB8', seconds: 3202 } },
  'science/6A/final': { knowledge: { id: 'YQ4Z8pHGvo0', seconds: 1206 }, full: { id: 'dAQDofi7rPQ', seconds: 2345 } },
  'science/6B/midterm': { knowledge: { id: 'exW27IB2T-Y', seconds: 1180 }, full: { id: 'r82yDJic0O0', seconds: 3314 } },
  'science/6B/final': { knowledge: { id: 'i6ACIpupch0', seconds: 1178 }, full: { id: 'QfC-qgZVt2M', seconds: 2170 } },
  'mandarin/6A/midterm': { knowledge: { id: '3zp2P4nUSDA', seconds: 1202 }, full: { id: '4Vq1TJqGifE', seconds: 2219 } },
  'mandarin/6A/final': { knowledge: { id: 'WP7wX4Pvgak', seconds: 1192 }, full: { id: 'mBgeQW-ct74', seconds: 1994 } },
  'mandarin/6B/midterm': { knowledge: { id: 'TNoKboTH2No', seconds: 1168 }, full: { id: 'b2BXPtIlaiA', seconds: 2032 } },
  'mandarin/6B/final': { knowledge: { id: 'LCWePyNpi84', seconds: 1205 }, full: { id: '3vQMnGDhYc4', seconds: 2053 } },
  'social/6A/midterm': { knowledge: { id: 'V5-n094BOVQ', seconds: 1186 }, full: { id: 'mHCCugP_QIE', seconds: 2129 } },
  'social/6A/final': { knowledge: { id: '61bPHLh97Jo', seconds: 1177 }, full: { id: 'x9_qvfiXOs4', seconds: 2231 } },
  'social/6B/midterm': { knowledge: { id: 'suzXjYOP6LU', seconds: 1162 }, full: { id: 'zo3T7U0GXMc', seconds: 2291 } },
  'social/6B/final': { knowledge: { id: 'hT-JtBLptLU', seconds: 1205 }, full: { id: 'J6hu0PvIK0I', seconds: 2374 } },
  'english/6A/midterm': { knowledge: { id: 'HKFfYBhw_zs', seconds: 1171 }, full: { id: '2NR0HVvB0WY', seconds: 1966 } },
  'english/6A/final': { knowledge: { id: 'VlqE2pzxpQM', seconds: 1082 }, full: { id: 'wA3yX7lNLNQ', seconds: 1670 } },
  'english/6B/midterm': { knowledge: { id: '27HJeD3xsTA', seconds: 1094 }, full: { id: 'laNZUGhewZI', seconds: 1869 } },
  'english/6B/final': { knowledge: { id: 'UG0a8hi9SQk', seconds: 1089 }, full: { id: 'hAtbII-90BE', seconds: 1770 } },
  'arts/6A/midterm': { knowledge: { id: 'hGF2z_fJCVo', seconds: 1204 }, full: { id: 'B27t2kYfipc', seconds: 1999 } },
  'arts/6A/final': { knowledge: { id: 'i0fFOXWEGgM', seconds: 1073 }, full: { id: 'vMTedc5zPTk', seconds: 1114 } },
  'arts/6B/midterm': { knowledge: { id: 'RJBgQ036ttU', seconds: 1212 }, full: { id: 'o1N6fuwA4ek', seconds: 2017 } },
  'arts/6B/final': { knowledge: { id: 'UvKvUzLY24E', seconds: 1150 }, full: { id: 'dLNsUshzhno', seconds: 1033 } },
  'health_pe/6A/midterm': { knowledge: { id: 'heUIsUUUEiw', seconds: 1182 }, full: { id: 'T06FGVec6tM', seconds: 2152 } },
  'health_pe/6A/final': { knowledge: { id: 'lF0ul_yQ_Cw', seconds: 1199 }, full: { id: 'Hde93IBOZkE', seconds: 1101 } },
  'health_pe/6B/midterm': { knowledge: { id: 'sCNNPvQoJbk', seconds: 1220 }, full: { id: 's5wbAJrjSPY', seconds: 2105 } },
  'health_pe/6B/final': { knowledge: { id: 'zdSxxwdwtV0', seconds: 1089 }, full: { id: 'Ie2RBVeUX9U', seconds: 1230 } },
  'integrative/6A/midterm': { knowledge: { id: 'ZMD08PXVQ1k', seconds: 1153 }, full: { id: 'U630eh0Vk24', seconds: 2021 } },
  'integrative/6A/final': { knowledge: { id: '6XPYPaFdCxw', seconds: 1093 }, full: { id: 'FjrO_Dp9iVg', seconds: 1179 } },
  'integrative/6B/midterm': { knowledge: { id: 'juqmkDX4Ik0', seconds: 1181 }, full: { id: 'mr8bqjVDHw4', seconds: 2139 } },
  'integrative/6B/final': { knowledge: { id: 'isLuSTYpkDM', seconds: 1099 }, full: { id: 'i4xVqYBPbsI', seconds: 1185 } },
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
