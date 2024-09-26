import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const AnimatedTeamMember = ({ name, imageSrc, initials, description, email, location, imageClassName }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-6">
      <motion.div
        className="flex items-center cursor-pointer justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <motion.div
          layout
          className="flex items-center"
        >
          <motion.div
            layout
            className={`rounded-full overflow-hidden ${isExpanded ? 'w-24 h-24' : 'w-12 h-12'} mr-4`}
          >
            {imageSrc ? (
              <motion.img
                src={imageSrc}
                alt={`${name} profile`}
                className={`w-full h-full object-cover ${imageClassName || ''}`}
                style={{ objectPosition: '50% 20%' }}
                layout
              />
            ) : initials ? (
              <div className="w-full h-full bg-gradient-to-br from-[#3E7A8B] to-[#8A3A8B] flex items-center justify-center">
                <span className="text-white font-bold">{initials}</span>
              </div>
            ) : null}
          </motion.div>
          <motion.div layout>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-600">{location}</p>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? <ChevronUp className="w-6 h-6 text-gray-600" /> : <ChevronDown className="w-6 h-6 text-gray-600" />}
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-gray-600" />
                <p className="text-gray-600">{email}</p>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-gray-600" />
                <p className="text-gray-600">{location}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTeamMember;