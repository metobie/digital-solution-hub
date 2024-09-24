import React, { createContext, useState, useContext } from 'react';

const MobileMenuContext = createContext();

export const MobileMenuProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useMobileMenu = () => useContext(MobileMenuContext);