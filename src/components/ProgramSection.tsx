import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, FileText, CheckCircle, Target, Sparkles, Scissors, BookOpen } from "lucide-react";
import { programCopy } from "../data/copyData";

export default function ProgramSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentProgram = programCopy[activeTab];

  return (
    <section id="conteudo" className="bg-brand-nude text-brand-dark py-24 px-4 md:px-8 border-t border-stone-100 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-brand-accent/15 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#B27B5C] uppercase">
            <BookOpen className="w-3.5 h-3.5 text-brand-secondary" />
            Cronograma de Alta Performance
          </span>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-neutral-900 leading-tight uppercase">
            O QUE VOCÊ VAI DOMINAR DURANTE A <span className="text-brand-secondary">FORMAÇÃO RAÍZES</span>
          </h2>
          <p className="text-sm md:text-base text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
            A Formação Raízes foi estruturada para transformar profissionais que desejam compreender profundamente os cabelos com curvatura e dominar técnicas de tratamento, finalização e corte com segurança. Você passará por uma jornada completa que une teoria, prática e atendimento real.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-5xl mx-auto">
          {programCopy.map((prog, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 text-left outline-none cursor-pointer group ${
                  isActive
                    ? "bg-white border-brand-accent/60 shadow-lg shadow-brand-dark/5 ring-1 ring-brand-accent/20"
                    : "bg-white/40 border-stone-200/80 hover:bg-white hover:border-stone-300"
                }`}
              >
                <div className={`p-3 rounded-xl transition-all duration-300 shrink-0 ${
                  isActive
                    ? "bg-brand-accent/15 text-brand-secondary"
                    : "bg-stone-100 text-stone-400 group-hover:bg-brand-accent/10 group-hover:text-brand-secondary"
                }`}>
                  {index === 0 && <Calendar className="w-5 h-5" />}
                  {index === 1 && <Scissors className="w-5 h-5" />}
                  {index === 2 && <Sparkles className="w-5 h-5" />}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#B27B5C] block mb-1">
                    {prog.schedule}
                  </span>
                  <h3 className={`text-sm font-extrabold tracking-tight leading-snug ${
                    isActive ? "text-stone-900" : "text-stone-600"
                  }`}>
                    {prog.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Program Block */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Introduction Quote / Banner */}
            <div className="bg-white rounded-3xl border border-stone-200/80 p-8 sm:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
              <div className="max-w-3xl relative z-10 space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-secondary" />
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#B27B5C]">
                    Introdução à Etapa
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-stone-900 italic font-sans">
                  "{currentProgram.introduction[0]}"
                </h3>
                <div className="space-y-3.5 pt-2 border-t border-stone-100">
                  {currentProgram.introduction.slice(1).map((para, i) => (
                    <p key={i} className="text-xs sm:text-sm md:text-base text-stone-600 font-light leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* List of Curriculum Topics Grid */}
            <div className="space-y-6">
              <h4 className="text-sm font-black tracking-widest text-stone-950 uppercase border-l-2 border-[#B27B5C] pl-3.5">
                Conteúdo Detalhado
              </h4>
              <div className={activeTab === 1 ? "space-y-6" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}>
                {activeTab === 1 ? (
                  <div className="bg-[#121110] border-2 border-brand-accent/30 text-white rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden w-full col-span-full">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="relative z-10 w-full">
                      {/* Topic Header */}
                      <div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-brand-accent/25 flex items-center justify-center text-[#E2A745] shrink-0 border border-brand-accent/30 shadow-lg">
                          <Scissors className="w-5 h-5 animate-pulse" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono tracking-widest text-[#B27B5C] uppercase font-bold block mb-1">
                            {currentProgram.schedule}
                          </span>
                          <h4 className="text-xl md:text-3xl font-black text-white tracking-tight uppercase leading-none">
                            {currentProgram.topics[0].title}
                          </h4>
                        </div>
                      </div>

                      {/* Bullet Items */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3.5">
                        {currentProgram.topics[0].items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-3.5 rounded-xl hover:bg-white/[0.04] transition-colors duration-250 hover:border-white/10"
                          >
                            <CheckCircle className="w-4 h-4 text-[#E2A745] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-stone-200 font-medium leading-relaxed">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  currentProgram.topics.map((topic, topicIdx) => (
                    <div
                      key={topicIdx}
                      className="bg-white rounded-2xl border border-stone-200/80 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                    >
                      <div>
                        {/* Topic Header */}
                        <div className="flex items-center gap-3 border-b border-stone-100 pb-4 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-brand-accent/15 flex items-center justify-center text-brand-secondary shrink-0">
                            <FileText className="w-4 h-4" />
                          </div>
                          <h5 className="text-xs sm:text-sm font-black text-stone-950 tracking-wider uppercase leading-snug">
                            {topic.title}
                          </h5>
                        </div>

                        {/* Bullet Items */}
                        <ul className="space-y-3">
                          {topic.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2.5">
                              <CheckCircle className="w-3.5 h-3.5 text-[#4ADE80] shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {(topic.objective || topic.practical) && (
                          <div className="mt-5 pt-4 border-t border-stone-100 space-y-3.5">
                            {topic.objective && (
                              <div className="space-y-1">
                                <div className="flex items-center gap-1.5 text-[#B27B5C] font-black text-[10px] uppercase tracking-widest">
                                  <Target className="w-3.5 h-3.5 text-brand-secondary shrink-0" />
                                  <span>Objetivo do dia</span>
                                </div>
                                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                                  {topic.objective}
                                </p>
                              </div>
                            )}
                            {topic.practical && (
                              <div className="space-y-1">
                                <div className="flex items-center gap-1.5 text-brand-secondary font-black text-[10px] uppercase tracking-widest">
                                  <Sparkles className="w-3.5 h-3.5 text-[#B27B5C] shrink-0 animate-pulse" />
                                  <span>Aula Prática</span>
                                </div>
                                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                                  {topic.practical}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Objective Box */}
            {activeTab === 1 ? (
              <div className="bg-[#121110] border-2 border-brand-accent/40 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  
                  {/* Left Column: Objetivo do dia */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-brand-accent">
                      <Target className="w-5 h-5 shrink-0 text-brand-secondary" />
                      <span className="text-xs uppercase font-extrabold tracking-widest text-[#E2A745]">
                        Foco Técnico do Corte
                      </span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-black tracking-tight text-white leading-tight uppercase">
                      Objetivo desta etapa
                    </h4>
                    <p className="text-sm text-stone-300 font-light leading-relaxed">
                      Entender a teoria do corte e sua geometria. Projeções e caimentos. Compreender as particularidades de cada cliente. Entender exatamente o tipo de cabelo que irá cortar.
                    </p>
                    <div className="pt-4 space-y-2">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#E2A745] shrink-0" />
                        <span className="text-xs text-stone-400 font-medium">Teoria robusta e geometria tridimensional</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#E2A745] shrink-0" />
                        <span className="text-xs text-stone-400 font-medium">Estudo aprofundado de caimentos e texturas</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Aula Prática */}
                  <div className="bg-gradient-to-br from-brand-secondary to-[#8B5034] p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                    <div>
                      <div className="flex items-center gap-2 text-brand-accent mb-3">
                        <Sparkles className="w-5 h-5 shrink-0 text-[#FAF6F0]" />
                        <span className="text-xs uppercase font-extrabold tracking-widest text-[#FAF6F0]">
                          Metodologia Prática
                        </span>
                      </div>
                      <h4 className="text-lg md:text-xl font-black tracking-tight text-white leading-tight uppercase">
                        Aula Prática do Corte
                      </h4>
                      <p className="text-xs md:text-sm text-stone-100 font-light leading-relaxed mt-2">
                        Vivência prática supervisionada de perto para construir segurança imediata nos atendimentos de salão.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 mt-6">
                      <div className="flex items-center gap-3 bg-white/15 border border-white/5 p-3 rounded-xl">
                        <CheckCircle className="w-4 h-4 text-[#E2A745] shrink-0" />
                        <span className="text-xs text-stone-100 font-semibold uppercase tracking-wider">
                          Demonstração Completa da Técnica
                        </span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/15 border border-white/5 p-3 rounded-xl">
                        <CheckCircle className="w-4 h-4 text-[#E2A745] shrink-0" />
                        <span className="text-xs text-stone-100 font-semibold uppercase tracking-wider">
                          Prática Supervisionada de Perto
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ) : (
              <>
                <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none" />
                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 animate-fade-in">
                    <div className="space-y-4 max-w-xl">
                      <div className="flex items-center gap-2 text-brand-accent">
                        <Target className="w-5 h-5 shrink-0" />
                        <span className="text-xs uppercase font-extrabold tracking-widest">
                          Foco Técnico
                        </span>
                      </div>
                      <h4 className="text-xl md:text-2xl font-black tracking-tight text-white leading-tight">
                        Objetivo desta etapa
                      </h4>
                      <p className="text-xs text-stone-400 font-light leading-relaxed">
                        Mais do que transferir teoria, nossa formação garante que você desenvolva a sensibilidade prática necessária para os atendimentos reais.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:w-3/5">
                      {currentProgram.objectives.map((obj, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/5 p-4 rounded-xl">
                          <CheckCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5 animate-pulse" />
                          <span className="text-xs sm:text-sm text-stone-200 font-medium leading-relaxed">
                            {obj}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
