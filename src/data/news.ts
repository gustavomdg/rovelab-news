// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-08-21T15:28:52.820Z

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
    slug: `latest-oil-market-news-and-analysis-for-aug-21-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Latest Oil Market News and Analysis for Aug. 21`,
    summary: `Oil fluctuated but remained on track for a weekly gain as traders awaited details of a US campaign to isolate Iran’s economy, with no apparent end in sight to a conflict that has slashed Middle East…`,
    body: [
      `Oil fluctuated but remained on track for a weekly gain as traders awaited details of a US campaign to isolate Iran’s economy, with no apparent end in sight to a conflict that has slashed Middle East exports.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 20, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-08-20/latest-oil-market-news-and-analysis-for-aug-21`,
  },
  {
    slug: `stock-market-today-bitcoin-jumps-sp-heads-for-weekly-lo-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Bitcoin Jumps; S&P Heads for Weekly Loss`,
    summary: `Crypto climbs; bond markets shrug off Treasury efforts to curb borrowing…`,
    body: [
      `Crypto climbs; bond markets shrug off Treasury efforts to curb borrowing costs`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 21, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-08-21-2026?mod=rss_markets_main`,
  },
  {
    slug: `us-canada-trade-deal-would-introduce-steel-quota-with-l-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `U.S.-Canada trade deal would introduce steel quota with lower 25% tariff, sources say`,
    summary: `Steel exports after first 4-million tonnes would still be subject to current 50% U.S. duty under prospective…`,
    body: [
      `Steel exports after first 4-million tonnes would still be subject to current 50% U.`,
      `S.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 21, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/politics/article-canada-us-trade-deal-negotiations-tariff-deadline/`,
  },
  {
    slug: `kaplan-fox-alerts-zoominfo-technologies-inc-nasdaq-gtm-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Kaplan Fox Alerts ZoomInfo Technologies Inc. (NASDAQ: GTM) Investors Who Suffered Losses to a Securities Class Action – Deadline is August 24, 2026`,
    summary: `NEW YORK, Aug. 21, 2026 (GLOBE NEWSWIRE) &#8212; Kaplan Fox &#38; Kilsheimer LLP announces that a class action lawsuit has been filed against ZoomInfo Technologies Inc. (“ZoomInfo” or the “Company”) (NASDAQ: GTM) on…`,
    body: [
      `NEW YORK, Aug.  21, 2026 (GLOBE NEWSWIRE) &#8212; Kaplan Fox &#38; Kilsheimer LLP announces that a class action lawsuit has been filed against ZoomInfo Technologies Inc.`,
      `(“ZoomInfo” or the “Company”) (NASDAQ: GTM) on behalf of investors that purchased or otherwise acquired ZoomInfo securities between November 3, 2025 and May 11, 2026 (the “Class Period”).`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 21, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/kaplan-fox-alerts-zoominfo-technologies-inc-nasdaq-gtm-investors-who-suffered-losses-to-a-securities-class-action-deadline-is-august-24-2026`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
