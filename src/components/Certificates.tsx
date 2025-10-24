import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Certificates: React.FC = () => {
  const certificateImages: string[] = [
    "https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-4.09.28-PM-2-753x1024.jpeg",
    "https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-4.09.28-PM-1-898x1024.jpeg",
    "https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-31-at-2.56.08-PM-720x1024.jpeg",
    "https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-31-at-2.56.07-PM-744x1024.jpeg",
    "https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-31-at-10.39.36-PM-1024x832.jpeg",
    "https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-31-at-10.39.36-PM-1-1024x820.jpeg",
    "https://royalrollsmanpower.com/wp-content/uploads/2025/08/TRAVEL-AGENCY-REGISTRATION-CERTIFICATE-1-2023-1_page-0001-1024x724.jpg",
    "https://royalrollsmanpower.com/wp-content/uploads/2025/09/IATA-CERTIFICATE-2025-1-1024x724.jpg",
    "https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-4.09.28-PM-5-720x1024.jpeg",
    "https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-4.09.28-PM-4-717x1024.jpeg",
    "https://royalrollsmanpower.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-30-at-4.09.28-PM-3-724x1024.jpeg",

  ];

  const autoplay = React.useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );
  const autoplay1 = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const companies= [
    {image:"https://royalrollsmanpower.com/wp-content/uploads/2025/08/baira.jpg"},
  {image:"https://royalrollsmanpower.com/wp-content/uploads/2025/08/Atab-Member-Logo-Vector.svg-.png"},
    {image:"https://royalrollsmanpower.com/wp-content/uploads/2025/08/Tour-Operators-Association-of-Bangladesh-old-Logo-Vector.svg-.png"},
    {image:"https://royalrollsmanpower.com/wp-content/uploads/2025/08/IATAlogo.svg_.png"},
    {image:"https://royalrollsmanpower.com/wp-content/uploads/2025/08/Biman_Airlines.png"},
    
  ];
  const [selectedImg, setSelectedImg] = React.useState<string | null>(null);

  return (
    <section className="w-full flex flex-col items-center justify-center py-10 bg-background">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
        Our Certificates
      </h1>

      <div className="relative w-full max-w-7xl">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="flex items-center gap-6">
            {certificateImages.map((url: string, index: number) => (
              <CarouselItem
                key={index}
                className="flex-none flex justify-center items-center"
              >
                <img
                  src={url}
                  alt={`Certificate ${index + 1}`}
                  onClick={() => setSelectedImg(url)}
                  className="h-[400px] w-auto object-contain rounded-xl shadow-md border cursor-pointer hover:scale-[1.03] transition-all"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="bg-black/40 hover:bg-black/70 border-none text-white" />
          <CarouselNext className="bg-black/40 hover:bg-black/70 border-none text-white" />
        </Carousel>
        <br /><br /><br /><br /><br />
      </div>
    
 
      <div className="  grid grid-flow-col md:grid-flow-row max-md:grid-flow-row
            lg:grid-flow-col
            justify-center items-center" style={{gap:"100px"}}>
        {companies.map((company, idx) => (
          <div key={idx} className="flex-none w-48 md:w-64 lg:w-40 p-2">
            <img
              src={company.image}
              
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    
      {/* Fullscreen Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fadeIn"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Expanded certificate"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl border-2 border-white"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-6 right-8 text-white text-3xl font-bold hover:text-gray-300 transition"
          >
            ✕
          </button>
        </div>
      )}
      
    </section>
  );
};

export default Certificates;
