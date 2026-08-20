export type Language = "pt" | "en"

export const translations = {
  pt: {
    nav: {
      home: "home",
      venture: "venture",
      skills: "Skills",
      projects: "Projects",
      about: "about-me",
      contact: "Contact",
    },
    hero: {
      role: "Engenheiro de Software & Fundador",
      location: "São Paulo, Brasil 🇧🇷.",
      tagline: "Fundador técnico do SympleCrm - CRM em produção para corretoras. Construo sistemas completos, escaláveis e prontos para produção.",
      seeProjects: "Ver Projetos",
      knowMore: "Me conheça melhor",
      portfolio: "Portfolio / 2026",
      tooltips: { github: "GitHub", linkedin: "LinkedIn", cv: "Download CV" },
    },
    venture: {
      label: "01 / Venture",
      title: "SYMPLE CRM",
      kicker: "CRM nichado para corretoras de seguros e consórcio",
      productLabel: "O produto",
      roleLabel: "Meu papel",
      role:
        "Sou o fundador técnico, lido individualmente com Arquitetura, produto, desenvolvimento, banco de dados, automações e infraestrutura completa.",
      description:
        "Os leads chegam pelo WhatsApp e caem num funil onde a IA pré-qualifica, responde e dispara follow-ups sozinha. Em volta disso: chat, hierarquia de equipe multi-tenant, calculadoras de financiamento e consórcio, agenda e dashboard de métricas.",
      metrics: {
        brokerages: "Corretoras",
        activeUsers: "Usuários ativos",
        since: "Em produção desde",
      },
      stackLabel: "Stack em produção",
      cta: "Ver produto",
    },
    stack: {
      label: "02 / Stack",
      title: "O QUE EU CONSTRUO",
      legend: "stack do SympleCrm",
      bands: {
        backend: "Back-end & APIs",
        data: "Dados",
        frontend: "Front-end",
        ai: "IA & Automação",
        infra: "Infra & Deploy",
      },
    },
    projects: {
      label: "03 / Projects",
      title: "PROJETOS",
      subtitle: "Engenharia e projetos paralelos. O produto principal está acima.",
      loadMore: "Mostrar Mais Projetos",
      items: {
        calorieTracker:
          "Rastreador de nutrição com autenticação JWT. Calcula macros e calorias das refeições pela API da FatSecret e acompanha metas diárias de água.",
        urlShortener:
          "Encurtador de URLs com shortcodes personalizados, expiração configurável, contagem de acessos e dashboard de controle.",
        dbBackup:
          "Backup e restore automatizado de bancos por linha de comando. Suporta PostgreSQL e MySQL.",
        datagen:
          "Popula bancos de dados com dados falsos realistas. Tem plugin oficial para o Claude Code, com skills próprias para operar a ferramenta.",
        cryptoExchange:
          "API de cotações de criptomoedas em tempo real via CoinGecko.",
        discordBot:
          "Chatbot de Discord com modelos de IA. Hospedado na nuvem: qualquer pessoa adiciona no próprio servidor.",
        cryptoArb:
          "Monitora discrepância de preço entre corretoras por WebSocket e avisa a arbitragem por e-mail e WhatsApp.",
        leadsScanner:
          "Script gerador de leads que busca empresas sem site, integrado à API do Google Places.",
        harbr:
          "CLI que verifica as portas em uso na sua máquina e abre uma dashboard para um melhor controle do seu sistema.",
      },
    },
    about: {
      label: "04 / About",
      title: "SOBRE MIM",
      timelineLabel: "Trajetória",
      intro:
        "Gosto de entender o problema inteiro antes de escrever a primeira linha: do schema até o deploy. Prefiro arquitetura limpa a solução esperta, e ferramenta bem acabada a mais uma feature.",
      intro2:
        "Aprendi pondo a mão na massa. Passei um bom tempo construindo CLIs, APIs e aplicações full-stack por conta própria, cada uma resolvendo um problema que eu tinha de verdade. Quebrar e consertar projeto meu me ensinou mais sobre arquitetura, banco e deploy do que qualquer matéria da faculdade. Foi essa base que deixou o SympleCrm possível.",
      timeline: {
        mackenzie: {
          what: "Ciência da Computação · Mackenzie",
          note: "Um ano. Lógica de programação, Python, C e análise de dados. A base que ainda sustenta tudo.",
        },
        fiap: {
          what: "Engenharia de Software · FIAP",
          note: "Transferência. Formatura prevista para dezembro de 2029.",
        },
        tools: {
          what: "Ferramentas e sistemas próprios",
          note: "CLIs publicadas, APIs e aplicações full-stack em produção. Datagen, DB-Backup, CalorieTracker.",
        },
        symplecrm: {
          what: "SympleCrm · fundador técnico",
          note: "Primeiro cliente pagante. Arquitetura, produto, banco, automações e infraestrutura inteiramente minhas.",
        },
      },
    },
    footer: {
      label: "05 / Connect",
      title: "CONTATO",
      email: "Email",
      social: "Social",
      location: "Location",
      locationCity: "São Paulo",
      locationCountry: "Brasil",
      status: "Status",
      availability: "Disponibilidade",
      available: "Construindo o SympleCrm · aberto a oportunidades",
      updated: "Updated",
      copyright: "© 2026 Arthur Jircik. All rights reserved.",
    },
  },
  en: {
    nav: {
      home: "home",
      venture: "venture",
      skills: "Skills",
      projects: "Projects",
      about: "about-me",
      contact: "Contact",
    },
    hero: {
      role: "Software Engineer & Founder",
      location: "São Paulo, Brazil 🇧🇷.",
      tagline: "Technical founder of SympleCrm - a CRM running in production for insurance brokerages. I build complete, scalable, production-ready systems.",
      seeProjects: "See Projects",
      knowMore: "Get to know me",
      portfolio: "Portfolio / 2026",
      tooltips: { github: "GitHub", linkedin: "LinkedIn", cv: "Download CV" },
    },
    venture: {
      label: "01 / Venture",
      title: "SYMPLEC RM",
      kicker: "A niche CRM for insurance and consortium brokerages",
      productLabel: "The product",
      roleLabel: "My role",
      role:
        "I am the technical founder, I deal with Architecture, product, development, database, automations, and full infrastructure.",
      description:
        "Leads arrive over WhatsApp and land in a pipeline where AI pre-qualifies them, replies, and fires follow-ups on its own. Around it: scheduling, a multi-tenant team hierarchy, financing and consortium calculators with PDF export, and a metrics dashboard.",
      metrics: {
        brokerages: "Brokerages",
        activeUsers: "Active users",
        since: "In production since",
      },
      stackLabel: "Production stack",
      cta: "View product",
    },
    stack: {
      label: "02 / Stack",
      title: "WHAT I BUILD",
      legend: "SympleCrm stack",
      bands: {
        backend: "Back-end & APIs",
        data: "Data",
        frontend: "Front-end",
        ai: "AI & Automation",
        infra: "Infra & Deploy",
      },
    },
    projects: {
      label: "03 / Projects",
      title: "PROJECTS",
      subtitle: "Engineering work and side projects. The main product is above.",
      loadMore: "Show More Projects",
      items: {
        calorieTracker:
          "Nutrition tracker with JWT auth. Calculates meal macros and calories through the FatSecret API and tracks daily water goals.",
        urlShortener:
          "URL shortener with custom shortcodes, configurable expiration, access counting, and a management dashboard.",
        dbBackup:
          "Automated database backup and restore from the command line. Supports PostgreSQL and MySQL.",
        datagen:
          "Fills databases with realistic fake data. Ships with an official Claude Code plugin and its own skills for driving the tool.",
        cryptoExchange:
          "Real-time cryptocurrency quote API backed by CoinGecko.",
        discordBot:
          "Discord chatbot running AI models. Cloud-hosted, so anyone can add it to their own server.",
        cryptoArb:
          "Watches price gaps between exchanges over WebSocket and reports arbitrage by email and WhatsApp.",
        leadsScanner:
          "Leads Generator Script that looks for business without website integrated with the Google Places API",
        harbr:
         "CLI tool that scans used ports on your machine and opens a clean dashboard for better control over your machine",
      },
    },
    about: {
      label: "04 / About",
      title: "ABOUT ME",
      timelineLabel: "Trajectory",
      intro:
        "I like to understand the whole problem before writing the first line: from schema to deploy. I prefer clean architecture over clever fixes, and a well-finished tool over one more feature.",
      intro2:
        "I learned by getting my hands dirty. I spent a long stretch building CLIs, APIs, and full-stack apps on my own, each one solving a problem I actually had. Breaking and fixing my own projects taught me more about architecture, databases, and deployment than any class did. That foundation is what made SympleCrm possible.",
      timeline: {
        mackenzie: {
          what: "Computer Science · Mackenzie",
          note: "One year. Programming logic, Python, C, and data analysis. The foundation everything still rests on.",
        },
        fiap: {
          what: "Software Engineering · FIAP",
          note: "Transferred. Expected to graduate in December 2029.",
        },
        tools: {
          what: "Tools and systems of my own",
          note: "Published CLIs, APIs, and full-stack apps in production. Datagen, DB-Backup, CalorieTracker.",
        },
        symplecrm: {
          what: "SympleCrm · technical founder",
          note: "First paying customer. Architecture, product, database, automations, and infrastructure entirely mine.",
        },
      },
    },
    footer: {
      label: "05 / Connect",
      title: "CONTACT",
      email: "Email",
      social: "Social",
      location: "Location",
      locationCity: "São Paulo",
      locationCountry: "Brazil",
      status: "Status",
      availability: "Availability",
      available: "Building SympleCrm · open to opportunities",
      updated: "Updated",
      copyright: "© 2026 Arthur Jircik. All rights reserved.",
    },
  },
} as const
