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
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border-b border-border/50 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-3xl font-bold font-serif bg-gradient-primary bg-clip-text text-transparent">
              M.E.D.D
            </div>
            <div className="hidden md:block text-sm text-muted-foreground font-medium">
              Consultoria Premium
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground/80 hover:text-foreground font-medium transition-colors duration-200"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('metodologia')}
              className="text-foreground/80 hover:text-foreground font-medium transition-colors duration-200"
            >
              Metodologia
            </button>
            <button 
              onClick={() => scrollToSection('cases')}
              className="text-foreground/80 hover:text-foreground font-medium transition-colors duration-200"
            >
              Cases
            </button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-6 py-2 shadow-premium font-medium"
            >
              Começar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 bg-background/95 backdrop-blur-xl">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-foreground/80 hover:text-foreground font-medium transition-colors py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('metodologia')}
                className="text-left text-foreground/80 hover:text-foreground font-medium transition-colors py-2"
              >
                Metodologia
              </button>
              <button 
                onClick={() => scrollToSection('cases')}
                className="text-left text-foreground/80 hover:text-foreground font-medium transition-colors py-2"
              >
                Cases
              </button>
              <Button 
                onClick={() => scrollToSection('contato')}
                className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-premium font-medium mt-4"
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