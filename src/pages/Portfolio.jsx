import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const portfolioItems = [
  {
    title: "Frame Wave",
    description: "En komplett webbdesign baserad på kundens kärnverksamhet.",
    image: "https://i.imgur.com/MZXO6Nf.png",
    url: "https://framewave.se"
  },
  {
    title: "Selected Trade",
    description: "Kundanpassad webbdesign med specifika önskemål om layout och färger.",
    image: "https://i.imgur.com/sSo09hU.png",
    url: "https://selectedtrade.dk"
  },
  {
    title: "Eyobel Samson",
    description: "En personlig webbplats som speglar Eyobel Samsons professionella profil och kompetenser.",
    image: "https://i.imgur.com/RP527Md.png",
    url: "https://eyoo.se"
  },
  {
    title: "Ditt Företag Här",
    description: "Vi ser fram emot att skapa en unik digital lösning för just ditt företag. Låt oss tillsammans forma din online-närvaro!",
    image: "/placeholder.svg",
    url: "/contact"
  }
];

const PortfolioItem = ({ title, description, image, url }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }} 
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
    className="flex flex-col h-full"
  >
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="w-full aspect-square">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        {url.startsWith('/') ? (
          <Link to={url} className="text-[#3E7A8B] hover:text-[#8A3A8B] transition-colors duration-300 mt-auto">
            Kontakta oss
          </Link>
        ) : (
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-[#3E7A8B] hover:text-[#8A3A8B] transition-colors duration-300 mt-auto">
            Besök webbplatsen
          </a>
        )}
      </CardContent>
    </Card>
  </motion.div>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Vår Digitala Portfölj</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;