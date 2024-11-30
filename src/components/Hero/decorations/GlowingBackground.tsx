"use client"

import { motion } from 'framer-motion'

export const GlowingBackground = () => {
  return (
    <motion.div 
      className="absolute -inset-10 bg-blue-500/20 blur-3xl rounded-full -z-10"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    />
  )
} 