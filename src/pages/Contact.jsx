import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-8">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Kontakta Renew I/O
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Låt oss samarbeta</h2>
              <p className="mb-4 text-gray-600 text-center">
                Oavsett om du står inför stora utmaningar eller bara vill säga hej, är jag här för att lyssna och hjälpa. Min expertis inom IT Infrastruktur, Cloud och Cyber Security kan vara nyckeln till att låsa upp din organisations fulla potential och säkra dess digitala framtid.
              </p>
              <p className="mb-4 text-gray-600 text-center">
                Tillsammans kan vi utforska möjligheterna och skapa en stark digital framtid för ditt företag.
              </p>
              <div className="flex flex-col items-center space-y-4 text-gray-600 mt-8">
                <div className="flex items-center">
                  <Mail className="mr-2 text-blue-500" />
                  <span>info@renew-io.se</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 text-blue-500" />
                  <span>+46 73 035 28 88</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 text-blue-500" />
                  <span>Kristianstad, Sverige</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="mr-2 text-blue-500" />
                  <a href="https://www.linkedin.com/company/renew-io/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    LinkedIn
                  </a>
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
