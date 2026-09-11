import { experience } from "../data"
import { Section, SectionHeading } from "./shared"

export function Experience() {
  return (
    <Section>
      <SectionHeading eyebrow="Work Experience" title="Experience" />
      <div className="flex w-full flex-col gap-[16px]">
        {experience.map((item) => (
          <div
            key={`${item.date}-${item.role}`}
            className="flex w-full flex-col items-start gap-[24px] rounded-[20px] border border-[#e6e1d8] bg-white p-[24px] shadow-[0px_8px_12px_rgba(0,0,0,0.05)] md:flex-row md:items-center"
          >
            <div className="flex w-full shrink-0 flex-col gap-[4px] md:w-[220px]">
              <p className="text-[13px] font-semibold uppercase tracking-[0.78px] text-[#7a8a7f]">
                Date
              </p>
              <p className="text-[16px] font-semibold text-[#2f332f]">
                {item.date}
              </p>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
              <p className="text-[13px] font-semibold uppercase tracking-[0.78px] text-[#7a8a7f]">
                Role
              </p>
              <p className="text-[18px] font-semibold text-[#2f332f]">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
