'use client'

import React, { useState } from 'react'

import { motion, MotionProps } from 'motion/react'

import { cn } from '@/lib/utils'

export interface RippleButtonProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode
  className?: string
}

export function RippleButton({ children, className }: RippleButtonProps) {
  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number }[]
  >([])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - button.left
    const y = event.clientY - button.top

    setRipples([...ripples, { x, y, id: Date.now() }])
  }

  return (
    <motion.button
      className={cn(
        `relative h-9 overflow-hidden whitespace-nowrap rounded-md bg-primary px-4 py-2
        text-center text-sm font-medium text-primary-foreground shadow transition-colors`,
        className
      )}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white opacity-30"
          initial={{
            width: 0,
            height: 0,
            x: ripple.x,
            y: ripple.y,
            opacity: 0.5,
          }}
          animate={{
            width: 500,
            height: 500,
            x: ripple.x - 250,
            y: ripple.y - 250,
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={() =>
            setRipples(ripples.filter((r) => r.id !== ripple.id))
          }
        />
      ))}
      {children}
    </motion.button>
  )
}
