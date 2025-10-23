import { useTranslation } from "react-i18next";
import constructionImg from "@/assets/industries/construction.jpg";
import healthcareImg from "@/assets/industries/healthcare.jpg";
import hospitalityImg from "@/assets/industries/hospitality.jpg";
import manufacturingImg from "@/assets/industries/manufacturing.jpg";
import itServicesImg from "@/assets/industries/it-services.jpg";
import generalLaborImg from "@/assets/industries/general-labor.jpg";
import { Button } from "@/components/ui/button";

const Industries = () => {
  const { t } = useTranslation();
  const industries = [
    {
      image: constructionImg,
      title: "Construction & Engineering",
      alt: "Construction worker at site",
    },
    {
      image: healthcareImg,
      title: "Healthcare & Nursing",
      alt: "Healthcare professional",
    },
    {
      image: hospitalityImg,
      title: "Hospitality & Tourism",
      alt: "Luxury hospitality resort",
    },
    {
      image: manufacturingImg,
      title: "Manufacturing & Factory Work",
      alt: "Manufacturing worker",
    },
    {
      image: itServicesImg,
      title: "IT & Technical Services",
      alt: "IT technician",
    },
    {
      image: generalLaborImg,
      title: "General Labor & Support Staff",
      alt: "Support staff team",
    },
  ];

  const positions = [
    "House Maid",
    "Salesman",
    "IT",
    "Caregiver",
    "Agriculture",
    "Drivers",
    "Nurses",
    "Construction Workers",
    "Hotel Boys",
    "Welders",
    "Electricians",
    "Plumbers",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("industries.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
            {t("industries.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-red"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-xl font-bold text-foreground text-center">
                    {industry.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-subtle border-2 border-border rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-8 text-center">
            We provide manpower to a wide range of{" "}
            <span className="text-primary">high-demand sectors</span> across the globe:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-card border border-border rounded-lg p-3 hover:border-primary transition-colors"
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-foreground font-medium text-sm">{position}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="hero" size="lg">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
