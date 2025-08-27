import { Star, TrendingUp, Users, Award } from 'lucide-react';

const CaseSection = () => {
  return (
    <section id="cases" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Case de Sucesso: Dr. Saulo Martins
          </h2>
          <p className="text-lg text-muted-foreground">Cirurgião Plástico</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Foto e Quote */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl p-8 shadow-elegant">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-foreground">DS</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Dr. Saulo Martins</h3>
                  <p className="text-muted-foreground mb-4">Cirurgião Plástico</p>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-xl italic text-foreground mb-6">
                "Em 9 meses, saí completamente dos convênios e multipliquei meu faturamento. 
                O método M.E.D.D. não apenas me deu pacientes, me deu autoridade real no mercado."
              </blockquote>
              
              <div className="bg-secondary/10 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Tempo:</strong> Resultados obtidos em 9 meses de aplicação da metodologia
                </p>
              </div>
            </div>
          </div>

          {/* Resultados Visuais */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 text-center">
              <h4 className="font-semibold text-muted-foreground mb-4">ANTES vs DEPOIS</h4>
              
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Faturamento</span>
                    <TrendingUp className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-center">
                      <div className="text-lg font-bold text-muted-foreground">R$ 45k</div>
                      <div className="text-xs text-muted-foreground">Antes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">R$ 180k</div>
                      <div className="text-xs text-secondary">Depois</div>
                    </div>
                  </div>
                </div>

                <div className="border-b pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Convênios</span>
                    <Users className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-center">
                      <div className="text-lg font-bold text-muted-foreground">70%</div>
                      <div className="text-xs text-muted-foreground">Antes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">0%</div>
                      <div className="text-xs text-secondary">Depois</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Valor Consulta</span>
                    <Award className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-center">
                      <div className="text-lg font-bold text-muted-foreground">R$ 350</div>
                      <div className="text-xs text-muted-foreground">Antes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">R$ 1.200</div>
                      <div className="text-xs text-secondary">Depois</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Autoridade */}
            <div className="bg-gradient-secondary rounded-xl p-6 text-secondary-foreground text-center">
              <h4 className="font-bold mb-4">AUTORIDADE CONSTRUÍDA</h4>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold">+2M</div>
                  <div className="text-sm opacity-90">Seguidores</div>
                </div>
                <div>
                  <div className="text-xl font-bold">Referência Nacional</div>
                  <div className="text-sm opacity-90">Na Especialidade</div>
                </div>
                <div>
                  <div className="text-lg font-bold">Aparições na Mídia</div>
                  <div className="text-sm opacity-90">TV, Revistas, Podcasts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSection;