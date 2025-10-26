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

  const { t } = useTranslation();

  const slides = [
    {
      image: "https://royalrollsmanpower.com/wp-content/uploads/2025/08/2-1.jpg",
      badge: t("japan.slides.slide1.badge"),
      title: t("japan.slides.slide1.title"),
      subtitle: t("japan.slides.slide1.subtitle"),
    },
    {
      image: "https://royalrollsmanpower.com/wp-content/uploads/2025/08/sl-1.jpg",
      badge: t("japan.slides.slide2.badge"),
      title: t("japan.slides.slide2.title"),
      subtitle: t("japan.slides.slide2.subtitle"),
    },
    {
      image: "https://royalrollsmanpower.com/wp-content/uploads/2025/08/HS1-2-1024x768-1.jpg",
      badge: t("japan.slides.slide3.badge"),
      title: t("japan.slides.slide3.title"),
      subtitle: t("japan.slides.slide3.subtitle"),
    },
  ];

  const programs = [
    {
      title: t("japan.advancedLanguage.t1.tt1"),
      items: [
        t("japan.advancedLanguage.t1.r1"),
        t("japan.advancedLanguage.t1.r2"),
        t("japan.advancedLanguage.t1.r3"),
        t("japan.advancedLanguage.t1.r4"),
        t("japan.advancedLanguage.t1.r5"),
      ]
    }
  ];

  const languageFeatures = [
    t("japan.advancedLanguage.t2.r1"),
    t("japan.advancedLanguage.t2.r2"),
    t("japan.advancedLanguage.t2.r3")
  ];

  const partnerBenefits = [
    t("japan.partnerWus.p2"),
    t("japan.partnerWus.p3"),
    t("japan.partnerWus.p4"),
    t("japan.partnerWus.p5"),
    t("japan.partnerWus.p6"),
    t("japan.partnerWus.p7"),
  ];

  const placementFeatures = [
    t("japan.placementMonitoring.r1"),
    t("japan.placementMonitoring.r2"),
    t("japan.placementMonitoring.r3")
  ];

  const collaborationItems = [
    t("japan.collabModel.r1"),
    t("japan.collabModel.r2")
  ];

  const imagesO = [
    {img: "https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-28-at-1.28.31-PM-1024x576.jpeg"},
    {img: "https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-28-at-1.28.31-PM-1-576x1024.jpeg"},
    {img: "https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025/08/WhatsApp-Image-2025-08-30-at-11.52.11-AM-1024x768.jpeg"},
    {img:"https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-11.52.10-AM-1024x769.jpeg"},
    {img:"https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-11.52.10-AM-1-1024x768.jpeg"},
    {img:"https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-11.52.10-AM-2.jpeg"}
  ];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        <Carousel
          setApi={setApi}
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
          className="w-full h-screen overflow-hidden"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative min-h-screen flex items-center pt-20">
                  <div className="absolute inset-0 z-0">
                    <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/70 to-black/70"></div>
                  </div>
                  <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                      <Reveal>
                        <div className="inline-block mb-6 px-4 py-2 bg-primary/40 border border-primary/100 rounded-full">
                          <p className="text-primary text-slate-50 font-semibold text-sm">{slide.badge}</p>
                        </div>
                      </Reveal>
                      <Reveal>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-100">{slide.title}</h1>
                      </Reveal>
                      <Reveal>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed text-slate-300">{slide.subtitle}</p>
                      </Reveal>
                      <Reveal>
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                          <Button variant="hero" size="lg" className="text-lg">{t("hero.cta")}<ArrowRight className="ml-2" /></Button>
                          <Button variant="outline" size="lg" className="text-lg text-slate-50">{t("nav.about")}</Button>
                        </div>
                      </Reveal>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute bottom-8 right-8 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index ? "bg-primary w-8" : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </section>

      {/* CEO */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">CEO's Message</h2>
          </RevealText>
          <Reveal>
            <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t("japan.ceo1")}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("japan.ceo2")}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Bangladesh */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-6xl">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">{t("japan.whyBD.title")}</h2>
          </RevealText>
          <RevealText>
            <p className="text-xl text-muted-foreground mb-12">{t("japan.whyBD.desc")}</p>
          </RevealText>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[t("japan.whyBD.reason1"), t("japan.whyBD.reason2"), t("japan.whyBD.reason3"), t("japan.whyBD.reason4")].map((reason, i) => (
              <Reveal key={i}>
                <div className="bg-card border-2 border-border rounded-xl p-6 text-left">{reason}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">{t("japan.ourMission")}</h2>
          </RevealText>
          <Reveal>
            <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{t("japan.ourMissionDesc1")}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("japan.ourMissiondesc2")}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">{t("whoWeAre.title")}</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t("whoWeAre.subtitle")} <span className="text-primary">{t("whoWeAre.subsubtitle")}</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
            <Reveal>
              <img src={dd} alt="" />
            </Reveal>
            <Reveal>
              <div>
                <h3 className="text-2xl font-bold mb-6">{t("whoWeAre.desc.title")}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{t("japan.whoWearedesc1")}</p>
                <p className="text-muted-foreground mb-8 leading-relaxed">{t("japan.whoweare2")}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-4xl">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Vision & Value</h2>
          </RevealText>
          <Reveal>
            <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed">{t("japan.ourVision")}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Programs & Training */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Reveal>
              <div className="bg-card border-2 border-border rounded-2xl p-8">
                <div className="flex flex-col justify-start text-left items-left gap-3 mb-6">
                  <div className="p-3">
                    <img src="https://royalrollsmanpower.com/wp-content/uploads/2025/08/advance-language-ins.png" alt="" width={200}/>
                  </div>
                  <h3 className="text-2xl font-bold">{t("japan.advancedLanguage.t1.tt1")}</h3>
                </div>
                <div className="space-y-6">
                  {programs.map((program, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold mb-3">{program.title}</h4>
                      <ul className="space-y-2">
                        {program.items.map((item, i) => <li key={i} className="text-muted-foreground text-sm">{item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-primary align-middle flex flex-col justify-center text-primary-foreground rounded-2xl p-8" style={{height: "406px"}}>
                <h3 className="text-2xl font-bold mb-6">{t("japan.advancedLanguage.t2.tt2")}</h3>
                <ul className="space-y-3">
                  {languageFeatures.map((feature, idx) => <li key={idx} className="text-sm">{feature}</li>)}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Reveal><div className="bg-card border-2 border-border rounded-xl p-6 text-center"><div className="inline-block p-3 bg-primary/10 rounded-lg mb-4"><Users className="text-primary" size={32} /></div><div className="text-4xl font-bold mb-2">100+</div><p className="text-muted-foreground">{t("japan.advancedLanguage.n1students")}</p></div></Reveal>
            <Reveal><div className="bg-card border-2 border-border rounded-xl p-6 text-center"><div className="inline-block p-3 bg-primary/10 rounded-lg mb-4"><Star className="text-primary" size={32} /></div><div className="text-4xl font-bold mb-2">70%</div><p className="text-muted-foreground">{t("japan.advancedLanguage.pass")}</p></div></Reveal>
            <Reveal><div className="bg-card border-2 border-border rounded-xl p-6 text-center"><div className="inline-block p-3 bg-primary/10 rounded-lg mb-4"><Star className="text-primary" size={32} /></div><div className="text-4xl font-bold mb-2 text-yellow-500">★★★★★</div><p className="text-muted-foreground">{t("japan.advancedLanguage.testiomional")}</p></div></Reveal>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-5xl">
          <Carousel className="w-full">
            <CarouselContent>
              {imagesO.map((item, index) => (
                <CarouselItem key={index} className="flex-none flex justify-center items-center">
                  <img src={item.img} alt={`Certificate ${index + 1}`} className="h-[400px] w-auto object-contain rounded-xl shadow-md border cursor-pointer hover:scale-[1.03] transition-all" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="text-4xl font-bold mb-6">{t("japan.partnerWus.t1")}</h2>
                <h3 className="text-2xl font-bold mb-6">{t("japan.partnerWus.tt1")}</h3>
                <p className="text-muted-foreground mb-6">{t("japan.partnerWus.p1")}</p>
                <ul className="space-y-3">{partnerBenefits.map((b, i) => <li key={i} className="text-muted-foreground text-sm">{b}</li>)}</ul>
              </div>
            </Reveal>
            <Reveal>
              <img loading="lazy" decoding="async" src="https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-27-at-6.45.10-PM-1-1024x768.jpeg" alt="" className="rounded-xl"/>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Placement & Monitoring */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 max-w-4xl">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">{t("japan.placementMonitoring.t1")}</h2>
          </RevealText>
          <div className="grid md:grid-cols-3 gap-6">
            {placementFeatures.map((f, i) => (
              <Reveal key={i}><div className="bg-card border-2 border-border rounded-xl p-6 text-center">{f}</div></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Models */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">{t("japan.collabModel.t1")}</h2>
          </RevealText>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {collaborationItems.map((item, idx) => (
              <Reveal key={idx}><div className="bg-card border-2 border-border rounded-xl p-6">{item}</div></Reveal>
            ))}
          </div>
          <Reveal>
            <Button variant="hero" size="lg" onClick={() => setIsModalOpen(true)}>{t("japan.collabModel.cta")}</Button>
          </Reveal>
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

