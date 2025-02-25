'use client'

import { useEffect, useState } from 'react'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface ConstellationBackgroundProps {
  pointCount?: number
  pointColor?: string
  pointSize?: number
  lineColor?: string
  lineSize?: number
  duration?: number
  className?: string
}

interface Point {
  id: number
  x: number
  y: number
}

interface Line {
  id: string
  start: Point
  end: Point
}

export const ConstellationBackground = ({
  pointCount = 20,
  pointColor = 'bg-blue-500',
  pointSize = 8,
  lineColor = 'bg-blue-500/20',
  lineSize = 1,
  duration = 2,
  className,
}: ConstellationBackgroundProps) => {
  const [points, setPoints] = useState<Point[]>([])
  const [lines, setLines] = useState<Line[]>([])

  useEffect(() => {
    const newPoints = Array.from({ length: pointCount }).map(() => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))

    const newLines: Line[] = []

    newPoints.forEach((point, i) => {
      newPoints.slice(i + 1).forEach((otherPoint) => {
        const distance = Math.hypot(
          point.x - otherPoint.x,
          point.y - otherPoint.y
        )
        if (distance < 30) {
          newLines.push({
            id: `${point.id}-${otherPoint.id}`,
            start: point,
            end: otherPoint,
          })
        }
      })
    })

    setPoints(newPoints)
    setLines(newLines)
  }, [pointCount])

  return (
    <div
      className={cn('absolute inset-0 bg-slate-900', className)}
      role="img"
      aria-label="Constellation Background"
    >
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className={cn('absolute', lineColor)}
          style={{
            left: `${line.start.x}%`,
            top: `${line.start.y}%`,
            width: `${Math.hypot(line.start.x - line.end.x, line.start.y - line.end.y)}%`,
            height: `${lineSize}px`,
            transformOrigin: '0 0',
            transform: `rotate(${Math.atan2(line.end.y - line.start.y, line.end.x - line.start.x)}rad)`,
          }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration, repeat: Infinity }}
        />
      ))}
      {points.map((point) => (
        <motion.div
          key={point.id}
          className={cn('absolute rounded-full', pointColor)}
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            height: `${pointSize}px`,
            width: `${pointSize}px`,
          }}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration, repeat: Infinity }}
        />
      ))}
    </div>
  )
}
