// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-08-26T16:14:39.961Z

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
    slug: `us-stocks-muted-as-focus-turns-from-pce-to-nvidia-earni-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `US Stocks Muted as Focus Turns From PCE to Nvidia Earnings`,
    summary: `US stocks tread water on Wednesday as investors digested the Federal Reserve’s preferred inflation gauge and waited for earnings from chipmaking giant Nvidia…`,
    body: [
      `US stocks tread water on Wednesday as investors digested the Federal Reserve’s preferred inflation gauge and waited for earnings from chipmaking giant Nvidia Corp.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 26, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-08-26/us-stock-futures-tread-water-after-inflation-gauge-s-muted-rise`,
  },
  {
    slug: `stock-market-today-stocks-edge-lower-ahead-of-nvidia-ea-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Stocks Edge Lower Ahead of Nvidia Earnings`,
    summary: `Meta stock ticks higher after it settles child-safety…`,
    body: [
      `Meta stock ticks higher after it settles child-safety suit`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 26, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/nvidia-earnings-stock-market-today-08-26-2026?mod=rss_markets_main`,
  },
  {
    slug: `national-bank-posts-higher-quarterly-profit-beating-ana-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `National Bank posts higher quarterly profit, beating analysts’ expectations`,
    summary: `Canadian bank stocks surged this year, outperforming the domestic stock market and U.S.…`,
    body: [
      `Canadian bank stocks surged this year, outperforming the domestic stock market and U.`,
      `S.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 26, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-national-bank-canada-earnings-profits-stocks-market/`,
  },
  {
    slug: `td-sees-canada-investment-supercycle-with-tax-regulatio-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `TD sees Canada investment ‘supercycle’ with tax, regulation reforms`,
    summary: `The structure of Canada’s personal and business tax systems creates barriers to more rapid growth, TD economists…`,
    body: [
      `The structure of Canada’s personal and business tax systems creates barriers to more rapid growth, TD economists said`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 26, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/investing/td-sees-canada-investment-supercycle`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
