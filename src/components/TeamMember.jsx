import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const TeamMember = ({ name, imageSrc, description, email, location, imageClassName }) => {
  return (
    <div className="flex flex-col md:flex-row items-start mt-4">
      {imageSrc && (
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
          <img 
            src={imageSrc} 
            alt={`${name} profile`} 
            className={`w-full h-64 object-cover rounded-lg ${imageClassName || ''}`}
          />
        </div>
      )}
      <div className="w-full md:w-2/3">
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
      </div>
    </div>
  );
};

export default TeamMember;