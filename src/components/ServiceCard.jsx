import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ServiceCard = ({ service, openPopup }) => {
  return (
    <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <service.icon className="w-8 h-8 text-[#3E7A8B] mr-3" />
          <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <h3 className="font-semibold text-gray-700 mb-2">Exempel på projekt:</h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          {service.examples.map((example, idx) => (
            <li key={idx}>
              <span 
                className="cursor-pointer text-gray-600 hover:underline"
                onClick={() => openPopup(example.title, example.content)}
              >
                {example.title}
              </span>
            </li>
          ))}
        </ul>
        <h3 className="font-semibold text-gray-700 mb-2">Experter:</h3>
        <p className="text-gray-600">{service.experts.join(", ")}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;