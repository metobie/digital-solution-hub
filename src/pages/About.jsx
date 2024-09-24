import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ExpertiseSection from '../components/ExpertiseSection';

const TeamMember = ({ name, role, imageSrc, description, email, location }) => (
  <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white mb-8">
    <CardContent className="p-6">
      <div className="flex flex-col md:flex-row items-center">
        {imageSrc ? (
          <img src={imageSrc} alt={`${name} profile`} className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-6 object-cover" />
        ) : (
          <Avatar className="w-48 h-48 mb-4 md:mb-0 md:mr-6">
            <AvatarFallback className="bg-gray-300 text-gray-600 text-6xl">{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
        )}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">{name} - {role}</h2>
          <p className="text-gray-600 mb-2">{description}</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-gray-600" />
              <p className="text-gray-600">{email}</p>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-gray-600" />
              <p className="text-gray-600">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

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
            <TeamMember
              name="Tobias Karlsson"
              role="Grundare"
              imageSrc="https://i.imgur.com/PBAVzJh.jpeg"
              description="Som teknisk expert kombinerar Tobias sin erfarenhet inom storskalig infrastruktur med förmågan att kommunicera effektivt på både företags- och teknisk nivå. Hans unika kompetens ligger i att överbrygga klyftan mellan affärsmål och tekniska lösningar, vilket möjliggör sömlös integration och optimering av digitala strategier."
              email="tobias@renew-io.se"
              location="Kristianstad"
            />
            <TeamMember
              name="Patrik Berg"
              role="Teknisk Strateg"
              description="Med djup teknisk förståelse och eftertänksam problemlösning bidrar Patrik med ovärderlig insikt till våra projekt. Hans förmåga att analysera komplexa system och förutse teknologiska trender gör honom till en nyckelspelare i vår strategiska planering."
              email="patrik@renew-io.se"
              location="Stockholm"
            />
          </motion.section>

          <ExpertiseSection />
        </div>
      </div>
    </div>
  );
};

export default About;
