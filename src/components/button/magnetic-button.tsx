'use client'

import React, { useCallback, useState } from 'react'

import { motion, MotionProps } from 'motion/react'

import { cn } from '@/lib/utils'

export interface MagneticButtonProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode
  className?: string
}

export function MagneticButton({
  children,
  className,
  ...props
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget.getBoundingClientRect()
      const x = event.clientX - button.left - button.width / 2
      const y = event.clientY - button.top - button.height / 2
      setPosition({ x: x * 0.2, y: y * 0.2 })
    },
    []
  )

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 })

  return (
    <motion.button
      className={cn(
        `inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md
        bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow
        transition-colors hover:bg-primary/90`,
        className
      )}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
