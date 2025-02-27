'use client'

import { useMemo } from 'react'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface MovingDotsBackgroundProps {
  /**
   * Number of dots to display in the background.
   * @default 50
   */
  numDots?: number

  /**
   * Minimum size of the dots in pixels.
   * @default 2
   */
  minSize?: number

  /**
   * Maximum size of the dots in pixels.
   * @default 6
   */
  maxSize?: number

  /**
   * Additional class names to apply styles to the component.
   */
  className?: string
}

export const MovingDotsBackground = ({
  numDots = 50,
  minSize = 2,
  maxSize = 6,
  className,
}: MovingDotsBackgroundProps) => {
  const dots = useMemo(() => {
    return Array.from({ length: numDots }).map(() => ({
      id: crypto.randomUUID(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      duration: 5 + Math.random() * 3,
    }))
  }, [numDots, minSize, maxSize])

  return (
    <div
      className={cn('absolute inset-0 overflow-hidden bg-slate-900', className)}
      aria-hidden="true"
    >
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-white/20"
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
          animate={{
            x: [-20, 20, -20],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
