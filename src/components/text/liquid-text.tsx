'use client'

import { motion } from 'framer-motion'

export interface LiquidTextProps {
  text: string
}

export function LiquidText({ text }: LiquidTextProps) {
  return (
    <motion.div
      className="overflow-hidden rounded bg-blue-500 p-4 text-4xl font-bold text-white"
      animate={{
        borderRadius: ['20% 80% 20% 80%', '80% 20% 80% 20%', '20% 80% 20% 80%'],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut',
      }}
    >
      {text}
    </motion.div>
  )
}
