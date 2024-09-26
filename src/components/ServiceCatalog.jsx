import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Lightbulb, Cloud, Server, LineChart, Code, Globe } from 'lucide-react';

const ServiceItem = ({ icon, title, description }) => (
  <Card className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-500 hover:border-blue-500">
    <CardContent className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </CardContent>
  </Card>
);

const ServiceCatalog = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: "Infrastrukturoptimering",
      description: "Vi designar och implementerar skalbara, säkra och effektiva IT-infrastrukturer som möter dagens behov och morgondagens utmaningar."
    },
    {
      icon: <LineChart className="w-8 h-8 text-white" />,
      title: "Digital Strategi",
      description: "Vi hjälper dig att utveckla en omfattande digital strategi som driver innovation, effektivitet och tillväxt i din verksamhet."
    },
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: "Molnlösningar",
      description: "Skräddarsydda molnstrategier och implementeringar som ökar flexibilitet, skalbarhet och kostnadseffektivitet."
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Cybersäkerhet",
      description: "Omfattande säkerhetslösningar som skyddar din verksamhet mot dagens och morgondagens cyberhot."
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Systemutveckling",
      description: "Skräddarsydda mjukvarulösningar som effektiviserar dina processer och driver innovation."
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Webbutveckling",
      description: "Moderna, responsiva och användarvänliga webbplatser och applikationer som stärker din digitala närvaro."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "IT-Konsulttjänster",
      description: "Strategisk rådgivning och support för att optimera din IT-infrastruktur och processer."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      title: "Innovationsledning",
      description: "Vi hjälper dig att identifiera och implementera nya teknologier som ger konkurrensfördelar."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <ServiceItem key={index} {...service} />
      ))}
    </div>
  );
};

export default ServiceCatalog;
