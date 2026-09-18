// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-09-18T18:02:22.053Z

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
    slug: `copper-notches-11th-weekly-gain-in-twelve-on-chinese-bu-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Copper Notches 11th Weekly Gain in Twelve on Chinese Buying`,
    summary: `Copper notched its 11th weekly gain in twelve as signs of a rebound in Chinese demand helped to offset hawkish messaging from the Federal Reserve about the likelihood of more interest-rate…`,
    body: [
      `Copper notched its 11th weekly gain in twelve as signs of a rebound in Chinese demand helped to offset hawkish messaging from the Federal Reserve about the likelihood of more interest-rate rises.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 18, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-09-18/copper-set-for-weekly-gain-as-chinese-buyers-return-to-the-fore`,
  },
  {
    slug: `stock-market-today-stocks-fall-as-treasury-yields-rise-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Stocks Fall as Treasury Yields Rise`,
    summary: `The Dow Jones Industrial Average is headed for its third straight weekly…`,
    body: [
      `The Dow Jones Industrial Average is headed for its third straight weekly loss`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 18, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-09-18-2026?mod=rss_markets_main`,
  },
  {
    slug: `volkswagen-issues-profit-warning-over-115-billion-hit-l-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Volkswagen issues profit warning over $11.5-billion hit led by Porsche`,
    summary: `Impairments follow automaker’s plan to undertake the largest restructuring in its…`,
    body: [
      `Impairments follow automaker’s plan to undertake the largest restructuring in its history`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 18, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/international-business/article-volkswagen-issues-profit-warning-over-115-billion-hit-led-by-porsche/`,
  },
  {
    slug: `international-human-rights-lawyer-jared-genser-and-form-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `International Human Rights Lawyer Jared Genser and Former White House Counsel Lanny J. Davis Join Legal and Advocacy Team Supporting Cambodian Businessman Yim Leak, Seiden Law LLP Announces`,
    summary: `Jared Genser, one of the world&#8217;s most recognized international human rights lawyers, and Lanny J. Davis, an adviser to former presidents George W. Bush and Bill Clinton, join the legal and advocacy team for…`,
    body: [
      `Jared Genser, one of the world&#8217;s most recognized international human rights lawyers, and Lanny J.  Davis, an adviser to former presidents George W.`,
      `Bush and Bill Clinton, join the legal and advocacy team for Cambodian businessman Yim Leak and challenge what they call a coordinated smear campaign in Thailand.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Sep 18, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/pmn/business-wire-news-releases-pmn/international-human-rights-lawyer-jared-genser-and-former-white-house-counsel-lanny-j-davis-join-legal-and-advocacy-team-supporting-cambodian-businessman-yim-leak-seiden-law-llp-announces`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
