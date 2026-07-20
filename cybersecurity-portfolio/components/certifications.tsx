import { SectionHeading } from "@/components/section-heading"
import { certifications } from "@/lib/portfolio-data"
import { BadgeCheck, ShieldCheck } from "lucide-react"

export function Certifications() {
  return (
    <section id="certs" className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          command="gpg --verify certs/"
          title="Certificaciones"
          description="Credenciales verificables que respaldan mi formación en seguridad ofensiva."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <div key={c.name}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
            > 
              <div className="rounded-md border border-border bg-secondary p-2.5">
                <ShieldCheck className="size-6 text-primary" aria-hidden="true" 
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-mono text-base font-semibold text-foreground">{c.name}</h3>
                  {c.verified && (
                    <BadgeCheck className="size-4 shrink-0 text-primary" aria-label="Verificada" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{c.issuer}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {c.year} · ID: {c.id}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
