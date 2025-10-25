import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2, FileText, Search, Send, Briefcase, UserCheck, ClipboardList, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/revealText";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import { Link } from "react-router-dom";

const JobSeekersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const workVisas = [
    {
      country: "Japan",
      title: "Japan Work Visas",
      description: "As a Sending Organization (SO), Royal Rolls Manpower provides direct and legal work visa support for Japan.",
      features: [
        "N5 & N4 Japanese language training with native instructors",
        "Technical skill and specified skilled worker visa categories",
        "Student-to-work transition support",
        "Direct job placement under Japan's SO system"
      ]
    },
    {
      country: "Saudi Arabia",
      title: "Saudi Arabia Work Visas",
      description: "Saudi Arabia remains one of the largest employers of Bangladeshi workers.",
      features: [
        "Secure work visas in construction, hospitality, healthcare & more",
        "Employer sponsorship & transparent contracts",
        "Guidance for both skilled and unskilled categories",
        "Full documentation and migration support"
      ]
    },
    {
      country: "UAE",
      title: "UAE Work Visas",
      description: "The UAE offers vast opportunities for Bangladeshi workers.",
      features: [
        "Work visas in logistics, construction, hospitality, retail, and domestic sectors",
        "Fast visa processing with legal compliance",
        "Assistance with medical and documentation requirements",
        "Long-term job opportunities with high earning potential"
      ]
    },
    {
      country: "Qatar",
      title: "Qatar Work Visas",
      description: "Qatar is in continuous demand for manpower, especially in the service and infrastructure sectors.",
      features: [
        "Work visas for skilled and unskilled workers",
        "Transparent and verified recruitment process",
        "Opportunities in construction, hospitality, and support roles",
        "Secure migration under government regulations"
      ]
    },
    {
      country: "Kuwait",
      title: "Kuwait Work Visas",
      description: "Strong demand across service and labor markets.",
      features: [
        "Hospitality, construction, and domestic staff roles",
        "Verified recruitment with worker welfare in focus",
        "Support for unskilled and semi-skilled manpower"
      ]
    },
    {
      country: "Jordan",
      title: "Jordan Work Visas",
      description: "A growing destination for Bangladeshi workers.",
      features: [
        "Jobs in the garments, manufacturing, and service sectors",
        "Employer-sponsored visas with full compliance",
        "Affordable migration process with worker protection"
      ]
    },
    {
      country: "Malaysia",
      title: "Malaysia Work Visas",
      description: "A long-standing destination for Bangladeshi manpower.",
      features: [
        "Factory and manufacturing jobs are in high demand",
        "Opportunities in electronics, textiles, and plantations",
        "Legal migration with complete orientation support"
      ]
    },
    {
      country: "Russia",
      title: "Russia Work Visas",
      description: "An emerging market for skilled and unskilled labor.",
      features: [
        "Jobs in construction, technical trades, and services",
        "Employer-sponsored visas with full documentation",
        "Growing opportunities for Bangladeshi workers"
      ]
    }
  ];

  const applicationSteps = [
    {
      icon: Send,
      step: "1",
      title: "Public Announcement",
      description: "Recruitment begins with advertisements in national newspapers and on social media platforms to reach eligible and interested candidates."
    },
    {
      icon: ClipboardList,
      step: "2",
      title: "Candidate Registration",
      description: "Applicants register by submitting required documents, including: Valid passport, Curriculum Vitae (CV), Educational certificates, Recent photographs. This step officially enlists candidates into the recruitment pipeline."
    },
    {
      icon: UserCheck,
      step: "3",
      title: "Primary Interview & Screening",
      description: "Our recruitment team with Japanese employer's representative conducts initial interviews to assess: Educational background, Work experience, Skill level, Suitability for overseas employment. Shortlisted candidates move forward to training."
    },
    {
      icon: Briefcase,
      step: "4",
      title: "Japanese Language & Skill Training",
      description: "Selected candidates undergo intensive training in: Basic Japanese language- N4 level, Relevant job skills, Japanese workplace culture, food habit and etiquette"
    },
    {
      icon: FileCheck,
      step: "5",
      title: "Language Proficiency & Skill Test",
      description: "Candidates appear for: Japanese Language Proficiency Test (JLPT or JFT-Basic), Industry-specific skill exams (e.g., construction, caregiving, etc.). Passing these is essential for SSW eligibility."
    },
    {
      icon: Briefcase,
      step: "6",
      title: "Job Offer & Placement Support",
      description: "Once selected, candidates receive job offers. We assist with: Contract signing, Job role clarification, Employer coordination"
    },
    {
      icon: FileText,
      step: "7",
      title: "Visa Application & Processing",
      description: "Our team guides candidates through the visa application process, ensuring accurate documentation and timely submission."
    },
    {
      icon: Send,
      step: "8",
      title: "Departure to Japan",
      description: "Candidates fly to Japan with full documentation, ready to begin their employment journey."
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
              <RevealText>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Latest Jobs & Openings</h1>
              </RevealText>
              <RevealText>
                <p className="text-xl text-muted-foreground">Stay updated with our latest opportunities</p>
              </RevealText>
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
              <RevealText>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Application Process</h2>
              </RevealText>
              <RevealText>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Follow these easy steps to start your journey towards your next career opportunity
                </p>
              </RevealText>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>

                {/* Steps */}
                <div className="space-y-8">
                  {applicationSteps.map((step, index) => (
                    <Reveal key={index}>
                      <div className="relative flex gap-6">
                        {/* Icon Circle */}
                        <div className="relative z-10 flex-shrink-0">
                          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                            <step.icon className="text-primary-foreground" size={28} />
                          </div>
                        </div>

                        {/* Content Card */}
                        <div className="flex-1 bg-card border-2 border-border rounded-xl p-6 hover:border-primary transition-all duration-300">
                          <div className="flex items-center gap-3 mb-3">
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
              <RevealText>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Find your dream job in Japan</h2>
              </RevealText>
              <RevealText>
                <p className="text-xl text-muted-foreground mb-12">
                  Experience the power of innovation firsthand and discover how Beta's solutions can revolutionize your lending processes. Schedule a personalized demo now to see our advanced machine learning algorithms and cloud-based platform in action.
                </p>
              </RevealText>
              <Reveal>
                <Link to="/application">
                  <Button variant="hero" size="lg" className="text-lg">
                    Start Your Application
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
