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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
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
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="relative z-20 text-center px-6">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-4 text-white tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Vi Kodar Framtiden
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Spetskompetens möter innovation. Vi levererar skräddarsydda lösningar som driver din verksamhet framåt.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 transition-all duration-300 text-lg py-6 px-8">Låt oss revolutionera din tech</Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <main className="relative z-30 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 py-16">
          <motion.section 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Vår Arsenal av Tech-Magi</h2>
            <ServiceCatalog />
          </motion.section>

          <motion.section 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Röster från Tech-Fronten</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-purple-500">
                <CardContent>
                  <p className="italic mb-4 text-gray-300 text-lg">"Renew I/O's tekniska briljans och innovativa approach förvandlade vår ljudprogramvara från bra till banbrytande."</p>
                  <p className="font-semibold text-purple-400">- Robert Nesta Nuhu, Grundare, Nakof</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-blue-500">
                <CardContent>
                  <p className="italic mb-4 text-gray-300 text-lg">"Deras förmåga att knäcka komplexa tekniska nötter och leverera eleganta lösningar är i en klass för sig. En game-changer för vår tech-stack."</p>
                  <p className="font-semibold text-blue-400">- Tim Omorogieva, VD, Rider</p>
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
            <h2 className="text-3xl font-bold mb-4 text-white">Redo att tända tech-gnistan?</h2>
            <p className="mb-8 text-xl text-gray-300">Låt oss tillsammans koda din vision till verklighet och skjuta din verksamhet in i framtiden.</p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 transition-all duration-300 text-lg py-6 px-8">Starta din tech-revolution nu</Button>
            </Link>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default Index;
