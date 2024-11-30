"use client"

import { motion } from 'framer-motion'

const particles = [
  { top: '20%', left: '10%' },
  { bottom: '30%', right: '20%' },
  { top: '40%', right: '10%' },
  { bottom: '20%', left: '15%' },
  { top: '60%', left: '50%' },
  { bottom: '40%', right: '40%' },
]

export const LightParticles = () => {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 3 }}
      aria-hidden="true"
    >
      {particles.map((position, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-blue-400/40 rounded-full blur-sm"
          style={position}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.5,
          }}
        />
      ))}
    </motion.div>
  )
} 