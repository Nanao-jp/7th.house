"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { navigationLinks } from '@/constants/navigation'
import Container from '@/components/ui/Container'
import { slideInFromTop } from '@/constants/animations'
import Logo from './Logo'
import HamburgerButton from './HamburgerButton'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && 
          menuRef.current && 
          buttonRef.current && 
          !menuRef.current.contains(event.target as Node) && 
          !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <Container className="py-4">
        <motion.div 
          variants={slideInFromTop}
          initial="initial"
          animate="animate"
          className="flex flex-col md:flex-row md:justify-between items-center relative"
        >
          <div ref={buttonRef}>
            <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
          </div>
          <Logo onClick={scrollToTop} />
          <DesktopMenu links={navigationLinks} />
          
          <AnimatePresence>
            {isOpen && (
              <div ref={menuRef}>
                <MobileMenu 
                  isOpen={isOpen} 
                  links={navigationLinks}
                />
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </Container>
    </nav>
  )
}

export default Navbar 