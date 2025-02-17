'use client'

import React from 'react'

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

export interface GlitchEffectTextProps {
  /**
   * The text content that will have the glitch effect.
   * This is the main visible text.
   */
  text: string

  /**
   * Controls the speed of the glitch animation in seconds.
   * Lower values make it flicker faster, higher values make it slower.
   * @default 0.3
   */
  glitchSpeed?: number

  /**
   * Determines whether the glitch effect moves side-to-side (horizontal)
   * or up-and-down (vertical).
   * @default "horizontal"
   */
  glitchDirection?: 'horizontal' | 'vertical'

  /**
   * Defines the two colors used for the glitch layers.
   * The first color shifts in one direction, and the second color shifts in the opposite direction.
   * Accepts Tailwind color classes or standard CSS color values.
   * @default ["text-red-500", "text-blue-500"]
   */
  glitchColors?: [string, string]

  /**
   * Allows users to add custom Tailwind classes to style the outer container of the component.
   * Useful for changing font size, weight, spacing, etc.
   */
  className?: string

  /**
   * Defines a custom text shadow using CSS syntax.
   * Helps in adding glow, blur, or depth effects to the main text.
   * @default "2px 2px 4px rgba(0,0,0,0.5)"
   */
  textShadow?: string
}

export function GlitchEffectText({
  text,
  glitchSpeed = 0.3,
  glitchDirection = 'horizontal',
  glitchColors = ['text-red-500', 'text-blue-500'],
  textShadow = '2px 2px 4px rgba(0,0,0,0.5)', // Default shadow
  className,
}: GlitchEffectTextProps) {
  const direction = glitchDirection === 'horizontal' ? [-2, 2, -2] : [2, -2, 2]
  const secondaryDirection =
    glitchDirection === 'horizontal' ? [2, -2, 2] : [-2, 2, -2]

  return (
    <div
      className={cn(
        'relative p-1 text-4xl font-bold text-white blur-0',
        className
      )}
    >
      {/* Glitch Layer 1 */}
      <motion.div
        className={cn(
          'absolute inset-0 z-10 will-change-transform',
          glitchColors[0]
        )}
        animate={{
          x: direction,
          y: [2, -2, 2],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: glitchSpeed,
          ease: 'linear',
          delay: Math.random() * 0.1, // Randomize delay for more natural glitch
        }}
      >
        {text}
      </motion.div>

      {/* Glitch Layer 2 */}
      <motion.div
        className={cn(
          'absolute inset-0 z-20 will-change-transform',
          glitchColors[1]
        )}
        animate={{
          x: secondaryDirection,
          y: [-2, 2, -2],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: glitchSpeed,
          ease: 'linear',
          delay: Math.random() * 0.1, // Randomize delay for more natural glitch
        }}
      >
        {text}
      </motion.div>

      {/* Main Text */}
      <div className="relative z-30" style={{ textShadow }}>
        {text}
      </div>
    </div>
  )
}
