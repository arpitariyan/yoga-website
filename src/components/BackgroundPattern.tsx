'use client'

import { motion } from 'framer-motion'

export default function BackgroundPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0">
        {/* Floating circles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Additional decorative elements */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-4 h-4 rounded-full bg-purple-500/30"
            style={{
              right: `${15 + (i * 20)}%`,
              top: `${30 + (i * 15)}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>
    </div>
  )
}
