"use client"

import { useEffect, useRef } from "react"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { AnimatedNoise } from "@/components/animated-noise"
import { BitmapChevron } from "@/components/bitmap-chevron"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center pl-6 md:pl-28 pr-6 md:pr-12">
      <AnimatedNoise opacity={0.03} />

      {/* Left vertical labels */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground -rotate-90 origin-left block whitespace-nowrap">
          SIGNAL
        </span>
      </div>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 w-full">
        <h1 className="font-[var(--font-bebas)] text-[clamp(3rem,12vw,15rem)] leading-none tracking-tight">
          ARTHUR JIRCIK
        </h1>

        <h2 className="font-[var(--font-bebas)] text-muted-foreground/60 text-[clamp(1rem,3vw,2rem)] mt-4 tracking-wide">
          Engenheiro de Software FullStack
        </h2>

        <p className="mt-12 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
            São Paulo, Brasil 🇧🇷.<br />
          Construção de sistemas completos escaláveis prontos para produção e automações.
          </p>

        <div className="mt-16 flex items-center gap-8">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            <ScrambleTextOnHover text="Ver Projetos" as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>
          <a
            href="#principles"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Me conheça melhor
          </a>
        </div>

        {/* Social icons */}
        <div className="mt-8 flex items-center gap-6">
          <a
            href="https://github.com/jircik"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-10 h-10 border border-foreground/20 hover:border-accent hover:bg-accent/10 transition-all duration-200"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5 text-foreground group-hover:text-accent transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/arthur-jircik"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-10 h-10 border border-foreground/20 hover:border-accent hover:bg-accent/10 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5 text-foreground group-hover:text-accent transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.428-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.586zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.955-1.71 1.187 0 1.918.755 1.938 1.71 0 .951-.751 1.71-1.978 1.71zm1.581 10.019H3.715V9.724h3.203v9.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>

          <a
            href="/cv.pdf"
            download
            className="group flex items-center justify-center w-10 h-10 border border-foreground/20 hover:border-accent hover:bg-accent/10 transition-all duration-200"
            aria-label="Download CV"
          >
            <svg
              className="w-5 h-5 text-foreground group-hover:text-accent transition-colors duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2v16m-7-7l7 7 7-7M4 20h16"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Floating info tag */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12">
        <div className="border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Portfolio / 2026
        </div>
      </div>
    </section>
  )
}
