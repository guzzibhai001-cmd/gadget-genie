import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search } from "lucide-react";

const faqCategories = [
  {
    title: "Getting Started",
    items: [
      {
        question: "What is EletroRent?",
        answer: "EletroRent is India's first peer-to-peer gadget rental marketplace. We connect gadget owners with people who need to rent electronics like laptops, cameras, drones, VR headsets, and more. Whether you want to rent a gadget for a project or earn money from your idle electronics, EletroRent makes it simple and secure."
      },
      {
        question: "How do I create an account?",
        answer: "Creating an account is easy! Click 'Sign Up' and enter your email, phone number, and create a password. You can also sign up using Google or Apple. To start renting or listing, you'll need to complete KYC verification by uploading your Aadhaar or college ID."
      },
      {
        question: "Is EletroRent available in my city?",
        answer: "We're currently active in 50+ cities across India including Bangalore, Mumbai, Delhi, Pune, Hyderabad, Chennai, and more. Check our browse page to see listings available in your area. If there aren't many listings, be the first to list in your city!"
      }
    ]
  },
  {
    title: "Renting Gadgets",
    items: [
      {
        question: "How do I rent a gadget?",
        answer: "1. Browse or search for the gadget you need. 2. Select your rental dates. 3. Review the total cost including deposit. 4. Complete payment using UPI, card, or net banking. 5. Coordinate pickup with the owner. 6. Return the gadget on time and get your deposit back!"
      },
      {
        question: "What payment methods are accepted?",
        answer: "We accept UPI, credit/debit cards, net banking, and popular wallets. All payments are processed securely through Razorpay. Your security deposit is held safely and released automatically after successful return."
      },
      {
        question: "What if the gadget is damaged during my rental?",
        answer: "Normal wear and tear is acceptable. For significant damage, the owner can file a claim with photo evidence. Our team reviews the claim within 48 hours and may deduct repair costs from your security deposit. We recommend handling all gadgets with care."
      },
      {
        question: "Can I extend my rental period?",
        answer: "Yes! If the gadget is available, you can extend your rental through the app. Just make sure to request the extension before your current rental period ends. Additional charges will apply based on the daily rate."
      }
    ]
  },
  {
    title: "Listing Your Gadget",
    items: [
      {
        question: "How do I list my gadget?",
        answer: "1. Complete your profile and KYC verification. 2. Click 'List Your Gadget' and add photos (minimum 3). 3. Enter details like title, description, specs, and condition. 4. Set your daily rate and security deposit amount. 5. Add your pickup location. Your listing goes live after a quick review!"
      },
      {
        question: "How much should I charge for my gadget?",
        answer: "Pricing depends on your gadget's value, condition, and market demand. Generally, daily rates range from 1-3% of the gadget's value. Check similar listings for reference. We recommend starting competitive and adjusting based on demand."
      },
      {
        question: "How and when do I get paid?",
        answer: "Earnings are paid out weekly to your linked bank account. We deduct a 10% platform fee from each rental. You can track all your earnings, pending payouts, and transaction history in your owner dashboard."
      },
      {
        question: "What if a renter doesn't return my gadget?",
        answer: "If a renter fails to return on time, contact them through the app first. If unresponsive after 24 hours, report it to our support team. We'll intervene and can capture the security deposit. For serious cases, we assist with further action."
      }
    ]
  },
  {
    title: "Trust & Safety",
    items: [
      {
        question: "How is my security deposit protected?",
        answer: "Security deposits are held in a secure escrow system, not by the owner. The deposit is only released to you after the owner confirms the gadget was returned in good condition. If there's a dispute, our team reviews the evidence before any funds are moved."
      },
      {
        question: "What is KYC verification?",
        answer: "KYC (Know Your Customer) verification confirms your identity using government-issued ID (Aadhaar) or college ID for students. This creates accountability and trust in the community. Verified users get a badge on their profile."
      },
      {
        question: "What if I have a dispute with the owner/renter?",
        answer: "Use the 'Report Issue' feature in your booking to raise a dispute. Provide photos and details of the issue. Our support team reviews all evidence and makes a fair decision within 48-72 hours. Our goal is to resolve disputes amicably."
      }
    ]
  },
  {
    title: "Account & Support",
    items: [
      {
        question: "How do I contact customer support?",
        answer: "You can reach us via: Email at hello@eletrorent.in, Phone at +91 98765 43210 (Mon-Sat, 9am-6pm), Live chat available 24/7 in the app, or use the Contact form on our website. We typically respond within a few hours."
      },
      {
        question: "How do I delete my account?",
        answer: "You can request account deletion from Settings > Account > Delete Account. Note that you cannot have any active rentals or pending payouts. Your data will be retained for 30 days before permanent deletion, as required by regulations."
      },
      {
        question: "Can I be both a renter and an owner?",
        answer: "Absolutely! Many of our users both rent gadgets and list their own. You can switch between renter and owner views anytime. Just make sure to complete KYC verification to access all features."
      }
    ]
  }
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(
      item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-h1 font-bold mb-4">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Find answers to common questions about renting and listing gadgets on EletroRent
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12"
              />
            </div>
          </div>

          {/* FAQ Content */}
          <div className="max-w-3xl mx-auto space-y-8">
            {filteredCategories.map((category) => (
              <div key={category.title}>
                <h2 className="text-h3 font-semibold mb-4 text-gradient-secondary">{category.title}</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {category.items.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${category.title}-${index}`}
                      className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
                    >
                      <AccordionTrigger className="hover:no-underline py-4">
                        <span className="text-left font-medium">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            {filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
              </div>
            )}
          </div>

          {/* Still have questions */}
          <div className="max-w-xl mx-auto text-center mt-16 p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-h4 font-semibold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <a href="/contact" className="text-primary hover:underline font-medium">
              Contact Support →
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
