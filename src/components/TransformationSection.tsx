import { ArrowRight, X, Check, Sparkles } from 'lucide-react';

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
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold font-serif text-foreground mb-8 leading-tight">
            A Diferença Entre <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ter um Sistema e Não Ter
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja a transformação real que acontece quando você implementa 
            uma estratégia estruturada de crescimento.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Before */}
          <div className="lg:col-span-5">
            <div className="bg-muted border border-border/50 rounded-3xl p-8">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-muted-foreground/10 rounded-full flex items-center justify-center">
                  <X className="w-8 h-8 text-muted-foreground" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-muted-foreground mb-8 text-center">
                Situação Atual
              </h3>
              
              <div className="space-y-6">
                {beforeItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center mt-1">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <span className="text-muted-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-premium">
                <ArrowRight className="w-8 h-8 text-primary-foreground animate-pulse" />
              </div>
              <div className="text-center">
                <div className="flex items-center space-x-1 text-primary font-bold text-lg">
                  <Sparkles className="w-5 h-5" />
                  <span>TRANSFORMAÇÃO</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Com M.E.D.D.</p>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-accent border-2 border-accent/30 rounded-3xl p-8 text-accent-foreground">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-accent-foreground/10 rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-accent-foreground" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-8 text-center">
                  Situação Transformada
                </h3>
                
                <div className="space-y-6">
                  {afterItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent-foreground/20 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-accent-foreground" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border/50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">Pronto Para Sua Transformação?</h4>
            <p className="text-lg text-muted-foreground mb-6">
              Descubra como centenas de médicos já fizeram essa mudança com nossa metodologia comprovada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-premium transition-all">
                Ver Casos de Sucesso
              </button>
              <button className="border-2 border-border hover:bg-muted/50 px-8 py-3 rounded-full font-semibold transition-all">
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;