// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { Shield, Users, Globe, TrendingUp, Award, Heart } from "lucide-react";
// import japanImg from "@/assets/countries/japan.jpg";
// import saudiImg from "@/assets/countries/saudi.jpg";
// import { Button } from "@/components/ui/button";

// const AboutPage = () => {
//   const stats = [
//     { icon: Shield, label: "Government Approved", value: "Since 1267" },
//     { icon: Users, label: "Workers Placed", value: "15,000+" },
//     { icon: Globe, label: "Countries", value: "15+" },
//     { icon: TrendingUp, label: "Success Rate", value: "98%" },
//   ];

//   const values = [
//     {
//       icon: Shield,
//       title: "Transparency & Ethics",
//       description:
//         "We operate with 100% transparency in all our dealings. No hidden fees, no false promises – just honest, ethical recruitment practices that put your interests first.",
//     },
//     {
//       icon: Award,
//       title: "Quality Training",
//       description:
//         "Our government-approved training centers provide comprehensive language and technical training to ensure you're fully prepared for international employment opportunities.",
//     },
//     {
//       icon: Heart,
//       title: "Post-Placement Support",
//       description:
//         "Our commitment doesn't end at placement. We provide ongoing support to ensure your smooth integration and success in your destination country.",
//     },
//     {
//       icon: Globe,
//       title: "Global Network",
//       description:
//         "With established partnerships across Japan, Middle East, and beyond, we connect you with legitimate employers offering competitive compensation and benefits.",
//     },
//   ];

//   const countries = [
//     {
//       image: japanImg,
//       name: "Japan",
//       description:
//         "Our primary destination for skilled and technical workers. We are an officially approved Sending Organization for Japan, offering JLPT training, SSW, and TITP programs.",
//       opportunities: [
//         "Construction & Engineering",
//         "Manufacturing",
//         "Healthcare & Nursing",
//         "Hospitality & Food Service",
//       ],
//     },
    
//     {
//       image: saudiImg,
//       name: "Saudi Arabia",
//       description:
//         "Large-scale employment opportunities in construction, oil & gas, and service sectors. We also facilitate Hajj and Umrah visa services for religious pilgrimage.",
//       opportunities: [
//         "Construction & Infrastructure",
//         "Oil & Gas",
//         "Healthcare",
//         "Domestic Workers",
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="pt-32 pb-16 bg-gradient-subtle">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">
//               About <span className="text-primary">Royal Rolls</span> Manpower
//             </h1>
//             <p className="text-xl text-muted-foreground leading-relaxed">
//               Your trusted partner in international recruitment since 1267. We are a
//               government-approved Sending Organization committed to ethical, transparent, and
//               professional manpower services.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="py-16 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="text-center p-6 bg-gradient-subtle border-2 border-border rounded-xl hover:border-primary transition-all duration-300 hover:shadow-red"
//               >
//                 <div className="inline-block p-4 bg-primary/10 rounded-xl mb-4">
//                   <stat.icon className="text-primary" size={32} />
//                 </div>
//                 <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
//                 <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Values */}
//       <section className="py-24 bg-gradient-subtle">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Our <span className="text-primary">Core Values</span>
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               What sets us apart in the international recruitment industry
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//             {values.map((value, index) => (
//               <div
//                 key={index}
//                 className="bg-card border-2 border-border rounded-xl p-8 hover:border-primary hover:shadow-red transition-all duration-300"
//               >
//                 <div className="p-4 bg-primary/10 rounded-xl inline-block mb-6">
//                   <value.icon className="text-primary" size={32} />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
//                 <p className="text-muted-foreground leading-relaxed">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Countries We Serve */}
//       <section className="py-24 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Countries We <span className="text-primary">Serve</span>
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Connecting Bangladesh workers with opportunities in top destinations worldwide
//             </p>
//           </div>

//           <div className="space-y-12 max-w-6xl mx-auto">
//             {countries.map((country, index) => (
//               <div
//                 key={index}
//                 className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
//                   index % 2 === 1 ? "lg:grid-flow-dense" : ""
//                 }`}
//               >
//                 <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
//                   <img
//                     src={country.image}
//                     alt={`${country.name} opportunities`}
//                     className="rounded-2xl shadow-elegant w-full h-[400px] object-cover border-2 border-border"
//                   />
//                 </div>
//                 <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
//                   <h3 className="text-3xl font-bold mb-4">{country.name}</h3>
//                   <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
//                     {country.description}
//                   </p>
//                   <div className="space-y-3">
//                     <p className="font-semibold text-foreground">Key Opportunities:</p>
//                     {country.opportunities.map((opp, idx) => (
//                       <div key={idx} className="flex items-center space-x-3">
//                         <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
//                         <span className="text-foreground">{opp}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 bg-gradient-subtle">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center bg-primary/5 border-2 border-primary/20 rounded-2xl p-12">
//             <h2 className="text-4xl font-bold mb-6">
//               Ready to Start Your <span className="text-primary">International Career?</span>
//             </h2>
//             <p className="text-xl text-muted-foreground mb-8">
//               Contact us today for a free consultation and take the first step toward your global
//               opportunity.
//             </p>
//             <Button variant="hero" size="lg" className="text-lg px-12">
//               Book Your Consultation Now
//             </Button>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default AboutPage;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Users, Globe, TrendingUp, Award, Heart } from "lucide-react";
import japanImg from "@/assets/countries/japan.jpg";
import saudiImg from "@/assets/countries/saudi.jpg";
import { Button } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/revealText";

