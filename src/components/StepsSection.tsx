import { motion } from "motion/react";
import { Sparkles, ArrowRight, CheckCircle2, FlaskConical, Droplet, Star, Scissors } from "lucide-react";
import { learningSteps } from "../data/copyData";

export default function StepsSection() {
  // Let's pair step indexes to beautiful specific icons
  const icons = [
    <FlaskConical className="w-6 h-6 text-brand-secondary" />,
    <Droplet className="w-6 h-6 text-brand-secondary" />,
    <Scissors className="w-6 h-6 text-brand-secondary" />,
    <Star className="w-6 h-6 text-brand-secondary" />
  ];

  return (
    <section className="bg-brand-dark text-white py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative Warm Backglow */}
      <div className="absolute right-[-10%] top-[20%] w-[35vw] h-[35vw] rounded-full bg-brand-primary/10 blur-[130px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[10%] w-[30vw] h-[30vw] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-brand-accent uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
            Método Raízes
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            O que você vai <span className="text-gold-gradient font-black">Aprender</span>
          </h2>
          <p className="text-sm md:text-base text-stone-400 max-w-2xl mx-auto font-light leading-relaxed">
            Nossos pilares práticos de alta performance garantem que você pare de depender apenas da intuição e domine a ciência de tratar, finalizar e cortar cada curvatura com maestria.
          </p>
        </div>

        {/* Steps Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {learningSteps.map((step, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="flex flex-col justify-between bg-white/[0.03] border border-white/10 hover:border-brand-accent/40 rounded-2xl p-8 transition-all duration-300 relative group hover:bg-white/[0.05]"
              >
                {/* Shiny top glow effect (hover-triggered) */}
                <span className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-secondary to-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl" />

                <div>
                  {/* Step Code and Icon Line */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full uppercase">
                      {step.number}
                    </span>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-brand-secondary/40 transition-colors duration-300">
                      {icons[index]}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug mb-4 group-hover:text-brand-accent transition-colors duration-200">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-stone-300 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Sublist for Step 3 containing techniques list */}
                {step.details && (
                  <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                    <div className="text-[10px] tracking-widest text-brand-secondary font-bold uppercase mb-2">
                      Técnicas Práticas Inclusas:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-300">
                      {step.details.map((tech, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                          <span className="font-light">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
