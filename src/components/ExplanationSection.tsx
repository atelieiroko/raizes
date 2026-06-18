import { motion } from "motion/react";
import { Quote, Sparkles, BookOpen } from "lucide-react";
import { productExplanation } from "../data/copyData";

export default function ExplanationSection() {
  return (
    <section className="bg-brand-nude text-brand-dark py-24 px-4 md:px-8 border-y border-stone-300">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Section Indicator */}
          <div className="inline-flex items-center gap-2 bg-brand-secondary/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-brand-secondary uppercase">
            <BookOpen className="w-3.5 h-3.5 text-brand-secondary" />
            Filosofia de Trabalho
          </div>

          {/* Core Bold Quote Statement */}
          <div className="relative pt-6 max-w-2xl mx-auto">
            <Quote className="absolute top-0 left-[-20px] md:left-[-40px] w-12 h-12 text-brand-accent/20 transform -scale-x-100" />
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl md:text-3xl font-extrabold tracking-tight text-brand-dark leading-snug italic"
            >
              "O mercado está cheio de profissionais que entendem pouco de cabelo com curvatura."
            </motion.h3>
          </div>

          {/* Decorative separator */}
          <div className="w-16 h-0.5 bg-brand-accent/40 my-2" />

          {/* Paragraph explanation block with beautiful, highly readable editorial type */}
          <div className="space-y-6 max-w-2xl text-left text-sm md:text-base leading-relaxed text-stone-800 font-light pt-4">
            
            <p className="text-stone-900 font-medium">
              E é justamente essa diferença que faz alguns profissionais cobrarem mais, terem agenda cheia e conquistarem clientes fiéis.
            </p>

            <p>
              A <strong className="font-semibold text-brand-dark">Formação Raízes</strong> foi criada para quem deseja dominar de verdade o universo dos cabelos com curvatura. Você aprenderá desde a estrutura do fio até técnicas avançadas de tratamento, corte e finalização.
            </p>

            <p className="p-4 bg-white/45 rounded-xl border border-stone-200/50 italic text-stone-700">
              Tudo de forma prática, presencial e com acompanhamento profissional.
            </p>

            <div className="relative pl-4 border-l-4 border-brand-accent space-y-2 mt-4 py-1">
              <span className="text-xs tracking-widest text-[#A27B5C] uppercase font-bold block">A Verdadeira Maestria</span>
              <p className="text-brand-dark font-semibold">
                Não oferecemos mais um curso, mas sim uma formação completa para quem deseja elevar seu nível técnico, gerar resultados visíveis e construir autoridade no mercado.
              </p>
            </div>

            <p className="text-brand-secondary font-semibold pt-3 text-lg">
              Ao final da formação, você estará preparado para diagnosticar, tratar, cortar cabelos longos e médios e ainda finalizar diferentes tipos de curvaturas com segurança e confiança.
            </p>
          </div>

          {/* Visual Trust Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xl mt-12 bg-white/60 p-6 rounded-2xl border border-stone-300 flex flex-col sm:flex-row justify-around items-center gap-4 text-center sm:text-left"
          >
            <div className="space-y-1">
              <span className="text-2xl font-bold text-brand-dark block">100%</span>
              <span className="text-xs text-stone-600 tracking-wider uppercase font-semibold">Absorção Prática</span>
            </div>
            <div className="w-px h-8 bg-stone-300 hidden sm:block" />
            <div className="space-y-1">
              <span className="text-2xl font-bold text-brand-dark block">Presencial</span>
              <span className="text-xs text-stone-600 tracking-wider uppercase font-semibold">Com suporte individual</span>
            </div>
            <div className="w-px h-8 bg-[#C5C5C5] hidden sm:block" />
            <div className="space-y-1">
              <span className="text-2xl font-bold text-brand-dark block">Completo</span>
              <span className="text-xs text-stone-600 tracking-wider uppercase font-semibold">Do Básico ao Avançado</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
