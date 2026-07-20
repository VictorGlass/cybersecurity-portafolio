import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/lib/portfolio-data"
import { Code2, ExternalLink, FolderGit2 } from "lucide-react"

const statusStyles: Record<string, string> = {
  Activo: "text-primary border-primary/40",
  Completado: "text-muted-foreground border-border",
  "Open Source": "text-chart-2 border-chart-2/40",
}

export function Projects() {
  return (
    <section id="projects" className="border-b border-border py-20">
      
      <div className="mx-auto max-w-6xl px-6">

        

        <SectionHeading
          index="02"
          command="ls ~/projects"
          title="Proyectos"
          description="Herramientas de seguridad que he construido. Todo en laboratorios y entornos autorizados y controlados."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex items-start justify-between gap-4">
                <FolderGit2 className="size-7 text-primary" aria-hidden="true" />
                <span
                  className={`rounded-full border px-2.5 py-0.5 font-mono text-xs ${statusStyles[p.status]}`}
                >
                  {p.status}
                </span>
              </div>

              <h3 className="mt-4 font-mono text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Code2 className="size-4" /> Código
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="size-4" /> Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
