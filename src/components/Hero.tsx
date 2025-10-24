// import { ArrowRight, CheckCircle2 } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import { Button } from "@/components/ui/button";
// import heroBanner from "@/assets/hero-banner.jpg";
// import { Reveal } from "./ui/reveal";
// const Hero = () => {
//   const { t } = useTranslation();
  
//   return (
//     <section id="home" className="relative min-h-screen flex items-center pt-20">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
        
//         <img
//           src={heroBanner}
//           alt="International workforce opportunities"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70"></div>
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-3xl">
//           <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
//             <p className="text-primary font-semibold text-sm">
//               Government Approved Sending Organization (SO)
//             </p>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
//             {t("hero.title")}
//           </h1>

//           <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-slide-up">
//             {t("hero.subtitle")}
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up">
//             <Button variant="hero" size="lg" className="text-lg">
//               {t("hero.cta")}
//               <ArrowRight className="ml-2" />
//             </Button>
//             <Button variant="outline" size="lg" className="text-lg">
//               {t("nav.about")}
//             </Button>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in">
//             <div className="flex items-center space-x-3">
//               <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
//               <span className="text-foreground font-medium">
//                 {t("about.reason1")}
//               </span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
//               <span className="text-foreground font-medium">
//                 {t("about.reason3")}
//               </span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
//               <span className="text-foreground font-medium">
//                 {t("about.reason2")}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";
import japanFlag from "@/assets/countries/japan.jpg";
import saudiFlag from "@/assets/countries/saudi.jpg";
import uaeFlag from "@/assets/countries/uae.jpg";
import { Reveal } from "./ui/reveal";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";

const Hero = () => {
  const { t } = useTranslation();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: heroBanner,
      badge: t("hero.badge", "Government Approved Sending Organization"),
      title: t("hero.title"),
      subtitle: t("hero.subtitle"),
    },
    {
      image: japanFlag,
      badge: "JAPAN OPPORTUNITIES",
      title: "Work in Japan",
      subtitle: "JLPT Training, SSW & TITP Programs - Your gateway to Japanese employment",
    },
    {
      image: saudiFlag,
      badge: "MIDDLE EAST CAREERS",
      title: "Saudi Arabia & UAE",
      subtitle: "Premium job opportunities in construction, healthcare, and hospitality sectors",
    },
    {
      image: uaeFlag,
      badge: "GLOBAL EXPANSION",
      title: "Worldwide Opportunities",
      subtitle: "Connect with international employers across 15+ countries",
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="home" className="relative min-h-screen">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full h-screen"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative min-h-screen flex items-center pt-20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-3xl">
                    <Reveal>
                      <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                        <p className="text-primary font-semibold text-sm">
                          {slide.badge}
                        </p>
                      </div>
                    </Reveal>

                    <Reveal>
                      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
                        {slide.title}
                      </h1>
                    </Reveal>

                    <Reveal>
                      <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                        {slide.subtitle}
                      </p>
                    </Reveal>

                    <Reveal>
                      <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <Button variant="hero" size="lg" className="text-lg">
                          {t("hero.cta")}
                          <ArrowRight className="ml-2" />
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg">
                          {t("nav.about")}
                        </Button>
                      </div>
                    </Reveal>

                    <Reveal>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                          <span className="text-foreground font-medium">
                            {t("about.reason1")}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                          <span className="text-foreground font-medium">
                            {t("about.reason3")}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                          <span className="text-foreground font-medium">
                            {t("about.reason2")}
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Carousel Indicators - Bottom Right */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-primary w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
