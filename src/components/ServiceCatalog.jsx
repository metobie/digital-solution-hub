import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Lightbulb, Cloud, Code, LineChart } from 'lucide-react';

const ServiceItem = ({ icon, title, description }) => (
  <Card className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <CardContent className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-[#3E7A8B] to-[#8A3A8B] rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const ServiceCatalog = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Cybersäkerhet",
      description: "Implementera och optimera marknadsledande säkerhetslösningar för att skydda din verksamhet mot dagens avancerade cyberhot."
    },
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: "Molntjänster",
      description: "Optimera din infrastruktur med skalbara och säkra molnlösningar anpassade för din verksamhet."
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Systemutveckling",
      description: "Skräddarsydda mjukvarulösningar som effektiviserar dina processer och driver innovation."
    },
    {
      icon: <LineChart className="w-8 h-8 text-white" />,
      title: "Digital Strategi",
      description: "Utveckla en framtidssäkrad digital strategi som ger din verksamhet konkurrensfördelar."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "IT-Konsulttjänster",
      description: "Expert rådgivning och support för att optimera din IT-infrastruktur och processer."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      title: "Innovationsledning",
      description: "Främja en kultur av innovation och teknologisk framåtanda i din organisation."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceItem key={index} {...service} />
      ))}
    </div>
  );
};

export default ServiceCatalog;
