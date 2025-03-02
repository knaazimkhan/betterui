import type { ReactNode } from 'react'

import Image from 'next/image'

import { HomeLayout } from 'fumadocs-ui/layouts/home'

import { baseOptions } from '@/app/layout.config'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions}>
      {children}
      <Footer />
    </HomeLayout>
  )
}

const Footer = () => {
  return (
    <footer className="border-t border-primary/10 bg-background p-4 py-8 dark:border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-start justify-center gap-1">
            <Image src={'/logo.svg'} alt="Better UI" width={30} height={30} />
            <span className="text-2xl font-bold text-primary">Better UI</span>
          </div>
          <div className="text-sm text-primary">
            © {new Date().getFullYear()} BetterUI. All rights reserved.
          </div>
          <div className="text-sm text-primary">
            Developed and maintained by{' '}
            <a
              href="https://github.com/knaazimkhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              @knaazimkhan
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
