// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { GraduationCap, Globe, FileCheck, Plane, BookOpen, Users } from "lucide-react";

// const StudentVisas = () => {
//   const destinations = [
//     {
//       name: "Japan",
//       icon: "🇯🇵",
//       description: "Japan is one of the most popular destinations for Bangladeshi students due to its high-quality education system, opportunities to work part-time while studying, and affordable living costs compared to many Western countries.",
//       services: [
//         "Guidance on Japanese language preparation",
//         "Assistance with university and vocational school applications",
//         "Complete visa application support",
//         "Pre-departure orientation for smooth settlement in Japan"
//       ]
//     },
//     {
//       name: "United Kingdom (UK)",
//       icon: "🇬🇧",
//       description: "The UK has always been a top choice for Bangladeshi students because of its globally ranked universities and shorter degree durations (Bachelor's in 3 years, Master's in 1 year).",
//       services: [
//         "University & course selection guidance",
//         "Tier 4 Student Visa application support",
//         "Assistance with financial documentation",
//         "Accommodation and travel arrangements"
//       ]
//     },
//     {
//       name: "United States (USA)",
//       icon: "🇺🇸",
//       description: "The USA remains the dream destination for students seeking world-class education and career opportunities. With flexible programs and diverse scholarship options, it attracts thousands of Bangladeshi students every year.",
//       services: [
//         "University admissions counseling",
//         "F1 Visa application support",
//         "Guidance on scholarships & financial aid",
//         "Pre-departure briefings"
//       ]
//     },
//     {
//       name: "Canada",
//       icon: "🇨🇦",
//       description: "Canada is well-known for its affordable education and post-study work opportunities, making it one of the most preferred study destinations for Bangladeshi students.",
//       services: [
//         "College and university admissions",
//         "Study Permit application assistance",
//         "SOP (Statement of Purpose) preparation guidance",
//         "Work and settlement pathway advice"
//       ]
//     },
//     {
//       name: "Australia",
//       icon: "🇦🇺",
//       description: "Australia offers top universities, a safe environment, and the chance to work while studying. Many Bangladeshi students also prefer Australia because of its post-study work visa policies.",
//       services: [
//         "University and program selection",
//         "Genuine Temporary Entrant (GTE) guidance",
//         "Student visa application",
//         "Health insurance and accommodation support"
//       ]
//     },
//     {
//       name: "Malaysia",
//       icon: "🇲🇾",
//       description: "For students looking for affordable tuition fees and living expenses, Malaysia is an excellent option. Its universities are recognized worldwide, and many programs are linked with UK, Australian, and US universities.",
//       services: [
//         "University admission process",
//         "Visa approval assistance",
//         "Accommodation & travel guidance"
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
//               <span>Student Visas</span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Visas</h1>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               Bangladesh's Trusted Overseas Education Partner
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="text-3xl font-bold text-center mb-8">Build Your Future with Global Education Opportunities</h2>
//           <p className="text-lg text-center max-w-4xl mx-auto mb-8">
//             Studying abroad is no longer just a dream; it's a reality for thousands of Bangladeshi students every year. At Royal Rolls, we help students from Bangladesh secure their student visas for top destinations, including Japan, UK, USA, Canada, Australia, or Malaysia.
//           </p>
//           <p className="text-lg text-center max-w-4xl mx-auto">
//             As a government-approved manpower and overseas education consultancy in Bangladesh, we guide you step by step, from choosing the right course to visa approval and even air ticket booking.
//           </p>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 px-4 bg-secondary/20">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="text-3xl font-bold text-center mb-12">Why Choose Royal Rolls for Student Visa Services?</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="bg-card p-6 rounded-lg border text-center">
//               <FileCheck className="w-12 h-12 text-primary mb-4 mx-auto" />
//               <h3 className="text-xl font-semibold mb-2">Government-Approved SO</h3>
//               <p className="text-muted-foreground">Recognized by both the Government of Bangladesh and Japan</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border text-center">
//               <Globe className="w-12 h-12 text-primary mb-4 mx-auto" />
//               <h3 className="text-xl font-semibold mb-2">Strong Global Network</h3>
//               <p className="text-muted-foreground">Direct partnerships with universities and colleges worldwide</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border text-center">
//               <Users className="w-12 h-12 text-primary mb-4 mx-auto" />
//               <h3 className="text-xl font-semibold mb-2">Expert Counseling</h3>
//               <p className="text-muted-foreground">Personalized guidance for Bangladeshi students</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border text-center">
//               <Plane className="w-12 h-12 text-primary mb-4 mx-auto" />
//               <h3 className="text-xl font-semibold mb-2">Full Support</h3>
//               <p className="text-muted-foreground">From application to visa stamping and pre-departure briefing</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Study Destinations */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="text-3xl font-bold text-center mb-12">Study Destinations for Bangladeshi Students</h2>
//           <div className="space-y-8">
//             {destinations.map((destination, index) => (
//               <div key={index} className="bg-card p-8 rounded-lg border">
//                 <div className="flex items-center gap-3 mb-4">
//                   <span className="text-4xl">{destination.icon}</span>
//                   <h3 className="text-2xl font-bold">{destination.name}</h3>
//                 </div>
//                 <p className="text-muted-foreground mb-6">{destination.description}</p>
//                 <ul className="space-y-2 mb-6">
//                   {destination.services.map((service, idx) => (
//                     <li key={idx} className="flex items-start gap-2">
//                       <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
//                       <span>{service}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Services */}
//       <section className="py-16 px-4 bg-secondary/20">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Complete Student Visa Services</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="bg-card p-6 rounded-lg border">
//               <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
//               <p className="text-muted-foreground">Country, university, and program selection</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <h3 className="text-xl font-semibold mb-2">Application Assistance</h3>
//               <p className="text-muted-foreground">Document preparation, admission application, and processing</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <h3 className="text-xl font-semibold mb-2">Visa Processing</h3>
//               <p className="text-muted-foreground">End-to-end support for student visa filing in Bangladesh</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border">
//               <h3 className="text-xl font-semibold mb-2">Financial Guidance</h3>
//               <p className="text-muted-foreground">Assistance with bank statements, scholarships, and part-time job opportunities</p>
//             </div>
//             <div className="bg-card p-6 rounded-lg border col-span-full">
//               <h3 className="text-xl font-semibold mb-2">Pre-Departure Support</h3>
//               <p className="text-muted-foreground">Air ticket booking, accommodation arrangements, and travel briefing</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Students Trust Us */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="text-3xl font-bold text-center mb-12">Why Bangladeshi Students Trust Us</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="text-center p-6">
//               <div className="text-4xl font-bold text-primary mb-2">10+</div>
//               <p className="text-muted-foreground">Years of Experience in overseas education consultancy</p>
//             </div>
//             <div className="text-center p-6">
//               <div className="text-4xl font-bold text-primary mb-2">100%</div>
//               <p className="text-muted-foreground">Transparent process with no hidden costs</p>
//             </div>
//             <div className="text-center p-6">
//               <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
//               <p className="text-muted-foreground">Successful student visa approvals</p>
//             </div>
//             <div className="text-center p-6">
//               <div className="text-4xl font-bold text-primary mb-2">24/7</div>
//               <p className="text-muted-foreground">Dedicated team guidance until you land in your destination</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 bg-secondary/20">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-3xl font-bold mb-6">Start Your Journey Today</h2>
//           <p className="text-xl text-muted-foreground mb-8">
//             Your dream of studying abroad begins with the right guidance. At Royal Rolls, we are not just consultants; we are your partners in shaping a successful future.
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <Button size="lg">Apply Now</Button>
//             <Button size="lg" variant="outline">Book a Consultation</Button>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default StudentVisas;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Globe,
  FileCheck,
  Plane,
  BookOpen,
  Users,
} from "lucide-react";
import { Center } from "@/components/ui/center";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/revealText";

