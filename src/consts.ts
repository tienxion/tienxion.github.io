import type { SvgComponent } from "astro/types"
import Email from "@/assets/icons/email.svg"
import GitHub from "@/assets/icons/github.svg"
import RSS from "@/assets/icons/rss.svg"

export const SITE = {
  title: "arnav",
  description: "notes and thoughts from arnav.",
  locale: "en-US",
  dir: "ltr",
  defaultPageImage: "/gengar.jpg",
  defaultPostImage: "/gengar.jpg",
} as const

export const NAVIGATION = [{ href: "/blog", label: "Blog" }]

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://github.com/tienxion", label: "GitHub", icon: GitHub },
  { href: "mailto:hello@example.com", label: "Email", icon: Email },
  { href: "/rss.xml", label: "RSS", icon: RSS },
]
