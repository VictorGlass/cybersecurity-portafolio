"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Terminal, Menu, X } from "lucide-react"

const links = [
  { href: "#about", label: "whoami" },
  { href: "#projects", label: "proyectos" },
  { href: "#certs", label: "certificados" },
  { href: "#labs", label: "labs" },
  { href: "#writeups", label: "writeups" },
  { href: "#contact", label: "contacto" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
          <Terminal className="size-5 text-primary" aria-hidden="true" />
          <span className="text-primary">~/</span>victor_carrera
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="text-primary">{">"}</span> {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-md border border-primary px-4 py-1.5 font-mono text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-block"
        >
          ./contact
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-mono text-sm text-muted-foreground hover:text-primary"
                >
                  <span className="text-primary">{">"}</span> {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
