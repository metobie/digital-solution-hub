import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const VMwareInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          VMware-licenssituationen: Vad du behöver veta
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Broadcoms uppköp av VMware: Potentiella konsekvenser</h2>
              
              <p className="mb-4 text-gray-600">
                Även om det för närvarande inte finns några officiella och slutgiltiga förändringar, finns det indikationer på potentiella prisökningar för VMware-licenser, särskilt för små och medelstora företag.
              </p>

              <ul className="list-disc list-inside mb-6 text-gray-600">
                <li>Broadcoms historik visar en tendens att driva upp priser och omstrukturera licensmodeller för att öka lönsamheten.</li>
                <li>Kunder bör vara uppmärksamma på eventuella kommande förändringar i licensstrukturen.</li>
                <li>Det kan bli nödvändigt att vara beredd på att förhandla eller överväga alternativa lösningar.</li>
                <li>Små och medelstora företag kan potentiellt påverkas mer av eventuella förändringar.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">Förbered dig för framtiden</h3>
              <p className="mb-4 text-gray-600">
                I ljuset av denna osäkerhet är det klokt att:
              </p>
              <ul className="list-disc list-inside mb-6 text-gray-600">
                <li>Granska dina nuvarande VMware-licensavtal och användning.</li>
                <li>Utforska alternativa lösningar som Nutanix (HCI) för att diversifiera din IT-infrastruktur.</li>
                <li>Hålla en öppen dialog med din IT-leverantör om framtida strategier och kostnadsoptimering.</li>
                <li>Överväga att låsa in nuvarande priser genom långsiktiga avtal, om möjligt.</li>
              </ul>

              <p className="font-semibold text-gray-800">
                Renew I/O står redo att hjälpa dig navigera dessa osäkra tider. Vi kan assistera med att analysera din nuvarande situation, utforska kostnadseffektiva alternativ och utveckla en framtidssäker IT-strategi som passar ditt företags behov och budget.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default VMwareInfo;
