// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-11-09T23:40:46.676Z

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
    slug: `asian-stocks-to-rally-on-us-tech-surge-oil-slump-market-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Asian Stocks to Rally on US Tech Surge, Oil Slump: Markets Wrap`,
    summary: `Asian stocks were poised to track Wall Street higher as a rally in technology shares and a slump in oil prices drove US benchmarks to their best day in seven…`,
    body: [
      `Asian stocks were poised to track Wall Street higher as a rally in technology shares and a slump in oil prices drove US benchmarks to their best day in seven months.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 9, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-11-09/stock-market-today-dow-s-p-live-updates`,
  },
  {
    slug: `stock-market-today-nvidia-stock-slides-after-chip-maker-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Nvidia Stock Slides After Chip Maker Opens Probe`,
    summary: `Dow jumps more than 1,100 points, Nasdaq rallies as stocks rebound after last week&apos;s…`,
    body: [
      `Dow jumps more than 1,100 points, Nasdaq rallies as stocks rebound after last week&apos;s rout`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 9, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-11-09-2026?mod=rss_markets_main`,
  },
  {
    slug: `honda-to-retool-ontario-plant-as-part-of-867-million-go-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Honda to retool Ontario plant as part of $867-million, government-backed plan`,
    summary: `Carmaker will invest $166-million to restart engine production in Alliston; federal and Ontario governments to provide $313-million and $156-million,…`,
    body: [
      `Carmaker will invest $166-million to restart engine production in Alliston; federal and Ontario governments to provide $313-million and $156-million, respectively`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 9, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-honda-alliston-engine-factory-investment-hybrid-gas-cars/`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
