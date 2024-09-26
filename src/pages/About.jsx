import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Lightbulb, Cloud, Server, LineChart } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const IconWrapper = ({ children }) => (
    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full flex items-center justify-center mr-2">
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-black/90 z-10"></div>
        <div className="relative z-20 text-center px-6 max-w-3xl">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-2 text-white tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Vi är Renew I/O
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-100 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Din partner för digital transformation
          </motion.p>
          <motion.p 
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Med över ett decennium av erfarenhet inom IT, digital strategi, cybersäkerhet och utveckling, har vårt team lett projekt från startup-visioner till multinationella tech-lösningar. Vår styrka ligger i att översätta komplexa affärsmål till effektiva tekniska lösningar.
          </motion.p>
        </div>
      </motion.section>

      <div className="relative z-30 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 py-12">
          <motion.section 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gray-800 border border-purple-500 mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center">
                  <img src="https://i.imgur.com/PBAVzJh.jpeg" alt="Profilbild" className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-6" />
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-white">Tobias Karlsson</h2>
                    <p className="text-gray-300 mb-4">Med en djup förståelse för både affärsstrategi och avancerad teknologi, leder Tobias våra kunder genom komplexa digitala transformationer. Hans expertis inom enterprise-infrastruktur och strategisk planering säkerställer att våra lösningar inte bara möter dagens behov utan också är redo för morgondagens utmaningar.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gray-800 border border-blue-500 mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center">
                  <Avatar className="w-48 h-48 mb-4 md:mb-0 md:mr-6">
                    <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-500 text-white text-6xl">PB</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-white">Patrik Berg</h2>
                    <p className="text-gray-300 mb-4">Patrik är vår visionär inom teknisk arkitektur och innovation. Hans förmåga att analysera komplexa system och förutse teknologiska trender säkerställer att våra lösningar inte bara är cutting-edge idag, utan fortsätter att leverera värde långt in i framtiden.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gray-800 border border-purple-500">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center">
                  <img src="https://i.imgur.com/JKev6yM.png" alt="Robert Nesta Nuhu profile" className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-6 object-cover" />
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-white">Robert Nesta Nuhu</h2>
                    <p className="text-gray-300 mb-4">
                      Robert är vår kreativa kraft inom utveckling och innovation. Hans expertis inom systemutveckling och webblösningar, kombinerat med en passion för nya teknologier, driver oss att skapa skräddarsydda lösningar som inte bara möter utan överträffar våra kunders förväntningar.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center text-white">
              <IconWrapper>
                <Briefcase className="w-4 h-4 text-white" />
              </IconWrapper>
              Vår Expertis
            </h2>
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gray-800 border border-blue-500">
              <CardContent className="p-6">
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Strategisk digital transformation som driver affärsvärde</li>
                  <li>Robust cybersäkerhet för att skydda dina viktigaste tillgångar</li>
                  <li>Skalbara och flexibla molnlösningar</li>
                  <li>Skräddarsydd systemutveckling för unika affärsbehov</li>
                  <li>Moderna och effektiva webblösningar</li>
                  <li>Omfattande IT-konsulttjänster för optimerad verksamhet</li>
                  <li>Innovationsledning för att hålla dig i framkant</li>
                </ul>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center text-white">
              <IconWrapper>
                <Lightbulb className="w-4 h-4 text-white" />
              </IconWrapper>
              Vår Vision
            </h2>
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gray-800 border border-purple-500">
              <CardContent className="p-6">
                <p className="text-gray-300 text-lg">
                  Vi strävar efter att vara den ledande partnern för företag som söker att navigera och utnyttja den digitala erans möjligheter. Genom att kombinera djup teknisk expertis med strategisk affärsförståelse, arbetar vi för att skapa innovativa lösningar som inte bara möter dagens utmaningar, utan också lägger grunden för framtida framgångar.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center text-white">
              <IconWrapper>
                <Server className="w-4 h-4 text-white" />
              </IconWrapper>
              Vårt Nätverk
            </h2>
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gray-800 border border-blue-500">
              <CardContent className="p-6">
                <p className="text-gray-300 text-lg">
                  Renew I/O är stolt över att ha byggt ett omfattande nätverk av experter inom olika teknologiska domäner. Detta nätverk ger oss möjligheten att ta oss an komplexa projekt och leverera helhetslösningar som spänner över flera tekniska discipliner. Oavsett om ditt projekt kräver djup specialistkunskap eller bred teknisk kompetens, har vi resurserna för att leverera resultat av högsta kvalitet.
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
