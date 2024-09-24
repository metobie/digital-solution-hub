import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TeamMember = ({ name, role, imageSrc, description, email, location }) => {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white mb-8">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center">
          {imageSrc ? (
            <img src={imageSrc} alt={`${name} profile`} className="w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-6 object-cover" />
          ) : (
            <Avatar className="w-48 h-48 mb-4 md:mb-0 md:mr-6">
              <AvatarFallback className="bg-gray-300 text-gray-600 text-6xl">{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
          )}
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{name} - {role}</h2>
            <p className="text-gray-600 mb-2">{description}</p>
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
      </CardContent>
    </Card>
  );
};

export default TeamMember;