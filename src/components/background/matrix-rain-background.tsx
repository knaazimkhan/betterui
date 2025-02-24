'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface MatrixRainBackgroundProps {
  className?: string
}

export const MatrixRainBackground = ({
  className,
}: MatrixRainBackgroundProps) => {
  const characters = '日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ'

  const columns = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    chars: Array.from({ length: 20 }).map(
      () => characters[Math.floor(Math.random() * characters.length)]
    ),
    speed: 0.5 + Math.random() * 1.5,
  }))

  return (
    <div
      className={cn(
        'absolute inset-0 overflow-hidden bg-black font-mono',
        className
      )}
    >
      {columns.map((column) => (
        <motion.div
          key={column.id}
          className="absolute whitespace-pre text-green-500 text-opacity-50"
          style={{ left: `${(column.id / columns.length) * 100}%` }}
          animate={{
            y: ['0%', '100%'],
          }}
          transition={{
            duration: column.speed * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {column.chars.join('\n')}
        </motion.div>
      ))}
    </div>
  )
}
