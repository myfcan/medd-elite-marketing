import { Award, Target, Zap, CheckCircle } from 'lucide-react';

const MethodologySection = () => {
  return (
    <section id="metodologia" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Metodologia M.E.D.D.
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            O sistema completo para médicos que desejam construir autoridade digital 
            e fluxo previsível de pacientes particulares.
          </p>
        </div>

        {/* 3 Pilares */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Pilar 1 */}
          <div className="bg-white border-2 border-primary/20 rounded-xl p-8 text-center hover:border-primary/40 transition-colors">
            <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ARQUITETURA DE AUTORIDADE
            </h3>
            
            <p className="text-secondary mb-6 font-medium">
              "Ser reconhecido como referência na sua especialidade"
            </p>
            
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Arquitetura de marca pessoal profissional</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Posicionamento estratégico diferenciado</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Comunicação de valor consistente</span>
              </div>
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="bg-white border-2 border-secondary/20 rounded-xl p-8 text-center hover:border-secondary/40 transition-colors">
            <div className="w-16 h-16 bg-secondary text-white rounded-xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              SISTEMA DE ATRAÇÃO SELETIVA
            </h3>
            
            <p className="text-primary mb-6 font-medium">
              "Atraindo pacientes certos, não curiosos de convênio"
            </p>
            
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Conteúdo estratégico (posts, stories, roteiros)</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Funil validado de atração e conversão</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Tráfego pago como acelerador</span>
              </div>
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-gray-300 transition-colors">
            <div className="w-16 h-16 bg-gray-700 text-white rounded-xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              AUTOMAÇÃO INTELIGENTE
            </h3>
            
            <p className="text-gray-700 mb-6 font-medium">
              "Sistema que trabalha 24h gerando previsibilidade"
            </p>
            
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Qualificação de leads via IA</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Engajamento inteligente 24/7</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Pós-consulta automatizado para fidelização</span>
              </div>
            </div>
          </div>
        </div>

        {/* Integration */}
        <div className="bg-primary text-white p-12 rounded-xl text-center mb-16">
          <h4 className="text-2xl font-bold mb-4">INTEGRAÇÃO SISTÊMICA</h4>
          <p className="text-lg opacity-90 max-w-4xl mx-auto">
            Os 3 pilares trabalham em sinergia para criar um sistema completo 
            de crescimento sustentável e previsível
          </p>
        </div>

        {/* Vantagens */}
        <div className="bg-gray-50 p-12 rounded-xl">
          <h3 className="text-2xl font-bold text-center mb-12">Vantagens do Sistema M.E.D.D.</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Saia da dependência dos convênios",
                description: "Construa base sólida de pacientes particulares"
              },
              {
                title: "Aumente seu ticket médio em 40-60%",
                description: "Posicionamento premium justifica preços maiores"
              },
              {
                title: "Pare de competir por preço",
                description: "Torne-se referência na sua especialidade"
              },
              {
                title: "Agenda lotada de pacientes qualificados",
                description: "Atraia quem realmente valoriza seu trabalho"
              },
              {
                title: "Reconhecimento profissional",
                description: "Seja visto como autoridade pelos seus pares"
              },
              {
                title: "Sistema previsível",
                description: "Resultados consistentes mês após mês"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
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