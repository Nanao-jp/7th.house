"use client"

import { motion } from 'framer-motion'

export const MainBorders = () => {
  return (
    <>
      <motion.div 
        className="absolute inset-x-8 -top-8 -bottom-8 border-2 border-blue-500/30 rounded-lg -skew-y-2"
        animate={{
          borderColor: ['rgba(59, 130, 246, 0.3)', 'rgba(168, 85, 247, 0.4)', 'rgba(236, 72, 153, 0.3)', 'rgba(59, 130, 246, 0.3)'],
          boxShadow: [
            '0 0 30px rgba(59, 130, 246, 0.2)',
            '0 0 40px rgba(168, 85, 247, 0.3)',
            '0 0 30px rgba(236, 72, 153, 0.2)',
            '0 0 30px rgba(59, 130, 246, 0.2)'
          ]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
          frameRate: 30
        }}
      />
      <motion.div 
        className="absolute inset-x-8 -top-8 -bottom-8 border-2 border-white/10 rounded-lg skew-y-2"
        animate={{
          borderColor: ['rgba(255, 255, 255, 0.1)', 'rgba(236, 72, 153, 0.2)', 'rgba(168, 85, 247, 0.2)', 'rgba(255, 255, 255, 0.1)'],
          boxShadow: [
            '0 0 30px rgba(255, 255, 255, 0.1)',
            '0 0 40px rgba(236, 72, 153, 0.2)',
            '0 0 40px rgba(168, 85, 247, 0.2)',
            '0 0 30px rgba(255, 255, 255, 0.1)'
          ]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
          frameRate: 30
        }}
      />
    </>
  )
}

export const ShiningEffect = () => {
  return (
    <div className="absolute -inset-12 rounded-lg overflow-hidden">
      {/* 上のボーダー */}
      <motion.div
        className="absolute top-0 left-[20%] h-[2px] bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 -rotate-2"
        animate={{
          width: ['0%', '40%', '0%'],
          left: ['20%', '40%', '80%'],
          opacity: [0, 0.5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2
        }}
      />
      {/* 下のボーダー */}
      <motion.div
        className="absolute bottom-0 right-[20%] h-[2px] bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-blue-500/50 rotate-2"
        animate={{
          width: ['0%', '40%', '0%'],
          right: ['20%', '40%', '80%'],
          opacity: [0, 0.5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
          repeatDelay: 2
        }}
      />
      
      {/* 角の光るポイント */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-blue-500/50 rounded-full animate-pulse transform -translate-y-[1px] -translate-x-[1px]" />
      <div className="absolute top-0 right-0 w-2 h-2 bg-purple-500/50 rounded-full animate-pulse transform -translate-y-[1px] translate-x-[1px]" />
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-pink-500/50 rounded-full animate-pulse transform translate-y-[1px] translate-x-[1px]" />
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-500/50 rounded-full animate-pulse transform translate-y-[1px] -translate-x-[1px]" />
    </div>
  )
} 