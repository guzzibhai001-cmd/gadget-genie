export interface Listing {
  id: string;
  title: string;
  description: string;
  category: string;
  pricePerDay: number;
  depositAmount: number;
  images: string[];
  specs: Record<string, string>;
  location: {
    city: string;
    area: string;
  };
  owner: {
    id: string;
    name: string;
    avatar: string;
    verified: boolean;
    rating: number;
    reviewCount: number;
  };
  rating: number;
  reviewCount: number;
  available: boolean;
}

export const sampleListings: Listing[] = [
  {
    id: "1",
    title: "MacBook Pro 14\" M3 Pro",
    description: "Latest MacBook Pro with M3 Pro chip, 18GB RAM, 512GB SSD. Perfect for video editing, coding, or creative work. Comes with charger and carrying sleeve.",
    category: "laptops",
    pricePerDay: 1500,
    depositAmount: 25000,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800",
    ],
    specs: {
      "Processor": "Apple M3 Pro",
      "RAM": "18GB",
      "Storage": "512GB SSD",
      "Display": "14\" Liquid Retina XDR",
      "Battery": "Up to 17 hours",
    },
    location: { city: "Bangalore", area: "Koramangala" },
    owner: {
      id: "u1",
      name: "Rahul Sharma",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      verified: true,
      rating: 4.9,
      reviewCount: 45,
    },
    rating: 4.8,
    reviewCount: 23,
    available: true,
  },
  {
    id: "2",
    title: "Sony A7 IV Full Frame Camera",
    description: "Professional mirrorless camera with 33MP sensor. Includes 28-70mm kit lens, extra battery, and camera bag. Great for photography and videography.",
    category: "cameras",
    pricePerDay: 2500,
    depositAmount: 40000,
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800",
    ],
    specs: {
      "Sensor": "33MP Full Frame",
      "Video": "4K 60fps",
      "ISO Range": "100-51200",
      "Autofocus": "759 phase-detect points",
      "Stabilization": "5-axis IBIS",
    },
    location: { city: "Mumbai", area: "Andheri" },
    owner: {
      id: "u2",
      name: "Priya Patel",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      verified: true,
      rating: 4.95,
      reviewCount: 78,
    },
    rating: 4.9,
    reviewCount: 56,
    available: true,
  },
  {
    id: "3",
    title: "DJI Mavic 3 Pro Drone",
    description: "Premium drone with Hasselblad camera, 4/3 CMOS sensor. Includes extra batteries, ND filters, and carrying case. Perfect for aerial photography.",
    category: "drones",
    pricePerDay: 3500,
    depositAmount: 80000,
    images: [
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800",
      "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800",
    ],
    specs: {
      "Camera": "Hasselblad 4/3 CMOS",
      "Video": "5.1K 50fps",
      "Flight Time": "46 minutes",
      "Range": "15km",
      "Obstacle Sensing": "Omnidirectional",
    },
    location: { city: "Delhi", area: "Saket" },
    owner: {
      id: "u3",
      name: "Arjun Mehta",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      verified: true,
      rating: 4.85,
      reviewCount: 32,
    },
    rating: 4.7,
    reviewCount: 18,
    available: true,
  },
  {
    id: "4",
    title: "Meta Quest 3 VR Headset",
    description: "Latest VR headset with mixed reality capabilities. 128GB storage, includes elite strap and carrying case. Great for gaming and immersive experiences.",
    category: "gaming",
    pricePerDay: 800,
    depositAmount: 15000,
    images: [
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800",
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800",
    ],
    specs: {
      "Display": "2064x2208 per eye",
      "Refresh Rate": "120Hz",
      "Storage": "128GB",
      "Tracking": "Inside-out 6DoF",
      "Mixed Reality": "Full color passthrough",
    },
    location: { city: "Bangalore", area: "HSR Layout" },
    owner: {
      id: "u4",
      name: "Sneha Reddy",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      verified: true,
      rating: 4.9,
      reviewCount: 25,
    },
    rating: 4.85,
    reviewCount: 42,
    available: true,
  },
  {
    id: "5",
    title: "Sony WH-1000XM5 Headphones",
    description: "Premium noise-cancelling headphones with 30-hour battery life. Includes carrying case and audio cable. Perfect for travel or work.",
    category: "audio",
    pricePerDay: 300,
    depositAmount: 8000,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800",
    ],
    specs: {
      "Driver": "30mm",
      "Battery": "30 hours",
      "ANC": "Industry-leading",
      "Connectivity": "Bluetooth 5.2",
      "Codec": "LDAC, AAC, SBC",
    },
    location: { city: "Pune", area: "Kothrud" },
    owner: {
      id: "u5",
      name: "Vikram Singh",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      verified: false,
      rating: 4.7,
      reviewCount: 15,
    },
    rating: 4.6,
    reviewCount: 31,
    available: true,
  },
  {
    id: "6",
    title: "BenQ TK850i 4K Projector",
    description: "4K HDR home cinema projector with Android TV. 3000 lumens, great for movies and presentations. Includes ceiling mount and HDMI cable.",
    category: "projectors",
    pricePerDay: 1800,
    depositAmount: 35000,
    images: [
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800",
      "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=800",
    ],
    specs: {
      "Resolution": "4K UHD",
      "Brightness": "3000 lumens",
      "HDR": "HDR10, HLG",
      "Contrast": "30,000:1",
      "Smart TV": "Android TV built-in",
    },
    location: { city: "Hyderabad", area: "Madhapur" },
    owner: {
      id: "u6",
      name: "Ananya Krishnan",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
      verified: true,
      rating: 4.8,
      reviewCount: 28,
    },
    rating: 4.75,
    reviewCount: 19,
    available: false,
  },
  {
    id: "7",
    title: "ASUS ROG Zephyrus G14",
    description: "Powerful gaming laptop with RTX 4060. AMD Ryzen 9, 16GB RAM, 1TB SSD. Compact 14\" form factor, perfect for gaming on the go.",
    category: "laptops",
    pricePerDay: 1200,
    depositAmount: 30000,
    images: [
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800",
    ],
    specs: {
      "Processor": "AMD Ryzen 9 7940HS",
      "GPU": "RTX 4060",
      "RAM": "16GB DDR5",
      "Storage": "1TB SSD",
      "Display": "14\" QHD 165Hz",
    },
    location: { city: "Chennai", area: "T. Nagar" },
    owner: {
      id: "u7",
      name: "Karthik Rajan",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
      verified: true,
      rating: 4.75,
      reviewCount: 38,
    },
    rating: 4.65,
    reviewCount: 27,
    available: true,
  },
  {
    id: "8",
    title: "GoPro Hero 12 Black",
    description: "Action camera with 5.3K video and HyperSmooth stabilization. Includes mounts, extra battery, and waterproof case. Great for adventure content.",
    category: "cameras",
    pricePerDay: 600,
    depositAmount: 12000,
    images: [
      "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=800",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800",
    ],
    specs: {
      "Video": "5.3K 60fps",
      "Photo": "27MP",
      "Stabilization": "HyperSmooth 6.0",
      "Waterproof": "10m without housing",
      "Battery": "1720mAh",
    },
    location: { city: "Goa", area: "Panaji" },
    owner: {
      id: "u8",
      name: "Rohan Desai",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100",
      verified: true,
      rating: 4.9,
      reviewCount: 52,
    },
    rating: 4.8,
    reviewCount: 44,
    available: true,
  },
];

export const categories = [
  { slug: "laptops", name: "Laptops", count: 1200 },
  { slug: "cameras", name: "Cameras", count: 850 },
  { slug: "gaming", name: "Gaming", count: 640 },
  { slug: "audio", name: "Audio", count: 520 },
  { slug: "projectors", name: "Projectors", count: 180 },
  { slug: "phones", name: "Phones", count: 300 },
  { slug: "drones", name: "Drones", count: 95 },
  { slug: "wearables", name: "Wearables", count: 210 },
];
