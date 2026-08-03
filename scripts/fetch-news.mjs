/**
 * fetch-news.mjs
 * Fetches top story from each RSS source and rewrites src/data/news.ts
 * Run: node scripts/fetch-news.mjs
 */

import { writeFileSync } from 'fs';
import { get } from 'https';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ---------------------------------------------------------------------------
// Source config
// ---------------------------------------------------------------------------
const SOURCES = [
  {
    name: 'Bloomberg',
    sourceUrl: 'https://www.bloomberg.com',
    flag: '🇺🇸',
    market: 'United States',
    tag: 'MARKET',
    rss: 'https://feeds.bloomberg.com/markets/news.rss',
    slugSuffix: 'bloomberg',
  },
  {
    name: 'Wall Street Journal',
    sourceUrl: 'https://www.wsj.com',
    flag: '🇺🇸',
    market: 'United States',
    tag: 'ECONOMY',
    rss: 'https://feeds.content.dowjones.io/public/rss/RSSMarketsMain',
    slugSuffix: 'wsj',
  },
  {
    name: 'Reuters',
    sourceUrl: 'https://www.reuters.com',
    flag: '🇺🇸',
    market: 'United States',
    tag: 'ECONOMY',
    rss: 'https://feeds.reuters.com/reuters/businessNews',
    slugSuffix: 'reuters',
  },
  {
    name: 'The Globe and Mail',
    sourceUrl: 'https://www.theglobeandmail.com',
    flag: '🇨🇦',
    market: 'Canada',
    tag: 'ECONOMY',
    rss: 'https://www.theglobeandmail.com/arc/outboundfeeds/rss/category/business/',
    slugSuffix: 'globe-mail',
  },
  {
    name: 'Financial Post',
    sourceUrl: 'https://financialpost.com',
    flag: '🇨🇦',
    market: 'Canada',
    tag: 'RETAIL',
    rss: 'https://financialpost.com/feed',
    slugSuffix: 'financial-post',
  },
  {
    name: 'CBC News',
    sourceUrl: 'https://www.cbc.ca/news',
    flag: '🇨🇦',
    market: 'Canada',
    tag: 'ECONOMY',
    rss: 'https://www.cbc.ca/cmlink/rss-business',
    slugSuffix: 'cbc',
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function fetchUrl(url, redirectCount = 0) {
  if (redirectCount > 5) return Promise.reject(new Error('Too many redirects'));
  return new Promise((resolve, reject) => {
    const req = get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RoveLabNewsBot/1.0; +https://rovelabnews.netlify.app)',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*',
      },
      timeout: 15000,
    }, (res) => {
      if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
        return fetchUrl(res.headers.location, redirectCount + 1).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      let data = '';
      res.setEncoding('utf8');
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error(`Timeout: ${url}`)); });
  });
}

function parseRSSItems(xml) {
  const items = [];
  const itemRegex = /<item[\s>]([\s\S]*?)<\/item>/g;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const raw = match[1];

    const title = extractTag(raw, 'title');
    const link  = extractTag(raw, 'link') || extractAttr(raw, 'link', 'href');
    const desc  = extractTag(raw, 'description') || extractTag(raw, 'content:encoded') || extractTag(raw, 'summary');
    const date  = extractTag(raw, 'pubDate') || extractTag(raw, 'dc:date') || extractTag(raw, 'published');

    if (title && link) {
      items.push({
        title: stripHtml(title).trim(),
        link: link.trim().replace(/^<!\[CDATA\[|\]\]>$/g, '').trim(),
        description: stripHtml(desc || '').trim(),
        pubDate: date?.trim() || '',
      });
    }
  }
  return items;
}

function extractTag(xml, tag) {
  const cdata = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'i').exec(xml);
  if (cdata) return cdata[1];
  const plain = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i').exec(xml);
  return plain ? plain[1] : null;
}

