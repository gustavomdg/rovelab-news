// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-08-05T16:29:21.643Z

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
    slug: `disneys-streaming-and-parks-drive-third-quarter-profits-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Disney’s Streaming and Parks Drive Third-Quarter Profits`,
    summary: `Walt Disney's profit beat Wall Street estimates in the company’s fiscal third quarter, driven by soaring income from its entertainment division and the resilience of its theme parks in California and Florida.…`,
    body: [
      `Walt Disney's profit beat Wall Street estimates in the company’s fiscal third quarter, driven by soaring income from its entertainment division and the resilience of its theme parks in California and Florida.`,
      `Bloomberg's Geetha Ranganathan joins Bloomberg Intelligence to discuss Disney as well as Paramount Skydance's earnings.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 5, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/videos/2026-08-05/disney-s-streaming-and-parks-drive-third-quarter-profits-video`,
  },
  {
    slug: `stock-market-today-dow-extends-rally-spacex-stock-slump-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Dow Extends Rally, SpaceX Stock Slumps as AI Spending Rattles Investors`,
    summary: `Optimism around Mideast talks and strong earnings from a slew of other companies help…`,
    body: [
      `Optimism around Mideast talks and strong earnings from a slew of other companies help stocks`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 5, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-08-05-2026?mod=rss_markets_main`,
  },
  {
    slug: `magna-reports-increased-q2-profit-sales-up-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Magna reports increased Q2 profit, sales up`,
    summary: `Sales totalled US$11.0 billion for the second quarter, up three per cent from a year…`,
    body: [
      `Sales totalled US$11.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Jul 31, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-magna-reports-increased-q2-profit-sales-up/`,
  },
  {
    slug: `port-day-showcases-vancouver8217s-maritime-industry-at-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Port Day showcases Vancouver&#8217;s maritime industry at Canada Place`,
    summary: `Vancouver, B.C., Aug. 05, 2026 (GLOBE NEWSWIRE) &#8212; The Vancouver Fraser Port Authority will host its annual Port Day on Saturday, August 29, at Canada Place, inviting the community to learn about the maritime…`,
    body: [
      `Vancouver, B. C. , Aug.  05, 2026 (GLOBE NEWSWIRE) &#8212; The Vancouver Fraser Port Authority will host its annual Port Day on Saturday, August 29, at Canada Place, inviting the community to learn about the maritime industry and its role in moving Canadian trade.`,
      `The free, family-friendly event runs from 11:00 a. m.  to 4:00 p. m.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 5, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/port-day-showcases-vancouvers-maritime-industry-at-canada-place`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
