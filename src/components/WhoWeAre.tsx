
import { Shield, Users, Globe, CheckIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import ceoImage from "@/assets/ceo-portrait.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "./ui/reveal";
import { RevealText } from "./ui/revealText";
import dd from '@/assets/whoweare.png';
import ContactModal from "./ContactModal";
import { useState } from "react";

const WhoWeAre = () => {
  const { t } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
   
  const highlights = [
    t("whoWeAre.hightlights.hl1"),
    t("whoWeAre.hightlights.hl2"),
    t("whoWeAre.hightlights.hl3"),
    t("whoWeAre.hightlights.hl4"),
    t("whoWeAre.hightlights.hl5"),
  ];
  
  return (
    <section id="who-we-are" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              {t("whoWeAre.title")}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("whoWeAre.subtitle")}{" "}
              <span className="text-primary">{t("whoWeAre.subsubtitle")}</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <Reveal>
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {t("whoWeAre.desc.title")}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t("whoWeAre.desc.desc1")}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t("whoWeAre.desc.desc2")}
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t("whoWeAre.desc.desc3")}
              </p>

              <div className="space-y-3 mb-8">
                {highlights.map((highlight, index) => (
                  <Reveal key={index}>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">{highlight}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  {t("hero.cta")}
                </Button>
              </Reveal>
            </div>
          </Reveal>

          <div className= "">
            <Reveal>
               <img src={dd} alt=""  />
            </Reveal>

            
          </div>
        </div>
                
        {/* CEO Message */}
        <div className="CEO">
          <Reveal>
            <div className="bg-gradient-subtle border-2 border-border rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* CEO Image */}
                <div className="md:col-span-1">
                  <img
                    src={ceoImage}
                    alt="Mohd Sohel Rana - CEO of Royal Rolls Manpower"
                    className="rounded-xl w-full object-cover shadow-elegant"
                  />
                  <div className="mt-4 text-center">
                    <RevealText>
                      <h4 className="font-bold text-xl">
                        Md. Sohel Rana
                      </h4>
                    </RevealText>
                    <RevealText>
                      <p className="text-primary font-semibold">
                        {t("whoWeAre.ceoTitle")}
                      </p>
                    </RevealText>
                    <RevealText>
                      <p className="text-sm text-muted-foreground mt-2">
                        {t("whoWeAre.ceoContact")}:{" "}
                        <a
                          href="tel:+8801630234538"
                          className="text-primary hover:underline"
                        >
                          +880 163 023 4538
                        </a>
                      </p>
                    </RevealText>
                  </div>
                </div>

                {/* CEO Message */}
                <div className="md:col-span-2">
                  <RevealText>
                    <h3 className="text-3xl font-bold mb-6">
                      <span className="text-primary">
                        {t("whoWeAre.ceoMessage")}
                      </span>
                    </h3>
                  </RevealText>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <RevealText>
                      <p>{t("whoWeAre.ceoText")}</p>
                    </RevealText>

                    <RevealText>
                      <p className="font-semibold text-foreground">
                        {t("whoWeAre.vision")}:
                      </p>
                    </RevealText>

                    <ul className="space-y-2 pl-6">
                      <li className="flex">
                        <RevealText>
                          <div className="flex gap-3 items-center">
                          <CheckIcon className="text-primary"/>
                          {t("whoWeAre.ceoVision.vision1")}
                          </div>
                        </RevealText>
                      </li>
                      <li>
                        <RevealText>
                          <div className="flex gap-3 items-center">
                          <CheckIcon className="text-primary"/>
                           
                         {t("whoWeAre.ceoVision.vision2")}
                          </div>
                         
                        </RevealText>
                      </li>
                      <li>
                        <RevealText>
                          <div className="flex gap-3 items-center">
                          <CheckIcon className="text-primary"/>
                         {t("whoWeAre.ceoVision.vision3")}
                          </div>
                        </RevealText>
                      </li>
                    </ul>

                    <RevealText>
                      <p>
                        {t("whoWeAre.ceoProud")}
                      </p>
                    </RevealText>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      
      <ContactModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen} 
      />
    </section>
  );
};

export default WhoWeAre;
