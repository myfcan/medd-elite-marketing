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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja a transformação real que acontece quando você implementa 
            uma estratégia estruturada de crescimento.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Before */}
          <div className="lg:col-span-5">
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center">
                  <X className="w-8 h-8 text-gray-500" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-600 mb-8 text-center">
                Situação Atual
              </h3>
              
              <div className="space-y-6">
                {beforeItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="text-gray-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <div className="flex items-center space-x-1 text-primary font-bold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>TRANSFORMAÇÃO</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Com M.E.D.D.</p>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl"></div>
              <div className="relative bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-8">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-8 text-center">
                  Situação Transformada
                </h3>
                
                <div className="space-y-6">
                  {afterItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
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