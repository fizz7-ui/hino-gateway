// import { Languages, Wrench, BookOpen, Award } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const Training = () => {
//   const programs = [
//     {
//       icon: Languages,
//       title: "Japanese Language Training",
//       description: "Comprehensive JLPT preparation and conversational Japanese for workplace success.",
//       duration: "3-6 months",
//     },
//     {
//       icon: Wrench,
//       title: "Technical Skills Training",
//       description: "Industry-specific technical training for construction, manufacturing, and more.",
//       duration: "2-4 months",
//     },
//     {
//       icon: BookOpen,
//       title: "Cultural Orientation",
//       description: "Cultural adaptation training to ensure smooth integration in your destination country.",
//       duration: "2-4 weeks",
//     },
//     {
//       icon: Award,
//       title: "Professional Certification",
//       description: "Internationally recognized certifications to enhance your employability abroad.",
//       duration: "1-3 months",
//     },
//   ];

//   return (
//     <section id="training" className="py-24 bg-gradient-subtle">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Training <span className="text-primary">Programs</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Preparing you for international success with comprehensive training and certification
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           {programs.map((program, index) => (
//             <Card
//               key={index}
//               className="group hover:shadow-red transition-all duration-300 border-2 hover:border-primary"
//             >
//               <CardHeader>
//                 <div className="flex items-start justify-between mb-4">
//                   <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
//                     <program.icon className="text-primary" size={32} />
//                   </div>
//                   <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
//                     {program.duration}
//                   </span>
//                 </div>
//                 <CardTitle className="text-2xl mb-3">{program.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground text-base leading-relaxed">
//                   {program.description}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <div className="inline-block p-8 bg-primary/5 border-2 border-primary/20 rounded-2xl">
//             <p className="text-foreground text-lg font-semibold mb-2">
//               All training programs include placement assistance
//             </p>
//             <p className="text-muted-foreground">
//               We don't just train you – we help you land your dream opportunity abroad
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Training;
import { MapPinned, PlaneTakeoff, Ticket, ReceiptText } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/revealText";

const Training = () => {
  const programs = [
    {
      icon: MapPinned,
      title: "Taking Care",
      description: "Immigration & Visa Process",
    },
    {
      icon: PlaneTakeoff,
      title: "Explore the World",
      description: "Affordable Travel Packages",
    },
    {
      icon: Ticket,
      title: "Book Your Flight",
      description: "Reliable & Hassle-Free Ticketing",
    },
    {
      icon: ReceiptText,
      title: "Apply Online",
      description: "Quick & Easy Visa Application",
    },
  ];

  return (
    <section id="training" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 text-center">
        {/* HEADER */}
        <div className="mb-16 flex flex-col items-center justify-center">
          <RevealText>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Extra <span className="text-primary">Services</span>
            </h2>
          </RevealText>
          <Reveal>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Preparing you for international success journey
            </p>
          </Reveal>
        </div>

        {/* CARDS CONTAINER */}
        <div
          className="
            grid grid-flow-col md:grid-flow-row max-md:grid-flow-row
            lg:grid-flow-col
            justify-center items-center gap-6 md:gap-8
          "
        >
          {programs.map((program, index) => (
            <Reveal key={index}>
              <Card
                className="group transition-all duration-300 rounded-2xl bg-white border border-border 
                           hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 
                           flex items-center p-6 justify-start"
                style={{
                  minWidth: "299px",
                  maxWidth: "330px",
                  height: "198px",
                }}
              >
                {/* ICON */}
                <div className="flex-shrink-0 p-5 bg-primary/10 rounded-full group-hover:bg-primary/20 flex items-center justify-center">
                  <program.icon className="text-primary" size={50} />
                </div>

                {/* CONTENT */}
                <CardContent className="flex flex-col justify-center ml-6 gap-2">
                  <CardTitle className="text-left text-sm text-gray-400 font-semibold">
                    {program.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-left text-sm md:text-base text-slate-900 leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-16 flex justify-center">
          <Reveal>
            <div className="inline-block p-8 bg-primary/5 border-2 border-primary/20 rounded-2xl text-center">
              <p className="text-foreground text-lg font-semibold mb-2">
                <RevealText>
                  All training programs include placement assistance
                </RevealText>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Training;
