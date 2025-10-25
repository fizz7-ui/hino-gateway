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
    { icon: UsersRound, label: "Happy Clients Served", value: "3k+" },
    { icon: TrendingUp, label: "Visa & Services Success Rate", value: "99%" },
    { icon: Calendar, label: "Years Agency Experience", value: "11+" },
  ];
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
    <section id="who-we-are" className="py-24 bg-background ">
      <div className="  grid grid-flow-col   mx-auto px-2 gap-4">
        <Reveal>
          <img
            src={image}
            alt=""
            className=" max-md:hidden"
            style={{ width: "5000px !important" }}
          />
        </Reveal>
        <div
          className="grid-flow-row justify-start text-left "
          style={{ width: "753px" }}
        >
          <div className="mb-20">
            <Reveal>
              <div className="text-left mb-12">
                <p className="text-primary sm:text-left
                 font-semibold text-sm max-md:text-left uppercase tracking-wider mb-3">
                  WHY ROYAL ROLLS?
                </p>

                <RevealText>
                  <h2 className="text-3xl max-md:text-1xl max-md:text-center max-md:w-80 sm:w-80 md:w-full sm:text-xl text-left md:text-3xl font-bold mb-6">
                    Trusted Manpower Experts in Bangladesh{" "}
                    <span className="text-primary">
                      for <br />
                      Global Opportunities
                    </span>
                  </h2>
                </RevealText>
              </div>
            </Reveal>

            <div className="max-w-6xl   mx-auto space-y-6 text-muted-foreground leading-relaxed">
              {" "}
            </div>
            <Reveal>
              <>
                <p className="text-xl  max-md:text-md sm:text-sm text-left sm:w-96 md:w-full max-md:text-center  max-md:w-96 md:text-xl text-slate-500">
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

                <p className="text-xl max-md:text-md sm:text-sm text-left sm:w-96  md:w-full  max-md:text-center max-md:w-96 md:text-xl text-slate-500">
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

                <p className="font-semibold max-md:text-md sm:text-sm text-left max-md:text-center md:w-full sm:w-96 max-md:w-96 md:text-xl text-foreground text-xl ">
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
      <br /><br /><br /><br />
      <div className="">
        <div className="">
         <div className="flex flex-col items-center w-full max-w-5xl mx-auto gap-12 px-4">
  {/* Testimonial Carousel */}
  <div className="w-full bg-card border-2 border-border rounded-xl p-8 flex flex-col justify-center items-center">
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[Autoplay({ delay: 5000 })]}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full text-center md:text-left">
              {/* Avatar */}
              <div
                className="rounded-full bg-muted overflow-hidden flex-shrink-0"
                style={{ width: "15rem", height: "15rem" }}
              >
                <img src={testimonial.image} alt="" className="w-full h-full object-cover" />
              </div>

              {/* Testimonial Text */}
              <div className="flex flex-col justify-center gap-2">
                <div className="flex justify-center md:justify-start space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">★</span>
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-4 max-w-xl mx-auto md:mx-0">
                  "{testimonial.text}"
                </p>

                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-primary text-sm font-semibold">{testimonial.location}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Arrows */}
      <div className="flex justify-center gap-4 mt-6">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  </div>

  {/* Statistics Panel */}
 {/* Statistics Panel */}
{/* Statistics Panel */}
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
      </div>
    </section>
  );
};

export default ChoseUS;
