import { Users, TrendingUp, Award, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutDoctorSection = () => {
  const achievements = [
    { icon: TrendingUp, label: "Faturamento Antes", value: "R$ 45k", description: "70% convênios • Consultas R$ 350" },
    { icon: Star, label: "Faturamento Depois", value: "R$ 180k", description: "100% particular • Consultas R$ 1.200" },
    { icon: Users, label: "Seguidores", value: "+2M", description: "Referência nacional" },
    { icon: Award, label: "Aparições na Mídia", value: "Nacional", description: "Múltiplos programas de TV" }
  ];

  const credentials = [
    "Neurologista pela USP",
    "Médico pela FAMEMA", 
    "Apresentado como Dr. Tontura em diversos programas",
    "Referência nacional em sua especialidade",
    "Múltiplas aparições na mídia"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Nossa{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Prova Social
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O médico que comprova na prática os resultados do Método M.E.D.D.
          </p>
        </div>

        {/* Main Doctor Container */}
        <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative group max-w-4xl mx-auto">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            
            {/* Main Container */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-primary/20">
              <div className="grid lg:grid-cols-2 gap-8">
                
                {/* Left Column - Photo */}
                <div className="relative">
                  <img 
                    src="/lovable-uploads/05359bbe-3a30-4152-87c9-b0aa29851318.png" 
                    alt="Dr. Saulo Nader - Neurologista e caso de sucesso do Método M.E.D.D."
                    className="w-full h-80 object-contain rounded-2xl shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5"
                  />
                  {/* Badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    R$ 20Mi/mês
                  </div>
                  
                  {/* Name and Title */}
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Dr. Saulo Nader</h3>
                    <p className="text-primary font-semibold mb-4">Neurologista • Conhecido como "Dr. Tontura"</p>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-primary/10 rounded-xl p-3 text-center">
                        <div className="text-2xl font-bold text-primary">+2M</div>
                        <div className="text-sm text-muted-foreground">Seguidores</div>
                      </div>
                      <div className="bg-secondary/10 rounded-xl p-3 text-center">
                        <div className="text-2xl font-bold text-secondary">20Mi</div>
                        <div className="text-sm text-muted-foreground">Faturamento/mês</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Info */}
                <div className="space-y-6">
                  {/* Mini Resumo */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground">Mini Resumo</h4>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Sou Dr. Saulo Nader, neurologista pela USP, médico pela FAMEMA, apresentado como Dr. Tontura em minhas diversas aparições em programas.
                    </p>
                    
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-4 mb-4 border-l-4 border-primary">
                      <p className="text-lg font-semibold text-foreground">HOJE FATURA 20 MILHÕES POR MÊS.</p>
                    </div>

                    {/* Credentials */}
                    <div className="space-y-2">
                      {credentials.map((credential, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{credential}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Depoimento */}
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                        <Star className="w-3 h-3 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground">Depoimento</h4>
                    </div>
                    
                    <blockquote className="text-muted-foreground italic leading-relaxed border-l-4 border-primary pl-4 mb-3">
                      "Em 9 meses, saí completamente dos convênios e multipliquei meu faturamento. O método M.E.D.D. não apenas me deu pacientes, me deu autoridade real no mercado."
                    </blockquote>
                    
                    <p className="text-xs text-muted-foreground text-right">
                      <strong>Resultados obtidos em 9 meses de aplicação da metodologia</strong>
                    </p>
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

        {/* Achievement Stats */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-primary/20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Transformação Mensurada</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Resultados reais obtidos em 9 meses com a aplicação do Método M.E.D.D.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-primary/10"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Value */}
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {achievement.value}
                  </div>
                  
                  {/* Label */}
                  <div className="font-semibold text-foreground mb-2">
                    {achievement.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctorSection;