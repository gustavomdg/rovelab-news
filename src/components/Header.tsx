import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings, Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        setTimeout(() => checkAdminRole(session.user.id), 0);
      } else {
        setIsAdmin(false);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdminRole(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminRole = async (userId: string) => {
    const { data } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .in("role", ["admin", "editor"]);

    setIsAdmin(data && data.length > 0);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xs tracking-tight leading-none">RL</span>
          </div>
          <span className="font-sans font-semibold text-base text-foreground leading-tight tracking-widest uppercase">
            Rove Lab <span className="font-light text-primary normal-case tracking-normal text-sm">News</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          <Button variant="nav" size="sm" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="nav" size="sm" asChild>
            <Link to="/issues">News</Link>
          </Button>
          <Button variant="nav" size="sm" asChild>
            <Link to="/about">About</Link>
          </Button>
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2 min-w-[150px] justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          {user && isAdmin && (
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin">
                <Settings className="h-4 w-4 mr-1" />
                Admin
              </Link>
            </Button>
          )}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-1 ml-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <button
            className="p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background p-4 space-y-2">
          <Link to="/" className="block py-2 text-foreground" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/issues" className="block py-2 text-foreground" onClick={() => setMobileMenuOpen(false)}>News</Link>
          <Link to="/about" className="block py-2 text-foreground" onClick={() => setMobileMenuOpen(false)}>About</Link>
          {user && isAdmin && (
            <div className="pt-2 border-t border-border">
              <Link to="/admin" className="block py-2 text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>
                Admin Panel
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
