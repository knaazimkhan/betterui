'use client'

import { useCallback, useEffect } from 'react'

import { motion, useAnimation } from 'framer-motion'

import { cn } from '@/lib/utils'

export interface PerspectiveTextProps {
  /**
   * The text content to be displayed with the perspective effect.
   */
  text: string

  /**
   * Additional CSS class names for styling the component.
   * This allows customization using Tailwind or custom styles.
   */
  className?: string

  /**
   * The speed (in seconds) of the continuous Y-axis rotation.
   * @default 4
   */
  rotationSpeed?: number

  /**
   * Determines whether the continuous rotation should be reversed.
   * If `true`, the text will rotate counterclockwise instead of clockwise.
   * @default false
   */
  reverseRotation?: boolean
}

export function PerspectiveText({
  text,
  className,
  rotationSpeed = 4,
  reverseRotation = true,
}: PerspectiveTextProps) {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      rotateY: reverseRotation ? -360 : 360,
      transition: {
        duration: rotationSpeed,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'linear',
      },
    })
  }, [controls, rotationSpeed, reverseRotation])

  const handleMouseEnter = () => {
    controls.stop()
  }

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const { clientX, clientY, currentTarget } = event
      const { left, top, width, height } = currentTarget.getBoundingClientRect()
      const x = (clientX - left) / width
      const y = (clientY - top) / height

      controls.start({
        rotateX: 20 - y * 40,
        rotateY: -20 + x * 40,
        textShadow: `${(x - 0.5) * 20}px ${(y - 0.5) * 20}px 10px rgba(0,0,0,0.3)`,
        transition: { type: 'spring', stiffness: 300, damping: 30 },
      })
    },
    [controls]
  )

  const handleMouseLeave = () => {
    controls.start({
      rotateX: 5,
      rotateY: 5,
      textShadow: '0px 0px 5px rgba(0,0,0,0.2)',
      transition: { duration: 1, ease: 'easeOut' },
    })

    setTimeout(() => {
      controls.start({
        rotateY: reverseRotation ? -360 : 360,
        transition: {
          duration: rotationSpeed,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        },
      })
    }, 500)
  }

  return (
    <div
      className={cn('cursor-pointer text-4xl font-bold text-white', className)}
      style={{ perspective: '1000px' }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={text}
    >
      <motion.div
        animate={controls}
        initial={{ rotateX: 0, rotateY: 0 }}
        whileHover={{ scale: 1.1 }}
      >
        {text}
      </motion.div>
    </div>
  )
}
