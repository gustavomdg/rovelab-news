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
    slug: "oil-slumps-iran-talks-bloomberg",
    source: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com",
    flag: "🇺🇸",
    market: "United States",
    tag: "MARKET",
    title: "Oil Slumps, US Futures Rise on Iran Talks Optimism",
    summary: "Oil fell as much as 7.3% after Trump called off a planned strike on Iran and agreed to diplomatic talks. OPEC+ simultaneously increased quotas — erasing much of Brent crude's near-25% surge in July.",
    body: [
      "Oil prices tumbled as much as 7.3% to $81.55 a barrel on Sunday after President Trump announced he had called off a massive planned strike on Iran and agreed to fresh diplomatic talks beginning Monday.",
      "Trump said Middle East allies including Saudi Arabia urged him to pursue a deal to reopen the Strait of Hormuz instead of military action, easing fears of a broader regional conflict that had sent crude prices surging through July.",
      "Gold and Treasury bonds advanced as markets repriced the geopolitical risk premium built up over weeks of escalating tensions. OPEC+ simultaneously increased production quotas, further pressuring prices and erasing nearly all of Brent crude's near-25% surge recorded during the prior month.",
      "The development has immediate implications for North American retailers and ecommerce brands: lower fuel costs reduce freight and logistics expenses, which have been a significant pressure on furniture and home goods margins. If the diplomatic path holds, companies may see meaningful relief heading into Q4.",
    ],
    date: "Aug 2, 2026",
    readTime: "4 min read",
    url: "https://www.bloomberg.com",
  },
  {
    slug: "trump-halts-iran-wsj",
    source: "Wall Street Journal",
    sourceUrl: "https://www.wsj.com",
    flag: "🇺🇸",
    market: "United States",
    tag: "ECONOMY",
    title: "Trump Halts Iran Strike Plan, Announces Renewed Talks; Oil Tumbles",
    summary: "President Trump reversed course Sunday, calling off a planned military attack on Iran and announcing negotiations would resume. Oil dropped roughly 5-7% as traders unwound July's risk premium.",
    body: [
      "President Trump reversed course Sunday, announcing he had called off a planned military attack on Iran and that negotiations would resume Monday after months of escalating tensions over the Strait of Hormuz.",
      "The announcement sent oil prices falling sharply, with Brent crude dropping roughly 5-7% as traders unwound the significant risk premium built up during July's geopolitical turmoil.",
      "The development eases immediate inflation and supply concerns but leaves markets uncertain about the durability of any diplomatic resolution. Analysts cautioned that any breakdown in talks could quickly reverse the market moves.",
      "For the furniture and home goods sector, the oil drop reduces near-term pressure on import costs and inbound freight — particularly relevant for brands sourcing from Asia and shipping product into Canadian and US distribution centers.",
    ],
    date: "Aug 2, 2026",
    readTime: "5 min read",
    url: "https://www.wsj.com",
  },
  {
    slug: "westjet-strike-reuters",
    source: "Reuters",
    sourceUrl: "https://www.reuters.com",
    flag: "🇺🇸",
    market: "United States",
    tag: "ECONOMY",
    title: "WestJet Flight Attendants Go on Strike After Talks Fall Through",
    summary: "About 4,400 WestJet flight attendants launched a strike after contract negotiations broke down over compensation. Around 600 flights were grounded, stranding an estimated 250,000 travelers.",
    body: [
      "The Canadian Union of Public Employees, representing approximately 4,400 WestJet flight attendants, launched a strike early Sunday after contract negotiations broke down over compensation for time worked on the ground before and after flights.",
      "The labor action grounded around 600 flights, stranding an estimated 250,000 travelers during Canada's peak August long weekend — one of the highest-volume travel periods of the year.",
      "WestJet had offered a 13% wage increase plus additional pay equivalent to 12% of salary, but the union rejected the package as insufficient to address core grievances around non-flight hour compensation.",
      "The strike adds to a broader pattern of labor disruptions in Canada's transportation sector. For furniture and home goods retailers, the disruption highlights fragility in supply chains that route through Canadian airports and could affect express delivery timelines heading into the pre-fall buying season.",
    ],
    date: "Aug 2, 2026",
    readTime: "3 min read",
    url: "https://www.reuters.com",
  },
  {
    slug: "westjet-strike-long-weekend",
    source: "The Globe and Mail",
    sourceUrl: "https://www.theglobeandmail.com",
    flag: "🇨🇦",
    market: "Canada",
    tag: "ECONOMY",
    title: "Frustration Descends on Long Weekend Travellers as WestJet Strike Brings Flights to a Standstill",
    summary: "WestJet flight attendants began striking Sunday morning after negotiations collapsed over wages and ground pay, grounding ~600 flights and stranding passengers across Canadian airports.",
    body: [
      "WestJet flight attendants began striking early Sunday morning after negotiations collapsed over wages and ground pay — compensation for work performed before takeoff and after landing.",
      "The labor action grounded approximately 600 flights during the August long weekend, stranding passengers across Canadian airports and causing widespread travel chaos at one of the year's busiest periods.",
      "The union represents 4,400 flight attendants who rejected WestJet's latest offer of a 12-13% salary increase, saying it failed to address their core demands for all-hours compensation.",
      "Beyond the immediate travel disruption, the strike is being watched closely by Canadian retailers and ecommerce operators who depend on air freight for time-sensitive product movements, particularly in furniture accessories and home décor segments that can be shipped via cargo.",
    ],
    date: "Aug 2, 2026",
    readTime: "4 min read",
    url: "https://www.theglobeandmail.com",
  },
  {
    slug: "westjet-strike-financial-post",
    source: "Financial Post",
    sourceUrl: "https://financialpost.com",
    flag: "🇨🇦",
    market: "Canada",
    tag: "RETAIL",
    title: "WestJet Strike Strands 250,000 Travellers on Canada's Busiest Summer Weekend",
    summary: "Canada's second-largest airline halted operations after 4,400 flight attendants walked off the job, cancelling ~615 flights and drawing sharp criticism from business groups.",
    body: [
      "Canada's second-largest airline was brought to a halt Sunday after its 4,400 flight attendants, represented by CUPE, walked off the job during the critical August long weekend following failed contract talks over pay for ground time.",
      "The strike cancelled roughly 615 flights and disrupted travel for an estimated quarter-million passengers at the height of the summer tourism season, drawing sharp criticism from business groups and travel industry leaders.",
      "WestJet offered a combined compensation increase equivalent to 25% but the union rejected the terms, saying all hours worked from check-in to clock-out must be compensated at full rates.",
      "For Canadian furniture retailers with national distribution, the disruption is a reminder of how logistics dependencies — even on air freight — ripple into consumer-facing operations. Brands running time-sensitive promotions this weekend faced delays in moving product to fulfill same-week delivery promises.",
    ],
    date: "Aug 2, 2026",
    readTime: "4 min read",
    url: "https://financialpost.com",
  },
  {
    slug: "westjet-flight-cancellations-cbc",
    source: "CBC News",
    sourceUrl: "https://www.cbc.ca/news",
    flag: "🇨🇦",
    market: "Canada",
    tag: "ECONOMY",
    title: "WestJet Flight Cancellations Mount as Strike Grounds Airline on Long Weekend",
    summary: "WestJet's flight attendants launched a strike on August 2 after failed contract talks, resulting in hundreds of cancellations across Canada during the August civic holiday weekend.",
    body: [
      "WestJet's flight attendants launched a strike on August 2 after talks with the airline failed to produce a deal, resulting in hundreds of flight cancellations affecting travelers across Canada during the August civic holiday weekend.",
      "CUPE Local 8125, representing the cabin crew, walked off the job over disputes about compensation for non-flight hours, including boarding, delays, and ground time.",
      "Passengers traveling before August 5 were offered one-time fee-free changes or cancellations as the airline scrambled to manage the fallout and limit further reputational damage.",
      "The work stoppage is the latest sign of labour pressure building across Canada's service economy — a trend with downstream implications for the retail and ecommerce sector as workers in transportation, warehousing, and logistics push for improved compensation following years of inflation.",
    ],
    date: "Aug 2, 2026",
    readTime: "3 min read",
    url: "https://www.cbc.ca/news",
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsItems.find((n) => n.slug === slug);
}
