import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Users, Lightbulb, TrendingUp } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <HeroSection />
      <PartnershipSection />
      <TestimonialSection />
      <CallToActionSection />
    </div>
  );
};

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <motion.div 
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: "url('https://i.imgur.com/2dexfVJ.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
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
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
            Starta vår resa
          </Button>
        </Link>
      </motion.div>
    </div>
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
              <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
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
          { name: "Anna Svensson", company: "TechInnovate AB", quote: "Renew I/O har varit en ovärderlig partner i vår digitala transformation. Deras expertis och engagemang har verkligen gjort skillnad." },
          { name: "Erik Lindberg", company: "GreenFuture Solutions", quote: "Att arbeta med Renew I/O känns som att ha en dedikerad innovationsavdelning. De förstår verkligen våra behov och levererar alltid över förväntan." },
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
  <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Redo att forma framtiden tillsammans?</h2>
      <p className="text-xl mb-8">Låt oss inleda en dialog om hur vi kan hjälpa er att nå era mål och visioner.</p>
      <Link to="/contact">
        <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300">
          Kontakta oss idag
        </Button>
      </Link>
    </div>
  </section>
);

export default Index;