'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface FloatingShapesBackgroundProps {
  className?: string
}

interface Shape {
  id: number
  type: string
  size: number
  x: number
  y: number
  rotation: number
}

export const FloatingShapesBackground = ({
  className,
}: FloatingShapesBackgroundProps) => {
  const shapes = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
  }))

  const getShapeStyle = (shape: Shape) => {
    switch (shape.type) {
      case 'circle':
        return 'rounded-full'
      case 'square':
        return 'rotate-45'
      case 'triangle':
        return 'triangle'
      default:
        return ''
    }
  }
  return (
    <div
      className={cn(
        'absolute inset-0 overflow-hidden bg-indigo-900',
        className
      )}
    >
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute bg-white/10 ${getShapeStyle(shape)}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            rotate: [shape.rotation, shape.rotation + 360],
            y: [`${shape.y}%`, `${shape.y - 20}%`, `${shape.y}%`],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
