"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { navigationLinks } from '@/constants/navigation'
import Container from '@/components/ui/Container'
import { slideInFromTop } from '@/constants/animations'
import Logo from './Logo'
import HamburgerButton from './HamburgerButton'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

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
          <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
          <Logo onClick={scrollToTop} />
          <DesktopMenu links={navigationLinks} />
          
          <AnimatePresence>
            <MobileMenu 
              isOpen={isOpen} 
              links={navigationLinks} 
              onLinkClick={() => setIsOpen(false)} 
            />
          </AnimatePresence>
        </motion.div>
      </Container>
    </nav>
  )
}

export default Navbar 