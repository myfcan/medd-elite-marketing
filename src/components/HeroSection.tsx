import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import doctorHero from '@/assets/doctor-hero.jpg';

const HeroSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          {/* Content */}
          <div className="animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Elite Médica Brasileira</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Lote sua agenda com pacientes particulares com o{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                M.E.D.D.
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg">
              Entre para os 3% da elite médica mais bem paga do Brasil com estratégias comprovadas de marketing médico ético
            </p>

            {/* Features */}
            <div className="space-y-4 mb-12">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-gray-700">Aumento médio de 300% no faturamento</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-gray-700">Redução de 87% na dependência de convênios</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-gray-700">Resultados comprovados em 90 dias</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToForm}
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                Quero Lotar Minha Agenda
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold rounded-full border-2 hover:bg-gray-50 group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Ver Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span>+500 médicos transformados</span>
              </div>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-20 -right-20 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-fade-in" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Agenda Lotada</div>
                    <div className="text-xs text-gray-500">100% Particular</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-20 -left-20 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-fade-in" style={{animationDelay: '0.7s'}}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-base">R$</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">+300%</div>
                    <div className="text-xs text-gray-500">Faturamento</div>
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                <img 
                  src={doctorHero} 
                  alt="Médico profissional sorrindo" 
                  className="rounded-2xl w-full max-w-md lg:max-w-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <p className="text-center text-gray-500 mb-12 text-xl">Resultados comprovados de nossos clientes</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">+500</div>
              <div className="text-gray-600">Médicos Transformados COM MEDD</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">200%</div>
              <div className="text-gray-600">De Aumento No valor da consulta em 60 dias</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">3X</div>
              <div className="text-gray-600">Aumento no faturamento em até 9 meses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">87%</div>
              <div className="text-gray-600">Menos dependência de Convênios</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;