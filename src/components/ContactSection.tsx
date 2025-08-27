import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Lock, Star, ArrowRight, CheckCircle, Sparkles, Users } from 'lucide-react';

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
    alert('✅ Análise solicitada com sucesso! Nossa equipe entrará em contato em até 24h.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl mb-8 shadow-xl animate-scale-in">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Descubra se sua especialidade{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              se adequa ao Método M.E.D.D.
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Receba uma análise personalizada e detalhada da sua especialidade. 
            Veja exatamente como outros médicos estão aplicando nossa metodologia.
          </p>
          
          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-secondary" />
              </div>
              <h4 className="font-bold mb-2 text-gray-900">Análise Gratuita</h4>
              <p className="text-sm text-gray-600">Totalmente personalizada para sua especialidade</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-bold mb-2 text-gray-900">100% Confidencial</h4>
              <p className="text-sm text-gray-600">Seus dados protegidos com total segurança</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-7 h-7 text-secondary" />
              </div>
              <h4 className="font-bold mb-2 text-gray-900">Exclusivo para Médicos</h4>
              <p className="text-sm text-gray-600">Conteúdo desenvolvido especialmente</p>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl"></div>
          <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                Agende uma reunião agora e sai na frente dos seus concorrentes
              </h3>
              <p className="text-gray-600 text-lg">
                Preencha os dados abaixo e receba sua análise em até 24h
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-base font-semibold text-gray-900">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="h-14 text-base border-2 focus:border-primary rounded-2xl transition-all"
                    placeholder="Dr. João Silva"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-base font-semibold text-gray-900">
                    Email Profissional *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="h-14 text-base border-2 focus:border-primary rounded-2xl transition-all"
                    placeholder="drjoao@clinica.com.br"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="whatsapp" className="text-base font-semibold text-gray-900">
                    WhatsApp *
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    className="h-14 text-base border-2 focus:border-primary rounded-2xl transition-all"
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="specialty" className="text-base font-semibold text-gray-900">
                    Especialidade *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('specialty', value)}>
                    <SelectTrigger className="h-14 text-base border-2 focus:border-primary rounded-2xl transition-all">
                      <SelectValue placeholder="Selecione sua especialidade" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 rounded-xl shadow-xl z-50">
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

              <div className="pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white h-16 text-lg font-bold shadow-xl rounded-2xl group transition-all hover:scale-[1.02]"
                >
                  Solicitar Análise Gratuita
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-3 text-center md:text-left">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-gray-900">Análise Personalizada</h5>
                  <p className="text-xs text-gray-600">Para sua especialidade específica</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-center md:text-left">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-gray-900">Dados 100% Protegidos</h5>
                  <p className="text-xs text-gray-600">Total confidencialidade garantida</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-center md:text-left">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-gray-900">Conteúdo Exclusivo</h5>
                  <p className="text-xs text-gray-600">Desenvolvido apenas para médicos</p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <Users className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">+500 médicos</strong> já receberam nossa análise personalizada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;