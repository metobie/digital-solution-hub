import React from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { navItems } from "./nav-items";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import CookieConsentBanner from "./components/CookieConsent";
import Privacy from "./pages/Privacy";
import VMwareInfo from "./pages/VMwareInfo";
import { MobileMenuProvider } from "./context/MobileMenuContext";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const AppContent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img 
                src="https://i.imgur.com/Fmh6crC.png" 
                alt="Renew I/O Logo" 
                className="h-12"
              />
            </Link>
            <MobileMenu />
            <ul className="hidden md:flex space-x-4">
              {navItems.map(({ title, to, icon }) => (
                <li key={to}>
                  <Link to={to}>
                    <Button variant="ghost" className="flex items-center">
                      {icon}
                      <span className="ml-2">{title}</span>
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          {navItems.map(({ to, page }) => (
            <Route key={to} path={to} element={page} />
          ))}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/vmware-info" element={<VMwareInfo />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsentBanner />
    </div>
  );
};

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <MobileMenuProvider>
            <AppContent />
          </MobileMenuProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;