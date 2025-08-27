import { Star, TrendingUp, DollarSign } from 'lucide-react';

const CaseSection = () => {
  return (
    <section id="cases" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Case de Sucesso: Dr. Saulo Martins
          </h2>
          <p className="text-xl text-gray-600">
            Cirurgião Plástico
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-soft">
              {/* Profile */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">DS</span>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">Dr. Saulo Martins</h3>
                  <p className="text-gray-600 mb-3">Cirurgião Plástico</p>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                    <span className="ml-2 text-gray-600 text-sm">+2M seguidores</span>
                  </div>
                </div>
              </div>
              
              {/* Quote */}
              <blockquote className="text-xl text-gray-700 mb-8 italic leading-relaxed">
                "Em 9 meses, saí completamente dos convênios e multipliquei meu faturamento. 
                O método M.E.D.D. não apenas me deu pacientes, me deu autoridade real no mercado."
              </blockquote>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600">
                  <strong>Tempo:</strong> Resultados obtidos em 9 meses de aplicação da metodologia
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-soft text-center">
              <h4 className="font-semibold text-gray-600 mb-6">ANTES vs DEPOIS</h4>
              
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Faturamento</span>
                    <DollarSign className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-400">R$ 45k</div>
                      <div className="text-xs text-gray-400">Antes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">R$ 180k</div>
                      <div className="text-xs text-secondary">Depois</div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-100 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Convênios</span>
                    <TrendingUp className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-400">70%</div>
                      <div className="text-xs text-gray-400">Antes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">0%</div>
                      <div className="text-xs text-secondary">Depois</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Valor Consulta</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-400">R$ 350</div>
                      <div className="text-xs text-gray-400">Antes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">R$ 1.200</div>
                      <div className="text-xs text-secondary">Depois</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Authority */}
            <div className="bg-secondary text-white p-6 rounded-xl text-center">
              <h4 className="font-bold mb-4">AUTORIDADE CONSTRUÍDA</h4>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold">+2M</div>
                  <div className="text-sm opacity-90">Seguidores</div>
                </div>
                <div>
                  <div className="text-xl font-bold">Referência Nacional</div>
                  <div className="text-sm opacity-90">Na Especialidade</div>
                </div>
                <div>
                  <div className="text-lg font-bold">Aparições na Mídia</div>
                  <div className="text-sm opacity-90">TV, Revistas, Podcasts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSection;