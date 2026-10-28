// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-10-28T20:02:21.668Z

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
    slug: `stocks-drift-after-fed-decision-as-oracle-surges-market-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Stocks Drift After Fed Decision as Oracle Surges: Markets Wrap`,
    summary: `Stocks churned after the Federal Reserve held rates steady, but refrained from offering a clear signal on whether it will hike in…`,
    body: [
      `Stocks churned after the Federal Reserve held rates steady, but refrained from offering a clear signal on whether it will hike in December.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 27, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-10-27/stock-market-today-dow-s-p-live-updates`,
  },
  {
    slug: `stock-market-today-interest-rates-hold-steady-two-offic-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Interest Rates Hold Steady; Two Officials Sought Hike`,
    summary: `Central bank will vote on rates at seven of eight meetings next year, Warsh says, then drop to six in…`,
    body: [
      `Central bank will vote on rates at seven of eight meetings next year, Warsh says, then drop to six in 2028`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 28, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/fed-meeting-interest-rate-decision-10-28-2026?mod=rss_markets_main`,
  },
  {
    slug: `air-canadas-proposed-route-deal-with-united-could-lead-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Air Canada’s proposed route deal with United could lead to higher airfares, watchdog warns`,
    summary: `Competition Bureau submits report to Transport Minister, who has authority to veto the…`,
    body: [
      `Competition Bureau submits report to Transport Minister, who has authority to veto the proposal`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 28, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-air-canada-united-airlines-partnership-competition-bureau/`,
  },
  {
    slug: `banks-raise-prime-rate-after-bank-of-canada-interest-ra-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Banks raise prime rate after Bank of Canada interest rate increase`,
    summary: `Prime rises by 25 basis points to 4.70 per…`,
    body: [
      `Prime rises by 25 basis points to 4.70 per cent`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 28, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/fp-finance/banking/banks-raise-prime-rate-after-bank-of-canada-interest-rate-increase`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
