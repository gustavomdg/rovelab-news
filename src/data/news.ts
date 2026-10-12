// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-10-12T22:22:28.649Z

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
    slug: `asian-stocks-to-fall-after-us-chipmaker-selloff-markets-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Asian Stocks to Fall After US Chipmaker Selloff: Markets Wrap`,
    summary: `Asian stocks were set to decline as a selloff in chipmakers weighed on sentiment ahead of a pivotal earnings season and US inflation data that could shape the Federal Reserve’s next…`,
    body: [
      `Asian stocks were set to decline as a selloff in chipmakers weighed on sentiment ahead of a pivotal earnings season and US inflation data that could shape the Federal Reserve’s next move.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 12, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-10-12/stock-market-today-dow-s-p-live-updates`,
  },
  {
    slug: `stock-market-today-oil-gains-on-fresh-energy-strikes-in-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Oil Gains on Fresh Energy Strikes in Ukraine`,
    summary: `Dow industrials rise, energy stocks hit…`,
    body: [
      `Dow industrials rise, energy stocks hit record`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 12, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-10-12-2026?mod=rss_markets_main`,
  },
  {
    slug: `canadian-investors-concerned-about-future-of-thames-wat-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Canadian investors concerned about future of Thames Water as Britain mulls nationalization`,
    summary: `The water utility, which serves about 16 million customers in England, has been teetering on the edge of collapse for…`,
    body: [
      `The water utility, which serves about 16 million customers in England, has been teetering on the edge of collapse for years`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 12, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-canadian-investors-concerned-thames-water-britain-nationalization/`,
  },
  {
    slug: `teva-to-host-r038d-day-on-wednesday-november-11-in-new-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Teva to Host R&#038;D Day on Wednesday, November 11 in New York City`,
    summary: `TEL AVIV, Israel, Oct. 12, 2026 (GLOBE NEWSWIRE) &#8212; Teva Pharmaceutical Industries Ltd. (NYSE and TASE: TEVA) today announced that it will host an R&#38;D Day on Wednesday, November 11, 2026. At the R&#38;D Day,…`,
    body: [
      `TEL AVIV, Israel, Oct.  12, 2026 (GLOBE NEWSWIRE) &#8212; Teva Pharmaceutical Industries Ltd.`,
      `(NYSE and TASE: TEVA) today announced that it will host an R&#38;D Day on Wednesday, November 11, 2026.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 12, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/globe-newswire/teva-to-host-rd-day-on-wednesday-november-11-in-new-york-city`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
