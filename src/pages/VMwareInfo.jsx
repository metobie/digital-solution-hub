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
          VMware-licenspriser: Vad du behöver veta
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Broadcoms uppköp av VMware: Konsekvenser för licenspriser</h2>
              
              <p className="mb-4 text-gray-600">
                Broadcoms uppköp av VMware har skapat oro i IT-branschen, särskilt när det gäller framtida licenspriser. Här är vad du behöver veta:
              </p>

              <ul className="list-disc list-inside mb-6 text-gray-600">
                <li>Många företag rapporterar prishöjningar på upp till 40% vid licensförnyelse.</li>
                <li>Broadcom har indikerat att de kommer att fokusera på de 600 största VMware-kunderna, vilket kan leda till minskad support och högre priser för mindre kunder.</li>
                <li>Nya licensmodeller kan introduceras, vilket potentiellt kan öka kostnaderna ytterligare.</li>
                <li>Minskade investeringar i forskning och utveckling kan påverka produktkvaliteten på lång sikt.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">Alternativ: Nutanix (HCI)</h3>
              <p className="mb-4 text-gray-600">
                Nutanix erbjuder en kostnadseffektiv och stabil alternativ till VMware:
              </p>
              <ul className="list-disc list-inside mb-6 text-gray-600">
                <li>Enklare licensmodell med potentiellt lägre totalkostnad.</li>
                <li>Integrerad lösning som kan minska komplexiteten i din IT-infrastruktur.</li>
                <li>Stark fokus på innovation och kundservice.</li>
                <li>Skalbarhet som passar både små och stora företag.</li>
              </ul>

              <p className="font-semibold text-gray-800">
                Renew I/O kan hjälpa dig att navigera dessa förändringar och hitta den bästa lösningen för ditt företag. Kontakta oss för en gratis konsultation och låt oss visa hur vi kan optimera din IT-infrastruktur för framtiden.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default VMwareInfo;