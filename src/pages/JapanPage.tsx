import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Star, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/revealText";
import { useEffect, useState } from "react";
import ContactModal from "@/components/ContactModal";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";
import dd from '@/assets/dd.png'

import ceoImage from "@/assets/ceo-portrait.jpg";

const JapanPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const programs = [
    {
      title: "Skill Training Programs",
      items: [
        "Technical Intern Training Program (TITP)",
        "Specified Skilled Worker (SSW)",
        "Caregiving",
        "Construction",
        "Food Service"
      ]
    }
  ];
  const { t } = useTranslation();
    const slides = [
   {
    image: "https://royalrollsmanpower.com/wp-content/uploads/2025/08/2-1.jpg",
    badge: "Government Approved Sending Organization (SO)",
    title: "Your Career, Our Priority",
    subtitle: "Royal Rolls Manpower – RL 1264. Trusted manpower recruiting agencies in Bangladesh",
  },
  {
    image: "https://royalrollsmanpower.com/wp-content/uploads/2025/08/sl-1.jpg",
    badge: "Work Abroad, Study Overseas, Or Visit With Ease",
    title: "Work & Study Visa In Japan With 100% Guidance",
    subtitle: "JLPT Training, SSW & TITP Programs - Your gateway to Japanese employment",
  },
 
  
  
  {
    image: "https://royalrollsmanpower.com/wp-content/uploads/2025/08/HS1-2-1024x768-1.jpg",
    badge: "Advanced Language Institute",
    title: "Sending Organization(SO) Approved Japan Language Center",
    subtitle: "Get N5/N4 Certified & Work In Japan",
  },
 
  ];
  const languageFeatures = [
    "JLPT & JFT-Basic training",
    "Cultural immersion workshops",
    "Mock interviews in Japanese"
  ];
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
   
  const partnerBenefits = [
    "Govt. Approved SO – Legal and transparent recruitment for Japan",
    "Skilled & Unskilled Placement – From professionals to general workers, we cover multiple industries",
    "Language & Cultural Training – Especially for Japan, with N5/N4 certification and native instructors",
    "End-to-End Support – From documentation to placement and after-arrival guidance",
    "Safe & Secure Process – 100% legal recruitment with worker protection in mind",
    "Wide Range of Skilled Professions – Our workforce is trained across diverse fields, including: Housemaids & domestic workers, Professional drivers, Qualified nurses & caregivers, Construction workers & technicians, Hotel & hospitality staff, Welders, electricians, plumbers, and other trades"
  ];

  const placementFeatures = [
    "Pre-departure orientation",
    "Post-deployment support",
    "Reporting and transparency"
  ];
  const highlights = [
    "N5 & N4 Japanese language training",
    "Work and student visa processing for Japan",
    "Legal manpower export to KSA, UAE, Qatar & more",
    "Government-approved Sending Organization (SO)",
    "Remittance and economic empowerment support",
  ];
  const imagesO = [
    {img: "https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-28-at-1.28.31-PM-1024x576.jpeg"},
    {img: "https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-28-at-1.28.31-PM-1-576x1024.jpeg"},
    {img: "https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-11.52.11-AM-1024x768.jpeg"},
    {img:"https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-11.52.10-AM-1024x769.jpeg"},
    {img:"https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-11.52.10-AM-1-1024x768.jpeg"},
    {img:"https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-11.52.10-AM-2.jpeg"}
  ];
  const collaborationItems = [
    "MoU Templates",
    "Placement Procedure Step-by-Step"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
       <section id="home" className="relative min-h-screen overflow-hidden">
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
        className="w-full h-screen overflow-hidden"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/70 to-black/70"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-3xl">
                    <Reveal>
                      <div className="inline-block mb-6 px-4 py-2 bg-primary/40 border border-primary/100 rounded-full">
                        <p className="text-primary text-slate-50 font-semibold text-sm">
                          {slide.badge}
                        </p>
                      </div>
                    </Reveal>

                    <Reveal>
                      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground text-slate-100">
                        {slide.title}
                      </h1>
                    </Reveal>

                    <Reveal>
                      <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed text-slate-300">
                        {slide.subtitle}
                      </p>
                    </Reveal>

                    <Reveal>
                      <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <Button variant="hero" size="lg" className="text-lg">
                          {t("hero.cta")}
                          <ArrowRight
                           className="ml-2" />
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg text-slate-50">
                          {t("nav.about")}
                        </Button>
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

      {/* CEO's Message */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">CEO's Message</h2>
            </RevealText>
            <Reveal>
              <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At Royal Rolls Manpower, we believe our role is more than just sending workers abroad, it is about building a lasting bridge of trust, skills, and opportunity between Bangladesh and Japan.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As an SO approved by both the Government of Japan and the Government of Bangladesh, we take pride in preparing candidates who are not only skilled and disciplined, but also culturally adaptable, loyal, and committed to contributing positively to Japan's workforce.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Bangladesh */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Bangladesh?</h2>
            </RevealText>
            <RevealText>
              <p className="text-xl text-muted-foreground mb-12">
                Bangladesh offers a strong and promising workforce for Japan because of:
              </p>
            </RevealText>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "A young and dynamic population ready to contribute",
                "Cultural adaptability and respect for discipline",
                "Strong commitment and loyalty to employers",
                "Ability to be quick learners in skills and language"
              ].map((point, index) => (
                <Reveal key={index}>
                  <div className="bg-card border-2 border-border rounded-xl p-6 text-left">
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Mission</h2>
            </RevealText>
            <Reveal>
              <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We believe that dreams can be transformed into opportunities. Our mission is to empower the hardworking people of Bangladesh by connecting them with life-changing career opportunities in Japan. Through proper training, guidance, and support, we transform potential into success — opening doors to brighter futures for individuals, building stronger foundations for families, and contributing to a stronger economy for Bangladesh.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every step we take is driven by a clear vision: to reduce unemployment, uplift lives, and create a bridge of friendship and growth between Bangladesh and Japan. By helping our people achieve their dreams abroad, we are uplifting our nation at home. Through this mission, we aspire to position our company as a first-class manpower service provider in Bangladesh, recognized for excellence, trust, and global impact.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {/* Who Are We */}
          <section id="who-we-are" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              {t("whoWeAre.title")}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Royal Rolls Manpower | Your Trusted{" "}
              <span className="text-primary">Manpower & Visa Partner</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <div className= "">
            <Reveal>
               <img src={dd} alt=""  />
            </Reveal>

            
          </div>
          <Reveal>
            <>
              <div>
              <h3 className="text-2xl font-bold mb-6">
                Sending Organization (SO) Approved by the Governments of Japan &
                Bangladesh
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Royal Rolls Manpower is one of the most reputable manpower
                recruiting agencies in Bangladesh. Officially recognized as a
                Sending Organization (SO) by both Japan and Bangladesh, we
                provide secure and legal overseas job opportunities.Royal Rolls Manpower is one of the most reputable manpower recruiting agencies in Bangladesh. Officially recognized as a Sending Organization (SO) by both Japan and Bangladesh, we have been providing secure and legal overseas job opportunities since 2024. Along with recruitment, we also run the Advanced Language Institute to teach the Japanese language, helping candidates prepare for a brighter future in Japan.
              </p>
               
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Through our Japan-approved training center and licensed recruitment services, we prepare workers to succeed abroad.
              </p>

              

               
            </div>
             
            
            </>
          </Reveal>

           
        </div>
                
        {/* CEO Message */}
                
      </div>
    </section>
      {/* Our Vision & Value */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Vision & Value</h2>
            </RevealText>
            <Reveal>
              <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our vision is to establish ourselves as Bangladesh's leading and first-class manpower service provider, recognized for excellence, integrity, and global impact. We aspire to be the trusted bridge between Bangladesh and Japan, creating endless opportunities for our people to thrive abroad while strengthening Bangladesh's economy at home. We envision a future where Bangladeshi workers are valued worldwide for their skills, discipline, and dedication — turning Bangladesh into a global hub of reliable human resources. Through this vision, we aim not only to supply manpower but also to uplift lives, empower families, and build stronger international partnerships that last for generations.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Programs & Training */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Side - Programs & Training */}
              <Reveal>
                <div className="bg-card border-2 border-border rounded-2xl p-8">
                  <div className="flex flex-col justify-start text-left items-left gap-3 mb-6">
                    <div className="p-3">
                      <img src="https://royalrollsmanpower.com/wp-content/uploads/2025/08/advance-language-ins.png" alt="" width={200}/>
                    </div>
                    <h3 className="text-2xl font-bold">Programs & Training</h3>
                  </div>
                  <div className="space-y-6">
                    {programs.map((program, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold mb-3">{program.title}</h4>
                        <ul className="space-y-2">
                          {program.items.map((item, i) => (
                            <li key={i} className="text-muted-foreground text-sm">{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Right Side - Japanese Language */}
              <Reveal>
               <>
                <div className="bg-primary align-middle flex flex-col justify-center text-primary-foreground rounded-2xl p-8" style={{height: "406px"}}>
                  <h3 className="text-2xl font-bold mb-6">Japanese Language Preparation</h3>
                  <div className="flex">
                  <ul className="space-y-3">
                    {languageFeatures.map((feature, idx) => (
                      <li key={idx} className="text-sm">{feature}</li>
                    ))}
                  </ul>
                     
                  </div>
                </div>
                
               </>
              </Reveal>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Reveal>
                <div className="bg-card border-2 border-border rounded-xl p-6 text-center">
                  <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4">
                    <Users className="text-primary" size={32} />
                  </div>
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <p className="text-muted-foreground">Number of students placed</p>
                </div>
              </Reveal>
              <Reveal>
                <div className="bg-card border-2 border-border rounded-xl p-6 text-center">
                  <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4">
                    <Star className="text-primary" size={32} />
                  </div>
                  <div className="text-4xl font-bold mb-2">70%</div>
                  <p className="text-muted-foreground">JLPT pass rates</p>
                </div>
              </Reveal>
              <Reveal>
                <div className="bg-card border-2 border-border rounded-xl p-6 text-center">
                  <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4">
                    <Star className="text-primary" size={32} />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-yellow-500">★★★★★</div>
                  <p className="text-muted-foreground">Testimonials from alumni</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Carousel */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {imagesO.map((item, index) => (
      <CarouselItem
        key={index}
        className="flex-none flex  justify-center items-center"
      >
        <img
          src={item.img} // ✅ use .img here
          alt={`Certificate ${index + 1}`}
          className="h-[400px] w-auto object-contain rounded-xl shadow-md border cursor-pointer hover:scale-[1.03] transition-all"
        />
      </CarouselItem>
    ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Partner With Bangladesh */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content - Left */}
              <Reveal>
                <div>
                  <h2 className="text-4xl font-bold mb-6">Partner With Bangladesh: A Reliable Talent Pipeline</h2>
                  <h3 className="text-2xl font-bold mb-6">Why Partner With Us?</h3>
                  <p className="text-muted-foreground mb-6">
                    We believe in building careers, not just contracts. Every worker we send abroad is trained, prepared, and supported to ensure long-term success.
                  </p>
                  <ul className="space-y-3">
                    {partnerBenefits.map((benefit, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm">{benefit}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Image - Right */}
              <Reveal>
                <img loading="lazy" decoding="async" width="1024" height="768" src="https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-27-at-6.45.10-PM-1-1024x768.jpeg" alt="" className="kb-img wp-image-899" srcSet="https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-27-at-6.45.10-PM-1-1024x768.jpeg 1024w, https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-27-at-6.45.10-PM-1-300x225.jpeg 300w, https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-27-at-6.45.10-PM-1-768x576.jpeg 768w, https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-27-at-6.45.10-PM-1.jpeg 1280w" sizes="auto, (max-width: 1024px) 100vw, 1024px" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Placement & Monitoring System */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Placement & Monitoring System</h2>
            </RevealText>
            <div className="grid md:grid-cols-3 gap-6">
              {placementFeatures.map((feature, idx) => (
                <Reveal key={idx}>
                  <div className="bg-card border-2 border-border rounded-xl p-6 text-center">
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Models */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Collaboration Models</h2>
            </RevealText>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {collaborationItems.map((item, idx) => (
                <Reveal key={idx}>
                  <div className="bg-card border-2 border-border rounded-xl p-6">
                    <p className="font-semibold">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <Button variant="hero" size="lg" onClick={() => setIsModalOpen(true)}>
                Partner With Us
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default JapanPage;
function setCurrent(arg0: any) {
  throw new Error("Function not implemented.");
}

