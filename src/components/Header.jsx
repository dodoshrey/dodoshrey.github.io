import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 10; // height of the fixed header in px
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white/90 backdrop-blur-md z-50 border-b-1 border-blue-400 shadow-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 w-full min-h-[60px]">
          {/* Name */}
          <div className="text-3xl font-bold text-gray-900 flex-shrink-0 tracking-wide">
            <a href='https://www.linkedin.com/in/shrey-wahi/'>Shrey Wahi</a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </nav>
          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/dodoshrey" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shrey-wahi/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:wahishrey@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </button>
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200">
              <a href="https://github.com/dodoshrey" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/shrey-wahi/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:wahishrey@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
      {/* Decorative line under header */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 opacity-80"></div>
    </header>
  );
};

export default Header;