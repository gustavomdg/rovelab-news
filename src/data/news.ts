// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-10-19T20:19:58.411Z

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
    slug: `gold-declines-as-bond-yields-stay-elevated-despite-oil-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Gold Declines as Bond Yields Stay Elevated Despite Oil Drop`,
    summary: `Gold slipped as bond yields stayed elevated despite falling energy prices, with traders assessing the outlook for the Federal Reserve’s interest-rate…`,
    body: [
      `Gold slipped as bond yields stayed elevated despite falling energy prices, with traders assessing the outlook for the Federal Reserve’s interest-rate path.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 18, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-10-18/gold-edges-higher-as-traders-ease-rate-hike-bets-on-warsh-speech`,
  },
  {
    slug: `stock-market-today-tech-stocks-rebound-after-fridayx201-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Tech Stocks Rebound After Friday&#x2019;s Selloff`,
    summary: `Intel makes up some ground; European stocks, French bonds…`,
    body: [
      `Intel makes up some ground; European stocks, French bonds slump`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 19, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-10-19-2026?mod=rss_markets_main`,
  },
  {
    slug: `nvidia-challenger-tenstorrent-raises-15-billion-valuing-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Nvidia challenger Tenstorrent raises $1.5-billion, valuing Toronto-founded company at $6.2-billion`,
    summary: `AI semiconductor maker reportedly rebuffed buyout attempts by Intel and Qualcomm earlier this…`,
    body: [
      `AI semiconductor maker reportedly rebuffed buyout attempts by Intel and Qualcomm earlier this year`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 19, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-tenstorrent-raises-15-billion-toronto-founded-valued-62-billion/`,
  },
  {
    slug: `fortrea-completes-acquisition-of-the-early-phase-servic-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Fortrea Completes Acquisition of the Early Phase Services Division from Worldwide Clinical Trials`,
    summary: `Expands Fortrea’s early clinical development network with dedicated bioanalytical capabilities, increased clinical research unit capacity and a more integrated platform for clients Highlights Fortrea completes…`,
    body: [
      `Expands Fortrea’s early clinical development network with dedicated bioanalytical capabilities, increased clinical research unit capacity and a more integrated platform for clients Highlights Fortrea completes acquisition of the Early Phase Services division from Worldwide Clinical Trials Adds a 60,000-square-foot GLP-compliant bioanalytical laboratory in Austin, Texas; a 200-bed GCP-compliant clinical pharmacology unit in San Antonio, Texas; [&#8230;]`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 19, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/fortrea-completes-acquisition-of-the-early-phase-services-division-from-worldwide-clinical-trials`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
