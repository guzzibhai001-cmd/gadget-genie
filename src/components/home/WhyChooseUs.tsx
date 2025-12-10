import { Shield, Wallet, Users, HeadphonesIcon, BadgeCheck, RefreshCcw } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Deposits",
    description: "Your deposit is held safely and returned automatically after successful return.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Users",
    description: "All owners and renters go through KYC verification for trusted transactions.",
  },
  {
    icon: Wallet,
    title: "Easy Payments",
    description: "Pay with UPI, cards, or net banking. Quick refunds and transparent pricing.",
  },
  {
    icon: Users,
    title: "Peer-to-Peer",
    description: "Rent directly from owners in your city. No middlemen, better prices.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our support team is always available to help with any issues or disputes.",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description: "Simple return process with condition verification and instant deposit release.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-h1 font-bold mb-4">
            Why Choose <span className="text-gradient-secondary">EletroRent</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            We've built the most trusted platform for peer-to-peer gadget rentals in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="p-6 rounded-2xl bg-accent/30 border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-h4 font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
