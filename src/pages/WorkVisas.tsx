// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Globe, Shield, Users, CheckCircle, FileText, GraduationCap } from "lucide-react";

// const WorkVisas = () => {
//   const countries = [
//     {
//       name: "Japan",
//       description: "As a Sending Organization (SO), Royal Rolls Manpower provides direct and legal work visa support for Japan.",
//       features: [
//         "N5 & N4 Japanese language training with native instructors",
//         "Technical skill and specified skilled worker visa categories",
//         "Student-to-work transition support",
//         "Direct job placement under Japan's SO system"
//       ]
//     },
//     {
//       name: "Saudi Arabia",
//       description: "Saudi Arabia remains one of the largest employers of Bangladeshi workers.",
//       features: [
//         "Secure work visas in construction, hospitality, healthcare & more",
//         "Employer sponsorship & transparent contracts",
//         "Guidance for both skilled and unskilled categories",
//         "Full documentation and migration support"
//       ]
//     },
//     {
//       name: "UAE",
//       description: "The UAE offers vast opportunities for Bangladeshi workers.",
//       features: [
//         "Work visas in logistics, construction, hospitality, retail, and domestic sectors",
//         "Fast visa processing with legal compliance",
//         "Assistance with medical and documentation requirements",
//         "Long-term job opportunities with high earning potential"
//       ]
//     },
//     {
//       name: "Qatar",
//       description: "Qatar is in continuous demand for manpower, especially in the service and infrastructure sectors.",
//       features: [
//         "Work visas for skilled and unskilled workers",
//         "Transparent and verified recruitment process",
//         "Opportunities in construction, hospitality, and support roles",
//         "Secure migration under government regulations"
//       ]
//     },
//     {
//       name: "Kuwait",
//       description: "Strong demand across service and labor markets.",
//       features: [
//         "Hospitality, construction, and domestic staff roles",
//         "Verified recruitment with worker welfare in focus",
//         "Support for unskilled and semi-skilled manpower"
//       ]
//     },
//     {
//       name: "Jordan",
//       description: "A growing destination for Bangladeshi workers.",
//       features: [
//         "Jobs in the garments, manufacturing, and service sectors",
//         "Employer-sponsored visas with full compliance",
//         "Affordable migration process with worker protection"
//       ]
//     },
//     {
//       name: "Malaysia",
//       description: "A long-standing destination for Bangladeshi manpower.",
//       features: [
//         "Factory and manufacturing jobs are in high demand",
//         "Opportunities in electronics, textiles, and plantations",
//         "Legal migration with complete orientation support"
//       ]
//     },
//     {
//       name: "Russia",
//       description: "An emerging market for skilled and unskilled labor.",
//       features: [
//         "Jobs in construction, technical trades, and services",
//         "Employer-sponsored visas with full documentation",
//         "Growing opportunities for Bangladeshi workers"
//       ]
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-8">
//             <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
//               <span>Home</span>
//               <span>/</span>
//               <span>Work Visas</span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Work Visas</h1>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               Your Legal Gateway to Global Careers
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <p className="text-lg text-center max-w-4xl mx-auto mb-12">
//             At Royal Rolls Manpower, we make overseas job opportunities possible through legal, transparent, and government-approved work visa services. Whether you're aiming for Japan, Saudi Arabia, UAE, Qatar, or other destinations, our team ensures a smooth and secure process, so you can focus on building your future.
//           </p>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 px-4 bg-secondary/20">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="text-3xl font-bold text-center mb-12">Why Our Work Visa Services?</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-card p-6 rounded-lg border">
//               <Shield className="w-12 h-12 text-primary mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Govt. Approved SO</h3>
//               <p className="text-muted-foreground">Certified by the Governments of Japan & Bangladesh</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <Globe className="w-12 h-12 text-primary mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Multi-Country Coverage</h3>
//               <p className="text-muted-foreground">Work visas for Saudi Arabia, UAE, Qatar, Kuwait, Jordan, Malaysia, and Russia</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <Users className="w-12 h-12 text-primary mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Skilled & Unskilled Support</h3>
//               <p className="text-muted-foreground">Tailored visa assistance for professionals and general workers</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <GraduationCap className="w-12 h-12 text-primary mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Training & Preparation</h3>
//               <p className="text-muted-foreground">Language, cultural readiness, and pre-departure guidance</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <FileText className="w-12 h-12 text-primary mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Legal & Transparent</h3>
//               <p className="text-muted-foreground">No shortcuts, no hidden charges, complete compliance</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <CheckCircle className="w-12 h-12 text-primary mb-4" />
//               <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
//               <p className="text-muted-foreground">From application to job placement abroad</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Countries Section */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="text-3xl font-bold text-center mb-12">Work Visa Destinations</h2>
//           <div className="space-y-8">
//             {countries.map((country, index) => (
//               <div key={index} className="bg-card p-8 rounded-lg border">
//                 <h3 className="text-2xl font-bold mb-3">{country.name} Work Visas</h3>
//                 <p className="text-muted-foreground mb-4">{country.description}</p>
//                 <ul className="space-y-2 mb-6">
//                   {country.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-start gap-2">
//                       <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="flex flex-wrap gap-4">
//                   <Button>Apply for {country.name} Work Visa</Button>
//                   <Button variant="outline">Book a Consultation</Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* How We Help */}
//       <section className="py-16 px-4 bg-secondary/20">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="text-3xl font-bold text-center mb-12">How We Help You Get Your Work Visa</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="bg-card p-6 rounded-lg border">
//               <h3 className="text-xl font-semibold mb-2">Application Support</h3>
//               <p className="text-muted-foreground">Guidance for visa forms and employer requirements</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <h3 className="text-xl font-semibold mb-2">Document Verification</h3>
//               <p className="text-muted-foreground">Ensuring contracts and paperwork are legal & compliant</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <h3 className="text-xl font-semibold mb-2">Training & Orientation</h3>
//               <p className="text-muted-foreground">Job readiness, language, and cultural preparation</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <h3 className="text-xl font-semibold mb-2">Visa Processing</h3>
//               <p className="text-muted-foreground">Fast and transparent handling with no shortcuts</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border col-span-full">
//               <h3 className="text-xl font-semibold mb-2">Pre-Departure & After-Arrival Support</h3>
//               <p className="text-muted-foreground">Smooth transition for workers abroad</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl font-bold mb-6">Start Your Global Career Today</h2>
//           <p className="text-xl text-muted-foreground mb-8">
//             Whether your destination is Saudi Arabia, UAE, Qatar, Kuwait, Jordan, Malaysia, Russia, or Japan, Royal Rolls Manpower ensures your overseas journey is safe, legal, and rewarding.
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <Button size="lg">Apply for Your Work Visa Now</Button>
//             <Button size="lg" variant="outline">Book a Consultation</Button>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default WorkVisas;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import React, {useState} from "react";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Shield,
  Users,
  CheckCircle,
  FileText,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/revealText";
