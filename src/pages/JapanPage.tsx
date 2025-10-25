import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/revealText";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  const languageFeatures = [
    "JLPT & JFT-Basic training",
    "Cultural immersion workshops",
    "Mock interviews in Japanese"
  ];

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

  const collaborationItems = [
    "MoU Templates",
    "Placement Procedure Step-by-Step"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <RevealText>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Japan Manpower & Visa Partner</h1>
            </RevealText>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image Gallery - Left */}
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-muted rounded-xl h-40" />
                  <div className="bg-muted rounded-xl h-32" />
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-muted rounded-xl h-32" />
                  <div className="bg-muted rounded-xl h-40" />
                </div>
              </div>
            </Reveal>

            {/* Content - Right */}
            <Reveal>
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary rounded-full">
                  <p className="text-primary font-semibold text-sm">
                    Sending Organization (SO) Approved by the Governments of Japan & Bangladesh
                  </p>
                </div>
                <h2 className="text-3xl font-bold mb-4">Royal Rolls Manpower is one of the most reputable manpower recruiting agencies in Bangladesh</h2>
                <p className="text-muted-foreground mb-6">
                  Officially recognized as a Sending Organization (SO) by both Japan and Bangladesh, we have been providing secure and legal overseas job opportunities since 2024. Along with recruitment, we also run the Advanced Language Institute to teach the Japanese language, helping candidates prepare for a brighter future in Japan.
                </p>
                <p className="text-muted-foreground mb-6">
                  Through our Japan-approved training center and licensed recruitment services, we prepare workers to succeed abroad.
                </p>
                <Button variant="hero" onClick={() => setIsModalOpen(true)}>
                  Partner With Us
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
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
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Users className="text-primary" size={28} />
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
                <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Japanese Language Preparation</h3>
                  <ul className="space-y-3">
                    {languageFeatures.map((feature, idx) => (
                      <li key={idx} className="text-sm">{feature}</li>
                    ))}
                  </ul>
                </div>
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
                  <div className="text-4xl font-bold mb-2">★★★★★</div>
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
                <CarouselItem className="md:basis-1/3">
                  <div className="bg-muted rounded-xl h-64" />
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <div className="bg-muted rounded-xl h-64" />
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <div className="bg-muted rounded-xl h-64" />
                </CarouselItem>
                <CarouselItem className="md:basis-1/3">
                  <div className="bg-muted rounded-xl h-64" />
                </CarouselItem>
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
                <div className="bg-muted rounded-xl h-96" />
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
