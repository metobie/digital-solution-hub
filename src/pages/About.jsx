import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Lightbulb, Cloud, Code, LineChart, Users, Camera, Megaphone } from 'lucide-react';
import AnimatedTeamMember from '../components/AnimatedTeamMember';
import ScrollIndicator from '../components/ScrollIndicator';

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const IconWrapper = ({ children }) => (
    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-2">
      {children}
    </div>
  );

  const teamMembers = [
    {
      name: "Tobias Karlsson",
      imageSrc: "https://i.imgur.com/PBAVzJh.jpeg",
      description: "Tobias är inte bara en teknisk expert - han är en visionär som omskriver reglerna för infrastruktur och strategi. Hans förmåga att överbrygga klyftan mellan affärsmål och banbrytande tekniska lösningar är oöverträffad.",
      email: "tobias@renew-io.se",
      location: "Kristianstad",
      imageClassName: "object-top object-[50%_30%]",
      expandedTitle: "Chief Disruption Officer"
    },
    {
      name: "Patrik Berg",
      initials: "PB",
      description: "Patrik löser inte bara problem - han förutser och eliminerar dem innan de ens materialiseras. Hans djupa förståelse för systemarkitektur och problemlösningsförmåga är legendarisk.",
      email: "patrik@renew-io.se",
      location: "Stockholm",
      expandedTitle: "Mästare av teknologisk alkemi"
    },
    {
      name: "Robert Nesta Nuhu",
      imageSrc: "https://i.imgur.com/JKev6yM.png",
      description: "Robert kodar inte bara - han komponerar digitala symfonier. Hans förmåga att omvandla komplexa visioner till konkreta lösningar är inte bara imponerande, den är revolutionerande.",
      email: "robert@renew-io.se",
      location: "Kristianstad",
      expandedTitle: "Digital Realm Architect"
    },
    {
      name: "Tim Omorogieva",
      imageSrc: "https://i.imgur.com/VUh5uU0.png",
      description: "Tim bygger inte bara relationer - han smider obrytbara allianser. Hans expertis inom innovation och personlig utveckling formar inte bara ledarskap - den definierar framtiden för affärsvärlden.",
      email: "tim@renew-io.se",
      location: "Kristianstad",
      imageClassName: "object-[50%_40%]",
      expandedTitle: "Katalysator för mänsklig potential"
    },
    {
      name: "Emelie Nylander",
      imageSrc: "https://i.imgur.com/9akoW1T.jpeg",
      description: "Emelie fångar inte bara ögonblick - hon förevigar arv. Hennes talang för fotografi och videoproduktion bygger inte bara profiler - den skapar visuella berättelser som resonerar på cellnivå.",
      email: "emelie@renew-io.se",
      location: "Kristianstad",
      imageClassName: "object-[50%_40%]",
      expandedTitle: "Vävare av visuella berättelser"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ y }}
      >
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://i.imgur.com/3OD3zl7.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: useTransform(scrollY, [0, 500], [0, 150]),
          }}
        />
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="relative z-20 text-center px-6 max-w-3xl">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-2 text-white tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Om oss
          </motion.h1>
          <motion.p 
            className="text-2xl text-red-500 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Omdefiniera excellens inom teknik, innovation och ledarskap
          </motion.p>
          <motion.p 
            className="text-lg text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Renew I/O är inte bara ett annat kooperativ - vi är en naturkraft i teknikvärlden. Vår unika blandning av expertis är inte bara imponerande, den är transformativ. Vi möter inte bara branschstandarder, vi krossar dem och sätter nya.
          </motion.p>
        </div>
        <ScrollIndicator />
      </motion.section>

      <div className="relative z-30 bg-black">
        <div className="container mx-auto px-6 py-12">
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-red-500">Vårt oöverträffade team</h2>
            {teamMembers.map((member, index) => (
              <AnimatedTeamMember key={index} {...member} />
            ))}
          </motion.section>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center text-red-500">
              <IconWrapper>
                <Lightbulb className="w-4 h-4 text-white" />
              </IconWrapper>
              Vår vision
            </h2>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-900 border border-red-500">
              <CardContent className="p-6">
                <p className="text-gray-300">
                  Vi nöjer oss inte med att vara en ledande kraft - vi är här för att helt omdefiniera det digitala landskapet. Som ett kollektiv av oöverträffade experter är vi inte bara katalysatorer för förändring - vi är arkitekterna bakom en ny digital era. Vårt fokus ligger inte bara på att leverera skräddarsydda digitala lösningar - det handlar om att skapa revolutionerande metoder som inte bara effektiviserar företag, utan katapulterar dem in i nya sfärer av möjligheter.
                </p>
                <p className="text-gray-300 mt-4">
                  På Renew I/O är kundnöjdhet inte bara ett mål - det är vår besatthet. Vi tror inte bara att vår framgång är kopplad till våra klienters - vi vet att våra innovativa metoder är nyckeln till att låsa upp tidigare ouppnådda nivåer av framgång för de som är modiga nog att samarbeta med oss. Vår hängivenhet till klienternas framgång är inte bara en del av vårt arbete - det är själva essensen av vår existens.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center text-red-500">
              <IconWrapper>
                <Users className="w-4 h-4 text-white" />
              </IconWrapper>
              Vårt nätverk
            </h2>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-900 border border-red-500">
              <CardContent className="p-6">
                <p className="text-gray-300">
                  Renew I/O är inte bara ett kooperativ - det är ett kraftcentrum av elitspecialister, var och en en titan inom sitt område. Detta oöverträffade kollektiv gör det möjligt för oss att leverera inte bara högkvalitativa lösningar, utan banbrytande innovationer som omdefinerar branscher. Från digital transformation till hållbar utveckling, från visionärt ledarskap till spelförändrande marknadskommunikation - vi möter inte bara behov, vi förutser och överträffar dem på sätt som våra klienter aldrig trodde var möjliga.
                </p>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;