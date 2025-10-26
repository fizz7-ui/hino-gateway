import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, FileText, Search, Send, Briefcase, UserCheck, ClipboardList, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/revealText";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import { Link } from "react-router-dom";
import { Center } from "@/components/ui/center";
import { useTranslation } from "react-i18next";
 
const JobSeekersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const workVisas = [
    {
      country: "Japan",
      title: t("jobSeekers.workVisas.japan.title"),
      description: t("jobSeekers.workVisas.japan.desc"),
      features: Object.values(t("jobSeekers.workVisas.japan.features", { returnObjects: true }))
    },
    {
      country: "Saudi Arabia",
      title: t("jobSeekers.workVisas.saudiArabia.title"),
      description: t("jobSeekers.workVisas.saudiArabia.desc"),
      features: Object.values(t("jobSeekers.workVisas.saudiArabia.features", { returnObjects: true }))
    },
    {
      country: "UAE",
      title: t("jobSeekers.workVisas.uae.title"),
      description: t("jobSeekers.workVisas.uae.desc"),
      features: Object.values(t("jobSeekers.workVisas.uae.features", { returnObjects: true }))
    },
    {
      country: "Qatar",
      title: t("jobSeekers.workVisas.qatar.title"),
      description: t("jobSeekers.workVisas.qatar.desc"),
      features: Object.values(t("jobSeekers.workVisas.qatar.features", { returnObjects: true }))
    },
    {
      country: "Kuwait",
      title: t("jobSeekers.workVisas.kuwait.title"),
      description: t("jobSeekers.workVisas.kuwait.desc"),
      features: Object.values(t("jobSeekers.workVisas.kuwait.features", { returnObjects: true }))
    },
    {
      country: "Jordan",
      title: t("jobSeekers.workVisas.jordan.title"),
      description: t("jobSeekers.workVisas.jordan.desc"),
      features: Object.values(t("jobSeekers.workVisas.jordan.features", { returnObjects: true }))
    },
    {
      country: "Malaysia",
      title: t("jobSeekers.workVisas.malaysia.title"),
      description: t("jobSeekers.workVisas.malaysia.desc"),
      features: Object.values(t("jobSeekers.workVisas.malaysia.features", { returnObjects: true }))
    },
    {
      country: "Russia",
      title: t("jobSeekers.workVisas.russia.title"),
      description: t("jobSeekers.workVisas.russia.desc"),
      features: Object.values(t("jobSeekers.workVisas.russia.features", { returnObjects: true }))
    }
  ];

  const applicationSteps = [
    {
      icon: Send,
      step: "1",
      title: t("jobSeekers.recruitment.steps.publicAnnouncement.title"),
      description: t("jobSeekers.recruitment.steps.publicAnnouncement.desc")
    },
    {
      icon: ClipboardList,
      step: "2",
      title: t("jobSeekers.recruitment.steps.candidateRegistration.title"),
      description: t("jobSeekers.recruitment.steps.candidateRegistration.desc")
    },
    {
      icon: UserCheck,
      step: "3",
      title: t("jobSeekers.recruitment.steps.primaryInterview.title"),
      description: t("jobSeekers.recruitment.steps.primaryInterview.desc")
    },
    {
      icon: Briefcase,
      step: "4",
      title: t("jobSeekers.recruitment.steps.languageTraining.title"),
      description: t("jobSeekers.recruitment.steps.languageTraining.desc")
    },
    {
      icon: FileCheck,
      step: "5",
      title: t("jobSeekers.recruitment.steps.proficiencyTest.title"),
      description: t("jobSeekers.recruitment.steps.proficiencyTest.desc")
    },
    {
      icon: Briefcase,
      step: "6",
      title: t("jobSeekers.recruitment.steps.jobOffer.title"),
      description: t("jobSeekers.recruitment.steps.jobOffer.desc")
    },
    {
      icon: FileText,
      step: "7",
      title: t("jobSeekers.recruitment.steps.visaProcessing.title"),
      description: t("jobSeekers.recruitment.steps.visaProcessing.desc")
    },
    {
      icon: Send,
      step: "8",
      title: t("jobSeekers.recruitment.steps.departure.title"),
      description: t("jobSeekers.recruitment.steps.departure.desc")
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {/* Header Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Center>
                <RevealText>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {t("jobSeekers.title")}
                  </h1>
                </RevealText>
              </Center>
              <Reveal>
                <p className="text-xl text-muted-foreground">{t("jobSeekers.desc")}</p>
              </Reveal>
            </div>

            {/* Work Visas - Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {workVisas.map((visa, index) => (
                <Reveal key={index}>
                  <div className="bg-card border-2 border-border rounded-xl p-8 hover:border-primary transition-all duration-300 h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-3">{visa.title}</h3>
                    <p className="text-muted-foreground mb-6">{visa.description}</p>
                    <ul className="space-y-3 mb-6 flex-1">
                      {visa.features.map((feature, idx) => (
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

        {/* Simple Application Process */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Center>
                <div className="flex flex-col text-center">
                  <Center>
                    <RevealText>
                      <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t("jobSeekers.recruitment.title")}
                      </h2>
                    </RevealText>
                  </Center>
                  <RevealText>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                      {t("jobSeekers.recruitment.subtitle")}
                    </p>
                  </RevealText>
                </div>
              </Center>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
                <div className="space-y-8">
                  {applicationSteps.map((step, index) => (
                    <Reveal key={index}>
                      <div className="relative flex gap-6">
                        <div className="relative z-10 flex-shrink-0">
                          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                            <step.icon className="text-primary-foreground" size={28} />
                          </div>
                        </div>
                        <div className="flex-1 bg-card border-2 border-border rounded-xl p-6 hover:border-primary transition-all duration-300">
                          <div className="flex flex-col text-left justify-items-startitems-center gap-3 mb-3">
                            <div className="text-2xl font-bold text-primary">Step {step.step}</div>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                          </div>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Find Your Dream Job */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Center>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <RevealText>
                    {t("jobSeekers.dreamJob.title")}
                  </RevealText>
                </h2>
              </Center>
              <Reveal>
                <p className="text-xl text-muted-foreground mb-12">
                  {t("jobSeekers.dreamJob.desc")}
                </p>
              </Reveal>
              <Reveal>
                <Link to="/application">
                  <Button variant="hero" size="lg" className="text-lg">
                    {t("jobSeekers.dreamJob.cta")}
                  </Button>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};


export default JobSeekersPage;
