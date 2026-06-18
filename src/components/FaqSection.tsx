import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, MapPin, CreditCard, Award, UserCheck, BookOpen, Clock } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string | ReactNode;
  category: string;
  icon: ReactNode;
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-0");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const faqData: FaqItem[] = [
    {
      id: "faq-0",
      category: "Localização",
      icon: <MapPin className="w-5 h-5 text-brand-secondary" />,
      question: "Onde será realizada a formação e como funciona o espaço?",
      answer: "A Formação Raízes é realizada de forma 100% presencial em nosso espaço de ensino especializado em Curitiba (Capão da Imbuia), totalmente estruturado como um salão de alto padrão. O endereço exato e as instruções de acesso são informados mediante contato de interesse na Formação. O ambiente conta com lavatórios profissionais, bancadas completas e iluminação adequada para que você simule as condições reais de um atendimento premium."
    },
    {
      id: "faq-1",
      category: "Pagamento",
      icon: <CreditCard className="w-5 h-5 text-brand-secondary" />,
      question: "Quais são as formas de pagamento disponíveis e há parcelamento?",
      answer: "Oferecemos flexibilidade para o seu investimento. Você pode optar pelo pagamento à vista de R$ 4.100,00 via Pix ou Transferência Bancária. Se preferir, poderá parcelar no cartão de crédito em até 10x sem juros de R$ 449,90 (totalizando R$ 4.499,00), utilizando um ou mais cartões para facilitar o limite."
    },
    {
      id: "faq-2",
      category: "Requisitos",
      icon: <UserCheck className="w-5 h-5 text-brand-secondary" />,
      question: "Preciso ter experiência prévia para fazer a formação?",
      answer: "Não! A nossa metodologia de ensino foi meticulosamente desenhada para cobrir desde os fundamentos mais básicos (ciência do fio, tipos de curvatura) até a complexidade dos tratamentos e finalizações estruturadas. Ela é ideal tanto para iniciantes absolutos que desejam começar a carreira com um diferencial de alto valor, quanto para profissionais em atividade que buscam se especializar para cobrar mais e fidelizar seus clientes."
    },
    {
      id: "faq-4",
      category: "Material",
      icon: <BookOpen className="w-5 h-5 text-brand-secondary" />,
      question: "Será entregue algum material didático?",
      answer: "Sim! Todos os alunos recebem nossa Apostila Digital de Apoio Completa (recurso digital), contendo informações sobre porosidade, elasticidade, cronograma e as guias de fitagem estrutural para consulta permanente. Além disso, você receberá o modelo digital da nossa renomada Ficha de Diagnóstico Capilar Profissional para já aplicar nos seus atendimentos."
    },
    {
      id: "faq-5",
      category: "Logística",
      icon: <Clock className="w-5 h-5 text-brand-secondary" />,
      question: "Quais são os horários, intervalos e se há alimentação inclusa?",
      answer: "Os encontros presenciais duram o dia inteiro, com início pontual às 09h30 e encerramento às 18h30. Temos um intervalo estratégico de 1 hora para almoço (livre, com excelentes opções próximas ao nosso local). Fornecemos também um Coffee Break de alto padrão e muito completo nos nossos intervalos para recarregarmos as energias e possibilitar conexões valiosas (networking) entre os participantes."
    },
    {
      id: "faq-6",
      category: "Material",
      icon: <UserCheck className="w-5 h-5 text-brand-secondary" />,
      question: "Qual é a lista de materiais (Kit Profissional) que preciso levar?",
      answer: (
        <div className="space-y-4 pr-2">
          <p>Para o pleno aproveitamento das aulas práticas presenciais, o aluno deverá levar seu próprio kit profissional contendo</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-stone-300 mt-2 bg-white/[0.02] p-4 rounded-xl border border-white/5">
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
          <p className="text-xs text-brand-accent font-semibold bg-brand-accent/5 p-3 rounded-lg border border-brand-accent/20">
            Precisaremos de modelos reais, tragam sua família e amigas.
          </p>
          <p className="text-xs text-stone-400 italic font-light pt-1">
            Dicas detalhadas de especificações recomendadas e fornecedores parceiros serão fornecidas no momento de fechamento da matrícula.
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="faq" className="bg-[#0B0B0B] text-white py-24 px-4 md:px-8 relative overflow-hidden border-t-2 border-brand-accent/15 z-10">
      
      {/* Decorative Gold backglow for luxurious ambiance */}
      <div className="absolute right-[-10%] top-[20%] w-[35vw] h-[35vw] rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[10%] w-[35vw] h-[35vw] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <span className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-brand-accent uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-brand-secondary" />
            Dúvidas Frequentes • FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Perguntas <span className="text-gold-gradient font-black">Frequentes</span>
          </h2>
          <p className="text-sm md:text-base text-stone-400 font-light max-w-xl mx-auto">
            Tem alguma dúvida sobre a Formação Raízes? Preparamos respostas detalhadas para as principais perguntas dos nossos futuros especialistas.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                id={`faq-container-${index}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white/[0.03] border-brand-accent/40 shadow-[0_4px_25px_rgba(229,178,93,0.06)]"
                    : "bg-white/[0.01] border-white/5 hover:border-white/10"
                }`}
              >
                {/* Trigger Button */}
                <button
                  id={`faq-btn-${index}`}
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left gap-4 cursor-pointer focus:outline-none focus:bg-white/[0.02]"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon container */}
                    <div className={`p-2.5 rounded-xl border shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-brand-accent/10 border-brand-accent/30 text-brand-accent scale-105"
                        : "bg-white/5 border-white/5 text-stone-400"
                    }`}>
                      {item.icon}
                    </div>

                    <div>
                      {/* Category helper */}
                      <span className="text-[10px] font-mono tracking-widest text-[#B27B5C] uppercase font-bold block mb-1">
                        {item.category}
                      </span>
                      <h3 className={`text-sm sm:text-base font-bold tracking-tight transition-colors duration-200 ${
                        isOpen ? "text-brand-accent font-extrabold" : "text-stone-200"
                      }`}>
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  {/* Expand Chevron */}
                  <div className={`p-1.5 rounded-full border shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "bg-brand-accent border-brand-accent text-brand-dark rotate-180"
                      : "bg-white/5 border-white/10 text-stone-400"
                  }`}>
                    <ChevronDown className="w-4 h-4 step-chevron" />
                  </div>
                </button>

                {/* Collapsible Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-7 pb-7 pt-1 border-t border-white/5 ml-[54px] pr-8">
                        <div className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <motion.div
          id="faq-footer-banner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-stone-900 to-black rounded-2xl border border-brand-accent/20 p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-left space-y-1">
            <h4 className="text-base font-bold text-white">Continua com alguma dúvida pontual?</h4>
            <p className="text-xs text-stone-400 font-light">
              Fale diretamente com nossa assessoria técnica pelo WhatsApp para receber atendimento personalizado.
            </p>
          </div>
          <a
            href="https://wa.link/x0wc46"
            target="_blank"
            referrerPolicy="no-referrer"
            className="inline-flex items-center gap-2 bg-brand-primary text-white hover:bg-gold-gradient hover:text-brand-dark font-extrabold text-xs tracking-widest uppercase py-3.5 px-6 rounded-xl transition-all duration-300 shrink-0 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-98"
          >
            Falar pelo WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}
