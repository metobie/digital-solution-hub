import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <nav className="container mx-auto px-6 py-3">
              <div className="flex items-center justify-between">
                <Link to="/">
                  <img 
                    src="https://i.imgur.com/Fmh6crC.png" 
                    alt="Renew I/O Logo" 
                    className="h-12"
                  />
                </Link>
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
          <main className="flex-grow mt-20">
            <Routes>
              {navItems.map(({ to, page }) => (
                <Route key={to} path={to} element={page} />
              ))}
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
