import { useState } from "react";
import { TerramadeiraLogo } from "./components/Logo";
import svgPaths from "../imports/svg-s7zq7v5of2";
import imgImage1739 from "figma:asset/1b22517f41ca790b54614d0493a6590fef4e47a7.png";
import imgImage1740 from "figma:asset/903619d8a90db1273f671f35cc957e2d0d8b2779.png";
import imgImage1745 from "figma:asset/06e4c31fe1a977c5f732681f5de2bfd762795746.png";
import imgImage1746 from "figma:asset/53f60a66bfe254e0b49522fd5afb1b1f9274688f.png";
import imgImage1750 from "figma:asset/da79c610e7c8fcbfce217fd01795a2e27e63e54a.png";

function WoodGrainDecor({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376 426.982">
        <g>
          <path clipRule="evenodd" d={svgPaths.p35287380} fill="#BD9E81" fillRule="evenodd" />
          <path d={svgPaths.p3516b00} fill="#BD9E81" />
          <path d={svgPaths.p1b489700} fill="#BD9E81" />
          <path d={svgPaths.pea0e000} fill="#646A4E" />
          <path clipRule="evenodd" d={svgPaths.p3de55f00} fill="#646A4E" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Obrigado! Entraremos em contato em breve para discutir seu projeto.");
    setFormData({ name: "", email: "", phone: "", project: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#ead4c1] overflow-x-hidden">
      {/* Decorative wood grain patterns - hidden on mobile */}
      <WoodGrainDecor className="hidden lg:block fixed -left-28 top-10 h-[427px] w-[376px] opacity-20 pointer-events-none animate-[float_20s_ease-in-out_infinite]" />
      <WoodGrainDecor className="hidden lg:block fixed -right-20 top-[30%] h-[427px] w-[376px] opacity-15 pointer-events-none animate-[float_25s_ease-in-out_infinite_reverse]" />
      <WoodGrainDecor className="hidden lg:block fixed left-[45%] bottom-20 h-[427px] w-[376px] opacity-10 pointer-events-none animate-[float_30s_ease-in-out_infinite]" />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5531993059079"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group"
        aria-label="Fale conosco no WhatsApp"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
          <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300">
            <svg className="w-7 h-7 md:w-9 md:h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
        </div>
      </a>

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:min-h-screen lg:flex lg:items-center lg:justify-center px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-[slideInLeft_1s_ease-out]">
            <div className="transform hover:scale-105 transition-transform duration-500 scale-75 md:scale-90 lg:scale-100 origin-left">
              <TerramadeiraLogo />
            </div>
            <h1 className="font-['Oxanium'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#473a32] leading-tight">
              Móveis únicos,{" "}
              <span className="italic opacity-70">feitos sob medida</span>
            </h1>
            <p className="font-['Outfit'] text-base sm:text-lg md:text-xl text-[#646a4e] leading-relaxed max-w-lg">
              Transformamos materiais de reuso em peças exclusivas de mobiliário. Cada projeto é uma história, cada peça é única.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#473a32] text-[#ead4c1] px-6 sm:px-8 py-3 sm:py-4 font-['Oxanium'] font-medium hover:bg-[#646a4e] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-center"
              >
                Fazer Encomenda
              </button>
              <button
                onClick={() => document.getElementById("processo")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-[#473a32] text-[#473a32] px-6 sm:px-8 py-3 sm:py-4 font-['Oxanium'] font-medium hover:bg-[#473a32] hover:text-[#ead4c1] transition-all duration-300 text-center"
              >
                Nosso Processo
              </button>
            </div>
          </div>

          <div className="relative animate-[slideInRight_1s_ease-out] mt-8 lg:mt-0">
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-[#bd9e81] opacity-30 blur-3xl rounded-full"></div>
              <img
                src={imgImage1745}
                alt="Móvel artesanal"
                className="relative w-full h-full object-cover rounded-sm shadow-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#bd9e81]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#ead4c1] via-transparent to-[#ead4c1] opacity-30"></div>
        <div className="max-w-7xl mx-auto relative">
             <h2 className="font-['Oxanium'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#473a32] mb-10 md:mb-16 text-center">Diferenciais da <span className="italic opacity-70">terramadeira</span></h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            
            <div className="group p-6 md:p-8 bg-[#ead4c1]/50 backdrop-blur-sm hover:bg-[#ead4c1]/80 transition-all duration-500 hover:-translate-y-2 animate-[fadeIn_1s_ease-out_0.2s_both]">
              <h3 className="font-['Oxanium'] font-semibold text-xl md:text-2xl text-[#473a32] mb-3 md:mb-4 tracking-wide">
                Sustentabilidade
              </h3>
              <p className="font-['Outfit'] text-sm md:text-base text-[#646a4e] leading-relaxed">
                Trabalhamos principalmente com materiais de reuso, dando nova vida a madeiras nobres e criando peças com história e caráter único.
              </p>
            </div>

            <div className="group p-6 md:p-8 bg-[#ead4c1]/50 backdrop-blur-sm hover:bg-[#ead4c1]/80 transition-all duration-500 hover:-translate-y-2 animate-[fadeIn_1s_ease-out_0.4s_both]">
              <h3 className="font-['Oxanium'] font-semibold text-xl md:text-2xl text-[#473a32] mb-3 md:mb-4 tracking-wide">
                Sob Encomenda
              </h3>
              <p className="font-['Outfit'] text-sm md:text-base text-[#646a4e] leading-relaxed">
                Cada móvel é projetado exclusivamente para você. Não trabalhamos com estoque - apenas peças personalizadas que atendem suas necessidades.
              </p>
            </div>

            <div className="group p-6 md:p-8 bg-[#ead4c1]/50 backdrop-blur-sm hover:bg-[#ead4c1]/80 transition-all duration-500 hover:-translate-y-2 animate-[fadeIn_1s_ease-out_0.6s_both] sm:col-span-2 md:col-span-1">
              <h3 className="font-['Oxanium'] font-semibold text-xl md:text-2xl text-[#473a32] mb-3 md:mb-4 tracking-wide">
                Artesanato
              </h3>
              <p className="font-['Outfit'] text-sm md:text-base text-[#646a4e] leading-relaxed">
                Técnicas tradicionais de marcenaria combinadas com design contemporâneo. Elegância atemporal em cada detalhe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Oxanium'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#473a32] mb-10 md:mb-16 text-center">Nossos Trabalhos</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="group relative aspect-square overflow-hidden animate-[fadeIn_1s_ease-out_0.3s_both]">
              <img
                src={imgImage1739}
                alt="Projeto de mobiliário"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#bd9e81] mix-blend-soft-light opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>

            <div className="group relative aspect-square overflow-hidden animate-[fadeIn_1s_ease-out_0.4s_both]">
              <img
                src={imgImage1740}
                alt="Projeto de mobiliário"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#bd9e81] mix-blend-soft-light opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>

            <div className="group relative aspect-square overflow-hidden animate-[fadeIn_1s_ease-out_0.5s_both]">
              <img
                src={imgImage1746}
                alt="Projeto de mobiliário"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#bd9e81] mix-blend-soft-light opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>

            <div className="group relative aspect-square overflow-hidden lg:col-span-2 animate-[fadeIn_1s_ease-out_0.6s_both]">
              <img
                src={imgImage1750}
                alt="Projeto de mobiliário"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#bd9e81] mix-blend-soft-light opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>

            <div className="group relative aspect-square overflow-hidden animate-[fadeIn_1s_ease-out_0.7s_both]">
              <img
                src={imgImage1745}
                alt="Projeto de mobiliário"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#bd9e81] mix-blend-soft-light opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="processo" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#646a4e]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-['Oxanium'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#ead4c1] mb-10 md:mb-16 lg:mb-20 text-center">
            Como Trabalhamos
          </h2>

          <div className="space-y-8 md:space-y-12">
            <div className="flex gap-4 sm:gap-6 md:gap-8 items-start group animate-[slideInLeft_1s_ease-out]">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#bd9e81] flex items-center justify-center font-['Oxanium'] font-bold text-xl md:text-2xl text-[#473a32] group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-['Outfit'] font-semibold text-lg sm:text-xl md:text-2xl text-[#ead4c1] mb-2 md:mb-3">
                  Conversa Inicial
                </h3>
                <p className="font-['Outfit'] text-sm md:text-base text-[#ead4c1]/80 leading-relaxed">
                  Entre em contato conosco para discutir sua ideia. Entendemos suas necessidades, espaço e estilo.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6 md:gap-8 items-start group animate-[slideInRight_1s_ease-out]">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#bd9e81] flex items-center justify-center font-['Oxanium'] font-bold text-xl md:text-2xl text-[#473a32] group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-['Outfit'] font-semibold text-lg sm:text-xl md:text-2xl text-[#ead4c1] mb-2 md:mb-3">
                  Projeto Personalizado
                </h3>
                <p className="font-['Outfit'] text-sm md:text-base text-[#ead4c1]/80 leading-relaxed">
                  Criamos um projeto exclusivo para você, considerando medidas, materiais disponíveis e acabamentos.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6 md:gap-8 items-start group animate-[slideInLeft_1s_ease-out]">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#bd9e81] flex items-center justify-center font-['Oxanium'] font-bold text-xl md:text-2xl text-[#473a32] group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-['Outfit'] font-semibold text-lg sm:text-xl md:text-2xl text-[#ead4c1] mb-2 md:mb-3">
                  Produção Artesanal
                </h3>
                <p className="font-['Outfit'] text-sm md:text-base text-[#ead4c1]/80 leading-relaxed">
                  Cada peça é trabalhada com cuidado em nossa oficina, respeitando a característica única de cada material.
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6 md:gap-8 items-start group animate-[slideInRight_1s_ease-out]">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#bd9e81] flex items-center justify-center font-['Oxanium'] font-bold text-xl md:text-2xl text-[#473a32] group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <div className="flex-1">
                <h3 className="font-['Outfit'] font-semibold text-lg sm:text-xl md:text-2xl text-[#ead4c1] mb-2 md:mb-3">
                  Entrega e Instalação
                </h3>
                <p className="font-['Outfit'] text-sm md:text-base text-[#ead4c1]/80 leading-relaxed">
                  Entregamos e instalamos seu móvel com todo cuidado, garantindo que fique perfeito em seu espaço.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#ead4c1] to-[#f0e8dd]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-['Oxanium'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#473a32] mb-4 md:mb-6">
              Entre em Contato
            </h2>
            <p className="font-['Outfit'] text-base md:text-lg text-[#646a4e] max-w-2xl mx-auto px-4">
              Escolha a melhor forma de conversar com a gente sobre seu projeto
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <a
              href="https://wa.me/5531993059079"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 md:p-8 bg-white/60 backdrop-blur-sm hover:bg-[#25D366]/10 border-2 border-[#bd9e81] hover:border-[#25D366] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:col-span-2 lg:col-span-1"
            >
              <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-['Oxanium'] font-semibold text-lg md:text-xl text-[#473a32] mb-1 md:mb-2">
                    WhatsApp
                  </h3>
                  <p className="font-['Outfit'] text-[#646a4e] text-xs md:text-sm mb-1 md:mb-2">
                    Resposta rápida
                  </p>
                  
                </div>
              </div>
            </a>

            <a
              href="mailto:contato@terramadeira.com.br"
              className="group p-6 md:p-8 bg-white/60 backdrop-blur-sm hover:bg-[#bd9e81]/10 border-2 border-[#bd9e81] hover:border-[#646a4e] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#646a4e] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-['Oxanium'] font-semibold text-lg md:text-xl text-[#473a32] mb-1 md:mb-2">
                    Email
                  </h3>
                  <p className="font-['Outfit'] text-[#646a4e] text-xs md:text-sm mb-1 md:mb-2">
                    Envie detalhes do projeto
                  </p>
                  <p className="font-['Outfit'] text-xs sm:text-sm md:text-base text-[#473a32] font-medium break-all px-2">terramadeira@gmail.com</p>
                </div>
              </div>
            </a>

            
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-['Oxanium'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#473a32] mb-4 md:mb-6">
              Faça sua Encomenda
            </h2>
            <p className="font-['Outfit'] text-base md:text-lg text-[#646a4e] max-w-2xl mx-auto px-4">
              Preencha o formulário abaixo e entraremos em contato para iniciar seu projeto personalizado.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6 animate-[fadeIn_1s_ease-out]">
            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              <div>
                <label htmlFor="name" className="block font-['Outfit'] font-medium text-sm md:text-base text-[#473a32] mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-white/50 border-2 border-[#bd9e81] focus:border-[#646a4e] focus:outline-none transition-colors font-['Outfit']"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-['Outfit'] font-medium text-sm md:text-base text-[#473a32] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-white/50 border-2 border-[#bd9e81] focus:border-[#646a4e] focus:outline-none transition-colors font-['Outfit']"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              <div>
                <label htmlFor="phone" className="block font-['Outfit'] font-medium text-sm md:text-base text-[#473a32] mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-white/50 border-2 border-[#bd9e81] focus:border-[#646a4e] focus:outline-none transition-colors font-['Outfit']"
                />
              </div>

              <div>
                <label htmlFor="project" className="block font-['Outfit'] font-medium text-sm md:text-base text-[#473a32] mb-2">
                  Tipo de Projeto *
                </label>
                <select
                  id="project"
                  name="project"
                  required
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-white/50 border-2 border-[#bd9e81] focus:border-[#646a4e] focus:outline-none transition-colors font-['Outfit']"
                >
                  <option value="">Selecione...</option>
                  <option value="mesa">Mesa</option>
                  <option value="estante">Estante</option>
                  <option value="armario">Armário</option>
                  <option value="cadeira">Cadeira/Banco</option>
                  <option value="rack">Rack/Aparador</option>
                  <option value="cama">Cama/Cabeceira</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block font-['Outfit'] font-medium text-sm md:text-base text-[#473a32] mb-2">
                Descreva seu Projeto *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Conte-nos sobre suas ideias, medidas desejadas, estilo preferido..."
                className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base bg-white/50 border-2 border-[#bd9e81] focus:border-[#646a4e] focus:outline-none transition-colors font-['Outfit'] resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#473a32] text-[#ead4c1] px-8 md:px-12 py-3 md:py-4 font-['Outfit'] font-semibold text-base md:text-lg hover:bg-[#646a4e] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                Enviar Solicitação
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2f2e2a] text-[#ead4c1] py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-4 opacity-80 scale-75 md:scale-90 origin-left">
                <TerramadeiraLogo />
              </div>
              <p className="font-['Outfit'] text-[#ead4c1]/70 text-xs md:text-sm">
                Móveis artesanais sob encomenda com materiais de reuso.
              </p>
            </div>

            <div>
              <h4 className="font-['Oxanium'] font-semibold text-base md:text-lg mb-3 md:mb-4 tracking-wide">
                Contato
              </h4>
              <div className="space-y-2 font-['Outfit'] text-xs md:text-sm text-[#ead4c1]/70">
                <p className="break-all">Email: terramadeira@gmail.com</p>
                
                <p>WhatsApp</p>
              </div>
            </div>

            <div>
              <h4 className="font-['Oxanium'] font-semibold text-base md:text-lg mb-3 md:mb-4 tracking-wide">
                Horário de Atendimento
              </h4>
              <div className="space-y-2 font-['Outfit'] text-xs md:text-sm text-[#ead4c1]/70">
                <p>Segunda a Sexta: 9h - 18h</p>
                <p>Sábado: 9h - 14h</p>
                <p>Atendimento apenas com agendamento</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#ead4c1]/20 pt-6 md:pt-8 text-center">
            <p className="font-['Outfit'] text-xs md:text-sm text-[#ead4c1]/50">
              © 2026 Terramadeira Marcenaria. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
}
