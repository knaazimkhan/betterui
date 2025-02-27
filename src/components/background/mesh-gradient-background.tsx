'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface MeshGradientBackgroundProps {
  duration?: number
  animation?: boolean
  gradientColors?: string[]
  className?: string
}

export const MeshGradientBackground = ({
  duration = 10,
  animation = true,
  gradientColors = ['#3b82f6', '#8b5cf6', '#ec4899', '#14b8a6'],
  className,
}: MeshGradientBackgroundProps) => {
  const colors = gradientColors
    .map((color, i) => {
      const x = (i % 2) * 100
      const y = i > 1 ? 100 : 0
      return `radial-gradient(circle at ${x}% ${y}%, ${color} 0%, transparent 50%)`
    })
    .join(', ')

  const animate = animation
    ? { scale: [1, 1.1, 1], rotate: [0, 3, 0] }
    : undefined
  const transition = animation
    ? { duration, repeat: Infinity, ease: 'linear' }
    : undefined

  return (
    <motion.div
      className={cn('absolute inset-0 will-change-transform', className)}
      style={{ background: colors }}
      animate={animate}
      transition={transition}
    />
  )
}
