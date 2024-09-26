import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Briefcase, Lightbulb, Cloud, Code, LineChart, Users, Camera, Megaphone } from 'lucide-react';
import TeamMember from '../components/TeamMember';

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
      description: "Som teknisk expert kombinerar Tobias sin erfarenhet inom storskalig infrastruktur med förmågan att kommunicera effektivt på både företags- och teknisk nivå. Hans unika kompetens ligger i att överbrygga klyftan mellan affärsmål och tekniska lösningar, vilket möjliggör sömlös integration och optimering av digitala strategier. Samtidigt säkerställer han robusta säkerhetslösningar för att skydda verksamheten.",
      email: "tobias@renew-io.se",
      location: "Kristianstad"
    },
    {
      name: "Patrik Berg",
      description: "Med djup teknisk förståelse och eftertänksam problemlösning bidrar Patrik med ovärderlig insikt till våra projekt. Hans förmåga att analysera komplexa system och förutse teknologiska trender gör honom till en nyckelspelare i vår strategiska planering. Patriks expertis och långsiktiga perspektiv säkerställer att våra lösningar är framtidssäkrade och innovativa.",
      email: "patrik@renew-io.se",
      location: "Stockholm"
    },
    {
      name: "Robert Nesta Nuhu",
      imageSrc: "https://i.imgur.com/JKev6yM.png",
      description: "Som en rising star inom digital innovation, bringer Robert en fräsch och dynamisk energi till teamet. Hans unika perspektiv och naturliga fallenhet för att förstå framtidens teknologier gör honom till en katalysator för kreativitet och nytänkande. När han får en tydlig målbild, transformerar han visioner till verklighet med imponerande hastighet och precision.",
      email: "robert@renew-io.se",
      location: "Kristianstad"
    },
    {
      name: "Tim Omorogieva",
      description: "Tim är en mästare på att bygga och vårda relationer, med en unik förmåga att coacha och inspirera både team och kunder. Hans expertis inom innovation och strategisk utveckling, kombinerat med ett starkt fokus på hållbarhet, gör honom till en ovärderlig tillgång i vår strävan att skapa framtidssäkrade lösningar. Tims förmåga att se helheten och driva positiv förändring är central i vårt arbete med att hjälpa företag att nå sina mål på ett hållbart och innovativt sätt.",
      email: "tim@renew-io.se",
      location: "Kristianstad"
    },
    {
      name: "Emelie Nylander",
      imageSrc: "https://i.imgur.com/9akoW1T.jpeg",
      description: "Emelie är vår expert inom digital marknadsföring och sociala medier. Med en unik förmåga att skapa autentiskt och engagerande innehåll, bringer hon en ny dimension till våra kunders digitala närvaro. Hennes talang för att fånga äkta ögonblick genom film och foto, kombinerat med en djup förståelse för moderna marknadsföringsstrategier, gör henne till en ovärderlig tillgång i vår strävan att bygga starka och hållbara kundrelationer. Emelies approach visar att effektiv digital kommunikation handlar mer om äkthet och kreativitet än om dyr utrustning.",
      email: "emelie@renew-io.se",
      location: "Kristianstad",
      imageClassName: "object-right-top object-[80%_20%]"
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#3E7A8B]/90 via-[#8A3A8B]/90 to-black/90 z-10"></div>
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
            <Accordion type="single" collapsible className="w-full">
              {teamMembers.map((member, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center">
                      {member.imageSrc && (
                        <img 
                          src={member.imageSrc} 
                          alt={`${member.name} profile`} 
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                      )}
                      <div>
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.location}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <TeamMember {...member} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
                  Som ett kooperativ av experter samarbetar vi med ett brett nätverk av specialister, var och en med egen spetskompetens och egna företag. Detta möjliggör att vi alltid kan erbjuda skräddarsydda och högkvalitativa lösningar, anpassade efter varje kunds unika behov och utmaningar inom digital transformation, hållbar utveckling, ledarskap och effektiv marknadskommunikation.
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
