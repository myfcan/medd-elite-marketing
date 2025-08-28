import { Award, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutDoctorSection = () => {
  const credentials = [
    "Neurologista pela USP",
    "Médico pela FAMEMA", 
    "Apresentado como Dr. Tontura em diversos programas",
    "Referência nacional em sua especialidade",
    "Múltiplas aparições na mídia"
  ];

  return (
    <section className="py-6 bg-gradient-to-br from-background via-primary/5 to-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-3 leading-tight">
            A{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              transformação com M.E.D.D.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O médico que comprova na prática os resultados do Método M.E.D.D.
          </p>
        </div>

        {/* Main Doctor Container */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative group max-w-6xl mx-auto">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            
            {/* Main Container */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-primary/20">
              <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Left Column - Photo */}
                <div className="relative">
                  {/* Name and Title - Above Image */}
                  <div className="mb-6 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Dr. Saulo Nader</h3>
                    <p className="text-primary font-semibold mb-4">Neurologista • Conhecido como "Dr. Tontura"</p>
                  </div>

                  <img 
                    src="/lovable-uploads/05359bbe-3a30-4152-87c9-b0aa29851318.png" 
                    alt="Dr. Saulo Nader - Neurologista e caso de sucesso do Método M.E.D.D."
                    className="w-full h-[600px] object-cover rounded-2xl shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5"
                  />
                </div>

                {/* Right Column - Info - Full height aligned */}
                <div className="flex flex-col justify-between h-full min-h-[600px] space-y-6">
                  {/* DoutorTontura */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground">DoutorTontura</h4>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Sou Dr. Saulo Nader, neurologista pela USP, médico pela FAMEMA, apresentado como Dr. Tontura em minhas diversas aparições em programas.
                    </p>
                  </div>

                  {/* Depoimento */}
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10 flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                        <Star className="w-3 h-3 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground">Depoimento</h4>
                    </div>
                    
                    <blockquote className="text-muted-foreground italic leading-relaxed border-l-4 border-primary pl-4 mb-6">
                      "Em 9 meses, saí completamente dos convênios e multipliquei meu faturamento. O método M.E.D.D. não apenas me deu pacientes, me deu autoridade real no mercado."
                    </blockquote>
                    
                    <p className="text-xs text-muted-foreground text-right">
                      <strong>Resultados obtidos em 9 meses de aplicação da metodologia</strong>
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-primary/10 rounded-xl p-4 text-center">
                      <div className="text-xl font-bold text-primary">+250% no valor da consulta</div>
                      <div className="text-sm text-muted-foreground">De R$700 → R$2.500</div>
                    </div>
                    <div className="bg-secondary/10 rounded-xl p-4 text-center">
                      <div className="text-xl font-bold text-secondary">5X mais faturamento</div>
                      <div className="text-sm text-muted-foreground">Receita multiplicada em 12 meses</div>
                    </div>
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 text-center">
                      <div className="text-xl font-bold text-primary">Agenda premium</div>
                      <div className="text-sm text-muted-foreground">+50 leads qualificados por mês</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <Button className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
                      Conheça Sua História Completa
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutDoctorSection;