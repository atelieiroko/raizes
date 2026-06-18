export interface Benefit {
  text: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  details?: string[];
}

export interface ProgramTopic {
  title: string;
  items: string[];
  objective?: string;
  practical?: string;
}

export interface ProgramDay {
  schedule: string;
  title: string;
  introduction: string[];
  topics: ProgramTopic[];
  objectives: string[];
  practicalItems?: string[];
}

export interface Bonus {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  value: string;
}

export const heroCopy = {
  institution: "Formação Raízes",
  title: "Torne-se um Especialista em Cachos e Crespos e Aprenda a Entregar Resultados que Fazem Seus Clientes Voltarem e Indicarem Seu Trabalho",
  subtitle: "Domine diagnóstico capilar, tratamentos, finalizações e técnicas profissionais de cortes para cabelos ondulados e cacheados através de uma formação presencial, prática e certificada.",
  priceCash: "De R$ 4.100 à vista",
  priceInstallments: "Ou em até 10x sem juros de R$ 449,90",
  badge: "Certificado de Conclusão Incluso",
  cta: "QUERO GARANTIR MINHA VAGA AGORA"
};

export const unlocksCopy: string[] = [
  "Aprenda a identificar exatamente o que cada cabelo precisa antes de iniciar qualquer tratamento",
  "Domine técnicas de finalização para definição, volume e controle de frizz",
  "Ofereça atendimentos especializado e aumente o valor dos seus serviços",
  "Torne-se referência em cabelos ondulados e cacheados na sua região"
];

export const productExplanation = {
  title: "A Diferença entre Aplicar Produtos e Entender o Cabelo",
  paragraphs: [
    "O mercado está cheio de profissionais que entendem pouco de cabelo com curvatura.",
    "E é justamente essa diferença que faz alguns profissionais cobrarem mais, terem agenda cheia e conquistarem clientes fiéis.",
    "A Formação Raízes foi criada para quem deseja dominar de verdade o universo dos cabelos com curvatura.",
    "Você aprenderá desde a estrutura do fio até técnicas avançadas de tratamento, corte e finalização.",
    "Tudo de forma prática, presencial e com acompanhamento profissional.",
    "Não oferecemos mais um curso, mas sim uma formação completa para quem deseja elevar seu nível técnico, gerar resultados visíveis e construir autoridade no mercado.",
    "Ao final da formação, você estará preparado para diagnosticar, tratar, cortar cabelos longos e médios e ainda finalizar diferentes tipos de curvaturas com segurança e confiança."
  ]
};

export const learningSteps: Step[] = [
  {
    number: "Passo 01",
    title: "Entender o Cabelo Antes de Qualquer Procedimento",
    description: "Aprenda sobre estrutura capilar, curvaturas, porosidade, densidade, elasticidade, espessura e miscigenação dos fios. Você saberá exatamente como identificar as necessidades reais de cada cliente."
  },
  {
    number: "Passo 02",
    title: "Criar Tratamentos que Geram Transformação",
    description: "Domine hidratação, nutrição, reconstrução, cronograma capilar e umectação, aprendendo a identificar com precisão as necessidades de cada cabelo e a indicar os tratamentos mais adequados para cada caso. Você deixará de trabalhar no achismo e passará a atuar com segurança, técnica e resultados reais."
  },
  {
    number: "Passo 03",
    title: "Especialização em Corte e Geometria",
    description: "Domine o caimento e o comportamento sob fator encolhimento. Aprenda cortes a seco, molhado, em camadas e modelagens personalizadas para cada curvatura.",
    details: [
      "Leitura de caimento natural",
      "Fator de encolhimento",
      "Corte a seco e molhado",
      "Distribuição de volume",
      "Camadas (baixas a super altas)",
      "Modelos modernos (Bob, Shaggy, Mullet)"
    ]
  },
  {
    number: "Passo 04",
    title: "Finalizar com Resultado Profissional",
    description: "Aprenda técnicas profissionais para entregar resultados que impressionam seus clientes.",
    details: [
      "Fitagem",
      "Fitagem Estrutural",
      "Dedoliss",
      "Finalização para definição",
      "Finalização para volume",
      "Técnicas profissionais de secagem"
    ]
  }
];

export const programCopy: ProgramDay[] = [
  {
    schedule: "DIAS 1 E 2",
    title: "Fundamentos, Diagnóstico Capilar & Tratamentos Avançados",
    introduction: [
      "Antes de aprender qualquer técnica, você precisa entender a ciência real do cabelo.",
      "Nestes dois primeiros encontros, você desenvolverá a capacidade de analisar cada fio individualmente, identificar suas necessidades e criar protocolos personalizados para cada cliente."
    ],
    topics: [
      {
        title: "Fundamentos & Diagnóstico Capilar",
        items: [
          "Introdução ao universo dos cabelos com curvatura",
          "Estrutura do fio capilar",
          "Tipos de curvatura",
          "Identificação da porosidade",
          "Identificação da miscigenação capilar",
          "Elasticidade, densidade e espessura",
          "Diagnóstico capilar profissional",
          "Necessidades específicas de cada fio"
        ]
      },
      {
        title: "Corte para Cabelos com Curvatura",
        items: [
          "Leitura do caimento natural do cabelo",
          "Fator encolhimento",
          "Entender como a porosidade interfere no resultado",
          "Atenção à miscigenação capilar",
          "Geometria do corte",
          "Ângulos de corte",
          "Projeções de corte",
          "Corte a seco",
          "Corte molhado",
          "Corte em camadas baixas",
          "Corte em camadas médias",
          "Corte em camadas altas",
          "Corte em camadas super altas",
          "Corte long bob",
          "Corte bob",
          "Cortes com franja",
          "Corte Shaggy",
          "Corte Mullet",
          "Corte assimétrico",
          "Corte em cabelo misto",
          "Tipos de tesouras"
        ]
      },
      {
        title: "Tratamentos & Protocolos Avançados",
        items: [
          "Hidratação, nutrição e reconstrução",
          "Como identificar o tratamento correto",
          "Cronograma capilar profissional",
          "Umectação e reposição lipídica",
          "Tratamentos para cabelos em transição",
          "Tratamentos pós-química"
        ]
      }
    ],
    objectives: [
      "Aprender a ler o cabelo antes de qualquer procedimento.",
      "Entender suas necessidades reais.",
      "Escolher e indicar os tratamentos corretos.",
      "Executar protocolos e diagnósticos com total segurança científica."
    ],
    practicalItems: [
      "Diagnósticos avançados e mapeamento da saúde dos fios.",
      "Aplicação supervisionada de rituais de tratamento profissionais."
    ]
  },
  {
    schedule: "DIAS 3 E 4",
    title: "Especialização em Corte para Cabelos com Curvatura",
    introduction: [
      "Agora que você entende o comportamento dos fios, é hora de dominar uma das áreas mais valorizadas do mercado: o corte especializado para cabelos cacheados e crespos.",
      "Você aprenderá a enxergar o caimento natural do cabelo e construir cortes personalizados que valorizam a identidade de cada cliente."
    ],
    topics: [
      {
        title: "Corte para Cabelos com Curvatura",
        items: [
          "Leitura do caimento natural do cabelo",
          "Fator encolhimento",
          "Entender como a porosidade interfere no resultado",
          "Atenção à miscigenação capilar",
          "Geometria do corte",
          "Ângulos de corte",
          "Projeções de corte",
          "Corte a seco",
          "Corte molhado",
          "Corte em camadas baixas",
          "Corte em camadas médias",
          "Corte em camadas altas",
          "Corte em camadas super altas",
          "Corte long bob",
          "Corte bob",
          "Cortes com franja",
          "Corte Shaggy",
          "Corte Mullet",
          "Corte assimétrico",
          "Corte em cabelo misto",
          "Tipos de tesouras"
        ]
      }
    ],
    objectives: [
      "Entender a teoria do corte e sua geometria.",
      "Projeções e caimentos.",
      "Compreender as particularidades de cada cliente.",
      "Entender o tipo de cabelo que irá cortar."
    ],
    practicalItems: [
      "Demonstração + prática supervisionada."
    ]
  },
  {
    schedule: "DIA 5",
    title: "Finalização Profissional, Secagem & Atendimento de Elite",
    introduction: [
      "A etapa decisiva para fixar o resultado: aprenda como estruturar rituais de secagem e finalização de alto impacto comercial.",
      "Aprenda técnicas profissionais para entregar definições duradouras ou volumes imponentes que farão seus clientes se fidelizarem."
    ],
    topics: [
      {
        title: "Finalização & Secagem Superior",
        items: [
          "Tipos de finalização",
          "Fitagem",
          "Fitagem estrutural",
          "Dedoliss",
          "Finalização para definição sem volume",
          "Finalização para volume",
          "Técnicas para redução de frizz",
          "Como escolher finalizadores corretamente",
          "Técnicas profissionais de secagem",
          "Atendimento humanizado e acolhimento da cliente",
          "Indicação correta de manutenção home care"
        ]
      }
    ],
    objectives: [
      "Aplicar rituais de finalização personalizados para cada tipo de curvatura.",
      "Dominar diferentes métodos como fitagem tradicional, fitagem estrutural e dedoliss.",
      "Escolher finalizadores tecnicamente fundamentados na saúde dos fios.",
      "Aperfeiçoar a experiência do cliente e o pós-atendimento personalizado de salão."
    ],
    practicalItems: [
      "Técnicas de secagem profissional e uso de difusor.",
      "Prática direta de protocolos de finalização em modelos reais."
    ]
  }
];

