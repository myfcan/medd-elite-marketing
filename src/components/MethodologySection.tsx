import { Award, Target, Zap, CheckCircle, Users, Code, TrendingUp } from 'lucide-react';

const MethodologySection = () => {
  return (
    <section id="metodologia" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl mb-8 shadow-lg">
            <span className="text-2xl font-bold text-white">M.E.D.D</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Metodologia{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              M.E.D.D.
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed mb-8">
            Um sistema completo e integrado desenvolvido especificamente para médicos 
            que desejam construir autoridade digital e fluxo previsível de pacientes particulares.
          </p>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-6 max-w-3xl mx-auto shadow-sm">
            <p className="text-lg font-semibold text-gray-900">
              <strong>Não é marketing tradicional.</strong> É um sistema integrado desenvolvido 
              exclusivamente para a realidade médica brasileira.
            </p>
          </div>
        </div>

        {/* 3 Pilares */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Pilar 1 */}
          <div className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform">
              <Award className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              ARQUITETURA DE AUTORIDADE
            </h3>
            
            <p className="text-secondary text-center mb-8 font-semibold">
              "Ser reconhecido como referência na sua especialidade"
            </p>
            
            <div className="space-y-5 mb-8">
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-xl border border-secondary/10">
                <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-base text-gray-700 font-medium">Arquitetura de marca pessoal profissional</span>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-xl border border-secondary/10">
                <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-base text-gray-700 font-medium">Posicionamento estratégico diferenciado</span>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-xl border border-secondary/10">
                <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-base text-gray-700 font-medium">Comunicação de valor consistente</span>
              </div>
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform">
              <Target className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              SISTEMA DE ATRAÇÃO SELETIVA
            </h3>
            
            <p className="text-primary text-center mb-8 font-semibold">
              "Atraindo pacientes certos, não curiosos de convênio"
            </p>
            
            <div className="space-y-5 mb-8">
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/10">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-base text-gray-700 font-medium">Conteúdo estratégico (posts, stories, roteiros)</span>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/10">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-base text-gray-700 font-medium">Funil validado de atração e conversão</span>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border border-primary/10">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-base text-gray-700 font-medium">Tráfego pago como acelerador</span>
              </div>
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform">
              <Zap className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              AUTOMAÇÃO INTELIGENTE
            </h3>
            
            <p className="text-gray-700 text-center mb-8 font-semibold">
              "Sistema que trabalha 24h gerando previsibilidade"
            </p>
            
            <div className="space-y-5 mb-8">
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-100/80 to-transparent rounded-xl border border-gray-200">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-base text-gray-700 font-medium">Qualificação de leads via IA</span>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-100/80 to-transparent rounded-xl border border-gray-200">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-base text-gray-700 font-medium">Engajamento inteligente 24/7</span>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-100/80 to-transparent rounded-xl border border-gray-200">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-gray-600" />
                </div>
                <span className="text-base text-gray-700 font-medium">Pós-consulta automatizado para fidelização</span>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Center */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl"></div>
          <div className="relative bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white shadow-2xl">
            <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Zap className="w-12 h-12" />
            </div>
            <h4 className="text-3xl lg:text-4xl font-bold mb-6">INTEGRAÇÃO SISTÊMICA</h4>
            <p className="text-xl font-medium max-w-4xl mx-auto leading-relaxed opacity-95">
              Os 3 pilares trabalham em perfeita sinergia para criar um ecossistema completo 
              de crescimento sustentável, previsível e escalável para sua prática médica.
            </p>
          </div>
        </div>

        {/* Vantagens */}
        <div className="bg-white border border-gray-200 rounded-3xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-center mb-12">
            Vantagens Exclusivas do Sistema{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">M.E.D.D.</span>
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
                <div className="flex-shrink-0 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center mt-1 group-hover:bg-secondary/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
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