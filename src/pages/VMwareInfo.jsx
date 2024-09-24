import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const VMwareInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          VMware-licenssituationen: Vad vi kan spekulera
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Broadcoms uppköp av VMware: Möjliga scenarier</h2>
              
              <p className="mb-4 text-gray-600">
                Baserat på Broadcoms tidigare affärsstrategier och liknande situationer i tech-världen, kan vi spekulera kring flera potentiella scenarier som kan påverka VMware-kunder:
              </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">1. Potentiella prisökningar</h3>
              <p className="mb-4 text-gray-600">
                Historiskt sett har Broadcom ofta justerat prismodeller efter förvärv. Det finns spekulationer om möjliga prishöjningar, särskilt för små och medelstora företag, genom potentiell omstrukturering av licensmodeller.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">2. Möjlig förenkling av produktutbud</h3>
              <p className="mb-4 text-gray-600">
                Broadcom har tidigare visat en tendens att fokusera på kärnprodukter. Detta kan leda till spekulationer om ett förenklat produktutbud, där kunder potentiellt kan behöva anpassa sig till mer omfattande lösningar.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">3. Tänkbara paketerade licenslösningar</h3>
              <p className="mb-4 text-gray-600">
                Det spekuleras om en möjlig omstrukturering till större licenspaket. Detta skulle potentiellt kunna gynna större företag men öka kostnaderna för mindre kunder som tidigare valt mer specifika lösningar.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">4. Spekulationer kring långsiktiga kontrakt</h3>
              <p className="mb-4 text-gray-600">
                Baserat på trender i branschen kan vi spekulera att Broadcom kan komma att erbjuda fler långsiktiga avtal och volymrabatter för att behålla större kunder. Detta kan potentiellt skapa en annan prisdynamik för olika kundgrupper.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">5. Möjligt fokus på företagskunder</h3>
              <p className="mb-4 text-gray-600">
                Givet Broadcoms historiska fokus, spekuleras det om en fortsatt stark inriktning på stora företagskunder. Detta kan potentiellt leda till att mindre kunder upplever förändrade prioriteringar.
              </p>

              <h3 className="text-xl font-semibold mb-2 text-gray-700">Förbered dig för framtiden</h3>
              <p className="mb-4 text-gray-600">
                I ljuset av dessa spekulationer kan det vara klokt att:
              </p>
              <ul className="list-disc list-inside mb-6 text-gray-600">
                <li>Se över dina nuvarande VMware-licensavtal och användning</li>
                <li>Utforska alternativa lösningar som Nutanix (HCI) för att diversifiera din IT-infrastruktur</li>
                <li>Hålla en öppen dialog med din IT-leverantör om framtida strategier och kostnadsoptimering</li>
                <li>Överväga olika scenarier för framtida licensiering och prissättning</li>
              </ul>

              <p className="font-semibold text-gray-800">
                Renew I/O står redo att hjälpa dig navigera dessa osäkra tider. Vi kan assistera med att analysera din nuvarande situation, utforska olika scenarier och utveckla en flexibel IT-strategi som kan anpassas till olika framtida utfall.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default VMwareInfo;
