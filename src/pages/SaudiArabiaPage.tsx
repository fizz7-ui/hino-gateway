import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/revealText";

const SaudiArabiaPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-09-01-at-12.20.38-AM.jpeg"
            alt="Saudi Arabia opportunities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-block mb-6 px-4 py-2 bg-primary/40 border border-primary/100 rounded-full">
                <p className="text-slate-50 font-semibold text-sm">
                  Middle East Careers
                </p>
              </div>
            </Reveal>

            <Reveal>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-100">
                Saudi Arabia Opportunities
              </h1>
            </Reveal>

            <Reveal>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Coming Soon - Premium job opportunities in construction, healthcare, and hospitality sectors
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <RevealText>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Saudi Arabia Services Coming Soon
              </h2>
            </RevealText>
            <RevealText>
              <p className="text-xl text-muted-foreground">
                We're preparing comprehensive information about our Saudi Arabia recruitment services. Stay tuned for updates.
              </p>
            </RevealText>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SaudiArabiaPage;
