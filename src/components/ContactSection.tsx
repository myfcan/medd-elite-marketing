import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Lock, Star, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    specialty: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Simular envio bem-sucedido
    alert('✅ Análise solicitada com sucesso! Nossa equipe entrará em contato em até 24h.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contato" className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-accent opacity-5 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-8 shadow-premium">
              <Sparkles className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold font-serif text-foreground mb-8 leading-tight">
              Descubra Se Sua Especialidade <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Se Adequa ao Método M.E.D.D.
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 font-medium leading-relaxed max-w-3xl mx-auto">
              Receba uma análise personalizada e detalhada da sua especialidade. 
              Veja exatamente como outros médicos estão aplicando nossa metodologia.
            </p>
            
            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-bold mb-2">Análise Gratuita</h4>
                <p className="text-sm text-muted-foreground">Totalmente personalizada para sua especialidade</p>
              </div>
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">100% Confidencial</h4>
                <p className="text-sm text-muted-foreground">Seus dados protegidos com total segurança</p>
              </div>
              <div className="bg-card border border-border/50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-bold mb-2">Exclusivo para Médicos</h4>
                <p className="text-sm text-muted-foreground">Conteúdo desenvolvido especialmente</p>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl blur-xl"></div>
            <div className="relative bg-card border-2 border-primary/20 rounded-3xl p-8 lg:p-12 shadow-premium">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold font-serif mb-4">Solicite Sua Análise Personalizada</h3>
                <p className="text-muted-foreground">Preencha os dados abaixo e receba sua análise em até 24h</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-base font-semibold text-foreground">
                      Nome Completo *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="h-14 text-base border-2 focus:border-primary rounded-2xl"
                      placeholder="Dr. João Silva"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-base font-semibold text-foreground">
                      Email Profissional *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="h-14 text-base border-2 focus:border-primary rounded-2xl"
                      placeholder="drjoao@clinica.com.br"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="whatsapp" className="text-base font-semibold text-foreground">
                      WhatsApp *
                    </Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      className="h-14 text-base border-2 focus:border-primary rounded-2xl"
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="specialty" className="text-base font-semibold text-foreground">
                      Especialidade *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('specialty', value)}>
                      <SelectTrigger className="h-14 text-base border-2 focus:border-primary rounded-2xl">
                        <SelectValue placeholder="Selecione sua especialidade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cardiologia">Cardiologia</SelectItem>
                        <SelectItem value="dermatologia">Dermatologia</SelectItem>
                        <SelectItem value="endocrinologia">Endocrinologia</SelectItem>
                        <SelectItem value="ginecologia">Ginecologia e Obstetrícia</SelectItem>
                        <SelectItem value="neurologia">Neurologia</SelectItem>
                        <SelectItem value="ortopedia">Ortopedia</SelectItem>
                        <SelectItem value="pediatria">Pediatria</SelectItem>
                        <SelectItem value="psiquiatria">Psiquiatria</SelectItem>
                        <SelectItem value="cirurgia-plastica">Cirurgia Plástica</SelectItem>
                        <SelectItem value="urologia">Urologia</SelectItem>
                        <SelectItem value="oftalmologia">Oftalmologia</SelectItem>
                        <SelectItem value="outras">Outras Especialidades</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground h-16 text-lg font-bold shadow-premium rounded-2xl group"
                  >
                    Solicitar Análise Gratuita
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </form>

              {/* Trust Indicators */}
              <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50">
                <div className="flex items-center space-x-3 text-center md:text-left">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">Análise Personalizada</h5>
                    <p className="text-xs text-muted-foreground">Para sua especialidade específica</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-center md:text-left">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">Dados 100% Protegidos</h5>
                    <p className="text-xs text-muted-foreground">Total confidencialidade garantida</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-center md:text-left">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm">Conteúdo Exclusivo</h5>
                    <p className="text-xs text-muted-foreground">Desenvolvido apenas para médicos</p>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">+500 médicos</strong> já receberam nossa análise personalizada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;