import { BookOpen, Award, Globe, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import japaneseTrainingImg from "@/assets/japanese-training.jpg";

const LanguageTraining = () => {
  const { t } = useTranslation();
  const programs = [
    {
      icon: BookOpen,
      title: t("languageTraining.jipt"),
      description: "Complete Japanese Language Proficiency Test preparation",
    },
    {
      icon: Award,
      title: t("languageTraining.ssw"),
      description: "Specialized training for skilled worker visas in Japan",
    },
    {
      icon: GraduationCap,
      title: t("languageTraining.titp"),
      description: "Technical intern training for hands-on work experience",
    },
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("languageTraining.title")} with{" "}
              <span className="text-primary">{t("languageTraining.subtitle")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional Japanese language training programs designed to prepare you for work and
              life in Japan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img
                src={japaneseTrainingImg}
                alt="Japanese language training classroom"
                className="rounded-2xl shadow-elegant w-full object-cover"
              />
            </div>

            <div className="space-y-6">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary hover:shadow-red transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <program.icon className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                      <p className="text-muted-foreground">{program.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 md:p-12 text-center">
            <Globe className="text-primary mx-auto mb-6" size={56} />
            <h3 className="text-3xl font-bold mb-4">
              Start Your Journey to <span className="text-primary">Japan</span> Today
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Our comprehensive language programs are designed by experts to ensure you're fully
              prepared for Japanese workplace culture and communication.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-12">
              {t("languageTraining.cta")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageTraining;
