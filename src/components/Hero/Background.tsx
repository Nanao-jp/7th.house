"use client"

import { motion } from 'framer-motion'

const Background = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* オーバーレイグラデーション */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/50 to-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* 浮遊する要素（より控えめに） */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-overlay filter blur-3xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            frameRate: 15
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-overlay filter blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
            frameRate: 15
          }}
        />
      </div>

      {/* 下部のグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  )
}

export default Background 