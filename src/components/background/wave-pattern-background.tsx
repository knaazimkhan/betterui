'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface WavePatternBackgroundProps {
  className?: string
}

export const WavePatternBackground = ({
  className,
}: WavePatternBackgroundProps) => {
  return (
    <div className={cn('absolute inset-0 bg-indigo-900', className)}>
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full border-t-2 border-indigo-500/20"
          style={{ top: `${i * 10}%` }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  )
}
