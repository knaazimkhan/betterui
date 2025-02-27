'use client'

import { useEffect, useState } from 'react'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface MovingDotsBackgroundProps {
  numDots?: number
  className?: string
}

interface Dot {
  id: string
  x: number
  y: number
  size: number
}

export const MovingDotsBackground = ({
  numDots = 50,
  className,
}: MovingDotsBackgroundProps) => {
  const [dots, setDots] = useState<Dot[]>([])

  useEffect(() => {
    const newDots = Array.from({ length: numDots }).map(() => ({
      id: crypto.randomUUID(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
    }))
    setDots(newDots)
  }, [numDots])

  return (
    <div
      className={cn('absolute inset-0 overflow-hidden bg-slate-900', className)}
    >
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-white/20"
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
          animate={{
            x: [-20, 20, -20],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
