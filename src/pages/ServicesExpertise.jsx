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
          title: "Implementering av Nutanix (HCI)",
          content: (
            <div>
              <p>Nutanix HCI (Hyperconverged Infrastructure) erbjuder en kraftfull plattform för att förenkla och effektivisera datacenteroperationer.</p>
              <h3 className="font-semibold mt-2 mb-1">Implementering av Nutanix HCI omfattar:</h3>
              <ul className="list-disc pl-5">
                <li>Utvärdering av nuvarande infrastruktur och krav</li>
                <li>Design av Nutanix-kluster baserat på organisationens behov</li>
                <li>Installation och konfiguration av Nutanix-noder</li>
                <li>Migrering av befintliga arbetsbelastningar till Nutanix-plattformen</li>
                <li>Konfiguration av avancerade funktioner som deduplicering, komprimering och erasure coding</li>
                <li>Integrering med befintliga system och nätverk</li>
                <li>Utbildning av IT-personal i Nutanix-administration</li>
              </ul>
              <p className="mt-2">Genom att implementera Nutanix HCI kan organisationer uppnå högre prestanda, bättre resursanvändning och förenklad IT-hantering, samtidigt som de drar nytta av funktioner som stöd för flera hypervisors (AHV, VMware, Hyper-V) och avancerad dataoptimering.</p>
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
      title: "Digital Strategi",
      description: "Utveckla framtidssäkrade affärsstrategier med digital integration för ökad konkurrenskraft.",
      examples: [
        {
          title: "Utveckling av digital affärsmodell",
          content: (
            <div>
              <p>Utveckling av en digital affärsmodell handlar om att omforma eller skapa nya sätt att generera värde genom digitala kanaler och teknologier.</p>
              <h3 className="font-semibold mt-2 mb-1">Processen inkluderar:</h3>
              <ul className="list-disc pl-5">
                <li>Analys av nuvarande affärsmodell och marknadstrender</li>
                <li>Identifiering av digitala möjligheter och hot</li>
                <li>Utformning av nya värdeerbjudanden baserade på digital teknik</li>
                <li>Utveckling av digitala kundrelationer och kanaler</li>
                <li>Anpassning av interna processer och resurser för digital leverans</li>
                <li>Skapande av nya intäktsströmmar genom digitala lösningar</li>
                <li>Utvärdering och iterativ förbättring av den digitala affärsmodellen</li>
              </ul>
              <p className="mt-2">En välutvecklad digital affärsmodell kan öppna nya marknader, förbättra kundupplevelsen och skapa långsiktig konkurrenskraft i en allt mer digitaliserad värld.</p>
            </div>
          )
        },
        {
          title: "Digital transformationsplan för organisationen",
          content: (
            <div>
              <p>En digital transformationsplan är en omfattande strategi för att integrera digital teknik i alla aspekter av en verksamhet, vilket fundamentalt förändrar hur organisationen opererar och levererar värde.</p>
              <h3 className="font-semibold mt-2 mb-1">Nyckelkomponenter i planen:</h3>
              <ul className="list-disc pl-5">
                <li>Utvärdering av organisationens digitala mognad</li>
                <li>Definiering av en tydlig digital vision och mål</li>
                <li>Kartläggning av nödvändiga organisatoriska förändringar</li>
                <li>Strategi för kompetensutveckling och kulturell förändring</li>
                <li>Plan för teknologiska investeringar och infrastrukturutveckling</li>
                <li>Omdesign av affärsprocesser för digital effektivitet</li>
                <li>Utveckling av en datadriven beslutskultur</li>
              </ul>
              <p className="mt-2">En väl genomförd digital transformationsplan hjälper organisationer att bli mer agila, kundcentrerade och innovativa i en snabbt föränderlig digital miljö.</p>
            </div>
          )
        },
        {
          title: "Strategisk digital marknadsplanering",
          content: (
            <div>
              <p>Strategisk digital marknadsplanering handlar om att utveckla en omfattande plan för att nå och engagera målgrupper genom digitala kanaler, integrerat med övergripande affärsmål.</p>
              <h3 className="font-semibold mt-2 mb-1">Viktiga aspekter av planeringen:</h3>
              <ul className="list-disc pl-5">
                <li>Djupgående analys av målgrupper och digitala beteenden</li>
                <li>Utveckling av en enhetlig digital varumärkesstrategi</li>
                <li>Val och optimering av digitala marknadsföringskanaler</li>
                <li>Skapande av en innehållsstrategi för digitala plattformar</li>
                <li>Integrering av kunddata för personaliserad marknadsföring</li>
                <li>Utformning av mätbara KPI:er för digital marknadsföring</li>
                <li>Plan för kontinuerlig optimering baserad på datainsikter</li>
              </ul>
              <p className="mt-2">En effektiv digital marknadsplan ökar varumärkessynligheten, förbättrar kundengagemanget och driver affärstillväxt i den digitala sfären.</p>
            </div>
          )
        }
      ],
      experts: ["Tobias Karlsson", "Tim Omorogieva"]
    },
    {
      icon: Briefcase,
      title: "IT-Konsulttjänster",
      description: "Expert rådgivning för optimering av IT-infrastruktur, processer och livscykelhantering.",
      examples: [
        {
          title: "IT-infrastrukturanalys och optimeringsförslag",
          content: (
            <div>
              <p>En IT-infrastrukturanalys och optimeringsförslag syftar till att utvärdera och förbättra en organisations tekniska fundament för att stödja affärsmål och operativ effektivitet.</p>
              <h3 className="font-semibold mt-2 mb-1">Processen inkluderar vanligtvis:</h3>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Genomgång av nuvarande hårdvara, mjukvara och nätverkskomponenter</li>
                <li>Prestandaanalys och identifiering av flaskhalsar</li>
                <li>Säkerhetsgenomgång och riskbedömning</li>
                <li>Utvärdering av skalbarhet och flexibilitet</li>
                <li>Analys av kostnadseffektivitet och ROI för IT-investeringar</li>
                <li>Rekommendationer för teknologiska uppgraderingar och förbättringar</li>
                <li>Förslag på implementering av moderna IT-lösningar (t.ex. molntjänster, virtualisering)</li>
              </ul>
              <p className="mt-2">Ett väl genomfört optimeringsarbete kan leda till förbättrad prestanda, ökad säkerhet, lägre driftskostnader och bättre anpassning till organisationens långsiktiga mål.</p>
            </div>
          )
        },
        {
          title: "Projektledning för IT-implementeringar",
          content: (
            <div>
              <p>Projektledning för IT-implementeringar är avgörande för att säkerställa framgångsrik leverans av komplexa teknologiska lösningar inom tid, budget och omfattning.</p>
              <h3 className="font-semibold mt-2 mb-1">Nyckelaspekter av IT-projektledning inkluderar:</h3>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Detaljerad projektplanering och scope-definition</li>
                <li>Resursallokering och teamsammansättning</li>
                <li>Riskhantering och beredskapsplanering</li>
                <li>Kontinuerlig kommunikation med intressenter</li>
                <li>Kvalitetssäkring och testning</li>
                <li>Förändringsledning och användaracceptans</li>
                <li>Budgetövervakning och kostnadskontroll</li>
                <li>Dokumentation och kunskapsöverföring</li>
              </ul>
              <p className="mt-2">Effektiv projektledning säkerställer att IT-implementeringar levererar avsett värde, minimerar störningar i verksamheten och lägger grunden för framtida teknologisk utveckling.</p>
            </div>
          )
        },
        {
          title: "Livscykelhantering (LCM) för IT-system",
          content: (
            <div>
              <p>Livscykelhantering (LCM) för IT-system är en strategisk approach för att hantera alla aspekter av ett systems livscykel, från planering och implementering till avveckling.</p>
              <h3 className="font-semibold mt-2 mb-1">Nyckelkomponenter i LCM inkluderar:</h3>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Strategisk planering och behovsanalys</li>
                <li>Design och utveckling av system</li>
                <li>Implementering och driftsättning</li>
                <li>Löpande underhåll och support</li>
                <li>Regelbundna uppdateringar och uppgraderingar</li>
                <li>Prestandaövervakning och optimering</li>
                <li>Säkerhetshantering och patchning</li>
                <li>Planering för avveckling och datamigration</li>
              </ul>
              <p className="mt-2">Effektiv LCM säkerställer att IT-system förblir effektiva, säkra och anpassade till verksamhetens behov under hela sin livstid, samtidigt som det optimerar investeringar och minimerar risker.</p>
            </div>
          )
        },
        {
          title: "Kostnadseffektivisering av IT-operationer",
          content: (
            <div>
              <p>Kostnadseffektivisering av IT-operationer handlar om att optimera användningen av teknologiska resurser för att maximera värdet och minimera onödiga utgifter.</p>
              <h3 className="font-semibold mt-2 mb-1">Strategier för kostnadseffektivisering kan inkludera:</h3>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Konsolidering och rationalisering av IT-infrastruktur</li>
                <li>Implementering av automatisering och självbetjäningslösningar</li>
                <li>Optimering av licenshantering och mjukvaruanvändning</li>
                <li>Utvärdering och omförhandling av leverantörsavtal</li>
                <li>Implementering av energieffektiva IT-lösningar</li>
                <li>Adoption av molntjänster för flexibel resursanvändning</li>
                <li>Standardisering av hårdvara och mjukvara</li>
                <li>Förbättring av IT Service Management (ITSM) processer</li>
              </ul>
              <p className="mt-2">Genom att implementera dessa strategier kan organisationer signifikant reducera sina IT-kostnader samtidigt som de upprätthåller eller förbättrar servicekvaliteten och innovationsförmågan.</p>
            </div>
          )
        }
      ],
      experts: ["Tobias Karlsson", "Patrik Berg"]
    },
    {
      icon: Lightbulb,
      title: "Innovationsledning",
      description: "Främja en kultur av innovation och teknologisk framåtanda.",
      examples: [
        {
          title: "Workshops för idégenerering och innovationsprocesser",
          content: (
            <div>
              <p>Workshops för idégenerering och innovationsprocesser är kraftfulla verktyg för att stimulera kreativitet och driva fram nya lösningar inom en organisation.</p>
              <h3 className="font-semibold mt-2 mb-1">Dessa workshops kan inkludera:</h3>
              <ul className="list-disc pl-5">
                <li>Brainstormingsessioner med olika kreativa tekniker</li>
                <li>Design Thinking-övningar för användarcentrerad innovation</li>
                <li>Scenarioplanering för framtida marknader och teknologier</li>
                <li>Tvärfunktionella team-övningar för att bryta silos</li>
                <li>Prototyping och snabb konceptutveckling</li>
                <li>Utvärdering och prioritering av idéer</li>
                <li>Utveckling av innovationsroadmaps</li>
              </ul>
              <p className="mt-2">Genom att regelbundet hålla sådana workshops kan organisationer skapa en kontinuerlig ström av innovativa idéer och lösningar som kan driva verksamheten framåt.</p>
            </div>
          )
        },
        {
          title: "Implementering av innovationsledningssystem",
          content: (
            <div>
              <p>Implementering av ett innovationsledningssystem syftar till att systematisera och optimera organisationens förmåga att generera, utvärdera och implementera innovativa idéer.</p>
              <h3 className="font-semibold mt-2 mb-1">Nyckelkomponenter i ett innovationsledningssystem:</h3>
              <ul className="list-disc pl-5">
                <li>Etablering av en tydlig innovationsstrategi och mål</li>
                <li>Skapande av strukturerade processer för idégenerering och -hantering</li>
                <li>Implementering av verktyg för samarbete och idédelning</li>
                <li>Utveckling av KPI:er för att mäta innovationsframgång</li>
                <li>Allokering av resurser och budget för innovationsprojekt</li>
                <li>Skapande av belöningssystem för innovativa bidrag</li>
                <li>Etablering av partnerskap och öppna innovationsinitiativ</li>
              </ul>
              <p className="mt-2">Ett väl implementerat innovationsledningssystem kan dramatiskt öka en organisations förmåga att kontinuerligt innovera och anpassa sig till föränderliga marknadsförhållanden.</p>
            </div>
          )
        },
        {
          title: "Utveckling av interna innovationsprogram",
          content: (
            <div>
              <p>Utveckling av interna innovationsprogram syftar till att skapa en strukturerad miljö där medarbetare uppmuntras och ges möjlighet att bidra med innovativa idéer och lösningar.</p>
              <h3 className="font-semibold mt-2 mb-1">Ett effektivt internt innovationsprogram kan inkludera:</h3>
              <ul className="list-disc pl-5">
                <li>Skapande av en dedikerad innovationsplattform eller portal</li>
                <li>Regelbundna innovationsutmaningar eller hackathons</li>
                <li>Mentorprogram för att stödja innovatörer</li>
                <li>Tillhandahållande av resurser och tid för innovationsprojekt</li>
                <li>Utbildning i innovationsmetoder och kreativt tänkande</li>
                <li>Erkännande och belöning av framgångsrika innovationer</li>
                <li>Skapande av tvärfunktionella innovationsteam</li>
              </ul>
              <p className="mt-2">Genom att implementera ett robust internt innovationsprogram kan organisationer frigöra den kreativa potentialen hos sina medarbetare och skapa en kultur av kontinuerlig förbättring och innovation.</p>
            </div>
          )
        }
      ],
      experts: ["Tim Omorogieva", "Robert Nesta Nuhu"]
    },
    {
      icon: Users,
      title: "Ledarskapsutbildning",
      description: "Skräddarsydda program för att utveckla framtidens ledare i en komplex och föränderlig värld.",
      examples: [
        {
          title: "Transformativt ledarskap för framtiden",
          content: (
            <div>
              <p>Vår utbildning i transformativt ledarskap förbereder ledare för att navigera och leda i en värld präglad av snabb förändring och komplexitet.</p>
              <h3 className="font-semibold mt-2 mb-1">Nyckelområden i utbildningen inkluderar:</h3>
              <ul className="list-disc pl-5">
                <li>Utveckling av en inspirerande och engagerande ledarskapsfilosofi</li>
                <li>Strategier för att leda förändring och innovation i organisationer</li>
                <li>Utveckling av emotionell intelligens och empatiskt ledarskap</li>
                <li>Tekniker för effektiv kommunikation och påverkan</li>
                <li>Skapande av en inkluderande och högpresterande organisationskultur</li>
                <li>Beslutsfattande under osäkerhet och komplexitet</li>
                <li>Balansering av kortsiktiga resultat med långsiktig hållbarhet</li>
              </ul>
              <p className="mt-2">Genom denna utbildning utvecklar ledare förmågan att inspirera, engagera och leda sina team genom utmaningar och mot gemensamma mål.</p>
            </div>
          )
        },
        {
          title: "Utveckling av autentiskt ledarskap",
          content: (
            <div>
              <p>Utveckling av autentiskt ledarskap fokuserar på att hjälpa ledare att upptäcka och förstärka sin unika ledarstil baserad på personliga värderingar, styrkor och erfarenheter.</p>
              <h3 className="font-semibold mt-2 mb-1">Viktiga aspekter av autentiskt ledarskap inkluderar:</h3>
              <ul className="list-disc pl-5">
                <li>Självmedvetenhet och personlig utveckling</li>
                <li>Identifiering och levande efter personliga värderingar</li>
                <li>Utveckling av en stark etisk kompass för beslutsfattande</li>
                <li>Byggande av genuina relationer och förtroende inom organisationen</li>
                <li>Främjande av öppenhet, ärlighet och transparens i kommunikation</li>
                <li>Balansering av personlig integritet med organisatoriska krav</li>
                <li>Skapande av en kultur av äkthet och psykologisk trygghet</li>
              </ul>
              <p className="mt-2">Genom att utveckla autentiskt ledarskap kan ledare skapa djupare engagemang, förtroende och lojalitet inom sina team, vilket leder till ökad organisatorisk effektivitet och välmående.</p>
            </div>
          )
        },
        {
          title: "Strategiskt ledarskap och organisatorisk framgång",
          content: (
            <div>
              <p>Vår utbildning i strategiskt ledarskap ger ledare verktygen för att forma organisationens framtid och driva långsiktig framgång.</p>
              <h3 className="font-semibold mt-2 mb-1">Nyckelkomponenter i programmet:</h3>
              <ul className="list-disc pl-5">
                <li>Utveckling av strategiskt tänkande och långsiktig vision</li>
                <li>Analys av omvärldsförändringar och deras påverkan på organisationen</li>
                <li>Skapande och implementering av effektiva organisationsstrategier</li>
                <li>Balansering av innovation och riskhantering</li>
                <li>Ledning av tvärfunktionella team för strategisk implementering</li>
                <li>Utveckling av en lärande organisation för kontinuerlig anpassning</li>
                <li>Mätning och utvärdering av strategiska initiativ</li>
              </ul>
              <p className="mt-2">Genom att bemästra strategiskt ledarskap kan ledare positionera sina organisationer för hållbar tillväxt och framgång i en komplex affärsmiljö.</p>
            </div>
          )
        }
      ],
      experts: ["Tim Omorogieva"]
    },
    {
      icon: Camera,
      title: "Kreativ Innehållsproduktion",
      description: "Professionell foto- och videoproduktion för digital närvaro och varumärkesbyggande.",
      examples: [
        {
          title: "Produktion av företagspresentationsvideos",
          content: (
            <div>
              <p>Produktion av företagspresentationsvideos är ett kraftfullt verktyg för att kommunicera ett företags värderingar, kultur och erbjudanden på ett engagerande sätt.</p>
              <h3 className="font-semibold mt-2 mb-1">Processen för att skapa en effektiv företagspresentationsvideo inkluderar:</h3>
              <ul className="list-disc pl-5">
                <li>Utveckling av ett tydligt koncept och manus</li>
                <li>Planering av inspelningsplatser och scenografi</li>
                <li>Professionell videoinspelning med högkvalitativ utrustning</li>
                <li>Intervjuer med nyckelpersoner inom företaget</li>
                <li>Inkludering av företagets produkter eller tjänster i action</li>
                <li>Professionell redigering och postproduktion</li>
                <li>Tillägg av grafik, animationer och musik</li>
              </ul>
              <p className="mt-2">En välproducerad företagspresentationsvideo kan effektivt förmedla företagets budskap, bygga förtroende hos potentiella kunder och partners, samt stärka varumärket.</p>
            </div>
          )
        },
        {
          title: "Fotosessioner för personalporträtt och företagsmiljöer",
          content: (
            <div>
              <p>Professionella fotosessioner för personalporträtt och företagsmiljöer är viktiga för att skapa en konsekvent och professionell visuell identitet för företaget.</p>
              <h3 className="font-semibold mt-2 mb-1">En typisk fotosession kan omfatta:</h3>
              <ul className="list-disc pl-5">
                <li>Planering av fotokoncept och stil i linje med företagets varumärke</li>
                <li>Val av lämpliga bakgrunder och miljöer</li>
                <li>Professionell belysning för att skapa önskad stämning</li>
                <li>Individuella porträttfotograferingar av personal</li>
                <li>Gruppfoton av team eller avdelningar</li>
                <li>Fotografering av kontorsmiljöer och arbetssituationer</li>
                <li>Bildbehandling och retuschering för konsekvent look</li>
              </ul>
              <p className="mt-2">Högkvalitativa personalporträtt och miljöbilder kan användas på företagets webbplats, i marknadsföringsmaterial och på sociala medier för att skapa en professionell och tilltalande bild av organisationen.</p>
            </div>
          )
        },
        {
          title: "Skapande av visuellt innehåll för sociala medier",
          content: (
            <div>
              <p>Skapande av visuellt innehåll för sociala medier är avgörande för att engagera följare, öka varumärkesmedvetenheten och driva interaktion på olika sociala plattformar.</p>
              <h3 className="font-semibold mt-2 mb-1">Processen för att skapa effektivt visuellt innehåll inkluderar:</h3>
              <ul className="list-disc pl-5">
                <li>Utveckling av en konsekvent visuell strategi i linje med varumärket</li>
                <li>Skapande av mallar för olika typer av inlägg</li>
                <li>Fotografering och videoproduktion anpassad för sociala medier</li>
                <li>Design av infografik och animerade GIFs</li>
                <li>Redigering och optimering av bilder för olika plattformar</li>
                <li>Skapande av engagerande bildtexter och call-to-actions</li>
                <li>Planering av innehållskalender för konsekvent publicering</li>
              </ul>
              <p className="mt-2">Genom att skapa högkvalitativt och relevant visuellt innehåll kan företag öka sin synlighet, engagemang och följarantal på sociala medier, vilket i sin tur kan leda till ökad varumärkeslojalitet och försäljning.</p>
            </div>
          )
        }
      ],
      experts: ["Emelie Nylander"]
    },
    {
      icon: Megaphone,
      title: "Digital Marknadsföring",
      description: "Strategisk digital marknadsföring, sociala medier-hantering och eventplanering.",
      examples: [
        {
          title: "Utveckling av innehållsstrategier för sociala medier",
          content: (
            <div>
              <p>Utveckling av innehållsstrategier för sociala medier är avgörande för att skapa en konsekvent och engagerande närvaro på olika social plattformar.</p>
              <h3 className="font-semibold mt-2 mb-1">En effektiv innehållsstrategi för sociala medier inkluderar:</h3>
              <ul className="list-disc pl-5">
                <li>Definiering av målgrupper och deras preferenser</li>
                <li>Val av relevanta sociala medieplattformar</li>
                <li>Skapande av en innehållskalender</li>
                <li>Utveckling av olika innehållstyper (t.ex. bilder, videos, stories)</li>
                <li>Anpassning av innehåll för varje plattform</li>
                <li>Integrering av varumärkets röst och värderingar</li>
                <li>Planering för interaktion och community management</li>
              </ul>
              <p className="mt-2">En välutformad innehållsstrategi hjälper företag att bygga starka relationer med sin målgrupp, öka engagemanget och driva affärsresultat genom sociala medier.</p>
            </div>
          )
        },
        {
          title: "Skapande och hantering av digitala reklamkampanjer",
          content: (
            <div>
              <p>Skapande och hantering av digitala reklamkampanjer är en komplex process som syftar till att nå rätt målgrupp med rätt budskap vid rätt tidpunkt.</p>
              <h3 className="font-semibold mt-2 mb-1">Nyckelsteg i processen inkluderar:</h3>
              <ul className="list-disc pl-5">
                <li>Definiering av kampanjmål och KPI:er</li>
                <li>Målgruppsanalys och segmentering</li>
                <li>Val av lämpliga digitala reklamplattformar (t.ex. Google Ads, Facebook Ads)</li>
                <li>Skapande av engagerande annonser (text, bild, video)</li>
                <li>Implementering av målgruppsinriktning och budgivningsstrategier</li>
                <li>Uppsättning av spårning och konverteringsmätning</li>
                <li>Kontinuerlig optimering baserad på prestationsdata</li>
              </ul>
              <p className="mt-2">Genom att skapa och hantera effektiva digitala reklamkampanjer kan företag öka sin synlighet, driva trafik till sin webbplats och generera leads eller försäljning på ett kostnadseffektivt sätt.</p>
            </div>
          )
        },
        {
          title: "Planering och genomförande av företagsevent",
          content: (
            <div>
              <p>Planering och genomförande av företagsevent är en viktig del av marknadsförings- och kundrelationsstrategin för många företag.</p>
              <h3 className="font-semibold mt-2 mb-1">Nyckelaspekter av eventplanering inkluderar:</h3>
              <ul className="list-disc pl-5">
                <li>Definiering av eventets syfte och mål</li>
                <li>Val av lämplig plats och datum</li>
                <li>Budgetering och resursallokering</li>
                <li>Utveckling av eventprogram och innehåll</li>
                <li>Marknadsföring av eventet genom olika kanaler</li>
                <li>Koordinering av logistik (catering, teknik, etc.)</li>
                <li>Hantering av gästlista och registrering</li>
                <li>Uppföljning och utvärdering efter eventet</li>
              </ul>
              <p className="mt-2">Framgångsrika företagsevent kan stärka kundrelationer, öka varumärkesmedvetenheten och generera nya affärsmöjligheter.</p>
            </div>
          )
        }
      ],
      experts: ["Emelie Nylander", "Tim Omorogieva"]
    }
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
            Framtidens Lösningar, Idag
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-100 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Upptäck hur Renew I/O:s innovativa tjänster och expertis kan revolutionera din verksamhet. Från cybersäkerhet till kreativ innehållsproduktion - vi är din partner för digital transformation och hållbar tillväxt.
          </motion.p>
        </div>
      </motion.section>

      <div className="container mx-auto px-4 py-48">
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
    </div>
  );
};

export default ServicesExpertise;