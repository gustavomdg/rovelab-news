import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, X, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { newsItems } from "@/data/news";

const TAGS = ["All", ...Array.from(new Set(newsItems.map((n) => n.tag)))];
const MARKETS = ["All", ...Array.from(new Set(newsItems.map((n) => n.market)))];

const Issues = () => {
  useSEO({
    title: "News — RoveLab News",
    description: "All briefings — weekly furniture intelligence covering Canada and the USA.",
    url: "/news",
  });

  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("All");
  const [market, setMarket] = useState("All");

  const filtered = newsItems.filter((item) => {
    const matchSearch =
      !search.trim() ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.summary.toLowerCase().includes(search.toLowerCase());
    const matchTag = tag === "All" || item.tag === tag;
    const matchMarket = market === "All" || item.market === market;
    return matchSearch && matchTag && matchMarket;
  });

  const hasFilters = search.trim() || tag !== "All" || market !== "All";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12">
        <div className="container max-w-4xl mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">
              All <span className="text-primary italic">Briefings</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Furniture & retail intelligence for Canada & USA — updated Mon, Wed and Fri.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-card border border-border rounded-xl p-4 mb-8 flex flex-col sm:flex-row gap-3 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search briefings…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring w-full sm:w-auto"
            >
              {TAGS.map((t) => <option key={t}>{t}</option>)}
            </select>

            <select
              value={market}
              onChange={(e) => setMarket(e.target.value)}
              className="h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring w-full sm:w-auto"
            >
              {MARKETS.map((m) => <option key={m}>{m}</option>)}
            </select>

            {hasFilters && (
              <Button variant="ghost" size="sm" onClick={() => { setSearch(""); setTag("All"); setMarket("All"); }}>
                <X className="h-3.5 w-3.5 mr-1" /> Clear
              </Button>
            )}
          </div>

          {/* Count */}
          <p className="text-xs text-muted-foreground mb-6">
            {filtered.length} {filtered.length === 1 ? "briefing" : "briefings"}
          </p>

          {/* List */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p className="mb-4">No briefings match your filters.</p>
              <Button variant="outline" onClick={() => { setSearch(""); setTag("All"); setMarket("All"); }}>Clear filters</Button>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {filtered.map((item) => (
                <Link
                  key={item.slug}
                  to={`/news/${item.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-start gap-3 py-6 hover:bg-muted/40 -mx-4 px-4 transition-colors rounded-lg"
                >
                  {/* Left meta */}
                  <div className="flex sm:flex-col items-center sm:items-start gap-2 sm:gap-1 sm:w-28 shrink-0">
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-primary">{item.tag}</span>
                    <span className="text-xs text-muted-foreground">{item.flag} {item.market}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-muted-foreground">{item.source}</span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground/50" />
                    </div>
                    <h2 className="font-display text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-1">
                      {item.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {item.summary}
                    </p>
                  </div>

                  {/* Right meta */}
                  <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1 text-xs text-muted-foreground/70 shrink-0">
                    <span>{item.date}</span>
                    <span>{item.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Issues;
