import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Lightbulb, Cloud, Code, LineChart, Users, Camera, Megaphone } from 'lucide-react';
import Popup from '../components/Popup';

const ServicesExpertise = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState({ title: '', content: '' });

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
        },
        {
          title: "Implementering av Multi-Factor Authentication",
          content: (
            <div>
              <p>Multi-Factor Authentication (MFA) är en kritisk säkerhetsåtgärd som avsevärt förbättrar skyddet av användarnas konton och organisationens data.</p>
              <h3 className="font-semibold mt-2 mb-1">Fördelar med MFA:</h3>
              <ul className="list-disc pl-5">
                <li>Ökad säkerhet: Kräver flera verifieringsmetoder, vilket gör det mycket svårare för obehöriga att få åtkomst.</li>
                <li>Skydd mot lösenordsstölder: Även om ett lösenord komprometteras, förblir kontot säkert.</li>
                <li>Regelefterlevnad: Hjälper organisationer att uppfylla olika säkerhetsstandarder och regelverk.</li>
                <li>Flexibilitet: Kan implementeras på olika sätt (t.ex. SMS, appar, biometriska data) för att passa organisationens behov.</li>
              </ul>
              <h3 className="font-semibold mt-2 mb-1">Implementeringsprocess:</h3>
              <ul className="list-disc pl-5">
                <li>Utvärdering av organisationens behov och val av lämplig MFA-lösning</li>
                <li>Integrering med befintliga system och applikationer</li>
                <li>Utbildning av användare i hur man använder MFA</li>
                <li>Gradvis utrullning och testning</li>
                <li>Kontinuerlig övervakning och uppdatering av MFA-policyer</li>
              </ul>
              <p className="mt-2">Genom att implementera MFA kan organisationer signifikant förbättra sin säkerhetsposition och minska risken för obehörig åtkomst och dataintrång.</p>
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
          title: "Optimering av Nutanix HCI-miljöer",
          content: (
            <div>
              <p>Nutanix HCI (Hyperconverged Infrastructure) erbjuder en kraftfull plattform för att förenkla och effektivisera datacenteroperationer.</p>
              <h3 className="font-semibold mt-2 mb-1">Optimering av Nutanix HCI-miljöer omfattar:</h3>
              <ul className="list-disc pl-5">
                <li>Finjustering av resursallokering för optimal prestanda</li>
                <li>Implementering av automatiserade arbetsflöden för effektiv hantering</li>
                <li>Konfiguration av avancerade lagringsfunktioner som deduplicering och komprimering</li>
                <li>Säkerställande av effektiv skalning och kapacitetsplanering</li>
                <li>Implementering av robusta backup- och återställningslösningar</li>
                <li>Optimering av nätverkskonfigurationer för maximal throughput</li>
              </ul>
              <p className="mt-2">Genom att optimera Nutanix HCI-miljön kan organisationer uppnå högre prestanda, bättre resursanvändning och förenklad IT-hantering.</p>
            </div>
          )
        }
      ],
      experts: ["Tobias Karlsson", "Patrik Berg"]
    },
    {
      icon: Code,
      title: "Systemutveckling",
      description: "Skräddarsydda mjukvarulösningar för effektivisering och innovation.",
      examples: [
        {
          title: "Utveckling av kundanpassade affärssystem",
          content: (
            <div>
              <p>Utveckling av kundanpassade affärssystem innebär att skapa skräddarsydda lösningar som perfekt matchar en organisations unika processer och behov.</p>
              <h3 className="font-semibold mt-2 mb-1">Processen inkluderar vanligtvis:</h3>
              <ul className="list-disc pl-5">
                <li>Detaljerad behovsanalys och kravspecifikation</li>
                <li>Design av systemarkitektur och användargränssnitt</li>
                <li>Agil utvecklingsprocess med kontinuerlig kundåterkoppling</li>
                <li>Integration med befintliga system och databaser</li>
                <li>Omfattande testning och kvalitetssäkring</li>
                <li>Användarutbildning och dokumentation</li>
                <li>Löpande support och vidareutveckling</li>
              </ul>
              <p className="mt-2">Ett välutvecklat kundanpassat affärssystem kan dramatiskt förbättra effektiviteten, beslutsfattandet och konkurrenskraften för en organisation.</p>
            </div>
          )
        },
        {
          title: "Skapande av API:er för systemintegration",
          content: (
            <div>
              <p>Skapande av API:er (Application Programming Interfaces) är avgörande för att möjliggöra sömlös integration mellan olika system och applikationer.</p>
              <h3 className="font-semibold mt-2 mb-1">Viktiga aspekter vid API-utveckling:</h3>
              <ul className="list-disc pl-5">
                <li>Design av tydliga och konsistenta API-endpoints</li>
                <li>Implementering av robust autentisering och auktorisering</li>
                <li>Hantering av dataformat och serialisering (t.ex. JSON, XML)</li>
                <li>Versionshantering för att stödja bakåtkompatibilitet</li>
                <li>Implementering av felhantering och loggning</li>
                <li>Optimering av prestanda och skalbarhet</li>
                <li>Skapande av omfattande API-dokumentation</li>
              </ul>
              <p className="mt-2">Väldesignade API:er möjliggör effektiv datautbyte mellan system, förbättrar flexibiliteten i IT-infrastrukturen och underlättar framtida integrationer och utveckling.</p>
            </div>
          )
        },
        {
          title: "Modernisering av legacy-system",
          content: (
            <div>
              <p>Modernisering av legacy-system är en kritisk process för att hålla organisationens IT-infrastruktur uppdaterad, säker och effektiv.</p>
              <h3 className="font-semibold mt-2 mb-1">Moderniseringsprocessen kan omfatta:</h3>
              <ul className="list-disc pl-5">
                <li>Utvärdering av befintliga system och identifiering av förbättringsområden</li>
                <li>Migrering från föråldrade teknologier till moderna plattformar</li>
                <li>Refaktorering av kod för förbättrad underhållbarhet och prestanda</li>
                <li>Implementering av moderna arkitekturmönster (t.ex. mikroservices)</li>
                <li>Förbättring av användargränssnitt och användarupplevelse</li>
                <li>Integration med moderna molntjänster och API:er</li>
                <li>Uppdatering av säkerhetsfunktioner och dataskydd</li>
              </ul>
              <p className="mt-2">Genom att modernisera legacy-system kan organisationer öka sin operativa effektivitet, förbättra säkerheten och bättre möta moderna affärskrav.</p>
            </div>
          )
        }
      ],
      experts: ["Robert Nesta Nuhu", "Patrik Berg"]
    },
    {
      icon: LineChart,
      title: "Affärsstrategi & Utveckling",
      description: "Utveckla framtidssäkrade affärsstrategier för ökad konkurrenskraft i en föränderlig marknad.",
      examples: [
        {
          title: "Utveckling av innovativa affärsmodeller",
          content: (
            <div>
              <p>Utveckling av innovativa affärsmodeller handlar om att omforma eller skapa nya sätt att generera värde i en föränderlig marknad.</p>
              <h3 className="font-semibold mt-2 mb-1">Processen inkluderar:</h3>
              <ul className="list-disc pl-5">
                <li>Analys av nuvarande affärsmodell och marknadstrender</li>
                <li>Identifiering av nya möjligheter och potentiella hot</li>
                <li>Utformning av nya värdeerbjudanden</li>
                <li>Utveckling av kundrelationer och kanaler</li>
                <li>Anpassning av interna processer och resurser</li>
                <li>Skapande av nya intäktsströmmar</li>
                <li>Utvärdering och iterativ förbättring av affärsmodellen</li>
              </ul>
              <p className="mt-2">En välutvecklad innovativ affärsmodell kan öppna nya marknader, förbättra kundupplevelsen och skapa långsiktig konkurrenskraft.</p>
            </div>
          )
        },
        {
          title: "Strategisk transformationsplan",
          content: (
            <div>
              <p>En strategisk transformationsplan är en omfattande strategi för att anpassa organisationen till framtida utmaningar och möjligheter.</p>
              <h3 className="font-semibold mt-2 mb-1">Nyckelkomponenter i planen:</h3>
              <ul className="list-disc pl-5">
                <li>Utvärdering av organisationens nuvarande position</li>
                <li>Definiering av en tydlig vision och mål</li>
                <li>Kartläggning av nödvändiga organisatoriska förändringar</li>
                <li>Strategi för kompetensutveckling och kulturell förändring</li>
                <li>Plan för strategiska investeringar</li>
                <li>Omdesign av affärsprocesser för ökad effektivitet</li>
                <li>Utveckling av en datadriven beslutskultur</li>
              </ul>
              <p className="mt-2">En väl genomförd strategisk transformationsplan hjälper organisationer att bli mer agila, kundcentrerade och innovativa i en snabbt föränderlig miljö.</p>
            </div>
          )
        },
        {
          title: "Strategisk marknadsplanering",
          content: (
            <div>
              <p>Strategisk marknadsplanering handlar om att utveckla en omfattande plan för att nå och engagera målgrupper, integrerat med övergripande affärsmål.</p>
              <h3 className="font-semibold mt-2 mb-1">Viktiga aspekter av planeringen:</h3>
              <ul className="list-disc pl-5">
                <li>Djupgående analys av målgrupper och marknadstrender</li>
                <li>Utveckling av en enhetlig varumärkesstrategi</li>
                <li>Val och optimering av marknadsföringskanaler</li>
                <li>Skapande av en innehållsstrategi</li>
                <li>Integrering av kunddata för personaliserad marknadsföring</li>
                <li>Utformning av mätbara KPI:er för marknadsföring</li>
                <li>Plan för kontinuerlig optimering baserad på marknadsinsikter</li>
              </ul>
              <p className="mt-2">En effektiv strategisk marknadsplan ökar varumärkessynligheten, förbättrar kundengagemanget och driver affärstillväxt.</p>
            </div>
          )
        }
      ],
      experts: ["Tobias Karlsson", "Tim Omorogieva"]
    },
    // ... (remaining services stay the same)
  ];

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