import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, IndianRupee } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            India's First P2P Gadget Rental Platform
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-display font-extrabold leading-tight animate-slide-up">
            Rent Premium Gadgets.
            <br />
            <span className="text-gradient-primary">Save Big.</span>
            <span className="text-gradient-secondary"> Earn More.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Access laptops, cameras, drones, VR headsets and more from verified owners near you. 
            List your idle gadgets and earn passive income.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/browse">
              <Button variant="hero" size="xl" className="group">
                Browse Gadgets
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/list-item">
              <Button variant="heroOutline" size="xl">
                List Your Gadget
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">Secure Deposits</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">24h Support</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <IndianRupee className="w-5 h-5 text-primary" />
              <span className="text-sm">UPI & Cards Accepted</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto px-4">
          <div className="text-center px-6 py-5 rounded-xl bg-muted/40 border border-muted-foreground/20">
            <div className="text-2xl sm:text-3xl font-bold text-gradient-primary">5,000+</div>
            <div className="text-sm text-muted-foreground mt-1">Active Listings</div>
          </div>
          <div className="text-center px-6 py-5 rounded-xl bg-muted/40 border border-muted-foreground/20">
            <div className="text-2xl sm:text-3xl font-bold text-gradient-primary">15,000+</div>
            <div className="text-sm text-muted-foreground mt-1">Happy Renters</div>
          </div>
          <div className="text-center px-6 py-5 rounded-xl bg-muted/40 border border-muted-foreground/20">
            <div className="text-2xl sm:text-3xl font-bold text-gradient-primary">₹2Cr+</div>
            <div className="text-sm text-muted-foreground mt-1">Owner Earnings</div>
          </div>
          <div className="text-center px-6 py-5 rounded-xl bg-muted/40 border border-muted-foreground/20">
            <div className="text-2xl sm:text-3xl font-bold text-gradient-primary">50+</div>
            <div className="text-sm text-muted-foreground mt-1">Cities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
