export type ExperienceItem = {
  date: string
  role: string
}

export const experience: ExperienceItem[] = [
  { date: "Sep 2013 - Mar 2014", role: "IT Assistant" },
  { date: "Dec 2016 - Aug 2017", role: "Document Support (Purchase & Helpdesk)" },
  { date: "Jan 2018 - Jul 2018", role: "IT Support" },
  { date: "Nov 2018 - Dec 2023", role: "Software Tester" },
]

export const skills = [
  "Java",
  "Rust",
  "Python",
  "Figma",
  "A.I coding",
  "Adobe XD",
  "Testing",
]

export type Project = {
  title: string
  tag: string
  description: string
  url: string
}

export const projects: Project[] = [
  {
    title: "Rust GameBoy",
    tag: "Rust",
    description: "A GameBoy emulator built with Rust.",
    url: "https://github.com/Mariuscheng/Rust_GameBoy",
  },
  {
    title: "Flutter eShop",
    tag: "Flutter",
    description: "An e-commerce app built with Flutter.",
    url: "https://github.com/Mariuscheng/flutter_eshop",
  },
]

export type Certificate = {
  image: string
  alt: string
  label: string
}

export const certificates: Certificate[] = [
  {
    image: "/profile/cert-uiux.png",
    alt: "UI/UX design certificate of completion",
    label: "UI/UX",
  },
  {
    image: "/profile/cert-lightroom.png",
    alt: "Adobe Lightroom certificate of completion",
    label: "Lightroom",
  },
  {
    image: "/profile/cert-photoshop.png",
    alt: "Adobe Photoshop certificate of completion",
    label: "Photoshop",
  },
  {
    image: "/profile/cert-illustrator.png",
    alt: "Adobe Illustrator certificate of completion",
    label: "Illustrator",
  },
]

export type GalleryRow = {
  columns: 2 | 3
  photos: { src: string; alt: string }[]
}

export const galleryRows: GalleryRow[] = [
  {
    columns: 2,
    photos: [
      {
        src: "/profile/photo-1.jpg",
        alt: "Close-up of orange leaves against a dark background",
      },
      {
        src: "/profile/photo-2.jpg",
        alt: "Close-up of a reddish leaf against a dark blurred background",
      },
    ],
  },
  {
    columns: 3,
    photos: [
      {
        src: "/profile/photo-3.jpg",
        alt: "A windmill in a green field under a cloudy sky",
      },
      {
        src: "/profile/photo-4.jpg",
        alt: "Black and white close-up of a rose",
      },
      {
        src: "/profile/photo-5.jpg",
        alt: "Nighttime street scene with colorful light trails",
      },
    ],
  },
  {
    columns: 2,
    photos: [
      {
        src: "/profile/photo-6.jpg",
        alt: "Landscape with a river and a building in the distance",
      },
      {
        src: "/profile/photo-7.jpg",
        alt: "Black and white photograph of a forest path",
      },
    ],
  },
  {
    columns: 3,
    photos: [
      {
        src: "/profile/photo-8.jpg",
        alt: "Green field under a blue sky",
      },
      {
        src: "/profile/photo-9.jpg",
        alt: "Sunlit path through a green forest",
      },
      {
        src: "/profile/photo-10.jpg",
        alt: "A lake surrounded by green hills",
      },
    ],
  },
  {
    columns: 2,
    photos: [
      {
        src: "/profile/photo-11.jpg",
        alt: "Green leaves against a textured brown background",
      },
      {
        src: "/profile/photo-12.jpg",
        alt: "Close-up of yellow flowers with dark green leaves",
      },
    ],
  },
]

export const contact = {
  email: "mariuscheng@email.com",
  phone: "+852 0000 0000",
  socials: ["LinkedIn", "GitHub", "Behance"],
  blurb:
    "I'm excited to connect with teams building thoughtful digital experiences. Whether it's a UI/UX role or a conversation about landscape photography, I'm here to chat.",
}
