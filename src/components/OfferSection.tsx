import { motion } from "motion/react";
import { CheckCircle, Calendar, Clock, Coffee, Sparkles, Shield, Gift, AlertCircle, Award } from "lucide-react";
import { offerCopy } from "../data/copyData";

interface OfferSectionProps {
  onCtaClick: () => void;
}

export default function OfferSection({ onCtaClick }: OfferSectionProps) {
  return (
    <section id="oferta" className="relative bg-brand-dark text-white py-24 px-4 md:px-8 overflow-hidden border-t-2 border-brand-accent/20">
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-[-20%] right-[-20%] w-[55vw] h-[55vw] rounded-full bg-brand-primary/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-20%] w-[45vw] h-[45vw] rounded-full bg-brand-accent/10 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1 bg-brand-accent/15 px-3 py-1 rounded-full text-xs font-bold tracking-widest text-[#B27B5C] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-secondary" />
            Oferta Especializada
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {offerCopy.title}
          </h2>
          <p className="text-sm md:text-base text-stone-400 font-light">
            {offerCopy.subtitle}.<br />Garanta sua vaga com as condições especiais desta turma presencial exclusiva.
          </p>
        </div>

        {/* Dynamic Main Columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-4">
          
          {/* Left Side: Calendars, Inscriptions detail, and Inclusions. (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            {/* Dates / Chronology Container */}
            <div className="p-6 md:p-8 bg-white/[0.03] border border-white/10 rounded-3xl space-y-6">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-brand-secondary block mb-2">Presença & Calendário</span>
              
              {/* Calendars grid */}
              <div className="grid grid-cols-5 gap-3">
                {offerCopy.dates.map((date, index) => (
                  <div key={index} className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-brand-accent/30 transition-all duration-300">
                    <Calendar className="w-4 h-4 text-brand-secondary mb-1" />
                    <span className="text-xs font-bold text-white">{date}</span>
                    <span className="text-[8px] uppercase tracking-wide text-stone-400 mt-0.5">Encontro</span>
                  </div>
                ))}
              </div>

              {/* Time and Coffee Break Layout Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-3 items-center p-4 rounded-2xl bg-white/[0.02]">
                  <Clock className="w-5 h-5 text-brand-accent shrink-0" />
                  <div className="text-xs">
                    <span className="text-stone-400 block uppercase font-semibold">Horário das Aulas</span>
                    <span className="text-white font-medium">{offerCopy.time}</span>
                    <p className="text-[10px] text-stone-400 mt-0.5">{offerCopy.interval}</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center p-4 rounded-2xl bg-white/[0.02]">
                  <Coffee className="w-5 h-5 text-brand-accent shrink-0" />
                  <div className="text-xs">
                    <span className="text-white font-medium">{offerCopy.hospitality}</span>
                    <p className="text-[10px] text-[#4ADE80] mt-0.5">Sem custos adicionais</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist of core values/inclusions */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-widest text-brand-accent uppercase mb-1">
                Tudo o que está incluso no seu investimento:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {offerCopy.inclusions.map((inc, i) => (
                  <div key={i} className="flex gap-3 items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <CheckCircle className="w-4.5 h-4.5 text-[#4ADE80]" />
                    <span className="text-xs md:text-sm font-medium text-stone-200">{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Professional Kit Highlights */}
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-brand-accent/20 space-y-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-brand-secondary" />
                <h4 className="text-xs font-bold tracking-wider text-brand-secondary uppercase">
                  Aviso Importante: Kit Profissional Obrigatório
                </h4>
              </div>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                Para o pleno aproveitamento das aulas práticas presenciais, o aluno deverá levar seu próprio kit profissional contendo
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <span className="text-brand-accent font-bold">•</span>
                  <span>Tesoura fio navalha</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-accent font-bold">•</span>
                  <span>Pente de corte</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-accent font-bold">•</span>
                  <span>Avental</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-accent font-bold">•</span>
                  <span>Borrifador</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-accent font-bold">•</span>
                  <span>Prendedor pro cabelo (divisões)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-accent font-bold">•</span>
                  <span>Escova desembaraçadora</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-accent font-bold">•</span>
                  <span>Escova de fitagem</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-accent font-bold">•</span>
                  <span>Secador</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-accent font-bold">•</span>
                  <span>Difusor</span>
                </div>
              </div>
              <p className="text-xs text-brand-accent font-semibold bg-brand-accent/5 p-3 rounded-lg border border-brand-accent/20 mt-3">
                Precisaremos de modelos reais, tragam sua família e amigas.
              </p>
              <p className="text-xs text-stone-400 font-light italic mt-2 pt-2 border-t border-white/5">
                A lista de materiais e dicas de fornecedores será apresentada no fechamento da matrícula.
              </p>
            </div>

          </div>

          {/* Right Side: Giant Pricing Card with Gold Glow. (lg:col-span-5) */}
          <div className="lg:col-span-5 flex">
            <motion.div
              initial={{ scale: 0.97, opacity: 0.9 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full bg-gradient-to-br from-stone-900 to-black rounded-3xl border-2 border-brand-accent p-8 md:p-10 shadow-2xl flex flex-col justify-between relative"
            >
              <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-gold-gradient text-brand-dark text-[10px] font-mono font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20 shadow-lg flex items-center gap-1">
                <Gift className="w-3 h-3 text-brand-dark" />
                Matrícula Segura
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-brand-secondary font-bold block mb-4">Investimento Presencial</span>
                
                {/* Cash Price */}
                <div className="border-b border-white/10 pb-6 mb-6">
                  <span className="text-3xl md:text-4xl font-extrabold text-white block">
                    {offerCopy.investment.cash}
                  </span>
                  <span className="text-stone-400 text-xs font-light tracking-wide mt-1 block">
                    No pagamento PIX, cartão de débito ou dinheiro
                  </span>
                </div>

                {/* Splitted Payments */}
                <div className="space-y-1 mb-8">
                  <span className="text-xs uppercase font-bold tracking-[0.15em] text-stone-400 block">{offerCopy.investment.separator}</span>
                  <p className="text-xl md:text-2xl font-bold text-brand-accent">
                    {offerCopy.investment.installments}
                  </p>
                  <span className="text-stone-400 text-xs font-light block">
                    Sem juros no cartão de crédito • Pode utilizar múltiplos cartões
                  </span>
                </div>
              </div>

              {/* Urgency warning inside Pricing Box */}
              <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl text-xs text-amber-100 flex items-start gap-2.5 mb-8">
                <AlertCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <p className="leading-relaxed font-light">
                  As vagas são limitadas para garantir qualidade no acompanhamento prático.
                </p>
              </div>

              {/* Call to action & checkout certificates */}
              <div className="space-y-4">
                <a
                  href="https://wa.link/x0wc46"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gold-gradient hover:brightness-110 text-brand-dark py-5 px-6 rounded-xl font-bold text-xs md:text-sm tracking-widest uppercase transition-all duration-300 shadow-xl shadow-brand-accent/20 cursor-pointer hover:scale-102 focus:outline-none focus:ring-4 focus:ring-brand-accent/30 overflow-hidden relative group active:scale-98 inline-flex items-center justify-center text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {offerCopy.cta}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </a>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
