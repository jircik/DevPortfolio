"use client"

import { useRef, useEffect } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// --- Editar aqui ------------------------------------------------------------
// Uma entrada por experiencia, da mais recente para a mais antiga. O texto de
// cada uma mora em translations.experience.items[key]; aqui ficam so o periodo
// e a stack. Para adicionar uma experiencia: nova entrada aqui + mesma key nas
// duas linguas de translations.
type ExperienceKey = "symplecrm"
const EXPERIENCES: { key: ExperienceKey; period: string; stack: string[] }[] = [
  {
    key: "symplecrm",
    period: "JUL — NOV 2026",
    stack: [
      "TanStack Start",
      "React 19",
      "TypeScript",
      "Supabase / Postgres",
      "Cloudflare Workers",
      "n8n",
      "WhatsApp API",
      "OpenAI / Groq",
    ],
  },
]
// ---------------------------------------------------------------------------

export function ExperienceSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      const rows = listRef.current?.querySelectorAll("[data-experience]")
      if (rows && rows.length > 0) {
        gsap.from(rows, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-12">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">{t.experience.label}</span>
        <h2 className="mt-4 font-(--font-bebas) text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none">
          {t.experience.title}
        </h2>
      </div>

      <ol ref={listRef} className="flex flex-col gap-20">
        {EXPERIENCES.map((entry) => {
          const item = t.experience.items[entry.key]
          return (
            <li key={entry.key} data-experience>
              {/* Bar: period · role · company */}
              <div className="grid gap-2 border-y border-border/40 py-5 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground tabular-nums whitespace-nowrap">
                  {entry.period}
                </span>
                <h3 className="text-xl md:text-2xl tracking-tight text-foreground">{item.role}</h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  {item.company}
                  <span className="text-muted-foreground"> · {item.kicker}</span>
                </span>
              </div>

              <p className="mt-6 max-w-4xl font-mono text-sm text-muted-foreground leading-loose">{item.summary}</p>

              {/* Highlight cells */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 border border-border/40">
                {item.highlights.map((highlight) => (
                  <div key={highlight.label} className="flex flex-col gap-3 bg-background px-5 py-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                      {highlight.label}
                    </span>
                    <p className="font-mono text-[13px] text-foreground/85 leading-relaxed">{highlight.text}</p>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {t.experience.stackLabel}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {entry.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-border/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
