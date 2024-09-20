import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Formulär skickat",
          description: "Tack för ditt meddelande. Vi återkommer så snart som möjligt.",
        });
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Ett fel uppstod",
        description: "Det gick inte att skicka meddelandet. Försök igen senare.",
        variant: "destructive",
      });
    }
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Låt oss samarbeta</h2>
                <p className="mb-4 text-gray-600">
                  Oavsett om du står inför stora utmaningar eller bara vill säga hej, är jag här för att lyssna och hjälpa. Min expertis inom IT Infrastruktur, Cloud och Cyber Security kan vara nyckeln till att låsa upp din organisations fulla potential och säkra dess digitala framtid.
                </p>
                <p className="mb-4 text-gray-600">
                  Kanske brottas du med:
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>Komplexa tekniska utmaningar som hindrar tillväxt</li>
                  <li>Svårigheter att överbrygga klyftan mellan IT och affärsverksamhet</li>
                  <li>Behov av en skräddarsydd digital strategi</li>
                  <li>Önskan att optimera er befintliga infrastruktur</li>
                  <li>Oro över cybersäkerhetshot och behov av robusta säkerhetslösningar</li>
                </ul>
                <p className="mb-4 text-gray-600">
                  Eller kanske du bara är nyfiken på hur Renew I/O kan bidra till din verksamhet? Oavsett anledning, tveka inte att höra av dig. Tillsammans kan vi utforska möjligheterna och skapa en stark digital framtid för ditt företag.
                </p>
                <div className="flex flex-col space-y-2 text-gray-600">
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
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <Input type="text" name="name" placeholder="Namn" required className="bg-gray-50" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <Input type="email" name="email" placeholder="E-post" required className="bg-gray-50" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <Input type="tel" name="phone" placeholder="Telefon (valfritt)" className="bg-gray-50" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <Input type="text" name="company" placeholder="Företag" className="bg-gray-50" value={formData.company} onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <Textarea name="message" placeholder="Beskriv kort vad du vill ha hjälp med eller fråga om (inklusive eventuella cybersäkerhetsfrågor)" required rows={5} className="bg-gray-50" value={formData.message} onChange={handleChange} />
                  </div>
                  <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">Skicka meddelande</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
