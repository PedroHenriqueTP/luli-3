"use client";

import { motion } from "framer-motion";
import { Camera, MapPin, Briefcase, BookOpen, Music, Plane, GraduationCap, ChevronRight, Mail, Code } from "lucide-react";

export default function LuliPortfolioBento() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <div className="min-h-screen bg-[#0A0F16] text-[#E2E8F0] font-sans selection:bg-[#3B82F6] selection:text-white p-4 md:p-8">
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]"
      >
        
        {/* 1. HERO BLOCK (2x2) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group bg-[#111827] border border-[#1F2937]"
        >
          <img 
            src="/assets/hero.png" 
            alt="Luciana Penna" 
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] saturate-50 group-hover:scale-105 group-hover:saturate-100 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16] via-[#0A0F16]/40 to-transparent p-8 flex flex-col justify-end">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Luciana Penna</h1>
            <h2 className="text-[#60A5FA] font-medium tracking-widest uppercase text-xs md:text-sm mb-4">
              Smart Tech Philosophy & Social Media
            </h2>
            <p className="text-[#94A3B8] font-light max-w-md leading-relaxed text-sm md:text-base">
              Fundindo teorias filosóficas clássicas com estratégias de tecnologia imersiva. 
              Criando marcas com alma no ecossistema corporativo.
            </p>
          </div>
        </motion.div>

        {/* 2. COMPETÊNCIAS (1x2) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-1 md:row-span-2 rounded-3xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] p-8 flex flex-col justify-between hover:border-[#60A5FA]/50 transition-colors duration-500"
        >
          <div>
            <div className="flex items-center gap-3 mb-6 text-[#60A5FA]">
              <Code size={24} />
              <h3 className="font-serif text-xl font-bold text-white">Competências</h3>
            </div>
            <ul className="space-y-4">
              {[
                { title: "Pensamento Analítico", desc: "Teoria de valor e ética" },
                { title: "Social Media Strategy", desc: "Domínio do nicho econômico" },
                { title: "Gestão de Crise", desc: "Comunicação assertiva corporativa" },
                { title: "Storytelling Filosófico", desc: "Narrativas de longo prazo" }
              ].map((skill, i) => (
                <li key={i} className="group">
                  <h4 className="text-[#E2E8F0] font-medium text-sm group-hover:text-[#60A5FA] transition-colors">{skill.title}</h4>
                  <p className="text-[#64748B] text-xs mt-1">{skill.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-6 mt-6 border-t border-[#334155]/50">
            <p className="text-[#94A3B8] text-xs italic">"A técnica sem filosofia é vazia; a filosofia sem ação é estéril."</p>
          </div>
        </motion.div>

        {/* 3. EXPERIENCE / INTERNSHIPS (1x1) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-1 md:row-span-1 rounded-3xl bg-[#111827] border border-[#1F2937] p-8 flex flex-col justify-center hover:bg-[#1E293B] transition-colors duration-500"
        >
          <Briefcase className="text-[#93C5FD] mb-4" size={28} />
          <h3 className="font-serif text-lg font-bold text-white mb-2">Trajetória Corporativa</h3>
          <p className="text-[#94A3B8] text-xs leading-relaxed mb-4">
            Passagens estratégicas por consultorias e empresas de tecnologia, 
            operando na intersecção entre dados e comportamento humano.
          </p>
          <a href="#" className="text-[#60A5FA] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
            Ver Histórico <ChevronRight size={16} />
          </a>
        </motion.div>

        {/* 4. LIFESTYLE: VIAGENS (1x1) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden relative group"
        >
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80" 
            alt="Viagens e Expansão" 
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-[#0A0F16]/30 group-hover:bg-transparent transition-colors duration-500" />
          <div className="absolute bottom-6 left-6 flex items-center gap-2">
            <Plane size={20} className="text-white" />
            <span className="text-white font-medium text-sm drop-shadow-lg">Viagens & Visão</span>
          </div>
        </motion.div>

        {/* 5. LIFESTYLE: ARTE & TEATRO (1x2) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden relative group"
        >
          <img 
            src="https://images.unsplash.com/photo-1507676184212-d0330a15233c?w=800&q=80" 
            alt="Teatro e Arte" 
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.5] group-hover:brightness-[0.8] group-hover:scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F16] to-transparent opacity-80" />
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">Teatro & Expressão</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">
              A presença de palco e a dramaturgia moldando oratória corporativa de alto impacto.
            </p>
          </div>
        </motion.div>

        {/* 6. ACADÊMICO (1x1) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-1 md:row-span-1 rounded-3xl bg-[#0F172A] border border-[#1E293B] p-8 flex flex-col justify-center items-center text-center hover:border-[#60A5FA]/40 transition-colors duration-500"
        >
          <GraduationCap className="text-[#3B82F6] mb-3" size={32} />
          <h3 className="text-white font-serif font-bold text-lg mb-1">Academia</h3>
          <p className="text-[#64748B] text-xs">A base teórica sólida que sustenta a prática no mercado financeiro.</p>
        </motion.div>

        {/* 7. LIFESTYLE: MÚSICA (1x1) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden relative group"
        >
          <img 
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80" 
            alt="Música" 
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#0A0F16]/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/10">
              <Music size={16} className="text-white" />
              <span className="text-white text-xs font-medium">Soundscapes</span>
            </div>
          </div>
        </motion.div>

        {/* 8. CONTATO E REDES (1x1) */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-1 md:row-span-1 rounded-3xl bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] p-8 flex flex-col justify-between shadow-[0_0_40px_rgba(59,130,246,0.2)]"
        >
          <div className="text-white">
            <h3 className="font-serif font-bold text-2xl mb-1">Let's Talk.</h3>
            <p className="text-white/80 text-sm">Pronta para redefinir narrativas.</p>
          </div>
          <div className="flex gap-3 mt-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white flex items-center justify-center text-white hover:text-[#1D4ED8] transition-all backdrop-blur-sm">
              <Mail size={18} />
            </a>
            <a href="https://vsco.co/lucipenna" target="_blank" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white flex items-center justify-center text-white hover:text-[#1D4ED8] transition-all backdrop-blur-sm">
              <Camera size={18} />
            </a>
            <a href="https://instagram.com/lucipenna" target="_blank" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white flex items-center justify-center text-white hover:text-[#1D4ED8] transition-all backdrop-blur-sm">
              <MapPin size={18} />
            </a>
          </div>
        </motion.div>
      </motion.div>
      
    </div>
  );
}
