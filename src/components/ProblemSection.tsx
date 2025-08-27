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

        {/* Key Statistic */}
        <div className="relative flex justify-center items-center py-16">
          {/* Floating Circle */}
          <div className="relative">
            {/* Background gradient circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/30 rounded-full blur-2xl scale-110 animate-pulse"></div>
            
            {/* Main circle */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex flex-col items-center justify-center text-center shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="text-6xl lg:text-7xl font-bold text-white mb-4">
                87%
              </div>
              <div className="text-white text-lg lg:text-xl font-semibold px-8 leading-tight">
                dos médicos faturam menos de R$ 50k/mês
              </div>
            </div>
            
            {/* Floating elements around the circle */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3s'}}>
              <span className="text-red-500 font-bold text-sm">📉</span>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce" style={{animationDelay: '1s', animationDuration: '2.5s'}}>
              <span className="text-red-500 font-bold text-xs">💼</span>
            </div>
          </div>
          
          {/* Bottom text */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 max-w-4xl text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              A falta de posicionamento estratégico é o principal fator que limita 
              o potencial de crescimento da maioria dos profissionais médicos no Brasil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;