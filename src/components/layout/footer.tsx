'use client'

import React from 'react'

const Footer = () => {
    return (
      <footer className="border-t border-secondary-200 bg-white py-8 dark:border-secondary-800 dark:bg-secondary-950">
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
                className="text-primary-600 dark:text-primary-400"
              >
                <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                <path d="M7 7h.01" />
              </svg>
              <span className="font-bold">BetterUI</span>
            </div>
            <div className="text-sm text-secondary-600 dark:text-secondary-400">
              © {new Date().getFullYear()} BetterUI. All rights reserved.
            </div>
            <div className="text-sm text-secondary-600 dark:text-secondary-400">
              Developed and maintained by{' '}
              <a
                href="https://github.com/knaazimkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline dark:text-primary-400"
              >
                @knaazimkhan
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  export default Footer;