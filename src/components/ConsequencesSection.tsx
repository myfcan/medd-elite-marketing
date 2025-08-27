import { X, Sparkles, TrendingDown, Calendar, DollarSign, Users, Clock, Target, ArrowRight } from 'lucide-react';

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
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            A diferença entre{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              ter um sistema
            </span>{" "}
            e{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">
              não ter
            </span>
          </h2>
        </div>

        {/* Comparison Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20 relative">
          {/* Arrow between columns */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Sem Sistema */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-sm border border-red-200/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative">
                  <X className="w-10 h-10 text-red-600" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-red-800">Sem Sistema</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  { 
                    icon: TrendingDown, 
                    title: "Renda Imprevisível", 
                    description: "Dependente de fatores externos",
                    color: "text-red-600",
                    bgColor: "bg-red-50/50"
                  },
                  { 
                    icon: Calendar, 
                    title: "Agenda Vazia", 
                    description: "Esperando indicações chegarem",
                    color: "text-red-600",
                    bgColor: "bg-red-50/50"
                  },
                  { 
                    icon: DollarSign, 
                    title: "Preços Baixos", 
                    description: "Competindo por convênios",
                    color: "text-red-600",
                    bgColor: "bg-red-50/50"
                  }
                ].map((item, index) => (
                  <div key={index} className={`p-6 rounded-2xl ${item.bgColor} hover:bg-red-100/50 transition-all duration-300 border-l-4 border-red-300`}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-red-800 mb-2">{item.title}</h4>
                        <p className="text-gray-700 font-medium">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Com M.E.D.D. */}
          <div className="group relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
              </div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Com M.E.D.D.</h3>
                </div>
                
                <div className="space-y-6">
                  {[
                    { 
                      icon: TrendingDown, 
                      title: "Renda Previsível", 
                      description: "Sistema automatizado de atração",
                      gradient: "from-emerald-400 to-green-500"
                    },
                    { 
                      icon: Users, 
                      title: "Agenda Lotada", 
                      description: "Fluxo constante de pacientes",
                      gradient: "from-blue-400 to-cyan-500"
                    },
                    { 
                      icon: Target, 
                      title: "Preços Premium", 
                      description: "Autoridade reconhecida no mercado",
                      gradient: "from-purple-400 to-pink-500"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 border-l-4 border-white/30">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                          <p className="text-white/80 font-medium">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsequencesSection;