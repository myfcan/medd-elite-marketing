import { Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import drFelipeImage from '@/assets/dr-felipe-rodrigues.jpg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Ricardo Tavares",
      specialty: "Ortopedista",
      location: "Rio de Janeiro",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "O M.E.D.D. transformou completamente minha prática. Em 8 meses, tripleiquei o valor das minhas cirurgias e construí uma agenda de pacientes premium. A metodologia é realmente diferenciada.",
      highlight: "Triplicou valor das cirurgias em 8 meses"
    },
    {
      id: 2,
      name: "Dr. Marina Santos",
      specialty: "Dermatologista",
      location: "São Paulo",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Antes do M.E.D.D., dependia 100% de convênios. Hoje, 90% dos meus pacientes são particulares pagando valores premium. A autoridade digital que construí mudou tudo na minha carreira.",
      highlight: "90% pacientes particulares premium"
    },
    {
      id: 3,
      name: "Dr. Felipe Rodrigues",
      specialty: "Cardiologista",
      location: "Brasília",
      avatar: drFelipeImage,
      rating: 5,
      testimonial: "O método me posicionou como referência em cardiologia preventiva. Minha consulta saltou de R$ 400 para R$ 1.200, e tenho lista de espera de 3 meses. Resultados que nem imaginava.",
      highlight: "Consulta de R$ 400 para R$ 1.200"
    },
    {
      id: 4,
      name: "Dr. Amanda Costa",
      specialty: "Ginecologista",
      location: "Belo Horizonte",
      avatar: "https://images.unsplash.com/photo-1594824720207-85d4b2ec06e8?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: "Saí da invisibilidade para ser reconhecida nacionalmente. O M.E.D.D. me deu as ferramentas para construir autoridade real. Hoje, pacientes vêm de outros estados só para me consultar.",
      highlight: "Reconhecimento nacional na especialidade"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Avaliações e Satisfação dos{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Médicos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 500 médicos já transformaram suas carreiras com o método M.E.D.D. 
            Veja o que eles falam sobre os resultados reais obtidos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                {/* Avatar with Golden Ring */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto relative">
                    {/* Golden ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 p-1">
                      <div className="w-full h-full rounded-full bg-white p-1">
                        <Avatar className="w-full h-full">
                          <AvatarImage 
                            src={testimonial.avatar} 
                            alt={`Foto do ${testimonial.name}`}
                            className="object-cover"
                          />
                          <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-white font-bold">
                            {testimonial.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Doctor Info */}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    {testimonial.specialty}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.location}
                  </p>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-sm text-gray-700 leading-relaxed mb-6 text-center">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Highlight Badge */}
                <div className="text-center">
                  <span className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-semibold px-3 py-2 rounded-full text-xs border border-primary/20">
                    {testimonial.highlight}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Junte-se aos médicos que já transformaram suas carreiras
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              O método M.E.D.D. já ajudou centenas de médicos a construir autoridade, 
              atrair pacientes premium e multiplicar seus resultados financeiros.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm font-semibold text-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span>+500 médicos transformados</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span>Resultados em 90 dias</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span>Suporte especializado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;