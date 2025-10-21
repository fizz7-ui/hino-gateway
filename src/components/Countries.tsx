import { Badge } from "@/components/ui/badge";

const Countries = () => {
  const countries = [
    { name: "Japan", flag: "🇯🇵", popular: true },
    { name: "Saudi Arabia", flag: "🇸🇦", popular: true },
    { name: "United Arab Emirates", flag: "🇦🇪", popular: true },
    { name: "Qatar", flag: "🇶🇦", popular: true },
    { name: "Kuwait", flag: "🇰🇼", popular: false },
    { name: "Bahrain", flag: "🇧🇭", popular: false },
    { name: "Oman", flag: "🇴🇲", popular: false },
    { name: "South Korea", flag: "🇰🇷", popular: false },
    { name: "Malaysia", flag: "🇲🇾", popular: false },
    { name: "Singapore", flag: "🇸🇬", popular: false },
    { name: "Romania", flag: "🇷🇴", popular: false },
    { name: "Poland", flag: "🇵🇱", popular: false },
  ];

  return (
    <section id="countries" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Global <span className="text-primary">Destinations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide employment and visa services to premier destinations worldwide
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {countries.map((country) => (
            <div
              key={country.name}
              className="group relative"
            >
              <div className="flex items-center space-x-3 px-6 py-4 bg-card border-2 border-border rounded-xl hover:border-primary hover:shadow-red transition-all duration-300 hover:scale-105 cursor-pointer">
                <span className="text-4xl">{country.flag}</span>
                <span className="text-lg font-semibold text-foreground">{country.name}</span>
                {country.popular && (
                  <Badge variant="destructive" className="ml-2 bg-primary">
                    Popular
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg">
            And many more destinations across Asia, Europe, and the Middle East
          </p>
        </div>
      </div>
    </section>
  );
};

export default Countries;
