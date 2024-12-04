"use client"

import { motion } from 'framer-motion'

const CyberpunkEffect = () => {
  // アニメーション設定の共通化
  const baseTransition = {
    duration: 2,
    repeat: Infinity,
    ease: "linear",
    frameRate: 15
  }

  return (
    <div className="absolute -inset-4 md:-inset-6 rounded-lg overflow-hidden">
      {/* 上のボーダー */}
      <motion.div
        className="absolute top-0 left-[20%] h-[2px] bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 -rotate-2"
        animate={{
          width: ['0%', '30%', '0%'],
          left: ['20%', '50%', '80%'],
          opacity: [0, 1, 0]
        }}
        transition={baseTransition}
      />
      {/* 右のボーダー */}
      <motion.div
        className="absolute right-0 top-[20%] w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50 -rotate-2"
        animate={{
          height: ['0%', '30%', '0%'],
          top: ['20%', '50%', '80%'],
          opacity: [0, 1, 0]
        }}
        transition={{
          ...baseTransition,
          delay: 0.5
        }}
      />
      {/* 下のボーダー */}
      <motion.div
        className="absolute bottom-0 right-[20%] h-[2px] bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-blue-500/50 rotate-2"
        animate={{
          width: ['0%', '30%', '0%'],
          right: ['20%', '50%', '80%'],
          opacity: [0, 1, 0]
        }}
        transition={{
          ...baseTransition,
          delay: 1
        }}
      />
      {/* 左のボーダー */}
      <motion.div
        className="absolute left-0 bottom-[20%] w-[2px] bg-gradient-to-b from-pink-500/50 via-purple-500/50 to-blue-500/50 rotate-2"
        animate={{
          height: ['0%', '30%', '0%'],
          bottom: ['20%', '50%', '80%'],
          opacity: [0, 1, 0]
        }}
        transition={{
          ...baseTransition,
          delay: 1.5
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

export default CyberpunkEffect 