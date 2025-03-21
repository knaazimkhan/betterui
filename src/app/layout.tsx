import { Geist, Geist_Mono } from 'next/font/google'

import type { Metadata } from 'next'

import '@/styles/globals.css'

import { Provider } from './provider'
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
  ...siteConfig,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
}
interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
