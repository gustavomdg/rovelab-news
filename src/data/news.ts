// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-11-06T20:40:51.894Z

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
    slug: `copper-moves-lower-as-us-election-undermines-ai-and-tar-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Copper Moves Lower as US Election Undermines AI and Tariff Trade`,
    summary: `Copper slumped to its lowest since July as a political shakeup in Washington threatened to blunt two key bullish drivers: the rapid buildout of AI infrastructure, and the risk of US import tariffs on the…`,
    body: [
      `Copper slumped to its lowest since July as a political shakeup in Washington threatened to blunt two key bullish drivers: the rapid buildout of AI infrastructure, and the risk of US import tariffs on the metal.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 6, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-11-06/copper-moves-lower-as-us-election-undermines-ai-and-tariff-trade`,
  },
  {
    slug: `stock-market-today-ai-stocks-rebound-after-brutal-week-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: AI Stocks Rebound After Brutal Week for Nasdaq`,
    summary: `Tech stocks narrow yesterday&apos;s losses; Dow lags…`,
    body: [
      `Tech stocks narrow yesterday&apos;s losses; Dow lags behind`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 6, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/october-jobs-report-stock-market-11-06-2026?mod=rss_markets_main`,
  },
  {
    slug: `for-oil-markets-trump-is-anything-but-a-lame-duck-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `For oil markets, Trump is anything but a lame duck`,
    summary: `After his party took a drubbing in the midterms, angry U.S. President may well turn to Iran to lash…`,
    body: [
      `After his party took a drubbing in the midterms, angry U.`,
      `S.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 6, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/commentary/article-for-oil-markets-trump-is-anything-but-a-lame-duck/`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
