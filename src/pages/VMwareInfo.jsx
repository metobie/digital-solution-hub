import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const VMwareInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-12"> {/* Added pt-24 for top padding */}
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
                Broadcoms förvärv av VMware har skapat osäkerhet kring framtida licensmodeller och kostnader. Baserat på Broadcoms tidigare affärsstrategier och liknande situationer, finns det flera potentiella scenarier som kan påverka VMware-kunder:
              </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">1. Prisökningar</h3>
              <p className="mb-4 text-gray-600">
                Historiskt sett har Broadcom ökat priserna efter förvärv. Det finns en risk för höjda kostnader, särskilt för små och medelstora företag, genom omstrukturering av licensmodeller.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">2. Strömlinjeformade produktutbud</h3>
              <p className="mb-4 text-gray-600">
                Broadcom tenderar att fokusera på kärnprodukter, vilket kan leda till ett förenklat produktutbud. Kunder kan behöva övergå till mer omfattande lösningar, vilket potentiellt ökar totalkostnaderna.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">3. Paketerade licenslösningar</h3>
              <p className="mb-4 text-gray-600">
                Möjlig omstrukturering till större licenspaket med fler tjänster och funktioner. Detta kan gynna större företag men öka kostnaderna för mindre kunder som tidigare valt specifika lösningar.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">4. Långsiktiga kontrakt och volymrabatter</h3>
              <p className="mb-4 text-gray-600">
                Broadcom kan erbjuda fler långsiktiga avtal och volymrabatter för att behålla större kunder. Detta kan skapa prispress för mindre företag, medan större kunder kan få bättre villkor genom flerårsavtal.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">5. Fokus på företagskunder</h3>
              <p className="mb-4 text-gray-600">
                Broadcom har en stark inriktning på stora företagskunder. Mindre kunder kan uppleva minskad prioritet och ökade kostnader, medan större kunder kan få mer skräddarsydda lösningar, dock potentiellt till högre totalkostnader.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">Förbered dig för framtiden</h3>
              <p className="mb-4 text-gray-600">
                I ljuset av denna osäkerhet rekommenderar vi att:
              </p>
              <ul className="list-disc list-inside mb-6 text-gray-600">
                <li>Granska dina nuvarande VMware-licensavtal och användning</li>
                <li>Utforska alternativa lösningar som Nutanix (HCI) för att diversifiera din IT-infrastruktur</li>
                <li>Hålla en öppen dialog med din IT-leverantör om framtida strategier och kostnadsoptimering</li>
                <li>Överväga att låsa in nuvarande priser genom långsiktiga avtal, om möjligt</li>
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
