// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-10-14T19:09:03.448Z

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
    slug: `bumble-said-to-near-1b-sale-to-ithaca-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Bumble Said to Near $1B Sale to Ithaca`,
    summary: `Bloomberg's Liana Baker joins Scarlet Fu on "Bloomberg Deals." Dating-app provider Bumble is in talks to be sold to upstart investment firm Ithaca Holdings for around $1 billion, according to people familiar with the…`,
    body: [
      `Bloomberg's Liana Baker joins Scarlet Fu on "Bloomberg Deals.`,
      `" Dating-app provider Bumble is in talks to be sold to upstart investment firm Ithaca Holdings for around $1 billion, according to people familiar with the matter.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 14, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/videos/2026-10-14/bumble-said-to-near-1b-sale-to-ithaca-video`,
  },
  {
    slug: `stock-market-today-treasury-yields-turn-lower-as-stocks-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Treasury Yields Turn Lower as Stocks Slump`,
    summary: `Tech shares lead declines, pulling bond yields lower after hot inflation…`,
    body: [
      `Tech shares lead declines, pulling bond yields lower after hot inflation report`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 14, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-cpi-inflation-10-14-2026?mod=rss_markets_main`,
  },
  {
    slug: `russia-continues-strikes-on-ukraines-energy-sites-despi-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Russia continues strikes on Ukraine’s energy sites despite Trump’s ceasefire, Zelensky says`,
    summary: `Moscow’s forces pounded Ukraine’s power grid, as well as oil and gas facilities, for the third straight…`,
    body: [
      `Moscow’s forces pounded Ukraine’s power grid, as well as oil and gas facilities, for the third straight night`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 14, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/world/article-russia-ukraine-trump-energy-ceasefire-strikes/`,
  },
  {
    slug: `silver-near-61-puts-canada8217s-northern-polymetallic-b-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Silver Near $61 Puts Canada&#8217;s Northern Polymetallic Belts Back in Focus`,
    summary: `News Provided by Mining Stocks on behalf of Honey Badger Silver Inc. TORONTO, Oct. 14, 2026 (GLOBE NEWSWIRE) &#8212; Mining Stocks News Commentary &#8211; Silver was trading at about $60.73 an ounce on the morning of…`,
    body: [
      `News Provided by Mining Stocks on behalf of Honey Badger Silver Inc.  TORONTO, Oct.`,
      `14, 2026 (GLOBE NEWSWIRE) &#8212; Mining Stocks News Commentary &#8211; Silver was trading at about $60.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 14, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/silver-near-61-puts-canadas-northern-polymetallic-belts-back-in-focus`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
