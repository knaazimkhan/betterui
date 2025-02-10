'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GradientWaveTextProps {
  text: string
  fromColor?: string
  viaColor?: string
  toColor?: string
  direction?: 'to-r' | 'to-b' | 'to-br'
  duration?: number
  hoverEffect?: boolean
  className?: string
}

export default function GradientWaveText({
  text,
  direction = 'to-r',
  fromColor = 'from-purple-500',
  viaColor = 'via-pink-500',
  toColor = 'to-red-500',
  duration = 5,
  hoverEffect = false,
  className = 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500',
}: GradientWaveTextProps) {
  const [isHovered, setIsHovered] = useState(false)

  const animationProps =
    direction === 'to-b'
      ? { backgroundPosition: ['50% 0%', '50% 100%', '50% 0%'] }
      : { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }

  const bgGradient = {
    'to-r': 'bg-gradient-to-r',
    'to-b': 'bg-gradient-to-b',
    'to-br': 'bg-gradient-to-br',
  }

  return (
    <motion.div
      className={cn(
        'cursor-pointer rounded bg-clip-text p-4 text-4xl font-bold text-transparent',
        className,
        bgGradient[direction],
        fromColor,
        viaColor,
        toColor,
      )}
      style={{ backgroundSize: '200% 200%' }}
      animate={animationProps}
      transition={{
        duration: isHovered && hoverEffect ? duration / 2 : duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'linear',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </motion.div>
  )
}
