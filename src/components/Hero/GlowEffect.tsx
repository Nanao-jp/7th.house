"use client"

import { motion } from 'framer-motion'

export const GlowEffect = () => {
  return (
    <motion.div 
      className="absolute -inset-20 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full -z-10"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
} 