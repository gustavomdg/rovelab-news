// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-09-16T18:37:50.507Z

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
    slug: `stocks-bonds-rise-as-fed-hikes-to-fight-inflation-marke-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Stocks, Bonds Rise as Fed Hikes to Fight Inflation: Markets Wrap`,
    summary: `Stocks joined bonds higher as the Federal Reserve lifted interest rates for the first time since 2023 to fight persistently high inflation, boosting its…`,
    body: [
      `Stocks joined bonds higher as the Federal Reserve lifted interest rates for the first time since 2023 to fight persistently high inflation, boosting its credibility.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 15, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-09-15/asian-stocks-to-edge-higher-as-traders-await-fed-markets-wrap`,
  },
  {
    slug: `fed-meeting-today-federal-reserve-raises-key-interest-r-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Fed Meeting Today: Federal Reserve Raises Key Interest Rate; Stocks Edge Higher`,
    summary: `Wednesday&#x2019;s 0.25% rate hike was the central bank&#x2019;s first in three…`,
    body: [
      `Wednesday&#x2019;s 0.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 16, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/fed-meeting-warsh-interest-rate-09-16-2026?mod=rss_markets_main`,
  },
  {
    slug: `mississauga-city-council-approves-one-year-data-centre-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Mississauga city council approves one-year data centre pause`,
    summary: `Moratorium will allow for the study of possible guardrails on…`,
    body: [
      `Moratorium will allow for the study of possible guardrails on development`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 16, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-mississauga-city-council-to-vote-on-one-year-data-centre-pause/`,
  },
  {
    slug: `from-a-lambeth-food-trailer-to-50-locations-shelby8217s-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `From a Lambeth Food Trailer to 50 Locations: Shelby&#8217;s Celebrates Its Milestone Brantford Opening with &#8216;Za Fest in Za West&#8217;`,
    summary: `Canada&#8217;s favourite shawarma chain marks its 50th store with a free community festival, a meal donation to Brantford General Hospital, and grand opening offers for local families BRANTFORD, Ontario, Sept. 16, 2026…`,
    body: [
      `Canada&#8217;s favourite shawarma chain marks its 50th store with a free community festival, a meal donation to Brantford General Hospital, and grand opening offers for local families BRANTFORD, Ontario, Sept.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 16, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/from-a-lambeth-food-trailer-to-50-locations-shelbys-celebrates-its-milestone-brantford-opening-with-za-fest-in-za-west`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
