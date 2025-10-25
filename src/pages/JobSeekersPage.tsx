import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, CheckCircle2, FileText, Search, Send, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/revealText";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

const JobSeekersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+8801630234538", "+8801688505444"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["royalrollsmanpower@yahoo.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["36 Purana Paltan Lane, Rokeya Mansion (3rd Floor), Dhaka-1000", "Bangladesh"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Sunday - Thursday: 9AM - 6PM", "Friday - Saturday: Closed"],
    },
  ];

  const cardWidth = 280;
  const gap = 24;
  const totalWidth = cardWidth * 4 + gap * 3;

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
      icon: FileText,
      step: "2",
      title: "Candidate Registration",
      description: "Applicants register by submitting required documents, including: Valid passport, Curriculum Vitae (CV), Educational certificates, Recent photographs. This step officially enlists candidates into the recruitment pipeline."
    },
    {
      icon: Search,
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
      icon: CheckCircle2,
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

            {/* Work Visas Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {workVisas.map((visa, index) => (
                <Reveal key={index}>
                  <div className="bg-card border-2 border-border rounded-xl p-8 hover:border-primary transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-3">{visa.title}</h3>
                    <p className="text-muted-foreground mb-6">{visa.description}</p>
                    <ul className="space-y-3 mb-6">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {applicationSteps.map((step, index) => (
                <Reveal key={index}>
                  <div className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <step.icon className="text-primary" size={24} />
                      </div>
                      <div className="text-3xl font-bold text-primary">Step {step.step}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </Reveal>
              ))}
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
                <Button variant="hero" size="lg" className="text-lg" onClick={() => setIsModalOpen(true)}>
                  Start Your Application
                </Button>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Map and Contact Section */}
        <section className="py-24">
          <div className="flex justify-center items-center text-center">
            <div className="text-center items-center justify-center align-middle mb-12 px-4">
              <h2 className="text-4xl text-center flex justify-center md:text-5xl font-bold mb-4">
                <RevealText>Get In Touch</RevealText>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to start your journey abroad?
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="mx-auto mb-12" style={{ width: `${totalWidth}px`, height: "400px" }}>
            <Reveal>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d233747.34729611073!2d90.412165!3d23.736597!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f619b1033d%3A0xb5fa99c070621381!2s3rd%20Floor%2C%2036%20Purana%20Paltan%2C%20Dhaka%201000%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1761284812030!5m2!1sen!2sus"
                width="100%"
                height="100%"
                className="rounded-xl border-0"
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
          <div className="flex justify-between flex-wrap mx-auto mb-12" style={{ width: `${totalWidth}px`, gap: `${gap}px` }}>
            {contactInfo.map((info, index) => (
              <Reveal key={index}>
                <div className="text-center p-6 bg-card border-2 border-border rounded-xl hover:border-primary hover:shadow-red transition-all duration-300" style={{ width: `${cardWidth}px` }}>
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
        </section>
      </div>
      <Footer />
      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default JobSeekersPage;
