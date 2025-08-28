import { UserX, TrendingDown, AlertTriangle, BarChart3 } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section id="sobre" className="relative py-6 overflow-hidden">
      {/* Background with gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-red-50/30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-500/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            Realidade do Mercado Médico
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Por que médicos competentes continuam dependentes de convênios?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Mesmo com excelência técnica, a maioria dos médicos não consegue construir 
            autoridade suficiente para atrair pacientes particulares consistentemente.
          </p>
        </div>

        {/* Modern Problem Cards Layout */}
        <div className="grid lg:grid-cols-12 gap-6 mb-14">
          {/* Card 1 - Tall format */}
          <div className="lg:col-span-4 group relative">
            <div className="relative bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl p-8 h-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/10 to-transparent rounded-full blur-2xl"></div>
              
              {/* Icon */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">Ausência de Estratégia</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Falta de marca pessoal estruturada para se destacar em um mercado cada vez mais competitivo e saturado
              </p>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>

          {/* Card 2 - Wide format */}
          <div className="lg:col-span-8 group relative">
            <div className="relative bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl p-8 h-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-red-500/5 to-transparent rounded-full blur-xl"></div>
              
              <div className="relative flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">Dependência de Indicações</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Indicações não controladas limitam o crescimento sustentável e criam vulnerabilidade no negócio médico
                  </p>
                </div>
              </div>
              
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>

          {/* Card 3 - Full width bottom */}
          <div className="lg:col-span-12 group relative">
            <div className="relative bg-gradient-to-r from-white/90 to-red-50/50 backdrop-blur-sm border border-white/60 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/15">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="absolute top-8 left-12 w-1 h-1 bg-orange-500 rounded-full"></div>
                <div className="absolute top-12 left-8 w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="absolute bottom-8 right-12 w-1 h-1 bg-orange-500 rounded-full"></div>
              </div>
              
              <div className="relative flex items-center gap-8">
                {/* Icon */}
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-red-500 via-red-600 to-orange-500 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-3xl font-bold text-gray-900 leading-tight">Sistema de Atração</h3>
                    <div className="px-3 py-1 bg-red-500/10 text-red-600 rounded-full text-sm font-medium">Crítico</div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-xl max-w-4xl">
                    Ausência de sistema estruturado para atrair e converter pacientes premium de forma consistente
                  </p>
                </div>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{padding: '2px'}}>
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;