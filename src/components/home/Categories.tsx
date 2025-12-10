import { Link } from "react-router-dom";
import { Laptop, Camera, Gamepad2, Headphones, Projector, Smartphone, Plane, Watch } from "lucide-react";

const categories = [
  { name: "Laptops", icon: Laptop, count: "1,200+", slug: "laptops" },
  { name: "Cameras", icon: Camera, count: "850+", slug: "cameras" },
  { name: "Gaming", icon: Gamepad2, count: "640+", slug: "gaming" },
  { name: "Audio", icon: Headphones, count: "520+", slug: "audio" },
  { name: "Projectors", icon: Projector, count: "180+", slug: "projectors" },
  { name: "Phones", icon: Smartphone, count: "300+", slug: "phones" },
  { name: "Drones", icon: Plane, count: "95+", slug: "drones" },
  { name: "Wearables", icon: Watch, count: "210+", slug: "wearables" },
];

const Categories = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-h1 font-bold mb-4">
            Browse by <span className="text-gradient-secondary">Category</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find the perfect gadget for your needs from our wide selection of categories.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              to={`/browse?category=${category.slug}`}
              className="group relative p-6 rounded-2xl bg-accent/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} listings</p>
                </div>
              </div>
              
              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
