import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Por que escolher o M.E.D.D. para impulsionar meu consultório?",
      answer: (
        <div className="space-y-4">
          <p>
            O M.E.D.D. é o único sistema integrado que combina Estratégia, Conteúdo e Automação Inteligente para médicos.
          </p>
          <p>
            Diferente de agências que entregam serviços soltos (posts, tráfego ou sites isolados), nós construímos toda a base de autoridade, atraímos pacientes certos e automatizamos a qualificação de leads 24/7.
          </p>
          <p className="text-primary font-semibold">
            👉 Resultado: previsibilidade, crescimento sustentável e menos dependência de convênios e plantões.
          </p>
        </div>
      )
    },
    {
      question: "Quais estratégias o M.E.D.D. utiliza para atrair pacientes qualificados?",
      answer: (
        <div className="space-y-4">
          <p>Nosso sistema conecta todas as etapas do marketing médico:</p>
          <ul className="space-y-2 ml-4">
            <li>• <strong>Arquitetura de marca</strong> → posicionamento premium e autoridade digital.</li>
            <li>• <strong>Landing page profissional</strong> → estética e copy magnética para conversão.</li>
            <li>• <strong>Conteúdo estratégico</strong> → posts semanais que atraem apenas pacientes certos.</li>
            <li>• <strong>Tráfego pago inteligente</strong> → alcance diário para ampliar visibilidade.</li>
            <li>• <strong>Funil de conversão</strong> → leva o paciente do primeiro contato ao agendamento.</li>
            <li>• <strong>Automação com IA</strong> → responde e qualifica leads 24/7, até enquanto você dorme.</li>
          </ul>
        </div>
      )
    },
    {
      question: "Quais resultados posso esperar com o M.E.D.D.?",
      answer: (
        <div className="space-y-4">
          <p>Nossos clientes têm conquistado resultados como:</p>
          <ul className="space-y-2 ml-4">
            <li>• Aumento do ticket médio em até 200% em 60 dias.</li>
            <li>• Redução de até 80% da dependência de convênios em 3 meses.</li>
            <li>• Crescimento de 3 a 5x no faturamento em até 9 meses.</li>
            <li>• Maior previsibilidade de receita e agenda.</li>
            <li>• Mais tempo livre, já que a IA assume grande parte do processo comercial.</li>
          </ul>
        </div>
      )
    },
    {
      question: "Qual o diferencial do M.E.D.D. em relação a outras soluções?",
      answer: (
        <div className="space-y-4">
          <p>
            Enquanto agências vendem tráfego pago e posts genéricos, o M.E.D.D. entrega um sistema completo e exclusivo para médicos.
          </p>
          <p>
            Nossa metodologia respeita as regras do marketing médico e une estratégia, tecnologia e automação em um único fluxo.
          </p>
          <p className="text-primary font-semibold">
            👉 Não é "mais marketing", é crescimento previsível para médicos que querem se posicionar como referência.
          </p>
        </div>
      )
    },
    {
      question: "Qual o prazo para implantar o M.E.D.D.?",
      answer: (
        <div className="space-y-4">
          <p>
            Em até 30 dias você já terá sua marca estruturada, página no ar, conteúdo publicado e automação iniciada.
          </p>
          <p>
            A partir daí, começamos a escalar resultados mês a mês, sempre com acompanhamento estratégico contínuo.
          </p>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dúvidas Frequentes sobre o <span className="text-primary">M.E.D.D.</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Esclarecemos as principais questões sobre nossa metodologia
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card hover:bg-card/80 transition-colors"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {index + 1}) {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;