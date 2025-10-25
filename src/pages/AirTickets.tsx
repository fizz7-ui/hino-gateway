// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Plane, Clock, Shield, Phone, DollarSign, Globe } from "lucide-react";

// const AirTickets = () => {
//   return (
//     <div className="min-h-screen">
//       <Navigation />
      
//       {/* Hero Section */}
//       <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-8">
//             <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
//               <span>Home</span>
//               <span>/</span>
//               <span>Air Tickets</span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Air Tickets</h1>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               Hassle-Free Flight Booking for Your Next Journey
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto mb-12">
//             Whether you are traveling for work, business, study, or family visits, finding the right flight at the right price can be stressful. At Royal Rolls, we make your travel easier by offering fast, affordable, and reliable air ticket booking services in Bangladesh for all major destinations, including Saudi Arabia, United Arab Emirates, Qatar, Kuwait, Jordan, Malaysia, and Russia.
//           </p>
//         </div>
//       </section>

//       {/* Why Choose Our Services */}
//       <section className="py-16 px-4 bg-secondary/20">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Air Ticket Services?</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-card p-6 rounded-lg border">
//               <DollarSign className="w-12 h-12 text-primary mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
//               <p className="text-muted-foreground">Competitive rates for both economy and business class.</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <Plane className="w-12 h-12 text-primary mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Trusted Airlines</h3>
//               <p className="text-muted-foreground">We work with top international and regional airlines.</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <Globe className="w-12 h-12 text-primary mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Flexible Options</h3>
//               <p className="text-muted-foreground">One-way, return, and multi-destination tickets.</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <Clock className="w-12 h-12 text-primary mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Instant Booking</h3>
//               <p className="text-muted-foreground">Quick and secure reservations with immediate confirmation.</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <Shield className="w-12 h-12 text-primary mb-4" />
//               <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
//               <p className="text-muted-foreground">Travel assistance before and after your flight.</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <Phone className="w-12 h-12 text-primary mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
//               <p className="text-muted-foreground">Professional support for all your travel needs.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Popular Routes */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Popular Routes</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="p-6 border rounded-lg hover:border-primary transition-colors">
//               <h3 className="text-xl font-semibold mb-2">Saudi Arabia</h3>
//               <p className="text-muted-foreground">Flights for work, Hajj, Umrah, and business trips.</p>
//             </div>
//             <div className="p-6 border rounded-lg hover:border-primary transition-colors">
//               <h3 className="text-xl font-semibold mb-2">United Arab Emirates (UAE)</h3>
//               <p className="text-muted-foreground">Affordable tickets for Dubai, Abu Dhabi & Sharjah.</p>
//             </div>
//             <div className="p-6 border rounded-lg hover:border-primary transition-colors">
//               <h3 className="text-xl font-semibold mb-2">Japan</h3>
//               <p className="text-muted-foreground">Hassle-free tickets for skilled workers, students, and training programs.</p>
//             </div>
//             <div className="p-6 border rounded-lg hover:border-primary transition-colors">
//               <h3 className="text-xl font-semibold mb-2">Qatar</h3>
//               <p className="text-muted-foreground">Easy booking for Doha-bound travelers.</p>
//             </div>
//             <div className="p-6 border rounded-lg hover:border-primary transition-colors">
//               <h3 className="text-xl font-semibold mb-2">Kuwait</h3>
//               <p className="text-muted-foreground">Flexible flight options for workers and business professionals.</p>
//             </div>
//             <div className="p-6 border rounded-lg hover:border-primary transition-colors">
//               <h3 className="text-xl font-semibold mb-2">Jordan</h3>
//               <p className="text-muted-foreground">Smooth travel arrangements for Amman and other cities.</p>
//             </div>
//             <div className="p-6 border rounded-lg hover:border-primary transition-colors">
//               <h3 className="text-xl font-semibold mb-2">Malaysia</h3>
//               <p className="text-muted-foreground">Ideal for students, professionals, and tourists.</p>
//             </div>
//             <div className="p-6 border rounded-lg hover:border-primary transition-colors">
//               <h3 className="text-xl font-semibold mb-2">Russia</h3>
//               <p className="text-muted-foreground">Reliable flights for work, study, and business opportunities.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Types of Services */}
//       <section className="py-16 px-4 bg-secondary/20">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="text-3xl font-bold text-center mb-12">Types of Air Ticket Services We Provide</h2>
//           <div className="space-y-6">
//             <div className="bg-card p-6 rounded-lg border">
//               <h3 className="text-2xl font-semibold mb-3">1. Work Visa Ticketing</h3>
//               <p className="text-muted-foreground">Specialized booking for workers and professionals traveling to Gulf countries and beyond.</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <h3 className="text-2xl font-semibold mb-3">2. Visit & Business Visa Ticketing</h3>
//               <p className="text-muted-foreground">Perfect for short-term travelers attending meetings, trade fairs, or visiting family.</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <h3 className="text-2xl font-semibold mb-3">3. Student Travel Ticketing</h3>
//               <p className="text-muted-foreground">Discounted fares and flexible bookings for students heading to study abroad.</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <h3 className="text-2xl font-semibold mb-3">4. Group Bookings</h3>
//               <p className="text-muted-foreground">Affordable bulk ticketing for teams, organizations, and manpower groups.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl font-bold mb-6">Book Your Ticket Today</h2>
//           <p className="text-xl text-muted-foreground mb-8">
//             Travel with ease. Get the best flight deals with Royal Rolls.
//           </p>
//           <Button size="lg" className="text-lg px-8 py-6">
//             Contact Us Now to Reserve Your Seat
//           </Button>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default AirTickets;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Plane, Clock, Shield, Phone, DollarSign, Globe } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/revealText";

