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
    setTimeout(() => setShowConfetti(false), 5000);
    window.location.href = "mailto:info@renew-io.se?subject=Förfrågan%20från%20webbplatsen&body=Hej%20Renew%20I/O,%0D%0A%0D%0AJag%20skulle%20vilja%20veta%20mer%20om%20era%20tjänster.";
  };

  const ContactButton = ({ icon: Icon, text, onClick, href }) => (
    <motion.button
      className="flex items-center justify-center w-full p-3 mb-4 bg-gradient-to-br from-[#3E7A8B] to-[#8A3A8B] text-white rounded-md hover:from-[#5A9AAB] hover:to-[#AA5AAB] transition-all duration-300"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Icon className="w-6 h-6 mr-2" />
      {text}
    </motion.button>
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
                  <ContactButton 
                    icon={Mail}
                    text="Maila oss"
                    onClick={handleEmailClick}
                  />
                  <ContactButton 
                    icon={Linkedin}
                    text="Följ oss på LinkedIn"
                    onClick={() => window.open("https://www.linkedin.com/company/renew-io/", "_blank")}
                  />
                </div>
                <div className="space-y-4">
                  <ContactButton 
                    icon={Mail}
                    text="info@renew-io.se"
                    onClick={() => window.location.href = "mailto:info@renew-io.se"}
                  />
                  <ContactButton 
                    icon={Phone}
                    text="+46 73 035 28 88"
                    onClick={() => window.location.href = "tel:+46730352888"}
                  />
                  <ContactButton 
                    icon={Linkedin}
                    text="Renew I/O"
                    onClick={() => window.open("https://www.linkedin.com/company/renew-io/", "_blank")}
                  />
                  <ContactButton 
                    icon={MapPin}
                    text="Kristianstad, Sverige"
                    onClick={() => window.open("https://www.google.com/maps/place/Kristianstad", "_blank")}
                  />
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