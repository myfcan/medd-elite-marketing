import { Award, Target, Zap, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';

const MethodologySection = () => {
  const pillars = [
    {
      number: 1,
      icon: Award,
      title: "Arquitetura de Autoridade",
      subtitle: "Ser reconhecido como referência na sua especialidade",
      gradient: "from-primary to-primary/80",
      color: "secondary",
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
      color: "primary",
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
      color: "gray-600",
      features: [
        "Qualificação de leads via IA",
        "Engajamento inteligente 24/7",
        "Pós-consulta automatizado para fidelização"
      ]
    }
  ];

  return (
    <section id="metodologia" className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl mb-8 shadow-lg">
            <span className="text-2xl font-bold text-white">M.E.D.D</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Metodologia{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              M.E.D.D.
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed mb-8">
            Um sistema completo e integrado desenvolvido especificamente para médicos 
            que desejam construir autoridade digital e fluxo previsível de pacientes particulares.
          </p>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-6 max-w-3xl mx-auto shadow-sm">
            <p className="text-lg font-semibold text-gray-900">
              <strong>Não é marketing tradicional.</strong> É um sistema integrado desenvolvido 
              exclusivamente para a realidade médica brasileira.
            </p>
          </div>
        </div>

        {/* Flow Steps - Desktop */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-gray-500 rounded-full transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-3 gap-8 relative z-10">
              {pillars.map((pillar, index) => (
                <div key={pillar.number} className="flex flex-col items-center">
                  {/* Step Card */}
                  <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-full mb-6">
                    {/* Icon Circle */}
                    <div className={`w-20 h-20 bg-gradient-to-r ${pillar.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <pillar.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Step Number */}
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-gray-700">{pillar.number}</span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 text-center leading-tight">
                      {pillar.title}
                    </h3>
                    
                    <p className={`text-${pillar.color} text-center mb-6 font-semibold text-sm`}>
                      "{pillar.subtitle}"
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-3">
                      {pillar.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className={`flex items-start space-x-3 p-3 bg-gradient-to-r from-${pillar.color}/5 to-transparent rounded-xl border border-${pillar.color}/10`}>
                          <div className={`w-5 h-5 bg-${pillar.color}/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <CheckCircle className={`w-3 h-3 text-${pillar.color}`} />
                          </div>
                          <span className="text-sm text-gray-700 font-medium leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Arrow (except for last item) */}
                  {index < pillars.length - 1 && (
                    <div className="absolute top-1/2 transform -translate-y-1/2" 
                         style={{ left: `${(index + 1) * 33.33 - 2}%` }}>
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

        {/* Flow Steps - Mobile/Tablet */}
        <div className="lg:hidden space-y-8 mb-16">
          {pillars.map((pillar, index) => (
            <div key={pillar.number} className="relative">
              <div className="flex items-start space-x-6">
                {/* Left Side - Icon and Number */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${pillar.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-3`}>
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-700">{pillar.number}</span>
                  </div>
                  
                  {/* Vertical Line (except for last item) */}
                  {index < pillars.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-primary to-secondary rounded-full mt-4"></div>
                  )}
                </div>
                
                {/* Right Side - Content */}
                <div className="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className={`text-${pillar.color} mb-4 font-semibold text-sm`}>
                    "{pillar.subtitle}"
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {pillar.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={`flex items-start space-x-3 p-3 bg-gradient-to-r from-${pillar.color}/5 to-transparent rounded-xl border border-${pillar.color}/10`}>
                        <div className={`w-5 h-5 bg-${pillar.color}/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <CheckCircle className={`w-3 h-3 text-${pillar.color}`} />
                        </div>
                        <span className="text-sm text-gray-700 font-medium leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Result - Flow Style */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
            <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <TrendingUp className="w-12 h-12" />
            </div>
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">RESULTADO: INTEGRAÇÃO SISTÊMICA</h4>
            <p className="text-lg sm:text-xl font-medium max-w-4xl mx-auto leading-relaxed opacity-95">
              Os 3 pilares trabalham em perfeita sinergia para criar um ecossistema completo 
              de crescimento sustentável, previsível e escalável para sua prática médica.
            </p>
          </div>
        </div>

        {/* Vantagens Exclusivas */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Vantagens Exclusivas do Sistema{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">M.E.D.D.</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
              <div key={index} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center mt-1 group-hover:bg-secondary/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
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