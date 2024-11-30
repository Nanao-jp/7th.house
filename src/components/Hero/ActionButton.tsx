"use client"

import { motion } from 'framer-motion'

const ActionButton = () => {
  return (
    <motion.a 
      href="#demonstration"
      className="relative inline-block px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-medium text-white overflow-hidden rounded-full group"
      whileHover="hover"
      whileTap="tap"
      initial="initial"
    >
      {/* メインの背景グラデーション */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500/95 to-purple-600/95 rounded-full"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: "200% 100%"
        }}
        variants={{
          hover: {
            scale: 1.05,
            rotate: 1,
          },
          tap: {
            scale: 0.98,
          }
        }}
      />
      
      {/* サブトルなグロー */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 bg-gradient-to-r from-blue-400/30 via-purple-400/35 to-purple-400/30 blur-lg"
        variants={{
          hover: {
            opacity: 1,
            transition: { duration: 0.2 }
          }
        }}
      />

      {/* シャイニングエフェクト */}
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden"
        variants={{
          initial: {
            opacity: 0,
          },
          hover: {
            opacity: 1,
            transition: { duration: 0.2 }
          }
        }}
      >
        <motion.div
          className="absolute inset-0 translate-x-[-100%]"
          variants={{
            hover: {
              translateX: "100%",
              transition: { duration: 0.7, ease: "easeInOut" }
            }
          }}
          style={{
            backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            backgroundSize: "50% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 50%"
          }}
        />
      </motion.div>

      {/* 常時アニメーションのボーダー */}
      <motion.div 
        className="absolute inset-0 rounded-full"
        style={{
          border: "1px solid rgba(255,255,255,0.1)"
        }}
      >
        <motion.div
          className="absolute inset-[-1px] rounded-full border border-white/20"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.15, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* テキストとアイコン */}
      <motion.div
        className="relative flex items-center gap-2"
        variants={{
          hover: {
            x: 2,
            transition: { duration: 0.2 }
          },
          tap: {
            scale: 0.98
          }
        }}
      >
        <span>AIの実力を体験する</span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          variants={{
            hover: {
              x: 2,
              transition: { duration: 0.2 }
            }
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </motion.svg>
      </motion.div>
    </motion.a>
  )
}

export default ActionButton 