import { HeroSection } from "@/components/hero-section"
import { StackSection } from "@/components/stack-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { FooterSection } from "@/components/footer-section"
import { SideNav } from "@/components/side-nav"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <SideNav />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10">
        <HeroSection />
        <StackSection />
        <ProjectsSection />
        <AboutSection />
        <FooterSection />
      </div>
    </main>
  )
}
