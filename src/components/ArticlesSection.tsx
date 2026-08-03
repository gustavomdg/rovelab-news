import { Link } from "react-router-dom";
import { ArrowRight, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsItems } from "@/data/news";

const ArticlesSection = () => {
  if (!newsItems.length) return null;

  return (
    <section className="py-16 md:py-20 border-t border-border">
      <div className="container max-w-4xl mx-auto px-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-muted-foreground">
              This week's briefings
            </span>
          </div>
          <Button variant="ghost" size="sm" className="text-primary group" asChild>
            <Link to="/news">
              All briefings
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* News list */}
        <div className="divide-y divide-border">
          {newsItems.map((item) => (
            <Link
              key={item.slug}
              to={`/news/${item.slug}`}
              className="group flex flex-col sm:flex-row sm:items-start gap-3 py-5 hover:bg-muted/40 -mx-4 px-4 transition-colors rounded-lg"
            >
              <div className="flex sm:flex-col items-center sm:items-start gap-2 sm:gap-1 sm:w-28 shrink-0">
                <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-primary">{item.tag}</span>
                <span className="text-xs text-muted-foreground">{item.flag} {item.market}</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-xs text-muted-foreground">{item.source}</span>
                  <ExternalLink className="h-3 w-3 text-muted-foreground/40" />
                </div>
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1 text-xs text-muted-foreground/70 shrink-0">
                <span>{item.date}</span>
                <span>{item.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Button variant="subscribe" size="lg" asChild>
            <Link to="/news">View all briefings</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
