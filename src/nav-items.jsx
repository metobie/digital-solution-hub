import { HomeIcon, MailIcon, InfoIcon, BookOpenIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import ServiceCatalog from "./pages/ServiceCatalog.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Hem",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Tjänster",
    to: "/services",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <ServiceCatalog />,
  },
  {
    title: "Om oss",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Kontakt",
    to: "/contact",
    icon: <MailIcon className="h-4 w-4" />,
    page: <Contact />,
  },
];
