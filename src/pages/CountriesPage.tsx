import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Countries from "@/components/Countries";

const CountriesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Countries />
      </div>
      <Footer />
    </div>
  );
};

export default CountriesPage;
