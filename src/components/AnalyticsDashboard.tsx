import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Eye, FileText, TrendingUp, Users, Calendar, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis } from "recharts";

type PeriodFilter = "7" | "14" | "30" | "90";

interface ViewStats {
  total_views: number;
  views_today: number;
  views_this_week: number;
  views_this_month: number;
}

interface DailyViews {
  date: string;
  views: number;
}

interface TopPost {
  post_id: string;
  title: string;
  views: number;
}

const AnalyticsDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [period, setPeriod] = useState<PeriodFilter>("14");
  const [stats, setStats] = useState<ViewStats>({
    total_views: 0,
    views_today: 0,
    views_this_week: 0,
    views_this_month: 0,
  });
  const [dailyViews, setDailyViews] = useState<DailyViews[]>([]);
  const [topPosts, setTopPosts] = useState<TopPost[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalSubscribers, setTotalSubscribers] = useState(0);

  useEffect(() => {
    fetchAnalytics();
  }, [period]);

  const fetchAnalytics = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const periodDays = parseInt(period);

      // Fetch total views and time-based stats
      const now = new Date();
      const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
      const weekStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
      const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

      // Total views
      const { count: totalViews } = await supabase
        .from("post_views")
        .select("*", { count: "exact", head: true });

      // Views today
      const { count: viewsToday } = await supabase
        .from("post_views")
        .select("*", { count: "exact", head: true })
        .gte("viewed_at", todayStart);

      // Views this week
      const { count: viewsWeek } = await supabase
        .from("post_views")
        .select("*", { count: "exact", head: true })
        .gte("viewed_at", weekStart);

      // Views this month
      const { count: viewsMonth } = await supabase
        .from("post_views")
        .select("*", { count: "exact", head: true })
        .gte("viewed_at", monthStart);

      setStats({
        total_views: totalViews || 0,
        views_today: viewsToday || 0,
        views_this_week: viewsWeek || 0,
        views_this_month: viewsMonth || 0,
      });

      // Fetch daily views for the selected period
      const periodStart = new Date(now.getTime() - periodDays * 24 * 60 * 60 * 1000).toISOString();
      const { data: viewsData } = await supabase
        .from("post_views")
        .select("viewed_at")
        .gte("viewed_at", periodStart)
        .order("viewed_at", { ascending: true });

      // Group by date
      const viewsByDate: Record<string, number> = {};
      for (let i = periodDays - 1; i >= 0; i--) {
        const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
        const dateStr = date.toISOString().split("T")[0];
        viewsByDate[dateStr] = 0;
      }

      viewsData?.forEach((view) => {
        const dateStr = new Date(view.viewed_at).toISOString().split("T")[0];
        if (viewsByDate[dateStr] !== undefined) {
          viewsByDate[dateStr]++;
        }
      });

      const dailyData = Object.entries(viewsByDate).map(([date, views]) => ({
        date: new Date(date).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }),
        views,
      }));

      setDailyViews(dailyData);

      // Fetch top posts
      const { data: postsData } = await supabase
        .from("posts")
        .select("id, title")
        .eq("published", true);

      if (postsData) {
        const postViewCounts = await Promise.all(
          postsData.map(async (post) => {
            const { count } = await supabase
              .from("post_views")
              .select("*", { count: "exact", head: true })
              .eq("post_id", post.id);
            return {
              post_id: post.id,
              title: post.title,
              views: count || 0,
            };
          })
        );

        const sortedPosts = postViewCounts
          .sort((a, b) => b.views - a.views)
          .slice(0, 5);

        setTopPosts(sortedPosts);
      }

      // Fetch total posts count
      const { count: postsCount } = await supabase
        .from("posts")
        .select("*", { count: "exact", head: true })
        .eq("published", true);

      setTotalPosts(postsCount || 0);

      // Fetch subscribers count
      const { count: subscribersCount } = await supabase
        .from("newsletter_subscribers")
        .select("*", { count: "exact", head: true })
        .eq("is_active", true);

      setTotalSubscribers(subscribersCount || 0);

    } catch (error) {
      console.error("Error fetching analytics:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    fetchAnalytics(true);
  };

  const getPeriodLabel = () => {
    switch (period) {
      case "7": return "7 dias";
      case "14": return "14 dias";
      case "30": return "30 dias";
      case "90": return "90 dias";
      default: return "14 dias";
    }
  };

  const chartConfig = {
    views: {
      label: "Visualizações",
      color: "hsl(var(--primary))",
    },
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <Skeleton className="h-4 w-24" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16" />
              </CardContent>
            </Card>
          ))}
        </div>
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Período:</span>
          <Select value={period} onValueChange={(value: PeriodFilter) => setPeriod(value)}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Selecionar período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Últimos 7 dias</SelectItem>
              <SelectItem value="14">Últimos 14 dias</SelectItem>
              <SelectItem value="30">Últimos 30 dias</SelectItem>
              <SelectItem value="90">Últimos 90 dias</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleRefresh}
          disabled={refreshing}
          className="gap-2"
        >
          <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
          Atualizar
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total de Views
            </CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total_views.toLocaleString("pt-BR")}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Hoje
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.views_today.toLocaleString("pt-BR")}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Posts Publicados
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalPosts}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Inscritos
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalSubscribers}</div>
          </CardContent>
        </Card>
      </div>

      {/* Views Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Visualizações nos últimos {getPeriodLabel()}</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-64 w-full">
            <AreaChart data={dailyViews}>
              <defs>
                <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                tickLine={false} 
                axisLine={false} 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                tickLine={false} 
                axisLine={false} 
                tick={{ fontSize: 12 }}
                allowDecimals={false}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="views"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                fill="url(#viewsGradient)"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Top Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Posts Mais Vistos</CardTitle>
        </CardHeader>
        <CardContent>
          {topPosts.length > 0 ? (
            <div className="space-y-4">
              {topPosts.map((post, index) => (
                <div key={post.post_id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-muted-foreground w-6">
                      #{index + 1}
                    </span>
                    <span className="text-sm font-medium truncate max-w-[250px] md:max-w-[400px]">
                      {post.title}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {post.views.toLocaleString("pt-BR")} views
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Nenhuma visualização registrada ainda.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Period Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Views esta semana
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.views_this_week.toLocaleString("pt-BR")}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Views este mês
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.views_this_month.toLocaleString("pt-BR")}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
