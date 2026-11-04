// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-11-04T21:02:01.059Z

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
    slug: `wall-street-revises-treasury-sales-forecasts-on-guidanc-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Wall Street Revises Treasury Sales Forecasts on Guidance Revamp`,
    summary: `Wall Street strategists are rejigging forecasts for US borrowing next year after the Treasury signaled that changes to auction sizes for notes and bonds are on the…`,
    body: [
      `Wall Street strategists are rejigging forecasts for US borrowing next year after the Treasury signaled that changes to auction sizes for notes and bonds are on the horizon.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 4, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-11-04/wall-street-revises-treasury-sales-forecasts-on-guidance-revamp`,
  },
  {
    slug: `stock-market-today-dow-jumps-more-than-1500-points-oil-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Dow Jumps More Than 1,500 Points, Oil Slides After Democrats Sweep Congress`,
    summary: `Crude drops 8% on hopes of Iran war ending; Nasdaq, S&P 500…`,
    body: [
      `Crude drops 8% on hopes of Iran war ending; Nasdaq, S&P 500 rally`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 4, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-11-04-2026?mod=rss_markets_main`,
  },
  {
    slug: `what-role-did-the-canada-us-trade-war-play-in-some-key-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `What role did the Canada-U.S. trade war play in some key midterm races?`,
    summary: `Tariffs have caused economic strain in five tossup states that were up for grabs in the…`,
    body: [
      `Tariffs have caused economic strain in five tossup states that were up for grabs in the Senate`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 4, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-canada-us-trade-tariffs-midterms-michigan-texas/`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
