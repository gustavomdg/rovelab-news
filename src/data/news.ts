// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-08-12T15:55:55.999Z

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
    slug: `cava-rises-on-sales-coreweave-soars-on-ai-outlook-stock-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Cava Rises on Sales; CoreWeave Soars on AI Outlook | Stock Movers`,
    summary: `On this episode of Stock Movers: - Cava (CAVA) is also rising this morning as sales jumped with Americans flocking to Pita Chips, Salmon, and other Mediterranean-diet oriented foods. - Super Micro (SMCI) is giving a…`,
    body: [
      `On this episode of Stock Movers: - Cava (CAVA) is also rising this morning as sales jumped with Americans flocking to Pita Chips, Salmon, and other Mediterranean-diet oriented foods.  - Super Micro (SMCI) is giving a sales outlook that topped even the rosiest projections.  That along with Coreweave's report is sending markets higher.`,
      `- CoreWeave (CRWV) is soaring after booming AI demand bolstered the company's revenue outlook.  Nebius (NBIS) is also up this morning with earnings coming out.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 12, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/videos/2026-08-12/cava-rises-on-sales-coreweave-sores-on-ai-outlook-video`,
  },
  {
    slug: `stock-market-today-stocks-edge-higher-after-cpi-meets-f-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Stocks Edge Higher After CPI Meets Forecasts`,
    summary: `Upbeat results from CoreWeave and Super Micro rekindle AI…`,
    body: [
      `Upbeat results from CoreWeave and Super Micro rekindle AI trade`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 12, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-cpi-inflation-08-12-2026?mod=rss_markets_main`,
  },
  {
    slug: `zhu-rongji-who-drove-economic-reforms-and-led-china-int-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Zhu Rongji, who drove economic reforms and led China into the World Trade Organization, dies`,
    summary: `The former premier pushed through a dizzying array of changes in China’s top economic post from 1998 to…`,
    body: [
      `The former premier pushed through a dizzying array of changes in China’s top economic post from 1998 to 2003`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 12, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/world/article-zhu-rongji-obituary/`,
  },
  {
    slug: `kaplan-fox-alerts-photronics-inc-nasdaq-plab-investors-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Kaplan Fox Alerts Photronics, Inc. (NASDAQ: PLAB) Investors Who Suffered Losses to a Securities Class Action – Deadline is September 4, 2026`,
    summary: `NEW YORK, Aug. 12, 2026 (GLOBE NEWSWIRE) &#8212; Kaplan Fox &#38; Kilsheimer LLP announces that a class action lawsuit has been filed against Photronics, Inc. (“Photronics” or the “Company”) (NASDAQ: PLAB) on behalf of…`,
    body: [
      `NEW YORK, Aug.  12, 2026 (GLOBE NEWSWIRE) &#8212; Kaplan Fox &#38; Kilsheimer LLP announces that a class action lawsuit has been filed against Photronics, Inc.`,
      `(“Photronics” or the “Company”) (NASDAQ: PLAB) on behalf of investors that purchased or otherwise acquired Photronics securities between December 10, 2025 and May 27, 2026 (the “Class Period”).`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 12, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/kaplan-fox-alerts-photronics-inc-nasdaq-plab-investors-who-suffered-losses-to-a-securities-class-action-deadline-is-september-4-2026-2`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
