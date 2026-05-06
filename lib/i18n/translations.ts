export type Language = "pt" | "en"

export const translations = {
  pt: {
    nav: {
      home: "home",
      skills: "Skills",
      projects: "Projects",
      about: "about-me",
      contact: "Contact",
    },
    hero: {
      role: "Engenheiro de Software FullStack",
      location: "São Paulo, Brasil 🇧🇷.",
      tagline: "Construção de sistemas completos escaláveis prontos para produção e automações.",
      seeProjects: "Ver Projetos",
      knowMore: "Me conheça melhor",
      portfolio: "Portfolio / 2026",
      tooltips: { github: "GitHub", linkedin: "LinkedIn", cv: "Download CV" },
    },
    stack: {
      label: "01 / Skills",
      title: "TECH STACK",
      categories: {
        backend: { name: "Back-end", desc: "Java, Spring Boot, TypeScript, Node.js, Express, NestJS." },
        frontend: { name: "Front-end", desc: "React, Next.js, Tailwind CSS." },
        devops: { name: "DevOps & Tools", desc: "N8N, Docker, Kubernetes, CI/CD, Git." },
        database: { name: "Databases", desc: "PostgreSQL, MongoDB, PrismaORM." },
      },
    },
    projects: {
      label: "02 / Projects",
      title: "PROJETOS",
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
      },
    },
    about: {
      label: "03 / About",
      aboutTitle: "SOBRE MIM",
      aboutDescription:
        "Engenheiro de Software Full-Stack (foco em backend) apaixonado por criar ferramentas de desenvolvimento e sistemas completos e escaláveis. Construo APIs, CLIs e sistemas full-stack — com preferência por arquitetura limpa e design bem pensado. Atualmente, estudo Engenharia de Software na FIAP. Sempre aprendendo, sempre construindo.",
      educationTitle: "EDUCAÇAO",
      educationDescription:
        "Cursando Bacharelado em Engenharia de Software na FIAP, São Paulo — com previsão de formação em dezembro de 2029, Aprendendo no momento fundamentos de desenvolvimento web, design de front-end e gestão de experiência total do software, além de edge computing, storytelling e empreendedorismo. Anteriormente (2025), completei um ano de Ciência da Computação na Universidade Mackenzie, onde construi uma base sólida em Lógica de Programação, Desenvolvimento em Python e C, Circuitos Elétricos e Eletrônicos e Análise de Dados.",
    },
    footer: {
      label: "04 / Connect",
      title: "CONTATO",
      email: "Email",
      social: "Social",
      location: "Location",
      locationCity: "São Paulo",
      locationCountry: "Brasil",
      status: "Status",
      availability: "Disponibilidade",
      available: "Disponivel agora",
      updated: "Updated",
      copyright: "© 2026 Arthur Jircik. All rights reserved.",
    },
  },
  en: {
    nav: {
      home: "home",
      skills: "Skills",
      projects: "Projects",
      about: "about-me",
      contact: "Contact",
    },
    hero: {
      role: "FullStack Software Engineer",
      location: "São Paulo, Brazil 🇧🇷.",
      tagline: "Building complete, scalable, production-ready systems and automations.",
      seeProjects: "See Projects",
      knowMore: "Get to know me",
      portfolio: "Portfolio / 2026",
      tooltips: { github: "GitHub", linkedin: "LinkedIn", cv: "Download CV" },
    },
    stack: {
      label: "01 / Skills",
      title: "TECH STACK",
      categories: {
        backend: { name: "Back-end", desc: "Java, Spring Boot, TypeScript, Node.js, Express, NestJS." },
        frontend: { name: "Front-end", desc: "React, Next.js, Tailwind CSS." },
        devops: { name: "DevOps & Tools", desc: "N8N, Docker, Kubernetes, CI/CD, Git." },
        database: { name: "Databases", desc: "PostgreSQL, MongoDB, PrismaORM." },
      },
    },
    projects: {
      label: "02 / Projects",
      title: "PROJECTS",
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
      },
    },
    about: {
      label: "03 / About",
      aboutTitle: "ABOUT ME",
      aboutDescription:
        "Full-Stack Software Engineer (backend-focused) passionate about building developer tools and complete scalable systems. I build APIs, CLIs, and full-stack systems — with a preference for clean architecture and thoughtful design. Currently studying Software Engineering at FIAP. Always learning, always building.",
      educationTitle: "EDUCATION",
      educationDescription:
        "Pursuing a Bachelor's in Software Engineering at FIAP, São Paulo — expected to graduate in December 2029. Currently learning the fundamentals of web development, front-end design, and total software experience management, as well as edge computing, storytelling, and entrepreneurship. Previously (2025), I completed a year of Computer Science at Mackenzie University, where I built a solid foundation in Programming Logic, Python and C development, Electrical and Electronic Circuits, and Data Analysis.",
    },
    footer: {
      label: "04 / Connect",
      title: "CONTACT",
      email: "Email",
      social: "Social",
      location: "Location",
      locationCity: "São Paulo",
      locationCountry: "Brazil",
      status: "Status",
      availability: "Availability",
      available: "Available now",
      updated: "Updated",
      copyright: "© 2026 Arthur Jircik. All rights reserved.",
    },
  },
} as const
