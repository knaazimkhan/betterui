'use client'

import { useState } from 'react'

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

export interface NeonGlowTextProps {
  text: string
  glowColor?: string
  textColor?: string
  duration?: number
  blurRadius?: number
  spreadRadius?: number
}

export function NeonGlowText({
  text,
  glowColor = '#ff00de',
  textColor,
  duration = 1,
  blurRadius = 5,
  spreadRadius = 2,
}: NeonGlowTextProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const textShadow = [
    `0 0 ${blurRadius}px #fff, 0 0 ${blurRadius * 2}px #fff, 0 0 ${blurRadius * 3}px #fff, 0 0 ${blurRadius * 4}px ${glowColor}, 0 0 ${blurRadius * 7}px ${glowColor}, 0 0 ${blurRadius * 8}px ${glowColor}, 0 0 ${blurRadius * 10}px ${glowColor}, 0 0 ${blurRadius * 15}px ${glowColor}`,
    `0 0 ${spreadRadius}px #fff, 0 0 ${spreadRadius + 3}px #fff, 0 0 ${spreadRadius + 5}px #fff, 0 0 ${spreadRadius + 8}px ${glowColor}, 0 0 ${spreadRadius + 12}px ${glowColor}, 0 0 ${spreadRadius + 18}px ${glowColor}, 0 0 ${spreadRadius + 23}px ${glowColor}, 0 0 ${spreadRadius + 35}px ${glowColor}`,
  ]

  const hoverTextShadow = `0 0 ${blurRadius * 1.5}px #fff, 0 0 ${blurRadius * 2}px #fff, 0 0 ${blurRadius * 3}px #fff, 0 0 ${blurRadius * 5}px ${glowColor}, 0 0 ${blurRadius * 7}px ${glowColor}`

  return (
    <motion.div
      className={cn(
        'text-4xl font-bold text-gray-500 will-change-[text-shadow]',
        textColor
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        scale: isHovered ? 1.1 : 1,
        textShadow: isHovered ? hoverTextShadow : textShadow,
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'reverse',
      }}
    >
      {text}
    </motion.div>
  )
}
