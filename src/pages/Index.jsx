import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Star, Server } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const ParallaxHero = ({ backgroundImage, children }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <motion.section 
      className="relative h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div style={{ y }} className="absolute inset-0" />
      <div className="relative z-10 text-white text-center px-4">
        {children}
      </div>
    </motion.section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <ParallaxHero backgroundImage="https://i.imgur.com/HnORICF.jpeg">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Välkommen till Renew I/O</h1>
        <p className="text-xl mb-6">Din partner för digital transformation, strategisk utveckling och cybersäkerhet</p>
        <Link to="/contact">
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">Kontakta oss</Button>
        </Link>
      </ParallaxHero>

      <ParallaxHero backgroundImage="https://i.imgur.com/HnORICF.jpeg">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Förnya din verksamhet med vår hjälp</h2>
        <p className="text-lg mb-6">Skräddarsydda digitala lösningar för din framgång</p>
        <Link to="/about">
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">Läs mer</Button>
        </Link>
      </ParallaxHero>

      <ParallaxHero backgroundImage="https://i.imgur.com/x5OPzN8.jpeg">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Cybersäkerhet i fokus</h2>
        <p className="text-lg mb-6">Skydda ditt företag mot moderna hot</p>
        <Link to="/about">
          <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">Utforska våra lösningar</Button>
        </Link>
      </ParallaxHero>

      <main className="container mx-auto px-6 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Våra tjänster</h2>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-48 h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <Server className="w-20 h-20 text-blue-500" />
                </div>
                <Separator orientation="vertical" className="h-48 mx-6 hidden md:block" />
                <div className="md:ml-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">Skräddarsydda digitala lösningar</h3>
                  <p className="mb-2 text-gray-600">Vi skapar skräddarsydda digitala strategier som driver tillväxt, effektiviserar processer och ger er ett konkurrenskraftigt övertag på marknaden.</p>
                  <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                    <li>Optimering av digital infrastruktur</li>
                    <li>Implementering av innovativa lösningar</li>
                    <li>Överbryggning mellan IT och affärsmål</li>
                    <li>Navigering av digital transformation</li>
                    <li>Förstärkning av cybersäkerhet</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
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
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Redo att ta nästa steg?</h2>
          <p className="mb-4 text-gray-600">Låt oss tillsammans utforska hur Renew I/O kan hjälpa ditt företag att nå nya höjder inom digital innovation, effektivitet och säkerhet.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">Kontakta oss nu</Button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Index;
