import { motion } from "motion/react";
import { Award, Sparkles, Star, Quote } from "lucide-react";
import { authorCopy } from "../data/copyData";

export default function AuthorSection() {
  return (
    <section className="bg-brand-dark text-white py-24 px-4 md:px-8 relative overflow-hidden border-t border-brand-accent/20">
      
      {/* Decorative Warm Backglow */}
      <div className="absolute left-[-15%] top-[-10%] w-[35vw] h-[35vw] rounded-full bg-brand-primary/10 blur-[140px] pointer-events-none" />
      <div className="absolute right-[-15%] bottom-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait representation / Art box (lg:col-span-5) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer Glowing Border */}
              <div className="absolute inset-x-[-8px] inset-y-[-8px] bg-gradient-to-tr from-brand-secondary via-brand-accent to-brand-secondary rounded-2xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
              
              <div className="relative w-72 h-96 bg-stone-900 border border-brand-accent/30 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
                
                {/* Wavy line textures reflecting coily hair */}
                <div className="absolute right-[-20%] bottom-[-10%] w-[100%] h-[100%] pointer-events-none opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-brand-accent stroke-current fill-none stroke-3">
                    <path d="M0,50 Q25,30 50,50 T100,50 T150,50" />
                    <path d="M0,60 Q25,40 50,60 T100,60 T150,60" />
                    <path d="M0,70 Q25,50 50,70 T100,70 T150,70" />
                  </svg>
                </div>

                <div className="flex justify-between items-start z-10">
                  <span className="text-[10px] font-mono tracking-widest text-brand-accent uppercase font-bold">EDUCADORA MASTER</span>
                  <Award className="w-5 h-5 text-brand-secondary" />
                </div>

                {/* Abstract Stylized Avatar Box */}
                <div className="flex flex-col items-center py-6 z-10">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-brand-secondary/40 shadow-xl mb-4 relative bg-stone-950">
                    <img
                      src="https://lh3.googleusercontent.com/d/1y-NEzG89pp4XSMmfFCfcueEgakClKZcd"
                      alt="Inayê Souza"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 bg-brand-accent rounded-full border-2 border-stone-900 flex items-center justify-center z-10">
                      <Star className="w-2 h-2 text-brand-dark" />
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-widest uppercase">Inayê Souza</h4>
                  <span className="text-xs text-brand-accent mt-1 font-medium text-center">{authorCopy.role}</span>
                  <span className="text-[10px] text-stone-400 mt-0.5 font-medium text-center">Salão Simples Assim</span>
                </div>

                {/* Bottom Badge details */}
                <div className="pt-3 border-t border-white/5 text-center text-[10px] text-stone-400 font-medium z-10 uppercase tracking-widest">
                  Formando Novas Referências Capilares
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 bg-brand-primary/20 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest text-brand-accent uppercase">
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
              Quem te guia
            </div>

            <div className="space-y-2">
              <span className="text-xs tracking-widest text-brand-secondary uppercase font-bold block">Mentora Principal</span>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                {authorCopy.name}
              </h3>
            </div>

            {/* Custom Quote Layout */}
            <div className="relative bg-white/[0.02] border-l-4 border-brand-accent p-6 rounded-r-xl">
              <Quote className="absolute top-4 right-4 w-10 h-10 text-brand-accent/5 pointer-events-none" />
              <p className="text-xs md:text-sm text-stone-300 font-light leading-relaxed mb-4">
                "Minha missão é formar especialistas capazes de entregar resultados reais, elevar o padrão dos atendimentos e conquistar reconhecimento através da excelência profissional."
              </p>
              <span className="text-[10px] uppercase font-mono tracking-widest text-brand-secondary font-bold">O COMPROMISSO RAÍZES</span>
            </div>

            {/* Main bio content */}
            <p className="text-sm md:text-base text-stone-300 font-light leading-relaxed whitespace-pre-line text-justify">
              {authorCopy.bio}
            </p>

            {/* Footer stamp */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-accent" />
                <span>Educação Prática Presencial</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-accent" />
                <span>Formação Certificada</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
