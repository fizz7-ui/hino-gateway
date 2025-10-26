// import { Briefcase, GraduationCap, Plane, FileText } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// const Services = () => {
//   const { t } = useTranslation();
  
//   const services = [
//     {
//       icon: Briefcase,
//       title: t("services.recruitment.title"),
//       description: t("services.recruitment.desc"),
//       features: ["Construction Workers", "Factory Staff", "Hospitality", "Technical Jobs"],
//     },
//     {
//       icon: GraduationCap,
//       title: "Study Abroad Programs",
//       description:
//         "Comprehensive student visa services and guidance for pursuing education internationally.",
//       features: ["University Admissions", "Student Visas", "Education Counseling", "Scholarship Assistance"],
//     },
//     {
//       icon: FileText,
//       title: t("services.visa.title"),
//       description: t("services.visa.desc"),
//       features: ["Work Visas", "Tourist Visas", "Hajj & Umrah", "Family Visas"],
//     },
//     {
//       icon: Plane,
//       title: "Travel & Tour Packages",
//       description:
//         "Complete travel solutions including air ticketing and customized tour packages worldwide.",
//       features: ["Air Ticketing", "Tour Packages", "Travel Insurance", "Itinerary Planning"],
//     },
//   ];

//   return (
//     <section id="services" className="py-24 bg-gradient-subtle">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             {t("services.title")}
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             {t("services.subtitle")}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <Card
//               key={index}
//               className="group hover:shadow-red transition-all duration-300 hover:-translate-y-2 border-2"
//             >
//               <CardHeader>
//                 <div className="mb-4 inline-block p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
//                   <service.icon className="text-primary" size={32} />
//                 </div>
//                 <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
//                 <CardDescription className="text-base">{service.description}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-2">
//                   {service.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center text-sm text-muted-foreground">
//                       <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import { Briefcase, GraduationCap, Plane, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "./ui/reveal";
import { RevealText } from "./ui/revealText";
import { Center } from "./ui/center";

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Briefcase,
      title: t("services.recruitment.title"),
      description: t("services.recruitment.desc"),
      features: ["Construction Workers", "Factory Staff", "Hospitality", "Technical Jobs"],
    },
    {
      icon: GraduationCap,
      title: "Study Abroad Programs",
      description:
        "Comprehensive student visa services and guidance for pursuing education internationally.",
      features: ["University Admissions", "Student Visas", "Education Counseling", "Scholarship Assistance"],
    },
    {
      icon: FileText,
      title: t("services.visa.title"),
      description: t("services.visa.desc"),
      features: ["Work Visas", "Tourist Visas", "Hajj & Umrah", "Family Visas"],
    },
    {
      icon: Plane,
      title: "Travel & Tour Packages",
      description:
        "Complete travel solutions including air ticketing and customized tour packages worldwide.",
      features: ["Air Ticketing", "Tour Packages", "Travel Insurance", "Itinerary Planning"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-16">
            <Center>
              <RevealText>
              <h2 className="text-4xl md:text-5xl text-left font-bold mb-4">
              {t("services.title")}
            </h2>
            </RevealText>
            </Center>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {services.map((service, index) => (
    <Reveal key={index}>
      <div className="pt-6 "  > {/* added spacing to avoid hover clip */}
        <Card
          className="group hover:shadow-red transition-all duration-300 hover:-translate-y-2 border-2"
        >
          <CardHeader>
            <div className="mb-4 inline-block w-16 p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
              <service.icon className="text-primary" size={32} />
            </div>
            <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
            <CardDescription className="text-base">{service.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </Reveal>
  ))}
</div>

      </div>
    </section>
  );
};

export default Services;
