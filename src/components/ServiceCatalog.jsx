import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Briefcase, Lightbulb, Cloud, Server, LineChart, Users, Camera, Megaphone } from 'lucide-react';
import CarouselCard from './CarouselCard';

const ServiceCatalog = () => {
  const [activeTab, setActiveTab] = React.useState(0);

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
      content: services.slice(0, 3)
    },
    {
      title: "Strategiska Tjänster",
      content: services.slice(3, 6)
    },
    {
      title: "Kreativa Tjänster",
      content: services.slice(6)
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-center mb-4 gap-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`text-sm sm:text-base px-3 py-2 rounded-md transition-all duration-300 ${
              activeTab === index
                ? 'bg-gradient-to-br from-[#3E7A8B] to-[#8A3A8B] text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tabs[activeTab].content.map((service, index) => (
            <CarouselCard key={index} {...service} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCatalog;