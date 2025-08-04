import React, { useState } from 'react';

import { 

  Heart, 

  GraduationCap, 

  Clock, 

  Award, 

  CheckCircle, 

  MessageCircle,

  Users,

  BookOpen,

  Stethoscope,

  PawPrint,

  Phone,

  Mail,

  Calendar,

  TrendingUp,

  Shield,

  Star,

  ChevronDown,

  ChevronUp

} from 'lucide-react';



// 1. Imports dos seus novos componentes (no lugar certo)

import CountdownTimer from './components/CountdownTimer';

import PurchaseNotifications from './components/PurchaseNotifications';



// Componente para o item do FAQ

interface FAQItemProps {

  question: string;

  answer: string;

}



const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {

  const [isOpen, setIsOpen] = useState(false);



  return (

    <div className="border border-gray-200 rounded-lg overflow-hidden">

      <button

        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center transition-colors"

        onClick={() => setIsOpen(!isOpen)}

      >

        <span className="font-medium text-gray-900">{question}</span>

        {isOpen ? (

          <ChevronUp className="h-5 w-5 text-emerald-600" />

        ) : (

          <ChevronDown className="h-5 w-5 text-emerald-600" />

        )}

      </button>

      {isOpen && (

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">

          <p className="text-gray-700">{answer}</p>

        </div>

      )}

    </div>

  );

};



// Componente para o botão do WhatsApp

const WhatsAppButton: React.FC = () => {

  const handleWhatsAppClick = () => {

    window.open('https://checkout.academiaead.com/checkout?product=325788f7-6e69-11f0-a3b6-46da4690ad53 ', '_blank');

  };



  return (

    <button

      onClick={handleWhatsAppClick}

      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center gap-2 group"

      aria-label="Fale conosco no WhatsApp"

    >

      <MessageCircle className="h-6 w-6" />

      <span className="hidden group-hover:block absolute right-16 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">

        Fale conosco no WhatsApp

      </span>

    </button>

  );

};



// Componente principal da Aplicação

