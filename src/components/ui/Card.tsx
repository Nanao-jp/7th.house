"use client"

import { ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { slideInFromTop } from '@/constants/animations'

interface CardProps extends Omit<HTMLMotionProps<"div">, 'children'> {
  variant?: 'default' | 'feature' | 'tech' | 'interactive' | 'pricing'
  padding?: 'none' | 'small' | 'medium' | 'large'
  children?: ReactNode
  withHover?: boolean
  withBorder?: boolean
  blur?: boolean
}

const variants = {
  default: 'bg-gray-800/50',
  feature: 'bg-white/5',
  tech: 'bg-white/5',
  interactive: 'bg-white/5 hover:bg-white/10 cursor-pointer',
  pricing: 'bg-gray-800/50'
}

const paddings = {
  none: 'p-0',
  small: 'p-4',
  medium: 'p-6',
  large: 'p-8'
}

const Card = ({ 
  variant = 'default',
  padding = 'medium',
  className,
  children,
  withHover = false,
  withBorder = true,
  blur = true,
  ...props 
}: CardProps) => {
  return (
    <motion.div
      variants={slideInFromTop}
      initial="initial"
      animate="animate"
      className={twMerge(
        'rounded-lg',
        variants[variant],
        paddings[padding],
        withBorder && 'border border-white/10',
        blur && 'backdrop-blur-sm',
        withHover && 'transition-all duration-300 hover:bg-white/10',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card 