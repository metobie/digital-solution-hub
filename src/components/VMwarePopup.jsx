import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Viktigt meddelande för VMware-användare!</h2>
            <p className="mb-4 text-gray-600">
              Visste du att Broadcoms uppköp av VMware kan leda till dramatiska kostnadsökningar för dina licenser?
              Många företag står inför chockhöjningar på upp till 40% vid nästa förnyelse!
            </p>
            <p className="mb-4 text-gray-600">
              Men oroa dig inte - vi har lösningen! Renew I/O erbjuder expertis inom Nutanix (HCI), 
              en stabil och kostnadseffektiv alternativ som kan spara dig miljoner.
            </p>
            <p className="font-semibold text-gray-800 mb-6">
              Låt oss hjälpa dig navigera denna förändring och optimera din IT-infrastruktur för framtiden.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <button
                onClick={handleClose}
                className="bg-gradient-to-br from-[#3E7A8B] to-[#8A3A8B] text-white px-6 py-2 rounded-full hover:from-[#5A9AAB] hover:to-[#AA5AAB] transition-all duration-300"
              >
                Kontakta oss för en gratis konsultation
              </button>
              <Link
                to="/vmware-info"
                className="text-[#3E7A8B] hover:text-[#5A9AAB] transition-colors duration-300"
              >
                Läs mer om VMware-licenspriser
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VMwarePopup;
