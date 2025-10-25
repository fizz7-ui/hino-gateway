import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, GraduationCap, Award, Target, Shield, Globe } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/revealText";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";

const JapanPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://royalrollsmanpower.com/wp-content/uploads/2025/08/2-1.jpg"
            alt="Japan opportunities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-block mb-6 px-4 py-2 bg-primary/40 border border-primary/100 rounded-full">
                <p className="text-slate-50 font-semibold text-sm">
                  Government Approved Sending Organization (SO)
                </p>
              </div>
            </Reveal>

            <Reveal>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-100">
                Your Gateway to Japan
              </h1>
            </Reveal>

            <Reveal>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Approved by the Governments of Japan & Bangladesh
              </p>
            </Reveal>

            <Reveal>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button variant="hero" size="lg" className="text-lg" onClick={() => setIsModalOpen(true)}>
                  Partner With Us
                </Button>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Reveal>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                  <span className="text-slate-100 font-medium">
                    Government Approved
                  </span>
                </div>
              </Reveal>
              <Reveal>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                  <span className="text-slate-100 font-medium">
                    Comprehensive Training
                  </span>
                </div>
              </Reveal>
              <Reveal>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
                  <span className="text-slate-100 font-medium">
                    100% Legal & Transparent
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CEO's Message */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">CEO's Message</h2>
            </RevealText>
            <Reveal>
              <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At Royal Rolls Manpower, we believe our role is more than just sending workers abroad, it is about building a lasting bridge of trust, skills, and opportunity between Bangladesh and Japan.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As an SO approved by both the Government of Japan and the Government of Bangladesh, we take pride in preparing candidates who are not only skilled and disciplined, but also culturally adaptable, loyal, and committed to contributing positively to Japan's workforce.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Bangladesh */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Why Bangladesh?</h2>
            </RevealText>
            <RevealText>
              <p className="text-xl text-muted-foreground text-center mb-12">
                Bangladesh offers a strong and promising workforce for Japan
              </p>
            </RevealText>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Young & Dynamic", desc: "A young and dynamic population ready to contribute" },
                { icon: Target, title: "Cultural Adaptability", desc: "Cultural adaptability and respect for discipline" },
                { icon: Shield, title: "Strong Commitment", desc: "Strong commitment and loyalty to employers" },
                { icon: GraduationCap, title: "Quick Learners", desc: "Ability to be quick learners in skills and language" }
              ].map((item, index) => (
                <Reveal key={index}>
                  <div className="text-center p-6 bg-card border-2 border-border rounded-xl hover:border-primary transition-all duration-300">
                    <div className="inline-block p-4 bg-primary/10 rounded-xl mb-4">
                      <item.icon className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Mission</h2>
            </RevealText>
            <Reveal>
              <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We believe that dreams can be transformed into opportunities. Our mission is to empower the hardworking people of Bangladesh by connecting them with life-changing career opportunities in Japan. Through proper training, guidance, and support, we transform potential into success — opening doors to brighter futures for individuals, building stronger foundations for families, and contributing to a stronger economy for Bangladesh.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every step we take is driven by a clear vision: to reduce unemployment, uplift lives, and create a bridge of friendship and growth between Bangladesh and Japan. By helping our people achieve their dreams abroad, we are uplifting our nation at home. Through this mission, we aspire to position our company as a first-class manpower service provider in Bangladesh, recognized for excellence, trust, and global impact.
                </p>
              </div>
            </Reveal>
            <div className="text-center mt-8">
              <Reveal>
                <Button variant="hero" size="lg" onClick={() => setIsModalOpen(true)}>
                  Partner With Us
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Who We Are?</h2>
            </RevealText>
            <RevealText>
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-primary">
                Royal Rolls Manpower | Your Trusted Japan Manpower & Visa Partner
              </h3>
            </RevealText>
            <RevealText>
              <p className="text-center text-muted-foreground mb-12">
                Sending Organization (SO) Approved by the Governments of Japan & Bangladesh
              </p>
            </RevealText>

            <Reveal>
              <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Royal Rolls Manpower is one of the most reputable manpower recruiting agencies in Bangladesh. Officially recognized as a Sending Organization (SO) by both Japan and Bangladesh, we have been providing secure and legal overseas job opportunities since 2024. Along with recruitment, we also run the Advanced Language Institute to teach the Japanese language, helping candidates prepare for a brighter future in Japan.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through our Japan-approved training center and licensed recruitment services, we prepare workers to succeed abroad.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Vision & Value */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Vision & Value</h2>
            </RevealText>
            <Reveal>
              <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our vision is to establish ourselves as Bangladesh's leading and first-class manpower service provider, recognized for excellence, integrity, and global impact. We aspire to be the trusted bridge between Bangladesh and Japan, creating endless opportunities for our people to thrive abroad while strengthening Bangladesh's economy at home. We envision a future where Bangladeshi workers are valued worldwide for their skills, discipline, and dedication — turning Bangladesh into a global hub of reliable human resources. Through this vision, we aim not only to supply manpower but also to uplift lives, empower families, and build stronger international partnerships that last for generations.
                </p>
              </div>
            </Reveal>
            <div className="text-center mt-8">
              <Reveal>
                <Button variant="hero" size="lg" onClick={() => setIsModalOpen(true)}>
                  Partner With Us
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Programs & Training */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Programs & Training</h2>
            </RevealText>
            <RevealText>
              <p className="text-xl text-muted-foreground text-center mb-12">
                Comprehensive skill development for Japan careers
              </p>
            </RevealText>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Reveal>
                <div className="bg-card border-2 border-border rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Skill Training Programs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Technical Intern Training Program (TITP)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Specified Skilled Worker (SSW)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Caregiving, Construction, Food Service</span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal>
                <div className="bg-card border-2 border-border rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Japanese Language Preparation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">JLPT & JFT-Basic training</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Cultural immersion workshops</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span className="text-muted-foreground">Mock interviews in Japanese</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 gap-8">
              <Reveal>
                <div className="text-center p-8 bg-primary/10 border-2 border-primary/20 rounded-2xl">
                  <div className="text-6xl font-bold text-primary mb-2">100+</div>
                  <p className="text-xl text-foreground">Number of students placed</p>
                </div>
              </Reveal>
              <Reveal>
                <div className="text-center p-8 bg-primary/10 border-2 border-primary/20 rounded-2xl">
                  <div className="text-6xl font-bold text-primary mb-2">70%</div>
                  <p className="text-xl text-foreground">JLPT pass rates</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Bangladesh */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                Partner With Bangladesh: A Reliable Talent Pipeline
              </h2>
            </RevealText>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Why Partner With Us?</h2>
            </RevealText>
            <RevealText>
              <p className="text-xl text-muted-foreground text-center mb-12">
                We believe in building careers, not just contracts
              </p>
            </RevealText>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                "Strict compliance with TITP/SSW regulations",
                "Government-approved processes",
                "Pre-trained, pre-screened, motivated candidates",
                "Govt. Approved SO – Legal and transparent recruitment for Japan",
                "Skilled & Unskilled Placement – From professionals to general workers",
                "Language & Cultural Training – N5/N4 certification with native instructors",
                "End-to-End Support – From documentation to placement and after-arrival guidance",
                "Safe & Secure Process – 100% legal recruitment with worker protection",
                "Wide Range of Skilled Professions – Housemaids, drivers, nurses, construction workers, hotel staff, welders, electricians, plumbers"
              ].map((item, index) => (
                <Reveal key={index}>
                  <div className="flex items-start space-x-3 p-4 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Placement & Monitoring System */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                Our Placement & Monitoring System
              </h2>
            </RevealText>
            
            <div className="space-y-6">
              <Reveal>
                <div className="bg-card border-2 border-border rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Globe className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Pre-departure orientation</h3>
                      <p className="text-muted-foreground">Comprehensive preparation for life and work in Japan</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="bg-card border-2 border-border rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Shield className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Post-deployment support</h3>
                      <p className="text-muted-foreground">Ongoing assistance and guidance after arrival</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="bg-card border-2 border-border rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Award className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Reporting and transparency</h3>
                      <p className="text-muted-foreground">Regular updates and clear communication</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Models */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Collaboration Models</h2>
            </RevealText>
            <Reveal>
              <div className="space-y-4">
                <p className="text-xl text-muted-foreground">MoU Templates</p>
                <p className="text-xl text-muted-foreground">Placement Procedure Step-by-Step</p>
              </div>
            </Reveal>
            <div className="mt-12">
              <Reveal>
                <Button variant="hero" size="lg" className="text-lg" onClick={() => setIsModalOpen(true)}>
                  Partner With Us Today
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default JapanPage;
