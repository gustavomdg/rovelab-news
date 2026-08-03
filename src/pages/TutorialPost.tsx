import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, BookOpen, ChevronRight, Lightbulb, AlertTriangle, Code, Sparkles, Twitter, MessageCircle, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";
import { tutoriais } from "@/data/tutoriaisData";
import type { TutorialSection } from "@/data/tutoriaisData";
import { useSEO } from "@/hooks/useSEO";
import { toast } from "@/hooks/use-toast";

type Difficulty = "Iniciante" | "Intermediário" | "Avançado";
type ContentType = "Guia" | "Artigo" | "Vídeo" | "Checklist";

const difficultyColors: Record<Difficulty, string> = {
  Iniciante: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  Intermediário: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  Avançado: "bg-rose-500/10 text-rose-500 border-rose-500/20",
};

const typeColors: Record<ContentType, string> = {
  Guia: "bg-blue-500/10 text-blue-500",
  Artigo: "bg-purple-500/10 text-purple-500",
  Vídeo: "bg-red-500/10 text-red-500",
  Checklist: "bg-teal-500/10 text-teal-500",
};

// Render inline markdown: **bold**, *italic*, `code`
const renderInline = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={i} className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
};

const renderSection = (section: TutorialSection, idx: number) => {
  switch (section.type) {
    case "subtitle":
      return (
        <div key={idx} className={idx > 0 ? "mt-8" : "mt-2"}>
          {section.title && (
            <h2 className="font-display font-bold text-xl mb-3 text-foreground">
              {section.title}
            </h2>
          )}
          {section.content && (
            <p className="text-muted-foreground leading-relaxed">
              {renderInline(section.content)}
            </p>
          )}
        </div>
      );

    case "paragraph":
      return (
        <p key={idx} className="text-muted-foreground leading-relaxed mt-4">
          {renderInline(section.content || "")}
        </p>
      );

    case "list":
      return (
        <ul key={idx} className="mt-4 space-y-2">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "code":
      return (
        <div key={idx} className="mt-5 max-w-full">
          {section.title && (
            <div className="flex items-center gap-2 mb-1.5">
              <Code className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground font-medium">{section.title}</span>
            </div>
          )}
          <div className="relative bg-zinc-950 rounded-xl border border-border overflow-x-auto">
            <pre className="text-sm text-zinc-100 p-5 leading-relaxed font-mono whitespace-pre min-w-0">
              {section.code}
            </pre>
          </div>
        </div>
      );

    case "tip":
      return (
        <div key={idx} className="mt-5 flex gap-3 bg-primary/5 border border-primary/20 rounded-xl p-4">
          <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-foreground leading-relaxed">
            {renderInline(section.content || "")}
          </p>
        </div>
      );

    case "warning":
      return (
        <div key={idx} className="mt-5 flex gap-3 bg-amber-500/5 border border-amber-500/20 rounded-xl p-4">
          <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-foreground leading-relaxed">
            {renderInline(section.content || "")}
          </p>
        </div>
      );

    default:
      return null;
  }
};

const TutorialPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const tutorial = tutoriais.find((t) => t.slug === slug);

  useSEO({
    title: tutorial ? tutorial.title : "Tutorial",
    description: tutorial?.description,
    url: tutorial ? `/tutoriais/${tutorial.slug}` : "/tutoriais",
    type: "article",
    schema: tutorial ? {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": tutorial.title,
      "description": tutorial.description,
      "author": {
        "@type": "Organization",
        "name": "The Prompt News"
      },
      "publisher": {
        "@type": "Organization",
        "name": "RoveLab News",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aiprompt.news/logo.png"
        }
      },
      "url": `https://aiprompt.news/tutoriais/${tutorial.slug}`
    } : undefined
  });

  const shareOnTwitter = () => {
    if (!tutorial) return;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(tutorial.title)}&url=${encodeURIComponent(window.location.href)}`,
      "_blank"
    );
  };

  const shareOnWhatsApp = () => {
    if (!tutorial) return;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${tutorial.title} — ${window.location.href}`)}`,
      "_blank"
    );
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast({ title: "Link copiado!", description: "URL copiada para a área de transferência." });
    });
  };

  if (!tutorial) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-24 text-center">
          <h1 className="font-display font-bold text-3xl mb-4">Tutorial não encontrado</h1>
          <p className="text-muted-foreground mb-8">O tutorial que você procura não existe ou foi removido.</p>
          <Button asChild>
            <Link to="/tutoriais">Ver todos os tutoriais</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const related = tutoriais
    .filter((t) => t.slug !== tutorial.slug && t.category === tutorial.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <Header />

      <main>
        {/* Hero do Tutorial */}
        <section className="py-12 bg-muted/30 border-b border-border">
          <div className="container max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
              <Link to="/tutoriais" className="hover:text-foreground transition-colors">
                Tutoriais
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span>{tutorial.category}</span>
            </div>

            <div className="flex items-start gap-3 md:gap-4">
              <span className="text-4xl md:text-5xl flex-shrink-0">{tutorial.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${difficultyColors[tutorial.difficulty as keyof typeof difficultyColors]}`}>
                    {tutorial.difficulty}
                  </span>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${typeColors[tutorial.type as keyof typeof typeColors]}`}>
                    {tutorial.type}
                  </span>
                  <span className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full">
                    {tutorial.category}
                  </span>
                </div>
                <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-3 leading-tight">
                  {tutorial.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {tutorial.duration} de leitura
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4" />
                    The Prompt News
                  </span>
                  <div className="flex items-center gap-1.5 ml-auto">
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={shareOnTwitter} title="Compartilhar no X">
                      <Twitter className="h-3.5 w-3.5" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={shareOnWhatsApp} title="Compartilhar no WhatsApp">
                      <MessageCircle className="h-3.5 w-3.5" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={copyLink} title="Copiar link">
                      <Link2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="py-12">
          <div className="container max-w-4xl">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              {/* Artigo */}
              <article>
                {/* Intro */}
                <p className="text-lg text-foreground leading-relaxed border-l-4 border-primary pl-5 mb-8">
                  {tutorial.intro}
                </p>

                {/* Seções */}
                <div className="space-y-1">
                  {tutorial.sections.map((section, idx) => renderSection(section, idx))}
                </div>

                {/* Conclusão */}
                <div className="mt-10 p-6 bg-card border border-border rounded-2xl">
                  <h2 className="font-display font-bold text-lg mb-3">Conclusão</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {renderInline(tutorial.conclusion)}
                  </p>
                </div>

                {/* Navegação */}
                <div className="mt-10 pt-6 border-t border-border">
                  <Button variant="ghost" asChild>
                    <Link to="/tutoriais" className="flex items-center gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      Voltar para Tutoriais
                    </Link>
                  </Button>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Índice de Seções */}
                <div className="bg-card border border-border rounded-xl p-5 sticky top-24">
                  <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                    Neste tutorial
                  </h3>
                  <ul className="space-y-2">
                    {tutorial.sections
                      .filter((s) => s.type === "subtitle" && s.title)
                      .map((s, i) => (
                        <li key={i} className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-start gap-2">
                          <span className="text-primary mt-0.5">›</span>
                          {s.title}
                        </li>
                      ))}
                    <li className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-start gap-2">
                      <span className="text-primary mt-0.5">›</span>
                      Conclusão
                    </li>
                  </ul>

                  <div className="mt-5 pt-4 border-t border-border">
                    <Button variant="subscribe" size="sm" className="w-full" asChild>
                      <a href="/#newsletter">
                        <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                        Assinar newsletter
                      </a>
                    </Button>
                  </div>
                </div>
              </aside>
            </div>

            {/* Tutoriais Relacionados */}
            {related.length > 0 && (
              <div className="mt-16 pt-10 border-t border-border">
                <h2 className="font-display font-bold text-2xl mb-6">Tutoriais relacionados</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {related.map((t) => (
                    <Link
                      key={t.slug}
                      to={`/tutoriais/${t.slug}`}
                      className="group bg-card border border-border rounded-xl p-5 card-shadow hover:card-shadow-hover transition-all duration-300 flex flex-col"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{t.icon}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${difficultyColors[t.difficulty as keyof typeof difficultyColors]}`}>
                          {t.difficulty}
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-sm leading-snug group-hover:text-primary transition-colors mb-2">
                        {t.title}
                      </h3>
                      <span className="text-xs text-muted-foreground mt-auto flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {t.duration}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TutorialPost;
