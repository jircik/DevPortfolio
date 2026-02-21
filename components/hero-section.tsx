import { ArrowRight, Github, Linkedin, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-6"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl text-balance">
          ARTHUR JIRCIK
        </h1>
        <p className="text-lg text-muted-foreground md:text-xl">
          Engenheiro de Software Full-Stack
        </p>
        <p className="text-lg text-muted-foreground md:text-xl">
          São Paulo, Brasil
        </p>

        <a
          href="#about"
          className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground group"
        >
          <span className="underline decoration-accent decoration-2 underline-offset-4">
            Veja mais sobre mim
          </span>
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>

      {/* Social icons at the bottom */}
      <div className="absolute bottom-12 flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/arthur-jircik-a8715b356/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted-foreground hover:text-accent transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/jircik"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted-foreground hover:text-accent transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="/cv.pdf"
          download
          aria-label="Baixar CV"
          className="text-muted-foreground hover:text-accent transition-colors"
        >
          <Download size={20} />
        </a>
      </div>
    </section>
  )
}
