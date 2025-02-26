'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface FloatingShapesBackgroundProps {
  /**
   * Number of floating shapes to generate.
   * More shapes can create a denser effect, while fewer will be more subtle.
   * @default 20
   */
  numShapes?: number

  /**
   * Duration of the shape animation cycle in seconds.
   * Determines how long each shape takes to complete its movement loop.
   * A small random variation is added to avoid uniform motion.
   * @default 10
   */
  duration?: number

  /**
   * Easing function for the animation motion.
   * Controls how the shapes move over time.
   * Available options: `'linear' | 'easeIn' | 'easeOut' | 'easeInOut'`.
   * @default 'easeInOut'
   */
  easing?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut'

  /**
   * Additional CSS classes for styling the background container.
   * Can be used to override or extend default styles.
   */
  className?: string
}

interface Shape {
  id: string
  type: 'circle' | 'square' | 'triangle'
  size: number
  x: number
  y: number
  rotation: number
}

const shapeStyles: Record<Shape['type'], string> = {
  circle: 'rounded-full bg-white/10',
  square: 'rotate-45 bg-white/10',
  triangle: 'h-0 w-0 border-solid border-transparent border-b-white opacity-10',
}

export const FloatingShapesBackground = ({
  numShapes = 20,
  duration = 10,
  easing = 'easeInOut',
  className,
}: FloatingShapesBackgroundProps) => {
  const getRandomShape = () => {
    return ['circle', 'square', 'triangle'][
      Math.floor(Math.random() * 3)
    ] as Shape['type']
  }

  const shapes = Array.from({ length: numShapes }).map(() => ({
    id: crypto.randomUUID(),
    type: getRandomShape(),
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
  }))

  const getShapeSize = (shape: Shape) => {
    const baseStyle = { left: `${shape.x}%`, top: `${shape.y}%` }

    if (shape.type === 'triangle') {
      return {
        ...baseStyle,
        borderWidth: `${shape.size / 2}px`,
        borderBottomWidth: `${shape.size}px`,
      }
    }
    return {
      ...baseStyle,
      width: shape.size,
      height: shape.size,
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
          className={cn(
            'absolute will-change-transform',
            shapeStyles[shape.type]
          )}
          style={getShapeSize(shape)}
          animate={{
            rotate: [shape.rotation, shape.rotation + 360],
            y: [`${shape.y}%`, `${shape.y - 20}%`, `${shape.y}%`],
          }}
          transition={{
            duration: duration + Math.random() * 5,
            repeat: Infinity,
            ease: easing,
          }}
        />
      ))}
    </div>
  )
}
