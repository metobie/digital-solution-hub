import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-12">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Integritetspolicy
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Vår integritetspolicy</h2>
              <p className="mb-4 text-gray-600">
                På Renew I/O värnar vi om din integritet. Denna policy beskriver hur vi samlar in, använder och skyddar dina personuppgifter.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Insamling av information</h3>
              <p className="mb-4 text-gray-600">
                Vi samlar endast in information som är nödvändig för att tillhandahålla våra tjänster och förbättra din upplevelse på vår webbplats.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Användning av information</h3>
              <p className="mb-4 text-gray-600">
                Den information vi samlar in används för att förbättra våra tjänster, kommunicera med dig och säkerställa att vi uppfyller våra juridiska skyldigheter.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Skydd av information</h3>
              <p className="text-gray-600">
                Vi vidtar alla nödvändiga åtgärder för att skydda din information och säkerställa att den hanteras säkert och i enlighet med denna integritetspolicy.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;