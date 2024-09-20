import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Star, Zap } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-200 to-rose-200">
      <main className="container mx-auto px-6 py-8">
        <motion.section 
          className="text-center mb-12 relative overflow-hidden rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-rose-300 opacity-20"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-amber-900 tracking-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>Välkommen till Renew I/O</h1>
            <p className="text-xl text-amber-800">Din partner för digital transformation, strategisk utveckling och cybersäkerhet</p>
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-white/[0.02]" style={{ backgroundSize: '30px 30px' }}></div>
        </motion.section>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center text-amber-900">Förnya din verksamhet med vår hjälp</h2>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center">
                <motion.div
                  className="w-48 h-48 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <Zap className="w-24 h-24 text-white" />
                </motion.div>
                <Separator orientation="vertical" className="h-48 mx-6 hidden md:block" />
                <div className="md:ml-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-amber-700">Skräddarsydda digitala lösningar för din framgång</h3>
                  <p className="mb-2 text-amber-900">Hos Renew I/O förstår vi att varje företag är unikt. Vår expertis ligger i att skapa skräddarsydda digitala strategier som driver tillväxt, effektiviserar processer och ger er ett konkurrenskraftigt övertag på marknaden.</p>
                  <p className="text-amber-900">Med vår djupa tekniska kunskap och affärsstrategiska insikter hjälper vi er att:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2 text-amber-800">
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
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center text-amber-900">
            <Star className="w-8 h-8 mr-2 text-amber-400" />
            Rekommendationer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent>
                <p className="italic mb-2 text-amber-800">"Vi på Nakof vill varmt tacka för ovärderliga insatser under utvärdering av vår ljudprogramvara. Renew I/O's tekniska expertis och breda kunskaper förbättrade både funktionalitet och design. Noggrann och analytisk feedback var avgörande för att höja kvaliteten."</p>
                <p className="font-semibold text-amber-600">- Robert Nesta Nuhu, Grundare, Nakof</p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent>
                <p className="italic mb-2 text-amber-800">"Vi har haft nöjet att arbeta med Renew I/O under ett omfattande IT-projekt. Deras tekniska expertis och förmåga att lösa komplexa problem imponerade stort. Deras insikter och rådgivning bidrog direkt till projektets framgång. Rekommenderas starkt för teknisk rådgivning och implementation."</p>
                <p className="font-semibold text-amber-600">- Tim Omorogieva, VD, Rider</p>
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
          <h2 className="text-2xl font-semibold mb-4 text-center flex items-center justify-center text-amber-900">
            <Shield className="w-8 h-8 mr-2 text-amber-500" />
            Cybersäkerhet i fokus
          </h2>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gradient-to-r from-amber-100 to-rose-100">
            <CardContent className="p-6">
              <p className="text-center mb-4 text-amber-800">
                I dagens digitala landskap är cybersäkerhet avgörande för varje verksamhet. Renew I/O erbjuder omfattande cybersäkerhetslösningar för att skydda ditt företag mot moderna hot.
              </p>
              <div className="flex justify-center mt-4">
                <Link to="/about">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">Läs mer</Button>
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
          <h2 className="text-2xl font-semibold mb-4 text-amber-900">Redo att ta nästa steg?</h2>
          <p className="mb-4 text-amber-800">Låt oss tillsammans utforska hur Renew I/O kan hjälpa ditt företag att nå nya höjder inom digital innovation, effektivitet och säkerhet.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white">Kontakta oss nu</Button>
          </Link>
        </motion.section>
      </main>
    </div>
  );
};

export default Index;
