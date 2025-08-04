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

// Componente para o botão do WhatsApp (sem alterações)
const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5592981183539?text=Olá! Gostaria de saber mais sobre o curso Técnico em Veterinária.', '_blank');
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
    // LINK DE CHECKOUT ALTERADO AQUI!
    window.open('https://checkout.academiaead.com/checkout?product=325788f7-6e69-11f0-a3b6-46da4690ad53', '_blank');
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
                <p className="text-gray-