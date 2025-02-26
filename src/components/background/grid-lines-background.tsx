'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface GridLinesBackgroundProps {
  /** Size of each grid cell in pixels
   *  @default 40
   */
  gridSize?: number

  /** Color of the grid lines
   *  @default 'rgba(255,255,255,0.1)'
   */
  lineColor?: string

  /** Thickness of the grid lines in pixels
   *  @default 1
   */
  lineSize?: number

  /** Duration of the animation cycle in seconds
   *  @default 4
   */
  duration?: number

  /** Additional classes for styling */
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
