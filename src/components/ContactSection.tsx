import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Lock, Star, ArrowRight } from 'lucide-react';

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
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Descubra se sua especialidade se adequa ao Método M.E.D.D.
            </h2>
            <p className="text-xl text-gray-600">
              Receba uma análise personalizada da sua especialidade e veja como 
              outros médicos estão aplicando nossa metodologia.
            </p>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-base font-medium text-gray-700">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="mt-2 h-12"
                    placeholder="Dr. João Silva"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-medium text-gray-700">
                    Email Profissional *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-2 h-12"
                    placeholder="drjoao@clinica.com.br"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="whatsapp" className="text-base font-medium text-gray-700">
                    WhatsApp *
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    className="mt-2 h-12"
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="specialty" className="text-base font-medium text-gray-700">
                    Especialidade *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('specialty', value)}>
                    <SelectTrigger className="mt-2 h-12">
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

              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-white h-14 text-lg font-semibold group"
              >
                Solicitar Análise Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="w-5 h-5 text-secondary" />
                <span>Análise personalizada para sua especialidade</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Lock className="w-5 h-5 text-secondary" />
                <span>Dados 100% protegidos e confidenciais</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Star className="w-5 h-5 text-secondary" />
                <span>Conteúdo exclusivo para médicos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;