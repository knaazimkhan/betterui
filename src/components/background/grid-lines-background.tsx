'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface GridLinesBackgroundProps {
  gridSize?: number
  lineColor?: string
  lineSize?: number
  duration?: number
  className?: string
}

export const GridLinesBackground = ({
  gridSize = 40,
  lineColor = 'rgba(255,255,255,0.1)',
  lineSize = 1,
  duration = 4,
  className,
}: GridLinesBackgroundProps) => {
  return (
    <div className={cn('absolute inset-0 bg-slate-900', className)}>
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${lineColor} ${lineSize}px, transparent ${lineSize}px),
            linear-gradient(to bottom, ${lineColor} ${lineSize}px, transparent ${lineSize}px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          willChange: 'background-position',
        }}
        animate={{
          backgroundPosition: [`0px 0px`, `${gridSize}px ${gridSize}px`],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}
