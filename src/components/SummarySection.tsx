import { useState } from "react";
import { motion } from "motion/react";
import { Check, ShieldAlert, Sparkles, HelpCircle, Flame, ArrowRight } from "lucide-react";
import { summaryCopy } from "../data/copyData";

interface SummarySectionProps {
  onCtaClick: () => void;
}

export default function SummarySection({ onCtaClick }: SummarySectionProps) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <section className="bg-brand-light text-brand-dark py-24 px-4 md:px-8 border-t border-stone-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 bg-brand-accent/15 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#B27B5C] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-secondary" />
            Visão Geral & Decisão
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Resumindo: <span className="text-brand-secondary">Sua Nova Jornada</span>
          </h2>
          <p className="text-sm md:text-base text-stone-500 font-light max-w-lg mx-auto">
            A decisão de acelerar sua carreira e se destacar da concorrência agora está diante das suas mãos.
          </p>
        </div>

        {/* Dual Roads Graphic (Internet Videos vs. Structured Raízes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
          
          {/* Pathway A */}
          <div className="bg-stone-50 border border-stone-200 p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-wider text-stone-400 uppercase font-bold block mb-4">Caminho Amador</span>
              <h3 className="text-base font-bold text-stone-700 leading-normal mb-3">
                {summaryCopy.internetComparison}
              </h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Você gasta horas filtrando conteúdos desencontrados, testa técnicas sem entender o porquê, desperdiça produtos e continua inseguro quando uma curvatura mais desafiadora entra no seu salão.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-200 text-xs font-bold text-orange-600/70">
              ✖ EVOLUÇÃO LENTA OU ESTAGNADA
            </div>
          </div>

          {/* Pathway B */}
          <div className="bg-gradient-to-br from-brand-accent/5 to-brand-secondary/5 border-2 border-brand-accent/60 p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-wider text-brand-secondary uppercase font-bold block mb-4">Caminho do Especialista</span>
              <h3 className="text-base font-bold text-brand-dark leading-normal mb-3">
                {summaryCopy.alternativeComparison}
              </h3>
              <p className="text-xs text-stone-750 font-medium leading-relaxed">
                Você aprende um passo a passo estruturado por quem já validou os métodos em milhares de atendimentos reais. Economiza tempo, assume o controle e passa a ter segurança imediata.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-accent/20 text-xs font-bold text-emerald-800">
              ✓ ACELERAÇÃO MÁXIMA & RECONHECIMENTO
            </div>
          </div>

        </div>

        {/* What Raízes Delivers List */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 md:p-10 mb-16">
          <h3 className="text-lg font-extrabold text-neutral-900 tracking-tight mb-6">
            {summaryCopy.deliversTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {summaryCopy.delivers.map((item, index) => (
              <div key={index} className="flex gap-3 items-center">
                <div className="w-5 h-5 rounded-full bg-[#4ADE80]/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs md:text-sm text-stone-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-brand-secondary font-semibold mt-8 pt-6 border-t border-stone-200">
            {summaryCopy.outcomeText}
          </p>
        </div>

        {/* Final Sense Of Urgency text paragraphs & CTA scroll */}
        <div className="mt-16 text-center space-y-6 max-w-lg mx-auto">
          <div className="space-y-4">
            {summaryCopy.finalCall.map((line, lIdx) => {
              const isAccent = lIdx === 3; // "Garanta sua vaga hoje mesmo."
              return (
                <p key={lIdx} className={`text-base md:text-lg ${isAccent ? 'text-brand-secondary font-extrabold tracking-wide uppercase' : 'text-stone-800 font-light'}`}>
                  {line}
                </p>
              );
            })}
          </div>

          <div className="pt-4">
            <a
              href="https://wa.link/x0wc46"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setIsClicked(true);
              }}
              className={`w-full sm:w-auto px-10 py-5 rounded-xl text-xs md:text-sm tracking-widest font-extrabold uppercase transition-all duration-350 shadow-xl cursor-pointer hover:scale-102 focus:outline-none focus:ring-4 focus:ring-brand-accent/30 active:scale-98 inline-flex items-center justify-center text-center ${
                isClicked
                  ? "bg-emerald-500 text-neutral-950 hover:bg-emerald-400 hover:text-neutral-950"
                  : "bg-brand-primary text-white hover:bg-brand-secondary hover:text-brand-dark"
              }`}
            >
              Quero me inscrever na Formação
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
