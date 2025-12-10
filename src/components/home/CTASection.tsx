import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary opacity-10" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Start earning today
          </div>
          
          <h2 className="text-h1 lg:text-display font-bold mb-6">
            Got Gadgets Lying Around?
            <br />
            <span className="text-gradient-secondary">Turn Them Into Cash</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of owners earning passive income by renting out their idle gadgets. 
            Set your own prices, manage availability, and get paid directly to your bank.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/list-item">
              <Button variant="secondary" size="xl" className="group">
                List Your First Gadget
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="xl">
                Learn How It Works
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-secondary">₹15K</div>
              <div className="text-sm text-muted-foreground mt-1">Avg. Monthly Earning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-secondary">10%</div>
              <div className="text-sm text-muted-foreground mt-1">Platform Fee Only</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-secondary">7 Days</div>
              <div className="text-sm text-muted-foreground mt-1">Fast Payouts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
