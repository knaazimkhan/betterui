'use client'

import { useState, useEffect, useCallback } from 'react'

import { motion } from 'framer-motion'

export interface MorphingTextProps {
  /**
   * The text to do the animation for morph.
   */
  text: string
  /**
   * Duration of each letter change in milliseconds.
   * @defaultValue 30
   */
  speed?: number
}

export function MorphingText({ text, speed = 30 }: MorphingTextProps) {
  const [currentText, setCurrentText] = useState(text)
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const morphText = useCallback(() => {
    let iteration = 0
    const interval = setInterval(() => {
      setCurrentText((prev) =>
        prev
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index]
            }
            return letters[Math.floor(Math.random() * 26)]
          })
          .join('')
      )

      if (iteration >= text.length) {
        clearInterval(interval)
      }
      iteration += 1 / 3
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  useEffect(() => {
    const cleanup = morphText()
    return cleanup
  }, [morphText])

  return (
    <motion.div
      className="text-4xl font-bold text-black dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
    </motion.div>
  )
}
