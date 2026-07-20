import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/certifications"
import { Labs } from "@/components/labs"
import { Writeups } from "@/components/writeups"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen scroll-smooth bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Labs />
      <Writeups />
      <Contact />
      <Footer />
    </main>
  )
}
