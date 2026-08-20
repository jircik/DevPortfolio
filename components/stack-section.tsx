"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/language-context"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// --- Editar aqui ------------------------------------------------------------
// Faixas por dominio. `prod: true` marca o que faz parte da stack do SympleCrm
// em producao. A legenda no topo da secao explica o marcador. Ausencia de
// marcador diz "nao faz parte daquele produto", nao "nao uso mais".
type Tech = { name: string; prod?: boolean }

const STACK_BANDS: { key: "backend" | "data" | "frontend" | "ai" | "infra"; items: Tech[] }[] = [
  {
    key: "backend",
    items: [
      { name: "TypeScript", prod: true },
      { name: "Java" },
      { name: "Node.js" },
      { name: "TanStack Start", prod: true },
      { name: "Spring Boot" },
      { name: "NestJS" },
      { name: "Express" },
    ],
  },
  {
    key: "data",
    items: [
      { name: "PostgreSQL", prod: true },
      { name: "Supabase · RLS, triggers, RPCs", prod: true },
      { name: "SQL" },
      { name: "MongoDB" },
      { name: "Prisma" },
      { name: "Redis" },
    ],
  },
  {
    key: "frontend",
    items: [
      { name: "React", prod: true },
      { name: "Next.js" },
      { name: "Tailwind CSS", prod: true },
      { name: "shadcn/ui", prod: true },
    ],
  },
  {
    key: "ai",
    items: [
      { name: "n8n", prod: true },
      { name: "Groq / OpenAI", prod: true },
      { name: "WhatsApp API", prod: true },
      { name: "Claude"},
    ],
  },
  {
    key: "infra",
    items: [
      { name: "Cloudflare Workers", prod: true },
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "Railway" },
      { name: "Git" },
      { name: "Vitest" },
      { name: "Linux" },
    ],
  },
]
// ---------------------------------------------------------------------------

export function StackSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const bandsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !bandsRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const rows = bandsRef.current?.querySelectorAll("[data-band]")
      if (rows && rows.length > 0) {
        gsap.fromTo(
          rows,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bandsRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="signals" ref={sectionRef} className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-10">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">{t.stack.label}</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">{t.stack.title}</h2>

        {/* Legend for the production marker */}
        <p className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="inline-block h-[5px] w-[5px] bg-accent" aria-hidden="true" />
          {t.stack.legend}
        </p>
      </div>

      {/* Domain bands */}
      <div ref={bandsRef}>
        {STACK_BANDS.map((band) => (
          <div
            key={band.key}
            data-band
            className="border-b border-border/40 py-6 last:border-b-0 last:pb-0"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              {t.stack.bands[band.key]}
            </span>
            <div className="mt-4 flex flex-wrap gap-2">
              {band.items.map((tech) => (
                <span
                  key={tech.name}
                  className={cn(
                    "inline-flex items-center border px-3 py-1.5 font-mono text-[11px] transition-colors duration-200",
                    tech.prod
                      ? "border-accent/70 text-foreground"
                      : "border-border/60 text-muted-foreground hover:border-foreground/40",
                  )}
                >
                  {tech.prod && (
                    <span className="mr-2 inline-block h-[5px] w-[5px] bg-accent" aria-hidden="true" />
                  )}
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
