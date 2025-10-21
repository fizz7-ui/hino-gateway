import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhoWeAre from "@/components/WhoWeAre";
import Industries from "@/components/Industries";
import LanguageTraining from "@/components/LanguageTraining";
import VisaServices from "@/components/VisaServices";
import Countries from "@/components/Countries";
import Training from "@/components/Training";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhoWeAre />
      <Services />
      <Industries />
      <LanguageTraining />
      <VisaServices />
      <Countries />
      <Training />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
