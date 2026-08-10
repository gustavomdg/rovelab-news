// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-08-10T15:57:13.030Z

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
    slug: `record-sales-of-catastrophe-bonds-driven-by-wildfires-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Record Sales of Catastrophe Bonds Driven by Wildfires`,
    summary: `Tanja Wrosch, head of cap bond portfolio management at Twelve Capital, joined to discuss the recent surge in catastrophe bond sales. The segment highlighted how wildfires have significantly contributed to record…`,
    body: [
      `Tanja Wrosch, head of cap bond portfolio management at Twelve Capital, joined to discuss the recent surge in catastrophe bond sales.  The segment highlighted how wildfires have significantly contributed to record issuance levels in the catastrophe bond market.`,
      `Wrosch provided insights into the dynamics driving investor interest and the implications for risk management in the insurance-linked securities sector.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 10, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/videos/2026-08-10/record-sales-of-catastrophe-bonds-driven-by-wildfires-video`,
  },
  {
    slug: `stock-market-today-stocks-hover-near-records-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Stocks Hover Near Records`,
    summary: `Major indexes were swinging between small gains and declines, with oil…`,
    body: [
      `Major indexes were swinging between small gains and declines, with oil higher`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 10, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-08-10-2026?mod=rss_markets_main`,
  },
  {
    slug: `clothing-brands-use-retailer-repairs-and-sewing-courses-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Clothing brands use retailer repairs and sewing courses to win over young shoppers`,
    summary: `Researchers agree that repairing and reselling clothes can reduce waste. But for a generation that grew up with fast fashion, mending practices might not be enough to offset continued growth in clothing production and…`,
    body: [
      `Researchers agree that repairing and reselling clothes can reduce waste.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 10, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-clothing-brands-use-retailer-repairs-and-sewing-courses-to-win-over/`,
  },
  {
    slug: `kaplan-fox-alerts-photronics-inc-nasdaq-plab-investors-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Kaplan Fox Alerts Photronics, Inc. (NASDAQ: PLAB) Investors Who Suffered Losses to a Securities Class Action – Deadline is September 4, 2026`,
    summary: `NEW YORK, Aug. 10, 2026 (GLOBE NEWSWIRE) &#8212; Kaplan Fox &#38; Kilsheimer LLP announces that a class action lawsuit has been filed against Photronics, Inc. (“Photronics” or the “Company”) (NASDAQ: PLAB) on behalf of…`,
    body: [
      `NEW YORK, Aug.  10, 2026 (GLOBE NEWSWIRE) &#8212; Kaplan Fox &#38; Kilsheimer LLP announces that a class action lawsuit has been filed against Photronics, Inc.`,
      `(“Photronics” or the “Company”) (NASDAQ: PLAB) on behalf of investors that purchased or otherwise acquired Photronics securities between December 10, 2025 and May 27, 2026 (the “Class Period”).`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 10, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/kaplan-fox-alerts-photronics-inc-nasdaq-plab-investors-who-suffered-losses-to-a-securities-class-action-deadline-is-september-4-2026`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
