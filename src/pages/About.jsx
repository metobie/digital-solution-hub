import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Lightbulb, Cloud, Code, LineChart, Users, Camera, Megaphone } from 'lucide-react';
import AnimatedTeamMember from '../components/AnimatedTeamMember';

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const IconWrapper = ({ children }) => (
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2 border border-gray-200">
      {children}
    </div>
  );

  const teamMembers = [
    {
      name: "Tobias Karlsson",
      imageSrc: "https://i.imgur.com/PBAVzJh.jpeg",
      description: "Tobias är en teknisk expert med fokus på storskalig infrastruktur och strategisk rådgivning. Med förmågan att överbrygga klyftan mellan affärsmål och tekniska lösningar, arbetar han på hög nivå för att säkerställa att företagets digitala strategi är både hållbar och framtidssäkrad. Hans visionära tänkande hjälper företag att navigera komplexa IT-utmaningar, med ett särskilt fokus på sömlös integration och robusta säkerhetslösningar.",
      email: "tobias@renew-io.se",
      location: "Kristianstad",
      imageClassName: "object-top object-[50%_30%]",
      expandedTitle: "Chief Technology Strategist"
    },
    {
      name: "Patrik Berg",
      initials: "PB",
      description: "Patrik är vår tekniska expert som med sin djupa förståelse för systemarkitektur och detaljerade problemlösning levererar innovativa lösningar. Han är särskilt skicklig på att analysera komplexa tekniska system och identifiera optimeringsmöjligheter på en låg nivå. Patrik säkerställer att våra tekniska implementeringar inte bara är funktionella utan även optimerade för långsiktig prestanda och hållbarhet.",
      email: "patrik@renew-io.se",
      location: "Stockholm",
      expandedTitle: "Senior System Architect"
    },
    {
      name: "Robert Nesta Nuhu",
      imageSrc: "https://i.imgur.com/JKev6yM.png",
      description: "Robert är en expert på att strukturera och koda, vilket ger vårt team ett stabilt och innovativt fundament. Med sin förmåga att snabbt sätta sig in i nya teknologier och omvandla komplexa visioner till konkreta lösningar, är han en central drivkraft i vårt arbete. Hans kombination av teknisk precision och kreativa angreppssätt säkerställer att varje projekt når sin fulla potential.",
      email: "robert@renew-io.se",
      location: "Kristianstad",
      expandedTitle: "Developer"
    },
    {
      name: "Tim Omorogieva",
      imageSrc: "https://i.imgur.com/VUh5uU0.png",
      description: "Tim har en unik förmåga att bygga långvariga relationer och inspirera både team och kunder. Med sin expertis inom innovation, personlig utveckling och hållbarhet bidrar han till att forma morgondagens ledarskap. Hans helhetssyn och driv för positiv förändring gör honom till en ovärderlig resurs i vår strävan att hjälpa företag att nå framgång på ett hållbart och innovativt sätt.",
      email: "tim@renew-io.se",
      location: "Kristianstad",
      imageClassName: "object-[50%_40%]",
      expandedTitle: "Client Relations & Sustainability Strategist"
    },
    {
      name: "Emelie Nylander",
      imageSrc: "https://i.imgur.com/9akoW1T.jpeg",
      description: "Emelie är en expert på att fånga ögonblick som skapar starka visuella avtryck. Med sin talang för fotografering och filmning hjälper hon företag att bygga genuina och minnesvärda profiler på sociala medier. Hennes kreativa öga och känsla för detaljer ger varje projekt en autentisk och engagerande ton, vilket skapar en omedelbar koppling till målgruppen. Genom att kombinera äkthet med strategiskt tänkande hjälper Emelie våra kunder att inte bara synas, utan också lämna ett bestående intryck i den digitala världen.",
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C5A6B] to-[#6A2A6B] opacity-70 z-10"></div>
        <div className="relative z-20 text-center px-6 max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-2 text-white tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Om Renew I/O
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-100 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Ett kooperativ av experter inom teknik, innovation och ledarskap
          </motion.p>
          <motion.p 
            className="text-lg text-gray-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Renew I/O är ett unikt kooperativ som samlar experter inom teknik, innovation, ledarskap och digital strategi. Vår styrka ligger i vår mångfald av kompetenser, vilket gör oss till en ovärderlig partner i din digitala transformation och organisatoriska utveckling.
          </motion.p>
        </div>
      </motion.section>

      <div className="relative z-30 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 py-12">
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Vårt Team</h2>
            {teamMembers.map((member, index) => (
              <AnimatedTeamMember key={index} {...member} />
            ))}
          </motion.section>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
              <IconWrapper>
                <Briefcase className="w-4 h-4 text-black" />
              </IconWrapper>
              Vår Expertis
            </h2>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Digital transformation och strategiutveckling</li>
                  <li>Cybersäkerhet och riskhantering</li>
                  <li>Molnlösningar och infrastrukturoptimering</li>
                  <li>Systemutveckling och integration</li>
                  <li>IT-konsulttjänster och projektledning</li>
                  <li>Digital marknadsföring och innehållsstrategier</li>
                  <li>Hållbar utveckling och innovationsledning</li>
                  <li>Ledarskapsutbildning och organisationsutveckling</li>
                  <li>Kreativ innehållsproduktion (foto och video)</li>
                </ul>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
              <IconWrapper>
                <Lightbulb className="w-4 h-4 text-black" />
              </IconWrapper>
              Vår Vision
            </h2>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <p className="text-gray-600">
                  Vår vision är att forma en digital framtid där innovation möter säkerhet, hållbarhet och autentisk kommunikation. Som ett kooperativ av experter strävar vi efter att vara katalysatorn för positiv förändring i företagsvärlden, där digitala lösningar inte bara effektiviserar verksamheter utan också öppnar upp för nya möjligheter och affärsmodeller som är både innovativa, hållbara och genuint engagerande för kunder och intressenter.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
              <IconWrapper>
                <Users className="w-4 h-4 text-black" />
              </IconWrapper>
              Vårt Nätverk
            </h2>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <p className="text-gray-600">
                  Som ett kooperativ samarbetar vi som ett brett nätverk av specialister, var och en med egen spetskompetens och egna företag. Detta möjliggör att vi alltid kan erbjuda skräddarsydda och högkvalitativa lösningar, anpassade efter varje kunds unika behov och utmaningar inom digital transformation, hållbar utveckling, ledarskap och effektiv marknadskommunikation.
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