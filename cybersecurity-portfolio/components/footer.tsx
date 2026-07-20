import { profile } from "@/lib/portfolio-data"
import { Terminal } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm text-foreground">
          <Terminal className="size-4 text-primary" aria-hidden="true" />
          <span className="text-primary">~/</span>victor_carrera
        </a>
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · Hecho con Next.js · Hack the planet, responsibly.
        </p>
      </div>
    </footer>
  )
}
