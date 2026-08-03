import { useState } from "react";
import { Search, BookOpen, Clock, ChevronRight, GraduationCap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { tutoriais } from "@/data/tutoriaisData";
import type { Difficulty, ContentType } from "@/data/tutoriaisData";
import { useSEO } from "@/hooks/useSEO";

const categories = [
  "Todos",
  "Engenharia de Prompts",
  "Modelos de IA",
  "No-Code",
  "Imagem",
  "Vídeo",
  "Áudio",
  "Automação",
  "Negócios com IA",
];

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

const Tutoriais = () => {
  useSEO({
    title: "Tutoriais de Inteligência Artificial",
    description: "Aprenda a usar IA na prática — do básico ao avançado. Guias de prompts, ferramentas, automação e muito mais.",
    url: "/tutoriais",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("Todos");

  const difficulties = ["Todos", "Iniciante", "Intermediário", "Avançado"];

  const filteredTutorials = tutoriais.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Todos" || t.category === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === "Todos" || t.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const featuredTutorials = tutoriais.filter((t) => t.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Tutoriais de{" "}
                  <span className="text-gradient">Inteligência Artificial</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Aprenda a usar IA na prática — do básico ao avançado. Guias de prompts, ferramentas, automação e muito mais.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card border border-border rounded-full px-4 py-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    {tutoriais.length} tutoriais
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card border border-border rounded-full px-4 py-2">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    {categories.length - 1} categorias
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card border border-border rounded-full px-4 py-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    100% gratuito
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 gradient-primary rounded-3xl blur-2xl opacity-20" />
                  <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg space-y-3">
                    {["Iniciante", "Intermediário", "Avançado"].map((level) => (
                      <div key={level} className="flex items-center gap-3">
                        <div
                          className={`h-3 w-3 rounded-full ${
                            level === "Iniciante"
                              ? "bg-emerald-500"
                              : level === "Intermediário"
                              ? "bg-amber-500"
                              : "bg-rose-500"
                          }`}
                        />
                        <span className="text-sm font-medium">{level}</span>
                        <span className="text-xs text-muted-foreground ml-auto">
                          {tutoriais.filter((t) => t.difficulty === level).length} tutoriais
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured */}
        {featuredTutorials.length > 0 && (
          <section className="py-10 border-b border-border">
            <div className="container">
              <h2 className="font-display font-bold text-xl mb-6 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Em destaque
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {featuredTutorials.map((tutorial) => (
                  <Link
                    key={tutorial.slug}
                    to={`/tutoriais/${tutorial.slug}`}
                    className="group relative bg-card border border-border rounded-xl p-5 card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5 gradient-primary" />
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl">{tutorial.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${difficultyColors[tutorial.difficulty]}`}>
                            {tutorial.difficulty}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${typeColors[tutorial.type]}`}>
                            {tutorial.type}
                          </span>
                        </div>
                        <h3 className="font-display font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
                          {tutorial.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                      {tutorial.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {tutorial.duration}
                      </span>
                      <ChevronRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Search & Filter */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 card-shadow">
              <h2 className="font-display font-semibold text-xl mb-2">
                Encontre seu tutorial
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Filtre por categoria ou nível de dificuldade.
              </p>

              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar tutoriais..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="mb-4">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Categoria
                </p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === cat
                          ? "gradient-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Dificuldade
                </p>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((diff) => (
                    <button
                      key={diff}
                      onClick={() => setSelectedDifficulty(diff)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                        selectedDifficulty === diff
                          ? "gradient-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {diff}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display font-bold text-2xl">Tutoriais</h2>
              <span className="text-muted-foreground text-sm">
                {filteredTutorials.length} resultado{filteredTutorials.length !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTutorials.map((tutorial) => (
                <Link
                  key={tutorial.slug}
                  to={`/tutoriais/${tutorial.slug}`}
                  className="group bg-card border border-border rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-3xl">{tutorial.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${difficultyColors[tutorial.difficulty]}`}>
                          {tutorial.difficulty}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${typeColors[tutorial.type]}`}>
                          {tutorial.type}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                        {tutorial.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-base mb-2 group-hover:text-primary transition-colors leading-snug">
                    {tutorial.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                    {tutorial.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {tutorial.duration}
                    </span>
                    <span className="text-primary text-sm font-medium gap-1 flex items-center group-hover:gap-2 transition-all">
                      Ler
                      <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {filteredTutorials.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">
                  Nenhum tutorial encontrado com esses filtros.
                </p>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("Todos");
                    setSelectedDifficulty("Todos");
                  }}
                >
                  Limpar filtros
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Newsletter */}
        <section className="py-12 bg-muted/30 border-t border-border">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">
                Receba novos tutoriais toda semana
              </h2>
              <p className="text-muted-foreground mb-6">
                Junte-se à nossa newsletter e fique por dentro das melhores dicas de IA, prompts e ferramentas.
              </p>
              <Button variant="subscribe" size="lg" asChild>
                <a href="/#newsletter">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Assinar newsletter gratuita
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tutoriais;