function App() {

  const handleCTAClick = () => {

    window.open('https://wa.me/5592981183539?text=Olá! Quero me matricular no curso Técnico em Veterinária.', '_blank');

  };



  const benefits = [

    // ... (seus arrays de dados permanecem os mesmos) ...

    {

      icon: <Users className="h-8 w-8 text-emerald-600" />,

      title: "Alta empregabilidade",

      description: "Atue em clínicas, pet shops, fazendas, ONGs e setor público"

    },

    {

      icon: <TrendingUp className="h-8 w-8 text-emerald-600" />,

      title: "Mercado em crescimento",

      description: "Setor pet em plena expansão com baixa concorrência"

    },

    {

      icon: <Shield className="h-8 w-8 text-emerald-600" />,

      title: "Estabilidade profissional",

      description: "Certificação reconhecida pelo MEC e alta demanda"

    },

    {

      icon: <Heart className="h-8 w-8 text-emerald-600" />,

      title: "Realização pessoal",

      description: "Transforme seu amor pelos animais em profissão"

    }

  ];



  const moduleI = [

    "Introdução à EAD (50h)", "Empreendedorismo (60h)", "Bem-estar e Comportamento Animal (60h)",

    "Cultivo in vivo e in vitro de microrganismos (60h)", "Deontologia e Legislação Médica Veterinária (70h)",

    "Embriologia e Histologia Animal (70h)", "Epidemiologia Veterinária (60h)", "Genética Animal (60h)"

  ];



  const moduleII = [

    "Patologia Veterinária (70h)", "Fisiologia dos Sistemas Estruturais (70h)", 

    "Higiene Ocupacional e Prevenção de Riscos (60h)", "Imunologia Veterinária (40h)",

    "Microbiologia Veterinária (70h)", "Parasitologia Veterinária (60h)", "Estágio Supervisionado (140h)"

  ];



  const includes = [

    "Certificado nas normas do MEC", "Suporte diário via WhatsApp", "Acesso 24h à plataforma",

    "Aulas objetivas e práticas", "Professores especialistas na área"

  ];



  const faqs = [

    { question: "O curso é reconhecido?", answer: "Sim, o curso é totalmente reconhecido pelo MEC e pelos Conselhos de Educação, garantindo validade nacional do seu certificado." },

    { question: "Tem estágio obrigatório?", answer: "Sim, o curso inclui 140h de estágio supervisionado obrigatório, essencial para sua formação prática na área." },

    { question: "Preciso ter ensino médio completo?", answer: "Sim, é necessário ter o ensino médio completo para se matricular no curso técnico em veterinária." },

    { question: "O curso é totalmente online?", answer: "Sim, o curso é 100% EaD (Educação a Distância) com acesso 24h através do nosso Ambiente Virtual de Aprendizagem." },

    { question: "Quando posso começar?", answer: "Você pode começar imediatamente após a confirmação da matrícula. O acesso à plataforma é liberado no mesmo dia." }

  ];



  // O return da função App, que renderiza a página inteira

  return (

    <div className="min-h-screen bg-white">

      {/* Aqui dentro vai todo o seu JSX (HTML) da página */}

      

      {/* Hero Section */}

      <section className="relative py-20 px-4 overflow-hidden">

        {/* ... (todo o conteúdo da sua página) ... */}

        {/* ... */}

        <div 

          className="absolute inset-0 bg-cover bg-center bg-no-repeat"

          style={{

            backgroundImage: 'url("https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'

          }}

        ></div>

        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-emerald-800/70 to-emerald-700/80"></div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2236%22%20cy%3D%2224%22%20r%3D%224%22/%3E%3Ccircle%20cx%3D%224%22%20cy%3D%2244%22%20r%3D%222%22/%3E%3Ccircle%20cx%3D%2224%22%20cy%3D%224%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

        <div className="max-w-6xl mx-auto relative z-10">

          <div className="text-center mb-12">

            <div className="flex justify-center mb-6">

              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/30">

                <PawPrint className="h-12 w-12 text-white" />

              </div>

            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">

              Transforme seu amor pelos animais em uma 

              <span className="text-emerald-300"> carreira de sucesso!</span>

            </h1>

            <p className="text-xl md:text-2xl text-emerald-50 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md">

              Curso Técnico em Veterinária com certificado reconhecido pelo MEC e formação completa em até 12 meses.

            </p>

            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-3xl mx-auto mb-8 border border-white/20">

              <p className="text-lg text-gray-800 mb-4">

                Se você sonha em trabalhar com cuidados com animais e fazer a diferença na vida de pets e seus tutores, essa é a sua oportunidade.

              </p>

              <div className="flex items-center justify-center gap-4 text-emerald-600 font-semibold">

                <Star className="h-5 w-5" />

                <span>Matricule-se agora e comece hoje mesmo sua nova profissão!</span>

                <Star className="h-5 w-5" />

              </div>

            </div>

            <button

              onClick={handleCTAClick}

              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-3 border-2 border-emerald-400"

            >

              <GraduationCap className="h-6 w-6" />

              Matricule-se Agora

            </button>

          </div>

        </div>

      </section>



      {/* Benefits Section */}

      <section className="py-20 px-4 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">

              Benefícios e Oportunidades

            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">

              Descubra as vantagens de se formar em uma profissão em alta e com grande demanda no mercado

            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {benefits.map((benefit, index) => (

              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">

                <div className="mb-4">{benefit.icon}</div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>

                <p className="text-gray-600">{benefit.description}</p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* Methodology Section */}

      <section className="py-20 px-4 bg-white">

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">

                Metodologia e Formação

              </h2>

              <div className="space-y-6">

                <div className="flex items-start gap-4">

                  <div className="bg-emerald-100 p-2 rounded-lg flex-shrink-0">

                    <Clock className="h-6 w-6 text-emerald-600" />

                  </div>

                  <div>

                    <h3 className="font-semibold text-gray-900 mb-2">100% EaD com Acesso 24h</h3>

                    <p className="text-gray-600">Estude quando e onde quiser através do nosso Ambiente Virtual de Aprendizagem</p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="bg-emerald-100 p-2 rounded-lg flex-shrink-0">

                    <BookOpen className="h-6 w-6 text-emerald-600" />

                  </div>

                  <div>

                    <h3 className="font-semibold text-gray-900 mb-2">Material Completo</h3>

                    <p className="text-gray-600">Vídeos, materiais didáticos, tutoria e suporte via WhatsApp</p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="bg-emerald-100 p-2 rounded-lg flex-shrink-0">

                    <Calendar className="h-6 w-6 text-emerald-600" />

                  </div>

                  <div>

                    <h3 className="font-semibold text-gray-900 mb-2">Formação Rápida</h3>

                    <p className="text-gray-600">Complete sua formação entre 6 a 12 meses</p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="bg-emerald-100 p-2 rounded-lg flex-shrink-0">

                    <Stethoscope className="h-6 w-6 text-emerald-600" />

                  </div>

                  <div>

                    <h3 className="font-semibold text-gray-900 mb-2">1000h + Estágio</h3>

                    <p className="text-gray-600">Carga horária completa incluindo 140h de estágio supervisionado</p>

                  </div>

                </div>

              </div>

            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 rounded-2xl text-white">

              <h3 className="text-2xl font-bold mb-6">Por que escolher nosso curso?</h3>

              <ul className="space-y-4">

                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 flex-shrink-0" /><span>Certificação reconhecida pelo MEC</span></li>

                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 flex-shrink-0" /><span>Baixa concorrência + alta empregabilidade</span></li>

                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 flex-shrink-0" /><span>Setor pet em pleno crescimento</span></li>

                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 flex-shrink-0" /><span>Estabilidade + realização pessoal</span></li>

              </ul>

            </div>

          </div>

        </div>

      </section>



      {/* Curriculum Section */}

      <section className="py-20 px-4 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">

              Grade Curricular Completa

            </h2>

            <p className="text-xl text-gray-600">

              Formação abrangente com conteúdo atualizado e foco na prática profissional

            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-lg">

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">

                <div className="bg-emerald-100 p-2 rounded-lg"><BookOpen className="h-6 w-6 text-emerald-600" /></div> Módulo I - 490h/a

              </h3>

              <ul className="space-y-3">

                {moduleI.map((item, index) => (<li key={index} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{item}</span></li>))}

              </ul>

            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">

              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">

                <div className="bg-emerald-100 p-2 rounded-lg"><Stethoscope className="h-6 w-6 text-emerald-600" /></div> Módulo II - 510h/a

              </h3>

              <ul className="space-y-3">

                {moduleII.map((item, index) => (<li key={index} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{item}</span></li>))}

              </ul>

            </div>

          </div>

        </div>

      </section>

      

      {/* Certification Section */}

      <section className="py-20 px-4 bg-white">

        <div className="max-w-4xl mx-auto text-center">

          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-8 rounded-2xl text-white mb-12">

            <Award className="h-16 w-16 mx-auto mb-6" />

            <h2 className="text-3xl font-bold mb-4">Avaliação e Certificação</h2>

            <p className="text-xl mb-6">Certificação reconhecida pelo MEC para alunos com:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-white/10 p-4 rounded-lg"><div className="text-3xl font-bold mb-2">75%</div><div>de presença no AVA</div></div>

              <div className="bg-white/10 p-4 rounded-lg"><div className="text-3xl font-bold mb-2">Nota 6</div><div>mínima em cada disciplina</div></div>

            </div>

          </div>

          <div className="bg-gray-50 p-8 rounded-xl">

            <h3 className="text-2xl font-bold text-gray-900 mb-6">O que o curso inclui:</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

              {includes.map((item, index) => (

                <div key={index} className="flex items-center gap-3 text-left">

                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />

                  <span className="text-gray-700">{item}</span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>



      {/* Testimonials Section */}

      <section className="py-20 px-4 bg-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">

              O que nossos alunos dizem

            </h2>

            <p className="text-xl text-gray-600">

              Depoimentos reais de quem transformou sua paixão pelos animais em profissão

            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* ... Testimonials ... */}

          </div>

        </div>

      </section>



      {/* Pricing Section */}

      <section className="py-20 px-4 bg-emerald-600 text-white">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-8">

            Investimento Promocional

          </h2>

          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm mb-8">

            <div className="mb-6">

              <div className="text-2xl text-emerald-200 line-through mb-2">De R$ 1.297,00</div>

              <div className="text-5xl md:text-6xl font-bold mb-4">12x de R$ 87,90 </div>

              <div className="text-xl text-emerald-200">⏰ Valor promocional por tempo limitado!</div>

            </div>

            <div className="text-lg mb-6">

              💳 Parcelamento disponível no cartão

            </div>

            <button

              onClick={handleCTAClick}

              className="bg-white text-emerald-600 font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-3"

            >

              <GraduationCap className="h-6 w-6" />

              Matricule-se Agora

            </button>

          </div>

          <p className="text-emerald-100 text-lg">

            ✨ Transforme sua paixão pelos animais em uma profissão de sucesso!

          </p>

        </div>

      </section>



      {/* FAQ Section */}

      <section className="py-20 px-4 bg-gray-50">

        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">

              Perguntas Frequentes

            </h2>

            <p className="text-xl text-gray-600">

              Tire suas dúvidas sobre o curso

            </p>

          </div>

          <div className="space-y-4">

            {faqs.map((faq, index) => (

              <FAQItem key={index} question={faq.question} answer={faq.answer} />

            ))}

          </div>

        </div>

      </section>



      {/* Final CTA Section */}

      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">

            Pronto para começar sua nova carreira?

          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">

            Não perca esta oportunidade única de se formar em uma profissão em alta, com certificação reconhecida pelo MEC e suporte completo.

          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            <button

              onClick={handleCTAClick}

              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center gap-3"

            >

              <GraduationCap className="h-6 w-6" />

              Matricule-se Agora

            </button>

            <div className="flex items-center gap-3 text-gray-300">

              <Phone className="h-5 w-5" />

              <span>Ou fale conosco no WhatsApp</span>

            </div>

          </div>

        </div>

      </section>



      {/* 2. Chamada dos seus componentes (dentro do return principal, antes de fechar a div) */}

      <CountdownTimer className="fixed bottom-36 md:bottom-24 left-6 z-50" />

      <PurchaseNotifications />

      <WhatsAppButton />



    </div> // Fim da div principal

  ); // Fim do return da função App

}



export default App;