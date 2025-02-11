'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export interface ParticleExplosionTextProps {
  text: string
}

export function ParticleExplosionText({ text }: ParticleExplosionTextProps) {
  const [exploded, setExploded] = useState(false)

  const handleClick = () => {
    setExploded(true)
    setTimeout(() => setExploded(false), 1000)
  }

  return (
    <div
      className="cursor-pointer rounded bg-gray-800 p-4 text-4xl font-bold text-white"
      onClick={handleClick}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          animate={
            exploded
              ? {
                  y: [0, -20],
                  opacity: [1, 0],
                  scale: [1, 0],
                }
              : {}
          }
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}
