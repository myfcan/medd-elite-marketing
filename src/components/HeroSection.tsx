import { Button } from '@/components/ui/button';
import doctorHero from '@/assets/doctor-hero.jpg';

const HeroSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Lote sua agenda com pacientes no particular e{" "}
              <span className="text-secondary">cresça com estratégias</span> de Marketing ético
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Entre para os 3% da elite médica mais bem paga do Brasil
            </p>
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold shadow-glow"
            >
              QUERO LOTAR MINHA AGENDA
            </Button>
          </div>

          {/* Doctor Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-secondary rounded-2xl transform rotate-3 opacity-20"></div>
              <img 
                src={doctorHero} 
                alt="Médico profissional sorrindo" 
                className="relative rounded-2xl shadow-elegant w-full max-w-md lg:max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;