const AboutPage = () => {
  const stats = [
    { icon: Shield, label: "Government Approved", value: "Since 1267" },
    { icon: Users, label: "Workers Placed", value: "15,000+" },
    { icon: Globe, label: "Countries", value: "15+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Transparency & Ethics",
      description:
        "We operate with 100% transparency in all our dealings. No hidden fees, no false promises – just honest, ethical recruitment practices that put your interests first.",
    },
    {
      icon: Award,
      title: "Quality Training",
      description:
        "Our government-approved training centers provide comprehensive language and technical training to ensure you're fully prepared for international employment opportunities.",
    },
    {
      icon: Heart,
      title: "Post-Placement Support",
      description:
        "Our commitment doesn't end at placement. We provide ongoing support to ensure your smooth integration and success in your destination country.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description:
        "With established partnerships across Japan, Middle East, and beyond, we connect you with legitimate employers offering competitive compensation and benefits.",
    },
  ];

  const countries = [
    {
      image: japanImg,
      name: "Japan",
      description:
        "Our primary destination for skilled and technical workers. We are an officially approved Sending Organization for Japan, offering JLPT training, SSW, and TITP programs.",
      opportunities: [
        "Construction & Engineering",
        "Manufacturing",
        "Healthcare & Nursing",
        "Hospitality & Food Service",
      ],
    },

    {
      image: saudiImg,
      name: "Saudi Arabia",
      description:
        "Large-scale employment opportunities in construction, oil & gas, and service sectors. We also facilitate Hajj and Umrah visa services for religious pilgrimage.",
      opportunities: [
        "Construction & Infrastructure",
        "Oil & Gas",
        "Healthcare",
        "Domestic Workers",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <Center>
                <RevealText>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    About <span className="text-primary">Royal Rolls</span> Manpower
                  </h1>
                </RevealText>
              </Center>

              <Reveal>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Your trusted partner in international recruitment since 1267. We are a
                  government-approved Sending Organization committed to ethical, transparent, and
                  professional manpower services.
                </p>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid  grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Reveal key={index}>
                  <div className="text-center p-6 bg-gradient-subtle border-2 border-border rounded-xl hover:border-primary transition-all duration-300 hover:shadow-red">
                    <Reveal>
                      <div className="inline-block p-4 bg-primary/10 rounded-xl mb-4">
                        <Icon className="text-primary" size={32} />
                      </div>
                    </Reveal>

                    <Reveal>
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    </Reveal>

                    <Reveal>
                      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                    </Reveal>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16">
              <Center>
                <RevealText>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Our <span className="text-primary">Core Values</span>
                  </h2>
                </RevealText>
              </Center>

              <Reveal>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  What sets us apart in the international recruitment industry
                </p>
              </Reveal>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 items-stretch auto-cols-fr md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal key={index}>
                  <div className="bg-card border-2 border-border rounded-xl p-8 hover:border-primary transition-all duration-300 h-full flex flex-col">
                    <Reveal>
                      <div className="p-4 bg-primary/10 rounded-xl inline-block mb-6">
                        <Icon className="text-primary" size={32} />
                      </div>
                    </Reveal>

                    <Reveal>
                      <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    </Reveal>

                    <Reveal>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </Reveal>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Countries We Serve */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16">
              <Center>
                <RevealText>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Countries We <span className="text-primary">Serve</span>
                  </h2>
                </RevealText>
              </Center>

              <Reveal>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Connecting Bangladesh workers with opportunities in top destinations worldwide
                </p>
              </Reveal>
            </div>
          </Reveal>

          <div className="space-y-12 max-w-6xl mx-auto">
            {countries.map((country, index) => (
              <Reveal key={index}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <Reveal>
                    <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                      <img
                        src={country.image}
                        alt={`${country.name} opportunities`}
                        className="rounded-2xl shadow-elegant w-full h-[400px] object-cover border-2 border-border"
                      />
                    </div>
                  </Reveal>

                  <Reveal>
                    <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                      <Reveal>
                        <h3 className="text-3xl font-bold mb-4">{country.name}</h3>
                      </Reveal>

                      <Reveal>
                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                          {country.description}
                        </p>
                      </Reveal>

                      <Reveal>
                        <div className="space-y-3">
                          <p className="font-semibold text-foreground">Key Opportunities:</p>
                          {country.opportunities.map((opp, idx) => (
                            <Reveal key={idx}>
                              <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                <span className="text-foreground">{opp}</span>
                              </div>
                            </Reveal>
                          ))}
                        </div>
                      </Reveal>
                    </div>
                  </Reveal>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center bg-primary/5 border-2 border-primary/20 rounded-2xl p-12">
              <Center>
                <RevealText>
                  <h2 className="text-4xl font-bold mb-6">
                    Ready to Start Your <span className="text-primary">International Career?</span>
                  </h2>
                </RevealText>
              </Center>

              <Reveal>
                <p className="text-xl text-muted-foreground mb-8">
                  Contact us today for a free consultation and take the first step toward your global
                  opportunity.
                </p>
              </Reveal>

              <Reveal>
                <Button variant="hero" size="lg" className="text-lg px-12">
                  Book Your Consultation Now
                </Button>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
