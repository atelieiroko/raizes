import { motion } from "motion/react";
import { AlertCircle, ArrowUpRight, Sparkles, HelpCircle, ArrowRight, CornerDownRight } from "lucide-react";
import { practicalExample } from "../data/copyData";

export default function ExampleSection() {
  return (
    <section className="bg-brand-light text-brand-dark py-24 px-4 md:px-8 border-y border-stone-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 bg-brand-accent/15 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#B27B5C] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-secondary" />
            Aplicação no Dia a Dia
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark balance leading-[1.12]">
            Exemplo Prático: <span className="text-brand-secondary font-extrabold block md:inline">O Poder do Diagnóstico</span>
          </h2>
          <p className="text-sm md:text-base text-stone-600 max-w-xl mx-auto font-light">
            Entenda como a formação muda completamente o jogo de atendimento e a percepção de valor por parte do seu cliente.
          </p>
        </div>

        {/* Scene Setup Box */}
        <div className="bg-white/80 backdrop-blur rounded-2xl border border-stone-200 p-6 md:p-8 mb-10 text-center md:text-left shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-secondary shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary block">O Cenário Comum</span>
              <p className="text-stone-800 font-semibold text-base md:text-lg mt-1">
                "{practicalExample.scenario}"
              </p>
            </div>
          </div>
        </div>

        {/* Flow Split: Way A vs Way B */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-2">
          
          {/* Column Left: Old Way (Limiting) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-stone-50 border border-stone-200 rounded-2xl p-6 md:p-8"
          >
            <div>
              <div className="flex items-center gap-2.5 text-stone-500 mb-6 border-b border-stone-200/60 pb-4">
                <AlertCircle className="w-5 h-5 shrink-0 text-stone-400" />
                <span className="text-xs uppercase font-extrabold tracking-wider">Como a maioria faz hoje</span>
              </div>
              <h3 className="text-lg font-bold text-stone-700 leading-snug mb-4">
                {practicalExample.oldWay}
              </h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Você escolhe marcas famosas na internet, compra produtos caros e aplica de forma genérica, esperando que a finalização esconda as falhas estruturais do cabelo. Sem saber a porosidade ou densidade exata, o resultado final flutua: às vezes dá certo, às vezes o cabelo pesa, perde a definição rapidamente ou continua extremamente ressecado.
              </p>
            </div>
          </motion.div>

          {/* Column Right: New Way (The Raízes Method - Premium) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-brand-accent/5 to-[#DFD3C3]/10 border-2 border-brand-accent/60 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center gap-2.5 text-brand-secondary mb-6 border-b border-brand-accent/20 pb-4">
                <span className="w-2.5 h-10 bg-brand-secondary rounded-sm" />
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#B27B5C] block">O Método</span>
                  <span className="text-sm font-bold text-stone-950">{practicalExample.newWayTitle}</span>
                </div>
              </div>

              {/* Steps List */}
              <ol className="space-y-4">
                {practicalExample.steps.map((step, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full bg-brand-secondary text-white text-[10px] font-mono flex items-center justify-center font-bold shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="text-xs md:text-sm text-stone-800 font-medium">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 pt-4 border-t border-brand-accent/20 text-[11px] font-mono font-bold text-brand-secondary uppercase">
              RESULTADO: METODOLOGIA DE EXCELÊNCIA
            </div>
          </motion.div>

        </div>

        {/* Big Final Highlight Box representing the Results */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 p-6 md:p-8 rounded-2xl bg-brand-dark text-white border border-brand-accent/30"
        >
          <div className="flex items-center gap-2 text-brand-accent mb-6">
            <ArrowUpRight className="w-5 h-5 animate-bounce" />
            <span className="text-xs uppercase tracking-widest font-bold">{practicalExample.resultsTitle}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {practicalExample.results.map((res, i) => (
              <div key={i} className="flex gap-3 items-start bg-white/5 p-4 rounded-xl border border-white/5">
                <CornerDownRight className="w-4 h-4 text-[#4ADE80] shrink-0 mt-1" />
                <p className="text-xs md:text-sm text-stone-200 font-bold leading-relaxed">
                  {res}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
