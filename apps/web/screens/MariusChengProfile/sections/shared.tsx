import type { ReactNode } from "react"

export function Section({
  children,
  className = "px-6 py-[100px] md:px-16 lg:px-[120px]",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <section
      className={`flex w-full flex-col items-start gap-[40px] ${className}`}
    >
      {children}
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="flex w-full flex-col items-center gap-[12px] whitespace-nowrap">
      <p className="shrink-0 text-[14px] font-semibold uppercase tracking-[1.12px] text-[#7a8a7f]">
        {eyebrow}
      </p>
      <h2 className="shrink-0 text-center text-[32px] font-bold text-[#2f332f] sm:text-[40px]">
        {title}
      </h2>
    </div>
  )
}
