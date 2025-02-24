'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface PulseRingsBackgroundProps {
  className?: string
}

export const PulseRingsBackground = ({
  className,
}: PulseRingsBackgroundProps) => {
  return (
    <div
      className={cn(
        'absolute inset-0 overflow-hidden bg-emerald-900',
        className
      )}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full border border-emerald-500/20"
          initial={{ width: 100, height: 100 }}
          animate={{
            width: [100, 600],
            height: [100, 600],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.8,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            x: '-50%',
            y: '-50%',
          }}
        />
      ))}
    </div>
  )
}
