import { Check } from 'lucide-react';

const TargetAudienceSection = () => {
  const targetAudience = [
    {
      text: "Médicos que desejam aumentar o fluxo de pacientes e valorizar suas consultas."
    },
    {
      text: "Médicos que buscam mais liberdade, deixando a vida corrida dos plantões para focar no próprio consultório."
    },
    {
      text: "Médicos que querem se tornar uma referência em sua região."
    },
    {
      text: "Médicos que precisam de uma equipe de marketing 100% especializada em Medicina."
    },
    {
      text: "Clínicas e médicos que já têm uma boa presença digital, que desejam impulsionar ainda mais os seus resultados"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Side - Title */}
          <div className="lg:sticky lg:top-20">
            <div className="inline-block bg-muted px-6 py-2 rounded-full mb-8">
              <span className="text-muted-foreground font-medium">Para quem é?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Essa sessão estratégica é{" "}
              <span className="text-primary">100% focada em:</span>
            </h2>
          </div>

          {/* Right Side - Target Audience Cards */}
          <div className="space-y-6">
            {targetAudience.map((item, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-lg flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-primary-foreground" strokeWidth={3} />
                  </div>
                  <p className="text-foreground text-lg leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;