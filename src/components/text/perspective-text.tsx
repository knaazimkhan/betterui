'use client'

import { useEffect } from 'react'

import { motion, useAnimation } from 'framer-motion'

import { cn } from '@/lib/utils'
export interface PerspectiveTextProps {
  text: string
  className?: string
  rotationSpeed?: number
}

export function PerspectiveText({
  text,
  className,
  rotationSpeed = 4,
}: PerspectiveTextProps) {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      rotateY: 360,
      transition: {
        duration: rotationSpeed,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'linear',
      },
    })
  }, [controls, rotationSpeed])

  const handleMouseEnter = () => {
    controls.stop()
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const x = (clientX - left) / width
    const y = (clientY - top) / height
    controls.start({
      rotateX: 20 - y * 40,
      rotateY: -20 + x * 40,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    })
  }

  const handleMouseLeave = () => {
    controls.start({
      rotateX: 0,
      rotateY: 360,
      transition: {
        rotateX: { type: 'spring', stiffness: 300, damping: 30 },
        rotateY: {
          duration: rotationSpeed,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        },
      },
    })
  }

  return (
    <div
      className={cn('cursor-pointer text-4xl font-bold', className)}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // role="heading"
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
