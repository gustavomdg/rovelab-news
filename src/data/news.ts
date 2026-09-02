// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-09-02T18:24:08.256Z

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
    slug: `two-sigmas-overdeck-says-control-of-firm-a-concern-in-d-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Two Sigma’s Overdeck Says Control of Firm a Concern in Divorce`,
    summary: `Two Sigma Investments co-founder John Overdeck testified in his divorce trial that maintaining equal control of the quantitative hedge fund with co-founder David Siegel is a “principal concern” for him in any division…`,
    body: [
      `Two Sigma Investments co-founder John Overdeck testified in his divorce trial that maintaining equal control of the quantitative hedge fund with co-founder David Siegel is a “principal concern” for him in any division of marital assets.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 2, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-09-02/two-sigma-s-overdeck-says-control-of-firm-a-concern-in-divorce`,
  },
  {
    slug: `stock-market-today-treasury-selloff-pauses-while-stocks-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Treasury Selloff Pauses While Stocks Rise`,
    summary: `10-year yield touches highest level since 2023; global bond yields keep…`,
    body: [
      `10-year yield touches highest level since 2023; global bond yields keep rising`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 2, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-09-02-2026?mod=rss_markets_main`,
  },
  {
    slug: `ottawa-commits-millions-to-help-nova-scotia-companies-w-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Ottawa commits millions to help Nova Scotia companies weather U.S. tariffs`,
    summary: `Package includes grants for 27 businesses and organizations, says Justice Minister Sean…`,
    body: [
      `Package includes grants for 27 businesses and organizations, says Justice Minister Sean Fraser`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 2, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/canada/article-nova-scotia-companies-us-tariff-trade-trump/`,
  },
  {
    slug: `restaurants-canada-welcomes-extension-of-federal-fuel-e-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Restaurants Canada Welcomes Extension of Federal Fuel Excise Tax Suspension`,
    summary: `Toronto, Sept. 02, 2026 (GLOBE NEWSWIRE) &#8212; Restaurants Canada welcomes today’s announcement by the federal government that it is extending the suspension of the federal fuel excise tax until January 31, 2027. The…`,
    body: [
      `Toronto, Sept.  02, 2026 (GLOBE NEWSWIRE) &#8212; Restaurants Canada welcomes today’s announcement by the federal government that it is extending the suspension of the federal fuel excise tax until January 31, 2027.`,
      `The extension provides some relief to Canadians and businesses facing continued cost pressures.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 2, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/restaurants-canada-welcomes-extension-of-federal-fuel-excise-tax-suspension`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
