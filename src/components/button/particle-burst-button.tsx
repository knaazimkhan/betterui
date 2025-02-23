'use client'

import React, { useState } from 'react'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface ParticleBurstButtonProps {
  children: React.ReactNode
  className?: string
}

export function ParticleBurstButton({
  children,
  className,
}: ParticleBurstButtonProps) {
  const [particles, setParticles] = useState<
    Array<{ id: number; angle: number }>
  >([])

  const createParticles = () => {
    const newParticles = Array.from({ length: 10 }).map((_, i) => ({
      id: Date.now() + i,
      angle: i * 36 * (Math.PI / 180),
    }))
    setParticles([...particles, ...newParticles])
  }

  return (
    <div className="relative">
      <motion.button
        className={cn(
          `inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md
          bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow
          transition-colors`,
          className
        )}
        whileTap={{ scale: 0.95 }}
        onClick={createParticles}
      >
        {children}
      </motion.button>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-fuchsia-300"
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={{
            scale: 0,
            x: Math.cos(particle.angle) * 100,
            y: Math.sin(particle.angle) * 100,
          }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={() => {
            setParticles(particles.filter((p) => p.id !== particle.id))
          }}
        />
      ))}
    </div>
  )
}
