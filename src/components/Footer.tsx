import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useNewsletter } from "@/hooks/useNewsletter";

const Footer = () => {
  const { email, setEmail, isLoading, handleSubscribe } = useNewsletter("footer");

  return (
    <footer className="gradient-primary py-16 md:py-20">
      <div className="container">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-normal text-primary-foreground mb-3">
            Join thousands of furniture buyers and retailers<br />
            who read RoveLab News every Monday.
          </h2>

          <form
            onSubmit={handleSubscribe}
            className="max-w-md mx-auto mt-8"
          >
            <div className="flex gap-2 p-1.5 bg-background/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20">
              <Input
                type="email"
                placeholder="Your best email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-0 bg-transparent text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
              <Button
                type="submit"
                className="bg-background text-primary hover:bg-background/90 font-semibold shrink-0"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
              </Button>
            </div>
          </form>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-primary-foreground/20">
          <div>
            <h3 className="font-display font-normal text-primary-foreground mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li><Link to="/issues" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Issues</Link></li>
              <li><Link to="/trends" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Trends</Link></li>
              <li><Link to="/buying-guide" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Buying Guide</Link></li>
              <li><Link to="/top-picks" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Top Picks</Link></li>
              <li><a href="mailto:po.team@rovelab.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Advertise</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-normal text-primary-foreground mb-4">Markets</h3>
            <ul className="space-y-2">
              <li><span className="text-primary-foreground/70 text-sm">🇨🇦 Canada</span></li>
              <li><span className="text-primary-foreground/70 text-sm">🇺🇸 United States</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-normal text-primary-foreground mb-4">Follow</h3>
            <ul className="space-y-2">
              <li><a href="https://instagram.com/rovelab" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Instagram</a></li>
              <li><a href="https://linkedin.com/company/rovelab" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">LinkedIn</a></li>
              <li><a href="https://rovelab.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">rovelab.com</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt="RoveLab News"
                className="h-8 w-8 rounded-lg object-cover"
              />
              <span className="font-display text-primary-foreground">
                RoveLab News
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Weekly furniture intelligence for Canada & USA — by Rove Lab.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 Rove Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
