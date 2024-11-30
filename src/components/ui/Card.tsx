"use client"

import { HTMLAttributes, ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { fadeIn } from '@/constants/animations'

interface CardProps extends Omit<HTMLMotionProps<"div">, 'children'> {
  variant?: 'default' | 'hover' | 'interactive'
  padding?: 'none' | 'small' | 'medium' | 'large'
  children?: ReactNode
}

const variants = {
  default: 'bg-gray-800/50 border border-gray-700',
  hover: 'bg-gray-800/50 border border-gray-700 hover:border-gray-600 transition-colors',
  interactive: 'bg-gray-800/50 border border-gray-700 hover:border-blue-500 hover:bg-gray-800/80 transition-all cursor-pointer',
}

const paddings = {
  none: 'p-0',
  small: 'p-4',
  medium: 'p-6',
  large: 'p-8',
}

const Card = ({ 
  variant = 'default',
  padding = 'medium',
  className,
  children,
  ...props 
}: CardProps) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className={twMerge(
        'rounded-lg backdrop-blur-sm',
        variants[variant],
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card 