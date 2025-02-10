'use client'

import { useState } from 'react'
import { motion, type Transition } from 'framer-motion'
// import { useTheme } from 'next-themes'

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
  direction?: 'to-r' | 'to-b' | 'to-br' | 'circle'
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
  /**
   * @defaultValue "linear"
   */
  gradientType?: 'linear' | 'radial'
  textStroke?: boolean
  /**
   * @defaultValue "linear"
   */
  easing?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut'
  /**
   * @defaultValue "default"
   */
  theme?: 'default' | 'ocean' | 'sunset' | 'forest'
  /**
   * @defaultValue "wave"
   */
  animationType?: 'wave' | 'pulse' | 'shimmer'
}

const themes = {
  default: { from: 'from-purple-500', via: 'via-pink-500', to: 'to-red-500' },
  ocean: { from: 'from-blue-500', via: 'via-cyan-400', to: 'to-teal-500' },
  sunset: { from: 'from-yellow-400', via: 'via-orange-500', to: 'to-red-600' },
  forest: { from: 'from-green-600', via: 'via-emerald-500', to: 'to-lime-400' },
}

const directionClasses = {
  'to-r': 'bg-gradient-to-r',
  'to-b': 'bg-gradient-to-b',
  'to-br': 'bg-gradient-to-br',
  circle: 'bg-radial',
}

export function GradientWaveText({
  text,
  direction = 'to-r',
  fromColor,
  viaColor,
  toColor,
  duration = 5,
  hoverEffect = false,
  className,
  gradientType = 'linear',
  textStroke = false,
  easing = 'linear',
  theme = 'default',
  animationType = 'wave',
}: GradientWaveTextProps) {
  // const { theme: systemTheme } = useTheme()

  const [isHovered, setIsHovered] = useState(false)

  const { from, via, to } = themes[theme]
  const gradientColors = `${fromColor || from} ${viaColor || via} ${toColor || to}`

  const gradientClass =
    gradientType === 'radial' ? 'bg-radial' : directionClasses[direction]

  const getAnimationProps = () => {
    switch (animationType) {
      case 'pulse':
        return { scale: [1, 1.05, 1] }
      case 'shimmer':
        return { backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }
      default: // wave
        return direction === 'to-b'
          ? { backgroundPosition: ['50% 0%', '50% 100%', '50% 0%'] }
          : { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }
    }
  }

  const textStrokeClass = textStroke ? 'text-stroke' : ''

  const transition: Transition = {
    duration: isHovered && hoverEffect ? duration / 2 : duration,
    repeat: Number.POSITIVE_INFINITY,
    ease: easing,
  }

  return (
    <motion.div
      className={cn(
        `cursor-pointer rounded bg-[length:200%_200%] bg-clip-text p-4 text-4xl font-bold text-transparent`,
        gradientClass,
        gradientColors,
        textStrokeClass,
        className
      )}
      animate={getAnimationProps()}
      transition={transition}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={text}
      role="heading"
      // data-theme={systemTheme}
    >
      {text}
    </motion.div>
  )
}
