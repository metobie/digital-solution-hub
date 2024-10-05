import React from 'react';
import { motion } from 'framer-motion';

const CarouselCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg h-full"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-[#3E7A8B] to-[#8A3A8B] rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

export default CarouselCard;