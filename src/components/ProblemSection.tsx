import { TrendingDown, AlertTriangle, Zap } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section id="sobre" className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
      {/* Background with gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-soft">
            <AlertTriangle className="w-5 h-5" />
            Realidade do Mercado Médico
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
            Por que médicos competentes continuam dependentes de convênios?
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Mesmo com excelência técnica, a maioria dos médicos não consegue construir 
            autoridade suficiente para atrair pacientes particulares consistentemente.
          </p>
        </div>

        {/* Desktop Layout: Two cards on top, one below */}
        <div className="space-y-8">
          {/* Top Row - Two cards side by side */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Card 1 - Ausência de Estratégia */}
            <div className="group relative">
              <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 h-full overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-large hover:shadow-primary/20">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                
                {/* Icon */}
                <div className="relative w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-medium">
                  <TrendingDown className="w-8 h-8 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">Ausência de Estratégia</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Falta de marca pessoal para se destacar em um mercado.
                </p>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>

            {/* Card 2 - Dependência de Indicações */}
            <div className="group relative">
              <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 h-full overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-large hover:shadow-secondary/20">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-medium">
                  <AlertTriangle className="w-8 h-8 text-secondary-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">Dependência de Indicações</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Indicações limitam o crescimento e criam vulnerabilidade no negócio médico
                </p>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Full width card */}
          <div className="group relative">
            <div className="relative bg-gradient-to-r from-card/90 to-primary/5 backdrop-blur-sm border border-border rounded-3xl p-10 overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-large hover:shadow-primary/25">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 left-6 w-3 h-3 bg-primary rounded-full"></div>
                <div className="absolute top-12 left-16 w-2 h-2 bg-secondary rounded-full"></div>
                <div className="absolute top-16 left-10 w-2.5 h-2.5 bg-primary/80 rounded-full"></div>
                <div className="absolute bottom-6 right-6 w-3 h-3 bg-primary rounded-full"></div>
                <div className="absolute bottom-12 right-16 w-2 h-2 bg-secondary rounded-full"></div>
              </div>
              
              <div className="relative flex items-center gap-10">
                {/* Icon */}
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-primary via-primary to-secondary rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-large">
                  <Zap className="w-12 h-12 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-4xl font-bold text-foreground leading-tight">Falta de Automação Inteligente</h3>
                    <div className="px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-semibold shadow-soft">Crítico</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-xl max-w-4xl">
                    Falta de automação inteligente e uso de IA para escalar.
                  </p>
                </div>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{padding: '2px'}}>
                <div className="w-full h-full bg-card rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;