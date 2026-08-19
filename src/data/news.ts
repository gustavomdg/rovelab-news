// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-08-19T15:27:02.420Z

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
    slug: `target-raises-sales-outlook-as-turnaround-gains-strengt-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Target Raises Sales Outlook as Turnaround Gains Strength`,
    summary: `Joe Feldman, senior research analyst and assistant director of research at Telsey, says there is a “strong signal that the turnaround is working” at Target. The retailer lifted its full-year guidance after results…`,
    body: [
      `Joe Feldman, senior research analyst and assistant director of research at Telsey, says there is a “strong signal that the turnaround is working” at Target.`,
      `The retailer lifted its full-year guidance after results outpaced estimates in the second-quarter.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 19, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/videos/2026-08-19/target-raises-sales-outlook-as-turnaround-gains-strength-video`,
  },
  {
    slug: `stock-market-today-bond-yields-dive-after-bessent-steps-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Bond Yields Dive After Bessent Steps Up Buybacks`,
    summary: `Treasury says it doesn&apos;t intend to &apos;mitigate episodes of acute market…`,
    body: [
      `Treasury says it doesn&apos;t intend to &apos;mitigate episodes of acute market stress&apos;`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 19, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-08-19-2026?mod=rss_markets_main`,
  },
  {
    slug: `moderna-shares-surge-as-melanoma-vaccine-with-merck-suc-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Moderna shares surge as melanoma vaccine with Merck succeeds in large trial`,
    summary: `Interim analysis ​shows goals were met for recurrence and preventing cancer…`,
    body: [
      `Interim analysis ​shows goals were met for recurrence and preventing cancer spread`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 19, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/investing/article-merck-moderna-skin-cancer-vaccine-trial-results/`,
  },
  {
    slug: `rundoo-the-ai-first-platform-for-independent-supply-sto-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Rundoo, the AI-First Platform for Independent Supply Stores, Announces $48 Million in Financing`,
    summary: `With customers in segments including paint, hardware, lawn &#38; garden, and farm &#38; feed, Rundoo—founded by two Stanford grads—is helping smaller retailers compete in an uncertain economy REDWOOD CITY, Calif.…`,
    body: [
      `With customers in segments including paint, hardware, lawn &#38; garden, and farm &#38; feed, Rundoo—founded by two Stanford grads—is helping smaller retailers compete in an uncertain economy REDWOOD CITY, Calif.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 19, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/pmn/business-wire-news-releases-pmn/rundoo-the-ai-first-platform-for-independent-supply-stores-announces-48-million-in-financing`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
