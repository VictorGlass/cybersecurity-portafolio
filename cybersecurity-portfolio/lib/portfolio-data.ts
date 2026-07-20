export const profile = {
  name: "Victor Carrera",
  handle: "@n0ctvrn0",
  role: "Analista Junior en Ciberseguridad | Técnico de Soporte Informatico",
  location: "Chile",
  available: true,
  tagline: "Rompo sistemas para ayudar a protegerlos.",
  summary:
    "Analista junior de ciberseguridad especializado en redes, Linux, Python y fundamentos de seguridad. Adquiero experiencia práctica a través de talleres, proyectos de seguridad y el aprendizaje continuo, al tiempo que contribuyo a garantizar entornos informáticos seguros y fiables.",
  email: "white_hat333@protonmail.com",
  socials: {
    github: "https://github.com/VictorGlass",
    linkedin: "https://linkedin.com",
  },
}

export const skills = [
  { category: "Ciberseguridad", items: ["Security Fundamentals", "Network Security", "Linux Security", "OSINT", "Ethical Hacking", "Vulnerability Assessment", "Security Labs"] },
  { category: "IT & Networking", items: ["Network Troubleshooting", "TCP/IP Fundamentals", "Windows & Linux Systems", "System Administration", "IT Support", "Hardware & Software Support"] },
  { category: "Herramientas", items: ["Wireshark", "Nmap", "BurpSuite", "Gobuster", "Hydra", "VS Code", "Git & Github", "VirtualBox", "VMware", "Metasploit"] },
  { category: "Lenguajes", items: ["Python", "SQL", "Bash", "Java"] },
]

export const stats = [
  { label: "Lab's Completados", value: "20+" },
  { label: "Proyectos Desarrollados", value: "7" },
  { label: "Plataformas de Aprendizaje", value: "6" },
  { label: "Certificaciones y Cursos", value: "15+" },
]

export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  status: "Activo" | "Completado" | "Open Source"
  repo?: string
  demo?: string
}

export const projects: Project[] = [
  {
    slug: "soc-log-analyzer",
    title: "SOC Log Analyzer",
    description:
      "Herramienta de análisis de registros basada en Python, creada para simular el trabajo de un Analista SOC mediante el análisis de registros, identificacion de actividades sospechosas y el resaltado de posibles incidentes de seguridad",
    tags: ["Python", "Blue Team", "Análisis de Registros"],
    status: "Open Source",
    repo: "https://github.com/VictorGlass/soc-log-analyzer",
  },
  {
    slug: "malicious-url-checker",
    title: "Malicious URL Checker",
    description:
      "Herramienta basada en Python diseñada para analizar URLs sospechosas y ayudar a identificar sitios web potencialmente peligrosos.",
    tags: ["Python", "Ciberseguridad", "Analisis de URL"],
    status: "Activo",
    repo: "https://github.com/VictorGlass/url-malware-analyzer",
  },
  {
    slug: "network-scanner",
    title: "Network Scanner",
    description:
      "Herramienta sencilla de detección de redes diseñada para comprender la enumeracion de hosts y el análisis básico de redes.",
    tags: ["Python", "Redes", "Automatización"],
    status: "Activo",
    repo: "https://github.com/VictorGlass/Network-scanner-project",
  },
  {
    slug: "cybersecurity-learning-journey",
    title: "Cybersecurity Learning Journey",
    description:
      "Base de conocimientos personal en la que documento mi proceso de aprendizaje, mis notas, ejercicios prácticcos y mi progreso del Taller de Cyber Threat Defense + Hacking Ético y Ciberdefensa de la Universidad de Málaga.",
    tags: ["Documentación", "Aprendizaje continuo", "Intercambio de conocimientos"],
    status: "Activo",
    repo: "https://github.com/VictorGlass/Cybersecurity-Learning-Journey",
  },
  {
    slug: "cybersecurity-portfolio-website",
    title: "Cybersecurity Portfolio Website",
    description:
      "Portafolio personal para alojar mis proyectos, trabajos practicos y aprendizaje continuo.",
    tags: ["Next.js", "GitHub Pages"],
    status: "Activo",
    repo: "https://github.com/VictorGlass",
  },
]

export type Certification = {
  name: string
  issuer: string
  year: string
  id: string
  verified: boolean
}

