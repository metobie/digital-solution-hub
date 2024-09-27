import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from 'lucide-react';

const ExpandableServiceCard = ({ service, isExpanded, onToggle }) => {
  return (
    <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/10 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={onToggle}>
          <div className="flex items-center">
            <service.icon className="w-8 h-8 text-[#3E7A8B] mr-3" />
            <h2 className="text-xl font-semibold text-white">{service.title}</h2>
          </div>
          {isExpanded ? <ChevronUp className="w-6 h-6 text-white" /> : <ChevronDown className="w-6 h-6 text-white" />}
        </div>
        <p className="text-gray-200 mb-4">{service.description}</p>
        
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <h3 className="font-semibold text-gray-200 mb-2">Exempel på projekt:</h3>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            {service.examples.map((example, idx) => (
              <li key={idx}>{example.title}</li>
            ))}
          </ul>
          <h3 className="font-semibold text-gray-200 mb-2">Experter:</h3>
          <p className="text-gray-300">{service.experts.join(", ")}</p>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default ExpandableServiceCard;