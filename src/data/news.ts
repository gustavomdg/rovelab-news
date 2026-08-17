// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-08-17T15:21:02.587Z

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
    slug: `copper-squeeze-builds-with-spreads-surging-and-price-ne-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Copper Squeeze Builds With Spreads Surging and Price Near Record`,
    summary: `Copper rose toward a record on the London Metal Exchange, with soaring price spreads highlighting an increasingly acute squeeze in near-term…`,
    body: [
      `Copper rose toward a record on the London Metal Exchange, with soaring price spreads highlighting an increasingly acute squeeze in near-term supply.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 17, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-08-17/copper-heads-toward-record-high-on-lme-as-supply-tensions-build`,
  },
  {
    slug: `stock-market-today-ai-enthusiasm-fails-to-lift-indexes-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: AI Enthusiasm Fails to Lift Indexes`,
    summary: `This week brings earnings from Target, Walmart and…`,
    body: [
      `This week brings earnings from Target, Walmart and others`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 17, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-08-17-2026?mod=rss_markets_main`,
  },
  {
    slug: `areas-outside-toronto-among-most-distressed-parts-of-ca-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Areas outside Toronto among most distressed parts of Canada’s condo market, data show`,
    summary: `Glut of unsold preconstruction condos in Ontario is concentrated in Vaughan Metropolitan Centre, downtown…`,
    body: [
      `Glut of unsold preconstruction condos in Ontario is concentrated in Vaughan Metropolitan Centre, downtown Hamilton`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 17, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-areas-outside-toronto-distressed-canadas-condo-market-data-show/`,
  },
  {
    slug: `8216this-one-is-personal8217-rbc-becomes-sponsor-of-rya-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `&#8216;This one is personal&#8217;: RBC becomes sponsor of Ryan Reynolds&#8217; Wrexham AFC soccer team`,
    summary: `Wrexham currently plays in the Championship division, England's second-tier…`,
    body: [
      `Wrexham currently plays in the Championship division, England's second-tier league`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 17, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/fp-finance/banking/rbc-sponsor-ryan-reynolds-wrexham-afc-soccer`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
