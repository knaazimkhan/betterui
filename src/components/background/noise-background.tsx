'use client'

import { useMemo } from 'react'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface NoiseBackgroundProps {
  /**
   * Specifies the background color of each cell.
   * @default 'bg-white'
   */
  cellColor?: string

  /**
   * Allows additional CSS classes to be applied to the outer container.
   * @default undefined
   */
  className?: string
}

export const NoiseBackground = ({
  cellColor = 'bg-white',
  className,
}: NoiseBackgroundProps) => {
  const cells = useMemo(
    () =>
      Array.from({ length: 100 }).map(() => ({
        id: crypto.randomUUID(),
        opacity: Math.random(),
        duration: 0.5 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    []
  )

  return (
    <div
      className={cn(
        'absolute inset-0 grid grid-cols-10 bg-slate-900',
        className
      )}
    >
      {cells.map((cell) => (
        <motion.div
          key={cell.id}
          className={cn('aspect-square', cellColor)}
          animate={{
            opacity: [cell.opacity, 1 - cell.opacity, cell.opacity],
          }}
          transition={{
            duration: cell.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: cell.delay,
          }}
        />
      ))}
    </div>
  )
}
