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
    title: "Om mig",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <div>Om mig sida</div>, // Placeholder for About page
  },
  {
    title: "Kontakt",
    to: "/contact",
    icon: <MailIcon className="h-4 w-4" />,
    page: <Contact />,
  },
];
