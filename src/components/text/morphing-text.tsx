'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

import { motion } from 'motion/react'

export interface MorphingTextProps {
  /**
   * The text to be animated and morphed.
   * This is the main content that will undergo the letter-by-letter transformation.
   */
  text: string

  /**
   * Duration in milliseconds for each letter change during the animation.
   * A smaller number results in faster changes, while a larger number makes the animation slower.
   * @default 30
   */
  speed?: number

  /**
   * A custom set of characters used in the animation.
   * By default, it uses uppercase English letters ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').
   * You can provide a custom string (e.g., numbers, symbols, or any set of characters).
   * @default 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   */
  charSet?: string

  /**
   * The element type of the component
   * @default "div"
   */
  as?: React.ElementType
}

export function MorphingText({
  text,
  charSet,
  speed = 30,
  as: Component = 'div',
}: MorphingTextProps) {
  const MotionComponent = motion.create(Component)

  const [currentText, setCurrentText] = useState(text)
  const letters = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const iteration = useRef(0)
  const prevText = useRef(text) // Keep track of previous text to avoid unnecessary updates

  const morphText = useCallback(() => {
    iteration.current = 0

    intervalRef.current = setInterval(() => {
      setCurrentText((prev) => {
        const newText = prev
          .split('')
          .map((letter, index) => {
            if (index < iteration.current) return text[index]

            return letters[Math.floor(Math.random() * letters.length)]
          })
          .join('')

        // Only update if the new text differs from the previous text
        if (newText !== prev) return newText

        return prev
      })

      if (iteration.current >= text.length) {
        clearInterval(intervalRef.current as unknown as number)
      }

      iteration.current += 1 / 3
    }, speed)
  }, [text, speed, letters])

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    morphText()

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [morphText])

  useEffect(() => {
    prevText.current = text
  }, [text])

  return (
    <MotionComponent
      className="text-4xl font-bold text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {currentText}
    </MotionComponent>
  )
}
