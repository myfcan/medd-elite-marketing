import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import doctorHero from '@/assets/doctor-hero.jpg';

const HeroSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 md:pt-36 lg:pt-40 pb-8 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[60vh] sm:min-h-[70vh]">
          {/* Content */}
          <div className="animate-slide-up">

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Sua Agenda Lotada De Pacientes Particulares Com o{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                M.E.D.D.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-lg">
              Entre para os 3% da elite médica mais bem paga do Brasil com estratégias comprovadas de marketing médico ético
            </p>


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
        <div className="mt-12 pt-8">
          <h2 className="text-center text-gray-800 mb-4 text-xl sm:text-2xl font-semibold">Resultados obtidos em 6 meses de aplicação da metodologia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Bloco 1: Aumento no valor da consulta */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 group hover:scale-105">
              <div className="text-center">
                <div className="inline-block p-3 bg-gradient-to-r from-primary to-secondary rounded-full mb-4 group-hover:shadow-lg transition-all duration-300">
                  <span className="text-white font-bold text-xl">+250%</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">no valor da consulta</h3>
                <div className="text-sm text-gray-600 mb-3">
                  <span className="line-through text-red-500">De R$700</span> → <span className="text-primary font-bold">R$2.500</span>
                </div>
                <div className="text-xs text-gray-500">Valor Consulta após metodologia</div>
              </div>
            </div>

            {/* Bloco 2: Faturamento */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/20 group hover:scale-105">
              <div className="text-center">
                <div className="inline-block p-3 bg-gradient-to-r from-secondary to-primary rounded-full mb-4 group-hover:shadow-lg transition-all duration-300">
                  <span className="text-white font-bold text-xl">5X</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Aumento de receita</h3>
                <div className="text-sm text-gray-600 mb-3">Seu faturamento aumentou 5X após o MEED</div>
                <div className="text-xs text-gray-500">Receita multiplicada em 12 meses</div>
              </div>
            </div>

            {/* Bloco 3: Agenda Premium */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 group hover:scale-105">
              <div className="text-center">
                <div className="inline-block p-3 bg-gradient-to-r from-primary to-secondary rounded-full mb-4 group-hover:shadow-lg transition-all duration-300">
                  <span className="text-white font-bold text-xl">+50</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Agenda premium</h3>
                <div className="text-sm text-gray-600 mb-3">Leads qualificados por mês</div>
                <div className="text-xs text-gray-500">Pacientes de alto valor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;