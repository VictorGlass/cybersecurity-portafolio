import { SectionHeading } from "@/components/section-heading"
import { labs } from "@/lib/portfolio-data"
import { Terminal, FileText, Cpu } from "lucide-react"

const difficultyStyles: Record<string, string> = {
  Easy: "text-primary",
  Medium: "text-chart-2",
  Hard: "text-orange-400",
  Insane: "text-destructive",
}

export function Labs() {
  return (
    <section id="labs" className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          command="find ~/labs -type f"
          title="Laboratorios"
          description="Máquinas y retos resueltos en plataformas de hacking ético como DockerLabs, TryHackMe entre otras."
        />

        <div className="overflow-hidden rounded-lg border border-border bg-card">
          {/* terminal bar */}
          <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-2.5">
            <span className="size-3 rounded-full bg-destructive/70" />
            <span className="size-3 rounded-full bg-orange-400/70" />
            <span className="size-3 rounded-full bg-primary/70" />
            <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <Terminal className="size-3.5" /> labs — pwned.log
            </span>
          </div>

          <div className="divide-y divide-border">
            {/* header */}
            <div className="hidden grid-cols-12 gap-4 px-5 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground sm:grid">
              <span className="col-span-4">Máquina</span>
              <span className="col-span-2">Plataforma</span>
              <span className="col-span-2">Dificultad</span>
              <span className="col-span-2">SO</span>
              <span className="col-span-2 text-right">Writeup</span>
            </div>

            {labs.map((lab) => (
              <div
                key={lab.slug}
                className="grid grid-cols-2 gap-2 px-5 py-4 font-mono text-sm transition-colors hover:bg-secondary/40 sm:grid-cols-12 sm:gap-4 sm:py-3"
              >
                <span className="col-span-2 flex items-center gap-2 font-semibold text-foreground sm:col-span-4">
                  <span className="text-primary">{">"}</span> {lab.name}
                </span>
                <span className="col-span-1 text-muted-foreground sm:col-span-2">{lab.platform}</span>
                <span className={`col-span-1 sm:col-span-2 ${difficultyStyles[lab.difficulty]}`}>
                  {lab.difficulty}
                </span>
                <span className="col-span-1 flex items-center gap-1.5 text-muted-foreground sm:col-span-2">
                  <Cpu className="size-3.5" /> {lab.os}
                </span>
                <span className="col-span-1 text-right sm:col-span-2">
                  {lab.hasWriteup ? (
                    <a
                      href="#writeups"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      <FileText className="size-3.5" /> Leer
                    </a>
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
