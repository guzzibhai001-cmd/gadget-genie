import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ListingCard from "@/components/listing/ListingCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { sampleListings, categories } from "@/data/listings";
import { Search, SlidersHorizontal, X, MapPin } from "lucide-react";

const Browse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  
  const selectedCategory = searchParams.get("category") || "";
  const selectedCity = searchParams.get("city") || "";

  const cities = ["Bangalore", "Mumbai", "Delhi", "Pune", "Hyderabad", "Chennai", "Goa"];

  const filteredListings = useMemo(() => {
    return sampleListings.filter((listing) => {
      const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || listing.category === selectedCategory;
      const matchesCity = !selectedCity || listing.location.city === selectedCity;
      return matchesSearch && matchesCategory && matchesCity;
    });
  }, [searchQuery, selectedCategory, selectedCity]);

  const handleCategoryClick = (slug: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (slug === selectedCategory) {
      newParams.delete("category");
    } else {
      newParams.set("category", slug);
    }
    setSearchParams(newParams);
  };

  const handleCityClick = (city: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (city === selectedCity) {
      newParams.delete("city");
    } else {
      newParams.set("city", city);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSearchParams({});
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedCity;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-h1 font-bold mb-2">
              Browse <span className="text-gradient-primary">Gadgets</span>
            </h1>
            <p className="text-muted-foreground">
              Find the perfect gadget for your needs from {sampleListings.length}+ listings
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search for laptops, cameras, drones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-card border-border"
              />
            </div>
            
            {/* Filter Toggle (Mobile) */}
            <Button 
              variant="outline" 
              className="lg:hidden gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <Badge variant="default" className="ml-1 px-1.5 py-0.5 text-xs">
                  {[searchQuery, selectedCategory, selectedCity].filter(Boolean).length}
                </Badge>
              )}
            </Button>
          </div>

          {/* Filters */}
          <div className={`space-y-6 mb-8 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            {/* Categories */}
            <div>
              <h3 className="text-sm font-medium mb-3 text-muted-foreground">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.slug}
                    variant={selectedCategory === category.slug ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryClick(category.slug)}
                    className="rounded-full"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Cities */}
            <div>
              <h3 className="text-sm font-medium mb-3 text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </h3>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <Button
                    key={city}
                    variant={selectedCity === city ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleCityClick(city)}
                    className="rounded-full"
                  >
                    {city}
                  </Button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground gap-2"
              >
                <X className="w-4 h-4" />
                Clear all filters
              </Button>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-medium">{filteredListings.length}</span> results
              {selectedCategory && (
                <> in <span className="text-primary">{categories.find(c => c.slug === selectedCategory)?.name}</span></>
              )}
              {selectedCity && (
                <> from <span className="text-primary">{selectedCity}</span></>
              )}
            </p>
          </div>

          {/* Listings Grid */}
          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredListings.map((listing, index) => (
                <div 
                  key={listing.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ListingCard listing={listing} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-h4 font-semibold mb-2">No gadgets found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Browse;
