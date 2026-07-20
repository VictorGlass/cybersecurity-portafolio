import type { ReactNode } from "react"

export function SectionHeading({
  index,
  command,
  title,
  description,
}: {
  index: string
  command: string
  title: string
  description?: ReactNode
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-primary">
        <span className="text-muted-foreground">{index}</span> $ {command}
      </p>
      <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  )
}
