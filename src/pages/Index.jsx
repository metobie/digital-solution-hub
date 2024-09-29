import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCatalog from '../components/ServiceCatalog';
import VMwarePopup from '../components/VMwarePopup';
import { ChevronDown } from 'lucide-react';

const Index = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const heroRef = useRef(null);
  const [heroHeight, setHeroHeight] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    if (heroRef.current) {
      setHeroHeight(heroRef.current.offsetHeight);
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
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
            <span className="block">Renew I/O</span>
            <span className="block text-3xl md:text-5xl mt-2 text-red-500">Unparalleled. Unmatched. Unrivaled.</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Where innovation meets audacity. We're not just another cooperative - we're the future of digital transformation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/about">
              <Button size="lg" className="bg-red-500 text-white hover:bg-red-600 transition-all duration-300">Discover Our Edge</Button>
            </Link>
          </motion.div>
        </div>
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-8 h-8 text-white animate-bounce" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      <main className="relative z-30 bg-black">
        <div className="container mx-auto px-6 py-16">
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-red-500">Services That Defy Expectations</h2>
            <ServiceCatalog />
          </motion.section>

          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-center text-red-500">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-red-500">
                <CardContent>
                  <p className="italic mb-2 text-gray-300">"Renew I/O didn't just meet our expectations - they shattered them. Their approach to digital transformation is nothing short of revolutionary."</p>
                  <p className="font-semibold text-red-500">- CEO, Fortune 500 Company</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-red-500">
                <CardContent>
                  <p className="italic mb-2 text-gray-300">"Working with Renew I/O was like glimpsing into the future of tech consultancy. They're not just ahead of the curve - they're defining it."</p>
                  <p className="font-semibold text-red-500">- CTO, Innovative Startup</p>
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
            <h2 className="text-3xl font-bold mb-4 text-red-500">Ready to Redefine Possible?</h2>
            <p className="mb-4 text-gray-300">Join forces with Renew I/O and experience a level of innovation and expertise that's simply unmatched in the industry.</p>
            <Link to="/contact">
              <Button size="lg" className="bg-red-500 text-white hover:bg-red-600 transition-all duration-300">Initiate Collaboration</Button>
            </Link>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default Index;