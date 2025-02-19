'use client'

import { useState, useEffect, useRef } from 'react'

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

export interface ExplosionTextProps {
  /** The text that will be animated with the explosion effect */
  text: string

  /**
   * The duration of the explosion animation for each character
   * @default 0.5
   */
  duration?: number

  /**
   * The color of the explosion effect
   * @default '#ff0000'
   */
  explosionColor?: string

  /**
   * The direction in which the characters explode ('top', 'bottom', 'left', 'right')
   * @default 'top'
   */
  direction?: 'top' | 'bottom' | 'left' | 'right'

  /**
   * The delay before resetting the explosion state after the animation completes
   * @default 1000
   */
  resetDelay?: number

  /** Additional custom CSS classes to apply to the container element */
  className?: string
}

export function ExplosionText({
  text,
  duration = 0.5,
  explosionColor = '#ff0000',
  direction = 'top',
  resetDelay = 1000,
  className,
}: ExplosionTextProps) {
  const [exploded, setExploded] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const handleClick = () => {
    setExploded(true)
    setCurrentIndex(0)

    // Clear previous interval
    if (intervalRef.current) clearTimeout(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= text.length - 1) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          setTimeout(() => setExploded(false), resetDelay)
        }
        return prevIndex + 1
      })
    }, 50)
  }

  useEffect(() => {
    // Cleanup interval on unmount to prevent memory leaks
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <div
      className={cn('cursor-pointer text-4xl font-bold', className)}
      onClick={handleClick}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          animate={
            exploded && index < currentIndex
              ? {
                  y: [
                    0,
                    direction === 'top' ? -50 : direction === 'bottom' ? 50 : 0,
                  ],
                  x: [
                    0,
                    direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
                  ],
                  opacity: [1, 0],
                  scale: [1, Math.random() * 0.5 + 0.5],
                  color: explosionColor,
                }
              : {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }
          }
          transition={{
            duration: duration,
            delay: index * 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}
