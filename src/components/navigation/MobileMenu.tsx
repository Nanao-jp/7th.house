"use client"

import { motion } from 'framer-motion'
import { hoverLift } from '@/constants/animations'
import type { NavigationLink, NavigationLinks } from '@/types/navigation'

interface MobileMenuProps {
  isOpen: boolean
  links: NavigationLinks
  onLinkClick?: () => void
}

const MobileMenu = ({ isOpen, links, onLinkClick }: MobileMenuProps) => {
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
    isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full md:hidden overflow-hidden"
      >
        <motion.div 
          className="flex flex-col items-center space-y-6 py-6 mt-4 border-t border-white/10 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          {links.map((link: NavigationLink, index: number) => (
            <motion.div
              key={link.label}
              className="relative group w-full text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <motion.div
                className="absolute -inset-x-4 -inset-y-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
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
                className="relative text-white font-[family-name:var(--font-orbitron)] tracking-wide text-lg uppercase inline-block"
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
        </motion.div>
      </motion.div>
    )
  )
}

export default MobileMenu 