import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Lightbulb } from 'lucide-react';

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
        className="relative h-screen flex items-center justify-center overflow-hidden mb-12"
        style={{ y }}
      >
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://i.imgur.com/PBAVzJh.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: useTransform(scrollY, [0, 500], [0, 150]),
          }}
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center px-6 max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-4 text-white tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Om Grundaren
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Lär känna personen bakom Renew I/O
          </motion.p>
          <motion.p 
            className="text-lg text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Med över ett decennium av erfarenhet inom IT, digital strategi och cybersäkerhet, 
            har Tobias Karlsson lett projekt från små startups till stora multinationella företag. 
            Hans unika förmåga att överbrygga klyftan mellan affärsmål och tekniska lösningar 
            gör Renew I/O till en ovärderlig partner i din digitala transformation.
          </motion.p>
        </div>
      </motion.section>

      <div className="container mx-auto px-6 py-8">
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <br />
          <br />
          <br />
          <br />
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
            <IconWrapper>
              <Briefcase className="w-4 h-4 text-black" />
            </IconWrapper>
            Min Bakgrund
          </h2>
          <Card className="mb-4 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
            <CardContent className="p-6">
              <p className="mb-4 text-gray-600">
                Med över ett decennium av erfarenhet inom IT, digital strategi och cybersäkerhet har jag haft förmånen att arbeta med en mängd olika företag och organisationer. Min resa började inom teknisk support och utvecklades snabbt till bland annat tekniska roller inom workplace-lösningar, storskaliga infrastrukturimplementationer, molntjänster och strategisk rådgivning.
              </p>
              <p className="mb-4 text-gray-600">
                Genom åren har jag lett projekt för både små och stora multinationella företag, alltid med fokus på att leverera skräddarsydda lösningar som skapar verklig affärsnytta och säkerställer robust säkerhet och stabilitet. Min passion ligger i att se bortom de omedelbara tekniska utmaningarna och istället fokusera på de långsiktiga strategiska målen.
              </p>
              <p className="text-gray-600">
                Som grundare av Renew I/O är mitt mål att dela med mig av denna expertis och hjälpa företag att inte bara hålla jämna steg med den digitala utvecklingen, utan att faktiskt leda den på ett säkert sätt. Jag tror starkt på kraften i samarbete och kontinuerligt lärande, och ser varje nytt projekt som en möjlighet att både dela med mig av min kunskap och lära mig något nytt.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          className="mt-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
            <IconWrapper>
              <Shield className="w-4 h-4 text-black" />
            </IconWrapper>
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

        <motion.section
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
            <IconWrapper>
              <Lightbulb className="w-4 h-4 text-black" />
            </IconWrapper>
            Vår Vision
          </h2>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
            <CardContent className="p-6">
              <p className="mb-4 text-gray-600">
                Vår vision är att forma en digital framtid där innovation möter säkerhet, och där varje företag kan blomstra i den digitala eran. Genom att kombinera cutting-edge teknologi med strategisk insikt, strävar vi efter att vara katalysatorn för positiv förändring i företagsvärlden.
              </p>
              <p className="mb-4 text-gray-600">
                Vi ser en framtid där digitala lösningar inte bara effektiviserar verksamheter, utan också öppnar upp för nya möjligheter och affärsmodeller. Samtidigt är vår vision djupt rotad i övertygelsen om att denna digitala transformation måste ske på ett säkert och ansvarsfullt sätt.
              </p>
              <p className="text-gray-600">
                För större uppdrag samarbetar vi med ett nätverk av konsulter, var och en med egen spetskompetens och egna företag. Detta möjliggör att vi alltid kan erbjuda skräddarsydda och högkvalitativa lösningar, anpassade efter varje kunds unika behov.
              </p>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
