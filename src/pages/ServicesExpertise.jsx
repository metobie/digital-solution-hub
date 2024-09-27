import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Briefcase, Lightbulb, Cloud, Code, LineChart, Users, Camera, Megaphone } from 'lucide-react';
import ExpandableServiceCard from '../components/ExpandableServiceCard';

const ServicesExpertise = () => {
  const [expandedRows, setExpandedRows] = useState([false, false, false]);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const services = [
    {
      icon: Shield,
      title: "Cybersäkerhet",
      description: "Implementera och optimera marknadsledande säkerhetslösningar för att skydda din verksamhet mot dagens avancerade cyberhot.",
      examples: [
        { title: "Säkerhetsrevision och riskbedömning" },
        { title: "Implementering av Zero Trust-arkitektur" },
        { title: "Utbildning i cybersäkerhet för anställda" }
      ],
      experts: ["Tobias Karlsson", "Patrik Berg"]
    },
    {
      icon: Cloud,
      title: "Molntjänster & HCI",
      description: "Optimera infrastruktur med skalbara och säkra molnlösningar, särskilt Nutanix för HCI.",
      examples: [
        { title: "Migrering från on-premise till molnbaserad infrastruktur" },
        { title: "Implementering av hybrid molnlösningar" },
        { title: "Optimering av Nutanix HCI-miljöer" }
      ],
      experts: ["Tobias Karlsson", "Patrik Berg"]
    },
    {
      icon: Code,
      title: "Systemutveckling",
      description: "Skräddarsydda mjukvarulösningar för effektivisering och innovation.",
      examples: [
        { title: "Utveckling av kundanpassade affärssystem" },
        { title: "Skapande av API:er för systemintegration" },
        { title: "Modernisering av legacy-system" }
      ],
      experts: ["Robert Nesta Nuhu", "Patrik Berg"]
    },
    {
      icon: LineChart,
      title: "Digital Strategi",
      description: "Utveckla framtidssäkrade affärsstrategier med digital integration för ökad konkurrenskraft.",
      examples: [
        { title: "Utveckling av digital affärsmodell" },
        { title: "Digital transformationsplan för organisationen" },
        { title: "Strategisk digital marknadsplanering" }
      ],
      experts: ["Tobias Karlsson", "Tim Omorogieva"]
    },
    {
      icon: Briefcase,
      title: "IT-Konsulttjänster",
      description: "Expert rådgivning för optimering av IT-infrastruktur, processer och livscykelhantering.",
      examples: [
        { title: "IT-infrastrukturanalys och optimeringsförslag" },
        { title: "Projektledning för IT-implementeringar" },
        { title: "Livscykelhantering (LCM) för IT-system" },
        { title: "Kostnadseffektivisering av IT-operationer" }
      ],
      experts: ["Tobias Karlsson", "Patrik Berg"]
    },
    {
      icon: Lightbulb,
      title: "Innovationsledning",
      description: "Främja en kultur av innovation och teknologisk framåtanda.",
      examples: [
        { title: "Workshops för idégenerering och innovationsprocesser" },
        { title: "Implementering av innovationsledningssystem" },
        { title: "Utveckling av interna innovationsprogram" }
      ],
      experts: ["Tim Omorogieva", "Robert Nesta Nuhu"]
    },
    {
      icon: Users,
      title: "Ledarskapsutbildning",
      description: "Skräddarsydda program för att utveckla framtidens ledare i en komplex och föränderlig värld.",
      examples: [
        { title: "Transformativt ledarskap för framtiden" },
        { title: "Utveckling av autentiskt ledarskap" },
        { title: "Strategiskt ledarskap och organisatorisk framgång" }
      ],
      experts: ["Tim Omorogieva"]
    },
    {
      icon: Camera,
      title: "Kreativ Innehållsproduktion",
      description: "Professionell foto- och videoproduktion för digital närvaro och varumärkesbyggande.",
      examples: [
        { title: "Produktion av företagspresentationsvideos" },
        { title: "Fotosessioner för personalporträtt och företagsmiljöer" },
        { title: "Skapande av visuellt innehåll för sociala medier" }
      ],
      experts: ["Emelie Nylander"]
    },
    {
      icon: Megaphone,
      title: "Digital Marknadsföring",
      description: "Strategisk digital marknadsföring, sociala medier-hantering och eventplanering.",
      examples: [
        { title: "Utveckling av innehållsstrategier för sociala medier" },
        { title: "Skapande och hantering av digitala reklamkampanjer" },
        { title: "Planering och genomförande av företagsevent" }
      ],
      experts: ["Emelie Nylander", "Tim Omorogieva"]
    }
  ];

  const toggleRowExpansion = (rowIndex) => {
    const newExpandedRows = [...expandedRows];
    newExpandedRows[rowIndex] = !newExpandedRows[rowIndex];
    setExpandedRows(newExpandedRows);
  };

  return (
    <div className="min-h-screen relative">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://i.imgur.com/2dexfVJ.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: useTransform(scrollY, [0, 500], [0, 150]),
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl font-bold mb-8 text-center text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Våra Tjänster & Expertiser
          </motion.h1>
          <motion.p
            className="text-xl text-center text-gray-200 mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Utforska vårt breda utbud av tjänster och hur vi kan hjälpa ditt företag att växa och innovera.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ExpandableServiceCard 
                  service={service} 
                  isExpanded={expandedRows[Math.floor(index / 3)]}
                  onToggle={() => toggleRowExpansion(Math.floor(index / 3))}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesExpertise;