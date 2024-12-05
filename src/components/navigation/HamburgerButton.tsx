"use client"

interface HamburgerButtonProps {
  isOpen: boolean
  onClick: () => void
}

const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 p-2 md:hidden"
      aria-label="メインメニュー"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <div className="w-6 h-5 relative">
        <span className={`absolute w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'top-2 rotate-45' : 'top-0'}`} />
        <span className={`absolute w-full h-0.5 bg-white top-2 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`absolute w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
      </div>
    </button>
  )
}

export default HamburgerButton 