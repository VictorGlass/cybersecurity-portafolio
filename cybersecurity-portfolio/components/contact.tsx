import { SectionHeading } from "@/components/section-heading"
import { profile } from "@/lib/portfolio-data"
import { Mail, Globe, AtSign, Download, Code2, Link2, MailIcon } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="border-b border-border py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="06"
          command="./contact.sh"
          title="Contacto"
          description="Abierto a oportunidades en IT Support, SOC L1 y Ciberseguridad. ¡No dudes en contactarme!"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* contact card */}
          <div className="rounded-lg border border-border bg-card p-6 font-mono text-sm">
            <p className="text-muted-foreground">
              <span className="text-primary">$</span> echo $CONTACT
            </p>
            <div className="mt-4 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <Mail className="size-4 text-primary" /> {profile.email}
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
              >
                <Globe className="size-4 text-primary" />GitHub<a href="https://github.com/VictorGlass"></a> 
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                >
                  <Link2 className="size-4 text-primary" />LinkedInd<a href="https://github.com/VictorGlass"></a>
                
              </a>
              
            </div>

            <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
              Clave PGP disponible bajo petición · Divulgación responsable
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
