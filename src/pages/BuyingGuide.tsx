import { Link } from "react-router-dom";
import { BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const guides = [
  {
    emoji: "🛋️",
    title: "How to Choose a Sectional Sofa in 2026",
    description: "Fabric vs. performance upholstery, modular vs. fixed configurations, and what Canadian vs. US buyers prioritize.",
    topics: ["Fabric types", "Size & space planning", "Modular vs. fixed", "Price tiers"],
    market: "Canada & USA",
  },
  {
    emoji: "🛏️",
    title: "King vs. Queen Bed Frames: What Actually Matters",
    description: "A practical guide to bed frame selection — materials, slat systems, headboard heights, and what holds up over time.",
    topics: ["Frame materials", "Slat vs. platform", "Headboard sizing", "Assembly & delivery"],
    market: "Canada & USA",
  },
  {
    emoji: "🪢",
    title: "Understanding Upholstery: Fabric Guide 2026",
    description: "Linen, boucle, performance velvet, and leather — the trade-offs every buyer should know before purchasing.",
    topics: ["Durability ratings", "Cleaning & care", "Pet & kid-friendly options", "Trending materials"],
    market: "North America",
  },
  {
    emoji: "📦",
    title: "What to Know About Furniture Delivery in Canada",
    description: "Curbside vs. white-glove, assembly fees, and how to protect yourself when ordering furniture online in Canada.",
    topics: ["Delivery types", "Damage claims", "Assembly options", "Return policies"],
    market: "🇨🇦 Canada",
  },
  {
    emoji: "💰",
    title: "Furniture Price Tiers Explained",
    description: "Entry-level, mid-range, and premium — what you actually get at each price point for sofas and beds.",
    topics: ["Frame construction", "Cushion quality", "Warranty differences", "Brand comparison"],
    market: "Canada & USA",
  },
  {
    emoji: "🎨",
    title: "Color & Style Trends: Fall/Winter 2026",
    description: "The palettes and silhouettes dominating furniture retail in North America this season.",
    topics: ["Upholstery colors", "Leg finishes", "Style directions", "What's fading out"],
    market: "North America",
  },
];

const BuyingGuide = () => {
  useSEO({
    title: "Buying Guide — RoveLab News",
    description: "Practical furniture buying guides for Canada and USA — sofas, beds, upholstery, delivery, and more.",
    url: "/buying-guide",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              Practical Guides
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Buying <span className="text-primary italic">Guide</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No-fluff guides to buying furniture in Canada and the USA. From fabric selection to delivery logistics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {guides.map((guide, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all group">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{guide.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-0.5 rounded-full">
                        {guide.market}
                      </span>
                    </div>
                    <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {guide.description}
                    </p>
                    <ul className="space-y-1">
                      {guide.topics.map((topic, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-card border border-border rounded-2xl p-10">
            <h2 className="font-display text-2xl text-foreground mb-3">
              New guides every week in the newsletter
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to RoveLab News and get furniture buying guides, market trends, and brand spotlights — free every Monday.
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

export default BuyingGuide;
