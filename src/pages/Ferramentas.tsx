import { useState } from "react";
import { ExternalLink, Search, Gift, Star, TrendingUp, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

interface Tool {
  name: string;
  description: string;
  icon: string;
  pricing: string;
  highlight: string;
  url: string;
  badge?: string;
  upvotes: number;
}

interface Category {
  id: string;
  label: string;
  icon: string;
  description: string;
  tools: Tool[];
}

const categories: Category[] = [
  {
    id: "llms",
    label: "LLMs & Chatbots",
    icon: "🧠",
    description: "Os principais modelos de linguagem e assistentes de IA",
    tools: [
      {
        name: "ChatGPT Plus",
        description: "O chatbot mais popular do mundo. GPT-4o com geração de imagens, análise de dados e GPTs personalizados.",
        icon: "🤖",
        pricing: "Grátis / $20/mês",
        highlight: "Mais popular do mundo",
        url: "https://chat.openai.com",
        badge: "Top 1",
        upvotes: 12,
      },
      {
        name: "Claude Pro",
        description: "O melhor para textos longos, análises complexas e código. Contexto de 200k tokens.",
        icon: "🧠",
        pricing: "Grátis / $20/mês",
        highlight: "Melhor para textos longos",
        url: "https://claude.ai",
        upvotes: 8,
      },
      {
        name: "Gemini Advanced",
        description: "IA do Google com acesso ao Google Workspace, pesquisa em tempo real e multimodalidade avançada.",
        icon: "✨",
        pricing: "Grátis / $19.99/mês",
        highlight: "Melhor integração Google",
        url: "https://gemini.google.com",
        upvotes: 5,
      },
      {
        name: "Perplexity Pro",
        description: "Mecanismo de busca com IA que responde com fontes verificadas em tempo real.",
        icon: "🔍",
        pricing: "Grátis / $20/mês",
        highlight: "Busca com fontes",
        url: "https://perplexity.ai",
        upvotes: 7,
      },
    ],
  },
  {
    id: "codigo",
    label: "Código & Dev",
    icon: "💻",
    description: "Ferramentas de IA para desenvolvedores e programadores",
    tools: [
      {
        name: "Cursor",
        description: "Editor de código com IA integrada. Complete funções, refatore código e converse com sua codebase.",
        icon: "⌨️",
        pricing: "Grátis / $20/mês",
        highlight: "Favorito dos devs",
        url: "https://cursor.com",
        badge: "Hot",
        upvotes: 8,
      },
      {
        name: "GitHub Copilot",
        description: "Assistente de IA oficial do GitHub. Autocompletar código em qualquer IDE com suporte a 30+ linguagens.",
        icon: "🐙",
        pricing: "$10/mês",
        highlight: "Integrado ao GitHub",
        url: "https://github.com/features/copilot",
        upvotes: 6,
      },
      {
        name: "Windsurf (Codeium)",
        description: "IDE com IA avançada e agentes autônomos que escrevem, testam e corrigem código.",
        icon: "🏄",
        pricing: "Grátis / $15/mês",
        highlight: "Agente autônomo",
        url: "https://codeium.com/windsurf",
        upvotes: 5,
      },
    ],
  },
  {
    id: "nocode",
    label: "No-Code & Apps",
    icon: "🚀",
    description: "Crie apps e sites sem escrever código",
    tools: [
      {
        name: "Lovable",
        description: "Crie aplicações web completas usando apenas linguagem natural. Hospedagem incluída.",
        icon: "💜",
        pricing: "Grátis / $20/mês",
        highlight: "App completo em minutos",
        url: "https://lovable.dev",
        badge: "Novo",
        upvotes: 9,
      },
      {
        name: "Bolt.new",
        description: "Gere aplicações full-stack diretamente no browser com IA. Sem configuração necessária.",
        icon: "⚡",
        pricing: "Grátis / $20/mês",
        highlight: "Full-stack no browser",
        url: "https://bolt.new",
        upvotes: 7,
      },
      {
        name: "Make (Integromat)",
        description: "Automatize fluxos de trabalho conectando 2.000+ apps com IA integrada.",
        icon: "🔄",
        pricing: "Grátis / $9/mês",
        highlight: "2000+ integrações",
        url: "https://make.com",
        upvotes: 4,
      },
      {
        name: "n8n",
        description: "Automação open-source com suporte nativo a LLMs. Self-hosted ou cloud.",
        icon: "🕸️",
        pricing: "Grátis (self-hosted) / $20/mês",
        highlight: "Open-source & flexível",
        url: "https://n8n.io",
        upvotes: 5,
      },
    ],
  },
  {
    id: "imagem",
    label: "Imagem & Design",
    icon: "🎨",
    description: "Gere e edite imagens com inteligência artificial",
    tools: [
      {
        name: "Midjourney",
        description: "O gerador de imagens mais popular e artístico do mercado. Resultados cinematográficos.",
        icon: "🎨",
        pricing: "$10/mês",
        highlight: "Melhor qualidade artística",
        url: "https://midjourney.com",
        badge: "Top 1",
        upvotes: 10,
      },
      {
        name: "Leonardo AI",
        description: "Gerador de imagens com estilos especializados, fine-tuning e geração de assets para games.",
        icon: "🦁",
        pricing: "Grátis / $12/mês",
        highlight: "Ótimo para games & design",
        url: "https://leonardo.ai",
        upvotes: 4,
      },
      {
        name: "Ideogram",
        description: "O melhor gerador para imagens com texto legível. Ótimo para logos, posters e tipografia.",
        icon: "🔤",
        pricing: "Grátis / $8/mês",
        highlight: "Melhor para texto em imagem",
        url: "https://ideogram.ai",
        upvotes: 3,
      },
      {
        name: "Canva AI",
        description: "Ferramentas de IA integradas ao Canva para design rápido e profissional.",
        icon: "🖼️",
        pricing: "Grátis / $15/mês",
        highlight: "Design acessível com IA",
        url: "https://www.canva.com",
        upvotes: 4,
      },
    ],
  },
  {
    id: "video",
    label: "Vídeo",
    icon: "🎬",
    description: "Crie e edite vídeos com IA generativa",
    tools: [
      {
        name: "Runway Gen-3",
        description: "Geração e edição de vídeos com IA de última geração. Do texto ao vídeo cinematográfico.",
        icon: "🎬",
        pricing: "$12/mês",
        highlight: "Líder em vídeo com IA",
        url: "https://runwayml.com",
        badge: "Top 1",
        upvotes: 5,
      },
      {
        name: "HeyGen",
        description: "Crie avatares de vídeo realistas e traduza vídeos mantendo sua voz original.",
        icon: "🎭",
        pricing: "Grátis / $29/mês",
        highlight: "Avatares & tradução de voz",
        url: "https://heygen.com",
        upvotes: 4,
      },
      {
        name: "Kling AI",
        description: "Gerador de vídeo chinês com qualidade cinematográfica e movimentos realistas.",
        icon: "🎥",
        pricing: "Grátis / $8/mês",
        highlight: "Ótimo custo-benefício",
        url: "https://klingai.com",
        upvotes: 3,
      },
    ],
  },
  {
    id: "audio",
    label: "Áudio & Voz",
    icon: "🎵",
    description: "Gere músicas, vozes e podcasts com IA",
    tools: [
      {
        name: "ElevenLabs",
        description: "Clone sua voz ou gere vozes ultra-realistas em 30+ idiomas. Padrão da indústria.",
        icon: "🎙️",
        pricing: "Grátis / $5/mês",
        highlight: "Melhor clone de voz",
        url: "https://elevenlabs.io",
        badge: "Top 1",
        upvotes: 6,
      },
      {
        name: "Suno AI",
        description: "Crie músicas completas com letra e melodia usando apenas um prompt de texto.",
        icon: "🎵",
        pricing: "Grátis / $8/mês",
        highlight: "Músicas completas com IA",
        url: "https://suno.ai",
        upvotes: 7,
      },
      {
        name: "Udio",
        description: "Gerador de música com IA focado em qualidade e controle criativo avançado.",
        icon: "🎼",
        pricing: "Grátis / $10/mês",
        highlight: "Alta qualidade musical",
        url: "https://udio.com",
        upvotes: 3,
      },
    ],
  },
  {
    id: "produtividade",
    label: "Produtividade",
    icon: "⚡",
    description: "Ferramentas de IA para trabalhar mais rápido",
    tools: [
      {
        name: "Notion AI",
        description: "IA integrada ao Notion para escrever, resumir, traduzir e organizar documentos.",
        icon: "📝",
        pricing: "$8/mês (add-on)",
        highlight: "Melhor para documentação",
        url: "https://notion.so",
        upvotes: 5,
      },
      {
        name: "Gamma",
        description: "Crie apresentações, documentos e sites de forma automática com IA em minutos.",
        icon: "📊",
        pricing: "Grátis / $10/mês",
        highlight: "Apresentações em segundos",
        url: "https://gamma.app/signup?r=uwcd0f1rvh4h7a8",
        badge: "Trending",
        upvotes: 4,
      },
      {
        name: "NotebookLM",
        description: "Faça perguntas sobre seus documentos, gere resumos e podcasts com IA do Google.",
        icon: "📚",
        pricing: "Grátis",
        highlight: "100% gratuito",
        url: "https://notebooklm.google.com",
        upvotes: 6,
      },
    ],
  },
];

const allCategoryLabels = ["Todos", ...categories.map((c) => c.label)];
const STORAGE_KEY = "ferramentas_upvotes";

const Ferramentas = () => {
  const toolsList = categories.flatMap(cat => cat.tools);
  
  useSEO({
    title: "Ferramentas de IA",
    description: "As melhores ferramentas de inteligência artificial curadas pelo The Prompt News. Organizadas por categoria com upvotes da comunidade.",
    url: "/ferramentas",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Ferramentas de IA",
      "description": "As melhores ferramentas de inteligência artificial curadas pelo The Prompt News.",
      "url": "https://aiprompt.news/ferramentas",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": toolsList.slice(0, 20).map((tool, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": tool.name,
            "description": tool.description,
            "url": tool.url,
            "applicationCategory": "UtilitiesApplication"
          }
        }))
      }
    }
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [votedTools, setVotedTools] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });
  const [extraVotes, setExtraVotes] = useState<Record<string, number>>({});

  const toggleVote = (toolName: string) => {
    setVotedTools((prev) => {
      const next = new Set(prev);
      if (next.has(toolName)) {
        next.delete(toolName);
        setExtraVotes((ev) => ({ ...ev, [toolName]: (ev[toolName] || 0) - 1 }));
      } else {
        next.add(toolName);
        setExtraVotes((ev) => ({ ...ev, [toolName]: (ev[toolName] || 0) + 1 }));
      }
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...next])); } catch {}
      return next;
    });
  };

  const filteredCategories = categories
    .map((cat) => ({
      ...cat,
      tools: cat.tools.filter(
        (tool) =>
          (selectedCategory === "Todos" || cat.label === selectedCategory) &&
          (searchQuery === "" ||
            tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchQuery.toLowerCase()))
      ),
    }))
    .filter((cat) => cat.tools.length > 0);

  const totalTools = categories.reduce((acc, cat) => acc + cat.tools.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                  <Gift className="h-4 w-4" />
                  Curadas pela redação
                </div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  As melhores IAs{" "}
                  <span className="text-gradient">em um só lugar</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Selecionamos as principais ferramentas de IA do mercado. Cadastre-se pelos nossos links e apoie o The Prompt News!
                </p>
                <div className="flex gap-3 flex-wrap text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                    <Star className="h-4 w-4 text-amber-500" />
                    {totalTools} ferramentas curadas
                  </div>
                  <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    {categories.length} categorias
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 gradient-primary rounded-3xl blur-2xl opacity-20" />
                  <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg">
                    <div className="space-y-3">
                      {categories.slice(0, 5).map((cat) => (
                        <div key={cat.id} className="flex items-center gap-3">
                          <span className="text-xl">{cat.icon}</span>
                          <span className="text-sm font-medium">{cat.label}</span>
                          <span className="ml-auto text-xs text-muted-foreground">
                            {cat.tools.length} ferramentas
                          </span>
                        </div>
                      ))}
                      <div className="text-xs text-muted-foreground pt-1 text-center">
                        + {categories.length - 5} mais categorias
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aviso referral */}
        <div className="bg-amber-500/10 border-y border-amber-500/20">
          <div className="container py-3">
            <p className="text-xs text-amber-700 dark:text-amber-400 text-center">
              💡 <strong>Como funciona:</strong> Ao se cadastrar pelos nossos links, você apoia o The Prompt News sem pagar nada a mais. Obrigado!
            </p>
          </div>
        </div>

        {/* Search & Filter */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 card-shadow">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar ferramenta..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {allCategoryLabels.map((cat) => (
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
          </div>
        </section>

        {/* Tools by Category */}
        <section className="py-12 md:py-16">
          <div className="container space-y-16">
            {filteredCategories.map((category) => (
              <div key={category.id}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-card border border-border flex items-center justify-center text-xl">
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-xl">{category.label}</h2>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {category.tools.map((tool, index) => {
                    const voted = votedTools.has(tool.name);
                    const totalVotes = tool.upvotes + (extraVotes[tool.name] || 0);
                    return (
                      <article
                        key={index}
                        className="group bg-card border border-border rounded-xl p-5 card-shadow hover:card-shadow-hover transition-all duration-300 flex flex-col"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2.5">
                            <span className="text-2xl">{tool.icon}</span>
                            <div>
                              <h3 className="font-display font-semibold text-base leading-tight">
                                {tool.name}
                              </h3>
                              <span className="text-xs text-muted-foreground">{tool.pricing}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            {tool.badge && (
                              <span className="text-xs font-bold px-2 py-0.5 rounded-full gradient-primary text-primary-foreground">
                                {tool.badge}
                              </span>
                            )}
                            <button
                              onClick={() => toggleVote(tool.name)}
                              className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-all ${
                                voted
                                  ? "bg-primary/10 text-primary border border-primary/30"
                                  : "bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10"
                              }`}
                              title={voted ? "Remover voto" : "Votar"}
                            >
                              <ThumbsUp className={`h-3 w-3 ${voted ? "fill-primary" : ""}`} />
                              {totalVotes}
                            </button>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3 line-clamp-3 flex-1">
                          {tool.description}
                        </p>

                        <div className="mb-4">
                          <span className="inline-flex items-center gap-1 text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-full font-medium">
                            <Star className="h-3 w-3" />
                            {tool.highlight}
                          </span>
                        </div>

                        <Button variant="subscribe" size="sm" className="w-full" asChild>
                          <a href={tool.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5 mr-2" />
                            Acessar
                          </a>
                        </Button>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}

            {filteredCategories.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">Nenhuma ferramenta encontrada.</p>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("Todos");
                  }}
                >
                  Limpar filtros
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-muted/30 border-t border-border">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">
                Quer sugerir uma ferramenta?
              </h2>
              <p className="text-muted-foreground mb-6">
                Conhece alguma ferramenta de IA incrível que ainda não está aqui? Fale com a gente!
              </p>
              <Button variant="subscribe" size="lg" asChild>
                <a href="mailto:thepromptnews99@gmail.com">
                  <Gift className="h-4 w-4 mr-2" />
                  Sugerir ferramenta
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

export default Ferramentas;