const StudentVisas = () => {
  const destinations = [
    {
      name: "Japan",
      icon: "🇯🇵",
      description:
        "Japan is one of the most popular destinations for Bangladeshi students due to its high-quality education system, opportunities to work part-time while studying, and affordable living costs compared to many Western countries.",
      services: [
        "Guidance on Japanese language preparation",
        "Assistance with university and vocational school applications",
        "Complete visa application support",
        "Pre-departure orientation for smooth settlement in Japan",
      ],
    },
    {
      name: "United Kingdom (UK)",
      icon: "🇬🇧",
      description:
        "The UK has always been a top choice for Bangladeshi students because of its globally ranked universities and shorter degree durations (Bachelor's in 3 years, Master's in 1 year).",
      services: [
        "University & course selection guidance",
        "Tier 4 Student Visa application support",
        "Assistance with financial documentation",
        "Accommodation and travel arrangements",
      ],
    },
    {
      name: "United States (USA)",
      icon: "🇺🇸",
      description:
        "The USA remains the dream destination for students seeking world-class education and career opportunities. With flexible programs and diverse scholarship options, it attracts thousands of Bangladeshi students every year.",
      services: [
        "University admissions counseling",
        "F1 Visa application support",
        "Guidance on scholarships & financial aid",
        "Pre-departure briefings",
      ],
    },
    {
      name: "Canada",
      icon: "🇨🇦",
      description:
        "Canada is well-known for its affordable education and post-study work opportunities, making it one of the most preferred study destinations for Bangladeshi students.",
      services: [
        "College and university admissions",
        "Study Permit application assistance",
        "SOP (Statement of Purpose) preparation guidance",
        "Work and settlement pathway advice",
      ],
    },
    {
      name: "Australia",
      icon: "🇦🇺",
      description:
        "Australia offers top universities, a safe environment, and the chance to work while studying. Many Bangladeshi students also prefer Australia because of its post-study work visa policies.",
      services: [
        "University and program selection",
        "Genuine Temporary Entrant (GTE) guidance",
        "Student visa application",
        "Health insurance and accommodation support",
      ],
    },
    {
      name: "Malaysia",
      icon: "🇲🇾",
      description:
        "For students looking for affordable tuition fees and living expenses, Malaysia is an excellent option. Its universities are recognized worldwide, and many programs are linked with UK, Australian, and US universities.",
      services: [
        "University admission process",
        "Visa approval assistance",
        "Accommodation & travel guidance",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto max-w-6xl">
          <Center>
            <RevealText>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Student Visas
              </h1>
            </RevealText>
          </Center>
          <Reveal>
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Home</span>
                <span>/</span>
                <span>Student Visas</span>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Bangladesh's Trusted Overseas Education Partner
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Center>
              <h2 className="text-3xl font-bold text-center mb-8">
            <RevealText>
                Build Your Future with Global Education Opportunities
            </RevealText>
              </h2>
          </Center>
          <Reveal>
            <p className="text-lg text-center max-w-4xl mx-auto mb-8">
              Studying abroad is no longer just a dream; it's a reality for
              thousands of Bangladeshi students every year. At Royal Rolls, we
              help students from Bangladesh secure their student visas for top
              destinations, including Japan, UK, USA, Canada, Australia, or
              Malaysia.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-lg text-center max-w-4xl mx-auto">
              As a government-approved manpower and overseas education
              consultancy in Bangladesh, we guide you step by step, from
              choosing the right course to visa approval and even air ticket
              booking.
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
                Why Choose Royal Rolls for Student Visa Services?
            </RevealText>
              </h2>
          </Center>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal>
              <div className="bg-card p-6 rounded-lg border text-center">
                <FileCheck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">
                  Government-Approved SO
                </h3>
                <p className="text-muted-foreground">
                  Recognized by both the Government of Bangladesh and Japan
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-card p-6 rounded-lg border text-center">
                <Globe className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">
                  Strong Global Network
                </h3>
                <p className="text-muted-foreground">
                  Direct partnerships with universities and colleges worldwide
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-card p-6 rounded-lg border text-center">
                <Users className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">
                  Expert Counseling
                </h3>
                <p className="text-muted-foreground">
                  Personalized guidance for Bangladeshi students
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-card p-6 rounded-lg border text-center">
                <Plane className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Full Support</h3>
                <p className="text-muted-foreground">
                  From application to visa stamping and pre-departure briefing
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Study Destinations */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Center>
              <h2 className="text-3xl font-bold text-center mb-12">
            <RevealText>
                Study Destinations for Bangladeshi Students
            </RevealText>
              </h2>
          </Center>
          <div className="space-y-8">
            {destinations.map((destination, index) => (
              <Reveal key={index}>
                <div className="bg-card p-8 rounded-lg border">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{destination.icon}</span>
                    <h3 className="text-2xl font-bold">{destination.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {destination.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {destination.services.map((service, idx) => (
                      <Reveal key={idx}>
                        <li className="flex items-start gap-2">
                          <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <Center>
              <h2 className="text-3xl font-bold text-center mb-12">
            <RevealText>
                Our Complete Student Visa Services
            </RevealText>
              </h2>
          </Center>
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">
                  Free Consultation
                </h3>
                <p className="text-muted-foreground">
                  Country, university, and program selection
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">
                  Application Assistance
                </h3>
                <p className="text-muted-foreground">
                  Document preparation, admission application, and processing
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">Visa Processing</h3>
                <p className="text-muted-foreground">
                  End-to-end support for student visa filing in Bangladesh
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-2">
                  Financial Guidance
                </h3>
                <p className="text-muted-foreground">
                  Assistance with bank statements, scholarships, and part-time
                  job opportunities
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-card p-6 rounded-lg border col-span-full">
                <h3 className="text-xl font-semibold mb-2">
                  Pre-Departure Support
                </h3>
                <p className="text-muted-foreground">
                  Air ticket booking, accommodation arrangements, and travel
                  briefing
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Students Trust Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Center>
              <h2 className="text-3xl font-bold text-center mb-12">
            <RevealText>
                Why Bangladeshi Students Trust Us
            </RevealText>
              </h2>
          </Center>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">
                  Years of Experience in overseas education consultancy
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">
                  Transparent process with no hidden costs
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">
                  1,000+
                </div>
                <p className="text-muted-foreground">
                  Successful student visa approvals
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">
                  Dedicated team guidance until you land in your destination
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <Center>
            <h2 className="text-3xl font-bold mb-6">
              <RevealText>Start Your Journey Today</RevealText>
            </h2>
          </Center>
          <Reveal>
            <p className="text-xl text-muted-foreground mb-8">
              Your dream of studying abroad begins with the right guidance. At
              Royal Rolls, we are not just consultants; we are your partners in
              shaping a successful future.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">Apply Now</Button>
              <Button size="lg" variant="outline">
                Book a Consultation
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentVisas;
