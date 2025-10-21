import { Shield, Users, Globe } from "lucide-react";
import ceoImage from "@/assets/ceo-portrait.jpg";
import { Button } from "@/components/ui/button";

const WhoWeAre = () => {
  const highlights = [
    "N5 & N4 Japanese language training",
    "Work and student visa processing for Japan",
    "Legal manpower export to KSA, UAE, Qatar & more",
    "Government-approved Sending Organization (SO)",
    "Remittance and economic empowerment support",
  ];

  return (
    <section id="who-we-are" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            WHO WE ARE?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Royal Rolls Manpower | Your Trusted{" "}
            <span className="text-primary">Manpower & Visa Partner</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Sending Organization (SO) Approved by the Governments of Japan & Bangladesh
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Royal Rolls Manpower is one of the most reputable manpower recruiting agencies in
              Bangladesh. Officially recognized as a Sending Organization (SO) by both Japan and
              Bangladesh, we provide secure and legal overseas job opportunities.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Through our Japan-approved training center and licensed recruitment services, we
              prepare workers to succeed abroad.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our mission goes beyond job placement: we empower people to become self-reliant,
              send remittances ethically, and contribute to national growth.
            </p>

            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">{highlight}</p>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Book a Consultation
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary transition-colors">
                <Shield className="text-primary mb-4" size={40} />
                <h4 className="font-bold text-xl mb-2">Government Certified</h4>
                <p className="text-sm text-muted-foreground">
                  Officially approved Sending Organization by Japan & Bangladesh
                </p>
              </div>
              <div className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary transition-colors">
                <Users className="text-primary mb-4" size={40} />
                <h4 className="font-bold text-xl mb-2">15,000+ Placed</h4>
                <p className="text-sm text-muted-foreground">
                  Successfully placed workers across 15+ countries worldwide
                </p>
              </div>
            </div>
            <div className="pt-12">
              <div className="bg-card border-2 border-border rounded-xl p-6 hover:border-primary transition-colors">
                <Globe className="text-primary mb-4" size={40} />
                <h4 className="font-bold text-xl mb-2">Global Network</h4>
                <p className="text-sm text-muted-foreground">
                  Trusted partnerships with employers in Japan, Middle East, and beyond
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CEO Message */}
        <div className="bg-gradient-subtle border-2 border-border rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <img
                src={ceoImage}
                alt="Mohd Sohel Rana - CEO of Royal Rolls Manpower"
                className="rounded-xl w-full object-cover shadow-elegant"
              />
              <div className="mt-4 text-center">
                <h4 className="font-bold text-xl">Mohd Sohel Rana</h4>
                <p className="text-primary font-semibold">CEO – Royal Rolls Manpower</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Contact: <a href="tel:+8801630234538" className="text-primary hover:underline">+880 163 023 4538</a>
                </p>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-6">
                <span className="text-primary">Message From CEO</span>
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Royal Rolls Manpower, I believe our work is not only about connecting people to
                  jobs abroad, but about changing lives and building bridges between nations.
                </p>
                <p>
                  Every worker or student who chooses us carries the hope of a better tomorrow for
                  themselves, their families, and for Bangladesh. That responsibility is something I
                  take very seriously as CEO. This is why we operate with 100% transparency, legal
                  compliance, and ethical practices.
                </p>
                <p className="font-semibold text-foreground">My vision for Royal Rolls is simple:</p>
                <ul className="space-y-2 pl-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    To prepare our people with the right skills and mindset to succeed abroad.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    To create trusted partnerships with employers worldwide.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    To ensure that every step, from training to placement, is safe, secure, and dignified.
                  </li>
                </ul>
                <p>
                  I am proud of the trust we have earned as a government-approved Sending
                  Organization, and I am committed to making Royal Rolls a symbol of reliability,
                  professionalism, and opportunity for all who walk through our doors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
