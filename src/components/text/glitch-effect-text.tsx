'use client'

import { motion } from 'framer-motion'

export function GlitchEffectText({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden rounded bg-gray-800 p-4 text-4xl font-bold text-white">
      <motion.div
        className="absolute inset-0 text-red-500"
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
        className="absolute inset-0 text-blue-500"
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
      <div className="relative">{text}</div>
    </div>
  )
}
