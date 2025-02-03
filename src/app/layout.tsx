import { Geist, Geist_Mono } from 'next/font/google'

import { RootProvider } from 'fumadocs-ui/provider'

import type { Metadata } from 'next'

import '@/styles/globals.css'

import { siteConfig } from './site.config'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex flex-1 flex-col min-h-screen">
          <RootProvider>{children}</RootProvider>
        </main>
      </body>
    </html>
  )
}
