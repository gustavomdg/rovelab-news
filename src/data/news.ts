// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: 2026-10-30T19:49:51.939Z

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
    slug: `latest-oil-market-news-and-analysis-for-oct-30-bloomberg`,
    source: `Bloomberg`,
    sourceUrl: `https://www.bloomberg.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `MARKET`,
    title: `Latest Oil Market News and Analysis for Oct. 30`,
    summary: `Oil climbed on worries that the US may resume strikes against Iran, adding fresh risk to supplies in the Middle…`,
    body: [
      `Oil climbed on worries that the US may resume strikes against Iran, adding fresh risk to supplies in the Middle East.`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 29, 2026`,
    readTime: `2 min read`,
    url: `https://www.bloomberg.com/news/articles/2026-10-29/latest-oil-market-news-and-analysis-for-oct-30`,
  },
  {
    slug: `stock-market-today-deepening-tech-selloff-pushes-nasdaq-wsj`,
    source: `Wall Street Journal`,
    sourceUrl: `https://www.wsj.com`,
    flag: `🇺🇸`,
    market: `United States`,
    tag: `ECONOMY`,
    title: `Stock Market Today: Deepening Tech Selloff Pushes Nasdaq Toward Its Worst Month in Over a Year`,
    summary: `Tech-heavy index falls 3% following disappointing earnings from Alphabet, Intel and Amazon this…`,
    body: [
      `Tech-heavy index falls 3% following disappointing earnings from Alphabet, Intel and Amazon this week`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 30, 2026`,
    readTime: `2 min read`,
    url: `https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-10-30-2026?mod=rss_markets_main`,
  },
  {
    slug: `magnas-third-quarter-profit-increases-as-revenue-edges-globe-mail`,
    source: `The Globe and Mail`,
    sourceUrl: `https://www.theglobeandmail.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `ECONOMY`,
    title: `Magna’s third-quarter profit increases as revenue edges lower`,
    summary: `Drop in revenue reflected lower light vehicle production and impact of divestitures, company…`,
    body: [
      `Drop in revenue reflected lower light vehicle production and impact of divestitures, company says`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 30, 2026`,
    readTime: `2 min read`,
    url: `https://www.theglobeandmail.com/business/article-magna-international-third-quarter-results/`,
  },
  {
    slug: `bp-profit-hits-18-year-high-as-oil-refining-margins-sur-financial-post`,
    source: `Financial Post`,
    sourceUrl: `https://financialpost.com`,
    flag: `🇨🇦`,
    market: `Canada`,
    tag: `RETAIL`,
    title: `BP profit hits 18-year high as oil refining margins surge`,
    summary: `The rapid improvement in BP’s balance sheet gives CEO Meg O’Neill more room to consider shareholder…`,
    body: [
      `The rapid improvement in BP’s balance sheet gives CEO Meg O’Neill more room to consider shareholder returns`,
      `For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.`,
    ],
    date: `Oct 30, 2026`,
    readTime: `2 min read`,
    url: `https://financialpost.com/commodities/energy/oil-gas/bp-profit-hits-18-year-high-oil-refining-margins-surge`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
