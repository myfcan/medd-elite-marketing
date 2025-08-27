const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">M.E.D.D.</div>
            <p className="text-primary-foreground/80 text-lg mb-4">
              Metodologia exclusiva para médicos que querem sair dos convênios 
              e construir uma prática médica lucrativa e sustentável.
            </p>
            <p className="text-primary-foreground/60">
              Transformando médicos competentes em autoridades digitais 
              com fluxo previsível de pacientes particulares.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p className="text-sm">
                Av Paulista, 1439 Conj 12<br />
                São Paulo Capital
              </p>
              <p className="text-sm">
                <a 
                  href="mailto:suporte@medd.ai" 
                  className="hover:text-secondary transition-colors"
                >
                  suporte@medd.ai
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 M.E.D.D. Todos os direitos reservados. | Desenvolvido especialmente para médicos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;