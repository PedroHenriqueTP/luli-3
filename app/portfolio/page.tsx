"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, Mail, MapPin, Briefcase, BookOpen, Coffee, ArrowDown, ChevronRight, Instagram } from "lucide-react";
import { useRef } from "react";

export default function LuliPortfolio() {
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Imagens refinadas que representam a estética: moda, estudos, soft skills corporativas
  const photos = [
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80", alt: "Estudos", desc: "Teoria Econômica & Filosofia Política", span: "md:col-span-2 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500&q=80", alt: "Corporate", desc: "Estratégia Corporativa", span: "col-span-1" },
    { src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80", alt: "Clássica", desc: "Aprofundamento Filosófico", span: "col-span-1" },
    { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80", alt: "Networking", desc: "Soft Skills & Liderança", span: "md:col-span-2" },
    { src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80", alt: "Planejamento", desc: "Análise de Mercado", span: "col-span-1" },
    { src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80", alt: "Foco", desc: "Social Media Strategy", span: "col-span-1" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C3E50] font-sans selection:bg-[#4A6FA5] selection:text-white overflow-x-hidden">
      
      {/* Hero Section Parallax */}
      <motion.section 
        style={{ y: headerY, opacity: headerOpacity }}
        className="relative h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-8 border-[6px] border-[#E8DCC4] shadow-2xl relative z-10"
        >
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" 
            alt="Luciana Penna" 
            className="w-full h-full object-cover filter contrast-125 sepia-[.15]"
          />
        </motion.div>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#1C2833] font-bold tracking-tight mb-4">
            Luciana Penna
          </h1>
          <h2 className="text-[#4A6FA5] font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-6">
            Social Media Strategist
          </h2>
          <p className="text-[#5D6D7E] font-light max-w-xl mx-auto leading-relaxed text-lg mb-10">
            A interseção entre a profundidade filosófica e o pragmatismo econômico. Elevando o posicionamento digital de marcas que moldam o futuro.
          </p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-4 z-10"
        >
          <a href="#portfolio" className="bg-[#4A6FA5] text-white hover:bg-[#3B5998] px-8 py-3 rounded-full transition-all shadow-lg flex items-center gap-2 text-sm font-medium">
            Ver Portfólio <ChevronRight size={16} />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 text-[#AAB7B8]"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.section>

      {/* Curriculum & Soft Skills */}
      <section className="bg-[#1C2833] text-[#FDFBF7] py-24 relative z-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">A Lente Analítica</h2>
            <div className="w-16 h-1 bg-[#4A6FA5] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: BookOpen, title: "Background Filosófico", desc: "Aplicação de ética, dialética e teoria do valor no posicionamento de marcas. O mercado não é apenas números; é comportamento humano e filosofia aplicada." },
              { icon: Briefcase, title: "Nicho Econômico", desc: "Tradução de cenários macroeconômicos para social media. Gestão de crise, análise de risco reputacional e curadoria para executivos." },
              { icon: Coffee, title: "Soft Skills", desc: "Comunicação assertiva, empatia estratégica, pensamento crítico de alto nível e adaptação rápida a novas narrativas do mercado." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                className="bg-[#2C3E50] p-8 rounded-2xl border border-[#34495E] hover:border-[#4A6FA5] transition-colors"
              >
                <item.icon className="text-[#E8DCC4] mb-6" size={32} />
                <h3 className="font-serif font-bold text-xl text-white mb-4">{item.title}</h3>
                <p className="text-sm text-[#AAB7B8] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="portfolio" className="py-24 bg-[#F4F1EA] relative z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12 text-[#8B5A2B]"
          >
            <Camera size={24} /> 
            <h2 className="font-serif text-3xl font-bold text-[#1C2833]">Lifestyle & Visão</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
            {photos.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                className={`relative group overflow-hidden rounded-xl shadow-md cursor-pointer ${item.span}`}
              >
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover filter brightness-[0.85] sepia-[.10] group-hover:brightness-100 group-hover:sepia-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2833]/90 via-[#1C2833]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-white font-serif font-bold text-xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.alt}</h3>
                  <span className="text-[#E8DCC4] font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C2833] text-[#FDFBF7] py-20 text-center relative z-20 border-t border-[#34495E]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl mb-6">Pronta para redefinir o mercado?</h2>
          
          <div className="flex justify-center gap-4 mb-12">
            <a href="#" className="bg-[#E8DCC4] text-[#1C2833] hover:bg-white px-8 py-3 rounded-full transition-all shadow-lg flex items-center gap-2 font-bold">
              <Mail size={18} /> Entre em Contato
            </a>
          </div>

          <div className="flex justify-center gap-8 text-[#AAB7B8] mb-8">
            <a href="https://vsco.co/lucipenna" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
              <Camera size={20} /> VSCO
            </a>
            <a href="https://instagram.com/lucipenna" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              Instagram
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={20} /> São Paulo, SP
            </span>
          </div>

          <p className="text-[#5D6D7E] tracking-widest uppercase text-xs">
            © {new Date().getFullYear()} Luciana Penna • Powered by Norte Media
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
