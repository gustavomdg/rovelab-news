// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-10-09T19:58:51.927Z

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
    slug: `latest-oil-market-news-and-analysis-for-oct-9-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Latest Oil Market News and Analysis for Oct. 9`,
    summary: `Oil ticked higher as the prospect of a wave of Russian diesel hitting global markets competed with mounting supply risks, from fresh tanker attacks in the Strait of Hormuz to a hurricane in the…`,
    body: [
      `Oil ticked higher as the prospect of a wave of Russian diesel hitting global markets competed with mounting supply risks, from fresh tanker attacks in the Strait of Hormuz to a hurricane in the US.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 8, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-10-08/latest-oil-market-news-and-analysis-for-oct-9`,
  },
  {
    slug: `stock-market-today-stocks-advance-as-tech-shakes-off-th-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Stocks Advance as Tech Shakes Off Thursday Selloff`,
    summary: `Dollar set for fourth straight week of gains on higher Fed rate…`,
    body: [
      `Dollar set for fourth straight week of gains on higher Fed rate expectations`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 9, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-10-09-2026?mod=rss_markets_main`,
  },
  {
    slug: `pitching-in-fundraising-for-princess-margaret-hospital-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Pitching in: Fundraising for Princess Margaret Hospital one goal at a time`,
    summary: `John Brezina started out playing in road hockey tournaments that benefit the hospital as a hobby, but it is now his…`,
    body: [
      `John Brezina started out playing in road hockey tournaments that benefit the hospital as a hobby, but it is now his passion`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 9, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-pitching-in-fundraising-princess-margaret-hospital-hockey-tournament/`,
  },
  {
    slug: `five-ways-to-tell-if-market-trouble-lies-ahead-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Five ways to tell if market trouble lies ahead`,
    summary: `The cost of credit default swaps for AI companies looking to borrow is…`,
    body: [
      `The cost of credit default swaps for AI companies looking to borrow is rising`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 9, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/financial-times/five-ways-to-tell-if-market-trouble-lies-ahead`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
