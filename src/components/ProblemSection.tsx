import { UserX, TrendingDown, AlertTriangle, BarChart3 } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Por que médicos competentes continuam{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              dependentes de convênios?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Mesmo com excelência técnica, a maioria dos médicos não consegue construir 
            autoridade suficiente para atrair pacientes particulares consistentemente.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
              <TrendingDown className="w-7 h-7 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ausência de Estratégia</h3>
            <p className="text-gray-600 leading-relaxed">
              Falta de marca pessoal estruturada para se destacar em um mercado cada vez mais competitivo e saturado
            </p>
          </div>

          <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
              <AlertTriangle className="w-7 h-7 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Dependência de Indicações</h3>
            <p className="text-gray-600 leading-relaxed">
              Indicações não controladas limitam o crescimento sustentável e criam vulnerabilidade no negócio médico
            </p>
          </div>

          <div className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
              <BarChart3 className="w-7 h-7 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Sistema de Atração</h3>
            <p className="text-gray-600 leading-relaxed">
              Ausência de sistema estruturado para atrair e converter pacientes premium de forma consistente
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;