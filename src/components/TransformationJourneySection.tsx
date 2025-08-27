import { Megaphone, Magnet, Settings, ClipboardList, ArrowRight } from 'lucide-react';

const TransformationJourneySection = () => {
  const steps = [
    {
      number: 1,
      icon: Megaphone,
      title: "Arquitetura de Autoridade",
      description: "Posicionamento estratégico como referência na especialidade",
      gradient: "from-primary to-primary/80"
    },
    {
      number: 2,
      icon: Magnet,
      title: "Sistema de Atração Seletiva", 
      description: "Estratégias para atrair pacientes premium qualificados",
      gradient: "from-secondary to-secondary/80"
    },
    {
      number: 3,
      icon: Settings,
      title: "Automação Inteligente",
      description: "Sistemas automatizados que trabalham 24h por você",
      gradient: "from-gray-700 to-gray-600"
    },
    {
      number: 4,
      icon: ClipboardList,
      title: "Agenda Lotada, Ticket Médio 3x, Receita Previsível",
      description: "Resultados concretos: mais pacientes, maior valor, renda estável",
      gradient: "from-green-600 to-green-500"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Transformando Médicos em{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Autoridades Digitais Premium
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Veja como o M.E.D.D. transforma sua prática médica em 4 etapas estratégicas
          </p>
        </div>

        {/* Journey Steps - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-green-500 rounded-full transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center">
                  {/* Step Card */}
                  <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-sm mb-6">
                    {/* Icon Circle */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Step Number */}
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-gray-700">{step.number}</span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 text-center leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 transform -translate-y-1/2" 
                         style={{ left: `${(index + 1) * 25 - 2}%` }}>
                      <div className="w-8 h-8 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center shadow-md">
                        <ArrowRight className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Journey Steps - Mobile/Tablet */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex items-start space-x-6">
                {/* Left Side - Icon and Number */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-3`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-700">{step.number}</span>
                  </div>
                  
                  {/* Vertical Line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-primary to-secondary rounded-full mt-4"></div>
                  )}
                </div>
                
                {/* Right Side - Content */}
                <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Pronto para Iniciar Sua Transformação?
            </h3>
            <p className="text-lg sm:text-xl opacity-95 mb-8 max-w-2xl mx-auto">
              Descubra como centenas de médicos já implementaram esse sistema e transformaram suas práticas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-sm opacity-80">
                ✓ Sistema completo  ✓ Resultados comprovados  ✓ Suporte especializado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationJourneySection;