import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Better UI - Modern UI Component Library",
    template: "%s | Better UI",
  },
  description: "A modern, customizable UI component library built with Next.js and Tailwind CSS.",
  keywords: ["UI library", "React components", "Tailwind CSS", "Next.js", "TypeScript"],
  authors: [{ name: "Better UI Team" }],
  creator: "Better UI Team",
  metadataBase: new URL("https://betterui.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://betterui.dev",
    title: "Better UI - Modern UI Component Library",
    description: "A modern, customizable UI component library built with Next.js and Tailwind CSS.",
    siteName: "Better UI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Better UI - Modern UI Component Library",
    description: "A modern, customizable UI component library built with Next.js and Tailwind CSS.",
    creator: "@betterui",
  },
  icons: {
    icon: "/favicon.ico",
  },
} 