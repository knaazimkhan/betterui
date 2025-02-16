'use client'

import { motion } from 'framer-motion'

export interface GlitchEffectTextProps {
  text: string
}

export function GlitchEffectText({ text }: GlitchEffectTextProps) {
  return (
    <div className="relative p-1 text-4xl font-bold text-white">
      <motion.div
        className="absolute inset-0 z-10 text-red-500 will-change-transform"
        animate={{
          x: [-2, 2, -2],
          y: [2, -2, 2],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 0.3,
          ease: 'linear',
        }}
      >
        {text}
      </motion.div>
      <motion.div
        className="absolute inset-0 z-20 text-blue-500 will-change-transform"
        animate={{
          x: [2, -2, 2],
          y: [-2, 2, -2],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 0.3,
          ease: 'linear',
        }}
      >
        {text}
      </motion.div>
      <div className="relative z-30">{text}</div>
    </div>
  )
}
