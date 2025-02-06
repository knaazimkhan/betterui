'use client'

import { motion } from 'framer-motion'

export default function GradientWaveText({ text }: { text: string }) {
  return (
    <motion.div
      className="rounded bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text p-4 text-4xl font-bold text-transparent"
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'linear',
      }}
    >
      {text}
    </motion.div>
  )
}
