'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export interface TypingSimulatorTextProps {
  text: string
}

export function TypingSimulatorText({ text }: TypingSimulatorTextProps) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text[i])
        i++
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [text])

  return (
    <div className="rounded bg-gray-800 p-4 text-4xl font-bold text-white">
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
      >
        |
      </motion.span>
    </div>
  )
}
