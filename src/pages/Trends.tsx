import { Link } from "react-router-dom";
import { TrendingUp, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const trends = [
  {
    flag: "🇨🇦",
    market: "Canada",
    title: "Modular Sofas Dominating Q3 2026",
    description: "Sectional and modular configurations are up 38% YoY in the Canadian market, driven by condo living and flexible space demands.",
    tag: "Sofas",
    color: "bg-red-50 border-red-100 dark:bg-red-950/20 dark:border-red-900/30",
    tagColor: "text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30",
  },
  {
    flag: "🇺🇸",
    market: "United States",
    title: "King-Size Beds See Material Shift",
    description: "Natural linen and performance fabrics are replacing microfiber as the go-to upholstery in the US bed market, particularly in the $1,200–$2,500 range.",
    tag: "Beds",
    color: "bg-blue-50 border-blue-100 dark:bg-blue-950/20 dark:border-blue-900/30",
    tagColor: "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30",
  },
  {
    flag: "🇨🇦",
    market: "Canada",
    title: "Clearance Season Signals Inventory Reset",
    description: "Major furniture brands across Ontario and BC are running deep clearance campaigns — a potential signal of over-inventory entering Q4.",
    tag: "Market Intel",
    color: "bg-red-50 border-red-100 dark:bg-red-950/20 dark:border-red-900/30",
    tagColor: "text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30",
  },
  {
    flag: "🇺🇸",
    market: "United States",
    title: "DTC Furniture Brands Doubling Down on Meta",
    description: "Direct-to-consumer sofa brands increased Meta ad spend by 22% in July 2026, shifting budget from Google Shopping to Reels and Stories placements.",
    tag: "Advertising",
    color: "bg-blue-50 border-blue-100 dark:bg-blue-950/20 dark:border-blue-900/30",
    tagColor: "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30",
  },
  {
    flag: "🇨🇦🇺🇸",
    market: "North America",
    title: "Green & Earth Tones Lead Color Palette for 2026",
    description: "Forest greens, warm terracottas, and mushroom neutrals are the dominant upholstery palette across both markets heading into fall.",
    tag: "Design",
    color: "bg-primary/5 border-primary/10 dark:bg-primary/10 dark:border-primary/20",
    tagColor: "text-primary bg-primary/10 dark:bg-primary/20",
  },
  {
    flag: "🇺🇸",
    market: "United States",
    title: "Same-Day Delivery Pressure Reshapes Logistics",
    description: "The top 5 US furniture retailers are piloting same-day and next-day delivery in major metros — raising the bar for mid-size brands.",
    tag: "Operations",
    color: "bg-blue-50 border-blue-100 dark:bg-blue-950/20 dark:border-blue-900/30",
    tagColor: "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30",
  },
];

const Trends = () => {
  useSEO({
    title: "Furniture Trends — RoveLab News",
    description: "The latest furniture market trends in Canada and the USA — sofas, beds, design directions, and retail intelligence.",
    url: "/trends",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4" />
              Updated Weekly
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Market <span className="text-primary italic">Trends</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What's moving in the North American furniture market right now — sofas, beds, design, and retail signals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {trends.map((trend, i) => (
              <div key={i} className={`border rounded-xl p-6 ${trend.color} transition-all hover:shadow-md`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{trend.flag}</span>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${trend.tagColor}`}>
                    {trend.tag}
                  </span>
                </div>
                <h3 className="font-display text-lg text-foreground mb-2 leading-snug">
                  {trend.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {trend.description}
                </p>
                <p className="mt-4 text-xs text-muted-foreground">{trend.market}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-card border border-border rounded-2xl p-10">
            <h2 className="font-display text-2xl text-foreground mb-3">
              Get these trends in your inbox every Monday
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to the RoveLab News — free weekly newsletter for furniture buyers and retailers in Canada & USA.
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

export default Trends;
