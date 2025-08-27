import { UserX, TrendingDown, AlertTriangle } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por que médicos competentes continuam dependentes de convênios
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Mesmo com excelência técnica, a maioria dos médicos não consegue construir 
            autoridade suficiente para atrair pacientes particulares consistentemente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-soft text-center">
            <TrendingDown className="w-12 h-12 text-red-500 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-4">Ausência de Estratégia</h3>
            <p className="text-gray-600">
              Falta de marca pessoal estruturada para se destacar no mercado
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-soft text-center">
            <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-4">Dependência de Indicações</h3>
            <p className="text-gray-600">
              Indicações não controladas limitam o crescimento sustentável
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-soft text-center">
            <UserX className="w-12 h-12 text-red-500 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-4">Sistema de Atração</h3>
            <p className="text-gray-600">
              Ausência de sistema para atrair e converter pacientes premium
            </p>
          </div>
        </div>

        <div className="bg-white border-l-4 border-secondary rounded-xl p-8 text-center">
          <div className="text-6xl font-bold text-secondary mb-4">87%</div>
          <p className="text-xl text-gray-700 font-medium">
            dos médicos faturam menos de R$ 50k/mês por falta de posicionamento estratégico
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;