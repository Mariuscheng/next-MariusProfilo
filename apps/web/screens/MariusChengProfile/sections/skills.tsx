import { skills } from "../data"
import { Section, SectionHeading } from "./shared"

export function Skills() {
  return (
    <Section>
      <SectionHeading eyebrow="My Skill" title="Skills" />
      <div className="flex w-full flex-wrap items-start gap-[12px]">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-full border border-[#d8e0d8] bg-[#e8ede8] px-[18px] py-[12px]"
          >
            <p className="whitespace-nowrap text-[15px] font-semibold text-[#2f332f]">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
