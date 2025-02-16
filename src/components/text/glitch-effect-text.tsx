'use client'

import { motion } from 'framer-motion'

export interface GlitchEffectTextProps {
  text: string
  glitchSpeed?: number
  glitchDirection?: 'horizontal' | 'vertical'
  glitchColors?: [string, string]
}

export function GlitchEffectText({
  text,
  glitchSpeed = 0.3,
  glitchDirection = 'horizontal',
  glitchColors = ['text-red-500', 'text-blue-500'],
}: GlitchEffectTextProps) {
  const direction = glitchDirection === 'horizontal' ? [-2, 2, -2] : [2, -2, 2]
  const secondaryDirection =
    glitchDirection === 'horizontal' ? [2, -2, 2] : [-2, 2, -2]

  return (
    <div className="relative p-1 text-4xl font-bold text-white">
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
        }}
      >
        {text}
      </motion.div>
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
        }}
      >
        {text}
      </motion.div>
      <div className="relative z-30">{text}</div>
    </div>
  )
}
