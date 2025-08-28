import { AlertTriangle, TrendingUp, TrendingDown, BarChart3, Users, ArrowUp, ArrowDown } from 'lucide-react';

const FutureScenarioSection = () => {
  return (
    <section className="py-6 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            O cenário que se desenha para{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              os próximos 5 anos
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entenda as tendências que estão moldando o futuro da medicina
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Cenário Atual */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
              
              {/* Main Container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-primary/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center shadow-lg">
                    <AlertTriangle className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Cenário Atual</h3>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary mt-2"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-primary">Saturação crescente do mercado médico</h4>
                    </div>
                  </div>

                  <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                        <TrendingDown className="w-5 h-5 text-secondary" />
                      </div>
                      <h4 className="font-semibold text-secondary">Redução constante dos repasses de convênios</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tendência do Mercado */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
              
              {/* Main Container */}
              <div className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-primary/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Tendência do Mercado
                    </h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Positive Trend */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-md">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-3xl font-bold text-green-700">+45%</h4>
                          <p className="text-sm text-green-600">ao ano</p>
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <ArrowUp className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-green-800 font-medium">Mais pacientes buscam consultas particulares</p>
                    <div className="w-full bg-green-200 rounded-full h-2 mt-3">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>

                  {/* Negative Trend */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200/50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                          <TrendingDown className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-3xl font-bold text-red-700">-23%</h4>
                          <p className="text-sm text-red-600">de repasse contínuo</p>
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                        <ArrowDown className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <p className="text-red-800 font-medium">Os convênios estão pagando cada vez menos para os médicos</p>
                    <div className="w-full bg-red-200 rounded-full h-2 mt-3">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full w-1/4"></div>
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

export default FutureScenarioSection;