const AirTickets = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container  te mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center  mb-8">
              <Reveal>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                  <span>Home</span>
                  <span>/</span>
                  <span>Air Tickets</span>
                </div>
              </Reveal>
                <div className="flex justify-center text-center
                ">
              <RevealText>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Air Tickets
                  </h1>
              </RevealText>
                </div>
              <Reveal>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Hassle-Free Flight Booking for Your Next Journey
                </p>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto mb-12">
              Whether you are traveling for work, business, study, or family visits, finding the right flight at the right price can be stressful. At Royal Rolls, we make your travel easier by offering fast, affordable, and reliable air ticket booking services in Bangladesh for all major destinations, including Saudi Arabia, United Arab Emirates, Qatar, Kuwait, Jordan, Malaysia, and Russia.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Air Ticket Services?</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: DollarSign, title: "Affordable Pricing", text: "Competitive rates for both economy and business class." },
              { icon: Plane, title: "Trusted Airlines", text: "We work with top international and regional airlines." },
              { icon: Globe, title: "Flexible Options", text: "One-way, return, and multi-destination tickets." },
              { icon: Clock, title: "Instant Booking", text: "Quick and secure reservations with immediate confirmation." },
              { icon: Shield, title: "24/7 Support", text: "Travel assistance before and after your flight." },
              { icon: Phone, title: "Expert Guidance", text: "Professional support for all your travel needs." },
            ].map((item, i) => (
              <Reveal key={i}>
                <div className="bg-card p-6 rounded-lg border">
                  <item.icon className="w-12 h-12 text-primary mb-4" />
                  <Reveal>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  </Reveal>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-3xl font-bold text-center mb-12">Our Popular Routes</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 items-stretch auto-cols-fr gap-6">
            {[
              { title: "Saudi Arabia", text: "Flights for work, Hajj, Umrah, and business trips." },
              { title: "United Arab Emirates (UAE)", text: "Affordable tickets for Dubai, Abu Dhabi & Sharjah." },
              { title: "Japan", text: "Hassle-free tickets for skilled workers, students, and training programs." },
              { title: "Qatar", text: "Easy booking for Doha-bound travelers." },
              { title: "Kuwait", text: "Flexible flight options for workers and business professionals." },
              { title: "Jordan", text: "Smooth travel arrangements for Amman and other cities." },
              { title: "Malaysia", text: "Ideal for students, professionals, and tourists." },
              { title: "Russia", text: "Reliable flights for work, study, and business opportunities." },
            ].map((route, i) => (
              <Reveal  >
                <div key={i} className="p-6 popularRoutes border rounded-lg hover:border-primary transition-colors h-full flex flex-col">
                  <Reveal>
                    <h3 className="text-xl font-semibold mb-2">{route.title}</h3>
                  </Reveal>
                  <p className="text-muted-foreground">{route.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Services */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <RevealText>
            <h2 className="text-3xl font-bold text-center mb-12">
              Types of Air Ticket Services We Provide
            </h2>
          </RevealText>
          <div className="space-y-6">
            {[
              {
                title: "1. Work Visa Ticketing",
                text: "Specialized booking for workers and professionals traveling to Gulf countries and beyond.",
              },
              {
                title: "2. Visit & Business Visa Ticketing",
                text: "Perfect for short-term travelers attending meetings, trade fairs, or visiting family.",
              },
              {
                title: "3. Student Travel Ticketing",
                text: "Discounted fares and flexible bookings for students heading to study abroad.",
              },
              {
                title: "4. Group Bookings",
                text: "Affordable bulk ticketing for teams, organizations, and manpower groups.",
              },
            ].map((service, i) => (
              <div key={i}className="bg-card p-6 seriv rounded-lg border">
                <Reveal  >
                    <>
                    <h3 className="text-2xl font-semibold mb-3"> 
                      <Reveal>
                        <>{service.title}</>
                      </Reveal>

                    </h3>
                  <p className="text-muted-foreground">{service.text}</p></>
              </Reveal>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <Reveal>
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex justify-center">
            <RevealText>
              <h2 className="text-3xl text-center
              font-bold mb-6">
                <>
                Book Your Ticket Today</>
              </h2>
            </RevealText>

            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Travel with ease. Get the best flight deals with Royal Rolls.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Contact Us Now to Reserve Your Seat
            </Button>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default AirTickets;
