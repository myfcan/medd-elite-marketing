import { Star, TrendingUp, Users, Award, Calendar, DollarSign } from 'lucide-react';

const CaseSection = () => {
  return (
    <section id="cases" className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold font-serif text-foreground mb-8 leading-tight">
            Case de Sucesso: <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Dr. Saulo Martins
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Cirurgião Plástico • São Paulo
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-card border border-border/50 rounded-3xl p-8 lg:p-12 shadow-card">
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-premium">
                    <span className="text-3xl font-bold text-primary-foreground">DS</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent-foreground" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl font-bold font-serif mb-3">Dr. Saulo Martins</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Cirurgião Plástico • CRM 123456-SP
                  </p>
                  
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                    ))}
                    <span className="ml-3 text-muted-foreground font-medium">5.0 • 847 avaliações</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
                      <span className="text-accent font-semibold text-sm">Referência Nacional</span>
                    </div>
                    <div className="bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                      <span className="text-primary font-semibold text-sm">+2M Seguidores</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quote */}
              <div className="relative bg-muted/50 rounded-2xl p-8 mb-12">
                <div className="text-6xl text-primary/20 font-serif absolute top-2 left-6">"</div>
                <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed pl-8">
                  Em 9 meses, saí completamente dos convênios e multipliquei meu faturamento. 
                  O método M.E.D.D. não apenas me deu pacientes, me deu autoridade real no mercado.
                </blockquote>
                <div className="text-6xl text-primary/20 font-serif absolute bottom-2 right-6 rotate-180">"</div>
              </div>
              
              {/* Timeline */}
              <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                  <h4 className="text-lg font-bold text-foreground">Timeline de Transformação</h4>
                </div>
                <p className="text-muted-foreground font-medium">
                  <strong>Período:</strong> Janeiro 2024 - Setembro 2024 (9 meses de implementação)
                </p>
              </div>
            </div>
          </div>

          {/* Results Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Before vs After */}
            <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-card">
              <h4 className="text-xl font-bold mb-8 text-center">Transformação em Números</h4>
              
              <div className="space-y-8">
                {/* Faturamento */}
                <div className="border-b border-border/50 pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground font-medium">Faturamento Mensal</span>
                    <DollarSign className="w-5 h-5 text-accent" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Antes</span>
                      <span className="text-lg font-bold text-muted-foreground">R$ 45.000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-accent">Depois</span>
                      <span className="text-2xl font-bold text-accent">R$ 180.000</span>
                    </div>
                    <div className="text-center">
                      <span className="bg-accent/10 text-accent font-bold px-3 py-1 rounded-full text-sm">
                        +300% de crescimento
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dependência de Convênios */}
                <div className="border-b border-border/50 pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground font-medium">Dependência de Convênios</span>
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Antes</span>
                      <span className="text-lg font-bold text-muted-foreground">70%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-accent">Depois</span>
                      <span className="text-2xl font-bold text-accent">0%</span>
                    </div>
                    <div className="text-center">
                      <span className="bg-accent/10 text-accent font-bold px-3 py-1 rounded-full text-sm">
                        100% Particular
                      </span>
                    </div>
                  </div>
                </div>

                {/* Valor da Consulta */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground font-medium">Valor da Consulta</span>
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Antes</span>
                      <span className="text-lg font-bold text-muted-foreground">R$ 350</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-accent">Depois</span>
                      <span className="text-2xl font-bold text-accent">R$ 1.200</span>
                    </div>
                    <div className="text-center">
                      <span className="bg-accent/10 text-accent font-bold px-3 py-1 rounded-full text-sm">
                        +243% de valorização
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Authority Metrics */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-primary border-2 border-primary/30 rounded-3xl p-8 text-primary-foreground text-center">
                <h4 className="text-xl font-bold mb-8">Autoridade Digital Construída</h4>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold mb-2">+2M</div>
                    <div className="text-sm opacity-90 font-medium">Seguidores nas Redes</div>
                  </div>
                  
                  <div>
                    <div className="text-2xl font-bold mb-2">Referência Nacional</div>
                    <div className="text-sm opacity-90 font-medium">Em Cirurgia Plástica</div>
                  </div>
                  
                  <div>
                    <div className="text-xl font-bold mb-2">Aparições na Mídia</div>
                    <div className="text-sm opacity-90 font-medium">TV, Revistas e Podcasts</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-card border border-border/50 rounded-3xl p-6 text-center">
              <h5 className="font-bold mb-3">Quer Resultados Similares?</h5>
              <p className="text-sm text-muted-foreground mb-4">
                Descubra como aplicar o mesmo método na sua especialidade
              </p>
              <button className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground px-6 py-3 rounded-2xl font-semibold shadow-premium transition-all">
                Solicitar Análise Gratuita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSection;