// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-08-03T17:07:13.018Z

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
    slug: `emerging-market-currencies-are-mixed-as-us-iran-tension-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Emerging-Market Currencies Are Mixed as US-Iran Tensions Ease`,
    summary: `Emerging-market currencies were mixed on Monday as investors weighed signs of easing tensions between the US and Iran against the fading appeal for carry trades in Latin…`,
    body: [
      `Emerging-market currencies were mixed on Monday as investors weighed signs of easing tensions between the US and Iran against the fading appeal for carry trades in Latin America.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 3, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-08-03/emerging-market-stocks-fall-as-korea-chipmakers-slide-once-again`,
  },
  {
    slug: `stock-market-today-stocks-rally-oil-slides-on-return-to-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Stocks Rally, Oil Slides on Return to Mideast Diplomacy`,
    summary: `Dow jumps 500 points; U.S.-Japan intervention props up…`,
    body: [
      `Dow jumps 500 points; U.S.-Japan intervention props up yen`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 3, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-08-03-2026?mod=rss_markets_main`,
  },
  {
    slug: `japan-confirms-joint-intervention-with-us-in-bid-to-hal-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Japan confirms joint intervention with U.S. in bid to halt yen’s slide`,
    summary: `Japan’s finance ministry confirms rare bilateral action as yen drops to 40-year…`,
    body: [
      `Japan’s finance ministry confirms rare bilateral action as yen drops to 40-year lows`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 2, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/world/article-japan-us-yen-currency/`,
  },
  {
    slug: `tankers-take-oil-from-key-kazakh-export-terminal-after-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Tankers Take Oil From Key Kazakh Export Terminal After Attacks`,
    summary: `Four tankers have completed loadings at a Black Sea port that’s crucial to Kazakhstan’s crude exports in recent days, after a run of attacks disrupted shipping in the…`,
    body: [
      `Four tankers have completed loadings at a Black Sea port that’s crucial to Kazakhstan’s crude exports in recent days, after a run of attacks disrupted shipping in the area.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 3, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/pmn/business-pmn/tankers-take-oil-from-key-kazakh-export-terminal-after-attacks`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
