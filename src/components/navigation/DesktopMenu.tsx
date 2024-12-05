"use client"

import { motion } from 'framer-motion'
import type { NavigationLink, NavigationLinks } from '@/types/navigation'
import { hoverLift } from '@/constants/animations'

interface DesktopMenuProps {
  links: NavigationLinks
}

const DesktopMenu = ({ links }: DesktopMenuProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (href === '#contact') {
      const element = document.querySelector('#contact-title')
      if (element) {
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    } else {
      const element = document.querySelector(href)
      if (element) {
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <div className="hidden md:flex space-x-8">
      {links.map((link: NavigationLink) => (
        <motion.div
          key={link.label}
          className="relative group"
          variants={hoverLift}
          whileHover="hover"
        >
          <motion.div
            className="absolute -inset-x-2 -inset-y-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{
              background: [
                'radial-gradient(100% 100% at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 100%)',
                'radial-gradient(100% 100% at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 100%)',
                'radial-gradient(100% 100% at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 100%)'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.a
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="relative text-white font-[family-name:var(--font-orbitron)] tracking-wide text-sm uppercase"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="relative">
              {link.label}
              <motion.span 
                className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.span 
                className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </span>
          </motion.a>
        </motion.div>
      ))}
    </div>
  )
}

export default DesktopMenu 