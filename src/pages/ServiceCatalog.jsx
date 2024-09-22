import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Cloud, Code, LineChart, Briefcase, Lightbulb } from 'lucide-react';

const ServiceItem = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <Card className="h-full bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <CardContent className="flex flex-col items-center text-center h-full">
        <div className="w-16 h-16 bg-gradient-to-br from-[#3E7A8B] to-[#8A3A8B] rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const ServiceCatalog = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Cybersäkerhet",
      description: "Skydda din verksamhet mot moderna digitala hot med våra omfattande säkerhetslösningar."
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-6">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Våra Tjänster
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12 text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Utforska vårt omfattande utbud av digitala lösningar och tjänster
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCatalog;