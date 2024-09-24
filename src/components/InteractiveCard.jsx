import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

const InteractiveCard = ({ icon: Icon, title, description, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="perspective-1000"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className={`h-full overflow-hidden shadow-lg transition-all duration-300 ${color}`}>
        <CardContent className="p-6 h-full flex flex-col justify-between">
          <motion.div
            className="flex flex-col items-center text-center"
            animate={{ rotateY: isHovered ? 180 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mb-4`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          </motion.div>
          <motion.p
            className="text-white mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default InteractiveCard;