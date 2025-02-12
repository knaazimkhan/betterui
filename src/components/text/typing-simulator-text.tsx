'use client'

import { useState, useEffect, useRef } from 'react'

import { motion } from 'framer-motion'
export interface TypingSimulatorTextProps {
  text: string
}

export function TypingSimulatorText({ text }: TypingSimulatorTextProps) {
  const [displayText, setDisplayText] = useState('')
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let currentIndex = 0

    const typeNextChar = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1))
        currentIndex++
        intervalRef.current = setTimeout(typeNextChar, 100)
      }
    }

    void typeNextChar()

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current)
    }
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
