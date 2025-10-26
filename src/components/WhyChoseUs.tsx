import { Shield, UsersRound, TrendingUp, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";
import ceoImage from "@/assets/ceo-portrait.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "./ui/reveal";
import { RevealText } from "./ui/revealText";
import dd from "@/assets/whoweare.png";
import image from "@/assets/ni.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Handshake } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const ChoseUS = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: UsersRound, label: t("testiomional.stats.happyCleints"), value: "3k+" },
    { icon: TrendingUp, label: t("testiomional.stats.visaRate"), value: "99%" },
    { icon: Calendar, label: t("testiomional.stats.agencyExp"), value: "11+" },
  ];

  const testimonials = [
    {
      name: "Abdulkhakiq",
      image: "https://royalrollsmanpower.com/wp-content/uploads/2025/09/3890524-2048x1641.jpg",
      location: "OMAN",
      text: t("testiomional.khaliq"),
      rating: 5,
    },
    {
      name: "Ahmed Al-Rashid",
      image: "https://royalrollsmanpower.com/wp-content/uploads/2025/09/3890524-2048x1641.jpg",
      location: "SAUDI ARABIA",
      text: t("testiomional.rashid"),
      rating: 5,
    },
    {
      name: "Yuki Tanaka",
      image: "https://royalrollsmanpower.com/wp-content/uploads/2025/09/3890524-2048x1641.jpg",
      location: "JAPAN",
      text: t("testiomional.yuki"),
      rating: 5,
    },
  ];

  return (
    <section id="who-we-are" className="py-24 bg-background">
      <div className="grid grid-flow-col mx-auto px-2 gap-4">
        <Reveal>
          <img src={image} alt="" className="max-md:hidden" />
        </Reveal>

        <div className="grid-flow-row justify-start text-left" style={{ width: "753px" }}>
          <div className="mb-20">
            <Reveal>
              <div className="text-left mb-12">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                  {t("whyRollsRoyals.title")}
                </p>

                <RevealText>
                  <h2 className="text-3xl font-bold mb-6">
                    {t("whyRollsRoyals.subtitle")}{" "}
                    <span className="text-primary">
                      {t("whyRollsRoyals.subsub")}
                    </span>
                  </h2>
                </RevealText>
              </div>
            </Reveal>

            <Reveal>
              <div className="text-containers">
                <p className="text-normal">{t("whyRollsRoyals.desc1")}</p>
                <p className="text-normal">{t("whyRollsRoyals.desc2")}</p>
                <p className="text-highlight">{t("whyRollsRoyals.ending")}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="mt-20">
        <div className="flex flex-col items-center w-full max-w-5xl mx-auto gap-12 px-4">
          <div className="w-full bg-card border-2 border-border rounded-xl p-8 flex flex-col justify-center items-center">
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 5000 })]}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((tData, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
                      <div
                        className="rounded-full bg-muted overflow-hidden flex-shrink-0"
                        style={{ width: "15rem", height: "15rem" }}
                      >
                        <img src={tData.image} alt="" className="w-full h-full object-cover" />
                      </div>

                      <div className="flex flex-col justify-center gap-2">
                        <div className="flex justify-center md:justify-start space-x-1 mb-3">
                          {[...Array(tData.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-500 text-lg">★</span>
                          ))}
                        </div>
                        <p className="text-foreground leading-relaxed mb-4 max-w-xl mx-auto md:mx-0">
                          "{tData.text}"
                        </p>
                        <div>
                          <p className="font-bold text-foreground">{tData.name}</p>
                          <p className="text-primary text-sm font-semibold">{tData.location}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex justify-center gap-4 mt-6">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>

          {/* STATS */}
          <section className="w-full py-16 bg-background flex justify-center">
            <div className="flex justify-center w-full max-w-5xl flex-wrap gap-8">
              {stats.map((stat, index) => (
                <Reveal key={index}>
                  <div className="text-center p-6 bg-gradient-subtle border-2 border-border rounded-xl hover:border-primary transition-all duration-300 hover:shadow-red h-[222.5px] flex flex-col justify-center items-center">
                    <div className="inline-block p-4 bg-primary/10 rounded-xl mb-4">
                      <stat.icon className="text-primary" size={32} />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ChoseUS;