export const practicalExample = {
  scenario: "Imagine uma cliente chegando ao seu atendimento com os fios ressecados, sem definição e após anos de química.",
  oldWay: "Hoje você talvez escolha produtos baseando-se apenas na experiência.",
  newWayTitle: "Após a Formação Raízes, você fará diferente.",
  steps: [
    "Primeiro realizará um diagnóstico completo.",
    "Identificará porosidade, densidade, elasticidade e necessidades específicas daquele cabelo.",
    "Montará um protocolo personalizado e executará o tratamento correto.",
    "Realizará o corte ideal respeitando a curvatura, o caimento natural e a geometria do cabelo.",
    "Finalizará utilizando a técnica e secagem ideais para aquela curvatura."
  ],
  resultsTitle: "Resultado:",
  results: [
    "Uma transformação visível para o cliente.",
    "Mais confiança para você.",
    "E um atendimento que justifica cobrar mais pelo seu trabalho."
  ]
};

export const vipBonus: Bonus[] = [
  {
    id: "01",
    title: "Apostila Digital Completa da Formação",
    description: "Todo o conteúdo organizado digitalmente para consulta rápida durante seus atendimentos.",
    benefits: [
      "Revisão prática dos conteúdos",
      "Mais segurança profissional",
      "Material de apoio permanente"
    ],
    value: "Incluso na Formação"
  },
  {
    id: "02",
    title: "Ficha de Diagnóstico Capilar Profissional",
    description: "Modelos prontos para aplicar durante os atendimentos.",
    benefits: [
      "Atendimento mais profissional",
      "Histórico completo das clientes",
      "Tratamentos mais assertivos"
    ],
    value: "Incluso na Formação"
  },
  {
    id: "03",
    title: "Certificado de Conclusão",
    description: "Comprove sua participação e capacitação profissional.",
    benefits: [
      "Mais autoridade",
      "Diferencial competitivo",
      "Valorização profissional"
    ],
    value: "Incluso na Formação"
  }
];

export const offerCopy = {
  title: "Sua Oportunidade de se Destacar no Mercado",
  subtitle: "Você terá acesso à Formação Raízes para iniciantes",
  dates: [
    "21/06",
    "28/06",
    "05/07",
    "12/07",
    "19/07"
  ],
  time: "Das 09h30 às 18h30",
  interval: "Com 1 hora de intervalo para almoço.",
  hospitality: "Coffee Break incluso durante os encontros.",
  investment: {
    cash: "R$ 4.100 à vista",
    separator: "ou",
    installments: "R$ 4.499 em até 10x sem juros"
  },
  inclusions: [
    "Formação presencial",
    "Conteúdo completo para iniciantes",
    "Material de apoio",
    "Coffee Break",
    "Certificado de Conclusão",
    "Acompanhamento durante as aulas"
  ],
  scarcity: "As vagas são limitadas para garantir qualidade no acompanhamento prático.",
  cta: "QUERO GARANTIR MINHA VAGA AGORA"
};

export const summaryCopy = {
  internetComparison: "Você pode continuar aprendendo através de vídeos soltos na internet.",
  alternativeComparison: "Ou pode investir em uma formação estruturada, prática e criada para acelerar sua evolução profissional.",
  deliversTitle: "A Formação Raízes entrega o que realmente importa:",
  delivers: [
    "Conhecimento técnico",
    "Diagnóstico profissional",
    "Tratamentos personalizados",
    "Geometria e técnicas de corte especializado",
    "Técnicas avançadas de finalização",
    "Segurança para atender diferentes curvaturas",
    "Certificado de conclusão",
    "Mais autoridade no mercado"
  ],
  outcomeText: "Ao final da formação, você não terá apenas mais informação. Terá um método de trabalho que gera resultados.",
  guarantee: {
    days: 7,
    text: "E se por qualquer motivo você sentir que a formação não era o que esperava, terá 7 dias para solicitar reembolso."
  },
  finalCall: [
    "As vagas são limitadas.",
    "A oportunidade está diante de você.",
    "Agora a decisão está nas suas mãos.",
    "Garanta sua vaga hoje mesmo."
  ]
};

export const authorCopy = {
  name: "Inayê Souza",
  role: "Especialista em Cabelos com Curvatura",
  bio: `Inayê Souza é especialista em cabelos com curvatura e possui mais de 10 anos de experiência dedicados ao aperfeiçoamento técnico e à formação de profissionais que desejam se destacar no mercado da beleza. Especialista em cuidados, tratamentos, cortes e finalizações para cabelos ondulados, cacheados e crespos, ela une conhecimento, prática e vivência de salão para ensinar técnicas aplicáveis à rotina profissional.

Ao longo de sua trajetória, tem contribuído para o desenvolvimento de profissionais iniciantes e experientes, compartilhando métodos, técnicas e estratégias que geram resultados reais. Sua missão é formar especialistas capazes de oferecer atendimentos de excelência, elevar o padrão dos serviços prestados e construir carreiras sólidas e reconhecidas no segmento dos cabelos com curvatura.`
};
