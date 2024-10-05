import { HomeIcon, MailIcon, InfoIcon, BriefcaseIcon, FolderIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";

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
    icon: <BriefcaseIcon className="h-4 w-4" />,
    page: <Services />,
  },
  {
    title: "Portfölj",
    to: "/portfolio",
    icon: <FolderIcon className="h-4 w-4" />,
    page: <Portfolio />,
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