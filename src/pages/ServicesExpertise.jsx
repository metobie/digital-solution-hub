import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Briefcase, Lightbulb, Cloud, Code, LineChart, Users, Camera, Megaphone } from 'lucide-react';
import ExpandableServiceCard from '../components/ExpandableServiceCard';

const ServicesExpertise = () => {
  const [expandedRows, setExpandedRows] = useState([false, false, false]);

  const services = [
    {
      icon: Shield,
      title: "Cybersäkerhet",
      description: "Implementera och optimera marknadsledande säkerhetslösningar för att skydda din verksamhet mot dagens avancerade cyberhot.",
      examples: [
        { title: "Säkerhetsrevision och riskbedömning", description: "Genomför omfattande säkerhetsgranskningar för att identifiera sårbarheter och utveckla skräddarsydda åtgärdsplaner." },
        { title: "Implementering av Zero Trust-arkitektur", description: "Designa och implementera en Zero Trust-säkerhetsmodell för att förbättra din organisations övergripande säkerhetsställning." },
        { title: "Utbildning i cybersäkerhet för anställda", description: "Skapa och leverera skräddarsydda utbildningsprogram för att öka medvetenheten om cybersäkerhet bland personalen." }
      ],
      experts: ["Tobias Karlsson", "Patrik Berg"]
    },
    {
      icon: Cloud,
      title: "Molntjänster & HCI",
      description: "Optimera infrastruktur med skalbara och säkra molnlösningar, särskilt Nutanix för HCI.",
      examples: [
        { title: "Migrering från on-premise till molnbaserad infrastruktur", description: "Planera och genomför en sömlös migrering av befintliga system till molnbaserade lösningar för ökad flexibilitet och skalbarhet." },
        { title: "Implementering av hybrid molnlösningar", description: "Designa och implementera en hybrid molnarkitektur som kombinerar fördelarna med både privata och offentliga molntjänster." },
        { title: "Optimering av Nutanix HCI-miljöer", description: "Finjustera och optimera Nutanix HCI-implementeringar för maximal prestanda och resurseffektivitet." }
      ],
      experts: ["Tobias Karlsson", "Patrik Berg"]
    },
    {
      icon: Code,
      title: "Systemutveckling",
      description: "Skräddarsydda mjukvarulösningar för effektivisering och innovation.",
      examples: [
        { title: "Utveckling av kundanpassade affärssystem", description: "Skapa skräddarsydda affärssystem som möter din organisations unika behov och processer." },
        { title: "Skapande av API:er för systemintegration", description: "Utveckla robusta API:er för att möjliggöra sömlös integration mellan olika system och applikationer." },
        { title: "Modernisering av legacy-system", description: "Uppdatera och modernisera äldre system för att förbättra prestanda, säkerhet och användarupplevelse." }
      ],
      experts: ["Robert Nesta Nuhu", "Patrik Berg"]
    },
    {
      icon: LineChart,
      title: "Digital Strategi",
      description: "Utveckla framtidssäkrade affärsstrategier med digital integration för ökad konkurrenskraft.",
      examples: [
        { title: "Utveckling av digital affärsmodell", description: "Skapa en omfattande digital strategi som integrerar teknologi i alla aspekter av verksamheten för att driva tillväxt och innovation." },
        { title: "Digital transformationsplan för organisationen", description: "Utforma en detaljerad plan för att guida din organisation genom en framgångsrik digital transformation." },
        { title: "Strategisk digital marknadsplanering", description: "Utveckla en datadriven digital marknadsföringsstrategi för att öka varumärkessynlighet och kundengagemang." }
      ],
      experts: ["Tobias Karlsson", "Tim Omorogieva"]
    },
    {
      icon: Briefcase,
      title: "IT-Konsulttjänster",
      description: "Expert rådgivning för optimering av IT-infrastruktur, processer och livscykelhantering.",
      examples: [
        { title: "IT-infrastrukturanalys och optimeringsförslag", description: "Genomför en grundlig analys av befintlig IT-infrastruktur och ge rekommendationer för optimering och effektivisering." },
        { title: "Projektledning för IT-implementeringar", description: "Leda och hantera komplexa IT-projekt från planering till framgångsrikt genomförande." },
        { title: "Livscykelhantering (LCM) för IT-system", description: "Utveckla och implementera strategier för effektiv hantering av IT-systems hela livscykel." },
        { title: "Kostnadseffektivisering av IT-operationer", description: "Identifiera områden för kostnadsbesparingar och implementera lösningar för att optimera IT-budgeten." }
      ],
      experts: ["Tobias Karlsson", "Patrik Berg"]
    },
    {
      icon: Lightbulb,
      title: "Innovationsledning",
      description: "Främja en kultur av innovation och teknologisk framåtanda.",
      examples: [
        { title: "Workshops för idégenerering och innovationsprocesser", description: "Facilitera kreativa workshops för att stimulera nya idéer och utveckla innovativa lösningar." },
        { title: "Implementering av innovationsledningssystem", description: "Utforma och implementera strukturerade system för att kontinuerligt driva och hantera innovation inom organisationen." },
        { title: "Utveckling av interna innovationsprogram", description: "Skapa och lansera program som uppmuntrar och belönar innovativt tänkande bland anställda." }
      ],
      experts: ["Tim Omorogieva", "Robert Nesta Nuhu"]
    },
    {
      icon: Users,
      title: "Ledarskapsutbildning",
      description: "Skräddarsydda program för att utveckla framtidens ledare i en komplex och föränderlig värld.",
      examples: [
        { title: "Transformativt ledarskap för framtiden", description: "Utbilda ledare i att driva förändring och inspirera innovation i en snabbt föränderlig digital miljö." },
        { title: "Utveckling av autentiskt ledarskap", description: "Hjälp ledare att utveckla sin unika ledarstil och bygga förtroende genom autenticitet och integritet." },
        { title: "Strategiskt ledarskap och organisatorisk framgång", description: "Träna ledare i att tänka strategiskt och fatta beslut som driver långsiktig organisatorisk framgång." }
      ],
      experts: ["Tim Omorogieva"]
    },
    {
      icon: Camera,
      title: "Kreativ Innehållsproduktion",
      description: "Professionell foto- och videoproduktion för digital närvaro och varumärkesbyggande.",
      examples: [
        { title: "Produktion av företagspresentationsvideos", description: "Skapa engagerande och professionella videor som effektivt kommunicerar ditt företags värderingar och erbjudanden." },
        { title: "Fotosessioner för personalporträtt och företagsmiljöer", description: "Genomför högkvalitativa fotosessioner för att fånga din organisations unika kultur och personalitet." },
        { title: "Skapande av visuellt innehåll för sociala medier", description: "Producera attraktivt och delbart visuellt innehåll anpassat för olika sociala medieplattformar." }
      ],
      experts: ["Emelie Nylander"]
    },
    {
      icon: Megaphone,
      title: "Digital Marknadsföring",
      description: "Strategisk digital marknadsföring, sociala medier-hantering och eventplanering.",
      examples: [
        { title: "Utveckling av innehållsstrategier för sociala medier", description: "Skapa omfattande strategier för att maximera engagemang och räckvidd på sociala medieplattformar." },
        { title: "Skapande och hantering av digitala reklamkampanjer", description: "Utforma, implementera och optimera digitala reklamkampanjer för att nå specifika målgrupper och driva konverteringar." },
        { title: "Planering och genomförande av företagsevent", description: "Organisera och genomföra minnesvärda företagsevent som stärker varumärket och bygger relationer." }
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
  );
};

export default ServicesExpertise;