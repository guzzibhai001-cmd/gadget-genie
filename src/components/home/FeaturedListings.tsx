import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ListingCard from "@/components/listing/ListingCard";
import { sampleListings } from "@/data/listings";
import { ArrowRight } from "lucide-react";

const FeaturedListings = () => {
  const featured = sampleListings.slice(0, 4);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="text-h1 font-bold mb-2">
              Featured <span className="text-gradient-primary">Gadgets</span>
            </h2>
            <p className="text-muted-foreground">
              Top-rated gadgets from verified owners
            </p>
          </div>
          <Link to="/browse">
            <Button variant="outline" className="gap-2 group">
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((listing, index) => (
            <div 
              key={listing.id} 
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ListingCard listing={listing} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
