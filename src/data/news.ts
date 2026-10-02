// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-10-02T19:43:44.926Z

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
    slug: `nadia-lovell-equities-must-earn-the-next-leg-up-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Nadia Lovell: Equities Must Earn the Next Leg Up`,
    summary: `As stocks rise and bond yields pull back ahead of the jobs report, Nadia Lovell of UBS says she remains bullish on equities, but believes the market’s next advance must be earned. She argues that markets are entering a…`,
    body: [
      `As stocks rise and bond yields pull back ahead of the jobs report, Nadia Lovell of UBS says she remains bullish on equities, but believes the market’s next advance must be earned.  She argues that markets are entering a new investment cycle after years of companies prioritizing financial efficiency through measures such as buybacks and lower capital spending.`,
      `The shift now extends beyond AI to investment in power, supply chains, and defense, broadening corporate profit opportunities.  If these investments deliver a productivity boost, Lovell says, they could support a healthier market and further gains over the longer term.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 2, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/videos/2026-10-02/nadia-lovell-equities-must-earn-the-next-leg-up-video`,
  },
  {
    slug: `jobs-report-today-stocks-jump-as-hiring-softens-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Jobs Report Today: Stocks Jump as Hiring Softens`,
    summary: `Nasdaq flirts with a new record; bond yields turn…`,
    body: [
      `Nasdaq flirts with a new record; bond yields turn higher`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 2, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/jobs-report-september-stock-market-10-02-2026?mod=rss_markets_main`,
  },
  {
    slug: `gasoline-prices-expected-to-remain-high-as-global-suppl-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Gasoline prices expected to remain high as global supply shortages continue`,
    summary: `Russia’s invasion of Ukraine and the virtual halt in tanker traffic through the Strait of Hormuz to keep crude prices…`,
    body: [
      `Russia’s invasion of Ukraine and the virtual halt in tanker traffic through the Strait of Hormuz to keep crude prices elevated`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 2, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-gas-prices-fuel-tax-break-global-oil-supply/`,
  },
  {
    slug: `sleepless-on-wall-street-all-night-stock-exchanges-comi-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Sleepless on Wall Street: All-night stock exchanges coming soon`,
    summary: `Nasdaq, NYSE Arca, 24X National Exchange and Cboe EDGX have crafted plans to add an overnight…`,
    body: [
      `Nasdaq, NYSE Arca, 24X National Exchange and Cboe EDGX have crafted plans to add an overnight session`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 2, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/news/wall-street-all-night-stock-exchanges-coming`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
