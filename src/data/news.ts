// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-10-05T21:47:50.760Z

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
    slug: `mark-walter-charitys-clo-tie-up-maps-intricacies-of-his-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Mark Walter Charity’s CLO Tie-Up Maps Intricacies of His Empire`,
    summary: `Even at the time, it was considered an unconventional alliance: Mark Walter committing $160 million through his education-focused nonprofit to help a Chicago credit investment firm comply with Dodd-Frank regulations in…`,
    body: [
      `Even at the time, it was considered an unconventional alliance: Mark Walter committing $160 million through his education-focused nonprofit to help a Chicago credit investment firm comply with Dodd-Frank regulations in return for funding.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 5, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-10-05/mark-walter-charity-s-clo-tie-up-maps-intricacies-of-his-empire`,
  },
  {
    slug: `stock-market-today-10-year-yield-rises-nasdaq-jumps-to-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: 10-Year Yield Rises; Nasdaq Jumps to New High`,
    summary: `Dollar strengthens, while Brazilian assets rally after…`,
    body: [
      `Dollar strengthens, while Brazilian assets rally after election`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 5, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-10-05-2026?mod=rss_markets_main`,
  },
  {
    slug: `us-supreme-court-wrestles-with-bid-by-suncor-exxonmobil-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `U.S. Supreme Court wrestles with bid by Suncor, ExxonMobil to avoid climate lawsuit`,
    summary: `Trump administration has backed oil companies, arguing Washington’s authority to regulate air pollution precludes state’s…`,
    body: [
      `Trump administration has backed oil companies, arguing Washington’s authority to regulate air pollution precludes state’s claims`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 5, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/industry-news/energy-and-resources/article-us-supreme-court-to-weigh-bid-by-suncor-exxonmobil-to-avoid-climate/`,
  },
  {
    slug: `agf-reports-september-2026-assets-under-management-and-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `AGF Reports September 2026 Assets Under Management and Fee-Earning Assets`,
    summary: `TORONTO, Oct. 05, 2026 (GLOBE NEWSWIRE) &#8212; AGF Management Limited reported total assets under management (AUM) and fee-earning assets of $75.3 billion as at September 30, 2026. AUM($ billions) September 30,2026…`,
    body: [
      `TORONTO, Oct.  05, 2026 (GLOBE NEWSWIRE) &#8212; AGF Management Limited reported total assets under management (AUM) and fee-earning assets of $75. 3 billion as at September 30, 2026.`,
      `AUM($ billions) September 30,2026 August 31,2026 % ChangeMonth-Over-Month September 30,2025 % ChangeYear-Over-Year Total Mutual Fund $37. 8 $37. 5 $34.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 5, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/agf-reports-september-2026-assets-under-management-and-fee-earning-assets`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
