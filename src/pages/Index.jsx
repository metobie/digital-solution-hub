import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Star } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-6 py-8">
        <motion.section 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-4">Välkommen till Renew I/O</h1>
          <p className="text-xl text-gray-600">Din partner för digital transformation, strategisk utveckling och cybersäkerhet</p>
        </motion.section>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">Förnya din verksamhet med vår hjälp</h2>
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center">
                <motion.div
                  className="w-48 h-48 bg-blue-100 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6"
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
                  <Shield className="w-24 h-24 text-blue-500" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Skräddarsydda digitala lösningar för din framgång</h3>
                  <p className="mb-2">Hos Renew I/O förstår vi att varje företag är unikt. Vår expertis ligger i att skapa skräddarsydda digitala strategier som driver tillväxt, effektiviserar processer och ger er ett konkurrenskraftigt övertag på marknaden.</p>
                  <p>Med vår djupa tekniska kunskap och affärsstrategiska insikter hjälper vi er att:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
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
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
            <Star className="w-6 h-6 mr-2 text-yellow-500" />
            Rekommendationer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="italic mb-2">"Renew I/O:s strategiska insikter har varit avgörande för vår digitala transformation. Deras förmåga att navigera både tekniska och affärsmässiga aspekter är enastående."</p>
              <p className="font-semibold">- Anna Andersson, VD, TechCorp AB</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="italic mb-2">"Tack vare Renew I/O:s expertis kunde vi implementera en skräddarsydd digital lösning som drastiskt förbättrade vår operativa effektivitet och cybersäkerhet."</p>
              <p className="font-semibold">- Erik Eriksson, CTO, InnovateNow</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center flex items-center justify-center">
            <Shield className="w-8 h-8 mr-2 text-gray-800" />
            Cybersäkerhet i fokus
          </h2>
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <p className="text-center mb-4">
                I dagens digitala landskap är cybersäkerhet avgörande för varje verksamhet. Renew I/O erbjuder omfattande cybersäkerhetslösningar för att skydda ditt företag mot moderna hot.
              </p>
              <div className="flex justify-center mt-4">
                <Link to="/about">
                  <Button size="lg">Läs mer</Button>
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
          <h2 className="text-2xl font-semibold mb-4">Redo att ta nästa steg?</h2>
          <p className="mb-4">Låt oss tillsammans utforska hur Renew I/O kan hjälpa ditt företag att nå nya höjder inom digital innovation, effektivitet och säkerhet.</p>
          <Link to="/contact">
            <Button size="lg">Kontakta oss nu</Button>
          </Link>
        </motion.section>
      </main>
    </div>
  );
};

export default Index;
