import { GitBranch } from "lucide-react"

import { projects } from "../data"
import { Section, SectionHeading } from "./shared"

export function Projects() {
  return (
    <Section>
      <SectionHeading eyebrow="My Projects" title="Personal Projects" />
      <div className="flex w-full flex-col gap-[24px] md:flex-row">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex min-w-0 flex-1 flex-col gap-[20px] rounded-[24px] border border-[#e6e1d8] bg-white p-[32px] shadow-[0px_8px_12px_rgba(0,0,0,0.05)]"
          >
            <div className="flex w-full items-center gap-[16px]">
              <div className="flex size-[48px] shrink-0 items-center justify-center rounded-[12px] border border-[#e6e1d8] bg-[#f7f4f0]">
                <GitBranch className="size-[24px] text-[#2f332f]" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-[6px]">
                <p className="text-[24px] font-bold text-[#2f332f]">
                  {project.title}
                </p>
                <span className="w-fit rounded-full border border-[#d8e0d8] bg-[#e8ede8] px-[10px] py-[6px] text-[13px] font-semibold text-[#2f332f]">
                  {project.tag}
                </span>
              </div>
            </div>
            <p className="w-full text-[16px] leading-[1.6] text-[#5f665f]">
              {project.description}
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-[15px] font-semibold text-[#2f332f] underline"
            >
              {project.url}
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}
