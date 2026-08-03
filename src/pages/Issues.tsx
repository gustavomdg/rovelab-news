import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Calendar, X, Filter } from "lucide-react";
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

const Issues = () => {
  useSEO({
    title: "All Briefings — RoveLab News",
    description: "Browse every edition of the RoveLab News — weekly furniture intelligence covering sofas, beds, and home trends across Canada and the USA.",
    url: "/news",
  });

  const [searchParams] = useSearchParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string>(searchParams.get("tag") || "all");
  const [sortBy, setSortBy] = useState<"recent" | "oldest">("recent");
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [posts, searchQuery, selectedYear, selectedTag, sortBy]);

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
        author: post.author || 'Rove Lab',
        subtitle: post.subtitle || ''
      })) as Post[];

      setPosts(parsedData);

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

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.subtitle?.toLowerCase().includes(query)
      );
    }

    if (selectedYear !== "all") {
      result = result.filter((post) => {
        const date = new Date(post.published_at || post.created_at);
        return date.getFullYear().toString() === selectedYear;
      });
    }

    if (selectedTag !== "all") {
      result = result.filter((post) => post.tags?.includes(selectedTag));
    }

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
    return Array.from(years).sort((a, b) => parseInt(b) - parseInt(a));
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedYear("all");
    setSelectedTag("all");
    setSortBy("recent");
  };

  const hasActiveFilters = searchQuery || selectedYear !== "all" || selectedTag !== "all";

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-CA", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const groupedPosts = filteredPosts.reduce((groups, post) => {
    const date = new Date(post.published_at || post.created_at);
    const key = `${date.getFullYear()}-${date.getMonth()}`;
    if (!groups[key]) {
      groups[key] = {
        label: date.toLocaleDateString("en-CA", { month: "long", year: "numeric" }),
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
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              All <span className="text-primary italic">Briefings</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every edition of the RoveLab News — furniture intelligence for Canada & USA, delivered weekly.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 mb-10">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search briefings by title or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filter:</span>
              </div>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="h-10 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="all">All years</option>
                {getAvailableYears().map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>

              {allTags.length > 0 && (
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="h-10 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="all">All topics</option>
                  {allTags.map((tag) => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              )}

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "recent" | "oldest")}
                className="h-10 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="recent">Newest first</option>
                <option value="oldest">Oldest first</option>
              </select>

              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <X className="h-4 w-4 mr-1" />
                  Clear filters
                </Button>
              )}

              <div className="ml-auto text-sm text-muted-foreground">
                {filteredPosts.length} {filteredPosts.length === 1 ? "briefing" : "briefings"}
              </div>
            </div>
          </div>

          {loading && (
            <div className="text-center py-20">
              <div className="animate-pulse text-muted-foreground">Loading briefings...</div>
            </div>
          )}

          {!loading && filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2">No briefings found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filters or search terms.</p>
              {hasActiveFilters && (
                <Button variant="outline" onClick={clearFilters}>Clear filters</Button>
              )}
            </div>
          )}

          {!loading && filteredPosts.length > 0 && (
            <div className="space-y-12">
              {Object.entries(groupedPosts).map(([key, group]: [string, any]) => (
                <div key={key}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium capitalize">{group.label}</span>
                    </div>
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-sm text-muted-foreground">
                      {group.posts.length} {group.posts.length === 1 ? "briefing" : "briefings"}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.posts.map((post: Post) => (
                      <Link
                        key={post.id}
                        to={`/post/${post.slug}`}
                        className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
                      >
                        <div className="relative aspect-video">
                          <img
                            src={post.hero_image || "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"}
                            alt={post.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                            {post.emoji && <span className="mr-1">{post.emoji}</span>}
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
                                <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                              ))}
                            </div>
                          )}
                          <span className="text-xs text-primary font-medium">
                            {formatDate(post.published_at || post.created_at)}
                          </span>
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

export default Issues;
