import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Sparkles, UserCheck2 } from "lucide-react";
import { unlocksCopy } from "../data/copyData";

export default function UnlocksSection() {
  return (
    <section id="conteudo" className="bg-brand-light text-brand-dark py-20 px-4 md:px-8 border-t border-stone-200/50">
      <div className="max-w-5xl mx-auto">
        {/* Header Block */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 bg-brand-accent/15 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest text-[#B27B5C] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-secondary" />
            Oportunidade Profissional
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark balance leading-[1.12]">
            Novas <span className="text-brand-secondary font-extrabold relative inline-block underline decoration-brand-accent decoration-3 underline-offset-4">habilidades</span>
          </h2>
          <p className="text-sm md:text-base text-stone-600 max-w-xl mx-auto font-light">
            O conhecimento prático completo para elevar o patamar do seu salão e faturar mais com procedimentos de alto valor.
          </p>
        </div>

        {/* Dynamic Checklist Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {unlocksCopy.map((item, index) => {
            // Elegant progressive delays for entrance animations
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex gap-4 p-6 rounded-2xl bg-white border border-stone-200/60 hover:border-brand-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-brand-accent/5"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-secondary group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm md:text-base text-stone-700 font-semibold leading-relaxed group-hover:text-brand-dark transition-colors duration-200">
                    {item}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Special Visual Accent Card to fill the grid nicely */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-gradient-to-br from-brand-accent/5 to-brand-secondary/5 border border-brand-accent/30 mt-6"
          >
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-secondary flex-shrink-0 mx-auto md:mx-0">
                <UserCheck2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-stone-900 font-bold text-base md:text-lg">
                  Preparado para o seu Próximo Nível
                </p>
                <p className="text-xs text-stone-600 mt-1 max-w-lg font-light leading-relaxed">
                  Não é sobre apenas aprender fórmulas. Trata-se de dominar a fundo a fisiologia do fio e entregar experiências que geram recomendação automática pelos clientes.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold bg-white text-stone-800 py-2 px-4 rounded-full border border-stone-200 self-center md:self-auto shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#4ADE80]" />
              <span>Garantia de Ensino Prático</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
