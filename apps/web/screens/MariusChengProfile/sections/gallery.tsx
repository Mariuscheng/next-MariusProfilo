import Image from "next/image"

import { galleryRows } from "../data"
import { Section, SectionHeading } from "./shared"

export function Gallery() {
  return (
    <Section>
      <SectionHeading eyebrow="My Gallery" title="Photography Portfolio" />
      <div className="flex w-full flex-col gap-[16px]">
        {galleryRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid w-full grid-cols-1 gap-[16px] ${
              row.columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
            }`}
          >
            {row.photos.map((photo) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden rounded-[20px] border border-[#e6e1d8] bg-white shadow-[0px_8px_24px_-8px_rgba(0,0,0,0.05)] ${
                  row.columns === 2
                    ? "h-[320px] sm:h-[420px]"
                    : "h-[240px] sm:h-[280px]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    row.columns === 2
                      ? "(max-width: 640px) 100vw, 50vw"
                      : "(max-width: 640px) 100vw, 33vw"
                  }
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  )
}
