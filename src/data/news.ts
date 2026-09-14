// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-09-14T19:43:17.667Z

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
    slug: `encouraging-to-hear-ai-firms-taking-risk-seriously-says-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `'Encouraging' to Hear AI Firms Taking Risk Seriously, Says Moynihan`,
    summary: `Bank of America chairman and CEO Brian Moynihan said that it is 'encouraging' to hear that AI firms are taking the responsibility of AI safety seriously as leaders raise the alarm about the pace of innovation and…`,
    body: [
      `Bank of America chairman and CEO Brian Moynihan said that it is 'encouraging' to hear that AI firms are taking the responsibility of AI safety seriously as leaders raise the alarm about the pace of innovation and potential ramifications.`,
      `Moynihan, talking to Bloomberg's Dani Burger, said that he expects trading to be ‘relatively flat’ in the third quarter compared to last year.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 14, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/videos/2026-09-14/encouraging-to-hear-ai-taking-risk-seriously-moynihan-video`,
  },
  {
    slug: `stock-market-today-10-year-treasury-yield-touches-5-pus-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: 10-Year Treasury Yield Touches 5%, Pushed by Oil Surge`,
    summary: `Concerns about AI safety weigh on chip…`,
    body: [
      `Concerns about AI safety weigh on chip stocks`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 14, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-09-14-2026?mod=rss_markets_main`,
  },
  {
    slug: `trump-plays-down-ai-concerns-calls-it-a-conspiracy-agai-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Trump plays down AI concerns, calls it a conspiracy against the technology`,
    summary: `Trump is pushing back against tech leaders calling for greater government oversight of…`,
    body: [
      `Trump is pushing back against tech leaders calling for greater government oversight of AI`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 14, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/technology/science/article-trump-dismisses-ai-guardrails-data-centres/`,
  },
  {
    slug: `alaris-equity-partners-announces-100-million-bought-dea-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `ALARIS EQUITY PARTNERS ANNOUNCES $100 MILLION BOUGHT DEAL OFFERING OF TRUST UNITS, US$95 MILLION INVESTMENT INTO A NEW PARTNER, DISTRIBUTION INCREASE AND AMENDMENT TO CREDIT FACILITY`,
    summary: `NOT FOR DISTRIBUTION IN THE UNITED STATES. FAILURE TO COMPLY WITH THIS RESTRICTION MAY CONSTITUTE A VIOLATION OF UNITED STATES SECURITIES LAW Calgary, Alberta, Sept. 14, 2026 (GLOBE NEWSWIRE) &#8212; Alaris Equity…`,
    body: [
      `NOT FOR DISTRIBUTION IN THE UNITED STATES.  FAILURE TO COMPLY WITH THIS RESTRICTION MAY CONSTITUTE A VIOLATION OF UNITED STATES SECURITIES LAW Calgary, Alberta, Sept.`,
      `14, 2026 (GLOBE NEWSWIRE) &#8212; Alaris Equity Partners Income Trust (TSX:AD.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 14, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/alaris-equity-partners-announces-100-million-bought-deal-offering-of-trust-units-us95-million-investment-into-a-new-partner-distribution-increase-and-amendment-to-credit-facility`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
