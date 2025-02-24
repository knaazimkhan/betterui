'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface KaleidoscopeBackgroundProps {
  className?: string
}

export const KaleidoscopeBackground = ({
  className,
}: KaleidoscopeBackgroundProps) => {
  const segments = 12
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD']

  return (
    <div className={cn('absolute inset-0 bg-black', className)}>
      {Array.from({ length: segments }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 origin-left"
          style={{
            width: '50%',
            height: '4px',
            backgroundColor: colors[i % colors.length],
            transform: `rotate(${(360 / segments) * i}deg)`,
          }}
          animate={{
            rotate: [
              `${(360 / segments) * i}deg`,
              `${(360 / segments) * i + 360}deg`,
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <motion.div
            className="absolute right-0 h-8 w-8 rounded-full"
            style={{ backgroundColor: colors[i % colors.length] }}
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}
