import { motion } from 'framer-motion'

export const ActionButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="relative z-10"
    >
      <motion.a 
        href="#projects"
        className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span 
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-sm opacity-70 group-hover:opacity-100"
          animate={{
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
        <span className="relative text-white font-[family-name:var(--font-space-grotesk)] font-medium">
          View Projects
        </span>
      </motion.a>
    </motion.div>
  )
} 