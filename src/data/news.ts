// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-09-07T18:58:13.173Z

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
    slug: `us-stocks-slip-as-oil-gains-keep-traders-cautious-marke-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `US Stocks Slip as Oil Gains Keep Traders Cautious: Markets Wrap`,
    summary: `US stock futures fell in cautious trading as an escalation in the Middle East pushed oil prices higher, adding to an already difficult inflationary…`,
    body: [
      `US stock futures fell in cautious trading as an escalation in the Middle East pushed oil prices higher, adding to an already difficult inflationary backdrop.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 6, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-09-06/stock-market-today-dow-s-p-live-updates`,
  },
  {
    slug: `hunter-biden-and-his-laptop-enter-the-cryptosphere-with-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Hunter Biden (and His Laptop) Enter the Cryptosphere With New Meme Coin`,
    summary: `The personal computer that launched a thousand memes will debut this week as a digital…`,
    body: [
      `The personal computer that launched a thousand memes will debut this week as a digital token.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 7, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/finance/currencies/hunter-biden-and-his-laptop-enter-the-cryptosphere-with-new-meme-coin-4d46fc9c?mod=rss_markets_main`,
  },
  {
    slug: `the-us-tariff-on-canadian-imports-stands-to-send-alread-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `The U.S. tariff on Canadian imports stands to send already soaring hockey gear prices even higher`,
    summary: `Increasingly expensive equipment works against growing participation in the game in the U.S., following 4 Nations Face-Off and…`,
    body: [
      `Increasingly expensive equipment works against growing participation in the game in the U.`,
      `S.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 7, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/sports/hockey/article-the-us-tariff-on-canadian-imports-stands-to-send-already-soaring/`,
  },
  {
    slug: `26th-china-international-fair-for-investment-and-trade-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `26th China International Fair for Investment and Trade (CIFIT) to be held from Sept. 8 to 11 in Xiamen, SE China&#8217;s Fujian Province`,
    summary: `CIFIT Organizing Committee XIAMEN, China, Sept. 07, 2026 (GLOBE NEWSWIRE) &#8212; The 26th China International Fair for Investment and Trade (CIFIT) will be held from September 8 to 11 in Xiamen, southeastern…`,
    body: [
      `CIFIT Organizing Committee XIAMEN, China, Sept.  07, 2026 (GLOBE NEWSWIRE) &#8212; The 26th China International Fair for Investment and Trade (CIFIT) will be held from September 8 to 11 in Xiamen, southeastern China&#8217;s Fujian Province.`,
      `A Media Snippet accompanying this announcement is available by clicking on this link.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 7, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/26th-china-international-fair-for-investment-and-trade-cifit-to-be-held-from-sept-8-to-11-in-xiamen-se-chinas-fujian-province`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
