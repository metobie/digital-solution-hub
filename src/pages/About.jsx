import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-8">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Om Grundaren
        </motion.h1>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center">
                <img src="https://i.imgur.com/PBAVzJh.jpeg" alt="Profilbild" className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-6" />
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">Tobias Karlsson</h2>
                  <p className="mb-2 text-gray-600">Som teknisk expert kombinerar jag min erfarenhet inom storskalig infrastruktur med förmågan att kommunicera effektivt på både företags- och teknisk nivå.</p>
                  <p className="text-gray-600">Min unika kompetens ligger i att överbrygga klyftan mellan affärsmål och tekniska lösningar, vilket möjliggör sömlös integration och optimering av digitala strategier, samtidigt som jag säkerställer robusta säkerhetslösningar för att skydda verksamheten.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
            <Briefcase className="mr-2 text-blue-500" />
            Min Bakgrund
          </h2>
          <Card className="mb-4 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
            <CardContent className="p-6">
              <p className="mb-4 text-gray-600">
                Med över ett decennium av erfarenhet inom IT, digital strategi och cybersäkerhet har jag haft förmånen att arbeta med en mängd olika företag och organisationer. Min resa började inom teknisk support och utvecklades snabbt till bl.a. tekniska roller inom workplace-lösningar, storskaliga infrastruktur-implementationer, cloud och strategisk rådgivning.
              </p>
              <p className="mb-4 text-gray-600">
                Genom åren har jag lett projekt som sträckt sig från små till stora multinationella företag, alltid med fokus på att leverera skräddarsydda lösningar som driver verklig affärsnytta och säkerställer robust säkerhet och stabilitet. Min passion ligger i att se bortom de omedelbara tekniska utmaningarna och istället fokusera på de långsiktiga strategiska målen.
              </p>
              <p className="text-gray-600">
                Som grundare av Renew I/O är mitt mål att dela denna expertis och hjälpa företag att inte bara hålla jämna steg med den digitala utvecklingen, utan att faktiskt leda den på ett säkert sätt. Jag tror starkt på kraften i samarbete och kontinuerligt lärande, och ser varje nytt projekt som en möjlighet att både dela med mig av min kunskap och lära mig något nytt.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
            <Shield className="mr-2 text-blue-500" />
            Cybersäkerhetsexpertis
          </h2>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
            <CardContent className="p-6">
              <p className="mb-4 text-gray-600">
                I en tid då digitala hot blir allt mer sofistikerade, är min expertis inom cybersäkerhet en avgörande del av de tjänster jag erbjuder. Jag hjälper organisationer att stärka sin säkerhetspostur, implementera robusta lösningar och utveckla omfattande strategier för att skydda verksamheten mot moderna cyberhot.
              </p>
              <p className="text-gray-600">
                Min approach till cybersäkerhet är holistisk, där säkerhetstänkandet integreras i varje aspekt av den digitala strategin och infrastrukturen, för att säkerställa ett proaktivt och heltäckande skydd.
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
