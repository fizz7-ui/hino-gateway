// import { useTranslation } from "react-i18next";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import japanFlag from "@/assets/countries/JapanFlag.png";
// import saudiFlag from "@/assets/countries/saudiArabiaFlag.png";
// import kuwaitFlag from "@/assets/countries/kuwaitFlag.png";
// import omanFlag from "@/assets/countries/omanFlag.png";
// import jordanFlag from "@/assets/countries/jordanFlag.png";
// import russialag from "@/assets/countries/russiaFlag.png";
// import Indoflag from "@/assets/countries/Flag_of_Indonesia.svg.png";
// import malayFlag from "@/assets/countries/images.webp";
// import qatarflag from "@/assets/countries/qatarFlag.png";

// const Countries = () => {
//   const { t } = useTranslation();

//   const countries = [
//     { id: "japan", name: "Japan", image: japanFlag },
//     { id: "saudi", name: "Saudi Arabia", image: saudiFlag },
//     { id: "kuwait", name:  "Kuwait", image: kuwaitFlag },
//     { id: "qatar", name:  "Qatar", image: qatarflag },
//     { id: "oman", name: "Oman", image: omanFlag },
//     { id: "jordan", name: "Jordan", image: jordanFlag },
//     { id: "malaysia", name: "Malaysia", image: malayFlag },
//     { id: "indonesia", name: "Indonesia", image: Indoflag },
//     { id: "russia", name: "Russia", image: russialag },
//   ];

//   return (
//     <section id="countries" className="py-24 bg-background">
//       <div className="container mx-auto px-4">
//         {/* HEADER */}
//         <div className="text-center mb-16">
//           <p className="text-sm uppercase tracking-wide text-primary font-semibold mb-4">
//             {t("countriesList.subtitle")}
//           </p>
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             {t("countriesList.title")}
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             {t("countriesList.description")}
//           </p>
//         </div>

//         {/* CAROUSEL */}
//         <Carousel
//           opts={{ align: "start", loop: true }}
//           className="w-full max-w-6xl mx-auto"
//         >
//           <CarouselContent className="-ml-4">
//             {countries.map((country) => (
//               <CarouselItem key={country.id} className="pl-4 md:basis-1/3 lg:basis-1/4">
//                 <div className="group relative p-2">
//                   <div className="flex flex-col items-center space-y-4 bg-card border-2 border-border rounded-xl
//                                   hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer p-4">

//                     {/* SMALL IMAGE CONTAINER */}
//                     <div className="w-28 h-20 overflow-hidden rounded-lg border-2 border-primary/20 group-hover:border-primary transition-all duration-300">
//                       <img
//                         src={country.image}
//                         alt={country.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     {/* COUNTRY NAME */}
//                     <div className="text-center">
//                       <span className="text-lg font-semibold text-foreground block">
//                         {country.name}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>

//         {/* FOOTER */}
//         <div className="mt-16 text-center">
//           <p className="text-muted-foreground text-lg">
//             {t("countriesList.moreDestinations")}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Countries;
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/revealText";

import japanFlag from "@/assets/countries/JapanFlag.png";
import saudiFlag from "@/assets/countries/saudiArabiaFlag.png";
import kuwaitFlag from "@/assets/countries/kuwaitFlag.png";
import omanFlag from "@/assets/countries/omanFlag.png";
import jordanFlag from "@/assets/countries/jordanFlag.png";
import russialag from "@/assets/countries/russiaFlag.png";
import Indoflag from "@/assets/countries/Flag_of_Indonesia.svg.png";
import malayFlag from "@/assets/countries/images.webp";
import qatarflag from "@/assets/countries/qatarFlag.png";

const Countries = () => {
  const { t } = useTranslation();

  const countries = [
    { id: "japan", name: "Japan", image: japanFlag },
    { id: "saudi", name: "Saudi Arabia", image: saudiFlag },
    { id: "kuwait", name: "Kuwait", image: kuwaitFlag },
    { id: "qatar", name: "Qatar", image: qatarflag },
    { id: "oman", name: "Oman", image: omanFlag },
    { id: "jordan", name: "Jordan", image: jordanFlag },
    { id: "malaysia", name: "Malaysia", image: malayFlag },
    { id: "indonesia", name: "Indonesia", image: Indoflag },
    { id: "russia", name: "Russia", image: russialag },
  ];

  return (
    <section id="countries" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center align-middle items-center text-center">
          {/* HEADER */}
          <div className="text-center  justify-center align-middle items-center mb-16"> 
              <p className="text-sm text-center uppercase tracking-wide text-primary font-semibold mb-4">
                 
                 
                 
                {t("countriesList.subtitle")}
              </p> 

            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t("countriesList.title")}
              </h2>
            </Reveal>

             
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                <Reveal>
                  <>
                    {t("countriesList.description")}
                  </>
                </Reveal>
              </p>
            
          </div>
        </div>

        {/* CAROUSEL */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {countries.map((country) => (
              <CarouselItem
                key={country.id}
                className="pl-4 md:basis-1/3 lg:basis-1/4"
              >
                <div className="group relative p-2">
                  <div
                    className="flex flex-col countryCard items-center space-y-4 bg-card border-2 border-border rounded-xl 
                                    hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer p-4"
                  >
                    {/* SMALL IMAGE CONTAINER */}
                    <div className="w-28 h-20 overflow-hidden rounded-lg border-2 border-primary/20 group-hover:border-primary transition-all duration-300">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* COUNTRY NAME */}
                    <div className="text-center">
                      <span className="text-lg font-semibold text-foreground block">
                        {country.name}
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* FOOTER */}
        <div className="mt-16 text-center flex justify-center">
            <p className="text-muted-foreground text-lg">
              <Reveal>
                <>
                  {t("countriesList.moreDestinations")}
                </>
              </Reveal>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Countries;
