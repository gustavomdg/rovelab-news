import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Issues from "./pages/Issues";
import BlogPost from "./pages/BlogPost";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import Trends from "./pages/Trends";
import BuyingGuide from "./pages/BuyingGuide";
import TopPicks from "./pages/TopPicks";
import About from "./pages/About";
import NewsArticle from "./pages/NewsArticle";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/post/:slug" element={<BlogPost />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/buying-guide" element={<BuyingGuide />} />
            <Route path="/top-picks" element={<TopPicks />} />
            <Route path="/about" element={<About />} />
            <Route path="/news/:slug" element={<NewsArticle />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
