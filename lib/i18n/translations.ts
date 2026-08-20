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
          "Aplicação Full-Stack de Nutrição desenvolvida com Java e Spring Boot + PostgreSQL para o Backend (Railway) e Next.js para o Frontend (Cloudflare Pages), aplicação conta com autenticação JWT, calculo de macros e calorias de refeiçoes criadas pelo usuario por meio da API externa da FatSecret, além de consumo diario de agua e metas estabelecidas pelo usuario ",
        urlShortener:
          "Aplicação Full-Stack de encurtamento de URLs desenvolvido com Express.js, MongoDB e Next.js. Oferece autenticação JWT, shortcodes personalizados, expiração de links configurável, contagem de acessos e dashboard para controle de URLs.",
        dbBackup:
          "Ferramenta CLI para backup e restore automatizado de bancos de dados. Desenvolvida com Java 21, Spring Boot, Spring Shell e Spring Batch. Suporte a PostgreSQL e MySQL.",
        datagen:
          "CLI tool para popular bancos de dados com dados falsos e realistas, desenvolvida com Node.js, TypeScript e Faker.js. Suporta PostgreSQL e MongoDB. Conta com um plugin oficial para o Claude Code com skills especializadas para uso da ferramenta.",
        cryptoExchange:
          "API construída com NestJS para consultar valores de criptomoedas em tempo real via CoinGecko. O projeto está funcional, com novas funcionalidades planejadas para futuras versões.",
        discordBot:
          "Chatbot para Discord que utiliza modelos de IA via groq API. Desenvolvido em JavaScript e estruturado com Docker. Projeto hospedado em nuvem para qualquer pessoa poder adicionar o bot em seu servidor proprio.",
        cryptoArb:
          "Detector de arbitragem de criptomoedas em tempo real que monitora discrepâncias de preço entre diferentes corretoras via WebSocket. Construído com Node.js, TypeScript e Prisma + SQLite, com notificações duplas por e-mail (Nodemailer) e WhatsApp (Evolution API)."
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
          "Full-Stack nutrition app built with Java and Spring Boot + PostgreSQL for the backend (Railway) and Next.js for the frontend (Cloudflare Pages). Features JWT authentication, macro and calorie calculation for user-created meals via the external FatSecret API, plus daily water intake tracking and user-defined goals.",
        urlShortener:
          "Full-Stack URL shortening app built with Express.js, MongoDB, and Next.js. Offers JWT authentication, custom shortcodes, configurable link expiration, access counting, and a dashboard for URL management.",
        dbBackup:
          "CLI tool for automated database backup and restore. Built with Java 21, Spring Boot, Spring Shell, and Spring Batch. Supports PostgreSQL and MySQL.",
        datagen:
          "CLI tool to populate databases with realistic fake data, built with Node.js, TypeScript, and Faker.js. Supports PostgreSQL and MongoDB. Comes with an official Claude Code plugin with specialized skills for using the tool.",
        cryptoExchange:
          "API built with NestJS to fetch real-time cryptocurrency values via CoinGecko. The project is functional, with new features planned for future versions.",
        discordBot:
          "Discord chatbot using AI models via the groq API. Built with JavaScript and structured with Docker. Hosted in the cloud so anyone can add the bot to their own server.",
        cryptoArb:
          "Real-time crypto arbitrage detector that monitors price discrepancies between different exchanges over WebSocket. Built with Node.js, TypeScript, and Prisma + SQLite, with dual notifications via email (Nodemailer) and WhatsApp (Evolution API).",
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
