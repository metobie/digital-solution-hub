import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useMobileMenu } from "../context/MobileMenuContext";

const VMwarePopup = ({ heroHeight }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const { scrollY } = useScroll();
  const { isMobileMenuOpen } = useMobileMenu();

  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      if (latest > heroHeight / 2) {
        setShowBubble(false);
      } else {
        setShowBubble(true);
      }
    });

    return () => unsubscribe();
  }, [scrollY, heroHeight]);

  const togglePopup = () => setIsOpen(!isOpen);
  const hideBubble = () => setShowBubble(false);

  const bubblePosition = isMobileMenuOpen ? 'top-64' : 'top-32';

  return (
    <>
      <AnimatePresence>
        {showBubble && (
          <motion.div 
            className={`fixed ${bubblePosition} right-8 z-50 bg-white bg-opacity-80 text-black p-2 rounded-full cursor-pointer shadow-lg hover:bg-opacity-100 transition-colors duration-300 text-sm flex items-center`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <span onClick={togglePopup}>Psst. Är du VMware kund?</span>
            <button 
              onClick={hideBubble} 
              className="ml-2 p-1 rounded-full hover:bg-gray-200 transition-colors duration-300"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0"
          >
            <div className="absolute inset-0 bg-black opacity-50" onClick={togglePopup}></div>
            <div className="relative bg-white rounded-lg shadow-xl p-6 max-w-lg w-full">
              <button
                onClick={togglePopup}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Viktigt meddelande för VMware-kunder!</h2>
              <p className="mb-4 text-gray-600">
                Även om det inte finns några officiella och slutgiltiga förändringar just nu, tyder mycket på att det finns en möjlighet för ökade licenskostnader, särskilt för små och medelstora företag.
              </p>
              <p className="mb-4 text-gray-600">
                Broadcoms historik visar på en tendens att driva upp priser och omstrukturera licensmodeller för att öka lönsamheten. Det är viktigt att vara förberedd på eventuella förändringar.
              </p>
              <p className="font-semibold text-gray-800 mb-6">
                Låt Renew I/O hjälpa dig navigera dessa osäkra tider och utforska kostnadseffektiva alternativ som Nutanix (HCI).
              </p>
              <div className="flex flex-col items-center space-y-4">
                <Link to="/contact">
                  <Button
                    className="bg-gradient-to-br from-[#3E7A8B] to-[#8A3A8B] text-white px-6 py-2 rounded-full hover:from-[#5A9AAB] hover:to-[#AA5AAB] transition-all duration-300"
                  >
                    Kontakta oss för att veta mer
                  </Button>
                </Link>
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
    </>
  );
};

export default VMwarePopup;
