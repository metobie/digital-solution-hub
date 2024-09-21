import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Renew I/O:s Integritetspolicy</h2>
              
              <p className="mb-4 text-gray-600">
                Renew I/O värnar om din personliga integritet och eftersträvar alltid en hög nivå av dataskydd. Denna integritetspolicy förklarar hur vi samlar in och använder din personliga information. Den beskriver också dina rättigheter och hur du kan göra dem gällande.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">Personuppgiftsansvarig</h3>
              <p className="mb-4 text-gray-600">
                Renew I/O är personuppgiftsansvarig för behandlingen av dina personuppgifter och ansvarar för att sådan behandling sker i enlighet med tillämplig lagstiftning.
              </p>

              <Separator className="my-4" />

              <h3 className="text-xl font-semibold mb-2 text-gray-700">När behandlar vi dina personuppgifter?</h3>
              <p className="mb-4 text-gray-600">
                Renew I/O samlar in och behandlar personuppgifter om dig när du:
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Kontaktar oss via vårt kontaktformulär eller e-post</li>
                <li>Ingår ett avtal med oss</li>
                <li>Besöker vår webbplats (via cookies och liknande tekniker)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">Vilka personuppgifter behandlar vi?</h3>
              <p className="mb-4 text-gray-600">
                De personuppgifter vi behandlar kan inkludera:
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Namn och kontaktuppgifter</li>
                <li>Företagsuppgifter</li>
                <li>Korrespondens med oss</li>
                <li>Teknisk information om hur du interagerar med vår webbplats</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">Varför behandlar vi dina personuppgifter?</h3>
              <p className="mb-4 text-gray-600">
                Vi behandlar dina personuppgifter för följande ändamål:
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>För att kommunicera med dig och besvara dina förfrågningar</li>
                <li>För att fullgöra våra avtalsenliga förpliktelser</li>
                <li>För att förbättra och utveckla våra tjänster och vår webbplats</li>
                <li>För att följa tillämplig lagstiftning</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">Hur länge sparar vi dina personuppgifter?</h3>
              <p className="mb-4 text-gray-600">
                Vi sparar dina personuppgifter endast så länge som det är nödvändigt för de ändamål för vilka de samlades in eller så länge som krävs enligt lag.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">Dina rättigheter</h3>
              <p className="mb-4 text-gray-600">
                Du har rätt att:
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Begära information om vilka personuppgifter vi har om dig</li>
                <li>Begära rättelse av felaktiga eller ofullständiga uppgifter</li>
                <li>Begära radering eller begränsning av behandlingen av dina personuppgifter</li>
                <li>Invända mot behandlingen av dina personuppgifter</li>
                <li>Begära dataportabilitet</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">Kontakta oss</h3>
              <p className="mb-4 text-gray-600">
                Om du har frågor om hur vi behandlar dina personuppgifter eller vill utöva dina rättigheter, vänligen kontakta oss på:
              </p>
              <p className="text-gray-600">
                E-post: info@renew-io.se<br />
                Telefon: +46 73 035 28 88
              </p>

              <Separator className="my-4" />

              <p className="text-sm text-gray-500 mt-4">
                Denna integritetspolicy uppdaterades senast den 1 april 2024.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
