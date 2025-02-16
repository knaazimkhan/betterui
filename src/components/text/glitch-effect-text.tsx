'use client'

import React from 'react'

import { motion } from 'framer-motion'

export interface GlitchEffectTextProps {
  text: string
  glitchSpeed?: number
  glitchDirection?: 'horizontal' | 'vertical'
  glitchColors?: [string, string]
  textShadow?: string
}

export function GlitchEffectText({
  text,
  glitchSpeed = 0.3,
  glitchDirection = 'horizontal',
  glitchColors = ['text-red-500', 'text-blue-500'],
  textShadow = '2px 2px 4px rgba(0,0,0,0.5)',
}: GlitchEffectTextProps) {
  const direction = glitchDirection === 'horizontal' ? [-2, 2, -2] : [2, -2, 2]
  const secondaryDirection =
    glitchDirection === 'horizontal' ? [2, -2, 2] : [-2, 2, -2]

  return (
    <div className="relative p-1 text-4xl font-bold text-white">
      {/* Glitch Layer 1 */}
      <motion.div
        className={`absolute inset-0 ${glitchColors[0]} z-10 will-change-transform`}
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
        className={`absolute inset-0 ${glitchColors[1]} z-20 will-change-transform`}
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

      {/* Main Text with Possible Shadows & Blur */}
      <div
        className="relative z-30"
        style={{
          textShadow,
          filter: 'blur(0px)', // Optional: can increase blur on hover or as needed
        }}
      >
        {text}
      </div>
    </div>
  )
}
