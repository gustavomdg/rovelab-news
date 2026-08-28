// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-08-28T23:50:29.956Z

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
    slug: `wall-street-week-debt-consequences-defying-fiscal-gravi-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Wall Street Week | Debt & Consequences, Defying Fiscal Gravity, Hollywood Gets Democratized`,
    summary: `This week, Chrystia Freeland talks with the former finance ministers of the Netherlands and Germany about what it takes to bring spending under control. And, are US deficits now a bigger driver of interest rates than…`,
    body: [
      `This week, Chrystia Freeland talks with the former finance ministers of the Netherlands and Germany about what it takes to bring spending under control.  And, are US deficits now a bigger driver of interest rates than inflation?`,
      `Plus, as Fed Chair Kevin Warsh makes his debut at the Jackson Hole Economic Policy Symposium, we revisit the story of the wealthiest place in America.  Later, the rise of YouTube filmmakers is democratizing discovery, while also flooding the market with more content than audiences can watch.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 28, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/videos/2026-08-28/wall-street-week-defying-fiscal-gravity-video`,
  },
  {
    slug: `stock-market-news-aug-28-2026-warsh-comments-boost-rate-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market News, Aug. 28, 2026: Warsh Comments Boost Rate-Hike Bets`,
    summary: `Yields rise after Fed chairman&apos;s speech focuses on…`,
    body: [
      `Yields rise after Fed chairman&apos;s speech focuses on inflation`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 28, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-jackson-hole-08-28-2026?mod=rss_markets_main`,
  },
  {
    slug: `us-enters-agreement-with-venezuela-to-take-control-of-6-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `U.S. enters agreement with Venezuela to take control of 65 billion barrels of oil reserves, Trump says`,
    summary: `The announcement comes nearly nine months after the U.S. military at Trump’s direction carried out an operation to capture Venezuela’s…`,
    body: [
      `The announcement comes nearly nine months after the U.`,
      `S.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 28, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-us-enters-agreement-with-venezuela-to-take-control-of-65-billion/`,
  },
  {
    slug: `takeda-receives-us-fda-approval-of-mimrylo-rusfertide-m-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Takeda Receives U.S. FDA Approval of MIMRYLO™ (rusfertide), Marking a Potential Shift in the Treatment Paradigm for Polycythemia Vera`,
    summary: `MIMRYLO, a First-in-Class Medicine with a Unique Mechanism of Action, is Approved for the Treatment of Erythrocytosis in Adults with Polycythemia Vera (PV) MIMRYLO Has Been Shown to Maintain Hematocrit Control, the…`,
    body: [
      `MIMRYLO, a First-in-Class Medicine with a Unique Mechanism of Action, is Approved for the Treatment of Erythrocytosis in Adults with Polycythemia Vera (PV) MIMRYLO Has Been Shown to Maintain Hematocrit Control, the Primary Treatment Goal in PV, as Well as Reduce Phlebotomy Burden and Improve Fatigue Approval Supported by Phase 3 VERIFY Results Showing 76.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 28, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/pmn/business-wire-news-releases-pmn/takeda-receives-u-s-fda-approval-of-mimrylo-rusfertide-marking-a-potential-shift-in-the-treatment-paradigm-for-polycythemia-vera`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
