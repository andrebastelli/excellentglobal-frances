export interface Testimonial {
  name: string;
  role: string;
  text: string;
  result: string;
  initials: string;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Fernanda Lima',
    role: 'Analista de TI · Limeira/SP',
    text: 'Eu travava completamente nas reuniões com clientes internacionais. Em 4 meses na Excellent Global, conduzi minha primeira call em francês sozinha. Meu chefe percebeu e recebi uma promoção logo depois.',
    result: 'Promoção em 4 meses',
    initials: 'FL',
    color: 'bg-brand-blue',
  },
  {
    name: 'Ricardo Souza',
    role: 'Gerente Comercial · Americana/SP',
    text: 'Tentei vários aplicativos e cursos online, mas sempre desistia. Aqui o método de conversação desde a primeira aula mudou tudo. Viajei para os EUA em agosto e me virei muito bem.',
    result: 'Viagem tranquila para os EUA',
    initials: 'RS',
    color: 'bg-brand-yellow',
  },
  {
    name: 'Camila Torres',
    role: 'Estudante de Engenharia · Limeira/SP',
    text: 'Fiz a aula grátis sem acreditar muito. Dois anos depois, estou no intercâmbio no Canadá. A Excellent Global foi o ponto de virada. Não tenho palavras para agradecer.',
    result: 'Intercâmbio no Canadá',
    initials: 'CT',
    color: 'bg-brand-dark',
  },
];