function extractAttr(xml, tag, attr) {
  const m = new RegExp(`<${tag}[^>]+${attr}="([^"]+)"`, 'i').exec(xml);
  return m ? m[1] : null;
}

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 55)
    .replace(/-$/, '');
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) throw new Error('invalid');
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
}

// Estimate read time based on body text length
function readTime(paragraphs) {
  const words = paragraphs.join(' ').split(/\s+/).length;
  return `${Math.max(2, Math.ceil(words / 200))} min read`;
}

// Build body paragraphs from RSS description + furniture-industry context
function buildBody(description, title, source) {
  const paras = [];

  // Use the RSS description as the first paragraph if it's long enough
  if (description && description.length > 80) {
    // Split at sentence boundaries to create 2 paragraphs if possible
    const sentences = description.match(/[^.!?]+[.!?]+/g) || [description];
    const mid = Math.ceil(sentences.length / 2);
    const p1 = sentences.slice(0, mid).join(' ').trim();
    const p2 = sentences.slice(mid).join(' ').trim();
    if (p1) paras.push(p1);
    if (p2) paras.push(p2);
  } else {
    paras.push(description || `${source} is reporting on: ${title}.`);
  }

  // Add a furniture/retail industry angle paragraph
  paras.push(
    'For furniture and home goods brands operating across Canada and the United States, these macro developments shape the cost environment, consumer confidence, and import logistics — all key inputs heading into the next buying cycle.'
  );

  return paras;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function fetchSource(source) {
  console.log(`  → Fetching ${source.name}…`);
  try {
    const xml = await fetchUrl(source.rss);
    const items = parseRSSItems(xml);
    if (!items.length) throw new Error('No items found in feed');

    const item = items[0];
    const slug = `${slugify(item.title)}-${source.slugSuffix}`;
    const body = buildBody(item.description, item.title, source.name);

    return {
      slug,
      source: source.name,
      sourceUrl: source.sourceUrl,
      flag: source.flag,
      market: source.market,
      tag: source.tag,
      title: item.title,
      summary: item.description.length > 20 ? item.description.substring(0, 220).replace(/\s+\S*$/, '') + '…' : item.title,
      body,
      date: formatDate(item.pubDate),
      readTime: readTime(body),
      url: item.link || source.sourceUrl,
    };
  } catch (err) {
    console.warn(`  ✗ ${source.name}: ${err.message}`);
    return null;
  }
}

function escapeTs(str) {
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function renderNewsTs(items) {
  const itemsCode = items.map(item => `  {
    slug: \`${escapeTs(item.slug)}\`,
    source: \`${escapeTs(item.source)}\`,
    sourceUrl: \`${escapeTs(item.sourceUrl)}\`,
    flag: \`${escapeTs(item.flag)}\`,
    market: \`${escapeTs(item.market)}\`,
    tag: \`${escapeTs(item.tag)}\`,
    title: \`${escapeTs(item.title)}\`,
    summary: \`${escapeTs(item.summary)}\`,
    body: [
${item.body.map(p => `      \`${escapeTs(p)}\`,`).join('\n')}
    ],
    date: \`${escapeTs(item.date)}\`,
    readTime: \`${escapeTs(item.readTime)}\`,
    url: \`${escapeTs(item.url)}\`,
  }`).join(',\n');

  return `// AUTO-GENERATED — do not edit by hand. Run: node scripts/fetch-news.mjs
// Last updated: ${new Date().toISOString()}

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
${itemsCode},
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
`;
}

(async () => {
  console.log('RoveLab News — fetching briefings…\n');

  const results = await Promise.all(SOURCES.map(fetchSource));
  const items = results.filter(Boolean);

  if (!items.length) {
    console.error('\nNo items fetched. Aborting.');
    process.exit(1);
  }

  console.log(`\nFetched ${items.length}/${SOURCES.length} stories.`);

  const outPath = join(__dirname, '../src/data/news.ts');
  writeFileSync(outPath, renderNewsTs(items), 'utf8');
  console.log(`Written → ${outPath}`);
})();
