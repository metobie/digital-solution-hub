import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { navItems } from "../nav-items";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <Button variant="ghost" onClick={toggleMenu} className="p-2">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50">
          <nav className="flex flex-col p-4">
            {navItems.map(({ title, to, icon }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                {icon}
                <span className="ml-2">{title}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;