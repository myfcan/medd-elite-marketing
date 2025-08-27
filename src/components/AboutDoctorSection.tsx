import { Users, TrendingUp, Award, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutDoctorSection = () => {
  const achievements = [
    { icon: Users, label: "Pacientes Atendidos", value: "15,000+", description: "Ao longo de 18 anos de carreira" },
    { icon: TrendingUp, label: "Crescimento Médio", value: "300%", description: "Aumento na receita dos clientes" },
    { icon: Award, label: "Médicos Formados", value: "800+", description: "Profissionais capacitados pelo método" },
    { icon: Star, label: "Taxa de Sucesso", value: "94%", description: "Dos médicos alcançam seus objetivos" }
  ];

  const credentials = [
    "Médico formado pela Universidade Federal de São Paulo (UNIFESP)",
    "Pós-graduação em Gestão de Negócios em Saúde",
    "Especialista em Marketing Médico Digital",
    "Fundador do Método M.E.D.D.",
    "Palestrante em congressos nacionais e internacionais"
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
            Conheça o criador do{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Método M.E.D.D.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O médico que revolucionou a forma como profissionais da saúde constroem suas carreiras
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Doctor Photo and Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
              
              {/* Photo Container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-primary/20">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/05359bbe-3a30-4152-87c9-b0aa29851318.png" 
                    alt="Dr. Saulo Nader - Criador do Método M.E.D.D."
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  {/* Badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Fundador M.E.D.D.
                  </div>
                </div>
                
                {/* Name and Title */}
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Dr. Saulo Nader</h3>
                  <p className="text-primary font-semibold mb-4">Médico Empreendedor & Mentor de Negócios em Saúde</p>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-primary">18+</div>
                      <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                    </div>
                    <div className="bg-secondary/10 rounded-xl p-3 text-center">
                      <div className="text-2xl font-bold text-secondary">800+</div>
                      <div className="text-sm text-muted-foreground">Médicos Formados</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Background */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Bio */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Trajetória Profissional</h4>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Após anos construindo uma carreira médica de sucesso, Dr. Saulo identificou que a maioria dos 
                médicos enfrentava os mesmos desafios: dependência de convênios, agenda instável e dificuldade 
                para se posicionar como autoridade em sua especialidade.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Foi então que desenvolveu o <strong className="text-primary">Método M.E.D.D.</strong>, um sistema 
                estruturado que já transformou a carreira de centenas de médicos brasileiros.
              </p>

              {/* Credentials */}
              <div className="space-y-3">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center lg:text-left">
              <Button className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
                Conheça Sua História Completa
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-primary/20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Resultados Comprovados</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Números que demonstram o impacto real do Método M.E.D.D. na vida de médicos brasileiros
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