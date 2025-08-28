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
    <section id="contato" className="py-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl mb-8 shadow-xl animate-scale-in">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          
          
          
        </div>

        {/* Form Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl"></div>
          <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                Agende uma reunião agora e sai na frente dos seus concorrentes
              </h3>
              <p className="text-gray-600 text-base sm:text-lg">
                Preencha os dados abaixo e receba sua análise em até 24h
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-base font-semibold text-gray-900">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="h-12 sm:h-14 text-base border-2 focus:border-primary rounded-2xl transition-all"
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
                    className="h-12 sm:h-14 text-base border-2 focus:border-primary rounded-2xl transition-all"
                    placeholder="drjoao@clinica.com.br"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-3">
                  <Label htmlFor="whatsapp" className="text-base font-semibold text-gray-900">
                    WhatsApp *
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    className="h-12 sm:h-14 text-base border-2 focus:border-primary rounded-2xl transition-all"
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="specialty" className="text-base font-semibold text-gray-900">
                    Especialidade *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('specialty', value)}>
                    <SelectTrigger className="h-12 sm:h-14 text-base border-2 focus:border-primary rounded-2xl transition-all">
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
                  className="w-full bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white h-14 sm:h-16 text-base sm:text-lg font-bold shadow-xl rounded-2xl group transition-all hover:scale-[1.02]"
                >
                  Quero atrair pacientes premium
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;