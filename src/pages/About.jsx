import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Lightbulb, Cloud, Code, LineChart, Users, Camera, Megaphone } from 'lucide-react';
import AnimatedTeamMember from '../components/AnimatedTeamMember';
import ScrollIndicator from '../components/ScrollIndicator';

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const teamMembers = [
    {
      name: "Tobias Karlsson",
      imageSrc: "https://i.imgur.com/PBAVzJh.jpeg",
      description: "Tobias är vår tekniska strateg med fokus på storskalig infrastruktur och strategisk rådgivning. Han överbryggar klyftan mellan affärsmål och tekniska lösningar, och säkerställer att företagets digitala strategi är både hållbar och framtidssäkrad.",
      email: "tobias@renew-io.se",
      location: "Kristianstad",
      imageClassName: "object-top object-[50%_30%]",
      expandedTitle: "Chief Technology Strategist"
    },
    {
      name: "Patrik Berg",
      initials: "PB",
      description: "Patrik är vår systemarkitekt med djup förståelse för komplexa tekniska system. Han excellerar i att analysera och optimera tekniska lösningar, och säkerställer att våra implementeringar är både funktionella och optimerade för långsiktig prestanda.",
      email: "patrik@renew-io.se",
      location: "Stockholm",
      expandedTitle: "Senior System Architect"
    },
    {
      name: "Robert Nesta Nuhu",
      imageSrc: "https://i.imgur.com/JKev6yM.png",
      description: "Robert är vår digitala produktutvecklare med en unik förmåga att snabbt omsätta komplexa visioner till konkreta lösningar. Hans kombination av teknisk precision och kreativitet driver innovation i varje projekt.",
      email: "robert@renew-io.se",
      location: "Kristianstad",
      expandedTitle: "Digital Product Developer"
    },
    {
      name: "Tim Omorogieva",
      imageSrc: "https://i.imgur.com/VUh5uU0.png",
      description: "Tim är vår expert inom personalutveckling och ledarskap. Med sin expertis inom innovation och hållbarhet bidrar han till att forma morgondagens ledarskap och driver positiv förändring i organisationer.",
      email: "tim@renew-io.se",
      location: "Kristianstad",
      imageClassName: "object-[50%_40%]",
      expandedTitle: "People Development Specialist"
    },
    {
      name: "Emelie Nylander",
      imageSrc: "https://i.imgur.com/9akoW1T.jpeg",
      description: "Emelie är vår kreativa kraft inom innehållsskapande. Med sin talang för fotografi och filmning hjälper hon företag att bygga autentiska och minnesvärda profiler på sociala medier, och skapar visuella berättelser som engagerar målgruppen.",
      email: "emelie@renew-io.se",
      location: "Kristianstad",
      imageClassName: "object-[50%_40%]",
      expandedTitle: "Content Creator"
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
            backgroundImage: "url('https://i.imgur.com/3OD3zl7.jpeg')",
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
            Välkommen till Renew I/O
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-100 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Ett kooperativ av experter som driver digital transformation och innovation
          </motion.p>
        </div>
        <ScrollIndicator />
      </motion.section>

      <div className="relative z-30 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 py-12">
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Vår Vision</h2>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Vår vision är att vara den ledande kraften i att forma en digital framtid där innovation möter praktisk tillämpning. Som ett kooperativ av experter strävar vi efter att vara katalysatorn för positiv förändring i företagsvärlden.
                </p>
                <p className="text-gray-600 mb-4">
                  Vi fokuserar på att leverera skräddarsydda digitala lösningar som inte bara effektiviserar verksamheter, utan också öppnar upp för nya möjligheter och affärsmodeller. Genom att kombinera teknisk expertis med strategiskt tänkande, hjälper vi våra kunder att navigera den digitala transformationen på ett sätt som är både innovativt och hållbart.
                </p>
                <p className="text-gray-600 font-semibold">
                  Kundnöjdhet står i centrum för allt vi gör. Vi är övertygade om att vår framgång är direkt kopplad till våra kunders framgång. Därför lägger vi stor vikt vid att förstå varje kunds unika behov och utmaningar, och arbetar outtröttligt för att överträffa deras förväntningar.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Vårt Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <AnimatedTeamMember key={index} {...member} />
              ))}
            </div>
          </motion.section>

          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Vårt Nätverk</h2>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <p className="text-gray-600">
                  Som ett kooperativ samarbetar vi som ett brett nätverk av specialister, var och en med egen spetskompetens och egna företag. Detta möjliggör att vi alltid kan erbjuda skräddarsydda och högkvalitativa lösningar, anpassade efter varje kunds unika behov och utmaningar inom:
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-600">
                  <li>Digital transformation</li>
                  <li>Hållbar utveckling</li>
                  <li>Innovativt ledarskap</li>
                  <li>Effektiv marknadskommunikation</li>
                  <li>Teknisk excellens</li>
                </ul>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Vår Approach</h2>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  På Renew I/O tror vi på kraften i samarbete och innovation. Vår approach kombinerar djup teknisk kunskap med strategiskt tänkande och kreativitet för att leverera lösningar som verkligen gör skillnad.
                </p>
                <p className="text-gray-600 mb-4">
                  Vi arbetar nära våra kunder i varje steg av processen, från initial analys och strategiutveckling till implementering och kontinuerlig optimering. Vår flexibla och agila metodik säkerställer att vi snabbt kan anpassa oss till förändrade behov och nya möjligheter.
                </p>
                <p className="text-gray-600">
                  Genom att ständigt utmana status quo och tänka utanför boxen, hjälper vi våra kunder att inte bara möta dagens utmaningar, utan också att förbereda sig för morgondagens möjligheter.
                </p>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;