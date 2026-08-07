// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-08-07T15:52:36.390Z

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
    slug: `brasil-protege-su-selva-bolivia-podra-estar-pagando-el-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Brasil protege su selva, Bolivia podría estar pagando el precio`,
    summary: `Brasil redujo drásticamente la deforestación gracias a una aplicación más estricta de la ley. Pero la destrucción no se detuvo: cruzó la frontera. ¿Cómo se convirtió Bolivia en la nueva crisis de la Amazonía? (Source:…`,
    body: [
      `Brasil redujo drásticamente la deforestación gracias a una aplicación más estricta de la ley.  Pero la destrucción no se detuvo: cruzó la frontera.`,
      `¿Cómo se convirtió Bolivia en la nueva crisis de la Amazonía?`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 7, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/videos/2026-08-07/brasil-reduce-la-tala-bolivia-estaria-pagando-el-precio-video`,
  },
  {
    slug: `stock-market-today-dow-rises-after-jobs-data-misses-for-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Dow Rises After Jobs Data Misses Forecasts`,
    summary: `U.S. economy lost jobs in July, prompting traders to scale back rate-hike…`,
    body: [
      `U.`,
      `S.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 7, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/july-jobs-report-stock-market-08-07-2026?mod=rss_markets_main`,
  },
  {
    slug: `ottawa-discussing-trade-concessions-with-the-us-in-retu-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Ottawa discussing trade concessions with the U.S. in return for some tariff relief, sources say`,
    summary: `U.S. has a priority list of about 10 items it wants dealt with, one source…`,
    body: [
      `U.S. has a priority list of about 10 items it wants dealt with, one source says`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 7, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-canada-and-us-discussing-trade-concessions-in-return-for-partial/`,
  },
  {
    slug: `samsung-officially-launches-galaxy-z-fold8-ultra-fold8-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `Samsung Officially Launches Galaxy Z Fold8 Ultra, Fold8, Flip8, Watch Ultra2 and Watch9`,
    summary: `All-new Galaxy Z series opens a new chapter in foldables with three distinct experiences designed for Ultra productivity, immersive discovery and self-expression, joined by new Galaxy Watch devices built for deeper…`,
    body: [
      `All-new Galaxy Z series opens a new chapter in foldables with three distinct experiences designed for Ultra productivity, immersive discovery and self-expression, joined by new Galaxy Watch devices built for deeper health insights MISSISSAUGA, Ontario &#8212; Samsung Electronics today announced that the new Galaxy Z series and Galaxy Watch lineup are beginning to roll out [&#8230;]`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Aug 7, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/pmn/business-wire-news-releases-pmn/samsung-officially-launches-galaxy-z-fold8-ultra-fold8-flip8-watch-ultra2-and-watch9`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
