import { Shield, Users, Globe } from "lucide-react";
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
  const highlights = [
    "N5 & N4 Japanese language training",
    "Work and student visa processing for Japan",
    "Legal manpower export to KSA, UAE, Qatar & more",
    "Government-approved Sending Organization (SO)",
    "Remittance and economic empowerment support",
  ];
  const testimonials = [
    {
      name: "Abdulkhakiq",
      image:
        "https://royalrollsmanpower.com/wp-content/uploads/2025/09/3890524-2048x1641.jpg",
      location: "OMAN",
      text: "We recruited drivers and house mates, and they have been extremely reliable and hardworking. Their dedication makes day-to-day operations much smoother.",
      rating: 5,
    },
    {
      name: "Ahmed Al-Rashid",
      image:
        "https://royalrollsmanpower.com/wp-content/uploads/2025/09/3890524-2048x1641.jpg",
      location: "SAUDI ARABIA",
      text: "Royal Rolls provided us with excellent construction workers who were well-trained and professional. Their support throughout the process was exceptional.",
      rating: 5,
    },
    {
      name: "Yuki Tanaka",
      image:
        "https://royalrollsmanpower.com/wp-content/uploads/2025/09/3890524-2048x1641.jpg",
      location: "JAPAN",
      text: "The workers we hired through Royal Rolls were not only skilled but also culturally prepared. The language training they received made integration seamless.",
      rating: 5,
    },
  ];
  return (
    <section id="who-we-are" className="py-24 bg-background">
      <div className="  grid grid-flow-col   mx-auto px-2 gap-4">
        <Reveal>
          <img src={image} alt=""className="max-md:hidden md:hidden sm:hidden" style={{ width: "5000px !important" }} />
        </Reveal>
        <div
          className="grid-flow-row justify-start text-left "
          style={{ width: "753px" }}
        >
          <div className="mb-20">
            <Reveal>
              <div className="text-left mb-12">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                  WHY ROYAL ROLLS?
                </p>

                <RevealText>
                  <h2 className="text-3xl max-md:text-1xl max-md:w-80 sm:w-80 sm:text-xl text-left md:text-1xl font-bold mb-6">
                    Trusted Manpower Experts in Bangladesh{" "}
                    <span className="text-primary">
                      for <br />
                      Global Opportunities
                    </span>
                  </h2>
                </RevealText>
              </div>
            </Reveal>

            <div className="max-w-6xl   mx-auto space-y-6 text-muted-foreground leading-relaxed"></div>
            <Reveal>
              <>
                <p className="text-xl  max-md:text-md sm:text-sm text-left sm:w-96 max-md:w-96 md:text-xl text-slate-500">
                  Our company has extensive experience spanning over 15 years
                  and holds all necessary government-approved licenses and
                  certifications, ensuring complete legal compliance. We
                  specialize in developing a highly skilled workforce through
                  comprehensive training programs conducted by experienced
                  Bangladeshi and Japanese instructors and technician trainers
                  proficient in Japanese language and technology. Additionally,
                  we are partnered with leading government training centers in
                  Bangladesh, further enhancing the quality and credibility of
                  our training initiatives.
                </p>

                <p className="text-xl max-md:text-md sm:text-sm text-left sm:w-96 max-md:w-96 md:text-xl text-slate-500">
                  Our mission is to deploy the most competent professionals
                  across all trades to Japan, fully approved and recognized by
                  both the Bangladeshi and Japanese governments. We carefully
                  match the supply of skilled workers with Japan's labor
                  demands, always prioritizing the needs, expectations, and
                  respect of our counterparts. At every stage, we maintain the
                  highest standards of quality, accountability, and
                  professionalism, fostering strong, lasting partnerships
                  between the two countries.
                </p>

                <br />

                <p className="font-semibold max-md:text-md sm:text-sm text-left sm:w-96 max-md:w-96 md:text-xl text-foreground text-xl ">
                  Royal Rolls Manpower is a trusted bridge between Bangladesh
                  and global opportunities. From Japan to the Gulf, we train,
                  place, and support workers every step of the way.
                </p>
              </>
            </Reveal>
            <br />
            {/* <Reveal  >
            <div
              className="text-center p-6 bg-card border-2 border-border rounded-xl hover:border-primary hover:shadow-red transition-all duration-300"
               
            >
              <div className=" p-4 text-left flex w-14 flex-row bg-primary/10 rounded-xl mb-4">
                <Handshake className="text-primary text-left " size={28}/>
              </div>
               
                <h3 className="text-lg font-bold text-foreground text-left mb-3">
                    Trusted Recruiting Agency  <br /> for Japan Since 2024
                </h3>  
            </div>
          </Reveal> */}
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-1-xl max-h-90 mx-auto gap-0">
            {/* Testimonial Carousel */}
            <div className="bg-card border-2 border-border rounded-none p-8 flex flex-col justify-between">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 5000,
                  }),
                ]}
                className="w-full flex-grow"
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="grid grid-flow-col md:grid-flow-row max-md:grid-flow-row
            lg:grid-flow-col
            justify-center items-center">
                        {/* Bigger avatar */}
                        <div
                          className=" rounded-full bg-muted flex-shrink-0 overflow-hidden"
                          style={{ width: "15rem", height: "15rem" }}
                        >
                          <div className="w-full h-full">
                            <img src={testimonial.image} alt="" />
                          </div>
                        </div>

                        <div>
                          <div className="flex space-x-1 mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-500">
                                ★
                              </span>
                            ))}
                          </div>

                          <p className="text-foreground leading-relaxed mb-4">
                            "{testimonial.text}"
                          </p>

                          <div>
                            <p className="font-bold text-foreground">
                              {testimonial.name}
                            </p>
                            <p className="text-primary text-sm font-semibold">
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Arrows bottom-left */}
                <div className="flex justify-start gap-2 mt-6">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
              </Carousel>
            </div>

            {/* Statistics Panel */}
            <div className="bg-gradient-red p-8 text-primary-foreground space-y-6 rounded-none flex flex-col justify-center">
              <Reveal>
                <div style={{width:"53rem"}}className="flex items-start max-w-1-x  pb-6 border-b border-white/20">
                  <div className="text-4xl pr-6 ">👍</div>
                  <div className="border-l border-white/20 pl-6 ">
                    <RevealText>
                      <p className="text-4xl font-bold mb-2">3K+</p>
                    </RevealText>
                    <RevealText>
                      <p className="text-primary-foreground/90">
                        Happy Clients Served
                      </p>
                    </RevealText>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="flex items-start space-x-6 pb-6 border-b border-white/20">
                  <div className="text-4xl ">💡</div>
                  <div className="border-l border-white/20 pl-6 ">
                    <RevealText>
                      <p className="text-4xl font-bold mb-2">99%</p>
                    </RevealText>
                    <RevealText>
                      <p className="text-primary-foreground/90">
                        Visa & Service Success Rate
                      </p>
                    </RevealText>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="flex items-start space-x-6 pb-6 border-b border-white/20">
                  <div className="text-4xl ">📅</div>
                  <div className="border-l border-white/20 pl-6 ">
                    <RevealText>
                      <p className="text-4xl font-bold mb-2">15+</p>
                    </RevealText>
                    <RevealText>
                      <p className="text-primary-foreground/90">
                        Years Agency Experience
                      </p>
                    </RevealText>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoseUS;
