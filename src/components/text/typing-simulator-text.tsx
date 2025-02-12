'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
export interface TypingSimulatorTextProps {
  /**
   * Text to be animate
   */
  text: string
  /**
   * Allows users to adjust how fast the text appears.
   * @defaultValue 100
   */
  typingSpeed?: number
  /**
   * The cursor character or style.
   */
  cursorStyle?: string
  /**
   * Allows the animation to restart after completion.
   */
  loop?: boolean
  /**
   * Easier styling customization.
   */
  className?: string
}

export function TypingSimulatorText({
  text,
  typingSpeed = 100,
  cursorStyle = '|',
  loop = false,
  className,
}: TypingSimulatorTextProps) {
  const [displayText, setDisplayText] = useState('')
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const currentIndexRef = useRef(0)

  const typeNextChar = useCallback(() => {
    if (currentIndexRef.current < text.length) {
      setDisplayText(text.slice(0, currentIndexRef.current + 1))
      currentIndexRef.current++
      intervalRef.current = setTimeout(typeNextChar, 100)
    } else if (loop) {
      currentIndexRef.current = 0
      setDisplayText('')
      intervalRef.current = setTimeout(typeNextChar, typingSpeed * 5) // Longer pause before looping
    }
  }, [text, loop, typingSpeed])

  useEffect(() => {
    currentIndexRef.current = 0

    if (intervalRef.current) clearTimeout(intervalRef.current)

    void typeNextChar()

    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current)
    }
  }, [typeNextChar])

  return (
    <div
      className={cn('text-4xl font-bold', className)}
      role="region"
      aria-label="Typing simulator"
    >
      <span aria-live="polite">{displayText}</span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        aria-hidden="true"
      >
        {cursorStyle}
      </motion.span>
    </div>
  )
}
