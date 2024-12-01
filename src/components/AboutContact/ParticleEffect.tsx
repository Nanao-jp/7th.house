'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const PARTICLE_POSITIONS = [
  { left: 20, top: 30 },
  { left: 80, top: 20 },
  { left: 40, top: 70 },
  { left: 60, top: 40 },
  { left: 30, top: 80 },
  { left: 70, top: 60 },
  { left: 50, top: 50 },
  { left: 90, top: 30 }
]

const ParticleEffect = () => {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!particlesRef.current) return
      const particles = particlesRef.current.children
      const mouseX = e.clientX
      const mouseY = e.clientY

      Array.from(particles).forEach((particle, i) => {
        const elem = particle as HTMLElement
        const speed = 0.1 - (i * 0.01)
        const x = (mouseX - window.innerWidth / 2) * speed
        const y = (mouseY - window.innerHeight / 2) * speed
        elem.style.transform = `translate(${x}px, ${y}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={particlesRef} className="absolute inset-0">
      {PARTICLE_POSITIONS.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/30 blur-sm"
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

export default ParticleEffect 