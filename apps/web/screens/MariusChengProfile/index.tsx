import { Inter } from "next/font/google"

import { Certificates } from "./sections/certificates"
import { Contact } from "./sections/contact"
import { Experience } from "./sections/experience"
import { Gallery } from "./sections/gallery"
import { Hero } from "./sections/hero"
import { Projects } from "./sections/projects"
import { Skills } from "./sections/skills"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export default function MariusChengProfile() {
  return (
    <div
      className={`min-h-screen w-full bg-[#f7f4f0] text-[#2f332f] ${inter.className}`}
    >
      <Hero />
      <Certificates />
      <Experience />
      <Gallery />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
