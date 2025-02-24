import type { ReactNode } from 'react'

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
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-400"
            >
              <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
              <path d="M7 7h.01" />
            </svg>
            <span className="font-bold text-primary">Better UI</span>
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
