// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-10-26T20:17:01.971Z

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
    slug: `us-stocks-gain-as-investors-parse-anthropic-ipo-filing-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `US Stocks Gain as Investors Parse Anthropic IPO Filing`,
    summary: `US stocks gained on Monday as investors digested Anthropic PBC’s filing for its initial public offering and looked ahead to key big tech earnings this week, as well as the Federal Reserve’s next decision on…`,
    body: [
      `US stocks gained on Monday as investors digested Anthropic PBC’s filing for its initial public offering and looked ahead to key big tech earnings this week, as well as the Federal Reserve’s next decision on Wednesday.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 26, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-10-26/us-stock-futures-gain-ahead-of-big-tech-earnings-fed-decision`,
  },
  {
    slug: `stock-market-today-tech-shares-rally-after-anthropic-fi-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Tech Shares Rally After Anthropic Files for Historic IPO`,
    summary: `Documents set up Claude provider to go public next…`,
    body: [
      `Documents set up Claude provider to go public next month`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 26, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-10-26-2026?mod=rss_markets_main`,
  },
  {
    slug: `meghan-roach-steps-down-as-roots-ceo-as-go-private-tran-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Meghan Roach steps down as Roots CEO as go-private transaction closes`,
    summary: `Deal with Marquee Brands was announced in August at price of $4.10 per share and passed a shareholder vote earlier this…`,
    body: [
      `Deal with Marquee Brands was announced in August at price of $4.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 26, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-meghan-roach-roots-ceo-steps-down/`,
  },
  {
    slug: `anthropic-flags-canadian-lawsuits-data-centre-risks-in-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Anthropic flags Canadian lawsuits, data centre risks in highly anticipated IPO filing`,
    summary: `Investors say Anthropic could be valued between US$1.5 and US$2 trillion following its…`,
    body: [
      `Investors say Anthropic could be valued between US$1.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 26, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/technology/anthropic-flags-canadian-lawsuits-data-centre-risks-ipo-filing`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
