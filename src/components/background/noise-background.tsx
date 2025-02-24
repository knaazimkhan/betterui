'use client'

import { useEffect, useState } from 'react'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface NoiseBackgroundProps {
  className?: string
}

export const NoiseBackground = ({ className }: NoiseBackgroundProps) => {
  const [cells, setCells] = useState<
    Array<{ id: number; opacity: number; duration: number }>
  >([])

  useEffect(() => {
    const newCells = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      opacity: Math.random(),
      duration: 0.5 + Math.random() * 2,
    }))
    setCells(newCells)
  }, [])

  return (
    <div
      className={cn(
        'absolute inset-0 grid grid-cols-10 bg-slate-900',
        className
      )}
    >
      {cells.map((cell) => (
        <motion.div
          key={cell.id}
          className="aspect-square bg-white"
          animate={{
            opacity: [cell.opacity, 1 - cell.opacity, cell.opacity],
          }}
          transition={{
            duration: cell.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
