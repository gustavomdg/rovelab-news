import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Clock, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { getNewsBySlug, newsItems } from "@/data/news";

const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? getNewsBySlug(slug) : undefined;

  useSEO({
    title: article ? `${article.title} — RoveLab News` : "Article — RoveLab News",
    description: article?.summary ?? "",
    url: `/news/${slug}`,
  });

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20 text-center">
          <p className="text-muted-foreground mb-4">Article not found.</p>
          <Link to="/" className="text-primary underline text-sm">← Back to home</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const related = newsItems.filter((n) => n.slug !== article.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-10 md:py-16">
        <div className="container max-w-2xl mx-auto px-4">

          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-primary">{article.tag}</span>
            <span className="text-xs text-muted-foreground">{article.flag} {article.market}</span>
            <span className="text-xs text-muted-foreground/50">·</span>
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              {article.source}
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-6">
            {article.title}
          </h1>

          {/* Summary */}
          <p className="text-base text-muted-foreground leading-relaxed mb-6 border-l-2 border-primary pl-4 italic">
            {article.summary}
          </p>

          {/* Date + read time */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground/70 mb-8 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {article.readTime}
            </span>
          </div>

          {/* Body */}
          <div className="space-y-5 mb-12">
            {article.body.map((paragraph, i) => (
              <p key={i} className="text-base text-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Source CTA */}
          <div className="bg-card border border-border rounded-lg p-5 mb-12 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Original story</p>
              <p className="text-sm font-medium text-foreground">{article.source}</p>
            </div>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity shrink-0"
            >
              Read full article
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-muted-foreground">More this week</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Related */}
          <div className="space-y-6 mb-12">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/news/${item.slug}`}
                className="group block"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-primary">{item.tag}</span>
                  <span className="text-xs text-muted-foreground">{item.flag} {item.market}</span>
                  <span className="text-xs text-muted-foreground/50 ml-auto">{item.source}</span>
                </div>
                <h3 className="font-display text-base text-foreground group-hover:text-primary transition-colors leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">{item.date} · {item.readTime}</p>
              </Link>
            ))}
          </div>

          {/* Subscribe CTA */}
          <div className="bg-foreground text-background rounded-lg p-6 text-center">
            <p className="font-display text-lg mb-1">Get this briefing every Monday</p>
            <p className="text-sm text-background/60 mb-4">Free weekly newsletter on furniture & retail across Canada and the USA.</p>
            <Link
              to="/#newsletter"
              className="inline-flex items-center gap-2 bg-background text-foreground px-5 py-2.5 rounded text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Subscribe free
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsArticle;
