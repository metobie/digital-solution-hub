import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Users, Lightbulb } from 'lucide-react';
import ScrollIndicator from '../components/ScrollIndicator';

const Index = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <HeroSection y={y} />
      <PartnershipSection />
      <TestimonialSection />
      <CallToActionSection />
    </div>
  );
};

const HeroSection = ({ y }) => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <motion.div 
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: "url('https://i.imgur.com/2dexfVJ.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        y,
      }}
    />
    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    <div className="relative z-20 text-center px-6 max-w-4xl">
      <motion.h1 
        className="text-4xl md:text-6xl font-extrabold mb-4 text-white tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tillsammans bygger vi er digitala framtid
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-200 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Renew I/O är din partner för innovation, tillväxt och hållbar digital transformation. Låt oss skapa framgång tillsammans.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link to="/contact">
          <Button size="lg" className="bg-gradient-to-br from-[#4E8A9B] to-[#9A4A9B] text-white hover:from-[#6AAABC] hover:to-[#BA6ABC] transition-all duration-300 shadow-lg hover:shadow-xl">
            Starta vår resa
          </Button>
        </Link>
      </motion.div>
    </div>
    <ScrollIndicator />
  </section>
);

const PartnershipSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Vår vision om partnerskap</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Handshake, title: "Gemensam tillväxt", description: "Vi växer tillsammans med våra kunder, och delar både utmaningar och framgångar." },
          { icon: Users, title: "Långsiktiga relationer", description: "Vi bygger varaktiga partnerskap baserade på förtroende, transparens och ömsesidig respekt." },
          { icon: Lightbulb, title: "Skräddarsydda lösningar", description: "Varje kund är unik, och våra lösningar anpassas efter era specifika behov och mål." },
        ].map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <item.icon className="w-12 h-12 mx-auto mb-4 text-[#3E7A8B]" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Vad våra partners säger</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { 
            name: "Robert Nesta Nuhu", 
            company: "Grundare, Nakof", 
            quote: "Renew I/O har hjälpt mig att ta mitt musikskapande till nästa nivå genom att implementera innovativa lösningar som effektiviserar min arbetsprocess." 
          },
          { 
            name: "Tim Omorogieva", 
            company: "VD, Rider AB", 
            quote: "Samarbetet med Renew I/O har varit avgörande för vår digitala transformation. Deras expertis och engagemang har överträffat våra förväntningar." 
          },
        ].map((testimonial, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const CallToActionSection = () => (
  <section className="py-16 bg-white text-gray-800">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Redo att forma framtiden tillsammans?</h2>
      <p className="text-xl mb-8">Låt oss inleda en dialog om hur vi kan hjälpa er att nå era mål och visioner.</p>
      <Link to="/contact">
        <Button size="lg" className="bg-gradient-to-br from-[#4E8A9B] to-[#9A4A9B] text-white hover:from-[#6AAABC] hover:to-[#BA6ABC] transition-all duration-300 shadow-lg hover:shadow-xl">
          Kontakta oss idag
        </Button>
      </Link>
    </div>
  </section>
);

export default Index;
