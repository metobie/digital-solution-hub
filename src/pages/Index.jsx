import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Star, Server } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="container mx-auto px-6 py-8">
        <motion.section 
          className="text-center mb-12 relative overflow-hidden rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-4 text-gray-800 tracking-tight flex flex-col md:flex-row justify-center items-center">
              <span className="mb-2 md:mb-0 md:mr-4">Välkommen till</span>
              <img src="https://i.imgur.com/Fmh6crC.png" alt="Renew I/O Logo" className="h-16 md:h-24" />
            </h1>
            <p className="text-xl text-gray-600">Din partner för digital transformation, strategisk utveckling och cybersäkerhet</p>
          </div>
        </motion.section>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Förnya din verksamhet med vår hjälp</h2>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center">
                <motion.div
                  className="w-48 h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                    repeatDelay: 0
                  }}
                >
                  <Server className="w-20 h-20 text-blue-500" />
                </motion.div>
                <Separator orientation="vertical" className="h-48 mx-6 hidden md:block" />
                <div className="md:ml-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">Skräddarsydda digitala lösningar för din framgång</h3>
                  <p className="mb-2 text-gray-600">Hos Renew I/O förstår vi att varje företag är unikt. Vår expertis ligger i att skapa skräddarsydda digitala strategier som driver tillväxt, effektiviserar processer och ger er ett konkurrenskraftigt övertag på marknaden.</p>
                  <p className="text-gray-600">Med vår djupa tekniska kunskap och affärsstrategiska insikter hjälper vi er att:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                    <li>Optimera er digitala infrastruktur för ökad effektivitet</li>
                    <li>Implementera innovativa lösningar som driver affärsvärde</li>
                    <li>Överbrygga klyftan mellan IT och affärsmål</li>
                    <li>Navigera den digitala transformationen med säkerhet och precision</li>
                    <li>Stärka er cybersäkerhet för att skydda verksamheten</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center text-gray-700">
            <Star className="w-8 h-8 mr-2 text-blue-400" />
            Rekommendationer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent>
                <p className="italic mb-2 text-gray-600">"Vi på Nakof vill varmt tacka för ovärderliga insatser under utvärdering av vår ljudprogramvara. Renew I/O's tekniska expertis och breda kunskaper förbättrade både funktionalitet och design. Noggrann och analytisk feedback var avgörande för att höja kvaliteten."</p>
                <p className="font-semibold text-gray-700">- Robert Nesta Nuhu, Grundare, Nakof</p>
              </CardContent>
            </Card>
            <Card className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent>
                <p className="italic mb-2 text-gray-600">"Vi har haft nöjet att arbeta med Renew I/O under ett omfattande IT-projekt. Deras tekniska expertis och förmåga att lösa komplexa problem imponerade stort. Deras insikter och rådgivning bidrog direkt till projektets framgång. Rekommenderas starkt för teknisk rådgivning och implementation."</p>
                <p className="font-semibold text-gray-700">- Tim Omorogieva, VD, Rider</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center flex items-center justify-center text-gray-700">
            <Shield className="w-8 h-8 mr-2 text-blue-400" />
            Cybersäkerhet i fokus
          </h2>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gradient-to-r from-gray-50 to-gray-100">
            <CardContent className="p-6">
              <p className="text-center mb-4 text-gray-600">
                I dagens digitala landskap är cybersäkerhet avgörande för varje verksamhet. Renew I/O erbjuder omfattande cybersäkerhetslösningar för att skydda ditt företag mot moderna hot.
              </p>
              <div className="flex justify-center mt-4">
                <Link to="/about">
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">Läs mer</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Redo att ta nästa steg?</h2>
          <p className="mb-4 text-gray-600">Låt oss tillsammans utforska hur Renew I/O kan hjälpa ditt företag att nå nya höjder inom digital innovation, effektivitet och säkerhet.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">Kontakta oss nu</Button>
          </Link>
        </motion.section>
      </main>
    </div>
  );
};

export default Index;
