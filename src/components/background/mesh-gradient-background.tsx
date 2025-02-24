'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface MeshGradientBackgroundProps {
  className?: string
}

export const MeshGradientBackground = ({
  className,
}: MeshGradientBackgroundProps) => {
  return (
    <motion.div
      className={cn('absolute inset-0', className)}
      style={{
        background:
          'radial-gradient(circle at 0% 0%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 100% 0%, #8b5cf6 0%, transparent 50%), radial-gradient(at 0% 100%, #ec4899 0%, transparent 50%), radial-gradient(at 100% 100%, #14b8a6 0%, transparent 50%)',
      }}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 3, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'linear',
      }}
    ></motion.div>
  )
}
