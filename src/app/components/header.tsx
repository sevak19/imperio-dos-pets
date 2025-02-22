"use client";

import { Heart } from "lucide-react";

const Header = () => {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 64; // This matches our header height of 4rem (64px)
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
    };

  return (
    <nav className="bg-gradient-to-r from-customWhite to-customGreen shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">
              Império dos Pets
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className="text-gray-700 hover:text-purple-600"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "services")}
              className="text-gray-700 hover:text-purple-600"
            >
              Serviços
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="text-gray-700 hover:text-purple-600"
            >
              Sobre
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="text-gray-700 hover:text-purple-600"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
