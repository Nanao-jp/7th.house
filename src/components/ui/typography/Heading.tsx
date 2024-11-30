import { createElement, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  variant?: 'primary' | 'secondary'
}

const styles = {
  primary: 'text-white',
  secondary: 'text-gray-200',
}

const sizes = {
  1: 'text-5xl md:text-6xl font-bold',
  2: 'text-4xl md:text-5xl font-bold',
  3: 'text-3xl md:text-4xl font-semibold',
  4: 'text-2xl md:text-3xl font-semibold',
  5: 'text-xl md:text-2xl font-medium',
  6: 'text-lg md:text-xl font-medium',
}

const Heading = ({ 
  level = 2, 
  variant = 'primary',
  className,
  children,
  ...props 
}: HeadingProps) => {
  return createElement(
    `h${level}`,
    {
      className: twMerge(sizes[level], styles[variant], className),
      ...props,
    },
    children
  )
}

export default Heading 