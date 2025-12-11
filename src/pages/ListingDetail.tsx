import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { sampleListings } from "@/data/listings";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { 
  Star, 
  MapPin, 
  Shield, 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight,
  Heart,
  Share2,
  MessageCircle,
  CheckCircle2,
  Info,
  Loader2
} from "lucide-react";
import { format, addDays, differenceInDays } from "date-fns";
import { toast } from "sonner";

interface DBListing {
  id: string;
  title: string;
  description: string;
  category: string;
  brand: string;
  model: string;
  daily_rate: number;
  weekly_rate: number;
  deposit_amount: number;
  location: string;
  city: string;
  images: string[];
  specifications: Record<string, string>;
  is_available: boolean;
  owner_id: string;
}

const ListingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [dbListing, setDbListing] = useState<DBListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  // Try to find from sample listings first (for demo)
  const sampleListing = sampleListings.find((l) => l.id === id);

  useEffect(() => {
    const fetchListing = async () => {
      if (!id) return;
      
      const { data, error } = await supabase
        .from("listings")
        .select("*")
        .eq("id", id)
        .maybeSingle();

      if (!error && data) {
        setDbListing(data as DBListing);
      }
      setLoading(false);
    };

    fetchListing();
  }, [id]);

  // Use DB listing if found, otherwise use sample listing
  const listing = dbListing ? {
    id: dbListing.id,
    title: dbListing.title,
    description: dbListing.description || "",
    category: dbListing.category,
    pricePerDay: Number(dbListing.daily_rate),
    depositAmount: Number(dbListing.deposit_amount),
    images: dbListing.images?.length ? dbListing.images : ["/placeholder.svg"],
    location: { area: dbListing.location, city: dbListing.city },
    specs: dbListing.specifications || {},
    available: dbListing.is_available,
    rating: 4.8,
    reviewCount: 0,
    owner: {
      name: "Owner",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      verified: true,
      rating: 4.9,
      reviewCount: 0,
    },
  } : sampleListing;

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16 flex items-center justify-center min-h-screen">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-h1 font-bold mb-4">Listing not found</h1>
            <Link to="/browse">
              <Button>Back to Browse</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const rentalDays = startDate && endDate ? differenceInDays(endDate, startDate) + 1 : 0;
  const basePrice = rentalDays * listing.pricePerDay;
  const serviceFee = Math.round(basePrice * 0.1);
  const totalPrice = basePrice + serviceFee;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % listing.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + listing.images.length) % listing.images.length);
  };

  const handleBooking = async () => {
    if (!startDate || !endDate) {
      toast.error("Please select rental dates");
      return;
    }

    if (!user) {
      toast.error("Please login to book");
      navigate("/login");
      return;
    }

    if (!dbListing) {
      toast.info("Demo listing - booking simulation", {
        description: `Would book ${listing.title} for ${rentalDays} days`,
      });
      return;
    }

    setIsBooking(true);

    const { error } = await supabase.from("bookings").insert({
      listing_id: dbListing.id,
      renter_id: user.id,
      owner_id: dbListing.owner_id,
      start_date: format(startDate, "yyyy-MM-dd"),
      end_date: format(endDate, "yyyy-MM-dd"),
      total_amount: totalPrice,
      deposit_amount: listing.depositAmount,
      service_fee: serviceFee,
    });

    if (error) {
      toast.error("Failed to create booking: " + error.message);
      setIsBooking(false);
      return;
    }

    toast.success("Booking created successfully!", {
      description: `Booked ${listing.title} for ${rentalDays} days`,
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/browse" className="hover:text-foreground transition-colors">Browse</Link>
            <span>/</span>
            <Link to={`/browse?category=${listing.category}`} className="hover:text-foreground transition-colors capitalize">
              {listing.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{listing.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images & Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="relative rounded-2xl overflow-hidden bg-card">
                <div className="aspect-[16/10]">
                  <img
                    src={listing.images[currentImageIndex]}
                    alt={listing.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Navigation Arrows */}
                {listing.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {listing.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-primary' : 'bg-foreground/30'
                      }`}
                    />
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-destructive text-destructive' : ''}`} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Title & Info */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <Badge variant="location" className="mb-2 capitalize">{listing.category}</Badge>
                    <h1 className="text-h2 font-bold">{listing.title}</h1>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <Star className="w-5 h-5 fill-secondary text-secondary" />
                    <span className="text-lg font-semibold">{listing.rating}</span>
                    <span className="text-muted-foreground">({listing.reviewCount} reviews)</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{listing.location.area}, {listing.location.city}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-h4 font-semibold mb-3">About this gadget</h2>
                <p className="text-muted-foreground leading-relaxed">{listing.description}</p>
              </div>

              {/* Specifications */}
              {Object.keys(listing.specs).length > 0 && (
                <div>
                  <h2 className="text-h4 font-semibold mb-4">Specifications</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(listing.specs).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <div>
                          <span className="text-sm text-muted-foreground">{key}</span>
                          <span className="mx-2 text-muted-foreground">·</span>
                          <span className="text-sm font-medium">{value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Owner Card */}
              <Card variant="elevated" className="p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={listing.owner.avatar}
                    alt={listing.owner.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{listing.owner.name}</h3>
                      {listing.owner.verified && (
                        <Badge variant="verified" className="gap-1">
                          <Shield className="w-3 h-3" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                      <Star className="w-4 h-4 fill-secondary text-secondary" />
                      <span>{listing.owner.rating}</span>
                      <span>·</span>
                      <span>{listing.owner.reviewCount} reviews</span>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Contact Owner
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <Card variant="elevated" className="p-6 sticky top-24">
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-primary">₹{listing.pricePerDay}</span>
                    <span className="text-muted-foreground">/day</span>
                  </div>
                  <Badge variant={listing.available ? "success" : "warning"} className="mt-2">
                    {listing.available ? "Available Now" : "Currently Booked"}
                  </Badge>
                </div>

                {/* Date Selection */}
                <div className="space-y-3 mb-6">
                  <label className="text-sm font-medium">Select rental dates</label>
                  <div className="grid grid-cols-2 gap-3">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="justify-start text-left font-normal">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          {startDate ? format(startDate, "MMM d") : "Start"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={(date) => {
                            setStartDate(date);
                            if (date && (!endDate || date > endDate)) {
                              setEndDate(addDays(date, 1));
                            }
                          }}
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                    
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="justify-start text-left font-normal">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          {endDate ? format(endDate, "MMM d") : "End"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          disabled={(date) => date < (startDate || new Date())}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {/* Price Breakdown */}
                {rentalDays > 0 && (
                  <div className="space-y-3 mb-6 pt-4 border-t border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        ₹{listing.pricePerDay} × {rentalDays} days
                      </span>
                      <span>₹{basePrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Service fee (10%)</span>
                      <span>₹{serviceFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-semibold pt-3 border-t border-border">
                      <span>Total</span>
                      <span className="text-primary">₹{totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                )}

                {/* Security Deposit Notice */}
                <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/10 mb-6">
                  <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    A security deposit of <span className="text-primary font-medium">₹{listing.depositAmount.toLocaleString()}</span> will be held and released after return.
                  </p>
                </div>

                {/* Book Button */}
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={!listing.available || isBooking}
                  onClick={handleBooking}
                >
                  {isBooking ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Booking...
                    </>
                  ) : listing.available ? "Book Now" : "Not Available"}
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-3">
                  You won't be charged yet
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ListingDetail;
