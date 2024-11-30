import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'base' | 'lg'
  weight?: 'normal' | 'medium' | 'semibold'
}

const variants = {
  primary: 'text-white',
  secondary: 'text-gray-300',
  accent: 'text-blue-400',
}

const sizes = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
}

const weights = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
}

const Text = ({ 
  variant = 'primary',
  size = 'base',
  weight = 'normal',
  className,
  children,
  ...props 
}: TextProps) => {
  return (
    <p 
      className={twMerge(
        variants[variant],
        sizes[size],
        weights[weight],
        'leading-relaxed',
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

export default Text 