import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Lightbulb, Cloud, Code, LineChart, Users, Camera, Megaphone } from 'lucide-react';
import Popup from '../components/Popup';

const ServicesExpertise = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState({ title: '', content: '' });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const openPopup = (title, content) => {
    setPopupContent({ title, content });
    setIsPopupOpen(true);
  };

  const services = [
    {
      icon: Shield,
      title: "Cybersäkerhet",
      description: "Implementera och optimera marknadsledande säkerhetslösningar.",
      examples: [
        {
          title: "Säkerhetsrevision och riskbedömning",
          content: (
            <div>
              <p>En säkerhetsrevision och riskbedömning är grundläggande för att identifiera sårbarheter och potentiella hot mot en organisations IT-infrastruktur.</p>
              <h3 className="font-semibold mt-2 mb-1">Processen inkluderar:</h3>
              <ul className="list-disc pl-5">
                <li>Genomgång av befintliga säkerhetspolicyer och procedurer</li>
                <li>Identifiering av kritiska tillgångar och data</li>
                <li>Analys av potentiella hot och sårbarheter</li>
                <li>Bedömning av nuvarande säkerhetsåtgärders effektivitet</li>
                <li>Rekommendationer för förbättringar och riskreducering</li>
              </ul>
              <p className="mt-2">Resultatet av denna process ger en solid grund för att utveckla en omfattande cybersäkerhetsstrategi.</p>
            </div>
          )
        },
        {
          title: "Implementering av Zero Trust-arkitektur",
          content: (
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
          )
        },
        {
          title: "Utbildning i cybersäkerhet för anställda",
          content: (
            <div>
              <p>Utbildning i cybersäkerhet för anställda är avgörande för att skapa en stark säkerhetskultur inom organisationen.</p>
              <h3 className="font-semibold mt-2 mb-1">Utbildningen omfattar vanligtvis:</h3>
              <ul className="list-disc pl-5">
                <li>Grundläggande principer för informationssäkerhet</li>
                <li>Identifiering och hantering av phishing-försök</li>
                <li>Säker hantering av lösenord och autentisering</li>
                <li>Säker användning av företagets enheter och nätverk</li>
                <li>Hantering av känslig information och dataskydd</li>
                <li>Rapportering av misstänkta säkerhetsincidenter</li>
              </ul>
              <p className="mt-2">Genom regelbunden utbildning och uppdatering kan organisationen väsentligt minska risken för säkerhetsincidenter orsakade av mänskliga faktorer.</p>
            </div>
          )
        }
      ],
      experts: ["Tobias Karlsson", "Patrik Berg"]
    },
    {
      icon: Cloud,
      title: "Molntjänster & HCI",
      description: "Optimera infrastruktur med skalbara och säkra molnlösningar, särskilt Nutanix för HCI.",
      examples: [
        {
          title: "Migrering från on-premise till molnbaserad infrastruktur",
          content: (
            <div>
              <p>Migrering från on-premise till molnbaserad infrastruktur är en komplex process som kräver noggrann planering och genomförande.</p>
              <h3 className="font-semibold mt-2 mb-1">Processen inkluderar vanligtvis:</h3>
              <ul className="list-disc pl-5">
                <li>Utvärdering av nuvarande infrastruktur och applikationer</li>
                <li>Val av lämplig molnplattform (t.ex. AWS, Azure, Google Cloud)</li>
                <li>Planering av datamigrering och applikationsanpassning</li>
                <li>Implementering av säkerhets- och efterlevnadsåtgärder i molnmiljön</li>
                <li>Stegvis migrering och testning av system och data</li>
                <li>Utbildning av personal i den nya molnmiljön</li>
              </ul>
              <p className="mt-2">En framgångsrik migrering resulterar i ökad flexibilitet, skalbarhet och potentiellt lägre driftskostnader för organisationen.</p>
            </div>
          )
        },
        {
          title: "Implementering av hybrid molnlösningar",
          content: (
            <div>
              <p>Hybrid molnlösningar kombinerar fördelarna med både privata och offentliga moln för att skapa en flexibel och effektiv IT-infrastruktur.</p>
              <h3 className="font-semibold mt-2 mb-1">Fördelar med hybrid moln:</h3>
              <ul className="list-disc pl-5">
                <li>Flexibilitet att välja optimal plattform för olika arbetsbelastningar</li>
                <li>Förbättrad datasäkerhet genom att behålla känslig information on-premise</li>
                <li>Kostnadseffektivitet genom att utnyttja offentliga molntjänster för skalbarhet</li>
                <li>Möjlighet att gradvis migrera till molnet i egen takt</li>
                <li>Förbättrad disaster recovery och business continuity</li>
              </ul>
              <p className="mt-2">Implementering av en hybrid molnlösning kräver noggrann planering av nätverksarkitektur, säkerhet och datahantering för att säkerställa sömlös integration mellan olika miljöer.</p>
            </div>
          )
        },
        {
          title: "Implementering och optimering av Nutanix HCI",
          content: (
            <div>
              <p>Nutanix Hyperconverged Infrastructure (HCI) erbjuder en kraftfull och flexibel plattform som integrerar compute, storage och nätverk i ett enda system. Implementering av Nutanix HCI kan revolutionera din IT-infrastruktur.</p>
              <h3 className="font-semibold mt-2 mb-1">Fördelar med Nutanix HCI:</h3>
              <ul className="list-disc pl-5">
                <li>Enhetlig hantering: Compute, storage och nätverk i samma kluster för enklare administration</li>
                <li>Hypervisor-flexibilitet: Stöd för AHV (Acropolis Hypervisor), VMware och Hyper-V</li>
                <li>Avancerad dataoptimering: Inbyggd deduplicering, komprimering och erasure coding för effektiv datalagring</li>
                <li>Skalbarhet: Enkel expansion av resurser efter behov</li>
                <li>Förbättrad prestanda: Optimerad för både virtualiserade och containeriserade applikationer</li>
                <li>Inbyggd säkerhet: Omfattande säkerhetsfunktioner för att skydda data och applikationer</li>
                <li>Kostnadseffektivitet: Lägre TCO jämfört med traditionell infrastruktur</li>
              </ul>
              <h3 className="font-semibold mt-4 mb-1">Implementeringsprocess:</h3>
              <ol className="list-decimal pl-5">
                <li>Behovsanalys och dimensionering av Nutanix-kluster</li>
                <li>Val av lämplig hårdvara och Nutanix-licens</li>
                <li>Installation och konfiguration av Nutanix-noder</li>
                <li>Migrering av befintliga virtuella maskiner och data</li>
                <li>Optimering av resursutnyttjande och prestanda</li>
                <li>Konfiguration av avancerade funktioner som replikering och DR</li>
                <li>Utbildning av IT-personal i Nutanix-administration</li>
              </ol>
              <p className="mt-2">Genom att implementera Nutanix HCI kan organisationer uppnå högre flexibilitet, förbättrad prestanda och förenklad IT-hantering, vilket leder till ökad innovation och affärsnytta.</p>
            </div>
          )
        }
      ],
      experts: ["Tobias Karlsson", "Patrik Berg"]
    },
    // ... (remaining services stay the same)
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ y }}
      >
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://i.imgur.com/oYOGoMu.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: useTransform(scrollY, [0, 500], [0, 150]),
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0C2A3B] to-[#3A0A3B] opacity-90 z-10"></div>
        <div className="relative z-20 text-center px-6 max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-2 text-white tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Våra Tjänster & Expertiser
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-100 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Utforska vårt breda utbud av tjänster och hur vi kan hjälpa ditt företag att växa och innovera
          </motion.p>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-48"> {/* Increased top padding here */}
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
                      <li key={idx}>
                        <span 
                          className="cursor-pointer text-gray-600 hover:underline"
                          onClick={() => openPopup(example.title, example.content)}
                        >
                          {example.title}
                        </span>
                      </li>
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
        title={popupContent.title}
        content={popupContent.content}
      />
    </div>
  );
};

export default ServicesExpertise;