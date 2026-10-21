// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-10-21T19:05:17.056Z

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
    slug: `us-futures-climb-with-spacex-results-helping-boost-ai-s-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `US Futures Climb With SpaceX Results Helping Boost AI Sentiment`,
    summary: `The S&P 500 Index touched session highs in afternoon trading on Wednesday, helped by solid earnings from SpaceX and Super Micro Computer Inc., which bolstered bullish views of the artificial-intelligence trade.…`,
    body: [
      `The S&P 500 Index touched session highs in afternoon trading on Wednesday, helped by solid earnings from SpaceX and Super Micro Computer Inc. , which bolstered bullish views of the artificial-intelligence trade.  Attention turns next to earnings from tech giants Meta Platforms Inc.`,
      `and Tesla Inc. , due after the bell.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 21, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-10-21/us-futures-climb-with-spacex-results-helping-boost-ai-sentiment`,
  },
  {
    slug: `stock-market-today-spacex-tesla-shares-rise-after-deal-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: SpaceX, Tesla Shares Rise After Deal Talks`,
    summary: `Nasdaq gains as rocket-and-AI maker&apos;s earnings boost AI…`,
    body: [
      `Nasdaq gains as rocket-and-AI maker&apos;s earnings boost AI sentiment`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 21, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-10-21-2026?mod=rss_markets_main`,
  },
  {
    slug: `canadian-organizations-urged-to-address-web-programming-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Canadian organizations urged to address web programming vulnerability`,
    summary: `Canadian Centre for Cyber Security issued an alert about the ‘critical vulnerabilities’ identified by PHP, a programming language used in websites around the…`,
    body: [
      `Canadian Centre for Cyber Security issued an alert about the ‘critical vulnerabilities’ identified by PHP, a programming language used in websites around the world`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 21, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-canada-cybersecurity-php-programming-vulnerability-october-21/`,
  },
  {
    slug: `ifm-investors-announces-leadership-changes-to-its-infra-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `IFM Investors Announces Leadership Changes to Its Infrastructure Business in North America`,
    summary: `HOUSTON &#8212; IFM Investors today announced that Julio Garcia, Head of Infrastructure, North America, has advised of his intention to retire after more than 18 years with the firm. Garcia will step down from his…`,
    body: [
      `HOUSTON &#8212; IFM Investors today announced that Julio Garcia, Head of Infrastructure, North America, has advised of his intention to retire after more than 18 years with the firm.`,
      `Garcia will step down from his executive responsibilities following a transition period.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 21, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/pmn/business-wire-news-releases-pmn/ifm-investors-announces-leadership-changes-to-its-infrastructure-business-in-north-america`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
