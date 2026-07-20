import { SectionHeading } from "@/components/section-heading"
import { profile, skills } from "@/lib/portfolio-data"

export function About() {
  return (
    <section id="about" className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="01"
          command="cat about.md"
          title="Acerca de mí"
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Soy <span className="text-foreground">{profile.name}</span>, {profile.role.toLowerCase()} afincado en{" "}
              {profile.location}, con un gran interés por la Ciberseguridad, redes, Linux y Python.
            </p>
            
            <p>
              Adquiero experiencia práctica de forma continua a través de laboratorios de seguridad, proyectos personales y plataformas como Cisco Networking Academy, TryHackMe, DockerLLabs entre otros.
            </p>

            <div className="rounded-lg border border-border bg-card p-5 font-mono text-sm">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> cat /etc/mission.txt
              </p>
              <ul className="mt-3 space-y-1.5 text-foreground">
                <li><span className="text-primary">{">"}</span> Siempre aprendiendo, siempre mejorando.</li>
                <li><span className="text-primary">{">"}</span> Divulgación responsable de vulnerabilidades.</li>
                <li><span className="text-primary">{">"}</span> Documentar para que otros aprendan.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
                  {group.category}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-border bg-card px-2.5 py-1 font-mono text-xs text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
