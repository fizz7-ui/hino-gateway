import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Shield, Plane, Hotel, Bus, Users, Heart, CheckCircle } from "lucide-react";

const HajjUmrah = () => {
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
              <span>Hajj & Umrah Services</span>
            </div>
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hajj & Umrah Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Best Agency in Bangladesh
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <p className="text-lg text-center max-w-4xl mx-auto mb-8">
            Performing Hajj and Umrah is the ultimate dream of every Muslim. It is not just a journey; it's a spiritual responsibility and one of the most sacred acts of worship. At Royal Rolls Manpower, we are honoured to guide and support you on this blessed journey to the Holy Cities of Makkah and Madinah.
          </p>
          <p className="text-lg text-center max-w-4xl mx-auto">
            With years of trusted service in arranging Hajj packages and Umrah packages from Bangladesh, we have helped thousands of pilgrims fulfil their dream with ease, comfort, and complete spiritual guidance.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us for Your Hajj and Umrah Journey?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Performing Hajj and Umrah requires more than just travel arrangements. It requires proper guidance, well-structured itineraries, comfortable accommodation, and support at every step.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg border text-center">
              <Heart className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Islamic Guidance</h3>
              <p className="text-muted-foreground">Proper guidance according to Islamic teachings</p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <CheckCircle className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Structured Itinerary</h3>
              <p className="text-muted-foreground">Well-planned schedules for smooth rituals</p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <Hotel className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Close to Haram</h3>
              <p className="text-muted-foreground">Comfortable accommodation near the holy sites</p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <Users className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Assistance at every step of your journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hajj Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Hajj Services – Complete Support for Pilgrims</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Hajj is the fifth pillar of Islam and a once-in-a-lifetime obligation. Our Hajj packages are designed to give pilgrims complete peace of mind.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <Shield className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Visa Processing for Hajj</h3>
              <p className="text-muted-foreground">Fast and hassle-free approval</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <Plane className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Flight Bookings</h3>
              <p className="text-muted-foreground">From Bangladesh and other countries</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <Hotel className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Accommodation</h3>
              <p className="text-muted-foreground">5-Star, 4-Star, and Budget options near Haram</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <Bus className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Transport Services</h3>
              <p className="text-muted-foreground">Air-conditioned buses for Mina, Arafat, Muzdalifah</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <MapPin className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Guided Rituals</h3>
              <p className="text-muted-foreground">Scholars and guides to help you perform Hajj correctly</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <Users className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">24/7 Assistance</h3>
              <p className="text-muted-foreground">Support teams available in Makkah and Madinah</p>
            </div>
          </div>
        </div>
      </section>

      {/* Umrah Services */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Umrah Services – Easy and Affordable Packages</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            For those who wish to perform Umrah, we provide customized Umrah packages available year-round.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Umrah Visa Services</h3>
              <p className="text-muted-foreground">For Saudi Arabia, UAE, Qatar, Kuwait, Jordan, Malaysia, and Russia</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Direct & Connecting Flights</h3>
              <p className="text-muted-foreground">To Jeddah and Madinah</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Hotels near Haram</h3>
              <p className="text-muted-foreground">For easier access to the holy sites</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Ziyarat Tours</h3>
              <p className="text-muted-foreground">Transport for tours in Makkah and Madinah</p>
            </div>
            <div className="bg-card p-6 rounded-lg border col-span-full">
              <h3 className="text-xl font-semibold mb-3">Family-Friendly & Group Packages</h3>
              <p className="text-muted-foreground">Designed for comfort and affordability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services for Hajjis and Umrah Pilgrims</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Pre-Departure Training</h3>
              <p className="text-muted-foreground">Online and in-person sessions on Hajj & Umrah rituals</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Zamzam Water Supply</h3>
              <p className="text-muted-foreground">Assistance for return with blessed Zamzam water</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Travel Insurance</h3>
              <p className="text-muted-foreground">For peace of mind during your journey</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Group Leaders & Guides</h3>
              <p className="text-muted-foreground">Fluent in multiple languages for your convenience</p>
            </div>
            <div className="bg-card p-6 rounded-lg border col-span-full">
              <h3 className="text-xl font-semibold mb-2">Special Packages for Families & Elderly</h3>
              <p className="text-muted-foreground">With extra care and assistance throughout the journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Thousands of Hajjis Trust Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold">Licensed & Trusted Travel Agency</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold">Affordable & Flexible Packages</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold">Multilingual Support</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="font-semibold">24/7 Customer Assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Book Your Hajj & Umrah Package Today</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Don't wait until the last moment. Hajj seats are limited, and Umrah visas are subject to availability. Secure your journey with us today and take the first step towards fulfilling your spiritual duty.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg">Apply Now</Button>
            <Button size="lg" variant="outline">Book a Consultation</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HajjUmrah;
