import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 px-[2.5rem] bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-base">M</span>
            </div>
            <div className="font-bold text-xl text-gray-900">M.E.D.D</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('metodologia')}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Metodologia
            </button>
            <button 
              onClick={() => scrollToSection('cases')}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Cases
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
            >
              Quero atrair pacientes premium
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('metodologia')}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
              >
                Metodologia
              </button>
              <button 
                onClick={() => scrollToSection('cases')}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
              >
                Cases
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
              >
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection('contato')}
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-medium mt-4 rounded-full"
              >
                Quero atrair pacientes premium
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;