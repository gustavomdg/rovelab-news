// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-11-02T22:59:05.735Z

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
    slug: `nasdaq-slide-clouds-asian-open-oil-falls-on-iran-market-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Nasdaq Slide Clouds Asian Open, Oil Falls on Iran: Markets Wrap`,
    summary: `Asian technology stocks looked set for losses Tuesday after a selloff in US chipmakers deepened, overshadowing a plunge in oil prices on hopes for diplomatic progress toward ending the war in…`,
    body: [
      `Asian technology stocks looked set for losses Tuesday after a selloff in US chipmakers deepened, overshadowing a plunge in oil prices on hopes for diplomatic progress toward ending the war in Iran.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 2, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-11-02/stock-market-today-dow-s-p-live-updates`,
  },
  {
    slug: `stock-market-today-apple-stock-slips-after-earnings-nas-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Apple Stock Slips After Earnings; Nasdaq Falls`,
    summary: `Oil slides amid signs U.S., Iran could consider…`,
    body: [
      `Oil slides amid signs U.S., Iran could consider diplomacy`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 2, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-11-02-2026?mod=rss_markets_main`,
  },
  {
    slug: `canada-must-stand-with-europe-against-us-big-tech-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Canada must stand with Europe against U.S. Big Tech`,
    summary: `Ottawa has a great opportunity to collaborate with the EU on tech and regulations at upcoming…`,
    body: [
      `Ottawa has a great opportunity to collaborate with the EU on tech and regulations at upcoming summit`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 26, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/commentary/article-canada-must-stand-with-europe-against-us-big-tech/`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
