import { CheckCircle, TrendingUp, Target, Users, Zap, Bot } from 'lucide-react';

const DeliverablesSection = () => {
  const deliverables = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Arquitetura de Marca Premium",
      description: "Projetamos sua marca médica profissional, posicionando você como referência em sua especialidade.",
      highlight: "👉 Primeira etapa para sair da invisibilidade digital."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Landing Page de Alta Conversão",
      description: "Criamos sua página profissional com design ético e copy magnética.",
      highlight: "👉 Transforme visitantes em pacientes qualificados."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Conteúdo Estratégico nas Redes",
      description: "Produzimos conteúdos semanais que atraem os pacientes certos.",
      highlight: "👉 Sua autoridade médica apresentada como solução real."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Estratégia de Funil de Crescimento",
      description: "Montamos um fluxo que conecta conteúdo e anúncios ao agendamento.",
      highlight: "👉 Leve o paciente do primeiro contato até a consulta sem desperdício."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Alcance Diário com Tráfego Pago",
      description: "Colocamos você todos os dias diante de potenciais pacientes online.",
      highlight: "👉 Mais visibilidade, mais alcance, mais pacientes certos."
    },
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "Automação com Inteligência Artificial",
      description: "Sua IA responde e qualifica leads 24/7, até enquanto você dorme.",
      highlight: "👉 Mais consultas marcadas com menos esforço."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que você recebe no <span className="text-primary">MEDD</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nosso método completo para transformar médicos em autoridades digitais e aumentar o faturamento do consultório
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {deliverables.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {index + 1}) {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-primary font-semibold">
                    {item.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">
              Metodologia completa e comprovada por +500 médicos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;