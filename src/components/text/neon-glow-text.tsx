'use client'

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

export interface NeonGlowTextProps {
  text: string
  glowColor?: string
  textColor?: string
  duration?: number
}

export function NeonGlowText({
  text,
  glowColor = '#ff00de',
  textColor = 'white',
  duration = 1,
}: NeonGlowTextProps) {
  return (
    <motion.div
      className={cn(
        'text-4xl font-bold text-white will-change-[text-shadow]',
        textColor
      )}
      animate={{
        textShadow: [
          `0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px ${glowColor}, 0 0 35px ${glowColor}, 0 0 40px ${glowColor}, 0 0 50px ${glowColor}, 0 0 75px ${glowColor}`,
          `0 0 2px #fff, 0 0 5px #fff, 0 0 7px #fff, 0 0 10px ${glowColor}, 0 0 17px ${glowColor}, 0 0 20px ${glowColor}, 0 0 25px ${glowColor}, 0 0 37px ${glowColor}`,
        ],
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
