import { Button } from '@/components/ui/button';
import { ArrowRight, Award, TrendingUp } from 'lucide-react';
import doctorHero from '@/assets/doctor-hero.jpg';

const HeroSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-background overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-accent opacity-10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 lg:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Elite Médica Brasileira</span>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold font-serif leading-tight">
                <span className="text-foreground">Lote sua agenda com</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">pacientes premium</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
                Entre para os 3% da elite médica mais bem paga do Brasil com 
                estratégias de marketing médico ético e comprovado
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8 py-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-foreground">300%</div>
                <div className="text-sm text-muted-foreground font-medium">Aumento médio no faturamento</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-foreground">87%</div>
                <div className="text-sm text-muted-foreground font-medium">Redução na dependência de convênios</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToForm}
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-premium group"
              >
                Quero Lotar Minha Agenda
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold border-2 hover:bg-muted/50"
              >
                Ver Como Funciona
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground font-medium">Resultados em 90 dias</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground font-medium">Método comprovado</span>
              </div>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-3 opacity-20 blur-sm"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-accent rounded-full opacity-30 blur-xl"></div>
              
              {/* Main Image */}
              <div className="relative bg-white p-3 rounded-3xl shadow-premium">
                <img 
                  src={doctorHero} 
                  alt="Médico profissional sorrindo" 
                  className="rounded-2xl w-full max-w-md lg:max-w-lg object-cover"
                />
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-card border border-border/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">+500 Médicos</div>
                      <div className="text-xs text-muted-foreground">Transformados</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;