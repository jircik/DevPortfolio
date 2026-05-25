"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/language-context"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const INITIAL_PROJECTS_COUNT = 4
const LOAD_MORE_INCREMENT = 2

export function ProjectsSection() {
  const { t } = useLanguage()
  const experiments = [
    {
      title: "Calorie Tracker",
      medium: "Full-Stack",
      description: t.projects.items.calorieTracker,
      span: "col-span-2 row-span-2",
      github: "https://github.com/jircik/CalorieTracker-Backend",
      live: "https://calorietracker.jircik.dev",
    },
    {
      title: "Crypto Arb",
      medium: "Backend",
      description: t.projects.items.cryptoArb,
      span: "col-span-1 row-span-1",
      github: "https://github.com/jircik/CryptoArb-MVP",
      live: null,
    },
    {
      title: "URL Shortening Service",
      medium: "Full-Stack",
      description: t.projects.items.urlShortener,
      span: "col-span-1 row-span-1",
      github: "https://github.com/jircik/URL-Shortening-Service",
      live: "https://url-app.jircik.dev/",
    },
    {
      title: "Datagen CLI tool",
      medium: "Backend",
      description: t.projects.items.datagen,
      span: "col-span-1 row-span-2",
      github: "https://github.com/jircik/DataGen-Cli-Tool",
      live: "https://datagen.jircik.dev",
    },
    {
      title: "DataBase Backup CLI",
      medium: "Backend",
      description: t.projects.items.dbBackup,
      span: "col-span-1 row-span-1",
      github: "https://github.com/jircik/DB-Backup-CLI",
      live: "https://db-backup.jircik.dev",
    },
    {
      title: "Discord GPT ChatBot",
      medium: "Full-Stack",
      description: t.projects.items.discordBot,
      span: "col-span-2 row-span-1",
      github: "https://github.com/jircik/DiscordChatBot",
      live: "https://discord.com/oauth2/authorize?client_id=1474823195235451042&permissions=8&integration_type=0&scope=bot",
    },
  ]

  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const [displayedCount, setDisplayedCount] = useState(INITIAL_PROJECTS_COUNT)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !listRef.current) return

    const ctx = gsap.context(() => {
      // Header slide in from left
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
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = listRef.current?.querySelectorAll("article")
      if (cards && cards.length > 0) {
        gsap.set(cards, { y: 30, opacity: 0 })
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [displayedCount])

  const displayedProjects = experiments.slice(0, displayedCount)
  const hasMoreProjects = displayedCount < experiments.length

  return (
    <section ref={sectionRef} id="work" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">{t.projects.label}</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">{t.projects.title}</h2>
      </div>

      {/* Projects list */}
      <div ref={listRef} className="space-y-4">
        {displayedProjects.map((experiment, index) => (
          <WorkCard key={index} experiment={experiment} index={index} />
        ))}
      </div>

      {/* Load more button */}
      {hasMoreProjects && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setDisplayedCount((prev) => prev + LOAD_MORE_INCREMENT)}
            className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            {t.projects.loadMore}
          </button>
        </div>
      )}
    </section>
  )
}

function WorkCard({
  experiment,
  index,
}: {
  experiment: {
    title: string
    medium: string
    description: string
    span: string
    github?: string
    live?: string | null
  }
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLElement>(null)

  return (
    <article
      ref={cardRef}
      className={cn(
        "group relative border border-border/40 px-6 py-6 flex items-start justify-between transition-all duration-300 cursor-pointer overflow-hidden",
        isHovered && "border-accent/60",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background layer */}
      <div
        className={cn(
          "absolute inset-0 bg-accent/5 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Content - Left side */}
      <div className="relative z-10 flex-1">
        <h3 className={cn("font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight transition-colors duration-300", isHovered ? "text-accent" : "text-foreground")}>
          {experiment.title}
        </h3>
        <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed max-w-2xl">
          {experiment.description}
        </p>
      </div>

      {/* Action buttons - Right side */}
      <div className="relative z-10 flex items-center gap-3 ml-6 flex-shrink-0">
        {experiment.github && (
          <a
            href={experiment.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border border-foreground/40 hover:border-accent hover:text-accent transition-all duration-200 font-mono text-xs uppercase tracking-widest"
            aria-label="View on GitHub"
          >
            GitHub
          </a>
        )}
        {experiment.live && (
          <a
            href={experiment.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border border-foreground/40 hover:border-accent hover:text-accent transition-all duration-200 font-mono text-xs uppercase tracking-widest"
            aria-label="View Live"
          >
            Live
          </a>
        )}
      </div>

      {/* Corner line - Top right */}
      <div
        className={cn(
          "absolute top-0 right-0 w-12 h-12 transition-all duration-300",
          isHovered ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="absolute top-0 right-0 w-full h-[1px] bg-accent" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-accent" />
      </div>
    </article>
  )
}
