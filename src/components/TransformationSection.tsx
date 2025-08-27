import { ArrowRight, X, Check } from 'lucide-react';

const TransformationSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            A Diferença Entre Ter um Sistema e Não Ter
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Antes */}
          <div className="bg-muted p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-muted-foreground mb-6 text-center">
              Situação Atual
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <X className="w-6 h-6 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground">Agenda dependente de convênios</span>
              </div>
              <div className="flex items-center space-x-3">
                <X className="w-6 h-6 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground">Renda imprevisível mês a mês</span>
              </div>
              <div className="flex items-center space-x-3">
                <X className="w-6 h-6 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground">Pouco reconhecimento como especialista</span>
              </div>
              <div className="flex items-center space-x-3">
                <X className="w-6 h-6 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground">Competição por preço</span>
              </div>
              <div className="flex items-center space-x-3">
                <X className="w-6 h-6 text-destructive flex-shrink-0" />
                <span className="text-muted-foreground">Dependência de indicações externas</span>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex flex-col items-center">
              <ArrowRight className="w-12 h-12 text-secondary mb-4 animate-pulse" />
              <span className="text-secondary font-semibold">TRANSFORMAÇÃO</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          {/* Depois */}
          <div className="bg-gradient-secondary p-8 rounded-xl text-secondary-foreground">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Situação Transformada
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-secondary-foreground flex-shrink-0" />
                  <span>Fluxo constante de pacientes particulares</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-secondary-foreground flex-shrink-0" />
                  <span>Receita previsível e crescente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-secondary-foreground flex-shrink-0" />
                  <span>Reconhecimento como autoridade na especialidade</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-secondary-foreground flex-shrink-0" />
                  <span>Valorização do seu conhecimento</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-secondary-foreground flex-shrink-0" />
                  <span>Sistema de atração automatizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-secondary-foreground flex-shrink-0" />
                  <span>Independência completa dos convênios</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;