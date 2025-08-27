import { Award, Target, Zap, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';

const MethodologySection = () => {
  const pillars = [
    {
      number: 1,
      icon: Award,
      title: "Arquitetura de Autoridade",
      subtitle: "Ser reconhecido como referência na sua especialidade",
      gradient: "from-primary to-primary/80",
      textColor: "text-secondary",
      bgColor: "bg-secondary/5",
      borderColor: "border-secondary/10",
      iconBg: "bg-secondary/20",
      features: [
        "Arquitetura de marca pessoal profissional",
        "Posicionamento estratégico diferenciado", 
        "Comunicação de valor consistente"
      ]
    },
    {
      number: 2,
      icon: Target,
      title: "Sistema de Atração Seletiva",
      subtitle: "Atraindo pacientes certos, não curiosos de convênio",
      gradient: "from-secondary to-secondary/80",
      textColor: "text-primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/10",
      iconBg: "bg-primary/20",
      features: [
        "Conteúdo estratégico (posts, stories, roteiros)",
        "Funil validado de atração e conversão",
        "Tráfego pago como acelerador"
      ]
    },
    {
      number: 3,
      icon: Zap,
      title: "Automação Inteligente com Geniumed",
      subtitle: "Sistema que trabalha 24h gerando previsibilidade",
      gradient: "from-gray-700 to-gray-600",
      textColor: "text-gray-700",
      bgColor: "bg-gray-100/50",
      borderColor: "border-gray-200",
      iconBg: "bg-gray-200",
      features: [
        "Qualificação de leads via IA",
        "Engajamento inteligente 24/7",
        "Pós-consulta automatizado para fidelização"
      ]
    }
  ];

  return (
    <section id="metodologia" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements - Responsive positioning */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 md:top-20 left-4 md:left-10 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 md:bottom-20 right-4 md:right-10 w-40 md:w-80 h-40 md:h-80 bg-secondary/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Enhanced responsive typography */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-gradient-to-r from-primary to-secondary rounded-2xl md:rounded-3xl mb-8 md:mb-10 shadow-lg animate-fade-in">
            <span className="text-xl md:text-2xl lg:text-4xl font-bold text-white tracking-wider">M.E.D.D</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 md:mb-8 lg:mb-10 leading-tight">
            Metodologia{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              M.E.D.D.
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed mb-8 md:mb-10">
            Um sistema completo e integrado desenvolvido especificamente para médicos 
            que desejam construir autoridade digital e fluxo previsível de pacientes particulares.
          </p>
          
          <div className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-sm hover:shadow-md transition-shadow duration-300">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900 leading-relaxed">
              <strong>Não é marketing tradicional.</strong> É um sistema integrado desenvolvido 
              exclusivamente para a realidade médica brasileira.
            </p>
          </div>
        </div>

        {/* Flow Steps - Desktop (xl and above) */}
        <div className="hidden xl:block mb-20 lg:mb-24">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-gray-500 rounded-full transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-3 gap-8 lg:gap-10 relative z-10">
              {pillars.map((pillar, index) => (
                <div key={pillar.number} className="flex flex-col items-center group">
                  {/* Step Card - Enhanced with better animations */}
                  <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-500 w-full mb-8 h-[600px] lg:h-[640px] flex flex-col group-hover:-translate-y-2 group-hover:scale-[1.02]">
                    {/* Icon Circle */}
                    <div className={`w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${pillar.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <pillar.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                    </div>
                    
                    {/* Step Number */}
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors">
                      <span className="text-xl lg:text-2xl font-bold text-gray-700">{pillar.number}</span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 text-center leading-tight">
                      {pillar.title}
                    </h3>
                    
                    <p className={`${pillar.textColor} text-center mb-6 lg:mb-8 font-semibold text-sm lg:text-base`}>
                      "{pillar.subtitle}"
                    </p>
                    
                    {/* Features - flex-grow to fill remaining space */}
                    <div className="space-y-4 flex-grow">
                      {pillar.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className={`flex items-start space-x-3 p-4 bg-gradient-to-r ${pillar.bgColor} to-transparent rounded-xl border ${pillar.borderColor} hover:shadow-sm transition-shadow duration-200`}>
                          <div className={`w-6 h-6 ${pillar.iconBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <CheckCircle className={`w-4 h-4 ${pillar.textColor}`} />
                          </div>
                          <span className="text-sm lg:text-base text-gray-700 font-medium leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Arrow (except for last item) */}
                  {index < pillars.length - 1 && (
                    <div className="absolute top-1/2 transform -translate-y-1/2" 
                         style={{ left: `${(index + 1) * 33.33 - 2}%` }}>
                      <div className="w-10 h-10 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center shadow-md hover:border-primary transition-colors duration-300">
                        <ArrowRight className="w-5 h-5 text-gray-600" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Flow Steps - Tablet (lg to xl) */}
        <div className="hidden lg:block xl:hidden mb-20">
          <div className="grid grid-cols-1 gap-10">
            {pillars.map((pillar, index) => (
              <div key={pillar.number} className="flex items-center space-x-10 group">
                {/* Icon and Number */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className={`w-24 h-24 bg-gradient-to-r ${pillar.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-6`}>
                    <pillar.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-700">{pillar.number}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white border-2 border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className={`${pillar.textColor} mb-8 font-semibold text-lg`}>
                    "{pillar.subtitle}"
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {pillar.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={`flex items-start space-x-4 p-5 bg-gradient-to-r ${pillar.bgColor} to-transparent rounded-xl border ${pillar.borderColor}`}>
                        <div className={`w-6 h-6 ${pillar.iconBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <CheckCircle className={`w-4 h-4 ${pillar.textColor}`} />
                        </div>
                        <span className="text-base text-gray-700 font-medium leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flow Steps - Mobile/Small Tablet */}
        <div className="lg:hidden space-y-8 md:space-y-10 mb-16 md:mb-20">
          {pillars.map((pillar, index) => (
            <div key={pillar.number} className="relative">
              <div className="flex items-start space-x-5 md:space-x-8">
                {/* Left Side - Icon and Number */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${pillar.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-4`}>
                    <pillar.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm md:text-lg font-bold text-gray-700">{pillar.number}</span>
                  </div>
                  
                  {/* Vertical Line (except for last item) */}
                  {index < pillars.length - 1 && (
                    <div className="w-1 h-16 md:h-20 bg-gradient-to-b from-primary to-secondary rounded-full mt-6"></div>
                  )}
                </div>
                
                {/* Right Side - Content */}
                <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg min-h-[300px] md:min-h-[320px] flex flex-col">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className={`${pillar.textColor} mb-6 font-semibold text-sm md:text-base`}>
                    "{pillar.subtitle}"
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 md:space-y-4 flex-grow">
                    {pillar.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={`flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-gradient-to-r ${pillar.bgColor} to-transparent rounded-xl border ${pillar.borderColor}`}>
                        <div className={`w-5 h-5 md:w-6 md:h-6 ${pillar.iconBg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <CheckCircle className={`w-3 h-3 md:w-4 md:h-4 ${pillar.textColor}`} />
                        </div>
                        <span className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Result - Enhanced responsiveness */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="relative bg-gradient-to-r from-primary to-secondary rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center text-white shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8">
              <TrendingUp className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
            </div>
            <h4 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 leading-tight">
              RESULTADO: INTEGRAÇÃO SISTÊMICA
            </h4>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl font-medium max-w-4xl mx-auto leading-relaxed opacity-95">
              Os 3 pilares trabalham em perfeita sinergia para criar um ecossistema completo 
              de crescimento sustentável, previsível e escalável para sua prática médica.
            </p>
          </div>
        </div>

        {/* Vantagens Exclusivas - Enhanced grid and spacing */}
        <div className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 xl:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-10 lg:mb-12">
            Vantagens Exclusivas do Sistema{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">M.E.D.D.</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                title: "Saia da dependência dos convênios",
                description: "Construa uma base sólida de pacientes particulares fiéis"
              },
              {
                title: "Aumente seu ticket médio em 40-60%",
                description: "Posicionamento premium justifica preços mais altos"
              },
              {
                title: "Pare de competir por preço",
                description: "Torne-se referência única na sua especialidade"
              },
              {
                title: "Agenda lotada de pacientes qualificados",
                description: "Atraia apenas quem valoriza seu trabalho especializado"
              },
              {
                title: "Reconhecimento profissional",
                description: "Seja visto como autoridade pelos seus pares e mídia"
              },
              {
                title: "Sistema previsível e escalável",
                description: "Resultados consistentes que crescem mês após mês"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 md:space-x-4 group p-2 md:p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-secondary/20 rounded-full flex items-center justify-center mt-1 group-hover:bg-secondary/30 transition-colors duration-300">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;