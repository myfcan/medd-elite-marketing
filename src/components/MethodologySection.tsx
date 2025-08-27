import { Award, Target, Zap, CheckCircle } from 'lucide-react';

const MethodologySection = () => {
  return (
    <section id="metodologia" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-4xl font-bold text-primary mb-4">
            M.E.D.D.
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            O Sistema Completo Para Médicos
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            Desenvolvemos um método específico que integra 3 pilares fundamentais 
            para transformar médicos em autoridades digitais com fluxo previsível de pacientes.
          </p>
          <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 inline-block">
            <p className="text-lg font-semibold text-foreground">
              <strong>Não é marketing tradicional.</strong> É um sistema integrado desenvolvido 
              exclusivamente para a realidade médica.
            </p>
          </div>
        </div>

        {/* 3 Pilares em Triângulo */}
        <div className="relative mb-16">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Pilar 1 */}
            <div className="bg-card border-2 border-primary/20 rounded-xl p-8 text-center hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary rounded-full">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                ARQUITETURA DE AUTORIDADE
              </h3>
              <p className="text-muted-foreground mb-6">
                "Ser reconhecido como referência na sua especialidade"
              </p>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Arquitetura de marca pessoal profissional</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Posicionamento estratégico diferenciado</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Comunicação de valor consistente</span>
                </li>
              </ul>
            </div>

            {/* Pilar 2 */}
            <div className="bg-card border-2 border-secondary/20 rounded-xl p-8 text-center hover:border-secondary/40 transition-all duration-300 hover:shadow-glow">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-secondary rounded-full">
                  <Target className="w-8 h-8 text-secondary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">
                SISTEMA DE ATRAÇÃO SELETIVA
              </h3>
              <p className="text-muted-foreground mb-6">
                "Atraindo pacientes certos, não curiosos de convênio"
              </p>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Conteúdo estratégico (posts, stories, roteiros)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Funil validado de atração e conversão</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Tráfego pago como acelerador</span>
                </li>
              </ul>
            </div>

            {/* Pilar 3 */}
            <div className="bg-card border-2 border-accent/20 rounded-xl p-8 text-center hover:border-accent/40 transition-all duration-300 hover:shadow-elegant">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-accent rounded-full">
                  <Zap className="w-8 h-8 text-accent-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-accent mb-4">
                AUTOMAÇÃO INTELIGENTE
              </h3>
              <p className="text-muted-foreground mb-6">
                "Sistema que trabalha 24h gerando previsibilidade"
              </p>
              <ul className="space-y-3 text-left">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Qualificação de leads via IA</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Engajamento inteligente 24/7</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Pós-consulta automatizado para fidelização</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Integração Central */}
          <div className="mt-12 bg-gradient-primary p-8 rounded-xl text-center text-primary-foreground">
            <h4 className="text-2xl font-bold mb-4">INTEGRAÇÃO SISTÊMICA</h4>
            <p className="text-lg">
              Os 3 pilares trabalham em sinergia para criar um sistema completo 
              de crescimento sustentável e previsível
            </p>
          </div>
        </div>

        {/* Vantagens */}
        <div className="bg-muted/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Vantagens do Sistema M.E.D.D.</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Saia da dependência dos convênios</h4>
                <p className="text-sm text-muted-foreground">Construa base sólida de pacientes particulares</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Aumente seu ticket médio em 40-60%</h4>
                <p className="text-sm text-muted-foreground">Posicionamento premium justifica preços maiores</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Pare de competir por preço</h4>
                <p className="text-sm text-muted-foreground">Torne-se referência na sua especialidade</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Agenda lotada de pacientes qualificados</h4>
                <p className="text-sm text-muted-foreground">Atraia quem realmente valoriza seu trabalho</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Reconhecimento profissional</h4>
                <p className="text-sm text-muted-foreground">Seja visto como autoridade pelos seus pares</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Sistema previsível</h4>
                <p className="text-sm text-muted-foreground">Resultados consistentes mês após mês</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;