import { Center } from "@/components/ui/center";
import ContactModal from "@/components/ContactModal";
import { Link } from "react-router-dom";

const WorkVisas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const countries = [
    {
      name: "Japan",
      description:
        "As a Sending Organization (SO), Royal Rolls Manpower provides direct and legal work visa support for Japan.",
      features: [
        "N5 & N4 Japanese language training with native instructors",
        "Technical skill and specified skilled worker visa categories",
        "Student-to-work transition support",
        "Direct job placement under Japan's SO system",
      ],
    },
    {
      name: "Saudi Arabia",
      description:
        "Saudi Arabia remains one of the largest employers of Bangladeshi workers.",
      features: [
        "Secure work visas in construction, hospitality, healthcare & more",
        "Employer sponsorship & transparent contracts",
        "Guidance for both skilled and unskilled categories",
        "Full documentation and migration support",
      ],
    },
    {
      name: "UAE",
      description: "The UAE offers vast opportunities for Bangladeshi workers.",
      features: [
        "Work visas in logistics, construction, hospitality, retail, and domestic sectors",
        "Fast visa processing with legal compliance",
        "Assistance with medical and documentation requirements",
        "Long-term job opportunities with high earning potential",
      ],
    },
    {
      name: "Qatar",
      description:
        "Qatar is in continuous demand for manpower, especially in the service and infrastructure sectors.",
      features: [
        "Work visas for skilled and unskilled workers",
        "Transparent and verified recruitment process",
        "Opportunities in construction, hospitality, and support roles",
        "Secure migration under government regulations",
      ],
    },
    {
      name: "Kuwait",
      description: "Strong demand across service and labor markets.",
      features: [
        "Hospitality, construction, and domestic staff roles",
        "Verified recruitment with worker welfare in focus",
        "Support for unskilled and semi-skilled manpower",
      ],
    },
    {
      name: "Jordan",
      description: "A growing destination for Bangladeshi workers.",
      features: [
        "Jobs in the garments, manufacturing, and service sectors",
        "Employer-sponsored visas with full compliance",
        "Affordable migration process with worker protection",
      ],
    },
    {
      name: "Malaysia",
      description: "A long-standing destination for Bangladeshi manpower.",
      features: [
        "Factory and manufacturing jobs are in high demand",
        "Opportunities in electronics, textiles, and plantations",
        "Legal migration with complete orientation support",
      ],
    },
    {
      name: "Russia",
      description: "An emerging market for skilled and unskilled labor.",
      features: [
        "Jobs in construction, technical trades, and services",
        "Employer-sponsored visas with full documentation",
        "Growing opportunities for Bangladeshi workers",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <Center>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <RevealText>
                  Work Visas
              </RevealText>
                </h1>
            </Center>
            <Reveal>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Home</span>
                <span>/</span>
                <span>Work Visas</span>
              </div>
            </Reveal>
            <Reveal>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your Legal Gateway to Global Careers
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Reveal>
            <p className="text-lg text-center max-w-4xl mx-auto mb-12">
              At Royal Rolls Manpower, we make overseas job opportunities
              possible through legal, transparent, and government-approved work
              visa services. Whether you're aiming for Japan, Saudi Arabia, UAE,
              Qatar, or other destinations, our team ensures a smooth and secure
              process, so you can focus on building your future.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <Center>
              <h2 className="text-3xl font-bold text-center mb-12">
            <RevealText>
                Why Our Work Visa Services?
            </RevealText>
              </h2>
          </Center>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal>
              <div className="bg-card p-6 rounded-lg border">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Govt. Approved SO
                </h3>
                <p className="text-muted-foreground">
                  Certified by the Governments of Japan & Bangladesh
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-card p-6 rounded-lg border">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Multi-Country Coverage
                </h3>
                <p className="text-muted-foreground">
                  Work visas for Saudi Arabia, UAE, Qatar, Kuwait, Jordan,
                  Malaysia, and Russia
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-card p-6 rounded-lg border">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Skilled & Unskilled Support
                </h3>
                <p className="text-muted-foreground">
                  Tailored visa assistance for professionals and general workers
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-card p-6 rounded-lg border">
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Training & Preparation
                </h3>
                <p className="text-muted-foreground">
                  Language, cultural readiness, and pre-departure guidance
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-card p-6 rounded-lg border">
                <FileText className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Legal & Transparent
                </h3>
                <p className="text-muted-foreground">
                  No shortcuts, no hidden charges, complete compliance
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-card p-6 rounded-lg border">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  End-to-End Support
                </h3>
                <p className="text-muted-foreground">
                  From application to job placement abroad
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Center>
              <h2 className="text-3xl font-bold text-center mb-12">
            <RevealText>
                Work Visa Destinations
            </RevealText>
              </h2>
          </Center>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {countries.map((countries, index) => (
                <Reveal key={index}>
                  <div className="bg-card border-2 border-border rounded-xl p-8 hover:border-primary transition-all duration-300 h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-3">{countries.name}</h3>
                    <p className="text-muted-foreground mb-6">{countries.description}</p>
                    <ul className="space-y-3 mb-6 flex-1">
                      {countries.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={18} />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="hero" className="w-full" onClick={() => setIsModalOpen(true)}>
                      Book a Consultation
                    </Button>
                  </div>
                </Reveal>
              ))}
            </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <Center>
              <h2 className="text-3xl font-bold text-center mb-12">
            <RevealText>
                How We Help You Get Your Work Visa
            </RevealText>
              </h2>
          </Center>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Application Support",
                desc: "Guidance for visa forms and employer requirements",
              },
              {
                title: "Document Verification",
                desc: "Ensuring contracts and paperwork are legal & compliant",
              },
              {
                title: "Training & Orientation",
                desc: "Job readiness, language, and cultural preparation",
              },
              {
                title: "Visa Processing",
                desc: "Fast and transparent handling with no shortcuts",
              },
              {
                title: "Pre-Departure & After-Arrival Support",
                desc: "Smooth transition for workers abroad",
                full: true,
              },
            ].map((item, idx) => (
              <Reveal key={idx}>
                <div
                  className={`bg-card p-6 rounded-lg border ${
                    item.full ? "col-span-full" : ""
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Center>
              <h2 className="text-3xl font-bold mb-6">
            <RevealText>
                Start Your Global Career Today
            </RevealText>
              </h2>
          </Center>
          <Reveal>
            <p className="text-xl text-muted-foreground mb-8">
              Whether your destination is Saudi Arabia, UAE, Qatar, Kuwait,
              Jordan, Malaysia, Russia, or Japan, Royal Rolls Manpower ensures
              your overseas journey is safe, legal, and rewarding.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">Apply for Your Work Visa Now</Button>
              <Button size="lg" variant="outline">
                Book a Consultation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
       <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default WorkVisas;
