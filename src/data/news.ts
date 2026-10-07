// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-10-07T20:23:45.214Z

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
    slug: `stocks-fall-from-all-time-highs-on-inflation-worry-mark-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Stocks Fall From All-Time Highs on Inflation Worry: Markets Wrap`,
    summary: `A record-breaking run in stocks hit a wall as still-elevated oil prices stoked concerns that potential inflationary pressures could trigger Federal Reserve interest-rate…`,
    body: [
      `A record-breaking run in stocks hit a wall as still-elevated oil prices stoked concerns that potential inflationary pressures could trigger Federal Reserve interest-rate hikes.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 6, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-10-06/stock-market-today-dow-s-p-live-updates`,
  },
  {
    slug: `stock-market-today-treasury-yields-retreat-after-strong-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Treasury Yields Retreat After Strong Auction, Dow Slips`,
    summary: `Oil prices pare…`,
    body: [
      `Oil prices pare gains`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 7, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-10-07-2026?mod=rss_markets_main`,
  },
  {
    slug: `weston-family-to-buy-british-retailer-boots-for-89-bill-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Weston family to buy British retailer Boots for $8.9-billion with Fairfax backing`,
    summary: `Wittington Investments to retain operating control as Fairfax invests $2.3-billon for 50% stake in the…`,
    body: [
      `Wittington Investments to retain operating control as Fairfax invests $2.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 7, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-weston-family-wittington-buys-boots-with-fairfax-backing/`,
  },
  {
    slug: `profound-medical-reports-strong-preliminary-third-quart-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Profound Medical Reports Strong Preliminary Third Quarter 2026 Revenue`,
    summary: `Anticipates Q3-2026 revenue of $9.8 million to $10.0 million, exceeding Bloomberg analyst consensus by approximately 45% to 47% TORONTO, Oct. 07, 2026 (GLOBE NEWSWIRE) &#8212; Profound Medical Corp. (NASDAQ:PROF;…`,
    body: [
      `Anticipates Q3-2026 revenue of $9. 8 million to $10.`,
      `0 million, exceeding Bloomberg analyst consensus by approximately 45% to 47% TORONTO, Oct.  07, 2026 (GLOBE NEWSWIRE) &#8212; Profound Medical Corp.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 7, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/profound-medical-reports-strong-preliminary-third-quarter-2026-revenue`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
