import { TrendingUp, AlertTriangle, Clock, Target, ArrowUp, ArrowDown, BarChart3, TrendingDown } from 'lucide-react';

const ConsequencesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-slate-50/50 to-primary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
            O cenário que se desenha para{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              os próximos 5 anos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entenda as tendências que estão moldando o futuro da medicina
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Current Scenario - Enhanced */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white/80 backdrop-blur-sm border border-orange-200/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              
              {/* Icon with enhanced styling */}
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl flex items-center justify-center mb-4 shadow-lg">
                  <AlertTriangle className="w-10 h-10 text-orange-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-orange-800 mb-8 flex items-center gap-3">
                Cenário Atual
                <TrendingDown className="w-6 h-6 text-orange-600" />
              </h3>
              
              <div className="space-y-6">
                {[
                  { icon: BarChart3, text: "Saturação crescente do mercado médico", color: "text-orange-600" },
                  { icon: TrendingDown, text: "Redução constante dos repasses de convênios", color: "text-red-600" },
                  { icon: Target, text: "Concorrência com profissionais mais jovens", color: "text-amber-600" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl bg-orange-50/50 hover:bg-orange-100/50 transition-all duration-300 hover:translate-x-2">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-gray-800 font-medium leading-relaxed flex-1">{item.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Status indicator */}
              <div className="mt-8 p-4 bg-orange-100/50 rounded-2xl border border-orange-200/50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-orange-800">Status: Situação Crítica</span>
                </div>
              </div>
            </div>
          </div>

          {/* Market Trend - Enhanced */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
              </div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 shadow-xl">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                  Tendência do Mercado
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </h3>
                
                <div className="space-y-8">
                  {[
                    { 
                      label: "+45% ao ano", 
                      value: "", 
                      trend: "up", 
                      description: "A demanda por consultas privadas cresce rápido — mais pacientes querem médicos de qualidade.",
                      icon: ArrowUp,
                      gradient: "from-green-400 to-emerald-500"
                    },
                    { 
                      label: "–23% de repasse contínuo", 
                      value: "", 
                      trend: "down", 
                      description: "Os convênios estão pagando cada vez menos para os médicos",
                      icon: ArrowDown,
                      gradient: "from-red-400 to-orange-500"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold opacity-90">{item.label}</span>
                        <div className={`w-8 h-8 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center`}>
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-4xl font-bold">
                          {item.trend === 'up' ? '↗️' : '↘️'} {item.value}
                        </span>
                      </div>
                      <p className="text-sm opacity-75 font-medium">{item.description}</p>
                      
                      {/* Progress bar */}
                      <div className="mt-4 w-full bg-white/20 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${item.gradient} rounded-full transition-all duration-1000 hover:animate-pulse`}
                          style={{ 
                            width: item.trend === 'up' ? '75%' : '40%',
                            animationDelay: `${index * 0.5}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Call to action */}
                <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold">Oportunidade de Crescimento</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom insight section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-primary/20 shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground">Momento de Decisão</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Este é o momento crucial para médicos que desejam se posicionar estrategicamente no mercado. 
              <strong className="text-primary"> A transição já começou</strong>, e quem não se adaptar ficará para trás.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsequencesSection;