import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { User, ArrowLeft, Tag, Twitter, Link2, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";
import { supabase } from "@/integrations/supabase/client";
import { useNewsletter } from "@/hooks/useNewsletter";
import { useSEO } from "@/hooks/useSEO";
import { toast } from "@/hooks/use-toast";
import { Loader2, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import DOMPurify from "dompurify";

// Formata texto com markdown para HTML
const formatContent = (text: string | undefined): string => {
  if (!text) return '';

  let formatted = text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary underline hover:text-primary/80" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/~~([^~]+)~~/g, '<del>$1</del>')
    .replace(/__([^_]+)__/g, '<u>$1</u>')
    .replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
    .replace(/\n/g, '<br>');

  return DOMPurify.sanitize(formatted, {
    ALLOWED_TAGS: ['strong', 'em', 'u', 'br', 'b', 'i', 'a', 'del', 'code'],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'class']
  });
};

const calculateReadingTime = (content: PostSection[]): number => {
  const text = content
    .flatMap(s => [s.content || "", ...(s.items || [])])
    .join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};

interface PostSection {
  type: "header" | "title" | "paragraph" | "text" | "list" | "quote" | "image";
  category?: string;
  content?: string;
  items?: string[];
  image?: string;
}

interface Post {
  id: string;
  slug: string;
  title: string;
  emoji: string;
  subtitle: string | null;
  author: string;
  hero_image: string | null;
  content: PostSection[];
  tags: string[] | null;
  published: boolean;
  created_at: string;
  published_at: string | null;
}

// Mid-article newsletter CTA
const NewsletterCTA = () => {
  const { email, setEmail, isLoading, handleSubscribe } = useNewsletter("mid-article");
  return (
    <div className="my-10 p-6 bg-muted/50 border border-border rounded-2xl text-center">
      <Sparkles className="h-6 w-6 text-primary mx-auto mb-3" />
      <h3 className="font-display font-bold text-lg mb-1">Gostando do conteúdo?</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Receba as melhores novidades de IA toda semana, direto no seu inbox.
      </p>
      <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm mx-auto">
        <Input
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" variant="subscribe" disabled={isLoading} className="shrink-0">
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Assinar"}
        </Button>
      </form>
    </div>
  );
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useSEO({
    title: post ? `${post.emoji} ${post.title}` : undefined,
    description: post?.subtitle || undefined,
    image: post?.hero_image || undefined,
    url: post ? `/post/${post.slug}` : undefined,
    type: "article",
    schema: post ? {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": `${post.emoji} ${post.title}`,
      "description": post.subtitle,
      "image": post.hero_image,
      "datePublished": post.published_at || post.created_at,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "RoveLab News",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aiprompt.news/logo.png"
        }
      },
      "url": `https://aiprompt.news/post/${post.slug}`
    } : undefined
  });

  useEffect(() => {
    if (slug) fetchPost(slug);
  }, [slug]);

  useEffect(() => {
    if (post?.id) trackView(post.id);
  }, [post?.id]);

  const trackView = async (postId: string) => {
    try {
      await supabase.from("post_views").insert({ post_id: postId });
    } catch {}
  };

  const fetchPost = async (postSlug: string) => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", postSlug)
        .eq("published", true)
        .limit(1)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        let contentData: PostSection[] = [];
        if (Array.isArray(data.content)) {
          contentData = data.content as unknown as PostSection[];
        } else if (typeof data.content === 'string') {
          contentData = [{ type: "paragraph", content: data.content }];
        }

        let tagsData: string[] | null = [];
        if (Array.isArray(data.tags)) {
          tagsData = data.tags;
        } else if (typeof data.tags === 'string') {
          tagsData = data.tags.split(',').map((t: string) => t.trim()).filter(Boolean);
        } else {
          tagsData = null;
        }

        setPost({ ...data, content: contentData, tags: tagsData });
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const shareOnTwitter = () => {
    if (!post) return;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${post.emoji} ${post.title}`)}&url=${encodeURIComponent(window.location.href)}`,
      "_blank"
    );
  };

  const shareOnWhatsApp = () => {
    if (!post) return;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${post.emoji} ${post.title} — ${window.location.href}`)}`,
      "_blank"
    );
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast({ title: "Link copiado!", description: "URL copiada para a área de transferência." });
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-20 text-center">
          <div className="animate-pulse text-muted-foreground">Carregando...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-20 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Post não encontrado</h1>
          <p className="text-muted-foreground mb-8">O artigo que você procura não existe ou não está publicado.</p>
          <Button variant="subscribe" asChild>
            <Link to="/">Voltar para a home</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const readingTime = calculateReadingTime(post.content);
  const midpoint = Math.floor(post.content.length / 2);

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <Header />

      <main className="py-8">
        <article className="container max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>›</span>
            <span>Posts</span>
            <span>›</span>
            <span className="text-primary truncate max-w-[200px]">{post.emoji} {post.title}</span>
          </nav>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            <span className="mr-2">{post.emoji}</span>
            {post.title}
          </h1>

          {/* Subtitle */}
          {post.subtitle && (
            <p className="text-lg text-muted-foreground mb-4">{post.subtitle}</p>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Link key={tag} to={`/posts?tag=${encodeURIComponent(tag)}`}>
                  <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          )}

          {/* Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b border-border">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center">
                  <User className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium">por<span className="text-primary ml-1">{post.author}</span></p>
                </div>
              </div>
              <span className="text-primary text-sm font-medium">
                {formatDate(post.published_at || post.created_at)}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                {readingTime} min de leitura
              </span>
            </div>

            {/* Share buttons */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-9 w-9" onClick={shareOnTwitter} title="Compartilhar no X/Twitter">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-9 w-9" onClick={shareOnWhatsApp} title="Compartilhar no WhatsApp">
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-9 w-9" onClick={copyLink} title="Copiar link">
                <Link2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          {post.hero_image && (
            <div className="rounded-xl overflow-hidden mb-10 gradient-primary p-1">
              <img
                src={post.hero_image}
                alt={post.title}
                loading="lazy"
                className="w-full aspect-video object-cover rounded-lg"
              />
            </div>
          )}

          {/* Content with mid-article newsletter CTA */}
          <div className="prose prose-lg max-w-none">
            {post.content.map((section, index) => {
              const el = (() => {
                switch (section.type) {
                  case "header":
                    return (
                      <div key={index} className="my-8">
                        <div className="section-header inline-block mb-4">{section.category}</div>
                      </div>
                    );
                  case "title":
                    return (
                      <h2 key={index} className="font-display text-2xl md:text-3xl font-bold text-primary mt-2 mb-4">
                        {section.content}
                      </h2>
                    );
                  case "text":
                  case "paragraph":
                    return (
                      <p
                        key={index}
                        className="text-foreground leading-relaxed mb-4 whitespace-pre-line"
                        dangerouslySetInnerHTML={{ __html: formatContent(section.content) }}
                      />
                    );
                  case "list":
                    return (
                      <ul key={index} className="space-y-3 mb-6">
                        {section.items?.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-foreground">
                            <span className="text-primary mt-1.5">•</span>
                            <span dangerouslySetInnerHTML={{ __html: formatContent(item) }} />
                          </li>
                        ))}
                      </ul>
                    );
                  case "quote":
                    return (
                      <blockquote key={index} className="bg-muted rounded-lg p-6 my-6 border-l-4 border-primary">
                        <p className="text-foreground italic">{section.content}</p>
                      </blockquote>
                    );
                  case "image":
                    return (
                      <div key={index} className="my-8 rounded-xl overflow-hidden">
                        <img src={section.image} alt="" loading="lazy" className="w-full object-cover" />
                      </div>
                    );
                  default:
                    return null;
                }
              })();

              return (
                <>
                  {el}
                  {index === midpoint && <NewsletterCTA key="newsletter-cta" />}
                </>
              );
            })}
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-12">
            <div className="h-px flex-1 bg-border" />
            <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground text-lg">⚡</span>
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Feedback */}
          <div className="text-center mb-12">
            <h3 className="font-display text-xl font-semibold mb-4">O que achou da edição de hoje?</h3>
            <div className="flex items-center justify-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                <span>🤩</span> Baita
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                <span>😐</span> Marromenos
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors">
                <span>🤢</span> Bléh
              </button>
            </div>
          </div>

          {/* Share at end */}
          <div className="mb-8 p-5 border border-border rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">Gostou? Compartilhe com quem também curte IA.</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={shareOnTwitter} className="gap-1.5">
                <Twitter className="h-3.5 w-3.5" /> Twitter
              </Button>
              <Button variant="outline" size="sm" onClick={shareOnWhatsApp} className="gap-1.5">
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </Button>
              <Button variant="outline" size="sm" onClick={copyLink} className="gap-1.5">
                <Link2 className="h-3.5 w-3.5" /> Copiar link
              </Button>
            </div>
          </div>

          {/* Back button */}
          <div className="text-center">
            <Button variant="outline" asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para a home
              </Link>
            </Button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
