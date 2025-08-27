import { ArrowRight, X, Check } from 'lucide-react';

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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A diferença entre ter um sistema e não ter
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Before */}
          <div className="lg:col-span-5">
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-600 mb-8 text-center">
                Situação Atual
              </h3>
              
              <div className="space-y-4">
                {beforeItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="flex flex-col items-center">
              <ArrowRight className="w-8 h-8 text-secondary mb-2" />
              <span className="text-secondary font-semibold text-sm">TRANSFORMAÇÃO</span>
            </div>
          </div>

          {/* After */}
          <div className="lg:col-span-5">
            <div className="bg-secondary text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Situação Transformada
              </h3>
              
              <div className="space-y-4">
                {afterItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;