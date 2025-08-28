import { Mail, MapPin, Shield, Award, Users, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="text-3xl font-bold">M.E.D.D.</div>
            </div>
            
            <p className="text-xl font-medium mb-6 text-gray-300">
              Consultoria Premium para Médicos de Elite
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Transformamos médicos competentes em autoridades digitais com fluxo 
              previsível de pacientes particulares. Nossa metodologia exclusiva já 
              ajudou centenas de profissionais a conquistarem independência financeira 
              e reconhecimento no mercado.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-3">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">+500</div>
                <div className="text-sm text-gray-400">Médicos Transformados</div>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-3">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">300%</div>
                <div className="text-sm text-gray-400">Crescimento Médio</div>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-3">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary">90</div>
                <div className="text-sm text-gray-400">Dias para Resultados</div>
              </div>
            </div>
          </div>

          {/* Contact & Info */}
          <div className="lg:col-span-4">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">Entre em Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">Endereço Principal</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Av Paulista, 1439 Conj 12<br />
                    Bela Vista - São Paulo/SP<br />
                    CEP: 01310-100
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">Email Comercial</h4>
                  <p className="text-gray-400">
                    <a 
                      href="mailto:suporte@geniumed.ai" 
                      className="hover:text-secondary transition-colors underline decoration-2 underline-offset-4"
                    >
                      suporte@geniumed.ai
                    </a>
                  </p>
                  <p className="text-gray-400 mt-2 text-sm">
                    Respondemos em até 2 horas úteis
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">Atendimento</h4>
                  <p className="text-gray-400">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-gray-400 text-sm">Horário de Brasília</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Column */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Pronto Para Começar?</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Solicite sua análise gratuita e descubra como transformar 
                sua prática médica em 90 dias.
              </p>
              <Button 
                onClick={scrollToContact}
                className="w-full bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white px-6 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all group"
              >
                Quero atrair pacientes premium
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm mb-2">
                © 2024 M.E.D.D. - Metodologia Exclusiva para Desenvolvimento de Doutores
              </p>
              <p className="text-gray-500 text-xs">
                Todos os direitos reservados. Desenvolvido especialmente para médicos brasileiros.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </button>
              <div className="flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-secondary" />
                <span className="text-gray-400 text-xs">Site Seguro SSL</span>
              </div>
            </div>
          </div>
          
          {/* Legal Notice */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center leading-relaxed max-w-5xl mx-auto">
              <strong>Aviso Legal:</strong> Os resultados apresentados são baseados em casos reais de clientes, 
              mas não garantimos que todos os médicos terão os mesmos resultados. O sucesso depende de diversos 
              fatores incluindo dedicação, aplicação da metodologia e características do mercado local. 
              Este site não substitui consulta médica ou orientação profissional. M.E.D.D. é uma marca registrada.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;