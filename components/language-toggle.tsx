"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { cn } from "@/lib/utils"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-1 border border-border/50 bg-background/80 backdrop-blur-sm px-1 py-1 font-mono text-[10px] uppercase tracking-widest">
      <button
        onClick={() => setLanguage("pt")}
        className={cn(
          "px-2 py-1 transition-colors duration-200 flex items-center gap-1.5",
          language === "pt" ? "bg-accent text-background" : "text-muted-foreground hover:text-foreground",
        )}
      >
        <span>PT</span>
        <span>🇧🇷</span>
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "px-2 py-1 transition-colors duration-200 flex items-center gap-1.5",
          language === "en" ? "bg-accent text-background" : "text-muted-foreground hover:text-foreground",
        )}
      >
        <span>EN</span>
        <span>🇺🇸</span>
      </button>
    </div>
  )
}
