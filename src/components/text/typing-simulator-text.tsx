'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
export interface TypingSimulatorTextProps {
  /**
   * Text to be animate.
   */
  text: string | string[]
  /**
   * Allows to adjust how fast the text is type.
   * @defaultValue 100
   */
  typingSpeed?: number
  /**
   * Allows to adjust how fast the text is delete.
   * @defaultValue 50
   */
  deletingSpeed?: number
  /**
   * Pause before start deleting.
   * @defaultValue 1500
   */
  pauseTime?: number
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
  deletingSpeed = 50,
  pauseTime = 1500,
  cursorStyle = '|',
  loop = false,
  className,
}: TypingSimulatorTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isBlinking, setIsBlinking] = useState(true) // Track cursor state

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const texts = useMemo(
    () => (Array.isArray(text) ? text : [text]), // Normalize input
    [text]
  )

  const updateText = useCallback(() => {
    if (!loop && textIndex >= texts.length) return // Stop when done (if loop is false)

    const currentText = texts[textIndex]

    // Typing completed -> Pause before deleting
    if (!isDeleting && displayText === currentText) {
      // Pause before deleting
      if (loop || textIndex < texts.length - 1) {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true)
          setIsBlinking(false) // Keep cursor steady while deleting
        }, pauseTime)
      }
      setIsBlinking(true) // Start blinking when idle
      return
    }

    // Deletion completed -> Move to next text
    if (isDeleting && displayText === '') {
      // Move to next word or stop if loop is false
      if (!loop && textIndex === texts.length - 1) return
      setIsDeleting(false)
      setTextIndex((prev) => (prev + 1) % texts.length)
      setIsBlinking(false) // Keep cursor steady while typing
      return
    }

    // Typing or deleting character-by-character
    const delta = isDeleting ? -1 : 1
    timeoutRef.current = setTimeout(
      () => {
        setDisplayText(currentText.substring(0, displayText.length + delta))
        setIsBlinking(false) // Cursor steady while typing/deleting
      },
      isDeleting ? deletingSpeed : typingSpeed
    )
  }, [
    deletingSpeed,
    displayText,
    isDeleting,
    loop,
    pauseTime,
    textIndex,
    texts,
    typingSpeed,
  ])

  useEffect(() => {
    // Clear previous timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(
      updateText,
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [updateText, isDeleting, deletingSpeed, typingSpeed])

  return (
    <div
      className={cn('text-4xl font-bold', className)}
      role="region"
      aria-label="Typing simulator"
    >
      <span aria-live="polite">{displayText}</span>
      <motion.span
        animate={{ opacity: isBlinking ? [1, 0, 1] : 1 }} // Blinks only if when idle
        transition={{ duration: 0.8, repeat: isBlinking ? Infinity : 0 }} // No blinking when typing
        className="ml-0.5 text-white"
        aria-hidden="true"
      >
        {cursorStyle}
      </motion.span>
    </div>
  )
}
