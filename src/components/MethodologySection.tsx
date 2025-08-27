import { Award, Target, Zap, CheckCircle, Users, Code, TrendingUp } from 'lucide-react';

const MethodologySection = () => {
  return (
    <section id="metodologia" className="py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-3xl mb-8">
            <span className="text-2xl font-bold font-serif text-primary-foreground">M.E.D.D</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-serif text-foreground mb-8 leading-tight">
            Metodologia <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              M.E.D.D.
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed mb-8">
            Um sistema completo e integrado desenvolvido especificamente para médicos 
            que desejam construir autoridade digital e fluxo previsível de pacientes particulares.
          </p>
          
          <div className="bg-accent/10 border-2 border-accent/20 rounded-3xl p-8 max-w-3xl mx-auto">
            <p className="text-lg font-semibold text-foreground">
              <strong>Não é marketing tradicional.</strong> É um sistema integrado desenvolvido 
              exclusivamente para a realidade médica brasileira.
            </p>
          </div>
        </div>

        {/* 3 Pilares */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Pilar 1 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl blur-xl group-hover:opacity-10 transition-opacity"></div>
            <div className="relative bg-card border-2 border-primary/20 rounded-3xl p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-premium">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-premium">
                  <Award className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                ARQUITETURA DE AUTORIDADE
              </h3>
              
              <p className="text-accent text-center mb-8 font-semibold text-lg">
                "Ser reconhecido como referência na sua especialidade"
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Arquitetura de marca pessoal profissional</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Posicionamento estratégico diferenciado</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Comunicação de valor consistente</span>
                </div>
              </div>
              
              <div className="border-t border-border/50 pt-6">
                <h4 className="font-bold mb-3 text-primary">EQUIPE DEDICADA:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Estrategista de Marca</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Designer Especializado</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Social Media Médico</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Copywriter Médico</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-accent opacity-5 rounded-3xl blur-xl group-hover:opacity-10 transition-opacity"></div>
            <div className="relative bg-card border-2 border-accent/20 rounded-3xl p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-premium">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-premium">
                  <Target className="w-10 h-10 text-accent-foreground" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                SISTEMA DE ATRAÇÃO SELETIVA
              </h3>
              
              <p className="text-primary text-center mb-8 font-semibold text-lg">
                "Atraindo pacientes certos, não curiosos de convênio"
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Conteúdo estratégico (posts, stories, roteiros)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Funil validado de atração e conversão</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Tráfego pago como acelerador</span>
                </div>
              </div>
              
              <div className="border-t border-border/50 pt-6">
                <h4 className="font-bold mb-3 text-accent">EQUIPE DEDICADA:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Code className="w-4 h-4" />
                    <span>Desenvolvedor Web</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Gestor de Tráfego</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Consultor Estratégico</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4" />
                    <span>Analista de Performance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-secondary opacity-5 rounded-3xl blur-xl group-hover:opacity-10 transition-opacity"></div>
            <div className="relative bg-card border-2 border-secondary/20 rounded-3xl p-8 hover:border-secondary/40 transition-all duration-300 hover:shadow-premium">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-secondary rounded-2xl flex items-center justify-center shadow-premium">
                  <Zap className="w-10 h-10 text-secondary-foreground" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                AUTOMAÇÃO INTELIGENTE
              </h3>
              
              <p className="text-secondary text-center mb-8 font-semibold text-lg">
                "Sistema que trabalha 24h gerando previsibilidade"
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Qualificação de leads via IA</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Engajamento inteligente 24/7</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                  <span className="font-medium">Pós-consulta automatizado para fidelização</span>
                </div>
              </div>
              
              <div className="border-t border-border/50 pt-6">
                <h4 className="font-bold mb-3 text-secondary">EQUIPE DEDICADA:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Especialista em IA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Analista de Dados</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4" />
                    <span>Dashboard Analítico</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Suporte Técnico</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Center */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-primary rounded-3xl p-12 text-center text-primary-foreground">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <Zap className="w-12 h-12" />
              </div>
            </div>
            <h4 className="text-3xl lg:text-4xl font-bold font-serif mb-6">INTEGRAÇÃO SISTÊMICA</h4>
            <p className="text-xl font-medium max-w-4xl mx-auto leading-relaxed">
              Os 3 pilares trabalham em perfeita sinergia para criar um ecossistema completo 
              de crescimento sustentável, previsível e escalável para sua prática médica.
            </p>
          </div>
        </div>

        {/* Vantagens */}
        <div className="bg-muted/30 border border-border/50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold font-serif text-center mb-12">
            Vantagens Exclusivas do Sistema <span className="text-primary">M.E.D.D.</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Saia da dependência dos convênios",
                description: "Construa uma base sólida de pacientes particulares fiéis"
              },
              {
                title: "Aumente seu ticket médio em 40-60%",
                description: "Posicionamento premium justifica preços mais altos"
              },
              {
                title: "Pare de competir por preço",
                description: "Torne-se referência única na sua especialidade"
              },
              {
                title: "Agenda lotada de pacientes qualificados",
                description: "Atraia apenas quem valoriza seu trabalho especializado"
              },
              {
                title: "Reconhecimento profissional",
                description: "Seja visto como autoridade pelos seus pares e mídia"
              },
              {
                title: "Sistema previsível e escalável",
                description: "Resultados consistentes que crescem mês após mês"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mt-1 group-hover:bg-accent/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;