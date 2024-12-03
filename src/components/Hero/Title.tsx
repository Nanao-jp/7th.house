"use client"

import { motion } from 'framer-motion'

export const Title = () => {
  return (
    <motion.h1 
      className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 font-[family-name:var(--font-mplus)] tracking-tight relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <span className="relative whitespace-nowrap">
        AIと作り上げる
        <motion.span 
          className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            frameRate: 30
          }}
        />
      </span>
      <br className="sm:hidden" />
      <span className="relative whitespace-nowrap">
        未来
      </span>
    </motion.h1>
  )
} 