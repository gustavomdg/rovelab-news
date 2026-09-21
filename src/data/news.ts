// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-09-21T19:51:09.748Z

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
    slug: `meta-tech-stocks-lift-sp-500-to-best-day-since-august-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Meta, Tech Stocks Lift S&P 500 to Best Day Since August`,
    summary: `Strength in the tech sector lifted US stock benchmarks toward their best session since early August as oil prices slide and officials signaled optimism about a summit between US President Donald Trump and China’s Xi…`,
    body: [
      `Strength in the tech sector lifted US stock benchmarks toward their best session since early August as oil prices slide and officials signaled optimism about a summit between US President Donald Trump and China’s Xi Jinping this week.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 21, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-09-21/us-stock-futures-climb-ahead-of-trump-xi-meeting-as-oil-slips`,
  },
  {
    slug: `stock-market-today-drop-in-oil-prices-unlocks-rally-in-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Drop in Oil Prices Unlocks Rally in Tech Shares`,
    summary: `Nasdaq jumps 2% toward record, Brent crude trades back down to…`,
    body: [
      `Nasdaq jumps 2% toward record, Brent crude trades back down to $100`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 21, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-09-21-2026?mod=rss_markets_main`,
  },
  {
    slug: `ontario-fines-stubhub-20000-under-new-law-capping-ticke-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Ontario fines StubHub $20,000 under new law capping ticket resale prices`,
    summary: `Provincial website does not specify what events the penalties were linked…`,
    body: [
      `Provincial website does not specify what events the penalties were linked to`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 21, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-ontario-fines-stubhub-20000-under-new-law-capping-ticket-resale-prices/`,
  },
  {
    slug: `bitcoin-jumps-to-over-us84800-after-etf-flows-turn-posi-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Bitcoin jumps to over US$84,800 after ETF flows turn positive`,
    summary: `'The crypto market capitalization has risen to US$2.8 trillion, its highest level since the end of January this…`,
    body: [
      `'The crypto market capitalization has risen to US$2.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 21, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/fp-finance/cryptocurrency/bitcoin-jumps-after-etf-flows-turn-positive`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
