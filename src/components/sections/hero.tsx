'use client'

import Link from 'next/link'

import { motion } from 'motion/react'

import { Button } from '@/components/ui/button'

export const HeroSection = () => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1
            className="bg-gradient-to-r from-purple-400 bg-clip-text text-6xl font-bold tracking-tight
              text-transparent"
          >
            Better UI
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-secondary-foreground dark:text-primary">
            A modern, customizable UI component library built with Next.js and
            Tailwind CSS. Beautiful, accessible, and ready for production.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/docs/components/explosion-text">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link
              href="https://github.com/knaazimkhan/betterui"
              target="_blank"
            >
              <Button variant="outline" size="lg">
                View on GitHub
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
