import { TrendingUp, AlertCircle, Clock } from 'lucide-react';

const ConsequencesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            O Cenário Que Se Desenha Para Os Próximos 5 Anos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-muted/50 p-8 rounded-xl">
            <div className="flex justify-center mb-4">
              <TrendingUp className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Cenário Atual</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Saturação crescente do mercado médico</li>
              <li>• Redução constante dos repasses de convênios</li>
              <li>• Concorrência com profissionais mais jovens</li>
            </ul>
          </div>

          <div className="bg-gradient-primary p-8 rounded-xl text-white">
            <div className="flex justify-center mb-4">
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Tendência do Mercado</h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">↗️ 45%</div>
                <p className="text-sm">Crescimento da medicina particular</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">↘️ 23%</div>
                <p className="text-sm">Redução nos repasses</p>
              </div>
            </div>
          </div>

          <div className="bg-destructive/10 border border-destructive/20 p-8 rounded-xl">
            <div className="flex justify-center mb-4">
              <AlertCircle className="w-12 h-12 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center text-destructive">Impacto Futuro</h3>
            <ul className="space-y-3 text-foreground">
              <li>• Maior competitividade</li>
              <li>• Necessidade de diferenciação</li>
              <li>• Pressão por resultados</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground p-8 rounded-xl text-center">
          <Clock className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Chamada de Urgência</h3>
          <p className="text-lg max-w-4xl mx-auto">
            Médicos que não desenvolvem autoridade digital e sistemas de atração próprios 
            ficam cada vez mais vulneráveis às mudanças do mercado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsequencesSection;