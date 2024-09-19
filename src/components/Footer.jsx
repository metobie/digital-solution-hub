import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Renew I/O</h3>
            <p className="text-sm">Din partner för digital transformation och strategisk utveckling</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Snabblänkar</h3>
            <ul className="text-sm">
              <li className="mb-2"><Link to="/" className="hover:text-gray-300">Hem</Link></li>
              <li className="mb-2"><Link to="/about" className="hover:text-gray-300">Om mig</Link></li>
              <li className="mb-2"><Link to="/contact" className="hover:text-gray-300">Kontakt</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Kontakt</h3>
            <p className="text-sm mb-2">Email: info@renewio.se</p>
            <p className="text-sm mb-2">Telefon: +46 73 035 28 88</p>
            <p className="text-sm">Kristianstad, Sverige</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Renew I/O. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
