import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Lightbulb, Cloud, Code, LineChart, Users, Camera, Megaphone } from 'lucide-react';
import AnimatedTeamMember from '../components/AnimatedTeamMember';
import ScrollIndicator from '../components/ScrollIndicator';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { teamMembers } from '../data/teamMembers';

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const avatarOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const IconWrapper = ({ children }) => (
    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2 border border-gray-200">
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <HeroSection y={y} avatarOpacity={avatarOpacity} teamMembers={teamMembers} />
      <MainContent teamMembers={teamMembers} IconWrapper={IconWrapper} />
    </div>
  );
};

const HeroSection = ({ y, avatarOpacity, teamMembers }) => (
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
        y: useTransform(y, [0, 500], [0, 150]),
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-[#0C2A3B] to-[#3A0A3B] opacity-90 z-10"></div>
    <motion.div 
      className="relative z-20 text-center px-6 max-w-3xl"
    >
      <motion.h1 
        className="text-4xl md:text-6xl font-extrabold mb-2 text-white tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Om oss
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-100 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Ett kooperativ av experter inom teknik, innovation och ledarskap
      </motion.p>
      <motion.p 
        className="text-lg text-gray-200 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Renew I/O är ett unikt kooperativ som samlar experter inom teknik, innovation, ledarskap och digital strategi. Vår styrka ligger i vår mångfald av kompetenser, vilket gör oss till en ovärderlig partner i din digitala transformation och organisatoriska utveckling.
      </motion.p>
      <TeamAvatars avatarOpacity={avatarOpacity} teamMembers={teamMembers} />
    </motion.div>
    <ScrollIndicator />
  </motion.section>
);

const TeamAvatars = ({ avatarOpacity, teamMembers }) => (
  <motion.div
    className="hidden md:flex justify-center space-x-4"
    style={{ opacity: avatarOpacity }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    {teamMembers.map((member, index) => (
      <Avatar key={index} className="w-16 h-16 border-2 border-white">
        {member.imageSrc ? (
          <AvatarImage src={member.imageSrc} alt={member.name} className={member.imageClassName} />
        ) : (
          <AvatarFallback>{member.initials}</AvatarFallback>
        )}
      </Avatar>
    ))}
  </motion.div>
);

const MainContent = ({ teamMembers, IconWrapper }) => (
  <div className="relative z-30 bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="container mx-auto px-6 py-12">
      <TeamSection teamMembers={teamMembers} />
      <VisionSection IconWrapper={IconWrapper} />
      <NetworkSection IconWrapper={IconWrapper} />
    </div>
  </div>
);

const TeamSection = ({ teamMembers }) => (
  <motion.section 
    className="mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Vårt Team</h2>
    {teamMembers.map((member, index) => (
      <AnimatedTeamMember key={index} {...member} />
    ))}
  </motion.section>
);

const VisionSection = ({ IconWrapper }) => (
  <motion.section
    className="mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
      <IconWrapper>
        <Lightbulb className="w-4 h-4 text-black" />
      </IconWrapper>
      Vår Vision
    </h2>
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <CardContent className="p-6">
        <p className="text-gray-600">
          Vår vision är att vara den ledande kraften i att forma en digital framtid där innovation möter praktisk tillämpning. Som ett kooperativ av experter strävar vi efter att vara katalysatorn för positiv förändring i företagsvärlden. Vi fokuserar på att leverera skräddarsydda digitala lösningar som inte bara effektiviserar verksamheter, utan också öppnar upp för nya möjligheter och affärsmodeller. Genom att kombinera teknisk expertis med strategiskt tänkande, strävar vi efter att hjälpa våra kunder att navigera den digitala transformationen på ett sätt som är både innovativt och hållbart, samtidigt som vi skapar genuint värde och engagemang för deras intressenter.
        </p>
        <p className="text-gray-600 mt-4">
          Kundnöjdhet står i centrum för allt vi gör. Vi är övertygade om att vår framgång är direkt kopplad till våra kunders framgång. Därför lägger vi stor vikt vid att förstå varje kunds unika behov och utmaningar, och arbetar outtröttligt för att överträffa deras förväntningar. Vår dedikation till kundnöjdhet genomsyrar varje aspekt av vårt arbete, från den initiala konsultationen till den slutliga leveransen och beyond. Vi strävar efter att bygga långsiktiga partnerskap med våra kunder, där deras tillfredsställelse och framgång är vårt yttersta mål.
        </p>
      </CardContent>
    </Card>
  </motion.section>
);

const NetworkSection = ({ IconWrapper }) => (
  <motion.section
    className="mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.8 }}
  >
    <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
      <IconWrapper>
        <Users className="w-4 h-4 text-black" />
      </IconWrapper>
      Vårt Nätverk
    </h2>
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <CardContent className="p-6">
        <p className="text-gray-600">
          Som ett kooperativ samarbetar vi som ett brett nätverk av specialister, var och en med egen spetskompetens och egna företag. Detta möjliggör att vi alltid kan erbjuda skräddarsydda och högkvalitativa lösningar, anpassade efter varje kunds unika behov och utmaningar inom digital transformation, hållbar utveckling, ledarskap och effektiv marknadskommunikation.
        </p>
      </CardContent>
    </Card>
  </motion.section>
);

export default About;