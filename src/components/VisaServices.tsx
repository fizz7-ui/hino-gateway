// import { useEffect, useCallback } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
//   type CarouselApi,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import { Briefcase, GraduationCap, Plane, Building2, MapPin, Users } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const VisaServices = () => {
//   const visaTypes = [
//     {
//       icon: Briefcase,
//       title: "Unskilled Visa",
//       description: "Work permits for general labor positions across multiple industries",
//       color: "bg-red-500/10",
//     },
//     {
//       icon: Users,
//       title: "Skilled Manpower Visa",
//       description: "Specialized work visas for skilled professionals and technicians",
//       color: "bg-primary/10",
//     },
//     {
//       icon: GraduationCap,
//       title: "Student Japan Visa",
//       description: "Study permits for Japanese universities and language schools",
//       color: "bg-blue-500/10",
//     },
//     {
//       icon: MapPin,
//       title: "Hajj and Umrah Visa",
//       description: "Religious pilgrimage visas for Saudi Arabia with full support",
//       color: "bg-green-500/10",
//     },
//     {
//       icon: Plane,
//       title: "Tourist Visa",
//       description: "Travel visas for leisure and tourism to destinations worldwide",
//       color: "bg-purple-500/10",
//     },
//     {
//       icon: Building2,
//       title: "Work & Family Visas",
//       description: "Employment and dependent visas for UAE, Qatar, and Middle East",
//       color: "bg-orange-500/10",
//     },
//   ];

//   return (
//     <section className="py-24 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Our <span className="text-primary">Visa Services</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             We help you secure global work & travel visas with full legal support and transparency.
//             Launch your global career with secure job placement support.
//           </p>
//         </div>

//         <div className="max-w-5xl mx-auto mb-12">
//           <Carousel
//             opts={{
//               align: "start",
//               loop: true,
//             }}
//             plugins={[
//               Autoplay({
//                 delay: 3000,
//                 stopOnInteraction: false,
//                 stopOnMouseEnter: true,
//               }),
//             ]}
//             className="w-full"
//           >
//             <CarouselContent>
//               {visaTypes.map((visa, index) => (
//                 <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//                   <div className="p-1">
//                     <Card className="visaCards border-2 hover:border-primary hover:shadow-red transition-all duration-300 h-full">
//                       <CardContent className="flex flex-col items-center justify-center p-8 text-center h-full">
//                         <div
//                           className={`w-20 h-20 rounded-full ${visa.color} flex items-center justify-center mb-6`}
//                         >
//                           <visa.icon className="text-primary" size={36} />
//                         </div>
//                         <h3 className="text-xl font-bold mb-3">{visa.title}</h3>
//                         <p className="text-muted-foreground text-sm leading-relaxed">
//                           {visa.description}
//                         </p>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious className="hidden md:flex" />
//             <CarouselNext className="hidden md:flex" />
//           </Carousel>
//         </div>

//         <div className="bg-gradient-subtle border-2 border-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
//           <h3 className="text-3xl font-bold mb-4">
//             Explore Our Full Range of <span className="text-primary">Visa Services</span>
//           </h3>
//           <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
//             We handle every step from training to placement with full legal support and
//             transparency. Our expert team ensures a hassle-free visa processing experience.
//           </p>
//           <Button variant="hero" size="lg" className="text-lg px-12">
//             Start Your Visa Application
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VisaServices;
import { useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Briefcase, GraduationCap, Plane, Building2, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./ui/reveal";
import { RevealText } from "./ui/revealText";

const VisaServices = () => {
  const visaTypes = [
    {
      icon: Briefcase,
      title: "Unskilled Visa",
      description: "Work permits for general labor positions across multiple industries",
      color: "bg-red-500/10",
    },
    {
      icon: Users,
      title: "Skilled Manpower Visa",
      description: "Specialized work visas for skilled professionals and technicians",
      color: "bg-primary/10",
    },
    {
      icon: GraduationCap,
      title: "Student Japan Visa",
      description: "Study permits for Japanese universities and language schools",
      color: "bg-blue-500/10",
    },
    {
      icon: MapPin,
      title: "Hajj and Umrah Visa",
      description: "Religious pilgrimage visas for Saudi Arabia with full support",
      color: "bg-green-500/10",
    },
    {
      icon: Plane,
      title: "Tourist Visa",
      description: "Travel visas for leisure and tourism to destinations worldwide",
      color: "bg-purple-500/10",
    },
    {
      icon: Building2,
      title: "Work & Family Visas",
      description: "Employment and dependent visas for UAE, Qatar, and Middle East",
      color: "bg-orange-500/10",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className=" grid justify-center text-center mb-16">
          <div className="flex justify-center">
            <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Visa Services</span>
            </h2>
          </RevealText>
          </div>
          <Reveal>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We help you secure global work & travel visas with full legal support and transparency.
              Launch your global career with secure job placement support.
            </p>
          </Reveal>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {visaTypes.map((visa, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Reveal>
                    <div className="p-1">
                      <Card className="visaCards border-2 hover:border-primary hover:shadow-red transition-all duration-300 h-full">
                        <CardContent className="flex flex-col items-center justify-center p-8 text-center h-full">
                          <div
                            className={`w-20 h-20 rounded-full ${visa.color} flex items-center justify-center mb-6`}
                          >
                            <visa.icon className="text-primary" size={36} />
                          </div>
                          <h3 className="text-xl font-bold mb-3">{visa.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {visa.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </Reveal>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
        <div className="flex justify-center">

        <Reveal>
          <div className="bg-gradient-subtle border-2 border-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
            <RevealText>
              <h3 className="text-3xl font-bold mb-4">
                Explore Our Full Range of <span className="text-primary">Visa Services</span>
              </h3>
            </RevealText>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              We handle every step from training to placement with full legal support and
              transparency. Our expert team ensures a hassle-free visa processing experience.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-12">
              Start Your Visa Application
            </Button>
          </div>
        </Reveal>
        </div>
      </div>
    </section>
  );
};

export default VisaServices;
