import { motion } from "motion/react";
import { BookMarked, ClipboardList, Gift, ShieldAlert, BadgeCheck } from "lucide-react";
import { vipBonus } from "../data/copyData";

export default function BonusSection() {
  const icons = [
    <BookMarked className="w-10 h-10 text-brand-secondary" />,
    <ClipboardList className="w-10 h-10 text-brand-secondary" />,
    <BadgeCheck className="w-10 h-10 text-[#4ADE80]" />
  ];

  return (
    <section className="bg-brand-light text-brand-dark py-24 px-4 md:px-8 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-brand-accent/15 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#B27B5C] uppercase">
            <Gift className="w-3.5 h-3.5 text-brand-secondary" />
            Vantagens Exclusivas
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-dark leading-tight">
            Bônus <span className="text-brand-secondary">VIP Inclusos</span>
          </h2>
          <p className="text-sm md:text-base text-stone-600 font-light leading-relaxed">
            Materiais de apoio de alta qualidade desenvolvidos especificamente para acelerar sua transição técnica e agilizar sua operação comercial no salão de beleza.
          </p>
        </div>

        {/* 3 Columns Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {vipBonus.map((bonus, idx) => {
            return (
              <motion.div
                key={bonus.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white rounded-3xl border border-stone-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-brand-accent/40 transition-all duration-300 relative group"
              >
                {/* Free Stamp Badge */}
                <span className="absolute top-4 right-4 bg-brand-accent/10 group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors duration-300 text-[10px] uppercase font-mono font-bold tracking-widest text-brand-secondary group-hover:text-stone-900 px-3 py-1 rounded-full border border-brand-accent/20">
                  Bônus 0{bonus.id}
                </span>

                <div>
                  {/* Decorative Icon */}
                  <div className="mb-6 p-4 bg-brand-light rounded-2xl w-fit border border-stone-100 group-hover:scale-105 transition-transform duration-300">
                    {icons[idx]}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg md:text-xl font-extrabold tracking-tight text-neutral-900 group-hover:text-brand-primary transition-colors duration-200 mb-2">
                    {bonus.title}
                  </h3>
                  <p className="text-xs md:text-sm text-stone-600 font-light leading-relaxed mb-6">
                    {bonus.description}
                  </p>

                  {/* Bullet Benefits List */}
                  <div className="pt-4 border-t border-stone-100 space-y-2.5">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-stone-400 block mb-1">Impacto prático:</span>
                    {bonus.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2.5">
                        <span className="text-[#4ADE80] font-sans font-bold text-xs">✓</span>
                        <span className="text-xs md:text-sm text-stone-800 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stamp of Invaluable/Free */}
                <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-end">
                  <div className="bg-[#4ADE80]/10 text-emerald-850 font-bold text-xs py-1.5 px-3 rounded-lg border border-emerald-200/50 uppercase tracking-wider font-mono">
                    {bonus.value}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Security Warning Accent line */}
        <div className="mt-14 max-w-xl mx-auto p-4 rounded-xl bg-orange-50 border border-orange-200 flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-orange-600 shrink-0" />
          <p className="text-[11px] md:text-xs text-orange-950 font-medium leading-normal animate-pulse">
            <strong>Atenção:</strong> Estes bônus são exclusivos para esta turma específica e serão liberados no fechamento do contrato. Material pessoal e intransferível.
          </p>
        </div>

      </div>
    </section>
  );
}
