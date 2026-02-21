"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const technologies = [
  "Java",
  "Spring",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Html",
  "Css",
  "Tailwind Css",
  "C",
  "Python",
  "SQL",
  "MongoDB",
  "Docker",
  "Git",
  "n8n"
]

const projects = [
  {
    title: "API CRUD com Java, Spring Boot e PostgreSQL",
    description:
        "API REST para gerenciamento de usuários. Utiliza Spring Boot, Spring Data JPA e Docker/PostgreSQL.",
    tech: ["Java", "Spring", "SQL", "Git"],
    github: "https://github.com/jircik/API-Spring-Boot-Gerenciamento-de-Usuarios",
    live: null,
  },
  {
    title: "Todo-list App",
    description:
        "Gerenciador de tarefas desenvolvido com JavaScript, HTML e CSS, focado em uma experiência de usuário fluida e visual moderno.",
    tech: ["JavaScript","Html", "Css", "Git"],
    github: "https://github.com/jircik/Todo-List-App",
    live: "https://jircik-todo-list.netlify.app",
  },
  {
    title: "Conversor de Bases Numéricas",
    description:
        "Este projeto desenvolvido em Python realiza a conversão de números entre diferentes bases (binário, octal, decimal hexadecimal) e utiliza um banco de dados SQL para armazenar conversões já calculadas.",
    tech: ["Python", "SQL", "Git"],
    github: "https://github.com/jircik/Conversor-de-bases-numericas",
    live: null,
  },
  {
    title: "Codificador de Imagens Binárias",
    description:
        "Desenvolvido em C com execução via terminal, este projeto utiliza imagens binarias (PBM),aplicando recursivamente a divisão entre quadrantes para codificar a imagem em uma unica linha de texto.",
    tech: ["C", "Git"],
    github: "https://github.com/jircik/Codificador-de-Imagens-Binarias-C",
    live: null,
  },
  {
    title: "Jogo da velha",
    description:
        "Jogo da velha simples feito em Java que roda no terminal.",
    tech: ["Java", "Git"],
    github: "https://github.com/jircik/Jogo-da-velha-Java",
    live: null,
  },
  {
    title: "Portfolio Website",
    description:
        "Este site Portifolio",
    tech: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Tailwind Css", "Git"],
    github: "https://github.com/jircik/Portfolio-website",
    live: null,
  },
  {
    title: "Discord GPT ChatBot",
    description:
        "Chatbot para Discord que utiliza modelos de IA via Ollama. Desenvolvido em JavaScript e estruturado com Docker.",
    tech: ["JavaScript", "Docker", "Node.js", "Git"],
    github: "https://github.com/jircik/DiscordChatBot",
    live: "https://discord.com/oauth2/authorize?client_id=1474823195235451042&permissions=8&integration_type=0&scope=bot",
  },
]

export function ProjectsSection() {
  const [activeTech, setActiveTech] = useState<string | null>(null)

  const filteredProjects = activeTech
    ? projects.filter((p) => p.tech.includes(activeTech))
    : projects

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
          Projetos
        </h2>

        {/* Tech stack bar */}
        <div className="mt-4 mb-12">
          <p className="text-center text-sm font-mono uppercase tracking-widest text-accent mb-4">
            Minha tech stack
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() =>
                  setActiveTech(activeTech === tech ? null : tech)
                }
                className={`rounded-md border px-3 py-1.5 font-mono text-xs transition-all ${
                  activeTech === tech
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border bg-secondary text-muted-foreground hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Project cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/40"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo for ${project.title}`}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
