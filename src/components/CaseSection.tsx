import { Star, TrendingUp, DollarSign, Award, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseSection = () => {
  return (
    <section id="cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Case de Sucesso:{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dr. Saulo Martins
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Cirurgião Plástico • São Paulo
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-lg">
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-3xl flex items-center justify-center shadow-xl">
                    <span className="text-4xl font-bold text-white">DS</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3">Dr. Saulo Martins</h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Cirurgião Plástico • CRM 123456-SP
                  </p>
                  
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                    <span className="ml-3 text-gray-600 font-medium">5.0 • 847 avaliações</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2">
                      <span className="text-secondary font-semibold text-sm">Referência Nacional</span>
                    </div>
                    <div className="bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                      <span className="text-primary font-semibold text-sm">+2M Seguidores</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quote */}
              <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 mb-12 border border-gray-100">
                <div className="text-6xl text-primary/20 font-serif absolute top-4 left-6">"</div>
                <blockquote className="text-xl lg:text-2xl font-medium text-gray-900 leading-relaxed pl-8 pr-8">
                  Em 9 meses, saí completamente dos convênios e multipliquei meu faturamento. 
                  O método M.E.D.D. não apenas me deu pacientes, me deu autoridade real no mercado.
                </blockquote>
                <div className="text-6xl text-primary/20 font-serif absolute bottom-4 right-6 rotate-180">"</div>
              </div>
              
              {/* Timeline */}
              <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-6 h-6 text-secondary" />
                  <h4 className="text-lg font-bold text-gray-900">Timeline de Transformação</h4>
                </div>
                <p className="text-gray-700 font-medium">
                  <strong>Período:</strong> Janeiro 2024 - Setembro 2024 (9 meses de implementação)
                </p>
              </div>
            </div>
          </div>

          {/* Results Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Before vs After */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg">
              <h4 className="text-xl font-bold mb-8 text-center">Transformação em Números</h4>
              
              <div className="space-y-8">
                {/* Faturamento */}
                <div className="border-b border-gray-100 pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600 font-medium">Faturamento Mensal</span>
                    <DollarSign className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Antes</span>
                      <span className="text-lg font-bold text-gray-400">R$ 45.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-secondary">Depois</span>
                      <span className="text-2xl font-bold text-secondary">R$ 180.000</span>
                    </div>
                    <div className="text-center">
                      <span className="bg-secondary/10 text-secondary font-bold px-3 py-1 rounded-full text-sm">
                        +300% de crescimento
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dependência de Convênios */}
                <div className="border-b border-gray-100 pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600 font-medium">Dependência de Convênios</span>
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Antes</span>
                      <span className="text-lg font-bold text-gray-400">70%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-secondary">Depois</span>
                      <span className="text-2xl font-bold text-secondary">0%</span>
                    </div>
                    <div className="text-center">
                      <span className="bg-secondary/10 text-secondary font-bold px-3 py-1 rounded-full text-sm">
                        100% Particular
                      </span>
                    </div>
                  </div>
                </div>

                {/* Valor da Consulta */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600 font-medium">Valor da Consulta</span>
                    <TrendingUp className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Antes</span>
                      <span className="text-lg font-bold text-gray-400">R$ 350</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-secondary">Depois</span>
                      <span className="text-2xl font-bold text-secondary">R$ 1.200</span>
                    </div>
                    <div className="text-center">
                      <span className="bg-secondary/10 text-secondary font-bold px-3 py-1 rounded-full text-sm">
                        +243% de valorização
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Authority Metrics */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl"></div>
              <div className="relative bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white text-center shadow-xl">
                <h4 className="text-xl font-bold mb-8">Autoridade Digital Construída</h4>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold mb-2">+2M</div>
                    <div className="text-sm opacity-90 font-medium">Seguidores nas Redes</div>
                  </div>
                  
                  <div>
                    <div className="text-2xl font-bold mb-2">Referência Nacional</div>
                    <div className="text-sm opacity-90 font-medium">Em Cirurgia Plástica</div>
                  </div>
                  
                  <div>
                    <div className="text-xl font-bold mb-2">Aparições na Mídia</div>
                    <div className="text-sm opacity-90 font-medium">TV, Revistas e Podcasts</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-3xl p-6 text-center">
              <h5 className="font-bold mb-3 text-gray-900">Quer Resultados Similares?</h5>
              <p className="text-sm text-gray-600 mb-4">
                Descubra como aplicar o mesmo método na sua especialidade
              </p>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                Solicitar Análise Gratuita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSection;