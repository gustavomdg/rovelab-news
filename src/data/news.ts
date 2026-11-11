// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-11-11T21:42:42.307Z

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
    slug: `nasdaq-100-rallies-as-coreweave-quells-ai-fears-draws-b-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Nasdaq 100 Rallies as CoreWeave Quells AI Fears, Draws Buyers In`,
    summary: `US technology stocks rallied Wednesday, with the technology-heavy Nasdaq 100 index nearly erasing losses since the US midterm election, as renewed excitement over the artificial intelligence trade lured dip buyers…`,
    body: [
      `US technology stocks rallied Wednesday, with the technology-heavy Nasdaq 100 index nearly erasing losses since the US midterm election, as renewed excitement over the artificial intelligence trade lured dip buyers in.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 11, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-11-11/us-equity-futures-rise-as-ai-enthusiasm-counters-hot-inflation`,
  },
  {
    slug: `stock-market-today-coreweave-shares-jump-re-energizing-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: CoreWeave Shares Jump, Re-Energizing the AI Trade`,
    summary: `Cloud provider&apos;s latest update reassures investors; Nasdaq rises…`,
    body: [
      `Cloud provider&apos;s latest update reassures investors; Nasdaq rises 1.6%`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 11, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-11-11-2026?mod=rss_markets_main`,
  },
  {
    slug: `emerge-canada-senior-executives-improperly-borrowed-mil-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Emerge Canada, senior executives improperly borrowed millions from ETFs, securities watchdog rules`,
    summary: `Most of the money has not been repaid and investors remain unsecured…`,
    body: [
      `Most of the money has not been repaid and investors remain unsecured creditors`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 10, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-emerge-canada-senior-executives-improperly-borrowed-millions-from-etfs/`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
