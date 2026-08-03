import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sofa, Loader2, ChevronDown, MapPin } from "lucide-react";
import { useNewsletter } from "@/hooks/useNewsletter";

const featuredNews = [
  {
    source: "Bloomberg",
    flag: "🇺🇸",
    market: "United States",
    tag: "MARKET",
    title: "Oil Slumps, US Futures Rise on Iran Talks Optimism",
    summary: "Oil fell as much as 7.3% after Trump called off a planned strike on Iran and agreed to diplomatic talks. OPEC+ simultaneously increased quotas — erasing much of Brent crude's near-25% surge in July.",
    date: "Aug 2, 2026",
    readTime: "4 min read",
    url: "https://www.bloomberg.com",
    slug: "oil-slumps-iran-talks-bloomberg",
    featured: true,
  },
  {
    source: "Globe and Mail",
    flag: "🇨🇦",
    market: "Canada",
    tag: "ECONOMY",
    title: "WestJet Strike Strands Travellers on Long Weekend",
    summary: "WestJet's 4,400 flight attendants walked off the job after failed contract talks, cancelling ~600 flights and stranding 250,000 passengers at peak summer travel.",
    date: "Aug 2, 2026",
    readTime: "4 min read",
    url: "https://www.theglobeandmail.com",
    slug: "westjet-strike-long-weekend",
    featured: false,
  },
  {
    source: "Financial Post",
    flag: "🇨🇦",
    market: "Canada",
    tag: "RETAIL",
    title: "WestJet Strike Hits Canada's Busiest Summer Weekend",
    summary: "Canada's second-largest airline was halted as CUPE members demanded pay for ground time. The strike drew sharp criticism from business groups across the country.",
    date: "Aug 2, 2026",
    readTime: "4 min read",
    url: "https://financialpost.com",
    slug: "westjet-strike-financial-post",
    featured: false,
  },
];

const Hero = () => {
  const { email, setEmail, isLoading, handleSubscribe } = useNewsletter("hero");

  return (
    <section className="relative overflow-hidden gradient-hero py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/6 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Flag badges */}
          <div className="flex items-center gap-3 mb-8 animate-scale-in">
            <span className="flex items-center gap-1.5 text-xs font-medium bg-card border border-border px-3 py-1.5 rounded-full shadow-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              🇨🇦 Canada
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium bg-card border border-border px-3 py-1.5 rounded-full shadow-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              🇺🇸 United States
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal mb-10 animate-fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
            Furniture.{" "}
            <span className="text-gradient italic">What's happening this week</span>
          </h1>

          {/* Featured news grid — editorial layout */}
          <div className="w-full max-w-3xl mb-8 animate-fade-in" style={{ animationDelay: '0.25s' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted-foreground">This week's briefing</span>
              <div className="flex-1 h-px bg-border" />
              <span className="text-[10px] text-muted-foreground">Aug 4, 2026</span>
            </div>

            {/* Mobile: stacked / sm+: featured left + sidebar right */}
            <div className="flex flex-col sm:grid sm:grid-cols-[1fr_1px_280px] gap-0">

              {/* Featured story */}
              {(() => {
                const item = featuredNews[0];
                return (
                  <Link to={`/news/${item.slug}`} className="group cursor-pointer pb-5 sm:pb-0 sm:pr-6 block">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-primary">{item.tag}</span>
                      <span className="text-xs text-muted-foreground">{item.flag} {item.market}</span>
                      <span className="text-xs text-muted-foreground/50 ml-auto">{item.source}</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl text-foreground leading-tight mb-3 group-hover:text-primary transition-colors text-left">
                      {item.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed text-left mb-4">
                      {item.summary}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground/70">
                      <span>{item.date}</span>
                      <span>·</span>
                      <span>{item.readTime}</span>
                    </div>
                  </Link>
                );
              })()}

              {/* Vertical divider desktop / horizontal mobile */}
              <div className="hidden sm:block w-px bg-border" />
              <div className="block sm:hidden h-px bg-border mb-5" />

              {/* Secondary stories */}
              <div className="flex flex-col gap-0 sm:pl-6">
                {featuredNews.slice(1).map((item, i) => (
                  <Link key={i} to={`/news/${item.slug}`} className="group cursor-pointer block">
                    {i > 0 && <div className="h-px bg-border my-4" />}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-primary">{item.tag}</span>
                      <span className="text-xs text-muted-foreground">{item.flag} {item.market}</span>
                      <span className="text-xs text-muted-foreground/50 ml-auto">{item.source}</span>
                    </div>
                    <h3 className="font-display text-base text-foreground leading-snug mb-2 group-hover:text-primary transition-colors text-left">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed text-left mb-2">
                      {item.summary}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
                      <span>{item.date}</span>
                      <span>·</span>
                      <span>{item.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Subscription form */}
          <form
            id="newsletter"
            onSubmit={handleSubscribe}
            className="w-full max-w-md animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="flex gap-2 p-1.5 bg-card rounded-xl border border-border shadow-lg card-shadow">
              <Input
                type="email"
                placeholder="Your best email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base placeholder:text-muted-foreground/60"
                required
              />
              <Button type="submit" variant="subscribe" className="shrink-0" disabled={isLoading}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
              </Button>
            </div>
          </form>

          {/* Tagline */}
          <p className="mt-5 text-xs text-muted-foreground flex items-center gap-1.5 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Sofa className="h-3.5 w-3.5 text-primary shrink-0" />
            Your home deserves better intel. So do you.
          </p>

          {/* Scroll indicator */}
          <div className="mt-10 animate-bounce">
            <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
