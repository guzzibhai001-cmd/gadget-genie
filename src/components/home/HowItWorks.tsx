import { Search, CreditCard, Package, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Browse thousands of gadgets from verified owners. Filter by category, location, and availability.",
    color: "primary",
  },
  {
    icon: CreditCard,
    title: "Book & Pay",
    description: "Secure your rental with UPI or card. Your deposit is held safely until the return.",
    color: "secondary",
  },
  {
    icon: Package,
    title: "Pickup or Deliver",
    description: "Coordinate with the owner for convenient pickup or doorstep delivery.",
    color: "primary",
  },
  {
    icon: Star,
    title: "Use & Return",
    description: "Enjoy your gadget! Return it on time and get your deposit back instantly.",
    color: "secondary",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-h1 font-bold mb-4">
            How <span className="text-gradient-primary">EletroRent</span> Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Get started in minutes. Rent the tech you need without the commitment of buying.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="relative p-8 rounded-2xl glass hover:border-primary/30 transition-all duration-300 text-center">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-bold text-muted-foreground">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${
                  step.color === 'primary' 
                    ? 'gradient-primary glow-primary' 
                    : 'gradient-secondary glow-secondary'
                }`}>
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="text-h4 font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
