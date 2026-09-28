// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-09-28T21:02:29.710Z

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
    slug: `apollo-backed-michaels-wins-sp-ratings-lift-after-cutti-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Apollo-Backed Michaels Wins S&P Ratings Lift After Cutting Debt`,
    summary: `Michaels Cos., the arts-and-crafts retailer owned by Apollo Global Management Inc., received a credit upgrade on Monday from S&P Global. The ratings firm raised Michaels to B from B-, citing recent sales growth and debt…`,
    body: [
      `Michaels Cos. , the arts-and-crafts retailer owned by Apollo Global Management Inc.`,
      `, received a credit upgrade on Monday from S&P Global.  The ratings firm raised Michaels to B from B-, citing recent sales growth and debt paydowns.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 28, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-09-28/apollo-backed-michaels-wins-s-p-ratings-lift-after-cutting-debt`,
  },
  {
    slug: `stock-market-today-treasury-yields-climb-to-fresh-highs-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Treasury Yields Climb to Fresh Highs; Tech Stocks Drop`,
    summary: `Oil price rises; Nvidia shares gain after buyback…`,
    body: [
      `Oil price rises; Nvidia shares gain after buyback plan`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 28, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-09-28-2026?mod=rss_markets_main`,
  },
  {
    slug: `spacexs-supersized-starship-launches-into-orbit-for-the-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `SpaceX’s supersized Starship launches into orbit for the first time`,
    summary: `SpaceX is pressing hard to certify Starship for orbital flight, a vital step toward moon and Mars…`,
    body: [
      `SpaceX is pressing hard to certify Starship for orbital flight, a vital step toward moon and Mars travel`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 28, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/world/article-spacex-starship-launch-orbit-first-time/`,
  },
  {
    slug: `la-paz-baja-california-sur-expands-its-hotel-portfolio-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `La Paz, Baja California Sur, Expands Its Hotel Portfolio with a Major New Opening and Growing Golf Offering`,
    summary: `The capital of Baja California Sur continues to broaden its accommodation and leisure experiences, with new hospitality, golf and gastronomy options adding new ways to experience the region, including the upcoming…`,
    body: [
      `The capital of Baja California Sur continues to broaden its accommodation and leisure experiences, with new hospitality, golf and gastronomy options adding new ways to experience the region, including the upcoming opening of Perla La Paz, Tapestry Collection by Hilton La Paz, Baja California Sur, Mexico, Sept.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 28, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/la-paz-baja-california-sur-expands-its-hotel-portfolio-with-a-major-new-opening-and-growing-golf-offering`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
