// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-09-09T18:16:39.099Z

export interface NewsItem {
  slug: string;
  source: string;
  sourceUrl: string;
  flag: string;
  market: string;
  tag: string;
  title: string;
  summary: string;
  body: string[];
  date: string;
  readTime: string;
  url: string;
}

export const newsItems: NewsItem[] = [
  {
    slug: `comcast-slides-after-cfo-says-broadband-user-losses-to-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Comcast Slides After CFO Says Broadband User Losses to Persist`,
    summary: `Comcast Corp. shares slid Wednesday after Chief Financial Officer Jason Armstrong said he sees no improvement for the third quarter in broadband subscriber losses with competitors offering terms that are luring…`,
    body: [
      `Comcast Corp.`,
      `shares slid Wednesday after Chief Financial Officer Jason Armstrong said he sees no improvement for the third quarter in broadband subscriber losses with competitors offering terms that are luring customers away.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 9, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-09-09/comcast-shares-slide-as-cfo-sees-internet-prices-irrational`,
  },
  {
    slug: `stock-market-today-10-year-yield-jumps-as-treasuryaposs-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: 10-Year Yield Jumps as Treasury&apos;s Buyback Plan Disappoints Investors`,
    summary: `Plan is smaller than some expected; yield near 4.85% is highest since…`,
    body: [
      `Plan is smaller than some expected; yield near 4.85% is highest since 2023`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 9, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-09-09-2026?mod=rss_markets_main`,
  },
  {
    slug: `apple-expected-to-unveil-biggest-iphone-overhaul-in-yea-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Apple expected to unveil biggest iPhone overhaul in years`,
    summary: `First product launch under new CEO John Ternus began with a look at the iPhone 18 Pro…`,
    body: [
      `First product launch under new CEO John Ternus began with a look at the iPhone 18 Pro handsets`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 9, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/technology/article-apple-new-folding-phone-launch-event-ceo-john-ternus/`,
  },
  {
    slug: `dark-horse-consulting-group-marks-the-opening-of-its-sh-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Dark Horse Consulting Group Marks the Opening of Its Shanghai Office with Ribbon Cutting Ceremony`,
    summary: `WALNUT CREEK, Calif. and SHANGHAI, Sept. 09, 2026 (GLOBE NEWSWIRE) &#8212; Dark Horse Consulting Group (DHCG) marked the opening of its Shanghai office with a ribbon cutting ceremony celebrating Dark Horse Consulting…`,
    body: [
      `WALNUT CREEK, Calif.  and SHANGHAI, Sept.`,
      `09, 2026 (GLOBE NEWSWIRE) &#8212; Dark Horse Consulting Group (DHCG) marked the opening of its Shanghai office with a ribbon cutting ceremony celebrating Dark Horse Consulting China.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 9, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/dark-horse-consulting-group-marks-the-opening-of-its-shanghai-office-with-ribbon-cutting-ceremony`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
