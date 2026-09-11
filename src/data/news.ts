// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-09-11T18:08:29.290Z

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
    slug: `south-east-water-to-regroup-on-debt-plan-after-bond-tal-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `South East Water to Regroup on Debt Plan After Bond Talks Stall`,
    summary: `South East Water Ltd. is reevaluating its plans to tap capital markets to raise debt, after initial talks with bond investors stalled over…`,
    body: [
      `South East Water Ltd.`,
      `is reevaluating its plans to tap capital markets to raise debt, after initial talks with bond investors stalled over pricing.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 11, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-09-11/south-east-water-to-regroup-on-debt-plan-after-bond-talks-stall`,
  },
  {
    slug: `stock-market-today-inflation-figure-boosts-odds-of-rate-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Inflation Figure Boosts Odds of Rate Hike Next Week`,
    summary: `Traders increase chance of Fed rate increase to nearly 90%; Dow…`,
    body: [
      `Traders increase chance of Fed rate increase to nearly 90%; Dow rallies`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 11, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-cpi-inflation-09-11-2026?mod=rss_markets_main`,
  },
  {
    slug: `iran-backed-houthis-seize-an-island-in-the-bab-el-mande-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Iran-backed Houthis seize an island in the Bab el-Mandeb Strait`,
    summary: `The Houthis’ biggest territorial gains in years, along the Bab el-Mandeb Strait, could boost Iran’s strategy of driving up world oil and gas prices to pressure the United…`,
    body: [
      `The Houthis’ biggest territorial gains in years, along the Bab el-Mandeb Strait, could boost Iran’s strategy of driving up world oil and gas prices to pressure the United States.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 11, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/canada/video-iran-backed-houthis-seize-an-island-in-the-bab-el-mandeb-strait/`,
  },
  {
    slug: `greenland-mines-provides-progress-update-on-2026-field-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Greenland Mines Provides Progress Update on 2026 Field Programs at Skaergaard and Sarfartoq`,
    summary: `Company completes 104.8-ton bulk-sampling program at Skaergaard; advances geological mapping and environmental baseline studies at Sarfartoq CHARLOTTE, N.C., Sept. 11, 2026 (GLOBE NEWSWIRE) &#8212; via IBN – Greenland…`,
    body: [
      `Company completes 104. 8-ton bulk-sampling program at Skaergaard; advances geological mapping and environmental baseline studies at Sarfartoq CHARLOTTE, N.`,
      `C. , Sept.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 11, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/greenland-mines-provides-progress-update-on-2026-field-programs-at-skaergaard-and-sarfartoq`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
