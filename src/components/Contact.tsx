import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useTranslation();
  
  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.callUs"),
      details: ["+880-1234-567890", "+880-9876-543210"],
    },
    {
      icon: Mail,
      title: t("contact.emailUs"),
      details: ["info@royalrollsmanpower.com", "recruitment@royalrollsmanpower.com"],
    },
    {
      icon: MapPin,
      title: t("contact.address"),
      details: ["123 Motijheel C/A", t("contact.addressText")],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Sunday - Thursday: 9AM - 6PM", "Friday - Saturday: Closed"],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card border-2 border-border rounded-xl hover:border-primary hover:shadow-red transition-all duration-300"
            >
              <div className="inline-block p-4 bg-primary/10 rounded-xl mb-4">
                <info.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-muted-foreground text-sm mb-1">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-12">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
