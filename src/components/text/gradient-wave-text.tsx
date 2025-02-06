'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface GradientWaveTextProps {
  text: string
  fromColor?: string
  viaColor?: string
  toColor?: string
  direction?: 'to-r' | 'to-b' | 'to-br'
  duration?: number
  hoverEffect?: boolean
}

export default function GradientWaveText({
  text,
  fromColor = 'purple-500',
  viaColor = 'pink-500',
  toColor = 'red-500',
  direction = 'to-r',
  duration = 5,
  hoverEffect = false,
}: GradientWaveTextProps) {
  const [isHovered, setIsHovered] = useState(false)

  const gradientClass = `bg-gradient-${direction} from-${fromColor} via-${viaColor} to-${toColor} bg-clip-text text-transparent`

  const gradientStyle = {
    backgroundImage: `linear-gradient(${direction === 'to-r' ? 'to right' : direction === 'to-b' ? 'to bottom' : 'to bottom right'}, var(--tw-color-${fromColor}), var(--tw-color-${viaColor}), var(--tw-color-${toColor}))`,
    backgroundSize: '200% 200%',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
  }

  const animationProps =
    direction === 'to-b'
      ? { backgroundPosition: ['50% 0%', '50% 100%', '50% 0%'] }
      : { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }

  return (
    <motion.div
      // className={`p-4 text-4xl font-bold ${gradientClass} cursor-pointer rounded bg-clip-text text-transparent`}
      className="cursor-pointer rounded p-4 text-4xl font-bold"
      style={gradientStyle}
      animate={animationProps}
      transition={{
        duration: isHovered && hoverEffect ? duration / 2 : duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'linear',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </motion.div>
  )
}
