"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowRight, Instagram, Camera, Mail, ShieldCheck, Lock, CreditCard } from "lucide-react";

export default function LucianaPortfolioExpanded() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutItem, setCheckoutItem] = useState<{title: string, price: string} | null>(null);

  const openCheckout = (title: string, price: string) => {
    setCheckoutItem({ title, price });
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2A25] font-serif selection:bg-[#D4AF37] selection:text-white">
      {/* Background Texture (Linen simulation) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/linen.png')] mix-blend-multiply" />

      {/* Navigation */}
      <nav className="fixed w-full top-0 bg-[#FDFBF7]/90 backdrop-blur-md z-40 border-b border-[#D4AF37]/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-sm font-sans tracking-[0.2em] uppercase text-[#8B8378]">Luciana Penna</span>
          <div className="flex gap-6 text-sm font-sans tracking-wide">
            <a href="#historia" className="hover:text-[#D4AF37] transition-colors">História</a>
            <a href="#escrita" className="hover:text-[#D4AF37] transition-colors">Trabalho</a>
            <a href="#livraria" className="hover:text-[#D4AF37] transition-colors">Livraria</a>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          {/* Fine line poetic adornment */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-[1px] bg-[#D4AF37]" />
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#D4AF37]">Economia Política</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.1] mb-8 text-[#1A1A1A]">
            A beleza do <br/>
            <span className="italic text-[#8B8378]">pensamento denso.</span>
          </h1>
          
          <p className="font-sans text-[#5C5A55] max-w-sm leading-relaxed font-light mb-12 text-sm md:text-base">
            "A verdadeira transformação ocorre na intersecção entre o rigor acadêmico e a clareza da transmissão de ideias. Onde a filosofia encontra o mercado."
          </p>
          
          <div className="flex gap-6 items-center">
            <a href="#escrita" className="text-xs font-sans uppercase tracking-widest border border-[#2C2A25] px-8 py-4 hover:bg-[#2C2A25] hover:text-[#FDFBF7] transition-colors duration-500">
              Ler Ensaios
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative"
        >
          {/* O frame da foto usa linhas finas e estilo clássico */}
          <div className="absolute inset-0 border border-[#D4AF37]/40 translate-x-6 translate-y-6" />
          <div className="absolute inset-0 border border-[#2C2A25]/10 -translate-x-3 -translate-y-3" />
          <img 
            src="/assets/luci2.png" 
            alt="Luciana Penna" 
            className="relative z-10 w-full h-[650px] object-cover grayscale-[15%] sepia-[5%] contrast-[1.05]"
          />
        </motion.div>
      </main>

      {/* Fine line separator */}
      <div className="w-full flex justify-center py-12">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
      </div>

      {/* 2. HISTÓRIA E TRAJETÓRIA */}
      <section id="historia" className="bg-[#FAF8F2] py-24 border-y border-[#D4AF37]/20 relative">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 relative">
            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-[#D4AF37]/40 -translate-y-4 translate-x-4" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-[#D4AF37]/40 translate-y-4 -translate-x-4" />
            <img 
              src="/assets/luci1.png" 
              alt="Inteligência Silenciosa" 
              className="w-full h-[500px] object-cover relative z-10 filter grayscale-[10%]"
            />
          </div>
          <div className="md:col-span-7">
            <h2 className="text-4xl mb-8">A Construção do Repertório</h2>
            <div className="space-y-6 font-sans text-[#5C5A55] leading-loose font-light text-sm md:text-base text-justify">
              <p>
                A trajetória não se mede apenas por diplomas, mas pela capacidade de transformar a teoria em uma lente crítica para ler o mundo. Mestranda em Economia Política, Luciana Penna dedica-se à construção de um pensamento sólido e estruturado.
              </p>
              <p>
                Sua vida universitária transcendeu as salas de aula. A pesquisa incessante em fontes primárias forjou uma **inteligência silenciosa e poderosa**. Longe das narrativas rasas e do imediatismo das redes corporativas, seu trabalho reside na profundidade: na leitura clássica e na filosofia aplicada.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-[#E6E1D6] grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-sans text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2">Foco Acadêmico</h4>
                <p className="text-lg">Economia Política & Teoria do Valor</p>
              </div>
              <div>
                <h4 className="font-sans text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2">Base Analítica</h4>
                <p className="text-lg">Filosofia Clássica & Dialética</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PENSAMENTO / ESCRITA / CHECKOUT */}
      <section id="escrita" className="max-w-6xl mx-auto px-6 py-32">
        <div className="flex flex-col items-center text-center mb-20">
          <BookOpen className="text-[#D4AF37] mb-6" size={28} />
          <h2 className="text-4xl mb-4">Trabalho & Ensaios</h2>
          <p className="font-sans text-[#5C5A55] font-light max-w-lg">
            Documentos, análises e reflexões estruturadas. Acesso ao acervo de pensamento lapidado ao longo da academia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Item 1 - Mentoria Geral */}
          <div className="group border border-[#E6E1D6] bg-white p-10 hover:border-[#D4AF37]/50 transition-colors duration-500 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#FDFBF7] border-l border-b border-[#E6E1D6] -translate-y-8 translate-x-8 rotate-45 group-hover:bg-[#D4AF37]/10 transition-colors" />
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#D4AF37] mb-4 block">Mentoria Elite</span>
              <h3 className="text-2xl mb-4 text-[#1A1A1A]">Arquitetura do Pensamento Clássico</h3>
              <p className="font-sans text-sm text-[#5C5A55] font-light leading-relaxed mb-8">
                Um programa intensivo aberto ao público sobre estruturação analítica, escrita acadêmica de alto nível e as bases da Economia Política. Aprenda a pensar e escrever com densidade e valor duradouro.
              </p>
            </div>
            <button 
              onClick={() => openCheckout("Mentoria Elite: Arquitetura do Pensamento", "R$ 497,00")}
              className="flex items-center w-max gap-3 text-[11px] font-sans uppercase tracking-widest text-[#FDFBF7] bg-[#2C2A25] px-6 py-3 hover:bg-[#D4AF37] transition-colors mt-auto"
            >
              Agendar Mentoria <ArrowRight size={14} />
            </button>
          </div>

          {/* Item 2 - Mentoria Mulheres */}
          <div className="group border border-[#D4AF37]/40 bg-[#FAF8F2] p-10 hover:border-[#D4AF37] transition-colors duration-500 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-white border-l border-b border-[#D4AF37]/40 -translate-y-8 translate-x-8 rotate-45 group-hover:bg-[#D4AF37]/20 transition-colors" />
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#D4AF37] mb-4 block flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" /> 
                Mentoria Exclusiva (Members Only)
              </span>
              <h3 className="text-2xl mb-4 text-[#1A1A1A]">Círculo de Liderança Feminina</h3>
              <p className="font-sans text-sm text-[#5C5A55] font-light leading-relaxed mb-8">
                Um espaço seguro e restrito apenas para mulheres construindo autoridade no mercado corporativo e acadêmico. Estratégia de posicionamento, oratória impecável e inteligência emocional avançada.
              </p>
            </div>
            <button 
              onClick={() => openCheckout("Círculo de Liderança Feminina (Exclusivo)", "R$ 897,00")}
              className="flex items-center w-max gap-3 text-[11px] font-sans uppercase tracking-widest text-[#2C2A25] bg-transparent border border-[#2C2A25] px-6 py-3 hover:bg-[#2C2A25] hover:text-[#FDFBF7] transition-colors mt-auto"
            >
              Aplicar para o Círculo <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. LIVRARIA PESSOAL */}
      <section id="livraria" className="bg-[#1A1A1A] text-[#FDFBF7] py-32 relative overflow-hidden">
        {/* Usando o asset da estante gerado como background overlay */}
        <div className="absolute inset-0 opacity-10">
          <img src="/assets/luciana_bookshelf_clean.png" alt="Estante de Livros Clássicos" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl mb-6">Livraria Pessoal</h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mb-8" />
            <p className="font-sans text-[#A8A49C] font-light leading-relaxed mb-8 text-sm">
              Um repertório forjado na leitura. O conhecimento não é um acessório, mas a matéria-prima essencial para a compreensão da realidade. Aqui repousam as fundações do meu pensamento.
            </p>
            <a href="#" className="font-sans text-xs tracking-widest uppercase hover:text-[#D4AF37] transition-colors flex items-center gap-2">
              Explorar Indicações <ArrowRight size={14} />
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 border border-[#D4AF37]/30 translate-x-4 -translate-y-4" />
            <img src="/assets/luci3.png" alt="Luciana - Leitura e Foco" className="relative z-10 w-full h-[400px] object-cover filter contrast-110 sepia-[10%] grayscale-[20%]" />
          </div>
        </div>
      </section>

      {/* 5. CONTATO */}
      <footer className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#D4AF37] mx-auto mb-10" />
        <h2 className="text-3xl mb-8">Transmissão de Valor</h2>
        <a href="mailto:contato@lucianapenna.com" className="font-sans text-sm tracking-widest uppercase hover:text-[#D4AF37] transition-colors inline-block mb-16">
          contato@lucianapenna.com
        </a>

        <div className="flex justify-center gap-8 border-t border-[#E6E1D6] pt-12">
          <a href="https://vsco.co/lucipenna" className="text-[#8B8378] hover:text-[#D4AF37] transition-colors flex items-center gap-2 font-sans text-xs uppercase tracking-widest">
            <Camera size={14} /> VSCO
          </a>
          <a href="https://instagram.com/luci.penna" className="text-[#8B8378] hover:text-[#D4AF37] transition-colors flex items-center gap-2 font-sans text-xs uppercase tracking-widest">
            <Instagram size={14} /> Instagram
          </a>
        </div>
      </footer>

      {/* MODAL DE CHECKOUT PREMIUM */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
              className="bg-[#FDFBF7] max-w-md w-full border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden"
            >
              {/* Checkout Header */}
              <div className="bg-[#2C2A25] p-6 text-center relative">
                <button 
                  onClick={() => setIsCheckoutOpen(false)}
                  className="absolute top-4 right-4 text-[#A8A49C] hover:text-white"
                >
                  ✕
                </button>
                <ShieldCheck className="mx-auto text-[#D4AF37] mb-3" size={32} />
                <h3 className="font-sans text-xs uppercase tracking-widest text-[#D4AF37] mb-1">Pagamento Seguro</h3>
                <p className="text-white text-lg">{checkoutItem?.title}</p>
              </div>

              {/* Checkout Body */}
              <div className="p-8 font-sans">
                <div className="flex justify-between items-center mb-8 border-b border-[#E6E1D6] pb-4">
                  <span className="text-[#5C5A55] text-sm uppercase tracking-wide">Total a pagar</span>
                  <span className="text-2xl font-serif text-[#1A1A1A]">{checkoutItem?.price}</span>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#8B8378] mb-2">E-mail para acesso</label>
                    <input type="email" placeholder="nome@email.com" className="w-full border border-[#E6E1D6] bg-white p-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#8B8378] mb-2">Cartão de Crédito</label>
                    <div className="relative">
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full border border-[#E6E1D6] bg-white p-3 pl-10 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors" />
                      <CreditCard className="absolute left-3 top-3.5 text-[#A8A49C]" size={16} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="MM/AA" className="w-full border border-[#E6E1D6] bg-white p-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors" />
                    <input type="text" placeholder="CVC" className="w-full border border-[#E6E1D6] bg-white p-3 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors" />
                  </div>
                  
                  <button type="button" className="w-full bg-[#D4AF37] text-white py-4 mt-6 text-xs uppercase tracking-widest hover:bg-[#C19B2E] transition-colors flex items-center justify-center gap-2">
                    <Lock size={14} /> Finalizar Compra
                  </button>
                </form>
                
                <p className="text-[10px] text-center text-[#A8A49C] mt-6 uppercase tracking-wider">
                  Ambiente criptografado 256-bit
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
