import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { 
  Package, 
  Calendar, 
  IndianRupee, 
  PlusCircle,
  Clock,
  CheckCircle2,
  XCircle,
  Loader2
} from "lucide-react";
import { format } from "date-fns";

interface Listing {
  id: string;
  title: string;
  category: string;
  daily_rate: number;
  images: string[];
  is_available: boolean;
  is_approved: boolean;
  created_at: string;
}

interface Booking {
  id: string;
  start_date: string;
  end_date: string;
  total_amount: number;
  status: string;
  payment_status: string;
  created_at: string;
  listings: {
    title: string;
    images: string[];
  };
}

const Dashboard = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [myListings, setMyListings] = useState<Listing[]>([]);
  const [myBookings, setMyBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    setLoading(true);
    
    // Fetch user's listings
    const { data: listings } = await supabase
      .from("listings")
      .select("*")
      .eq("owner_id", user?.id)
      .order("created_at", { ascending: false });

    // Fetch user's bookings
    const { data: bookings } = await supabase
      .from("bookings")
      .select(`
        *,
        listings (
          title,
          images
        )
      `)
      .eq("renter_id", user?.id)
      .order("created_at", { ascending: false });

    setMyListings(listings || []);
    setMyBookings((bookings as any) || []);
    setLoading(false);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="warning" className="gap-1"><Clock className="w-3 h-3" />Pending</Badge>;
      case "confirmed":
        return <Badge variant="success" className="gap-1"><CheckCircle2 className="w-3 h-3" />Confirmed</Badge>;
      case "completed":
        return <Badge variant="default" className="gap-1"><CheckCircle2 className="w-3 h-3" />Completed</Badge>;
      case "cancelled":
        return <Badge variant="destructive" className="gap-1"><XCircle className="w-3 h-3" />Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (authLoading || loading) {
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-h1 font-bold mb-2">
                Welcome, <span className="text-gradient-primary">{user?.user_metadata?.full_name?.split(" ")[0] || "User"}</span>
              </h1>
              <p className="text-muted-foreground">Manage your listings and bookings</p>
            </div>
            <Link to="/list-item">
              <Button variant="hero" className="gap-2">
                <PlusCircle className="w-5 h-5" />
                List New Gadget
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Card variant="glass" className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{myListings.length}</p>
                  <p className="text-sm text-muted-foreground">My Listings</p>
                </div>
              </div>
            </Card>
            <Card variant="glass" className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{myBookings.length}</p>
                  <p className="text-sm text-muted-foreground">My Bookings</p>
                </div>
              </div>
            </Card>
            <Card variant="glass" className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <IndianRupee className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    ₹{myBookings.reduce((acc, b) => acc + Number(b.total_amount), 0).toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Spent</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="bookings" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="bookings">My Bookings</TabsTrigger>
              <TabsTrigger value="listings">My Listings</TabsTrigger>
            </TabsList>

            <TabsContent value="bookings">
              {myBookings.length === 0 ? (
                <Card variant="elevated" className="p-12 text-center">
                  <Calendar className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-h4 font-semibold mb-2">No bookings yet</h3>
                  <p className="text-muted-foreground mb-4">Start renting gadgets to see your bookings here.</p>
                  <Link to="/browse">
                    <Button>Browse Gadgets</Button>
                  </Link>
                </Card>
              ) : (
                <div className="space-y-4">
                  {myBookings.map((booking) => (
                    <Card key={booking.id} variant="elevated" className="p-6">
                      <div className="flex flex-col md:flex-row gap-4">
                        <img
                          src={booking.listings?.images?.[0] || "/placeholder.svg"}
                          alt={booking.listings?.title}
                          className="w-full md:w-32 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{booking.listings?.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span>{format(new Date(booking.start_date), "MMM d")} - {format(new Date(booking.end_date), "MMM d, yyyy")}</span>
                            <span className="text-primary font-medium">₹{Number(booking.total_amount).toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          {getStatusBadge(booking.status)}
                          <span className="text-xs text-muted-foreground">
                            Booked {format(new Date(booking.created_at), "MMM d, yyyy")}
                          </span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="listings">
              {myListings.length === 0 ? (
                <Card variant="elevated" className="p-12 text-center">
                  <Package className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-h4 font-semibold mb-2">No listings yet</h3>
                  <p className="text-muted-foreground mb-4">Start earning by listing your gadgets.</p>
                  <Link to="/list-item">
                    <Button>List Your First Gadget</Button>
                  </Link>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {myListings.map((listing) => (
                    <Card key={listing.id} variant="elevated" className="overflow-hidden">
                      <img
                        src={listing.images?.[0] || "/placeholder.svg"}
                        alt={listing.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold mb-2 line-clamp-1">{listing.title}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-primary font-medium">₹{Number(listing.daily_rate)}/day</span>
                          <div className="flex gap-2">
                            {listing.is_approved ? (
                              <Badge variant="success">Approved</Badge>
                            ) : (
                              <Badge variant="warning">Pending</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
