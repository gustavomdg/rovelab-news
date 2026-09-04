// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-09-04T18:02:13.736Z

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
    slug: `us-sanctions-small-turkish-investment-bank-over-iran-li-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `US Sanctions Small Turkish Investment Bank Over Iran Links`,
    summary: `The United States sanctioned Golden Global Investment Bank, a relatively small Turkish firm, as Treasury Secretary Scott Bessent continues his efforts to isolate Iran’s economy after a muted start to a new sanctions…`,
    body: [
      `The United States sanctioned Golden Global Investment Bank, a relatively small Turkish firm, as Treasury Secretary Scott Bessent continues his efforts to isolate Iran’s economy after a muted start to a new sanctions effort.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 4, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-09-04/us-sanctions-small-turkish-investment-bank-over-iran-links`,
  },
  {
    slug: `stock-market-today-short-term-treasury-yields-climb-aft-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Short-Term Treasury Yields Climb After Strong Jobs Report`,
    summary: `U.S. added 162,000 jobs in August, boosting the chances of a rate hike; stocks…`,
    body: [
      `U.`,
      `S.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 4, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/august-jobs-report-stock-market-09-04-2026?mod=rss_markets_main`,
  },
  {
    slug: `volkswagens-surprise-turnaround-agreement-averts-stakeh-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Volkswagen’s surprise turnaround agreement averts stakeholder clash as job cuts loom`,
    summary: `The deal on the biggest restructuring in the group’s history includes a further 50,000 job cuts, bringing the total agreed to…`,
    body: [
      `The deal on the biggest restructuring in the group’s history includes a further 50,000 job cuts, bringing the total agreed to 100,000,`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 4, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-volkswagens-surprise-turnaround-agreement-averts-stakeholder-clash-as/`,
  },
  {
    slug: `media-advisory-toronto-038-york-region-labour-council-t-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `MEDIA ADVISORY: Toronto &#038; York Region Labour Council to Hold Press Conference Before Labour Day Parade`,
    summary: `TORONTO, Sept. 04, 2026 (GLOBE NEWSWIRE) &#8212; WHAT: The Toronto &#38; York Region Labour Council will take to the streets with over 20,000 labour members to defend workers everywhere, honouring the past, present and…`,
    body: [
      `TORONTO, Sept.`,
      `04, 2026 (GLOBE NEWSWIRE) &#8212; WHAT: The Toronto &#38; York Region Labour Council will take to the streets with over 20,000 labour members to defend workers everywhere, honouring the past, present and future victories of the Labour Movement at the Labour Day Parade.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 4, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/media-advisory-toronto-york-region-labour-council-to-hold-press-conference-before-labour-day-parade`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
