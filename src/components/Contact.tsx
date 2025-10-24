// import { Phone, Mail, MapPin, Clock } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import { Button } from "@/components/ui/button";

// const Contact = () => {
//   const { t } = useTranslation();
  
//   const contactInfo = [
//     {
//       icon: Phone,
//       title: t("contact.callUs"),
//       details: ["+880-1234-567890", "+880-9876-543210"],
//     },
//     {
//       icon: Mail,
//       title: t("contact.emailUs"),
//       details: ["info@royalrollsmanpower.com", "recruitment@royalrollsmanpower.com"],
//     },
//     {
//       icon: MapPin,
//       title: t("contact.address"),
//       details: ["123 Motijheel C/A", t("contact.addressText")],
//     },
//     {
//       icon: Clock,
//       title: "Working Hours",
//       details: ["Sunday - Thursday: 9AM - 6PM", "Friday - Saturday: Closed"],
//     },
//   ];

//   return (
//     <section id="contact" className="py-24 bg-gradient-subtle">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             {t("contact.title")}
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             {t("contact.subtitle")}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
//           {contactInfo.map((info, index) => (
//             <div
//               key={index}
//               className="text-center p-6 bg-card border-2 border-border rounded-xl hover:border-primary hover:shadow-red transition-all duration-300"
//             >
//               <div className="inline-block p-4 bg-primary/10 rounded-xl mb-4">
//                 <info.icon className="text-primary" size={28} />
//               </div>
//               <h3 className="text-lg font-bold text-foreground mb-3">{info.title}</h3>
//               {info.details.map((detail, idx) => (
//                 <p key={idx} className="text-muted-foreground text-sm mb-1">
//                   {detail}
//                 </p>
//               ))}
//             </div>
//           ))}
//         </div>

//         <div className="text-center">
//           <Button variant="hero" size="lg" className="text-lg px-12">
//             Schedule a Consultation
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Reveal } from "./ui/reveal";
import { RevealText } from "./ui/revealText";

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.callUs"),
      details: ["+8801630234538", "+8801688505444"],
    },
    {
      icon: Mail,
      title: t("contact.emailUs"),
      details: ["royalrollsmanpower@yahoo.com" ],
    },
    {
      icon: MapPin,
      title: t("contact.address"),
      details: ["36 Purana Paltan Lane, Rokeya Mansion (3rd Floor), Dhaka-1000", t("contact.addressText")],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Sunday - Thursday: 9AM - 6PM", "Friday - Saturday: Closed"],
    },
  ];

  // Settings for cards + gaps
  const cardWidth = 280; // each card width in px
  const gap = 24; // gap between cards in px
  const totalWidth = cardWidth * 4 + gap * 3; // total width to match map

  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div
      className="flex justify-center items-center text-center">
        <div className="text-center items-center justify-center align-middle mb-12 px-4">
        {/* Header */}
         
          <h2 className="text-4xl text-center flex justify-center md:text-5xl font-bold mb-4">

            <RevealText>
         
              {t("contact.title")} 
            </RevealText>

          </h2>
         
         
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
 
      </div>
      </div>

      {/* Map aligned with cards */}
      <div
        className="mx-auto mb-12"
        style={{ width: `${totalWidth}px`, height: "400px" }}
      >
        <Reveal>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d233747.34729611073!2d90.412165!3d23.736597!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f619b1033d%3A0xb5fa99c070621381!2s3rd%20Floor%2C%2036%20Purana%20Paltan%2C%20Dhaka%201000%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1761284812030!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="rounded-xl  border-0"
            style={{
              width: "1192px",
              height: "430px"
            }}
            allowFullScreen
            loading="lazy"
            title="Company Location"
          ></iframe>
        </Reveal>
      </div>

      {/* Contact Cards */}
      <div
        className="flex justify-between flex-wrap mx-auto mb-12"
        style={{ width: `${totalWidth}px`, gap: `${gap}px` }}
      >
        {contactInfo.map((info, index) => (
          <Reveal key={index}>
            <div
              className="text-center p-6 bg-card border-2 border-border rounded-xl hover:border-primary hover:shadow-red transition-all duration-300"
              style={{ width: `${cardWidth}px` }}
            >
              <div className="inline-block p-4 bg-primary/10 rounded-xl mb-4">
                <info.icon className="text-primary" size={28} />
              </div>
              <RevealText>
                <h3 className="text-lg font-bold text-foreground mb-3">{info.title}</h3>
              </RevealText>
              {info.details.map((detail, idx) => (
                <RevealText key={idx}>
                  <p className="text-muted-foreground text-sm mb-1">{detail}</p>
                </RevealText>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center flex justify-center">
        <Reveal>
          <Button variant="hero" size="lg" className="text-lg px-12">
            Schedule a Consultation
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;



 