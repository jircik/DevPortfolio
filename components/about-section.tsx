"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/language-context"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// --- Editar aqui ------------------------------------------------------------
// Entradas da trajetoria, em ordem cronologica. O texto de cada uma mora em
// translations.about.timeline[key]; aqui fica so a data e o destaque.
const TIMELINE: { key: "mackenzie" | "fiap" | "tools" | "symplecrm"; when: string; current?: boolean }[] = [
  { key: "mackenzie", when: "2025" },
  { key: "fiap", when: "2026" },
  { key: "tools", when: "2026" },
  { key: "symplecrm", when: "Jul 2026", current: true },
]
// ---------------------------------------------------------------------------

export function AboutSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !timelineRef.current) return

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

      const rows = timelineRef.current?.querySelectorAll("li")
      if (rows && rows.length > 0) {
        gsap.from(rows, {
          x: -40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="principles" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      <div className="grid gap-14 md:grid-cols-[minmax(0,1fr)_1.5fr] md:gap-20 md:items-center">
        {/* Who I am: header and text travel together, centered against the trajectory */}
        <div ref={headerRef}>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">{t.about.label}</span>
          <h2 className="mt-4 mb-10 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">{t.about.title}</h2>

          <p className="font-mono text-sm text-muted-foreground leading-loose">{t.about.intro}</p>
          <p className="mt-6 font-mono text-sm text-muted-foreground leading-loose">{t.about.intro2}</p>
          <div className="mt-8 h-px w-24 bg-border" />
        </div>

        {/* Trajectory */}
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {t.about.timelineLabel}
          </span>
          <ol ref={timelineRef} className="relative mt-6 border-l border-border">
        {TIMELINE.map((entry) => {
          const item = t.about.timeline[entry.key]
          return (
            <li
              key={entry.key}
              className="relative grid gap-2 py-6 pl-8 last:pb-0 md:grid-cols-[130px_1fr] md:gap-8 md:py-7"
            >
              {/* Node on the rail */}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-0 top-8 h-[5px] w-[5px] -translate-x-1/2",
                  entry.current ? "bg-accent" : "bg-border",
                )}
              />

              <span
                className={cn(
                  "font-mono text-[10px] uppercase tracking-[0.2em] md:pt-1.5",
                  entry.current ? "text-accent" : "text-muted-foreground",
                )}
              >
                {entry.when}
              </span>

              <div>
                <h3 className="text-lg md:text-xl tracking-tight text-foreground">{item.what}</h3>
                <p className="mt-2 max-w-xl font-mono text-xs md:text-sm text-muted-foreground leading-loose">
                  {item.note}
                </p>
              </div>
            </li>
          )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
