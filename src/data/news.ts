// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-08-31T20:37:23.345Z

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
    slug: `strategy-restarts-bitcoin-buying-spending-370-million-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Strategy Restarts Bitcoin Buying, Spending $370 Million`,
    summary: `Strategy Inc. resumed Bitcoin purchases after a 10-week pause, returning to its signature accumulation strategy after the crypto bear market pressured its shares, weakened confidence in the financing model and prompted…`,
    body: [
      `Strategy Inc.`,
      `resumed Bitcoin purchases after a 10-week pause, returning to its signature accumulation strategy after the crypto bear market pressured its shares, weakened confidence in the financing model and prompted a balance-sheet overhaul.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 31, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-08-31/saylor-s-strategy-restarts-bitcoin-buying-spending-370-million`,
  },
  {
    slug: `stock-market-today-dow-falls-oil-climbs-on-fresh-mideas-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Dow Falls, Oil Climbs on Fresh Mideast Flare-Up`,
    summary: `Renewed fighting in the Strait of Hormuz sends Brent crude futures back above $90 a…`,
    body: [
      `Renewed fighting in the Strait of Hormuz sends Brent crude futures back above $90 a barrel`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 31, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-08-31-2026?mod=rss_markets_main`,
  },
  {
    slug: `alberta-data-centre-could-cause-power-bills-to-spike-re-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Alberta data centre could cause power bills to spike, report says`,
    summary: `Meta’s $13-billion data centre will be equivalent to adding a city the size of Calgary to the grid, think tank…`,
    body: [
      `Meta’s $13-billion data centre will be equivalent to adding a city the size of Calgary to the grid, think tank says`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 31, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-alberta-data-centre-could-cause-power-bills-to-spike-report/`,
  },
  {
    slug: `lenovo-labour-day-sale-makes-it-easier-to-find-the-righ-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Lenovo Labour Day Sale Makes It Easier to Find the Right Tech for Work, School and Play`,
    summary: `RESEARCH TRIANGLE PARK, N.C. &#8212; Lenovo is marking Labour Day with two weeks of savings designed to help customers upgrade the technology they rely on every day. From August 31 through September 13, shoppers can…`,
    body: [
      `RESEARCH TRIANGLE PARK, N. C.`,
      `&#8212; Lenovo is marking Labour Day with two weeks of savings designed to help customers upgrade the technology they rely on every day.  From August 31 through September 13, shoppers can find special offers across laptops, gaming PCs, tablets, monitors and accessories at Lenovo.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 31, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/pmn/business-wire-news-releases-pmn/lenovo-labour-day-sale-makes-it-easier-to-find-the-right-tech-for-work-school-and-play`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
