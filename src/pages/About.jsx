import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Lightbulb, GraduationCap, Users, Mail, MapPin, Code, Globe } from 'lucide-react';
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
            className="text-sm text-gray-300 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1] }}
              transition={{ duration: 2, times: [0, 0.2, 0.8, 1], repeat: 1 }}
            >
              Uttalas som 'Rih-nyoo Ai Oh' - men du kan kalla oss för dina tech-genier
            </motion.span>
          </motion.p>
          <motion.p 
            className="text-2xl text-gray-100 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Möt hjärnorna bakom kodmagin
          </motion.p>
          <motion.p 
            className="text-xl text-gray-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Med över ett decennium av erfarenhet inom IT, digital strategi, cybersäkerhet, utveckling och webbutveckling, har vårt team lett projekt från startup-drömmar till multinationella tech-imperier. Vår superkraft? Att översätta komplexa affärsmål till banbrytande tekniska lösningar. Vi är Renew I/O - din hemliga ingrediens för digital dominans.
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
                    <p className="text-gray-300 mb-4">Tech-maestro och digital strateg. Tobias jonglerar enterprise-infrastruktur som en cirkusartist och talar flytande både C-suite och kodspråk. Hans superkraft? Att förvandla komplexa affärsmål till strömlinjeformade tekniska lösningar som får konkurrenterna att tappa hakan. Med Tobias vid rodret navigerar ditt företag genom det digitala landskapet som en Tesla på autopilot - snabbt, smart och alltid ett steg före.</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-purple-400" />
                        <p className="text-gray-300">tobias@renew-io.se</p>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                        <p className="text-gray-300">Kristianstad</p>
                      </div>
                    </div>
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
                    <p className="text-gray-300 mb-4">Vår tech-orakel och kodningens Gandalf. Patrik dissekerar komplexa system som en kirurg och förutspår tech-trender som en digital Nostradamus. Hans analytiska sinne och långsiktiga vision säkerställer att våra lösningar inte bara är cutting-edge idag, utan fortsätter att vara relevanta långt in i framtiden. Med Patrik i teamet är din tech-strategi lika framtidssäkrad som en tidkapsel på Mars.</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-purple-400" />
                        <p className="text-gray-300">patrik@renew-io.se</p>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                        <p className="text-gray-300">Stockholm</p>
                      </div>
                    </div>
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
                      Vår digitala alkemist och kodens poet. Robert förvandlar vilda idéer till elegant kod snabbare än du kan säga "Hello World". Hans unika perspektiv och naturliga fallenhet för framtidens teknologier gör honom till vår hemliga ingrediens i innovationssoppan. När Robert får en vision, blir den verklighet med en hastighet och precision som får Usain Bolt att se ut som en sengångare.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-purple-400" />
                        <p className="text-gray-300">robert@renew-io.se</p>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                        <p className="text-gray-300">Kristianstad</p>
                      </div>
                    </div>
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
              Vår Tech-Arsenal
            </h2>
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gray-800 border border-blue-500">
              <CardContent className="p-6">
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Digital transformation och strategi som får Elon Musk att bli imponerad</li>
                  <li>Cybersäkerhet så robust att till och med James Bond skulle bli avundsjuk</li>
                  <li>Molnlösningar som får dina data att sväva högre än en astronaut</li>
                  <li>Systemutveckling som är mer precis än en schweizisk klocka</li>
                  <li>Webbutveckling som får dina konkurrenters sidor att se ut som GeoCities</li>
                  <li>IT-konsulttjänster som är mer värdefulla än krypto under en bull run</li>
                  <li>Utbildning som gör ditt team smartare än en AI på steroider</li>
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
              Vår Tech-Vision
            </h2>
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gray-800 border border-purple-500">
              <CardContent className="p-6">
                <p className="text-gray-300 text-lg">
                  Vi ser en framtid där teknologi och innovation dansar tango, och vi leder dansen. Vår vision är att vara katalysatorn som förvandlar vanliga företag till tech-superhjältar. Vi strävar efter att skapa en digital värld där varje rad kod, varje molntjänst och varje säkerhetslösning inte bara effektiviserar verksamheter, utan öppnar portaler till nya dimensioner av möjligheter. Med Renew I/O vid rodret blir science fiction till business fact.
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
                <Users className="w-4 h-4 text-white" />
              </IconWrapper>
              Vårt Tech-Nätverk
            </h2>
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gray-800 border border-blue-500">
              <CardContent className="p-6">
                <p className="text-gray-300 text-lg">
                  Tänk dig Avengers, fast för tech-världen. För de riktigt episka uppdragen aktiverar vi vårt nätverk av tech-superhjältar - varje konsult med sin egen unika superkraft och sitt eget företag. Detta betyder att vi alltid kan leverera skräddarsydda, högkvalitativa lösningar som passar perfekt, som en spandex-dräkt på en superhjälte. Oavsett om ditt projekt kräver en Iron Man-nivå av innovation eller en Spider-Man-grad av flexibilitet, har vi rätt hjälte för jobbet.
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
