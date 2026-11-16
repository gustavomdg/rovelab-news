// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-11-16T23:37:49.687Z

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
    slug: `latest-oil-market-news-and-analysis-for-nov-17-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Latest Oil Market News and Analysis for Nov. 17`,
    summary: `Oil fell on signs supplies are outpacing demand, and as Vice President JD Vance signaled the US wants to avoid a prolonged war in…`,
    body: [
      `Oil fell on signs supplies are outpacing demand, and as Vice President JD Vance signaled the US wants to avoid a prolonged war in Iran.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 16, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-11-16/latest-oil-market-news-and-analysis-for-nov-17`,
  },
  {
    slug: `stock-market-today-nasdaq-slides-25-as-nvidia-drama-con-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Nasdaq Slides 2.5% as Nvidia Drama Continues`,
    summary: `U.S. moves to crack down on overseas players accessing advanced AI chips remotely; bitcoin under…`,
    body: [
      `U.`,
      `S.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 16, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-11-16-2026?mod=rss_markets_main`,
  },
  {
    slug: `united-airlines-resolves-issue-that-delayed-departing-f-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `United Airlines resolves issue that delayed departing flights`,
    summary: `Flight tracking website FlightAware showed United with 418 delayed flights late Monday…`,
    body: [
      `Flight tracking website FlightAware showed United with 418 delayed flights late Monday afternoon`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 16, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/world/article-united-airlines-failure-ground-stop/`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
