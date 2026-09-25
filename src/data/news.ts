// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-09-25T19:06:22.206Z

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
    slug: `feds-hammack-warns-inflationary-mindset-might-set-in-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Fed's Hammack Warns 'Inflationary Mindset' Might Set In`,
    summary: `Federal Reserve Bank of Cleveland President Beth Hammack says she's concerned that an "inflationary mindset" might set in during an event hosted by the bank. (Source:…`,
    body: [
      `Federal Reserve Bank of Cleveland President Beth Hammack says she's concerned that an "inflationary mindset" might set in during an event hosted by the bank.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 25, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/videos/2026-09-25/fed-s-hammack-warns-inflationary-mindset-may-set-in-video`,
  },
  {
    slug: `stock-market-today-bond-yields-drop-with-oil-prices-nea-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Bond Yields Drop With Oil Prices Near End of Volatile Week`,
    summary: `Dow rises amid hopes for a deal to reopen…`,
    body: [
      `Dow rises amid hopes for a deal to reopen Hormuz`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 25, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-09-25-2026?mod=rss_markets_main`,
  },
  {
    slug: `pitching-in-restaurateur-tackles-food-insecurity-from-c-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Pitching in: Restaurateur tackles food insecurity from coast to coast`,
    summary: `Mark Brand has built a network of social enterprises and charitable programs aimed at getting more meals to Canadians in…`,
    body: [
      `Mark Brand has built a network of social enterprises and charitable programs aimed at getting more meals to Canadians in need`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 25, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-pitching-in-restaurateur-tackles-food-insecurity-from-coast-to-coast/`,
  },
  {
    slug: `computer-modelling-group-ltd-announces-completion-of-su-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Computer Modelling Group Ltd. Announces Completion of Substantial Issuer Bid`,
    summary: `CALGARY, Alberta, Sept. 25, 2026 (GLOBE NEWSWIRE) &#8212; Computer Modelling Group Ltd. (“CMG” or the “Company”) (TSX: CMG), today announced that it has taken up and paid for 4,444,444 of its common shares (“Shares”) at…`,
    body: [
      `CALGARY, Alberta, Sept.  25, 2026 (GLOBE NEWSWIRE) &#8212; Computer Modelling Group Ltd.`,
      `(“CMG” or the “Company”) (TSX: CMG), today announced that it has taken up and paid for 4,444,444 of its common shares (“Shares”) at a price of C$4.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 25, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/computer-modelling-group-ltd-announces-completion-of-substantial-issuer-bid`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
