// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-11-13T21:09:25.867Z

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
    slug: `swiss-respiratory-biotech-windward-soars-68-in-us-tradi-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Swiss Respiratory Biotech Windward Soars 68% in US Trading Debut`,
    summary: `Windward Bio Group AG shares surged 68% in its trading debut after the company raised about $225 million in an initial public offering and private…`,
    body: [
      `Windward Bio Group AG shares surged 68% in its trading debut after the company raised about $225 million in an initial public offering and private placement.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 13, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-11-13/swiss-respiratory-biotech-windward-up-7-9-in-us-trading-debut`,
  },
  {
    slug: `stock-market-today-nvidia-shares-drop-again-as-investor-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Nvidia Shares Drop Again as Investors Eye Fallout From Huang&apos;s Removal`,
    summary: `AI trade faces major tests next week with chip giant&apos;s earnings and Anthropic&apos;s…`,
    body: [
      `AI trade faces major tests next week with chip giant&apos;s earnings and Anthropic&apos;s IPO`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 13, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-11-13-2026?mod=rss_markets_main`,
  },
  {
    slug: `nvidia-had-no-succession-plan-did-the-board-consider-je-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Nvidia had no succession plan. Did the board consider Jensen Huang an immortal god?`,
    summary: `The company was on its way to AI giant status, but kept a lean structure that left the founder’s power…`,
    body: [
      `The company was on its way to AI giant status, but kept a lean structure that left the founder’s power unchecked`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 13, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/commentary/article-nvidia-affair-ceo-succession-plan-jensen-huang-immortal-god/`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
