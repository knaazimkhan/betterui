'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface MatrixRainBackgroundProps {
  numColumns?: number
  numCharacters?: number
  minSpeed?: number
  maxSpeed?: number
  className?: string
}

const characterSets = [
  '日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ',
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  'abcde12345!@#$%',
]

export const MatrixRainBackground = ({
  numColumns = 30,
  numCharacters = 20,
  minSpeed = 0.5,
  maxSpeed = 2.0,
  className,
}: MatrixRainBackgroundProps) => {
  function getRandomCharacters(length = numCharacters) {
    const selectedSet =
      characterSets[Math.floor(Math.random() * characterSets.length)]
    return Array.from({ length }).map(
      () => selectedSet[Math.floor(Math.random() * selectedSet.length)]
    )
  }

  const columns = Array.from({ length: numColumns }).map((_, i) => ({
    id: i,
    chars: getRandomCharacters(),
    speed: minSpeed + Math.random() * (maxSpeed - minSpeed),
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
          className="absolute whitespace-pre p-2 text-green-500 text-opacity-50"
          style={{ left: `${(column.id / columns.length) * 100}%` }}
          animate={{
            y: ['0%', '100%'],
            opacity: [0, 1, 0],
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
