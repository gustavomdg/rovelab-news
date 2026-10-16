// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-10-16T18:35:20.574Z

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
    slug: `trump-says-he-didnt-order-ukraine-starshield-access-lim-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Trump Says He Didn’t Order Ukraine Starshield Access Limits`,
    summary: `Melinda Haring, nonresident senior fellow at the Atlantic Council, said that Ukraine running out of Patriot missiles and the outage of the country's Starshield were 'tremendously damaging' for frontline defenses in the…`,
    body: [
      `Melinda Haring, nonresident senior fellow at the Atlantic Council, said that Ukraine running out of Patriot missiles and the outage of the country's Starshield were 'tremendously damaging' for frontline defenses in the war with Russia.`,
      `Haring also discussed the relationship between Ukraine and the US, saying that despite Trump's recent Russian diesel deal and his comments about Ukraine's leadership, Americans support Ukraine and are 'ashamed of what’s happening in Washington.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 16, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/videos/2026-10-16/trump-says-he-didn-t-order-ukraine-starshield-limits-video`,
  },
  {
    slug: `stock-market-today-tech-stocks-slump-as-nasdaq-faces-we-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Tech Stocks Slump as Nasdaq Faces Weekly Loss`,
    summary: `AI anxieties deepen while investors pare rate-hike…`,
    body: [
      `AI anxieties deepen while investors pare rate-hike bets`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 16, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-10-16-2026?mod=rss_markets_main`,
  },
  {
    slug: `joly-warns-stelco-owner-to-uphold-jobs-or-risk-forced-s-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Joly warns Stelco owner to uphold jobs or risk forced sale of Canadian assets`,
    summary: `Industry Minister says Ottawa open to taking equity stakes in key…`,
    body: [
      `Industry Minister says Ottawa open to taking equity stakes in key industries`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 16, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-melanie-joly-warns-stelco-owner-cleveland-cliffs-to-uphold-jobs/`,
  },
  {
    slug: `fairfax8217s-deal-for-idbi-marks-includes-no-major-inve-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Fairfax&#8217;s deal for IDBI marks includes no major investment banks`,
    summary: `The US$5.6 billion sale to Canadian billionaire Prem Watsa’s firm was approved…`,
    body: [
      `The US$5.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 16, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/fp-finance/banking/biggest-banking-deal-india-no-investment-bankers`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
