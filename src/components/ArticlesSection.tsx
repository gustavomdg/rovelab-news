import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ArticleCard from "./ArticleCard";
import FeaturedArticle from "./FeaturedArticle";
import { supabase } from "@/integrations/supabase/client";

interface Post {
  id: string;
  slug: string;
  title: string;
  emoji: string;
  subtitle: string | null;
  author: string;
  hero_image: string | null;
  created_at: string;
}

interface PostWithViews extends Post {
  view_count?: number;
}

const ArticlesSection = () => {
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);
  const [mostViewedPosts, setMostViewedPosts] = useState<PostWithViews[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      // Fetch recent posts
      const { data: recent, error: recentError } = await supabase
        .from("posts")
        .select("id, slug, title, emoji, subtitle, author, hero_image, created_at")
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(10);

      if (recentError) throw recentError;
      setRecentPosts(recent || []);

      // Fetch most viewed posts
      const { data: viewData, error: viewError } = await supabase
        .rpc('get_most_viewed_posts', { limit_count: 5 });

      if (viewError) {
        console.log("No view data yet:", viewError);
        setMostViewedPosts([]);
      } else if (viewData && viewData.length > 0) {
        // Get post details for most viewed
        const postIds = viewData.map((v: { post_id: string }) => v.post_id);
        const { data: viewedPosts, error: postsError } = await supabase
          .from("posts")
          .select("id, slug, title, emoji, subtitle, author, hero_image, created_at")
          .eq("published", true)
          .in("id", postIds);

        if (postsError) throw postsError;

        // Merge view counts with posts
        const postsWithViews = viewedPosts?.map(post => {
          const viewInfo = viewData.find((v: { post_id: string; view_count: number }) => v.post_id === post.id);
          return {
            ...post,
            view_count: viewInfo?.view_count || 0
          };
        }).sort((a, b) => (b.view_count || 0) - (a.view_count || 0)) || [];

        setMostViewedPosts(postsWithViews);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-CA", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const featured = recentPosts[0];
  const otherRecent = recentPosts.slice(1, 6);

  if (loading) {
    return (
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <div className="animate-pulse text-muted-foreground">Loading briefings...</div>
        </div>
      </section>
    );
  }

  if (recentPosts.length === 0) {
    return (
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="font-display font-bold text-xl md:text-2xl text-primary mb-4">
            THIS WEEK'S BRIEFINGS
          </h2>
          <p className="text-muted-foreground">No briefings published yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <h2 className="font-display font-bold text-xl md:text-2xl text-primary">
              THIS WEEK'S BRIEFINGS
            </h2>
          </div>
          <Button variant="ghost" className="text-primary group" asChild>
            <Link to="/news">
              See all
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Featured article */}
        {featured && (
          <div className="mb-16">
            <FeaturedArticle
              title={featured.title}
              description={featured.subtitle || ""}
              date={formatDate(featured.created_at)}
              author={featured.author}
              image={featured.hero_image || "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"}
              slug={featured.slug}
            />
          </div>
        )}

        {/* Recent posts list */}
        {otherRecent.length > 0 && (
          <div className="max-w-4xl mx-auto mb-20">
            {otherRecent.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                description={article.subtitle || ""}
                date={formatDate(article.created_at)}
                image={article.hero_image || "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80"}
                emoji={article.emoji}
                slug={article.slug}
              />
            ))}
          </div>
        )}

        {/* Most Viewed Section */}
        {mostViewedPosts.length > 0 && (
          <>
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="font-display font-bold text-xl md:text-2xl text-primary">
                MOST READ
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {mostViewedPosts.slice(0, 6).map((post, index) => (
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
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                      #{index + 1}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      <span className="mr-1">{post.emoji}</span>
                      {post.title}
                    </h3>
                    {post.subtitle && (
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {post.subtitle}
                      </p>
                    )}
                    <span className="text-xs text-primary font-medium mt-3 block">
                      {formatDate(post.created_at)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        <div className="mt-12 text-center">
          <Button variant="subscribe" size="lg" asChild>
            <Link to="/news">View all briefings</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
