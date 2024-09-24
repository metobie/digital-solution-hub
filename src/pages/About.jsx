import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Lightbulb, GraduationCap, Users, Network } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const IconWrapper = ({ children, color }) => (
    <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center mr-4 shadow-lg`}>
      {children}
    </div>
  );

  const FeatureCard = ({ icon, title, description, color }) => (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start">
          <IconWrapper color={color}>{icon}</IconWrapper>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
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
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center px-6 max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-2 text-white tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Om RENEW I/O
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 mb-8"
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
                    <p className="text-gray-600">Som teknisk expert kombinerar jag min erfarenhet inom storskalig infrastruktur med förmågan att kommunicera effektivt på både företags- och teknisk nivå. Min unika kompetens ligger i att överbrygga klyftan mellan affärsmål och tekniska lösningar, vilket möjliggör sömlös integration och optimering av digitala strategier, samtidigt som jag säkerställer robusta säkerhetslösningar för att skydda verksamheten.</p>
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
                    <p className="text-gray-600">Med djup teknisk förståelse och eftertänksam problemlösning bidrar Patrik med ovärderlig insikt till våra projekt. Hans förmåga att analysera komplexa system och förutse teknologiska trender gör honom till en nyckelspelare i vår strategiska planering. Patriks expertis och långsiktiga perspektiv säkerställer att våra lösningar är framtidssäkrade och innovativa.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FeatureCard
              icon={<Briefcase className="w-6 h-6 text-white" />}
              title="Vår Expertis"
              description="Vi specialiserar oss på digital transformation, cybersäkerhet, molnlösningar och strategisk IT-rådgivning."
              color="bg-blue-500"
            />
            <FeatureCard
              icon={<Lightbulb className="w-6 h-6 text-white" />}
              title="Vår Vision"
              description="Att forma en digital framtid där innovation möter säkerhet, och där varje företag kan nå sin fulla potential."
              color="bg-yellow-500"
            />
            <FeatureCard
              icon={<Network className="w-6 h-6 text-white" />}
              title="Vårt Nätverk"
              description="Ett omfattande nätverk av experter som möjliggör skräddarsydda lösningar för varje unikt behov."
              color="bg-green-500"
            />
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;
