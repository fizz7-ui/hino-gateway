import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Plane, MapPin, Shield, Users, Camera, Heart } from "lucide-react";

const TourPackages = () => {
  const destinations = [
    { name: "Thailand", icon: "🇹🇭", desc: "Exotic beaches, nightlife, and cultural heritage" },
    { name: "Hong Kong", icon: "🇭🇰", desc: "Modern city attractions with traditional charm" },
    { name: "China", icon: "🇨🇳", desc: "Great Wall, rich culture, and historical wonders" },
    { name: "Singapore", icon: "🇸🇬", desc: "A clean, safe, and family-friendly destination" },
    { name: "Sri Lanka", icon: "🇱🇰", desc: "Stunning beaches, nature, and historical sites" },
    { name: "Maldives", icon: "🇲🇻", desc: "Luxury resorts, clear waters, and honeymoon heaven" },
    { name: "Nepal", icon: "🇳🇵", desc: "The Himalayas, adventure, and spiritual journeys" },
    { name: "UAE", icon: "🇦🇪", desc: "Luxury, shopping, and desert adventures" },
    { name: "Spain", icon: "🇪🇸", desc: "Flamenco, football, and cultural festivals" },
    { name: "France", icon: "🇫🇷", desc: "Paris, romance, and world-class landmarks" },
    { name: "Romania", icon: "🇷🇴", desc: "Beautiful landscapes and medieval castles" },
    { name: "Italy", icon: "🇮🇹", desc: "Art, history, architecture, and delicious cuisine" },
    { name: "Canada", icon: "🇨🇦", desc: "Natural beauty, modern cities, and friendly people" },
    { name: "USA", icon: "🇺🇸", desc: "Endless attractions, shopping, and entertainment" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <span>Home</span>
              <span>/</span>
              <span>Tour Package</span>
            </div>
            <Camera className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tour Package</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tours & Travel Packages – Image Travel & Tours
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">Welcome to Image Travel & Tours</h2>
          <p className="text-lg text-center max-w-4xl mx-auto mb-8">
            Your trusted partner for unforgettable travel experiences.
          </p>
          <p className="text-lg text-center max-w-4xl mx-auto">
            Image Travel & Tours specializes in providing affordable, safe, and customized travel packages to the world's most popular destinations. Whether it's a family vacation, honeymoon, adventure tour, or business trip – we make your journey simple, smooth, and memorable.
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Travel Destinations</h2>
          <p className="text-center text-muted-foreground mb-12">Explore the beauty of the world with our exclusive packages:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border hover:border-primary transition-colors">
                <div className="text-4xl mb-3 text-center">{dest.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{dest.name}</h3>
                <p className="text-muted-foreground text-center text-sm">{dest.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Image Travel & Tours?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border text-center">
              <Users className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Professional Consultants</h3>
              <p className="text-muted-foreground">Years of experience in travel planning</p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Hassle-free Visa Support</h3>
              <p className="text-muted-foreground">Complete travel documentation assistance</p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <MapPin className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Affordable Packages</h3>
              <p className="text-muted-foreground">Flexible options for every budget</p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <Plane className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Complete Booking</h3>
              <p className="text-muted-foreground">Flight & hotel reservation included</p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <Heart className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">24/7 Customer Service</h3>
              <p className="text-muted-foreground">Support whenever you need it</p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <Camera className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Memorable Experiences</h3>
              <p className="text-muted-foreground">Creating lasting memories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">International & Domestic Tour Packages</h3>
              <p className="text-muted-foreground">Carefully curated travel experiences</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Visa Processing Assistance</h3>
              <p className="text-muted-foreground">Expert help with travel documentation</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Air Ticketing & Hotel Booking</h3>
              <p className="text-muted-foreground">Complete travel arrangements</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Customized Holiday Planning</h3>
              <p className="text-muted-foreground">Tailored to your preferences</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Honeymoon & Family Packages</h3>
              <p className="text-muted-foreground">Special moments, perfectly planned</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Corporate & Business Travel</h3>
              <p className="text-muted-foreground">Professional travel arrangements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
          <p className="text-xl text-muted-foreground mb-8">
            At Image Travel & Tours, we don't just plan trips – we create memories that last forever. From start to finish, our team ensures your journey is comfortable, enjoyable, and stress-free.
          </p>
          <p className="text-lg text-primary font-semibold mb-8">
            Travel with confidence, travel with Image Travel & Tours.
          </p>
          <Button size="lg">Book a Consultation</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TourPackages;
