import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Shield } from "lucide-react";
import type { Listing } from "@/data/listings";

interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Link to={`/listing/${listing.id}`}>
      <Card variant="interactive" className="overflow-hidden group h-full">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Availability Badge */}
          <Badge 
            variant={listing.available ? "success" : "warning"} 
            className="absolute top-3 left-3"
          >
            {listing.available ? "Available" : "Booked"}
          </Badge>
          
          {/* Price Badge */}
          <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur-sm border border-border/50">
            <span className="text-lg font-bold text-primary">₹{listing.pricePerDay}</span>
            <span className="text-sm text-muted-foreground">/day</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Title & Rating */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold line-clamp-1 group-hover:text-primary transition-colors">
              {listing.title}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">{listing.rating}</span>
              <span className="text-xs text-muted-foreground">({listing.reviewCount})</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-sm">{listing.location.area}, {listing.location.city}</span>
          </div>

          {/* Owner */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center gap-2">
              <img
                src={listing.owner.avatar}
                alt={listing.owner.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-sm text-muted-foreground">{listing.owner.name}</span>
              {listing.owner.verified && (
                <Shield className="w-3.5 h-3.5 text-primary" />
              )}
            </div>
            <Badge variant="location" className="text-xs">
              {listing.category}
            </Badge>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ListingCard;
