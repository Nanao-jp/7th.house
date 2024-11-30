"use client"

interface GradientBackgroundProps {
  mousePosition: { x: number; y: number }
}

const GradientBackground = ({ mousePosition }: GradientBackgroundProps) => {
  return (
    <div 
      className="fixed inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/80 to-black/80"
      style={{
        backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
        transition: 'background-position 0.3s ease-out',
      }}
    />
  )
}

export default GradientBackground 