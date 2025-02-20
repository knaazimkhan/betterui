'use client'

import { useState } from 'react'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface MagneticCharactersTextProps {
  /**
   * The text content to be displayed with the magnetic effect.
   */
  text: string

  /**
   * Optional additional CSS classes to customize the styling.
   * This will be merged with the default styles.
   */
  className?: string
}

export function MagneticCharactersText({
  text,
  className,
}: MagneticCharactersTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn('text-4xl font-bold text-white', className)}>
      {text.split('').map((char, index) => {
        // Check if the character is a space
        if (char === ' ') {
          return (
            <span key={index} className="inline-block">
              {'\u00A0'}
            </span>
          )
        }

        return (
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
              damping: 30,
            }}
          >
            {char}
          </motion.span>
        )
      })}
    </div>
  )
}
