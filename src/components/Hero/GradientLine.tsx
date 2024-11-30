"use client"

interface GradientLineProps {
  color?: 'blue' | 'white'
  className?: string
}

export const GradientLine = ({ color = 'blue', className = '' }: GradientLineProps) => {
  const gradientColor = color === 'blue' ? 'via-blue-500' : 'via-white/30'
  
  return (
    <div 
      className={`absolute h-[1px] bg-gradient-to-r from-transparent ${gradientColor} to-transparent ${className}`}
      aria-hidden="true"
    />
  )
} 