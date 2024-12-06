import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const AnimatedTitle = () => {
  return (
    <motion.div 
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight relative text-center leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* モバイル用 */}
      <div className="block sm:hidden">
        <TypeAnimation
          sequence={[
            'AIが導く\n',
            1000,
            'AIが導く\n次世代のWeb開発'
          ]}
          wrapper="h1"
          speed={50}
          className="relative inline-block whitespace-pre-line"
          cursor={true}
          repeat={0}
        />
      </div>

      {/* PC用 */}
      <div className="hidden sm:block">
        <TypeAnimation
          sequence={[
            'AIが導く、',
            1000,
            'AIが導く、次世代のWeb開発'
          ]}
          wrapper="h1"
          speed={50}
          className="relative inline-block"
          cursor={true}
          repeat={0}
        />
      </div>

      <motion.span 
        className="absolute -bottom-2 left-0 w-full h-[1px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <span className="block w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
      </motion.span>
    </motion.div>
  )
}

export default AnimatedTitle 