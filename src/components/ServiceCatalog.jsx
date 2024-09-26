import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Shield, Briefcase, Lightbulb, Cloud, Server, LineChart, Users, Camera, Megaphone } from 'lucide-react';
import CarouselCard from './CarouselCard';
import { Button } from "@/components/ui/button";

const ServiceCatalog = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const services = [
    {
      icon: Shield,
      title: "Cybersäkerhet",
      description: "Implementera och optimera marknadsledande säkerhetslösningar för att skydda din verksamhet mot dagens avancerade cyberhot."
    },
    {
      icon: Cloud,
      title: "Molntjänster",
      description: "Optimera din infrastruktur med skalbara och säkra molnlösningar anpassade för din verksamhet."
    },
    {
      icon: Server,
      title: "Hyperconverged Infrastructure (HCI)",
      description: "Implementera och optimera HCI-lösningar med fokus på Nutanix för effektiv, skalbar och flexibel infrastruktur."
    },
    {
      icon: LineChart,
      title: "Digital Strategi",
      description: "Utveckla en framtidssäkrad digital strategi som ger din verksamhet konkurrensfördelar."
    },
    {
      icon: Briefcase,
      title: "IT-Konsulttjänster",
      description: "Expert rådgivning och support för att optimera din IT-infrastruktur och processer."
    },
    {
      icon: Lightbulb,
      title: "Innovationsledning",
      description: "Främja en kultur av innovation och teknologisk framåtanda i din organisation."
    },
    {
      icon: Users,
      title: "Ledarskapsutbildning",
      description: "Skräddarsydda utbildningsprogram för att utveckla framtidens ledare i en digital värld."
    },
    {
      icon: Camera,
      title: "Kreativ Innehållsproduktion",
      description: "Professionell foto- och videoproduktion för att förstärka din digitala närvaro och varumärke."
    },
    {
      icon: Megaphone,
      title: "Digital Marknadsföring",
      description: "Strategisk digital marknadsföring och sociala medier-hantering för att öka din synlighet och kundengagemang."
    }
  ];

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {services.map((service, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
              <CarouselCard {...service} />
            </div>
          ))}
        </div>
      </div>
      <Button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg z-10"
        aria-label="Previous slide"
      >
        ←
      </Button>
      <Button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg z-10"
        aria-label="Next slide"
      >
        →
      </Button>
    </div>
  );
};

export default ServiceCatalog;
