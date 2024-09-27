import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Cookie } from 'lucide-react';

const CookieConsentBanner = () => {
  const [consent, setConsent] = useState(false);
  const [minimized, setMinimized] = useState(false);

  const handleConsent = () => {
    setConsent(true);
    setMinimized(true);
  };

  const toggleMinimized = () => {
    if (minimized) {
      setConsent(false);
      setMinimized(false);
    } else {
      setMinimized(true);
    }
  };

  return (
    <AnimatePresence>
      {!consent && !minimized ? (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 right-4 left-4 md:left-auto md:w-96 bg-gradient-to-r from-[#0C2A3B] to-[#3A0A3B] text-white p-6 rounded-lg shadow-lg z-50"
        >
          <p className="mb-4">
            Denna webbplats använder cookies för att förbättra din upplevelse.
          </p>
          <p className="text-sm mb-4">
            Genom att fortsätta använda sidan godkänner du vår användning av cookies.
          </p>
          <Button
            onClick={handleConsent}
            className="bg-white text-[#3E7A8B] hover:bg-gray-100"
          >
            Jag förstår
          </Button>
        </motion.div>
      ) : minimized ? (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 bg-gradient-to-r from-[#0C2A3B] to-[#3A0A3B] text-white p-2 rounded-full shadow-lg cursor-pointer z-50"
          onClick={toggleMinimized}
        >
          <Cookie size={24} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default CookieConsentBanner;