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
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Cybersäkerhet 2.0",
      description: "Vi bygger digitala fort Knox. Dina data är säkrare än guld i våra händer."
    },
    {
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: "Molnlösningar på Steroider",
      description: "Vi lyfter din infrastruktur till skyarna. Bokstavligt talat."
    },
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: "HCI - Framtidens Infrastruktur",
      description: "Vi gör din IT-infrastruktur lika smidig som en Tesla och lika kraftfull som en raket."
    },
    {
      icon: <LineChart className="w-8 h-8 text-white" />,
      title: "Digital Strategi med Turbo",
      description: "Vi navigerar digitala landskap som proffs. Din roadmap till tech-dominans börjar här."
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Utveckling i Warp-hastighet",
      description: "Vi kodar snabbare än ljuset och levererar lösningar som får dina konkurrenter att blekna."
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Webbutveckling på Steroider",
      description: "Vi skapar webbplatser som är snabbare än Usain Bolt och snyggare än en catwalk-modell."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "IT-Konsulting Deluxe",
      description: "Vi är som tech-whisperers. Vi talar flytande IT och översätter det till affärsframgång."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      title: "Innovationsledning på Steroider",
      description: "Vi föder idéer snabbare än kaniner och odlar dem till tech-unicorns."
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
