import { HomeIcon, MailIcon, InfoIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Contact from "./pages/Contact.jsx";

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
    title: "Grundare",
    to: "/founder",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <div>Grundare sida</div>, // Placeholder for Founder page
  },
  {
    title: "Kontakt",
    to: "/contact",
    icon: <MailIcon className="h-4 w-4" />,
    page: <Contact />,
  },
];
