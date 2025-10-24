import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import japanFlag from "@/assets/countries/japan.jpg";
import saudiFlag from "@/assets/countries/saudi.jpg";
import uaeFlag from "@/assets/countries/uae.jpg";

const Countries = () => {
  const { t } = useTranslation();
  
  const countries = [
    { id: "japan", name: t("countriesList.japan"), image: japanFlag, popular: true },
    { id: "saudi", name: t("countriesList.saudiArabia"), image: saudiFlag, popular: true },
    { id: "uae", name: t("countriesList.uae"), image: uaeFlag, popular: true },
    { id: "qatar", name: t("countriesList.qatar"), image: null, popular: true },
    { id: "kuwait", name: t("countriesList.kuwait"), image: null, popular: false },
    { id: "bahrain", name: t("countriesList.bahrain"), image: null, popular: false },
    { id: "oman", name: t("countriesList.oman"), image: null, popular: false },
    { id: "korea", name: t("countriesList.southKorea"), image: null, popular: false },
    { id: "malaysia", name: t("countriesList.malaysia"), image: null, popular: false },
    { id: "singapore", name: t("countriesList.singapore"), image: null, popular: false },
    { id: "romania", name: t("countriesList.romania"), image: null, popular: false },
    { id: "poland", name: t("countriesList.poland"), image: null, popular: false },
  ];

  return (
    <section id="countries" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-primary font-semibold mb-4">
            {t("countriesList.subtitle")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("countriesList.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("countriesList.description")}
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {countries.map((country) => (
              <CarouselItem key={country.id} className="pl-4 md:basis-1/3 lg:basis-1/4">
                <div className="group relative">
                  <div className="flex flex-col items-center space-y-4 p-6 bg-card border-2 border-border rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                    {country.image ? (
                      <img
                        src={country.image}
                        alt={country.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center border-4 border-border">
                        <span className="text-sm text-muted-foreground font-semibold">
                          {country.name.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div className="text-center">
                      <span className="text-lg font-semibold text-foreground block">
                        {country.name}
                      </span>
                      {country.popular && (
                        <Badge variant="destructive" className="mt-2 bg-primary">
                          {t("countriesList.popular")}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg">
            {t("countriesList.moreDestinations")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Countries;
