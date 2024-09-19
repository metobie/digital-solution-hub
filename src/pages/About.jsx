import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Mail, Phone, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
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
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center">
              <img src="https://i.imgur.com/PBAVzJh.jpeg" alt="Profilbild" className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-6" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Tobias Karlsson</h2>
                <p className="mb-2">Som teknisk expert kombinerar jag min erfarenhet inom storskalig infrastruktur med förmågan att kommunicera effektivt på både företags- och teknisk nivå.</p>
                <p>Min unika kompetens ligger i att överbrygga klyftan mellan affärsmål och tekniska lösningar, vilket möjliggör sömlös integration och optimering av digitala strategier, samtidigt som jag säkerställer robusta säkerhetslösningar för att skydda verksamheten.</p>
                <div className="mt-4">
                  <div className="flex items-center mb-2">
                    <Mail className="mr-2" />
                    <span>info@renew-io.se</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Phone className="mr-2" />
                    <span>+46 73 035 28 88</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2" />
                    <span>Kristianstad, Sverige</span>
                  </div>
                </div>
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
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Briefcase className="mr-2 text-gray-800" />
          Min Bakgrund
        </h2>
        <p className="mb-4">
          Med över ett decennium av erfarenhet inom IT, digital strategi och cybersäkerhet har jag haft förmånen att arbeta med en mängd olika företag och organisationer. Min resa började inom teknisk support och utvecklades snabbt till bl.a. tekniska roller inom workplace-lösningar, storskaliga infrastruktur-implementationer, cloud och strategisk rådgivning.
        </p>
        <p className="mb-4">
          Genom åren har jag lett projekt som sträckt sig från små till stora multinationella företag, alltid med fokus på att leverera skräddarsydda lösningar som driver verklig affärsnytta och säkerställer robust säkerhet och stabilitet. Min passion ligger i att se bortom de omedelbara tekniska utmaningarna och istället fokusera på de långsiktiga strategiska målen.
        </p>
        <p>
          Som grundare av Renew I/O är mitt mål att dela denna expertis och hjälpa företag att inte bara hålla jämna steg med den digitala utvecklingen, utan att faktiskt leda den på ett säkert sätt. Jag tror starkt på kraften i samarbete och kontinuerligt lärande, och ser varje nytt projekt som en möjlighet att både dela med mig av min kunskap och lära mig något nytt.
        </p>
      </motion.section>

      <motion.section
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Shield className="mr-2 text-gray-800" />
          Cybersäkerhetsexpertis
        </h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4">
              I en tid då digitala hot blir allt mer sofistikerade, är min expertis inom cybersäkerhet en avgörande del av de tjänster jag erbjuder. Jag hjälper organisationer att:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Utvärdera och stärka deras nuvarande säkerhetspostur</li>
              <li>Implementera robusta säkerhetslösningar som skyddar känslig data</li>
              <li>Utveckla och implementera omfattande cybersäkerhetsstrategier</li>
              <li>Utbilda personal i bästa praxis för cybersäkerhet</li>
              <li>Hantera och mildra säkerhetsincidenter effektivt</li>
            </ul>
            <p>
              Min approach till cybersäkerhet är holistisk, där jag integrerar säkerhetstänkandet i varje aspekt av den digitala strategin och infrastrukturen. Detta säkerställer att säkerhet inte är ett efterhandstillägg, utan en grundläggande del av er digitala transformation.
            </p>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
};

export default About;
