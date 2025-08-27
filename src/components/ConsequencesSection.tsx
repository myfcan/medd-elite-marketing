import { TrendingUp, AlertCircle, Clock, Target } from 'lucide-react';

const ConsequencesSection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold font-serif text-foreground mb-8 leading-tight">
            O Cenário Que Se Desenha <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Para Os Próximos 5 Anos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As mudanças no mercado médico estão acontecendo rapidamente. 
            Quem não se adaptar ficará para trás.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Current Scenario */}
          <div className="bg-muted/50 border border-border/50 rounded-3xl p-8">
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 bg-muted-foreground/10 rounded-2xl flex items-center justify-center">
                <AlertCircle className="w-7 h-7 text-muted-foreground" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center text-muted-foreground">Cenário Atual</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                <span>Saturação crescente do mercado médico</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                <span>Redução constante dos repasses de convênios</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                <span>Concorrência com profissionais mais jovens e conectados</span>
              </li>
            </ul>
          </div>

          {/* Market Trend - Featured */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-primary border-2 border-primary/30 rounded-3xl p-8 text-primary-foreground">
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 bg-primary-foreground/20 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-8 text-center">Tendência do Mercado</h3>
              
              <div className="space-y-8">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Target className="w-6 h-6" />
                    <div className="text-4xl font-bold">↗️ 45%</div>
                  </div>
                  <p className="text-sm opacity-90 font-medium">Crescimento da medicina particular</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <AlertCircle className="w-6 h-6" />
                    <div className="text-4xl font-bold">↘️ 23%</div>
                  </div>
                  <p className="text-sm opacity-90 font-medium">Redução nos repasses de convênios</p>
                </div>
              </div>
            </div>
          </div>

          {/* Future Impact */}
          <div className="bg-destructive/5 border-2 border-destructive/20 rounded-3xl p-8">
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-destructive" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center text-destructive">Impacto Futuro</h3>
            <ul className="space-y-4 text-foreground">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <span>Maior competitividade entre profissionais</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <span>Necessidade urgente de diferenciação</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                <span>Pressão crescente por resultados e eficiência</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Urgency Call */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-secondary opacity-10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-secondary rounded-3xl p-12 text-center text-secondary-foreground">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-secondary-foreground/10 rounded-full flex items-center justify-center">
                <Clock className="w-10 h-10" />
              </div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold font-serif mb-6">Chamada de Urgência</h3>
            <p className="text-xl font-medium max-w-5xl mx-auto leading-relaxed">
              Médicos que não desenvolvem autoridade digital e sistemas de atração próprios 
              ficam cada vez mais vulneráveis às mudanças do mercado e correm o risco de 
              serem superados pela concorrência nos próximos anos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsequencesSection;