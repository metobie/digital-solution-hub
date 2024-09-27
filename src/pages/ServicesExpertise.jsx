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
      title: "Digital Strategi",
      description: "Utveckla framtidssäkrade digitala strategier för konkurrensfördelar.",
      examples: [
        {
          title: "Utformning av digital transformationsplan",
          content: (
            <div>
              <p>En digital transformationsplan är en omfattande strategi för att integrera digital teknologi i alla aspekter av en verksamhet, vilket fundamentalt förändrar hur organisationen opererar och levererar värde till kunder.</p>
              <h3 className="font-semibold mt-2 mb-1">Nyckelkomponenter i en digital transformationsplan:</h3>
              <ul className="list-disc pl-5">
                <li>Nulägesanalys och identifiering av digitala möjligheter</li>
                <li>Definiering av tydliga mål och KPI:er för digital transformation</li>
                <li>Kartläggning av nödvändiga teknologiska investeringar</li>
                <li>Planering för organisatorisk förändring och kulturell anpassning</li>
                <li>Strategi för datadrivet beslutsfattande</li>
                <li>Utveckling av digitala kompetenser och talanger</li>
                <li>Implementeringsplan med tydliga milstolpar och ansvarsområden</li>
              </ul>
              <p className="mt-2">En väl utformad digital transformationsplan hjälper organisationer att navigera den digitala eran, öka sin konkurrenskraft och skapa nya affärsmöjligheter.</p>
            </div>
          )
        },
        {
          title: "Analys av digitala trender och möjligheter",
          content: (
            <div>
              <p>Analys av digitala trender och möjligheter är avgörande för att organisationer ska kunna förutse förändringar i marknaden och positionera sig för framtida framgång.</p>
              <h3 className="font-semibold mt-2 mb-1">Denna process omfattar vanligtvis:</h3>
              <ul className="list-disc pl-5">
                <li>Kontinuerlig övervakning av teknologiska innovationer och branschspecifika trender</li>
                <li>Utvärdering av potentiella disruptiva teknologier (t.ex. AI, blockchain, IoT)</li>
                <li>Analys av konkurrenters digitala initiativ och strategier</li>
                <li>Identifiering av nya digitala affärsmodeller och intäktsmöjligheter</li>
                <li>Bedömning av kundbeteenden och förväntningar i den digitala sfären</li>
                <li>Utvärdering av potentiella partnerskap och ekosystem</li>
                <li>Scenarioplanering för olika digitala framtider</li>
              </ul>
              <p className="mt-2">Genom att noggrant analysera digitala trender och möjligheter kan organisationer fatta välgrundade beslut om investeringar, produktutveckling och strategiska initiativ.</p>
            </div>
          )
        },
        {
          title: "Utveckling av datadriven beslutsfattningsprocess",
          content: (
            <div>
              <p>Utveckling av en datadriven beslutsfattningsprocess innebär att systematiskt använda data och analyser för att informera och styra strategiska och operativa beslut inom organisationen.</p>
              <h3 className="font-semibold mt-2 mb-1">Viktiga steg i utvecklingen av en datadriven beslutsprocess:</h3>
              <ul className="list-disc pl-5">
                <li>Identifiering och prioritering av nyckeldata för beslutsfattande</li>
                <li>Implementering av robusta datainsamlings- och lagringsprocesser</li>
                <li>Utveckling av avancerade analysverktyg och dashboards</li>
                <li>Utbildning av personal i dataanalys och tolkning</li>
                <li>Integration av prediktiva och preskriptiva analysmodeller</li>
                <li>Etablering av en datadriven organisationskultur</li>
                <li>Kontinuerlig utvärdering och förbättring av datamodeller och processer</li>
              </ul>
              <p className="mt-2">En effektiv datadriven beslutsfattningsprocess möjliggör snabbare, mer precisa och objektiva beslut, vilket leder till förbättrade affärsresultat och ökad konkurrenskraft.</p>
            </div>
          )
        }
      ],
      experts: ["Tobias Karlsson", "Tim Omorogieva"]
    },
    {
      icon: Briefcase,
      title: "IT-Konsulttjänster",
      description: "Expert rådgivning för optimering av IT-infrastruktur och processer.",
      examples: [
        {
          title: "IT-infrastrukturanalys och optimeringsförslag",
          content: (
            <div>
              <p>En IT-infrastrukturanalys och optimeringsförslag syftar till att utvärdera och förbättra en organisations tekniska fundament för att stödja affärsmål och operativ effektivitet.</p>
              <h3 className="font-semibold mt-2 mb-1">Processen inkluderar vanligtvis:</h3>
              <ul className="list-disc pl-5">
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
              <ul className="list-disc pl-5">
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
          title: "Kostnadseffektivisering av IT-operationer",
          content: (
            <div>
              <p>Kostnadseffektivisering av IT-operationer handlar om att optimera användningen av teknologiska resurser för att maximera värdet och minimera onödiga utgifter.</p>
              <h3 className="font-semibold mt-2 mb-1">Strategier för kostnadseffektivisering kan inkludera:</h3>
              <ul className="list-disc pl-5">
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
      description: "Skräddarsydda program för att utveckla framtidens ledare i en digital värld.",
      examples: [
        {
          title: "Ledarskapsutbildning med fokus på digital transformation",
          content: (
            <div>
              <p>Ledarskapsutbildning med fokus på digital transformation syftar till att utrusta ledare med de kunskaper och färdigheter som krävs för att navigera och driva organisationer i en allt mer digitaliserad värld.</p>
              <h3 className="font-semibold mt-2 mb-1">Nyckelområden i utbildningen kan inkludera:</h3>
              <ul className="list-disc pl-5">
                <li>Förståelse för digitala teknologier och deras affärspåverkan</li>
                <li>Strategier för att leda digital förändring och innovation</li>
                <li>Utveckling av en digital vision och roadmap</li>
                <li>Hantering av digitala risker och cybersäkerhet</li>
                <li>Datadriven beslutsfattning och analys</li>
                <li>Agila och flexibla ledarskapsmetoder</li>
                <li>Skapande av en digital kultur och främjande av digitala kompetenser</li>
              </ul>
              <p className="mt-2">Genom denna utbildning kan ledare effektivt driva digital transformation, utnyttja nya teknologier och skapa konkurrensfördelar i den digitala eran.</p>
            </div>
          )
        },
        {
          title: "Coachning i förändringsledning",
          content: (
            <div>
              <p>Coachning i förändringsledning är designad för att hjälpa ledare att effektivt navigera och driva organisatoriska förändringar, särskilt i samband med digital transformation.</p>
              <h3 className="font-semibold mt-2 mb-1">Coachningen fokuserar ofta på:</h3>
              <ul className="list-disc pl-5">
                <li>Utveckling av en tydlig förändringsvisio och -strategi</li>
                <li>Hantering av motstånd mot förändring</li>
                <li>Effektiv kommunikation under förändringsprocesser</li>
                <li>Skapande av engagemang och motivation hos medarbetare</li>
                <li>Identifiering och hantering av förändringens påverkan på olika intressenter</li>
                <li>Implementering av förändringsmodeller och -metoder</li>
                <li>Mätning och uppföljning av förändringens framgång</li>
              </ul>
              <p className="mt-2">Genom personlig coachning kan ledare utveckla de färdigheter och insikter som krävs för att framgångsrikt leda organisationen genom komplexa förändringsprocesser.</p>
            </div>
          )
        },
        {
          title: "Utveckling av digitala ledarskapskompetenser",
          content: (
            
            <div>
              <p>Utveckling av digitala ledarskapskompetenser är avgörande för att ledare ska kunna utnyttja digitala teknologier effektivt och leda i en digital affärsmiljö.</p>
              <h3 className="font-semibold mt-2 mb-1">Viktiga digitala ledarskapskompetenser inkluderar:</h3>
              <ul className="list-disc pl-5">
                <li>Digital affärsmodellsinnovation</li>
                <li>Datadriven beslutsfattning och analys</li>
                <li>Förståelse för och tillämpning av AI och maskininlärning</li>
                <li>Cybersäkerhet och digital riskhantering</li>
                <li>Digitalt samarbete och virtuell teamledning</li>
                <li>Hantering av digitala kundupplevelser</li>
                <li>Agil projektledning och kontinuerlig leverans</li>
              </ul>
              <p className="mt-2">Genom att utveckla dessa kompetenser kan ledare effektivt driva digital innovation, optimera processer och skapa värde i en snabbt föränderlig digital värld.</p>
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
      description: "Strategisk digital marknadsföring och sociala medier-hantering.",
      examples: [
        {
          title: "Utveckling av innehållsstrategier för sociala medier",
          content: (
            <div>
              <p>Utveckling av innehållsstrategier för sociala medier är avgörande för att skapa en konsekvent och engagerande närvaro på olika sociala plattformar.</p>
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
          title: "Analys och optimering av digital marknadsföringsprestanda",
          content: (
            <div>
              <p>Analys och optimering av digital marknadsföringsprestanda är avgörande för att maximera avkastningen på marknadsföringsinvesteringar och kontinuerligt förbättra effektiviteten i digitala kampanjer.</p>
              <h3 className="font-semibold mt-2 mb-1">Processen inkluderar vanligtvis:</h3>
              <ul className="list-disc pl-5">
                <li>Implementering av robusta spårningsverktyg (t.ex. Google Analytics)</li>
                <li>Definiering av relevanta KPI:er för olika marknadsföringskanaler</li>
                <li>Regelbunden datainsamling och rapportering</li>
                <li>Analys av användar- och kundbeteende</li>
                <li>A/B-testning av olika innehålls- och annonsversioner</li>
                <li>Identifiering av trender och insikter från data</li>
                <li>Implementering av datadriven optimering av kampanjer</li>
              </ul>
              <p className="mt-2">Genom noggrann analys och kontinuerlig optimering kan företag förbättra prestandan i sina digitala marknadsföringsinsatser, öka ROI och fatta mer informerade beslut om resursallokering och strategier.</p>
            </div>
          )
        }
      ],
      experts: ["Emelie Nylander", "Tim Omorogieva"]
    }
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