import Image from "next/image"

import { certificates } from "../data"
import { Section, SectionHeading } from "./shared"

export function Certificates() {
  return (
    <Section>
      <SectionHeading eyebrow="My Cert" title="Certificates" />
      <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2">
        {certificates.map((cert) => (
          <div
            key={cert.label}
            className="relative h-[320px] overflow-hidden rounded-[20px] border border-[#e6e1d8] bg-white shadow-[0px_8px_24px_-8px_rgba(0,0,0,0.05)]"
          >
            <Image
              src={cert.image}
              alt={cert.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </Section>
  )
}
