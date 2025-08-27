import { TrendingUp, AlertCircle, Clock } from 'lucide-react';

const ConsequencesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O cenário que se desenha para os próximos 5 anos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-xl">
            <AlertCircle className="w-12 h-12 text-gray-500 mb-6" />
            <h3 className="text-xl font-semibold mb-4 text-gray-600">Cenário Atual</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Saturação crescente do mercado médico</li>
              <li>• Redução constante dos repasses de convênios</li>
              <li>• Concorrência com profissionais mais jovens</li>
            </ul>
          </div>

          <div className="bg-primary text-white p-8 rounded-xl">
            <TrendingUp className="w-12 h-12 text-white mb-6" />
            <h3 className="text-xl font-semibold mb-6 text-center">Tendência do Mercado</h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">↗️ 45%</div>
                <p className="text-sm opacity-90">Crescimento da medicina particular</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">↘️ 23%</div>
                <p className="text-sm opacity-90">Redução nos repasses</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-200 p-8 rounded-xl">
            <Clock className="w-12 h-12 text-red-500 mb-6" />
            <h3 className="text-xl font-semibold mb-4 text-red-600">Impacto Futuro</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Maior competitividade</li>
              <li>• Necessidade de diferenciação</li>
              <li>• Pressão por resultados</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-12 rounded-xl text-center">
          <p className="text-xl font-medium max-w-4xl mx-auto">
            Médicos que não desenvolvem autoridade digital e sistemas de atração próprios 
            ficam cada vez mais vulneráveis às mudanças do mercado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsequencesSection;