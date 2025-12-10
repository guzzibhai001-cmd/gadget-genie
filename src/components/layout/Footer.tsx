import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                Eletro<span className="text-primary">Rent</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Unlocking access to premium gadgets through peer-to-peer sharing. 
              Rent the tech you need, when you need it.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/browse" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Browse Gadgets
              </Link>
              <Link to="/list-item" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                List Your Gadget
              </Link>
              <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                How It Works
              </Link>
              <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Pricing
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                FAQ
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Contact Us
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@eletrorent.in" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <Mail className="w-4 h-4" />
                hello@eletrorent.in
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <span className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                Bangalore, India
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 EletroRent. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with ⚡ in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
