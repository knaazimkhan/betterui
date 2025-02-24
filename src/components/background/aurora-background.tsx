'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface AuroraBackgroundProps {
  className?: string
}

export const AuroraBackground = ({ className }: AuroraBackgroundProps) => {
  return (
    <div
      className={cn('absolute inset-0 overflow-hidden bg-slate-900', className)}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-96 w-full opacity-30 blur-3xl"
          style={{
            background: `linear-gradient(${i * 45}deg, 
              rgba(94, 214, 134, 0.4), 
              rgba(73, 133, 224, 0.4), 
              rgba(179, 90, 207, 0.4)
            )`,
            top: `${i * 15}%`,
          }}
          animate={{
            x: ['-100%', '100%'],
            y: [0, i % 2 ? 50 : -50, 0],
          }}
          transition={{
            x: {
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            },
            y: {
              duration: 5 + i,
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
