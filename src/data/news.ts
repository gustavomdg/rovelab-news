// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-08-14T15:47:04.930Z

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
    slug: `dollar-touches-lowest-since-may-as-retail-data-dims-fed-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Dollar Touches Lowest Since May as Retail Data Dims Fed Bets`,
    summary: `The dollar fell to the lowest since May after an unexpectedly weak report on US retail sales dimmed expectations for an interest-rate hike from the Federal…`,
    body: [
      `The dollar fell to the lowest since May after an unexpectedly weak report on US retail sales dimmed expectations for an interest-rate hike from the Federal Reserve.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 14, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-08-14/dollar-slides-to-may-low-as-weak-retail-sales-dim-rate-bets`,
  },
  {
    slug: `stock-market-today-sp-slips-back-from-records-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: S&P Slips Back From Records`,
    summary: `U.S. retail sales slid in…`,
    body: [
      `U.S. retail sales slid in July`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 14, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-08-14-2026?mod=rss_markets_main`,
  },
  {
    slug: `fairfax-financial-sells-out-of-blackberry-after-16-year-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Fairfax Financial sells out of BlackBerry after 16 years, booking loss of at least $288-million`,
    summary: `Financial conglomerate exits stock just as Canadian tech stalwart is taking off…`,
    body: [
      `Financial conglomerate exits stock just as Canadian tech stalwart is taking off again`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 14, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-fairfax-financial-sells-out-of-blackberry-at-a-steep-loss/`,
  },
  {
    slug: `court-approves-45-million-settlement-in-westjet-flight-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Court approves $4.5 million settlement in WestJet flight attendant harassment suit, says law firm`,
    summary: `Class action could award about $470 to each eligible employee, say…`,
    body: [
      `Class action could award about $470 to each eligible employee, say lawyers`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 14, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/transportation/airlines/court-approves-4-5-million-settlement-in-westjet-flight-attendant-harassment-suit-says-law-firm`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
