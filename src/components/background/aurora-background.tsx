'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface AuroraBackgroundProps {
  numWaves?: number
  colors?: string[]
  speedMultiplier?: number
  className?: string
}

export const AuroraBackground = ({
  numWaves = 5,
  colors = [
    'rgba(94, 214, 134, 0.4)',
    'rgba(73, 133, 224, 0.4)',
    'rgba(179, 90, 207, 0.4)',
  ],
  speedMultiplier = 1,
  className,
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn('absolute inset-0 overflow-hidden bg-slate-900', className)}
    >
      {Array.from({ length: numWaves }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-96 w-full opacity-30 blur-3xl will-change-transform"
          style={{
            background: `linear-gradient(${i * 45}deg, ${colors.join(', ')})`,
            top: `${i * (100 / numWaves)}%`,
          }}
          animate={{
            x: ['-100%', '100%'],
            y: [0, i % 2 ? 50 : -50, 0],
          }}
          transition={{
            x: {
              duration: (20 + i * 2) / speedMultiplier,
              repeat: Infinity,
              ease: 'linear',
            },
            y: {
              duration: (5 + i) / speedMultiplier,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
          }}
        />
      ))}
    </div>
  )
}
