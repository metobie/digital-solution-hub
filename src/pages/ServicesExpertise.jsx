import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Lightbulb, Cloud, Code, LineChart, Users, Camera, Megaphone } from 'lucide-react';
import Popup from '../components/Popup';

const ServicesExpertise = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const services = [
    {
      icon: Shield,
      title: "Cybersäkerhet",
      description: "Implementera och optimera marknadsledande säkerhetslösningar.",
      examples: [
        "Säkerhetsrevision och riskbedömning",
        <span 
          className="cursor-pointer text-blue-600 hover:underline" 
          onClick={() => setIsPopupOpen(true)}
        >
          Implementering av Zero Trust-arkitektur
        </span>,
        "Utbildning i cybersäkerhet för anställda"
      ],
      experts: ["Tobias Karlsson", "Patrik Berg"]
    },
    {
      icon: Cloud,
      title: "Molntjänster & HCI",
      description: "Optimera infrastruktur med skalbara och säkra molnlösningar, särskilt Nutanix för HCI.",
      examples: [
        "Migrering från on-premise till molnbaserad infrastruktur",
        "Implementering av hybrid molnlösningar",
        "Optimering av Nutanix HCI-miljöer"
      ],
      experts: ["Tobias Karlsson", "Patrik Berg"]
    },
    {
      icon: Code,
      title: "Systemutveckling",
      description: "Skräddarsydda mjukvarulösningar för effektivisering och innovation.",
      examples: [
        "Utveckling av kundanpassade affärssystem",
        "Skapande av API:er för systemintegration",
        "Modernisering av legacy-system"
      ],
      experts: ["Robert Nesta Nuhu", "Patrik Berg"]
    },
    {
      icon: LineChart,
      title: "Digital Strategi",
      description: "Utveckla framtidssäkrade digitala strategier för konkurrensfördelar.",
      examples: [
        "Utformning av digital transformationsplan",
        "Analys av digitala trender och möjligheter",
        "Utveckling av datadriven beslutsfattningsprocess"
      ],
      experts: ["Tobias Karlsson", "Tim Omorogieva"]
    },
    {
      icon: Briefcase,
      title: "IT-Konsulttjänster",
      description: "Expert rådgivning för optimering av IT-infrastruktur och processer.",
      examples: [
        "IT-infrastrukturanalys och optimeringsförslag",
        "Projektledning för IT-implementeringar",
        "Kostnadseffektivisering av IT-operationer"
      ],
      experts: ["Tobias Karlsson", "Patrik Berg"]
    },
    {
      icon: Lightbulb,
      title: "Innovationsledning",
      description: "Främja en kultur av innovation och teknologisk framåtanda.",
      examples: [
        "Workshops för idégenerering och innovationsprocesser",
        "Implementering av innovationsledningssystem",
        "Utveckling av interna innovationsprogram"
      ],
      experts: ["Tim Omorogieva", "Robert Nesta Nuhu"]
    },
    {
      icon: Users,
      title: "Ledarskapsutbildning",
      description: "Skräddarsydda program för att utveckla framtidens ledare i en digital värld.",
      examples: [
        "Ledarskapsutbildning med fokus på digital transformation",
        "Coachning i förändringsledning",
        "Utveckling av digitala ledarskapskompetenser"
      ],
      experts: ["Tim Omorogieva"]
    },
    {
      icon: Camera,
      title: "Kreativ Innehållsproduktion",
      description: "Professionell foto- och videoproduktion för digital närvaro och varumärkesbyggande.",
      examples: [
        "Produktion av företagspresentationsvideos",
        "Fotosessioner för personalporträtt och företagsmiljöer",
        "Skapande av visuellt innehåll för sociala medier"
      ],
      experts: ["Emelie Nylander"]
    },
    {
      icon: Megaphone,
      title: "Digital Marknadsföring",
      description: "Strategisk digital marknadsföring och sociala medier-hantering.",
      examples: [
        "Utveckling av innehållsstrategier för sociala medier",
        "Skapande och hantering av digitala reklamkampanjer",
        "Analys och optimering av digital marknadsföringsprestanda"
      ],
      experts: ["Emelie Nylander", "Tim Omorogieva"]
    }
  ];

  const zeroTrustContent = (
    <div>
      <h3 className="font-semibold mb-2">Varför Zero Trust?</h3>
      <p className="mb-4">
        Zero Trust har blivit en alltmer populär strategi på grund av det ökade hotet från cyberattacker och den ökande användningen av molntjänster och distansarbete. Traditionella säkerhetsmodeller bygger på att en gång verifierade användare och enheter inom nätverkets gränser kan betraktas som betrodda, men Zero Trust anpassar sig till den moderna verkligheten där hot kan komma både inifrån och utifrån.
      </p>
      <h3 className="font-semibold mb-2">Fördelar:</h3>
      <ul className="list-disc pl-5">
        <li>Ökad säkerhet: Genom att alltid verifiera och begränsa tillgången till resurser, minskas risken för dataförluster och säkerhetsintrång.</li>
        <li>Bättre kontroll över åtkomst: Striktare kontroll över vem som får tillgång till vad, vilket minskar potentiella sårbarheter.</li>
        <li>Anpassad för moderna IT-miljöer: Zero Trust passar väl för moln- och hybridmiljöer där användare och enheter kommer från många olika platser.</li>
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Våra Tjänster & Expertiser
        </motion.h1>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12"
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
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-[#3E7A8B] mr-3" />
                    <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <h3 className="font-semibold text-gray-700 mb-2">Exempel på projekt:</h3>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    {service.examples.map((example, idx) => (
                      <li key={idx}>{example}</li>
                    ))}
                  </ul>
                  <h3 className="font-semibold text-gray-700 mb-2">Experter:</h3>
                  <p className="text-gray-600">{service.experts.join(", ")}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title="Zero Trust-arkitektur"
        content={zeroTrustContent}
      />
    </div>
  );
};

export default ServicesExpertise;