import React from 'react';
import { Shield, Briefcase, Lightbulb, Cloud, Server, LineChart, Users, Camera, Megaphone } from 'lucide-react';
import CarouselCard from './CarouselCard';
import TabView from './TabView';

const ServiceCatalog = () => {
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

  const tabs = [
    {
      title: "Tekniska Lösningar",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <CarouselCard key={index} {...service} />
          ))}
        </div>
      )
    },
    {
      title: "Strategiska Tjänster",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(3, 6).map((service, index) => (
            <CarouselCard key={index} {...service} />
          ))}
        </div>
      )
    },
    {
      title: "Kreativa Tjänster",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(6).map((service, index) => (
            <CarouselCard key={index} {...service} />
          ))}
        </div>
      )
    }
  ];

  return <TabView tabs={tabs} />;
};

export default ServiceCatalog;
