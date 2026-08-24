// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-08-24T15:35:12.313Z

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
    slug: `jpmorgan-says-bond-market-can-handle-issuance-stampede-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `JPMorgan Says Bond Market Can Handle Issuance Stampede`,
    summary: `The investment-grade bond market faces a busy September, but demand for corporate debt suggests anxiety about heavy supply may be overblown, according to Kelsey Berro, a portfolio manager at JPMorgan Asset…`,
    body: [
      `The investment-grade bond market faces a busy September, but demand for corporate debt suggests anxiety about heavy supply may be overblown, according to Kelsey Berro, a portfolio manager at JPMorgan Asset Management.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 24, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-08-24/jpmorgan-s-berro-says-bond-market-can-handle-high-grade-stampede`,
  },
  {
    slug: `stock-market-today-oil-drops-as-investors-await-bessent-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Oil Drops as Investors Await Bessent&#x2019;s Plan to Squeeze Iran`,
    summary: `Nasdaq slips as chip stocks start week under…`,
    body: [
      `Nasdaq slips as chip stocks start week under pressure`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 24, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-08-24-2026?mod=rss_markets_main`,
  },
  {
    slug: `trump-ramps-up-trade-war-rhetoric-with-new-tariff-threa-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Trump ramps up trade war rhetoric with new tariff threats`,
    summary: `President says U.S. will raise tariffs on Canadian vehicles Jan. 1, introduce levies on auto…`,
    body: [
      `President says U. S.`,
      `will raise tariffs on Canadian vehicles Jan.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 24, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/politics/article-trump-trade-auto-tariffs-canada/`,
  },
  {
    slug: `trump-threatens-50-tariffs-on-canadian-autos-and-auto-p-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Trump threatens 50% tariffs on Canadian autos and auto parts`,
    summary: `Higher levy to start in January marks latest escalation of trade tensions between the two…`,
    body: [
      `Higher levy to start in January marks latest escalation of trade tensions between the two countries`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 24, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/transportation/autos/trump-threatens-to-raise-tariffs-canadian-autos-and-parts`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
