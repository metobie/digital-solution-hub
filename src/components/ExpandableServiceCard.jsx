import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from 'lucide-react';

const ExpandableServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex items-center">
            <service.icon className="w-8 h-8 text-[#3E7A8B] mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
          </div>
          {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-semibold text-gray-700 mb-2">Exempel på projekt:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              {service.examples.map((example, idx) => (
                <li key={idx}>{example.title}</li>
              ))}
            </ul>
            <h3 className="font-semibold text-gray-700 mb-2">Experter:</h3>
            <p className="text-gray-600">{service.experts.join(", ")}</p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
};

export default ExpandableServiceCard;