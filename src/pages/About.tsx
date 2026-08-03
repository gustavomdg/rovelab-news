import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const About = () => {
  useSEO({
    title: "About — RoveLab News",
    description: "RoveLab News is a weekly briefing on the North American furniture market — covering trends, retail shifts, and ecommerce signals across Canada and the USA.",
    url: "/about",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-16">
        <div className="container max-w-2xl mx-auto px-4">
          <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-6">About</p>

          <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-8">
            Furniture intel for<br />
            <span className="text-primary italic">Canada & USA</span>
          </h1>

          <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
            <p>
              RoveLab News is a weekly briefing on what's moving in the North American furniture market — sofas, beds, upholstery, retail signals, and ecommerce shifts across Canada and the United States.
            </p>
            <p>
              Every Monday we compile the most relevant market intelligence for furniture buyers, retailers, and brand teams who need to stay ahead — without spending hours reading industry reports.
            </p>
            <p>
              We cover demand trends, design directions, DTC advertising moves, logistics shifts, and competitive signals from brands operating across both markets.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-4">Contact</p>
            <a
              href="mailto:po.team@rovelab.com"
              className="text-primary hover:underline text-sm font-medium"
            >
              po.team@rovelab.com
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
