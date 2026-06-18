import { motion } from "motion/react";
import { Award, Sparkles, CheckCircle2, ChevronDown, Calendar, Scissors } from "lucide-react";
import { heroCopy } from "../data/copyData";

interface HeroSectionProps {
  onCtaClick: () => void;
  onScrollDown?: () => void;
}

export default function HeroSection({ onCtaClick, onScrollDown }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-brand-dark text-white pt-10 pb-20 px-4 md:px-8">
      {/* Absolute Ambient Background Blobs for Luxury Vibe */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-accent/10 blur-[150px] pointer-events-none" />

      {/* Top Floating Notification Badge */}
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center mb-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center justify-center text-center flex-wrap gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-medium tracking-widest text-brand-secondary uppercase mb-6 max-w-full"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
          Inscrições Abertas • 100% Presencial • Últimas Vagas
        </motion.div>

        {/* Institution Brand logo designed exactly like the creative */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-8 flex flex-col items-center"
        >
          <span className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase text-stone-400">
            FORMAÇÃO
          </span>
          <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-widest uppercase text-gold-gradient font-serif leading-none mt-2 select-none filter drop-shadow-[0_2px_10px_rgba(229,178,93,0.15)]">
            RAÍZES
          </span>
        </motion.div>
      </div>

      {/* Main Container: Centered Headlines, then Split Section for Destaques & CTA on left, and Photo on right */}
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-10 items-center relative z-10 flex-grow">
        
        {/* Top: Premium Headlines */}
        <div className="w-full flex flex-col items-center justify-center text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.12] balance max-w-4xl"
          >
            Torne-se um <span className="text-gold-gradient font-black relative inline-block">especialista</span> em cacheados e ondulados, e aprenda a entregar resultados que fazem seus clientes voltarem e indicarem seu trabalho.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto"
          >
            {heroCopy.subtitle}
          </motion.p>
        </div>

        {/* Bottom: Split Grid for Info & Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full lg:items-center">
          
          {/* Left Column: Destaques Box & CTA Button */}
          <div className="lg:col-span-6 flex flex-col space-y-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#1c140c] to-brand-dark border border-brand-accent/30 text-left w-full"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-accent font-bold block mb-3">Destaques da Formação Completa</span>
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0" />
                  <span className="text-xs tracking-wide">Prática supervisionada</span>
                </div>
                <div className="flex items-center gap-2.5 text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-secondary shrink-0" />
                  <span className="text-xs tracking-wide">Metodologia científica para todas as curvaturas</span>
                </div>
                <div className="flex items-center gap-2.5 text-stone-200">
                  <Award className="w-4 h-4 text-brand-accent shrink-0 animate-pulse" />
                  <span className="text-xs tracking-wide text-brand-accent font-semibold">Certificado de Conclusão</span>
                </div>
              </div>
              <p className="text-[10px] text-stone-400 mt-4 pt-3 border-t border-white/5 font-light">
                Ofereça um atendimento premium e multiplique seu faturamento por serviço.
              </p>
            </motion.div>

            {/* CTA & Trust Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col items-center lg:items-start gap-3 w-full"
            >
              <a
                href="https://wa.link/x0wc46"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gold-gradient hover:brightness-110 text-brand-dark px-8 py-4.5 rounded-xl font-bold text-sm md:text-base tracking-widest uppercase transition-all duration-300 shadow-2xl shadow-brand-accent/20 cursor-pointer hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-brand-accent/30 overflow-hidden relative group active:scale-98 inline-flex items-center justify-center text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Scissors className="w-4 h-4 text-brand-dark group-hover:rotate-12 transition-transform duration-300" />
                  {heroCopy.cta}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </a>
              <div className="flex items-center gap-1.5 text-xs text-stone-400 mt-1">
                <Calendar className="w-3.5 h-3.5 text-brand-secondary" />
                <span>Próxima turma inicia 21/06. Últimas Vagas.</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Image representing curation/learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-6 w-full flex justify-center relative"
          >
            {/* Decorative frame elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/30 to-brand-primary/20 blur-2xl rounded-3xl opacity-40 -z-10" />

            {/* Elegant premium image container with golden accents */}
            <div className="w-full max-w-md bg-stone-900/90 rounded-2xl border-2 border-brand-secondary/30 p-4 shadow-2xl relative overflow-hidden backdrop-blur-md">
              {/* Glossy overlay reflection */}
              <div className="absolute top-0 left-0 right-0 h-[100%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

              {/* Fine line details */}
              <div className="absolute top-3 left-3 right-3 bottom-3 border border-white/5 rounded-xl pointer-events-none" />
              
              <div className="h-auto w-full rounded-xl relative overflow-hidden border border-brand-secondary/30 group bg-stone-950/80">
                <img
                  src="https://lh3.googleusercontent.com/d/1ewqk5kOR8bk5yR5owb9Qw6eUKwaULvFn"
                  alt="Formação Raízes Presencial"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain block transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-widest bg-brand-dark/80 backdrop-blur-md text-brand-secondary border border-brand-secondary/35 py-1 px-3.5 rounded-full font-bold">
                    Método Raízes
                  </span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none">
                  <h4 className="text-base font-black tracking-tight text-white mb-1 drop-shadow-md">
                    Prática Presencial
                  </h4>
                  <p className="text-[11px] text-stone-300 font-light drop-shadow-sm">
                    Espaço premium de ensino especializado em Curitiba.
                  </p>
                </div>
                
                {/* Accent Golden corner border element to emphasize precision high-ticket feel */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-accent/75 rounded-br-xl pointer-events-none" />
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-accent/75 rounded-tl-xl pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Down arrow indicator */}
      <div className="flex justify-center mt-12">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-1 cursor-pointer text-stone-400 hover:text-brand-accent"
          onClick={onScrollDown || onCtaClick}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Explorar Conteúdo</span>
          <ChevronDown className="w-4 h-4 text-brand-secondary" />
        </motion.div>
      </div>
    </section>
  );
}
