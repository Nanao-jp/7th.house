"use client"

import { motion } from 'framer-motion'

export const Subtitle = () => {
  return (
    <motion.p 
      className="text-xl sm:text-2xl md:text-4xl text-white font-light tracking-widest mb-8 sm:mb-12 font-[family-name:var(--font-space-grotesk)] relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <span className="relative inline-block whitespace-nowrap">
        7th.House
        <motion.span 
          className="absolute -left-4 -right-4 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-y-1/2"
          animate={{
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </span>
    </motion.p>
  )
} 