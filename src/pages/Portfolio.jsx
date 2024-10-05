import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    title: "Frame Wave",
    description: "En komplett webbdesign baserad på kundens kärnverksamhet.",
    image: "https://i.imgur.com/placeholder1.jpg", // Ersätt med faktisk bild
    url: "https://framewave.se"
  },
  {
    title: "Selected Trade",
    description: "Kundanpassad webbdesign med specifika önskemål om layout och färger.",
    image: "https://i.imgur.com/placeholder2.jpg", // Ersätt med faktisk bild
    url: "https://selectedtrade.dk"
  },
  // Lägg till fler portföljprojekt här
];

const PortfolioItem = ({ title, description, image, url }) => (
  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
    <Card className="overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          Besök webbplatsen
        </a>
      </CardContent>
    </Card>
  </motion.div>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Vår Digitala Portfölj</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {portfolioItems.map((item, index) => (
              <PortfolioItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;