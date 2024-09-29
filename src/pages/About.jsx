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
      description: "Tobias isn't just a technical expert - he's a visionary who rewrites the rules of infrastructure and strategy. His ability to bridge the gap between business goals and cutting-edge tech solutions is unparalleled.",
      email: "tobias@renew-io.se",
      location: "Kristianstad",
      imageClassName: "object-top object-[50%_30%]",
      expandedTitle: "Chief Disruption Officer"
    },
    {
      name: "Patrik Berg",
      initials: "PB",
      description: "Patrik doesn't just solve problems - he anticipates and eliminates them before they even materialize. His deep understanding of system architecture and problem-solving skills are the stuff of legend.",
      email: "patrik@renew-io.se",
      location: "Stockholm",
      expandedTitle: "Master of Technological Alchemy"
    },
    {
      name: "Robert Nesta Nuhu",
      imageSrc: "https://i.imgur.com/JKev6yM.png",
      description: "Robert doesn't just code - he crafts digital symphonies. His ability to transform complex visions into tangible solutions is not just impressive, it's revolutionary.",
      email: "robert@renew-io.se",
      location: "Kristianstad",
      expandedTitle: "Digital Realm Architect"
    },
    {
      name: "Tim Omorogieva",
      imageSrc: "https://i.imgur.com/VUh5uU0.png",
      description: "Tim doesn't just build relationships - he forges unbreakable alliances. His expertise in innovation and personal development isn't just shaping leadership - it's defining the future of business itself.",
      email: "tim@renew-io.se",
      location: "Kristianstad",
      imageClassName: "object-[50%_40%]",
      expandedTitle: "Catalyst of Human Potential"
    },
    {
      name: "Emelie Nylander",
      imageSrc: "https://i.imgur.com/9akoW1T.jpeg",
      description: "Emelie doesn't just capture moments - she immortalizes legacies. Her talent for photography and videography doesn't just build profiles - it crafts visual narratives that resonate on a cellular level.",
      email: "emelie@renew-io.se",
      location: "Kristianstad",
      imageClassName: "object-[50%_40%]",
      expandedTitle: "Visual Narrative Weaver"
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
            About Us
          </motion.h1>
          <motion.p 
            className="text-2xl text-red-500 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Redefining Excellence in Tech, Innovation, and Leadership
          </motion.p>
          <motion.p 
            className="text-lg text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Renew I/O isn't just another cooperative - we're a force of nature in the tech world. Our unique blend of expertise isn't just impressive, it's transformative. We don't just meet industry standards, we shatter them and set new ones.
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
            <h2 className="text-3xl font-bold mb-6 text-center text-red-500">Our Unrivaled Team</h2>
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
              Our Vision
            </h2>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-900 border border-red-500">
              <CardContent className="p-6">
                <p className="text-gray-300">
                  We're not content with being a leading force - we're here to completely redefine the digital landscape. As a collective of unparalleled experts, we're not just catalysts for change - we're the architects of a new digital era. Our focus isn't just on delivering tailored digital solutions - it's on crafting revolutionary approaches that don't just streamline businesses, but catapult them into new realms of possibility.
                </p>
                <p className="text-gray-300 mt-4">
                  At Renew I/O, client satisfaction isn't just a goal - it's our obsession. We don't just believe our success is linked to our clients' - we know our innovative approaches are the key to unlocking unprecedented levels of achievement for those bold enough to partner with us. Our dedication to client success isn't just a part of our work - it's the very essence of our existence.
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
              Our Network
            </h2>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-gray-900 border border-red-500">
              <CardContent className="p-6">
                <p className="text-gray-300">
                  Renew I/O isn't just a cooperative - it's a powerhouse network of elite specialists, each a titan in their own domain. This unrivaled collective enables us to deliver not just high-quality solutions, but groundbreaking innovations that redefine industries. From digital transformation to sustainable development, from visionary leadership to game-changing market communication - we don't just meet needs, we anticipate and exceed them in ways our clients never thought possible.
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