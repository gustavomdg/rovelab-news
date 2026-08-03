import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import ContentBlockEditor, { ContentBlock } from "@/components/ContentBlockEditor";
import TagsEditor from "@/components/TagsEditor";
import NewsletterManagement from "@/components/NewsletterManagement";
import AuditLogs from "@/components/AuditLogs";
import type { Json } from "@/integrations/supabase/types";
import { 
  Zap, Plus, Edit, Trash2, LogOut, ArrowLeft, 
  Save, Eye, FileText, X, ImageIcon, Search, ChevronLeft, ChevronRight, ArrowUpDown, Copy, Mail, Shield, BarChart3
} from "lucide-react";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import type { User, Session } from "@supabase/supabase-js";

interface Post {
  id: string;
  slug: string;
  title: string;
  emoji: string;
  subtitle: string | null;
  author: string;
  hero_image: string | null;
  content: any;
  tags: string[] | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [showEditor, setShowEditor] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");
  const [sortBy, setSortBy] = useState<"date" | "title" | "status">("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const postsPerPage = 10;
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    emoji: "🤖",
    subtitle: "",
    author: "Equipe TPN",
    hero_image: "",
    published: false,
  });
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([]);
  const [postTags, setPostTags] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (!session) {
        navigate("/auth");
      } else {
        setTimeout(() => {
          checkAdminRole(session.user.id);
        }, 0);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (!session) {
        navigate("/auth");
      } else {
        checkAdminRole(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkAdminRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .in("role", ["admin", "editor"]);

      if (error) throw error;

      const hasAccess = data && data.length > 0;
      setIsAdmin(hasAccess);

      if (hasAccess) {
        fetchPosts();
      }
    } catch (error) {
      console.error("Error checking role:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleImageUpload = async (file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "Arquivo muito grande",
        description: "O tamanho máximo é 5MB",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${formData.slug || Date.now()}-${Date.now()}.${fileExt}`;
      const filePath = `hero/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('post-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('post-images')
        .getPublicUrl(filePath);

      setFormData(prev => ({ ...prev, hero_image: publicUrl }));
      toast({ title: "Imagem enviada!" });
    } catch (error: any) {
      toast({
        title: "Erro ao enviar imagem",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      emoji: "🤖",
      subtitle: "",
      author: "Equipe TPN",
      hero_image: "",
      published: false,
    });
    setContentBlocks([]);
    setPostTags([]);
    setEditingPost(null);
    setShowEditor(false);
  };

  const handleEdit = (post: Post) => {
    setFormData({
      title: post.title,
      slug: post.slug,
      emoji: post.emoji || "🤖",
      subtitle: post.subtitle || "",
      author: post.author,
      hero_image: post.hero_image || "",
      published: post.published,
    });
    // Parse content to blocks
    const blocks = Array.isArray(post.content) ? post.content as ContentBlock[] : [];
    setContentBlocks(blocks);
    setPostTags(post.tags || []);
    setEditingPost(post);
    setShowEditor(true);
  };

  const handleDuplicate = (post: Post) => {
    const newSlug = `${post.slug}-copia-${Date.now()}`;
    setFormData({
      title: `${post.title} (Cópia)`,
      slug: newSlug,
      emoji: post.emoji || "🤖",
      subtitle: post.subtitle || "",
      author: post.author,
      hero_image: post.hero_image || "",
      published: false,
    });
    // Parse content to blocks
    const blocks = Array.isArray(post.content) ? post.content as ContentBlock[] : [];
    setContentBlocks(blocks);
    setPostTags(post.tags || []);
    setEditingPost(null);
    setShowEditor(true);
    toast({ title: "Post duplicado! Edite e salve para criar o novo post." });
  };

  const handleSave = async () => {
    try {
      const postData = {
        title: formData.title,
        slug: formData.slug,
        emoji: formData.emoji,
        subtitle: formData.subtitle || null,
        author: formData.author,
        hero_image: formData.hero_image || null,
        content: contentBlocks as unknown as Json,
        tags: postTags,
        published: formData.published,
        published_at: formData.published ? new Date().toISOString() : null,
      };

      if (editingPost) {
        const { error } = await supabase
          .from("posts")
          .update(postData)
          .eq("id", editingPost.id);

        if (error) throw error;
        toast({ title: "Post atualizado!" });
      } else {
        const { error } = await supabase.from("posts").insert(postData);

        if (error) throw error;
        toast({ title: "Post criado!" });
      }

      resetForm();
      fetchPosts();
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este post?")) return;

    try {
      const { error } = await supabase.from("posts").delete().eq("id", id);

      if (error) throw error;
      toast({ title: "Post excluído!" });
      fetchPosts();
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Carregando...</div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Acesso Restrito</h1>
          <p className="text-muted-foreground mb-6">
            Você não tem permissão para acessar o painel administrativo.
          </p>
          <Button variant="subscribe" asChild>
            <Link to="/">Voltar para a home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                Admin
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user?.email}
            </span>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="posts" className="gap-2">
              <FileText className="h-4 w-4" />
              Posts
            </TabsTrigger>
            <TabsTrigger value="newsletter" className="gap-2">
              <Mail className="h-4 w-4" />
              Newsletter
            </TabsTrigger>
            <TabsTrigger value="audit" className="gap-2">
              <Shield className="h-4 w-4" />
              Auditoria
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts">
        {showEditor ? (
          /* Editor */
          <div className="max-w-3xl mx-auto">
            <Button
              variant="ghost"
              className="mb-6"
              onClick={resetForm}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>

            <div className="bg-card border border-border rounded-2xl p-8 card-shadow">
              <h1 className="font-display text-2xl font-bold mb-6">
                {editingPost ? "Editar Post" : "Novo Post"}
              </h1>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Emoji</Label>
                    <Input
                      value={formData.emoji}
                      onChange={(e) => setFormData({ ...formData, emoji: e.target.value })}
                      placeholder="🤖"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Autor</Label>
                    <Input
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      placeholder="Equipe TPN"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Título</Label>
                  <Input
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Título do post"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Slug (URL)</Label>
                  <Input
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="titulo-do-post"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Subtítulo</Label>
                  <Input
                    value={formData.subtitle}
                    onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                    placeholder="Breve descrição do post"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Imagem de capa</Label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    className="hidden"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      await handleImageUpload(file);
                    }}
                  />
                  
                  {formData.hero_image ? (
                    <div className="relative">
                      <img
                        src={formData.hero_image}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-lg border border-border"
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => setFormData({ ...formData, hero_image: "" })}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsDragging(true);
                      }}
                      onDragEnter={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsDragging(true);
                      }}
                      onDragLeave={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsDragging(false);
                      }}
                      onDrop={async (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsDragging(false);
                        
                        const file = e.dataTransfer.files?.[0];
                        if (file && file.type.startsWith('image/')) {
                          await handleImageUpload(file);
                        } else {
                          toast({
                            title: "Arquivo inválido",
                            description: "Por favor, envie apenas imagens (PNG, JPG, etc.)",
                            variant: "destructive",
                          });
                        }
                      }}
                      className={`w-full h-48 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors ${
                        isDragging 
                          ? "border-primary bg-primary/10" 
                          : "border-border hover:border-primary/50 hover:bg-muted/50"
                      }`}
                    >
                      {uploading ? (
                        <div className="animate-pulse text-muted-foreground">Enviando...</div>
                      ) : (
                        <>
                          <ImageIcon className={`h-10 w-10 mb-2 ${isDragging ? "text-primary" : "text-muted-foreground"}`} />
                          <p className={`text-sm ${isDragging ? "text-primary font-medium" : "text-muted-foreground"}`}>
                            {isDragging ? "Solte a imagem aqui" : "Clique ou arraste para enviar imagem"}
                          </p>
                          <p className="text-xs text-muted-foreground">PNG, JPG até 5MB</p>
                        </>
                      )}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Tags</Label>
                  <TagsEditor tags={postTags} onChange={setPostTags} />
                </div>

                <div className="space-y-2">
                  <Label>Conteúdo</Label>
                  <ContentBlockEditor
                    blocks={contentBlocks}
                    onChange={setContentBlocks}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <Switch
                    checked={formData.published}
                    onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
                  />
                  <Label>Publicado</Label>
                </div>

                <div className="flex gap-3">
                  <Button variant="subscribe" onClick={handleSave}>
                    <Save className="h-4 w-4 mr-2" />
                    Salvar
                  </Button>
                  {editingPost && formData.published && (
                    <Button variant="outline" asChild>
                      <Link to={`/post/${formData.slug}`} target="_blank">
                        <Eye className="h-4 w-4 mr-2" />
                        Visualizar
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Posts List */
          (() => {
            // Filter and paginate posts
            const filteredPosts = posts
              .filter((post) => {
                const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  (post.subtitle?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
                
                const matchesStatus = statusFilter === "all" ||
                  (statusFilter === "published" && post.published) ||
                  (statusFilter === "draft" && !post.published);
                
                return matchesSearch && matchesStatus;
              })
              .sort((a, b) => {
                let comparison = 0;
                
                if (sortBy === "date") {
                  comparison = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
                } else if (sortBy === "title") {
                  comparison = a.title.localeCompare(b.title, "pt-BR");
                } else if (sortBy === "status") {
                  comparison = (a.published ? 1 : 0) - (b.published ? 1 : 0);
                }
                
                return sortOrder === "asc" ? comparison : -comparison;
              });

            const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
            const startIndex = (currentPage - 1) * postsPerPage;
            const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

            const handleSort = (field: "date" | "title" | "status") => {
              if (sortBy === field) {
                setSortOrder(sortOrder === "asc" ? "desc" : "asc");
              } else {
                setSortBy(field);
                setSortOrder(field === "title" ? "asc" : "desc");
              }
              setCurrentPage(1);
            };

            return (
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="font-display text-3xl font-bold">Posts</h1>
                <p className="text-muted-foreground">Gerencie o conteúdo da newsletter</p>
              </div>
              <Button variant="subscribe" onClick={() => setShowEditor(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Novo Post
              </Button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar posts..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={statusFilter === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setStatusFilter("all");
                    setCurrentPage(1);
                  }}
                >
                  Todos
                </Button>
                <Button
                  variant={statusFilter === "published" ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setStatusFilter("published");
                    setCurrentPage(1);
                  }}
                >
                  Publicados
                </Button>
                <Button
                  variant={statusFilter === "draft" ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setStatusFilter("draft");
                    setCurrentPage(1);
                  }}
                >
                  Rascunhos
                </Button>
              </div>
            </div>

            {/* Sort Controls */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm text-muted-foreground">Ordenar por:</span>
              <Button
                variant={sortBy === "date" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => handleSort("date")}
                className="gap-1"
              >
                Data
                {sortBy === "date" && (
                  <ArrowUpDown className={`h-3 w-3 ${sortOrder === "asc" ? "rotate-180" : ""}`} />
                )}
              </Button>
              <Button
                variant={sortBy === "title" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => handleSort("title")}
                className="gap-1"
              >
                Título
                {sortBy === "title" && (
                  <ArrowUpDown className={`h-3 w-3 ${sortOrder === "asc" ? "rotate-180" : ""}`} />
                )}
              </Button>
              <Button
                variant={sortBy === "status" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => handleSort("status")}
                className="gap-1"
              >
                Status
                {sortBy === "status" && (
                  <ArrowUpDown className={`h-3 w-3 ${sortOrder === "asc" ? "rotate-180" : ""}`} />
                )}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-6 card-shadow">
                <FileText className="h-8 w-8 text-primary mb-2" />
                <p className="text-3xl font-bold">{posts.length}</p>
                <p className="text-muted-foreground text-sm">Total de posts</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 card-shadow">
                <Eye className="h-8 w-8 text-green-500 mb-2" />
                <p className="text-3xl font-bold">{posts.filter(p => p.published).length}</p>
                <p className="text-muted-foreground text-sm">Publicados</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 card-shadow">
                <Edit className="h-8 w-8 text-orange-500 mb-2" />
                <p className="text-3xl font-bold">{posts.filter(p => !p.published).length}</p>
                <p className="text-muted-foreground text-sm">Rascunhos</p>
              </div>
            </div>

            {/* Posts Table */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden card-shadow">
              {filteredPosts.length === 0 ? (
                <div className="p-12 text-center">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    {posts.length === 0 ? "Nenhum post ainda. Crie o primeiro!" : "Nenhum post encontrado."}
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {paginatedPosts.map((post) => (
                    <div
                      key={post.id}
                      className="p-4 flex items-center gap-4 hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-2xl">{post.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{post.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {post.author} • {new Date(post.created_at).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            post.published
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                          }`}
                        >
                          {post.published ? "Publicado" : "Rascunho"}
                        </span>
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(post)} title="Editar">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDuplicate(post)} title="Duplicar">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-destructive"
                          onClick={() => handleDelete(post.id)}
                          title="Excluir"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6">
                <p className="text-sm text-muted-foreground">
                  Mostrando {startIndex + 1}-{Math.min(startIndex + postsPerPage, filteredPosts.length)} de {filteredPosts.length} posts
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm px-3">
                    {currentPage} / {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
            );
          })()
        )}
          </TabsContent>

          <TabsContent value="newsletter">
            <NewsletterManagement />
          </TabsContent>

          <TabsContent value="audit">
            <AuditLogs />
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsDashboard />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
