"use client";

import { motion } from "framer-motion";
import { BookOpen, PenTool, Feather, ArrowRight, Instagram, Mail } from "lucide-react";

export default function LucianaPortfolioClassic() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2A25] font-serif selection:bg-[#D4AF37] selection:text-white">
      {/* Background Texture (Linen simulation) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/linen.png')] mix-blend-multiply" />

      {/* Navigation */}
      <nav className="fixed w-full top-0 bg-[#FDFBF7]/90 backdrop-blur-md z-50 border-b border-[#D4AF37]/20">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-sm font-sans tracking-[0.2em] uppercase text-[#8B8378]">Luciana Penna</span>
          <div className="flex gap-6 text-sm font-sans tracking-wide">
            <a href="#sobre" className="hover:text-[#D4AF37] transition-colors">Sobre</a>
            <a href="#escrita" className="hover:text-[#D4AF37] transition-colors">Pensamento</a>
            <a href="#contato" className="hover:text-[#D4AF37] transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <main className="max-w-5xl mx-auto px-6 pt-40 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <div className="w-12 h-[1px] bg-[#D4AF37] mb-8" />
          <h1 className="text-5xl md:text-6xl font-normal leading-tight mb-6 text-[#1A1A1A]">
            Economia Política,<br/>
            <span className="italic text-[#8B8378]">Leitura & Pensamento.</span>
          </h1>
          <p className="font-sans text-[#5C5A55] max-w-sm leading-relaxed font-light mb-10 text-sm md:text-base">
            "A verdadeira transformação ocorre na intersecção entre o rigor acadêmico e a clareza da transmissão de ideias."
          </p>
          <div className="flex gap-4 items-center">
            <a href="#escrita" className="text-xs font-sans uppercase tracking-widest border border-[#2C2A25] px-6 py-3 hover:bg-[#2C2A25] hover:text-[#FDFBF7] transition-colors">
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
          <div className="absolute inset-0 border border-[#D4AF37]/40 translate-x-4 translate-y-4" />
          <img 
            src="/assets/luci2.png" 
            alt="Luciana Penna" 
            className="relative z-10 w-full h-[600px] object-cover grayscale-[10%] sepia-[5%] contrast-100"
          />
        </motion.div>
      </main>

      {/* 2. SOBRE / ACADEMIA */}
      <section id="sobre" className="bg-[#FAF8F2] py-24 border-y border-[#D4AF37]/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Feather className="mx-auto text-[#D4AF37] mb-6" size={24} />
          <h2 className="text-3xl mb-8">Inteligência Silenciosa</h2>
          <p className="font-sans text-[#5C5A55] leading-loose max-w-2xl mx-auto font-light text-justify">
            Mestranda em Economia Política, Luciana Penna dedica-se à construção do pensamento sólido.
            Longe das narrativas rasas e do imediatismo das redes corporativas, seu trabalho reside na 
            profundidade: na leitura clássica, na filosofia aplicada e na capacidade de traduzir a complexidade 
            do mundo em valor real e transmissível.
          </p>
        </div>
      </section>

      {/* 3. PENSAMENTO / ESCRITA */}
      <section id="escrita" className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-[1px] bg-[#D4AF37]" />
          <h2 className="text-2xl tracking-wide">Textos & Ensaios</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            { title: "A Ética no Valor Econômico", date: "Julho 2026", desc: "Uma reflexão sobre como a filosofia clássica molda as decisões modernas de alocação de recursos." },
            { title: "Dialética e Mercado", date: "Junho 2026", desc: "Como a compreensão dos ciclos históricos permite uma leitura mais profunda das crises financeiras." },
            { title: "A Estética do Pensamento", date: "Maio 2026", desc: "O papel da leitura densa na formação do raciocínio analítico contemporâneo." }
          ].map((post, i) => (
            <div key={i} className="group cursor-pointer border-b border-[#E6E1D6] pb-8 hover:border-[#D4AF37] transition-colors">
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#D4AF37] mb-3 block">{post.date}</span>
              <h3 className="text-xl mb-3 group-hover:text-[#8B8378] transition-colors">{post.title}</h3>
              <p className="font-sans text-sm text-[#5C5A55] font-light leading-relaxed mb-4">{post.desc}</p>
              <div className="flex items-center gap-2 text-[11px] font-sans uppercase tracking-widest text-[#2C2A25] group-hover:text-[#D4AF37] transition-colors">
                Ler Artigo <ArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LEITURAS / INFLUÊNCIAS (ASSET DA ESTANTE) */}
      <section className="bg-[#2C2A25] text-[#FDFBF7] py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/assets/luciana_bookshelf_clean.png" alt="Estante de Livros Clássicos" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <BookOpen className="mx-auto text-[#D4AF37] mb-8" size={32} />
          <h2 className="text-4xl mb-6">Fundamentos</h2>
          <p className="font-sans text-[#A8A49C] max-w-lg mx-auto font-light leading-relaxed mb-10 text-sm">
            Um repertório forjado na leitura. O conhecimento não é um acessório, mas a matéria-prima 
            essencial para a compreensão econômica e política.
          </p>
        </div>
      </section>

      {/* 5. CONTATO */}
      <footer id="contato" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="w-px h-16 bg-[#D4AF37] mx-auto mb-10" />
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
    </div>
  );
}
