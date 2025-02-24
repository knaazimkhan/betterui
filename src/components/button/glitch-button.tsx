'use client'

import React, { useState } from 'react'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface GlitchButtonProps {
  children: React.ReactNode
  className?: string
}

export const GlitchButton: React.FC<
  GlitchButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className }) => {
  const [isGlitching, setIsGlitching] = useState(false)

  const glitchVariants = {
    normal: { x: 0, y: 0 },
    glitch: {
      x: [0, -2, 2, -2, 2, 0],
      y: [0, 2, -2, 2, -2, 0],
      transition: {
        duration: 0.3,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    },
  }

  return (
    <div className="relative">
      <motion.button
        className={cn(
          `inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md
          bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow
          transition-colors`,
          className
        )}
        variants={glitchVariants}
        animate={isGlitching ? 'glitch' : 'normal'}
        onMouseEnter={() => setIsGlitching(true)}
        onAnimationComplete={() => setIsGlitching(false)}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          animate={
            isGlitching
              ? {
                  opacity: [1, 0.5, 1],
                  transition: { duration: 0.3 },
                }
              : {}
          }
        >
          {children}
        </motion.span>
      </motion.button>
    </div>
  )
}
