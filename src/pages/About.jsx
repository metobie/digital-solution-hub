import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

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
                <h2 className="text-2xl font-semibold mb-2">Digital Solution Strategist</h2>
                <p className="mb-2">Som Digital Solution Strategist kombinerar jag min erfarenhet inom storskalig infrastruktur med förmågan att kommunicera effektivt på både företags- och teknisk nivå.</p>
                <p>Min unika kompetens ligger i att överbrygga klyftan mellan affärsmål och tekniska lösningar, vilket möjliggör sömlös integration och optimering av digitala strategier.</p>
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
        <h2 className="text-2xl font-semibold mb-4">Min Bakgrund</h2>
        <p className="mb-4">
          Med över ett decennium av erfarenhet inom IT och digital strategi har jag haft förmånen att arbeta med en mängd olika företag och organisationer. Min resa började inom teknisk support och utvecklades snabbt till roller inom systemarkitektur och strategisk rådgivning.
        </p>
        <p className="mb-4">
          Genom åren har jag lett projekt som sträckt sig från små startups till stora multinationella företag, alltid med fokus på att leverera skräddarsydda lösningar som driver verklig affärsnytta. Min passion ligger i att se bortom de omedelbara tekniska utmaningarna och istället fokusera på de långsiktiga strategiska målen.
        </p>
        <p>
          Som grundare av Renew I/O är mitt mål att dela denna expertis och hjälpa företag att inte bara hålla jämna steg med den digitala utvecklingen, utan att faktiskt leda den. Jag tror starkt på kraften i samarbete och kontinuerligt lärande, och ser varje nytt projekt som en möjlighet att både dela med mig av min kunskap och lära mig något nytt.
        </p>
      </motion.section>
    </div>
  );
};

export default About;