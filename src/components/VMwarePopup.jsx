import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const VMwarePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenVMwarePopup');
    if (!hasSeenPopup) {
      setIsVisible(true);
      localStorage.setItem('hasSeenVMwarePopup', 'true');
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0"
        >
          <div className="absolute inset-0 bg-black opacity-50" onClick={handleClose}></div>
          <div className="relative bg-white rounded-lg shadow-xl p-6 max-w-lg w-full">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Viktigt meddelande för VMware-kunder!</h2>
            <p className="mb-4 text-gray-600">
              Även om inga officiella förändringar har tillkännagivits, finns det indikationer på potentiella prisökningar för VMware-licenser, särskilt för små och medelstora företag.
            </p>
            <p className="mb-4 text-gray-600">
              Broadcoms historik tyder på en tendens att omstrukturera licensmodeller för ökad lönsamhet. Det är viktigt att vara förberedd på eventuella förändringar.
            </p>
            <p className="font-semibold text-gray-800 mb-6">
              Låt Renew I/O hjälpa dig navigera dessa osäkra tider och utforska kostnadseffektiva alternativ som Nutanix (HCI).
            </p>
            <div className="flex flex-col items-center space-y-4">
              <Button
                onClick={handleClose}
                className="bg-gradient-to-br from-[#3E7A8B] to-[#8A3A8B] text-white px-6 py-2 rounded-full hover:from-[#5A9AAB] hover:to-[#AA5AAB] transition-all duration-300"
              >
                Kontakta oss för en gratis konsultation
              </Button>
              <Link
                to="/vmware-info"
                className="text-[#3E7A8B] hover:text-[#5A9AAB] transition-colors duration-300"
              >
                Läs mer om VMware-licenssituationen
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VMwarePopup;
