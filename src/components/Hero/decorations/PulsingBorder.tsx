"use client"

import { motion } from 'framer-motion'

export const PulsingBorder = () => {
  return (
    <motion.div 
      className="absolute -inset-4 md:-inset-6 border border-white/10 rounded-lg skew-y-2"
      initial={{ opacity: 0.5 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.02, 1],
        boxShadow: [
          '0 0 0 rgba(255, 255, 255, 0)',
          '0 0 10px rgba(255, 255, 255, 0.1)',
          '0 0 0 rgba(255, 255, 255, 0)'
        ]
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity, 
        ease: 'easeInOut',
      }}
      aria-hidden="true"
    />
  )
} 