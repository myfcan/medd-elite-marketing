import { TrendingUp, AlertCircle, Clock, Target, ArrowUp, ArrowDown } from 'lucide-react';

const ConsequencesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            O cenário que se desenha para{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              os próximos 5 anos
            </span>
          </h2>
        </div>

        {/* Visual Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-200 via-yellow-200 to-green-200"></div>
          
          <div className="space-y-16">
            {/* 2024 - Critical Point */}
            <div className="flex items-center">
              <div className="flex-1 text-right pr-8">
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-red-600 mb-3">2024 - Ponto Crítico</h3>
                  <p className="text-gray-700">Saturação do mercado médico e redução drástica dos repasses</p>
                </div>
              </div>
              <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              <div className="flex-1 pl-8"></div>
            </div>

            {/* 2026 - Adaptation */}
            <div className="flex items-center">
              <div className="flex-1 pr-8"></div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              <div className="flex-1 text-left pl-8">
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-yellow-600 mb-3">2026 - Adaptação Forçada</h3>
                  <p className="text-gray-700">Médicos são obrigados a buscar alternativas aos convênios</p>
                </div>
              </div>
            </div>

            {/* 2029 - New Leaders */}
            <div className="flex items-center">
              <div className="flex-1 text-right pr-8">
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-green-600 mb-3">2029 - Novos Líderes</h3>
                  <p className="text-gray-700">Médicos com autoridade digital dominam o mercado particular</p>
                </div>
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              <div className="flex-1 pl-8"></div>
            </div>
          </div>
        </div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Current Scenario */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
              <AlertCircle className="w-7 h-7 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-600 mb-6">Cenário Atual</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Saturação crescente do mercado médico</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Redução constante dos repasses de convênios</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">Concorrência com profissionais mais jovens</span>
              </div>
            </div>
          </div>

          {/* Market Trend - Featured */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10 rounded-2xl"></div>
            <div className="relative bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-8">Tendência do Mercado</h3>
              
              <div className="space-y-8">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm opacity-90">Medicina Particular</span>
                    <ArrowUp className="w-5 h-5" />
                  </div>
                  <div className="text-3xl font-bold">↗️ 45%</div>
                  <p className="text-sm opacity-90">Crescimento anual</p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm opacity-90">Repasses Convênios</span>
                    <ArrowDown className="w-5 h-5" />
                  </div>
                  <div className="text-3xl font-bold">↘️ 23%</div>
                  <p className="text-sm opacity-90">Redução contínua</p>
                </div>
              </div>
            </div>
          </div>

          {/* Future Impact */}
          <div className="bg-white border-2 border-red-200 rounded-2xl p-8">
            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-7 h-7 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-red-600 mb-6">Impacto Futuro</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Maior competitividade entre profissionais</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Necessidade urgente de diferenciação</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Pressão crescente por resultados</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConsequencesSection;