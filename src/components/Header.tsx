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
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              M.E.D.D
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('metodologia')}
              className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
              Metodologia
            </button>
            <button 
              onClick={() => scrollToSection('cases')}
              className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
              Cases
            </button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-secondary hover:bg-secondary/90 text-white px-6"
            >
              Começar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-600 hover:text-primary transition-colors font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('metodologia')}
                className="text-left text-gray-600 hover:text-primary transition-colors font-medium"
              >
                Metodologia
              </button>
              <button 
                onClick={() => scrollToSection('cases')}
                className="text-left text-gray-600 hover:text-primary transition-colors font-medium"
              >
                Cases
              </button>
              <Button 
                onClick={() => scrollToSection('contato')}
                className="w-full bg-secondary hover:bg-secondary/90 text-white"
              >
                Começar Agora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;