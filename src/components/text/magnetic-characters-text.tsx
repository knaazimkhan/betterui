'use client'

import { useState } from 'react'

import { motion } from 'framer-motion'

export interface MagneticCharactersTextProps {
  text: string
}

export function MagneticCharactersText({ text }: MagneticCharactersTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="rounded bg-gray-800 p-4 text-4xl font-bold text-white">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          animate={
            hoveredIndex !== null
              ? {
                  x: hoveredIndex === index ? 10 : -5,
                  y: hoveredIndex === index ? -10 : 5,
                  scale: hoveredIndex === index ? 1.5 : 1,
                }
              : {}
          }
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}
