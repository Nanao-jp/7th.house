"use client"

import { motion } from 'framer-motion'

export const ShiningBorder = () => {
  return (
    <div className="absolute -inset-10 rounded-lg -skew-y-2 overflow-hidden">
      <motion.div
        className="absolute inset-0 border border-blue-500/30 rounded-lg"
        initial={{ boxShadow: '0 0 0 rgba(59, 130, 246, 0)' }}
        animate={{
          boxShadow: [
            '0 0 0 rgba(59, 130, 246, 0)',
            '0 0 20px rgba(59, 130, 246, 0.3)',
            '0 0 0 rgba(59, 130, 246, 0)'
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
          backgroundSize: '200% 100%'
        }}
        initial={{ backgroundPosition: '200% 0' }}
        animate={{
          backgroundPosition: ['200% 0', '-200% 0']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  )
} 