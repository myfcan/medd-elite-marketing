import { ArrowRight, X, TrendingDown, Calendar, DollarSign, TrendingUp, CalendarCheck, Crown, Sparkles, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TransformationSection = () => {
  const beforeItems = [
    'Agenda dependente de convênios',
    'Renda imprevisível mês a mês',
    'Pouco reconhecimento como especialista',
    'Competição constante por preço',
    'Dependência de indicações externas'
  ];

  const afterItems = [
    'Fluxo constante de pacientes particulares',
    'Receita previsível e crescente',
    'Reconhecimento como autoridade na especialidade',
    'Valorização do seu conhecimento',
    'Sistema de atração automatizado',
    'Independência completa dos convênios'
  ];

  return (
    <section className="py-6 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            A diferença entre{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ter um sistema e não ter
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja a transformação que acontece quando você implementa o método M.E.D.D.
          </p>
        </div>

        {/* Modern Comparison Layout */}
        <div className="relative mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            {/* Without System - Enhanced */}
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <X className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Sem Sistema</h3>
                  <p className="text-sm text-secondary">Deixando tudo para o acaso</p>
                </div>

                {/* Problems */}
                <div className="space-y-4">
                  {[
                    { icon: TrendingDown, title: "Renda Imprevisível", desc: "Dependente de fatores externos", color: "red" },
                    { icon: Calendar, title: "Agenda Vazia", desc: "Esperando indicações chegarem", color: "orange" },
                    { icon: DollarSign, title: "Preços Baixos", desc: "Competindo por convênios", color: "amber" }
                  ].map((item, index) => (
                    <div key={index} className="group/item bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-5 border border-primary/10 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-md">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                          <p className="text-sm text-secondary/80">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Status */}
                <div className="mt-6 p-4 bg-primary/5 rounded-2xl border border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-primary">Status: Instabilidade</span>
                  </div>
                </div>
              </div>
            </div>

            {/* With M.E.D.D. - Enhanced */}
            <div className="group relative lg:mt-0 mt-8">
              {/* Premium glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                {/* Header */}
                <div className="text-center mb-8 relative z-10">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 shadow-xl">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-bold">✓</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    Com M.E.D.D.
                  </h3>
                  <p className="text-sm text-primary">Sistema completo de atração</p>
                </div>

                {/* Solutions */}
                <div className="space-y-4 relative z-10">
                  {[
                    { icon: TrendingUp, title: "Renda Previsível", desc: "Sistema automatizado de atração", gradient: "from-green-500 to-emerald-500" },
                    { icon: CalendarCheck, title: "Agenda Lotada", desc: "Fluxo constante de pacientes", gradient: "from-blue-500 to-cyan-500" },
                    { icon: Crown, title: "Preços Premium", desc: "Autoridade reconhecida no mercado", gradient: "from-purple-500 to-pink-500" }
                  ].map((item, index) => (
                    <div key={index} className="group/item bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-primary/20 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-md`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Status */}
                <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/30 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-primary">Status: Crescimento Sustentável</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Center Arrow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-70 animate-pulse scale-125"></div>
              {/* Main button */}
              <div className="relative w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-white">
                <ArrowRight className="w-8 h-8 text-white animate-pulse" />
              </div>
            </div>
          </div>

          {/* Mobile transformation indicator */}
          <div className="flex justify-center lg:hidden my-8">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-xl rotate-90">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TransformationSection;