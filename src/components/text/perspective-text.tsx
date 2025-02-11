'use client'

import { motion } from 'framer-motion'

export interface PerspectiveTextProps {
  text: string
}

export function PerspectiveText({ text }: PerspectiveTextProps) {
  return (
    <div className="perspective-[1000px] rounded bg-gray-800 p-4 text-4xl font-bold text-white">
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        }}
      >
        {text}
      </motion.div>
    </div>
  )
}
