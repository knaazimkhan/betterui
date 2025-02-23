'use client'

import React from 'react'

import { motion, MotionProps } from 'motion/react'

import { cn } from '@/lib/utils'

export interface PulseButtonProps {
  children: React.ReactNode
  className?: string
}

export const PulseButton: React.FC<
  PulseButtonProps &
    Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> &
    MotionProps
> = ({ children, className }) => {
  return (
    <motion.button
      className={cn(
        `relative inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap
        rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground
        shadow transition-colors`,
        className
      )}
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 rounded-md bg-rose-500"
        variants={{
          hover: {
            scale: [1, 1.05, 1],
            opacity: [0.8, 0, 0.8],
          },
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <span className="relative">{children}</span>
    </motion.button>
  )
}
