// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-09-23T18:48:15.406Z

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
    slug: `us-bond-market-slide-deepens-pushing-yields-to-two-deca-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `US Bond-Market Slide Deepens, Pushing Yields to Two-Decade Highs`,
    summary: `The losses in the US Treasuries market intensified on Wednesday as robust economic data and a weak auction drove yields across most maturities to the highest levels in almost two…`,
    body: [
      `The losses in the US Treasuries market intensified on Wednesday as robust economic data and a weak auction drove yields across most maturities to the highest levels in almost two decades.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 23, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-09-23/us-treasury-five-year-yields-breach-5-for-first-time-since-2007`,
  },
  {
    slug: `stock-market-today-treasury-selloff-deepens-sending-10-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Treasury Selloff Deepens, Sending 10-Year Yield Above 5.1%`,
    summary: `Sharp yield rise comes as oil prices climb and inflation concerns build; Nasdaq…`,
    body: [
      `Sharp yield rise comes as oil prices climb and inflation concerns build; Nasdaq falls`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 23, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-09-23-2026?mod=rss_markets_main`,
  },
  {
    slug: `toronto-tech-conference-speakers-highlight-need-for-mor-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Toronto tech conference speakers highlight need for more domestic investment`,
    summary: `Panelists Vass Bednar and Tal Schwartz called on Ottawa, investors to support Canadian companies at the gathering formerly known as…`,
    body: [
      `Panelists Vass Bednar and Tal Schwartz called on Ottawa, investors to support Canadian companies at the gathering formerly known as Elevate`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 23, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-torontos-elevate-tech-conference-to-rebrand-as-nrth/`,
  },
  {
    slug: `a-canadian-who-lived-abroad-thought-she-followed-tfsa-c-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `A Canadian who lived abroad thought she followed TFSA contribution rules, but CRA surprised her with a penalty tax`,
    summary: `Jamie Golombek: Misunderstood non-residency rules and waiting too long to fix her overcontribution cost her any chance at…`,
    body: [
      `Jamie Golombek: Misunderstood non-residency rules and waiting too long to fix her overcontribution cost her any chance at relief`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 23, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/personal-finance/canadian-lived-abroad-tfsa-contribution-rules-cra-penalty-tax`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
