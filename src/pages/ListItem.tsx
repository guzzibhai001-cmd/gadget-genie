import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Plus, 
  X, 
  Camera, 
  IndianRupee,
  MapPin,
  Info,
  CheckCircle2,
  Loader2
} from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

const categories = [
  { value: "laptops", label: "Laptops" },
  { value: "cameras", label: "Cameras" },
  { value: "drones", label: "Drones" },
  { value: "gaming", label: "Gaming" },
  { value: "audio", label: "Audio" },
  { value: "projectors", label: "Projectors" },
  { value: "phones", label: "Phones" },
  { value: "wearables", label: "Wearables" },
];

const ListItem = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [weeklyRate, setWeeklyRate] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [specs, setSpecs] = useState([{ key: "", value: "" }]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      toast.error("Please login to list a gadget");
      navigate("/login");
    }
  }, [user, authLoading, navigate]);

  const addSpec = () => {
    setSpecs([...specs, { key: "", value: "" }]);
  };

  const removeSpec = (index: number) => {
    setSpecs(specs.filter((_, i) => i !== index));
  };

  const updateSpec = (index: number, field: "key" | "value", value: string) => {
    const newSpecs = [...specs];
    newSpecs[index][field] = value;
    setSpecs(newSpecs);
  };

  const handleImageUpload = () => {
    // For demo, using placeholder images
    const placeholderImages = [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",
    ];
    const randomImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
    if (images.length < 5) {
      setImages([...images, randomImage]);
      toast.success("Image uploaded successfully");
    } else {
      toast.error("Maximum 5 images allowed");
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error("Please login to list a gadget");
      navigate("/login");
      return;
    }

    if (images.length < 1) {
      toast.error("Please upload at least 1 image");
      return;
    }

    if (!category) {
      toast.error("Please select a category");
      return;
    }

    setIsLoading(true);
    
    // Convert specs to object
    const specsObject = specs.reduce((acc, spec) => {
      if (spec.key && spec.value) {
        acc[spec.key] = spec.value;
      }
      return acc;
    }, {} as Record<string, string>);

    const { error } = await supabase.from("listings").insert({
      owner_id: user.id,
      title,
      description,
      category,
      brand,
      model,
      daily_rate: parseFloat(pricePerDay),
      weekly_rate: weeklyRate ? parseFloat(weeklyRate) : null,
      deposit_amount: parseFloat(depositAmount),
      location: area,
      city,
      images,
      specifications: specsObject,
    });

    if (error) {
      toast.error("Failed to create listing: " + error.message);
      setIsLoading(false);
      return;
    }
    
    toast.success("Listing created successfully!", {
      description: "Your gadget is now pending approval",
    });
    navigate("/dashboard");
  };

  if (authLoading) {
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
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-h1 font-bold mb-4">
                List Your <span className="text-gradient-secondary">Gadget</span>
              </h1>
              <p className="text-muted-foreground">
                Turn your idle gadgets into a source of passive income
              </p>
            </div>

            {/* Benefits */}
            <Card variant="glass" className="p-6 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">Earn up to ₹15K/month</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">Only 10% platform fee</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">Weekly payouts</span>
                </div>
              </div>
            </Card>

            {/* Form */}
            <Card variant="elevated" className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Images */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-base">Photos (min. 1)</Label>
                    <span className="text-sm text-muted-foreground">{images.length}/5</span>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative aspect-square rounded-xl overflow-hidden group">
                        <img src={image} alt={`Upload ${index + 1}`} className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    
                    {images.length < 5 && (
                      <button
                        type="button"
                        onClick={handleImageUpload}
                        className="aspect-square rounded-xl border-2 border-dashed border-border hover:border-primary/50 flex flex-col items-center justify-center gap-2 transition-colors"
                      >
                        <Camera className="w-6 h-6 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Add Photo</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Basic Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Basic Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g., MacBook Pro 14&quot; M3 Pro"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={category} onValueChange={setCategory} required>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.value} value={cat.value}>
                              {cat.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brand">Brand</Label>
                      <Input
                        id="brand"
                        placeholder="e.g., Apple"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="model">Model</Label>
                    <Input
                      id="model"
                      placeholder="e.g., MacBook Pro 14-inch (2023)"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your gadget, its condition, what's included..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                      rows={4}
                    />
                  </div>
                </div>

                {/* Specifications */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Specifications</h3>
                    <Button type="button" variant="outline" size="sm" onClick={addSpec}>
                      <Plus className="w-4 h-4 mr-1" /> Add Spec
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    {specs.map((spec, index) => (
                      <div key={index} className="flex gap-3">
                        <Input
                          placeholder="e.g., Processor"
                          value={spec.key}
                          onChange={(e) => updateSpec(index, "key", e.target.value)}
                          className="flex-1"
                        />
                        <Input
                          placeholder="e.g., Apple M3 Pro"
                          value={spec.value}
                          onChange={(e) => updateSpec(index, "value", e.target.value)}
                          className="flex-1"
                        />
                        {specs.length > 1 && (
                          <Button 
                            type="button" 
                            variant="ghost" 
                            size="icon"
                            onClick={() => removeSpec(index)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Pricing</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Daily Rate (₹)</Label>
                      <div className="relative">
                        <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="price"
                          type="number"
                          placeholder="1500"
                          value={pricePerDay}
                          onChange={(e) => setPricePerDay(e.target.value)}
                          required
                          min="100"
                          className="h-12 pl-10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="weekly">Weekly Rate (₹) - Optional</Label>
                      <div className="relative">
                        <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="weekly"
                          type="number"
                          placeholder="8000"
                          value={weeklyRate}
                          onChange={(e) => setWeeklyRate(e.target.value)}
                          min="100"
                          className="h-12 pl-10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="deposit">Security Deposit (₹)</Label>
                      <div className="relative">
                        <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="deposit"
                          type="number"
                          placeholder="25000"
                          value={depositAmount}
                          onChange={(e) => setDepositAmount(e.target.value)}
                          required
                          min="1000"
                          className="h-12 pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/10">
                    <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p className="text-xs text-muted-foreground">
                      Recommended deposit: 20% of gadget value. You'll receive 90% of the rental amount after the 10% platform fee.
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Pickup Location</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="city"
                          placeholder="Bangalore"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          required
                          className="h-12 pl-10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="area">Area</Label>
                      <Input
                        id="area"
                        placeholder="Koramangala"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="xl" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Creating Listing...
                      </>
                    ) : (
                      "Create Listing"
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-3">
                    By listing, you agree to our Terms of Service and Listing Guidelines
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ListItem;
