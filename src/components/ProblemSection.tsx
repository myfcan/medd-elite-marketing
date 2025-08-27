import { UserX, TrendingDown, AlertTriangle, BarChart3 } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section id="sobre" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-2xl mb-8">
            <UserX className="w-8 h-8 text-destructive" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-serif text-foreground mb-8 leading-tight">
            Por Que Médicos Competentes <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Continuam Dependentes de Convênios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            Mesmo com excelência técnica, a maioria dos médicos não consegue construir 
            autoridade suficiente para atrair pacientes particulares consistentemente.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group relative bg-card border border-border/50 rounded-3xl p-8 hover:shadow-card transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center">
                  <TrendingDown className="w-7 h-7 text-destructive" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Ausência de Estratégia</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Falta de marca pessoal estruturada para se destacar em um mercado cada vez mais competitivo
              </p>
            </div>
          </div>

          <div className="group relative bg-card border border-border/50 rounded-3xl p-8 hover:shadow-card transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center">
                  <AlertTriangle className="w-7 h-7 text-destructive" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Dependência de Indicações</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Indicações não controladas limitam o crescimento sustentável da prática médica
              </p>
            </div>
          </div>

          <div className="group relative bg-card border border-border/50 rounded-3xl p-8 hover:shadow-card transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-7 h-7 text-destructive" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Sistema de Atração</h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Ausência de sistema para atrair e converter pacientes premium consistentemente
              </p>
            </div>
          </div>
        </div>

        {/* Key Statistic */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl blur-xl"></div>
          <div className="relative bg-card border-2 border-primary/20 rounded-3xl p-12 text-center">
            <div className="mb-6">
              <div className="text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                87%
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                dos médicos faturam menos de R$ 50k/mês
              </h3>
              <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                A falta de posicionamento estratégico é o principal fator que limita 
                o potencial de crescimento da maioria dos profissionais médicos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;