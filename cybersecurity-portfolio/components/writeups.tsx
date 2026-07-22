import { SectionHeading } from "@/components/section-heading"
import { writeups } from "@/lib/portfolio-data"
import { Clock, ArrowUpRight } from "lucide-react"

export function Writeups() {
  return (
    <section 
      id="writeups"
      className="relative overflow-hidden border-b border-border py-20"
    >




{/* grid background */}
      <div
        aria-hidden="true"
        className="animate-grid pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-muted-foreground) 1px, transparent 0px)",
          backgroundSize: "100px 100px",
        }}
      />
      <div className="absolute inset-0 -z-10 animate-grid">
        <div className="h-[200%] w-[200%] bg-grid opacity-10"></div>
      </div>





      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          command="cat writeups/*.md"
          title="Writeups"
          description="Análisis paso a paso de máquinas y retos resueltos, con técnicas, herramientas y remediaciones."
        />

        <div className="grid gap-5">
          {writeups.map((w) => (
            <article
              key={w.slug}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-mono text-xs text-primary">{w.target}</span>
                <span className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                  <span>{w.difficulty}</span>
                  <span className="text-border">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3.5" /> {w.readingTime}
                  </span>
                  <span className="text-border">·</span>
                  <span>{w.date}</span>
                </span>
              </div>

              <h3 className="mt-3 flex items-start justify-between gap-4 text-lg font-semibold text-foreground">
                {/* MODIFICADO: Ahora usa el link dinámico de tus datos y abre en pestaña nueva */}
                <a 
                  href={w.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="transition-colors group-hover:text-primary"
                >
                  {w.title}
                </a>

                <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </h3>

              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {w.excerpt}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {w.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground"
                  >
                    #{t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}