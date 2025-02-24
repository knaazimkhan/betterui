'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface GradientWaveBackgroundProps {
  className?: string
}

export const GradientWaveBackground = ({
  className,
}: GradientWaveBackgroundProps) => {
  return (
    <motion.div
      className={cn(
        'absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500',
        className
      )}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}
