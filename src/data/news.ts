// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-11-20T22:05:52.483Z

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
    slug: `crowdstrike-said-in-talks-to-buy-cybersecurity-firm-zsc-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `CrowdStrike Said in Talks to Buy Cybersecurity Firm Zscaler`,
    summary: `CrowdStrike Holdings Inc. is in talks to acquire Zscaler Inc., according to people familiar with the matter, in a deal that would be among the largest-ever in the cybersecurity sector. Zscaler, which had a market value…`,
    body: [
      `CrowdStrike Holdings Inc.  is in talks to acquire Zscaler Inc. , according to people familiar with the matter, in a deal that would be among the largest-ever in the cybersecurity sector.`,
      `Zscaler, which had a market value of $32 billion at the end of regular trading Friday, rose about 16% after the close.  The two companies are discussing a potential combination that could come together soon, the people said, asking not to be identified because the information is confidential.  Bloomberg News Deals Reporter Ryan Gould reports on the deal.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 20, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/videos/2026-11-20/crowdstrike-said-in-talks-to-buy-zscaler-video`,
  },
  {
    slug: `stock-market-today-tech-rout-deepens-as-nvidia-anthropi-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Tech Rout Deepens as Nvidia, Anthropic Slide`,
    summary: `Nasdaq tumbles 5.3%; Claude maker gives up most of its day-one gains after failing to soothe AI…`,
    body: [
      `Nasdaq tumbles 5.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 20, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-11-20-2026?mod=rss_markets_main`,
  },
  {
    slug: `grand-theft-auto-vi-sets-record-with-379-billion-in-fir-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Grand Theft Auto VI sets record with $3.79-billion in first-day retail sales`,
    summary: `Long-awaited release also drew record preorders, Rockstar Games…`,
    body: [
      `Long-awaited release also drew record preorders, Rockstar Games says`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 20, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-grand-theft-auto-vi-record-379-billion-first-day-retail-sales/`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
