'use client'

import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

export interface LiquidTextProps {
  /**
   * The text content to be displayed inside the animated div.
   * This will be rendered as the primary text inside the liquid effect.
   */
  text: string

  /**
   * Optional additional classes that can be passed to customize the styling
   * of the component. This allows for further customization beyond the base styles.
   */
  className?: string

  /**
   * The element type of the component
   * @default "div"
   */
  as?: React.ElementType
}

const animationVariants = {
  animate: {
    borderRadius: ['20% 80% 20% 80%', '80% 20% 80% 20%', '20% 80% 20% 80%'],
    boxShadow: [
      '0 0 10px rgba(0, 0, 0, 0.2)',
      '0 0 20px rgba(0, 0, 0, 0.4)',
      '0 0 10px rgba(0, 0, 0, 0.2)',
    ],
    scale: [1, 1.05, 1], // A subtle scaling effect for more emphasis
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

export function LiquidText({
  text,
  className,
  as: Component = 'div',
}: LiquidTextProps) {
  const MotionComponent = motion.create(Component)

  return (
    <MotionComponent
      className={cn(
        `w-44 overflow-hidden rounded p-6 text-4xl font-bold text-white shadow-lg
        will-change-transform`,
        className
      )}
      variants={animationVariants}
      animate="animate"
      transition={animationVariants.transition}
    >
      {text}
    </MotionComponent>
  )
}
