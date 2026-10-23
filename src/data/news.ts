// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-10-23T18:51:57.046Z

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
    slug: `florida-retiree-mega-complexs-muni-bond-deal-sees-stron-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Florida Retiree Mega-Complex’s Muni Bond Deal Sees Strong Demand`,
    summary: `Investors snapped up almost $180 million in high-yield bonds this week sold to finance an expansion of the Villages, a 57,000-acre retirement community in…`,
    body: [
      `Investors snapped up almost $180 million in high-yield bonds this week sold to finance an expansion of the Villages, a 57,000-acre retirement community in Florida.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 23, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-10-23/florida-retiree-mega-complex-s-muni-bond-deal-sees-strong-demand`,
  },
  {
    slug: `stock-market-today-dow-slides-as-oil-prices-climb-to-hi-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Dow Slides as Oil Prices Climb to Highest in Five Months`,
    summary: `Nasdaq stems weekly loss; Brent crude trades above…`,
    body: [
      `Nasdaq stems weekly loss; Brent crude trades above $110`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 23, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-10-23-2026?mod=rss_markets_main`,
  },
  {
    slug: `rogers-reports-jump-in-free-cash-flow-as-capital-spendi-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Rogers reports jump in free cash flow as capital spending slashed`,
    summary: `Also records lower new subscription numbers as it pursues sale of minority stake in sports…`,
    body: [
      `Also records lower new subscription numbers as it pursues sale of minority stake in sports holdings`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 23, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-rogers-reports-jump-in-free-cash-flow-flat-revenue-in-third-quarter/`,
  },
  {
    slug: `a-secret-weapon-in-radiology-management-novarad-updates-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `A Secret Weapon in Radiology Management: Novarad Updates More Than 1,000 Imaging Facilities Worldwide in a Matter of Weeks`,
    summary: `The rollout ran through Novarad Central Command, the remote deployment and monitoring infrastructure the company has operated for 30+ years Provo, UT, Oct. 23, 2026 (GLOBE NEWSWIRE) &#8212; One of the best-kept secrets…`,
    body: [
      `The rollout ran through Novarad Central Command, the remote deployment and monitoring infrastructure the company has operated for 30+ years Provo, UT, Oct.`,
      `23, 2026 (GLOBE NEWSWIRE) &#8212; One of the best-kept secrets in the imaging market shows its unprecedented utility as Novarad deployed the 9.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 23, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/a-secret-weapon-in-radiology-management-novarad-updates-more-than-1000-imaging-facilities-worldwide-in-a-matter-of-weeks`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
