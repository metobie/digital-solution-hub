import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Confetti from 'react-confetti';

const Contact = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleEmailClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds
    window.location.href = "mailto:info@renew-io.se?subject=Förfrågan%20från%20webbplatsen&body=Hej%20Renew%20I/O,%0D%0A%0D%0AJag%20skulle%20vilja%20veta%20mer%20om%20era%20tjänster.";
  };

  const IconWrapper = ({ children }) => (
    <motion.div
      className="w-12 h-12 bg-gradient-to-br from-[#3E7A8B] to-[#8A3A8B] rounded-full flex items-center justify-center mr-4"
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatDelay: 0
      }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen relative bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://i.imgur.com/2dexfVJ.jpeg')" }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      {showConfetti && <Confetti />}
      <div className="container mx-auto px-6 py-12 relative z-10 max-w-4xl md:pt-12 pt-24">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Låt oss skapa framtiden tillsammans
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/10 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-white">Vi ser fram emot att höra från dig</h2>
                  <p className="mb-6 text-gray-200">
                    Oavsett om du söker teknisk expertis, strategisk rådgivning eller kreativa lösningar, är vi här för att hjälpa. Låt oss tillsammans ta ditt företag till nästa nivå inom digital innovation, hållbarhet och effektiv kommunikation.
                  </p>
                  <Button 
                    onClick={handleEmailClick}
                    className="w-full mb-4 bg-gradient-to-br from-[#4E8A9B] to-[#9A4A9B] text-white hover:from-[#6AAABC] hover:to-[#BA6ABC] transition-all duration-300 shadow-lg hover:shadow-xl"
                    size="lg"
                  >
                    Maila oss
                  </Button>
                  <a 
                    href="https://www.linkedin.com/company/renew-io/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full p-2 border border-gray-300 rounded-md text-gray-200 hover:bg-gray-700 transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Följ oss på LinkedIn
                  </a>
                </div>
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <IconWrapper>
                      <Mail className="w-6 h-6 text-white" />
                    </IconWrapper>
                    <div>
                      <h3 className="font-semibold text-white">E-post</h3>
                      <p className="text-gray-200">info@renew-io.se</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <IconWrapper>
                      <Phone className="w-6 h-6 text-white" />
                    </IconWrapper>
                    <div>
                      <h3 className="font-semibold text-white">Telefon</h3>
                      <p className="text-gray-200">+46 73 035 28 88</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <IconWrapper>
                      <Linkedin className="w-6 h-6 text-white" />
                    </IconWrapper>
                    <div>
                      <h3 className="font-semibold text-white">LinkedIn</h3>
                      <a 
                        href="https://www.linkedin.com/company/renew-io/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-[#4A8A9B] transition-colors duration-300"
                      >
                        Renew I/O
                      </a>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <IconWrapper>
                      <MapPin className="w-6 h-6 text-white" />
                    </IconWrapper>
                    <div>
                      <h3 className="font-semibold text-white">Plats</h3>
                      <p className="text-gray-200">Kristianstad, Sverige</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;