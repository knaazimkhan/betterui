'use client'

import React from 'react'

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

export interface GlitchEffectTextProps {
  text: string
  glitchSpeed?: number
  glitchDirection?: 'horizontal' | 'vertical'
  glitchColors?: [string, string]
  textShadow?: string
  className?: string
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
