import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const TabView = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex justify-center mb-4">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`mx-2 ${
              activeTab === index
                ? 'bg-gradient-to-br from-[#3E7A8B] to-[#8A3A8B] text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {tab.title}
          </Button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-4"
      >
        {tabs[activeTab].content}
      </motion.div>
    </div>
  );
};

export default TabView;