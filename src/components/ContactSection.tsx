import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Lock, Star } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    specialty: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log('Form data:', formData);
    alert('Análise solicitada! Entraremos em contato em breve.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contato" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Descubra Se Sua Especialidade Se Adequa ao Método M.E.D.D.
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Receba uma análise personalizada da sua especialidade e veja como 
              outros médicos estão aplicando nossa metodologia.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base font-medium">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-2 h-12"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-base font-medium">
                  Email Profissional *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-2 h-12"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="whatsapp" className="text-base font-medium">
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
                <Label htmlFor="specialty" className="text-base font-medium">
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

              <Button
                type="submit"
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-14 text-lg font-semibold shadow-glow"
              >
                SOLICITAR ANÁLISE GRATUITA
              </Button>
            </form>

            {/* Garantias */}
            <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-secondary" />
                <span>Análise personalizada para sua especialidade</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Lock className="w-5 h-5 text-secondary" />
                <span>Dados 100% protegidos e confidenciais</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
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