import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCatalog from '../components/ServiceCatalog';
import VMwarePopup from '../components/VMwarePopup';

const Index = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const heroRef = useRef(null);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    if (heroRef.current) {
      setHeroHeight(heroRef.current.offsetHeight);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <VMwarePopup heroHeight={heroHeight} />
      <motion.section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ y }}
      >
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://i.imgur.com/2dexfVJ.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: useTransform(scrollY, [0, 500], [0, 150]),
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#3E7A8B]/90 via-[#8A3A8B]/90 to-black/90 z-10"></div>
        <div className="relative z-20 text-center px-6">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-4 text-white tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Välkommen till Renew I/O
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ett kooperativ för digital transformation, innovation, ledarskap och teknisk excellens
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-br from-[#3E7A8B] to-[#8A3A8B] text-white hover:from-[#5A9AAB] hover:to-[#AA5AAB] transition-all duration-300">Kontakta oss nu</Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <main className="relative z-30 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 py-16">
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Våra Tjänster</h2>
            <ServiceCatalog />
          </motion.section>

          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Vad våra kunder säger</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent>
                  <p className="italic mb-2 text-gray-600">"Renew I/O's tekniska expertis och breda kunskaper förbättrade både funktionalitet och design av vår ljudprogramvara."</p>
                  <p className="font-semibold text-gray-700">- Robert Nesta Nuhu, Grundare, Nakof</p>
                </CardContent>
              </Card>
              <Card className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent>
                  <p className="italic mb-2 text-gray-600">"Deras tekniska expertis och förmåga att lösa komplexa problem imponerade stort. Rekommenderas starkt för teknisk rådgivning och implementation."</p>
                  <p className="font-semibold text-gray-700">- Tim Omorogieva, VD, Rider</p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          <motion.section
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Redo att ta nästa steg?</h2>
            <p className="mb-4 text-gray-600">Låt oss tillsammans utforska hur Renew I/O kan hjälpa ditt företag att nå nya höjder inom teknik, innovation och ledarskap.</p>
            <Link to="/contact">
              <Button size="lg" className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all duration-300 border border-gray-900/10 hover:border-gray-900/20">Kontakta oss nu</Button>
            </Link>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default Index;
