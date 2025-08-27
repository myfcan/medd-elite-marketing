import { ArrowRight, X, Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            A diferença entre{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ter um sistema e não ter
            </span>
          </h2>
        </div>

        {/* Visual Comparison */}
        <div className="relative mb-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-20 h-full">
              {[...Array(400)].map((_, i) => (
                <div key={i} className="border border-gray-300"></div>
              ))}
            </div>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-16 items-center">
            {/* Before - Visual */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <X className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-3xl font-bold text-gray-700 mb-8">Sem Sistema</h3>
              </div>
              
              {/* Visual Problems */}
              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-2xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">📉</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700">Renda Imprevisível</div>
                      <div className="text-sm text-red-600">Dependente de fatores externos</div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-2xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">⏰</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700">Agenda Vazia</div>
                      <div className="text-sm text-red-600">Esperando indicações chegarem</div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-2xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">💸</span>
                    </div>
                    <div>
                      <div className="font-semibold text-red-700">Preços Baixos</div>
                      <div className="text-sm text-red-600">Competindo por convênios</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After - Visual */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8">
                  Com M.E.D.D.
                </h3>
              </div>
              
              {/* Visual Solutions */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-r-2xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">📈</span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Renda Previsível</div>
                      <div className="text-sm text-gray-600">Sistema automatizado de atração</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-r-2xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">📅</span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Agenda Lotada</div>
                      <div className="text-sm text-gray-600">Fluxo constante de pacientes</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-r-2xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">💎</span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Preços Premium</div>
                      <div className="text-sm text-gray-600">Autoridade reconhecida no mercado</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Arrow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 text-center border border-gray-200">
          <h4 className="text-3xl font-bold text-gray-900 mb-6">Pronto Para Sua Transformação?</h4>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Descubra como centenas de médicos já fizeram essa mudança com nossa metodologia comprovada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Ver Casos de Sucesso
            </Button>
            <Button variant="outline" className="border-2 border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-full font-semibold">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;