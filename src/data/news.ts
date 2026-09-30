// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-09-30T19:46:53.789Z

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
    slug: `paramount-raises-30-billion-from-investment-grade-bond-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Paramount Raises $30 Billion From Investment-Grade Bond Offering`,
    summary: `Paramount Skydance Corp. has sold $30 billion of US dollar investment-grade bonds, getting the biggest piece of the financing for its buyout of Warner Bros. Discovery Inc. across the finish…`,
    body: [
      `Paramount Skydance Corp.  has sold $30 billion of US dollar investment-grade bonds, getting the biggest piece of the financing for its buyout of Warner Bros.`,
      `Discovery Inc.  across the finish line.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 30, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-09-30/paramount-cuts-pricing-on-30-billion-high-grade-bond-sale`,
  },
  {
    slug: `stock-market-today-10-year-treasury-yield-rises-to-new-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: 10-Year Treasury Yield Rises to New 24-Year High`,
    summary: `Nasdaq gains after second-quarter GDP growth revised to…`,
    body: [
      `Nasdaq gains after second-quarter GDP growth revised to 2.2%`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 30, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-09-30-2026?mod=rss_markets_main`,
  },
  {
    slug: `ftc-opens-probe-into-openai-anthropic-and-other-ai-gian-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `FTC opens probe into OpenAI, Anthropic and other AI giants`,
    summary: `Regulator plan to compel information from leading AI firms as they examine the risks posed by increasingly autonomous AI…`,
    body: [
      `Regulator plan to compel information from leading AI firms as they examine the risks posed by increasingly autonomous AI systems`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 30, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-ftc-opens-probe-into-openai-anthropic-and-other-ai-giants/`,
  },
  {
    slug: `commission-recommends-first-quantum-restart-copper-mine-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Commission recommends First Quantum restart copper mine to fund future wind-down`,
    summary: `With the commission’s report in hand, next steps and final decisions around Cobre Panama’s fate is up to the country's…`,
    body: [
      `With the commission’s report in hand, next steps and final decisions around Cobre Panama’s fate is up to the country's president`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 30, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/commodities/mining/commission-recommends-first-quantum-restart-copper-mine-fund-wind-down`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
