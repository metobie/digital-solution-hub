import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Cookie } from 'lucide-react';

const bannerVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { y: 100, opacity: 0, transition: { duration: 0.5 } }
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  exit: { scale: 0, opacity: 0, transition: { duration: 0.3 } }
};

const CookieConsentBanner = () => {
  const [consent, setConsent] = useState(false);
  const [minimized, setMinimized] = useState(false);

  const handleConsent = () => {
    setConsent(true);
    setTimeout(() => setMinimized(true), 500); // Delay minimizing to allow exit animation
  };

  const toggleMinimized = () => {
    if (minimized) {
      setMinimized(false);
      setTimeout(() => setConsent(false), 50); // Small delay to ensure smooth transition
    } else {
      handleConsent();
    }
  };

  return (
    <AnimatePresence>
      {!consent && (
        <motion.div
          key="banner"
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
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
      )}
      {minimized && (
        <motion.div
          key="icon"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed bottom-4 right-4 bg-gradient-to-r from-[#0C2A3B] to-[#3A0A3B] text-white p-2 rounded-full shadow-lg cursor-pointer z-50"
          onClick={toggleMinimized}
        >
          <Cookie size={24} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner;