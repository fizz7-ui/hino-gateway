import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="International workforce opportunities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <p className="text-primary font-semibold text-sm">
              Government Approved Sending Organization (SO)
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            Your Gateway to{" "}
            <span className="text-primary">International Careers</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-slide-up">
            Legal, transparent, and hassle-free recruitment services for work, study,
            and travel opportunities worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up">
            <Button variant="hero" size="lg" className="text-lg">
              Explore Opportunities
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in">
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
              <span className="text-foreground font-medium">
                Government Certified
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
              <span className="text-foreground font-medium">
                Professional Training
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="text-primary flex-shrink-0" size={24} />
              <span className="text-foreground font-medium">
                Ethical Recruitment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
