'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

// クライアントサイドでのみ読み込むようにする
const ParticleEffect = dynamic(() => import('./ParticleEffect'), {
  ssr: false
})

const DesignAccents = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* グラデーションウェーブ */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-l from-blue-600/10 to-purple-600/10"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* 幾何学パターン */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
          animate={{
            x: [-10, 10, -10],
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* パーティクル - クライアントサイドでのみレンダリング */}
      {isMounted && <ParticleEffect />}

      {/* 抽象的な曲線 */}
      <svg
        className="absolute right-0 bottom-0 w-64 h-64 opacity-20"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10,50 Q30,20 50,50 T90,50"
          stroke="url(#gradient)"
          strokeWidth="0.5"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default DesignAccents 