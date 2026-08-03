// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-08-03T02:44:36.721Z

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
    slug: `yen-rises-amid-speculation-of-more-intervention-after-u-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Yen Rises Amid Speculation of More Intervention After US Support`,
    summary: `The yen rallied sharply on Monday amid speculation that authorities may have intervened to prop up the currency again after coordinated action between the US and Japan last…`,
    body: [
      `The yen rallied sharply on Monday amid speculation that authorities may have intervened to prop up the currency again after coordinated action between the US and Japan last week.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 2, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-08-02/yen-traders-brace-for-more-intervention-with-us-at-japan-s-side`,
  },
  {
    slug: `big-tech-earnings-are-sending-valuations-in-wildly-diff-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Big Tech Earnings Are Sending Valuations in Wildly Different Directions`,
    summary: `Reports from tech giants drove big gains and losses, while the Fed-fueled bond selloff adds to market…`,
    body: [
      `Reports from tech giants drove big gains and losses, while the Fed-fueled bond selloff adds to market pressures.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 2, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/finance/stocks/tech-company-earnings-stock-market-5c4179d8?mod=rss_markets_main`,
  },
  {
    slug: `westjet-flight-attendants-go-on-strike-grounding-600-fl-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `WestJet flight attendants go on strike, grounding 600 flights on long weekend`,
    summary: `Talks between the airline and the union representing 4,400 flight attendants broke down late Saturday over the issue of wages and ground…`,
    body: [
      `Talks between the airline and the union representing 4,400 flight attendants broke down late Saturday over the issue of wages and ground pay`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 2, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-westjet-flight-attendants-go-on-strike-after-talks-break-down-between/`,
  },
  {
    slug: `india8217s-ipo-boom-cools-as-weak-markets-force-issuers-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `India&#8217;s IPO Boom Cools as Weak Markets Force Issuers to Cut Back`,
    summary: `India’s initial public offering boom is fading, with proceeds down by a fifth from a year earlier as companies cut deal sizes, accept lower valuations and delay listings, raising doubts about sustaining momentum after…`,
    body: [
      `India’s initial public offering boom is fading, with proceeds down by a fifth from a year earlier as companies cut deal sizes, accept lower valuations and delay listings, raising doubts about sustaining momentum after two record years.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 2, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/pmn/business-pmn/indias-ipo-boom-cools-as-weak-markets-force-issuers-to-cut-back`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
