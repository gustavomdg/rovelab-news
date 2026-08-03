import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArticlesSection from "@/components/ArticlesSection";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "RoveLab News — Weekly Furniture Intelligence for Canada & USA",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "RoveLab News",
      "url": "https://rovelab.com",
      "description": "Weekly insights on sofas, beds & home trends across Canada and the USA — curated for buyers, retailers, and anyone who takes comfort seriously."
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ArticlesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
