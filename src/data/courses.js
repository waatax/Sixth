export const coursesData = {
  subjects: [
    { id: 'math', name: '數學', icon: 'Calculator', color: 'hsl(215, 80%, 50%)' },
    { id: 'science', name: '自然科學', icon: 'Microscope', color: 'hsl(150, 60%, 40%)' },
    { id: 'mandarin', name: '國語文', icon: 'BookOpen', color: 'hsl(25, 80%, 50%)' }
  ],
  versions: ['康軒版', '南一版', '翰林版'],
  units: {
    math: [
      {
        id: 'math-u1',
        title: '最大公因數與最小公倍數',
        description: '了解質數、合數，並學習如何找最大公因數與最小公倍數。',
        videoUrl: 'https://www.youtube.com/embed/example1', // Placeholder for Junyi
        keyConcepts: ['質因數分解', '短除法', '應用問題（如分裝、排隊）']
      },
      {
        id: 'math-u2',
        title: '分數與小數四則運算',
        description: '熟練分數與小數的混合運算，並能解決生活中的問題。',
        videoUrl: 'https://www.youtube.com/embed/example2',
        keyConcepts: ['通分與約分', '先乘除後加減', '小數點對齊']
      }
    ],
    science: [
      {
        id: 'sci-u1',
        title: '天氣的變化',
        description: '認識各種天氣現象、天氣預報圖與颱風。',
        videoUrl: 'https://www.youtube.com/embed/example3',
        keyConcepts: ['高氣壓與低氣壓', '鋒面', '颱風的形成與防範']
      }
    ]
  },
  questionBanks: [
    {
      id: 'qb-1',
      title: '112學年度 第一學期 數學科 第一次段考',
      source: '中小學題庫網精選',
      type: 'pdf',
      subject: 'math'
    },
    {
      id: 'qb-2',
      title: '112學年度 第二學期 自然科 期末考',
      source: '各校公開試題',
      type: 'pdf',
      subject: 'science'
    }
  ]
};
