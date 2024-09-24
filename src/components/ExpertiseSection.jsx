import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Lightbulb, Cloud, Code, LineChart } from 'lucide-react';

const ExpertiseItem = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
  >
    <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-gradient-to-br from-[#3E7A8B] to-[#8A3A8B] rounded-full flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const ExpertiseSection = () => {
  const expertiseItems = [
    {
      icon: Shield,
      title: "Cybersäkerhet",
      description: "Implementera och optimera marknadsledande säkerhetslösningar för att skydda din verksamhet."
    },
    {
      icon: Cloud,
      title: "Hyperconverged Infrastructure (HCI)",
      description: "Expertis inom moderna HCI-lösningar, med särskilt fokus på Nutanix för effektiv och skalbar infrastruktur."
    },
    {
      icon: Code,
      title: "Systemutveckling",
      description: "Skräddarsydda mjukvarulösningar som effektiviserar dina processer och driver innovation."
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
    }
  ];

  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Vår Expertis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseItems.map((item, index) => (
          <ExpertiseItem key={index} {...item} />
        ))}
      </div>
    </motion.section>
  );
};

export default ExpertiseSection;
