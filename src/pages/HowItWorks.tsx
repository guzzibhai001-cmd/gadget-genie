import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Search, 
  CreditCard, 
  Package, 
  Star, 
  Shield, 
  Clock, 
  Users,
  BadgeCheck,
  Wallet,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Find Your Perfect Gadget",
    description: "Browse through our extensive collection of gadgets. Use filters to find exactly what you need - by category, location, price range, or availability dates. Each listing includes detailed specs, photos, and owner reviews.",
    features: ["Smart search with filters", "Real-time availability", "Verified owner profiles", "Detailed specifications"],
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Book & Pay Securely",
    description: "Once you've found your gadget, select your rental dates and proceed to checkout. Pay securely using UPI, credit/debit cards, or net banking. A refundable security deposit will be held until the return.",
    features: ["Multiple payment options", "Secure deposit holding", "Instant confirmation", "No hidden fees"],
  },
  {
    number: "03",
    icon: Package,
    title: "Pickup or Get Delivered",
    description: "Coordinate with the owner for convenient pickup from their location, or opt for doorstep delivery where available. You'll receive all the details and contact information after booking.",
    features: ["Flexible pickup options", "Doorstep delivery", "Easy communication", "Detailed instructions"],
  },
  {
    number: "04",
    icon: Star,
    title: "Use & Return",
    description: "Enjoy your rented gadget for the duration of your booking. When done, return it in the same condition. Once the owner confirms the return, your security deposit is released automatically.",
    features: ["Full insurance coverage", "Easy return process", "Automatic deposit release", "Leave a review"],
  },
];

const trustFeatures = [
  {
    icon: Shield,
    title: "Secure Deposits",
    description: "Your security deposit is held safely in escrow and automatically returned after successful returns.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Users",
    description: "All users complete KYC verification with Aadhaar or college ID for trusted transactions.",
  },
  {
    icon: Wallet,
    title: "Easy Payments",
    description: "Pay with UPI, cards, or net banking. Quick refunds and completely transparent pricing.",
  },
  {
    icon: Users,
    title: "Direct P2P",
    description: "Rent directly from owners near you. No middlemen means better prices for everyone.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our support team is always available to help resolve any issues or disputes quickly.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Most bookings are confirmed within hours. Same-day pickup available in many cities.",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-glow opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-h1 lg:text-display font-bold mb-6">
                How <span className="text-gradient-primary">EletroRent</span> Works
              </h1>
              <p className="text-lg text-muted-foreground">
                Renting gadgets has never been easier. Follow these simple steps to get started, 
                whether you're looking to rent or earn by listing your own gadgets.
              </p>
            </div>
          </div>
        </section>

        {/* For Renters */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-h2 font-bold mb-4">For Renters</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get access to premium gadgets without the commitment of buying
              </p>
            </div>

            <div className="space-y-16">
              {steps.map((step, index) => (
                <div 
                  key={step.title}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-6xl font-bold text-gradient-primary opacity-50">{step.number}</span>
                      <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center">
                        <step.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                    </div>
                    <h3 className="text-h3 font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    <ul className="grid grid-cols-2 gap-3">
                      {step.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-accent to-card border border-border flex items-center justify-center">
                      <step.icon className="w-24 h-24 text-primary/30" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Owners */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-h2 font-bold mb-4">For Gadget Owners</h2>
              <p className="text-muted-foreground mb-12">
                Turn your idle gadgets into a source of passive income
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="p-6 rounded-2xl bg-accent/50 border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-secondary-foreground">1</span>
                  </div>
                  <h3 className="text-h4 font-semibold mb-2">List Your Gadget</h3>
                  <p className="text-muted-foreground text-sm">
                    Create a listing with photos, specs, and set your own daily rate. It takes just 5 minutes.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-accent/50 border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-secondary-foreground">2</span>
                  </div>
                  <h3 className="text-h4 font-semibold mb-2">Accept Bookings</h3>
                  <p className="text-muted-foreground text-sm">
                    Review booking requests and accept ones that work for you. Manage your availability calendar.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-accent/50 border border-border">
                  <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-secondary-foreground">3</span>
                  </div>
                  <h3 className="text-h4 font-semibold mb-2">Get Paid</h3>
                  <p className="text-muted-foreground text-sm">
                    Receive payments directly to your bank account. Weekly payouts with only 10% platform fee.
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <Link to="/list-item">
                  <Button variant="secondary" size="xl" className="group">
                    Start Listing Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Safety */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-h2 font-bold mb-4">Trust & Safety</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We've built multiple layers of protection to ensure safe and secure transactions for everyone
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trustFeatures.map((feature) => (
                <div 
                  key={feature.title}
                  className="p-6 rounded-2xl bg-accent/30 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-h4 font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl gradient-card border border-border">
              <h2 className="text-h2 font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of users already renting and earning on EletroRent
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/browse">
                  <Button variant="hero" size="lg">Browse Gadgets</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" size="lg">Create Account</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
