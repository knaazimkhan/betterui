'use client'

import { useState } from 'react'

import { motion } from 'framer-motion'

export interface MagneticCharactersTextProps {
  text: string
}

export function MagneticCharactersText({ text }: MagneticCharactersTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="text-4xl font-bold text-white">
      {text.split('').map((char, index) => (
        <motion.span
          className="relative inline-block origin-center"
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={{
            x: hoveredIndex === index ? 10 : 0,
            y: hoveredIndex === index ? -10 : 0,
            scale: hoveredIndex === index ? 1.5 : 1,
            letterSpacing: hoveredIndex === index ? '0.4em' : '0em',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30, // Smoothness of transition
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}