export const certifications: Certification[] = [
  { name: "Junior Cybersecurity Analyst", issuer: "Cisco Networking Academy", year: "Completa", id: "Credencial", verified: true },
  { name: "Diplomado en Ciberseguridad y Ciberdefensa", issuer: "Universidad Autonoma de Chile", year: "En curso", id: "Credencial", verified: true },
  { name: "Analista SOC Level 1", issuer: "ComunidadDOJO", year: "Completa", id: "Credencial", verified: true },
  { name: "Técnico en Ciberseguridad", issuer: "Academia de Ciberseguridad", year: "Completa", id: "Credencial", verified: true },
  // CORREGIDO: Se cambiaron los nombres para que sean únicos y no rompan los keys de React
  { name: "Próxima Certificación I", issuer: " - ", year: "En curso", id: "Credencial", verified: true },
  { name: "Próxima Certificación II", issuer: " - ", year: "En curso", id: "Credencial", verified: true },
]

export type Lab = {
  name: string
  platform: string
  difficulty: "Easy"| "Medium" | "Hard" | "Insane"
  os: "Linux" | "Windows"
  date: string
  hasWriteup: boolean
  slug: string
}

export const labs: Lab[] = [
  { name: " Trust ", platform: "DockerLabs", difficulty: "Easy", os: "Linux", date: "2026-07", hasWriteup: true, slug: "blackfield" },
  { name: " - ", platform: "TryHackMe", difficulty: "Easy", os: "Linux", date: "2024-07", hasWriteup: true, slug: "lame" },
  { name: " - ", platform: "TryHackMe", difficulty: "Medium", os: "Windows", date: "2024-06", hasWriteup: true, slug: "forest" },
  { name: " - ", platform: "DockerLab", difficulty: "Medium", os: "Linux", date: "2024-05", hasWriteup: false, slug: "skyfall" },
  { name: " - ", platform: "MyFirstHack", difficulty: "Medium", os: "Linux", date: "2024-04", hasWriteup: true, slug: "brainpan" },
  { name: " - ", platform: "Pwned Labs", difficulty: "Medium", os: "Windows", date: "2024-03", hasWriteup: true, slug: "active" },
]

export type Writeup = {
  slug: string
  title: string
  target: string
  difficulty: string
  date: string
  readingTime: string
  excerpt: string
  tags: string[]
  link?: string // CORREGIDO: Añadido enlace opcional para que TypeScript no tire error
}

export const writeups: Writeup[] = [
  {
    slug: "dockerlabs-trust",
    target: "DockerLabs",
    difficulty: "Fácil",
    readingTime: "3h 33m",
    date: "2026-07-19",
    title: "DockerLabs: Trust",
    excerpt: "Resolución de la máquina Trust de DockerLabs. Enfocada en reconocimiento web, explotación de malas configuraciones y escalada de privilegios en Linux hasta obtener acceso como root.",
    link: "https://github.com/VictorGlass/DockerLabs-Trust", // Reemplaza por tu enlace real de GitHub
    tags: ["Nmap", "Web", "Privilege Escalation", "Linux"]
  },
  {
    slug: "forest",
    title: "En Preparación",
    target: "TryHackMe - ",
    difficulty: "Easy",
    date: "Fecha",
    readingTime: "Tiempo",
    excerpt: "Ruta de aprendizaje orientada a fundamentos de Ciberseguridad, redes, Blue Team y Red Team.",
    tags: ["Networking", "Red Team", "BlueTeam"],
  },
  {
    slug: "brainpan",
    title: "En Preparación",
    target: "TryHackMe - ",
    difficulty: "Medium",
    date: "Fecha",
    readingTime: "Tiempo",
    excerpt: "Laboratorios prácticos para fortalecer habilidades de pentesting y administracion de sistemas.",
    tags: ["Linux", "Windows", "WebSecurity"],
  },
  {
    slug: "lame",
    title: "En Preparación",
    target: "DockerLab -",
    difficulty: "Medium",
    date: "Fecha",
    readingTime: "Tiempo",
    excerpt: "Resolución de laboratorios para mejorar habilidades de Hacking Ético.",
    tags: ["Linux", "Hacking", "Windows"],
  },
]