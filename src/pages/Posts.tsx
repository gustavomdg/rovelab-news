import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Calendar, X, Filter, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useSEO } from "@/hooks/useSEO";

interface Post {
  id: string;
  slug: string;
  title: string;
  emoji: string;
  subtitle: string | null;
  author: string;
  hero_image: string | null;
  created_at: string;
  published_at: string | null;
  tags: string[] | null;
}

const Posts = () => {
  useSEO({
    title: "Posts",
    description: "Explore todas as edições da The Prompt News. Artigos sobre IA, ferramentas, prompts e automação.",
    url: "/posts",
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string>(searchParams.get("tag") || "all");
  const [sortBy, setSortBy] = useState<"recent" | "oldest">("recent");
  const [allTags, setAllTags] = useState<string[]>([]);

  // Update selectedTag when URL params change
  useEffect(() => {
    const tagFromUrl = searchParams.get("tag");
    if (tagFromUrl) {
      setSelectedTag(tagFromUrl);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [posts, searchQuery, selectedYear, selectedMonth, selectedTag, sortBy]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      
      const parsedData = ((data || []) as any[]).map(post => ({
        ...post,
        tags: Array.isArray(post.tags) ? post.tags : (typeof post.tags === 'string' ? post.tags.split(',').map((t: string) => t.trim()).filter(Boolean) : []),
        author: post.author || 'Equipe',
        subtitle: post.subtitle || ''
      })) as Post[];

      setPosts(parsedData);

      // Extract all unique tags
      const tags = new Set<string>();
      parsedData.forEach((post) => {
        post.tags.forEach((tag: string) => tags.add(tag));
      });
      setAllTags(Array.from(tags).sort());
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterPosts = () => {
    let result = [...posts];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.subtitle?.toLowerCase().includes(query) ||
          post.author.toLowerCase().includes(query)
      );
    }

    // Year filter
    if (selectedYear !== "all") {
      result = result.filter((post) => {
        const date = new Date(post.published_at || post.created_at);
        return date.getFullYear().toString() === selectedYear;
      });
    }

    // Month filter
    if (selectedMonth !== "all") {
      result = result.filter((post) => {
        const date = new Date(post.published_at || post.created_at);
        return date.getMonth().toString() === selectedMonth;
      });
    }

    // Tag filter
    if (selectedTag !== "all") {
      result = result.filter((post) => post.tags?.includes(selectedTag));
    }

    // Sorting
    result.sort((a, b) => {
      const dateA = new Date(a.published_at || a.created_at).getTime();
      const dateB = new Date(b.published_at || b.created_at).getTime();
      return sortBy === "recent" ? dateB - dateA : dateA - dateB;
    });

    setFilteredPosts(result);
  };

  const getAvailableYears = () => {
    const years = new Set(
      posts.map((post) =>
        new Date(post.published_at || post.created_at).getFullYear().toString()
      )
    );
    return Array.from(years).sort((a: string, b: string) => parseInt(b) - parseInt(a));
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedYear("all");
    setSelectedMonth("all");
    setSelectedTag("all");
    setSortBy("recent");
  };

  const hasActiveFilters =
    searchQuery || selectedYear !== "all" || selectedMonth !== "all" || selectedTag !== "all";

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const months = [
    { value: "0", label: "Janeiro" },
    { value: "1", label: "Fevereiro" },
    { value: "2", label: "Março" },
    { value: "3", label: "Abril" },
    { value: "4", label: "Maio" },
    { value: "5", label: "Junho" },
    { value: "6", label: "Julho" },
    { value: "7", label: "Agosto" },
    { value: "8", label: "Setembro" },
    { value: "9", label: "Outubro" },
    { value: "10", label: "Novembro" },
    { value: "11", label: "Dezembro" },
  ];

  // Group posts by month/year for timeline display
  const groupedPosts = filteredPosts.reduce((groups, post) => {
    const date = new Date(post.published_at || post.created_at);
    const key = `${date.getFullYear()}-${date.getMonth()}`;
    if (!groups[key]) {
      groups[key] = {
        label: date.toLocaleDateString("pt-BR", { month: "long", year: "numeric" }),
        posts: [],
      };
    }
    groups[key].posts.push(post);
    return groups;
  }, {} as Record<string, { label: string; posts: Post[] }>);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="py-12">
        <div className="container">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Arquivador de <span className="text-gradient">Posts</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore todas as edições da The Prompt News. Use os filtros para encontrar exatamente o que você procura.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-10">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar por título, descrição ou autor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filtros:</span>
              </div>

              {/* Year Filter */}
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="h-10 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="all">Todos os anos</option>
                {getAvailableYears().map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              {/* Month Filter */}
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="h-10 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="all">Todos os meses</option>
                {months.map((month) => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>

              {/* Tag Filter */}
              {allTags.length > 0 && (
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="h-10 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="all">Todas as tags</option>
                  {allTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              )}

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "recent" | "oldest")}
                className="h-10 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="recent">Mais recentes</option>
                <option value="oldest">Mais antigos</option>
              </select>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <X className="h-4 w-4 mr-1" />
                  Limpar filtros
                </Button>
              )}

              {/* Results count */}
              <div className="ml-auto text-sm text-muted-foreground">
                {filteredPosts.length} {filteredPosts.length === 1 ? "resultado" : "resultados"}
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <div className="animate-pulse text-muted-foreground">Carregando posts...</div>
            </div>
          )}

          {/* Empty State */}
          {!loading && filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Nenhum post encontrado</h3>
              <p className="text-muted-foreground mb-6">
                Tente ajustar os filtros ou buscar por outros termos.
              </p>
              {hasActiveFilters && (
                <Button variant="outline" onClick={clearFilters}>
                  Limpar filtros
                </Button>
              )}
            </div>
          )}

          {/* Posts Timeline */}
          {!loading && filteredPosts.length > 0 && (
            <div className="space-y-12">
              {Object.entries(groupedPosts).map(([key, group]: [string, any]) => (
                <div key={key}>
                  {/* Month/Year Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                      <Calendar className="h-4 w-4" />
                      <span className="font-semibold capitalize">{group.label}</span>
                    </div>
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-sm text-muted-foreground">
                      {group.posts.length} {group.posts.length === 1 ? "edição" : "edições"}
                    </span>
                  </div>

                  {/* Posts Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.posts.map((post) => (
                      <Link
                        key={post.id}
                        to={`/post/${post.slug}`}
                        className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
                      >
                        <div className="relative aspect-video">
                          <img
                            src={post.hero_image || "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"}
                            alt={post.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                            <span className="mr-1">{post.emoji}</span>
                            {post.title}
                          </h3>
                          {post.subtitle && (
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                              {post.subtitle}
                            </p>
                          )}
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-3">
                              {post.tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                              {post.tags.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{post.tags.length - 3}
                                </Badge>
                              )}
                            </div>
                          )}
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-primary font-medium">
                              {formatDate(post.published_at || post.created_at)}
                            </span>
                            <span className="text-muted-foreground">
                              por {post.author}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Posts;
