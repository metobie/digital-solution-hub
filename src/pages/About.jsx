import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Lightbulb, Users, Mail, MapPin } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const IconWrapper = ({ children }) => (
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2 border border-gray-200">
      {children}
    </div>
  );

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
        <div className="absolute inset-0 bg-gradient-to-br from-[#3E7A8B] to-[#8A3A8B] opacity-85 z-10"></div>
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
            className="text-sm text-gray-200 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0, 1] }}
              transition={{ duration: 2, times: [0, 0.2, 0.8, 1], repeat: 1 }}
            >
              Företagsnamnet uttalas som 'Rih-nyoo Ai Oh'
            </motion.span>
          </motion.p>
          <motion.p 
            className="text-xl text-gray-100 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Lär känna personerna bakom företaget
          </motion.p>
          <motion.p 
            className="text-lg text-gray-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Med över ett decennium av erfarenhet inom IT, digital strategi och cybersäkerhet, har vårt team lett projekt från små företag till stora multinationella företag. Vår unika förmåga att överbrygga klyftan mellan affärsmål och tekniska lösningar gör Renew I/O till en ovärderlig partner i din digitala transformation.
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
            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center">
                  <img src="https://i.imgur.com/PBAVzJh.jpeg" alt="Profilbild" className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-6" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Tobias Karlsson - Grundare</h2>
                    <p className="text-gray-600 mb-2">Som teknisk expert kombinerar Tobias sin erfarenhet inom storskalig infrastruktur med förmågan att kommunicera effektivt på både företags- och teknisk nivå. Hans unika kompetens ligger i att överbrygga klyftan mellan affärsmål och tekniska lösningar, vilket möjliggör sömlös integration och optimering av digitala strategier. Samtidigt säkerställer han robusta säkerhetslösningar för att skydda verksamheten. Tobias expertis gör honom till en värdefull tillgång för företag som strävar efter att navigera i det komplexa digitala landskapet.</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-gray-600" />
                        <p className="text-gray-600">tobias@renew-io.se</p>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-600" />
                        <p className="text-gray-600">Kristianstad</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center">
                  <Avatar className="w-48 h-48 mb-4 md:mb-0 md:mr-6">
                    <AvatarFallback className="bg-gray-300 text-gray-600 text-6xl">PB</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Patrik Berg - Teknisk Strateg</h2>
                    <p className="text-gray-600 mb-2">Med djup teknisk förståelse och eftertänksam problemlösning bidrar Patrik med ovärderlig insikt till våra projekt. Hans förmåga att analysera komplexa system och förutse teknologiska trender gör honom till en nyckelspelare i vår strategiska planering. Patriks expertis och långsiktiga perspektiv säkerställer att våra lösningar är framtidssäkrade och innovativa.</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-gray-600" />
                        <p className="text-gray-600">patrik@renew-io.se</p>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-600" />
                        <p className="text-gray-600">Stockholm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                  <li>Utbildning</li>
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
                  Vår vision är att forma en digital framtid där innovation möter säkerhet. Vi strävar efter att vara katalysatorn för positiv förändring i företagsvärlden, där digitala lösningar inte bara effektiviserar verksamheter utan också öppnar upp för nya möjligheter och affärsmodeller.
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
                  För större uppdrag samarbetar vi med ett nätverk av konsulter, var och en med egen spetskompetens och egna företag. Detta möjliggör att vi alltid kan erbjuda skräddarsydda och högkvalitativa lösningar, anpassade efter varje kunds unika behov.
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
