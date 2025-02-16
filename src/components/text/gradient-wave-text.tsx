'use client'

import { useState } from 'react'

import { motion, type Transition } from 'framer-motion'
// import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'

export interface GradientWaveTextProps {
  /**
   * The text content to display with the gradient wave effect.
   * This text will be animated according to the specified props.
   */
  text: string

  /**
   * The direction of the gradient animation.
   * Controls the movement of the gradient across the text.
   * Options include horizontal (to-r), vertical (to-b), diagonal (to-br), or a circular gradient (circle).
   * @default "to-r"
   */
  direction?: 'to-r' | 'to-b' | 'to-br' | 'circle'

  /**
   * The starting color of the gradient.
   * This color defines the beginning of the gradient animation.
   */
  fromColor?: string

  /**
   * The intermediate color in the gradient, used to create smooth transitions.
   * This color appears between the start and end colors during the animation.
   */
  viaColor?: string

  /**
   * The ending color of the gradient.
   * This color marks the endpoint of the gradient animation.
   */
  toColor?: string

  /**
   * The duration (in seconds) of one full cycle of the gradient animation.
   * A higher value will result in a slower animation cycle.
   * @default 5
   */
  duration?: number

  /**
   * An optional hover effect that increases the animation speed when the user hovers over the text.
   * This creates an interactive experience where the animation accelerates on hover.
   * @default false
   */
  hoverEffect?: boolean

  /**
   * Additional CSS class names to apply to the text element.
   * This allows customization of the component’s styling beyond the built-in props.
   */
  className?: string

  /**
   * The type of gradient to use: 'linear' for a linear gradient or 'radial' for a circular gradient.
   * Affects the shape and direction of the gradient applied to the text.
   * @default "linear"
   */
  gradientType?: 'linear' | 'radial'

  /**
   * Enables or disables text stroke (outline) around the text.
   * This can make the text more visible, especially with lighter or more complex backgrounds.
   * @default false
   */
  textStroke?: boolean

  /**
   * The easing function that controls the timing of the animation.
   * Easing defines how the animation speeds up or slows down during its course.
   * Options include 'linear', 'easeIn', 'easeOut', and 'easeInOut'.
   * @default "linear"
   */
  easing?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut'

  /**
   * The theme style of the gradient animation, which determines preset color schemes for the effect.
   * Choose from 'default', 'ocean', 'sunset', or 'forest' to apply different aesthetic styles.
   * @default "default"
   */
  theme?: 'default' | 'ocean' | 'sunset' | 'forest'

  /**
   * The type of animation applied to the text.
   * Choose from 'wave', 'pulse', or 'shimmer' to define the visual effect.
   * @default "wave"
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
        `cursor-pointer rounded bg-[length:200%_200%] bg-clip-text p-4 text-4xl font-bold
        text-transparent`,
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
