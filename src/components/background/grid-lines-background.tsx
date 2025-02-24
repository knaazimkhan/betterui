'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface GridLinesBackgroundProps {
  className?: string
}

export const GridLinesBackground = ({
  className,
}: GridLinesBackgroundProps) => {
  return (
    <div className={cn('absolute inset-0 bg-slate-900', className)}>
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}
