import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    toast({
      title: "Formulär skickat",
      description: "Tack för ditt meddelande. Vi återkommer så snart som möjligt.",
    });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
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
          <h2 className="text-2xl font-semibold mb-4">Låt oss samarbeta</h2>
          <p className="mb-4">
            Oavsett om du står inför stora utmaningar eller bara vill säga hej, är jag här för att lyssna och hjälpa. Min expertis som IT Infrastruktur, Cloud och Cyber Security kan vara nyckeln till att låsa upp din organisations fulla potential och säkra dess digitala framtid.
          </p>
          <p className="mb-4">
            Kanske brottas du med:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Komplexa tekniska utmaningar som hindrar tillväxt</li>
            <li>Svårigheter att överbrygga klyftan mellan IT och affärsverksamhet</li>
            <li>Behov av en skräddarsydd digital strategi</li>
            <li>Önskan att optimera er befintliga infrastruktur</li>
            <li>Oro över cybersäkerhetshot och behov av robusta säkerhetslösningar</li>
          </ul>
          <p className="mb-4">
            Eller kanske du bara är nyfiken på hur Renew I/O kan bidra till din verksamhet? Oavsett anledning, tveka inte att höra av dig. Tillsammans kan vi utforska möjligheterna och skapa en stark digital framtid för ditt företag.
          </p>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <Mail className="mr-2" />
              <span>info@renewio.se</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2" />
              <span>+46 70 123 45 67</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" />
              <span>Stockholm, Sverige</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
            <div className="mb-4">
              <Input type="text" placeholder="Namn" required />
            </div>
            <div className="mb-4">
              <Input type="email" placeholder="E-post" required />
            </div>
            <div className="mb-4">
              <Input type="tel" placeholder="Telefon (valfritt)" />
            </div>
            <div className="mb-4">
              <Input type="text" placeholder="Företag" />
            </div>
            <div className="mb-4">
              <Textarea placeholder="Beskriv kort vad du vill ha hjälp med eller fråga om (inklusive eventuella cybersäkerhetsfrågor)" required rows={5} />
            </div>
            {/* TODO: Implement reCAPTCHA */}
            <Button type="submit" className="w-full">Skicka meddelande</Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
