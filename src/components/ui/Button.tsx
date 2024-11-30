"use client"

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { hoverScale, transition } from '@/constants/animations'

interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient'
  children?: ReactNode
  href?: string
}

const variantStyles = {
  primary: 'px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg',
  secondary: 'px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg',
  outline: 'px-6 py-2 border-2 border-white/20 hover:bg-white/10 text-white rounded-lg',
  gradient: 'relative text-white overflow-hidden group rounded-full'
}

const Button = ({ 
  children, 
  className, 
  variant = 'primary',
  href,
  ...props 
}: ButtonProps) => {
  const Component = href ? motion.a : motion.button
  
  return (
    <Component
      href={href}
      variants={hoverScale}
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      transition={transition}
      className={twMerge(
        'font-medium transition-colors inline-flex items-center justify-center',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {variant === 'gradient' ? (
        <>
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
          />
          
          {/* サブトルなグロー */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-0 bg-gradient-to-r from-blue-400/30 via-purple-400/35 to-purple-400/30 blur-lg group-hover:opacity-100"
            transition={{ duration: 0.2 }}
          />

          {/* シャイニングエフェクト */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%]"
              transition={{ duration: 0.7, ease: "easeInOut" }}
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
        </>
      ) : null}
      
      <span className="relative flex items-center gap-2">
        {children}
      </span>
    </Component>
  )
}

export default Button 