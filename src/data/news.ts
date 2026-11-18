// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-11-18T22:27:48.638Z

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
    slug: `bitcoin-erases-bessent-rally-as-leverage-and-liquidity-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Bitcoin Erases Bessent Rally as Leverage and Liquidity Fade`,
    summary: `Bitcoin has erased all the gains from its late-summer rally as fading risk appetite and the record hack at exchange Binance drove investors to retreat, leaving the largest token trading in a thinner market increasingly…`,
    body: [
      `Bitcoin has erased all the gains from its late-summer rally as fading risk appetite and the record hack at exchange Binance drove investors to retreat, leaving the largest token trading in a thinner market increasingly vulnerable to sharp price swings.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 18, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-11-18/bitcoin-erases-bessent-rally-as-leverage-and-liquidity-fade`,
  },
  {
    slug: `stock-market-today-nvidia-earnings-fail-to-soothe-inves-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Nvidia Earnings Fail to Soothe Investors&#x2019; Nerves`,
    summary: `Chip giant&apos;s stock slips 2.9% as worries about the AI trade continue to haunt the…`,
    body: [
      `Chip giant&apos;s stock slips 2.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 18, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-11-18-2026?mod=rss_markets_main`,
  },
  {
    slug: `loblaw-to-allow-shopping-with-metas-muse-ai-assistant-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Loblaw to allow shopping with Meta’s Muse AI assistant`,
    summary: `Grocery giant is first retailer in Canada to partner directly with Muse, as more tech companies roll out AI shopping…`,
    body: [
      `Grocery giant is first retailer in Canada to partner directly with Muse, as more tech companies roll out AI shopping agents`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Nov 18, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-loblaw-metas-muse-ai-assistant-shopping-november-18/`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
