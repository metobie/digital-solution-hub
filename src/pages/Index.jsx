import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
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
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <motion.img 
              src="https://i.imgur.com/Fmh6crC.png" 
              alt="Renew I/O Logo" 
              className="h-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            <ul className="flex space-x-4">
              <li><Button variant="ghost">Hem</Button></li>
              <li><Button variant="ghost">Om mig</Button></li>
              <li><Button variant="ghost">Tjänster</Button></li>
              <li><Button variant="ghost">Kontakt</Button></li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <motion.section 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-4">Välkommen till Renew I/O</h1>
          <p className="text-xl text-gray-600">Din partner för digital transformation och strategisk utveckling</p>
        </motion.section>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Om mig</h2>
          <div className="flex flex-col md:flex-row items-center">
            <img src="https://i.imgur.com/PBAVzJh.jpeg" alt="Profilbild" className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-6" />
            <div>
              <p className="mb-2">Som Digital Solution Strategist kombinerar jag min erfarenhet inom storskalig infrastruktur med förmågan att kommunicera effektivt på både företags- och teknisk nivå.</p>
              <p>Min unika kompetens ligger i att överbrygga klyftan mellan affärsmål och tekniska lösningar, vilket möjliggör sömlös integration och optimering av digitala strategier.</p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Rekommendationer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="italic mb-2">"Renew I/O:s strategiska insikter har varit avgörande för vår digitala transformation. Deras förmåga att navigera både tekniska och affärsmässiga aspekter är enastående."</p>
              <p className="font-semibold">- Anna Andersson, VD, TechCorp AB</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="italic mb-2">"Tack vare Renew I/O:s expertis kunde vi implementera en skräddarsydd digital lösning som drastiskt förbättrade vår operativa effektivitet."</p>
              <p className="font-semibold">- Erik Eriksson, CTO, InnovateNow</p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Kontakta mig</h2>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
            <div className="mb-4">
              <Input type="text" placeholder="Namn" required />
            </div>
            <div className="mb-4">
              <Input type="email" placeholder="E-post" required />
            </div>
            <div className="mb-4">
              <Textarea placeholder="Meddelande" required />
            </div>
            {/* TODO: Implement reCAPTCHA */}
            <Button type="submit">Skicka</Button>
          </form>
        </motion.section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Renew I/O. Alla rättigheter förbehållna.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:info@renewio.se">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
