import { Mail, MapPin, Shield, Award, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <div className="text-4xl font-bold font-serif mb-4">M.E.D.D.</div>
              <p className="text-xl font-medium mb-6 opacity-90">
                Consultoria Premium para Médicos de Elite
              </p>
              <p className="text-secondary-foreground/80 text-lg leading-relaxed mb-8">
                Transformamos médicos competentes em autoridades digitais com fluxo 
                previsível de pacientes particulares. Nossa metodologia exclusiva já 
                ajudou centenas de profissionais a conquistarem independência financeira 
                e reconhecimento no mercado.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold">+500</div>
                <div className="text-sm opacity-80">Médicos Transformados</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold">300%</div>
                <div className="text-sm opacity-80">Crescimento Médio</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold">9</div>
                <div className="text-sm opacity-80">Meses Médios</div>
              </div>
            </div>
          </div>

          {/* Contact & Info */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold font-serif mb-8">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary-foreground/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Endereço Principal</h4>
                  <p className="opacity-80 leading-relaxed">
                    Av Paulista, 1439 Conj 12<br />
                    Bela Vista - São Paulo/SP<br />
                    CEP: 01310-100
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary-foreground/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contato Comercial</h4>
                  <p className="opacity-80">
                    <a 
                      href="mailto:suporte@medd.ai" 
                      className="hover:opacity-100 transition-opacity underline decoration-2 underline-offset-4"
                    >
                      suporte@medd.ai
                    </a>
                  </p>
                  <p className="opacity-80 mt-2 text-sm">
                    Respondemos em até 2 horas úteis
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Column */}
          <div className="lg:col-span-3">
            <div className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-3xl p-8">
              <h3 className="text-xl font-bold font-serif mb-4">Pronto Para Começar?</h3>
              <p className="text-sm opacity-80 mb-6 leading-relaxed">
                Solicite sua análise gratuita e descubra como transformar 
                sua prática médica em 90 dias.
              </p>
              <button className="w-full bg-secondary-foreground text-secondary px-6 py-4 rounded-2xl font-semibold hover:opacity-90 transition-opacity shadow-lg">
                Solicitar Análise
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/20">
        <div className="container mx-auto px-4 lg:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-secondary-foreground/70 text-sm">
                © 2024 M.E.D.D. - Metodologia Exclusiva para Desenvolvimento de Doutores
              </p>
              <p className="text-secondary-foreground/60 text-xs mt-1">
                Todos os direitos reservados. Desenvolvido especialmente para médicos brasileiros.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                Política de Privacidade
              </button>
              <button className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                Termos de Uso
              </button>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="text-secondary-foreground/70">Site Seguro</span>
              </div>
            </div>
          </div>
          
          {/* Legal Notice */}
          <div className="mt-8 pt-8 border-t border-secondary-foreground/10">
            <p className="text-xs text-secondary-foreground/60 text-center leading-relaxed max-w-4xl mx-auto">
              <strong>Aviso Legal:</strong> Os resultados apresentados são baseados em casos reais de clientes, 
              mas não garantimos que todos os médicos terão os mesmos resultados. O sucesso depende de diversos 
              fatores incluindo dedicação, aplicação da metodologia e características do mercado local. 
              Este site não substitui consulta médica ou orientação profissional.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;