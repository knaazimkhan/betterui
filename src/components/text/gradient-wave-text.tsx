'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface GradientWaveTextProps {
  /**
   * The text to be displayed with the gradient wave effect.
  */
  text: string
  fromColor?: string
  viaColor?: string
  toColor?: string
  /**
   * The gradient can be horizontal, vertical, or diagonal.
   * @defaultValue "to-r"
  */
  direction?: 'to-r' | 'to-b' | 'to-br'
  /**
   * The animation takes 5 seconds to complete one cycle.
   * @defaultValue 5
   */
  duration?: number
  /**
   * An optional hover effect speeds up the animation when the user hovers over the text.
   * @defaultValue false
   */
  hoverEffect?: boolean
  className?: string
}

export function GradientWaveText({
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
