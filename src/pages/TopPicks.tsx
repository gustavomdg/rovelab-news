import { Link } from "react-router-dom";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const picks = [
  {
    category: "Best Sectional",
    flag: "🇨🇦",
    market: "Canada",
    name: "Rove Concepts Fabian Sectional",
    price: "from $3,200 CAD",
    description: "Modular, performance-fabric, ships flat with white-glove assembly. Consistent bestseller in Canadian metro markets.",
    tags: ["Modular", "Performance Fabric", "White Glove"],
    rating: 4.8,
  },
  {
    category: "Best Value Sofa",
    flag: "🇺🇸",
    market: "United States",
    name: "Article Sven Charme",
    price: "from $1,499 USD",
    description: "Full-grain leather at mid-range price. Popular in US urban markets for its clean Scandinavian lines.",
    tags: ["Full-Grain Leather", "DTC", "Fast Delivery"],
    rating: 4.6,
  },
  {
    category: "Best Bed Frame",
    flag: "🇨🇦🇺🇸",
    market: "North America",
    name: "Structube Hendrix Platform Bed",
    price: "from $649 CAD / $529 USD",
    description: "Solid wood slat system, minimalist profile, available in both markets. Strong repeat-buyer satisfaction.",
    tags: ["Platform", "Wood Slats", "Minimalist"],
    rating: 4.7,
  },
  {
    category: "Best Luxury Sofa",
    flag: "🇺🇸",
    market: "United States",
    name: "Restoration Hardware Cloud Sofa",
    price: "from $6,500 USD",
    description: "The benchmark for ultra-deep, boucle-upholstered cloud sofas. Sets the standard other brands are chasing.",
    tags: ["Boucle", "Ultra Luxury", "Deep Seat"],
    rating: 4.9,
  },
  {
    category: "Best Upholstered Bed",
    flag: "🇨🇦",
    market: "Canada",
    name: "EQ3 Angled Platform Bed",
    price: "from $1,100 CAD",
    description: "Linen upholstery, low-profile angled legs, and a headboard that actually holds up after years of use.",
    tags: ["Linen", "Low Profile", "Canadian Brand"],
    rating: 4.5,
  },
  {
    category: "Best Budget Pick",
    flag: "🇨🇦🇺🇸",
    market: "North America",
    name: "IKEA SÖDERHAMN Sectional",
    price: "from $899 CAD / $749 USD",
    description: "Modular, washable covers, and a design that's been updated consistently. The best-value sofa for renters and first-time buyers.",
    tags: ["Budget", "Modular", "Washable Covers"],
    rating: 4.3,
  },
];

const TopPicks = () => {
  useSEO({
    title: "Top Picks — RoveLab News",
    description: "Curated top picks for sofas and beds across Canada and the USA — updated by the RoveLab News team.",
    url: "/top-picks",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 fill-current" />
              Curated by Rove Lab
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Top <span className="text-primary italic">Picks</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The sofas and beds our team recommends right now — across price points, markets, and styles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {picks.map((pick, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {pick.category}
                  </span>
                  <span className="text-lg">{pick.flag}</span>
                </div>

                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-1 leading-snug">
                  {pick.name}
                </h3>

                <p className="text-sm font-medium text-accent mb-3">{pick.price}</p>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {pick.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pick.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className={`h-3.5 w-3.5 ${j < Math.floor(pick.rating) ? 'text-accent fill-current' : 'text-muted-foreground'}`}
                      />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">{pick.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{pick.market}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-card border border-border rounded-2xl p-10">
            <h2 className="font-display text-2xl text-foreground mb-3">
              Get our picks every week — free
            </h2>
            <p className="text-muted-foreground mb-6">
              The RoveLab News includes curated top picks, trend reports, and buying guides for Canada & USA. Delivered every Monday.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Subscribe Free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TopPicks;
