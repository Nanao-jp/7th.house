"use client"

import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps {
  variant?: 'default' | 'feature' | 'tech' | 'interactive' | 'pricing'
  padding?: 'none' | 'small' | 'medium' | 'large'
  children?: ReactNode
  withHover?: boolean
  withBorder?: boolean
  blur?: boolean
  className?: string
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
  withHover = false,
  withBorder = true,
  blur = true,
  className,
  children,
}: CardProps) => {
  return (
    <div 
      className={twMerge(
        'rounded-lg',
        variants[variant],
        paddings[padding],
        withBorder && 'border border-white/10',
        blur && 'backdrop-blur-sm',
        withHover && 'transition-transform duration-300 hover:scale-[1.02]',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card 