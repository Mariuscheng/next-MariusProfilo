import { contact } from "../data"
import { Section, SectionHeading } from "./shared"

export function Contact() {
  return (
    <Section className="px-6 pb-[120px] pt-[100px] md:px-16 lg:px-[120px]">
      <SectionHeading eyebrow="Contact Me" title="Let's connect" />
      <div className="flex w-full flex-col gap-[40px] rounded-[24px] border border-[#e6e1d8] bg-white p-[40px] shadow-[0px_8px_12px_rgba(0,0,0,0.05)] lg:flex-row">
        <div className="flex min-w-0 flex-1 flex-col gap-[24px]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[13px] font-semibold uppercase tracking-[0.78px] text-[#7a8a7f]">
              Email
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="text-[18px] font-medium text-[#2f332f]"
            >
              {contact.email}
            </a>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[13px] font-semibold uppercase tracking-[0.78px] text-[#7a8a7f]">
              Phone
            </p>
            <a
              href={`tel:${contact.phone.replaceAll(" ", "")}`}
              className="text-[18px] font-medium text-[#2f332f]"
            >
              {contact.phone}
            </a>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[13px] font-semibold uppercase tracking-[0.78px] text-[#7a8a7f]">
              Social
            </p>
            <div className="flex flex-wrap gap-[12px]">
              {contact.socials.map((social) => (
                <span
                  key={social}
                  className="rounded-full border border-[#e6e1d8] bg-[#f7f4f0] px-[14px] py-[10px] text-[14px] font-semibold text-[#2f332f]"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-[16px] lg:w-[420px]">
          <p className="w-full text-[16px] leading-[1.6] text-[#5f665f]">
            {contact.blurb}
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="flex w-full items-center justify-center rounded-[14px] bg-[#2f332f] px-[20px] py-[16px] text-[15px] font-semibold text-white transition-colors hover:bg-[#3f443f]"
          >
            Let&apos;s chat
          </a>
        </div>
      </div>
    </Section>
  )
}
