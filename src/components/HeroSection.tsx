import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import doctorHero from '@/assets/doctor-hero.jpg';

const HeroSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Lote sua agenda com 
              <span className="text-secondary block">pacientes premium</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Entre para os 3% da elite médica mais bem paga do Brasil
            </p>

            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg group"
            >
              Quero Lotar Minha Agenda
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Doctor Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={doctorHero} 
                alt="Médico profissional" 
                className="rounded-2xl w-full max-w-md lg:max-w-lg shadow-large"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;