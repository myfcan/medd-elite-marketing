import { UserX, TrendingDown, AlertTriangle } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary rounded-full">
              <UserX className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Por Que Médicos Competentes Continuam Dependentes de Convênios
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Mesmo com excelência técnica, a maioria dos médicos não consegue construir 
            autoridade suficiente para atrair pacientes particulares consistentemente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-card rounded-xl shadow-sm">
            <div className="flex justify-center mb-4">
              <TrendingDown className="w-12 h-12 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Ausência de estratégia</h3>
            <p className="text-muted-foreground">
              Falta de marca pessoal estruturada para se destacar no mercado
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-xl shadow-sm">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="w-12 h-12 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Dependência de indicações</h3>
            <p className="text-muted-foreground">
              Indicações não controladas limitam o crescimento sustentável
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-xl shadow-sm">
            <div className="flex justify-center mb-4">
              <UserX className="w-12 h-12 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Sistema de atração</h3>
            <p className="text-muted-foreground">
              Ausência de sistema para atrair e converter pacientes premium
            </p>
          </div>
        </div>

        <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-8 text-center">
          <div className="text-5xl font-bold text-secondary mb-2">87%</div>
          <p className="text-lg text-foreground font-medium">
            dos médicos faturam menos de R$ 50k/mês por falta de posicionamento estratégico
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;