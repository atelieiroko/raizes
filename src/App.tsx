import { useState, useEffect } from "react";
import { ArrowUp, Sparkles, Scissors, ShoppingCart } from "lucide-react";
import HeroSection from "./components/HeroSection";
import UnlocksSection from "./components/UnlocksSection";
import ExplanationSection from "./components/ExplanationSection";
import StepsSection from "./components/StepsSection";
import ProgramSection from "./components/ProgramSection";
import ExampleSection from "./components/ExampleSection";
import BonusSection from "./components/BonusSection";
import OfferSection from "./components/OfferSection";
import SummarySection from "./components/SummarySection";
import AuthorSection from "./components/AuthorSection";
import FaqSection from "./components/FaqSection";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Monitor scroll height to show Back-to-top button and Top conversion stickybar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 600);
      setShowStickyBar(scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToOffer = () => {
    const element = document.getElementById("oferta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContent = () => {
    const element = document.getElementById("conteudo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleEnroll = () => {
    const newWindow = window.open("https://wa.link/x0wc46", "_blank", "noopener,noreferrer");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = "https://wa.link/x0wc46";
    }
  };

  return (
    <div id="app-root" className="min-h-screen bg-brand-light text-brand-dark antialiased overflow-x-hidden selection:bg-brand-accent selection:text-brand-dark">
      
      {/* Elegantly Designed Sticky Floating Header bar for continuous conversion */}
      <header
        className={`fixed top-0 inset-x-0 bg-brand-dark/95 backdrop-blur-md border-b border-brand-accent/20 py-3.5 px-6 z-50 flex items-center justify-between transition-all duration-300 transform ${
          showStickyBar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center gap-2">
          {/* Logo element representation */}
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
          <span className="text-sm font-bold tracking-[0.15em] uppercase text-white font-sans">
            Formação Raízes
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-xs text-stone-300 font-medium">
            Inscrições Presenciais Abertas
          </span>
          <a
            href="https://wa.link/x0wc46"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-accent hover:bg-brand-secondary text-brand-dark font-extrabold text-[10px] sm:text-xs tracking-wider uppercase py-2.5 px-5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 focus:outline-none"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Garantir Vaga
          </a>
        </div>
      </header>

      {/* Main Single Page Sales Narrative */}
      <main className="w-full">
        {/* BLOCK 1: Hero Section */}
        <HeroSection onCtaClick={handleEnroll} onScrollDown={handleScrollToContent} />

        {/* BLOCK 2: O Que Você Vai Desbloquear */}
        <UnlocksSection />

        {/* BLOCK 3: Explicação Do Produto */}
        <ExplanationSection />

        {/* BLOCK 4: O Que Você Vai Aprender */}
        <StepsSection />

        {/* BLOCK 5: Conteúdo Programático */}
        <ProgramSection />

        {/* BLOCK 6: Exemplo Prático */}
        <ExampleSection />

        {/* BLOCK 7: Bônus VIP */}
        <BonusSection />

        {/* BLOCK 8: Oferta Irrecusável */}
        <OfferSection onCtaClick={handleEnroll} />

        {/* BLOCK 9: Resumindo & Garantia */}
        <SummarySection onCtaClick={handleEnroll} />

        {/* BLOCK 10: Autora */}
        <AuthorSection />

        {/* BLOCK 11: FAQ Perguntas Frequentes */}
        <FaqSection />
      </main>

      {/* Solid Minimalist Editorial Footer */}
      <footer className="bg-brand-dark text-[#FAF6F0] py-12 px-6 border-t border-white/5 relative z-10 text-center">
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* Logo Name */}
          <div className="flex justify-center items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-[#E2A745]">
              Formação Raízes
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
          </div>

          <p className="text-xs text-stone-400 max-w-md mx-auto font-light leading-relaxed">
            Formação presencial com certificação e acompanhamento premium. Desenvolvida para profissionais que desejam dominar o diagnóstico, os tratamentos, os cortes e as técnicas de finalização para cabelos ondulados e cacheados.
          </p>

          <div className="w-12 h-px bg-stone-800 mx-auto" />

          {/* Copyright notice (Pure and simple, no tech credentials or fake networks) */}
          <p className="text-[10px] text-stone-500 font-medium tracking-wide">
            © {new Date().getFullYear()} Formação Raízes • Inayê Souza • Salão Simples Assim • Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Floating Badge button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-brand-primary text-white border border-brand-accent/20 shadow-2xl transition-all duration-300 z-40 cursor-pointer ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        } hover:bg-brand-dark active:scale-95`}
        title="Voltar ao início"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

    </div>
  );
}
