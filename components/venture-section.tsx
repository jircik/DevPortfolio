"use client"

import { useRef, useEffect } from "react"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { BitmapChevron } from "@/components/bitmap-chevron"
import { useLanguage } from "@/lib/i18n/language-context"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// --- Editar aqui ------------------------------------------------------------
// Valores exibidos nos blocos de metrica. Sao strings puras de proposito:
// trocar o numero nao exige mexer em mais nada.
const VENTURE_URL = "https://symplecrm.com.br"
const VENTURE_METRICS = {
  brokerages: "10+",
  activeUsers: "+20", // <- numero de usuarios ativos
  since: "JUL / 2026",
}
const VENTURE_STACK = [
  "TanStack Start",
  "React 19",
  "TypeScript",
  "Supabase / Postgres",
  "Cloudflare Workers",
  "n8n",
  "WhatsApp API",
  "OpenAI / Groq",
]
// ---------------------------------------------------------------------------

export function VentureSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const metricsRef = useRef<HTMLDivElement>(null)

  const metrics = [
    { value: VENTURE_METRICS.brokerages, label: t.venture.metrics.brokerages },
    { value: VENTURE_METRICS.activeUsers, label: t.venture.metrics.activeUsers },
    { value: VENTURE_METRICS.since, label: t.venture.metrics.since },
  ]

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

      gsap.from(bodyRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bodyRef.current,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      })

      const cards = metricsRef.current?.querySelectorAll("[data-metric]")
      if (cards && cards.length > 0) {
        gsap.from(cards, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: metricsRef.current,
            start: "top 90%",
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
      id="venture"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-12">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">{t.venture.label}</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none">
          {t.venture.title}
        </h2>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {t.venture.kicker}
        </p>
      </div>

      {/* Founder role: narrative, on its own */}
      <div ref={bodyRef} className="max-w-2xl border-l-2 border-l-accent pl-6 md:pl-8">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          {t.venture.roleLabel}
        </span>
        <p className="mt-5 font-mono text-sm md:text-[15px] text-foreground/90 leading-loose">
          {t.venture.role}
        </p>
      </div>

      {/* Metrics */}
      <div ref={metricsRef} className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border/40 border border-border/40">
        {metrics.map((metric) => (
          <div key={metric.label} data-metric className="bg-background px-6 py-8">
            <div className="font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight text-accent leading-none">
              {metric.value}
            </div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      {/* What it does + what it runs on */}
      <div className="mt-16 grid gap-12 md:grid-cols-[1.35fr_1fr] md:gap-20 md:items-start">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {t.venture.productLabel}
          </span>
          <p className="mt-5 font-mono text-sm text-muted-foreground leading-loose">
            {t.venture.description}
          </p>
        </div>

        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {t.venture.stackLabel}
          </span>
          <div className="mt-5 flex flex-wrap gap-2">
            {VENTURE_STACK.map((tech) => (
              <span
                key={tech}
                className="border border-border/60 px-3 py-1.5 font-mono text-[11px] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12">
        <a
          href={VENTURE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
        >
          <ScrambleTextOnHover text={t.venture.cta} as="span" duration={0.6} />
          <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
        </a>
      </div>
    </section>
  )
}
