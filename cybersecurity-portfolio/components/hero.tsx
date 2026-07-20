"use client"

import { useEffect, useState } from "react"
import { profile, stats } from "@/lib/portfolio-data"
import { ShieldCheck, ArrowRight } from "lucide-react"

const phrases = [
  "Junior Cybersecurity Analyst",
  "IT Support Specialist",
  "SOC L1",
  "Security Researcher",
  "Linux & Networking Enthusiast"
]

function useTypewriter(words: string[], speed = 90, pause = 1600) {
  const [text, setText] = useState("")
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[i % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === "") {
      setDeleting(false)
      setI((v) => v + 1)
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
          )
        },
        deleting ? speed / 2 : speed,
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, i, words, speed, pause])

  return text
}

export function Hero() {
  const typed = useTypewriter(phrases)

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border pt-32 pb-20"
    >
      {/* grid background */}
      <div
        aria-hidden="true"
        className="animate-grid pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
          <span className={profile.available ? "size-2 rounded-full bg-primary" : "size-2 rounded-full bg-muted-foreground"} />
          {profile.available ? "Disponible para proyectos" : "No disponible"}
          <span className="text-border">|</span>
          {profile.location}
        </div>

        <p className="mt-8 font-mono text-sm text-primary">$ whoami</p>
        <h1 className="mt-3 text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {profile.name}
        </h1>

        <div className="mt-4 font-mono text-xl text-muted-foreground sm:text-2xl">
          <span className="text-primary">{">"}</span> {typed}
          <span className="ml-1 inline-block h-6 w-2.5 translate-y-0.5 animate-pulse bg-primary align-middle" />
        </div>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver proyectos <ArrowRight className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ShieldCheck className="size-4" /> Contratar
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-5 py-6">
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </dt>
              <dd className="mt-1 font-mono text-3xl font-bold text-primary">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
