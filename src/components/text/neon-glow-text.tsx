'use client'

import { useState } from 'react'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface NeonGlowTextProps {
  /**
   * The main text to display inside the component.
   */
  text: string

  /**
   * The color of the glowing effect.
   * It can be any valid CSS color value (hex, RGB, or named color).
   * @default "#ff00de"
   */
  glowColor?: string

  /**
   * The duration of the animation (in seconds).
   * It controls how long the animation lasts for each cycle.
   * @default 1
   */
  duration?: number

  /**
   * The blur radius for the glow effect.
   * A larger value makes the glow more diffuse.
   * @default 5
   */
  blurRadius?: number

  /**
   * The spread radius for the glow effect.
   * A larger value causes the glow to spread further from the text.
   * @default 2
   */
  spreadRadius?: number

  /**
   * Additional Tailwind CSS or custom class names for styling the component.
   */
  className?: string
}

export function NeonGlowText({
  text,
  glowColor = '#ff00de',
  duration = 1,
  blurRadius = 5,
  spreadRadius = 2,
  className,
}: NeonGlowTextProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const textShadow = [
    `0 0 ${blurRadius}px #fff, 0 0 ${blurRadius * 2}px #fff, 0 0 ${blurRadius * 3}px #fff, 0 0 ${blurRadius * 4}px ${glowColor}, 0 0 ${blurRadius * 7}px ${glowColor}, 0 0 ${blurRadius * 8}px ${glowColor}, 0 0 ${blurRadius * 10}px ${glowColor}, 0 0 ${blurRadius * 15}px ${glowColor}`,
    `0 0 ${spreadRadius}px #fff, 0 0 ${spreadRadius + 3}px #fff, 0 0 ${spreadRadius + 5}px #fff, 0 0 ${spreadRadius + 8}px ${glowColor}, 0 0 ${spreadRadius + 12}px ${glowColor}, 0 0 ${spreadRadius + 18}px ${glowColor}, 0 0 ${spreadRadius + 23}px ${glowColor}, 0 0 ${spreadRadius + 35}px ${glowColor}`,
  ]

  const hoverTextShadow = `0 0 ${blurRadius * 1.5}px #fff, 0 0 ${blurRadius * 2}px #fff, 0 0 ${blurRadius * 3}px #fff, 0 0 ${blurRadius * 5}px ${glowColor}, 0 0 ${blurRadius * 7}px ${glowColor}`

  return (
    <motion.div
      className={cn(
        'text-4xl font-bold text-gray-500 will-change-[text-shadow]',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.1 : 1,
        textShadow: isHovered ? hoverTextShadow : textShadow,
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'reverse',
      }}
    >
      {text}
    </motion.div>
  )
}
