export type Language = "pt" | "en"

export const translations = {
  pt: {
    nav: {
      home: "home",
      experience: "experiência",
      skills: "Skills",
      projects: "Projects",
      about: "about-me",
      contact: "Contact",
    },
    hero: {
      role: "Engenheiro de Software",
      location: "São Paulo, Brasil 🇧🇷.",
      tagline: "Desenvolvedor full stack. Construí o SympleCrm, CRM SaaS que rodou em produção para corretoras. Construo sistemas completos, escaláveis e prontos para produção.",
      seeProjects: "Ver Projetos",
      knowMore: "Me conheça melhor",
      portfolio: "Portfolio / 2026",
      tooltips: { github: "GitHub", linkedin: "LinkedIn", cv: "Download CV" },
    },
    experience: {
      label: "01 / Experiência",
      title: "EXPERIÊNCIA",
      stackLabel: "Stack",
      items: {
        symplecrm: {
          role: "Desenvolvedor Full Stack",
          company: "SympleCrm",
          kicker: "CRM SaaS para corretoras",
          summary:
            "Desenvolvi a plataforma de ponta a ponta e a coloquei em produção com corretoras usando no dia a dia. Os leads chegam pelo WhatsApp e caem num funil onde a IA pré-qualifica, responde e dispara follow-ups sozinha.",
          highlights: [
            { label: "Arquitetura", text: "TanStack Start, React 19 e TypeScript rodando em Cloudflare Workers." },
            { label: "Dados", text: "Postgres multi-tenant no Supabase, com isolamento via RLS, triggers e RPCs." },
            { label: "IA & automação", text: "n8n e LLMs (OpenAI / Groq) qualificando leads e fazendo follow-up no WhatsApp." },
            { label: "Produto", text: "Hierarquia de equipe, chat, agenda, calculadoras de financiamento e consórcio e dashboard de métricas." },
          ],
        },
      },
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
      subtitle: "Engenharia e projetos paralelos.",
      loadMore: "Mostrar Mais Projetos",
      items: {
        helix:
          "CRM de prospecção que busca no Google Maps negócios sem site e acompanha o contato num pipeline. Better Auth, isolamento multi-tenant row-level e cota atômica em SQLite.",
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
        fiapJovi:
          "Top 10 entre 120+ grupos no Challenge FIAP x JOVI Mobile, resolvendo um problema real da empresa em 4 sprints. App com câmera que transforma fotos de anotações em resumos, exercícios e simulados com IA (Gemini), e monta plano de estudo para as provas.",
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
          what: "SympleCrm · desenvolvedor full stack",
          note: "Primeira experiência com produto em produção e clientes pagantes. Arquitetura, banco, automações e infraestrutura.",
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
      available: "Aberto a oportunidades",
      updated: "Updated",
      copyright: "© 2026 Arthur Jircik. All rights reserved.",
    },
  },
  en: {
    nav: {
      home: "home",
      experience: "experience",
      skills: "Skills",
      projects: "Projects",
      about: "about-me",
      contact: "Contact",
    },
    hero: {
      role: "Software Engineer",
      location: "São Paulo, Brazil 🇧🇷.",
      tagline: "Full stack developer. I built SympleCrm, a SaaS CRM that ran in production for insurance brokerages. I build complete, scalable, production-ready systems.",
      seeProjects: "See Projects",
      knowMore: "Get to know me",
      portfolio: "Portfolio / 2026",
      tooltips: { github: "GitHub", linkedin: "LinkedIn", cv: "Download CV" },
    },
    experience: {
      label: "01 / Experience",
      title: "EXPERIENCE",
      stackLabel: "Stack",
      items: {
        symplecrm: {
          role: "Full Stack Developer",
          company: "SympleCrm",
          kicker: "SaaS CRM for brokerages",
          summary:
            "Built the platform end to end and shipped it to production, with brokerages using it day to day. Leads arrive over WhatsApp and land in a pipeline where AI pre-qualifies them, replies, and fires follow-ups on its own.",
          highlights: [
            { label: "Architecture", text: "TanStack Start, React 19, and TypeScript running on Cloudflare Workers." },
            { label: "Data", text: "Multi-tenant Postgres on Supabase, isolated through RLS, triggers, and RPCs." },
            { label: "AI & automation", text: "n8n and LLMs (OpenAI / Groq) qualifying leads and following up over WhatsApp." },
            { label: "Product", text: "Team hierarchy, chat, scheduling, financing and consortium calculators, and a metrics dashboard." },
          ],
        },
      },
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
      subtitle: "Engineering work and side projects.",
      loadMore: "Show More Projects",
      items: {
        helix:
          "Prospecting CRM that finds businesses without a website on Google Maps and tracks outreach in a pipeline. Better Auth, row-level multi-tenant isolation, and atomic quota in SQLite.",
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
        fiapJovi:
          "Top 10 out of 120+ teams in the FIAP x JOVI Mobile Challenge, solving a real problem posed by the company over 4 sprints. Camera-driven app that turns photos of notes into summaries, exercises, and practice tests with generative AI (Gemini), plus an exam study plan.",
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
          what: "SympleCrm · full stack developer",
          note: "First experience with a product in production and paying customers. Architecture, database, automations, and infrastructure.",
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
      available: "Open to opportunities",
      updated: "Updated",
      copyright: "© 2026 Arthur Jircik. All rights reserved.",
    },
  },
} as const
