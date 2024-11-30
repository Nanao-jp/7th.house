import { motion } from 'framer-motion'

const MainContent = () => {
  return (
    <div className="relative rounded-lg p-10 backdrop-blur-[2px] bg-white/[0.02] flex flex-col justify-center items-center gap-8 md:gap-12 lg:gap-16">
      <motion.h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-[family-name:var(--font-mplus)] tracking-tight relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="relative">
          AIと作り上げる未来
          <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
        </span>
      </motion.h1>
      
      <motion.p 
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-light tracking-widest font-[family-name:var(--font-space-grotesk)] relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <span className="relative inline-block">
          7th.House
          <span className="absolute -left-4 -right-4 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-y-1/2" />
        </span>
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative z-10"
      >
        <a 
          href="#projects"
          className="inline-block bg-blue-500 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 rounded-full hover:bg-blue-600 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 font-[family-name:var(--font-space-grotesk)] text-base sm:text-lg md:text-xl lg:text-2xl"
        >
          View Projects
        </a>
      </motion.div>
    </div>
  )
}

export default MainContent 