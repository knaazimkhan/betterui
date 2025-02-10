'use client'

import { motion } from 'framer-motion'

export function NeonGlowText({ text }: { text: string }) {
  return (
    <motion.div
      className="rounded bg-black p-4 text-4xl font-bold text-white"
      animate={{
        textShadow: [
          '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de',
          '0 0 2px #fff, 0 0 5px #fff, 0 0 7px #fff, 0 0 10px #ff00de, 0 0 17px #ff00de, 0 0 20px #ff00de, 0 0 25px #ff00de, 0 0 37px #ff00de',
        ],
      }}
      transition={{
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'reverse',
      }}
    >
      {text}
    </motion.div>
  )
}
